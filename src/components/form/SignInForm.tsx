import { styled } from 'styled-components'
export const SignInForm = () => {
  return (
    <Wrapper>
      <Container>
        <div className="title"></div>
        <form action="">
          <>
            <div className="email"></div>
            <input type="text" />
          </>
          <>
            <div className="password"></div>
            <input type="text" />
          </>
          <button></button>
        </form>
        <div className="signup-cta"></div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: end;
  background-color: grey;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: skyblue;
  .title {
  }
  .email {
  }
  .password {
  }
  .signup-cta {
  }
`
