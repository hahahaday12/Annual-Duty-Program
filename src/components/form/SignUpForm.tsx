import { styled } from 'styled-components'
import { useRef, useEffect, useState } from 'react'
import { signupTexts } from 'constants/index'
import { signUp } from 'api/index'
import {
  InputField,
  SignInCallToAction,
  DatePickerForm,
  EmailValidationForm
} from 'components/index'
import { dateFormatter } from 'utils/index'
import { AxiosError, AxiosResponse } from 'axios'
import { useNavigate } from 'react-router-dom'

export const SignUpForm = () => {
  const navigate = useNavigate()
  // 유저 입력 데이터들
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [verification, setVerification] = useState<string>('')
  const [startDate, setStartDate] = useState(new Date())
  // 이메일 중복확인 데이터
  const [isEmailInUse, setIsEmailInUse] = useState(true)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  const handleSignUp = async e => {
    e.preventDefault()
    try {
      // 유저 입력 데이터들 부재시
      if (!(email && password === verification && startDate && name)) {
        alert(`${signupTexts.requiredData}`)
        return
      }
      // 이메일 중복확인 미완료시
      if (!isEmailInUse) {
        alert(`${signupTexts.validationRequired}`)
        return
      }
      const res: AxiosResponse = await signUp({
        password: password,
        email: email,
        hireDate: dateFormatter(startDate),
        username: name
      })
      // 회원가입 성공시 로그인 화면으로 이동
      if (res.status === 200) {
        navigate('/')
        return
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        const error = e.response?.data.error.message
        alert(error)
      }
    }
  }

  return (
    <StyledForm method="post">
      <InputField
        fn={setName}
        val={name}
        title={signupTexts.username}
        ph={signupTexts.usernameText}
        inputRef={inputRef}
        type={'text'}></InputField>
      <EmailValidationForm
        setEmail={setEmail}
        email={email}
        title={signupTexts.email}
        ph={signupTexts.emailText}
        setIsEmailInUse={setIsEmailInUse}
      />
      <InputField
        fn={setPassword}
        val={password}
        title={signupTexts.password}
        ph={signupTexts.pwdText}
        inputRef={null}
        type={'password'}></InputField>
      <InputField
        fn={setVerification}
        val={verification}
        title={signupTexts.passwordCheck}
        ph={signupTexts.pwdCheckText}
        inputRef={null}
        type={'password'}></InputField>
      <DatePickerForm
        date={startDate}
        setDate={setStartDate}
      />
      <StyledButton onClick={handleSignUp}>
        {signupTexts.registerBtn}
      </StyledButton>
      <SignInCallToAction />
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const StyledButton = styled.button`
  all: unset;
  width: 434px;
  height: 60px;
  color: #fff;
  text-align: center;
  background-color: ${props => props.theme.colors.primaryBlue};
  border-radius: 10px;
  margin-bottom: 36px;
  margin-top: 18px;
  cursor: pointer;
`
