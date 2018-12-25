var sb167_resDataOnSave;// 保存成功后的数据
var sb167_resDataOnInit;// 初始化成功后的数据

var sb167_resData_nsrxxMap;// 只有纳税人信息map
var sb167_resData_sbxxList;// 主税的sbxxList
var sb167_jmxxList = null;// 对应的jmxxList
var sb167_jmxxforSave = null;// 保存的时候需要的减免信息List
var sb167_fjsSbxxList = null;// 附加税的sbxxList



var sb167_zbqr = false;// 判断是不是嵌入到主表中去，如果是的话为true，不是为false
var sb167_zbSbxxList;
var sb167_zbNsrxxForm;
var mxMesgList = null;// 重复申报的明细信息
var sb000_djxh;//登记序号
var sb000_dwfwdzqdBz;//堤围费未达起征点标记 Y 打起征点，N未达起征点
var jmxzList1 = [];
function initSb(resData) {
    if (parent.window.location.href.indexOf("cxbj=Y") != -1) {
        $w('bcBtn').disabled();
        $w('drBtn').disabled();
    }
    var csh = resData.getAttr("csh");
    if (csh != undefined && csh == 0) {
        return;
    }
    // 原油天然气不需要税源编号
    if (parent.ylmc == 'yytrq') {
        $w("fjsSbxxGrid").hideColumn("sybh");
    }

    var zbqr = pc.getResData("zbqr", resData);
    sb000_djxh = resData.getAttr("djxh");
    sb000_dwfwdzqdBz = resData.getAttr("dwfwdzqdBz");
    jmxzList1 = resData.getDataByDataName("jmxzList").data;
    // swordAlert(zbqr);
    // 是从主表嵌入的
    if ($chk(zbqr) && "Y" == zbqr.value) {
        $w("bcBtn").hide();
        $w("drBtn").hide();
        sb167_zbqr = true;
        // 隐藏按钮

        // 获取主表的认定信息
        sb167_zbSbxxList = parent.sb012_sbxxList;
        // 获取主表的纳税人信息
        sb167_zbNsrxxForm = parent.$w("nsrxxForm").getSubmitData();

        // 与后台交互
        var initBtn = new SwordSubmit();
        initBtn.pushData('cs', "zsqr");
        initBtn.pushData(sb167_zbNsrxxForm);
        initBtn.pushData(sb167_zbSbxxList);
        initBtn.setTid('PBS_SB167_init');
        initBtn.setFunction('onSuccess', 'zbqrOnSuccess');
        initBtn.submit();
    } else {
        // 正常的主页面跳转过来
        forSuccess(resData);
    }
}

/**
 * 正常进入时的跳转
 */
