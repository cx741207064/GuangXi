//初始化
$(function () {
    loadDjszList();
});

//查询纳税人税费总认定信息列表
function loadDjszList() {
    $.postJSON("/WSSBSL/do_index_NsrDjSzxxCx_loadNsrszxxInfo.ashx", function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                showDjszList(data[1]);
            } else {
                window.top.alert('消息', data[1], 'warning');
            }
        }
    });
}

//查询纳税人税费总认定信息列表
function showDjszList(mainlist) {
    var lis = [];
    if (mainlist && mainlist.length > 0) {
        for (var i = 0; i < mainlist.length; i++) {
            lis.push('<tr bgcolor="#FFFFFF">');
            lis.push('<td height="15" align="center" >' + getStrNoNull(mainlist[i][0]) + '</td>');
            lis.push('<td height="15" align="center" >' + getStrNoNull(mainlist[i][2]) + '</td>');
            lis.push('<td height="15" align="center" >' + getStrNoNull(mainlist[i][3]) + '</td>');
            lis.push('<td height="15" align="center" >' + getStrNoNull(mainlist[i][4]) + '</td>');
            lis.push('<td height="15" align="center" >' + getStrNoNull(mainlist[i][5]) + '</td>');
            lis.push('<td height="15" align="center" >' + getStrNoNull(mainlist[i][6]) + '</td>');
            lis.push('<td height="15" align="center" >' + formatJsonDateYMD(mainlist[i][7]) + '</td>');
            lis.push('<td height="15" align="center" >' + formatJsonDateYMD(mainlist[i][8]) + '</td>');
            lis.push('</tr>');

        }
    } else {
        lis.push('<tr bgcolor="#FFFFFF"><td height="20" colspan="11" align="center">无记录！</td></tr>');
    }
    $("#tbDjSzList").append(lis.join(""));
}

