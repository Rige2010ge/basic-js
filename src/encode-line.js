const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    if (!str) return '';

    let count = 1;
    let newStr = '';
    let letter = str[0];
    for (let i = 0; i <= str.length - 1; i++) {
        if (i === str.length - 1) {
            if (count > 1) {
                newStr += `${count}${letter}`;
                continue;
            } else {
                newStr += letter;
                continue;
            }
        }

        if (letter === str[i + 1]) {
            count += 1;
            continue;
        } else {
            if (count > 1) {
                newStr += `${count}${letter}`;
                count = 1;
                letter = str[i + 1];
            } else {
                newStr += letter;
                letter = str[i + 1];
            }
        }
    }
    return newStr;
}

module.exports = {
    encodeLine,
};
