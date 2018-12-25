var nsrsbh;
var bzList = [];

//启动时加载
$(function () {
    var options = { onSelect: function (title) { iframeAutoSize(); } };
    tabsOptions(options);
    search();
    //定时自动设置面板宽度
    autoWidth();
    loadNsrxx();	//加载纳税人信息（包括其他各种数据）
});

//加载纳税人信息（包括其他各种数据）
function loadNsrxx() {
    $.postJSON("/WSSBSL/do_index_Index_loadIndexNsrxx.ashx", function (data) {
        if (data && data.length > 0) {
            nsrsbh = data[2];
        } else {
            window.top.alert('消息', "获取纳税人信息出错！", 'error');
        }
    });
}
//首页跳转自动查询
function search() {
    var ssqq = request("ssqq");
    var ssqz = request("ssqz");
    if (ssqq && ssqz) {
        $("#cxsjQ").val(ssqq.substring(0, 4));
        $("#cxsjZ").val(ssqz.substring(0, 4));
        loadNdsdsAList();
    }
}
//执行查询
function loadNdsdsAList() {
    var cxsjQ = $("#cxsjQ").val();
    var cxsjZ = $("#cxsjZ").val();
    var reg = /\d{4}/;
    if (cxsjQ == "" || cxsjZ == "") {
        window.top.alert("错误", "查询日期起和查询日期止不能为空，请选择日期后再查询！", "error");
    } else if (!reg.test(cxsjQ) || !reg.test(cxsjZ)) {
        window.top.alert("错误", "输入日期格式不正确，请输入类似“2014”的格式！", "error");
    } else if (parseInt(cxsjZ, 10) < parseInt(cxsjQ, 10)) {
        window.top.alert("错误", "查询日期起不能大于查询日期止！", "error");
    } else if (reg.test(cxsjQ) && reg.test(cxsjZ)) {
        //$.postJSON("/WSSBSL/do_ndsdsglyw_NdsdsGlyw_loadNdsdsGlywList.action",
        $.postJSON("/WSSBSL/do_ndsdsa_NdsdsA_loadNdsdsAList.ashx",
			{ "cxsjQ": cxsjQ, "cxsjZ": cxsjZ },
			function (data, textStatus) {
			    if (data && data.length > 0) {
			        if (data[0] == "Y") {
			            showDataList(data[1]);
			        } else {
			            window.top.alert('消息', data[1], 'warning');
			        }
			    }
			}
		);
    }
}



//显示信息列表
function showDataList(list) {
    $("#sbxxList").children(0).children(":gt(0)").remove();
    var lis = [];
    bzList = [];
    if (list && list.length > 0) {
        for (var i = 0; i < list.length; i++) {
            bzList.push(list[i].bz);
            lis.push('<tr bgcolor="#FFFFFF">');
            lis.push('<td height="15" align="center" ><a href="javascript:;" onclick="chooseTr(this);showReport(\'' + list[i].tbqk + '\',\'' + list[i].dataFromBz + '\',\'' + list[i].pzxh + '\',\'' + list[i].sbuuid + '\',\'' + list[i].ssqq + '\',\'' + list[i].ssqz + '\')">' + list[i].bbzlmc + '</a></td>');
            lis.push('<td height="15" align="center" >' + list[i].ssqq + '</td>');
            lis.push('<td height="15" align="center" >' + list[i].ssqz + '</td>');
            lis.push('<td height="15" align="center" >' + list[i].sbzt + '</td>');
            lis.push('<td height="15" align="center" >' + formatJsonDate(list[i].sbrq) + '</td>');
            lis.push('<td height="15" align="center" >' + list[i].sblx + '</td>');
            lis.push('<td height="15" align="center" ><a href="javascript:;" onclick="showBz(' + i + ')">' + getStringByLength(list[i].bz, 8) + '</a></td>');
            lis.push('</tr>');
        }
    } else {
        lis.push('<tr bgcolor="#FFFFFF"><td height="20" colspan="11" align="center">无记录！</td></tr>');
    }
    $("#sbxxList").append(lis.join(""));
}

