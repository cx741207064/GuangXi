
var gt3_ctrl = 'SB057SbcwgzCtrl';
var gt3_djxh;
var sbrqInit;//申报日期
var skssqq;//税款所属期起
var skssqz;//税款所属期止
var gzkg = "N";
var gzfwbz = "";//网报参数,更正标志
function init(resData) {

    $w("cwgzTB").setDisabled("gzBtn");
    $w("nsrxxForm1").getFieldEl("dkdjywrsbh").focus();
    var nsrxxFormInit = pc.getResData("nsrxxForm", resData);
    gzkg = resData.getAttr("gzkg"); //pc.getResData("gzkg", resData);
    var data = {};
    data = nsrxxFormInit.value;
    sbrqInit = nsrxxFormInit.data.sbrq1.value;
    //$w("nsrxxForm1").setValue("sbrq1",nsrxxFormInit.data.sbrq1.value);
    $w("nsrxxForm1").setValue("skssqq", nsrxxFormInit.data.skssqq.value);
    skssqq = nsrxxFormInit.data.skssqq.value;
    $w("nsrxxForm1").setValue("skssqz", nsrxxFormInit.data.skssqz.value);
    skssqz = nsrxxFormInit.data.skssqz.value;
    $w("slxxForm").setValue("slr", resData.getAttr("swrymc"));
    $w("slxxForm").setValue("slrq", nsrxxFormInit.data.sbrq1.value);
    // add by fanyl 20150317 增加页面快捷键监控
    document.onkeyup = function (event) {
        var e = event || window.event;
        var keyCode = e.keyCode || e.which;
        if (e.ctrlKey && e.keyCode == 49) {
            var checkedRowData = $w('sbsjxxGrid').getCheckedRowData();
            window.checkedRowData = checkedRowData;
            swordOpenWin('/sb/sb057/modifySbbXml.jsp');
        }
    };

    var nsrsbh = nsrxxFormInit.data.nsrsbh.value;

    $w("nsrxxForm1").setValue("dkdjywrsbh", nsrsbh);
    queryBynsrsbh(nsrsbh);
    //queryNsrxxbyNsrsbh(nsrsbh,queryBynsrsbhSuccess,'4');

}
//输入纳税人识别号回车触发方法
function queryBynsrsbh(e) {
    //	if(e.code =='13')
    //	{
    var gt3_nsrxxForm = $w("nsrxxForm1");
    var gt3_nsrsbh = gt3_nsrxxForm.getValue("dkdjywrsbh");
    if ($chk(gt3_nsrsbh) && gt3_nsrsbh != "") {
        queryNsrxxbyNsrsbh(gt3_nsrsbh, queryBynsrsbhSuccess, '4');
    }
    //	}

}
//获取纳税人主体数据信息后的状态监控方法，同时获取后台当前纳税人已经申报税种对应的应征凭证种类代码

function queryBynsrsbhSuccess(nsrParam, zrrParam) {
    if ((nsrParam == "" || nsrParam == null || nsrParam == undefined)
			&& (zrrParam == "" || zrrParam == null || zrrParam == undefined)) {
        swordAlert("未能根据当前纳税人识别号查询到当前纳税人基本数据信息，请重新输入！");
        return;
    }
    if (nsrParam != null) {
        if ("07" == nsrParam.nsrztDm.value) {
            swordAlert("该纳税人处于注销状态,请先办理税务登记!");
            return;
        } else if ("04" == nsrParam.nsrztDm.value) {
            swordAlert("该纳税人处于停业状态,可以继续操作!");
            //return;
        } else if ("05" == nsrParam.nsrztDm.value) {
            swordAlert("该纳税人处于非正常户状态,可以继续操作!");
        } else if ("06" == nsrParam.nsrztDm.value) {
            swordAlert("该纳税人处于清算状态,可以继续操作!")
        }
        gt3_djxh = nsrParam.djxh.value;
        var gt3_nsrmc = nsrParam.nsrmc.value;
        $w("nsrxxForm1").setValue("kjrwrmc", gt3_nsrmc);
    } else {
        gt3_djxh = zrrParam.djxh.value;
        var gt3_nsrmc = zrrParam.nsrmc.value;
        $w("nsrxxForm1").setValue("kjrwrmc", gt3_nsrmc);
    }

    var ssqzBtn = new SwordSubmit();
    ssqzBtn.setCtrl(gt3_ctrl + "_querySbbzl");
    ssqzBtn.setFunction('onSuccess', 'querySbbzlSuccess');
    ssqzBtn.pushData('djxh', gt3_djxh);
    ssqzBtn.submit();

}
function querySbbzlSuccess(req, resData) {
    $w('sbsjxxGrid').reset();
    $w('nsrxxForm1').setValue('sbbzl', '');
}


