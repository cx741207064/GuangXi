var gs_gjj = [
	"{qybxxForm_h8l2}={qybxxForm_h1l2}+{qybxxForm_h2l2}-{qybxxForm_h7l2}",
	"{qybxxForm_h20l2}={qybxxForm_h9l2}+{qybxxForm_h10l2}-{qybxxForm_h18l2}",
	"{qybxxForm_h34l2}={qybxxForm_h21l2}+{qybxxForm_h22l2}-{qybxxForm_h29l2}",
	"{qybxxForm_h43l2}={qybxxForm_h38l2}+{qybxxForm_h39l2}-{qybxxForm_h41l2}",
	"{qybxxForm_h47l2}={qybxxForm_h44l2}+{qybxxForm_h45l2}-{qybxxForm_h46l2}",

	"{qybxxForm_h8l3}={qybxxForm_h1l3}+{qybxxForm_h2l3}-{qybxxForm_h7l3}",
	"{qybxxForm_h20l3}={qybxxForm_h9l3}+{qybxxForm_h10l3}-{qybxxForm_h18l3}",
	"{qybxxForm_h34l3}={qybxxForm_h21l3}+{qybxxForm_h22l3}-{qybxxForm_h29l3}",
	"{qybxxForm_h43l3}={qybxxForm_h38l3}+{qybxxForm_h39l3}-{qybxxForm_h41l3}",
	"{qybxxForm_h47l3}={qybxxForm_h44l3}+{qybxxForm_h45l3}-{qybxxForm_h46l3}"
];
gs_caculate = thgs(gs_gjj);

var sfdycbs;//判断是否第一次报送财务报表
var bszldm;//报送资料代码
var sncjbz;//采集标记
var sfkybc = false;
var djxh;

var sqa8, sqa20, sqa34, sqa43, sqa47;
var syzqyxx_Data = null;
var cjbz;
var qybCjcgbj = 'N';//权益表成功采集标记
var qybxxForm;
var sqsyzqylist;//上期所有者权益表存储本年数
var sqqms1; //上年资产负债表五个期末数，用于监控
var sqqms2;
var sqqms3;
var sqqms4;
var sqqms5;
var sb100_resDataXMLForSBDR = null;//申报导入标志
var beSbdr = false;
/**
 * 初始化处理
 * @param {Object} resData
 */
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled("bcBtn");
        $w("qykjzdInner").setDisabled("qxBtn");
        $w("qybxxForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("nsrxxForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
    }
    sb100_resDataXMLForSBDR = parent.fbsyzqyxx;// 申报错误更正返回的resData
    //qybxxForm = pc.getResData("qybxxForm",JSON.encode(sb100_resDataXMLForSBDR));
    if (sb100_resDataXMLForSBDR != null && sb100_resDataXMLForSBDR != undefined && "" != sb100_resDataXMLForSBDR) {
        $w("qybxxForm").initData(parent.fbsyzqyxx);
    }
    for (var i = 1; i <= 47; i++) {
        $w("qybxxForm").enable(["h" + i + "l1"]);
    }
    parent.setHx("03", window);

    qybxxForm = $w("qybxxForm");
    nsrxxForm = $w("nsrxxForm");
    nsrxxForm.disable(['nsrsbh']);
    parent.$w('zzsybnsrsb').setDisabled('save');
    parent.$w('zzsybnsrsb').setDisabled('import');
    parent.$w('zzsybnsrsb').setDisabled('reset');
    //查看导入报此处js错误 注释掉
    //	if(sb100_resDataXMLForSBDR==null||sb100_resDataXMLForSBDR==""||sb100_resDataXMLForSBDR==undefined){
    //		if(parent.cxbj == 'Y'){
    //		(function(){qybxxForm.getFieldEl('h1l2').focus();}).delay(1);
    //		}
    //	}
    //导入提交保存
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
function getSsqz() {
    var nsqx_dm = "10";
    var ssqzBtn = new SwordSubmit();
    ssqzBtn.setCtrl("SBGyCtrl" + "_jsskssqz");
    ssqzBtn.setFunction('onSuccess', 'loadBaseInfo1');
    ssqzBtn.pushData('skssqq', $w('nsrxxForm').getValue("skssqq"));
    ssqzBtn.pushData('nsqxdm', nsqx_dm);
    ssqzBtn.submit();
}
function loadBaseInfo1(req, resData) {
    $w("nsrxxForm").setValue('skssqz', resData.getAttr('skssqz'));
}
/**
 * 不是重复采集，获取上年的本年数初始化到页面，资产负债表的五个年末余额（上年）传此js,用于校验
 */
