/**
 * 暂存临时变量 
 */
var _tempsave_arrVars = {};

/**
 * 申报暂存功能开关:默认关闭
 */
_tempsave_arrVars['switch'] = "N";

/**
 * 申报暂存按钮:默认显示
 */
_tempsave_arrVars['isVisible'] = true;

/**
 * 申报暂存按钮:默认可用
 */
_tempsave_arrVars['isEnable'] = true;

/**
 * 是否正在弹出提示框
 */
_tempsave_arrVars['isConfirm'] = false;

/**
 * 记录当前业务主键信息
 */
var temp_save_current_ywzj = null;

/**
 * 暂存查询开关，默认关闭
 */

_tempsave_arrVars['sfcxzc'] = "N";

/**
 * 服务器暂存数据是否存在 默认不存在
 */

_tempsave_arrVars['zcsjSfcz'] = "N";

/**
 * 初始化暂存查询开关参数
 */
function cshzckg() {
    var sub = new SwordSubmit();
    sub.setCtrl("SBGyCtrl_getZckgcs");
    sub.setFunction("onSuccess", "initZckgcs");
    sub.submit();
}

function initZckgcs(req, res) {
    _tempsave_arrVars['sfcxzc'] = (pc.getResData("zckgcs", res)).value
}
/**
 * 暂存页面初始化方法
 * 默认调用
 */
function tempsave_init(toolbarName, retry) {
    if (retry == null || retry == undefined) retry = 5;
    if (retry-- < 0) return;
    var bVisible = true;
    try {
        bVisible = _tempsave_arrVars['isVisible'] == true ? true : false;
        bVisible = _tempsave_arrVars['switch'] != 'Y' ? false : bVisible;
        bVisible ? tempsave_show(toolbarName) : tempsave_hide(toolbarName)
    } catch (e) {
        setTimeout('tempsave_init("' + toolbarName + '",' + retry + ')', 500);
    }
}

/**
 * 检查功能是否启用
 * @returns
 */
function tempsave_checkSwitch() {
    return _tempsave_arrVars['switch'] == 'Y'/* && _tempsave_arrVars['isVisible'] == true*/;
}

/**
 * 暂存按钮点击触发事件
 */
function click_save_temp() {
    tempSave('tempsave_common');
}


/**
 * 暂存成功回调函数
 */
function tempsave_onSuccess(req, res) {
    var sbsaveReturnVO = pc.getResData("sbsaveReturnVO", res);
    var returnBz = sbsaveReturnVO.data.returnBz.value;
    var ywzj = sbsaveReturnVO.data.pzxh.value;
    var ybtse = sbsaveReturnVO.data.ybtse.value;
    var verkey = tempsave_getVerkey(ywzj);
    var version = parseFloat(ybtse);
    if ($cacheObj) {
        $cacheObj.set(verkey, version, function (ok, obj1, obj2) {
            if (ok) {
                $cacheObj.set(ywzj, returnBz, function (ok, obj1, obj2) {
                    if (ok) {
                        swordAlertRight("暂存成功！");
                    }
                });
            }
        });
    }
}


/**
 * 暂存扩展方法
 * @param type 
 * @param	YWPT: ywpt_submit方式提交
 * @param	空:   SwordSubmit方式提交
 * @param p1
 * @param   type==YWPT: p1表示 ywpt_submit方法的iframe参数
 * @param   type==空:   p1表示 swordSubmit提交的提交对象
 */
function tempsave_common(type, p1, ctrl, tijiao, onSuccess, onError, submitType) {
    if (type == "YWPT") {
        onSuccess = "tempsave_onSuccess";
        tijiao = "zcbz='Y'," + tijiao;
        ctrl += ",noSave";
        ywpt_submit(p1, ctrl, tijiao, onSuccess, onError, submitType);
    } else {
        if (!p1) {
            return;
        }
        var sub = p1;
        sub.pushData('zcbz', "Y");
        sub.setFunction('onSuccess', 'tempsave_onSuccess');
        sub.submit();
    }
}

/**
 * 获取业务主键
 */
function tempsave_getYwzj(bzdsdm, skssqq, skssqz, djxh, extendKey) {
    var ywzj = "SBZC_" + bzdsdm + "_" + skssqq + "_" + skssqz + "_" + djxh;
    if (extendKey) {
        ywzj = ywzj + "_" + extendKey;
    }
    return ywzj;
}

/**
 * 获取业务主键版本主键
 */
function tempsave_getVerkey(ywzj) {
    return ywzj + "_version";
}


/**
 * 获取暂存版本成功回调函数
 */
