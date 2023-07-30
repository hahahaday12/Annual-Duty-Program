import styled from 'styled-components'
import axios from 'axios'
export function StartMain() {
  console.log(axios.get('http://localhost:8001/api/admin/duty/list'))

  return (
    <>
      <MainContainer></MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  img {
    width: 99.4%;
  }
`
