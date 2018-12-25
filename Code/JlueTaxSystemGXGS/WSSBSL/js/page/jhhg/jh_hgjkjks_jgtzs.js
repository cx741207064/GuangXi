//启动时加载
$(function () {
    $(document).click(function () {
        window.parent.iframeAutoSize();
    });
    autoWidth(); //定时自动设置面板宽度
    newDate(); //获取当前年月
});

//定时自动设置宽度(0.3秒一次)
function autoWidth() {
    $("#tzsXzqrDiv").width($("#tzsXzqrDiv").parent().width());
    $("#xzqrxxDiv").width($("#xzqrxxDiv").parent().width());
    $("#tzsXzDiv").width($("#tzsXzDiv").parent().width());
    setTimeout(autoWidth, 300);
}

//获取当前年月
function newDate() {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth();
    var xzYear = myDate.getFullYear();
    var xzMonth = myDate.getMonth();
    document.getElementById("year").value = year;
    document.getElementById("xzYear").value = xzYear;
    $("#month").val("0" + month);
    $("#xzMonth").val("0" + xzMonth);
}

//执行通知书查询下载
function loadTzsCx() {
    if (confirm("稽核结果通知书每月只能生成一次，是否确认操作？") == true) {
        document.queryForm.action = "/WSSBSL/doJhhgTzsXzCx.action";
        document.queryForm.submit();
    }
}

//执行通知书下载确认查询
function loadTzsXzqrCx() {
    if (confirm("稽核结果通知书每月只能确认下载一次（确认下载后，未比对的稽核海关进口增值税缴款书将不能在本月抵扣），是否确认操作?") == true) {
        var year = $("#year").val();
        var month = $("#month").val();
        if (year && month) {
            window.top.progress("稽核结果通知书", "正在下载确认......");
            $.postJSON("/WSSBSL/do_jhhg_Jhhg_doJhhgTzsXzqrCx.action", {
                "year": year,
                "month": month
            },

 			function (data, textStatus) {
 			    window.top.closeProgress();
 			    if (data && data.length > 0) {
 			        if (data[0] == "Y") {
 			            showTzsXzqrList(data[1]);
 			        } else {
 			            window.top.alert('消息', data[1], 'warning');
 			        }
 			    }
 			});
        } else {
            window.top.alert('消息', "请选择下载确认时间！", 'warning');
        }
    }
}

function showTzsXzqrList(list) {
    $("#tzsXzqrList").children(0).children(":gt(0)").remove();
    var lis = [];
    if (list && list.length > 0) {
        for (var i = 0; i < list.length; i++) {
            lis.push('<tr bgcolor="#FFFFFF">');
            lis.push('<td height="19" align="center" ><font color="red">' + list[i].errorMsg + '</font></td>');
            lis.push('</tr>');
        }
    } else {
        lis.push('<tr bgcolor="#FFFFFF"><td height="20" colspan="11" align="center">无记录！</td></tr>');
    }
    $("#tzsXzqrList").append(lis.join(""));
}