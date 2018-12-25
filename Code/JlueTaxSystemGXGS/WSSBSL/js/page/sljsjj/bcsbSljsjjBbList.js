var nsrsbh;
var djxh;
var sbzt;
var skssq;
var ssqq;
var ssqz;
var xssr; //销售收入
var isBcsb = "Y"; //是否补充申报标志
var isGth = ""; //是否个体户
var zsl; //征收率，如果是个体户，值为“应征费额”
var sbxxList;
var tsxxList;
var currOprate = 0; //当前操作  0:列表初始化  1:提交申报   2:报表填写资格检查
var tbqk; //填报情况：0-未填，1已填
var loadFinish = false; //加载完成
var options = {
    onSelect: function (title) {
        iframeAutoSize();
    }
};
var SB_SLJSJJ_TbbzList;
var SB_SLJSJJ_dynamicBz;
var SB_SLJSJJ_gzList;
var isxwqy; //是否小微企业标志，1代表是小微企业。0代表非小微企业
var xwqyqzd; //小微企业起征点
//启动时加载
$(function () {
    loadNsrxx(); //  取得纳税人识别号
});

//加载纳税人信息（包括其他各种数据）
function loadNsrxx() {
    $.postJSON("/WSSBSL/do_index_Index_loadIndexNsrxx.ashx", function (data) {
        if (data && data.length > 0) {
            nsrsbh = data[2]; //  取得纳税人识别号
            showSsqByNsrzg();
            autoWidth(); //定时自动设置面板宽度
        } else {
            window.top.alert('消息', "获取纳税人信息出错！", 'error');
        }
    });
}

//显示申报功能说明
function showGnsm() {
    window.top.alert("水利建设基金补充申报功能说明",
		"该功能适用于缴纳水利建设基金的纳税人补充申报往期未申报或漏申报的水利建设基金，补充申报的属期在年度内可自由选择但不能跨年度申报。",
		"");
}

//查询个体户标志。非个体显示年月的属期框；个体显示年的属期框
function showSsqByNsrzg() {
    $.postJSON("/WSSBSL/do_sljsjj_Sljsjj_getGth.ashx", function (data) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                isGth = data[1];
                if (isGth == "Y") { //个体户
                    $("#fgth_div").hide();
                    $("#gth_div").show();
                } else if (isGth == "N") {
                    $("#fgth_div").show();
                    $("#gth_div").hide();
                }
                showGnsm(); //显示申报功能说明	
            } else {
                //弹出错误信息并关闭tab
                tsxxList = data[1];
                showTsxxListWindow(); //显示提示信息
            }
            autoWidth(); //定时自动设置面板宽度
        } else {
            window.top.alert('消息', "获取个体户标志出错！", 'error');
        }
    });
}

//水利建设基金补充申报开始申报按钮
function startSb(xhid) {
    if (isGth == "N") {
        var ssqq_m = $("#ssqq").val();
        var ssqz_m = $("#ssqz").val();
        var reg = /\d{4}-\d{2}/;
        if (ssqq_m == "" || ssqz_m == "") {
            window.top.alert("错误", "所属期起和所属期止不能为空，请选择日期后再填报！", "error");
        } else if (ssqq_m.substring(0, 4) != ssqz_m.substring(0, 4)) {
            window.top.alert("错误", "所属期起和所属期止的年份必须一致！", "error");
        } else if (parseInt(ssqq_m.substring(0, 4) + "" + ssqq_m.substring(5, 7), 10) < 201012) {
            window.top.alert("错误", "水利建设基金申报表所属期不能小于2010年12月！", "error");
        } else if (parseInt(ssqz_m.substring(0, 4) + "" + ssqz_m.substring(5, 7), 10) > 202011) {
            window.top.alert("错误", "水利建设基金申报表所属期不能大于2020年11月！", "error");
        } else if (!reg.test(ssqq_m) || !reg.test(ssqz_m)) {
            window.top.alert("错误", "输入日期格式不正确，请输入类似“2014-06”的格式！", "error");
        } else if (parseInt(ssqq_m.substring(5, 7), 10) > parseInt(ssqz_m.substring(5, 7), 10)) {
            window.top.alert("错误", "所属期起不能大于所属期止！", "error");
        } else if (reg.test(ssqq_m) && reg.test(ssqz_m) && ssqq_m.substring(0, 4) == ssqz_m.substring(0, 4) && ssqq_m.substring(5, 7) <= ssqz_m.substring(5, 7)) {
            skssq = ssqq_m.substring(0, 4) + "" + ssqq_m.substring(5, 7) + "" + ssqz_m.substring(5, 7);
            ssqq = ssqq_m + "-01";
            var day = new Date(ssqz_m.substring(0, 4), ssqz_m.substring(5, 7), 0);
            ssqz = ssqz_m + "-" + day.getDate();
            sljsjjBcsbInit();
        }
    } else if (isGth == "Y") {
        var ssq_m = $("#ssq").val();
        var reg = /\d{4}/;
        if (ssq_m == "") {
            window.top.alert("错误", "所属期起和所属期止不能为空，请选择日期后再填报！", "error");
        } else if (new Date(ssq_m, "6", "1") > new Date()) {
            window.top.alert("错误", "当前不是申报期，不能填写该报表！", "error");
        } else if (parseInt(ssq_m.substring(0, 4) + "01", 10) < 201012) {
            window.top.alert("错误", "水利建设基金申报表所属期不能小于2010年12月！", "error");
        } else if (parseInt(ssq_m.substring(0, 4) + "12", 10) > 202011) {
            window.top.alert("错误", "水利建设基金申报表所属期不能大于2020年11月！", "error");
        } else if (!reg.test(ssq_m)) {
            window.top.alert("错误", "输入日期格式不正确，请输入类似“2014-06”的格式！", "error");
        } else if (reg.test(ssq_m)) {
            skssq = ssq_m + "0112";
            ssqq = ssq_m + "-01-01";
            ssqz = ssq_m + "-12-31";
            sljsjjBcsbInit();
        }
    } else if (isGth == "") {
        window.top.alert("错误", "判断纳税人类型失败！", "error");
    }
}

