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
      <h1 className="title">{resetTexts.title}</h1>
      <div className="text-help">{resetTexts.helpText}</div>

      <div className="email">{resetTexts.email}</div>
      <form
        method="post"
        // action="URL"
      >
        <input
          type="text"
          className="email-input"
          placeholder={resetTexts.hintText}
          ref={inputRef}
        />
      </form>
      <button
        className="reset"
        onClick={submitHandler}>
        {resetTexts.reset}
      </button>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    align-self: center;
    position: absolute;
    font-size: 35px;
    font-weight: 700;
    top: 140px;
  }
  .email-input {
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
  .email {
    padding: 10px;
    line-height: 16px;
    letter-spacing: -0.48px;
    font-weight: 700;
  }
  .text-hint {
    color: gray;
    opacity: 0.75;
    padding-left: 10px;
    font-size: 12px;
    margin-bottom: 40px;
  }
  .reset {
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
  .text-help {
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
