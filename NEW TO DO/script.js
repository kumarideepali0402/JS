const inputTaskText=document.querySelector(".input-task-text");
const addTaskButton=document.querySelector(".add-task-button");
const taskList=document.querySelector(".task-list");


addTaskButton.addEventListener("click",addTask);


function addTask(){
    taskText=inputTaskText.value.trim();
    console.log(taskText);
    if(taskText===""){
        alert("Please enter a task");
        return;
    }
    taskListItem=document.createElement("li");
    taskListItem.innerText=taskText;
    // taskListItemText=document.createElement("span");
    taskListItem.innerText=taskText;
    // taskListItem.append(taskListItemText);

    const doneButton=document.createElement("button");
    doneButton.innerText="done";
    taskListItem.append(doneButton);

    const deleteButton=document.createElement("button");
    deleteButton.innerText="delete";
    taskListItem.append(deleteButton);

    taskList.append(taskListItem);
    inputTaskText.value="";
}