//水利建设基金补充申报主页面初始化
function sljsjjBcsbInit(xhid) {
    window.top.progress("正在加载报表", "正在加载报表数据......");
    $.postJSON("/WSSBSL/do_sljsjj_Sljsjj_loadSljsjjBcsbInit.ashx", {
        "xhid": xhid,
        "ssqq": ssqq,
        "ssqz": ssqz,
        "skssq": skssq,
        "isGth": isGth
    }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                var xxwl_flag = data[1].isxwqy; //小微企业标志 N:否  Y:是
                if (xxwl_flag == "Y") {
                    isxwqy = "1";
                } else if (xxwl_flag == "N") {
                    isxwqy = "0";
                }
                xwqyqzd = data[1].xwqyqzd; //小微企业起征点	
                sbzt = data[1].sbzt;
                sbxh = data[1].sbxh;
                tbqk = data[1].tbqk;
                zsl = data[1].zsl;
                xssr = data[1].sljjxse;
                var dqyisb = data[1].dqyisb;
                sbxxList = data[1].sbxxList;
                tbqk = data[1].tbqk;
                djxh = data[1].djxh;
                $("#zzsxsje").text(data[1].sljjxse);
                if (isGth == "N") {
                    var zslStr = zsl * 100 + "%"; //显示百分比的征收率
                    $("#sljjzsl").text(zslStr);
                } else {
                    $("#sljjzsl_title").text(""); //不显示征收率
                }
                if (dqyisb == "Y") { //当期已申报									
                    dqyisb = "是";
                    loadTbbz();
                } else {
                    dqyisb = "否";
                    loadTbbz();
                }
                $("#yisbbz").text(dqyisb);
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
                            sljsjjBcsbInit(data[2]);
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
                        showTsxxListWindow(); //显示提示信息
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
    var params = "bbmc=SB_SLJSJJ";
    $.postJSON("/WSSBSL/do_report_Report_queryTbbz.ashx", {
        "params": params
    }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                SB_SLJSJJ_TbbzList = data[1][0];
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
    var params = "bbmc=SB_SLJSJJ;ssqq=" + ssqq + ";ssqz=" + ssqz + ";skssq=" + skssq;
    $.postJSON("/WSSBSL/do_report_Report_loadLockRule.ashx", {
        "params": params
    }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                SB_SLJSJJ_dynamicBz = data[1][0];
                SB_SLJSJJ_gzList = data[2][0];
            } else {
                window.top.alert('消息', data[1], 'warning');
            }
        }
        loadSljsjjBbTabs();
    });
}