function forSuccess(resData) {
    // 不是主表嵌入的
    sb167_resDataOnInit = resData;
    var reCode = pc.getResData("reCode", resData);
    if (reCode != null && reCode != "" && reCode != undefined) {
        if (reCode.value == "01") {
            swordAlert("税种未登记，请先进行税（费）种认定！");
            $w('bcBtn').disabled();
            $w('drBtn').disabled();
            return;
        } else if (reCode.value == "02") {
            swordAlert("已有税种重复申报，请做错误更正！", {
                onOk: zzsdjTrue,
                onCancel: zzsdjFalse
            });
        }
    }

    // 获取明细的重复申报信息
    getCfsbMxXx(resData);


    // 获得各种值
    sb167_resData_nsrxxMap = pc.getResData("nsrxxForm", resData);

    try {
        // 要从这里面判断是否是自查补报是的话不录减免和预缴
        var sblxDm = sb167_resData_nsrxxMap.data.sblxDm.value;
        // if(sblxDm=="1"){
        if (sblxDm == SBConstants.getDM_SB_SBSX_ZCBB()) {// 自查补报
            // 不允 许录减免和预缴框
            var sbxxGrid = $w("fjsSbxxGrid");
            var sbxxGridDiv = sbxxGrid.dataDiv();
            var sbxxChildren = sbxxGridDiv.getChildren();
            var length = sbxxChildren.length;
            for (var i = 0; i < length; i++) {
                sbxxChildren[i].disable("jmse");
                sbxxChildren[i].disable("yjse1");
            }
        }
    } catch (e) {
        // 不允许录减免和预缴框
        var sbxxGrid = $w("fjsSbxxGrid");
        var sbxxGridDiv = sbxxGrid.dataDiv();
        var sbxxChildren = sbxxGridDiv.getChildren();
        var length = sbxxChildren.length;
        for (var i = 0; i < length; i++) {
            sbxxChildren[i].enable("jmse");
            sbxxChildren[i].enable("yjse1");
        }
    }


    sb167_resData_sbxxList = pc.getResData("sbxxList", resData);
    sb167_fjsSbxxList = pc.getResData("fjsxxList", resData);
    // 把减免信息拿出来
    // 将获取的减免信息存入全局变量sb167_jmxxList
    var tmpJmxxList = pc.getResData("jmxxList", resData);
    if (tmpJmxxList == null || tmpJmxxList == undefined || "" == tmpJmxxList) {
        sb167_jmxxList = null;
    } else {
        if (tmpJmxxList.trs.length == 0) {
            sb167_jmxxList = null;
        } else {
            sb167_jmxxList = tmpJmxxList;
        }
    }
    // 往页面上插值，同事判断重复申报
    var sbxxGrid = $w("fjsSbxxGrid");
    if ($chk(sb167_fjsSbxxList)) {
        var sbxxList = sb167_fjsSbxxList.trs;
        var sbxxListLength = sbxxList.length;
        for (var i = 0; i < sbxxListLength; i++) {
            var jmse = sbxxList[i].tds.jmse.value;
            var yjse1 = sbxxList[i].tds.yjse1.value;
            if (jmse == null || jmse == undefined || jmse == "") {
                sbxxList[i].tds.jmse.value = "0";
            }
            if (yjse1 == null || yjse1 == undefined || yjse1 == "") {
                sbxxList[i].tds.yjse1.value = "0";
            }
            sbxxGrid.insertRow(sbxxList[i]);
        }
        // 初始化之后进行公式计算
        var datadiv = sbxxGrid.dataDiv();
        var children = datadiv.getChildren();
        var datadivLength = children.length
        for (var i ; i < datadivLength; i++) {
            var dataValue = sbxxGrid.getOneRowData(children[i]);
            // 这个在另外的js里面formula的js
            js5(null, null, dataValue, null, children[i], null);
        }
        // 置红重复申报行
        redCfsb();
    }
}

/**
 * 嵌入到主表上的交互返回Onsuccess
 */
function zbqrOnSuccess(req, resData) {
    forSuccess(resData);
}

//function initAfter(resData){//附税有预缴税款的获取预缴税款信息。
//	var sbxxGrid = $w("fjsSbxxGrid").getCurPageGridData();
//	var yjskxxList = parent.gt3_yjskxxList;
//	var yjseCells = $w("fjsSbxxGrid").getCells("yjse1");
//	var ybtseCells = $w("fjsSbxxGrid").getCells("ybtse");
//	for(var i=0;i<sbxxGrid.trs.length;i++)
//	{
//		for(var j =0 ;j<yjskxxList.trs.length;j++)
//		{
//			var zspmDm= sbxxGrid.trs[i].tds.zspmDm.value;
//			var yjskzspmDm = yjskxxList.trs[j].tds.zspmDm.value;
//			var yjsehj = sbxxGrid.trs[i].tds.yjse1.value;
//			if(zspmDm==yjskzspmDm)
//			{
//				var grid = $w('fjsSbxxGrid');
//				yjsehj = yjsehj.accAdd(yjskxxList.trs[j].tds.yjye1.value);
//				var ybtsenew = (sbxxGrid.trs[i].tds.ybtse.value).subtract(yjskxxList.trs[j].tds.yjye1.value);
//				grid.updateCell(yjseCells[i],yjsehj);
//				grid.updateCell(ybtseCells[i],ybtsenew);
//			}
//		}
//	}
//	
//}
function zzsdjTrue() {

}
function zzsdjFalse() {

}

