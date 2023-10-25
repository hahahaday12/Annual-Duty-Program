import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { AllDataList } from './index'
import { DeleteAnnualList, DeleteDutyList } from 'api/index'
import { useCallback, useEffect, useState } from 'react'
import { MyAnnualList, MyDutyList } from 'api/index'
import { IoReload } from 'react-icons/io5'
import { ExCelbox } from 'components/index'
import { AnnualContainer } from 'components/index'
import { DutyContainer } from './duty/dutyContainer'
import { mainTexts, commonTexts } from 'constants/index'

export const Home = () => {
  const [CalDate, setCalDate] = useState<number>(2023)
  const [annualDataList, setAnnualDataList] = useState([])
  const [dutyDataList, setDutyDataList] = useState([])

  const navigate = useNavigate()

  const onChangeClick = () => {
    navigate('/application')
  }

  const searchData = useCallback(() => {
    MyAnnualList(CalDate.toString())
      .then(data => {
        const returnDatalist = data.data.response
        setAnnualDataList(returnDatalist)
        return MyDutyList(CalDate.toString())
      })
      .then(data => {
        const returnDatalist = data.data.response
        setDutyDataList(returnDatalist)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [CalDate])

  useEffect(() => {
    searchData()
  }, [CalDate])

  const extractDate = dateString => {
    if (dateString) {
      const date = dateString.split('T')[0]
      return date
    }
    return ''
  }

  const deleteButton = useCallback(
    async (type: string, id: string) => {
      if (!window.confirm(`${type}를 취소 하시겠습니까?`)) {
        alert(mainTexts.cancelText)
        return
      }

      try {
        let deleteFunction
        if (type === commonTexts.annualText) {
          deleteFunction = DeleteAnnualList
        } else {
          deleteFunction = DeleteDutyList
        }

        const response = await deleteFunction(id)
        if (response.status === 200) {
          alert(`${type}가 취소되었습니다.`)
          searchData()
        } else {
          alert(mainTexts.failCancelText)
        }
      } catch (error) {
        console.error(error)
        alert(mainTexts.areadyApply)
      }
    },
    [searchData]
  )

  const datalist = useCallback(datalist => {
    const filterViewData = datalist.filter(item => {
      return item.status !== 'CANCELLED'
    })
    return filterViewData
  }, [])

  const onClickLoad = () => {
    window.location.reload()
  }

  return (
    <HomeContainer>
      <Boards>
        <AnnualContainer
          deleteButton={deleteButton}
          datalist={datalist}
          annualDataList={annualDataList}
          extractDate={extractDate}
        />

        <DutyContainer
          deleteButton={deleteButton}
          dutyDataList={dutyDataList}
          extractDate={extractDate}
          datalist={datalist}
        />
      </Boards>
      <CenterBarBox>
        <ApplyBox>
          <HomeApply onClick={onChangeClick}>
            {mainTexts.applyAnnualDuty}
          </HomeApply>
          <IoReload
            onClick={onClickLoad}
            style={{
              fontSize: '28px',
              color: '#1c3879d9',
              cursor: 'pointer',
              marginLeft: '16px',
              marginTop: '5px',
              position: 'absolute'
            }}
          />
        </ApplyBox>
        <CenterBoxInner>
          <ExCelbox />
          <BarBox>
            <ScheduleBarone>
              <p>{commonTexts.annualText}</p>
            </ScheduleBarone>
            <ScheduleBartwo>
              <p>{commonTexts.dutyText}</p>
            </ScheduleBartwo>
          </BarBox>
        </CenterBoxInner>
      </CenterBarBox>
      <CalendarBoard>
        <AllDataList />
      </CalendarBoard>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  width: 100%;
  height: 1100px;
  top: 20px;
  position: relative;
  margin: auto;
  font-family: 'LINESeedKR-Bd';
`
const Boards = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 50px;
  justify-content: space-between;
`
const Board = styled.div`
  width: 518px;
  height: 266px;
  border-radius: 10px;
  background-color: #fff;
  padding-bottom: 50px;
  /* border: 2px solid #696ea6; */
  box-shadow: #50515985 1px 2px 7px 1px;
`

const BoxText = styled.div`
  width: 450px;
  padding-bottom: 10px;
  position: relative;
  left: 30px;
  top: 20px;
  color: ${props => props.theme.colors.listTitle};
  font-size: 15px;
  font-weight: 700;
  display: flex;
  gap: 250px;
`

const AnnualBoard = styled(Board)``
const DutyBoard = styled(Board)``

const CenterBarBox = styled.div`
  position: relative;
  top: 30px;
  display: flex;
  justify-content: space-between;
`
const ApplyBox = styled.div`
  width: 250px;
  position: relative;
  margin-top: 13px;
`
const HomeApply = styled.button`
  width: 150px;
  background-color: #1c3879d9;
  color: #fff;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  height: 40px;
  font-weight: bold;
  cursor: pointer;
`

const CenterBoxInner = styled.div`
  width: 380px;
  height: 50px;
  position: relative;
`

const ExcelBox = styled.div`
  width: 180px;
  padding-bottom: 5px;
  float: left;
  border-radius: 3px;
  margin-top: 10px;
  padding-left: 10px;
  background-color: #1b9c85;
  font-size: 10px;
  cursor: pointer;
`
const Optionbox = styled.select`
  background-color: #1b9c85;
  border: none;
  color: #ffff;
  font-weight: bold;
  position: relative;
  bottom: 6px;
  &:focus {
    outline: none;
  }
`
const BarBox = styled.div`
  width: 140px;
  margin-left: 200px;
  margin-top: 12px;
`
const ScheduleBarone = styled.div`
  width: 100px;
  height: 15px;
  border-radius: 30px;
  background-color: #4a42e4d4;
  position: relative;

  p {
    width: 30px;
    margin-left: 110px;
  }
`
const ScheduleBartwo = styled(ScheduleBarone)`
  background-color: #8696fe;
  margin-top: 10px;
`

const CalendarBoard = styled.div`
  width: 1200px;
  position: relative;
  display: flex;
  justify-content: center;
  top: 40px;
  right: 70px;
  border-radius: 10px;
  padding-bottom: 900px;
`

const AuualListBox = styled.div`
  width: 453px;
  height: 200px;
  position: relative;
  top: 30px;
  margin: auto;
  overflow-y: auto;
  max-height: 200px;
`

const AuualList = styled.div`
  width: 100%;
  height: 30px;
  margin: auto;
  display: flex;
  margin-top: 20px;

  h2 {
    width: 250px;
    padding: 7px;
    padding-bottom: 2%;
  }
`
const StatusBox = styled.div`
  width: 70px;
  border-radius: 5px;
  background-color: gray;
  position: absolute;
  right: 110px;
  font-size: 12px;
  padding: 8px;
  padding-left: 13px;
  color: #ffff;
`
const CancelBox = styled(StatusBox)`
  right: 20px;
  background-color: #212a3e;
  padding-left: 25px;
`

const DutyListBox = styled(AuualListBox)``
const DutyList = styled(AuualList)`
  font-family: 'LINESeedKR-Bd';
`
