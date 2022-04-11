const startBtn = document.querySelector('.buttons__element--start');
const pauseBtn = document.querySelector('.buttons__element--pause');
const stopBtn = document.querySelector('.buttons__element--stop');
const resetBtn = document.querySelector('.buttons__element--reset');
const historyBtn = document.querySelector('.buttons__element--achieve');
const stopWatch = document.querySelector('.timer__stop');
const time = document.querySelector('.timer__last-time');
const timeList = document.querySelector('.archives');

const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.modal__button');

let countTime;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let timesArr = [];

// change colors circles
const colorBtn = document.querySelector('.fa-paint-brush');
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector('.red');
const colorTwo = document.querySelector('.blue');
const colorThree = document.querySelector('.green');
const colorFour = document.querySelector('.yellow');
let root = document.documentElement;

// function to start stopwatch
const handleStart = () => {
    clearInterval(countTime);

    countTime = setInterval(() => {
        if (seconds < 9) {
            seconds++;
            stopWatch.textContent = `${minutes}:0${seconds}`
        } else if (seconds >= 9 && seconds < 59) {
            seconds++;
            stopWatch.textContent = `${minutes}:${seconds}`
        } else {
            minutes++;
            seconds = 0;
            stopWatch.textContent = `${minutes}:00`
        }
    }, 100);
}

const handleStop = () => {

    time.innerHTML = `Last time: ${stopWatch.textContent}`

    if (stopWatch.textContent !== '0:00') {
        time.style.visibility = 'visible';
        timesArr.push(stopWatch.textContent)
    };

    clearStuff();
}

const handlePause = () => {
    clearInterval(countTime);
}

const handleReset = () => {
    time.style.visibility = 'hidden';
    timesArr = [];
    clearStuff();
}

const clearStuff = () => {
    clearInterval(countTime);
    stopWatch.textContent = '0:00';
    timeList.textContent = '';
    seconds = 0;
    minutes = 0;
}

const showHistory = () => {

    timeList.textContent = '';
    let num = 1;

    timesArr.forEach(time => {
        const newTime = document.createElement('div');
        newTime.classList.add('archives__element')
        newTime.innerHTML = `Time nr ${num}: <span>${time}</span>`

        timeList.appendChild(newTime);
        num++;
    })
}

const showModal = () => {
    if (!(modalShadow.style.display === 'block')) {
        modalShadow.style.display = 'block';
    } else {
        modalShadow.style.display = 'none';
    };

    modalShadow.classList.toggle('modal__animation')
}

// listeners above buttons
startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);

infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', showModal);
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false);

// change color 
colorBtn.addEventListener('click', () => {
    colorPanel.classList.toggle('show-colors')
})

colorOne.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(250, 20, 6)');
    root.style.setProperty('--hover-color', 'rgb(209, 33, 24)');
});

colorTwo.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(6, 173, 250)');
    root.style.setProperty('--hover-color', 'rgb(28, 145, 199)');
});

colorThree.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(0, 255, 42)');
    root.style.setProperty('--hover-color', 'rgb(28, 209, 58)');
});

colorFour.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(217, 255, 0)');
    root.style.setProperty('--hover-color', 'rgb(197, 209, 28)');
});