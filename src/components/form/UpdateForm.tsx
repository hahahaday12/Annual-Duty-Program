import { styled } from 'styled-components'
import { UpdateTexts, accountInputs } from 'constants/index'
import { UpdateInputForm, UpdateImageForm } from 'components/index'
import { useCallback } from 'react'

export const UpdateForm = () => {
  const modifiers = accountInputs.map(
    useCallback(
      ({ title, first, second, phFirst, phSecond }) => (
        <UpdateInputForm
          category={title}
          upper={first}
          lower={second}
          phFirst={phFirst}
          phSecond={phSecond}></UpdateInputForm>
      ),
      []
    )
  )

  return (
    <>
      <UpdateTitle>{UpdateTexts.update}</UpdateTitle>
      <ProfileContainer>
        <UpdateImageForm />
        {modifiers}
      </ProfileContainer>
      <Actions>
        <button>{UpdateTexts.cancel}</button>
        <button>{UpdateTexts.confirm}</button>
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
  &:last-child {
    border: none;
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

const Actions = styled.div`
  display: flex;
  justify-content: center;
  button {
    all: unset;
    cursor: pointer;
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
