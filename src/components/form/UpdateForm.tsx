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
