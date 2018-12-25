var nsrxxVO = {}; // 缓存纳税人主体数据信息
var nsrxxJsonVO = {}; // 缓存纳税人主体json对象,解决弹出纳税人选择框后引用对象失效,无法在自己JS里面通过JSON.encode(nsrxxVO)的问题
var isShowBtn = "";
/**
 * 点击功能树加载数据初始化方法
 * 
 * @param resData
 * @return
 */
function public_init(resData) {
    nsrxxForm = $w('nsrxxForm');
    var flzlGrid = $w('flzlGrid');
    // 引进工作流标签
    // setprintbotton();
    //控制属期开关 大连国税特色
    isShowBtn = resData.getAttr("isShowBtn");
    //控制属期开关 大连国税特色
    // 初始化按钮规则（保存按钮设置为灰色、附列资料默认收起、纳税人识别号获取焦点、页面表头数据信息对应）
    $w('sbToolBar').setDisabled('save');
    if (!flzlGrid.collapseDiv.hasClass('x-tool-s')) {
        flzlGrid.toggle();
    }
    //nsrxxForm.getFieldEl('nsrsbh').focus();
    nsrxxForm.disable(['nsrmc', 'sbrq1', 'nsrsbh']);

    (function () {
        try {
            //nsrxxForm.getFieldEl('nsrsbh').focus();
        } catch (err) {
        }
        ;
    }).delay(1);
}

/**
 * 
 * 检查是否是Enter键
 */
function isEnterUp(e) {
    var code = e.keyCode ? e.keyCode : e.code;
    return code == 13 || code == 32;
}

/**
 * 查询纳税人信息,skssqq回车后触发
 * 
 * @param e
 * @return
 */

var $_queryNsrxxFlag = 0;// 该标志用于控制不同用例查询单位纳税人还是自然人
function queryNsrxx(e) {
    debugger;
    //if (isEnterUp(e)) {
    //var nsrxxFormObj = $w('nsrxxForm');
    //var nsrsbh = nsrxxFormObj.getValue("nsrsbh");
    // cxbz 查询标志：
    // 1.只查询自然人
    // 2.只查询纳税人(需要权限过滤)
    // 3.只查询纳税人(不权限过滤)
    // 4.查询自然人和纳税人（纳税人需要权限过滤）；
    var cxbz = "4";
    if ($_queryNsrxxFlag == 1) {
        cxbz = "2";
    }
    queryNsrxxbyNsrsbh(e, queryNsrxxSuccess, cxbz);
    //}
}

/**
 * onFinish时执行，绑定date类型keyup时事件
 * 
 * @return
 */
function addEventForDate() {
    $w("nsrxxForm").getFieldEl('skssqq').addEvent("keyup", function (e) {
        var flag = true;
        if (pc.calendar && pc.calendar.dateInput.get('show') == "true") {
            flag = false;
        }
        if (isEnterUp(e) && flag) {
            queryNsrxx(e);
        }

    });
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
        //nsrxxForm.getFieldEl('nsrsbh').focus();
    }
    return result;
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
var $_cshFlag = 1; // 1 初始化 0 不初始化
function queryNsrxxSuccess(nsrParam, zrrParam) {

    var nsrxxForm = $w("nsrxxForm");
    if ((nsrParam == "" || nsrParam == null || nsrParam == undefined)
			&& (zrrParam == "" || zrrParam == null || zrrParam == undefined)) {
        swordAlert("未能根据当前纳税人识别号查询到当前纳税人基本数据信息，请重新输入！", {
            // 确定：所属期起获得焦点
            onOk: function () {
                (function () {
                    //nsrxxForm.getFieldEl("nsrsbh").focus();
                }).delay(500);
                nsrxxForm.setValue("nsrsbh", "");
            }
        });
        nsrxxForm.disable('skssqz');
        nsrxxForm.disable('nsrsbh');
        return;
    }
    var nsrxxParam = null;
    if (nsrParam != "" && nsrParam != null && nsrParam != undefined) {
        nsrxxParam = nsrParam;

    } else if (zrrParam != "" && zrrParam != null && zrrParam != undefined) {
        nsrxxParam = zrrParam;

    }

    // 开始遍历
    for (var prop in nsrxxParam) {
        if (typeof (nsrxxParam[prop]) == " function ") { // 方法
            nsrxxParam[prop]();
        } else { // p 为属性名称，nsrParam[p]为对应属性的值
            nsrxxVO[prop] = nsrxxParam[prop].value;
        }
    }
    nsrxxForm.setValue('nsrmc', nsrxxVO['nsrmc']);
    nsrxxJsonVO = JSON.encode(nsrxxVO);

    // 纳税人状态监控
    var nsrztDm = nsrxxVO.nsrztDm;
    if (nsrztDm == "07") {
        swordAlert("纳税人为注销状态，请先办理重新税务登记！");
        nsrxxForm.disable('skssqz');
        return;
    } else if (nsrztDm == "08") {
        swordAlert("纳税人为非正常户注销状态，请先办理重新税务登记！");
        // nsrxxForm.disable('skssqz');
        return;
    } else if (nsrztDm == "04") {// 停业控制纳税人为停业状态且申报属期内全月停业,不允许进行申报
        // swordAlert("本纳税在本属期内停业！");
        // nsrxxForm.disable('skssqz');
        // return;
    } else if (nsrztDm == "05") {
        swordAlert("纳税人处于非正常户状态，可继续进行申报，请尽快进行非正常户解除。");
    } else if (nsrztDm == "06") {
        swordAlert("纳税人处于清算状态，可继续进行申报。");
    }

    // 导入时，获取页面初始化数据
    if (typeof getSbdrInitData != 'undefined'
			&& getSbdrInitData instanceof Function) {
        getSbdrInitData();
    }

    // 导入时，不能执行changeSbssqz()
    if ($_cshFlag == 1) {
        changeSbssqz();
    } else {
        $_cshFlag = 1;
    }
}

