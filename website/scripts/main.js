var email = prompt("Enter your e-mail");
function checkEmail() {


   if (email.length < 1) {

    alert ("E-mail cannot be blank. Try again");
    }else {
    alert("Thanks! We'll spam you at "+ email);
}
}

//checkEmail();
