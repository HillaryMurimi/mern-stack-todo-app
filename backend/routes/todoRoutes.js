const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController')


//create a new todo
router.post('/', todoController.createTodo)

//get all todos
router.get('/', todoController.getAllTodos)

//get a specific todo by Id 
router.get('/:id', todoController.getTodoById)

//get past todos
router.get('/past', todoController.getPastTodos)

//Update a specific todo by Id
router.put('/:id', todoController.updateTodoById)

//Delete a specific todo by Id
router.delete('/:id', todoController.deleteTodoById)

//delete all tasks in the collection
router.delete('/', todoController.deleteAll)

module.exports = router
