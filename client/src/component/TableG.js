import React from 'react'
import axios from 'axios'

const TableG = (props) => {
    
    const update = (num,id) => {


        axios.put('http://localhost:8000/api/players/update/' + id, props.num==1?{"games.game1":num}: props.num==2?{"games.game2":num}:{"games.game3":num}

        )
            .then(res =>{ console.log(res)
                
            })
            .catch(err => console.log(err))}
  return (
    <div>
       <table style={{margin:"0 auto"}}  border="1">
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
               
               <td>
                {props.num==1?
                <div>
                <button onClick={()=>update(1,item._id)} style={{backgroundColor:item.games.game1==1?"green":""}}>Playing</button>
                <button onClick={()=>update(-1,item._id)} style={{backgroundColor:item.games.game1==-1?"red":""}}>not playing</button>
                <button onClick={()=>update(0,item._id)} style={{backgroundColor:item.games.game1==0?"yellow":""}}>undecided</button></div>
                :
                props.num==2?
                <div>
                <button onClick={()=>update(1,item._id)} style={{backgroundColor:item.games.game2==1?"green":""}}>Playing</button>
                <button onClick={()=>update(-1,item._id)} style={{backgroundColor:item.games.game2==-1?"red":""}}>not playing</button>
                <button onClick={()=>update(0,item._id)} style={{backgroundColor:item.games.game2==0?"yellow":""}}>undecided</button>
                </div>
                :
                <div>
                    <button onClick={()=>update(1,item._id)} style={{backgroundColor:item.games.game3==1?"green":""}}>Playing</button>
                <button onClick={()=>update(-1,item._id)} style={{backgroundColor:item.games.game3==-1?"red":""}}>not playing</button>
                <button onClick={()=>update(0,item._id)} style={{backgroundColor:item.games.game3==0?"yellow":""}}>undecided</button>
                </div>

            }
             
                </td>

            </tr>
            

            )
            }
            </tbody>




        </table>
      
    </div>
  )
}

export default TableG
