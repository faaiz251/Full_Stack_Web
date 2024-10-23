//Hollow Pattern

/*function middlerows(n) {
    var str="";
    str=str + "*";
    for(var i=0;i<n-2;i++) {
        str=str+ " ";
    }
    str=str + "*";
    console.log(str);
}


function firstlastRow(n) {
    var space = "";
    for(var i=0;i<n;i++) {
        space = space + "*";
    }
    console.log(space);
}


function fullpattern (n) {
    firstlastRow(n);

for(var j=0;j<n-2;j++) {
    middlerows(n);
}
firstlastRow(n);
}

var answer = fullpattern(5);
console.log(answer);

//Right Angle Triangle pattern

function rightanglePattern(n) {
    var space="";
    for(var i=0;i<n;i++)
    {
        for(var j=0;j<n-i;j++)
        {
            space=space + " ";
        }
        for(var k=0;k<i;k++) {
            space=space +"*";
        }
        space=space+ "\n";

    }
    console.log(space);
}

var answer = rightanglePattern(8);
console.log(answer);

//Reverse pyramid pattern

function reversepyrPattern(n) {
    var space="";
    for(var i=0;i<n;i++)
    {
        for(var j=0;j<i;j++)
        {
            space=space + " ";
        }
        for(var k=0;k<2*(n-i)-1;k++) {
            space=space +"*";
        }
        space=space+ "\n";

    }
    console.log(space);
}

var answer8 = reversepyrPattern(8);
console.log(answer8);*/


//Reverse pyramid + simple pyramid

function reversepyrPattern(n) {
    var space="";
    for(var i=0;i<n;i++)
    {
        for(var j=0;j<i;j++)
        {
            space=space + " ";
        }
        for(var k=0;k<2*(n-i)-1;k++) {
            space=space +"*";
        }
        space=space+ "\n";
        console.log(space);
    }

    for(let i=2;i<=n;i++) {
        var space ="";
        for(let j=1;j<=n-i;j++) {
           space = space + " ";
        }
        for(let k=1;k<=2*i-1;k++) {
        space = space + "*";
        }
        console.log(space)
     }
     
}

 var solution = reversepyrPattern(5);
 console.log(solution);






