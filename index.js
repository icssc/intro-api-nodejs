
// We will be using the fetch module to make API requests. 
// Install by using 'npm install node-fetch'
import fetch from "node-fetch";


// You might get an error saying "Cannot use import statement outside a module"
// In 'package.json' add "type": "module", and it will be fixed.

// const url = "https://api.peterportal.org/rest/v0/courses/all"

//To pass in parameters to a GET request, we specify them in the URL.
let url = "https://api.peterportal.org/rest/v0/grades/calculated"

// JavaScript provides us with URLSearchParams to help format and create our url Parameters
// Looks like https://example.com?query=value&foo=bar
const params = new URLSearchParams({
    year: "2019-20",
    instructor: "PATTIS, R.",
    department: "I&C SCI",
    number: 33
});

url = url + '?' + params.toString();
console.log(url);


// we need to specify options for our request, so define a js object
// The options to be used as arguments when we call fetch
const options = {
    // Each request has a method type, GET, POST, PUT, DELETE
    // PeterPortal API most commonly uses GET requests, since we are GETting data.
    method: "GET",
    // Not necessary for every Web API, but it's good practice
    // Ensures our response is in JSON format.
    headers : {
        "Content-Type": "application/json",
    }

    //There are many other headers and options you can add to your API request, which will largely depend on the API you are using.
    // e.g. API keys, CORS, credentials, etc. More can be found in the API or fetch documentation.
    // https://developer.mozilla.org/en-US/docs/Web/API/fetch
};



// // Now we send our request! 
fetch(url, options)
    // Fetch is promised based -- the promise is not fulfilled yet...
    .then(response => response.json())
    // Now the promise is fulfilled! Let's take a look at the response! 
    .then(json => {
        console.log(JSON.stringify(json));
    })
    // Best practice to do error catching! 
    .catch(console.error);