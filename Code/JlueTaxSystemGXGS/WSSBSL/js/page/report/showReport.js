var bblsh;
var bbmc;
var isTbBz;
var dynamicBz = "N";
var params;
var oldVal = "";
var sbzt;
var tbbzList;
var raq;
var lockList;//栏次锁定规则信息
var allLock = false;//全表锁定状态
var bbLoadOk = true;
var reportParamsId = null;
var dynamicRowFlag = true;//本表单和动态行是否允许添加行和删除行
//启动时加载
$(function () {
    var myParams = $("#myParams").val();
    try {

        bblsh = $("#report1_A1").attr("value");
        params = $("input[name='params']").val();
        var pageUrl = $("input[name='pageUrl']").val();
        splitParams();

        var userYSBQCId = getQueryString("userYSBQCId");
        var YSBQCId = getQueryString("YSBQCId");
        var HappenDate = getQueryString("HappenDate");
        var ssqq = getQueryString("ssqq");
        var ssqz = getQueryString("ssqz");
        $("input[name='cachedId']").val(userYSBQCId);
        $.get("/getreportdata.ashx?bbmc=" + bbmc
            + "&userYSBQCId=" + userYSBQCId
            + "&YSBQCId=" + YSBQCId
            + "&HappenDate=" + HappenDate
            + "&ssqq=" + ssqq
            + "&ssqz=" + ssqz
            + "&random=" + Date.parse(new Date()),
            function (result) {
                var obj = eval(result);
                var ary = eval(obj.List);
                for (var i = 0; i < ary.length; i++) {
                    //$("input[name='" + ary[i].name + "']").val(ary[i].value);
                    var ob = document.getElementById(ary[i].key);
                    if (ob != null) {
                        document.getElementById(ary[i].key).setAttribute("value", ary[i].value);
                        $("#" + ary[i].key).html(ary[i].value);
                    }
                }
                reportParamsId = pageUrl.substring(pageUrl.indexOf("reportParamsId") + 15, pageUrl.length);
                $("#report1_submitForm").append('<input type="hidden" name="reportParamsId" value="' + reportParamsId + '">');
                overwriteRqShowPopWin();//重写方法【rq_showPopWin】
                overwriteSaveAsExcel2();//重写方法【report1_saveAsExcel2】
                overwriteSaveAsPdf2();  //重写方法【report1_saveAsPdf2】
                overwriteParseValue();	//重写方法【_parseValue】
                if (isTbBz == "0") {
                    //报表加载后的特殊处理
                    afterLoadSpecProcess();
                    overwriteToFixed();				//重写方法【toFixed】
                    overwriteXMLEncode();			//重写方法【XMLEncode】
                    overwriteFormatCalcValue();		//重写方法【_formatCalcValue】
                    overwritePressOption();			//重写方法【RQS_pressOption】
                    if (dynamicBz == "Y") {
                        overwriteCalcTbl();			//重写方法【_calcTbl】
                    }
                    loadLockRule();		//获取锁定规则
                    eval("tbbzList = window.parent." + bbmc + "_TbbzList");

                    //非输入单元格的获得焦点事件
                    $("#report1").find("td").click(function () {
                        if (this.id) {
                            showTbbz(this.id);
                        }
                    });

                    document.onkeyup = function (e) {
                        var ev = document.all ? window.event : e;
                        var code = ev.keyCode;
                        if (code == 13 || code == 9 || code == 38 || code == 40) {
                            if (report1.currCell) {
                                showTbbz(report1.currCell.id);
                            }
                        }
                    }
                }
                    //查询操作时的处理
                else if (isTbBz == "1") {
                    overwriteToFixed();				//重写方法【toFixed】
                    overwriteXMLEncode();			//重写方法【XMLEncode】
                    overwriteFormatCalcValue();		//重写方法【_formatCalcValue】
                    clearCalcAndKeepCalc(bbmc);		//清除全表公式并保留定义行次的公式，并执行一次全表公式计算
                }
                dynamicSpecProcess();//动态行特殊处理
                $(document).click(function () {
                    dynamicSpecProcess();
                    var title = window.parent.getSelectedTab().panel('options').title;
                    window.parent.selectTab(title);
                });

                $("#report1_reportDiv div:last-child").html("");
                window.status = "";
                //弹出式下拉框实现
                openSelectFun();
                //单选式复选实现
                checkboxFun();
                //单元格点击事件
                tdClickFun();
                //窗口大小自适应
                setTimeout(window.parent.iframeAutoSize, 300);
            }
        );
    } catch (e) {
        //bbLoadOk = false;
        //alert("报表加载出错，本表将锁定不可填写，请刷新页面重试！");
        /**
		var len = $("input[name='params']").length;
		var xxnr = "bbmc="+bbmc+"，isTbBz="+isTbBz+"，params="+params+"，浏览器="+navigator.userAgent+"，脚本异常信息="+e.message+"，paramsLen="+len+"，myParams="+myParams;
		window.top.recordInfo(xxnr);
		alert(xxnr);
		**/
        //setReportLock();
    }
});

//报表加载后的特殊处理
function afterLoadSpecProcess() {
    if (bbmc == "WBJK_SB_ZZS_2003_YBNSR") {
        window.parent.getHideData();
    }
}

//单元格点击事件
function tdClickFun() {
    if (isTbBz == "0") {
        //定义点击事件
        $("td:not([ddedit]):visible").live("click", function () {
            var thisId = $(this).attr("id");
            var did = $(this).parent().attr("did");
            var currColno = $(this).attr("colno");
            var currSc = $(this).attr("sc");
            showTdPop(thisId, did, currColno, bbmc, currSc);
        });
    }
}

//弹出式下拉框实现
function openSelectFun() {
    if (isTbBz == "0") {
        //定义点击事件
        $("td[ddedit]:visible").live("click", function () {
            var thisId = $(this).attr("id");
            var did = $(this).parent().attr("did");
            var currColno = $(this).attr("colno");
            var currSc = $(this).attr("sc");
            showSelectPop(thisId, did, currColno, bbmc, currSc);
        });
    }
}

//弹出式下拉框添加行时清除内容
function clearSelectFun(newRowIndex) {
    $("table[id='report1']").find("tr:eq(" + newRowIndex + ")").children("td[ddedit]:visible").each(function () {
        $(this).attr("value", "");
        $(this).html("");
    });
}

//单选式复选实现
function checkboxFun() {
    if (isTbBz == "0") {
        //定义点击事件
        $("input[type='checkbox']").bind("click", function () {
            var parentId = $(this).parent().attr("id");
            var parentSc = $(this).parent().attr("sc");
            var thisCheck = $(this).attr("checked");
            if (dynamicBz == "Y") {
                checkChange(parentSc, bbmc, thisCheck);
                checkOnClick(parentSc, bbmc, thisCheck);
            } else {
                checkChange(parentId, bbmc, thisCheck);
                checkOnClick(parentId, bbmc, thisCheck);
            }
        });
    }
    //初始数据显示（因采用润乾模板表达式进行初始化，取消在此初始化，注释掉）
    //setCheckValues(bbmc);
}

//根据行业代码锁定【固定资产加速折旧表】的相关行次
function lockGdzcJszjByHydm(hydm) {
    var gzListL = [];//锁定列表
    gzListL.push("LC10,LD10,LE10,LF10,LG10,LH10,LJ10,LM10");
    gzListL.push("LC11,LD11,LE11,LF11,LG11,LH11,LJ11,LM11");
    gzListL.push("LC12,LD12,LE12,LF12,LG12,LH12,LJ12,LM12");
    gzListL.push("LC13,LD13,LE13,LF13,LG13,LH13,LJ13,LM13");
    gzListL.push("LC14,LD14,LE14,LF14,LG14,LH14,LJ14,LM14");
    gzListL.push("LC15,LD15,LE15,LF15,LG15,LH15,LJ15,LM15");
    gzListL.push("LC16,LD16,LE16,LF16,LG16,LH16,LJ16,LM16");
    if (hydm != "0") {
        secondLockRule(gzListL);//锁定2-8行
    }
    if (hydm == "2760") {//（1）生物药品制造业			
        var gzList2 = ["UC10,UD10,UE10,UF10,UG10,UH10,UJ10,UM10"];
        secondLockRule(gzList1);
    } else if (hydm == "3500") {//（2）专用设备制造业		
        var gzList3 = ["UC11,UD11,UE11,UF11,UG11,UH11,UJ11,UM11"];
        secondLockRule(gzList2);
    } else if (hydm == "3700") {//（3）铁路、船舶、航空航天和其他运输设备制造业		
        var gzList4 = ["UC12,UD12,UE12,UF12,UG12,UH12,UJ12,UM12"];
        secondLockRule(gzList3);
    } else if (hydm == "3900") {//（4）计算机、通信和其他电子设备制造业		
        var gzList5 = ["UC13,UD13,UE13,UF13,UG13,UH13,UJ13,UM13"];
        secondLockRule(gzList4);
    } else if (hydm == "4000") {//（5）仪器仪表制造业		
        var gzList6 = ["UC14,UD14,UE14,UF14,UG14,UH14,UJ14,UM14"];
        secondLockRule(gzList5);
    } else if (hydm == "6500") {//（6）信息传输、软件和信息技术服务业		
        var gzList7 = ["UC15,UD15,UE15,UF15,UG15,UH15,UJ15,UM15"];
        secondLockRule(gzList6);
    } else if (hydm == "9900") {//（7）其他行业		
        var gzList7 = ["UC16,UD16,UE16,UF16,UG16,UH16,UJ16,UM16"];
        secondLockRule(gzList7);
    }
}

