var userYSBQCId;
var YSBQCId;
var HappenDate;
var nsrsbh;
var djxh;
var sbzt;
var skssq;
var ssqq;
var ssqz;
var xssr;//销售收入
var sbzt;//申报状态
var sbxh;//申报序号
var isBcsb = "N";	//是否补充申报标志
var zsl;//征收率，如果是个体户，值为“应征费额”
var gthBz;//个体户标志,非个体户(值为N),个体户(值为Y)
var isxwqy;//是否小微企业标志，1代表是小微企业。0代表非小微企业
var xwqyqzd;//小微企业起征点
var tsxxList;
var currOprate = 0;	//当前操作  0:列表初始化  1:提交申报   2:报表填写资格检查
var tbqk;			//填报情况：000000000000,0-未填，1已填
var loadFinish = false;		//加载完成
var options = {
    onSelect: function (title) {
        iframeAutoSize();
    }
};

var SB_SLJSJJ_TbbzList;
var SB_SLJSJJ_dynamicBz;
var SB_SLJSJJ_gzList;

//启动时加载
$(function () {
    loadNsrxx();//  取得纳税人识别号
});

//加载纳税人信息（包括其他各种数据）
function loadNsrxx() {
    $.postJSON("/WSSBSL/do_index_Index_loadIndexNsrxx.ashx", function (data) {
        if (data && data.length > 0) {
            nsrsbh = data[2]; //  取得纳税人识别号
            sljsjjInit();		//页面数据及报表初始化
            autoWidth();		//定时自动设置面板宽度
        } else {
            window.top.alert('消息', "获取纳税人信息出错！", 'error');
        }
    });
}

//显示申报功能说明
function showGnsm() {
    window.top.alert("水利建设基金正常申报功能说明",
		"该功能适用于缴纳水利建设基金的纳税人正常申报当期应缴纳的水利建设基金，正常申报的所属期由系统根据纳税人当期增值税的所属期自动带出，不能修改。",
		"");
}

