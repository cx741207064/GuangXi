var qrcs = 0;//确认次数

//复选框自定义点击触发事件方法入口
function checkOnClick(parentId, bbmc, checkValue) {
    if (dynamicBz == "Y") {
        //如果是行式报表，这里可以扩展代码
    }
    else {
        if (bbmc == "WBJK_SB_NDSDS_2014_TBBD") {
            checkSbNdsds2014TBBD(bbmc, parentId, checkValue);
        }
            //月（季）度企业所得税A类主表
        else if (bbmc == "WBJK_SB_JDSDS_2008") {
            checkSbJdsds2008(bbmc, parentId, checkValue);
        }
            //月（季）度企业所得税B类主表
        else if (bbmc == "WBJK_SB_JDSDS_2008_HDZS") {
            checkSbJdsds2008HDZS(bbmc, parentId, checkValue);
        }
            //年度企业所得税B类主表
        else if (bbmc == "WBJK_SB_NDSDS_2008_HDZS") {
            checkSbNdsds2008HDZS(bbmc, parentId, checkValue);
        }
            //年度企业所得税A类基础信息表
        else if (bbmc == "WBJK_SB_NDSDS_2014_JCXX") {
            checkSbNdsds2014A(bbmc, parentId, checkValue);
        }
    }
}

//处理复选框-年度所得税A类-填报表单
function checkSbNdsds2014TBBD(bbmc, parentId, checkValue) {
    var hh = parentId.substring(9, parentId.length);//触发该单元格所属的行号
    var checkVal = $("#report1_E" + hh).attr("value");
    if (checkVal == "Y") {
        var parentValArray = $("#report1_F" + hh).attr("value").split(";");
        for (var i = 0; i < parentValArray.length; i++) {
            var parentVal = parentValArray[i].split(",")[0];
            if (parseInt(parentVal) != 0) {
                $("#report1_C" + parentVal).children().attr("checked", "checked");
                $("#report1_D" + parentVal).children().removeAttr("checked");
                $("#report1_E" + parentVal).attr("value", "Y");
                checkP(parentVal);
            }
        }
        /*var parentVal = $("#report1_F" + hh).attr("value").split(",")[0];
         if (parseInt(parentVal) != 0) {
             $("#report1_C" + parentVal).children().attr("checked", "checked");
             $("#report1_D" + parentVal).children().removeAttr("checked");
             $("#report1_E" + parentVal).attr("value", "Y");
             checkP(parentVal);
         }*/
    } else if (checkVal == "N") {
        for (var i = 6; i < 47; i++) {
            var cValArray = $("#report1_F" + i).attr("value").split(";");
            for (var j = 0; j < cValArray.length; j++) {
                var cVal = cValArray[j].split(",")[0];
                var leaf = cValArray[j].split(",")[1];
                if (hh == parseInt(cVal)) {
                    $("#report1_D" + i).children().attr("checked", "checked");
                    $("#report1_C" + i).children().removeAttr("checked");
                    $("#report1_E" + i).attr("value", "N");
                    if (leaf == "0") {
                        checkC(i);
                    }
                }
            }
            /*    var cVal = $("#report1_F" + i).attr("value").split(",")[0];
                var leaf = $("#report1_F" + i).attr("value").split(",")[1];
                if (hh == parseInt(cVal)) {
                    $("#report1_D" + i).children().attr("checked", "checked");
                    $("#report1_C" + i).children().removeAttr("checked");
                    $("#report1_E" + i).attr("value", "N");
                    if (leaf == "0") {
                        checkC(i);
                    }
                }*/
        }
    }
}

//处理复选框-月（季）度企业所得税A类主表-是否小微企业
function checkSbJdsds2008(bbmc, parentId, checkValue) {
    if (parentId == "report1_E38" && typeof (checkValue) == "undefined") {//重复点击“是”，保持“是”不变
        qrcs = 0;
        $("td[id='report1_E38']").children().attr("checked", "checked");
        $("td[id='report1_G38']").children().removeAttr("checked");
        $("td[id='report1_I38']").attr('value', "Y");
        $("td[id='report1_I38']").html("Y");
        $("td[id='report1_I38']").parent().attr("status", "1");
        report1_autoCalc("I38");
    } else if (parentId == "report1_G38" && checkValue == "checked") {//从“是”点“否”时，弹出提示
        showIsXwBzWindow();
    } else if (parentId == "report1_G38" && typeof (checkValue) == "undefined") {////重复点击“否”，保持“否”不变
        qrcs = 0;
        $("td[id='report1_G38']").children().attr("checked", "checked");
        $("td[id='report1_E38']").children().removeAttr("checked");
        $("td[id='report1_I38']").attr('value', "N");
        $("td[id='report1_I38']").html("N");
        $("td[id='report1_I38']").parent().attr("status", "1");
        report1_autoCalc("I38");
    }
}

