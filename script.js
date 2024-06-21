const input = document.getElementById("input");
const button = document.getElementById("add-button");
const todoList = document.getElementById("todoList");
const clearAll = document.getElementById("clear-all");
//const clearTxt = document.getElementById("clear-txt");

let todos = [];
let editIndex = -1;

button.addEventListener("click", () => {
  const todoText = input.value;
  if (todoText !== "") {
    if (editIndex === -1) {
      if (!todos.includes(todoText)) {
      todos.push(todoText);
      }else{
        alert('this task already exsist')
      }
    
    } else {
      todos[editIndex] = todoText;
      editIndex = "";
    }
    updateTodoList();
    input.value = "";
  }else{
    alert('please insert text')
  }
});

function updateTodoList() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  todos.forEach((todo, index) => addtodo(todo, index));
}

function addtodo(todo, index) {
  const listItem = document.createElement("div");
  listItem.classList.add("todo-item");

  const list = document.createElement("p");
  list.innerText = todo;
  listItem.appendChild(list);

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.addEventListener("click", () => {
    editIndex = index;
    input.value = todo;
  });
  listItem.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    todos.splice(index, 1);
    updateTodoList();
  });
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);
}

// clearTxt.addEventListener("click", function () {
//   input.value = "";
//   editIndex = -1;
// });

clearAll.addEventListener("click", function () {
  todos.length = 0;
  updateTodoList();
});
