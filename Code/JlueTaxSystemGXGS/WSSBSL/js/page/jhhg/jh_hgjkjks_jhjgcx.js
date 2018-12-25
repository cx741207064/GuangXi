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
    $("#cxtjDiv").width($("#cxtjDiv").parent().width());
    $("#bsyfjgDiv").width($("#bsyfjgDiv").parent().width());
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

//根据稽核结果判断查询
function loadJhjgCx() {
    var jhjgmx = $("#jhjgmx").val();
    if (jhjgmx == 'bsyh') {
        loadBsyfCx();
    } else if (jhjgmx = 'jhyh') {
        loadJhyfCx();
    }
}

//执行报税月份查询
function loadBsyfCx() {
    var year = $("#year").val();
    var month = $("#month").val();
    if (year && month) {
        window.top.progress("报税月份", "正在提交信息查询......");
        $.postJSON("/WSSBSL/do_jhhg_Jhhg_doJhhgJhjgmxBsyfCx.ashx", {
            "year": year,
            "month": month
        },

 		function (data, textStatus) {
 		    window.top.closeProgress();
 		    if (data && data.length > 0) {
 		        if (data[0] == "Y") {
 		            showJhjgmxBsyfList(data[1]);
 		        } else {
 		            window.top.alert('消息', data[1], 'warning');
 		        }
 		    }
 		});
    } else {
        window.top.alert('消息', "请选择报税月份查询时间！", 'warning');
    }
}

//执行稽核月份查询
function loadJhyfCx() {
    var year = $("#year").val();
    var month = $("#month").val();
    if (year && month) {
        window.top.progress("稽核月份", "正在提交信息查询......");
        $.postJSON("/WSSBSL/do_jhhg_Jhhg_doJhhgJhjgmxJhyfCx.action", {
            "year": year,
            "month": month
        },

 		function (data, textStatus) {
 		    window.top.closeProgress();
 		    if (data && data.length > 0) {
 		        if (data[0] == "Y") {
 		            showJhjgmxJhyfList(data[1]);
 		        } else {
 		            window.top.alert('消息', data[1], 'warning');
 		        }
 		    }
 		});
    } else {
        window.top.alert('消息', "请选择稽核月份查询时间！", 'warning');
    }
}

//显示稽核结果明细	报税月份		查询信息列表
function showJhjgmxBsyfList(list) {
    $("#jhjgmxList").children(0).children(":gt(0)").remove();
    var lis = [];
    var listSize = 0;
    if (list && list.length > 0) {
        for (var i = 0; i < list.length; i++) {
            listSize = listSize + 1;
            lis.push('<tr bgcolor="#FFFFFF">');
            lis.push('<td height="15" align="center" >' + listSize + "</td>");
            lis.push('<td height="15" align="center" >' + list[i].jkshm + '</td>');
            lis.push('<td height="15" align="center" >' + list[i].skje + '</td>');
            lis.push('<td height="15" align="center" >' + list[i].tfrq + '</td>');
            lis.push('<td height="15" align="center" >' + getBdlxByDm(list[i].bdlx) + '</td>');
            lis.push('<td height="15" align="center" >' + getJhjgByDm(list[i].jhjg) + '</td>');
            lis.push('<td height="15" align="center" >' + getBflxByDm(list[i].bflx) + '</td>');
            lis.push('</tr>');
        }
    } else {
        lis.push('<tr bgcolor="#FFFFFF"><td height="20" colspan="11" align="center">无记录！</td></tr>');
    }
    $("#jhjgmxList").append(lis.join(""));
}

//显示稽核结果明细	稽核月份		查询信息列表
function showJhjgmxJhyfList(list) {
    $("#jhjgmxList").children(0).children(":gt(0)").remove();
    var lis = [];
    var listSize = 0;
    if (list && list.length > 0) {
        for (var i = 0; i < list.length; i++) {
            listSize = listSize + 1;
            lis.push('<tr bgcolor="#FFFFFF">');
            lis.push('<td height="15" align="center" >' + listSize + "</td>");
            lis.push('<td height="15" align="center" >' + list[i].jkshm + '</td>');
            lis.push('<td height="15" align="center" >' + list[i].skje + '</td>');
            lis.push('<td height="15" align="center" >' + list[i].tfrq + '</td>');
            lis.push('<td height="15" align="center" >' + getBdlxByDm(list[i].bdlx) + '</td>');
            lis.push('<td height="15" align="center" >' + getJhjgByDm(list[i].jhjg) + '</td>');
            lis.push('<td height="15" align="center" >' + getBflxByDm(list[i].bflx) + '</td>');
            lis.push('</tr>');
        }
    } else {
        lis.push('<tr bgcolor="#FFFFFF"><td height="20" colspan="11" align="center">无记录！</td></tr>');
    }
    $("#jhjgmxList").append(lis.join(""));
}


// 根据比对类型代码获取比对类型名称
function getBdlxByDm(bdlxDm) {
    if (bdlxDm == "0") {
        return "不比对";
    } else if (bdlxDm == "4") {
        return "一四联比对";
    } else {
        return "";
    }
}


//根据稽核结果类型代码获取稽核结果类型名称
function getJhjgByDm(jhjgDm) {
    if (jhjgDm == "0") {
        return "留待继续比对";
    } else if (jhjgDm == "1") {
        return "相符";
    } else if (jhjgDm == "2") {
        return "不符";
    } else if (jhjgDm == "3") {
        return "缺联";
    } else if (jhjgDm == "4") {
        return "重号";
    } else {
        return "";
    }
}


// 根据不符类型代码获取不符类型名称
function getBflxByDm(bflxDm) {
    if (bflxDm == "0") {
        return "非不符";
    } else if (bflxDm == "1") {
        return "税款金额不符";
    } else if (bflxDm == "2") {
        return "填发日期不符";
    }
}