const taskOptionsButton = document.getElementById('task-options-button');
const taskOptionsDropdown = document.querySelector('.task-options-dropdown');

taskOptionsButton.addEventListener('click', () => {
    taskOptionsDropdown.classList.toggle('visible')
})

taskOptionsDropdown.addEventListener('click', () => {
    taskOptionsDropdown.classList.remove('visible')
})