function editModel() {
  var username = $("#username").val();
  var emailid = $("#emailid").val();
  //  formData.append('username' , username);
  //  formData.append('emailid' , emailid);
  //console.log(username + "  " + emailid);

  if ($(":checkbox:checked").attr("id") != undefined) {
    fetch("https://my-json-server.typicode.com/satishsharmaapo/users/users/" +
        parseInt($(":checkbox:checked").attr("id")),
      {
        method: "PUT",
        body: JSON.stringify({
          username: username,
          emailid: emailid,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", JSON.stringify(response)));
  } else {
    alert("Please select atmost 1 checkbox for edition");
  }
  location.reload();
}
