var beSbdr = false;
var sfdycbs;//判断是否第一次报送财务报表
var bszldm;//报送资料代码
var cjbz;//采集标记
var sfkybc = false;
var djxh;
var cfcjbz;//重复采集标记
var sqa26, sqb26, sqc26, sqd26, sqe26, sqf26;
var syzqyxx_Data = null;
var cjbz;
var qybCjcgbj = 'N';//权益表成功采集标记 
/**
 * 附表打印函数
 * @return
 */
function setFbdymbuuid() {
    parent.dymbuuid = "sb099_qykjzzsyzqybdb";
    parent.hxdyForPrint = "Y";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"45%"}';
    parent.printTitle = "所有者权益变动表（适用执行企业会计准则的一般企业）";
}
/**
 * 初始化处理
 * @param {Object} resData
 */
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled('bcBtn');
        $w("qykjzdInner").setDisabled('qxBtn');
        $w("qybxxForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("nsrxxForm4").disable();
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
    }
    var sb099_resDataXMLForSBDR = parent.fbsyzqyxx;//申报错误更正返回的resData
    //qybxxForm = pc.getResData("qybxxForm",JSON.decode(sb099_resDataXMLForSBDR));

    parent.setHx("03");
    if (parent.beSbdr && sb099_resDataXMLForSBDR != null && sb099_resDataXMLForSBDR != undefined && "" != sb099_resDataXMLForSBDR) {
        $w("qybxxForm").initData(sb099_resDataXMLForSBDR);
        //	$w("qybxxForm").disable();
    }
    //查看导入报此处js错误 注释掉
    //	if(parent.cxbj == 'Y'){
    //	    (function(){$w("qybxxForm").getFieldEl('h1l2').focus();}).delay(1);
    //	}
    // 附表按钮公共置灰
    parent.$w('zzsybnsrsb').setDisabled('save');
    parent.$w('zzsybnsrsb').setDisabled('import');
    parent.$w('zzsybnsrsb').setDisabled('reset');
    //开始需要增加网报特色
    if (parent.beSbdr && beSbdr == false) {
        parent.$w('zzsybnsrsb').setEnabled('save');
        parent.$w('zzsybnsrsb').setEnabled('reset');
        parent.$w('zzsybnsrsb').setEnabled('import');
        if (sb099_resDataXMLForSBDR != null && sb099_resDataXMLForSBDR != undefined
				&& "" != sb099_resDataXMLForSBDR) {
            beSbdr = true;
            (function () {
                var inputs = $$('input');
                inputs.each(function (input, idx) {
                    if (input.id != "") {
                        caculate(input.id);
                    }
                });
                saveTrue();
                beSbdr = false;
            }).delay(1);
        }
    }
}
function setInitValue(open_nsrsbh, open_nsrmc, open_bsrq, open_skssqq, open_skssqz, open_sqsyzlist) {
    if (open_sqsyzlist == null || open_sqsyzlist == "" || open_sqsyzlist == undefined) {
        swordAlert("所有者权益变动表上年本期未采集数据");
    }
    $w("nsrxxForm4").setValue("nsrsbh", open_nsrsbh);
    $w("nsrxxForm4").setValue("nsrmc", open_nsrmc);
    $w("nsrxxForm4").setValue("bsrq", open_bsrq);
    $w("nsrxxForm4").setValue("skssqq", open_skssqq);
    $w("nsrxxForm4").setValue("skssqz", open_skssqz);
    sqsyzlist = open_sqsyzlist;
    // open_sqsyzlist是上年本年累计数
    //	var month=open_skssqq.substring(5,7);
    //	var len=parseInt(open_skssqz.substring(5,7))-(parseInt(open_skssqq.substring(5,7)));
    //	if(month!="01" && len!="11"){
    if (open_sqsyzlist != undefined && open_sqsyzlist.trs.length > 0) {
        var qybxxForm = $w("qybxxForm");
        for (var i = 0; i < open_sqsyzlist.trs.length; i++) {
            var ewbhxh = open_sqsyzlist.trs[i].tds.ewbhxh.value;
            var bnsszbhgb = open_sqsyzlist.trs[i].tds.bnsszbhgb.value;
            var bnzbgj = open_sqsyzlist.trs[i].tds.bnzbgj.value;
            var bnjkcg = open_sqsyzlist.trs[i].tds.bnjkcg.value;
            var bnyygj = open_sqsyzlist.trs[i].tds.bnyygj.value;
            var bnwfply = open_sqsyzlist.trs[i].tds.bnwfply.value;
            var bnsyzqyhj = open_sqsyzlist.trs[i].tds.bnsyzqyhj.value;
            qybxxForm.setValue("h" + ewbhxh + "l8", bnsszbhgb);
            qybxxForm.setValue("h" + ewbhxh + "l9", bnzbgj);
            qybxxForm.setValue("h" + ewbhxh + "l10", bnjkcg);
            qybxxForm.setValue("h" + ewbhxh + "l11", bnyygj);
            qybxxForm.setValue("h" + ewbhxh + "l12", bnwfply);
            qybxxForm.setValue("h" + ewbhxh + "l13", bnsyzqyhj);
            //新增字段
            bnqtzhsy = open_sqsyzlist.trs[i].tds.bnqtzhsy.value;
            bnqtzhsy = $chk(bnqtzhsy) ? bnqtzhsy : "0.0";
            qybxxForm.setValue("h" + ewbhxh + "l15", bnqtzhsy);
        }
    }
    //	}
    //	if(len=="11"){
    //		 if(open_sqsyzlist!=undefined&&open_sqsyzlist.trs.length>0){
    //		  var qybxxForm=$w("qybxxForm");
    //			for(var i=16;i<open_sqsyzlist.trs.length;i++){
    //				var ewbhxh=open_sqsyzlist.trs[i].tds.ewbhxh.value;
    //				var bys=open_sqsyzlist.trs[i].tds.bys.value;
    //				qybxxForm.setValue("h"+ewbhxh+"l3",bys);
    //			}
    //		}
    //	}
    //	(function() {
    //		sqsyzlistData = $w("qybxxForm").getSubmitData();
    //	}).delay(100);
}
function setCfcjInitValue(open_cfcjTyNsrxxForm, open_qykjzdybqySyzqybdbForm, open_cfcjbz, open_sqsyzlist) {
    $w("qybxxForm").initData(open_qykjzdybqySyzqybdbForm);
    $w("nsrxxForm4").initData(open_cfcjTyNsrxxForm);
    cfcjbz = open_cfcjbz;
    sqsyzlist = open_sqsyzlist;
}
/**
 * 取消修改,或者上期成功采集时，将页面用户修改的值还原带出
 * @return
 */
