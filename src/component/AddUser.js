import React, {useState, useEffect, useLayoutEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUsers } from "../action/addUsers"
import { getGroups } from "../action/getGroups"


export const AddUser = () => {
    
    const dispatchGroups = useDispatch()
    useEffect(() => {
        dispatchGroups(getGroups())
    }, [])
    
    const groupNameSelector = useSelector(state => state.groups.groupitems)
 
    const [userValue, setUserValue] = useState('')
    const [groupValue, setGroupValue] = useState('')
    
    useEffect(() => {
        if (groupNameSelector.length)
        setGroupValue(groupNameSelector[0].groupname)
     }, [groupNameSelector])
    

    const dispatchUsers = useDispatch()

    const callBackHandler = (event) => {
        event.preventDefault()

        const selectedGroup = groupNameSelector.find(el => el.groupname === groupValue)
        // console.log(selectedGroup.id)
        dispatchUsers(addUsers(userValue, groupValue, selectedGroup.id))
        setUserValue('')
        console.log('groupValue is ' + groupValue)
    }

    return (
        <>           
            <form onSubmit={callBackHandler}> 
                <input value={userValue} onChange={ e => setUserValue(e.target.value)} />
                <select value={groupValue} onChange={ e => setGroupValue(e.target.value)}>
                    {groupNameSelector.map( item => 
                        <option key={item.id} value={item.groupname}>{item.groupname}</option> 
                        // <option key={item.id} value={item.groupname} data={item.id}>{item.groupname}</option>                                                 
                    )}
                </select>                    
                <button type="submit">Add User</button>
            </form>          
        </>
    )
}



