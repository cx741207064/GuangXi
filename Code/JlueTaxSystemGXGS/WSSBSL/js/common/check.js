/**
*去左空格，返回去空格后的字串
*/
function TrimLeft(str) {
    var i;
    var j;
    j = str.length
    if (j == 0) {
        return "";
    }
    for (i = 0; i < j; i++) {
        if (!(str.charAt(i) == " ") && !(str.charAt(i) == "　")) {
            break;
        }
    }
    if (i == j) {
        return "";
    }
    str = str.substring(i, j);
    return str;
}
/**
*去右空格，返回去空格后的字串
*/
function TrimRight(str) {
    var i;
    var j;
    j = str.length;
    if (j == 0) {
        return "";
    }
    for (i = j - 1; i >= 0; i--) {
        if (!(str.charAt(i) == " ") && !(str.charAt(i) == "　")) {
            break;
        }
    }
    if (i == -1) {
        return "";
    }
    str = str.substring(0, i + 1);
    return str;
}
/**
*去左右空格，返回去空格后的字串
*/
function TrimAll(str) {
    return TrimLeft(TrimRight(str));
}

/**
*检查是否为数字
*/
function checkNumber(str) {
    var reg = /[^0-9.]/g;
    if (str == "") {
        return false;
    }
    if (reg.test(str)) {
        return false;
    }
    return true;
}

/**
*检查是否为整数
*/
function checkNumberInteger(str) {
    var reg = /[^0-9]/g;
    if (str == "") {
        return false;
    }
    if (reg.test(str)) {
        return false;
    }
    return true;
}

/**
 * 检查是否以英文字母开头，并且只包括字母（大小写）、数字、下划线
 */
function checkEnglishNumberUnderline(str) {
    var reg = /^[a-zA-Z][A-Za-z0-9_]*$/;
    if (str == "") {
        return false;
    }
    if (!reg.test(str)) {
        return false;
    }
    return true;
}
