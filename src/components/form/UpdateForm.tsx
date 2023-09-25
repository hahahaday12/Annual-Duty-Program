import { styled } from 'styled-components'
import { UpdateTexts, nameTexts, passwordTexts } from 'constants/index'
import { UpdateInputForm, UpdateImageForm } from 'components/index'
import { useState } from 'react'
import { updateUserInfo } from 'api/index'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { useRecoilValue } from 'recoil'
import { imageState } from '@/store/atoms'
import { useUserInfoFetch } from '@/hooks/useUserInfoFetch'

export const UpdateForm = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [verification, setVerification] = useState<string>('')
  const profileImage = useRecoilValue(imageState)
  const nameStates = [email, username]
  const passwordStates = [password, verification]
  const passwordFunctions = [setPassword, setVerification]

  //진입시 유저정보 렌더링 hook함수 생성
  useUserInfoFetch(setUsername, profileImage, '', setEmail)

  const handleCancel = () => {
    navigate('/home')
  }

  //등록 버튼
  const handleSubmit = async () => {
    try {
      const checked = password === verification
      if (!checked) {
        alert(`${UpdateTexts.verification}`)
        return
      }
      const res = await updateUserInfo(
        profileImage.replace(/\r?\n?/g, '').trim(),
        password
      )
      const success = res.status === 204
      if (success) {
        alert(`${UpdateTexts.success}`)
        localStorage.removeItem('token')
        navigate('/')
        return
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(`${UpdateTexts.failure}`)
      }
    }
  }

  return (
    <>
      <UpdateTitle>{UpdateTexts.update}</UpdateTitle>
      <ProfileContainer>
        <UpdateImageForm />
        <UpdateInputForm
          texts={nameTexts}
          value={nameStates}
          fn={null}
        />
        <UpdateInputForm
          texts={passwordTexts}
          value={passwordStates}
          fn={passwordFunctions}
        />
      </ProfileContainer>
      <Actions>
        <button onClick={handleCancel}>{UpdateTexts.cancel}</button>
        <button onClick={handleSubmit}>{UpdateTexts.confirm}</button>
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
  margin-bottom: 40px;
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