//重写方法【toFixed】
function overwriteToFixed() {
    Number.prototype.toFixed = function (len) {
        var tmpVal = this;
        var inx = (this + "").indexOf(".");
        var disLen = (this + "").length - inx - 1;
        if (disLen >= (len + 7)) {
            var strAfter = (this + "").substring(inx + 1, (this + "").length);
            if (strAfter.indexOf("99999") >= 0 || strAfter.indexOf("00000") >= 0) {
                var temp = Math.pow(10, len + 2);
                var s = Math.round(FloatMul(this, temp));
                tmpVal = FloatDiv(s, temp);
            }
        }
        var temp = Math.pow(10, len);
        var s = Math.round(FloatMul(tmpVal, temp));
        var valtmp = FloatDiv(s, temp);
        var strVal = valtmp + "";
        var pointIndex = strVal.indexOf(".");
        var xsNum = strVal.length - pointIndex - 1;
        if (pointIndex == -1) {
            xsNum = 0;
        }
        if (xsNum < len) {
            if (xsNum == 0) {
                var valnew = valtmp + "." + getZero(len);
                return valnew;
            } else {
                var valnew = valtmp + getZero(len - xsNum);
                return valnew;
            }
        } else {
            return valtmp;
        }
    }
}

//重写方法【report1_saveAsExcel2】
function overwriteSaveAsExcel2() {
    var calcFunTxt = report1_saveAsExcel2 + '';
    var thisParams = myReplaceAll(params, "=", "%3D");
    var strTmp = 'returnVal=returnVal+"&reportParamsId=' + reportParamsId + '&params=' + thisParams + '";';
    calcFunTxt = myReplaceAll(calcFunTxt, "document.", strTmp + "document.");
    calcFunTxt = "report1_saveAsExcel2=function" + calcFunTxt.substring(29, calcFunTxt.length);
    eval(calcFunTxt);
}

//重写方法【report1_saveAsPdf2】
function overwriteSaveAsPdf2() {
    var calcFunTxt = report1_saveAsPdf2 + '';
    var thisParams = myReplaceAll(params, "=", "%3D");
    var strTmp = 'returnVal=returnVal+"&reportParamsId=' + reportParamsId + '&params=' + thisParams + '";';
    calcFunTxt = myReplaceAll(calcFunTxt, "document.", strTmp + "document.");
    calcFunTxt = "report1_saveAsPdf2=function" + calcFunTxt.substring(27, calcFunTxt.length);
    eval(calcFunTxt);
}

//重写方法【rq_showPopWin】  
function overwriteRqShowPopWin() {
    var newFunText = 'rq_showPopWin=function(url, width, height, returnFunc, showCloseBox){' +
			'var thisParams = myReplaceAll(params,"=","%3D");' +
			'url = url + "&reportParamsId=" + reportParamsId + "&params=" + thisParams;    ' +
			'if (showCloseBox == null || showCloseBox == true) {' +
			'	document.getElementById("popCloseBox").style.display = "block";' +
			'} else {' +
			'	document.getElementById("popCloseBox").style.display = "none";' +
			'}' +
			'rq_gPopupIsShown = true;' +
			'disableTabIndexes();' +
			'rq_gPopupMask.style.display = "block";' +
			'rq_gPopupContainer.style.display = "block";' +
			'_popupResizeTo( width, height );' +
			'setMaskSize();' +
			'rq_gPopFrame.src = url;' +
			'rq_gReturnFunc = returnFunc;' +
			'if (rq_gHideSelects == true) {' +
			'	hideSelectBoxes();' +
			'}' +
			'window.setTimeout("setPopTitle();", 600);' +
		'}	';
    eval(newFunText);
}

//重写方法【RQS_pressOption】
function overwritePressOption() {
    var newFunText = 'RQS_pressOption=function(cell){' +
		'	if( this.isMulti ) {' +
		'		var box = cell.parentNode.cells[0].childNodes[0];' +
		'		box.checked = !box.checked;' +
		'		return;' +
		'	}' +
		'	this.toggleOptions( false );' +
		'	this.editBox.realValue = cell.value;' +
		'	this.editBox.needAcceptInput = false;' +
		'	this.Table.value = cell.value;' +
		'	this.editBox.value = $(cell.childNodes[0]).html();' +
		'	this.selectedIndex = cell.parentNode.rowIndex;' +
		'	try{ ' +
		'		var s = this.editingCell.getAttribute( "onSelectChange" );' +
		'		var pos = s.indexOf( "(" );' +
		'		if( pos > 0 ) s = s.substring( 0, pos );' +
		'		eval( s + "(\'" + cell.value + "\')" );' +
		'	}catch(ex){}' +
		'	if( this.onchange != null ) eval( this.onchange );' +
		'	if( this.Table.onchange1 != null ) eval( this.Table.onchange1 );' +
		'	selectEvent(cell);' +
		'}	';
    eval(newFunText);
}

//重写方法【_calcTbl】
function overwriteCalcTbl() {
    var newFunText = '_calcTbl=function(table, changedCell){' +
		'	li_currTbl = table;' +
		'	if( changedCell == null ) {  ' +
		'		var topTbl = document.getElementById( table.id + "_$_top" );' +
		'		if( topTbl == null ) changedCell = document.getElementById( table.currCell.parentNode.getAttribute( "pid" ) ).rows[0].cells[0];' +
		'		else changedCell = topTbl.rows[0].cells[0];' +
		'	}' +
		'	var changedRow = changedCell.parentNode;' +
		'' +
		'		var mainRow = changedRow;' +
		'		if( !mainRow.getAttribute( "ndr" ) ) mainRow = document.getElementById( mainRow.getAttribute( "pid" ) );' +
		'		var first = _groupFirstRow( mainRow );' +
		'		var last = _groupLastRow( mainRow );' +
		'		for( var i = first; i <= last; i++ ) {' +
		'			var row = table.rows[i];' +
		'			if( row.getAttribute( "isDetail" ) ) _calcARow( row );' +
		'		}' +
		'		_calcGroup( mainRow );' +
		'		' +
		'		var cfcs = getCfjbByBbmc();' +
		'		for(var cs=0;cs<cfcs;cs++){' +
		'			for( var i = first; i <= last; i++ ) {' +
		'				var row = table.rows[i];' +
		'				if( row.getAttribute( "isDetail" ) ) _calcARow( row );' +
		'			}' +
		'			_calcGroup( mainRow );' +
		'		}' +
		'' +
		'	try{ group_autoCalc( changedCell.id ); }catch(ex){}' +
		'}  ';
    eval(newFunText);
}

//根据报表名称获取行式报表【重复级别】，看看需要重复计算几层
function getCfjbByBbmc() {
    if (bbmc && bbmc.length > 0) {
        if (bbmc == "WBJK_SB_JDSDS_2008_FB01" || bbmc == "WBJK_SB_JDSDS_2008_FB03"
			|| bbmc == "WBJK_SB_NDSDS_GLYW_GXB" || bbmc == "WBJK_SB_NDSDS_GLYW_LWB" || bbmc == "WBJK_SB_NDSDS_2014_FB39" || bbmc == "WBJK_SB_ZZS_HZNSFPB") {
            return 2;
        } else {
            //默认重复计算一次
            return 1;
        }
    }
}

//下拉框选择触发事件
function selectEvent(cell) {
}

//获取零
function getZero(num) {
    var str = "";
    for (var i = 0; i < num; i++) {
        str = str + "0";
    }
    return str;
}

