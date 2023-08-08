import { styled } from 'styled-components'
import { BaseRow, BaseCol } from 'components/index'
import { AccountInputs } from 'components/form/index'

export const UpdateInputForm = ({
  category,
  upper,
  lower,
  phFirst,
  phSecond,
  value,
  fn
}) => {
  return (
    <>
      <AccountRow>
        <BaseCol>{category}</BaseCol>
        <AccountInputs
          upper={upper}
          lower={lower}
          phFirst={phFirst}
          phSecond={phSecond}
          value={value}
          fn={fn}
        />
      </AccountRow>
    </>
  )
}

const AccountRow = styled(BaseRow)`
  padding-top: 24px;
`
