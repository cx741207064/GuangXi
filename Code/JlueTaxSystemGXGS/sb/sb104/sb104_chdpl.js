var beSbdr = false;
var gs_gjj = [
	"{chdplForm_h6l2}={chdplForm_h1l2}+{chdplForm_h2l2}+{chdplForm_h3l2}+{chdplForm_h4l2}" +
		"+{chdplForm_h5l2}",
	"{chdplForm_h6l3}={chdplForm_h1l3}+{chdplForm_h2l3}+{chdplForm_h3l3}+{chdplForm_h4l3}" +
		"+{chdplForm_h5l3}",
	"{chdplForm_h6l4}={chdplForm_h1l4}+{chdplForm_h2l4}+{chdplForm_h3l4}+{chdplForm_h4l4}" +
		"+{chdplForm_h5l4}"
];

/**
 * 初始化处理
 * @param {Object} resData
 */
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled('bcBtn');
        $w("qykjzdInner").setDisabled('qxBtn');
        $w("chdplForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
    }


    var resDataXMLForSBDR = parent.hxfbChdpl;// 申报错误更正返回的resData
    //	if (parent.beSbdr && resDataXMLForSBDR != null && resDataXMLForSBDR != undefined && "" != resDataXMLForSBDR) {
    //		$w("chdplForm").initData(resDataXMLForSBDR);
    //	}
    parent.setHx("05");

    //查看导入报此处js错误 注释掉
    //	if(parent.cxbj == 'N'){
    //       (function(){$w("chdplForm").getFieldEl('h1l2').focus();}).delay(1);
    //	}
    parent.$w('zzsybnsrsb').setDisabled('save');
    parent.$w('zzsybnsrsb').setDisabled('import');
    parent.$w('zzsybnsrsb').setDisabled('reset');
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
function setCfcjInitValue(cjhxfbChdpl, nsrsbh, nsrmc, bsrq, skssqq, skssqz) {
    $w("nsrxxForm6").setValue("nsrsbh", nsrsbh);
    $w("nsrxxForm6").setValue("nsrmc", nsrmc);
    $w("nsrxxForm6").setValue("bsrq", bsrq);
    $w("nsrxxForm6").setValue("skssqq", skssqq);
    $w("nsrxxForm6").setValue("skssqz", skssqz);
    if (cjhxfbChdpl != null) {
        $w("chdplForm").initData(cjhxfbChdpl);
    }
}
/**
 * 初始化
 */
function setInitValue(nsrsbh, nsrmc, bsrq, skssqq, skssqz) {
    $w("nsrxxForm6").setValue("nsrsbh", nsrsbh);
    $w("nsrxxForm6").setValue("nsrmc", nsrmc);
    $w("nsrxxForm6").setValue("bsrq", bsrq);
    $w("nsrxxForm6").setValue("skssqq", skssqq);
    $w("nsrxxForm6").setValue("skssqz", skssqz);
}

/**
 * 重置
 * */
function reset() {
    $w('chdplForm').resetAll();
}

/**
 * 保存
 * */
function savefb() {
    if (!$w("chdplForm").validate()) {
        return;
    }
    var chdplForm = $w("chdplForm").getSubmitData();
    parent.hxFb(chdplForm, null, '05', "", beSbdr);//将子页面信息缓存到主表页面
    parent.$w('zzsybnsrsb').setEnabled('save');
    parent.$w('zzsybnsrsb').setEnabled('import');
    parent.$w('zzsybnsrsb').setEnabled('reset');
}
//附表变量
function setFbdymbuuid() {
    parent.dymbuuid = "sb104_chdpl";
    parent.hxdyForPrint = "Y";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "N";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"100%"}';
    parent.printTitle = "sb104_chdpl";
    parent.printFileType = "excel";
}
function printhtm() {
    gyTaxPrintWordOrExcel();
}