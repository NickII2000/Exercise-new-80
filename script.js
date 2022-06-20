'use strict';

const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};

log(1, 2, 3, 4, 5, 6);
log('basic', 'add', 'operator', 'usage');

function calcOrDouble(number, basis = 5) {
    // basis = basis || 5;
    console.log(number * basis);
}

calcOrDouble(3, 5);
calcOrDouble(3);

function setOptions(height, width, ...additional) {
    console.log(height, width, ...additional);
}
setOptions(400, 500, 'red', 'top');



'use strict';
function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }

    console.log(sum());
}

getSum(4, 5);



class Slider {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    showSliderWidth() {
        console.log(this.width);
    }
}

const slider = new Slider('500px', '150px');

slider.showSliderWidth();


const urlObj = {
    protocol: 'https',
    domain: 'mysite.com',
    showCurrentURL: function () {
        const extractCurrDomain = () => {
            return this.domain;
        }
        const extractCurrProtocol = () => {
            return this.protocol;
        }

        console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`)
    }
}

urlObj.showCurrentURL()