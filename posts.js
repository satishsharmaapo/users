
  
function clearmodal(){
  $("#username").val("");
  $("#emailid").val("");
  $("#editshow").hide();
  $("#addshow").show();
  $("#exampleModalLabel").show();
  $("#exampleModalLabel1").hide();
}
var form = document.getElementById("form");
form.addEventListener("submit", function (e) {
   
  var username = document.getElementById("username").value;
  var emailid = document.getElementById("emailid").value;
 
   e.preventDefault();
  //fetch post request
  //fetch("http://localhost:3000/users/", {

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
    location.reload();
});


 
