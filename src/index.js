module.exports = function check(str, bracketsConfig) {
    var res = true;
    //console.log(`str = ${str}`);
    var cicleStr = str;
    for (var i = 0; i < bracketsConfig.length; i++) {
        var open = bracketsConfig[i][0];
        var close = bracketsConfig[i][1];
        var strCopy = removeBrackets(cicleStr, open, close);
        //console.log(`strCopy = ${strCopy}`);
        //console.log(i);
        if (str === "") {
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