
import React,{useState,useEffect} from 'react'
// import { Link } from '@reach/router'
import DeleteButton from './DeleteButton'
import axios from 'axios'

const Table = (props) => {
    const [projects,setProjects]=useState("")
    const [loaded,setLoaded]=useState("")
    useEffect(()=>{
        axios.get('http://localhost:8000/api/Players/')
            .then(res=>{
                setProjects(res.data);
                setLoaded(true);
                
            },[])
            .catch(err => console.error(err));
    })
    const update=(num,id)=>{
        axios.put('http://localhost:8000/api/players/update/'+id, {status:num})
        .then(res =>{ console.log(res)
            
        })
        .catch(err => console.log(err))
      }
      
  return (
    <div style={{width:"20vw",height:"80vh",border:"1px solid black"}}>
        {props.state==-1?<h3 style={{color:'blue'}}>Backlog</h3>:props.state==0?<h3 style={{color:"yellow"}}>in progress</h3>:<h3 style={{color:"green"}}>completed</h3>}
        {loaded && projects.filter(p=>p.status==props.state).map((item,i)=>{

           return <div key={i}><p>{item.name}</p>
           
           
            <p>Date:{item.date}</p>
            {props.state ===-1?<button onClick={()=>update(0,item._id)}  style={{backgroundColor:"yellow"}}>start doing</button>:props.state==0?<button  onClick={()=>update(1,item._id)}  style={{backgroundColor:"green"}}>done the task</button>:<DeleteButton Id={item._id}    />}
            </div>
})}
       {/* <table style={{margin:"0 auto"}}  border="1">
        <thead>
            <tr>
                <th>
                    Player Name
                </th>
                <th>
                    preferd position
                </th>
                <th>
                    Actions
                </th>
            </tr>
            </thead>
            <tbody>
            {props.data.map((item,i)=>
            <tr key={i}>
                <td>{item.name}</td>
                <td>{item.pos}</td>
               <td>
                <DeleteButton Id={item._id} name={item.name} successCallback={(e)=>props.removefromdom(item._id)} />
                </td>

            </tr>
            

            )
            }
            </tbody>




        </table> */}
      
    </div>
  )
}

export default Table
