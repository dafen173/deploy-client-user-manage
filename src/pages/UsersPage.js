import React from "react"
import UserList from '../component/UserList'
import {AddUser} from '../component/AddUser'

export const UsersPage = () => {

    return (
        <div className="wrapper">         
            <h1>Users Page</h1>  
            <h1>User Management</h1> 
            <UserList />
            <AddUser />       
        </div> 
    )
}


