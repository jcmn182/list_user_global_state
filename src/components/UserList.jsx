import React, {useEffect} from 'react'
import UserContext from '../context/users/UserContext.js';
import { useContext } from 'react';



export const UserList = () => {
    const {users,getUsers,getProfile} = useContext(UserContext);
    useEffect(() => {
        getUsers()
        console.log(users)
        
    },[])
    return (
        <div className='list-group h-100'>
            {
                users.map(user=>(
                  
                <div className="list-group-item list-group-item-action" key={user.id} onClick={()=> getProfile(user.id)}>
                    <img src={user.avatar} className="img-fluid mr-4 rounded-circle m-3" width="70" alt="user image"/>
                    {`${user.first_name} ${user.last_name} `}
                </div>
                
                ))
            }
            
        </div>
    )
}

export default UserList