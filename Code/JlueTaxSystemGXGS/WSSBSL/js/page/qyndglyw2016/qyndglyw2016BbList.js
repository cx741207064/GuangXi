var nsrsbh;
var skssq;
var ssqq;
var ssqz;
var sbxh;
var sbzt;
var tsxxList;
var currOprate = 0;	//当前操作  0:列表初始化  1:提交申报   2:报表填写资格检查
var tbqk;			//填报情况：0000000000,0-未填，1已填
var options = {
    onSelect: function (title) {
        iframeAutoSize();
        showButton();
        checkQyndglyw2016Txzg();
    }
};
var loadFinish = false;		//加载完成
var crrFbTitle;		//当前显示的附表的标题
var makeWLHZBing = false //生成往来汇总表中

var WBJK_SB_QYNDGLYW_G000000_TbbzList;
var WBJK_SB_QYNDGLYW_G100000_TbbzList;
var WBJK_SB_QYNDGLYW_G101000_TbbzList;
var WBJK_SB_QYNDGLYW_G102000_TbbzList;
var WBJK_SB_QYNDGLYW_G103000_TbbzList;
var WBJK_SB_QYNDGLYW_G104000_TbbzList;
var WBJK_SB_QYNDGLYW_G105000_TbbzList;
var WBJK_SB_QYNDGLYW_G106000_TbbzList;
var WBJK_SB_QYNDGLYW_G107000_TbbzList;
var WBJK_SB_QYNDGLYW_G108000_TbbzList;
var WBJK_SB_QYNDGLYW_G109000_TbbzList;
var WBJK_SB_QYNDGLYW_G110000_TbbzList;
var WBJK_SB_QYNDGLYW_G111000_TbbzList;
var WBJK_SB_QYNDGLYW_G112000_TbbzList;
var WBJK_SB_QYNDGLYW_G113010_TbbzList;
var WBJK_SB_QYNDGLYW_G113020_TbbzList;
var WBJK_SB_QYNDGLYW_G114010_TbbzList;
var WBJK_SB_QYNDGLYW_G114011_TbbzList;
var WBJK_SB_QYNDGLYW_G114020_TbbzList;
var WBJK_SB_QYNDGLYW_G114021_TbbzList;
var WBJK_SB_QYNDGLYW_G114030_TbbzList;
var WBJK_SB_QYNDGLYW_G114031_TbbzList;

var WBJK_SB_QYNDGLYW_G000000_dynamicBz;
var WBJK_SB_QYNDGLYW_G100000_dynamicBz;
var WBJK_SB_QYNDGLYW_G101000_dynamicBz;
var WBJK_SB_QYNDGLYW_G102000_dynamicBz;
var WBJK_SB_QYNDGLYW_G103000_dynamicBz;
var WBJK_SB_QYNDGLYW_G104000_dynamicBz;
var WBJK_SB_QYNDGLYW_G105000_dynamicBz;
var WBJK_SB_QYNDGLYW_G106000_dynamicBz;
var WBJK_SB_QYNDGLYW_G107000_dynamicBz;
var WBJK_SB_QYNDGLYW_G108000_dynamicBz;
var WBJK_SB_QYNDGLYW_G109000_dynamicBz;
var WBJK_SB_QYNDGLYW_G110000_dynamicBz;
var WBJK_SB_QYNDGLYW_G111000_dynamicBz;
var WBJK_SB_QYNDGLYW_G112000_dynamicBz;
var WBJK_SB_QYNDGLYW_G113010_dynamicBz;
var WBJK_SB_QYNDGLYW_G113020_dynamicBz;
var WBJK_SB_QYNDGLYW_G114010_dynamicBz;
var WBJK_SB_QYNDGLYW_G114011_dynamicBz;
var WBJK_SB_QYNDGLYW_G114020_dynamicBz;
var WBJK_SB_QYNDGLYW_G114021_dynamicBz;
var WBJK_SB_QYNDGLYW_G114030_dynamicBz;
var WBJK_SB_QYNDGLYW_G114031_dynamicBz;

var WBJK_SB_QYNDGLYW_G000000_gzList;
var WBJK_SB_QYNDGLYW_G100000_gzList;
var WBJK_SB_QYNDGLYW_G101000_gzList;
var WBJK_SB_QYNDGLYW_G102000_gzList;
var WBJK_SB_QYNDGLYW_G103000_gzList;
var WBJK_SB_QYNDGLYW_G104000_gzList;
var WBJK_SB_QYNDGLYW_G105000_gzList;
var WBJK_SB_QYNDGLYW_G106000_gzList;
var WBJK_SB_QYNDGLYW_G107000_gzList;
var WBJK_SB_QYNDGLYW_G108000_gzList;
var WBJK_SB_QYNDGLYW_G109000_gzList;
var WBJK_SB_QYNDGLYW_G110000_gzList;
var WBJK_SB_QYNDGLYW_G111000_gzList;
var WBJK_SB_QYNDGLYW_G112000_gzList;
var WBJK_SB_QYNDGLYW_G113010_gzList;
var WBJK_SB_QYNDGLYW_G113020_gzList;
var WBJK_SB_QYNDGLYW_G114010_gzList;
var WBJK_SB_QYNDGLYW_G114011_gzList;
var WBJK_SB_QYNDGLYW_G114020_gzList;
var WBJK_SB_QYNDGLYW_G114021_gzList;
var WBJK_SB_QYNDGLYW_G114030_gzList;
var WBJK_SB_QYNDGLYW_G114031_gzList;

//启动时加载
$(function () {
    showTbtsxxWindow();	//报表初始化
    autoWidth();		//定时自动设置面板宽度
});

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

