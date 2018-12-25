var sbdrtid;
var gydr_yzpzzlDm;
var gydrCtrl;
var gydrYzpzzlDm;
var djxh;

var gydr_sbcwgzmap;


/**
 * 页面初始化方法，获取参数
 * @param res
 * @return
 */
function init(res) {
    gydrCtrl = res.getAttr("gydrCtrl");
    gydrYzpzzlDm = res.getAttr("gydrYzpzzlDm");
    djxh = res.getAttr("djxh");

    gydr_sbcwgzmap = pc.getResData("cwgzMap", res);
}
/**
 * 退出功能实现
 * @param res
 * @return
 */
function onFileCommitAfter(res) {
    var box = this.parent[this.name];
    box.options.param.callbackres = JSON.encode(res);
    box.options.param.boxCallBackForSBdr(res);
    box.close();
}


/**
 * 设置提交参数
 * @return
 */
function setTid() {
    var importBtn = $w("importBtn");
    var fileName = drForm.value;
    if (!$chk(fileName)) {
        importBtn.stop();
        swordAlert('请选择要导入的文件！');
        return;
    }
    var fileNameAttr = fileName.substring(fileName.lastIndexOf(".") + 1);
    if (fileNameAttr == "xls" || fileNameAttr == "xlsx") {
        importBtn.pushData('drlx', "xls");
    } else if (fileNameAttr == "xml") {
        importBtn.pushData('drlx', "xml");
    } else {
        importBtn.stop();
        swordAlert('导入文件必须是Excel文件或者XML文件！');
        return;
    }

    importBtn.pushData('gydrCtrl', gydrCtrl);
    importBtn.pushData('gydrYzpzzlDm', gydrYzpzzlDm);
    importBtn.pushData('djxh', djxh);

    if (gydr_sbcwgzmap != null) {
        importBtn.pushData(gydr_sbcwgzmap);
    }

    importBtn.setCtrl(gydrCtrl);
    swordAlertRight('数据导入中，请勿关闭该页面！');

}