//处理复选框-月（季）度企业所得税B类主表-是否小微企业
function checkSbJdsds2008HDZS(bbmc, parentId, checkValue) {
    if (parentId == "report1_E28" && typeof (checkValue) == "undefined") {
        window.top.confirm("信息确认", "您刚才选择了“否”，将不享受小型微利企业优惠。确定本年度预计不符合小型微利企业标准吗？你也可以重新选择“是”。", function (result) {
            //选择是
            if (result == false) {
                $("td[id='report1_E28']").children().attr("checked", "checked");
                $("td[id='report1_F28']").children().removeAttr("checked");
                $("td[id='report1_H28']").attr('value', "Y");
                $("td[id='report1_H28']").html("Y");
                $("td[id='report1_H28']").parent().attr("status", "1");
                report1_autoCalc("H28");
            }
        });
    } else if (parentId == "report1_F28" && checkValue == "checked") {
        var checkVal = $("#report1_H3").attr("value");
        if (checkVal == "Y") {//上年是小微企业
            window.top.confirm("信息确认", "您单位上年符合小型微利企业标准，但您刚才选择了“否”，将不享受小型微利企业优惠。确定本年度预计不符合小型微利企业标准吗？你也可以重新选择“是”。", function (result) {
                //选择否
                if (result == false) {
                    $("td[id='report1_E28']").children().attr("checked", "checked");
                    $("td[id='report1_F28']").children().removeAttr("checked");
                    $("td[id='report1_H28']").attr('value', "Y");
                    $("td[id='report1_H28']").html("Y");
                    $("td[id='report1_H28']").parent().attr("status", "1");
                    report1_autoCalc("H28");
                }
            });
        } else {//上年不是小微企业 或 新办企业
            window.top.confirm("信息确认", "您刚才选择了“否”，将不享受小型微利企业优惠。确定本年度预计不符合小型微利企业标准吗？你也可以重新选择“是”。", function (result) {
                //选择否
                if (result == false) {
                    $("td[id='report1_E28']").children().attr("checked", "checked");
                    $("td[id='report1_F28']").children().removeAttr("checked");
                    $("td[id='report1_H28']").attr('value', "Y");
                    $("td[id='report1_H28']").html("Y");
                    $("td[id='report1_H28']").parent().attr("status", "1");
                    report1_autoCalc("H28");
                }
            });
        }
    }
}

//处理复选框-年度企业所得税B类主表-是否国家限制和禁止行业
function checkSbNdsds2008HDZS(bbmc, parentId, checkValue) {
    if (parentId == "report1_G30" && typeof (checkValue) == "undefined") {//重复点击“否”，保持“否”不变
        qrcs = 0;
        $("td[id='report1_F30']").children().attr("checked", "checked");
        $("td[id='report1_G30']").children().removeAttr("checked");
        $("td[id='report1_H30']").attr('value', "Y");
        $("td[id='report1_H30']").html("Y");
        $("td[id='report1_H30']").parent().attr("status", "1");
        report1_autoCalc("H30");
    } else if (parentId == "report1_G30" && checkValue == "checked") {//从“否”点“是”时，弹出提示
        showIsGjhyBzWindow();
    } else if (parentId == "report1_F30" && typeof (checkValue) == "undefined") {////重复点击“否”，保持“否”不变
        $("td[id='report1_G30']").children().attr("checked", "checked");
        $("td[id='report1_F30']").children().removeAttr("checked");
        $("td[id='report1_H30']").attr('value', "N");
        $("td[id='report1_H30']").html("N");
        $("td[id='report1_H30']").parent().attr("status", "1");
        report1_autoCalc("H30");
    }
}

