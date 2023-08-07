import { baseInstance, authInstance } from 'api/index'

//회원가입 -- base
export const signUp = async newAccount => {
  const res = await baseInstance.post('/signup', newAccount)
  return res.data
}

//로그인 -- base
export const signIn = async (email: string, password: string) => {
  const res = await baseInstance.post('/signin', {
    email: email,
    password: password
  })
  return res
}

//로그아웃 -- auth -- API X => **remove token**
// export const signOut = async () => {
//   const res = await authInstance.post('/signin')
//   return res.data
// }

//이메일 중복체크 -- base
export const checkEmailAvailable = async (email: string) => {
  const res = await baseInstance.post('/update', email)
  return res.data
}

//정보 수정(update) -- auth
export const updateProfile = async account => {
  const res = await authInstance.post('/findPassword', account)
  return res.data
}

//비밀번호 재설정(이메일 전송) -- auth
export const resetPassword = async (email: string) => {
  const res = await authInstance.post('/findPassword', email)
  return res.data
}
