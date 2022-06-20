'use strict';

const log = function (a, b, ...rest) {
    console.log(rest);
};

log(1, 2, 3, 4, 5, 6);