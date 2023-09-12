import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AddTasksForm from './components/AddTasksForm'
import PastTasks from './components/PastTasks'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/past-tasks'>Past Tasks</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' exact Component={AddTasksForm} />
            <Route path='/past-tasks' exact Component={PastTasks} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App

