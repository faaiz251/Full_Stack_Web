//Assignments js (easy)


//Assignments 1.1

let st1 = "lion";
let st2 = "lion";


let charArray1 = st1.split('');
let charArray2 = st2.split('');


charArray1.sort();
charArray2.sort();



let sorted1 = charArray1.join('');
let sorted2 = charArray2.join('');


function isAnagram(str1, str2) {
    if(str1==str2) {
        return true;
    }
    else {
        return false;
    }
}

var answer = isAnagram(sorted1,sorted2);
console.log(answer);


// Assignment 1.2

function solution(transactions) {
    var totalspent = {};
    for(var i=0;i<transactions.length;i++){
        var t = transactions[i];
        if(totalspent[t.category])
            totalspent[t.category] = totalspent[t.category] + t.Price;
        else 
        totalspent[t.category]= t.Price;
    }
    var keys = Object.keys(totalspent)
    console.log(totalspent)

    var definiton =[];
    for(var i=0;i<keys.length;i++) {
        var category = keys[i];
        var obj = {
            category: category,
            amountspend: totalspent[category]
        }
        definiton.push(obj)
    }
    console.log(definiton)
}


var transactions = [ {
    itemname: "ThumpsUp",
    category: "Drink",
    Price: 20
},
{
    itemname: "Pepsi",
    category: "Drink",
    Price: 30

}, 
{
    itemname: "Paties",
    category: "Food",
    Price: 10
},
]

var answer= solution(transactions);
console.log(answer)


//assignment (medium) 

//Assignment 2.1

function punctuations(str) {
    var answer="";
    for(i=0;i<str.length;i++) {
        if(str[i]=="?" ||  str[i]==" " || str[i]=="!" || str[i]=="." || str[i] == ",")
            {

            }   
            else {
                answer+=str[i];
            }
    }
    console.log(answer);
}

    function isPalindrome(str) {

    str =str.toLowerCase();
   
     str = punctuations(str);
        console.log(str);

        let r= str.split('')
        let t=r.reverse();
        let reverseString = t.join('');
        console.log(reverseString);

    
            if(reverseString===str) 
            {
                return true;
            }         
              else {
                        
            return false; 
        }
        }
        
        var solution= isPalindrome("?i did i")
        console.log(solution);
    

   

//Assignment 2.2
//Calculating time taken in to calculate the sum of n 
function calculateTime(n) {
let startTime = new Date().getTime();
var sum=0;
for(var i=1;i<=n;i++) {
    sum=sum +1;
}

let endTime = new Date().getTime();
console.log((endTime-startTime)/1000);
}

var answer = calculateTime(1000000000);
console.log(answer);


//Assignment 3(hard)

//Assignment 3.1

class Calculator {
    constructor() {
        this.result = 0;
    }

    
    add(n1) {
        this.result += n1; 
        return this.result;
    }
    sub(n2) {
        this.result -=n2;
        return this.result;
    }
    sub(n2) {
        this.result -=n2;
        return this.result;
    }
    mult(n3) {
        this.result *=n3;
        return this.result;
    }
    div(n4) {
        this.result /=n4;
        return this.result;
    }
    zero() {
        this.result =0;
        return this.result;
    }
    solution() {
        return this.result;
    }


calculate(expression) {
   
    expression = expression.replace(/\s+/g, '');

    
    if (this.isValidExpression(expression)) {
        this.result = eval(expression);
    } 
    else {
        console.log("Invalid expression or characters.");
    }

    return this.result;
}


isValidExpression(expression) {
    return /^[\d+\-*/().]+$/.test(expression); 
}
}

//const calc = new Calculator();
console.log(calc.add(5));
console.log(calc.sub(9));
console.log(calc.mult(6));
console.log(calc.div(3));
console.log(calc.zero());
console.log(calc.solution());


console.log(calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7"));




//Assignment 3.2

class todo {
    constructor () {
        this.todo=[];
    }

    add(todos) {
        this.todo.push(todos);
    }


    remove(index) {
        this.todo.splice(index,1);
}
    update(index, newtodo) {
        this.todo[index]= newtodo;
    }

    getalltodos() {
        return this.todo;
    }

    get(index) {
        return this.todo[index];
    }

    zero() {
        this.todo= [];

    }
}


const calc = new todo();

calc.add("college");
calc.add("gym");
calc.add("football");


console.log(calc.getalltodos());

calc.remove(0);
console.log(calc.getalltodos());

calc.update('1', "gym");

console.log(calc.get(1));

calc.zero();
console.log(calc.getalltodos());

//Assignment Async js 

//Assignment 1.1
//Counting without using setInterval function

var counter = 1;

function printcounter() {
    console.clear();
    console.log(counter);
    counter += 1;
    setTimeout(printcounter, 1*1000);

}

setTimeout(printcounter, 1*1000);



//Assignement (medium) 

//Assignment to remove spaces from a file by reading it and writing it correctly


const fs = require('fs');


function clean(data) {
    let arr = data.split(" ");
    let array = [];
    for(var i=0;i<arr.length;i++) {
        if(arr[i].length === 0) {

        } else {
           array.push(arr[i]);
        }
    }
    var joint = array.join(" ");
    console.log(joint);
    return joint;
}

function fileWriting(err) {
    console.log("done");
}


function fileReading(err, data) {
    if(err) {
        console.error(err);
        return;
    }

    let cleanedData = clean(data);
    fs.writeFile("text.txt" , cleanedData, "utf-8" ,fileWriting )
}

fs.readFile('text.txt' , 'utf-8' , fileReading);


//Current time  Problem


function currentTime() {
    let currentDate = new Date();
    const solution =  currentDate.getHours() + ":" + currentDate.getMinutes() + ":" +
    currentDate.getSeconds();  
    if(currentDate.getHours() < 12) {
        
        console.log(solution + " " + "A.M.");
    }
else {
    const solution =  currentDate.getHours() - 12 + ":" + currentDate.getMinutes() + ":" +
        currentDate.getSeconds();  
    console.log(solution + " " + "P.M.");
}

}

function printTime() {
    console.clear();
    currentTime();
}

setInterval(printTime, 1000);


//Assignment 3
//Programs in Promises

function wait(n) {
 
    return new Promise((resolve,reject) => {
    setTimeout(() => {

        const kitchencleaned = true;

        if(kitchencleaned) {
       resolve("You clean the kitchen");
            console.log(resolve);
        }

        else {
            reject("you didn't cleaned the kitchen");
            console.log(reject);
        }

    },n);
    });
    
    }  


 wait(5000)

.then((message) => {
    console.log(message);  
})
.catch((error) => {
    console.log(error); 
});

//Assignment 2

    function sum (n) {
        var sum =0;
        for(var i=0;i<=n;i++) {
            sum += i;
        }
    }

    setTimeout(sum , 4000);

    var answer = sum(100000000000000);
    console.log(answer);