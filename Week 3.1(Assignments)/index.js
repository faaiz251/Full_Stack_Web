// Creating a Course Selling Website

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const adminAuthentication = (req,res,next) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const admin = ADMINS.find(a => a.username === username && a.password === password);
    if(admin) {
        next();
    }
    else {
        res.status(403).send("Admin Authentication Failed");
    }
}

const userAuthentication = (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const user = USERS.find(u => u.username === username && u.password === password);
    if (user) {
      req.user = user; 
      next();
    } else {
      res.status(403).json({ message: 'User authentication failed' });
    }
  };

  // For Admin 

function AdminSignup (req, res) {
    const admin = req.body;
    const existingAdmin = ADMINS.find(a => a.username === admin.username);
    if(existingAdmin) {
        res.status(403).send("Admin Already Existed");
    }
    else {
        ADMINS.push(admin);
        res.status(200).send("Admin Created Successfully");
    }
    };

 function AdminLogin (req, res)  {
        res.json({ message: 'Logged in successfully' });
      };
      
    function AdminCourse (req, res)  {
        const course = req.body;
        var ctr = 1002;
        course.id = ctr;
        ctr =ctr + 1;
        COURSES.push(course);
        res.json({ message: 'Course created successfully', courseId: course.id });
      };

      
function AdminPutCourses(req, res)  {
    const courseId = parseInt(req.params.courseId);
    const course = COURSES.find(c => c.id === courseId);
    if (course) {
      course.title = req.body.title;
      course.price = req.body.price;
      res.json({ message: 'Course updated successfully' });
    } else {
      res.status(404).send("Course Not Found");
    }
  };

  function AdminGetCourses(req, res)  {
    res.json({ courses: COURSES });
  };
  
  //For User 

function UserSignup(req, res)  {
    const user = {
      username: req.body.username,
      password: req.body.password,
      purchasedCourses: []
    }
    USERS.push(user);
    res.json({ message: 'User created successfully' });
  };
  
  function UserLogin (req, res)  {
    res.json({ message: 'Logged in successfully' });
  };
  
  function UserCourses (req, res)  {
    let filteredCourses = [];
    for (let i = 0; i<COURSES.length; i++) {
      if (COURSES[i].published) {
        filteredCourses.push(COURSES[i]);
      }
    }
    res.json({ courses: filteredCourses });
  };
  
 function UserPurchasedCourse (req, res)  {
    const courseId = Number(req.params.courseId);
    const course = COURSES.find(c => c.id === courseId && c.published);
    if (course) {
      req.user.purchasedCourses.push(courseId);
      res.json({ message: 'Course purchased successfully' });
    } else {
      res.status(404).json({ message: 'Course not found or not available' });
    }
  };
  
 function GetPurchasedCourse(req, res)  {
    var purchasedCourseIds = req.user.purchasedCourses; [1, 4];
    var purchasedCourses = [];
    for (let i = 0; i<COURSES.length; i++) {
      if (purchasedCourseIds.indexOf(COURSES[i].id) !== -1) {
        purchasedCourses.push(COURSES[i]);
      }
    }
}



        //Admins Routes
      app.post('/admin/signup', AdminSignup);
      app.post('/admin/login', adminAuthentication, AdminLogin);
      app.post('/admin/courses', adminAuthentication, AdminCourse);
      app.put('/admin/courses/:courseId', adminAuthentication, AdminPutCourses);
      app.get('/admin/courses', adminAuthentication, AdminGetCourses);

        // Users Routes
      app.post('/users/signup', UserSignup);
      app.post('/users/login', userAuthentication, UserLogin);
      app.get('/users/courses', userAuthentication, UserCourses);
      app.post('/users/courses/:courseId', userAuthentication, UserPurchasedCourse);
      app.get('/users/purchasedCourses', userAuthentication, GetPurchasedCourse);


    function started() {
        console.log(`Example app listening on port ${port}`);
    }
    
    
    app.listen(port, started);
    