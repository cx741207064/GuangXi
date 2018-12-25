var gt3 = {};// 页面缓存
gt3.today = "";// 当前日期
gt3.ctrl = "SB175FxmtysbCtrl";// Ctrl类名
gt3.djxh = "";// 登记序号
gt3.skxxList = null;// 税款信息
gt3.sbxxGrid = null;// 申报数据信息
gt3.yjxxGrid = null;// 预缴税款数据信息
gt3.jmxxGrid = null;// 减免数据信息
gt3.bdcSkxxGrid = null;// 不动产项目税款信息
gt3.xmSkxxGrid = null;// 工程项目税款信息
gt3.qsXmbh = null;// 土地增值税清算项目编号

gt3.skssqq = "";// 税款所属期起
gt3.skssqz = "";// 税款所属期止
gt3.slr = "";// 受理人
gt3.zsxmData = null;// 征收项目代码表
gt3.zspmData = null;// 征收品目代码表
gt3.zszmData = null;// 征收子目代码表
gt3.xmZspmData = null;// 项目征收品目
gt3.xmZszmData = null;// 项目征收子目
gt3.bdcZspmData = null;// 不动产征收品目
gt3.bdcZszmData = null;// 不动产征收子目
gt3.xmxh = 1;// 项目序号
gt3.resData = null;
gt3.pzxh = "";// 凭证序号
gt3.ybtse = "";
gt3.qzdList = null;// 起征点信息
gt3.zrrBz = "";
gt3.zxbztzsuuid = "";// 自查补报通知书uuid
gt3.gsMsg = "";// 获取国税增值税消费税应税项提示信息
gt3.fjsxx = "";// 附件税随主税征收参数
gt3.cfyqsbmsg = "";// 重复逾期申报提醒信息
gt3.wbchkMes = "";// 网报特色增加的提示
gt3.cfsbjybz = "";// 网报特色
gt3.skselbz = "";// 大连网报页面控制
/** ******错误更正********* */
gt3.scenceCs = "zcsb";// // 申报渠道 默认正常申报
gt3.sbuuid = "";// 申报uuid
gt3.sbbList = "";// 原申报数据
var tsswjggzlx = "";// 获取税务机关的特殊征收类型lx="1"代表内蒙地税特殊规则
gt3.xmxxList = "";// 房屋土地项目信息
var cxbj = "N"; // 查询标记
var sqDqdehdBz = "N";// 上期定期定额核定
var sfsyyhbftc = "N";// 优化版房土车标志
var skxxGridfromgz;
var yzpzxh = "";
var dymbuuid = "sb175_fxmtysbprint";
var printTitle = "通用申报表";
var caculateGridHJFlag = "Y";
var ygzsxsj = "";
var yysfjsList;
gt3.sbbck = "N"; // 20160922 网报调整
var jsList; // 个人出租房产加收list
var zrrmrhy; // 自然人默认行业
var zrrmrxzqh;// 自然人默认行政区划
var zrrmrjg;// 自然人默认机关
gt3.fjsxmsbbz = "N";// 附加税项目申报校验-吉林地税提出 ZOG00_201706050004
gt3.fjszspms = "";// 附加的征收品目们


var htmbfzkg = "N";//是否启用新版打印 网报
// 打印所需变量
var printFileType = "excel";// 模版类型
var hxdyForPrint = "Y";// 横向打印参数
var fykg = "N"; // 分页参数
var zzlx = "A4";// 纸张参数
var printMode = '{"PRINT_PAGE_PERCENT":"85%"}';// 缩放参数
var printTitle = "通用申报表（税及附征税费）"; // 模版标题
/**
 * 主表打印函数
 * 
 * @return
 */
function setZbdymbuuid() {
    debugger;
    var dymbuuid = "sb175_fxmtysbprint";
    fykg = "N";
    hxdyForPrint = "Y";
    zzlx = "A4";
    caculateGridHJFlag = "Y";
    printMode = '{"PRINT_PAGE_PERCENT":"85%"}';
    printTitle = "通用申报表（税及附征税费）";
    return dymbuuid;
}
function printhtm() {
    if ("Y" == htmbfzkg) {
        gyTaxPrintWordOrExcel();
    } else {
        fxmtysbprint();
    }
}
/*******************************************************************************
 * 初始化页面
 * 
 * @param {}
 *            resData
 */
