var sfsl = 0; //判断是否受理（标志：1,受理;0,不受理）
var sfNext = true;//是否进入下一步
var mrzlbsdlDm; //资料报送大类代码 
var mrssqq;
var mrssqz;
var bszlDmTo;
var zlbsxlDm;
var zlbsdlDm;
var djxh;
var hyDm;//行业代码
var djzclxDm;//登记注册类型代码
var xyh = false;
var ctrl = 'SB151zlbsslCtrl';
var djrq;
var zcdz;//注册地址
var gdslxDm;//国地税类型代码
var zgswjmc;//主管税务局名称
var sqcjbj;
var kjzdzzDm;
var yxqq;
var yxqz;
var cwkjzdbabj = true;
var sqcfdz;
var reCode1;
var zllx;
var zlsl;
var bsfsDm;
var cfcjbz;
var nsqxDm;
var cwfzrxm;//财务负责人
var bsrxm;//办税人姓名
var scjydz;
var bsrgddh;
var bszl_btssqwcj = "ZLA0610067";  //不提示上期未采集的报送种类串
var _gZcfzbCwkjbblxDm = ""; // 非千户集体时有值和使用，财务报告资产负债表对应的纳税期限代码
var _gIsQhjt = "N"; // 是否是千户集体
var shxydm;//社会信用代码
var nsrsbh;//纳税人识别号
var cwbbQyjdBz = null; // 网报逻辑
var zlbsbz = "N"; //大连网报开关
var zlbshtsqkg = "N";//资料报送回退申请开关
var kjzdbabz = "N";//山西地税会计制度备案开关
var kjzdbz = "N";//广西地税会计制度备案开关
var tsxxkg = "N";//广西国税提示信息开关
var bsqxDm = '06';
function init(resData) {
    $w('sbToolBar').setEnabled('next');
    //湖南网报特色 开关打开查询征期日历
    zlbshtsqkg = resData.getAttr("zlbshtsqkg");
    if (zlbshtsqkg == "Y") {
        //查询征期日历
        queryzqrl();
    }
    zlbsbz = resData.getAttr("zlbsbz");
    tsxxkg = resData.getAttr("tsxxkg");
    kjzdbz = resData.getAttr("kjzdbz");
    kjzdbabz = resData.getAttr("kjzdbabz");
    var falg = resData.getAttr("flag");
    //页面进入方式开关
    var ymkg = resData.getAttr("ymkg");
    $w('sbToolBar').setEnabled('next');
    mrzlbsdlDm = resData.getAttr("zlbsdlDm");
    mrssqq = resData.getAttr("ssqq");
    mrssqz = resData.getAttr("ssqz");
    var nsrxxMap = $w("nsrxxMap");
    nsrxxMap.setValue("ssqq", resData.getAttr("ssqq"));
    nsrxxMap.setValue("ssqz", resData.getAttr("ssqz"));
    nsrxxMap.setValue("sfyhd", "Y");
    //广西特色修改所属期
    if (ymkg == "Y") {
        var syssqq = resData.getAttr("syssqq");
        var syssqz = resData.getAttr("syssqz");
        nsrxxMap.setValue("ssqq", syssqq);
        nsrxxMap.setValue("ssqz", syssqz);
    }

    // 根据纳税人识别号判断是否是从年度申报跳转过来，自动默认触发纳税人回车事件
    var nsrsbh = resData.getAttr("nsrsbh");
    if (nsrsbh != undefined && nsrsbh != null && nsrsbh != '') {
        $w("nsrxxMap").setValue("nsrsbh", nsrsbh);
        fwcq();
    }
    //根据nsrsbh1判断是否是从一般纳税人申报跳转过来，自动默认触发纳税人回车事件
    var nsrsbh1 = resData.getAttr("nsrsbh1");
    if (nsrsbh1 != undefined && nsrsbh1 != null && nsrsbh1 != '') {
        $w("nsrxxMap").setValue("nsrsbh", nsrsbh1);
        $w("nsrxxMap").disable("nsrsbh");
        fwcq();
    }
    //初始页面光标默认放在纳税人识别号上面
    //	nsrxxMap.getFieldEl('nsrsbh').focus();

    var nsrsbh = $w('nsrxxMap').getValue('nsrsbh');
    queryNsrxxbyNsrsbh(nsrsbh, queryNsrxxSuccess, '2');
    //	checkByXlDm(); 网报逻辑调整注释此行避免逻辑重复调用
    nsqxDm = $w('nsrxxMap').getValue('nsqxDm');

    var zlbsdl = $w("nsrxxMap").getValue('zlbsdlDm').code;
    if (zlbsdl == "ZL1005") {
        $$('#dcnd').setStyle('display', 'block');
    }
    if ($chk(zlbsbz) && zlbsbz == "Y" && zlbsbz != undefined) {
        if (nsqxDm == "06" || nsqxDm == "08" || nsqxDm == "10") {
            //根据权限过滤下拉树
            jspt_gy_qx_cwbbByQxFun(resData, "zlbsxlDm", "DM_SB_ZLBSXL", nsqxDm);
        }
    }
    //广西特色所属期或小类置灰
    if (ymkg == "Y") {
        var syzlbsxlDm = resData.getAttr("syzlbsxlDm");
        var syssqq = resData.getAttr("syssqq");
        var syssqz = resData.getAttr("syssqz");
        if (syzlbsxlDm != "") {
            nsrxxMap.setValue("zlbsxlDm", syzlbsxlDm);
            $w('nsrxxMap').disable(['zlbsxlDm', 'zlsl', 'ssqq', 'ssqz']);
            checkByXlDm("xl");
        } else {
            $w('nsrxxMap').disable(['ssqq', 'ssqz']);
        }
    }


}
var zqrl = "";
function queryzqrl() {
    var submit = new SwordSubmit();
    submit.setOptions({
        async: "true",
        mask: "false",
        ctrl: 'DZBSXTKJ017ZqrlCtrl_loadzqrl',
        onSuccess: function (req, res) {
            zqrl = res.getAttr("zqrl");
        },
        onError: function onHandleLoginError() {
            swordAlert("获取征期失败！");
        }
    });
    submit.submit();
}

function sqss(req, resData) {
    mrssqq = resData.Attr("");
}
// 根据纳税人识别号查询纳税人信息
function checkNsr(e) {
    var e = e || window.event;
    if (e.code == 13) {
        //$w('bwlshForm').reset();
        fwcq();
    }
}
function fwcq() {
    xyh = false;
    //$w("nsrxxMap").setValue("zlbsdlDm", "ZL1001");
    var nsrsbh = $w("nsrxxMap").getValue("nsrsbh");
    if (nsrsbh != null && nsrsbh != "") {
        queryNsrxxbyNsrsbh(nsrsbh, queryNsrxxSuccess, '2');
    }
}
//回调函数
function queryNsrxxSuccess(nsrParam, zrrParam) {
    var fddbrxm = nsrParam.fddbrxm.value;
    var nsrmc = nsrParam.nsrmc.value;
    djxh = nsrParam.djxh.value;
    hyDm = nsrParam.hyDm.value;
    djzclxDm = nsrParam.djzclxDm.value;
    djrq = nsrParam.djrq.value;
    zcdz = nsrParam.zcdz.value;
    gdslxDm = nsrParam.gdslxDm.value;
    zgswjmc = nsrParam.zgswjmc.value;
    cwfzrxm = nsrParam.cwfzrxm.value;
    bsrxm = nsrParam.bsrxm.value;
    scjydz = nsrParam.scjydz.value;
    bsrgddh = nsrParam.bsrgddh.value;
    shxydm = nsrParam.shxydm.value;
    var ynsrsbh = nsrParam.ynsrsbh.value;
    var zgswskfjDm = nsrParam.nsrzgswjgList.value[0].zgswjDm;
    $w('nsrxxMap').setValue("nsrmc", nsrmc);
    $w('nsrxxMap').setValue("djxh", djxh);
    $w('nsrxxMap').setValue("fddbrxm", fddbrxm);
    $w('nsrxxMap').setValue("cwfzrxm", cwfzrxm);
    $w('nsrxxMap').setValue("bsrxm", bsrxm);
    $w('nsrxxMap').setValue("scjydz", scjydz);
    $w('nsrxxMap').setValue("bsrgddh", bsrgddh);
    $w('nsrxxMap').setValue("zgswskfjDm", zgswskfjDm);
    $w('nsrxxMap').setValue("shxydm", shxydm);
    $w('nsrxxMap').setValue("ynsrsbh", ynsrsbh);
    sfsl = 1;
    var ssqq = $w("nsrxxMap").getValue("ssqq");
    var ssqz = $w("nsrxxMap").getValue("ssqz");
    if (!$chk(ssqq) || "" == ssqq || !$chk(ssqz) || "" == ssqz) {
        ssqq = mrssqq;
        ssqz = mrssqz;
    }
    getKjzdba(ssqq, ssqz, "initSsq");
    $w('sbToolBar').setEnabled('next');
    $w("nsrxxMap").disable("nsrsbh");
    return;
}
//获取财务制度备案
function getKjzdba(q, z, callback) {
    $w("nsrcwzdxxList").reset();
    var queryBtn = new SwordSubmit();
    queryBtn.pushData("djxh", djxh);
    queryBtn.pushData("ssqq", q);
    queryBtn.pushData("ssqz", z);
    queryBtn.setCtrl(ctrl + "_queryKjzdzzDmByDjxh");
    queryBtn.setFunction("onSuccess", callback);
    queryBtn.submit();
}

