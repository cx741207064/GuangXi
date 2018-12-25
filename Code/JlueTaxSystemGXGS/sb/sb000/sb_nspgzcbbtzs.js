function init(resData) {
    nsrzcbbtzsGrid = pc.getResData("nsrzcbbtzsGrid", resData);
    if (nsrzcbbtzsGrid == null || nsrzcbbtzsGrid == ""
			|| nsrzcbbtzsGrid == undefined) {
        var box = this.parent[this.name];
        swordAlert("没有相应的自查补报通知书", {
            onClose: function () {

                // 调用主页面的方法，将下拉框初始化为正常状态
                // box.options.param.setSel();
                // 最新要求，当没有自查补报通知书的时候也能进行自查补报，也就说以前的要返回正常状态的方法要改成和能够找到自查补报通知书一样的处理方式
                // 当没有的时候就直接填0，在后台进行判断，如果是0同样不存
                box.options.param.setNsrzcbbtzsUUID("0");
                box.close();

            }
        });
        return;
    }

    if (nsrzcbbtzsGrid.trs == null || nsrzcbbtzsGrid.trs == "" || nsrzcbbtzsGrid.trs == undefined || nsrzcbbtzsGrid.trs.length == 0) {
        var box = this.parent[this.name];
        swordAlert("没有相应的自查补报通知书", {
            onClose: function () {

                //调用主页面的方法，将下拉框初始化为正常状态
                //			box.options.param.setSel();
                //最新要求，当没有自查补报通知书的时候也能进行自查补报，也就说以前的要返回正常状态的方法要改成和能够找到自查补报通知书一样的处理方式
                //当没有的时候就直接填0，在后台进行判断，如果是0同样不存
                box.options.param.setNsrzcbbtzsUUID("0");
                box.close();


            }
        });
        return;
    }
}
function initOnOk() {
    var box = this.parent[this.name];// 集成环境下使用
    // 调用主页面的方法，将下拉框初始化为正常状态
    // box.options.param.setSel();
    // 最新要求，当没有自查补报通知书的时候也能进行自查补报，也就说以前的要返回正常状态的方法要改成和能够找到自查补报通知书一样的处理方式
    // 当没有的时候就直接填0，在后台进行判断，如果是0同样不存
    box.options.param.setNsrzcbbtzsUUID("0");
    box.close();
}
// 获取自查补报通知书详细信息
function linkCk() {

}

// 将选择的通知书uuid回写到申报页面
function qd() {
    var box = this.parent[this.name];// 集成环境下使用
    var checkBoxData = $w('nsrzcbbtzsGrid').getCheckedData("xz");

    debugger;
    // 将uuid解析后回传
    if (checkBoxData != null && checkBoxData != undefined && checkBoxData != ""
			&& checkBoxData.trs != null && checkBoxData.trs != undefined) {
        var nsrzcbbtzsGridUUid = checkBoxData.trs[0].tds.zxbztzsuuid.value;
        if (nsrzcbbtzsGridUUid != null && nsrzcbbtzsGridUUid != "") {
            // 主页面的回调方法
            box.options.param.setNsrzcbbtzsUUID(nsrzcbbtzsGridUUid);
            box.close();
        }
    } else {
        tc();
    }
}

function checkMX() {
    var gird = $w('nsrzcbbtzsGrid');
    var row = $w('nsrzcbbtzsGrid').getCheckedRowData();
    window.row = row;
    // swordAlertIframe('../../sb000/sb033/sb_nspgzcbbtzsAlertPrint.html',
    // {titleName:'自查补报通知书',width: 850,height:450,param:window});
    swordAlertIframe('../../sb/sb000/sb_nspgzcbbtzsAlertPrint.html', {
        titleName: '自查补报通知书',
        width: 850,
        height: 450,
        param: window
    });
}

// 退出功能实现
function tc() {
    var box = this.parent[this.name];// 集成环境下使用
    // var box = top[window.name];
    // 调用主页面的方法，将下拉框初始化为正常状态
    // box.options.param.setSel();
    // 最新要求，当没有自查补报通知书的时候也能进行自查补报，也就说以前的要返回正常状态的方法要改成和能够找到自查补报通知书一样的处理方式
    box.options.param.setNsrzcbbtzsUUID("0");
    box.close();
}