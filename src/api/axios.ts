import axios, { AxiosError, AxiosInstance } from 'axios'

const authInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(
    config => {
      // 로컬스토리지에 저장되어 있는 AccessToken을 호출.
      const accessToken = localStorage.getItem('token')
      if (config.headers && accessToken) {
        // accessToken이 정상적으로 저장 => headers에 authorization 값을 추가.
        config.headers.Authorization = `${accessToken}`
      }
      // authorization을 추가한 config 반환
      return config
    },
    (error: AxiosError): Promise<AxiosError> => {
      return Promise.reject(error)
    }
  )

  return instance
}

const host =
  window.location.hostname === 'localhost'
    ? 'http://kdtmini5.kr:8080/api/user'
    : 'api'

// Authorization 설정이 없는 일반 사용자 API용 Instance
export const baseInstance: AxiosInstance = axios.create({
  baseURL: host
})

// Authorization 설정이 추가된 로그인한 사용자 API용 Instance --유저 API 에서 공통적으로 사용할 인스턴스
export const authInstance: AxiosInstance = authInterceptors(baseInstance)
