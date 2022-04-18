import React from 'react'
import {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import {editUser} from '../action/editUser'


export const EditUser = (props) => {
  const groupNameSelector = useSelector(state => state.groups.groupitems)

  const [isOpen, setIsOpen] = useState(false)
  const [userValue, setUserValue] = useState(props.user.username)
  const [groupValue, setGroupValue] = useState(props.user.groupname)

  const editId = props.user.id
  const dispatch = useDispatch()

  const editHandler = (e) => {
      e.preventDefault()
      console.log(userValue)
      console.log(groupValue)

      dispatch(editUser(userValue, groupValue, editId))
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
            <h1>Edit User</h1>
            <p>Введите новые данные</p>         
            <form onSubmit={editHandler}> 
                <input value={userValue} onChange={ e => setUserValue(e.target.value)} />
                <select value={groupValue} onChange={ e => setGroupValue(e.target.value)}>                        
                    {groupNameSelector.map( item => 
                        <option key={item.id} value={item.groupname}>{item.groupname}</option>                                                   
                    )}                   
                </select>
                <button type="submit">Edit User</button>            
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


EditUser.propTypes = {
  //props: PropTypes.object.isRequired
  props: PropTypes.object
} 


//export default EditUser
