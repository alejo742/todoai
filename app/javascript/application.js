// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "./calendar-rendering"
import "./task-adding"
import "./task-checking"
import "./ai-assistant"
import "./main-visuals"

//making the padding of main section reactive
const appHeader = document.querySelector('.homescreen-header');
let headerHeight = appHeader.offsetHeight

const footerButton = document.querySelector('.floating-add-button');
let footerButtonHeight = footerButton.offsetHeight

const mainContainer = document.querySelector('.main-section-container');

mainContainer.style.paddingTop = `calc(${headerHeight}px + 3vh)`
mainContainer.style.paddingBottom = `calc(${footerButtonHeight}px + 3vh)`