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

//making the padding of main section reactive
const appHeader = document.querySelector('.homescreen-header');
let headerHeight = appHeader.offsetHeight

const footerButton = document.querySelector('.floating-add-button');
let footerButtonHeight = footerButton.offsetHeight

const mainContainer = document.querySelector('.main-section-container');

mainContainer.style.paddingTop = `calc(${headerHeight}px + 3vh)`
mainContainer.style.paddingBottom = `calc(${footerButtonHeight}px + 3vh)`