//动态行特殊处理
function dynamicSpecProcess() {
    if (bbmc == "WBJK_SB_JDSDS_2008_FB1") {
        var rowspan = 3;
        var rowlen = $("tr[isdetail]:visible").length;
        if (rowlen == 0) {
            rowlen = $("tr[isdetail]").length;
        }
        rowspan = rowspan + rowlen;
        $("#report1_A6").attr("rowspan", rowspan);
    }
    if (bbmc == "WBJK_SB_NDSDS_2014_FB39") {
        var rowspan = 3;
        var rowlen = $("tr[isdetail]:visible").length;
        if (rowlen == 0) {
            rowlen = $("tr[isdetail]").length;
        }
        rowspan = rowspan + rowlen;
        $("#report1_A6").attr("rowspan", rowspan);
    }
    if (bbmc == "WBJK_SB_NDSDS_GLYW_RTZJB") {
        var rowspan = 2;
        var rowlen = $("tr[isdetail][did='0|1|5|5|5']:visible").length;
        if (rowlen == 0) {
            rowlen = $("tr[isdetail][did='0|1|5|5|5']").length;
        }
        rowspan = rowspan + rowlen;
        $("#report1_A3").attr("rowspan", rowspan);

        var theLen = $("tr[isdetail][did='0|1|11|11|11']:visible").length;
        if (theLen == 0) {
            var list2StartIndex = $("tr[isdetail][did='0|1|11|11|11']:first").attr("rn");
            var cellRow = list2StartIndex - 2;
            rowspan = 2;
            rowspan = rowspan + $("tr[isdetail][did='0|1|11|11|11']").length;
            $("#report1_A" + cellRow).attr("rowspan", rowspan);
        } else {
            var list2StartIndex = $("tr[isdetail][did='0|1|11|11|11']:visible:first").attr("rn");
            var cellRow = list2StartIndex - 2;
            rowspan = 2;
            rowspan = rowspan + $("tr[isdetail][did='0|1|11|11|11']:visible").length;
            $("#report1_A" + cellRow).attr("rowspan", rowspan);
        }
    }//年度所得税分支机构附表一
    if (bbmc == "WBJK_SB_NDSDS_FZJG_FB1") {
        var rowspan = 3;
        var rowlen = $("tr[isdetail]:visible").length;
        if (rowlen == 0) {
            rowlen = $("tr[isdetail]").length;
        }
        rowspan = rowspan + rowlen;
        $("#report1_A6").attr("rowspan", rowspan);
    }
}

//封装alert
function alert(msg) {
    window.top.closeProgress();
    window.top.alert("消息", msg, "info");
}

//保存成功后回调方法
function afterSave() {
    window.parent.afterSave(bbmc);
    if (bblsh != "") {
        location.reload(true);
    }
}

//校验非空
function checkNull(str) {
    if (str.length > 0) {
        return true;
    } else {
        return false;
    }
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

//分割报表参数获得相应的参数值
function splitParams() {
    var strs = new Array();
    strs = params.split(";");
    if (strs.length > 1) {
        for (var i = 0; i < strs.length; i++) {
            var ps = new Array();
            ps = strs[i].split("=");
            if (ps[0] == "bbmc") {
                bbmc = ps[1];
            } else if (ps[0] == "dynamicBz") {
                dynamicBz = ps[1];
            } else if (ps[0] == "raq") {
                raq = ps[1];
            } else if (ps[0] == "isTbBz") {
                isTbBz = ps[1];
                if (ps[1] == "1") {
                    setReportWritable(report1);
                }
            } else if (ps[0] == "sbzt") {
                sbzt = getQueryString("sbzt");
                if (sbzt == "1" || sbzt == "3") {
                    if (bbmc == "SB_GDZC_JSZJ_TJB") {
                        //如果是“固定资产加速折旧(扣除)预缴情况统计表”申报后不进行全表锁定
                    } else {
                        setReportWritable(report1);
                    }

                }
            }
        }
    }
}

//锁定报表
function setReportLock() {
    setReportWritable(report1);
}


//提交方法
function submit() {
    if (bbLoadOk) {
        try {
            window.parent.setCurrSaveBbmc(bbmc);
        } catch (e) {
        }
        //数据校验
        reportDataCheck();
    } else {
        alert("当前表加载出错，本表将锁定不可填写，请刷新页面重试！");
    }
}

//java打印报表
function javaPrint() {
    /*
    try {
		var ss = deployJava.getJREs();
		if(ss.length == 0){	//检查是否安装jre
			window.top.showEasyDialog('/WSSBSL/show_common_tsazJre.action',{
				    title: '尚未安装打印插件',				//标题
				    width: 600,								//宽度
				    height: 200,							//高度
					left:($(window.top).width() - 600) * 0.5,   //居中时左边距
		            top:($(window.top).height() - 200) * 0.4,	//居中时上边距
				    modal: true,							//模式窗口
				    iconCls: 'icon-help',					//图标样式
				    minimizable: false,						//是否显示最小化按钮
				    maximizable: false,						//是否显示最大化按钮
					loadingMessage:null,					//窗口内容加载时显示信息
					toolbar:null,							//窗口工具条
					buttons:null,							//底部按钮
					doSize:true,							//面板创建的时候将被调整和重新布局
					resizable:true							//对话框是否可编辑大小
				});
		}else{
			report1_print();
		}
	}catch(e){
	} 
	*/
}

//打印方式二
function winPrint() {
    pagesetup_null();
    focus();
    print();
}

//为打印而隐藏输入框
function hideInput() {
    $("#report1_editBox").hide();
    $("#report1_textArea").hide();
    $("#my___select").hide();
}

//单元格提交修改>>隐藏输入框
function hideInput() {
    _submitEditor(report1);
}

//获取本页面的报表名称
function getBbmc() {
    return bbmc;
}

//设置网页打印的页眉页脚为空
function pagesetup_null() {
    var hkey_root, hkey_path, hkey_key;
    hkey_root = "HKEY_CURRENT_USER";
    hkey_path = "\\Software\\Microsoft\\Internet Explorer\\PageSetup\\";
    try {
        var RegWsh = new ActiveXObject("WScript.Shell");
        hkey_key = "header";
        RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, "");
        hkey_key = "footer";
        RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, "");
    } catch (e) { }
}

//flash打印
function _print() {
    // 缓存ID
    var _cachedId = _getReportCachedId("report1");
    // 通过json格式传递信息。ctxPath:上下文路径。name:html标签的唯一标识。reportFileName: 报表名称。cacheId：缓存ID，调用固定的js方法获取。
    var _reportObject = { "ctxPath": "/WSSBSL", "name": "report1", "reportFileName": raq, "cacheId": _cachedId };
    // 传入json对象,调用flash打印方法
    rq_flashPrint(_reportObject);
}

//添加行
function addRow() {
    if (allLock) { return; }
    if (dynamicRowFlag == false) {
        alert("当前不允许添加行！");
        return;
    }
    var newRowIndex = _appendRow(report1);
    //添加行后的处理
    if (bbmc == "WBJK_SB_JDSDS_2008_FB1") {
        var rowspan = 3;
        rowspan = rowspan + $("tr[isdetail]:visible").length;
        $("#report1_A6").attr("rowspan", rowspan);
    }
    if (bbmc == "WBJK_SB_NDSDS_2014_FB39") {
        var rowspan = 3;
        rowspan = rowspan + $("tr[isdetail]:visible").length;
        $("#report1_A6").attr("rowspan", rowspan);
    }
    if (bbmc == "WBJK_SB_NDSDS_GLYW_RTZJB") {
        var rowspan = 2;
        rowspan = rowspan + $("tr[isdetail][did='0|1|5|5|5']:visible").length;
        $("#report1_A3").attr("rowspan", rowspan);
        var list2StartIndex = $("tr[isdetail][did='0|1|11|11|11']:visible:first").attr("rn");
        var cellRow = list2StartIndex - 2;
        rowspan = 2;
        rowspan = rowspan + $("tr[isdetail][did='0|1|11|11|11']:visible").length;
        $("#report1_A" + cellRow).attr("rowspan", rowspan);
    }//年度所得税分支机构附表一
    if (bbmc == "WBJK_SB_NDSDS_FZJG_FB1") {
        var rowspan = 3;
        rowspan = rowspan + $("tr[isdetail]:visible").length;
        $("#report1_A6").attr("rowspan", rowspan);
    }
    //动态行自动计算可修改
    $("tr[isdetail]:visible:last").children("[id]").each(function (i) {
        var id = $(this).attr("id");
        if (id) {
            id = (id.split("_"))[1];
            var idCol = id.substring(0, 1);
            if (lockList && lockList.length > 0) {
                for (var i = 0; i < lockList.length; i++) {
                    var gzStr = lockList[i]; //单个锁定规则字符串
                    var gzSz = gzStr.split(",");//单个锁定规则字符串以，分割形成字符串数组
                    if (gzSz && gzSz.length > 0) {
                        for (var j = 0; j < gzSz.length; j++) {
                            var gz = gzSz[j]; //单个规则（例如：LK21）
                            var gzlx = gz.substring(0, 1);//规则类型，只有L、U、C、M、ALOCK、S，表示锁定、放开、清除公式、自动计算可修改、全表锁定、设置字符串属性
                            var gznr = gz.substring(1, gz.length);//规则内容，表示具体单元格
                            if (gzlx == "L") {
                                var id = "report1_" + gznr;
                                setReportCellWritable(id, false);
                                //单选框、复选框禁用
                                $("td[sc='" + gznr + "']").children().attr("disabled", true);
                            }
                            else if (gzlx == "U") {
                                var id = "report1_" + gznr;
                                setReportCellWritable(id, true);
                                //单选框、复选框启用
                                $("td[sc='" + gznr + "']").children().removeAttr("disabled");
                            } else if (gzlx == "C") {
                                $("td[sc='" + gznr + "']").attr("calc", "");
                                $("td[sc='" + gznr + "']").css("color", "#0000ff");
                            } else if (gzlx == "M") {
                                //行式报表自动计算可修改
                                $("td[sc='" + gznr + "']").each(function () {
                                    $(this).attr("initVal", "0");
                                    $(this).attr("ACAM", "true");
                                    $(this).attr("initFlag", "1");
                                    $(this).attr("oldCalcVal", "0");
                                });
                            } else if (gzlx == "S") {
                                $("td[sc='" + gznr + "']").attr("datatype", "string");
                            }
                        }
                    }
                }
            }
        }
    });
    clearSelectFun(newRowIndex);
}

