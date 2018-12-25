
var gt3 = {};
gt3._isXsssjm = false; // 是否享受税收减免

var gs_gjj = ["{kjxxForm_zsrmbje}={kjxxForm_je}*{kjxxForm_sl}",
	"{kjxxForm_rmbjehj}={kjxxForm_rmbje}+(pf({kjxxForm_zsrmbje}))",
	"{kjxxForm_ynsdse}=(pf({kjxxForm_rmbjehj}))-{kjxxForm_kce}-{kjxxForm_sdsjmse}",
	"{kjxxForm_yjndqysdse}=(pf({kjxxForm_ynsdse}))*{kjxxForm_sysl}",
	"{kjxxForm_ysjjndqysdse}=(pf({kjxxForm_ynsdse}))*{kjxxForm_sjzsl}",
	"{kjxxForm_jmqysdse}=(pf({kjxxForm_yjndqysdse}))-(pf({kjxxForm_ysjjndqysdse}))",
	"{kjxxForm_ynssde}={kjxxForm_bcsbdsrze}*{kjxxForm_swjghdlrl}",
	"{kjxxForm_ynqysdse}=(pf({kjxxForm_ynssde}))*{kjxxForm_sysl1}",
	"{kjxxForm_sjyjnedqysdse}=(pf({kjxxForm_ynqysdse}))-{kjxxForm_jmqysdse1}"];

var nssbrq; // 校验申报日期
var resetresData;
var sl = "0.1"; // 页面上的税率
var sysl = "0.25"; // 页面上的税率
var wjnrbj = "1"; // 是否有附表
var sb071_sysDate; // 系统日期
var sb071_nsqxDm; // 期限代码
var sb071_sbxxList;
var sbcwgzFlag; // 错误更正
var sb071_sbdrFlag = false; // 用来判断是不是申报导入
var dyccx = "0";
var fb2SbFlag = false;
var sb071_fbValue = new Object(); // 存放附表的值
var sb071_sbrq1 = null;

// 附表二的数据
var sb071_khyhList = null;
var sb071_zhList = null;
var sb071_fb2ResData = null;
var gt3_djxh;
var gt3_skssqq;
var gt3_skssqz;
// add by yangdalin 增加自查补报uuid 20150403
var gt3 = {}; // 页面缓存
gt3.zxbztzsuuid = "";
gt3.djxh = "";
gt3.nsqxDm;
gt3.zrrBz = "";
gt3._qzdjbbz = "N";
var _pdKjywlx_yqFb = 0; //扣缴类型的附表打开的次数        ---业务描述:这两个字段的作用是记录：打开这两个附表时没有点击确定，而是点击退出退出的，数据时没有带到
var _pdKjywlx_zdFb = 0; //扣缴义务类型附表的打开次数  -----主页面，但是主页面的扣缴义务类型里已经显示了，防止保存的时候 越过校验

var zsxmList; // 获取征收项目List
var zspmList; // 获取征收品目List
var zszmList; // 获取征收子目List
var hyList; // 获取行业列表List
var djxh;
var ctrlname = 'SBGyCtrl'; //查银行信息
var swjg;
var tbr;
var xtrq; //申报日期
var kzztdjlx_dm; //判断是企业纳税人还是个体纳税人

var _dkdj_fb_dkdszy_slxxForm = new Object(); //存代扣代收 slxxForm的值
var _dkdj_fb_skdszy_mxGrid = new Object; //存代扣代收明细Grid的值
var _fb1sjjehj; //附表1的合计金额   在保存的时候和主表的 12行或18行金额做检验

var _dkdj_fb_yhjszy_yhxx = new Object()
//存银行经收专用的银行信息
var _dkdj_fb_yhjszy_mxGrid = new Object()
//存银行经收专用的明细Grid的值
var _dkdj_fb_yhjszy_slxxForm = new Object()
//存银行经收专用slxxForm的值
var _fb2sjjehj; //附表2的合计金额   在保存的时候和主表的 12行或18行金额做检验

var hyDm; //行业代码   扣缴义务人类型选择 制定扣缴时   行业自动带出扣缴义务人的行业
var djzclxDm; //登记注册类型  扣缴义务人类型选择 制定扣缴时   行业自动带出扣缴义务人的登记类型
var djzclx;
var gt3_nsqx; //纳税权限代码   用于计算税款所属期止

var cwgzbz; // 错误更正标志
var pzxh; // 错误更正的时候使用
var sbuuid; // 申报sbuuid 错误更正的时候使用
var djxh; // 登记序号 错误更正的时候使用
var sbbList; // 错误更正 时 原始申报表信息
var sblxDm; // 申报类型代码
var yzpzzlDm;
var sbrq1;
var sb071_resDataXMLForSBCWGZ;

var fbXMLData = {};
var yhjszyGrid = {};

var drbz; //导入标志
var xthtbh; //指定扣缴-境内机构和个人发包工程作业或劳务项目报告表-编号
/**
 * ************************************************ Begin 省局版本代码
 * *************************************************
 */
var ctrl = 'SB071Kjqysdssb2015Ctrl';
var nsrxxVO = {}; // 缓存纳税人主体数据信息
var zdkjDjxh; //指定扣缴纳税人的登记序号
var yzpzxh = "";
var cfsbbz = "N"; //重复申报标志 ，Y 重复申报 ，N 没有重复申报



// 大连国税控制扣缴所得类型参数 begin
var qysdsskssq_cs;
var kjqysds_bj;
// 大连国税控制扣缴所得类型参数 end
/**
 * 由所属期起算所属期止
 */
function changSkssq() {
    var form = $w("nsrxxForm");
    var nsqx_dm = gt3_nsqx;
    dyccx = "1";
    var ssqzBtn = new SwordSubmit();
    var skssqq = $w('nsrxxForm').getValue("skssqq")
    if (skssqq == undefined || skssqq == null || skssqq == "") {
        swordAlert("税款所属期起不能为空!", {
            // 确定：所属期起获得焦点
            onOk: function () {
                (function () {
                    form.getFieldEl("skssqq").focus();
                }).delay(500);
                form.setValue("skssqq", "");
            }
        });
        return;
    }

    ssqzBtn.setCtrl("SBGyCtrl" + "_jsskssqz");
    ssqzBtn.setFunction('onSuccess', 'loadBaseInfo1');
    ssqzBtn.pushData('skssqq', skssqq);
    ssqzBtn.pushData('nsqxdm', nsqx_dm);
    ssqzBtn.submit();
}

function skssqzChang() {
    var skssqq = $w('nsrxxForm').getValue("skssqq");
    var skssqz = $w('nsrxxForm').getValue("skssqz");
    var sbrq = $w('nsrxxForm').getValue("sbrq1");
    var nsqxdm = gt3.nsqxDm;
    if (nsqxdm != null && nsqxdm != undefined) {
        if (!checkDate(skssqq, skssqz, sbrq, nsqxdm)) {
            $w('nsrxxForm').setValue("skssqz", "");
        }
    }

    dyccx = "1";
}
/**
 * 计算税款所属期止的毁掉函数
 * @param req
 * @param resData
 * @return
 */
function loadBaseInfo1(req, resData) {
    $w("nsrxxForm").setValue('skssqq', resData.getAttr('skssqq'));
    $w("nsrxxForm").setValue('skssqz', resData.getAttr('skssqz'));
    if (tempsave_tryToLoadData) {
        //		if(yzpzzlDm){
        var skssqq = $w("nsrxxForm").getValue('skssqq')
        var skssqz = $w("nsrxxForm").getValue('skssqz')
        if (tempsave_tryToLoadData("BDA0610780", skssqq, skssqz, gt3.djxh, "SB071Kjqysdssb2015Ctrl")) {
            return;
        }
        //		}
    }
}

var tt;
var skssqq;
var skssqz;
var slrDm;

function nextOne() {
    $w('nsrxxForm').getFieldEl('dkdjywrsbh').focus();
    $w('nsrxxForm').reset();
    $w('kjxxForm').reset();

    var nsrxx = $w('nsrxxForm');
    nsrxx.setValue('skssqq', skssqq);
    nsrxx.setValue('skssqz', skssqz);
    nsrxx.setValue('sbrq1', xtrq);

    var kjxx = $w('kjxxForm');
    kjxx.setValue('sysl1', sysl);
    kjxx.setValue('sysl', sl);
    kjxx.setValue('slr', slrDm);
    kjxx.setValue('slrq', xtrq);
    kjxx.setValue('swdlrdlsbrq', xtrq);
    if (cwgzbz == 'cwgzbz') {
        var test = new SwordSubmit();
        test.options.postType = "form";
        test.setCtrl("SB057SbcwgzCtrl_initView");
        test.submit();
    } else {
        top.$w("tab1").refreshCurrentTabItem();
    }

    init(tt);
}

function init(resData) {
    //网报特色改造 begin
    qysdsskssq_cs = resData.getAttr("qysdsskssq_cs"); //税款所属期校验参数
    kjqysds_bj = resData.getAttr("kjqysds_bj"); //1、	扣缴企业所得税：“本次申报所得取得日期”与“申报日期”之间不允许相差7天以上，如果“申报日期”-“本次申报所得取得日期” > 7，则弹出逾期提示，且不允许申报。

    //网报特色改造 end
    cwgzbz = resData.getAttr('cwgzbz');
    drbz = resData.getAttr('drbz');
    hide();
    var djlzXls = pc.getInitDataByDataName();
    if (cwgzbz == 'cwgzbz') { // 错误更正
        sbuuid = resData.getAttr('sbuuid');
        pzxh = resData.getAttr('pzxh');
        djxh = resData.getAttr('djxh');
        //and by yangdalin
        gt3.djxh = djxh;
        hyDm = resData.getAttr('hyDm');
        djzclxDm = resData.getAttr('djzclxDm');
        nsrxxVO['djxh'] = resData.getAttr('djxh');
        sbrq1 = resData.getAttr('sbrq1');
        yzpzzlDm = resData.getAttr('yzpzzlDm');
        sbbList = pc.getResData("sbbList", resData);
        zdkjDjxh = resData.getAttr('kjdjxh');
        cwgzSetValue(resData);
        $w("sbToolBar").setEnabled('save');
        tempsave_enable("sbToolBar");

        swjg = resData.getAttr('swjg');
        xtrq = resData.getAttr('xtrq');
        slrDm = resData.getAttr('slrDm');
        sb071_sbrq1 = resData.getAttr('xtrq');
        changekjlxForCwgz();
    } else {
        var nsrxxform = pc.getResData("nsrxxForm", resData);
        sb071_sbrq1 = nsrxxform.data.sbrq1.value;
        $w('sbToolBar').setDisabled('save');
        tempsave_disable("sbToolBar");

        var slxxForm = pc.getResData("slxxForm", resData);
        swjg = slxxForm.data.slswjgmc.value;
        tbr = slxxForm.data.slrDm.value;
        xtrq = nsrxxform.data.sbrq1.value;
        skssqq = nsrxxform.data.skssqq.value;
        skssqz = nsrxxform.data.skssqz.value;
        slrDm = slxxForm.data.slrDm.value;
        $w('kjxxForm').setValue('slrq', xtrq);
        $w('kjxxForm').setValue('slr', slrDm);
        $w('kjxxForm').setValue('swdlrdlsbrq', xtrq);
        tt = resData;
        var nsrsbh = nsrxxform.data.nsrsbh.value;
        $w("nsrxxForm").setValue('dkdjywrsbh', nsrsbh);
        queryNsrxxbyNsrsbh(nsrsbh, queryNsrxxSuccess, '4');
    }
    //网报特色改造 暂存功能  begin
    if (tempsave_tryToLoadData) {
        var skssqq = $w("nsrxxForm").getValue('skssqq')
        var skssqz = $w("nsrxxForm").getValue('skssqz')
        if (tempsave_tryToLoadData("BDA0610780", skssqq, skssqz, gt3.djxh, "SB071Kjqysdssb2015Ctrl")) {
            return;
        }
    }
    //网报特色改造 暂存功能 end
    //网报特色改造 自查补报 begin
    var bz = isEnableZcbb("BDA0610780");
    if ($chk(bz) && bz == "Y") {
        $w('nsrxxForm').enable('sbsxDm1');
    }
    //网报特色改造 自查补报 end
    //网报特色改造 税款所属期置灰  begin
    var dzswj_sqkzkg = isEnableSkssq("BDA0610780");
    if ($chk(dzswj_sqkzkg) && dzswj_sqkzkg == "Y") {
        $w("nsrxxForm").disable(["skssqq", "skssqz"]);
    }
    //网报特色改造 税款所属期置灰  end
}

function hide() {
    if (!$w("flzlGrid").collapseDiv.hasClass('x-tool-s')) {
        $w("flzlGrid").toggle();
    }
}

/**
 * 错误更正set值到页面
 * @param resData
 * @return
 */
function cwgzSetValue(resData) {
    zsxmList = pc.getResData("zsxmList", resData);
    zspmList = pc.getResData("zspmList", resData);
    zszmList = pc.getResData("zszmList", resData);
    hyList = pc.getResData("hyList", resData);
    var qzdjbbz = resData.getAttr("sdlxQzdjbbz");
    if ($chk(qzdjbbz) && "Y" == qzdjbbz) {
        gt3._qzdjbbz = qzdjbbz;
        $w("kjxxForm").disable(["sbsdlxjdm"]);
    }
    loadZfbTree(zsxmList); // 加载主附表树
    fbXMLData["kjxxForm"] = pc.getResData("kjxxForm", resData);
    fbXMLData["nsrxxForm"] = pc.getResData("nsrxxForm", resData);
    skssqq = fbXMLData["nsrxxForm"].data.skssqq.value;
    skssqz = fbXMLData["nsrxxForm"].data.skssqz.value;
    $w("kjxxForm").initData(fbXMLData["kjxxForm"]);
    tbr = fbXMLData["kjxxForm"].data.slr.value;
    $w('nsrxxForm').initData(fbXMLData["nsrxxForm"]);
    $w('nsrxxForm').disable("dkdjywrsbh", true);
    $w('nsrxxForm').disable("kjrwrmc", true);
    $w('nsrxxForm').disable("skssqq", true);
    $w('nsrxxForm').disable("skssqz", true);
    $w('nsrxxForm').disable("sbrq1", true);

    var kjrwrlx = fbXMLData["nsrxxForm"].data.kjrwrlx.value; // 扣缴类型
    if ("1" == kjrwrlx) { // 源泉扣缴
        $w("kjxxForm").disable('kjhy', true);
        $w("kjxxForm").disable('bcsbdsrze', true);
        $w("kjxxForm").disable('ynssde', true);
        $w("kjxxForm").disable('sysl1', true);
    } else if ("2" == kjrwrlx) { // 指定扣缴 
        $w("kjxxForm").disable('rmbje', true);
        $w("kjxxForm").disable('mc', true);
        $w("kjxxForm").disable('je', true);
        $w("kjxxForm").disable('sl', true);
        $w("kjxxForm").disable('kce', true);
        $w("kjxxForm").disable('sjzsl', true);
        $w("kjxxForm").disable('sdsjmse', true);
    }
    // 处理错误更正信息
    var kjxxData = fbXMLData["kjxxForm"].data;
    handleBbkjywrxx(kjxxData.zqjmgnssbh.value, kjxxData.jndmc.value,
	kjxxData.jmgmcjdm.value, kjxxData.zzgjldmcEn.value,
	kjxxData.zqjmgmc.value, kjxxData.zqjmgmcEn.value,
	kjxxData.zqjmgdz.value, kjxxData.zqjmgdzEn.value);

    var sbxxList = pc.getResData("sbxxList", resData);
    sb071_sbxxList = sbxxList;
    var headData = pc.getResData("nsrxxForm", resData);
    var nsrxxForm = $w('nsrxxForm');
    // 行政区划、街道乡镇、行业、主管税务所科分局 任意一项为空 为纳税人
    if (!$chk(headData.data.xzqhszDm.value) || !$chk(headData.data.jdxzDm.value) || !$chk(headData.data.hyDm1.value) || !$chk(headData.data.zgswskfjDm.value)) {
        gt3.zrrBz = "N";
        // 取消行政区划、街道乡镇、行业、主管税务所科必录
        nsrxxForm._itemSwitch("hyDm1", "pulltree", {
            'rule': ''
        });
        nsrxxForm._itemSwitch("xzqhszDm", "pulltree", {
            'rule': ''
        });
        nsrxxForm._itemSwitch("jdxzDm", "select", {
            'rule': ''
        });
        nsrxxForm._itemSwitch("zgswskfjDm", "pulltree", {
            'rule': ''
        });
    } else {
        gt3.zrrBz = "Y";
        $("zrrTR1").style.display = "block";
        $("zrrTR2").style.display = "block";
        nsrxxForm._itemSwitch("hyDm1", "pulltree", {
            'rule': 'must'
        });
        nsrxxForm._itemSwitch("xzqhszDm", "pulltree", {
            'rule': 'must'
        });
        nsrxxForm._itemSwitch("jdxzDm", "select", {
            'rule': 'must'
        });
        nsrxxForm._itemSwitch("zgswskfjDm", "pulltree", {
            'rule': 'must'
        });
    }

    // 包含银行经收申报表的情况，不允许更正
    yhjszyGrid = pc.getResData("yhjszyGrid", resData);
    if (yhjszyGrid != null && yhjszyGrid.trs.length > 0 && yhjszyGrid != undefined && yhjszyGrid.sword != null && yhjszyGrid.sword != undefined && yhjszyGrid.sword != "") {
        fbXMLData["yhjszyGrid"] = pc.getResData("yhjszyGrid", resData);
        fbyhjszyGrid = yhjszyGrid;
        swordAlert("上一笔申报含有税收缴款书（银行经收）附表，已缴款不允许更正!谢谢");
        return;
    }

    fbsjhx(resData);
}
/**
 * 附表数据回显
 * @param resData
 * @return
 */