/**
 * 修改税款所属期起事件触发
 * 
 * @param a
 * @param b
 * @return
 */
function changeSbssqz() {
    $w("sbToolBar").setDisabled("save");
    if (tempsave_disable) {
        tempsave_disable("sbToolBar");
    }

    var skssqq = $w('nsrxxForm').getValue("skssqq");
    var skssqz = $w('nsrxxForm').getValue("skssqz");
    var sbrq = $w('nsrxxForm').getValue("sbrq1");
    var nsqxdm = gt3_nsqx;
    if (nsqxdm != null && nsqxdm != undefined) {
        if (checkDate(skssqq, skssqz, sbrq, nsqxdm)) {
            var ssqzBtn = new SwordSubmit();
            ssqzBtn.setCtrl(ctrl + "_changeSbssqq");
            //modify by fanyl 20150923 将onSuccess改为onAfterLoadData，用于框架数据回填后，再执行回调方法
            //ssqzBtn.setFunction('onSuccess', 'loadBaseInfo');
            ssqzBtn.setFunction('onAfterLoadData', 'loadBaseInfo');
            ssqzBtn.pushData('nsrxxVO', JSON.encode(JSON.decode(nsrxxJsonVO)));
            ssqzBtn.pushData($w("nsrxxForm").getSubmitData());
            ssqzBtn.submit();
        }
    } else {
        var ssqzBtn = new SwordSubmit();
        ssqzBtn.setCtrl(ctrl + "_changeSbssqq");
        //modify by fanyl 20150923 将onSuccess改为onAfterLoadData，用于框架数据回填后，再执行回调方法
        //ssqzBtn.setFunction('onSuccess', 'loadBaseInfo');
        ssqzBtn.setFunction('onAfterLoadData', 'loadBaseInfo');
        ssqzBtn.pushData('nsrxxVO', JSON.encode(JSON.decode(nsrxxJsonVO)));
        ssqzBtn.pushData($w("nsrxxForm").getSubmitData());
        ssqzBtn.submit();
    }
    toGrid();
    var isShowBtnbz = isShowBtn;
    //网报修改begin：大连国税特色税款所属期起止置灰	 
    if ($chk(isShowBtnbz) && isShowBtnbz == "Y" && isShowBtnbz != undefined) {
        //$w("nsrxxForm").disable(["skssqq"]);
        nsrxxForm.disable('skssqq');
    }
        //网报修改end：大连国税特色税款所属期起止置灰
    else {
        nsrxxForm.enable('skssqq');
    }

    nsrxxForm.disable('nsrsbh');
}
function changeSbssqzForEnter(e) {
    if (isEnterUp(e)) {
        changeSbssqz();
    }
}

function changSkssq() {
    var form = $w("nsrxxForm");
    var nsqx_dm = gt3_nsqx;
    // alert("nsqx_dm="+nsqx_dm);
    var ssqzBtn = new SwordSubmit();
    var skssqq = $w('nsrxxForm').getValue("skssqq");
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



