var gs_gjj = [
	"{lrbxxForm_h4l2}={lrbxxForm_h1l2}-{lrbxxForm_h2l2}-{lrbxxForm_h3l2}",
	"{lrbxxForm_h9l2}={lrbxxForm_h4l2}+{lrbxxForm_h5l2}-{lrbxxForm_h6l2}-{lrbxxForm_h7l2}-" +
					"{lrbxxForm_h8l2}",
	"{lrbxxForm_h14l2}={lrbxxForm_h9l2}+{lrbxxForm_h10l2}+{lrbxxForm_h11l2}+{lrbxxForm_h12l2}-" +
					"{lrbxxForm_h13l2}",
	"{lrbxxForm_h16l2}={lrbxxForm_h14l2}-{lrbxxForm_h15l2}",

	"{lrbxxForm_h4l3}={lrbxxForm_h1l3}-{lrbxxForm_h2l3}-{lrbxxForm_h3l3}",
	"{lrbxxForm_h9l3}={lrbxxForm_h4l3}+{lrbxxForm_h5l3}-{lrbxxForm_h6l3}-{lrbxxForm_h7l3}-" +
					"{lrbxxForm_h8l3}",
	"{lrbxxForm_h14l3}={lrbxxForm_h9l3}+{lrbxxForm_h10l3}+{lrbxxForm_h11l3}+{lrbxxForm_h12l3}-" +
					"{lrbxxForm_h13l3}",
	"{lrbxxForm_h16l3}={lrbxxForm_h14l3}-{lrbxxForm_h15l3}"
];
gs_caculate = thgs(gs_gjj);

var sfdycbs;// 判断是否第一次报送财务报表
var bszldm;// 报送资料代码
var cjbz;// 采集标记
var sfkybc = false;
var djxh;
var cfcjbz;// 重复采集标记
var sqlrblist;
var bnsqb16;//
var lrbxx_Data = null;
var cjbz;
var lrbCjcgbj = 'N';// 利润表成功采集标记 默认为否
var lrbxxForm;
var sb100_resDataXMLForSBDR = null;//申报导入标志
var lrbxxData;
var beSbdr = false;
/**
 * 初始化处理
 * 
 * @param {Object}
 *            resData
 */
function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled("bcBtn");
        $w("qykjzdInner").setDisabled("qxBtn");
        $w("lrbxxForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("nsrxxForm").disable();   //此段需求看自己用附表FROM表单名置灰。
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
    }
    sb100_resDataXMLForSBDR = parent.fblrbxx;// 申报错误更正返回的resData
    if (sb100_resDataXMLForSBDR != null && sb100_resDataXMLForSBDR != undefined && "" != sb100_resDataXMLForSBDR) {
        $w("lrbxxForm").initData(sb100_resDataXMLForSBDR);
        //$w("lrbxxForm").disable();
        for (var i = 1; i <= 22; i++) {
            $w("lrbxxForm").enable(["h" + i + "l1"]);
        }
    }

    parent.setHx("01", window);
    lrbxxForm = $w("lrbxxForm");
    nsrxxForm = $w("nsrxxForm");

    nsrxxForm.disable(['nsrsbh']);
    $w("nsrxxForm").setValue("bbssq", parent.bbssq);
    parent.$w('zzsybnsrsb').setDisabled('save');
    parent.$w('zzsybnsrsb').setDisabled('import');
    parent.$w('zzsybnsrsb').setDisabled('reset');
    //	if(sb100_resDataXMLForSBDR==null||sb100_resDataXMLForSBDR==""||sb100_resDataXMLForSBDR==undefined){
    //		//查看导入报此处js错误 注释掉
    //		//		if(parent.cxbj == 'Y'){
    ////		(function(){lrbxxForm.getFieldEl('h1l2').focus();}).delay(1);
    ////        }
    //	}
    if (parent.beSbdr && beSbdr == false) {
        parent.$w('zzsybnsrsb').setEnabled('save');
        parent.$w('zzsybnsrsb').setEnabled('import');
        parent.$w('zzsybnsrsb').setEnabled('reset');
        beSbdr = true;
        if (sb100_resDataXMLForSBDR != null && sb100_resDataXMLForSBDR != undefined
				&& "" != sb100_resDataXMLForSBDR) {
            (function () {
                var inputs = $$('input');
                inputs.each(function (input, idx) {
                    if (input.id != "") {
                        caculate(input.id);
                    }
                });
                savefb();
                beSbdr = false;
            }).delay(1);

        }

    }
}

