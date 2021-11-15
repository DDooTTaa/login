import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ authenticated, Component, render }) {
    console.log(render);
    return (
        <Route
            render={props =>
                authenticated ? (
                    // 인증이 되어 있을 경우 그대로 렌더링
                    render ? render(props) : <Component {...props} />
                ) : (
                    // 로그인에 실패할 경우 login 으로 리다이렉트
                    <Redirect
                        to={{ pathname: '/login', state: { from: props.location } }}
                    />
                )
            }
        />
    );
}

export default AuthRoute;