// 减免信息的计算和弹窗
function jmxxAndJs(realvalue, showvalue, rowData, el, row, srcRealvalue) {
    // 在这里进行判断，需不需要弹出
    // var name = inputEl.target.name;
    /*
        * if(sb167_jmxxList==null){ var value2 = rowData.getValue("jmse") / 1;
        * if(value2!=0){ swordAlert("没有减免税务事项通知书，不能录入减免税额"); } // 没有通知书要置零
        * jsForNoJm(realvalue, showvalue, rowData, el, row, srcRealvalue); return;
        * }else{ // 如果有通知书，但是征收项目对不上也不让存' var flag = false; var zsxmDm =
        * rowData.getValue("zsxmDm"); // alert(zsxmDm);
        * if(zsxmDm!=null&&zsxmDm!=undefined&&zsxmDm!=""){ var jmTrs =
        * sb167_jmxxList.trs; var jmTrsLength = jmTrs.length; for(var i=0;i<jmTrsLength;i++){
        * var jmZsxmDm = jmTrs[i].tds.zsxmDm.value; if(zsxmDm==jmZsxmDm){ flag =
        * true; break; } } } if(flag){ var value2 = rowData.getValue("jmse") / 1;
        * var value1 = rowData.getValue("ynse")/1; if(value1<value2){
        * swordAlert("减免不能大于应纳税额"); jsForNoJm(realvalue, showvalue, rowData, el,
        * row, srcRealvalue); } else if(value2!=0){ // //打开减免信息税务事项通知书界面 var zspmDm =
        * rowData.getValue("zspmDm");// 要根据征收品目代码进行比较 openJmxxPageBtn =
        * $w('openJmxxPageBtn'); openJmxxPageBtn.setTid("PBS_SB000_openJmxxPage");
        * swordAlertIframe('', { titleName : "减免信息税务事项通知书", width :600, height :
        * 500, param : window, jmxxList:sb167_jmxxList, zspmDm:zspmDm,
        * rowData:rowData, isNormal : 'true', isMax : 'true', isClose : 'true',
        * isMin : "true", submit : openJmxxPageBtn }); } }else{
        * swordAlert("本项目没有减免税务事项通知书，不能录入减免税额"); // 没有通知书要置零 jsForNoJm(realvalue,
        * showvalue, rowData, el, row, srcRealvalue); }
        *  }
        */
    var value2 = rowData.getValue("jmse") / 1;
    var value1 = rowData.getValue("ynse") / 1;
    if (value1 < value2) {
        swordAlert("减免不能大于应纳税额");
        jsForNoJm(realvalue, showvalue, rowData, el, row, srcRealvalue);
    }
    fs5(realvalue, showvalue, rowData, el, row, srcRealvalue);
}

function jmHd(rowData) {
    if (GyIsTdjm(sb167_jmxxList) && rowData.getValue('jmse') / 1 > sb167_jmxxList.trs[0].tds.jzed.value / 1) {
        swordAlert("您输入的减免额大于规定减免,请重新输入");
        $w('bcBtn').disabled();
    } else {
        $w('bcBtn').enabled();
    }
}


// 回调函数，jmxxList的返回页面
function setJmxx(allData, checkedData) {
    // 为显示而生
    sb167_jmxxList = JSON.decode(allData);
    // 为像后台传值
    var tmpforSave = JSON.decode(checkedData);
    if (tmpforSave == null || tmpforSave == undefined || "" == tmpforSave) {
        sb167_jmxxforSave = null;
    } else {
        if (tmpforSave.trs.length == 0) {
            sb167_jmxxforSave = null;
        } else {
            sb167_jmxxforSave = tmpforSave;
        }
    }
}
/**
 * 为减免信息计算
 * 
 * @param realvalue
 * @param showvalue
 * @param rowData
 * @param el
 * @param row
 * @param srcRealvalue
 * @return
 */
