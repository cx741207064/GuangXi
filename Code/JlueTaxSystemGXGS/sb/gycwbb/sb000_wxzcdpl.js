var beSbdr = false;
var cfcjbz;
var fbXMLData = {};
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled("bcBtn");
        $w("qykjzdInner").setDisabled("qxBtn");
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
        $w("wxzcdplGrid").readonly();

    }
    fbXMLData["wxzcdplGrid"] = parent.zlbsfbsaveData.get("无形资产的披露（适用执行企业会计制度的企业）");
    if (fbXMLData["wxzcdplGrid"] != null
			&& fbXMLData["wxzcdplGrid"] != undefined
			&& fbXMLData["wxzcdplGrid"].sword != null
			&& fbXMLData["wxzcdplGrid"].sword != undefined
			&& fbXMLData["wxzcdplGrid"].sword != "") {
        $w("wxzcdplGrid").initData(fbXMLData["wxzcdplGrid"]);
    }
    parent.$w('zzsybnsrsb').setDisabled('save');
    parent.$w('zzsybnsrsb').setDisabled('import');
    parent.$w('zzsybnsrsb').setDisabled('reset');
    //开始增加网报特色
    if (parent.beSbdr && beSbdr == false) {
        parent.$w('zzsybnsrsb').setEnabled('save');
        parent.$w('zzsybnsrsb').setEnabled('import');
        parent.$w('zzsybnsrsb').setEnabled('reset');

        if (fbXMLData["wxzcdplGrid"] != null
				&& fbXMLData["wxzcdplGrid"] != undefined
				&& fbXMLData["wxzcdplGrid"].sword != null
				&& fbXMLData["wxzcdplGrid"].sword != undefined
				&& fbXMLData["wxzcdplGrid"].sword != "") {
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
    var wxzcdplGrid = $w("wxzcdplGrid");
    if (!wxzcdplGrid.validate()) {
        return;
    }

    parent.zlbsfbsaveData.set("无形资产的披露（适用执行企业会计制度的企业）", wxzcdplGrid.getAllNoDeleteGridData());
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
    if (!beSbdr) {
        parent.alertmes("无形资产的披露（适用执行企业会计制度的企业）采集完成且发送成功!");
    }
}

function reset() {
    parent.zlbsfbsaveData.set("无形资产的披露（适用执行企业会计制度的企业）", null);
    $w("wxzcdplGrid").reset();
}

function disable(rowData, rowEl, obj) {
    if (parent.cxbj == 'N') {
        obj.disableRow(rowEl);
    }
}

/**
 * 附表打印函数
 * @return
 */
function setFbdymbuuid() {
    parent.dymbuuid = "sb000_wxzcdpl";
    parent.hxdyForPrint = "Y";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "Y";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"80%"}';
    parent.printTitle = "无形资产的披露（适用执行企业会计制度的企业）";
}