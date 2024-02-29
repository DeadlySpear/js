let todoList = [];
let todoListHTML = ``;
todoRender();

function addTodo() {
  const inputElem = document.querySelector(".jsToDoName");
  const name = inputElem.value;
  const date = document.querySelector(".jsDate").value;
  const todoObj = {name,date}
  todoList.push(todoObj);
  todoRender();
}

function deleteTodo(i){
  todoList.splice(i,1);
  console.log(todoList);
  if(todoList.length==0){
    document.querySelector(".js-todo-list").innerHTML = null;
  }else{
    todoRender();
  }
}


function todoRender() {
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i].name;
    const date = todoList[i].date; 
    let html = `<div>${todo}</div><div>${date || null}</div><div><button onclick="deleteTodo(${i})">Delete</button></div>`;
    todoListHTML += html;
    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  }
  todoListHTML = "";
}
