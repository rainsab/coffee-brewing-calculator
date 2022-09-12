let beans = document.getElementById('beans');
let ratio = document.getElementById('ratio');
let water = document.getElementById('water');
let yield = document.getElementById('yield');
let timer = document.getElementById('timer');

let change;
let sameChange;

function roundNum(num) {
    return Math.round(num * 100) / 100;
}

beans.addEventListener('input', function (event) {

    if (change === 'water' || sameChange === 'water') {
        ratio.value = roundNum(water.value / beans.value);
    }
    if (change === 'ratio' || sameChange === 'ratio') {
        water.value = roundNum(beans.value * ratio.value);
        yield.value = roundNum(0.9 * water.value);
    }

    if (change !== 'beans') {
        sameChange = change;
        change = 'beans';
    }
})

water.addEventListener('input', function (event) {

    yield.value = roundNum(0.9 * water.value);

    if (change === 'beans' || sameChange === 'beans') {
        ratio.value = roundNum(water.value / beans.value);
    }
    if (change === 'ratio' || sameChange === 'ratio') {
        beans.value = roundNum(water.value / ratio.value);
    }

    if (change !== 'water') {
        sameChange = change;
        change = 'water';
    }
})

ratio.addEventListener('input', function (event) {

    if (change === 'beans' || sameChange === 'beans') {
        water.value = roundNum(beans.value * ratio.value);
        yield.value = roundNum(0.9 * water.value);
    }
    if (change === 'water' || sameChange === 'water') {
        beans.value = roundNum(water.value / ratio.value);
    }

    if (change !== 'ratio') {
        sameChange = change;
        change = 'ratio';
    }
})

yield.addEventListener('input', function (event) {

    water.value = roundNum(yield.value / 0.9);

    if (change === 'beans' || sameChange === 'beans') {
        ratio.value = roundNum(water.value / beans.value);
    }
    if (change === 'ratio' || sameChange === 'ratio') {
        beans.value = roundNum(water.value / ratio.value);
    }

    if (change !== 'water') {
        sameChange = change;
        change = 'water';
    }
})

let timerTransfer = document.getElementById('timer-transfer');
let btnStart = document.getElementById('start');
let btnStop = document.getElementById('stop');
let btnReset = document.getElementById('reset');

let time;
let interval;

function transferNum() {
    let minutes = Math.floor(time / 60);
    let seconds = roundNum(time % 60);

    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerTransfer.value = `${minutes}:${seconds}`;
}

function initialNum() {
    clearInterval(interval);
    time = timer.value * 60;
    transferNum();
}

function countdown() {
    time--;
    transferNum();
    if (time === 0) {
        clearInterval(interval);
    }
}

timer.addEventListener('input', initialNum);
initialNum();

btnStart.addEventListener('click', function() {
    if (time > 0) {
        interval = setInterval(countdown, 1000);
    }
})

btnStop.addEventListener('click', function() {
    clearInterval(interval);
})

btnReset.addEventListener('click', initialNum);
