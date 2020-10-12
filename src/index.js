module.exports = function check(str, bracketsConfig) {
    let res = true;
    let cicleStr = str;
    for (let i = 0; i < bracketsConfig.length; i++) {
        let open = bracketsConfig[i][0];
        let close = bracketsConfig[i][1];
        let strCopy = removeBrackets(cicleStr, open, close);
        if (strCopy === "") {
            res = true;
        } else if ((i === bracketsConfig.length - 1) && str === cicleStr) {
            res = false;
        } else if ((i === bracketsConfig.length - 1) && str !== cicleStr) {
            i = -1;
            str = cicleStr;
        }
        cicleStr = strCopy;
    }
    return res;
}

function removeBrackets(str, open, close) {
    let result = str;
    let hasPairs = str.includes(`${open}${close}`);
    while (hasPairs) {
        result = result.replace(`${open}${close}`, '');
        hasPairs = result.includes(`${open}${close}`);
    }
    return result;
}