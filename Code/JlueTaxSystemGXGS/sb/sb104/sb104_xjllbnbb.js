var beSbdr = false;
var gs_gjj = [
	"{xjllbxxnbbForm_h7l2}={xjllbxxnbbForm_h1l2}+{xjllbxxnbbForm_h2l2}-{xjllbxxnbbForm_h3l2}-{xjllbxxnbbForm_h4l2}-" +
					"{xjllbxxnbbForm_h5l2}-{xjllbxxnbbForm_h6l2}",
	"{xjllbxxnbbForm_h13l2}={xjllbxxnbbForm_h8l2}+{xjllbxxnbbForm_h9l2}+{xjllbxxnbbForm_h10l2}-{xjllbxxnbbForm_h11l2}-" +
					"{xjllbxxnbbForm_h12l2}",
	"{xjllbxxnbbForm_h19l2}={xjllbxxnbbForm_h14l2}+{xjllbxxnbbForm_h15l2}-{xjllbxxnbbForm_h16l2}-{xjllbxxnbbForm_h17l2}-" +
					"{xjllbxxnbbForm_h18l2}",
	"{xjllbxxnbbForm_h20l2}={xjllbxxnbbForm_h7l2}+{xjllbxxnbbForm_h13l2}+{xjllbxxnbbForm_h19l2}",
	"{xjllbxxnbbForm_h22l2}={xjllbxxnbbForm_h20l2}+{xjllbxxnbbForm_h21l2}",

	"{xjllbxxnbbForm_h7l3}={xjllbxxnbbForm_h1l3}+{xjllbxxnbbForm_h2l3}-{xjllbxxnbbForm_h3l3}-{xjllbxxnbbForm_h4l3}-" +
					"{xjllbxxnbbForm_h5l3}-{xjllbxxnbbForm_h6l3}",
	"{xjllbxxnbbForm_h13l3}={xjllbxxnbbForm_h8l3}+{xjllbxxnbbForm_h9l3}+{xjllbxxnbbForm_h10l3}-{xjllbxxnbbForm_h11l3}-" +
					"{xjllbxxnbbForm_h12l3}",
	"{xjllbxxnbbForm_h19l3}={xjllbxxnbbForm_h14l3}+{xjllbxxnbbForm_h15l3}-{xjllbxxnbbForm_h16l3}-{xjllbxxnbbForm_h17l3}-" +
					"{xjllbxxnbbForm_h18l3}",
	"{xjllbxxnbbForm_h20l3}={xjllbxxnbbForm_h7l3}+{xjllbxxnbbForm_h13l3}+{xjllbxxnbbForm_h19l3}",
	"{xjllbxxnbbForm_h22l3}={xjllbxxnbbForm_h20l3}+{xjllbxxnbbForm_h21l3}"
];
gs_caculate = thgs(gs_gjj);
var sqxjllbxxnbbForm;
/**
 * 初始化处理
 * @param {Object} resData
 */
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled('bcBtn');
        $w("qykjzdInner").setDisabled('qxBtn');
        $w("xjllbxxnbbForm").disable();   //此段需求看自己用附表FROM表单名置灰。
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

    var resDataXMLForSBDR = parent.cjhxfbxjllbxxNbb;
    parent.setHx("04");
    //查看导入报此处js错误 注释掉
    //	if(parent.cxbj == 'N'){
    // 	(function(){$w("xjllbxxnbbForm").getFieldEl('h1l2').focus();}).delay(1);
    //	}
    //查询现金流量表本年累计数
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

function sqzcfzbxxOnSuccess(req, resData) {
    sqxjllbxxnbbForm = pc.getResData("gzxjllbxxnbbForm", resData);
    //	$w("xjllbxxnbbForm").initData(sqxjllbxxnbbForm);
    for (var i = 1; i <= 22; i++) {
        $w("xjllbxxnbbForm").setValue("h" + i + "l3", sqxjllbxxnbbForm.data["h" + i + "l2"].value.round(2));
    }
}

