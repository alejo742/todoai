const taskOptionsButtons = document.querySelectorAll('.task-options-button');
const taskOptionsDropdowns = document.querySelectorAll('.task-options-dropdown');

taskOptionsButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.children[1].classList.toggle('visible')
    })
})
taskOptionsDropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.classList.remove('visible')
    })
})