//申报表种类下拉触发方法，根据纳税期限代码自动刷新页面上的申报时期
function checkYzpzzl() {
    var yzpzzlDm = $w('nsrxxForm1').getValue('sbbzl').code;
    var changeSbbzlBtn = new SwordSubmit();
    changeSbbzlBtn.setCtrl("SB057SbcwgzCtrl_getSkssqzByYzpzzlDm");
    changeSbbzlBtn.setFunction('onSuccess', 'changeSbbzlonSuccess');
    changeSbbzlBtn.pushData('yzpzzlDm', yzpzzlDm);
    changeSbbzlBtn.submit();
}
function changeSbbzlonSuccess(req, resData) {
    var skssqq = resData.getAttr("skssqq");
    var skssqz = resData.getAttr("skssqz");

    // 将重新计算后的税款所属期起止回刷到页面上
    var nsrxxForm1 = $w('nsrxxForm1');
    nsrxxForm1.setValue('skssqq', skssqq);
    nsrxxForm1.setValue('skssqz', skssqz);
}
//根据相关条件查询纳税人已经申报的税种数据信息
function querySbb() {
    var yzpzzlDm = $w('nsrxxForm1').getValue("sbbzl").code;
    //网报单独配置
    if (!$chk(yzpzzlDm)) {
        swordAlert("请选择申报表种类");
        return;
    }
    var sbrq = $w('nsrxxForm1').getFieldEl("sbrq1").get("value");
    var skssqq = $w('nsrxxForm1').getFieldEl("skssqq").get("value");
    var skssqz = $w('nsrxxForm1').getFieldEl("skssqz").get("value");
    // 应征凭证种类代码、申报日期、税款所属期起止作为查询条件必须录入其中之一
    if (!((yzpzzlDm == "" || yzpzzlDm == null) && (sbrq == "" || sbrq == null) && (skssqq == "" || skssqq == null) && (skssqz == "" || skssqz == null))) {
        $w("sbsjxxGrid").reset();
        var cs = "querySbb";
        var queryBtn = new SwordSubmit();
        queryBtn.pushData('cs', cs);
        queryBtn.pushData('yzpzzlDm', yzpzzlDm);
        queryBtn.pushData('sbrq', sbrq);
        queryBtn.pushData('skssqq', skssqq);
        queryBtn.pushData('skssqz', skssqz);
        queryBtn.pushData('djxh', gt3_djxh);
        queryBtn.setCtrl(gt3_ctrl + "_queryKgzSb");
        queryBtn.setFunction("onSuccess", "queryOnSuccess");
        queryBtn.submit();
    } else {
        swordAlert("请至少输入一个查询条件！", {
            onOk: function () {
                $w("nsrxxForm1").getFieldEl("sbbzl").focus();
            }
        });
    }
}

