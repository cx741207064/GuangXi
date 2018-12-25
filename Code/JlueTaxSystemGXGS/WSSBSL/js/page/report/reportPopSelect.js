
//判断并显示数据选择层
function showSelectPop(tdId, parentDid, currColno, tablename, currSc) {
    var obList = getColRowFromTn(tablename);
    if (obList != null && obList.length > 0) {
        for (var i = 0; i < obList.length; i++) {
            var pop = obList[i];
            if (doCheckPop(pop, parentDid, currColno, currSc)) {
                //弹出选择窗口
                showChooseWindow(pop, tdId, tablename);
                break;
            }
        }
    }
}

//由报表名称获取需要弹出选择窗口的行列范围
function getColRowFromTn(tn) {
    var obList = new Array();
    //表一 关联关系表
    /*if(tn=="WBJK_SB_NDSDS_GLYW_GLGXB"){
		var popGlgxlx = new popObj("关联关系类型","3","8","1","3",650,400,",");
		obList.push(popGlgxlx);
	}*/
    return obList;
}

//弹出选择页面
function showChooseWindow(pop, tdId, tablename) {
    var buttons = [{
        text: '确定',
        iconCls: 'icon-ok',
        handler: function () {
            var chooseInfo = window.top.doEasyDialogFun("getChooseData('" + tablename + "','" + pop.splitStr + "')");
            qrCheck(chooseInfo, tdId);
            window.top.closeEasyDialog();
        }
    }, {
        text: '取消',
        iconCls: 'icon-cancel',
        handler: function () {
            window.top.closeEasyDialog();
        }
    }];
    window.top.showEasyDialog("/WSSBSL/show_common_popSelect.action?dataType=" + pop.dataType + "&showType=" + pop.showType, {
        title: '请选择【' + pop.title + "】",	//标题
        width: pop.width,									//宽度
        height: pop.height,								//高度
        left: ($(window.top).width() - pop.width) * 0.5,   //居中时左边距
        top: ($(window.top).height() - pop.height) * 0.4,	//居中时上边距
        modal: true,							//模式窗口
        iconCls: 'icon-help',					//图标样式
        minimizable: false,						//是否显示最小化按钮
        maximizable: false,						//是否显示最大化按钮
        loadingMessage: null,					//窗口内容加载时显示信息
        toolbar: null,							//窗口工具条
        buttons: buttons,						//底部按钮
        doSize: true,							//面板创建的时候将被调整和重新布局
        resizable: false							//对话框是否可编辑大小
    });
}

//确认选择
function qrCheck(chooseInfo, tdId) {
    var strSplit = chooseInfo.split("@_@");
    if (strSplit != null && strSplit.length > 0) {
        $("#" + tdId).attr("value", strSplit[0]);
        $("#" + tdId).html(strSplit[1]);
        var status = $("#" + tdId).parent().attr("status");
        if (status == "0") {
            $("#" + tdId).parent().attr("status", "1");
        }
    }
}

//检查是否在有效点击范围之内
function doCheckPop(pop, parentDid, currColno, currSc) {
    //动态行
    if (pop.rowno && pop.rowno != null) {
        var did = "0|1|" + pop.rowno + "|" + pop.rowno + "|" + pop.rowno;
        if (parentDid == did && currColno == pop.colno) {
            return true;
        }
    }
        //静态行
    else {
        if (currSc == pop.colno) {
            return true;
        }
    }
    return false;
}

/**
 * 自定义对象
 * @param {Object} title		标题
 * @param {Object} rowno		动态行在模板中的行号（如果是静态行则该值为空）
 * @param {Object} colno		本单元格的colno属性值（如果是静态行则为sc属性）
 * @param {Object} dataType		数据类型（1：关联关系类型）
 * @param {Object} showType		数据显示格式（1：单行单选  2：多行单选  3：多行多选）
 * @param {Object} width		弹出窗口宽度
 * @param {Object} height		弹出窗口高度
 * @param {Object} splitStr		多选值分隔符（可选）
 */
function popObj(title, rowno, colno, dataType, showType, width, height, splitStr) {
    this.title = title;
    this.rowno = rowno;
    this.colno = colno;
    this.dataType = dataType;
    this.showType = showType;
    this.width = width;
    this.height = height;
    this.splitStr = splitStr;
    if (typeof (splitStr) == "undefined") { this.splitStr = ","; }
}
