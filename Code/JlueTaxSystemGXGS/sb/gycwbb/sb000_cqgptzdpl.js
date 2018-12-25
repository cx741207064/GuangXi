var beSbdr = false;
var cfcjbz;
var fbXMLData = {};
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled("bcBtn");
        $w("qykjzdInner").setDisabled("qxBtn");
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
        $w("cqgptzdplGrid").readonly();
    }
    fbXMLData["cqgptzdplGrid"] = parent.zlbsfbsaveData.get("长期股票投资的披露（适用执行企业会计制度的企业）");
    if (fbXMLData["cqgptzdplGrid"] != null
			&& fbXMLData["cqgptzdplGrid"] != undefined
			&& fbXMLData["cqgptzdplGrid"].sword != null
			&& fbXMLData["cqgptzdplGrid"].sword != undefined
			&& fbXMLData["cqgptzdplGrid"].sword != "") {
        $w("cqgptzdplGrid").initData(fbXMLData["cqgptzdplGrid"]);
        //$w("cqgptzdplGrid").initData(parent.zlbsfbsaveData.get("长期股票投资的披露（适用执行企业会计制度的企业）"));
    }
    parent.$w('zzsybnsrsb').setDisabled('save');
    parent.$w('zzsybnsrsb').setDisabled('import');
    parent.$w('zzsybnsrsb').setDisabled('reset');
    //开始增加网报特色
    if (parent.beSbdr && beSbdr == false) {
        parent.$w('zzsybnsrsb').setEnabled('save');
        parent.$w('zzsybnsrsb').setEnabled('import');
        parent.$w('zzsybnsrsb').setEnabled('reset');

        if (fbXMLData["cqgptzdplGrid"] != null
				&& fbXMLData["cqgptzdplGrid"] != undefined
				&& fbXMLData["cqgptzdplGrid"].sword != null
				&& fbXMLData["cqgptzdplGrid"].sword != undefined
				&& fbXMLData["cqgptzdplGrid"].sword != "") {
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
    var cqgptzdplGrid = $w("cqgptzdplGrid");
    if (!cqgptzdplGrid.validate()) {
        return;
    }
    if (!beSbdr) {
        parent.alertmes("长期股票投资的披露（适用执行企业会计制度的企业）采集完成且发送成功!");
    }
    parent.zlbsfbsaveData.set("长期股票投资的披露（适用执行企业会计制度的企业）", cqgptzdplGrid.getAllNoDeleteGridData());
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
    parent.zlbsfbsaveData.set("长期股票投资的披露（适用执行企业会计制度的企业）", null);
    $w("cqgptzdplGrid").reset();
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
    parent.dymbuuid = "sb000_cqgptzdpl";
    parent.hxdyForPrint = "Y";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "Y";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"100%"}';
    parent.printTitle = "长期股票投资的披露（适用执行企业会计制度的企业）";
}