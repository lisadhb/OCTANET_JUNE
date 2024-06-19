function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}