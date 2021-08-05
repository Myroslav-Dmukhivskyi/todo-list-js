const addButton = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");

addButton.onclick = () => {
  const li = document.createElement("li");
  const inputText = document.createElement("input");
  inputText.type = "text";
  inputText.placeholder = "Add task";
  inputText.className = "input";
  const doneButton = document.createElement("button");
  doneButton.innerHTML = `<img src="./assets/img/check.svg" alt="done">`;
  doneButton.className = "complete-btn";
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<img src="./assets/img/x.svg" alt="delete">`;

  li.appendChild(inputText);
  li.appendChild(doneButton);
  li.appendChild(deleteButton);
  todoList.appendChild(li);

  doneButton.addEventListener("click", (e) => {
    const item = e.target;
    if (item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("complete");
    }
  });

  deleteButton.addEventListener("click", (e) => {
    todoList.removeChild(li);
  });

  inputText.onblur = () => {
    document.querySelector(".input").readonly = true;
    inputText.className = "input-onblur";
    let inputVal = inputText.value;
    saveLocalTodos(inputVal);
  };

  inputText.focus = () => {
    inputText.removeAttribute("readonly");
  };

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
    const li = document.createElement("li");
    const inputText = document.createElement("input");
    inputText.type = "text";
    inputText.placeholder = "Add task";
    inputText.className = "input";
    const doneButton = document.createElement("button");
    doneButton.innerHTML = `<img src="./assets/img/check.svg" alt="done">`;
    doneButton.className = "complete-btn";
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<img src="./assets/img/x.svg" alt="delete">`;

    li.appendChild(inputText);
    li.appendChild(doneButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }
};