/**
 * @description 初始所属期起止
 * @param req
 * @param resData
 * 
 */
function initSsq(req, resData) {
    kjzdbaCl(req, resData);
    var form = $w("nsrxxMap");
    var ssqq = pc.getResData("ssqq", resData);
    var ssqz = pc.getResData("ssqz", resData);
    var zlbsxlDm = pc.getResData("zlbsxlDm", resData);
    form.setValue('ssqq', ssqq.value);
    form.setValue('ssqz', ssqz.value);
    if ($chk(zlbsxlDm) && $chk(zlbsxlDm.value)) {
        form.setValue('zlbsxlDm', zlbsxlDm.value);
        checkByXlDm();
    } else {
        if (needCwzdba()) {
            var nsrcwzdxxList = $w("nsrcwzdxxList").getAllGridData().trs;
            if (nsrcwzdxxList.length == 0) {
                if ($chk(kjzdbabz) && kjzdbabz == "Y" && kjzdbabz != undefined) {
                    swordAlert('该纳税人没有财务会计制度备案信息,请及时联系主管税务机关进行备案!');
                    $w('sbToolBar').setDisabled('next');
                    $w("nsrxxMap").disable();
                    return;
                }
                //			if((!$chk(kjzdbabz) && kjzdbabz=="N" && kjzdbabz == undefined) || (!$chk(kjzdbz) && kjzdbz=="N" && kjzdbz == undefined)){
                //				swordAlert('该纳税人在此期间没有财务会计制度备案信息!');
                //			 } 
                if ($chk(kjzdbz) && kjzdbz == "Y" && kjzdbz != undefined) {
                    swordConfirm("该纳税人没有财务会计制度备案信息,请先进行财务会计制度备案才能进行纳税申报", {
                        okBtnName: "是",
                        cancelBtnName: "否",
                        onOk: function () {
                            swordAlertIframe("/sword?ctrl=NsrdGyEntranceCtrl_initView&lcswsxDm=LCSXA011030001", {
                                titleName: '财务会计制度备案——待审批预申请',
                                width: 1000,
                                height: 450,
                                isMax: 'true',
                                param: window
                            });
                            $w('sbToolBar').setDisabled('next');
                            $w("nsrxxMap").disable();
                        },
                        onCancel: function () {
                            $w('sbToolBar').setDisabled('next');
                            $w("nsrxxMap").disable();
                            return;
                        }
                    })
                }
                //swordAlert('该纳税人在此期间没有财务会计制度备案信息!');
            }

        }
    }
}

/**
 * 检查是否需要报送合并财务报表
 */
var sfbshbbb;
function checkSfbshbbb() {
    sfbshbbb = "N";
    var zlbsdlDm = $w("nsrxxMap").getValue('zlbsdlDm').code;
    if ("ZL1001" == zlbsdlDm) {
        var ssqq = $w("nsrxxMap").getValue("ssqq");
        var ssqz = $w("nsrxxMap").getValue("ssqz");
        if (ssqz.substring(5, 7) == '12') {
            var submit = new SwordSubmit();
            submit.pushData("djxh", djxh);
            submit.pushData("ssqq", ssqq);
            submit.pushData("ssqz", ssqz);
            submit.setCtrl(ctrl + "_querySfbshbbb");
            submit.setFunction("onSuccess", "checkSfbshbbbSuccess");
            submit.submit();
        }
    }
}

function checkSfbshbbbSuccess(req, resData) {
    sfbshbbb = resData.getAttr('sfbshbbb');
}

//资料报送大类改变的时候调用----
// 当参与者选择的资料报送大类为财务报告报送与信息采集，系统从后台获取纳税人的适用会计制度代码、报表报送期代码、会计报表等信息
function getNsrcwzdxx() {
    var ssqz = $w("nsrxxMap").getValue("ssqz");
    var ssqq = $w("nsrxxMap").getValue("ssqq");
    var zlbsdlDm = $w("nsrxxMap").getValue("zlbsdlDm").code;

    //满足业务组提出需求暂时放开此监控
    if (sfsl == 1) {
        if (zlbsdlDm == "ZL1001") {
            if (!$chk(ssqq) || "" == ssqq || !$chk(ssqz) || "" == ssqz) {
                $w("nsrxxMap").setValue("zlbsdlDm", "");
                swordAlert("请先填写所属期！");
                return;
            }
            getKjzdba(ssqq, ssqq, "ssqzKjzdzzSuccess");//根据选择的所属期起重新查询会计制度备案
            //var checkNsrcwzdxxBtn = $w("checkNsrcwzdxxBtn");
            //checkNsrcwzdxxBtn.pushData("ssqq", ssqq);
            //checkNsrcwzdxxBtn.pushData("ssqz", ssqz);
            //checkNsrcwzdxxBtn.setCtrl(ctrl + "_getNsrcwzdxx");
            //checkNsrcwzdxxBtn.submit();
        }
    }
    if (cwkjzdbabj = true) {
        $w('sbToolBar').setEnabled('next');
    } else {
        $w('sbToolBar').setDisable('next');
    }
}

function nsrcwzdxxOnSuccess(req, resData) {
    var codeMesg = pc.getResData("codeMesg", resData);
    if (codeMesg != null && codeMesg != "" && codeMesg != undefined) {
        swordAlert(codeMesg.value);
        //		return;
    }
    var sfGetZlbsbdlb = true;
    var yhdCode = pc.getResData("yhdCode", resData);
    if (yhdCode != null && yhdCode != "" && yhdCode != undefined) {
        $w("nsrxxMap").setValue("sfyhd", "Y"); //已核定
        //getSsqz();
    } else {
        $w("nsrxxMap").setValue("sfyhd", "N");
        if (sfGetZlbsbdlb) {
            getZlbsbdlb();
        }
    }
    setJdSsq();
    checkByXlDm();
}

function getSsqz() {
    var nsqx_dm = "05";
    var zlbsdlDm = $w("nsrxxMap").getValue("zlbsdlDm").code;
    if ($chk(djxh) && "ZL1001" == zlbsdlDm && "N" == _gIsQhjt) {
        var ssqq = $w('nsrxxMap').getValue("ssqq");
        getKjzdba(ssqq, ssqq, "ssqzKjzdzzSuccess");//根据选择的所属期起重新查询会计制度备案
    } else {
        jsskssqz(nsqx_dm);
    }
    $w('sbToolBar').setEnabled('next');
}
/**
 * 计算所属期止
 * @param nsqx_dm
 */
function jsskssqz(nsqx_dm) {
    var ssqzBtn = new SwordSubmit();
    ssqzBtn.setCtrl("SBGyCtrl" + "_jsskssqz");
    ssqzBtn.setFunction('onSuccess', 'loadBaseInfo1');
    ssqzBtn.pushData('skssqq', $w('nsrxxMap').getValue("ssqq"));
    ssqzBtn.pushData('nsqxdm', nsqx_dm);
    ssqzBtn.submit();
}

/**
 * 查询会计制度备案处理
 * @param req
 * @param resData
 */
function kjzdbaCl(req, resData) {
    $w("nsrcwzdxxList").initData(pc.getResData("nsrcwzdxxList", resData))
    kjzdzzDm = pc.getResData("kjzdzzDm", resData);
    yxqq = resData.getAttr("yxqq");
    yxqz = resData.getAttr("yxqz");
    var form = $w("nsrxxMap");
    if ($chk(kjzdzzDm) && kjzdzzDm != '' && $chk(kjzdzzDm.value)) {
        form.setValue('kjzdzzDm', kjzdzzDm.value);
    } else {
        form.setValue('kjzdzzDm', "");
    }

    _gIsQhjt = resData.getAttr("QfjtBz");
    var zcfzbBblx = resData.getAttr("zcfzbCwkjbblx");
    if ($chk(zcfzbBblx)) {
        _gZcfzbCwkjbblxDm = zcfzbBblx;

    } else {
        _gZcfzbCwkjbblxDm = "";
    }
    bsqxDm = getNsqxDmFromCwkjbblx(_gZcfzbCwkjbblxDm);
}
/**
 * @description 计算所属期止查询会计制度准则后处理
 * @param req
 * @param resData
 *
 */
function ssqzKjzdzzSuccess(req, resData) {
    kjzdbaCl(req, resData);
    bsqxDm = getNsqxDmFromCwkjbblx(_gZcfzbCwkjbblxDm);
    jsskssqz(bsqxDm);
}

var autossqz;
function loadBaseInfo1(req, resData) {
    autossqz = resData.getAttr('skssqz');
    $w("nsrxxMap").setValue('ssqz', autossqz);
    checkSsqz();
}

