import { styled } from 'styled-components'

export const AccountInputs = ({
  upper,
  lower,
  phFirst,
  phSecond,
  value,
  fn
}) => {
  return (
    <div>
      <InputRow>
        <StyledSpan>{upper}</StyledSpan>
        <StyledInput
          placeholder={phFirst}
          value={value[0]}
          onChange={e => fn[0](e.target.value)}></StyledInput>
      </InputRow>
      <InputRow>
        <StyledSpan>{lower}</StyledSpan>
        <StyledInput
          placeholder={phSecond}
          value={value[1]}
          onChange={e => fn[1](e.target.value)}></StyledInput>
      </InputRow>
    </div>
  )
}

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid ${props => props.theme.colors.borderGrey};
  border-radius: 10px;
  width: 434px;
  height: 50px;
  margin-bottom: 18px;
  padding-left: 10px;
  &:focus {
    background-color: ${props => props.theme.colors.inputFocused};
  }
`
const StyledSpan = styled.span`
  display: block;
  width: 200px;
  padding-top: 15px;
`
const InputRow = styled.div`
  display: flex;
`
