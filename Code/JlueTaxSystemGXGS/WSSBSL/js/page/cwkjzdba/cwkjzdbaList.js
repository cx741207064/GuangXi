var nsrsbh;
var sbzt;
var tsxxList;
var currOprate = 0;	//当前操作  0:列表初始化  1:提交申报   2:报表填写资格检查
var tbqk;			//填报情况：0-未填，1已填
var bsqx;			//报送期限
var nd;				//年度
var nsqxDm;			//报送期限
var cwkjzdbaxh;
var options = {
    onSelect: function (title) {
        iframeAutoSize();
    }
};

var DJ_CWBB_BA_JBXX_dynamicBz;
var DJ_CWBB_BA_JBXX_gzList;



//启动时加载
$(function () {
    loadNsrxx();
    loadCwkjzdbaInit();//报表初始化
});

//加载纳税人信息（包括其他各种数据）
function loadNsrxx() {
    $.postJSON("/WSSBSL/do_index_Index_loadIndexNsrxx.ashx", function (data) {
        if (data && data.length > 0) {
            nsrsbh = data[2]; //  取得纳税人识别号
            autoWidth();	//定时自动设置面板宽度
        } else {
            window.top.alert('消息', "获取纳税人信息出错！", 'error');
        }
    });
}

//定时自动设置宽度(0.3秒一次)
function autoWidth() {
    $("#tbxxDiv").width($("#tbxxDiv").parent().width());
    setTimeout(autoWidth, 300);
}

//窗口宽度及高度自适应
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

function showButton() {
    try {
        doCurrTabFun("showOrHideButton()");
    } catch (e) { }
}

//执行当前TAB页面下的方法
function doCurrTabFun(f) {
    var tab = $('#tabList').tabs('getSelected');
    var id = tab.panel('options').id;
    var str = 'window.frames["mainiframe' + id + '"].' + f;
    return eval(str);
}

//加载财务制度备案tab
function loadCwkjzdbaTabs() {
    var isTbBz = "0"
    var cwkjzdbaTitle = "财务会计制度备案";
    if (tbqk.substring(0, 1) == '1') {
        cwkjzdbaTitle = "√财务会计制度备案";
    }
    if (nsrsbh) {
        addTab(cwkjzdbaTitle, "/WSSBSL/reportJsp/showReport_cwkjzdba.aspx?raq=/cwkjzdba/cwkjzdba.raq&nsrsbh=" + nsrsbh + "&cwkjzdbaxh=" + cwkjzdbaxh + "&sbzt=" + sbzt + "&isTbBz=" + isTbBz, false);
    } else {
        window.top.alert('消息', "无法获取必要参数！显示报表失败！请刷新页面重试！", 'warning');
    }
    tabsOptions(options);
    window.top.closeProgress();
}

//财务会计制度备案初始化
function loadCwkjzdbaInit(xhid) {
    window.top.progress("正在加载报表", "正在加载报表数据......");
    $.postJSON("/WSSBSL/do_cwkjzdba_Cwkjzdba_loadCwkjzdbaInit.ashx", { "xhid": xhid }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                sbzt = data[1].sbzt;
                tbqk = data[1].tbqk;
                cwkjzdbaxh = data[1].cwkjzdbaxh;
                loadLockRule();
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
                            loadCwkjzdbaInit(data[2]);
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

//加载所有报表的锁定规则
function loadLockRule() {
    var params = "bbmc=DJ_CWBB_BA_JBXX";
    $.postJSON("/WSSBSL/do_report_Report_loadLockRule.ashx", { "params": params },
    function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                DJ_CWBB_BA_JBXX_dynamicBz = data[1][0];

                DJ_CWBB_BA_JBXX_gzList = data[2][0];
            } else {
                window.top.alert('消息', data[1], 'warning');
            }
        }
        loadCwkjzdbaTabs();
    });
}

//报表保存操作
function saveReport() {
    window.top.alert("消息", "保存成功(注：模拟系统此处只做模拟操作。)", "info");
    //if (sbzt == "0" || sbzt == "2") {
    //    window.top.progress("正在保存", "数据正在保存......");
    //    doCurrTabFun("submit()");
    //} else if (sbzt == "1") {
    //    window.top.alert('消息', "保存失败。财务会计制度备案您已备案，不能修改备案数据，如需修改备案表请到办税服务厅办理。", 'warning');
    //} else if (sbzt == "3") {
    //    window.top.alert('消息', "您的备案操作正在处理，请耐心等待结果，不要修改备案表数据。", 'warning');
    //}
}

//保存后回调方法
function afterSave() {
    $.postJSON("/WSSBSL/do_cwkjzdba_Cwkjzdba_updateTbxx.ashx",
		function (data, textStatus) {
		    window.top.closeProgress();
		    if (data && data.length > 0) {
		        if (data[0] == "Y") {
		            if (data[1]) {
		                tbqk = data[1];
		            }
		            if (data[2]) {
		                cwkjzdbaxh = data[2];
		            }
		            updateTabTitle();
		        }
		    }
		}
	);
}

//删除报表操作
function deleteReport() {
    window.top.alert("消息", "删除成功(注：模拟系统此处只做模拟操作。)", "info");
    //if (sbzt == "0" || sbzt == "2") {
    //    var title = $('#tabList').tabs('getSelected').panel('options').title;
    //    if (title.substring(0, 1) == "√") {
    //        window.top.confirm("提示", "请确认是否要删除该报表数据？", function (result) {
    //            if (result) {
    //                window.top.progress("正在删除", "数据正在删除......");
    //                doCurrTabFun("deleteReport()");
    //            }
    //        });
    //    } else {
    //        window.top.alert('消息', "当前报表未保存，不能进行删除操作。", 'warning');
    //    }
    //} else if (sbzt == "1") {
    //    window.top.alert('消息', "财务会计制度备案您已备案，不能修改备案数据，如需修改备案表请到办税服务厅办理。", 'warning');
    //} else if (sbzt == "3") {
    //    window.top.alert('消息', "您的备案操作正在处理，请耐心等待结果，不要删除备案表数据。", 'warning');
    //}
}

