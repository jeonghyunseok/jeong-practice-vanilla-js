const body  = document.querySelector("body");




//이미지 갯수
const IMG_NUMBER = 4;
function paintImage(imgNumber){
    var filter = "win16|win32|win64|mac";
    var imgNumber =imgNumber+1
 //모바일 확인

    if(navigator.platform){
    
    if(0 > filter.indexOf(navigator.platform.toLowerCase())){
    
    console.log("Mobile");
    const image = new Image();    
    image.src ="./images/"+imgNumber+".jpg"
    image.classList.add("bgImage")
    body.appendChild(image);
    
    }else{
    
    console.log("PC");
    const image = new Image();    
    image.src ="./images/"+imgNumber+".jpg"
    image.classList.add("bgImage")
    body.appendChild(image);
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

// 메뉴 아이콘 transiton 
// var button = document.querySelector('.bt-menu-trigger');
// button.addEventListener('click', function (){
//   button.classList.toggle('bt-menu-open');
// });
}
init();