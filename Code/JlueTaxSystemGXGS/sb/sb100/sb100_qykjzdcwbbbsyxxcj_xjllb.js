var gs_gjj = [
	"{xjllbxxForm_h4l2}={xjllbxxForm_h1l2}+{xjllbxxForm_h2l2}+{xjllbxxForm_h3l2}",
	"{xjllbxxForm_h9l2}={xjllbxxForm_h5l2}+{xjllbxxForm_h6l2}+{xjllbxxForm_h7l2}+{xjllbxxForm_h8l2}",
	"{xjllbxxForm_h10l2}={xjllbxxForm_h4l2}-{xjllbxxForm_h9l2}",
	"{xjllbxxForm_h15l2}={xjllbxxForm_h11l2}+{xjllbxxForm_h12l2}+{xjllbxxForm_h13l2}+{xjllbxxForm_h14l2}",
	"{xjllbxxForm_h19l2}={xjllbxxForm_h16l2}+{xjllbxxForm_h17l2}+{xjllbxxForm_h18l2}",
	"{xjllbxxForm_h20l2}={xjllbxxForm_h15l2}-{xjllbxxForm_h19l2}",
	"{xjllbxxForm_h24l2}={xjllbxxForm_h21l2}+{xjllbxxForm_h22l2}+{xjllbxxForm_h23l2}",
	"{xjllbxxForm_h28l2}={xjllbxxForm_h25l2}+{xjllbxxForm_h26l2}+{xjllbxxForm_h27l2}",
	"{xjllbxxForm_h29l2}={xjllbxxForm_h24l2}-{xjllbxxForm_h28l2}",
	"{xjllbxxForm_h31l2}={xjllbxxForm_h10l2}+{xjllbxxForm_h20l2}+{xjllbxxForm_h29l2}+{xjllbxxForm_h30l2}",
	"{xjllbxxForm_h48l2}={xjllbxxForm_h32l2}+{xjllbxxForm_h33l2}+{xjllbxxForm_h34l2}+{xjllbxxForm_h35l2}+" +
					"{xjllbxxForm_h36l2}+{xjllbxxForm_h37l2}+{xjllbxxForm_h38l2}+{xjllbxxForm_h39l2}+" +
					"{xjllbxxForm_h40l2}+{xjllbxxForm_h41l2}+{xjllbxxForm_h42l2}+{xjllbxxForm_h43l2}+" +
					"{xjllbxxForm_h44l2}+{xjllbxxForm_h45l2}+{xjllbxxForm_h46l2}+{xjllbxxForm_h47l2}",
	"{xjllbxxForm_h56l2}={xjllbxxForm_h52l2}-{xjllbxxForm_h53l2}+{xjllbxxForm_h54l2}-{xjllbxxForm_h55l2}"
];
gs_caculate = thgs(gs_gjj);
var xjllbxxForm;
var beSbdr = false;
var sb100_resDataXMLForSBDR = null;//申报导入标志
/**
 * 初始化处理
 * @param {Object} resData
 */
function initV(resData) {

    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled("bcBtn");
        $w("qykjzdInner").setDisabled("qxBtn");
        $w("xjllbxxForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("nsrxxForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
    }
    sb100_resDataXMLForSBDR = parent.fbxjllbxx;// 申报错误更正返回的resData
    if (sb100_resDataXMLForSBDR != null && sb100_resDataXMLForSBDR != undefined && "" != sb100_resDataXMLForSBDR) {
        $w("xjllbxxForm").initData(sb100_resDataXMLForSBDR);
    }
    parent.setHx("02", window);
    xjllbxxForm = $w("xjllbxxForm");
    nsrxxForm = $w("nsrxxForm");
    nsrxxForm.disable(['nsrsbh']);
    parent.$w('zzsybnsrsb').setDisabled('save');
    parent.$w('zzsybnsrsb').setDisabled('import');
    parent.$w('zzsybnsrsb').setDisabled('reset');
    //查看导入报此处js错误 注释掉
    //	if(parent.cxbj == 'Y'){
    //	(function(){xjllbxxForm.getFieldEl('h1l2').focus();}).delay(1);
    //	}
    if (parent.beSbdr && beSbdr == false) {
        parent.$w('zzsybnsrsb').setEnabled('save');
        parent.$w('zzsybnsrsb').setEnabled('import');
        parent.$w('zzsybnsrsb').setEnabled('reset');
        beSbdr = true;
        if (sb100_resDataXMLForSBDR != null && sb100_resDataXMLForSBDR != undefined
				&& "" != sb100_resDataXMLForSBDR) {
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
function setInitValue(open_nsrsbh, open_nsrmc, open_bsrq, open_skssqq, open_skssqz) {
    $w("nsrxxForm").setValue("nsrsbh", open_nsrsbh);
    $w("nsrxxForm").setValue("nsrmc", open_nsrmc);
    $w("nsrxxForm").setValue("bsrq", open_bsrq);
    $w("nsrxxForm").setValue("skssqq", open_skssqq);
    $w("nsrxxForm").setValue("skssqz", open_skssqz);
}
function setCfcjInitValue(open_cfcjTyNsrxxForm, open_qykjzdXjllbForm, open_cfcjbz) {
    $w("xjllbxxForm").initData(open_qykjzdXjllbForm);
    $w("nsrxxForm").initData(open_cfcjTyNsrxxForm);
    cfcjbz = open_cfcjbz;
}
/**
 * 现金流量表校验
 * 获取上期金额是否等于上一年
 * 现金流量表的本期金额
 * 
 */
function checkLrblssjjy_2() {
    if (false) {
        swordAlert("上期金额(或年初数)不等于上年报表同期金额!");
        return false;
    }
    return true;
}
/**
 * 保存前验证
 */
function savefb() {
    var nsrxxForm = $w('nsrxxForm');
    if (!nsrxxForm.validate()) {
        return;
    }
    var xjllbxxForm = $w("xjllbxxForm");
    if (!xjllbxxForm.validate()) {
        return;
    }
    parent.hxFb(xjllbxxForm, '02', beSbdr);//将子页面信息缓存到主表页面
    parent.$w('zzsybnsrsb').setEnabled('save');
    parent.$w('zzsybnsrsb').setEnabled('import');
    parent.$w('zzsybnsrsb').setEnabled('reset');
}
/**
 * 取消
 */
function reset() {
    $w('xjllbxxForm').resetAll();
}
/**
 * 附表打印函数
 * @return
 */
function setFbdymbuuid() {
    parent.dymbuuid = "sb100_qykjzdcwbbbsyxxcj_xjllb";
    parent.hxdyForPrint = "N";
    parent.printTitle = "现金流量表(适用执行企业会计制度的企业)";
    parent.zzlx = "A4";
    parent.fykg = "Y";
    parent.caculateGridHJFlag = "N";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"100%"}';
}
