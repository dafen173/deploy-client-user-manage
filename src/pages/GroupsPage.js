import React from 'react'
import { AddGroup } from '../component/AddGroup'
import {GroupsList} from '../component/GroupsList'


export const GroupsPage = () => {
    return (
        <div className="wrapper">         
            <h1>Groups Page</h1>  
            <h1>User Management</h1> 
            <GroupsList />
            <AddGroup/>       
        </div>
    )
}


