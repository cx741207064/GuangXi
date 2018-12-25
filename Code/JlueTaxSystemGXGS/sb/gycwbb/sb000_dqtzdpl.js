var gs_gjj = [
"{dqtzdplForm_h7l2}={dqtzdplForm_h1l2}+{dqtzdplForm_h2l2}+{dqtzdplForm_h3l2}+{dqtzdplForm_h4l2}+{dqtzdplForm_h5l2}+{dqtzdplForm_h6l2}",
"{dqtzdplForm_h7l3}={dqtzdplForm_h1l3}+{dqtzdplForm_h2l3}+{dqtzdplForm_h3l3}+{dqtzdplForm_h4l3}+{dqtzdplForm_h5l3}+{dqtzdplForm_h6l3}",
"{dqtzdplForm_h7l4}={dqtzdplForm_h1l4}+{dqtzdplForm_h2l4}+{dqtzdplForm_h3l4}+{dqtzdplForm_h4l4}+{dqtzdplForm_h5l4}+{dqtzdplForm_h6l4}",
"{dqtzdplForm_h7l5}={dqtzdplForm_h1l5}+{dqtzdplForm_h2l5}+{dqtzdplForm_h3l5}+{dqtzdplForm_h4l5}+{dqtzdplForm_h5l5}+{dqtzdplForm_h6l5}",
];
var beSbdr = false;
var fbXMLData = {};
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled("bcBtn");
        $w("qykjzdInner").setDisabled("qxBtn");
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
        $w("dqtzdplForm").disable();
    }
    fbXMLData["dqtzdplForm"] = parent.zlbsfbsaveData.get("短期投资的披露（适用执行企业会计制度的企业）");
    if (fbXMLData["dqtzdplForm"] != null
			&& fbXMLData["dqtzdplForm"] != undefined
			&& fbXMLData["dqtzdplForm"].sword != null
			&& fbXMLData["dqtzdplForm"].sword != undefined
			&& fbXMLData["dqtzdplForm"].sword != "") {
        $w("dqtzdplForm").initData(fbXMLData["dqtzdplForm"]);
        //$w("dqtzdplForm").initData(parent.zlbsfbsaveData.get("短期投资的披露（适用执行企业会计制度的企业）"));
    }

    parent.$w('zzsybnsrsb').setDisabled('save');
    parent.$w('zzsybnsrsb').setDisabled('import');
    parent.$w('zzsybnsrsb').setDisabled('reset');
    //开始增加网报特色
    if (parent.beSbdr && beSbdr == false) {
        parent.$w('zzsybnsrsb').setEnabled('save');
        parent.$w('zzsybnsrsb').setEnabled('import');
        parent.$w('zzsybnsrsb').setEnabled('reset');

        if (fbXMLData["dqtzdplForm"] != null
				&& fbXMLData["dqtzdplForm"] != undefined
				&& fbXMLData["dqtzdplForm"].sword != null
				&& fbXMLData["dqtzdplForm"].sword != undefined
				&& fbXMLData["dqtzdplForm"].sword != "") {
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
    var dqtzdplForm = $w("dqtzdplForm");
    if (!dqtzdplForm.validate()) {
        return;
    }
    if (!beSbdr) {
        parent.alertmes("短期投资的披露（适用执行企业会计制度的企业）采集完成且发送成功!");
    }
    parent.zlbsfbsaveData.set("短期投资的披露（适用执行企业会计制度的企业）", dqtzdplForm.getSubmitData());
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
    parent.zlbsfbsaveData.set("短期投资的披露（适用执行企业会计制度的企业）", null);
    var form = $w("dqtzdplForm");
    form.reset();
    form.setValue("h1l1", "一、股权投资合计");
    form.setValue("h2l1", "其中：股票投资");
    form.setValue("h3l1", "二、债券投资");
    form.setValue("h4l1", "其中：国债投资");
    form.setValue("h5l1", "其他债券");
    form.setValue("h6l1", "三、其他投资");
    form.setValue("h7l1", "合计");

}

/**
 * 附表打印函数
 * @return
 */
function setFbdymbuuid() {
    parent.dymbuuid = "sb000_dqtzdpl";
    parent.hxdyForPrint = "N";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "Y";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"90%"}';
    parent.printTitle = "短期投资的披露（适用执行企业会计制度的企业）";
}