const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
var todoList = document.querySelector(".todo_list");
const filterOption = document.querySelector(".filter_todo");
var leftTask = document.querySelector("#task-count");
var deleteAll = document.getElementById("deleteAll");

//event listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
deleteAll.addEventListener("click", deleteTodo);
//functions

function addTodo(event){
  event.preventDefault();

  //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //todo li
    const newTodo = document.createElement("li");
    newTodo.innerText= todoInput.value;
    newTodo.classList.add("todo_item");

    todoDiv.appendChild(newTodo);

    if(todoInput.value=== ""){
      return null;
    }

    //check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML= '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete_btn");
    todoDiv.appendChild(completedButton);

    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete_btn");
    todoDiv.appendChild(deleteButton);

    //append to actual list
    todoList.appendChild(todoDiv);
  //Clear todo input VALUE
  todoInput.value = "";
  leftOverTask();
}

//delete and check

function deleteCheck(e){
  const item = e.target;

  
   //delete item
  if(item.classList[0]=== "delete_btn"){
    const todo = item.parentElement;
    // animation transition
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function(){
      todo.remove();
      leftOverTask();
    });
  }
  //complete item
  if(item.classList[0]==="complete_btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completedItem");
    leftOverTask();
  }
  leftOverTask();
}

//filtering of task
function filterTodo(e) {
  const todos = todoList.childNodes
  for( let i=0 ; i<todos.length; i++){
    switch (e.target.value) {
      case "all":
        todos[i].style.display = "flex";
        break;
      case "completed":
        if (todos[i].classList.contains("completedItem")) {
          todos[i].style.display = "flex";
        } else {
          todos[i].style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todos[i].classList.contains("completedItem")) {
          todos[i].style.display = "flex";
        } else {
          todos[i].style.display = "none";
        }
        break;
    }
  }

  
};

//leftover task counter
function leftOverTask(){
  const todos = todoList.childNodes;
  if(todos.length=== 0){
    leftTask.innerHTML= 0;
  }
  else{
    for( let i=0 ; i<todos.length; i++){
      if(!todos[i].classList.contains("completedItem")){
        leftTask.innerHTML = todos.length;
        
      
      }
    }
  }
}

// delete all todo list
function deleteTodo(){
  todoList = [];
}