//删除行
function delRow() {
    if (allLock) { return; }
    if (dynamicRowFlag == false) {
        alert("当前不允许删除行！");
        return;
    }
    var flag = cannotDelOnlyOneRow(report1);//前置检查：仅有一行时不能删除行
    if (flag == false) { return; }
    var rowspan1 = $("#report1_A23").attr("rowspan");
    _deleteRow(report1);
    var rowspan2 = $("#report1_A23").attr("rowspan");
    //删除行后的处理
    if (bbmc == "WBJK_SB_JDSDS_2008_FB1") {
        var rowspan = 3;
        rowspan = rowspan + $("tr[isdetail]:visible").length;
        $("#report1_A6").attr("rowspan", rowspan);
    }
    if (bbmc == "WBJK_SB_NDSDS_2014_FB39") {
        var rowspan = 3;
        rowspan = rowspan + $("tr[isdetail]:visible").length;
        $("#report1_A6").attr("rowspan", rowspan);
    }
    if (bbmc == "WBJK_SB_NDSDS_GLYW_RTZJB") {
        var rowspan = 2;
        rowspan = rowspan + $("tr[isdetail][did='0|1|5|5|5']:visible").length;
        $("#report1_A3").attr("rowspan", rowspan);
        var list2StartIndex = $("tr[isdetail][did='0|1|11|11|11']:visible:first").attr("rn");
        var cellRow = list2StartIndex - 2;
        rowspan = 2;
        rowspan = rowspan + $("tr[isdetail][did='0|1|11|11|11']:visible").length;
        $("#report1_A" + cellRow).attr("rowspan", rowspan);
    }//年度所得税分支机构附表一
    if (bbmc == "WBJK_SB_NDSDS_FZJG_FB1") {
        var rowspan = 3;
        rowspan = rowspan + $("tr[isdetail]:visible").length;
        $("#report1_A6").attr("rowspan", rowspan);
    }
}

//前置检查：仅有一行时不能删除行
function cannotDelOnlyOneRow(table) {
    if (table.currCell == null) {
        alert(__AAA);
        return false;
    }
    var row = table.currCell.parentNode;
    if (!row.getAttribute("isDetail")) {
        alert(__BBB);
        return false;
    }
    var did = row.getAttribute("did");
    var trnum = $("table[id='report1']").find("tr[did='" + did + "']:visible").length;
    if (trnum > 1) {
        return true;
    } else {
        alert("仅有一行，不能删除！");
        return false;
    }
}
//导出excel 
function saveAsExcel() {
    report1_saveAsExcel();
}

//导出pdf 
function saveAsPdf() {
    report1_saveAsPdf();
}

//显示或隐藏添加删除按钮
function showOrHideButton() {
    if (dynamicBz == "Y") {
        if (bbmc == "WBJK_SB_ZZS_HZNSFPB") {
            window.parent.hideAddAndDelButton();
        } else {
            window.parent.showAddAndDelButton();
        }
    } else {
        window.parent.hideAddAndDelButton();
    }
}


//删除报表
function deleteReport() {
    if (bbLoadOk) {
        var cachedId = $("input[name='cachedId']").val();
        window.parent.delReport(bblsh, params, cachedId);
    } else {
        alert("当前表加载出错，本表将锁定不可填写，请刷新页面重试！");
    }
}

//获取动态行标志
function getDynamicBz() {
    return dynamicBz;
}

//报表锁定
function loadLockRule() {
    eval("dynamicBz = window.parent." + bbmc + "_dynamicBz");
    eval("var gzList = window.parent." + bbmc + "_gzList");
    if (gzList && gzList.length > 0) {
        lockList = gzList;
        //非行式报表
        if (dynamicBz == "N") {
            var calcFunTxt = report1_autoCalc + '';
            for (var i = 0; i < gzList.length; i++) {
                var gzStr = gzList[i]; //单个锁定规则字符串
                var gzSz = gzStr.split(",");//单个锁定规则字符串以，分割形成字符串数组
                if (gzSz && gzSz.length > 0) {
                    for (var j = 0; j < gzSz.length; j++) {
                        var gz = gzSz[j]; //单个规则（例如：LK21）
                        //规则类型，只有L、U、C、M、ALOCK、S、NAD，表示锁定、放开、清除公式、自动计算可修改、全表锁定、设置字符串属性、禁止动态行(添加行或删除行)
                        var gzlx = gz.substring(0, 1);
                        var gznr = gz.substring(1, gz.length);//规则内容，表示具体单元格
                        if (gzlx == "L") {
                            var id = "report1_" + gznr;
                            setReportCellWritable(id, false);
                            //单选框、复选框禁用
                            $("#" + id).children().attr("disabled", true);
                        }
                        else if (gzlx == "U") {
                            var id = "report1_" + gznr;
                            setReportCellWritable(id, true);
                            //单选框、复选框启用
                            $("#" + id).children().removeAttr("disabled");
                        } else if (gzlx == "C") {
                            var replaceStr1 = "document.getElementById( 'report1_" + gznr + "' ).setAttribute( 'value', value + \"\" );";
                            var replaceStr2 = "document.getElementById( 'report1_" + gznr + "' ).textContent = value + \"\";";
                            var replaceStr3 = "document.getElementById( 'report1_" + gznr + "' ).innerText = value + \"\";";
                            var replaceStr4 = "_formatCalcValue( document.getElementById( 'report1_" + gznr + "' ) );";
                            calcFunTxt = myReplaceAll(calcFunTxt, replaceStr1, "");
                            calcFunTxt = myReplaceAll(calcFunTxt, replaceStr2, "");
                            calcFunTxt = myReplaceAll(calcFunTxt, replaceStr3, "");
                            calcFunTxt = myReplaceAll(calcFunTxt, replaceStr4, "");
                            var id = "report1_" + gznr;
                            document.all[id].style.color = "#0000ff";//修改字体颜色
                        } else if (gzlx == "A") {
                            if (gznr == "LOCK") {
                                setReportWritable(report1);
                            }
                        } else if (gzlx == "N") {
                            if (gznr == "AD") {
                                dynamicRowFlag = false;
                            }
                        } else if (gzlx == "M") {
                            //非行式报表自动计算可修改 第一步：记录初始值
                            var thisCellId = "report1_" + gznr;
                            $("#" + thisCellId).attr("initVal", $("#" + thisCellId).attr("value"));
                            $("#" + thisCellId).attr("initFlag", "0");
                        } else if (gzlx == "S") {
                            var thisCellId = "report1_" + gznr;
                            $("#" + thisCellId).attr("datatype", "string");
                        }
                    }
                }
            }
            calcFunTxt = "report1_autoCalc=function" + calcFunTxt.substring(25, calcFunTxt.length);
            eval(calcFunTxt);
        }
            //行式（动态行）报表
        else if (dynamicBz == "Y") {
            for (var i = 0; i < gzList.length; i++) {
                var gzStr = gzList[i]; //单个锁定规则字符串
                var gzSz = gzStr.split(",");//单个锁定规则字符串以，分割形成字符串数组
                if (gzSz && gzSz.length > 0) {
                    for (var j = 0; j < gzSz.length; j++) {
                        var gz = gzSz[j]; //单个规则（例如：LK21）
                        //规则类型，只有L、U、C、M、ALOCK、S、NAD，表示锁定、放开、清除公式、自动计算可修改、全表锁定、设置字符串属性、禁止动态行(添加行或删除行)
                        var gzlx = gz.substring(0, 1);
                        var gznr = gz.substring(1, gz.length);//规则内容，表示具体单元格
                        if (gzlx == "L") {
                            var id = "report1_" + gznr;
                            setReportCellWritable(id, false);
                            //单选框、复选框禁用
                            $("td[sc='" + gznr + "']").children().attr("disabled", true);
                        }
                        else if (gzlx == "U") {
                            var id = "report1_" + gznr;
                            setReportCellWritable(id, true);
                            //单选框、复选框启用
                            $("td[sc='" + gznr + "']").children().removeAttr("disabled");
                        } else if (gzlx == "C") {
                            $("td[sc='" + gznr + "']").attr("calc", "");
                            $("td[sc='" + gznr + "']").css("color", "#0000ff");
                        } else if (gzlx == "A") {
                            if (gznr == "LOCK") {
                                setReportWritable(report1);
                            }
                        } else if (gzlx == "N") {
                            if (gznr == "AD") {
                                dynamicRowFlag = false;
                            }
                        } else if (gzlx == "M") {
                            //行式报表自动计算可修改 第一步：记录初始值
                            $("td[sc='" + gznr + "']").each(function () {
                                $(this).attr("initVal", $(this).attr("value"));
                                $(this).attr("ACAM", "true");
                                $(this).attr("initFlag", "0");
                            });
                        } else if (gzlx == "S") {
                            $("td[sc='" + gznr + "']").attr("datatype", "string");
                        }
                    }
                }
            }
        }
    }
    if (dynamicBz == "N" || typeof (dynamicBz) == "undefined") {
        report1_autoCalc('');	//非行式报表自动计算可修改 第二步：全表公式计算
        recordOldCalcVal();		//非行式报表自动计算可修改 第三步：记录旧的计算值
        if (bblsh && bblsh.length > 0) {
            initValRecover();	//非行式报表自动计算可修改 第四步：初始值恢复
        }
        pourIntoCalc();			//非行式报表自动计算可修改 第五步：修改计算方法代码
        report1_autoCalc('');	//非行式报表自动计算可修改 第六步：全表公式计算
        allowCalc();			//非行式报表自动计算可修改 第七步：初始化结束，放开公式计算
    } else if (dynamicBz == "Y") {
        dynamicAutoCalc();	//行式报表自动计算可修改 第二步：行式报表全表公式计算

        recordOldCalcVal();	//行式报表自动计算可修改 第三步：记录旧的计算值
        dynamicRecordOldCalcVal();//行式报表【自动计算可修改】记录旧的计算值

        if (bblsh && bblsh.length > 0) {
            initValRecover();	//行式报表自动计算可修改 第四步：初始值恢复
            dynamicInitValRecover();//行式报表【自动计算可修改】初始值恢复
        }
        dynamicPourIntoCalc();	//行式报表自动计算可修改 第五步：修改计算方法代码
        dynamicAutoCalc();	//行式报表自动计算可修改 第六步：行式报表全表公式计算
        allowCalc();	//行式报表自动计算可修改 第七步：初始化结束，放开公式计算
    }
}

