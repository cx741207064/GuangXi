var beSbdr = false;
var gs_gjj = [
	"{gdzcdplForm_h8l2}={gdzcdplForm_h1l2}+{gdzcdplForm_h2l2}+{gdzcdplForm_h3l2}+{gdzcdplForm_h4l2}" +
		"+{gdzcdplForm_h5l2}+{gdzcdplForm_h6l2}+{gdzcdplForm_h7l2}",
	"{gdzcdplForm_h8l3}={gdzcdplForm_h1l3}+{gdzcdplForm_h2l3}+{gdzcdplForm_h3l3}+{gdzcdplForm_h4l3}" +
		"+{gdzcdplForm_h5l3}+{gdzcdplForm_h6l3}+{gdzcdplForm_h7l3}",
	"{gdzcdplForm_h8l4}={gdzcdplForm_h1l4}+{gdzcdplForm_h2l4}+{gdzcdplForm_h3l4}+{gdzcdplForm_h4l4}" +
		"+{gdzcdplForm_h5l4}+{gdzcdplForm_h6l4}+{gdzcdplForm_h7l4}"
];
/**
 * 初始化处理
 * @param {Object} resData
 */
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled('bcBtn');
        $w("qykjzdInner").setDisabled('qxBtn');
        $w("gdzcdplForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
    }
    var resDataXMLForSBDR = parent.hxfbGdzcdpl;
    parent.setHx("07");
    //查看导入报此处js错误 注释掉
    //	if(parent.cxbj == 'N'){
    // 	(function(){$w("gdzcdplForm").getFieldEl('h1l2').focus();}).delay(1);
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
function setCfcjInitValue(cjhxfbGdzcdpl, nsrsbh, nsrmc, bsrq, skssqq, skssqz) {
    $w("nsrxxForm").setValue("nsrsbh", nsrsbh);
    $w("nsrxxForm").setValue("nsrmc", nsrmc);
    $w("nsrxxForm").setValue("bsrq", bsrq);
    $w("nsrxxForm").setValue("skssqq", skssqq);
    $w("nsrxxForm").setValue("skssqz", skssqz);
    if (cjhxfbGdzcdpl != null) {
        $w("gdzcdplForm").initData(cjhxfbGdzcdpl);
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
    $w('gdzcdplForm').resetAll();
}

/**
 * 保存
 * */
function savefb() {
    if (!$w("gdzcdplForm").validate()) {
        return;
    }
    var gdzcdplForm = $w("gdzcdplForm").getSubmitData();
    parent.hxFb(gdzcdplForm, null, '07', "", beSbdr);//将子页面信息缓存到主表页面
    parent.$w('zzsybnsrsb').setEnabled('save');
    parent.$w('zzsybnsrsb').setEnabled('import');
    parent.$w('zzsybnsrsb').setEnabled('reset');
}
//附表变量
function setFbdymbuuid() {
    parent.dymbuuid = "sb104_gdzcdpl";
    parent.hxdyForPrint = "N";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "N";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"90%"}';
    parent.printTitle = "固定资产的披露(适用执行小企业会计准则的企业) ";
    parent.printFileType = "excel";
}
function printhtm() {
    gyTaxPrintWordOrExcel();
}