function jsForNoJm(realvalue, showvalue, rowData, el, row, srcRealvalue) {
    // if(rowData.getValue('zhl')!=null && rowData.getValue('dkbjyb')!=null){
    var grid = $w('fjsSbxxGrid');// 表格对象
    var value7 = 0
    var result = {
        "tds": {
            "jmse": {
                "value": value7
            }
        }
    };
    grid.updateRow(row, result);
    fs5(realvalue, showvalue, grid.getOneRowData(row), el, row, srcRealvalue)
}


function getSumYjye1(rowData) {
    var yjye1 = rowData.getValue('yjse1') / 1;

    var zspmDm = rowData.getValue('zspmDm') / 1;
    var rowNum = rowData.getValue('sb167Row') / 1;



    var allGridDa = $w("fjsSbxxGrid").getCurPageGridData();
    var allGridDataTrs = allGridDa.trs;
    var allGridDataTrsLength = allGridDataTrs.length;



    var yjyeSum = yjye1;
    // 前期框架没有提供自动回填，并且隐藏存储所有数据的功能，只能这么写了，现在提供了.
    for (var i = 0; i < allGridDataTrsLength; i++) {
        var zspmDmInList = allGridDataTrs[i].tds.zspmDm.value;
        var rowNumInList = allGridDataTrs[i].tds.sb167Row.value;

        // 统计相同品目的余额
        if (rowNumInList != rowNum && zspmDmInList == zspmDm) {
            var yjye1InList = allGridDataTrs[i].tds.yjse1.value;
            if ($chk(yjye1InList)) {
                yjyeSum = yjyeSum.accAdd(yjye1InList);
            }
        }
    }

    return yjyeSum;

}
/**
 * 预缴余额监控
 * 
 * @param realvalue
 * @param showvalue
 * @param rowData
 * @param el
 * @param row
 * @param srcRealvalue
 * @return
 */
function yjyeJs(realvalue, showvalue, rowData, el, row, srcRealvalue) {
    // 得到填的值
    // var yjye1 = rowData.getValue('yjse1')/1;
    // 获得对应的序号好去fjsList里面去查
    var rowNum = rowData.getValue('sb167Row') / 1;
    // 查找对应的fjsList的值
    var tr = getFjsTd(rowNum);
    var yjze = tr.tds.yjze.value / 1;
    // alert(yjze);

    // 要把所有对应的相同品目的预缴都加上才能进行预缴余额的计算
    var yjye1 = getSumYjye1(rowData);


    if (yjye1 > yjze) {
        swordAlert("已缴税额不能大于" + yjze);
        var result = {
            "tds": {
                "yjse1": {
                    "value": 0
                }
            }
        };
        var grid = $w('fjsSbxxGrid');
        grid.updateRow(row, result);
        fs5(realvalue, showvalue, grid.getOneRowData(row), el, row, srcRealvalue);
    } else {
        fs5(realvalue, showvalue, rowData, el, row, srcRealvalue);
    }

}

/**
 * 根据传过来的行数找到对应的fjslist中对应的行
 * 
 * @param rowNum
 * @return
 */
function getFjsTd(rowNum) {
    var sb167_fjsSbxxListTrs = sb167_fjsSbxxList.trs;
    var length = sb167_fjsSbxxListTrs.length;
    for (var i = 0; i < length; i++) {
        var num = sb167_fjsSbxxListTrs[i].tds.sb167Row.value / 1;
        if (num == rowNum) {
            return sb167_fjsSbxxListTrs[i];
        }
    }
    swordAlert("error");
}


