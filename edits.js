function editModel() {
  var username1 = $("#username").val();
  var emailid1 = $("#emailid").val();
  //  formData.append('username' , username);
  //  formData.append('emailid' , emailid);
  //console.log(username + "  " + emailid);

  if ($(":checkbox:checked").attr("id") != undefined) {
    fetch("http://localhost:3000/users/" +
        parseInt($(":checkbox:checked").attr("id")),
      {
        method: "PUT",
        body: JSON.stringify({
          username: username1,
          emailid: emailid1,
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