//删除报表
function delReport(bblsh, params) {
    $.postJSON("/WSSBSL/do_cwkjzdba_Cwkjzdba_delete.action",
		{ "cwkjzdbaxh": cwkjzdbaxh },
		function (data, textStatus) {
		    if (data && data.length > 0) {
		        if (data[0] == "Y") {
		            window.top.alert('消息', data[1], 'info', function () {
		                afterDelete();
		            });
		        } else {
		            window.top.alert('消息', data[1], 'warning');
		        }
		    }
		}
	);
}

//删除后调用
function afterDelete() {
    $.postjson("/wssbsl/do_cwkjzdba_cwkjzdba_updatetbxx.action",
		function (data, textstatus) {
		    if (data && data.length > 0) {
		        if (data[0] == "y") {
		            if (data[1]) {
		                tbqk = data[1];
		            }
		            if (!data[2]) {//删除最后一个表时清空序号
		                cwkjzdbaxh = "";
		            }
		            updatetabtitle();
		            window.top.closeprogress();
		        }
		    }
		}
	);
}


//添加行
function addRow() {
    if (sbzt == "0" || sbzt == "2") {
        doCurrTabFun("addRow()");
    } else if (sbzt == "1") {
        window.top.alert('消息', "财务会计制度备案您已备案，不能修改备案数据，如需修改备案表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的备案操作正在处理，请耐心等待结果，不要修改备案表数据。", 'warning');
    }
}

//删除行
function delRow() {
    if (sbzt == "0" || sbzt == "2") {
        doCurrTabFun("delRow()");
    } else if (sbzt == "1") {
        window.top.alert('消息', "财务会计制度备案您已备案，不能修改备案数据，如需修改备案表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的备案操作正在处理，请耐心等待结果，不要修改备案表数据。", 'warning');
    }
}


//根据报表填报情况更新tab标题
function updateTabTitle() {
    var tab = $('#tabList').tabs('getSelected');
    var title = tab.panel('options').title;
    if (title == "财务会计制度备案") {
        if (tbqk.substring(0, 1) == "1") {
            var newTitle = "√财务会计制度备案"
            updateTitle(title, newTitle, options);
        }
    }
    if (title == "√财务会计制度备案") {
        if (tbqk.substring(0, 1) == "0") {
            var newTitle = "财务会计制度备案"
            updateTitle(title, newTitle, options);
        }
    }
}

//给弹出的信息页面调用，关闭当前标签
function closeBblistTab() {
    if (currOprate == 0) {
        window.top.closeCurrTab();
    }
}

//给弹出的信息页面调用，获取提示信息
function getTsxxList() {
    return tsxxList;
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

//提交申报
function submitTableData(xhid) {
    if (sbzt == "0" || sbzt == "2") {
        window.top.alert("备案成功", "备案成功(注：模拟系统此处只做模拟操作。)", "info");
        //currOprate = 1;
        //window.top.closeEasyDialog();
        //if (cwkjzdbaxh && cwkjzdbaxh.length > 0) {
        //    window.top.progress("正在备案", "正在提交备案......");
        //    $.postJSON("/WSSBSL/do_cwkjzdba_Cwkjzdba_submitCwkjzdba.action", { "cwkjzdbaxh": cwkjzdbaxh, "xhid": xhid }, function (data, textStatus) {
        //        window.top.closeProgress();
        //        if (data && data.length > 0) {
        //            if (data[0] == "Y") {
        //                sbzt = "1";
        //                lockAllReport();		//锁定报表
        //                window.top.reloadMain();//刷新首页应申报信息列表和报表查询菜单
        //                window.top.alert("备案成功", data[1], "info");
        //                setTimeout(reloadBbtbList, 3000);
        //            } else {
        //                //如果提示属于信息确认
        //                if (data[2] && data[2].length > 0) {
        //                    var xxnr = "";
        //                    var infoLen = data[1].length;
        //                    for (var i = 0; i < infoLen; i++) {
        //                        var tsxx = data[1][i][0];
        //                        xxnr = xxnr + tsxx.xxnr + "<br>";
        //                    }
        //                    xxnr = xxnr + "<br><br>是否跳过当前检查，继续备案？";
        //                    window.top.confirm("校验提示", xxnr, function (result) {
        //                        if (result) {
        //                            //继续申报
        //                            submitTableData(data[2]);
        //                        }
        //                    });
        //                } else {
        //                    tsxxList = data[1];
        //                    showTsxxListWindow();
        //                }
        //            }
        //        } else {
        //            window.top.alert('错误', '网络通迅异常，提交备案失败！', 'error');
        //        }
        //    });
        //} else {
        //    window.top.alert('提示', '您的报表尚未填写，不能提交！', 'warning');
        //}
    } else if (sbzt == "1") {
        window.top.alert('消息', "备案失败。财务会计制度备案您已备案，不能重复备案，如需修改备案表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的备案操作正在处理，请耐心等待结果，不要重复备案。", 'warning');
    }
}

function reloadBbtbList() {
    window.top.loadBbtbList2();//刷新填报菜单
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