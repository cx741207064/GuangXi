var gs_gjj = [
"{cqtzdplForm_h8l2}={cqtzdplForm_h1l2}+{cqtzdplForm_h2l2}+{cqtzdplForm_h3l2}+{cqtzdplForm_h4l2}+{cqtzdplForm_h5l2}+{cqtzdplForm_h6l2}+{cqtzdplForm_h7l2}",
"{cqtzdplForm_h8l3}={cqtzdplForm_h1l3}+{cqtzdplForm_h2l3}+{cqtzdplForm_h3l3}+{cqtzdplForm_h4l3}+{cqtzdplForm_h5l3}+{cqtzdplForm_h6l3}+{cqtzdplForm_h7l3}",
"{cqtzdplForm_h8l4}={cqtzdplForm_h1l4}+{cqtzdplForm_h2l4}+{cqtzdplForm_h3l4}+{cqtzdplForm_h4l4}+{cqtzdplForm_h5l4}+{cqtzdplForm_h6l4}+{cqtzdplForm_h7l4}",
"{cqtzdplForm_h8l5}={cqtzdplForm_h1l5}+{cqtzdplForm_h2l5}+{cqtzdplForm_h3l5}+{cqtzdplForm_h4l5}+{cqtzdplForm_h5l5}+{cqtzdplForm_h6l5}+{cqtzdplForm_h7l5}",
];
var beSbdr = false;
var fbXMLData = {};
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled("bcBtn");
        $w("qykjzdInner").setDisabled("qxBtn");
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
        $w("cqtzdplForm").disable();
    }
    fbXMLData["cqtzdplForm"] = parent.zlbsfbsaveData.get("长期投资的披露（适用执行企业会计制度的企业）");
    if (fbXMLData["cqtzdplForm"] != null
			&& fbXMLData["cqtzdplForm"] != undefined
			&& fbXMLData["cqtzdplForm"].sword != null
			&& fbXMLData["cqtzdplForm"].sword != undefined
			&& fbXMLData["cqtzdplForm"].sword != "") {
        $w("cqtzdplForm").initData(fbXMLData["cqtzdplForm"]);
        //$w("cqtzdplForm").initData(parent.zlbsfbsaveData.get("长期投资的披露（适用执行企业会计制度的企业）"));
    }
    parent.$w('zzsybnsrsb').setDisabled('save');
    parent.$w('zzsybnsrsb').setDisabled('import');
    parent.$w('zzsybnsrsb').setDisabled('reset');
    //开始增加网报特色
    if (parent.beSbdr && beSbdr == false) {
        parent.$w('zzsybnsrsb').setEnabled('save');
        parent.$w('zzsybnsrsb').setEnabled('import');
        parent.$w('zzsybnsrsb').setEnabled('reset');

        if (fbXMLData["cqtzdplForm"] != null
				&& fbXMLData["cqtzdplForm"] != undefined
				&& fbXMLData["cqtzdplForm"].sword != null
				&& fbXMLData["cqtzdplForm"].sword != undefined
				&& fbXMLData["cqtzdplForm"].sword != "") {
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
    var cqtzdplForm = $w("cqtzdplForm");
    if (!cqtzdplForm.validate()) {
        return;
    }
    if (!beSbdr) {
        parent.alertmes("长期投资的披露（适用执行企业会计制度的企业）采集完成且发送成功!");
    }
    parent.zlbsfbsaveData.set("长期投资的披露（适用执行企业会计制度的企业）", cqtzdplForm.getSubmitData());
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
}

function reset() {
    parent.zlbsfbsaveData.set("长期投资的披露（适用执行企业会计制度的企业）", null);
    var form = $w("cqtzdplForm");
    form.reset();
    form.setValue("h1l1", "一、长期股权投资");
    form.setValue("h2l1", "其中：对子公司投资");
    form.setValue("h3l1", "对合营企业投资");
    form.setValue("h4l1", "对联营企业投资");
    form.setValue("h5l1", "二、长期债权投资");
    form.setValue("h6l1", "其中：国债投资");
    form.setValue("h7l1", "三、其他股权投资");
    form.setValue("h8l1", "合计");
}
/**
 * 附表打印函数
 * @return
 */
function setFbdymbuuid() {
    parent.dymbuuid = "sb000_cqtzdpl";
    parent.hxdyForPrint = "N";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "Y";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"90%"}';
    parent.printTitle = "长期投资的披露（适用执行企业会计制度的企业）";
}