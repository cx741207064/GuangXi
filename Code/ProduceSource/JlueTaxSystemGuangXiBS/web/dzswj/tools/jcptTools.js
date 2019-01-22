/**
 * <ol>
 * date:2018-08-28 editor:tbb
 * <li>创建文档</li>
 * <li>平台四集成平台工具类</li>
 * </ol>
 */
var jcptTools = jcptTools || {};
jcptTools.cnf = {
    clientURL: '',
    contextPath: '/web',
    wssqURL: '',
    hlwsbURL: '',
    sbURL: '',
    dssbURL:'',
    sjwzPort:9731,
    webUrl:'http://www.gxgs.gov.cn:9731',
    zrdssbUrl : '',
    zrgssbUrl : 'http://www.gxgs.gov.cn:8012',
    clfUrl : ''
};

jcptTools.cnf.dswtzrrURL = "http://neusoft.hads.tax:7003/webroot/pages/home/gds_index.jsp"; //地税网厅自然人跳转地址测试

jcptTools.checkCookie = function () {
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;
    if (!cookieEnabled) {
        alert('请开启浏览器COOKIE功能!');
        return false;
    }
    return true;
};
jcptTools.setCookie = function (key, val) {
    if (/[\]\}]$/.test(val)) {
        val = baseTools.stringify(val);
    }
    $.cookie(key, val, {
        domian: DOMAIN
        //,path: ":65045/"
        ,path: "/"
        ,expires:0.25
    });
};
jcptTools.delCookie = function (key) {
    $.cookie(key, null, {
        domain: DOMAIN,
        // expires: 1,
        path: "/"
    });
};

jcptTools.getLogin = function () {
    return this.getWebRoot() + "/dzswj/ythclient/mh.html";
};
jcptTools.getMain = function () {
    return this.getWebRoot() + "/dzswj/taxclient/main.html";
};
jcptTools.getMainZrr = function () {
    return this.getWebRoot() + "/dzswj/taxclient/main_zrr.html";
};
jcptTools.getLoginIndex = function () {
    return this.getWebRoot() + "/dzswj/taxclient/login_index.html";
};
jcptTools.getMainGzfw = function () {
    return this.getWebRoot() + "/dzswj/taxclient/main_gzfw.html";
};
// 获取发布域路径(兼容客户端路径)
jcptTools.getWebRoot = function () {
    if (location.href.indexOf("http") != -1)
        return jcptTools.cnf.contextPath;

    var tem = [];
    var paths = location.href.split('/');
    for (var i in paths) {
        if (paths[i] == 'web')
            break;
        tem.push(paths[i]);
    }
    tem.push("web");
    return tem.join('/');
};
// ///////////////////////////////////////////////////////////////////
/**
 * 设置cookie
 *
 * @param jsonObj
 */
jcptTools.setCookieJsonObjLogin = function (data) {
    if (!this.checkCookie())
        return false;

    this.setCookie("JCPT_USER", data);
    this.setCookie("QX_USER", data);
    return true;
};
/***
 * 存放切换税务机关后的信息
 * @param data
 * @returns {boolean}
 */
jcptTools.setCookieSwjgNsr = function (data) {
    if (!this.checkCookie())
        return false;

    this.setCookie("SWJGNSR", data);
    return true;
};


jcptTools.getCookie = function (key) {
    if (!this.checkCookie()) {
        this.gotoLogin();
        return "";
    }
    var val = $.cookie(key);
    if (val == null) {
        // alert("获取不到[" + key + "]的指定值,请重新登录!");
        // this.gotoLogin();
        return "";
    }
    return baseTools.parse(val);
};

/*
 * 以下为经常使用方法
 * */
jcptTools.gotoLogin = function (time) {
    jcptTools.clearAllCookie(); //2018年11月1日08:32:11 增加清除cookie的方法
    setTimeout(
        "top.window.location.href = jcptTools.getLogin();", time || 3000);
};
jcptTools.gotoMain = function (time) {
    setTimeout(
        "top.window.location.href = jcptTools.getMain();", time || 3000);
};
jcptTools.gotoMainZrr = function (time) {
    setTimeout(
        "top.window.location.href = jcptTools.getMainZrr();", time || 3000);
};