function fbsjhx(resData) {
    sb071_resDataXMLForSBCWGZ = resData; //全局变量
    _dkdj_fb_skdszy_mxGrid['swsxzyGrid'] = pc.getResData("swsxzyGrid", resData); //税务收现专用  明细grid
    _dkdj_fb_dkdszy_slxxForm['slxxForm_dkds'] = pc.getResData("swsxSlxxForm",
	resData); //税务收现专用的slxxFom

    var swsx = _dkdj_fb_dkdszy_slxxForm['swsxzyGrid']; //把附表1的金额合计放到_fb1sjjehj  防止没有修改金额 只修改别的什么  怕校验不过
    var je = 0.0
    if (swsx != undefined && swsx.trs.length > 0) {
        for (var i = 0; i < swsx.trs.length; i++) {
            je = parseFloat(je) + parseFloat(swsx.trs[0].tds.sjje.value);
        }
    }
    je = $chk(je) ? je : 0.0;
    _fb1sjjehj = je;
}

function queryNsrxx(e) {
    //	if (e.code != 13) {
    //		return;
    //	}
    var nsrxxFormObj = $w('nsrxxForm');
    //var nsrsbh = nsrxxFormObj.getValue("dkdjywrsbh");
    // cxbz 查询标志：
    // 1.只查询自然人
    // 2.只查询纳税人(需要权限过滤)
    // 3.只查询纳税人(不权限过滤)
    // 4.查询自然人和纳税人（纳税人需要权限过滤）；
    var cxbz = "4";
    queryNsrxxbyNsrsbh(e, queryNsrxxSuccess, cxbz);
}
/**
 * 截取日期，以数组形式返回年月日
 * 
 * @param {Object}
 *            dataStr
 */
var splitStr = function (dataStr) {
    // 截取前面年月日
    var dateStr = splitStrToChar(dataStr, " ")[0];
    // 分割字符
    var splitChar = dateStr.indexOf("-") != -1 ? "-" : "/";

    return splitStrToChar(dateStr, splitChar);
}
/**
 * 比较日期 小于
 * 
 * @param {Object}
 *            startDateStr
 * @param {Object}
 *            endDateStr
 * @return {TypeName} true:开始日期小于结束日期
 */
var compareDate = function (startDateStr, endDateStr) {
    // 将年月日分割保存在数组中
    var startDates = splitStr(startDateStr);
    var endDates = splitStr(endDateStr);
    // 转换为日期
    var startDate = new Date(startDates[0], parseInt(startDates[1] - 1),
	startDates[2]);
    var endDate = new Date(endDates[0], parseInt(endDates[1] - 1), endDates[2]);
    return startDate < endDate ? true : false;
}

function jyHtrqsj() {
    var kjxx = $w("kjxxForm")
    var htqq = kjxx.getValue("htzxqssj");
    var htqz = kjxx.getValue("htqszzsj");
    if (htqq == null || htqq == "") {
        swordAlert("合同执行开始时间不能为空!请输入...");
        //应该考虑要把焦点落在费款所属期起上   
        return;
    }
    /*if (htqz == null || htqz == "") {
    swordAlert("合同执行终止时间不能为空!请输入...");
    //应该考虑要把焦点落在费款所属期起上   
    return;
}*/
    if (htqz == null || htqz == "") { } else {
        var flag = compareDate(htqq, htqz);
        if (!flag) {
            swordAlert("合同执行终止时间必须大于开始时间!");
            kjxx.setValue('htqszzsj', '');
        }
    }

}
/**
 * 查询纳税人信息成功回调函数
 * 
 * @param nsrParam
 *            纳税人信息返回参数
 * @param zrrParam
 *            自然人信息返回参数
 * @return
 */
function queryNsrxxSuccess(nsrParam, zrrParam) {
    /*if (nsrParam == "" || nsrParam == null || nsrParam == undefined) {
    swordAlert("未能根据当前纳税人识别号查询到当前纳税人基本数据信息，请重新输入！");
    return;
}*/
    // 纳税人
    kjxxForm = $w('kjxxForm');
    nsrxxForm = $w('nsrxxForm');
    if (nsrParam != "" && nsrParam != null) {
        gt3.zrrBz = "N";
        // 监控纳税人状态
        if (!checkNsrzt(nsrParam.nsrztDm.value)) {
            return;
        }
        // 开始遍历
        for (var prop in nsrParam) {
            if (typeof (nsrParam[prop]) == " function ") { // 方法
                nsrParam[prop]();
            } else { // p 为属性名称，nsrParam[p]为对应属性的值
                nsrxxVO[prop] = nsrParam[prop].value;
            }
        }
        nsrxxForm.getFieldEl('kjrwrmc').value = nsrxxVO['nsrmc'];
        djxh = nsrxxVO['djxh'];
        gt3.djxh = nsrxxVO['djxh'];
        nsrxxJsonVO = JSON.encode(nsrxxVO);
        nsrxxForm.setValue('kjrwrmc', nsrxxVO['nsrmc']);
        kjxxForm.setValue('nsrsbh', nsrxxVO['nsrsbh']);
        kjxxForm.setValue('nsrmc', nsrxxVO['nsrmc']);
        if (nsrxxVO['nsrztDm'] == '04' || nsrxxVO['nsrztDm'] == '07') {
            swordAlert("该纳税人状态不正常,请先更正纳税人状态再申报");
            return;
        }
        if (nsrxxVO['nsrztDm'] == '05') {
            swordAlert("该纳税人状态属于非正常户,可以继续申报");
        }
        kjxxForm.setValue('dz', nsrxxVO['zcdz']);
        kjxxForm.setValue('lxdh', nsrxxVO['zcdlxdh']);
        kjxxForm.setValue('yzbm', nsrxxVO['zcdyzbm']);
        kjxxForm.setValue('jjlxDm', nsrxxVO['djzclxDm']);
        kjxxForm.setValue('jjhyflDm', nsrxxVO['hyDm']);
        gt3_nsqx = nsrxxVO['nsqxDm'];
        djxh = nsrxxVO['djxh'];
        gt3.djxh = djxh;
        kzztdjlx_dm = nsrxxVO['kzztdjlxDm'];
        hyDm = nsrxxVO['hyDm'];
        djzclxDm = nsrxxVO['djzclxDm'];


        $("zrrTR1").style.display = "none";
        $("zrrTR2").style.display = "none";
        nsrxxForm._itemSwitch("hyDm1", "pulltree", {
            'rule': '',
            'value': ''
        });
        nsrxxForm._itemSwitch("xzqhszDm", "pulltree", {
            'rule': '',
            'value': ''
        });
        nsrxxForm._itemSwitch("jdxzDm", "select", {
            'rule': '',
            'value': ''
        });
        nsrxxForm._itemSwitch("zgswskfjDm", "pulltree", {
            'rule': '',
            'value': ''
        });
        // 自然人
    } else if (zrrParam != "" && zrrParam != null) {
        gt3.zrrBz = "Y";
        nsrxxForm.getFieldEl('kjrwrmc').value = zrrParam.xm.value; // 纳税人名称
        gt3.djxh = zrrParam.djxh.value; // 登记序号
        djxh = zrrParam.djxh.value; // 登记序号
        nsrxxVO['djxh'] = zrrParam.djxh.value;
        nsrxxVO['nsrmc'] = zrrParam.xm.value;
        kjxxForm.setValue('nsrsbh', zrrParam.nsrsbh.value);
        kjxxForm.setValue('nsrmc', zrrParam.xm.value);
        kjxxForm.setValue('dz', '');
        kjxxForm.setValue('lxdh', '');
        kjxxForm.setValue('yzbm', '');
        kjxxForm.setValue('jjlxDm', '431');
        kjxxForm.setValue('jjhyflDm', '9419');
        //kjxx.getFieldEl("dz").set("rule", "must");
        kjxxForm.enable("dz");
        $("zrrTR1").style.display = "block";
        $("zrrTR2").style.display = "block";
        nsrxxForm._itemSwitch("hyDm1", "pulltree", {
            'rule': 'must'
        });
        nsrxxForm._itemSwitch("xzqhszDm", "pulltree", {
            'rule': 'must'
        });
        nsrxxForm._itemSwitch("jdxzDm", "select", {
            'rule': 'must'
        });
        nsrxxForm._itemSwitch("zgswskfjDm", "pulltree", {
            'rule': 'must'
        });
        nsrxxForm.setValue("hyDm1", "9419");
    } else {
        swordAlert("纳税人识别号不正确，请重新输入");
        return;
    }

    changeSbssqq('13');

    // 自查补报 add by yangdalin
    changeSblx();
}


/*******************************************************************************
 * 监控纳税人状态
 * 
 * @param {}
 * nsrztDm 纳税人状态代码
 */
function checkNsrzt(nsrztDm) {
    if (nsrztDm == "07") {
        swordAlert("纳税人处于注销状态，请先办理重新税务登记");
        return false;
    } else if (nsrztDm == "04") {
        swordAlert("纳税人处于停业状态，可继续进行申报");
    } else if (nsrztDm == "05") {
        swordAlert("纳税人处于非正常户状态，请进行非正常户解除，可继续进行申报");
    } else if (nsrztDm == "06") {
        swordAlert("纳税人处于清算状态，可继续进行申报");
    }
    return true;
}

/*******************************************************************************
 * 行政区划改变，清空街道乡镇
 * 
 * @param {}
 *            obj
 */
function changeXzqh(obj) {
    $w("nsrxxForm").setValue("jdxzDm", "");
}

/**
 * @name 处理行业改变
 * @description
 * @param obj 选择后的值
 * 
 */
function changeHy(obj) {
    // TAOGS_201604050006[duanmin]：取消纳税人基本信息中的行业和扣缴义务人经济类行业的关联关系
    //	kjxxForm = $w('kjxxForm');
    //	kjxxForm.setValue('jjhyflDm', obj);
}

/*******************************************************************************
 * 通过行政区划代码过滤街道乡镇下列列表数据
 * 
 * @param {}
 *            dataObj
 * @param {}
 *            inputEl
 * @param {}
 *            obj
 * @return {}
 */
function jdxzFilter(dataObj, inputEl, obj) {
    var xzqhDm = $w("nsrxxForm").getValue("xzqhszDm");
    var newData = []; // 新列表数据
    if (!$chk(xzqhDm)) {
        return newData;
    }
    dataObj.each(function (item, index) {
        if (item.xzqhDm == xzqhDm) newData[newData.length] = item;
    });
    return newData;
}
/**
 * 中间层
 * @param e
 * @return
 */
function newChangeSj(e) {
    if (e.code != 32 && e.code != 13) {
        return;
    } else {
        changeSbssqq(e.code);
    }
    dyccx = "1";
}

function changSsqz() {

}

/*******************************************************************************
 * 所属期起改变
 */
function changeSsqq() {
    var nsrxxForm = $w("nsrxxForm");
    var ssqq = nsrxxForm.getValue("skssqq");
    if (!$chk(ssqq)) {
        return;
    }
    var qDates = splitStr(ssqq);
    //判断申报表第一行数据纳税期限是否为次，表格为空，默认为月

    if (nsqxDm != "11" && parseInt(qDates[2], 10) != 1) {
        swordAlert("纳税期限不属于按次申报，所属期起必须为某月的第一天", {
            onClose: function () {
                nsrxxForm.setValue("skssqq", "");
                nsrxxForm.getFieldEl("skssqq").focus();
            }
        });
        return;
    }

    if (ssqq == gt3.skssqq) {
        return;
    }

    nsrxxForm.setValue("skssqz", "");
    nsrxxForm.getFieldEl("skssqz").focus();
}
/**
 * 修改税款所属期起事件触发
 * 
 * @param a
 * @return
 */
function changeSbssqq(code) {
    if (code != 32 && code != 13) {
        return;
    }

    var ssqzBtn = new SwordSubmit();
    gt3_skssqq = $w("nsrxxForm").getValue("skssqq");
    gt3_skssqz = $w("nsrxxForm").getValue("skssqz");
    if (gt3_skssqq == '') {
        swordAlert("请输入税款所属期起!并回车!");
        return;
    }

    if (nsrxxVO['djxh'] == '' || nsrxxVO['djxh'] == undefined) {
        swordAlert("请先初始化纳税人,输入完纳税人识别号后回车!谢谢");
        return;
    }

    dyccx = "1";
    $w('sbToolBar').setDisabled('save');
    tempsave_disable("sbToolBar");
    ssqzBtn.setCtrl(ctrl + "_changeSbssqq");
    ssqzBtn.setFunction('onSuccess', 'loadBaseInfo');
    ssqzBtn.pushData('djxh', nsrxxVO['djxh']);
    ssqzBtn.pushData($w("nsrxxForm").getSubmitData());
    ssqzBtn.submit();
}

/**
 * 载入基础数据，更改所属期回调函数
 * 
 * @param reData
 * @param
 */
function loadBaseInfo(req, resData) {
    gt3_nsqx = resData.getAttr("nsqxDm");
    zsxmList = pc.getResData("zsxmList", resData);
    zspmList = pc.getResData("zspmList", resData);
    zszmList = pc.getResData("zszmList", resData);
    hyList = pc.getResData("hyList", resData);
    $w('nsrxxForm').setValue('skssqq', pc.getResData("skssqq", resData).value);
    $w('nsrxxForm').setValue('skssqz', pc.getResData("skssqz", resData).value);
    $w("sbToolBar").setEnabled('save');
    tempsave_enable("sbToolBar");
    var reCode = resData.getAttr("reCode");
    if ("1" == reCode) {
        swordAlert("本月纳税人不存在按次申报的税（费）种认定信息，所属期起止默认为申报月的1号");
    }
    gt3.nsqxDm = resData.getAttr("nsqxDm");

    // 自查补报 and by yangdalin
    changeSblx();
    initOnSuccess(req, resData);
    loadZfbTree();
}

/**
 * 载入主附表树数据
 * 
 * @return {[type]}
 */
function loadZfbTree() {
    var ssqzBtn = new SwordSubmit();
    ssqzBtn.pushData('cwgzbz', cwgzbz);
    ssqzBtn.setCtrl(ctrl + "_initZfbTree");
    ssqzBtn.pushData(zsxmList);
    //	ssqzBtn.pushData('nsrxxVO', JSON.encode(nsrxxVO));
    ssqzBtn.submit();
    var treeXML = $w("sbZfbTree");
    treeXML.setSelectValue("扣缴企业所得税(主表)");
}

/**
 * ************************************************ End 省局版本代码
 * *************************************************
 */
/**
 * 改变登记注册类型
 */
function zsfsFilter(dataObj) {
    debugger;
    var nsrxxMap = $w('nsrxxForm');
    var kjrwrlx = nsrxxMap.getValue('kjrwrlx').code;
    var newData = [];
    if (kjrwrlx == '' || kjrwrlx == '2') {
        dataObj.each(function (item, index) {
            newData[newData.length] = item;
        });
    } else {
        dataObj.each(function (item, index) {
            if (item.DJZCLX_DM == '253' || item.DJZCLX_DM == '353') newData[newData.length] = item;
        });
    }

    return newData;
}

var kjrwrlxAll;

