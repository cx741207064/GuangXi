var gt3 = {
    djxh: "",
    // 自查补报通知书UUID
    zxbztzsuuid: ""
};
var gt3_nsqx = "06";
var ctrl = 'SB001XfssbCtrl';// 定义全局CTRL
var nsrxxFormInit = null;
var sb001_sbxxList;
var sb001_qcsList = null; // 主表期初list
var sb001_yjxxList = null; // 预缴信息list
var sb001_jmxxList = null;// 初始化得到的jmxxList
// var sb001_jmxxListForSave = null;// 要存储的jmxxList
var sb001_jmxxforSave = [];// 保存的时候需要的减免信息List

var sb001_jyjsjgList; // 卷烟计税价格
var sb001_xphhzxxList; // 新牌号卷烟汇总信息

var sbsjxx001; // 申报数据信息初始值数据
var sb001_cfsbBz = false;
var resData;
var resData2;
var sbcwgzFlag;// 是否为申报错误更正
var sb001_fbData = new Object();// 错误更正附表data
var sb001_yzpzzlDm;
var sb001_tmpResDataOnZcbbTzs;
var sb001_cfsbBzOnZcbbTzs;
var sb001_cfsbBzOnZcsb;
var sb001_ysbsbblx = "";
var sb001_sbxxXfsFjsList = ""; // add by fanyl 20150627 附加税相关修改：附加税信息初始化赋值用变量
var sb001_dqdexx = "" // add by fanyl 20150812 定期定额信息
var sb001_gridDatafjs; // add by fanyl 20150627 附加税相关修改：附加税grid保存用变量
var kdqsssrfpbz = ""; // add by fanyl 20150915 增加跨区分配标志

var sb001_sbbckBz = false;// 申报表查看标志

// 总分机构标志，2为分支机构，4为总机构
var zfjgBz = "";
// 银行账户信息
var khyhList = "";


// 定义JSON变量用于存放附表数据信息
var fbXMLData = {};

// 纳税期限代码，只取认定信息的第一条
var sb001_nsqxDm;
// 后台返回的时间
var sb001_sysDate;

var v_1, v_2, v_3, v_4, v_5, v_6, v_7, v_8;// 是否有此行业记录
var y_1, y_2, y_3, y_4, y_5, y_6, y_7, y_8;// 各行业预缴
var yj = 0;
var hyDm;

// add by fanyl 20150922 双定户申报将批扣金额放入已缴金额
var yijiao_1 = yijiao_2 = yijiao_3 = yijiao_4 = yijiao_5
	= yijiao_6 = yijiao_7 = yijiao_8 = 0.0 // 已缴金额
var sb001_yijiaose = 0.0 // add by fanyl 20150922 已缴税额，用于双定户申报时记录已批扣税额


var ylZspmArray = new Array();
var ylpfZspmArray = new Array();
var jlZspmArray = new Array();
var cpyZspmArray = new Array();
var cpyZspmDmArray = new Array();
var xqcZspmArray = new Array();
var qtZspmArray = new Array();
var qtZspmStr = "";
var dcZspmArray = new Array();
var tlZspmArray = new Array();
var qcsControl = "N";
var fb1_3xsehj = 0.0;// 用于烟类申报销售额监控
var fb1_4xsehj = 0.0;// 用于烟类申报销售额监控
var fb_bqjmsemxbHj = 0.0; // 用于《本期减免税额明细表》合计减免税额的监控 add by fanyl 20150611

var fb2_1xsehj = 0.0;// 用于烟类批发申报销售额监控
var bqjnqqynseForcpy = 0.0;// 用于成品油附表10的监控
// 下面的变量用于石脑油、燃料油附表之间的表间关系校验
var snyrlyBz = 'N';
var fb4_6_snybqs6 = 0;
var fb4_6_rlybqs6 = 0;
var fb4_9_snyzyfpslhj = 0;
var fb4_9_rlyzyfpslhj = 0;
var fb4_6_snybqs5 = 0;
var fb4_6_rlybqs5 = 0;
var fb4_6_snybqs7 = 0;
var fb4_6_rlybqs7 = 0;
var fb4_2_bqjmslsny = 0;
var fb4_2_bqjmslrly = 0;
var fb4_6_snybqs16 = 0;
var fb4_6_rlybqs16 = 0;
var fb4_8_msgrsnyslhj = 0;
var fb4_8_msgrrlyslhj = 0;
var fb4_6_snybqs17 = 0;
var fb4_6_rlybqs17 = 0;
var fb4_6_jksnybqs17 = 0;
var fb4_6_jkrlybqs17 = 0;
var fb4_8_hsgrsnyslhj = 0;
var fb4_8_hsgrrlyslhj = 0;
var fb4_8_hsgrjksnyslhj = 0;
var fb4_8_hsgrjkrlyslhj = 0;
var fb4_6_snybqs3 = 0;
var fb4_6_rlybqs3 = 0;
var fb4_6_snybqs19 = 0;
var fb4_6_rlybqs19 = 0;
var fb4_6_snybqs22 = 0;
var fb4_6_rlybqs22 = 0;
var snyrlyQcs;

// var ynseheji = 0;
// var ynsehj6 = 0;
// var yjse = 0;

var sb001_sbcwgzmap = null; // 存放错误更正交互的信息
var sb001_cszForXML;
var sb001_resDataXML;
var dr_sbblx; // 导入的申报表类型代码
var sfjzrqqFalg = "N";

var dymbuuid = "sb001_xfssbprint";
var hxdyForPrint = "Y";
var printTitle = "申报表";
var caculateGridHJFlag;
var printFileType;

//判断《本期准予扣除税额计算表》或《电池、涂料税款抵扣台账》是否打开，这块会影响主表期初数的计算
var isFb1Open = "N";

function init(resData) {
    $_queryNsrxxFlag = 1;

    // load附表树
    // loadZfbTree();

    cwgzbz = resData.getAttr("cwgzbz");

    // 如果是错误更正，调用错误更正的载入基础数据方法
    if ($chk(cwgzbz)) {
        if (cwgzbz == "cwgzbz") {
            sb001_cszForXML = "SBCWGZ";// 用来判断xml的标志，现在大概分为三种，作废，错误更正，导入，参数值先大致分为三种SBZF，SBCWGZ，SBDR
            loadCwgzBaseInfo(resData);
            return;
        }
    }
    // 位于sb000_Head.js
    public_init(resData);
    // 设置表头默认数据信息
    nsrxxFormInit = pc.getResData("nsrxxForm", resData);
    var data = {};
    data = nsrxxFormInit.value;
    sbrqInit = nsrxxFormInit.data.sbrq1.value;
    skssqqInit = nsrxxFormInit.data.skssqq.value;
    skssqzInit = nsrxxFormInit.data.skssqz.value;

    hidtext();
    // loadZfbTree();
    var isShowBtn = resData.getAttr("isShowBtn");
    //网报修改begin：大连国税特色税款所属期起止置灰	 
    if ($chk(isShowBtn) && isShowBtn == "Y" && isShowBtn != undefined) {
        $w("nsrxxForm").disable(["skssqq"]);
    }
        //网报修改end：大连国税特色税款所属期起止置灰
    else {
        $w("nsrxxForm").enable(["skssqq"]);
    }
    queryNsrxxbyNsrsbh($w("nsrxxForm").getValue("nsrsbh"), queryNsrxxSuccess, 2);

    //查询暂存数据 add by muyx 20170220
    var yzpzzldm = tempsave_zdy_getYzpzzldm();
    if (yzpzzldm) {
        if (tempsave_tryToLoadData(yzpzzldm, $w("nsrxxForm").getValue('skssqq'), $w("nsrxxForm").getValue('skssqz'), gt3.djxh, ctrl)) {
            return;
        }
    }
}

/**
 * 载入基础数据，更改所属期回调函数
 * 
 * @param reData
 * @param
 */
function loadBaseInfo(reqData, resData) {

    var slxxForm = $w("slxxForm");
    slxxForm.getFieldEl('jbr').value = nsrxxVO['jbr'] == null ? ''
			: nsrxxVO['jbr'];
    slxxForm.getFieldEl('cwfzr').value = nsrxxVO['cwfzrxm'] == null ? ''
			: nsrxxVO['cwfzrxm'];
    slxxForm.getFieldEl('lxdh').value = nsrxxVO['cwfzrgddh'] == null ? ''
			: nsrxxVO['cwfzrgddh'];
    slxxForm.getFieldEl('swdlrmc').value = nsrxxVO['swdlrmc'] == null ? ''
			: nsrxxVO['swdlrmc'];

    // 更新所属期起止和nsqx
    var nsrxxForm = $w("nsrxxForm");
    var nsrxxmap = pc.getResData("nsrxxMap", resData);
    nsrxxForm.setValue("skssqq", nsrxxmap.data.skssqq.value);
    nsrxxForm.setValue("skssqz", nsrxxmap.data.skssqz.value);
    gt3_nsqx = nsrxxmap.data.nsqxDm.value;
    sfjzrqqFalg = nsrxxmap.data.sfjzrqqFalg.value;
    if (sfjzrqqFalg == "Y") {
        setQcsEnable();
    }
    gt3.djxh = nsrxxVO.djxh;
    initOnSuccess(reqData, resData);

    // 用于处理选择申报类型为“自查补报”的情况
    if (sb001_sbxxList != null && sb001_sbxxList.trs.length > 0) {
        changeSblx();
    }

    $w("sbToolBar").setEnabled('save');
    tempsave_enable("sbToolBar");

}

/**
 * 载入主附表树数据
 * 
 * @return {[type]}
 */
function loadZfbTree(treeData) {
    var ssqzBtn = new SwordSubmit();

    ssqzBtn.setCtrl(ctrl + "_initZfbTree");
    ssqzBtn.pushData('treeData', treeData);
    ssqzBtn.submit();
}

/**
 * 按回车从纳税人基本信息跳转到申报表主体
 * 
 * @return
 */

function toGrid() {
    var sbbxxForm = $w("sbsjxxForm");
    (function () {
        $w("sbsjxxForm").getFieldEl("sbblx").focus();
    }).delay(300);
}

function choose(dataObj, inputEl, obj) {
    var newData = [];
    if (sb001_sbbckBz == false) {
        dataObj.each(function (item, index) {
            if (eval("v_" + (index + 1)) == 1)
                newData[newData.length] = item;
        });
    } else {
        newData = dataObj;
    }
    return newData;
}

// 建立方法将屏幕下方text不可编辑
// 暂时不用此方法，暂用隐藏方法
// 视安全性而定，补充此方法
function disabledsbcwgz() {
    // $w('sbsjxxForm').disable('sbblx');
    // $w('nsrxxForm').disable(['sblxDm','sbrq1','skssqq','skssqz']);
}

function hidefenye() {
    // 将分页的标签隐藏
    $w("fenye").hide(0);
    $w("fenye").hide(1);
    $w("fenye").hide(2);
    $w("fenye").hide(3);
    $w("fenye").hide(4);
    $w("fenye").hide(5);
    $w("fenye").hide(6);
    $w("fenye").hide(7);

}

function Success(req, resData2) {
    var isShowBtn = resData2.getAttr("isShowBtn");
    //网报修改begin：大连国税特色税款所属期起止置灰	 
    if ($chk(isShowBtn) && isShowBtn == "Y" && isShowBtn != undefined) {
        $w("nsrxxForm").disable(["skssqq"]);
    }
    // fbXMLData = resData2;
    var tmpJmxxList = pc.getResData("jmxxList", resData2);
    // 获取预缴总额
    sb001_yjxxList = pc.getResData("yjxxList", resData2);

    // 主表期初数list

    sb001_qcsList = pc.getResData("zbqcsList", resData2);

    // sb001_sysDate = pc.getResData("nsrxxForm", resData2).data.sbrq1.value;
    snyrlyQcs = pc.getResData("snyrlyQcsForm", resData2);
    sbsjxxForm = $w('sbsjxxForm');

    var tmpQtxx = pc.getResData("sbXfsnssbqtxxVO", resData2);

    // sbXfsnssbqtxxVO中没有bqjnqqynse字段，注释掉此处代码
    // if ($chk(tmpQtxx.data.bqjnqqynse)) {
    // var bqjnqqynse = tmpQtxx.data.bqjnqqynse.value / 1;
    // sbsjxxForm.setValue('bqjnqqynse', bqjnqqynse);
    // bqjnqqynseForcpy = bqjnqqynse;
    // }

    if (sb001_qcsList != null && $chk(sb001_qcsList.trs)) {
        for (var i = 0; i < sb001_qcsList.trs.length; i++) {
            var tds = sb001_qcsList.trs[i].tds;
            if ("04" == tds.xfssbblxDm.value) {
                bqjnqqynseForcpy = tds.bqjnqqynse.value / 1;
            }
        }
    }

    // sbsjxxForm.setValue('jbr', resData2.getAttr("jbr"));
    // sbsjxxForm.setValue('cwfzr', resData2.getAttr("cwfzrxm"));
    // sbsjxxForm.setValue('lxdh', resData2.getAttr("cwfzrgddh"));
    // sbsjxxForm.setValue('swdlrmc', resData2.getAttr("swdlrmc"));
    if (tmpJmxxList == null || tmpJmxxList == undefined || "" == tmpJmxxList) {
        sb001_jmxxList = null;
    } else {
        if (tmpJmxxList.trs.length == 0) {
            sb001_jmxxList = null;
        } else {
            sb001_jmxxList = tmpJmxxList;
        }
    }
    getJzedFor001();
    sb001_jyjsjgList = pc.getResData("jyjsjgList", resData2);
    // alert("sb001_jyjsjgList.trs.length:"+sb001_jyjsjgList.trs.length);
    sb001_xphhzxxList = pc.getResData("xphhzxxList", resData2);
    // alert("sb001_xphhzxxList.trs.length:"+sb001_xphhzxxList.trs.length);

    v_1 = 0;
    v_2 = 0;
    v_3 = 0;
    v_4 = 0;
    v_5 = 0;
    v_6 = 0;
    v_7 = 0;
    v_8 = 0;
    y_1 = 0;
    y_2 = 0;
    y_3 = 0;
    y_4 = 0;
    y_5 = 0;
    y_6 = 0;
    y_7 = 0;
    y_8 = 0;

    // 逾期申报提示
    var yqsbbz = tmpQtxx.data.yqsbBz.value;
    var yqsbMes = tmpQtxx.data.yqsbMes.value;
    if (yqsbbz != null && yqsbbz != undefined && yqsbbz == "Y") {
        if (yqsbMes != null && yqsbMes != undefined && yqsbMes != "") {
            swordAlert(yqsbMes);
        } else {
            swordAlert("本纳税人本属期逾期申报！");
        }
    }

    // 判断是否为分支机构
    zfjgBz = resData2.getAttr('zfjgBz');
    khyhList = resData2.getDataByDataName('khyhList');
    // khyhList = pc.getResData("khyhList", resData2);

    // if ($chk(zfjgBzObject) && $chk(zfjgBzObject.value)
    // && zfjgBzObject.value == "2") {
    // // 是分支机构，不允许保存
    // swordAlert("申报税款的所属时期内是分支机构");
    // sb001_zfjgFlag = true;
    // } else {
    // sb001_zfjgFlag = false;
    // }

    sb001_ysbsbblx = tmpQtxx.data.ysbsbblx.value;

    qcsControl = resData2.getAttr("qcsControl");
    if (qcsControl == "Y") {
        qcsEnable();
    }

}

/**
 * 初始化成功之后调用的函数
 * 
 * @param {Object}
 *            req
 * @param {Object}
 *            resData2
 * @memberOf {TypeName}
 * @return {TypeName}
 */
function initOnSuccess(req, resData2) {
    var isShowBtn = resData2.getAttr("isShowBtn");
    //网报修改begin：大连国税特色税款所属期起止置灰	 
    if ($chk(isShowBtn) && isShowBtn == "Y" && isShowBtn != undefined) {
        $w("nsrxxForm").disable(["skssqq"]);
    }
    // 获取批扣清册状态提示
    getPkqcztts(gt3.djxh, $w('nsrxxForm').getValue('skssqq'), $w('nsrxxForm').getValue('skssqz'));

    this.resData2 = JSON.decode(JSON.encode(resData2));
    // sbcwgzFlag2 = resData2.getAttr("sbcwgzFlag2");
    if (sb001_cszForXML == 'SBCWGZ') {
        creatfbData();
    }

    Success(req, resData2);
    sb001_sbxxList = pc.getResData("sbxxList", resData2);

    // add by fanyl 20150627 附加税相关修改：增加附加税返回
    sb001_sbxxXfsFjsList = pc.getResData("sbxxXfsFjsList", resData2);
    // add by fanyl 20150812 增加双定户定额信息返回
    sb001_dqdexx = pc.getResData("dqdeList", resData2);
    if ($chk(sb001_dqdexx) && sb001_dqdexx.trs.length > 0) {
        $('dqdetsxx').style.display = ""; // 显示浮动div
        shixiantuodong(); // 浮动div可以拖动
        setDqdeToSbb(sb001_dqdexx); // 将核定销售额带入申报主表内
        setYnse(); // 计算应纳税额
    } else {
        $('dqdetsxx').style.display = "none"; // 隐藏浮动div
    }

    // add by fanyl 20150915 增加跨区分配标志返回
    if ($chk(pc.getResData("kdqsssrfpbz", resData2))) {
        kdqsssrfpbz = pc.getResData("kdqsssrfpbz", resData2).value;
    }

    // 判断复合税率
    // checkFhSl();

    // 计算各类预缴
    getyjze();

    var cpyGrid = pc.getResData("sbsjxxcpyGrid", resData2);
    var qitaGrid = pc.getResData("sbsjxxqtGrid", resData2);

    if (pc.getResData("sbsjxxForm", resData2) != null
			&& pc.getResData("sbsjxxForm", resData2) != undefined
			&& pc.getResData("sbsjxxForm", resData2) != "") {
        sbsjxx001 = pc.getResData("sbsjxxForm", resData2).data;
    } else {
        sbsjxx001 = {};
    }

    if (cpyGrid != null && cpyGrid != "" && cpyGrid != undefined
			&& cpyGrid.trs.length > 0) {
        v_4 = 1;
    }
    if (qitaGrid != null && qitaGrid != "" && qitaGrid != undefined
			&& qitaGrid.trs.length > 0) {
        v_6 = 1;
    }
    var sbxxListTrs = sb001_sbxxList.trs;
    var sbxxListLength = sbxxListTrs.length;
    var tmpSbxx;
    var sbbxx = $w('sbsjxxForm');
    sb001_nsqxDm = sbxxListTrs[0].tds.nsqxDm.value;
    for (var i = 0; i < sbxxListLength; i++) {
        tmpSbxx = sbxxListTrs[i].tds;
        var zspmDm = tmpSbxx.zspmDm.value;
        var yjze = tmpSbxx.yjze.value / 1;

        hyDm = tmpSbxx.hyDm.value; // xuxx 20140816 暂时从税种的hydm取

        if (zspmDm == "101020101") { // 卷烟（70元以上/条，从价计算）
            sbbxx.enable("xsejljy");
            ylZspmArray.push("jljy");
            v_1 = 1;
            // y_1 += tmpSbxx.yjze.value / 1;
            // y_1 = (y_1).accAdd(yjze);
        } else if (zspmDm == "101020102") { // 卷烟（70元以下/条，从价计算）
            sbbxx.enable("xseyljy");
            ylZspmArray.push("yljy");
            v_1 = 1;
            // y_1 += tmpSbxx.yjze.value / 1;
            // y_1 = (y_1).accAdd(yjze);
        } else if (zspmDm == "101020104") { // 卷烟（70元以上/条，从量计算）
            sbbxx.enable("xssljljy");
            ylZspmArray.push("jljy");
            v_1 = 1;
            // y_1 += tmpSbxx.yjze.value / 1;
            // y_1 = (y_1).accAdd(yjze);
        } else if (zspmDm == "101020105") { // 卷烟（70元以下/条，从量计算）
            sbbxx.enable("xsslyljy");
            ylZspmArray.push("yljy");
            v_1 = 1;
            // y_1 += tmpSbxx.yjze.value / 1;
            // y_1 = (y_1).accAdd(yjze);
        } else if (zspmDm == "101020106") { // 卷烟（商业批发），从价
            // add by fanyl 20150516 增加属期控制：
            // 1、属期止小于5月1日的，第一行可用
            // 2、属期起大于5月31日的，第二行可用
            // 3、其他的情况（属期与5月份有交叉），一二行同时可用
            var sbssqjLx = getSbssqjLx(tmpSbxx); // 判断属期类型
            if (sbssqjLx == "1") {
                sbbxx.enable("xsejy"); // 销售额，老税率
                sbbxx.enable("xssljy"); // 销售数量，老税率
                sbbxx.disable("xsejy2"); // 销售额 ，新税率
            } else if (sbssqjLx == "2") {
                sbbxx.enable("xsejy2"); // 销售额 ，新税率
                sbbxx.disable("xsejy"); // 销售额，老税率
                sbbxx.disable("xssljy"); // 销售数量，老税率
                ylpfZspmArray.push("jypfcj");
            } else {
                sbbxx.enable("xsejy"); // 销售额，老税率
                sbbxx.enable("xssljy"); // 销售数量，老税率
                sbbxx.enable("xsejy2"); // 销售额 ，新税率
            }
            v_2 = 1;
        } else if (zspmDm == "101020109") { // 卷烟（商业批发），从量
            var sbssqjLx = getSbssqjLx(tmpSbxx); // 判断属期类型
            if (sbssqjLx == "1") {
                sbbxx.disable("xssljy2"); // 销售数量，新税率
            } else if (sbssqjLx == "2") {
                sbbxx.enable("xssljy2"); // 销售数量，新税率
                ylpfZspmArray.push("jypfcl");
            } else {
                sbbxx.enable("xssljy2"); // 销售数量，新税率
            }
            v_2 = 1;
        } else if (zspmDm == "101020107") { // 雪茄烟
            sbbxx.enable("xsslxjy");
            sbbxx.enable("xsexjy");
            ylZspmArray.push("xjy");
            v_1 = 1;
            // y_1 += tmpSbxx.yjze.value / 1;
            // y_1 = (y_1).accAdd(yjze);
        } else if (zspmDm == "101020108") { // 烟丝
            sbbxx.enable("xsslys");
            sbbxx.enable("xseys");
            ylZspmArray.push("ys");
            v_1 = 1;
            // y_1 += tmpSbxx.yjze.value / 1;
            // y_1 = (y_1).accAdd(yjze);
        } else if (zspmDm == "101020201") { // 粮食白酒（从价计算）
            sbbxx.enable("xselsbj");
            jlZspmArray.push("lsbj");
            v_3 = 1;
            // y_3 += tmpSbxx.yjze.value / 1;
            // y_3 = (y_3).accAdd(yjze);
        } else if (zspmDm == "101020202") { // 粮食白酒（从量计算）
            sbbxx.enable("xssllsbj");
            jlZspmArray.push("lsbj");
            v_3 = 1;
            // y_3 += tmpSbxx.yjze.value / 1;
            // y_3 = (y_3).accAdd(yjze);
        } else if (zspmDm == "101020203") { // 薯类白酒（从价计算）
            sbbxx.enable("xseslbj");
            jlZspmArray.push("slbj");
            v_3 = 1;
            // y_3 += tmpSbxx.yjze.value / 1;
            // y_3 = (y_3).accAdd(yjze);
        } else if (zspmDm == "101020204") { // 薯类白酒（从量计算）
            sbbxx.enable("xsslslbj");
            jlZspmArray.push("slbj");
            v_3 = 1;
            // y_3 += tmpSbxx.yjze.value / 1;
            // y_3 = (y_3).accAdd(yjze);
        } else if (zspmDm == "101020205") { // 黄酒
            sbbxx.enable("xsslhj");
            jlZspmArray.push("hj");
            v_3 = 1;
            // y_3 += tmpSbxx.yjze.value / 1;
            // y_3 = (y_3).accAdd(yjze);
        } else if (zspmDm == "101020206") { // 啤酒（3000元/吨以上）
            sbbxx.enable("xssljlpj");
            jlZspmArray.push("jlpj");
            v_3 = 1;
            // y_3 += tmpSbxx.yjze.value / 1;
            // y_3 = (y_3).accAdd(yjze);
        } else if (zspmDm == "101020207") { // 啤酒（3000元/吨以下）
            sbbxx.enable("xsslylpj");
            jlZspmArray.push("ylpj");
            v_3 = 1;
            // y_3 += tmpSbxx.yjze.value / 1;
            // y_3 = (y_3).accAdd(yjze);
            // } else if (zspmDm == "101020208") {
            // sbbxx.enable("xsejj");
            // sbbxx.enable("xssljj");
            // jlZspmArray.push("jj");
            // v_3 = 1;
            // y_3 += tmpSbxx.yjze.value / 1;
            // y_3 = (y_3).accAdd(yjze);
        } else if (zspmDm == "101020299") { // 其他酒
            sbbxx.enable("xseqtj");
            sbbxx.enable("xsslqtj");
            jlZspmArray.push("qtj");
            v_3 = 1;
            // y_3 += tmpSbxx.yjze.value / 1;
            // y_3 = (y_3).accAdd(yjze);
        } else if (zspmDm == "101020609") { // 汽油
            // sbbxx.enable("syslqy");
            // sbbxx.enable("xsslqy");
            // sbbxx.enable("ynseqy");
            cpyZspmArray.push("qy");
            cpyZspmDmArray.push(zspmDm);
            v_4 = 1;
            // y_4 += tmpSbxx.yjze.value / 1;
            // y_4 = (y_4).accAdd(yjze);
            // } else if (zspmDm == "101020602") {
            // sbbxx.enable("xsslwqqy");
            // cpyZspmArray.push("wqqy");
            // cpyZspmDmArray.push(zspmDm);
            // v_4 = 1;
            // y_4 += tmpSbxx.yjze.value / 1;
            // y_4 = (y_4).accAdd(yjze);
        } else if (zspmDm == "101020603") { // 柴油
            // sbbxx.enable("syslcy");
            // sbbxx.enable("xsslcy");
            // sbbxx.enable("ynsecy");
            cpyZspmArray.push("cy");
            cpyZspmDmArray.push(zspmDm);
            v_4 = 1;
            // y_4 += tmpSbxx.yjze.value / 1;
            // y_4 = (y_4).accAdd(yjze);
        } else if (zspmDm == "101020604") { // 航空煤油
            // sbbxx.enable("syslhkmy");
            // sbbxx.enable("xsslhkmy");
            // sbbxx.enable("ynsehkmy");
            cpyZspmArray.push("hkmy");
            cpyZspmDmArray.push(zspmDm);
            v_4 = 1;
            // y_4 += tmpSbxx.yjze.value / 1;
            // y_4 = (y_4).accAdd(yjze);
        } else if (zspmDm == "101020605") { // 石脑油
            snyrlyBz = 'Y';
            // sbbxx.enable("syslsny");
            // sbbxx.enable("xsslsny");
            // sbbxx.enable("ynsesny");
            cpyZspmArray.push("sny");
            cpyZspmDmArray.push(zspmDm);
            v_4 = 1;
            // y_4 += tmpSbxx.yjze.value / 1;
            // y_4 = (y_4).accAdd(yjze);
        } else if (zspmDm == "101020606") { // 溶剂油
            // sbbxx.enable("syslrjy");
            // sbbxx.enable("xsslrjy");
            // sbbxx.enable("ynserjy");
            cpyZspmArray.push("rjy");
            cpyZspmDmArray.push(zspmDm);
            v_4 = 1;
            // y_4 += tmpSbxx.yjze.value / 1;
            // y_4 = (y_4).accAdd(yjze);
            // alert(y_4);
        } else if (zspmDm == "101020607") { // 润滑油
            // sbbxx.enable("syslrhy");
            // sbbxx.enable("xsslrhy");
            // sbbxx.enable("ynserhy");
            cpyZspmArray.push("rhy");
            cpyZspmDmArray.push(zspmDm);
            v_4 = 1;
            // y_4 += tmpSbxx.yjze.value / 1;
            // y_4 = (y_4).accAdd(yjze);
        } else if (zspmDm == "101020608") {// 燃料油
            snyrlyBz = 'Y';
            // sbbxx.enable("syslrly");
            // sbbxx.enable("xsslrly");
            // sbbxx.enable("ynserly");
            cpyZspmArray.push("rly");
            cpyZspmDmArray.push(zspmDm);
            v_4 = 1;
            // y_4 += tmpSbxx.yjze.value / 1;
            // y_4 = (y_4).accAdd(yjze);
        } else if (zspmDm == "101020901") { // 1.0升（含）以下的乘用车
            sbbxx.enable("xsslqg1");
            sbbxx.enable("xseqg1");
            xqcZspmArray.push("qg1");
            v_5 = 1;
            // y_5 += tmpSbxx.yjze.value / 1;
            // y_5 = (y_5).accAdd(yjze);
        } else if (zspmDm == "101020902") { // 1.0升以上至1.5升(含)的乘用车
            sbbxx.enable("xsslqg2");
            sbbxx.enable("xseqg2");
            xqcZspmArray.push("qg2");
            v_5 = 1;
            // y_5 += tmpSbxx.yjze.value / 1;
            // y_5 = (y_5).accAdd(yjze);
        } else if (zspmDm == "101020903") { // 1.5升以上至2.0升(含)的乘用车
            sbbxx.enable("xsslqg3");
            sbbxx.enable("xseqg3");
            xqcZspmArray.push("qg3");
            v_5 = 1;
            // y_5 += tmpSbxx.yjze.value / 1;
            // y_5 = (y_5).accAdd(yjze);
        } else if (zspmDm == "101020904") { // 2.0升以上至2.5升(含)的乘用车
            sbbxx.enable("xsslqg4");
            sbbxx.enable("xseqg4");
            xqcZspmArray.push("qg4");
            v_5 = 1;
            // y_5 += tmpSbxx.yjze.value / 1;
            // y_5 = (y_5).accAdd(yjze);
        } else if (zspmDm == "101020905") { // 2.5升以上至3.0升(含)的乘用车
            sbbxx.enable("xsslqg5");
            sbbxx.enable("xseqg5");
            xqcZspmArray.push("qg5");
            v_5 = 1;
            // y_5 += tmpSbxx.yjze.value / 1;
            // y_5 = (y_5).accAdd(yjze);
        } else if (zspmDm == "101020906") { // 3.0升以上至4.0升(含)的乘用车
            sbbxx.enable("xsslqg6");
            sbbxx.enable("xseqg6");
            xqcZspmArray.push("qg6");
            v_5 = 1;
            // y_5 += tmpSbxx.yjze.value / 1;
            // y_5 = (y_5).accAdd(yjze);
        } else if (zspmDm == "101020907") { // 4.0升以上的乘用车
            sbbxx.enable("xsslqg7");
            sbbxx.enable("xseqg7");
            xqcZspmArray.push("qg7");
            v_5 = 1;
            // y_5 += tmpSbxx.yjze.value / 1;
            // y_5 = (y_5).accAdd(yjze);
        } else if (zspmDm == "101021000") { // 中轻型商用客车
            sbbxx.enable("xsslzxsykc");
            sbbxx.enable("xsezxsykc");
            xqcZspmArray.push("zxsykc");
            v_5 = 1;

        } else if (zspmDm == "101021601") { // 电池（不含铅蓄电池）
            sbbxx.enable("xssldc1");
            sbbxx.enable("xsedc1");
            dcZspmArray.push("dc");
            v_7 = 1;

        } else if (zspmDm == "101021699") { // 铅蓄电池
            sbbxx.enable("xssldc2");
            sbbxx.enable("xsedc2");
            dcZspmArray.push("qxdc");
            v_7 = 1;

        } else if (zspmDm == "101021700") { // 涂料
            sbbxx.enable("xssltl");
            sbbxx.enable("xsetl");
            tlZspmArray.push("tl");
            v_8 = 1;
        } else {
            var skssqq = $w("nsrxxForm").getValue("skssqq");
            if (zspmDm == "101020300" && skssqq >= "2016-10-01") {
                swordAlert("自2016年10月1日起，原“化妆品”税目更改为“高档化妆品”，请修改税费种认定信息！");
            } else {
                if (!$chk(qtZspmStr)) {
                    qtZspmStr = zspmDm + ",";
                    qtZspmArray.push(zspmDm);
                }
                var indexIn = qtZspmStr.indexOf(zspmDm);
                if (indexIn / 1 == -1) {
                    qtZspmStr = qtZspmStr + zspmDm + ",";
                    qtZspmArray.push(zspmDm);
                }
                v_6 = 1;
                // y_6 = (y_6).accAdd(yjze);
            }
        }
    }

    // 已申报大类提示,并且不显示在申报表类型下拉框中
    showYsblxMsg();
    try {//处理表单绝对位置计算（请勿删除）
        var calcTop = $('sbsjxxFormID').offsetTop
		+ $$('.swordform-panel-box')[0].getSize().y + $('sbsjxxFormTable').clientHeight + 55;
        $('qtG').setStyle('top', calcTop);
        $('cpyG').setStyle('top', calcTop);
    } catch (e) { }

    // if (sbcwgzFlag != "Y") {
    if (sb001_cszForXML != 'SBCWGZ' && sb001_cszForXML != 'SBDR') {
        // hideTreeNode();
        // if(qcsControl!="Y"){
        // $w('sbsjxxForm').disable('bqzykcse');}//这个不能修改，为了保证修改选项卡时的初始化
        var firstlx = 0;
        if (v_1 == 1) {
            firstlx = 1;
        } else if (v_2 == 1) {
            firstlx = 2;
        } else if (v_3 == 1) {
            firstlx = 3;
        } else if (v_4 == 1) {
            firstlx = 4;
        } else if (v_5 == 1) {
            firstlx = 5;
        } else if (v_6 == 1) {
            firstlx = 6;
        } else if (v_7 == 1) {
            firstlx = 7;
        } else if (v_8 == 1) {
            firstlx = 8;
        }

        document.getElementById('qtG').style.display = 'none';
        document.getElementById('cpyG').style.display = 'none';
        $('div1').setStyle("display", "none");
        $('div2').setStyle("display", "none");
        $('div3').setStyle("display", "none");
        $('div4').setStyle("display", "none");
        $('div5').setStyle("display", "none");
        $('div6').setStyle("display", "none");
        $('div7').setStyle("display", "none");
        $('div8').setStyle("display", "none");

        // if (hyDm.substring(0, 2) == '16') {
        if (firstlx == 1) {
            $w('sbsjxxForm').setValue('sbblx', '01');
            // $w("fenye").selectIndex(0);// 选中第一个分页
            $('div1').setStyle("display", "");
            // addtext( [ '01', '03', '05', '08', '09', '10', '11'],[ '1_1',
            // '1_2',
            // '1_3', '1_4' ]);
            changeFormula1();
            yj = y_1;
            sb001_yijiaose = yijiao_1;
            // } else if (hyDm.substring(0, 4) == '5128') {
        }
        if (firstlx == 2) {
            $w('sbsjxxForm').setValue('sbblx', '02');
            // $w("fenye").selectIndex(1);// 选中第二个分页
            $('div2').setStyle("display", "");
            // document.getElementById('05').style.display = '';
            // document.getElementById('08').style.display = '';
            // document.getElementById('09').style.display = '';
            // document.getElementById('10').style.display = '';
            // document.getElementById('11').style.display = '';
            // addtext([], [ '2_1' ]);
            changeFormula2();
            yj = y_2;
            sb001_yijiaose = yijiao_2;
            // } else if (hyDm.substring(0, 2) == '15') {
        }
        if (firstlx == 3) {
            $w('sbsjxxForm').setValue('sbblx', '03');
            // $w("fenye").selectIndex(2);
            $('div3').setStyle("display", "");
            // addtext( [ '01', '03', '05', '08', '09', '10', '11'],[ '3_1',
            // '3_2',
            // '3_3', '3_4' ]);
            changeFormula3();
            sb001_yijiaose = yijiao_3;
            yj = y_3;
            // } else if (hyDm.substring(0, 2) == '25') {
        }
        if (firstlx == 4) {
            $w('sbsjxxForm').setValue('sbblx', '04');
            // $w("fenye").selectIndex(3);
            $('div4').setStyle("display", "");
            document.getElementById('cpyG').style.display = '';
            // addtext( [ '01', '02', '03', '04', '05', '06', '07', '08', '09',
            // '10', '11'], ['4_1', '4_2', '4_3', '4_4', '4_5', '4_6', '4_7',
            // '4_8', '4_9',
            // '4_10' ]);
            // bbbbbbbbbbbbbbbb
            // add by fanyl 20150920 当定期定额户申报时，默认将定额信息带入主表grid
            changeFormula4();
            yj = y_4;
            sb001_yijiaose = yijiao_4;
            // } else if (hyDm.substring(0, 2) == '36') {
        }
        if (firstlx == 5) {
            $w('sbsjxxForm').setValue('sbblx', '05');
            // $w("fenye").selectIndex(4);
            $('div5').setStyle("display", "");
            // addtext( [ '01', '03', '05', '08', '09', '10', '11'],[ '5_1',
            // '5_2' ]);
            changeFormula5();
            yj = y_5;
            sb001_yijiaose = yijiao_5;
            $w('sbsjxxForm').enable('bqzykcse');
            // } else {
        }
        if (firstlx == 6) {
            $w('sbsjxxForm').setValue('sbblx', '06');
            // $w("fenye").selectIndex(5);
            $('div6').setStyle("display", "");
            // addtext( [ '01', '03', '05', '08', '09', '10', '11'],[ '6_1',
            // '6_2',
            // '6_3', '6_4' ]);
            changeFormula6();
            yj = y_6;
            sb001_yijiaose = yijiao_6;
            document.getElementById('qtG').style.display = '';
        }
        if (firstlx == 7) {
            $w('sbsjxxForm').setValue('sbblx', '07');
            $('div7').setStyle("display", "");
            changeFormula7();
            yj = y_7;
            sb001_yijiaose = yijiao_7;
            // $w('sbsjxxForm').enable('bqzykcse');
        }
        if (firstlx == 8) {
            $w('sbsjxxForm').setValue('sbblx', '08');
            $('div8').setStyle("display", "");
            changeFormula8();
            yj = y_8;
            sb001_yijiaose = yijiao_8;
            // $w('sbsjxxForm').enable('bqzykcse');
        }

    } else {
        document.getElementById('qtG').style.display = 'none';
        document.getElementById('cpyG').style.display = 'none';
        disabledsbcwgz();

        var sbblx;
        if (sb001_cszForXML == 'SBDR') {
            sbblx = pc.getResData("sbsjxxForm", sb001_resDataXML).data.sbblx.value;
        } else if (sb001_cszForXML == 'SBCWGZ') {
            if ($chk(pc.getResData("sbsjxxForm", resData2))
					&& $chk(pc.getResData("sbsjxxForm", resData2).data.sbblx)) {
                sbblx = pc.getResData("sbsjxxForm", resData2).data.sbblx.value;
            } else {
                sbblx = $w("sbsjxxForm").getValue("sbblx");
            }
        }
        if (sbblx == '01') {
            $w('sbsjxxForm').setValue('sbblx', '01');
            // $w("fenye").selectIndex(0);// 选中第一个分页
            $('div1').setStyle("display", "");
            // addtext( [ '01', '03', '05', '08', '09', '10', '11'], ['1_1',
            // '1_2',
            // '1_3', '1_4' ]);
            changeFormula1();
            yj = y_1;
            sb001_yijiaose = yijiao_1;
        } else if (sbblx == '02') {
            $w('sbsjxxForm').setValue('sbblx', '02');
            // $w("fenye").selectIndex(1);// 选中第二个分页
            $('div2').setStyle("display", "");
            // document.getElementById('05').style.display = '';
            // document.getElementById('08').style.display = '';
            // document.getElementById('09').style.display = '';
            // document.getElementById('10').style.display = '';
            // document.getElementById('11').style.display = '';
            // addtext( [],[ '2_1' ]);
            changeFormula2();
            yj = y_2;
            sb001_yijiaose = yijiao_2;
        } else if (sbblx == '03') {
            // $w('sbsjxxForm').setValue('sbblx', '03');
            $('div3').setStyle("display", "");
            // $w("fenye").selectIndex(2);
            // addtext( [ '01', '03', '05', '08', '09', '10', '11'], ['3_1',
            // '3_2',
            // '3_3', '3_4' ]);
            changeFormula3();
            yj = y_3;
            sb001_yijiaose = yijiao_3;
        } else if (sbblx == '04') {
            $w('sbsjxxForm').setValue('sbblx', '04');
            // $w("fenye").selectIndex(3);
            $('div4').setStyle("display", "");
            document.getElementById('cpyG').style.display = '';
            // addtext( [ '01', '02', '03', '04', '05', '06', '07', '08', '09',
            // '10', '11'], ['4_1', '4_2', '4_3', '4_4', '4_5', '4_6', '4_7',
            // '4_8', '4_9',
            // '4_10' ]);
            changeFormula4();
            yj = y_4;
            sb001_yijiaose = yijiao_4;
        } else if (sbblx == '05') {
            $w('sbsjxxForm').setValue('sbblx', '05');
            // $w("fenye").selectIndex(4);
            $('div5').setStyle("display", "");
            // addtext( [ '01', '03', '05', '08', '09', '10', '11'], ['5_1',
            // '5_2' ]);
            changeFormula5();
            $w('sbsjxxForm').enable('bqzykcse');
            yj = y_5;
            sb001_yijiaose = yijiao_5;
        } else if (sbblx == '06') {
            $w('sbsjxxForm').setValue('sbblx', '06');
            // $w("fenye").selectIndex(5);
            $('div6').setStyle("display", "");
            // addtext( [ '01', '03', '05', '08', '09', '10', '11'], ['6_1',
            // '6_2',
            // '6_3', '6_4' ]);
            changeFormula6();
            yj = y_6;
            sb001_yijiaose = yijiao_6;
            document.getElementById('qtG').style.display = '';
        } else if (sbblx == '07') {
            $w('sbsjxxForm').setValue('sbblx', '07');
            $('div7').setStyle("display", "");
            changeFormula7();
            // $w('sbsjxxForm').enable('bqzykcse');
            yj = y_7;
            sb001_yijiaose = yijiao_7;
        } else if (sbblx == '08') {
            $w('sbsjxxForm').setValue('sbblx', '08');
            $('div8').setStyle("display", "");
            changeFormula8();
            // $w('sbsjxxForm').enable('bqzykcse');
            yj = y_8;
            sb001_yijiaose = yijiao_8;
        }
    }

    setEleAttrBySbblx();
    setSblmAndTreeDisply();

    if (sb001_cszForXML != "SBDR") {
        $w('sbsjxxForm').setValue('bqyjse', yj);
        // add by fanyl20150922 双定户将批扣税额放入预缴
        if ($chk(sb001_dqdexx) && sb001_dqdexx.trs.length > 0) {
            var yyjse = (parseFloat(sb001_yijiaose) / 1).accAdd(parseFloat(yj) / 1).round(2); // 已预缴税额，=预缴+已缴
            $w('sbsjxxForm').setValue('bqyjse', yyjse);
            $w('sbsjxxForm').setValue('yijiaoje', sb001_yijiaose);
        }
        caculate("sbsjxxForm_bqyjse");
    }

    //尝试加载暂存数据 add by muyx 20170220
    var yzpzzldm = tempsave_zdy_getYzpzzldm();
    if (yzpzzldm) {
        if (tempsave_tryToLoadData(yzpzzldm, $w("nsrxxForm").getValue('skssqq'), $w("nsrxxForm").getValue('skssqz'), gt3.djxh, ctrl)) {
            return;
        }
    }
}

