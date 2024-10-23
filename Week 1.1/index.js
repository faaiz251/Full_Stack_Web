//Sum of 100 numbers

function sumNumbers(n) {
 var sum=0;
 for(let i=1;i<=n;i++) {
    sum=sum+i;
 }
 console.log(sum);
}

//Read file

function readFile(err,Valueofn) {
    sumNumbers(Valueofn)
}

const fs = require('fs');
fs.readFile('Valueofn.txt' , 'utf8' , readFile);

 var answer = sumNumbers(100);
console.log(answer);


// Pattern printing 

 for (let i=1;i<=10;i++) {
    var stringtoprint ="";
    for(let j=1;j<=i;j++) {
       stringtoprint = stringtoprint + "*";
    }
    console.log(stringtoprint);
    }



    // Another pattern

     function starLine(n) {
            var stringtoprint ="";
            for (let i=0;i<n;i++) {
               stringtoprint = stringtoprint + "**";
            }
            console.log(stringtoprint);
            }
     function starrypattern(n) {
        for (let i=0;i<=n;i++) {
            starLine(i);
     }
    }

     var answer = starrypattern(10);
     console.log(answer);

     //fibonacci Series

     let a=0;
     let b=1;
     let c=0

     function calculate (n) {
      for(let i=1;i<=n;i++) {
         if(i==1) {
            console.log(a + ",");
            continue;
         }
         if(i==2) {
            console.log(b + ",");
            continue;
         }
         c=a+b;
         a=b;
         b=c;
         console.log(c + ",");
      }
      
     }

     var output = calculate(10);
     console.log(output);

     //pyramid printing pattern 

     function pyramid(n) {
      
      for(let i=1;i<=n;i++) {
         var space ="";
      let space1 = "";
         for(let j=1;j<=n-i;j++) {
            space = space + " ";
         }
         for(let k=1;k<=2*i-1;k++) {
         space1 = space1 + "*";
         }
         console.log(space + space1)
      }
     }

     var output = pyramid(5);
     console.log(output);


     



     