function init(resData) {
    htmbfzkg = resData.getAttr("htmbfzkg"); //网报
    // 网报特色修改：增加申报类型控制开关begin
    var sblxBz = resData.getAttr("sblxBz");
    if ($chk(sblxBz) && sblxBz == "Y") {
        $w('nsrxxForm').enable(['sbsxDm1']);
    }
    // 网报特色修改：增加申报类型控制开关end
    // 网报特有代码start
    if ($chk(resData.getAttr("sbgnxts"))) {
        $('sbgnxts').innerHTML = resData.getAttr("sbgnxts");// 网报特有逻辑
    }
    gt3.zrrBz = resData.getAttr("zrrBz");
    gt3.djxh = resData.getAttr("djxh");
    // 网报特有end
    var flzlGrid = $w('flzlGrid');
    if (!flzlGrid.collapseDiv.hasClass('x-tool-s')) {
        flzlGrid.toggle();
    }
    var nsrxxForm = $w('nsrxxForm');
    // // 纳税人识别号获得焦点
    // nsrxxForm.getFieldEl('nsrsbh').focus();
    // 添加缓存数据
    gt3.skssqq = resData.getAttr("skssqq");
    ygzsxsj = resData.getAttr("ygzsxsj");
    zrrmrhy = resData.getAttr("zrrmrhy");
    gt3.skssqz = resData.getAttr("skssqz");
    gt3.slr = resData.getAttr("swyrMc");
    gt3.today = resData.getAttr("today");
    // toolBarCtl("fxmtysbToolBar", ["print"], "disabled");

    zrrmrjg = resData.getAttr("zgjg");
    zrrmrxzqh = resData.getAttr("xzqh");

    // 光标移动监听事件，高亮相同税源的税款信息
    mouseMove();
    gt3.scenceCs = resData.getAttr("cwgzbz");
    // 网报特有逻辑
    gt3.fjszspms = resData.getAttr("fjszspms");
    gt3.fjsxmsbbz = resData.getAttr("fjsxmsbbz");
    if ($chk(resData.getAttr("scenceCs")) && "sbbck" == resData.getAttr("scenceCs")) {
        gt3.sbbck = "Y"
    }

    // 网报特有逻辑
    if (gt3.sbbck == "Y") {
        toolBarCtl("fxmtysbToolBar", ["save"], "disabled");
        toolBarCtl("fxmtysbToolBar", ["reset"], "disabled");
        toolBarCtl("fxmtysbToolBar", ["print"], "enabled");
        $w("skxxGrid").readonly();
        // var gridCloItems = $w("skxxGrid").items();
        // var gridClo;
        // var gridCloName;
        // for(var i = 0;i< gridCloItems.length;i++){
        // gridClo = gridCloItems[i];
        // gridCloName = gridClo.getAttribute("name");
        // gridClo.setAttribute("disable","true");
        // }
        return;
    }
    // 错误更正进入
    if (gt3.scenceCs == "cwgzbz") {
        // 网报特有逻辑
        if ($chk(resData.getAttr("sbbck"))) {
            gt3.sbbck = "Y"
        }
        cxbj = resData.getAttr("cxbj");
        gt3.fjsxx = resData.getAttr("fjsxx");
        gt3.djxh = resData.getAttr("djxh");
        gt3.sbuuid = resData.getAttr("sbuuid");
        gt3.pzxh = resData.getAttr("pzxh");
        gt3.sbbList = pc.getResData("sbbList", resData);
        skxxGridfromgz = pc.getResData("sbxxList", resData);
        gt3.xmxxList = pc.getResData("xmxxList", resData);
        toolBarCtl("fxmtysbToolBar", ["import"], "disabled");
        toolBarCtl("fxmtysbToolBar", ["save"], "enabled");
        var headData = pc.getResData("nsrxxForm", resData);
        var nsrxxMap = pc.getResData("nsrxxMap", resData);
        gt3.djzclxDm = nsrxxMap.data.djzclxDm.value;
        var bsr = headData.data.bsr.value;
        // 网报调整办税人
        if ($chk(bsr) && bsr != "") {
            $w("slxxForm").setValue("bsr", headData.data.bsr.value);
        } else {
            $w("slxxForm").setValue("bsr", headData.data.nsrmc.value);
        }
        // 行政区划、街道乡镇、行业、主管税务所科分局 任意一项为空 为纳税人
        if (!$chk(headData.data.xzqhszDm.value)
				|| !$chk(headData.data.jdxzDm.value)
				|| !$chk(headData.data.hyDm.value)
				|| !$chk(headData.data.zgswskfjDm.value)) {
            gt3.zrrBz = "N";
            // 取消行政区划、街道乡镇、行业、主管税务所科必录
            nsrxxForm._itemSwitch("hyDm", "pulltree", {
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
            nsrxxForm._itemSwitch("hyDm", "pulltree", {
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
        (function () {
            nsrxxForm.disable();
            $w("slxxForm").disable();
            // 加载通用申报初始数据
            initData();
            // 项目申报获取初始化数据
            var bdcBz = resData.getAttr("bdcBz");// 是否存在不动产项目标志
            var gcBz = resData.getAttr("gcBz");// 是否存在不动产项目标志
            if (bdcBz == "Y") {
                getXmBdcSkxx("2");
            }
            if (gcBz == "Y") {
                getXmBdcSkxx("3");
            }
            // 网报特有逻辑
            if (gt3.sbbck == "Y") {
                toolBarCtl("fxmtysbToolBar", ["save"], "disabled");
                toolBarCtl("fxmtysbToolBar", ["reset"], "disabled");
                toolBarCtl("fxmtysbToolBar", ["print"], "enabled");
                $w("skxxGrid").readonly();
                var gridCloItems = $w("skxxGrid").items();
                var gridClo;
                var gridCloName;
                for (var i = 0; i < gridCloItems.length; i++) {
                    gridClo = gridCloItems[i];
                    gridCloName = gridClo.getAttribute("name");
                    gridClo.setAttribute("disable", "true");
                }
            }
        }).delay(1);
        return;
    } else {
        $w("skxxGrid").readonly();
    }

    changesfft();
    tsswjggzlx = resData.getAttr("tsswjggzlx");// 获取税务机关特殊规则
    var sfxstqxm = resData.getAttr("sfxstqxm");
    if ("N" == sfxstqxm) {
        var editBtn = $w("skxxGrid").console().getElement('input[name="xmtq"]');
        editBtn.setStyle("display", "none");
    }
    // 大连特殊修改：到16年八月份可覆盖begin
    for (var i = 0; i < resData.data.length; i++) {
        if ('skselbz' == resData.data[i].name) {
            gt3.skselbz = resData.data[i].value;
            if ($chk(gt3.skselbz) && gt3.skselbz == 'N') {
                $w('nsrxxForm').disable('skssqq');
                $w('nsrxxForm').disable('skssqz');
            }
        }
    }
    (function () {
        var nsrxxForm = $w('nsrxxForm');
        // 大连特殊修改：到16年八月份可覆盖end
        // 网报特有代码添加
        // queryNsrxxWb(); 2017-01-04
        var cxbz = "4";
        queryNsrxxbyNsrsbh(nsrxxForm.getValue("nsrsbh"), queryNsrxxSuccess, cxbz);
    }).delay(1);

    // 网报增加
    // var wbskssqBz = resData.getAttr("wbskssqBz");
    // if($chk(wbskssqBz) && wbskssqBz=='N'){
    // $w("nsrxxForm").disable('skssqq');
    // $w("nsrxxForm").disable('skssqz');
    // }
    var dzswj_sqkzkg = isEnableSkssq("BDA0610100");
    if ($chk(dzswj_sqkzkg) && dzswj_sqkzkg == "Y") {
        $w("nsrxxForm").disable(["skssqq", "skssqz"]);
    }
    var bz = isEnableZcbb("BDA0610100");
    if ($chk(bz) && bz == "Y") {
        $w('nsrxxForm').enable('sbsxDm1');
    }


}

function pageAfter() {
    // (function(){
    // if(gt3.scenceCs!="cwgzbz"){setSkxx();}
    // }).delay(1000);
}

// 网报特有代码
/*******************************************************************************
 * 查询纳税人信息成功回调函数
 * 
 * @param nsrParam
 *            纳税人信息返回参数
 * @param zrrParam
 *            自然人信息返回参数
 * @return
 */
function queryNsrxxWb() {
    var nsrxxForm = $w('nsrxxForm');
    toolBarCtl("fxmtysbToolBar", ["save"], "enabled");// 保存按钮启用
    $w("skxxGrid").reset();// 税款信息清空
    $w("skxxGrid").editable();// 税款信息可编辑
    // 自查补报
    changeSblx();
    // 获取税种信息
    initData();
}

/*******************************************************************************
 * 纳税人识别号校验，必填
 * 
 * @param el
 * @param v
 * @returns {___anonymous24909_24912}
 */
function nsrsbhCheck(el, v) {
    var result = {};
    if (v == "") {
        // state值必须为false,否则不显示提示信息
        result["state"] = false;
        // msg为错误的提示信息
        result["msg"] = "请输入纳税人识别号";
        // $w("nsrxxForm").getFieldEl('nsrsbh').focus();
    } else {
        result["state"] = true;
    }
    return result;
}

/*******************************************************************************
 * 查询纳税人信息
 * 
 * @param e
 * @return null
 */
function queryNsrxx(e) {
    var nsrxxFormObj = $w('nsrxxForm');
    var nsrsbh = nsrxxFormObj.getValue("nsrsbh");
    if (!isEnterUp(e)) {
        return;
    }
    // cxbz 查询标志：
    // 1.只查询自然人
    // 2.只查询纳税人(需要权限过滤)
    // 3.只查询纳税人(不权限过滤)
    // 4.查询自然人和纳税人（纳税人需要权限过滤）；
    var cxbz = "4";
    queryNsrxxbyNsrsbh(nsrsbh, queryNsrxxSuccess, cxbz);
}

/*******************************************************************************
 * 
 * 判断是否是Enter键
 * 
 * @return 是：true 否：false
 */
function isEnterUp(e) {
    var code = e.keyCode ? e.keyCode : e.code;
    return code == 13;
}

/*******************************************************************************
 * 查询纳税人信息成功回调函数
 * 
 * @param nsrParam
 *            纳税人信息返回参数
 * @param zrrParam
 *            自然人信息返回参数
 * @return
 */
function queryNsrxxSuccess(nsrParam, zrrParam) {
    var nsrxxForm = $w('nsrxxForm');
    // 纳税人
    if (nsrParam != "" && nsrParam != null) {
        gt3.zrrBz = "N";
        nsrxxForm.getFieldEl('nsrmc').value = nsrParam.nsrmc.value; // 纳税人名称
        gt3.djxh = nsrParam.djxh.value;// 登记序号
        gt3.djzclxDm = nsrParam.djzclxDm.value;//
        // 监控纳税人状态
        if (!checkNsrzt(nsrParam.nsrztDm.value)) {
            toolBarCtl("fxmtysbToolBar", ["save"], "disabled");
            $w("skxxGrid").readonly();
            return;
        }
        $("zrrTR1").style.display = "none";
        $("zrrTR2").style.display = "none";
        nsrxxForm._itemSwitch("hyDm", "pulltree", {
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
        nsrxxForm.getFieldEl('nsrmc').value = zrrParam.xm.value; // 纳税人名称
        nsrxxForm.getFieldEl('nsrsbh').value = zrrParam.nsrsbh.value; // 纳税人名称
        gt3.djxh = zrrParam.djxh.value;// 登记序号
        gt3.djzclxDm = zrrParam.djzclxDm.value;//
        $("zrrTR1").style.display = "block";
        $("zrrTR2").style.display = "block";
        nsrxxForm._itemSwitch("hyDm", "pulltree", {
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
        nsrxxForm.setValue("hyDm", zrrmrhy);
        nsrxxForm.setValue("xzqhszDm", zrrmrxzqh);
        nsrxxForm.setValue("zgswskfjDm", zrrmrjg);
        nsrxxForm.setValue("nsrsbh", zrrParam.nsrsbh.value);
    } else {
        swordConfirm('纳税人（自然人）信息不存在，是否进行自然人间接登记？', {
            okBtnName: "是",
            cancelBtnName: "否",
            onOk: function () {
                _func = queryNsrxxSuccess;
                // 自然人间接登记
                var submitBtn = new SwordSubmit();
                submitBtn.pushData('xm', '');
                submitBtn.pushData('zjzlDm', '');
                submitBtn.pushData('zjhm', '');
                submitBtn.pushData('slswsxDm', '');
                submitBtn.setCtrl('SBGyCtrl_initZrrdj');
                swordAlertIframe("", {
                    titleName: '自然人间接登记',
                    width: 800,
                    height: 350,
                    param: window,
                    submit: submitBtn
                });
            },
            onCancel: function () {
                return;
            }
        });
    }
    // 申报类型获得焦点
    toolBarCtl("fxmtysbToolBar", ["save"], "enabled");// 保存按钮启用
    if (gt3.scenceCs != "sbdr") {
        // nsrxxForm.getFieldEl("sbsxDm1").focus(); //网报注释
        $w("skxxGrid").reset();// 税款信息清空
        $w("skxxGrid").editable();// 税款信息可编辑
    } else {
    }
    // 自查补报
    changeSblx(); // 网报注释
    // 获取税种信息
    initData();
}

/*******************************************************************************
 * 所属期起改变
 */
function changeSsqq(inputEl) {
    var form = $w("nsrxxForm");
    var ssqq = form.getValue("skssqq");// 税款所属期起
    var ssqz = form.getValue("skssqz");// 税款所属期止
    // 税款所属期起为空或者起止日期都是初始化的值，不校验
    if ((ssqq == gt3.skssqq && ssqz == gt3.skssqz) || !$chk(ssqq)) {
        return;
    }
    var qDates = splitStr(ssqq);
    if (parseInt(qDates[2], 10) != 1) {
        swordAlert("所属期起必须为某月的第一天", {
            // 确定：所属期起获得焦点
            onOk: function () {
                (function () {
                    form.getFieldEl("skssqq").focus();
                }).delay(500)
            }
        });
        // 清空起止日期
        form.setValue("skssqq", "");
        form.setValue("skssqz", "");
        return;
    }
    // 清空所属期止，并获得焦点
    form.setValue("skssqz", "");
    form.getFieldEl("skssqz").focus();
}

/*******************************************************************************
 * 当修改税款所属期止时进行校验
 * 
 * @return true：无 false：弹出错误消息
 */
function changeSsqz(inputEl) {
    var from = $w("nsrxxForm")
    var ssqq = from.getValue("skssqq");
    var ssqz = from.getValue("skssqz");
    var reMeg = checkDate2(ssqq, ssqz);// 返回信息
    if ($chk(reMeg)) {
        // 弹出提醒框，根据提醒内容判断清空项和焦点获得项
        swordAlert(reMeg, {
            onOk: function () {
                if (reMeg.contains("所属期起") && reMeg.contains("所属期止")) {
                    from.setValue("skssqq", "");
                    from.setValue("skssqz", "");
                    from.getFieldEl("skssqq").focus();
                } else if (reMeg.contains("所属期起")) {
                    from.setValue("skssqq", "");
                    from.setValue("skssqz", "");
                    from.getFieldEl("skssqq").focus();
                } else {
                    from.setValue("skssqz", "");
                    from.getFieldEl("skssqz").focus();
                }
            }
        });
        return;
    }
    // 自查补报
    changeSblx();
    // 获取税种信息
    initData();
}

/*******************************************************************************
 * 校验所属期是否符合要求
 * 
 * @param {}
 *            ssqq 所属期起
 * @param {}
 *            ssqz 所属期止
 * @return {String} 返回错误消息
 */
function checkDate2(ssqq, ssqz) {
    var qDates = splitStr(ssqq);
    var zDates = splitStr(ssqz);
    if (ssqq == undefined || ssqq == "") {
        return "所属期起不能不能为空!";
    }
    if (parseInt(qDates[2], 10) != 1) {
        return "所属期起必须为某月的第一天";
    }
    // if (ssqz == undefined || ssqz == "") {
    // return "所属期止不能不能为空!";
    // }
    if (monthDay(zDates[0], parseInt(zDates[1], 10)) != parseInt(zDates[2], 10)) {
        return "所属期止必须为某月的最后一天";
    }
    if (ssqq == "" || ssqz == "") {
        return null;
    }
    if (qDates[0] != zDates[0]) {
        return "所属期起和所属期止必须在同一年!";
    }
    if (!((parseInt(qDates[1], 10) == 1 && parseInt(zDates[1], 10) == 3)
			|| (parseInt(qDates[1], 10) == 4 && parseInt(zDates[1], 10) == 6)
			|| (parseInt(qDates[1], 10) == 7 && parseInt(zDates[1], 10) == 9) || (parseInt(
			qDates[1], 10) == 10 && parseInt(zDates[1], 10) == 12))
			&& !((parseInt(qDates[1], 10) == 1 && parseInt(zDates[1], 10) == 6) || (parseInt(
					qDates[1], 10) == 7 && parseInt(zDates[1], 10) == 12))
			&& !((parseInt(qDates[1], 10) == 1 && parseInt(zDates[1], 10) == 12))
			&& parseInt(qDates[1], 10) != parseInt(zDates[1], 10)) {
        return "所属期不合法，必须为整年、半年、季或月";
    }
    // if (parseInt(qDates[1], 10) != parseInt(zDates[1], 10)) {
    // return "所属期起和所属期止必须在同一个月";
    // }
    if (ssqq.substring(0, 10) > ssqz.substring(0, 10)) {
        return "所属期起不能大于所属期止!";
    }
    // var rowDatas = $w("skxxGrid").getCurPageGridData().trs;
    // for (var i = 0; i < rowDatas.length; i++) {
    // var rowData = rowDatas[i];
    // var sfkssqq = rowData.getValue("sfkssqq");
    // var sfkssqz = rowData.getValue("sfkssqz");
    // if ($chk(ssqq) && $chk(sfkssqq) && !compareDate(ssqq, sfkssqq)) {
    // return "所属期起不能大于税款信息中的所属期起";
    // } else if ($chk(sfkssqz) && $chk(ssqz) && !compareDate(sfkssqz, ssqz)) {
    // return "所属期止不能小于税款信息中的所属期止";
    // }
    // }
    return null;
}

/*******************************************************************************
 * 申报日期校验
 * 
 * @param {}
 *            inputEl
 * @return {Boolean}
 */
function changeSbrq(inputEl) {
    var sbrq = inputEl.value;// 获得申报日期值
    if (!sbData(sbrq, gt3.today)) {
        swordAlert("申报日期必须为今天或今天以前", {
            onOk: function () {
                (function () {
                    $w("nsrxxForm").getFieldEl("sbrq1").focus();
                }).delay(500);// 申报日期获得焦点 延迟0.5秒---解决回车关闭弹窗，跳转至下一个录入项
            }
        });
        // 申报日期默认为当前日期
        $w("nsrxxForm").setValue("sbrq1", gt3.today);
        return false;
    }
    // 获取税种信息
    // initData();
    return true;
}
/**
 * 检查营改增后,营业税属期是否大于营改增上线时间
 * 
 * @param row
 * @param rowData
 * @return
 */
function checkygzsj(row, rowData) {
    var zsxmDm = rowData.getValue("zsxmDm");// 征收项目
    var zspmDm = rowData.getValue("zspmDm");// 征收品目
    var skssqz = rowData.getValue("sfkssqz");// 征收品目
    if (!$chk(skssqz)) {
        return true;
    }
    if (compareDate(ygzsxsj, skssqz)) {
        if ("10103" == zsxmDm) {
            swordAlertWrong("营业税相关税种的税款所属期止不能大于营改增上线时间:" + ygzsxsj);
            $w("skxxGrid").updateCell(row.getCell("sfkssqz"), "");
            return false;
        } else {
            var queryBtn = new SwordSubmit();
            queryBtn.pushData("zsxmDm", "10103");
            queryBtn.pushData("zspmDm", "000000000");
            queryBtn.setCtrl(gt3.ctrl + '_getFsxxByZsxxAndCsb');
            queryBtn.setOptions({
                async: 'false',
                mask: 'false',
                ctrl: gt3.ctrl + '_getFsxxByZsxxAndCsb',
                onSuccess: function (req, res) {
                    yysfjsList = pc.getResData("fjsList", res);
                }
            });
            queryBtn.submit();

            if ($chk(yysfjsList) && yysfjsList.trs.length > 0) {
                for (var j = 0; j < yysfjsList.trs.length; j++) {
                    var skxx = yysfjsList.trs[j];
                    var fjszspmDm = skxx.tds.zspmDm.value;
                    if (zspmDm == fjszspmDm) {
                        swordAlertWrong("营业税相关税种的税款所属期止不能大于营改增上线时间:" + ygzsxsj);
                        $w("skxxGrid").updateCell(row.getCell("sfkssqz"), "");
                        return false;
                    }
                }
            }
        }
    }
    return true;
}

/*******************************************************************************
 * 税款信息所属期变化
 * 
 * @param {}
 *            inputEl 当前组件
 */
function changeSSq(inputEl) {
    var skxxGrid = $w("skxxGrid");
    var elName = inputEl.name;// 触发事件的控件name
    var row = skxxGrid.getCheckedRow();// 当前行
    var rowData = skxxGrid.getCheckedRowData();// 当前行数据
    // 重置减免性质、减免税额
    toResetSsjmxz(row);
    var cellEl = row.getCell(elName);// 当前组件
    if (elName == "sfkssqq") {
        skxxGrid.updateCell(row.getCell("sfkssqz"), "");
        return;
    }

    if (!checkygzsj(row, rowData)) {
        return;
    }

    var form = $w("nsrxxForm");// 纳税人信息Form
    var skssqq = form.getValue("skssqq");// 表头税款所属期起
    var skssqz = form.getValue("skssqz");// 表头税款所属期止
    var yxqq = rowData.getValue("yxqq");// 当前税种认定有效期起
    var yxqz = rowData.getValue("yxqz");// 当前税种认定有效期止
    var ssqq = rowData.getValue("sfkssqq");// 当前税种税款所属期起
    var ssqz = rowData.getValue("sfkssqz");// 当前税种税款所属期止
    var rdpzuuid = rowData.getValue("rdpzuuid");
    if (!$chk(ssqz)) {
        return;
    }
    var nsqxDm = rowData.getValue("nsqxDm");// 纳税期限代码
    var sybz = rowData.getValue("sybzDm1");
    // 非税费种认定税种，可以修改为按次申报
    if (!$chk(rdpzuuid) && ssqq == ssqz) {
        nsqxDm = "11";
    }
    if (!qzDate(ssqq, ssqz, gt3.today, nsqxDm)) {
        skxxGrid.updateCell(cellEl, "");
        skxxGrid.setCellFocus(row.getCell("xh").get("realvalue"), elName);
        return;
    }
    // 房屋土地 计算期数
    if (sybz == 1 || sybz == 4) {
        var msg = "";// 错误信息
        if (!$chk(ssqq)) {
            msg = "税款所属期起不能为空";
        } else if (compareDate(ssqz, yxqq)) {
            msg = "税款所属期不在有效期（" + yxqq + "~" + yxqz + "）范围之内，请重新选择属期";
        } else if (compareDate(yxqz, ssqq)) {
            msg = "税款所属期不在有效期（" + yxqq + "~" + yxqz + "）范围之内，请重新选择属期";
        }
        if ($chk(msg)) {
            swordAlert(msg, {
                onOk: function () {
                    skxxGrid.setCellFocus(row.getCell("xh")
                                    .get("realvalue"), elName);// 光标回到出发控件
                }
            });

            skxxGrid.updateCell(cellEl, "");// 清空当前日期
            return;
        }
        // 获取期数
        var qs = getQs(nsqxDm, ssqq, ssqz, yxqq, yxqz);
        skxxGrid.updateCell(row.getCell("qs"), qs);
    }
    // 判断属期是否在当期属期之后（单提醒）
    if (!checkSsqIsNormal(ssqq, ssqz, gt3.today, nsqxDm)) {
        swordAlert("申报所属期超出当期期限，请确认");
    }
    skxxGrid.updateCell(row.getCell("bqyjsfe"), "0.00");
    // 获取税率
    getHdslHSlxx(row, rowData);
    // 计算
    calTable(skxxGrid, row, rowData, 2);
    var zsxmDm = rowData.getValue("zsxmDm");// 征收项目
    var zspmDm = rowData.getValue("zspmDm");// 征收品目
    // 检查逾期重复申报
    if ($chk(zsxmDm) && $chk(zspmDm)) {
        var skxxGridData = {
            sword: "SwordGrid",
            name: "skxxGrid",
            trs: new Array()
        };
        skxxGridData.trs.push(skxxGrid.getCheckedRowData());
        checkCfYqSb(skxxGridData);
    }
}

/*******************************************************************************
 * 判断属期是否正常
 * 
 * @param {}
 *            ssqq 所属期起
 * @param {}
 *            ssqz 所属期止
 * @param {}
 *            sbrq 申报日期
 * @param {}
 *            nsqxDm 纳税期限代码
 * @return {Boolean} 是否正常
 */
function checkSsqIsNormal(ssqq, ssqz, sbrq, nsqxDm) {
    if (!$chk(nsqxDm)) {
        return true;
    }
    // 按申报日期，纳税期限代码取到当期属期
    var ssqArr = getSsq(nsqxDm, sbrq, "Y", ssqq, ssqz);
    var sfkssqq = ssqArr[0];
    var sfkssqz = ssqArr[1];
    if (!compareDate(ssqq, sfkssqq)) {
        return false;
    }
    return true;
}

/*******************************************************************************
 * //初始化后调用后台方法，返回预缴税款数据信息，减免数据信息，申报数据信息
 * 
 * @return OnSuccesssb 方法
 */
function initData() {
    var nsrxxForm = $w("nsrxxForm");
    var nsrsbh = nsrxxForm.getFieldEl("nsrsbh").value;// 纳税人识别号
    var sblxDm = nsrxxForm.getValue("sbsxDm1").code;// 申报类型代码
    var skssqq = nsrxxForm.getValue("skssqq");// 所属期起
    var skssqz = nsrxxForm.getValue("skssqz");// 所属期止
    // 任意一项为空，return
    if (!$chk(nsrsbh) || !$chk(sblxDm) || !$chk(skssqq) || !$chk(skssqz)
			|| !$chk(gt3.djxh)) {
        return;
    }
    // 批量扣款提示:如果已经产生批扣清册，则给予提示信息。
    getPkqcztts(gt3.djxh, skssqq, skssqz);

    if (!$chk(gt3.scenceCs)) {
        $w("skxxGrid").reset();
    } else if (gt3.scenceCs == "sbdr") {
        $w("skxxGrid").readonly();
    }
    var initBtn = new SwordSubmit();
    initBtn.pushData('djxh', gt3.djxh);// 登记序号
    initBtn.pushData(nsrxxForm.getSubmitData());
    initBtn.setCtrl(gt3.ctrl + '_getInitData');
    initBtn.setFunction('onAfterLoadData', 'OnSuccesssb');
    initBtn.submit();

    // if(gt3.scenceCs!="cwgzbz"){setSkxx();}
    (function () {
        if (gt3.scenceCs != "cwgzbz") { setSkxx(); }
    }).delay(1000);
}

/*******************************************************************************
 * 初始化接口回调函数,存全局变量里面
 * 
 * @return
 */
function OnSuccesssb(req, resData) {
    // 首先判断是不是双定户，是则提示
    var zshdBz = resData.getAttr("zshdBz");
    if ($chk(zshdBz) && zshdBz == 'Y' && gt3.scenceCs != "cwgzbz") {
        swordAlert('该户为定期定额户，建议到"定期定额自行申报"模块申报');
    }
    // 存入页面缓存
    sfsyyhbftc = pc.getResData("sfsyyhbftc", resData).value;// 优化版房土车标志
    gt3.zsxmData = pc.getInitDataByDataName("DM_GY_ZSXM_Y").data;// 征收品目代码缓存
    gt3.zspmData = pc.getInitDataByDataName("DM_GY_ZSPM_Y").data;// 征收品目代码缓存
    gt3.zszmData = pc.getInitDataByDataName("DM_GY_ZSZM").data;// 征收子目代码缓存
    gt3.sbxxGrid = pc.getResData("sbxxGridlist", resData);// 申报信息
    gt3.jmxxGrid = pc.getResData("jmxxGridlist", resData);// 减免信息
    gt3.yjxxGrid = pc.getResData("yjxxGridlist", resData);// 预缴信息
    gt3.skxxList = pc.getResData("skxxList", resData);// 税款信息
    gt3.gsMsg = resData.getAttr("gsMsg");
    gt3.fjsxx = resData.getAttr("fjsxx");
    gt3.wbchkMes = resData.getAttr("wbchkMes");// 网报特色增加的提示
    var qzdList = pc.getResData("qzdList", resData);// 起征点信息
    updateQzdxx(qzdList);// 更新起征点信息
    // gt3.cfyqsbmsg = resData.getAttr("cfyqsbmsg");
    gt3.cfsbjybz = resData.getAttr("cfsbjybz");// 网报特色湖南地税提出的校验重复申报
}

/*******************************************************************************
 * 错误更正时grid数据处理
 */
function afterInitGrid() {
    // 查询时只展示，不做数据加工
    if (gt3.scenceCs == "cwgzbz" && "Y" != cxbj && gt3.sbbck != "Y") { // 20160922网报调整
        var grid = $w("skxxGrid");
        var rows = grid.dataDiv().getChildren();
        var rowDatas = grid.getAllNoDeleteGridData().trs;
        var xmxxList = gt3.xmxxList.trs;
        for (var i = 0; i < rowDatas.length; i++) {
            var rowData = rowDatas[i];
            var sybz = rowData.getValue("sybzDm1");
            var zsxmDm = rowData.getValue("zsxmDm");
            var zspmDm = rowData.getValue("zspmDm");
            var skssqq = rowData.getValue("sfkssqq");
            var skssqz = rowData.getValue("sfkssqz");
            rows[i].getCell("sfkssqq").disable = "true";
            rows[i].getCell("sfkssqz").disable = "true";
            if (!$chk(sybz)) {
                // 更新税种信息的rdpzuuid和rdzsuuid
                var rdzsuuidCell = rows[i].getCell("rdzsuuid");
                var rdpzuuidCell = rows[i].getCell("rdpzuuid");
                var zfsbzCell = rows[i].getCell("zfsbz");
                if (rdzsuuidCell.realvalue == "0") {
                    grid.updateCell(zfsbzCell, "0");
                } else {
                    grid.updateCell(zfsbzCell, "1");
                }
                getHdslHSlxx(rows[i], rowData);
                // 个人所得税，按年累进申报时取上期已申报税额
                if (zsxmDm == "10106" || rdzsuuidCell.realvalue == "0") {
                    calTable(grid, rows[i], rowDatas[i], 1, 1);
                }
            } else {
                rows[i].getCell("zsxmDm").disable = true;
                if (sybz == "1" || sybz == "4") {// 房屋或土地项目，计算期数
                    var yxqq = "";
                    var yxqz = "";
                    var nsqxDm = "";
                    var jcl = "";// 减除率 房屋用
                    var nzjsr = "";
                    var sybh = rowData.getValue("sybh1");
                    // 找到当前税源的有效期和纳税期限
                    for (var j = 0; j < xmxxList.length; j++) {
                        if (sybh == xmxxList[j].tds.sybh.value) {
                            yxqq = xmxxList[j].tds.yxqq.value;
                            yxqz = xmxxList[j].tds.yxqz.value;
                            nsqxDm = xmxxList[j].tds.nsqxDm.value;
                            if (sybz == "4") {
                                nzjsr = xmxxList[j].tds.nzjsr.value;
                                jcl = xmxxList[j].tds.jcl.value;
                                grid.updateCell(rows[i].getCell("jcl"), jcl);
                            }
                            break;
                        }
                    }
                    if ($chk(yxqq) && $chk(yxqz) && $chk(nsqxDm)) {
                        // 获取期数
                        var qs = getQs(nsqxDm, skssqq, skssqz, yxqq, yxqz);
                        grid.updateCell(rows[i].getCell("qs"), qs);
                    }
                    grid.updateCell(rows[i].getCell("nzjsr"), nzjsr);
                } else if (sybz == "2" || sybz == "3") {// 不动产项目、工程项目
                    var bdcgcSkxxGrid = null;
                    var xmszdswjgDm = "";
                    if (sybz == "2") {
                        bdcgcSkxxGrid = gt3.bdcSkxxGrid;
                    } else {
                        bdcgcSkxxGrid = gt3.xmSkxxGrid;
                    }
                    for (var j = 0; j < bdcgcSkxxGrid.trs.length; j++) {
                        var skxx = bdcgcSkxxGrid.trs[j];
                        if (skxx.tds.zsxmDm.value = zsxmDm) {
                            grid.updateCell(rows[i].getCell("nsqxDm"),
									skxx.tds.nsqxDm.value);
                            break;
                        }
                    }
                }
            }
            // 控制子目是否可编辑
            var zszmCell = rows[i].getCell("zszmDm");
            var zmData = null;// 当前子目集合
            if (!$chk(sybz)) {// 通用申报
                zmData = gt3.zszmData;
            } else if (sybz == "2") {// 不动产
                zmData = gt3.bdcZszmData;
            } else if (sybz == "3") {// 项目
                zmData = gt3.xmZszmData;
            }
            // 子目列表为空或者该品目下子目为空
            if (!$chk(zmData) || getZszmCount(zmData, zspmDm) == 0) {
                zszmCell.disable = "true";
            } else {
                zszmCell.disable = "false";
            }
            // 营业税、消费税、增值税、堤围费、文化建设事业费免征更新起征点额度，恢复至申报前
            if (zsxmDm == "10103" || zsxmDm == "10101" || zsxmDm == "10102"
					|| zsxmDm == "30446" || zsxmDm == "30138" || zsxmDm == "30221" || zsxmDm == "30126" || zsxmDm == "30217") {
                var mzed = 0;
                var sfkssqq = rowData.getValue("sfkssqq");
                var sfkssqz = rowData.getValue("sfkssqz");
                var ysxjHj = getYsxHj(rowData);// 该税种应税项合计
                var skssq = sfkssqq + "||" + sfkssqz;
                var qzdDatas = gt3.qzdList.trs;
                for (var j = 0; j < qzdDatas.length; j++) {
                    var qzdSsq = qzdDatas[j].tds.ssq.value;
                    var qzdZsxmDm = qzdDatas[j].tds.zsxmDm.value;
                    if (qzdZsxmDm == zsxmDm && skssq == qzdSsq) {
                        var qzdje = qzdDatas[j].tds.qzdje.value;
                        var ysbje = qzdDatas[j].tds.ysbje.value;// 已申报金额
                        // 更新已申报金额 =现有已申报金额-当前已使用额度
                        qzdDatas[j].tds.ysbje.value = isPositive((ysbje / 1)
								.subtract(ysxjHj / 1));
                    }
                }
                // calTable(grid, rows[i], rowDatas[i], 1);
            }
        }
        // 针对应税项改变的从新计算
        for (var i = 0; i < rowDatas.length; i++) {
            var rowData = rowDatas[i];
            var zsxmDm = rowData.getValue("zsxmDm");
            // 营业税、消费税、增值税、堤围费、文化建设事业费免征更新起征点额度，恢复至申报前
            if (zsxmDm == "10103" || zsxmDm == "10101" || zsxmDm == "10102"
					|| zsxmDm == "30446" || zsxmDm == "30138" || zsxmDm == "30221" || zsxmDm == "30126" || zsxmDm == "30217") {
                calTable(grid, rows[i], rowDatas[i], 1, 1);
            }
        }
    }
}

/*******************************************************************************
 * 获取税费种信息（按钮触发）
 */
function setSkxx() {
    // 不存在税种信息，给出 提示
    if (!$chk(gt3.skxxList) || gt3.skxxList.trs == 0) {
        swordAlert("当前纳税人申报属期内不存在有符合条件的税（费）种认定信息，请通过税（费）种认定功能进行查阅");
        return;
    }
    var skxxGrid = $w("skxxGrid");
    skxxGrid.reset(); // 20160917网报修改,获取之前先清空,再插入.避免多次点,多次插入
    for (var j = 0; j < gt3.skxxList.trs.length; j++) {

        var zspmDm = gt3.skxxList.trs[j].tds.zspmDm.value;
        if (!($chk(zspmDm) && ("101016604" == zspmDm || "101016606" == zspmDm))) {
            var row = skxxGrid.insertRow(gt3.skxxList.trs[j]);
            // 税费种认定的征收项目、品目、子目不能修改
            if ("Y" != gt3.zrrBz) {
                row.getCell("zsxmDm").disable = "true";
                row.getCell("zspmDm").disable = "true";
                row.getCell("zszmDm").disable = "true";
            }
            // 网报特殊逻辑
            if (gt3.skselbz == "N") {
                row.getCell("sfkssqq").disable = "true";
                row.getCell("sfkssqz").disable = "true";
            }
            // 征收项目为个人所得税 且 是通用申报 重新获取个税税率,双定户初始化会有应税项
            var zsxmDm = gt3.skxxList.trs[j].getValue("zsxmDm");
            var sfkssqq = gt3.skxxList.trs[j].getValue("sfkssqq");
            var sfkssqz = gt3.skxxList.trs[j].getValue("sfkssqz");

            // 获取税率
            getHdslHSlxx(row, skxxGrid.getOneRowData(row));
            // 计算税款
            if (skxxGrid.getOneRowData(row).tds.ysx.value / 1 > 0) {// 网报修改版本兼容性问题
                calTable(skxxGrid, row, skxxGrid.getOneRowData(row), 4);
            }

            // weiyongxia 2017-06-16 网报特色湖南地税提出的校验重复申报
            if ("Y" == gt3.cfsbjybz) {
                var sfysb = $chk(gt3.skxxList.trs[j].tds.sfysb) ? gt3.skxxList.trs[j].tds.sfysb.value : '';
                if ("Y" == sfysb) {
                    // grid 整行不可编辑
                    var allCells = row.getChildren();
                    for (var i = 0; i < allCells.length; i++) {
                        var cell = allCells[i];
                        var name = cell.get('name');
                        if ("xz" != name) {
                            row.disable(name);
                        }
                    }
                    row.setStyle('color', 'red');
                    skxxGrid.updateCell(row.getCell("zfBtn"), '作废');
                    //row.getCell("zfBtn").disable = "false";
                    skxxGrid.cellEnable(row.getCell("zfBtn"));
                }
            }
        }

    }
    if ($chk(gt3.cfyqsbmsg)) {
        swordAlert(gt3.cfyqsbmsg);
    }
    // 网报特色提示
    if ($chk(gt3.wbchkMes)) {
        swordAlert(gt3.wbchkMes);
    }
    // 增值税消费税附征取到国税应税项时弹出提示信息
    if ($chk(gt3.gsMsg)) {
        swordAlert(gt3.gsMsg);
    }
}

/*******************************************************************************
 * 获取税费种信息（按钮触发）
 */
// function setSkxx2() {
// if (!$chk(gt3.skxxList) || gt3.skxxList.trs == 0) {
// swordAlert("当前纳税人申报属期内不存在有符合条件的税（费）种认定信息，请通过税（费）种认定功能进行查阅");
// return;
// }
//
// cshBz = "N";
// var skxxDatas = gt3.skxxList.trs;
// var zsxmArr = "";
// for (var i = 0; i < skxxDatas.length; i++) {
// var skxxData = skxxDatas[i].tds;
// // 重新获取核定信息
// var zsxmDm = skxxData.zsxmDm.value;// 征收项目代码
// var zspmDm = skxxData.zspmDm.value;// 征收品目代码
// var zszmDm = skxxData.zszmDm.value;// 征收子目代码
// var ysx = skxxData.ysx.value / 1;// 应税项
// var jcx = skxxData.jcx.value / 1;// 减除项
// var ssqq = skxxData.sfkssqq.value;// 当前税种税款所属期起
// var ssqz = skxxData.sfkssqz.value;// 当前税种税款所属期止
// var rdpzuuid = skxxData.rdpzuuid.value;// 认定凭证uuid
// var rdzsuuid = skxxData.rdzsuuid.value;// 税种主税认定凭证uuid
// var zfsbz = skxxData.rdzsuuid.value;// 主副税标志 0主税 1附税 2增值税附税 3消费税附征
// var jsfyj = skxxData.jsfyj.value / 1;// 计税依据
// var sskcs = skxxData.sskcs.value / 1;// 速算扣除数
// var sflhdwse = skxxData.sflhdwse.value / 1;// 税率或单位税额
// var yhsl = skxxData.yhsl.value / 1;// 优惠税率
// var yssdl = skxxData.yssdl.value / 1;// 应税所得率
// var bqjmsfe = skxxData.bqjmsfe.value / 1;// 减免税额
// var bqyjsfe = skxxData.bqyjsfe.value / 1;// 本期预缴税额
// var yhje = 0;// 优惠金额
// var jsbz = "";// 计税标志 1征收率 2应税所得率3所得率
// var slbz = "";// 税率取得方式 0税费种认定 1公共方法 2核定信息
// var hdsl = 0;// 核定税率
//
// // 征收项目、征收品目、税款所属期起、税款所属期止都不为空时，计算税款
// if ($chk(zsxmDm) && $chk(zspmDm) && $chk(ssqq) && $chk(ssqz)) {
// // 获取税率、应税所得率、速算扣除数、应税项等信息
// // 子目为空，获取定期定额核定信息
// if (!$chk(zszmDm)) {
// var hdxxArr = getHdxx(ssqq, ssqz, zsxmDm, zspmDm);
// hdsl = hdxxArr[0];// 核定税率
// var hdysx = hdxxArr[1];
// var hdse = hdxxArr[2];
// yssdl = hdxxArr[3];
// jsbz = hdxxArr[4];
// // 核定应税项大于0 更新应税项
// if (hdysx > 0) {
// ysx = hdysx;
// }
// // 判断税率获得标志 0税费种认定 1公共方法 2核定信息
// if (hdsl > 0) {
// // 如果取到核定税率优先取核定税率
// sflhdwse = hdsl;
// yhsl = hdsl;
// slbz = "2";
// }
// }
//
// // 个人所得税计税
// if (zsxmDm == "10106") {
// // 核定征收率
// if (jsbz == "1") {
// sflhdwse = hdsl;
// } else {
// // 应税所得率、所得率
// var gsArr = getGrsdsJs(zsxmDm, zspmDm, zszmDm, ssqq, ssqz,
// ysx, jcx, jsbz, yssdl);
// sflhdwse = gsArr[0];// 税率
// yhsl = gsArr[1]// 优惠税率
// yssdl = gsArr[2];// 应税所得率
// sskcs = gsArr[3];// 速算扣除数
// jsfyj = gsArr[4];// 计税依据
// jsbz = gsArr[5];// 计税标志
// }
//
// // 个人所得税 劳务报酬所得、稿酬所得 需要计算出减除项
// if (zspmDm == "101060400" || zspmDm == "101060500") {
// // 如果应税项小于等于4000 减除项设为800，若超过4000 减除项为应税项的20%
// if (ysx > 0 && ysx <= 4000) {
// jcx = 800;
// } else {
// jcx = (ysx).multiple(0.2).round(2);
// }
// }
// } else if (zsxmDm == '10109' || zsxmDm == '30203'
// || zsxmDm == '30127') {
// // 城市维护建设税、教育费附加、地方教育附加， 取主税的税额为应税项
// // 获取到国税附征的情况不取主税应税项，但营业税的附征还要取
// if (!$chk(gt3.gsMsg) || zfsbz == "1") {
// for (var j = 0; j < gt3.skxxList.trs.length; j++) {
// var zsxmDm2 = gt3.skxxList.trs[j].tds.zsxmDm.value;
// var sfkssqq2 = gt3.skxxList.trs[j].tds.sfkssqq.value;
// var sfkssqz2 = gt3.skxxList.trs[j].tds.sfkssqz.value;
// var rdpzuuid2 = gt3.skxxList.trs[j].tds.rdpzuuid.value;
// if (ssqq == sfkssqq2 && ssqq == sfkssqz2
// && rdzsuuid == rdpzuuid2) {
// ysx = gt3.skxxList.trs[j].tds.bqybtsfe.value / 1;
// break;
// }
// }
// }
// } else if (zsxmDm == '30126' || zsxmDm == '30446') {
// // 文化事业建设费或堤围费,取主税计税依据
// if (!$chk(gt3.gsMsg)) {
// for (var j = 0; j < gt3.skxxList.trs.length; j++) {
// var zsxmDm2 = gt3.skxxList.trs[j].tds.zsxmDm.value;
// var sfkssqq2 = gt3.skxxList.trs[j].tds.sfkssqq.value;
// var sfkssqz2 = gt3.skxxList.trs[j].tds.sfkssqz.value;
// var rdpzuuid2 = gt3.skxxList.trs[j].tds.rdpzuuid.value;
// if (ssqq == sfkssqq2 && ssqz == sfkssqz2
// && rdzsuuid == rdpzuuid) {
// ysx = gt3.skxxList.trs[j].tds.ysx.value / 1;
// break;
// }
// }
// }
// } else if (zsxmDm != "10111" && hdse > 0) {
// // 其他不是印花税，考虑核定税额的处理，反算出应税项
// ysx = hdse.divide(yhsl).round(2);
// }
// // 应税所得率为空或0，改为1
// if (!$chk(yssdl) || yssdl == 0) {
// yssdl = 1;
// }
// // 不是个人所得税，或者不计税标志是核定所得率，通过公式计算计税依据
// if (zsxmDm != "10106" || (jsbz != "2" && jsbz != "3")) {
// // 计税（费）依据=（应税项-减除项）*应税所得率
// jsfyj = (ysx).subtract(jcx).multiple(yssdl);
// }
// // 本期应纳税（费）额=计税（费）依据*税（费）率或单位税额-速算扣除数
// var bqynsfe = (jsfyj).multiple(sflhdwse).subtract(sskcs).round(2);
// // 个人所得税 为稿酬所得时，本期应纳税额为正常应纳税额的70%
// if (zsxmDm == "10106" && zspmDm == "101060500") {
// bqynsfe = bqynsfe.multiple(0.7).round(2);
// }
//
// // 优惠税率不为0，优惠税额=本期应纳税额*（税率-优惠税率）
// if (yhsl != 0) {
// yhje = jsfyj.multiple((sflhdwse).subtract(yhsl)).round(2);
// }
//
// // 特殊减免规则处理
// if (bqjmsfe == 0 && bqynsfe > 0) {// 减免税费额等于0的情况
// var arr = processTsjmxx(gt3.djxh, zsxmDm, zspmDm, ssqq, ssqz,
// jsfyj, ysx, bqynsfe, bqjmsfe, bqyjsfe, bqynsfe
// .subtract(bqjmsfe).subtract(bqyjsfe), sflhdwse);
// bqjmsfe = emptyToZ(arr[0]);
// }
//
// // 本期减免为0，减免税额为优惠金额
// if (bqjmsfe == 0) {
// bqjmsfe = yhje;
// }
//
// // 本期应补（退）税（费）额=本期应纳税（费）额-本期减免税（费）额-本期已缴税（费）额
// var bqybtsfe = (bqynsfe).subtract(bqjmsfe).subtract(bqyjsfe);
//
// gt3.skxxList.trs[i].tds.sskcs.value = sskcs;
// gt3.skxxList.trs[i].tds.jsfyj.value = jsfyj;
// gt3.skxxList.trs[i].tds.jsbz.value = jsbz;
// gt3.skxxList.trs[i].tds.ysx.value = ysx;
// gt3.skxxList.trs[i].tds.jcx.value = jcx;
// gt3.skxxList.trs[i].tds.sflhdwse.value = sflhdwse;
// gt3.skxxList.trs[i].tds.yhsl.value = yhsl;
// gt3.skxxList.trs[i].tds.yssdl.value = yssdl;
// gt3.skxxList.trs[i].tds.slbz.value = slbz;
// gt3.skxxList.trs[i].tds.bqynsfe.value = bqynsfe;
// gt3.skxxList.trs[i].tds.bqjmsfe.value = bqjmsfe;
// gt3.skxxList.trs[i].tds.bqyjsfe.value = bqyjsfe;
// gt3.skxxList.trs[i].tds.bqybtsfe.value = bqybtsfe;
// zsxmArr = zsxmArr + zsxmDm + ",";
// }
// }
// // 营业税、消费税、增值税免征、文化事业建设费（为附税时）、堤围费 起征点处理
// var qzdXmDm = new Array();
// qzdXmDm.push("10101", "10102", "10103", "30126", "30446");
// for (var i = 0; i < qzdXmDm.length; i++) {
// if (zsxmArr.indexOf(qzdXmDm[i]) >= 0) {
// var ysxjHj = getYsxHj(rowData)// 应税项合计
// }
// }
// // 堤围费在根据主税应税项变化后联动时，需要考虑堤围费起征点
// if ((bz != 4 && bz != 5 && (zsxmDm == "10103" || zsxmDm == "10101"
// || zsxmDm == "10102" || zsxmDm == "30126" || zsxmDm == "30446"))
// || (bz == 4 && zsxmDm == "30446")) {
// var arr = new Array();
// var ysxjHj = getYsxHj(rowData)// 应税项合计
// // 判断页面起征点信息是否有该属期数据
// if (checkQzdxx(rowData)) {
// arr = getMzed(rowData);// 有的话直接取得免征额度
// } else {
// // 没有的话，重新走后台查询该属期起征点信息
// arr = queryQzdxx(rowData, row);
// }
// var ysbje = arr[0];
// var mzed = arr[1];
// // 符合免征条件
// if (ysxjHj / 1 <= mzed / 1) {
// doYysOrZzsMz(rowData);// 免征处理
// return;
// } else {
// if (bz != 3 && bz != 5) {
// // 不符合免征条件 减免税额为0
// doYysOrZzsNoMz(rowData);
// if (ysx / 1 > 0 && ysbje > 0 && mzed > 0 && bz != 1) {
// swordAlert(row.getCell("zsxmDm").title
// + "首次达到起征点，完成本次申报后，通过申报错误更正功能追缴同期享受减免的税款");
// }
// return;
// }
// }
// }
//
// // 营业税时，变更其附加税的应税项
// if (zsxmDm == "10101" || zsxmDm == "10102" || zsxmDm == "10103") {
// var allRows = grid.dataDiv().getChildren();// 所有行
// var allData = grid.getAllNoDeleteGridData().trs;// 所有行数据
// var length = allData.length;// 数据行数
// for (var i = 0; i < length; i++) {
// var rowData2 = allData[i];
// var sybh2 = rowData2.getValue("sybh1");// 税源编号
// var zsxmDm2 = rowData2.getValue("zsxmDm");
// var rdzsuuid = rowData2.getValue("rdzsuuid");
// var sfkssqq2 = rowData2.getValue("sfkssqq");
// var sfkssqz2 = rowData2.getValue("sfkssqz");
// // 城建税、教育税、教育费附加 且税源编号相同
// if ($chk(sybh)) { // 不为空
// if (sybh == sybh2
// && sfkssqq == sfkssqq2
// && sfkssqz == sfkssqz2
// && (zsxmDm2 == '10109' || zsxmDm2 == '30203' || zsxmDm2 == '30127')) {
// var ysxCell = allRows[i].getElement('[name=ysx]');// 应税项
// grid.updateCell(ysxCell, emptyToZ(bqybtsfe));// 更新应税项为营业税税额
// calTable(grid, allRows[i], rowData2, bz);// 重新计算附税所在行税额
// }
// } else {// 为空
// if ($chk(rdzsuuid)) {
// if ((zsxmDm2 == '10109' || zsxmDm2 == '30203' || zsxmDm2 == '30127')
// && rdpzuuid == rdzsuuid
// && sfkssqq == sfkssqq2
// && sfkssqz == sfkssqz2) {
// var ysxCell = allRows[i].getElement('[name=ysx]');// 应税项
// grid.updateCell(ysxCell, emptyToZ(bqybtsfe));// 更新应税项为营业税税额
// calTable(grid, allRows[i], rowData2, bz);// 重新计算附税所在行税额
// }
// }
// }
// }
// }
// $w("skxxGrid").initData(gt3.skxxList);
// if ($chk(gt3.cfyqsbmsg)) {
// swordAlert(gt3.cfyqsbmsg);
// }
// // 增值税消费税附征取到国税应税项时弹出提示信息
// if ($chk(gt3.gsMsg)) {
// swordAlert(gt3.gsMsg);
// }
// }
/*******************************************************************************
 * 获取核定税率或税率（单行计算）
 */
function getHdslHSlxx(row, rowData) {
    var skxxGrid = $w("skxxGrid");
    // 重新获取核定信息
    var zsxmDm = rowData.getValue("zsxmDm");
    var zspmDm = rowData.getValue("zspmDm");
    var zszmDm = rowData.getValue("zszmDm");
    var ysx = rowData.getValue("ysx") / 1;
    var jcx = rowData.getValue("jcx") / 1;
    var ssqq = rowData.getValue("sfkssqq");// 当前税种税款所属期起
    var ssqz = rowData.getValue("sfkssqz");// 当前税种税款所属期止
    var sybz = rowData.getValue("sybzDm1");// 税源标志
    var rdpzuuid = rowData.getValue("rdpzuuid");// 认定凭证uuid
    var sybh = rowData.getValue("sybh1");// 认定凭证uuid
    var ssjmxzDm = "";
    var sl = 0;// 税率
    var yhsl = 0;// 优惠税率
    // 大连修改，八月份之后可覆盖begin
    if ($chk(gt3.skselbz) && gt3.skselbz == 'N') {
        yhsl = rowData.tds.yhsl.value;
    } else {
        yhsl = 0;// 优惠税率
    }
    // 大连修改，八月份之后可覆盖end
    var yssdl = 1;// 应税所得率 默认1
    var jsbz = "";// 计税标志 1征收率 2应税所得率3所得率
    var slbz = "";// 税率取得方式 0税费种认定 1公共方法 2核定信息
    var dqjsFlag = "true";// //个人所得税 是否当期计税
    // 征收项目、征收品目、税款所属期起、税款所属期止都不能为空
    if ($chk(zsxmDm) && $chk(zspmDm) && $chk(ssqq) && $chk(ssqz)) {
        // 土地增值税
        if (zsxmDm == "10113") {
            var tdslArr = getTdzzsSl(ysx, jcx, zsxmDm, zspmDm, zszmDm, ssqq,
					ssqz, sybh);
            sl = tdslArr[0];
            yhsl = tdslArr[1];
            yssdl = tdslArr[2];
            var sskcs = tdslArr[3];
            skxxGrid.updateCell(row.getCell("sskcs"), emptyToZ(sskcs));
        } else {
            // 获取定期定额核定信息
            var hdxxArr = getHdxx(ssqq, ssqz, zsxmDm, zspmDm, zszmDm);
            sl = hdxxArr[0];// 核定税率
            var hdysx = hdxxArr[1];
            var hdse = hdxxArr[2];
            yssdl = hdxxArr[3];
            jsbz = hdxxArr[4];
            // 核定应税项不为空 更新应税项
            if ($chk(hdysx) && hdysx / 1 > 0) {
                ysx = hdysx;
                skxxGrid.updateCell(row.getCell("ysx"), emptyToZ(ysx));
            }
            // 判断税率获得标志 0税费种认定 1公共方法 2核定信息
            if (sl > 0) {
                slbz = "2";
            }
        }
        // 个人所得税、特殊处理
        if (zsxmDm == "10106") {
            // 核定征收率
            if (jsbz == "1" || jsbz == "5") {
                yhsl = sl;
            } else {// 应税所得率、所得率
                var gsArr = getGrsdsJs(zsxmDm, zspmDm, zszmDm, ssqq, ssqz, ysx,
						jcx, jsbz, yssdl);
                sl = gsArr[0];// 税率
                yhsl = gsArr[1];// 优惠税率
                yssdl = gsArr[2];// 应税所得率
                var sskcs = gsArr[3];// 速算扣除数
                var jsyj = gsArr[4];// 计税依据
                jsbz = gsArr[5];// 计税标志
                var ysbse = gsArr[6];// 已申报税额
                var ynse = gsArr[7];// 应纳税额
                if ($chk(gsArr[8])) {
                    dqjsFlag = gsArr[8];// 是否当期计税
                }
                // 按年累计计税
                if (dqjsFlag == "false") {
                    skxxGrid.updateCell(row.getCell("ysbse"), ysbse);
                    skxxGrid.updateCell(row.getCell("bqyjsfe"), ysbse);
                    skxxGrid.updateCell(row.getCell("bqynsfe"), emptyToZ(ynse));
                }
                var sskcsCell = row.getElement('[name=sskcs]');
                skxxGrid.updateCell(sskcsCell, emptyToZ(sskcs));
                skxxGrid.updateCell(row.getCell("jsfyj"), jsyj);
                skxxGrid.updateCell(row.getCell("jsbz"), jsbz);
                skxxGrid.updateCell(row.getCell("dqjsFlag"), dqjsFlag);
            }
        } else {
            // 通用申报
            if (!$chk(sybz)) {
                // 核定税率未取到，要再通过其他方法取税率
                // 增值税/印花税+是税费种认定的品目，不在通过公共方法获取SL
                if (zsxmDm == "10101" || zsxmDm == "10111") {
                    for (var j = 0; j < gt3.skxxList.trs.length; j++) {
                        var sfzzsxmDm = gt3.skxxList.trs[j].tds.zsxmDm.value;
                        var sfzZspmDm = gt3.skxxList.trs[j].tds.zspmDm.value;
                        if (sfzzsxmDm == "10101" && zspmDm == sfzZspmDm) {
                            sl = gt3.skxxList.trs[j].tds.sflhdwse.value;
                        }
                        // 印花税
                        if (sfzzsxmDm == "10111" && zspmDm == sfzZspmDm) {
                            sl = gt3.skxxList.trs[j].tds.sflhdwse.value;
                        }
                    }
                }
                if (sl == 0) {

                    // // 认定凭证uuid不为空，取税费种认定税率
                    // if ($chk(rdpzuuid)) {
                    // sl = rowData.getValue("sflhdwse");
                    // } else {
                    // 其他通过公共方法取默认税率
                    var slArr = getSl(zsxmDm, zspmDm, zszmDm, ssqq, ssqz);
                    sl = slArr[0];// 税率
                    yhsl = slArr[1];// 优惠税率
                    yssdl = slArr[2];// 应税所得率
                    ssjmxzDm = slArr[3];// 应税所得率
                    slbz = "1";
                    // }
                }
                // 2015-06-30屏蔽。当优惠税率为0时，照常参加计算
                // if (yhsl == 0) {
                // yhsl = sl;
                // }
                // 不是印花税，考虑核定税额的处理，反算出应税项
                if (zsxmDm != "10111" && hdse > 0) {
                    ysx = hdse.divide(yhsl).round(4);
                }
                var ysxCell = row.getElement('[name=ysx]');
                skxxGrid.updateCell(ysxCell, emptyToZ(ysx));
            } else {
                // 项目申报
                if (sybz == "2") {// 不动产项目
                    // 税率为空或零，通过公共方法获取税率
                    if (!$chk(sl) || sl == 0) {
                        var slArr = getSl(zsxmDm, zspmDm, zszmDm, ssqq, ssqz);
                        sl = slArr[0];// 税率
                        yhsl = slArr[1];// 优惠税率
                        yssdl = slArr[2];// 应税所得率
                        slbz = "1";
                    } else if ($chk(jsbz)) {
                        // 获取到核定征收率，征收子目不让选择
                        row.getCell("zszmDm").disable = "true";
                    }
                } else if (sybz == "3") {// 工程项目
                    if (sl == 0) {
                        var slArr = getSl(zsxmDm, zspmDm, zszmDm, ssqq, ssqz);
                        sl = slArr[0];// 税率
                        yhsl = slArr[1];// 优惠税率
                        yssdl = slArr[2];// 应税所得率
                        slbz = "1";
                    }
                } else {
                    sl = rowData.getValue("sflhdwse");// 税率
                    yhsl = rowData.getValue("yhsl");// 优惠税率
                    yssdl = rowData.getValue("yssdl");// 应税所得率
                }
            }
        }
    }
    // 网报特殊逻辑
    if ($chk(gt3.skselbz) && gt3.skselbz == 'N') {
        var yssdl = rowData.tds.yssdl.value;
    }
    if (!$chk(yssdl) || yssdl / 1 == 0) {
        yssdl = 1;
    }
    // 更新页面数据
    var slCell = row.getElement('[name=sflhdwse]');
    var yhslCell = row.getElement('[name=yhsl]');
    var yssdlCell = row.getElement('[name=yssdl]');
    if ($chk(ssjmxzDm)) {
        if (ssjmxzDm == "null") {
            ssjmxzDm = "";
        }
    }
    // if($chk(ysx)){
    // var ssjmxzDmCell = row.getElement('[name=ssjmxzDm]');
    // skxxGrid.updateCell(ssjmxzDmCell, ssjmxzDm);
    // }
    skxxGrid.updateCell(slCell, sl);
    skxxGrid.updateCell(yhslCell, yhsl);
    skxxGrid.updateCell(yssdlCell, yssdl);
    skxxGrid.updateCell(row.getCell("slbz"), slbz);
    if ($chk(ssjmxzDm) && gt3.scenceCs != "cwgzbz") {
        skxxGrid.updateCell(row.getCell("ssjmxzDm"), ssjmxzDm);
    }
}

/*******************************************************************************
 * 检查是否重复申报和逾期申报
 * 
 * @param {}
 *            skxxGridData
 * @return {} msg 返回信息
 */
function checkCfYqSb(skxxGridData) {
    var msg = "";
    var subBtn = new SwordSubmit();
    subBtn.pushData("djxh", gt3.djxh);
    subBtn.pushData("skssqq", gt3.skssqq);
    subBtn.pushData("skssqz", gt3.skssqz);
    if ($chk($w('nsrxxForm').getValue("sbsxDm1"))) {
        subBtn.pushData("sbsxDm1", $w('nsrxxForm').getValue("sbsxDm1").code);
    } else {
        subBtn.pushData("sbsxDm1", "11");
    }
    subBtn.pushData(skxxGridData);
    subBtn.setCtrl(gt3.ctrl + "_checkCfYqSb");
    subBtn.setOptions({
        "onSuccess": function (req, res) {
            msg = res.getAttr("msg");
            if ($chk(msg)) {
                swordAlert(msg);
            }
        }
    });
    subBtn.submit();
}

/*******************************************************************************
 * 获取某项目下征收品目数量
 * 
 * @param {}
 *            zspmData 征收品目下拉集合
 * @param {}
 *            zsxmDm 征收项目代码
 * @return {} num 征收品目数量
 */
function getZspmCount(zspmData, zsxmDm) {
    var num = 0;
    for (var i = 0; i < zspmData.length; i++) {
        if (zsxmDm == zspmData[i].pcode) {
            num++;
        }
    }
    return num;
}

/*******************************************************************************
 * 获取一个品目下的子目数量
 * 
 * @param {}
 *            zszmData 征收子目下拉集合
 * @param {}
 *            zspmDm 征收品目代码
 * @return {}
 */
function getZszmCount(zszmData, zspmDm) {
    var num = 0;
    for (var i = 0; i < zszmData.length; i++) {
        if (zspmDm == zszmData[i].pcode) {
            num++;
        }
    }
    return num;
}

/*******************************************************************************
 * 获取一个项目下的子目数量
 * 
 * @param {}
 *            zszmData 征收子目下拉集合
 * @param {}
 *            zsxmDm 征收项目代码
 * @return {}
 */
function getZszmCountByZsxm(zszmData, zsxmDm) {
    var num = 0;
    for (var i = 0; i < zszmData.length; i++) {
        if (zsxmDm == zszmData[i].zsxmDm) {
            num++;
        }
    }
    return num;
}

/*******************************************************************************
 * 计算本期应纳 应退(补)税额,转让方
 * 
 * @param {}
 *            grid 表格对象
 * @param {}
 *            row 行元素
 * @param {}
 *            rowData 行数据
 * @param {}
 *            bz 标志 1 后台查询后计算 2 页面修改数据后计算 3营业税不免征计算进入 4应税项变化附税联动计算 5修改减免税额后计算
 *            6修改预缴金额后计算 7修改应税项后计税 初始化进入标志 1 错误更正初始化进入
 */
function calTable(grid, row, rowData, bz, cshbz) {
    var zsxmDm = rowData.getValue("zsxmDm");// 征收项目代码
    var zspmDm = rowData.getValue("zspmDm");// 征收品目代码
    var zszmDm = rowData.getValue("zszmDm");// 征收子目代码

    var rdpzuuid = rowData.getValue("rdpzuuid");// 税种认定凭证uuid
    var sfkssqq = rowData.getValue("sfkssqq");// 税款所属期起
    var sfkssqz = rowData.getValue("sfkssqz");// 税款所属期止
    var sybh = rowData.getValue("sybh1");// 税源编号
    var sybz = rowData.getValue("sybzDm1");// 税源标志
    var zfsbz = rowData.getValue("zfsbz");// 税源标志
    var jsbz = rowData.getValue("jsbz");// 计税标志
    // var ssjmxzDm2 =row.getCell('ssjmxzDm2').get("realvalue");//
    // rowData.getValue("ssjmxzDm2");//
    var ssjmxzDm = row.getCell('ssjmxzDm').get("realvalue");// rowData.getValue("ssjmxzDm");//
    var ysx = row.getCell('ysx').get("realvalue") / 1;// 应税项空转为0.00
    var jcx = row.getCell('jcx').get("realvalue") / 1;// 减除项
    var yssdl = row.getCell('yssdl').get("realvalue") / 1;// 应税所得率
    var sflhdwse = row.getCell('sflhdwse').get("realvalue");// 税率或单位税额
    var sskcs = row.getCell('sskcs').get("realvalue") / 1;// 速算扣除数
    var qs = row.getCell("qs").get("realvalue") / 1;// 期数 房屋土地申报时用
    var nzjsr = row.getCell("nzjsr").get("realvalue") / 1;// 年租金收入 出租房屋用
    var jcl = row.getCell("jcl").get("realvalue") / 1;// 减除率 房屋用
    var yhsl = row.getCell("yhsl").get("realvalue") / 1;// 优惠税率
    // 后台税种传入首次计算
    // 并且未带出国税附征或者为营业税附征税种进入
    if (bz == 1
			&& ((!$chk(gt3.gsMsg) && (zfsbz == "2" || zfsbz == "3") && ysx == 0) || zfsbz == "1")) {
        if (parseFjsxx(zsxmDm, zspmDm) == "0") {// 0代表随主税的计税依据随征
            ysx = getZsYsx(rowData);
        } else if (parseFjsxx(zsxmDm, zspmDm) == "1") {// 1代表随主税的税额随征
            ysx = getZsSe(rowData);
        }
        // 如果是城建税、教育费附加、地方教育附加， 取主税的税额为应税项
        // if (zsxmDm == '10109' || zsxmDm == '30203' || zsxmDm == '30127' || zsxmDm ==
        // '30216') {
        // ysx = getZsSe(rowData);
        // } else if (zsxmDm == '30126' || zsxmDm == "30217" || zsxmDm == '30446') {
        // // 文化事业建设费或堤围费,取主税计税依据
        // ysx = getZsYsx(rowData);
        // }
    }
    // 房产税从租计征，计算应税项
    if (bz == 2 && sybz == 4 && nzjsr > 0) {
        ysx = nzjsr.divide(12).multiple(qs).round(4);
    }
    grid.updateCell(row.getCell("ysx"), emptyToZ(ysx));
    if (yssdl == 0) {
        yssdl = 1;
    }
    grid.updateCell(row.getCell("yssdl"), yssdl);
    // 个人所得税，核定所得率，计税依据通过后台计算返回，不通过页面公式计算
    if (zsxmDm == "10106" && (jsbz == "2" || jsbz == "3")) {
        var jsfyj = isPositive(row.getCell("jsfyj").realvalue / 1);
    } else {
        // 计税（费）依据=（应税项-减除项）*应税所得率
        var jsfyj = isPositive((ysx).subtract(jcx).multiple(yssdl).round(2))
				/ 1;
    }
    grid.updateCell(row.getCell("jsfyj"), emptyToZ(jsfyj));// 更新计税依据
    grid.updateCell(row.getCell("sskcs"), emptyToZ(sskcs));// 更新速算扣除数 空转0.00
    var bqynsfe = 0;
    // 税源标志为土地，本期税额=计税依据*税率/期数-速算扣除数
    if (sybz == 1) {
        bqynsfe = (jsfyj).multiple(sflhdwse).divide(12).multiple(qs)
				.subtract(sskcs).round(2);
    } else if (sybz == 4) {// 房屋
        // 减除率不为空，从价计征
        if (jcl > 0) {
            // 本期应纳税额=（计税依据*（1-减除率）*年利率）/12*期数
            bqynsfe = jsfyj.multiple((1).subtract(jcl)).multiple(sflhdwse)
					.divide(12).multiple(qs).round(2);
        } else {
            // 从租计征
            bqynsfe = jsfyj.multiple(sflhdwse).round(2);
        }
    } else if (zsxmDm == "10106"
		&& row.getCell("dqjsFlag").realvalue == "false") {
        // 个人所得税按年申报，应纳税额取后台计算结果
        bqynsfe = row.getCell("bqynsfe").realvalue / 1;
    } else {
        // 本期应纳税（费）额=计税（费）依据*税（费）率或单位税额-速算扣除数
        bqynsfe = (jsfyj).multiple(sflhdwse).subtract(sskcs).round(2);
        // 通用申报，个税 稿酬所得时，本期应纳税额为正常应纳税额的70%
        if (!$chk(sybz) && zsxmDm == "10106" && zspmDm == "101060500") {
            bqynsfe = bqynsfe.multiple(0.7).round(2);
        }
    }
    bqynsfe = isPositive(bqynsfe) / 1;
    // 2016-09-20 duwei 印花税四色五入到角
    bqynsfe = emptyToZ(bqynsfe.round(2));
    grid.updateCell(row.getCell("bqynsfe"), bqynsfe);
    // 营业税、消费税、增值税免征、文化事业建设费（为附税时）、堤围费 起征点处理
    // bz=5：修改减免税额时，不处理，否则会导致录入的有效减免税额被清零
    // 堤围费在根据主税应税项变化后联动时，需要考虑堤围费起征点
    if ((bz != 4 && bz != 5 && (zsxmDm == "10103" || zsxmDm == "10101"
			|| zsxmDm == "10102" || zsxmDm == "30126" || zsxmDm == "30217" || zsxmDm == "30446"
			|| zsxmDm == "30138" || zsxmDm == "30221" || zsxmDm == '10106'))
			|| (bz == 4 && (zsxmDm == "30126" || zsxmDm == "30217" || zsxmDm == "30446" || zsxmDm == "30138" || zsxmDm == "30221"))) {
        var arr = new Array();
        var ysxjHj = getYsxHj(rowData)// 应税项合计
        // 判断页面起征点信息是否有该属期数据
        if (checkQzdxx(rowData)) {
            arr = getMzed(rowData);// 有的话直接取得免征额度
        } else {
            // 没有的话，重新走后台查询该属期起征点信息
            arr = queryQzdxx(rowData, row);
        }
        var ysbje = arr[0];
        var mzed = arr[1];
        var sfxswdqzdjm = arr[2];
        var mesg = arr[3];
        var ssqqforqzd = rowData.getValue("sfkssqq");
        var ssqzforqzd = rowData.getValue("sfkssqz");
        var wqzd10W = getMzed10w(ssqqforqzd, ssqzforqzd, "30216");
        // 符合免征条件
        if (ysxjHj <= mzed) {
            var allRows = grid.dataDiv().getChildren();// 所有行
            var allData = grid.getAllNoDeleteGridData().trs;// 所有行数据
            var length = allData.length;// 数据行数
            for (var i = 0; i < length; i++) {
                var rdzsuuid = allData[i].getValue("rdzsuuid");
                var sfkssqq2 = allData[i].getValue("sfkssqq");
                var sfkssqz2 = allData[i].getValue("sfkssqz");
                if ($chk(rdpzuuid) && sfkssqq == sfkssqq2 && zsxmDm != "30446"
						&& sfkssqz == sfkssqz2 && rdpzuuid == rdzsuuid) {
                    var bqjmsfecell = allRows[i].getCell("bqjmsfe");// 应税项
                    var bqybtsfecell = allRows[i].getCell("bqybtsfe");// 应税项
                    var ssjmxzDmcell = allRows[i].getCell("ssjmxzDm");// 应税项
                    grid.updateCell(ssjmxzDmcell, "");
                    grid.updateCell(bqjmsfecell, 0);
                    grid.updateCell(bqybtsfecell, 0);
                }
            }

            doYysOrZzsMz(rowData, bz);// 免征处理
            if ($chk(zspmDm) && ("101016604" == zspmDm || "101016606" == zspmDm || "101060801" == zspmDm)) {
                dealWithGrczfw(rowData, row);
                return;
            }
            return;
        } else if (mzed < ysxjHj && ysxjHj / 1 + ysbje / 1 <= wqzd10W) {

            if (bz != 3 && bz != 5) {
                // 超过起征点则清空减免性质
                grid.updateCell(row.getCell("ssjmxzDm"), "");
                // 不符合免征条件 减免税额为0
                doYysOrZzsNoMz(rowData, cshbz);
                if (ysx / 1 > 0 && ysbje > 0 && mzed > 0 && bz != 1 && bz != 6 && sfxswdqzdjm == "Y") {
                    swordAlert(row.getCell("zsxmDm").title
							+ "首次达到起征点，完成本次申报后，通过申报错误更正功能追缴同期享受减免的税款,需追缴的税款信息为:" + mesg);
                }
                // TODO 添加减免10w
                var allRows = grid.dataDiv().getChildren();// 所有行
                var allData = grid.getAllNoDeleteGridData().trs;// 所有行数据
                var length = allData.length;// 数据行数
                for (var i = 0; i < length; i++) {
                    var rdzsuuid = allData[i].getValue("rdzsuuid");
                    var sfkssqq2 = allData[i].getValue("sfkssqq");
                    var sfkssqz2 = allData[i].getValue("sfkssqz");
                    var bqynsfe = allData[i].getValue("bqynsfe");
                    var bqyjsfe = allData[i].getValue("bqyjsfe");
                    var bqybtsfe = isPositive((bqynsfe).subtract(bqyjsfe));
                    var zsxmDm = allData[i].getValue("zsxmDm");
                    var fsqzdxx = getMzed10w(sfkssqq2, sfkssqz2, zsxmDm);
                    if ($chk(rdpzuuid) && sfkssqq == sfkssqq2 && zsxmDm != "30446" && fsqzdxx >= (ysxjHj / 1 + ysbje / 1)
							&& sfkssqz == sfkssqz2 && rdpzuuid == rdzsuuid) {
                        var bqjmsfecell = allRows[i].getCell("bqjmsfe");// 应税项
                        var bqybtsfecell = allRows[i].getCell("bqybtsfe");// 应税项
                        if (bqybtsfe / 1 > 0) {
                            toSetYysZzsJmxz(1, allRows[i], zsxmDm, rowData);
                        }
                        grid.updateCell(bqjmsfecell, bqybtsfe);
                        grid.updateCell(bqybtsfecell, 0);

                    }
                }
                if ($chk(zspmDm) && ("101016604" == zspmDm || "101016606" == zspmDm || "101060801" == zspmDm)) {
                    dealWithGrczfw(rowData, row);
                    return;
                }
                return;
            }
        } else {
            if (bz != 3 && bz != 5) {

                var allRows = grid.dataDiv().getChildren();// 所有行
                var allData = grid.getAllNoDeleteGridData().trs;// 所有行数据
                var length = allData.length;// 数据行数
                for (var i = 0; i < length; i++) {
                    var rdzsuuid = allData[i].getValue("rdzsuuid");
                    var sfkssqq2 = allData[i].getValue("sfkssqq");
                    var sfkssqz2 = allData[i].getValue("sfkssqz");
                    if ($chk(rdpzuuid) && sfkssqq == sfkssqq2 && zsxmDm != "30446"
							&& sfkssqz == sfkssqz2 && rdpzuuid == rdzsuuid) {
                        var bqjmsfecell = allRows[i].getCell("bqjmsfe");// 应税项
                        var bqybtsfecell = allRows[i].getCell("bqybtsfe");// 应税项
                        var ssjmxzDmcell = allRows[i].getCell("ssjmxzDm");// 应税项
                        grid.updateCell(ssjmxzDmcell, "");
                        grid.updateCell(bqjmsfecell, 0);
                        grid.updateCell(bqybtsfecell, 0);
                    }
                }

                // 超过起征点则清空减免性质
                grid.updateCell(row.getCell("ssjmxzDm"), "");
                // 不符合免征条件 减免税额为0
                doYysOrZzsNoMz(rowData, cshbz);
                if (ysx / 1 > 0 && ysbje > 0 && mzed > 0 && bz != 1 && bz != 6 && sfxswdqzdjm == "Y") {
                    swordAlert(row.getCell("zsxmDm").title
							+ "首次达到起征点，完成本次申报后，通过申报错误更正功能追缴同期享受减免的税款,需追缴的税款信息为:" + mesg);
                }
                if ($chk(zspmDm) && ("101016604" == zspmDm || "101016606" == zspmDm || "101060801" == zspmDm)) {
                    dealWithGrczfw(rowData, row);
                    return;
                }
                return;
            }
        }
    }

    // 优惠税率处理
    var yhje = 0;// 优惠金额
    // 优惠税率不为0，优惠税额=本期应纳税额*（税率-优惠税率）
    if (yhsl != 0) {
        yhje = isPositive(jsfyj.multiple((sflhdwse).subtract(yhsl)).round(2));
    } else {
        if ($chk(zszmDm) && zszmDm != "null" && zszmDm != "NULL" || $chk(ssjmxzDm)) {
            yhje = isPositive(jsfyj.multiple((sflhdwse).subtract(yhsl)).round(2));;
        }
    }
    grid.updateCell(row.getCell("yhje"), yhje);// 更新优惠税额
    var bqjmsfe = row.getCell("bqjmsfe").get("realvalue") / 1;// 减免税额
    // 本期减免为0，减免税额为优惠金额
    if (bz != "1" && bz != "5" && bz != "3") {// 直接修改减免税额,不再对减免税额赋值
        grid.updateCell(row.getCell("bqjmsfe"), emptyToZ(yhje));
        bqjmsfe = yhje;
    }
    // if (bqjmsfe == 0 || yhje>0 && bqjmsfe<yhje) {
    // }

    // 本期应补（退）税（费）额=本期应纳税（费）额-本期减免税（费）额-本期已缴税（费）额
    var bqyjsfe = row.getCell("bqyjsfe").get("realvalue") / 1;// 本期预缴税额

    // 特殊减免规则处理
    if (bqjmsfe == 0 && bqynsfe > 0) {// 减免税费额等于0的情况
        var arr = processTsjmxx(gt3.djxh, zsxmDm, zspmDm, sfkssqq, sfkssqz,
				jsfyj, ysx, bqynsfe, bqjmsfe, bqyjsfe, (bqynsfe)
						.subtract(bqjmsfe).subtract(bqyjsfe), sflhdwse);
        bqjmsfe = arr[0] / 1;
        grid.updateCell(row.getCell("bqjmsfe"), emptyToZ(bqjmsfe));// 重新更新减免税额
    }
    grid.updateCell(row.getCell("bqyjsfe"), emptyToZ(bqyjsfe));// 更新预缴税额
    if ((bqynsfe).subtract(bqjmsfe).subtract(bqyjsfe) < 0) {
        bqjmsfe = bqynsfe.subtract(bqyjsfe);
        grid.updateCell(row.getCell("bqjmsfe"), emptyToZ(bqjmsfe));// 重新更新减免税额
    }

    var bqybtsfe = isPositive((bqynsfe).subtract(bqjmsfe).subtract(bqyjsfe));// 本期应补退税额
    var fsYbtsfeJsyj = isPositive((bqynsfe).subtract(bqjmsfe));
    if (zsxmDm == "10111") {
        grid.updateCell(row.getCell("bqybtsfe"), jsyhsje(zspmDm, (bqybtsfe / 1)));// 更新本期应补退税额
    } else {
        grid.updateCell(row.getCell("bqybtsfe"), emptyToZ(bqybtsfe));// 更新本期应补退税额
    }

    // 增值税、消费税、营业税时，变更其附加税的应税项
    if (zsxmDm == "10101" || zsxmDm == "10102" || zsxmDm == "10103") {
        var allRows = grid.dataDiv().getChildren();// 所有行
        var allData = grid.getAllNoDeleteGridData().trs;// 所有行数据
        var length = allData.length;// 数据行数
        for (var i = 0; i < length; i++) {
            var rowData2 = allData[i];
            var sybh2 = rowData2.getValue("sybh1");// 税源编号
            var zsxmDm2 = rowData2.getValue("zsxmDm");
            var zspmDm2 = rowData2.getValue("zspmDm");
            var rdzsuuid = rowData2.getValue("rdzsuuid");
            var sfkssqq2 = rowData2.getValue("sfkssqq");
            var sfkssqz2 = rowData2.getValue("sfkssqz");
            var ysxCell = allRows[i].getCell("ysx");// 应税项
            // 项目申报
            if ($chk(sybh) && sybh == sybh2 && sfkssqq == sfkssqq2
					&& sfkssqz == sfkssqz2) {
                // 城建税、教育税、教育费附加，变更应税项为主税税额
                // if (zsxmDm2 == '10109' || zsxmDm2 == '30203'
                // || zsxmDm2 == '30127' || zsxmDm2 == '30216') {
                if (parseFjsxx(zsxmDm2, zspmDm2) == "1") {
                    // 初始化进入、且附税应税项不为0时，不计算
                    if ($chk(cshbz) && cshbz == "1" && ysx / 1 > 0) {

                    } else {
                        grid.updateCell(ysxCell, emptyToZ(fsYbtsfeJsyj));// 更新应税项为主税税额
                        calTable(grid, allRows[i], rowData2, 4);// 重新计算附税所在行税额
                    }

                } else if (parseFjsxx(zsxmDm2, zspmDm2) == "0") {
                    // } else if (zsxmDm2 == "30446" || zsxmDm2 == "30126" || zsxmDm2 == "30217"
                    // || zsxmDm2 == "30138" || zsxmDm2 == "30221") {
                    if ($chk(cshbz) && cshbz == "1" && ysx / 1 > 0) {

                    } else {
                        // 文化事业建设费、堤围费、地方水利建设基金
                        grid.updateCell(ysxCell, emptyToZ(ysx));// 为主税应税项
                        calTable(grid, allRows[i], rowData2, 4);
                    }
                }
            } else if ($chk(rdpzuuid) && sfkssqq == sfkssqq2
					&& sfkssqz == sfkssqz2) {// 通用申报
                // 城建税、教育费附加、地方教育附加
                if ((parseFjsxx(zsxmDm2, zspmDm2) == "1")
						&& rdpzuuid == rdzsuuid) {
                    // if ((zsxmDm2 == '10109' || zsxmDm2 == '30203' || zsxmDm2 == '30127' ||
                    // zsxmDm2 == '30216')
                    // && rdpzuuid == rdzsuuid) {
                    // 初始化进入、且附税应税项不为0时，不计算
                    if ($chk(cshbz) && cshbz == "1" && ysx / 1 > 0) {

                    } else {
                        grid.updateCell(ysxCell, emptyToZ(fsYbtsfeJsyj));// 更新应税项为营业税税额
                        calTable(grid, allRows[i], rowData2, 4);// 重新计算附税所在行税额
                    }

                } else if (((parseFjsxx(zsxmDm2, zspmDm2) == "0") && rdpzuuid == rdzsuuid)
						|| ((zspmDm.substring(0, 7) == "1010306" && (zspmDm2 == "301260100" || zspmDm2 == "302170100")) || ((zspmDm2 == "301260200" || zspmDm2 == "302170200") && zspmDm == "101030708"))) {
                    // } else if (((zsxmDm2 == "30446" || zsxmDm2 == "30126" || zsxmDm2 == "30217"
                    // || zsxmDm2 == "30138" || zsxmDm2 == "30221") && rdpzuuid == rdzsuuid)
                    // || ((zspmDm.substring(0, 7) == "1010306" && (zspmDm2 == "301260100" ||
                    // zspmDm2 == "302170100")) || ((zspmDm2 == "301260200" || zspmDm2 ==
                    // "302170200") && zspmDm == "101030708"))) {
                    if ($chk(cshbz) && cshbz == "1" && ysx / 1 > 0) {

                    } else {
                        // 堤围费、文化事业建设费、地方水利建设基金
                        // 需要对营业税（其他娱乐业、广告业）时，同时更新附税文化事业建设费的联动信息（娱乐业文化事业建设费，广告业文化事业建设费）
                        grid.updateCell(ysxCell, emptyToZ(ysx));// 为主税应税项
                        calTable(grid, allRows[i], rowData2, 4);
                    }
                }
            }
        }
    }
    if ($chk(zspmDm) && bz != 5 && ("101016604" == zspmDm || "101016606" == zspmDm || "101060801" == zspmDm)) {
        dealWithGrczfw(rowData, row);
        return;
    }
}

function changeYsx(realvalue, showvalue, rowData, el, row, oldvalue) {
    // 如果值未改变，不计算
    if (realvalue == oldvalue) {
        return;
    }
    // 网报特殊逻辑
    if ($chk(gt3.skselbz) && gt3.skselbz == "N") {
        var zszmDm = rowData.tds.zszmDm.value;
        var ysx = rowData.tds.ysx.value;
        if (zszmDm == '610101' || zszmDm == '880101') {
            swordAlert("按月纳税的月销售额或营业额不超过10万元（按季度纳税的季度销售额或营业额不超过30万元）的纳税人，可免征教育费附加和地方教育附加，请选择对应的“减免性质”。");
        }
        if (zszmDm == '610301' || zszmDm == '880301') {
            swordAlert("按月纳税的月销售额或营业额不超过10万元（按季度纳税的季度销售额或营业额不超过30万元）的纳税人，可免征教育费附加和地方教育附加，请选择对应的“减免性质”。");
        }
    }
    jisuan(realvalue, showvalue, rowData, el, row, oldvalue);
}
function changeJcx(realvalue, showvalue, rowData, el, row, oldvalue) {
    // 如果值未改变，不计算
    if (realvalue == oldvalue) {
        return;
    }
    // 重置减免性质
    jisuan(realvalue, showvalue, rowData, el, row, oldvalue);
}

/*******************************************************************************
 * 涉及计算数据项变化后，调用计算方法
 * 
 * @param {}
 *            realvalue
 * @param {}
 *            showvalue
 * @param {}
 *            rowData
 * @param {}
 *            el
 * @param {}
 *            row
 * @param {}
 *            oldvalue
 */
function jisuan(realvalue, showvalue, rowData, el, row, oldvalue) {
    // 如果值未改变，不计算
    if (realvalue == oldvalue) {
        return;
    }
    var grid = $w('skxxGrid');
    var zsxmDm = rowData.getValue("zsxmDm");
    var zspmDm = rowData.getValue("zspmDm");
    var sybh = rowData.getValue("sybh1");
    var sfkssqq = rowData.getValue("sfkssqq");
    var sfkssqz = rowData.getValue("sfkssqz");
    var rdpzuuid = rowData.getValue("rdpzuuid");
    // 应税项变化，税种联动
    if (el.name == "ysx") {
        // 通用申报
        if (!$chk(sybh)) {
            // 增值税附征
            if (zspmDm == "101090101" || zspmDm == "101090201"
					|| zspmDm == "101090301" || zspmDm == "302030100"
					|| zspmDm == "301270100" || zspmDm == "302160100") {
                doZzsfz(realvalue);
                // 消费税附加
            } else if (zspmDm == "101090103" || zspmDm == "101090203"
					|| zspmDm == "101090303" || zspmDm == "302030300"
					|| zspmDm == "301270300" || zspmDm == "302160300") {
                doXfsfz(realvalue);
            } else if (zspmDm == "101060400" || zspmDm == "101060500") {
                // 通用申报,个人所得税 劳务报酬所得、稿酬所得 处理
                // 如果应税项小于等于4000 减除项设为800，若超过4000 减除项为应税项的20%
                var jcx = 0;
                if (realvalue > 0 && realvalue <= 4000) {
                    jcx = 800;
                } else {
                    jcx = (realvalue).multiple(0.2).round(2);
                }
                grid.updateCell(row.getCell("jcx"), emptyToZ(jcx));
            }
        }
    }
    // 征收项目为个人所得税 或 土地增值税 重新获取个税税率
    if (zsxmDm == "10106" || zsxmDm == "10113") {
        if (!$chk(sfkssqq) || !$chk(sfkssqz)) {
            return;
        }
        getHdslHSlxx(row, grid.getOneRowData(row));
    }
    calTable(grid, row, rowData, 7);
    // 设置预缴税额
    rowData = grid.getCheckedRowData();
    toSetYjse(row, rowData);
}

function dealWithGrczfw(checkrowData, checkrow, flag) {
    var grid = $w('skxxGrid');
    var ysxcell = checkrow.getCell("ysx");
    var bqjmsfecell = checkrow.getCell("bqjmsfe");
    var jsfyjcell = checkrow.getCell("jsfyj");
    var bqynsfecell = checkrow.getCell("bqynsfe");
    var bqybtsfecell = checkrow.getCell("bqybtsfe");
    var ssjmxzDmcell = checkrow.getCell("ssjmxzDm");
    var sflhdwsecell = checkrow.getCell("sflhdwse");
    var ysx = checkrowData.getValue("ysx");
    var jcx = checkrowData.getValue("jcx");
    var sflhdwse = checkrowData.getValue("sflhdwse");

    var zspmDm = checkrowData.getValue("zspmDm");
    // 个税处理逻辑
    if ("101060801" == zspmDm) {
        var rowDatas = grid.getAllNoDeleteGridData().trs;
        for (var i = 0; i < rowDatas.length; i++) {
            var rowData = rowDatas[i];
            var zspmDmingr = rowData.getValue("zspmDm");
            if ($chk(zspmDmingr) && ("101016604" == zspmDmingr || "101016606" == zspmDmingr)) {
                var zzsysx = rowData.getValue("ysx");
                var zzsybtse = rowData.getValue("bqybtsfe");
                if ("Y" == flag) {
                    ysx = (parseFloat(zzsysx) - parseFloat(zzsybtse)).toFixed(2);
                }
                break;
            }
        }
        var jmse = checkrowData.getValue("bqjmsfe");
        var bqyjsfe = checkrowData.getValue("bqyjsfe");
        var jsfyj = (parseFloat(ysx) - parseFloat(jcx)).toFixed(2);
        var ynse = (parseFloat(jsfyj) * parseFloat(sflhdwse)).toFixed(2);
        var ybtse = (parseFloat(ynse) - parseFloat(jmse) - parseFloat(bqyjsfe)).toFixed(2);

        // grid.updateCell(sflhdwsecell,"0.2");
        grid.updateCell(ysxcell, ysx);
        grid.updateCell(jsfyjcell, jsfyj);
        grid.updateCell(bqynsfecell, ynse);
        grid.updateCell(bqybtsfecell, ybtse);
        return;
    }

    // 网报增加
    var qtgrczbdczlqq = $w("nsrxxForm").getValue("qtgrczbdczlqq");
    var qtgrczbdczlqz = $w("nsrxxForm").getValue("qtgrczbdczlqz");
    if (!$chk(qtgrczbdczlqz) || !$chk(qtgrczbdczlqz)) {
        swordAlert("请先录入其他个人出租不动产租赁期起、其他个人出租不动产租赁期止")
        return;
    }
    var btn = new SwordSubmit();
    btn.pushData("djxh", gt3.djxh);
    btn.pushData("sbuuid", gt3.sbuuid);
    btn.pushData("zspmDm", zspmDm);
    btn.pushData("ysx", ysx);
    btn.pushData("jcx", jcx);
    btn.pushData("sflhdwse", sflhdwse);
    btn.pushData($w("nsrxxForm").getSubmitData());
    btn.setCtrl("SB175FxmtysbCtrl_dealWithGrczfw");
    btn.setOptions({
        'onSuccess': function (req, res) {
            var jmse = res.getAttr("jmse");
            var xdsje = res.getAttr("dsje");
            var bdsje = res.getAttr("bdsje");
            jsList = pc.getResData("jsList", res);

            var ysx = checkrowData.getValue("ysx");
            var jcx = checkrowData.getValue("jcx");
            var sl = checkrowData.getValue("sflhdwse");
            var bqyjsfe = checkrowData.getValue("bqyjsfe");

            var jsfyj = (parseFloat(ysx) - parseFloat(jcx)).toFixed(2);
            var ynse = (parseFloat(jsfyj) * parseFloat(sl)).toFixed(2);
            var ybtse = (parseFloat(ynse) - parseFloat(jmse) - parseFloat(bqyjsfe) + parseFloat(xdsje) - parseFloat(bdsje)).toFixed(2);

            // 如果是调小的话,应补退小于0,不减去被代收金额,应补退直接等于0
            if (ybtse < 0) {
                ybtse = 0;
            }
            grid.updateCell(jsfyjcell, jsfyj);
            grid.updateCell(bqynsfecell, ynse);
            grid.updateCell(bqjmsfecell, parseFloat(jmse).toFixed(2));
            grid.updateCell(bqybtsfecell, ybtse);

            var qtgrczbdczjsfft = $w("nsrxxForm").getValue("qtgrczbdczjsfft");
            var qtgrczbdczlqq = $w("nsrxxForm").getValue("qtgrczbdczlqq");
            var qtgrczbdczlqz = $w("nsrxxForm").getValue("qtgrczbdczlqz");

            var pjje = 0.0;
            if ($chk(qtgrczbdczjsfft) && $chk(qtgrczbdczjsfft.code)) {
                if ("N" == qtgrczbdczjsfft.code) {
                    pjje = ysx;
                    $w("nsrxxForm").setValue("qtgrczbdcfthyzjsr", ysx);
                } else {
                    var qmonth = qtgrczbdczlqq.substring(5, 7);
                    var zmonth = qtgrczbdczlqz.substring(5, 7);
                    var num = parseInt(zmonth, 10) - parseInt(qmonth, 10) + 1;
                    pjje = (parseFloat(ysx) / num).toFixed(2);
                    $w("nsrxxForm").setValue("qtgrczbdcfthyzjsr", pjje);
                }
            }
            var ssjmxzDm = checkrowData.getValue("ssjmxzDm");

            if (parseFloat(jmse) > 0 && !$chk(ssjmxzDm)) {
                if (parseFloat(pjje) < 20000) {
                    grid.updateCell(ssjmxzDmcell, "0001042805");
                } else {
                    grid.updateCell(ssjmxzDmcell, "0001045304");
                }
            }

            var rows = grid.dataDiv().getChildren('div[status!=delete]');
            var rowDatas = grid.getAllNoDeleteGridData().trs;
            for (var i = 0; i < rowDatas.length; i++) {
                var rowData = rowDatas[i];
                var row = rows[i];
                var zspmDmi = rowData.getValue("zspmDm");
                if ("101060801" == zspmDmi) {
                    dealWithGrczfw(rowData, row, "Y");
                }
            }
        }
    });

    btn.submit();
}
/*******************************************************************************
 * 增值税附征应税项联动
 * 
 * @param {}
 *            ysx
 */
function doZzsfz(ysx) {
    var grid = $w("skxxGrid");
    var rows = grid.dataDiv().getChildren();
    var rowDatas = grid.getAllNoDeleteGridData().trs;
    for (var i = 0; i < rowDatas.length; i++) {
        var rowData = rowDatas[i];
        var row = rows[i];
        var zspmDm = rowData.getValue("zspmDm");
        var ysxValue = rowData.getValue("ysx") / 1;
        var ysxCell = rows[i].getCell("ysx");
        if ((zspmDm == "101090101" || zspmDm == "101090201"
				|| zspmDm == "101090301" || zspmDm == "302030100" || zspmDm == "301270100" || zspmDm == "302160100")
				&& ysxValue == 0) {
            grid.updateCell(ysxCell, ysx);
            calTable(grid, row, rowData, 2);
            rowDatas = grid.getAllNoDeleteGridData().trs;
            rowData = rowDatas[i];
            toSetYjse(row, rowData);
        }
        // 网报特殊逻辑
        if ($chk(gt3.skselbz) && gt3.skselbz == 'N') {
            var zszmDm = rowData.tds.zszmDm.value;
            if ((zszmDm == '160204' || zszmDm == '880103' || zszmDm == '610102' || zszmDm == '160304' || zszmDm == '160104') && ysxValue == 0) {
                grid.updateCell(ysxCell, '0');
                calTable(grid, row, rowData, 2);
                rowDatas = grid.getAllNoDeleteGridData().trs;
                rowData = rowDatas[i];
                toSetYjse(row, rowData);
            }
        }
    }
}

/*******************************************************************************
 * 消费税附征应税项联动
 * 
 * @param {}
 *            ysx
 */
function doXfsfz(ysx) {
    var grid = $w("skxxGrid");
    var rows = grid.dataDiv().getChildren();
    var rowDatas = grid.getAllNoDeleteGridData().trs;
    for (var i = 0; i < rowDatas.length; i++) {
        var rowData = rowDatas[i];
        var row = rows[i];
        var zspmDm = rowData.getValue("zspmDm");
        var ysxValue = rowData.getValue("ysx") / 1;
        var ysxCell = rows[i].getCell("ysx");
        if ((zspmDm == "101090103" || zspmDm == "101090203"
				|| zspmDm == "101090303" || zspmDm == "302030300" || zspmDm == "301270300" || zspmDm == "302160300")
				&& ysxValue == 0) {
            grid.updateCell(ysxCell, ysx);
            calTable(grid, row, rowData, 2);
            rowDatas = grid.getAllNoDeleteGridData().trs;
            rowData = rowDatas[i];
            toSetYjse(row, rowData);
        }
    }
}

/*******************************************************************************
 * 减免金额改变后，校验减免资格
 * 
 * @param {}
 *            realvalue
 * @param {}
 *            showvalue
 * @param {}
 *            rowData
 * @param {}
 *            el
 * @param {}
 *            row
 * @param {}
 *            oldvalue
 */
function changeJmse(realvalue, showvalue, rowData, el, row, oldvalue) {
    var skxxGrid = $w("skxxGrid");
    var oldJmse = oldvalue / 1;// 原有减免税额
    var jmse = realvalue / 1;
    var zsxmDm = rowData.getValue("zsxmDm");// 当前项目
    var zspmDm = rowData.getValue("zspmDm");// 当前品目
    var jsyj = rowData.getValue("jsfyj");// 当前品目
    // 值未变化 不校验
    if (oldJmse == jmse) {
        return;
    }
    var ssjmxzDm = rowData.getValue("ssjmxzDm");
    if (realvalue > 0 && !$chk(ssjmxzDm)) {
        swordAlert("请先选择减免性质");
        skxxGrid.updateCell(el, "0.00");
        return;
    }
    // 获取到的优惠税额情况
    // var yhjmse = row.getCell("yhjmse").get("realvalue") / 1;
    // 征收子目带出的优惠金额
    var yhje = row.getCell("yhje").get("realvalue") / 1;
    var bqynsfe = row.getCell("bqynsfe").get("realvalue");
    var bqyjsfe = row.getCell("bqyjsfe").get("realvalue");
    var jmseCell = row.getCell("bqjmsfe");// 减免税额Cell
    // 校验是否有减免信息
    if (yhje > 0) {
        if (jmse > yhje) {
            swordAlert("本期减免税额不能大于减免性质允许减免税额", {
                onOk: function () {
                    jmse = yhje;
                    skxxGrid.updateCell(jmseCell, jmse);
                    calTable(skxxGrid, row, rowData, 5);
                    return;
                }
            });
        }
    }
    if (jmse > bqynsfe) {
        jmse = bqynsfe;
        skxxGrid.updateCell(jmseCell, jmse);
    }
    // 暂时屏蔽此代码。如果放开需要对应纳、减免、已缴均做类似校验。
    // var kjmse=(bqynsfe / 1).subtract(bqyjsfe / 1);
    // if(jmse>kjmse){
    // swordAlert("本期减免税额不能大于本期应纳税额减已缴税额", {
    // onOk : function() {
    // skxxGrid.updateCell(jmseCell, kjmse);
    // }
    // });
    // }
    calTable(skxxGrid, row, rowData, 5);
}

/*******************************************************************************
 * 更新缓存中的减免信息
 * 
 * @param {}
 *            uuid 减免优惠凭证uuid
 * @param {}
 *            jmse 实际减免税额
 */
function updateJmxx(uuid, jmse) {
    var jmxxData = gt3.jmxxGrid.trs;
    for (var i = 0; i < jmxxData.length; i++) {
        var jmxx = jmxxData[i];
        var yhpzuuid = jmxx.tds.yhpzuuid.value;// 减免凭证uuid
        if (uuid == yhpzuuid) {
            // 更新额度
            jmxx.tds.jzed.value = jmxx.tds.jzed.value / 1 - jmse / 1;
        }
    }
}

/**
 * 预缴金额变化，校验预缴税额
 * 
 * @return
 */
function changeYjse(realvalue, showvalue, rowData, el, row, oldvalue) {
    var skxxGrid = $w("skxxGrid");
    if (realvalue == oldvalue) {
        return;
    }
    var ysbse = rowData.getValue("ysbse") / 1;
    var zsxmDm = rowData.getValue("zsxmDm");
    var zspmDm = rowData.getValue("zspmDm");
    var sfkssqq = rowData.getValue("sfkssqq");
    var sfkssqz = rowData.getValue("sfkssqz");
    var nsqxDm = rowData.getValue("nsqxDm");
    if (zsxmDm == "10106" && realvalue < ysbse) {
        // 格式化已缴税额
        ysbse = (ysbse / 1).round(2);
        swordAlert("个人所得税存在已申报税额：" + ysbse + "元");
        skxxGrid.updateCell(el, emptyToZ(ysbse));
        calTable(skxxGrid, row, rowData, 2);
        return;
    }
    var bqyjse = realvalue;
    // 个人所得税 本期实际预缴=预缴税额-已申报税额
    // if (zsxmDm == "10106") {
    // bqyjse = bqyjse - ysbse;
    // } else {
    // ysbse = 0;
    // }
    var yjxxList = getYjxxList(zsxmDm, zspmDm, sfkssqq, sfkssqz, nsqxDm);
    if (!$chk(yjxxList) || yjxxList.trs.length == 0) {
        // 如果为个人所得税，符合累计计税，没有查询到预缴税额，且上期为定期定额核定，则可以随意录入已缴税额
        var dqjsFlag = row.getCell('dqjsFlag').get("realvalue");
        if (zsxmDm == "10106" && dqjsFlag == "false") {
            // 查询上期定期定额核定结果
            var zspmDm = rowData.getValue("zspmDm");
            var skssqq = rowData.getValue("sfkssqq");
            var skssqz = rowData.getValue("sfkssqz");
            var nsqxDm = rowData.getValue("nsqxDm");
            getSqDqdeHdxx(skssqq, skssqz, zsxmDm, zspmDm, nsqxDm);
        }
        if (sqDqdehdBz == "Y") {
            bqyjse = realvalue;
        } else {
            swordAlert("没有查询到纳税人的已缴税款信息,不能录入本期已缴税款");
            bqyjse = ysbse;
        }
    } else {
        var zspmDm = rowData.getValue("zspmDm");
        var skssqq = rowData.getValue("sfkssqq");
        var skssqz = rowData.getValue("sfkssqz");
        var kyyjse = 0;// 可以预缴税额
        yjxxList.trs.each(function (yjxx, index) {
            var yjZspmDm = yjxx.tds.zspmDm.value;
            var yjSkssqq = yjxx.tds.skssqq.value;
            var yjSkssqz = yjxx.tds.skssqz.value;
            var yjye = yjxx.tds.yjye1.value / 1;// 预缴余额
            if (zspmDm == yjZspmDm
                    && (compareDate(yjSkssqq, skssqz) || compareDate(
                            skssqq, yjSkssqz))) {
                kyyjse += yjye;
            }
        });
        if (gt3.scenceCs == "cwgzbz" && $chk(skxxGridfromgz) && skxxGridfromgz.trs.length > 0) {
            for (var i = 0; i < skxxGridfromgz.trs.length; i++) {
                var zspmDmfromgz = skxxGridfromgz.trs[i].tds.zspmDm.value;
                var skssqqfromgz = skxxGridfromgz.trs[i].tds.sfkssqq.value;
                var skssqzfromgz = skxxGridfromgz.trs[i].tds.sfkssqz.value;
                var bqyjsfefromgz = skxxGridfromgz.trs[i].tds.bqyjsfe.value;
                if (zspmDmfromgz.contains(zspmDm)
						&& (compareDate(skssqqfromgz, skssqz) || compareDate(
								skssqq, skssqzfromgz))) {
                    kyyjse += bqyjsfefromgz / 1;
                }
            }
        }
        if (kyyjse + ysbse < bqyjse) {
            bqyjse = kyyjse + ysbse;
        }
    }
    var bqynsfe = rowData.getValue("bqynsfe") / 1;
    // 格式化已缴税额
    bqyjse = (bqyjse / 1).round(2);
    if (bqyjse > bqynsfe) {
        bqyjse = bqynsfe;
    }
    // 更新预缴税额
    skxxGrid.updateCell(el, emptyToZ(bqyjse));
    // 当前行税额
    calTable(skxxGrid, row, rowData, 6);
}

/*******************************************************************************
 * 查询所在行的预缴信息
 * 
 * @param {}
 *            rowData
 * @return {}
 */
function getYjxxList(zsxmDm, zspmDm, sfkssqq, sfkssqz, nsqxDm) {
    var sbsxDm1 = $w("nsrxxForm").getValue('sbsxDm1').code;
    var yjxxList = null;
    var yjBtn = new SwordSubmit();
    yjBtn.pushData('djxh', gt3.djxh);
    yjBtn.pushData('sbsxDm1', sbsxDm1);
    yjBtn.pushData("zsxmDm", zsxmDm);
    yjBtn.pushData("zspmDm", zspmDm);
    yjBtn.pushData("sfkssqq", sfkssqq);
    yjBtn.pushData("sfkssqz", sfkssqz);
    yjBtn.pushData("nsqxDm", nsqxDm);
    yjBtn.setCtrl(gt3.ctrl + '_getYjxxList');
    yjBtn.setOptions({
        'onSuccess': function (req, res) {
            yjxxList = pc.getResData("yjxxList", res);
        }
    });
    yjBtn.submit();
    return yjxxList;
}

/*******************************************************************************
 * 空转为0.00数值
 * 
 * @param {}
 *            obj
 * @return {String}
 */
function emptyToZ(obj) {
    if (typeof (obj) == "object") {
        if (!$chk(obj)) {
            return "0.00";
        } else if (!$chk(trimStr(obj.value))) {
            return "0.00";
        } else if (trimStr(obj.value) == "null") {
            return "0.00";
        } else {
            return trimStr(obj.value);
        }
    } else if (typeof (obj) == "number") {
        if (!$chk(obj)) {
            return "0.00";
        } else if (obj == "null") {
            return "0.00";
        } else if (obj == 0) {
            return "0.00";
        } else {
            return obj;
        }
    } else {
        if (!$chk(obj)) {
            return "0.00";
        } else if (!$chk(trimStr(obj))) {
            return "0.00";
        } else if (trimStr(obj) == "null") {
            return "0.00";
        } else if (trimStr(obj) == "0") {
            return "0.00";
        } else {
            return trimStr(obj);
        }
    }
}

/**
 * 打开选择税源弹出框
 * 
 * @return
 */
function openSyxx() {
    if (!$w("nsrxxForm").validate()) {
        return;
    }
    swordAlertIframe('sword?ctrl=SB175FxmtysbCtrl_openSyxx', {
        titleName: "选择税源项目",
        width: 800,
        height: 400,
        isNormal: 'true',
        isMax: 'true',
        isClose: 'true',
        isMin: "true",
        param: window,
        djxh: gt3.djxh,
        ssqq: $w("nsrxxForm").getValue("skssqq"),
        ssqz: $w("nsrxxForm").getValue("skssqz")
    });
}

/**
 * //获取项目或不动产申报数据信息
 * 
 * @param sybz
 *            税源标志
 * @return getXmBdcSkxxSuccess
 */
function getXmBdcSkxx(sybz, checkzyRowData) {
    var nsrxxForm = $w("nsrxxForm");
    var nsrsbh = nsrxxForm.getFieldEl("nsrsbh").value;// 纳税人识别号
    var sblxDm = nsrxxForm.getValue("sbsxDm1").code;// 申报类型代码
    var skssqq = nsrxxForm.getValue("skssqq");// 所属期起
    var skssqz = nsrxxForm.getValue("skssqz");// 所属期止
    var xmBtn = new SwordSubmit();
    xmBtn.pushData('djxh', gt3.djxh);// 登记序号
    xmBtn.pushData('sybz', sybz);// 税源标志
    xmBtn.pushData(nsrxxForm.getSubmitData());
    xmBtn.pushData(checkzyRowData);
    xmBtn.setCtrl(gt3.ctrl + '_getXmInitData');
    xmBtn.setFunction('onAfterLoadData', 'getXmBdcSkxxSuccess');
    xmBtn.submit();
}

/*******************************************************************************
 * 项目不动产税种信息加载完成后
 * 
 * @param {}
 *            req
 * @param {}
 *            res
 */
function getXmBdcSkxxSuccess(req, res) {
    gt3.jmxxGrid = pc.getResData("jmxxGridlist", res);// 减免信息
    gt3.yjxxGrid = pc.getResData("yjxxGridlist", res);// 预缴信息
    var qzdList = pc.getResData("qzdList", res);// 起征点信息
    updateQzdxx(qzdList);// 合并起征点信息
    // 不动产
    if (res.getAttr("sybz") == "2") {
        gt3.bdcSkxxGrid = pc.getResData("bdcSkxxGrid", res);// 税款信息
        gt3.qsXmbh = res.getAttr("qsXmbh");// 土地增值税清算信息清算信息

        gt3.bdcZspmData = pc.getInitDataByDataName("DM_GY_ZSPM_Y").data;// 征收品目下拉
        gt3.bdcZszmData = pc.getInitDataByDataName("DM_GY_ZSZM").data;// 征收子目下拉
    } else if (res.getAttr("sybz") == "3") {// 项目工程
        gt3.xmSkxxGrid = pc.getResData("xmSkxxGrid", res);
        gt3.xmZspmData = pc.getInitDataByDataName("DM_GY_ZSPM_Y").data;
        gt3.xmZszmData = pc.getInitDataByDataName("DM_GY_ZSZM").data;

    }
}

/*******************************************************************************
 * 得到弹出框回传数据，拆分组装到父页面grid
 * 
 * @return
 */
function getsonGrid(checkzyRow, sybz) {
    var sbrq = $w("nsrxxForm").getValue("sbrq1");// 申报日期
    var skssqz = $w("nsrxxForm").getValue("skssqz");// 税款所属期止
    var skxxGrid = $w("skxxGrid");
    var skxxGridData = {
        sword: "SwordGrid",
        name: "skxxGrid",
        trs: new Array()
    };
    // 土地税源
    if (sybz == 1) {
        var jsBtn = new SwordSubmit();
        jsBtn.setCtrl(gt3.ctrl + "_jsse");
        jsBtn.pushData(checkzyRow);
        jsBtn.pushData("sybz", sybz);
        jsBtn.pushData("sbrq", sbrq);
        jsBtn.pushData("skssqz", skssqz);
        jsBtn.pushData("djxh", gt3.djxh);
        jsBtn.setFunction("onAfterLoadData", "skxxJs");
        jsBtn.submit();
    } else if (sybz == 2) {// 不动产项目
        var bz = 0;// 有无税种信息标志
        for (var i = 0; i < checkzyRow.trs.length; i++) {
            var rows = checkzyRow.trs[i].tds;
            var jecj = rows.jecj.value;// 子页面采集金额 作为应税项
            var xmbh = rows.bdcxmbh.value;
            if (!$chk(gt3.bdcSkxxGrid)) {
                break;
            }
            for (var j = 0; j < gt3.bdcSkxxGrid.trs.length; j++) {
                var skxx = gt3.bdcSkxxGrid.trs[j];

                var nsqxDm = skxx.tds.nsqxDm.value;
                var zsxmDm = skxx.tds.zsxmDm.value;
                var zspmDm = skxx.tds.zspmDm.value;
                var skssqq = skxx.tds.sfkssqq.value;
                var skssqz = skxx.tds.sfkssqz.value;
                var sl = skxx.tds.sflhdwse.value;
                var yhsl = "";
                var yssdl = skxx.tds.yssdl.value;
                if ($chk(gt3.qsXmbh) && gt3.qsXmbh.indexOf(xmbh) != -1
						&& zsxmDm == "10113") {// 说明土地增值税已清算
                    // 清算项目，设置土地增值税纳税期限代码为按次，税款所属期为表头所属期
                    var form = $w("nsrxxForm");
                    nsqxDm = "11";// 按次征收
                    skssqq = form.getValue("skssqq");// 税款所属期起
                    skssqz = form.getValue("skssqz");// 税款所属期止
                }
                // 城建税通过税务机关带出品目
                if (zsxmDm == "10109") {
                    zspmDm = getCjspm(rows.xmszdswjgDm.value);
                    // 项目申报获取税率
                    var slArr = getSl(zsxmDm, zspmDm, null, skssqq, skssqz);
                    sl = slArr[0];// 税率
                    yhsl = slArr[1];// 优惠税率
                    yssdl = slArr[2];// 应税所得率
                }
                var dataObj = {
                    tds: {
                        "xmxh": {
                            value: gt3.xmxh
                        },
                        "sybzDm1": {
                            value: sybz
                        },
                        "sybh1": {
                            value: rows.bdcxmbh.value
                        },
                        "syzldz": {
                            value: rows.xmdz.value
                        },
                        "zsxmDm": {
                            value: zsxmDm
                        },
                        "zspmDm": {
                            value: zspmDm
                        },
                        "zszmDm": {
                            value: skxx.tds.zszmDm.value
                        },
                        "sfkssqq": {
                            value: skssqq
                        },
                        "sfkssqz": {
                            value: skssqz
                        },
                        "ysx": {
                            value: jecj
                        },
                        "jcx": {
                            value: skxx.tds.jcx.value
                        },
                        "yssdl": {
                            value: yssdl
                        },
                        "jsfyj": {
                            value: skxx.tds.jsfyj.value
                        },
                        "sflhdwse": {
                            value: sl
                        },
                        "yhsl": {
                            value: yhsl
                        },
                        "sskcs": {
                            value: skxx.tds.sskcs.value
                        },
                        "bqynsfe": {
                            value: skxx.tds.bqynsfe.value
                        },
                        "bqjmsfe": {
                            value: skxx.tds.bqjmsfe.value
                        },
                        "bqyjsfe": {
                            value: skxx.tds.bqyjsfe.value
                        },
                        "bqybtsfe": {
                            value: skxx.tds.bqybtsfe.value
                        },
                        "jkqxDm": {
                            value: skxx.tds.jkqxDm.value
                            // 缴款期限代码
                        },
                        "nsqxDm": {
                            value: nsqxDm
                            // 纳税期限代码
                        },
                        "sbqxDm": {
                            value: skxx.tds.sbqxDm.value
                            // 申报期限代码
                        }
                    }
                };
                var row = skxxGrid.insertRow(dataObj);
                // 征收品目代码不为空并且只有一条，置为不可修改
                if ($chk(zspmDm) && getZspmCount(gt3.bdcZspmData, zsxmDm) == 1) {
                    row.getCell("zspmDm").disable = "true";
                }
                // 征收项目为城建税时，征收品目不为空，不可修改
                if ($chk(zspmDm) && zsxmDm == "10109") {
                    row.getCell("zspmDm").disable = "true";
                }
                // 征收子目列表为空或者当前征收项目下子目为空，置为不可录
                if (!$chk(gt3.zszmData)
						|| getZszmCountByZsxm(gt3.bdcZszmData, zsxmDm) == 0) {
                    row.getCell("zszmDm").disable = "true";
                }
                // 征收项目不可修改
                row.getCell("zsxmDm").disable = "true";
                getHdslHSlxx(row, skxxGrid.getOneRowData(row));
                var rowData = skxxGrid.getOneRowData(row);
                calTable(skxxGrid, row, rowData, 1);
                bz = 1;
            }
            gt3.xmxh++;
            skxxGridData.trs.push(skxxGrid.getOneRowData(row));
        }
        if ($chk(gt3.bdcSkxxGrid) && bz == 0) {
            swordAlert("没有获取到相关属期的税种信息，请重新选择属期");
            return;
        }
        checkCfYqSb(skxxGridData);
    } else if (sybz == 3) {// 工程项目
        var msg = "";
        for (var i = 0; i < checkzyRow.trs.length; i++) {
            var rows = checkzyRow.trs[i].tds;
            var jecj = rows.jecj.value;// 子页面采集金额 作为应税项
            var bz = 0;// 是否带出税种信息标志
            if (!$chk(gt3.xmSkxxGrid)) {
                break;
            }
            for (var j = 0; j < gt3.xmSkxxGrid.trs.length; j++) {
                var skxx = gt3.xmSkxxGrid.trs[j];
                // if (!checkSsqFlag(skxx.tds.sfkssqq.value,
                // skxx.tds.sfkssqz.value)) {
                // continue;
                // }
                var zsxmDm = skxx.tds.zsxmDm.value;
                var zspmDm = skxx.tds.zspmDm.value;
                var skssqq = skxx.tds.sfkssqq.value;
                var skssqz = skxx.tds.sfkssqz.value;
                var sl = skxx.tds.sflhdwse.value;
                var yhsl = "";
                var yssdl = skxx.tds.yssdl.value;
                if (zsxmDm == "10109") {
                    zspmDm = getCjspm(rows.xmszddfswjgDm.value);
                    // 项目申报获取税率
                    var slArr = getSl(zsxmDm, zspmDm, null, skssqq, skssqz);
                    sl = slArr[0];// 税率
                    yhsl = slArr[1];// 优惠税率
                    yssdl = slArr[2];// 应税所得率
                }
                var dataObj = {
                    tds: {
                        "xmxh": {
                            value: gt3.xmxh
                        },
                        "zfsbz": {
                            value: skxx.tds.zfsbz.value
                        },
                        "rdzsuuid": {
                            value: skxx.tds.rdzsuuid.value
                        },
                        "rdpzuuid": {
                            value: skxx.tds.rdpzuuid.value
                        },
                        "sybzDm1": {
                            value: sybz
                        },
                        "sybh1": {
                            value: rows.gcxmbh.value
                        },
                        "syzldz": {
                            value: rows.gcxmdz.value
                        },
                        "zsxmDm": {
                            value: zsxmDm
                        },
                        "zspmDm": {
                            value: zspmDm
                        },
                        "zszmDm": {
                            value: skxx.tds.zszmDm.value
                        },
                        "sfkssqq": {
                            value: skxx.tds.sfkssqq.value
                        },
                        "sfkssqz": {
                            value: skxx.tds.sfkssqz.value
                        },
                        "ysx": {
                            value: jecj
                        },
                        "jcx": {
                            value: skxx.tds.jcx.value
                        },
                        "yssdl": {
                            value: yssdl
                        },
                        "jsfyj": {
                            value: skxx.tds.jsfyj.value
                        },
                        "sflhdwse": {
                            value: sl
                        },
                        "yhsl": {
                            value: yhsl
                        },
                        "sskcs": {
                            value: skxx.tds.sskcs.value
                        },
                        "bqynsfe": {
                            value: skxx.tds.bqynsfe.value
                        },
                        "bqjmsfe": {
                            value: skxx.tds.bqjmsfe.value
                        },
                        "bqyjsfe": {
                            value: skxx.tds.bqyjsfe.value
                        },
                        "bqybtsfe": {
                            value: skxx.tds.bqybtsfe.value
                        },
                        "jkqxDm": {
                            value: skxx.tds.jkqxDm.value
                        },
                        "nsqxDm": {
                            value: skxx.tds.nsqxDm.value
                        },
                        "sbqxDm": {
                            value: skxx.tds.sbqxDm.value
                        }
                    }
                };
                var row = skxxGrid.insertRow(dataObj);
                // 征收品目代码不为空并且只有一条，置为不可修改
                if ($chk(zspmDm) && getZspmCount(gt3.xmZspmData, zsxmDm) == 1) {
                    row.getCell("zspmDm").disable = "true";
                }
                // 征收项目为城建税时，征收品目不为空，不可修改
                if ($chk(zspmDm) && zsxmDm == "10109") {
                    row.getCell("zspmDm").disable = "true";
                }
                // 征收子目列表为空或者当前征收项目下子目为空，置为不可录
                if (!$chk(gt3.zszmData)
						|| getZszmCountByZsxm(gt3.xmZszmData, zsxmDm) == 0) {
                    row.getCell("zszmDm").disable = "true";
                }
                // 征收项目不可修改
                row.getCell("zsxmDm").disable = "true";
                getHdslHSlxx(row, skxxGrid.getOneRowData(row));
                var rowData = skxxGrid.getOneRowData(row);
                calTable(skxxGrid, row, rowData, 1);
                bz = 1;
            }
            // 无效，拼装提示信息
            if (bz == 0) {
                msg += "<br/>" + rows.gcxmbh.value;
            }
            gt3.xmxh++;
            skxxGridData.trs.push(skxxGrid.getOneRowData(row));
        }
        if ($chk(msg)) {
            swordAlert("项目编号：" + msg + "<br/>没有获取到相关属期的税种信息，请重新选择属期");
            return;
        }
        checkCfYqSb(skxxGridData);
    } else if (sybz == 4) {// 房屋税源
        var jsBtn = new SwordSubmit();
        jsBtn.setCtrl(gt3.ctrl + "_jsse");
        jsBtn.pushData(checkzyRow);
        jsBtn.pushData("sybz", sybz);
        jsBtn.pushData("sbrq", sbrq);
        jsBtn.pushData("djxh", gt3.djxh);
        jsBtn.pushData("skssqz", skssqz);
        jsBtn.setFunction("onAfterLoadData", "skxxJs");
        jsBtn.submit();
    }
}

function getCjspm(fwssjgDm) {
    var cjspmDm = "";
    var pmBtn = new SwordSubmit();
    pmBtn.pushData("fwssjgDm", fwssjgDm);
    pmBtn.setCtrl(gt3.ctrl + "_getCjspm");
    pmBtn.setOptions({
        "onSuccess": function (req, res) {
            cjspmDm = res.getAttr("cjspmDm");
        }
    });
    pmBtn.submit();
    return cjspmDm;
}

/*******************************************************************************
 * 房屋土地税源后台计算税额后返回页面处理
 * 
 * @param {}
 *            req
 * @param {}
 *            res
 */
function skxxJs(req, res) {
    var skxxList = pc.getResData("skxxList", res);
    var skxxGrid = $w("skxxGrid");
    // var bz = 0;// 存在标志
    // var msg = "";// 提示信息
    var skxxGridData = {
        sword: "SwordGrid",
        name: "skxxGrid",
        trs: new Array()
    };
    for (var i = 0; i < skxxList.trs.length; i++) {
        // if (!checkSsqFlag(skxxList.trs[i].tds.sfkssqq.value,
        // skxxList.trs[i].tds.sfkssqz.value)) {
        // msg += "<br/>" + skxxList.trs[i].tds.sybh1.value;
        // continue;
        // }
        var row = skxxGrid.insertRow(skxxList.trs[i]);
        var nsqxDm = skxxList.trs[i].tds.nsqxDm.value;
        var yxqq = skxxList.trs[i].tds.yxqq.value;
        var yxqz = skxxList.trs[i].tds.yxqz.value;
        var sfkssqq = skxxList.trs[i].tds.sfkssqq.value;
        var sfkssqz = skxxList.trs[i].tds.sfkssqz.value;
        // 计算期数
        var qs = 0;
        // 所属期不为空才计算
        if ($chk(sfkssqq) && $chk(sfkssqz)) {
            qs = isPositive(getQs(nsqxDm, sfkssqq, sfkssqz, yxqq, yxqz));
        }
        skxxGrid.updateCell(row.getCell("qs"), qs);
        getHdslHSlxx(row, skxxGrid.getOneRowData(row));
        calTable(skxxGrid, row, skxxGrid.getOneRowData(row), 2);
        // 征收项目、品目不可编辑
        row.getCell("zsxmDm").disable = "true";
        row.getCell("zspmDm").disable = "true";
        var zspmDm = row.getCell("zspmDm").get("realvalue");
        // 征收子目为空 不可编辑
        if (!$chk(gt3.zszmData) || getZszmCount(gt3.zszmData, zspmDm) == 0) {
            row.getCell("zszmDm").disable = "true";
        }
        skxxGridData.trs.push(skxxGrid.getOneRowData(row));
        // bz = 1;
    }
    checkCfYqSb(skxxGridData);
    // if (bz == 0) {
    // swordAlert("税源编号：" + msg + "<br/>没有获取到相关属期的税种信息，请重新选择属期");
    // }

}

/*******************************************************************************
 * 增行
 */
function insert() {
    if (!$chk(gt3.skxxList)) {
        swordAlert("请先获取税种信息");
        return;
    }
    var skxxGrid = $w("skxxGrid");
    skxxGrid.insertRow();
}

/*******************************************************************************
 * 征收项目改变
 * 
 * @param {}
 *            option
 * @param {}
 *            selItem
 * @param {}
 *            obj
 */
function changeZsxm(option, selItem, obj) {
    var skxxGrid = $w('skxxGrid');
    var row = skxxGrid.getCheckedRow();
    var zsxmDm = selItem.code;// 项目代码
    // 清空行
    resetRow(row);
    // 征收品目可选
    row.getCell("zspmDm").disable = "false";
    if (sfsyyhbftc == "N" && (zsxmDm == "10112" || zsxmDm == "10110")) {
        swordAlert("房产税和城镇土地使用税请通过项目提取申报", {
            onOk: function () {
                skxxGrid.updateCell(row.getCell("zsxmDm"), "");
                skxxGrid.setCellFocus(row.getCell("xh")
                                .get("realvalue"), "zsxmDm")
            }
        });
        return;
    }
    // 如果该项目下 子目列表为空 子目不可编辑
    var zszmCell = row.getCell("zszmDm");
    if (!$chk(gt3.zszmData) || getZszmCountByZsxm(gt3.zszmData, zsxmDm) == 0) {
        zszmCell.disable = "true";
    } else {
        zszmCell.disable = "false";
    }
}
/**
 * 设置预缴税额
 */
function toSetYjse(row, rowData) {
    var skxxGrid = $w("skxxGrid");
    var ysbse = rowData.getValue("ysbse") / 1;
    var bqyjsfe = rowData.getValue("bqyjsfe") / 1;
    var sybh1 = rowData.getValue("sybh1");
    var zsxmDm = rowData.getValue("zsxmDm");
    var zspmDm = rowData.getValue("zspmDm");
    var sfkssqq = rowData.getValue("sfkssqq");
    var sfkssqz = rowData.getValue("sfkssqz");
    var nsqxDm = rowData.getValue("nsqxDm");
    var xh = rowData.getValue("xh");
    // 税源项目不带出预缴信息
    if ($chk(sybh1)) {
        return;
    }
    // //已经赋值，不再二次调用
    // if($chk(bqyjsfe) && bqyjsfe>0){
    // return;
    // }
    // 针对重复征收项目、征收品目，第二条不带出预缴税款信息
    var allData = skxxGrid.getAllNoDeleteGridData().trs;// 所有行数据
    var length = allData.length;// 数据行数
    for (var i = 0; i < length; i++) {
        var rowData2 = allData[i];
        var zsxmDm2 = rowData2.getValue("zsxmDm");
        var zspmDm2 = rowData2.getValue("zspmDm");
        var xh2 = rowData2.getValue("xh");
        // 说明有征收项目、征收品目相同的行，不再自动带出预缴
        if (xh != xh2 && zsxmDm == zsxmDm2 && zspmDm == zspmDm2) {
            return;
        }
    }

    var yjxxList = getYjxxList(zsxmDm, zspmDm, sfkssqq, sfkssqz, nsqxDm);
    if ($chk(yjxxList) || yjxxList.trs.length > 0) {
        var zspmDm = rowData.getValue("zspmDm");
        var skssqq = rowData.getValue("sfkssqq");
        var skssqz = rowData.getValue("sfkssqz");
        var kyyjse = 0;// 可以预缴税额
        yjxxList.trs.each(function (yjxx, index) {
            var yjZspmDm = yjxx.tds.zspmDm.value;
            var yjSkssqq = yjxx.tds.skssqq.value;
            var yjSkssqz = yjxx.tds.skssqz.value;
            var yjye = yjxx.tds.yjye1.value / 1;// 预缴余额
            if (zspmDm == yjZspmDm
                    && (compareDate(yjSkssqq, skssqz) || compareDate(
                            skssqq, yjSkssqz))) {
                kyyjse += yjye;
            }
        });

        if (gt3.scenceCs == "cwgzbz" && $chk(skxxGridfromgz) && skxxGridfromgz.trs.length > 0) {
            for (var i = 0; i < skxxGridfromgz.trs.length; i++) {
                var zspmDmfromgz = skxxGridfromgz.trs[i].tds.zspmDm.value;
                var skssqqfromgz = skxxGridfromgz.trs[i].tds.sfkssqq.value;
                var skssqzfromgz = skxxGridfromgz.trs[i].tds.sfkssqz.value;
                var bqyjsfefromgz = skxxGridfromgz.trs[i].tds.bqyjsfe.value;
                if (zspmDmfromgz.contains(zspmDm)
						&& (compareDate(skssqqfromgz, skssqz) || compareDate(
								skssqq, skssqzfromgz))) {
                    kyyjse += bqyjsfefromgz / 1;
                }
            }
        }
        bqyjse = kyyjse + ysbse;
    }
    // 格式化已缴税额
    bqyjse = (bqyjse / 1).round(2);
    var bqynsfe = rowData.getValue("bqynsfe");
    if (bqyjse / 1 > bqynsfe / 1) {
        bqyjse = (bqynsfe / 1).round(2)
    }
    // 更新预缴税额
    skxxGrid.updateCell(row.getCell("bqyjsfe"), emptyToZ(bqyjse));
    // 当前行税额
    calTable(skxxGrid, row, rowData, 6);
}

/*******************************************************************************
 * 征收品目改变
 * 
 * @param {}
 *            option
 * @param {}
 *            selItem
 * @param {}
 *            obj
 */
function changeZspm(option, selItem, obj) {
    var zspmDm = selItem.code;// 品目代码
    var zsxmDm = selItem.pcode;// 项目代码
    var skxxGrid = $w('skxxGrid');
    var row = skxxGrid.getCheckedRow();
    var rowData = skxxGrid.getCheckedRowData();
    if (!$chk(zspmDm) || !$chk(zsxmDm)) {
        return;
    }
    // 网报逻辑
    // //吉林地税--纳税人使用通用申报模块申报时，系统校验如果附加税不是按项目申报的，则弹出提示：除了按项目申报时可在此模块申报附加税（费）外，正常的附加税（费）请使用“附加税（费）申报”模块进行申报。并且返回让纳税人修改
    if (gt3.fjsxmsbbz == 'Y') {
        var sybh1 = row.getCell("sybh1").get("realvalue");// 税源标志
        if (fjsXmsbjy(zspmDm, sybh1)) {
            swordAlert("除了按项目申报时可在此模块申报附加税（费）外，正常的附加税（费）请使用“附加税（费）申报”模块进行申报");
            skxxGrid.updateCell(row.getCell("zspmDm"), "");
            return;
        }
    }
    if ("Y" != gt3.zrrBz) {
        if ($chk(zspmDm) && ("101016604" == zspmDm || "101016606" == zspmDm)) {
            swordAlert("非自然人不允许申报'不动产融资租赁（11%、5%','不动产经营租赁（11%、5%）'");
            skxxGrid.updateCell(row.getCell("zspmDm"), "");
            return;
        }
    } else {
        if ($chk(zspmDm) && ("101016604" == zspmDm || "101016606" == zspmDm)) {
            var allData = skxxGrid.getAllNoDeleteGridData();
            var num = 0;
            for (var i = 0; i < allData.trs.length; i++) {
                var zspming = allData.trs[i].tds.zspmDm;
                if ($chk(zspming) && $chk(zspming.value) && ("101016604" == zspming.value || "101016606" == zspming.value)) {
                    num = parseInt(num) + 1;
                    if (num > 1) {
                        swordAlertWrong("不动产融资租赁（11%、5%'或'不动产经营租赁（11%、5%）'品目已存在");
                        skxxGrid.updateCell(row.getCell("zspmDm"), "");
                    }
                }
            }
        }
    }
    var skxxGridData = {
        sword: "SwordGrid",
        name: "skxxGrid",
        trs: new Array()
    };

    // 重置减免性质、减免税额
    toResetSsjmxz(row);
    var skxxList = gt3.skxxList.trs;
    var nsqxDm = "";
    var sl = 0;
    var yhsl = 0;
    var yssdl = 0;
    var sybz = row.getCell("sybzDm1").get("realvalue");// 税源标志
    // 通用申报
    if (!$chk(sybz)) {
        // 清除认定凭证uuid与主税uuid
        skxxGrid.updateCell(row.getCell("rdpzuuid"), "");
        skxxGrid.updateCell(row.getCell("rdzsuuid"), "");
        // 当选择的品目在税费种认定中，自动带出数据
        for (var i = 0; i < skxxList.length; i++) {
            var skZsxmDm = skxxList[i].tds.zsxmDm.value;
            var skZspmDm = skxxList[i].tds.zspmDm.value;
            var skZszmDm = skxxList[i].tds.zszmDm.value;
            var sfsfzrd = skxxList[i].tds.sfsfzrd.value;
            if (!$chk(skZszmDm) && skZsxmDm == zsxmDm && zspmDm == skZspmDm
					&& sfsfzrd == "Y") {
                skxxGrid.updateRow(row, skxxList[i]);
                getHdslHSlxx(row, rowData);

                //设置预缴税额
                rowData = skxxGrid.getCheckedRowData();
                toSetYjse(row, rowData);
                rowData = skxxGrid.getCheckedRowData();

                calTable(skxxGrid, row, skxxGrid.getOneRowData(row
								.getCell("xh")), 1);
                if (!$chk(gt3.zszmData)
						|| getZszmCount(gt3.zszmData, zspmDm) == 0) {
                    row.getCell("zszmDm").disable = "true";
                } else {
                    row.getCell("zszmDm").disable = "false";
                }
                skxxGridData.trs.push(rowData);
                checkCfYqSb(skxxGridData);
                // 根据主税信息，添加附税行
                toAddRowFsxxByZsxx(rowData);
                return;
            }
        }
        // 不在税费种认定中，调用公共方法获取纳税期限
        // 纳税人为自然人默认属期按次
        if (gt3.zrrBz == "Y") {
            nsqxDm = "11";
        } else {
            nsqxDm = getMrNsqxDm(zsxmDm, zspmDm);
        }
        // 获取属期
        var ssqq = $w("nsrxxForm").getValue("skssqq");
        var ssqz = $w("nsrxxForm").getValue("skssqz");
        // 申报日期传入所属期止，Ctrl里会加一天，即下个月的1号，再取上期属期，实际取到的是本期属期
        var ssqArr = getSsq(nsqxDm, ssqz, "N", ssqq, ssqz);
        var sfkssqq = ssqArr[0];
        var sfkssqz = ssqArr[1];
        skxxGrid.updateCell(row.getCell("sfkssqq"), sfkssqq);
        skxxGrid.updateCell(row.getCell("sfkssqz"), sfkssqz);
        skxxGrid.updateCell(row.getCell("nsqxDm"), nsqxDm);
        // 根据主税信息，添加附税行
        toAddRowFsxxByZsxxAndCsb(rowData);
    }
    skxxGrid.updateCell(row.getCell("bqyjsfe"), "0.00");
    // 获取税率
    getHdslHSlxx(row, rowData);
    //设置预缴税额
    rowData = skxxGrid.getCheckedRowData();
    toSetYjse(row, rowData);
    rowData = skxxGrid.getCheckedRowData();

    // 重新计算
    calTable(skxxGrid, row, rowData, 2);
    // 清空子目
    var zszmCell = row.getElement('[name=zszmDm]');
    skxxGrid.updateCell(zszmCell, "");
    // 控制子目是否可编辑
    var zmData = null;// 当前子目集合
    if (!$chk(sybz)) {// 通用申报
        zmData = gt3.zszmData;
    } else if (sybz == "2") {// 不动产
        zmData = gt3.bdcZszmData;
    } else if (sybz == "3") {// 项目
        zmData = gt3.xmZszmData;
    }
    // 子目列表为空或者该品目下子目为空，或者 不动产项目申报获取到核定税率时，子目不可编辑
    if (!$chk(zmData) || getZszmCount(zmData, zspmDm) == 0
			|| (sybz == "2" && rowData.getValue("slbz") == "2")) {
        zszmCell.disable = "true";
    } else {
        zszmCell.disable = "false";
    }
    // 检查重复申报逾期申报
    skxxGridData.trs.push(rowData);
    checkCfYqSb(skxxGridData);
}
/**
 * 根据主税信息，添加附加税行
 * 
 * @param rowData
 */
function toAddRowFsxxByZsxx(rowData) {
    var zfsbz = rowData.getValue("zfsbz");
    var rdpzuuid = rowData.getValue("rdpzuuid");
    var fjsList = new Array();// 附加税
    // var rdzsuuid=rowData.getValue("rdzsuuid");
    if ($chk(zfsbz) && zfsbz == "0") {// 说明是主税
        for (var j = 0; j < gt3.skxxList.trs.length; j++) {
            var rdzsuuid = gt3.skxxList.trs[j].tds.rdzsuuid.value;
            if (rdpzuuid == rdzsuuid) {// 说明为当前税的 附税
                fjsList.push(gt3.skxxList.trs[j]);
            }
        }
        if (fjsList.length > 0) {
            swordConfirm("是否进行附加税申报?", {
                onCancel: function () {
                    return;
                },
                onOk: function () {
                    // 检验通过
                    // $w("skxxGrid").initData(gt3.skxxList);
                    var skxxGrid = $w("skxxGrid");
                    for (var j = 0; j < fjsList.length; j++) {
                        var row = skxxGrid.insertRow(fjsList[j]);
                        // 税费种认定的征收项目、品目、子目不能修改
                        row.getCell("zsxmDm").disable = "true";
                        row.getCell("zspmDm").disable = "true";
                        row.getCell("zszmDm").disable = "true";

                        // 获取税率
                        getHdslHSlxx(row, skxxGrid.getOneRowData(row));
                        // 计算税款
                        if (row.getCell("ysx").realvalue / 1 > 0) {
                            calTable(skxxGrid, row, skxxGrid
                                            .getOneRowData(row), 4);
                        }
                    }
                },
                width: 500,
                height: 400
            });
        }

    }
}
/**
 * 根据主税信息,配置参数表，添加附加税行
 * 
 * @param rowData
 */
function toAddRowFsxxByZsxxAndCsb(rowData) {
    var queryBtn = new SwordSubmit();
    var zsxmDm = rowData.getValue("zsxmDm");
    var zspmDm = rowData.getValue("zspmDm");
    // if($chk(zspmDm)&&("101016604"==zspmDm||"101016606"==zspmDm)){
    //		
    // }
    queryBtn.pushData("zsxmDm", zsxmDm);
    queryBtn.pushData("zspmDm", zspmDm);
    queryBtn.setCtrl(gt3.ctrl + '_getFsxxByZsxxAndCsb');
    queryBtn.setOptions({
        async: 'false',
        mask: 'false',
        ctrl: gt3.ctrl + '_getFsxxByZsxxAndCsb',
        onSuccess: function (req, res) {
            gt3.fjsList = pc.getResData("fjsList", res);
        }
    });
    queryBtn.submit();
    onSuccessGetFsxxByZsxxAndCsb(rowData);
}

function onSuccessGetFsxxByZsxxAndCsb(rowData) {
    var skxxGrid = $w('skxxGrid');
    var skssqq = rowData.getValue("sfkssqq");
    var skssqz = rowData.getValue("sfkssqz");
    var zspmDmY = rowData.getValue("zspmDm");
    var skxxGridRow = skxxGrid.getCheckedRow();
    var skxxGridRowData = skxxGrid.getCheckedRowData();
    // gt3.fjsList=pc.getResData("fjsList",res);
    if ($chk(gt3.fjsList) && gt3.fjsList.trs.length > 0) {
        swordConfirm("是否进行附加税申报?", {
            onCancel: function () {
                return;
            },
            onOk: function () {
                // 赋值当前行主税标志
                var rdpzuuid = zspmDmY + "0000000000" + new Date().getTime();
                skxxGrid.updateCell(skxxGridRow.getCell("rdpzuuid"), rdpzuuid);
                skxxGrid.updateCell(skxxGridRow.getCell("zfsbz"), "0");
                // skxxGrid.updateCell(skxxGridRow.getCell("rdzsuuid"), "");
                for (var j = 0; j < gt3.fjsList.trs.length; j++) {
                    var skxx = gt3.fjsList.trs[j];

                    var nsqxDm = skxx.tds.nsqxDm.value;
                    var zsxmDm = skxx.tds.zsxmDm.value;
                    var zspmDm = skxx.tds.zspmDm.value;
                    var zszsxmDm = skxx.tds.zsZsxmDm.value;
                    var sl = skxx.tds.sl.value;
                    var yhsl = "";
                    var yssdl = "";
                    var dataObj = {
                        tds: {
                            "rdzsuuid": {
                                value: rdpzuuid
                            },
                            "zsxmDm": {
                                value: zsxmDm
                            },
                            "zspmDm": {
                                value: zspmDm
                            },
                            "zszmDm": {
                                value: ''
                            },
                            "sfkssqq": {
                                value: skssqq
                            },
                            "sfkssqz": {
                                value: skssqz
                            },
                            "ysx": {
                                value: 0.0
                            },
                            "jcx": {
                                value: 0.0
                            },
                            "yssdl": {
                                value: yssdl
                            },
                            "jsfyj": {
                                value: ''
                            },
                            "sflhdwse": {
                                value: sl
                            },
                            "yhsl": {
                                value: ''
                            },
                            "sskcs": {
                                value: ''
                            },
                            "bqynsfe": {
                                value: ''
                            },
                            "bqjmsfe": {
                                value: 0
                            },
                            "bqyjsfe": {
                                value: ''
                            },
                            "bqybtsfe": {
                                value: ''
                            },
                            "jkqxDm": {
                                value: skxx.tds.jkqxDm.value
                                // 缴款期限代码
                            },
                            "nsqxDm": {
                                value: nsqxDm
                                // 纳税期限代码
                            },
                            "zszsxmDm": {
                                value: zszsxmDm
                                //  
                            },
                            "sbqxDm": {
                                value: skxx.tds.sbqxDm.value
                                // 申报期限代码
                            }
                        }
                    };
                    var row = skxxGrid.insertRow(dataObj);
                    if ("10109" != zsxmDm) {
                        row.getCell("zspmDm").disable = "true";
                    }
                    // row.getCell("zszmDm").disable = "true";
                    // 征收项目不可修改
                    row.getCell("zsxmDm").disable = "true";
                    getHdslHSlxx(row, skxxGrid.getOneRowData(row));
                    var rowData = skxxGrid.getOneRowData(row);
                    calTable(skxxGrid, row, rowData, 4);
                    // bz = 1;
                }
            },
            width: 500,
            height: 400
        });
    }
}

/*******************************************************************************
 * 征收子目改变
 * 
 * @param {}
 *            option
 * @param {}
 *            selItem
 * @param {}
 *            obj
 */
function changeZszm(option, selItem, obj) {
    var skxxGrid = $w('skxxGrid');
    var row = skxxGrid.getCheckedRow();
    var rowData = skxxGrid.getCheckedRowData();
    // 获取税款标志 1 公共方法 0核定信息
    // var slbz = rowData.getValue("slbz");
    // 税率从核定信息获取则不再获取税率
    // if ($chk(slbz) && slbz != "1") {
    // return;
    // }
    var zsxmDm = rowData.getValue("zsxmDm");
    var zspmDm = rowData.getValue("zspmDm");
    var sfkssqq = rowData.getValue("sfkssqq");
    var sfkssqz = rowData.getValue("sfkssqz");
    var zszmDm = selItem.code;
    var sl = 0;
    var yhsl = 0;
    var yssdl = 1;
    var sskcs = 0;
    var ysx = row.getCell("ysx").get("realvalue") / 1;
    var jcx = row.getCell("jcx").get("realvalue") / 1;

    var sybz = row.getCell("sybzDm1").get("realvalue");// 税源标志
    // 重置减免性质、减免税额
    toResetSsjmxz(row, 3);
    // 通用申报
    if (!$chk(sybz)) {
        // 清除认定凭证uuid与主税uuid
        // skxxGrid.updateCell(row.getCell("rdpzuuid"), "");
        // skxxGrid.updateCell(row.getCell("rdzsuuid"), "");

        var skxxList = gt3.skxxList.trs;
        for (var i = 0; i < skxxList.length; i++) {
            var skZsxmDm = skxxList[i].tds.zsxmDm.value;
            var skZspmDm = skxxList[i].tds.zspmDm.value;
            var skZszmDm = skxxList[i].tds.zszmDm.value;
            var sfsfzrd = skxxList[i].tds.sfsfzrd.value;
            // 考虑清空征收子目的情况
            if ($chk(zszmDm)) {
                if (skZsxmDm == zsxmDm && zspmDm == skZspmDm
						&& skZszmDm == zszmDm && sfsfzrd == "Y") {
                    skxxGrid.updateRow(row, skxxList[i]);
                    getHdslHSlxx(row, skxxGrid.getCheckedRowData());
                    calTable(skxxGrid, row, skxxGrid.getOneRowData(row
									.getCell("xh")), 1);
                    // 带出的征收品目不能修改
                    // row.getCell("zszmDm").disable = "true";
                    return;
                }
            } else {

                if (!$chk(skZszmDm) && skZsxmDm == zsxmDm && zspmDm == skZspmDm
						&& sfsfzrd == "Y") {
                    skxxGrid.updateRow(row, skxxList[i]);
                    getHdslHSlxx(row, skxxGrid.getCheckedRowData());
                    calTable(skxxGrid, row, skxxGrid.getOneRowData(row
									.getCell("xh")), 1);
                    // 带出的征收品目不能修改
                    // row.getCell("zszmDm").disable = "true";
                    return;
                }
            }
        }
    }
    // 获取税率
    getHdslHSlxx(row, skxxGrid.getCheckedRowData());
    // 重置优惠税率、优惠税额
    if (!$chk(zszmDm)) {
        skxxGrid.updateCell(row.getCell("yhsl"), 0.0);
        skxxGrid.updateCell(row.getCell("yhje"), 0.0);
        skxxGrid.updateCell(row.getCell("ssjmxzDm"), "");
        rowData.tds.yhsl.value = 0;
        rowData.tds.yhje.value = 0;
    }
    // 计算
    calTable(skxxGrid, row, rowData, 4);
}

/*******************************************************************************
 * 获取征收核定信息
 * 
 * @param {}
 *            djxh 登记序号
 * @param {}
 *            ssqq 税款所属期起
 * @param {}
 *            ssqz 税款所属期止
 * @param {}
 *            zsxmDm 征收项目
 * @param {}
 *            zspmDm 征收品目
 * @return {}
 */

function getHdxx(ssqq, ssqz, zsxmDm, zspmDm, zszmDm) {
    var arr = new Array();
    var slBtn = new SwordSubmit();
    slBtn.pushData("zsxmDm", zsxmDm);
    slBtn.pushData("zspmDm", zspmDm);
    slBtn.pushData("zszmDm", zszmDm);
    slBtn.pushData("djxh", gt3.djxh);
    slBtn.pushData("ssqq", ssqq);
    slBtn.pushData("ssqz", ssqz);
    slBtn.setCtrl(gt3.ctrl + "_getHdxx");
    slBtn.setOptions({
        "onSuccess": function (req, res) {
            var sl = res.getAttr("sl") / 1;// 税率
            var jsyj = res.getAttr("jsyj") / 1;// 应税项
            var hdse = res.getAttr("hdse") / 1;// 是否查询到数据
            var jsbz = res.getAttr("jsbz");// 计税标志（个人所得税用）
            var yssdl = res.getAttr("yssdl") / 1;
            arr.push(sl, jsyj, hdse, yssdl, jsbz);
        }
    });
    slBtn.submit();
    return arr;
}

/*******************************************************************************
 * 获取税率,优惠税率，应税所得率
 * 
 * @param {}
 *            zsxmDm 征收项目代码
 * @param {}
 *            zspmDm 征收品目代码
 * @param {}
 *            zszmDm 征收子目代码
 * @return {} Array 税率,优惠税率，应税所得率
 */
function getSl(zsxmDm, zspmDm, zszmDm, skssqq, skssqz) {
    var arr = new Array();
    var slBtn = new SwordSubmit();
    slBtn.pushData("zsxmDm", zsxmDm);
    slBtn.pushData("zspmDm", zspmDm);
    slBtn.pushData("zszmDm", zszmDm);
    slBtn.pushData("skssqq", skssqq);
    slBtn.pushData("skssqz", skssqz);
    slBtn.setCtrl(gt3.ctrl + "_getSl");
    slBtn.setOptions({
        "onSuccess": function (req, res) {
            var sl = res.getAttr("sl") / 1;// 税率
            var yhsl = res.getAttr("yhsl") / 1;// 优惠税率
            var yssdl = res.getAttr("yssdl") / 1;// 应税所得率
            var ssjmxzDm = res.getAttr("ssjmxzDm");// 应税所得率
            arr.push(sl, yhsl, yssdl, ssjmxzDm);
        }
    });
    slBtn.submit();
    return arr;
}

/*******************************************************************************
 * 个人所得税获取税率信息
 * 
 * @param {}
 *            zsxmDm 征收项目
 * @param {}
 *            zspmDm 征收品目
 * @param {}
 *            zszmDm 征收子目
 * @param {}
 *            skssqq 税款所属期起
 * @param {}
 *            skssqz 税款所属期止
 * @param {}
 *            xssr 应税项
 * @param {}
 *            jcx 减除项 jsbz 计税标志 yssdl 应税所得率
 * @return {}
 */
function getGrsdsJs(zsxmDm, zspmDm, zszmDm, skssqq, skssqz, ysx, jcx, jsbz,
		yssdl) {
    var arr = new Array();
    var slBtn = new SwordSubmit();
    slBtn.pushData("zsxmDm", zsxmDm);
    slBtn.pushData("zspmDm", zspmDm);
    slBtn.pushData("zszmDm", zszmDm);
    slBtn.pushData("skssqq", skssqq);
    slBtn.pushData("skssqz", skssqz);
    slBtn.pushData("yssdl", yssdl);
    slBtn.pushData("djxh", gt3.djxh);
    slBtn.pushData("ysx", ysx);
    slBtn.pushData("jsbz1", jsbz);
    slBtn.pushData("jcx", jcx);
    slBtn.setCtrl(gt3.ctrl + "_getGrsdsJs");
    slBtn.setOptions({
        "onSuccess": function (req, res) {
            var sl = res.getAttr("sl") / 1;// 税率
            var yhsl = res.getAttr("yhsl") / 1;// 优惠税率
            var yssdl = res.getAttr("yssdl") / 1;// 应税所得率
            var sskcs = res.getAttr("sskcs") / 1;// 速算扣除数
            var jsyj = res.getAttr("jsyj") / 1;// 速算扣除数
            var jsbz = res.getAttr("jsbz") / 1;// 计税标志
            var ysbse = res.getAttr("ysbse") / 1;// 已申报税额
            var ynse = res.getAttr("ynse") / 1;// 应纳税额
            var dqjsFlag = res.getAttr("dqjsFlag");// 是否当前计税
            arr.push(sl, yhsl, yssdl, sskcs, jsyj, jsbz, ysbse, ynse, dqjsFlag);
        }
    });
    slBtn.submit();
    return arr;
}

/*******************************************************************************
 * 获取土地增值税税率
 * 
 * @param {}
 *            ysx 应税项
 * @param {}
 *            jcx 减除项
 * @param {}
 *            zsxmDm 征收项目
 * @param {}
 *            zspmDm 征收品目
 * @param {}
 *            zszmDm 征收子目
 * @param {}
 *            skssqq 税款所属期起
 * @param {}
 *            skssqz 税款所属期止
 * @return {} arr 税率、优惠税率、应税所得率、速算扣除数
 */
function getTdzzsSl(ysx, jcx, zsxmDm, zspmDm, zszmDm, skssqq, skssqz, sybh) {
    var arr = new Array();
    var slBtn = new SwordSubmit();
    slBtn.pushData("djxh", gt3.djxh);
    slBtn.pushData("ysx", ysx);
    slBtn.pushData("jcx", jcx);
    slBtn.pushData("zsxmDm", zsxmDm);
    slBtn.pushData("zspmDm", zspmDm);
    slBtn.pushData("zszmDm", zszmDm);
    slBtn.pushData("skssqq", skssqq);
    slBtn.pushData("skssqz", skssqz);
    slBtn.pushData("sybh", sybh);
    slBtn.setCtrl(gt3.ctrl + "_getTdzzsSl");
    slBtn.setOptions({
        "onSuccess": function (req, res) {
            var sl = res.getAttr("sl") / 1;
            var yhsl = res.getAttr("yhsl") / 1;
            var yssdl = res.getAttr("yssdl") / 1;
            var sskcs = res.getAttr("sskcs") / 1;
            arr.push(sl, yhsl, yssdl, sskcs);
        }
    });
    slBtn.submit();
    return arr;
}

/*******************************************************************************
 * 获取税款所属期
 * 
 * @param {}
 *            nsqxDm 纳税期限代码
 * @param {}
 *            sbrq 申报日期
 * @param {}
 *            dqbz 当期标志 Y当期 N上期
 * @return {Array} skssqq 税款所属期起, skssqz 税款所属期止
 */
function getSsq(nsqxDm, sbrq, dqbz, ssqq, ssqz) {
    var arr = new Array();
    var ssqBtn = new SwordSubmit();
    ssqBtn.pushData("nsqxDm", nsqxDm);
    ssqBtn.pushData("sbrq", sbrq);
    ssqBtn.pushData("dqbz", dqbz);
    ssqBtn.pushData("ssqq", ssqq);
    ssqBtn.pushData("ssqz", ssqz);
    ssqBtn.setCtrl(gt3.ctrl + "_getSsq");
    ssqBtn.setOptions({
        "onSuccess": function (req, res) {
            var skssqq = res.getAttr("skssqq");// 税款所属期起
            var skssqz = res.getAttr("skssqz");// 税款所属期止
            arr.push(skssqq, skssqz);
        }
    });
    ssqBtn.submit();
    return arr;
}

/*******************************************************************************
 * 动态加载征收项目
 * 
 * @param {}
 *            dataObj
 * @param {}
 *            inputEl
 * @param {}
 *            obj
 * @return {}
 */
function zsxmFilter(dataObj, inputEl, obj) {
    var newData = [];
    var row = $w("skxxGrid").getRow(inputEl);
    if (!$chk(row)) {
        return dataObj;
    }
    var rowData = $w("skxxGrid").getOneRowData(inputEl);
    var sybz = rowData.getValue("sybzDm1");
    if (!$chk(sybz)) {
        newData = gt3.zsxmData;
    }
    return newData;
}

/*******************************************************************************
 * 动态加载征收品目
 * 
 * @param {}
 *            dataObj
 * @param {}
 *            inputEl
 * @param {}
 *            obj
 * @return {}
 */
function zspmFilter(dataObj, inputEl, obj) {
    var newData = [];
    var row = $w("skxxGrid").getRow(inputEl);
    if (!$chk(row)) {
        if (dataObj !== gt3.zspmData) {
            gt3.zspmData.each(function (item, index) {
                newData[newData.length] = item;
            });
        }
        // return dataObj;
        dataObj.each(function (item, index) {
            newData[newData.length] = item;
        });
        return newData;
    }
    var rowData = $w("skxxGrid").getOneRowData(inputEl);
    var zsxmDm = rowData.getValue("zsxmDm");
    var zsZsxmDm = rowData.getValue("zszsxmDm");
    var rdzsuuid = rowData.getValue("rdzsuuid");
    if (!$chk(zsZsxmDm)) {
        for (var i = 0; i < gt3.skxxList.trs.length; i++) {
            var rdpzuuid = gt3.skxxList.trs[i].tds.rdpzuuid.value;
            if (rdzsuuid == rdpzuuid) {
                zsZsxmDm = gt3.skxxList.trs[i].tds.zsxmDm.value;
            }
        }
    }
    if (zsxmDm == "10109") {
        if (zsZsxmDm == "10101") {
            gt3.zspmData.each(function (item, index) {
                if (item.pcode == zsxmDm && (item.code == "101090101" || item.code == "101090201" || item.code == "101090201"))
                    newData[newData.length] = item;
            });
            return newData;
        } else if (zsZsxmDm == "10103") {
            gt3.zspmData.each(function (item, index) {
                if (item.pcode == zsxmDm && (item.code == "101090102" || item.code == "101090202" || item.code == "101090202"))
                    newData[newData.length] = item;
            });
            return newData;
        } else if (zsZsxmDm == "10102") {
            gt3.zspmData.each(function (item, index) {
                if (item.pcode == zsxmDm && (item.code == "101090103" || item.code == "101090203" || item.code == "101090203"))
                    newData[newData.length] = item;
            });
            return newData;
        }
    }
    var sybz = rowData.getValue("sybzDm1");
    if (sybz == 2) {
        gt3.bdcZspmData.each(function (item, index) {
            if (item.pcode == zsxmDm)
                newData[newData.length] = item;
        });
    } else if (sybz == 3) {
        gt3.xmZspmData.each(function (item, index) {
            if (item.pcode == zsxmDm)
                newData[newData.length] = item;
        });
    } else if (sybz == 1 || sybz == 4) {
        dataObj.each(function (item, index) {
            if (item.pcode == zsxmDm)
                newData[newData.length] = item;
        });
        return newData;
    } else {
        gt3.zspmData.each(function (item, index) {
            if (item.pcode == zsxmDm)
                newData[newData.length] = item;
        });
        return newData;
    }
    return newData;
}

/*******************************************************************************
 * 动态加载征收子目
 * 
 * @param {}
 *            dataObj
 * @param {}
 *            inputEl
 * @param {}
 *            obj
 */
function zszmFilter(dataObj, inputEl, obj) {
    var newData = [];
    var row = $w("skxxGrid").getRow(inputEl);
    if (!$chk(row)) {
        dataObj.each(function (item, index) {
            newData[newData.length] = item;
        });
        return dataObj;
    }
    var rowData = $w("skxxGrid").getCheckedRowData();
    var zspmDm = rowData.getValue("zspmDm");
    var sybz = rowData.getValue("sybzDm1");
    var newData = [];
    if (sybz == 2) {
        gt3.bdcZszmData.each(function (item, index) {
            if (item.pcode == zspmDm)
                newData[newData.length] = item;
        });
    } else if (sybz == 3) {
        gt3.xmZszmData.each(function (item, index) {
            if (item.pcode == zspmDm)
                newData[newData.length] = item;
        });
    } else {
        gt3.zszmData.each(function (item, index) {
            if (item.pcode == zspmDm)
                newData[newData.length] = item;
        });
    }
    return newData;
}

/*******************************************************************************
 * 保存前监控
 */
function declare() {
    swordConfirm("您是否确认填写无误，提交申报?", {
        onOk: function saveBefore() {
            if (!$w("nsrxxForm").validate()) {
                return;
            } else if (!$w("skxxGrid").validate()) {
                return;
            } else if ($w("skxxGrid").totalRows() == 0) {
                swordAlert("税款信息不能为空");
                return;
            } else if (!saveBeforeCheck()) {
                return;
            }
            save();
        },
        onCancel: function () {
            return;
        }
    });
}

/**
 * 保存按钮事件
 * 
 * @return
 */
function save() {
    // 错误更正保存
    if (gt3.scenceCs == "cwgzbz") {
        if (saveBeforeCheck()) {
            var skxxGrid = $w("skxxGrid").getCurPageGridData();
            var nsrxxForm = $w("nsrxxForm").getSubmitData();
            var saveBtn = new SwordSubmit();
            // 屏蔽错误更正保存前提示
            // if(sbcwgzJs!='sbcwgzJs'){
            // saveBtn.pushData("sbcwgzJs",'sbcwgzJs');
            // }else{
            // saveBtn.pushData("sbcwgzJs",'sbcwgzSv');
            // }
            saveBtn.pushData("sbcwgzJs", 'sbcwgzSv');
            saveBtn.setCtrl("SB175FxmtysbCtrl_cwgzSave");
            saveBtn.setFunction('onSuccess', 'saveSuccess');
            saveBtn.pushData(nsrxxForm);
            saveBtn.pushData("djxh", gt3.djxh);
            saveBtn.pushData("zrrBz", gt3.zrrBz);
            saveBtn.pushData("sbuuid", gt3.sbuuid);
            saveBtn.pushData("pzxh", gt3.pzxh);
            saveBtn.pushData("sbbList", gt3.sbbList);
            saveBtn.pushData("scenceCs", gt3.scenceCs);
            saveBtn.pushData("bsr", $w("slxxForm").getValue("bsr"));
            saveBtn.pushData("hyDm", $w("nsrxxForm").getValue("hyDm"));
            saveBtn.pushData("xzqhszDm", $w("nsrxxForm").getValue("xzqhszDm"));
            var jdxzDm = "";
            saveBtn.pushData("jdxzDm", $w("nsrxxForm").getValue("jdxzDm").code);
            saveBtn.pushData("zgswskfjDm", $w("nsrxxForm")
							.getValue("zgswskfjDm"));
            saveBtn.pushData(jsList);
            saveBtn.pushData(skxxGrid);
            saveBtn.submit();
        }
    } else {
        if (saveBeforeCheck()) {
            var saveBtn = new SwordSubmit();
            saveBtn.setCtrl("SB175FxmtysbCtrl_saveData");
            saveBtn.setFunction('onSuccess', 'saveSuccess');
            var nsrxxForm = $w("nsrxxForm").getSubmitData();
            saveBtn.pushData(nsrxxForm);
            saveBtn.pushData("djxh", gt3.djxh);
            saveBtn.pushData("zrrBz", gt3.zrrBz);
            saveBtn.pushData("scenceCs", gt3.scenceCs);
            saveBtn.pushData("bsr", $w("slxxForm").getValue("bsr"));
            saveBtn.pushData("hyDm", $w("nsrxxForm").getValue("hyDm"));
            saveBtn.pushData("xzqhszDm", $w("nsrxxForm").getValue("xzqhszDm"));
            saveBtn.pushData("jdxzDm", $w("nsrxxForm").getValue("jdxzDm").code);
            saveBtn.pushData("zgswskfjDm", $w("nsrxxForm")
							.getValue("zgswskfjDm"));
            saveBtn.pushData("zxbztzsuuid", gt3.zxbztzsuuid);
            var skxxGrid = $w("skxxGrid").getCurPageGridData();
            var cells = $w("skxxGrid").getCells("sybzDm1");
            var len = cells.length;
            for (var i = 0; i < len; i++) {
                var cellval = cells[i].get("realvalue");
                if (cellval != null || cellval != "") {
                    gt3.tzBz = "Y";
                }
            }
            saveBtn.pushData(jsList);
            saveBtn.pushData(skxxGrid);
            saveBtn.submit();
        }
    }

}

/*******************************************************************************
 * 保存成功
 * 
 * @param {}
 *            req
 * @param {}
 *            resData
 */
function saveSuccess(req, resData) {
    gt3.resData = resData;
    var returnVO = pc.getResData("sbsaveReturnVO", resData);
    sbcwgzJs = resData.getAttr('sbcwgzJs');
    if (sbcwgzJs == 'sbcwgzJs') {
        var pzxhPre = returnVO.data.pzxh.value;
        var ybtse = returnVO.data.ybtse.value;
        sbcwgzGyjs(pzxhPre, ybtse, gt3.djxh, resData, 'save', null);
        yzpzxh = pzxhPre;
    } else {
        var returnBz = returnVO.data.returnBz.value;
        gt3.pzxh = returnVO.data.pzxh.value;
        gt3.ybtse = returnVO.data.ybtse.value;
        if (returnBz == "Y") {
            fromYbSBJumpZskp(gt3.pzxh, gt3.ybtse, gt3.djxh, gt3.resData);
            toolBarCtl("fxmtysbToolBar", ["zskpBtn"], "disabled");
        }
        toolBarCtl("fxmtysbToolBar", ["save", "import"], "disabled");
        toolBarCtl("fxmtysbToolBar", ["zskpBtn", "print"], "enabled");
        $w("nsrxxForm").disable();
        $w("skxxGrid").readonly();
        $w("slxxForm").disable();
        yzpzxh = gt3.pzxh;
    }
    toolBarCtl("fxmtysbToolBar", ["printHz"], "enabled");
    toolBarCtl("fxmtysbToolBar", ["print"], "enabled");
    if (gt3.scenceCs != 'cwgzbz') {
        // 电子档案
        var swjgDm = pc.getResData("swjgDm", resData).value;
        var nsrxxForm = $w('nsrxxForm');
        var flzlGridData = $w('flzlGrid').getCheckedData("check");
        saveSxslxx(returnVO.data.pzxh.value, gt3.djxh, nsrxxForm.getValue('nsrsbh'), nsrxxForm.getValue('nsrmc'), 'SLSXA061001020', 'LCSXA061001019', swjgDm, flzlGridData);
    }
}

/**
 * 申报错误更正不保存
 * 
 * @return
 */
function sbcwgzNotSave() {
    sbcwgzJs = '';// 清空
    $w('fxmtysbToolBar').setEnabled('save');// 点亮保存按钮
}
/*******************************************************************************
 * 征收开票
 * 
 * @return
 */
function zskp() {
    swordConfirm("是否进行一般征收开票", {
        okBtnName: "是",
        cancelBtnName: "否",
        onOk: function () {
            fromYbSBJumpZskp(gt3.pzxh, gt3.ybtse, gt3.djxh, gt3.resData);
            toolBarCtl("fxmtysbToolBar", ["zskpBtn"], "disabled");
        },
        onCancel: function () {
            notJumpZskp();
        }
    });
}

/*******************************************************************************
 * 不进行征收开票跳转
 * 
 * @param $_saveResData
 * @return
 */
function notJumpZskp($_saveResData) {

}

/*******************************************************************************
 * 
 * 点击删行触发的事件
 */
function deleteRows() {
    var rows = $w("skxxGrid").getCheckedRow("xz");
    if (rows == null || rows.length == 0) {
        swordAlert('请选择需要删除的行!');
    } else {
        // swordConfirm('是否确认删除所选税款信息?', {
        // okBtnName : "是",
        // cancelBtnName : "否",
        // onOk : function() {
        rows.each(function (row, index) {
            $w("skxxGrid").deleteRow(row);
        });
        // if ($w("skxxGrid").getAllNoDeleteGridData().trs.length == 1)
        // {
        // toolBarCtl("fxmtysbToolBar", ["save"], "disabled");
        // }
        $w("skxxGrid").refreshConsole();
        // },
        // onCancel : function() {
        // }
        // });
    }

}
/**
 * @param toolBarName
 *            工具条名称
 * @param arr
 *            需要控制的按钮name
 * @param flag
 *            彩色还是黑白
 */
function toolBarCtl(toolBarName, arr, flag) {
    if (flag == "disabled") {
        arr.each(function (value, key) {
            $w(toolBarName).setDisabled(value);
        });
    } else if (flag == "enabled") {
        arr.each(function (value, key) {
            $w(toolBarName).setEnabled(value);
        });
    }
}
/**
 * 修改框架Grid鼠标移动监听，改变行色
 * 
 * @param {}
 *            grid
 */
function mouseMove() {
    var grid = $w("skxxGrid");
    grid.eDelegator.add('mouseenter', function (e, defEl) {
        var sybh1 = grid.getOneRowData(defEl).getValue("sybh1");
        if (!$chk(sybh1)) {
            return;
        }
        defEl.addClass('sGrid_data_row_div_hover');
        var rowEls = grid.dataDiv()
                .getElements("div.sGrid_data_row_div");
        var cclass = "sGrid_data_row_div_hover";
        var len = rowEls.length;
        for (var i = 0; i < len; i++) {
            var sybh1val = grid.getOneRowData(rowEls[i])
                    .getValue("sybh1");
            rowEls[i].removeClass(cclass);
            if (sybh1 == sybh1val) {
                rowEls[i].addClass(cclass);
            }
        }
    }, 'div.sGrid_data_row_div');
    grid.eDelegator.add('mouseleave', function (e, defEl) {
        var sybh1 = grid.getOneRowData(defEl).getValue("sybh1");
        if (!$chk(sybh1)) {
            return;
        }
        defEl.removeClass('sGrid_data_row_div_hover');
        var rowEls = grid.dataDiv().getElements("div.sGrid_data_row_div_hover");
        var cclass = "sGrid_data_row_div_hover";
        var len = rowEls.length;
        for (var i = 0; i < len; i++) {
            var sybh1val = grid.getOneRowData(rowEls[i]).getValue("sybh1");
            if (sybh1 == sybh1val) {
                rowEls[i].removeClass(cclass);
            }
        }
    }, 'div.sGrid_data_row_div');
}
/**
 * 主副税联动，删除用
 * 
 */
function getdelete(rowData, rowEl, e) {
    // var zfsbz = rowData.getValue("zfsbz");// 主副税标志 0主税 1副税
    // var rdzsuuid = rowData.getValue("rdzsuuid");// 主税uuid
    // var rdpzuuid = rowData.getValue("rdpzuuid");// 当前uuid
    var sybh1 = rowData.getValue("sybh1");// 当前点击行税源编号
    var xmxh = rowData.getValue("xmxh");// 项目序号
    // 不是项目申报的，不联动
    if (!$chk(sybh1)) {
        return;
    }
    var zsxmDm = rowData.getValue("zsxmDm");
    var skxxGrid = $w("skxxGrid");
    var rowEls = skxxGrid.dataDiv().getChildren();
    var len = rowEls.length;
    if (zsxmDm == "10103" || zsxmDm == '10109' || zsxmDm == '30203'
			|| zsxmDm == '30127' || zsxmDm == '30216') {
        for (var i = 0; i < len; i++) {
            var rowData = skxxGrid.getOneRowData(rowEls[i]);
            var zsxmDm2 = rowData.getValue("zsxmDm");
            var sybh2 = skxxGrid.getOneRowData(rowEls[i]).getValue("sybh1");
            var xmxh2 = skxxGrid.getOneRowData(rowEls[i]).getValue("xmxh");
            if (sybh1 == sybh2
					&& xmxh == xmxh2
					&& (zsxmDm2 == "10103" || zsxmDm2 == '10109'
							|| zsxmDm2 == '30203' || zsxmDm2 == '30127' || zsxmDm2 == '30216')) {
                if (rowEl.getCell("xz").getFirst("input[type=checkbox]")
						.get("checked")) {
                    rowEls[i].getCell("xz").getFirst("input[type=checkbox]")
							.set("checked", true);
                } else {
                    rowEls[i].getCell("xz").getFirst("input[type='checkbox']")
							.set("checked", false);
                }
            }
        }

    }

}

/*******************************************************************************
 * 导入
 */
function drxx() {
    var gydrctrl = gt3.ctrl + "_getDrxx";// 导入处理自定义的ctrl
    var drxxBtn = new SwordSubmit();
    if ($chk(gt3.djxh)) {
        drxxBtn.pushData('djxh', gt3.djxh);
    }
    drxxBtn.pushData('gydrCtrl', gydrctrl);
    drxxBtn.setCtrl('GYDrCtrl_openDr');// 公用导入方法
    swordAlertIframe('', {
        titleName: "申报信息导入",
        width: 600,
        height: 450,
        param: window,
        isNormal: 'true',
        isMax: 'true',
        isClose: 'true',
        isMin: "true",
        submit: drxxBtn
    });
}

/*******************************************************************************
 * 导入功能页面表单数据信息回填方法
 * 
 * @param {}
 *            resData
 */
function boxCallBackForSBdr(resData) {
    resData = JSON.decode(JSON.encode(resData));
    // 修改此时的申报渠道属性
    gt3.scenceCs = "sbdr";

    var skxxGrid = pc.getResData("skxxGrid", resData);
    var nsrxxForm = pc.getResData("nsrxxForm", resData);
    $w("skxxGrid").initData(skxxGrid);
    $w("nsrxxForm").initData(nsrxxForm);

    // 页面表单头部信息全部置灰并将所有页面表单锁死不允许填写
    $w("nsrxxForm").disable();
    $w("skxxGrid").readonly();

    var nsrxxFormObj = $w('nsrxxForm');
    var nsrsbh = nsrxxFormObj.getValue("nsrsbh");
    var cxbz = "10";// 4.查询自然人和纳税人（纳税人需要权限过滤）；

    queryNsrxxbyNsrsbh(nsrsbh, queryNsrxxSuccess, cxbz);
}

/*******************************************************************************
 * 重置
 */
function reset() {
    // 网报特有
    var saveBtn = new SwordSubmit();
    saveBtn.options.postType = "form";
    saveBtn.setCtrl("SB175FxmtysbCtrl_initView");
    saveBtn.submit();
    // // 错误更正时页面重置
    // if (gt3.scenceCs == 'cwgzbz') {
    // var test = new SwordSubmit();
    // test.options.postType = "form";
    // test.setCtrl("SB057SbcwgzCtrl_initView");
    // test.submit();
    // } else {
    // top.$w("tab1").refreshCurrentTabItem();
    // }
}

/*******************************************************************************
 * 打印
 */
function print() {
    printhtm();
}

function fxmtysbprint() {
    var nsrxxForm = $w("nsrxxForm").getSubmitData();
    var slxxForm = $w("slxxForm").getSubmitData();
    var skxxGrid = $w("skxxGrid").getAllNoDeleteGridData();
    var bqYnsfeHj = 0.00;
    var bqJmsfeHj = 0.00;
    var bqYjsfeHj = 0.00;
    var bqYbtsfeHj = 0.00;
    if ($chk($w("skxxGrid"))) {
        var hjRow = $w('skxxGrid').hjRow;// 取到合计div元素
        var HjDiv = hjRow.getElements("div");// 取到合计cell数组
        bqYnsfeHj = HjDiv[15].get("realvalue");
        bqJmsfeHj = HjDiv[16].get("realvalue");
        bqYjsfeHj = HjDiv[18].get("realvalue");
        bqYbtsfeHj = HjDiv[19].get("realvalue");
    }
    var printBtn = new SwordSubmit();
    printBtn.pushData(nsrxxForm);
    printBtn.pushData(slxxForm);
    printBtn.pushData(skxxGrid);
    printBtn.pushData("bqYnsfeHj", bqYnsfeHj);
    printBtn.pushData("bqJmsfeHj", bqJmsfeHj);
    printBtn.pushData("bqYjsfeHj", bqYjsfeHj);
    printBtn.pushData("bqYbtsfeHj", bqYbtsfeHj);
    printBtn.setCtrl(gt3.ctrl + "_print");
    swordOpenWin('/sword?ctrl=' + gt3.ctrl + '_print&r=' + Math.random(),
    printBtn);
}

/*******************************************************************************
 * 打印回执
 */
function printHz() {
    var printBtn = new SwordSubmit();
    printBtn.pushData("yzpzxh", yzpzxh);
    printBtn.pushData("sbbmc", "通用申报回执");
    printBtn.setCtrl("SBDyCtrl" + "_printHz");
    swordOpenWin('/sword?ctrl=' + "SBDyCtrl" + '_printHz&r=' + Math.random(),
			printBtn);
}
/*******************************************************************************
 * 更新起征点信息，将新的起征点信息增加到原有信息中
 * 
 * @param {}
 *            list
 */
function updateQzdxx(list) {
    if (!$chk(list)) {
        return;
    } else if (!$chk(gt3.qzdList)) {
        gt3.qzdList = list;
        return;
    }
    var datas = list.trs;
    for (var i = 0; i < datas.length; i++) {
        gt3.qzdList.trs.include(datas[i]);
    }
}

/*******************************************************************************
 * 单行计算时查询起征点信息
 * 
 * @return arr 已申报金额，免征额度
 */
function queryQzdxx(rowData, row) {
    var arr = new Array();
    var queryBtn = new SwordSubmit();
    var nsrxxForm = $w("nsrxxForm");
    var sfkssqq = rowData.getValue("sfkssqq");
    var sfkssqz = rowData.getValue("sfkssqz");
    var zsxmDm = rowData.getValue("zsxmDm");

    // 所属期不能为空
    if ($chk(sfkssqq) && $chk(sfkssqz)) {
        var qzdje = 0;
        var ysbje = 0;
        var mzed = 0;
        var sfxswdqzdjm = "N";
        var mesg = "";
        queryBtn.pushData("djxh", gt3.djxh);
        queryBtn.pushData("skssqq", sfkssqq);
        queryBtn.pushData("skssqz", sfkssqz);
        queryBtn.pushData("zsxmDm", zsxmDm);
        queryBtn.setCtrl("SB175FxmtysbCtrl_queryQzdxx");
        queryBtn.setOptions({
            'onSuccess': function (req, res) {
                qzdje = res.getAttr("qzdje");
                ysbje = res.getAttr("ysbje");
                sfxswdqzdjm = res.getAttr("sfxswdqzdjm");
                mesg = res.getAttr("mesg");
                var ysxjHj = getYsxHj(rowData);// 该税种应税项合计
                // 错误更正时,需要减去更正前的已申报;
                if (gt3.scenceCs == "cwgzbz") {
                    var gzqje = getGzqje(zsxmDm, sfkssqq, sfkssqz);
                    ysbje = isPositive((ysbje / 1).subtract(gzqje / 1));
                }
                // ysbje= isPositive((ysbje / 1)
                // .subtract(ysxjHj / 1));
                mzed = (qzdje / 1).subtract(ysbje / 1);
                // 拼装该起征点信息list
                var qzdList = {
                    type: "SwordGrid",
                    name: "qzdList",
                    trs: new Array()
                };
                var qzdObj = {
                    tds: {
                        "qzdje": {
                            value: qzdje
                        },
                        "ysbje": {
                            value: ysbje
                        },
                        "ssq": {
                            value: sfkssqq + "||" + sfkssqz
                        },
                        "zsxmDm": {
                            value: zsxmDm
                        },
                        "sfxswdqzdjm": {
                            value: sfxswdqzdjm
                        },
                        "mesg": {
                            value: mesg
                        }
                    }
                }
                qzdList.trs.push(qzdObj);
                updateQzdxx(qzdList);
                arr.push(ysbje, mzed, sfxswdqzdjm, mesg);
            }
        });
        queryBtn.submit();
    } else {
        arr.push(0, 0);
    }
    return arr;
}
function getGzqje(zsxmDm, skssqq, skssqz) {
    var trs = skxxGridfromgz.trs;
    var je = 0.0;
    for (var i = 0; i < trs.length; i++) {
        var zsxmDm_ = trs[i].tds.zsxmDm.value;
        var skssqq_ = trs[i].tds.sfkssqq.value;
        var skssqz_ = trs[i].tds.sfkssqz.value;
        var jsfyj = trs[i].tds.jsfyj.value;
        if (zsxmDm == zsxmDm_ && skssqq == skssqq_ && skssqz == skssqz_) {
            je = je.accAdd(jsfyj);
        }
    }
    return je;
}
/*******************************************************************************
 * 营业税或增值税免征处理
 */
function doYysOrZzsMz(rowData, bz) {
    var zsSkssqq = rowData.getValue("sfkssqq");
    var zsSkssqz = rowData.getValue("sfkssqz");
    var rdpzuuid = rowData.getValue("rdpzuuid");
    var zsZsxmDm = rowData.getValue("zsxmDm");
    var zspmDm = rowData.getValue("zspmDm");
    var zsxmDm = rowData.getValue("zsxmDm");
    var sybh = rowData.getValue("sybh1");
    var ysx = rowData.getValue("ysx");
    var grid = $w("skxxGrid");
    var rows = grid.dataDiv().getChildren();
    var rowDatas = grid.getAllNoDeleteGridData().trs;
    for (var i = 0; i < rowDatas.length; i++) {
        var zsxmDm2 = rowDatas[i].getValue("zsxmDm");
        var zspmDm2 = rowDatas[i].getValue("zspmDm");
        var sfkssqq = rowDatas[i].getValue("sfkssqq");
        var sfkssqz = rowDatas[i].getValue("sfkssqz");
        var bqynsfe = rowDatas[i].getValue("bqynsfe");
        var rdzsuuid2 = rowDatas[i].getValue("rdzsuuid");
        var zfsbz2 = rowDatas[i].getValue("zfsbz");
        var sybh2 = rowDatas[i].getValue("sybh1");

        // 如果是应税项改变且为主税变化
        if (bz == 7 && zsZsxmDm == "10101" || zsZsxmDm == "10102"
				|| zsZsxmDm == "10103") {
            var ysxCell = rows[i].getCell("ysx");
            // 项目申报
            if ($chk(sybh) && sybh == sybh2 && sfkssqq == zsSkssqq
					&& sfkssqz == zsSkssqz) {
                if (zsxmDm2 == "30446" || zsxmDm2 == "30126" || zsxmDm2 == "30217"
						|| zsxmDm2 == "30138" || zsxmDm2 == "30221") {
                    // 文化事业建设费、堤围费、地方水利建设基金
                    grid.updateCell(ysxCell, emptyToZ(ysx));// 为主税应税项
                    calTable(grid, rows[i], rowDatas[i], 4);
                }
            } else if ($chk(rdpzuuid) && sfkssqq == zsSkssqq
					&& sfkssqz == zsSkssqz) {// 通用申报
                if (((zsxmDm2 == "30446" || zsxmDm2 == "30126" || zsxmDm2 == "30217" || zsxmDm2 == "30138" || zsxmDm2 == "30221") && rdpzuuid == rdzsuuid2)
						|| ((zspmDm.substring(0, 7) == "1010306" && (zspmDm2 == "301260100" || zspmDm2 == "302170100")) || ((zspmDm2 == "301260200" || zspmDm2 == "302170200") && zspmDm == "101030708"))) {
                    // 堤围费、文化事业建设费、地方水利建设基金
                    // 需要对营业税（其他娱乐业、广告业）时，同时更新附税文化事业建设费的联动信息（娱乐业文化事业建设费，广告业文化事业建设费）
                    grid.updateCell(ysxCell, emptyToZ(ysx));// 为主税应税项
                    calTable(grid, rows[i], rowDatas[i], 4);
                }
            }
        }
        var bqynsfe = rows[i].getCell("bqynsfe").realvalue;// 更新后的本期应纳税额

        if (!$chk(sybh)) {
            // 营业税、增值税
            if (zsxmDm == "10103" || zsxmDm == "10101") {
                if (zsxmDm == zsxmDm2 && zsSkssqq == sfkssqq
						&& zsSkssqz == sfkssqz) {
                    grid.updateCell(rows[i].getCell("bqjmsfe"), bqynsfe);
                    grid.updateCell(rows[i].getCell("bqyjsfe"), "0.00");
                    grid.updateCell(rows[i].getCell("bqybtsfe"), "0.00");
                    grid.updateCell(rows[i].getCell("wdqzdbz"), "Y");
                    // 设置免征减免性质
                    toSetYysZzsJmxz(1, rows[i], zsxmDm, rowDatas[i]);
                } else if (
						(parseFjsxx(zsxmDm2, zspmDm2) == "1")
                    // (zsxmDm2 == "10109" || zsxmDm2 == "30127" || zsxmDm2 == '30216' || zsxmDm2 ==
                    // "30203" || zsxmDm2 == "30199")
						&& zsSkssqq == sfkssqq
						&& zsSkssqz == sfkssqz
						&& getZsZsxm(rdzsuuid2) == zsxmDm) {
                    grid.updateCell(rows[i].getCell("ysx"), "0.00");
                    grid.updateCell(rows[i].getCell("jcx"), "0.00");
                    grid.updateCell(rows[i].getCell("jsfyj"), "0.00");
                    grid.updateCell(rows[i].getCell("bqynsfe"), "0.00");
                    grid.updateCell(rows[i].getCell("bqjmsfe"), "0.00");
                    grid.updateCell(rows[i].getCell("bqyjsfe"), "0.00");
                    grid.updateCell(rows[i].getCell("bqybtsfe"), "0.00");
                }
            } else {
                if (zsxmDm == zsxmDm2 && zsSkssqq == sfkssqq
						&& zsSkssqz == sfkssqz) {
                    grid.updateCell(rows[i].getCell("bqjmsfe"), bqynsfe);
                    grid.updateCell(rows[i].getCell("bqyjsfe"), "0.00");
                    grid.updateCell(rows[i].getCell("bqybtsfe"), "0.00");
                    grid.updateCell(rows[i].getCell("wdqzdbz"), "Y");
                    toSetYysZzsJmxz(1, rows[i], zsxmDm, rowDatas[i]);

                }
            }
        } else {
            // 营业税、增值税
            if (zsxmDm == "10103" || zsxmDm == "10101") {
                if (zsxmDm == zsxmDm2 && zsSkssqq == sfkssqq
						&& zsSkssqz == sfkssqz) {
                    grid.updateCell(rows[i].getCell("bqjmsfe"), bqynsfe);
                    grid.updateCell(rows[i].getCell("bqyjsfe"), "0.00");
                    grid.updateCell(rows[i].getCell("bqybtsfe"), "0.00");
                    grid.updateCell(rows[i].getCell("wdqzdbz"), "Y");
                    // 设置免征减免性质
                    toSetYysZzsJmxz(1, rows[i], zsxmDm, rowDatas[i]);

                } else if ((zsxmDm2 == "10109" || zsxmDm2 == "30127" || zsxmDm2 == '30216' || zsxmDm2 == "30203")
						&& zsSkssqq == sfkssqq && zsSkssqz == sfkssqz) {
                    grid.updateCell(rows[i].getCell("ysx"), "0.00");
                    grid.updateCell(rows[i].getCell("jcx"), "0.00");
                    grid.updateCell(rows[i].getCell("jsfyj"), "0.00");
                    grid.updateCell(rows[i].getCell("bqynsfe"), "0.00");
                    grid.updateCell(rows[i].getCell("bqjmsfe"), "0.00");
                    grid.updateCell(rows[i].getCell("bqyjsfe"), "0.00");
                    grid.updateCell(rows[i].getCell("bqybtsfe"), "0.00");
                }
            } else {
                if (zsxmDm == zsxmDm2 && zsSkssqq == sfkssqq
						&& zsSkssqz == sfkssqz) {
                    grid.updateCell(rows[i].getCell("bqjmsfe"), bqynsfe);
                    grid.updateCell(rows[i].getCell("bqyjsfe"), "0.00");
                    grid.updateCell(rows[i].getCell("bqybtsfe"), "0.00");
                    grid.updateCell(rows[i].getCell("wdqzdbz"), "Y");
                    toSetYysZzsJmxz(1, rows[i], zsxmDm, rowDatas[i]);

                }
            }
        }
    }
}

/*******************************************************************************
 * 营业税或增值税不免征处理
 */
function doYysOrZzsNoMz(rowData, cshbz) {
    var zsSkssqq = rowData.getValue("sfkssqq");
    var zsSkssqz = rowData.getValue("sfkssqz");
    var zsxmDm = rowData.getValue("zsxmDm");
    var sybh = rowData.getValue("sybh1");
    var bqjmsfe = rowData.getValue("bqjmsfe");
    var grid = $w("skxxGrid");
    var rows = grid.dataDiv().getChildren();
    var rowDatas = grid.getAllNoDeleteGridData().trs;
    for (var i = 0; i < rowDatas.length; i++) {
        var zsxmDm2 = rowDatas[i].getValue("zsxmDm");
        var zspmDm2 = rowDatas[i].getValue("zspmDm");
        var ssjmxzDm = rowDatas[i].getValue("ssjmxzDm");
        var rdzsuuid2 = rowDatas[i].getValue("rdzsuuid");
        var sfkssqq = rowDatas[i].getValue("sfkssqq");
        var sfkssqz = rowDatas[i].getValue("sfkssqz");
        var bqynsfe = rowDatas[i].getValue("bqynsfe");
        var zfsbz2 = rowDatas[i].getValue("zfsbz");
        var sybh2 = rowDatas[i].getValue("sybh1");
        if (zsxmDm == zsxmDm2 && zsSkssqq == sfkssqq && zsSkssqz == sfkssqz) {
            if (gt3.scenceCs == "cwgzbz") {// 错误更正时直接赋值为0
                // 初始化进入，并且存在税收减免性质时，且不为未达起征点减免性质，不更改减免税额
                if ($chk(cshbz) && cshbz == "1" && $chk(ssjmxzDm) && "0003045301,0003045302,0003042802,0003045303".indexOf(ssjmxzDm) == -1) {
                } else {
                    grid.updateCell(rows[i].getCell("bqjmsfe"), 0.0);
                }
            } else {// 正常申报时，原值可能为0，可能为征收子目带出的减免税额
                // 2015-08-21 子目带出的优惠，后续还会计算。此处不免征，减免税额为0
                grid.updateCell(rows[i].getCell("bqjmsfe"), 0.0);
                // grid.updateCell(rows[i].getCell("bqjmsfe"), (bqjmsfe/1).round(2));

            }
            grid.updateCell(rows[i].getCell("wdqzdbz"), "N");
            // 设置不免征减免性质
            toSetYysZzsJmxz(2, rows[i], zsxmDm, rowDatas[i]);
            calTable(grid, rows[i], rowDatas[i], 3);
        }
    }
}

/*******************************************************************************
 * 判断一行属期是否存在起征点信息
 * 
 * @param {}
 *            rowData
 * @return {Boolean}
 */
function checkQzdxx(rowData) {
    var ssqq = rowData.getValue("sfkssqq");
    var ssqz = rowData.getValue("sfkssqz");
    var zsxmDm = rowData.getValue("zsxmDm");
    var skssq = ssqq + "||" + ssqz;
    var qzdDatas = gt3.qzdList.trs;
    for (var i = 0; i < qzdDatas.length; i++) {
        var qzdSsq = qzdDatas[i].tds.ssq.value;
        var qzdZsxmDm = qzdDatas[i].tds.zsxmDm.value;
        if (qzdZsxmDm == zsxmDm && skssq == qzdSsq) {
            return true;
        }
    }
    return false;
}

/*******************************************************************************
 * 获取一个属期的剩余免征额度
 * 
 * @param {}
 *            rowData
 * @return {} arr 已申报金额,免征额度
 */
function getMzed(rowData) {
    var arr = new Array();
    var ssqq = rowData.getValue("sfkssqq");
    var ssqz = rowData.getValue("sfkssqz");
    var zsxmDm = rowData.getValue("zsxmDm");
    var skssq = ssqq + "||" + ssqz;
    var qzdDatas = gt3.qzdList.trs;
    for (var i = 0; i < qzdDatas.length; i++) {
        var qzdSsq = qzdDatas[i].tds.ssq.value;
        var qzdZsxmDm = qzdDatas[i].tds.zsxmDm.value;
        if (qzdZsxmDm == zsxmDm && skssq == qzdSsq) {
            var qzdje = qzdDatas[i].tds.qzdje.value / 1;
            var ysbje = qzdDatas[i].tds.ysbje.value / 1;
            if (gt3.scenceCs == "cwgzbz") {
                var gzqje = getGzqje(zsxmDm, ssqq, ssqz);
                ysbje = isPositive((ysbje / 1).subtract(gzqje / 1));
            }
            var sfxswdqzdjm = qzdDatas[i].tds.sfxswdqzdjm.value;
            var mesg = qzdDatas[i].tds.mesg.value;
            mzed = (qzdje).subtract(ysbje);
            arr.push(ysbje, mzed, sfxswdqzdjm, mesg);
            return arr;
        }
    }
    arr.push(0, 0);
    return arr;
}

/*
 * 获取10w减免金额
 */
function getMzed10w(ssqq, ssqz, zsxmDm) {
    var ysbje = 0;
    var qzdje = 0;
    // 所属期不能为空
    if ($chk(ssqq) && $chk(ssqz)) {
        var queryBtn = new SwordSubmit();
        queryBtn.pushData("djxh", gt3.djxh);
        queryBtn.pushData("skssqq", ssqq);
        queryBtn.pushData("skssqz", ssqz);
        queryBtn.pushData("zsxmDm", zsxmDm);
        queryBtn.setCtrl("SB175FxmtysbCtrl_queryQzdxx");
        queryBtn.setOptions({
            'onSuccess': function (req, res) {
                qzdje = res.getAttr("qzdje");
                ysbje = res.getAttr("ysbje");
            }
        });
        queryBtn.submit();
    }
    return qzdje;
}
/*******************************************************************************
 * 获取该税种应取的起征点征收项目
 * 
 * @param {}
 *            rowData
 * @return {} zsxmDm
 */
function getQzdZsxm(rowData) {
    var zsxmDm = rowData.getValue("zsxmDm");
    var zspmDm = rowData.getValue("zspmDm");
    var rdzsuuid = rowData.getValue("rdzsuuid");
    var zfsbz = rowData.getValue("zfsbz");
    // 为附税时，取主税营业税额度
    if (zfsbz != "0") {
        // 征收项目为文化事业建设费，取主税营业税起征点
        if (zsxmDm == "30126" || zsxmDm == "30217") {
            zsxmDm = getZsZsxm(rdzsuuid);
        }
    } else {
        // 娱乐业文化事业建设费,取营业税的起征点
        if ((zsxmDm == "30126" || zsxmDm == "30217") && (zspmDm == "301260100" || zspmDm == "302170100")) {
            zsxmDm = "10103";
        } else if ((zsxmDm == "30126" || zsxmDm == "30217") && (zspmDm == "301260200" || zspmDm == "302170200")) {
            // 广告业文化事业建设费，取增值税的起征点
            zsxmDm = "10101";
        }
    }
    return zsxmDm;
}

/*******************************************************************************
 * 获取附税的主税
 * 
 * @param {}
 *            rdzsuuid 认定主税uuid
 * @return {} 主税征收项目代码
 */
function getZsZsxm(rdzsuuid) {
    var zsZsxmDm = null;
    for (var i = 0; i < gt3.skxxList.trs.length; i++) {
        var rdpzuuid = gt3.skxxList.trs[i].tds.rdpzuuid.value;
        if (rdzsuuid == rdpzuuid) {
            zsZsxmDm = gt3.skxxList.trs[i].tds.zsxmDm.value;
        }
    }
    // 参数配置
    if (!$chk(zsZsxmDm)) {
        var grid = $w("skxxGrid");
        // var allRows = grid.dataDiv().getChildren();// 所有行
        var allData = grid.getAllNoDeleteGridData().trs;// 所有行数据
        var length = allData.length;// 数据行数
        for (var i = 0; i < length; i++) {
            var rowData2 = allData[i];
            var rdpzuuid = rowData2.getValue("rdpzuuid");
            if (rdzsuuid == rdpzuuid) {
                zsZsxmDm = rowData2.getValue("zsxmDm");
            }
        }
    }
    return zsZsxmDm;
}

/*******************************************************************************
 * 获取一个属期一个税种的应税项合计
 * 
 * @param {}
 *            rowData 行数据
 * @return {} 应税项合计金额
 */
function getYsxHj(rowData) {
    var ssqq = rowData.getValue("sfkssqq");
    var ssqz = rowData.getValue("sfkssqz");
    var zsxmDm = rowData.getValue("zsxmDm");
    var grid = $w("skxxGrid");
    var rows = grid.dataDiv().getChildren();
    var rowDatas = grid.getAllNoDeleteGridData().trs;
    var ysxHj = 0;
    for (var i = 0; i < rowDatas.length; i++) {
        var zsxmDm2 = rowDatas[i].getValue("zsxmDm");
        var zspmDm2 = rowDatas[i].getValue("zspmDm");
        var sfkssqq = rowDatas[i].getValue("sfkssqq");
        var sfkssqz = rowDatas[i].getValue("sfkssqz");
        var zfsbz2 = rowDatas[i].getValue("zfsbz");
        if (zsxmDm == zsxmDm2 && ssqq == sfkssqq && ssqz == sfkssqz) {
            // /2015-1-30 由应税项改为计税依据
            var ysx = rows[i].getCell("jsfyj").get("realvalue") / 1;
            ysxHj += ysx;
        }
    }
    return ysxHj;
}

/*******************************************************************************
 * 保存前判断是否存在重复申报税种
 * 
 * @return {Boolean}
 */
function saveBeforeCheck() {
    var grid = $w("skxxGrid");
    var rows = grid.dataDiv().getChildren();
    var rowDatas = grid.getAllNoDeleteGridData().trs;
    for (var i = 0; i < rowDatas.length; i++) {
        var rowNum = rowDatas[i].getValue("xh");
        var sybh = rowDatas[i].getValue("sybh1");
        var zsxmDm = rowDatas[i].getValue("zsxmDm");
        var zsxmMc = rows[i].getCell("zsxmDm").get("title");
        var zspmDm = rowDatas[i].getValue("zspmDm");
        var zspmMc = rows[i].getCell("zspmDm").get("title");
        var zszmDm = rowDatas[i].getValue("zszmDm");
        var zszmMc = rows[i].getCell("zszmDm").get("title");
        var sfkssqq = rowDatas[i].getValue("sfkssqq");
        var sfkssqz = rowDatas[i].getValue("sfkssqz");
        var rdpzuuid = rowDatas[i].getValue("rdpzuuid");
        var zfsbz = rowDatas[i].getValue("zfsbz");
        var ssjmxzDm = rowDatas[i].getValue("ssjmxzDm");
        var bqjmsfe = rowDatas[i].getValue("bqjmsfe");
        var ssjmxzDm = rowDatas[i].getValue("ssjmxzDm");
        var msgError = "";// 强制性校验提示信息
        if (bqjmsfe > 0 && (ssjmxzDm == undefined || !$chk(ssjmxzDm))) {
            msgError += "税款所属期起" + sfkssqq + "至" + sfkssqz + ",征收品目为" + zspmMc + "的减免税额大于0，但是没有对应的税收减免性质，请先选择税收减免性质" + "\n";
            if (msgError != "") {
                swordAlertWrong(msgError);
                return;
            }
        }
        if (bqjmsfe == 0 && (ssjmxzDm != undefined && $chk(ssjmxzDm))) {
            msgError += "税款所属期起" + sfkssqq + "至" + sfkssqz + ",征收品目为" + zspmMc + "的减免税额等于0，不能选择减免性质代码" + "\n";
            if (msgError != "") {
                swordAlertWrong(msgError);
                return;
            }
        }


        for (var j = 0; j < rowDatas.length; j++) {
            var rowNum1 = rowDatas[j].getValue("xh");
            if (rowNum1 != rowNum) {
                var sybh1 = rowDatas[j].getValue("sybh1");
                var zsxmDm1 = rowDatas[j].getValue("zsxmDm");
                var zspmDm1 = rowDatas[j].getValue("zspmDm");
                var zszmDm1 = rowDatas[j].getValue("zszmDm");
                var sfkssqq1 = rowDatas[j].getValue("sfkssqq");
                var sfkssqz1 = rowDatas[j].getValue("sfkssqz");
                var rdpzuuid1 = rowDatas[j].getValue("rdpzuuid");
                if (sybh == sybh1 && zsxmDm == zsxmDm1 && zspmDm == zspmDm1
						&& zszmDm == zszmDm1 && sfkssqq == sfkssqq1
						&& sfkssqz == sfkssqz1 && rdpzuuid == rdpzuuid1
						&& (!$chk(zfsbz) || zfsbz == "0")) {
                    var cfsbMsg = "";
                    if ($chk(sybh)) {
                        cfsbMsg += "税源编号：" + sybh + "<br/>";
                    }
                    cfsbMsg += "征收项目：" + zsxmMc + "<br/>征收品目：" + zspmMc
							+ "<br/>";
                    if ($chk(zszmDm)) {
                        cfsbMsg += "征收子目：" + zszmMc + "<br/>";
                    }
                    cfsbMsg += "税款所属期起：" + sfkssqq + "<br/>税款所属期止：" + sfkssqz
							+ "<br/>存在重复申报，请核实";
                    swordAlert(cfsbMsg);
                    return false;
                }
            }
        }
        if (bqjmsfe / 1 <= 0 && $chk(ssjmxzDm)) {
            var cfsbMsg = "";
            if ($chk(sybh)) {
                cfsbMsg += "税源编号：" + sybh + "<br/>";
            }
            cfsbMsg += "征收项目：" + zsxmMc + "<br/>征收品目：" + zspmMc
					+ "<br/>";
            if ($chk(zszmDm)) {
                cfsbMsg += "征收子目：" + zszmMc + "<br/>";
            }
            cfsbMsg += "税款所属期起：" + sfkssqq + "<br/>税款所属期止：" + sfkssqz
					+ "<br/>税收减免性质不为空，请核实";
            swordAlert(cfsbMsg);
            return false;
        }
        // 网报逻辑
        // //吉林地税--纳税人使用通用申报模块申报时，系统校验如果附加税不是按项目申报的，则弹出提示：除了按项目申报时可在此模块申报附加税（费）外，正常的附加税（费）请使用“附加税（费）申报”模块进行申报。并且返回让纳税人修改
        if (gt3.fjsxmsbbz == 'Y') {
            if (fjsXmsbjy(zspmDm, sybh1)) {
                var cfsbMsg = "";
                cfsbMsg += "请修改序号：" + rowNum + "，征收项目：" + zsxmMc + "，征收品目：" + zspmMc + "，税款所属期起" + sfkssqq + "至" + sfkssqz + "的记录<br/>";
                cfsbMsg += "除了按项目申报时可在此模块申报附加税（费）外，正常的附加税（费）请使用“附加税（费）申报”模块进行申报";
                swordAlert(cfsbMsg);
                return false;
            }
        }
    }
    return true;
}

/*******************************************************************************
 * 获取主税的应补退税额
 * 
 * @param {}
 *            rowData
 * @return {Number}
 */
function getZsSe(rowData) {
    var sybh = rowData.getValue("sybh1");
    var sfkssqq = rowData.getValue("sfkssqq");
    var sfkssqz = rowData.getValue("sfkssqz");
    var rdzsuuid = rowData.getValue("rdzsuuid");
    var rowDatas = $w("skxxGrid").getAllNoDeleteGridData().trs;
    // 项目申报
    if ($chk(sybh)) {
        for (var i = 0; i < rowDatas.length; i++) {
            var zsxmDm1 = rowDatas[i].getValue("zsxmDm");
            var sybh1 = rowDatas[i].getValue("sybh1");
            var sfkssqq1 = rowDatas[i].getValue("sfkssqq");
            var sfkssqz1 = rowDatas[i].getValue("sfkssqz");
            var rdpzuuid = rowDatas[i].getValue("rdpzuuid");
            if (zsxmDm1 == "10103" && sybh == sybh1 && sfkssqq == sfkssqq1
					&& sfkssqz == sfkssqz1 && rdzsuuid == rdpzuuid) {
                return rowDatas[i].getValue("bqybtsfe") / 1;
            }
        }
    }
    // 税费种认定申报
    if ($chk(rdzsuuid)) {
        for (var i = 0; i < rowDatas.length; i++) {
            var zsxmDm1 = rowDatas[i].getValue("zsxmDm");
            var sfkssqq1 = rowDatas[i].getValue("sfkssqq");
            var sfkssqz1 = rowDatas[i].getValue("sfkssqz");
            var rdpzuuid = rowDatas[i].getValue("rdpzuuid");
            if (zsxmDm1 == "10103" && sfkssqq == sfkssqq1
					&& sfkssqz == sfkssqz1 && rdzsuuid == rdpzuuid) {
                return rowDatas[i].getValue("bqybtsfe") / 1;
            }
        }
    }
    return rowData.getValue("ysx") / 1;
}

/*******************************************************************************
 * 获取主税应税项
 * 
 * @param {}
 *            rowData
 * @return {Number}
 */
function getZsYsx(rowData) {
    var sybh = rowData.getValue("sybh1");
    var sfkssqq = rowData.getValue("sfkssqq");
    var sfkssqz = rowData.getValue("sfkssqz");
    var rdzsuuid = rowData.getValue("rdzsuuid");
    var rowDatas = $w("skxxGrid").getAllNoDeleteGridData().trs;
    // 项目申报
    if ($chk(sybh)) {
        for (var i = 0; i < rowDatas.length; i++) {
            var zsxmDm1 = rowDatas[i].getValue("zsxmDm");
            var sybh1 = rowDatas[i].getValue("sybh1");
            var sfkssqq1 = rowDatas[i].getValue("sfkssqq");
            var sfkssqz1 = rowDatas[i].getValue("sfkssqz");
            var rdpzuuid = rowDatas[i].getValue("rdpzuuid");
            if (zsxmDm1 == "10103" && sybh == sybh1 && sfkssqq == sfkssqq1
					&& sfkssqz == sfkssqz1 && rdzsuuid == rdpzuuid) {
                return rowDatas[i].getValue("ysx") / 1;
            }
        }
    }
    // 税费种认定申报
    if ($chk(rdzsuuid)) {
        for (var i = 0; i < rowDatas.length; i++) {
            var zsxmDm1 = rowDatas[i].getValue("zsxmDm");
            var sybh1 = rowDatas[i].getValue("sybh1");
            var sfkssqq1 = rowDatas[i].getValue("sfkssqq");
            var sfkssqz1 = rowDatas[i].getValue("sfkssqz");
            var rdpzuuid = rowDatas[i].getValue("rdpzuuid");
            if (zsxmDm1 == "10103" && sfkssqq == sfkssqq1
					&& sfkssqz == sfkssqz1 && rdzsuuid == rdpzuuid) {
                return rowDatas[i].getValue("ysx") / 1;
            }
        }
    }
    return rowData.getValue("ysx") / 1;
}

/*******************************************************************************
 * 监控纳税人状态
 * 
 * @param {}
 *            nsrztDm 纳税人状态代码
 */
function checkNsrzt(nsrztDm) {
    if (nsrztDm == "07") {
        swordAlert("纳税人处于注销状态，请重新办理税务登记");
        return false;
    } else if (nsrztDm == "08") {
        swordAlert("纳税人处于非正常注销状态，请重新办理税务登记");
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
 * 获取期数
 * 
 * @param {}
 *            nsqxDm 纳税期限代码
 * @param {}
 *            sfkssqq 税款所属期起
 * @param {}
 *            sfkssqz 税款所属期止
 * @param {}
 *            yxqq 有效期起
 * @param {}
 *            yxqz 有效期止
 * @return {} qs 期数
 */
function getQs(nsqxDm, sfkssqq, sfkssqz, yxqq, yxqz) {
    var qs = 1;// 默认1
    // 税款所属期在有效期内 正常算法取期数
    if (compareDate(yxqq, sfkssqq) && compareDate(sfkssqz, yxqz)) {
        if (nsqxDm == "06") {
            qs = 1;
        } else if (nsqxDm == "08") {
            qs = 3;
        } else if (nsqxDm == "09") {
            qs = 6
        } else if (nsqxDm == "10") {
            qs = 12;
        } else {
            qs = getYfc(sfkssqq, sfkssqz) + 1;
        }
        // 税款所属期起在有效期起之前，取有效期起与税款所属期止的月份差+1
    } else if (compareDate(sfkssqq, yxqq) && compareDate(sfkssqz, yxqz)) {
        qs = getYfc(yxqq, sfkssqz) + 1;
        // 税款所属期止在有效期止之后，取有效期起与税款所属期止的月份差+1
    } else if (compareDate(yxqq, sfkssqq) && compareDate(yxqz, sfkssqz)) {
        qs = getYfc(sfkssqq, yxqz) + 1;
        // 有效期在税款所属期之内，取有效期起止的月份差+1
    } else if (compareDate(sfkssqq, yxqq) && compareDate(yxqz, sfkssqz)) {
        qs = getYfc(yxqq, yxqz) + 1;
    }
    return qs;
}

/*******************************************************************************
 * 如果是负数，默认为0
 * 
 * @param {}
 *            number
 * @return {}
 */
function isPositive(number) {
    if (number / 1 < 0) {
        number = "0.00";
    }
    return number;
}

/*******************************************************************************
 * 获取同年两日期月份差
 * 
 * @param {}
 *            rqq 日期起
 * @param {}
 *            rqz 日期止
 * @return {} 月份差
 */
function getYfc(rqq, rqz) {
    var rqqs = splitStr(rqq);
    var rqzs = splitStr(rqz);
    return rqzs[1] - rqqs[1];
}

/*******************************************************************************
 * 获取默认纳税期限代码
 * 
 * @param {}
 *            zsxmDm 征收项目代码
 * @param {}
 *            zspmDm 征收品目代码
 * @return {} nsqxDm 纳税期限代码
 */
function getMrNsqxDm(zsxmDm, zspmDm) {
    var nsqxDm = null;
    var qxBtn = new SwordSubmit();
    qxBtn.pushData("zsxmDm", zsxmDm);
    qxBtn.pushData("zspmDm", zspmDm);
    qxBtn.setCtrl(gt3.ctrl + "_getMrNsqxDm");
    qxBtn.setOptions({
        "onSuccess": function (req, res) {
            nsqxDm = res.getAttr("nsqxDm");
        }
    });
    qxBtn.submit();
    return nsqxDm;
}

/*******************************************************************************
 * 清空一行数据
 * 
 * @param {}
 *            row
 */
function resetRow(row) {
    var dataObj = {
        tds: {
            "rdzsuuid": {
                value: ""
            },
            "rdpzuuid": {
                value: ""
            },
            "zspmDm": {
                value: ""
            },
            "zszmDm": {
                value: ""
            },
            "ysx": {
                value: "0.00"
            },
            "jcx": {
                value: "0.00"
            },
            "yssdl": {
                value: "1.000000"
            },
            "jsfyj": {
                value: "0.00"
            },
            "sflhdwse": {
                value: "0.000000"
            },
            "sskcs": {
                value: "0.00"
            },
            "bqjmsfe": {
                value: "0.00"
            },
            "ssjmxzDm": {
                value: ""
            },
            "bqyjsfe": {
                value: "0.00"
            },
            "jkqxDm": {
                value: ""
            },
            "nsqxDm": {
                value: ""
            },
            "sbqxDm": {
                value: ""
            },
            "qs": {
                value: ""
            }
        }
    };
    $w("skxxGrid").updateRow(row, dataObj);
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
    var newData = [];// 新列表数据
    if (!$chk(xzqhDm)) {
        return newData;
    }
    dataObj.each(function (item, index) {
        if (item.xzqhDm == xzqhDm)
            newData[newData.length] = item;
    });
    return newData;
}

/*******************************************************************************
 * 获取单行减免信息
 * 
 * @param {}
 *            rowData 单行表格数据
 * @return {} jmxxList 减免信息集合
 */
function getJmxxList(rowData) {
    var sbsxDm1 = $w("nsrxxForm").getValue('sbsxDm1').code;
    var jmBtn = new SwordSubmit();
    jmBtn.pushData('djxh', gt3.djxh);
    jmBtn.pushData('sbsxDm1', sbsxDm1);
    jmBtn.pushData(rowData);
    jmBtn.setCtrl(gt3.ctrl + '_getJmxxList');
    jmBtn.setOptions({
        'onSuccess': function (req, res) {
            jmxxList = pc.getResData("jmxxList", res);
        }
    });
    jmBtn.submit();
    return jmxxList;
}
function changeSsjmxzDm(option, selItem, obj) {
    pandSpbz(option, selItem, obj);
    var skxxGrid = $w('skxxGrid');
    var rowData = skxxGrid.getCheckedRowData();
    var row = skxxGrid.getCheckedRow();
    var bqjmsfeCell = row.getCell("bqjmsfe");
    var jmxzDm = selItem.code;
    if (!$chk(jmxzDm)) {
        skxxGrid.updateCell(bqjmsfeCell, "0.0", "0.0");
        calTable(skxxGrid, row, rowData, 5);
    }
    var jsfyj = rowData.getValue("jsfyj");
    var fdsl = rowData.getValue("sflhdwse");
    var bqynsfe = rowData.getValue("bqynsfe");
    var bqyjsfe = rowData.getValue("bqyjsfe");
    var zsxmDm = rowData.getValue("zsxmDm");

    var jmse = 0;
    if ((bqynsfe / 1).round(2) != (jsfyj.multiple(fdsl)).round(2)) {
        jmse = getjmsebySsjmxzDm(selItem, jsfyj, (bqynsfe / 1).subtract(bqyjsfe / 1), fdsl);
    } else {
        jmse = getjmsebySsjmxzDm(selItem, jsfyj, (jsfyj.multiple(fdsl)).subtract(bqyjsfe / 1), fdsl);
    }
    jmse = jmse.round(2);

    var yhsl = fdsl;
    var jmzlxDm = selItem.jmzlxDm;
    var jmsl = selItem.jmsl;
    var jmfd = selItem.jmfd;
    if (jmzlxDm == '02') {
        yhsl = 0;
    }
    else if (jmzlxDm == '01') {
        if (jmsl > 0 && fdsl > jmsl) {
            yhsl = jmsl;
        }
        else if (jmfd > 0 && jmfd < 1) {
            if ("10106" == zsxmDm) {
                jmse = bqynsfe.multiple(jmfd).round(2);
            }
            yhsl = fdsl.multiple(1 - jmfd);
        } else {
            yhsl = fdsl;
        }
    } else {
        yhsl = fdsl;
    }

    skxxGrid.updateCell(row.getCell("yhsl"), yhsl);
    skxxGrid.updateCell(row.getCell("bqjmsfe"), jmse, jmse);
    skxxGrid.updateCell(row.getCell("yhje"), jmse, jmse);
    rowData.tds.bqjmsfe.value = jmse;
    rowData.tds.yhje.value = jmse;
    calTable(skxxGrid, row, rowData, 5);
}
// jmxzFilter
function jmxzFilter(dataObj, inputEl, obj) {
    var newData = [];// 新列表数据
    var jsxzList = [];
    var rowData = $w("skxxGrid").getCheckedRowData();
    var zsxmDm;
    var zspmDm;
    var zszmDm;
    if (!$chk(rowData) || rowData == null || rowData == undefined) {
        return dataObj;
    } else {
        zsxmDm = rowData.getValue("zsxmDm");
        zspmDm = rowData.getValue("zspmDm");
        zszmDm = rowData.getValue("zszmDm");
        var wdqzdbz = rowData.getValue("wdqzdbz");
    }
    if (!$chk(zsxmDm) || !$chk(zspmDm)) {
        swordAlert("请先选择征收项目和征收品目");
        return newData;
    }
    var queryBtn = new SwordSubmit();
    queryBtn.pushData("djxh", gt3.djxh);
    queryBtn.pushData("zsxmDm", zsxmDm);
    queryBtn.pushData("zspmDm", zspmDm);
    queryBtn.pushData("zszmDm", zszmDm);
    queryBtn.pushData("wdqzdbz", wdqzdbz);
    queryBtn.pushData("skssqq", rowData.getValue("sfkssqq"));
    queryBtn.pushData("skssqz", rowData.getValue("sfkssqz"));
    queryBtn.pushData("jsyj", rowData.getValue("jsfyj"));
    queryBtn.pushData("djzclxDm", gt3.djzclxDm);
    queryBtn.setOptions({
        async: 'false',
        mask: 'false',
        ctrl: 'SBGyCtrl_setJmxzxxAndWdqzd',
        onSuccess: function (req, res) {
            jsxzList = res.getDataByDataName("jmxzList").data;
            // if(wdqzdbz=="N" && $chk(ssjmxzDm2)){
            // jsxzList.each(function(item, index) {
            // if(item.code==ssjmxzDm2){
            // newData[newData.length] = item;
            // }
            // });
            // }
        }
    });
    queryBtn.submit();
    // if(newData.length>0)
    // return newData;
    // else
    return jsxzList;
}
/**
 * 
 * @param row
 * @param value
 *            1 应税项 2 减除项 3征收子目
 */
function toResetSsjmxz(row, value) {
    var skxxGrid = $w('skxxGrid');
    // var rowData = skxxGrid.getCheckedRowData();
    // var row = skxxGrid.getCheckedRow();
    var bqjmsfeCell = row.getCell("bqjmsfe");
    var ssjmxzDmCell = row.getCell("ssjmxzDm");

    // 默认状态下，清空税收减免性质、子目减免性质、减免税额、优惠税率
    // 子目触发，同上
    // 应税项触发 ，不调用改方法
    skxxGrid.updateCell(bqjmsfeCell, "0.0");
    skxxGrid.updateCell(ssjmxzDmCell, "");
    skxxGrid.updateCell(row.getCell("yhsl"), "0.0");
}
/**
 * 
 * @param bz
 *            1 免征 2 不免征
 * @param row
 * @param zsxmDm
 */
function toSetYysZzsJmxz(bz, row, zsxmDm, rowData) {
    var skxxGrid = $w('skxxGrid');
    var jsfyj = getYsxHj(rowData);// row.getCell("jsfyj").get("realValue");
    if (bz == 1 && jsfyj > 0) {// 计税依据大于0且免征时
        var ssjmxzDm = "";
        var ssjmxzDmfrojsp = "";
        var queryBtn = new SwordSubmit();
        queryBtn.pushData("djxh", gt3.djxh);
        queryBtn.pushData("zsxmDm", zsxmDm);
        queryBtn.pushData("skssqq", row.getCell("sfkssqq").get("realValue"));
        queryBtn.pushData("skssqz", row.getCell("sfkssqz").get("realValue"));
        queryBtn.pushData("jsyj", jsfyj);
        queryBtn.pushData("djzclxDm", gt3.djzclxDm);
        queryBtn.setOptions({
            async: 'false',
            mask: 'false',
            ctrl: 'SBGyCtrl_getWdqzdjmxz',
            onSuccess: function (req, res) {
                ssjmxzDm = res.getAttr("ssjmxzDm");
                ssjmxzDmfrojsp = res.getAttr("ssjmxzDmfrojsp");
            }
        });
        queryBtn.submit();
        skxxGrid.updateCell(row.getCell("ssjmxzDm"), ssjmxzDmfrojsp);
        skxxGrid.updateCell(row.getCell("yhsl"), 0);
    } else if (bz == 2 && jsfyj > 0) {
        var ssjmxzDm = row.getCell("ssjmxzDm").get("realValue");
        // 当原税收减免性质代码为免征性质代码时，清空优惠税率、减免性质。如果减征时，不做清空
        if (SBConstants.getDM_GY_SSJMXZ_WDQZD().indexOf(ssjmxzDm, 0) != -1) {
            skxxGrid.updateCell(row.getCell("ssjmxzDm"), "");
            skxxGrid.updateCell(row.getCell("yhsl"), "");
        }
    }
}
/*******************************************************************************
 * 获取上期定期定额信息
 * 
 * @param {}
 *            djxh 登记序号
 * @param {}
 *            ssqq 税款所属期起
 * @param {}
 *            ssqz 税款所属期止
 * @param {}
 *            zsxmDm 征收项目
 * @param {}
 *            zspmDm 征收品目
 * @return {}
 */

function getSqDqdeHdxx(ssqq, ssqz, zsxmDm, zspmDm, nsqxDm) {
    var slBtn = new SwordSubmit();
    slBtn.pushData("zsxmDm", zsxmDm);
    slBtn.pushData("zspmDm", zspmDm);
    slBtn.pushData("djxh", gt3.djxh);
    slBtn.pushData("ssqq", ssqq);
    slBtn.pushData("ssqz", ssqz);
    slBtn.pushData("nsqxDm", nsqxDm);
    slBtn.setCtrl(gt3.ctrl + "_getSqDqdeHdxx");
    slBtn.setOptions({
        "onSuccess": function (req, res) {
            sqDqdehdBz = res.getAttr("sqDqdehdBz");
        }
    });
    slBtn.submit();
    // return sqDqdehdBz;
}

function parseFjsxx(zsxmDm, zspmDm) {
    var fsszBz = "2";// 默认：在配置参数中不存在
    var fjsxxs = gt3.fjsxx.split(",");
    var length = fjsxxs.length;
    for (var i = 0; i < length; i++) {
        var singleFjsxx = fjsxxs[i];
        if (singleFjsxx.indexOf("@") >= 0) {
            if (singleFjsxx.split("@")[0] == zsxmDm && singleFjsxx.indexOf(zspmDm) >= 0) {
                fsszBz = singleFjsxx.split(":")[1];// 附税计算方式：1=随计应纳税额，0=随计税依据
                break;
            }
        } else {
            if (singleFjsxx.split(":")[0] == zsxmDm) {
                fsszBz = singleFjsxx.split(":")[1];// 附税计算方式：1=随计应纳税额，0=随计税依据
                break;
            }
        }
    }
    return fsszBz;
}
function changesfft() {
    var nsrxxForm = $w("nsrxxForm");
    var qtgrczbdczjsfft = nsrxxForm.getValue("qtgrczbdczjsfft");
    var sbrq1 = nsrxxForm.getValue("sbrq1");
    if ($chk(qtgrczbdczjsfft) && $chk(qtgrczbdczjsfft.code) && qtgrczbdczjsfft.code == "N") {
        nsrxxForm._itemSwitch("qtgrczbdczlqq", "date", {
            'dateControl': '',
            'showOptions': 'true,true,true,false,false,false'
        });
        nsrxxForm._itemSwitch("qtgrczbdczlqz", "date", {
            'dateControl': '',
            'showOptions': 'true,true,true,false,false,false'
        });
    } else {
        nsrxxForm._itemSwitch("qtgrczbdczlqq", "date", {
            'dateControl': 'minDay',
            'showOptions': 'true,true,false,false,false,false'
        });
        nsrxxForm._itemSwitch("qtgrczbdczlqz", "date", {
            'dateControl': 'maxDay',
            'showOptions': 'true,true,false,false,false,false'
        });
    }
    if (gt3.scenceCs != "cwgzbz") {
        if ($chk(qtgrczbdczjsfft) && $chk(qtgrczbdczjsfft.code) && qtgrczbdczjsfft.code == "N") {
            nsrxxForm.disable("qtgrczbdczlqq");
            nsrxxForm.disable("qtgrczbdczlqz");
            nsrxxForm.setValue("qtgrczbdczlqq", sbrq1);
            nsrxxForm.setValue("qtgrczbdczlqz", sbrq1);
        } else {
            nsrxxForm.enable("qtgrczbdczlqq");
            nsrxxForm.enable("qtgrczbdczlqz");
            nsrxxForm.setValue("qtgrczbdczlqq", '');
            nsrxxForm.setValue("qtgrczbdczlqz", '');
        }
    }

}

function changezlq() {
    var nsrxxForm = $w("nsrxxForm");
    var qtgrczbdczlqq = nsrxxForm.getValue("qtgrczbdczlqq");
    var qtgrczbdczlqz = nsrxxForm.getValue("qtgrczbdczlqz");
    if ($chk(qtgrczbdczlqq) && $chk(qtgrczbdczlqz)) {
        var qyear = qtgrczbdczlqq.substr(0, 4);
        var zyear = qtgrczbdczlqz.substr(0, 4);
        if (qyear != zyear) {
            swordAlertWrong("其他个人出租不动产租赁期起 与 其他个人出租不动产租赁期止必须为同一年!");
            nsrxxForm.setValue("qtgrczbdczlqz", "");
        }
    }
}
// 网报特色湖南地税提出的校验重复申报
function openSbzf() {
    var sbzfBtn = new SwordSubmit();
    sbzfBtn.setCtrl("SB058SbzfCtrl_initView");
    swordOpenWin('', sbzfBtn);
}
// 吉林地税--纳税人使用通用申报模块申报时，系统校验如果附加税不是按项目申报的，则弹出提示：除了按项目申报时可在此模块申报附加税（费）外，正常的附加税（费）请使用“附加税（费）申报”模块进行申报。并且返回让纳税人修改
function fjsXmsbjy(zspmDm, sybh1) {
    if (isFjszspm(zspmDm) && (!$chk(sybh1) || sybh1 == null || sybh1 == undefined || sybh1 == "")) {
        return true;
    }
    return false;
}
// swordAlert("除了按项目申报时可在此模块申报附加税（费）外，正常的附加税（费）请使用“附加税（费）申报”模块进行申报");

// 判断是否附加税
function isFjszspm(zspmDm) {
    var fjszspmarr = gt3.fjszspms.split(",");
    for (var i = 0; i < fjszspmarr.length; i++) {
        if (zspmDm == fjszspmarr[i]) {
            return true;
        }
    }
    return false;
}
