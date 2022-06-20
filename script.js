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