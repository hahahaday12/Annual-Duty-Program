import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyles } from 'styles/index'
import { Header, Footer } from 'components/index'

export const Layout = () => {
  return(
    <>
    <GlobalStyles />
    <Wrapper>
      <img src='/image/backgroundImage.jpg'/>
        <Outlet/>
    </Wrapper>
    </>
  )
}

export const HeaderLayout = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <Header/>
          <Outlet />
          <Footer/>
        </Container>
      </Wrapper>
    </>
  )
}


const Wrapper = styled.div`
  img{
    width: 100%;
    height: 100vh;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFE6D4;
`