function changekjlx(inputEl) {
    var nsrxxMap = $w('nsrxxForm');
    var kjrwrlx = nsrxxMap.getValue('kjrwrlx').code;
    nsrxxMap.setValue("djzclx", "");
    nsrxxMap.setValue("hyDm1", "");
    nsrxxMap.enable("djzclx");
    var skssqq = $w("nsrxxForm").getValue("skssqq");
    var skssqz = $w("nsrxxForm").getValue("skssqz");
    if (!$chk(gt3.djxh) || "" == gt3.djxh || !$chk(skssqq) || "" == skssqq || !$chk(skssqz) || "" == skssqz) {
        swordAlert("未取得扣缴义务人信息，请先录入扣缴义务人识别号和税款所属期！");
        return;
    }

    kjrwrlxAll = kjrwrlx;
    var kjxx = $w('kjxxForm');
    title_valuechange = "法定源泉扣缴";

    var isGetHtbaxx = true;
    if (kjrwrlx == "1") { // 法定源泉扣缴
        title_valuechange = "法定源泉扣缴";
        // 新增校验
        // 纳税人在其居民国纳税识别号应该是条件必录的，当"扣缴义务类型"为"法定源泉扣缴"时，此项为必录项；当"扣缴义务类型"为"指定扣缴"的则非必录
        kjxx.getFieldEl("zqjmgnssbh").set("rule", "must");
        kjxx.getFieldEl("zqjmgmcEn").set("rule", "must");
        kjxx.getFieldEl("zqjmgmc").set("rule", "must");
        kjxx.getFieldEl("zqjmgdzEn").set("rule", "must");
        kjxx.getFieldEl("zqjmgdz").set("rule", "must");
        kjxx.getFieldEl("mc").set("rule", "must");
        kjxx.getFieldEl("kce").set("rule", "must");
        kjxx.getFieldEl("je").set("rule", "must");
        kjxx.getFieldEl("sl").set("rule", "must");

        kjxx.validate("zqjmgnssbh");
        kjxx.validate("nsrmcEn");
        kjxx.validate("nsrmc");
        kjxx.disable("kjhy");
        kjxx.getFieldEl("kjhy").set("rule", "");

        kjxx.disable("bcsbdsrze");
        kjxx.disable("swjghdlrl");
        kjxx.disable("sysl1");
        kjxx.disable("ynssde");
        kjxx.disable("kce");
        kjxx.disable("jmqysdse1");

        kjxx.enable("rmbje");
        kjxx.enable("mc");
        kjxx.enable("je");
        kjxx.enable("sl");
        kjxx.enable("sdsjmse");
        kjxx.enable("kce");

        kjxx.setValue("bcsbdsrze", "");
        kjxx.setValue("ynssde", "");
        kjxx.setValue("ynqysdse", "");
        kjxx.setValue("sysl1", sysl);
        kjxx.setValue("kjhy", "");
        kjxx.setValue("sjyjnedqysdse", "");
        kjxx.setValue("jmqysdse1", "");
        kjxx.setValue('zzgjndmc', '');

        $w('kjxxForm').setValue('sjzsl', sl);
        kjxx.setValue("kce", "0");
        kjxx.setValue("ysjjndqysdse", "0");
        kjxx.setValue("jmqysdse", "0");
        kjxx.setValue("rmbje", "0.0");
    } else if (kjrwrlx == "2") { // 指定扣缴
        title_valuechange = "指定扣缴";
        isGetHtbaxx = false;

        // 新增校验，校验是否为扣缴义务人
        var subBtn = new SwordSubmit();
        subBtn.setCtrl(ctrl + "_checKjywrKjzg");
        subBtn.setFunction('onSuccess', 'checKjywrKjzgSuccess');
        subBtn.pushData('djxh', nsrxxVO['djxh']);
        subBtn.pushData("skssqq", skssqq);
        subBtn.pushData("skssqz", skssqz);
        subBtn.submit();
    }

    if (isGetHtbaxx) {
        openHtbaxxPage(kjrwrlx, skssqq, skssqz);
    }
}

/**
 * @description 校验扣缴义务人资格方法成功 
 * @param req 
 * @param res
 * 
 */
function checKjywrKjzgSuccess(req, res) {
    var kjywrZgTips = res.getAttr("KJZGTIPS");
    if ($chk(kjywrZgTips) && "" != kjywrZgTips) {
        // 扣缴义务人的扣缴资格没有校验通过，清空触发数据项
        $w('nsrxxForm').setValue("kjrwrlx", "");
        swordAlert(kjywrZgTips);
        return;
    }

    // 处理指定扣缴信息
    // 纳税人在其居民国纳税识别号应该是条件必录的，当"扣缴义务类型"为"法定源泉扣缴"时，此项为必录项；当"扣缴义务类型"为"指定扣缴"的则非必录
    var kjxx = $w('kjxxForm');
    kjxx.getFieldEl("zqjmgnssbh").set("rule", "");
    kjxx.getFieldEl("zqjmgmcEn").set("rule", "");
    kjxx.getFieldEl("zqjmgmc").set("rule", "");
    kjxx.getFieldEl("zqjmgdzEn").set("rule", "");
    kjxx.getFieldEl("zqjmgdz").set("rule", "");
    kjxx.getFieldEl("mc").set("rule", "");
    kjxx.getFieldEl("kce").set("rule", "");
    kjxx.getFieldEl("je").set("rule", "");
    kjxx.getFieldEl("sl").set("rule", "");
    kjxx.validate("kce");
    kjxx.validate("mc");

    kjxx.enable("kjhy");
    kjxx.getFieldEl("kjhy").set("rule", "must");

    kjxx.enable("bcsbdsrze");
    kjxx.enable("swjghdlrl");
    kjxx.enable("kjhy");

    kjxx.disable("rmbje");
    kjxx.disable("mc");
    kjxx.disable("je");
    kjxx.disable("sl");
    kjxx.disable("kce");
    kjxx.disable("sjzsl");
    kjxx.disable("sdsjmse");

    kjxx.setValue("rmbje", "");
    kjxx.setValue("mc", "");
    kjxx.setValue("je", "");
    kjxx.setValue("sl", "");
    kjxx.setValue("zsrmbje", "");
    kjxx.setValue("rmbjehj", "");
    kjxx.setValue("kce", "");
    kjxx.setValue("ynsdse", "");
    kjxx.setValue("sysl", sl);
    kjxx.setValue("yjndqysdse", "");
    kjxx.setValue("sjzsl", "");
    kjxx.setValue("ysjjndqysdse", "");
    kjxx.setValue("jmqysdse", "");
    kjxx.setValue('zzgjndmc', '');
    kjxx.enable('swjghdlrl');
    kjxx.enable('jmqysdse1');
    $w('kjxxForm').setValue('sjzsl', sl);

    kjxx.setValue("sjyjnedqysdse", "0");
    kjxx.setValue("jmqysdse1", "0");
    kjxx.setValue("bcsbdsrze", "0.0");

    // 获取合同备案信息
    var skssqq = $w("nsrxxForm").getValue("skssqq");
    var skssqz = $w("nsrxxForm").getValue("skssqz");
    openHtbaxxPage("2", skssqq, skssqz);

}

/**
 * @description 打开合同备案信息界面
 * @param kjywrlx
 * @param skssqq
 * @param skssqz
 * 
 */
function openHtbaxxPage(kjywrlx, skssqq, skssqz) {
    // 清空页面的申报所得类型及代码
    $w('kjxxForm').setValue("sbsdlxjdm", "");
    var zqjmgnssbh = $w('kjxxForm').getValue('zqjmgnssbh');
    openTabBtn = $w('openTabBtn');
    openTabBtn.pushData("kjrwrlx", kjywrlx);
    openTabBtn.pushData("zqjmgnssbh", zqjmgnssbh);
    openTabBtn.pushData("skssqq", skssqq);
    openTabBtn.pushData("skssqz", skssqz);
    openTabBtn.pushData("djxh", gt3.djxh);
    openTabBtn.setCtrl(ctrl + "_gethtbaxx");
    swordAlertIframe('', {
        titleName: title_valuechange,
        width: 1050,
        height: 450,
        param: window,
        isNormal: 'true',
        isMax: 'true',
        isClose: 'true',
        isMin: "false",
        submit: openTabBtn
    });
}

/**
 * @description 为表单的目标域赋值并置灰
 * @param formObj
 * @param val
 * @param targetField
 * 
 */
function setFormValueAndDisable(formObj, val, targetField) {
    if (!$chk(val) || "" == val) {
        return;
    }

    formObj.setValue(targetField, val);
    formObj.disable(targetField);
}

var fjmnsrsbh; // 暂存，等待登记接口计算税率
/**
 * @description 处理被扣缴义务人信息
 * 
 */
function handleBbkjywrxx(fjmnsrsbh, fjmqyzwmc, gjhdqszDm, fjmqyywmc, zqjmgnsrzwmc,
zqjmgnsrywmc, fjmqyzqjmgzwdz, fjmqyzqjmgywdz) {
    var kjxx = $w('kjxxForm');
    setFormValueAndDisable(kjxx, fjmnsrsbh, "zqjmgnssbh"); // 被扣缴义务人识别号
    var a = document.getElementById('kjxxForm_zqjmgnssbh'); // 处理被扣缴义务人识别号不能置灰的错误
    a.removeClass('invalid');

    kjxx.disable("zzgjndmc"); // 被扣缴义务人名称, 后面会获取故直接disable
    // 在其居民国纳税识别号
    setFormValueAndDisable(kjxx, fjmqyzwmc, "jndmc"); // 在中国境内的名称（中）
    setFormValueAndDisable(kjxx, gjhdqszDm, "jmgmcjdm"); // 居民国（地区）名称及代码
    setFormValueAndDisable(kjxx, fjmqyywmc, "zzgjldmcEn"); // 在中国境内的名称（英）
    setFormValueAndDisable(kjxx, zqjmgnsrzwmc, "zqjmgmc"); // 在其居民国名称（中）
    setFormValueAndDisable(kjxx, zqjmgnsrywmc, "zqjmgmcEn"); // 在其居民国名称（英）
    setFormValueAndDisable(kjxx, fjmqyzqjmgzwdz, "zqjmgdz"); // 在其居民国地址（中）
    setFormValueAndDisable(kjxx, fjmqyzqjmgywdz, "zqjmgdzEn"); // 在其居民国地址（英）
}

/**
 * @description 选择合同信息后回调函数
 * @param param
 * 
 */
function boxCallBack(param) {
    var hthxymc = param.hthxymc;
    var hth = param.hth;
    var htqyrq = param.htqyrq;
    var htyxqx = param.htyxqx;
    var htje = param.htje;

    var kjywrlxrxm = param.kjywrlxrxm;
    var kjywrlxdh = param.kjywrlxdh;
    var kjywryzbm = param.kjywryzbm;

    var fjmnsrzqjmgdqmcjdm = param.fjmnsrzqjmgdqmcjdm;
    var fjmqyywmc = param.fjmqyywmc; //非居民企业英文文名称
    var fjmqyzwmc = param.fjmqyzwmc; //非居民企业中文名称
    var zqjmgnsrzwmc = param.zqjmgnsrzwmc; //非居民企业英文文名称
    var zqjmgnsrywmc = param.zqjmgnsrywmc; //非居民企业中文名称
    var fjmqyzqjmgzwdz = param.fjmqyzqjmgzwdz; //在其居民国中文地址
    var fjmqyzqjmgywdz = param.fjmqyzqjmgywdz; //在其居民国英文地址
    var gjhdqszDm = param.gjhdqszDm; //国籍或地区
    var htbz = param.htbz; //合同币种
    xthtbh = param.xthtbh; //指定扣缴-境内机构和个人发包工程作业或劳务项目报告表-编号
    var fjmdjzclxDm = param.fjmdjzclxDm;
    var fjmhyDm = param.fjmhyDm;
    // 暂存，等待登记接口计算税率
    fjmnsrsbh = param.fjmnsrsbh;
    var qysdssdlxDm = param.qysdssdlxDm;

    //判断是否重复申报,不是,才能往下走
    checkCfsb(hth);

    if (cfsbbz == "Y") {
        swordAlert("该法定源泉扣缴合同备案,在本属期已申报,不能重复申报!");
        $w('nsrxxForm').setValue('kjrwrlx', '');
        return;
    }

    var kjxx = $w('kjxxForm');
    handleBbkjywrxx(fjmnsrsbh, fjmqyzwmc, gjhdqszDm, fjmqyywmc, zqjmgnsrzwmc,
	zqjmgnsrywmc, fjmqyzqjmgzwdz, fjmqyzqjmgywdz);

    kjxx.setValue("htmc", hthxymc);
    kjxx.setValue("htbh", hth);
    kjxx.setValue("htzxqssj", htqyrq);
    kjxx.setValue("htqszzsj", htyxqx);
    kjxx.setValue("htjewz", htje);
    kjxx.setValue("htbz", htbz);
    var nsrxxMap = $w('nsrxxForm');
    var kjrwrlx = nsrxxMap.getValue('kjrwrlx').code;
    // 处理申报类型代码
    handleSbsdlx(qysdssdlxDm, kjrwrlx);


    var nsrxxMap = $w('nsrxxForm');
    var kjrwrlx = nsrxxMap.getValue('kjrwrlx').code;
    if (kjrwrlx == '2') { //当指定扣缴人扣缴时，行业带被扣缴人的行业
        if ($chk(fjmdjzclxDm) && "" != fjmdjzclxDm) {
            nsrxxMap.setValue("djzclx", fjmdjzclxDm);
            nsrxxMap.disable("djzclx");
        }

        nsrxxMap.setValue("hyDm1", fjmhyDm);
        _pdKjywlx_zdFb = _pdKjywlx_zdFb + 1;
    } else {
        _pdKjywlx_yqFb = _pdKjywlx_yqFb + 1;
    }

    // 获取被扣缴义务人信息
    if (fjmnsrsbh != null && fjmnsrsbh != "") {
        checknsrsbh();
    }
}
/***
 * @description 处理申报所得类型代码
 * @param sbsdlxDm 申报所得类型代码
 * @param kjywrlx 扣缴义务人类型
 * 
 */
function handleSbsdlx(sbsdlxDm, kjywrlx) {
    var kjxx = $w('kjxxForm');
    var sbsdlxdmTree = kjxx.getField("sbsdlxjdm");
    if ($chk(sbsdlxDm) && "" != sbsdlxDm) {
        kjxx.setValue('sbsdlxjdm', sbsdlxDm);
        kjxx.disable(["sbsdlxjdm"]);
        gt3._qzdjbbz = "Y";
        return;
    }

    gt3._qzdjbbz = "N";
    kjxx.enable(["sbsdlxjdm"]);
    kjxx.setValue('sbsdlxjdm', "");
    // 重新加载下拉
    if (!$chk(kjywrlx)) {
        return;
    }

    // 默认指定扣缴
    var sblxData = [{
        "code": "07",
        "caption": "承包工程、提供劳务所得"
    }, {
        "code": "08",
        "caption": "国际运输"
    }];
    if ("1" == kjywrlx) { // 源泉扣缴
        sblxData = [{
            "code": "06",
            "caption": "不动产租金"
        }, {
            "code": "10",
            "caption": "股息红利所得"
        }, {
            "code": "11",
            "caption": "利息所得"
        }, {
            "code": "12",
            "caption": "特许权使用费所得"
        }, {
            "code": "13",
            "caption": "转让财产所得"
        }, {
            "code": "21",
            "caption": "其他所得"
        }];
    }

    //	var sbsdlxdmTree = kjxx.getField("sbsdlxjdm");
    //	sbsdlxdmTree.reloadTree(sblxData);
    var widgetData = {
        "data": [{
            "sword": "SwordSelect",
            "dataName": "sdlxData",
            "data": sblxData
        }]
    };
    pc.reloadSel("sdlxData", widgetData);
}
//重复申报监控
function checkCfsb(htbh) {
    cfsbbz = "N";
    var btn = new SwordSubmit();
    var skssqq = $w('nsrxxForm').getValue("skssqq");
    var skssqz = $w('nsrxxForm').getValue("skssqz");

    btn.setCtrl(ctrl + "_checkCfsb");
    btn.setFunction('onSuccess', 'checkCfsbOnSuccess');
    btn.pushData('djxh', nsrxxVO['djxh']);
    btn.pushData('skssqq', skssqq);
    btn.pushData('skssqz', skssqz);
    btn.pushData('bkjnsrsbh', "");
    btn.pushData('htbh', htbh);

    btn.submit();
}

/**
 * 查询指定扣缴的利润率
 * @return
 */
function queryZdlrl() {
    if (!$chk(xthtbh)) {
        swordAlert("境内机构和个人发包工程作业或劳务项目报告表编号为空，无法获取指定扣缴的利润率！");
        return;
    } else {
        var nsrxxMap = $w('nsrxxForm');
        var queryT = new SwordSubmit();
        queryT.pushData('skssqq', nsrxxMap.getValue('skssqq'));
        queryT.pushData('skssqz', nsrxxMap.getValue('skssqz'));
        queryT.pushData('djxh', djxh);
        queryT.pushData('xthtbh', xthtbh);
        queryT.setCtrl("SB071Kjqysdssb2015Ctrl_queryZdlrl");
        queryT.setFunction("onSuccess", "queryZdlrlSuccess");
        queryT.submit();
    }
}
/**
 * 指定源泉校验纳税人是否是非居民
 * @param reqData
 * @param res
 * @return
 */
function onSuccessNsrqx(reqData, res) {
    var kjxxForm = $w('kjxxForm');
    kjxxForm.setValue('zzgjndmc', pc.getResData("nsrmc", res).value); //
    queryZdlrl();
}

/**
 * 查询利润率成功
 * @param res
 * @param resData
 * @return
 */
function queryZdlrlSuccess(res, resData) {
    // 设置指定扣缴的核定利润率
    var hdlrl = resData.getAttr('hdlrl');
    if ($chk(hdlrl) && 0 != hdlrl / 1) {
        var kjxxForm = $w('kjxxForm');
        kjxxForm.setValue("swjghdlrl", hdlrl / 1);
        kjxxForm.disable("swjghdlrl");
    }
}
//重复申报监控成功返回处理
function checkCfsbOnSuccess(reqData, resData) {
    cfsbbz = resData.getAttr('cfsbbz');
}


/**
 * 查询指定扣缴的利润率
 * @return
 */
function queryZdlrl() {
    if (!$chk(xthtbh)) {
        swordAlert("境内机构和个人发包工程作业或劳务项目报告表编号为空，无法获取指定扣缴的利润率！");
        return;
    } else {
        var nsrxxMap = $w('nsrxxForm');
        var queryT = new SwordSubmit();
        queryT.pushData('skssqq', nsrxxMap.getValue('skssqq'));
        queryT.pushData('skssqz', nsrxxMap.getValue('skssqz'));
        queryT.pushData('djxh', djxh);
        queryT.pushData('xthtbh', xthtbh);
        queryT.setCtrl("SB071Kjqysdssb2015Ctrl_queryZdlrl");
        queryT.setFunction("onSuccess", "queryZdlrlSuccess");
        queryT.submit();
    }
}

/**
 * 清空扣缴类型
 * @return
 */
