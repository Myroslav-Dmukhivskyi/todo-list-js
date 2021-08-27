function createTodoItem() {
  const li = document.createElement("li");
  li.id = "li";
  li.setAttribute("index", todos.length);

  const inputText = document.createElement("input");
  inputText.type = "text";
  inputText.placeholder = "Add task";
  inputText.className = "input";
  inputText.readOnly = "true";
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
}

export default createTodoItem();
