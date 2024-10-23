const arr = [1,2,3];

function callback(value) {
    return value *2;
}

const arr2 = arr.map(callback);
console.log(arr2);