// 不是重复采集，上年无论成功采集与否，都获取上年的本年累计定义为全局变量，用于计算本年累计
function setInitValue(open_nsrsbh, open_nsrmc, open_bsrq, open_skssqq, open_skssqz, open_sqlrblist, open_bbssq) {

    if (open_sqlrblist == null || open_sqlrblist == "" || open_sqlrblist == undefined) {
        swordAlert("利润表上期未采集数据");
    }
    $w("nsrxxForm").setValue("nsrsbh", open_nsrsbh);
    $w("nsrxxForm").setValue("nsrmc", open_nsrmc);
    $w("nsrxxForm").setValue("bsrq", open_bsrq);
    $w("nsrxxForm").setValue("bbssq", open_bbssq);

    sqlrblist = open_sqlrblist;
    // open_sqlrblist是上年本年累计数
    var month = open_skssqq.substring(5, 7);
    var len = parseInt(open_skssqz.substring(5, 7)) - (parseInt(open_skssqq.substring(5, 7)));
    if (month != "01" && len != "11") {
        if (open_sqlrblist != undefined && open_sqlrblist.trs.length > 0) {
            var lrbxxForm = $w("lrbxxForm");
            for (var i = 0; i < open_sqlrblist.trs.length; i++) {
                var ewbhxh = open_sqlrblist.trs[i].tds.ewbhxh.value;
                if (ewbhxh < 17) {
                    var bnljs = open_sqlrblist.trs[i].tds.bnljs.value;
                    lrbxxForm.setValue("h" + ewbhxh + "l3", bnljs);
                }
            }
        }
    }
    if (len == "11") {
        if (open_sqlrblist != undefined && open_sqlrblist.trs.length > 0) {
            var lrbxxForm = $w("lrbxxForm");
            for (var i = 0; i < open_sqlrblist.trs.length; i++) {
                var ewbhxh = open_sqlrblist.trs[i].tds.ewbhxh.value;
                if (ewbhxh > 16) {
                    var bys = open_sqlrblist.trs[i].tds.bys.value;
                    lrbxxForm.setValue("h" + ewbhxh + "l3", bys);
                }
            }
        }
    }
    (function () {
        lrbxxData = $w("lrbxxForm").getSubmitData();
    }).delay(100);
}
// 重复采集，获取上次采集的本年累计数据，定义为全局变量，在上次采集的基础上计算本年累计
function setCfcjInitValue(open_cfcjTyNsrxxForm, open_sqlrblist, open_qykjzdlrbForm, open_cfcjbz) {
    sqlrblist = open_sqlrblist;
    $w("nsrxxForm").initData(open_cfcjTyNsrxxForm);
    if (sb100_resDataXMLForSBDR == null || sb100_resDataXMLForSBDR == "" || sb100_resDataXMLForSBDR == undefined) {
        $w("lrbxxForm").initData(open_qykjzdlrbForm);
    }
    cfcjbz = open_cfcjbz;
    (function () {
        lrbxxData = $w("lrbxxForm").getSubmitData();
    }).delay(100);
}

/**
 * 计算本年累计
 * @param 数据项所在行次
 */