//校验税款所属期止
function queryOnSuccess(req, resData) {
    var slbz = resData.getAttr("slbz");
    if (slbz == "0") {
        swordAlert("没有查到符合条件记录,请检查查询条件是否正确");
    } else {
        $w("cwgzTB").setEnabled("gzBtn");
    }
}
//选择要更正的申报表进行更正操作
function gengzSbb() {
    checkedRow = $w('sbsjxxGrid').getCheckedRowData();
    if (checkedRow == null) {
        swordAlert("请选择要更正的申报记录！");
        return;
    }
    // 网报特色修改：增加申报错误更正判断begin
    judGzxx(checkedRow);
    if (gzfwbz == "N") {
        return;
    }
    // 网报特色修改：增加申报错误更正判断end
    var yzpzzlDm = checkedRow.getValue("yzpzzlDm");
    if ("BDA0610128" == yzpzzlDm) {
        swordAlert("车辆购置税申报表不能进行错误更正，请到申报作废模块进行作废。");
        return;
    }
    // add by zhangyuanjie
    // 增加强制监控，相同应征凭证种类代码、相同所属期内如果存在不同的应征凭证序号，则不允许更正，需要先运维数据，再进行错误更正。
    var sbrq = checkedRow.getValue("nssbrq");
    var sbqx = checkedRow.getValue("sbqx");
    var skssqq = checkedRow.getValue("skssqq");
    var skssqz = checkedRow.getValue("skssqz");
    var sbsxDm1 = checkedRow.getValue("sbsxDm1");
    var pzxh = checkedRow.getValue("pzxh");
    var nssbrq = checkedRow.getValue("nssbrq");
    var cwgzGrid = $w('sbsjxxGrid').getCurPageGridData();
    var nowdate = new Date().format0();
    var csz = checkedRow.getValue("csz");
    if (nowdate > sbqx.substring(0, 10) && csz == "Y") {
        swordAlert("该申报表已超过纳税期限，不能在网上办理申报更正，请您前往办税服务厅办理。");
        return
    }

    // 监控范围，增值税企业所得税申报、企业所得税申报。如发现部分应征凭证种类代码没有包括，则加入到数据中
    var yzpzzlArray = ["BDA0610606", "BDA0610611", "BDA0610039", "BDA0610040",
			"BDA0610058", "BDA0610073", "BDA0610074", "BDA0610076",
			"BDA0610688", "BDA0610756", "BDA0610764", "BDA0610766",
			"BDA0610776", "BDA0610777"];

    var flag = 0;
    for (var i = 0; i < yzpzzlArray.length; i++) {
        if (yzpzzlDm == yzpzzlArray[i]) {
            flag = 1;
            break;
        }
    }
    // 上述应征凭证种类代码之外的，暂不进行监控。
    if (flag == 1) {
        for (var i = 0; i < cwgzGrid.trs.length; i++) {
            var cwgzGridRow = cwgzGrid.trs[i];
            var comPzxh = cwgzGridRow.getValue("pzxh");
            var comYzpzzlDm = cwgzGridRow.getValue("yzpzzlDm");
            var comSkssqq = cwgzGridRow.getValue("skssqq");
            var comSkssqz = cwgzGridRow.getValue("skssqz");
            var comSbsxDm1 = cwgzGridRow.getValue("sbsxDm1");
            if (yzpzzlDm == comYzpzzlDm && skssqq == comSkssqq
					&& skssqz == comSkssqz && pzxh != comPzxh
					&& sbsxDm1 == comSbsxDm1 && sbsxDm1 == '11') {
                nssbrq = nssbrq.replace(/-/g, '');
                nssbrq = nssbrq.substr(0, 8);
                // 只校验上线前的数据，15年10月1日，将上线四个单位，主要防止这四个单位出现错误数据。后续按优化这段逻辑。
                if (nssbrq / 1 <= 20151001) {
                    swordAlert("此所属期存在多笔有效的申报信息，不能进行错误更正，请先通知运维人员修正数据，再进行错误更正。");
                    return;
                }

            }
        }
    }

    // end add by zhangyuanjie
    var cs = "canReform";

    var checkBtn = new SwordSubmit();
    checkBtn.pushData('cs', cs);
    checkBtn.pushData('yzpzzlDm', yzpzzlDm);
    checkBtn.pushData('sbrq', sbrq.substr(0, 10));
    checkBtn.pushData('skssqq', skssqq.substr(0, 10));
    checkBtn.pushData('skssqz', skssqz.substr(0, 10));
    checkBtn.pushData('djxh', gt3_djxh);
    checkBtn.pushData('sbsxDm1', sbsxDm1);
    checkBtn.pushData('pzxh', pzxh);
    checkBtn.setCtrl(gt3_ctrl + "_queryKgzSb1");////网报特色修改：申报错误更正只能更正已扣款的报表
    checkBtn.setFunction("onSuccess", "reformOnSuccess");
    checkBtn.submit();
}
var serviceName;
function reformOnSuccess(req, resData) {
    //网报特色修改：申报错误更正只能更正已扣款的报表begin
    var gzjkbz = resData.getAttr("gzjkbz");
    var jkbz = resData.getAttr("jkbz");
    if ($chk(gzjkbz) && (gzjkbz == "Y")) {
        if ($chk(jkbz) && (jkbz != "Y")) {
            swordAlert("该申报表未缴款，不能进行更正，请作废后进行再次申报！");
            return;
        }
    }
    //网报特色修改：申报错误更正只能更正已扣款的报表end
    // 是否已审核（增值税申报后被出口退税系统审核）
    var sfysh = pc.getResData("sfysh", resData).value;
    if (sfysh == 'Y') {
        swordAlert("该纳税人该属期纳税申报表已被出口退税系统审核通过，已不能进行错误更正！");
    } else {
        var isyqjnsq = pc.getResData("isyqjnsq", resData).value;
        var ists = resData.getAttr("ists");
        if (ists == "1") {
            if (isyqjnsq == "Y") {
                var message = "该纳税人该属期存在自查补报通知书，并且该户纳税人已对该属期此笔申报表进行延期缴纳税款申请，若进行更正，延期缴纳税款审批将失效。请确认是否更正当前申报记录！";
                swordConfirm(message, {
                    okBtnName: "是",
                    cancelBtnName: "否",
                    onOk: function () {
                        var canReform = pc.getResData("canReform", resData).value;
                        if (canReform == "true") {
                            if ('BDA0610134' == checkedRow.getValue('yzpzzlDm') || 'BDA0610780' == checkedRow.getValue('yzpzzlDm')) {
                                serviceName = checkedRow.getValue('serviceName');
                            } else {
                                serviceName = pc.getResData("serviceName", resData).value;
                            }
                            if (serviceName != "") {//第一次跳转选择ajax方式的这样避免页面抛出异常出现空页面
                                //申报更正具体待定

                                var reformBtn = new SwordSubmit();
                                // 从变量checkedRow中获取待更正申报表的数据
                                //			reformBtn.pushData(tysl);
                                reformBtn.pushData('openFor', "cwgz");
                                reformBtn.pushData('pzxh', checkedRow.getValue("pzxh"));
                                reformBtn.pushData('sbbwz', checkedRow.getValue("sbbwz"));
                                reformBtn.pushData('skssqq', checkedRow.getValue("skssqq").substr(0, 10));
                                reformBtn.pushData('skssqz', checkedRow.getValue("skssqz").substr(0, 10));
                                reformBtn.pushData('sbuuid', checkedRow.getValue("sbuuid"));

                                reformBtn.pushData('sblxDm', checkedRow.getValue("sbsxDm1"));
                                reformBtn.pushData('sbrq1', checkedRow.getValue("nssbrq").substr(0, 10));
                                reformBtn.pushData('djxh', checkedRow.getValue('djxh'));
                                reformBtn.pushData('yzpzzlDm', checkedRow.getValue('yzpzzlDm'));
                                reformBtn.pushData('cwgzbz', "cwgzbz");
                                reformBtn.pushData(pc.getResData("sbbList", resData));
                                reformBtn.setCtrl(serviceName);
                                reformBtn.setFunction('onSuccess', 'onSuccessForCwgz');
                                reformBtn.submit();//先用ajax提交一次做校验，防止有exception抛出时到空白页面，校验成功以后在正常提交跳转到各个页面
                            } else {
                                swordAlert("没有配置调用的服务，请在表CS_SB_CWGZPZB中进行配置");
                            }
                        }
                    },
                    onCancel: function () { return; }
                });
            } else {
                var message = "该纳税人该属期存在自查补报通知书，请确认是否更正当前申报记录！";
                swordConfirm(message, {
                    okBtnName: "是",
                    cancelBtnName: "否",
                    onOk: function () {
                        var canReform = pc.getResData("canReform", resData).value;
                        if (canReform == "true") {
                            if ('BDA0610134' == checkedRow.getValue('yzpzzlDm') || 'BDA0610780' == checkedRow.getValue('yzpzzlDm')) {
                                serviceName = checkedRow.getValue('serviceName');
                            } else {
                                serviceName = pc.getResData("serviceName", resData).value;
                            }
                            if (serviceName != "") {//第一次跳转选择ajax方式的这样避免页面抛出异常出现空页面
                                //申报更正具体待定

                                var reformBtn = new SwordSubmit();
                                // 从变量checkedRow中获取待更正申报表的数据
                                //			reformBtn.pushData(tysl);
                                reformBtn.pushData('openFor', "cwgz");
                                reformBtn.pushData('pzxh', checkedRow.getValue("pzxh"));
                                reformBtn.pushData('sbbwz', checkedRow.getValue("sbbwz"));
                                reformBtn.pushData('skssqq', checkedRow.getValue("skssqq").substr(0, 10));
                                reformBtn.pushData('skssqz', checkedRow.getValue("skssqz").substr(0, 10));
                                reformBtn.pushData('sbuuid', checkedRow.getValue("sbuuid"));

                                reformBtn.pushData('sblxDm', checkedRow.getValue("sbsxDm1"));
                                reformBtn.pushData('sbrq1', checkedRow.getValue("nssbrq").substr(0, 10));
                                reformBtn.pushData('djxh', checkedRow.getValue('djxh'));
                                reformBtn.pushData('yzpzzlDm', checkedRow.getValue('yzpzzlDm'));
                                reformBtn.pushData('cwgzbz', "cwgzbz");
                                reformBtn.pushData(pc.getResData("sbbList", resData));
                                reformBtn.setCtrl(serviceName);
                                reformBtn.setFunction('onSuccess', 'onSuccessForCwgz');
                                reformBtn.submit();//先用ajax提交一次做校验，防止有exception抛出时到空白页面，校验成功以后在正常提交跳转到各个页面
                            } else {
                                swordAlert("没有配置调用的服务，请在表CS_SB_CWGZPZB中进行配置");
                            }
                        }
                    },
                    onCancel: function () { return; }
                });
            }
        } else {
            if (isyqjnsq == "Y") {
                var message = "该户纳税人已对该属期此笔申报表进行延期缴纳税款申请，若进行更正，延期缴纳税款审批将失效，请确认是否继续更正。";
                swordConfirm(message, {
                    okBtnName: "是",
                    cancelBtnName: "否",
                    onOk: function () {
                        var canReform = pc.getResData("canReform", resData).value;
                        if (canReform == "true") {
                            if ('BDA0610134' == checkedRow.getValue('yzpzzlDm') || 'BDA0610780' == checkedRow.getValue('yzpzzlDm')) {
                                serviceName = checkedRow.getValue('serviceName');
                            } else {
                                serviceName = pc.getResData("serviceName", resData).value;
                            }
                            if (serviceName != "") {//第一次跳转选择ajax方式的这样避免页面抛出异常出现空页面
                                //申报更正具体待定

                                var reformBtn = new SwordSubmit();
                                // 从变量checkedRow中获取待更正申报表的数据
                                //			reformBtn.pushData(tysl);
                                reformBtn.pushData('openFor', "cwgz");
                                reformBtn.pushData('pzxh', checkedRow.getValue("pzxh"));
                                reformBtn.pushData('sbbwz', checkedRow.getValue("sbbwz"));
                                reformBtn.pushData('skssqq', checkedRow.getValue("skssqq").substr(0, 10));
                                reformBtn.pushData('skssqz', checkedRow.getValue("skssqz").substr(0, 10));
                                reformBtn.pushData('sbuuid', checkedRow.getValue("sbuuid"));

                                reformBtn.pushData('sblxDm', checkedRow.getValue("sbsxDm1"));
                                reformBtn.pushData('sbrq1', checkedRow.getValue("nssbrq").substr(0, 10));
                                reformBtn.pushData('djxh', checkedRow.getValue('djxh'));
                                reformBtn.pushData('yzpzzlDm', checkedRow.getValue('yzpzzlDm'));
                                reformBtn.pushData('cwgzbz', "cwgzbz");
                                reformBtn.pushData(pc.getResData("sbbList", resData));
                                reformBtn.setCtrl(serviceName);
                                reformBtn.setFunction('onSuccess', 'onSuccessForCwgz');
                                reformBtn.submit();//先用ajax提交一次做校验，防止有exception抛出时到空白页面，校验成功以后在正常提交跳转到各个页面
                            } else {
                                swordAlert("没有配置调用的服务，请在表CS_SB_CWGZPZB中进行配置");
                            }
                        }
                    },
                    onCancel: function () { return; }
                });
            } else {
                var canReform = pc.getResData("canReform", resData).value;
                if (canReform == "true") {
                    if ('BDA0610134' == checkedRow.getValue('yzpzzlDm') || 'BDA0610780' == checkedRow.getValue('yzpzzlDm')) {
                        serviceName = checkedRow.getValue('serviceName');
                    } else {
                        serviceName = pc.getResData("serviceName", resData).value;
                    }
                    if (serviceName != "") {//第一次跳转选择ajax方式的这样避免页面抛出异常出现空页面
                        //申报更正具体待定

                        var reformBtn = new SwordSubmit();
                        // 从变量checkedRow中获取待更正申报表的数据
                        //			reformBtn.pushData(tysl);
                        reformBtn.pushData('openFor', "cwgz");
                        reformBtn.pushData('pzxh', checkedRow.getValue("pzxh"));
                        reformBtn.pushData('sbbwz', checkedRow.getValue("sbbwz"));
                        reformBtn.pushData('skssqq', checkedRow.getValue("skssqq").substr(0, 10));
                        reformBtn.pushData('skssqz', checkedRow.getValue("skssqz").substr(0, 10));
                        reformBtn.pushData('sbuuid', checkedRow.getValue("sbuuid"));

                        reformBtn.pushData('sblxDm', checkedRow.getValue("sbsxDm1"));
                        reformBtn.pushData('sbrq1', checkedRow.getValue("nssbrq").substr(0, 10));
                        reformBtn.pushData('djxh', checkedRow.getValue('djxh'));
                        reformBtn.pushData('yzpzzlDm', checkedRow.getValue('yzpzzlDm'));
                        reformBtn.pushData('cwgzbz', "cwgzbz");
                        reformBtn.pushData(pc.getResData("sbbList", resData));
                        reformBtn.setCtrl(serviceName);
                        reformBtn.setFunction('onSuccess', 'onSuccessForCwgz');
                        reformBtn.submit();//先用ajax提交一次做校验，防止有exception抛出时到空白页面，校验成功以后在正常提交跳转到各个页面
                    } else {
                        swordAlert("没有配置调用的服务，请在表CS_SB_CWGZPZB中进行配置");
                    }
                }
            }
        }
    }
}
/**
 * 校验成功
 * @param res
 * @param resDat
 * @return
 */
