var maxLevel;

//启动时加载
$(function () {
    var index = request("index");
    maxLevel = 0;
    if (index == "Y") {
        var tsxxList = window.top.getTsxxList();
        showParentTsxx(tsxxList);
    } else {
        var tsxxList = window.top.doCurrTabFun("getTsxxList()");
        showParentTsxx(tsxxList);
        try {
            window.top.doCurrTabFun("closeBblistTab()");
        } catch (e) { }
    }


});

//显示提示信息
function showParentTsxx(tsxxList) {
    if (tsxxList && tsxxList.length > 0) {
        if (tsxxList.length == 1) {
            var poolsTsxxList = tsxxList[0];
            if (poolsTsxxList && poolsTsxxList.length > 0) {
                var firstTitle = "";
                for (var i = 0; i < poolsTsxxList.length; i++) {
                    var tsxx = poolsTsxxList[i];
                    if (i == 0) {
                        firstTitle = tsxx.xxbt;
                    }
                    doAddNewLevel(tsxx.xxbt, tsxx.xxnr);
                }
                selectedAccordion(firstTitle);
            }
        } else {
            var firstTitle = "";
            for (var i = 0; i < tsxxList.length; i++) {
                var tsxx = tsxxList[i][0];
                if (i == 0) {
                    firstTitle = tsxx.xxbt;
                }
                var poolsTsxxList = tsxxList[i];
                doAddNewLevel(tsxx.xxbt, regroupXxnr(poolsTsxxList));
            }
            selectedAccordion(firstTitle);
        }
    }
}

//组装信息内容，用于显示
function regroupXxnr(poolsTsxxList) {
    var header = '<table border="0" align="right" width="95%">';
    var ender = '</table>';
    var body = '';
    for (var j = 0; j < poolsTsxxList.length; j++) {
        var tsxx = poolsTsxxList[j];
        var tr = '<tr><td colspan="2"><img src="/WSSBSL/images/point.png"/><b>' + tsxx.xxbt + '</b></td></tr><tr><td width="20">&nbsp;</td><td>' + tsxx.xxnr + '</td></tr>';
        body = body + tr;
    }
    return header + body + ender;
}

//增加下一个级别
function doAddNewLevel(title, str) {
    $("#tsxxDiv").accordion("add", {
        title: title,
        selected: false,
        iconCls: "",
        content: str
    });
}

//选择指定标题的Accordion
function selectedAccordion(title) {
    $("#tsxxDiv").accordion("select", title);
}