function qingkongKjlx() {
    if (parseFloat(_pdKjywlx_yqFb) == 0 && parseFloat(_pdKjywlx_zdFb) == 0) {
        $w('nsrxxForm').setValue('kjrwrlx', '');
        swordAlert('请选择扣缴义务类型!');
    }
}

/**
 * 源泉扣缴时当修改申报所得类型及代码,带出实际征收率（%）
 * 
 * @return
 */
function getsjzsl() {
    var sbsdlxj = $w('kjxxForm').getValue("sbsdlxjdm").code;
    var kjrwrlx = $w("nsrxxForm").getValue("kjrwrlx").code;
    if (($chk(sbsdlxj))) {
        var bzforkce = "true";
        // 1、当"扣缴义务类型"选择为"法定源泉扣缴"时，
        // 只能选择10"股息红利所得"、11"利息所得"、12"特许权使用费所得"、13"转让财产所得"、"06不动产租金"、"21其他所得"。
        // 2．当"扣缴义务类型"选择为"指定扣缴"时，"申报所得类型及代码"中只能选择"承包工程、提供劳务所得、其他租金"。（注：选择时不得显示"其他租金"汉字，其他租金不属扣缴税款范围）
        $w('kjxxForm').getFieldEl("htmc").set("rule", "must");
        $w('kjxxForm').getFieldEl("htbh").set("rule", "must");
        $w('kjxxForm').getFieldEl("htzxqssj").set("rule", "must");
        $w('kjxxForm').getFieldEl("htjewz").set("rule", "must");
        var flag = 0;
        if (kjrwrlx == "1") {
            if ("07" == sbsdlxj || "08" == sbsdlxj) {
                swordAlert("法定源泉扣缴只能选择股息、利息、特许权使用费、转让财产所得、不动产租金、其他所得！");
                $w('kjxxForm').setValue("sbsdlxjdm", "");
                return;
            } else {
                if (sbsdlxj == "13" || sbsdlxj == "21") {
                    $w('kjxxForm').enable("kce");
                } else {
                    bzforkce = "false";
                }
            }
        } else if (kjrwrlx == "2") {
            if (!(sbsdlxj == "07" || sbsdlxj == "08")) {
                swordAlert("指定扣缴只能选择承包工程、提供劳务所得、其他租金 、国际运输！");
                $w('kjxxForm').setValue("sbsdlxjdm", "");
                return;
            }
        } else {
            swordAlert("请选择扣缴义务人类型！");
            $w('kjxxForm').setValue("sbsdlxjdm", "");
            return;
        }

        // 股息红利所得10,利息所得11
        // 将《中华人民共和国扣缴企业所得税报告表》的“合同名称”、“合同编号”、“合同执行起始时间”、“合同执行终止时间”、“合同总金额”改为条件必录，在数据项备注中增加以下描述当“申报所得类型及代码”为“股息红利所得”或“利息所得”时，非必录，其他必录。
        if (sbsdlxj == "10" || sbsdlxj == "11") {
            $w('kjxxForm').getFieldEl("htmc").set("rule", "");
            $w('kjxxForm').getFieldEl("htbh").set("rule", "");
            $w('kjxxForm').getFieldEl("htzxqssj").set("rule", "");
            //$w('kjxxForm').getFieldEl("htqszzsj").set("rule", "");
            $w('kjxxForm').getFieldEl("htjewz").set("rule", "");
        }
    }

    if (bzforkce == "false") {
        $w('kjxxForm').disable("kce");
    }

    if (kjrwrlx == "1") {
        //		$w('kjxxForm').setValue("sjzsl", "0.1");
        //		$w('kjxxForm').disable("sjzsl");
        handleSjzslChange("0.1");
    }
}

/**
 * 当修改申报日期时进行检测，调用公共js里面的相应方法
 * 
 * @return
 */
function checkSbrq() {
    var result = {};
    var sbrq1 = $w("nsrxxForm").getValue("sbrq1");
    if (nssbrq != null && nssbrq != undefined && nssbrq != "") {
        if (!sbData(sbrq1, nssbrq)) {
            result["state"] = false; // state值必须为false,否则不显示提示信息
            result["msg"] = "申报日期不得大于当前系统时间!";
            $w("nsrxxForm").setValue("sbrq1", nssbrq);
        }
    }

    return result;
}

var reCodeJmxx;
var reCodesfzrd;

function initOnSuccess(req, resData) {
    if (sbcwgzFlag == "Y") {
        $w("kjxxForm").getFieldEl("zqjmgnssbh").set("rule", "");
        $w("kjxxForm").getFieldEl("zqjmgmcEn").set("rule", "");
        $w("kjxxForm").getFieldEl("zqjmgmc").set("rule", "");
        $w("kjxxForm").getFieldEl("zqjmgdzEn").set("rule", "");
        $w("kjxxForm").getFieldEl("zqjmgdz").set("rule", "");
        $w("kjxxForm").getFieldEl("mc").set("rule", "");
        $w("kjxxForm").getFieldEl("kce").set("rule", "");
        $w("kjxxForm").getFieldEl("je").set("rule", "");
        $w("kjxxForm").getFieldEl("sl").set("rule", "");
        var kjrwrlx;
        fbXMLData["nsrxxForm"] = pc.getResData("nsrxxForm", resData);
        if (fbXMLData["nsrxxForm"] != null && fbXMLData["nsrxxForm"] != undefined && fbXMLData["nsrxxForm"] != "" && fbXMLData["nsrxxForm"].sword != undefined && fbXMLData["nsrxxForm"].sword != "") {
            kjrwrlx = fbXMLData["nsrxxForm"].data.kjrwrlx.value;

        }

        kjrwrlxAll = kjrwrlx;

        var kjxx = $w('kjxxForm');

        if (kjrwrlx == "1") { // 法定源泉扣缴
            var treeXML = $w("kjxxForm").getField("djzclx");
            treeXML.reloadSelectData("{ 'data': [  {'pcode': null,'code': '253','caption': '（港澳台商）缴纳预提所得税的企业'  },  {'pcode': 'null','code': '353','caption': '缴纳预提所得税的企业'  }] }");

            kjxx.disable("bcsbdsrze");
            kjxx.disable("swjghdlrl");
            kjxx.disable("sysl1");

            kjxx.enable("rmbje");
            kjxx.enable("mc");
            kjxx.enable("je");
            kjxx.enable("sl");
            kjxx.enable("kce");
        } else if (kjrwrlx == "2") { // 指定扣缴
            kjxx.enable("bcsbdsrze");
            kjxx.enable("swjghdlrl");
            kjxx.enable("sysl1");

            kjxx.disable("rmbje");
            kjxx.disable("mc");
            kjxx.disable("je");
            kjxx.disable("sl");
            kjxx.disable("kce");

        }

        $w('nsrxxForm').disable();
    }

    var sbxxList = pc.getResData("sbxxList", resData);
    sb071_sbxxList = sbxxList;
    getFb2Data(resData);
    if (tempsave_tryToLoadData) {
        //		if(yzpzzlDm){
        var skssqq = $w("nsrxxForm").getValue('skssqq')
        var skssqz = $w("nsrxxForm").getValue('skssqz')
        if (tempsave_tryToLoadData("BDA0610780", skssqq, skssqz, gt3.djxh, "SB071Kjqysdssb2015Ctrl")) {
            return;
        }
        //		}
    }
}

/**
 * 存储附表二的数据
 */
function getFb2Data(resData) {
    // 获得后台传过来的系统日期
    sb071_fb2ResData = resData;
    if ($chk(resData)) {
        var length = resData.data.length;
        for (var i = 0; i < length; i++) {
            var dataName = resData.data[i].dataName;
            if ($chk(dataName)) {
                if (dataName == "khyhList") {
                    sb071_khyhList = resData.data[i];
                }

                if (dataName == "zhList") {
                    sb071_zhList = resData.data[i];
                }
            }
        }
    }
}

// 针对未做税费种认定的进行操作
function zzsdjTrue() {
    var djxh = $w('nsrxxForm').getValue("djxh");
    var initBtn = new SwordSubmit();
    initBtn.pushData('zsxm_dm_in', "10104"); // （用例申报范围）适应于多个zsxm
    initBtn.pushData('zspm_dm_in', "101040001,101040000,101049900");
    // 一般用例只传zsxm_dm_in和zspm_dm_in即可
    initBtn.pushData('zsxm_dm_notin', ""); // （不在用例申报范围）
    initBtn.pushData('zspm_dm_notin', "");
    initBtn.pushData('djxh', djxh);
    initBtn.setTid('PBS_SB000_toLssfzrd');
    swordAlertIframe('', {
        titleName: "临时税费种认定",
        width: 800,
        height: 400,
        param: window,
        isNormal: 'true',
        isMax: 'true',
        isClose: 'true',
        isMin: "true",
        submit: initBtn
    });
}

function zzsdjFalse() {
    $w('nsrxxForm').disable();
    $w("saveBtn").disabled();
}

function initOnError(req, res) {
    swordAlert("初始化数据失败！");
}

function reset() {
    $w('nsrxxForm').reset();
    $w('kjxxForm').reset();

    var nsrxx = $w('nsrxxForm');
    nsrxx.setValue('dkdjywrsbh', resetresData.getAttr("dkdjywrsbh"));
    nsrxx.setValue('kjrwrmc', resetresData.getAttr("kjrwrmc"));
    nsrxx.setValue('skssqq', resetresData.getAttr("skssqq"));
    nsrxx.setValue('skssqz', resetresData.getAttr("skssqz"));
    nsrxx.setValue('sbrq1', resetresData.getAttr("sbrq1"));
    nsrxx.setValue('djxh', resetresData.getAttr("djxh"));
    nsrxx.setValue('ssglyDm', resetresData.getAttr("ssglyDm"));
    nsrxx.setValue('zgswskfjDm', resetresData.getAttr("zgswskfjDm"));
    nsrxx.setValue('djzclxDm', resetresData.getAttr("djzclxDm"));
    nsrxx.setValue('hyDm', resetresData.getAttr("hyDm"));
    nsrxx.setValue('dwlsgxDm', resetresData.getAttr("dwlsgxDm"));
    nsrxx.setValue('jdxzDm', resetresData.getAttr("jdxzDm"));
    nsrxx.setValue('yzpzzlDm', resetresData.getAttr("yzpzzlDm"));

    var kjxx = $w('kjxxForm');
    kjxx.setValue('nsrsbh', resetresData.getAttr("dkdjywrsbh"));
    kjxx.setValue('nsrmc', resetresData.getAttr("kjrwrmc"));
    kjxx.setValue('jjhyflDm', resetresData.getAttr("hyDm"));
    kjxx.setValue('jjlxDm', resetresData.getAttr("djzclxDm"));
    kjxx.setValue('dz', resetresData.getAttr("zcdz"));
    kjxx.setValue('sysl1', sysl);
    kjxx.setValue('sysl', sl);

    var nsrxxMap = $w('nsrxxForm').getSubmitData();
    var initBtn = new SwordSubmit();

    initBtn.pushData(nsrxxMap);
    initBtn.pushData("cs", "init");

    initBtn.setTid('PBS_SB071_init');
    initBtn.setFunction("onSuccess", "initOnSuccess"); //
    initBtn.setFunction("onError", "initOnError"); //
    initBtn.submit();
}

function checkSkssz() {
    // 判断日期是否有问题
    if (sb071_sysDate != null && sb071_sysDate != undefined && sb071_sysDate != "") {
        if (!checkSkssq()) {
            // ssqzBtn.stop();
            reCodesfzrd = "0";
            return;
        }
    }
}

/**
 * 当修改税款所属期起时进行检测，调用公共js里面的相应方法
 * 
 * @return
 */
function checkSkssq() {
    var skssqq = $w("nsrxxForm").getValue("skssqq");
    var skssqz = $w("nsrxxForm").getValue("skssqz");
    var result = qzDate(skssqq, skssqz, sb071_sysDate, sb071_nsqxDm); // skssqq,skssqz,today,nsqxdm

    return result;
}

/**
 * @name 计算日期差值
 * @description
 * @param e
 */
function GetDateDiff(startDate, endDate) {
    var startTime = new Date(Date.parse(startDate.replace(/-/g, "/"))).getTime();
    var endTime = new Date(Date.parse(endDate.replace(/-/g, "/"))).getTime();
    var dates = Math.abs((startTime - endTime)) / (1000 * 60 * 60 * 24);
    return dates;
}
/**
 * @description 校验是否享受减免
 * @param sfxsssxddy 是否享受税收协定
 * @param sfxsqtlxddy 是否享受其他类型协定
 * @param sfxsgnsfyh 是否享受国内法
 */
function checkHaveJm(sfxsssxddy, sfxsqtlxddy, sfxsgnsfyh) {
    var retB = false;
    if ($chk(sfxsssxddy) && "Y" == sfxsssxddy) {
        retB = gt3._isXsssjm;
    } else if (($chk(sfxsqtlxddy) && "Y" == sfxsqtlxddy) || ($chk(sfxsgnsfyh) && "Y" == sfxsgnsfyh)) {
        retB = true;
    }

    return retB;
}

/**
 * @name 保存
 * @description
 * @param e
 */
