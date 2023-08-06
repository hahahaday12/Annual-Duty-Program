import { styled } from 'styled-components'
import { SignUpForm } from 'components/index'
import { signupTexts } from 'constants/index'
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
      <SignInWrapper>
        <SignInContainer>
          <SigninTitle>{signupTexts.signin}</SigninTitle>
          <SignUpForm />
        </SignInContainer>
      </SignInWrapper>
    </>
  )
}

const SignInContainer = styled.div`
  width: 568px;
  height: 100vh;
  background-color: white;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SigninTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 40px;
`

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  flex-grow: 1;
`
