'use strict';

const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};

log(1, 2, 3, 4, 5, 6);
log('basic', 'add', 'operator', 'usage');