import { styled } from 'styled-components'
import { useRef, useEffect, useState } from 'react'
import { signinTexts } from 'constants/index'
import { signIn } from 'api/account'
import { InputField, StyledButton, SignUpCallToAction } from 'components/index'
import { AxiosError, AxiosHeaders, AxiosResponse } from 'axios'
import { useNavigate } from 'react-router-dom'

export const SignInForm = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  //응답이 존재할 시 header내 token값을 localStorage에 저장
  const handleSignIn = async () => {
    try {
      const res: AxiosResponse = await signIn(email, password)
      let headers = res.headers
      if (headers instanceof AxiosHeaders) {
        let jwtToken = headers.get('authorization')
        localStorage.setItem('token', jwtToken as string)
        navigate('/home')
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        const error = err.response?.data.error.message
        alert(error)
      }
    }
  }

  return (
    <StyledForm method="post">
      <InputField
        fn={setEmail}
        val={email}
        title={signinTexts.email}
        ph={signinTexts.emailPh}
        inputRef={inputRef}
        type={'text'}></InputField>
      <InputField
        fn={setPassword}
        val={password}
        title={signinTexts.pwd}
        ph={signinTexts.pwdPh}
        inputRef={null}
        type={'password'}></InputField>

      <StyledButton
        onClick={e => {
          e.preventDefault()
          handleSignIn()
        }}>
        {signinTexts.btn}
      </StyledButton>

      <SignUpCallToAction />
    </StyledForm>
  )
}
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 150px;
`
