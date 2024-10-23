
const express = require('express')
 var bodyParser = require('body-parser')
const app = express()
const port = 3000
 app.use(bodyParser.json())


function  calculateSum(counter) {
    var sum=0;
    for(var i=1;i<=counter;i++) {
        sum =sum+i;
    }
        return sum;
    
}

function handleFirstRequest(req , res) { 
    var counter = req.query.counter;
        var answer = calculateSum(counter);
     
        var asnwerObject = {
            sum:answer
        };
       res.send(asnwerObject)    
}

app.get('/handleSum', handleFirstRequest)


function started() {
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)
