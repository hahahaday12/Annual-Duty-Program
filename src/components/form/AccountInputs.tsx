import { styled } from 'styled-components'
import { texts } from 'constants/index'
export const AccountInputs = props => {
  return (
    <Inputs>
      <div className="input-row">
        <span>{props.upper}</span>
        <input
          type="text"
          placeholder=""
        />
      </div>
      <div className="input-row">
        <span>{props.lower}</span>
        <input
          type="text"
          placeholder=""
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
