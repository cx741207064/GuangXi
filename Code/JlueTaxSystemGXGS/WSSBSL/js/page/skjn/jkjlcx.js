//加载往期税款缴纳记录
function loadWqjkjlList() {
    if (checkdata()) {
        $("#wqjkjlList").children(0).children(":gt(0)").remove();
        $.postJSON("/WSSBSL/do_skjn_Skjn_loadWqjkjlList.ashx", {
            "zsxmDm": $("#zsxmDm").val(),
            "cxsjQ": $("#cxsjQ").val(),
            "cxsjZ": $("#cxsjZ").val()
        }, function (data, textStatus) {
            if (data && data.length > 0) {
                if (data[0] == "Y") {
                    var wqjkjlList = data[1];
                    var lis = [];
                    lis.push('<tr>');
                    lis.push('<th bgcolor="#E0ECFF" height="20" align="center" >征收项目名称</td>');
                    lis.push('<th bgcolor="#E0ECFF" align="center" >应征凭证种类名称</td>');
                    lis.push('<th bgcolor="#E0ECFF" align="center" >征收品目名称</td>');
                    lis.push('<th bgcolor="#E0ECFF" width="80" align="center" >所属期起</td>');
                    lis.push('<th bgcolor="#E0ECFF" width="80" align="center" >所属期止</td>');
                    lis.push('<th bgcolor="#E0ECFF" width="100" align="center" >税额</td>');
                    lis.push('</tr>');
                    if (wqjkjlList && wqjkjlList.length > 0) {
                        for (var i = 0; i < wqjkjlList.length; i++) {
                            lis.push('<tr bgcolor="#FFFFFF">');
                            lis.push('<td height="20" align="center" >' + wqjkjlList[i].zsxmMc + '</td>');
                            lis.push('<td height="20" align="center" >' + wqjkjlList[i].pzzlMc + '</td>');
                            lis.push('<td height="20" align="center" >' + wqjkjlList[i].zspmMc + '</td>');
                            lis.push('<td height="20" align="center" >' + formatJsonDateYMD(wqjkjlList[i].sssqQ) + '</td>');
                            lis.push('<td height="20" align="center" >' + formatJsonDateYMD(wqjkjlList[i].sssqZ) + '</td>');
                            lis.push('<td height="20" align="center" >' + wqjkjlList[i].se + '</td>');
                            lis.push('</tr>');
                        }
                    } else {
                        lis.push('<tr bgcolor="#FFFFFF"><td height="20" colspan="7" align="center">无记录！</td></tr>');
                    }
                    $("#wqjkjlList").html(lis.join(""));
                    $.parser.parse($("#wqjkjlList").parent());
                } else {
                    window.top.alert('消息', data[1], 'error');
                }
            } else {
                window.top.alert('消息', "无法加载往期税款缴纳记录！", 'error');
            }
        });
    }
}

//数据检查
function checkdata() {
    var cxsjQ = $("#cxsjQ").val();
    var cxsjZ = $("#cxsjZ").val();
    var reg = /\d{4}-\d{2}/;
    if (cxsjQ == "" || cxsjZ == "") {
        window.top.alert('消息', "请选择【所属时期起】和【所属时期止】！", 'warning');
        return false;
    } else if (!reg.test(cxsjQ) || !reg.test(cxsjZ)) {
        window.top.alert("消息", "输入日期格式不正确，请输入类似“2014-06”的格式！", "warning");
        return false;
    }
    return true;
}