/**
 * 根据所属期起判断铅蓄电池是否征收
 * 
 * @param {Object}
 *            tmpSbxx
 * @return {TypeName}
 */
function checkQxdcSfzsBySsqq(skssqq) {
    var skssqqDate = new Date(skssqq.replace(/-/g, "/")); // 税款所属期起
    if (skssqqDate < new Date("2016/01/01")) {// 2016年1月1日之前的属期不征收铅蓄电池的消费税
        return false;
    } else {
        return true;
    }
}


// add by fanyl 20150518
// 返回属期范围：1表示5月份以前的属期；2表示5月份以后的属期；3表示5月份的属期
function getSbssqjLx(tmpSbxx) {
    var skssqqStr = tmpSbxx.skssqq.value;
    var skssqzStr = tmpSbxx.skssqz.value;
    var skssqqDate = new Date(skssqqStr.replace(/-/g, "/")); // 税款所属期起
    var skssqzDate = new Date(skssqzStr.replace(/-/g, "/")); // 税款所属期止
    // var xslsxrqDate = new Date("2015/05/10"); // 新税率生效日期：2015年5月10日
    if (skssqzDate < new Date("2015/05/01")) {
        return "1";
    } else if (skssqqDate > new Date("2015/05/31")) {
        return "2";
    } else {
        return "3";
    }
}

// add by fanyl 20150530
// 卷烟批发销售数量合计计算。因为需要保留小数点后4位，公式不支持，故单独实现
function changeXsslhj2() {

    var xssljy = $w('sbsjxxForm').getValue("xssljy");
    var xssljy2 = $w('sbsjxxForm').getValue("xssljy2");
    var xsslhj2 = accAdd(xssljy, xssljy2);
    $w('sbsjxxForm').setValue('xsslhj2', xsslhj2);
}

// add by fanyl 20150530 加法计算，得到更为精确的加法结果
function accAdd(arg1, arg2) {
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
}



// 已申报大类提示
function showYsblxMsg() {

    if (sb001_ysbsbblx == "")
        return;

    var str = "下列申报表类型已申报：<br/>";
    if (sb001_ysbsbblx.indexOf('01') > 0) {
        str = str + "烟类应税消费品消费税纳税申报表<br/>";
        v_1 = 0;
    }
    if (sb001_ysbsbblx.indexOf('02') > 0) {
        str = str + "卷烟消费税纳税申报表（批发）<br/>";
        v_2 = 0;
    }
    if (sb001_ysbsbblx.indexOf('03') > 0) {
        str = str + "酒及酒精消费税纳税申报表<br/>";
        v_3 = 0;
    }
    if (sb001_ysbsbblx.indexOf('04') > 0) {
        str = str + "成品油消费税纳税申报表<br/>";
        v_4 = 0;
    }
    if (sb001_ysbsbblx.indexOf('05') > 0) {
        str = str + "小汽车消费税纳税申报表<br/>";
        v_5 = 0;
    }
    if (sb001_ysbsbblx.indexOf('06') > 0) {
        str = str + "其他应税消费品消费税纳税申报表<br/>";
        v_6 = 0;
    }
    if (sb001_ysbsbblx.indexOf('07') > 0) {
        str = str + "电池消费税纳税申报表<br/>";
        v_7 = 0;
    }
    if (sb001_ysbsbblx.indexOf('08') > 0) {
        str = str + "涂料消费税纳税申报表";
        v_8 = 0;
    }
    swordAlert(str);

}

/**
 * 获取预缴税额
 * 
 * @return
 */
function getyjze() {
    // add by fanyl 20150922 如果是双定户申报的情况，将批扣税额加入预缴税额
    if ($chk(sb001_dqdexx) && sb001_dqdexx.trs.length > 0) {
        yijiao_1 = 0.0;
        yijiao_2 = 0.0;
        yijiao_3 = 0.0;
        yijiao_4 = 0.0;
        yijiao_5 = 0.0;
        yijiao_6 = 0.0;
        yijiao_7 = 0.0;
        yijiao_8 = 0.0;
        for (var i = 0; i < sb001_dqdexx.trs.length; i++) {
            var dqdexx = sb001_dqdexx.trs[i].tds;
            var zspmDm = dqdexx.zspmDm.value;
            var yijiaoze = dqdexx.yjse.value / 1;

            if (zspmDm == "101020101") {
                yijiao_1 += yijiaoze;
            } else if (zspmDm == "101020102") {
                yijiao_1 += yijiaoze;
            } else if (zspmDm == "101020104") {
                yijiao_1 += yijiaoze;
            } else if (zspmDm == "101020105") {
                yijiao_1 += yijiaoze;
            } else if (zspmDm == "101020106") {
                yijiao_2 += yijiaoze;
            } else if (zspmDm == "101020109") {
                yijiao_2 += yijiaoze;
            } else if (zspmDm == "101020107") {
                yijiao_1 += yijiaoze;
            } else if (zspmDm == "101020108") {
                yijiao_1 += yijiaoze;
            } else if (zspmDm == "101020201") {
                yijiao_3 += yijiaoze;
            } else if (zspmDm == "101020202") {
                yijiao_3 += yijiaoze;
            } else if (zspmDm == "101020203") {
                yijiao_3 += yijiaoze;
            } else if (zspmDm == "101020204") {
                yijiao_3 += yijiaoze;
            } else if (zspmDm == "101020205") {
                yijiao_3 += yijiaoze;
            } else if (zspmDm == "101020206") {
                yijiao_3 += yijiaoze;
            } else if (zspmDm == "101020207") {
                yijiao_3 += yijiaoze;
            } else if (zspmDm == "101020208") {
                yijiao_3 += yijiaoze;
            } else if (zspmDm == "101020299") {
                yijiao_3 += yijiaoze;
            } else if (zspmDm == "101020609") {
                yijiao_4 += yijiaoze;
                // } else if (zspmDm == "101020602") {
                // yijiao_4 += yijiaoze;
            } else if (zspmDm == "101020603") {
                yijiao_4 += yijiaoze;
            } else if (zspmDm == "101020604") {
                yijiao_4 += yijiaoze;
            } else if (zspmDm == "101020605") {
                yijiao_4 += yijiaoze;
            } else if (zspmDm == "101020606") {
                yijiao_4 += yijiaoze;
            } else if (zspmDm == "101020607") {
                yijiao_4 += yijiaoze;
            } else if (zspmDm == "101020608") {
                y_4 += yijiaoze;
            } else if (zspmDm == "101020901") {
                yijiao_5 += yijiaoze;
            } else if (zspmDm == "101020902") {
                yijiao_5 += yijiaoze;
            } else if (zspmDm == "101020903") {
                yijiao_5 += yijiaoze;
            } else if (zspmDm == "101020904") {
                yijiao_5 += yijiaoze;
            } else if (zspmDm == "101020905") {
                yijiao_5 += yijiaoze;
            } else if (zspmDm == "101020906") {
                yijiao_5 += yijiaoze;
            } else if (zspmDm == "101020907") {
                yijiao_5 += yijiaoze;
            } else if (zspmDm == "101021000") {
                yijiao_5 += yijiaoze;
            } else if (zspmDm == "101021601") {
                yijiao_7 += yijiaoze;
            } else if (zspmDm == "101021699") {
                yijiao_7 += yijiaoze;
            } else if (zspmDm == "101021700") {
                yijiao_8 += yijiaoze;
            } else {
                yijiao_6 += yijiaoze;
            }
        }
    }

    // 获取预缴税额
    var yjlistLength = sb001_yjxxList.trs.length;
    y_1 = 0;
    y_2 = 0;
    y_3 = 0;
    y_4 = 0;
    y_5 = 0;
    y_6 = 0;
    y_7 = 0;
    y_8 = 0;
    for (var i = 0; i < yjlistLength; i++) {
        tmpyjxx = sb001_yjxxList.trs[i].tds;
        var zspmDm = tmpyjxx.zspmDm.value;
        var yjze = tmpyjxx.yjye1.value / 1;

        if (zspmDm == "101020101") {
            y_1 += yjze;
        } else if (zspmDm == "101020102") {
            y_1 += yjze;
        } else if (zspmDm == "101020104") {
            y_1 += yjze;
        } else if (zspmDm == "101020105") {
            y_1 += yjze;
        } else if (zspmDm == "101020106") {
            y_2 += yjze;
        } else if (zspmDm == "101020109") {
            y_2 += yjze;
        } else if (zspmDm == "101020107") {
            y_1 += yjze;
        } else if (zspmDm == "101020108") {
            y_1 += yjze;
        } else if (zspmDm == "101020201") {
            y_3 += yjze;
        } else if (zspmDm == "101020202") {
            y_3 += yjze;
        } else if (zspmDm == "101020203") {
            y_3 += yjze;
        } else if (zspmDm == "101020204") {
            y_3 += yjze;
        } else if (zspmDm == "101020205") {
            y_3 += yjze;
        } else if (zspmDm == "101020206") {
            y_3 += yjze;
        } else if (zspmDm == "101020207") {
            y_3 += yjze;
        } else if (zspmDm == "101020208") {
            y_3 += yjze;
        } else if (zspmDm == "101020299") {
            y_3 += yjze;
        } else if (zspmDm == "101020609") {
            y_4 += yjze;
            // } else if (zspmDm == "101020602") {
            // y_4 += yjze;
        } else if (zspmDm == "101020603") {
            y_4 += yjze;
        } else if (zspmDm == "101020604") {
            y_4 += yjze;
        } else if (zspmDm == "101020605") {
            y_4 += yjze;
        } else if (zspmDm == "101020606") {
            y_4 += yjze;
        } else if (zspmDm == "101020607") {
            y_4 += yjze;
        } else if (zspmDm == "101020608") {
            y_4 += yjze;
        } else if (zspmDm == "101020901") {
            y_5 += yjze;
        } else if (zspmDm == "101020902") {
            y_5 += yjze;
        } else if (zspmDm == "101020903") {
            y_5 += yjze;
        } else if (zspmDm == "101020904") {
            y_5 += yjze;
        } else if (zspmDm == "101020905") {
            y_5 += yjze;
        } else if (zspmDm == "101020906") {
            y_5 += yjze;
        } else if (zspmDm == "101020907") {
            y_5 += yjze;
        } else if (zspmDm == "101021000") {
            y_5 += yjze;
        } else if (zspmDm == "101021601") {
            y_7 += yjze;
        } else if (zspmDm == "101021699") {
            y_7 += yjze;
        } else if (zspmDm == "101021700") {
            y_8 += yjze;
        } else {
            y_6 += yjze;
        }
    }
}

/**
 * 获取减征额度
 * 
 * @return
 */
function getJzedFor001() {

    if (sb001_jmxxList != null) {
        var jmxxArray = sb001_jmxxList.trs;
        var length = jmxxArray.length;
        var zspmDmTmp;
        var yhpzuuidTmp;
        for (var i = 0; i < length; i++) {
            yhpzuuidTmp = $chk(jmxxArray[i].tds.yhpzuuid) ? jmxxArray[i].tds.yhpzuuid.value
					: "";
            sb001_jmxxforSave[i] = yhpzuuidTmp;

        }
    }
}

// 判断复合税率
function checkFhSl() {
    if ($chk(sb001_sbxxList)) {
        var sbxxListTrs = sb001_sbxxList.trs;
        var sbxxListLength = sbxxListTrs.length;
        // var flag101_104 = false;
        // var flag102_105 = false;
        // var flag201_203 = false;
        // var flag202_204 = false;
        var msg = "|";
        for (var i = 0; i < sbxxListLength; i++) {
            var zspmDm = sbxxListTrs[i].tds.zspmDm.value;
            msg = getSingleFhSl("101020101", "101020104", sbxxListTrs,
					sbxxListLength, i, msg, "卷烟（70元以上/条，从价、从量计算）|");
            msg = getSingleFhSl("101020104", "101020101", sbxxListTrs,
					sbxxListLength, i, msg, "卷烟（70元以上/条，从价、从量计算）|");

            msg = getSingleFhSl("101020102", "101020105", sbxxListTrs,
					sbxxListLength, i, msg, "卷烟（70元以下/条，从价、从量计算）|");
            msg = getSingleFhSl("101020105", "101020102", sbxxListTrs,
					sbxxListLength, i, msg, "卷烟（70元以下/条，从价、从量计算）|");

            msg = getSingleFhSl("101020201", "101020202", sbxxListTrs,
					sbxxListLength, i, msg, "粮食白酒（从价、从量计算）|");
            msg = getSingleFhSl("101020202", "101020201", sbxxListTrs,
					sbxxListLength, i, msg, "粮食白酒（从价、从量计算）|");

            msg = getSingleFhSl("101020203", "101020204", sbxxListTrs,
					sbxxListLength, i, msg, "薯类白酒（从价、从量计算）|");
            msg = getSingleFhSl("101020204", "101020203", sbxxListTrs,
					sbxxListLength, i, msg, "薯类白酒（从价、从量计算）|");
        }
        if (msg != "|") {
            swordAlert(msg + "没有认定复合税率");
        }
    }
}
// 每一个独立的判断复合税率
function getSingleFhSl(firstZspm, secondZspm, sbxxListTrs, sbxxListLength, i,
		msg, tsxx) {
    var zspmDm = sbxxListTrs[i].tds.zspmDm.value;
    if (zspmDm == firstZspm) {
        var j = 0;
        for (j = 0; j < sbxxListLength; j++) {
            var zspmDm1 = sbxxListTrs[j].tds.zspmDm.value;
            if (zspmDm1 == secondZspm) {
                break;
            }
        }
        if (j == sbxxListLength) {
            msg = msg + tsxx;
        }
    }
    return msg;
}

function changeSbblx(bz, option, selItem, obj) {
    hideAll();
    document.getElementById('qtG').style.display = 'none';
    document.getElementById('cpyG').style.display = 'none';

    var code;
    if (bz == "1") {
        code = selItem.code; // selItem.get("code");
    } else {
        code = bz;
    }
    qing0();

    setEleAttrBySbblx();

    if (sb001_cszForXML != "SBDR") {
        $w('sbsjxxForm').setValue("bqyjse", yj);
        // add by fanyl20150922 双定户将批扣税额放入预缴
        if ($chk(sb001_dqdexx) && sb001_dqdexx.trs.length > 0) {
            var yyjse = (parseFloat(sb001_yijiaose) / 1).accAdd(parseFloat(yj) / 1).round(2); // 已预缴税额，=预缴+已缴
            $w('sbsjxxForm').setValue('bqyjse', yyjse);
            $w('sbsjxxForm').setValue('yijiaoje', sb001_yijiaose);
        }
        caculate("sbsjxxForm_bqyjse");
    }
    setSblmAndTreeDisply();
    //查询暂存数据 add by muyx 20170220
    var yzpzzldm = tempsave_zdy_getYzpzzldm();
    if (yzpzzldm) {
        if (tempsave_tryToLoadData(yzpzzldm, $w("nsrxxForm").getValue('skssqq'), $w("nsrxxForm").getValue('skssqz'), gt3.djxh, ctrl)) {
            return;
        }
    }
    //	queryNsrxxbyNsrsbh($w("nsrxxForm").getValue("nsrsbh"), queryNsrxxSuccess, 2);
}

