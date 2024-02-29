let todoList = [];
let todoListHTML = ``;
todoRender();


function addTodo() {
  const inputElem = document.querySelector(".jsToDoName");
  const name = inputElem.value;
  todoList.push(name);
  console.log(todoList);
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
    const todo = todoList[i];
    let html = `<p>${todo} <button onclick="deleteTodo(${i})">Delete</button></p>`;
    todoListHTML += html;
    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  }
  todoListHTML = "";
}
