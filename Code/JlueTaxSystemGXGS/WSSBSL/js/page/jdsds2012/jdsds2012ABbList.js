var nsrsbh;
var skssq;
var ssqq;
var ssqz;
var sbxh;
var sbzt;
var tsxxList;
var fb1TsxxList;
var fb1Check = false;
var currOprate = 0;	//当前操作  0:列表初始化  1:提交申报  2:报表填写资格检查
var tbqk;			//填报情况：000,0-未填，1已填
var hznsqylb;		//汇总纳税企业类别
var loadFinish = false;
var currSaveBbmc;   //当前正在保存的表名
var options = {
    onSelect: function (title) {
        iframeAutoSize();
        showButton();
        checkJdsdsATxzg();
    }
};

var WBJK_SB_JDSDS_2008_TbbzList;
var WBJK_SB_JDSDS_2008_FB1_TbbzList;
var WBJK_SB_JDSDS_2008_FB01_TbbzList;
var WBJK_SB_JDSDS_GDZCJSZJ_TbbzList;
var WBJK_SB_JDSDS_2008_FB03_TbbzList;
var WBJK_SB_JDSDS_2008_dynamicBz;
var WBJK_SB_JDSDS_2008_FB1_dynamicBz;
var WBJK_SB_JDSDS_2008_FB01_dynamicBz;
var WBJK_SB_JDSDS_GDZCJSZJ_dynamicBz;
var WBJK_SB_JDSDS_2008_FB03_dynamicBz;
var WBJK_SB_JDSDS_2008_gzList;
var WBJK_SB_JDSDS_2008_FB1_gzList;
var WBJK_SB_JDSDS_2008_FB01_gzList;
var WBJK_SB_JDSDS_GDZCJSZJ_gzList;
var WBJK_SB_JDSDS_2008_FB03_gzList;
var WBJK_SB_SDS_CGWGQYBGB_TbbzList;
var WBJK_SB_SDS_CGWGQYBGB_dynamicBz;
var WBJK_SB_SDS_CGWGQYBGB_gzList;

//启动时加载
$(function () {
    loadNsrxx();
    autoWidth();
});

//加载纳税人信息（包括其他各种数据）
function loadNsrxx() {
    $.postJSON("/WSSBSL/do_index_Index_loadIndexNsrxx.ashx", function (data) {
        if (data && data.length > 0) {
            nsrsbh = data[2];
            jdsds2012Init();
        } else {
            window.top.alert('消息', "获取纳税人信息出错！", 'error');
        }
    });
}

//弹出提示所得税政策宣传内容
function showSdsZcXcNrWindow() {
    var buttons = [{
        text: '我已知道',
        iconCls: 'icon-redo',
        handler: function () {
            window.top.closeEasyDialog();
        }
    }];
    window.top.showEasyDialog("/WSSBSL/show_ndsdsA_sdsZcxc.action", {
        title: '所得税A类政策宣传栏',	//标题
        width: 650,								//宽度
        height: 360,								//高度
        left: ($(window.top).width() - 650) * 0.5,   //居中时左边距
        top: ($(window.top).height() - 360) * 0.4,	//居中时上边距
        modal: true,							//模式窗口
        iconCls: 'icon-help',					//图标样式
        minimizable: false,						//是否显示最小化按钮
        maximizable: false,						//是否显示最大化按钮
        loadingMessage: null,					//窗口内容加载时显示信息
        toolbar: null,							//窗口工具条
        buttons: buttons,						//底部按钮
        doSize: true,							//面板创建的时候将被调整和重新布局
        resizable: false,						//对话框是否可编辑大小
        closable: false							//关闭按钮
    });
}

