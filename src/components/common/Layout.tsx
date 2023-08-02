import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyles } from 'styles/index'
import { Header, Footer } from 'components/index'
import bg from 'assets/bgblue.png'

export const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <img src={bg} />
        <Outlet />
      </Wrapper>
    </>
  )
}

export const HeaderLayout = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <Container>
          <Outlet />
        </Container>
      </Wrapper>
      {/* <Wrapper>
        <Footer />
      </Wrapper> */}
    </>
  )
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
  position: relative;
  top: 100px;
  /* height: calc(100vh - 100px); */
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1060px;
  /* display: flex;
  justify-content: center; */
`
