const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const calendarDays = document.getElementById('calendar-days');
const previousMonthButton = document.getElementById('calendar-month-previous')
const nextMonthButton = document.getElementById('calendar-month-next');
const visualMonth = document.querySelector('#calendar-month-current > span');


let currentDate = new Date()
let currentMonth = currentDate.getMonth()
let currentYear = currentDate.getFullYear()
let minMonth = new Date().getMonth()
let minYear = new Date().getFullYear()
let maxMonth = new Date().getMonth()
let maxYear = new Date().getFullYear()+1

function setCurrentDate() {
    var dateNumber = currentDate.getDate()
    var dateMonth = months[currentDate.getMonth()]
    var dateSuffix = ""

    function checkIfDateException(argDate) {
        if(argDate >= 11 && argDate <= 13) {
            return true
        }
        return false
    }

    switch (dateNumber.toString()[dateNumber.toString().length - 1]) {
        case "1":
            if(checkIfDateException(dateNumber)) {
                dateSuffix = "th"
            }
            else {
                dateSuffix = "st"
            }
            break;

        case "2":
            if(checkIfDateException(dateNumber)) {
                dateSuffix = "th"
            }
            else {
                dateSuffix = "nd"
            }

            break;

        case "3":
            if(checkIfDateException(dateNumber)) {
                dateSuffix = "th"
            }
            else {
                dateSuffix = "rd"
            }

            break;

        default:
            dateSuffix = "th"
            break;
    }

    const dateHeader = document.getElementById('today-date-header');
    dateHeader.innerHTML = `${dateMonth} ${dateNumber}${dateSuffix}`
}
setCurrentDate()

function renderCalendarDays() {

    currentDate.setDate(1)
    let firstDay = new Date(currentYear, currentMonth, 1);
    let lastDay = new Date (currentYear, currentMonth + 1, 0)
    let lastDayDate = lastDay.getDate()
    let lastDayIndex = lastDay.getDay()
    let previousLastDay = new Date(currentYear, currentMonth, 0);
    let previousLastDayDate = previousLastDay.getDate()
    const nextDays = 7 - lastDayIndex -1;

    visualMonth.innerHTML = `${months[currentMonth]} ${currentYear}`

    let days = ""

    for(let i = firstDay.getDay(); i > 0; i--) {
        days += `<span class="calendar-day last-month past">${previousLastDayDate - i + 1}</span>`
    }

    for(let i = 1; i <= lastDayDate; i++) {
        if(i === new Date().getDate() && 
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()) {
            days += `<span class="calendar-day current">${i}</span>`
        }
        else {
            days += `<span class="calendar-day">${i}</span>`
        }
    }

    for(let i = 1; i <= nextDays; i++) {
        days += `<span class="calendar-day next-month">${i}</span>`
    }

    calendarDays.innerHTML = days


    //selecting the days and clickability after rendering
    var allCalendarDays = document.querySelectorAll('.calendar-day')
    allCalendarDays.forEach(day => {
        day.addEventListener('click', () => {
            if(day.classList.contains('current') || day.classList.contains('last-month') || day.classList.contains('next-month')) {
                return
            }
            else {
                if(document.querySelector('.calendar-day.current')) {
                    document.querySelector('.calendar-day.current').classList.remove('current')
                }
                day.classList.add('current')
            }
        })
    }) 
}

renderCalendarDays();

nextMonthButton.addEventListener('click', () => {
    previousMonthButton.classList.remove('forbidden')
    if(currentYear < maxYear || currentMonth < maxMonth) {
        currentMonth ++
        if(currentMonth > 11) {
            currentMonth = 0
            currentYear++
        }
        renderCalendarDays()
    }
    if(currentYear == maxYear && currentMonth == maxMonth) {
        nextMonthButton.classList.add('forbidden')
    }
})

previousMonthButton.addEventListener('click', () => {
    nextMonthButton.classList.remove('forbidden')
    if(currentYear > minYear || currentMonth > minMonth) {
        currentMonth --
        if(currentMonth < 0) {
            currentMonth = 11
            currentYear--
        }
        renderCalendarDays()
    }
    if(currentYear == minYear && currentMonth == minMonth) {
        previousMonthButton.classList.add('forbidden')
    }
})