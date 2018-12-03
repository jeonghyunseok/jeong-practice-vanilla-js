const body  = document.querySelector("body");


//이미지 갯수
const IMG_NUMBER = 4;
function paintImage(imgNumber){
    var filter = "win16|win32|win64|mac";

 //모바일 확인

    if(navigator.platform){
    
    if(0 > filter.indexOf(navigator.platform.toLowerCase())){
    
    console.log("Mobile");
    
    }else{
    
    console.log("PC");
    const image = new Image();    
    image.src =`./images/${imgNumber +1}.jpg`
    image.classList.add("bgImage")
    body.prepend(image);
    }
    
    }
    
    
    


   
}
function genRandom(){
 const number = Math.floor(Math.random()*IMG_NUMBER);
 return number;
}

function init(){
const randomNumber = genRandom();
paintImage(randomNumber);
}
init();