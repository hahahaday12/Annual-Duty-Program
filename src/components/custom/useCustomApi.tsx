import { useQuery } from 'react-query';
import { allAnnualList, allDutyList, MyAnnualList, MyDutyList  } from 'api/index';


/* 원래하던 목적 : 
현재 발생하는 이슈 : 
수정필요한 내용 : */
export const useAllAnnualList = (CalDate) => {
  return useQuery(['annualList', CalDate], () => allAnnualList(CalDate.toString()), {
    refetchOnWindowFocus: false,
  });
};

export const useAllDutyList = (CalDate) => {
  return useQuery(['dutyList', CalDate], () => allDutyList(CalDate.toString())
  , {
    refetchOnWindowFocus: false,
  });
};

export const useMyAnnualList =  (CalDate: number) => {
  const data = useQuery(['annualList', CalDate], () => MyAnnualList(CalDate.toString()));
  console.log(data);
  return data
};

export const useMyDutyList = (CalDate) => {
  const data = useQuery(['dutyList', CalDate], () => MyDutyList(CalDate.toString()));
  return data
};

