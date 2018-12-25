var beSbdr = false;
var cfcjbz;
var fbXMLData = {};
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled("bcBtn");
        $w("qykjzdInner").setDisabled("qxBtn");
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
        $w("chdplGrid").readonly();

    }
    if (null == parent.zlbsfbsaveData.get("存货的披露（适用执行企业会计制度的企业）")) {
        parent.zlbsfbsaveData.set("存货的披露（适用执行企业会计制度的企业）", null);
        $w("chdplGrid").reset();
        var data = {
            'tds': {
                'xmmc': { 'value': '原材料' },
                'qcye': { 'value': '0.0' },
                'qmye': { 'value': '0.0' }
            }
        };
        var data1 = {
            'tds': {
                'xmmc': { 'value': '库存商品' },
                'qcye': { 'value': '0.0' },
                'qmye': { 'value': '0.0' }
            }
        };

        var data2 = {
            'tds': {
                'xmmc': { 'value': '低值易耗品' },
                'qcye': { 'value': '0.0' },
                'qmye': { 'value': '0.0' }
            }
        };

        var data3 = {
            'tds': {
                'xmmc': { 'value': '包装物' },
                'qcye': { 'value': '0.0' },
                'qmye': { 'value': '0.0' }
            }
        };



        $w("chdplGrid").insertRow(data);
        $w("chdplGrid").insertRow(data1);
        $w("chdplGrid").insertRow(data2);
        $w("chdplGrid").insertRow(data3);
    } else {
        fbXMLData["chdplGrid"] = parent.zlbsfbsaveData.get("存货的披露（适用执行企业会计制度的企业）");
        if (fbXMLData["chdplGrid"] != null
				&& fbXMLData["chdplGrid"] != undefined
				&& fbXMLData["chdplGrid"].sword != null
				&& fbXMLData["chdplGrid"].sword != undefined
				&& fbXMLData["chdplGrid"].sword != "") {
            $w("chdplGrid").initData(fbXMLData["chdplGrid"]);
            //$w("chdplGrid").initData(parent.zlbsfbsaveData.get("存货的披露（适用执行企业会计制度的企业）"));
        }
    }
    parent.$w('zzsybnsrsb').setDisabled('save');
    parent.$w('zzsybnsrsb').setDisabled('import');
    parent.$w('zzsybnsrsb').setDisabled('reset');
    //开始增加网报特色
    if (parent.beSbdr && beSbdr == false) {
        parent.$w('zzsybnsrsb').setEnabled('save');
        parent.$w('zzsybnsrsb').setEnabled('import');
        parent.$w('zzsybnsrsb').setEnabled('reset');

        if (fbXMLData["chdplGrid"] != null
				&& fbXMLData["chdplGrid"] != undefined
				&& fbXMLData["chdplGrid"].sword != null
				&& fbXMLData["chdplGrid"].sword != undefined
				&& fbXMLData["chdplGrid"].sword != "") {
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

//待确定是否需要带出上期数,如果需要的话,在grid中添加onAfterCreateRow="createRow()"
function createRow(rowdata, rowEl) {

    if ("Y" != parent.sfcfcj && $chk(parent.fyaxzfllist)) {
        var xmmc = rowdata.getValue("xmmc");
        for (var i = 0; i < parent.fyaxzfllist.trs.length; i++) {
            var xmmc_ = parent.fyaxzfllist.trs[i].tds.xmmc.value;
            if (xmmc_ == xmmc) {
                var cell = rowEl.getCell("qmye");
                var je = parent.fyaxzfllist.trs[i].tds.qcye.value;
                $w("chdplGrid").updateCell(cell, je, je);
            }
        }
    }
}
/**
 * 保存操作
 */
function savefb() {
    var chdplGrid = $w("chdplGrid");
    if (!chdplGrid.validate()) {
        return;
    }
    if (!beSbdr) {
        parent.alertmes("存货的披露（适用执行企业会计制度的企业）采集成功!");
    }
    parent.zlbsfbsaveData.set("存货的披露（适用执行企业会计制度的企业）", chdplGrid.getAllNoDeleteGridData());
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
    parent.zlbsfbsaveData.set("存货的披露（适用执行企业会计制度的企业）", null);
    $w("chdplGrid").reset();
    var data = {
        'tds': {
            'xmmc': { 'value': '原材料' },
            'qcye': { 'value': '0.0' },
            'qmye': { 'value': '0.0' }
        }
    };
    var data1 = {
        'tds': {
            'xmmc': { 'value': '库存商品' },
            'qcye': { 'value': '0.0' },
            'qmye': { 'value': '0.0' }
        }
    };

    var data2 = {
        'tds': {
            'xmmc': { 'value': '低值易耗品' },
            'qcye': { 'value': '0.0' },
            'qmye': { 'value': '0.0' }
        }
    };

    var data3 = {
        'tds': {
            'xmmc': { 'value': '包装物' },
            'qcye': { 'value': '0.0' },
            'qmye': { 'value': '0.0' }
        }
    };

    $w("chdplGrid").insertRow(data);
    $w("chdplGrid").insertRow(data1);
    $w("chdplGrid").insertRow(data2);
    $w("chdplGrid").insertRow(data3);
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
    parent.dymbuuid = "sb000_chdpl";
    parent.hxdyForPrint = "N";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "Y";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"95%"}';
    parent.printTitle = "存货的披露（适用执行企业会计制度的企业）";
}