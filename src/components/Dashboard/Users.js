import React from 'react';
import {useQuery} from 'react-query';
import UserRow from './UserRow';
const Users = () => {
    const {data: users,isLoading,refetch} = useQuery('users',() => fetch('http://localhost:5000/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()).then(data => data))
    if(isLoading){
        return <p>Loding...</p>
    }
    return (
        <div>
            <h1>all users{users.length} </h1>

            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
       {
           users.map((user,index) => <UserRow key={user._id} user={user} index={index} refetch={refetch}></UserRow>)

       }
      </tr>
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;