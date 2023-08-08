import styled from 'styled-components'
import FullCalendar from "@fullcalendar/react"; 
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction';
import { ModalSubmit, DuttyModal} from './index';
import { useEffect, useState, useRef } from 'react';
import { useAllAnnualList, useAllDutyList, getTitleWithStatus} from '../custom/index';


interface Item {
  email: string;
  title: string;
  startDate: string;
  endDate: string;
  username: string;
  status: 'PENDING' | 'APPROVE' | 'REJECT';
}

export const Apply =  () => {
  
  const ApplyTexts = {
    Apply:'연차/당직 신청',
    ApplyAnnual:'연차 신청',
    ApplyDuty:'당직 신청'
  }

  const calendarRef = useRef<FullCalendar | null>(null);
  const [selectedButton, setSelectedButton] = useState('ANNUAL');
  const [selectedModal, setSelectedModal] = useState<'ANNUAL_MODAL' | 'DUTY_MODAL' | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [CalDate, setCalDate] = useState<number>(2023);
  const [viewDrow, setViewDrow] = useState([{
    email:""
    ,title:""
    ,start: ""
    ,end: ""
    ,username : ""
    , status:""
  }]);

  const annualListQuery = useAllAnnualList(CalDate);
  const dutyListQuery = useAllDutyList(CalDate);

  const eventContent = ({ event }) => {
    console.log(selectedButton);
    
    return (
      <CustomEvent title={selectedButton}>
        {event.title}
      </CustomEvent>
    );
  };

  const handleButtonClick = (button: 'ANNUAL' | 'DUTY') => {
    setSelectedButton(button);
  };

  const UTCchangeKST = (date) => {
    let krDate = new Date(date);
    krDate.setHours(krDate.getHours() -9);
    return krDate;
  };

  const handleModalClick = (info:any) => {
    const dateSelect = new Date(info.date);
    const today = UTCchangeKST(new Date());

    if (dateSelect < today) {
      alert("오늘 날짜 이전은 선택할 수 없습니다.");
      return;
    }

    const dateUser = viewDrow.find((item) => {
      const start = new Date(item.start);
      const end = new Date(item.end);
      if (!start || !end) {
        return false;
      }
      const inRange = dateSelect.getTime() >= start.getTime() && dateSelect.getTime() <= end.getTime();
      return inRange;
    });
      
    
    setSelectedModal(selectedButton === 'ANNUAL' ? 'ANNUAL_MODAL' : 'DUTY_MODAL');
      setSelectedDate(dateSelect);

  };

  const CloseModal = () => {
    setSelectedModal(null);
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
    console.log("--------")
    console.log(setCalDate)
  };

  useEffect(() => {
    dataSearch();
  }, [annualListQuery.data, dutyListQuery.data, selectedButton]);

  const dataSearch = (param?) => {

    //React Query 사용하면서 데이터를 다시 가져와야할때 캐시된값으로 가져와서 
    //파라미터가 있는 값은 강제로 신규 데이터 가져올수있도록 수정
    if(param){
      dataReolad();
    }

    if (calendarRef.current) {  
      if (!annualListQuery.isLoading && !dutyListQuery.isLoading) {
        const annualListData = annualListQuery.data?.data?.response ?? [];
        const dutyListData = dutyListQuery.data?.data?.response ?? [];
        const modifiedReturnDatalist = [
          ...(selectedButton === 'ANNUAL'
            ? annualListData.map((item) => ({
                title: getTitleWithStatus(item),
                start: new Date(item.startDate).toISOString(),
                end: new Date(item.endDate).toISOString(),
              }))
            : []),
          ...(selectedButton === 'DUTY'
            ? dutyListData.map((item) => ({
                ...item,
                title: getTitleWithStatus(item),
                date: new Date(item.dutyDate),
              }))
            : []),
        ];
        console.log(modifiedReturnDatalist);
        setViewDrow(modifiedReturnDatalist);
      }
    } else {
      console.log("Not Found Year");
    } 
  }

  const dataReolad = () => {
    if (selectedButton === 'ANNUAL') {
      annualListQuery.refetch();
    } else {
      dutyListQuery.refetch();
    }
  }

  useEffect(() => {
    dataReolad();
  }, [selectedButton, CalDate]);

  return(
    <ApplyContainer>
      <TopContainer>
        <ApplyText>{ApplyTexts.Apply}</ApplyText>
      </TopContainer>
      <ButtonContainer>
        <AnnualButton onClick={() => handleButtonClick('ANNUAL')} data-select="ANNUAL">{ApplyTexts.ApplyAnnual}</AnnualButton>
        <DutyButton onClick={() => handleButtonClick('DUTY')} data-select="DUTY">{ApplyTexts.ApplyDuty}</DutyButton>
      </ButtonContainer>

      <CalendarContainer>
        <CalendarBox>  
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={(info) => handleModalClick(info)}
            eventContent={eventContent}
            datesSet={handleDatesSet}
            ref={calendarRef}
            timeZone="Asia/Seoul"
            events={viewDrow as unknown as EventInit[]}
          />
        </CalendarBox> 
      </CalendarContainer>
      {selectedModal === 'ANNUAL_MODAL' && (
        <ModalSubmit 
        close={CloseModal} 
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate} 
        searchData={dataSearch} />
      )}
      {selectedModal === 'DUTY_MODAL' && (
        <DuttyModal 
        close={CloseModal} 
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate} 
        searchData={dataSearch}/>
      )}
    </ApplyContainer>
  )
}

const ApplyContainer = styled.div`
  width: 1400px;
  position: relative;
  margin: auto;
  top: 90px;
  padding-bottom: 1000px;
  //background-color: #7486ef;
`
const TopContainer = styled.div`
  width: 90%;
  padding-bottom: 3%;
  position: relative;
  margin: auto;
  display: flex;
  top: 30px;
  font-family: 'LINESeedKR-Bd';
`
const ApplyText = styled.div`
  width: 20%;
  top: 20%;
  font-size: 20px;
  position: absolute;
  left: 50px;
  color:#374984;
`
const ButtonContainer = styled.div`
  width: 200px;
  height: 50%;
  top: 85px;
  position: relative;
`
const AnnualButton = styled.button`
  width: 150px;
  background-color: orange;
  border-radius: 10px;
  padding: 20px;
  font-weight: 800;
  border: none;
  cursor: pointer;
`

const DutyButton = styled(AnnualButton)`
  position: relative;
  background-color: #fadea1;
  margin-top: 10px;
`

const CalendarContainer = styled.div`
  width: 1300px;
  padding-bottom: 5%;
  background-color: #fff;
  position: absolute;
  top: 80px;
  left: 120px;
  border: 4px solid #374984;
  border-radius: 10px;
`

const CalendarBox = styled.div`
  width: 1200px;
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
    color:#374984;
    max-width: 30%;
    left: 40%;
    top: 20px;
  }

  .fc-event-title fc-sticky{
    padding: 2px;
  }

  .fc-h-event{
    border: none;
    background-color: #fff;
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
    color:#374984;
    margin-right: 10px;
  }

  .fc-col-header-cell-cushion{
    color:#374984;
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
    border: 1px solid black;
  }

  .fc .fc-daygrid-day-top {
    position: relative;
    right: 110px;
    top: 10px;
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
  top: 10px;
  position: absolute;
  margin: auto;
  border-radius: 3px;
  color:#ffff;
  background-color: ${({ title}) => ( title === 'ANNUAL' ? '#F97B22' : '#E76161')};
`;
