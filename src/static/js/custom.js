let beans = document.getElementById('beans');
let ratio = document.getElementById('ratio');
let water = document.getElementById('water');
let yield = document.getElementById('yield');

let change;
let sameChange;

beans.addEventListener('input', function(event) {
    
    if(change === 'water' || sameChange === 'water') {
        ratio.value = water.value / beans.value;
    }
    if(change === 'ratio' || sameChange === 'ratio') {
        water.value = beans.value * ratio.value;
        yield.value = 0.9 * water.value;
    }

    if(change !== 'beans') {
        sameChange = change;
        change = 'beans';
    }

    console.log(sameChange)
    console.log(change)
})

water.addEventListener('input', function(event) {
    yield.value = 0.9 * water.value;
    if(change === 'beans' || sameChange === 'beans') {
        ratio.value = water.value / beans.value;     
    }
    if(change === 'ratio' || sameChange === 'ratio') {
        beans.value = water.value / ratio.value;
    }
    

    if(change !== 'water') {
        sameChange = change;
        change = 'water';
    }  
})

ratio.addEventListener('input', function(event) {
    
    if(change === 'beans' || sameChange === 'beans') {
        water.value = beans.value * ratio.value;
        yield.value = 0.9 * water.value;
    }
    if(change === 'water' || sameChange === 'water') {
        beans.value = water.value / ratio.value;
    }

    if(change !== 'ratio') {
        sameChange = change;
        change = 'ratio';
    }  
})

yield.addEventListener('input', function(event) {
    water.value = yield.value / 0.9;
    if(change === 'beans' || sameChange === 'beans') {
        ratio.value = water.value / beans.value;
    }
    if(change === 'ratio' || sameChange === 'ratio') {
        beans.value = water.value / ratio.value;
    }

    if(change !== 'water') {
        sameChange = change;
        change = 'water';
    }  
})

const num = 13.574356;
const result = num.toFixed(2);
console.log(result); // 13.57
console.log(typeof result); // string

const final = parseFloat(result);
console.log(final); // 13.57
console.log(typeof final); // number

//beans.value = water.value / ratio.value;
//water.value = beans.value * ratio.value;
//ratio.value = water.value / beans.value;
//yield.value = 0.9 * water.value;
//water.value = yield.value * 1.1111111111111111;
