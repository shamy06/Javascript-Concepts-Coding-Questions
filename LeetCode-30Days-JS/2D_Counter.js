/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    // let currentCount=n-1
    return ()=> n++;
};