var bzList = [];

//启动时加载
$(function () {
    var options = {
        onSelect: function (title) {
            iframeAutoSize();
        }
    };
    tabsOptions(options);
    search();
    //定时自动设置面板宽度
    autoWidth();
    iframeAutoSize();
    loadNsrxx(); //加载纳税人信息（包括其他各种数据）
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

function loadZzs2013List() {
    var cxsjQ = $("#cxsjQ").val();
    var cxsjZ = $("#cxsjZ").val();
    var reg = /\d{4}-\d{2}/;
    if (cxsjQ == "" || cxsjZ == "") {
        window.top.alert("错误", "查询日期起和查询日期止不能为空，请选择日期后再查询！", "error");
    } else if (!reg.test(cxsjQ) || !reg.test(cxsjZ)) {
        window.top.alert("错误", "输入日期格式不正确，请输入类似“2014-06”的格式！", "error");
    } else if (parseInt(cxsjZ.substring(0, 4) + "" + cxsjZ.substring(5, 7), 10) < parseInt(cxsjQ.substring(0, 4) + "" + cxsjQ.substring(5, 7), 10)) {
        window.top.alert("错误", "查询日期起不能大于查询日期止！", "error");
    } else if (reg.test(cxsjQ) && reg.test(cxsjZ)) {
        $.postJSON("/WSSBSL/do_zzs2013_Zzs2013_loadXgmnsrList.ashx", {
            "cxsjQ": cxsjQ,
            "cxsjZ": cxsjZ
        },

		function (data, textStatus) {
		    if (data && data.length > 0) {
		        if (data[0] == "Y") {
		            showDqysbList(data[1]);
		        } else {
		            window.top.alert('消息', data[1], 'warning');
		        }
		    }
		});
    }

}

//显示当期应申报信息列表
function showDqysbList(list) {
    $("#sbxxList").children(0).children(":gt(0)").remove();
    var lis = [];
    bzList = [];
    if (list && list.length > 0) {
        for (var i = 0; i < list.length; i++) {
            bzList.push(list[i].bz);
            lis.push('<tr bgcolor="#FFFFFF">');
            lis.push('<td height="15" align="center" ><a href="javascript:;" onclick="chooseTr(this);showReport(\'' + list[i].tbqk + '\',\'' + list[i].dataFromBz + '\',\'' + list[i].pzxh + '\',\'' + list[i].sbuuid + '\',\'' + list[i].ssqq + '\',\'' + list[i].ssqz + '\')">' + list[i].bbzlmc + '</a></td>');
            lis.push('<td height="15" align="center" ><a href="javascript:;" onclick="chooseTr(this);showFjsWindow(\'' + list[i].pzxh + '\')">' + list[i].fjs + '</a></td>');
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

//首页跳转自动查询
function search() {
    var ssqq = request("ssqq");
    var ssqz = request("ssqz");
    if (ssqq && ssqz) {
        $("#cxsjQ").val(ssqq.substring(0, 7));
        $("#cxsjZ").val(ssqz.substring(0, 7));
        loadZzs2013List();
    }
}

//弹出附加税（一税两费）数据窗
function showFjsWindow(sbxh) {
    var buttons = [];
    window.top.showEasyDialog("/WSSBSL/show_zzs2013Ybnsr_zzsFjsSbxxList.action?sbxh=" + sbxh + "&cxfs=1&wssbtid=" + Math.round(Math.random() * 1000000), {
        title: "附加税（费）申报信息", //标题
        width: 900, //高度
        height: 180, //宽度
        left: ($(window.top).width() - 900) * 0.5, //居中时左边距
        top: ($(window.top).height() - 180) * 0.4, //居中时上边距
        modal: true, //模式窗口
        iconCls: 'icon-save', //图标样式
        minimizable: false, //是否显示最小化按钮
        maximizable: false, //是否显示最大化按钮
        loadingMessage: null, //窗口内容加载时显示信息
        toolbar: null, //窗口工具条
        buttons: buttons, //底部按钮
        doSize: true, //面板创建的时候将被调整和重新布局
        resizable: false //对话框是否可编辑大小
    });
}

//定时自动设置宽度(0.3秒一次)
function autoWidth() {
    $("#cxtjDiv").width($("#cxtjDiv").parent().width());
    $("#cxjgDiv").width($("#cxjgDiv").parent().width());
    setTimeout(autoWidth, 300);
}

//显示报表
function showReport(tbqk, dataFromBz, pzxh, sbuuid, ssqq, ssqz) {
    closeAllTab();
    var isTbBz = "1"; //是否填报标志：1-查询报表
    if (typeof (nsrsbh) == "undefined") {
        window.top.alert('消息', "无法获取必要参数！显示报表失败！请刷新页面重试！", 'warning');
    } else {
        if (tbqk.substring(0, 1) == '1') {
            addTab("主表", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/zzs_xgm/xgmzb.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        if (tbqk.substring(1, 2) == '1') {
            addTab("附表一", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/zzs_xgm/xgmfb1.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid, false);
        }
        /*2016-05-12取消申报
		 if(tbqk.substring(2,3)=='1'){
			addTab("附表四","/WSSBSL/reportJsp/showCxReport.jsp?raq=/zzs_xgm/xgmfb4.raq&nsrsbh="+nsrsbh+"&isTbBz="+isTbBz+"&dataFromBz="+dataFromBz+"&pzxh="+pzxh+"&sbuuid="+sbuuid,false);
		}*/
        if (tbqk.substring(3, 4) == '1') {
            addTab("增值税减免税申报明细表", "/WSSBSL/reportJsp/showCxReport.jsp?raq=/zzs_xgm/zzsJmssbMxb.raq&nsrsbh=" + nsrsbh + "&isTbBz=" + isTbBz + "&dataFromBz=" + dataFromBz + "&pzxh=" + pzxh + "&sbuuid=" + sbuuid + "&ssqq=" + ssqq + "&ssqz=" + ssqz, false);
        }
    }
    selectTab("主表");
    var options = {
        onSelect: function (title) {
            iframeAutoSize();
        }
    };
    tabsOptions(options);
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
        doCurrTabFun("hideInput()"); //为打印而隐藏输入框
        var id = tab.panel('options').id;
        var htmlTxt = window.frames["mainiframe" + id].document.documentElement.outerHTML;
        var bbmc = doCurrTabFun("getBbmc()"); //获取当前页面的报表名称
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