//所属期止变动时校验--------------------------------------------------------------------------------------------------------------------
function changessqz(xlChangeBz) {
    var ssqz = $w("nsrxxMap").getValue("ssqz");
    var ssqq = $w("nsrxxMap").getValue("ssqq");
    if (!compareDate(ssqq, ssqz)) {
        swordAlert("所属期起必须在所属期止前");
        $w("nsrxxMap").setValue("ssqz", "");
        return;
    }

    var year1 = ssqq.substr(0, 4);
    var year2 = ssqz.substr(0, 4);
    var month1 = ssqq.substr(5, 2);
    var month2 = ssqz.substr(5, 2);
    var len = year2 - year1 + month2 - month1;
    if (year1 != year2) {
        swordAlert("所属期止必须与所属期起在同一年份！");
        $w("nsrxxMap").setValue("ssqz", autossqz);
        return;
    }

    var zlbsdlDm = $w("nsrxxMap").getValue("zlbsdlDm").code;
    // 非千户集体时才校验是否按财务会计制度备案校验
    if (needCwzdba()) {
        // 判断是否超过财务制度备案的有效期，若超出不校验属期
        //var chkPass = false;
        //if ($chk(yxqq) && "" != yxqq && $chk(yxqz) && "" != yxqz
        //	&& compareDate(yxqq, ssqq) && compareDate(ssqz, yxqz)) {
        //	chkPass = true;
        //}

        //chkPass = chkPass ? checkSsqz(xlChangeBz) : false;
        if (checkSsqz(xlChangeBz)) {
            //checkSfazhdzqbs();
        }
    }
}

var cwkjbblxDm;
//设置季度所属期
var bbbsqDm;
function setJdSsq() {
    // 非千户集体时才根据财务会计制度备案中财务会计报表类型代码进行设置
    if ("N" != _gIsQhjt && "ZL1001" != zlbsdlDm) {
        return;
    }

    var ssqq = $w("nsrxxMap").getValue("ssqq");
    var ssqz = $w("nsrxxMap").getValue("ssqz");
    var nsrcwzdxxList = $w("nsrcwzdxxList").getAllGridData().trs;
    try {
        if ($chk(_gZcfzbCwkjbblxDm) && "" != _gZcfzbCwkjbblxDm) {
            cwkjbblxDm = _gZcfzbCwkjbblxDm;
        } else {
            cwkjbblxDm = nsrcwzdxxList[0].tds.cwkjbblxDm.value;
        }
    } catch (e) {
        cwkjbblxDm = null;
    }
    if (cwkjbblxDm == null || cwkjbblxDm == undefined || cwkjbblxDm == "") {
        return;
    }
    if (parseInt(cwkjbblxDm) != 2) {
        return;
    }
    //所属期起止初始化为季度
    var jdArr = [1, 4, 7, 10];
    var oneday = 1000 * 60 * 60 * 24;
    var qDates = splitStr(ssqq);
    var zDates = splitStr(ssqz);
    if (parseInt(zDates[0], 10) != parseInt(qDates[0], 10) || parseInt(zDates[1], 10) - parseInt(qDates[1], 10) != 2) {
        var ssqqDate = new Date(parseInt(qDates[0], 10), parseInt(qDates[1], 10), parseInt(qDates[2], 10));
        ssqqDate.setDate(1);
        ssqqDate.setTime(ssqqDate.getTime() - (oneday * 32 * 2));
        ssqqDate.setMonth(jdArr[parseInt(ssqqDate.getMonth() / 3, 10)] - 1, 1);
        var yearStr = ssqqDate.getFullYear() + "";
        var monthStr = (ssqqDate.getMonth() + 1) + "";
        var dateStr = "01";
        if (monthStr.length == 1) {
            monthStr = "0" + "" + monthStr;
        }
        ssqq = yearStr + "-" + monthStr + "-" + dateStr;//上季度起
        $w("nsrxxMap").setValue("ssqq", ssqq);

        ssqqDate.setFullYear(yearStr, parseInt(monthStr, 10) + 1, 1);
        ssqqDate.setTime(ssqqDate.getTime() + (oneday * 32));
        ssqqDate.setDate(1);
        ssqqDate.setTime(ssqqDate.getTime() - oneday);

        yearStr = ssqqDate.getFullYear() + "";
        monthStr = (ssqqDate.getMonth() + 1) + "";
        dateStr = ssqqDate.getDate() + "";
        if (monthStr.length == 1) {
            monthStr = "0" + "" + monthStr;
        }
        ssqz = yearStr + "-" + monthStr + "-" + dateStr;//上季度末
        $w("nsrxxMap").setValue("ssqz", ssqz);
    }
    getSsqz();
}

/**
 * @description 获取纳税期限代码
 * 
 */
function getNsqxDmFromCwkjbblx(cwkjbblx) {
    bsqxDm = "06"; // 默认
    if (!$chk(cwkjbblx) || "" == cwkjbblx) {
        return bsqxDm;
    }

    var cwkjbblxInt = parseInt(cwkjbblx);
    if (1 == cwkjbblxInt) { // 月报表
        bsqxDm = "06";
    } else if (2 == cwkjbblxInt) { // 季报表
        bsqxDm = "08";
    } else if (3 == cwkjbblxInt) { // 年报表
        bsqxDm = "10";
    } else if (7 == cwkjbblxInt) {
        bsqxDm = "11"; //
    }

    return bsqxDm;
}

/**
 * 校验所属期止
 **/
function checkSsqz(xlChangeBz) {
    if (!needCwzdba()) {
        return true;
    }
    var ssqq = $w("nsrxxMap").getValue("ssqq");
    var ssqz = $w("nsrxxMap").getValue("ssqz");
    var today = $w("slxxForm").getValue("lrrq");
    var nsrcwzdxxList = $w("nsrcwzdxxList").getAllGridData().trs;
    if (nsrcwzdxxList.length == 0) {
        if ($chk(kjzdbabz) && kjzdbabz == "Y" && kjzdbabz != undefined) {
            swordAlert('该纳税人没有财务会计制度备案信息,请及时联系主管税务机关进行备案!');
            $w('sbToolBar').setDisabled('next');
            $w("nsrxxMap").disable();
            return;
        }
        if ($chk(kjzdbz) && kjzdbz == "Y" && kjzdbz != undefined) {
            swordConfirm("该纳税人没有财务会计制度备案信息,请先进行财务会计制度备案才能进行纳税申报", {
                okBtnName: "是",
                cancelBtnName: "否",
                onOk: function () {
                    swordAlertIframe("/sword?ctrl=NsrdGyEntranceCtrl_initView&lcswsxDm=LCSXA011030001", {
                        titleName: '财务会计制度备案——待审批预申请',
                        width: 1000,
                        height: 450,
                        isMax: 'true',
                        param: window
                    });
                    $w('sbToolBar').setDisabled('next');
                    $w("nsrxxMap").disable();
                },
                onCancel: function () {
                    $w('sbToolBar').setDisabled('next');
                    $w("nsrxxMap").disable();
                    return;
                }
            })
        }
        //swordAlert('该纳税人在此期间没有财务会计制度备案信息!');
        //	return;
    }
    var bblxStr = "";
    for (var i = 0; i < nsrcwzdxxList.length; i++) {
        var cwkjbblxDmTemp = nsrcwzdxxList[i].tds.cwkjbblxDm.value;
        var bsqxDmTemp = getNsqxDmFromCwkjbblx(cwkjbblxDmTemp);
        var retStr = qzDateCheck(ssqq, ssqz, today, bsqxDmTemp);
        if ("ok" == retStr) {
            cwkjbblxDm = cwkjbblxDmTemp;
            bsqxDm = bsqxDmTemp;
            return true;
        }
        if ("02" == cwkjbblxDmTemp) {
            if (bblxStr.indexOf("季报表") == -1) {
                bblxStr += "季报表,";
            }
        } else if ("03" == cwkjbblxDmTemp) {
            if (bblxStr.indexOf("年报表") == -1) {
                bblxStr += "年报表,";
            }
        } else {
            if (bblxStr.indexOf("月报表") == -1) {
                bblxStr += "月报表,"
            }
        }
    }
    //所属期止校验没通过提示
    $w("nsrxxMap").setValue("ssqz", "");
    swordAlert("该纳税人的财务会计制度备案为" + bblxStr + "请填写正确的所属期起止！");
    return false;
}

// 系统会根据所属期起和所属期止进行判断，得出财务报表报送的是年报、季报、月报。
// 假如得出结果是季报，这时系统会检测上一个季度纳税人是否报送了季报，如果查询到上一个季度的季报已报送则不进行提示；
// 如果查询上个季度报送记录不存在，提示“纳税人未按核定周期报送资料”，返回到页面。
function checkSfazhdzqbs() {
    if (sfsl == 1) {
        var zlbsdlDm = $w("nsrxxMap").getValue("zlbsdlDm").code;
        if (zlbsdlDm == "ZL1001" && cwkjbblxDm != null && cwkjbblxDm != "" && cwkjbblxDm != undefined) {
            var zlbsdlDm = $w("nsrxxMap").getValue("zlbsdlDm").code;
            var checkSfazhdzqbsBtn = $w("checkSfazhdzqbsBtn");
            checkSfazhdzqbsBtn.setCtrl(ctrl + "_checkSfazhdzqbs");
            checkSfazhdzqbsBtn.pushData("cwkjbblxDm", cwkjbblxDm);
            checkSfazhdzqbsBtn.submit();
        }
    }
    getZlbsbdlb();
}

function checkSfazhdzqbsOnSuccess(req, resData) {
    var zlbsdlDm = $w("nsrxxMap").getValue("zlbsdlDm").code;
    var hdzqCode = pc.getResData("hdzqCode", resData);
    //只有报送代码为财务会计制度报表时才进行校验
    if (hdzqCode != null && hdzqCode != "" && hdzqCode != undefined
			&& zlbsdlDm == "ZL1001") {
        swordAlert("纳税人未按核定周期报送资料");
        return;
    }

}

