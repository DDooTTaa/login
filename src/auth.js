
// 현재 유저의 아이디와 password 정보
const users = [
    { id: 'a', password: '123', name: 'Kim' },
    { id: 'b', password: '456', name: 'Lee' },
    { id: 'abc', password: '789', name: 'Park' }
]

// id 와 password 를 users 와 비교
export function signIn({ id, password }) {
    const user = users.find(user => user.id === id && user.password === password);
    if (user === undefined) throw new Error();
    return user;
}