//获取加载完成标志
function getLoadFinish() {
    return loadFinish;
}

//提交申报
function submitTableData(xhid) {
    //申报前检查主要报表是否完整
    if (sbzt == "0" || sbzt == "2") {
        if (getTab('√报告企业信息表')) {
            currOprate = 1;
            window.top.closeEasyDialog();
            if (sbxh && sbxh.length > 0) {
                window.top.progress("正在申报", "正在提交申报......");
                $.postJSON("do_qyndglyw2016_Qyndglyw2016_submitQyndglyw2016.action", {
                    "sbxh": sbxh,
                    "tbqk": tbqk,
                    "xhid": xhid
                }, function (data, textStatus) {
                    window.top.closeProgress();
                    if (data && data.length > 0) {
                        if (data[0] == "Y") {
                            sbzt = "1";
                            lockAllReport(); //锁定报表
                            window.top.reloadMain();//刷新首页应申报信息列表和报表查询菜单
                            if (data[2] == "Y") {//如果应征税款
                                var msg = data[1] + "，您是否需要现在立即缴纳税款？如果现在不缴纳税款，在缴款期限内可使用手动缴款功能进行缴款。";
                                window.top.confirm("申报成功", msg, function (result) {
                                    if (result) {
                                        //弹出扣款提示
                                        window.top.addTab("税款缴纳-当期未缴税款", "/WSSBSL/show_skjn_dqwjsk.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
                                    }
                                });
                            }
                            else {
                                window.top.alert("申报成功", data[1], "info");
                            }
                        }
                        else {
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
                            }
                            else {
                                tsxxList = data[1];
                                showTsxxListWindow();
                            }
                        }
                    }
                    else {
                        window.top.alert('错误', '网络通迅异常，提交申报失败！', 'error');
                    }
                });
            }
            else {
                window.top.alert('提示', '您的报表尚未填写，不能提交！', 'warning');
            }
        } else {
            if (getTab('报告企业信息表')) {
                window.top.alert('提示', '您尚未保存报告企业信息表，不能提交申报！', 'warning');
            }
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

//定时自动设置宽度(0.3秒一次)
function autoWidth() {
    $("#tbxxDiv").width($("#tbxxDiv").parent().width());
    setTimeout(autoWidth, 300);
}

//加载企业年度关联业务2016报表tab
function loadQyndGlyw2016BbTabs() {
    var fmTitle = "封面";
    var tbbdTitle = "填报表单";
    var G000000Title = "报告企业信息表";
    var G100000Title = "往来汇总表";
    var G101000Title = "关联关系表";
    var G102000Title = "有形资产所有权交易表";
    var G103000Title = "无形资产所有权交易表";
    var G104000Title = "有形资产使用权交易表";
    var G105000Title = "无形资产使用权交易表";
    var G106000Title = "金融资产交易表";
    var G107000Title = "融通资金表";
    var G108000Title = "关联劳务表";
    var G109000Title = "权益性投资表";
    var G110000Title = "成本分摊协议表";
    var G111000Title = "对外支付款项情况表";
    var G112000Title = "境外关联方信息表";
    var G113010Title = "年度关联交易财务状况分析表(报告企业个别报表信息)";
    var G113020Title = "年度关联交易财务状况分析表(报告企业合并报表信息)";
    var G114010Title = "国别报告-所得、税收和业务活动国别分布表";
    var G114011Title = "国别报告-所得、税收和业务活动国别分布表(英文)";
    var G114020Title = "国别报告-跨国企业集团成员实体名单";
    var G114021Title = "国别报告-跨国企业集团成员实体名单(英文)";
    var G114030Title = "国别报告-附加说明表";
    var G114031Title = "国别报告-附加说明表(英文)";
    if (tbqk.substring(0, 1) == '1') {
        tbbdTitle = "√填报表单";
    } if (tbqk.substring(1, 2) == '1') {
        G000000Title = "√报告企业信息表";
    } if (tbqk.substring(2, 3) == '1') {
        G100000Title = "√往来汇总表";
    } if (tbqk.substring(3, 4) == '1') {
        G101000Title = "√关联关系表";
    } if (tbqk.substring(4, 5) == '1') {
        G102000Title = "√有形资产所有权交易表";
    } if (tbqk.substring(5, 6) == '1') {
        G103000Title = "√无形资产所有权交易表";
    } if (tbqk.substring(6, 7) == '1') {
        G104000Title = "√有形资产使用权交易表";
    } if (tbqk.substring(7, 8) == '1') {
        G105000Title = "√无形资产使用权交易表";
    } if (tbqk.substring(8, 9) == '1') {
        G106000Title = "√金融资产交易表";
    } if (tbqk.substring(9, 10) == '1') {
        G107000Title = "√融通资金表";
    } if (tbqk.substring(10, 11) == '1') {
        G108000Title = "√关联劳务表";
    } if (tbqk.substring(11, 12) == '1') {
        G109000Title = "√权益性投资表";
    } if (tbqk.substring(12, 13) == '1') {
        G110000Title = "√成本分摊协议表";
    } if (tbqk.substring(13, 14) == '1') {
        G111000Title = "√对外支付款项情况表";
    } if (tbqk.substring(14, 15) == '1') {
        G112000Title = "√境外关联方信息表";
    } if (tbqk.substring(15, 16) == '1') {
        G113010Title = "√年度关联交易财务状况分析表(报告企业个别报表信息)";
    } if (tbqk.substring(16, 17) == '1') {
        G113020Title = "√年度关联交易财务状况分析表(报告企业合并报表信息)";
    } if (tbqk.substring(17, 18) == '1') {
        G114010Title = "√国别报告-所得、税收和业务活动国别分布表";
    } if (tbqk.substring(18, 19) == '1') {
        G114011Title = "√国别报告-所得、税收和业务活动国别分布表(英文)";
    } if (tbqk.substring(19, 20) == '1') {
        G114020Title = "√国别报告-跨国企业集团成员实体名单";
    } if (tbqk.substring(20, 21) == '1') {
        G114021Title = "√国别报告-跨国企业集团成员实体名单(英文)";
    } if (tbqk.substring(21, 22) == '1') {
        G114030Title = "√国别报告-附加说明表";
    } if (tbqk.substring(22, 23) == '1') {
        G114031Title = "√国别报告-附加说明表(英文)";
    }
    if (nsrsbh) {
        addTab(fmTitle, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_fm.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        addTab(tbbdTitle, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_tbbd.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        addTab(G000000Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G000000.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        addTab(G100000Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G100000.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        addTab(G101000Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G101000.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
    }
    tabsOptions(options);
    window.top.closeProgress();
}


function showButton() {
    try {
        doCurrTabFun("showOrHideButton()");
    } catch (e) { }
}

//报表初始化
function qyndGlyw2016Init(xhid) {
    window.top.progress("正在加载报表", "正在加载报表数据......");
    $.postJSON("/WSSBSL/do_qyndglyw2016_Qyndglyw2016_loadQyndglywInit.ashx", { "xhid": xhid }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                nsrsbh = data[1].nsrsbh;
                skssq = data[1].skssq;
                ssqq = data[1].ssqq;
                ssqz = data[1].ssqz;
                sbxh = data[1].sbxh;
                sbzt = data[1].sbzt;
                tbqk = data[1].tbqk;
                qylx = data[1].qylx;
                $("#lb_sbqq").text(data[1].sbqq);
                $("#lb_sbqz").text(data[1].sbqz);
                $("#lb_ssqq").text(ssqq);
                $("#lb_ssqz").text(ssqz);
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
                            qyndGlyw2016Init(data[2]);
                            //		window.top.showTbbzDiv();//弹出填表帮助Div
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
    var params = "bbmc=WBJK_SB_QYNDGLYW_G000000,WBJK_SB_QYNDGLYW_G101000,WBJK_SB_QYNDGLYW_G107000,WBJK_SB_QYNDGLYW_G109000,WBJK_SB_QYNDGLYW_G110000,WBJK_SB_QYNDGLYW_G114010,WBJK_SB_QYNDGLYW_G114011,WBJK_SB_QYNDGLYW_G114020,WBJK_SB_QYNDGLYW_G114021";
    $.postJSON("/WSSBSL/do_report_Report_queryTbbz.ashx", { "params": params }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                WBJK_SB_QYNDGLYW_G000000_TbbzList = data[1][0];
                WBJK_SB_QYNDGLYW_G101000_TbbzList = data[1][1];
                WBJK_SB_QYNDGLYW_G107000_TbbzList = data[1][2];
                WBJK_SB_QYNDGLYW_G109000_TbbzList = data[1][3];
                WBJK_SB_QYNDGLYW_G110000_TbbzList = data[1][4];
                WBJK_SB_QYNDGLYW_G112000_TbbzList = data[1][5];
                WBJK_SB_QYNDGLYW_G114010_TbbzList = data[1][6];
                WBJK_SB_QYNDGLYW_G114011_TbbzList = data[1][7];
                WBJK_SB_QYNDGLYW_G114020_TbbzList = data[1][8];
                WBJK_SB_QYNDGLYW_G114021_TbbzList = data[1][9];
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
    var params = "bbmc=WBJK_SB_QYNDGLYW_G000000,WBJK_SB_QYNDGLYW_G101000,WBJK_SB_QYNDGLYW_G107000,WBJK_SB_QYNDGLYW_G109000,WBJK_SB_QYNDGLYW_G110000,WBJK_SB_QYNDGLYW_G114010,WBJK_SB_QYNDGLYW_G114011,WBJK_SB_QYNDGLYW_G114020,WBJK_SB_QYNDGLYW_G114021" +
	";ssqq=" + ssqq + ";ssqz=" + ssqz + ";skssq=" + skssq;
    $.postJSON("/WSSBSL/do_report_Report_loadLockRule.ashx", {
        "params": params
    }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                WBJK_SB_QYNDGLYW_G000000_dynamicBz = data[1][0];
                WBJK_SB_QYNDGLYW_G101000_dynamicBz = data[1][1];
                WBJK_SB_QYNDGLYW_G107000_dynamicBz = data[1][2];
                WBJK_SB_QYNDGLYW_G109000_dynamicBz = data[1][3];
                WBJK_SB_QYNDGLYW_G110000_dynamicBz = data[1][4];
                WBJK_SB_QYNDGLYW_G112000_dynamicBz = data[1][5];
                WBJK_SB_QYNDGLYW_G114010_dynamicBz = data[1][6];
                WBJK_SB_QYNDGLYW_G114011_dynamicBz = data[1][7];
                WBJK_SB_QYNDGLYW_G114020_dynamicBz = data[1][8];
                WBJK_SB_QYNDGLYW_G114021_dynamicBz = data[1][9];

                WBJK_SB_QYNDGLYW_G000000_gzList = data[2][0];
                WBJK_SB_QYNDGLYW_G101000_gzList = data[2][1];
                WBJK_SB_QYNDGLYW_G107000_gzList = data[2][2];
                WBJK_SB_QYNDGLYW_G109000_gzList = data[2][3];
                WBJK_SB_QYNDGLYW_G110000_gzList = data[2][4];
                WBJK_SB_QYNDGLYW_G112000_gzList = data[2][5];
                WBJK_SB_QYNDGLYW_G114010_gzList = data[2][6];
                WBJK_SB_QYNDGLYW_G114011_gzList = data[2][7];
                WBJK_SB_QYNDGLYW_G114020_gzList = data[2][8];
                WBJK_SB_QYNDGLYW_G114021_gzList = data[2][9];

            } else {
                window.top.alert('消息', data[1], 'warning');
            }
        }
        loadQyndGlyw2016BbTabs();
        window.top.showTbbzDiv();
    });
}

//点击【确认】按钮
function confirmChoose() { }


//【复选框组】模拟【单选框组】的样式控制
function checkControl(leftId, rightId, index) {
    if (index == 1) {
        var leftElement = document.getElementById(leftId);
        if (leftElement.type == "checkbox" && leftElement.checked) {
            document.getElementById(rightId).checked = false;
        } else {
            document.getElementById(rightId).checked = true;
        }
    } else if (index == 2) {
        var rightElement = document.getElementById(rightId);
        if (rightElement.type == "checkbox" && rightElement.checked) {
            document.getElementById(leftId).checked = false;
        } else {
            document.getElementById(leftId).checked = true;
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

//报表保存操作
function saveReport() {
    debugger;
    if (sbzt == "0" || sbzt == "2") {
        var title = $('#tabList').tabs('getSelected').panel('options').title;
        if (title == "封面") {
            window.top.alert('提示', '封面不需要进行保存。', 'info');
        }
        else if (title == "往来汇总表") {
            window.top.alert('提示', '您尚未生成往来汇总表，不能保存往来汇总表！', 'warning');
        }
        else {
            if (title == "√填报表单") {
                window.top.confirm("提示", "修改《填报表单》会把选择为“不填报”的数据删除，确认要现在修改《填报表单》吗？！", function (result) {
                    if (result) {
                        window.top.progress("正在保存", "数据正在保存......");
                        doCurrTabFun("submit()");
                        closeTab(crrFbTitle);//关闭原有附表标签
                    }
                });
            } else {
                if (title == "填报表单") {
                    var tbbdBblsh = getTheTabVar("√报告企业信息表", "bblsh");
                    if (tbbdBblsh != null && tbbdBblsh.length > 0) {
                        window.top.progress("正在保存", "数据正在保存......");
                        doCurrTabFun("submit()");
                    } else {
                        window.top.alert('消息', "您尚未保存《报告企业信息表》，不能保存《填报表单》！", 'warning');
                    }
                } else {
                    window.top.progress("正在保存", "数据正在保存......");
                    doCurrTabFun("submit()");
                }
            }

        }
    } else if (sbzt == "1") {
        window.top.alert('消息', "保存失败。该属期（" + skssq + "）报表您已申报，不能修改报表数据，如需修改申报表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不要修改报表数据。", 'warning');
    }
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

//删除报表操作
function deleteReport() {
    if (sbzt == "0" || sbzt == "2") {
        var title = $('#tabList').tabs('getSelected').panel('options').title;
        if (title == "封面") {
            window.top.alert('消息', "封面不允许删除！", 'warning');
        } else {
            if (title.substring(0, 1) == "√") {
                if (title == "√填报表单") {
                    if (getTab('√往来汇总表')) {
                        window.top.alert('消息', "请先删除《往来汇总表》，然后才能删除《填报表单》。", 'warning');
                        return;
                    }
                    window.top.confirm("提示", "删除《填报表单》会把对应选择的附表数据删除，确认要现在删除《填报表单》吗？！", function (result) {
                        if (result) {
                            window.top.progress("正在删除", "数据正在删除......");
                            doCurrTabFun("deleteReport()");
                            closeTab(crrFbTitle);//关闭原有附表标签
                        }
                    });
                } else {
                    window.top.confirm("提示", "请确认是否要删除该报表数据？", function (result) {
                        if (result) {
                            window.top.progress("正在删除", "数据正在删除......");
                            doCurrTabFun("deleteReport()");
                        }
                    });
                }

            } else {
                window.top.alert('消息', "当前报表未保存，不能进行删除操作。", 'warning');
            }
        }

    } else if (sbzt == "1") {
        window.top.alert('消息', "该属期（" + skssq + "）报表您已申报，不能删除报表数据，如需修改申报表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不要删除报表数据。", 'warning');
    }
}

//删除报表
function delReport(bblsh, params) {
    $.postJSON("/WSSBSL/do_qyndglyw2016_Qyndglyw2016_delete.action",
		{ "bblsh": bblsh, "params": params },
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

//保存后回调方法
function afterSave() {
    $.postJSON("/WSSBSL/do_qyndglyw2016_Qyndglyw2016_updateTbxx.action",
		{ "pzzlDm": "BDA0610922", "skssq": skssq },
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

//删除后调用
function afterDelete() {
    $.postJSON("/WSSBSL/do_qyndglyw2016_Qyndglyw2016_updateTbxx.action",
		{ "pzzlDm": "BDA0610922", "skssq": skssq },
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

//根据报表填报情况更新tab标题
function updateTabTitle() {
    var tab = $('#tabList').tabs('getSelected');
    var oldTitle = tab.panel('options').title;
    changeTitleByTxqk(oldTitle);
}

//根据填报情况修改tab标题
function changeTitleByTxqk(title) {
    if (title == "填报表单") {
        if (tbqk.substring(0, 1) == "1") {
            var newTitle = "√填报表单";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "报告企业信息表") {
        if (tbqk.substring(1, 2) == "1") {
            var newTitle = "√报告企业信息表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "往来汇总表") {
        if (tbqk.substring(2, 3) == "1") {
            var newTitle = "√往来汇总表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "关联关系表") {
        if (tbqk.substring(3, 4) == "1") {
            var newTitle = "√关联关系表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "有形资产所有权交易表") {
        if (tbqk.substring(4, 5) == "1") {
            var newTitle = "√有形资产所有权交易表";
            crrFbTitle = "√有形资产所有权交易表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "无形资产所有权交易表") {
        if (tbqk.substring(5, 6) == "1") {
            var newTitle = "√无形资产所有权交易表";
            crrFbTitle = "√无形资产所有权交易表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "有形资产使用权交易表") {
        if (tbqk.substring(6, 7) == "1") {
            var newTitle = "√有形资产使用权交易表";
            crrFbTitle = "√有形资产使用权交易表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "无形资产使用权交易表") {
        if (tbqk.substring(7, 8) == "1") {
            var newTitle = "√无形资产使用权交易表";
            crrFbTitle = "√无形资产使用权交易表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "金融资产交易表") {
        if (tbqk.substring(8, 9) == "1") {
            var newTitle = "√金融资产交易表";
            crrFbTitle = "√金融资产交易表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "融通资金表") {
        if (tbqk.substring(9, 10) == "1") {
            var newTitle = "√融通资金表";
            crrFbTitle = "√融通资金表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "关联劳务表") {
        if (tbqk.substring(10, 11) == "1") {
            var newTitle = "√关联劳务表";
            crrFbTitle = "√关联劳务表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "权益性投资表") {
        if (tbqk.substring(11, 12) == "1") {
            var newTitle = "√权益性投资表";
            crrFbTitle = "√权益性投资表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "成本分摊协议表") {
        if (tbqk.substring(12, 13) == "1") {
            var newTitle = "√成本分摊协议表";
            crrFbTitle = "√成本分摊协议表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "对外支付款项情况表") {
        if (tbqk.substring(13, 14) == "1") {
            var newTitle = "√对外支付款项情况表";
            crrFbTitle = "√对外支付款项情况表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "境外关联方信息表") {
        if (tbqk.substring(14, 15) == "1") {
            var newTitle = "√境外关联方信息表";
            crrFbTitle = "√境外关联方信息表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "年度关联交易财务状况分析表(报告企业个别报表信息)") {
        if (tbqk.substring(15, 16) == "1") {
            var newTitle = "√年度关联交易财务状况分析表(报告企业个别报表信息)";
            crrFbTitle = "√年度关联交易财务状况分析表(报告企业个别报表信息)";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "年度关联交易财务状况分析表(报告企业合并报表信息)") {
        if (tbqk.substring(16, 17) == "1") {
            var newTitle = "√年度关联交易财务状况分析表(报告企业合并报表信息)";
            crrFbTitle = "√年度关联交易财务状况分析表(报告企业合并报表信息)";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "国别报告-所得、税收和业务活动国别分布表") {
        if (tbqk.substring(17, 18) == "1") {
            var newTitle = "√国别报告-所得、税收和业务活动国别分布表";
            crrFbTitle = "√国别报告-所得、税收和业务活动国别分布表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "国别报告-所得、税收和业务活动国别分布表(英文)") {
        if (tbqk.substring(18, 19) == "1") {
            var newTitle = "√国别报告-所得、税收和业务活动国别分布表(英文)";
            crrFbTitle = "√国别报告-所得、税收和业务活动国别分布表(英文)";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "国别报告-跨国企业集团成员实体名单") {
        if (tbqk.substring(19, 20) == "1") {
            var newTitle = "√国别报告-跨国企业集团成员实体名单";
            crrFbTitle = "√国别报告-跨国企业集团成员实体名单";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "国别报告-跨国企业集团成员实体名单(英文)") {
        if (tbqk.substring(20, 21) == "1") {
            var newTitle = "√国别报告-跨国企业集团成员实体名单(英文)";
            crrFbTitle = "√国别报告-跨国企业集团成员实体名单(英文)";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "国别报告-附加说明表") {
        if (tbqk.substring(21, 22) == "1") {
            var newTitle = "√国别报告-附加说明表";
            crrFbTitle = "√国别报告-附加说明表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "国别报告-附加说明表(英文)") {
        if (tbqk.substring(22, 23) == "1") {
            var newTitle = "√国别报告-附加说明表(英文)";
            crrFbTitle = "√国别报告-附加说明表(英文)";
            updateTitle(title, newTitle, options);
        }
    }
    else if (title == "√填报表单") {
        if (tbqk.substring(0, 1) == "0") {
            var newTitle = "填报表单";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√报告企业信息表") {
        if (tbqk.substring(1, 2) == "0") {
            var newTitle = "报告企业信息表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√往来汇总表") {
        if (tbqk.substring(2, 3) == "0") {
            var newTitle = "往来汇总表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√关联关系表") {
        if (tbqk.substring(3, 4) == "0") {
            var newTitle = "关联关系表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√有形资产所有权交易表") {
        if (tbqk.substring(4, 5) == "0") {
            var newTitle = "有形资产所有权交易表";
            crrFbTitle = "有形资产所有权交易表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√无形资产所有权交易表") {
        if (tbqk.substring(5, 6) == "0") {
            var newTitle = "无形资产所有权交易表";
            crrFbTitle = "无形资产所有权交易表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√有形资产使用权交易表") {
        if (tbqk.substring(6, 7) == "0") {
            var newTitle = "有形资产使用权交易表";
            crrFbTitle = "有形资产使用权交易表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√无形资产使用权交易表") {
        if (tbqk.substring(7, 8) == "0") {
            var newTitle = "无形资产使用权交易表";
            crrFbTitle = "无形资产使用权交易表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√金融资产交易表") {
        if (tbqk.substring(8, 9) == "0") {
            var newTitle = "金融资产交易表";
            crrFbTitle = "金融资产交易表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√融通资金表") {
        if (tbqk.substring(9, 10) == "0") {
            var newTitle = "融通资金表";
            crrFbTitle = "融通资金表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√关联劳务表") {
        if (tbqk.substring(10, 11) == "0") {
            var newTitle = "关联劳务表";
            crrFbTitle = "关联劳务表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√权益性投资表") {
        if (tbqk.substring(11, 12) == "0") {
            var newTitle = "权益性投资表";
            crrFbTitle = "权益性投资表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√成本分摊协议表") {
        if (tbqk.substring(12, 13) == "0") {
            var newTitle = "成本分摊协议表";
            crrFbTitle = "成本分摊协议表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√对外支付款项情况表") {
        if (tbqk.substring(13, 14) == "0") {
            var newTitle = "对外支付款项情况表";
            crrFbTitle = "对外支付款项情况表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√境外关联方信息表") {
        if (tbqk.substring(14, 15) == "0") {
            var newTitle = "境外关联方信息表";
            crrFbTitle = "境外关联方信息表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√年度关联交易财务状况分析表(报告企业个别报表信息)") {
        if (tbqk.substring(15, 16) == "0") {
            var newTitle = "年度关联交易财务状况分析表(报告企业个别报表信息)";
            crrFbTitle = "年度关联交易财务状况分析表(报告企业个别报表信息)";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√年度关联交易财务状况分析表(报告企业合并报表信息)") {
        if (tbqk.substring(16, 17) == "0") {
            var newTitle = "年度关联交易财务状况分析表(报告企业合并报表信息)";
            crrFbTitle = "年度关联交易财务状况分析表(报告企业合并报表信息)";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√国别报告-所得、税收和业务活动国别分布表") {
        if (tbqk.substring(17, 18) == "0") {
            var newTitle = "国别报告-所得、税收和业务活动国别分布表";
            crrFbTitle = "国别报告-所得、税收和业务活动国别分布表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√国别报告-所得、税收和业务活动国别分布表(英文)") {
        if (tbqk.substring(18, 19) == "0") {
            var newTitle = "国别报告-所得、税收和业务活动国别分布表(英文)";
            crrFbTitle = "国别报告-所得、税收和业务活动国别分布表(英文)";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√国别报告-跨国企业集团成员实体名单") {
        if (tbqk.substring(19, 20) == "0") {
            var newTitle = "国别报告-跨国企业集团成员实体名单";
            crrFbTitle = "国别报告-跨国企业集团成员实体名单";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√国别报告-跨国企业集团成员实体名单(英文)") {
        if (tbqk.substring(20, 21) == "0") {
            var newTitle = "国别报告-跨国企业集团成员实体名单(英文)";
            crrFbTitle = "国别报告-跨国企业集团成员实体名单(英文)";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√国别报告-附加说明表") {
        if (tbqk.substring(21, 22) == "0") {
            var newTitle = "国别报告-附加说明表";
            crrFbTitle = "国别报告-附加说明表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√国别报告-附加说明表(英文)") {
        if (tbqk.substring(22, 23) == "0") {
            var newTitle = "国别报告-附加说明表(英文)";
            crrFbTitle = "国别报告-附加说明表(英文)";
            updateTitle(title, newTitle, options);
        }
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


//弹出选择附表窗口
function showQyndglywChooseFbWindow() {
    var tbbdBblsh = getTheTabVar("√填报表单", "bblsh");//填报表单报表流水号
    if (tbbdBblsh != null && tbbdBblsh.length > 0) {
        window.top.showEasyDialog("/WSSBSL/show_qyndglyw2016_qyndglywChooseFb.action?bblsh=" + tbbdBblsh + "&sbxh=" + sbxh, {
            title: '请选择附表',						//标题
            width: 650,								//宽度
            height: 360,								//高度
            left: ($(window.top).width() - 650) * 0.5,   //居中时左边距
            top: ($(window.top).height() - 360) * 0.4,	//居中时上边距
            modal: true,							//模式窗口
            iconCls: 'icon-table',					//图标样式
            minimizable: false,						//是否显示最小化按钮
            maximizable: false,						//是否显示最大化按钮
            loadingMessage: null,					//窗口内容加载时显示信息
            toolbar: null,							//窗口工具条
            //buttons:buttons,						//底部按钮
            doSize: true,							//面板创建的时候将被调整和重新布局
            resizable: false							//对话框是否可编辑大小
        });

    } else {
        window.top.alert('消息', "您尚未保存《填报表单》，不能选择附表！", 'warning');
    }

}

//获取指定TAB页面title下的全局变量值v
function getTheTabVar(title, v) {
    var tab = getTab(title);
    if (tab) {
        var id = tab.panel('options').id;
        var str = 'window.frames["mainiframe' + id + '"].' + v;
        return eval(str);
    } else {
        return null;
    }
}

//弹出附表选择窗口-->点击其中一个表名
function doClickFbTD(bdxlDm) {
    selectTab("封面");
    window.top.closeEasyDialog();
    if (crrFbTitle && crrFbTitle.length > 0) {
        closeTab(crrFbTitle);//关闭原有附表标签
    }
    //打开新的附表标签并重设当前附表标签名称
    loadTabsByBdxl(bdxlDm);
}

//根据表单编号加载标签、并重设当前标签名称
function loadTabsByBdxl(bdxlDm) {
    var tbbdTitle = "填报表单";
    var G000000Title = "报告企业信息表";
    var G100000Title = "往来汇总表";
    var G101000Title = "关联关系表";
    var G102000Title = "有形资产所有权交易表";
    var G103000Title = "无形资产所有权交易表";
    var G104000Title = "有形资产使用权交易表";
    var G105000Title = "无形资产使用权交易表";
    var G106000Title = "金融资产交易表";
    var G107000Title = "融通资金表";
    var G108000Title = "关联劳务表";
    var G109000Title = "权益性投资表";
    var G110000Title = "成本分摊协议表";
    var G111000Title = "对外支付款项情况表";
    var G112000Title = "境外关联方信息表";
    var G113010Title = "年度关联交易财务状况分析表(报告企业个别报表信息)";
    var G113020Title = "年度关联交易财务状况分析表(报告企业合并报表信息)";
    var G114010Title = "国别报告-所得、税收和业务活动国别分布表";
    var G114011Title = "国别报告-所得、税收和业务活动国别分布表(英文)";
    var G114020Title = "国别报告-跨国企业集团成员实体名单";
    var G114021Title = "国别报告-跨国企业集团成员实体名单(英文)";
    var G114030Title = "国别报告-附加说明表";
    var G114031Title = "国别报告-附加说明表(英文)";
    if (tbqk.substring(0, 1) == '1') {
        tbbdTitle = "√填报表单";
    } if (tbqk.substring(1, 2) == '1') {
        G000000Title = "√报告企业信息表";
    } if (tbqk.substring(2, 3) == '1') {
        G100000Title = "√往来汇总表";
    } if (tbqk.substring(3, 4) == '1') {
        G101000Title = "√关联关系表";
    } if (tbqk.substring(4, 5) == '1') {
        G102000Title = "√有形资产所有权交易表";
    } if (tbqk.substring(5, 6) == '1') {
        G103000Title = "√无形资产所有权交易表";
    } if (tbqk.substring(6, 7) == '1') {
        G104000Title = "√有形资产使用权交易表";
    } if (tbqk.substring(7, 8) == '1') {
        G105000Title = "√无形资产使用权交易表";
    } if (tbqk.substring(8, 9) == '1') {
        G106000Title = "√金融资产交易表";
    } if (tbqk.substring(9, 10) == '1') {
        G107000Title = "√融通资金表";
    } if (tbqk.substring(10, 11) == '1') {
        G108000Title = "√关联劳务表";
    } if (tbqk.substring(11, 12) == '1') {
        G109000Title = "√权益性投资表";
    } if (tbqk.substring(12, 13) == '1') {
        G110000Title = "√成本分摊协议表";
    } if (tbqk.substring(13, 14) == '1') {
        G111000Title = "√对外支付款项情况表";
    } if (tbqk.substring(14, 15) == '1') {
        G112000Title = "√境外关联方信息表";
    } if (tbqk.substring(15, 16) == '1') {
        G113010Title = "√年度关联交易财务状况分析表(报告企业个别报表信息)";
    } if (tbqk.substring(16, 17) == '1') {
        G113020Title = "√年度关联交易财务状况分析表(报告企业合并报表信息)";
    } if (tbqk.substring(17, 18) == '1') {
        G114010Title = "√国别报告-所得、税收和业务活动国别分布表";
    } if (tbqk.substring(18, 19) == '1') {
        G114011Title = "√国别报告-所得、税收和业务活动国别分布表(英文)";
    } if (tbqk.substring(19, 20) == '1') {
        G114020Title = "√国别报告-跨国企业集团成员实体名单";
    } if (tbqk.substring(20, 21) == '1') {
        G114021Title = "√国别报告-跨国企业集团成员实体名单(英文)";
    } if (tbqk.substring(21, 22) == '1') {
        G114030Title = "√国别报告-附加说明表";
    } if (tbqk.substring(22, 23) == '1') {
        G114031Title = "√国别报告-附加说明表(英文)";
    }
    if (bdxlDm == "G102000") {	//有形资产所有权交易表
        addTab(G102000Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G102000.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G102000Title;
    } else if (bdxlDm == "G103000") {	//无形资产所有权交易表
        addTab(G103000Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G103000.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G103000Title;
    } else if (bdxlDm == "G104000") {	//有形资产使用权交易表
        addTab(G104000Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G104000.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G104000Title;
    } else if (bdxlDm == "G105000") {	//无形资产使用权交易表
        addTab(G105000Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G105000.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G105000Title;
    } else if (bdxlDm == "G106000") {	//金融资产交易表
        addTab(G106000Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G106000.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G106000Title;
    } else if (bdxlDm == "G107000") {	//融通资金表
        addTab(G107000Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G107000.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G107000Title;
    } else if (bdxlDm == "G108000") {	//关联劳务表
        addTab(G108000Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G108000.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G108000Title;
    } else if (bdxlDm == "G109000") {	//权益性投资表
        addTab(G109000Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G109000.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G109000Title;
    } else if (bdxlDm == "G110000") {	//成本分摊协议表
        addTab(G110000Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G110000.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G110000Title;
    } else if (bdxlDm == "G111000") {	//对外支付款项情况表
        addTab(G111000Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G111000.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G111000Title;
    } else if (bdxlDm == "G112000") {	//境外关联方信息表
        addTab(G112000Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G112000.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G112000Title;
    } else if (bdxlDm == "G113010") {	//年度关联交易财务状况分析表(报告企业个别报表信息)
        addTab(G113010Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G113010.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G113010Title;
    } else if (bdxlDm == "G113020") {	//年度关联交易财务状况分析表（报告企业合并报表信息）
        addTab(G113020Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G113020.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G113020Title;
    } else if (bdxlDm == "G114010") {	//国别报告－所得、税收和业务活动国别分布表
        addTab(G114010Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G114010.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G114010Title;
    } else if (bdxlDm == "G114011") {	//国别报告－所得、税收和业务活动国别分布表（英文）
        addTab(G114011Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G114011.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G114011Title;
    } else if (bdxlDm == "G114020") {	//国别报告－跨国企业集团成员实体名单  
        addTab(G114020Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G114020.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G114020Title;
    } else if (bdxlDm == "G114021") {	//国别报告－跨国企业集团成员实体名单（英文） 
        addTab(G114021Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G114021.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G114021Title;
    } else if (bdxlDm == "G114030") {	//国别报告－附加说明表
        addTab(G114030Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G114030.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G114030Title;
    } else if (bdxlDm == "G114031") {	//国别报告－附加说明表（英文）  
        addTab(G114031Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/qyndglyw2016/sb_qyndglyw_2016_G114031.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = G114031Title;
    }

}
//生成往来汇总表
function createWlhzbData() {
    if (sbzt == "0" || sbzt == "2") {
        var message = "";
        if (tbqk.substring(0, 1) == "0") {
            if (makeWLHZBing == false) {
                window.top.alert('提示', '您尚未保存“填报表单”，不能生成往来汇总表！', 'warning');
            }
        } else if (tbqk.substring(1, 2) == "0") {
            if (makeWLHZBing == false) {
                window.top.alert('提示', '您尚未保存“报告企业信息表”，不能生成往来汇总表！', 'warning');
            }
        } else {
            createWlhzb();
        }
    } else if (sbzt == "1") {
        window.top.alert('消息', "该属期（" + skssq + "）报表您已申报，不能修改报表数据，如需修改申报表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不要修改报表数据。", 'warning');
    }
}

function createWlhzb() {
    window.top.confirm("提示", "自动为您从其它附表向往来汇总表填数，但往来汇总表的部分数据仍需手工填写并保存，确认要现在生成往来汇总表吗？！", function (result) {
        if (result) {
            if (getTab('往来汇总表')) {
                makeWLHZBing = true;
                selectTab("往来汇总表");
                //调用后台存储过程，执行生成主表
                window.top.progress("正在生成往来汇总表", "正在生成往来汇总表数据......");
                $.postJSON("/WSSBSL/do_qyndglyw2016_Qyndglyw2016_createWlhzbData.action", { "sbxh": sbxh, "ssqq": ssqq, "ssqz": ssqz },
					function (data, textStatus) {
					    window.top.closeProgress();
					    if (data && data.length > 0) {
					        if (data[0] == "Y") {
					            window.top.alert('消息', data[1], 'info', function () {
					                reloadTab();//刷新往来汇总表
					                afterCreateBbData();
					            });
					        } else {
					            window.top.alert('消息', data[1], 'warning');
					        }
					    }
					});
            } else if (getTab('√往来汇总表')) {
                selectTab("√往来汇总表");
                //调用后台存储过程，执行生成主表
                window.top.progress("正在生成往来汇总表", "正在生成往来汇总表数据......");
                $.postJSON("/WSSBSL/do_qyndglyw2016_Qyndglyw2016_createWlhzbData.action", { "sbxh": sbxh, "ssqq": ssqq, "ssqz": ssqz },
					function (data, textStatus) {
					    window.top.closeProgress();
					    if (data && data.length > 0) {
					        if (data[0] == "Y") {
					            window.top.alert('消息', data[1], 'info', function () {
					                reloadTab();//刷新往来汇总表
					                afterCreateBbData();
					            });
					        } else {
					            window.top.alert('消息', data[1], 'warning');
					        }
					    }
					});
            }
        }
    });
}

//生成报表数据后调用
function afterCreateBbData() {
    $.postJSON("/WSSBSL/do_qyndglyw2016_Qyndglyw2016_updateTbxx.action",
		{ "pzzlDm": "BDA0610922", "skssq": skssq },
		function (data, textStatus) {
		    if (data && data.length > 0) {
		        if (data[0] == "Y") {
		            if (data[1]) {
		                tbqk = data[1];
		            }
		            updateTabTitle();
		            //calcXxwlqyJmse();
		        }
		    }
		}
	);
}

//加载往来汇总表的填写资格
function checkQyndglyw2016Txzg() {
    var title = $('#tabList').tabs('getSelected').panel('options').title;
    if (title == "往来汇总表") {
        if (makeWLHZBing == false) {
            window.top.alert('提示', '您尚未生成往来汇总表，不能填写往来汇总表！', 'warning');
            doCurrTabFun("setReportLock()");
        }
    }
}

//填报提示信息
function showTbtsxxWindow() {
    var buttons = [{
        text: '不进行关联申报',
        iconCls: 'icon-cancel',
        handler: function () {
            window.top.closeEasyDialog();
            window.top.closeTab('报表填报-企业年度关联业务(2016版)');
        }
    }, {
        text: '继续填报',
        iconCls: 'icon-redo',
        handler: function () {
            qyndGlyw2016Init();
            window.top.closeEasyDialog();
        }
    }];
    window.top.showEasyDialog("/WSSBSL/show_qyndglyw2016_tbtsxx.aspx", {
        title: '企业年度关联业务（2016）版填报提示信息',	//标题
        width: 650,								//宽度
        height: 250,								//高度
        left: ($(window.top).width() - 650) * 0.5,   //居中时左边距
        top: ($(window.top).height() - 360) * 0.4,	//居中时上边距
        modal: true,							//模式窗口
        iconCls: 'icon-help',					//图标样式
        minimizable: false,						//是否显示最小化按钮
        maximizable: true,						//是否显示最大化按钮
        loadingMessage: null,					//窗口内容加载时显示信息
        toolbar: null,							//窗口工具条
        buttons: buttons,						//底部按钮
        doSize: true,							//面板创建的时候将被调整和重新布局
        resizable: false							//对话框是否可编辑大小
    });
}