const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText === ''){
        return;
    }
const taskItem = document.createElement('li')
taskItem.className = 'task-item';
taskItem.innerHTML = `
<span class="task-text">${taskText}</span>
<button class="edit-task">Edit</button>
<button class="delete-task">Delete</button>
`;
taskList.appendChild(taskItem);
taskInput.value = '';
const deleteButton = taskItem.querySelector('.delete-task');
deleteButton.addEventListener('click', () =>{
    taskList.removeChild(taskItem);
});
const editButton = taskItem.querySelector('.edit-task');
editButton.addEventListener('click', () =>{
    const taskTextElement = taskItem.querySelector('.task-text');
    const newTaskText = prompt('Edit your task:', taskTextElement.textContent);
    if(newTaskText !== null){
        taskTextElement.textContent = newTaskText;
    }
})
}
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keyup',(event) =>{
    if(event.key === 'Enter'){
        addTask();
    }

})
