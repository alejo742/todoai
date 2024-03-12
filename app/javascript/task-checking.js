//visual effects for checking tasks as complete
const taskCheckboxes = document.querySelectorAll('.complete-round-checkbox');
const tasksContainer = document.querySelector('.today-tasks');

taskCheckboxes.forEach(currentCheckbox => {
    let taskWidget = currentCheckbox.parentNode
    currentCheckbox.addEventListener('click', () => {
        currentCheckbox.classList.toggle('checked')
    })
})