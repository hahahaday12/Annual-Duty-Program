import { styled } from 'styled-components'

export const AccountInputs = props => {
  return (
    <Inputs>
      <div className="inputs">
        <div className="input-wrapper">
          <span>{props.upper}</span>
          <input type="text" />
        </div>
        <div className="input-wrapper">
          <span>{props.lower}</span>
          <input type="text" />
        </div>
      </div>
    </Inputs>
  )
}

const Inputs = styled.div`
  .input-wrapper {
    display: flex;
  }
  span {
    display: block;
    /* padding-right: 20px; */
    width: 200px;
    text-align: center;
    padding-top: 15px;
  }
  input {
    background: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    width: 434px;
    height: 50px;
    margin-bottom: 36px;
  }
`
