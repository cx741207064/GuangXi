var beSbdr = false;

function sbdr_isSbdr() {
    return beSbdr;
}

function sbdr_setSbdr(val) {
    beSbdr = val;
}

function sbdr_refreshAllTabs(treeName, toolBarName, btnName) {
    if (treeName == undefined || treeName == null) {
        treeName = "SwordTreeJSON";
    }
    if (toolBarName == undefined || toolBarName == null) {
        toolBarName = "zzsybnsrsb";
    }
    if (btnName == undefined || btnName == null) {
        btnName = "save";
    }
    sbdr_setSbdr(true);
    var zb = null;
    $w(treeName).getAllNode().each(function (item, idx) {
        if (idx == 0) {
            zb = item;
        }
        openTab(item);
    })
    openTab(zb);
}

function sbdr_fireCalulate() {
    $$('input').each(function (input, idx) {
        if (input.id != "" && gs_caculate && gs_caculate.indexOf(input.id)) {
            caculate(input.id);
        }
    });
}

//附表初始化
function sbdr_initFb() {
    //导入自动触发保存动作
    if (parent.sbdr_isSbdr() && !sbdr_isSbdr()) {
        beSbdr = true;
        //导入自动触发计算公式校验
        (function () {
            sbdr_fireCalulate();
            savefb();
            beSbdr = false;
        }).delay(1);
    }
}