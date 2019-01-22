/**
 * Created by IntelliJ IDEA.
 * User: Administrator
 * Date: 13-11-30
 * Time: 上午10:05
 * To change this template use File | Settings | File Templates.
 */
//使用窗口组件加载时注释下面的代码
$(document).ready(function () {
    tljs.onLoad();
});
/**
 *
 *
 */
var tljs = (function () {
    //私有属性
    var curSeg; // 保存fb4对象的
    var SBBXH = '';
    var SBBZL_DM = '';
    var SSSQ_Q = '';
    var SSSQ_Z = '';
    var SBBZT = "";//申报状态
    //私有方法
    var YNSEHJ = '';//主表第24行应纳税额合计
    //是否是添加
    var bAdd = true;
    //私有方法
    var data1;
    var sqList = '';//接口返回上期数据 

    //公有方法
    return {
        //自动计算
        onCalc: function
            (obj) {
            DCellWeb1.calcManual(obj.checked);
        }
        ,
        onLoad: function () {
            curSeg = tljs;
            //引用报表控制
            dcell(DCellWeb1, "/hlwsb/printModel/zzs/ybnsr/ybnsr2016/sb_zzs_ybnsr_ygzsffxcsmxb.cll");
            curSeg.onQuery();
            //删除组件释放内存
            $(window).unload(function () {
            });
        }
        ,
        onPrint: function () {
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z
            });
            window.location = "/hlwsb/zzs_print/ybnsr/ybnsr2016/sb_zzs_ybnsr_ygzsffxcsmxb.html?" + str;
        }
        ,
        //查询数据
        onQuery: function () {
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");    //获取页面申报表种类代码标记
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");
            var url = "/hlwsb/zzs/ybnsr/getSB_ZZS_YBNSR_YGZSFFXCSMXB.do";
            baseTools.xhrAjax({
                url: url,
                params: {SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z},
                callback: [curSeg.pageFlowControl]
            });
        }
        ,
        //保存数据
        onSave: function () {
            if (!curSeg.checkData()) {
                return false;
            }
            if(!curSeg.softCheck()){
                return false;
            }
            if (SBBZT == "2" || SBBZT == "3") {
                alert("数据已申报，不允许添加");
                return null;
            }
            var map = DCellWeb1.cellRowToJson({
                cols: ["YSXM_DM", "ZZSSLHZSL", "YYSSL", "COL01", "COL02", "COL03", "COL04", "COL05", "COL06", "COL07", "COL08", "COL09", "COL10", "COL11", "COL12", "COL13", "COL14"],
                returnType: "object",
                cellRows: [
                    {start: "COL01", end: "HJ"}
                ]
            });
            if (map.BODY.length <= 0){
            	alert('请您增加一行进行填写');
            	return false;
            }
            if (map.BODY.length > 0) {
                for (var i = 0; i < map.BODY.length; i++) {
                    var YSXM_DM = map.BODY[i].YSXM_DM;
                    if (YSXM_DM == "") {
                        alert("“应税项目代码及名称”不能为空");
                        return false;
                    }
                }
            }
            ;
            var data = DCellWeb1.cellRowToJson(
                {
                    returnType: "object",
                    cols: ["YSXM_DM", "ZZSSLHZSL", "YYSSL", "COL01", "COL02", "COL03", "COL04", "COL05", "COL06", "COL07", "COL08", "COL09", "COL10", "COL11", "COL12", "COL13", "COL14"],
                    cellRows: [
                        {start: "COL01", end: "HJ"}
                    ]
                });
            var url = "/hlwsb/zzs/ybnsr/insertSB_ZZS_YBNSR_YGZSFFXCSMXB.do";
            baseTools.xhrAjax({
                url: url,
                params: {DATA: JSON.stringify(data), SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, bodyCheck: 'noCheck'},  //bodyCheck 可以空表保存
                callback: [curSeg.pageFlowControl]
            });
        },
        // 添加暂存
        onCacheSave: function () {
            curSeg.onSave();
        },
        onDelete: function () {
            if (SBBZT == "2" || SBBZT == "3") {
                alert("数据已申报，不允许删除");
                return null;
            }
            if (confirm("确定删除此报表？")) {
                var url = "/hlwsb/zzs/ybnsr/delSB_ZZS_YBNSR_YGZSFFXCSMXB.do";
                baseTools.xhrAjax({
                    url: url,
                    params: {SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z},
                    callback: [curSeg.pageFlowControl]
                });
            }
        }
        ,

        initData: function (jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
        	sqList = jsonObj.data.YMKZ.SFBLIST ;
        	
            var ZBCS = jsonObj.data.ZBCS;
            YNSEHJ = jsonObj.data.YNSEHJ;//主表第24行应纳税额合计
            DCellWeb1.initSelectCell({
                col: "YSXM_DM",
                action: "/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_YGZYSXM",
                value: "YSXM_DM",
                text: "YSXM_MC"
            });
            DCellWeb1.initRowToCell({
                cols: ["YSXM_DM", "HC", "ZZSSLHZSL", "YYSSL", "COL01", "COL02", "COL03", "COL04", "COL05", "COL06", "COL07", "COL08", "COL09", "COL10", "COL11", "COL12", "COL13", "COL14"],
                //manual: true,
                iszdjskxg: true,
                cellRows: [
                    {
                        start: "COL01", end: "HJ",
                        hc: "HC", xl: "XL",
                        addButton: {name: "AddButton"},

                        delButton: {
                            name: "DelButton",
                            checkbox: "CZ",
                            url: "/hlwsb/zzs/ybnsr/delSB_ZZS_YBNSR_YGZSFFXCSMXB.do",
                            params: {
                                SBBXH: SBBXH,
                                SBBZL_DM: SBBZL_DM,
                                SSSQ_Q: SSSQ_Q,
                                SSSQ_Z: SSSQ_Z
                            }
                        }
                    }
                ],
                data: jsonObj.data,
                nsrxxCols: ["NSRSBH", "SSSQ", "NSRMC", "TBRQ"]
            });
            DCellWeb1.inputCheck = function (col, row, sheet, text) {

                var startrow = DCellWeb1.GetCellVar_J("XH").row;
                var endtrow = DCellWeb1.GetCellVar_J("HJ").row;

                if (col == 4 && (row > startrow || row < endtrow)) {
                    var ysxmdm = text.substring(0, 6); //根据选取的应税项目代码及名称截取出来应税项目代码，然后根据代码带出税率
                    var url = "/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getSL_YSXM";
                    baseTools.xhrAjax({
                        url: url,
                        params: {YSXM_DM: ysxmdm},
                        callback: [function (jsonObj) {
                            //alert(JSON.stringify(jsonObj))    ZZSCEZSBJ 控制第4列  YYSCEZSBJ 控制第9列 20160608 王昆松需求
                            if (jsonObj.data.BODY[0].ZZSCEZSBJ == 'N') {
                                DCellWeb1.SetCellInput(col + 6, row, sheet, 5);
                                DCellWeb1.SetCellDouble(col + 6, row, sheet, 0);
                            } else {
                                DCellWeb1.SetCellInput(col + 6, row, sheet, 2);
                            }
                            if (jsonObj.data.BODY[0].YYSCEZSBJ == 'N') {
                                DCellWeb1.SetCellInput(col + 11, row, sheet, 5);
                                DCellWeb1.SetCellDouble(col + 11, row, sheet, 0);
                            } else {
                                DCellWeb1.SetCellInput(col + 11, row, sheet, 2);
                            }
                            DCellWeb1.SetCellTip(col + 1, row, sheet, curSeg.percetToDecimal(jsonObj.data.BODY[0].ZZSSLHZZSL));
                            DCellWeb1.SetCellTip(col + 2, row, sheet, curSeg.percetToDecimal(jsonObj.data.BODY[0].YYSSLHZZSL));
                        }]
                    });
                }

                if (row > startrow && row < endtrow && (col == 5 || col == 6)) {
                    var ts_ysxmdm = DCellWeb1.GetCellString(4, row, 0).substring(0, 6);//应税项目是070302 娱乐服务 的营业税率是0.05-0.2之间
                    var flag = false;
                    var tip = DCellWeb1.GetCellTip(col, row, sheet);
                    var tip2 = tip.split("、");
                    if (ts_ysxmdm == '070302' && col == 6) {
                        if (text >= 0.05 && text <= 0.2) {
                            flag = true;      //应税项目是070302 输入的税率0.05-0.2是正确的
                        }
                        else {
                            tip = '0.05-0.20';
                        }
                    } else {
                        for (var i = 0; i < tip2.length; i++) {
                            if (text == tip2[i]) {
                                // 输入的税率不是应填税率给提示
                                flag = true;
                                if (col == 5) {
                                    if (text == 0.11 || text == 0.17 || text == 0.06|| text == 0.1 || text == 0.16)//一般计税：第7列=“增值税扣除后销项(应纳)税额”对应各行次÷《增值税纳税申报表（一般纳税人适用）》主表第11栏“销项税额”“一般项目”和“即征即退项目”“本月数”之和×增值税纳税申报表（一般纳税人适用）主表第19栏“应纳税额”“一般项目”和“即征即退项目”“本月数”之和
                                    {
                                        DCellWeb1.setValByLabel("U" + row, ZBCS);//一般计税：取 第6列/主表11栏合计*19栏合计
                                    } else if (text == 0.03 || text == 0.05) {
                                        DCellWeb1.setValByLabel("U" + row, "1"); //简易计税：取 第6列
                                    }
                                }
                                return true;
                            } else {
                                flag = false;
                            }
                        }
                    }
                    if (!flag) {
                        if (col == 5 && tip.length != 0) {
                            var ts = curSeg.checkCesl(tip, 'zzs');
                            alert(ts);
                            //alert("增值税税率或征收率应为：" + tip);
                        }
                        if (col == 6 && tip.length != 0) {
                            var ts = curSeg.checkCesl(tip, 'yys');
                            alert(ts);
                            //alert("营业税税率应为：" + tip);
                        }
                        return true;
                    }
                    return true;
                }
                else {
                    //DCellWeb1.SetCellDouble(col, row, sheet, text);
                    return true;
                }
            };
            var starttrow = DCellWeb1.GetCellVar_J("XH").row;
            var endtrow = DCellWeb1.GetCellVar_J("HJ").row;

            for (var i = starttrow + 3; i < endtrow; i++) {
                var SL_TIP = jsonObj.data.BODY[i - 11].SL_TIP.split("-");
                var ZZSCEZSBJ = jsonObj.data.BODY[i - 11].ZZSCEZSBJ;
                var YYSCEZSBJ = jsonObj.data.BODY[i - 11].YYSCEZSBJ;
                //根据应税项目，初始化第4、9列是否可以填写
                if (ZZSCEZSBJ == 'N') {
                    DCellWeb1.SetCellInput(10, i, 0, 5);
                } else {
                    DCellWeb1.SetCellInput(10, i, 0, 2);
                }
                if (YYSCEZSBJ == 'N') {
                    DCellWeb1.SetCellInput(15, i, 0, 5);
                } else {
                    DCellWeb1.SetCellInput(15, i, 0, 2);
                }

                //初始化增值税和营业税的税率提示
                DCellWeb1.SetCellTip(5, i, 0, curSeg.percetToDecimal(SL_TIP[0]));
                DCellWeb1.SetCellTip(6, i, 0, curSeg.percetToDecimal(SL_TIP[1]));

                var text = DCellWeb1.getValByLabel("E" + i);
                if (text == 0.11 || text == 0.17 || text == 0.06|| text == 0.1 || text == 0.16)//一般计税：第7列=“增值税扣除后销项(应纳)税额”对应各行次÷《增值税纳税申报表（一般纳税人适用）》主表第11栏“销项税额”“一般项目”和“即征即退项目”“本月数”之和×增值税纳税申报表（一般纳税人适用）主表第19栏“应纳税额”“一般项目”和“即征即退项目”“本月数”之和
                {
                    DCellWeb1.setValByLabel("U" + i, ZBCS);

                } else if (text == 0.03 || text == 0.05) {
                    DCellWeb1.setValByLabel("U" + i, "1");
                }
            }
            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            if (jsonObj.data.HEAD.SBBZT) {
                bAdd = false;
            }
           
            //对纳税人选择应税项目时，实时监控，若选择的为上期申报表存在的，则带出上期期末余额 放到 期初余额
            DCellWeb1.selectChange = function(col,row){
            	var starttrow1 = DCellWeb1.GetCellVar_J("XH").row;
                var endtrow1 = DCellWeb1.GetCellVar_J("HJ").row;
                
                var leng = sqList.length;
                if(leng > 0){
                	if( col==4 && (row > starttrow1 && row < endtrow1 ) ){
                		var ysxmdm = DCellWeb1.GetDroplistCellkey(col,row,0);
                		for ( var i = 0 ; i < leng ; i++ ){
                			var ysxmdm_sq = sqList[i].YSXMDM_SQ;//上期应税项目代码
                			if(ysxmdm_sq == ysxmdm){
                				var yysqmye = sqList[i].YYSQMYE;
                				DCellWeb1.SetCellDouble(14,row,0,yysqmye);
                				break;
                			}else{
                				DCellWeb1.SetCellDouble(14,row,0,0.00);
                			}
                		}
                	}
                }
            };

        },
        //percet 5%、11%  --》Decimal 0.05、0.11
        percetToDecimal: function (percet) {
            if (percet.trim() == '5%—20%') {
                return '0.05—0.20';
            } else {
                var Str = percet.split("、");
                var Dec = [];
                for (var i = 0; i < Str.length; i++) {
                    Dec[i] = Number(Str[i].replace('%', '')) / 100;
                }
                return Dec.join("、");
            }
        },
        checkCesl: function (tip, bz) {
            if (tip != "") {
                if (bz == "zzs") {
                    return "增值税税率或征收率为：" + tip;
                }
                if (bz == "yys") {
                    return "营业税税率应为：" + tip;
                }
            } else {
                return "";
            }
        },
        roundTFix: function (value) {
            if (!isNaN(value)) {
                return parseFloat(Number(Number(value).toFixed(3)).toFixed(2));
            } else {
                return value;
            }
        },
        checkData: function () {
            var starttrow = DCellWeb1.GetCellVar_J("XH").row;
            var endtrow = DCellWeb1.GetCellVar_J("HJ").row;
            var tips = "";
            for (var i = starttrow + 3; i < endtrow; i++) {
                var xsynse = DCellWeb1.GetCellDouble(8, i, 0);
                var bhsxse = DCellWeb1.GetCellDouble(7, i, 0);
                var sl = DCellWeb1.GetCellDouble(5, i, 0);
                var col_05 = DCellWeb1.GetCellDouble(11, i, 0);
                var col_06 = DCellWeb1.GetCellDouble(12, i, 0);
                if (Math.abs(xsynse - (bhsxse * sl).toFixed(2)) > 10) {            //20160608王昆松要求误差为10
                    tips += "第" + (i - 10) + "行第2列：误差 不允许大于10\n";
                }
                if (Math.abs(col_06 - (curSeg.roundTFix(col_05 / (1 + sl)) * sl).toFixed(2)) > 1) {
                    tips += "第" + (i - 10) + "行第6列：误差 不允许大于1\n";
                }


                var zzsTip = DCellWeb1.GetCellTip(5, i, 0);
                var yysTip = DCellWeb1.GetCellTip(6, i, 0);
                var zzsTip1 = zzsTip.split("、");
                var yysTip1 = yysTip.split("、");
                var zzsflag = false;
                var yysflag = false;
                for (var j = 0; j < zzsTip1.length; j++) {
                    var textInput = DCellWeb1.GetCellDouble(5, i, 0);
                    if (zzsTip1[j] != textInput) {
                        zzsflag = false;
                    } else {
                        zzsflag = true;
                        break;
                    }
                }
                if (!zzsflag) {
                    tips += "第" + (i - 10) + "行增值税税率或征收率应为：" + zzsTip + "\n";
                }
                for (var j = 0; j < yysTip1.length; j++) {
                    var ts_ysxmdm = DCellWeb1.GetCellString(4, i, 0).substring(0, 6);//应税项目是 070302 娱乐服务 的营业税率是0.05-0.2之间
                    var textInput = DCellWeb1.GetCellDouble(6, i, 0);
                    if (ts_ysxmdm == '070302' && textInput >= 0.05 && textInput <= 0.2) {
                        yysflag = true;
                        break;
                    } else {
                        if (yysTip1[j] != textInput) {
                            yysflag = false;
                        } else {
                            yysflag = true;
                            break;
                        }
                    }
                }
                if (!yysflag) {
                    tips += "第" + (i - 10) + "行营业税税率应为：" + yysTip + "\n";
                }
            }
            if ("" != tips) {
                alert(tips);
                return false;
            } else {
                return true;
            }
        },
        //数据软校验——只进行数据提示性校验，用户点击确定按钮后会直接进行数据保存
        softCheck : function(){
            var endRow = DCellWeb1.GetCellVar_J("HJ").row;
            var msg = "";
			var zzs04 = DCellWeb1.GetCellDouble(10,endRow,0);//增值税第4列服务、不动产和无形资产扣除项目本期实际扣除金额
            var yys11 = DCellWeb1.GetCellDouble(17,endRow,0);//营业税第11列本期实际扣除金额
            var yys13 = DCellWeb1.GetCellDouble(19,endRow,0);//营业税第13列应税营业额
            var yys14 = DCellWeb1.GetCellDouble(20,endRow,0);//营业税第14列营业税应纳税额
            var zzszb = YNSEHJ;//一般纳税人主表第24栏“应纳税额合计”
            var zzs07 = DCellWeb1.GetCellDouble(13,endRow,0);//增值税第7列增值税应纳税额（测算）
            
			/************
			 *  张志森微信转发：货物和劳务税处关于增加电子申报提示预警项目的建议，其中：
			 *  一、监控《营改增税负分析测算明细表》“营业税税率”栏填报情况。在“营业税税率”不等于3%、5%、7%时提示“营业税税率错误”。
			 *  二、监控《营改增税负分析测算明细表》第4列“服务、不动产和无形资产扣除项目本期实际扣除金额”和第11列“本期实际扣除金额”的
			 *        填报情况，在第4列小于第11列时提示“请检查第4列、第11列两个扣除项目是否填写正确”。
			 *  三、监控《营改增税负分析测算明细表》第7列“增值税应纳税额”、第14列“营业税应纳税额”填报情况。在第14列大于0且小于第7列“
			 *        增值税应纳税额”*30%时，提示“营业税应纳税额小于理论值”。在第14列等于0且第7列大于0时，提示“营业税应纳税额等于0但增
			 *        值税应纳税额大于0，请确认是否正常”。
			 *  发送修改时间：2017-03-24 上午11点26分
			 *  接收人：赵振国
			 */
			var starttrow = DCellWeb1.GetCellVar_J("XH").row;            
            for (var i = starttrow + 3; i < endRow; i++) {
               var yyssl = DCellWeb1.GetCellDouble(6, i ,0);//营业税税率
               var v_zzs04 = DCellWeb1.GetCellDouble(10, i, 0);//增值税第4列服务、不动产和无形资产扣除项目本期实际扣除金额
               var v_yys11 = DCellWeb1.GetCellDouble(17, i, 0);//营业税第11列本期实际扣除金额
               var v_zzs07 = DCellWeb1.GetCellDouble(13, i, 0);//增值税第7列增值税应纳税额（测算）
               var v_yys14 = DCellWeb1.GetCellDouble(20, i, 0);//营业税第14列营业税应纳税额
               if((yyssl != 0.03)  && (yyssl != 0.05) && (yyssl != 0.07)){
                   msg += "第" + (i - 10) + "行营业税税率错误，营业税税率应该是3%、5%或者7%，有疑点请检查;\n";
               }
			   if(v_zzs04 < v_yys11){
                   msg += "第" + (i - 10) + "行第4列“服务、不动产和无形资产扣除项目本期实际扣除金额” 小于 第11列“本期实际扣除金额”，即"+v_zzs04+"<"+v_yys11+",请检查第4列、第11列两个扣除项目是否填写正确，有疑点请检查;\n";
               }
			   v_zzs07 = hlwsbTools.formatFloatData((v_zzs07),10).toFixed(2);
			   var v_zzs07_30bfb = hlwsbTools.formatFloatData((v_zzs07  * 0.3),10).toFixed(2);//第7列的30%
			   
			   if((v_yys14 > 0) && (v_yys14 < v_zzs07_30bfb)){
                   msg += "第" + (i - 10) + "行 第14列“营业税应纳税额”大于0 且小于 第7列“增值税应纳税额”的30%，即"+v_yys14+" < ( "+v_zzs07+"乘以30%="+v_zzs07_30bfb+" )，因此“营业税应纳税额小于理论值”，有疑点请检查。;\n";
               }
			   if((v_zzs07 > 0) && (v_yys14 == 0)){
                   msg += "第" + (i - 10) + "行 第7列“增值税应纳税额”大于0 且第14列“营业税应纳税额”等于0，即"+v_zzs07+" > 0 且 "+v_yys14+" = 0，因此“营业税应纳税额等于0但增值税应纳税额大于0，有疑点请检查”。;\n";
               }
            }
			
            if(zzs04 > 0 && yys11 == 0){
                msg += '第4列“服务、不动产和无形资产扣除项目本期实际扣除金额”的“合计”栏>0,但第11列“本期实际扣除金额”的“合计”栏等于0，有疑点请检查;\n';
            }
            if(yys13 > 0 && yys14 == 0){
                msg += '第13列“应税营业额”的“合计”栏大于0,但第14列“营业税应纳税额”的“合计”栏等于0，有疑点请检查;\n';
            }
            if(zzszb != 0 && yys14 ==0){
                msg += '主表第24行应纳税额合计不等于0，但测算表第14列营业税应纳税额的“合计”栏=0，有疑点请检查;\n';
            }
            if(zzs07 > 0 && yys14 == 0){
                msg += '第7列“增值税应纳税额（测算）”的“合计”栏大于0，但第14列“营业税应纳税额”的“合计”栏，有疑点请检查;\n';
            }
            if(msg != ''){
                msg += '\n以上为疑问项提示，请予以核定！\n';
                if(confirm(msg += "不需要修改请点击‘确定’，需要修改请点击‘取消’！")){
                    return true;
                }else{
                    return false;
                }
            }else{
                return true;
            }
        },
        disableButton: function () {
            var inputList = document.getElementsByTagName('input')
            for (var i = 0; i < inputList.length; i++) {
                inputList[i].disabled = true;
            }
            DCellWeb1.setCellInputByLabel("A7", 5);
            DCellWeb1.setCellInputByLabel("A8", 5);
        },
        //导入
        openPopWin:function(){
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=tljs&&startRow=8&&sheetIndex=1&templatePath=../../printModel/zzs/ybnsr/ybnsr2016/sb_zzs_ybnsr_ygzsffxcsmxb.zip',
                width: 400,
                height: 150
            };
            winObj = baseTools.showWinExt(winParam);
            $(winObj.DOM.wrap).bgiframe({
                width: 425,
                height: 200
            });
        },

        fillData:function(jsonArray){
            return true;
        },

        /**
         * 需要的时候可以覆盖该方法
         * 在ajax调用中，在得到数据时调用该方法
         */
        pageFlowControl: function (jsonObj, xhrArgs) {
        	var SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            switch (parseInt(jsonObj.code)) {
                //查询操作返回标志
                case 0:
                    curSeg.initData(jsonObj);
                    DCellWeb1.ProtectFormula = false;
                    break;
                //添加、更新以及状态更新操作返回标志
                case 1:
                    bAdd = false;
                    alert("保存成功");
                    top.main.changeNodeStatus(SBBZL_DM,"1");
                    break;
                // 删除操作返回标志
                case 2:
                    alert("删除成功");
                    top.main.changeNodeStatus(SBBZL_DM,"0");
                    bAdd = true;
                    curSeg.initData(jsonObj);
                    break;
                //准备添加的记录已经存在
                case 3:
                    break;
                //数据已经申报过
                case 4:
                    var reason = jsonObj.msg;
                    reason = reason.substring(reason.indexOf("异常原因："));
                    alert(reason);
                    break;
                //在线帮助
                case 6:
                    break;
                case -1://保存出错返回标志
                case -2://其它错误返回标志
                	 jsonObj.msg = jsonObj.msg.replace(/^[\S\s]+:/g, '')
                     DCellWeb1.setValByLabel('A2', jsonObj.msg);
                    baseTools.hideMash();
                    curSeg.disableButton();
                    break;
                case -3://cookie 失效请重新登录
                    alert(jsonObj.msg);
                    baseTools.gotoLogin();
                    break;
                default:
            }
        }
    }
        ;
})
();