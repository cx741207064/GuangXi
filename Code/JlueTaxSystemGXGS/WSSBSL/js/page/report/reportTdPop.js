
//判断并显示数据选择层
function showTdPop(tdId, parentDid, currColno, tablename, currSc) {
    if (tdId) {
        //特殊处理：季度所得税A类附表三_第5行本期数_弹出式填写
        if (tablename == "WBJK_SB_JDSDS_2008_FB03") {
            specJdsdsAFb3Lc5(tablename, parentDid, tdId, currColno, currSc);
        }
        //隐藏提示：增值税一般纳税人《汇总纳税分配表》提示基数
        if (tablename == "WBJK_SB_ZZS_HZNSFPB") {
            specZzsYbnsrHznsFpb(tablename, parentDid, tdId, currColno, currSc);
        }
    }
}

//特殊处理：季度所得税A类附表三_第5行本期数_弹出式填写
function specJdsdsAFb3Lc5(tablename, parentDid, tdId, currColno, currSc) {
    if (tablename == "WBJK_SB_JDSDS_2008_FB03") {
        var pop = new popTdObj("请选择【减免征类型】，并填写第5行", null, "G9", 350, 150);
        if (doCheckTdPop(pop, parentDid, currColno, currSc)) {
            //弹出填写窗口
            showJdsdsAFb3Lc5Window(pop, tdId, tablename);
        }
    }
}

//隐藏提示：增值税一般纳税人《汇总纳税分配表》提示基数
function specZzsYbnsrHznsFpb(tablename, parentDid, tdId, currColno, currSc) {
    var pop = new popTdObj("", null, "A3", 350, 150);
    //检查判断是否点击A3格子
    if (doCheckTdPop(pop, parentDid, currColno, currSc)) {
        //当点击A3格子次数大于3次时，则把信息alert出来
        if (typeof (zzshznsfpbClickNum) == "undefined") {
            zzshznsfpbClickNum = 0;
        }
        zzshznsfpbClickNum = zzshznsfpbClickNum + 1;
        if (zzshznsfpbClickNum > 3) {
            var c17r6 = parseFloat($('#report1_Q6').attr('value'));
            var c17r8 = parseFloat($('#report1_Q8').attr('value'));
            alert("应税货物基数==" + c17r6 + "</br>应税服务基数==" + c17r8);
        }
    }
}

//弹出【季度所得税A类附表三_第5行本期数】填写窗口
function showJdsdsAFb3Lc5Window(pop, tdId, tablename) {
    var lcI3val = $("#report1_I3").attr("value");
    var lcG9val = $("#report1_G9").attr("value");
    var buttons = [{
        text: '确定',
        iconCls: 'icon-ok',
        handler: function () {
            var chooseInfo = window.top.doEasyDialogFun("getJdsdsFb3Lc5ChooseData()");
            qrJdsdsAFb3Lc5Check(chooseInfo, tdId);
        }
    }, {
        text: '取消',
        iconCls: 'icon-cancel',
        handler: function () {
            window.top.closeEasyDialog();
        }
    }];
    window.top.showEasyDialog("/WSSBSL/show_jdsds2012_jdsdsAFb3Lc5.action?lcI3val=" + lcI3val + "&lcG9val=" + lcG9val, {
        title: pop.title,			//标题
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
function qrJdsdsAFb3Lc5Check(chooseInfo, tdId) {
    var strSplit = chooseInfo.split("@_@");
    if (strSplit != null && strSplit.length > 0) {
        var jmzlx = strSplit[0];
        var lc5 = strSplit[1];
        if (checkJdsdsAFb3Lc5CheckData(jmzlx, lc5)) {
            //给第5行赋值
            var lc5val = parseFloat(lc5).toFixed(2);
            $("#" + tdId).attr("value", lc5val);
            $("#" + tdId).html(lc5val);
            var status = $("#" + tdId).parent().attr("status");
            if (status == "0") {
                $("#" + tdId).parent().attr("status", "1");
            }
            //给隐藏的I3栏赋值
            $("#report1_I3").attr("value", jmzlx);
            $("#report1_I3").html(jmzlx);
            var status2 = $("#report1_I3").parent().attr("status");
            if (status2 == "0") {
                $("#report1_I3").parent().attr("status", "1");
            }
            window.top.closeEasyDialog();
        }
    }
}

//数据检查
function checkJdsdsAFb3Lc5CheckData(jmzlx, lc5) {
    if (lc5 == "" || TrimAll(lc5).length == 0) {
        window.top.alert("提示", "请填写第5行本期金额！", "warning");
        return false;
    }
    var lc5val = parseFloat(lc5).toFixed(2);
    if (isNaN(lc5val)) {
        window.top.alert("提示", "数值格式不正确！请重新输入！", "warning");
        return false;
    }
    if (jmzlx == "0" && lc5val != 0) {
        window.top.alert("提示", "当减免征类型为【无】时，第5行本期金额只能填0！", "warning");
        return false;
    }
    return true;
}

//检查是否在有效点击范围之内
function doCheckTdPop(pop, parentDid, currColno, currSc) {
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
 * @param {Object} width		弹出窗口宽度
 * @param {Object} height		弹出窗口高度
 */
function popTdObj(title, rowno, colno, width, height) {
    this.title = title;
    this.rowno = rowno;
    this.colno = colno;
    this.width = width;
    this.height = height;
}