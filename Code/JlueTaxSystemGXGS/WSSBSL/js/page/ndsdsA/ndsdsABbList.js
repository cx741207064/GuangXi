var nsrsbh;
var skssq;
var ssqq;
var ssqz;
var sbxh;
var sbzt;
var tsxxList;
var qylx;		//企业类型
var tblx;		//填报类型（填报表单的填报情况）
var currOprate = 0;	//当前操作  0:列表初始化  1:提交申报   2:报表填写资格检查
var tbqk;			//填报情况：0-未填，1已填
var tbqkFlag;			//填报表单填报信息：0-未填，1已填
var crrFbTitle;		//当前显示的附表的标题
var hznsqylb;		//汇总纳税企业类别
var jbxxXML;		//政策风险提示系统基本信息表 发送报文
var sbXML;			//政策风险提示系统申报信息 发送报文
var analyseResult;	//政策风险提示系统 返回信息
var options = {
    onSelect: function (title) {
        iframeAutoSize();
        showButton();
        checkNdsdsAlTxzg();
    }
};
var loadFinish = false;		//加载完成
var makeZBing = false;		//生成主表中
var makeFb7ing = false;		//生成附表七中

var WBJK_SB_NDSDS_2014_TbbzList;
var WBJK_SB_NDSDS_2014_TBBD_TbbzList;
var WBJK_SB_NDSDS_2014_JCXX_TbbzList;
var WBJK_SB_NDSDS_2014_FB1_TbbzList;
var WBJK_SB_NDSDS_2014_FB2_TbbzList;
var WBJK_SB_NDSDS_2014_FB3_TbbzList;
var WBJK_SB_NDSDS_2014_FB4_TbbzList;
var WBJK_SB_NDSDS_2014_FB5_TbbzList;
var WBJK_SB_NDSDS_2014_FB6_TbbzList;
var WBJK_SB_NDSDS_2014_FB7_TbbzList;
var WBJK_SB_NDSDS_2014_FB8_TbbzList;
var WBJK_SB_NDSDS_2014_FB9_TbbzList;
var WBJK_SB_NDSDS_2014_FB10_TbbzList;
var WBJK_SB_NDSDS_2014_FB11_TbbzList;
var WBJK_SB_NDSDS_2014_FB12_TbbzList;
var WBJK_SB_NDSDS_2014_FB13_TbbzList;
var WBJK_SB_NDSDS_2014_FB14_TbbzList;
var WBJK_SB_NDSDS_2014_FB15_TbbzList;
var WBJK_SB_NDSDS_2014_FB16_TbbzList;
var WBJK_SB_NDSDS_2014_FB17_TbbzList;
var WBJK_SB_NDSDS_2014_FB18_TbbzList;
var WBJK_SB_NDSDS_2014_FB19_TbbzList;
var WBJK_SB_NDSDS_2014_FB20_TbbzList;
var WBJK_SB_NDSDS_2014_FB21_TbbzList;
var WBJK_SB_NDSDS_2014_FB22_TbbzList;
var WBJK_SB_NDSDS_2014_FB23_TbbzList;
var WBJK_SB_NDSDS_2014_FB24_TbbzList;
var WBJK_SB_NDSDS_2014_FB25_TbbzList;
var WBJK_SB_NDSDS_2014_FB26_TbbzList;
var WBJK_SB_NDSDS_2014_FB27_TbbzList;
var WBJK_SB_NDSDS_2014_FB28_TbbzList;
var WBJK_SB_NDSDS_2014_FB29_TbbzList;
var WBJK_SB_NDSDS_2014_FB30_TbbzList;
var WBJK_SB_NDSDS_2014_FB31_TbbzList;
var WBJK_SB_NDSDS_2014_FB32_TbbzList;
var WBJK_SB_NDSDS_2014_FB33_TbbzList;
var WBJK_SB_NDSDS_2014_FB34_TbbzList;
var WBJK_SB_NDSDS_2014_FB35_TbbzList;
var WBJK_SB_NDSDS_2014_FB36_TbbzList;
var WBJK_SB_NDSDS_2014_FB37_TbbzList;
var WBJK_SB_NDSDS_2014_FB38_TbbzList;
var WBJK_SB_NDSDS_2014_FB39_TbbzList;
var WBJK_SB_NDSDS_SKWGQYBGB_TbbzList;
var WBJK_SB_NDSDS_JJKCGJB_TbbzList;


var WBJK_SB_NDSDS_2014_dynamicBz;
var WBJK_SB_NDSDS_2014_TBBD_dynamicBz;
var WBJK_SB_NDSDS_2014_JCXX_dynamicBz;
var WBJK_SB_NDSDS_2014_FB1_dynamicBz;
var WBJK_SB_NDSDS_2014_FB2_dynamicBz;
var WBJK_SB_NDSDS_2014_FB3_dynamicBz;
var WBJK_SB_NDSDS_2014_FB4_dynamicBz;
var WBJK_SB_NDSDS_2014_FB5_dynamicBz;
var WBJK_SB_NDSDS_2014_FB6_dynamicBz;
var WBJK_SB_NDSDS_2014_FB7_dynamicBz;
var WBJK_SB_NDSDS_2014_FB8_dynamicBz;
var WBJK_SB_NDSDS_2014_FB9_dynamicBz;
var WBJK_SB_NDSDS_2014_FB10_dynamicBz;
var WBJK_SB_NDSDS_2014_FB11_dynamicBz;
var WBJK_SB_NDSDS_2014_FB12_dynamicBz;
var WBJK_SB_NDSDS_2014_FB13_dynamicBz;
var WBJK_SB_NDSDS_2014_FB14_dynamicBz;
var WBJK_SB_NDSDS_2014_FB15_dynamicBz;
var WBJK_SB_NDSDS_2014_FB16_dynamicBz;
var WBJK_SB_NDSDS_2014_FB17_dynamicBz;
var WBJK_SB_NDSDS_2014_FB18_dynamicBz;
var WBJK_SB_NDSDS_2014_FB19_dynamicBz;
var WBJK_SB_NDSDS_2014_FB20_dynamicBz;
var WBJK_SB_NDSDS_2014_FB21_dynamicBz;
var WBJK_SB_NDSDS_2014_FB22_dynamicBz;
var WBJK_SB_NDSDS_2014_FB23_dynamicBz;
var WBJK_SB_NDSDS_2014_FB24_dynamicBz;
var WBJK_SB_NDSDS_2014_FB25_dynamicBz;
var WBJK_SB_NDSDS_2014_FB26_dynamicBz;
var WBJK_SB_NDSDS_2014_FB27_dynamicBz;
var WBJK_SB_NDSDS_2014_FB28_dynamicBz;
var WBJK_SB_NDSDS_2014_FB29_dynamicBz;
var WBJK_SB_NDSDS_2014_FB30_dynamicBz;
var WBJK_SB_NDSDS_2014_FB31_dynamicBz;
var WBJK_SB_NDSDS_2014_FB32_dynamicBz;
var WBJK_SB_NDSDS_2014_FB33_dynamicBz;
var WBJK_SB_NDSDS_2014_FB34_dynamicBz;
var WBJK_SB_NDSDS_2014_FB35_dynamicBz;
var WBJK_SB_NDSDS_2014_FB36_dynamicBz;
var WBJK_SB_NDSDS_2014_FB37_dynamicBz;
var WBJK_SB_NDSDS_2014_FB38_dynamicBz;
var WBJK_SB_NDSDS_2014_FB39_dynamicBz;
var WBJK_SB_NDSDS_SKWGQYBGB_dynamicBz;
var WBJK_SB_NDSDS_JJKCGJB_dynamicBz;


var WBJK_SB_NDSDS_2014_gzList;
var WBJK_SB_NDSDS_2014_TBBD_gzList;
var WBJK_SB_NDSDS_2014_JCXX_gzList;
var WBJK_SB_NDSDS_2014_FB1_gzList;
var WBJK_SB_NDSDS_2014_FB2_gzList;
var WBJK_SB_NDSDS_2014_FB3_gzList;
var WBJK_SB_NDSDS_2014_FB4_gzList;
var WBJK_SB_NDSDS_2014_FB5_gzList;
var WBJK_SB_NDSDS_2014_FB6_gzList;
var WBJK_SB_NDSDS_2014_FB7_gzList;
var WBJK_SB_NDSDS_2014_FB8_gzList;
var WBJK_SB_NDSDS_2014_FB9_gzList;
var WBJK_SB_NDSDS_2014_FB10_gzList;
var WBJK_SB_NDSDS_2014_FB11_gzList;
var WBJK_SB_NDSDS_2014_FB12_gzList;
var WBJK_SB_NDSDS_2014_FB13_gzList;
var WBJK_SB_NDSDS_2014_FB14_gzList;
var WBJK_SB_NDSDS_2014_FB15_gzList;
var WBJK_SB_NDSDS_2014_FB16_gzList;
var WBJK_SB_NDSDS_2014_FB17_gzList;
var WBJK_SB_NDSDS_2014_FB18_gzList;
var WBJK_SB_NDSDS_2014_FB19_gzList;
var WBJK_SB_NDSDS_2014_FB20_gzList;
var WBJK_SB_NDSDS_2014_FB21_gzList;
var WBJK_SB_NDSDS_2014_FB22_gzList;
var WBJK_SB_NDSDS_2014_FB23_gzList;
var WBJK_SB_NDSDS_2014_FB24_gzList;
var WBJK_SB_NDSDS_2014_FB25_gzList;
var WBJK_SB_NDSDS_2014_FB26_gzList;
var WBJK_SB_NDSDS_2014_FB27_gzList;
var WBJK_SB_NDSDS_2014_FB28_gzList;
var WBJK_SB_NDSDS_2014_FB29_gzList;
var WBJK_SB_NDSDS_2014_FB30_gzList;
var WBJK_SB_NDSDS_2014_FB31_gzList;
var WBJK_SB_NDSDS_2014_FB32_gzList;
var WBJK_SB_NDSDS_2014_FB33_gzList;
var WBJK_SB_NDSDS_2014_FB34_gzList;
var WBJK_SB_NDSDS_2014_FB35_gzList;
var WBJK_SB_NDSDS_2014_FB36_gzList;
var WBJK_SB_NDSDS_2014_FB37_gzList;
var WBJK_SB_NDSDS_2014_FB38_gzList;
var WBJK_SB_NDSDS_2014_FB39_gzList;
var WBJK_SB_NDSDS_SKWGQYBGB_gzList;
var WBJK_SB_NDSDS_JJKCGJB_gzList;


