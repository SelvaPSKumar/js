const url = "https://jsonplaceholder.typicode.com/users";
async function fetchText() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");

  console.log(response.status); // 200
  console.log(response.statusText); // OK

  if (response.status === 200) {
    let data = await response.text();
    // Handle Data
  }
}

fetchText();
//Set Interval
var listen = setInterval(function () {

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data[0].name)
        console.log(data[0].name);
    })
    .catch(function (err) {
      console.log(err);
    });

}, 2000);//2 second
//XML Http Request
function successListener() {
  var data = JSON.parse(this.responseText);
  alert(data[0].username);
}

function failureListener(err) {
  console.log('Request failed', err);
}

var request = new XMLHttpRequest();
request.onload = successListener;
request.onerror = failureListener;
request.open('get', 'https://jsonplaceholder.typicode.com/users', true);
request.send();

const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url, {
  method: 'GET'
})
  .then(function (res) {
    //response
    console.log(res);
  })
  .catch(function (err) {
    //error
    console.log("Error:" + err);
  });