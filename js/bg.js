const body  = document.querySelector("body");


//이미지 갯수
const IMG_NUMBER = 5;
function paintImage(imgNumber){
    var filter = "win16|win32|win64|mac";
    var imgNumber =imgNumber+1
 //모바일 확인

    if(navigator.platform){
    
    if(0 > filter.indexOf(navigator.platform.toLowerCase())){
    
    console.log("Mobile");
   
    const image = new Image();    
    image.src ="./images/mobile/"+imgNumber+".jpg"
    image.classList.add("bgImage")
    body.appendChild(image);
    
    }else{
    
    console.log("PC");

    const image = new Image();    
    image.src ="./images/web/"+imgNumber+".jpg"
    image.classList.add("bgImage")
    body.appendChild(image);
    }
    
    }
    
}
function genRandom(){
 const number = Math.floor(Math.random()*IMG_NUMBER);
 return number;
}
function slideImage(){
    $( 'img' ).remove( '.bgImage' );
    var newImgNumber = Math.floor(Math.random()*IMG_NUMBER);
    var newImgNumber =newImgNumber+1
    
    var filter = "win16|win32|win64|mac";
 //모바일 확인

    if(navigator.platform){
    
    if(0 > filter.indexOf(navigator.platform.toLowerCase())){
    
    console.log("Mobile");
 
     const image = new Image();    
    image.src ="./images/mobile/"+newImgNumber+".jpg"
    image.classList.add("bgImage")
  
    body.appendChild(image);
    
    
    }else{
    
    console.log("PC");
   
    const image = new Image();    
    image.src ="./images/web/"+newImgNumber+".jpg"
    image.classList.add("bgImage")
   
    body.appendChild(image);
    }
    
    }
}
function init(){
const randomNumber = genRandom();

paintImage(randomNumber);

setInterval(slideImage,50000);

}
init();