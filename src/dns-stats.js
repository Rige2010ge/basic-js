const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    const mainObj = {};
    if (!domains.length) return mainObj;
    const tempArr = domains.map((item) => {
        return item.split('.').reverse();
    });
    for (let i = 0; i < tempArr.length; i++) {
        let dns = ``;
        for (let j = 0; j < tempArr[i].length; j++) {
            const dnsPartName = `.${tempArr[i][j]}`;
            dns += dnsPartName;

            if (Object.hasOwn(mainObj, dns)) {
                mainObj[dns] = mainObj[dns] + 1;
            } else {
                mainObj[dns] = 1;
            }
        }
    }
    return mainObj;
}

module.exports = {
    getDNSStats,
};
