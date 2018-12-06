const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("div");

function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
     if(hours < 10) {hours="0"+hours}else{hours}
     if(minutes < 10) {minutes="0"+minutes}else{minutes}
     if(seconds < 10) {seconds="0"+seconds}else{seconds}
     clockTitle.innerHTML = hours+" : "+minutes+" : "+seconds;
  

}
function init() {
    setInterval(getTime,1000);
}
init();