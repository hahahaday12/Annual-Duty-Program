import styled from 'styled-components'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useState } from 'react'

const texts = {
  apply: '연차/당직 신청'
}

export const Apply = () => {
  const [selectedButton, setSelectedButton] = useState('ANNUAL')

  // const eventContent = ({ event }) => {
  //   return <CustomEvent title={event.title}>{event.title}</CustomEvent>
  // }

  const handleButtonClick = button => {
    setSelectedButton(button)
  }

  return (
    <ApplyContainer>
      <ApplyTitle>
        {/* 필요시 flex 적용 후 연차/당직 버튼 추가 */}
        {texts.apply}
      </ApplyTitle>
      <Rectangle> </Rectangle>
    </ApplyContainer>
  )

  // 기존 레이아웃

  // return(
  //   <ApplyContainer>
  //     <TopContainer>
  //       <ApplyText>연차/당직 신청</ApplyText>
  //     </TopContainer>
  //     <ButtonContainer>
  //       <AnnualButton onClick={() => handleButtonClick('ANNUAL')} data-select="ANNUAL">연차신청</AnnualButton>
  //       <DutyButton onClick={() => handleButtonClick('DUTY')} data-select="DUTY">당직신청</DutyButton>
  //     </ButtonContainer>

  //     <CalendarContainer>
  //       <CalendarBox>
  //         <FullCalendar
  //           plugins={[dayGridPlugin, interactionPlugin]}
  //           initialView="dayGridMonth"
  //           events={
  //             selectedButton === 'ANNUAL'
  //               ? [
  //                   {
  //                     title: 'duty',
  //                     start: '2023-07-02',
  //                     end: '2023-07-02'
  //                   },
  //                   {
  //                     title: 'annual',
  //                     start: '2023-07-21',
  //                     end: '2023-07-21'
  //                   }
  //                 ]
  //               : selectedButton === 'DUTY'
  //               ? [
  //                   {
  //                     title: 'duty',
  //                     start: '2023-07-02',
  //                     end: '2023-07-02'
  //                   }
  //                 ]
  //               : []
  //           }
  //           eventContent={eventContent}

  //         />
  //       </CalendarBox>
  //     </CalendarContainer>
  //   </ApplyContainer>
  // )
}

// const ApplyContainer = styled.div`
//   width: 80%;
//   position: relative;
//   margin: auto;
//   padding-bottom: 47%;
//   background-color: #7486ef;
// `
const ApplyContainer = styled.div``

const Rectangle = styled.div`
  width: 1060px;
  height: 600px;
  border-radius: 10px;
  background-color: #fff;
  margin: 24px 0;
`
const ApplyTitle = styled.div`
  margin-top: 40px;
  padding-left: 20px;
  color: ${props => props.theme.colors.listTitle};
  font-size: 20px;
  font-weight: 700;
`
// const TopContainer = styled.div`
//   width: 90%;
//   padding-bottom: 3%;
//   position: relative;
//   margin: auto;
//   display: flex;
//   top: 30px;
//   font-family: 'LINESeedKR-Bd';
//   //background-color: yellow;
// `
// const ApplyText = styled.div`
//   width: 20%;
//   top: 20%;
//   font-size: 20px;
//   position: absolute;
//   left: 50px;
// `
// const ButtonContainer = styled.div`
//   width: 20%;
//   height: 50%;
//   top: 85px;
//   left: 7%;
//   position: relative;
// `
// const AnnualButton = styled.button`
//   width: 150px;
//   background-color: orange;
//   border-radius: 10px;
//   padding: 20px;
//   font-weight: 800;
//   border: none;
//   cursor: pointer;
// `

// const DutyButton = styled(AnnualButton)`
//   background-color: #fadea1;
//   margin-top: 20px;
// `

// const CalendarContainer = styled.div`
//   width: 70%;
//   padding-bottom: 5%;
//   background-color: #fff;
//   position: absolute;
//   top: 120px;
//   left: 17%;
//   border: 4px solid #FBB04C;
//   border-radius: 10px;
// `

// const CalendarBox = styled.div`
//   width: 95%;
//   position: relative;
//   margin: 0 auto;
//   top: 20px;
//   border-radius: 10px;
//   font-family: 'LINESeedKR-Bd';

//   .fc-theme-standard .fc-scrollgrid {
//     width: 100%;
//     border-radius: 10px;
//     border: none;
//   }

//   .fc-header-toolbar {
//     width: 100%;
//     position: relative;
//     border-radius: 10px 10px 0px 0px;
//     padding-bottom: 10px;
//   }

//   .fc .fc-toolbar-title {
//     position: absolute;
//     margin: auto;
//     color:#FBB04C;
//     max-width: 30%;
//     left: 40%;
//     top: 20px;
//   }

//   .fc-event-title fc-sticky{
//     padding: 2px;
//   }

//   .fc-h-event{
//     border: none;
//     background-color: #fff;
//   }

//   .fc .fc-button-primary{
//     border: none;
//     background-color: #FBB04C;
//     position: relative;
//     top: 15px;
//     margin-right: 18px;
//   }

//   .fc-button-group{
//     position: absolute;
//     border: 0;
//     outline: 0;
//     width: 5rem;
//     left: 10%;
//   }

//   .fc .fc-daygrid-day-number {
//     position: relative;
//     right: 20px;
//     font-size: 17px;
//     font-weight: bold;
//     color:#FBB04C;
//     margin-right: 10px;
//   }

//   .fc-col-header-cell-cushion{
//     color:#FBB04C;
//     width: 90%;
//     height: 50px;
//     font-size: 18px;
//     padding: 10px;
//     font-weight: bold;
//   }

//   /* 요일 행 */
//   .fc .fc-scrollgrid-section table {
//     height: 11px;
//   }

//   table .fc-scrollgrid-sync-table {
//     width: 538px;
//     height: 700px;
//   }

// /* border값 초기화 */
//   .fc-theme-standard th, .fc-theme-standard td {
//     border: 0px;
//   }

//   .fc .fc-daygrid-day-top {
//     //position: relative;
//     right: 60px;
//   }

//   div > .fc-daygrid-day-frame.fc-scrollgrid-sync-inner{
//     height: max-content;
//     display: flex;
//     position: relative;
//     overflow: hidden;
//   }

//   /* .fc-daygrid-day-frame .fc-scrollgrid-sync-inner {
//     background-color: yellow;
//   } */

//   .fc-event-time{
//     display: none;
//   }
// `
// const CustomEvent = styled.div`
//   border: none;
//   font-size: 15px;
//   height: 20px;
//   padding: 5px;
//   margin-top: 2px;
//   border-radius: 5px;
//   background-color: ${({ title }) => ( title === 'annual' ? '#E76161' : '#F97B22')};
// // `;
