
//执行修改密码
function doEditPwd() {
    if (checkdata()) {

        window.top.alert('消息', '修改成功(注：模拟系统此处为模拟操作)！', 'warning');
        window.top.closeEasyDialog();
        //var oldpwd = $("#oldpwd").val();
        //var newpwd = $("#password1").val();
        //$.postJSON("/WSSBSL/do_index_NsrglLogin_doEditPwd.action", { "oldpwd": oldpwd, "newpwd": newpwd }, function (data, textStatus) {
        //    if (data && data.length > 0) {
        //        window.top.alert('消息', data[1], 'warning', function () {
        //            if (data[0] == "Y") {
        //                window.top.closeEasyDialog();
        //            }
        //        });
        //    }
        //});
    }
}

//数据校验
function checkdata() {
    if ($("#frmXgmm").form('validate')) {
        var password1 = $("#password1").val();
        var password2 = $("#password2").val();
        if (password1 != password2) {
            window.top.alert('消息', '两次输入的新密码不一致！', 'warning');
            return false;
        }
        return true;
    }
    return false;
}