var fbXMLData = {};// xml附表数据
var result = {}; // 页面校验提示
var datafbccs;// 车船税附表全局
var datafbmx;// 明细全局
var g_wjnrbj = "1";// 文件内容标记
var savemxb;// 明细表信息
var saveccsmxb;// 车船税明细表信息
var sbqxDm;// 校验所属期
var nssbrq;// 校验申报日期
var resetresData;// 重置使用的数据
var zsxmList;// 获取征收项目List
var zspmList;// 获取征收品目List
var zszmList;// 获取征收子目List
var xfsZspmList;// 获取消费税征收品目List
var hyList;// 获取行业列表List
var gRdSfzxxList; // 缓存所有可申报的认定税种信息
var savejmxxList;// 保存时的减免信息
var sb097_boolean_fb01 = false;// 代扣代缴明细附表
var sb097_boolean_fb02 = false;// 代扣代缴车船税明细附表
var sb097_boolean_fb03 = false;// 代扣代缴专用附表
var sb097_boolean_fb04 = false;// 银行经收附表
var sb097_cszForXML;
var sb097_sbcwgz_pzxh;
var sb097_sbcwgz_sbuuid;
var sb097_resDataXMLForSBCWGZ;
var sb097_resDataXMLForSBZF;
var sb097hyCode;// 行业代码
var fbswsxzyGrid;
var fbyhjszyGrid;
var ctrlname = "SB097TydkdjsbCtrl";
var djxh = "";
var nsrxxVO = {}; // 缓存纳税人主体数据信息
var gt3 = {};
gt3._yhjsExistInCwgz = false; // 错误更正时是否存在银行经收缴款书数据

gt3.sb097_nsrxxDr;
var gt3_nsqx = "06";
var sb097_sbcwgzmap;
var cwgzbz = "";
gt3.skssqq = "";// 税款所属期起
gt3.skssqz = "";// 税款所属期止
gt3.zrrBz = "";
gt3.zxbztzsuuid = "";
gt3._notChangeBz = "N"; // 不可修改标志
var nsrsbh;
var nsrmc;
var drgzBz = "N";  //导入更正标志
var kdqsssrfpBz = "N";
var kdqfpblList = null;

var sbxxList = null;
//打印功能
var dymbuuid = "sb097_tydkdjsbprint";
var printTitle = "申报——通用代扣代缴";
var hxdyForPrint = "Y";

//打印所需变量
var printFileType = "excel";//模版类型
var fykg; //分页参数
var zzlx;//纸张参数
var printMode; //缩放参数
//计算表格合计
var caculateGridHJFlag;//grid自动计算合计列参数

var yzpzxh = "";

var drzc = {};
drzc.fbdkmx = "0";
drzc.fbccmx = "0";
drzc.fbdkds = "0";
drzc.fbyhjs = "0";

var scenceCs;
/**
 * 导入处理：支持xls和xml导入
 * 
 * @return
 */
