import React from 'react';
import styled from "styled-components";

const List = styled.li`
display: flex;
margin: 10px;
`
const Container = styled.div`
justfy-contents: center;
`

const Detail = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
width: 20%;
`

const Divider = styled.span`
margin: 0px 10px;
`
function Profile({ user }) {
    const { id, password, name } = user;
    return (
        <Container>
            <h1>Profile</h1>
            <Detail>
                <List>ID: <Divider />
                    {id}</List>
                <List>Password: <Divider />
                    {password}</List>
                <List>Name:  <Divider />
                    {name}</List>
            </Detail>
        </Container>
    );
}

export default Profile;