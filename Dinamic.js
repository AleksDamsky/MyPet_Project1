/*Timer fields*/
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondsElement = document.querySelector('.seconds');
const millisecondsElement = document.querySelector('.milliseconds');
const spans = document.querySelectorAll('.word span');

/*Buttoms*/
const StartButton = document.querySelector('.start');
const PauseButton = document.querySelector('.pause');
const StopButton = document.querySelector('.stop');
const ResultsButton = document.querySelector('.Bresults');

/*Listeners*/
StartButton.addEventListener ('click', () => {
    clearInterval(interval); //Для того, чтобы избежать проблем;
    interval = setInterval (startTime, 10);
})

PauseButton.addEventListener ('click', () => {
    clearInterval (interval);
})

StopButton.addEventListener ('click', () => {
    clearInterval(interval);
    clearFields();
    disabledBtn(); //ДЕлаем кнопку "Results" не активной;
})

ResultsButton.addEventListener (('click'), () => {
    clearInterval(interval);
    counter++;
    const results = document.querySelector ('.results');
    const block = document.createElement ('div');
    block.innerText = `Results ${counter}: ${hour}: ${minute}: ${seconds}: ${milliseconds}`
    results.append(block);
    clearFields();
    clearInterval(interval);
    interval = setInterval(startTime, 10)
})

/*Variables*/
let hour = 00;
let minute = 00;
let seconds = 00;
let milliseconds = 00;
let  interval;
let counter = 0;
let disabled = true;

function startTime() {
    /*Milliseconds*/
    milliseconds++;
    if (milliseconds < 9) {
        millisecondsElement.innerText = "0" + milliseconds;
    }
    if ( milliseconds > 9) {
        millisecondsElement.innerText = milliseconds;
    }
    if (milliseconds > 99) {
        seconds++;
        secondsElement.innerText = "0" + seconds;
        milliseconds = 0;
        millisecondsElement.innerText = "0" + milliseconds;
    }

    /*Seconds*/
    if (seconds > 9) {
        seconds.innerText = "0" + seconds;
    }
    if ( seconds < 9) {
        seconds.innerText = seconds;
    }
    if (seconds > 60) {
        minute++;
        minuteElement.innerText = "0" + minute;
        seconds = 0; //обновляем счетчик секунд;
        secondsElement.innerText = "0" + seconds;
    }
    /*Minute */
    if (minute > 9) {
        minute.innerText = "0" + minute;
    }
    if (minute < 9) {
        minute.innerText = minute;
    }
    if (minute > 59) {
        hour++;
        hourElement.innerText = "0" + hour;
        minute = 0;
        minuteElement.innerText = "0" + minute;
    }

    /*Hour*/
    if (hour > 9) {
        hour.innerText = "0" + hour;
    }
    if (hour < 9) {
        hour.innerText = hour;
    }
    if (minute > 10) {
        hour++;
        hourElement.innerText = "0" + hour;
        hour = 0;
        millisecondsElement.innerText = "0" + minute;
    }
    ResultsButton.disabled = false;
}

function clearFields () {
    hour = 00
    minute = 00
    seconds = 00
    milliseconds = 00
    hourElement.textContent = "00";
    minuteElement.textContent = "00";
    secondsElement.textContent = "00";
    millisecondsElement.textContent = "00";
}

function disabledBtn () {
    if (disabled) {
        ResultsButton.disabled = true;
    }
}
disabledBtn()

spans.forEach((span, idx) => { //используется для перебора массива.
    span.addEventListener('click', (e) => {
        e.target.classList.add('active');
    });
    span.addEventListener(('animationend'), (e) => {
        e.target.classList.remove('active');
    })
    //Начало анимации
    setTimeout(() => {
        span.classList.sdd('active');
    }, 750 * (idx+1))
})