/**
 * 执行二次锁定（区别于初始锁定规则）
 */
function secondLockRule(gzList) {
    var calcFunTxt = report1_autoCalc + '';
    for (var i = 0; i < gzList.length; i++) {
        var gzStr = gzList[i]; //单个锁定规则字符串
        var gzSz = gzStr.split(",");//单个锁定规则字符串以，分割形成字符串数组
        if (gzSz && gzSz.length > 0) {
            for (var j = 0; j < gzSz.length; j++) {
                var gz = gzSz[j]; //单个规则（例如：LK21）
                var gzlx = gz.substring(0, 1);//规则类型，只有L、U、C，表示锁定、放开、清除公式
                var gznr = gz.substring(1, gz.length);//规则内容，表示具体单元格
                if (gzlx == "L") {
                    var id = "report1_" + gznr;
                    setReportCellWritable(id, false);
                    //单选框、复选框禁用
                    $("#" + id).children().attr("disabled", true);
                }
                else if (gzlx == "U") {
                    var id = "report1_" + gznr;
                    setReportCellWritable(id, true);
                    //单选框、复选框启用
                    $("#" + id).children().removeAttr("disabled");
                } else if (gzlx == "C") {
                    var replaceStr1 = "document.getElementById( 'report1_" + gznr + "' ).setAttribute( 'value', value + \"\" );";
                    var replaceStr2 = "document.getElementById( 'report1_" + gznr + "' ).textContent = value + \"\";";
                    var replaceStr3 = "document.getElementById( 'report1_" + gznr + "' ).innerText = value + \"\";";
                    var replaceStr4 = "_formatCalcValue( document.getElementById( 'report1_" + gznr + "' ) );";
                    calcFunTxt = myReplaceAll(calcFunTxt, replaceStr1, "");
                    calcFunTxt = myReplaceAll(calcFunTxt, replaceStr2, "");
                    calcFunTxt = myReplaceAll(calcFunTxt, replaceStr3, "");
                    calcFunTxt = myReplaceAll(calcFunTxt, replaceStr4, "");
                    var id = "report1_" + gznr;
                    document.all[id].style.color = "#0000ff";//修改字体颜色
                }
            }
        }
    }
    var startNum = 25;
    if (calcFunTxt.indexOf("report1_autoCalc") < 0) {
        startNum = 8;
    }
    calcFunTxt = "report1_autoCalc=function" + calcFunTxt.substring(startNum, calcFunTxt.length);
    eval(calcFunTxt);
}

//重写方法【XMLEncode】
function overwriteXMLEncode() {
    var newFunText = 'XMLEncode=function(str){' +
		'	if(typeof(str)=="string"){' +
		'		var re = /&/g;' +
		'		str=str.replace(re,"&amp;");' +
		'		re = /</g;' +
		'		str=str.replace(re,"&lt;");' +
		'		re = />/g;' +
		'		str=str.replace(re,"&gt;");' +
		'		re = /\\\'/g;' +
		'		str=str.replace(re,"&apos;");' +
		'		re = /\\\"/g;' +
		'		str=str.replace(re,"&quot;");' +
		'		re = /\\r\\n/g;' +
		'		str=str.replace(re,"\\\\n");' +
		'		re = /\\n/g;' +
		'		str=str.replace(re,"\\\\n");' +
		'		return str;' +
		'	}else{' +
		'		return str;' +
		'	}' +
		'}';
    eval(newFunText);
}

//重写方法【_formatCalcValue】
function overwriteFormatCalcValue() {
    var newFunText = '_formatCalcValue=function(cell){' +
		'	if( cell.getAttribute( "bkj" ) == "true" ) return;' +
		'	if( cell.getAttribute( "digits" ) != null ) {' +
		'		var value = parseFloat( cell.getAttribute( "value" ) );' +
		'		if( ! isNaN( value ) ) {' +
		'			var digits = parseInt( cell.getAttribute( "digits" ) );' +
		'			value = value.toFixed( digits );' +
		'			var cellId = cell.getAttribute( "id" );' +
		'			var formatStr = cell.getAttribute( "format" );' +
		'			if(formatStr!=null && formatStr.length>=3){' +
		'				var lastThree = formatStr.substring(formatStr.length-3,formatStr.length);' +
		'				if(lastThree=="%25"){' +
		'					value = (value*100).toFixed(digits-2);' +
		'					$("#"+cellId).html(value+"%");' +
		'				}else{' +
		'					$("#"+cellId).html(value+"");' +
		'				}' +
		'			}else{' +
		'				$("#"+cellId).html(value+"");' +
		'			}' +
		'		}' +
		'	}' +
		'}';
    eval(newFunText);
}

//重写方法【_parseValue】
function overwriteParseValue() {
    var newFunText = '_parseValue=function(cell){' +
		'	var datatype = cell.getAttribute( "datatype" );' +
		'	if(datatype && datatype=="string"){' +
		'		return cell.getAttribute( "value" );' +
		'	}else{' +
		'		var value = parseFloat( cell.getAttribute( "value" ) );' +
		'		if( cell.getAttribute( "digits" ) != null ) {' +
		'			if( ! isNaN( value ) ) value = parseFloat( value.toFixed( parseInt( cell.getAttribute( "digits" ) ) ) );' +
		'		}' +
		'		return isNaN( value ) ? 0 : value;' +
		'	}' +
		'}';
    eval(newFunText);
}

//自动计算可修改 第三步：记录旧的计算值
function recordOldCalcVal() {
    if (lockList && lockList.length > 0) {
        for (var i = 0; i < lockList.length; i++) {
            var gzStr = lockList[i]; //单个锁定规则字符串
            var gzSz = gzStr.split(",");//单个锁定规则字符串以，分割形成字符串数组
            if (gzSz && gzSz.length > 0) {
                for (var j = 0; j < gzSz.length; j++) {
                    var gz = gzSz[j]; //单个规则（例如：LK21）
                    var gzlx = gz.substring(0, 1);//规则类型，只有L、U、C、M、ALOCK，表示锁定、放开、清除公式、自动计算可修改、全表锁定
                    var gznr = gz.substring(1, gz.length);//规则内容，表示具体单元格
                    if (gzlx == "M") {
                        var thisCellId = "report1_" + gznr;
                        $("#" + thisCellId).attr("oldCalcVal", $("#" + thisCellId).attr("value"));
                    }
                }
            }
        }
    }
}

