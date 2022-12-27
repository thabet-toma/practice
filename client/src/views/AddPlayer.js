import React ,{useState} from 'react'
import Create from '../component/Create';
import axios from 'axios';
import { Link,navigate } from '@reach/router';

const AddPlayer = () => {
    const [players,setPlayers]=useState("")
    const [errors, setErrors] = useState([]); 

    const handle=product1=>{
        axios.post('http://localhost:8000/api/Players/new', product1)
               .then(res=> {setPlayers([...players, res.data]);navigate("/players/list")})
               .catch(err=>{console.log(err)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
       }
  return (
    <div>
          <h2><Link to="/players/list">List</Link>|<Link to="/players/addPlayer">Add players</Link></h2>
         
          <Create onSubmitProp={handle} initialName="" initialPos="" >
           {errors.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>)}
           </Create>


      
    </div>
  )
}

export default AddPlayer
