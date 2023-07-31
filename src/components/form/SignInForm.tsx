import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
// import IntroText from 'assets/intro-text.png'

export const SignInForm = () => {
  const texts = {
    intro: 'Welcome👀',
    signin: 'SIGNIN',
    email: 'Email',
    pwd: 'Password',
    btn: '로그인 하기',
    noAccounts: '아직 계정이 없으신가요?',
    signup: '회원가입 하러 가기',
    emailPh: '이메일을 입력하세요 ',
    pwdPh: '비밀번호를 입력하세요 '
  }
  return (
    <SignInWrapper>
      {/* <img
        src={IntroText}
        className="intro-text"
      /> */}
      {/* <HomeContainer> */}
      <InnerText>{texts.intro}</InnerText>
      {/* </HomeContainer>   */}
      <SignInContainer>
        <div className="rectangle">
          <div className="signin-text">{texts.signin}</div>
          <form
            method="post"
            // action='HOST URL'
            className="form-container">
            <div className="email">{texts.email}</div>
            <input
              type="text"
              className="signin-input"
              placeholder={texts.emailPh}
            />
            <div className="password">{texts.pwd}</div>
            <input
              type="text"
              className="signin-input"
              placeholder={texts.pwdPh}
            />
            <button className="signin">{texts.btn}</button>
            <div className="signup-cta">
              <span>{texts.noAccounts}</span>
              <Link
                to="/signup"
                className="signup-cat">
                {texts.signup}
              </Link>
            </div>
          </form>
        </div>
      </SignInContainer>
    </SignInWrapper>
  )
}

const SignInWrapper = styled.div`
  display: flex;
  .intro-text {
    flex-grow: 1;
    line-height: 82px;
    width: 623px;
    height: 98px;
    position: absolute;
    top: 40vh;
    left: 15vw;
  }
`

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  flex-grow: 1;
  .rectangle {
    width: 40vw;
    height: 85vh;
    background-color: white;
    margin-right: 5vw;
    margin-top: 7vh;
    box-shadow: 10px 8px 4px rgba(0, 0, 0, 0.25);
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
        border: 2px solid #f96d5f;
        border-radius: 10px;
        padding-left: 10px;
        height: 41px;
        margin-bottom: 40px;
      }
    }
  }
  .signin-text {
    color: #f8f5f5;
    font-size: 60px;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #131309;
    font-family: 'Luckiest Guy', cursive;
    letter-spacing: 7px;
    margin-bottom: 40px;
  }
  .email {
    color: #f8f5f5;
    font-size: 30px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #131309;
    font-family: 'Luckiest Guy', cursive;
    letter-spacing: 7px;
    align-self: center;
    margin-bottom: 40px;
  }
  .password {
    color: #f8f5f5;
    font-size: 30px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #131309;
    font-family: 'Luckiest Guy', cursive;
    letter-spacing: 7px;
    align-self: center;
    margin-bottom: 40px;
  }
  .signin {
    align-self: center;
    width: 191px;
    height: 47px;
    background: #f96d5f;
    border: 2px solid #f96d5f;
    border-radius: 10px;
    color: #fff;
    margin-bottom: 40px;
  }
  .signup-cta {
    span {
      margin-right: 20px;
    }
    a {
      text-decoration: none;
      color: #f96d5f;
      &:visited {
        color: #f96d5f;
      }
    }
  }
`
// const HomeContainer = styled.div`
//   width: 80%;
//   position: relative;
//   margin: auto;
//   padding-bottom: 47%;
//   background-color: #ebb3b3;
// `
const InnerText = styled.div`
  width: 40%;
  font-size: 90px;
  color: #f8f5f5;
  font-weight: 700;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #131309;
  font-family: 'Luckiest Guy', cursive;
  letter-spacing: 7px;
  width: 623px;
  height: 98px;
  position: absolute;
  top: 40vh;
  left: 15vw;
`
