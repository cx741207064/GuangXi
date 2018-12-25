/**
 * * 主表单和附表单切换
 */

var tables = new Hash({ 'table00': false, 'table01': false, 'table02': false, 'table03': false, 'table04': false, 'table05': false });
/**
 * 打开附表
 * 
 * @param inputEl
 * @return
 */
function openTab(inputEl) {
    var nsrxxForm = $w('nsrxxForm');
    var ssqq = nsrxxForm.getValue("skssqq");// 税款所属期起
    var ssqz = nsrxxForm.getValue("skssqz");// 税款所属期止
    if (!$chk(ssqq)) {
        swordAlert("所属期起不能为空");
        nsrxxForm.getFieldEl("skssqq").focus();
        return;
    }
    if (!$chk(ssqz)) {
        swordAlert("所属期止不能为空");
        nsrxxForm.getFieldEl("skssqz").focus();
        return;
    }

    var name = inputEl.get("code");
    if (gt3.zrrBz == "Y" && name != '00') {
        var hyDm = nsrxxForm.getValue("hyDm");// 行业
        var xzqhszDm = nsrxxForm.getValue("xzqhszDm");// 行政区划
        var jdxzDm = nsrxxForm.getValue("jdxzDm").code;// 街道乡镇
        var zgswskfjDm = nsrxxForm.getValue("zgswskfjDm");//税务机关

        if (!$chk(hyDm)) {
            swordAlert("行业不能为空");
            nsrxxForm.getFieldEl("hyDm").focus();
            return;
        }
        if (!$chk(xzqhszDm)) {
            swordAlert("行政区划不能为空");
            nsrxxForm.getFieldEl("xzqhszDm").focus();
            return;
        }
        if (!$chk(jdxzDm)) {
            swordAlert("街道乡镇不能为空");
            nsrxxForm.getFieldEl("jdxzDm").focus();
            return;
        }
        if (!$chk(zgswskfjDm)) {
            swordAlert("税务机关不能为空");
            nsrxxForm.getFieldEl("zgswskfjDm").focus();
            return;
        }

    }
    var table_name = "table" + name;
    var iframe_name = table_name + "iframe";
    tables.each(function (v, k) {
        k == table_name ? $(k).setStyle('display', '') : $(k).setStyle('display', 'none');

        // 打开页面的时候设置加载初始化的方法
        if (k == table_name) {
            var iframe_obj = $(iframe_name);
            if (iframe_obj) {
                if (iframe_obj.contentWindow.init) iframe_obj.contentWindow.init();
            }
        }

        if (name != "00") {
            if (!tables.get(table_name)) {

                // $(iframe_name).src =
                // AddBizCode2URL("/sword?ctrl=SB097TydkdjsbCtrl_toSbfb&id=" +
                // name+"&zsxmList="+zsxmList);
                var initBtn = new SwordSubmit();
                initBtn.pushData('djxh', djxh);
                initBtn.pushData('id', name);
                initBtn.pushData(zsxmList);
                initBtn.pushData(zspmList);
                initBtn.pushData(zszmList);
                initBtn.pushData(hyList);
                initBtn.setCtrl('SB097TydkdjsbCtrl_toSbfb');
                initBtn.options.postType = "form_" + iframe_name;
                initBtn.submit();
                tables.set(table_name, true);

            }
        }
    });
}
/**
 * 当附表点击确定后主动显示主表
 * 
 * @return
 */
function turnToMainTab() {
    var table00 = $("table00");
    var table01 = $("table01");
    var table02 = $("table02");
    var table03 = $("table03");
    var table04 = $("table04");
    var table05 = $("table05");

    table00.setStyle('display', '');
    table01.setStyle('display', 'none');
    table02.setStyle('display', 'none');
    table03.setStyle('display', 'none');
    table04.setStyle('display', 'none');
    table05.setStyle('display', 'none');
}

/**
 * 载入主附表树数据
 * 
 * @return {[type]}
 */
function loadZfbTree(zsxmList) {
    var ssqzBtn = new SwordSubmit();
    ssqzBtn.pushData(zsxmList);
    ssqzBtn.setCtrl("SB097TydkdjsbCtrl_initZfbTree");
    // ssqzBtn.pushData('nsrxxVO', JSON.encode(nsrxxVO));
    ssqzBtn.submit();
}

function sb097_check(name) {// 033里面的判断填写是否合法
    var valid = pc.getWidget(name);
    if (!valid.validate()) {
        return false;
    } else {
        return true;
    }
}

function sb097_checkGridData(gridName) {// 申报014中判断附表是grid时是否填值，true为有值，false为无值
    // 判断附表是否填值了，在点确定的时候进行判断，点退出和重置不改变该附表在主表上的状态
    var gridData = $w(gridName).getCurPageGridData();
    if (gridData == null || gridData == undefined || gridData == ""
			|| gridData.trs == null || gridData.trs == undefined
			|| gridData.trs == "" || gridData.trs.length == 0) {
        return false;
    } else {
        return true;
    }
}