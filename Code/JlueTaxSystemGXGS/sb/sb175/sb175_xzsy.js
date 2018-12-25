var sybz;// 全局变量税源标志
var djxh;// 登记序号
var ssqq;// 所属期起
var ssqz;// 所属期止
var GridData;// 存ctrl返回的grid数据
var yhbftbz;
// 页面初始化
function init(resData) {
    yhbftbz = pc.getResData("yhbftbz", resData).value;
    djxh = this.box.options.djxh;
    ssqq = this.box.options.ssqq;
    ssqz = this.box.options.ssqz;
    var xzzyFrom = $w('xzzyFrom');
    if ("Y" == yhbftbz) {
        xzzyFrom.setValue('sybzDm1', '2');
        $("div02").style.display = "block";
        $("cxtj1").style.display = "block";
    } else {
        xzzyFrom.setValue('sybzDm1', '1');
        $("div01").style.display = "block";
    }
}

/*******************************************************************************
 * 税源标志过滤船舶和车辆
 * 
 * @param {}
 *            dataObj
 * @param {}
 *            inputEl
 * @param {}
 *            obj
 * @return {}
 */
function filter(dataObj, inputEl, obj) {
    var newData = [];
    dataObj.each(function (item, index) {
        if ("Y" == yhbftbz) {
            if (item.SYBZ_DM_1 != 1 && item.SYBZ_DM_1 != 4 && item.SYBZ_DM_1 != 5 && item.SYBZ_DM_1 != 6 && item.SYBZ_DM_1 != 7)
                newData[newData.length] = item;
        } else {
            if (item.SYBZ_DM_1 != 5 && item.SYBZ_DM_1 != 6 && item.SYBZ_DM_1 != 7)
                newData[newData.length] = item;
        }

    });
    return newData;
}

/*******************************************************************************
 * 选择税源标志后，控制对应的表格显示
 * 
 * @param {}
 *            option
 * @param {}
 *            selItem
 * @param {}
 *            obj
 */
function selectxm(option, selItem, obj) {
    var xzzyFrom = $w('xzzyFrom');
    sybz = xzzyFrom.getFieldEl('sybzDm1').code;
    if (sybz == 1) {// 土地
        $("div01").style.display = "block";
        $("div02").style.display = "none";
        $("div03").style.display = "none";
        $("div04").style.display = "none";
        $("cxtj1").style.display = "none";
    } else if (sybz == 2) {// 不动产
        $("div01").style.display = "none";
        $("div02").style.display = "block";
        $("div03").style.display = "none";
        $("div04").style.display = "none";
        $("cxtj1").style.display = "block";
    } else if (sybz == 3) {// 项目
        $("div01").style.display = "none";
        $("div02").style.display = "none";
        $("div03").style.display = "block";
        $("div04").style.display = "none";
        $("cxtj1").style.display = "block";
    } else if (sybz == 4) {// 房源
        $("div01").style.display = "none";
        $("div02").style.display = "none";
        $("div03").style.display = "none";
        $("div04").style.display = "block";
        $("cxtj1").style.display = "none";
    }
    $w("syxxToolBar").setDisabled("qdBtn");
}

/**
 * 查询项目信息
 * 
 * @return 项目信息
 */
function queryxmxx() {
    var xmbh = $w('xzzyFrom').getValue("xmbh");
    var xmmc = $w('xzzyFrom').getValue("xmmc");
    sybz = $w('xzzyFrom').getFieldEl('sybzDm1').code;
    var syBtn = new SwordSubmit();
    syBtn.pushData('djxh', djxh);
    syBtn.pushData('sybz', sybz);
    syBtn.pushData('xmbh', xmbh);
    syBtn.pushData('ssqq', ssqq);
    syBtn.pushData('ssqz', ssqz);
    syBtn.pushData('xmmc', xmmc);
    syBtn.setCtrl("SB175FxmtysbCtrl_getzyxxdata");
    syBtn.setFunction('onSuccess', 'syxxOnSuccess');
    syBtn.submit();
}
/**
 * 回调函数
 * 
 * @return
 */
function syxxOnSuccess(req, res) {
    if (sybz == 1) {
        GridData = pc.getResData("tdxxGrid", res)
    } else if (sybz == 2) {
        GridData = pc.getResData("bdcxxGrid", res)
    } else if (sybz == 3) {
        GridData = pc.getResData("jzyxxGrid", res)
    } else if (sybz == 4) {
        GridData = pc.getResData("fyxxGrid", res)
    }
    if (GridData.trs.length > 0) {
        $w("syxxToolBar").setEnabled("qdBtn");
    }
}

/**
 * 点击确定按钮
 * 
 * @return
 */
function onselQd() {
    var checkzyRow;
    var checkzyRowData;
    if (sybz == 1) {
        checkzyRowData = $w('tdxxGrid').getCheckedData("xz");
        if (!$chk(checkzyRowData) || checkzyRowData.trs.length == 0) {
            swordAlert("请选择土地项目信息");
            return;
        }
    }
    if (sybz == 2) {
        checkzyRowData = pc.getWidget('bdcxxGrid').getCheckedData("xz");
        checkzyRow = pc.getWidget('bdcxxGrid').getCheckedRow("xz");
        if (!$chk(checkzyRowData) || checkzyRowData.trs.length == 0) {
            swordAlert("请选择不动产项目信息");
            return;
        }
        for (var i = 0; i < checkzyRowData.trs.length; i++) {
            var rowData = checkzyRowData.trs[i];
            var row = checkzyRow[i];
            if (!$chk(rowData.getValue("jecj"))) {
                swordAlert("请输入金额！", {
                    onOk: function () {
                        $w("bdcxxGrid").setCellFocus(
                                row.getCell("xh").get("realvalue"),
                                "jecj")
                    }
                });
                return;
            }
        }
    }
    if (sybz == 3) {
        checkzyRowData = pc.getWidget('jzyxxGrid').getCheckedData("xz");
        checkzyRow = pc.getWidget('jzyxxGrid').getCheckedRow("xz");
        if (!$chk(checkzyRowData) || checkzyRowData.trs.length == 0) {
            swordAlert("请选择建筑项目信息");
            return;
        }
        for (var i = 0; i < checkzyRowData.trs.length; i++) {
            var rowData = checkzyRowData.trs[i];
            var row = checkzyRow[i];
            if (!$chk(rowData.getValue("jecj"))) {
                swordAlert("请输入金额！", {
                    onOk: function () {
                        $w("jzyxxGrid").setCellFocus(
                                row.getCell("xh").get("realvalue"),
                                "jecj")
                    }
                });
                return;
            }
        }
    }
    if (sybz == 4) {
        checkzyRowData = pc.getWidget('fyxxGrid').getCheckedData("xz");
        if (!$chk(checkzyRowData) || checkzyRowData.trs.length == 0) {
            swordAlert("请选择房屋项目信息");
            return;
        }
    }
    $w("syxxToolBar").setDisabled("qdBtn");
    if (sybz == 2 || sybz == 3) {
        this.parent.getXmBdcSkxx(sybz, checkzyRowData);
    }
    this.parent.getsonGrid(checkzyRowData, sybz);
    box.closePopUpBox();
}

/**
 * 点击取消按钮
 * 
 * @return
 */
function onselQx() {
    var box = this.parent[this.name];
    box.closePopUpBox();
}
