var userYSBQCId;
var YSBQCId;
var HappenDate;
var nsrsbh;
var djxh;
var skssq;
var ssqq;
var ssqz;
var sbxh;
var sbzt;
var szlbDm;
var tsxxList;
var fb4TsxxList;
var fb3TsxxList;
var sffxcsmxbTsxxList;
var hznsfpbTsxxList;
var zzsJmssbMxbTsxxList;
var zzsBfcpxstjbTsxxList;
var fb3Check = false;
var fb4Check = false;
var sffxcsmxbCheck = false;
var hznsfpbCheck = false;
var zzsJmssbMxbCheck = false;
var zzsBfcpxstjbCheck = false;
var currOprate = 0;	//当前操作  0:列表初始化  1:提交申报   2:报表填写资格检查
var tbqk;			//填报情况：0000000000000,0-未填，1已填
var options = {
    onSelect: function (title) {
        iframeAutoSize();
        showButton();
        checkZzs2013YbnsrTxzg();
        getHideData();//获取附表数据放到主表隐藏格中
    }
};
var loadFinish = false;		//加载完成
var makeZBing = false;		//生成主表中
var ncpFlag = "N";
var qrSbFlag;		//确认申报标志

var WBJK_SB_ZZS_2003_YBNSR_TbbzList;
var WBJK_SB_ZZS_2013_FB1_TbbzList;
var WBJK_SB_ZZS_2013_FB2_TbbzList;
var WBJK_SB_ZZS_2013_FB3_TbbzList;
var WBJK_SB_ZZS_2013_FB4_TbbzList;
var WBJK_SB_ZZS_2016_FB5_TbbzList;
var WBJK_SB_ZZS_BQDKJXSEJGMXB_TbbzList;
var WBJK_SB_ZZS_YGZSFFXCSMXB_TbbzList;
var WBJK_SB_ZZS_HZNSFPB_TbbzList;
var WBJK_SB_ZZS_2003_FB_GDZCJXSEDK_TbbzList;
var WBJK_SB_ZZS_NCPDKJSB_TbbzList;
var WBJK_SB_ZZS_NCPDKJSB_BGCHWST_TbbzList;
var WBJK_SB_ZZS_NCPDKJSB_CB_TbbzList;
var WBJK_SB_ZZS_NCPDKJSB_TRCC_TbbzList;
var WBJK_SB_ZZS_NCPDKJSB_ZJXS_TbbzList;
var WBJK_SB_ZZS_BFCPXSTJB_TbbzList;
var WBJK_SB_ZZS_JMSSBMXB_TbbzList;

var WBJK_SB_ZZS_2003_YBNSR_dynamicBz;
var WBJK_SB_ZZS_2013_FB1_dynamicBz;
var WBJK_SB_ZZS_2013_FB2_dynamicBz;
var WBJK_SB_ZZS_2013_FB3_dynamicBz;
var WBJK_SB_ZZS_2013_FB4_dynamicBz;
var WBJK_SB_ZZS_2016_FB5_dynamicBz;
var WBJK_SB_ZZS_BQDKJXSEJGMXB_dynamicBz;
var WBJK_SB_ZZS_YGZSFFXCSMXB_dynamicBz;
var WBJK_SB_ZZS_HZNSFPB_dynamicBz;
var WBJK_SB_ZZS_2003_FB_GDZCJXSEDK_dynamicBz;
var WBJK_SB_ZZS_NCPDKJSB_dynamicBz;
var WBJK_SB_ZZS_NCPDKJSB_BGCHWST_dynamicBz;
var WBJK_SB_ZZS_NCPDKJSB_CB_dynamicBz;
var WBJK_SB_ZZS_NCPDKJSB_TRCC_dynamicBz;
var WBJK_SB_ZZS_NCPDKJSB_ZJXS_dynamicBz;
var WBJK_SB_ZZS_BFCPXSTJB_dynamicBz;
var WBJK_SB_ZZS_JMSSBMXB_dynamicBz;

var WBJK_SB_ZZS_2003_YBNSR_gzList;
var WBJK_SB_ZZS_2013_FB1_gzList;
var WBJK_SB_ZZS_2013_FB2_gzList;
var WBJK_SB_ZZS_2013_FB3_gzList;
var WBJK_SB_ZZS_2013_FB4_gzList;
var WBJK_SB_ZZS_2016_FB5_gzList;
var WBJK_SB_ZZS_BQDKJXSEJGMXB_gzList;
var WBJK_SB_ZZS_YGZSFFXCSMXB_gzList;
var WBJK_SB_ZZS_HZNSFPB_gzList;
var WBJK_SB_ZZS_2003_FB_GDZCJXSEDK_gzList;
var WBJK_SB_ZZS_NCPDKJSB_gzList;
var WBJK_SB_ZZS_NCPDKJSB_BGCHWST_gzList;
var WBJK_SB_ZZS_NCPDKJSB_CB_gzList;
var WBJK_SB_ZZS_NCPDKJSB_TRCC_gzList;
var WBJK_SB_ZZS_NCPDKJSB_ZJXS_gzList;
var WBJK_SB_ZZS_BFCPXSTJB_gzList;
var WBJK_SB_ZZS_JMSSBMXB_gzList;


