var beSbdr = false;
var fbXMLData = {};
function initV() {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled("bcBtn");
        $w("qykjzdInner").setDisabled("qxBtn");
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
        $w("qtsygxmjsdshzrsyqkGrid1").readonly();
        $w("qtsygxmjsdshzrsyqkGrid2").readonly();
        $w("qtsygxmjsdshzrsyqkGrid3").readonly();
        function disable(rowData, rowEl, obj) {
            if (parent.cxbj == 'N') {
                obj.disableRow(rowEl);
            }
        }
    }
    if (null == parent.zlbsfbsaveData.get("其他综合收益各项目及其所得税影响和转入损益情况1")) {
        parent.zlbsfbsaveData.set("其他综合收益各项目及其所得税影响和转入损益情况1", null);
        insertAllRows();
    } else {
        fbXMLData["qtsygxmjsdshzrsyqkGrid1"] = parent.zlbsfbsaveData.get("其他综合收益各项目及其所得税影响和转入损益情况1");
        if (fbXMLData["qtsygxmjsdshzrsyqkGrid1"] != null
				&& fbXMLData["qtsygxmjsdshzrsyqkGrid1"] != undefined
				&& fbXMLData["qtsygxmjsdshzrsyqkGrid1"].sword != null
				&& fbXMLData["qtsygxmjsdshzrsyqkGrid1"].sword != undefined
				&& fbXMLData["qtsygxmjsdshzrsyqkGrid1"].sword != "") {
            $w("qtsygxmjsdshzrsyqkGrid1").initData(fbXMLData["qtsygxmjsdshzrsyqkGrid1"]);
            //$w("qtsygxmjsdshzrsyqkGrid1").initData(parent.zlbsfbsaveData.get("其他综合收益各项目及其所得税影响和转入损益情况1"));
        }
        fbXMLData["qtsygxmjsdshzrsyqkGrid2"] = parent.zlbsfbsaveData.get("其他综合收益各项目及其所得税影响和转入损益情况2");
        if (fbXMLData["qtsygxmjsdshzrsyqkGrid2"] != null
				&& fbXMLData["qtsygxmjsdshzrsyqkGrid2"] != undefined
				&& fbXMLData["qtsygxmjsdshzrsyqkGrid2"].sword != null
				&& fbXMLData["qtsygxmjsdshzrsyqkGrid2"].sword != undefined
				&& fbXMLData["qtsygxmjsdshzrsyqkGrid2"].sword != "") {
            $w("qtsygxmjsdshzrsyqkGrid2").initData(fbXMLData["qtsygxmjsdshzrsyqkGrid2"]);
            //$w("qtsygxmjsdshzrsyqkGrid2").initData(parent.zlbsfbsaveData.get("其他综合收益各项目及其所得税影响和转入损益情况2"));
        }
        fbXMLData["qtsygxmjsdshzrsyqkGrid3"] = parent.zlbsfbsaveData.get("其他综合收益各项目及其所得税影响和转入损益情况3");
        if (fbXMLData["qtsygxmjsdshzrsyqkGrid3"] != null
				&& fbXMLData["qtsygxmjsdshzrsyqkGrid3"] != undefined
				&& fbXMLData["qtsygxmjsdshzrsyqkGrid3"].sword != null
				&& fbXMLData["qtsygxmjsdshzrsyqkGrid3"].sword != undefined
				&& fbXMLData["qtsygxmjsdshzrsyqkGrid3"].sword != "") {
            $w("qtsygxmjsdshzrsyqkGrid3").initData(fbXMLData["qtsygxmjsdshzrsyqkGrid3"]);
            //$w("qtsygxmjsdshzrsyqkGrid3").initData(parent.zlbsfbsaveData.get("其他综合收益各项目及其所得税影响和转入损益情况3"));
        }
        //parent.zlbsfbsaveData.set("其他综合收益各项目及其所得税影响和转入损益情况","1");
    }
    parent.$w('zzsybnsrsb').setDisabled('save');
    parent.$w('zzsybnsrsb').setDisabled('import');
    parent.$w('zzsybnsrsb').setDisabled('reset');
    //开始增加网报特色
    if (parent.beSbdr && beSbdr == false) {
        parent.$w('zzsybnsrsb').setEnabled('save');
        parent.$w('zzsybnsrsb').setEnabled('import');
        parent.$w('zzsybnsrsb').setEnabled('reset');

        if ((fbXMLData["qtsygxmjsdshzrsyqkGrid1"] != null
				&& fbXMLData["qtsygxmjsdshzrsyqkGrid1"] != undefined
				&& fbXMLData["qtsygxmjsdshzrsyqkGrid1"].sword != null
				&& fbXMLData["qtsygxmjsdshzrsyqkGrid1"].sword != undefined
				&& fbXMLData["qtsygxmjsdshzrsyqkGrid1"].sword != "") ||
				(fbXMLData["qtsygxmjsdshzrsyqkGrid2"] != null
						&& fbXMLData["qtsygxmjsdshzrsyqkGrid2"] != undefined
						&& fbXMLData["qtsygxmjsdshzrsyqkGrid2"].sword != null
						&& fbXMLData["qtsygxmjsdshzrsyqkGrid2"].sword != undefined
						&& fbXMLData["qtsygxmjsdshzrsyqkGrid2"].sword != "") ||
				(fbXMLData["qtsygxmjsdshzrsyqkGrid3"] != null
						&& fbXMLData["qtsygxmjsdshzrsyqkGrid3"] != undefined
						&& fbXMLData["qtsygxmjsdshzrsyqkGrid3"].sword != null
						&& fbXMLData["qtsygxmjsdshzrsyqkGrid3"].sword != undefined
						&& fbXMLData["qtsygxmjsdshzrsyqkGrid3"].sword != "")) {
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
function insertAllRows() {
    var qtsygxmjsdshzrsyqkGrid1 = $w("qtsygxmjsdshzrsyqkGrid1");
    var dataObj1 = {
        tds: {
            'xmmc': { value: "一、以后不能重分类进损益的其他综合收益" },
            'ewbhxh': { value: "1001" }
        }
    };
    var dataObj2 = {
        tds: {
            'xmmc': { value: "1.重新计量设定受益计划净负债或净资产的变动" },
            'ewbhxh': { value: "1002" }
        }
    };
    var dataObj3 = {
        tds: {
            'xmmc': { value: "2.权益法下在被投资单位不能量分类进损益的其他综合收益中享有的份额" },
            'ewbhxh': { value: "1003" }
        }
    };
    qtsygxmjsdshzrsyqkGrid1.insertRow(dataObj1);
    qtsygxmjsdshzrsyqkGrid1.insertRow(dataObj2);
    qtsygxmjsdshzrsyqkGrid1.insertRow(dataObj3);

    var qtsygxmjsdshzrsyqkGrid2 = $w("qtsygxmjsdshzrsyqkGrid2");
    var dataObj201 = {
        tds: {
            'xmmc': { value: "二、以后将重分类进损益的其他综合收益" },
            'ewbhxh': { value: "2001" }
        }
    };
    var dataObj202 = {
        tds: {
            'xmmc': { value: "1.权益法下在被投资单位以后将重分类进损益的其他综合收益中享有的份额" },
            'ewbhxh': { value: "2002" }
        }
    };
    var dataObj203 = {
        tds: {
            'xmmc': { value: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减：前期计入其他综合收益当期转入损益" },
            'ewbhxh': { value: "2003" }
        }
    };
    var dataObj204 = {
        tds: {
            'xmmc': { value: "小计" },
            'ewbhxh': { value: "2004" }
        }
    };
    var dataObj205 = {
        tds: {
            'xmmc': { value: "2.可供出售金融资产公允价值变动损益" },
            'ewbhxh': { value: "2005" }
        }
    };
    var dataObj206 = {
        tds: {
            'xmmc': { value: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减：前期计入其他综合收益当期转入损益" },
            'ewbhxh': { value: "2006" }
        }
    };
    var dataObj207 = {
        tds: {
            'xmmc': { value: "小计" },
            'ewbhxh': { value: "2007" }
        }
    };
    var dataObj208 = {
        tds: {
            'xmmc': { value: "3.持有至到期投资主分类为可供出售金融资产损益" },
            'ewbhxh': { value: "2008" }
        }
    };
    var dataObj209 = {
        tds: {
            'xmmc': { value: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减：前期计入其他综合收益当期转入损益" },
            'ewbhxh': { value: "2009" }
        }
    };
    var dataObj210 = {
        tds: {
            'xmmc': { value: "小计" },
            'ewbhxh': { value: "2010" }
        }
    };
    var dataObj211 = {
        tds: {
            'xmmc': { value: "4.现金流量套期归损益的有效部分" },
            'ewbhxh': { value: "2011" }
        }
    };
    var dataObj212 = {
        tds: {
            'xmmc': { value: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减：前期计入其他综合收益当期转入损益" },
            'ewbhxh': { value: "2012" }
        }
    };
    var dataObj213 = {
        tds: {
            'xmmc': { value: "转为被套期项目初始确认金额的调整额" },
            'ewbhxh': { value: "2013" }
        }
    };
    var dataObj214 = {
        tds: {
            'xmmc': { value: "小计" },
            'ewbhxh': { value: "2014" }
        }
    };
    var dataObj215 = {
        tds: {
            'xmmc': { value: "5.外币财务报表折算差额" },
            'ewbhxh': { value: "2015" }
        }
    };
    var dataObj216 = {
        tds: {
            'xmmc': { value: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减：前期计入其他综合收益当期转入损益" },
            'ewbhxh': { value: "2016" }
        }
    };
    var dataObj217 = {
        tds: {
            'xmmc': { value: "小计" },
            'ewbhxh': { value: "2017" }
        }
    };
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj201);
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj202);
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj203);
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj204);
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj205);
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj206);
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj207);
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj208);
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj209);
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj210);
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj211);
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj212);
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj213);
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj214);
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj215);
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj216);
    qtsygxmjsdshzrsyqkGrid2.insertRow(dataObj217);

    var qtsygxmjsdshzrsyqkGrid3 = $w("qtsygxmjsdshzrsyqkGrid3");
    var dataObj301 = {
        tds: {
            'xmmc': { value: "三、其他综合收益合计" },
            'ewbhxh': { value: "3001" }
        }
    };
    qtsygxmjsdshzrsyqkGrid3.insertRow(dataObj301);
}
/**
 * 保存操作
 */
