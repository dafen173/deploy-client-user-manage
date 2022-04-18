import React, {useState, useEffect} from "react"
import { useDispatch} from "react-redux"
import {addGroup} from '../action/addGroup'
import { getUsers } from "../action/getUsers"


export const AddGroup = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const [groupName, setGroupName] = useState('')
    const [groupDescription, setGroupDescription] = useState('')

    const callBackHandler = (event) => {
        event.preventDefault()
        
        console.log(groupName)
        console.log(groupDescription)

        dispatch(addGroup(groupName, groupDescription))
        setGroupName('')
        setGroupDescription('')
    }
 
    return (     
        <form onSubmit={callBackHandler}>   
            <input value={groupName} onChange={ e => setGroupName(e.target.value)} />
            <input value={groupDescription} onChange={ e => setGroupDescription(e.target.value)} />          
            <button type="submit">Add Group</button>
        </form> 
    )
}

