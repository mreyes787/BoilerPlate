//we need this file to use the express package to create a server
const express = require('express');
const app = express()
const morgan = require('morgan');
const port = 4000;

//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Listening on port 4000
app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
});

//Let's put some dummy data in for a route to make sure our express server 
//is running and serving data correctly
app.get('/api/students', (req, res) => {
    const students = [
        { id: 1, firstName: 'Captain', lastName: 'fancy'},
        { id: 2, firstName: 'John', lastName: 'buttercup'},
        { id: 3, firstName: 'Dusty', lastName: 'Trail'},
    ];
    res.json(students);
});