function setInitValue(open_nsrsbh, open_nsrmc, open_bsrq, open_skssqq, open_skssqz, open_sqsyzlist, qms1, qms2, qms3, qms4, qms5) {
    if (open_sqsyzlist == null || open_sqsyzlist == "" || open_sqsyzlist == undefined) {
        swordAlert("所有者权益（或股东权益）增减变动表上年未采集数据");
    }
    $w("nsrxxForm").setValue("nsrsbh", open_nsrsbh);
    $w("nsrxxForm").setValue("nsrmc", open_nsrmc);
    $w("nsrxxForm").setValue("bsrq", open_bsrq);
    $w("nsrxxForm").setValue("skssqq", open_skssqq);
    $w("nsrxxForm").setValue("skssqz", open_skssqz);
    var year = open_skssqq.substr(0, 4);
    sqsyzqylist = open_sqsyzlist;
    sqqms1 = qms1;
    sqqms2 = qms2;
    sqqms3 = qms3;
    sqqms4 = qms4;
    sqqms5 = qms5;
    setsns();
}
/**
 * 重复采集，获取上次采集的数据，初始化到页面
 */
function setCfcjInitValue(open_cfcjTyNsrxxForm, open_sqsyzlist, open_qykjzdSyzqybdbForm, open_cfcjbz, qms1, qms2, qms3, qms4, qms5) {

    //统一纳税人信息
    $w("nsrxxForm").initData(open_cfcjTyNsrxxForm);
    if (sb100_resDataXMLForSBDR == null || sb100_resDataXMLForSBDR == "" || sb100_resDataXMLForSBDR == undefined) {
        //重复采集凭证化数据
        $w("qybxxForm").initData(open_qykjzdSyzqybdbForm);
    }
    //上期所有者权益权益表本年数
    sqsyzqylist = open_sqsyzlist;
    //是否重复采集标志
    cfcjbz = open_cfcjbz;
    //五个年末余额赋值
    sqqms1 = qms1;
    sqqms2 = qms2;
    sqqms3 = qms3;
    sqqms4 = qms4;
    sqqms5 = qms5;
    if (sqsyzqylist != null && sqsyzqylist.trs.length > 0) {
        sncjbz = 'Y';
    }
}
/**
 * 将上年本年数赋值到本期，非重复采集时调用
 * @return
 */
function setsns() {
    if (sqsyzqylist != undefined && sqsyzqylist.trs.length > 0) {
        sncjbz = 'Y';
        var qybxxForm = $w("qybxxForm");
        for (var i = 0; i < 47; i++) {
            var ewbhxh = sqsyzqylist.trs[i].tds.ewbhxh.value;
            var sns = sqsyzqylist.trs[i].tds.bns.value;
            qybxxForm.setValue("h" + ewbhxh + "l3", sns);
        }
    }
}
/**
 * 保存前验证
 */
function savefb() {
    if (sncjbz == 'Y') {//如果上期采集成功并且权益表成功采集 才进行校验
        //		var qybxxFormData = $w("qybxxForm");
        //		var bqs1=qybxxFormData.getValue("h8l3");
        //		var bqs2=qybxxFormData.getValue("h20l3");
        //		var bqs3=qybxxFormData.getValue("h34l3");
        //		var bqs4=qybxxFormData.getValue("h43l3");
        //		var bqs5=qybxxFormData.getValue("h47l3");
        //		if(parseFloat(bqs1)!=parseFloat(sqqms1)||parseFloat(bqs2)!=parseFloat(sqqms2)||parseFloat(bqs3)!=parseFloat(sqqms3)
        //				||parseFloat(sqqms4)!=parseFloat(bqs4)||parseFloat(sqqms5)!=parseFloat(bqs5)){
        //			swordConfirm("上年金额不等于上年报表同期金额,是否保存？", {
        //				okBtnName : "是",
        //				cancelBtnName : "否",
        //				onOk:function(){
        //				savetrue();
        //			},
        //				onCancel : function() {
        //				gyxssq();
        //				}});
        //		}else{
        //			savetrue();
        //		}
        savetrue();
    } else {//第一次报送 或者上期权益表未采集
        savetrue();
    }
}
function savetrue() {
    var nsrxxForm = $w('nsrxxForm');
    if (!nsrxxForm.validate()) {
        return;
    }
    var syzqyForm = $w("qybxxForm");
    if (!syzqyForm.validate()) {
        return;
    }
    parent.hxFb(syzqyForm, '03', beSbdr);//将子页面信息缓存到主表页面
    parent.$w('zzsybnsrsb').setEnabled('save');
    parent.$w('zzsybnsrsb').setEnabled('import');
    parent.$w('zzsybnsrsb').setEnabled('reset');
}
/**
 * 取消修改时，将页面用户修改的值还原
 * @return
 */
function gyxssq() {
    $w("qybxxForm").initData(syzqyxx_Data);
}
/**
 * 取消
 */
function reset() {
    $w('qybxxForm').resetAll();
}
/**
 * 附表打印函数
 * @return
 */
function setFbdymbuuid() {
    parent.dymbuuid = "sb100_qykjzdcwbbbsyxxcj_qyb";
    parent.hxdyForPrint = "N";
    parent.printTitle = "所有者权益(或股东权益)增减变动表(适用执行企业会计制度的企业)";
    parent.zzlx = "A4";
    parent.fykg = "Y";
    parent.caculateGridHJFlag = "N";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"100%"}';
}