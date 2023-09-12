const Todo = require('../models/Todo')

//create a new todo
exports.createTodo = async (req, res) => {
    try{
        const { task, description } = req.body
        const newTodo = new Todo( { 
            task, 
            description,
            date: new Date()
        } )
        const savedTodo = await newTodo.save()
        res.status(201).json(savedTodo)
    } catch(err){
        console.error(err)
        res.status(500).json({ error: 'Error creating a new todo'})
    }
}

//Get all todos
exports.getAllTodos = async (req, res) => {
    try{
        const todos = await Todo.find()
        res.status(200).json(todos)
    } catch(err){
        res.status(500).json({ error: 'Error fetching todos'})
    }
}

// Get a specific todo by id
exports.getTodoById = async (req, res) => {
    try{
        const { id } = req.params
        const todo = await Todo.findById(id)
        res.status(200).json(todo)
        if(!todo){
            return res.status(404).json({ error: 'Todo not found' })
        }
    } catch(err){
        res.status(500).json({ error: 'Error fetching the todo' })
    }
}

//get past todos
exports.getPastTodos = async(req, res)=>{
    try {
        const currentDate = new Date()

        //find tasks created before the current date
        const pastTasks = await Todo.find( {date: { $lt: currentDate}})
        res.json(pastTasks)
    } catch (error) {
        console.error("Error fetching past tasks: ", error)
        res.status(500).json({ error: 'Error fetching past tasks' })
    }
}

// update a specific todo by Id
exports.updateTodoById = async (req, res) => {
    try{
        const { id } = req.params
        const { task, description } = req.body
        const updateTodo = await Todo.findByIdAndUpdate(id, { task, description }, { new: true })
        res.status(200).json( { updateTodo })
        if(!updateTodo){
            return res.status(404).json({ error: 'Todo not found'})
        }
    }catch(err){
        res.status(500).json({ error: 'Error updating the todo'})
    }
}

//Delete a specific todo by Id
exports.deleteTodoById = async (req, res) => {
    try{
        const { id} = req.params
        const deletedTodoById = await Todo.findByIdAndDelete(id)
        if(!deletedTodo){
            return res.status(404).json({ error: 'Todo not found'})
        }
        res.status(204).json( {message: `Task ${id} deleted successfully`} )
    }catch(err){
        res.status(500).json({ error: 'Error deleting the todo' })
    }
}

//delete all tasks in the collection
exports.deleteAll = async (req, res)=>{
    try{
        const clean = await Todo.deleteMany({})
        res.status(200).json({message: "Successly deleted all tasks"})
    }catch(err){
        res.status(200).json({error: "Error deleting all tasks"})
    }
}