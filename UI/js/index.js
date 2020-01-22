//form validation
document.querySelector("#userId").addEventListener("blur", validateUsername);
document.querySelector("#emailId").addEventListener("blur", validatEmail);
document.querySelector("#passwordId").addEventListener("blur", validatePassword);

function validateUsername(){
    const username= document.querySelector("#userId");
    const regExp= /^[a-zA-Z]{3-10}$/;
    if(!regExp.test(username.value)){
        username.classList.add("error")
    } else {
        username.classList.remove('error')
    }
}