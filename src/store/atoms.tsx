import { atom } from 'recoil'

export const remainState = atom({
  key: 'remainState', // 고유한 키
  default: 0 // 초기값
})

export const imageState = atom({
  key: 'imageState',
  default: ''
})

export const userState = atom({
  key: 'userState',
  default: ''
})
