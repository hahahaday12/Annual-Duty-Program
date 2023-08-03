import styled from 'styled-components'

export const Apply = () => {
  const texts = {
    apply: '연차/당직 신청'
  }
  return (
    <ApplyContainer>
      <ApplyTitle>
        {/* 필요시 flex 적용 후 연차/당직 버튼 추가 */}
        {texts.apply}
      </ApplyTitle>
      <Rectangle> </Rectangle>
    </ApplyContainer>
  )
}

const ApplyContainer = styled.div``

const Rectangle = styled.div`
  width: 1060px;
  height: 600px;
  border-radius: 10px;
  background-color: #fff;
  margin: 24px 0;
`
const ApplyTitle = styled.div`
  margin-top: 40px;
  padding-left: 20px;
  color: ${props => props.theme.colors.listTitle};
  font-size: 20px;
  font-weight: 700;
`