//查询现金流量表本年累计数
function queryybcfdzSuccess(req, resData) {
    var sqcfdz = resData.getAttr("sqcfdz");
    var newSubmit = new SwordSubmit();
    newSubmit.pushData("cfdz", sqcfdz);
    newSubmit.setCtrl(parent.Ctrl + "_queryXmlByzlbsuuid");
    newSubmit.setFunction("onSuccess", "querySqsjSuccess");
    if (sqcfdz != null && sqcfdz != undefined && sqcfdz != "") {
        newSubmit.submit();
    } else {
        //swordAlert("小企业会计准则现金流量表十二月份月报未采集!");
        return;
    }
}

function querySqsjSuccess(req, resData) {
    var xjllbxxnbbForm = pc.getResData("gzxjllbxxForm", resData);
    var bz = parent.sfcfcj;
    if (xjllbxxnbbForm != null && xjllbxxnbbForm != "" && xjllbxxnbbForm != undefined/*&&bz!="Y"*/) {
        for (var i = 1; i <= 22; i++) {
            $w("xjllbxxnbbForm").setValue("h" + i + "l2", xjllbxxnbbForm.data["h" + i + "l2"].value.round(2));
        }
    } else {
        swordAlert("小企业会计准则现金流量表月报未采集!");
        return;
    }
}

var cfcjbz;
function setInitValue(open_nsrsbh, open_nsrmc, open_bsrq, open_skssqq, open_skssqz) {
    $w("nsrxxForm5").setValue("nsrsbh", open_nsrsbh);
    $w("nsrxxForm5").setValue("nsrmc", open_nsrmc);
    $w("nsrxxForm5").setValue("bsrq", open_bsrq);
    $w("nsrxxForm5").setValue("skssqq", open_skssqq);
    $w("nsrxxForm5").setValue("skssqz", open_skssqz);
}
function setCfcjInitValue(open_cfcjTyNsrxxForm, open_xqykjzdXjllbForm, open_cfcjbz, open_nsrsbh, open_nsrmc, open_bsrq, open_skssqq, open_skssqz) {
    if (open_cfcjTyNsrxxForm != undefined) {
        $w("nsrxxForm5").initData(open_cfcjTyNsrxxForm);
    } else {
        $w("nsrxxForm5").setValue("nsrsbh", open_nsrsbh);
        $w("nsrxxForm5").setValue("nsrmc", open_nsrmc);
        $w("nsrxxForm5").setValue("bsrq", open_bsrq);
        $w("nsrxxForm5").setValue("skssqq", open_skssqq);
        $w("nsrxxForm5").setValue("skssqz", open_skssqz);
    }
    $w("xjllbxxnbbForm").initData(open_xqykjzdXjllbForm);
    cfcjbz = open_cfcjbz;
}
/**
 * 保存前验证
 */
function savefb() {

    //	if ($w("xjllbxxnbbForm").validate() && $w("nsrxxForm5").validate()) {
    //	}else{
    //		return;
    //	}

    var xjllbxxnbbForm = $w("xjllbxxnbbForm").getSubmitData();
    var nsrxxForm = $w("nsrxxForm5").getSubmitData();
    parent.hxFb(xjllbxxnbbForm, nsrxxForm, '04', "", beSbdr);//将子页面信息缓存到主表页面
    parent.$w('zzsybnsrsb').setEnabled('save');
    parent.$w('zzsybnsrsb').setEnabled('import');
    parent.$w('zzsybnsrsb').setEnabled('reset');
}
/**
 * 取消
 */
function reset() {
    $w('xjllbxxnbbForm').resetAll();
}
//附表变量
function setFbdymbuuid() {
    parent.dymbuuid = "sb104_xjllbnbb";
    parent.hxdyForPrint = "N";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "N";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"89%"}';
    parent.printTitle = "小企业会计准则现金流量表年报 ";
    parent.printFileType = "excel";
}
function printhtm() {
    gyTaxPrintWordOrExcel();
}