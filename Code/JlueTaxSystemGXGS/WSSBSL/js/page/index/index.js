
var tabid = 0;
var xtzwmc;
var sysDate;
var sszskUrl;
var currOprate = 0;	//当前操作  0:列表初始化  1:提交申报  2:报表填写资格检查
var tsxxList;
var options = { onSelect: function (title) { afterSelect(); } };
var isShowTbbz = 1;	//当前是否显示了填表帮助，0：显示  ，1：隐藏
var showTitle = "首页";
var oldEastState = false;//旧的填表帮助展开状态（true:展开  false:折叠）
var oldWidth = 0;
var reqParam = "";
var dzswjParam = "N";

//启动时加载
$(function () {
    //浏览器检查
    checkBrowser();
});

//显示填写帮助
function showReportTbbz(tbbz) {
    $("#tbbzDiv").html(tbbz);
}

function getTabid() {
    return tabid;
}

function setTabid(id) {
    tabid = id;
}

//检查浏览器
function checkBrowser() {
    if ($.browser.msie && $.browser.version == "6.0" && !$.support.style) {
        window.top.alert('温馨提示', "由于您的IE6.0浏览器已失去技术支持，为了保证您申报数据的安全，请更新至IE8.0或更高版本，或使用其他主流浏览器。", 'warning', function () {
            window.opener = null;
            window.open("", "_self");
            window.close();
        });
    } else {
        var from = request("from");
        if (from && from == "0") {
            indexInit();
        } else {
            //为防止是从其它系统跳转过来的，再做一次登录资格检查
            $.postJSON("/WSSBSL/do_index_Index_loginZgjc.ashx?wssbtid=" + Math.round(Math.random() * 1000000), function (data) {
                if (data && data.length > 0) {
                    if (data[0] == "Y") {
                        indexInit();
                    } else {
                        window.top.alert('消息', data[1], 'warning');
                    }
                }
            });
        }
    }
}

function indexInit() {
    //加载数据池
    //loadDataPool();
    //loadServerTime(); 	//加载服务器时间
    loadIndexNsrxx();	//加载首页上的纳税人信息（包括其他各种数据）
    loadBbtbList();		//加载报表填报菜单列表
    loadBbcxList();		//加载报表数据查询
    //xxtsTimer();		//推送消息轮询
    showMain();		//显示首页
    //showXtgg();		//显示公告
    //showGxrz();		//显示更新日志
    //showDzswj();
    try {
        //在线咨询初始化
        BizQQWPA.addCustom({ aty: '0', a: '0', nameAccount: 8000912366, selector: 'BizQQWPA' });
    } catch (e) {
        //alert("初始化在线咨询出错",e.message,"error");
    }
}

//显示电子税务局功能菜单
function showDzswj() {
    var dzswj = request("dzswj");
    if (dzswj && dzswj == "Y") {
        $("#dzswj").show();
    } else {
        $("#leftAccordion").accordion("remove", "电子税务局");
    }
}

//加载数据池
function loadDataPool() {
    $.postJSON("/WSSBSL/do_index_Index_loadDataPool.ashx?wssbtid=" + Math.round(Math.random() * 1000000), function (data) { });
}

