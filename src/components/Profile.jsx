import React from 'react'
import UserContext from '../context/users/UserContext.js';
import { useContext } from 'react';

export const Profile = () => {
    const {selectUser} = useContext(UserContext)
    return (
        <>
         {selectUser? (
         <div className="card card-body text-center">
             <img src={selectUser.avatar} alt="img from user selected" className="card-img-top rounded-circle m-auto img-fluid" style={{width:180}}/>
         <h1>{`${selectUser.first_name} ${selectUser.last_name} `}</h1>
         <h3>Email {selectUser.email}</h3>
         </div>
         ):
         (<h1>There isn't a selected user</h1>)}
        </>
    )
}

export default Profile