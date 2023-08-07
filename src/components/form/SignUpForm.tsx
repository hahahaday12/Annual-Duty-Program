import { styled } from 'styled-components'
import { useRef, useEffect } from 'react'
import { signupTexts } from 'constants/index'
import { InputField, SignInCallToAction } from 'components/index'

export const SignUpForm = () => {
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
        fn={null}
        val={''}
        title={signupTexts.username}
        ph={signupTexts.usernameText}
        inputRef={inputRef}
        type={'text'}></InputField>
      <InputField
        fn={null}
        val={''}
        title={signupTexts.email}
        ph={signupTexts.emailText}
        inputRef={null}
        type={'text'}></InputField>
      <InputField
        fn={null}
        val={''}
        title={signupTexts.password}
        ph={signupTexts.pwdText}
        inputRef={null}
        type={'password'}></InputField>
      <InputField
        fn={null}
        val={''}
        title={signupTexts.passwordCheck}
        ph={signupTexts.pwdCheckText}
        inputRef={null}
        type={'password'}></InputField>
      <StyledButton>{signupTexts.registerBtn}</StyledButton>
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
