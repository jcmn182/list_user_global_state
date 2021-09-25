import React, { useReducer } from 'react';
import UserReducer from './UserReducer.js';
import UserContex from './UserContext.js'
import axios from 'axios'

const UserState = (props) => {

const initialState = {
    users:[],
    selectUser: null
}

const [state, dispatch] = useReducer(UserReducer,initialState)

const getUsers  = async () =>{
    const res = await axios.get('https://reqres.in/api/users')
    dispatch({
        type:'GET_USERS',
        payload:res.data.data
    })
}
const getProfile  =   async (id) =>{
    const res = await axios.get(`https://reqres.in/api/users/${id}`)
    
    dispatch({
        type:'GET_PROFILE',
        payload:res.data.data
    })
    
}

return(
    <UserContex.Provider value = {{
        users:state.users,
        selectUser:state.selectUser,
        getUsers,
        getProfile
    }}>
       {props.children}
    </UserContex.Provider>
)

}

export default UserState