function tempsave_onGetTempsaveLatestSuccess(req, res) {
    var version = pc.getResData("version", res);
    if (!version.value) { //cache not exist
        _tempsave_arrVars['zcsjSfcz'] = "N"
        return false;
    } else {
        _tempsave_arrVars['zcsjSfcz'] = "Y"
    }
    version = version.value;
    var ywzj = pc.getResData("ywzj", res).value;
    var verkey = tempsave_getVerkey(ywzj);
    var needUpdateClient = pc.getResData("needUpdateClient", res).value;
    if (needUpdateClient == "true") {
        var ywbw = pc.getResData("ywbw", res).value;
        _tempsave_arrVars[ywzj] = {
            version: version,
            ywzj: ywzj,
            ywbw: ywbw
        }
        if ($cacheObj) {
            var verkey = tempsave_getVerkey(ywzj);
            $cacheObj.set(verkey, version, function (ok, obj1, obj2) {
                if (ok) {
                    $cacheObj.set(ywzj, ywbw, function (ok, obj1, obj2) {
                        if (!ok) {
                            //服务器同步失败
                            $cacheObj.remove(verkey);
                            $cacheObj.remove(ywzj);
                        }
                    });
                } else {
                    $cacheObj.remove(verkey);
                }
            });
        }
    } else {
        //客户端已经存在 直接取出
        if ($cacheObj) {
            $cacheObj.get(ywzj, function (ok, obj1, obj2) {
                if (ok) {
                    _tempsave_arrVars[ywzj] = {
                        version: version,
                        ywzj: ywzj,
                        ywbw: obj1
                    }
                }
            });
        }
    }
}

/**
 * 尝试加载暂存 数据
 * return 返回是否存在暂存并且成功加载暂存数据
 */
function tempsave_tryToLoadData(bzdsdm, skssqq, skssqz, djxh, ctrl, option) {
    //开关禁用时直接返回 不再提示加载
    if (!tempsave_checkSwitch()) {
        return false;
    }
    //如果按钮不可用或者不可见的时候不查询暂存信息
    if (!tempsave_isEnable() && !tempsave_isVisible()) {
        return false;
    }
    //初始化暂存查询开关参数
    cshzckg();
    var extendKey;
    var confirmMsg = "发现暂存数据，确定加载吗？";
    var optType = typeof (option);
    if (optType == "string") {
        //兼容老写法如果传入string则表示是扩展主键 
        extendKey = option;
    } else if (optType == "object") {
        if (option.extendKey) extendKey = option.extendKey;
        if (option.confirmMsg) confirmMsg = option.confirmMsg;
    }
    var res = false;
    var ywzj = tempsave_getYwzj(bzdsdm, skssqq, skssqz, djxh, extendKey);
    // 如果当前业务主键已经和请求询问业务主键相同，说明当前页面没有切换，页面中的数据为最新数据，无需重新加载
    if (temp_save_current_ywzj == ywzj) {
        return true;
    }
    if (_tempsave_arrVars['sfcxzc'] == 'Y') {
        // 从服务器请求暂存报文的版本号
        _tempsave_arrVars[ywzj] = null;
        var clientVersion = null;
        var verkey = tempsave_getVerkey(ywzj);
        $cacheObj.get(verkey, function (ok, obj1, obj2) {
            if (ok) {
                clientVersion = obj1;
            }
        });
        var sub = new SwordSubmit();
        sub.setCtrl("SBGyCtrl_getTempsaveLatest");
        sub.pushData("ywzj", ywzj);
        sub.pushData("clientVersion", clientVersion);
        sub.setFunction("onSuccess", "tempsave_onGetTempsaveLatestSuccess");
        sub.submit();
        if (_tempsave_arrVars['zcsjSfcz'] == "Y") {
            if (_tempsave_arrVars[ywzj]) {
                var ywbw = _tempsave_arrVars[ywzj].ywbw;
                var confirmDrxx = true;
                //
                if (_tempsave_arrVars[ywzj + "_Dr"]) {
                    if (clientVersion) {
                        var oldVersion = parseInt(clientVersion);
                        var newVersion = parseInt(_tempsave_arrVars[ywzj].version);
                        if (newVersion <= oldVersion) {
                            confirmDrxx = false;
                        }
                    }
                    res = true;
                }
                if (_tempsave_arrVars['isConfirm']) { //处理重复弹出确认框问题
                    return false;
                }
                var confirm = swordConfirm(confirmMsg, {
                    onOk: function () {
                        res = true;
                        tempsave_drxx(ywbw, ywzj, bzdsdm, ctrl);
                    },
                    onClose: function () {
                        _tempsave_arrVars['isConfirm'] = false;
                    }
                });
                if (confirm) {
                    _tempsave_arrVars['isConfirm'] = true;
                }
            }
        }
    } else {
        if ($cacheObj) {
            $cacheObj.get(ywzj, function (ok, obj1, obj2) {
                if (ok) {
                    if (_tempsave_arrVars['isConfirm']) { //处理重复弹出确认框问题
                        return false;
                    }
                    var confirm = swordConfirm("发现暂存数据，确定加载吗？", {
                        onOk: function () {
                            res = true;
                            tempsave_drxx(obj1, ywzj, bzdsdm, ctrl);
                        },
                        onClose: function () {
                            _tempsave_arrVars['isConfirm'] = false;
                        }
                    });
                    if (confirm) {
                        _tempsave_arrVars['isConfirm'] = true;
                    }
                }
            });
        }
    }

    return res;
}