//启动时加载
$(function () {
    zzsYbnsrInit();		//报表初始化
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
    if (sbzt == "0" || sbzt == "2") {
        currOprate = 1;
        window.top.closeEasyDialog();
        if (sbxh && sbxh.length > 0) {
            window.top.progress("正在申报", "正在提交申报......");
            $.postJSON("/WSSBSL/do_zzs2013_Zzs2013_submitZzs2013Ybnsr.ashx", { "sbxh": sbxh, "qrSbFlag": qrSbFlag, "xhid": xhid, "userYSBQCId": userYSBQCId }, function (data, textStatus) {
                window.top.closeProgress();
                if (data && data.length > 0) {
                    if (data[0] == "Y") {
                        sbzt = "1";
                        lockAllReport();		//锁定报表
                        window.top.reloadMain();//刷新首页应申报信息列表和报表查询菜单
                        window.top.alert("申报成功", data[1], "info");
                        //if (data[2] == "Y") {//如果应征税款
                        //    var msg = data[1] + "，您是否需要现在立即缴纳税款？如果现在不缴纳税款，在缴款期限内可使用手动缴款功能进行缴款。";
                        //    window.top.confirm("申报成功", msg, function (result) {
                        //        if (result) {
                        //            //发起扣款
                        //            window.top.addTab("税款缴纳-当期未缴税款", "/WSSBSL/show_skjn_dqwjsk.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
                        //            //doAutoKk(sbxh,"WBJK_SB_ZZS_2003_YBNSR",null);
                        //        }
                        //    });
                        //} else {
                        //    window.top.alert("申报成功", data[1], "info");
                        //}
                    }
                    else {
                        window.top.alert('提示', '您的报表尚未填写，不能提交！', 'warning');
                    }
                    //else if (data[0] == "C") {//弹出附加税申报信息窗
                    //    qrSbFlag = "Y";
                    //    showFjsWindow(xhid);
                    //} else {
                    //    qrSbFlag = "";
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

//定时自动设置宽度(0.3秒一次)
function autoWidth() {
    $("#tbxxDiv").width($("#tbxxDiv").parent().width());
    setTimeout(autoWidth, 300);
}

//弹出附加税（一税两费）数据窗
function showFjsWindow(xhid) {
    var buttons = [{
        text: '继续申报',
        iconCls: 'icon-add',
        handler: function () {
            submitTableData(xhid);
        }
    }, {
        text: '取消申报',
        iconCls: 'icon-cancel',
        handler: function () {
            window.top.closeEasyDialog();
        }
    }];
    window.top.showEasyDialog("/WSSBSL/show_zzs2013Ybnsr_zzsFjsSbxxList.action?sbxh=" + sbxh + "&cxfs=0&wssbtid=" + Math.round(Math.random() * 1000000), {
        title: "附加税（费）申报信息",						//标题
        width: 900,								//高度
        height: 180,							//宽度
        left: ($(window.top).width() - 900) * 0.5,   //居中时左边距
        top: ($(window.top).height() - 180) * 0.4,	//居中时上边距
        modal: true,							//模式窗口
        iconCls: 'icon-save',					//图标样式
        minimizable: false,						//是否显示最小化按钮
        maximizable: false,						//是否显示最大化按钮
        loadingMessage: null,					//窗口内容加载时显示信息
        toolbar: null,							//窗口工具条
        buttons: buttons,						//底部按钮
        doSize: true,							//面板创建的时候将被调整和重新布局
        resizable: false							//对话框是否可编辑大小
    });
}

//加载增值税一般纳税人报表tab
function loadZzsYbnsrBbTabs() {
    var zbTitle = "主表";
    var fb1Title = "附表一";
    var fb2Title = "附表二";
    var fb3Title = "附表三";
    var fb4Title = "附表四";
    var fb5Title = "附表五";
    var JxjgmxbTitle = "进项结构表";
    var SffxcsmxbTitle = "税负测算表";
    var HznsfpbbTitle = "汇总纳税分配表";
    var gdzcTitle = "固定资产表";
    var bfcpxstjTitle = "部分产品销售统计表";
    var zzsjmssbmxbTitle = "增值税减免税申报明细表";
    if (tbqk.substring(0, 1) == '1') {
        zbTitle = "√主表";
    } if (tbqk.substring(1, 2) == '1') {
        fb1Title = "√附表一";
    } if (tbqk.substring(2, 3) == '1') {
        fb2Title = "√附表二";
    } if (tbqk.substring(3, 4) == '1') {
        fb3Title = "√附表三";
    } if (tbqk.substring(4, 5) == '1') {
        fb4Title = "√附表四";
    } if (tbqk.substring(5, 6) == '1') {
        fb5Title = "√附表五";
    } if (tbqk.substring(6, 7) == '1') {
        JxjgmxbTitle = "√进项结构表";
    } if (tbqk.substring(7, 8) == '1') {
        SffxcsmxbTitle = "√税负测算表";
    } if (tbqk.substring(8, 9) == '1') {
        HznsfpbbTitle = "√汇总纳税分配表";
    } if (tbqk.substring(9, 10) == '1') {
        gdzcTitle = "√固定资产表";
    } if (tbqk.substring(15, 16) == '1') {
        bfcpxstjTitle = "√部分产品销售统计表";
    } if (tbqk.substring(16, 17) == '1') {
        zzsjmssbmxbTitle = "√增值税减免税申报明细表";
    }
    if (nsrsbh) {
        addTab(fb1Title, "/WSSBSL/reportJsp/showReport_ybnsrFb1.aspx?raq=/zzs2013Ybnsr/ybnsrFb1.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0" + "&userYSBQCId=" + userYSBQCId + "&YSBQCId=" + YSBQCId + "&HappenDate=" + HappenDate, false);
        addTab(fb2Title, "/WSSBSL/reportJsp/showReport_ybnsrFb2.aspx?raq=/zzs2013Ybnsr/ybnsrFb2.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0" + "&userYSBQCId=" + userYSBQCId + "&YSBQCId=" + YSBQCId + "&HappenDate=" + HappenDate, false);
        addTab(fb3Title, "/WSSBSL/reportJsp/showReport_ybnsrFb3.aspx?raq=/zzs2013Ybnsr/ybnsrFb3.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0" + "&userYSBQCId=" + userYSBQCId + "&YSBQCId=" + YSBQCId + "&HappenDate=" + HappenDate, false);
        addTab(fb4Title, "/WSSBSL/reportJsp/showReport_ybnsrFb4.aspx?raq=/zzs2013Ybnsr/ybnsrFb4.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0" + "&userYSBQCId=" + userYSBQCId + "&YSBQCId=" + YSBQCId + "&HappenDate=" + HappenDate, false);
        addTab(fb5Title, "/WSSBSL/reportJsp/showReport_ybnsrFb5.aspx?raq=/zzs2013Ybnsr/ybnsrFb5.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0" + "&userYSBQCId=" + userYSBQCId + "&YSBQCId=" + YSBQCId + "&HappenDate=" + HappenDate, false);
        //addTab(JxjgmxbTitle, "/WSSBSL/reportJsp/showReport_bqdkjxsejgmxb.aspx?raq=/zzs2013Ybnsr/bqdkjxsejgmxb.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0" + "&userYSBQCId=" + userYSBQCId + "&YSBQCId=" + YSBQCId + "&HappenDate=" + HappenDate, false);
        //addTab(SffxcsmxbTitle, "/WSSBSL/reportJsp/showReport_sffxcsmxb.aspx?raq=/zzs2013Ybnsr/sffxcsmxb.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0" + "&userYSBQCId=" + userYSBQCId + "&YSBQCId=" + YSBQCId + "&HappenDate=" + HappenDate, false);
        //addTab(HznsfpbbTitle, "/WSSBSL/reportJsp/showReport_hznsqyzzsfpb.aspx?raq=/zzs2013Ybnsr/hznsqyzzsfpb.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0" + "&userYSBQCId=" + userYSBQCId + "&YSBQCId=" + YSBQCId + "&HappenDate=" + HappenDate, false);
        //addTab(gdzcTitle, "/WSSBSL/reportJsp/showReport_gdzcjx.aspx?raq=/zzs2013Ybnsr/gdzcjx.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0" + "&userYSBQCId=" + userYSBQCId + "&YSBQCId=" + YSBQCId + "&HappenDate=" + HappenDate, false);
        addTab(zbTitle, "/WSSBSL/reportJsp/showReport_ybnsrZb.aspx?raq=/zzs2013Ybnsr/ybnsrZb.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0&szlbDm=" + szlbDm + "&userYSBQCId=" + userYSBQCId + "&YSBQCId=" + YSBQCId + "&HappenDate=" + HappenDate, false);
        addTab(zzsjmssbmxbTitle, "/WSSBSL/reportJsp/showReport_zzsJmssbMxb.aspx?raq=/zzs2013Ybnsr/zzsJmssbMxb.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0" + "&userYSBQCId=" + userYSBQCId + "&YSBQCId=" + YSBQCId + "&HappenDate=" + HappenDate, false);
        //addTab(bfcpxstjTitle, "/WSSBSL/reportJsp/showReport_bfcpxstjb.aspx?raq=/zzs2013Ybnsr/bfcpxstjb.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0" + "&userYSBQCId=" + userYSBQCId + "&YSBQCId=" + YSBQCId + "&HappenDate=" + HappenDate, false);
    } else {
        window.top.alert('消息', "无法获取必要参数！显示报表失败！请刷新页面重试！", 'warning');
    }

    tabsOptions(options);
    //selectTab(fb1Title);
    hideAddAndDelButton();
    $("#createNcphzb").hide();
    window.top.closeProgress();
}

//加载主表、附表三、附表四、部分产品销售统计表的填写资格
function checkZzs2013YbnsrTxzg() {
    var title = $('#tabList').tabs('getSelected').panel('options').title;
    var bbmc;
    if (title == "主表") {
        if (makeZBing == false) {
            window.top.alert('提示', '您尚未生成主表，不能填写主表！', 'warning');
            doCurrTabFun("setReportLock()");
        }
    } else if (title == "附表三") {
        bbmc = "WBJK_SB_ZZS_2013_FB3";
        if (fb3TsxxList) {
            tsxxList = fb3TsxxList;
            showTsxxListWindow();//显示提示信息
        } else {
            if (fb3Check == false) {
                currOprate = 2;
                window.top.progress("正在检查", "正在检查附表三填写资格......");
                $.postJSON("/WSSBSL/do_zzs2013_Zzs2013_checkZzs2013Txzg.ashx",
					{ "ssqq": ssqq, "ssqz": ssqz, "szlbDm": szlbDm, "bbmc": bbmc },
					function (data, textStatus) {
					    window.top.closeProgress();
					    if (data && data.length > 0) {
					        if (data[0] != "Y") {
					            doCurrTabFun("setReportLock()");
					            tsxxList = data[1];
					            fb3TsxxList = data[1];
					            showTsxxListWindow();//显示提示信息
					        }
					    }
					    fb3Check = true;
					}
				);
            }
        }
    }
    else if (title == "税负测算表") {
        bbmc = "WBJK_SB_ZZS_YGZSFFXCSMXB";
        if (sffxcsmxbTsxxList) {
            tsxxList = sffxcsmxbTsxxList;
            showTsxxListWindow();//显示提示信息
        } else {
            if (sffxcsmxbCheck == false) {
                currOprate = 2;
                window.top.progress("正在检查", "正在检查税负分析测算明细表填写资格......");
                $.postJSON("/WSSBSL/do_zzs2013_Zzs2013_checkZzs2013Txzg.ashx",
					{ "ssqq": ssqq, "ssqz": ssqz, "bbmc": bbmc },
					function (data, textStatus) {
					    window.top.closeProgress();
					    if (data && data.length > 0) {
					        if (data[0] != "Y") {
					            doCurrTabFun("setReportLock()");
					            tsxxList = data[1];
					            sffxcsmxbTsxxList = data[1];
					            showTsxxListWindow();//显示提示信息
					        }
					    }
					    sffxcsmxbCheck = true;
					}
				);
            }
        }
    }
    else if (title == "汇总纳税分配表") {
        bbmc = "WBJK_SB_ZZS_HZNSFPB";
        if (hznsfpbTsxxList) {
            tsxxList = hznsfpbTsxxList;
            showTsxxListWindow();//显示提示信息
        } else {
            if (hznsfpbCheck == false) {
                currOprate = 2;
                window.top.progress("正在检查", "正在检查汇总纳税分配表填写资格......");
                $.postJSON("/WSSBSL/do_zzs2013_Zzs2013_checkZzs2013Txzg1.ashx",
					{ "ssqq": ssqq, "ssqz": ssqz, "bbmc": bbmc },
					function (data, textStatus) {
					    window.top.closeProgress();
					    if (data && data.length > 0) {
					        if (data[0] != "Y") {
					            doCurrTabFun("setReportLock()");
					            tsxxList = data[1];
					            hznsfpbTsxxList = data[1];
					            showTsxxListWindow();//显示提示信息
					        }
					    }
					    hznsfpbCheck = true;
					}
				);
            }
        }
    }

        /**
        else if(title == "附表四"){
            bbmc="WBJK_SB_ZZS_2013_FB4";
            if(fb4TsxxList){
                tsxxList = fb4TsxxList;
                showTsxxListWindow();//显示提示信息
            }else{
                if (fb4Check == false) {
                    currOprate = 2;
                    window.top.progress("正在检查","正在检查附表四填写资格......");
                    $.postJSON("/WSSBSL/do_zzs2013_Zzs2013_checkZzs2013Txzg.action", 
                        {"ssqq": ssqq,"ssqz": ssqz,"bbmc": bbmc}, 
                        function(data, textStatus){
                            window.top.closeProgress();
                            if (data && data.length > 0) {
                                if (data[0] != "Y") {
                                    doCurrTabFun("setReportLock()");
                                    tsxxList = data[1];
                                    fb4TsxxList = data[1];
                                    showTsxxListWindow();//显示提示信息
                                }
                            }
                            fb4Check = true;
                        }
                    );
                }
            }
        }
        **/
    else if (title == "部分产品销售统计表") {
        bbmc = "WBJK_SB_ZZS_BFCPXSTJB";
        if (zzsBfcpxstjbTsxxList) {
            tsxxList = zzsBfcpxstjbTsxxList;
            showTsxxListWindow();//显示提示信息
        } else {
            if (zzsBfcpxstjbCheck == false) {
                currOprate = 2;
                window.top.progress("正在检查", "正在检查部分产品销售统计表填写资格......");
                $.postJSON("/WSSBSL/do_zzs2013_Zzs2013_checkZzs2013Txzg2.ashx",
					{ "ssqq": ssqq, "ssqz": ssqz, "bbmc": bbmc },
					function (data, textStatus) {
					    window.top.closeProgress();
					    if (data && data.length > 0) {
					        if (data[0] != "Y") {
					            doCurrTabFun("setReportLock()");
					            tsxxList = data[1];
					            zzsBfcpxstjbTsxxList = data[1];
					            showTsxxListWindow();//显示提示信息
					        }
					    }
					    zzsBfcpxstjbCheck = true;
					}
				);
            }
        }
    }
    /**
	else if (title == "增值税减免税申报明细表") {
		bbmc = "WBJK_SB_ZZS_JMSSBMXB";
		if (zzsJmssbMxbTsxxList) {
			tsxxList = zzsJmssbMxbTsxxList;
			showTsxxListWindow();//显示提示信息
		}
		else {
			if (zzsJmssbMxbCheck == false) {
				currOprate = 2;
				window.top.progress("正在检查", "正在检查【增值税减免税申报明细表】填写资格......");
				$.postJSON("/WSSBSL/do_zzs2013_Zzs2013_checkZzs2013Txzg.action", {
					"ssqq": ssqq,
					"ssqz": ssqz,
					"bbmc": bbmc
				}, function(data, textStatus){
					window.top.closeProgress();
					if (data && data.length > 0) {
						if (data[0] != "Y") {
							doCurrTabFun("setReportLock()");
							tsxxList = data[1];
							zzsJmssbMxbTsxxList = data[1];
							showTsxxListWindow();//显示提示信息
						}
					}
					zzsJmssbMxbCheck = true;
				});
			}
		}
	}
	**/
}

//加载增值税农产品报表tab
function loadZzsNcpBbTabs() {
    var hzTitle = "农产品汇总表";
    var trccTitle = "投入产出法";
    var cbTitle = "成本法";
    var zjxsTitle = "直接销售";
    var bgchwstTitle = "不构成货物实体";
    if (tbqk.substring(10, 11) == '1') {
        hzTitle = "√农产品汇总表";
    } if (tbqk.substring(11, 12) == '1') {
        trccTitle = "√投入产出法";
    } if (tbqk.substring(12, 13) == '1') {
        cbTitle = "√成本法";
    } if (tbqk.substring(13, 14) == '1') {
        zjxsTitle = "√直接销售";
    } if (tbqk.substring(14, 15) == '1') {
        bgchwstTitle = "√不构成货物实体";
    }
    if (typeof (nsrsbh) == "undefined") {
        window.top.alert('消息', "无法获取必要参数！显示报表失败！请刷新页面重试！", 'warning');
    } else {
        addTab(hzTitle, "/WSSBSL/reportJsp/showReport.jsp?raq=/zzs2013Ybnsr/ncpdkjsb.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        addTab(trccTitle, "/WSSBSL/reportJsp/showReport.jsp?raq=/zzs2013Ybnsr/ncpdkjsbTrcc.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        addTab(cbTitle, "/WSSBSL/reportJsp/showReport.jsp?raq=/zzs2013Ybnsr/ncpdkjsbCb.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        addTab(zjxsTitle, "/WSSBSL/reportJsp/showReport.jsp?raq=/zzs2013Ybnsr/ncpdkjsbZjxs.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        addTab(bgchwstTitle, "/WSSBSL/reportJsp/showReport.jsp?raq=/zzs2013Ybnsr/ncpdkjsbBgchwst.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
    }
}

function showButton() {
    try {
        doCurrTabFun("showOrHideButton()");
    } catch (e) { }
}

//一般纳税人报表初始化
function zzsYbnsrInit(xhid) {
    window.top.progress("正在加载报表", "正在加载报表数据......");
    $.postJSON("/WSSBSL/do_zzs2013_Zzs2013_loadYbnsrInit.ashx", { "xhid": xhid }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                userYSBQCId = data[1].userYSBQCId;
                YSBQCId = data[1].userYSBQCId;
                HappenDate = data[1].HappenDate;
                nsrsbh = data[1].nsrsbh;
                djxh = data[1].djxh;
                skssq = data[1].skssq;
                ssqq = data[1].ssqq;
                ssqz = data[1].ssqz;
                sbxh = data[1].sbxh;
                sbzt = data[1].sbzt;
                tbqk = data[1].tbqk;
                szlbDm = data[1].szlbDm;
                ncpFlag = data[1].ncpFlag;
                $("#lb_sbqq").text(data[1].sbqq);
                $("#lb_sbqz").text(data[1].sbqz);
                $("#lb_ssqq").text(ssqq);
                $("#lb_ssqz").text(ssqz);
                $("#lb_szlb").text(getSzlbMc(szlbDm));
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
                            zzsYbnsrInit(data[2]);
                            window.top.showTbbzDiv();
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
    var params = "bbmc=WBJK_SB_ZZS_2003_YBNSR,WBJK_SB_ZZS_2013_FB1,WBJK_SB_ZZS_2013_FB2,WBJK_SB_ZZS_2013_FB3,WBJK_SB_ZZS_2013_FB4,WBJK_SB_ZZS_2016_FB5,WBJK_SB_ZZS_BQDKJXSEJGMXB,WBJK_SB_ZZS_YGZSFFXCSMXB,WBJK_SB_ZZS_HZNSFPB," +
				"WBJK_SB_ZZS_2003_FB_GDZCJXSEDK,WBJK_SB_ZZS_NCPDKJSB,WBJK_SB_ZZS_NCPDKJSB_BGCHWST,WBJK_SB_ZZS_NCPDKJSB_CB," +
				"WBJK_SB_ZZS_NCPDKJSB_TRCC,WBJK_SB_ZZS_NCPDKJSB_ZJXS,WBJK_SB_ZZS_JMSSBMXB";
    $.postJSON("/WSSBSL/do_report_Report_queryTbbz_zzs.ashx", { "params": params }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                WBJK_SB_ZZS_2003_YBNSR_TbbzList = data[1][0];
                WBJK_SB_ZZS_2013_FB1_TbbzList = data[1][1];
                WBJK_SB_ZZS_2013_FB2_TbbzList = data[1][2];
                WBJK_SB_ZZS_2013_FB3_TbbzList = data[1][3];
                WBJK_SB_ZZS_2013_FB4_TbbzList = data[1][4];
                WBJK_SB_ZZS_2016_FB5_TbbzList = data[1][5];
                WBJK_SB_ZZS_BQDKJXSEJGMXB_TbbzList = data[1][6];
                WBJK_SB_ZZS_YGZSFFXCSMXB_TbbzList = data[1][7];
                WBJK_SB_ZZS_HZNSFPB_TbbzList = data[1][8];
                WBJK_SB_ZZS_2003_FB_GDZCJXSEDK_TbbzList = data[1][9];
                WBJK_SB_ZZS_NCPDKJSB_TbbzList = data[1][10];
                WBJK_SB_ZZS_NCPDKJSB_BGCHWST_TbbzList = data[1][11];
                WBJK_SB_ZZS_NCPDKJSB_CB_TbbzList = data[1][12];
                WBJK_SB_ZZS_NCPDKJSB_TRCC_TbbzList = data[1][13];
                WBJK_SB_ZZS_NCPDKJSB_ZJXS_TbbzList = data[1][14];
                WBJK_SB_ZZS_JMSSBMXB_TbbzList = data[1][15];
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
    var params = "bbmc=WBJK_SB_ZZS_2003_YBNSR,WBJK_SB_ZZS_2013_FB1,WBJK_SB_ZZS_2013_FB2,WBJK_SB_ZZS_2013_FB3,WBJK_SB_ZZS_2013_FB4,WBJK_SB_ZZS_2016_FB5,WBJK_SB_ZZS_BQDKJXSEJGMXB,WBJK_SB_ZZS_YGZSFFXCSMXB,WBJK_SB_ZZS_HZNSFPB," +
				"WBJK_SB_ZZS_2003_FB_GDZCJXSEDK,WBJK_SB_ZZS_NCPDKJSB,WBJK_SB_ZZS_NCPDKJSB_BGCHWST,WBJK_SB_ZZS_NCPDKJSB_CB," +
				"WBJK_SB_ZZS_NCPDKJSB_TRCC,WBJK_SB_ZZS_NCPDKJSB_ZJXS,WBJK_SB_ZZS_JMSSBMXB;ssqq=" + ssqq + ";ssqz=" + ssqz + ";skssq=" + skssq;
    $.postJSON("/WSSBSL/do_report_Report_loadLockRule_zzs.ashx", {
        "params": params
    }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                WBJK_SB_ZZS_2003_YBNSR_dynamicBz = data[1][0];
                WBJK_SB_ZZS_2013_FB1_dynamicBz = data[1][1];
                WBJK_SB_ZZS_2013_FB2_dynamicBz = data[1][2];
                WBJK_SB_ZZS_2013_FB3_dynamicBz = data[1][3];
                WBJK_SB_ZZS_2013_FB4_dynamicBz = data[1][4];
                WBJK_SB_ZZS_2016_FB5_dynamicBz = data[1][5];
                WBJK_SB_ZZS_BQDKJXSEJGMXB_dynamicBz = data[1][6];
                WBJK_SB_ZZS_YGZSFFXCSMXB_dynamicBz = data[1][7];
                WBJK_SB_ZZS_HZNSFPB_dynamicBz = data[1][8];
                WBJK_SB_ZZS_2003_FB_GDZCJXSEDK_dynamicBz = data[1][9];
                WBJK_SB_ZZS_NCPDKJSB_dynamicBz = data[1][10];
                WBJK_SB_ZZS_NCPDKJSB_BGCHWST_dynamicBz = data[1][11];
                WBJK_SB_ZZS_NCPDKJSB_CB_dynamicBz = data[1][12];
                WBJK_SB_ZZS_NCPDKJSB_TRCC_dynamicBz = data[1][13];
                WBJK_SB_ZZS_NCPDKJSB_ZJXS_dynamicBz = data[1][14];
                WBJK_SB_ZZS_JMSSBMXB_dynamicBz = data[1][15];

                WBJK_SB_ZZS_2003_YBNSR_gzList = data[2][0];
                WBJK_SB_ZZS_2013_FB1_gzList = data[2][1];
                WBJK_SB_ZZS_2013_FB2_gzList = data[2][2];
                WBJK_SB_ZZS_2013_FB3_gzList = data[2][3];
                WBJK_SB_ZZS_2013_FB4_gzList = data[2][4];
                WBJK_SB_ZZS_2016_FB5_gzList = data[2][5];
                WBJK_SB_ZZS_BQDKJXSEJGMXB_gzList = data[2][6];
                WBJK_SB_ZZS_YGZSFFXCSMXB_gzList = data[2][7];
                WBJK_SB_ZZS_HZNSFPB_gzList = data[2][8];
                WBJK_SB_ZZS_2003_FB_GDZCJXSEDK_gzList = data[2][9];
                WBJK_SB_ZZS_NCPDKJSB_gzList = data[2][10];
                WBJK_SB_ZZS_NCPDKJSB_BGCHWST_gzList = data[2][11];
                WBJK_SB_ZZS_NCPDKJSB_CB_gzList = data[2][12];
                WBJK_SB_ZZS_NCPDKJSB_TRCC_gzList = data[2][13];
                WBJK_SB_ZZS_NCPDKJSB_ZJXS_gzList = data[2][14];
                WBJK_SB_ZZS_JMSSBMXB_gzList = data[2][15];
            } else {
                window.top.alert('消息', data[1], 'warning');
            }
        }
        loadZzsYbnsrBbTabs();
        if (ncpFlag == "Y") {
            loadZzsNcpBbTabs();
            $("#sbncpflag").attr("checked", true);
            $("#createNcphzb").show();
        }
        window.top.showTbbzDiv();
    });
}

//根据税种类别代码获取税种类别
function getSzlbMc(szlbDm) {
    if (szlbDm == "11" || szlbDm == "30") {
        return "应税货物增值税";
    } else if (szlbDm == "21" || szlbDm == "31") {
        return "应税服务增值税";
    } else if (szlbDm == "22" || szlbDm == "32") {
        return "混征增值税";
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
        if (title == "主表") {
            window.top.alert('提示', '您尚未生成主表，不能保存主表！', 'warning');
        } else if (title == "附表三") {
            if (!fb3TsxxList) {
                window.top.progress("正在保存", "数据正在保存......");
                doCurrTabFun("submit()");
            } else {
                tsxxList = fb3TsxxList;
                showTsxxListWindow();//显示提示信息
            }
        } else if (title == "附表四") {
            if (!fb4TsxxList) {
                window.top.progress("正在保存", "数据正在保存......");
                doCurrTabFun("submit()");
            } else {
                tsxxList = fb4TsxxList;
                showTsxxListWindow();//显示提示信息
            }
        } else if (title == "部分产品销售统计表") {
            if (!zzsBfcpxstjbTsxxList) {
                window.top.progress("正在保存", "数据正在保存......");
                doCurrTabFun("submit()");
            } else {
                tsxxList = zzsBfcpxstjbTsxxList;
                showTsxxListWindow();//显示提示信息
            }
        } else if (title == "税负测算表") {
            if (!sffxcsmxbTsxxList) {
                window.top.progress("正在保存", "数据正在保存......");
                doCurrTabFun("submit()");
            } else {
                tsxxList = sffxcsmxbTsxxList;
                showTsxxListWindow();//显示提示信息
            }
        } else if (title == "汇总纳税分配表") {
            if (!hznsfpbTsxxList) {
                window.top.progress("正在保存", "数据正在保存......");
                doCurrTabFun("submit()");
            } else {
                tsxxList = hznsfpbTsxxList;
                showTsxxListWindow();//显示提示信息
            }
        } else if (title == "增值税减免税申报明细表") {
            if (!zzsJmssbMxbTsxxList) {
                window.top.progress("正在保存", "数据正在保存......");
                doCurrTabFun("submit()");
            } else {
                tsxxList = zzsJmssbMxbTsxxList;
                showTsxxListWindow();//显示提示信息
            }
        }
        else {
            window.top.progress("正在保存", "数据正在保存......");
            doCurrTabFun("submit()");
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
        if (title.substring(0, 1) == "√") {
            window.top.confirm("提示", "请确认是否要删除该报表数据？", function (result) {
                if (result) {
                    if (title == "附表三") {
                        if (!fb3TsxxList) {
                            window.top.progress("正在删除", "数据正在删除......");
                            doCurrTabFun("deleteReport()");
                        } else {
                            tsxxList = fb3TsxxList;
                            showTsxxListWindow();//显示提示信息
                        }
                    } else if (title == "附表四") {
                        if (!fb4TsxxList) {
                            window.top.progress("正在删除", "数据正在删除......");
                            doCurrTabFun("deleteReport()");
                        } else {
                            tsxxList = fb4TsxxList;
                            showTsxxListWindow();//显示提示信息
                        }
                    } else if (title == "税负测算表") {
                        if (!sffxcsmxbTsxxList) {
                            window.top.progress("正在删除", "数据正在删除......");
                            doCurrTabFun("deleteReport()");
                        } else {
                            tsxxList = sffxcsmxbTsxxList;
                            showTsxxListWindow();//显示提示信息
                        }
                    } else if (title == "汇总纳税分配表") {
                        if (!hznsfpbTsxxList) {
                            window.top.progress("正在删除", "数据正在删除......");
                            doCurrTabFun("deleteReport()");
                        } else {
                            tsxxList = hznsfpbTsxxList;
                            showTsxxListWindow();//显示提示信息
                        }
                    } else if (title == "增值税减免税申报明细表") {
                        if (!zzsJmssbMxbTsxxList) {
                            window.top.progress("正在删除", "数据正在删除......");
                            doCurrTabFun("deleteReport()");
                        } else {
                            tsxxList = zzsJmssbMxbTsxxList;
                            showTsxxListWindow();//显示提示信息
                        }
                    } else if (title == "部分产品销售统计表") {
                        if (!zzsBfcpxstjbTsxxList) {
                            window.top.progress("正在删除", "数据正在删除......");
                            doCurrTabFun("deleteReport()");
                        } else {
                            tsxxList = zzsBfcpxstjbTsxxList;
                            showTsxxListWindow();//显示提示信息
                        }
                    }
                    else {
                        window.top.progress("正在删除", "数据正在删除......");
                        doCurrTabFun("deleteReport()");
                    }
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
    $.postJSON("/WSSBSL/do_zzs2013_Zzs2013_delete.ashx",
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

//是否适用农产品
function showOrHideNcpTable() {
    if (sbzt == "0" || sbzt == "2") {
        if ($("#sbncpflag").attr("checked")) {
            window.top.confirm("提示", "根据政策规定，只有在国税局登记的试点企业才能按核定扣除办法申报农产品增值税，请确认是否已进行相关登记？", function (result) {
                if (result) {
                    loadZzsNcpBbTabs();
                    $("#createNcphzb").show();
                } else {
                    $("#sbncpflag").attr("checked", false);
                }
            });
        } else {
            window.top.confirm("提示", "去掉该选项，则会删除您当期已填写的农产品增值税报表数据（假如您已填写），请确认是否执行该操作？", function (result) {
                if (result) {
                    //删除农产品5个报表数据
                    $.postJSON("/WSSBSL/do_zzs2013_Zzs2013_deleteData.action",
						{ "sbxh": sbxh },
						function (data, textStatus) {
						    if (data && data.length > 0) {
						        if (data[0] == "Y") {
						            closeNcpTableTabs();
						            $("#sbncpflag").attr("checked", false);
						            $("#createNcphzb").hide();
						            window.top.alert('消息', data[1], 'info');
						        } else {
						            window.top.alert('消息', data[1], 'warning');
						            $("#sbncpflag").attr("checked", true);
						        }
						    }
						}
					);
                    //
                } else {
                    $("#sbncpflag").attr("checked", true);
                    $("#createNcphzb").show();
                }
            });
        }
    } else if (sbzt == "1") {
        window.top.alert('消息', "该属期（" + skssq + "）报表您已申报，不能修改报表数据，如需修改申报表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不要修改报表数据。", 'warning');
    }
}

//关闭农产品5个报表标签
function closeNcpTableTabs() {
    closeTab("农产品汇总表");
    closeTab("投入产出法");
    closeTab("成本法");
    closeTab("直接销售");
    closeTab("不构成货物实体");
    closeTab("√农产品汇总表");
    closeTab("√投入产出法");
    closeTab("√成本法");
    closeTab("√直接销售");
    closeTab("√不构成货物实体");
}

//生成主表
function createZbDate() {
    if (sbzt == "0" || sbzt == "2") {
        var fb1 = tbqk.substring(1, 2);//附表一
        var message = "";
        if (fb1 == "1") {
            window.top.confirm("提示", "自动为您从附表向主表填数，但主表的部分数据仍需手工填写并保存，确认要现在生成主表吗？", function (result) {
                if (result) {
                    var zbDataList = doCurrTabFunByTitle('√附表一', 'getYbnsrFb1Data()');
                    if (getTab('主表')) {
                        makeZBing = true;
                        selectTab("主表");
                        doCurrTabFunByTitle('主表', 'setYbnsrZbByList(' + zbDataList + ')');
                    } else if (getTab('√主表')) {
                        selectTab("√主表");
                        doCurrTabFunByTitle('√主表', 'setYbnsrZbByList(' + zbDataList + ')');
                    }
                    //window.frames["mainiframetabid0"].location.reload();
                }
            });
        } else {
            window.top.alert('消息', "目前没有填写增值税附表一，只有填写了增值税附表一才能生成主表。", 'warning');
        }
    } else if (sbzt == "1") {
        window.top.alert('消息', "该属期（" + skssq + "）报表您已申报，不能修改报表数据，如需修改申报表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不要修改报表数据。", 'warning');
    }
}

//生产农产品汇总表
function createNcphzbData() {
    if (sbzt == "0" || sbzt == "2") {
        var trcc = tbqk.substring(11, 12);//投入产出表
        var cb = tbqk.substring(12, 13);//成本表
        var zjxs = tbqk.substring(13, 14);//直接销售表
        var bgc = tbqk.substring(14, 15);//不构成表
        var message = "";
        if (trcc == "1" || cb == "1" || zjxs == "1" || bgc == "1") {
            window.top.confirm("提示", "确认要生成汇总表吗？", function (result) {
                if (result) {
                    $.postJSON("/WSSBSL/do_zzs2013_Zzs2013_createNcphzbData.action",
						{ "skssq": skssq, "ssqq": ssqq, "ssqz": ssqz },
						function (data, textStatus) {
						    if (data && data.length > 0) {
						        if (data[0] == "Y") {
						            var tabName;
						            var ncpZbTab;
						            var ncpZbTab1 = getTab("农产品汇总表");
						            var ncpZbTab2 = getTab("√农产品汇总表");
						            if (ncpZbTab1) {
						                ncpZbTab = ncpZbTab1;
						                tabName = "农产品汇总表";
						            } else {
						                ncpZbTab = ncpZbTab2;
						                tabName = "√农产品汇总表";
						            }
						            var currid = ncpZbTab.panel('options').id;
						            var iframeid = "mainiframe" + currid;
						            window.frames[iframeid].location.reload();//刷新农产品汇总表
						            window.top.alert('消息', data[1], 'info', function () {
						                selectTab(tabName);
						                afterSave();
						            });
						        } else {
						            //reloadTab();
						            window.top.alert('消息', data[1], 'warning');
						        }
						    }
						}
					);
                } else {
                    $("#sbncpflag").attr("checked", false);
                }
            });
        } else {
            window.top.alert('消息', "目前没有填写农产品相关报表，只有填写了任意一个农产品增值税相关报表才能生成汇总表。", 'warning');
        }
    } else if (sbzt == "1") {
        window.top.alert('消息', "该属期（" + skssq + "）报表您已申报，不能修改报表数据，如需修改申报表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不要修改报表数据。", 'warning');
    }
}


//保存后回调方法
function afterSave() {
    $.postJSON("/WSSBSL/do_zzs2013_Zzs2013_updateTbxx.ashx",
		{ "pzzlDm": "BDA0610606", "skssq": skssq },
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
		            makeZBing = false;
		        }
		    }
		}
	);
}

//删除后调用
function afterDelete() {
    $.postJSON("/WSSBSL/do_zzs2013_Zzs2013_updateTbxx1.ashx",
		{ "pzzlDm": "BDA0610606", "skssq": skssq },
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
    //reloadTab();
}

//根据填报情况修改tab标题
function changeTitleByTxqk(title) {
    if (title == "主表") {
        if (tbqk.substring(0, 1) == "1") {
            var newTitle = "√主表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表一") {
        if (tbqk.substring(1, 2) == "1") {
            var newTitle = "√附表一";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表二") {
        if (tbqk.substring(2, 3) == "1") {
            var newTitle = "√附表二";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表三") {
        if (tbqk.substring(3, 4) == "1") {
            var newTitle = "√附表三";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表四") {
        if (tbqk.substring(4, 5) == "1") {
            var newTitle = "√附表四";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表五") {
        if (tbqk.substring(5, 6) == "1") {
            var newTitle = "√附表五";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "进项结构表") {
        if (tbqk.substring(6, 7) == "1") {
            var newTitle = "√进项结构表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "税负测算表") {
        if (tbqk.substring(7, 8) == "1") {
            var newTitle = "√税负测算表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "汇总纳税分配表") {
        if (tbqk.substring(8, 9) == "1") {
            var newTitle = "√汇总纳税分配表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "固定资产表") {
        if (tbqk.substring(9, 10) == "1") {
            var newTitle = "√固定资产表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "农产品汇总表") {
        if (tbqk.substring(10, 11) == "1") {
            var newTitle = "√农产品汇总表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "投入产出法") {
        if (tbqk.substring(11, 12) == "1") {
            var newTitle = "√投入产出法";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "成本法") {
        if (tbqk.substring(12, 13) == "1") {
            var newTitle = "√成本法";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "直接销售") {
        if (tbqk.substring(13, 14) == "1") {
            var newTitle = "√直接销售";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "不构成货物实体") {
        if (tbqk.substring(14, 15) == "1") {
            var newTitle = "√不构成货物实体";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "部分产品销售统计表") {
        if (tbqk.substring(15, 16) == "1") {
            var newTitle = "√部分产品销售统计表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "增值税减免税申报明细表") {
        if (tbqk.substring(16, 17) == "1") {
            var newTitle = "√增值税减免税申报明细表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√主表") {
        if (tbqk.substring(0, 1) == "0") {
            var newTitle = "主表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表一") {
        if (tbqk.substring(1, 2) == "0") {
            var newTitle = "附表一";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表二") {
        if (tbqk.substring(2, 3) == "0") {
            var newTitle = "附表二";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表三") {
        if (tbqk.substring(3, 4) == "0") {
            var newTitle = "附表三";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表四") {
        if (tbqk.substring(4, 5) == "0") {
            var newTitle = "附表四";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表五") {
        if (tbqk.substring(5, 6) == "0") {
            var newTitle = "附表五";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√进项结构表") {
        if (tbqk.substring(6, 7) == "0") {
            var newTitle = "进项结构表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√税负测算表") {
        if (tbqk.substring(7, 8) == "0") {
            var newTitle = "税负测算表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√汇总纳税分配表") {
        if (tbqk.substring(8, 9) == "0") {
            var newTitle = "汇总纳税分配表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√固定资产表") {
        if (tbqk.substring(9, 10) == "0") {
            var newTitle = "固定资产表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√农产品汇总表") {
        if (tbqk.substring(10, 11) == "0") {
            var newTitle = "农产品汇总表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√投入产出法") {
        if (tbqk.substring(11, 12) == "0") {
            var newTitle = "投入产出法";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√成本法") {
        if (tbqk.substring(12, 13) == "0") {
            var newTitle = "成本法";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√直接销售") {
        if (tbqk.substring(13, 14) == "0") {
            var newTitle = "直接销售";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√不构成货物实体") {
        if (tbqk.substring(14, 15) == "0") {
            var newTitle = "不构成货物实体";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√部分产品销售统计表") {
        if (tbqk.substring(15, 16) == "0") {
            var newTitle = "部分产品销售统计表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√增值税减免税申报明细表") {
        if (tbqk.substring(16, 17) == "0") {
            var newTitle = "增值税减免税申报明细表";
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
    return str;
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

//获取附表数据设置到主表隐藏格中
function getHideData() {
    var title = $('#tabList').tabs('getSelected').panel('options').title;
    if (title == "主表" || title == "√主表") {
        var fb1Title = "";
        if (getTab('附表一')) {
            fb1Title = "附表一";
        } else if (getTab('√附表一')) {
            fb1Title = "√附表一";
        }
        var c13r2 = parseFloat(getTableData(title, "report1_G23"));
        var fb1_c10r1 = parseFloat(getTableData(fb1Title, "report1_N8"));
        var fb1_c10r3 = parseFloat(getTableData(fb1Title, "report1_N10"));
        var fb1_c10r1Ar3 = fb1_c10r1 + fb1_c10r3;
        if (fb1_c10r1Ar3 < 0) { fb1_c10r1Ar3 = 0; }//附表一第10列第1行+第3行计算结果小于零时，取零值
        //不存在往期挂账时，取零值
        if (c13r2 <= 0) {
            fb1_c10r1Ar3 = 0;
        }
        doCurrTabFun("setTableValue('report1_K4'," + fb1_c10r1Ar3 + ")");
    } else if (title == "汇总纳税分配表" || title == "√汇总纳税分配表") {
        var zbTitle = "";
        var fb1Title = "";
        if (getTab('主表')) {
            zbTitle = "主表";
        } else if (getTab('√主表')) {
            zbTitle = "√主表";
        }
        if (getTab('附表一')) {
            fb1Title = "附表一";
        } else if (getTab('√附表一')) {
            fb1Title = "√附表一";
        }
        //主表取数
        var zb_c1r11 = parseFloat(getTableData(zbTitle, "report1_E21"));//主表1列11行
        var zb_c1r19 = parseFloat(getTableData(zbTitle, "report1_E29"));//主表1列19行
        var zb_c1r21 = parseFloat(getTableData(zbTitle, "report1_E31"));//主表1列21行
        var zb_c1r23 = parseFloat(getTableData(zbTitle, "report1_E33"));//主表1列23行
        //附表一取数--应税货物
        var fb1_c10r1 = parseFloat(getTableData(fb1Title, "report1_N8"));//附表一  10列1行
        var fb1_c10r3 = parseFloat(getTableData(fb1Title, "report1_N10"));//附表一  10列3行
        var fb1_c10r9a = parseFloat(getTableData(fb1Title, "report1_N16"));//附表一  10列9a行
        var fb1_c10r11 = parseFloat(getTableData(fb1Title, "report1_N19"));//附表一  10列11行
        //附表一取数--应税服务
        var fb1_c14r2 = parseFloat(getTableData(fb1Title, "report1_R9"));//附表一  14列2行
        var fb1_c14r4 = parseFloat(getTableData(fb1Title, "report1_R11"));//附表一  14列4行
        var fb1_c14r5 = parseFloat(getTableData(fb1Title, "report1_R12"));//附表一  14列5行
        var fb1_c14r9b = parseFloat(getTableData(fb1Title, "report1_R17"));//附表一  14列9b行
        var fb1_c14r12 = parseFloat(getTableData(fb1Title, "report1_R20"));//附表一  14列12行

        //计算汇总分配表--应税货物基数  Q6栏
        var a1 = isNan(((fb1_c10r1 + fb1_c10r3) / zb_c1r11) * zb_c1r19);
        var a2 = isNan((zb_c1r19 / (zb_c1r19 + zb_c1r21)) * ((fb1_c10r1 + fb1_c10r3) / zb_c1r11) * zb_c1r23);
        var a3 = isNan((zb_c1r21 / (zb_c1r19 + zb_c1r21)) * ((fb1_c10r9a + fb1_c10r11) / zb_c1r21) * zb_c1r23);
        var hzfpb_yshw_js_Q6 = a1 + fb1_c10r9a + fb1_c10r11 - a2 - a3;
        hzfpb_yshw_js_Q6 = hzfpb_yshw_js_Q6.toFixed(2);

        //计算汇总分配表--应税服务基数  Q8栏
        var b1 = isNan(((fb1_c14r2 + fb1_c14r4 + fb1_c14r5) / zb_c1r11) * zb_c1r19);
        var b2 = isNan((zb_c1r19 / (zb_c1r19 + zb_c1r21)) * ((fb1_c14r2 + fb1_c14r4 + fb1_c14r5) / zb_c1r11) * zb_c1r23);
        var b3 = isNan((zb_c1r21 / (zb_c1r19 + zb_c1r21)) * ((fb1_c14r9b + fb1_c14r12) / zb_c1r21) * zb_c1r23);
        var hzfpb_ysfw_js_Q8 = b1 + fb1_c14r9b + fb1_c14r12 - b2 - b3;
        hzfpb_ysfw_js_Q8 = hzfpb_ysfw_js_Q8.toFixed(2);

        var cellid = "report1_Q6,report1_Q8";
        var newZzshzfpbJsVal = hzfpb_yshw_js_Q6 + "," + hzfpb_ysfw_js_Q8;
        if (typeof (zzshzfpbJsVal) == "undefined") {
            zzshzfpbJsVal = "0,0";
        }
        if (zzshzfpbJsVal != newZzshzfpbJsVal) {
            zzshzfpbJsVal = newZzshzfpbJsVal;
            doCurrTabFun("setDynamicTableValue('" + cellid + "','" + zzshzfpbJsVal + "')");
        }

    }

    //判断结果是否为NaN
    function isNan(gsStr) {
        if (isNaN(gsStr)) {
            gsStr = 0;
        }
        return gsStr;
    }
}
