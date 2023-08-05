import { styled } from 'styled-components'
import { ResetPasswordForm } from 'components/form/index'

export const ResetPassword = () => {
  return (
    <ResetPasswordSettler>
      <ResetPasswordWrapper>
        <ResetPasswordForm />
      </ResetPasswordWrapper>
    </ResetPasswordSettler>
  )
}

const ResetPasswordSettler = styled.div`
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

const ResetPasswordWrapper = styled(ResetPasswordSettler)`
  height: 774px;
  align-items: center;
  justify-content: center;
`
