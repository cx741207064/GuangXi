//上传按钮方法
function uploadFj() {
    //select研发费用加计扣除所属期年度
    var yffyjjkcSsqnd = $("#yffyjjkcSsqnd").val();
    //当前所属期年度
    var dqSsqnd = new Date().getFullYear() - 1;
    var uploadFile = $("#uploadFile").val();
    //select附件对应的值
    var uploadFjName = $("#yffyjjkcBbmc").val();
    $("#uploadFjName").val(uploadFjName);
    $("#uploadFjSsqnd").val(yffyjjkcSsqnd);

    if (uploadFjName == "") {
        window.top.alert('错误', "请选择报表。", 'warning');
        return false;
    }
    if (yffyjjkcSsqnd > dqSsqnd) {
        window.top.alert('错误', "您选择的当前所属期年度不允许超过" + dqSsqnd + "年。", 'warning');
        return false;
    }
    if (uploadFile == "") {
        window.top.alert('错误', "请选择文件。", 'warning');
        return false;
    }
    if (uploadFile.indexOf('.xls') == -1) {
        window.top.alert('错误', "文件格式不正确，请选择上传Excel文件(后缀名.xls)。", 'warning');
        return false;
    }
    $('#uploadForm').form('submit', {
        url: "/WSSBSL/do_scxz_Scxz_doScxzYffyjjkcSc.action",
        onSubmit: function (param) {
            window.top.progress("正在上传", "正在上传，请稍候...");
        },
        success: function (data) {
            var data = eval('(' + data + ')'); // change the JSON string to javascript object   
            if (data[0] == "Y") {
                window.top.alert('消息', data[1], 'info');
            } else {
                window.top.alert('错误', data[1], 'error');
                $("#uploadFile").val("");
            }
            window.top.closeProgress();
        }
    });
}