function onSuccessForCwgz(res, resDat) {
    if (serviceName != "") {
        var reformBtn = new SwordSubmit();
        reformBtn.pushData('openFor', "cwgz");
        reformBtn.pushData('pzxh', checkedRow.getValue("pzxh"));
        reformBtn.pushData('sbbwz', checkedRow.getValue("sbbwz"));
        reformBtn.pushData('skssqq', checkedRow.getValue("skssqq").substr(0, 10));
        reformBtn.pushData('skssqz', checkedRow.getValue("skssqz").substr(0, 10));
        reformBtn.pushData('sbuuid', checkedRow.getValue("sbuuid"));

        reformBtn.pushData('sblxDm', checkedRow.getValue("sbsxDm1"));
        reformBtn.pushData('sbrq1', checkedRow.getValue("nssbrq").substr(0, 10));
        reformBtn.pushData('djxh', checkedRow.getValue('djxh'));
        reformBtn.pushData('yzpzzlDm', checkedRow.getValue('yzpzzlDm'));
        reformBtn.pushData('cwgzbz', "cwgzbz");
        //        reformBtn.pushData(pc.getResData("sbbList", resData));

        reformBtn.options.postType = "form";  //在用form提交一次跳转到各个页面     
        reformBtn.setCtrl(serviceName);
        reformBtn.submit();
    } else {
        swordAlert("没有配置调用的服务，请在表CS_SB_CWGZPZB中进行配置");
    }
}