// 设置各类的数据项的属性
function setEleAttrBySbblx() {
    var code = $w('sbsjxxForm').getValue('sbblx').code;

    // 如果申报类型为:07|电池消费税纳税申报表则 本期准予扣除税额可以手工录入,因需求给的输入不明确,
    // 需求说明中此列需要从《电池、涂料税款抵扣台账》附表带出.然需求中没有给出此附表表单
    if (code == "07" || code == "08") {
        $w('sbsjxxForm').enable(['bqzykcse']);

        // 本期减（免）税额 从附表七（1）本期减（免）税额计算表（电池） 合计 本期减（免）税额带出。
        $w('sbsjxxForm').disable(['bqjse']);
    } else {
        if (code == '04') {
            $w('sbsjxxForm').disable(['bqjse']);
        } else {
            $w('sbsjxxForm').enable(['bqjse']);
        }
        $w('sbsjxxForm').disable('bqzykcse');

    }

    if (code == "01") {
        $('div1').setStyle("display", "");
        document.getElementById('bqzykcsecaption').innerHTML = "本期准予扣除税额";
        yj = y_1;
        sb001_yijiaose = yijiao_1;
        changeFormula1();
    } else if (code == "02") {
        $('div2').setStyle("display", "");
        yj = y_2;
        sb001_yijiaose = yijiao_2;
        changeFormula2();
    } else if (code == "03") {
        $('div3').setStyle("display", "");
        $w('sbsjxxForm').enable('bqzykcse');
        document.getElementById('bqzykcsecaption').innerHTML = "本期准予抵减税额";
        yj = y_3;
        sb001_yijiaose = yijiao_3;
        changeFormula3();
    } else if (code == "04") {
        $('div4').setStyle("display", "");
        document.getElementById('cpyG').style.display = '';
        document.getElementById('bqzykcsecaption').innerHTML = "本期准予扣除税额";
        yj = y_4;
        sb001_yijiaose = yijiao_4;
        // add by fanyl 20150920 当定期定额户申报时，默认将定额信息带入主表grid
        if (sb001_cszForXML != 'SBCWGZ' && sb001_cszForXML != 'SBDR') {
            setCpyGridForDqde();
        }
        changeFormula4();
    } else if (code == "05") {
        $('div5').setStyle("display", "");
        document.getElementById('bqzykcsecaption').innerHTML = "本期准予扣除税额";
        $w('sbsjxxForm').enable('bqzykcse');
        yj = y_5;
        sb001_yijiaose = yijiao_5;
        changeFormula5();
    } else if (code == "06") {
        $('div6').setStyle("display", "");
        document.getElementById('qtG').style.display = '';
        document.getElementById('bqzykcsecaption').innerHTML = "本期准予抵减税额";
        yj = y_6;
        sb001_yijiaose = yijiao_6;
        // add by fanyl 20150920 当定期定额户申报时，默认将定额信息带入主表grid
        if (sb001_cszForXML != 'SBCWGZ' && sb001_cszForXML != 'SBDR') {
            setQtGridForDqde();
        }
        changeFormula6();
    } else if (code == "07") {
        $('div7').setStyle("display", "");
        document.getElementById('bqzykcsecaption').innerHTML = "本期准予扣除税额";
        // $w('sbsjxxForm').enable('bqzykcse');
        yj = y_7;
        sb001_yijiaose = yijiao_7;
        changeFormula7();
    } else if (code == "08") {
        $('div8').setStyle("display", "");
        document.getElementById('bqzykcsecaption').innerHTML = "本期准予扣除税额";
        yj = y_8;
        sb001_yijiaose = yijiao_8;
        // add by fanyl 20150926 当定期定额户申报时，默认将定额信息带入主表grid
        if (sb001_cszForXML != 'SBCWGZ' && sb001_cszForXML != 'SBDR') {
            // setDqdeToSbb1(code);
        }
        changeFormula8();
    }

}

// 根据选中的申报表类型，设置申报栏目和附表树的现实与隐藏
function setSblmAndTreeDisply() {
    var addId = []; // 主表合计数栏目
    var addtree = []; // 附表树显示
    var sbblxcode = $w('sbsjxxForm').getValue('sbblx').code;
    if (sbblxcode == "01") {
        addId = ['tr01', 'tr03', 'tr05', 'tr08', 'tr09', 'tr10', 'tr11'];
        addtree = ['00', '01', '02', '03', '04', '33', '42'];
    } else if (sbblxcode == "02") {
        addId = ['tr05', 'tr08', 'tr09', 'tr10', 'tr11'];
        addtree = ['00', '06', '43'];
    } else if (sbblxcode == "03") {
        addId = ['tr01', 'tr03', 'tr05', 'tr08', 'tr09', 'tr10', 'tr11'];
        addtree = ['00', '07', '08', '09', '10', '34', '44'];
    } else if (sbblxcode == "04") {
        addId = ['tr01', 'tr02', 'tr03', 'tr04', 'tr05', 'tr06', 'tr07', 'tr08', 'tr09', 'tr10', 'tr11'];
        addtree = ['00', '11', '12', '15', '16', '17', '18', '19', '20', '27', '28', '35', '45'];
    } else if (sbblxcode == "05") {
        addId = ['tr01', 'tr03', 'tr05', 'tr08', 'tr09', 'tr10', 'tr11'];
        addtree = ['00', '21', '22', '36', '46'];
    } else if (sbblxcode == "06") {
        addId = ['tr01', 'tr03', 'tr05', 'tr08', 'tr09', 'tr10', 'tr11'];
        addtree = ['00', '23', '24', '25', '26', '37', '47'];
    } else if (sbblxcode == "07") {
        addId = ['tr01', 'tr03', 'tr05', 'tr08', 'tr09', 'tr10', 'tr11'];
        addtree = ['00', '29', '30', '38', '40', '48'];
    } else if (sbblxcode == "08") {
        addId = ['tr01', 'tr03', 'tr05', 'tr08', 'tr09', 'tr10', 'tr11'];
        addtree = ['00', '31', '32', '39', '41', '49'];
    }

    // 其他类窗口隐藏
    // document.getElementById('qtG').style.display = 'none';

    // 申报信息相关栏目
    hidtext();
    for (var i = 0; i < addId.length; i++) {
        document.getElementById(addId[i]).style.display = '';
    }

    // 根据申报类型加载附表树
    loadZfbTree(addtree);

    // 设置主表期初数
    setZbqcs();

}

// 根据配置，第一次申报打开根据前期数据带入不可录的单元格
function setQcsEnable() {
    $w('sbsjxxForm').enable(['qcwjse', 'qclqse']);
}

// 设置主表期初数
function setZbqcs() {
    var sbblxcode = $w('sbsjxxForm').getValue('sbblx').code;
    if (sb001_qcsList != null && $chk(sb001_qcsList.trs)) {
        var qcsArray = sb001_qcsList.trs;
        var length = qcsArray.length;
        var xfssbblxDm;

        for (var i = 0; i < length; i++) {
            // 按征收品目来判断
            xfssbblxDm = qcsArray[i].tds.xfssbblxDm.value;
            if (xfssbblxDm == sbblxcode) {
                $w('sbsjxxForm').setValue("qcwjse",
						qcsArray[i].tds.qcwjse.value);
                $w('sbsjxxForm').setValue("qclqse",
						qcsArray[i].tds.qclqse.value);
                $w('sbsjxxForm').setValue("bqjnqqynse",
						qcsArray[i].tds.bqjnqqynse.value);
                caculate("sbsjxxForm_qcwjse");
                caculate("sbsjxxForm_qclqse");
                caculate("sbsjxxForm_bqjnqqynse");
            }
        }
    }

}

// 将申报栏目隐藏
function hidtext() {
    // $w('sbsjxxForm').getField('bqjse').setStyle('display','none');
    document.getElementById('tr01').style.display = 'none';
    document.getElementById('tr02').style.display = 'none';
    document.getElementById('tr03').style.display = 'none';
    document.getElementById('tr04').style.display = 'none';
    document.getElementById('tr05').style.display = 'none';
    document.getElementById('tr06').style.display = 'none';
    document.getElementById('tr07').style.display = 'none';
    document.getElementById('tr08').style.display = 'none';
    document.getElementById('tr09').style.display = 'none';
    document.getElementById('tr10').style.display = 'none';
    document.getElementById('tr11').style.display = 'none';
}

function qing0() {
    $w('sbsjxxForm').setValue("bqjse", "0.00");
    $w('sbsjxxForm').setValue("bqzykcse", "0.00");
    $w('sbsjxxForm').setValue("bqydkse", "0.00");
    $w('sbsjxxForm').setValue("qcwjse", "0.00");
    $w('sbsjxxForm').setValue("qclqse", "0.00");
    $w('sbsjxxForm').setValue("qmldse", "0.00");
    $w('sbsjxxForm').setValue("bqsjdkse", "0.00");
    $w('sbsjxxForm').setValue("bqjnqqynse", "0.00");
    //bqjnqqynseForcpy = 0.0;
    $w('sbsjxxForm').setValue("bqyjse", "0.00");
    $w('sbsjxxForm').setValue("bqybtse", "0.00");
    $w('sbsjxxForm').setValue("qmwjse", "0.00");
    $w('sbsjxxForm').setValue("ynseheji", "0.00");
    $w('sbsjxxForm').setValue("yijiaoje", "0.00");
}

function creatfbData() {

    var sbsjxx1_1Form = pc.getResData("sbsjxx1_1Form", resData2);
    var sbsjxx1_2Form = pc.getResData("sbsjxx1_2Form", resData2);
    var sbsjxx1_3Grid = pc.getResData("sbsjxx1_3Grid", resData2);
    var sbsjxx1_4Grid = pc.getResData("sbsjxx1_4Grid", resData2);
    if ($chk(sbsjxx1_4Grid)) {
        var trs = sbsjxx1_4Grid.trs;
        var length = trs.length;
        for (var i = 0; i < length; i++) {
            fb1_4xsehj = fb1_4xsehj.accAdd(trs[i].tds.xse.value);
        }
    }
    var sbsjxx2_1Grid = pc.getResData("sbsjxx2_1Grid", resData2);
    if ($chk(sbsjxx2_1Grid)) {
        var trs2 = sbsjxx2_1Grid.trs;
        var length2 = trs2.length;
        for (var i = 0; i < length2; i++) {
            fb2_1xsehj = fb2_1xsehj.accAdd(trs2[i].tds.xse.value);
        }
    }
    var sbsjxx3_1Form = pc.getResData("sbsjxx3_1Form", resData2);
    var pjGrid = pc.getResData("pjGrid", resData2);
    var ptjGrid = pc.getResData("ptjGrid", resData2);
    var sbsjxx3_2Form = pc.getResData("sbsjxx3_2Form", resData2);
    var sbsjxx3_3Form = pc.getResData("sbsjxx3_3Form", resData2);
    var sbsjxx3_4Grid = pc.getResData("sbsjxx3_4Grid", resData2);
    var sbsjxx4_1Form = pc.getResData("sbsjxx4_1Form", resData2);
    var sbsjxx4_2Grid = pc.getResData("sbsjxx4_2Grid", resData2);
    var sbsjxx4_3Grid = pc.getResData("sbsjxx4_3Grid", resData2);
    var sbsjxx4_4Grid = pc.getResData("sbsjxx4_4Grid", resData2);
    var sbsjxx4_5Form = pc.getResData("sbsjxx4_5Form", resData2);
    var sbsjxx4_6Form = pc.getResData("sbsjxx4_6Form", resData2);
    var sbsjxx4_7Grid = pc.getResData("sbsjxx4_7Grid", resData2);
    var sbsjxx4_8_2Grid = pc.getResData("sbsjxx4_8_2Grid", resData2);
    var sbsjxx4_8_3Grid = pc.getResData("sbsjxx4_8_3Grid", resData2);
    var msgfxjForm = pc.getResData("msgfxjForm", resData2);
    var sbsjxx4_8_5Grid = pc.getResData("sbsjxx4_8_5Grid", resData2);
    var sbsjxx4_8_6Grid = pc.getResData("sbsjxx4_8_6Grid", resData2);
    var hsgrxj1Form = pc.getResData("hsgrxj1Form", resData2);
    var sbsjxx4_8_7Grid = pc.getResData("sbsjxx4_8_7Grid", resData2);
    var hsgfxj2Form = pc.getResData("hsgfxj2Form", resData2);
    var sbsjxx4_9_1Grid = pc.getResData("sbsjxx4_9_1Grid", resData2);
    var sbsjxx4_9_2Grid = pc.getResData("sbsjxx4_9_2Grid", resData2);
    var sbsjxx4_10Grid = pc.getResData("sbsjxx4_10Grid", resData2);
    var wspzhjForm = pc.getResData("wspzhjForm", resData2);
    var sbsjxx5_1Form = pc.getResData("sbsjxx5_1Form", resData2);
    var sbsjxx5_2Form = pc.getResData("sbsjxx5_2Form", resData2);
    var sbsjxx6_1Form = pc.getResData("sbsjxx6_1Form", resData2);
    var sbsjxx6_2Grid = pc.getResData("sbsjxx6_2Grid", resData2);
    var sbsjxx6_3Form = pc.getResData("sbsjxx6_3Form", resData2);
    var sbsjxx6_4Form = pc.getResData("sbsjxx6_4Form", resData2);
    var sbsjxx7_1Form = pc.getResData("sbsjxx7_1Form", resData2);
    var sbsjxx7_2Form = pc.getResData("sbsjxx7_2Form", resData2);
    var sbsjxx8_1Form = pc.getResData("sbsjxx8_1Form", resData2);
    var sbsjxx8_2Form = pc.getResData("sbsjxx8_2Form", resData2);

    // add by fanyl 20150911 《汇总纳税企业分配表》
    var fb1_6HeadForm = pc.getResData("fb1_6HeadForm", resData2);
    var fb1_6Grid = pc.getResData("fb1_6Grid", resData2);
    var fb1_6Form = pc.getResData("fb1_6Form", resData2);

    if (fb1_6Grid != null && fb1_6Grid != undefined
			&& fb1_6Grid.sword != null && fb1_6Grid.sword != undefined
			&& fb1_6Grid.sword != "") {
        sb001_fbData["fb1_6Grid"] = fb1_6Grid;
    } else {
        sb001_fbData["fb1_6Grid"] = null;
    }
    if (fb1_6HeadForm != null && fb1_6HeadForm != undefined
			&& fb1_6HeadForm.sword != null && fb1_6HeadForm.sword != undefined
			&& fb1_6HeadForm.sword != "") {
        sb001_fbData["fb1_6HeadForm"] = fb1_6HeadForm;
    } else {
        sb001_fbData["fb1_6HeadForm"] = null;
    }
    if (fb1_6Form != null && fb1_6Form != undefined
			&& fb1_6Form.sword != null && fb1_6Form.sword != undefined
			&& fb1_6Form.sword != "") {
        sb001_fbData["fb1_6Form"] = fb1_6Form;
    } else {
        sb001_fbData["fb1_6Form"] = null;
    }

    // add by fanyl 20150616 《本期减（免）税额明细表》
    var sbsjxx1_5Grid = pc.getResData("sbsjxx1_5Grid", resData2);
    if (sbsjxx1_5Grid != null && sbsjxx1_5Grid != undefined
			&& sbsjxx1_5Grid.sword != null && sbsjxx1_5Grid.sword != undefined
			&& sbsjxx1_5Grid.sword != "") {
        sb001_fbData["sbsjxx1_5Grid"] = sbsjxx1_5Grid;
    } else {
        sb001_fbData["sbsjxx1_5Grid"] = null;
    }
    // add
    // end________________________________________________________________________

    // add by fanyl 20150828 附表7-4《电池涂料税款抵扣台账》
    var pmArr = ["101021601", "101021699", "101021700"];
    var nameArr = ["HeadForm", "Grid", "Form"];
    for (var i = 0; i < pmArr.length; i++) {
        for (var j = 0; j < nameArr.length; j++) {
            var name = "sbsjxx7_4" + nameArr[j] + "_" + pmArr[i];
            eval("var sbsjxx7_4" + nameArr[j] + "_" + pmArr[i] + " = pc.getResData('sbsjxx7_4" + nameArr[j] + "_" + pmArr[i] + "', resData2);");
            if ($chk(eval("sbsjxx7_4" + nameArr[j] + "_" + pmArr[i])) && $chk(eval("sbsjxx7_4" + nameArr[j] + "_" + pmArr[i] + ".sword"))) {
                sb001_fbData[name] = eval("sbsjxx7_4" + nameArr[j] + "_" + pmArr[i]);
            } else {
                sb001_fbData[name] = null;
            }
        }
    }

    if (sbsjxx1_1Form != null && sbsjxx1_1Form != undefined
			&& sbsjxx1_1Form.sword != null && sbsjxx1_1Form.sword != undefined
			&& sbsjxx1_1Form.sword != "") {
        sb001_fbData["sbsjxx1_1Form"] = sbsjxx1_1Form;
    } else {
        sb001_fbData["sbsjxx1_1Form"] = null;
    }
    if (sbsjxx1_2Form != null && sbsjxx1_2Form != undefined
			&& sbsjxx1_2Form.sword != null && sbsjxx1_2Form.sword != undefined
			&& sbsjxx1_2Form.sword != "") {
        sb001_fbData["sbsjxx1_2Form"] = sbsjxx1_2Form;
    } else {
        sb001_fbData["sbsjxx1_2Form"] = null;
    }
    if (sbsjxx1_3Grid != null && sbsjxx1_3Grid != undefined
			&& sbsjxx1_3Grid.sword != null && sbsjxx1_3Grid.sword != undefined
			&& sbsjxx1_3Grid.sword != "") {
        sb001_fbData["sbsjxx1_3Grid"] = sbsjxx1_3Grid;
    } else {
        sb001_fbData["sbsjxx1_3Grid"] = null;
    }
    if (sbsjxx1_4Grid != null && sbsjxx1_4Grid != undefined
			&& sbsjxx1_4Grid.sword != null && sbsjxx1_4Grid.sword != undefined
			&& sbsjxx1_4Grid.sword != "") {
        sb001_fbData["sbsjxx1_4Grid"] = sbsjxx1_4Grid;
    } else {
        sb001_fbData["sbsjxx1_4Grid"] = null;
    }
    if (sbsjxx2_1Grid != null && sbsjxx2_1Grid != undefined
			&& sbsjxx2_1Grid.sword != null && sbsjxx2_1Grid.sword != undefined
			&& sbsjxx2_1Grid.sword != "") {
        sb001_fbData["sbsjxx2_1Grid"] = sbsjxx2_1Grid;
    } else {
        sb001_fbData["sbsjxx2_1Grid"] = null;
    }
    if (sbsjxx3_1Form != null && sbsjxx3_1Form != undefined
			&& sbsjxx3_1Form.sword != null && sbsjxx3_1Form.sword != undefined
			&& sbsjxx3_1Form.sword != "") {
        sb001_fbData["sbsjxx3_1Form"] = sbsjxx3_1Form;
    } else {
        sb001_fbData["sbsjxx3_1Form"] = null;
    }
    if (pjGrid != null && pjGrid != undefined && pjGrid.sword != null
			&& pjGrid.sword != undefined && pjGrid.sword != "") {
        sb001_fbData["pjGrid"] = pjGrid;
    } else {
        sb001_fbData["pjGrid"] = null;
    }
    if (ptjGrid != null && ptjGrid != undefined && ptjGrid.sword != null
			&& ptjGrid.sword != undefined && ptjGrid.sword != "") {
        sb001_fbData["ptjGrid"] = ptjGrid;
    } else {
        sb001_fbData["ptjGrid"] = null;
    }
    if (sbsjxx3_2Form != null && sbsjxx3_2Form != undefined
			&& sbsjxx3_2Form.sword != null && sbsjxx3_2Form.sword != undefined
			&& sbsjxx3_2Form.sword != "") {
        sb001_fbData["sbsjxx3_2Form"] = sbsjxx3_2Form;
    } else {
        sb001_fbData["sbsjxx3_2Form"] = null;
    }
    if (sbsjxx3_3Form != null && sbsjxx3_3Form != undefined
			&& sbsjxx3_3Form.sword != null && sbsjxx3_3Form.sword != undefined
			&& sbsjxx3_3Form.sword != "") {
        sb001_fbData["sbsjxx3_3Form"] = sbsjxx3_3Form;
    } else {
        sb001_fbData["sbsjxx3_3Form"] = null;
    }
    if (sbsjxx3_4Grid != null && sbsjxx3_4Grid != undefined
			&& sbsjxx3_4Grid.sword != null && sbsjxx3_4Grid.sword != undefined
			&& sbsjxx3_4Grid.sword != "") {
        sb001_fbData["sbsjxx3_4Grid"] = sbsjxx3_4Grid;
    } else {
        sb001_fbData["sbsjxx3_4Grid"] = null;
    }
    if (sbsjxx4_1Form != null && sbsjxx4_1Form != undefined
			&& sbsjxx4_1Form.sword != null && sbsjxx4_1Form.sword != undefined
			&& sbsjxx4_1Form.sword != "") {
        sb001_fbData["sbsjxx4_1Form"] = sbsjxx4_1Form;
    } else {
        sb001_fbData["sbsjxx4_1Form"] = null;
    }
    if (sbsjxx4_2Grid != null && sbsjxx4_2Grid != undefined
			&& sbsjxx4_2Grid.sword != null && sbsjxx4_2Grid.sword != undefined
			&& sbsjxx4_2Grid.sword != "") {
        sb001_fbData["sbsjxx4_2Grid"] = sbsjxx4_2Grid;
    } else {
        sb001_fbData["sbsjxx4_2Grid"] = null;
    }
    if (sbsjxx4_3Grid != null && sbsjxx4_3Grid != undefined
			&& sbsjxx4_3Grid.sword != null && sbsjxx4_3Grid.sword != undefined
			&& sbsjxx4_3Grid.sword != "") {
        sb001_fbData["sbsjxx4_3Grid"] = sbsjxx4_3Grid;
    } else {
        sb001_fbData["sbsjxx4_3Grid"] = null;
    }
    if (sbsjxx4_4Grid != null && sbsjxx4_4Grid != undefined
			&& sbsjxx4_4Grid.sword != null && sbsjxx4_4Grid.sword != undefined
			&& sbsjxx4_4Grid.sword != "") {
        sb001_fbData["sbsjxx4_4Grid"] = sbsjxx4_4Grid;
    } else {
        sb001_fbData["sbsjxx4_4Grid"] = null;
    }
    if (sbsjxx4_5Form != null && sbsjxx4_5Form != undefined
			&& sbsjxx4_5Form.sword != null && sbsjxx4_5Form.sword != undefined
			&& sbsjxx4_5Form.sword != "") {
        sb001_fbData["sbsjxx4_5Form"] = sbsjxx4_5Form;
    } else {
        sb001_fbData["sbsjxx4_5Form"] = null;
    }
    if (sbsjxx4_6Form != null && sbsjxx4_6Form != undefined
			&& sbsjxx4_6Form.sword != null && sbsjxx4_6Form.sword != undefined
			&& sbsjxx4_6Form.sword != "") {
        sb001_fbData["sbsjxx4_6Form"] = sbsjxx4_6Form;
        fb4_6_snybqs6 = sbsjxx4_6Form.data.snybqs6.value;
        fb4_6_rlybqs6 = sbsjxx4_6Form.data.rlybqs6.value;
        fb4_6_snybqs5 = sbsjxx4_6Form.data.snybqs5.value;
        fb4_6_rlybqs5 = sbsjxx4_6Form.data.rlybqs5.value;
        fb4_6_snybqs7 = sbsjxx4_6Form.data.snybqs7.value;
        fb4_6_rlybqs7 = sbsjxx4_6Form.data.rlybqs7.value;
        fb4_6_snybqs16 = sbsjxx4_6Form.data.snybqs16.value;
        fb4_6_rlybqs16 = sbsjxx4_6Form.data.rlybqs16.value;
        fb4_6_snybqs17 = sbsjxx4_6Form.data.snybqs17.value;
        fb4_6_rlybqs17 = sbsjxx4_6Form.data.rlybqs17.value;
        fb4_6_jksnybqs17 = sbsjxx4_6Form.data.jksnybqs17.value;
        fb4_6_jkrlybqs17 = sbsjxx4_6Form.data.jkrlybqs17.value;
        fb4_6_snybqs3 = sbsjxx4_6Form.data.snybqs3.value;
        fb4_6_rlybqs3 = sbsjxx4_6Form.data.rlybqs3.value;
        fb4_6_snybqs19 = sbsjxx4_6Form.data.snybqs19.value;
        fb4_6_rlybqs19 = sbsjxx4_6Form.data.rlybqs19.value;
        fb4_6_snybqs22 = sbsjxx4_6Form.data.snybqs22.value;
        fb4_6_rlybqs22 = sbsjxx4_6Form.data.rlybqs22.value;
    } else {
        sb001_fbData["sbsjxx4_6Form"] = null;
    }
    if (sbsjxx4_7Grid != null && sbsjxx4_7Grid != undefined
			&& sbsjxx4_7Grid.sword != null && sbsjxx4_7Grid.sword != undefined
			&& sbsjxx4_7Grid.sword != "") {
        sb001_fbData["sbsjxx4_7Grid"] = sbsjxx4_7Grid;
    } else {
        sb001_fbData["sbsjxx4_7Grid"] = null;
    }
    if (sbsjxx4_8_2Grid != null && sbsjxx4_8_2Grid != undefined
			&& sbsjxx4_8_2Grid.sword != null
			&& sbsjxx4_8_2Grid.sword != undefined
			&& sbsjxx4_8_2Grid.sword != "") {
        sb001_fbData["sbsjxx4_8_2Grid"] = sbsjxx4_8_2Grid;
    } else {
        sb001_fbData["sbsjxx4_8_2Grid"] = null;
    }
    if (sbsjxx4_8_3Grid != null && sbsjxx4_8_3Grid != undefined
			&& sbsjxx4_8_3Grid.sword != null
			&& sbsjxx4_8_3Grid.sword != undefined
			&& sbsjxx4_8_3Grid.sword != "") {
        sb001_fbData["sbsjxx4_8_3Grid"] = sbsjxx4_8_3Grid;
    } else {
        sb001_fbData["sbsjxx4_8_3Grid"] = null;
    }
    if (msgfxjForm != null && msgfxjForm != undefined
			&& msgfxjForm.sword != null && msgfxjForm.sword != undefined
			&& msgfxjForm.sword != "") {
        sb001_fbData["msgfxjForm"] = msgfxjForm;
        fb4_8_msgrsnyslhj = msgfxjForm.data.msgrsnyslhj.value;
        fb4_8_msgrrlyslhj = msgfxjForm.data.msgrrlyslhj.value;
    } else {
        sb001_fbData["msgfxjForm"] = null;
    }
    if (sbsjxx4_8_5Grid != null && sbsjxx4_8_5Grid != undefined
			&& sbsjxx4_8_5Grid.sword != null
			&& sbsjxx4_8_5Grid.sword != undefined
			&& sbsjxx4_8_5Grid.sword != "") {
        sb001_fbData["sbsjxx4_8_5Grid"] = sbsjxx4_8_5Grid;
    } else {
        sb001_fbData["sbsjxx4_8_5Grid"] = null;
    }
    if (sbsjxx4_8_6Grid != null && sbsjxx4_8_6Grid != undefined
			&& sbsjxx4_8_6Grid.sword != null
			&& sbsjxx4_8_6Grid.sword != undefined
			&& sbsjxx4_8_6Grid.sword != "") {
        sb001_fbData["sbsjxx4_8_6Grid"] = sbsjxx4_8_6Grid;
    } else {
        sb001_fbData["sbsjxx4_8_6Grid"] = null;
    }
    if (hsgrxj1Form != null && hsgrxj1Form != undefined
			&& hsgrxj1Form.sword != null && hsgrxj1Form.sword != undefined
			&& hsgrxj1Form.sword != "") {
        sb001_fbData["hsgrxj1Form"] = hsgrxj1Form;
        fb4_8_hsgrsnyslhj = hsgrxj1Form.data.hsgrsnyslhj.value;
        fb4_8_hsgrrlyslhj = hsgrxj1Form.data.hsgrrlyslhj.value;
    } else {
        sb001_fbData["hsgrxj1Form"] = null;
    }
    if (sbsjxx4_8_7Grid != null && sbsjxx4_8_7Grid != undefined
			&& sbsjxx4_8_7Grid.sword != null
			&& sbsjxx4_8_7Grid.sword != undefined
			&& sbsjxx4_8_7Grid.sword != "") {
        sb001_fbData["sbsjxx4_8_7Grid"] = sbsjxx4_8_7Grid;
        if ($chk(sbsjxx4_8_7Grid)) {
            var trs = sbsjxx4_8_7Grid.trs;
            var length = trs.length;
            for (var i = 0; i < length; i++) {
                fb4_8_hsgrjksnyslhj = fb4_8_hsgrjksnyslhj
						.accAdd(trs[i].tds.snysl.value);
                fb4_8_hsgrjkrlyslhj = fb4_8_hsgrjkrlyslhj
						.accAdd(trs[i].tds.rlysl.value);
            }
        }
    } else {
        sb001_fbData["sbsjxx4_8_7Grid"] = null;
    }
    if (hsgfxj2Form != null && hsgfxj2Form != undefined
			&& hsgfxj2Form.sword != null && hsgfxj2Form.sword != undefined
			&& hsgfxj2Form.sword != "") {
        sb001_fbData["hsgfxj2Form"] = hsgfxj2Form;
    } else {
        sb001_fbData["hsgfxj2Form"] = null;
    }
    if (sbsjxx4_9_1Grid != null && sbsjxx4_9_1Grid != undefined
			&& sbsjxx4_9_1Grid.sword != null
			&& sbsjxx4_9_1Grid.sword != undefined
			&& sbsjxx4_9_1Grid.sword != "") {
        sb001_fbData["sbsjxx4_9_1Grid"] = sbsjxx4_9_1Grid;
        if ($chk(sbsjxx4_9_1Grid)) {
            var trs = sbsjxx4_9_1Grid.trs;
            var length = trs.length;
            for (var i = 0; i < length; i++) {
                fb4_9_snyzyfpslhj = fb4_9_snyzyfpslhj
						.accAdd(trs[i].tds.sl.value);
            }
        }
    } else {
        sb001_fbData["sbsjxx4_9_1Grid"] = null;
    }
    if (sbsjxx4_9_2Grid != null && sbsjxx4_9_2Grid != undefined
			&& sbsjxx4_9_2Grid.sword != null
			&& sbsjxx4_9_2Grid.sword != undefined
			&& sbsjxx4_9_2Grid.sword != "") {
        sb001_fbData["sbsjxx4_9_2Grid"] = sbsjxx4_9_2Grid;
        if ($chk(sbsjxx4_9_2Grid)) {
            var trs = sbsjxx4_9_2Grid.trs;
            var length = trs.length;
            for (var i = 0; i < length; i++) {
                fb4_9_rlyzyfpslhj = fb4_9_rlyzyfpslhj
						.accAdd(trs[i].tds.sl.value);
            }
        }
    } else {
        sb001_fbData["sbsjxx4_9_2Grid"] = null;
    }
    if (sbsjxx4_10Grid != null && sbsjxx4_10Grid != undefined
			&& sbsjxx4_10Grid.sword != null
			&& sbsjxx4_10Grid.sword != undefined && sbsjxx4_10Grid.sword != "") {
        sb001_fbData["sbsjxx4_10Grid"] = sbsjxx4_10Grid;
    } else {
        sb001_fbData["sbsjxx4_10Grid"] = null;
    }
    if (wspzhjForm != null && wspzhjForm != undefined
			&& wspzhjForm.sword != null && wspzhjForm.sword != undefined
			&& wspzhjForm.sword != "") {
        sb001_fbData["wspzhjForm"] = wspzhjForm;
    } else {
        sb001_fbData["wspzhjForm"] = null;
    }
    if (sbsjxx5_1Form != null && sbsjxx5_1Form != undefined
			&& sbsjxx5_1Form.sword != null && sbsjxx5_1Form.sword != undefined
			&& sbsjxx5_1Form.sword != "") {
        sb001_fbData["sbsjxx5_1Form"] = sbsjxx5_1Form;
    } else {
        sb001_fbData["sbsjxx5_1Form"] = null;
    }
    if (sbsjxx5_2Form != null && sbsjxx5_2Form != undefined
			&& sbsjxx5_2Form.sword != null && sbsjxx5_2Form.sword != undefined
			&& sbsjxx5_2Form.sword != "") {
        sb001_fbData["sbsjxx5_2Form"] = sbsjxx5_2Form;
    } else {
        sb001_fbData["sbsjxx5_2Form"] = null;
    }
    if (sbsjxx6_1Form != null && sbsjxx6_1Form != undefined
			&& sbsjxx6_1Form.sword != null && sbsjxx6_1Form.sword != undefined
			&& sbsjxx6_1Form.sword != "") {
        sb001_fbData["sbsjxx6_1Form"] = sbsjxx6_1Form;
    } else {
        sb001_fbData["sbsjxx6_1Form"] = null;
    }
    if (sbsjxx6_2Grid != null && sbsjxx6_2Grid != undefined
			&& sbsjxx6_2Grid.sword != null && sbsjxx6_2Grid.sword != undefined
			&& sbsjxx6_2Grid.sword != "") {
        sb001_fbData["sbsjxx6_2Grid"] = sbsjxx6_2Grid;
    } else {
        sb001_fbData["sbsjxx6_2Grid"] = null;
    }
    if (sbsjxx6_3Form != null && sbsjxx6_3Form != undefined
			&& sbsjxx6_3Form.sword != null && sbsjxx6_3Form.sword != undefined
			&& sbsjxx6_3Form.sword != "") {
        sb001_fbData["sbsjxx6_3Form"] = sbsjxx6_3Form;
    } else {
        sb001_fbData["sbsjxx6_3Form"] = null;
    }
    if (sbsjxx6_4Form != null && sbsjxx6_4Form != undefined
			&& sbsjxx6_4Form.sword != null && sbsjxx6_4Form.sword != undefined
			&& sbsjxx6_4Form.sword != "") {
        sb001_fbData["sbsjxx6_4Form"] = sbsjxx6_4Form;
    } else {
        sb001_fbData["sbsjxx6_4Form"] = null;
    }
    if (sbsjxx7_1Form != null && sbsjxx7_1Form != undefined
			&& sbsjxx7_1Form.sword != null && sbsjxx7_1Form.sword != undefined
			&& sbsjxx7_1Form.sword != "") {
        sb001_fbData["sbsjxx7_1Form"] = sbsjxx7_1Form;
    } else {
        sb001_fbData["sbsjxx7_1Form"] = null;
    }
    if (sbsjxx7_2Form != null && sbsjxx7_2Form != undefined
			&& sbsjxx7_2Form.sword != null && sbsjxx7_2Form.sword != undefined
			&& sbsjxx7_2Form.sword != "") {
        sb001_fbData["sbsjxx7_2Form"] = sbsjxx7_2Form;
    } else {
        sb001_fbData["sbsjxx7_2Form"] = null;
    }
    if (sbsjxx8_1Form != null && sbsjxx8_1Form != undefined
			&& sbsjxx8_1Form.sword != null && sbsjxx8_1Form.sword != undefined
			&& sbsjxx8_1Form.sword != "") {
        sb001_fbData["sbsjxx8_1Form"] = sbsjxx8_1Form;
    } else {
        sb001_fbData["sbsjxx8_1Form"] = null;
    }
    if (sbsjxx8_2Form != null && sbsjxx8_2Form != undefined
			&& sbsjxx8_2Form.sword != null && sbsjxx8_2Form.sword != undefined
			&& sbsjxx8_2Form.sword != "") {
        sb001_fbData["sbsjxx8_2Form"] = sbsjxx8_2Form;
    } else {
        sb001_fbData["sbsjxx8_2Form"] = null;
    }
}