//报表初始化
function jdsds2012Init(xhid) {
    window.top.progress("正在加载报表", "正在加载报表数据......");
    $.postJSON("/WSSBSL/do_jdsds2012_Jdsds2012_loadJdsds2012AInit.ashx", { "xhid": xhid }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                skssq = data[1].skssq;
                ssqq = data[1].ssqq;
                ssqz = data[1].ssqz;
                sbxh = data[1].sbxh;
                sbzt = data[1].sbzt;
                tbqk = data[1].tbqk;
                hznsqylb = data[1].hznsqylb;
                $("#lb_sbqq").text(data[1].sbqq);
                $("#lb_sbqz").text(data[1].sbqz);
                $("#lb_ssqq").text(ssqq);
                $("#lb_ssqz").text(ssqz);
                $("#lb_xxwl").text(setXxwlFlag(data[1].xxwlqyBz));
                $("#lb_hznsqylb").text(setHznsqylb(data[1].hznsqylb));
                $("#lb_kdqsszyqy").text(setKdqsszyqy(data[1].kdqsszyqy));
                loadTbbz();
            } else {
                window.top.closeProgress();
                //如果提示属于信息确认
                if (data[2] && data[2].length > 0) {
                    var xxnr = "";
                    var infoLen = data[1].length;
                    for (var i = 0; i < infoLen; i++) {
                        var tsxx = data[1][i][0];
                        xxnr = xxnr + tsxx.xxnr + "<br>";
                    }
                    xxnr = xxnr + "<br><br>是否跳过当前检查，继续填写报表？";
                    window.top.confirm("校验提示", xxnr, function (result) {
                        if (result) {
                            //继续填表
                            jdsds2012Init(data[2]);
                            window.top.showTbbzDiv();//显示填表帮助信息
                        } else {
                            closeBblistTab();
                        }
                    });
                } else {
                    if (typeof (data[1]) == "string") {
                        window.top.alert('出错提示', data[1], 'warning', function () {
                            closeBblistTab();
                        });
                    } else {
                        tsxxList = data[1];
                        showTsxxListWindow();//显示提示信息
                    }
                }
            }
            loadFinish = true;
        } else {
            window.top.closeProgress();
            window.top.alert('错误', '网络通迅异常，初始化报表失败！', 'error');
        }
    });
}

//加载所有报表的填表帮助
function loadTbbz() {
    var params = "bbmc=WBJK_SB_JDSDS_2008,WBJK_SB_JDSDS_2008_FB01,WBJK_SB_JDSDS_GDZCJSZJ,WBJK_SB_JDSDS_2008_FB03,WBJK_SB_JDSDS_2008_FB1,WBJK_SB_SDS_CGWGQYBGB";
    $.postJSON("/WSSBSL/do_report_Report_queryTbbz.action", { "params": params }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                WBJK_SB_JDSDS_2008_TbbzList = data[1][0];
                WBJK_SB_JDSDS_2008_FB01_TbbzList = data[1][1];
                WBJK_SB_JDSDS_GDZCJSZJ_TbbzList = data[1][2];
                WBJK_SB_JDSDS_2008_FB03_TbbzList = data[1][3];
                WBJK_SB_JDSDS_2008_FB1_TbbzList = data[1][4];
                WBJK_SB_SDS_CGWGQYBGB_TbbzList = data[1][5];
            } else {
                window.top.alert('错误', data[1], 'error');
            }
        }
        //加载锁定规则
        loadLockRule();
    });
}

