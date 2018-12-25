var gs_gjj = [
"{yszkdplForm_h5l2}={yszkdplForm_h1l2}+{yszkdplForm_h2l2}+{yszkdplForm_h3l2}+{yszkdplForm_h4l2}",
"{yszkdplForm_h5l3}={yszkdplForm_h1l3}+{yszkdplForm_h2l3}+{yszkdplForm_h3l3}+{yszkdplForm_h4l3}",
"{yszkdplForm_h5l4}={yszkdplForm_h1l4}+{yszkdplForm_h2l4}+{yszkdplForm_h3l4}+{yszkdplForm_h4l4}",
"{yszkdplForm_h5l5}={yszkdplForm_h1l5}+{yszkdplForm_h2l5}+{yszkdplForm_h3l5}+{yszkdplForm_h4l5}",
"{yszkdplForm_h5l6}={yszkdplForm_h1l6}+{yszkdplForm_h2l6}+{yszkdplForm_h3l6}+{yszkdplForm_h4l6}",
"{yszkdplForm_h5l7}={yszkdplForm_h1l7}+{yszkdplForm_h2l7}+{yszkdplForm_h3l7}+{yszkdplForm_h4l7}"
];
var beSbdr = false;
var fbXMLData = {};
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled("bcBtn");
        $w("qykjzdInner").setDisabled("qxBtn");
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
        $w("yszkdplForm").disable();
    }
    fbXMLData["yszkdplForm"] = parent.zlbsfbsaveData.get("应收账款的披露（适用执行企业会计制度的企业）");
    if (fbXMLData["yszkdplForm"] != null
			&& fbXMLData["yszkdplForm"] != undefined
			&& fbXMLData["yszkdplForm"].sword != null
			&& fbXMLData["yszkdplForm"].sword != undefined
			&& fbXMLData["yszkdplForm"].sword != "") {
        $w("yszkdplForm").initData(fbXMLData["yszkdplForm"]);
        //$w("yszkdplForm").initData(parent.zlbsfbsaveData.get("应收账款的披露（适用执行企业会计制度的企业）"));
    }

    parent.$w('zzsybnsrsb').setDisabled('save');
    parent.$w('zzsybnsrsb').setDisabled('import');
    parent.$w('zzsybnsrsb').setDisabled('reset');
    //开始增加网报特色
    if (parent.beSbdr && beSbdr == false) {
        parent.$w('zzsybnsrsb').setEnabled('save');
        parent.$w('zzsybnsrsb').setEnabled('import');
        parent.$w('zzsybnsrsb').setEnabled('reset');

        if (fbXMLData["yszkdplForm"] != null
				&& fbXMLData["yszkdplForm"] != undefined
				&& fbXMLData["yszkdplForm"].sword != null
				&& fbXMLData["yszkdplForm"].sword != undefined
				&& fbXMLData["yszkdplForm"].sword != "") {
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
    var yszkdplForm = $w("yszkdplForm");
    if (!yszkdplForm.validate()) {
        return;
    }
    if (!beSbdr) {
        parent.alertmes("应收账款的披露（适用执行企业会计制度的企业）采集完成且发送成功!");
    }
    parent.zlbsfbsaveData.set("应收账款的披露（适用执行企业会计制度的企业）", yszkdplForm.getSubmitData());
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
    parent.zlbsfbsaveData.set("应收账款的披露（适用执行企业会计制度的企业）", null);
    var form = $w("yszkdplForm");
    form.reset();
    form.setValue("h1l1", "1年以内");
    form.setValue("h2l1", "1～2年");
    form.setValue("h3l1", "2～3年");
    form.setValue("h4l1", "3年以上");
    form.setValue("h5l1", "合计");
}


/**
 * 附表打印函数
 * @return
 */
function setFbdymbuuid() {
    parent.dymbuuid = "sb000_yszkdpl";
    parent.hxdyForPrint = "Y";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "Y";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"90%"}';
    parent.printTitle = "应收账款的披露（适用执行企业会计制度的企业）";
}