import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './PastTasks.css'


const PastTasks = () => {
    const [pastTasks, setPastTasks] = useState([])

    useEffect(()=>{
        //fetch past tasks from the server based on the date creteria
        axios.get('/api/todos/past')
            .then(response => {
                setPastTasks(response.data)
            })
            .catch(err => {
                console.error('Error fetching past tasks', err)
            })
    })
  return (
    <div>
      <h1>Past Tasks</h1>
      <ul>
        {pastTasks.map((task)=>(
            <li key={task._id}>
                <strong>Task: </strong> {task.task}
                <br/>
                <strong>Description: </strong> {task.description}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default PastTasks
