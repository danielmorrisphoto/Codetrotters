var validation = function() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var isRestrationsSuccesful = true;
    
    if (firstName === ""){
        isRestrationsSuccesful = false;
        alert("invalid name!");
    }
    if (lastName === ""){
        isRestrationsSuccesful = false;
        alert("invalid last name!");
    }
    if (email === ""){
        isRestrationsSuccesful = false;
        alert("invalid email!");
    }
    if (confirmPassword === ""){
        isRestrationsSuccesful = false;
        alert("invalid password!");
    }
    // PASSWORD VALIDATION
    if (password !== confirmPassword){
        isRestrationsSuccesful = false;
        alert("password does not match");
    }
    if (confirmPassword === true){
        alert("Registration Successful!");
    }
}





// We want each form to validate if it is valid
// also to make sure that the password and password confirm is the same.
// the buttom of register runs all the funcitons    