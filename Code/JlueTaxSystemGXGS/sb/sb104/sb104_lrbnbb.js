var beSbdr = false;
var gs_gjj = [///23=3-4-5-13-16-20+22）
	"{lrbxxnbbForm_h21l2}={lrbxxnbbForm_h1l2}-{lrbxxnbbForm_h2l2}-{lrbxxnbbForm_h3l2}-{lrbxxnbbForm_h11l2}-{lrbxxnbbForm_h14l2}-" +
					"{lrbxxnbbForm_h18l2}+{lrbxxnbbForm_h20l2}",
	"{lrbxxnbbForm_h30l2}={lrbxxnbbForm_h21l2}+{lrbxxnbbForm_h22l2}-{lrbxxnbbForm_h24l2}",
	"{lrbxxnbbForm_h32l2}={lrbxxnbbForm_h30l2}-{lrbxxnbbForm_h31l2}",

	"{lrbxxnbbForm_h21l3}={lrbxxnbbForm_h1l3}-{lrbxxnbbForm_h2l3}-{lrbxxnbbForm_h3l3}-{lrbxxnbbForm_h11l3}-{lrbxxnbbForm_h14l3}-" +
					"{lrbxxnbbForm_h18l3}+{lrbxxnbbForm_h20l3}",
	"{lrbxxnbbForm_h30l3}={lrbxxnbbForm_h21l3}+{lrbxxnbbForm_h22l3}-{lrbxxnbbForm_h24l3}",
	"{lrbxxnbbForm_h32l3}={lrbxxnbbForm_h30l3}-{lrbxxnbbForm_h31l3}"
];
gs_caculate = thgs(gs_gjj);

var lrbxx_Data = null;
var cjbz;
var lrbCjcgbj = 'N';//利润表成功采集标记 默认为否
var sqlrbxxnbbForm;
/**
 * 初始化处理
 * @param {Object} resData
 */
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled('bcBtn');
        $w("qykjzdInner").setDisabled('qxBtn');
        $w("lrbxxnbbForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
    }
    //查询上年数据存放地址
    var ssqq = parent.ssqq;
    var year = ssqq.substr(0, 4);
    var newSubmit = new SwordSubmit();
    newSubmit.pushData("djxh", parent.djxh);
    newSubmit.pushData("bszlDm", parent.bszldm);
    newSubmit.pushData("ssqq", year + "-01-01");
    newSubmit.pushData("ssqz", year + "-12-31");
    newSubmit.setCtrl("SB151zlbsslCtrl_querySqss");
    newSubmit.setFunction("onSuccess", "querysqcfdzSuccess");
    newSubmit.submit();

    var resDataXMLForSBDR = parent.hxfblrbxxNbb;
    parent.setHx("03");
    //查看导入报此处js错误 注释掉
    //	if(parent.cxbj == 'N'){
    //	(function(){$w("lrbxxnbbForm").getFieldEl('h1l2').focus();}).delay(1);
    //	}
    //查询利润表本年累计数存放地址
    var initBtn = new SwordSubmit();
    initBtn.pushData("djxh", parent.djxh);
    initBtn.pushData("bszlDm", parent.bszldm);
    initBtn.pushData("ssqq", (Number(year) + 1) + "-01-01");
    initBtn.pushData("ssqz", (Number(year) + 1) + "-01-31");
    initBtn.setCtrl("SB151zlbsslCtrl_querySqss");
    initBtn.setFunction("onSuccess", "queryybcfdzSuccess");
    initBtn.submit();
    parent.$w("zzsybnsrsb").setDisabled("save");
    parent.$w("zzsybnsrsb").setDisabled("reset");
    parent.$w("zzsybnsrsb").setDisabled("import");
    //开始需要增加网报特色
    if (parent.beSbdr && beSbdr == false) {
        parent.$w('zzsybnsrsb').setEnabled('save');
        parent.$w('zzsybnsrsb').setEnabled('import');
        parent.$w('zzsybnsrsb').setEnabled('reset');
        beSbdr = true;
        if (resDataXMLForSBDR != null && resDataXMLForSBDR != undefined
				&& "" != resDataXMLForSBDR) {
            (function () {
                var inputs = $$('input');
                inputs.each(function (input, idx) {
                    if (input.id != "") {
                        caculate(input.id);
                    }
                });
                savefb();
                beSbdr = false;
            }).delay(1);
        }
    }
}