//水利建设基金主页面初始化
function sljsjjInit(xhid) {
    window.top.progress("正在加载报表", "正在加载报表数据......");
    $.postJSON("/WSSBSL/do_sljsjj_Sljsjj_loadSljsjjInit.ashx", {
        "xhid": xhid
    }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                showGnsm();		//显示申报功能说明
                userYSBQCId = data[1].userYSBQCId;
                YSBQCId = data[1].userYSBQCId;
                HappenDate = data[1].HappenDate;
                zsl = data[1].zsl;
                skssq = data[1].skssq;
                xssr = data[1].sljjxse;
                ssqq = data[1].ssqq;
                ssqz = data[1].ssqz;
                sbzt = data[1].sbzt;//申报状态
                sbxh = data[1].sbxh;
                tbqk = data[1].tbqk;
                gthBz = data[1].gthBz;
                djxh = data[1].djxh;
                var dqyisb = data[1].dqyisb;
                var xxwl_flag = data[1].isxwqy;//是否小微企业标志  N:否   Y:是
                if (xxwl_flag == "Y") {
                    isxwqy = "1";
                }
                else if (xxwl_flag == "N") {
                    isxwqy = "0";
                }
                xwqyqzd = data[1].xwqyqzd;	//小微企业起征点		
                $("#lb_ssqq").text(ssqq);
                $("#lb_ssqz").text(ssqz);
                $("#zzsxsje").text(data[1].sljjxse);
                if (dqyisb == "Y") {
                    dqyisb = "是";
                } else {
                    dqyisb = "否";
                }
                $("#yisbbz").text(dqyisb);
                if (gthBz == "N") {		//非个体户			
                    var zslStr = zsl * 100 + "%";//百分比征收率
                    $("#sljjzsl").text(zslStr);//显示征收率
                } else {
                    $("#sljjzsl_title").text("");//不显示征收率
                }
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
                            sljsjjInit(data[2]);
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
    var params = "bbmc=SB_SLJSJJ";
    $.postJSON("/WSSBSL/do_report_Report_queryTbbz_sljs.ashx", { "params": params }, function (data, textStatus) {
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
    $.postJSON("/WSSBSL/do_report_Report_loadLockRule_sljs.ashx", {
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
        loadSljsjjBbTabs(gthBz);
    });
}

//加载水利建设基金申报表tab
function loadSljsjjBbTabs(gthBz) {
    var isGth;//是否个体户;  0:否      1:是
    var zbTitle = "水利建设基金申报表";
    if (tbqk.substring(0, 1) == '1') {
        zbTitle = "√水利建设基金申报表";
    }
    if (typeof (nsrsbh) == "undefined") {
        window.top.alert('消息', "无法获取必要参数！显示报表失败！请刷新页面重试！", 'warning');
    } else {
        addTab(zbTitle, "/WSSBSL/reportJsp/showReport_sljsjj.aspx?raq=/sljsjj/sljsjj.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0&isBcsb=" + isBcsb + "&isxwqy=" + isxwqy + "&xwqyqzd=" + xwqyqzd + "&zsl=" + zsl + "&isGth=" + gthBz + "&djxh=" + djxh + "&userYSBQCId=" + userYSBQCId + "&YSBQCId=" + YSBQCId + "&HappenDate=" + HappenDate, false);
        try {
            if (zsl == null || zsl == "" || !zsl) {
                var xxnr = "【sljsjjBbList.js:174】/WSSBSL/reportJsp/showReport_sljsjj.aspx?raq=/sljsjj/sljsjj.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0&isBcsb=" + isBcsb + "&isxwqy=" + isxwqy + "&xwqyqzd=" + xwqyqzd + "&zsl=" + zsl + "&isGth=" + gthBz;
                window.top.recordInfo(xxnr);
            }
        } catch (e) { }
    }
    tabsOptions(options);
    window.top.closeProgress();
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

//给弹出的信息页面调用，获取提示信息
function getTsxxList() {
    return tsxxList;
}

//报表保存操作
function saveReport() {
    debugger;
    if (sbzt == "0" || sbzt == "2") {
        var title = $('#tabList').tabs('getSelected').panel('options').title;
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
    $.postJSON("/WSSBSL/do_sljsjj_Sljsjj_updateTbxx.ashx",
		{ "isBcsb": isBcsb, "skssq": skssq, "type": "save" },
		function (data, textStatus) {
		    if (data && data.length > 0) {
		        if (data[0] == "Y") {
		            if (data[1]) {
		                tbqk = data[1];
		            }
		            if (data[2]) {
		                sbxh = data[2];
		            }
		            updateTabTitle();//更新标题
		            window.top.closeProgress();
		        }
		    }
		}
	);
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
        if (tbqk.substring(0, 1) == "1") {
            var newTitle = "√水利建设基金申报表"
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√水利建设基金申报表") {
        if (tbqk.substring(0, 1) == "0") {
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
function delReport(bblsh, params, cachedId) {
    $.postJSON("/WSSBSL/do_sljsjj_Sljsjj_delete.ashx",
		{ "bblsh": bblsh, "params": params, "cachedId": cachedId },
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

//删除后调用
function afterDelete() {
    $.postJSON("/WSSBSL/do_sljsjj_Sljsjj_updateTbxx.ashx",
		{ "isBcsb": isBcsb, "skssq": skssq, "type": "del" },
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
		        }
		    }
		}
	);
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
                    $.postJSON("/WSSBSL/do_sljsjj_Sljsjj_submitSljsjj.ashx",
						{ "sbxh": sbxh, "xhid": xhid, "skssq": skssq, "ssqq": ssqq, "ssqz": ssqz, "isBcsb": isBcsb, "isGth": gthBz, "userYSBQCId": userYSBQCId }, function (data, textStatus) {
						    window.top.closeProgress();
						    if (data && data.length > 0) {
						        if (data[0] == "Y") {
						            sbzt = "1";
						            lockAllReport();		//锁定报表
						            window.top.reloadMain();//刷新首页应申报信息列表和报表查询菜单
						            //tsxxList = data[1];
						            $("#yisbbz").text("是");
						            window.top.alert("申报成功", data[1], "info");
						            //if (data[2] == "Y") {//如果应征税款
						            //    var msg = data[1] + "，您是否需要现在立即缴纳税款？如果现在不缴纳税款，在缴款期限内可使用手动缴款功能进行缴款。";
						            //    window.top.confirm("申报成功", msg, function (result) {
						            //        if (result) {
						            //            //发起扣款
						            //            window.top.addTab("税款缴纳-当期未缴税款", "/WSSBSL/show_skjn_dqwjsk.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
						            //            //doAutoKk(sbxh,"SB_SLJSJJ",null);
						            //        }
						            //    });
						            //} else {
						            //    window.top.alert("申报成功", data[1], "info");
						            //}
						        }
						        else {
						            window.top.alert('提示', '您的报表尚未填写，不能提交！', 'warning');
						        }
						        //else {
						        //    //如果提示属于信息确认
						        //    if (data[2] && data[2].length > 0) {
						        //        var xxnr = "";
						        //        var infoLen = data[1].length;
						        //        for (var i = 0; i < infoLen; i++) {
						        //            var tsxx = data[1][i][0];
						        //            xxnr = xxnr + tsxx.xxnr + "<br>";
						        //        }
						        //        xxnr = xxnr + "<br><br>是否跳过当前检查，继续申报？";
						        //        window.top.confirm("校验提示", xxnr, function (result) {
						        //            if (result) {
						        //                //继续申报
						        //                submitTableData(data[2]);
						        //            }
						        //        });
						        //    } else {
						        //        tsxxList = data[1];
						        //        showTsxxListWindow();
						        //    }
						        //}
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