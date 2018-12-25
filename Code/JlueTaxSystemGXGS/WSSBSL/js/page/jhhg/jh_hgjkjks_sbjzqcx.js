
//启动时加载
$(function () {
    $(document).click(function () {
        window.parent.iframeAutoSize();
    });
    autoWidth();		//定时自动设置面板宽度
    newDate();			//获取当前年月
});

//定时自动设置宽度(0.3秒一次)
function autoWidth() {
    $("#cxtjDiv").width($("#cxtjDiv").parent().width());
    $("#cxjgDiv").width($("#cxjgDiv").parent().width());
    setTimeout(autoWidth, 300);
}

//获取当前年月
function newDate() {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    document.getElementById("year").value = year;
    $("#month").val("0" + month);
}

//查询按钮方法
function loadSbjzq() {
    var year = $("#year").val();
    var month = $("#month").val();
    if (year && month) {
        window.top.progress("纳税申报截止期", "正在提交信息查询......");
        $.postJSON("/WSSBSL/do_jhhg_Jhhg_doJhhgNssbjzqCx.ashx",
			{ "year": year, "month": month },
			function (data, textStatus) {
			    window.top.closeProgress();
			    if (data && data.length > 0) {
			        if (data[0] == "Y") {
			            var jzq = parseInt(data[1].rq);
			            $("#nssbjzq").val(jzq + 2 + "日");
			            $("#jhJgTzsZhscrq").val(jzq + "日");
			            $("#jhJgTzsWsqrjzq").val(jzq - 1 + "日");
			        } else {
			            window.top.alert('消息', data[1], 'warning');
			        }
			    }
			}
		);
    } else {
        window.top.alert('消息', "请选择纳税申报申报截止期时间！", 'warning');
    }
}

//窗口宽度及高度自适应
function iframeAutoSize() {
    var headHeight = $("#cxtjDiv").height() + 5;
    alert("headHeight=" + headHeight);
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
