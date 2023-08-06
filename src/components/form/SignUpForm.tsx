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
    <SignInContainer>
      <div className="rectangle">
        <SigninTitle>{signupTexts.signin}</SigninTitle>
        <form
          method="post"
          // action='HOST URL'
          className="form-container">
          <InputField
            title={signupTexts.username}
            ph={signupTexts.usernameText}
            inputRef={inputRef}></InputField>
          <InputField
            title={signupTexts.email}
            ph={signupTexts.emailText}
            inputRef={null}></InputField>
          <InputField
            title={signupTexts.password}
            ph={signupTexts.pwdText}
            inputRef={null}></InputField>
          <InputField
            title={signupTexts.passwordCheck}
            ph={signupTexts.pwdCheckText}
            inputRef={null}></InputField>
          <StyledButton>{signupTexts.registerBtn}</StyledButton>
          <SignInCallToAction />
        </form>
      </div>
    </SignInContainer>
  )
}

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

const SigninTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 40px;
`

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  flex-grow: 1;
  .rectangle {
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
    .form-container {
      display: flex;
      flex-direction: column;
    }
  }
`
