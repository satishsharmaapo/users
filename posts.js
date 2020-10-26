// this js module is used for posting the form data to the json server in the form of json data
var form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  var username = document.getElementById("username").value;
  var emailid = document.getElementById("emailid").value;
   e.preventDefault();
  //fetch post request
  //fetch("https://my-json-server.typicode.com/satishsharmaapo/users/users/", {
   
   // created localhost server using npm installation of json server
    fetch("https://my-json-server.typicode.com/satishsharmaapo/users/users/", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      emailid: emailid,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});


fetch('https://my-json-server.typicode.com/satishsharmaapo/users/users/')
  .then((response) => response.json())
  .then((json) => console.log(json))