//加载所有报表的锁定规则
function loadLockRule() {
    var params = "bbmc=WBJK_SB_JDSDS_2008,WBJK_SB_JDSDS_2008_FB01,WBJK_SB_JDSDS_GDZCJSZJ,WBJK_SB_JDSDS_2008_FB03,WBJK_SB_JDSDS_2008_FB1,WBJK_SB_SDS_CGWGQYBGB;ssqq=" + ssqq + ";ssqz=" + ssqz + ";skssq=" + skssq;
    $.postJSON("/WSSBSL/do_report_Report_loadLockRule.action", {
        "params": params
    }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                WBJK_SB_JDSDS_2008_dynamicBz = data[1][0];
                WBJK_SB_JDSDS_2008_FB01_dynamicBz = data[1][1];
                WBJK_SB_JDSDS_GDZCJSZJ_dynamicBz = data[1][2];
                WBJK_SB_JDSDS_2008_FB03_dynamicBz = data[1][3];
                WBJK_SB_JDSDS_2008_FB1_dynamicBz = data[1][4];
                WBJK_SB_SDS_CGWGQYBGB_dynamicBz = data[1][5];

                WBJK_SB_JDSDS_2008_gzList = data[2][0];
                WBJK_SB_JDSDS_2008_FB01_gzList = data[2][1];
                WBJK_SB_JDSDS_GDZCJSZJ_gzList = data[2][2];
                WBJK_SB_JDSDS_2008_FB03_gzList = data[2][3];
                WBJK_SB_JDSDS_2008_FB1_gzList = data[2][4];
                WBJK_SB_SDS_CGWGQYBGB_gzList = data[2][5];
            } else {
                window.top.alert('消息', data[1], 'warning');
            }
        }
        if (hznsqylb != "2") {//如果不是分支机构,则弹出政策宣传内容
            showSdsZcXcNrWindow();
        }
        loadJdsds2012BbTabs();
        window.top.showTbbzDiv();
    });
}

//汇总缴纳企业类别,1：总机构，2：分支机构，3：分总机构，0：非总分机构
function setHznsqylb(hznsqylb) {
    if (hznsqylb != null && hznsqylb.length > 0) {
        if (hznsqylb == "1") {
            return "总机构";
        } else if (hznsqylb == "2") {
            return "分支机构";
        } else if (hznsqylb == "3") {
            return "分总机构";
        } else if (hznsqylb == "0") {
            return "非总分机构";
        }
    }
}

//小型微利企业标志,0、6：非小型微利企业  1、2、3、4、5：小型微利企业 
function setXxwlFlag(xxwlFlag) {
    if (xxwlFlag != null && xxwlFlag.length > 0) {
        if (xxwlFlag == "N") {
            return "非小型微利企业";
        } else if (xxwlFlag == "Y") {
            return "小型微利企业";
        } else if (xxwlFlag == "S") {
            return "新办企业";
        }
    }
}

//跨地区税收转移企业标志,1-非跨地区税收转移企业；2-跨省、自治区、直辖市、计划单列市；3-跨地市；4-跨县（区）
function setKdqsszyqy(kdqsszyqy) {
    if (kdqsszyqy != null && kdqsszyqy.length > 0) {
        if (kdqsszyqy == "1") {
            return "非跨地区税收转移企业";
        } else if (kdqsszyqy == "2") {
            return "跨省、自治区、直辖市、计划单列市";
        } else if (kdqsszyqy == "3") {
            return "跨地市";
        } else if (kdqsszyqy == "4") {
            return "跨县（区）";
        }
    }
}

//显示操作按钮
function showButton() {
    try {
        doCurrTabFun("showOrHideButton()");
    } catch (e) { }
}

//设置添加删除行按钮显示
function showAddAndDelButton() {
    $("#addRow").show();
    $("#delRow").show();
}

//设置添加删除行按钮隐藏
function hideAddAndDelButton() {
    $("#addRow").hide();
    $("#delRow").hide();
}

//给弹出的信息页面调用，获取提示信息
function getTsxxList() {
    return tsxxList;
}

//给弹出的信息页面调用，关闭当前标签
function closeBblistTab() {
    if (currOprate == 0) {
        window.top.closeCurrTab();
    }
}

