var beSbdr = false;
var gs_gjj = [
	"{yfzgxcmxbForm_h11l2}={yfzgxcmxbForm_h1l2}+{yfzgxcmxbForm_h2l2}+{yfzgxcmxbForm_h3l2}+{yfzgxcmxbForm_h4l2}" +
		"+{yfzgxcmxbForm_h5l2}+{yfzgxcmxbForm_h6l2}+{yfzgxcmxbForm_h7l2}+{yfzgxcmxbForm_h8l2}" +
		"+{yfzgxcmxbForm_h9l2}+{yfzgxcmxbForm_h10l2}",
	"{yfzgxcmxbForm_h11l3}={yfzgxcmxbForm_h1l3}+{yfzgxcmxbForm_h2l3}+{yfzgxcmxbForm_h3l3}+{yfzgxcmxbForm_h4l3}" +
		"+{yfzgxcmxbForm_h5l3}+{yfzgxcmxbForm_h6l3}+{yfzgxcmxbForm_h7l3}+{yfzgxcmxbForm_h8l3}" +
		"+{yfzgxcmxbForm_h9l3}+{yfzgxcmxbForm_h10l3}"
];
/**
 * 初始化处理
 * @param {Object} resData
 */
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled('bcBtn');
        $w("qykjzdInner").setDisabled('qxBtn');
        $w("yfzgxcmxbForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
    }
    var resDataXMLForSBDR = parent.cjhxfbYfzgxcmxb;
    parent.setHx("09");
    //查看导入报此处js错误 注释掉
    //	if(parent.cxbj == 'N'){
    // 	(function(){$w("yfzgxcmxbForm").getFieldEl('h1l2').focus();}).delay(1);
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
function setCfcjInitValue(cjhxfbYfzgxcmxb, nsrsbh, nsrmc, bsrq, skssqq, skssqz) {
    $w("nsrxxForm").setValue("nsrsbh", nsrsbh);
    $w("nsrxxForm").setValue("nsrmc", nsrmc);
    $w("nsrxxForm").setValue("bsrq", bsrq);
    $w("nsrxxForm").setValue("skssqq", skssqq);
    $w("nsrxxForm").setValue("skssqz", skssqz);
    if (cjhxfbYfzgxcmxb != null) {
        $w("yfzgxcmxbForm").initData(cjhxfbYfzgxcmxb);
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
    $w('yfzgxcmxbForm').resetAll();
}

/**
 * 保存
 * */
function savefb() {

    if (!$w("yfzgxcmxbForm").validate()) {
        return;
    }

    var yfzgxcmxbForm = $w("yfzgxcmxbForm").getSubmitData();
    parent.hxFb(yfzgxcmxbForm, null, '09', "", beSbdr);//将子页面信息缓存到主表页面
    parent.$w('zzsybnsrsb').setEnabled('save');
    parent.$w('zzsybnsrsb').setEnabled('import');
    parent.$w('zzsybnsrsb').setEnabled('reset');
}
//附表变量
function setFbdymbuuid() {
    parent.dymbuuid = "sb104_yfzgxcmxb";
    parent.hxdyForPrint = "Y";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "N";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"100%"}';
    parent.printTitle = "应付职工薪酬明细表（适用执行小企业会计准则的企业）";
    parent.printFileType = "excel";
}
function printhtm() {
    gyTaxPrintWordOrExcel();
}