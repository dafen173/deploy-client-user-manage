import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import { removeGroup } from '../action/removeGroup'

function DeleteGroup (props) {
  const dispatch = useDispatch()
  const deleteId = props.group.id

  const userSelector = useSelector(state => state.users.items)

  function deleteHandler () {
    //console.log(deleteId)
    //console.log(props.group.groupname)
    
    // let groupIsEmpty = true
    // for (let i = 0; i < userSelector.length; i++) { 
    //   for (let key in userSelector[i]) {  
    //     if (userSelector[i][key] === props.group.groupname) { 
    //       console.log('yessssssssssssss')
    //       alert('This group already has users and CANNOT BE DELETED!')
    //       groupIsEmpty = false
    //     }
    //   } 
    // } 
    // if (groupIsEmpty) { 
    //   console.log("grop is empty, can be deleted!!!")
    //   dispatch(removeGroup(deleteId))
    // }


    if ( userSelector.find(el => el.groupname === props.group.groupname) ) {
      console.log('This group already has users and CANNOT BE DELETED!')
      alert('This group already has users and CANNOT BE DELETED!')
    } else {
      console.log('grop is empty, can be deleted!!!')
      dispatch(removeGroup(deleteId))
    }
  }


  return (  
    <React.Fragment>
      <button className="rm" onClick={deleteHandler}>
          Delete
      </button>   
    </React.Fragment>
  )     
}



DeleteGroup.propTypes = {
  //props: PropTypes.object.isRequired
  props: PropTypes.object
} 

export default DeleteGroup


