var beSbdr = false;
var cfcjbz;
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled('bcBtn');
        $w("qykjzdInner").setDisabled('qxBtn');
        $w("xqykjzzfzForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
    }
    var nsrxxMap = parent.zlbsNsrxxMap;
    var nsrsbh = nsrxxMap.data.nsrsbh.value;
    var nsrmc = nsrxxMap.data.nsrmc.value;
    $w("xqykjzzfzForm").initData(parent.zlbsfbsaveData.get("小企业会计准则附注"));
    $w("xqykjzzfzForm").setValue("nsrsbh", nsrsbh);
    $w("xqykjzzfzForm").setValue("nsrmc", nsrmc);
    var ssqq = "";
    var skssqq = nsrxxMap.data.skssqq.value;
    if ($chk(skssqq)) {
        ssqq = skssqq.substring(0, 4);
        $w("xqykjzzfzForm").setValue("bsnd", ssqq);
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
    var xqykjzzfzForm = $w("xqykjzzfzForm");

    if (!xqykjzzfzForm.validate()) {
        return;
    }

    if (!beSbdr) {
        parent.alertmes("小企业会计准则附注采集完成且发送成功！");
    }
    parent.zlbsfbsaveData.set("小企业会计准则附注", xqykjzzfzForm.getSubmitData());
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
    parent.zlbsfbsaveData.set("小企业会计准则附注", null);
    $w("xqykjzzfzForm").setValue("bz11", "");
    $w("xqykjzzfzForm").setValue("bz12", "");
    $w("xqykjzzfzForm").setValue("bz13", "");
    $w("xqykjzzfzForm").setValue("bz14", "");
    $w("xqykjzzfzForm").setValue("bz15", "");
    $w("xqykjzzfzForm").setValue("bz16", "");
    $w("xqykjzzfzForm").setValue("bz17", "");
    $w("xqykjzzfzForm").setValue("bz18", "");
}
//附表变量
function setFbdymbuuid() {
    parent.dymbuuid = "sb104_qykjzzfz";
    parent.hxdyForPrint = "Y";
    parent.fykg = "Y";
    parent.zzlx = "A4";
    parent.caculateGridHJFlag = "N";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"100%"}';
    parent.printTitle = "小企业会计准则附注";
    parent.printFileType = "excel";
}
function printhtm() {
    gyTaxPrintWordOrExcel();
}