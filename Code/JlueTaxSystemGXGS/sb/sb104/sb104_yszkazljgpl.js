var beSbdr = false;
var gs_gjj = [
"{yszkazljgplForm_h5l2}={yszkazljgplForm_h1l2}+{yszkazljgplForm_h2l2}+{yszkazljgplForm_h3l2}+{yszkazljgplForm_h4l2}",
"{yszkazljgplForm_h5l3}={yszkazljgplForm_h1l3}+{yszkazljgplForm_h2l3}+{yszkazljgplForm_h3l3}+{yszkazljgplForm_h4l3}"
];
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled('bcBtn');
        $w("qykjzdInner").setDisabled('qxBtn');
        $w("yszkazljgplForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
    }
    var nsrxxMap = parent.zlbsNsrxxMap;
    var nsrsbh = nsrxxMap.data.nsrsbh.value;
    var nsrmc = nsrxxMap.data.nsrmc.value;
    var skssqq = nsrxxMap.data.skssqq.value;
    var skssqz = nsrxxMap.data.skssqz.value;
    $w("yszkazljgplForm").initData(parent.zlbsfbsaveData.get("应收账款按账龄结构披露"));
    $w("nsrxxForm").setValue("nsrsbh", nsrsbh);
    $w("nsrxxForm").setValue("nsrmc", nsrmc);
    $w("nsrxxForm").setValue("skssqq", skssqq);
    $w("nsrxxForm").setValue("skssqz", skssqz);
    if (null != parent.snnmyszkazljgplForm) {
        var form = $w("yszkazljgplForm");
        form.setValue("h1l3", parent.snnmyszkazljgplForm.data.h1l2.value);
        form.setValue("h2l3", parent.snnmyszkazljgplForm.data.h2l2.value);
        form.setValue("h3l3", parent.snnmyszkazljgplForm.data.h3l2.value);
        form.setValue("h4l3", parent.snnmyszkazljgplForm.data.h4l2.value);
        form.setValue("h5l3", parent.snnmyszkazljgplForm.data.h5l2.value);
    }
    parent.$w("zzsybnsrsb").setDisabled("save");
    parent.$w("zzsybnsrsb").setDisabled("reset");
    parent.$w("zzsybnsrsb").setDisabled("import");
    //开始需要增加网报特色
    if (parent.beSbdr && beSbdr == false) {
        parent.$w('zzsybnsrsb').setEnabled('save');
        parent.$w('zzsybnsrsb').setEnabled('import');
        parent.$w('zzsybnsrsb').setEnabled('reset');
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
/**
 * 保存操作
 */
function savefb() {
    var yszkazljgplForm = $w("yszkazljgplForm");

    if (!yszkazljgplForm.validate()) {
        return;
    }

    if (!beSbdr) {
        parent.alertmes("应收账款按账龄结构披露采集完成且发送成功！");
    }
    parent.zlbsfbsaveData.set("应收账款按账龄结构披露", yszkazljgplForm.getSubmitData());
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
    parent.$w('zzsybnsrsb').setEnabled('import');
    parent.$w('zzsybnsrsb').setEnabled('reset');
}

function reset() {
    parent.zlbsfbsaveData.set("应收账款按账龄结构披露", null);
    var form = $w("yszkazljgplForm");
    form.reset();
    form.setValue("h1l1", "1年以内（含1年） ");
    form.setValue("h2l1", "1年至2年（含2年） ");
    form.setValue("h3l1", "2年至3年（含3年） ");
    form.setValue("h4l1", "3年以上");
    form.setValue("h5l1", "合计");
}
//附表变量
function setFbdymbuuid() {
    parent.dymbuuid = "sb104_yszkazljgpl";
    parent.hxdyForPrint = "N";
    parent.fykg = "N";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "N";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"100%"}';
    parent.printTitle = "应收账款按账龄结构披露（适用执行小企业会计准则的企业）";
    parent.printFileType = "excel";
}
function printhtm() {
    gyTaxPrintWordOrExcel();
}