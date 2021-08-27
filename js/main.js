// import  from "webpack";
import createTodoItem from "./add-to-do";

const addButton = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");
addButton.addEventListener("click", addTodo);

document.addEventListener("DOMContentLoaded", getTodos);

let todos;
let inputVal;

function addTodo() {
  createTodoItem();
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

function arrCheck() {
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
}
function saveLocalTodos(todo) {
  arrCheck();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function getTodos() {
  arrCheck();
  todos.forEach(function (todo) {
    const li = document.createElement("li");
    li.setAttribute("index", todos.indexOf(todo, 0));
    const inputText = document.createElement("input");
    inputText.type = "text";
    inputText.value = todo;
    inputText.className = "input-onblur";
    const doneButton = document.createElement("button");
    doneButton.innerText = "Done";
    doneButton.className = "complete-btn";
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
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
  arrCheck();
  const todoIndex = todo.children[0].value;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
