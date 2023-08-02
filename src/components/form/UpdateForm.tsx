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
    <>
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
      </ProfileContainer>
      <Actions>
        <button>{texts.cancel}</button>
        <button>{texts.confirm}</button>
      </Actions>
    </>
  )
}

const ProfileContainer = styled.div`
  margin: 40px 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 584px;
  padding: 70px;

  .image,
  .account,
  .pwd-md {
    height: 150px;
    display: flex;
    border-bottom: 1px solid black;
    .category {
      width: 200px;
      font-weight: 700;
      font-size: 20px;
      padding-top: 15px;
    }
    .profile-wrapper {
      display: flex;
      align-items: center;
      /* margin-left: 30px;
      margin-bottom: 25px; */
      .profile-box {
        border-radius: 16px;
        background-color: #d9d9d9;
        width: 116px;
        height: 116px;
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
`

const Actions = styled.div`
  display: flex;
  justify-content: center;
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
`