// 保存前校验点击保存按钮，触发saveSbxx()方法，首先根据页面数据项组装隐藏的volist，
// 其中xssr为页面上的计税依据；
// msxse为0；
// jmsr为页面上的减免税额/税率；
// ysxssrje 为xssr-jmsr；
// ynse为页面上的本期应纳税额，
// jmse为页面上的减免税额；
// yjse1为页面上的已缴税额；
// se为页面上的本期应补（退）税额；
// jsyj为页面上的计税依据
// 2）当申报类型为正常申报时，录入减免税额时，系统自动检测录入的减免税额是否大于税务机关批准的减免税额，
// 如果是系统提示减免税额应该小于或等于税务机关批准的减免税额。
// 3）当申报类型为正常申报时，录入已缴税额时，系统自动检测录入的已缴税额是否大于系统记录的相同属期的预缴税款余额。
// 如果是系统提示“录入的已缴税额不能大于系统已记录的相同属期的预缴税款余额。”

function beforeSave() {
    // 这个zbPzxh参数是嵌入到主表的时候传过来的，其他时候不传
    $w('bcBtn').disabled();
    // 首先判断减免
    // 判断是否jmxxList添置了，但是没有选jmxxListForSave里面的值
    // 先判断是否填值，确定填的都是正值了
    var grid = $w('fjsSbxxGrid');
    var allGridDa = grid.getCurPageGridData();
    if (sb167_jmxxforSave == null) {
        var count = 0;
        var length = allGridDa.trs.length;
        for (var i = 0; i < length; i++) {
            // count += allGridDa.trs[i].tds.jmse.value/1;
            count = (count).accAdd(allGridDa.trs[i].tds.jmse.value / 1);
        }
        /*
         * if(count!=0){ swordAlert("没有选择减免税务事项通知书"); $w('bcBtn').enabled();
         * $w("bcBtn").stop(); return false; }
         */
    }

    // 然后将表单数据和隐藏的fjsxxList对应起来，还有赋值
    var allGridDataTrs = allGridDa.trs;
    var allGridDataTrsLength = allGridDataTrs.length;

    // * 减免不能大于应纳税额
    if (!checkJmAndYnse()) {
        $w('bcBtn').enabled();
        $w("bcBtn").stop();
        return false;
    }
    var fjsSbxxGrid = $w("fjsSbxxGrid").getAllGridData();
    var dataxml = {};
    dataxml['gridName'] = {
        'value': 'fjsSbxxGrid'
    };
    dataxml['gridData'] = {
        'value': fjsSbxxGrid
    };
    dataxml['flag'] = {
        'value': 1
    };
    //  if ($chk(this.parent[this.name])){
    //	  var box = this.parent[this.name];
    //	  box.close();
    //  }
    parent.TheMainPage(dataxml);
}
function saveSbxxOnSuccess(req, resData) {
    if (sb167_zbqr) {// 是主表嵌入的
        $w("fjsSbxxGrid").readonly();
    } else {
        $w('bcBtn').disabled();
        $w('drBtn').disabled();
        sb167_resDataOnSave = resData;
        var box = this.parent[this.name];
        // swordAlert('保存成功', {onOk:saveSbxxOnSuccessFjs});//新附加税传奇，不再提示征收开票了
        swordAlert('保存成功', {
            onClose: function () {
                backToZb(box)
            }
        });
    }
}
function backToZb(box) {
    var yzpzxhList = pc.getResData("yzpzxhList", sb167_resDataOnSave);
    // 回调函数，把yzpzxh加上
    box.options.param.fbPutPzxh(JSON.encode(yzpzxhList));
    // close后会调用那个主页面的函数
    box.close();
}
/**
 * 保存失败
 * 
 * @return
 */
function saveSbxxOnError() {
    // swordAlert('保存失败');
}
/**
 * 提示一般征收开票
 * 
 * @return
 */
function saveSbxxOnSuccessFjs() {
    swordConfirm("是否进行一般征收开票？", { okBtnName: "是", cancelBtnName: "否", onOk: saveSbxxOnSuccessFjsOnOK, onError: saveSbxxOnSuccessFjsOnError });
}
/**
 * 进行一般征收开票
 * 
 * @return
 */
