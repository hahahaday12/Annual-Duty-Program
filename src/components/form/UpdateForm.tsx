import { styled } from 'styled-components'
import { AccountInputs } from 'components/form/index'
export const UpdateForm = () => {
  const texts = {
    update: '사원 정보 수정',
    profile: '프로필 사진',
    account: '계정',
    changePwd: '비밀번호 변경',
    email: '이메일',
    username: '이름',
    newPwd: '새로운 비밀번호',
    newPwdCheck: '비밀번호 확인',
    cancel: '취소',
    confirm: '등록',
    delete: '삭제',
    upload: '수정'
  }
  return (
    <>
      <UpdateTitle>{texts.update}</UpdateTitle>
      <ProfileContainer>
        <ImageRow>
          <ImageCol>{texts.profile}</ImageCol>
          <div className="profile-image">
            <img src="" />
          </div>
          <div className="profile-btns">
            <button className="delete">{texts.upload}</button>
            <button className="upload">{texts.delete}</button>
          </div>
        </ImageRow>
        <AccountRow>
          <BaseCol>{texts.account}</BaseCol>
          <AccountInputs
            upper={texts.email}
            lower={texts.username}
          />
        </AccountRow>
        <ModificationRow>
          <BaseCol>{texts.changePwd}</BaseCol>
          <AccountInputs
            upper={texts.newPwd}
            lower={texts.newPwdCheck}
          />
        </ModificationRow>
      </ProfileContainer>
      <Actions>
        <button>{texts.cancel}</button>
        <button>{texts.confirm}</button>
      </Actions>
    </>
  )
}

const UpdateTitle = styled.div`
  margin-top: 40px;
  padding-left: 20px;
  color: ${props => props.theme.colors.listTitle};
  font-size: 20px;
  font-weight: 700;
`

const ProfileContainer = styled.div`
  margin: 24px 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  height: 584px;
  padding: 20px 50px;
`

const BaseRow = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.sectionGrey};
`
const ImageRow = styled(BaseRow)`
  .profile-image {
    width: 200px;
    image {
      border-radius: 16px;
      background-color: #d9d9d9;
      width: 116px;
      height: 116px;
    }
  }
  .profile-btns {
    display: flex;
    align-items: center;
    button {
      all: unset;
      cursor: pointer;
      width: 120px;
      height: 40px;
      border-radius: 8px;
      text-align: center;
      font-size: 14px;
      border: 1px solid ${props => props.theme.colors.buttonGrey};
      margin-right: 20px;
    }
  }
`

const AccountRow = styled(BaseRow)`
  margin-top: 24px;
`
const ModificationRow = styled(AccountRow)``

const BaseCol = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  font-weight: 600;
  font-size: 18px;
  padding-top: 14px;
`
const ImageCol = styled(BaseCol)`
  align-items: center;
  margin-bottom: 34px;
  padding-top: 34px;
`

const Actions = styled.div`
  display: flex;
  justify-content: center;
  button {
    all: unset;
    cursor: pointer;
    /* padding: 10px 20px; */
    width: 220px;
    height: 60px;
    text-align: center;
    border-radius: 10px;
    align-self: center;
    border: 1px solid ${props => props.theme.colors.primaryBlue};
    color: #fff;
    background-color: ${props => props.theme.colors.primaryBlue};
    &:first-child {
      margin-right: 30px;
      background-color: #fff;
      color: ${props => props.theme.colors.primaryBlue};
    }
  }
`