// 系统从后台来获取纳税人应该报送的资料清单，并返回到页面上。
function getZlbsbdlb() {
    $w('sbToolBar').setEnabled('next');
    //$w('sbToolBar').setEnabled('save');
    pc.getWidget("yhdzlGrid").reset();
    pc.getWidget("whdzlGrid").reset();
    //	$w('sbToolBar').setDisabled('save');
    if (sfsl == 1) {
        var getZlbsbdlbBtn = $w("getZlbsbdlbBtn");
        //查看上上期是否报送 财务会计为强制类型
        //		getZlbsbdlbBtn.pushData("djrq", djrq);
        getZlbsbdlbBtn.setCtrl(ctrl + "_getZlbsbdlb")
        getZlbsbdlbBtn.submit();
    }


}
function getZlbsbdlbSuccess(req, resData) {
    var jybj = pc.getResData("jybj", resData);
    var zlsl = pc.getResData("zlsl", resData);

    if (zlsl != null && zlsl != "" && zlsl != undefined) {
        $w("nsrxxMap").setValue("zlsl", parseInt(zlsl.value));
        //将所有呈现的表单全部选中
        var yhdzlGrid = $w('yhdzlGrid');
        var yhdzlGriddataDiv = yhdzlGrid.dataDiv();
        var yhdzchildren = yhdzlGriddataDiv.getChildren();
        for (var i = 0; i < yhdzchildren.length; i++) {
            yhdzchildren[i].getElement("input[name='sftj']").set("checked",
					true);
        }
        var whdzlGrid = $w('whdzlGrid');
        var whdzlGriddataDiv = whdzlGrid.dataDiv();
        var whdchildren = whdzlGriddataDiv.getChildren();
        for (var i = 0; i < whdchildren.length; i++) {
            whdchildren[i].getElement("input[name='sftj']")
					.set("checked", true);
        }
    } else {
        $w("nsrxxMap").setValue("zlsl", "");
    }
    //$w('sbToolBar').setEnabled('save');

}

//小类改变时监控--------------------------------------------------------------------------------------------------------
function checkByXlDm(xlChangeBz) {
    var nsrxxForm = $w("nsrxxMap");
    var ssqq = nsrxxForm.getValue("ssqq");
    var ssqz = nsrxxForm.getValue("ssqz");
    if (!$chk(ssqq) || "" == ssqq || !$chk(ssqz) || "" == ssqz) {
        nsrxxForm.setValue("zlbsxlDm", "");
        swordAlert("请先填写所属期！");
        return;
    }

    //备案类型监控,针对财务报告报送与信息采集大类进行监控
    checkNsrcwkjzdxx();
    /**
	 * Desc:针对企业集团
	 * Date:2012-8-6 am 10:02
	 * Author:侯凯
	 * Content:对企业集团数据采集的资格校验
	 * 
	 */
    zlbsxlDm = $w("nsrxxMap").getValue("zlbsxlDm").code;
    if (zlbsxlDm == 'ZL1004003') {
        djxh = $w("nsrxxMap").getValue("djxh");
        var newBtn = new SwordSubmit();
        newBtn.pushData("djxh", djxh);
        newBtn.setCtrl(ctrl + "_gcheckQyjtcjzg");
        newBtn.setFunction('onSuccess', 'checkSuccess');
        newBtn.submit();
    }
    //	//农民专业合作社财务会计特殊监控
    //	if(zlbsxlDm == 'ZL1001015'){
    //		var newBtn = new SwordSubmit();
    //		newBtn.pushData("djxh", djxh);
    //		newBtn.pushData("djrq", djrq);
    //		newBtn.setCtrl(ctrl + "_jknmzyhzs");
    //		newBtn.setFunction('onSuccess', 'checkSuccess');
    //		newBtn.submit();
    //	}
    $w("nsrxxMap").disable("dcnd");
    /**
	 * Desc:针对税收调查
	 * Date:2012-8-7 pm 14:37
	 * Author:侯凯
	 * Content:对是否做过税收调查企业认定
	 * 
	 */
    if (zlbsxlDm == 'ZL1004002') {
        $w("nsrxxMap").enable("dcnd");
    }
    /**
	 * Desc:针对重点税源
	 * Date:2012-8-7 pm 15:05
	 * Author:侯凯
	 * Content:纳税人是否做过重点税源监控纳税人认定
	 * 
	 */
    if (zlbsxlDm == 'ZL1005001') {
        $w("nsrxxMap").enable("dcnd");
    }
    if (xyh) {
        sfNext = false;
    }
    //获取报送资料清单
    if (sfNext) {
        getZlbsbdlb();
    }
    //changessqz(xlChangeBz);
    //	getNsrcwzdxx();
}


/**
 * 校验是否做过认定    调查年度改变触发-------------------------------------------------------------------------------------------------
 */
function checkSfzgrd() {
    djxh = $w("nsrxxMap").getValue("djxh");
    zlbsxlDm = $w("nsrxxMap").getValue("zlbsxlDm").code;
    var zlbsdlDm = $w("nsrxxMap").getValue("zlbsdlDm").code;

    var dcnd = $w("nsrxxMap").getValue("dcnd").substr(0, 4);
    var ssqq = $w("nsrxxMap").getValue("ssqq").substr(0, 4);
    var ssqz = $w("nsrxxMap").getValue("ssqz").substr(0, 4);
    if (dcnd == null || dcnd == undefined || dcnd == "") {
        dcnd = ssqq;
    }
    if (ssqq > dcnd || ssqz < dcnd) {
        swordAlert("调查年度必须在所属期起后且在所属期止前");
        return;
    }
    if (zlbsdlDm == 'ZL1004' && zlbsxlDm == 'ZL1004002') {
        //校验是否做过税收调查企业认定
        var newBtn = new SwordSubmit();
        newBtn.pushData("djxh", djxh);
        newBtn.pushData("dcnd", dcnd);
        newBtn.setCtrl(ctrl + "_checkSfzgSsdcqyrd");
        newBtn.setFunction('onSuccess', 'checkSsrdSuccess');
        newBtn.submit();
    } else if (zlbsdlDm == 'ZL1005' && zlbsxlDm == 'ZL1005001') {
        //校验那是人是否做过重点税源监控认定
        var newBtn = new SwordSubmit();
        newBtn.pushData("djxh", djxh);
        newBtn.pushData("jknd", dcnd);
        newBtn.pushData("ssqq", $w("nsrxxMap").getValue("ssqq"));
        newBtn.pushData("ssqz", $w("nsrxxMap").getValue("ssqz"));
        //newBtn.setTid('PBS_SB151_checkSfzgZdsyjkrd');
        newBtn.setCtrl(ctrl + "_checkSfzgZdsyjkrd");
        newBtn.setFunction('onSuccess', 'checkZdsyjkrdSuccess');
        newBtn.submit();
    }
}
function checkSsrdSuccess(req, resData) {
    var reCode = pc.getResData("reCode", resData).value;
    if (reCode != "Y") {
        swordAlert('该纳税人不具备税收资料调查企业资格!');
        $w("nsrxxMap").setValue("dcnd", "");
        $w('sbToolBar').setDisabled('next');
        //return;
    }
}
function checkZdsyjkrdSuccess(req, resData) {
    var reCode = pc.getResData("reCode", resData).value;
    if (reCode != "Y") {
        swordAlert('该纳税人不具备重点税源监控企业资格!');
        $w("nsrxxMap").setValue("dcnd", "");
        $w('sbToolBar').setDisabled('next');
        //return;
    }
}
function checkSuccess(req, resData) {
    var reCode = pc.getResData("reCode", resData).value;
    if (reCode == "Y") {
        sfNext = true;
    } else {
        swordAlert('该纳税人不具备认定企业集团总部资格!');
        sfNext = false;
        $w('sbToolBar').setDisabled('next');
        //return;
    }
}
//用选择的小类对应的会计制度和纳税人扩展信息中的会计制度进行比对
//当纳税人选择的资料报送大类为财务报告报送与信息采集，并且系统不存在核定财务报表信息，
//则允许纳税人选择资料报送小类，这时才会触发事件，监控纳税人当前所选的适用会计制度和
//在做纳税人登记时的适用会计制度是否相符。
function checkNsrcwkjzdxx() {
    sfNext = true;
    //暂时修改为0
    if (sfsl == 1) {
        var zlbsdlDm = $w("nsrxxMap").getValue("zlbsdlDm").code;
        if (zlbsdlDm == "ZL1001") {
            var checkBalxByXlDmBtn = $w("checkBalxByXlDmBtn");
            checkBalxByXlDmBtn.setCtrl(ctrl + "_checkNsrcwkjzdxx");
            checkBalxByXlDmBtn.submit();
        }
    }

}
function checkBalxByXlDmOnSuccess(req, resData) {
    var balxCode = pc.getResData("balxCode", resData);
    if (balxCode != null && balxCode != "" && balxCode != undefined) {
        var yhdzlGrid = $w("yhdzlGrid");
        var whdzlGrid = $w("whdzlGrid");
        yhdzlGrid.clearData();
        whdzlGrid.clearData();
        //		sfNext = false ;
        //		swordConfirm("纳税人资料报送类别不匹配,是否继续?", {			
        //			okBtnName : "是",
        //			cancelBtnName : "否",
        //			onOk : function() {
        //				sfNext = true;
        //				$w('sbToolBar').setEnabled('save');
        //			},
        //			onCancel : function() {
        //				sfNext = false;
        //				$w('sbToolBar').setDisabled('save');
        //				return false;
        //			}
        //		});
    }
}

/**
 * 
 * @param {Object} req
 * @param {Object} resData
 */