function saveSbxxOnSuccessFjsOnOK() {
    var yzpzxhList = pc.getResData("yzpzxhList", sb167_resDataOnSave);
    var djxh = pc.getResData("djxh", sb167_resDataOnSave);
    var zskpBtn = $w("zskpBtn");

    zskpBtn.pushData(yzpzxhList);
    zskpBtn.pushData(djxh);
    zskpBtn.setTid("PBS_ZS040_initViewBysb");
    zskpBtn.submit();
}
/**
 * 不进行一般征收开票
 * 
 * @return
 */
function saveSbxxOnSuccessFjsOnError() {
    // alert("不进行一般征收开票");
}


// 删除行，直接删除不往后传
function deleteOneRow() {
    if (sb167_jmxxTrueOrFalse) {
        // 如果已经获取了减免信息，就不再允许删行了
        swordAlert("已获取减免信息，不准删除行");
    }
    var row = $w('fjsSbxxGrid').getCheckedRow();
    if (row == null) {
        swordAlert('请选择要删除的行');
        return;
    }
    $w('fjsSbxxGrid').deleteRow(row);
}

/**
 * 减免不能大于应纳税额
 */
function checkJmAndYnse() {
    var fjsSbxxGrid = $w('fjsSbxxGrid');
    var gridData = fjsSbxxGrid.getCurPageGridData();
    var length = gridData.trs.length;
    for (var i = 0; i < length; i++) {
        var ynse = gridData.trs[i].tds.ynse.value / 1;
        var jmse = gridData.trs[i].tds.jmse.value / 1;
        if (jmse > ynse) {
            swordAlert("减免税额不能大于应纳税额");
            return false;
        }
    }
    return true;
}


/**
 * 减免性质或者减免金额不能大于
 */

function checkJmxzAndJmje() {
    var fjsSbxxGrid = $w('fjsSbxxGrid');
    var gridData = fjsSbxxGrid.getCurPageGridData();
    var length = gridData.trs.length;
    for (var i = 0; i < length; i++) {
        var ynse = gridData.trs[i].tds.ynse.value / 1;
        var jmse = gridData.trs[i].tds.jmse.value / 1;
        if (jmse > ynse) {
            swordAlert("减免税额不能大于应纳税额");
            return false;
        }
    }
    return true;
}
/**
 * 嵌入到主税页面上的计税依据的计算
 */
function fixJsyj(jsyj, ynse, zsuuid) {

    var fjsSbxxGrid = $w("fjsSbxxGrid");
    var allRows = fjsSbxxGrid.dataDiv().getChildren();
    var length = allRows.length
    for (var i = 0; i < length; i++) {
        // 公式计算
        var oneRowData = fjsSbxxGrid.getOneRowData(allRows[i]);
        var rdzsuuid = oneRowData.tds.rdzsuuid.value;
        if (zsuuid == rdzsuuid) {
            var d = {};
            var szbz = oneRowData.tds.szbz.value;
            if (szbz == "1") {
                oneRowData.tds.jsyj.value = ynse;
            } else {
                oneRowData.tds.jsyj.value = jsyj;
            }

            fjsSbxxGrid.updateRow(allRows[i], oneRowData);
            fs5(null, null, oneRowData, null, allRows[i], null);
            var newOneRowData = fjsSbxxGrid.getOneRowData(allRows[i])
            fs8(null, null, newOneRowData, null, allRows[i], null);
        }
    }
}

/**
 * 特定减免的时候，嵌入到主税页面的时候，需要调整减免余额
 */
function changeJzed(zsJmse) {
    if ($chk(sb167_jmxxList)
     && $chk(sb167_jmxxList.trs)
     && $chk(sb167_jmxxList.trs[0])
     && $chk(sb167_jmxxList.trs[0].tds)
     && $chk(sb167_jmxxList.trs[0].tds.jzed)) {
        if (sb167_jmxxList.trs[0].tds.jzed.value / 1 - zsJmse / 1 < 0) {

        } else {
            sb167_jmxxList.trs[0].tds.jzed.value = sb167_jmxxList.trs[0].tds.jzed.value / 1 - zsJmse / 1;
        }
    }
}


