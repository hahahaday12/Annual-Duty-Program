import { styled } from 'styled-components'
import { AccountInputs } from 'components/form/index'
export const UpdateForm = () => {
  const texts = {
    profile: '',
    account: '',
    changePwd: '',
    email: '',
    username: '',
    newPwd: '',
    newPwdCheck: '',
    cancel: '',
    confirm: ''
  }
  return (
    <ProfileContainer>
      <div className="image">
        <div className="category">123</div>
        <div className="profile-wrapper">
          <div className="profile-box">asd</div>
          <button>asd</button>
          <button>asd</button>
        </div>
      </div>
      <div className="account">
        <div className="category">123</div>
        <AccountInputs
          upper={'email'}
          lower={'username'}
        />
      </div>
      <div className="pwd-md">
        <div className="category">123</div>
        <AccountInputs
          upper={'new-pwd'}
          lower={'new-pwd-check'}
        />
      </div>
      <div className="btns">
        <button>asd</button>
        <button>123</button>
      </div>
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`
  width: 80%;
  position: relative;
  margin: auto;
  /* padding-bottom: 47%; */
  background-color: #ed8b8b;
  display: flex;
  flex-direction: column;
  top: 80px;
  .image,
  .account,
  .pwd-md {
    height: 200px;
    display: flex;
    .category {
      width: 200px;
    }
    .profile-wrapper {
      display: flex;
      align-items: center;
      .profile-box {
        background-color: gray;
        width: 150px;
        height: 150px;
      }
      button {
        margin: 20px;
      }
    }
  }
  .btns {
    height: 80px;
    display: flex;
    justify-content: end;
  }
`