//行式报表【自动计算可修改】记录旧的计算值
function dynamicRecordOldCalcVal() {
    if (lockList && lockList.length > 0) {
        for (var i = 0; i < lockList.length; i++) {
            var gzStr = lockList[i]; //单个锁定规则字符串
            var gzSz = gzStr.split(",");//单个锁定规则字符串以，分割形成字符串数组
            if (gzSz && gzSz.length > 0) {
                for (var j = 0; j < gzSz.length; j++) {
                    var gz = gzSz[j]; //单个规则（例如：LK21）
                    var gzlx = gz.substring(0, 1);//规则类型，只有L、U、C、M、ALOCK，表示锁定、放开、清除公式、自动计算可修改、全表锁定
                    var gznr = gz.substring(1, gz.length);//规则内容，表示具体单元格
                    if (gzlx == "M") {
                        $("tr[isdetail]:gt(0)").children("[id][calc][sc='" + gznr + "']").each(function (i) {
                            $(this).attr("oldCalcVal", $(this).attr("value"));
                        });
                    }
                }
            }
        }
    }
}

//自动计算可修改 第四步：初始值恢复
function initValRecover() {
    if (lockList && lockList.length > 0) {
        for (var i = 0; i < lockList.length; i++) {
            var gzStr = lockList[i]; //单个锁定规则字符串
            var gzSz = gzStr.split(",");//单个锁定规则字符串以，分割形成字符串数组
            if (gzSz && gzSz.length > 0) {
                for (var j = 0; j < gzSz.length; j++) {
                    var gz = gzSz[j]; //单个规则（例如：LK21）
                    var gzlx = gz.substring(0, 1);//规则类型，只有L、U、C、M、ALOCK，表示锁定、放开、清除公式、自动计算可修改、全表锁定
                    var gznr = gz.substring(1, gz.length);//规则内容，表示具体单元格
                    if (gzlx == "M") {
                        var thisCellId = "report1_" + gznr;
                        var newValue = parseFloat($("#" + thisCellId).attr("initVal"));
                        $("#" + thisCellId).attr("value", newValue);
                        _formatCalcValue(document.getElementById(thisCellId));
                    }
                }
            }
        }
    }
}

//行式报表【自动计算可修改】初始值恢复
function dynamicInitValRecover() {
    if (lockList && lockList.length > 0) {
        for (var i = 0; i < lockList.length; i++) {
            var gzStr = lockList[i]; //单个锁定规则字符串
            var gzSz = gzStr.split(",");//单个锁定规则字符串以，分割形成字符串数组
            if (gzSz && gzSz.length > 0) {
                for (var j = 0; j < gzSz.length; j++) {
                    var gz = gzSz[j]; //单个规则（例如：LK21）
                    var gzlx = gz.substring(0, 1);//规则类型，只有L、U、C、M、ALOCK，表示锁定、放开、清除公式、自动计算可修改、全表锁定
                    var gznr = gz.substring(1, gz.length);//规则内容，表示具体单元格
                    if (gzlx == "M") {
                        $("tr[isdetail]:gt(0)").children("[id][calc][sc='" + gznr + "']").each(function (i) {
                            var newValue = parseFloat($(this).attr("initVal"));
                            $(this).attr("value", newValue);
                            _formatCalcValue($(this).get(0));
                        });
                    }
                }
            }
        }
    }
}

//行式报表自动计算可修改 第五步：修改计算方法代码
function dynamicPourIntoCalc() {
    var newCalcFun = '_calcARow=function(row){' +
	'	if( row.deleted ) return;' +
	'	for( var i = 0; i < row.cells.length; i++ ) {' +
	'		var cell = row.cells[i];' +
	'		if( cell.getAttribute( "calc" ) ) {' +
	'			li_currCell = cell;' +
	'			var cellId = cell.getAttribute( "id" );' +
	'			var ACAM = cell.getAttribute( "ACAM" );' +
	'			if(ACAM && ACAM=="true"){' +
	'				var initFlag = cell.getAttribute("initFlag");' +
	'				var digits = parseInt(cell.getAttribute("digits"),10);' +
	'				var oldCalcVal = parseFloat(cell.getAttribute("oldCalcVal")).toFixed(digits);' +
	'				var newCalcVal = parseFloat(eval(cell.getAttribute("calc"))).toFixed(digits);' +
	'				if(newCalcVal != oldCalcVal){' +
	'					if(initFlag!="0"){' +
	'						var s = eval( cell.getAttribute( "calc" ) ) + "";' +
	'						$("#"+cellId).attr("oldCalcVal",s);' +
	'						$("#"+cellId).attr("value",s);' +
	'						_formatCalcValue( cell );' +
	'						if( row.getAttribute( "status" ) == "0" ){ $(row).attr( "status", "1" );}' +
	'						else if( row.getAttribute( "status" ) == "2" ){ $(row).attr( "status","3" );}' +
	'					}' +
	'				}' +
	'			}else{' +
	'				var s = eval( cell.getAttribute( "calc" ) ) + "";' +
	'				$("#"+cellId).attr("value",s);' +
	'				_formatCalcValue( cell );' +
	'				if( row.getAttribute( "status" ) == "0" ){ $(row).attr( "status", "1" );}' +
	'				else if( row.getAttribute( "status" ) == "2" ){ $(row).attr( "status","3" );}' +
	'			}' +
	'		}' +
	'	}' +
	'}';
    eval(newCalcFun);
}

//非行式报表自动计算可修改 第五步：修改计算方法代码
function pourIntoCalc() {
    if (lockList && lockList.length > 0) {
        var calcFunTxt = report1_autoCalc + '';
        for (var i = 0; i < lockList.length; i++) {
            var gzStr = lockList[i]; //单个锁定规则字符串
            var gzSz = gzStr.split(",");//单个锁定规则字符串以，分割形成字符串数组
            if (gzSz && gzSz.length > 0) {
                for (var j = 0; j < gzSz.length; j++) {
                    var gz = gzSz[j]; //单个规则（例如：LK21）
                    var gzlx = gz.substring(0, 1);//规则类型，只有L、U、C、M、ALOCK，表示锁定、放开、清除公式、自动计算可修改、全表锁定
                    var gznr = gz.substring(1, gz.length);//规则内容，表示具体单元格
                    if (gzlx == "M") {
                        var thisCellId = "report1_" + gznr;
                        var replaceStr1 = "document.getElementById( '" + thisCellId + "' ).setAttribute( 'value', value + \"\" );";
                        var replaceStr2 = "document.getElementById( '" + thisCellId + "' ).textContent = value + \"\";";
                        var replaceStr3 = "document.getElementById( '" + thisCellId + "' ).innerText = value + \"\";";
                        var replaceStr4 = "_formatCalcValue( document.getElementById( '" + thisCellId + "' ) );";
                        calcFunTxt = myReplaceAll(calcFunTxt, replaceStr2, "");
                        calcFunTxt = myReplaceAll(calcFunTxt, replaceStr3, "");
                        calcFunTxt = myReplaceAll(calcFunTxt, replaceStr4, "");
                        calcFunTxt = myReplaceAll(calcFunTxt, replaceStr1, "recover_" + thisCellId);
                        var newCalcText = '	var thisCellId = "' + thisCellId + '";' +
										'	var initFlag = $("#"+thisCellId).attr("initFlag");' +
										'	var digits = parseInt($("#"+thisCellId).attr("digits"),10);' +
										'	var oldCalcVal = parseFloat($("#"+thisCellId).attr("oldCalcVal")).toFixed(digits);' +
										'	var newCalcVal = value;' +
										'	if(newCalcVal != oldCalcVal){' +
										'		if(initFlag!="0"){' +
										'			$("#"+thisCellId).attr( "oldCalcVal", value );' +
										'			$("#"+thisCellId).attr( "value", value);' +
										'			$("#"+thisCellId).html(value);' +
										'			_formatCalcValue( document.getElementById( \'' + thisCellId + '\' ) );' +
										'		}' +
										'	}';
                        calcFunTxt = myReplaceAll(calcFunTxt, "recover_" + thisCellId, newCalcText);
                    }
                }
            }
        }
        calcFunTxt = "report1_autoCalc=" + calcFunTxt;
        eval(calcFunTxt);
    }
}

//行式报表自动计算可修改 第六步：初始化结束，放开公式计算
function allowCalc() {
    $("td[initFlag='0']").attr("initFlag", "1");
}

