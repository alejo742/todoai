const addTaskButton = document.querySelector('.floating-add-button button');
const addTaskOverlay = document.querySelector('.add-task-overlay');

addTaskButton.addEventListener('click', () => {
    addTaskOverlay.classList.add('visible')
})

const closeAddPopup = document.querySelector('.close-add-task');
const addTaskForm = document.querySelector('.add-task-form');

closeAddPopup.addEventListener('click', () => {
    addTaskOverlay.classList.remove('visible')
    addTaskForm.reset()
})