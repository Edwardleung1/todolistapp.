// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(evt) {
  // Prevent form from submitting
  evt.preventDefault();

  // Create todo DIV
  const todoDiv = document.createElement("div");
  // Add a class to it
  todoDiv.classList.add("todo");
  // Create LI
  const newTodo = document.createElement("li");
  // Add a value to it
  newTodo.innerText = "hello";
  // Add a class to it
  newTodo.classList.add("todo-item");
  // Append child to the todo DIV
  todoDiv.appendChild(newTodo);

  // Create check BUTTON
  const completedButton = document.createElement("button");
  // Add i tag inside Button
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  // Add a class to it
  completedButton.classList.add("complete-btn");
  // Append child to the todo DIV
  todoDiv.appendChild(completedButton);

  // Create trash BUTTON
  const trashButton = document.createElement("button");
  // Add i tag inside Button
  trashButton.innerHTML = '<i class="fas fa-trash"></li>';
  // Add a class to it
  trashButton.classList.add("trash-btn");
  // Append child to the todo DIV
  todoDiv.appendChild(trashButton);

  // Append everything to the ul todo-list
  todoList.appendChild(todoDiv);
}
