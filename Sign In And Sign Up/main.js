

var signupBtn= document.getElementById("signupBtn");
var signinBtn= document.getElementById("signinBtn");
var nameField= document.getElementById("nameField");
var inputGroup= document.getElementById("inputGroup");
var title= document.getElementById("title");

 signinBtn.onclick= function()
 {
    nameField.style.maxHeight="0";
    inputGroup.style.maxHeight="200px"
    title.innerHTML="Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
 }
 signupBtn.onclick= function()
 {
    nameField.style.maxHeight="60px";
    inputGroup.style.maxHeight="260px"
    title.innerHTML="Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
 }