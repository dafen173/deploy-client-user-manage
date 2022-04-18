import React from 'react'
import {useState} from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { editGroup } from '../action/editGroup'
import { editGroupOnUsersPage } from '../action/editGroupOnUsersPage'


export const EditGroup = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const [groupValue, setGroupValue] = useState(props.group.groupname)
    const [describeValue, setDescribeValue] = useState(props.group.groupdescription)

    const editId = props.group.id
    const dispatch = useDispatch()

    const editHandler = (e) => {
        e.preventDefault()
        console.log(groupValue)
        console.log(describeValue)
        dispatch(editGroup(groupValue, describeValue, editId))

        dispatch(editGroupOnUsersPage(groupValue, editId))

        setIsOpen(false)
    }

return (  
    <React.Fragment>
      <button className="edit" onClick={() => setIsOpen(true)}>
          Edit
      </button>

      {isOpen && (
        <div className='modal'>
          <div className='modal-body'>
            <h1>Edit Group</h1>
            <p>Введите новые данные</p>
          
            <form onSubmit={editHandler}> 
                <input value={groupValue} onChange={ e => setGroupValue(e.target.value)} />
                <input value={describeValue} onChange={ e => setDescribeValue(e.target.value)} />
                <button type="submit">Edit Group</button>            
            </form>

            <button onClick={() => setIsOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
        

  )     
}


EditGroup.propTypes = {
  //props: PropTypes.object.isRequired
  props: PropTypes.object
} 