function querySuccess(req, resData) {
    var reCode = pc.getResData("reCode", resData).value;
    if (reCode == "1") {
        if ($chk(tsxxkg) && tsxxkg == "Y" && tsxxkg != undefined) {
            msg = '该属期报表已报送，是否进行修改或作废重报？';
        } else {
            msg = '重复报送，是否进行更正';
        }
        swordConfirm(msg, {
            okBtnName: "是",
            cancelBtnName: "否",
            onCancel: function () {
                var check = lrRow.getElement("input[name='sftj']");
                check.set("checked", false);
            }
        });
    }
}
var jyzlsl = true;
function save() {
    swordAlert('模拟系统暂不支持财务报表报送！');
    //debugger;
    //var nsrxxMap = $w('nsrxxMap');
    //if (zlbsxlDm == 'ZL1005001') {
    //    var ssqqy = $w("nsrxxMap").getValue("ssqq").substr(5, 2);
    //    var ssqzy = $w("nsrxxMap").getValue("ssqz").substr(5, 2);
    //    if (ssqqy != ssqzy) {
    //        swordAlert("重点税源监控企业数据采集只能按月报送!");
    //        return;
    //    }
    //}
    //if (!nsrxxMap.validate()) {
    //    return;
    //}
    //var dcnd = $w("nsrxxMap").getValue("dcnd").substr(0, 4);
    //var ssqq1 = $w("nsrxxMap").getValue("ssqq").substr(0, 4);
    //var ssqz1 = $w("nsrxxMap").getValue("ssqz").substr(0, 4);
    //if (dcnd == null || dcnd == undefined || dcnd == "") {
    //    dcnd = ssqq1;
    //}

    //if (ssqq1 > dcnd || ssqz1 < dcnd) {
    //    swordAlert("调查年度必须在所属期起后且在所属期止前");
    //    return;
    //}
    //var ssqz = $w("nsrxxMap").getValue("ssqz");
    //var ssqq = $w("nsrxxMap").getValue("ssqq");
    //zlbsdlDm = $w("nsrxxMap").getValue("zlbsdlDm").code;
    ///*	if(zlbsdlDm== 'ZL1001'&&(kjzdzzDm.value==null||kjzdzzDm.value==""||(yxqq.value>ssqq||yxqz.value<ssqz)||yxqq.value==null||yxqz.value==null||yxqz.value==""|yxqq.value=="")){
    //            swordAlert("请先进行财务会计制度备案");
    //            cwkjzdbabj=false;
    //        return;		
    //    }*///满足业务组提出需求暂时放开此监控
    ////	querySqsfcj();	
    //if (!compareDate(ssqq, ssqz)) {
    //    swordAlert("所属期起必须在所属期止前");
    //    return;
    //}

    ////没有备案信息不监控纳税期限
    //var nsrcwzdxxList = $w("nsrcwzdxxList").getAllGridData().trs;
    //var jyStr = "ok";
    //var today = $w("slxxForm").getValue("lrrq");
    //if (nsrcwzdxxList.length == 0 || !needCwzdba()) {//没有会计制度备案信息
    //    jyStr = qzDateCheck(ssqq, ssqz, today, '');
    //} else {
    //    jyStr = qzDateCheck(ssqq, ssqz, today, bsqxDm);
    //}
    //if ("ok" != jyStr) { // 未通过校验
    //    swordAlert(jyStr);
    //    return;
    //}
    ////监控上期是否采集 （页面选择属期如果小于备案属期则不进行校验）&&(ssqq>=yxqq.value)&&(ssqz<=yxqz.value)
    ////if(ssqq>yxqq.value){
    ////		if(sqcjbj=="N"&&(zlbsdlDm=='ZL1001'||zlbsdlDm=='ZL1004')){
    ////			swordAlert("上期数据未采集");
    ////			return;
    ////		}
    ////}

    //if (zlbsdlDm == 'ZL1004' && zlbsxlDm == 'ZL1004002' || zlbsdlDm == 'ZL1005'
	//		&& zlbsxlDm == 'ZL1005001') {//如果是税收调查或者重点税源则要首先根据调查年度进行采集校验
    //    if ($w("nsrxxMap").getValue("dcnd") == null
	//			|| $w("nsrxxMap").getValue("dcnd") == "") {
    //        swordAlert('报送前,请先选择"调查年度"进行校验认定!');
    //        return;
    //    }
    //}
    ////必录项监控
    //var nsrxxFormJY = pc.getWidget('nsrxxMap');

    //if (!nsrxxFormJY.validate()) {
    //    $w('sbToolBar').setDisabled('next');
    //    return;
    //}
    //var zlsl = nsrxxFormJY.getValue("zlsl");
    //var yhdChecked = $w("yhdzlGrid").getCheckedData("sftj");
    //var yhdCheckedLength = yhdChecked.trs.length;
    //if (yhdCheckedLength > 0) {
    //    //有已经核定的表单信息
    //    if (parseInt(zlsl) != yhdCheckedLength) {
    //        swordAlert('资料数量和所要报送的表单数量不匹配!', {
    //            onOk: function () {
    //                nsrxxFormJY.getFieldEl("zlsl").focus();
    //            }
    //        });
    //        jyzlsl = false;
    //        return;
    //    } else {
    //        jyzlsl = true;
    //    }
    //    var grid = $w("yhdzlGrid");// 获取grid对象
    //    var dataDiv = grid.dataDiv();
    //    var children = dataDiv.getChildren();
    //    for (var i = 0; i < yhdCheckedLength; i++) {
    //        var hang = yhdChecked.trs[i].tds.xh.value;
    //        var cell = children[hang / 1 - 1].getCell("sftj");
    //        grid.updateCell(cell, "Y", "Y");
    //        var cell = children[hang / 1 - 1].getCell("sfbszl");
    //        grid.updateCell(cell, "Y", "Y");
    //        var pattern = new RegExp("^/sb");//以\sb开头进行匹配 如果不是以\sb开头则提示

    //        var ljwz = !$chk(yhdChecked.trs[i].tds.ljwz) ? ""
	//				: yhdChecked.trs[i].tds.ljwz.value;
    //        if (ljwz == "" || pattern.test(ljwz) == false) {

    //            //swordAlert("所选小类对应的报表不存在、请选择其它报表报送!");
    //            //return;
    //        }
    //    }
    //}
    //var whdChecked = $w("whdzlGrid").getCheckedData("sftj");
    //var whdCheckedLength = whdChecked.trs.length;
    //if (whdCheckedLength > 0) {
    //    //有未经核定的表单信息
    //    if (parseInt(zlsl) != whdCheckedLength) {
    //        swordAlert('资料数量和所要报送的表单数量不匹配!', {
    //            onOk: function () {
    //                nsrxxFormJY.getFieldEl("zlsl").focus();
    //            }
    //        });
    //        jyzlsl = false;
    //        return;
    //    } else {
    //        jyzlsl = true;
    //    }
    //    var grid = $w("whdzlGrid");// 获取grid对象
    //    var dataDiv = grid.dataDiv();
    //    var children = dataDiv.getChildren();
    //    for (var i = 0; i < whdCheckedLength; i++) {
    //        var hang = whdChecked.trs[i].tds.xh.value;
    //        var cell = children[hang / 1 - 1].getCell("sftj");
    //        grid.updateCell(cell, "Y", "Y");
    //        var cell = children[hang / 1 - 1].getCell("sfbszl");
    //        grid.updateCell(cell, "Y", "Y");
    //        var pattern = new RegExp("^/sb");//以/sb开头进行匹配 如果不是以/sb开头则提示
    //        var ljwz = !$chk(whdChecked.trs[i].tds.ljwz) ? ""
	//				: whdChecked.trs[i].tds.ljwz.value;
    //        if (ljwz == "" || pattern.test(ljwz) == false) {

    //            //swordAlert("所选小类对应的报表不存在、请选择其它报表报送!");
    //            //return;
    //        }
    //        //			if (ljwz == "" || pattern.test(ljwz) == false) {
    //        //				swordAlert("所选小类对应的报表不存在、请选择其它报表报送!");
    //        //				return;
    //        //			}
    //    }
    //}
    //if (yhdCheckedLength < 1 && whdCheckedLength < 1) {
    //    swordAlert("请选择需要报送的资料！");
    //    $w('bcBtn').stop();
    //    return;

    //}
    //if (jyzlsl) {
    //    var yhdtrs = $w("yhdzlGrid").getAllGridData().trs;
    //    for (var i = 0; i < yhdtrs.length; i++) {
    //        if (yhdtrs[i].tds.sfxcj.value == "Y") {
    //            flag = true;
    //        }
    //        if (yhdtrs[i].tds.sfxcj.value == "Y"
	//				&& yhdtrs[i].tds.sfbszl.value == "Y") {
    //            //取出bszldm 有且只有一条
    //            bszlDmTo = yhdtrs[i].tds.bszlDm.value;
    //            //zlbsuuidTo=yhdtrs[i].tds.zlbsuuid.value;
    //            urlTo = yhdtrs[i].tds.ljwz.value;
    //            bszlmcTo = yhdtrs[i].tds.bszlmc.value;
    //        }
    //    }
    //    var whdtrs = $w("whdzlGrid").getAllGridData().trs;

    //    for (var i = 0; i < whdtrs.length; i++) {

    //        if (whdtrs[i].tds.sfxcj.value == "Y") {
    //            flag = true;
    //        }
    //        if (whdtrs[i].tds.sfxcj.value == "Y"
	//				&& whdtrs[i].tds.sfbszl.value == "Y") {
    //            //取出bszldm 有且只有一条
    //            bszlDmTo = whdtrs[i].tds.bszlDm.value;
    //            //zlbsuuidTo=whdtrs[i].tds.zlbsuuid.value;
    //            urlTo = whdtrs[i].tds.ljwz.value;
    //            bszlmcTo = whdtrs[i].tds.bszlmc.value;
    //        }
    //    }
    //    var bcbtn = $w('saveBtn');
    //    bcbtn.pushData("bszlDm", bszlDmTo);
    //    bcbtn.pushData("ssqq", ssqq);
    //    bcbtn.pushData("ssqz", ssqz);
    //    bcbtn.pushData("hyDm", hyDm);
    //    bcbtn.pushData("djzclxDm", djzclxDm);
    //    bcbtn.setCtrl(ctrl + '_save');
    //    bcbtn.submit();
    //}
}
var urlTo, zlbsuuidTo, bszlmcTo, zlbsuuidOld;
function saveOnSuccess(req, resData) {
    debugger;
    zlbsuuidTo = resData.getAttr('zlbsuuidNew');
    zlbsuuidOld = resData.getAttr('zlbsuuidOld');
    //$w('sbToolBar').setDisabled('next');
    //效验是否报送合并报表
    checkSfbshbbb();
    if (sfbshbbb == "Y" && zlbsxlDm != "ZL1001045") {
        swordAlert("该纳税人需要报送合并报表", {
            onOk: function () {
                saveAfter();
            }
        });
    } else if (sfbshbbb == "YB" && zlbsxlDm != "ZL1001045") {
        swordAlert("该纳税人已报送合并报表", {
            onOk: function () {
                saveAfter();
            }
        });
    } else {
        saveAfter();
    }
}
function saveAfter() {
    var flag = false;
    var yhdtrs = $w("yhdzlGrid").getAllGridData().trs;
    for (var i = 0; i < yhdtrs.length; i++) {
        if (yhdtrs[i].tds.sfxcj.value == "Y") {
            flag = true;
        }
        if (yhdtrs[i].tds.sfxcj.value == "Y"
				&& yhdtrs[i].tds.sfbszl.value == "Y") {
            //取出bszldm 有且只有一条
            bszlDmTo = yhdtrs[i].tds.bszlDm.value;
            //zlbsuuidTo=yhdtrs[i].tds.zlbsuuid.value;
            urlTo = yhdtrs[i].tds.ljwz.value;
            bszlmcTo = yhdtrs[i].tds.bszlmc.value;
        }
    }
    var whdtrs = $w("whdzlGrid").getAllGridData().trs;

    for (var i = 0; i < whdtrs.length; i++) {

        if (whdtrs[i].tds.sfxcj.value == "Y") {
            flag = true;
        }
        if (whdtrs[i].tds.sfxcj.value == "Y"
				&& whdtrs[i].tds.sfbszl.value == "Y") {
            //取出bszldm 有且只有一条
            bszlDmTo = whdtrs[i].tds.bszlDm.value;
            //zlbsuuidTo=whdtrs[i].tds.zlbsuuid.value;
            urlTo = whdtrs[i].tds.ljwz.value;
            bszlmcTo = whdtrs[i].tds.bszlmc.value;
        }
    }
    if (flag) {
        //校验是否重复采集
        var nsrxxMap = $w("nsrxxMap").getSubmitData();
        var initBtn = new SwordSubmit();
        initBtn.pushData("zlbsuuid", zlbsuuidTo);
        initBtn.pushData("zlbsuuid", zlbsuuidOld);
        initBtn.pushData("bszlmc", bszlmcTo);
        initBtn.pushData("bszldm", bszlDmTo);
        initBtn.pushData(nsrxxMap);
        initBtn.setCtrl(ctrl + "_jysfcfcj");
        initBtn.setFunction("onSuccess", "querySuccess");
        initBtn.submit();

        //校验上期数据是否采集，倒过来写
        querySqsfcj();
    } else {
        swordAlertRight("受理成功");
    }
}
var cfcjbz;
/**
 * 
 * @param {Object} req
 * @param {Object} resData
 */

