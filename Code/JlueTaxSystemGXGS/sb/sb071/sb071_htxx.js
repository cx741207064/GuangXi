var resetresData;
var ysGrid;//存储原始的信息
var dymbuuid = "sb071_htxxprint";
var printTitle = "合同备案信息";
function init(resData) {
    ysGrid = pc.getResData("ysGrid", resData);
}

function save() {
    var checkRow = $w('htbaxxGrid').getCheckedRowData();
    if (checkRow == null) {
        swordAlert("请选择要编辑的行！", null, $("init"));
        return;
    }

    var hthxymc = checkRow.getValue("hthxymc");
    var hth = checkRow.getValue("hth");
    var htqyrq = checkRow.getValue("htqyrq");
    var htyxqx = checkRow.getValue("htyxqx");
    var htje = checkRow.getValue("htje");
    var kjywrlxrxm = checkRow.getValue("kjywrlxrxm");
    var kjywrlxdh = checkRow.getValue("kjywrlxdh");
    var kjywryzbm = checkRow.getValue("kjywryzbm");

    var fjmnsrzqjmgdqmcjdm = checkRow.getValue("fjmnsrzqjmgdqmcjdm");
    var fjmqyzwmc = checkRow.getValue("fjmqyzwmc");
    var fjmqyywmc = checkRow.getValue("fjmqyywmc");
    var zqjmgnsrzwmc = checkRow.getValue("zqjmgnsrzwmc");
    var zqjmgnsrywmc = checkRow.getValue("zqjmgnsrywmc");
    var fjmqyzqjmgzwdz = checkRow.getValue("fjmqyzqjmgzwdz");
    var fjmqyzqjmgywdz = checkRow.getValue("fjmqyzqjmgywdz");
    var fjmnsrsbh = checkRow.getValue("fjmnsrsbh");
    var gjhdqszDm = checkRow.getValue("gjhdqszDm");
    var xthtbh = checkRow.getValue("xthtbh");
    var htbz = checkRow.getValue("htbz");
    var fjmdjzclxDm = checkRow.getValue("fjmdjzclxDm");
    var fjmhyDm = checkRow.getValue("fjmhyDm");
    var qysdssdlxDm = checkRow.getValue("qysdssdlxDm");

    var backParam = {
        'fjmnsrsbh': fjmnsrsbh,
        'fjmnsrzqjmgdqmcjdm': fjmnsrzqjmgdqmcjdm,
        'fjmqyzwmc': fjmqyzwmc,
        'fjmqyywmc': fjmqyywmc,
        'zqjmgnsrzwmc': zqjmgnsrzwmc,
        'zqjmgnsrywmc': zqjmgnsrywmc,
        'fjmqyzqjmgzwdz': fjmqyzqjmgzwdz,
        'fjmqyzqjmgywdz': fjmqyzqjmgywdz,
        'hthxymc': hthxymc,
        'hth': hth,
        'htqyrq': htqyrq,
        'htyxqx': htyxqx,
        'htje': htje,
        'kjywrlxrxm': kjywrlxrxm,
        'kjywrlxdh': kjywrlxdh,
        'kjywryzbm': kjywryzbm,
        'gjhdqszDm': gjhdqszDm,
        'xthtbh': xthtbh,
        'htbz': htbz,
        'fjmdjzclxDm': fjmdjzclxDm,
        'fjmhyDm': fjmhyDm,
        'qysdssdlxDm': qysdssdlxDm
    };

    var box = this.parent[this.name];
    box.options.param.boxCallBack(backParam);
    box.close();
}

function SaveSuccess(req, res) {
    swordAlertRight("保存成功！");
    $w('saveBtn').disabled();
}

function SaveError(req, res) {
    swordAlert("保存失败！");

}

function exit() {
    var box = this.parent[this.name];
    box.options.param.qingkongKjlx();
    box.close();
}

/**
 * @description 显示查询条件
 * 
 */
function showQueryCondition() {
    $('cxtj').setStyle("display", "block");
    $w("toolbar").setHide("cxtjBtn");
    $w("toolbar").setDisplay("ycBtn");
    $w("toolbar").setDisplay("find");
}

/**
 * @description 隐藏查询条件
 */
function hideQueryCondition() {
    $('cxtj').setStyle("display", "none");
    $w("toolbar").setHide("ycBtn");
    $w("toolbar").setDisplay("cxtjBtn");
    $w("toolbar").setHide("find");
}

/**
 * @description 过滤合同信息
 */
function filterHtbaxx() {
    var ysSize = $chk(ysGrid) ? ysGrid.trs.length : 0;
    if (0 >= ysSize) {
        swordAlert("没有合同备案信息，不能进行过滤操作！");
        return;
    }

    var cxForm = $w("cxForm");
    var filterBtn = new SwordSubmit();
    filterBtn.setCtrl("SB071Kjqysdssb2015Ctrl_filterHtbaxx");
    filterBtn.setFunction('onSuccess', 'filterHtbaxxSuccess');
    filterBtn.pushData("fjmnsrsbh", $chk(cxForm.getValue("fjmnsrsbh").code) ? cxForm.getValue("fjmnsrsbh").code : "");
    filterBtn.pushData("hth", $chk(cxForm.getValue("hth").code) ? cxForm.getValue("hth").code : "");
    filterBtn.pushData('htqyrq', cxForm.getValue("htqyrq"));
    filterBtn.pushData('htyxqx', cxForm.getValue("htyxqx"));
    filterBtn.pushData(ysGrid);

    filterBtn.submit();
}

/**
 * @description 过滤成功
 */
function filterHtbaxxSuccess(req, res) {

}