//启动时加载
$(function () {
    ndsdsAlInit();	//报表初始化
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

//弹出提示所得税政策宣传内容
function showSdsZcXcNrWindow() {
    var buttons = [{
        text: '我已阅读',
        iconCls: 'icon-redo',
        handler: function () {
            window.top.closeEasyDialog();
        }
    }, {
        text: '暂不阅读',
        iconCls: 'icon-cancel',
        handler: function () {
            //window.top.alert("提示","","info",function(){
            window.top.closeEasyDialog();
            //});
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
        resizable: false							//对话框是否可编辑大小
    });
}


//弹出选择附表窗口
function showChooseFbWindow() {
    var tbbdBblsh = getTheTabVar("√填报表单", "bblsh");
    if (tbbdBblsh != null && tbbdBblsh.length > 0) {
        window.top.showEasyDialog("/WSSBSL/show_ndsdsA_chooseFb.action?bblsh=" + tbbdBblsh + "&sbxh=" + sbxh, {
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

//获取指定TAB页面下的全局变量值
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

//定时自动设置宽度(0.3秒一次)
function autoWidth() {
    $("#tbxxDiv").width($("#tbxxDiv").parent().width());
    setTimeout(autoWidth, 300);
}

//加载年度所得税报表tab
function loadNdsdsABbTabs() {
    var fmTitle = "封面";
    var tbbdTitle = "填报表单";
    var jcxxTitle = "基础信息";
    var zbTitle = "主表";
    var fb1Title = "附表一";
    var fb2Title = "附表二";
    var fb3Title = "附表三";
    var fb4Title = "附表四";
    var fb5Title = "附表五";
    var fb6Title = "附表六";
    var fb7Title = "附表七";
    var fb8Title = "附表八";
    var fb9Title = "附表九";
    var fb10Title = "附表十";
    var fb11Title = "附表十一";
    var fb12Title = "附表十二";
    var fb13Title = "附表十三";
    var fb14Title = "附表十四";
    var fb15Title = "附表十五";
    var fb16Title = "附表十六";
    var fb17Title = "附表十七";
    var fb18Title = "附表十八";
    var fb19Title = "附表十九";
    var fb20Title = "附表二十";
    var fb21Title = "附表二十一";
    var fb22Title = "附表二十二";
    var fb23Title = "附表二十三";
    var fb24Title = "附表二十四";
    var fb25Title = "附表二十五";
    var fb26Title = "附表二十六";
    var fb27Title = "附表二十七";
    var fb28Title = "附表二十八";
    var fb29Title = "附表二十九";
    var fb30Title = "附表三十";
    var fb31Title = "附表三十一";
    var fb32Title = "附表三十二";
    var fb33Title = "附表三十三";
    var fb34Title = "附表三十四";
    var fb35Title = "附表三十五";
    var fb36Title = "附表三十六";
    var fb37Title = "附表三十七";
    var fb38Title = "附表三十八";
    var fb39Title = "附表三十九";
    var fb40Title = "受控外国企业";
    var fb41Title = "加计扣除归集表";
    if (tbqk.substring(0, 1) == '1') {
        tbbdTitle = "√填报表单";
    } if (tbqk.substring(1, 2) == '1') {
        jcxxTitle = "√基础信息";
    } if (tbqk.substring(2, 3) == '1') {
        zbTitle = "√主表";
    } if (tbqk.substring(3, 4) == '1') {
        fb1Title = "√附表一";
    } if (tbqk.substring(4, 5) == '1') {
        fb2Title = "√附表二";
    } if (tbqk.substring(5, 6) == '1') {
        fb3Title = "√附表三";
    } if (tbqk.substring(6, 7) == '1') {
        fb4Title = "√附表四";
    } if (tbqk.substring(7, 8) == '1') {
        fb5Title = "√附表五";
    } if (tbqk.substring(8, 9) == '1') {
        fb6Title = "√附表六";
    } if (tbqk.substring(9, 10) == '1') {
        fb7Title = "√附表七";
    } if (tbqk.substring(10, 11) == '1') {
        fb8Title = "√附表八";
    } if (tbqk.substring(11, 12) == '1') {
        fb9Title = "√附表九";
    } if (tbqk.substring(12, 13) == '1') {
        fb10Title = "√附表十";
    } if (tbqk.substring(13, 14) == '1') {
        fb11Title = "√附表十一";
    } if (tbqk.substring(14, 15) == '1') {
        fb12Title = "√附表十二";
    } if (tbqk.substring(15, 16) == '1') {
        fb13Title = "√附表十三";
    } if (tbqk.substring(16, 17) == '1') {
        fb14Title = "√附表十四";
    } if (tbqk.substring(17, 18) == '1') {
        fb15Title = "√附表十五";
    } if (tbqk.substring(18, 19) == '1') {
        fb16Title = "√附表十六";
    } if (tbqk.substring(19, 20) == '1') {
        fb17Title = "√附表十七";
    } if (tbqk.substring(20, 21) == '1') {
        fb18Title = "√附表十八";
    } if (tbqk.substring(21, 22) == '1') {
        fb19Title = "√附表十九";
    } if (tbqk.substring(22, 23) == '1') {
        fb20Title = "√附表二十";
    } if (tbqk.substring(23, 24) == '1') {
        fb21Title = "√附表二十一";
    } if (tbqk.substring(24, 25) == '1') {
        fb22Title = "√附表二十二";
    } if (tbqk.substring(25, 26) == '1') {
        fb23Title = "√附表二十三";
    } if (tbqk.substring(26, 27) == '1') {
        fb24Title = "√附表二十四";
    } if (tbqk.substring(27, 28) == '1') {
        fb25Title = "√附表二十五";
    } if (tbqk.substring(28, 29) == '1') {
        fb26Title = "√附表二十六";
    } if (tbqk.substring(29, 30) == '1') {
        fb27Title = "√附表二十七";
    } if (tbqk.substring(30, 31) == '1') {
        fb28Title = "√附表二十八";
    } if (tbqk.substring(31, 32) == '1') {
        fb29Title = "√附表二十九";
    } if (tbqk.substring(32, 33) == '1') {
        fb30Title = "√附表三十";
    } if (tbqk.substring(33, 34) == '1') {
        fb31Title = "√附表三十一";
    } if (tbqk.substring(34, 35) == '1') {
        fb32Title = "√附表三十二";
    } if (tbqk.substring(35, 36) == '1') {
        fb33Title = "√附表三十三";
    } if (tbqk.substring(36, 37) == '1') {
        fb34Title = "√附表三十四";
    } if (tbqk.substring(37, 38) == '1') {
        fb35Title = "√附表三十五";
    } if (tbqk.substring(38, 39) == '1') {
        fb36Title = "√附表三十六";
    } if (tbqk.substring(39, 40) == '1') {
        fb37Title = "√附表三十七";
    } if (tbqk.substring(40, 41) == '1') {
        fb38Title = "√附表三十八";
    } if (tbqk.substring(41, 42) == '1') {
        fb39Title = "√附表三十九";
    } if (tbqk.substring(42, 43) == '1') {
        fb40Title = "√受控外国企业";
    } if (tbqk.substring(46, 47) == '1') {
        fb41Title = "√加计扣除归集表";
    }
    if (nsrsbh) {
        //封面、填报表单、基础信息、主表必然加载
        addTab(fmTitle, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fm.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        addTab(jcxxTitle, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_jcxx.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        addTab(tbbdTitle, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_tbbd.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        addTab(zbTitle, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_zb.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        addTab(fb7Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb7.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
    } else {
        window.top.alert('消息', "无法获取必要参数！显示报表失败！请刷新页面重试！", 'warning');
    }
    tabsOptions(options);
    hideAddAndDelButton();
    window.top.closeProgress();
}

//加载主表、附表七的填写资格
function checkNdsdsAlTxzg() {
    var title = $('#tabList').tabs('getSelected').panel('options').title;
    if (title == "主表") {
        if (makeZBing == false) {
            window.top.alert('提示', '您尚未生成主表，不能填写主表！', 'warning');
            doCurrTabFun("setReportLock()");
        }
    }
    if (title == "附表七") {
        if (makeFb7ing == false) {
            window.top.alert('提示', '您尚未生成附表七，不能填写附表七！', 'warning');
            doCurrTabFun("setReportLock()");
        }
    }
}

function showButton() {
    try {
        doCurrTabFun("showOrHideButton()");
    } catch (e) { }
}

//报表初始化
function ndsdsAlInit(xhid) {
    window.top.progress("正在加载报表", "正在加载报表数据......");
    $.postJSON("/WSSBSL/do_ndsdsa_NdsdsA_loadNdsdsAlInit.ashx", { "xhid": xhid }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                nsrsbh = data[1].nsrsbh;
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
                $("#lb_hznsqylb").text(setHznsqylb(hznsqylb));
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
                            ndsdsGlywInit(data[2]);
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
    var params = "bbmc=WBJK_SB_NDSDS_2014,WBJK_SB_NDSDS_2014_TBBD,WBJK_SB_NDSDS_2014_JCXX,WBJK_SB_NDSDS_2014_FB1,WBJK_SB_NDSDS_2014_FB2," +
						"WBJK_SB_NDSDS_2014_FB3,WBJK_SB_NDSDS_2014_FB4,WBJK_SB_NDSDS_2014_FB5,WBJK_SB_NDSDS_2014_FB6,WBJK_SB_NDSDS_2014_FB7," +
						"WBJK_SB_NDSDS_2014_FB8,WBJK_SB_NDSDS_2014_FB9,WBJK_SB_NDSDS_2014_FB10,WBJK_SB_NDSDS_2014_FB11,WBJK_SB_NDSDS_2014_FB12," +
						"WBJK_SB_NDSDS_2014_FB13,WBJK_SB_NDSDS_2014_FB14,WBJK_SB_NDSDS_2014_FB15,WBJK_SB_NDSDS_2014_FB16,WBJK_SB_NDSDS_2014_FB17," +
						"WBJK_SB_NDSDS_2014_FB18,WBJK_SB_NDSDS_2014_FB19,WBJK_SB_NDSDS_2014_FB20,WBJK_SB_NDSDS_2014_FB21,WBJK_SB_NDSDS_2014_FB22," +
						"WBJK_SB_NDSDS_2014_FB23,WBJK_SB_NDSDS_2014_FB24,WBJK_SB_NDSDS_2014_FB25,WBJK_SB_NDSDS_2014_FB26,WBJK_SB_NDSDS_2014_FB27," +
						"WBJK_SB_NDSDS_2014_FB28,WBJK_SB_NDSDS_2014_FB29,WBJK_SB_NDSDS_2014_FB30,WBJK_SB_NDSDS_2014_FB31,WBJK_SB_NDSDS_2014_FB32," +
						"WBJK_SB_NDSDS_2014_FB33,WBJK_SB_NDSDS_2014_FB34,WBJK_SB_NDSDS_2014_FB35,WBJK_SB_NDSDS_2014_FB36,WBJK_SB_NDSDS_2014_FB37," +
						"WBJK_SB_NDSDS_2014_FB38,WBJK_SB_NDSDS_2014_FB39,WBJK_SB_NDSDS_SKWGQYBGB,WBJK_SB_NDSDS_JJKCGJB";
    $.postJSON("/WSSBSL/do_report_Report_queryTbbz.action", { "params": params }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                WBJK_SB_NDSDS_2014_TbbzList = data[1][0];
                WBJK_SB_NDSDS_2014_TBBD_TbbzList = data[1][1];
                WBJK_SB_NDSDS_2014_JCXX_TbbzList = data[1][2];
                WBJK_SB_NDSDS_2014_FB1_TbbzList = data[1][3];
                WBJK_SB_NDSDS_2014_FB2_TbbzList = data[1][4];
                WBJK_SB_NDSDS_2014_FB3_TbbzList = data[1][5];
                WBJK_SB_NDSDS_2014_FB4_TbbzList = data[1][6];
                WBJK_SB_NDSDS_2014_FB5_TbbzList = data[1][7];
                WBJK_SB_NDSDS_2014_FB6_TbbzList = data[1][8];
                WBJK_SB_NDSDS_2014_FB7_TbbzList = data[1][9];
                WBJK_SB_NDSDS_2014_FB8_TbbzList = data[1][10];
                WBJK_SB_NDSDS_2014_FB9_TbbzList = data[1][11];
                WBJK_SB_NDSDS_2014_FB10_TbbzList = data[1][12];
                WBJK_SB_NDSDS_2014_FB11_TbbzList = data[1][13];
                WBJK_SB_NDSDS_2014_FB12_TbbzList = data[1][14];
                WBJK_SB_NDSDS_2014_FB13_TbbzList = data[1][15];
                WBJK_SB_NDSDS_2014_FB14_TbbzList = data[1][16];
                WBJK_SB_NDSDS_2014_FB15_TbbzList = data[1][17];
                WBJK_SB_NDSDS_2014_FB16_TbbzList = data[1][18];
                WBJK_SB_NDSDS_2014_FB17_TbbzList = data[1][19];
                WBJK_SB_NDSDS_2014_FB18_TbbzList = data[1][20];
                WBJK_SB_NDSDS_2014_FB19_TbbzList = data[1][21];
                WBJK_SB_NDSDS_2014_FB20_TbbzList = data[1][22];
                WBJK_SB_NDSDS_2014_FB21_TbbzList = data[1][23];
                WBJK_SB_NDSDS_2014_FB22_TbbzList = data[1][24];
                WBJK_SB_NDSDS_2014_FB23_TbbzList = data[1][25];
                WBJK_SB_NDSDS_2014_FB24_TbbzList = data[1][26];
                WBJK_SB_NDSDS_2014_FB25_TbbzList = data[1][27];
                WBJK_SB_NDSDS_2014_FB26_TbbzList = data[1][28];
                WBJK_SB_NDSDS_2014_FB27_TbbzList = data[1][29];
                WBJK_SB_NDSDS_2014_FB28_TbbzList = data[1][30];
                WBJK_SB_NDSDS_2014_FB29_TbbzList = data[1][31];
                WBJK_SB_NDSDS_2014_FB30_TbbzList = data[1][32];
                WBJK_SB_NDSDS_2014_FB31_TbbzList = data[1][33];
                WBJK_SB_NDSDS_2014_FB32_TbbzList = data[1][34];
                WBJK_SB_NDSDS_2014_FB33_TbbzList = data[1][35];
                WBJK_SB_NDSDS_2014_FB34_TbbzList = data[1][36];
                WBJK_SB_NDSDS_2014_FB35_TbbzList = data[1][37];
                WBJK_SB_NDSDS_2014_FB36_TbbzList = data[1][38];
                WBJK_SB_NDSDS_2014_FB37_TbbzList = data[1][39];
                WBJK_SB_NDSDS_2014_FB38_TbbzList = data[1][40];
                WBJK_SB_NDSDS_2014_FB39_TbbzList = data[1][41];
                WBJK_SB_NDSDS_SKWGQYBGB_TbbzList = data[1][42];
                WBJK_SB_NDSDS_JJKCGJB_TbbzList = data[1][43];
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
    var params = "bbmc=WBJK_SB_NDSDS_2014,WBJK_SB_NDSDS_2014_TBBD,WBJK_SB_NDSDS_2014_JCXX,WBJK_SB_NDSDS_2014_FB1,WBJK_SB_NDSDS_2014_FB2," +
						"WBJK_SB_NDSDS_2014_FB3,WBJK_SB_NDSDS_2014_FB4,WBJK_SB_NDSDS_2014_FB5,WBJK_SB_NDSDS_2014_FB6,WBJK_SB_NDSDS_2014_FB7," +
						"WBJK_SB_NDSDS_2014_FB8,WBJK_SB_NDSDS_2014_FB9,WBJK_SB_NDSDS_2014_FB10,WBJK_SB_NDSDS_2014_FB11,WBJK_SB_NDSDS_2014_FB12," +
						"WBJK_SB_NDSDS_2014_FB13,WBJK_SB_NDSDS_2014_FB14,WBJK_SB_NDSDS_2014_FB15,WBJK_SB_NDSDS_2014_FB16,WBJK_SB_NDSDS_2014_FB17," +
						"WBJK_SB_NDSDS_2014_FB18,WBJK_SB_NDSDS_2014_FB19,WBJK_SB_NDSDS_2014_FB20,WBJK_SB_NDSDS_2014_FB21,WBJK_SB_NDSDS_2014_FB22," +
						"WBJK_SB_NDSDS_2014_FB23,WBJK_SB_NDSDS_2014_FB24,WBJK_SB_NDSDS_2014_FB25,WBJK_SB_NDSDS_2014_FB26,WBJK_SB_NDSDS_2014_FB27," +
						"WBJK_SB_NDSDS_2014_FB28,WBJK_SB_NDSDS_2014_FB29,WBJK_SB_NDSDS_2014_FB30,WBJK_SB_NDSDS_2014_FB31,WBJK_SB_NDSDS_2014_FB32," +
						"WBJK_SB_NDSDS_2014_FB33,WBJK_SB_NDSDS_2014_FB34,WBJK_SB_NDSDS_2014_FB35,WBJK_SB_NDSDS_2014_FB36,WBJK_SB_NDSDS_2014_FB37," +
						"WBJK_SB_NDSDS_2014_FB38,WBJK_SB_NDSDS_2014_FB39,WBJK_SB_NDSDS_SKWGQYBGB,WBJK_SB_NDSDS_JJKCGJB" +
					";ssqq=" + ssqq + ";ssqz=" + ssqz + ";skssq=" + skssq;
    $.postJSON("/WSSBSL/do_report_Report_loadLockRule.action", {
        "params": params
    }, function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                WBJK_SB_NDSDS_2014_dynamicBz = data[1][0];
                WBJK_SB_NDSDS_2014_TBBD_dynamicBz = data[1][1];
                WBJK_SB_NDSDS_2014_JCXX_dynamicBz = data[1][2];
                WBJK_SB_NDSDS_2014_FB1_dynamicBz = data[1][3];
                WBJK_SB_NDSDS_2014_FB2_dynamicBz = data[1][4];
                WBJK_SB_NDSDS_2014_FB3_dynamicBz = data[1][5];
                WBJK_SB_NDSDS_2014_FB4_dynamicBz = data[1][6];
                WBJK_SB_NDSDS_2014_FB5_dynamicBz = data[1][7];
                WBJK_SB_NDSDS_2014_FB6_dynamicBz = data[1][8];
                WBJK_SB_NDSDS_2014_FB7_dynamicBz = data[1][9];
                WBJK_SB_NDSDS_2014_FB8_dynamicBz = data[1][10];
                WBJK_SB_NDSDS_2014_FB9_dynamicBz = data[1][11];
                WBJK_SB_NDSDS_2014_FB10_dynamicBz = data[1][12];
                WBJK_SB_NDSDS_2014_FB11_dynamicBz = data[1][13];
                WBJK_SB_NDSDS_2014_FB12_dynamicBz = data[1][14];
                WBJK_SB_NDSDS_2014_FB13_dynamicBz = data[1][15];
                WBJK_SB_NDSDS_2014_FB14_dynamicBz = data[1][16];
                WBJK_SB_NDSDS_2014_FB15_dynamicBz = data[1][17];
                WBJK_SB_NDSDS_2014_FB16_dynamicBz = data[1][18];
                WBJK_SB_NDSDS_2014_FB17_dynamicBz = data[1][19];
                WBJK_SB_NDSDS_2014_FB18_dynamicBz = data[1][20];
                WBJK_SB_NDSDS_2014_FB19_dynamicBz = data[1][21];
                WBJK_SB_NDSDS_2014_FB20_dynamicBz = data[1][22];
                WBJK_SB_NDSDS_2014_FB21_dynamicBz = data[1][23];
                WBJK_SB_NDSDS_2014_FB22_dynamicBz = data[1][24];
                WBJK_SB_NDSDS_2014_FB23_dynamicBz = data[1][25];
                WBJK_SB_NDSDS_2014_FB24_dynamicBz = data[1][26];
                WBJK_SB_NDSDS_2014_FB25_dynamicBz = data[1][27];
                WBJK_SB_NDSDS_2014_FB26_dynamicBz = data[1][28];
                WBJK_SB_NDSDS_2014_FB27_dynamicBz = data[1][29];
                WBJK_SB_NDSDS_2014_FB28_dynamicBz = data[1][30];
                WBJK_SB_NDSDS_2014_FB29_dynamicBz = data[1][31];
                WBJK_SB_NDSDS_2014_FB30_dynamicBz = data[1][32];
                WBJK_SB_NDSDS_2014_FB31_dynamicBz = data[1][33];
                WBJK_SB_NDSDS_2014_FB32_dynamicBz = data[1][34];
                WBJK_SB_NDSDS_2014_FB33_dynamicBz = data[1][35];
                WBJK_SB_NDSDS_2014_FB34_dynamicBz = data[1][36];
                WBJK_SB_NDSDS_2014_FB35_dynamicBz = data[1][37];
                WBJK_SB_NDSDS_2014_FB36_dynamicBz = data[1][38];
                WBJK_SB_NDSDS_2014_FB37_dynamicBz = data[1][39];
                WBJK_SB_NDSDS_2014_FB38_dynamicBz = data[1][40];
                WBJK_SB_NDSDS_2014_FB39_dynamicBz = data[1][41];
                WBJK_SB_NDSDS_SKWGQYBGB_dynamicBz = data[1][42];
                WBJK_SB_NDSDS_JJKCGJB_dynamicBz = data[1][43];

                WBJK_SB_NDSDS_2014_gzList = data[2][0];
                WBJK_SB_NDSDS_2014_TBBD_gzList = data[2][1];
                WBJK_SB_NDSDS_2014_JCXX_gzList = data[2][2];
                WBJK_SB_NDSDS_2014_FB1_gzList = data[2][3];
                WBJK_SB_NDSDS_2014_FB2_gzList = data[2][4];
                WBJK_SB_NDSDS_2014_FB3_gzList = data[2][5];
                WBJK_SB_NDSDS_2014_FB4_gzList = data[2][6];
                WBJK_SB_NDSDS_2014_FB5_gzList = data[2][7];
                WBJK_SB_NDSDS_2014_FB6_gzList = data[2][8];
                WBJK_SB_NDSDS_2014_FB7_gzList = data[2][9];
                WBJK_SB_NDSDS_2014_FB8_gzList = data[2][10];
                WBJK_SB_NDSDS_2014_FB9_gzList = data[2][11];
                WBJK_SB_NDSDS_2014_FB10_gzList = data[2][12];
                WBJK_SB_NDSDS_2014_FB11_gzList = data[2][13];
                WBJK_SB_NDSDS_2014_FB12_gzList = data[2][14];
                WBJK_SB_NDSDS_2014_FB13_gzList = data[2][15];
                WBJK_SB_NDSDS_2014_FB14_gzList = data[2][16];
                WBJK_SB_NDSDS_2014_FB15_gzList = data[2][17];
                WBJK_SB_NDSDS_2014_FB16_gzList = data[2][18];
                WBJK_SB_NDSDS_2014_FB17_gzList = data[2][19];
                WBJK_SB_NDSDS_2014_FB18_gzList = data[2][20];
                WBJK_SB_NDSDS_2014_FB19_gzList = data[2][21];
                WBJK_SB_NDSDS_2014_FB20_gzList = data[2][22];
                WBJK_SB_NDSDS_2014_FB21_gzList = data[2][23];
                WBJK_SB_NDSDS_2014_FB22_gzList = data[2][24];
                WBJK_SB_NDSDS_2014_FB23_gzList = data[2][25];
                WBJK_SB_NDSDS_2014_FB24_gzList = data[2][26];
                WBJK_SB_NDSDS_2014_FB25_gzList = data[2][27];
                WBJK_SB_NDSDS_2014_FB26_gzList = data[2][28];
                WBJK_SB_NDSDS_2014_FB27_gzList = data[2][29];
                WBJK_SB_NDSDS_2014_FB28_gzList = data[2][30];
                WBJK_SB_NDSDS_2014_FB29_gzList = data[2][31];
                WBJK_SB_NDSDS_2014_FB30_gzList = data[2][32];
                WBJK_SB_NDSDS_2014_FB31_gzList = data[2][33];
                WBJK_SB_NDSDS_2014_FB32_gzList = data[2][34];
                WBJK_SB_NDSDS_2014_FB33_gzList = data[2][35];
                WBJK_SB_NDSDS_2014_FB34_gzList = data[2][36];
                WBJK_SB_NDSDS_2014_FB35_gzList = data[2][37];
                WBJK_SB_NDSDS_2014_FB36_gzList = data[2][38];
                WBJK_SB_NDSDS_2014_FB37_gzList = data[2][39];
                WBJK_SB_NDSDS_2014_FB38_gzList = data[2][40];
                WBJK_SB_NDSDS_2014_FB39_gzList = data[2][41];
                WBJK_SB_NDSDS_SKWGQYBGB_gzList = data[2][42];
                WBJK_SB_NDSDS_JJKCGJB_gzList = data[2][43];
            } else {
                window.top.alert('消息', data[1], 'warning');
            }
        }
        if (hznsqylb != "2") {//如果不是分支机构，弹出政策宣传内容
            showSdsZcXcNrWindow();
        }
        loadNdsdsABbTabs();
        window.top.showTbbzDiv();
    });
}

//根据表单编号加载标签、并重设当前标签名称
function loadTabsByBdxl(bdxlDm) {
    var tbbdTitle = "填报表单";
    var jcxxTitle = "基础信息";
    var zbTitle = "主表";
    var fb1Title = "附表一";
    var fb2Title = "附表二";
    var fb3Title = "附表三";
    var fb4Title = "附表四";
    var fb5Title = "附表五";
    var fb6Title = "附表六";
    //var fb7Title = "附表七";
    var fb8Title = "附表八";
    var fb9Title = "附表九";
    var fb10Title = "附表十";
    var fb11Title = "附表十一";
    var fb12Title = "附表十二";
    var fb13Title = "附表十三";
    var fb14Title = "附表十四";
    var fb15Title = "附表十五";
    var fb16Title = "附表十六";
    var fb17Title = "附表十七";
    var fb18Title = "附表十八";
    var fb19Title = "附表十九";
    var fb20Title = "附表二十";
    var fb21Title = "附表二十一";
    var fb22Title = "附表二十二";
    var fb23Title = "附表二十三";
    var fb24Title = "附表二十四";
    var fb25Title = "附表二十五";
    var fb26Title = "附表二十六";
    var fb27Title = "附表二十七";
    var fb28Title = "附表二十八";
    var fb29Title = "附表二十九";
    var fb30Title = "附表三十";
    var fb31Title = "附表三十一";
    var fb32Title = "附表三十二";
    var fb33Title = "附表三十三";
    var fb34Title = "附表三十四";
    var fb35Title = "附表三十五";
    var fb36Title = "附表三十六";
    var fb37Title = "附表三十七";
    var fb38Title = "附表三十八";
    var fb39Title = "附表三十九";
    var fb40Title = "受控外国企业";
    var fb41Title = "加计扣除归集表";
    if (tbqk.substring(0, 1) == '1') {
        tbbdTitle = "√填报表单";
    } if (tbqk.substring(1, 2) == '1') {
        jcxxTitle = "√基础信息";
    } if (tbqk.substring(2, 3) == '1') {
        zbTitle = "√主表";
    } if (tbqk.substring(3, 4) == '1') {
        fb1Title = "√附表一";
    } if (tbqk.substring(4, 5) == '1') {
        fb2Title = "√附表二";
    } if (tbqk.substring(5, 6) == '1') {
        fb3Title = "√附表三";
    } if (tbqk.substring(6, 7) == '1') {
        fb4Title = "√附表四";
    } if (tbqk.substring(7, 8) == '1') {
        fb5Title = "√附表五";
    } if (tbqk.substring(8, 9) == '1') {
        fb6Title = "√附表六";
    }
    //if(tbqk.substring(9,10)=='1'){
    //	fb7Title = "√附表七";
    //}
    if (tbqk.substring(10, 11) == '1') {
        fb8Title = "√附表八";
    } if (tbqk.substring(11, 12) == '1') {
        fb9Title = "√附表九";
    } if (tbqk.substring(12, 13) == '1') {
        fb10Title = "√附表十";
    } if (tbqk.substring(13, 14) == '1') {
        fb11Title = "√附表十一";
    } if (tbqk.substring(14, 15) == '1') {
        fb12Title = "√附表十二";
    } if (tbqk.substring(15, 16) == '1') {
        fb13Title = "√附表十三";
    } if (tbqk.substring(16, 17) == '1') {
        fb14Title = "√附表十四";
    } if (tbqk.substring(17, 18) == '1') {
        fb15Title = "√附表十五";
    } if (tbqk.substring(18, 19) == '1') {
        fb16Title = "√附表十六";
    } if (tbqk.substring(19, 20) == '1') {
        fb17Title = "√附表十七";
    } if (tbqk.substring(20, 21) == '1') {
        fb18Title = "√附表十八";
    } if (tbqk.substring(21, 22) == '1') {
        fb19Title = "√附表十九";
    } if (tbqk.substring(22, 23) == '1') {
        fb20Title = "√附表二十";
    } if (tbqk.substring(23, 24) == '1') {
        fb21Title = "√附表二十一";
    } if (tbqk.substring(24, 25) == '1') {
        fb22Title = "√附表二十二";
    } if (tbqk.substring(25, 26) == '1') {
        fb23Title = "√附表二十三";
    } if (tbqk.substring(26, 27) == '1') {
        fb24Title = "√附表二十四";
    } if (tbqk.substring(27, 28) == '1') {
        fb25Title = "√附表二十五";
    } if (tbqk.substring(28, 29) == '1') {
        fb26Title = "√附表二十六";
    } if (tbqk.substring(29, 30) == '1') {
        fb27Title = "√附表二十七";
    } if (tbqk.substring(30, 31) == '1') {
        fb28Title = "√附表二十八";
    } if (tbqk.substring(31, 32) == '1') {
        fb29Title = "√附表二十九";
    } if (tbqk.substring(32, 33) == '1') {
        fb30Title = "√附表三十";
    } if (tbqk.substring(33, 34) == '1') {
        fb31Title = "√附表三十一";
    } if (tbqk.substring(34, 35) == '1') {
        fb32Title = "√附表三十二";
    } if (tbqk.substring(35, 36) == '1') {
        fb33Title = "√附表三十三";
    } if (tbqk.substring(36, 37) == '1') {
        fb34Title = "√附表三十四";
    } if (tbqk.substring(37, 38) == '1') {
        fb35Title = "√附表三十五";
    } if (tbqk.substring(38, 39) == '1') {
        fb36Title = "√附表三十六";
    } if (tbqk.substring(39, 40) == '1') {
        fb37Title = "√附表三十七";
    } if (tbqk.substring(40, 41) == '1') {
        fb38Title = "√附表三十八";
    } if (tbqk.substring(41, 42) == '1') {
        fb39Title = "√附表三十九";
    } if (tbqk.substring(42, 43) == '1') {
        fb40Title = "√受控外国企业";
    } if (tbqk.substring(46, 47) == '1') {
        fb41Title = "√加计扣除归集表";
    }

    if (tbqk.substring(0, 1) == '0') {
        tbbdTitle = "填报表单";
    } if (tbqk.substring(1, 2) == '0') {
        jcxxTitle = "基础信息";
    } if (tbqk.substring(2, 3) == '0') {
        zbTitle = "主表";
    } if (tbqk.substring(3, 4) == '0') {
        fb1Title = "附表一";
    } if (tbqk.substring(4, 5) == '0') {
        fb2Title = "附表二";
    } if (tbqk.substring(5, 6) == '0') {
        fb3Title = "附表三";
    } if (tbqk.substring(6, 7) == '0') {
        fb4Title = "附表四";
    } if (tbqk.substring(7, 8) == '0') {
        fb5Title = "附表五";
    } if (tbqk.substring(8, 9) == '0') {
        fb6Title = "附表六";
    }
    //if(tbqk.substring(9,10)=='0'){
    //	fb7Title = "附表七";
    //}
    if (tbqk.substring(10, 11) == '0') {
        fb8Title = "附表八";
    } if (tbqk.substring(11, 12) == '0') {
        fb9Title = "附表九";
    } if (tbqk.substring(12, 13) == '0') {
        fb10Title = "附表十";
    } if (tbqk.substring(13, 14) == '0') {
        fb11Title = "附表十一";
    } if (tbqk.substring(14, 15) == '0') {
        fb12Title = "附表十二";
    } if (tbqk.substring(15, 16) == '0') {
        fb13Title = "附表十三";
    } if (tbqk.substring(16, 17) == '0') {
        fb14Title = "附表十四";
    } if (tbqk.substring(17, 18) == '0') {
        fb15Title = "附表十五";
    } if (tbqk.substring(18, 19) == '0') {
        fb16Title = "附表十六";
    } if (tbqk.substring(19, 20) == '0') {
        fb17Title = "附表十七";
    } if (tbqk.substring(20, 21) == '0') {
        fb18Title = "附表十八";
    } if (tbqk.substring(21, 22) == '0') {
        fb19Title = "附表十九";
    } if (tbqk.substring(22, 23) == '0') {
        fb20Title = "附表二十";
    } if (tbqk.substring(23, 24) == '0') {
        fb21Title = "附表二十一";
    } if (tbqk.substring(24, 25) == '0') {
        fb22Title = "附表二十二";
    } if (tbqk.substring(25, 26) == '0') {
        fb23Title = "附表二十三";
    } if (tbqk.substring(26, 27) == '0') {
        fb24Title = "附表二十四";
    } if (tbqk.substring(27, 28) == '0') {
        fb25Title = "附表二十五";
    } if (tbqk.substring(28, 29) == '0') {
        fb26Title = "附表二十六";
    } if (tbqk.substring(29, 30) == '0') {
        fb27Title = "附表二十七";
    } if (tbqk.substring(30, 31) == '0') {
        fb28Title = "附表二十八";
    } if (tbqk.substring(31, 32) == '0') {
        fb29Title = "附表二十九";
    } if (tbqk.substring(32, 33) == '0') {
        fb30Title = "附表三十";
    } if (tbqk.substring(33, 34) == '0') {
        fb31Title = "附表三十一";
    } if (tbqk.substring(34, 35) == '0') {
        fb32Title = "附表三十二";
    } if (tbqk.substring(35, 36) == '0') {
        fb33Title = "附表三十三";
    } if (tbqk.substring(36, 37) == '0') {
        fb34Title = "附表三十四";
    } if (tbqk.substring(37, 38) == '0') {
        fb35Title = "附表三十五";
    } if (tbqk.substring(38, 39) == '0') {
        fb36Title = "附表三十六";
    } if (tbqk.substring(39, 40) == '0') {
        fb37Title = "附表三十七";
    } if (tbqk.substring(40, 41) == '0') {
        fb38Title = "附表三十八";
    } if (tbqk.substring(41, 42) == '0') {
        fb39Title = "附表三十九";
    } if (tbqk.substring(42, 43) == '0') {
        fb40Title = "受控外国企业";
    } if (tbqk.substring(46, 47) == '0') {
        fb41Title = "加计扣除归集表";
    }
    if (bdxlDm == "A101010") {	//附表一
        addTab(fb1Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb1.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb1Title;
    } else if (bdxlDm == "A101020") {	//附表二
        addTab(fb2Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb2.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb2Title;
    } else if (bdxlDm == "A102010") {	//附表三
        addTab(fb3Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb3.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb3Title;
    } else if (bdxlDm == "A102020") {	//附表四
        addTab(fb4Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb4.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb4Title;
    } else if (bdxlDm == "A103000") {	//附表五
        addTab(fb5Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb5.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb5Title;
    } else if (bdxlDm == "A104000") {	//附表六
        addTab(fb6Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb6.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb6Title;
    }
        //else if(bdxlDm=="A105000"){	//附表七
        //	addTab(fb7Title,"/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb7.raq&nsrsbh="+nsrsbh+"&sbzt="+sbzt+"&skssq="+skssq+"&ssqq="+ssqq+"&ssqz="+ssqz+"&isTbBz=0",false);
        //	crrFbTitle = fb7Title;
        //}
    else if (bdxlDm == "A105010") {	//附表八
        addTab(fb8Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb8.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb8Title;
    } else if (bdxlDm == "A105020") {	//附表九
        addTab(fb9Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb9.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb9Title;
    } else if (bdxlDm == "A105030") {	//附表十
        addTab(fb10Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb10.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb10Title;
    } else if (bdxlDm == "A105040") {	//附表十一
        addTab(fb11Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb11.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb11Title;
    } else if (bdxlDm == "A105050") {	//附表十二
        addTab(fb12Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb12.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb12Title;
    } else if (bdxlDm == "A105060") {	//附表十三
        addTab(fb13Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb13.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb13Title;
    } else if (bdxlDm == "A105070") {	//附表十四
        addTab(fb14Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb14.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb14Title;
    } else if (bdxlDm == "A105080") {	//附表十五
        addTab(fb15Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb15.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb15Title;
    } else if (bdxlDm == "A105081") {	//附表十六
        addTab(fb16Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb16.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb16Title;
    } else if (bdxlDm == "A105090") {	//附表十七
        addTab(fb17Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb17.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb17Title;
    } else if (bdxlDm == "A105091") {	//附表十八
        addTab(fb18Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb18.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb18Title;
    } else if (bdxlDm == "A105100") {	//附表十九
        addTab(fb19Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb19.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb19Title;
    } else if (bdxlDm == "A105110") {	//附表二十
        addTab(fb20Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb20.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb20Title;
    } else if (bdxlDm == "A105120") {	//附表二十一
        addTab(fb21Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb21.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb21Title;
    } else if (bdxlDm == "A106000") {	//附表二十二
        addTab(fb22Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb22.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb22Title;
    } else if (bdxlDm == "A107010") {	//附表二十三
        addTab(fb23Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb23.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb23Title;
    } else if (bdxlDm == "A107011") {	//附表二十四
        addTab(fb24Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb24.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb24Title;
    } else if (bdxlDm == "A107012") {	//附表二十五
        addTab(fb25Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb25.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb25Title;
    } else if (bdxlDm == "A107013") {	//附表二十六
        addTab(fb26Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb26.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb26Title;
    } else if (bdxlDm == "A107014") {	//附表二十七
        addTab(fb27Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb27.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb27Title;
    } else if (bdxlDm == "A107020") {	//附表二十八
        addTab(fb28Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb28.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb28Title;
    } else if (bdxlDm == "A107030") {	//附表二十九
        addTab(fb29Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb29.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb29Title;
    } else if (bdxlDm == "A107040") {	//附表三十
        addTab(fb30Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb30.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb30Title;
    } else if (bdxlDm == "A107041") {	//附表三十一
        addTab(fb31Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb31.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb31Title;
    } else if (bdxlDm == "A107042") {	//附表三十二
        addTab(fb32Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb32.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb32Title;
    } else if (bdxlDm == "A107050") {	//附表三十三
        addTab(fb33Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb33.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb33Title;
    } else if (bdxlDm == "A108000") {	//附表三十四
        addTab(fb34Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb34.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb34Title;
    } else if (bdxlDm == "A108010") {	//附表三十五
        addTab(fb35Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb35.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb35Title;
    } else if (bdxlDm == "A108020") {	//附表三十六
        addTab(fb36Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb36.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb36Title;
    } else if (bdxlDm == "A108030") {	//附表三十七
        addTab(fb37Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb37.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb37Title;
    } else if (bdxlDm == "A109000") {	//附表三十八
        addTab(fb38Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb38.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb38Title;
    } else if (bdxlDm == "A109010") {	//附表三十九
        addTab(fb39Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb39.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb39Title;
    } else if (bdxlDm == "SKWGQY") {	    //受控外国企业
        addTab(fb40Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/skwgqybgb.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb40Title;
    } else if (bdxlDm == "JJKCGJB") {	//加计扣除归集表
        addTab(fb41Title, "/WSSBSL/reportJsp/showReport.jsp?raq=/ndsdsA/jjkcgjb.raq&nsrsbh=" + nsrsbh + "&sbzt=" + sbzt + "&skssq=" + skssq + "&ssqq=" + ssqq + "&ssqz=" + ssqz + "&isTbBz=0", false);
        crrFbTitle = fb41Title;
    }
}

//弹出政策风险提示扫描信息
function showZcfxtssmxxWindow() {
    var buttons = [{
        text: '按风险提示信息修改申报表',
        iconCls: 'icon-cancel',
        handler: function () {
            window.top.closeEasyDialog();
        }
    }, {
        text: '继续提交申报',
        iconCls: 'icon-redo',
        handler: function () {
            submitTableData();
        }
    }];
    window.top.showEasyDialog("/WSSBSL/show_ndsdsA_zcfxtssm.action", {
        title: '政策风险提示信息',	//标题
        width: 650,								//宽度
        height: 360,								//高度
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

//政策风险提示扫描（按钮）
function zcfxtssmSub(xhid) {
    //扫描前检查主要报表是否完整
    if (sbzt == "0" || sbzt == "2") {
        if (getTab('√基础信息') && getTab('√填报表单') && getTab('√主表') && getTab('√附表七')) {
            currOprate = 1;
            window.top.closeEasyDialog();
            if (sbxh && sbxh.length > 0) {
                window.top.progress("正在扫描", "正在扫描......");
                $.postJSON("/WSSBSL/do_ndsdsa_NdsdsA_zcfxtssmNdsdsACL.action", {
                    "sbxh": sbxh,
                    "tbqk": tbqk,
                    "xhid": xhid,
                    "tjfs": "1"
                }, function (data, textStatus) {
                    window.top.closeProgress();
                    if (data && data.length > 0) {
                        if (data[0] == "Y") {
                            tsxxList = data[1];
                            showTsxxListWindow();//直接弹出扫描信息
                        }
                        else {
                            tsxxList = data[1];
                            showTsxxListWindow();//直接弹出扫描信息
                        }
                    }
                    else {
                        window.top.alert('错误', '网络通迅异常，扫描失败！', 'error');
                    }
                });
            }
            else {
                window.top.alert('提示', '您的报表尚未填写，不能扫描！', 'warning');
            }
        } else {
            if (getTab('基础信息')) { window.top.alert('提示', '您尚未保存基础信息，不能扫描！', 'warning'); return; }
            if (getTab('填报表单')) { window.top.alert('提示', '您尚未保存填报表单数据，不能扫描！', 'warning'); return; }
            if (getTab('主表')) { window.top.alert('提示', '您尚未保存主表数据，不能扫描！', 'warning'); return; }
            if (getTab('附表七')) { window.top.alert('提示', '您尚未保存附表七数据，不能扫描！', 'warning'); return; }
        }
    } else if (sbzt == "1") {
        window.top.alert('消息', "当前属期（" + skssq + "）报表您已申报，不能扫描。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不能扫描。", 'warning');
    }
}

//政策风险提示扫描（提交申报）
function submitTableDataZcfxtssm(xhid) {
    //扫描前检查主要报表是否完整
    if (sbzt == "0" || sbzt == "2") {
        if (getTab('√基础信息') && getTab('√填报表单') && getTab('√主表') && getTab('√附表七')) {
            currOprate = 1;
            window.top.closeEasyDialog();
            if (sbxh && sbxh.length > 0) {
                window.top.progress("正在扫描", "正在扫描......");
                $.postJSON("/WSSBSL/do_ndsdsa_NdsdsA_zcfxtssmNdsdsACL.action", {
                    "sbxh": sbxh,
                    "tbqk": tbqk,
                    "xhid": xhid,
                    "tjfs": "2"
                }, function (data, textStatus) {
                    window.top.closeProgress();
                    if (data && data.length > 0) {
                        if (data[0] == "Y") {
                            tsxxList = data[1];
                            showZcfxtssmxxWindow();//弹出信息窗，纳税人选择继续申报或取消申报
                        }
                        else {
                            tsxxList = data[1];
                            showTsxxListWindow();//弹出信息窗
                        }
                    }
                    else {
                        window.top.alert('错误', '网络通迅异常，扫描失败！', 'error');
                    }
                });
            }
            else {
                window.top.alert('提示', '您的报表尚未填写，不能扫描！', 'warning');
            }
        } else {
            if (getTab('基础信息')) { window.top.alert('提示', '您尚未保存基础信息，不能扫描！', 'warning'); return; }
            if (getTab('填报表单')) { window.top.alert('提示', '您尚未保存填报表单数据，不能扫描！', 'warning'); return; }
            if (getTab('主表')) { window.top.alert('提示', '您尚未保存主表数据，不能扫描！', 'warning'); return; }
            if (getTab('附表七')) { window.top.alert('提示', '您尚未保存附表七数据，不能扫描！', 'warning'); return; }
        }
    } else if (sbzt == "1") {
        window.top.alert('消息', "当前属期（" + skssq + "）报表您已申报，不能扫描。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不能扫描。", 'warning');
    }
}

//提交申报
function submitTableData(xhid) {
    //申报前检查主要报表是否完整
    if (sbzt == "0" || sbzt == "2") {
        if (getTab('√基础信息')) {
            currOprate = 1;
            window.top.closeEasyDialog();
            if (sbxh && sbxh.length > 0) {
                window.top.progress("正在申报", "正在提交申报......");
                $.postJSON("/WSSBSL/do_ndsdsa_NdsdsA_submitNdsdsA.action", {
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
                                        window.top.addTab("税款缴纳-当期未缴税款", "/WSSBSL/show_skjn_dqwjsk.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
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
            if (getTab('基础信息')) {
                window.top.alert('提示', '您尚未保存基础信息，不能提交申报！', 'warning');
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
        maximizable: true,						//是否显示最大化按钮
        loadingMessage: null,					//窗口内容加载时显示信息
        toolbar: null,							//窗口工具条
        buttons: null,							//底部按钮
        doSize: true,							//面板创建的时候将被调整和重新布局
        resizable: true							//对话框是否可编辑大小
    });
}


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
        if (title == "主表") {
            window.top.alert('提示', '您尚未生成主表，不能保存主表！', 'warning');
        } else if (title == "封面") {
            window.top.alert('提示', '封面不需要保存！', 'warning');
        } else {
            if (title == "√填报表单") {
                window.top.confirm("提示", "修改《填报表单》会把选择为“不填报”的数据删除，确认要现在修改《填报表单》吗？！", function (result) {
                    if (result) {
                        window.top.progress("正在保存", "数据正在保存......");
                        doCurrTabFun("submit()");
                        closeTab(crrFbTitle);//关闭原有附表标签
                    }
                });
            } else {
                if (title == "填报表单" || title == "√填报表单") {
                    var tbbdBblsh = getTheTabVar("√基础信息", "bblsh");
                    if (tbbdBblsh != null && tbbdBblsh.length > 0) {
                        window.top.progress("正在保存", "数据正在保存......");
                        doCurrTabFun("submit()");
                    } else {
                        window.top.alert('消息', "您尚未保存《基础信息》，不能填报表单！", 'warning');
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
        if (title.substring(0, 1) == "√") {
            if (title == "√填报表单") {
                if (getTab('√主表')) {
                    window.top.alert('消息', "请先删除《主表》，然后才能删除《填报表单》。", 'warning');
                    return;
                }
                if (getTab('√附表七')) {
                    window.top.alert('消息', "请先删除《附表七》，然后才能删除《填报表单》。", 'warning');
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
    } else if (sbzt == "1") {
        window.top.alert('消息', "该属期（" + skssq + "）报表您已申报，不能删除报表数据，如需修改申报表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不要删除报表数据。", 'warning');
    }
}

//删除报表
function delReport(bblsh, params) {
    $.postJSON("/WSSBSL/do_ndsdsa_NdsdsA_delete.action",
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

//生成主表
function createZbData() {
    if (sbzt == "0" || sbzt == "2") {
        var message = "";
        if (tbqk.substring(0, 1) == "0") {
            if (makeZBing == false) {
                window.top.alert('提示', '您尚未保存“填报表单”，不能生成主表！', 'warning');
            }
        } else if (tbqk.substring(1, 2) == "0") {
            if (makeZBing == false) {
                window.top.alert('提示', '您尚未保存“基础信息表”，不能生成主表！', 'warning');
            }
        } else if (tbqk.substring(9, 10) == "0") {
            if (makeZBing == false) {
                window.top.alert('提示', '您尚未保存“附表七”，不能生成主表！', 'warning');
            }
        } else {
            createZb();
        }
    } else if (sbzt == "1") {
        window.top.alert('消息', "该属期（" + skssq + "）报表您已申报，不能修改报表数据，如需修改申报表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不要修改报表数据。", 'warning');
    }
}

//生成附表七（纳税调整表）
function createFb7Data() {
    if (sbzt == "0" || sbzt == "2") {
        var message = "";
        if (tbqk.substring(0, 1) == "0") {
            if (makeFb7ing == false) {
                window.top.alert('提示', '您尚未保存“填报表单”，不能生成附表七！', 'warning');
            }
        } else if (tbqk.substring(1, 2) == "0") {
            if (makeFb7ing == false) {
                window.top.alert('提示', '您尚未保存“基础信息表”，不能生成附表七！', 'warning');
            }
        } else {
            createFb7();
        }
    } else if (sbzt == "1") {
        window.top.alert('消息', "该属期（" + skssq + "）报表您已申报，不能修改报表数据，如需修改申报表请到办税服务厅办理。", 'warning');
    } else if (sbzt == "3") {
        window.top.alert('消息', "您的申报操作正在处理，请耐心等待结果，不要修改报表数据。", 'warning');
    }
}

function createZb() {
    window.top.confirm("提示", "自动为您从其它附表向主表填数，但主表的部分数据仍需手工填写并保存，确认要现在生成主表吗？！", function (result) {
        if (result) {
            if (getTab('主表')) {
                makeZBing = true;
                selectTab("主表");
                //调用后台存储过程，执行生成主表
                window.top.progress("正在生成主表", "正在生成主表数据......");
                $.postJSON("/WSSBSL/do_ndsdsa_NdsdsA_createZbData.action", { "sbxh": sbxh, "ssqq": ssqq, "ssqz": ssqz },
					function (data, textStatus) {
					    window.top.closeProgress();
					    if (data && data.length > 0) {
					        if (data[0] == "Y") {
					            window.top.alert('消息', data[1], 'info', function () {
					                reloadTab();//刷新主表
					                afterCreateBbData();
					            });
					        } else {
					            window.top.alert('消息', data[1], 'warning');
					        }
					    }
					});
            } else if (getTab('√主表')) {
                selectTab("√主表");
                //调用后台存储过程，执行生成主表
                window.top.progress("正在生成主表", "正在生成主表数据......");
                $.postJSON("/WSSBSL/do_ndsdsa_NdsdsA_createZbData.action", { "sbxh": sbxh, "ssqq": ssqq, "ssqz": ssqz },
					function (data, textStatus) {
					    window.top.closeProgress();
					    if (data && data.length > 0) {
					        if (data[0] == "Y") {
					            window.top.alert('消息', data[1], 'info', function () {
					                reloadTab();//刷新主表
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

function createFb7() {
    window.top.confirm("提示", "自动为您从其它附表向附表七填数，但附表7的部分数据仍需手工填写并保存，确认要现在生成附表七吗？！", function (result) {
        if (result) {
            if (getTab('附表七')) {
                makeFb7ing = true;
                selectTab("附表七");
                //调用后台存储过程，执行生成附表七
                window.top.progress("正在生成附表七", "正在生成附表七数据......");
                $.postJSON("/WSSBSL/do_ndsdsa_NdsdsA_createFb7Data.action", { "sbxh": sbxh, "ssqq": ssqq, "ssqz": ssqz },
					function (data, textStatus) {
					    window.top.closeProgress();
					    if (data && data.length > 0) {
					        if (data[0] == "Y") {
					            window.top.alert('消息', data[1], 'info', function () {
					                reloadTab();//刷新附表七
					                afterCreateBbData();
					            });
					        } else {
					            window.top.alert('消息', data[1], 'warning');
					        }
					    }
					});
            } else if (getTab('√附表七')) {
                selectTab("√附表七");
                //调用后台存储过程，执行生成附表七
                window.top.progress("正在生成附表七", "正在生成附表七数据......");
                $.postJSON("/WSSBSL/do_ndsdsa_NdsdsA_createFb7Data.action", { "sbxh": sbxh, "ssqq": ssqq, "ssqz": ssqz },
					function (data, textStatus) {
					    window.top.closeProgress();
					    if (data && data.length > 0) {
					        if (data[0] == "Y") {
					            window.top.alert('消息', data[1], 'info', function () {
					                reloadTab();//刷新附表七
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


//保存后回调方法
function afterSave(bbmc) {
    $.postJSON("/WSSBSL/do_ndsdsa_NdsdsA_updateTbxx.action",
		{ "pzzlDm": "BDA0610688", "skssq": skssq },
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
		            makeFb7ing = false;
		            if (bbmc == "WBJK_SB_NDSDS_2014_JCXX" || bbmc == "WBJK_SB_NDSDS_2014") {
		                calcXxwlqyJmse();
		            }
		        }
		    }
		}
	);
}

//删除后调用
function afterDelete() {
    $.postJSON("/WSSBSL/do_ndsdsa_NdsdsA_updateTbxx.action",
		{ "pzzlDm": "BDA0610688", "skssq": skssq },
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

//生成报表数据后调用
function afterCreateBbData() {
    $.postJSON("/WSSBSL/do_ndsdsa_NdsdsA_updateTbxx.action",
		{ "pzzlDm": "BDA0610688", "skssq": skssq },
		function (data, textStatus) {
		    if (data && data.length > 0) {
		        if (data[0] == "Y") {
		            if (data[1]) {
		                tbqk = data[1];
		            }
		            updateTabTitle();
		            calcXxwlqyJmse();
		        }
		    }
		}
	);
}

//提示纳税人进行小型微利优惠自动计算
function calcXxwlqyJmse() {
    if (getTab('√主表') && getTab('√基础信息') && getTab('√填报表单')) {
        window.top.confirm("提示", "是否自动计算生成附表A107040《减免所得税优惠明细表》第1行、第2行的小型微利企业优惠税额？", function (result) {
            if (result) {
                //调用后台程序，执行计算并赋值
                window.top.progress("正在计算", "正在计算小型微利企业优惠减免数据......");
                $.postJSON("/WSSBSL/do_ndsdsa_NdsdsA_calcXxwlqyJmse.action", function (data, textStatus) {
                    window.top.closeProgress();
                    if (data && data.length > 0) {
                        if (data[0] == "Y") {
                            window.top.alert('消息', data[1], 'info', function () {
                                //如果此时显示有附表三十的标签
                                if (getTab('附表三十') || getTab('√附表三十')) {
                                    if (getTab('附表三十')) {
                                        selectTab("附表三十");
                                    } else if (getTab('√附表三十')) {
                                        selectTab("√附表三十");
                                    }
                                    reloadTab();//刷新报表
                                }
                                //刷新标签
                                $.postJSON("/WSSBSL/do_ndsdsa_NdsdsA_updateTbxx.action",
									{ "pzzlDm": "BDA0610688", "skssq": skssq },
									function (data, textStatus) {
									    if (data && data.length > 0) {
									        if (data[0] == "Y") {
									            if (data[1]) {
									                tbqk = data[1];
									            }
									            updateTabTitle();
									        }
									    }
									}
								);

                            });
                        } else {
                            window.top.alert('消息', data[1], 'warning');
                        }
                    }
                });
            }
        });
    }
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
    //设置打钩
    if (title == "填报表单") {
        if (tbqk.substring(0, 1) == "1") {
            var newTitle = "√填报表单";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "基础信息") {
        if (tbqk.substring(1, 2) == "1") {
            var newTitle = "√基础信息";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "主表") {
        if (tbqk.substring(2, 3) == "1") {
            var newTitle = "√主表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表一") {
        if (tbqk.substring(3, 4) == "1") {
            var newTitle = "√附表一";
            crrFbTitle = "√附表一";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表二") {
        if (tbqk.substring(4, 5) == "1") {
            var newTitle = "√附表二";
            crrFbTitle = "√附表二";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表三") {
        if (tbqk.substring(5, 6) == "1") {
            var newTitle = "√附表三";
            crrFbTitle = "√附表三";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表四") {
        if (tbqk.substring(6, 7) == "1") {
            var newTitle = "√附表四";
            crrFbTitle = "√附表四";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表五") {
        if (tbqk.substring(7, 8) == "1") {
            var newTitle = "√附表五";
            crrFbTitle = "√附表五";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表六") {
        if (tbqk.substring(8, 9) == "1") {
            var newTitle = "√附表六";
            crrFbTitle = "√附表六";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表七") {
        if (tbqk.substring(9, 10) == "1") {
            var newTitle = "√附表七";
            //crrFbTitle = "√附表七";  因为附表七总是显示，所以这里不能设置
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表八") {
        if (tbqk.substring(10, 11) == "1") {
            var newTitle = "√附表八";
            crrFbTitle = "√附表八";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表九") {
        if (tbqk.substring(11, 12) == "1") {
            var newTitle = "√附表九";
            crrFbTitle = "√附表九";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表十") {
        if (tbqk.substring(12, 13) == "1") {
            var newTitle = "√附表十";
            crrFbTitle = "√附表十";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表十一") {
        if (tbqk.substring(13, 14) == "1") {
            var newTitle = "√附表十一";
            crrFbTitle = "√附表十一";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表十二") {
        if (tbqk.substring(14, 15) == "1") {
            var newTitle = "√附表十二";
            crrFbTitle = "√附表十二";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表十三") {
        if (tbqk.substring(15, 16) == "1") {
            var newTitle = "√附表十三";
            crrFbTitle = "√附表十三";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表十四") {
        if (tbqk.substring(16, 17) == "1") {
            var newTitle = "√附表十四";
            crrFbTitle = "√附表十四";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表十五") {
        if (tbqk.substring(17, 18) == "1") {
            var newTitle = "√附表十五";
            crrFbTitle = "√附表十五";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表十六") {
        if (tbqk.substring(18, 19) == "1") {
            var newTitle = "√附表十六";
            crrFbTitle = "√附表十六";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表十七") {
        if (tbqk.substring(19, 20) == "1") {
            var newTitle = "√附表十七";
            crrFbTitle = "√附表十七";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表十八") {
        if (tbqk.substring(20, 21) == "1") {
            var newTitle = "√附表十八";
            crrFbTitle = "√附表十八";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表十九") {
        if (tbqk.substring(21, 22) == "1") {
            var newTitle = "√附表十九";
            crrFbTitle = "√附表十九";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表二十") {
        if (tbqk.substring(22, 23) == "1") {
            var newTitle = "√附表二十";
            crrFbTitle = "√附表二十";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表二十一") {
        if (tbqk.substring(23, 24) == "1") {
            var newTitle = "√附表二十一";
            crrFbTitle = "√附表二十一";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表二十二") {
        if (tbqk.substring(24, 25) == "1") {
            var newTitle = "√附表二十二";
            crrFbTitle = "√附表二十二";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表二十三") {
        if (tbqk.substring(25, 26) == "1") {
            var newTitle = "√附表二十三";
            crrFbTitle = "√附表二十三";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表二十四") {
        if (tbqk.substring(26, 27) == "1") {
            var newTitle = "√附表二十四";
            crrFbTitle = "√附表二十四";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表二十五") {
        if (tbqk.substring(27, 28) == "1") {
            var newTitle = "√附表二十五";
            crrFbTitle = "√附表二十五";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表二十六") {
        if (tbqk.substring(28, 29) == "1") {
            var newTitle = "√附表二十六";
            crrFbTitle = "√附表二十六";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表二十七") {
        if (tbqk.substring(29, 30) == "1") {
            var newTitle = "√附表二十七";
            crrFbTitle = "√附表二十七";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表二十八") {
        if (tbqk.substring(30, 31) == "1") {
            var newTitle = "√附表二十八";
            crrFbTitle = "√附表二十八";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表二十九") {
        if (tbqk.substring(31, 32) == "1") {
            var newTitle = "√附表二十九";
            crrFbTitle = "√附表二十九";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表三十") {
        if (tbqk.substring(32, 33) == "1") {
            var newTitle = "√附表三十";
            crrFbTitle = "√附表三十";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表三十一") {
        if (tbqk.substring(33, 34) == "1") {
            var newTitle = "√附表三十一";
            crrFbTitle = "√附表三十一";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表三十二") {
        if (tbqk.substring(34, 35) == "1") {
            var newTitle = "√附表三十二";
            crrFbTitle = "√附表三十二";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表三十三") {
        if (tbqk.substring(35, 36) == "1") {
            var newTitle = "√附表三十三";
            crrFbTitle = "√附表三十三";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表三十四") {
        if (tbqk.substring(36, 37) == "1") {
            var newTitle = "√附表三十四";
            crrFbTitle = "√附表三十四";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表三十五") {
        if (tbqk.substring(37, 38) == "1") {
            var newTitle = "√附表三十五";
            crrFbTitle = "√附表三十五";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表三十六") {
        if (tbqk.substring(38, 39) == "1") {
            var newTitle = "√附表三十六";
            crrFbTitle = "√附表三十六";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表三十七") {
        if (tbqk.substring(39, 40) == "1") {
            var newTitle = "√附表三十七";
            crrFbTitle = "√附表三十七";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表三十八") {
        if (tbqk.substring(40, 41) == "1") {
            var newTitle = "√附表三十八";
            crrFbTitle = "√附表三十八";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "附表三十九") {
        if (tbqk.substring(41, 42) == "1") {
            var newTitle = "√附表三十九";
            crrFbTitle = "√附表三十九";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "受控外国企业") {
        if (tbqk.substring(42, 43) == "1") {
            var newTitle = "√受控外国企业";
            crrFbTitle = "√受控外国企业";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "加计扣除归集表") {
        if (tbqk.substring(46, 47) == "1") {
            var newTitle = "√加计扣除归集表";
            crrFbTitle = "√加计扣除归集表";
            updateTitle(title, newTitle, options);
        }
    }
        //去除打钩
    else if (title == "√填报表单") {
        if (tbqk.substring(0, 1) == "0") {
            var newTitle = "填报表单";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√基础信息") {
        if (tbqk.substring(1, 2) == "0") {
            var newTitle = "基础信息";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√主表") {
        if (tbqk.substring(2, 3) == "0") {
            var newTitle = "主表";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表一") {
        if (tbqk.substring(3, 4) == "0") {
            var newTitle = "附表一";
            crrFbTitle = "附表一";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表二") {
        if (tbqk.substring(4, 5) == "0") {
            var newTitle = "附表二";
            crrFbTitle = "附表二";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表三") {
        if (tbqk.substring(5, 6) == "0") {
            var newTitle = "附表三";
            crrFbTitle = "附表三";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表四") {
        if (tbqk.substring(6, 7) == "0") {
            var newTitle = "附表四";
            crrFbTitle = "附表四";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表五") {
        if (tbqk.substring(7, 8) == "0") {
            var newTitle = "附表五";
            crrFbTitle = "附表五";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表六") {
        if (tbqk.substring(8, 9) == "0") {
            var newTitle = "附表六";
            crrFbTitle = "附表六";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表七") {
        if (tbqk.substring(9, 10) == "0") {
            var newTitle = "附表七";
            //crrFbTitle = "附表七"; 因为附表七总是显示，所以不能设置这个值
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表八") {
        if (tbqk.substring(10, 11) == "0") {
            var newTitle = "附表八";
            crrFbTitle = "附表八";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表九") {
        if (tbqk.substring(11, 12) == "0") {
            var newTitle = "附表九";
            crrFbTitle = "附表九";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表十") {
        if (tbqk.substring(12, 13) == "0") {
            var newTitle = "附表十";
            crrFbTitle = "附表十";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表十一") {
        if (tbqk.substring(13, 14) == "0") {
            var newTitle = "附表十一";
            crrFbTitle = "附表十一";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表十二") {
        if (tbqk.substring(14, 15) == "0") {
            var newTitle = "附表十二";
            crrFbTitle = "附表十二";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表十三") {
        if (tbqk.substring(15, 16) == "0") {
            var newTitle = "附表十三";
            crrFbTitle = "附表十三";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表十四") {
        if (tbqk.substring(16, 17) == "0") {
            var newTitle = "附表十四";
            crrFbTitle = "附表十四";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表十五") {
        if (tbqk.substring(17, 18) == "0") {
            var newTitle = "附表十五";
            crrFbTitle = "附表十五";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表十六") {
        if (tbqk.substring(18, 19) == "0") {
            var newTitle = "附表十六";
            crrFbTitle = "附表十六";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表十七") {
        if (tbqk.substring(19, 20) == "0") {
            var newTitle = "附表十七";
            crrFbTitle = "附表十七";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表十八") {
        if (tbqk.substring(20, 21) == "0") {
            var newTitle = "附表十八";
            crrFbTitle = "附表十八";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表十九") {
        if (tbqk.substring(21, 22) == "0") {
            var newTitle = "附表十九";
            crrFbTitle = "附表十九";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表二十") {
        if (tbqk.substring(22, 23) == "0") {
            var newTitle = "附表二十";
            crrFbTitle = "附表二十";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表二十一") {
        if (tbqk.substring(23, 24) == "0") {
            var newTitle = "附表二十一";
            crrFbTitle = "附表二十一";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表二十二") {
        if (tbqk.substring(24, 25) == "0") {
            var newTitle = "附表二十二";
            crrFbTitle = "附表二十二";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表二十三") {
        if (tbqk.substring(25, 26) == "0") {
            var newTitle = "附表二十三";
            crrFbTitle = "附表二十三";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表二十四") {
        if (tbqk.substring(26, 27) == "0") {
            var newTitle = "附表二十四";
            crrFbTitle = "附表二十四";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表二十五") {
        if (tbqk.substring(27, 28) == "0") {
            var newTitle = "附表二十五";
            crrFbTitle = "附表二十五";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表二十六") {
        if (tbqk.substring(28, 29) == "0") {
            var newTitle = "附表二十六";
            crrFbTitle = "附表二十六";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表二十七") {
        if (tbqk.substring(29, 30) == "0") {
            var newTitle = "附表二十七";
            crrFbTitle = "附表二十七";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表二十八") {
        if (tbqk.substring(30, 31) == "0") {
            var newTitle = "附表二十八";
            crrFbTitle = "附表二十八";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表二十九") {
        if (tbqk.substring(31, 32) == "0") {
            var newTitle = "附表二十九";
            crrFbTitle = "附表二十九";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表三十") {
        if (tbqk.substring(32, 33) == "0") {
            var newTitle = "附表三十";
            crrFbTitle = "附表三十";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表三十一") {
        if (tbqk.substring(33, 34) == "0") {
            var newTitle = "附表三十一";
            crrFbTitle = "附表三十一";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表三十二") {
        if (tbqk.substring(34, 35) == "0") {
            var newTitle = "附表三十二";
            crrFbTitle = "附表三十二";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表三十三") {
        if (tbqk.substring(35, 36) == "0") {
            var newTitle = "附表三十三";
            crrFbTitle = "附表三十三";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表三十四") {
        if (tbqk.substring(36, 37) == "0") {
            var newTitle = "附表三十四";
            crrFbTitle = "附表三十四";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表三十五") {
        if (tbqk.substring(37, 38) == "0") {
            var newTitle = "附表三十五";
            crrFbTitle = "附表三十五";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表三十六") {
        if (tbqk.substring(38, 39) == "0") {
            var newTitle = "附表三十六";
            crrFbTitle = "附表三十六";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表三十七") {
        if (tbqk.substring(39, 40) == "0") {
            var newTitle = "附表三十七";
            crrFbTitle = "附表三十七";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表三十八") {
        if (tbqk.substring(40, 41) == "0") {
            var newTitle = "附表三十八";
            crrFbTitle = "附表三十八";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√附表三十九") {
        if (tbqk.substring(41, 42) == "0") {
            var newTitle = "附表三十九";
            crrFbTitle = "附表三十九";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√受控外国企业") {
        if (tbqk.substring(42, 43) == "0") {
            var newTitle = "受控外国企业";
            crrFbTitle = "受控外国企业";
            updateTitle(title, newTitle, options);
        }
    } else if (title == "√加计扣除归集表") {
        if (tbqk.substring(46, 47) == "0") {
            var newTitle = "加计扣除归集表";
            crrFbTitle = "加计扣除归集表";
            updateTitle(title, newTitle, options);
        }
    }
}

//汇总缴纳企业类别,0：非总分机构，1：总机构，2：分支机构，3：项目部，4：总机构独立生产经营部门
function setHznsqylb(hznsqylb) {
    if (hznsqylb != null && hznsqylb.length > 0) {
        if (hznsqylb == "0") {
            return "非总分机构";
        } else if (hznsqylb == "1") {
            return "总机构";
        } else if (hznsqylb == "2") {
            return "分支机构";
        } else if (hznsqylb == "3") {
            return "项目部";
        } else if (hznsqylb == "4") {
            return "总机构独立生产经营部门";
        }
    }
}

//跨地区税收转移企业标志,1-非跨地区转移；2-跨省转移；3-跨地市转移；4-跨县转移
function setKdqsszyqy(kdqsszyqy) {
    if (kdqsszyqy != null && kdqsszyqy.length > 0) {
        if (kdqsszyqy == "1") {
            return "非跨地区转移";
        } else if (kdqsszyqy == "2") {
            return "跨省转移";
        } else if (kdqsszyqy == "3") {
            return "跨地市转移";
        } else if (kdqsszyqy == "4") {
            return "跨县（区）转移";
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