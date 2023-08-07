import { styled } from 'styled-components'
import { useRef, useEffect } from 'react'
import { resetTexts } from 'constants/index'
import { InputField } from 'components/index'

export const ResetPasswordForm = () => {
  const submitHandler = () => {}

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  return (
    <FormWrapper>
      <Title>{resetTexts.title}</Title>
      <HelpText>{resetTexts.helpText}</HelpText>
      <form
        method="post"
        // action="URL"
      >
        <InputField
          title={resetTexts.email}
          inputRef={inputRef}
          ph={resetTexts.hintText}></InputField>
      </form>
      <ResetButton onClick={submitHandler}>{resetTexts.reset}</ResetButton>
    </FormWrapper>
  )
}

const Title = styled.h2`
  align-self: center;
  position: absolute;
  font-size: 35px;
  font-weight: 700;
  top: 140px;
`
const HelpText = styled.div`
  color: gray;
  opacity: 0.75;
  align-self: center;
  font-size: 14px;
  position: absolute;
  top: 220px;
  white-space: pre-wrap;
  text-align: center;
  line-height: 20px;
`
const ResetButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  bottom: 150px;
  align-self: center;
  width: 217px;
  height: 60px;
  color: #fff;
  text-align: center;
  background-color: ${props => props.theme.colors.primaryBlue};
  border-radius: 10px;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
