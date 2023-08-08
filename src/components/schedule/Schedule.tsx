import styled from 'styled-components'
import FullCalendar from "@fullcalendar/react"; 
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction'; 
import { useEffect, useState, useRef } from 'react';
import { MyAnnualList, MyDutyList } from 'api/index';
import { getMyTitleWithStatus} from '../custom/index';

export const Schedule =  () => {

  const [CalDate, setCalDate] = useState<number>(2023);
  const calendarRef = useRef<FullCalendar | null>(null);
  const [viewDrow, setViewDrow] = useState([{
    title:""
    ,start: ""
    ,end: ""
    ,status:""
    ,type : ""
  }]);

  useEffect(() => {
    MyAnnualList(CalDate.toString())
      .then((data) => {
        const returnDatalist = data.data.response;
        const modifiedReturnDatalist = returnDatalist.map((item) => ({
          title: getMyTitleWithStatus(item),
          start: new Date(item.startDate).toISOString(),
          end: new Date(item.endDate).toISOString(),
          type: "ANNUAL"
        }));
        console.log(data)
        setViewDrow(modifiedReturnDatalist);
        return MyDutyList(CalDate.toString()); // MyDutyList 호출을 return 합니다.
      })
      .then((data) => {
        const returnDatalist = data.data.response;
        const modifiedReturnDatalist = returnDatalist.map(item => ({
          ...item,
          title: getMyTitleWithStatus(item),
          date: new Date(item.dutyDate),
          type: "DUTY"
        }));
        setViewDrow(prevViewDrow => [...prevViewDrow ,...modifiedReturnDatalist]); // 이전의 viewDrow state를 활용하여 업데이트합니다.
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  
  },[CalDate]);

  const eventContent = ({ event }) => {
    
    return ( 
      <CustomEvent title={event._def.extendedProps.type}>
        {event.title}
      </CustomEvent>
    );
  };

  const handleDatesSet = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const date = calendarApi.getDate();
      const year = date.getFullYear();
      if (year !== CalDate) {
        setCalDate(year);
      }
    }
  };

  return(
    <ScheduleContainer>
      <TopContainer>
        <ScheduleText>내 일정보기</ScheduleText>
        <ScheduleBarbox>
          <ScheduleBarone><p>연차</p></ScheduleBarone>
          <ScheduleBartwo><p>당직</p></ScheduleBartwo>
        </ScheduleBarbox>
      </TopContainer>
      <CalendarContainer>
      <CalendarBox>  
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          events={viewDrow as unknown as EventInit[]}
          timeZone="Asia/Seoul"
          eventContent={eventContent}
          datesSet={handleDatesSet}
          ref={calendarRef}
        />
      </CalendarBox>
      </CalendarContainer>
    </ScheduleContainer>
  )
}

const ScheduleContainer = styled.div`
  width: 80%;
  position: relative;
  margin: auto;
  padding-bottom: 10%;
  top: 60px;
`
const TopContainer = styled.div`
  width: 90%;
  padding-bottom: 5%;
  position: relative;
  margin: auto;
  display: flex;
  top: 50px;
  font-family: 'LINESeedKR-Bd';
`
const ScheduleText = styled.div`
  width: 20%;
  height: 20px;
  top: 20%;
  font-size: 20px;
  position: absolute;
  left: 50px;
`
const ScheduleBarbox = styled.div`
  width: 10%;
  padding-bottom: 20px;
  top: 5px;
  position: absolute;
  right: 5%;
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

const CalendarContainer = styled.div`
  width: 82%;
  padding-bottom: 40px;
  background-color: #ffff;
  position: relative;
  top: 70px;
  margin: auto;
  border: 4px solid #FBB04C;
  border-radius: 10px;
`
const CalendarBox = styled.div`
  width: 90%;
  position: relative;
  margin: 0 auto;
  height: 80%;
  top: 20px;
  //background-color: #fdfbff;
  border-radius: 10px;
  font-family: 'LINESeedKR-Bd';

  
  .fc-theme-standard .fc-scrollgrid {
    width: 100%;
    //background-color: #9571ba;
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

  /* .fc-h-event{
    border: none;
    background-color: #c9aae6;
    margin-top: 2px;
    border-radius: 5px;
  } */

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
    margin-right: 15px;
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
  /* .fc .fc-scrollgrid-section table {
    height: 11px;
  } */

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

  /* .fc .fc-scroller-liquid-absolute {
    position: relative;
  } */

  .fc-daygrid-day-bg{
    background-color: red;
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
  overflow: hidden;
  width: 100%;
  height: 20px;
  padding: 4px;
  margin-top: 2px;
  margin: auto;
  border-radius: 3px;
  color:#ffff;
  background-color: ${({ title}) => ( title === 'ANNUAL' ? '#F97B22' : '#E76161')};
`;
