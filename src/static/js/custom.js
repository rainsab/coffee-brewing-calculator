const beans = document.getElementById('beans');
const ratio = document.getElementById('ratio');
const water = document.getElementById('water');
const yield = document.getElementById('yield');

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

const timer = document.getElementById('timer');
const timerTransfer = document.getElementById('timer-transfer');
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');

let time;
let intervalTime;

function transferNum() {
    let minutes = Math.floor(time / 60);
    let seconds = roundNum(time % 60);

    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerTransfer.value = `${minutes}:${seconds}`;
}

function initialNum() {
    clearInterval(intervalTime);
    time = timer.value * 60;
    transferNum();
}

function countdown() {
    time--;
    transferNum();
    if (time === 0) {
        clearInterval(intervalTime);
    }
}

timer.addEventListener('input', initialNum);
initialNum();

let progressPerc;
let progressInterval;

function progressWidth() {
    document.getElementById('progressbar').style.width = progressPerc + '%';
    document.getElementById('progressbar').ariaValueNow = progressPerc;
    //console.log(progressPerc)
}

function progress() { 
    progressPerc += 100 / (timer.value * 60);
    progressWidth();
    if (progressPerc >= 100) {
        clearInterval(progressInterval);
    }
}

function initialProgress() {
    clearInterval(progressInterval);
    progressPerc = 0;
    progressWidth();
}

btnStart.addEventListener('click', function() {
    if (time > 0 && time <= 100) {
        progressPerc += 100 / (timer.value * 60);
        progressWidth();
        intervalTime = setInterval(countdown, 1000);
        progressInterval = setInterval(progress, 1000);
    }
})

btnStop.addEventListener('click', function() {
    clearInterval(intervalTime);
    clearInterval(progressInterval);
})

btnReset.addEventListener('click', function() {
    initialNum();
    initialProgress();
});

timer.addEventListener('input', initialProgress);
initialProgress();

const getLocation = () => {
    return new Promise((resolve) => 
        navigator.geolocation.getCurrentPosition(resolve)
    )
}

const timeData = async () => {
    try {
        const location = await getLocation();
        const locLat = location.coords.latitude;
        const locLng = location.coords.longitude;
        const url = `https://api.sunrise-sunset.org/json?lat=${locLat}&lng=${locLng}&formatted=0&date=today`
        //console.log(url)
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            const data = jsonResponse;
            const sunrise = new Date(data.results.sunrise);
            const sunset = new Date(data.results.sunset);

            const localTime = new Date();
            //const localTime = new Date('2022-10-21T07:34:00');
            if (localTime < sunrise) {
                document.getElementById('before-sunrise').style.display = 'block';
            } else if (localTime.getHours() < 10) {
                document.getElementById('after-sunrise').style.display = 'block';
            } else if (localTime.getHours() < 16) {
                document.getElementById('during-day').style.display = 'block';
            } else if (localTime < sunset) {
                document.getElementById('before-sunset').style.display = 'block';
            } else {
                document.getElementById('after-sunset').style.display = 'block';
            }

            //console.log(sunrise);
            //console.log(sunset);
            //console.log(localTime);
        }
    } catch (error) {
        console.log(error);
    }
}

timeData();

//0:00 - sunrise ⚠️ You should wait few hours after getting up before making the first cup of coffee.
//sunrise - 10:00 ☕ Just now it's an ideal time to have a coffee.
//10:00 - 16:00 ☕ You're fine having a coffee now.
//16:00 - sunset ⚠️ Beware, you shouldn't drink coffee at least 6 hours before sleep.
//sunset - 24:00 ❌ It's already night, you definitely shouldn't be drinking coffee now.
