const   secondArrow = document.querySelector('.s'),
        minuteArrow = document.querySelector('.m'),
        hourArrow   = document.querySelector('.h'),
        hourBox     = document.querySelector('.hours'),
        minuteBox   = document.querySelector('.minutes');
        

function watch() {
    let time = new Date()
    let seconds = time.getSeconds()
    let minutes = time.getMinutes()
    let hours   = time.getHours()
    
    hourArrow.style = `transform: rotate(${hours * 30}deg)`
    minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
    secondArrow.style = `transform: rotate(${seconds * 6}deg)`
    
    hourBox.innerHTML = hours < 10 ? '0' + hours : hours
    minuteBox.innerHTML = minutes < 10 ? '0' + minutes : minutes
    
    setTimeout(() => watch(), 1000)
}
watch()






const links = document.querySelectorAll('.tabsItem')
const tabs  = document.querySelectorAll('.tabsContentItem')

console.log(links);

links.forEach((item,i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})



function removeActive() {
    links.forEach((item,i) => {
        item.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}


const stopwatchBtn = document.querySelector('.stopwatch__btn');
const stopwatchHours = document.querySelector('.stopwatch__hours');
const stopwatchMinutes = document.querySelector('.stopwatch__minutes');
const stopwatchSeconds = document.querySelector('.stopwatch__seconds');

let stopwatchInterval;
let stopwatchState = 'start';  
let seconds = 0;

stopwatchBtn.addEventListener('click', () => {
    if (stopwatchState === 'start') {
        startStopwatch();
    } else if (stopwatchState === 'stop') {
        stopStopwatch();
    } else if (stopwatchState === 'reset') {
        resetStopwatch();
    }
});

function startStopwatch() {
    stopwatchState = 'stop';
    stopwatchBtn.textContent = 'stop';
    stopwatchInterval = setInterval(() => {
        seconds++;
        updateStopwatchDisplay();
    }, 1000);
}

function stopStopwatch() {
    stopwatchState = 'reset';
    stopwatchBtn.textContent = 'reset';
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    stopwatchState = 'start';
    stopwatchBtn.textContent = 'start';
    clearInterval(stopwatchInterval);
    seconds = 0;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    stopwatchHours.textContent = hrs < 10 ? '0' + hrs : hrs;
    stopwatchMinutes.textContent = mins < 10 ? '0' + mins : mins;
    stopwatchSeconds.textContent = secs < 10 ? '0' + secs : secs;
}