let todo = JSON.parse(localStorage.getItem("todo"));
if (!Array.isArray(todo)) {
  todo = [];
}

renderTodo();

function addTodo() {
  let todoName = document.querySelector(".js-todo-input").value;
  let dueDate = document.querySelector(".js-dueDate").value;

  if (todoName.trim() === "") return;
  todo.push({
    name: todoName,
    dueDate,
  });
  localStorage.setItem("todo", JSON.stringify(todo));

  document.querySelector(".js-todo-input").value = "";
  document.querySelector(".js-dueDate").value = "";

  renderTodo();
}

function renderTodo() {
  let html = "";

  /*for (let i = 0; i < todo.length; i++) {
    html += `
    <div>${todo[i].name}</div>
    <div>${todo[i].dueDate}</div>
    <button onclick = "
    todo.splice(${i},1);
    localStorage.setItem('todo', JSON.stringify(todo));
    renderTodo();"
    class='js-delBtn'>Delete</button>`;
  }*/

  todo.forEach((value, index) => {
    html += `
    <div>${value.name}</div>
    <div>${value.dueDate}</div>
    <button onclick = "
    todo.splice(${index},1);
    localStorage.setItem('todo', JSON.stringify(todo));
    renderTodo();"
    class='js-delBtn'>Delete</button>`;
  });

  document.querySelector(".js-todo").innerHTML = html;
}