function drxx() {
    gt3.sb097_nsrxxDr = null;
    var gydrctrl = ctrlname + "_getDrxx";// 导入处理自定义的ctrl
    var drxxBtn = new SwordSubmit();
    if ($chk(djxh)) {
        drxxBtn.pushData('djxh', djxh);
    }

    if (sb097_sbcwgzmap != null) {
        drxxBtn.pushData(sb097_sbcwgzmap);
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
/**
 * 导入成功处理
 * 
 * @param res
 * @return
 */

function boxCallBackForSBdr(res) {

    var sbsaveReturnVO = pc.getResData("sbsaveReturnVO", res);
    var tydkdjSBDrReturnVO = pc.getResData("tydkdjSBDrReturnVO", res);
    var xznsrbz = tydkdjSBDrReturnVO.data.xznsrbz.value;
    var drycxx = tydkdjSBDrReturnVO.data.drycxx.value;
    var nsrsbh = tydkdjSBDrReturnVO.data.nsrsbh.value;
    var nsrxxForm = $w("nsrxxForm");
    // 导入失败的情况，展示导入异常信息
    if (drycxx != "") {
        swordConfirm("导入数据校验失败！" + "是否获取日志？", {
            okBtnName: "是",
            cancelBtnName: "否",
            onOk: function () {
                WriteTxt(drycxx);
            }
        });
        return;
    }
    if (xznsrbz == "Y") {// 对于纳税人身份不唯一确认的， 弹出选择纳税人框，选择纳税人
        swordAlert("根据该纳税人识别号查询出多条纳税人信息，请先选择纳税人识别号后，再进行导入!", {
            // 确定：所属期起获得焦点
            onOk: function () {
                nsrxxForm.getFieldEl('dkdjywrsbh').value = nsrsbh;
                queryNsrxx("1");
            }
        });

    } else {
        var djxh = tydkdjSBDrReturnVO.data.djxh.value;

        var returnBz = sbsaveReturnVO.data.returnBz.value;
        if (returnBz == "Y") {// 调用征收开票
            var pzxh = sbsaveReturnVO.data.pzxh.value;
            var ybtse = sbsaveReturnVO.data.ybtse.value;
            if (pzxh != "") {
                var pzxh = sbsaveReturnVO.data.pzxh.value;
                var ybtse = sbsaveReturnVO.data.ybtse.value;
                yzpzxh = pzxh;
                fromYbSBJumpZskp(pzxh, ybtse, djxh, res);
            }
        } else if (returnBz == "1") {// 不调用征收开票，提示申报金额
            var pzxh = sbsaveReturnVO.data.pzxh.value;
            yzpzxh = pzxh;
            var ybtse = sbsaveReturnVO.data.ybtse.value;
            if (ybtse < 0) {
                swordAlert("保存成功，当前纳税人申报凭证序号为： " + pzxh + " ,应缴纳税款为：" + ybtse
						+ " 元,请进行退抵税审批!");
            } else if (ybtse >= 0) {
                swordAlert("保存成功，当前纳税人申报凭证序号为： " + pzxh + " ,应缴纳税款为：" + ybtse
						+ " 元。");
            }

        }

        XMLForSBDR(res);
        // 网报调整按钮控制
        $w("sbToolBar").setDisabled("save");
        tempsave_disable('sbToolBar');
        $w("sbToolBar").setDisabled("export");
        $w("sbToolBar").setEnabled("print");
        $w("sbToolBar").setEnabled("printHz");
    }
}

/**
 * 生成本地文件
 * 
 * @return
 */
function WriteTxt(drycxx) {
    swordAlertDiv(drycxx, {
        width: 600,
        height: 400
    });
}

/**
 * 不进行征收开票跳转
 * 
 * @param $_saveResData
 * @return
 */
function notJumpZskp($_saveResData) {

}
/**
 * 初始化数据
 * 
 * @param req
 * @param resData
 * @return
 */
function init(resData) {
    //2017-04-20:段敏根据新需求（ZOG00_201702140034）去掉车船税明细表
    $w('sbToolBar').setHide('download1');

    var notChangeBz = resData.getAttr("notChangeBz");
    if ($chk(notChangeBz)) {
        gt3._notChangeBz = notChangeBz;
    }
    var hyCode = resData.getAttr("hyCode");
    if (hyCode != null && hyCode != "") {
        sb097hyCode = hyCode;
    }
    var ccsBz = resData.getAttr("ccsBz");
    if (ccsBz == "Y") {
        $w("sbToolBar").setEnabled("download1");
    } else {
        $w("sbToolBar").setDisabled("download1");
    }

    var nsrxxForm = $w('nsrxxForm');
    var flzlGrid = $w("flzlGrid");
    // 初始化按钮规则（保存按钮设置为灰色、附列资料默认收起、纳税人识别号获取焦点、页面表头数据信息对应）
    $w("sbToolBar").setDisabled("save");
    tempsave_disable('sbToolBar');
    if (!flzlGrid.collapseDiv.hasClass('x-tool-s')) {
        flzlGrid.toggle();
    }

    // 设置表头默认数据信息
    var nsrxxFormInit = pc.getResData("nsrxxForm", resData);
    djxh = nsrxxFormInit.data.djxh.value;
    var skssqq = nsrxxFormInit.data.skssqq.value;
    gt3.skssqq = skssqq;
    var skssqz = nsrxxFormInit.data.skssqz.value;
    gt3.skssqz = skssqz;

    sb097_cszForXML = resData.getAttr("cszForXML");// xml的参数值
    if (sb097_cszForXML != null && sb097_cszForXML != undefined) {// 如果是关于xml的方法
        //$w("sbToolBar").setDisabled("export");
        //$w("sbToolBar").setDisabled("edit");
        if (sb097_cszForXML == "SBZF") {// 作废
            XMLForSBZF(resData);
        } else if (sb097_cszForXML == "SBCWGZ") {// 错误更正
            XMLForSBCWGZ(resData);
            kdqsssrfpBz = resData.getAttr("kdqsssrfpBz");
            kdqfpblList = pc.getResData("kdqfpblList", resData);
        }

    } else {// 一般申报情况
        //		(function() {
        ////			nsrxxForm.getFieldEl('dkdjywrsbh').focus();
        //		}).delay(1);
    }

    // 不可修改时，禁止录入
    if (isNotChange()) {
        nsrxxForm.disable();
        //$w("slxxForm").disable();
        $w("sbToolBar").setDisabled("export"); // 导入
        $w("sbToolBar").setDisabled("edit"); // 打印
    }

    var scenceCs = resData.getAttr("scenceCs")

    //	zsxmList = pc.getResData("zsxmList", resData);
    var nsrsbh = nsrxxFormInit.data.dkdjywrsbh.value;
    initPBS(djxh, skssqq, skssqz);
    queryNsrxx("1");
    $w("sbToolBar").setDisabled("print");
    //	loadZfbTree(zsxmList);// 加载主附表树
    // 网报增加
    //	var wbskssqBz = resData.getAttr("wbskssqBz");
    //	if($chk(wbskssqBz) && wbskssqBz=='N'){
    //		$w("nsrxxForm").disable('skssqq');
    //		$w("nsrxxForm").disable('skssqz');
    //	}
    var dzswj_sqkzkg = isEnableSkssq("BDA0610136");
    if ($chk(dzswj_sqkzkg) && dzswj_sqkzkg == "Y") {
        $w("nsrxxForm").disable(["skssqq", "skssqz"]);
    }
    var bz = isEnableZcbb("BDA0610136");
    if ($chk(bz) && bz == "Y") {
        $w('nsrxxForm').enable('sbsxDm1');
    }

}

//查询纳税人基本信息 
function queryNsrsbhxx(nsrsbh, cxbz) {
    if (!$chk(nsrsbh)) {
        swordAlert("纳税人识别号不能为空");
        return;
    }
    //对纳税人识别号合法性校验
    var trws = /^[A-Za-z0-9]{1,20}$/;
    if (!trws.test(nsrsbh)) {
        swordAlert("纳税人识别号不合法，请重新输入 ");
        return;
    }
    var queryNsrxxBtn = pc.create("SwordSubmit");
    queryNsrxxBtn.pushData('nsrsbh', nsrsbh);
    queryNsrxxBtn.pushData('cxbz', cxbz);
    queryNsrxxBtn.setCtrl("SB097TydkdjsbCtrl_queryNsrxxByNsrsbhTydkdj");
    queryNsrxxBtn.setFunction("onSuccess", "queryNsrxxSuccess1");
    queryNsrxxBtn.setFunction("onError", "queryNsrxxCommError");
    queryNsrxxBtn.submit();
}




function queryNsrxxSuccess1(req, resData) {

    var nsrxxForm = $w("nsrxxForm");
    var nsrxxGird = pc.getResData("nsrjbxxgirdwid", resData);
    var nsrcheckValue = nsrxxGird.trs[0];
    var nsrParam = !$chk(nsrcheckValue) ? "" : nsrcheckValue.tds;

    if (nsrParam == "" || nsrParam == null || nsrParam == undefined) {
        swordAlert("未能根据当前纳税人识别号查询到当前纳税人基本数据信息，请重新输入！", {
            // 确定：所属期起获得焦点
            onOk: function () {
                /*(function() {
                    nsrxxForm.getFieldEl("dkdjywrsbh").focus();
                }).delay(500);*/
                nsrxxForm.setValue("dkdjywrsbh", "");
            }
        });
        nsrxxForm.disable('skssqz');
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
    nsrxxJsonVO = JSON.encode(nsrxxVO);

    // 纳税人状态监控
    var nsrztDm = nsrxxVO.nsrztDm;
    if (nsrztDm == "07") {
        swordAlert("纳税人为注销状态，请先办理重新税务登记！");
        nsrxxForm.disable('skssqz');
        return;
    } else if (nsrztDm == "04") {// 停业控制纳税人为停业状态且申报属期内全月停业,不允许进行申报
        // swordAlert("本纳税在本属期内停业，请先进行复业！");
        // nsrxxForm.disable('skssqz');
        // return;
    } else if (nsrztDm == "05") {
        swordAlert("纳税人处于非正常户状态，请进行非正常户解除，可继续进行申报！");
    } else if (nsrztDm == "06") {
        swordAlert("纳税人处于清算状态，可继续进行申报！");
    }
    nsrxxForm.enable('skssqz');

}

/**
 * onFinish时执行，绑定date类型keyup时事件
 * 
 * @return
 */
function addEventForDate() {
    /*$w("nsrxxForm").getFieldEl('skssqq').addEvent("keyup", function(e) {
		var flag = true;
		if (pc.calendar && pc.calendar.dateInput.get('show') == "true") {
			flag = false;
		}
		if (isEnterUp(e) && flag) {
			//queryNsrxx(e);
		}

	});*/
}

// 纳税人识别号校验是否录入
function nsrsbhCheck(el, v) {
    var result = {};
    if (v == "") {
        result["state"] = false;
        result["msg"] = "请输入纳税人识别号";
        $w('nsrxxForm').getFieldEl('nsrsbh').focus();
    }
    return result;
}

// 检查是否是Enter键
function isEnterUp(e) {
    var code = e.keyCode ? e.keyCode : e.code;
    return code == 13 || code == 32;
}

/**
 * 纳税人识别号校验，必填
 * 
 * @param el
 * @param v
 * @returns {___anonymous24909_24911}
 */
function rklxDmCheck(el, v) {
    var result = {};
    if (v == "") {
        // state值必须为false,否则不显示提示信息
        result["state"] = false;
        // msg为错误的提示信息
        result["msg"] = "请输入纳税人识别号";
        nsrxxForm.getFieldEl('nsrsbh').focus();
    }
    return result;
}

// 查询纳税人信息,skssqq回车后触发
function queryNsrxx(e) {
    if (e == "1" || isEnterUp(e)) {
        var nsrxxFormObj = $w('nsrxxForm');
        var nsrsbh = nsrxxFormObj.getValue("dkdjywrsbh");
        // cxbz 查询标志：
        // 1.只查询自然人
        // 2.只查询纳税人(需要权限过滤)
        // 3.只查询纳税人(不权限过滤)
        // 4.查询自然人和纳税人（纳税人需要权限过滤）；
        var cxbz = "4";
        queryNsrxxbyNsrsbh(nsrsbh, queryNsrxxSuccessCl, cxbz);
    }
}

// 查询纳税人信息成功回调函数:nsrParam 纳税人信息返回参数、zrrParam 自然人信息返回参数
function queryNsrxxSuccessCl(nsrParam, zrrParam) {

    var nsrxxForm = $w("nsrxxForm");
    /*if (nsrParam == "" || nsrParam == null || nsrParam == undefined) {
		swordAlert("未能根据当前纳税人识别号查询到当前纳税人基本数据信息，请重新输入！", {
			// 确定：所属期起获得焦点
				onOk : function() {
					(function() {
						form.getFieldEl("nsrsbh").focus();
					}).delay(500);
					form.setValue("nsrsbh", "");
				}
			});
		nsrxxForm.disable('skssqz');
		return;
	}*/
    // 纳税人
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
        nsrxxForm.getFieldEl('kjrwrmc').value = zrrParam.xm.value; // 纳税人名称
        gt3.djxh = zrrParam.djxh.value;// 登记序号
        djxh = zrrParam.djxh.value;// 登记序号
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
        nsrxxForm.setValue("hyDm", "9419");
    } else {
        swordAlert("纳税人识别号不正确，请重新输入");
        return;
    }



    nsrxxForm.enable('skssqz');
    var ssqq = nsrxxForm.getValue("skssqq");// 税款所属期起
    var ssqz = nsrxxForm.getValue("skssqz");// 税款所属期止
    if ("sbbck" == scenceCs) {
        changeSblx();  // 网报
    }
    initPBS(djxh, ssqq, ssqz);
}
/*******************************************************************************
 * 监控纳税人状态
 * 
 * @param {}
 *            nsrztDm 纳税人状态代码
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
/**
 * 修改税款所属期起事件触发
 * 
 * @param a
 * @param b
 * @return
 */
function changeSbssqq() {
    //	var skssqq = $w('nsrxxForm').getValue("skssqq");
    //	var skssqz = $w('nsrxxForm').getValue("skssqz");
    //	var sbrq = $w('nsrxxForm').getValue("sbrq1");
    //	
    //	
    //	
    //	var nsqxdm = gt3_nsqx;
    //	if ($w('nsrxxForm').validate()) {
    //		initPBS(djxh, skssqq, skssqz);
    //	}else{
    //		swordAlert("请先录入纳税人信息！");
    //	}
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
                }).delay(500);
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

    initPBS(djxh, form.getValue("skssqq"), form.getValue("skssqz"));
}

