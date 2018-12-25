
/**
 * 让div层位于页面居中位置
 */
function divInCenter(divId) {
    $('#' + divId).css({
        position: 'absolute',
        left: ($(window).width() - $('#' + divId).outerWidth()) / 2,
        top: ($(window).height() - $('#' + divId).outerHeight()) / 3
    });
}

/**
 * 设置背景占满整个页面
 */
function setBgDivHeight(divId) {
    var scrollHeight = document.body.scrollHeight;
    var clientHeight = document.body.clientHeight;
    if (scrollHeight > clientHeight) {
        document.getElementById(divId).style.height = scrollHeight;
    } else {
        document.getElementById(divId).style.height = clientHeight;
    }
}

//弹出一个相对于显示器屏幕绝对居中的窗口
function openMiddleWindow(thiswidth, thisheight, url, title) {
    var endposition_x = (window.screen.width - thiswidth) / 2;
    var endposition_y = (window.screen.height - thisheight) / 2;
    endposition_y = endposition_y - endposition_y / 4;//上浮多四分之一的高
    window.open(url, title, "scrollbars=yes,resizable=yes,width=" + thiswidth + ",height=" + thisheight + ",top=" + endposition_y + ",left=" + endposition_x);
}

/**
* 获取复选框的值，多个复选框时用分隔符相连
*/
function getCheckboxValues(name, splitStr) {
    var strRet = "";
    if (splitStr == null) { splitStr = ","; }
    var eles = document.getElementsByName(name);
    if (eles && eles.length > 0) {
        for (var i = 0; i < eles.length; i++) {
            if (eles[i].checked == true) {
                var valStr = eles[i].value;
                if (strRet.length == 0) {
                    strRet = valStr;
                } else {
                    strRet = strRet + splitStr + valStr;
                }
            }
        }
    }
    return strRet;
}

/**
 * 获取单选框的值
 * @param {Object} name
 */
function getRadioValue(name) {
    var value = $('input[name="' + name + '"]:checked').val();
    if (typeof (value) == "undefined") {
        value = "";
    }
    return value;
}

/**
* 判断一个可split字符的是否存在有一个split结果在另一个可split的字符中(默认split字符串为“,”)
*/
function splitStrIsIntoString(strBig, strSmall) {
    var flag = false;
    if (strSmall && strSmall.length > 0) {
        var qxSplit = strSmall.split(",");
        if (qxSplit && qxSplit.length > 0) {
            for (var i = 0; i < qxSplit.length; i++) {
                if (strIsIntoString(strBig, qxSplit[i])) {
                    flag = true;
                    break;
                }
            }
        }
    }
    return flag;
}

/**
* 判断一个字符是否在另一个可split的字符中(默认split字符串为“,”)
*/
function strIsIntoString(strBig, strSmall) {
    var flag = false;
    if (strBig && strBig.length > 0) {
        var qxSplit = strBig.split(",");
        if (qxSplit && qxSplit.length > 0) {
            for (var i = 0; i < qxSplit.length; i++) {
                if (strSmall == qxSplit[i]) {
                    flag = true;
                    break;
                }
            }
        }
    }
    return flag;
}

//动态加载JS或CSS文件
function loadjscssfile(filename, filetype) {
    if (filetype == "js") { //判断文件类型 
        $("html").append('<script src="' + filename + '" type="text/javascript"></script>');
    }
    else if (filetype == "css") { //判断文件类型 
        $("html").append('<link href="' + filename + '" rel="stylesheet" type="text/css" />');
    }
}

/**
* 获取字符串的字节长度
*/
function getByteLength(str) {
    return str.replace(/[^\x00-\xff]/gi, "--").length;
}

/**
* 获取字符串固定字节长度的内容，超长则用...替换
*/
function getStringByLength(str, subLength) {
    //设计思想：步步累加，超过则停
    var strRet = "";
    if (str != null && str.length > 0) {
        var strLength = 0;
        for (var i = 0; i < str.length; i++) {
            var strTemp = str.substring(i, i + 1);
            strLength = strLength + getByteLength(strTemp);
            if (strLength <= subLength) {
                strRet = strRet + strTemp;
            } else {
                strRet = strRet + "...";
                break;
            }
        }
    }
    return strRet;
}

//禁用本页所有下拉列表
function disenableAllSelect() {
    $("select").attr("disabled", "disabled");
}
//启用本页所有下拉列表
function enableAllSelect() {
    $("select").removeAttr("disabled");
}