function declare(zcbz) {
    //暂存功能开关，同核心同步代码时需将此代码if和else同步更新
    if (zcbz != "Y") {
        //网报特色改造 begin
        if (kjqysds_bj == "Y") {
            var jy_sbrq1 = $w('nsrxxForm').getValue("sbrq1");
            var jy_bcsbsdqdrq = $w('kjxxForm').getValue("bcsbsdqdrq");
            if (GetDateDiff(jy_bcsbsdqdrq, jy_sbrq1) > 7 || GetDateDiff(jy_bcsbsdqdrq, jy_sbrq1) < -7) {
                swordAlert("“本次申报所得取得日期”与“申报日期”之间不允许相差7天以上,不允许申报,请重新填写!");
                return;
            }
        }
        //网报特色改造 end
        var jynsrxxForm = $w('nsrxxForm');
        var jykjxxForm = $w('kjxxForm');
        if (!jynsrxxForm.validate() || !jykjxxForm.validate()) {
            return;
        }

        var nsrsbh = jynsrxxForm.getValue("dkdjywrsbh");
        var kjrwrmc = jynsrxxForm.getValue("kjrwrmc");
        var jmqysdse = jykjxxForm.getValue("jmqysdse");
        var jmqysdse1 = jykjxxForm.getValue("jmqysdse1");
        var kjrdjxh = nsrxxVO['djxh'];

        if (jynsrxxForm.getValue('djzclx').code == '') {
            swordAlert("请输入登记注册类型!");
            jykjxxForm.getFieldEl('djzclx').focus();
            return;
        }

        if (jynsrxxForm.getValue('hyDm1') == '') {
            swordAlert("请选择行业!");
            jynsrxxForm.getFieldEl('hyDm1').focus();
            return;
        }

        if (jykjxxForm.getValue('sbsdlxjdm').code == '') {
            swordAlert("请输入申报所得类型代码!");
            jykjxxForm.getFieldEl('sbsdlxjdm').focus();
            return;
        }

        if (jykjxxForm.getValue('bcsbsdqdrq') == '') {
            swordAlert("请输入本次申报所得取得日期!");
            jykjxxForm.getFieldEl('bcsbsdqdrq').focus();
            return;
        }

        if (jykjxxForm.getValue('htmc') == '') {
            swordAlert("请输入合同名称!");
            jykjxxForm.getFieldEl('htmc').focus();
            return;
        }

        if (jykjxxForm.getValue('htbh') == '') {
            swordAlert("请输入合同编号!");
            jykjxxForm.getFieldEl('htbh').focus();
            return;
        }

        var sfxsssxddy = jykjxxForm.getValue('sfxsssxddy').code;
        var sfxsqtlxddy = jykjxxForm.getValue('sfxsqtlxddy').code;
        var sfxsgnsfyh = jykjxxForm.getValue('sfxsgnsfyh').code;

        if (jynsrxxForm.getValue('kjrwrlx').code == '1') {
            if (jykjxxForm.getValue('rmbje') == '') {
                swordAlert("请输入本次申报收入人民币金额!");
                jykjxxForm.getFieldEl('kjrwrlx').focus();
                return;
            }
            if (jykjxxForm.getValue('mc').code == '') {
                swordAlert("请输入外币名称!");
                jykjxxForm.getFieldEl('mc').focus();
                return;
            }
            if (jykjxxForm.getValue('je') == '') {
                swordAlert("请输入外币金额!");
                jykjxxForm.getFieldEl('je').focus();
                return;
            }
            if (jykjxxForm.getValue('sl') == '') {
                swordAlert("请输入外币汇率!");
                jykjxxForm.getFieldEl('sl').focus();
                return;
            }
            if (jykjxxForm.getValue('sjzsl') == '') {
                swordAlert("请输入实际征收率!");
                jykjxxForm.getFieldEl('sjzsl').focus();
                return;
            }

            if (parseFloat(jykjxxForm.getValue('jmqysdse')) > 0) {
                if (sfxsssxddy == "N" && sfxsqtlxddy == "N" && sfxsgnsfyh == "N") {
                    swordAlert("存在‘减免企业所得税额’,请选择‘是否享受税收协定待遇’、‘是否享受其他类协定待遇’、‘是否享受国内税法优惠’其中的一个！");
                    return;
                }
            }

        }
        if (jynsrxxForm.getValue('kjrwrlx').code == '2') {
            if (jykjxxForm.getValue('bcsbdsrze') == '') {
                swordAlert("请输入本次申报的收入总额!");
                jykjxxForm.getFieldEl('bcsbdsrze').focus();
                return;
            }
            if (jykjxxForm.getValue('ynssde') == '') {
                swordAlert("请输入本次应纳税所得额!");
                jykjxxForm.getFieldEl('ynssde').focus();
                return;
            }
            if (jykjxxForm.getValue('sysl1') == '') {
                swordAlert("请输入适用税率!");
                jykjxxForm.getFieldEl('sysl1').focus();
                return;
            }
        }

        if (sfxsssxddy == "Y" || sfxsqtlxddy == "Y" || sfxsgnsfyh == "Y") {
            var jmse = 0;
            if (jynsrxxForm.getValue('kjrwrlx').code == '1') {
                jmse = jykjxxForm.getValue('sdsjmse').accAdd(jykjxxForm.getValue('jmqysdse'));
            }
            if (jynsrxxForm.getValue('kjrwrlx').code == '2') {
                jmse = jykjxxForm.getValue('jmqysdse1');
            }

            var isHaveJm = checkHaveJm(sfxsssxddy, sfxsqtlxddy, sfxsgnsfyh);
            if (isHaveJm && jmse <= 0) { // 添加控制，当只有享受税收减免时才监控减免税额
                swordAlert("请录入相应的减免税额！");
                return;
            }
        }

        if (cwgzbz == 'cwgzbz') {
            if (yhjszyGrid.trs.length > 0) {
                swordAlert("上一笔申报含有税收缴款书（银行经收）附表，已缴款不允许更正!谢谢");
                return;
            }
        }


        swordConfirm("您是否确认填写无误，提交申报?", {
            onOk: function save() {
                var jynsrxxForm = $w('nsrxxForm');
                var jykjxxForm = $w('kjxxForm');
                var kjrdjxh = nsrxxVO['djxh'];
                var bcBtn = new SwordSubmit();
                bcBtn.pushData("cwgzbz", cwgzbz);
                bcBtn.pushData("wjnrbj", wjnrbj);
                bcBtn.pushData('zdkjDjxh', zdkjDjxh);

                var zb12Je = jykjxxForm.getValue('ysjjndqysdse'); //主表13行的金额
                var zb18Je = jykjxxForm.getValue('sjyjnedqysdse'); //主表22行的金额
                //校验主附表之间的金额是否相等(前提：附表的金额不为0)
                if (parseFloat(_fb1sjjehj) > 0) { //set附表1的值
                    if ((parseFloat(zb12Je) == parseFloat(_fb1sjjehj)) || (parseFloat(zb18Je) == parseFloat(_fb1sjjehj))) {
                        bcBtn.pushData(_dkdj_fb_skdszy_mxGrid['swsxzyGrid']);
                        bcBtn.pushData(_dkdj_fb_dkdszy_slxxForm['slxxForm_dkds']);

                        bcBtn.pushData('fb01_bz', _dkdj_fb_dkdszy_slxxForm['slxxForm_dkds'].trs[0].tds.bz.value);
                        bcBtn.pushData('fb01_kjywr', _dkdj_fb_dkdszy_slxxForm['slxxForm_dkds'].trs[0].tds.kjywr.value);
                        bcBtn.pushData('fb01_swjg', _dkdj_fb_dkdszy_slxxForm['slxxForm_dkds'].trs[0].tds.swjg.value);
                        bcBtn.pushData('fb01_tbr', _dkdj_fb_dkdszy_slxxForm['slxxForm_dkds'].trs[0].tds.tbr.value);
                    } else {
                        swordAlert("附表1(代扣代收专用)的合计金额和主表的13行或22行的金额不相等!请修改!");
                        return;
                    }
                }
                if (parseFloat(_fb2sjjehj) > 0) { //set附表2的值
                    if (parseFloat(zb12Je) == parseFloat(_fb2sjjehj) || (parseFloat(zb18Je) == parseFloat(_fb2sjjehj))) {
                        _dkdj_fb_yhjszy_yhxx['yhForm'].name = "yhForm";
                        _dkdj_fb_yhjszy_slxxForm['yhslxxForm_yhjs'].name = 'yhslxxForm_yhjs';
                        bcBtn.pushData(_dkdj_fb_yhjszy_yhxx['yhForm']);
                        bcBtn.pushData(_dkdj_fb_yhjszy_mxGrid["yhjszyGrid"]);
                        bcBtn.pushData('khyh', _dkdj_fb_yhjszy_yhxx["yhForm"].trs[0].tds.khyh.value);
                        bcBtn.pushData('zh', _dkdj_fb_yhjszy_yhxx["yhForm"].trs[0].tds.zh.value);
                        bcBtn.pushData(_dkdj_fb_yhjszy_slxxForm['yhslxxForm_yhjs']);

                        bcBtn.pushData('fb02_jbr', _dkdj_fb_yhjszy_slxxForm['yhslxxForm_yhjs'].trs[0].tds.jbr.value);
                        bcBtn.pushData('fb02_slrq', _dkdj_fb_yhjszy_slxxForm['yhslxxForm_yhjs'].trs[0].tds.slrq.value);
                        bcBtn.pushData('fb02_slswjg', _dkdj_fb_yhjszy_slxxForm['yhslxxForm_yhjs'].trs[0].tds.slswjg.value);
                        bcBtn.pushData('fb02_tpr', _dkdj_fb_yhjszy_slxxForm['yhslxxForm_yhjs'].trs[0].tds.tpr.value);
                    } else {
                        swordAlert("附表1(银行经收专用)的合计金额和主表的13行或22行的金额不相等!请修改!");
                        return;
                    }
                }
                //add by yangdalin 增加自查补报 自行补正通知书uuid传入后台 20150403
                bcBtn.pushData("zxbztzsuuid", gt3.zxbztzsuuid);
                bcBtn.pushData("djxh", kjrdjxh);
                bcBtn.pushData($w("kjxxForm").getSubmitData());
                bcBtn.pushData($w("nsrxxForm").getSubmitData());
                bcBtn.setFunction("onSuccess", "saveOnSuccess");
                bcBtn.setCtrl(ctrl + "_savekjqysds");
                if (cwgzbz == 'cwgzbz') { // 错误更正
                    bcBtn.pushData('cwgzbz', cwgzbz); // 错误更正标志
                    bcBtn.pushData('djxh', djxh);
                    bcBtn.pushData('pzxh', pzxh);
                    bcBtn.pushData('sbuuid', sbuuid);
                    bcBtn.pushData('yzpzzlDm', yzpzzlDm);
                    bcBtn.pushData('sblxDm', "10");
                    bcBtn.pushData('sbrq1', sbrq1);
                    bcBtn.pushData(sbbList); // 错误更正原始表单数据
                    // 申报错误更正触发保存方法逻辑
                    if (sbcwgzJs != 'sbcwgzJs') {
                        bcBtn.pushData("sbcwgzJs", 'sbcwgzJs');
                    } else {
                        bcBtn.pushData("sbcwgzJs", 'sbcwgzSv');
                    }
                }
                bcBtn.submit();
            },
            onCancel: function () {
                return;
            }
        });
    } else {
        var jynsrxxForm = $w('nsrxxForm');
        var jykjxxForm = $w('kjxxForm');
        var kjrdjxh = nsrxxVO['djxh'];
        kjrdjxh = gt3.djxh;
        var bcBtn = new SwordSubmit();
        bcBtn.pushData("cwgzbz", cwgzbz);
        bcBtn.pushData("wjnrbj", wjnrbj);
        bcBtn.pushData('zdkjDjxh', zdkjDjxh);

        var zb12Je = jykjxxForm.getValue('ysjjndqysdse'); //主表13行的金额
        var zb18Je = jykjxxForm.getValue('sjyjnedqysdse'); //主表22行的金额
        //校验主附表之间的金额是否相等(前提：附表的金额不为0)
        if (parseFloat(_fb1sjjehj) > 0) { //set附表1的值
            if ((parseFloat(zb12Je) == parseFloat(_fb1sjjehj)) || (parseFloat(zb18Je) == parseFloat(_fb1sjjehj))) {
                bcBtn.pushData(_dkdj_fb_skdszy_mxGrid['swsxzyGrid']);
                bcBtn.pushData(_dkdj_fb_dkdszy_slxxForm['slxxForm_dkds']);

                bcBtn.pushData('fb01_bz', _dkdj_fb_dkdszy_slxxForm['slxxForm_dkds'].trs[0].tds.bz.value);
                bcBtn.pushData('fb01_kjywr', _dkdj_fb_dkdszy_slxxForm['slxxForm_dkds'].trs[0].tds.kjywr.value);
                bcBtn.pushData('fb01_swjg', _dkdj_fb_dkdszy_slxxForm['slxxForm_dkds'].trs[0].tds.swjg.value);
                bcBtn.pushData('fb01_tbr', _dkdj_fb_dkdszy_slxxForm['slxxForm_dkds'].trs[0].tds.tbr.value);
            } else {
                swordAlert("附表1(代扣代收专用)的合计金额和主表的13行或22行的金额不相等!请修改!");
                return;
            }
        }
        if (parseFloat(_fb2sjjehj) > 0) { //set附表2的值
            if (parseFloat(zb12Je) == parseFloat(_fb2sjjehj) || (parseFloat(zb18Je) == parseFloat(_fb2sjjehj))) {
                _dkdj_fb_yhjszy_yhxx['yhForm'].name = "yhForm";
                _dkdj_fb_yhjszy_slxxForm['yhslxxForm_yhjs'].name = 'yhslxxForm_yhjs';
                bcBtn.pushData(_dkdj_fb_yhjszy_yhxx['yhForm']);
                bcBtn.pushData(_dkdj_fb_yhjszy_mxGrid["yhjszyGrid"]);
                bcBtn.pushData('khyh', _dkdj_fb_yhjszy_yhxx["yhForm"].trs[0].tds.khyh.value);
                bcBtn.pushData('zh', _dkdj_fb_yhjszy_yhxx["yhForm"].trs[0].tds.zh.value);
                bcBtn.pushData(_dkdj_fb_yhjszy_slxxForm['yhslxxForm_yhjs']);

                bcBtn.pushData('fb02_jbr', _dkdj_fb_yhjszy_slxxForm['yhslxxForm_yhjs'].trs[0].tds.jbr.value);
                bcBtn.pushData('fb02_slrq', _dkdj_fb_yhjszy_slxxForm['yhslxxForm_yhjs'].trs[0].tds.slrq.value);
                bcBtn.pushData('fb02_slswjg', _dkdj_fb_yhjszy_slxxForm['yhslxxForm_yhjs'].trs[0].tds.slswjg.value);
                bcBtn.pushData('fb02_tpr', _dkdj_fb_yhjszy_slxxForm['yhslxxForm_yhjs'].trs[0].tds.tpr.value);
            } else {
                swordAlert("附表1(银行经收专用)的合计金额和主表的13行或22行的金额不相等!请修改!");
                return;
            }
        }

        //add by yangdalin 增加自查补报 自行补正通知书uuid传入后台 20150403
        bcBtn.pushData("zxbztzsuuid", gt3.zxbztzsuuid);
        bcBtn.pushData("djxh", kjrdjxh);
        bcBtn.pushData($w("kjxxForm").getSubmitData());
        bcBtn.pushData($w("nsrxxForm").getSubmitData());
        bcBtn.pushData("sdlxQzdjbbz", gt3._qzdjbbz);
        bcBtn.setCtrl(ctrl + "_savekjqysds");
        if (cwgzbz == 'cwgzbz') { // 错误更正
            bcBtn.pushData('cwgzbz', cwgzbz); // 错误更正标志
            bcBtn.pushData('djxh', djxh);
            bcBtn.pushData('pzxh', pzxh);
            bcBtn.pushData('sbuuid', sbuuid);
            bcBtn.pushData('yzpzzlDm', yzpzzlDm);
            bcBtn.pushData('sblxDm', "10");
            bcBtn.pushData('sbrq1', sbrq1);
            bcBtn.pushData(sbbList); // 错误更正原始表单数据
            // 申报错误更正触发保存方法逻辑
            if (sbcwgzJs != 'sbcwgzJs') {
                bcBtn.pushData("sbcwgzJs", 'sbcwgzJs');
            } else {
                bcBtn.pushData("sbcwgzJs", 'sbcwgzSv');
            }
        }
        return bcBtn;
        //		bcBtn.submit();
    }
}

/**
 * @name 保存成功处理
 * @description
 * @param req
 * @param resData
 * 
 */
var successresData;

function saveOnSuccess(req, resData) {
    var sbsaveReturnVO = pc.getResData("sbsaveReturnVO", resData);

    var swjgDm = pc.getResData("swjgDm", resData).value;
    var nsrxxFrom = $w("nsrxxForm");
    yzpzxh = sbsaveReturnVO.data.pzxh.value;
    var flzlGridData = $w('flzlGrid').getCheckedData("check");
    //	if (cwgzbz != 'cwgzbz') {// 错误更正
    //		saveSxslxx(yzpzxh, djxh, nsrxxFrom.getValue("nsrsbh"), nsrxxFrom.getValue("nsrmc"), "SLSXA061005005", "LCSXA061005005", swjgDm, flzlGridData);
    //	}
    var returnBz = sbsaveReturnVO.data.returnBz.value;
    sbcwgzJs = resData.getAttr('sbcwgzJs');
    if (sbcwgzJs == 'sbcwgzJs') {
        $w("sbToolBar").setEnabled("printHz");
        var pzxhPre = sbsaveReturnVO.data.pzxh.value;
        yzpzxh = pzxhPre;
        var ybtse = sbsaveReturnVO.data.ybtse.value;
        sbcwgzGyjs(pzxhPre, ybtse, djxh, resData, 'declare', null);
    } else {
        if (returnBz == "Y") { //调用征收开票
            var pzxh = sbsaveReturnVO.data.pzxh.value;
            var ybtse = sbsaveReturnVO.data.ybtse.value;
            if (pzxh != "") {
                $w("sbToolBar").setEnabled("printHz");
                var pzxh = sbsaveReturnVO.data.pzxh.value;
                yzpzxh = pzxh;
                var ybtse = sbsaveReturnVO.data.ybtse.value;
                fromYbSBJumpZskp(pzxh, ybtse, djxh, resData);
            }
        } else if (returnBz == "1") { //不调用征收开票，提示申报金额
            var pzxh = sbsaveReturnVO.data.pzxh.value;
            var ybtse = sbsaveReturnVO.data.ybtse.value;
            if (ybtse < 0) {
                swordAlert("申报成功，当前纳税人申报凭证序号为： " + pzxh + " ,应缴纳税款为：" + ybtse + " 元,请进行退抵税审批!");
            } else if (ybtse >= 0) {
                swordAlert("申报成功，当前纳税人申报凭证序号为： " + pzxh + " ,应缴纳税款为：" + ybtse + " 元。");
            }
        }
    }

    $w("sbToolBar").setDisabled("save");
    tempsave_disable("sbToolBar");
    var skssqq = $w("nsrxxForm").getValue('skssqq');
    var skssqz = $w("nsrxxForm").getValue('skssqz');
    tempsave_invalid("BDA0610780", skssqq, skssqz, gt3.djxh);
}

function notJumpZskp($_saveResData) { }

function noZskp() {
    $w("nsrxxForm").disable();
    $w("kjxxForm").disable();
    $w("saveBtn").disabled();
    $w("drBtn").disabled();
    $w("cancel").disabled();
}

/**
 * 申报导入
 * @return
 */
