import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

const FadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const PriorUse = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after 3 seconds
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    // Clear the timeout on unmount to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  const onChangeyes = () => {
    navigate('/signup')
  }

  const onChangeno = () => {
    navigate('/signin')
  }
  

  return (
    <>
      {isVisible && (
        <PriorUseContainer>
          <TopHeader><p>당직, 연차 관리 사이트 "당연하지"</p></TopHeader>
          <UseHeader>당연하지 처음인가요?</UseHeader>
          <UseButtonBox>
            <YesButton onClick={() => onChangeyes()}>YES</YesButton>
            <NoButton onClick={() => onChangeno()}>NO</NoButton>
          </UseButtonBox>
        </PriorUseContainer>
      )}
    </>
  )
}

const PriorUseContainer = styled.div`
  width: 450px;
  padding-bottom: 230px;
  position: absolute;
  background-color: #8490C8;
  top: 30%;
  left: 35%;
  border-radius: 10px;
  font-family: 'LINESeedKR-Bd';
  animation: ${FadeInAnimation} 1s ease-in-out;
  opacity: 0; /* Set the initial opacity to 0 */
  animation-fill-mode: forwards; 
`
const TopHeader = styled.div`
  width: 80%;
  position: relative;
  margin: auto;
  font-size: 18px;
  top: 20px;

  p {
    width: 250px;
    margin: auto;
  }
`
const UseHeader = styled.div`
  width: 50%;
  height: 30px;
  position:absolute;
  margin: auto;
  top: 100px;
  left: 110px;
  font-size: 25px;
`
const UseButtonBox = styled.div`
  width: 60%;
  //background-color: pink;
  position: relative;
  top: 170px;
  margin: auto;
  display: flex;
  gap: 30px;
`
const YesButton = styled.button`
  width: 50%;
  height: 50px;
  padding: 5px;
  background-color: #FFE6D4;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #FFDBAA;
  }
`

const NoButton = styled(YesButton)`
`

