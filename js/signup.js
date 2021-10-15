
function signUp(){

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    var full_name = document.getElementById('full_name').value
    const phone = document.getElementById('phone').value
    var age = document.getElementById('age').value
    firebase.auth().createUserWithEmailAndPassword(email,password)
    document.getElementById("success").innerHTML = "account created successfully: "+user.email
    alert('User Created!!')
    location.replace("signin.html")
    // .then(function() {

    //   var user = auth.currentUser

    //   var database_ref = database.ref()

    //   var user_data = {
    //     email : email,
    //     full_name : full_name,
    //     phone : phone,
    //     age : age,
    //     last_login : Date.now()
    //   }

    //   database_ref.child('users/' + user.uid).set(user_data)

    //  
    // })
     

    .catch((error)=>{
        document.getElementById("error1").innerHTML = error.message
    })
}