//提交申报
function submitTableData(xhid) {
    if (sbzt == "0" || sbzt == "2") {
        currOprate = 1;
        window.top.closeEasyDialog();
        if (sbxh && sbxh.length > 0) {
            window.top.progress("正在申报", "正在提交申报......");
            $.postJSON("/WSSBSL/do_jdsds2012_Jdsds2012_submitJdsds2012A.action", { "sbxh": sbxh, "xhid": xhid }, function (data, textStatus) {
                window.top.closeProgress();
                if (data && data.length > 0) {
                    if (data[0] == "Y") {
                        sbzt = "1";
                        lockAllReport();		//锁定报表
                        window.top.reloadMain();//刷新首页应申报信息列表和报表查询菜单
                        if (data[2] == "Y") {//如果应征税款
                            var msg = data[1] + "，您是否需要现在立即缴纳税款？如果现在不缴纳税款，在缴款期限内可使用手动缴款功能进行缴款。";
                            window.top.confirm("申报成功", msg, function (result) {
                                if (result) {
                                    //发起扣款
                                    //doAutoKk(sbxh,"WBJK_SB_JDSDS_2008",null);
                                    window.top.addTab("税款缴纳-当期未缴税款", "/WSSBSL/show_skjn_dqwjsk.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
                                }
                            });
                        } else {
                            window.top.alert("申报成功", data[1], "info");
                        }
                    } else {
                        //如果提示属于信息确认
                        if (data[2] && data[2].length > 0) {
                            var xxnr = "";
                            var infoLen = data[1].length;
                            for (var i = 0; i < infoLen; i++) {
                                var tsxx = data[1][i][0];
                                xxnr = xxnr + tsxx.xxnr + "<br>";
                            }
                            xxnr = xxnr + "<br><br>是否跳过当前检查，继续申报？";
                            window.top.confirm("校验提示", xxnr, function (result) {
                                if (result) {
                                    //继续申报
                                    submitTableData(data[2]);
                                }
                            });
                        } else {
                            tsxxList = data[1];
                            showTsxxListWindow();
                        }
                    }
                } else {
                    window.top.alert('错误', '网络通迅异常，提交申报失败！', 'error');
                }
            });
        } else {
            window.top.alert('提示', '您的报表尚未填写，不能提交！', 'warning');
        }
    } else if (sbzt == "1") {
        window.top.alert('消息', "申报失败。该属期（" + skssq + "）报表您已申报，不能重复申报，如需修改申报表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不要重复申报。", 'warning');
    }
}

//申报成功后锁定所有报表
function lockAllReport() {
    var tabList = tabs();
    for (var j = 0; j < tabList.length; j++) {
        var id = tabList[j].panel('options').id;
        var str = 'window.frames["mainiframe' + id + '"].setReportLock()';
        eval(str);
    }
}

//执行自动扣款
function doAutoKk(sbxh, bbmc, xhid) {
    if (sbxh && sbxh.length > 0) {
        window.top.progress("正在扣款", "正在执行扣款......");
        $.postJSON("/WSSBSL/do_skjn_Skjn_autoKk.action", { "sbxh": sbxh, "bbmc": bbmc, "xhid": xhid }, function (data, textStatus) {
            window.top.closeProgress();
            if (data && data.length > 0) {
                if (data[0] == "Y") {
                    tsxxList = data[1];
                    showTsxxListWindow();
                } else {
                    //如果提示属于信息确认
                    if (data[2] && data[2].length > 0) {
                        var xxnr = "";
                        var infoLen = data[1].length;
                        for (var i = 0; i < infoLen; i++) {
                            var tsxx = data[1][i][0];
                            xxnr = xxnr + tsxx.xxnr + "<br>";
                        }
                        xxnr = xxnr + "<br><br>是否跳过当前检查，继续扣款？";
                        window.top.confirm("校验提示", xxnr, function (result) {
                            if (result) {
                                //继续扣款
                                doAutoKk(sbxh, bbmc, data[2]);
                            }
                        });
                    } else {
                        tsxxList = data[1];
                        showTsxxListWindow();
                    }
                }
            } else {
                window.top.alert('错误', '网络通迅异常，扣款失败！', 'error');
            }
        });
    } else {
        window.top.alert('提示', '您的报表尚未填写，不能扣款！', 'warning');
    }
}

//弹出信息显示窗口
function showTsxxListWindow() {
    var modal = true;
    if (currOprate == 1) {
        modal = false;
    }
    window.top.showEasyDialog('/WSSBSL/show_common_tsxx.aspx', {
        title: '反馈信息',						//标题
        width: 600,								//宽度
        height: 350,							//高度
        left: ($(window.top).width() - 600) * 0.5,   //居中时左边距
        top: ($(window.top).height() - 350) * 0.4,	//居中时上边距
        modal: modal,							//模式窗口
        iconCls: 'icon-help',					//图标样式
        collapsible: true,						//是否显示折叠按钮
        minimizable: false,						//是否显示最小化按钮
        maximizable: false,						//是否显示最大化按钮
        loadingMessage: null,					//窗口内容加载时显示信息
        toolbar: null,							//窗口工具条
        buttons: null,							//底部按钮
        doSize: true,							//面板创建的时候将被调整和重新布局
        resizable: true							//对话框是否可编辑大小
    });
}

//获取加载完成标志
function getLoadFinish() {
    return loadFinish;
}

//定时自动设置宽度(0.3秒一次)
function autoWidth() {
    $("#tbxxDiv").width($("#tbxxDiv").parent().width());
    setTimeout(autoWidth, 300);
}

//加载所得税报表tab
function loadJdsds2012BbTabs() {
    var isTbBz = "0";	//是否填报标志：0-填报报表
    var zbTitle = "主表";
    var fb01Title = "附表一";
    var fb02Title = "附表二";
    var fb03Title = "附表三";
    var fb1Title = "分配表";
    var bgTitle = "居民企业参股外国企业信息报告表";
    if (tbqk.substring(0, 1) == '1') {
        zbTitle = "√主表";
    }
    if (tbqk.substring(1, 2) == '1') {
        fb01Title = "√附表一";
    }
    if (tbqk.substring(2, 3) == '1') {
        fb02Title = "√附表二";
    }
    if (tbqk.substring(3, 4) == '1') {
        fb03Title = "√附表三";
    }
    if (tbqk.substring(4, 5) == '1') {
        fb1Title = "√分配";
    }
    if (tbqk.substring(5, 6) == '1') {
        bgTitle = "√居民企业参股外国企业信息报告表";
    }
    if (typeof (nsrsbh) == "undefined") {
        window.top.alert('消息', "无法获取必要参数！显示报表失败！请刷新页面重试！", 'warning');
    } else {
        addTab(zbTitle, "/WSSBSL/reportJsp/showReport.jsp?raq=/jdsds2012/jdsds2015A.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=" + isTbBz, false);
        addTab(fb01Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/jdsds2012/jdsds2015Fb01.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=" + isTbBz, false);
        //addTab(fb02Title,"/WSSBSL/reportJsp/showReport.jsp?raq=/jdsds2012/jdsds2015Fb02_lr.raq&nsrsbh="+nsrsbh+"&sbzt="+sbzt+"&skssq="+skssq+"&ssqq="+ssqq+"&ssqz="+ssqz+"&isTbBz="+isTbBz,false);
        addTab(fb02Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/jdsds2012/jdsds2015Fb02.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=" + isTbBz, false);
        addTab(fb03Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/jdsds2012/jdsds2015Fb03.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=" + isTbBz, false);
        addTab(fb1Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/jdsds2012/jdsds2015Fb1.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=" + isTbBz, false);
        addTab(bgTitle, "/WSSBSL/reportJsp/showReport.jsp?raq=/jdsds2012/cgwgqybgb.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=" + isTbBz, false);
    }
    tabsOptions(options);
    hideAddAndDelButton();
    window.top.closeProgress();
}

//添加行
function addRow() {
    if (sbzt == "0" || sbzt == "2") {
        doCurrTabFun("addRow()");
    } else if (sbzt == "1") {
        window.top.alert('消息', "该属期（" + skssq + "）报表您已申报，不能修改报表数据，如需修改申报表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不要修改报表数据。", 'warning');
    }
}

//删除行
function delRow() {
    if (sbzt == "0" || sbzt == "2") {
        doCurrTabFun("delRow()");
    } else if (sbzt == "1") {
        window.top.alert('消息', "该属期（" + skssq + "）报表您已申报，不能修改报表数据，如需修改申报表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不要修改报表数据。", 'warning');
    }
}

//打印方式一
function javaPrint() {
    if (sbzt) {
        doCurrTabFun("javaPrint()");
    }
}

//打印方式二
function winPrint() {
    if (sbzt) {
        doCurrTabFun("winPrint()");
    }
}

//打印方式三
function lodopPrint() {
    if (sbzt) {
        var tab = getSelectedTab();
        if (tab) {
            doCurrTabFun("hideInput()");//为打印而隐藏输入框
            var id = tab.panel('options').id;
            var htmlTxt = window.frames["mainiframe" + id].document.documentElement.outerHTML;
            var bbmc = doCurrTabFun("getBbmc()");//获取当前页面的报表名称
            window.top.doLodopPrint(bbmc, htmlTxt);
        }
    }
}

//导出excel 
function saveAsExcel() {
    if (sbzt) {
        doCurrTabFun("saveAsExcel()");
    }
}

//导出pdf 
function saveAsPdf() {
    if (sbzt) {
        doCurrTabFun("saveAsPdf()");
    }
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

//根据报表填报情况更新tab标题
function updateTabTitle() {
    var tab = $('#tabList').tabs('getSelected');
    var oldTitle = tab.panel('options').title;
    changeTitleByTxqk(oldTitle);
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

//设置当前表名
function setCurrSaveBbmc(bbmc) {
    currSaveBbmc = bbmc;
}

//保存报表
function saveReport() {
    debugger;
    if (sbzt == "0" || sbzt == "2") {
        var title = $('#tabList').tabs('getSelected').panel('options').title;
        if (title == "分配表") {
            if (fb1TsxxList) {
                tsxxList = fb1TsxxList;
                showTsxxListWindow();//显示提示信息
                return;
            }
        }
        window.top.progress("正在保存", "数据正在保存......");
        doCurrTabFun("submit()");

    } else if (sbzt == "1") {
        window.top.alert('消息', "保存失败。该属期（" + skssq + "）报表您已申报，不能修改报表数据，如需修改申报表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不要修改报表数据。", 'warning');
    }
}

//删除报表
function delReport(bblsh, params) {
    $.postJSON("/WSSBSL/do_jdsds2012_Jdsds2012_delete.action",
		{ "bblsh": bblsh, "params": params },
		function (data, textStatus) {
		    if (data && data.length > 0) {
		        if (data[0] == "Y") {
		            window.top.alert('消息', data[1], 'info', function () {
		                afterDelete();
		            });
		        } else {
		            window.top.alert('消息', data[1], 'warning', function () {
		                window.top.closeProgress();
		            });
		        }
		    }
		}
	);
}

function afterDelete() {
    $.postJSON("/WSSBSL/do_jdsds2012_Jdsds2012_updateTbxx.action",
		{ "pzzlDm": "BDA0610756", "skssq": skssq },
		function (data, textStatus) {
		    if (data && data.length > 0) {
		        if (data[0] == "Y") {
		            if (data[1]) {
		                tbqk = data[1];
		            }
		            if (!data[2]) {//删除最后一个表时清空申报序号
		                sbxh = "";
		            }
		            updateTabTitle();
		            window.top.closeProgress();
		        }
		    }
		}
	);
}

//保存后回调方法
function afterSave() {
    $.postJSON("/WSSBSL/do_jdsds2012_Jdsds2012_updateTbxx.action",
		{ "pzzlDm": "BDA0610756", "skssq": skssq },
		function (data, textStatus) {
		    if (data && data.length > 0) {
		        if (data[0] == "Y") {
		            if (data[1]) {
		                tbqk = data[1];
		            }
		            if (data[2]) {
		                sbxh = data[2];
		            }
		            updateTabTitle();
		            window.top.closeProgress();
		            //生成附表3数据
		            if (currSaveBbmc == "WBJK_SB_JDSDS_2008") {
		                createFb3Data();
		            }
		            //根据附表1，生成主表第6行数据的数据
		            if (currSaveBbmc == "WBJK_SB_JDSDS_2008_FB01") {
		                fb1CreateZbData();
		            }
		            //根据附表2，生成主表第7行数据的数据
		            if (currSaveBbmc == "WBJK_SB_JDSDS_GDZCJSZJ") {
		                fb2CreateZbData();
		            }
		        }
		    }
		}
	);
}

//生成附表3数据
function createFb3Data() {
    window.top.confirm("提示", "您保存了主表，是否要生成附表三第2、3行小微企业减免税额？</br>温馨提示：生成附表三的数据后请手动重新保存附表三的报表！", function (result) {
        if (result) {
            $.postJSON("/WSSBSL/do_jdsds2012_Jdsds2012_loadJdsdsQueryDataSaveData.action",
				{ "sbxh": sbxh, "bbmc": currSaveBbmc },
				function (data, textStatus) {
				    if (data[0] == "Y") {
				        var zbR2BqNum = data[1].zbR2BqNum;
				        var zbR2LjNum = data[1].zbR2LjNum;
				        var zbR3BqNum = data[1].zbR3BqNum;
				        var zbR3LjNum = data[1].zbR3LjNum;
				        if (getTab('附表三')) {
				            makeZBing = true;
				            selectTab("附表三");
				            doCurrTabFunByTitle('附表三', 'setSdsAFB3ByList(' + zbR2BqNum + ',' + zbR2LjNum + ',' + zbR3BqNum + ',' + zbR3LjNum + ')');
				        } else if (getTab('√附表三')) {
				            selectTab("√附表三");
				            doCurrTabFunByTitle('√附表三', 'setSdsAFB3ByList(' + zbR2BqNum + ',' + zbR2LjNum + ',' + zbR3BqNum + ',' + zbR3LjNum + ')');
				        }
				    }
				});
        }
    });
}

//附表1生成主表数据
function fb1CreateZbData() {
    window.top.confirm("提示", "自动为您从附表一向主表填数，但主表的部分数据仍需手工填写并保存，确认要现在生成主表吗？", function (result) {
        if (result) {
            var zbDataList = doCurrTabFunByTitle('√附表一', 'getJdsdsFb1Data()');
            if (getTab('主表')) {
                makeZBing = true;
                selectTab("主表");
                doCurrTabFunByTitle('主表', 'setSdsAZbRow6(' + zbDataList + ')');
            } else if (getTab('√主表')) {
                selectTab("√主表");
                doCurrTabFunByTitle('√主表', 'setSdsAZbRow6(' + zbDataList + ')');
            }
        }
    });
}

//附表2生成主表数据
function fb2CreateZbData() {
    window.top.confirm("提示", "自动为您从附表向主表填数，但主表的部分数据仍需手工填写并保存，确认要现在生成主表吗？", function (result) {
        if (result) {
            var zbDataList = doCurrTabFunByTitle('√附表二', 'getJdsdsFb2Data()');
            if (getTab('主表')) {
                makeZBing = true;
                selectTab("主表");
                doCurrTabFunByTitle('主表', 'setSdsAZbRow7(' + zbDataList + ')');
            } else if (getTab('√主表')) {
                selectTab("√主表");
                doCurrTabFunByTitle('√主表', 'setSdsAZbRow7(' + zbDataList + ')');
            }
        }
    });
}

//根据title执行对应的TAB页面下的方法
function doCurrTabFunByTitle(title, f) {
    var tab = getTab(title);
    var id = tab.panel('options').id;
    var str = 'window.frames["mainiframe' + id + '"].' + f;
    return eval(str);
}

function updateTabTitle() {
    var tab = $('#tabList').tabs('getSelected');
    var oldTitle = tab.panel('options').title;
    changeTitleByTxqk(oldTitle);
}

function changeTitleByTxqk(title) {
    if (title == "主表") {
        if (tbqk.substring(0, 1) == "1") {
            var newTitle = "√主表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√主表") {
        if (tbqk.substring(0, 1) == "0") {
            var newTitle = "主表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表一") {
        if (tbqk.substring(1, 2) == "1") {
            var newTitle = "√附表一";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表一") {
        if (tbqk.substring(1, 2) == "0") {
            var newTitle = "附表一";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表二") {
        if (tbqk.substring(2, 3) == "1") {
            var newTitle = "√附表二";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表二") {
        if (tbqk.substring(2, 3) == "0") {
            var newTitle = "附表二";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表三") {
        if (tbqk.substring(3, 4) == "1") {
            var newTitle = "√附表三";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表三") {
        if (tbqk.substring(3, 4) == "0") {
            var newTitle = "附表三";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "分配表") {
        if (tbqk.substring(4, 5) == "1") {
            var newTitle = "√分配表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√分配表") {
        if (tbqk.substring(4, 5) == "0") {
            var newTitle = "分配表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "居民企业参股外国企业信息报告表") {
        if (tbqk.substring(5, 6) == "1") {
            var newTitle = "√居民企业参股外国企业信息报告表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√居民企业参股外国企业信息报告表") {
        if (tbqk.substring(5, 6) == "0") {
            var newTitle = "居民企业参股外国企业信息报告表";
            updateTitle(title, newTitle, options);
        }
    }
}

function deleteReport() {
    if (sbzt == "0" || sbzt == "2") {
        var title = $('#tabList').tabs('getSelected').panel('options').title;
        if (title.substring(0, 1) == "√") {
            window.top.confirm("提示", "请确认是否要删除该报表数据？", function (result) {
                if (result) {
                    window.top.progress("正在删除", "数据正在删除......");
                    doCurrTabFun("deleteReport()");
                }
            });
        } else {
            window.top.alert('消息', "当前报表未保存，不能进行删除操作。", 'warning');
        }
    } else if (sbzt == "1") {
        window.top.alert('消息', "该属期（" + skssq + "）报表您已申报，不能删除报表数据，如需修改申报表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不要删除报表数据。", 'warning');
    }
}

//查询所得税A类填写资格
function checkJdsdsATxzg() {
    var bbmc;
    var title = $('#tabList').tabs('getSelected').panel('options').title;
    if (title == "分配表") {
        bbmc = "WBJK_SB_JDSDS_2008_FB1";
        if (fb1TsxxList) {
            tsxxList = fb1TsxxList;
            showTsxxListWindow();
        } else {
            if (fb1Check == false) {
                currOprate = 2;
                window.top.progress("正在检查", "正在检查季度所得税分配表填写资格......");
                $.postJSON("/WSSBSL/do_jdsds2012_Jdsds2012_checkJdsds2012Txzg.action",
						{ "bbmc": bbmc, "ssqq": ssqq, "ssqz": ssqz },
					function (data, textStatus) {
					    window.top.closeProgress();
					    if (data && data.length > 0) {
					        if (data[0] != "Y") {
					            doCurrTabFun("setReportLock()");
					            tsxxList = data[1];
					            fb1TsxxList = data[1];
					            showTsxxListWindow();//显示提示信息
					        }
					    }
					    fb1Check = true;
					}
				);
            }
        }
    }
}

//获取当前TAB页面下的全局变量值
function getTabVar(v) {
    var tab = $('#tabList').tabs('getSelected');
    var id = tab.panel('options').id;
    var str = 'window.frames["mainiframe' + id + '"].' + v;
    return eval(str);
}

//获取某个报表的数据
function getTableData(title, cellid) {
    var tab = getTableTab(title);
    if (!tab) {
        window.top.alert('错误', "当前不存在标签为【" + title + "】的报表，无法取得数据。", 'warning');
        return null;
    } else {
        var id = tab.panel('options').id;
        var val = 'window.frames["mainiframe' + id + '"].getReportDataById(\'' + cellid + '\')';
        return eval(val);
    }
}