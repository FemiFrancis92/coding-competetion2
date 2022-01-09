function validate() {

let email = document.getElementById("email");
//let errorLabel = document.getElementById("errorlabel");

let regEmail = /^([A-Za-z0-9\.-_]+)@([A-Za-z0-9]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
let valid = true;

if(email.value.trim()=="") {
    // console.log("error");
    message1="Email can not be blank";
    document.getElementById("email-error").innerText = message1;
    // setErrorMsg("email",message);
    valid=false;
 }
 else if (!email.value.trim().match(regEmail)) {
    message1="Email should be in correct format";
    document.getElementById("email-error").innerText = message1;

    valid=false;
 }
return valid;
}