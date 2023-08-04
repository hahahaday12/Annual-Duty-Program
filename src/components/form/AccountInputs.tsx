import { styled } from 'styled-components'
import { texts } from 'constants/index'

export const AccountInputs = ({ upper, lower, phFirst, phSecond }) => {
  return (
    <Inputs>
      <div className="input-row">
        <span>{upper}</span>
        <input
          type="text"
          placeholder={phFirst}
        />
      </div>
      <div className="input-row">
        <span>{lower}</span>
        <input
          type="text"
          placeholder={phSecond}
        />
      </div>
    </Inputs>
  )
}

const Inputs = styled.div`
  .input-row {
    display: flex;
  }
  span {
    display: block;
    width: 200px;
    padding-top: 15px;
  }
  input {
    background: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    width: 434px;
    height: 50px;
    margin-bottom: 18px;
    &:focus {
      background-color: ${props => props.theme.colors.inputFocused};
    }
  }
`
