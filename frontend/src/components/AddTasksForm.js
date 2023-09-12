import React, {useState} from 'react'
import axios from 'axios'
import './AddTaskForm.css'

const AddTasksForm = () => {
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')

    const handleTaskChange = (e) => {
        setTask(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    //send the task description to the server
    axios.post('/api/todos', {task, description})
        .then((response) => {
            //task created successfully, update the ui or show a message
            console.log('task created successfully', response.data)
            setTask('')
            setDescription('')
        })
        .catch((err) => {
            console.error('Error creating task' ,err)
        })


  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
            type='text'
            placeholder= 'task'
            value={task}
            onChange={handleTaskChange}
        />
        <textarea>
            placeholder= 'Description'
            value={description}
            onChange={handleDescriptionChange}
        </textarea>
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default AddTasksForm
