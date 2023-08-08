import { styled } from 'styled-components'

export const AccountInputs = ({ upper, lower, phFirst, phSecond }) => {
  return (
    <div>
      <InputRow>
        <StyledSpan>{upper}</StyledSpan>
        <StyledInput placeholder={phFirst}></StyledInput>
      </InputRow>
      <InputRow>
        <StyledSpan>{lower}</StyledSpan>
        <StyledInput placeholder={phSecond}></StyledInput>
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
