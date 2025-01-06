const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    if (typeof n === 'string' && n.includes('-') && n.length === 17) {
        let digits = n.split('-').map((element) => parseInt(element, 16));
        let flag = true;
        digits.forEach((element) => {
            if (isNaN(element) || element < 0 || element > 255) flag = false;
        });
        return flag;
    } else {
        return false;
    }
}
module.exports = {
    isMAC48Address,
};
