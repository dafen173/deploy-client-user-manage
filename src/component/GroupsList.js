import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import {getGroups} from '../action/getGroups'
import {GroupItem} from './GroupItem'

export const GroupsList = () => {
       
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGroups())
    }, [dispatch])
    
    const groupSelector = useSelector(state => state.groups.groupitems)

    return (
        <div>
            {groupSelector.map( (item, index) => 
                    <GroupItem 
                        group={item} 
                        key={item.id} 
                        index={index} 
                    />
            )}
        </div>  
    )
}

