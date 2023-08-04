import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { signupTexts } from 'constants/index'

export const SignUpForm = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  return (
    <SignInContainer>
      <div className="rectangle">
        <div className="signin-text">{signupTexts.signin}</div>
        <form
          method="post"
          // action='HOST URL'
          className="form-container">
          <div className="username">{signupTexts.username}</div>
          <input
            type="text"
            className="signin-input"
            placeholder={signupTexts.usernameText}
            ref={inputRef}
          />
          <div className="email">{signupTexts.email}</div>
          <input
            type="text"
            className="signin-input"
            placeholder={signupTexts.emailText}
          />
          <div className="password">{signupTexts.password}</div>
          <input
            type="text"
            className="signin-input"
            placeholder={signupTexts.pwdText}
          />
          <div className="password-check">{signupTexts.passwordCheck}</div>
          <input
            type="text"
            className="signin-input"
            placeholder={signupTexts.pwdCheckText}
          />
          <button className="signup">{signupTexts.registerBtn}</button>

          <div className="signin-cta">
            <span>{signupTexts.hasAccount}</span>
            <Link
              to="/signup"
              className="signup-cta">
              {signupTexts.toSignin}
            </Link>
          </div>
        </form>
      </div>
    </SignInContainer>
  )
}

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
      .signin-input {
        background: #ffffff;
        border: 1px solid #d9d9d9;
        border-radius: 10px;
        padding-left: 10px;
        width: 434px;
        height: 60px;
        margin-bottom: 18px;
        &:focus {
          outline: 1px solid ${props => props.theme.colors.primaryBlue};
        }
      }
    }

    .signin-text {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 40px;
    }
    .email,
    .password,
    .password-check,
    .username {
      padding: 10px;
      line-height: 16px;
      letter-spacing: -0.48px;
      font-weight: 700;
    }
    .signup {
      all: unset;
      width: 434px;
      height: 60px;
      color: #fff;
      text-align: center;
      background-color: ${props => props.theme.colors.primaryBlue};
      border-radius: 10px;
      margin-bottom: 36px;
      cursor: pointer;
    }
    .signin-cta {
      width: 434px;
      /* height: 60px; */
      display: flex;
      justify-content: center;
      margin: 0 10px;
      font-size: 14px;
      span {
        padding-right: 20px;
      }
      a {
        text-decoration: underline;
        color: ${props => props.theme.colors.primaryBlue};
        padding-left: 20px;
        font-weight: 700;

        &:visited {
          color: ${props => props.theme.colors.primaryBlue};
        }
      }
    }
  }
`