function querySqsfcj() {
    var bszlDm;
    var yhdtrs = $w("yhdzlGrid").getAllGridData().trs;
    for (var i = 0; i < yhdtrs.length; i++) {
        if (yhdtrs[i].tds.sfxcj.value == "Y"
			&& yhdtrs[i].tds.sfbszl.value == "Y") {
            //取出bszldm 有且只有一条
            bszlDm = yhdtrs[i].tds.bszlDm.value;
        }
    }
    var whdtrs = $w("whdzlGrid").getAllGridData().trs;
    for (var i = 0; i < whdtrs.length; i++) {

        if (whdtrs[i].tds.sfxcj.value == "Y") {
            flag = true;
        }
        if (whdtrs[i].tds.sfxcj.value == "Y"
			&& whdtrs[i].tds.sfbszl.value == "Y") {
            //取出bszldm 有且只有一条
            bszlDm = whdtrs[i].tds.bszlDm.value;
        }
    }
    var sqsfcjBtn = new SwordSubmit();
    var ssqz = $w("nsrxxMap").getValue("ssqz");
    var ssqq = $w("nsrxxMap").getValue("ssqq");
    sqsfcjBtn.pushData("ssqq", ssqq);
    sqsfcjBtn.pushData("ssqz", ssqz);
    sqsfcjBtn.pushData("bszlDm", bszlDm);
    sqsfcjBtn.pushData("djxh", djxh);
    sqsfcjBtn.setCtrl(ctrl + "_querySqss");
    sqsfcjBtn.setFunction("onSuccess", "querySqsfcjSuccess");
    sqsfcjBtn.submit();
}

