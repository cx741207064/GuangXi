/**
 ** 主表单和附表单切换
 */

var tables = new Hash({
    'table00': false, 'table01': false, 'table02': false, 'table03': false
	, 'table04': false, 'table05': false, 'table06': false, 'table07': false, 'table08': false, 'table09': false
	, 'table10': false, 'table11': false, 'table12': false, 'table13': false, 'table14': false, 'table15': false
	, 'table16': false, 'table17': false, 'table18': false, 'table19': false, 'table20': false, 'table21': false
	, 'table22': false, 'table23': false, 'table24': false, 'table25': false, 'table26': false, 'table27': false
	, 'table28': false, 'table29': false, 'table30': false, 'table31': false, 'table32': false, 'table33': false
	, 'table34': false, 'table35': false, 'table36': false, 'table37': false, 'table38': false, 'table39': false
	, 'table40': false, 'table41': false
	, 'table42': false, 'table43': false, 'table44': false, 'table45': false
	, 'table46': false, 'table47': false, 'table48': false, 'table49': false
});

/**
 * 打开附表
 * @param inputEl
 * @return
 */
function openTab(inputEl) {
    var name = inputEl.get("code");
    var table_name = "table" + name;
    var iframe_name = table_name + "iframe";
    tables.each(function (v, k) {
        k == table_name ? $(k).setStyle('display', '') : $(k).setStyle('display', 'none');
        if (name != "00") {
            if (!tables.get(table_name)) {
                var initBtn = new SwordSubmit();
                initBtn.pushData('id', name);
                initBtn.setCtrl('SB001XfssbCtrl_toSbfb');
                initBtn.options.postType = "form_" + iframe_name;

                initBtn.submit();
                tables.set(table_name, true);

            }
        }
    });
}

/**
 * 子页面点击确定之后回到主页面
 * 
 * @return
 */
function backToMainPage() {
    table00.setStyle('display', '');
    table01.setStyle('display', 'none');
    table02.setStyle('display', 'none');
    table03.setStyle('display', 'none');
    table04.setStyle('display', 'none');
    table05.setStyle('display', 'none');
    table06.setStyle('display', 'none');
    table07.setStyle('display', 'none');
    table08.setStyle('display', 'none');
    table09.setStyle('display', 'none');
    table10.setStyle('display', 'none');
    table11.setStyle('display', 'none');
    table12.setStyle('display', 'none');
    table13.setStyle('display', 'none');
    table14.setStyle('display', 'none');
    table15.setStyle('display', 'none');
    table16.setStyle('display', 'none');
    table17.setStyle('display', 'none');
    table18.setStyle('display', 'none');
    table19.setStyle('display', 'none');
    table20.setStyle('display', 'none');
    table21.setStyle('display', 'none');
    table22.setStyle('display', 'none');
    table23.setStyle('display', 'none');
    table24.setStyle('display', 'none');
    table25.setStyle('display', 'none');
    table26.setStyle('display', 'none');
    table27.setStyle('display', 'none');
    table28.setStyle('display', 'none');
    table29.setStyle('display', 'none');
    table30.setStyle('display', 'none');
    table31.setStyle('display', 'none');
    table32.setStyle('display', 'none');

    table33.setStyle('display', 'none');
    table34.setStyle('display', 'none');
    table35.setStyle('display', 'none');
    table36.setStyle('display', 'none');
    table37.setStyle('display', 'none');
    table38.setStyle('display', 'none');
    table39.setStyle('display', 'none');

    table40.setStyle('display', 'none');
    table41.setStyle('display', 'none');

    table42.setStyle('display', 'none');
    table43.setStyle('display', 'none');
    table44.setStyle('display', 'none');
    table45.setStyle('display', 'none');
    table46.setStyle('display', 'none');
    table47.setStyle('display', 'none');
    table48.setStyle('display', 'none');
    table49.setStyle('display', 'none');
}