//跳转到旧版网上申报
function jumpToOld() {
    var buttons = [{
        text: '立即前往',
        iconCls: 'icon-redo',
        handler: function () {
            window.open("http://www.gxgs.gov.cn:9604/zxsbweb/showMainInit.action?wssbtid=" + Math.round(Math.random() * 1000000), "旧版网上申报", "scrollbars=yes,resizable=yes");
            window.top.closeEasyDialog();
        }
    }, {
        text: '取消并关闭',
        iconCls: 'icon-cancel',
        handler: function () {
            window.top.closeEasyDialog();
        }
    }];
    window.top.showEasyDialog("/WSSBSL/show_index_gotoOldWssb.action", {
        title: '是否前往旧版网上申报',	//标题
        width: 650,								//宽度
        height: 330,								//高度
        left: ($(window.top).width() - 650) * 0.5,   //居中时左边距
        top: ($(window.top).height() - 330) * 0.4,	//居中时上边距
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

//显示更新日志
function showGxrz() {
    $.postJSON("/WSSBSL/do_index_Index_loadGxrzInfo.ashx?wssbtid=" + Math.round(Math.random() * 1000000), function (data) {
        if (data && data.length > 0 && data[1]) {
            $.messager.show({
                title: "最近更新日志（" + formatJsonDate(data[0]) + "）",
                msg: data[2],
                width: 300,
                height: 250,
                timeout: 0,
                showType: "fade"
            });
        }
    });
}

//获取服务器端实时推送消息
function xxtsTimer() {
    $.postJSON("/WSSBSL/do_index_Index_loadXxtsInfo.ashx?wssbtid=" + Math.round(Math.random() * 1000000), function (data) {
        if (data && data.length > 0) {
            if (data[0]) {
                alert("提示", "网上申报将于" + data[0].kssj + "分钟后停机维护，预计重新开放时间为" + formatJsonDate(data[0].kfsj) + "，请及时保存您正在填写的数据。", "warning");
            }
            if (data[1]) {
                logoutDzswj();
                window.top.location.href = "/WSSBSL/do_index_NsrglLogin_logout.action?wssbtid=" + Math.round(Math.random() * 1000000);
            }
        }
    });
    setTimeout(xxtsTimer, 60000);
}

//加载系统公告
function showXtgg() {
    $.postJSON("/WSSBSL/do_index_Index_loadXtggInfo.ashx?wssbtid=" + Math.round(Math.random() * 1000000), function (data) {
        if (data && data.length > 0 && data[1]) {
            showXtggInfo(data);
        }
    });
}

//显示公告内容
function showXtggInfo(data) {
    window.top.showEasyWindow(data[1], {
        title: data[0],							//标题
        width: 700,								//高度
        height: 500,							//宽度
        left: ($(window.top).width() - 700) * 0.5,   //居中时左边距
        top: ($(window.top).height() - 500) * 0.4,	//居中时上边距
        modal: true,							//模式窗口
        iconCls: 'icon-voice',					//图标样式
        minimizable: false,						//是否显示最小化按钮
        maximizable: false,						//是否显示最大化按钮
        href: null,								//窗口内容加载URL
        loadingMessage: null,					//窗口内容加载时显示信息
        tools: null,								//窗口工具条
        doSize: true								//面板创建的时候将被调整和重新布局
    });
    var winId = "windowContext" + getCurWindowNum();
    uParse("#" + winId, {
        rootPath: "/WSSBSL/"
    });
}

//显示打印控件安装或升级信息
function showPrintInfo(xxbt, xxnr) {
    window.top.showEasyWindow(xxnr, {
        title: xxbt,							//标题
        width: 600,								//高度
        height: 200,							//宽度
        left: ($(window.top).width() - 600) * 0.5,   //居中时左边距
        top: ($(window.top).height() - 200) * 0.4,	//居中时上边距
        modal: true,							//模式窗口
        iconCls: 'icon-help',					//图标样式
        minimizable: false,						//是否显示最小化按钮
        maximizable: false,						//是否显示最大化按钮
        href: null,								//窗口内容加载URL
        loadingMessage: null,					//窗口内容加载时显示信息
        tools: null,								//窗口工具条
        doSize: true								//面板创建的时候将被调整和重新布局
    });
}

//加载服务器时间
function loadServerTime() {
    $.postJSON("/WSSBSL/do_index_Index_readServerTime.ashx?wssbtid=" + Math.round(Math.random() * 1000000), function (data) {
        if (data && data.length > 0) {
            sysDate = data[0];
            autoRunTime();
        } else {
            window.top.alert('消息', "获取服务器时间出错！", 'error');
        }
    });
}

//加载首页上的纳税人信息（包括其他各种数据）
function loadIndexNsrxx() {
    $.postJSON("/WSSBSL/do_index_Index_loadIndexNsrxx.ashx?wssbtid=" + Math.round(Math.random() * 1000000), function (data) {
        if (data && data.length > 0) {
            $("#nsrmc").html(data[0]);
            sszskUrl = data[1];
            reqParam = data[3];
        } else {
            window.top.alert('消息', "获取纳税人信息出错！", 'error');
        }
    });
}

//加载报表填报菜单列表
function loadBbtbList() {
    $.postJSON("/WSSBSL/do_index_Index_loadBbtbList.ashx?wssbtid=" + Math.round(Math.random() * 1000000), function (data) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                var sz = data[1].split(",");
                if (sz != null && sz.length > 0) {
                    for (var i = 0; i < sz.length; i++) {
                        $("tr[id='" + sz[i] + "']").show();
                    }
                }
                if (data[2] == "N") {
                    tsxxList = data[3];
                    showTsxxListWindow();
                }
            } else {
                tsxxList = data[1];
                showTsxxListWindow();
            }
        } else {
            window.top.alert('消息', "加载报表填报菜单列表出错！", 'error');
        }
    });
}