// 组织应税消费品项目申报数据
function getYsxfpxmList() {
    var sbxxListTrs = sb001_sbxxList.trs;
    var sbxxListLength = sbxxListTrs.length;
    var tmpSbxx, newArray = [];
    var sbsjxxForm = $w('sbsjxxForm');
    var sbblxCode = sbsjxxForm.getValue('sbblx').code;
    var ynse;
    var xssl;
    var xxse

    if (sbblxCode == '06') {
        return newArray;
    }

    for (var i = 0; i < sbxxListLength; i++) {
        tmpSbxx = sbxxListTrs[i].tds;

        ynse = -1; // 这里设成-1，主要是为了最后的判断
        xssl = 0;
        xse = 0;
        sl = 0;

        var zspmDm = tmpSbxx.zspmDm.value;
        if (sbblxCode == '01') {
            if (zspmDm == "101020101" && sbblxCode == '01') {
                xssl = 0;
                xse = sbsjxxForm.getValue('xsejljy');
                ynse = sbsjxxForm.getValue('syslblsljljy')
						* sbsjxxForm.getValue('xsejljy');
            } else if (zspmDm == "101020102" && sbblxCode == '01') {
                xssl = 0;
                xse = sbsjxxForm.getValue('xseyljy');
                ynse = sbsjxxForm.getValue('syslblslyljy')
						* sbsjxxForm.getValue('xseyljy');
            } else if (zspmDm == "101020104" && sbblxCode == '01') {

                xssl = sbsjxxForm.getValue('xssljljy');
                xse = 0;
                ynse = parseFloat(sbsjxxForm.getValue('sysldesljljy'))
						* sbsjxxForm.getValue('xssljljy');
            } else if (zspmDm == "101020105" && sbblxCode == '01') {
                xssl = sbsjxxForm.getValue('xsslyljy');
                xse = 0;
                ynse = parseFloat(sbsjxxForm.getValue('sysldeslyljy'))
						* sbsjxxForm.getValue('xsslyljy');
            } else if (zspmDm == "101020107" && sbblxCode == '01') {
                xssl = sbsjxxForm.getValue('xsslxjy');
                xse = sbsjxxForm.getValue('xsexjy');
                ynse = sbsjxxForm.getValue('ynsexjy');
            } else if (zspmDm == "101020108" && sbblxCode == '01') {
                xssl = sbsjxxForm.getValue('xsslys');
                xse = sbsjxxForm.getValue('xseys');
                ynse = sbsjxxForm.getValue('ynseys');
            }
        }
        // if (sbblxCode == '02') {
        // if (zspmDm == "101020106" && sbblxCode == '02') {
        // xssl = sbsjxxForm.getValue('xssljy');
        // xse = sbsjxxForm.getValue('xsejy');
        // ynse = sbsjxxForm.getValue('ynsejy');
        // }
        //
        // }
        if (sbblxCode == '03') {
            if (zspmDm == "101020201" && sbblxCode == '03') {
                xssl = 0;
                xse = sbsjxxForm.getValue('xselsbj');
                ynse = sbsjxxForm.getValue('syslblsllsbj')
						* sbsjxxForm.getValue('xselsbj');
            } else if (zspmDm == "101020202" && sbblxCode == '03') {
                xssl = sbsjxxForm.getValue('xssllsbj');
                xse = 0;
                ynse = parseFloat(sbsjxxForm.getValue('sysldesllsbj'))
						* sbsjxxForm.getValue('xssllsbj');
            } else if (zspmDm == "101020203" && sbblxCode == '03') {
                xssl = 0;
                xse = sbsjxxForm.getValue('xseslbj');
                ynse = sbsjxxForm.getValue('syslblslslbj')
						* sbsjxxForm.getValue('xseslbj');
            } else if (zspmDm == "101020204" && sbblxCode == '03') {
                xssl = sbsjxxForm.getValue('xsslslbj');
                xse = 0;
                ynse = parseFloat(sbsjxxForm.getValue('sysldeslslbj'))
						* sbsjxxForm.getValue('xsslslbj');
            } else if (zspmDm == "101020205" && sbblxCode == '03') {

                xssl = sbsjxxForm.getValue('xsslhj');
                xse = 0;
                ynse = sbsjxxForm.getValue('ynsehj');
            } else if (zspmDm == "101020206" && sbblxCode == '03') {
                xssl = sbsjxxForm.getValue('xssljlpj');
                xse = sbsjxxForm.getValue('xsejlpj');
                ynse = sbsjxxForm.getValue('ynsejlpj');
            } else if (zspmDm == "101020207" && sbblxCode == '03') {
                xssl = sbsjxxForm.getValue('xsslylpj');
                xse = sbsjxxForm.getValue('xseylpj');
                ynse = sbsjxxForm.getValue('ynseylpj');
                // } else if (zspmDm == "101020208"
                // && sbblxCode == '03') {
                // xssl = sbsjxxForm.getValue('xssljj');
                // xse = sbsjxxForm.getValue('xsejj');
                // ynse = sbsjxxForm.getValue('ynsejj');
            } else if (zspmDm == "101020299" && sbblxCode == '03') {
                xssl = sbsjxxForm.getValue('xsslqtj');
                xse = sbsjxxForm.getValue('xseqtj');
                ynse = sbsjxxForm.getValue('ynseqtj');
            }
        }
        /*
		 * if (sbblxCode == '04') { if (zspmDm == "101020609" && sbblxCode ==
		 * '04') { sl = sbsjxxForm.getValue('syslqy'); xssl =
		 * sbsjxxForm.getValue('xsslqy'); ynse = sbsjxxForm.getValue('ynseqy'); // }
		 * else if (zspmDm == "101020602" // && sbblxCode == '04') { // xssl =
		 * sbsjxxForm.getValue('xsslwqqy'); // ynse =
		 * sbsjxxForm.getValue('ynsewqqy'); } else if (zspmDm == "101020603" &&
		 * sbblxCode == '04') { sl = sbsjxxForm.getValue('syslcy'); xssl =
		 * sbsjxxForm.getValue('xsslcy'); ynse = sbsjxxForm.getValue('ynsecy'); }
		 * else if (zspmDm == "101020604" && sbblxCode == '04') { sl =
		 * sbsjxxForm.getValue('syslhkmy'); xssl =
		 * sbsjxxForm.getValue('xsslhkmy'); ynse =
		 * sbsjxxForm.getValue('ynsehkmy'); } else if (zspmDm == "101020605" &&
		 * sbblxCode == '04') { sl = sbsjxxForm.getValue('syslsny'); xssl =
		 * sbsjxxForm.getValue('xsslsny'); ynse =
		 * sbsjxxForm.getValue('ynsesny'); } else if (zspmDm == "101020606" &&
		 * sbblxCode == '04') { sl = sbsjxxForm.getValue('syslrjy'); xssl =
		 * sbsjxxForm.getValue('xsslrjy'); ynse =
		 * sbsjxxForm.getValue('ynserjy'); } else if (zspmDm== "101020607" &&
		 * sbblxCode == '04') { sl = sbsjxxForm.getValue('syslrhy'); xssl =
		 * sbsjxxForm.getValue('xsslrhy'); ynse =
		 * sbsjxxForm.getValue('ynserhy'); } else if (zspmDm == "101020608" &&
		 * sbblxCode == '04') { sl = sbsjxxForm.getValue('syslrly'); xssl =
		 * sbsjxxForm.getValue('xsslrly'); ynse =
		 * sbsjxxForm.getValue('ynserly'); } }
		 */
        if (sbblxCode == '05') {
            if (zspmDm == "101020901" && sbblxCode == '05') {
                xssl = sbsjxxForm.getValue('xsslqg1');
                xse = sbsjxxForm.getValue('xseqg1');
                ynse = sbsjxxForm.getValue('ynseqg1');
            } else if (zspmDm == "101020902" && sbblxCode == '05') {
                xssl = sbsjxxForm.getValue('xsslqg2');
                xse = sbsjxxForm.getValue('xseqg2');
                ynse = sbsjxxForm.getValue('ynseqg2');
            } else if (zspmDm == "101020903" && sbblxCode == '05') {
                xssl = sbsjxxForm.getValue('xsslqg3');
                xse = sbsjxxForm.getValue('xseqg3');
                ynse = sbsjxxForm.getValue('ynseqg3');
            } else if (zspmDm == "101020904" && sbblxCode == '05') {
                xssl = sbsjxxForm.getValue('xsslqg4');
                xse = sbsjxxForm.getValue('xseqg4');
                ynse = sbsjxxForm.getValue('ynseqg4');
            } else if (zspmDm == "101020905" && sbblxCode == '05') {
                xssl = sbsjxxForm.getValue('xsslqg5');
                xse = sbsjxxForm.getValue('xseqg5');
                ynse = sbsjxxForm.getValue('ynseqg5');
            } else if (zspmDm == "101020906" && sbblxCode == '05') {
                xssl = sbsjxxForm.getValue('xsslqg6');
                xse = sbsjxxForm.getValue('xseqg6');
                ynse = sbsjxxForm.getValue('ynseqg6');
            } else if (zspmDm == "101020907" && sbblxCode == '05') {
                xssl = sbsjxxForm.getValue('xsslqg7');
                xse = sbsjxxForm.getValue('xseqg7');
                ynse = sbsjxxForm.getValue('ynseqg7');
            } else if (zspmDm == "101021000" && sbblxCode == '05') {
                xssl = sbsjxxForm.getValue('xsslzxsykc');
                xse = sbsjxxForm.getValue('xsezxsykc');
                ynse = sbsjxxForm.getValue('ynsezxsykc');
            }
        }

        if (sbblxCode == '07') {
            if (zspmDm == "101021601") {
                xssl = sbsjxxForm.getValue('xssldc1');
                xse = sbsjxxForm.getValue('xsedc1');
                ynse = sbsjxxForm.getValue('ynsedc1');
            } else if (zspmDm == "101021699") {
                xssl = sbsjxxForm.getValue('xssldc2');
                xse = sbsjxxForm.getValue('xsedc2');
                ynse = sbsjxxForm.getValue('ynsedc2');
            }
        }

        if (sbblxCode == '08') {
            if (zspmDm == "101021700") {
                xssl = sbsjxxForm.getValue('xssltl');
                xse = sbsjxxForm.getValue('xsetl');
                ynse = sbsjxxForm.getValue('ynsetl');
            }
        }

        // add by fanyl 20150518 增加卷烟批发申报表多税率的兼容
        if (sbblxCode == '02') {
            var xssljy = sbsjxxForm.getValue('xssljy');
            var xsejy = sbsjxxForm.getValue('xsejy');
            var xssljy2 = sbsjxxForm.getValue('xssljy2');
            var xsejy2 = sbsjxxForm.getValue('xsejy2');
            if (zspmDm == "101020106") { // 从价品目
                var sbssqjLx = getSbssqjLx(tmpSbxx);
                if (sbssqjLx == "1") { // 5月以前的属期，sbxxList只增加一条记录，老税率
                    tmpSbxx.ynse.value = sbsjxxForm.getValue('ynsejy').round(2);
                    tmpSbxx.xssr.value = xsejy.round(2);
                    tmpSbxx.jsyj.value = xssljy.round(4); // jsyj存销售数量
                    tmpSbxx.sl1.value = 0.05; // 税率
                    newArray.include(sbxxListTrs[i]);
                } else if (sbssqjLx == "2") { // 5月以后的属期，sbxxList只增加一条记录，新税率
                    tmpSbxx.ynse.value = parseFloat(xsejy2 * 0.11).round(2);
                    tmpSbxx.xssr.value = xsejy2.round(2);
                    tmpSbxx.jsyj.value = 0; // jsyj存销售数量
                    tmpSbxx.sl1.value = 0.11;
                    newArray.include(sbxxListTrs[i]);
                } else { // 5月份属期，sbxxList增加两条记录，新税率一条，老税率一条
                    tmpSbxx.ynse.value = sbsjxxForm.getValue('ynsejy').round(2);
                    tmpSbxx.xssr.value = xsejy.round(2);
                    tmpSbxx.jsyj.value = xssljy.round(4); // jsyj存销售数量
                    tmpSbxx.sl1.value = 0.05; // 税率
                    newArray.include(sbxxListTrs[i]);
                    // 复制一条数据，作为新税率的记录
                    var tmpArr = clone(sbxxListTrs[i]);
                    var tmpSbxx2 = tmpArr.tds;
                    tmpSbxx2.ynse.value = parseFloat(xsejy2 * 0.11).round(2);
                    tmpSbxx2.xssr.value = xsejy2.round(2);
                    tmpSbxx2.jsyj.value = 0; // jsyj存销售数量
                    tmpSbxx2.sl1.value = 0.11;
                    newArray.include(tmpArr);
                }
            } else if (zspmDm == "101020109") { // 从量品目
                tmpSbxx.sl1.value = 50;
                tmpSbxx.xssr.value = 0; // 销售收入为0
                tmpSbxx.jsyj.value = xssljy2.round(4); // jsyj存销售数量
                tmpSbxx.ynse.value = parseFloat(xssljy2 * 50).round(2);
                tmpSbxx.zspmDm.value = "101020109"; // 新增的从量品目
                newArray.include(sbxxListTrs[i]);
            }
        }

        if (ynse != -1) {
            if (sbblxCode == '04') {
                tmpSbxx.sl1.value = sl;
            }
            if (sbblxCode != "02") {
                xssl = xssl.round(2);
                xsslOrxse = xse.round(2);
                ynse = ynse.round(2);

                tmpSbxx.ynse.value = ynse;
                tmpSbxx.xssr.value = xse;
                tmpSbxx.jsyj.value = xssl; // jsyj存销售数量
                newArray.include(sbxxListTrs[i]);
            }
        }
    }
    return newArray;
}

function clone(myObj) {
    if (typeof (myObj) != 'object' || myObj == null)
        return myObj;
    var newObj = new Object();
    for (var i in myObj) {
        newObj[i] = clone(myObj[i]);
    }
    return newObj;
}

// 保存前校验
function checkBeforeSave() {
    // 再次计算应纳税额合计
    caculate("sbsjxxForm_ynseheji");

    var sbsjxxForm = $w('sbsjxxForm');
    if (!sbsjxxForm.validate()) {
        swordAlert("请输入必录项");
        return false;
    }

    var sbblxcode = $w('sbsjxxForm').getValue('sbblx').code;

    // 《烟类应税消费品消费税纳税申报表》卷烟类“销售额”合计是否低于《各牌号规格卷烟消费税计税价格》“销售额合计”，若是，提示“申报的销售额合计低于按卷烟消费税计税价格计算的销售额合计”
    // var xsehj2=sbsjxxForm.getValue("xsehj2");
    var xsehj2 = parseFloat(sbsjxxForm.getValue("xsejljy"))
			+ parseFloat(sbsjxxForm.getValue("xseyljy"))
			+ parseFloat(sbsjxxForm.getValue("xsexjy"))
			+ parseFloat(sbsjxxForm.getValue("xseys"));
    if (sbblxcode == '01' && parseFloat(xsehj2) < parseFloat(fb1_4xsehj)) {
        swordAlert("申报的销售额合计" + xsehj2 + "低于附表4按卷烟消费税计税价格计算的销售额合计" + fb1_4xsehj);
        return false;
    }

    // add by fanyl 20150611 保存时校验《本期减免税额明细表》的减免税额合计是否与主表本期减免额相等
    var bqjmse = parseFloat(sbsjxxForm.getValue("bqjse")).round(2);
    var jmmxhj = 0.0;
    var jmmxbGrid = sb001_fbData["sbsjxx1_5Grid"];
    if ($chk(jmmxbGrid) && $chk(jmmxbGrid.trs)) {
        var jmmxbData = jmmxbGrid.trs;
        for (var i = 0; i < jmmxbData.length; i++) {
            jmmxhj = jmmxhj.accAdd(jmmxbData[i].tds.bqjmse.value);
        }
        jmmxhj = parseFloat(jmmxhj).round(2);
    }
    if (bqjmse != jmmxhj) {
        swordAlert("《本期减（免）税额明细表》中的减（免）税额合计为" + jmmxhj + "，主表的本期减（免）税额为" + bqjmse + "，二者不相等");
        return false;
    }

    // add by fanyl 20150911 总分机构的情况，监控必须制作《汇总纳税企业消费税分配表》
    if (zfjgBz == "4") {
        if (!$chk(sb001_fbData["fb1_6Grid"])) {
            swordAlert("纳税人为汇总纳税企业，必须制作《汇总纳税企业消费税分配表》");
            return false;
        }
    }

    // if(sbblxcode=='01' && parseFloat(xsehj2)<parseFloat(fb1_3xsehj)){
    // swordAlert("申报的销售额合计"+xsehj2+"低于附表3按卷烟消费税计税价格计算的销售额合计" + fb1_3xsehj);
    // return false;
    // }

    // 判断《卷烟消费税纳税申报表（批发）》“销售额合计”是否低于对应属期《卷烟批发企业月份销售明细清单》“销售额合计”（只针对从价计算的品目）
    // var xsejljy=sbsjxxForm.getValue("xsejljy");
    var xsejyhj = sbsjxxForm.getValue("xsehj2");
    // var xsehjjy=xsejljy.accAdd(xseyljy);
    if (sbblxcode == '02' && isContain(ylpfZspmArray, "jypfcj") && !isContain(ylpfZspmArray, "jypfcl") && parseFloat(xsejyhj) < parseFloat(fb2_1xsehj)) {
        swordAlert("申报的销售额合计" + xsejyhj + "低于附表明细清单销售额合计" + fb2_1xsehj);
        return false;
    }

    if (sbblxcode == '03') {
        var sbsjxx3_1Form = sb001_fbData["sbsjxx3_1Form"];
        // var pjGrid = sb001_fbData["pjGrid"];
        // var ptjGrid = sb001_fbData["ptjGrid"];

        var bqzykcse_jj = parseFloat(sbsjxxForm.getValue("bqzykcse"));
        if (bqzykcse_jj > 0 && (sbsjxx3_1Form == null)) {
            swordAlert("请填写《本期准予抵减税额计算表》!");
            return false;
        }
        if (bqzykcse_jj > 0 && sbsjxx3_1Form != null) {
            var fb3_1_djhj = sbsjxx3_1Form.data.bqzydjsehj.value;
            if (fb3_1_djhj == 0) {
                swordAlert("请填写《本期准予抵减税额计算表》!");
                return false;
            }
        }

    }

    // 成品油的相关校验
    if (sbblxcode == '04' && snyrlyBz == 'Y') {
        if (!pc.getWidget("sbsjxxcpyGrid").validate()) {
            return false;
        }

        if (!cpylBjgxjy()) {
            return false;
        }
    }

    // 小汽车类
    if (sbblxcode == '01' || sbblxcode == '03' || sbblxcode == '05'
			|| sbblxcode == '06') {
        var bqjmse = $w('sbsjxxForm').getValue('bqjse') / 1;
        var bqzykcse = $w('sbsjxxForm').getValue('bqzykcse') / 1;
        var ynsehj = 0;
        if (sbblxcode == '01') {
            ynsehj = $w('sbsjxxForm').getValue('ynsehj1') / 1;
        }
        if (sbblxcode == '03') {
            ynsehj = $w('sbsjxxForm').getValue('ynsehj3') / 1;
        }
        if (sbblxcode == '05') {
            ynsehj = $w('sbsjxxForm').getValue('ynsehj5') / 1;
        }
        if (sbblxcode == '06') {
            ynsehj = $w('sbsjxxForm').getValue('ynsehj6') / 1;
        }
        if (sbblxcode == '07') {
            ynsehj = $w('sbsjxxForm').getValue('ynsehj7') / 1;
        }
        if (sbblxcode == '08') {
            ynsehj = $w('sbsjxxForm').getValue('ynsehj8') / 1;
        }

        // if (bqjmse.accAdd(bqzykcse) > ynsehj) {
        // swordAlert("‘本期准予扣除税额’+‘本期减（免）税额’的值，不能大于‘应纳税额合计’");
        // return false;
        // }
    }

    // 其他类校验
    if (sbblxcode == '06') {
        if (!pc.getWidget("sbsjxxqtGrid").validate()) {
            return false;
        }

        var hjDiv = $w("sbsjxxqtGrid").hjRow;
        var cellArray = hjDiv.getElements("div");
        var ynseHJ = cellArray[4].get("realvalue");

        $w('sbsjxxForm').setValue('ynsehj6', ynseHJ);
        caculate("sbsjxxForm_ynsehj6");
        $w('sbsjxxForm').setValue('ynseheji', ynseHJ);
        var allGridData = $w("sbsjxxqtGrid").getAllGridData();
        if (!(allGridData == null || allGridData == undefined || allGridData == "")) {
            trs = allGridData.trs;
            if (trs == null || trs == undefined || trs == "" || trs.length == 0) {
                swordAlert("其他类没有品目认定，请重新选择");
                return false;
            }
        }
    }
    if ($w('sbsjxxForm').getValue('ynsehj6') / 1 >= 0 && sbblxcode == '06') {
        var allGridData = $w("sbsjxxqtGrid").getAllGridData();
        var allGridDataTrs = allGridData.trs;
        var length = allGridDataTrs.length;
        for (var i = 0; i < length; i++) {
            var sl1 = allGridDataTrs[i].tds.sl1.value;
            if (sl1 == null || sl1 == undefined || sl1 == "0" || sl1 == "") {
                swordAlert("税率不能为0，请修改税率");
                return false;
            }
        }
    }

    return true;
}

/**
 * 判断数组中是否存在某元素
 * 
 * @param Array
 * @param Element
 * @return
 */
function isContain(Array, Element) {
    for (var i = 0; i < Array.length; i++) {
        if (Array[i] == Element) {
            return true;
        }
    }
    return false;
}

// 提交保存
function save() {
    var sbblxcode = $w('sbsjxxForm').getValue('sbblx').code;

    // 强制类监控

    if (!checkBeforeSave())
        return;


    // 如果更正烟类、酒类、其他类申报表，必须打开附表1点确定，确保新获取的期初数能够参与到计算 By:张俊，2017年3月10日11:40:05
    if (sb001_cszForXML == 'SBCWGZ' && (sbblxcode == "01" || sbblxcode == "03" || sbblxcode == "06") && isFb1Open != "Y") {
        swordAlert("请打开《本期准予扣除税额计算表》点【确定】后继续保存！");
        return;
    }

    // 如果更正电池、涂料类申报表，必须打开附表4点确定，确保新获取的期初数能够参与到计算 By:张俊，2017年3月10日11:40:05
    if (sb001_cszForXML == 'SBCWGZ' && (sbblxcode == "07" || sbblxcode == "08") && isFb1Open != "Y") {
        swordAlert("请打开《电池、涂料税款抵扣台账》点【确定】后继续保存！");
        return;
    }
    // 提示类监控
    var errmsg = "";

    if (sbblxcode == "04") {

        if ($chk(sb001_fbData["sbsjxx4_2Grid"])) {
            var jmjsbTrs = sb001_fbData["sbsjxx4_2Grid"].trs;
            for (var i = 0; i < jmjsbTrs.length; i++) {
                if (jmjsbTrs[i].tds.zspmDm.value == "101020605") {
                    var snySl = jmjsbTrs[i].tds.bqjmsl.value;
                    fb4_2_bqjmslsny = parseFloat(snySl) / 1;
                } else if (jmjsbTrs[i].tds.zspmDm.value == "101020608") {
                    var rlySl = jmjsbTrs[i].tds.bqjmsl.value;
                    fb4_2_bqjmslrly = parseFloat(rlySl) / 1;
                }
            }
        }
        if (fb4_6_snybqs5.accAdd(fb4_6_snybqs7).accAdd(fb4_6_rlybqs5).accAdd(
				fb4_6_rlybqs7) != fb4_2_bqjmslsny.accAdd(fb4_2_bqjmslrly)) {
            errmsg = "《石脑油、燃料油生产、外购、耗用、库存月度统计表》的第5、7行石脑油、燃料油本期数之和";
            errmsg += "与附表2《本期减（免）税额计算表》“本期减（免）数量”注明的石脑油、燃料油数量不一致，注意可能计量单位不同，";
        }
    }

    // add by fanyl 20150812 定期定额户申报时监控核定额与应纳税额的关系，应纳税额>=核定额
    var errmsgForDqde = "";
    if ($chk(sb001_dqdexx) && sb001_dqdexx.trs.length > 0) {
        for (var j = 0; j < sb001_dqdexx.trs.length; j++) {
            var zspmDm = sb001_dqdexx.trs[j].tds.zspmDm.value;
            if (checkZspmSfpp(zspmDm)) {
                var zspmmc = sb001_dqdexx.trs[j].tds.zspmmc.value;
                var jsyj = sb001_dqdexx.trs[j].tds.jsyj.value;
                var xse = getXseAndYnseByZspmDm(zspmDm)[0];
                if (xse < jsyj) {
                    if (errmsgForDqde == "") {
                        errmsgForDqde = zspmmc + "的销售额比核定的应纳税经营额小,"
                    } else {
                        errmsgForDqde += "<br/>" + zspmmc + "的销售额比核定的应纳税经营额小,";
                    }
                }
            }
        }
    }

    if (errmsgForDqde != "") {
        swordAlert(errmsgForDqde + "请检查后重新填写！");
        return;
    }

    if (errmsg != "") {
        swordConfirm(errmsg + "<br/>是否继续保存？", {
            okBtnName: "是",
            cancelBtnName: "否",
            onOk: function () {
                saveSubmit();

            },
            onCancel: function () {
                return;
            },
            onClose: function () {
                return;
            }
        });
    } else {
        saveSubmit();
    }
}

