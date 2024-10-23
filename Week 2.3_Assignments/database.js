const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
const port = 3000;
const app = express();

app.use(bodyParser.json());

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
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
};


function PostTodos (req, res)  {
    var ctr = 1;
  const newTodo = {
    id: ctr,
    title: req.body.title,
    description: req.body.description
  };
  ctr = ctr + 1;
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo);
    });
  });
};
//

function DeleteTodos (req, res)  {

  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      todos = removeAtIndex(todos, todoIndex);
      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).send();
      });
    }//
  });
};

function WrongRoute (req, res) {
  res.status(404).send('You have Entered the wrong Route');
  
};


app.get('/todos', GetTodos);
app.post('/todos', PostTodos);
app.delete('/todos/:id',DeleteTodos);
app.all('*' , WrongRoute);


function started() {
    console.log(`Example app listening on port ${port}`);
}


app.listen(port, started);