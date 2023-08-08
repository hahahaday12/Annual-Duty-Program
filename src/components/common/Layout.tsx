import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyles } from 'styles/index'
import { Header, Footer } from 'components/index'

export const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <img src="/image/bg.jpg" />
        <Outlet />
      </Wrapper>
    </>
  )
}

export const HeaderLayout = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header/>
          <Container>
            <Outlet />
          </Container>
        <Footer/>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  img {
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
  }
`

const Container = styled.div`
  width: 100%;
  padding-bottom: 10%;
  background-color: #F8EEE1;
`