/**
 * 暂存申报导入处理方法
 */
function tempsave_drxx(xml, ywzj, bzdsdm, ctrl) {
    var gydrctrl = "";
    if (ctrl) {// 导入处理自定义的ctrl
        gydrctrl = ctrl + "_getTempXmlDrxx";
    } else {
        return;
    }
    var sub = new SwordSubmit();
    sub.pushData("xml", xml);
    sub.pushData("ywzj", ywzj);
    sub.pushData("yzpzzlDm", bzdsdm);
    sub.setCtrl(gydrctrl);
    sub.setFunction('onSuccess', "tempsave_callback4Dr");
    sub.submit();
}

/**
 * 暂存导入回调函数
 */
function tempsave_callback4Dr(req, res) {
    var ywzj = pc.getResData("temp_save_ywzj", res);
    _tempsave_arrVars[ywzj.value + "_Dr"] = true;
    // 记录最新导入的业务主键值
    temp_save_current_ywzj = ywzj.value;
    callbackres = JSON.encode(res);
    boxCallBackForSBzcdr(res);
}
/**
 * 数据作废回调
 */
function dateSrcInvalid() {
}
/**
 * 清除暂存数据 申报成功后回调调用
 */
function tempsave_invalid(bzdsdm, skssqq, skssqz, djxh, extendKey) {
    try {
        var ywzj = tempsave_getYwzj(bzdsdm, skssqq, skssqz, djxh, extendKey);
        var sub = new SwordSubmit();
        sub.setCtrl("SBGyCtrl_upadteTempInvalid");
        sub.pushData("ywzj", ywzj);
        sub.setFunction("onSuccess", "dateSrcInvalid");
        sub.submit();
        if ($cacheObj) {
            var verkey = tempsave_getVerkey(ywzj);
            $cacheObj.remove(verkey);
            $cacheObj.remove(ywzj);
        }
    } catch (e) {

    }

}

/**
 * 判断按钮是否可用
 */
function tempsave_isEnable() {
    return _tempsave_arrVars['isEnable'];
}

/**
 * 禁用按钮
 */
function tempsave_disable(toolbarName) {
    if (!toolbarName && _tempsave_arrVars['toolBarName']) {
        toolbarName = _tempsave_arrVars['toolBarName'];
    }
    $w(toolbarName).setDisabled("tempsave");
    _tempsave_arrVars['isEnable'] = false;
}

/**
 * 启用按钮
 */
function tempsave_enable(toolbarName) {
    if (!toolbarName && _tempsave_arrVars['toolBarName']) {
        toolbarName = _tempsave_arrVars['toolBarName'];
    }
    $w(toolbarName).setEnabled("tempsave");
    _tempsave_arrVars['isEnable'] = true;
}


/**
 * 判断按钮是否显示
 */
function tempsave_isVisible() {
    return _tempsave_arrVars['isVisible'];
}

/**
 * 显示按钮
 * @param toolbarName
 */
function tempsave_show(toolbarName) {
    if (tempsave_checkSwitch()) {
        if (!toolbarName && _tempsave_arrVars['toolBarName']) {
            toolbarName = _tempsave_arrVars['toolBarName'];
        }
        $w(toolbarName).setDisplay("tempsave");
        _tempsave_arrVars['isVisible'] = true;
    }
}

/**
 * 隐藏按钮
 * @param toolbarName
 */
function tempsave_hide(toolbarName) {
    if (!toolbarName && _tempsave_arrVars['toolBarName']) {
        toolbarName = _tempsave_arrVars['toolBarName'];
    }
    $w(toolbarName).setHide("tempsave");
    _tempsave_arrVars['isVisible'] = false;
}