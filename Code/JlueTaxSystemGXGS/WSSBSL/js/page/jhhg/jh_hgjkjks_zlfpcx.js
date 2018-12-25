//启动时加载
$(function () {
    $(document).click(function () {
        window.parent.iframeAutoSize();
    });
    autoWidth(); //定时自动设置面板宽度
});

//定时自动设置宽度(0.3秒一次)
function autoWidth() {
    $("#cxjgDiv").width($("#cxjgDiv").parent().width());
    setTimeout(autoWidth, 300);
}

//执行滞留发票查询
function loadZlfpCx() {
    window.top.progress("滞留发票", "正在提交信息查询......");
    $.postJSON("/WSSBSL/do_jhhg_Jhhg_doJhhgZlfpCx.ashx", {},

 	function (data, textStatus) {
 	    window.top.closeProgress();
 	    if (data && data.length > 0) {
 	        if (data[0] == "Y") {
 	            alert(data[1]);
 	            showZlfpxxList(data[2]);
 	        } else {
 	            window.top.alert('消息', data[1], 'warning');
 	        }
 	    }
 	});
}

function showZlfpxxList(list) {
    $("#zlfpList").children(0).children(":gt(0)").remove();
    var lis = [];
    var listSize = 0;
    if (list && list.length > 0) {
        for (var i = 0; i < list.length; i++) {
            listSize = listSize + 1;
            lis.push('<tr bgcolor="#FFFFFF">');
            lis.push('<td height="15" align="center" >' + listSize + "</td>");
            lis.push('<td height="15" align="center" >' + list[i].jkshm + '</td>');
            lis.push('<td height="15" align="center" >' + list[i].nsrsbh + '</td>');
            lis.push('<td height="15" align="center" >' + list[i].nsrmc + '</td>');
            lis.push('<td height="15" align="center" >' + list[i].skje + '</td>');
            lis.push('<td height="15" align="center" >' + list[i].tfrq + '</td>');
            lis.push('<td height="15" align="center" >' + list[i].bsrq + '</td>');
            lis.push('<td height="15" align="center" >' + list[i].bsyf + '</td>');
            lis.push('<td height="15" align="center" >' + list[i].bswjbs + '</td>');
            lis.push('</tr>');
        }
    } else {
        lis.push('<tr bgcolor="#FFFFFF"><td height="20" colspan="11" align="center">无记录！</td></tr>');
    }
    $("#zlfpList").append(lis.join(""));
}