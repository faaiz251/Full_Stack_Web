function logResponseBody(jsonBody) {
    console.log(jsonBody);
}

function callback(result) {
    result.json().then(logResponseBody);
}

var sendObj = {
    method: "GET"
};

fetch("http://localhost:3000/handleSum?counter=100", sendObj).then(callback);
