import { styled } from 'styled-components'
import { ResetPasswordForm } from 'components/form/index'

export const ResetPassword = () => {
  return (
    <ResetPasswordWrapper>
      <ResetPasswordForm />
    </ResetPasswordWrapper>
  )
}

const ResetPasswordWrapper = styled.div`
  width: 568px;
  height: 774px;
  background-color: white;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
