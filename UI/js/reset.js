const firstId=document.querySelector("#firstId").value;
const secondId=document.querySelector("#secondId").value;
const btnReset= document.querySelector("#btnId");
btnReset.addEventListener("click", function(){

    if(firstId===secondId){
        windows.location.href="../HTML/index.html";
    } else {
        const errorRes= document.querySelector(".errorRes");
        errorRes.style.display="block";
    }
});