//加载报表填报菜单列表（二次刷新填报菜单）
function loadBbtbList2() {
    $("#sjcj_table").find("tr").each(function () {
        var id = $(this).attr("id");
        var idStr = id.substring(0, 13);
        if (idStr == "sjcj_cwbb2014") {
            $(this).hide();
        }
    });
    $.postJSON("/WSSBSL/do_index_Index_loadBbtbList.ashx?wssbtid=" + Math.round(Math.random() * 1000000), function (data) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                var sz = data[1].split(",");
                if (sz != null && sz.length > 0) {
                    for (var i = 0; i < sz.length; i++) {
                        $("tr[id='" + sz[i] + "']").show();
                    }
                }
            } else {
                tsxxList = data[1];
                showTsxxListWindow();
            }
        } else {
            window.top.alert('消息', "加载报表填报菜单列表出错！", 'error');
        }
    });
}


//加载报表数据查询列表
function loadBbcxList() {
    $.postJSON("/WSSBSL/do_index_Index_loadBbcxList.ashx?wssbtid=" + Math.round(Math.random() * 1000000), function (data) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                var sz = data[1].split(",");
                if (sz != null && sz.length > 0) {
                    for (var i = 0; i < sz.length; i++) {
                        try {
                            $("tr[id='" + sz[i] + "']").show();
                        } catch (e) { }
                    }
                }
            } else {
                window.top.alert('消息', data[1], 'warning');
            }
        } else {
            window.top.alert('消息', "加载报表数据查询列表出错！", 'error');
        }
    });
}

//知识库查询回车事件
function searchKeyEvnet(event) {
    if (event.keyCode == "13") {
        showSearch();
    }
}