function gyxssq() {
    $w("qybxxForm").initData(syzqyxx_Data);
}
/**
 * 保存所有者权益(或增减)变动表数据
 */
function saveSyzqybdb() {
    var flag = "T";
    if (sqsyzlist != undefined && sqsyzlist.trs.length > 0) {
        for (var i = 0; i < sqsyzlist.trs.length; i++) {
            var ewbhxh = sqsyzlist.trs[i].tds.ewbhxh.value;

            var ewbhxh = sqsyzlist.trs[i].tds.ewbhxh.value;
            var snbnsszbhgb = sqsyzlist.trs[i].tds.bnsszbhgb.value;
            var snbnzbgj = sqsyzlist.trs[i].tds.bnzbgj.value;
            var snbnjkcg = sqsyzlist.trs[i].tds.bnjkcg.value;
            var snbnyygj = sqsyzlist.trs[i].tds.bnyygj.value;
            var snbnwfply = sqsyzlist.trs[i].tds.bnwfply.value;
            var snbnsyzqyhj = sqsyzlist.trs[i].tds.bnsyzqyhj.value;
            snbnsszbhgb = $chk(snbnsszbhgb) ? snbnsszbhgb : 0.0;
            snbnzbgj = $chk(snbnzbgj) ? snbnzbgj : 0.0;
            snbnjkcg = $chk(snbnjkcg) ? snbnjkcg : 0.0;
            snbnyygj = $chk(snbnyygj) ? snbnyygj : 0.0;
            snbnwfply = $chk(snbnwfply) ? snbnwfply : 0.0;
            snbnsyzqyhj = $chk(snbnsyzqyhj) ? snbnsyzqyhj : 0.0;
            //新增字段
            var snbnqtzhsy = sqsyzlist.trs[i].tds.bnqtzhsy.value;
            snbnqtzhsy = $chk(snbnqtzhsy) ? snbnqtzhsy : "0.0";

            var bnsszbhgb = $w("qybxxForm").getValue("h" + ewbhxh + "l8");
            var bnzbgj = $w("qybxxForm").getValue("h" + ewbhxh + "l9");
            var bnjkcg = $w("qybxxForm").getValue("h" + ewbhxh + "l10");
            var bnyygj = $w("qybxxForm").getValue("h" + ewbhxh + "l11");
            var bnwfply = $w("qybxxForm").getValue("h" + ewbhxh + "l12");
            var bnsyzqyhj = $w("qybxxForm").getValue("h" + ewbhxh + "l13");
            var bnqtzhsy = $w("qybxxForm").getValue("h" + ewbhxh + "l15");

            bnsszbhgb = $chk(bnsszbhgb) ? bnsszbhgb : 0.0;
            bnzbgj = $chk(bnzbgj) ? bnzbgj : 0.0;
            bnjkcg = $chk(bnjkcg) ? bnjkcg : 0.0;
            bnyygj = $chk(bnyygj) ? bnyygj : 0.0;
            bnwfply = $chk(bnwfply) ? bnwfply : 0.0;
            bnsyzqyhj = $chk(bnsyzqyhj) ? bnsyzqyhj : 0.0;
            bnqtzhsy = $chk(bnqtzhsy) ? bnqtzhsy : 0.0;

            if (snbnsszbhgb / 1 != bnsszbhgb / 1
					|| snbnzbgj / 1 != bnzbgj / 1
					|| snbnjkcg / 1 != bnjkcg / 1
					|| snbnyygj / 1 != bnyygj / 1
					|| snbnwfply / 1 != bnwfply / 1
					|| snbnsyzqyhj / 1 != bnsyzqyhj / 1
					|| snbnqtzhsy / 1 != bnqtzhsy / 1) {
                flag = "F";
                break;
            }
        }
    }
    if (flag == "F" && !beSbdr) {
        swordConfirm("所有者权益变动表中的上年金额，与上年同期所有者权益变动表中的本年金额不一致，是否继续？", {
            onOk: function () {
                saveTrue2();
            },
            onCancel: function () {
                return false;
            }
        });
    } else {
        saveTrue2();
    }
}

function saveTrue() {

    if ($w("qybxxForm").validate() && $w("nsrxxForm4").validate()) {
    } else {
        return;
    }
    saveSyzqybdb();
}

function saveTrue2() {
    var nsrxxForm = $w("nsrxxForm4").getSubmitData();
    var syzqyForm = $w("qybxxForm").getSubmitData();
    parent.hxFb(syzqyForm, nsrxxForm, '03', cfcjbz, beSbdr);//将子页面信息缓存到主表页面
    parent.$w('zzsybnsrsb').setEnabled('save');
    parent.$w('zzsybnsrsb').setEnabled('reset');
    parent.$w('zzsybnsrsb').setEnabled('import');

}
/**
 * 重置按钮事件
 */
function reset() {
    $w('qybxxForm').resetAll();
}
