var beSbdr = false;
var cfcjbz;
var fbXMLData = {};
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled("bcBtn");
        $w("qykjzdInner").setDisabled("qxBtn");
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
        $w("qykjzdfzForm").disable();
    }
    var nsrxxMap = parent.zlbsNsrxxMap;
    var nsrsbh = nsrxxMap.data.nsrsbh.value;
    var nsrmc = nsrxxMap.data.nsrmc.value;
    fbXMLData["qykjzdfzForm"] = parent.zlbsfbsaveData.get("企业会计制度附注");
    if (fbXMLData["qykjzdfzForm"] != null
			&& fbXMLData["qykjzdfzForm"] != undefined
			&& fbXMLData["qykjzdfzForm"].sword != null
			&& fbXMLData["qykjzdfzForm"].sword != undefined
			&& fbXMLData["qykjzdfzForm"].sword != "") {
        $w("qykjzdfzForm").initData(fbXMLData["qykjzdfzForm"]);
        //$w("qykjzdfzForm").initData(parent.zlbsfbsaveData.get("企业会计制度附注"));
    }
    $w("qykjzdfzForm").setValue("nsrsbh", nsrsbh);
    $w("qykjzdfzForm").setValue("nsrmc", nsrmc);
    var ssqq = "";
    var skssqq = nsrxxMap.data.skssqq.value;
    if ($chk(skssqq)) {
        ssqq = skssqq.substring(0, 4);
        $w("qykjzdfzForm").setValue("bsnd", ssqq);
    }
    parent.$w('zzsybnsrsb').setDisabled('save');
    parent.$w('zzsybnsrsb').setDisabled('import');
    parent.$w('zzsybnsrsb').setDisabled('reset');
    //开始增加网报特色
    if (parent.beSbdr && beSbdr == false) {
        parent.$w('zzsybnsrsb').setEnabled('save');
        parent.$w('zzsybnsrsb').setEnabled('import');
        parent.$w('zzsybnsrsb').setEnabled('reset');

        if (fbXMLData["qykjzdfzForm"] != null
				&& fbXMLData["qykjzdfzForm"] != undefined
				&& fbXMLData["qykjzdfzForm"].sword != null
				&& fbXMLData["qykjzdfzForm"].sword != undefined
				&& fbXMLData["qykjzdfzForm"].sword != "") {
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
    var qykjzdfzForm = $w("qykjzdfzForm");
    if (!qykjzdfzForm.validate()) {
        return;
    }
    if (!beSbdr) {
        parent.alertmes("企业会计制度附注采集完成且发送成功!");
    }
    parent.zlbsfbsaveData.set("企业会计制度附注", qykjzdfzForm.getSubmitData());
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
    parent.zlbsfbsaveData.set("企业会计制度附注", null);
    $w("qykjzdfzForm").setValue("bz11", "");
    $w("qykjzdfzForm").setValue("bz12", "");
    $w("qykjzdfzForm").setValue("bz13", "");
    $w("qykjzdfzForm").setValue("bz14", "");
    $w("qykjzdfzForm").setValue("bz15", "");
    $w("qykjzdfzForm").setValue("bz16", "");
    $w("qykjzdfzForm").setValue("bz17", "");
    $w("qykjzdfzForm").setValue("bz18", "");
    $w("qykjzdfzForm").setValue("bz19", "");
    $w("qykjzdfzForm").setValue("bz20", "");
    $w("qykjzdfzForm").setValue("bz21", "");
    $w("qykjzdfzForm").setValue("bz22", "");
    $w("qykjzdfzForm").setValue("bz23", "");

}

/**
 * 附表打印函数
 * @return
 */
function setFbdymbuuid() {
    parent.dymbuuid = "sb000_qykjzdfz";
    parent.hxdyForPrint = "N";
    parent.fykg = "Y";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "Y";
    parent.ccbg = "Y";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"88%"}';
    parent.printTitle = "企业会计制度附注";
}