import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = () => {
 
  return(
    <>
    <HeaderContainer>
      <HeaderBox>
        <LinkBox>
          <SearchLink className="Header-box__text" to="/home">
            홈
          </SearchLink>
          <SearchLink className="Header-box__text" to="/profile">
            프로필 수정
          </SearchLink>
          <SearchLink className="Header-box__text" to="/schedule">
            내 일정보기
          </SearchLink>
          <SearchLink className="Header-box__text" to="/application">
            연차/당직 신청
          </SearchLink>
          <SearchLink className="Header-box__text" to="/logout">
            로그아웃
          </SearchLink>
        </LinkBox>
      <Profilebox>
        <ProfileImageBox>
          <Image>이미지</Image>
        </ProfileImageBox>
        <ProfileNameBox>
          <p>사원이름</p>
          <PositionBox>
            <p>직급</p>
          </PositionBox>
        </ProfileNameBox>
      </Profilebox>
      </HeaderBox>
    </HeaderContainer>
    </>
  )
}

const HeaderContainer = styled.div`
  background-color: #FBB04C;
  padding-bottom: 20px;

`
const HeaderBox = styled.div`
  width: 60%;
  position: relative;
  margin: auto;
  top: 10px;
  height: 60px;
`
const LinkBox = styled.div`
  position: relative;
  margin: 0 auto;
  width: 85%;
  height: 30px;
  top: 20px;
`


const Profilebox = styled.div`
  position: relative;
  left: 84%;
  width: 15%;
  height: 60px;
  bottom: 30px;
  background-color: yellow;
`
const ProfileImageBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: blue;
  position: absolute;
`
const Image = styled.p`
  font-family: 'LINESeedKR-Bd';
  position: relative;
  margin-top: 30%;
`

const ProfileNameBox = styled.div`
  width: 45%;
  position: absolute;
  top: 5px;
  right: 10px;
  height: 50px;
  //background-color: orange;
  font-family: 'LINESeedKR-Bd';
`
const PositionBox = styled.div`
  width: 50%;
  height: 20px;
  position: absolute;
  margin-top: 10px;
  border-radius: 10px;
  background-color: green;
  font-size: 13px;
  padding: 5px;
  color:#ffff;
`

const SearchLink = styled(Link)`
  position: relative;
  left: 20px;
  font-size: 15px;
  margin-left: 8%;
  color: black;
  font-family: 'LINESeedKR-Bd';
`