export const removeGroup = (id) => {
    return async dispatch => {
        try {
            const response = await fetch(`https://server-user-manage.herokuapp.com/api/manage-group/${id}`, {
                method: 'DELETE'
            }) 
            const json = await response.json()
            dispatch({type: 'DELETE_GROUP', payload: json })
        } catch (e) {
          console.warn('Error: ', e.message)
          alert('Error: ' + e.message)
        }
    }
}



// export const removeGroup = (id) => {
//     return async dispatch => {
//         const response = await fetch(`http://localhost:8080/api/manage-group/${id}`, {
//               method: 'DELETE'
//             }) 
//         const json = await response.json()
//         dispatch({type: 'DELETE_GROUP', payload: json })
//     }
// }