/**
 * 营业税主表的起征点标志传过来后，进行判断用来更新附加税的起征点，嵌入到主税页面的时候
 */
function changeDataWithQzd(qzdbz) {


    if (qzdbz == "Y") {
        var sbxxGrid = $w("fjsSbxxGrid");
        var allRows = sbxxGrid.dataDiv().getChildren();
        var length = allRows.length
        for (var i = 0; i < length; i++) {
            var row = allRows[i];
            var result = {
                "tds": {
                    "jsyj": {
                        "value": "0.00"
                    },
                    "ynse": {
                        "value": "0.00"
                    },
                    "jmse": {
                        "value": "0.00"
                    },
                    "yjse1": {
                        "value": "0.00"
                    },
                    "ybtse": {
                        "value": "0.00"
                    }
                }
            };
            sbxxGrid.updateRow(row, result);
        }
    }
}

/**
 * 获取重复申报的明细信息，并提示
 */
function getCfsbMxXx(resData) {
    mxMesgListObj = pc.getResData("mxMesgList", resData);
    if ($chk(mxMesgListObj)) {
        if ($chk(mxMesgListObj.value)) {
            mxMesgList = mxMesgListObj.value
        } else {
            mxMesgList = null;
        }
    } else {
        mxMesgList = null;
    }
}

/**
 * 如果有重复申报就标红
 */
function redCfsb() {
    if ($chk(mxMesgList)) {
        var allRows = $w("fjsSbxxGrid").dataDiv().getChildren();
        var length = allRows.length;
        for (var i = 0; i < length; i++) {
            var singleRow = allRows[i];
            var rowData = $w("fjsSbxxGrid").getOneRowData(singleRow);// rdpzuuid
            if ($chk(rowData.tds.rdpzuuid)) {
                var rdpzuuid = rowData.tds.rdpzuuid.value;
                if (mxMesgList.indexOf(rdpzuuid) != -1) {
                    singleRow.setStyle('color', 'red');
                } else {
                    singleRow.setStyle('color', '');
                }
            }
        }
    } else {
        var allRows = $w("fjsSbxxGrid").dataDiv().getChildren();
        var length = allRows.length;
        for (var i = 0; i < length; i++) {
            var singleRow = allRows[i];
            var rowData = $w("fjsSbxxGrid").getOneRowData(singleRow);// rdpzuuid
            if ($chk(rowData.tds.rdpzuuid)) {
                var rdpzuuid = rowData.tds.rdpzuuid.value;
                singleRow.setStyle('color', '');
            }
        }
    }
}

/**********************************************
 * 验证计算已缴税额
 * 
 */
