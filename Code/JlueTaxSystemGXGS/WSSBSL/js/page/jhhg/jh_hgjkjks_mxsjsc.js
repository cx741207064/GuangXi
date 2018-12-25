//启动时加载
$(function () {
    $(document).click(function () {
        window.parent.iframeAutoSize();
    });
    autoWidth(); //定时自动设置面板宽度
    iframeAutoSize();
    newDate(); //获取当前年月
});

//定时自动设置宽度(0.3秒一次)
function autoWidth() {
    $("#sjscDiv").width($("#sjscDiv").parent().width());
    $("#cxjgDiv").width($("#cxjgDiv").parent().width());
    $("#bsyfcxDiv").width($("#bsyfcxDiv").parent().width());
    $("#bsyfjgDiv").width($("#bsyfjgDiv").parent().width());
    setTimeout(autoWidth, 300);
}

//窗口高度自适应
function iframeAutoSize() {
    var headHeight = 170;
    if ($("#bsyfjgDiv").is(":hidden")) {
        headHeight = 40;
    }
}

//上传按钮方法
function doUploadFile() {
    var uploadFile = $("#uploadFile").val();
    var uploadFilename = $("#uploadFilename").val(getFilenameByFilepath(uploadFile));
    document.all.uploadForm.submit();
}

function getFilenameByFilepath(filepath) {
    if (filepath == null || filepath.length == 0) {
        return "";
    } else {
        return filepath.substring(filepath.lastIndexOf("\\") + 1);
    }
}

//------------------------第一联数据接收结果js-------------------------------------//

//获取当前年月
function newDate() {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    document.getElementById("year").value = year;
    $("#month").val("0" + month);
}

//查询按钮方法
function loadSjjsjgCx() {
    var year = $("#year").val();
    var month = $("#month").val();
    if (year && month) {
        window.top.progress("数据接收结果", "正在提交查询......");
        $.postJSON("/WSSBSL/do_jhhg_Jhhg_doJhhgJhSjjsjgCx.ashx", {
            "year": year,
            "month": month
        },

 		function (data, textStatus) {
 		    window.top.closeProgress();
 		    if (data && data.length > 0) {
 		        if (data[0] == "Y") {
 		            showSjjsjgList(data[1]);
 		        } else {
 		            window.top.alert('消息', data[1], 'warning');
 		        }
 		    }
 		});
    } else {
        window.top.alert('消息', "请选择数据接收结果时间！", 'warning');
    }
}

//显示第一联数据接收结果查询信息列表
function showSjjsjgList(list) {
    $("#jhSjjsjgList").children(0).children(":gt(0)").remove();
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
            lis.push('</tr>');
        }
    } else {
        lis.push('<tr bgcolor="#FFFFFF"><td height="20" colspan="11" align="center">无记录！</td></tr>');
    }
    $("#jhSjjsjgList").append(lis.join(""));
}