//显示当期已申报列表dialog
function showDqysbList() {
    var buttons = [{
        text: '关闭',
        iconCls: 'icon-cancel',
        handler: function () {
            window.top.closeEasyDialog();
            window.top.closeCurrTab();
            //reloadTab();
        }
    }];
    window.top.showEasyDialog("/WSSBSL/show_sljsjj_dqysbList.action?", {
        title: "已申报列表", //标题
        width: 800, //高度
        height: 500, //宽度
        left: ($(window.top).width() - 600) * 0.5, //居中时左边距
        top: 100, //上边距
        modal: false, //模式窗口
        iconCls: 'icon-check', //图标样式
        minimizable: false, //是否显示最小化按钮
        maximizable: true, //是否显示最大化按钮
        loadingMessage: null, //窗口内容加载时显示信息
        toolbar: null, //窗口工具条
        buttons: buttons, //底部按钮
        doSize: true, //面板创建的时候将被调整和重新布局
        resizable: false //对话框是否可编辑大小
    });
}

//加载水利建设基金申报表tab
function loadSljsjjBbTabs() {
    var zbTitle = "水利建设基金申报表";
    if (tbqk == '1') {
        zbTitle = "√水利建设基金申报表";
    }
    var tab = $('#tabList').tabs('getSelected');
    if (tab) {
        var title = tab.panel('options').title;
        closeTab(title);
    }
    if (typeof (nsrsbh) == "undefined") {
        window.top.alert('消息', "无法获取必要参数！显示报表失败！请刷新页面重试！", 'warning');
    } else {
        addTab(zbTitle, "/WSSBSL/reportJsp/showReport_sljsjj.aspx?raq=/sljsjj/sljsjj.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt +
			"&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0&isBcsb=" + isBcsb + "&isxwqy=" + isxwqy + "&xwqyqzd=" + xwqyqzd + "&zsl=" + zsl + "&isGth=" + isGth + "&djxh=" + djxh, false);
        try {
            if (zsl == null || zsl == "" || !zsl) {
                var xxnr = "【bcsbSljsjjBbList.js:288】/WSSBSL/reportJsp/showReport_sljsjj.aspx?raq=/sljsjj/sljsjj.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt +
					"&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0&isBcsb=" + isBcsb + "&isxwqy=" + isxwqy + "&xwqyqzd=" + xwqyqzd + "&zsl=" + zsl + "&isGth=" + isGth + "&djxh=" + djxh;
                window.top.recordInfo(xxnr);
            }
        } catch (e) { }
    }
    tabsOptions(options);
    window.top.closeProgress();
}

//报表保存操作
function saveReport() {
    debugger;
    if (sbzt == "0" || sbzt == "2") {
        window.top.progress("正在保存", "数据正在保存......");
        doCurrTabFun("submit()");
    } else if (sbzt == "1") {
        window.top.alert('消息', "保存失败。该属期（" + skssq + "）报表您已申报，不能修改报表数据，如需修改申报表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不要修改报表数据。", 'warning');
    }
}

//保存后回调方法
function afterSave() {
    $.postJSON("/WSSBSL/do_sljsjj_Sljsjj_updateTbxx.action", {
        "isBcsb": isBcsb,
        "skssq": skssq
    },

	function (data, textStatus) {
	    if (data && data.length > 0) {
	        if (data[0] == "Y") {
	            if (data[1]) {
	                tbqk = data[1];
	            }
	            if (data[2]) {
	                sbxh = data[2];
	            }
	            updateTabTitle(); //更新标题
	            window.top.closeProgress();
	        }
	    }
	});
}

//根据报表填报情况更新tab标题
function updateTabTitle() {
    var tab = $('#tabList').tabs('getSelected');
    var oldTitle = tab.panel('options').title;
    changeTitleByTxqk(oldTitle);
}

