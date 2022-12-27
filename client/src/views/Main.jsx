import React,{useState} from 'react'
import Create from '../component/Create'
import { navigate } from '@reach/router'
import axios from 'axios'
import LoginForm from '../component/LoginForm';


const Main = () => {
    const [projects,setProjects]=useState("")
    const [errors, setErrors] = useState([]); 
    const createProject=project=>{
        axios.post('http://localhost:8000/api/Players/new',project)
               .then(res=> {setProjects([...projects, res.data]);navigate("/show")})
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
        <h1>
            Add a new project from here
            <Create initialName="" initialDate="" onSubmitProp={createProject}/>
        </h1>
      
    </div>
  )
}

export default Main
