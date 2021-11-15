import React, { useState } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { signIn } from './auth';
import AuthRoute from './AuthRoute';

import Home from './Routes/Home';
import Profile from './Routes/Profile';
import NotFound from './NotFound';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ id, password }) => setUser(signIn({ id, password }));
  const logout = () => setUser(null);

  return (
    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
        {/* login 상태 확인 */}
        {authenticated ? (
          <LogoutButton logout={logout} />
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </header>
      <main>
        <Switch>
          {/* exact 로 다른 경로에서도 루트로 오지 않도록 설정*/}
          <Route exact path="/" component={Home} />
          {/* login 화면으로 현재 로그인 상태 rest 연산자로 나머지 prop 전달*/}
          <Route
            path="/login"
            render={props => (
              <LoginForm authenticated={authenticated} login={login} {...props} />
            )}
          />
          {/* profile 화면으로 로그인 상태 시 이동*/}
          <AuthRoute
            authenticated={authenticated}
            path="/profile"
            render={props => <Profile user={user} {...props} />}
          />
          {/* 경로가 정해지지 않을 경우 notFound */}
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
