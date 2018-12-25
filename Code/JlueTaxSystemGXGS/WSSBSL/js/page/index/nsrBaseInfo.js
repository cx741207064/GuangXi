//初始化纳税人基本信息
$(function () {
    $('#nsrxxTb').datagrid({
        title: '纳税人基本信息',
        columns: [[
            { field: "id", title: '', width: 200, align: 'right' },
            { field: "text", title: '', width: 500 }
        ]],
        singleSelect: true,
        autoRowHeight: false,
        width: 700,
        height: 450
    });
    loadNsrInfo();
});

//加载纳税人基本信息
function loadNsrInfo() {
    $.postJSON("/WSSBSL/do_index_NsrBaseInfo_loadNsrxxInfo.ashx", function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                showNsrxxList(data[1]);
            } else {
                window.top.alert('消息', data[1], 'warning');
            }
        }
    });
}

function showNsrxxList(nsrlist) {
    $("#nsrsbh").val(nsrlist[0]);
    $("#nsrmc").val(nsrlist[1]);
    $("#yh_mc").val(nsrlist[2]);
    $("#yhzh").val(nsrlist[3]);
    $("#fddbrmc").val(nsrlist[4]);
    $("#djzclx_mc").val(nsrlist[5]);
    $("#scjyd_yb").val(nsrlist[6]);
    $("#swjg_mc").val(nsrlist[7]);
    $("#hy_mc").val(nsrlist[8]);
    $("#sykjzd_mc").val(nsrlist[9]);
    $("#zcdz").val(nsrlist[10]);
    $("#scjydz").val(nsrlist[11]);
}
