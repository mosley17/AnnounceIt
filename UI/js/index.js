//form validation
document.querySelector("#userId").addEventListener("blur", validateUsername);
document.querySelector("#emailId").addEventListener("blur", validatEmail);
document.querySelector("#passwordId").addEventListener("blur", validatePassword);

function validateUsername(){
    const username= document.querySelector("#userId");
    const errorUser= document.querySelector(".errorUser")
    const regExp= /^[a-zA-Z]{6,10}$/;
    if(!regExp.test(username.value)){
        errorUser.style.display="block";
    } else {
        errorUser.style.display="none";
    }
}
function validatEmail(){
    const email= document.querySelector("#emailId");
    const errorEml= document.querySelector(".errorEml")
    const regExp= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!regExp.test(email.value)){
        errorEml.style.display="block";
    } else {
        errorEml.style.display="none";
    }
}
function validatePassword(){
    const pwd= document.querySelector("#passId");
    const errorpwd= document.querySelector(".errorpwd")
    const regExp= /^[A-Za-z]\w{6,}[A-Za-z]$/;
    if(!regExp.test(pwd.value)){
        errorpwd.style.display="block";
    } else {
        errorpwd.style.display="none";
    }
}