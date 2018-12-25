var beSbdr = false;
var cfcjbz;
var fbXMLData = {};
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled("bcBtn");
        $w("qykjzdInner").setDisabled("qxBtn");
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
        $w("gdzcdplGrid1").readonly();
        $w("gdzcdplGrid2").readonly();
        $w("gdzcdplGrid3").readonly();

    }
    if (null == parent.zlbsfbsaveData.get("固定资产的披露（适用执行企业会计制度的企业）1")) {
        parent.zlbsfbsaveData.set("固定资产的披露（适用执行企业会计制度的企业）1", null);
        setgrid1();
    } else {
        fbXMLData["gdzcdplGrid1"] = parent.zlbsfbsaveData.get("固定资产的披露（适用执行企业会计制度的企业）1");
        if (fbXMLData["gdzcdplGrid1"] != null
				&& fbXMLData["gdzcdplGrid1"] != undefined
				&& fbXMLData["gdzcdplGrid1"].sword != null
				&& fbXMLData["gdzcdplGrid1"].sword != undefined
				&& fbXMLData["gdzcdplGrid1"].sword != "") {
            $w("gdzcdplGrid1").initData(fbXMLData["gdzcdplGrid1"]);
            //$w("gdzcdplGrid1").initData(parent.zlbsfbsaveData.get("固定资产的披露（适用执行企业会计制度的企业）1"));
        }
    }
    if (null == parent.zlbsfbsaveData.get("固定资产的披露（适用执行企业会计制度的企业）2")) {
        parent.zlbsfbsaveData.set("固定资产的披露（适用执行企业会计制度的企业）2", null);
        setgrid2();
    } else {
        fbXMLData["gdzcdplGrid2"] = parent.zlbsfbsaveData.get("固定资产的披露（适用执行企业会计制度的企业）2");
        if (fbXMLData["gdzcdplGrid2"] != null
				&& fbXMLData["gdzcdplGrid2"] != undefined
				&& fbXMLData["gdzcdplGrid2"].sword != null
				&& fbXMLData["gdzcdplGrid2"].sword != undefined
				&& fbXMLData["gdzcdplGrid2"].sword != "") {
            $w("gdzcdplGrid2").initData(fbXMLData["gdzcdplGrid2"]);
            //$w("gdzcdplGrid2").initData(parent.zlbsfbsaveData.get("固定资产的披露（适用执行企业会计制度的企业）2"));
        }
    }
    if (null == parent.zlbsfbsaveData.get("固定资产的披露（适用执行企业会计制度的企业）3")) {
        parent.zlbsfbsaveData.set("固定资产的披露（适用执行企业会计制度的企业）3", null);
        setgrid3();
    } else {
        fbXMLData["gdzcdplGrid3"] = parent.zlbsfbsaveData.get("固定资产的披露（适用执行企业会计制度的企业）3");
        if (fbXMLData["gdzcdplGrid3"] != null
				&& fbXMLData["gdzcdplGrid3"] != undefined
				&& fbXMLData["gdzcdplGrid3"].sword != null
				&& fbXMLData["gdzcdplGrid3"].sword != undefined
				&& fbXMLData["gdzcdplGrid3"].sword != "") {
            $w("gdzcdplGrid3").initData(fbXMLData["gdzcdplGrid3"]);
            //$w("gdzcdplGrid3").initData(parent.zlbsfbsaveData.get("固定资产的披露（适用执行企业会计制度的企业）3"));
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

        if ((fbXMLData["gdzcdplGrid1"] != null
				&& fbXMLData["gdzcdplGrid1"] != undefined
				&& fbXMLData["gdzcdplGrid1"].sword != null
				&& fbXMLData["gdzcdplGrid1"].sword != undefined
				&& fbXMLData["gdzcdplGrid1"].sword != "") ||
				(fbXMLData["gdzcdplGrid2"] != null
						&& fbXMLData["gdzcdplGrid2"] != undefined
						&& fbXMLData["gdzcdplGrid2"].sword != null
						&& fbXMLData["gdzcdplGrid2"].sword != undefined
						&& fbXMLData["gdzcdplGrid2"].sword != "") ||
						(fbXMLData["gdzcdplGrid3"] != null
								&& fbXMLData["gdzcdplGrid3"] != undefined
								&& fbXMLData["gdzcdplGrid3"].sword != null
								&& fbXMLData["gdzcdplGrid3"].sword != undefined
								&& fbXMLData["gdzcdplGrid3"].sword != "")) {
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
    var gdzcdplGrid1 = $w("gdzcdplGrid1");
    var gdzcdplGrid2 = $w("gdzcdplGrid2");
    var gdzcdplGrid3 = $w("gdzcdplGrid3");
    if (!gdzcdplGrid1.validate() || !gdzcdplGrid2.validate() || !gdzcdplGrid3.validate()) {
        return;
    }
    if (!beSbdr) {
        parent.alertmes("固定资产的披露（适用执行企业会计制度的企业）采集成功!");
    }
    parent.zlbsfbsaveData.set("固定资产的披露（适用执行企业会计制度的企业）", "a");
    parent.zlbsfbsaveData.set("固定资产的披露（适用执行企业会计制度的企业）1", gdzcdplGrid1.getAllNoDeleteGridData());
    parent.zlbsfbsaveData.set("固定资产的披露（适用执行企业会计制度的企业）2", gdzcdplGrid2.getAllNoDeleteGridData());
    parent.zlbsfbsaveData.set("固定资产的披露（适用执行企业会计制度的企业）3", gdzcdplGrid3.getAllNoDeleteGridData());
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
    parent.zlbsfbsaveData.set("固定资产的披露（适用执行企业会计制度的企业）1", null);
    parent.zlbsfbsaveData.set("固定资产的披露（适用执行企业会计制度的企业）2", null);
    parent.zlbsfbsaveData.set("固定资产的披露（适用执行企业会计制度的企业）3", null);
    setgrid1();
    setgrid2();
    setgrid3();
}

function setgrid1() {
    $w("gdzcdplGrid1").reset();
    var data = {
        'tds': {
            'xmmc': { 'value': '其中：房屋、建筑物' },
            'qcye': { 'value': '0.0' },
            'bqzj': { 'value': '0.0' },
            'bqjs': { 'value': '0.0' },
            'qmye': { 'value': '0.0' }
        }
    };
    var data1 = {
        'tds': {
            'xmmc': { 'value': '机器设备' },
            'qcye': { 'value': '0.0' },
            'bqzj': { 'value': '0.0' },
            'bqjs': { 'value': '0.0' },
            'qmye': { 'value': '0.0' }
        }
    };

    var data2 = {
        'tds': {
            'xmmc': { 'value': '运输工具' },
            'qcye': { 'value': '0.0' },
            'bqzj': { 'value': '0.0' },
            'bqjs': { 'value': '0.0' },
            'qmye': { 'value': '0.0' }
        }
    };
    $w("gdzcdplGrid1").insertRow(data);
    $w("gdzcdplGrid1").insertRow(data1);
    $w("gdzcdplGrid1").insertRow(data2);
}

function setgrid2() {
    $w("gdzcdplGrid2").reset();
    var data = {
        'tds': {
            'xmmc': { 'value': '其中：房屋、建筑物' },
            'qcye': { 'value': '0.0' },
            'bqzj': { 'value': '0.0' },
            'bqjs': { 'value': '0.0' },
            'qmye': { 'value': '0.0' }
        }
    };
    var data1 = {
        'tds': {
            'xmmc': { 'value': '机器设备' },
            'qcye': { 'value': '0.0' },
            'bqzj': { 'value': '0.0' },
            'bqjs': { 'value': '0.0' },
            'qmye': { 'value': '0.0' }
        }
    };

    var data2 = {
        'tds': {
            'xmmc': { 'value': '运输工具' },
            'qcye': { 'value': '0.0' },
            'bqzj': { 'value': '0.0' },
            'bqjs': { 'value': '0.0' },
            'qmye': { 'value': '0.0' }
        }
    };
    $w("gdzcdplGrid2").insertRow(data);
    $w("gdzcdplGrid2").insertRow(data1);
    $w("gdzcdplGrid2").insertRow(data2);
}
function setgrid3() {
    $w("gdzcdplGrid3").reset();
    var data = {
        'tds': {
            'xmmc': { 'value': '其中：房屋、建筑物' },
            'qcye': { 'value': '0.0' },
            'bqzj': { 'value': '0.0' },
            'bqjs': { 'value': '0.0' },
            'qmye': { 'value': '0.0' }
        }
    };
    var data1 = {
        'tds': {
            'xmmc': { 'value': '机器设备' },
            'qcye': { 'value': '0.0' },
            'bqzj': { 'value': '0.0' },
            'bqjs': { 'value': '0.0' },
            'qmye': { 'value': '0.0' }
        }
    };

    var data2 = {
        'tds': {
            'xmmc': { 'value': '运输工具' },
            'qcye': { 'value': '0.0' },
            'bqzj': { 'value': '0.0' },
            'bqjs': { 'value': '0.0' },
            'qmye': { 'value': '0.0' }
        }
    };
    $w("gdzcdplGrid3").insertRow(data);
    $w("gdzcdplGrid3").insertRow(data1);
    $w("gdzcdplGrid3").insertRow(data2);
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
    parent.dymbuuid = "sb000_gdzcdpl";
    parent.hxdyForPrint = "Y";
    parent.fykg = "Y";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "Y";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"100%"}';
    parent.printTitle = "固定资产的披露（适用执行企业会计制度的企业）";
}