//行式报表全表自动计算
function dynamicAutoCalc() {
    li_currTbl = report1;
    var first = _groupFirstRow(report1);
    var last = _groupLastRow(report1);
    for (var i = first; i <= last; i++) {
        var row = report1.rows[i];
        if (row.getAttribute("isDetail")) _calcARow(row);
    }
    _calcGroup(report1);
    //无耻的再算一遍 开始
    for (var i = first; i <= last; i++) {
        var row = report1.rows[i];
        if (row.getAttribute("isDetail")) _calcARow(row);
    }
    _calcGroup(report1);
    //无耻的再算一遍 结束

    try { group_autoCalc(""); } catch (ex) { }
}

//展示填表帮助
function showTbbz(currCellId) {
    var id = currCellId.split("_")[1];
    if (tbbzList != null && tbbzList.length > 0) {
        var index = -1;
        for (var i = 0; i < tbbzList.length; i++) {
            var ids = tbbzList[i].id.dygid.split(",");
            for (var j = 0; j < ids.length; j++) {
                if (id == ids[j]) {
                    index = i;
                }
            }
        }
        if (index == -1) {
            window.top.showReportTbbz("");
        } else {
            window.top.showReportTbbz(tbbzList[index].txbz);
        }
    } else {
        window.top.showReportTbbz("");
    }

}

//设置报表全部单元格不可填写
function setReportWritable(report_table) {
    for (var row = 0; row < report_table.rows.length; row++) {
        var currRow = report_table.rows[row];//取得行 
        for (var col = 0; col < currRow.cells.length; col++) {
            var currCell = currRow.cells[col];//取得指定行列（单元格） 
            //设置为不可写（填） 
            currCell.onclick = _hideEditor;
            $(currCell).removeAttr("editstyle");
            $(currCell).attr("writable", false);
            $(currCell).attr("modifiable", false);
        }
    }
    //单选框全锁
    $("input[type='radio']").attr("disabled", true);
    //复选框全锁
    $("input[type='checkbox']").attr("disabled", true);
    setTimeout(hideInput, 100);
    allLock = true;
}

//根据单元格ID设置是否可写
function setReportCellWritable(id, writable) {

    if (dynamicBz == "N") {
        var _input_report_writable = writable;//设置为是否可写，boolean类型
        var cell = document.all[id];
        if (!writable) {//设置为不可写（填） 
            cell.onclick = _hideEditor;
            $("#" + id).removeAttr("writable");
            cell.style.backgroundColor = "rgb(225, 225, 225)";//修改选中单元格的背景色
        }
        else {//设置报表为可写（填） 
            var checkbox = $("#" + id).children(":checkbox").length;
            var radio = $("#" + id).children(":radio").length;
            //只有当前单元格不是复选框或单选按钮时，才放开TD
            if (checkbox == 0 && radio == 0) {
                cell.onclick = _displayEditor;
                cell.style.backgroundColor = "rgb(255, 255, 255)";//修改选中单元格的背景色
                $("#" + id).attr("editstyle", "1");//1表示数值  0表示字符
                $("#" + id).attr("inputdatatype", "2");//2表示数值  1表示字符
                $("#" + id).attr("writable", writable);
                $("#" + id).attr("modifiable", writable);
            }
        }
    } else {
        var dyg = (id.split("_"))[1];
        if (!writable) {//设置为不可写（填） 
            $("td[sc='" + dyg + "']").removeAttr("writable");
            $("td[sc='" + dyg + "']").attr("onclick", "_hideEditor;");
            $("td[sc='" + dyg + "']").css("background", "rgb(225, 225, 225)");//修改选中单元格的背景色
        }
        else {//设置报表为可写（填） 
            var checkbox = $("td[sc='" + dyg + "']").children(":checkbox").length;
            var radio = $("td[sc='" + dyg + "']").children(":radio").length;
            //只有当前单元格不是复选框或单选按钮时，才放开TD
            if (checkbox == 0 && radio == 0) {
                $("td[sc='" + dyg + "']").attr("onclick", "_displayEditor;");
                $("td[sc='" + dyg + "']").css("background", "rgb(225, 225, 225)");//修改选中单元格的背景色
                $("td[sc='" + dyg + "']").attr("editstyle", "1");//1表示数值  0表示字符
                $("td[sc='" + dyg + "']").attr("inputdatatype", "2");//2表示数值  1表示字符
                $("td[sc='" + dyg + "']").attr("writable", writable);
                $("td[sc='" + dyg + "']").attr("modifiable", writable);
            }
        }
    }
}

//增值税根据附表一数据获得一般纳税人生成主表的数据
function getYbnsrFb1Data() {
    debugger
    var zbDataList = new Array;		//主表数据数列
    //第1行第1列 = 附表一第9列第1至5行（1、2、3、4a、4b、5）之和 - 第9列第6、7行之和
    var c9r1 = parseFloat($('#report1_M8').attr('value'));
    var c9r2 = parseFloat($('#report1_M9').attr('value'));
    var c9r3 = parseFloat($('#report1_M10').attr('value'));
    var c9r4a = parseFloat($('#report1_M11').attr('value'));
    var c9r4b = parseFloat($('#report1_M12').attr('value'));
    var c9r5 = parseFloat($('#report1_M13').attr('value'));
    var c9r6 = parseFloat($('#report1_M14').attr('value'));
    var c9r7 = parseFloat($('#report1_M15').attr('value'));
    var r1c1 = (c9r1 + c9r2 + c9r3 + c9r4a + c9r4b + c9r5) - (c9r6 + c9r7);
    zbDataList.push(r1c1);
    //第1行第3列 = 附表一第9列第6、7行之和
    var r1c3 = c9r6 + c9r7;
    zbDataList.push(r1c3);
    //第4行第1列 = 附表一第7列第1至5行（1、2、3、4a、4b、5）之和
    var c7r1 = parseFloat($('#report1_K8').attr('value'));
    var c7r2 = parseFloat($('#report1_K9').attr('value'));
    var c7r3 = parseFloat($('#report1_K10').attr('value'));
    var c7r4a = parseFloat($('#report1_K11').attr('value'));
    var c7r4b = parseFloat($('#report1_K12').attr('value'));
    var c7r5 = parseFloat($('#report1_K13').attr('value'));
    var r4c1 = c7r1 + c7r2 + c7r3 + c7r4a + c7r4b + c7r5;
    zbDataList.push(r4c1);
    //第7行第1列 = 附表一第9列第16、17行之和
    var c9r16 = parseFloat($('#report1_M27').attr('value'));
    var c9r17 = parseFloat($('#report1_M28').attr('value'));
    var r7c1 = c9r16 + c9r17;
    zbDataList.push(r7c1);
    //第8行第1列 = 附表一第9列第18、19行之和
    var c9r18 = parseFloat($('#report1_M29').attr('value'));
    var c9r19 = parseFloat($('#report1_M30').attr('value'));
    var r8c1 = c9r18 + c9r19;
    zbDataList.push(r8c1);
    //第11行第1列 = （附表一第10列第1、3、4a行之和 - 第10列第6行）+（附表一第14列第2、4b、5行之和 - 第14列第7行）
    var c10r1 = parseFloat($('#report1_N8').attr('value'));
    var c10r3 = parseFloat($('#report1_N10').attr('value'));
    var c10r4a = parseFloat($('#report1_N11').attr('value'));
    var c10r6 = parseFloat($('#report1_N14').attr('value'));
    var c14r2 = parseFloat($('#report1_R9').attr('value'));
    var c14r4b = parseFloat($('#report1_R12').attr('value'));
    var c14r5 = parseFloat($('#report1_R13').attr('value'));
    var c14r7 = parseFloat($('#report1_R15').attr('value'));
    var r11c1 = (c10r1 + c10r3 + c10r4a - c10r6) + (c14r2 + c14r4b + c14r5 - c14r7);
    zbDataList.push(r11c1);
    //第11行第3列 = 附表一第10列第6行 + 第14列第7行
    var r11c3 = c10r6 + c14r7;
    zbDataList.push(r11c3);
    //第21行第1列 = 附表一（第10列第8、9a、10、11行之和-第10列第14行）+（第14列第9b、12、13a、13b行之和-第14列第15行）
    var c10r8 = parseFloat($('#report1_N16').attr('value'));
    var c10r9a = parseFloat($('#report1_N17').attr('value'));
    var c10r10 = parseFloat($('#report1_N19').attr('value'));
    var c10r11 = parseFloat($('#report1_N20').attr('value'));
    var c10r14 = parseFloat($('#report1_N25').attr('value'));
    var c14r9b = parseFloat($('#report1_R18').attr('value'));
    var c14r12 = parseFloat($('#report1_R21').attr('value'));
    var c14r13a = parseFloat($('#report1_R22').attr('value'));
    var c14r13b = parseFloat($('#report1_R23').attr('value'));
    var c14r15 = parseFloat($('#report1_R26').attr('value'));
    var r21c1 = (c10r8 + c10r9a + c10r10 + c10r11 - c10r14) + (c14r9b + c14r12 + c14r13a + c14r13b - c14r15);
    zbDataList.push(r21c1);
    //第21行第3列 = 附表一第10列第14行 + 第14列第15行
    var r21c3 = c10r14 + c14r15;
    zbDataList.push(r21c3);
    return zbDataList;
}