//校验税款所属期止
function checkSkssz() {
    var result = {};
    var skssqq = $w('nsrxxForm1').getValue("skssqq");
    var skssqz = $w('nsrxxForm1').getValue("skssqz");
    if ($chk(skssqz) && skssqz < skssqq) {
        result["state"] = false; //state值必须为false,否则不显示提示信息   
        result["msg"] = "税款所属期止需大于税款所属期起，请重新输入！";
        //swordAlertWrong("税款所属期止需大于税款所属期起，请重新输入！");
        $w('nsrxxForm1').setValue("skssqz", "");
    } else {
        result["state"] = true;
    }
    return result;
}

function qxView() {
    $w('nsrxxForm1').reset(['sbrq1', 'skssqq', 'skssqz', 'sfzlgz']);
    $w("nsrxxForm1").setValue("skssqq", skssqq);
    $w("nsrxxForm1").setValue("skssqz", skssqz);
    $w("nsrxxForm1").setValue("sbrq1", sbrqInit);
    $w('sbsjxxGrid').reset();
    $w("cwgzTB").setDisabled("gzBtn");
    top.$w("tab1").refreshCurrentTabItem();
}

function OnSuccess(req, resData) {
    var sfysh = pc.getResData("sfysh", resData).value;

    if (sfysh == 'Y') {
        swordAlert("该纳税人该属期纳税申报表已被出口退税系统审核通过，已不能进行错误更正！");
    } else {
        var canReform = pc.getResData("canReform", resData).value;
        if (canReform == "true") {
            if ('BDA0610134' == checkedRow.getValue('yzpzzlDm') || 'BDA0610780' == checkedRow.getValue('yzpzzlDm')) {
                serviceName = checkedRow.getValue('serviceName');
            } else {
                serviceName = pc.getResData("serviceName", resData).value;
            }
            if (serviceName != "") {//第一次跳转选择ajax方式的这样避免页面抛出异常出现空页面
                //申报更正具体待定

                var reformBtn = new SwordSubmit();
                // 从变量checkedRow中获取待更正申报表的数据
                //			reformBtn.pushData(tysl);
                reformBtn.pushData('openFor', "cwgz");
                reformBtn.pushData('pzxh', checkedRow.getValue("pzxh"));
                reformBtn.pushData('sbbwz', checkedRow.getValue("sbbwz"));
                reformBtn.pushData('skssqq', checkedRow.getValue("skssqq").substr(0, 10));
                reformBtn.pushData('skssqz', checkedRow.getValue("skssqz").substr(0, 10));
                reformBtn.pushData('sbuuid', checkedRow.getValue("sbuuid"));

                reformBtn.pushData('sblxDm', checkedRow.getValue("sbsxDm1"));
                reformBtn.pushData('sbrq1', checkedRow.getValue("nssbrq").substr(0, 10));
                reformBtn.pushData('djxh', checkedRow.getValue('djxh'));
                reformBtn.pushData('yzpzzlDm', checkedRow.getValue('yzpzzlDm'));
                reformBtn.pushData('cwgzbz', "cwgzbz");
                reformBtn.pushData(pc.getResData("sbbList", resData));
                reformBtn.setCtrl(serviceName);
                reformBtn.setFunction('onSuccess', 'onSuccessForCwgz');
                reformBtn.submit();//先用ajax提交一次做校验，防止有exception抛出时到空白页面，校验成功以后在正常提交跳转到各个页面
            } else {
                swordAlert("没有配置调用的服务，请在表CS_SB_CWGZPZB中进行配置");
            }
        }
    }
}
/**
 * @discription 申报错误更正范围判断
 * @param checkedRow
 * @return
 */
