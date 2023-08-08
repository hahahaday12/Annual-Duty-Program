import { styled } from 'styled-components'
import { NavLink, useNavigate } from 'react-router-dom'
import Title from 'assets/service-title.png'
import { links } from 'constants/index'
import { useCallback, useEffect, useState } from 'react'
import { getUserInfo } from 'api/index'
import { AxiosResponse } from 'axios'

export interface InfoResponse extends AxiosResponse {
  response: {
    email: string
    hireDate: string
    profileImage: string
    remainVacation: number
    usedVacation: number
    username: string
  }
}

export const Header = () => {
  const [username, setUsername] = useState<string>('')

  const navigate = useNavigate()

  const searchLinks = links.map(
    useCallback(
      ({ path, text }) => (
        <NavLink
          key={path}
          className={({ isActive }) => (isActive ? 'active' : '')}
          to={path}>
          {text}
        </NavLink>
      ),
      []
    )
  )
  const signOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  //진입시 유저정보 렌더링
  useEffect(() => {
    const fetchData = async () => {
      const res: InfoResponse = await getUserInfo()
      setUsername(res?.response?.username)
    }
    fetchData()
  }, [username])

  return (
    <>
      <Outermost>
        <WidthSettler>
          {/* 컴포넌트 분리?? */}
          <LeftBox>
            <img
              src={Title}
              onClick={() => navigate('/home')}
            />
            {searchLinks}
          </LeftBox>
          {/* 컴포넌트 분리? */}
          <RightBox>
            {/* USERINFO */}
            {/* USEREF? USESTATE? - [USERNAME, ICON] - */}
            <div className="image">
              {/* 이미지 불러오기 조사 필요 */}
              <img src="" />
            </div>
            <div className="info">
              <div>{username}</div>
              {/* 뒤로가기 예외처리 */}
              <button onClick={signOut}>LOGOUT</button>
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
    button {
      all: unset;
    }
  }
`
