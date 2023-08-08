import styled from 'styled-components'
import { useNavigate, } from 'react-router-dom'; 
import { AllDataList } from './index';
import { useMyAnnualList, useMyDutyList} from '../custom/index';


// 내 연차/당직 api 
// 전체 연차 리스트 , 당직 api

export const Home =  () => {
  
  const navigate = useNavigate();

  const onChangeClick = () => {
    navigate('/application');
  }


  const { data: annualData,  isLoading: isAnnualLoading, isError: isAnnualError } = useMyAnnualList(2023);
  const { data: dutyData,  isLoading: isDutyLoading, isError: isDutyError } = useMyDutyList(2023);

  if (isAnnualLoading) {
    return <div>Loading...</div>;
  }

  if (isAnnualError) {
    return <div>Error: 데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  if (isDutyLoading) {
    return <div>Loading...</div>;
  }

  if (isDutyError) {
    return <div>Error: 데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  const extractDate = (dateString) => {
    const date = dateString.split('T')[0];
    return date;
  };

  return(
    <HomeContainer>
      <HomeHeader>
      <HomeText>홈</HomeText>
      <HomeApply
        onClick={onChangeClick}>연차/당직 신청</HomeApply>
      </HomeHeader>
      <CalendarHeader>
        <ScheduleBarone><p>연차</p></ScheduleBarone>
        <ScheduleBartwo><p>당직</p></ScheduleBartwo>
      </CalendarHeader>
      <CategoryBox>
        <AnnualBox>
          <AnnualBoxTextHeader>
            <h3>연차 신청 현황</h3>
            <p>남은 연차 12개</p>
          </AnnualBoxTextHeader>
          <AuualListBox>
            {annualData?.data.response && annualData?.data.response.map((item, index) => (
              <AuualList key={index}>
                <h2>📌 {extractDate(item.startDate)} ~ {extractDate(item.endDate)}</h2>
                <StatusBox>{item.status}</StatusBox>
                <CancelBox>취소</CancelBox>
              </AuualList>
            ))}
          </AuualListBox>
        </AnnualBox>
        <DutyBox>
          <DutyBoxTextHeader>
            <h3>당직 신청 현황</h3>
          </DutyBoxTextHeader>
          <DutyListBox>
            {dutyData?.data.response && dutyData?.data.response.map((el, index) => (
               <DutyList key={index}>
                <h2>📌 {extractDate(el.dutyDate)}</h2>
                <StatusBox>{el.status}</StatusBox>             
                <CancelBox>취소</CancelBox> 
               </DutyList> 
            ))}
          </DutyListBox>
        </DutyBox>
      </CategoryBox>
      <AllDataList/>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  width: 80%;
  height: 1100px;
  top: 100px;
  position: relative;
  margin: auto;
  //background-color: #f17c7c;
  font-family: 'LINESeedKR-Bd';
`
const HomeHeader = styled.div`
  width: 80%;
  height: 40px;
  top: 20px;
  position: absolute;
  display: flex;
`
const CalendarHeader = styled.div`
  width: 10%;
  height: 40px;
  top: 3%;
  right: -9%;
  //background-color: #82aaf9;
  position: absolute;
`

const ScheduleBarone = styled.div`
  width: 50%;
  height: 15px;
  border-radius: 30px;
  background-color: #F97B22;

  p {
    width: 60%;
    position: absolute;
    left: 80px;
  }
`
const ScheduleBartwo = styled(ScheduleBarone)`
  background-color: #E76161;
  margin-top: 10px;
`

const HomeText = styled.div`
  width: 10%;
  height: 20px;
  font-size: 20px;
`
const HomeApply = styled.button`
  width: 13%;
  background-color: #FBB04C;
  color:#fff;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  height: 40px;
  position: absolute;
  left: 52%;
  font-weight: bold;
  cursor: pointer;
`

const CategoryBox = styled.div`
  width: 36%;
  padding-bottom: 500px;
  //background-color: blue;
  position: relative;
  top: 80px;
  left: 1%;
`

const AnnualBox = styled.div`
  width: 550px;
  padding-bottom: 70px;
  background-color: #ffff;
  position: absolute;
  top: 10px;
  border-radius: 20px;
  border: 4px solid #9384D1;
  background-color: #ffff;
  box-shadow: rgba(7, 6, 6, 0.2) 4px 0px 20px 0px;
`

const AnnualBoxTextHeader = styled.div`
  width: 90%;
  height: 20px;
  display: flex;
  position: absolute;
  left: 50px;
  font-size: 18px;
  top: 20px;

  p{
    font-size: 13px;
    position: relative;
    left: 30%;
    margin-top: 5px;
  }
`

const AuualListBox = styled.div`
  width: 453px;
  height:210px;
  //background-color: tan;
  position: relative;
  top: 40px;
  //left: 50px;
  margin: auto;
  overflow-y: auto;
  max-height: 400px;
`

const AuualList = styled.div`
  width: 100%;
  height: 30px;
  margin: auto;
  background-color: yellow;
  display: flex;
  //position: absolute;
  margin-top: 20px;

  h2 {
    width: 250px;
    padding: 7px;
    padding-bottom: 2%;
    //position: absolute;
    background-color: pink;
  }
`
const StatusBox = styled.div`
  width: 70px;
  border-radius: 5px;
  background-color: gray;
  position: absolute;
  right: 23%;
  font-size: 12px;
  padding: 8px;
  color: #ffff;
`
const CancelBox = styled(StatusBox)`
  right: 2%;
  padding: 10px 10px 7px 22px;
  background-color: #212A3E;
`

const DutyBox = styled(AnnualBox)`
  top: 80%;
`
const DutyBoxTextHeader = styled(AnnualBoxTextHeader)`
`
const DutyListBox = styled(AuualListBox)`
`
const DutyList = styled(AuualList)`
  //background-color: #f17c7c;
  font-family: 'LINESeedKR-Bd';
`


