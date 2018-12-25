var nsrsbh;
var options = { onSelect: function (title) { iframeAutoSize(); } };

//启动时加载
$(function () {
    loadNsrxx();	//加载纳税人信息（包括其他各种数据）
    autoWidth();			//定时自动设置面板宽度
});

//加载纳税人信息（包括其他各种数据）
function loadNsrxx() {
    $.postJSON("/WSSBSL/do_index_Index_loadIndexNsrxx.ashx", function (data) {
        if (data && data.length > 0) {
            nsrsbh = data[2];
            checkWtkkxysPrint();
        } else {
            window.top.alert('消息', "获取纳税人信息出错！", 'error');
        }
    });
}

//检查纳税人是否符合委托扣款协议书打印条件
function checkWtkkxysPrint() {
    $.postJSON("/WSSBSL/do_wtkkxy_Wtkkxy_checkWtkkxysPrint.ashx", function (data) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                loadWtkkxysBbTabs();
            } else {
                window.top.alert('提示信息', "您不符合打印委托扣款协议书的条件，请您移步办税服务厅办理！", 'info');
            }
        } else {
            window.top.alert('消息', "检查纳税人是否符合委托扣款协议书打印条件出错！", 'error');
        }
    });
}

//定时自动设置宽度(0.3秒一次)
function autoWidth() {
    $("#tbxxDiv").width($("#tbxxDiv").parent().width());
    setTimeout(autoWidth, 300);
}

//加载报表tab
function loadWtkkxysBbTabs() {
    var isTbBz = "0";	//是否填报标志：0-填报报表
    addTab("委托扣款协议书（纳税人）", "/WSSBSL/reportJsp/showReport.jsp?raq=/wtkkxy/wtkkxys_nsr.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz, false);
    addTab("委托扣款协议书（银行）", "/WSSBSL/reportJsp/showReport.jsp?raq=/wtkkxy/wtkkxys_yh.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz, false);
    addTab("委托扣款协议书（税务机关）", "/WSSBSL/reportJsp/showReport.jsp?raq=/wtkkxy/wtkkxys_swjg.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz, false);
    tabsOptions(options);
    window.top.closeProgress();
}

//打印方式三
function lodopPrint() {
    var tab = getSelectedTab();
    if (tab) {
        doCurrTabFun("hideInput()");//为打印而隐藏输入框
        var id = tab.panel('options').id;
        var htmlTxt = window.frames["mainiframe" + id].document.documentElement.outerHTML;
        var bbmc = doCurrTabFun("getBbmc()");//获取当前页面的报表名称
        window.top.doLodopPrint(bbmc, htmlTxt);
    }
}

//导出excel 
function saveAsExcel() {
    doCurrTabFun("saveAsExcel()");
}

//导出pdf 
function saveAsPdf() {
    doCurrTabFun("saveAsPdf()");
}

//窗口高度和宽度自适应
function iframeAutoSize() {
    var headHeight = $("#tbxxDiv").height() + $("#tabList").find(".tabs-header").height() + 5;
    var tab = getSelectedTab();
    if (tab) {
        var id = "#mainiframe" + tab.panel('options').id;
        var parentTabWindowHeight = window.parent.getCurrTabWindowHeight();
        var mainheight = parentTabWindowHeight - headHeight;
        var mainwidth = $("#tbxxDiv").parent().width();
        $(id).height(mainheight);
        $(id).width(mainwidth);
    }
}

//执行当前TAB页面下的方法
function doCurrTabFun(f) {
    var tab = $('#tabList').tabs('getSelected');
    var id = tab.panel('options').id;
    var str = 'window.frames["mainiframe' + id + '"].' + f;
    return eval(str);
}

//刷新tab页面
function reloadTab() {
    var tab = $('#tabList').tabs('getSelected');
    var id = tab.panel('options').id;
    var tabId = "mainiframe" + id;
    window.frames[tabId].location.reload();
}

//获取当前TAB页面下的全局变量值
function getTabVar(v) {
    var tab = $('#tabList').tabs('getSelected');
    var id = tab.panel('options').id;
    var str = 'window.frames["mainiframe' + id + '"].' + v;
    return eval(str);
}