var nsrxxForm;// 全局纳税人信息
var sfdycbs;// 判断是否第一次报送财务报表
var bszldm;// 报送资料代码
var cjbz;// 采集标记
var sfkybc = false;
var djxh;
var cfcjbz;// 重复采集标记
// 增加字段
var cfdz;// 存放地址
var zlsl;// 资料数量
var zllx;// 资料类型
var zlbsxlDm; // 资料小类代码
var zlbsdlDm;// 资料大类代码
var zlbsuuid;
var sfcfcj;// 是否重复采集

var nsrsbh;
var ssqq;// 所属期起
var ssqz;// 所属期止

var lrbxxList = null;// 成功采集时上期返回的利润表信息
var xjllbxxList = null;// 成功采集时上期返回的现金流量表信息、
var syzqyxxList = null;// 成功采集时上期返回的所有者权益信息
var zcfzbxxlist = null;
var sqlrblist = null; // 上期利润表本年累计数
var sqsyzlist = null;// 上期所有者表本年数
var xjllblist = null;// 上期现金流量表本年数
var fyaxzfllist = null;// 费用按照性质分类的补充资料
var qykjzzfz = null;//企业会计准则附注
var qms1;// 资产负债表实收资本或股本期末数
var qms2;// 资产负债表资本公积期末数
var qms3;// 资产负债表盈余公积期末数
var qms4;// 资产负债表法定公益金
var qms5;// 资产负债表未分配利润期末数

// 针对重复采集的定义
var fblrbxx = null;// 附表保存回写的表单信息 利润表
var nsrxxForm2 = null;
var fbxjllbxx = null;// 附表保存回写的表单信息 现金流量表
var nsrxxForm3 = null;
var fbsyzqyxx = null;// 附表保存回写的表单信息 所有者权益表
var nsrxxForm4 = null;
// 针对附表回写的定义
var fblrbxx1 = null;// 附表保存回写的表单信息 利润表
var nsrxxForm2hx = null;
var fbxjllbxx1 = null;// 附表保存回写的表单信息 现金流量表
var nsrxxForm3hx = null;
var fbsyzqyxx1 = null;// 附表保存回写的表单信息 所有者权益表
var nsrxxForm4hx = null;

var sb099_boolean_fb01 = false;
var sb099_boolean_fb02 = false;
var sb099_boolean_fb03 = false;
var sqssqq;
var sqssqz;
var bbssq;
var skssqq;// 所属期起
var skssqz;// 所属期止
var bcAndGzUUid;// 受理信息的uuid,用于保存和更新采集表和明细表时使用
var qrcjBz = "N";// 上期未成功采集，强制采集标志
var sqcfdz;// 上个月存放地址
var bsfsDm;// 报送方式代码
var nsrxxMapInit;
var len;
var Ctrl = "SB099QykjzzcwbbbsyxxcjCtrl";
var sbdr;// 申报导入标记
var bsxxlist;
var xjllbsqjehj = 0.00;
var fjyscwbbuuid = null;
var fjfzuuid = null;
var sjgsdq = null;
//附件相关
var sfbhfj = null;
var nsrsbh = null;
var zgswskfjDm = null;
var ywzj = null;
var nsrxxFormInit;
// 打印所需变量
var printFileType = "excel";
var hxdyForPrint;
var fykg;
var zzlx;
var printMode;
var printTitle;
//计算表格合计
var caculateGridHJFlag;
var tsxx;//提示信息
var ccbg;//超长表格
function setZbdymbuuid() {

    var dymbuuid = "sb099_qykjzzzcfzb";
    fykg = "N";
    hxdyForPrint = "Y";
    zzlx = "A4";
    caculateGridHJFlag = "N";
    printMode = '{"PRINT_PAGE_PERCENT":"70%"}';
    printTitle = "资产负债表（适用执行企业会计准则的一般企业）";
    return dymbuuid;
}

var beSbdr = false;
var cxbj = null;
function printhtm() {
    gyTaxPrintWordOrExcel();
}

/**
 * 初始化处理
 * 
 * @param {Object}
 *            resData
 */