function jsbnlj(x) {
    var name = "h" + x + "l3";
    if (lrbxxData != undefined && lrbxxData != null && lrbxxData != "") {
        var sqbnljs = lrbxxData.data[name].value;
        var sqbys = lrbxxData.data["h" + x + "l2"].value;

        var bnljs = parseFloat(lrbxxForm.getValue("h" + x + "l2"))
				+ parseFloat(sqbnljs - sqbys);
        lrbxxForm.setValue("h" + x + "l3", bnljs);
    }

    //计算本年累计中置灰数据项
    caculate("lrbxxForm_h" + x + "l3");
    //	
    //	if(x==1 || x==2 || x==3){
    //		var bnljs4 = parseFloat(lrbxxForm.getValue("h1l3"))- parseFloat(lrbxxForm.getValue("h2l3"))- parseFloat(lrbxxForm.getValue("h3l3"));
    //		lrbxxForm.setValue("h4l3", bnljs4);
    //	}
    //	if(x==4 || x==5 || x==6 || x==7 || x==8){ 
    //	    var bnljs9 = parseFloat(lrbxxForm.getValue("h4l3"))+ parseFloat(lrbxxForm.getValue("h5l3"))- parseFloat(lrbxxForm.getValue("h6l3"))
    //	                   - parseFloat(lrbxxForm.getValue("h7l3"))- parseFloat(lrbxxForm.getValue("h8l3"));
    //		lrbxxForm.setValue("h9l3", bnljs9);
    //	}
    //	if(x==9 || x==10 || x==11 || x==12 || x==13){ 
    //	    var bnljs14 = parseFloat(lrbxxForm.getValue("h9l3"))+ parseFloat(lrbxxForm.getValue("h10l3"))+ parseFloat(lrbxxForm.getValue("h11l3"))
    //	                   + parseFloat(lrbxxForm.getValue("h12l3"))- parseFloat(lrbxxForm.getValue("h13l3"));
    //		lrbxxForm.setValue("h14l3", bnljs14);
    //	    var bnljs16 = parseFloat(lrbxxForm.getValue("h14l3"))- parseFloat(lrbxxForm.getValue("h15l3"));
    //	    lrbxxForm.setValue("h16l3", bnljs16);
    //	}
    //    if( x==15){ 
    //	    var bnljs16 = parseFloat(lrbxxForm.getValue("h14l3"))- parseFloat(lrbxxForm.getValue("h15l3"));
    //     	lrbxxForm.setValue("h16l3", bnljs16);
    //	}
}

/**
 * 保存事件
 */
function savefb() {
    if (cjbz == "1" && lrbCjcgbj == 'Y') {// 成功采集并且上期利润表进行了表单采集
        var lrbxxFormData = $w("lrbxxForm");
        var dqbnljs = lrbxxFormData.getValue("b16");// 当期本年累计数
        var dqbys = lrbxxFormData.getValue("a16");// 当前本月数
        // 判断当期的本年累计数是否等于本年上期利润表的“本年累计数”加上当期的本月数 如果相等继续执行
        if (parseFloat(dqbnljs) != (parseFloat(bnsqb16) + parseFloat(dqbys))) {
            swordConfirm("本年累计数不正确，是否保存？", {
                okBtnName: "是",
                cancelBtnName: "否",
                onOk: function () {
                    saveTrue();
                },
                onCancel: function () {
                    gyxssq();
                }
            });
        } else {
            saveTrue();
        }
    } else if (sfdycbs == '0' || cfcjbz == "Y" || lrbCjcgbj != 'Y') {// 第一次报送
        saveTrue();
    }
}
function saveTrue() {
    var nsrxxForm = $w('nsrxxForm');
    if (!nsrxxForm.validate()) {
        return;
    }
    var lrbxxForm = $w("lrbxxForm");
    if (!lrbxxForm.validate()) {
        return;
    }
    parent.hxFb(lrbxxForm, '01', beSbdr);// 将子页面信息缓存到主表页面
    parent.$w('zzsybnsrsb').setEnabled('save');
    parent.$w('zzsybnsrsb').setEnabled('import');
    parent.$w('zzsybnsrsb').setEnabled('reset');

}
/**
 * 取消修改时，将页面用户修改的值还原
 * 
 * @return
 */
function gyxssq() {
    $w("lrbxxForm").initData(lrbxx_Data);
}
/**
 * 取消
 */
function reset() {
    $w('lrbxxForm').resetAll();
}
/**
 * 附表打印函数
 * @return
 */
function setFbdymbuuid() {
    parent.dymbuuid = "sb100_qykjzdcwbbbsyxxcj_lrb";
    parent.hxdyForPrint = "N";
    parent.printTitle = "利润表(适用执行企业会计制度的企业)";
    parent.zzlx = "A4";
    parent.fykg = "N";
    parent.caculateGridHJFlag = "N";
    parent.printMode = '{"PRINT_PAGE_PERCENT":"100%"}';
}
