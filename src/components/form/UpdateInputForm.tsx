import { styled } from 'styled-components'
import { BaseRow, BaseCol } from 'components/index'
import { AccountInputs } from 'components/form/index'

export const UpdateInputForm = ({ category, upper, lower }) => {
  return (
    <>
      <AccountRow>
        <BaseCol>{category}</BaseCol>
        <AccountInputs
          upper={upper}
          lower={lower}
        />
      </AccountRow>
    </>
  )
}

const AccountRow = styled(BaseRow)`
  margin-top: 24px;
`