function querySqsfcjSuccess(req, resData) {
    sqcfdz = resData.getAttr("sqcfdz");
    var sntqcfdz = resData.getAttr("sntqcfdz");
    if (sqcfdz == null || sqcfdz == undefined) {
        sqcjbz = "N";
        if (reCode1 == "0") {
            if (bszl_btssqwcj.indexOf(bszlDmTo) >= 0) {

                cfcjbz = "";
                var openbdlrjmBtn = $w("openbdlrjmBtn");
                openbdlrjmBtn.pushData("zllx", zllx);
                openbdlrjmBtn.pushData("zlsl", zlsl);
                openbdlrjmBtn.pushData("zlbsxlDm", zlbsxlDm);
                openbdlrjmBtn.pushData("zlbsdlDm", zlbsdlDm);
                openbdlrjmBtn.pushData("cfdz", "1");
                openbdlrjmBtn.pushData("cfcjbz", cfcjbz);
                openbdlrjmBtn.pushData("ljwz", urlTo);
                openbdlrjmBtn.pushData("bszlDm", bszlDmTo);
                openbdlrjmBtn.pushData("bszlmc", bszlmcTo);
                openbdlrjmBtn.pushData("sfcfcj", 'N');
                openbdlrjmBtn.pushData("hyDm", hyDm);
                openbdlrjmBtn.pushData("djzclxDm", djzclxDm);
                openbdlrjmBtn.pushData("djrq", djrq);
                openbdlrjmBtn.pushData("zcdz", zcdz);
                openbdlrjmBtn.pushData("gdslxDm", gdslxDm);
                openbdlrjmBtn.pushData("zgswjmc", zgswjmc);
                openbdlrjmBtn.pushData("zlbsuuid", zlbsuuidTo);
                openbdlrjmBtn.pushData("bsfsDm", bsfsDm);
                openbdlrjmBtn.pushData("sqcfdz", sqcfdz);
                openbdlrjmBtn.pushData("sntqcfdz", sntqcfdz);
                openbdlrjmBtn.setCtrl(ctrl + '_initBd');

                swordAlertIframe('', {
                    titleName: "表单数据录入",
                    width: 900,
                    height: 400,
                    param: window,
                    isNormal: 'true',
                    isMax: 'true',
                    isClose: 'true',
                    isMin: "true",
                    reset: fillreset, //父页面下一户方法传给子页面
                    submit: openbdlrjmBtn
                });

            }
            else {
                swordAlert("以前属期有未采集的财务报表", {
                    onOk: function () {
                        cfcjbz = "";
                        var openbdlrjmBtn = $w("openbdlrjmBtn");
                        openbdlrjmBtn.pushData("zllx", zllx);
                        openbdlrjmBtn.pushData("zlsl", zlsl);
                        openbdlrjmBtn.pushData("zlbsxlDm", zlbsxlDm);
                        openbdlrjmBtn.pushData("zlbsdlDm", zlbsdlDm);
                        openbdlrjmBtn.pushData("cfdz", "1");
                        openbdlrjmBtn.pushData("cfcjbz", cfcjbz);
                        openbdlrjmBtn.pushData("ljwz", urlTo);
                        openbdlrjmBtn.pushData("bszlDm", bszlDmTo);
                        openbdlrjmBtn.pushData("bszlmc", bszlmcTo);
                        openbdlrjmBtn.pushData("sfcfcj", 'N');
                        openbdlrjmBtn.pushData("hyDm", hyDm);
                        openbdlrjmBtn.pushData("djzclxDm", djzclxDm);
                        openbdlrjmBtn.pushData("djrq", djrq);
                        openbdlrjmBtn.pushData("zcdz", zcdz);
                        openbdlrjmBtn.pushData("gdslxDm", gdslxDm);
                        openbdlrjmBtn.pushData("zgswjmc", zgswjmc);
                        openbdlrjmBtn.pushData("zlbsuuid", zlbsuuidTo);
                        openbdlrjmBtn.pushData("bsfsDm", bsfsDm);
                        openbdlrjmBtn.pushData("sqcfdz", sqcfdz);
                        openbdlrjmBtn.pushData("sntqcfdz", sntqcfdz);
                        openbdlrjmBtn.setCtrl(ctrl + '_initBd');

                        swordAlertIframe('', {
                            titleName: "表单数据录入",
                            width: 900,
                            height: 400,
                            param: window,
                            isNormal: 'true',
                            isMax: 'true',
                            isClose: 'true',
                            isMin: "true",
                            reset: fillreset, //父页面下一户方法传给子页面
                            submit: openbdlrjmBtn
                        });

                    }
                });
            }


        } else if (reCode1 == "1") {
            if (bszl_btssqwcj.indexOf(bszlDmTo) >= 0) {
            }
            else {
                swordAlert("以前属期有未采集的财务报表");
            }
        }
    } else {
        if (reCode1 == "0") {
            cfcjbz = "";
            var openbdlrjmBtn = $w("openbdlrjmBtn");
            openbdlrjmBtn.pushData("zllx", zllx);
            openbdlrjmBtn.pushData("zlsl", zlsl);
            openbdlrjmBtn.pushData("zlbsxlDm", zlbsxlDm);
            openbdlrjmBtn.pushData("zlbsdlDm", zlbsdlDm);
            openbdlrjmBtn.pushData("cfdz", "1");
            openbdlrjmBtn.pushData("cfcjbz", cfcjbz);
            openbdlrjmBtn.pushData("ljwz", urlTo);
            openbdlrjmBtn.pushData("bszlDm", bszlDmTo);
            openbdlrjmBtn.pushData("bszlmc", bszlmcTo);
            openbdlrjmBtn.pushData("sfcfcj", 'N');
            openbdlrjmBtn.pushData("hyDm", hyDm);
            openbdlrjmBtn.pushData("djzclxDm", djzclxDm);
            openbdlrjmBtn.pushData("djrq", djrq);
            openbdlrjmBtn.pushData("zcdz", zcdz);
            openbdlrjmBtn.pushData("gdslxDm", gdslxDm);
            openbdlrjmBtn.pushData("zgswjmc", zgswjmc);
            openbdlrjmBtn.pushData("zlbsuuid", zlbsuuidTo);
            openbdlrjmBtn.pushData("bsfsDm", bsfsDm);
            openbdlrjmBtn.pushData("sqcfdz", sqcfdz);
            openbdlrjmBtn.setCtrl(ctrl + '_initBd');

            swordAlertIframe('', {
                titleName: "表单数据录入",
                width: 900,
                height: 400,
                param: window,
                isNormal: 'true',
                isMax: 'true',
                isClose: 'true',
                isMin: "true",
                reset: fillreset, //父页面下一户方法传给子页面
                submit: openbdlrjmBtn
            });
        }
    }
}
function querySuccess(req, resData) {
    reCode1 = pc.getResData("reCode", resData).value;
    zllx = $w("nsrxxMap").getValue('zllx').code;
    zlsl = $w("nsrxxMap").getValue('zlsl');
    //zlbsxlDm = $w("nsrxxMap").getValue('zlbsxlDm').code;
    var zlbsxlMc = $w("nsrxxMap").getValue('zlbsxlDm').caption;
    var zlbsdlDm = $w("nsrxxMap").getValue('zlbsdlDm').code;
    var ssqzy = $w("nsrxxMap").getValue("ssqz").substr(5, 2);//所属起止月份
    bsfsDm = "";
    if (ssqzy == 1 || ssqzy == 2 || ssqzy == 4 || ssqzy == 5 || ssqzy == 7 || ssqzy == 8 || ssqzy == 10 || ssqzy == 11) {
        bsfsDm = "0";//只能报月报
    } else if (ssqzy == 3 || ssqzy == 9) {
        bsfsDm = "1";//只能同时报月报和季报
    } else if (ssqzy == 6) {
        bsfsDm = "2";//只能同时报月报、季报、半年报
    } else {
        bsfsDm = "3";//能同时报月报、季报、半年报和年报
    }

    var fddbrxm = $w("nsrxxMap").getValue('fddbrxm');
    var ssqq = $w("nsrxxMap").getValue('ssqq');
    var ssqz = $w("nsrxxMap").getValue('ssqz');
    if (reCode1 == "1") {
        var msg = "";
        if ($chk(tsxxkg) && tsxxkg == "Y" && tsxxkg != undefined) {
            msg = '该属期报表已报送，是否进行修改或作废重报？';
        } else {
            msg = '重复采集，是否进行更正';
        }
        swordConfirm(msg, {
            okBtnName: "是",
            cancelBtnName: "否",
            onOk: function () {
                if (zlbshtsqkg == "Y") {
                    var initBtn = new SwordSubmit();
                    initBtn.pushData("sxid", zlbsuuidOld);
                    initBtn.pushData("ssqq", ssqq);
                    initBtn.pushData("ssqz", ssqq);
                    initBtn.pushData("zlbsxlDm", $w("nsrxxMap").getValue('zlbsxlDm').code);
                    initBtn.setCtrl("BszlhtCtrl_getBszlspXX");
                    //					initBtn.options.async= "false";
                    initBtn.setFunction("onSuccess", "spSuccessAfter");
                    initBtn.submit();

                } else {
                    cfcjbz = "Y";
                    var newBtn = $w("sfcfbsBtn1");
                    newBtn.pushData("zllx", zllx);
                    newBtn.pushData("zlsl", zlsl);
                    newBtn.pushData("zlbsxlDm", zlbsxlDm);
                    newBtn.pushData("zlbsxlMc", zlbsxlMc);
                    newBtn.pushData("zlbsdlDm", zlbsdlDm);
                    newBtn.pushData("djzclxDm", djzclxDm);
                    newBtn.pushData("fddbrxm", fddbrxm);
                    newBtn.pushData("djzclxDm", djzclxDm);
                    newBtn.pushData("cfcjbz", cfcjbz);
                    newBtn.pushData("ljwz", urlTo);
                    newBtn.pushData("bszlDm", bszlDmTo);
                    newBtn.pushData("bszlmc", bszlmcTo);
                    newBtn.pushData("zlbsuuid", zlbsuuidTo);
                    newBtn.pushData("zlbsuuidOld", zlbsuuidOld);
                    newBtn.pushData("sqcfdz", sqcfdz);
                    newBtn.pushData("sfcfcj", "Y");
                    newBtn.pushData("bsfsDm", bsfsDm);
                    newBtn.setCtrl(ctrl + '_cfcjXx');
                    var popbox = swordAlertIframe('', {
                        titleName: "资料采集更正信息",
                        width: "100%",
                        height: 500,
                        param: window,
                        isNormal: 'true',
                        isMax: 'true',
                        isClose: 'true',
                        isMin: "true",
                        //max : "true",
                        reset: fillreset, //父页面下一户方法传给子页面
                        submit: newBtn
                    });
                    popbox.max();
                }
            },
            onCancel: function () {
                return;
            }
        });
    } else { }
    var zlbsdlDm = $w("nsrxxMap").getValue("zlbsdlDm").code;
}
function spSuccessAfter(req, resData) {
    var spzt = resData.getAttr('spzt');
    var spyj = resData.getAttr('spyj');
    var fwqsj = resData.getAttr('fwqsj');
    if (spzt == "01" || spzt == "02" || spzt == "03") {
        swordAlert("回退审批已经提交，请等待审批通过后修改!");
    } else if (spzt == "N") {
        swordAlert("回退审批未通过!\n审批意见：" + spyj);
    } else if (spzt == "Y") {
        cfcjbz = "Y";
        var newBtn = $w("sfcfbsBtn1");
        newBtn.pushData("zllx", zllx);
        newBtn.pushData("zlsl", zlsl);
        newBtn.pushData("zlbsxlDm", zlbsxlDm);
        newBtn.pushData("zlbsxlMc", $w("nsrxxMap").getValue('zlbsxlDm').caption);
        newBtn.pushData("zlbsdlDm", zlbsdlDm);
        newBtn.pushData("djzclxDm", djzclxDm);
        newBtn.pushData("fddbrxm", fddbrxm);
        newBtn.pushData("djzclxDm", djzclxDm);
        newBtn.pushData("cfcjbz", cfcjbz);
        newBtn.pushData("ljwz", urlTo);
        newBtn.pushData("bszlDm", bszlDmTo);
        newBtn.pushData("bszlmc", bszlmcTo);
        newBtn.pushData("zlbsuuid", zlbsuuidTo);
        newBtn.pushData("zlbsuuidOld", zlbsuuidOld);
        newBtn.pushData("sqcfdz", sqcfdz);
        newBtn.pushData("sfcfcj", "Y");
        newBtn.pushData("bsfsDm", bsfsDm);
        newBtn.setCtrl(ctrl + '_cfcjXx');
        var popbox = swordAlertIframe('', {
            titleName: "资料采集更正信息",
            width: "100%",
            height: 500,
            param: window,
            isNormal: 'true',
            isMax: 'true',
            isClose: 'true',
            isMin: "true",
            //max : "true",
            reset: fillreset, //父页面下一户方法传给子页面
            submit: newBtn
        });
        popbox.max();

    } else {
        var myDate = fwqsj;
        var curYear = myDate.substring(0, 4);
        var curMonth = myDate.substring(5, 7);
        var curDate = myDate.substring(8, 10);
        var byzqr = zqrl.substring(8, 10);
        var byzqy = zqrl.substring(5, 7);
        var byzqn = zqrl.substring(0, 4);
        var ssqqY = $w("nsrxxMap").getValue('ssqq').substring(5, 7);
        var ssqqN = $w("nsrxxMap").getValue('ssqq').substring(0, 4);
        var ssqY = $w("nsrxxMap").getValue('ssqz').substring(5, 7);
        var ssqN = $w("nsrxxMap").getValue('ssqz').substring(0, 4);
        var bsqx = "0";

        if (curYear == ssqN && ssqY == (byzqy - 1)) {
            //当期超过期限
            if (byzqr < curDate) {
                bsqx = "1";
            } else {
                cfcjbz = "Y";
                var newBtn = $w("sfcfbsBtn1");
                newBtn.pushData("zllx", zllx);
                newBtn.pushData("zlsl", zlsl);
                newBtn.pushData("zlbsxlDm", zlbsxlDm);
                newBtn.pushData("zlbsxlMc", $w("nsrxxMap").getValue('zlbsxlDm').caption);
                newBtn.pushData("zlbsdlDm", zlbsdlDm);
                newBtn.pushData("djzclxDm", djzclxDm);
                newBtn.pushData("fddbrxm", fddbrxm);
                newBtn.pushData("djzclxDm", djzclxDm);
                newBtn.pushData("cfcjbz", cfcjbz);
                newBtn.pushData("ljwz", urlTo);
                newBtn.pushData("bszlDm", bszlDmTo);
                newBtn.pushData("bszlmc", bszlmcTo);
                newBtn.pushData("zlbsuuid", zlbsuuidTo);
                newBtn.pushData("zlbsuuidOld", zlbsuuidOld);
                newBtn.pushData("sqcfdz", sqcfdz);
                newBtn.pushData("sfcfcj", "Y");
                newBtn.pushData("bsfsDm", bsfsDm);
                newBtn.setCtrl(ctrl + '_cfcjXx');
                var popbox = swordAlertIframe('', {
                    titleName: "资料采集更正信息",
                    width: "100%",
                    height: 500,
                    param: window,
                    isNormal: 'true',
                    isMax: 'true',
                    isClose: 'true',
                    isMin: "true",
                    //max : "true",
                    reset: fillreset, //父页面下一户方法传给子页面
                    submit: newBtn
                });
                popbox.max();
            }
        } else if (ssqqN == byzqn - 1 && ssqqN == ssqN && ssqqY == 1 && ssqY == 12 || ssqqN == byzqn) { //年报可以回退
            bsqx = "1";
        } else {
            //往期
            bsqx = "2";
        }
        if (bsqx == "1") {
            bszlhtsq();
        } else if (bsqx == "2") {
            swordAlert("此报送资料为往期报送资料，请在办税大厅修改。");
        }
    }
}
function bdlrOnSuccess() {
}