// add by fanyl 20150925 针对跨区测试问题修改，将前面的注释掉
function saveSubmit() {
    if (kdqsssrfpbz == "Y") {
        var ysxfpxmList = getYsxfpxmList();
        var sbsjxxGrid = {
            'sword': 'SwordGrid',
            'name': 'sbsjxxGrid',
            'trs': ysxfpxmList
        };
        var kstlBtn = new SwordSubmit();
        kstlBtn.pushData($w("sbsjxxForm").getSubmitData());
        kstlBtn.pushData(sbsjxxGrid);
        var sbblxcode = sbsjxxForm.getValue('sbblx').code;
        if (sbblxcode == '04') {
            kstlBtn.pushData($w("sbsjxxcpyGrid").getAllGridData());
        }
        if (sbblxcode == '06') {
            kstlBtn.pushData($w("sbsjxxqtGrid").getAllGridData());
        }
        // 获取减免税额
        var jmGridData = sb001_fbData["sbsjxx1_5Grid"];
        kstlBtn.pushData(jmGridData);
        kstlBtn.pushData($w("nsrxxForm").getSubmitData());
        kstlBtn.setCtrl("SBGyCtrl_openkdqsssrfpFb");
        kstlBtn.pushData(sbsjxxGrid);
        kstlBtn.pushData("djxh", gt3.djxh);
        kstlBtn.pushData("zsxmDm", "10102");
        swordAlertIframe('', {
            titleName: "跨地区税收收入分配表",
            width: 1000,
            height: 800,
            param: window,
            isNormal: 'true',
            isMax: 'true',
            isClose: 'true',
            isMin: "true",
            submit: kstlBtn
        });
    } else {
        saveSubmit2();
    }
}

// 税款分解grid点击确定时的回调函数
function sbbSavejx() {
    saveSubmit3();
}

// 计算附加税计税依据，并赋值给附加税公共List
function setYjskToSbxx(ysxfpxmList, zspmDm) {
    if (!$chk(zspmDm)) {
        return;
    }
    var sl = 0.0;
    var xse = 0.0;
    var ynse = 0.0;
    var ynseHj = 0.0;
    var jmse = 0.0;
    var sbblx = $w('sbsjxxForm').getValue('sbblx').code; // 申报表类型

    if (zspmDm == "101020101") { // 卷烟（调拨价70元（不含增值税）/条以上（含70元），从价计算）
        sl = $w('sbsjxxForm').getValue("syslblsljljy");
        xse = $w('sbsjxxForm').getValue("xsejljy");
    } else if (zspmDm == "101020104") { // 卷烟（调拨价70元（不含增值税）/条以上（含70元），从量计算）
        sl = 30.0;
        xse = $w('sbsjxxForm').getValue("xssljljy");
    } else if (zspmDm == "101020102") { // 卷烟（70元以下/条，从价计算）
        sl = $w('sbsjxxForm').getValue("syslblslyljy");
        xse = $w('sbsjxxForm').getValue("xseyljy");
    } else if (zspmDm == "101020105") { // 卷烟（70元以下/条，从量计算）
        sl = 30.0;
        xse = $w('sbsjxxForm').getValue("xsslyljy");
    } else if (zspmDm == "101020107") { // 雪茄烟
        sl = $w('sbsjxxForm').getValue("syslblslxjy");
        xse = $w('sbsjxxForm').getValue("xsexjy");
    } else if (zspmDm == "101020108") { // 烟丝
        sl = $w('sbsjxxForm').getValue("syslblslys");
        xse = $w('sbsjxxForm').getValue("xseys");
    } else if (zspmDm == "101020106") { // 卷烟批发从价
        var xse1 = $w('sbsjxxForm').getValue("xsejy");
        var xse2 = $w('sbsjxxForm').getValue("xsejy2");
        xse = (parseFloat(xse1) / 1).accAdd(parseFloat(xse2) / 1).round(2);
        ynse = (parseFloat(xse1) / 1).multiple(0.05).accAdd((parseFloat(xse2) / 1).multiple(0.11)).round(2);
    } else if (zspmDm == "101020109") { // 卷烟批发从量
        xse = $w('sbsjxxForm').getValue("xssljy2");
        ynse = (parseFloat(xse) / 1).multiple(50.0).round(2);
    } else if (zspmDm == "101020201") { // 粮食白酒（从价计算）
        sl = $w('sbsjxxForm').getValue("syslblsllsbj");
        xse = $w('sbsjxxForm').getValue("xselsbj");
    } else if (zspmDm == "101020202") { // 粮食白酒（从量计算）
        sl = 0.5;
        xse = $w('sbsjxxForm').getValue("xssllsbj");
    } else if (zspmDm == "101020203") { // 薯类白酒（从价计算）
        sl = $w('sbsjxxForm').getValue("syslblslslbj");
        xse = $w('sbsjxxForm').getValue("xseslbj");
    } else if (zspmDm == "101020204") { // 薯类白酒（从量计算）
        sl = 0.5;
        xse = $w('sbsjxxForm').getValue("xsslslbj");
    } else if (zspmDm == "101020205") { // 黄酒
        sl = 240.0;
        xse = $w('sbsjxxForm').getValue("xsslhj");
    } else if (zspmDm == "101020206") { // 啤酒（3000元/吨以上）
        sl = 250.0;
        xse = $w('sbsjxxForm').getValue("xssljlpj");
    } else if (zspmDm == "101020207") { // 啤酒（3000元/吨以下）
        sl = 220.0;
        xse = $w('sbsjxxForm').getValue("xsslylpj");
    } else if (zspmDm == "101020299") { // 其他酒
        sl = $w('sbsjxxForm').getValue("syslblslqtj");
        xse = $w('sbsjxxForm').getValue("xseqtj");
    } else if (zspmDm == "101020901") { // 1.0升（含）以下的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg1");
        ynse = $w('sbsjxxForm').getValue("ynseqg1");
    } else if (zspmDm == "101020902") { // 1.0升以上至1.5升(含)的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg2");
        ynse = $w('sbsjxxForm').getValue("ynseqg2");
    } else if (zspmDm == "101020903") { // 1.5升以上至2.0升(含)的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg3");
        ynse = $w('sbsjxxForm').getValue("ynseqg3");
    } else if (zspmDm == "101020904") { // 2.0升以上至2.5升(含)的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg4");
        ynse = $w('sbsjxxForm').getValue("ynseqg4");
    } else if (zspmDm == "101020905") { // 2.5升以上至3.0升(含)的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg5");
        ynse = $w('sbsjxxForm').getValue("ynseqg5");
    } else if (zspmDm == "101020906") { // 3.0升以上至4.0升(含)的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg6");
        ynse = $w('sbsjxxForm').getValue("ynseqg6");
    } else if (zspmDm == "101020907") { // 4.0升以上的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg7");
        ynse = $w('sbsjxxForm').getValue("ynseqg7");
    } else if (zspmDm == "101021000") { // 中轻型商用客车
        xse = $w('sbsjxxForm').getValue("xsezxsykc");
        ynse = $w('sbsjxxForm').getValue("ynsezxsykc");
    } else if (zspmDm == "101021601") { // 电池（不含铅蓄电池）
        xse = $w('sbsjxxForm').getValue("xsedc1");
        ynse = $w('sbsjxxForm').getValue("ynsedc1");
        // jmse = $w('sbsjxxForm').getValue("bqjse");
        // //减免税额（目前只有一个品目享受减免，所以直接取主表的）
    } else if (zspmDm == "101021699") { // 铅蓄电池
        xse = $w('sbsjxxForm').getValue("xsedc2");
        ynse = $w('sbsjxxForm').getValue("ynsedc2"); // 铅蓄电池不收消费税
    } else if (zspmDm == "101021700") { // 涂料
        xse = $w('sbsjxxForm').getValue("xsetl");
        ynse = $w('sbsjxxForm').getValue("ynsetl");
        ynseHj = ynse; // 应纳税额合计
    }

    // 获取成品油和其他的销售额、应纳税额、应纳税额合计
    if (sbblx == "04") { // 成品油
        var cpyGridData = $w("sbsjxxcpyGrid").getAllGridData();
        var cpyGridLength = cpyGridData.trs.length;
        for (var i = 0; i < cpyGridLength; i++) {
            var zspmDm_zb = cpyGridData.trs[i].tds.zspmDm.value;
            if (zspmDm_zb == zspmDm) {
                xse = cpyGridData.trs[i].tds.xssl.value;
                ynse = cpyGridData.trs[i].tds.ynse.value;
                break;
            }
        }
        ynseHj = $w('sbsjxxcpyGrid').getHj("ynse").round(2); // 应纳税额合计
    } else if (sbblx == "06") { // 其他
        var qtGridData = $w("sbsjxxqtGrid").getAllGridData();
        var qtGridLength = qtGridData.trs.length;
        for (var i = 0; i < qtGridLength; i++) {
            var zspmDm_zb = qtGridData.trs[i].tds.zspmDm.value;
            if (zspmDm_zb == zspmDm) {
                xse = qtGridData.trs[i].tds.xse.value;
                ynse = qtGridData.trs[i].tds.ynse.value;
                break;
            }
        }
        ynseHj = $w('sbsjxxqtGrid').getHj("ynse").round(2); // 应纳税额合计
        // 获取扣除税额：4、6取自附表，其余取自主表分摊
    }
    // 获取应纳税额合计
    if (sbblx == "01") {
        ynseHj = $w('sbsjxxForm').getValue("ynsehj1");
        ynse = (parseFloat(sl) / 1).multiple(parseFloat(xse) / 1).round(2); // 获取应纳税额，烟类、酒类要按销售额和税率计算
    } else if (sbblx == "02") {
        ynseHj = $w('sbsjxxForm').getValue("ynsehj2");
    } else if (sbblx == "03") {
        ynseHj = $w('sbsjxxForm').getValue("ynsehj3");
        ynse = (parseFloat(sl) / 1).multiple(parseFloat(xse) / 1).round(2); // 获取应纳税额，烟类、酒类要按销售额和税率计算
    } else if (sbblx == "05") {
        ynseHj = $w('sbsjxxForm').getValue("ynsehj5");
    } else if (sbblx == "07") {
        ynseHj = $w('sbsjxxForm').getValue("ynsehj7");
    }

    // 获取减免税额
    var jmGridData = sb001_fbData["sbsjxx1_5Grid"];
    if ($chk(jmGridData) && $chk(jmGridData.trs)) {
        for (var j = 0; j < jmGridData.trs.length; j++) {
            if (zspmDm == jmGridData.trs[j].tds.zspmDm.value) {
                var jmmx = jmGridData.trs[j].tds.bqjmse.value;
                jmse = jmse.accAdd(parseFloat(jmmx) / 1);
            }
        }
    }

    // 按比例分摊预缴税额
    var bqyjse = $w('sbsjxxForm').getValue("bqyjse"); // 预缴合计
    var jmHj = $w('sbsjxxForm').getValue("bqjse"); // 减免税额合计
    var ybtseHj = $w('sbsjxxForm').getValue("bqybtse"); // 获取应补退税额合计
    var yn_jm = (parseFloat(ynse) / 1).subtract(parseFloat(jmse) / 1); // 应纳-减免
    var ynHj_jmHj = (parseFloat(ynseHj) / 1).subtract(parseFloat(jmHj) / 1); // 应纳合计-减免合计
    var bl = yn_jm.divide(ynHj_jmHj); // 比例
    var yjse = (parseFloat(bqyjse) / 1).multiple(bl); // 预缴税额：按应纳税额比例分摊
    var ybtse = (parseFloat(ybtseHj) / 1).multiple(bl); // 应补退税额：按应纳税额比例分摊

    ysxfpxmList.tds.ynse.value = ((parseFloat(ybtse) / 1).accAdd(parseFloat(yjse) / 1));
    ysxfpxmList.tds.yjse.value = (parseFloat(yjse) / 1);
    // ysxfpxmList.tds.ynse.value = ((parseFloat(ybtse) / 1).accAdd(parseFloat(yjse)
    // / 1)).round(2);
    // ysxfpxmList.tds.yjse.value = (parseFloat(yjse) / 1).round(2);
}


// add by fanyl 20150627 附加税相关修改：增加跳转附加税界面
function saveSubmit2() {
    var isChange = false;
    sb001_gridDatafjs = ""; // 每次保存时先清空附加税数据，防止申报表类型切换时，无附加税的主税保存时还会保存附加税的情况

    var zsAndFjsArray = new Array();
    for (var i = 0; i < sb001_sbxxXfsFjsList.trs.length; i++) {
        var zspmDm = sb001_sbxxXfsFjsList.trs[i].tds.zspmDm.value;
        if (checkZspmSfpp(zspmDm)) {
            zsAndFjsArray.push(sb001_sbxxXfsFjsList.trs[i]); // 添加主税
            var rdpzuuid = sb001_sbxxXfsFjsList.trs[i].tds.rdpzuuid.value;
            for (var j = 0; j < sb001_sbxxXfsFjsList.trs.length; j++) {
                if (rdpzuuid == sb001_sbxxXfsFjsList.trs[j].tds.rdzsuuid.value) {
                    zsAndFjsArray.push(sb001_sbxxXfsFjsList.trs[j]); // 添加附加税
                }
            }
        }
    }
    sb001_sbxxXfsFjsList.trs = zsAndFjsArray;

    // 判断是否存在附加税
    for (var i = 0; i < zsAndFjsArray.length; i++) {
        var rdzsuuid = zsAndFjsArray[i].tds.rdzsuuid.value;
        if (rdzsuuid != '' && rdzsuuid != '0') {
            isChange = true;
            break;
        }
    }

    // 如果存在附加税
    if (isChange) {
        // 1.设置每条主税的计税依据、应纳税额、应补退税额
        for (var i = 0; i < zsAndFjsArray.length; i++) {
            if (zsAndFjsArray[i].tds.zsxmDm.value == '10102') { // 主税
                var zspmDm = zsAndFjsArray[i].tds.zspmDm.value;
                setFjsValue(zsAndFjsArray[i], zspmDm); // 根据每个品目的应纳和总应纳合计的比例，算出每个品目的应补退
            }
        }
        // 2.处理应补退差额（由于上面的按比例折算，小数舍入时可能存在差额的问题，如果有，将差额加到第一条明细上。）

        var ybtseHj = 0.0; // 应补退合计
        var ynseHj = 0.0 // 应纳税额合计
        for (var i = 0; i < zsAndFjsArray.length; i++) {
            if (zsAndFjsArray[i].tds.zsxmDm.value == '10102') { // 主税
                ybtseHj = (parseFloat(zsAndFjsArray[i].tds.ybtse.value) / 1).accAdd(ybtseHj);
                ynseHj = (parseFloat(zsAndFjsArray[i].tds.ynse.value) / 1).accAdd(ynseHj);
            }
        }
        // 处理本期应补退四舍五入差额
        var bqybtse = $w('sbsjxxForm').getValue("bqybtse"); // 本期应补退
        var ybtce = (parseFloat(bqybtse) / 1).subtract(parseFloat(ybtseHj) / 1); // 应补退差额
        zsAndFjsArray[0].tds.ybtse.value = ((parseFloat(zsAndFjsArray[0].tds.ybtse.value) / 1).accAdd(parseFloat(ybtce) / 1)).round(2);
        // 处理应纳税额四舍五入差额
        var yyjje = $w('sbsjxxForm').getValue("bqyjse"); // 已预缴税额，当双定户申报时此字段=已缴+预缴
        var yijiaoje = $w('sbsjxxForm').getValue("yijiaoje"); // 已缴金额，双定户申报时此字段可能有值，其他情况此字段为空
        var bqyjse = (parseFloat(yyjje) / 1).subtract(parseFloat(yijiaoje) / 1); // 本期预缴税额
        var bqynse = (parseFloat(bqybtse) / 1).accAdd(parseFloat(bqyjse) / 1); // 本期应纳税额合计：本期应补退+本期预缴
        var ynce = bqynse.subtract(ynseHj);
        zsAndFjsArray[0].tds.ynse.value = ((parseFloat(zsAndFjsArray[0].tds.ynse.value) / 1).accAdd(parseFloat(ynce) / 1)).round(2);

        // 3.打开附加税申报窗口
        fjssbopenTab(sb001_sbxxXfsFjsList, gt3.djxh, 'N', 'sbxxXfsFjsList');
    } else {
        saveSubmit3();
    }
}

// 附加税grid点击保存时执行的回调函数
function TheMainPage(data) {
    var flag = data.flag.value;
    if (flag == 1) {
        var gridName = data.gridName.value;
        var gridData = data.gridData.value;
        sb001_gridDatafjs = gridData;
    }
    $('table00').setStyle('display', '');
    $('table66').setStyle('display', 'none');
    saveSubmit3();
}

// 判断品目与申报表类型是否匹配
function checkZspmSfpp(zspmDm) {
    var sbblx = $w('sbsjxxForm').getValue('sbblx').code;
    var bz = false;
    if (!$chk(zspmDm)) {
        return bz;
    }
    if ("01" == sbblx) { // 卷烟
        if (zspmDm == "101020101" || zspmDm == "101020102" || zspmDm == "101020104" ||
        		zspmDm == "101020105" || zspmDm == "101020107" || zspmDm == "101020108") {
            bz = true;
        }
    } else if ("02" == sbblx) { // 卷烟批发
        if (zspmDm == "101020106" || zspmDm == "101020109") {
            bz = true;
        }
    } else if ("03" == sbblx) { // 酒类
        if (zspmDm == "101020201" || zspmDm == "101020202" || zspmDm == "101020203" ||
        		zspmDm == "101020204" || zspmDm == "101020205" || zspmDm == "101020206" ||
        		zspmDm == "101020207" || zspmDm == "101020299") {
            bz = true;
        }
    } else if ("04" == sbblx) { // 成品油
        if (zspmDm == "101020603" || zspmDm == "101020604" || zspmDm == "101020605" ||
        		zspmDm == "101020606" || zspmDm == "101020607" || zspmDm == "101020608" ||
        		zspmDm == "101020609") {
            bz = true;
        }
    } else if ("06" == sbblx) { // 其他
        if (zspmDm == "101020300" || zspmDm == "101020401" || zspmDm == "101020499" ||
        		zspmDm == "101020500" || zspmDm == "101020801" || zspmDm == "101020802" ||
        		zspmDm == "101020803" || zspmDm == "101021100" || zspmDm == "101021200" ||
        		zspmDm == "101021300" || zspmDm == "101021400" || zspmDm == "101021500" ||
        		zspmDm == "101021800" || zspmDm == "101021901" || zspmDm == "101021902") {
            bz = true;
        }
    } else if ("05" == sbblx) { // 小汽车
        if (zspmDm == "101020901" || zspmDm == "101020902" || zspmDm == "101020903" ||
        		zspmDm == "101020904" || zspmDm == "101020905" || zspmDm == "101020906" ||
        		zspmDm == "101020907" || zspmDm == "101021000") {
            bz = true;
        }
    } else if ("07" == sbblx) { // 电池
        if (zspmDm == "101021601" || zspmDm == "101021699") {
            bz = true;
        }
    } else if ("08" == sbblx) { // 涂料
        if (zspmDm == "101021700") {
            bz = true;
        }
    }
    return bz;
}

// 计算附加税计税依据，并赋值给附加税公共List
function setFjsValue(xfsFjsList, zspmDm) {
    if (!$chk(zspmDm)) {
        return;
    }
    var sl = xse = ynse = ynseHj = ybtseHj = kcse = jmse = 0.0;
    var sbblx = $w('sbsjxxForm').getValue('sbblx').code; // 申报表类型

    if (zspmDm == "101020101") { // 卷烟（调拨价70元（不含增值税）/条以上（含70元），从价计算）
        sl = $w('sbsjxxForm').getValue("syslblsljljy");
        xse = $w('sbsjxxForm').getValue("xsejljy");
    } else if (zspmDm == "101020104") { // 卷烟（调拨价70元（不含增值税）/条以上（含70元），从量计算）
        sl = 30.0;
        xse = $w('sbsjxxForm').getValue("xssljljy");
    } else if (zspmDm == "101020102") { // 卷烟（70元以下/条，从价计算）
        sl = $w('sbsjxxForm').getValue("syslblslyljy");
        xse = $w('sbsjxxForm').getValue("xseyljy");
    } else if (zspmDm == "101020105") { // 卷烟（70元以下/条，从量计算）
        sl = 30.0;
        xse = $w('sbsjxxForm').getValue("xsslyljy");
    } else if (zspmDm == "101020107") { // 雪茄烟
        sl = $w('sbsjxxForm').getValue("syslblslxjy");
        xse = $w('sbsjxxForm').getValue("xsexjy");
    } else if (zspmDm == "101020108") { // 烟丝
        sl = $w('sbsjxxForm').getValue("syslblslys");
        xse = $w('sbsjxxForm').getValue("xseys");
    } else if (zspmDm == "101020106") { // 卷烟批发从价
        var xse1 = $w('sbsjxxForm').getValue("xsejy");
        var xse2 = $w('sbsjxxForm').getValue("xsejy2");
        xse = (parseFloat(xse1) / 1).accAdd(parseFloat(xse2) / 1).round(2);
        ynse = (parseFloat(xse1) / 1).multiple(0.05).accAdd((parseFloat(xse2) / 1).multiple(0.11)).round(2);
    } else if (zspmDm == "101020109") { // 卷烟批发从量
        xse = $w('sbsjxxForm').getValue("xssljy2");
        ynse = (parseFloat(xse) / 1).multiple(50.0).round(2);
    } else if (zspmDm == "101020201") { // 粮食白酒（从价计算）
        sl = $w('sbsjxxForm').getValue("syslblsllsbj");
        xse = $w('sbsjxxForm').getValue("xselsbj");
    } else if (zspmDm == "101020202") { // 粮食白酒（从量计算）
        sl = 0.5;
        xse = $w('sbsjxxForm').getValue("xssllsbj");
    } else if (zspmDm == "101020203") { // 薯类白酒（从价计算）
        sl = $w('sbsjxxForm').getValue("syslblslslbj");
        xse = $w('sbsjxxForm').getValue("xseslbj");
    } else if (zspmDm == "101020204") { // 薯类白酒（从量计算）
        sl = 0.5;
        xse = $w('sbsjxxForm').getValue("xsslslbj");
    } else if (zspmDm == "101020205") { // 黄酒
        sl = 240.0;
        xse = $w('sbsjxxForm').getValue("xsslhj");
    } else if (zspmDm == "101020206") { // 啤酒（3000元/吨以上）
        sl = 250.0;
        xse = $w('sbsjxxForm').getValue("xssljlpj");
    } else if (zspmDm == "101020207") { // 啤酒（3000元/吨以下）
        sl = 220.0;
        xse = $w('sbsjxxForm').getValue("xsslylpj");
    } else if (zspmDm == "101020299") { // 其他酒
        sl = $w('sbsjxxForm').getValue("syslblslqtj");
        xse = $w('sbsjxxForm').getValue("xseqtj");
    } else if (zspmDm == "101020901") { // 1.0升（含）以下的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg1");
        ynse = $w('sbsjxxForm').getValue("ynseqg1");
    } else if (zspmDm == "101020902") { // 1.0升以上至1.5升(含)的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg2");
        ynse = $w('sbsjxxForm').getValue("ynseqg2");
    } else if (zspmDm == "101020903") { // 1.5升以上至2.0升(含)的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg3");
        ynse = $w('sbsjxxForm').getValue("ynseqg3");
    } else if (zspmDm == "101020904") { // 2.0升以上至2.5升(含)的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg4");
        ynse = $w('sbsjxxForm').getValue("ynseqg4");
    } else if (zspmDm == "101020905") { // 2.5升以上至3.0升(含)的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg5");
        ynse = $w('sbsjxxForm').getValue("ynseqg5");
    } else if (zspmDm == "101020906") { // 3.0升以上至4.0升(含)的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg6");
        ynse = $w('sbsjxxForm').getValue("ynseqg6");
    } else if (zspmDm == "101020907") { // 4.0升以上的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg7");
        ynse = $w('sbsjxxForm').getValue("ynseqg7");
    } else if (zspmDm == "101021000") { // 中轻型商用客车
        xse = $w('sbsjxxForm').getValue("xsezxsykc");
        ynse = $w('sbsjxxForm').getValue("ynsezxsykc");
    } else if (zspmDm == "101021601") { // 电池（不含铅蓄电池）
        xse = $w('sbsjxxForm').getValue("xsedc1");
        ynse = $w('sbsjxxForm').getValue("ynsedc1");
        // jmse = $w('sbsjxxForm').getValue("bqjse");
        // //减免税额（目前只有一个品目享受减免，所以直接取主表的）
    } else if (zspmDm == "101021699") { // 铅蓄电池
        xse = $w('sbsjxxForm').getValue("xsedc2");
        // ynse = $w('sbsjxxForm').getValue("ynsedc2");
        ynse = $w('sbsjxxForm').getValue("ynsedc2"); // 铅蓄电池不收消费税
        // jmse = 0.0; //铅蓄电池无减免
    } else if (zspmDm == "101021700") { // 涂料
        xse = $w('sbsjxxForm').getValue("xsetl");
        ynse = $w('sbsjxxForm').getValue("ynsetl");
        ynseHj = ynse; // 应纳税额合计
        // jmse = $w('sbsjxxForm').getValue("bqjse"); //减免税额
    }

    // 获取成品油和其他的销售额、应纳税额、应纳税额合计
    if (sbblx == "04") { // 成品油
        var cpyGridData = $w("sbsjxxcpyGrid").getAllGridData();
        var cpyGridLength = cpyGridData.trs.length;
        for (var i = 0; i < cpyGridLength; i++) {
            var zspmDm_zb = cpyGridData.trs[i].tds.zspmDm.value;
            if (zspmDm_zb == zspmDm) {
                xse = cpyGridData.trs[i].tds.xssl.value;
                ynse = cpyGridData.trs[i].tds.ynse.value;
                break;
            }
        }
        ynseHj = $w('sbsjxxcpyGrid').getHj("ynse").round(2); // 应纳税额合计
        // 获取扣除税额：4、6取自附表，其余取自主表分摊
        var fb4_1 = sb001_fbData["sbsjxx4_1Form"];
        if ($chk(fb4_1) && $chk(fb4_1.data)) {
            if (zspmDm == "101020605") {// 石脑油
                kcse = fb4_1.data.bqzykcskhjsny.value;
            } else if (zspmDm == "101020603") {// 柴油
                kcse = fb4_1.data.bqzykcskhjcy.value;
            } else if (zspmDm == "101020609") {// 汽油
                kcse = fb4_1.data.bqzykcskhjqy.value;
            } else if (zspmDm == "101020608") {// 燃料油
                kcse = fb4_1.data.bqzykcskhjrly.value;
            } else if (zspmDm == "101020607") {// 润滑油
                kcse = fb4_1.data.bqzykcskhjrhy.value;
            }
        }
        // 获取减免税额：4、7、8取自附表，其余取自主表分摊
        // var jmGridData = sb001_fbData["sbsjxx4_2Grid"];
        // if ($chk(jmGridData) && $chk(jmGridData.trs)) {
        // for (var j = 0; j < jmGridData.trs.length; j++) {
        // if (zspmDm == jmGridData.trs[j].tds.zspmDm.value) {
        // jmse = jmGridData.trs[j].tds.bqjmse.value;
        // break;
        // }
        // }
        // }
    } else if (sbblx == "06") { // 其他
        var qtGridData = $w("sbsjxxqtGrid").getAllGridData();
        var qtGridLength = qtGridData.trs.length;
        for (var i = 0; i < qtGridLength; i++) {
            var zspmDm_zb = qtGridData.trs[i].tds.zspmDm.value;
            if (zspmDm_zb == zspmDm) {
                xse = qtGridData.trs[i].tds.xse.value;
                ynse = qtGridData.trs[i].tds.ynse.value;
                break;
            }
        }
        ynseHj = $w('sbsjxxqtGrid').getHj("ynse").round(2); // 应纳税额合计
        // 获取扣除税额：4、6取自附表，其余取自主表分摊
        var num = 0;
        var fb6_1 = sb001_fbData["sbsjxx6_1Form"];
        if ($chk(fb6_1) && $chk(fb6_1.data)) {
            for (var j = 0; j < 8; j++) {
                num = j + 1;
                if ($chk(eval("fb6_1.data.qt" + num))) {
                    eval("var zspmDm_fb = fb6_1.data.qt" + num + ".value");
                    if (zspmDm_fb == zspmDm) {
                        if ($chk(eval("fb6_1.data.bqzykcskhjqt" + num))) {
                            eval("kcse = fb6_1.data.bqzykcskhjqt" + num + ".value");
                            break;
                        }
                    }
                }
            }
        }
    }
    // 获取应纳税额合计
    if (sbblx == "01") {
        ynseHj = $w('sbsjxxForm').getValue("ynsehj1");
        ynse = (parseFloat(sl) / 1).multiple(parseFloat(xse) / 1).round(2); // 获取应纳税额，烟类、酒类要按销售额和税率计算
    } else if (sbblx == "02") {
        ynseHj = $w('sbsjxxForm').getValue("ynsehj2");
    } else if (sbblx == "03") {
        ynseHj = $w('sbsjxxForm').getValue("ynsehj3");
        ynse = (parseFloat(sl) / 1).multiple(parseFloat(xse) / 1).round(2); // 获取应纳税额，烟类、酒类要按销售额和税率计算
    } else if (sbblx == "05") {
        ynseHj = $w('sbsjxxForm').getValue("ynsehj5");
    } else if (sbblx == "07") {
        ynseHj = $w('sbsjxxForm').getValue("ynsehj7");
        // 获取减免税额：4、7、8取自附表，其余取自主表分摊
        // 目前减免计算表里没有铅蓄电池的品目，等需求变更后要在这里取附表的值
        // jmse = $w('sbsjxxForm').getValue("bqjse");
        // //减免税额（目前只有一个品目享受减免，所以直接取主表的）
    }
    // 获取应补退税额合计
    ybtseHj = $w('sbsjxxForm').getValue("bqybtse");

    // 获取减免税额
    var jmGridData = sb001_fbData["sbsjxx1_5Grid"];
    if ($chk(jmGridData) && $chk(jmGridData.trs)) {
        for (var j = 0; j < jmGridData.trs.length; j++) {
            if (zspmDm == jmGridData.trs[j].tds.zspmDm.value) {
                var jmmx = jmGridData.trs[j].tds.bqjmse.value;
                jmse = jmse.accAdd(parseFloat(jmmx) / 1);
                // break;
            }
        }
    }
    // 如果是双定户申报的情况，如果双定户此前已经批扣过，则本次申报的附加税计税依据应减掉批扣过的那部分
    if ($chk(sb001_dqdexx) && sb001_dqdexx.trs.length > 0) {
        for (var i = 0; i < sb001_dqdexx.trs.length; i++) {
            var zspmDm1 = sb001_dqdexx.trs[i].tds.zspmDm.value;
            var ypkje = sb001_dqdexx.trs[i].tds.yjse.value; // 已批扣金额
            if (zspmDm == zspmDm1 && ypkje > 0) {
                var jsjy1 = sb001_dqdexx.trs[i].tds.jsyj.value; // 定期定额计税依据
                var hdse = sb001_dqdexx.trs[i].tds.hdse.value; // 定期定额核定税额
                xse = (parseFloat(xse) / 1).subtract(parseFloat(jsjy1) / 1); // 销售额要减掉批扣时的销售额
                ynse = (parseFloat(ynse) / 1).subtract(parseFloat(hdse) / 1); // 应纳税额要减掉批扣时的核定税额
            }
        }
    }

    // 获取扣除税额：4、6取自附表，其余取自主表分摊
    if (sbblx != "04" && sbblx != "06") {
        var kcseHj = $w('sbsjxxForm').getValue("bqzykcse"); // 扣除税额合计
        var jmHj = $w('sbsjxxForm').getValue("bqjse"); // 减免税额合计
        var yn_jm = (parseFloat(ynse) / 1).subtract(parseFloat(jmse) / 1); // 应纳-减免
        var ynHj_jmHj = (parseFloat(ynseHj) / 1).subtract(parseFloat(jmHj) / 1); // 应纳合计-减免合计
        var bl = yn_jm.divide(ynHj_jmHj); // 比例
        kcse = (kcseHj.multiple(bl)).round(2); // 扣除税额：按应纳税额比例分摊
    }

    var fbjsyj = ((parseFloat(ynse) / 1).subtract((parseFloat(jmse) / 1)).subtract((parseFloat(kcse) / 1))).round(2); // 附表计税依据：应纳税额减掉减免和扣除以后的
    xfsFjsList.tds.jsyj.value = (parseFloat(xse) / 1).round(2);
    xfsFjsList.tds.ynse.value = (parseFloat(fbjsyj) / 1).round(2);
    xfsFjsList.tds.ybtse.value = ((parseFloat(ynse) / 1).multiple(parseFloat(ybtseHj) / 1).divide(parseFloat(ynseHj) / 1)).round(2);
}

