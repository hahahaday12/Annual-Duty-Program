import styled from 'styled-components'
import FullCalendar from "@fullcalendar/react"; 
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction';
import { useNavigate, Link } from 'react-router-dom'; 
import { useState } from 'react';

export const Home =  () => {

  const navigate = useNavigate();
  const [annual, setAnnual] = useState([
    {id:1 , date:"2023년 7월 1일", status:"승인대기", cancel:"취소"},
    {id:1 , date:"2023년 7월 10일", status:"승인대기", cancel:"취소"},
    {id:1 , date:"2023년 7월 5일", status:"승인대기", cancel:"취소"},
    {id:1 , date:"2023년 7월 20일", status:"승인대기", cancel:"취소"},
  ])

  const [duty, setDuty] = useState([
    {id:1 , date:"2023년 7월 2일", status:"승인대기", cancel:"취소"},
    {id:1 , date:"2023년 7월 11일", status:"승인대기", cancel:"취소"},
    {id:1 , date:"2023년 7월 6일", status:"승인대기", cancel:"취소"},
    {id:1 , date:"2023년 7월 21일", status:"승인대기", cancel:"취소"},
  ])
 
  const onChangeClick = () => {
    navigate('/application');
  }

  const eventContent = ({ event }) => {
    return (
      <CustomEvent title={event.title}>
        {event.title}
      </CustomEvent>
    );
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
            {annual.map((el, index) => (
               <AuualList>
                  <h2>{el.date}</h2>
                  <StatusBox>승인대기</StatusBox>             
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
            {duty.map((el, index) => (
               <DutyList>
                  <h2>{el.date}</h2>
                  <StatusBox>승인대기</StatusBox>             
                  <CancelBox>취소</CancelBox>
               
               </DutyList> 
            ))}
          </DutyListBox>
        </DutyBox>
      </CategoryBox>
      <CalendarContainer>
        <CalendarBox>  
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={[
              {
                title: 'duty',
                //status: 'duty',
                title: '당직',

                start: '2023-07-02',
                end: '2023-07-02'
              },
              {
                title: 'annual',
                //status: 'annual',
                start: '2023-07-21',
                title: '연차',
                start: '2023-07-22',
                end: '2023-07-023'
              }
            ]}
            //eventClick={}
            //dateClick={}
            //events={}
            //datesSet={}
            eventContent={eventContent}
          />
        </CalendarBox>
      </CalendarContainer>
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
  width: 90%;
  padding-bottom: 10%;
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
  width: 80%;
  height:300px;
  ///background-color: tan;
  position: relative;
  top: 60px;
  left: 10%;
  overflow-y: auto;
  max-height: 300px;
`

const AuualList = styled.div`
  width: 100%;
  height: 30px;
  margin: auto;
  //background-color: yellow;
  display: flex;
  position: relative;
  margin-top: 20px;

  h2 {
    width: 40%;
    padding: 7px;
    padding-bottom: 2%;
    position: absolute;
    //background-color: pink;
  }
`
const StatusBox = styled.div`
  width: 20%;
  max-width: 20%;
  //height: 30px;
  border-radius: 5px;
  background-color: gray;
  position: absolute;
  right: 23%;
  font-size: 12px;
  padding: 10px;
  color: #ffff;
`
const CancelBox = styled(StatusBox)`
  right: 2%;
  padding: 10px 10px 10px 22px;
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
  width: 90%;
  padding-bottom: 10%;
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
  width: 80%;
  height:300px;
  ///background-color: tan;
  position: relative;
  top: 60px;
  left: 10%;
  overflow-y: auto;
  max-height: 300px;
`

const AuualList = styled.div`
  width: 100%;
  height: 30px;
  margin: auto;
  //background-color: yellow;
  display: flex;
  position: relative;
  margin-top: 20px;

  h2 {
    width: 40%;
    padding: 7px;
    padding-bottom: 2%;
    position: absolute;
    //background-color: pink;
  }
`
const StatusBox = styled.div`
  width: 20%;
  max-width: 20%;
  //height: 30px;
  border-radius: 5px;
  background-color: gray;
  position: absolute;
  right: 23%;
  font-size: 12px;
  padding: 10px;
  color: #ffff;
`
const CancelBox = styled(StatusBox)`
  right: 2%;
  padding: 10px 10px 10px 22px;
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
`

const CalendarContainer = styled.div`
  width: 70%;
  padding-bottom: 5%;
  background-color: #fff;
  position: absolute;
  top: 90px;
  left: 40%;
  border: 4px solid #FBB04C;
  border-radius: 10px;
`
const CalendarContainer = styled.div`
  width: 70%;
  padding-bottom: 5%;
  background-color: #fff;
  position: absolute;
  top: 90px;
  left: 40%;
  border: 4px solid #FBB04C;
  border-radius: 10px;
`

const CalendarBox = styled.div`
  width: 95%;
  position: relative;
  margin: 0 auto;
  top: 20px;
  border-radius: 10px;
  font-family: 'LINESeedKR-Bd';

  .fc-theme-standard .fc-scrollgrid {
    width: 100%;
    border-radius: 10px;
    border: none;
  }
  
  .fc-header-toolbar {
    width: 100%;
    position: relative;
    border-radius: 10px 10px 0px 0px;
    padding-bottom: 10px;
  }

  .fc .fc-toolbar-title {
    position: absolute;
    margin: auto;
    color:#FBB04C;
    max-width: 30%;
    left: 40%;
    top: 20px;
  }

  .fc-event-title fc-sticky{
    padding: 2px;
  }

  .fc-h-event{
    border: none;
    background-color: #c9aae6;
    margin-top: 2px;
    border-radius: 5px;
  }

  .fc .fc-button-primary{
    border: none;
    background-color: #FBB04C;
    position: relative;
    top: 15px;
    margin-right: 18px;
  }

  .fc-button-group{
    position: absolute;
    border: 0;
    outline: 0;
    width: 5rem;
    left: 10%;
  }

  .fc .fc-daygrid-day-number {
    position: relative;
    right: 20px;
    font-size: 17px;
    font-weight: bold;
    color:#FBB04C;
    margin-right: 10px;
  }

  .fc-col-header-cell-cushion{
    color:#FBB04C;
    width: 90%;
    height: 50px;
    font-size: 18px;
    padding: 10px;
    font-weight: bold;
  }

  /* 요일 행 */
  .fc .fc-scrollgrid-section table {
    height: 11px;
  }

  table .fc-scrollgrid-sync-table {
    width: 538px;
    height: 700px;
  }

/* border값 초기화 */
  .fc-theme-standard th, .fc-theme-standard td {
    border: 0px;
  }

  .fc .fc-daygrid-day-top {
    //position: relative;
    right: 60px;
  }

  div > .fc-daygrid-day-frame.fc-scrollgrid-sync-inner{
    height: max-content;
    display: flex;
    position: relative;
    overflow: hidden;
  } 
  
  /* .fc-daygrid-day-frame .fc-scrollgrid-sync-inner {
    background-color: yellow;
  } */

  .fc-event-time{
    display: none;
  }
`
const CustomEvent = styled.div`
  border: none;
  font-size: 15px;
  height: 20px;
  padding: 5px;
  margin-top: 2px;
  border-radius: 5px;
  background-color: ${({ title }) => ( title === 'annual' ? '#E76161' : '#F97B22')};
`;
