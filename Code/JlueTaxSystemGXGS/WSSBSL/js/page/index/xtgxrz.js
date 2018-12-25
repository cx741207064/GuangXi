//初始化纳税人基本信息
$(function () {
    loadXtgxrzList();
});

//加载系统更新日志
function loadXtgxrzList() {
    $.postJSON("/WSSBSL/do_index_Index_loadXtgxrzList.ashx?wssbtid=" + Math.round(Math.random() * 1000000), function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                showGxrzList(data[1]);
            } else {
                window.top.alert('消息', data[1], 'warning');
            }
        }
    });
}

/**
 * 显示更新日志列表
 */
function showGxrzList(dataList) {
    if (dataList && dataList.length > 0) {
        var lis = [];
        for (var i = 0; i < dataList.length; i++) {
            lis.push('<div style="margin-left:20px;">');
            lis.push('<div><br><B>发布时间：</B>' + formatJsonDate(dataList[i][0]) + '</div>');
            lis.push('<div><B>更新内容：</B><br></div>');
            lis.push('<div>' + dataList[i][2] + '</div>');
            lis.push('</div>');
        }
        $("#gxrzList").html(lis.join(""));
        uParse("#gxrzList", {
            rootPath: "/WSSBSL/"
        });
    }
}
