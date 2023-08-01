import { styled } from 'styled-components'

export const AccountInputs = props => {
  return (
    <Inputs>
      <div className="inputs">
        <div className="input">
          <span>{props.upper}</span>
          <input type="text" />
        </div>
        <div className="input">
          <span>{props.lower}</span>
          <input type="text" />
        </div>
      </div>
    </Inputs>
  )
}

const Inputs = styled.div``
