import axios from 'axios'

const headers = {
  'Content-Type': 'application/json',
  
  withCredentials: true
}

const axiosInstance = axios.create({
  baseURL: 'http://130.162.141.224:8080/api/user',
  headers
})

export const applyAnnual = async (updatedData: any) => {
  const APPLYANNUALURL = '/vacation/add'
  const res = await axiosInstance.post(APPLYANNUALURL, updatedData)
  return res
}

export const applyDuty = async (updatedData: any) => {
  const DUTYURL = `/duty/add`
  const res = await axiosInstance.post(DUTYURL, updatedData)
  return res
}

export const allAnnualList = async (year: string) => {
    const ALLANNUALURL = `/vacation/all/list?year=${year}`
    const res = await axiosInstance.get(ALLANNUALURL)
    return res
}


export const allDutyList = async (year: string) => {
  const ALLDUTYURL = `/duty/all/list?year=${year}`
  const res = await axiosInstance.get(ALLDUTYURL)
  return res
}

export const MyAnnualList = async (year:string) => {
  const MYANNUALURL = `/vacation/myvacation?year=${year}`
  const res = await axiosInstance.get(MYANNUALURL)
  return res
}

export const MyDutyList = async (year:string) => {
  const MYDUTYURL = `/duty/myduty?year=${year}`
  const res = await axiosInstance.get(MYDUTYURL)
  return res
}

export const DeleteAnnualList = async (year:string) => {
  const MYANNUALURL = `/vacation/myvacation?year=${year}`
  const res = await axiosInstance.get(MYANNUALURL)
  return res
}

export const DeleteDutyList = async (year:string) => {
  const MYDUTYURL = `/duty/myduty?year=${year}`
  const res = await axiosInstance.get(MYDUTYURL)
  return res
}


