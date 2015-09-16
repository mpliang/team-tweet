let authorized = () => {
console.log(localStorage["firebase:session::team-tweets"]);
if (localStorage["firebase:session::team-tweets"]){
  return;
}
  var ref = new Firebase("https://team-tweets.firebaseio.com/");
  ref.authWithOAuthPopup("twitter", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      alert('Authenticated');
    }
  });
}

authorized();