//判断是否登录
jcptTools.getIsLogin = function () {
    var dq_yhsf = jcptTools.getUserDataByKey("DQ_YHSF");
    if (dq_yhsf) {
        return true;
    } else {
        return false;
    }
};
//判断是否是自然人
jcptTools.getIsZrr = function () {
    var dq_yhsf = jcptTools.getUserDataByKey("DQ_YHSF");
    if (dq_yhsf) {
        if (dq_yhsf == "ZRR") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};
//判断是否是地税单管户
jcptTools.getIsDsdgh = function () {
    var ghlx = jcptTools.getUserDataByKey("GHLX");
    if(ghlx == "2"){
        return true;
    }else{
        return false;
    }
};
/**
 * 清空Cookie
 */
jcptTools.clearAllCookie = function () {
    this.delCookie("JCPT_USER");
    this.delCookie("LOGIN_USER");
    this.delCookie("QX_USER");
    this.delCookie("USER_SEQ");
};

jcptTools.getUserDataByKey = function (key) {
    return jcptTools.getCookie("JCPT_USER")[key];
};
jcptTools.getLayer = function () {
    var layer;
    if (top.topLayer) {
        layer = top.topLayer;
    } else {
        layui.use('layer', function () {
            layer = layui.layer;
        });
        //layer.msg('aa');
    }
    return layer;
};
//toast提示框使用方法
jcptTools.msgExec = function (layer, msg) {
    layer.msg(msg);
};
jcptTools.msg = function (msg) {
    var layer; //=jcptTools.getLayer();
    if (top.topLayer) {
        layer = top.topLayer;
        jcptTools.msgExec(layer, msg);
    } else {
        layui.use('layer', function () {
            layer = layui.layer;
            jcptTools.msgExec(layer, msg);
        });
    }
};
/**
 * 平台alert
 * @param msg 提示信息
 * @param options 确定调用的方法
 */
jcptTools.alertExec = function (layer, msg, options) {
    layer.alert(msg, options);
};
jcptTools.alert = function (msg, options) {
    var layer; // = jcptTools.getLayer();
    if (top.topLayer) {
        layer = top.topLayer;
        jcptTools.alertExec(layer, msg, options);
    } else {
        layui.use('layer', function () {
            layer = layui.layer;
            jcptTools.alertExec(layer, msg, options);
        });
    }
};

/**
 * confirm确认框方法
 * @param obj{
 *  msg：confirm信息（默认：是否保存信息）
 *  okmsg: 确定
 *  okClick:点击事件方法
 *  unmsg：取消
 *  unClick：取消事件方法
 * }
 */
jcptTools.confirmExec = function (layer, obj) {
    layer.confirm(obj.msg || '是否保存信息', {
        btn: [obj.okmsg || '保存', obj.unmsg || '取消'] //按钮
    }, function (index) {
        if (obj.okClick) {
            obj.okClick();
        }
        layer.close(index);
    }, function () {
        if (obj.unClick) {
            obj.unClick();
        }
    });
};
jcptTools.confirm = function (obj) {
    var layer; // = jcptTools.getLayer();
    if (top.topLayer) {
        layer = top.topLayer;
        jcptTools.confirmExec(layer, obj);
    } else {
        layui.use('layer', function () {
            layer = layui.layer;
            jcptTools.confirmExec(layer, obj);
        });
    }
};
//随机获取待选图标
jcptTools.setIcon = function (obj, idx) {
    if (!obj) {
        return 'icon-addressbook';
    }
    var obj_ary = obj.split(",");
    try {
        //返回设定的样式
        if (idx) {
            return obj_ary[idx];
        }
    } catch (e) {

    }
    //随机返回图标样式
    return obj_ary[jcptTools.getRandom(obj_ary.length)];
};
//产生随机数函数
jcptTools.getRandom = function RndNum(n) {
    var rnd = "";
    rnd += parseInt(Math.random() * n);
    return rnd;
};
/**
 * 按钮倒计时
 * @param obj 按钮对象
 * @param time 时长
 * @param msg 提示的信息
 */
jcptTools.countDown = function (obj, time, msg) {
    var timerReg = null;
    var oldText;
    time = time || 60;
    msg = msg || "s重新获取";
    if(obj[0].tagName=="A"){
        oldText = obj.text();
        var func = obj.get(0).onclick;
        obj.data('func',func);
        obj.get(0).onclick = function() {
            return;
        }
        timerReg = setInterval(function () {
            time -= 1;
            if (time > 0) {
                obj.text(time + msg);
            } else {
                obj.text(oldText);
                clearInterval(timerReg);
                //将发送按钮只读取消
                var func = obj.data('func');
                obj.get(0).onclick = func;
            }
        }, 1000);
    }else if(obj[0].tagName=="INPUT"){
        oldText = obj.val();
        //将按钮设置为禁用，防止重复点击
        obj.attr("disabled", "disabled");
        timerReg = setInterval(function () {
            time -= 1;
            if (time > 0) {
                obj.val(time + msg);
            } else {
                obj.val(oldText);
                clearInterval(timerReg);
                //将发送按钮只读取消
                obj.prop("disabled", false);
            }
        }, 1000);
    }
    return timerReg;
};
/**
 * 清空定时器
 * @param obj 按钮对象
 * @param timerReg 定时器
 * @param oldBtnText 原按钮上的文本
 */
jcptTools.countDownClean = function (obj, timerReg, oldBtnText) {
    clearInterval(timerReg);
    if(obj[0].tagName=="A"){
        obj.text(oldBtnText || "点击发送");
        //将发送按钮只读取消
        var func = obj.data('func');
        obj.get(0).onclick = func;
    }else if(obj[0].tagName=="INPUT"){
        obj.prop("disabled", false);
        obj.val(oldBtnText || "点击发送");
    }
};

jcptTools.convertPhone = function (phone) {
    if (phone == undefined || phone == null || phone == "") {
        return;
    }
    return phone.substring(0, 3) + "****" + phone.substring(7, 11);
};

jcptTools.switchs = function (val, arr) {
    if (!val || !arr || !(arr instanceof Array)) {
        return '';
    }

    var defVal = '';

    if (arr.length > 1 && (arr.length % 2 === 1)) {
        defVal = arr[arr.length - 1];
    }

    for (var i = 0; i < arr.length; i += 2) {
        if (val == arr[i] && (i + 1 <= arr.length)) {
            return arr[i + 1];
        }
    }

    return defVal;
};
jcptTools.convertStatus = function (val) {
    if (val == '0') {
        return "<span class='dbsx_zt_color'>未处理</span>";
    } else if (val == '1') {
        return "处理成功";
    } else if (val == '2') {
        return "处理失败";
    } else if (val == '30') {
        return "已作废";
    } else if (val == '31') {
        return "已受理";
    } else if (val == '32') {
        return "已完成";
    } else if (val == '33') {
        return "已退回";
    } else if (val == '34') {
        return "预审通过";
    } else if (val == '37') {
        return "<span class='dbsx_zt_color'>自查任务待办</span>";
    } else if (val == '38') {
        return "办理中";
    } else if (val == '39') {
        return "自查任务逾期";
    } else if (val == '41') {
        return "<span class='dbsx_zt_color'>未申报</span>";
    } else if (val == '42') {
        return "<span class='dbsx_zt_color'>未扣款</span>";
    } else if (val == '43') {
        return "已完成";
    } else {
        return "其他";
    }
};
/**
 * 根据软件编号查询 局端地址
 */
jcptTools.getRjbbUrl = function (rjbb) {
    var jddz = "";
    baseTools.xhrAjax({
        url: "/server/main/getRjbbUrl.do",
        async: false,
        params: {
            RJBB_BM: rjbb
        },
        callback: [function (jsonObj, xhrArgs) {
            if (jsonObj.code == 0) {
                jddz = jsonObj.data.JDDZ;
            }
        }]
    });
    return jddz;
};
/**
 * 获取网厅地址
 */
jcptTools.getWSSQUrl = function () {
    var url = dzswjCommon.getCookieCddwByKeyVal("dzswj.wssq");
    if (url == undefined || url == '') {
        baseTools.xhrAjax({
            url: "/server/main/getRjbbUrl.do",
            async: false,
            params: {
                RJBB_BM: 'dzswj.wssq'
            },
            callback: [function (jsonObj, xhrArgs) {
                if (jsonObj.code == 0) {
                    jcptTools.cnf.wssqURL = jsonObj.data.JDDZ;
                    dzswjCommon.setCookieCddwByKeyVal("dzswj.wssq", jsonObj.data.JDDZ);
                }
            }]
        });
    } else {
        jcptTools.cnf.wssqURL = url;
    }
};
/**
 * 获取申报地址
 */
jcptTools.getHLWSBUrl = function () {
    var url = dzswjCommon.getCookieCddwByKeyVal("dzswj.hlwsb");
    if (url == undefined || url == '') {
        baseTools.xhrAjax({
            url: "/server/main/getRjbbUrl.do",
            async: false,
            params: {
                RJBB_BM: 'dzswj.hlwsb'
            },
            callback: [function (jsonObj, xhrArgs) {
                if (jsonObj.code == 0) {
                    jcptTools.cnf.hlwsbURL = jsonObj.data.JDDZ;
                    dzswjCommon.setCookieCddwByKeyVal("dzswj.hlwsb", jsonObj.data.JDDZ);
                }
            }]
        });
    } else {
        jcptTools.cnf.hlwsbURL = url;
    }
};

/**
 * 获取社保地址
 */
jcptTools.getSBUrl = function () {
    var url = dzswjCommon.getCookieCddwByKeyVal("dzswj.sbfjn");
    if (url == undefined || url == '') {
        baseTools.xhrAjax({
            url: "/server/main/getRjbbUrl.do",
            async: false,
            params: {
                RJBB_BM: 'dzswj.sbfjn'
            },
            callback: [function (jsonObj, xhrArgs) {
                if (jsonObj.code == 0) {
                    jcptTools.cnf.sbURL = jsonObj.data.JDDZ;
                    dzswjCommon.setCookieCddwByKeyVal("dzswj.sbfjn", jsonObj.data.JDDZ);
                }
            }]
        });
    } else {
        jcptTools.cnf.sbURL = url;
    }
};
/**
 * 获取地税申报URL
 */
jcptTools.getDSSBUrl = function () {
    var url = dzswjCommon.getCookieCddwByKeyVal("dzswj.dssb");
    if (url == undefined || url == '') {
        baseTools.xhrAjax({
            url: "/server/main/getRjbbUrl.do",
            async: false,
            params: {
                RJBB_BM: 'dzswj.dssb'
            },
            callback: [function (jsonObj, xhrArgs) {
                if (jsonObj.code == 0) {
                    jcptTools.cnf.dssbURL = jsonObj.data.JDDZ;
                    dzswjCommon.setCookieCddwByKeyVal("dzswj.dssb", jsonObj.data.JDDZ);
                }
            }]
        });
    } else {
        jcptTools.cnf.dssbURL = url;
    }
};

jcptTools.initOtherSystemUrl = function () {
    jcptTools.getWSSQUrl();
    jcptTools.getHLWSBUrl();
    jcptTools.getSBUrl();
    jcptTools.getDSSBUrl();
};

jcptTools.getFullUrl = function (xtdm, dz) {
    if (xtdm == '001') {
        //申报
        return jcptTools.cnf.hlwsbURL + "/" + dz;
    } else if (xtdm == '002') {
        //网厅
        return jcptTools.cnf.wssqURL + "/" + dz;
    } else if (xtdm == '004') {
        //社保
        return jcptTools.cnf.sbURL + "/" + dz;
    } else if (xtdm == '007') {
        //地税申报
        return jcptTools.cnf.dssbURL + "/" + dz;
    } else {
        return dz;
    }
};

jcptTools.changePWD = function (url) {
    var url = window.location.protocol + "//" + window.location.host + url;
    if (typeof external.CheckPfxCertInIE != "undefined") {
        external.OpenModel(url, "0", "max", "11");
    } else {
        window.open(url, '', 'width=' + (window.screen.availWidth) + ',height=' + (window.screen.availHeight - 50) + ',top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no, fullscreen=no')
    }
}

//打开壳子方法
jcptTools.OpenModel = function (url) {
    var url = window.location.protocol + "//" + window.location.host + url;
    if (typeof external.CheckPfxCertInIE != "undefined") {
        external.OpenModel(url, "0", "max", "11");
    } else {
        window.location.href = url;
    }
};

//打开壳子方法
jcptTools.clientMain = function (url) {
    if (typeof external.CheckPfxCertInIE != "undefined") {
        window.location.href = url;
    } else {
        window.open(url, '', 'width=' + (window.screen.availWidth) + ',height=' + (window.screen.availHeight - 50) + ',top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no, fullscreen=no')
    }
};

//获取公众服务url
jcptTools.getGzfwUrl = function () {
    // var url = "http://" + window.location.host + jcptTools.getMainGzfw();
    var url = jcptTools.getHttpByUrl(jcptTools.getMainGzfw());
    return url;
};
//根据url生成绝对路径 https
jcptTools.getHttpsByUrl = function (url) {
    // alert("https");
    var url = "http://" + window.location.host + url;
    return url;
};
//根据url生成绝对路径 http
jcptTools.getHttpByUrl = function (url) {
    // alert("http");
    var url = "http://" + window.location.host + url;
    return url;
};

//关闭所有layer
jcptTools.closeAllLayer = function () {
    layui.use('layer', function () {
        var layer = layui.layer;
        layer.closeAll();
    })
};

//退出登录
jcptTools.exitLogin = function (type) {
    //type类型  1为门户页面   2为login_index页面  3为main.html页面  4为main_zrr.html  5为公众服务
    baseTools.xhrAjax({
        url: "/cm/clearSession.do",
        type: 'POST',
        dataType: 'jsonp',
        callback: [function (jsonObj) {
            switch (type) {
                case 1:
                    //判断是否是壳子
                    if (typeof external.Run_Fwzs != "undefined") {
                        jcptTools.clearAllCookie();
                        window.location.href = jcptTools.getLogin();
                    } else {
                        jcptTools.clearAllCookie();
                        window.location.href = jcptTools.getLogin();
                    }
                    break;
                case 2:
                    //判断是否是壳子
                    if (typeof external.Run_Fwzs != "undefined") {
                        jcptTools.clearAllCookie();
                        external.CloseForm('11');
                    } else {
                        jcptTools.clearAllCookie();
                        window.location.href = jcptTools.getLogin();
                    }
                    break;
                case 3:
                    //判断是否是壳子
                    if (typeof external.Run_Fwzs != "undefined") {
                        jcptTools.clearAllCookie();
                        external.CloseForm('11');
                    } else {
                        jcptTools.clearAllCookie();
                        if (window.opener) {
                            window.opener.location.href = jcptTools.getLogin();
                            window.close();
                        } else {
                            window.location.href = jcptTools.getLogin();
                        }
                    }
                    break;
                case 4:
                    //判断是否是壳子
                    if (typeof external.Run_Fwzs != "undefined") {
                        jcptTools.clearAllCookie();
                        external.CloseForm('11');
                    } else {
                        jcptTools.clearAllCookie();
                        window.location.href = jcptTools.getLogin();
                    }
                    break;
                default:
                    //判断是否是壳子
                    if (typeof external.Run_Fwzs != "undefined") {
                        jcptTools.clearAllCookie();
                        external.CloseForm('11');
                    } else {
                        jcptTools.clearAllCookie();
                        window.close();
                    }

            }

        }]
    });
};

//引导页
jcptTools.setGuidCookie = function (key, val) {
    if (/[\]\}]$/.test(val)) {
        val = baseTools.stringify(val);
    }
    $.cookie(key, val, {
        domain: DOMAIN,
        expires: 30,
        path: "/"
    });
};

//返回首页
jcptTools.gotoLoginIndex = function () {
    if (typeof external.Run_Fwzs != "undefined") {
        window.location.href = jcptTools.getLoginIndex();
    } else {
        if (window.opener) {
            window.opener.location.href = jcptTools.getLoginIndex();
            window.close();
        }else{
            window.location.href = jcptTools.getLoginIndex();
        }
    }
}