function initV(resData) {
    var nsrxxMap = pc.getResData("nsrxxMap", resData);
    nsrxxFormInit = nsrxxMap;
    sqssqq = resData.getAttr("sqssqq");
    sqssqz = resData.getAttr("sqssqz");
    cxbj = resData.getAttr("cxbj");
    if (cxbj == 'N') {

        $w('zzsybnsrsb').setDisabled('save');
        $w('zzsybnsrsb').setDisabled('import');
        $w('zzsybnsrsb').setDisabled('reset');
        $w('zzsybnsrsb').setDisabled('downloadExcelTemplet');
        $w('zzsybnsrsb').setEnabled('print');
        $w('zzsybnsrsb').setDisabled('export');
        $w('zzsybnsrsb').setDisabled('back');
        $w("zcfzbxxForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("nsrxxForm").disable();   //此段需求看自己用附表FROM表单名置灰。
    }
    nsqx = resData.getAttr("nsqx");
    nsrxxForm = $w("nsrxxForm");
    sfdycbs = resData.getAttr("reCode");
    bszldm = resData.getAttr("bszldm");
    bbssq = resData.getAttr("bbssq");
    djxh = resData.getAttr("djxh");
    cfcjbz = resData.getAttr("cfcjbz");
    cfdz = resData.getAttr("cfdz");
    zlsl = resData.getAttr("zlsl");
    zllx = resData.getAttr("zllx");
    zlbsxlDm = resData.getAttr("zlbsxlDm");
    zlbsdlDm = resData.getAttr("zlbsdlDm");
    zlbsuuid = resData.getAttr("zlbsuuid");
    bsfsDm = resData.getAttr("bsfsDm");
    //初始化附件相关信息
    sfbhfj = resData.getAttr("sfbhfj");
    if (sfbhfj == "Y") {
        nsrsbh = nsrxxMap.data.nsrsbh.value;
        zgswskfjDm = nsrxxMap.data.zgswskfjDm.value;
        ywzj = resData.getAttr("ywzj");
        ATTACH_FlZL_JSOBJ.setNsrsbh(nsrsbh);
        ATTACH_FlZL_JSOBJ.setZgswjDm(zgswskfjDm);
        ATTACH_FlZL_JSOBJ.setYwzj(ywzj);
    } else {
        $("fjxxGrid_id").setStyle("display", "none");
    }

    skssqq = nsrxxMap.data.skssqq.value;
    skssqz = nsrxxMap.data.skssqz.value;
    bcAndGzUUid = resData.getAttr("bcAndGzUUid");
    sfcfcj = resData.getAttr("sfcfcj");
    sqcfdz = resData.getAttr("sqcfdz");
    var sntqcfdz = resData.getAttr("sntqcfdz");
    var newSubmit = new SwordSubmit();
    newSubmit.pushData('skssqq', skssqq);
    newSubmit.pushData('skssqz', skssqz);
    newSubmit.pushData('cfdz', cfdz);
    newSubmit.pushData('sqcfdz', sqcfdz);
    newSubmit.pushData('sntqcfdz', sntqcfdz);
    newSubmit.pushData('djxh', djxh);
    newSubmit.pushData('bsfsDm', bsfsDm);
    newSubmit.setCtrl("SB099QykjzzcwbbbsyxxcjCtrl_queryBssq");
    newSubmit.setFunction("onSuccess", "queryBssqSuccess");
    newSubmit.submit();

    nsrxxMapInit = pc.getResData("nsrxxMap", resData);
    ssqq = nsrxxMapInit.data.skssqq.value;
    ssqz = nsrxxMapInit.data.skssqz.value;
    nsrsbh = nsrxxMapInit.data.nsrsbh.value;

    queryXmls();

    var year1 = ssqq.substr(0, 4);
    var year2 = ssqz.substr(0, 4);
    var month1 = ssqq.substr(5, 2);
    var month2 = ssqz.substr(5, 2);

    len = (year2 - year1) * 12 + (month2 - month1);
    if (sfcfcj == "Y") {
        initAfter(resData);
        //$w('zzsybnsrsb').setEnabled('export');
    }
}

function queryBssqSuccess(req, resData) {
    bsxxlist = pc.getResData("bsxxlist", resData);// 不同的报送属期
}
/**
 * 初始化后事件
 * 
 * @return
 */
function initAfter(resData) {
    // 重复采集情况
    var newSubmit = new SwordSubmit();
    newSubmit.pushData("cfdz", cfdz);
    newSubmit.setCtrl(Ctrl + "_queryXmlByzlbsuuid");
    newSubmit.setFunction("onSuccess", "sqzcfzbxxOnSuccess");
    newSubmit.submit();
}
var cfcjZcfzbNsrxxForm = null;// 资产负债表
var cfcjTyNsrxxForm = null;// 其他3张页面form
var qykjzdybqyZcfzbForm = null;// 企业会计制度一般企业资产负债表
var qykjzdybqyZcfzbCjcgbj = 'N';// 资产负债表
var qykjzdybqyXjllbCjcgbj = 'N';// 现金流量表
var qykjzdybqylrbCjcgbj = 'N';// 利润表
var qykjzdybqySyzqybdbCjcgbj = 'N';// 所有者权益变动表

/**
 * 重复采集时查询上次采集XML
 */
var privatexmlbz = null;
function queryXmls() {
    // 如果属期信息list不是空，那么就查询每个属期的凭证化
    if (bsxxlist != null && bsxxlist != undefined && bsxxlist != "") {
        for (var i = 0; i < bsxxlist.trs.length; i++) {
            if (bsxxlist.trs[i].tds != null && bsxxlist.trs[i].tds != ""
					&& bsxxlist.trs[i].tds != undefined) {
                privatexmlbz = bsxxlist.trs[i].tds.xmlbz.value;
                var newSubmit = new SwordSubmit();

                if (privatexmlbz != "0" && privatexmlbz != "1"
						&& privatexmlbz != "5") {
                    var skssqz = bsxxlist.trs[i].tds.skssqz.value;
                    newSubmit.pushData('skssqq', skssqq);
                    newSubmit.pushData('skssqz', skssqz);
                }
                newSubmit.pushData('djxh', djxh);
                newSubmit.pushData('bszldm', bszldm);
                newSubmit.pushData("xmlbz", privatexmlbz);
                newSubmit.pushData('cfdz', cfdz);
                newSubmit.pushData('sqcfdz', sqcfdz);
                newSubmit.setCtrl("SB151zlbsslCtrl_checkSfcfbs");
                newSubmit.setFunction("onSuccess", "checkSuccess");
                newSubmit.submit();
            }
        }
    }
}
// 查询每个存在的存放地址的报文，并转换格式
function checkSuccess(req, resData) {
    if (resData.data.length > 1) {
        var cfdz = null;
        if (resData.data[0].trs) {
            cfdz = resData.data[0].trs[0].tds.cfdz.value;
        }
        if (cfdz != null && cfdz != "" && cfdz != undefined) {
            var newSubmit = new SwordSubmit();
            newSubmit.pushData("xmlbz", privatexmlbz);
            newSubmit.pushData('cfdz', cfdz);
            newSubmit.setCtrl("SB099QykjzzcwbbbsyxxcjCtrl_queryXmlByzlbsuuid");
            newSubmit.setFunction("onSuccess", "cfcjSuccess");
            newSubmit.submit();
        } else if (sfcfcj == "N" && ("3" == privatexmlbz || "5" == privatexmlbz)) { //如果资产负债表为空，给提示
            swordAlert("资产负债表上年未采集数据");
        }
    }
}

var sncjbz = "N";//上年采集标识
var sqncsFlag = false;// 采用上期年初数
var zcfzbxxlistBnsq = null; //本年上期资产负债表

function cfcjSuccess(req, resData) {
    switch (privatexmlbz) {
        case "0"://重复采集（并没有执行？）
            qykjzdZcfzbCjcgbj = pc.getResData("qykjzdZcfzbCjcgbj", resData);
            if (qykjzdZcfzbCjcgbj) {
                qykjzdZcfzbCjcgbj = qykjzdZcfzbCjcgbj.value;
            }
            cfcjTyNsrxxForm = pc.getResData("nsrxxForm", resData);
            qykjzdZcfzbForm = pc.getResData("zcfzbxxForm", resData);
            fbxjllbxx = pc.getResData("xjllbxxForm", resData);
            fblrbxx = pc.getResData("lrbxxForm", resData);
            fbsyzqyxx = pc.getResData("qybxxForm", resData);
            qykjzzfz = pc.getResData("qykjzzfzForm", resData);
            if (qykjzdZcfzbCjcgbj == 'Y') {
                $w("zcfzbxxForm").initData(qykjzdZcfzbForm);
                $w("nsrxxForm").initData(cfcjTyNsrxxForm);
            }
            break;
        case "1"://本年上期
            zcfzbxxlistBnsq = pc.getResData("zcfzbsnnmlist", resData);
            fyaxzfllist = pc.getResData("fyaxzfllist", resData);
            if (sfcfcj == "N") {// 资产负债表不是重复采集时，带回带上期数据
                if (ssqq.substr(5, 2) == "01") {
                    break;
                }
                loadBnsqZcfzb();
                sqncsFlag = true;
            }
            break;
        case "2"://上年本月
            sqlrblist = pc.getResData("lrbbnsylist", resData);
            xjllblist = pc.getResData("xjllblist", resData);
            sqsyzlist = pc.getResData("qybsnbylist", resData);
            break;
        case "3"://上年12月
            zcfzbxxlist = pc.getResData("zcfzbsnnmlist", resData);
            if (sfcfcj == "N" && !sqncsFlag) {// 资产负债表不是重复采集时，带回上年年末数据
                loadSnmqZcfzb();
            }
            break;
        case "5"://年报上年12月
            sqlrblist = pc.getResData("lrbbnsylist", resData);
            xjllblist = pc.getResData("xjllblist", resData);
            zcfzbxxlist = pc.getResData("zcfzbsnnmlist", resData);
            sqsyzlist = pc.getResData("qybsnbylist", resData);
            if (sfcfcj == "N" && !sqncsFlag) {// 资产负债表不是重复采集时，带回上年年末数据
                loadSnmqZcfzb();
            }
            break;
    }

    if (zcfzbxxlist && zcfzbxxlist.trs.le && zcfzbxxlist.trs.length > 0) {//?
        sncjbz = 'Y';
    }

}

/**
 * 加载本年上期资产负债表
 */
function loadBnsqZcfzb() {
    var zcfzbxxForm = $w("zcfzbxxForm");
    for (var i = 0; i < zcfzbxxlistBnsq.trs.length; i++) {
        var ewbhxh = zcfzbxxlistBnsq.trs[i].tds.ewbhxh.value;
        var sqncsZc = zcfzbxxlistBnsq.trs[i].tds.ncyeZc.value;
        var sqncsQy = zcfzbxxlistBnsq.trs[i].tds.ncyeQy.value;
        zcfzbxxForm.setValue("h" + ewbhxh + "l3", sqncsZc);
        zcfzbxxForm.setValue("h" + ewbhxh + "l6", sqncsQy);
    }
}
/**
 * 加载上年末期资产负债表
 */
function loadSnmqZcfzb() {
    var zcfzbxxForm = $w("zcfzbxxForm");
    for (var i = 0; i < zcfzbxxlist.trs.length; i++) {
        var ewbhxh = zcfzbxxlist.trs[i].tds.ewbhxh.value;
        var qmsZc = zcfzbxxlist.trs[i].tds.qmyeZc.value;
        var qmsQy = zcfzbxxlist.trs[i].tds.qmyeQy.value;
        zcfzbxxForm.setValue("h" + ewbhxh + "l3", qmsZc);
        zcfzbxxForm.setValue("h" + ewbhxh + "l6", qmsQy);
    }
}
/**
 * 
 * @param req
 * @param resData
 * @return
 */
function jySuccess(req, resData) {
    var box = this.parent[this.name];
    cjbz = pc.getResData("cjbz", resData).value;
    var nsrxxForm = $w("nsrxxForm")
    if (cjbz == '0') {
        var result = pc.getResData("result", resData).value;
        var out = "";
        // 如果纳税人不是第一次报送，并且未查询出上期成功采集，则提示，终止流程，必须重新采集上期
        if (parseInt(result) == 1) {
            out = "月报";
        } else if (parseInt(result) == 3) {
            out = "季报";
        }
        // 提示哪几个月未报送
        var bsSsqq = nsrxxForm.getValue("skssqq");
        var nianBs = bsSsqq.substring(0, 4);// 7
        var yueBs = bsSsqq.substring(5, 7);// 7
        var skNian = sqssqz.substring(0, 4);
        var skYue = sqssqz.substring(5, 7);// 3
        var str = "";
        // 如果是隔月报 就是比如先报送了2月份 然后再回头报1月份的情况 回头报送的话 不提示监控
        if (parseInt(yueBs, 10) < parseInt(skYue, 10) && parseInt(nianBs) <= parseInt(skNian)) {
            return;
        }
        // 待优化 监控以后可以由前台移植到后台java代码
        if (parseInt(nianBs) == parseInt(skNian) && (parseInt(yueBs, 10) - 1) == (parseInt(skYue, 10) + 1)) {
            str = skNian + "年" + (parseInt(skYue, 10) + 1) + "月";
        } else {
            if (parseInt(yueBs, 10) - 1 != 0 && parseInt(skYue, 10) + 1 != 12) {
                str = skNian + "年" + (parseInt(skYue, 10) + 1) + "月~" + nianBs + "年" + (parseInt(yueBs, 10) - 1) + "月";
            } else if (parseInt(yueBs, 10) - 1 == 0 && parseInt(skYue, 10) + 1 != 12) {
                if (parseInt(nianBs) - parseInt(skNian) > 1) {
                    str = skNian + "年" + (parseInt(skYue, 10) + 1) + "月~" + (parseInt(nianBs) - 1) + "年12月";
                } else {
                    str = skNian + "年" + (parseInt(skYue, 10) + 1) + "月~12月";
                }

            } else if (parseInt(skYue, 10) + 1 == 12 && parseInt(yueBs, 10) - 1 != 0) {
                str = skNian + "年" + (parseInt(skYue, 10) + 1) + "月~" + nianBs + "年" + (parseInt(yueBs, 10) - 1) + "月";
            } else {
                str = skNian + "年" + (parseInt(skYue, 10) + 1) + "月";
            }
        }
        swordConfirm(str + "份未采集或者未采集成功,报送类型:" + out + ",是否进行采集?", {
            okBtnName: "是",
            cancelBtnName: "否",
            onOk: function () {
                qrcjBz = "Y";
            },
            onCancel: function () {
                $w("bcBtn").disabled();
            }
        });
    }
    if (cjbz == '1') {
        // 如果上期成功采集,将上期采集的数据带到本期页面
        gyxssq();
    }
    if (cjbz == '2') {
        // 报的是年报
    }
}

// 1.资产负债表
var fzsyzgdqyqmyezj;// 资产负债表反解析的上期数据负债和所有者权益(或股东权益)总计 期末数据
var qmyezczj;// 上期资产总计期末数据
// 2.利润表
var yylrbqje, lrzebqje, jlrbqje;//
// 3.现金流量表
var jyhdxjlrbqjexj, bqjejyhdxjlcxj, xjlljebqje, tzhdxjlrbxj, tzhdxjlcbxj;
var tzhdcsxjlljeb, czhdxjlrbxj, czhdxjlcbxj, czhdxjlljeb, xjjzjeb, qmxjjyeb;
// 4.所有者权益表
var sqa26, sqb26, sqc26, sqd26, sqe26, sqf26;
var zcfcbCjcgbj = 'N';// 资产负债表成功采集标记 默认为否
var lrbCjcgbj = 'N';// 利润表成功采集标记 默认为否
var xjllbCjcgbj = 'N';// 现金流量表成功采集标记 默认为否
var qybCjcgbj = 'N';// 权益表成功采集标记 默认为否
function sqzcfzbxxOnSuccess(req, resData) {

    // 1.资产负债表后台返回信息
    var zcfzbxxForm = pc.getResData("zcfzbxxForm", resData);
    var nsrxxForm = pc.getResData("nsrxxForm1", resData);
    if (pc.getResData("lrbxxForm", resData)) {
        fblrbxx = pc.getResData("lrbxxForm", resData);// 利润表
        fblrbxx = JSON.decode(JSON.encode(fblrbxx));
        fblrbxx1 = fblrbxx;
    }
    nsrxxForm2 = pc.getResData("nsrxxForm2", resData);
    nsrxxForm2hx = nsrxxForm2;
    if (pc.getResData("xjllbxxForm", resData)) {
        fbxjllbxx = pc.getResData("xjllbxxForm", resData);// 现金流量表
        fbxjllbxx = JSON.decode(JSON.encode(fbxjllbxx));
        fbxjllbxx1 = fbxjllbxx;
    }
    nsrxxForm3 = pc.getResData("nsrxxForm3", resData);
    nsrxxForm3hx = nsrxxForm3;
    if (pc.getResData("qybxxForm", resData)) {
        fbsyzqyxx = pc.getResData("qybxxForm", resData);// 所有者权益
        fbsyzqyxx = JSON.decode(JSON.encode(fbsyzqyxx));
        fbsyzqyxx1 = fbsyzqyxx;
    }
    nsrxxForm4 = pc.getResData("nsrxxForm4", resData);
    nsrxxForm4hx = nsrxxForm4;
    setCfcjData(resData);

    if (sbdr == 'sbdr') {
        var nsrsbhd = nsrxxForm.data.nsrsbh.value;
        var skssqqd = nsrxxForm.data.skssqq.value;
        var skssqzd = nsrxxForm.data.skssqz.value;
        //导入报文与统一受理界面信息一致性校验
        if (nsrsbhd != nsrsbh) {
            swordAlert("导入的XML报文和受理页面的纳税人识别号不一致,请核对后再导入！");
            return;
        } else if (skssqqd.substring(0, 10) != ssqq.substring(0, 10) || skssqzd.substring(0, 10) != ssqz.substring(0, 10)) {
            swordAlert("导入的XML报文和受理页面的所属期起止不一致,请核对后再导入！");
            return;
        } else {
            $w("zcfzbxxForm").initData(zcfzbxxForm);
            $w("nsrxxForm").initData(nsrxxForm);
            $w('zzsybnsrsb').setDisplay("export");
        }
    } else {
        $w("zcfzbxxForm").initData(zcfzbxxForm);
        $w("nsrxxForm").initData(nsrxxForm);
        $w('zzsybnsrsb').setDisplay("export");
    }

    //开始 网报特色以下代码后增加 回调加截主附表数据。
    if (sbdr == 'sbdr') {
        var inputs = $$('input');
        inputs.each(function (input, idx) {
            if (input.id != "") {
                caculate(input.id);
            }
        });
        beSbdr = true;
        var data = $w('SwordTreeJSON').getAllNode();
        var zb = null;
        data.each(function (item, idx) {
            if (idx == 0) {
                zb = item;
            }
            openTab(item);

        })
        openTab(zb);
    }
}

/**
 * 保存
 * @return
 */
function saveBeforeCheck() {
    // 表单中数据监控
    debugger
    if ($w("zcfzbxxForm").validate() && $w("nsrxxForm").validate()) {
    } else {
        return;
    }

    var zcfzbxxForm = $w("zcfzbxxForm");
    var zczjQmye = zcfzbxxForm.getValue("h32l2");// 资产总计期末余额
    var zczjNcye = zcfzbxxForm.getValue("h32l3");// 资产总计年初余额
    var fzhsyzqyQmye = zcfzbxxForm.getValue("h32l5");// 负债和所有者权益期末余额
    var fzhsyzqyNcye = zcfzbxxForm.getValue("h32l6");// 负债和所有者权益年初余额
    if (parseFloat(zczjQmye).toFixed(2) != parseFloat(fzhsyzqyQmye).toFixed(2) || parseFloat(zczjNcye).toFixed(2) != parseFloat(fzhsyzqyNcye).toFixed(2)) {
        // 如果两者不等，提示：资产负债表中'资产总计'金额不等于'负债和所有者权益(或股东权益)总计'金额,不能保存
        swordAlert("资产负债表中'资产总计'金额不等于'负债和所有者权益(或股东权益)总计'金额,不能保存!");
        return;
    }

    var meg = "";
    var nsqx_dm = parent.$w('nsrxxMap').getValue('nsqxDm');
    // 增值中期采集 年度采集保存判断
    if (nsqx_dm == "08" || nsqx_dm == "06") {
        if (fblrbxx1 == null || fblrbxx1 == undefined || fblrbxx1 == "") {
            meg += "利润表信息、";
        }

    } else if (nsqx_dm == "10") {
        if (fblrbxx1 == null || fblrbxx1 == undefined || fblrbxx1 == "") {
            meg += "利润表信息、";
        }

        if (fbxjllbxx1 == null || fbxjllbxx1 == undefined || fbxjllbxx1 == "") {
            meg += "现金流量表信息、";
        }

        if (fbsyzqyxx1 == null || fbsyzqyxx1 == undefined || fbsyzqyxx1 == "") {
            meg += "所有者权益变动表信息、";
        }
        meg = fbsaveCheck(meg);
    }
    else {
        if (fblrbxx1 == null || fblrbxx1 == undefined || fblrbxx1 == "") {
            meg += "利润表信息、";
        }
        if (fbxjllbxx1 == null || fbxjllbxx1 == undefined || fbxjllbxx1 == "") {
            meg += "现金流量表信息、";
        }
        if (fbsyzqyxx1 == null || fbsyzqyxx1 == undefined || fbsyzqyxx1 == "") {
            meg += "所有者权益变动表信息、";
        }
        meg = fbsaveCheck(meg);
    }
    if (meg != "") {
        meg = meg.substring(0, meg.length - 1);
        swordConfirm(meg + "未采集，是否保存？", {
            onOk: function () {
                checkzcfzb();
            },
            onCancel: function () {
                return false;
            }
        });
    } else {
        checkzcfzb();
    }
}

/**
 * 检查资产负债表年初余额是否与上年末期期末余额相等
 */
function checkZcfzbNcye() {
    debugger
    var zcfzbxxForm = $w("zcfzbxxForm");
    var names = [];
    if (sncjbz == "Y") {
        for (var i = 0; i < zcfzbxxlist.trs.length; i++) {
            var ewbhxh = zcfzbxxlist.trs[i].tds.ewbhxh.value;
            var qmsZc = zcfzbxxlist.trs[i].tds.qmyeZc.value;
            var qmsQy = zcfzbxxlist.trs[i].tds.qmyeQy.value;
            var ncsZc = zcfzbxxForm.getValue("h" + ewbhxh + "l3");
            var zcName = zcfzbxxForm.getValue("h" + ewbhxh + "l1");
            var ncsQy = zcfzbxxForm.getValue("h" + ewbhxh + "l6");
            var qyName = zcfzbxxForm.getValue("h" + ewbhxh + "l4");

            if (Number(qmsZc) != Number(ncsZc)) {
                names.push(zcName);
            } if (Number(qmsQy) != Number(ncsQy)) {
                names.push(qyName);
            }
        }
    }
    if (names.length > 0) {
        var nameStr = names.toString().replace(/(\s|(\u00A0)|(\u3000))/g, '');
        swordConfirm("资产负债表中，年初余额与上年末期期末余额不相等，是否继续？"
				+ "<br/>数据项：[" + nameStr + "]",
				{
				    onOk: function () {
				        saveCheckAfter();
				    },
				    onCancel: function () {
				        return false;
				    }
				});
    } else {
        saveCheckAfter();
    }
}
function checkzcfzb() {
    debugger
    var zcfzbxxFormData = $w("zcfzbxxForm").getSubmitData();

    var sszbhgb = $w("zcfzbxxForm").getValue("h25l5");
    var zbgj = $w("zcfzbxxForm").getValue("h26l5");
    var jkcg = $w("zcfzbxxForm").getValue("h27l5");
    var yygj = $w("zcfzbxxForm").getValue("h28l5");
    var wfply = $w("zcfzbxxForm").getValue("h29l5");
    var syzqyhj = $w("zcfzbxxForm").getValue("h30l5");
    var h26l2 = 0.0;
    var h26l3 = 0.0;
    var h26l4 = 0.0;
    var h26l5 = 0.0;
    var h26l6 = 0.0;
    var h26l7 = 0.0;
    if ($chk(fbsyzqyxx1)) {
        h26l2 = fbsyzqyxx1.data.h26l2.value;
        h26l3 = fbsyzqyxx1.data.h26l3.value;
        h26l4 = fbsyzqyxx1.data.h26l4.value;
        h26l5 = fbsyzqyxx1.data.h26l5.value;
        h26l6 = fbsyzqyxx1.data.h26l6.value;
        h26l7 = fbsyzqyxx1.data.h26l7.value;
    }
    if (sszbhgb / 1 != h26l2 / 1 || zbgj / 1 != h26l3 / 1 || jkcg / 1 != h26l4 / 1 || yygj / 1 != h26l5 / 1 || wfply / 1 != h26l6 / 1 || syzqyhj / 1 != h26l7 / 1) {
        swordConfirm("资产负债表中所有者权益(或股东权 益)与所有者权益变动表中金额不相等,是否继续?", {
            onOk: function () {
                checkZcfzbNcye();
            },
            onCancel: function () {
                return false;
            }
        });
    } else {
        checkZcfzbNcye();
    }
}
function saveCheckAfter() {
    debugger
    // if(sfcfcj=="Y"){
    // var zcfzbxxFormData = $w("zcfzbxxForm");
    // var bqcnzczj=zcfzbxxFormData.getValue("h32l3");
    // var bqfzsyzgdqyncyezj=zcfzbxxFormData.getValue("h32l6");
    // if(parseFloat(bqcnzczj)!=parseFloat(qmyezczj)||parseFloat(bqfzsyzgdqyncyezj)!=parseFloat(fzsyzgdqyqmyezj)){
    // swordConfirm("年初金额(或年初数)不等于上年末的期末余额(或期末数)，是否保存？", {
    // okBtnName : "是",
    // cancelBtnName : "否",
    // onOk:function(){
    // saveTrue();
    // },
    // onCancel : function() {
    // $w("zcfzbxxForm").initData(zcfzbxxlist);
    // }});
    // 如果为第一次报送或者上期已成功采集,或者重复采集 可以保存
    var nsrxxFormData = $w("nsrxxForm").getSubmitData();
    var zcfzbxxFormData = $w("zcfzbxxForm").getSubmitData();
    var saveBtn = new SwordSubmit();
    saveBtn.pushData(nsrxxFormData);
    saveBtn.pushData(zcfzbxxFormData);
    // 将主表和附表信息一起提交进行保存
    saveBtn.pushData(fblrbxx1);// 子页面返回的利润表信息
    saveBtn.pushData(nsrxxForm2hx);
    saveBtn.pushData(fbxjllbxx1);// 子页面返回的现金流量表信息
    saveBtn.pushData(nsrxxForm3hx);
    saveBtn.pushData(fbsyzqyxx1);// 子页面返回的现所有者权益表信息
    saveBtn.pushData(nsrxxForm4hx);
    // xml导入保存数据直接封装
    for (var key in fbXMLData) {
        if (fbXMLData[key] != undefined && fbXMLData[key] != null) {
            saveBtn.pushData(fbXMLData[key].value);
        }
    }
    saveBtn.pushData('cfdz', cfdz);
    saveBtn.pushData('bszldm', bszldm);
    saveBtn.pushData('djxh', djxh);
    saveBtn.pushData('zlsl', zlsl);
    saveBtn.pushData('zllx', zllx);
    saveBtn.pushData('zlbsxlDm', zlbsxlDm);
    saveBtn.pushData('zlbsdlDm', zlbsdlDm);
    saveBtn.pushData('zlbsuuid', zlbsuuid);
    saveBtn.pushData('sfcfcj', sfcfcj);
    //保存附件信息
    if (sfbhfj == "Y") {
        var flzlStr = ATTACH_FlZL_JSOBJ.getFlzlList();
        saveBtn.pushData("flzlList", flzlStr);
        saveBtn.pushData("zgswjDm", zgswskfjDm);
        saveBtn.pushData("ywzj", ywzj);
    }
    saveBtn.pushData("sfbhfj", sfbhfj);
    saveBtn = zlbssavePushdata(saveBtn);
    saveBtn.setCtrl(Ctrl + '_saveZcfzb');
    saveBtn.setFunction('onSuccess', 'saveOnSuccess');
    saveBtn.submit();
}
/**
 * 保存成功事件
 * 
 * @param {Object}
 *            req
 * @param {Object}
 *            resData
 */
function saveOnSuccess(req, resData) {
    var flag = pc.getResData("flag", resData).value;
    if (flag == "Y") {
        swordAlertRight("财务报表信息采集完成且发送成功！");
        $w('zzsybnsrsb').setDisabled('save');
        $w('zzsybnsrsb').setDisabled('reset');
        $w('zzsybnsrsb').setDisabled('import');
        $w("SwordTreeJSON").clear();
        var tree = $w("SwordTreeJSON");
        tree.reloadTree("{ 'data':[{'code':'000','caption':''}]}");
    } else {
        swordAlert("采集失败");
    }
}

/**
 * 重置按钮事件
 */
function reset() {
    $w('zcfzbxxForm').resetAll();
}
/**
 * 导入
 * 
 * @return
 */
function getDrxx() {
    var gydrctrl = Ctrl + "_getDrxx";// 导入处理自定义的ctrl
    var drxxBtn = new SwordSubmit();
    if ($chk(djxh)) {
        drxxBtn.pushData('djxh', djxh);
    }
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

var sb099_cszForXML;
function boxCallBackForSBdr(resData) {

    sbdr = 'sbdr';
    var data = resData.getAttr("data");
    if (data != 'N') {
        sqzcfzbxxOnSuccess("", resData);
    }
}


/**
 * 申报错误导入，要求所有的button都亮着
 * 
 * @param resData
 * @return
 */
var fbXMLData = {};
var sb099_resDataXMLForSBDR;
function XMLForSBDR(resData) {
    sb099_resDataXMLForSBDR = JSON.encode(resData);
    fbXMLData["zcfzbxxForm"] = pc.getResData("zcfzbxxForm", resData);
    if (fbXMLData["zcfzbxxForm"] != null && fbXMLData["zcfzbxxForm"] != undefined && fbXMLData["zcfzbxxForm"].sword != null && fbXMLData["zcfzbxxForm"].sword != undefined && fbXMLData["zcfzbxxForm"].sword != "") {
        $w("zcfzbxxForm").initData(fbXMLData["zcfzbxxForm"]);
        $w("zcfzbxxForm").disable();
    }

    var qybxxForm = pc.getResData("qybxxForm", resData);
    if (qybxxForm != null && qybxxForm != undefined && qybxxForm.sword != null && qybxxForm.sword != undefined && qybxxForm.sword != "") {

        fbXMLData["qybxxForm"] = { 'value': qybxxForm };
    }

    var lrbxxForm = pc.getResData("lrbxxForm", resData);
    if (lrbxxForm != null && lrbxxForm != undefined && lrbxxForm.sword != null && lrbxxForm.sword != undefined && lrbxxForm.sword != "") {
        fbXMLData["lrbxxForm"] = { 'value': lrbxxForm };
    }

    var xjllbxxForm = pc.getResData("xjllbxxForm", resData);
    if (xjllbxxForm != null && xjllbxxForm != undefined && xjllbxxForm.sword != null && xjllbxxForm.sword != undefined && xjllbxxForm.sword != "") {
        fbXMLData["xjllbxxForm"] = { 'value': xjllbxxForm };
    }

    sb099_boolean_fb01 = false;
    sb099_boolean_fb02 = false;
    sb099_boolean_fb03 = false;
}
function openTabYd(inputEl) {
    var name = inputEl.get("code");
    // 将资产负债表页面的信息传到子页面
    // displayIfram();
    var table00 = $("table00");
    var table01 = $("table01");
    var table01iframe = $("table01iframe");
    if (name == '00') {
        budEnable();
        table00.setStyle('display', '');
        table01.setStyle('display', 'none');
    } else if (name == '01') {
        buDisable();
        table00.setStyle('display', 'none');
        table01.setStyle('display', '');
        if (!sb099_boolean_fb01) {// 没有打开过
            table01iframe.src = AddBizCode2URL("/sword?ctrl=SB099QykjzzcwbbbsyxxcjCtrl_toSbfbYd&id=" + name);
            sb099_boolean_fb01 = true;
        }
    }
    // else{
    // zlbstofb(name,zlbsxlDm,nsrxxFormInit);
    // }

}
function openTabZq(inputEl) {
    var name = inputEl.get("code");
    // 将资产负债表页面的信息传到子页面
    // displayIfram();
    var table00 = $("table00");
    var table01 = $("table01");
    var table01iframe = $("table01iframe");
    if (name == '00') {
        budEnable();
        table00.setStyle('display', '');
        table01.setStyle('display', 'none');
    } else if (name == '01') {
        buDisable();
        table00.setStyle('display', 'none');
        table01.setStyle('display', '');
        if (!sb099_boolean_fb01) {// 没有打开过
            table01iframe.src = AddBizCode2URL("/sword?ctrl=SB099QykjzzcwbbbsyxxcjCtrl_toSbfbZq&id=" + name);
            sb099_boolean_fb01 = true;
        }
    }
    // else{
    // zlbstofb(name,zlbsxlDm,nsrxxFormInit);
    // }

}
function openTabNd(inputEl) {
    var name = inputEl.get("code");
    // 将资产负债表页面的信息传到子页面
    displayIfram();
    var table00 = $("table00");
    var table01 = $("table01");
    var table02 = $("table02");
    var table03 = $("table03");
    var table01iframe = $("table01iframe");
    var table02iframe = $("table02iframe");
    var table03iframe = $("table03iframe");
    if (name == '00') {
        budEnable();
        table00.setStyle('display', '');
        table01.setStyle('display', 'none');
        table02.setStyle('display', 'none');
        table03.setStyle('display', 'none');
    } else if (name == '01') {
        buDisable();
        table00.setStyle('display', 'none');
        table01.setStyle('display', '');
        table02.setStyle('display', 'none');
        table03.setStyle('display', 'none');
        if (!sb099_boolean_fb01) {// 没有打开过
            table01iframe.src = AddBizCode2URL("/sword?ctrl=SB099QykjzzcwbbbsyxxcjCtrl_toSbfbNd&id=" + name);
            sb099_boolean_fb01 = true;
        }
    } else if (name == '02') {
        buDisable();
        table00.setStyle('display', 'none');
        table01.setStyle('display', 'none');
        table02.setStyle('display', '');
        table03.setStyle('display', 'none');
        if (!sb099_boolean_fb02) {// 没有打开过
            table02iframe.src = AddBizCode2URL("/sword?ctrl=SB099QykjzzcwbbbsyxxcjCtrl_toSbfbNd&id=" + name);
            sb099_boolean_fb02 = true;
        }
    } else if (name == '03') {
        buDisable();
        table00.setStyle('display', 'none');
        table01.setStyle('display', 'none');
        table02.setStyle('display', 'none');
        table03.setStyle('display', '');
        if (!sb099_boolean_fb03) {// 没有打开过
            table03iframe.src = AddBizCode2URL("/sword?ctrl=SB099QykjzzcwbbbsyxxcjCtrl_toSbfbNd&id=" + name);
            sb099_boolean_fb03 = true;
        }
    } else {
        zlbstofb(name, zlbsxlDm, nsrxxFormInit);
    }
}
function openTab(inputEl) {
    tsxx = "";
    ccbg = "";//超长表格
    var name = inputEl.get("code");
    // 将资产负债表页面的信息传到子页面	
    displayIfram();
    var table00 = $("table00");
    var table01 = $("table01");
    var table02 = $("table02");
    var table03 = $("table03");
    var table01iframe = $("table01iframe");
    var table02iframe = $("table02iframe");
    var table03iframe = $("table03iframe");

    if (name == '00') {
        if (cxbj == "N") {
            $w('zzsybnsrsb').setDisabled('save');
            $w('zzsybnsrsb').setDisabled('import');
            $w('zzsybnsrsb').setDisabled('reset');
            table00.setStyle('display', '');
            table01.setStyle('display', 'none');
            table02.setStyle('display', 'none');
            table03.setStyle('display', 'none');
        } else {
            budEnable();
            table00.setStyle('display', '');
            table01.setStyle('display', 'none');
            table02.setStyle('display', 'none');
            table03.setStyle('display', 'none');
        }
    } else if (name == '01') {
        buDisable();
        table00.setStyle('display', 'none');
        table01.setStyle('display', '');
        table02.setStyle('display', 'none');
        table03.setStyle('display', 'none');
        if (!sb099_boolean_fb01) {// 没有打开过
            table01iframe.src = AddBizCode2URL("/sword_SB099QykjzzcwbbbsyxxcjCtrl_toSbfb.aspx?ctrl=SB099QykjzzcwbbbsyxxcjCtrl_toSbfb&id=" + name);
            sb099_boolean_fb01 = true;
        }
    } else if (name == '02') {
        buDisable();
        table00.setStyle('display', 'none');
        table01.setStyle('display', 'none');
        table02.setStyle('display', '');
        table03.setStyle('display', 'none');
        if (!sb099_boolean_fb02) {// 没有打开过
            table02iframe.src = AddBizCode2URL("/sword_SB099QykjzzcwbbbsyxxcjCtrl_toSbfb1.aspx?ctrl=SB099QykjzzcwbbbsyxxcjCtrl_toSbfb&id=" + name);
            sb099_boolean_fb02 = true;
        }
    } else if (name == '03') {
        buDisable();
        table00.setStyle('display', 'none');
        table01.setStyle('display', 'none');
        table02.setStyle('display', 'none');
        table03.setStyle('display', '');
        if (!sb099_boolean_fb03) {// 没有打开过
            table03iframe.src = AddBizCode2URL("/sword_SB099QykjzzcwbbbsyxxcjCtrl_toSbfb2.aspx?ctrl=SB099QykjzzcwbbbsyxxcjCtrl_toSbfb&id=" + name);
            sb099_boolean_fb03 = true;
        }
    } else {
        zlbstofb(name, zlbsxlDm, nsrxxFormInit);
    }

}
function setHx(a) {
    // 将父页面的元素传到子页面
    var nsrsbh = $w("nsrxxForm").getValue("nsrsbh");
    var nsrmc = $w("nsrxxForm").getValue("nsrmc");
    var bsrq = nsrxxMapInit.data.bsrq.value;
    var skssqq = $w("nsrxxForm").getValue("skssqq");
    var skssqz = $w("nsrxxForm").getValue("skssqz");

    if (a == "01") {
        // 利润表
        if ((cfcjbz == 'Y' || sbdr == 'sbdr') && nsrxxForm2 != null) {
            table01iframe.window.setCfcjInitValue(nsrxxForm2, fblrbxx, cfcjbz, sqlrblist);
        } else {
            table01iframe.window.setInitValue(nsrsbh, nsrmc, bsrq, skssqq, skssqz, sqlrblist, bbssq);
        }
    } else if (a == "02") {
        // 现金流量表
        if ((cfcjbz == 'Y' || sbdr == 'sbdr') && nsrxxForm3 != null) {
            table02iframe.window.setCfcjInitValue(nsrxxForm3, fbxjllbxx, cfcjbz, xjllblist);
        } else {
            table02iframe.window.setInitValue(nsrsbh, nsrmc, bsrq, skssqq, skssqz, xjllblist);
        }
    } else if (a == "03") {
        // 权益表
        if ((cfcjbz == 'Y' || sbdr == 'sbdr') && nsrxxForm4 != null) {
            table03iframe.window.setCfcjInitValue(nsrxxForm4, fbsyzqyxx, cfcjbz, sqsyzlist);
        } else {
            table03iframe.window.setInitValue(nsrsbh, nsrmc, bsrq, skssqq, skssqz, sqsyzlist);
        }
    }

}
/**
 * 附表保存回写主表事件
 * 
 * @param sb099Form
 * @param bj
 */
function hxFb(sb099Form1, sb099Form2, bj, hx_cfcjbz, isDrInit) {
    $w("SwordTreeJSON").setSelectValue("资产负债表");
    budEnable();
    var table00 = $("table00");
    var table01 = $("table01");
    var table02 = $("table02");
    var table03 = $("table03");
    if (bj == '01') {// 利润表保存回写
        fblrbxx1 = sb099Form1;
        nsrxxForm2hx = sb099Form2;
        if (!isDrInit) {
            swordAlert("利润表信息采集完成且发送成功！");
        }
    } else if (bj == '02') {// 现金流量表回写
        fbxjllbxx1 = sb099Form1;
        nsrxxForm3hx = sb099Form2;
        if (!isDrInit) {
            swordAlert("现金流量表信息采集完成且发送成功！");
        }
    } else if (bj == '03') {// 所有者权益表回写
        fbsyzqyxx1 = sb099Form1;
        nsrxxForm4hx = sb099Form2;
        if (!isDrInit) {
            swordAlert("所有者权益变动表信息采集完成且发送成功！");
        }
    }
    // 回写玩将其他子页面全部关闭,只打开父页面
    table00.setStyle('display', '');
    table01.setStyle('display', 'none');
    table02.setStyle('display', 'none');
    table03.setStyle('display', 'none');
    budEnable();
}

function budEnable() {
    // 主表表公共按钮恢复
    $w('zzsybnsrsb').setEnabled('save');
    $w('zzsybnsrsb').setEnabled('import');
    $w('zzsybnsrsb').setEnabled('reset');
}

function buDisable() {
    // 附表按钮公共置灰
    $w('zzsybnsrsb').setDisabled('save');
    $w('zzsybnsrsb').setDisabled('import');
    $w('zzsybnsrsb').setDisabled('reset');
}

function next() {
    var box = this.parent[this.name];
    box.options.reset();// 调用父页面重置方法
    box.closePopUpBox();// 关闭子页面
}
/**
 * Excel模板下载
 */
function downloadExcelTemplet() {
    var ctrlSub = new SwordSubmit();
    ctrlSub.options.postType = "download";
    ctrlSub.setCtrl("GYDrCtrl_download?fileName=/template/sb/sb099/CWBB_QYKJZZ_YBQY_V1.0.xls");
    ctrlSub.submit();
}

/**
 * Excel导出
 */
function exportsbxx() {
    var submitBtn = new SwordSubmit();
    submitBtn.pushData("cfdz", cfdz);
    submitBtn.setCtrl(Ctrl + "_exportExcel");
    var options = {};
    options.postType = "download";
    submitBtn.setOptions(options);
    submitBtn.setFunction("onSuccess", "onSuccessDc");
    submitBtn.submit();
}
// 页面返回
function backSfxywh() {
    var box = this.parent[this.name];
    box.close();

}

