const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";
function saveName(text){
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
     paintGreeting(currentValue);
     saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN); 
    var time=new Date().getHours()
    console.log(time)
    if( 5 <time && time<= 11) {
        greeting.innerText = "Good Morning, "+text
    }
    else if(11<time && time<= 15) {
        greeting.innerText = "Good Afternoon, "+text
    }
    else if(15<time && time <= 19) {
        greeting.innerText = "Good Evening, "+text
    }
    else {
        greeting.innerText = "Good Night, "+text
    }
   
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}
init();