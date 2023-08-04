import { styled } from 'styled-components'
import { useRef, useEffect } from 'react'
import { resetTexts } from 'constants/index'

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
      <EmailText>{resetTexts.email}</EmailText>
      <form
        method="post"
        // action="URL"
      >
        <EmailInput
          placeholder={resetTexts.hintText}
          ref={inputRef}></EmailInput>
      </form>
      <ResetButton onClick={submitHandler}>{resetTexts.reset}</ResetButton>
    </FormWrapper>
  )
}

const Title = styled.h2``
const HelpText = styled.div``
const EmailInput = styled.input``
const EmailText = styled.div``
const ResetButton = styled.button``

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${Title} {
    align-self: center;
    position: absolute;
    font-size: 35px;
    font-weight: 700;
    top: 140px;
  }
  ${EmailInput} {
    background: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    padding-left: 10px;
    width: 434px;
    height: 60px;
    margin-bottom: 6px;
    &::placeholder {
      font-size: 12px;
      opacity: 0.75;
    }
    &:focus {
      outline: 1px solid #ffd42e;
    }
  }

  ${EmailText} {
    padding: 10px;
    line-height: 16px;
    letter-spacing: -0.48px;
    font-weight: 700;
  }
  ${ResetButton} {
    all: unset;
    cursor: pointer;
    position: absolute;
    bottom: 150px;
    align-self: center;
    width: 217px;
    height: 60px;
    color: #fff;
    text-align: center;
    background-color: #ffd42e;
    border-radius: 10px;
  }
  ${HelpText} {
    color: gray;
    opacity: 0.75;
    align-self: center;
    font-size: 14px;
    position: absolute;
    top: 220px;
    white-space: pre-wrap;
    text-align: center;
    line-height: 20px;
  }
`
