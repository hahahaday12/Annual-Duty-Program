import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react';
import  {CategoryBox}  from './section/Data';
import { applyAnnual } from 'api/index';

export const ModalSubmit = ({close, selectedDate, setSelectedDate, searchData}) => {

  const SubmitText = {
    ApplyAnnual:'연차 신청',
    SelectDate:'날짜 선택',
    SelectReason:'사유선택'
  }

  const [startDate, setStartDate] = useState(selectedDate || new Date());
  const [endDate, setEndDate] = useState(selectedDate || new Date());
  const [getReason, setReason] = useState("병가")
  const [ViewData, setViewData] = useState({
    startDate: '',
    endDate: '',
    reason:''
  })


  const handleChange = (e) => {
    console.log(e.target.value)
    setReason(e.target.value);
  }

  const submitButton = () => {

    console.log(getReason);
  
    //현재 선택한 날짜에 사용자가 등록했는지 중복체크 
    const updatedData = {
      ...ViewData,
      startDate: UTCchangeKST(startDate),
      endDate: UTCchangeKST(endDate), 
      reason: getReason
    }

    if (confirm('연차 신청 하시겠습니까?')) {
      sendReg(updatedData)
    }
  }

  const UTCchangeKST = (date) => {
    let krDate = new Date(date);
    krDate.setHours(krDate.getHours() + 9);
    return krDate.toISOString();
  };

  const sendReg = async (updatedData: any) => {
    try {
      const response = await applyAnnual(updatedData)
      if (response.status === 200) {
        alert('연차가 신청 되었습니다.')
        //onSearch(updatedData.date)
        searchData('re');
        close();
      } else {
        alert('등록 실패했습니다. 관리자에게 문의하세요.')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const renderBox = () => CategoryBox.map((item) => {
    return(
        <option key={item.id}>{item.name}</option>      
    )
  })

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return(
    <>
    <ModalContent>
      <Centerbox>
      <XbuttonBox onClick={close}>x</XbuttonBox>
        <ModalHeader>
          <p>{SubmitText.ApplyAnnual}</p>
        </ModalHeader>
        <PickDate>{SubmitText.SelectDate}</PickDate>
        <DateContainer>
          <DatePicker
            selected={selectedDate} 
            minDate={new Date()}
            onChange={(date) => setSelectedDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="yyyy/MM/dd"
            filterDate={isWeekday}
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            dateFormat="yyyy/MM/dd"
            filterDate={isWeekday}
          />
        </DateContainer>
        <PickReason>{SubmitText.SelectReason}</PickReason>
        <SelectContainer>
          <Selectbox onChange={(e) => handleChange(e)}>
            {renderBox()}
          </Selectbox>
        </SelectContainer>
        <Register onClick={submitButton}>등록</Register>
      </Centerbox>
    </ModalContent>
    </>
  )
}

const ModalContent = styled.div`
  width: 400px;
  background-color: #ffff;
  position: absolute;
  top: 150px;
  z-index:100;
  left: 0;
  right: 0;
  margin: auto;
  border: 2px solid #FBB04C;
  border-radius: 10px;
  font-family: 'LINESeedKR-Bd';
`

const Centerbox = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
  //background-color: beige;
  padding-bottom: 80px;
`

const ModalHeader = styled.p`
  width: 100%;
  display: flex;
  //background-color: pink;
  margin: auto;
  font-size: 25px;
  font-weight: bold;
  position: relative;
  margin-top: 20px;

  p {
    width: 30%;
    position: relative;
    //background-color: aliceblue;
    margin: auto;
  }
`
const PickDate = styled.div`
    width: 20%;
    //background-color: aliceblue;
    position: relative;
    top: 20px;
    margin: auto;
`

const DateContainer = styled.div`
  width: 230px;
  height: 50px;
  /* background-color: red; */
  margin-top: 30px;
  display: flex;
  gap: 30px;
  left: 0px;
  right: 10px;
  top: 40px;
  margin: auto;
  position: relative;

  .react-datepicker__input-container{
 
    input{
      width: 100px;
      height: 40px;
      padding: 10px;
      font-family: 'LINESeedKR-Bd';
      background-color: #FBB04C;
      border-radius: 5px;
      border: none;
      cursor: pointer;
    }
  }

.react-datepicker__tab-loop{
  position: absolute;
}
`
  
const XbuttonBox = styled.button`
  width: 20px;
  position: absolute;
  top: -10px;
  right: 10px;
  z-index: 100;
  border: 2px solid #FBB04C;
  background-color: #ffff;
` 
const PickReason = styled.div`
  width: 20%;
  padding-bottom: 10px;
  top: 50px;
  margin: auto;
  position: relative;
`
const SelectContainer = styled.div`
  width: 30%;
  position: relative;
  margin-top: 60px;
  margin-left: 120px;
`
const Selectbox = styled.select`
  width: 100%;
  background-color: #fefefe;
  padding: 10px;
  border: 2px solid #FBB04C;
  border-radius: 10px;
  font-family: 'LINESeedKR-Bd';
`

const Register = styled.button`
  width: 200px;
  padding: 10px;
  position: relative;
  top: 30px;
  margin-left: 80px;
  padding-bottom: 10px;
  background-color: #FBB04C;
  border: none ;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`