// const { ModuleFilenameHelpers } = require("webpack");

const addButton = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");
addButton.addEventListener("click", addTodo);

document.addEventListener("DOMContentLoaded", getTodos);

function addTodo() {
  const li = document.createElement("li");
  const inputText = document.createElement("input");
  inputText.type = "text";
  inputText.placeholder = "Add task";
  inputText.className = "input";
  const doneButton = document.createElement("button");
  doneButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
  </svg>`;
  doneButton.className = "complete-btn";
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<img src="./assets/img/x.svg" alt="delete">`;
  deleteButton.className = "trash-btn";

  li.appendChild(inputText);
  li.appendChild(doneButton);
  li.appendChild(deleteButton);
  todoList.appendChild(li);

  doneButton.addEventListener("click", doneBtn);
  deleteButton.addEventListener("click", deleteBtn);
  inputText.addEventListener("blur", onBlurInput);
  inputText.addEventListener("focus", onFocusInput);
}
function doneBtn(e) {
  const item = e.target;
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("complete");
  }
}
function deleteBtn(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    removeLocalTodos(todo);

    todo.remove();
  }
}
let inputVal;

function onBlurInput(e) {
  const item = e.target;
  item.setAttribute("readonly", "true");
  item.className = "input-onblur";
  inputVal = item.value;
  saveLocalTodos(inputVal);
}

function onFocusInput(e) {
  const item = e.target;
  item.removeAttribute("readonly", "false");
}
function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    const li = document.createElement("li");
    const inputText = document.createElement("input");
    inputText.type = "text";
    inputText.value = todo;
    inputText.className = "input-onblur";
    const doneButton = document.createElement("button");
    doneButton.innerHTML = `<img src="./assets/img/check.svg" alt="done">`;
    doneButton.className = "complete-btn";
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<img src="./assets/img/x.svg" alt="delete">`;
    deleteButton.className = "trash-btn";

    li.appendChild(inputText);
    li.appendChild(doneButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    doneButton.addEventListener("click", doneBtn);
    deleteButton.addEventListener("click", deleteBtn);
    inputText.addEventListener("blur", onBlurInput);
    inputText.addEventListener("focus", onFocusInput);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
