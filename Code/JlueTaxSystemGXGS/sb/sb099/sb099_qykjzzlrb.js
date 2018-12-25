var beSbdr = false;
var sfdycbs;// 判断是否第一次报送财务报表
var bszldm;// 报送资料代码
var cjbz;// 采集标记
var sfkybc = false;
var djxh;
var cfcjbz;// 重复采集标记

var yylrbqje;//
var lrzebqje;//
var jlrbqje;
var lrbxx_Data = null;
var cjbz;
var lrbCjcgbj = 'N';// 利润表成功采集标记 默认为否
var sqlrblist;
var resDataXMLForSBDR;
/**
 * 附表打印函数
 * @return
 */
function setFbdymbuuid() {
    parent.dymbuuid = "sb099_qykjzzlrb";
    parent.hxdyForPrint = "N";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "N";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"100%"}';
    parent.printTitle = "利润表（适用执行企业会计准则的一般企业）";
}
/**
 * 初始化处理
 * 
 * @param {Object}
 *            resData
 */
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled('bcBtn');
        $w("qykjzdInner").setDisabled('qxBtn');
        $w("lrbxxForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
    }

    parent.setHx("01");
    resDataXMLForSBDR = parent.fblrbxx;// 申报错误更正返回的resData
    //lrbxxForm = pc.getResData("lrbxxForm", JSON.decode(sb099_resDataXMLForSBDR));
    if (parent.beSbdr && resDataXMLForSBDR != null && resDataXMLForSBDR != undefined && "" != resDataXMLForSBDR) {
        $w("lrbxxForm").initData(resDataXMLForSBDR);
        //  $w("lrbxxForm").disable();
    }
    //查看导入报此处js错误 注释掉
    //	if(parent.cxbj == 'Y'){
    //	   (function(){$w("lrbxxForm").getFieldEl('h1l2').focus();}).delay(1);
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
        if (resDataXMLForSBDR != null && resDataXMLForSBDR != undefined
				&& "" != resDataXMLForSBDR) {
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
function setInitValue(open_nsrsbh, open_nsrmc, open_bsrq, open_skssqq,
		open_skssqz, open_sqlrblist, open_bbssq) {
    if (open_sqlrblist == null || open_sqlrblist == "" || open_sqlrblist == undefined) {
        swordAlert("利润表上年未采集数据");
    }
    $w("nsrxxForm2").setValue("nsrsbh", open_nsrsbh);
    $w("nsrxxForm2").setValue("nsrmc", open_nsrmc);
    $w("nsrxxForm2").setValue("bsrq", open_bsrq);
    //	$w("nsrxxForm2").setValue("skssqq", open_skssqq);
    //	$w("nsrxxForm2").setValue("skssqz", open_skssqz);
    $w("nsrxxForm2").setValue("bbssq", open_bbssq);
    sqlrblist = open_sqlrblist;
    // open_sqlrblist是上年本年累计数
    //	var month=open_skssqq.substring(5,7);
    //	var len=parseInt(open_skssqz.substring(5,7))-(parseInt(open_skssqq.substring(5,7)));
    //	if(month!="01" && len!="11"){
    if (open_sqlrblist != undefined && open_sqlrblist.trs.length > 0) {
        var lrbxxForm = $w("lrbxxForm");
        for (var i = 0; i < open_sqlrblist.trs.length; i++) {
            var ewbhxh = open_sqlrblist.trs[i].tds.ewbhxh.value;
            var bqje = open_sqlrblist.trs[i].tds.bqje.value;
            lrbxxForm.setValue("h" + ewbhxh + "l3", bqje);
        }
    }
    //	}
    //	if(len=="11"){
    //		 if(open_sqlrblist!=undefined&&open_sqlrblist.trs.length>0){
    //		  var lrbxxForm=$w("lrbxxForm");
    //			for(var i=16;i<open_sqlrblist.trs.length;i++){
    //				var ewbhxh=open_sqlrblist.trs[i].tds.ewbhxh.value;
    //				var bys=open_sqlrblist.trs[i].tds.bys.value;
    //				lrbxxForm.setValue("h"+ewbhxh+"l3",bys);
    //			}
    //		}
    //	}
    //	(function() {
    //		lrbxxData = $w("lrbxxForm").getSubmitData();
    //	}).delay(100);
}
function setCfcjInitValue(open_cfcjTyNsrxxForm, open_qykjzdybqylrbForm,
		open_cfcjbz, open_sqlrblist) {
    $w("lrbxxForm").initData(open_qykjzdybqylrbForm);
    $w("nsrxxForm2").initData(open_cfcjTyNsrxxForm);
    cfcjbz = open_cfcjbz;
    sqlrblist = open_sqlrblist;
}
/**
 * 保存事件
 */
function saveZlbsbdxx() {
    var flag = "T";
    if (sqlrblist != undefined && sqlrblist.trs.length > 0) {
        for (var i = 0; i < sqlrblist.trs.length; i++) {
            var ewbhxh = sqlrblist.trs[i].tds.ewbhxh.value;
            if (ewbhxh == '18') {//18行为空行，不参与效验
                continue;
            }
            var snbqje = sqlrblist.trs[i].tds.bqje.value;
            snbqje = $chk(snbqje) ? snbqje : 0.0;
            var bh = "h" + ewbhxh + "l3";
            var bnsqje = $w("lrbxxForm").getValue(bh);
            bnsqje = $chk(bnsqje) ? bnsqje : 0.0;
            if (snbqje / 1 != bnsqje / 1) {
                flag = "F";
                break;
            }
        }
    }
    if (flag == "F" && !beSbdr) {
        swordConfirm("利润表中上期金额，与上年同期利润表中的本期金额不一致，是否继续？", {
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

    if ($w("lrbxxForm").validate() && $w("nsrxxForm2").validate()) {
    } else {
        return;
    }
    saveZlbsbdxx();

}

function saveTrue2() {
    var nsrxxForm = $w("nsrxxForm2").getSubmitData();
    var lrbxxForm = $w("lrbxxForm").getSubmitData();
    parent.hxFb(lrbxxForm, nsrxxForm, '01', cfcjbz, beSbdr);// 将子页面信息缓存到主表页面
    parent.$w('zzsybnsrsb').setEnabled('save');
    parent.$w('zzsybnsrsb').setEnabled('reset');
    parent.$w('zzsybnsrsb').setEnabled('import');
}

/**
 * 取消修改时，将页面用户修改的值还原
 * 
 * @return
 */
//function gyxssq() {
//	$w("lrbxxForm").initData(lrbxx_Data);
//}

/**
 * 重置按钮事件
 */
function reset() {
    $w('lrbxxForm').resetAll();
}
