import { SignUpForm } from 'components/form/index'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export const SignUp = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem(
      // import.meta.env.VITE_STORAGE_KEY_ACCESSTOKEN
      ''
    )
    if (token) {
      navigate('/') // Redirect to the main page if the user is already logged in
    }
  }, [])

  return (
    <>
      <SignUpForm />
    </>
  )
}
