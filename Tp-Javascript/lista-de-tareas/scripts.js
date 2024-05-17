document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');

        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        const span = document.createElement('span');
        span.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(span);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        taskInput.value = '';
        taskInput.focus();
    }
}
