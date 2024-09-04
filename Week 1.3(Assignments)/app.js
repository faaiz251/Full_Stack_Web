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