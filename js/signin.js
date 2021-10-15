firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("premium.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    // Declare user variable
    // var user = auth.currentUser
  
    // // Add this user to Firebase Database
    // var database_ref = database.ref()

    // // Create User data
    // var user_data = {
    //   last_login : Date.now()
    // }

    // // Push to Firebase Database
    // database_ref.child('users/' + user.uid).update(user_data)

    .catch((error)=>{
       
        document.getElementById("error").innerHTML = error.message
    })
}

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        document.getElementById("reset").innerHTML = "Reset link sent to: "+user.email
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = "Unable to send email at: "+user.email
    });
}