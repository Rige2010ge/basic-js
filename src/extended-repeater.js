const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let newStr = '';

    let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;

    let separator = options.separator ? options.separator : '';

    let addition = options.addition ? options.addition : '';
    if (typeof options.addition === 'boolean') {
        addition = options.addition.toString();
    } else if (options.addition === null) {
        addition = 'null';
    }

    let additionRepeatTimes = options.additionRepeatTimes
        ? options.additionRepeatTimes
        : 1;
    let additionSeparator = options.additionSeparator
        ? options.additionSeparator
        : '';

    if (!options.separator || !options.additionSeparator) {
        additionSeparator = options.additionSeparator
            ? options.additionSeparator
            : '|';
        separator = options.separator ? options.separator : '|';
    }
    if (str && options.repeatTimes && !options.separator) separator = '+';

    for (let i = 0; i < repeatTimes; i++) {
        newStr += str;
        if (addition) {
            for (let j = 0; j < additionRepeatTimes; j++) {
                newStr += addition;
                if (j !== additionRepeatTimes - 1) {
                    newStr += additionSeparator;
                }
            }
        }
        if (i !== repeatTimes - 1) {
            newStr += separator;
        }
    }

    return newStr;
}

module.exports = {
    repeater,
};