function jsYjse(realvalue, showvalue, rowData, el, row, srcRealvalue) {
    var grid = $w('fjsSbxxGrid');// 表格对象
    var yjskxxList = parent._arrVars['gt3_yjskxxList'];
    var yjse1 = rowData.getValue('yjse1');
    var yjseHj = 0.00;
    var zspmDm = rowData.getValue('zspmDm');
    var zspmmc = rowData.getValue('zspmmc');
    var fjsSbxxGrid = $w("fjsSbxxGrid").getCurPageGridData();// 表格对象
    for (var i = 0; i < fjsSbxxGrid.trs.length; i++) {
        if (zspmDm == fjsSbxxGrid.trs[i].tds.zspmDm.value) {
            yjseHj = yjseHj.accAdd(fjsSbxxGrid.trs[i].tds.yjse1.value);
        }
    }
    var yjyeHj = 0.00;
    if (yjskxxList != null && yjskxxList != undefined) {
        for (var j = 0; j < yjskxxList.trs.length; j++) {
            if (zspmDm == yjskxxList.trs[j].tds.zspmDm.value) {
                yjyeHj = yjyeHj.accAdd(yjskxxList.trs[j].tds.yjye1.value);
            }
        }
    }
    if (yjseHj > yjyeHj) {
        //		swordAlertWrong("录入行的征收品目【"+zspmmc+"】预缴总额为："+yjyeHj+" ;录入的已缴税额已大于该值，请检查！");
        //		var yjse1_new = {
        //		"tds" : {
        //			"yjse1" : {
        //				"value" : 0.00
        //			}
        //		}
        //	};
        //	grid.updateRow(row, yjse1_new);
        var ybtse = emptyToZ((rowData.getValue('ynse') / 1).subtract(rowData.getValue('jmse') / 1).subtract(0.00));
        var ybtse_new = {
            "tds": {
                "ybtse": {
                    "value": ybtse
                }
            }
        };
        grid.updateRow(row, ybtse_new);
        return;
    }

    yjse1 = emptyToZ(getBqKyyjje(yjskxxList, rowData.getValue('zspmDm'), yjse1));
    var ybtse = emptyToZ((rowData.getValue('ynse') / 1).subtract(rowData.getValue('jmse') / 1).subtract(yjse1 / 1));

    var yjse1_new = {
        "tds": {
            "yjse1": {
                "value": yjse1
            }
        }
    };
    grid.updateRow(row, yjse1_new);

    var ybtse_new = {
        "tds": {
            "ybtse": {
                "value": ybtse
            }
        }
    };
    grid.updateRow(row, ybtse_new);
}




/**
 * 过滤减免性质
 * @param dataObj
 * @param inputEl
 * @param obj
 * @return
 */
function jmxzFilter(dataObj, inputEl, obj) {
    var jmxzList = jmxzList1;
    var zsxmDm;
    var zspmDm;
    var rowData = $w("fjsSbxxGrid").getCheckedRowData();
    if (rowData.tds.wdqzdBz.value == "N") {
        return jmxzList;
    }
    if (!$chk(rowData) || rowData == null || rowData == undefined) {
        return dataObj;
    }
    var queryBtn = new SwordSubmit();
    queryBtn.pushData("djxh", sb000_djxh);
    queryBtn.pushData("zsxmDm", rowData.tds.zsxmDm.value);
    queryBtn.pushData("zspmDm", rowData.tds.zspmDm.value);
    queryBtn.pushData("skssqq", rowData.tds.skssqq.value);
    queryBtn.pushData("skssqz", rowData.tds.skssqz.value);
    queryBtn.setOptions({
        async: 'false',
        mask: 'false',
        ctrl: 'SBGyCtrl_setJmxzxx',
        onSuccess: function (req, res) {
            jmxzList = res.getDataByDataName("jmxzList").data;
        }
    });
    queryBtn.submit();
    return jmxzList;
}

var gt3 = {};
gt3.today = "";
gt3.skssqq = "";
gt3.skssqz = "";
gt3.djxh = "";
gt3.ctrl = "SB012YyssbCtrl";
gt3.scenceCs = "";// 申报渠道 默认正常申报
gt3.yjxxList = null;
gt3.jmxxList = null;
gt3.sbxxList = null;
gt3.slswjg = "";
gt3.swrymc = "";
gt3.nsqxDm = "";
gt3.bz = 'Y';// 所属期标志 Y初始化
var nsrxxMapforLssfzrd;

/** ******错误更正********* */
gt3.sbuuid = "";// 申报uuid
gt3.sbbList = "";// 原申报数据
gt3.pzxh = "";// 凭证序号

function print() {
    var fjsSbxxGridData = $w("fjsSbxxGrid").getAllNoDeleteGridData();
    var printBtn = new SwordSubmit();
    printBtn.pushData(fjsSbxxGridData);
    printBtn.setCtrl(gt3.ctrl + "_printfjssb");
    swordOpenWin('/sword?ctrl=' + gt3.ctrl + '_printfjssb&r=' + Math.random(),
			printBtn);

}
function fjscallback(req, res) {
    initSb(res);
}