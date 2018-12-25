var sfdycbs;//判断是否第一次报送财务报表
var bszldm;//报送资料代码
var cjbz;//采集标记
var sfkybc = false;
var djxh;
var cfcjbz;//重复采集标记

var xjllbxx_Data = null;
var jyhdxjlrbqjexj;
var bqjejyhdxjlcxj;
var xjlljebqje;
var tzhdxjlrbxj;
var tzhdxjlcbxj;
var tzhdcsxjlljeb;
var czhdxjlrbxj;
var czhdxjlcbxj;
var czhdxjlljeb;
var xjjzjeb;
var qmxjjyeb;
var xjllblist;
var cjbz;
var xjllbCjcgbj = 'N';//现金流量表成功采集标记
var beSbdr = false;
/**
 * 初始化处理
 * @param {Object} resData
 */
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled("bcBtn");
        $w("qykjzdInner").setDisabled("qxBtn");
        $w("xjllbxxForm").disable();
        $w("nsrxxForm3").disable();
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
    }
    var sb099_resDataXMLForSBDR = parent.fbxjllbxx;//申报错误更正返回的resData
    parent.setHx("02");
    //xjllbxxForm = pc.getResData("xjllbxxForm",JSON.decode(sb099_resDataXMLForSBDR));
    if (parent.beSbdr && sb099_resDataXMLForSBDR != null && sb099_resDataXMLForSBDR != undefined && "" != sb099_resDataXMLForSBDR) {
        $w("xjllbxxForm").initData(sb099_resDataXMLForSBDR);
        //$w("xjllbxxForm").disable();
    }
    //	(function(){$w("xjllbxxForm").getFieldEl('h1l2').focus();}).delay(1);
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
function setInitValue(open_nsrsbh, open_nsrmc, open_bsrq, open_skssqq, open_skssqz, open_xjllblist) {
    if (open_xjllblist == null || open_xjllblist == "" || open_xjllblist == undefined) {
        swordAlert("现金流量表上年未采集数据");
    }
    $w("nsrxxForm3").setValue("nsrsbh", open_nsrsbh);
    $w("nsrxxForm3").setValue("nsrmc", open_nsrmc);
    $w("nsrxxForm3").setValue("bsrq", open_bsrq);
    $w("nsrxxForm3").setValue("skssqq", open_skssqq);
    $w("nsrxxForm3").setValue("skssqz", open_skssqz);

    xjllblist = open_xjllblist;
    // open_xjllblist是上年本年累计数
    //	var month=open_skssqq.substring(5,7);
    //	var len=parseInt(open_skssqz.substring(5,7))-(parseInt(open_skssqq.substring(5,7)));
    //	if(month!="01" && len!="11"){
    if (open_xjllblist != undefined && open_xjllblist.trs.length > 0) {
        var xjllbxxForm = $w("xjllbxxForm");
        for (var i = 0; i < open_xjllblist.trs.length; i++) {
            var ewbhxh = open_xjllblist.trs[i].tds.ewbhxh.value;
            var bqje = open_xjllblist.trs[i].tds.bqje.value;
            xjllbxxForm.setValue("h" + ewbhxh + "l3", bqje);
        }
    }
    //	}
    //	if(len=="11"){
    //		 if(open_xjllblist!=undefined&&open_xjllblist.trs.length>0){
    //		  var xjllbxxForm=$w("xjllbxxForm");
    //			for(var i=16;i<22;i++){
    //				var ewbhxh=open_xjllblist.trs[i].tds.ewbhxh.value;
    //				var bys=open_xjllblist.trs[i].tds.bys.value;
    //				xjllbxxForm.setValue("h"+ewbhxh+"l3",bys);
    //			}
    //		}
    //	}
    //	(function() {
    //		xjllbData = $w("xjllbxxForm").getSubmitData();
    //	}).delay(100);
}
function setCfcjInitValue(open_cfcjTyNsrxxForm, open_qykjzdybqyXjllbForm, open_cfcjbz, open_xjllblist) {
    $w("xjllbxxForm").initData(open_qykjzdybqyXjllbForm);
    $w("nsrxxForm3").initData(open_cfcjTyNsrxxForm);
    cfcjbz = open_cfcjbz;
    xjllblist = open_xjllblist;
}
/**
 * 保存现金流量表操作
 */
function saveXjllb() {
    var flag = "T";
    if (xjllblist != undefined && xjllblist.trs.length > 0) {
        for (var i = 0; i < xjllblist.trs.length; i++) {
            var ewbhxh = xjllblist.trs[i].tds.ewbhxh.value;
            var snbqje = xjllblist.trs[i].tds.bqje.value;
            snbqje = $chk(snbqje) ? snbqje : 0.0;
            var bh = "h" + ewbhxh + "l3";
            var bnsqje = $w("xjllbxxForm").getValue(bh);
            bnsqje = $chk(bnsqje) ? bnsqje : 0.0;
            if (snbqje / 1 != bnsqje / 1) {
                flag = "F";
                break;
            }
        }
    }
    if (flag == "F" && !beSbdr) {//导入时不提示
        swordConfirm("现金流量表中上期金额，与上年同期现金流量表中的本期金额不一致，是否继续？", {
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

    if ($w("xjllbxxForm").validate() && $w("nsrxxForm3").validate()) {
    } else {
        return;
    }
    saveXjllb();
}
function saveTrue2() {
    var nsrxxForm = $w("nsrxxForm3").getSubmitData();
    var xjllbxxForm = $w("xjllbxxForm").getSubmitData();
    parent.hxFb(xjllbxxForm, nsrxxForm, '02', cfcjbz, beSbdr);//将子页面信息缓存到主表页面
    parent.$w('zzsybnsrsb').setEnabled('save');
    parent.$w('zzsybnsrsb').setEnabled('reset');
    parent.$w('zzsybnsrsb').setEnabled('import');

}
/**
 * 取消修改时，将页面用户修改的值还原
 * @return
 */
function gyxssq() {
    $w("xjllbxxForm").initData(xjllbxx_Data);
}



/**
 * 重置操作
 */
function reset() {

    $w('xjllbxxForm').resetAll();
}
/**
 * 附表打印函数
 * @return
 */
function setFbdymbuuid() {
    parent.dymbuuid = "sb099_qykjzzxjllb";
    parent.hxdyForPrint = "N";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "N";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"100%"}';
    parent.printTitle = "现金流量表（适用执行企业会计准则的一般企业）";
}