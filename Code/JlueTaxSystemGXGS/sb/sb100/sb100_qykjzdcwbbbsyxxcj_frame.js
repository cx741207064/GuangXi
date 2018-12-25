/**
 ** 主表单和附表单切换
 */

var tables = new Hash({
    'table00': false,
    'table01': false,
    'table02': false,
    'table03': false
});
/**
 * 打开附表
 * @param inputEl
 * @return
 */
var sb100_boolean_fb01 = false;  //从附表1开始定义。。有几个定义几个
var sb100_boolean_fb02 = false;
var sb100_boolean_fb03 = false;
function openTab(inputEl) {
    tsxx = "";
    ccbg = "";
    displayIfram();
    var name = inputEl.get("code");
    var table00 = $("table00");
    var table01 = $("table01");
    var table02 = $("table02");
    var table03 = $("table03");
    var table01iframe = $("table01iframe");
    var table02iframe = $("table02iframe");
    var table03iframe = $("table03iframe");
    if (name == '00') {
        if (cxbj == "N") {
            $w('zzsybnsrsb').setDisabled('save');
            $w('zzsybnsrsb').setDisabled('import');
            $w('zzsybnsrsb').setDisabled('reset');
            table00.setStyle('display', '');
            table01.setStyle('display', 'none');
            table02.setStyle('display', 'none');
            table03.setStyle('display', 'none');
        } else {
            $w('zzsybnsrsb').setEnabled('save');
            $w('zzsybnsrsb').setEnabled('import');
            $w('zzsybnsrsb').setEnabled('reset');
            table00.setStyle('display', '');
            table01.setStyle('display', 'none');
            table02.setStyle('display', 'none');
            table03.setStyle('display', 'none');
        }

    } else if (name == '01') {
        // 附表按钮公共置灰
        $w('zzsybnsrsb').setDisabled('save');
        $w('zzsybnsrsb').setDisabled('import');
        $w('zzsybnsrsb').setDisabled('reset');
        table00.setStyle('display', 'none');
        table01.setStyle('display', '');
        table02.setStyle('display', 'none');
        table03.setStyle('display', 'none');
        if (!sb100_boolean_fb01) {// 没有打开过  在此地方修改 //从附表1开始定义。。有几个定义几个
            table01iframe.src = AddBizCode2URL("/sword_SB100QykjzdcwbbbsyxxcjCtrl_toSbfb.aspx?ctrl=SB100QykjzdcwbbbsyxxcjCtrl_toSbfb&id=" + name);
            sb100_boolean_fb01 = true;
        }
    } else if (name == '02') {
        // 附表按钮公共置灰
        $w('zzsybnsrsb').setDisabled('save');
        $w('zzsybnsrsb').setDisabled('import');
        $w('zzsybnsrsb').setDisabled('reset');
        table00.setStyle('display', 'none');
        table01.setStyle('display', 'none');
        table02.setStyle('display', '');
        table03.setStyle('display', 'none');
        if (!sb100_boolean_fb02) {// 没有打开过
            table02iframe.src = AddBizCode2URL("/sword_SB100QykjzdcwbbbsyxxcjCtrl_toSbfb_xjllb.aspx?ctrl=SB100QykjzdcwbbbsyxxcjCtrl_toSbfb&id=" + name);
            sb100_boolean_fb02 = true;
        }
    } else if (name == '03') {
        // 附表按钮公共置灰
        $w('zzsybnsrsb').setDisabled('save');
        $w('zzsybnsrsb').setDisabled('import');
        $w('zzsybnsrsb').setDisabled('reset');
        table00.setStyle('display', 'none');
        table01.setStyle('display', 'none');
        table02.setStyle('display', 'none');
        table03.setStyle('display', '');
        if (!sb100_boolean_fb03) {// 没有打开过
            table03iframe.src = AddBizCode2URL("/sword_SB100QykjzdcwbbbsyxxcjCtrl_toSbfb_qyb.aspx?ctrl=SB100QykjzdcwbbbsyxxcjCtrl_toSbfb&id=" + name);
            sb100_boolean_fb03 = true;
        }
    } else {
        zlbstofb(name, zlbsxlDm, nsrxxMapInit);
    }

}
/**
 * 当附表点击确定后主动显示主表
 * @return
 */
function turnToMainTab() {

    var table00 = $("table00");
    var table01 = $("table01");
    var table02 = $("table02");
    var table03 = $("table03");

    table00.setStyle('display', '');
    table01.setStyle('display', 'none');
    table02.setStyle('display', 'none');
    table03.setStyle('display', 'none');
}