function savefb() {
    var qtsygxmjsdshzrsyqkGrid1 = $w("qtsygxmjsdshzrsyqkGrid1");
    var qtsygxmjsdshzrsyqkGrid2 = $w("qtsygxmjsdshzrsyqkGrid2");
    var qtsygxmjsdshzrsyqkGrid3 = $w("qtsygxmjsdshzrsyqkGrid3");
    if (!qtsygxmjsdshzrsyqkGrid1.validate() || !qtsygxmjsdshzrsyqkGrid2.validate() || !qtsygxmjsdshzrsyqkGrid3.validate()) {
        return;
    }
    if (!beSbdr) {
        parent.alertmes("其他综合收益各项目及其所得税影响和转入损益情况采集成功!");
    }
    parent.zlbsfbsaveData.set("其他综合收益各项目及其所得税影响和转入损益情况", "1");
    parent.zlbsfbsaveData.set("其他综合收益各项目及其所得税影响和转入损益情况1", $w("qtsygxmjsdshzrsyqkGrid1").getAllNoDeleteGridData());
    parent.zlbsfbsaveData.set("其他综合收益各项目及其所得税影响和转入损益情况2", $w("qtsygxmjsdshzrsyqkGrid2").getAllNoDeleteGridData());
    parent.zlbsfbsaveData.set("其他综合收益各项目及其所得税影响和转入损益情况3", $w("qtsygxmjsdshzrsyqkGrid3").getAllNoDeleteGridData());
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
function afterCreateQtsygxmjsdshzrsyqkGrid1Row(rowData, rowEl, obj) {
    var ewbhxh = rowEl.getCell('ewbhxh').get('realValue');
    if (ewbhxh == '1001' || ewbhxh == '1002' || ewbhxh == '1003') {
        rowEl.disable('xmmc');
    }
    else {
        rowEl.enable('xmmc');
    }
    if (parent.cxbj == 'N') {
        obj.disableRow(rowEl);
    }
}
function afterCreateQtsygxmjsdshzrsyqkGrid2Row(rowData, rowEl, obj) {
    var ewbhxh = rowEl.getCell('ewbhxh').get('realValue');
    if (ewbhxh / 1 < 2018) {
        rowEl.disable('xmmc');
        if (ewbhxh / 1 == 2004 || ewbhxh / 1 == 2007 || ewbhxh / 1 == 2010 || ewbhxh / 1 == 2014 || ewbhxh / 1 == 2017) {
            rowEl.disable('bqfseSqje');
            rowEl.disable('bqfseSds');
            rowEl.disable('bqfseShje');
            rowEl.disable('sqfseSqje');
            rowEl.disable('sqfseSds');
            rowEl.disable('sqfseShje');
        }
    }
    else {
        rowEl.enable('xmmc');
    }
    if (parent.cxbj == 'N') {
        obj.disableRow(rowEl);
    }
}
function jsHj(realvalue, showvalue, rowData, cellEl, rowEl, oldValue, obj) {
    var ewbhxh = rowData.getValue("ewbhxh");
    var rowEls = $w("qtsygxmjsdshzrsyqkGrid2").dataDiv().getChildren();
    if (ewbhxh / 1 < 2004 && ewbhxh / 1 > 2001) {
        //var bqfseSqje0=rowEls[0].getCell('bqfseSqje').get('realValue')/1;
        var bqfseSqje1 = rowEls[1].getCell('bqfseSqje').get('realValue') / 1;
        var bqfseSqje2 = rowEls[2].getCell('bqfseSqje').get('realValue') / 1;
        var bqfseSqje = bqfseSqje1.subtract(bqfseSqje2);
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[3].getCell('bqfseSqje'), bqfseSqje);
        //var bqfseSds0=rowEls[0].getCell('bqfseSds').get('realValue')/1;
        var bqfseSds1 = rowEls[1].getCell('bqfseSds').get('realValue') / 1;
        var bqfseSds2 = rowEls[2].getCell('bqfseSds').get('realValue') / 1;
        var bqfseSds = bqfseSds1.subtract(bqfseSds2);
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[3].getCell('bqfseSds'), bqfseSds);
        //var bqfseShje0=rowEls[0].getCell('bqfseShje').get('realValue')/1;
        var bqfseShje1 = rowEls[1].getCell('bqfseShje').get('realValue') / 1;
        var bqfseShje2 = rowEls[2].getCell('bqfseShje').get('realValue') / 1;
        var bqfseShje = bqfseShje1.subtract(bqfseShje2);
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[3].getCell('bqfseShje'), bqfseShje);
        //var sqfseSqje0=rowEls[0].getCell('sqfseSqje').get('realValue')/1;
        var sqfseSqje1 = rowEls[1].getCell('sqfseSqje').get('realValue') / 1;
        var sqfseSqje2 = rowEls[2].getCell('sqfseSqje').get('realValue') / 1;
        var sqfseSqje = sqfseSqje1.subtract(sqfseSqje2);
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[3].getCell('sqfseSqje'), sqfseSqje);
        //var sqfseSds0=rowEls[0].getCell('sqfseSds').get('realValue')/1;
        var sqfseSds1 = rowEls[1].getCell('sqfseSds').get('realValue') / 1;
        var sqfseSds2 = rowEls[2].getCell('sqfseSds').get('realValue') / 1;
        var sqfseSds = sqfseSds1.subtract(sqfseSds2);
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[3].getCell('sqfseSds'), sqfseSds);
        //var sqfseShje0=rowEls[0].getCell('sqfseShje').get('realValue')/1;
        var sqfseShje1 = rowEls[1].getCell('sqfseShje').get('realValue') / 1;
        var sqfseShje2 = rowEls[2].getCell('sqfseShje').get('realValue') / 1;
        var sqfseShje = sqfseShje1.subtract(sqfseShje2);
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[3].getCell('sqfseShje'), sqfseShje);
    }
    else if (ewbhxh / 1 < 2007) {
        var bqfseSqje4 = rowEls[4].getCell('bqfseSqje').get('realValue') / 1;
        var bqfseSqje5 = rowEls[5].getCell('bqfseSqje').get('realValue') / 1;
        var bqfseSqje = bqfseSqje4.subtract(bqfseSqje5);
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[6].getCell('bqfseSqje'), bqfseSqje);
        var bqfseSds4 = rowEls[4].getCell('bqfseSds').get('realValue') / 1;
        var bqfseSds5 = rowEls[5].getCell('bqfseSds').get('realValue') / 1;
        var bqfseSds = bqfseSds4.subtract(bqfseSds5)
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[6].getCell('bqfseSds'), bqfseSds);
        var bqfseShje4 = rowEls[4].getCell('bqfseShje').get('realValue') / 1;
        var bqfseShje5 = rowEls[5].getCell('bqfseShje').get('realValue') / 1;
        var bqfseShje = bqfseShje4.subtract(bqfseShje5)
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[6].getCell('bqfseShje'), bqfseShje);
        var sqfseSqje4 = rowEls[4].getCell('sqfseSqje').get('realValue') / 1;
        var sqfseSqje5 = rowEls[5].getCell('sqfseSqje').get('realValue') / 1;
        var sqfseSqje = sqfseSqje4.subtract(sqfseSqje5)
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[6].getCell('sqfseSqje'), sqfseSqje);
        var sqfseSds4 = rowEls[4].getCell('sqfseSds').get('realValue') / 1;
        var sqfseSds5 = rowEls[5].getCell('sqfseSds').get('realValue') / 1;
        var sqfseSds = sqfseSds4.subtract(sqfseSds5)
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[6].getCell('sqfseSds'), sqfseSds);
        var sqfseShje4 = rowEls[4].getCell('sqfseShje').get('realValue') / 1;
        var sqfseShje5 = rowEls[5].getCell('sqfseShje').get('realValue') / 1;
        var sqfseShje = sqfseShje4.subtract(sqfseShje5)
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[6].getCell('sqfseShje'), sqfseShje);
    }
    else if (ewbhxh / 1 < 2010) {
        var bqfseSqje7 = rowEls[7].getCell('bqfseSqje').get('realValue') / 1;
        var bqfseSqje8 = rowEls[8].getCell('bqfseSqje').get('realValue') / 1;
        var bqfseSqje = bqfseSqje7.subtract(bqfseSqje8);
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[9].getCell('bqfseSqje'), bqfseSqje);
        var bqfseSds7 = rowEls[7].getCell('bqfseSds').get('realValue') / 1;
        var bqfseSds8 = rowEls[8].getCell('bqfseSds').get('realValue') / 1;
        var bqfseSds = bqfseSds7.subtract(bqfseSds8)
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[9].getCell('bqfseSds'), bqfseSds);
        var bqfseShje7 = rowEls[7].getCell('bqfseShje').get('realValue') / 1;
        var bqfseShje8 = rowEls[8].getCell('bqfseShje').get('realValue') / 1;
        var bqfseShje = bqfseShje7.subtract(bqfseShje8)
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[9].getCell('bqfseShje'), bqfseShje);
        var sqfseSqje7 = rowEls[7].getCell('sqfseSqje').get('realValue') / 1;
        var sqfseSqje8 = rowEls[8].getCell('sqfseSqje').get('realValue') / 1;
        var sqfseSqje = sqfseSqje7.subtract(sqfseSqje8)
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[9].getCell('sqfseSqje'), sqfseSqje);
        var sqfseSds7 = rowEls[7].getCell('sqfseSds').get('realValue') / 1;
        var sqfseSds8 = rowEls[8].getCell('sqfseSds').get('realValue') / 1;
        var sqfseSds = sqfseSds7.subtract(sqfseSds8)
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[9].getCell('sqfseSds'), sqfseSds);
        var sqfseShje7 = rowEls[7].getCell('sqfseShje').get('realValue') / 1;
        var sqfseShje8 = rowEls[8].getCell('sqfseShje').get('realValue') / 1;
        var sqfseShje = sqfseShje7.subtract(sqfseShje8)
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[9].getCell('sqfseShje'), sqfseShje);
    }
    else if (ewbhxh / 1 < 2014) {
        var bqfseSqje0 = rowEls[10].getCell('bqfseSqje').get('realValue') / 1;
        var bqfseSqje1 = rowEls[11].getCell('bqfseSqje').get('realValue') / 1;
        var bqfseSqje2 = rowEls[12].getCell('bqfseSqje').get('realValue') / 1;
        var bqfseSqje = bqfseSqje0.subtract(bqfseSqje1).subtract(bqfseSqje2);
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[13].getCell('bqfseSqje'), bqfseSqje);
        var bqfseSds0 = rowEls[10].getCell('bqfseSds').get('realValue') / 1;
        var bqfseSds1 = rowEls[11].getCell('bqfseSds').get('realValue') / 1;
        var bqfseSds2 = rowEls[12].getCell('bqfseSds').get('realValue') / 1;
        var bqfseSds = bqfseSds0.subtract(bqfseSds1).subtract(bqfseSds2);
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[13].getCell('bqfseSds'), bqfseSds);
        var bqfseShje0 = rowEls[10].getCell('bqfseShje').get('realValue') / 1;
        var bqfseShje1 = rowEls[11].getCell('bqfseShje').get('realValue') / 1;
        var bqfseShje2 = rowEls[12].getCell('bqfseShje').get('realValue') / 1;
        var bqfseShje = bqfseShje0.subtract(bqfseShje1).subtract(bqfseShje2);
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[13].getCell('bqfseShje'), bqfseShje);
        var sqfseSqje0 = rowEls[10].getCell('sqfseSqje').get('realValue') / 1;
        var sqfseSqje1 = rowEls[11].getCell('sqfseSqje').get('realValue') / 1;
        var sqfseSqje2 = rowEls[12].getCell('sqfseSqje').get('realValue') / 1;
        var sqfseSqje = sqfseSqje0.subtract(sqfseSqje1).subtract(sqfseSqje2);
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[13].getCell('sqfseSqje'), sqfseSqje);
        var sqfseSds0 = rowEls[10].getCell('sqfseSds').get('realValue') / 1;
        var sqfseSds1 = rowEls[11].getCell('sqfseSds').get('realValue') / 1;
        var sqfseSds2 = rowEls[12].getCell('sqfseSds').get('realValue') / 1;
        var sqfseSds = sqfseSds0.subtract(sqfseSds1).subtract(sqfseSds2);
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[13].getCell('sqfseSds'), sqfseSds);
        var sqfseShje0 = rowEls[10].getCell('sqfseShje').get('realValue') / 1;
        var sqfseShje1 = rowEls[11].getCell('sqfseShje').get('realValue') / 1;
        var sqfseShje2 = rowEls[12].getCell('sqfseShje').get('realValue') / 1;
        var sqfseShje = sqfseShje0.subtract(sqfseShje1).subtract(sqfseShje2);
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[13].getCell('sqfseShje'), sqfseShje);
    }
    else if (ewbhxh / 1 < 2017) {
        var bqfseSqje14 = rowEls[14].getCell('bqfseSqje').get('realValue') / 1;
        var bqfseSqje15 = rowEls[15].getCell('bqfseSqje').get('realValue') / 1;
        var bqfseSqje = bqfseSqje14.subtract(bqfseSqje15);
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[16].getCell('bqfseSqje'), bqfseSqje);
        var bqfseSds14 = rowEls[14].getCell('bqfseSds').get('realValue') / 1;
        var bqfseSds15 = rowEls[15].getCell('bqfseSds').get('realValue') / 1;
        var bqfseSds = bqfseSds14.subtract(bqfseSds15)
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[16].getCell('bqfseSds'), bqfseSds);
        var bqfseShje14 = rowEls[14].getCell('bqfseShje').get('realValue') / 1;
        var bqfseShje15 = rowEls[15].getCell('bqfseShje').get('realValue') / 1;
        var bqfseShje = bqfseShje14.subtract(bqfseShje15)
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[16].getCell('bqfseShje'), bqfseShje);
        var sqfseSqje14 = rowEls[14].getCell('sqfseSqje').get('realValue') / 1;
        var sqfseSqje15 = rowEls[15].getCell('sqfseSqje').get('realValue') / 1;
        var sqfseSqje = sqfseSqje14.subtract(sqfseSqje15)
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[16].getCell('sqfseSqje'), sqfseSqje);
        var sqfseSds14 = rowEls[14].getCell('sqfseSds').get('realValue') / 1;
        var sqfseSds15 = rowEls[15].getCell('sqfseSds').get('realValue') / 1;
        var sqfseSds = sqfseSds14.subtract(sqfseSds15)
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[16].getCell('sqfseSds'), sqfseSds);
        var sqfseShje14 = rowEls[14].getCell('sqfseShje').get('realValue') / 1;
        var sqfseShje15 = rowEls[15].getCell('sqfseShje').get('realValue') / 1;
        var sqfseShje = sqfseShje14.subtract(sqfseShje15)
        $w('qtsygxmjsdshzrsyqkGrid2').updateCell(rowEls[16].getCell('sqfseShje'), sqfseShje);
    }
}
function afterCreateQtsygxmjsdshzrsyqkGrid3Row(rowData, rowEl, obj) {
    rowEl.disable('xmmc');
    if (parent.cxbj == 'N') {
        obj.disableRow(rowEl);
    }
}
/*******************************************************************************
 * 删除
 * 
 * @return
 */
