const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    const mainString = s1.split('');
    const comparableString = s2.split('');
    const totalCollection = [];
    for (let i = 0; i < mainString.length; i++) {
        const index = comparableString.indexOf(mainString[i]);
        if (index > -1) {
            totalCollection.push(mainString[i]);
            comparableString.splice(index, 1);
        }
    }
    return totalCollection.length;
}

module.exports = {
    getCommonCharacterCount,
};
