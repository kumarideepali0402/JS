const todoInput= document.querySelector(".todo-input");
const  todoButton= document.querySelector(".todo-button");
const todoList =document.querySelector(".list-items");

todoButton.addEventListener("click", addTask);
todoList.addEventListener("click", handleTaskActions);

function addTask(event) {
    event.preventDefault();

    const task = todoInput.value.trim();
    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("todo-div");

    const taskText = document.createElement("li");
    taskText.innerText = task;
    taskText.classList.add("new-todo");
    taskDiv.appendChild(taskText);

    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    completeButton.classList.add("completed-button");
    taskDiv.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("trash-button");
    taskDiv.appendChild(deleteButton);

    todoList.appendChild(taskDiv);
    todoInput.value = "";
}

function handleTaskActions(event) {
    const clickedElement = event.target;

    if (clickedElement.classList.contains("trash-button")) {
        const taskDiv = clickedElement.parentElement;


        taskDiv.remove();
    }

    if (clickedElement.classList.contains("completed-button")) {
        
        const taskDiv = clickedElement.parentElement;
        taskDiv.classList.toggle("completed");
    }
}