function drxx() {
    var sbdrctrl = "SB071Kjqysdssb2015Ctrl" + "_getDrxx";
    var drxxBtn = new SwordSubmit();
    var djxh = djxh;
    gt3.djxh = djxh;
    if ($chk(djxh)) {
        drxxBtn.pushData('djxh', djxh);
    }

    drxxBtn.pushData('sbdrCtrl', sbdrctrl);
    drxxBtn.setCtrl('SBDrCtrl_openDr');
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

var sb071_cszForXML; // "SBDR"标志
function boxCallBackForSBdr(resData) {
    sb071_cszForXML = resData.getAttr("cszForXML"); // xml的参数值
    if (sb071_cszForXML == "SBDR") { // 导入
        XMLForSBDR(resData);
    }
}

/**
 * 申报导入，要求所有的button都亮着
 * 
 * @param resData
 * @return
 */
var sb071_resDataXMLForSBDR;

function XMLForSBDR(resData) {
    sb071_sbdrFlag = true;
    sb071_resDataXMLForSBDR = JSON.encode(resData);

    var nsrxx = $w('nsrxxForm');
    if (null != pc.getResData("nsrxxForm", resData).data.kjrwrlx) {
        nsrxx.setValue('kjrwrlx',
		pc.getResData("nsrxxForm", resData).data.kjrwrlx.value);
        kjrwrlxAll = pc.getResData("nsrxxForm", resData).data.kjrwrlx.value;
    }
    fbXMLData["kjxxForm"] = pc.getResData("kjxxForm", resData);
    if (fbXMLData["kjxxForm"] != null && fbXMLData["kjxxForm"] != undefined && fbXMLData["kjxxForm"] != "" && fbXMLData["kjxxForm"].sword != undefined && fbXMLData["kjxxForm"].sword != "") {
        $w("kjxxForm").initData(fbXMLData["kjxxForm"]);
        $w("kjxxForm").disable();
    }
    if (kjrwrlxAll == "1") {
        var treeXML = $w("kjxxForm").getField("djzclx");
        treeXML.reloadSelectData("{ 'data': [  {'pcode': null,'code': '253','caption': '（港澳台商）缴纳预提所得税的企业'  },  {'pcode': 'null','code': '353','caption': '缴纳预提所得税的企业'  }] }");
    }

    var tmpResData = JSON.encode(resData);
    tmpResData = JSON.decode(tmpResData);

    var dkdjzyGrid = pc.getResData("dkdjzyGrid", tmpResData);
    if ($chk(dkdjzyGrid) && $chk(dkdjzyGrid.sword)) {
        sb071_fbValue["dkdjzyGrid"] = dkdjzyGrid;
    }

    var yhslxxForm = pc.getResData("yhslxxForm", tmpResData);
    if ($chk(yhslxxForm) && $chk(yhslxxForm.sword)) {
        sb071_fbValue["yhslxxForm"] = yhslxxForm;
    }

    var jkrxxForm = pc.getResData("jkrxxForm", tmpResData);
    if ($chk(jkrxxForm) && $chk(jkrxxForm.sword)) {
        sb071_fbValue["jkrxxForm"] = jkrxxForm;
    }

    var yhjszyGrid = pc.getResData("yhjszyGrid", tmpResData);
    if ($chk(yhjszyGrid) && $chk(yhjszyGrid.sword)) {
        sb071_fbValue["yhjszyGrid"] = yhjszyGrid;
    }

    $w("kjxxForm").getFieldEl("zqjmgnssbh").set("rule", "");
    $w("kjxxForm").getFieldEl("zqjmgmcEn").set("rule", "");
    $w("kjxxForm").getFieldEl("zqjmgmc").set("rule", "");
    $w("kjxxForm").getFieldEl("zqjmgdzEn").set("rule", "");
    $w("kjxxForm").getFieldEl("zqjmgdz").set("rule", "");
    $w("kjxxForm").getFieldEl("mc").set("rule", "");
    $w("kjxxForm").getFieldEl("kce").set("rule", "");
    $w("kjxxForm").getFieldEl("je").set("rule", "");
    $w("kjxxForm").getFieldEl("sl").set("rule", "");

    $w("saveBtn").enabled();
    $w("kjxxForm").enable("hyDm");
    $w("kjxxForm").enable("djzclx");

    var nsrsbh = $w('kjxxForm').getValue("zqjmgnssbh");
    if (nsrsbh == null || nsrsbh == "") {
        return;
    }
    // 查询纳税人信息无权限
    var newBtn = new SwordSubmit();
    newBtn.pushData("nsrsbh", nsrsbh);
    newBtn.setTid('PBS_SB000_queryNsrZrrnoqx');
    newBtn.setFunction('onSuccess', 'verification');
    newBtn.submit();
}

/**
 * 校验纳税人识别号是否存在
 * 
 * @param req
 * @param resData
 * @return
 */
function checknsrsbh() {
    var nsrsbh = $w('kjxxForm').getValue("zqjmgnssbh");
    if (nsrsbh == null || nsrsbh == "") {
        return;
    }

    var cxbz = '4';
    //网报特色修改 begin 迁移时候请保留
    queryNsrxxbyNsrsbh2(nsrsbh, validate, cxbz);
    //网报特色修改 end
}

var jyNsr = {};

function validate(nsrParam, zrrParam) {
    if (nsrParam != "" && nsrParam != null) {
        for (var prop in nsrParam) {
            if (typeof (nsrParam[prop]) == " function ") { // 方法
                nsrParam[prop]();
            } else { // p 为属性名称，nsrParam[p]为对应属性的值
                jyNsr[prop] = nsrParam[prop].value;
            }
        }
        zdkjDjxh = nsrParam['djxh'].value;
    } else {
        if (zrrParam == "" || zrrParam == null || zrrParam == undefined) {
            swordAlert("未能根据当前被扣缴纳税人识别号查询到纳税人基本数据信息！");
            return;
        } else {
            nsrParam = zrrParam;
            zdkjDjxh = zrrParam.djxh.value;
        }
    }

    if (cwgzbz != 'cwgzbz') {
        var nsrxxMap = $w('nsrxxForm');
        var kjrwrlx = nsrxxMap.getValue('kjrwrlx').code;
        if (kjrwrlx == '1') { //法定源泉扣缴
            $w('kjxxForm').setValue('zzgjndmc', nsrParam['nsrmc'].value);

        } else {
            /**
			 * 校验指定源泉的的纳税人是否是非居民
			 */
            var testNsrQx = new SwordSubmit();
            testNsrQx.pushData("djxh", nsrParam['djxh'].value);
            testNsrQx.pushData("skssqq", $w('nsrxxForm').getValue("skssqq"));
            testNsrQx.pushData("skssqz", $w('nsrxxForm').getValue("skssqz"));
            testNsrQx.pushData("nsrmc", nsrParam['nsrmc'].value);
            testNsrQx.setFunction('onSuccess', 'onSuccessNsrqx');
            testNsrQx.setFunction('onError', 'onErrorNsrqx');
            testNsrQx.setCtrl("SB071Kjqysdssb2015Ctrl" + "_jyFjmNsrQx");
            testNsrQx.submit();
        }
    }
}

/**
 * 检验指定源泉的纳税人失败
 * @return
 */
function onErrorNsrqx() {
    $w('sbToolBar').setDisabled('save');
    tempsave_disable("sbToolBar");
    return;
}

/**
 * 法定源泉的实际征收率
 * @return
 */
function queryFdyqsjzsl() {
    var nsrxxMap = $w('nsrxxForm');
    var sbsdlxj = $w('kjxxForm').getValue("sbsdlxjdm").code;
    if (!$chk(sbsdlxj)) {
        $w('kjxxForm').setValue("syssxdtk", "");
        swordAlert("请先选择“申报所得类型及代码”");
        return;
    }

    var ssxdtkDm = $w('kjxxForm').getValue("syssxdtk").code;
    if (!$chk(ssxdtkDm)) {
        $w('kjxxForm').setValue("syssxdtk", "");
        swordAlert("请先选择“适用税收协定条款码”");
        return;
    }

    if (cwgzbz == 'cwgzbz' && !$chk(zdkjDjxh)) {
        checknsrsbh();
        $w("kjxxForm").setValue("sbsdlxjdm", "");
        return;
    } else if (!$chk(zdkjDjxh)) {
        swordAlert("被扣缴纳税人登记序号获取不到，请核对");
        return;
    }

    var queryT = new SwordSubmit();
    queryT.pushData('djxh', zdkjDjxh);
    queryT.pushData('kjdjxh', gt3.djxh);
    queryT.pushData("sbsdlxdm", sbsdlxj);
    queryT.pushData('htbh', $w('kjxxForm').getValue('htbh'));
    queryT.pushData('skssqq', nsrxxMap.getValue('skssqq'));
    queryT.pushData('skssqz', nsrxxMap.getValue('skssqz'));
    queryT.pushData('ssxdtkDm', convertSsxdtkForYh(ssxdtkDm));
    queryT.setCtrl("SB071Kjqysdssb2015Ctrl_queryFdyqsjzxl");
    queryT.setFunction("onSuccess", "queryFdyqsjzxlSuccess");
    queryT.submit();
}

/**
 * 查询法定源泉实际征收率成功
 * 默认自动带出10%且不可修改。
 * 如果非居民企业做过“非居民享受税收协定待遇审批”，则根据非居民纳税人识别号及申报日期查询当前非居民企业有效的税收协定或安排规定适用的税率，
 * 如果查询到，则再根据该结果是审批还是备案分别处理，
 * 审批类，自动带出审批的税收协定税率且不可修改；
 * 查询规则，根据申报表页面的“申报所得类型及代码”+被扣缴非居民登记信息，从认定环节非居民税收协定待遇审批结果中查询是否存在该非居民已审批通过且相同所得类型且有效的审批记录，
 * 如果存在，则取出审批后的实际征收率并显示到申报表对应数据项中。
 * 备案类，自动带出10%，可修改。
 * @return
 */
var splxbz = "";
var yqkjSjzsl = "0.1";
var zslsfxgflag = "";

function queryFdyqsjzxlSuccess(req, resData) {
    var kjrwrlx = $w("nsrxxForm").getValue('kjrwrlx').code;
    var xdzsl = pc.getResData("xdzsl", resData).value;
    var bfind = pc.getResData("bfind", resData).value;
    var msg = "";
    if (bfind == "N") {
        msg = "当前税款所属期内该非居民纳税人不存在非居民享受税收协定待遇备案，如需要重新备案，请去窗口办理？";
        gt3._isXsssjm = false;
    } else {
        if (0.1 != parseFloat($chk(xdzsl) ? xdzsl : 0)) { // 减征税率等于0.1时，不享受优惠减免
            gt3._isXsssjm = true;
        } else {
            gt3._isXsssjm = false;
        }

        if ("1" == kjrwrlx) {
            msg = "该非居民纳税人存在非居民享受税收协定待遇备案，减征税率为:" + xdzsl + "，如需要重新备案，请去窗口办理？";
        } else if ("2" == kjrwrlx) {
            msg = "该非居民纳税人存在非居民享受税收协定待遇备案，请录入减免所得税额享受减免，如需要重新备案，请去窗口办理？";
        }

        if (!gt3._isXsssjm) { // 不享受税收减免的提示
            msg = "该非居民纳税人存在非居民享受税收协定待遇备案，但不享受税收减免，如需要重新备案，请去窗口办理？";
        }
    }
    // 网报特色改造 begin
    if (msg != undefined && msg != null && msg != "") {
        if ("N" == bfind) {
            $w('kjxxForm').setValue("syssxdtk", "");
        }
        // 源泉扣缴时根据备案处理实际征收率的变化
        if ("1" == kjrwrlx) {
            handleSjzslChange(xdzsl);
        }
        swordAlert(msg);
    }
    // 网报特色改造 end
}

/**
 * @description 处理实际征收率改变
 * @param curZsl 变化后的征收率
 * 
 */
function handleSjzslChange(curZsl) {
    var sjzsl = $w('kjxxForm').getValue("sjzsl");
    var sjzslF = GyFormatRound(sjzsl, 6);
    var zslF = GyFormatRound(parseFloat(curZsl), 6);
    if (sjzslF != zslF) {
        $w('kjxxForm').setValue("sjzsl", curZsl);
        $w('kjxxForm').disable('sjzsl');
        caculate("kjxxForm_ysjjndqysdse");
        caculate("kjxxForm_jmqysdse");
    }
}

/**
 * 跳转优惠的非居民享受税收协定待遇界面
 * @return
 */
function openFjmxsssxddyPage() {
    var nsrxxMap = $w('nsrxxForm');
    var sbsdlxj = $w('kjxxForm').getValue("sbsdlxjdm").code;
    var fjmxsssxddysblxDm = "02";
    var htbh = $w('kjxxForm').getValue("htbh");
    var syssxdtk_sb = $w('kjxxForm').getValue("syssxdtk");
    var syssxdtk = convertSsxdtkForYh($chk(syssxdtk_sb) ? syssxdtk_sb.code : "");
    var bkjnsrsbh = $w('kjxxForm').getValue("zqjmgnssbh");
    var bkjnsrmc = $w('kjxxForm').getValue("zzgjndmc");

    var skssqq = nsrxxMap.getValue('skssqq');
    var skssqz = nsrxxMap.getValue('skssqz');
    if (!$chk(skssqq) || "" == skssqq || !$chk(skssqz) || "" == skssqz) {
        swordAlert("请先选择税款所属期！");
        return;
    }

    if (!$chk(htbh)) {
        swordAlert("无合同编号，请核对");
        return;
    }
    if (cwgzbz == 'cwgzbz' && !$chk(zdkjDjxh)) {
        checknsrsbh();
        $w("kjxxForm").setValue("sbsdlxjdm", "");
        return;
    } else if (!$chk(zdkjDjxh)) {
        swordAlert("被扣缴纳税人登记序号获取不到，请核对");
        return;
    }

    //	申报类型（必传）、			fjmxsssxddysblxDm
    //	合同编号（非必传）、			htbh
    //	扣缴义务人登记序号（非必传）、		kjdjxh
    //	扣缴义务人纳税人识别号、名称（非必传）、kjnsrsbh/kjnsrmc
    //	非居民登记序号（必传）、		djxh
    //	非居民纳税人识别号、名称（非必传）	nsrsbh/nsrmc
    //	非居民居民国（非必传）、		
    //	适用税收协定条款名称（非必传）、
    //	适用税收协定条款（申报组必传、征收可不传）syssxdtkDm
    var pathparam = decodeURI(location.search);
    var obj = {
        id: pc.getRandomUUID(),
        title: "非居民享受税收协定待遇优惠备案",
        tabContentType: 'iframe',
        src: '/sword?ctrl=YH107FjmxsssxddyyhCtrl_initView&' + pathparam.substring(pathparam.indexOf("&")) + '&kjdjxh=' + gt3.djxh + '&djxh=' + zdkjDjxh + '&fjmxsssxddysblxDm=' + fjmxsssxddysblxDm + '&syssxdtkDm=' + syssxdtk + '&htbh=' + htbh + '&yxqq=' + skssqq + '&yxqz=' + skssqz + '&nsrsbh=' + bkjnsrsbh + "&nsrmc=" + bkjnsrmc,
        isCloseBtn: 'true'
    };
    top.openXtgnToIframeTab('A0000001', obj);
}

/*********************************************************************************
 * 源泉扣缴实际征收率的监控
 * 当扣缴义务类型为“源泉扣缴”时，录入的实际征收率如低于10%，系统监控该非居民企业是否进行了享受协定待遇审批，
 * 如否，则提示“未进行税收协定待遇的审批备案，实际征收率不得低于10%”。
 * 
 * 实际征收率修改，实际应缴纳的企业所得税额计算（如申报所得项目修改后，触发获取实际征收率）
 * @param el
 * @param v
 * @returns {___anonymous24909_24912}
 */
function jyYqkjsjzsl() {
    var kjrwrlx = $w("nsrxxForm").getValue('kjrwrlx').code;
    var sjzsl = $w("kjxxForm").getValue('sjzsl');
    if (kjrwrlx == "1") {
        if (parseFloat(sjzsl) > 0.1) {
            swordAlert("实际征收率不能大于0.1");
            $w("kjxxForm").setValue('sjzsl', '0.1');
        }
    }

    jsSjyjnqysdse();
}

// 查询纳税人信息无权限
function verification(reqData, res) {
    var zqjmgnssbh = $w('kjxxForm').getValue("zqjmgnssbh");
    var bz = res.getAttr("bz");
    var ryxxList = pc.getResData("ryxxList", res);
    if (bz == "2") {
        var newBtn = new SwordSubmit();
        newBtn.pushData(ryxxList);
        newBtn.setTid('PBS_SB000_getNsrZrrListnoqx');
        swordAlertIframe('', {
            titleName: "纳税人信息列表",
            width: 800,
            height: 450,
            param: window,
            isNormal: 'true',
            isMax: 'true',
            isClose: 'true',
            isMin: "true",
            submit: newBtn
        });
    } else if (bz == "1") {
        setNsrZrr(ryxxList);
    } else if (bz == "0") {
        $w('kjxxForm').setValue("zzgjndmc", "");
    }
}

var bkjrdjxh = 0;
// 回写方法
function setNsrZrr(checkBoxData) {
    var zrrbz = checkBoxData.trs[0].tds.zrrbz.value;
    bkjrdjxh = checkBoxData.trs[0].tds.djxh.value;
    var nsrmc = checkBoxData.trs[0].tds.nsrmc.value;
    $w('kjxxForm').setValue("zzgjndmc", nsrmc);
    var hyDm = checkBoxData.trs[0].tds.hyDm.value;
    var djzclxDm = checkBoxData.trs[0].tds.djzclxDm.value;
    // 指定扣缴时带出
    if (hyDm != null && hyDm != "" && djzclxDm != null && djzclxDm != "" && kjrwrlxAll == "2") {
        var nsrxxMap = $w('nsrxxForm').getSubmitData();
        var newBtn = new SwordSubmit();
        newBtn.pushData("hyDm", hyDm);
        newBtn.pushData("djzclx", djzclxDm);
        newBtn.pushData(nsrxxMap);
        newBtn.pushData("bkjrdjxh", bkjrdjxh);
        newBtn.pushData("bzforht", "nodr");
        newBtn.setTid('PBS_SB071_getdrxxForSBDR'); // 复用一下
        newBtn.setFunction('onSuccess', 'verificationforht');
        newBtn.submit();
    } else {
        var nsrxxMap = $w('nsrxxForm').getSubmitData();
        var newBtn = new SwordSubmit();
        newBtn.pushData(nsrxxMap);
        newBtn.pushData("bkjrdjxh", bkjrdjxh);
        newBtn.pushData("bzforht", "nodrandqsl");
        newBtn.setTid('PBS_SB071_getdrxxForSBDR'); // 复用一下
        newBtn.setFunction('onSuccess', 'verificationforhtnew');
        newBtn.submit();
    }
}

// 查询纳税人信息无权限
function verificationforhtnew(reqData, res) {
    var skssqq = $w('nsrxxForm').getValue("skssqq");
    var skssqz = $w('nsrxxForm').getValue("skssqz");
    sjzsl(bkjrdjxh, skssqq, skssqz);
}

// 查询纳税人信息无权限
function verificationforht(reqData, res) {
    var djzclx = res.getAttr("djzclx");
    var hyDm = res.getAttr("hyDm");
    $w('kjxxForm').setValue("hyDm", hyDm);
    $w('kjxxForm').setValue("djzclx", djzclx);

    var yssdl = res.getAttr("yssdl");
    var isExist = res.getAttr("isExist");
    // 税务机关核定利润应是被扣缴人的核定利润不应该是扣缴人的核定利润
    // 非居民扣缴企业所得税和非居民企业所得税自行申报中的税率可修改问题
    if (yssdl != null && yssdl != "") {
        $w('kjxxForm').setValue("swjghdlrl", yssdl);
        caculate("kjxxForm_swjghdlrl");
    }

    if (isExist == "1") {
        $w('kjxxForm').enable("sjzsl");
    } else {
        $w('kjxxForm').disable("sjzsl");
    }
}

/**
 * @description 计算应纳税所得额
 * 
 */
function ybtseJs() {
    caculate("kjxxForm_zsrmbje");
    var kjxxForm = $w('kjxxForm');
    var ynsdse = kjxxForm.getValue("ynsdse");
    if (ynsdse != null && ynsdse != '' && ynsdse < 0) {
        $w('kjxxForm').setValue("yjndqysdse", 0.00);
        $w('kjxxForm').setValue("ysjjndqysdse", 0.00);
    }

}

function newChangeJs(e) {
    if (e.code != 32 && e.code != 13) {
        return;
    } else {
        changeSbssqq(e.code);
    }
}

/*********************************************************************************
 * 计算实际应缴纳的企业所得税额、减免企业所得税额
 * @param el
 * @param v
 * @returns {___anonymous24909_24912}
 */
function jsSjyjnqysdse() {
    //重新计算实际应缴纳的企业所得税额、减免企业所得税额 
    var kjxxForm = $w("kjxxForm");
    var kjrwrlx = $w("nsrxxForm").getValue('kjrwrlx').code;
    //适用于法定源泉扣缴情况
    if (kjrwrlx == "1") {
        caculate("kjxxForm_ysjjndqysdse");
        caculate("kjxxForm_jmqysdse");
    }

    //适用于主管税务机关指定扣缴情况
    if (kjrwrlx == "2") {
        caculate("kjxxForm_sjyjnedqysdse");
        caculate("kjxxForm_jmqysdse1");
    }
}

/*********************************************************************************
 * 逾期申报监控
 * 录入本次申报所得取得日期时，系统当前日期是否大于“本次申报所得取得日期”+7，当系统当前日期是否大于“本次申报所得取得日期”+7时，提示逾期申报。
 * @param el
 * @param v
 * @returns {___anonymous24909_24912}
 */
function checkSfyqsb() { }


function changekjlxForCwgz(inputEl) {
    var nsrxxMap = $w('nsrxxForm');
    var kjrwrlx = nsrxxMap.getValue('kjrwrlx').code;
    var kjxx = $w('kjxxForm');
    title_valuechange = "法定源泉扣缴";
    if (kjrwrlx == "1") { // 法定源泉扣缴
        title_valuechange = "法定源泉扣缴";
        // 新增校验
        // 纳税人在其居民国纳税识别号应该是条件必录的，当"扣缴义务类型"为"法定源泉扣缴"时，此项为必录项；当"扣缴义务类型"为"指定扣缴"的则非必录
        kjxx.getFieldEl("zqjmgnssbh").set("rule", "must");
        kjxx.getFieldEl("zqjmgmcEn").set("rule", "must");
        kjxx.getFieldEl("zqjmgmc").set("rule", "must");
        kjxx.getFieldEl("zqjmgdzEn").set("rule", "must");
        kjxx.getFieldEl("zqjmgdz").set("rule", "must");

        kjxx.getFieldEl("mc").set("rule", "must");
        kjxx.getFieldEl("kce").set("rule", "must");
        kjxx.getFieldEl("je").set("rule", "must");
        kjxx.getFieldEl("sl").set("rule", "must");
        kjxx.getFieldEl("kjhy").set("rule", "");
    }

    if (kjrwrlx == "2") { // 指定扣缴
        title_valuechange = "指定扣缴";
        // 新增校验
        // 纳税人在其居民国纳税识别号应该是条件必录的，当"扣缴义务类型"为"法定源泉扣缴"时，此项为必录项；当"扣缴义务类型"为"指定扣缴"的则非必录
        kjxx.getFieldEl("zqjmgnssbh").set("rule", "");
        kjxx.getFieldEl("zqjmgmcEn").set("rule", "");
        kjxx.getFieldEl("zqjmgmc").set("rule", "");
        kjxx.getFieldEl("zqjmgdzEn").set("rule", "");
        kjxx.getFieldEl("zqjmgdz").set("rule", "");
        kjxx.getFieldEl("mc").set("rule", "");
        kjxx.getFieldEl("kce").set("rule", "");
        kjxx.getFieldEl("je").set("rule", "");
        kjxx.getFieldEl("sl").set("rule", "");
        kjxx.validate("kce");
        kjxx.validate("mc");

        kjxx.enable("bcsbdsrze");
        // kjxx.enable("swjghdlrl"); // 税务机关核定利润率更正时不允许修改
        kjxx.enable("jmqysdse1");
        kjxx.getFieldEl("kjhy").set("rule", "must");
    }
}

function sbcwgzNotSave() {
    sbcwgzJs = ''; //清空
    $w('sbToolBar').setEnabled('save');
    tempsave_enable("sbToolBar"); //点亮保存按钮
}

//----------------------20150626新需求修改--------------
function changeSfxsssxddy() {
    var kjxx = $w('kjxxForm');
    var sfxsssxddy = kjxx.getValue('sfxsssxddy').code;
    if (!validateYhxx()) {
        swordAlert("是否享受税收协定待遇、是否享受其他类协定待遇、是否享受国内税法优惠不能同时选择【是】");
        $w('kjxxForm').setValue("sfxsssxddy", "");
        return;
    }

    if (sfxsssxddy == 'Y' && validateYhxx()) {
        kjxx.getFieldEl("syssxdtk").set("rule", "must");
    } else {
        kjxx.getFieldEl("syssxdtk").set("rule", "");
        $w('kjxxForm').setValue("syssxdtk", "");
        getsjzsl();
    }
}

function changeSfxsqtlxddy() {
    var kjxx = $w('kjxxForm');
    var sfxsqtlxddy = kjxx.getValue('sfxsqtlxddy').code;
    if (!validateYhxx()) {
        swordAlert("是否享受税收协定待遇、是否享受其他类协定待遇、是否享受国内税法优惠不能同时选择【是】");
        $w('kjxxForm').setValue("sfxsqtlxddy", "");
        return;
    }

    if (sfxsqtlxddy == 'Y' && validateYhxx()) {
        kjxx.getFieldEl("qtlxdmc").set("rule", "must");
    } else {
        kjxx.getFieldEl("qtlxdmc").set("rule", "");
        $w('kjxxForm').setValue("qtlxdmc", "");
    }
}

function changeSfxsgnsfyh() {
    var kjxx = $w('kjxxForm');
    var sfxsgnsfyh = kjxx.getValue('sfxsgnsfyh').code;
    if (!validateYhxx()) {
        swordAlert("是否享受税收协定待遇、是否享受其他类协定待遇、是否享受国内税法优惠不能同时选择【是】");
        $w('kjxxForm').setValue("sfxsgnsfyh", "");
        return;
    }
    if (sfxsgnsfyh == 'Y' && validateYhxx()) {
        kjxx.getFieldEl("gnsfyhxm").set("rule", "must");
    } else {
        kjxx.getFieldEl("gnsfyhxm").set("rule", "");
        $w('kjxxForm').setValue("gnsfyhxm", "");
    }
}

function changKjhy(option, selItem, obj) {
    if ($chk(selItem)) {
        var kjxx = $w('kjxxForm');
        kjxx.setValue("swjghdlrl", selItem.swjghdLrl);
    } else {
        kjxx.setValue("swjghdlrl", "");
    }

    caculate("kjxxForm_swjghdlrl");
}

function validateYhxx() {
    var kjxx = $w('kjxxForm');
    var sfxsssxddy = kjxx.getValue('sfxsssxddy').code;
    var sfxsqtlxddy = kjxx.getValue('sfxsqtlxddy').code;
    var sfxsgnsfyh = kjxx.getValue('sfxsgnsfyh').code;
    var i = 0;
    if (sfxsssxddy == 'Y') {
        i++;
    }
    if (sfxsqtlxddy == 'Y') {
        i++;
    }
    if (sfxsgnsfyh == 'Y') {
        i++;
    }
    if (i > 1) {
        return false;
    } else {
        return true;
    }
}

function changeSyssxdtk() {
    var kjxx = $w('kjxxForm');
    var sfxsssxddy = kjxx.getValue('sfxsssxddy').code;
    if (sfxsssxddy == 'N') {
        swordAlert("是否享受税收协定待遇不能选择为【否】");
        $w('kjxxForm').setValue("syssxdtk", "");
        kjxx.getFieldEl("syssxdtk").set("rule", "");
        return;
    }

    //调用优惠的方法，查备案及优惠税率
    queryFdyqsjzsl();
}

function changeQtlxdmc() {
    var kjxx = $w('kjxxForm');
    var sfxsqtlxddy = kjxx.getValue('sfxsqtlxddy').code;
    if (sfxsqtlxddy == 'N') {
        swordAlert("是否享受其他类协定待遇不能选择为【否】");
        $w('kjxxForm').setValue("qtlxdmc", "");
        kjxx.getFieldEl("qtlxdmc").set("rule", "");
        return;
    }
}

function changeGnsfyhxm() {
    var kjxx = $w('kjxxForm');
    var sfxsgnsfyh = kjxx.getValue('sfxsgnsfyh').code;
    if (sfxsgnsfyh == 'N') {
        swordAlert("是否享受国内税法优惠不能为【否】");
        $w('kjxxForm').setValue("gnsfyhxm", "");
        kjxx.getFieldEl("gnsfyhxm").set("rule", "");
        return;
    }
}

function checkJmse() {
    var kjxx = $w('kjxxForm');
    var jmse = kjxx.getValue('jmqysdse1');
    var sdsjmse = kjxx.getValue('sdsjmse');
    if (jmse > 0 || sdsjmse > 0) {
        var syssxdtk = kjxx.getValue('syssxdtk').code;
        var gnsfyhxm = kjxx.getValue('gnsfyhxm').code;
        var qtlxdmc = kjxx.getValue('qtlxdmc');

        if (!$chk(gnsfyhxm) && !$chk(syssxdtk) && !$chk(qtlxdmc)) {
            $w('kjxxForm').setValue("jmqysdse1", "0.00");
            caculate("kjxxForm_jmqysdse1");
            $w('kjxxForm').setValue("sdsjmse", "0.00");
            caculate("kjxxForm_sdsjmse");
            swordAlert("请先录入相应的税收协定条款、名称或国内税法优惠项目！");
        }
    }
}

/**
 * 改变登记注册类型
 */
function sbsdlxjDmFilter(dataObj) {
    var nsrxxMap = $w('nsrxxForm');
    var kjrwrlx = nsrxxMap.getValue('kjrwrlx').code;
    var newData = [];
    if (kjrwrlx == '' || kjrwrlx == '2') {
        dataObj.each(function (item, index) {
            newData[newData.length] = item;
        });
    } else {
        dataObj.each(function (item, index) {
            if (item.DJZCLX_DM == '253' || item.DJZCLX_DM == '353') newData[newData.length] = item;
        });
    }

    return newData;
}

function setZbdymbuuid() {
    hxdyForPrint = "Y";
    printTitle = "申报——扣缴企业所得税申报2015";
    return "sb071_kjqysdssb2015print";
}

/**
 * 将申报的税收协定条款转换成优惠适用的税收协定条款
 * @param syssxdtk_sb 页面税收协定条款代码值
 */
function convertSsxdtkForYh(syssxdtk_sb) {
    var ssxdtkDm = "";
    if (syssxdtk_sb == "2001") {
        ssxdtkDm = "01";
    } else if (syssxdtk_sb == "2002") {
        ssxdtkDm = "02";
    } else if (syssxdtk_sb == "2003") {
        ssxdtkDm = "03";
    } else if (syssxdtk_sb == "2004") {
        ssxdtkDm = "04";
    } else if (syssxdtk_sb == "2005") {
        ssxdtkDm = "07";
    } else if (syssxdtk_sb == "2006") {
        ssxdtkDm = "06";
    } else if (syssxdtk_sb == "2009") {
        ssxdtkDm = "05";
    }

    return ssxdtkDm;
}
/*******************************************************************************
 * 打印
 */
function print() {
    gyTaxPrint();
}
//大小写转换
/**
 * 金额小写转大写
 * @param {Object} numberValue
 * @return {TypeName} 
 */
function atoc(numberValue) {
    var numberValue = new String(Math.round(numberValue * 100)); // 数字金额
    var chineseValue = ""; // 转换后的汉字金额
    var String1 = "零壹贰叁肆伍陆柒捌玖"; // 汉字数字
    var String2 = "万仟佰拾亿仟佰拾万仟佰拾元角分"; // 对应单位
    var len = numberValue.length; // numberValue 的字符串长度
    var Ch1; // 数字的汉语读法
    var Ch2; // 数字位的汉字读法
    var nZero = 0; // 用来计算连续的零值的个数
    var String3; // 指定位置的数值
    if (len > 15) {
        alert("超出计算范围");
        return "";
    }
    if (numberValue == 0) {
        chineseValue = "零元整";
        return chineseValue;
    }
    String2 = String2.substr(String2.length - len, len); // 取出对应位数的STRING2的值
    for (var i = 0; i < len; i++) {
        String3 = parseInt(numberValue.substr(i, 1), 10); // 取出需转换的某一位的值
        if (i != (len - 3) && i != (len - 7) && i != (len - 11) && i != (len - 15)) {
            if (String3 == 0) {
                Ch1 = "";
                Ch2 = "";
                nZero = nZero + 1;
            } else if (String3 != 0 && nZero != 0) {
                Ch1 = "零" + String1.substr(String3, 1);
                Ch2 = String2.substr(i, 1);
                nZero = 0;
            } else {
                Ch1 = String1.substr(String3, 1);
                Ch2 = String2.substr(i, 1);
                nZero = 0;
            }
        } else { // 该位是万亿，亿，万，元位等关键位
            if (String3 != 0 && nZero != 0) {
                Ch1 = "零" + String1.substr(String3, 1);
                Ch2 = String2.substr(i, 1);
                nZero = 0;
            } else if (String3 != 0 && nZero == 0) {
                Ch1 = String1.substr(String3, 1);
                Ch2 = String2.substr(i, 1);
                nZero = 0;
            } else if (String3 == 0 && nZero >= 3) {
                Ch1 = "";
                Ch2 = "";
                nZero = nZero + 1;
            } else {
                Ch1 = "";
                Ch2 = String2.substr(i, 1);
                nZero = nZero + 1;
            }
            if (i == (len - 11) || i == (len - 3)) { // 如果该位是亿位或元位，则必须写上
                Ch2 = String2.substr(i, 1);
            }
        }
        chineseValue = chineseValue + Ch1 + Ch2;
    }
    if (String3 == 0) { // 最后一位（分）为0时，加上“整”
        chineseValue = chineseValue + "整";
    }
    return chineseValue;
}
/*******************************************************************************
 * 打印回执
 */
function printHz() {
    var printBtn = new SwordSubmit();
    printBtn.pushData("yzpzxh", yzpzxh);
    printBtn.pushData("sbbmc", "扣缴企业所得税申报回执");
    printBtn.setCtrl("SBDyCtrl" + "_printHz");
    swordOpenWin('/sword?ctrl=' + "SBDyCtrl" + '_printHz&r=' + Math.random(),
	printBtn);
}

function setZbdymbuuid() {
    hxdyForPrint = "Y";
    printTitle = "申报——扣缴企业所得税申报2015";
    return "sb071_kjqysdssb2015print";
}
/**
 * 将申报的税收协定条款转换成优惠适用的税收协定条款
 * @param syssxdtk_sb 页面税收协定条款代码值
 */
function convertSsxdtkForYh(syssxdtk_sb) {
    var ssxdtkDm = "";
    if (syssxdtk_sb == "2001") {
        ssxdtkDm = "01";
    } else if (syssxdtk_sb == "2002") {
        ssxdtkDm = "02";
    } else if (syssxdtk_sb == "2003") {
        ssxdtkDm = "03";
    } else if (syssxdtk_sb == "2004") {
        ssxdtkDm = "04";
    } else if (syssxdtk_sb == "2005") {
        ssxdtkDm = "07";
    } else if (syssxdtk_sb == "2006") {
        ssxdtkDm = "06";
    } else if (syssxdtk_sb == "2009") {
        ssxdtkDm = "05";
    }

    return ssxdtkDm;
}
/**
 * 自定义实现暂存方法 (方法名称固定)
 * 参考: saveSubmit3, 获取提交对象
 */
function tempSave(fnName) {
    //	if(table01iframe.saveFbTemp){
    //		table01iframe.saveFbTemp();
    //	}
    //	if(table02iframe.saveFbTemp){
    //		table02iframe.saveFbTemp();
    //	}
    var saveBtn = declare("Y");
    //N:非业务平台条(swordSubmit.submit()), Y:业务明天方式提交(ywpt_submit)
    var params = '"",saveBtn';
    eval(fnName + '(' + params + ')');
}
/**
 * 申报暂存导入之后的回调函数 (方法名臣固定)
 * 参考: boxCallBackForSBdr 并将禁用输入以及按钮相关逻辑去除
 */
var sb071_resDataXMLForSBDR1;

function boxCallBackForSBzcdr(resData) {

    //	sb071_sbdrFlag = true;
    sb071_resDataXMLForSBDR1 = resData;
    _dkdj_fb_dkdszy_slxxForm['slxxForm_dkds'] = ''; //先清空原数据
    _dkdj_fb_skdszy_mxGrid["swsxzyGrid"] = '';
    _dkdj_fb_dkdszy_slxxForm['slxxForm_dkds'] = pc.getResData("dsSlxxFormGrid", resData); //表尾信息;
    _dkdj_fb_skdszy_mxGrid['swsxzyGrid'] = pc.getResData("swsxzyGrid", resData); //明细Grid信息
    _dkdj_fb_yhjszy_yhxx['yhForm'] = '';
    _dkdj_fb_yhjszy_mxGrid['yhjszyGrid'] = '';
    _dkdj_fb_yhjszy_slxxForm['yhslxxForm_yhjs'] = '';
    _dkdj_fb_yhjszy_yhxx['yhForm'] = pc.getResData("nsrxxForm1VOGrid", resData); //银行信息
    _dkdj_fb_yhjszy_mxGrid['yhjszyGrid'] = pc.getResData("yhjszyGrid", resData); //明细Grid信息
    _dkdj_fb_yhjszy_slxxForm['yhslxxForm_yhjs'] = pc.getResData("yhSlxxFormGrid", resData); //表尾信息
    //主表
    var nsrxx = $w('nsrxxForm');
    var nsrxxForm = pc.getResData("nsrxxForm", resData);
    if (nsrxxForm != null && nsrxxForm != undefined && nsrxxForm != "" && nsrxxForm.sword != undefined && nsrxxForm.sword != "") {
        nsrxx.initData(nsrxxForm);
        nsrxx.setValue('kjrwrlx',
		nsrxxForm.data.kjywrlx.value);
        nsrxx.setValue('djzclx',
		nsrxxForm.data.djzclxDm.value);
        nsrxx.setValue('hyDm1',
		nsrxxForm.data.hyDm.value);
    }
    //	kjrwrlxAll = pc.getResData("nsrxxForm", resData).data.kjywrlx.value;
    var kjxxForm = pc.getResData("kjxxForm", resData);
    if (kjxxForm != null && kjxxForm != undefined && kjxxForm != "" && kjxxForm.sword != undefined && kjxxForm.sword != "") {
        $w("kjxxForm").initData(kjxxForm);
        $w("kjxxForm").setValue('nsrmcEn',
		kjxxForm.data.kjywrywmc.value);
        $w("kjxxForm").setValue('lxr',
		kjxxForm.data.kjywrLxr.value);
        $w("kjxxForm").setValue('dzEn',
		kjxxForm.data.kjywrYwdz.value);
        //===nsrjbxx
        var NsrjbxxForm = pc.getResData("NsrjbxxForm", resData);
        $w("kjxxForm").setValue('zqjmgnssbh',
		NsrjbxxForm.data.zqjmgnssbh.value);
        $w("kjxxForm").setValue('zzgjndmc',
		NsrjbxxForm.data.zzgjndmc.value);
        $w("kjxxForm").setValue('jmgnssbh',
		NsrjbxxForm.data.nsrzqjmgnssbh.value);
        $w("kjxxForm").setValue('jndmc',
		NsrjbxxForm.data.nsrzwmc.value);
        $w("kjxxForm").setValue('jmgmcjdm',
		NsrjbxxForm.data.nsrzqjmgDqMcjdm.value);
        $w("kjxxForm").setValue('zzgjldmcEn',
		NsrjbxxForm.data.nsrywmc.value);
        $w("kjxxForm").setValue('zqjmgmc',
		NsrjbxxForm.data.jmgnsrZwmc.value);
        $w("kjxxForm").setValue('zqjmgdz',
		NsrjbxxForm.data.nsrzqjmgzwdz.value);
        $w("kjxxForm").setValue('zqjmgmcEn',
		NsrjbxxForm.data.jmgnsrYwmc.value);
        $w("kjxxForm").setValue('zqjmgdzEn',
		NsrjbxxForm.data.nsrzqjmgywdz.value);
        $w("kjxxForm").setValue('sbsdlxjdm',
		NsrjbxxForm.data.sbsdlxjdm.value);
        $w("kjxxForm").setValue('bcsbsdqdrq',
		NsrjbxxForm.data.bcsbsdqdrq.value);
        $w("kjxxForm").setValue('htmc',
		NsrjbxxForm.data.htmc.value);
        $w("kjxxForm").setValue('htbh',
		NsrjbxxForm.data.htbh.value);
        $w("kjxxForm").setValue('htjewz',
		NsrjbxxForm.data.htjewz.value);
        $w("kjxxForm").setValue('htbz',
		NsrjbxxForm.data.htbz.value);
        $w("kjxxForm").setValue('htzxqssj',
		NsrjbxxForm.data.htzxqssj.value);
        $w("kjxxForm").setValue('htqszzsj',
		NsrjbxxForm.data.htzxzzsj.value);
        $w("kjxxForm").setValue('sfxsssxddy',
		NsrjbxxForm.data.sfxsssxddy.value);
        $w("kjxxForm").setValue('syssxdtk',
		NsrjbxxForm.data.syssxdtk.value);
        $w("kjxxForm").setValue('sfxsqtlxddy',
		NsrjbxxForm.data.sfxsqtlxddy.value);
        $w("kjxxForm").setValue('qtlxdmc',
		NsrjbxxForm.data.qtlxdmc.value);
        $w("kjxxForm").setValue('sfxsgnsfyh',
		NsrjbxxForm.data.sfxsgnsfyh.value);
        $w("kjxxForm").setValue('gnsfyhxm',
		NsrjbxxForm.data.gnsfyhxm.value);
        //fdyqkjqkForm
        var FdyqkjqkForm = pc.getResData("FdyqkjqkForm", resData);
        $w("kjxxForm").setValue('sjzsl',
		FdyqkjqkForm.data.sjzsl.value);
        $w("kjxxForm").setValue('rmbje',
		FdyqkjqkForm.data.rmbje.value);
        $w("kjxxForm").setValue('mc',
		FdyqkjqkForm.data.mc.value);
        $w("kjxxForm").setValue('je',
		FdyqkjqkForm.data.je.value);
        $w("kjxxForm").setValue('sl',
		FdyqkjqkForm.data.sl.value);
        $w("kjxxForm").setValue('zsrmbje',
		FdyqkjqkForm.data.zsrmbje.value);
        $w("kjxxForm").setValue('rmbjehj',
		FdyqkjqkForm.data.rmbjehj.value);
        $w("kjxxForm").setValue('kce',
		FdyqkjqkForm.data.kce.value);
        $w("kjxxForm").setValue('sdsjmse',
		FdyqkjqkForm.data.sdsjmse.value);
        $w("kjxxForm").setValue('ynsdse',
		FdyqkjqkForm.data.ynsdse.value);
        $w("kjxxForm").setValue('sysl',
		FdyqkjqkForm.data.sysl.value);
        $w("kjxxForm").setValue('yjndqysdse',
		FdyqkjqkForm.data.yjndqysdse.value);
        $w("kjxxForm").setValue('ysjjndqysdse',
		FdyqkjqkForm.data.ysjjndqysdse.value);
        $w("kjxxForm").setValue('jmqysdse',
		FdyqkjqkForm.data.jmqysdse.value);
        //ZgswjgzdkjqkForm
        var ZgswjgzdkjqkForm = pc.getResData("ZgswjgzdkjqkForm", resData);
        $w("kjxxForm").setValue('kjhy',
		ZgswjgzdkjqkForm.data.kjhyDm.value);
        $w("kjxxForm").setValue('bcsbdsrze',
		ZgswjgzdkjqkForm.data.bcsbdsrze.value);
        $w("kjxxForm").setValue('swjghdlrl',
		ZgswjgzdkjqkForm.data.swjghdlrl.value);
        $w("kjxxForm").setValue('ynssde',
		ZgswjgzdkjqkForm.data.ynssde.value);
        $w("kjxxForm").setValue('sysl1',
		ZgswjgzdkjqkForm.data.sysl1.value);
        $w("kjxxForm").setValue('ynqysdse',
		ZgswjgzdkjqkForm.data.ynqysdse.value);
        $w("kjxxForm").setValue('jmqysdse1',
		ZgswjgzdkjqkForm.data.jmqysdse1.value);
        $w("kjxxForm").setValue('sjyjnedqysdse',
		ZgswjgzdkjqkForm.data.sjyjnedqysdse.value);
        var SlxxForm = pc.getResData("SlxxForm", resData);
        $w("kjxxForm").setValue('swdljbr',
		SlxxForm.data.swdlrjbr.value);
        $w("kjxxForm").setValue('swdlrjbrzyzjhm',
		SlxxForm.data.swdlrjbrzyzjhm.value);
        $w("kjxxForm").setValue('swdlrdlsbrq',
		SlxxForm.data.swdlrdlsbrq.value);
        $w("kjxxForm").setValue('slr',
		SlxxForm.data.slr.value);
        $w("kjxxForm").setValue('slswjgmc',
		SlxxForm.data.slswjgmc.value);
        $w("kjxxForm").setValue('slrq',
		SlxxForm.data.slrq.value);
    }
    var nsrxxMap = $w('nsrxxForm');
    var kjrwrlx = nsrxxMap.getValue('kjrwrlx').code;
    //	nsrxxMap.setValue("djzclx", "");
    //	nsrxxMap.setValue("hyDm1", "");
    //	nsrxxMap.enable("djzclx");
    var skssqq = $w("nsrxxForm").getValue("skssqq");
    var skssqz = $w("nsrxxForm").getValue("skssqz");
    if (!$chk(gt3.djxh) || "" == gt3.djxh || !$chk(skssqq) || "" == skssqq || !$chk(skssqz) || "" == skssqz) {
        swordAlert("未取得扣缴义务人信息，请先录入扣缴义务人识别号和税款所属期！");
        return;
    }

    kjrwrlxAll = kjrwrlx;
    var kjxx = $w('kjxxForm');
    title_valuechange = "法定源泉扣缴";

    var isGetHtbaxx = true;
    if (kjrwrlx == "1") { // 法定源泉扣缴
        title_valuechange = "法定源泉扣缴";
        kjxx.disable("zqjmgnssbh");
        kjxx.disable("zzgjndmc");
        kjxx.disable("jndmc");
        kjxx.disable("jmgmcjdm");
        kjxx.disable("zqjmgmc");
        kjxx.disable("zqjmgdz");
        kjxx.disable("zqjmgmcEn");
        kjxx.disable("zqjmgdzEn");
        // 新增校验
        // 纳税人在其居民国纳税识别号应该是条件必录的，当"扣缴义务类型"为"法定源泉扣缴"时，此项为必录项；当"扣缴义务类型"为"指定扣缴"的则非必录
        kjxx.getFieldEl("zqjmgnssbh").set("rule", "must");
        kjxx.getFieldEl("zqjmgmcEn").set("rule", "must");
        kjxx.getFieldEl("zqjmgmc").set("rule", "must");
        kjxx.getFieldEl("zqjmgdzEn").set("rule", "must");
        kjxx.getFieldEl("zqjmgdz").set("rule", "must");
        kjxx.getFieldEl("mc").set("rule", "must");
        kjxx.getFieldEl("kce").set("rule", "must");
        kjxx.getFieldEl("je").set("rule", "must");
        kjxx.getFieldEl("sl").set("rule", "must");

        kjxx.validate("zqjmgnssbh");
        kjxx.validate("nsrmcEn");
        kjxx.validate("nsrmc");
        kjxx.disable("kjhy");
        kjxx.getFieldEl("kjhy").set("rule", "");

        kjxx.disable("bcsbdsrze");
        kjxx.disable("swjghdlrl");
        kjxx.disable("sysl1");
        kjxx.disable("ynssde");
        kjxx.disable("kce");
        kjxx.disable("jmqysdse1");

        kjxx.enable("rmbje");
        kjxx.enable("mc");
        kjxx.enable("je");
        kjxx.enable("sl");
        kjxx.enable("sdsjmse");
        kjxx.enable("kce");

        //		kjxx.setValue("bcsbdsrze", "");
        //		kjxx.setValue("ynssde", "");
        //		kjxx.setValue("ynqysdse", "");
        //		kjxx.setValue("sysl1", sysl);
        //		kjxx.setValue("kjhy", "");
        //		kjxx.setValue("sjyjnedqysdse", "");
        //		kjxx.setValue("jmqysdse1", "");
        //        kjxx.setValue('zzgjndmc',''); 

        //		$w('kjxxForm').setValue('sjzsl', sl);
        //		kjxx.setValue("kce", "0");
        //		kjxx.setValue("ysjjndqysdse", "0");
        //		kjxx.setValue("jmqysdse", "0");
        //		kjxx.setValue("rmbje","0.0");
    } else if (kjrwrlx == "2") { // 指定扣缴
        title_valuechange = "指定扣缴";
        nsrxxMap.disable("djzclx");
        kjxx.disable("zqjmgnssbh");
        kjxx.disable("zzgjndmc");
        kjxx.disable("jndmc");
        kjxx.disable("jmgmcjdm");
        kjxx.disable("zqjmgmc");
        kjxx.disable("zqjmgdz");
        // 处理指定扣缴信息
        // 纳税人在其居民国纳税识别号应该是条件必录的，当"扣缴义务类型"为"法定源泉扣缴"时，此项为必录项；当"扣缴义务类型"为"指定扣缴"的则非必录
        var kjxx = $w('kjxxForm');
        kjxx.getFieldEl("zqjmgnssbh").set("rule", "");
        kjxx.getFieldEl("zqjmgmcEn").set("rule", "");
        kjxx.getFieldEl("zqjmgmc").set("rule", "");
        kjxx.getFieldEl("zqjmgdzEn").set("rule", "");
        kjxx.getFieldEl("zqjmgdz").set("rule", "");
        kjxx.getFieldEl("mc").set("rule", "");
        kjxx.getFieldEl("kce").set("rule", "");
        kjxx.getFieldEl("je").set("rule", "");
        kjxx.getFieldEl("sl").set("rule", "");
        kjxx.validate("kce");
        kjxx.validate("mc");

        kjxx.enable("kjhy");
        kjxx.getFieldEl("kjhy").set("rule", "must");

        kjxx.enable("bcsbdsrze");
        kjxx.enable("swjghdlrl");
        kjxx.enable("kjhy");

        kjxx.disable("rmbje");
        kjxx.disable("mc");
        kjxx.disable("je");
        kjxx.disable("sl");
        kjxx.disable("kce");
        kjxx.disable("sjzsl");
        kjxx.disable("sdsjmse");

        //		kjxx.setValue("rmbje", "");
        //		kjxx.setValue("mc", "");
        //		kjxx.setValue("je", "");
        //		kjxx.setValue("sl", "");
        //		kjxx.setValue("zsrmbje", "");
        //		kjxx.setValue("rmbjehj", "");
        //		kjxx.setValue("kce", "");
        //		kjxx.setValue("ynsdse", "");
        //		kjxx.setValue("sysl", sl);
        //		kjxx.setValue("yjndqysdse", "");
        //		kjxx.setValue("sjzsl", "");
        //		kjxx.setValue("ysjjndqysdse", "");
        //		kjxx.setValue("jmqysdse", "");
        //		kjxx.setValue('zzgjndmc',''); 
        kjxx.enable('swjghdlrl');
        kjxx.enable('jmqysdse1');
        //		$w('kjxxForm').setValue('sjzsl', sl);

        //		kjxx.setValue("sjyjnedqysdse", "0");
        //		kjxx.setValue("jmqysdse1", "0");
        //		kjxx.setValue("bcsbdsrze","0.0");

        // 获取合同备案信息
        var skssqq = $w("nsrxxForm").getValue("skssqq");
        var skssqz = $w("nsrxxForm").getValue("skssqz");
    }
    nsrxxVO['djxh'] = resData.getAttr('djxh');
    zdkjDjxh = resData.getAttr('djxh');

}

//网报特色改造 新版打印 begin
//var dymbuuid = "sb071_kjqysdssb2015print";
//var hxdyForPrint = "Y";
//var printTitle = "申报——扣缴企业所得税申报2015";
//var caculateGridHJFlag;
//打印所需变量
var printFileType = "excel"; //模版类型
var hxdyForPrint; //横向打印参数
var fykg; //分页参数
var zzlx; //纸张参数
var printMode; //缩放参数 
var printTitle; //模版标题
//计算表格合计
var caculateGridHJFlag; //grid自动计算合计列参数
/**
 * 主表打印函数
 * @return
 */
function setZbdymbuuid() {
    var dymbuuid = "sb071_kjqysdssb2015print";
    fykg = "N";
    hxdyForPrint = "N";
    zzlx = "A4";
    caculateGridHJFlag = "N";
    printMode = '{"PRINT_PAGE_PERCENT":"70%"}';
    printTitle = "申报——扣缴企业所得税申报2015";
    return dymbuuid;
}
/**
 * 调用公用打印方法。
 */
function print() {
    gyTaxPrintWordOrExcel();
}
//网报特色改造 新版打印 end