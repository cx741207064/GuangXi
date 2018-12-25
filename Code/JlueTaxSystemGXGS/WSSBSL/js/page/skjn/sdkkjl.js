$(function () {
    $("#cxsjQ").val(getCurrMonthFirst());
    $("#cxsjZ").val(getCurrMonthLast());
    loadSdkkjlList();
});

//加载手动扣款记录
function loadSdkkjlList() {
    if (checkdata()) {
        $("#sdkkjlList").children(0).children(":gt(0)").remove();
        $.postJSON("/WSSBSL/do_skjn_Skjn_loadSdkkjlList.ashx", {
            "cxsjQ": $("#cxsjQ").val(),
            "cxsjZ": $("#cxsjZ").val()
        }, function (data, textStatus) {
            if (data && data.length > 0) {
                if (data[0] == "Y") {
                    var sdkkjlList = data[1];
                    var lis = [];
                    lis.push('<tr>');
                    lis.push('<th bgcolor="#E0ECFF" height="20" align="center" >征收项目名称</td>');
                    lis.push('<th bgcolor="#E0ECFF" align="center" >应征凭证种类名称</td>');
                    lis.push('<th bgcolor="#E0ECFF" align="center" >征收品目名称</td>');
                    lis.push('<th bgcolor="#E0ECFF" width="80" align="center" >所属期起</td>');
                    lis.push('<th bgcolor="#E0ECFF" width="80" align="center" >所属期止</td>');
                    lis.push('<th bgcolor="#E0ECFF" width="100" align="center" >税额</td>');
                    lis.push('<th bgcolor="#E0ECFF" width="100" align="center" >扣款日期</td>');
                    lis.push('<th bgcolor="#E0ECFF" width="80" align="center" >扣款状态</td>');
                    lis.push('<th bgcolor="#E0ECFF" align="center" >扣款结果</td>');
                    lis.push('</tr>');
                    if (sdkkjlList && sdkkjlList.length > 0) {
                        for (var i = 0; i < sdkkjlList.length; i++) {
                            lis.push('<tr bgcolor="#FFFFFF">');
                            lis.push('<td height="20" align="center" >' + sdkkjlList[i].zsxmMc + '</td>');
                            lis.push('<td height="20" align="center" >' + sdkkjlList[i].yzpzzlMc + '</td>');
                            lis.push('<td height="20" align="center" >' + sdkkjlList[i].zspmMc + '</td>');
                            lis.push('<td height="20" align="center" >' + formatJsonDateYMD(sdkkjlList[i].ssqq) + '</td>');
                            lis.push('<td height="20" align="center" >' + formatJsonDateYMD(sdkkjlList[i].ssqz) + '</td>');
                            lis.push('<td height="20" align="center" >' + sdkkjlList[i].se + '</td>');
                            lis.push('<td height="20" align="center" >' + formatJsonDate(sdkkjlList[i].kkrq) + '</td>');
                            lis.push('<td height="20" align="center" >' + getKkztMc(sdkkjlList[i].kkzt) + '</td>');
                            lis.push('<td height="20" align="center" >' + sdkkjlList[i].kkjg + '</td>');
                            lis.push('</tr>');
                        }
                    } else {
                        lis.push('<tr bgcolor="#FFFFFF"><td height="20" colspan="9" align="center">无记录！</td></tr>');
                    }
                    $("#sdkkjlList").html(lis.join(""));
                    $.parser.parse($("#sdkkjlList").parent());
                } else {
                    window.top.alert('消息', data[1], 'error');
                }
            } else {
                window.top.alert('消息', "无法加载手动扣款记录！", 'error');
            }
        });
    }
}

//根据扣款状态代码获取扣款状态名称
function getKkztMc(kkzt) {
    if (kkzt == "0") {
        return "正在扣款";
    } else if (kkzt == "1") {
        return "扣款成功";
    } else if (kkzt == "2") {
        return "扣款失败";
    }
    return "";
}

//数据检查
function checkdata() {
    var cxsjQ = $("#cxsjQ").val();
    var cxsjZ = $("#cxsjZ").val();
    var reg = /\d{4}-\d{2}/;
    if (cxsjQ == "" || cxsjZ == "") {
        window.top.alert('消息', "请选择【扣款日期起】和【扣款日期止】！", 'warning');
        return false;
    } else if (!reg.test(cxsjQ) || !reg.test(cxsjZ)) {
        window.top.alert("消息", "输入日期格式不正确，请输入类似“2014-06”的格式！", "warning");
        return false;
    }
    return true;
}