// 保存提交
function saveSubmit3(zcbz) {
    var ysxfpxmList = getYsxfpxmList();

    var sbsjxxGrid = {
        'sword': 'SwordGrid',
        'name': 'sbsjxxGrid',
        'trs': ysxfpxmList
    };

    /*
	 * var sbsjxxForm001 = { 'sword' : 'SwordForm', 'name' : 'qcsForm', 'data' :
	 * sbsjxx001 || {} };
	 */

    var saveBtn = new SwordSubmit();

    var djxh = gt3.djxh;
    saveBtn.pushData('djxh', djxh);
    saveBtn.pushData('zxbztzsuuid', gt3.zxbztzsuuid);

    if (sb001_sbcwgzmap != null) {
        saveBtn.pushData(sb001_sbcwgzmap);
    }

    saveBtn.pushData($w("sbsjxxForm").getSubmitData());
    saveBtn.pushData(sb001_gridDatafjs); // add by fanyl 20150627
    // 附加税相关修改：保存时将附加税grid传回后台
    saveBtn.pushData('zfjgBz', zfjgBz); // add by fanyl 20150908 保存时将总分机构标志传回后台

    var sbblxcode = sbsjxxForm.getValue('sbblx').code;
    if (sbblxcode == '04') {
        saveBtn.pushData($w("sbsjxxcpyGrid").getAllGridData());
    }
    if (sbblxcode == '06') {
        saveBtn.pushData($w("sbsjxxqtGrid").getAllGridData());
    }

    saveBtn.pushData($w("nsrxxForm").getSubmitData());
    saveBtn.pushData($w("slxxForm").getSubmitData());

    for (var tmpName in sb001_fbData) {
        if ($chk(sb001_fbData[tmpName])) {
            saveBtn.pushData(sb001_fbData[tmpName]);
        }
    }
    // for ( var key in fbXMLData) {
    // saveBtn.pushData(fbXMLData[key].value);
    // }

    saveBtn.pushData(sbsjxxGrid);

    // saveBtn.pushData(sbsjxxForm001);

    saveBtn.pushData('jmxxGrid', JSON.encode(sb001_jmxxforSave));

    saveBtn.setCtrl(ctrl + "_saveXfssbxx");
    saveBtn.setFunction('onSuccess', 'saveOnSuccess');
    if (zcbz == 'Y') {
        //暂存逻辑直接返回提交对象
        return saveBtn;
    }
    saveBtn.submit();

}

function saveOnSuccess(req, resData) {
    //作废暂存
    var yzpzzldm = tempsave_zdy_getYzpzzldm();
    if (yzpzzldm) {
        tempsave_invalid(yzpzzldm, $w("nsrxxForm").getValue('skssqq'), $w("nsrxxForm").getValue('skssqz'));
    }

    $w('sbToolBar').setDisabled('save');
    tempsave_disable("sbToolBar");

    // afterSaveSuc(resData); 此处要考虑是否跳转征收开票，尚未实现，后续统一处理
    var sbsaveReturnVO = pc.getResData("sbsaveReturnVO", resData);
    var returnBz = sbsaveReturnVO.data.returnBz.value;
    // if (returnBz == "Y") {
    // var pzxh = sbsaveReturnVO.data.pzxh.value;
    // var ybtse = sbsaveReturnVO.data.ybtse.value;
    // swordAlertRight("保存成功，当前纳税人申报凭证序号为： " + pzxh + " ,应缴纳税款为：" + ybtse + "
    // 元。");
    // }
    if (returnBz == "Y") {
        var pzxh = sbsaveReturnVO.data.pzxh.value;
        var ybtse = sbsaveReturnVO.data.ybtse.value;
        var djxh = gt3.djxh;
        if (!$chk(sbcwgzFlag)) {
            // 电子档案
            var swjgDm = pc.getResData("swjgDm", resData).value;
            var nsrxxFrom = $w("nsrxxForm");
            var flzlGridData = $w('flzlGrid').getCheckedData("check");
            saveSxslxx(pzxh, djxh, nsrxxFrom.getValue("nsrsbh"), nsrxxFrom.getValue("nsrmc"), "SLSXA061001032", "LCSXA061001031", swjgDm, flzlGridData);
        }
        fromYbSBJumpZskp(pzxh, ybtse, djxh, resData);
    }
}
function notJumpZskp($_saveResData) {

}

function changeFormula1() {
    gs_gjj = [
			// 主表1申报明细-按税率
			"{sbsjxxForm_ynsejljy}={sbsjxxForm_syslblsljljy}*{sbsjxxForm_xsejljy}+({sbsjxxForm_xssljljy}*(30))",
			"{sbsjxxForm_ynseyljy}={sbsjxxForm_syslblslyljy}*{sbsjxxForm_xseyljy}+({sbsjxxForm_xsslyljy}*(30))",
			"{sbsjxxForm_ynsexjy}={sbsjxxForm_syslblslxjy}*{sbsjxxForm_xsexjy}",
			"{sbsjxxForm_ynseys}={sbsjxxForm_syslblslys}*{sbsjxxForm_xseys}",
			"{sbsjxxForm_ynsehj1}=(pf({sbsjxxForm_ynseyljy}))+(pf({sbsjxxForm_ynseys}))+(pf({sbsjxxForm_ynsexjy}))+(pf({sbsjxxForm_ynsejljy}))",


			// (pf({sbsjxxForm_ynseqg1}))+(pf({sbsjxxForm_ynseqg2}))+(pf({sbsjxxForm_ynseqg3}))+(pf({sbsjxxForm_ynseqg4}))+(pf({sbsjxxForm_ynseqg5}))+(pf({sbsjxxForm_ynseqg6}))+(pf({sbsjxxForm_ynseqg7}))+(pf({sbsjxxForm_ynsezxsykc}))",



			"{sbsjxxForm_ynseheji}={sbsjxxForm_ynsehj1}",
			// 本期应补(退)税额
			"{sbsjxxForm_bqybtse}={sbsjxxForm_ynsehj1}-{sbsjxxForm_bqzykcse}-{sbsjxxForm_bqjse}-{sbsjxxForm_bqyjse}",
			// 期末未缴税额
			"{sbsjxxForm_qmwjse}={sbsjxxForm_qcwjse}+{sbsjxxForm_bqybtse}-{sbsjxxForm_bqjnqqynse}"

    ];
    // gs_caculate = thgs(gs_gjj);
    $init_gs_caculate();
}

function changeFormula2() {
    gs_gjj = [
			// 主表2申报明细
			// 第一行公式（老税率，不加征从量税）
			"{sbsjxxForm_ynsejy}={sbsjxxForm_sysljy}*{sbsjxxForm_xsejy}",
			// 第二行公式（新税率，加征从量税）
			"{sbsjxxForm_ynsejy2}={sbsjxxForm_sysljy2}*{sbsjxxForm_xsejy2}+({sbsjxxForm_sysldeslyljypf2}*{sbsjxxForm_xssljy2})",
			// 合计公式
			"{sbsjxxForm_xsehj2}={sbsjxxForm_xsejy}+{sbsjxxForm_xsejy2}",
			"{sbsjxxForm_ynsehj2}=pf({sbsjxxForm_ynsejy})+(pf({sbsjxxForm_ynsejy2}))",
			"{sbsjxxForm_ynseheji}={sbsjxxForm_ynsehj2}",
			// 本期应补(退)税额
			"{sbsjxxForm_bqybtse}={sbsjxxForm_ynsehj2}-{sbsjxxForm_bqyjse}",
			// 期末未缴税额
			"{sbsjxxForm_qmwjse}={sbsjxxForm_qcwjse}+{sbsjxxForm_bqybtse}-{sbsjxxForm_bqjnqqynse}"];
    $init_gs_caculate();
}

function changeFormula3() {
    gs_gjj = [

			// 主表3申报明细-按税率,数量

			"{sbsjxxForm_ynselsbj}={sbsjxxForm_xselsbj}*{sbsjxxForm_syslblsllsbj}+({sbsjxxForm_xssllsbj}*(0.5))",
			"{sbsjxxForm_ynseslbj}={sbsjxxForm_syslblslslbj}*{sbsjxxForm_xseslbj}+({sbsjxxForm_xsslslbj}*(0.5))",
			"{sbsjxxForm_ynsejlpj}={sbsjxxForm_sysldesljlpj}*{sbsjxxForm_xssljlpj}",
			"{sbsjxxForm_ynseylpj}={sbsjxxForm_sysldeslylpj}*{sbsjxxForm_xsslylpj}",
			"{sbsjxxForm_ynsehj}={sbsjxxForm_sysldeslhj}*{sbsjxxForm_xsslhj}",
			"{sbsjxxForm_ynseqtj}={sbsjxxForm_syslblslqtj}*{sbsjxxForm_xseqtj}",
			// "{sbsjxxForm_ynsejj}={sbsjxxForm_syslblsljj}*{sbsjxxForm_xsejj}",
			"{sbsjxxForm_ynsehj3}=pf({sbsjxxForm_ynselsbj})+(pf({sbsjxxForm_ynseslbj}))+(pf({sbsjxxForm_ynsejlpj}))+(pf({sbsjxxForm_ynseylpj}))+(pf({sbsjxxForm_ynsehj}))+(pf({sbsjxxForm_ynseqtj}))", // +{sbsjxxForm_ynsejj}",
			"{sbsjxxForm_ynseheji}={sbsjxxForm_ynsehj3}",

			// 本期应补(退)税额
			"{sbsjxxForm_bqybtse}={sbsjxxForm_ynsehj3}-{sbsjxxForm_bqzykcse}-{sbsjxxForm_bqjse}-{sbsjxxForm_bqyjse}",
			// 期末未缴税额
			"{sbsjxxForm_qmwjse}={sbsjxxForm_qcwjse}+{sbsjxxForm_bqybtse}-{sbsjxxForm_bqjnqqynse}"

    ];
    // gs_caculate = thgs(gs_gjj);
    $init_gs_caculate();
}

function changeFormula4() {
    gs_gjj = [
			// 主表4申报明细
			// "{sbsjxxForm_ynseqy}={sbsjxxForm_syslqy}*{sbsjxxForm_xsslqy}",
			// "{sbsjxxForm_ynsecy}={sbsjxxForm_syslcy}*{sbsjxxForm_xsslcy}",
			// "{sbsjxxForm_ynsesny}={sbsjxxForm_syslsny}*{sbsjxxForm_xsslsny}",
			// "{sbsjxxForm_ynserjy}={sbsjxxForm_syslrjy}*{sbsjxxForm_xsslrjy}",
			// "{sbsjxxForm_ynserhy}={sbsjxxForm_syslrhy}*{sbsjxxForm_xsslrhy}",
			// "{sbsjxxForm_ynserly}={sbsjxxForm_syslrly}*{sbsjxxForm_xsslrly}",
			// "{sbsjxxForm_ynsehkmy}={sbsjxxForm_syslhkmy}*{sbsjxxForm_xsslhkmy}",
			// "{sbsjxxForm_ynsehj4}={sbsjxxForm_ynseqy}+{sbsjxxForm_ynsecy}+{sbsjxxForm_ynsesny}+{sbsjxxForm_ynserjy}+{sbsjxxForm_ynserhy}+{sbsjxxForm_ynserly}+{sbsjxxForm_ynsehkmy}",
			// "{sbsjxxForm_ynseheji}={sbsjxxForm_ynsehj4}",

			// 本期应抵扣税额
			"{sbsjxxForm_bqydkse}={sbsjxxForm_qclqse}+{sbsjxxForm_bqzykcse}",
			// 期末留抵税额
			"{sbsjxxForm_qmldse}=IF(({sbsjxxForm_bqydkse}-{sbsjxxForm_ynsehj4}+{sbsjxxForm_bqjse})>0,{sbsjxxForm_bqydkse}-{sbsjxxForm_ynsehj4}+{sbsjxxForm_bqjse},0)",
			// 本期实际抵扣 税额
			"{sbsjxxForm_bqsjdkse}={sbsjxxForm_bqydkse}-{sbsjxxForm_qmldse}",
			// 本期应补(退)税额
			"{sbsjxxForm_bqybtse}={sbsjxxForm_ynsehj4}-{sbsjxxForm_bqsjdkse}-{sbsjxxForm_bqjse}-{sbsjxxForm_bqyjse}",
			// 期末未缴税额
			"{sbsjxxForm_qmwjse}={sbsjxxForm_qcwjse}+{sbsjxxForm_bqybtse}-{sbsjxxForm_bqjnqqynse}"

    ];
    // gs_caculate = thgs(gs_gjj);
    $init_gs_caculate();
}

function changeFormula5() {
    gs_gjj = [

			// 主表5申报明细
			"{sbsjxxForm_ynseqg1}={sbsjxxForm_syslqg1}*{sbsjxxForm_xseqg1}",
			"{sbsjxxForm_ynseqg2}={sbsjxxForm_syslqg2}*{sbsjxxForm_xseqg2}",
			"{sbsjxxForm_ynseqg3}={sbsjxxForm_syslqg3}*{sbsjxxForm_xseqg3}",
			"{sbsjxxForm_ynseqg4}={sbsjxxForm_syslqg4}*{sbsjxxForm_xseqg4}",
			"{sbsjxxForm_ynseqg5}={sbsjxxForm_syslqg5}*{sbsjxxForm_xseqg5}",
			"{sbsjxxForm_ynseqg6}={sbsjxxForm_syslqg6}*{sbsjxxForm_xseqg6}",
			"{sbsjxxForm_ynseqg7}={sbsjxxForm_syslqg7}*{sbsjxxForm_xseqg7}",
			"{sbsjxxForm_ynsezxsykc}={sbsjxxForm_syslzxsykc}*{sbsjxxForm_xsezxsykc}",
			"{sbsjxxForm_ynsehj5}=(pf({sbsjxxForm_ynseqg1}))+(pf({sbsjxxForm_ynseqg2}))+(pf({sbsjxxForm_ynseqg3}))+(pf({sbsjxxForm_ynseqg4}))+(pf({sbsjxxForm_ynseqg5}))+(pf({sbsjxxForm_ynseqg6}))+(pf({sbsjxxForm_ynseqg7}))+(pf({sbsjxxForm_ynsezxsykc}))",


			"{sbsjxxForm_ynseheji}={sbsjxxForm_ynsehj5}",

			// 本期应补(退)税额
			"{sbsjxxForm_bqybtse}={sbsjxxForm_ynsehj5}-{sbsjxxForm_bqzykcse}-{sbsjxxForm_bqjse}-{sbsjxxForm_bqyjse}",
			// 期末未缴税额
			"{sbsjxxForm_qmwjse}={sbsjxxForm_qcwjse}+{sbsjxxForm_bqybtse}-{sbsjxxForm_bqjnqqynse}"

    ];
    // gs_caculate = thgs(gs_gjj);
    $init_gs_caculate();
}

function changeFormula6() {
    gs_gjj = [

			// 本期应补(退)税额
			"{sbsjxxForm_bqybtse}={sbsjxxForm_ynsehj6}-{sbsjxxForm_bqzykcse}-{sbsjxxForm_bqjse}-{sbsjxxForm_bqyjse}",
			// 期末未缴税额
			"{sbsjxxForm_qmwjse}={sbsjxxForm_qcwjse}+{sbsjxxForm_bqybtse}-{sbsjxxForm_bqjnqqynse}"

    ];
    // gs_caculate = thgs(gs_gjj);
    $init_gs_caculate();
}

function changeFormula7() {
    gs_gjj = [

			// 主表5申报明细
			"{sbsjxxForm_ynsedc1}={sbsjxxForm_sysldc1}*{sbsjxxForm_xsedc1}",
			// "{sbsjxxForm_ynsedc2}={sbsjxxForm_sysldc2}*{sbsjxxForm_xsedc2}",
			"{sbsjxxForm_ynsehj7}=(pf({sbsjxxForm_ynsedc1}))+(pf({sbsjxxForm_ynsedc2}))",
			"{sbsjxxForm_ynseheji}={sbsjxxForm_ynsehj7}",

			// 本期应补(退)税额
			"{sbsjxxForm_bqybtse}={sbsjxxForm_ynsehj7}-{sbsjxxForm_bqzykcse}-{sbsjxxForm_bqjse}-{sbsjxxForm_bqyjse}",
			// 期末未缴税额
			"{sbsjxxForm_qmwjse}={sbsjxxForm_qcwjse}+{sbsjxxForm_bqybtse}-{sbsjxxForm_bqjnqqynse}"

    ];
    // gs_caculate = thgs(gs_gjj);
    $init_gs_caculate();
}

function changeFormula8() {
    gs_gjj = [


			// 主表5申报明细
			"{sbsjxxForm_ynsetl}= {sbsjxxForm_sysltl}*{sbsjxxForm_xsetl}",
			// "{sbsjxxForm_ynsehj8}={sbsjxxForm_ynsetl}",
			"{sbsjxxForm_ynseheji}=pf({sbsjxxForm_ynsetl})",

			// 本期应补(退)税额
			// "{sbsjxxForm_bqybtse}={sbsjxxForm_ynseheji}-{sbsjxxForm_bqzykcse}-{sbsjxxForm_bqjse}-{sbsjxxForm_bqyjse}",

			"{sbsjxxForm_bqybtse}=(pf({sbsjxxForm_ynseheji}))-{sbsjxxForm_bqzykcse}-{sbsjxxForm_bqjse}-{sbsjxxForm_bqyjse}",



			// 期末未缴税额
			"{sbsjxxForm_qmwjse}={sbsjxxForm_qcwjse}+{sbsjxxForm_bqybtse}-{sbsjxxForm_bqjnqqynse}"

    ];
    // gs_caculate = thgs(gs_gjj);
    $init_gs_caculate();
}

// 其他类grid公式计算
function jisuanQt(realvalue, showvalue, rowData, el, row, srcRealvalue) {
    if (rowData.getValue('sl1') != null && rowData.getValue('xse') != null
			&& rowData.getValue('sl1') < 1) {
        var grid1 = $w('sbsjxxqtGrid');// 表格对象
        // var cv1 = rowData.getValue('sl1') / 1 * (rowData.getValue('xse') /
        // 1);
        var cv1 = (rowData.getValue('sl1') / 1).multiple(rowData.getValue('xse') / 1);
        var zspmDm = rowData.getValue("zspmDm");
        var hdynse = 0;// 定期定额核定的应纳税额
        var xse = 0;// 定期定额核定的销售额

        if ($chk(sb001_dqdexx) && sb001_dqdexx.trs.length > 0) {
            for (var i = 0; i < sb001_dqdexx.trs.length; i++) {
                if (sb001_dqdexx.trs[i].tds.zspmDm.value == zspmDm) {
                    hdynse = sb001_dqdexx.trs[i].tds.ynse.value;
                    xse = sb001_dqdexx.trs[i].tds.jsyj.value;
                }
            }
        }
        if (cv1 < hdynse) {
            swordAlert("当前计算出的应纳税额" + cv1.round(2) + "小于核定应纳税额" + hdynse.round(2) + ",请修改后重试！");
            var data = {
                "tds": {
                    "xse": {
                        "value": xse
                    },
                    "ynse": {
                        "value": hdynse
                    }
                }
            };
            grid1.updateRow(row, data);
        } else {
            var d1 = {
                "tds": {
                    "ynse": {
                        "value": cv1.round(2)
                    }
                }
            };
            grid1.updateRow(row, d1);
        }

        $w("sbsjxxqtGrid").rereshHjRowData();
        var hjDiv = $w("sbsjxxqtGrid").hjRow;
        var cellArray = hjDiv.getElements("div");
        var ynseHJ = cellArray[4].get("realvalue");
        $w('sbsjxxForm').setValue('ynsehj6', ynseHJ);

        caculate("sbsjxxForm_ynsehj6");
        $w('sbsjxxForm').setValue('ynseheji', ynseHJ);
        $w('sbsjxxForm').getField('ynseheji').set('realvalue', ynseHJ);
    } else if (rowData.getValue('sl1') != null
			&& rowData.getValue('xssl') != null && rowData.getValue('sl1') >= 1) {
        var grid1 = $w('sbsjxxqtGrid');// 表格对象
        // var cv1 = rowData.getValue('sl1') / 1 * (rowData.getValue('xssl') /
        // 1);
        var cv1 = (rowData.getValue('sl1') / 1).multiple(rowData
				.getValue('xssl') / 1);
        var d1 = {
            "tds": {
                "ynse": {
                    "value": cv1.round(2)
                }
            }
        };
        grid1.updateRow(row, d1);
        $w("sbsjxxqtGrid").rereshHjRowData();
        var hjDiv = $w("sbsjxxqtGrid").hjRow;
        var cellArray = hjDiv.getElements("div");
        var ynseHJ = cellArray[4].get("realvalue");
        $w('sbsjxxForm').setValue('ynsehj6', ynseHJ);

        caculate("sbsjxxForm_ynsehj6");
        $w('sbsjxxForm').setValue('ynseheji', ynseHJ);
        $w('sbsjxxForm').getField('ynseheji').set('realvalue', ynseHJ);
    }
}

// 成品油grid公式计算
function jisuanCpy(realvalue, showvalue, rowData, el, row, srcRealvalue) {
    if (rowData.getValue('zspmDm') == '101020604') {
        // 航空煤油不计算应纳税额
        return;
    }
    if (rowData.getValue('sl1') != null && rowData.getValue('xssl') != null) {
        var grid1 = $w('sbsjxxcpyGrid');// 表格对象
        // var cv1 = rowData.getValue('sl1') / 1 * (rowData.getValue('xse') /
        // 1);
        var cv1 = (rowData.getValue('sl1') / 1).multiple(rowData.getValue('xssl') / 1);
        var zspmDm = rowData.getValue("zspmDm");
        var hdynse = 0;// 定期定额核定的应纳税额
        var xssl = 0;// 定期定额核定的销售数量

        if ($chk(sb001_dqdexx) && sb001_dqdexx.trs.length > 0) {
            for (var i = 0; i < sb001_dqdexx.trs.length; i++) {
                if (sb001_dqdexx.trs[i].tds.zspmDm.value == zspmDm) {
                    hdynse = sb001_dqdexx.trs[i].tds.ynse.value;
                    xssl = sb001_dqdexx.trs[i].tds.jsyj.value;
                }
            }
        }

        if (cv1 < hdynse) {
            swordAlert("当前计算出的应纳税额" + cv1.round(2) + "小于核定应纳税额" + hdynse.round(2) + ",请修改后重试！");
            var data = {
                "tds": {
                    "xssl": {
                        "value": xssl
                    },
                    "ynse": {
                        "value": hdynse
                    }
                }
            };
            grid1.updateRow(row, data);
        } else {
            var d1 = {
                "tds": {
                    "ynse": {
                        "value": cv1.round(2)
                    }
                }
            };
            grid1.updateRow(row, d1);
        }

        $w("sbsjxxcpyGrid").rereshHjRowData();
        var hjDiv = $w("sbsjxxcpyGrid").hjRow;
        var cellArray = hjDiv.getElements("div");
        var ynseHJ = cellArray[3].get("realvalue");

        $w('sbsjxxForm').setValue('ynsehj4', ynseHJ);

        caculate("sbsjxxForm_ynsehj4");
        $w('sbsjxxForm').setValue('ynseheji', ynseHJ);
        $w('sbsjxxForm').getField('ynseheji').set('realvalue', ynseHJ);
    }
}

// 检查减免
function checkJm() {
    var sbsjxxForm = $w('sbsjxxForm');
    var value = $w('sbsjxxForm').getValue("bqjse") / 1;
    if (sb001_jmxxList == null) {
        if (value != 0) {
            // sbsjxxForm.setValue("bqjse", "0");
            swordAlert("没有减免税审批、备案信息");
            // 计算各种公式
            // caculate("sbsjxxForm_bqjse");
        }
        return;
    }

}

// 回调函数，jmxxList的返回页面
function setJmxx(allData, checkedData) {
    // 为显示而生
    sb031_jmxxList = JSON.decode(allData);
    // 为像后台传值
    var tmpforSave = JSON.decode(checkedData);
    if (tmpforSave == null || tmpforSave == undefined || "" == tmpforSave) {
        sb001_jmxxListForSave = null;
    } else {
        if (tmpforSave.trs.length == 0) {
            sb001_jmxxListForSave = null;
        } else {
            sb001_jmxxListForSave = tmpforSave;
        }
    }
}

// 比较预缴
function bijiaoyujiao() {
    // add by fanyl 20150922 如果是双定户的情况，bqyjse应>预缴，<预缴+批扣金额
    var jyje = $w('sbsjxxForm').getValue('bqyjse');
    var yyjje = (parseFloat(sb001_yijiaose) / 1).accAdd(parseFloat(yj) / 1).round(2); // 已预缴=预缴+已缴
    if (jyje > yyjje) {
        swordAlert("您输入的预缴金额应小于等于" + yyjje);
        $w('sbsjxxForm').setValue('bqyjse', yyjje);
        caculate("sbsjxxForm_bqyjse");
    } else if (jyje < sb001_yijiaose) {
        swordAlert("您输入的预缴金额应大于等于" + sb001_yijiaose);
        $w('sbsjxxForm').setValue('bqyjse', yyjje);
        caculate("sbsjxxForm_bqyjse");
    }

    // if (jyje > yj / 1) {
    // swordAlert("您输入的预缴金额不应超过" + yj);
    // $w('sbsjxxForm').setValue('bqyjse', yj);
    // caculate("sbsjxxForm_bqyjse");
    // }
}

// 以下方法为保存xml文件时附表数据组装
function setXMLDataFromAChild(data) {
    var Name = data.Name.value;
    var Data = data.Data.value;
    // sb001_fbData[Name] = {
    // 'value' : Data
    // };

    sb001_fbData[Name] = Data;
}