//根据填报情况修改tab标题
function changeTitleByTxqk(title) {
    if (title == "水利建设基金申报表") {
        if (tbqk == "1") {
            var newTitle = "√水利建设基金申报表"
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√水利建设基金申报表") {
        if (tbqk == "0") {
            var newTitle = "水利建设基金申报表"
            updateTitle(title, newTitle, options);
        }
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
            doCurrTabFun("hideInput()"); //为打印而隐藏输入框
            var id = tab.panel('options').id;
            var htmlTxt = window.frames["mainiframe" + id].document.documentElement.outerHTML;
            var bbmc = doCurrTabFun("getBbmc()"); //获取当前页面的报表名称
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

//定时自动设置宽度(0.3秒一次)
function autoWidth() {
    $("#tbxxDiv").width($("#tbxxDiv").parent().width());
    setTimeout(autoWidth, 300);
}

//删除报表操作
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

//删除报表
function delReport(bblsh, params) {
    $.postJSON("/WSSBSL/do_sljsjj_Sljsjj_delete.action", {
        "bblsh": bblsh,
        "params": params
    },

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
	});
}

//删除后调用
function afterDelete() {
    $.postJSON("/WSSBSL/do_sljsjj_Sljsjj_updateTbxx.action", {
        "isBcsb": isBcsb,
        "skssq": skssq
    },

	function (data, textStatus) {
	    if (data && data.length > 0) {
	        if (data[0] == "Y") {
	            if (data[1]) {
	                tbqk = data[1];
	            }
	            if (!data[2]) {
	                sbxh = "";
	            }
	            updateTabTitle();
	            window.top.closeProgress();
	        }
	    }
	});
}

//提交申报
function submitTableData(xhid) {
    if (sbzt == "0" || sbzt == "2") {
        currOprate = 1;
        window.top.closeEasyDialog();
        if (sbxh && sbxh.length > 0) {
            window.top.confirm("确认申报", "您需要立即申报当期水利建设基金申报表数据吗？", function (result) {
                if (result) {
                    window.top.progress("正在申报", "正在提交申报......");
                    $.postJSON("/WSSBSL/do_sljsjj_Sljsjj_submitSljsjj.action", {
                        "sbxh": sbxh,
                        "xhid": xhid,
                        "skssq": skssq,
                        "ssqq": ssqq,
                        "ssqz": ssqz,
                        "isBcsb": isBcsb,
                        "isGth": isGth
                    }, function (data, textStatus) {
                        window.top.closeProgress();
                        if (data && data.length > 0) {
                            if (data[0] == "Y") {
                                sbzt = "1";
                                lockAllReport(); //锁定报表
                                window.top.reloadMain(); //刷新首页应申报信息列表和报表查询菜单
                                tsxxList = data[1];
                                $("#yisbbz").text("是");
                                if (data[2] == "Y") { //如果应征税款
                                    var msg = data[1] + "，您是否需要现在立即缴纳税款？如果现在不缴纳税款，在缴款期限内可使用手动缴款功能进行缴款。";
                                    window.top.confirm("申报成功", msg, function (result) {
                                        if (result) {
                                            //发起扣款
                                            window.top.addTab("税款缴纳-当期未缴税款", "/WSSBSL/show_skjn_dqwjsk.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
                                            //doAutoKk(sbxh,"SB_SLJSJJ",null);
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

//执行当前TAB页面下的方法
function doCurrTabFun(f) {
    var tab = $('#tabList').tabs('getSelected');
    var id = tab.panel('options').id;
    var str = 'window.frames["mainiframe' + id + '"].' + f;
    return eval(str);
}

//根据title执行对应的TAB页面下的方法
function doCurrTabFunByTitle(title, f) {
    var tab = getTab(title);
    var id = tab.panel('options').id;
    var str = 'window.frames["mainiframe' + id + '"].' + f;
    return eval(str);
}

//刷新当前tab页面
function reloadTab() {
    var tab = $('#tabList').tabs('getSelected');
    var title = tab.panel('options').title;
    var id = tab.panel('options').id;
    var tabId = "mainiframe" + id;
    window.frames[tabId].location.reload();
}

//获取当前TAB页面下的全局变量值
function getTabVar(v) {
    var tab = $('#tabList').tabs('getSelected');
    var id = tab.panel('options').id;
    var str = 'window.frames["mainiframe' + id + '"].' + v;
    return str;
}

//给弹出的信息页面调用，关闭当前标签
function closeBblistTab() {
    if (currOprate == 0) {
        window.top.closeCurrTab();
    }
}

//弹出信息显示窗口
function showTsxxListWindow() {
    var modal = true;
    if (currOprate == 1) {
        modal = false;
    }
    window.top.showEasyDialog('/WSSBSL/show_common_tsxx.aspx', {
        title: '反馈信息', //标题
        width: 600, //宽度
        height: 350, //高度
        left: ($(window.top).width() - 600) * 0.5, //居中时左边距
        top: ($(window.top).height() - 350) * 0.4, //居中时上边距
        modal: modal, //模式窗口
        iconCls: 'icon-help', //图标样式
        collapsible: true, //是否显示折叠按钮
        minimizable: false, //是否显示最小化按钮
        maximizable: false, //是否显示最大化按钮
        loadingMessage: null, //窗口内容加载时显示信息
        toolbar: null, //窗口工具条
        buttons: null, //底部按钮
        doSize: true, //面板创建的时候将被调整和重新布局
        resizable: true //对话框是否可编辑大小
    });
}

//给弹出的信息页面调用，获取提示信息
function getTsxxList() {
    return tsxxList;
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
        $.postJSON("/WSSBSL/do_skjn_Skjn_autoKk.action", {
            "sbxh": sbxh,
            "bbmc": bbmc,
            "xhid": xhid
        }, function (data, textStatus) {
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