//查询上年数据存放地址
function querysqcfdzSuccess(req, resData) {
    var sqcfdz = resData.getAttr("sqcfdz");
    var newSubmit = new SwordSubmit();
    newSubmit.pushData("cfdz", sqcfdz);
    newSubmit.setCtrl(parent.Ctrl + "_queryXmlByzlbsuuid");
    newSubmit.setFunction("onSuccess", "sqzcfzbxxOnSuccess");
    if (sqcfdz != null && sqcfdz != undefined && sqcfdz != "") {
        newSubmit.submit();
    }
}
//查询上年数据
function sqzcfzbxxOnSuccess(req, resData) {
    sqlrbxxnbbForm = pc.getResData("gzlrbxxnbbForm", resData);
    //	$w("lrbxxnbbForm").initData(sqlrbxxnbbForm);
    var bz = parent.sfcfcj;
    for (var i = 1; i <= 32; i++) {
        $w("lrbxxnbbForm").setValue("h" + i + "l3", sqlrbxxnbbForm.data["h" + i + "l2"].value.round(2));
    }
}

//查询利润表本年累计数存放地址
function queryybcfdzSuccess(req, resData) {
    var sqcfdz = resData.getAttr("sqcfdz");
    var newSubmit = new SwordSubmit();
    newSubmit.pushData("cfdz", sqcfdz);
    newSubmit.setCtrl(parent.Ctrl + "_queryXmlByzlbsuuid");
    newSubmit.setFunction("onSuccess", "querySqsjSuccess");
    if (sqcfdz != null && sqcfdz != undefined && sqcfdz != "") {
        newSubmit.submit();
    } else {
        //swordAlert("小企业会计准则利润表十二月份月报未采集!");
        return;
    }
}
//查询利润表本年累计数
function querySqsjSuccess(req, resData) {
    var lrbxxForm = pc.getResData("gzlrbxxForm", resData);
    var bz = parent.sfcfcj;
    if (lrbxxForm != null && lrbxxForm != "" && lrbxxForm != undefined && bz != "Y") {
        for (var i = 1; i <= 32; i++) {
            $w("lrbxxnbbForm").setValue("h" + i + "l2", lrbxxForm.data["h" + i + "l2"].value.round(2));
        }
    }
}

function setInitValueNbOpen(open_nsrsbh, open_nsrmc, open_bsrq, open_skssqq, open_skssqz, open_bbssq, nsrxxFormData) {
    $w("nsrxxForm4").setValue("nsrsbh", open_nsrsbh);
    $w("nsrxxForm4").setValue("nsrmc", open_nsrmc);
    $w("nsrxxForm4").setValue("bsrq", open_bsrq);
    $w("nsrxxForm4").setValue("skssqq", open_skssqq);
    $w("nsrxxForm4").setValue("skssqz", open_skssqz);
    $w("nsrxxForm4").setValue("bbssq", open_bbssq);

}

function setCfcjInitValue(open_cfcjTyNsrxxForm, open_xqykjzdlrbForm, open_cfcjbz, open_nsrsbh, open_nsrmc, open_bsrq, open_skssqq, open_skssqz, open_bbssq) {
    //查看导入报此处js错误 注释掉
    //(function(){$w("lrbxxnbbForm").getFieldEl('h1l2').focus();}).delay(1);
    if (open_cfcjTyNsrxxForm != undefined) {
        $w("nsrxxForm4").initData(open_cfcjTyNsrxxForm);
    } else {
        $w("nsrxxForm4").setValue("nsrsbh", open_nsrsbh);
        $w("nsrxxForm4").setValue("nsrmc", open_nsrmc);
        $w("nsrxxForm4").setValue("bsrq", open_bsrq);
        $w("nsrxxForm4").setValue("skssqq", open_skssqq);
        $w("nsrxxForm4").setValue("skssqz", open_skssqz);
        $w("nsrxxForm4").setValue("bbssq", open_bbssq);
    }
    $w("lrbxxnbbForm").initData(open_xqykjzdlrbForm);
}
/**
 * 保存事件
 */
function savefb() {
    if (!$w("lrbxxnbbForm").validate("h3l3") || !$w("nsrxxForm4").validate()) {
        return;
    }

    var lrbxxForm = $w("lrbxxnbbForm").getSubmitData();
    var nsrxxForm = $w("nsrxxForm4").getSubmitData();
    parent.hxFb(lrbxxForm, nsrxxForm, '03', "", beSbdr);//将子页面信息缓存到主表页面
    parent.$w('zzsybnsrsb').setEnabled('save');
    parent.$w('zzsybnsrsb').setEnabled('import');
    parent.$w('zzsybnsrsb').setEnabled('reset');

}

/**
 * 取消
 */
