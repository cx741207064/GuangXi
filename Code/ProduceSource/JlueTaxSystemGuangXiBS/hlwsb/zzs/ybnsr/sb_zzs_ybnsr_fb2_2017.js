//使用窗口组件加载时注释下面的代码
$(document).ready(function () {
    fb2_2017.onLoad();
});
/**
 *
 *
 */
var fb2_2017 = (function () {
    //私有属性
    var curSeg; // 保存lrb对象的
    var winObj;
    var SBBXH = '';
    var SBBZL_DM = '';
    var SSSQ_Q = '';
    var SSSQ_Z = '';
    //私有方法
    var SBBZT = '';
    //是否是添加
    var bAdd = true;

    var oldsbh = '';
    var CKTSQYBZ ='';//出口退税企业标志
    var SFFDQ ='';//是否是辅导期纳税人
    //私有方法
    var data1;
    return {
        onExport: function () {
            DCellWeb1.ExportExcelDlg();
        }, onLoad: function () {

            var oldNsrsbh = hlwsbTools.getOldSbh();
            var shxydm = hlwsbTools.getSHXYDM();
            if (oldNsrsbh && oldNsrsbh != shxydm) {
                oldsbh = oldNsrsbh;
            }

            curSeg = fb2_2017;
            //引用报表控制
            dcell(DCellWeb1, "/hlwsb/printModel/zzs/ybnsr/sb_zzs_fb2_2017.cll");
            curSeg.onQuery();
			
			//在2018年2月份征期提示通行费抵扣电子发票在2月3号以后在进行抵扣
			if((SSSQ_Q == "2018-01-01") && (SSSQ_Z == "2018-01-31"))
			{
                //新增提示如您需抵扣通行费电子发票，请待2月3日以后再行抵扣
                var myDate=new Date();
                var dqsj=myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate();
                if(dqsj<"2018-2-4") {
                    window.showModalDialog("/hlwsb/bbsxsm/zzs_fb_ts.html", '', "dialogWidth=500x;dialogHeight=150px;center:yes;status:no;scroll:no;");
                }
			}
			
            //删除组件释放内存
            $(window).unload(function () {
            });
        },
        onPrint: function () {
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z
            });
            window.location = "/hlwsb/zzs_print/ybnsr/sb_zzs_ybnsr_fb2_2017.html?" + str;
        },
        //查询数据
        onQuery: function () {
            var url = "/hlwsb/zzs/ybnsr/getSB_ZZS_YBNSR_FB2.do";
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");    //获取页面申报表种类代码标记
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");
            baseTools.xhrAjax({
                url: url,
                params: {
                    SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, OLDSBH: oldsbh
                },
                callback: [curSeg.pageFlowControl]
            });
        },

        //保存数据
        onSave: function () {
            if (!curSeg.checkSave()) {
                return;
            }
            if (SBBZT == "2" || SBBZT == "3") {
                alert("数据已申报，不允许保存");
                return null;
            }
            if (confirm('是否要保存?')) {
                var data = DCellWeb1.submitJsonjs({cols: ["FS", "JE", "SE"]});
                var url = bAdd
                    ? "/hlwsb/zzs/ybnsr/insertSB_ZZS_YBNSR_FB2.do"
                    : "/hlwsb/zzs/ybnsr/updateSB_ZZS_YBNSR_FB2.do";
                baseTools.xhrAjax({
                    url: url,
                    params: {DATA: data, SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, OLDSBH: oldsbh},
                    callback: [curSeg.pageFlowControl]
                });
            }
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
                var url = "/hlwsb/zzs/ybnsr/delSB_ZZS_YBNSR_FB2.do";
                baseTools.xhrAjax({
                    url: url,
                    params: {SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z},
                    callback: [curSeg.pageFlowControl]
                });
            }
        },
        onCalc: function (obj) {
            DCellWeb1.calcManual(obj.checked);
        },
        checkSave: function () {

            var col_6fs = cell.getValByLabel("E14");
            var col_6je = cell.getValByLabel("F14");
            var col_6se = cell.getValByLabel("G14");
            var col_35fs = cell.getValByLabel("E50");
            var col_35je = cell.getValByLabel("F50");
            var col_35se = cell.getValByLabel("G50");
            var col_26fs = cell.getValByLabel("E39");
            var col_26je = cell.getValByLabel("F39");
            var col_26se = cell.getValByLabel("G39");
            //新增广西特色需求-监控规则
            var jiankongAddCount1,jiankongAddCount2,AddCountShowHC;
            for (var i = 14; i <= 14; i++) {
                jiankongAddCount1 = DCellWeb1.getValByLabel('G' + i);
                jiankongAddCount2 = DCellWeb1.getValByLabel('F' + i);
                if(Number(jiankongAddCount2) == 0){
                    continue;
                }
                if (Number(jiankongAddCount1) / Number(jiankongAddCount2) > 0.10) {
                    AddCountShowHC = i - 8;
                    alert("第"+AddCountShowHC+"行"+"2018年5月1日后，纳税人购进农产品，原适用11%扣除率的，\n" +
                    "扣除率调整为10%；纳税人购进用于生产销售或委托加工16%税率\n" +
                    "货物的农产品，按照12%的扣除率计算进项税额，仍实行在10%的\n" +
                    "基础上加计扣除2%的办法。您填报了适用11%扣除率的税额，\n" +
                    "请您确认是否填报正确。");
                }
            }

            if (hlwsbTools.getNSRZG_DM().indexOf('202') >= 0) {
                if (col_35fs != col_26fs) {
                    alert("辅导期纳税人，《增值税申报表附表二》的“份数”列第2行“本期认证相符且本期申报抵扣”等于第35行“本期认证相符的增值税专用发票”-第26行“本期认证相符且本期未申报抵扣”且等于0")
                    return false;
                }
                if (col_35je != col_26je) {
                    alert("辅导期纳税人，《增值税申报表附表二》的“金额”列第2行“本期认证相符且本期申报抵扣”等于第35行“本期认证相符的增值税专用发票”-第26行“本期认证相符且本期未申报抵扣”且等于0")
                    return false;
                }
                if (col_35se != col_26se) {
                    alert("辅导期纳税人，《增值税申报表附表二》的“税额”列第2行“本期认证相符且本期申报抵扣”等于第35行“本期认证相符的增值税专用发票”-第26行“本期认证相符且本期未申报抵扣”且等于0")
                    return false;
                }
            }
            if (col_6fs == 0 && col_6je == 0 && col_6se != 0) {
                if (!confirm("第6行份数和金额等于0，“执行农产品增值税进项税额核定扣除办法的，可不填写本行份数和金额”，确定保存吗？")) {
                    return false;
                }
            }
            if (col_35fs < col_26fs) {
                alert("第35行份数不允许小于26行份数");
                return false;
            }
            if (col_35je < col_26je) {
                alert("第35行金额不允许小于26行金额");
                return false;
            }
            if (col_35se < col_26se) {
                alert("第35行税额不允许小于26行税额");
                return false;
            }
            var col09_se = DCellWeb1.getValByLabel("G18");
            var col09_je = DCellWeb1.getValByLabel("F18");
            var col04_se = DCellWeb1.getValByLabel("G12");
            var col04_je = DCellWeb1.getValByLabel("F12");
            var col01_se = DCellWeb1.getValByLabel("G9");
            var col01_je = DCellWeb1.getValByLabel("F9");
            var tips = "";
            if (col09_se < 0 || col09_se > col04_se + col01_se) {
                tips = "第九栏税额:" + col09_se + "应小于等于第一栏税额:" + col01_se + "+第四栏税额:" + col04_se + "之和: " + (col01_se + col04_se) + "，且大于等于0！";
            }
            if (col09_je < 0 || col09_je > col04_je + col01_je) {
                tips = "第九栏金额:" + col09_je + "应小于等于第一栏金额:" + col01_je + "+第四栏金额:" + col04_je + "之和: " + (col01_je + col04_je) + "，且大于等于0！";
            }
            if (tips != "") {
                alert(tips);
                return false;
            }

            /**
             * 金额/税额、份数关系校验
             * 金额/税额填写后，份数应该大于0
             */
            //3-9行
            var h = "";
            for (var i = 11; i < 19; i++) {
                var xh = i - 8;
                var fs = cell.getValByLabel("E" + i);
                var je = cell.getValByLabel("F" + i);
                var se = cell.getValByLabel("G" + i);
                if (i != 12 && i != 13 && i != 14 && i != 16 && i != 17 && i !=  18) {
                    if (je != "0" || se != "0") {
                        if (fs == "0") {
                            if (h == "") {
                                h = h + xh;
                            } else {
                                h = h + "," + xh;
                            }
                        }
                    }
                }else if(i == 17){
                    if (je != "0" || se != "0") {
                        if (fs == "0") {
                            if (h == "") {
                                h = h + (xh-1) + "b";
                            } else {
                                h = h + "," + (xh-1) + "b";
                            }
                        }
                    }
                }else if(i == 18){
                    if (je != "0" || se != "0") {
                        if (fs == "0") {
                            if (h == "") {
                                h = h + (xh-1);
                            } else {
                                h = h + "," + (xh-1);
                            }
                        }
                    }
                }
            }
            //25-33行
            for (var i = 38; i < 47; i++) {
                var xh = i - 13;
                var fs = cell.getValByLabel("E" + i);
                var je = cell.getValByLabel("F" + i);
                var se = cell.getValByLabel("G" + i);
                if (i != 42) {
                    if (je != "0" || se != "0") {
                        if (fs == "0") {
                            if (h == "") {
                                h = h + xh;
                            } else {
                                h = h + "," + xh;
                            }
                        }
                    }
                }
            }
            //35行
            for (var i = 50; i < 51; i++) {
                var xh = i - 15;
                var fs = cell.getValByLabel("E" + i);
                var je = cell.getValByLabel("F" + i);
                var se = cell.getValByLabel("G" + i);
                if (je != "0" || se != "0") {
                    if (fs == "0") {
                        if (h == "") {
                            h = h + xh;
                        } else {
                            h = h + "," + xh;
                        }
                    }
                }
            }
            if (h != "") {
                alert("第" + h + "行份数为0，请核对数据。");
                return false;
            }

            var m = "";
            var count = parseInt(DCellWeb1.GetDoubleVar_J("COUNT").value);
            /**
             * 金额税额大小关系校验
             */
            //1-9行
            for (var i = 9; i < 19; i++) {
                var hc = i - 8;
                if (i != 12 && i != 13 && i != 14 && i != 15 && i != 16 && i != 17 && i != 18) {  //4,5,6,7，8a行不校验
                    var colje = cell.getValByLabel("F" + i);
                    var colse = cell.getValByLabel("G" + i);
                    if (colje < colse) {
                        if (m == "") {
                            m = m + hc
                        }
                        else {
                            m = m + "," + hc
                        }
                    }
                }else if(i == 17){
                    var colje = cell.getValByLabel("F" + i);
                    var colse = cell.getValByLabel("G" + i);
                    if (colje < colse) {
                        if (m == "") {
                            m = m + (hc-1) + "b"
                        }
                        else {
                            m = m + "," + (hc-1) + "b"
                        }
                    }
                }else if(i == 18){
                    var colje = cell.getValByLabel("F" + i);
                    var colse = cell.getValByLabel("G" + i);
                    if (colje < colse) {
                        if (m == "") {
                            m = m + (hc-1)
                        }
                        else {
                            m = m + "," + (hc-1)
                        }
                    }
                }
            }
            //25-33行
            for (var i = 38; i < 47; i++) {
                var hc = i - 13;
                var colje = cell.getValByLabel("F" + i);
                var colse = cell.getValByLabel("G" + i);
                if (i != 45 && i != 42) {
                    if (colje < colse) {
                        if (m == "") {
                            m = m + hc
                        }
                        else {
                            m = m + "," + hc
                        }
                    }
                }
            }
            //35行
            for (var i = 50; i < 51; i++) {
                var hc = i - 15;
                var colje = cell.getValByLabel("F" + i);
                var colse = cell.getValByLabel("G" + i);
                if (colje < colse) {
                    if (m == "") {
                        m = m + hc
                    }
                    else {
                        m = m + "," + hc
                    }
                }
            }
            if (m != "") {
                alert("第" + m + "行，不符合校验条件：税额应小于金额。请核对数据！");
                return false;
            }
          //暂时不升级
	    //新增监控第8b栏“其他”“税额”填报金额超过10万元时，阻断其网络申报，提示其到办税服务厅办理申报。
        /*    var col_8bse = cell.getValByLabel("G17");
            if(col_8bse>100000){
                alert("您第8b栏税额填写异常，请核实是否正确，如核实后仍异常请到办税服务厅办理申报！");
                return false;
            }
            for(i=24;i<=34;i++){
              var jxsezce=cell.getValByLabel("E"+i);//获取进项税额转出额第13-23栏填写数值
                if(jxsezce<0){
                    alert("二、进项税额转出额’第"+(i-11)+"栏不得填写负数，请核实是否正确，如核实后仍异常请到办税服务厅办理申报!");
                    return false;
                }
            }
            //新增监控如果是非出口企业不允许填写第11栏税额
            var col20se=cell.getValByLabel("G20");
            if(CKTSQYBZ==null&&col20se!=0){
                alert("您是非出口企业，第11栏税额填写异常，请核实是否正确，如核实后仍异常请到办税服务厅办理申报！");
                return false;
            }
            //新增监控第2栏，仅限于辅导期（加白名单,考虑到会有不是辅导期的纳税人填写）增值税一般纳税人填报
            var col03fs = cell.getValByLabel("E11");
            var col03je = cell.getValByLabel("F11");
            var col03se = cell.getValByLabel("G11");
            if(SFFDQ.indexOf("202")==-1&&(col03fs!=0||col03je!=0||col03se!=0)){
                alert("您为非辅导期增值税一般纳税人人，第3栏填写异常，请核实是否正确，如核实后仍异常请到办税服务厅办理申报!");
                return false;
            } */

            return true;

        },
        initData: function (jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
            //alert(JSON.stringify(jsonObj.data));
            var yqwrdybr = hlwsbTools.getYqwrdybr();
            var wxts = "温馨提示：请确认自动带出的发票数据无误后，完成报表填写后保存即可！\r";
            if(yqwrdybr=='1'){
                alert("您为逾期未认定一般纳税人，不能填写该表！");
                wxts = wxts+"温馨提示：您为逾期未认定一般纳税人不能填写该表！\r";
                curSeg.invalidate();
            }
            DCellWeb1.setValByLabel('A3', wxts);
            DCellWeb1.initDataToCell({
                cols: ["FS", "JE", "SE"],
                data: jsonObj.data,
                nsrxxCols: ["NSRMC", "NSRSBH", "SSSQ", "TBRQ"]
            });

            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            if (SBBZT) {
                bAdd = false;
            }else{
                cell.calculateAllJs();
            }
            var YBHWFWQCLDDQSE = jsonObj.data.YMKZ.YBHWFWQCLDDQSE;
            var SQLDSETS = jsonObj.data.YMKZ.SQLDSETS;
          // var SFFDQ = hlwsbTools.getNSRZG_DM();//jsonObj.data.YMKZ.SFFDQ;     //此处取接口有时候会出错，改为取RD_NSRZGXX_JGB     ,201 增值税一般纳税人  202 辅导期增值税一般纳税人
	   SFFDQ = hlwsbTools.getNSRZG_DM();//jsonObj.data.YMKZ.SFFDQ;     //此处取接口有时候会出错，改为取RD_NSRZGXX_JGB     ,201 增值税一般纳税人  202 辅导期增值税一般纳税人
            //alert(SFFDQ)
            //非辅导期纳税人，第2栏各列分别等于第35栏对应列- 第26栏对应列
//            if (SFFDQ == '201') {
            //辅导期判断不包含202的
            //20170714 jh 辅导期也可以按这个公式  2=35-26
            //if (SFFDQ.indexOf('202') < 0) {
            //var CKTSQYBZ = jsonObj.data.YMKZ.CKTSQYBZ;
	       CKTSQYBZ = jsonObj.data.YMKZ.CKTSQYBZ;
            DCellWeb1.SetFormula(5, 10, 0, 'E50-E39');
            DCellWeb1.setCellannotation('E10', "等于第35行-第26行");
            DCellWeb1.SetFormula(6, 10, 0, 'F50-F39');
            DCellWeb1.setCellannotation('F10', "等于第35行-第26行");
            DCellWeb1.SetFormula(7, 10, 0, 'G50-G39');
            DCellWeb1.setCellannotation('G10', "等于第35行-第26行");
            //}
            if (bAdd) {
                var FS = jsonObj.data.YMKZ.FS;
                var SE = jsonObj.data.YMKZ.SE;
                DCellWeb1.setValByLabel('E13', FS);
                DCellWeb1.setValByLabel('G13', SE);
            }

            DCellWeb1.setValByLabel('E32', YBHWFWQCLDDQSE);
            DCellWeb1.setValByLabel('E33', SQLDSETS);
            curSeg.initannotation();

            /*
            * 第三栏“三、待抵扣进项税额”增加监控，提醒此处只能辅导期一般纳税人及出口退税企业填写。
            * 因为部分企业会误认为：认证后的发票，在当月无需抵扣全部认证的金额，会把一部分认证金额填入此栏，以为可以留着后期再抵扣。
            * */
            if(SFFDQ.indexOf('202') < 0 && CKTSQYBZ != 'Y'){
                for(var i = 37;i <= 47;i++){
                    for(var j = 5;j <= 7;j++){
                        DCellWeb1.SetCellInput(j, i, 0, 5);
                    }
                }
                DCellWeb1.setValByLabel('A3',  wxts+"温馨提示：待抵扣进项税额部分只能辅导期一般纳税人及出口退税企业填写！\r");
            }
        },

        initannotation: function () {
            cell.setCellannotation('E13', "此栏数据从海关稽核提取，请确认已下载海关稽核通知书");
            cell.setCellannotation('G13', "此栏数据从海关稽核提取，请确认已下载海关稽核通知书");
            cell.setCellannotation('E32', "此栏数据从税务机关提取，不允许修改");
            cell.setCellannotation('E33', "此栏数据从税务机关提取，不允许修改");
            cell.setCellannotation('G19', "《附列资料五》第3列本期可抵扣不动产进项税额");
            cell.setCellannotation('G15', "此栏应等于代扣代缴税收通用缴款书抵扣清单表税额合计");
            /*
             设置份数输入不能为负值
             DCellWeb1.inputCheck = function (col, row, sheet, text) {
             if ((row > 8 && row < 16) || (row > 35 && row < 48)) {
             if (text < 0 && col == 5) {
             alert("份数不允许为负数，请重新输入！");
             return;
             }
             }
             return true;
             };*/
        },
        //initControl: function () {
        //    DCellWeb1.inputCheck = function (col, row, sheet, text) {
        //        if (col == 6 && row == 15) {
        //            //运输税额=运输金额*0.07
        //            DCellWeb1.setValByLabel('G15', parseFloat(text) * 0.07);
        //        }
        //        return true;
        //    }
        //}
        //禁用表单的按钮
        invalidate: function () {
            var inputList = document.getElementsByTagName('input')
            for (var i = 0; i < inputList.length; i++) {
                inputList[i].disabled = true;
            }
        },
        
		onZzsfp:function(){
			
			var winParam = {
                    id: 'win' + hlwsbTools.getNSRMC(), title: "增值税进销项明细数据",
                    url: '/hlwsb/zzs/ybnsr/sb_zzs_fp_hz.html?SBBZL_DM='+SBBZL_DM,
                    width: 680,
                    height: 300
                };
                winObj = baseTools.showWinExt(winParam);
                $(winObj.DOM.wrap).bgiframe({
                		width: 700,
                        height: 300		
                });
			
//			var iTop =  180;
//			var iLeft = window.screen.availWidth - 1000;
//			window.open("sb_zzs_fp_hz.html?SBBZL_DM="+SBBZL_DM,'','height=300,innerHeight=300,width=650,innerWidth=650,top='+iTop+',left='+iLeft);
		},
		
		onSxfp:function(){
			if(confirm("刷新发票功能，两次操作需要间隔15分钟，确认要刷新吗？")){
				baseTools.xhrAjax({
					url: "/tqfpxx.do",
					bShow: false,
					async: true,
					params: {DJXH: hlwsbTools.getDjxh(),SSQQ:SSSQ_Q,SSQZ:SSSQ_Z,CZBZ:"NSRCZ"},
					callback: [function (jsonObj, xhrArgs) {
						switch (parseInt(jsonObj.code)) {
						//查询操作返回标志
						case 0:
						case 1:
						case 2:
							break;
						case -1://保存出错返回标志
						case -2://其它错误返回标志
						break;
						default:
						}
					}]
				});
			}
		},

        //导入
        openPopWin:function(){
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=fb2_2017&&startRow=8&&sheetIndex=1&templatePath=../../printModel/zzs/ybnsr/sb_zzs_fb2_2017.zip',
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
//            var SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            switch (parseInt(jsonObj.code)) {
                //查询操作返回标志
                case 0:
                    curSeg.initData(jsonObj);
                    //curSeg.initControl();
                    cell.calculateAllJs();
                    break;
                //添加、更新以及状态更新操作返回标志
                case 1:
                    bAdd = false;
                    alert("保存成功！");
					//升级屏蔽【本期抵扣进项税额结构明细表】后，需要将下面alert注掉，将上面alert提示打开  201801-31
					/*alert("保存成功，请您根据附表二所填写数据，填写【本期抵扣进项税额结构明细表】");*/
                   top.main.changeNodeStatus(SBBZL_DM, "1");
                    //parent.navTab.openTab("101011029", "zzs/ybnsr/ybnsr2016/sb_zzs_bqdkjxsejgmxb.html?SBBZL_DM=101011029&SSSQ_Q= "+SSSQ_Q+"&SSSQ_Z="+SSSQ_Z+"&NSRLX_DM="+baseTools.getUrlQueryString("NSRLX_DM"), {title:"本期抵扣进项税额结构明细表2016版",external:true});
                    break;
                // 删除操作返回标志
                case 2:
                    alert("删除成功");
                    top.main.changeNodeStatus(SBBZL_DM, "0");
                    bAdd = true;
                    curSeg.initData(jsonObj);
                    cell.calculateAllJs();
                    break;
                //准备添  加的记录已经存在
                case 3:
                    break;
                //在线帮助
                case 6:
                    break;
                case -1://保存出错返回标志

                case -2://其它错误返回标志
                    var reason = jsonObj.msg;
                    if (reason.indexOf("异常原因：") > -1) {
                        reason = reason.substring(reason.indexOf("异常原因："));
                        var sssq = DCellWeb1.getValByName('SSSQ');
                        sssq += hlwsbTools.setSSsq(SSSQ_Q, SSSQ_Z);
                        DCellWeb1.setValByName('SSSQ', sssq);
                        curSeg.invalidate();
                    }
                    DCellWeb1.setValByLabel('A3', reason);
                    baseTools.hideMash();
                    break;
                case -3://cookie 失效请重新登录
                    alert(jsonObj.msg);
                    baseTools.gotoLogin();
                    break;
                default:
            }
        }
    };
})();