//处理复选框-年度企业所得税A类基础信息表-是否国家限制和禁止行业
function checkSbNdsds2014A(bbmc, parentId, checkValue) {
    if (parentId == "report1_L7" && typeof (checkValue) == "undefined") {//重复点击“否”，保持“否”不变
        $("td[id='report1_L7']").children().attr("checked", "checked");
        $("td[id='report1_I7']").children().removeAttr("checked");
        $("td[id='report1_N7']").attr('value', "Y");
        $("td[id='report1_N7']").html("Y");
        $("td[id='report1_N7']").parent().attr("status", "1");
        report1_autoCalc("N7");
    } else if (parentId == "report1_I7" && checkValue == "checked") {//从“否”点“是”时，弹出提示
        if (qrcs == 0) {
            showIsNdsdsAGjhyBzWindow();
        }
    } else if (parentId == "report1_I7" && typeof (checkValue) == "undefined") {////重复点击“否”，保持“否”不变
        $("td[id='report1_I7']").children().attr("checked", "checked");
        $("td[id='report1_L7']").children().removeAttr("checked");
        $("td[id='report1_N7']").attr('value', "N");
        $("td[id='report1_N7']").html("N");
        $("td[id='report1_N7']").parent().attr("status", "1");
        report1_autoCalc("N7");
    }
}


//递归-获取该单元格所有的父级并勾选对应的项
function checkP(parentVal) {
    var PvarArray = $("#report1_F" + parentVal).attr("value").split(";");
    for (var i = 0; i < PvarArray.length; i++) {
        var pVal = PvarArray[i].split(",")[0];
        if (parseInt(pVal) != 0) {
            $("#report1_C" + pVal).children().attr("checked", "checked");
            $("#report1_D" + pVal).children().removeAttr("checked");
            $("#report1_E" + pVal).attr("value", "Y");
            checkP(pVal);
        }
    }
    /*var pVal = $("#report1_F" + parentVal).attr("value").split(",")[0];
    if (parseInt(pVal) != 0) {
        $("#report1_C" + pVal).children().attr("checked", "checked");
        $("#report1_D" + pVal).children().removeAttr("checked");
        $("#report1_E" + pVal).attr("value", "Y");
        checkP(pVal);
    }*/
}

//递归-获取该单元格所有的子级并勾选对应的项
function checkC(hh) {
    for (var i = 6; i < 47; i++) {
        var cValArray = $("#report1_F" + i).attr("value").split(";");
        for (var j = 0; j < cValArray.length; j++) {
            var cVal = $("#report1_F" + i).attr("value").split(",")[0];
            var leaf = $("#report1_F" + i).attr("value").split(",")[1];
            if (hh == parseInt(cVal)) {
                $("#report1_D" + i).children().attr("checked", "checked");
                $("#report1_C" + i).children().removeAttr("checked");
                $("#report1_E" + i).attr("value", "N");
                if (leaf == "0") {
                    checkC(i);
                }
            }
        }


        /*var cVal = $("#report1_F" + i).attr("value").split(",")[0];
         var leaf = $("#report1_F" + i).attr("value").split(",")[1];
         if (hh == parseInt(cVal)) {
             $("#report1_D" + i).children().attr("checked", "checked");
             $("#report1_C" + i).children().removeAttr("checked");
             $("#report1_E" + i).attr("value", "N");
             if (leaf == "0") {
                 checkC(i);
             }
         }*/
    }
}

//弹出选择小微标志提示
function showIsXwBzWindow() {
    var buttons = [{
        text: '选择“是”选项',
        iconCls: 'icon-ok',
        handler: function () {
            qrcs = 0;
            window.top.closeEasyDialog();
            $("td[id='report1_E38']").children().attr("checked", "checked");
            $("td[id='report1_G38']").children().removeAttr("checked");
            $("td[id='report1_I38']").attr('value', "Y");
            $("td[id='report1_I38']").html("Y");
            $("td[id='report1_I38']").parent().attr("status", "1");
            report1_autoCalc("I38");
        }
    }, {
        text: '继续选择“否”',
        iconCls: 'icon-ok',
        handler: function () {
            if (qrcs == 0) {		//第一次信息确认
                qrcs = qrcs + 1;
                window.top.closeEasyDialog();
                setTimeout('showIsXwBzWindow()', 500);
            } else if (qrcs == 1) {	//第二次信息确认
                $("#report1_I38").attr('value', "N");
                $("#report1_I38").html("N");
                $("#report1_I38").parent().attr("status", "1");
                report1_autoCalc("I38");
                window.top.closeEasyDialog();
                qrcs = 0;
            }
        }
    }];
    window.top.showEasyDialog("/WSSBSL/show_jdsds2012_isXwBz.action?qrcs=" + qrcs, {
        title: '选择“是否属于小型微利企业”信息确认窗',	//标题
        width: 700,								//宽度
        height: 450,								//高度
        left: ($(window.top).width() - 700) * 0.5,   //居中时左边距
        top: ($(window.top).height() - 450) * 0.4,	//居中时上边距
        modal: true,							//模式窗口
        iconCls: 'icon-help',					//图标样式
        minimizable: false,						//是否显示最小化按钮
        maximizable: false,						//是否显示最大化按钮
        loadingMessage: null,					//窗口内容加载时显示信息
        toolbar: null,							//窗口工具条
        buttons: buttons,						//底部按钮
        doSize: true,							//面板创建的时候将被调整和重新布局
        resizable: false,						//对话框是否可编辑大小
        closable: false							//关闭按钮
    });
}