/*******************************************************************************
 * 当修改税款所属期止时进行校验
 * 
 * @return true：无 false：弹出错误消息
 */
function changeSbssqz() {
    var from = $w("nsrxxForm");
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

    initPBS(djxh, from.getValue("skssqq"), from.getValue("skssqz"));
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


function changeSbssqzForEnter(e) {
    if (isEnterUp(e)) {
        changeSbssqz();
    }
}

function changSkssq() {
    var form = $w("nsrxxForm");
    var nsqx_dm = gt3_nsqx;
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
    ssqzBtn.pushData('skssqq', $w('nsrxxForm').getValue("skssqq"));
    ssqzBtn.pushData('nsqxdm', nsqx_dm);
    ssqzBtn.submit();
}
function changSkssqForEnter(e) {
    if (isEnterUp(e)) {
        changSkssq();
    }
}

function loadBaseInfo1(req, resData) {
    $w("nsrxxForm").setValue('skssqq', resData.getAttr('skssqq'));
    $w("nsrxxForm").setValue('skssqz', resData.getAttr('skssqz'));

    changeSbssqz();
}

// 初始化后调用后台方法
function initPBS(djxh, skssqq, skssqz) {
    // 任意一项为空，return
    if (!$chk(djxh) || !$chk(skssqq) || !$chk(skssqz)) {
        return;
    }
    var initBtn = new SwordSubmit();
    var ctrlname1 = ctrlname + '_getInitData';
    initBtn.pushData('djxh', djxh);
    initBtn.pushData('skssqq', skssqq);
    initBtn.pushData('skssqz', skssqz);
    initBtn.setCtrl(ctrlname1);
    initBtn.setFunction('onSuccess', 'getzsxmOnSuccess');
    initBtn.setFunction('onError', 'initonjcxxError');
    initBtn.submit();
}

/**
 * 获取征收项目品目List
 * 
 * @param req
 * @param resData
 * @return
 */
function getzsxmOnSuccess(req, resData) {
    //ZOG00_201703220049 网报增加逻辑，获取初始化数据后导入按钮置亮
    $w('sbToolBar').setEnabled('export');

    zsxmList = pc.getResData("zsxmList", resData);
    zspmList = pc.getResData("zspmList", resData);
    zszmList = pc.getResData("zszmList", resData);
    hyList = pc.getResData("hyList", resData);
    xfsZspmList = pc.getResData("xfsZspmList", resData);
    gRdSfzxxList = pc.getResData("sfzRdxxList", resData);

    //获取跨地区税收收入分配比例
    kdqsssrfpBz = resData.getAttr("kdqsssrfpBz");
    kdqfpblList = pc.getResData("kdqfpblList", resData);

    loadZfbTree(zsxmList);// 加载主附表树

    // swordAlert("纳税人基础信息加载成功，请通过主附表树选择对应附表进行申报信息录入！")
    /*
	 * if (zsxmList == null || zsxmList == undefined || zsxmList.trs == null ||
	 * zsxmList.trs.length == 0) {
	 * swordAlert("纳税人没有代扣代缴的税费种认定信息,请先进行代扣代缴税费种认定！"); return; } else {
	 * loadZfbTree(zsxmList);// 加载主附表树 }
	 */
    //加载暂存数据
    var skssqq = $w('nsrxxForm').getValue("skssqq");
    var skssqz = $w('nsrxxForm').getValue("skssqz");
    skssqq = skssqq.length > 10 ? skssqq.substring(0, 10) : skssqq;
    skssqz = skssqz.length > 10 ? skssqz.substring(0, 10) : skssqz;
    if (tempsave_tryToLoadData) {
        var isAllow = tempsave_tryToLoadData(
    			"BDA0610136",
    			skssqq,
    			skssqz,
    			gt3.djxh,
    			"SB097TydkdjsbCtrl");
        if (isAllow) {
            return;
        }
    }
}

function initjcxxOnSuccess(req, resData) {
    // normalSB(resData);
    // setInitValue(resData);
}
function initonjcxxError(req, resData) {
    $w('sbToolBar').setDisabled('export');
    $w('sbToolBar').setDisabled('save');
}

function XMLForSBZF(resData) {
    sb097_resDataXMLForSBZF = resData;

    var headData = pc.getResData("nsrxxForm", resData);
    var nsrxxForm = $w('nsrxxForm');
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

    $w("nsrxxForm").disable();
    //$w("fjxxForm").disable();
    $w('dkdjdsdjskbgbGrid').readonly();
    //	$w("saveBtn").disabled();
    //	$w("cancel").disabled();
    $w('sbToolBar').setDisabled('save');
}

/**
 * 申报导入数据回现到页面,导入只回现汇总表数据
 * 
 * @param resData
 * @return
 */
function XMLForSBDR(resData) {
    sb097_cszForXML = "SBDR";// xml的参数值
    zsxmList = pc.getResData("zsxmList", resData);
    zspmList = pc.getResData("zspmList", resData);
    zszmList = pc.getResData("zszmList", resData);
    hyList = pc.getResData("hyList", resData);
    xfsZspmList = pc.getResData("xfsZspmList", resData);
    // loadZfbTree(zsxmList);
    djxh = resData.getAttr("djxh");
    sb097_resDataXMLForSBCWGZ = resData;// 准备好全局变量
    fbsjhx(resData);
    $w("sbZfbTree").reloadTree(null);// 隐藏主附表数，不展现附表数据

}
/**
 * 申报错误更正回现数据到页面
 * 
 * @param resData
 * @return
 */
function XMLForSBCWGZ(resData) {
    cwgzbz = "cwgzbz";
    zsxmList = pc.getResData("zsxmList", resData);
    zspmList = pc.getResData("zspmList", resData);
    zszmList = pc.getResData("zszmList", resData);
    hyList = pc.getResData("hyList", resData);
    xfsZspmList = pc.getResData("xfsZspmList", resData);
    gRdSfzxxList = pc.getResData("sfzRdxxList", resData);
    sb097_sbcwgzmap = pc.getResData("cwgzMap", resData);

    loadZfbTree(zsxmList);// 加载主附表树

    var cwgzMap = pc.getResData("cwgzMap", resData);
    sb097_sbcwgz_pzxh = cwgzMap.data.pzxh.value;
    sb097_sbcwgz_sbuuid = cwgzMap.data.sbuuid.value;

    djxh = resData.getAttr("djxh");
    var headData = pc.getResData("nsrxxForm", resData);
    var nsrxxForm = $w('nsrxxForm');
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

    // 包含银行经收申报表的情况，不允许更正
    var yhjszyGrid = pc.getResData("yhjszyGrid", resData);
    var yhjsSize = $chk(yhjszyGrid) && $chk(yhjszyGrid.trs) && $chk(yhjszyGrid.trs.length) ? yhjszyGrid.trs.length : 0;
    if (0 < yhjsSize) {
        fbXMLData["yhjszyGrid"] = {
            'value': yhjszyGrid
        };
        fbyhjszyGrid = yhjszyGrid;
        gt3._yhjsExistInCwgz = true;
        swordAlert("上一笔申报含有税收缴款书（银行经收）附表，已缴款不允许更正！");
        return;
    }

    fbsjhx(resData);

    drgzBz = resData.getAttr("drgzBz");
    if (drgzBz == "Y") {
        swordAlert("由于明细数据大于20条，请采用导入的方式进行申报更正！");
    }
}
/**
 * 附表数据回写显示处理
 */
function fbsjhx(resData) {
    sb097_resDataXMLForSBCWGZ = resData;// 准备好全局变量
    var dkdjdsdjskmxbgbGrid = pc.getResData("dkdjdsdjskmxbgbGrid",
			sb097_resDataXMLForSBCWGZ);
    var dkdjdsdjccsmxbgbGrid = pc.getResData("dkdjdsdjccsmxbgbGrid",
			sb097_resDataXMLForSBCWGZ);
    var dkdjdsdjskbgbGrid = pc.getResData("dkdjdsdjskbgbGrid",
			sb097_resDataXMLForSBCWGZ);
    var nsrxxForm = pc.getResData("nsrxxForm", sb097_resDataXMLForSBCWGZ);
    var slxxForm = pc.getResData("slxxForm", sb097_resDataXMLForSBCWGZ);

    $w("nsrxxForm").disable();

    // 导入回显处理,只回显汇总表数据
    $w("dkdjdsdjskbgbGrid").initData(dkdjdsdjskbgbGrid);
    $w("nsrxxForm").initData(nsrxxForm);
    $w("slxxForm").initData(slxxForm);

    // 首先要从统一受理页面中获取相应信息，存到页面对应位置
    if ($chk(dkdjdsdjskmxbgbGrid) && $chk(dkdjdsdjskmxbgbGrid.trs)
		&& $chk(dkdjdsdjskmxbgbGrid.trs.length)
		&& dkdjdsdjskmxbgbGrid.trs.length > 0) {
        fbXMLData["dkdjdsdjskmxbgbGrid"] = { 'value': dkdjdsdjskmxbgbGrid };
        datafbmx = JSON.encode(dkdjdsdjskmxbgbGrid);
    } else {
        if ($chk(dkdjdsdjccsmxbgbGrid) && $chk(dkdjdsdjccsmxbgbGrid.trs)
			&& $chk(dkdjdsdjccsmxbgbGrid.trs.length)
			&& dkdjdsdjccsmxbgbGrid.trs.length > 0) {
            fbXMLData["dkdjdsdjccsmxbgbGrid"] = { 'value': dkdjdsdjccsmxbgbGrid };
            datafbccs = JSON.encode(dkdjdsdjccsmxbgbGrid);
        }
    }

    var fjxxForm = pc.getResData("fjxxForm", sb097_resDataXMLForSBCWGZ);
    // 首先要从统一受理页面中获取相应信息，存到页面对应位置
    if (fjxxForm != null && fjxxForm != undefined && fjxxForm.sword != null
			&& fjxxForm.sword != undefined && fjxxForm.sword != "") {
        fbXMLData["fjxxForm"] = {
            'value': fjxxForm
        };
    }

    var swsxzyGrid = pc.getResData("swsxzyGrid", resData);
    if (swsxzyGrid != null && swsxzyGrid != undefined
			&& swsxzyGrid.sword != null && swsxzyGrid.sword != undefined
			&& swsxzyGrid.sword != "") {
        fbXMLData["swsxzyGrid"] = {
            'value': swsxzyGrid
        };
        fbswsxzyGrid = swsxzyGrid;
    }

    var yhjszyGrid = pc.getResData("yhjszyGrid", resData);
    var yhjsSize = $chk(yhjszyGrid) && $chk(yhjszyGrid.trs) && $chk(yhjszyGrid.trs.length) ? yhjszyGrid.trs.length : 0;
    if (0 < yhjsSize) {
        fbXMLData["yhjszyGrid"] = {
            'value': yhjszyGrid
        };
        fbyhjszyGrid = yhjszyGrid;
        // 网报修改
        if ("SBDRZC" != sb097_cszForXML) {
            swordAlert("上一笔申报含有税收缴款书（银行经收）附表，已缴款不允许更正！");
        }
        return;
    }

    var slxxForm = pc.getResData("slxxForm", resData);
    if (slxxForm != null && slxxForm != undefined && slxxForm.sword != null
			&& slxxForm.sword != undefined && slxxForm.sword != "") {
        fbXMLData["slxxForm"] = {
            'value': slxxForm
        };

    }

    var jkrxxForm = pc.getResData("jkrxxForm", resData);
    if (jkrxxForm != null && jkrxxForm != undefined && jkrxxForm.sword != null
			&& jkrxxForm.sword != undefined && jkrxxForm.sword != "") {
        fbXMLData["jkrxxForm"] = {
            'value': jkrxxForm
        };

    }

    var yhslxxForm = pc.getResData("yhslxxForm", resData);
    if (yhslxxForm != null && yhslxxForm != undefined
			&& yhslxxForm.sword != null && yhslxxForm.sword != undefined
			&& yhslxxForm.sword != "") {
        fbXMLData["yhslxxForm"] = {
            'value': yhslxxForm
        };

    }

}


/**
 * 初始化成功之后调用
 * 
 * @param req
 * @param resData
 * @return
 */
function initOnSuccess1(req, resData) {
    var sbxxList = pc.getResData("sbxxList", resData);//

    if (sbxxList != null && sbxxList != undefined && sbxxList != "") {
        var sbxxListTrs = sbxxList.trs;
        var singlezzsLdsk;
        singlezzsLdsk = sbxxListTrs[0].tds;

        var nsrxx = $w("nsrxxForm");
        nsrxx.setValue('skssqq', singlezzsLdsk.skssqq.value);
        nsrxx.setValue('skssqz', singlezzsLdsk.skssqz.value);

    }
    // swordAlertRight("初始化成功！");
    $w('sbToolBar').setDisabled('save');

}
/**
 * 初始化失败之后调用
 * 
 * @param req
 * @param resData
 * @return
 */
function initOnError(resData) {
    swordAlert("初始化数据失败！");
}

/**
 * 附表数据回填调用
 * 
 * @param req
 * @param resData
 * @return
 */
function boxCallBack(fb1GridData, data, bz, savexx, jmxxList) {
    savejmxxList = JSON.encode(jmxxList);
    if (bz == "ccsmx") {
        var datafbccs1 = data.getCurPageGridData();
        datafbccs = JSON.encode(datafbccs1);
        savemxb = JSON.encode(savexx);

        $w("dkdjdsdjskbgbGrid").initData(fb1GridData);
    } else if (bz == "mx") {

        var datafbmx1 = data.getCurPageGridData();
        datafbmx = JSON.encode(datafbmx1);

        savemxb = JSON.encode(savexx);

        $w("dkdjdsdjskbgbGrid").initData(fb1GridData);
    }

    // 回写主附表树
    var sbZfbTree = $w("sbZfbTree");
    sbZfbTree.select.setRealValue("00");
    sbZfbTree.select.setValue("代扣代缴、代收代缴税款报告表");
    $w("sbToolBar").setEnabled("edit");
    if (("SBCWGZ" == sb097_cszForXML && gt3._yhjsExistInCwgz) || "Y" == gt3._notChangeBz) {
        $w("sbToolBar").setDisabled("save");
        tempsave_disable('sbToolBar');
    } else {
        $w("sbToolBar").setEnabled("save");
        tempsave_enable('sbToolBar');
    }
}

/**
 * change事件获取zspmDm
 * 
 * @param req
 * @param resData
 * @return
 */
function jlSelect() {
    var checkRow = $w('dkdjdsdjskbgbGrid').getCheckedRowData();
    var zsxmDm = checkRow.getValue('zsxmDm');
    var grid = $w('dkdjdsdjskbgbGrid');
    var row = grid.getCheckedRow();
    var cell = row.getCell('zspmDm');
    var zspmDm = cell.get("text");

    var initBtn = new SwordSubmit();
    initBtn.pushData('zsxmDm', zsxmDm);

    initBtn.setFunction("onSuccess", 'initOnSuccess');//

    initBtn.submit();

}
/**
 * 从缓存中获取DM_GY_ZSPM并赋值
 * 
 * @param req
 * @param resData
 * @return
 */
function initOnSuccess(req, resData) {
    var grid = $w('dkdjdsdjskmxbgbGrid');// fb1Gridmx
    var row = grid.getCheckedRow();
    var cell = row.getCell('zspmDm');
    pc.reloadSel("DM_GY_ZSPM", resData);

    cell.set("text", "");
    cell.set("realvalue", "");
}

/**
 * 根据选择打开附表
 * 
 * @param req
 * @param resData
 * @return
 */
function initsblxdm() {
    // 设置参数类型

    $w('saveBtn').enabled();
    var title_valuechange;
    // 将nsrjbxxForm的某些信息放入到隐藏域中
    var nsrxxMap = $w('nsrxxForm');
    var sblxDm = nsrxxMap.getValue('sblxDm').code;

    if (sblxDm == "01") {// 正常申报
        title_valuechange = "代扣代缴、代收代缴税款明细报告表";
    }

    if (sblxDm == "02") {// 自查补报
        title_valuechange = "代扣代缴、代收代缴车船税明细报告表";
    }

    openTabBtn = $w('openTabBtn');
    openTabBtn.pushData("id", sblxDm);
    swordAlertIframe('', {
        titleName: title_valuechange,
        width: 1000,
        height: 450,
        param: window,
        isNormal: 'true',
        isMax: 'true',
        isClose: 'true',
        isMin: "false",
        max: 'true',
        submit: openTabBtn
    });

}

/**
 * 以下均用于附表回调
 * 
 * @param resData
 * @return
 */
function getParentValue1() {
    // table02iframeName为iframe的name，该变量不需要进行定义
    table01iframe.window.setInitValue(zsxmList, zspmList, zszmList,
			$w("slxxForm"), $w("nsrxxForm"), xfsZspmList, gRdSfzxxList); // 调用子页面方法
}

function getParentValue2() {
    // table02iframeName为iframe的name，该变量不需要进行定义
    table02iframe.window.setInitValue(zsxmList, zspmList, $w("slxxForm"),
			$w("nsrxxForm")); // 调用子页面方法
}

function toGrid() {

}
/**
 * @description 从下列字符串中获取code
 * @param selStr 
 */
function getCodeFromSelStr(selStr) {
    if (!$chk(selStr) || "" == selStr) {
        return "";
    }

    var codeCapValArray = selStr.split("|");
    if (codeCapValArray.length <= 1) {
        return codeCapValArray[0];
    }

    var codeValArray = codeCapValArray[0].split(",");
    return codeValArray.length > 1 ? codeValArray[1] : "";
}
/**
 * 点击保存时调用
 * 
 * @param req
 * @param resData
 * @return
 */
function declare() {
    swordConfirm("您是否确认填写无误，提交申报?", {
        onOk: function () { save(); },
        onCancel: function () { return; }
    });
}

/**
 * @description 保存前检查
 * 
 */
function beforeSaveCheck() {
    var grid = $w('dkdjdsdjskbgbGrid').totalRows();// fb1Gridmx
    var dkdjdsdjskbgbGrid = pc.getWidget('dkdjdsdjskbgbGrid').getAllGridData();

    var fb1ybtse = 0;
    if (fbswsxzyGrid != null && fbswsxzyGrid.trs != null
			&& fbswsxzyGrid.trs.length > 0) {
        var fbswsxzyListTrs = fbswsxzyGrid.trs;
        var childrenLength = fbswsxzyGrid.trs.length;
        for (var i = 0; i < childrenLength; i++) {
            var singlezzsLdsk = fbswsxzyListTrs[i];
            var sjje = singlezzsLdsk.tds.sjje.value;
            if (sjje / 1 <= 0) {
                swordAlert("税收缴款书（代扣代收专用）附表，第" + (i + 1) + "行,实缴金额需大于0请核实后申报！");
                return false;
            } else {
                fb1ybtse = fb1ybtse.accAdd(sjje);
            }

            // 处理预算科目、预算分配比例和税款国库在错更正未初始化表单是code,xx|caption,xxx的情况
            singlezzsLdsk.tds.yskmDm.value = getCodeFromSelStr(singlezzsLdsk.tds.yskmDm.value);
            singlezzsLdsk.tds.ysfpblDm.value = getCodeFromSelStr(singlezzsLdsk.tds.ysfpblDm.value);
            singlezzsLdsk.tds.skgkDm.value = getCodeFromSelStr(singlezzsLdsk.tds.skgkDm.value);
        }
    }
    var fbmxList;
    if (JSON.decode(datafbmx) != null && JSON.decode(datafbmx).trs != null
			&& JSON.decode(datafbmx).trs.length > 0) {
        fbmxList = JSON.decode(datafbmx);
    } else if (JSON.decode(datafbccs) != null
			&& JSON.decode(datafbccs).trs != null
			&& JSON.decode(datafbccs).trs.length > 0) {
        fbmxList = JSON.decode(datafbccs);
    }
    var fb2ybtse = 0;
    if (fbyhjszyGrid != null && fbyhjszyGrid.trs != null
			&& fbyhjszyGrid.trs.length > 0) {
        if (sb097_cszForXML == "SBCWGZ") {
            swordAlert("上一笔申报含有税收缴款书（银行经收）附表，已缴款不允许更正！");
            return false;
        }
        var fbswsxzyListTrs = fbyhjszyGrid.trs;
        var childrenLength = fbyhjszyGrid.trs.length;
        for (var i = 0; i < childrenLength; i++) {
            var singlezzsLdsk = fbswsxzyListTrs[i];
            var sjje = singlezzsLdsk.tds.sjje.value;
            if (sjje / 1 <= 0) {
                swordAlert("中华人民共和国税收缴款书（银行经收专用）附表，第" + (i + 1)
						+ "行,实缴金额需大于0请核实后申报！");
                return false;
            } else {
                fb2ybtse = fb2ybtse.accAdd(sjje);
            }

        }
    }

    var zbybtse = 0;
    var savemxbGrid = JSON.decode(datafbmx);
    if (savemxbGrid != null && savemxbGrid.trs != null
			&& savemxbGrid.trs.length > 0) {
        var savemxbGridTrs = savemxbGrid.trs;
        var childrenLength = savemxbGrid.trs.length;
        for (var i = 0; i < childrenLength; i++) {
            var singlezzsLdsk = savemxbGridTrs[i];
            var sdkdjdsdjse = singlezzsLdsk.tds.sdkdjdsdjse.value;
            var qzdbz = getGridValue(singlezzsLdsk.tds.qzdbz);
            if (qzdbz != "N") {
                zbybtse = zbybtse.accAdd(sdkdjdsdjse);
            }

        }
    } else {
        if (dkdjdsdjskbgbGrid != null && dkdjdsdjskbgbGrid.trs != null
				&& dkdjdsdjskbgbGrid.trs.length > 0) {
            var fbswsxzyListTrs = dkdjdsdjskbgbGrid.trs;
            var childrenLength = dkdjdsdjskbgbGrid.trs.length;
            for (var i = 0; i < childrenLength; i++) {
                var singlezzsLdsk = fbswsxzyListTrs[i];
                var sdkdjdsdjse = singlezzsLdsk.tds.sdkdjdsdjse.value;
                zbybtse = zbybtse.accAdd(sdkdjdsdjse);
            }
        }
    }

    if (fb1ybtse != 0 && fb1ybtse != zbybtse) {

        swordAlert("税收缴款书（代扣代收专用）附表实缴金额合计" + fb1ybtse + "与主表实代扣代缴代收代缴税额合计"
				+ zbybtse + "不一致(如果部分明细未达起征点，不应开具税收缴款书)，请核实后申报！");

        return false;
    }

    if (fb2ybtse != 0 && fb2ybtse != zbybtse) {
        swordAlert("中华人民共和国税收缴款书（银行经收专用）附表实缴金额合计" + fb2ybtse
				+ "与主表实代扣代缴代收代缴税额合计" + zbybtse
				+ "不一致(如果部分明细未达起征点，不应开具税收缴款书)，请核实后申报！");
        return false;
    }

    if (grid == 0) {
        swordAlertWrong("请填写代扣代缴税款申报表后，再进行保存！");
        return false;
    }
    // 车船税明细表和通用明细申报表不能同时提交
    var ccsGrid = JSON.decode(datafbccs);
    var mxbGrid = JSON.decode(datafbmx);
    if (ccsGrid != null && ccsGrid.trs != null && ccsGrid.trs.length > 0) {
        if (mxbGrid != null && mxbGrid.trs != null && mxbGrid.trs.length > 0) {
            swordAlertWrong("明细申报表和车船税申报表不能同时提交！");
            return false;;
        }
    }

    return true;
}

/**
 * 点击保存时调用
 * 
 * @param req
 * @param resData
 * @return
 */
var htfpbz = "N";
function save() {
    if (!beforeSaveCheck()) {
        return;
    }
    for (var key in fbXMLData) {
        if (key == "dkdjdsdjskmxbgbGrid") {
            sbxxList = fbXMLData[key].value;
            break;
        }
    }
    var nsrxxFrom = $w("nsrxxForm");
    if (kdqsssrfpBz == "Y" && $chk(sbxxList)) {
        nsrsbh = nsrxxFrom.getValue("dkdjywrsbh");
        nsrmc = nsrxxFrom.getValue("kjrwrmc");
        //检查是否含有做了跨地区税收收入分配的被扣缴纳税人
        var fpsize = 0;
        var bfpsize = 0;
        for (var i = 0; i < sbxxList.trs.length; i++) {
            var bkjdjxh = sbxxList.trs[i].tds.bkjdjxh.value;
            var zsxmDmkj = sbxxList.trs[i].tds.zsxmDm.value;
            var zspmDmkj = sbxxList.trs[i].tds.zspmDm.value;
            sbxxList.trs[i].tds.ynse.value = sbxxList.trs[i].tds.ydkdjdsdjse.value;
            sbxxList.trs[i].tds.zsdlfsDm.value = "2";
            sbxxList.trs[i].tds.kjdjxh.value = bkjdjxh;
            var fpflag = "N";
            for (var j = 0; j < kdqfpblList.trs.length; j++) {
                var pzbkjdjxh = kdqfpblList.trs[j].tds.bkjdjxh.value;
                var zsxmDm = kdqfpblList.trs[j].tds.zsxmDm.value;
                var zspmDm = kdqfpblList.trs[j].tds.zspmDm.value;
                if (bkjdjxh == pzbkjdjxh && zsxmDmkj == zsxmDm && ((!$chk(zspmDm)) || zspmDm == zspmDmkj)) {
                    fpflag = "Y"
                    break;
                }
            }
            if (fpflag == "Y") {
                fpsize = fpsize + 1;
            } else {
                bfpsize = bfpsize + 1;
            }

        }
        if (fpsize == 0) {
            saveSubmit();
        } else {
            if (bfpsize / 1 > 0) {
                swordAlert("扣缴明细报告中,不能同时存在需要跨区分配以及不需要跨区分配的税种!");
                return;
            }
            var xjxfpdnsr = 0.0;
            for (var i = 0; i < sbxxList.trs.length; i++) {
                var bkjdjxh = sbxxList.trs[i].tds.bkjdjxh.value;
                for (var j = 0; j < sbxxList.trs.length; j++) {
                    var bkjdjxh1 = sbxxList.trs[j].tds.bkjdjxh.value;
                    if (bkjdjxh != bkjdjxh1) {
                        xjxfpdnsr = xjxfpdnsr / 1 + 1;
                        break;
                    }
                }
            }
            if (xjxfpdnsr / 1 > 1) {
                swordAlert("一次扣缴过程中,只能包含一户需要进行跨区税款分配的纳税人");
                return;
            }

            htfpbz = "Y";
            sbxxList.name = "sbxxGrid";
            var kstlBtn = new SwordSubmit();
            kstlBtn.setCtrl("SBGyCtrl_openkdqsssrfpFb");
            kstlBtn.pushData(sbxxList);
            kstlBtn.pushData("djxh", djxh);
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
        }
    } else {
        saveSubmit();
    }
}

/**
 * @description 跨地区税收分配时弹出界面回调函数
 * 
 */
function sbbSavejx() {
    saveSubmit();
}

function saveSubmit(zcbz) {
    var savebeforeBtn = new SwordSubmit();

    savebeforeBtn.pushData("wjnrbj", g_wjnrbj);
    savebeforeBtn.pushData(JSON.decode(datafbccs));
    savebeforeBtn.pushData(JSON.decode(datafbmx));
    for (var key in fbXMLData) {
        if (key == "dkdjdsdjskmxbgbGrid") {
            sbxxList.name = "dkdjdsdjskmxbgbGrid"
            for (var i = 0; i < sbxxList.trs.length; i++) {
                var mxItem = sbxxList.trs[i];
                // 处理征收子目、税收减免性质代码在错更正未初始化表单是code,xx|caption,xxx的情况
                mxItem.tds.zszmDm.value = getCodeFromSelStr(mxItem.tds.zszmDm.value);
                mxItem.tds.ssjmxzDm.value = getCodeFromSelStr(mxItem.tds.ssjmxzDm.value);
            }
            savebeforeBtn.pushData(sbxxList);
            continue;
        } else if ("dkdjdsdjccsmxbgbGrid" == key) {
            var size = $chk(fbXMLData[key].value) ? fbXMLData[key].value.trs.length : 0;
            for (var i = 0; i < size; i++) {
                var ccsmxItem = fbXMLData[key].value.trs[i];
                // 处理征收子目、税收减免性质代码在错更正未初始化表单是code,xx|caption,xxx的情况
                ccsmxItem.tds.zszmDm.value = getCodeFromSelStr(ccsmxItem.tds.zszmDm.value);
                ccsmxItem.tds.ssjmxzDm.value = getCodeFromSelStr(ccsmxItem.tds.ssjmxzDm.value);
            }
        }
        savebeforeBtn.pushData(fbXMLData[key].value);
    }
    savebeforeBtn.pushData(JSON.decode(savemxb));
    savebeforeBtn.pushData(JSON.decode(savejmxxList));
    savebeforeBtn.pushData(fbswsxzyGrid);
    savebeforeBtn.pushData(fbyhjszyGrid);
    savebeforeBtn.pushData("htfpbz", htfpbz);

    if (sb097_cszForXML == "SBCWGZ") {
        // savebeforeBtn.pushData("cs", "SBCWGZ");
        savebeforeBtn.pushData(sb097_sbcwgzmap);
        // savebeforeBtn.pushData("pzxh", sb097_sbcwgz_pzxh);
        //modify 新增申报错误更正提示信息 by liwenjun 20150609 start 
        if (sbcwgzJs != 'sbcwgzJs') {
            savebeforeBtn.pushData("sbcwgzJs", 'sbcwgzJs');
        } else {
            savebeforeBtn.pushData("sbcwgzJs", 'sbcwgzSv');
        }
        //modify by liwenjun 20150609 end 
    }

    savebeforeBtn.pushData('djxh', djxh);
    savebeforeBtn.pushData('zxbztzsuuid', gt3.zxbztzsuuid);
    savebeforeBtn.pushData($w('nsrxxForm').getSubmitData());
    savebeforeBtn.pushData($w('slxxForm').getSubmitData());
    savebeforeBtn.postType = "ajax";
    savebeforeBtn.pushData($w('dkdjdsdjskbgbGrid').getAllGridData());
    savebeforeBtn.setFunction('onSuccess', 'SaveSuccess');
    savebeforeBtn.setCtrl("SB097TydkdjsbCtrl_saveSbxxData");
    if ("Y" == zcbz) {
        return savebeforeBtn;
    }
    savebeforeBtn.submit();
}

/**
 * 保存成功后的方法
 * 
 * @param req
 * @param resData
 * @return
 */
var successresData;
function SaveSuccess(req, resData) {

    var sbsaveReturnVO = pc.getResData("sbsaveReturnVO", resData);
    var returnBz = sbsaveReturnVO.data.returnBz.value;
    var swjgDm = pc.getResData("swjgDm", resData).value;
    //modify 新增申报错误更正提示信息 by liwenjun 20150609 start 
    sbcwgzJs = resData.getAttr('sbcwgzJs');
    if (sbcwgzJs == 'sbcwgzJs') {
        $w("sbToolBar").setEnabled("print");
        $w("sbToolBar").setEnabled("printHz");
        var pzxhPre = sbsaveReturnVO.data.pzxh.value;
        yzpzxh = pzxhPre;
        var ybtse = sbsaveReturnVO.data.ybtse.value;
        sbcwgzGyjs(pzxhPre, ybtse, djxh, resData, 'save', null);
    } else {
        //modify 新增申报错误更正提示信息 by liwenjun 20150609 end 
        if (returnBz == "Y") {// 调用征收开票
            var pzxh = sbsaveReturnVO.data.pzxh.value;
            var ybtse = sbsaveReturnVO.data.ybtse.value;
            if (pzxh != "") {
                //var pzxh = sbsaveReturnVO.data.pzxh.value;
                //var ybtse = sbsaveReturnVO.data.ybtse.value;
                yzpzxh = pzxh;
                $w("sbToolBar").setEnabled("print");
                $w("sbToolBar").setEnabled("printHz");
                fromYbSBJumpZskp(pzxh, ybtse, djxh, resData);
            }
        } else if (returnBz == "1") {// 不调用征收开票，提示申报金额
            var pzxh = sbsaveReturnVO.data.pzxh.value;
            var ybtse = sbsaveReturnVO.data.ybtse.value;
            if (ybtse < 0) {
                swordAlert("申报成功，当前纳税人申报凭证序号为： " + pzxh + " ,应缴纳税款为：" + ybtse
                        + " 元,请进行退抵税审批!");
            } else if (ybtse >= 0) {
                swordAlert("申报成功，当前纳税人申报凭证序号为： " + pzxh + " ,应缴纳税款为：" + ybtse
                        + " 元。");
            }
            $w("sbToolBar").setEnabled("print");
            $w("sbToolBar").setEnabled("printHz");
        }
    }
    //作废暂存数据
    var skssqq = $w('nsrxxForm').getValue("skssqq");
    var skssqz = $w('nsrxxForm').getValue("skssqz");
    skssqq = skssqq.length > 10 ? skssqq.substring(0, 10) : skssqq;
    skssqz = skssqz.length > 10 ? skssqz.substring(0, 10) : skssqz;
    if (tempsave_invalid) {
        tempsave_invalid(
				"BDA0610136",
				skssqq,
				skssqz,
				gt3.djxh);
    }


    $w("sbToolBar").setDisabled("save");
    tempsave_disable('sbToolBar');
    $w("sbToolBar").setDisabled("export");
}

/**
 * 重置时操作
 * 
 * @param req
 * @param resData
 * @return
 */
function reset() {
    $w('nsrxxForm').reset();
    $w('dkdjdsdjskbgbGrid').reset();

    var nsrxx = $w("nsrxxForm");
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

    //	$w("fjxxForm").setValue("slr", resetresData.getAttr("swrymc"));
    //	$w("fjxxForm").setValue("slrq", resetresData.getAttr("slrq"));
    //	$w("fjxxForm").setValue("slswjg", resetresData.getAttr("swjgmc"));

    document.getElementById('02').style.display = '';// 车船税明细表（仅仅允许报一种附表）
    document.getElementById('01').style.display = '';// 明细表（仅仅允许报一种附表）
    // 初始化各种附表及参数
    sb097_boolean_fb01 = false;// 代扣代缴明细附表
    sb097_boolean_fb02 = false;// 代扣代缴车船税明细附表
    datafbccs = {};
    datafbmx = {};

}

/*
 * 错误更正提示信息选择否时调用
 * @param 
 * @return
 * //modify 新增申报错误更正提示信息 by liwenjun 20150609 
*/
function sbcwgzNotSave() {
    sbcwgzJs = '';//清空
    if ("Y" != gt3._notChangeBz) {
        $w('sbToolBar').setEnabled('save');//点亮保存按钮
    }
}

/**
 * 保存失败触发
 * 
 * @param req
 * @param resData
 * @return
 */
function SaveError(req, res) {
    swordAlert("保存失败！");
}

/**
 * 当修改申报日期时进行检测，调用公共js里面的相应方法
 * 
 * @return
 */
function checkSbrq() {
    var sbrq1 = $w("nsrxxForm").getValue("sbrq1");
    if (nssbrq != null && nssbrq != undefined && nssbrq != "") {
        if (!sbData(sbrq1, nssbrq)) {

            result["state"] = false; // state值必须为false,否则不显示提示信息
            result["msg"] = "申报日期不得大于当前系统时间";
            $w("nsrxxForm").setValue("sbrq1", nssbrq);

        } else {
            result["state"] = true;
        }
    }
    return result;
}

/**
 * 当修改税款所属期时进行检测，调用公共js里面的相应方法
 * 
 * @return
 */
function checkSkssz(el) {

    var skssqq = $w("nsrxxForm").getValue("skssqq");
    var skssqz = $w("nsrxxForm").getValue("skssqz");

    var qMsg = "终止日期必须为大于起始日期!";
    var qDates = splitStr(skssqq);
    var zDates = splitStr(skssqz);
    var bz = compareDate2(skssqq, skssqz);

    if (bz == true) {
        result["state"] = true;

        var djxh = $w("nsrxxForm").getValue("djxh");
        var initBtn = new SwordSubmit();
        initBtn.pushData('djxh', djxh);
        initBtn.pushData('skssqq', skssqq);
        initBtn.pushData('skssqz', skssqz);
        initBtn.setTid('PBS_SB097_getZsxmandzspmnew');

        initBtn.setFunction("onSuccess", 'getzsxmOnSuccess');//

        initBtn.submit();

    } else {
        result["state"] = false; // state值必须为false,否则不显示提示信息
        result["msg"] = qMsg;

    }
    return result;

}

/**
 * 以下均用于附表回调
 * 
 * @param resData
 * @return
 */
function getParentValue3() {
    // table02iframeName为iframe的name，该变量不需要进行定义
    table03iframe.window.setInitValue(sb097hyCode, zsxmList, zspmList,
			$w("nsrxxForm"), $w("slxxForm"), djxh); // 调用子页面方法
}

function getParentValue4() {
    // table02iframeName为iframe的name，该变量不需要进行定义
    table04iframe.window.setInitValue(sb097hyCode, zsxmList, zspmList,
			$w("nsrxxForm"), $w("slxxForm"), djxh, nsrxxVO); // 调用子页面方法
}

// 以下方法为保存xml文件时附表数据组装
function setXMLDataFromAChild(data) {

    var flag = data.flag.value;
    if (flag == 1) {
        var gridName = data.gridName.value;
        var gridData = data.gridData.value;
        fbXMLData[gridName] = {
            'value': gridData
        };
    } else {
        var FormName = data.FormName.value;
        var FormData = data.FormData.value;
        fbXMLData[FormName] = {
            'value': FormData
        };
    }

    $w("sbToolBar").setEnabled("edit");
    if (("SBCWGZ" == sb097_cszForXML && gt3._yhjsExistInCwgz) || "Y" == gt3._notChangeBz) {
        $w("sbToolBar").setDisabled("save");
        tempsave_disable('sbToolBar');
    } else {
        $w("sbToolBar").setEnabled("save");
        tempsave_enable('sbToolBar');
    }
}

function jsyj(data, bz) {
    if (bz == "1") {
        fbswsxzyGrid = data;
    } else {
        fbyhjszyGrid = data;
        if (fbyhjszyGrid != null && fbyhjszyGrid.trs != null
				&& fbyhjszyGrid.trs.length > 0) {
            // 录入银行经收附表不允许跳转现金票证汇总
            // $w("returnButton").disabled();
        } else {
            // $w("returnButton").enabled();
        }
    }
}

function downloadEX() {
    var ctrlSub = new SwordSubmit();
    ctrlSub.options.postType = "download";
    ctrlSub.setCtrl("DrPublicPageCtrl_download?fileName=/template/sb/sb097/TAX_SB_097_TYDKDJSB_V1.0.xls");
    ctrlSub.submit();
}

function downloadEX_ccs() {
    var ctrlSub = new SwordSubmit();
    ctrlSub.options.postType = "download";
    ctrlSub.setCtrl("DrPublicPageCtrl_download?fileName=/template/sb/sb097/TAX_SB_097_TYDKDJSB_CSS_V1.0.xls");
    ctrlSub.submit();
}

function downloadXM() {
    var ctrlSub = new SwordSubmit();
    ctrlSub.options.postType = "download";
    ctrlSub.setCtrl("DrPublicPageCtrl_download?fileName=/template/sb/sb097/TAX_SB_097_TYDKDJSB_V1.0.xml");
    ctrlSub.submit();
}

function downloadXM_ccs() {
    var ctrlSub = new SwordSubmit();
    ctrlSub.options.postType = "download";
    ctrlSub.setCtrl("DrPublicPageCtrl_download?fileName=/template/sb/sb097/TAX_SB_097_TYDKDJSB_CCS_V1.0.xml");
    ctrlSub.submit();
}


/**
 * 模板下载
 * @return
 */
function download() {
    var ctrlSub = new SwordSubmit();
    ctrlSub.options.postType = "download";
    ctrlSub.setCtrl("GYDrCtrl_download?fileName=/sb/sb097/tydkdjdrmb.xls");
    ctrlSub.submit();
}
/**
 * 模板下载
 * @return
 */
function download1() {
    var ctrlSub = new SwordSubmit();
    ctrlSub.options.postType = "download";
    ctrlSub.setCtrl("GYDrCtrl_download?fileName=/sb/sb097/tydkdjdrmb_ccs.xls");
    ctrlSub.submit();
}
/**
 * 打印主表
 * @return
 */
function print() {
    //	var nsrxxForm=$w("nsrxxForm").getSubmitData();
    //	var slxxForm=$w("slxxForm").getSubmitData();
    //	var dkdjdsdjskbgbGrid=$w("dkdjdsdjskbgbGrid").getAllNoDeleteGridData();
    //	var yjmseHj = 0.00;
    //	var ydkdjdsdjseHj = 0.00;
    //	var sdkdjdsdjseHj = 0.00;
    //	if ($chk($w("dkdjdsdjskbgbGrid"))) {
    //		var hjRow = $w('dkdjdsdjskbgbGrid').hjRow;// 取到合计div元素
    //		var HjDiv = hjRow.getElements("div");// 取到合计cell数组
    //		yjmseHj = HjDiv[8].get("realvalue");
    //		ydkdjdsdjseHj = HjDiv[9].get("realvalue");
    //		sdkdjdsdjseHj = HjDiv[10].get("realvalue");
    //	}
    //	var printBtn = new SwordSubmit();
    //	printBtn.pushData(nsrxxForm);
    //	printBtn.pushData(slxxForm);
    //	printBtn.pushData(dkdjdsdjskbgbGrid);
    //	printBtn.pushData("yjmseHj", yjmseHj);
    //	printBtn.pushData("ydkdjdsdjseHj", ydkdjdsdjseHj);
    //	printBtn.pushData("sdkdjdsdjseHj", sdkdjdsdjseHj);
    //	printBtn.setCtrl(ctrlname + "_print");
    //	swordOpenWin('/sword?ctrl=' +ctrlname + '_print&r=' + Math.random(),
    //			printBtn);
    //	gyTaxPrint();
    printhtm();
}

/**
* 调用公用打印方法。
*/
function printhtm() {
    gyTaxPrintWordOrExcel();
}

/*******************************************************************************
 * 打印回执
 */
function printHz() {
    var printBtn = new SwordSubmit();
    printBtn.pushData("yzpzxh", yzpzxh);
    printBtn.pushData("sbbmc", "通用代扣代缴回执");
    printBtn.setCtrl("SBDyCtrl" + "_printHz");
    swordOpenWin('/sword?ctrl=' + "SBDyCtrl" + '_printHz&r=' + Math.random(),
			printBtn);
}


/**
 * 为主表定义打印模板uuid
 * @return
 */
function setZbdymbuuid() {
    var dymbuuid = "sb097_tydkdjsbprint";
    fykg = "N";
    hxdyForPrint = "Y";
    zzlx = "A4";
    caculateGridHJFlag = "Y";
    printMode = '{"PRINT_PAGE_PERCENT":"70%"}';
    printTitle = "申报——通用代扣代缴";
    return dymbuuid;
}
/**
 * @description 获取列表单元格值
 */
function getGridValue(gridItem) {
    if (!$chk(gridItem)) {
        return "";
    }

    return gridItem.value;
}

/**
 * @description 是否能修改
 * 
 */
function isNotChange() {
    if ("Y" == gt3._notChangeBz) {
        return true;
    }

    return false;
}
//暂存方法
function tempSave(fnName) {
    swordConfirm("附表数据必须点击过确认后可暂存，请确认是否全部点击过确定按钮", {
        okBtnName: "确认",
        cancelBtnName: "取消",
        onOk: function () {
            for (var key in fbXMLData) {
                if (key == "dkdjdsdjskmxbgbGrid") {
                    sbxxList = fbXMLData[key].value;
                    break;
                }
            }
            var saveBtn = saveSubmit('Y');
            //空:非业务平台条(swordSubmit.submit()), YWPT:业务明天方式提交(ywpt_submit)
            var params = '"",saveBtn';
            eval(fnName + '(' + params + ')');
        }
    });

}

//
function boxCallBackForSBzcdr(resData) {
    drzc.fbdkmx = "0";
    drzc.fbccmx = "0";
    drzc.fbdkds = "0";
    drzc.fbyhjs = "0";
    sb097_resDataXMLForSBCWGZ = resData;
    sb097_cszForXML = "SBDRZC";
    fbsjhx(resData);
}