const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const path = require ('path');
const cors = require ('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

let todos = [];

function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i;
  }
  return -1;
}

function removeAtIndex(arr, index) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i]);
  }
  return newArray;
}

function GetTodos (req, res) {
  res.json(todos);
};



function PostTodos (req, res)  {
  var ctr = 1;
  const newTodo = {
    id:ctr,
    title: req.body.title,
    description: req.body.description
  };
  ctr = ctr +1;
  todos.push(newTodo);
  res.status(201).json(newTodo);
};



 function DeleteTodos (req, res)  {
  const todoIndex = findIndex(todos, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos = removeAtIndex(todos, todoIndex);
    res.status(200).send();
  }
};

function html (req,res) {
  res.sendFile(path.join(__dirname ,"index.html"));
}


function WrongRoute (req, res) {
  res.status(404).send("The Route you have Entered is not Correct");
};



app.get('/todos', GetTodos);
app.post('/todos', PostTodos);
app.delete('/todos/:id', DeleteTodos);
app.get("/",html);
app.all('*' , WrongRoute);


function started() {
    console.log(`Example app listening on port ${port}`);
}


app.listen(port, started);

