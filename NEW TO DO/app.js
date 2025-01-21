const inputTaskText=document.querySelector(".input-task-text");
const addTaskButton=document.querySelector(".add-task-button");
const taskList=document.querySelector(".task-list");


addTaskButton.addEventListener("click",addTask);


function addTask(){
    //addONeRowToTable()
    taskText=inputTaskText.value.trim();
    console.log(taskText);
    if(taskText===""){
        alert("Please enter a task!");
        return;
    }
    const taskListItem=document.createElement("li");
    taskListItem.classList.add("task-list-item");
    taskListItem.innerText=taskText;

    const doneButton=document.createElement("button");
    doneButton.classList.add("done-button");
    // doneButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    doneButton.innerText="done";
    taskListItem.append(doneButton);
    doneButton.addEventListener("click",markDone);


    const deleteButton=document.createElement("button");
    deleteButton.classList.add("delete-button");
    // deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.innerText="delete";
    taskListItem.append(deleteButton);
    deleteButton.addEventListener("click",deleteTask);

    taskList.append(taskListItem);
    inputTaskText.value="";
}
function markDone(event){
    const taskItem=event.target.parentElement;
    taskItem.classList.toggle("done");
    event.target.innerText=taskItem.classList.contains("done")?"undo"  :"done"  ;


}
function deleteTask(event){
    const taskItem=event.target.parentElement;
    taskItem.remove();
}