var cxbj;
_arrVars['cxbj'] = cxbj;
function init() {
    if (_arrVars['scenceCs'] == 'sbbck') {
        // 申报表查看场景下禁用页面
        ywpt_disandhid('table66', 'h');
        ywpt_disable("nsrxxForm", "ALLITEM");
        ywpt_disable("yzxmGrid", "ALLITEM");
        ywpt_disable("slxxForm", "ALLITEM");
        return;
    }
    ywpt_butdisen('', 'sbToolBar', 'save', 'd');
    // 将纳税人名称、税款所属期起止 置灰
    ywpt_disable("nsrxxForm", "nsrmc,skssqq,skssqz,ybrbz,syybjsff");
    // 将受理人、受理日期、受理税务机关 置灰
    ywpt_disable("slxxForm", "slrDm,slrq,slswjgDm");
    // 将预征税额 置灰
    ywpt_disable("yzxmGrid", "yzse");
    if (_arrVars['cwgzbz'] != 'sbdr') {
        // 为销售额的blur事件添加方法
        $w("yzxmGrid")._switchColumn("xse", "text", {
            "onblur": 'setGtZero()'
        });
        // 根据条件控制扣除金额的值
        $w("yzxmGrid")._switchColumn("kcje", "text", {
            "onblur": 'setZero()'
        });
    }

    if (_arrVars['cwgzbz'] == 'sbdr') {
        ywpt_disable("nsrxxForm", "ALLITEM");
        $w('yzxmGrid').readonly();
        ywpt_disable("slxxForm", "ALLITEM");
    }
    // 为 是否增值税一般纳税人增加click事件添加方法
    $w('nsrxxForm').getFieldEl('ybrbz').addEvent('change', changeYbrbz);
    // 为 是否适用一般计税方法 的click事件添加方法
    $w('nsrxxForm').getFieldEl('syybjsff').addEvent('click', changeSkssqq);
    // 为“纳税人信息”的“税款所属期起”的“blur”触发事件，增加函数“changeSkssqq”
    $w('nsrxxForm').getFieldEl('skssqq').addEvent('change', changeSkssqq);

    // 错误更正的时候将工具栏保存、导入置灰
    if (_arrVars['cwgzbz'] == 'cwgzbz') {
        // 错误更正的时候将工具栏保存
        ywpt_butdisen('', 'sbToolBar', 'save', 'd');
        ywpt_butdisen('', 'sbToolBar', 'import', 'd');

    }
    // 错误更正判断
    if (_arrVars['cwgzbz'] == 'cwgzbz') {
        // 将“纳税人信息”的“纳税人识别号”置灰
        ywpt_disable("nsrxxForm", "nsrsbh");
        // 启用保存按钮
        ywpt_butdisen('', 'sbToolBar', 'save', 'e');
        // 结束IF判断

        if (_arrVars['cxbj'] == "N") {
            ywpt_butdisen('', 'sbToolBar', 'save,import', 'd');
            tempsave_disable("sbToolBar");
            ywpt_disable("nsrxxForm", "ALLITEM");
            ywpt_disable("yzxmGrid", "ALLITEM");
        }
        if (_arrVars['cxbj'] != "N") {
            initSuccess();
        }
    }
    if (_arrVars['cwgzbz'] == 'sbdr') {
        // 申报导入触发纳税人信息查询
        nsrxxFormVar = $w('nsrxxForm');
        queryNsrxxbyNsrsbh($w('nsrxxForm').getValue("nsrsbh"),
				queryNsrxxSuccess, ywpt_cxbz);
    }
    queryNsrxxbyNsrsbh($w('nsrxxForm').getValue("nsrsbh"),
			queryNsrxxSuccess, 2);

    //	var dzswj_sqkzkg = isEnableSkssq("BDA0610865");
    //	if($chk(dzswj_sqkzkg)&&dzswj_sqkzkg == "Y"){
    //		$w("nsrxxForm").disable(["skssqq","skssqz"]);
    //	}
}
// 定义输入纳税人识别号后带出纳税人信息的内容变量getAndSetNsrxxVar
var getAndSetNsrxxVar = "nsrmc=nsrmc,djxh=djxh";
_arrVars['getAndSetNsrxxVar'] = getAndSetNsrxxVar;
// 定义变量“getNsrxxSuccess”的值为：onQueryNsrxxSuccess
var getNsrxxSuccess = "onQueryNsrxxSuccess";
_arrVars['getNsrxxSuccess'] = getNsrxxSuccess;
// 定义变量changeDateEvent，记录所属期起变化后的触发的函数
var changeDateEvent = "skssqq=changeSkssqq";
_arrVars['changeDateEvent'] = changeDateEvent;
// 定义变量nsqxDm用来保存纳税期限代码，默认为06
var nsqxDm = '06';
_arrVars['nsqxDm'] = nsqxDm;
// 定义变量“ywpt_cxbz”的值为：'2'
var ywpt_cxbz = '2';
_arrVars['ywpt_cxbz'] = ywpt_cxbz;
// 保存成功后触发的事件变量saveOnSuccessEvent
var saveOnSuccessEvent = "afterSaveSuccess";
_arrVars['saveOnSuccessEvent'] = saveOnSuccessEvent;
var isShowBtn;
_arrVars['isShowBtn'] = isShowBtn;
// 定义计算函数：sb207grid_js
function sb207grid_js() {
    var yzxmDm = getCurRowColValue("yzxmGrid", "yzxmDm");
    var syybjsff = ywpt_getvalue('', 'nsrxxForm', "syybjsff");
    var ysyzl = getCurRowColValue("yzxmGrid", "yzl");
    var djzclx_1 = nsrxxReturn.djzclxDm.value.substring(0, 1);
    if (yzxmDm == "101016600" && syybjsff == "N" && djzclx_1 != "4"
			&& ysyzl / 1 == 0.015) {
        swordAlert("当前纳税人登记注册类型不为个体工商户，当“是否一般计税方法为否”时，出租不动产的预征率不允许选择：0.015。");
        ysyzl = 0.05;
        ywpt_call("", "updateRowColValue", "'yzxmGrid','yzl','0.05'");
    }
    // 计算预征税额，(销售额-扣除金额)/(税率或征收率+1)*预征率
    var ysxse = getCurRowColValue("yzxmGrid", "xse");
    var yskcje = getCurRowColValue("yzxmGrid", "kcje");
    var yssl1 = getCurRowColValue("yzxmGrid", "sl1");

    if ((ysxse - yskcje) / yssl1 * ysyzl < 0) {
        updateRowColValue("yzxmGrid", "yzse", 0.00)
    } else {
        updateRowColValue("yzxmGrid", "yzse",
				((ysxse - yskcje) / yssl1 * ysyzl).round(2));
    }
    // 结束函数定义
}
// 页面上的是否一般增值税纳税人方法
function changeYbrbz() {
    var ymYbrbz = $w('nsrxxForm').getValue("ybrbz");
    if ('Y' == ymYbrbz) {
        ywpt_enable("nsrxxForm", "syybjsff");
    } else {
        ywpt_bnfz('nsrxxForm', 'syybjsff', "N");
        ywpt_disable("nsrxxForm", "syybjsff");
    }
}
// 定义函数：onQueryNsrxxSuccess
function onQueryNsrxxSuccess() {
    if (_arrVars['cwgzbz'] != 'sbdr') {
        // 将“纳税人信息”的“税款所属期起”置亮
        ywpt_enable("nsrxxForm", "skssqq");
    }
    var cwgzbz = _arrVars['cwgzbz'];
    // 提交后台交互，Ctrl：SB207zzsyjnssbCtrl_getInitData
    ywpt_submit("", "SB207zzsyjnssbCtrl_getInitData",
			"djxh=nsrxxForm[djxh],nsqxDm=nsqxDm,cwgzbz=cwgzbz,nsrxxForm",
			"initSuccess", "", "ajax");
    // 结束函数定义
    if (tempsave_tryToLoadData(
			"BDA0610865",
			ywpt_getvalue('', 'nsrxxForm', "skssqq"),
			ywpt_getvalue('', 'nsrxxForm', "skssqz"),
			nsrxxReturn.djxh.value,
			nextOneCtrl)) {
        return;
    }
}
// 定义函数：changeSkssqq
function changeSkssqq() {
    // 定义变量“skssqq”，记录当前画面的的结果
    var skssqq = ywpt_getvalue('', 'nsrxxForm', "skssqq");
    _arrVars['skssqq'] = skssqq;
    // IF判断（skssqq == undefined,|| skssqq != ""）
    if ((skssqq == undefined) || (skssqq == '')) {
        // 税款所属期起不能为空
        swordAlert("税款所属期起不能为空!");
        // 返回
        return;
        // 结束IF判断
    }
    var cwgzbz = _arrVars['cwgzbz'];
    // 提交后台交互，Ctrl：SB207zzsyjnssbCtrl_getInitData
    ywpt_submit("", "SB207zzsyjnssbCtrl_getInitData",
			"djxh=nsrxxForm[djxh],nsqxDm=nsqxDm,cwgzbz=cwgzbz,nsrxxForm",
			"initSuccess", "", "ajax");
    // 结束函数定义
    if (tempsave_tryToLoadData(
        "BDA0610865",
        ywpt_getvalue('', 'nsrxxForm', "skssqq"),
        ywpt_getvalue('', 'nsrxxForm', "skssqz"),
        nsrxxReturn.djxh.value,
        nextOneCtrl)) {
        return;
    }

}
// 定义函数：initSuccess
function initSuccess() {
    if (_arrVars['isysb'] == "Y" && _arrVars['cxbj'] != "N") {
        swordConfirm("纳税人本月已进行增值税预缴申报，本次申报后会再次生成应征信息，请核实并确认是否继续申报！", {
            okBtnName: "是",
            cancelBtnName: "否",
            onOk: function () {
                ywpt_disandhid('table66', 'h');
                // 重新为当前画面的的变量“nsqxDm”付值：_arrVars['nsqxDm']
                nsqxDm = _arrVars['nsqxDm'];
                _arrVars['nsqxDm'] = nsqxDm;
                // 将当前画面的的保存按钮点亮
                ywpt_butdisen('', 'sbToolBar', 'save', 'e');
                document.all("table66_iframe").src = AddBizCode2URL("/sword_SB207zzsyjnssbCtrl_toSbfb.aspx?ctrl=SB207zzsyjnssbCtrl_toSbfb&id=table66&csh=0");
                fbisshow['table66'] = {
                    "value": "Y"
                };
                // 一般人标志 0 是主体在外省的报验户或者跨区税源登记,1小规模，2是一般人
                var ybrbz = _arrVars['ybrbz'];
                if (ybrbz == '0') {
                    ywpt_enable("nsrxxForm", "ybrbz,syybjsff");
                }
                if (ybrbz == '2') {
                    ywpt_enable("nsrxxForm", "syybjsff");
                }
            },
            onCancel: function () {
                ysfwtsxx = "";
                ywpt_butdisen('', 'sbToolBar', 'save', 'd');
                return;
            }
        });
    } else {
        ywpt_disandhid('table66', 'h');
        // 重新为当前画面的的变量“nsqxDm”付值：_arrVars['nsqxDm']
        nsqxDm = _arrVars['nsqxDm'];
        _arrVars['nsqxDm'] = nsqxDm;
        // 将当前画面的的保存按钮点亮
        ywpt_butdisen('', 'sbToolBar', 'save', 'e');
        document.all("table66_iframe").src = AddBizCode2URL("/sword_SB207zzsyjnssbCtrl_toSbfb.aspx?ctrl=SB207zzsyjnssbCtrl_toSbfb&id=table66&csh=0");
        fbisshow['table66'] = {
            "value": "Y"
        };
        // 一般人标志 0 是主体在外省的报验户或者跨区税源登记,1小规模，2是一般人
        var ybrbz = _arrVars['ybrbz'];
        if (ybrbz == '0') {
            ywpt_enable("nsrxxForm", "ybrbz,syybjsff");
        }
        if (ybrbz == '2') {
            ywpt_enable("nsrxxForm", "syybjsff");
        }

        if (_arrVars['cxbj'] == "N") {
            ywpt_butdisen('', 'sbToolBar', 'save,import', 'd');
            tempsave_disable("sbToolBar");
            ywpt_disable("nsrxxForm", "ALLITEM");
            ywpt_disable("yzxmGrid", "ALLITEM");
        }
    }
    // 结束函数定义
}
// 是否自行申报条件判断
function _checkRadio() {
    // 定义变量“zxsbFlag”，记录当前画面的的结果
    var zxsbFlag = ywpt_getvalue('', 'slxxForm', "zxsb");
    _arrVars['zxsbFlag'] = zxsbFlag;
    // IF判断（zxsbFlag == 'Y'）
    if (zxsbFlag == 'Y') {
        // 将代理人设为选填
        ywpt_itemswitch('', 'slxxForm', 'dlrxm', 'text', 'rule:');
        // 将代理人地址设为选填
        ywpt_itemswitch('', 'slxxForm', 'dlrdz', 'text', 'rule:');
        // 结束IF判断
    }
    // IF判断（zxsbFlag == 'N'）
    if (zxsbFlag == 'N') {
        // 将代理人设为必填
        ywpt_itemswitch('', 'slxxForm', 'dlrxm', 'text', 'rule:must');
        // 将代理人地址设为必填
        ywpt_itemswitch('', 'slxxForm', 'dlrdz', 'text', 'rule:must');
        // 结束IF判断
    }
    // 结束函数定义
}
// 定义函数：click_edit
function click_edit() {
    // 调用当前画面的的方法nextOne
    ywpt_call("", "nextOne", "");
    // 结束函数定义
}
// 定义函数：click_save
function click_save() {
    //大连国税特色----开始------
    // 结束函数定义
    if ($chk(isShowBtn) && isShowBtn == "Y" && isShowBtn != undefined) {
        var xmbh = ywpt_getvalue('', 'nsrxxForm', "xmbh");
        _arrVars['xmbh'] = xmbh;
        // IF判断（skssqq == undefined,|| skssqq != ""）
        if ((xmbh == undefined) || (xmbh == '')) {
            // 税款所属期起不能为空
            swordAlert("项目编号不能为空!");
            // 返回
            return;
            // 结束IF判断
        }
        // 结束函数定义
        var xmmc = ywpt_getvalue('', 'nsrxxForm', "xmmc");
        _arrVars['xmmc'] = xmmc;
        // IF判断（skssqq == undefined,|| skssqq != ""）
        if ((xmmc == undefined) || (xmmc == '')) {
            // 税款所属期起不能为空
            swordAlert("项目名称不能为空!");
            // 返回
            return;
            // 结束IF判断
        }
        // 结束函数定义
        var xmdz = ywpt_getvalue('', 'nsrxxForm', "xmdz");
        _arrVars['xmdz'] = xmdz;
        // IF判断（skssqq == undefined,|| skssqq != ""）
        if ((xmdz == undefined) || (xmdz == '')) {
            // 税款所属期起不能为空
            swordAlert("项目地址不能为空!");
            // 返回
            return;
            // 结束IF判断
        }
    }
    //大连国税特色---结束-----
    // 定义变量“rowsData”的值为：$w("yzxmGrid")。getAllGridData()。trs
    var rowsData = $w("yzxmGrid").getAllGridData().trs;
    _arrVars['rowsData'] = rowsData;
    // 定义变量“dataLineNum”的值为：rowsData。length
    var dataLineNum = rowsData.length;
    _arrVars['dataLineNum'] = dataLineNum;
    // 定义变量“length”的值为：rowsData。length
    var length = rowsData.length;
    _arrVars['length'] = length;
    // 开始遍历表格
    for (var i = 0; i < length; i++) { // IF判断（rowsData[i]。tds。xse。value<=0）
        if (rowsData[i].tds.xse.value <= 0) {
            // 重新为当前画面的的变量“dataLineNum”付值：dataLineNum-1
            dataLineNum = dataLineNum - 1;
            _arrVars['dataLineNum'] = dataLineNum;
            // 结束IF判断
        }
        // 结束表格遍历
    }
    //错误更正时候允许更正为0
    if (_arrVars['cwgzbz'] != 'cwgzbz') {
        // IF判断（dataLineNum<=0）
        if (dataLineNum <= 0) {
            // 弹出修改提示不与保存
            swordAlert("必须至少有一行填写数据，请修改！");
            // 跳出方法
            return;
            // 结束IF判断
        }
    }
    // 是否跳转附加税
    var sfFjsCsz = _arrVars['sfFjsCsz'];
    var tzdsfjssbcsz = _arrVars['tzdsfjssbcsz'];
    var fjsList = _arrVars['fjsXxList'];

    var sffjs = "N";
    if (sfFjsCsz == 'Y' && fjsList != null && fjsList != undefined
			&& fjsList.trs != null && fjsList.trs != undefined
			&& fjsList.trs.length > 0) {
        sffjs = 'Y';
    }
    var sfybrbz = ywpt_getvalue('', 'nsrxxForm', "ybrbz");
    // 非增值税一般纳税人的时候，不达到起征点的时候要友好的提示纳税人是否要继续申报，防止一根筋的人非要交钱
    if (sfybrbz == "N") {
        var qzd = _arrVars['qzd'] / 1;// 起征点金额
        var ysbJe = _arrVars['ysbJe'] / 1;// 已申报的数据
        for (var i = 0; i < length; i++) {
            var dqXse = $w("yzxmGrid").getAllGridData().trs[i].tds.xse.value / 1;
            var dqSl = $w("yzxmGrid").getAllGridData().trs[i].tds.sl1.value / 1;
            ysbJe += dqXse.divide(dqSl).round(2);
        }
        // IF判断小规模小于起征点
        if (ysbJe <= qzd) {
            ywpt_confirm('当前纳税人未达起征点，是否要继续申报', "save_new", "doNothing",
					"doNothing");
        }
        // IF判断小规模大于起征点
        if (ysbJe > qzd) {
            // 已经超过起征点、这直接调用保存方法
            ywpt_call("", "save_new", "");
        }
    }
    if (sfybrbz != "N") {
        // IF判断（_arrVars['cwgzbz']=='cwgzbz'）
        if (_arrVars['cwgzbz'] == 'cwgzbz' && sffjs != 'Y') {
            // 定义变量“pzxh”的值为：_arrVars['pzxh']
            var pzxh = _arrVars['pzxh'];
            _arrVars['pzxh'] = pzxh;
            // 定义变量“sbuuid”的值为：_arrVars['sbuuid']
            var sbuuid = _arrVars['sbuuid'];
            _arrVars['sbuuid'] = sbuuid;
            // 提交后台交互，Ctrl：SB207zzsyjnssbCtrl_save
            ywpt_submit(
					"",
					"SB207zzsyjnssbCtrl_save",
					"nsrxxForm,slxxForm,yzxmGrid,cwgzbz='cwgzbz',pzxh=pzxh,sbuuid=sbuuid",
					"ywpt_saveOnSuccess", "", "ajax");
            // 结束IF判断
        }
        // IF判断（_arrVars['cwgzbz']=='cwgzbz'）
        if (_arrVars['cwgzbz'] == 'cwgzbz' && sffjs == 'Y') {
            // 定义变量“pzxh”的值为：_arrVars['pzxh']
            var pzxh = _arrVars['pzxh'];
            _arrVars['pzxh'] = pzxh;
            // 定义变量“sbuuid”的值为：_arrVars['sbuuid']
            var sbuuid = _arrVars['sbuuid'];
            _arrVars['sbuuid'] = sbuuid;
            var jsyj = 0.00;
            var ynse = 0.00;
            for (var i = 0; i < length; i++) {
                var dqXse = $w("yzxmGrid").getAllGridData().trs[i].tds.xse.value / 1;
                var dqYnse = $w("yzxmGrid").getAllGridData().trs[i].tds.yzse.value / 1;
                var dqSl = $w("yzxmGrid").getAllGridData().trs[i].tds.sl1.value / 1;
                $w("yzxmGrid").getAllGridData().trs[i].tds.sybh.value = "0";
                $w("yzxmGrid").getAllGridData().trs[i].tds.yjse.value = 0;
                $w("yzxmGrid").getAllGridData().trs[i].tds.jsyj.value = dqXse
						.divide(dqSl).round(2);
                $w("yzxmGrid").getAllGridData().trs[i].tds.ynse.value = dqYnse;
            }
            var sbxxListForZsAndFjs;
            sbxxListForZsAndFjs = $w("yzxmGrid").getAllGridData();
            var lenFs = fjsList.trs.length;
            for (var i = 0; i < lenFs; i++) {
                sbxxListForZsAndFjs.trs.push(fjsList.trs[i]);
            }
            sbxxListForZsAndFjs.name = "sbxxList";
            sbxxListForZsAndFjs
            _arrVars['sbxxListForZsAndFjs'] = sbxxListForZsAndFjs;
            ywpt_disandhid("noFb", "h");
            // 提交后台交互，Ctrl：SB207zzsyjnssbCtrl_save
            ywpt_submit(
					"table66",
					"SBGyCtrl_toSbfb",
					"nsrxxForm,slxxForm,sbxxListForZsAndFjs,djxh=nsrxxReturn.djxh.value,sfsfz=sfsfz,yzpzzlDm='BDA0610865',cwgzbz='cwgzbz',pzxh=pzxh,sbuuid=sbuuid",
					"fjscallback", "", "ajax");
            var currbd = getCurDisFb("zb");
            openZbFb("table66", currbd);
            // 结束IF判断
        }
        // 正常申报判断,并且不跳转附加税
        if (_arrVars['cwgzbz'] == 'zcsb' && sffjs != 'Y') {
            // 提交后台交互，Ctrl：SB207zzsyjnssbCtrl_save
            ywpt_submit("", "SB207zzsyjnssbCtrl_save",
					"nsrxxForm,slxxForm,yzxmGrid,cwgzBz='N'",
					"ywpt_saveOnSuccess", "", "ajax");
            // 结束IF判断
        }
        // 正常申报判断，并且跳转附加税
        if (_arrVars['cwgzbz'] == 'zcsb' && sffjs == 'Y') {
            var jsyj = 0.00;
            var ynse = 0.00;
            for (var i = 0; i < length; i++) {
                var dqXse = $w("yzxmGrid").getAllGridData().trs[i].tds.xse.value / 1;
                var dqYnse = $w("yzxmGrid").getAllGridData().trs[i].tds.yzse.value / 1;
                var dqSl = $w("yzxmGrid").getAllGridData().trs[i].tds.sl1.value / 1;
                $w("yzxmGrid").getAllGridData().trs[i].tds.sybh.value = "0";
                $w("yzxmGrid").getAllGridData().trs[i].tds.yjse.value = 0;

                $w("yzxmGrid").getAllGridData().trs[i].tds.jsyj.value = dqXse
						.divide(dqSl).round(2);
                $w("yzxmGrid").getAllGridData().trs[i].tds.ynse.value = dqYnse;
            }
            var sbxxListForZsAndFjs;
            sbxxListForZsAndFjs = $w("yzxmGrid").getAllGridData();
            var lenFs = fjsList.trs.length;
            for (var i = 0; i < lenFs; i++) {
                sbxxListForZsAndFjs.trs.push(fjsList.trs[i]);
            }
            sbxxListForZsAndFjs.name = "sbxxList";
            sbxxListForZsAndFjs
            _arrVars['sbxxListForZsAndFjs'] = sbxxListForZsAndFjs;
            ywpt_disandhid("noFb", "h");
            // 提交后台交互，Ctrl：SB207zzsyjnssbCtrl_save
            ywpt_submit(
					"table66",
					"SBGyCtrl_toSbfb",
					"nsrxxForm,slxxForm,sbxxListForZsAndFjs,sfsfz=sfsfz=sfsfz,djxh=nsrxxReturn.djxh.value,yzpzzlDm='BDA0610865',cwgzBz='N'",
					"fjscallback", "", "ajax");
            var currbd = getCurDisFb("zb");
            openZbFb("table66", currbd);
            // 结束IF判断
        }


        // 正常申报判断,并且不跳转附加税
        if (_arrVars['cwgzbz'] == 'sbdr') {
            // 提交后台交互，Ctrl：SB207zzsyjnssbCtrl_save
            ywpt_submit("", "SB207zzsyjnssbCtrl_save",
					"nsrxxForm,slxxForm,yzxmGrid,fjsSbxxGrid,cwgzBz='N'",
					"ywpt_saveOnSuccess", "", "ajax");
            // 结束IF判断
        }
    }
    // 结束函数定义
    if (tzdsfjssbcsz == 'Y') {
        //国税跳转地税附加税页面的按钮
        var nsrxxAndBsry = null;
        bsry_nsrsbh = nsrxxReturn.nsrsbh.value;
        bsry_sfzjhm = nsrxxReturn.bsrsfzjhm.value;
        bsry_sfzjlxDm = nsrxxReturn.bsrsfzjzlDm.value;
        var tb = $w("sbToolBar");
        var fjstn = {
            name: "yjkp",// 按钮名字
            pclass: "new",
            caption: "预缴开票页面",
            enabled: "true",
            onclick: "tzfjssb()"
        };
        tb.insertButton(fjstn);
    }
}
/**
 * 实名办税证件号码
 */
