import { styled } from 'styled-components'
import { UpdateTexts } from 'constants/index'
import { UpdateInputForm, UpdateImageForm } from 'components/index'
import { useState, useEffect } from 'react'
import { InfoResponse } from 'components/index'
import { getUserInfo } from 'api/index'

export const UpdateForm = () => {
  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [verification, setVerification] = useState<string>('')

  const nameStates = [email, username]
  const passwordStates = [password, verification]
  const passwordFunctions = [setPassword, setVerification]

  //진입시 유저정보 렌더링
  useEffect(() => {
    const fetchData = async () => {
      const res: InfoResponse = await getUserInfo()
      setUsername(res?.response?.username)
      setEmail(res?.response?.email)
    }
    fetchData()
  }, [])

  return (
    <>
      <UpdateTitle>{UpdateTexts.update}</UpdateTitle>
      <ProfileContainer>
        <UpdateImageForm />
        <UpdateInputForm
          category={UpdateTexts.account}
          upper={UpdateTexts.email}
          lower={UpdateTexts.username}
          phFirst={''}
          phSecond={''}
          value={nameStates}
          fn={null}
        />
        <UpdateInputForm
          category={UpdateTexts.changePwd}
          upper={UpdateTexts.newPwd}
          lower={UpdateTexts.newPwdCheck}
          phFirst={UpdateTexts.newPwdPh}
          phSecond={UpdateTexts.newPwdCheckPh}
          value={passwordStates}
          fn={passwordFunctions}
        />
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
  border-top: 1px solid ${props => props.theme.colors.sectionGrey};
  &:first-child {
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
