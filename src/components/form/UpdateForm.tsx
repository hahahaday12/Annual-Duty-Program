import { styled } from 'styled-components'
import { AccountInputs } from 'components/form/index'
export const UpdateForm = () => {
  const texts = {
    profile: '프로필 사진',
    account: '계정',
    changePwd: '비밀번호 변경',
    email: '이메일',
    username: '이름',
    newPwd: '새로운 비밀번호',
    newPwdCheck: '비밀번호 확인',
    cancel: '취소',
    confirm: '등록',
    delete: '사진 삭제',
    upload: '사진 업로드'
  }
  return (
    <ProfileContainer>
      <div className="image">
        <div className="category">{texts.profile}</div>
        <div className="profile-wrapper">
          <div className="profile-box"></div>
          <button className="delete">{texts.delete}</button>
          <button className="upload">{texts.upload}</button>
        </div>
      </div>
      <div className="account">
        <div className="category">{texts.account}</div>
        <AccountInputs
          upper={texts.email}
          lower={texts.username}
        />
      </div>
      <div className="pwd-md">
        <div className="category">{texts.changePwd}</div>
        <AccountInputs
          upper={texts.newPwd}
          lower={texts.newPwdCheck}
        />
      </div>
      <div className="btns">
        <button>{texts.cancel}</button>
        <button>{texts.confirm}</button>
      </div>
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`
  width: 80%;
  position: relative;
  margin: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  top: 130px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 36px;
  padding: 70px;

  .image,
  .account,
  .pwd-md {
    height: 200px;
    display: flex;
    .category {
      width: 200px;
      font-weight: 700;
      font-size: 20px;
      padding-top: 15px;
    }
    .profile-wrapper {
      display: flex;
      align-items: center;
      margin-left: 30px;
      margin-bottom: 25px;
      .profile-box {
        border-radius: 16px;
        background-color: #d9d9d9;
        width: 150px;
        height: 150px;
      }

      button {
        all: unset;
        cursor: pointer;
        padding: 10px 20px;
        border-radius: 8px;
        align-self: center;
        border: 1px solid red;
        margin: 20px;
      }
    }
  }
  .btns {
    display: flex;
    justify-content: end;
    button {
      all: unset;
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 8px;
      align-self: center;
      border: 1px solid red;
      &:first-child {
        margin-right: 30px;
      }
    }
  }
`