function hideAll() {
    $('div1').setStyle("display", "none");
    $('div2').setStyle("display", "none");
    $('div3').setStyle("display", "none");
    $('div4').setStyle("display", "none");
    $('div5').setStyle("display", "none");
    $('div6').setStyle("display", "none");
    $('div7').setStyle("display", "none");
    $('div8').setStyle("display", "none");
}

function qcsEnable() {
    var sbsjxxForm = $w('sbsjxxForm');
    sbsjxxForm.enable(["qclqse", "bqzykcse", "qcwjse", "bqjnqqynse"]);
}

// 5.石脑油、燃料油相关附表的表间关系
// 1）《石脑油、燃料油生产、外购、耗用、库存月度统计表》的第6行“开具普通版增值税专用发票的油品数量”石脑油、燃料油的本月数应分别等于《生产企业定点直供石脑油、燃料油开具普通版增值税专用发票明细表》的小计数量。
// 2）《石脑油、燃料油生产、外购、耗用、库存月度统计表》的第5、7行石脑油、燃料油本期数（合计）应分别与当期《成品油消费税纳税申报表》附表2《本期减（免）税额计算表》“本期减（免）数量”注明的石脑油、燃料油数量一致。
// 3）《石脑油、燃料油生产、外购、耗用、库存月度统计表》的第16行“其中：免税油品数量”项石脑油、燃料油本月数应分别等于《使用企业外购石脑油、燃料油凭证明细表》中“外购免税油品合计”数量，累计数应小于或等于本年度定点直供计划总数量（购入）。
// 4）《石脑油、燃料油生产、外购、耗用、库存月度统计表》的第17行“含税油品数量”项国产和进口石脑油、燃料油本月数应分别等于《使用企业外购石脑油、燃料油凭证明细表》中“外购含税油品”中外购国产油品合计、外购进口油品合计的石脑油、燃料油数量。
// 5)
// 《石脑油、燃料油生产、外购、耗用、库存月度统计表》的第3、19、22行的石脑油、燃料油的本月数数量之和应分别小于或等于《成品油消费税纳税申报表》“石脑油”、“燃料油”的销售数量。
// 6）《使用企业外购石脑油、燃料油凭证明细表》的“外购免税油品”项的合计值数量应与当期报送的《石脑油、燃料油生产、外购、耗用、库存月度统计表》第16行“石脑油、燃料油”本期数国产油数量相等。
// 7）《使用企业外购石脑油、燃料油凭证明细表》的“外购含税油品”项的外购国产油品合计值，应与当期报送的《石脑油、燃料油生产、外购、耗用、库存月度统计表》第17行“石脑油、燃料油”本期数国产油数量相等；“外购含税油品”项的外购进口油品合计值，应与当期报送的《石脑油、燃料油生产、外购、耗用、库存月度统计表》第17行“石脑油、燃料油”本期数进口油数量相等。

// 8. 普通版增值税专用发票的油品数量本期数--同上1）
// 监控属性：强制类
// 消费税申报保存时，对《石脑油、燃料油生产、外购、耗用、库存月度统计表》的普通版增值税专用发票的油品数量（本期数）进行判断，应等于《生产企业定点直供石脑油、燃料油开具普通版增值税专用发票明细表》的小计数量，如若不等则提示“普通版增值税专用发票的油品数量不等于《生产企业定点直供石脑油、燃料油开具普通版增值税专用发票明细表》的小计数量”
// 9. 石脑油、燃料油本期数之和--同上2）
// 监控属性：提示类
// 消费税申报保存时，在汉字防伪版增值税专用发票推行之前，对《石脑油、燃料油生产、外购、耗用、库存月度统计表》的第4、7行石脑油、燃料油本期数之和进行判断，应分别与当期《成品油消费税纳税申报表》附表2《本期减（免）税额计算表》“本期减（免）数量”注明的石脑油、燃料油数量一致；在汉字防伪版增值税专用发票推行之后，对《石脑油、燃料油生产、外购、耗用、库存月度统计表》的第5、7行石脑油、燃料油本期数之和进行判断，应分别与当期《成品油消费税纳税申报表》附表2《本期减（免）税额计算表》“本期减（免）数量”注明的石脑油、燃料油数量一致；如若不一致则提示：“石脑油本期数之和与当期《成品油消费税纳税申报表》附表2《本期减（免）税额计算表》“本期减（免）数量”注明的石脑油数量不一致，或燃料油本期数之和与当期《成品油消费税纳税申报表》附表2《本期减（免）税额计算表》“本期减（免）数量”注明的燃料油数量不一致”
// 10. 当期外购免税油品数量本期数--同上3）
// 监控属性：强制类
// 消费税申报保存时，对《石脑油、燃料油生产、外购、耗用、库存月度统计表》的当期外购免税油品数量本期数进行判断，应等于当月《使用企业外购石脑油、燃料油凭证明细表》中“外购免税油品合计”数量，如若不等则提示：“当期外购免税油品数量本期数不等于当月《使用企业外购石脑油、燃料油凭证明细表》中“外购免税油品合计”数量”。
// 12. 国产当期外购含税油品数量本期数--同上4）
// 监控属性：强制类
// 消费税申报保存时，对《石脑油、燃料油生产、外购、耗用、库存月度统计表》的国产当期外购含税油品数量本期数进行判断，应等于当月《使用企业外购石脑油、燃料油凭证明细表》中“外购含税油品”项内外购国产油品合计数量，如果不等则提示：“国产当期外购含税油品数量本期数不等于当月《使用企业外购石脑油、燃料油凭证明细表》中“外购含税油品”项内外购国产油品合计数量”
// 13. 进口当期外购含税油品数量本期数--同上4）
// 监控属性：强制类
// 消费税申报保存时，对《石脑油、燃料油生产、外购、耗用、库存月度统计表》的进口当期外购含税油品数量本期数进行判断，应等于当月《使用企业外购石脑油、燃料油凭证明细表》中“外购含税油品”项内外购进口油品合计数量，如果不等则提示：“进口当期外购含税油品数量本期数不等于当月《使用企业外购石脑油、燃料油凭证明细表》中“外购含税油品”项内外购进口油品合计数量”
// 14. 石脑油、燃料油的本月数数量之和--同上5）
// 监控属性：强制类
// 消费税申报保存时，对《石脑油、燃料油生产、外购、耗用、库存月度统计表》的第3、19、22行的石脑油、燃料油的本月数数量之和进行判断，应分别小于或等于《成品油消费税纳税申报表》“石脑油”、“燃料油”的销售数量，如若不小于等于《成品油消费税纳税申报表》“石脑油”、“燃料油”的销售数量，则提示：“石脑油的本月数数量之和大于《成品油消费税纳税申报表》“石脑油”的销售数量，或燃料油的本月数数量之和大于《成品油消费税纳税申报表》“燃料油”的销售数量”

function cpylBjgxjy() {
    if (parseFloat(fb4_6_snybqs6).round(2) != parseFloat(fb4_9_snyzyfpslhj)
			.round(2)) {
        swordAlert("《石脑油、燃料油生产、外购、耗用、库存月度统计表》的普通版增值税专用发票的石脑油油品数量不等于《生产企业定点直供石脑油、燃料油开具普通版增值税专用发票明细表》的石脑油小计数量");
        return false;
    }
    if (parseFloat(fb4_6_rlybqs6).round(2) != parseFloat(fb4_9_rlyzyfpslhj)
			.round(2)) {
        swordAlert("《石脑油、燃料油生产、外购、耗用、库存月度统计表》的普通版增值税专用发票的燃料油油品数量不等于《生产企业定点直供石脑油、燃料油开具普通版增值税专用发票明细表》的燃料油小计数量");
        return false;
    }

    // if(fb4_6_snybqs5.accAdd(fb4_6_snybqs7)!=parseFloat(fb4_2_bqjmslsny)){
    // swordAlert("《石脑油、燃料油生产、外购、耗用、库存月度统计表》的第4、7行石脑油本期数之和与附表2《本期减（免）税额计算表》“本期减（免）数量”注明的石脑油数量不一致");
    // return false;
    // }
    // if(fb4_6_rlybqs5.accAdd(fb4_6_rlybqs7)!=parseFloat(fb4_2_bqjmslrly)){
    // swordAlert("《石脑油、燃料油生产、外购、耗用、库存月度统计表》的第4、7行燃料油本期数之和与附表2《本期减（免）税额计算表》“本期减（免）数量”注明的燃料油数量不一致");
    // return false;
    // }

    // 改为按合计比较
    if (fb4_6_snybqs16.accAdd(fb4_6_rlybqs16) != fb4_8_msgrsnyslhj
			.accAdd(fb4_8_msgrrlyslhj)) {
        // swordAlert("《石脑油、燃料油生产、外购、耗用、库存月度统计表》的国产当期外购含税油品数量本期数不等于当月《使用企业外购石脑油、燃料油凭证明细表》中“外购含税油品”项内外购国产油品合计数量");
        swordAlert("《石脑油、燃料油生产、外购、耗用、库存月度统计表》的当期外购免税油品数量本期数不等于当月《使用企业外购石脑油、燃料油凭证明细表》中“外购免税油品合计”数量");
        return false;
    }
    // if(parseFloat(fb4_6_rlybqs16)!=parseFloat(fb4_8_msgrrlyslhj)){
    // swordAlert("《石脑油、燃料油生产、外购、耗用、库存月度统计表》的当期外购免税燃料油油品数量本期数不等于《使用企业外购石脑油、燃料油凭证明细表》中“外购免税油品合计”的燃料油数量");
    // return false;
    // }
    if (fb4_6_snybqs17.accAdd(fb4_6_rlybqs17) != fb4_8_hsgrsnyslhj
			.accAdd(fb4_8_hsgrrlyslhj)) {
        // swordAlert("《石脑油、燃料油生产、外购、耗用、库存月度统计表》的进口当期外购含税油品数量本期数不等于当月《使用企业外购石脑油、燃料油凭证明细表》中“外购含税油品”项内外购进口油品合计数量");
        swordAlert("《石脑油、燃料油生产、外购、耗用、库存月度统计表》的国产当期外购含税油品数量本期数不等于当月《使用企业外购石脑油、燃料油凭证明细表》中“外购含税油品”项内外购国产油品合计数量");
        return false;
    }
    // if(parseFloat(fb4_6_rlybqs17)!=parseFloat(fb4_8_hsgrrlyslhj)){
    // swordAlert("《石脑油、燃料油生产、外购、耗用、库存月度统计表》的国产当期外购含税燃料油油品数量本期数不等于《使用企业外购石脑油、燃料油凭证明细表》中“外购含税油品”项内外购国产油品合计数量的燃料油数量");
    // return false;
    // }
    if (fb4_6_jksnybqs17.accAdd(fb4_6_jkrlybqs17) != fb4_8_hsgrjksnyslhj
			.accAdd(fb4_8_hsgrjkrlyslhj)) {
        // swordAlert("《石脑油、燃料油生产、外购、耗用、库存月度统计表》的进口当期外购含税石脑油油品数量本期数不等于《使用企业外购石脑油、燃料油凭证明细表》中“外购含税油品”项内外购进口油品合计数量的石脑油数量");
        swordAlert("《石脑油、燃料油生产、外购、耗用、库存月度统计表》的进口当期外购含税油品数量本期数不等于当月《使用企业外购石脑油、燃料油凭证明细表》中“外购含税油品”项内外购进口油品合计数量");
        return false;
    }
    // if(parseFloat(fb4_6_jkrlybqs17)!=parseFloat(fb4_8_hsgrjkrlyslhj)){
    // swordAlert("《石脑油、燃料油生产、外购、耗用、库存月度统计表》的进口当期外购含税燃料油油品数量本期数不等于《使用企业外购石脑油、燃料油凭证明细表》中“外购含税油品”项内外购进口油品合计数量的燃料油数量");
    // return false;
    // }

    var xsslsny = 0;
    var xsslrly = 0;

    var cpygrid = pc.getWidget('sbsjxxcpyGrid').getCurPageGridData();
    var cpygridlength = cpygrid.trs.length;

    for (var i = 0; i < cpygridlength; i++) {
        var zspm = cpygrid.trs[i].tds.zspmDm.value;
        var xssl = cpygrid.trs[i].tds.xssl.value / 1;

        if (zspm == "101020605") {
            xsslsny += xssl;
        }
        if (zspm == "101020608") {
            xsslrly += xssl;
        }
    }

    if (fb4_6_snybqs3.accAdd(fb4_6_snybqs19).accAdd(fb4_6_snybqs22) > parseFloat(xsslsny)) {
        swordAlert("《石脑油、燃料油生产、外购、耗用、库存月度统计表》的第3、19、22行的石脑油的本月数数量之和应小于或等于《成品油消费税纳税申报表》“石脑油”的销售数量");
        return false;
    }

    if (fb4_6_rlybqs3.accAdd(fb4_6_rlybqs19).accAdd(fb4_6_rlybqs22) > parseFloat(xsslrly)) {
        swordAlert("《石脑油、燃料油生产、外购、耗用、库存月度统计表》的第3、19、22行的燃料油的本月数数量之和应小于或等于《成品油消费税纳税申报表》“燃料油”的销售数量");
        return false;
    }
    return true;
}

/**
 * 根据自查补报通知书弹出框数据信息选择后将数据信息回填页面
 * 
 * @param parm
 * @return
 */
/*
 * function queryZcbbtzs(parm) { // 缓存纳税人自查补报通知书数据信息 sbNspgzcbbtzsVO =
 * param.getAttr("sbNspgzcbbtzsVO"); }
 */

// 将弹出的通知书页面选择后的uuid写入到申报页面 然后将保存设置为可用，这是个回调函数
function setNsrzcbbtzsUUID(uuid) {
    if (uuid == "0")
        $w("nsrxxForm").setValue("sbsxDm1", "11");
    else
        gt3.zxbztzsuuid = uuid;

}

/**
 * 错误更正，载入基础数据
 * 
 * @param reData
 * @param
 */
function loadCwgzBaseInfo(resData) {
    var flzlGrid = $w('flzlGrid');
    if (!flzlGrid.collapseDiv.hasClass('x-tool-s')) {
        flzlGrid.toggle();
    }

    sb001_sbcwgzmap = pc.getResData("cwgzMap", resData);
    gt3.djxh = sb001_sbcwgzmap.data.djxh.value;
    nsrxxFormInit = pc.getResData("nsrxxForm", resData);

    // 获取期初报文内的数据做各种处理
    initOnSuccess(null, resData);

    $w("nsrxxForm").initData(pc.getResData("nsrxxForm", this.resData2));
    $w("sbsjxxForm").initData(pc.getResData("sbsjxxForm", this.resData2));
    $w("sbsjxxqtGrid").initData(pc.getResData("sbsjxxqtGrid", this.resData2));
    $w("sbsjxxcpyGrid").initData(pc.getResData("sbsjxxcpyGrid", this.resData2));

    $w("slxxForm").initData(pc.getResData("slxxForm", this.resData2));

    calFomulaGzDr();

    $w("nsrxxForm").disable();
    $w('sbsjxxForm').disable('sbblx');

    $w("sbToolBar").setEnabled('save');
    tempsave_enable("sbToolBar");

    // add by fanyl 20150818 错误更正进来时，更新标志为Y，将导入按钮置为可用状态
    sbcwgzFlag = "Y";
    // $w("sbToolBar").setDisabled('export');
    // $w("sbToolBar").setDisabled('edit');

    (function () {
        setSblmAndTreeDisply();
    }).delay(300);

}

// 申报导入处理方法
function drxx() {
    sb001_resDataXML = null;

    var gydrctrl = ctrl + "_getDrxx";// 导入处理自定义的ctrl
    var drxxBtn = new SwordSubmit();
    drxxBtn.pushData('gydrCtrl', gydrctrl);
    drxxBtn.setCtrl('GYDrCtrl_openDr');// 公用导入方法
    swordAlertIframe('', {
        titleName: "申报信息导入",
        width: 450,
        height: 300,
        param: window,
        isNormal: 'true',
        isMax: 'true',
        isClose: 'true',
        isMin: "true",
        submit: drxxBtn
    });
}

/**
 * 导入之后的回调函数
 */
function boxCallBackForSBdr(resData) {

    sb001_cszForXML = resData.getAttr("cszForXML");// xml的参数值
    if (sb001_cszForXML == "SBDR") {// 导入

        var flzlGrid = $w('flzlGrid');
        if (!flzlGrid.collapseDiv.hasClass('x-tool-s')) {
            flzlGrid.toggle();
        }

        this.resData2 = JSON.decode(JSON.encode(resData));
        sb001_resDataXML = this.resData2;
        creatfbData();

        $w("nsrxxForm").initData(pc.getResData("nsrxxForm", this.resData2));
        $w("sbsjxxForm").initData(pc.getResData("sbsjxxForm", this.resData2));
        $w("sbsjxxqtGrid").initData(
				pc.getResData("sbsjxxqtGrid", this.resData2));
        $w("sbsjxxcpyGrid").initData(
				pc.getResData("sbsjxxcpyGrid", this.resData2));
        $w("slxxForm").initData(pc.getResData("slxxForm", this.resData2));

        $w("nsrxxForm").disable();
        $w('sbsjxxqtGrid').readonly();
        $w('sbsjxxcpyGrid').readonly();
        $w('sbsjxxForm').disable();
        $w('slxxForm').disable();

        // add by fanyl 20150818 当标志不为Y时，表示不是从申报错误更正进入的，则走正常申报的逻辑
        if (sbcwgzFlag != "Y") {
            var nsrxxFormObj = $w('nsrxxForm');
            var nsrsbh = nsrxxFormObj.getValue("nsrsbh");
            var cxbz = "2";// 4.查询自然人和纳税人（纳税人需要权限过滤）；

            queryNsrxxbyNsrsbh(nsrsbh, queryNsrxxSuccess, cxbz);
            $w("nsrxxForm").disable('skssqq');
        }
        // var nsrxxFormObj = $w('nsrxxForm');
        // var nsrsbh = nsrxxFormObj.getValue("nsrsbh");
        // var cxbz = "2";// 4.查询自然人和纳税人（纳税人需要权限过滤）；
        //
        // queryNsrxxbyNsrsbh(nsrsbh, queryNsrxxSuccess, cxbz);
        // $w("nsrxxForm").disable('skssqq');
    }
}

/**
 * 导入时，获取页面初始化数据
 * 
 * @return
 */
function getSbdrInitData() {

    if (sb001_cszForXML == "SBDR") {// 导入
        $_cshFlag = 0;
        gt3.djxh = nsrxxVO.djxh;
        dr_sbblx = $w('sbsjxxForm').getValue('sbblx').code;
        // alert(dr_sbblx);
        var skssqq = $w('nsrxxForm').getValue("skssqq");
        var skssqz = $w('nsrxxForm').getValue("skssqz");
        var sbrq = $w('nsrxxForm').getValue("sbrq1");
        var ssqzBtn = new SwordSubmit();
        ssqzBtn.setCtrl(ctrl + "_changeSbssqq");
        ssqzBtn.setFunction('onSuccess', 'loadSbdrBaseInfo');
        ssqzBtn.pushData('nsrxxVO', JSON.encode(JSON.decode(nsrxxJsonVO)));
        ssqzBtn.pushData("gt3_cszForXML", "SBDR");
        ssqzBtn.pushData("sbblx", dr_sbblx);
        ssqzBtn.pushData($w("nsrxxForm").getSubmitData());
        ssqzBtn.submit();
    }
}

/**
 * 申报导入，载入基础数据
 * 
 * @param reData
 * @param
 */
function loadSbdrBaseInfo(reqData, resData) {

    // 获取期初报文内的数据做各种处理

    initOnSuccess(null, resData);
    this.resData2 = sb001_resDataXML;
    // $w('sbsjxxForm').setValue('sbblx', dr_sbblx);
    // setSblmAndTreeDisply();
    calFomulaGzDr();

    $w("nsrxxForm").disable();
    $w('sbsjxxqtGrid').readonly();
    $w('sbsjxxcpyGrid').readonly();
    $w('sbsjxxForm').disable();
    $w('slxxForm').disable();

    $w("sbToolBar").setEnabled('save');
    tempsave_enable("sbToolBar");
    // $w("sbToolBar").setDisabled('export');
    // $w("sbToolBar").setDisabled('edit');

}

// 更正导入初始化页面时触发公式
function calFomulaGzDr() {

    var sbblx = $w('sbsjxxForm').getValue('sbblx').code;
    if ($chk(sbblx)) {
        if (sbblx == "01") {
            caculate("sbsjxxForm_ynsehj1");
        }
        if (sbblx == "02") {
            caculate("sbsjxxForm_ynsehj2");
        }
        if (sbblx == "03") {
            caculate("sbsjxxForm_ynsehj3");
        }
        if (sbblx == "04") {
            var grid1 = pc.getWidget('sbsjxxcpyGrid');
            grid1.rereshHjRowData();
            var hjDiv = $w("sbsjxxcpyGrid").hjRow;
            var cellArray = hjDiv.getElements("div");
            var ynseHJ = cellArray[3].get("realvalue");
            $w('sbsjxxForm').setValue('ynsehj4', ynseHJ);
            caculate("sbsjxxForm_ynsehj4");
        }
        if (sbblx == "05") {
            caculate("sbsjxxForm_ynsehj5");
        }
        if (sbblx == "06") {
            var grid2 = pc.getWidget('sbsjxxqtGrid');
            grid2.rereshHjRowData();
            var hjDiv = $w("sbsjxxqtGrid").hjRow;
            var cellArray = hjDiv.getElements("div");
            var ynseHJ = cellArray[4].get("realvalue");
            $w('sbsjxxForm').setValue('ynsehj6', ynseHJ);

            caculate("sbsjxxForm_ynsehj6");
        }
        if (sbblx == "07") {
            caculate("sbsjxxForm_ynsehj7");
        }
        if (sbblx == "08") {
            caculate("sbsjxxForm_ynsehj8");
        }

    }
    caculate("sbsjxxForm_ynseheji");
    caculate("sbsjxxForm_bqybtse");
    caculate("sbsjxxForm_qmwjse");
}

/**
 * 成品油页面上的公式计算
 */
function calCpyZspmFormula(e) {
    var tar = new Event(e).target;
    var name = tar.name;
    calCpyWithName(name);
}

/**
 * 成品油页面公式计算
 */
function calCpyWithName(name) {
    var sbsjxxForm = $w("sbsjxxForm");
    switch (name) {
        case "syslqy":
        case "xsslqy":
            var syslqy = sbsjxxForm.getValue("syslqy") / 1;
            var xsslqy = sbsjxxForm.getValue("xsslqy") / 1;
            var ynseqy = syslqy.multiple(xsslqy);
            sbsjxxForm.setValue("ynseqy", ynseqy);
            break;

        case "syslcy":
        case "xsslcy":
            var syslcy = sbsjxxForm.getValue("syslcy") / 1;
            var xsslcy = sbsjxxForm.getValue("xsslcy") / 1;
            var ynsecy = syslcy.multiple(xsslcy);
            sbsjxxForm.setValue("ynsecy", ynsecy);
            break;

        case "syslsny":
        case "xsslsny":
            var syslsny = sbsjxxForm.getValue("syslsny") / 1;
            var xsslsny = sbsjxxForm.getValue("xsslsny") / 1;
            var ynsesny = syslsny.multiple(xsslsny);
            sbsjxxForm.setValue("ynsesny", ynsesny);
            break;

        case "syslrjy":
        case "xsslrjy":
            var syslrjy = sbsjxxForm.getValue("syslrjy") / 1;
            var xsslrjy = sbsjxxForm.getValue("xsslrjy") / 1;
            var ynserjy = syslrjy.multiple(xsslrjy);
            sbsjxxForm.setValue("ynserjy", ynserjy);
            break;

        case "syslrhy":
        case "xsslrhy":
            var syslrhy = sbsjxxForm.getValue("syslrhy") / 1;
            var xsslrhy = sbsjxxForm.getValue("xsslrhy") / 1;
            var ynserhy = syslrhy.multiple(xsslrhy);
            sbsjxxForm.setValue("ynserhy", ynserhy);
            break;

        case "syslrly":
        case "xsslrly":
            var syslrly = sbsjxxForm.getValue("syslrly") / 1;
            var xsslrly = sbsjxxForm.getValue("xsslrly") / 1;
            var ynserly = syslrly.multiple(xsslrly);
            sbsjxxForm.setValue("ynserly", ynserly);
            break;

        case "syslhkmy":
        case "xsslhkmy":
            var syslhkmy = sbsjxxForm.getValue("syslhkmy") / 1;
            var xsslhkmy = sbsjxxForm.getValue("xsslhkmy") / 1;
            var ynsehkmy = syslhkmy.multiple(xsslhkmy);
            sbsjxxForm.setValue("ynsehkmy", ynsehkmy);
            break;
    }
    caculate("sbsjxxForm_ynsehj4");
    caculate("sbsjxxForm_ynseheji");
    caculate("sbsjxxForm_bqydkse");
    caculate("sbsjxxForm_qmldse");
    caculate("sbsjxxForm_bqsjdkse");
    caculate("sbsjxxForm_bqybtse");
    caculate("sbsjxxForm_qmwjse");
}

// 附表七（1）本期减（免）税额计算表（电池）减免税额合计
function setParentValue(hjbqjmse) {
    var sbsjxxForm = $w('sbsjxxForm');
    var code = sbsjxxForm.getValue('sbblx').code;
    // 从新加载主表计算公式
    if (code == "04" || code == "07" || code == "08") {
        var ynsehj;
        if (code == "07") {
            ynsehj = sbsjxxForm.getValue('ynsehj7');
        } else if (code == "08") {
            ynsehj = sbsjxxForm.getValue('ynsetl');
        } else if (code == "04") {
            var hjRow = $w('sbsjxxcpyGrid').hjRow;
            var HjDiv = hjRow.getElements("div");
            ynsehj = HjDiv[3].get("realvalue");
        }
        if ((ynsehj / 1) < (hjbqjmse / 1)) {
            swordAlert("本期减免税额应小于等于应纳税额合计");
            sbsjxxForm.setValue("bqjse", "0.00");
        } else {
            sbsjxxForm.setValue("bqjse", hjbqjmse);
            caculate("sbsjxxForm_bqjse");
            checkJm();
        }
    }
}
function zykcseCheck() {
    var sbsjxxForm = $w('sbsjxxForm');
    var code = sbsjxxForm.getValue('sbblx').code;
    var bqjmse = sbsjxxForm.getValue('bqjse') / 1;
    if (code == "07" || code == "08") {
        var ynsehj;
        if (code == "07") {
            ynsehj = sbsjxxForm.getValue('ynsehj7');
        } else if (code == "08") {
            ynsehj = sbsjxxForm.getValue('ynsetl');
        }
        if ((ynsehj / 1 - bqjmse) < (sbsjxxForm.getValue('bqzykcse') / 1)) {
            swordAlert("本期准予扣除税额应小于等于应纳税额合计-本期减免税额");
            sbsjxxForm.setValue("bqzykcse", "0.00");
            caculate("sbsjxxForm_bqjse");
        }
    }
}
function xseCheck() {
    var sbsjxxForm = $w('sbsjxxForm');
    var ynsehj;
    var sbblxDm = sbsjxxForm.getValue('sbblx').code;
    var skssqq = $w('nsrxxForm').getValue('skssqq');
    if (sbblxDm == "07") {
        if (checkQxdcSfzsBySsqq(skssqq)) {// 2016年1月1日之后的属期开始征收铅蓄电池消费税
            var xsedc2 = sbsjxxForm.getValue('xsedc2');
            var sysldc2 = sbsjxxForm.getValue('sysldc2');
            var ynsedc2 = (parseFloat(xsedc2)).multiple(parseFloat(sysldc2)).round(2);
            sbsjxxForm.setValue("ynsedc2", ynsedc2);
        } else {
            sbsjxxForm.setValue("ynsedc2", "0.00");
        }
        caculate("sbsjxxForm_ynsedc2");
        ynsehj = sbsjxxForm.getValue('ynsehj7');
    } else if (sbblxDm == "08") {
        ynsehj = sbsjxxForm.getValue('ynsetl');
    }
    if ((ynsehj / 1) < (sbsjxxForm.getValue('bqjse') / 1)) {
        swordAlert("本期减免税额小于等于合计应纳税额");
        sbsjxxForm.setValue("bqjse", "0.00");
        caculate("sbsjxxForm_bqjse");
    }

}

/**
 * 实现提示信息拖动 add by fanyl 20150812 定期定额户如果有定期定额信息时，弹出对话框显示信息
 */
var dragTag;
function shixiantuodong() {
    var pop_panel = $('dqdetsxx');// 提示信息
    var docbody = $(document.body);
    new Drag(pop_panel, {
        snap: 5,
        limit: {
            x: [0, docbody.getWidth() - pop_panel.getWidth()],
            y: [0, docbody.getHeight() - pop_panel.height - 20]
        }
        ,
        handle: pop_panel
       , onComplete: function (el) {
           dragTag = "drag";
       }
    });
}

// add by fanyl 20150812 定期定额户如果有定期定额信息时，弹出对话框显示信息
function showDqdexx() {
    if ($chk(sb001_dqdexx) && sb001_dqdexx.trs.length > 0) {
        swordAlertIframe("/sb/sb001/sb001_xfssb_dqdexx.jsp", {
            titleName: "定期定额信息",
            param: window,
            sb001_dqdexx: sb001_dqdexx,
            width: 800,
            height: 300
        });
    }

    // $w('sbsjxxForm').setValue("xselsbj", 6000.0);
    // $w('sbsjxxForm').setValue("xssllsbj", 4000.0);
    // changeFormula3();
    // caculate("sbsjxxForm_ynselsbj");
}


