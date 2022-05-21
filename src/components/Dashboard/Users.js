import React from 'react';
import {useQuery} from 'react-query';
const Users = () => {
    const {data: users,isLoading} = useQuery('users',() => fetch('http://localhost:5000/user').then(res => res.json()).then(data => data))
    if(isLoading){
        return <p>Loding...</p>
    }
    return (
        <div>
            <h1>all users{users.length} </h1>
        </div>
    );
};

export default Users;