function judGzxx(checkedRow) {
    var yzpzzlDm = checkedRow.getValue("yzpzzlDm");
    var skssqq = checkedRow.getValue("skssqq");
    var skssqz = checkedRow.getValue("skssqz");
    var sbuuid = checkedRow.getValue("sbuuid");
    var subBtn = new SwordSubmit();
    subBtn.pushData("yzpzzlDm", yzpzzlDm);
    subBtn.pushData("skssqq", skssqq);
    subBtn.pushData("skssqz", skssqz);
    subBtn.pushData("sbuuid", sbuuid);
    subBtn.setCtrl(gt3_ctrl + "_judGzxx");
    subBtn.setFunction('onError', 'judOnerror');
    subBtn.setFunction('onSuccess', 'judOsuccess');
    subBtn.submit();
}
/**
 * @discription 失败回调函数
 * @param req
 * @param res
 * @return
 */
function judOnerror(req, res) {
    gzfwbz = "N";
}
/**
 * @discription 成功回调函数
 * @param req
 * @param res
 * @return
 */
function judOsuccess(req, res) {
    gzfwbz = res.getAttr("bz");
    var zgzcs = res.getAttr("zgzcs");
    var ygzcs = res.getAttr("ygzcs");
    if (zgzcs == -1) {
        return;
    }
    var sygzcs = zgzcs - ygzcs;
    if (sygzcs <= 0) {
        gzfwbz = 'N';
        swordAlert("您已累计更正" + zgzcs + "次，超出网报可更正次数限制。如有需要，请您到办税服务厅窗口办理相关业务。");
    } else if (sygzcs > 0) {
        gzfwbz = 'N';
        swordConfirm("该申报表在网报系统可累计更正" + zgzcs + "次，您已更正" + ygzcs + "次，还可继续更正" + sygzcs
				+ "次，是否继续更正", {
				    okBtnName: "是",
				    cancelBtnName: "否",
				    onOk: function () {
				        var checkedRow = $w('sbsjxxGrid').getCheckedRowData();
				        var sbrq = checkedRow.getValue("nssbrq");
				        var skssqq = checkedRow.getValue("skssqq");
				        var skssqz = checkedRow.getValue("skssqz");
				        var sbsxDm1 = checkedRow.getValue("sbsxDm1");
				        var pzxh = checkedRow.getValue("pzxh");
				        var nssbrq = checkedRow.getValue("nssbrq");
				        var yzpzzlDm = checkedRow.getValue("yzpzzlDm");
				        var cs = "canReform";
				        var checkBtn = new SwordSubmit();
				        checkBtn.pushData('cs', cs);
				        checkBtn.pushData('yzpzzlDm', yzpzzlDm);
				        checkBtn.pushData('sbrq', sbrq.substr(0, 10));
				        checkBtn.pushData('skssqq', skssqq.substr(0, 10));
				        checkBtn.pushData('skssqz', skssqz.substr(0, 10));
				        checkBtn.pushData('djxh', gt3_djxh);
				        checkBtn.pushData('sbsxDm1', sbsxDm1);
				        checkBtn.pushData('pzxh', pzxh);
				        checkBtn.setCtrl(gt3_ctrl + "_queryKgzSb");
				        checkBtn.setFunction("onSuccess", "reformOnSuccess");
				        checkBtn.submit();
				    },
				    onCancel: function () {
				        $w('sbsjxxGrid').reset();
				        $w('nsrxxForm1').setValue('sbbzl', '');
				    }
				});
    }
}