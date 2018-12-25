/**
 ** 主表单和附表单切换
 */
var tables = new Hash({
    'table00': false,
    'table01': false,
    'table02': false
});
/**
 * 打开附表
 * @param inputEl
 * @return
 */
function openTab(inputEl) {
    var name = inputEl.get("code");
    //parent.tableCode = name;
    var table_name = "table" + name;
    var iframe_name = table_name + "iframe";
    var sbxxList = sb071_sbxxList;
    tables.each(function (v, k) {
        k == table_name ? $(k).setStyle('display', '') : $(k).setStyle(
				'display', 'none');
        if (name == "00" && djxh != '') {
            $w("sbToolBar").setEnabled('save');
        }
        if (name != "00") {
            if (!tables.get(table_name)) {
                var initBtn = new SwordSubmit();
                initBtn.pushData('id', name);
                initBtn.pushData(sbxxList);
                initBtn.setCtrl('SB071KjqysdssbCtrl_toSbfb');
                initBtn.pushData(zsxmList);
                initBtn.pushData(zspmList);
                initBtn.pushData(zszmList);
                initBtn.pushData(hyList);
                initBtn.pushData('djxh', djxh);

                initBtn.options.postType = "form_" + iframe_name;
                initBtn.submit();
                tables.set(table_name, true);
                $w("sbToolBar").setDisabled("save");
            }
        }
    });
}
/**
 * 当附表点击确定后主动显示主表
 * @return
 */
function backToMainPage() {

    var table00 = $("table00");
    var table01 = $("table01");
    var table02 = $("table02");
    //	var table03 = $("table03");
    //	var table04 = $("table04");
    //	var table05 = $("table05");

    table00.setStyle('display', '');
    table01.setStyle('display', 'none');
    table02.setStyle('display', 'none');
    if (djxh != '') {
        $w("sbToolBar").setEnabled('save');
    }
}