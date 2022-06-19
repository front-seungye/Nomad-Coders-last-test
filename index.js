const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("#user_name");
const modal = loginForm.parentElement;
const timeinfo = document.querySelector(".clock");


function FormSubmit(){
    event.preventDefault();
    modal.classList.add("hidden");
    const userName = loginInput.value;
    localStorage.setItem("userName",userName)
    const Nameinput = document.querySelector(".page-tit")
    Nameinput.innerText = `${userName}'s To Do List!`
}

const saveUserName = localStorage.getItem("userName");

if(saveUserName===null){
    modal.classList.remove("hidden");
    loginForm.addEventListener("submit",FormSubmit)
}else{
    //console.log(saveUserName)
    const Nameinput = document.querySelector(".page-tit")
    Nameinput.innerText = `${saveUserName}'s To Do List!`
}


function liveClock(){
    const date = new Date();
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    const seconds = String(date.getSeconds());
    const span = document.createElement("span");
    timeinfo.innerText = `${hours.padStart(2,"0")}:${minutes.padStart(2,"0")}:${seconds.padStart(2,"0")}`
    timeinfo.appendChild(span);
    if(hours>12){
        span.innerText = " P.M"
    }else{
        span.innerText = " A.M"
    }
    

}

liveClock();
setInterval(liveClock,1000)