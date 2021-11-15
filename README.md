-[x] 로그인 시 Redirect

-[x] 아이디 비밀번호 확인 후 일치할 경우 로그인

#1 id 와 password를 auth.js 에서 임의로 지정 후 입력값과 비교

#2 로그인 성공시 Home 으로 redirect

#3 Login 이 되지 않을 경우 Profile 주소 접근 시 Login 으로 이동

---- 추가 구현 -----

#1 로그아웃 기능 구현 (LogoutButton.js)

#2 로그인 화면으로 이동 시 이전 주소 상태로 Redirect
Home -> Login 일 경우 로그인 성공시 Home으로 이동
Profile 로 이동할 경우 로그인 되지 않았을 경우 Login 으로 이동 -> Login 시 Profile 로 이동
