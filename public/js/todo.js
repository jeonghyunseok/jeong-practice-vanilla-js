const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
function filterFn(toDo){
    return toDo.id === 1
}
let toDos =[];

function cleanAll(){
    window.localStorage.removeItem("toDos");
    swal({
        title: "Clear All",
        text: "All lists have been cleared.",
        icon: "success",
      }).then((value) => {
        location.reload();
      });
       
   
}
function deleteToDo(event){
  const btn = event.target
  const span = btn.parentNode
  const li =span.parentNode;
  console.log(li)
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo){
      console.log(toDo.id, li.id);
      return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos
  saveToDos();
}
function saveToDos(){
   
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span")
  const arrow = document.createElement("span")
  const newId = toDos.length +1;
  console.log(toDos.length)
 

  delBtn.innerHTML = "<span class='glyphicon glyphicon-trash'></span>";
  delBtn.className = "toDoBtn";
  delBtn.addEventListener("click",deleteToDo);
  arrow.innerHTML ="<i class='fa fa-angle-right'></i>  ";

  var filter = "win16|win32|win64|mac";
  
  if(navigator.platform){
    
    if(0 > filter.indexOf(navigator.platform.toLowerCase())){
    
    console.log("Mobile");
  if(text.length >= 9){
     text = text.substr(0,14) + "...";
     console.log(text)
  }
}else{
    console.log("PC");
    if(text.length >= 16){
        text = text.substr(0,14) + "...";
        console.log(text)
     }
}

  }

  span.innerText = text;
  li.appendChild(arrow);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj ={
      text: text,
      id : newId
  }
  toDos.push(toDoObj);
  saveToDos();

}

function handleSubmit(event){
    if(toDoInput.value.length<=0){
        swal({
            title: "No value.",
            icon: "info",
          })
    }else{
  swal({
    title: "Save Complete",
    text: " Check in To-do-List",
    icon: "success",
  })

    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}
}
function saveTodo(){
    if($(".todo-text").val().length<=0){
        swal({
            title: "No value.",
            icon: "info"
          })
    }else{
    swal({
        title: "Save Complete",
        text: " Check in To-do-List",
        icon: "success",
      })
      console.log($(".todo-text").innerText)
    const currentValue = $(".todo-text").val();
    paintToDo(currentValue);
    toDoInput.value="";
    }
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }else{
    
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}
init();