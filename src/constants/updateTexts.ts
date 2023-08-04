export const texts = {
  update: '사원 정보 수정',
  profile: '프로필 사진',
  account: '계정',
  changePwd: '비밀번호 변경',
  email: '이메일',
  username: '이름',
  newPwd: '새로운 비밀번호',
  newPwdCheck: '비밀번호 확인',
  cancel: '취소',
  confirm: '등록',
  delete: '삭제',
  upload: '수정',
  newPwdPh: '    새로운 비밀번호를 입력해주세요.',
  newPwdCheckPh: '    새로운 비밀번호를 한번 더 입력해주세요.'
}

export const accountInputs = [
  {
    title: texts.account,
    first: texts.email,
    second: texts.username,
    phFirst: '',
    phSecond: ''
  },
  {
    title: texts.changePwd,
    first: texts.newPwd,
    second: texts.newPwdCheck,
    phFirst: texts.newPwdPh,
    phSecond: texts.newPwdCheckPh
  }
]
