const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes')

const app = express()
const mongoURI = 'mongodb+srv://Module8:moduleeight@cluster-module8.4yqjj0o.mongodb.net/Todo-App?retryWrites=true&w=majority'

//Middleware
// app.use(cors())
app.use(bodyParser.json())

//Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useunifiedTopology: true })
    .then(()=>{
        app.listen(5000)
        console.log('MongoDB connected')
    })
    .catch(err=>{
        console.error('MongoDB connection error: ',  err)
    });

//Define routes
app.use('/api/todos', todoRoutes)

