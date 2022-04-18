import React from "react"
import PropTypes from "prop-types"
import DeleteUser from "./DeleteUser"
import {EditUser} from './EditUser'

const styles = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 2rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem'
    },
    input: {
      marginRight: '1rem'
    }
  }

function UserItem ( {user, index} ) {

    // const classes = []
    // if (user.completed) {
    //   classes.push('done')
    // }

    return (
        <li style={styles.li}>
            {/* <span className={classes.join(' ')}>       */}
            <span>            
                <strong>{index + 1}</strong>
                &nbsp;
                &nbsp;
                &nbsp;
                {user.username}  
                &nbsp;
                &nbsp;
                &nbsp;
                {user.created}   
                &nbsp;
                &nbsp;
                &nbsp;
                {user.groupname} 
            </span>   
            <div>
              <EditUser user={user}/>
              <DeleteUser user={user}/>  
            </div>                    
        </li>
    )
}



UserItem.propTypes = {
    user: PropTypes.object.isRequired,
    index: PropTypes.number
    //onChange: PropTypes.func.isRequired
} 

export default UserItem

      
