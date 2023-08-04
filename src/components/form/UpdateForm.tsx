import { styled } from 'styled-components'
import { texts, accountInputs } from 'constants/updateTexts'
import { UpdateInputForm } from 'components/index'
import { useCallback } from 'react'

export const UpdateForm = () => {
  const modifiers = accountInputs.map(
    useCallback(
      ({ title, first, second }) => (
        <UpdateInputForm
          category={title}
          upper={first}
          lower={second}></UpdateInputForm>
      ),
      []
    )
  )

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
        {modifiers}
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

export const BaseRow = styled.div`
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
export const BaseCol = styled.div`
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
