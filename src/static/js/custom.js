let beans = document.getElementById('beans');
let ratio = document.getElementById('ratio');
let water = document.getElementById('water');
let yield = document.getElementById('yield');

let change;
let sameChange;

beans.addEventListener('input', function(event) {
    
    if(change === 'water' || sameChange === 'water') {
        ratio.value = water.value / beans.value;
        yield.value = 0.9 * water.value;
    }
    if(change === 'ratio' || sameChange === 'ratio') {
        water.value = beans.value * ratio.value;
        yield.value = 0.9 * water.value;
    }
    if(change === 'yield' || sameChange === 'yield') {
        water.value = yield.value * 1.11 * 1.001;
    }

    if(change !== 'beans') {
        sameChange = change;
        change = 'beans';
    }

    console.log(sameChange)
    console.log(change)
})

water.addEventListener('input', function(event) {
    
    if(change === 'beans' || sameChange === 'beans') {
        ratio.value = water.value / beans.value;
        yield.value = 0.9 * water.value;
    }
    if(change === 'ratio' || sameChange === 'ratio') {
        beans.value = water.value / ratio.value;
        yield.value = 0.9 * water.value;
    }
    if(change === 'yield' || sameChange === 'yield') {
        water.value = yield.value * 1.11 * 1.001;
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
        yield.value = 0.9 * water.value;
    }
    if(change === 'yield' || sameChange === 'yield') {
        beans.value = water.value / ratio.value;
    }

    if(change !== 'ratio') {
        sameChange = change;
        change = 'ratio';
    }  
})

yield.addEventListener('input', function(event) {
    
    if(change === 'beans' || sameChange === 'beans') {
        water.value = yield.value * 1.1111111111111111;
        ratio.value = water.value / beans.value;
    }
    if(change === 'water' || sameChange === 'water') {
        water.value = yield.value * 1.1111111111111111;
        beans.value = water.value / ratio.value;
    }
    if(change === 'ratio' || sameChange === 'ratio') {
        water.value = yield.value * 1.1111111111111111;
        beans.value = water.value / ratio.value;
    }

    if(change !== 'yield') {
        sameChange = change;
        change = 'yield';
    }  
})

//beans.value = water.value / ratio.value;
//water.value = beans.value * ratio.value;
//ratio.value = water.value / beans.value;
//yield.value = 0.9 * water.value;
//water.value = yield.value * 1.1111111111111111;