//弹出选择是否国家限制和禁止行业
function showIsGjhyBzWindow() {
    var buttons = [{
        text: '选“是”',
        iconCls: 'icon-ok',
        handler: function () {
            window.top.closeEasyDialog();
            $("td[id='report1_F30']").children().attr("checked", "checked");
            $("td[id='report1_G30']").children().removeAttr("checked");
            $("td[id='report1_H30']").attr('value', "Y");
            $("td[id='report1_H30']").html("Y");
            $("td[id='report1_H30']").parent().attr("status", "1");
            report1_autoCalc("H30");
        }
    }, {
        text: '仍然选“否”',
        iconCls: 'icon-ok',
        handler: function () {
            $("td[id='report1_G30']").children().attr("checked", "checked");
            $("td[id='report1_F30']").children().removeAttr("checked");
            $("#report1_H30").attr('value', "N");
            $("#report1_H30").html("N");
            $("#report1_H30").parent().attr("status", "1");
            report1_autoCalc("H30");
            window.top.closeEasyDialog();
        }
    }];
    window.top.showEasyDialog("/WSSBSL/show_ndsdsB_isGjhyBz.action?qrcs=" + qrcs, {
        title: '提示信息',	//标题
        width: 550,								//宽度
        height: 150,								//高度
        left: ($(window.top).width() - 500) * 0.5,   //居中时左边距
        top: ($(window.top).height() - 200) * 0.4,	//居中时上边距
        modal: true,							//模式窗口
        iconCls: 'icon-help',					//图标样式
        minimizable: false,						//是否显示最小化按钮
        maximizable: false,						//是否显示最大化按钮
        loadingMessage: null,					//窗口内容加载时显示信息
        toolbar: null,							//窗口工具条
        buttons: buttons,						//底部按钮
        doSize: true,							//面板创建的时候将被调整和重新布局
        resizable: false,						//对话框是否可编辑大小
        closable: false							//关闭按钮
    });
}

//弹出选择是否国家限制和禁止行业
function showIsNdsdsAGjhyBzWindow() {
    qrcs = 1;
    var buttons = [{
        text: '选“是”',
        iconCls: 'icon-ok',
        handler: function () {
            window.top.closeEasyDialog();
            $("td[id='report1_I7']").children().attr("checked", "checked");
            $("td[id='report1_L7']").children().removeAttr("checked");
            $("td[id='report1_N7']").attr('value', "Y");
            $("td[id='report1_N7']").html("Y");
            $("td[id='report1_N7']").parent().attr("status", "1");
            report1_autoCalc("N7");
        }
    }, {
        text: '仍然选“否”',
        iconCls: 'icon-ok',
        handler: function () {
            $("td[id='report1_L7']").children().attr("checked", "checked");
            $("td[id='report1_I7']").children().removeAttr("checked");
            $("#report1_N7").attr('value', "N");
            $("#report1_N7").html("N");
            $("#report1_N7").parent().attr("status", "1");
            report1_autoCalc("N7");
            window.top.closeEasyDialog();
        }
    }];
    window.top.showEasyDialog("/WSSBSL/show_ndsdsA_isGjhyBz.action", {
        title: '提示信息',	//标题
        width: 550,								//宽度
        height: 150,								//高度
        left: ($(window.top).width() - 500) * 0.5,   //居中时左边距
        top: ($(window.top).height() - 200) * 0.4,	//居中时上边距
        modal: true,							//模式窗口
        iconCls: 'icon-help',					//图标样式
        minimizable: false,						//是否显示最小化按钮
        maximizable: false,						//是否显示最大化按钮
        loadingMessage: null,					//窗口内容加载时显示信息
        toolbar: null,							//窗口工具条
        buttons: buttons,						//底部按钮
        doSize: true,							//面板创建的时候将被调整和重新布局
        resizable: false,						//对话框是否可编辑大小
        closable: false							//关闭按钮
    });
}