const aiButton = document.querySelector('.today-help-offer button');
const aiOverlay = document.querySelector('.ai-assist-overlay');

aiButton.addEventListener('click', () => {
    aiOverlay.classList.add('visible')
})

const closeAiPopup = document.querySelector('.close-ai');
closeAiPopup.addEventListener('click', () => {
    aiOverlay.classList.remove('visible')
})