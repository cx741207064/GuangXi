var beSbdr = false;
var cfcjbz;
var fbXMLData = {};
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled("bcBtn");
        $w("qykjzdInner").setDisabled("qxBtn");
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
        $w("qtzhsygxmdtjqkForm").disable();
    }
    fbXMLData["qtzhsygxmdtjqkForm"] = parent.zlbsfbsaveData.get("其他综合收益各项目的调节情况");
    if (fbXMLData["qtzhsygxmdtjqkForm"] != null
			&& fbXMLData["qtzhsygxmdtjqkForm"] != undefined
			&& fbXMLData["qtzhsygxmdtjqkForm"].sword != null
			&& fbXMLData["qtzhsygxmdtjqkForm"].sword != undefined
			&& fbXMLData["qtzhsygxmdtjqkForm"].sword != "") {
        $w("qtzhsygxmdtjqkForm").initData(fbXMLData["qtzhsygxmdtjqkForm"]);
        //$w("qtzhsygxmdtjqkForm").initData(parent.zlbsfbsaveData.get("其他综合收益各项目的调节情况"));
    }
    parent.$w('zzsybnsrsb').setDisabled('save');
    parent.$w('zzsybnsrsb').setDisabled('import');
    parent.$w('zzsybnsrsb').setDisabled('reset');
    //开始增加网报特色
    if (parent.beSbdr && beSbdr == false) {
        parent.$w('zzsybnsrsb').setEnabled('save');
        parent.$w('zzsybnsrsb').setEnabled('import');
        parent.$w('zzsybnsrsb').setEnabled('reset');

        if (fbXMLData["qtzhsygxmdtjqkForm"] != null
				&& fbXMLData["qtzhsygxmdtjqkForm"] != undefined
				&& fbXMLData["qtzhsygxmdtjqkForm"].sword != null
				&& fbXMLData["qtzhsygxmdtjqkForm"].sword != undefined
				&& fbXMLData["qtzhsygxmdtjqkForm"].sword != "") {
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
    var qtzhsygxmdtjqkForm = $w("qtzhsygxmdtjqkForm");
    if (!qtzhsygxmdtjqkForm.validate()) {
        return;
    }
    if (!beSbdr) {
        parent.alertmes("其他综合收益各项目的调节情况采集完成且发送成功!");
    }
    parent.zlbsfbsaveData.set("其他综合收益各项目的调节情况", qtzhsygxmdtjqkForm.getSubmitData());
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
    parent.zlbsfbsaveData.set("其他综合收益各项目的调节情况", null);
    //$w("qtzhsygxmdtjqkForm").setValue("h1l1","0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h1l2", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h1l3", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h1l4", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h1l5", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h1l6", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h1l7", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h1l8", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h1l9", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h1l10", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h1l11", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h1l12", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h1l13", "0.00");
    //$w("qtzhsygxmdtjqkForm").setValue("h2l1","");
    $w("qtzhsygxmdtjqkForm").setValue("h2l2", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h2l3", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h2l4", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h2l5", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h2l6", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h2l7", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h2l8", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h2l9", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h2l10", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h2l11", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h2l12", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h2l13", "0.00");
    //$w("qtzhsygxmdtjqkForm").setValue("h3l1","0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h3l2", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h3l3", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h3l4", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h3l5", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h3l6", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h3l7", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h3l8", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h3l9", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h3l10", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h3l11", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h3l12", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h3l13", "0.00");
    //$w("qtzhsygxmdtjqkForm").setValue("h4l1","");
    $w("qtzhsygxmdtjqkForm").setValue("h4l2", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h4l3", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h4l4", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h4l5", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h4l6", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h4l7", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h4l8", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h4l9", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h4l10", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h4l11", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h4l12", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h4l13", "0.00");
    //$w("qtzhsygxmdtjqkForm").setValue("h5l1","0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h5l2", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h5l3", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h5l4", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h5l5", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h5l6", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h5l7", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h5l8", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h5l9", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h5l10", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h5l11", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h5l12", "0.00");
    $w("qtzhsygxmdtjqkForm").setValue("h5l13", "0.00");
}
function text_check(object) {
    if ($chk(object.value) && object.value != '-') {
        $w("qtzhsygxmdtjqkForm").setValue(object.name, "");
        swordAlert("减少以“－”号填列！");
        return;
    }
}

/**
 * 附表打印函数
 * @return
 */
function setFbdymbuuid() {
    parent.dymbuuid = "sb000_qtzhsygxmdtjqk";
    parent.hxdyForPrint = "Y";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"54%"}';
    parent.printTitle = "其他综合收益各项目的调节情况";
}