function reset() {
    $w('lrbxxnbbForm').resetAll();
}

function formTest(e1) {
    var lrbxxnbbForm = $w("lrbxxnbbForm");
    var result = {};
    var a3 = lrbxxnbbForm.getValue("h3l2");
    var a4 = lrbxxnbbForm.getValue("h4l2");
    var a5 = lrbxxnbbForm.getValue("h5l2");
    var a6 = lrbxxnbbForm.getValue("h6l2");
    var a7 = lrbxxnbbForm.getValue("h7l2");
    var a8 = lrbxxnbbForm.getValue("h8l2");
    var a9 = lrbxxnbbForm.getValue("h9l2");
    var a10 = lrbxxnbbForm.getValue("h10l2");

    var toalValue = (a4).accAdd(a5).accAdd(a6).accAdd(a7).accAdd(a8).accAdd(a9).accAdd(a10).round(2);
    if (parseFloat(a3) < toalValue) {
        result["state"] = false;  //state值必须为false,否则不显示提示信息  
        result["msg"] = "3>=4+5+6+7+8+9+10"; //msg为错误的提示信息  
    }
    return result;//如果想显示错误提示信息被调用的函数最后必须返回对象 
}
function formTestb(e1) {
    var lrbxxnbbForm = $w("lrbxxnbbForm");
    var result = {};
    var b3 = lrbxxnbbForm.getValue("h3l3");
    var b4 = lrbxxnbbForm.getValue("h4l3");
    var b5 = lrbxxnbbForm.getValue("h5l3");
    var b6 = lrbxxnbbForm.getValue("h6l3");
    var b7 = lrbxxnbbForm.getValue("h7l3");
    var b8 = lrbxxnbbForm.getValue("h8l3");
    var b9 = lrbxxnbbForm.getValue("h9l3");
    var b10 = lrbxxnbbForm.getValue("h10l3");
    var toalValue = (b4).accAdd(b5).accAdd(b6).accAdd(b7).accAdd(b8).accAdd(b9).accAdd(b10).round(2);

    if (parseFloat(b3) < toalValue) {
        result["state"] = false;  //state值必须为false,否则不显示提示信息  
        result["msg"] = "3>=4+5+6+7+8+9+10"; //msg为错误的提示信息  
    }
    return result;//如果想显示错误提示信息被调用的函数最后必须返回对象 
}
function formTest2(e1) {
    var lrbxxnbbForm = $w("lrbxxnbbForm");
    var result = {};
    var a11 = lrbxxnbbForm.getValue("h11l3");
    var a12 = lrbxxnbbForm.getValue("h12l3");
    var a13 = lrbxxnbbForm.getValue("h13l3");
    var toalValue = (a12).accAdd(a13).round(2);
    if (parseFloat(a11) < toalValue) {
        result["state"] = false;  //state值必须为false,否则不显示提示信息  
        result["msg"] = "11>=12+13"; //msg为错误的提示信息  
    }
    return result;//如果想显示错误提示信息被调用的函数最后必须返回对象 
}
function formTestb2(e1) {
    var lrbxxnbbForm = $w("lrbxxnbbForm");
    var result = {};
    var b11 = lrbxxnbbForm.getValue("h11l3");
    var b12 = lrbxxnbbForm.getValue("h12l3");
    var b13 = lrbxxnbbForm.getValue("h13l3");
    var toalValue = (b12).accAdd(b13).round(2);
    if (parseFloat(b11) < toalValue) {
        result["state"] = false;  //state值必须为false,否则不显示提示信息  
        result["msg"] = "11>=12+13"; //msg为错误的提示信息  
    }
    return result;//如果想显示错误提示信息被调用的函数最后必须返回对象 
}
function formTest3(e1) {
    var lrbxxnbbForm = $w("lrbxxnbbForm");
    var result = {};
    var a14 = lrbxxnbbForm.getValue("h14l3");
    var a15 = lrbxxnbbForm.getValue("h15l3");
    var a16 = lrbxxnbbForm.getValue("h16l3");
    var a17 = lrbxxnbbForm.getValue("h17l3");
    var toalValue = (a15).accAdd(a16).accAdd(a17).round(2);
    if (parseFloat(a14) < toalValue) {
        result["state"] = false;  //state值必须为false,否则不显示提示信息  
        result["msg"] = "14>=15+16+17"; //msg为错误的提示信息  
    }
    return result;//如果想显示错误提示信息被调用的函数最后必须返回对象 
}
function formTestb3(e1) {
    var lrbxxnbbForm = $w("lrbxxnbbForm");
    var result = {};
    var b14 = lrbxxnbbForm.getValue("h14l3");
    var b15 = lrbxxnbbForm.getValue("h15l3");
    var b16 = lrbxxnbbForm.getValue("h16l3");
    var b17 = lrbxxnbbForm.getValue("h17l3");
    var toalValue = (b15).accAdd(b16).accAdd(b17).round(2);
    if (parseFloat(b14) < toalValue) {
        result["state"] = false;  //state值必须为false,否则不显示提示信息  
        result["msg"] = "14>=15+16+17"; //msg为错误的提示信息  
    }
    return result;//如果想显示错误提示信息被调用的函数最后必须返回对象 
}
function formTest4(e1) {
    var lrbxxnbbForm = $w("lrbxxnbbForm");
    var result = {};
    var a18 = lrbxxnbbForm.getValue("h18l3");
    var a19 = lrbxxnbbForm.getValue("h19l3");
    if (parseFloat(a18) < (parseFloat(a19))) {
        result["state"] = false;  //state值必须为false,否则不显示提示信息  
        result["msg"] = "18>=19"; //msg为错误的提示信息  
    }
    return result;//如果想显示错误提示信息被调用的函数最后必须返回对象 
}
function formTestb4(e1) {
    var lrbxxnbbForm = $w("lrbxxnbbForm");
    var result = {};
    var b17 = lrbxxnbbForm.getValue("h17l3");
    var b18 = lrbxxnbbForm.getValue("h18l3");
    if (parseFloat(b17) < (parseFloat(b18))) {
        result["state"] = false;  //state值必须为false,否则不显示提示信息  
        result["msg"] = "17>=18"; //msg为错误的提示信息  
    }
    return result;//如果想显示错误提示信息被调用的函数最后必须返回对象 
}
function formTest5(e1) {
    var lrbxxnbbForm = $w("lrbxxnbbForm");
    var result = {};
    var a24 = lrbxxnbbForm.getValue("h24l3");
    var a25 = lrbxxnbbForm.getValue("h25l3");
    var a26 = lrbxxnbbForm.getValue("h26l3");
    var a27 = lrbxxnbbForm.getValue("h27l3");
    var a28 = lrbxxnbbForm.getValue("h28l3");
    var a29 = lrbxxnbbForm.getValue("h29l3");

    var toalValue = (a25).accAdd(a26).accAdd(a27).accAdd(a28).accAdd(a29).round(2);
    if (parseFloat(a24) < toalValue) {
        result["state"] = false;  //state值必须为false,否则不显示提示信息  
        result["msg"] = "24>=25+26+27+28+29"; //msg为错误的提示信息  
    }
    return result;//如果想显示错误提示信息被调用的函数最后必须返回对象 
}
function formTestb5(e1) {
    var lrbxxnbbForm = $w("lrbxxnbbForm");
    var result = {};
    var b24 = lrbxxnbbForm.getValue("h24l3");
    var b25 = lrbxxnbbForm.getValue("h25l3");
    var b26 = lrbxxnbbForm.getValue("h26l3");
    var b27 = lrbxxnbbForm.getValue("h27l3");
    var b28 = lrbxxnbbForm.getValue("h28l3");
    var b29 = lrbxxnbbForm.getValue("h29l3");

    var toalValue = (b25).accAdd(b26).accAdd(b27).accAdd(b28).accAdd(b29).round(2);
    if (parseFloat(b24) < toalValue) {
        result["state"] = false;  //state值必须为false,否则不显示提示信息  
        result["msg"] = "24>=25+26+27+28+29"; //msg为错误的提示信息  
    }
    return result;//如果想显示错误提示信息被调用的函数最后必须返回对象 
}

function formTestb6(e1) {
    var lrbxxnbbForm = $w("lrbxxnbbForm");
    var result = {};
    var a11 = lrbxxnbbForm.getValue("h22l3");
    var a12 = lrbxxnbbForm.getValue("h23l3");
    if (parseFloat(a11) < parseFloat(a12)) {
        result["state"] = false;  //state值必须为false,否则不显示提示信息  
        result["msg"] = "22>=23"; //msg为错误的提示信息  
    }
    return result;//如果想显示错误提示信息被调用的函数最后必须返回对象 
}

//附表变量
function setFbdymbuuid() {
    parent.dymbuuid = "sb104_lrbnbb";
    parent.hxdyForPrint = "N";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "N";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"75%"}';
    parent.printTitle = "小企业会计准则利润表年报";
    parent.printFileType = "excel";
}
function printhtm() {
    gyTaxPrintWordOrExcel();
}