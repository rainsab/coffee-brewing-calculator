let beans = document.getElementById('beans');
let ratio = document.getElementById('ratio');
let water = document.getElementById('water');
let yield = document.getElementById('yield');

let change;
let sameChange;

function numRounded(num) {
    return Math.round(num * 100) / 100;
}

beans.addEventListener('input', function (event) {

    if (change === 'water' || sameChange === 'water') {
        ratio.value = numRounded(water.value / beans.value);
    }
    if (change === 'ratio' || sameChange === 'ratio') {
        water.value = numRounded(beans.value * ratio.value);
        yield.value = numRounded(0.9 * water.value);
    }

    if (change !== 'beans') {
        sameChange = change;
        change = 'beans';
    }
})

water.addEventListener('input', function (event) {

    yield.value = numRounded(0.9 * water.value);

    if (change === 'beans' || sameChange === 'beans') {
        ratio.value = numRounded(water.value / beans.value);
    }
    if (change === 'ratio' || sameChange === 'ratio') {
        beans.value = numRounded(water.value / ratio.value);
    }

    if (change !== 'water') {
        sameChange = change;
        change = 'water';
    }
})

ratio.addEventListener('input', function (event) {

    if (change === 'beans' || sameChange === 'beans') {
        water.value = numRounded(beans.value * ratio.value);
        yield.value = numRounded(0.9 * water.value);
    }
    if (change === 'water' || sameChange === 'water') {
        beans.value = numRounded(water.value / ratio.value);
    }

    if (change !== 'ratio') {
        sameChange = change;
        change = 'ratio';
    }
})

yield.addEventListener('input', function (event) {

    water.value = numRounded(yield.value / 0.9);

    if (change === 'beans' || sameChange === 'beans') {
        ratio.value = numRounded(water.value / beans.value);
    }
    if (change === 'ratio' || sameChange === 'ratio') {
        beans.value = numRounded(water.value / ratio.value);
    }

    if (change !== 'water') {
        sameChange = change;
        change = 'water';
    }
})
