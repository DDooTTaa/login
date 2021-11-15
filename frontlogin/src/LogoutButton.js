import React from 'react';
import { withRouter } from 'react-router-dom';

function LogoutButton({ logout, history }) {
    // logout 버튼 누를 시 루트로 이동
    const handleClick = () => {
        logout();
        history.push('/');
    }
    return <button onClick={handleClick}>Logout</button>;
}


// withrouter 로 히스토리 포함해서 export
export default withRouter(LogoutButton);