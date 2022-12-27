import React,{useState,useEffect} from 'react'
import Table from '../component/Table'
import axios from 'axios'
import { Link } from '@reach/router'



const List = () => {
    const [projects,setProjects]=useState("")
    const [loaded,setLoaded]=useState("")
    useEffect(()=>{
        axios.get('http://localhost:8000/api/Players/')
            .then(res=>{
                setProjects(res.data);
                setLoaded(true);
                
            })
            .catch(err => console.error(err));
    },[]);
  //   const removeFromDom = personId => {
        
  //     setPlayers(players.filter(person => person._id != personId))
  // }
  return (
    <div>
      <h1>project maneger</h1>
      {loaded==true &&
      <div style={{display:"flex"}}>
        <Table data={projects} state={-1} />
        <Table  data={projects} state={0} />
        <Table  data={projects} state={1} />
        </div>}v 
    </div>
  )
}

export default List