//获取url参数
function request(paras) {
    var url = location.href;
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {}
    for (i = 0; j = paraString[i]; i++) {
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if (typeof (returnValue) == "undefined") {
        return "";
    } else {
        return returnValue;
    }
}

// 格式化日期
function formatJsonDate(date) {
    if (date != null && date != "") {
        var month = (date.month + 1) + "";
        var day = date.date + "";
        var hours = date.hours + "";
        var minutes = date.minutes + "";
        if (month.length == 1) {
            month = "0" + month;
        }
        if (day.length == 1) {
            day = "0" + day;
        }
        if (hours.length == 1) {
            hours = "0" + hours;
        }
        if (minutes.length == 1) {
            minutes = "0" + minutes;
        }
        return (date.year + 1900) + "-" + month + "-" + day + " " + hours + ":" + minutes;
    }
    return "";
}

// 格式化日期(年月日)
function formatJsonDateYMD(date) {
    if (date != null && date != "") {
        var month = (date.month + 1) + "";
        var day = date.date + "";
        if (month.length == 1) {
            month = "0" + month;
        }
        if (day.length == 1) {
            day = "0" + day;
        }
        return (date.year + 1900) + "-" + month + "-" + day;
    }
    return "";
}

//得到不为空的字符串
function getStrNoNull(str) {
    if (str) {
        if (str == "null") {
            str = "";
        }
        return str;
    } else {
        return "";
    }
}

//定义常量和基础输出参数类型下拉列表
//该列表与 com.allen.pools.common.PoolsCommonFun.java 下的 getValueByString()方法中相关类型对应
function getStaticAndBaseOutParamTypeSelectHtml() {
    var lis = [];
    lis.push('<option value="string">String</option>');
    lis.push('<option value="double">Double</option>');
    lis.push('<option value="integer">Integer</option>');
    lis.push('<option value="float">Float</option>');
    lis.push('<option value="boolean">Boolean</option>');
    lis.push('<option value="date">Date</option>');
    lis.push('<option value="long">Long</option>');
    return lis.join("");
}

//定义函数输入参数类型下拉列表
//该列表与 com.allen.pools.common.PoolsCommonFun.java 下的 getTypeByString()方法中相关类型对应
function getFunInParamTypeSelectHtml() {
    var lis = [];
    lis.push('<option value="varchar">Varchar</option>');
    lis.push('<option value="char">Char</option>');
    lis.push('<option value="double">Double</option>');
    lis.push('<option value="integer">Integer</option>');
    lis.push('<option value="float">Float</option>');
    lis.push('<option value="boolean">Boolean</option>');
    lis.push('<option value="date">Date</option>');
    lis.push('<option value="number">Number</option>');
    return lis.join("");
}

//定义SQL输出参数类型下拉列表
//该列表与 com.allen.pools.common.PoolsCommonFun.java 下的 setOutDataColum()方法中相关类型对应
function getSqlOutParamTypeSelectHtml() {
    var lis = [];
    lis.push('<option value="string">String</option>');
    lis.push('<option value="double">Double</option>');
    lis.push('<option value="integer">Integer</option>');
    lis.push('<option value="long">Long</option>');
    lis.push('<option value="float">Float</option>');
    lis.push('<option value="clob">Clob</option>');
    lis.push('<option value="boolean">Boolean</option>');
    lis.push('<option value="date">Date</option>');
    lis.push('<option value="timestamp">Timestamp</option>');
    return lis.join("");
}

//定义函数输出参数类型下拉列表
//该列表与 com.allen.pools.common.PoolsCommonFun.java 下的 setOutDataColumToFun()方法中相关类型对应
function getFunOutParamTypeSelectHtml() {
    var lis = [];
    lis.push('<option value="varchar">Varchar</option>');
    lis.push('<option value="char">Char</option>');
    lis.push('<option value="double">Double</option>');
    lis.push('<option value="integer">Integer</option>');
    lis.push('<option value="float">Float</option>');
    lis.push('<option value="boolean">Boolean</option>');
    lis.push('<option value="date">Date</option>');
    lis.push('<option value="clob">Clob</option>');
    lis.push('<option value="number">Number</option>');
    return lis.join("");
}

//检查数组中的记录是否重复
function checkSzRepeatVal(strSz) {
    var retFlag = false;
    if (strSz && strSz.length > 0) {
        var currVal;
        for (var i = 0; i < strSz.length; i++) {
            currVal = strSz[i];
            for (var j = i + 1; j < strSz.length; j++) {
                if (currVal == strSz[j]) {
                    retFlag = true;
                    break;
                }
            }
            if (retFlag) {
                break;
            }
        }
    }
    return retFlag;
}

//将结果查询类型转换为结果查询名称
function getSqllxMcByDm(sqllx) {
    if (sqllx == "0") {
        return "SQL查询";
    } else if (sqllx == "1") {
        return "函数查询";
    } else if (sqllx == "2") {
        return "公式计算";
    } else if (sqllx == "3") {
        return "字符拆解";
    } else if (sqllx == "4") {
        return "字符直接返回";
    }
    return "";
}

//获取当前月第一天
function getCurrMonthFirst() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    return date.getFullYear() + "-" + month + "-01";
}

//获取当前月最后一天
function getCurrMonthLast() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var nextMonth = month + 1;
    if (nextMonth == 12) {
        nextMonth = 0;
        year = year + 1;
    }
    var nextMonthFirstDay = new Date(year, nextMonth, 1);
    var minusDate = 1000 * 60 * 60 * 24;
    var dateTmp = new Date(nextMonthFirstDay.getTime() - minusDate);
    var year2 = dateTmp.getFullYear();
    var month2 = dateTmp.getMonth() + 1;
    var day2 = dateTmp.getDate();
    if (month2 < 10) {
        month2 = "0" + month2;
    }
    if (day2 < 10) {
        day2 = "0" + day2;
    }
    return year2 + "-" + month2 + "-" + day2;
}

//根据申报状态获取申报状态中文名
function getSbztZw(sbzt) {
    if (sbzt == "0") {
        return "未申报";
    } else if (sbzt == "1") {
        return "申报成功";
    } else if (sbzt == "2") {
        return "申报失败";
    } else if (sbzt == "3") {
        return "申报进行中";
    }
}

//字符串全部替换方法
function myReplaceAll(s1, s2, s3) {
    var r = new RegExp(s2.replace(/([\(\)\[\]\{\}\^\$\+\-\*\?\.\"\'\|\/\\])/g, "\\$1"), "ig");
    return s1.replace(r, s3);
}

//根据报送期限获取报送期限中文名
function getBsqxZw(bsqx) {
    if (bsqx == "06") {
        return "月";
    } else if (bsqx == "08") {
        return "季";
    } else if (bsqx == "3") {
        return "半年";
    } else if (bsqx == "4") {
        return "年";
    }
}
