var beSbdr = false;
var cfcjbz;
var fbXMLData = {};
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled("bcBtn");
        $w("qykjzdInner").setDisabled("qxBtn");
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
        $w("ndcwkjbgshbgForm").disable();
    }
    //	parent.setHx("年度财务会计报告审计报告",window);
    var nsrxxMap = parent.zlbsNsrxxMap;
    var nsrsbh = nsrxxMap.data.nsrsbh.value;
    var nsrmc = nsrxxMap.data.nsrmc.value;
    fbXMLData["ndcwkjbgshbgForm"] = parent.zlbsfbsaveData.get("年度财务会计报告审计报告");
    if (fbXMLData["ndcwkjbgshbgForm"] != null
			&& fbXMLData["ndcwkjbgshbgForm"] != undefined
			&& fbXMLData["ndcwkjbgshbgForm"].sword != null
			&& fbXMLData["ndcwkjbgshbgForm"].sword != undefined
			&& fbXMLData["ndcwkjbgshbgForm"].sword != "") {
        $w("ndcwkjbgshbgForm").initData(fbXMLData["ndcwkjbgshbgForm"]);
        //$w("ndcwkjbgshbgForm").initData(parent.zlbsfbsaveData.get("年度财务会计报告审计报告"));
    }
    $w("ndcwkjbgshbgForm").setValue("nsrsbh", nsrsbh);
    $w("ndcwkjbgshbgForm").setValue("nsrmc", nsrmc);
    var ssqq = "";
    var skssqq = nsrxxMap.data.skssqq.value;
    if ($chk(skssqq)) {
        ssqq = skssqq.substring(0, 4);
        $w("ndcwkjbgshbgForm").setValue("bsnd", ssqq);
    }
    parent.$w('zzsybnsrsb').setDisabled('save');
    parent.$w('zzsybnsrsb').setDisabled('import');
    parent.$w('zzsybnsrsb').setDisabled('reset');
    //开始增加网报特色
    if (parent.beSbdr && beSbdr == false) {
        parent.$w('zzsybnsrsb').setEnabled('save');
        parent.$w('zzsybnsrsb').setEnabled('import');
        parent.$w('zzsybnsrsb').setEnabled('reset');

        if (fbXMLData["ndcwkjbgshbgForm"] != null
				&& fbXMLData["ndcwkjbgshbgForm"] != undefined
				&& fbXMLData["ndcwkjbgshbgForm"].sword != null
				&& fbXMLData["ndcwkjbgshbgForm"].sword != undefined
				&& fbXMLData["ndcwkjbgshbgForm"].sword != "") {
            beSbdr = true;
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
 * 保存操作
 */
function savefb() {
    var ndcwkjbgshbgForm = $w("ndcwkjbgshbgForm");
    if (!ndcwkjbgshbgForm.validate()) {
        return;
    }
    if (!beSbdr) {
        parent.alertmes("年度财务会计报告审计报告采集完成且发送成功!");
    }
    parent.zlbsfbsaveData.set("年度财务会计报告审计报告", ndcwkjbgshbgForm.getSubmitData());
    var id = "table00";
    parent.$("table00").setStyle('display', '');

    var iframes = parent.document.getElementsByTagName('iframe');
    for (var num = 0; num < iframes.length; num++) {
        var ifram = iframes[num];
        var iframid = ifram.id;
        var tableid = iframid.substring(0, iframid.indexOf("iframe"));
        if ($chk(tableid)) {
            parent.$(tableid).setStyle('display', 'none');
        }
    }
    parent.$w('zzsybnsrsb').setEnabled('save');
    parent.$w('zzsybnsrsb').setEnabled('reset');
    parent.$w('zzsybnsrsb').setEnabled('import');

}

function reset() {
    parent.zlbsfbsaveData.set("年度财务会计报告审计报告", null);
    $w("ndcwkjbgshbgForm").setValue("shqkjyj", "");
    $w("ndcwkjbgshbgForm").setValue("shkjssws", "");
    $w("ndcwkjbgshbgForm").setValue("bgbh", "");
    $w("ndcwkjbgshbgForm").setValue("qzzckjs", "");
    $w("ndcwkjbgshbgForm").setValue("shbgzw", "");
}

/**
 * 附表打印函数
 * @return
 */
function setFbdymbuuid() {
    parent.dymbuuid = "sb000_ndcwkjbgshbg";
    //	parent.hxdyForPrint = "N";
    parent.hxdyForPrint = "N";
    parent.caculateGridHJFlag = "Y";
    parent.fykg = "N";
    parent.zzlx = "A4";//（A3为纸张类型，根据实际情况设置）;
    parent.ccbg = "Y"; //超长表格
    parent.printMode = '{"PRINT_PAGE_PERCENT":"90%"}';//;（50%为缩放比例，根据实际情况设置）;
    parent.printTitle = "年度财务会计报告审计报告";
}
