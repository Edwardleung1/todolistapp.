// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
// load getTodos when everything is loaded
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

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
  // Add a value to it, by using the todoInput.value
  newTodo.innerText = todoInput.value;
  // Add a class to it
  newTodo.classList.add("todo-item");
  // Append child to the todo DIV
  todoDiv.appendChild(newTodo);

  // Add todo to local storage by using todo input value on FUNCTION
  saveLocalTodos(todoInput.value);

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

  // Clear todo Input value
  todoInput.value = "";
}

// deleteCheck function
function deleteCheck(evt) {
  // Grab item we are clicking on
  const item = evt.target;
  // Delete todo
  if (item.classList[0] === "trash-btn") {
    // remove item's parent element when delete is clicked
    const todo = item.parentElement;
    // add class fall for animation effect
    todo.classList.add("fall");
    // remove local todo from local storage
    removeLocalTodos(todo);
    // only execute once the transition is completed
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // Check mark animation with CSS
  if (item.classList[0] === "complete-btn") {
    // add toggle completed class on item's parent element when complete btn is clicked
    const todo = item.parentElement;
    // add toggle completed for animation effect
    todo.classList.toggle("completed");
  }
}

// Filter todo function
function filterTodo(evt) {
  const todos = todoList.childNodes;
  // loop over the todo-list to access each individual (todo)
  todos.forEach(function (todo) {
    // check value we click on
    switch (evt.target.value) {
      case "all":
        // show all todo value on UI
        todo.style.display = "flex";
        break;
      case "completed":
        // check todo has class of completed
        if (todo.classList.contains("completed")) {
          // show value on UI
          todo.style.display = "flex";
        } else {
          // remove value on UI
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        // check todo don't contain class of completed
        if (!todo.classList.contains("completed")) {
          // show value on UI
          todo.style.display = "flex";
        } else {
          // remove value on UI
          todo.style.display = "none";
        }
        break;
    }
  });
}

// Save todo to local storage
function saveLocalTodos(todo) {
  // Check if I have anything in Local Storage
  let todos;
  // Check if it exists
  if (localStorage.getItem("todos") === null) {
    // create empty array
    todos = [];
  } else {
    // use the one already inside
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  // push todo into the array todos
  todos.push(todo);
  // saving it back into local storage
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Get the todos to display on UI
function getTodos() {
  let todos;
  // Check if it exists
  if (localStorage.getItem("todos") === null) {
    // create empty array
    todos = [];
  } else {
    // use the one already inside
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  // displaying local storage info into UI
  todos.forEach(function (todo) {
    // recreate the whole todo DIV
    // Create todo DIV
    const todoDiv = document.createElement("div");
    // Add a class to it
    todoDiv.classList.add("todo");
    // Create LI
    const newTodo = document.createElement("li");
    // Add a value to it using todo local storage
    newTodo.innerText = todo;
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
  });
}

// remove local storage
function removeLocalTodos(todo) {
  // Check if I have anything in Local Storage
  let todos;
  // Check if it exists
  if (localStorage.getItem("todos") === null) {
    // create empty array
    todos = [];
  } else {
    // use the one already inside
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  // remove the position of the element we are clicking on
  // just need to grab the li inner text on todo div class
  const todoIndex = todo.children[0].innerText;
  // remove element in any array position with splice
  todos.splice(todos.indexOf(todoIndex), 1);
  // update local storage
  localStorage.setItem("todos", JSON.stringify(todos));
}