//显示右侧首页
function showMain() {
    addTab("首页", "/WSSBSL/show_index_indexMain.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    tabsOptions(options);
}

//申报成功后刷新首页应申报信息列表
function reloadMain() {
    //var tab = getTab("首页");
    //if(tab){
    //var id = tab.panel('options').id;
    //var iframeid = "mainiframe"+id;
    //window.frames[iframeid].document.location.reload();//刷新首页tab
    //}
    loadBbcxList();		//加载报表数据查询列表
}

//知识库搜索
function showSearch() {
    $("#searchForm").attr("action", sszskUrl);
    var searchText = $("#searchText").val();
    $("#searchText1").val(searchText);
    $("#searchForm").submit();
}

//时间自动跳动
function autoRunTime() {
    $("#leftTitle").html("<font color='#0033FF'>&nbsp;" + Highcharts.dateFormat('%Y年%m月%d日 %H:%M:%S', sysDate) + "</font>");
    setTimeout(autoRunTime, 1000);
    sysDate = sysDate + 1000;
}

//关闭当前标签
function closeCurrTab() {
    closeTab(getSelectedTab().panel('options').title);
}

//点击项目，显示标签
function showTabPage(id) {
    if (id == "tb_zzsybnsr") {
        addTab("报表填报-增值税（一般纳税人）", "/WSSBSL/show_zzs2013Ybnsr_zzs2013YbnsrBbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "tb_zzsxgmnsr") {
        addTab("报表填报-增值税（小规模纳税人）", "/WSSBSL/show_zzsxgm_zzsxgmBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "tb_sdsjd_a") {
        addTab("报表填报-企业所得税月（季）度A类", "/WSSBSL/show_jdsds2012_jdsds2012ABbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "tb_sdsjd_b") {
        addTab("报表填报-企业所得税月（季）度B类", "/WSSBSL/show_jdsds2012_jdsds2012BBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "tb_sdsnd_a") {
        addTab("报表填报-企业所得税年度A类", "/WSSBSL/show_ndsdsA_ndsdsABbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "tb_whsyjsf") {
        addTab("报表填报-文化事业建设费", "/WSSBSL/show_whsyjsf_whsyjsfBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "tb_sljsjj") {
        addTab("报表填报-水利建设基金", "/WSSBSL/show_sljsjj_sljsjjBbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "bbtb_sljsjj_bcsb") {
        addTab("报表填报-水利建设基金(补充申报)", "/WSSBSL/show_sljsjj_bcsbSljsjjBbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    }
    else if (id == "dj_cwkjzdba") {
        addTab("财务制度备案", "/WSSBSL/show_cwkjzdba_cwkjzdbaList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    }
    else if (id == "scxz_yffy_jjkc") {
        addTab("研发费加计扣除_上传下载区", "/WSSBSL/show_scxz_yffyjjkc.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    }

    else if (id == "tb_lxsds_05") {
        addTab("报表填报-利息所得税_5%", "/WSSBSL/show_lxsds_lxsds05BbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "tb_lxsds_20") {
        addTab("报表填报-利息所得税_20%", "/WSSBSL/show_lxsds_lxsds20BbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "tb_ndsds_b") {
        addTab("报表填报-企业所得税年度B类", "/WSSBSL/show_ndsdsB_ndsdsBBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "tb_ndsds_b") {
        addTab("报表填报-企业所得税年度B类", "/WSSBSL/show_ndsdsB_ndsdsBBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "tb_ndsds_fzjg") {
        addTab("报表填报-企业所得税年度分支机构", "/WSSBSL/show_ndsdsFzjg_ndsdsFzjgBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
    }
    else if (id == "tb_qyndglyw2016") {
        addTab("报表填报-企业年度关联业务(2016版)", "/WSSBSL/show_qyndglyw2016_qyndglyw2016BbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    }

    else if (id == "cx_zzsybnsr") {
        addTab("报表查询-增值税（一般纳税人）", "/WSSBSL/show_zzs2013Ybnsr_cxZzs2013YbnsrBbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "cx_zzsxgmnsr") {
        addTab("报表查询-增值税（小规模纳税人）", "/WSSBSL/show_zzsxgm_cxZzs2013XgmBbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "cx_jdsds_a") {
        addTab("报表查询-企业所得税月（季）度A类", "/WSSBSL/show_jdsds2012_cxJdsds2012ABbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "cx_jdsds_b") {
        addTab("报表查询-企业所得税月（季）度B类", "/WSSBSL/show_jdsds2012_cxJdsds2012BBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "cx_ndsds_a") {
        addTab("报表查询-企业所得税年度A类", "/WSSBSL/show_ndsdsA_cxNdsdsABbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    }
        //else if(id=="cx_sdsndglyw"){
        //	addTab("报表查询-企业所得税年度关联业务","/WSSBSL/show_ndsdsglyw_cxNdsdsglywBbList.action?wssbtid="+Math.round(Math.random()*1000000),true);
        //}
    else if (id == "cx_whsyjsf") {
        addTab("报表查询-文化事业建设费", "/WSSBSL/show_whsyjsf_cxWhsyjsfBbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "cx_sljsjj") {
        addTab("报表查询-水利建设基金", "/WSSBSL/show_sljsjj_cxSljsjjBbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "cx_lxsds_05") {
        addTab("报表查询-利息所得税5%", "/WSSBSL/show_lxsds_cxLxsds05BbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "cx_lxsds_20") {
        addTab("报表查询-利息所得税20%", "/WSSBSL/show_lxsds_cxLxsds20BbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "cx_ndsds_b") {
        addTab("报表查询-企业所得税年度B类", "/WSSBSL/show_ndsdsB_cxNdsdsBBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "cx_ndsds_fzjg") {
        addTab("报表查询-企业所得税年度分支机构", "/WSSBSL/show_ndsdsFzjg_cxNdsdsfzjgBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "cx_qyndglyw2016") {
        addTab("报表查询-企业年度关联业务(2016版)", "/WSSBSL/show_qyndglyw2016_cxQyndglyw2016BbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "cx_cwkjzdba") {
        addTab("报表查询-财务会计制度备案", "/WSSBSL/show_cwkjzdba_cxCwkjzdbaList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    }

    else if (id == "qt_jhhg") {
        addTab("稽核海关", "/WSSBSL/show_jhhg_jh_hgjkjks.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    }
    else if (id == "qt_wtkkxy") {
        addTab("委托扣款协议书", "/WSSBSL/show_wtkkxy_wtkkxys.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    }
        //else if(id=="qt_sbzfqk"){
        //	addTab("申报作废情况查询","/WSSBSL/show_sbzfqk_cx_sbzfqk.action?wssbtid="+Math.round(Math.random()*1000000),true);
        //}
    else if (id == "cwbb_xqy_yb") {
        addTab("财务报表-小企业会计准则类", "/WSSBSL/show_cwbb2014Yb_cwbb2014XqyYbBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "cwbb_ybqy_yb") {
        addTab("财务报表-一般企业类", "/WSSBSL/show_cwbb2014Yb_cwbb2014YbqyYbBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "cwbb_xqy_yb_2017") {
        addTab("(2017)财务报表-小企业会计准则类", "/WSSBSL/show_cwbb2014Yb_cwbb2014XqyYbBbList.action?bbh=2017&wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "cwbb_ybqy_yb_2017") {
        addTab("(2017)财务报表-一般企业类", "/WSSBSL/show_cwbb2014Yb_cwbb2014YbqyYbBbList.action?bbh=2017&wssbtid=" + Math.round(Math.random() * 1000000), true);
    }

    else if (id == "js_dqwjnsk") {
        addTab("税款缴纳-当期未缴税款", "/WSSBSL/show_skjn_dqwjsk.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "js_wqskjnjl") {
        addTab("税款缴纳-往期税款缴纳记录", "/WSSBSL/show_skjn_jkjlcx.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "js_sdjkjl") {
        addTab("税款缴纳-我的手动缴款记录", "/WSSBSL/show_skjn_sdkkjl.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (id == "js_kksdcx") {
        addTab("税款缴纳-扣款锁定情况查询", "/WSSBSL/show_skjn_kksdcx.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    }
    else if (id == "gl_nsrjbxxcx") {
        addTab("信息管理-基本信息查询", "/WSSBSL/show_index_nsrBaseInfo.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    }
    else if (id == "gl_nsrdjszxxcx") {
        addTab("信息管理-税（费）种认定信息查询", "/WSSBSL/show_index_nsrdjszxxcx.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    }
    else if (id == "gl_sssxjdcx") {
        addTab("信息管理-涉税事项进度查询", "/WSSBSL/show_index_sssxjdcx.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    }
    else if (id == "xt_gxrz") {
        addTab("信息管理-系统更新日志", "/WSSBSL/show_index_xtgxrz.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    }

    else if (id == "bz_wssbyhsc") {
        addTab("系统帮助-用户手册", "/WSSBSL/showXtxxListPage.action", true);
    } else if (id == "bz_wssbcjwtjd") {
        addTab("系统帮助-常见问题解答", "/WSSBSL/showXtxxListPage.action", true);
    }

}

//检查电子税务局功能菜单的浏览器核心是否为IE
function showCheckDzswjIE(id) {
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        if (id == "dzswj_href_xfs") {
            addTab("消费税申报", "../sword_WbdltzCtrl_forwardBizCtrl_SB001XfssbCtrl_initView.aspx?ctrl=WbdltzCtrl_forwardBizCtrl&bizCtrl=SB001XfssbCtrl_initView&wbdlbz=Y&webToken=" + reqParam, true);
        }
        else if (id == "dzswj_href_xfs_cx") {
            addTab("消费税申报查询", "/sword_WbdltzCtrl_forwardBizCtrl_00010061211.aspx?ctrl=WbdltzCtrl_forwardBizCtrl&bizCtrl=CX301DzcxCtrl_initView&sqlxh=00010061211&execute=true&sqlmc=%25E6%25B6%2588%25E8%25B4%25B9%25E7%25A8%258E%25E7%2594%25B3%25E6%258A%25A5%25E6%259F%25A5%25E8%25AF%25A2&wbdlbz=Y&webToken=" + reqParam, true);
        }
        else if (id == "dzswj_href_cwbb") {
            addTab("财务报表报送与信息采集", "/sword_SB151zlbsslCtrl_initView.aspx?ctrl=WbdltzCtrl_forwardBizCtrl&bizCtrl=SB151zlbsslCtrl_initView&wbdlbz=Y&webToken=" + reqParam, true);
        }
        else if (id == "dzswj_href_sbgz") {
            addTab("申报错误更正", "/sword_WbdltzCtrl_forwardBizCtrl_SB057SbcwgzCtrl_initView.aspx?ctrl=WbdltzCtrl_forwardBizCtrl&bizCtrl=SB057SbcwgzCtrl_initView&wbdlbz=Y&webToken=" + reqParam, true);
        }
        else if (id == "cx_dzswj_cwbb") {
            addTab("财务报表申报查询", "/sword_CX301DzcxCtrl_initView.aspx?ctrl=WbdltzCtrl_forwardBizCtrl&bizCtrl=CX301DzcxCtrl_initView&sqlxh=00010061268&execute=true&sqlmc=%25E8%25B4%25A2%25E5%258A%25A1%25E6%258A%25A5%25E8%25A1%25A8%25E7%2594%25B3%25E6%258A%25A5%25E6%259F%25A5%25E8%25AF%25A2&wbdlbz=Y&webToken=" + reqParam, true);
        }
        else if (id == "dzswj_href_kjqysdssb") {
            addTab("扣缴企业所得税申报", "../sword_WbdltzCtrl_forwardBizCtrl_SB071Kjqysdssb2015Ctrl_initView.aspx?ctrl=WbdltzCtrl_forwardBizCtrl&bizCtrl=SB071Kjqysdssb2015Ctrl_initView&wbdlbz=Y&webToken=" + reqParam, true);
        }
        else if (id == "dzswj_href_tydkdj") {
            addTab("通用代扣代缴", "../sword_WbdltzCtrl_forwardBizCtrl_SB097TydkdjsbCtrl_initView.aspx?ctrl=WbdltzCtrl_forwardBizCtrl&bizCtrl=SB097TydkdjsbCtrl_initView&wbdlbz=Y&webToken=" + reqParam, true);
        }
        else if (id == "dzswj_href_zzsyjsb") {
            addTab("增值税预缴申报", "../sword_WbdltzCtrl_forwardBizCtrl_SB207zzsyjnssbCtrl_initView.aspx?ctrl=WbdltzCtrl_forwardBizCtrl&bizCtrl=SB207zzsyjnssbCtrl_initView&wbdlbz=Y&webToken=" + reqParam, true);
        }
    } else {
        var names = "";
        if (id == "dzswj_href_xfs") { names = "【消费税申报】"; }
        else if (id == "dzswj_href_xfs_cx") { names = "【消费税申报查询】"; }
        else if (id == "dzswj_href_cwbb") { names = "【财务报表报送与信息采集】"; }
        else if (id == "dzswj_href_sbgz") { names = "【申报错误更正】"; }
        else if (id == "cx_dzswj_cwbb") { names = "【财务报表申报查询】"; }
        else if (id == "dzswj_href_kjqysdssb") { names = "【扣缴企业所得税申报】"; }
        else if (id == "dzswj_href_tydkdj") { names = "【通用代扣代缴】"; }
        else if (id == "dzswj_href_zzsyjsb") { names = "【增值税预缴申报】"; }
        window.top.alert('消息', names + "功能仅支持IE浏览器，请使用IE浏览器重新登录再使用本功能！", 'warning');
        return false;

    }
}

//弹出修改密码窗口
function showXgmmWindow() {
    var buttons = [{
        text: '保存',
        iconCls: 'icon-save',
        handler: function () {
            window.top.doEasyDialogFun("doEditPwd()");
        }
    }, {
        text: '关闭',
        iconCls: 'icon-cancel',
        handler: function () {
            window.top.closeEasyDialog();
        }
    }];
    showEasyDialog("/WSSBSL/show_common_xgmm.aspx?wssbtid=" + Math.round(Math.random() * 1000000), {
        title: "修改密码",						//标题
        width: 550,								//高度
        height: 200,							//宽度
        left: ($(window.top).width() - 550) * 0.5,   //居中时左边距
        top: ($(window.top).height() - 200) * 0.4,	//居中时上边距
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

//弹出选择财务报表纳税期限窗口
function showCwbbNsqxWindow() {
    var buttons = [{
        text: '保存',
        iconCls: 'icon-save',
        handler: function () {
            window.top.doEasyDialogFun("doCwbbNsqx()");
        }
    }, {
        text: '关闭',
        iconCls: 'icon-cancel',
        handler: function () {
            window.top.closeEasyDialog();
        }
    }];
    showEasyDialog("/WSSBSL/show_index_cwbbNsqx.action?wssbtid=" + Math.round(Math.random() * 1000000), {
        title: "财务报表报送期限管理",			//标题
        width: 630,								//高度
        height: 300,							//宽度
        left: ($(window.top).width() - 630) * 0.5,   //居中时左边距
        top: ($(window.top).height() - 300) * 0.4,	//居中时上边距
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

//切换标签后的操作
function afterSelect() {
    var tab = $('#tabList').tabs('getSelected');
    var title = tab.panel('options').title;
    var loadFinish = null;
    try {
        loadFinish = doCurrTabFun('getLoadFinish()');
    } catch (e) {
    }
    if (title.length > 4) {
        if (title == "报表填报-水利建设基金" || title == "报表填报-水利建设基金(补充申报)") {
            hideTbbzDiv();
        } else if (title == "报表填报-居民企业参股外国企业信息报告表") {
            hideTbbzDiv();
        } else if (title == "报表填报-企业所得税年度关联业务") {
            hideTbbzDiv();
        } else if (title == "报表填报-分支机构企业所得税年度申报表") {
            hideTbbzDiv();
        } else if (title == "报表填报-企业所得税年度申报表(B类)") {
            hideTbbzDiv();
        } else if (title.substring(0, 4) == "报表填报") {
            if (loadFinish != null && loadFinish == true) {
                if (isShowTbbz == 1) {
                    showTbbzDiv();
                }
            }
        } else {
            if (isShowTbbz == 0) {
                hideTbbzDiv();
            }
        }
    } else {
        if (isShowTbbz == 0) {
            hideTbbzDiv();
        }
    }
}

//打开新窗口显示小规模纳税人填报向导
function openWizard(id) {
    if (id == "tb_zzsxgmnsr") {
        window.top.showEasyDialog("show2_zzsxgm_zzsxgmTbxd.action", {
            title: "增值税（小规模纳税人）填报向导", 					//标题
            width: 400, 										//高度
            height: 240, 										//宽度
            left: ($(window.top).width() - 400) * 0.5, 			//居中时左边距
            top: ($(window.top).height() - 240) * 0.5, 			//居中时上边距
            modal: true, 										//模式窗口
            iconCls: 'icon-save', 								//图标样式
            minimizable: false, 								//是否显示最小化按钮
            maximizable: false, 								//是否显示最大化按钮
            loadingMessage: null, 								//窗口内容加载时显示信息
            toolbar: null, 										//窗口工具条
            buttons: null, 										//底部按钮
            doSize: true, 										//面板创建的时候将被调整和重新布局
            resizable: true 									//对话框是否可编辑大小
        });
    }
}

//退出
function logout() {
    confirm("确认退出", "您确定要退出网上申报吗？", function (result) {
        window.opener = null;
        window.open('', '_self');
        window.close();
        //if (result) {
        //    logoutDzswj();
        //    window.top.location.href = "/WSSBSL/do_index_NsrglLogin_logout.action?wssbtid=" + Math.round(Math.random() * 1000000);
        //}
    });
}

//登出电子税务局
function logoutDzswj() {
    var dzswj = request("dzswj");
    if (dzswj && dzswj == "Y") {
        $.postJSON("http://www.gxgs.gov.cn:8012/sword?ctrl=WbdltzCtrl_forwardBizCtrl&wbdlbz=N", function (data) { });
    }
}

//显示填表帮助DIV
function showTbbzDiv() {
    $("#main").layout("expand", "east");
    isShowTbbz = 0;
}

//隐藏填报帮助DIV
function hideTbbzDiv() {
    $("#main").layout("collapse", "east");
    isShowTbbz = 1;
}

//执行当前TAB页面下的方法
function doCurrTabFun(f) {
    var tab = $('#tabList').tabs('getSelected');
    var id = tab.panel('options').id;
    var str = 'window.frames["mainiframe' + id + '"].' + f;
    return eval(str);
}

//窗口高度自适应
function iframeAutoSize() {
    var tab = $('#tabList').tabs('getSelected');
    var id = tab.panel('options').id;
    $("#mainiframe" + id).height(0);
    var mainheight = window.frames["mainiframe" + id].document.body.scrollHeight;
    //alert("mainwidth="+mainwidth,"","info");
    $("#mainiframe" + id).height(mainheight);
}

//得到当前标签窗口高度
function getCurrTabWindowHeight() {
    var tab = $('#tabList').tabs('getSelected');
    var id = tab.panel('options').id;
    var currHeight = window.frames["mainiframe" + id].document.body.clientHeight;;
    return currHeight;
}

//弹出信息显示窗口
function showTsxxListWindow() {
    var modal = true;
    if (currOprate == 1) {
        modal = false;
    }
    window.top.showEasyDialog("/WSSBSL/show_common_tsxx.aspx?index=Y&wssbtid=" + Math.round(Math.random() * 1000000), {
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

//向内网后台数据记录页面信息
function recordInfo(xxnr) {
    $.postJSON("/WSSBSL/do_index_NsrglLogin_recordInfo.action?wssbtid=" + Math.round(Math.random() * 1000000), { "xxnr": xxnr }, function (data) { });
}
