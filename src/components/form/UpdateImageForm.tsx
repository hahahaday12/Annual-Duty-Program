import { styled } from 'styled-components'
import { UpdateTexts } from 'constants/index'

import { BaseRow, BaseCol } from 'components/index'

export const UpdateImageForm = () => {
  return (
    <div>
      <BaseRow>
        <ImageCol>{UpdateTexts.profile}</ImageCol>
        <ImageFrame>
          <Profile />
        </ImageFrame>
        <ProfileButtons>
          <ProfileButton>{UpdateTexts.upload}</ProfileButton>
          <ProfileButton>{UpdateTexts.delete}</ProfileButton>
        </ProfileButtons>
      </BaseRow>
    </div>
  )
}

const ProfileButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 120px;
  height: 40px;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  border: 1px solid ${props => props.theme.colors.buttonGrey};
  margin-right: 20px;
`

const ProfileButtons = styled.div`
  display: flex;
  align-items: center;
`

const Profile = styled.div`
  border-radius: 16px;
  width: 116px;
  height: 116px;
  background-image: url('/src/assets/QR.PNG');
  background-size: contain;
  background-repeat: no-repeat;
`

const ImageFrame = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
`
const ImageCol = styled(BaseCol)`
  align-items: center;
  margin-bottom: 34px;
  padding-top: 34px;
`
