var tsxxList;

$(function () {
    //加载当期未缴税款列表
    loadDqwjskList();
});

//加载当期未缴税款列表
function loadDqwjskList() {
    $.postJSON("/WSSBSL/do_skjn_Skjn_loadDqwjskList.ashx", function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                var dqwjskList = data[1];
                var lis = [];
                lis.push('<tr>');
                lis.push('	<th bgcolor="#E0ECFF" height="20" align="center" >征收项目名称</td>');
                lis.push('	<th bgcolor="#E0ECFF" align="center" >应征凭证种类名称</td>');
                lis.push('	<th bgcolor="#E0ECFF" align="center" >征收品目名称</td>');
                lis.push('	<th bgcolor="#E0ECFF" width="80" align="center" >所属期起</td>');
                lis.push('	<th bgcolor="#E0ECFF" width="80" align="center" >所属期止</td>');
                lis.push('	<th bgcolor="#E0ECFF" width="100" align="center" >税额</td>');
                lis.push('	<th bgcolor="#E0ECFF" width="100" align="center" >操作</td>');
                lis.push('</tr>');
                if (dqwjskList && dqwjskList.length > 0) {
                    for (var i = 0; i < dqwjskList.length; i++) {
                        lis.push('<tr bgcolor="#FFFFFF">');
                        lis.push('<td height="20" align="center" >' + dqwjskList[i].zsxmMc + '</td>');
                        lis.push('<td height="20" align="center" >' + dqwjskList[i].pzzlMc + '</td>');
                        lis.push('<td height="20" align="center" >' + dqwjskList[i].zspmMc + '</td>');
                        lis.push('<td height="20" align="center" >' + formatJsonDateYMD(dqwjskList[i].sssqQ) + '</td>');
                        lis.push('<td height="20" align="center" >' + formatJsonDateYMD(dqwjskList[i].sssqZ) + '</td>');
                        lis.push('<td height="20" align="center" >' + dqwjskList[i].se + '</td>');
                        lis.push('<td height="20" align="center" >');
                        lis.push('<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:\'icon-redo\'" ');
                        lis.push('		onclick="doSdkk(\'' + dqwjskList[i].yzpzxh + '\',\'' + dqwjskList[i].yzpzmxxh + '\',\'' + dqwjskList[i].zsxh + '\',\'' + dqwjskList[i].se + '\',\'' + dqwjskList[i].zsxmDm + '\',\'' + dqwjskList[i].yzpzzlDm + '\',\'' + dqwjskList[i].zspmDm + '\',\'' + formatJsonDateYMD(dqwjskList[i].sssqQ) + '\',\'' + formatJsonDateYMD(dqwjskList[i].sssqZ) + '\')">立即缴款</a>');
                        lis.push('</td>');
                        lis.push('</tr>');
                    }
                } else {
                    lis.push('<tr bgcolor="#FFFFFF"><td height="20" colspan="11" align="center">无记录！</td></tr>');
                }
                $("#dqwjskList").html(lis.join(""));
                $.parser.parse($("#dqwjskList").parent());
            } else {
                window.top.alert('消息', data[1], 'error');
            }
        } else {
            window.top.alert('消息', "无法加载当期未缴税款列表！", 'error');
        }
    });
}

//手动扣款
function doSdkk(yzpzxh, yzpzmxxh, zsuuid, se, zsxmDm, yzpzzlDm, zspmDm, sssqQ, sssqZ) {
    window.top.progress("正在扣款", "正在执行扣款......");
    $.postJSON("/WSSBSL/do_skjn_Skjn_sdkk.action", {
        "yzpzxh": yzpzxh,
        "yzpzmxxh": yzpzmxxh,
        "zsuuid": zsuuid,
        "se": se,
        "zsxmDm": zsxmDm,
        "yzpzzlDm": yzpzzlDm,
        "zspmDm": zspmDm,
        "sssqQ": sssqQ,
        "sssqZ": sssqZ
    }, function (data, textStatus) {
        window.top.closeProgress();
        if (data && data.length > 0) {
            tsxxList = data[1];
            showTsxxListWindow();
            if (data[0] == "Y") {
                loadDqwjskList();
            }
        } else {
            window.top.alert('错误', '网络通迅异常，扣款失败！', 'error');
        }
    });
}

//给弹出的信息页面调用，获取提示信息
function getTsxxList() {
    return tsxxList;
}

//弹出信息显示窗口
function showTsxxListWindow() {
    window.top.showEasyDialog('/WSSBSL/show_common_tsxx.aspx', {
        title: '反馈信息', //标题
        width: 600, //宽度
        height: 350, //高度
        left: ($(window.top).width() - 600) * 0.5, //居中时左边距
        top: ($(window.top).height() - 350) * 0.4, //居中时上边距
        modal: true, //模式窗口
        iconCls: 'icon-help', //图标样式
        collapsible: true, //是否显示折叠按钮
        minimizable: false, //是否显示最小化按钮
        maximizable: false, //是否显示最大化按钮
        loadingMessage: null, //窗口内容加载时显示信息
        toolbar: null, //窗口工具条
        buttons: null, //底部按钮
        doSize: true, //面板创建的时候将被调整和重新布局
        resizable: true //对话框是否可编辑大小
    });
}