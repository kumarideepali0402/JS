// fetch api provides an interface for sending/receiving resources 
// let promise=fetch(url,[options]);

url="https://dummyjson.com/quotes/random/facts"
let promise=fetch(url);
console.log(promise);

const getFacts=async()=>{
    console.log("fetching data..........")
    let response= await fetch(url);  

    console.log(response);
    let data=await response.json();
    console.log(data);
    
}

// AJAX=Asynchronous JS and XML
// JSON=JS object notation
// json():return a second promise that resolves with the result of parsing the response bosdy text as JSON