//增值税将获得的主表数据写到一般纳税人主表中
function setYbnsrZbByList(p1, p2, p3, p4, p5, p6, p7, p8, p9) {
    //第1行第1列
    $('#report1_E11').attr('value', p1);
    $('#report1_E11').html(p1);
    //第1行第3列
    $('#report1_H11').attr('value', p2);
    $('#report1_H11').html(p2);
    //第4行第1列
    $('#report1_E14').attr('value', p3);
    $('#report1_E14').html(p3);
    //第7行第1列
    $('#report1_E17').attr('value', p4);
    $('#report1_E17').html(p4);
    //第8行第1列
    $('#report1_E18').attr('value', p5);
    $('#report1_E18').html(p5);
    //第11行第1列
    $('#report1_E21').attr('value', p6);
    $('#report1_E21').html(p6);
    //第11行第3列 
    $('#report1_H21').attr('value', p7);
    $('#report1_H21').html(p7);
    //第21行第1列
    $('#report1_E31').attr('value', p8);
    $('#report1_E31').html(p8);
    //第21行第3列
    $('#report1_H31').attr('value', p9);
    $('#report1_H31').html(p9);
    report1_autoCalc('');
    submit();
}

//所得税A类主表第9行数据写到附表3第2、3行数据
function setSdsAFB3ByList(zbR2BqNum, zbR2LjNum, zbR3BqNum, zbR3LjNum) {
    /**
	//附表3第2行第1列
	$('#report1_G6').attr('value',zbR2BqNum);
	$('#report1_G6').html(zbR2BqNum);
	$("td[id='report1_G6']").parent().attr("status","1");
	**/
    //附表3第2行第2列
    $('#report1_H6').attr('value', zbR2LjNum);
    $('#report1_H6').html(zbR2LjNum);
    $("td[id='report1_H6']").parent().attr("status", "1");
    /**
	//附表3第3行第1列
	$('#report1_G7').attr('value',zbR3BqNum);
	$('#report1_G7').html(zbR3BqNum);
	$("td[id='report1_G7']").parent().attr("status","1");
	**/
    //附表3第3行第2列
    $('#report1_H7').attr('value', zbR3LjNum);
    $('#report1_H7').html(zbR3LjNum);
    $("td[id='report1_H7']").parent().attr("status", "1");
    dynamicAutoCalc();
    //report1_autoCalc( '' );
    //submit();
}

//所得税A类附表1获得生成主表数据
function getJdsdsFb1Data() {
    var zbDataList = new Array;		//主表数据数列
    //第1行第1列
    var c2r1 = parseFloat($('#report1_H5').attr('value'));
    zbDataList.push(c2r1);
    //第1行第2列
    var c2r2 = parseFloat($('#report1_I5').attr('value'));
    zbDataList.push(c2r2);
    return zbDataList;
}

//所得税A类附表一第1行数据写到主表第6行数据
function setSdsAZbRow6(c2r1, c2r2) {
    //主表第6行第1列
    $('#report1_G10').attr('value', c2r1);
    $('#report1_G10').html(c2r1);
    //主表第6行第2列
    $('#report1_H10').attr('value', c2r2);
    $('#report1_H10').html(c2r2);
    report1_autoCalc('');
}

//所得税A类附表2获得生成主表数据
function getJdsdsFb2Data() {
    var zbDataList = new Array;		//主表数据数列
    //第14行第11列
    var c14r11 = parseFloat($('#report1_N22').attr('value'));
    zbDataList.push(c14r11);
    //第14行第16列
    var c14r16 = parseFloat($('#report1_S22').attr('value'));
    zbDataList.push(c14r16);
    return zbDataList;
}

//所得税A类附表二第14行第11列和第16列数据写到主表第7行数据
function setSdsAZbRow7(c14r11, c14r16) {
    //主表第6行第1列
    $('#report1_G11').attr('value', c14r11);
    $('#report1_G11').html(c14r11);
    //主表第6行第2列
    $('#report1_H11').attr('value', c14r16);
    $('#report1_H11').html(c14r16);
    report1_autoCalc('');
}

//报表格子赋值(不支持行式报表)
function setTableValue(cellid, val) {
    $('#' + cellid).attr('value', val);
    $('#' + cellid).html(val);
    report1_autoCalc('');
}

//报表格子赋值(行式报表,固定行次)
function setDynamicTableValue(cellidList, valList) {
    var idStr = new Array();
    var valStr = new Array();
    idStr = cellidList.split(","); //拆分 ID 字符串
    valStr = valList.split(",");//拆分 值 字符串
    for (var i = 0; i < idStr.length; i++) {
        $('#' + idStr[i]).attr('value', valStr[i]);
        $('#' + idStr[i]).html(valStr[i]);
        $("td[id='" + idStr[i] + "']").parent().attr("status", "1");
    }
    dynamicAutoCalc();
}

function _cellValueChanged(cell) {
    var cellId = cell.getAttribute("id");
    var text = $("#" + cellId).html();
    if (!isNaN(text)) {
        if (text != "") {
            var inputdatatype = cell.getAttribute("inputdatatype");
            if (inputdatatype == "2") {//如果是数值型
                var digits = parseInt(cell.getAttribute("digits"), 10);
                if (isNaN(digits) == false) {
                    var newValue = parseFloat(text).toFixed(digits);
                    var cellId = cell.getAttribute("id");
                    if (isNaN(newValue)) {
                        $("#" + cellId).attr("value", "");
                        alert("数值格式不正确！请重新输入！");
                    } else {
                        $("#" + cellId).attr("value", newValue);
                    }
                }
                _formatCalcValue(cell);
            }
        }
    }
}

//浮点数加法运算
function FloatAdd(arg1, arg2) {
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    with (Math) {
        m = pow(10, max(r1, r2));
        return (arg1 * m + arg2 * m) / m;
    }
}
//浮点数减法运算
function FloatSub(arg1, arg2) {
    var r1, r2, m, n;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    with (Math) {
        m = pow(10, max(r1, r2));
        n = (r1 >= r2) ? r1 : r2;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    }
}
//浮点数乘法运算
function FloatMul(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
    try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 * r2) / pow(10, t2 + t1);
    }
}
//浮点数除法运算
function FloatDiv(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
    try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * pow(10, t2 - t1);
    }
}

//获取栏次数据
function getReportDataById(id) {
    var cell = $("#" + id);
    if (cell) {
        return $("#" + id).attr("value");
    } else {
        window.top.alert('错误', "当前不存在id为【" + id + "】的单元格，无法取得数据。", 'warning');
        return null;
    }
}

//获取任意报表（在TAB中显示的）的任意栏次数据
function getTabTableData(title, id) {
    return window.parent.getTableData(title, id);
}

//判断两日期大小
function dateCompare(startdate, enddate) {
    var arr = startdate.split("-");
    var starttime = new Date(arr[0], arr[1], arr[2]);
    var starttimes = starttime.getTime();

    var arrs = enddate.split("-");
    var lktime = new Date(arrs[0], arrs[1], arrs[2]);
    var lktimes = lktime.getTime();
    if (starttimes > lktimes) {
        return false;
    } else {
        return true;
    }
}

//加计扣除归集表动态行序号递增小数点
function groupMaxNumberJJKCGJB() {
    var ld = maxJJKCGJB(li_currCell.getAttribute("sc"));
    var xh = "6." + (parseInt((ld.split("."))[1], 10) + 1);
    return xh;
}

function maxJJKCGJB(cellId) {
    var currRow = li_currCell.parentNode;
    var prow = currRow;
    if (!prow.getAttribute("ndr")) prow = document.getElementById(prow.getAttribute("pid"));
    var valueStr = "";
    var startStr = "";
    var value = Number.MIN_VALUE;
    var first = _groupFirstRow(prow);
    var last = _groupLastRow(prow);
    for (var i = first; i <= last; i++) {
        var row = li_currTbl.rows[i];
        if (row.deleted) continue;
        for (var j = 0; j < row.cells.length; j++) {
            var cell = row.cells[j];
            if (cell.getAttribute("sc") == cellId) {
                if (cell.getAttribute("value") != null && cell.getAttribute("value").length > 0) {
                    var v = cell.getAttribute("value");
                    if (!isNaN(v)) {
                        startStr = (v.split("."))[0] + ".";
                        var a = parseInt((v.split("."))[1], 10);
                        value = Math.max(value, a);
                    }
                    else {
                        alert("\"" + cell.getAttribute("value") + "\"" + __CCC);
                        return "NaN";
                    }
                }
                break;
            }
        }
    }
    if (value == Number.MIN_VALUE) {
        valueStr = startStr + "0";
    } else {
        valueStr = startStr + value + "";
    }
    return valueStr;
}

