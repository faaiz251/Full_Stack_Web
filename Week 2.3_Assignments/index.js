//Creating a HTTP server in Node.js which will handle the logic of an authentication server.

const express = require("express")
var bodyParser = require('body-parser')
const port = 3000;
const app = express();
app.use(bodyParser.json())
app.use(express.json());

var users = [];


function Signup (req,res)  {

    var user = req.body;
    var userAlreadyExits = false;

    for(var i=0;i<users.length;i++) {
        if(users[i].email === user.email) {
            userAlreadyExits = true;
            break;
        }
    }

    if(userAlreadyExits) {
       res.status(400).send("Username Already Existed");
    }
    else {
        users.push(user);
        res.status(201).send("Signup Successfully");
    }
}

function Login(req,res) {
    var use = req.body ;
        var userReturn = null;
        for(var i=0;i<users.length;i++) {
            if(users[i].username === use.username && users[i].password===use.password) {
                userReturn = users[i];
                break;
            }
        }
        if(userReturn) {
        var user1 = {
            Firstname: userReturn.firstname,
            Lastname: userReturn.lastname,
            Email: userReturn.email
        }
    
        res.status(200).send(user1);

    }
    else {
        res.status(400).send("Useranme Already exits");
    }


}

function Getdata(req,res) {
    
    var user = req.headers.username;
    var pass = req.headers.password;

    var userFound = false;
    for(var i=0;i<users.length;i++) {
        if(users[i].username === user.username && users[i].password===pass.passwrod) {
            userFound = true;
            break;
        }
    }

    if(userFound) {
        
    for(var i=0;i<users.length;i++) {
        var user = {
            Firstname: users[i].firstname,
            Lastname: users[i].lastname,
            Email: users[i].email,
        }
    }
        res.status(201).send(user);
        }
           else {
            res.status(401).send("Useraname or password is Invalid or missing");
           }
        
    }

app.post('/signup', Signup)
app.post('/login', Login)
app.get('/data', Getdata)


function started() {
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)
