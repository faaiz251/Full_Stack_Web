// //Creating an express HTTP server in Node.js which will handle the logic of a file server.

// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();




// function FilesList(req,res) {
//     fs.readdir(path.join(__dirname, './Files/'), (err, Files) => {
//         if (err) {
//           return res.status(500).json({ error: 'Failed to retrieve files' });
//         }
//         res.json(Files);
//       });
// }


// function ContentofFile(req,res) {
//     const filepath = path.join(__dirname, './files/', req.headers.file1.txt);
//     function files(err,data) {
//         if(err) {
//             return res.status(404).send('File not found');
//     }
//     else {
//     res.send(data);
//     }
// }
    
//      fs.readFile (filepath ,'utf-8' , files);
// }



// function WrongRoute (req, res)  {
//     res.status(404).send('Route not found');
//   };

// app.get('/files' , FilesList);
// app.get('/files/file1.txt', ContentofFile);
// app.all('*', WrongRoute);

// function started() {
//     console.log(`Example app listening on port ${port}`)
// }

// app.listen(port, started);




const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;



function FilesList(req, res) {
    fs.readdir(path.join(__dirname, './Files/'), (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve files' });
        }
        res.json(files);
    });
}


function ContentofFile(req, res) {
    const filename = req.headers.files; 
    const filepath = path.join(__dirname, './Files/', filename);

    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(404).send('File not found');
        }
        res.send(data);
    });
}


function WrongRoute(req, res) {
    res.status(404).send('Route not found');
}


app.get('/files', FilesList);
app.get('/files/file2.txt', ContentofFile);
app.all('*', WrongRoute);


function started() {
    console.log(`Example app listening on port ${port}`);
}


app.listen(port, started);