//显示备注信息
function showBz(xh) {
    window.top.alert('备注信息', bzList[xh], 'info');
}

//显示报表
function showReport(tbqk, dataFromBz, pzxh, sbuuid, ssqq, ssqz) {
    closeAllTab();
    var isTbBz = "1";	//是否填报标志：1-查询报表
    if (typeof (nsrsbh) == "undefined") {
        window.top.alert('消息', "无法获取必要参数！显示报表失败！请刷新页面重试！", 'warning');
    } else {
        //封面、填报表单、基础信息、主表必然加载	
        addTab("封面", "/WSSBSL/reportJsp/showCxReport_sb_ndsds_2014_fm.aspx?raq=/ndsdsA/sb_ndsds_2014_fm.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        if (tbqk.substring(0, 1) == '1') {
            addTab("填报表单", "/WSSBSL/reportJsp/showCxReport_sb_ndsds_2014_tbbd.aspx?raq=/ndsdsA/sb_ndsds_2014_tbbd.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(1, 2) == '1') {
            addTab("基础信息", "/WSSBSL/reportJsp/showCxReport_sb_ndsds_2014_jcxx.aspx?raq=/ndsdsA/sb_ndsds_2014_jcxx.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(2, 3) == '1') {
            addTab("主表", "/WSSBSL/reportJsp/showCxReport_sb_ndsds_2014_zb.aspx?raq=/ndsdsA/sb_ndsds_2014_zb.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(3, 4) == '1') {
            addTab("附表一", "/WSSBSL/reportJsp/showCxReport_sb_ndsds_2014_fb1.aspx?raq=/ndsdsA/sb_ndsds_2014_fb1.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(4, 5) == '1') {
            addTab("附表二", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb2.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(5, 6) == '1') {
            addTab("附表三", "/WSSBSL/reportJsp/showCxReport_sb_ndsds_2014_fb3.aspx?raq=/ndsdsA/sb_ndsds_2014_fb3.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(6, 7) == '1') {
            addTab("附表四", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb4.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(7, 8) == '1') {
            addTab("附表五", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb5.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(8, 9) == '1') {
            addTab("附表六", "/WSSBSL/reportJsp/showCxReport_sb_ndsds_2014_fb6.aspx?raq=/ndsdsA/sb_ndsds_2014_fb6.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(9, 10) == '1') {
            addTab("附表七", "/WSSBSL/reportJsp/showCxReport_sb_ndsds_2014_fb7.aspx?raq=/ndsdsA/sb_ndsds_2014_fb7.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(10, 11) == '1') {
            addTab("附表八", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb8.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(11, 12) == '1') {
            addTab("附表九", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb9.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(12, 13) == '1') {
            addTab("附表十", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb10.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(13, 14) == '1') {
            addTab("附表十一", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb11.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(14, 15) == '1') {
            addTab("附表十二", "/WSSBSL/reportJsp/showCxReport_sb_ndsds_2014_fb12.aspx?raq=/ndsdsA/sb_ndsds_2014_fb12.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(15, 16) == '1') {
            addTab("附表十三", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb13.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(16, 17) == '1') {
            addTab("附表十四", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb14.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(17, 18) == '1') {
            addTab("附表十五", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb15.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(18, 19) == '1') {
            addTab("附表十六", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb16.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(19, 20) == '1') {
            addTab("附表十七", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb17.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(20, 21) == '1') {
            addTab("附表十八", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb18.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(21, 22) == '1') {
            addTab("附表十九", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb19.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(22, 23) == '1') {
            addTab("附表二十", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb20.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(23, 24) == '1') {
            addTab("附表二十一", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb21.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(24, 25) == '1') {
            addTab("附表二十二", "/WSSBSL/reportJsp/showCxReport_sb_ndsds_2014_fb22.aspx?raq=/ndsdsA/sb_ndsds_2014_fb22.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(25, 26) == '1') {
            addTab("附表二十三", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb23.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(26, 27) == '1') {
            addTab("附表二十四", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb24.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(27, 28) == '1') {
            addTab("附表二十五", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb25.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(28, 29) == '1') {
            addTab("附表二十六", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb26.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(29, 30) == '1') {
            addTab("附表二十七", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb27.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(30, 31) == '1') {
            addTab("附表二十八", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb28.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(31, 32) == '1') {
            addTab("附表二十九", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb29.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(32, 33) == '1') {
            addTab("附表三十", "/WSSBSL/reportJsp/showCxReport_sb_ndsds_2014_fb30.aspx?raq=/ndsdsA/sb_ndsds_2014_fb30.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(33, 34) == '1') {
            addTab("附表三十一", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb31.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(34, 35) == '1') {
            addTab("附表三十二", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb32.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(35, 36) == '1') {
            addTab("附表三十三", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb33.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(36, 37) == '1') {
            addTab("附表三十四", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb34.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(37, 38) == '1') {
            addTab("附表三十五", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb35.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(38, 39) == '1') {
            addTab("附表三十六", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb36.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(39, 40) == '1') {
            addTab("附表三十七", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb37.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(40, 41) == '1') {
            addTab("附表三十八", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb38.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(41, 42) == '1') {
            addTab("附表三十九", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/sb_ndsds_2014_fb39.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(42, 43) == '1') {
            addTab("受控外国企业", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/skwgqybgb.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(46, 47) == '1') {
            addTab("加计扣除归集表", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/ndsdsA/jjkcgjb.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }

    }
    var options = { onSelect: function (title) { iframeAutoSize(); } };
    tabsOptions(options);
}

//打印方式一
function javaPrint() {
    doCurrTabFun("javaPrint()");
}

//打印方式二
function winPrint() {
    doCurrTabFun("winPrint()");
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

//隐藏查询条件和查询结果
function hideQuery() {
    $("#cxtjDiv").hide();
    $("#cxjgDiv").hide();
    $("#lbt_toHide").hide();
    $("#lbt_toShow").show();
    iframeAutoSize();
}

//显示查询条件和查询结果
function showQuery() {
    $("#cxtjDiv").show();
    $("#cxjgDiv").show();
    $("#lbt_toHide").show();
    $("#lbt_toShow").hide();
    iframeAutoSize();
}

//定时自动设置宽度(0.3秒一次)
function autoWidth() {
    $("#cxtjDiv").width($("#cxtjDiv").parent().width());
    $("#cxjgDiv").width($("#cxjgDiv").parent().width());
    setTimeout(autoWidth, 300);
}

//选中当前tab，目的是让tab内容适应窗口，由子级页面调用
function selectCurrTab() {
    var tab = getSelectedTab();
    var title = tab.panel('options').title;
    selectTab(title);
}

//窗口高度自适应
function iframeAutoSize() {
    var headHeight = 170;
    if ($("#cxtjDiv").is(":hidden")) {
        headHeight = 40;
    }
    var tab = getSelectedTab();
    if (tab) {
        var id = tab.panel('options').id;
        $("#mainiframe" + id).height(0);
        var mainheight = $(window).height() - headHeight;
        $("#mainiframe" + id).height(mainheight);
    }
}

//某行高亮
function chooseTr(obj) {
    $("#sbxxList").children().eq(0).find("tr").each(function (i) {
        if ($(this).index() > 0) {
            $(this).css("background-color", "#FFFFFF");
        }
    });
    $(obj).parent().parent().css("background-color", "#FBEC88");
}

//执行当前TAB页面下的方法
function doCurrTabFun(f) {
    var tab = $('#tabList').tabs('getSelected');
    var id = tab.panel('options').id;
    var str = 'window.frames["mainiframe' + id + '"].' + f;
    return eval(str);
}