function delrow1() {
    var row = $w("qtsygxmjsdshzrsyqkGrid1").getCheckedRow();
    if (row == "" || row == null) {
        swordAlert("请选择行")
        return;
    } else {
        var ewbhxh = row.getCell('ewbhxh').get('realValue');
        if (ewbhxh == '1001' || ewbhxh == '1002' || ewbhxh == '1003') {
            swordAlert("不允许删除，请选择新增加的行进行删除！")
            return;
        }
        else {
            $w("qtsygxmjsdshzrsyqkGrid1").deleting(row);
        }

    }
}
function insertrow1() {
    //首先获取最大二维表行序号
    var rowEls = $w("qtsygxmjsdshzrsyqkGrid1").dataDiv().getChildren();
    var maxewbhxh = 1003;
    rowEls.each(function (rowEl, index) {
        var ewbhxh = rowEl.getCell('ewbhxh').get('realvalue');
        if ($chk(ewbhxh)) {
            if (ewbhxh / 1 > maxewbhxh) {
                maxewbhxh = ewbhxh / 1;
            }
            if (ewbhxh == '1001' || ewbhxh == '1002' || ewbhxh == '1003') {
                rowEl.disable('xmmc');
            }
            else {
                rowEl.enable('xmmc');
            }
        }
    });
    var dataObj = {
        tds: {
            "ewbhxh": {
                "value": maxewbhxh + 1
            }
        }
    };
    $w("qtsygxmjsdshzrsyqkGrid1").insertRow(dataObj);
}
/*******************************************************************************
 * 删除
 * 
 * @return
 */