var bsry_sfzjhm = "";
/**
 * 实名办税证件种类
 */
var bsry_sfzjlxDm = "";
/**
 * 实名办税纳税人识别号
 */
var bsry_nsrsbh = "";
function tzfjssb() {
    //	var url = "/sword?ctrl=SB246FjsfnssbCtrl_initView" +
    //			"&ruuids=34385&sDate=1498704618392" +
    //			"&rUUID=wM5oJ3okGQySyrZ5NNN5slTFGGmL585e" +
    //			"&sName=SB246FjsfnssbCtrl_initView" +
    //			"&yyuuid=ebc5fb5ced4244ddb41d926b881f1508" +
    //			"&zndm=01" +
    //			"&gt3zyydm=A0000001" +
    //			"&gt3ywfldm=A02" +
    //			"&gwssswjg=23311223205" +
    //			"&gwxh=26870" +
    //			"&gndm=A0000001A0600130" +
    //			"&gnssgwxh=26870" +
    //			"&gnstype=nojggw" +
    //			"&baseuuid=HZpcncLeWKemy2kuKcbmMM7SEzEQsC8D" +
    //			"&bsrySfzjlxDm=" + bsry_sfzjlxDm + 
    //			"&bsrySfzjhm=" + bsry_sfzjhm + 
    //			"&bsryNsrsbh=" + bsry_nsrsbh;
    var nsrData = "bsrySfzjlxDm=" + bsry_sfzjlxDm + "&bsrySfzjhm=" + bsry_sfzjhm + "&bsryNsrsbh=" + bsry_nsrsbh;
    var xtbm = "A0000001";//核心征管
    var gdsdybz = 'dsyy';
    //	var obj={
    //			id: 'dsfjssb',//tab页id,自己编写特殊点
    //			title : '地税附加税(费)申报',//打开tab页的名称
    //			tabContentType : 'iframe',//默认值
    //			src : url,//打开功能的地址 如/sword?ctrl=MH004InitLoginxxCtrl_openWin
    //			isCloseBtn : 'true', //是否有关闭按钮
    //			tabItemWidth : 120, //默认值
    //			isShowMenuItem : [ "false", "true", "true", "true" ] //默认值
    //		}
    var param = {
        xtbm: "A0000001",//核心征管
        dyxtgndm: "A0000001A0700025",//调用的系统功能代码，功能代码A0000001A0200083
        gdsdybz: 'dsyy',//国地税调用标志，调国税功能传固定值gsyy,调地税功能传固定值dsyy
        sfpzgwxh: 'Y',//是否拼装岗位序号，Y拼装业务参数。类似于功能树打开，N不拼装业务参数
        ywdata: nsrData//传业务数据，多数据用&分隔	
    };
    try {
        //		top. openGdsXtgnToIframeTab(xtbm,obj,gdsdybz);
        top.openGdsXtgnToIframeTab(param);

    } catch (e) {
    }
}
function save_new() {
    // 定义变量“rowsData”的值为：$w("yzxmGrid")。getAllGridData()。trs
    var rowsData = $w("yzxmGrid").getAllGridData().trs;
    _arrVars['rowsData'] = rowsData;
    // 定义变量“dataLineNum”的值为：rowsData。length
    var dataLineNum = rowsData.length;
    _arrVars['dataLineNum'] = dataLineNum;
    // 定义变量“length”的值为：rowsData。length
    var length = rowsData.length;
    _arrVars['length'] = length;
    // 开始遍历表格
    for (var i = 0; i < length; i++) { // IF判断（rowsData[i]。tds。xse。value<=0）
        if (rowsData[i].tds.xse.value <= 0) {
            // 重新为当前画面的的变量“dataLineNum”付值：dataLineNum-1
            dataLineNum = dataLineNum - 1;
            _arrVars['dataLineNum'] = dataLineNum;
            // 结束IF判断
        }
        // 结束表格遍历
    }
    //错误更正时候允许更正为0
    if (_arrVars['cwgzbz'] != 'cwgzbz') {
        // IF判断（dataLineNum<=0）
        if (dataLineNum <= 0) {
            // 弹出修改提示不与保存
            swordAlert("必须至少有一行填写数据，请修改！");
            // 跳出方法
            return;
            // 结束IF判断
        }
    }
    // 是否跳转附加税
    var sfFjsCsz = _arrVars['sfFjsCsz'];
    var fjsList = _arrVars['fjsXxList'];

    var sffjs = "N";
    if (sfFjsCsz == 'Y' && fjsList != null && fjsList != undefined
			&& fjsList.trs != null && fjsList.trs != undefined
			&& fjsList.trs.length > 0) {
        sffjs = 'Y';
    }
    // IF判断（_arrVars['cwgzbz']=='cwgzbz'）
    if (_arrVars['cwgzbz'] == 'cwgzbz' && sffjs != 'Y') {
        // 定义变量“pzxh”的值为：_arrVars['pzxh']
        var pzxh = _arrVars['pzxh'];
        _arrVars['pzxh'] = pzxh;
        // 定义变量“sbuuid”的值为：_arrVars['sbuuid']
        var sbuuid = _arrVars['sbuuid'];
        _arrVars['sbuuid'] = sbuuid;
        // 提交后台交互，Ctrl：SB207zzsyjnssbCtrl_save
        ywpt_submit(
				"",
				"SB207zzsyjnssbCtrl_save",
				"nsrxxForm,slxxForm,yzxmGrid,cwgzbz='cwgzbz',pzxh=pzxh,sbuuid=sbuuid",
				"ywpt_saveOnSuccess", "", "ajax");
        // 结束IF判断
    }
    // IF判断（_arrVars['cwgzbz']=='cwgzbz'）
    if (_arrVars['cwgzbz'] == 'cwgzbz' && sffjs == 'Y') {
        // 定义变量“pzxh”的值为：_arrVars['pzxh']
        var pzxh = _arrVars['pzxh'];
        _arrVars['pzxh'] = pzxh;
        // 定义变量“sbuuid”的值为：_arrVars['sbuuid']
        var sbuuid = _arrVars['sbuuid'];
        _arrVars['sbuuid'] = sbuuid;
        var jsyj = 0.00;
        var ynse = 0.00;
        for (var i = 0; i < length; i++) {
            var dqXse = $w("yzxmGrid").getAllGridData().trs[i].tds.xse.value / 1;
            var dqYnse = $w("yzxmGrid").getAllGridData().trs[i].tds.yzse.value / 1;
            var dqSl = $w("yzxmGrid").getAllGridData().trs[i].tds.sl1.value / 1;
            $w("yzxmGrid").getAllGridData().trs[i].tds.sybh.value = "0";
            $w("yzxmGrid").getAllGridData().trs[i].tds.yjse.value = 0;

            $w("yzxmGrid").getAllGridData().trs[i].tds.jsyj.value = dqXse
					.divide(dqSl).round(2);
            $w("yzxmGrid").getAllGridData().trs[i].tds.ynse.value = dqYnse;
        }
        var sbxxListForZsAndFjs;
        sbxxListForZsAndFjs = $w("yzxmGrid").getAllGridData();
        var lenFs = fjsList.trs.length;
        for (var i = 0; i < lenFs; i++) {
            sbxxListForZsAndFjs.trs.push(fjsList.trs[i]);
        }
        sbxxListForZsAndFjs.name = "sbxxList";
        sbxxListForZsAndFjs
        _arrVars['sbxxListForZsAndFjs'] = sbxxListForZsAndFjs;
        ywpt_disandhid("noFb", "h");
        // 提交后台交互，Ctrl：SB207zzsyjnssbCtrl_save
        ywpt_submit(
				"table66",
				"SBGyCtrl_toSbfb",
				"nsrxxForm,slxxForm,sbxxListForZsAndFjs,sfsfz=sfsfz,djxh=nsrxxReturn.djxh.value,yzpzzlDm='BDA0610865',cwgzbz='cwgzbz',pzxh=pzxh,sbuuid=sbuuid",
				"fjscallback", "", "ajax");
        var currbd = getCurDisFb("zb");
        openZbFb("table66", currbd);
        // 结束IF判断
    }
    // 正常申报判断,并且不跳转附加税
    if (_arrVars['cwgzbz'] == 'zcsb' && sffjs != 'Y') {
        // 提交后台交互，Ctrl：SB207zzsyjnssbCtrl_save
        ywpt_submit("", "SB207zzsyjnssbCtrl_save",
				"nsrxxForm,slxxForm,yzxmGrid,cwgzBz='N'", "ywpt_saveOnSuccess",
				"", "ajax");
        // 结束IF判断
    }

    // 正常申报判断，并且跳转附加税
    if (_arrVars['cwgzbz'] == 'zcsb' && sffjs == 'Y') {
        var jsyj = 0.00;
        var ynse = 0.00;
        for (var i = 0; i < length; i++) {
            var dqXse = $w("yzxmGrid").getAllGridData().trs[i].tds.xse.value / 1;
            var dqYnse = $w("yzxmGrid").getAllGridData().trs[i].tds.yzse.value / 1;
            var dqSl = $w("yzxmGrid").getAllGridData().trs[i].tds.sl1.value / 1;
            $w("yzxmGrid").getAllGridData().trs[i].tds.sybh.value = "0";
            $w("yzxmGrid").getAllGridData().trs[i].tds.yjse.value = 0;

            $w("yzxmGrid").getAllGridData().trs[i].tds.jsyj.value = dqXse
					.divide(dqSl).round(2);
            $w("yzxmGrid").getAllGridData().trs[i].tds.ynse.value = dqYnse;
        }
        var sbxxListForZsAndFjs;
        sbxxListForZsAndFjs = $w("yzxmGrid").getAllGridData();
        var lenFs = fjsList.trs.length;
        for (var i = 0; i < lenFs; i++) {
            sbxxListForZsAndFjs.trs.push(fjsList.trs[i]);
        }
        sbxxListForZsAndFjs.name = "sbxxList";
        sbxxListForZsAndFjs
        _arrVars['sbxxListForZsAndFjs'] = sbxxListForZsAndFjs;
        ywpt_disandhid("noFb", "h");
        // 提交后台交互，Ctrl：SB207zzsyjnssbCtrl_save
        ywpt_submit(
				"table66",
				"SBGyCtrl_toSbfb",
				"nsrxxForm,slxxForm,sbxxListForZsAndFjs,sfsfz=sfsfz,djxh=nsrxxReturn.djxh.value,yzpzzlDm='BDA0610865',cwgzBz='N'",
				"fjscallback", "", "ajax");
        var currbd = getCurDisFb("zb");
        openZbFb("table66", currbd);
        // 结束IF判断
    }
    // 正常申报判断,并且不跳转附加税
    if (_arrVars['cwgzbz'] == 'sbdr') {
        // 提交后台交互，Ctrl：SB207zzsyjnssbCtrl_save
        ywpt_submit("", "SB207zzsyjnssbCtrl_save",
				"nsrxxForm,slxxForm,yzxmGrid,fjsSbxxGrid,cwgzBz='N'",
				"ywpt_saveOnSuccess", "", "ajax");
        // 结束IF判断
    }
    // 结束函数定义
}
// 定义函数：yzlDataFilter
function yzlDataFilter(selectDatas, inputDiv, selectObj) {
    // 定义变量“newData”的值为：[]
    var newData = [];
    _arrVars['newData'] = newData;
    // 定义变量“rowData”的值为：$w('yzxmGrid')。getCheckedRowData()
    var rowData = $w('yzxmGrid').getCheckedRowData();
    _arrVars['rowData'] = rowData;
    // IF判断
    if ((rowData != undefined) && (rowData != null) && (rowData != '')) {
        // 遍历
        for (var i = 0; i < selectDatas.length; i++) { // IF判断
            if ((selectDatas[i].yzxmDm == undefined)
					|| (selectDatas[i].yzxmDm == null)
					|| (selectDatas[i].yzxmDm == '')
					|| (rowData.getValue('yzxmDm') == selectDatas[i].yzxmDm)) {
                // 重新为当前画面的的变量“newData[newData。length]”付值：selectDatas[i]
                newData[newData.length] = selectDatas[i];
                _arrVars['newData[newData.length]'] = newData[newData.length];
                // 结束IF判断
            }
            // 结束遍历
        }
        // 结束IF判断
    }
    // IF判断
    if ((rowData == undefined) || (rowData == null) || (rowData == '')) {
        // 重新为当前画面的的变量“newData”付值：selectDatas
        newData = selectDatas;
        _arrVars['newData'] = newData;
        // 结束IF判断
    }
    // 返回过滤结果
    return newData;
    // 结束函数定义
}
// 定义函数：yzxmDataFilter
function yzxmDataFilter(selectDatas, inputDiv, selectObj) {
    // 不对数据进行过滤
    return selectDatas;
    // 结束函数定义
}
// 定义函数：setZero
function setZero(realvalue, showvalue, rowData, cellEl, rowEl, oldValue, obj) {
    // 定义变量“yzxmDm”的值为：rowData。getValue('yzxmDm')
    var yzxmDm = rowData.getValue('yzxmDm');
    _arrVars['yzxmDm'] = yzxmDm;
    // 重新为当前画面的的变量“yzxmDm”付值：yzxmDm/1
    yzxmDm = yzxmDm / 1;
    _arrVars['yzxmDm'] = yzxmDm;
    // 定义变量“kcje”的值为：rowData。getValue('kcje')
    var kcje = rowData.getValue('kcje');
    _arrVars['kcje'] = kcje;
    // 重新为当前画面的的变量“kcje”付值：kcje/1
    kcje = kcje / 1;
    _arrVars['kcje'] = kcje;
    // 定义变量“xse”的值为：rowData。getValue('xse')
    var xse = rowData.getValue('xse');
    _arrVars['xse'] = xse;
    // IF判断（yzxmDm!='101017100',&&kcje!=0,&&kcje!=0。0）
    if ((yzxmDm != '101017100') && (kcje != 0) && (kcje != 0.0)) {
        // 弹出错误提示
        swordAlert('只有申报"建筑服务"时允许填写扣除金额！');
        // 调用当前画面的的方法updateRowColValue
        ywpt_call("", "updateRowColValue", "'yzxmGrid','kcje','0.00'");
        // 返回方法
        return;
        // 结束IF判断
    }
    // 调用当前画面的的方法sb207grid_js
    ywpt_call("", "sb207grid_js", "");
    // 结束函数定义
}
// 定义函数：setGtZero
function setGtZero(realvalue, showvalue, rowData, cellEl, rowEl, oldValue, obj) {
    // 定义变量“xse”的值为：rowData。getValue('xse')
    var xse = rowData.getValue('xse');
    _arrVars['xse'] = xse;
    // 重新为当前画面的的变量“xse”付值：xse/1
    xse = xse / 1;
    _arrVars['xse'] = xse;
    // IF判断（xse<0）
    if (xse < 0) {
        //
        swordAlert('销售额不能为负数！');
        // 调用当前画面的的方法updateRowColValue
        ywpt_call("", "updateRowColValue", "'yzxmGrid','xse','0.00'");
        // 返回方法
        return;
        // 结束IF判断
    }
    // 调用当前画面的的方法sb207grid_js
    ywpt_call("", "sb207grid_js", "");
    // 结束函数定义
}
// 附加税回调方法
function TheMainPage() {
    if (_arrVars['cwgzbz'] == 'cwgzbz') {
        save_submit_cwgz();
    }
    if (_arrVars['cwgzbz'] != 'cwgzbz') {
        save_submit();
    }
}
// 附加税错误更正保存方法
function save_submit_cwgz() {
    // 定义变量“rowsData”的值为：$w("yzxmGrid")。getAllGridData()。trs
    var rowsData = $w("yzxmGrid").getAllGridData().trs;
    _arrVars['rowsData'] = rowsData;
    // _arrVars['nsrxxForm'] =$w('nsrxxForm').getSubmitData();
    // 定义变量“dataLineNum”的值为：rowsData。length
    var dataLineNum = rowsData.length;
    _arrVars['dataLineNum'] = dataLineNum;
    // 定义变量“length”的值为：rowsData。length
    var length = rowsData.length;
    _arrVars['length'] = length;
    // 开始遍历表格
    for (var i = 0; i < length; i++) { // IF判断（rowsData[i]。tds。xse。value<=0）
        if (rowsData[i].tds.xse.value <= 0) {
            // 重新为当前画面的的变量“dataLineNum”付值：dataLineNum-1
            dataLineNum = dataLineNum - 1;
            _arrVars['dataLineNum'] = dataLineNum;
            // 结束IF判断
        }
        // 结束表格遍历
    }
    //错误更正时候允许更正为0
    if (_arrVars['cwgzbz'] != 'cwgzbz') {
        // IF判断（dataLineNum<=0）
        if (dataLineNum <= 0) {
            // 弹出修改提示不与保存
            swordAlert("必须至少有一行填写数据，请修改！");
            // 跳出方法
            return;
            // 结束IF判断
        }
    }

    // IF判断（_arrVars['cwgzbz']=='cwgzbz'）
    if (_arrVars['cwgzbz'] == 'cwgzbz') {
        // 定义变量“pzxh”的值为：_arrVars['pzxh']
        var pzxh = _arrVars['pzxh'];
        _arrVars['pzxh'] = pzxh;
        // 定义变量“sbuuid”的值为：_arrVars['sbuuid']
        var sbuuid = _arrVars['sbuuid'];
        _arrVars['sbuuid'] = sbuuid;
        // 提交后台交互，Ctrl：SB207zzsyjnssbCtrl_save
        ywpt_submit(
				"",
				"SB207zzsyjnssbCtrl_save",
				"ALLDATA,nsrxxForm,slxxForm,yzxmGrid,cwgzbz='cwgzbz',pzxh=pzxh,sbuuid=sbuuid",
				"ywpt_saveOnSuccess", "", "ajax");
        // 结束IF判断
    }
    // 结束函数定义
}
// 附加税正常申报保存方法
function save_submit() {
    // 定义变量“rowsData”的值为：$w("yzxmGrid")。getAllGridData()。trs
    var rowsData = $w("yzxmGrid").getAllGridData().trs;
    _arrVars['rowsData'] = rowsData;
    // _arrVars['nsrxxForm'] =$w('nsrxxForm').getSubmitData();
    // 定义变量“dataLineNum”的值为：rowsData。length
    var dataLineNum = rowsData.length;
    _arrVars['dataLineNum'] = dataLineNum;
    // 定义变量“length”的值为：rowsData。length
    var length = rowsData.length;
    _arrVars['length'] = length;
    // 开始遍历表格
    for (var i = 0; i < length; i++) { // IF判断（rowsData[i]。tds。xse。value<=0）
        if (rowsData[i].tds.xse.value <= 0) {
            // 重新为当前画面的的变量“dataLineNum”付值：dataLineNum-1
            dataLineNum = dataLineNum - 1;
            _arrVars['dataLineNum'] = dataLineNum;
            // 结束IF判断
        }
        // 结束表格遍历
    }
    //错误更正时候允许更正为0
    if (_arrVars['cwgzbz'] != 'cwgzbz') {
        // IF判断（dataLineNum<=0）
        if (dataLineNum <= 0) {
            // 弹出修改提示不与保存
            swordAlert("必须至少有一行填写数据，请修改！");
            // 跳出方法
            return;
            // 结束IF判断
        }
    }

    // IF判断（_arrVars['cwgzbz']=='cwgzbz'）
    if (_arrVars['cwgzbz'] == 'cwgzbz') {
        // 定义变量“pzxh”的值为：_arrVars['pzxh']
        var pzxh = _arrVars['pzxh'];
        _arrVars['pzxh'] = pzxh;
        // 定义变量“sbuuid”的值为：_arrVars['sbuuid']
        var sbuuid = _arrVars['sbuuid'];
        _arrVars['sbuuid'] = sbuuid;
        // 提交后台交互，Ctrl：SB207zzsyjnssbCtrl_save
        ywpt_submit(
				"",
				"SB207zzsyjnssbCtrl_save",
				"ALLDATA,nsrxxForm,slxxForm,yzxmGrid,cwgzbz='cwgzbz',pzxh=pzxh,sbuuid=sbuuid",
				"ywpt_saveOnSuccess", "", "ajax");
        // 结束IF判断
    }

    // 正常申报判断,并且不跳转附加税
    if (_arrVars['cwgzbz'] != 'cwgzbz') {
        // 提交后台交互，Ctrl：SB207zzsyjnssbCtrl_save
        ywpt_submit("", "SB207zzsyjnssbCtrl_save",
				"ALLDATA,nsrxxForm,djxh=nsrxxReturn.djxh.value,cwgzBz='N'",
				"ywpt_saveOnSuccess", "", "ajax");
        // 结束IF判断
    }
    // 结束函数定义
}
function afterSaveSuccess() {
    tempsave_invalid("BDA0610865", ywpt_getvalue('', 'nsrxxForm', "skssqq"), ywpt_getvalue('', 'nsrxxForm', "skssqz"), nsrxxReturn.djxh.value);

    if (_arrVars['cwgzbz'] != 'cwgzbz') {
        //调用当前画面的的方法saveSxslxx
        ywpt_call("", "saveSxslxx", "_arrVars['pzxh'],nsrxxReturn.djxh.value,nsrxxReturn.nsrsbh.value,nsrxxReturn.nsrmc.value,'SLSXA061001046','LCSXA061001040',_arrVars['swjgDm'],$w('flzlGrid').getCheckedData('check')");
        //结束IF判断
        ywpt_butdisen('', 'sbToolBar', 'import', 'd');

    }
    var currbd = getCurDisFb();
    openZbFb("BDA0610865", "table66");
}
//打印所需变量
var printFileType = "excel";
var hxdyForPrint;
var fykg;
var zzlx;
var printMode;
var printTitle;
// 计算表格合计
var caculateGridHJFlag;
var tsxx;
var ccbg;//超长表格
function setZbdymbuuid() {
    // 横向打印
    hxdyForPrint = "Y";
    // 计算表格合计
    caculateGridHJFlag = "Y";
    // 打印标题
    printTitle = "增值税预缴申报表";
    printMode = '{"PRINT_PAGE_PERCENT":"100%"}';
    // 返回打印模板UUID
    return "sb207_zzsyjnssb_print";
}

/*
 * 为“表单打印”添加的打印方法入口
 */
function print() {
    gyTaxPrintWordOrExcel();
}

//暂存保存操作
function tempSave(fnName) {
    var params = '"YWPT","","SB207zzsyjnssbCtrl_save,noSave","ALLDATA,nsrxxForm,slxxForm,yzxmGrid,cwgzbz=cwgzbz,pzxh=pzxh,sbuuid=sbuuid","ywpt_saveOnSuccess", "", "ajax"';

    eval(fnName + '(' + params + ')');
}