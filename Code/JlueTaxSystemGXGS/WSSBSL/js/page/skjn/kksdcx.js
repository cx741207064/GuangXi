
$(function () {
    showKksdcxList();
});

//执行查询
function showKksdcxList() {
    $.postJSON("/WSSBSL/do_skjn_Skjn_showKksdcxList.ashx", function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                var kksdcxList = data[1];
                var lis = [];
                lis.push('<tr bgcolor="#E0ECFF" style="font-weight:bold">');
                lis.push('<td height="20" align="center" >征收项目</td>');
                lis.push('<td height="20" align="center" >凭证种类</td>');
                lis.push('<td height="20" align="center" >征收品目</td>');
                lis.push('<td height="20" align="center" >所属期起</td>');
                lis.push('<td height="20" align="center" >所属期止</td>');
                lis.push('<td height="20" align="center" >税额</td>');
                lis.push('<td height="20" align="center" >应征发生日期</td>');
                lis.push('<td height="20" align="center" >扣款状态</td>');
                lis.push('</tr>');
                if (kksdcxList && kksdcxList.length > 0) {
                    for (var i = 0; i < kksdcxList.length; i++) {
                        lis.push('<tr bgcolor="#FFFFFF">');
                        lis.push('<td height="20" align="center" >' + kksdcxList[i][0] + '</td>');
                        lis.push('<td height="20" align="center" >' + kksdcxList[i][1] + '</td>');
                        lis.push('<td height="20" align="center" >' + kksdcxList[i][2] + '</td>');
                        lis.push('<td height="20" align="center" >' + kksdcxList[i][3] + '</td>');
                        lis.push('<td height="20" align="center" >' + kksdcxList[i][4] + '</td>');
                        lis.push('<td height="20" align="center" >' + kksdcxList[i][5] + '</td>');
                        lis.push('<td height="20" align="center" >' + kksdcxList[i][6] + '</td>');
                        lis.push('<td height="20" align="center" >' + getKkzt(kksdcxList[i][7]) + '</td>');
                        lis.push('</tr>');
                    }
                } else {
                    lis.push('<tr bgcolor="#FFFFFF"><td height="20" colspan="8" align="center">无记录！</td></tr>');
                }
                $("#kksdcxList").html(lis.join(""));
                $.parser.parse($("#kksdcxList").parent());
                window.parent.iframeAutoSize();//窗口大小自适应
            } else {
                window.top.alert('消息', data[1], 'warning');
            }
        } else {
            window.top.alert('消息', "无法加载扣款锁定记录！", 'error');
        }
    });
}

//判断扣款状态
function getKkzt(kkztmc) {
    if (kkztmc == "扣款锁定") {
        return "扣款锁定（处理中）";
    } else {
        return kkztmc;
    }
}
