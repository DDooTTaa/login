import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function LoginForm({ authenticated, login, location }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // 로그인 버튼 클릭시 함수 실행
  const handleClick = () => {
    try {
      login({ id, password });
    } catch (e) {
      alert('로그인에 실패했습니다');
      setId('');
      setPassword('');
    }
  };

  // 로그인을 했을 때 그 전 위치값을 from 으로 가져옴
  const { from } = location.state || { from: { pathname: "/" } };
  console.log(from);
  // 로그인 성공 이후 이전 위치로 Redirect
  if (authenticated) return <Redirect to={from} />;

  return (
    <>
      <h1>Login</h1>
      {/* id 가져오기  */}
      <input
        value={id}
        onChange={({ target: { value } }) => setId(value)}
        type="text"
        placeholder="id"
      />
      {/* password 가져오기  */}
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleClick}>Login</button>

      <h2>등록된 아이디와 비밀번호</h2>

      <h4>id: 'a', password: '123', name: 'Kim' </h4>
      <h4> id: 'b', password: '456', name: 'Lee'  </h4>
      <h4> id: 'abc', password: '789', name: 'Park' </h4>
    </>
  );
}

export default LoginForm;