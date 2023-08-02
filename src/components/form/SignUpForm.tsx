import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'

export const SignUpForm = () => {
  const texts = {
    intro: 'Welcome👀',
    signin: '회원가입',
    username: '이름',
    email: '이메일 주소',
    password: '비밀번호',
    passwordCheck: '비밀번호 확인',
    emailPh: '이메일을 입력하세요 ',
    registerBtn: '등록',
    hasAccount: '아이디가 있으신가요?',
    toSignin: '로그인 하러가기',
    usernameText: '이름을 입력해주세요.',
    emailText: '이메일을 입력해주세요',
    pwdText:
      '영어 대문자, 영어 소문자, 숫자, 특수문자를 모두 포함 (8글자 이상)',
    pwdCheckText: '비밀번호를 다시 입력해주세요.'
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  return (
    <SignInContainer>
      <div className="rectangle">
        <div className="signin-text">{texts.signin}</div>
        <form
          method="post"
          // action='HOST URL'
          className="form-container">
          <div className="username">{texts.username}</div>
          <input
            type="text"
            className="signin-input"
            placeholder={texts.usernameText}
            ref={inputRef}
          />
          <div className="email">{texts.email}</div>
          <input
            type="text"
            className="signin-input"
            placeholder={texts.emailText}
          />
          <div className="password">{texts.password}</div>
          <input
            type="text"
            className="signin-input"
            placeholder={texts.pwdText}
          />
          <div className="password-check">{texts.passwordCheck}</div>
          <input
            type="text"
            className="signin-input"
            placeholder={texts.pwdCheckText}
          />
          <button className="signup">{texts.registerBtn}</button>

          <div className="signin-cta">
            <span>{texts.hasAccount}</span>
            <Link
              to="/signup"
              className="signup-cta">
              {texts.toSignin}
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
    height: 774px;
    background-color: white;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 36px;
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
          outline: 1px solid #ffd42e;
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
    .username {
      /* margin-top: 100px; */
    }
    .signup {
      all: unset;
      width: 434px;
      height: 60px;
      color: #fff;
      text-align: center;
      background-color: #ffd42e;
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
        color: #ffd42e;
        padding-left: 20px;
        font-weight: 700;

        &:visited {
          color: #ffd42e;
        }
      }
    }
  }
`
