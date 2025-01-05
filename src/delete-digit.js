const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const digitArray = n.toString().split('');
    const arrayNumbers = [];
    digitArray.forEach((digit, index) => {
        let temp = '';
        digitArray.forEach((digitInner, indexInner) => {
            if (index !== indexInner) temp += digitInner;
        });
        arrayNumbers.push(Number(temp));
    });
    return Math.max(...arrayNumbers);
}

module.exports = {
    deleteDigit,
};
