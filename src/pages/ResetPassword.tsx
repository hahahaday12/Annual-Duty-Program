import { styled } from 'styled-components'
import { ResetPasswordForm } from 'components/form/index'

export const ResetPassword = () => {
  return (
    <ResetPasswordWrapper>
      <ResetPasswordConatiner>
        <ResetPasswordForm />
      </ResetPasswordConatiner>
    </ResetPasswordWrapper>
  )
}

const ResetPasswordWrapper = styled.div`
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 568px;
  background-color: white;
`

const ResetPasswordConatiner = styled(ResetPasswordWrapper)`
  height: 774px;
  align-items: center;
  justify-content: center;
`
