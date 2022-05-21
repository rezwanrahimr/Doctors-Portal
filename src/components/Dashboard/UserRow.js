import React from 'react';
import { toast } from 'react-toastify';
const UserRow = ({ user, refetch }) => {
    const { index, email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Faild to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }
            })
    }
    return (
        <div>
            <th>{index}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-accent">Make Admin</button>}</td>
            <td><button class="btn btn-error">Remove User</button></td>

        </div>
    );
};

export default UserRow;