import { styled } from 'styled-components'
import { useRef, useEffect } from 'react'
import { signinTexts } from 'constants/index'
import { InputField, StyledButton, SignUpCallToAction } from 'components/index'

export const SignInForm = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  return (
    <StyledForm
      method="post"
      // action='HOST URL'
    >
      <InputField
        title={signinTexts.email}
        ph={signinTexts.emailPh}
        inputRef={inputRef}></InputField>
      <InputField
        title={signinTexts.pwd}
        ph={signinTexts.pwdPh}
        inputRef={null}></InputField>

      <StyledButton>{signinTexts.btn}</StyledButton>

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
