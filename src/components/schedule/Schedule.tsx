import styled from 'styled-components'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const texts = {
  tab: '내 일정 보기',
  duty: '당직',
  annual: '연차'
}

// export const Schedule = () => {

export const Schedule = () => {
  return (
    // new
    <Outermost>
      <ScheduleTitle>{texts.tab}</ScheduleTitle>
      <Rectangle>
        {/*캘린더 사이즈 조정 추후 */}
        <CalendarContainer>
          <CalendarBox>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              //eventClick={}
              //dateClick={}
              //events={}
              //datesSet={}
            />
          </CalendarBox>
        </CalendarContainer>
      </Rectangle>
    </Outermost>

    // prev
    // <ScheduleContainer>
    //   <TopContainer>
    //     <ScheduleText>내 일정보기</ScheduleText>
    //     <ScheduleBarbox>
    //       <ScheduleBarone>
    //         <p>연차</p>
    //       </ScheduleBarone>
    //       <ScheduleBartwo>
    //         <p>당직</p>
    //       </ScheduleBartwo>
    //     </ScheduleBarbox>
    //   </TopContainer>
    //   <CalendarContainer>
    //     <CalendarBox>
    //       <FullCalendar
    //         plugins={[dayGridPlugin, interactionPlugin]}
    //         initialView="dayGridMonth"
    //         //eventClick={}
    //         //dateClick={}
    //         //events={}
    //         //datesSet={}
    //       />
    //     </CalendarBox>
    //   </CalendarContainer>
    // </ScheduleContainer>
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
  background-color: #f97b22;

  p {
    width: 60%;
    position: absolute;
    left: 80px;
  }
`
const ScheduleBartwo = styled(ScheduleBarone)`
  background-color: #e76161;
  margin-top: 10px;
`

const CalendarContainer = styled.div`
  width: 82%;
  padding-bottom: 40px;
  background-color: #ffff;
  position: relative;
  top: 70px;
  margin: auto;
  border: 4px solid #fbb04c;
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
    color: #fbb04c;
    max-width: 30%;
    left: 40%;
    top: 20px;
  }

  .fc-event-title fc-sticky {
    padding: 2px;
  }

  /* .fc-h-event{
    border: none;
    background-color: #c9aae6;
    margin-top: 2px;
    border-radius: 5px;
  } */

  .fc .fc-button-primary {
    border: none;
    background-color: #fbb04c;
    position: relative;
    top: 15px;
    margin-right: 18px;
  }

  .fc-button-group {
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
    color: #fbb04c;
    margin-right: 15px;
  }

  .fc-col-header-cell-cushion {
    color: #fbb04c;
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
  .fc-theme-standard th,
  .fc-theme-standard td {
    border: 0px;
  }

  .fc .fc-daygrid-day-top {
    //position: relative;
    right: 60px;
  }

  /* .fc .fc-scroller-liquid-absolute {
    position: relative;
  } */

  div > .fc-daygrid-day-frame.fc-scrollgrid-sync-inner {
    height: max-content;
    display: flex;
    position: relative;
    overflow: hidden;
  }

  /* .fc-daygrid-day-frame .fc-scrollgrid-sync-inner {
    background-color: yellow;
  } */

  .fc-event-time {
    display: none;
  }
`

const ScheduleTitle = styled.div`
  margin-top: 40px;
  padding-left: 20px;
  color: ${props => props.theme.colors.listTitle};
  font-size: 20px;
  font-weight: 700;
`

const Outermost = styled.div`
  display: flex;
  flex-direction: column;
`
const Rectangle = styled.div`
  width: 1060px;
  height: 600px;
  border-radius: 10px;
  background-color: #fff;
  margin: 24px 0;
`
