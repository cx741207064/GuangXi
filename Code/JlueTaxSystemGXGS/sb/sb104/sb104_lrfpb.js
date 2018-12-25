var beSbdr = false;
var gs_gjj = [
	"{lrfpbForm_h13l2}={lrfpbForm_h1l2}+{lrfpbForm_h2l2}+{lrfpbForm_h3l2}-{lrfpbForm_h5l2}" +
		"-{lrfpbForm_h6l2}-{lrfpbForm_h7l2}-{lrfpbForm_h8l2}-{lrfpbForm_h9l2}" +
		"-{lrfpbForm_h10l2}-{lrfpbForm_h12l2}",
	"{lrfpbForm_h13l3}={lrfpbForm_h1l3}+{lrfpbForm_h2l3}+{lrfpbForm_h3l3}-{lrfpbForm_h5l3}" +
		"-{lrfpbForm_h6l3}-{lrfpbForm_h7l3}-{lrfpbForm_h8l3}-{lrfpbForm_h9l3}" +
		"-{lrfpbForm_h10l3}-{lrfpbForm_h12l3}"
];

/**
 * 初始化处理
 * @param {Object} resData
 */
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled('bcBtn');
        $w("qykjzdInner").setDisabled('qxBtn');
        $w("lrfpbForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
    }
    var resDataXMLForSBDR = parent.cjhxfbLrfpb;
    parent.setHx("08");
    //查看导入报此处js错误 注释掉
    //	if(parent.cxbj == 'N'){
    // 	(function(){$w("lrfpbForm").getFieldEl('h1l2').focus();}).delay(1);
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
function setCfcjInitValue(snlrfpbList, cjhxfbLrfpb, nsrsbh, nsrmc, bsrq, skssqq, skssqz) {
    $w("nsrxxForm").setValue("nsrsbh", nsrsbh);
    $w("nsrxxForm").setValue("nsrmc", nsrmc);
    $w("nsrxxForm").setValue("bsrq", bsrq);
    $w("nsrxxForm").setValue("skssqq", skssqq);
    $w("nsrxxForm").setValue("skssqz", skssqz);
    if (cjhxfbLrfpb != null) {
        $w("lrfpbForm").initData(cjhxfbLrfpb);
    }
    initLrfpbSnje(snlrfpbList);
}
/**
 * 初始化
 */
function setInitValue(snlrfpbList, nsrsbh, nsrmc, bsrq, skssqq, skssqz) {
    $w("nsrxxForm").setValue("nsrsbh", nsrsbh);
    $w("nsrxxForm").setValue("nsrmc", nsrmc);
    $w("nsrxxForm").setValue("bsrq", bsrq);
    $w("nsrxxForm").setValue("skssqq", skssqq);
    $w("nsrxxForm").setValue("skssqz", skssqz);
    initLrfpbSnje(snlrfpbList);
}
/**
 * 初始化上年金额
 */
function initLrfpbSnje(snlrfpbList) {
    //	if(snlrfpbList != null && snlrfpbList != ''){
    //		for(var i = 0; i < snlrfpbList.trs.length; i++){
    //			var ewbhxh = snlrfpbList.trs[i].tds.ewbhxh.value;
    //			var snje = snlrfpbList.trs[i].tds.bnje.value;
    //			$w('lrfpbForm').setValue("h"+ewbhxh+"l3", snje);
    //		}
    //	}
}
/**
 * 重置
 * */
function reset() {
    $w('lrfpbForm').resetAll();
}

/**
 * 保存
 * */
function savefb() {
    if (!$w("lrfpbForm").validate()) {
        return;
    }
    var lrfpbForm = $w("lrfpbForm").getSubmitData();
    parent.hxFb(lrfpbForm, null, '08', "", beSbdr);//将子页面信息缓存到主表页面
    parent.$w('zzsybnsrsb').setEnabled('save');
    parent.$w('zzsybnsrsb').setEnabled('import');
    parent.$w('zzsybnsrsb').setEnabled('reset');
}
//附表变量
function setFbdymbuuid() {
    parent.dymbuuid = "sb104_lrfpb";
    parent.hxdyForPrint = "Y";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "N";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"100%"}';
    parent.printTitle = "利润分配表";
    parent.printFileType = "excel";
}