// add by fanyl 20150812 根据征收品目获取销售额和应纳税额
function getXseAndYnseByZspmDm(zspmDm) {
    if (!$chk(zspmDm)) {
        return;
    }
    var sl = xse = ynse = ynseHj = ybtseHj = kcse = jmse = 0.0;
    var sbblx = $w('sbsjxxForm').getValue('sbblx').code; // 申报表类型
    if (zspmDm == "101020101") { // 卷烟（调拨价70元（不含增值税）/条以上（含70元），从价计算）
        sl = $w('sbsjxxForm').getValue("syslblsljljy");
        xse = $w('sbsjxxForm').getValue("xsejljy");
    } else if (zspmDm == "101020104") { // 卷烟（调拨价70元（不含增值税）/条以上（含70元），从量计算）
        sl = 30.0;
        xse = $w('sbsjxxForm').getValue("xssljljy");
    } else if (zspmDm == "101020102") { // 卷烟（70元以下/条，从价计算）
        sl = $w('sbsjxxForm').getValue("syslblslyljy");
        xse = $w('sbsjxxForm').getValue("xseyljy");
    } else if (zspmDm == "101020105") { // 卷烟（70元以下/条，从量计算）
        sl = 30.0;
        xse = $w('sbsjxxForm').getValue("xsslyljy");
    } else if (zspmDm == "101020107") { // 雪茄烟
        sl = $w('sbsjxxForm').getValue("syslblslxjy");
        xse = $w('sbsjxxForm').getValue("xsexjy");
    } else if (zspmDm == "101020108") { // 烟丝
        sl = $w('sbsjxxForm').getValue("syslblslys");
        xse = $w('sbsjxxForm').getValue("xseys");
    } else if (zspmDm == "101020106") { // 卷烟批发从价
        var xse1 = $w('sbsjxxForm').getValue("xsejy");
        var xse2 = $w('sbsjxxForm').getValue("xsejy2");
        xse = (parseFloat(xse1) / 1).accAdd(parseFloat(xse2) / 1).round(2);
        ynse = (parseFloat(xse1) / 1).multiple(0.05).accAdd((parseFloat(xse2) / 1).multiple(0.11)).round(2);
    } else if (zspmDm == "101020109") { // 卷烟批发从量
        xse = $w('sbsjxxForm').getValue("xssljy2");
        ynse = (parseFloat(xse) / 1).multiple(50.0).round(2);
    } else if (zspmDm == "101020201") { // 粮食白酒（从价计算）
        sl = $w('sbsjxxForm').getValue("syslblsllsbj");
        xse = $w('sbsjxxForm').getValue("xselsbj");
    } else if (zspmDm == "101020202") { // 粮食白酒（从量计算）
        sl = 0.5;
        xse = $w('sbsjxxForm').getValue("xssllsbj");
    } else if (zspmDm == "101020203") { // 薯类白酒（从价计算）
        sl = $w('sbsjxxForm').getValue("syslblslslbj");
        xse = $w('sbsjxxForm').getValue("xseslbj");
    } else if (zspmDm == "101020204") { // 薯类白酒（从量计算）
        sl = 0.5;
        xse = $w('sbsjxxForm').getValue("xsslslbj");
    } else if (zspmDm == "101020205") { // 黄酒
        sl = 240.0;
        xse = $w('sbsjxxForm').getValue("xsslhj");
    } else if (zspmDm == "101020206") { // 啤酒（3000元/吨以上）
        sl = 250.0;
        xse = $w('sbsjxxForm').getValue("xssljlpj");
    } else if (zspmDm == "101020207") { // 啤酒（3000元/吨以下）
        sl = 220.0;
        xse = $w('sbsjxxForm').getValue("xsslylpj");
    } else if (zspmDm == "101020299") { // 其他酒
        sl = $w('sbsjxxForm').getValue("syslblslqtj");
        xse = $w('sbsjxxForm').getValue("xseqtj");
    } else if (zspmDm == "101020901") { // 1.0升（含）以下的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg1");
        ynse = $w('sbsjxxForm').getValue("ynseqg1");
    } else if (zspmDm == "101020902") { // 1.0升以上至1.5升(含)的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg2");
        ynse = $w('sbsjxxForm').getValue("ynseqg2");
    } else if (zspmDm == "101020903") { // 1.5升以上至2.0升(含)的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg3");
        ynse = $w('sbsjxxForm').getValue("ynseqg3");
    } else if (zspmDm == "101020904") { // 2.0升以上至2.5升(含)的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg4");
        ynse = $w('sbsjxxForm').getValue("ynseqg4");
    } else if (zspmDm == "101020905") { // 2.5升以上至3.0升(含)的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg5");
        ynse = $w('sbsjxxForm').getValue("ynseqg5");
    } else if (zspmDm == "101020906") { // 3.0升以上至4.0升(含)的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg6");
        ynse = $w('sbsjxxForm').getValue("ynseqg6");
    } else if (zspmDm == "101020907") { // 4.0升以上的乘用车
        xse = $w('sbsjxxForm').getValue("xseqg7");
        ynse = $w('sbsjxxForm').getValue("ynseqg7");
    } else if (zspmDm == "101021000") { // 中轻型商用客车
        xse = $w('sbsjxxForm').getValue("xsezxsykc");
        ynse = $w('sbsjxxForm').getValue("ynsezxsykc");
    } else if (zspmDm == "101021601") { // 电池（不含铅蓄电池）
        xse = $w('sbsjxxForm').getValue("xsedc1");
        ynse = $w('sbsjxxForm').getValue("ynsedc1");
    } else if (zspmDm == "101021699") { // 铅蓄电池
        xse = $w('sbsjxxForm').getValue("xsedc2");
        ynse = $w('sbsjxxForm').getValue("ynsedc2");
    } else if (zspmDm == "101021700") { // 涂料
        xse = $w('sbsjxxForm').getValue("xsetl");
        ynse = $w('sbsjxxForm').getValue("ynsetl");
        ynseHj = ynse; // 应纳税额合计
    }

    // 获取成品油和其他的销售额、应纳税额、应纳税额合计
    if (sbblx == "04") { // 成品油
        var cpyGridData = $w("sbsjxxcpyGrid").getAllGridData();
        var cpyGridLength = cpyGridData.trs.length;
        for (var i = 0; i < cpyGridLength; i++) {
            var zspmDm_zb = cpyGridData.trs[i].tds.zspmDm.value;
            if (zspmDm_zb == zspmDm) {
                xse = cpyGridData.trs[i].tds.xssl.value;
                ynse = cpyGridData.trs[i].tds.ynse.value;
                break;
            }
        }
        ynseHj = $w('sbsjxxcpyGrid').getHj("ynse").round(2); // 应纳税额合计
    } else if (sbblx == "06") { // 其他
        var qtGridData = $w("sbsjxxqtGrid").getAllGridData();
        var qtGridLength = qtGridData.trs.length;
        for (var i = 0; i < qtGridLength; i++) {
            var zspmDm_zb = qtGridData.trs[i].tds.zspmDm.value;
            if (zspmDm_zb == zspmDm) {
                xse = qtGridData.trs[i].tds.xse.value;
                ynse = qtGridData.trs[i].tds.ynse.value;
                break;
            }
        }
    } else if (sbblx == "01") { // 卷烟
        ynse = (parseFloat(sl) / 1).multiple(parseFloat(xse) / 1).round(2); // 获取应纳税额，烟类、酒类要按销售额和税率计算
    } else if (sbblx == "03") { // 酒类
        ynse = (parseFloat(sl) / 1).multiple(parseFloat(xse) / 1).round(2); // 获取应纳税额，烟类、酒类要按销售额和税率计算
    }

    var arr = [];
    arr[0] = parseFloat(xse).round(2);
    arr[1] = parseFloat(ynse).round(2);
    return arr;
}

// add by fanyl 20150812 将核定额带入申报表
function setDqdeToSbb() {
    if ($chk(sb001_dqdexx) && sb001_dqdexx.trs.length > 0) {
        for (var j = 0; j < sb001_dqdexx.trs.length; j++) {
            var zspmDm = sb001_dqdexx.trs[j].tds.zspmDm.value;
            var ynsjye = sb001_dqdexx.trs[j].tds.jsyj.value;
            var hdse = sb001_dqdexx.trs[j].tds.hdse.value;
            setXseToSbb(zspmDm, ynsjye, hdse);
        }
    }
}

// add by fanyl 20150812 根据征收品目获取销售额和应纳税额
function setXseToSbb(zspmDm, ynsjye, hdse) {
    if (!$chk(zspmDm)) {
        return;
    }
    var sbblx = $w('sbsjxxForm').getValue('sbblx').code; // 申报表类型
    if (zspmDm == "101020101") { // 卷烟（调拨价70元（不含增值税）/条以上（含70元），从价计算）
        $w('sbsjxxForm').setValue("xsejljy", ynsjye);
    } else if (zspmDm == "101020104") { // 卷烟（调拨价70元（不含增值税）/条以上（含70元），从量计算）
        $w('sbsjxxForm').setValue("xssljljy", ynsjye);
    } else if (zspmDm == "101020102") { // 卷烟（70元以下/条，从价计算）
        $w('sbsjxxForm').setValue("xseyljy", ynsjye);
    } else if (zspmDm == "101020105") { // 卷烟（70元以下/条，从量计算）
        $w('sbsjxxForm').setValue("xsslyljy", ynsjye);
    } else if (zspmDm == "101020107") { // 雪茄烟
        $w('sbsjxxForm').setValue("xsexjy", ynsjye);
    } else if (zspmDm == "101020108") { // 烟丝
        $w('sbsjxxForm').setValue("xseys", ynsjye);
    } else if (zspmDm == "101020106") { // 卷烟批发从价
        var skssqzStr = $w('nsrxxForm').getValue("skssqz");
        var skssqzDate = new Date(skssqzStr.replace(/-/g, "/")); // 税款所属期止
        if (skssqzDate < new Date("2015/05/01")) { // 5月份以前的属期
            $w('sbsjxxForm').setValue("xsejy", ynsjye);
        } else {
            $w('sbsjxxForm').setValue("xsejy2", ynsjye);
        }
    } else if (zspmDm == "101020109") { // 卷烟批发从量
        $w('sbsjxxForm').setValue("xssljy2", ynsjye);
    } else if (zspmDm == "101020201") { // 粮食白酒（从价计算）
        $w('sbsjxxForm').setValue("xselsbj", ynsjye);
    } else if (zspmDm == "101020202") { // 粮食白酒（从量计算）
        $w('sbsjxxForm').setValue("xssllsbj", ynsjye);
    } else if (zspmDm == "101020203") { // 薯类白酒（从价计算）
        $w('sbsjxxForm').setValue("xseslbj", ynsjye);
    } else if (zspmDm == "101020204") { // 薯类白酒（从量计算）
        $w('sbsjxxForm').setValue("xsslslbj", ynsjye);
    } else if (zspmDm == "101020205") { // 黄酒
        $w('sbsjxxForm').setValue("xsslhj", ynsjye);
    } else if (zspmDm == "101020206") { // 啤酒（3000元/吨以上）
        $w('sbsjxxForm').setValue("xssljlpj", ynsjye);
    } else if (zspmDm == "101020207") { // 啤酒（3000元/吨以下）
        $w('sbsjxxForm').setValue("xsslylpj", ynsjye);
    } else if (zspmDm == "101020299") { // 其他酒
        $w('sbsjxxForm').setValue("xseqtj", ynsjye);
    } else if (zspmDm == "101020901") { // 1.0升（含）以下的乘用车
        $w('sbsjxxForm').setValue("xseqg1", ynsjye);
    } else if (zspmDm == "101020902") { // 1.0升以上至1.5升(含)的乘用车
        $w('sbsjxxForm').setValue("xseqg2", ynsjye);
    } else if (zspmDm == "101020903") { // 1.5升以上至2.0升(含)的乘用车
        $w('sbsjxxForm').setValue("xseqg3", ynsjye);
    } else if (zspmDm == "101020904") { // 2.0升以上至2.5升(含)的乘用车
        $w('sbsjxxForm').setValue("xseqg4", ynsjye);
    } else if (zspmDm == "101020905") { // 2.5升以上至3.0升(含)的乘用车
        $w('sbsjxxForm').setValue("xseqg5", ynsjye);
    } else if (zspmDm == "101020906") { // 3.0升以上至4.0升(含)的乘用车
        $w('sbsjxxForm').setValue("xseqg6", ynsjye);
    } else if (zspmDm == "101020907") { // 4.0升以上的乘用车
        $w('sbsjxxForm').setValue("xseqg7", ynsjye);
    } else if (zspmDm == "101021000") { // 中轻型商用客车
        $w('sbsjxxForm').setValue("xsezxsykc", ynsjye);
    } else if (zspmDm == "101021601") { // 电池（不含铅蓄电池）
        $w('sbsjxxForm').setValue("xsedc1", ynsjye);
        // ??????????????????????????? 有问题，肖娜测试的问题
        // $w('sbsjxxForm').setValue("ynsedc1", 2.22);
    } else if (zspmDm == "101021699") { // 铅蓄电池
        $w('sbsjxxForm').setValue("xsedc2", ynsjye);
    } else if (zspmDm == "101021700") { // 涂料
        $w('sbsjxxForm').setValue("xsetl", ynsjye);
        // $w('sbsjxxForm').setValue("ynsetl", hdse);
    }
    // //设置应退税税额
    // var sbblx = $w('sbsjxxForm').getValue('sbblx').code; // 申报表类型
    // var ynseHj = 0.0;
    // var bqybtse = 0.0;
    // var qmwjse = 0.0;
    // var bqzykcse = $w('sbsjxxForm').getValue("bqzykcse");
    // var bqjmse = $w('sbsjxxForm').getValue("bqjse");
    // var bqyjse = $w('sbsjxxForm').getValue("bqyjse");
    // var qcwjse = $w('sbsjxxForm').getValue("qcwjse");
    // var bqjnqqynse = $w('sbsjxxForm').getValue("bqjnqqynse");
    // if (sbblx == "08") {
    // ynseHj = $w('sbsjxxForm').getValue("ynsetl");
    // }
    // //11111111111111111111111
    // bqybtse = (parseFloat(ynseHj) / 1).subtract(parseFloat(bqzykcse) /
    // 1).subtract(parseFloat(bqjmse) / 1).subtract(parseFloat(bqyjse) / 1);
    // qmwjse = (parseFloat(qcwjse) / 1).accAdd(parseFloat(bqybtse) /
    // 1).subtract(parseFloat(bqjnqqynse) / 1);
    //	
    // $w('sbsjxxForm').setValue("bqybtse", bqybtse.round(2));
    // $w('sbsjxxForm').setValue("qmwjse", qmwjse.round(2));
}

function calYnse(sl1, xse1, sl2, xse2) {
    if (!$chk(sl1)) {
        sl1 = 0.0;
    }
    if (!$chk(xse1)) {
        xse1 = 0.0;
    }
    if (!$chk(sl2)) {
        sl2 = 0.0;
    }
    if (!$chk(xse2)) {
        xse2 = 0.0;
    }
    var ynse = ((parseFloat(sl1) / 1).multiple(parseFloat(xse1) / 1).accAdd((parseFloat(sl2) / 1).multiple(parseFloat(xse2) / 1))).round(2);
    return ynse;
}

// 双定户时初始化各个品目应纳税额
function setYnse() {
    caculate("sbsjxxForm_ynsejljy");
    caculate("sbsjxxForm_ynseyljy");
    caculate("sbsjxxForm_ynsexjy");
    caculate("sbsjxxForm_ynseys");
    caculate("sbsjxxForm_ynsejy");
    caculate("sbsjxxForm_ynsehj1");

    caculate("sbsjxxForm_ynsejy");
    caculate("sbsjxxForm_ynsejy2");
    caculate("sbsjxxForm_xsslhj2");
    caculate("sbsjxxForm_xsehj2");
    caculate("sbsjxxForm_ynsehj2");

    caculate("sbsjxxForm_ynselsbj");
    caculate("sbsjxxForm_ynseslbj");
    caculate("sbsjxxForm_ynsehj");
    caculate("sbsjxxForm_ynsejlpj");
    caculate("sbsjxxForm_ynseylpj");
    caculate("sbsjxxForm_ynseqtj");
    caculate("sbsjxxForm_ynsehj3");

    caculate("sbsjxxForm_ynseqg1");
    caculate("sbsjxxForm_ynseqg2");
    caculate("sbsjxxForm_ynseqg3");
    caculate("sbsjxxForm_ynseqg4");
    caculate("sbsjxxForm_ynseqg5");
    caculate("sbsjxxForm_ynseqg6");
    caculate("sbsjxxForm_ynseqg7");
    caculate("sbsjxxForm_ynsezxsykc");
    caculate("sbsjxxForm_ynsehj5");

    caculate("sbsjxxForm_ynsedc1");
    caculate("sbsjxxForm_ynsedc2");
    caculate("sbsjxxForm_ynsetl");
    caculate("sbsjxxForm_ynsehj7");

    caculate("sbsjxxForm_bqybtse");

}

// 定期定额户申报时，将定额信息带入成品油
function setCpyGridForDqde() {
    var cpyGrid = pc.getResData("sbsjxxcpyGrid", resData2);
    if ($chk(cpyGrid) && cpyGrid.trs.length > 0 && $chk(sb001_dqdexx) && sb001_dqdexx.trs.length > 0) {
        for (var i = 0; i < cpyGrid.trs.length; i++) {
            for (var j = 0; j < sb001_dqdexx.trs.length; j++) {
                if (cpyGrid.trs[i].tds.zspmDm.value == sb001_dqdexx.trs[j].tds.zspmDm.value) {
                    cpyGrid.trs[i].tds.xssl.value = sb001_dqdexx.trs[j].tds.jsyj.value;
                    cpyGrid.trs[i].tds.ynse.value = sb001_dqdexx.trs[j].tds.ynse.value;
                }
            }
        }
        $w("sbsjxxcpyGrid").initData(cpyGrid);
        $w("sbsjxxcpyGrid").rereshHjRowData();
        var hjDiv = $w("sbsjxxcpyGrid").hjRow;
        var cellArray = hjDiv.getElements("div");
        var ynseHJ = cellArray[3].get("realvalue");
        $w('sbsjxxForm').setValue('ynsehj4', ynseHJ);
    }
}

// 定期定额户申报时，将定额信息带入其他
function setQtGridForDqde() {
    var qtGrid = pc.getResData("sbsjxxqtGrid", resData2);
    if ($chk(qtGrid) && qtGrid.trs.length > 0 && $chk(sb001_dqdexx) && sb001_dqdexx.trs.length > 0) {
        for (var i = 0; i < qtGrid.trs.length; i++) {
            for (var j = 0; j < sb001_dqdexx.trs.length; j++) {
                if (qtGrid.trs[i].tds.zspmDm.value == sb001_dqdexx.trs[j].tds.zspmDm.value) {
                    qtGrid.trs[i].tds.xse.value = sb001_dqdexx.trs[j].tds.jsyj.value;
                    qtGrid.trs[i].tds.ynse.value = sb001_dqdexx.trs[j].tds.ynse.value;
                }
            }
        }
        $w("sbsjxxqtGrid").initData(qtGrid);
        $w("sbsjxxqtGrid").rereshHjRowData();
        var hjDiv = $w("sbsjxxqtGrid").hjRow;
        var cellArray = hjDiv.getElements("div");
        var ynseHJ = cellArray[4].get("realvalue");
        $w('sbsjxxForm').setValue('ynsehj6', ynseHJ);
    }
}
/**
 * 为主表定义打印模板uuid
 * 
 * @return
 */
function setZbdymbuuid() {
    var sbblx = $w("sbsjxxForm").getValue("sbblx").code;
    if ("" == sbblx) {
        swordAlert("请选择消费税申报表类型！");
        return false;
    }
    // 计算表格合计
    caculateGridHJFlag = "Y";
    hxdyForPrint = "N";
    printTitle = "消费税申报表";
    printFileType = "excel";
    return "sb001_xfssbprint" + sbblx;
}


// function setDqdeToSbb1(sbblx){
// if ($chk(sb001_dqdexx) && sb001_dqdexx.trs.length > 0) {
// for (var j = 0; j < sb001_dqdexx.trs.length; j++) {
// var zspmDm = sb001_dqdexx.trs[j].tds.zspmDm.value;
// var ynsjye = sb001_dqdexx.trs[j].tds.jsyj.value;
// var hdse = sb001_dqdexx.trs[j].tds.hdse.value;
// setXseToSbb1(zspmDm, ynsjye, hdse, sbblx);
// }
// }
// }

// // add by fanyl 20150812 根据征收品目获取销售额和应纳税额
// function setXseToSbb1(zspmDm, ynsjye, hdse, sbblx) {
// if (!$chk(zspmDm)) {
// return;
// }
// var sbblx = $w('sbsjxxForm').getValue('sbblx').code; // 申报表类型
// if (zspmDm == "101020101") { // 卷烟（调拨价70元（不含增值税）/条以上（含70元），从价计算）
// $w('sbsjxxForm').setValue("xsejljy", ynsjye);
// } else if (zspmDm == "101020104") { // 卷烟（调拨价70元（不含增值税）/条以上（含70元），从量计算）
// $w('sbsjxxForm').setValue("xssljljy", ynsjye);
// } else if (zspmDm == "101020102") { // 卷烟（70元以下/条，从价计算）
// $w('sbsjxxForm').setValue("xseyljy", ynsjye);
// } else if (zspmDm == "101020105") { // 卷烟（70元以下/条，从量计算）
// $w('sbsjxxForm').setValue("xsslyljy", ynsjye);
// } else if (zspmDm == "101020107") { // 雪茄烟
// $w('sbsjxxForm').setValue("xsexjy", ynsjye);
// } else if (zspmDm == "101020108") { // 烟丝
// $w('sbsjxxForm').setValue("xseys", ynsjye);
// } else if (zspmDm == "101020106") { // 卷烟批发从价
// var skssqzStr = $w('nsrxxForm').getValue("skssqz");
// var skssqzDate = new Date(skssqzStr.replace(/-/g, "/")); // 税款所属期止
// if (skssqzDate < new Date("2015/05/01")) { // 5月份以前的属期
// $w('sbsjxxForm').setValue("xsejy", ynsjye);
// } else {
// $w('sbsjxxForm').setValue("xsejy2", ynsjye);
// }
// } else if (zspmDm == "101020109") { // 卷烟批发从量
// $w('sbsjxxForm').setValue("xssljy2", ynsjye);
// } else if (zspmDm == "101020201") { // 粮食白酒（从价计算）
// $w('sbsjxxForm').setValue("xselsbj", ynsjye);
// } else if (zspmDm == "101020202") { // 粮食白酒（从量计算）
// $w('sbsjxxForm').setValue("xssllsbj", ynsjye);
// } else if (zspmDm == "101020203") { // 薯类白酒（从价计算）
// $w('sbsjxxForm').setValue("xseslbj", ynsjye);
// } else if (zspmDm == "101020204") { // 薯类白酒（从量计算）
// $w('sbsjxxForm').setValue("xsslslbj", ynsjye);
// } else if (zspmDm == "101020205") { // 黄酒
// $w('sbsjxxForm').setValue("xsslhj", ynsjye);
// } else if (zspmDm == "101020206") { // 啤酒（3000元/吨以上）
// $w('sbsjxxForm').setValue("xssljlpj", ynsjye);
// } else if (zspmDm == "101020207") { // 啤酒（3000元/吨以下）
// $w('sbsjxxForm').setValue("xsslylpj", ynsjye);
// } else if (zspmDm == "101020299") { // 其他酒
// $w('sbsjxxForm').setValue("xseqtj", ynsjye);
// } else if (zspmDm == "101020901") { // 1.0升（含）以下的乘用车
// $w('sbsjxxForm').setValue("xseqg1", ynsjye);
// } else if (zspmDm == "101020902") { // 1.0升以上至1.5升(含)的乘用车
// $w('sbsjxxForm').setValue("xseqg2", ynsjye);
// } else if (zspmDm == "101020903") { // 1.5升以上至2.0升(含)的乘用车
// $w('sbsjxxForm').setValue("xseqg3", ynsjye);
// } else if (zspmDm == "101020904") { // 2.0升以上至2.5升(含)的乘用车
// $w('sbsjxxForm').setValue("xseqg4", ynsjye);
// } else if (zspmDm == "101020905") { // 2.5升以上至3.0升(含)的乘用车
// $w('sbsjxxForm').setValue("xseqg5", ynsjye);
// } else if (zspmDm == "101020906") { // 3.0升以上至4.0升(含)的乘用车
// $w('sbsjxxForm').setValue("xseqg6", ynsjye);
// } else if (zspmDm == "101020907") { // 4.0升以上的乘用车
// $w('sbsjxxForm').setValue("xseqg7", ynsjye);
// } else if (zspmDm == "101021000") { // 中轻型商用客车
// $w('sbsjxxForm').setValue("xsezxsykc", ynsjye);
// } else if (zspmDm == "101021601") { // 电池（不含铅蓄电池）
// $w('sbsjxxForm').setValue("xsedc1", ynsjye);
// //??????????????????????????? 有问题，肖娜测试的问题
// $w('sbsjxxForm').setValue("ynsedc1", 2.22);
// } else if (zspmDm == "101021699") { // 铅蓄电池
// $w('sbsjxxForm').setValue("xsedc2", ynsjye);
// } else if (zspmDm == "101021700") { // 涂料
// $w('sbsjxxForm').setValue("xsetl", ynsjye);
// $w('sbsjxxForm').setValue("ynsetl", hdse);
// }
// //设置应退税税额
// //var sbblx = $w('sbsjxxForm').getValue('sbblx').code; // 申报表类型
// var ynseHj = 0.0;
// var bqybtse = 0.0;
// var qmwjse = 0.0;
// var bqzykcse = $w('sbsjxxForm').getValue("bqzykcse");
// var bqjmse = $w('sbsjxxForm').getValue("bqjse");
// var bqyjse = $w('sbsjxxForm').getValue("bqyjse");
// var qcwjse = $w('sbsjxxForm').getValue("qcwjse");
// var bqjnqqynse = $w('sbsjxxForm').getValue("bqjnqqynse");
// if (sbblx == "08") {
// ynseHj = $w('sbsjxxForm').getValue("ynsetl");
// $w('sbsjxxForm').setValue('ynsehj8', (parseFloat(ynseHj) / 1).round(2));
// $w('sbsjxxForm').setValue('ynseheji', (parseFloat(ynseHj) / 1).round(2));
//		
// }
// //11111111111111111111111
// // bqybtse = (parseFloat(ynseHj) / 1).subtract(parseFloat(bqzykcse) /
// 1).subtract(parseFloat(bqjmse) / 1).subtract(parseFloat(bqyjse) / 1);
// // qmwjse = (parseFloat(qcwjse) / 1).accAdd(parseFloat(bqybtse) /
// 1).subtract(parseFloat(bqjnqqynse) / 1);
// //
// // $w('sbsjxxForm').setValue("bqybtse", bqybtse.round(2));
// // $w('sbsjxxForm').setValue("qmwjse", qmwjse.round(2));
// }

// 获取街道乡镇数据
function ywpt_getJdxzData(formName, qxxzqh, jdxzxzqh) {
    $w(formName).setValue(jdxzxzqh, "");
    var sub = new SwordSubmit();
    var xzqhDm = $w(formName).getValue(qxxzqh).code;
    sub.pushData('xzqhDm', xzqhDm);
    sub.setCtrl("SBGyCtrl_getJdxzByXzqh");// 定义返回下拉列表数据集的目标服务
    sub.submit();
}

// 清除街道乡镇数据
function ywpt_clearJdxzData(formName, jdxzxzqh) {
    var obj = [];
    $w(formName).setValue(jdxzxzqh, "");
    var widgetData = {
        "data": [{
            "sword": "SwordSelect",
            "dataName": "DM_GY_YWPTJDXZ",
            "data": []
        }]
    }
    pc.reloadSel("DM_GY_YWPTJDXZ", widgetData);
}

/**
 * 获取应征凭证种类代码
 */
function tempsave_zdy_getYzpzzldm() {
    var yzpzzldm = null;
    var sbblxCode = $w('sbsjxxForm').getValue('sbblx').code;
    if (sbblxCode == '01') {
        yzpzzldm = "BDA0610090";
    } else if (sbblxCode == '02') {
        yzpzzldm = "BDA0610017";
    } else if (sbblxCode == '03') {
        yzpzzldm = "BDA0610744";
    } else if (sbblxCode == '04') {
        yzpzzldm = "BDA0610738";
    } else if (sbblxCode == '05') {
        yzpzzldm = "BDA0610091";
    } else if (sbblxCode == '06') {
        yzpzzldm = "BDA0610109";
    } else if (sbblxCode == '07') {
        yzpzzldm = "BDA0610732";
    } else if (sbblxCode == '08') {
        yzpzzldm = "BDA0610735";
    }
    return yzpzzldm;
}

/**
 * 自定义实现暂存方法 (方法名称固定)
 * 参考: saveSubmit3, 获取提交对象
 */
function tempSave(fnName) {
    var saveBtn = saveSubmit3('Y');
    //空:非业务平台条(swordSubmit.submit()), YWPT:业务明天方式提交(ywpt_submit)
    var params = '"",saveBtn';
    eval(fnName + '(' + params + ')');
}

/**
 * 申报暂存导入之后的回调函数 (方法名臣固定)
 * 参考: boxCallBackForSBdr 并将禁用输入以及按钮相关逻辑去除
 */
function boxCallBackForSBzcdr(resData) {
    this.resData2 = JSON.decode(JSON.encode(resData));
    creatfbData();

    $w("nsrxxForm").initData(pc.getResData("nsrxxForm", this.resData2));
    $w("sbsjxxForm").initData(pc.getResData("sbsjxxForm", this.resData2));
    $w("sbsjxxqtGrid").initData(pc.getResData("sbsjxxqtGrid", this.resData2));
    $w("sbsjxxcpyGrid").initData(pc.getResData("sbsjxxcpyGrid", this.resData2));
    $w("slxxForm").initData(pc.getResData("slxxForm", this.resData2));
}