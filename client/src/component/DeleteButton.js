import React from 'react'
import axios from 'axios';
    
export default props => {
    
    
    
    const deletePerson = e => {
      
        axios.delete('http://localhost:8000/api/Players/delete/' + props.Id)
            .then(res=>{
                props.successCallback();
            })
    }
    
    return (
        <button style={{backgroundColor:"red"}} onClick={deletePerson}>
            Delete
        </button>
    )
}