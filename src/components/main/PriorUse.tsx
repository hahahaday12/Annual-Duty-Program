import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PriorUse = () => {
  const texts = {
    introText: '서비스가 처음이신가요?',
    newcomer: 'YES',
    visited: 'NO'
  }
  return (
    <>
      <PriorUseContainer>
        <div className="contents">
          <div className="intro-text">{texts.introText}</div>
          <div className="buttons">
            <Link to="/signup">{texts.newcomer}</Link>
            <Link to="/signin">{texts.visited}</Link>
          </div>
        </div>
      </PriorUseContainer>
    </>
  )
}

const PriorUseContainer = styled.div`
  background-color: #8490c8;
  width: 400px;
  height: 250px;
  /* margin: 0 auto; */
  border-radius: 28px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .contents {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 30px;
    .intro-text {
      margin-bottom: 40px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .buttons {
      display: flex;
      justify-content: space-evenly;
      color: #fff;
      a {
        background-color: #ffe6d4;
        border-radius: 8px;
        width: 100px;
        height: 50px;
        text-align: center;
        padding-top: 11px;
        font-size: 25px;
        &:visited {
          color: #000;
        }
      }
    }
  }
`
