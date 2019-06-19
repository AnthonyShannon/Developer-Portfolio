// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBAAMOOqQKP6Hjal7itgJSdSmX53XuUOgQ",
    authDomain: "my-portfolio-messages.firebaseapp.com",
    databaseURL: "https://my-portfolio-messages.firebaseio.com",
    projectId: "my-portfolio-messages",
    storageBucket: "my-portfolio-messages.appspot.com",
    messagingSenderId: "170669253813",
    appId: "1:170669253813:web:26e1ae32237771d5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var newDateAdded = moment().format("LLLL")
  
  
  $("#submitButton").on("click", function () {
    event.preventDefault();
    console.log("Name: " + $("#contactName").val())
    var newName = $("#contactName").val().trim()
    console.log("Email: " + $("#contactEmail").val())
    var newEmail = $("#contactEmail").val().trim()
    console.log("Message: " + $("#contactMessage").val())
    var newMessage = $("#contactMessage").val().trim()
    $("#contactMessage").reset()
    $(".form-group").reset()
    database.ref().push({
      Name: newName,
      Email: newEmail,
      Message: newMessage,
      dateAdded: newDateAdded
    })
  })
  