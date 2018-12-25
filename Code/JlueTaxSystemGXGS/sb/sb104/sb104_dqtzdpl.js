var beSbdr = false;
var gs_gjj = [
	"{dqtzdplForm_h5l2}={dqtzdplForm_h1l2}+{dqtzdplForm_h2l2}+{dqtzdplForm_h3l2}+{dqtzdplForm_h4l2}",
	"{dqtzdplForm_h5l3}={dqtzdplForm_h1l3}+{dqtzdplForm_h2l3}+{dqtzdplForm_h3l3}+{dqtzdplForm_h4l3}",
	"{dqtzdplForm_h5l4}={dqtzdplForm_h1l4}+{dqtzdplForm_h2l4}+{dqtzdplForm_h3l4}+{dqtzdplForm_h4l4}"
];

/**
 * 初始化处理
 * @param {Object} resData
 */
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled('bcBtn');
        $w("qykjzdInner").setDisabled('qxBtn');
        $w("dqtzdplForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
    }

    var resDataXMLForSBDR = parent.hxfbDqtzdpl;// 申报错误更正返回的resData
    //	if (parent.beSbdr && resDataXMLForSBDR != null && resDataXMLForSBDR != undefined && "" != resDataXMLForSBDR) {
    //		$w("dqtzdplForm").initData(resDataXMLForSBDR);
    //	}
    parent.setHx("06");

    //查看导入报此处js错误 注释掉
    //	if(parent.cxbj == 'N'){
    // 	(function(){$w("dqtzdplForm").getFieldEl('h1l2').focus();}).delay(1);
    //	}
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

/**
 * 重复采集
 */
function setCfcjInitValue(cjhxfbDqtzdpl, nsrsbh, nsrmc, bsrq, skssqq, skssqz) {
    $w("nsrxxForm").setValue("nsrsbh", nsrsbh);
    $w("nsrxxForm").setValue("nsrmc", nsrmc);
    $w("nsrxxForm").setValue("bsrq", bsrq);
    $w("nsrxxForm").setValue("skssqq", skssqq);
    $w("nsrxxForm").setValue("skssqz", skssqz);
    if (cjhxfbDqtzdpl != null) {
        $w("dqtzdplForm").initData(cjhxfbDqtzdpl);
    }
}
/**
 * 初始化
 */
function setInitValue(nsrsbh, nsrmc, bsrq, skssqq, skssqz) {
    $w("nsrxxForm").setValue("nsrsbh", nsrsbh);
    $w("nsrxxForm").setValue("nsrmc", nsrmc);
    $w("nsrxxForm").setValue("bsrq", bsrq);
    $w("nsrxxForm").setValue("skssqq", skssqq);
    $w("nsrxxForm").setValue("skssqz", skssqz);
}

/**
 * 重置
 * */
function reset() {
    $w('dqtzdplForm').resetAll();
}

/**
 * 保存
 * */
function savefb() {
    if (!$w("dqtzdplForm").validate()) {
        return;
    }
    var dqtzdplForm = $w("dqtzdplForm").getSubmitData();
    parent.hxFb(dqtzdplForm, null, '06', "", beSbdr);//将子页面信息缓存到主表页面
    parent.$w('zzsybnsrsb').setEnabled('save');
    parent.$w('zzsybnsrsb').setEnabled('import');
    parent.$w('zzsybnsrsb').setEnabled('reset');
}
//附表变量
function setFbdymbuuid() {
    parent.dymbuuid = "sb104_dqtzdpl";
    parent.hxdyForPrint = "N";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "N";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"100%"}';
    parent.printTitle = "短期投资的披露(适用执行小企业会计准则的企业)";
    parent.printFileType = "excel";
}
function printhtm() {
    gyTaxPrintWordOrExcel();
}