function bdlrOnError() {
}
function goCj() {
    var nsrxxMap = $w("nsrxxMap");
    var zllxmc = nsrxxMap.getValue("zllx").caption;
    var zlbsdlmc = nsrxxMap.getValue("zlbsdlDm").caption;
    var zlbsxlmc = nsrxxMap.getValue("zlbsxlDm").caption;
    var cjBtn = $w("cjBtn");
    cjBtn.pushData("zllxmc", zllxmc);
    cjBtn.pushData("zlbsdlmc", zlbsdlmc);
    cjBtn.pushData("zlbsxlmc", zlbsxlmc);
    cjBtn.setCtrl(ctrl + "_initcj");
    cjBtn.submit();
}
/**
 * @return
 */
function fillreset() {
    reset();
}
function reset() {
    pc.getWidget("yhdzlGrid").reset();
    pc.getWidget("whdzlGrid").reset();
    pc.getWidget("nsrcwzdxxList").reset();
    var nsrxxMap = $w("nsrxxMap");
    nsrxxMap.getFieldEl('nsrsbh').focus();
    nsrxxMap.setValue("nsrsbh", "");
    nsrxxMap.setValue("nsrmc", "");
    nsrxxMap.setValue("zlbsdlDm", mrzlbsdlDm);
    nsrxxMap.setValue("zlbsxlDm", "");
    nsrxxMap.setValue("zllx", "0");
    nsrxxMap.setValue("zlsl", "");
    nsrxxMap.setValue("ssqq", mrssqq);
    nsrxxMap.setValue("ssqz", mrssqz);
    nsrxxMap.setValue("djxh", "");
    nsrxxMap.setValue("nsrztDm", "");
    nsrxxMap.setValue("djzclxDm", "");
    nsrxxMap.setValue("zgswjDm", "");
    nsrxxMap.setValue("zgswskfjDm", "");
    nsrxxMap.setValue("kjzdzzDm", "");
    nsrxxMap.setValue("sfyhd", "Y");
    nsrxxMap.setValue("dcnd", "");
    nsrxxMap.disable("dcnd");
    $w('sbToolBar').setEnabled('next');
}

function slxxOnError() {
}
function saveOnError() {
}
function printSwsxslhz() {
    var nsrsbh = $w("nsrxxMap").getValue("nsrsbh");
    var nsrmc = $w("nsrxxMap").getValue("nsrmc");
    var slr = $w("slxxForm").getValue("swrymc");
    var yhdzlGrid = $w("yhdzlGrid");
    var allGridData = yhdzlGrid.getAllGridData();
    var rowGroup = yhdzlGrid.getCheckedRowData("sftj");
    var length = rowGroup.length;
    if (length == 0) {
        swordAlert("请选择需要打印的核定资料！")
        return;
    }

    var ytjxh = "";
    var printBtn = new SwordSubmit();
    for (var i = 0; i < length; i++) {
        var ytjbszlmc = rowGroup[i].tds.bszlmc.value;
        var xh = rowGroup[i].tds.xh.value;
        ytjxh += xh;
        printBtn.pushData("ytjbszlmc" + i, ytjbszlmc);
    }

    printBtn.pushData("nsrsbh", nsrsbh);
    printBtn.pushData("nsrmc", nsrmc);
    printBtn.pushData("length", length);
    printBtn.pushData(allGridData);
    printBtn.pushData("slr", slr);
    printBtn.pushData("ytjxh", ytjxh);
    printBtn.setCtrl("SB151zlbsslCtrl_printSwsxslhz");
    swordOpenWin('/sword?ctrl=SB151zlbsslCtrl_printSwsxslhz&r=' + Math.random(), printBtn);
}

function qxView() {
    //  预审平台
    $w('nsrxxMap').enable(['nsrsbh', 'zlbsdlDm', 'zlbsxlDm']);
    $w('bwlshForm').reset();
    $w('bwlshForm').enable();
    xyh = true;
    //	cfcjbz="";
    $w("yhdzlGrid").reset();
    $w("whdzlGrid").reset();
    $w('nsrxxMap').resetAll(['dcnd', 'zllx', 'ssqq', 'ssqz', 'zlbsdlDm']);
    $w('sbToolBar').setEnabled('next');
    //	sfsl = 0; 
    //	$w('slxxForm').resetAll();
}

function queryBybwlsh(e) {
    if (e.code == 13) {
        var bwlsh = $w("bwlshForm").getValue("bwlsh");
        var queryBtn = new SwordSubmit();
        queryBtn.pushData("bwlsh", bwlsh);
        queryBtn.setTid("PBS_SB000_getXxByBwlsh");
        queryBtn.setFunction("onSuccess", "querySuccessbwlsh");
        queryBtn.submit();
    }
}

function querySuccessbwlsh(req, resData) {
    $w("bwlshForm").disable();
    verification(req, resData);
    var lsid = resData.getAttr("lsid");
    $w("bwlshForm").setValue("lsid", lsid);
    var nsrxxMap = $w('nsrxxMap');
    nsrxxMap.setValue('zlbsdlDm', 'ZL1009');
    // 资料报送大类事件
    //getNsrcwzdxx();
    nsrxxMap.setValue('zlbsxlDm', 'ZL1009001');
    // 资料报送小类事件
    checkByXlDm();
    nsrxxMap.disable(['nsrsbh', 'zlbsdlDm', 'zlbsxlDm']);
}

var zlbsdlIgnore = ["ZL1002"]//屏蔽资料报送大类代码
function zlbsdlFilter(dataObj, inputEl, obj) {
    var newData = [];
    dataObj.each(function (item, index) {
        if (zlbsdlIgnore.indexOf(item.ZLBSDL_DM) > -1)
            return;
        newData[newData.length] = item;
    });
    return newData;
}

/**
 * 是否需要判断财务制度备案
 * @returns {boolean}
 */
function needCwzdba() {
    var zlbsdlDm = $w("nsrxxMap").getValue("zlbsdlDm").code;
    return _gIsQhjt == "N" && zlbsdlDm == "ZL1001"; //非千户集团 财务报告报送与信息采集
}

/**
 * 取消
 */
function reset() {
    //	$w('nsrxxMap').resetAll();	
    var xl = "";
    var sl = "";
    $w('nsrxxMap').setValue("zlbsxlDm", xl);
    $w('nsrxxMap').setValue("zlsl", sl);
}