function delrow2() {
    var row = $w("qtsygxmjsdshzrsyqkGrid2").getCheckedRow();
    if (row == "" || row == null) {
        swordAlert("请选择行")
        return;
    } else {
        var ewbhxh = row.getCell('ewbhxh').get('realValue');
        if (ewbhxh / 1 < 2018) {
            swordAlert("不允许删除，请选择新增加的行进行删除！")
            return;
        }
        else {
            $w("qtsygxmjsdshzrsyqkGrid2").deleting(row);
        }

    }
}
function insertrow2() {
    //首先获取最大二维表行序号
    var rowEls = $w("qtsygxmjsdshzrsyqkGrid2").dataDiv().getChildren();
    var maxewbhxh = 2018;
    rowEls.each(function (rowEl, index) {
        var ewbhxh = rowEl.getCell('ewbhxh').get('realvalue');
        if ($chk(ewbhxh)) {
            if (ewbhxh / 1 > maxewbhxh) {
                maxewbhxh = ewbhxh / 1;
            }
            if (ewbhxh / 1 < 2018) {
                rowEl.disable('xmmc');
            }
            else {
                rowEl.enable('xmmc');
            }
        }
    });
    var dataObj = {
        tds: {
            "ewbhxh": {
                "value": maxewbhxh + 1
            }
        }
    };
    $w("qtsygxmjsdshzrsyqkGrid2").insertRow(dataObj);
}
function reset() {
    $w("qtsygxmjsdshzrsyqkGrid1").reset();
    $w("qtsygxmjsdshzrsyqkGrid2").reset();
    $w("qtsygxmjsdshzrsyqkGrid3").reset();
    insertAllRows();
}
/**
 * 附表打印函数
 * @return
 */
function setFbdymbuuid() {
    parent.dymbuuid = "sb000_qtsygxmjsdshzrsyqk";
    parent.hxdyForPrint = "Y";
    parent.fykg = "Y";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "Y";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"85%"}';
    parent.printTitle = "其他综合收益各项目及其所得税影响和转入损益情况";
}
