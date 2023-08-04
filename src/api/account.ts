import { baseInstance, authInstance } from 'api/index'

export const signUp = async newAccount => {
  const res = await baseInstance.post('/signup', newAccount)
  return res.data
}

export const signIn = async account => {
  const res = await baseInstance.post('/signin', account)
  return res.data
}

export const signOut = async () => {
  const res = await authInstance.post('/signin')
  return res.data
}
