import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import Title from 'assets/service-title.png'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()

  const links = [
    { path: '/home', text: '홈' },
    { path: '/profile', text: '프로필 수정' },
    { path: '/schedule', text: '내 일정보기' },
    { path: '/application', text: '연차/당직 신청' }
  ]

  const searchLinks = links.map(link => (
    <NavLink
      key={link.path}
      className={({ isActive }) => (isActive ? 'active' : '')}
      to={link.path}>
      {link.text}
    </NavLink>
  ))

  return (
    <>
      <Outermost>
        <WidthSettler>
          <LeftBox>
            <img
              src={Title}
              onClick={() => navigate('/home')}
            />
            {searchLinks}
          </LeftBox>
          <RightBox>
            {/* USERINFO */}
            <div className="image">ICON</div>
            <div className="info">
              <div>USERNAME</div>
              <div>LOGOUT</div>
            </div>
          </RightBox>
        </WidthSettler>
      </Outermost>
    </>
  )
}

//가장 바깥 흰 배경 바탕 레이아웃
const Outermost = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 200;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.04);
`
//컨텐츠 중앙처리 설정 구획
const WidthSettler = styled.div`
  width: 1060px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

//좌측 이미지 및 navigation menu
const LeftBox = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 159px;
    height: 43px;
    margin-right: 20px;
    cursor: pointer;
  }
  a {
    color: black;
    font-family: 'LINESeedKR-Bd';
    margin: 0 20px;
  }
  .active {
    color: ${props => props.theme.colors.primaryBlue};
    /* border-bottom: 2px solid ${props => props.theme.colors.primaryBlue}; */
  }
`

//우측 유저 아이콘 및 정보 영역
const RightBox = styled.div`
  display: flex;
  .image {
    border: 1px solid black;
    width: 60px;
    height: 60px;
    margin-right: 13px;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`
