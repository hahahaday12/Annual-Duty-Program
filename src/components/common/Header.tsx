import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = () => {
 
  return(
    <>
    <HeaderContainer>
      <Link className="Header-box__text" to="/home">
        홈
      </Link>
      <Link className="Header-box__text" to="/profile">
        프로필 수정
      </Link>
      <Link className="Header-box__text" to="/">
        내 일정보기
      </Link>
      <Link className="Header-box__text" to="/">
        연차/당직 신청
      </Link>
      <Link className="Header-box__text" to="/">
        로그아웃
      </Link>
      <Profilebox>
      </Profilebox>
    </HeaderContainer>
    </>
    
  )
}

const HeaderContainer = styled.div`
  background-color: #FBB04C;
  padding-bottom: 60px;

`

const Profilebox = styled.div`

`


const SearchLink = styled(Link)`
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`