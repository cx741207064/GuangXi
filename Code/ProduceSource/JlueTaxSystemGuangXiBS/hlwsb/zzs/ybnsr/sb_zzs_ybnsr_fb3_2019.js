//使用窗口组件加载时注释下面的代码
$(document).ready(function () {
    fb3.onLoad();
});
/**
 *
 *
 */
var fb3 = (function () {
    //私有属性
    var curSeg; // 保存lrb对象的
    var SBBXH = '';
    var SBBZL_DM = '';
    var SSSQ_Q = '';
    var SSSQ_Z = '';
    var SBZT = "";//申报状态
    var SBBZT = "";
    var NSRLX_DM = "";
    //私有方法
    var data1;
    //是否是添加
    var bAdd = true;
    //私有方法
    return {
        //自动计算
        onCalc: function (obj) {
            DCellWeb1.calcManual(obj.checked);
        },
        onLoad: function () {
            curSeg = fb3;
            //引用报表控制
            dcell(DCellWeb1, "/hlwsb/printModel/zzs/ybnsr/sb_zzs_fb3_2019.cll");
            curSeg.onQuery();

            //删除组件释放内存
            $(window).unload(function () {
            });
        },
        onPrint: function () {
            return false;
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z,
                NSRLX_DM: NSRLX_DM,
                zb: baseTools.getUrlQueryString("zb")
            });
            window.location = hlwsbTools.cnf.clientURL+"/hlwsb/zzs_print/ybnsr/sb_zzs_ybnsr_fb3_2019.html?" + str;
        },
        //查询数据
        onQuery: function () {
          //  var col4 = DCellWeb1.getValByLabel("F17");
            // DCellWeb1.setValByLabel("D9", "1");
            var url = "/hlwsb/zzs/ybnsr/getSB_ZZS_YBNSR_FB3.do";
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");    //获取页面申报表种类代码标记
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");
            NSRLX_DM = baseTools.getUrlQueryString("NSRLX_DM");
            baseTools.xhrAjax({
                url: url,
                params: {
                    SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,NSRLX_DM: NSRLX_DM
                },
                callback: [curSeg.pageFlowControl]
            });
        },

        save: function () {
            var data = DCellWeb1.submitJsonjs({cols: ["MSXSE", "YSKC_QCYE", "YSKC_BQFSE", "YSKC_BQYKCJE", "YSKC_BQSJKCJE", "YSKC_QMYE"]});
            var url = bAdd
                ? "/hlwsb/zzs/ybnsr/insertSB_ZZS_YBNSR_FB3.do"
                : "/hlwsb/zzs/ybnsr/updateSB_ZZS_YBNSR_FB3.do";
            
            baseTools.xhrAjax({
                url: url,
                params: {DATA: data, SBBXH: SBBXH, SBBZL_DM: SBBZL_DM},
                callback: [curSeg.pageFlowControl]
            });

        },
        staticSave: function () {
            var data = DCellWeb1.submitJsonjs({cols: ["MSXSE", "YSKC_QCYE", "YSKC_BQFSE", "YSKC_BQYKCJE", "YSKC_BQSJKCJE", "YSKC_QMYE"]});
            var url = bAdd
                ? "/hlwsb/zzs/ybnsr/insertSB_ZZS_YBNSR_FB3.do"
                : "/hlwsb/zzs/ybnsr/updateSB_ZZS_YBNSR_FB3.do";
            baseTools.xhrAjax({
                url: url,
                params: {DATA: data, SBBXH: SBBXH, SBBZL_DM: SBBZL_DM},
                callback: [function(a,b){ bAdd=false; }]
            });

        },
        //保存数据
        onSave: function (tip) {
            if (!curSeg.checkData()) {
                return false;
            }
            if (SBBZT == "2" || SBBZT == "3") {
                alert("数据已申报，不允许添加");
                return false;
            }

            if (tip != 1) {
                if (confirm('是否要保存?')) {
                   curSeg.save();
                   // fb3.save();
                }
            } else {
                curSeg.save();
            }


        },
        onDelete: function () {
            if (SBBZT == "2" || SBBZT == "3") {
                alert("数据已申报，不允许删除");
                return null;
            }
            if (confirm("确定删除此报表？")) {
                var url = "/hlwsb/zzs/ybnsr/delSB_ZZS_YBNSR_FB3.do";
                baseTools.xhrAjax({
                    url: url,
                    params: {SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z},
                    callback: [curSeg.pageFlowControl]
                });
            }
        },
        setBtnDisabled: function () {
            $("#saveBtn").attr("disabled", true);
            $("#delBtn").attr("disabled", true);
            $("#printBtn").attr("disabled", true);
            $("#getdata").attr("disabled", true);
            $("#editBtn").attr("disabled", true);
        },
        initData: function (jsonObj) {

            var YGZNSRLX_DM = hlwsbTools.getYGZNSRLX_DM();
            if (YGZNSRLX_DM == '10') {
                //alert('您不是营改增纳税人，不能填写附表三!');
                //curSeg.setBtnDisabled();
                //return;
            }

            var isShow = jsonObj.data.YMKZ.ISSHOW;
            if (isShow == '1') {
                DCellWeb1.setValByLabel('A3', '您不具有差额征税资格，纳税申报后，请及时到税务机关办理差额征税资格的备案登记');
            }
            var flag = jsonObj.data.YMKZ.FLAG;
            if (flag == '0') {
                alert("您的附表1报表没有填写或保存，请先填附表1");
                curSeg.setBtnDisabled();
                return;
            }
            DCellWeb1.initDataToCell({
                cols: ["MSXSE", "YSKC_QCYE", "YSKC_BQFSE", "YSKC_BQYKCJE", "YSKC_BQSJKCJE", "YSKC_QMYE"],
                data: jsonObj.data,
                nsrxxCols: ["NSRMC", "NSRSBH", "SSSQ", "TBRQ"]
            });
            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
            if (jsonObj.data.HEAD.SBBZT) {
                bAdd = false;
            }else{
            	var map1 = {
                        HEAD: jsonObj.data.HEAD,
                        BODY: jsonObj.data.FPXXLIST
                    };
            	
            	DCellWeb1.initDataToCell({
                    cols: ["YSKC_BQFSE"],
                    data: map1
                });
            	//第一次打开默认将发票数据保存
                ////存在有些企业不需要填写该表，但一旦打开后自动保存无法删除问题，将之前的自动保存改为让企业进行选择是否自动保存
                //if(confirm("发票数据没有保存，请确认是否进行保存？")){
                 //   curSeg.staticSave();
                //}else{
                 //   return false;
                //}
              //  curSeg.staticSave();
            }
            
            //控制第五列，当第一列为负数时，第五列对应行次值为0
            DCellWeb1.inputCheck = function (col, row, sheet, text) {
                if (col == 2 && row > 8 && row <= 16) {
                    if (text < 0) {
                        DCellWeb1.SetCellDouble(6, row, 0, 0.00);
                        //DCellWeb1.SetCellInput(6, row, 0, 5);
                        return true;
                    }
                    return true;
                }
                return true;
            }
            //for (var i = 9; i < 17; i++) {
            //                var col001 = DCellWeb1.getValByLabel("B" + i);
            //                if (col001 < 0) {
            //                    DCellWeb1.SetCellInput(6, i, 0, 5);
            //                }
            //            }
            

            //对于附表三期初余额，保持从接口获取期初数。不再从网报库获取上期数据20170210 李俊博
            var qcyeList = jsonObj.data.YMKZ.QCYELIST;
            if(qcyeList && qcyeList.length>0){
            	for(var i = 0;i<qcyeList.length;i++){
            		var qcye = qcyeList[i];
            		DCellWeb1.setValByLabel('C'+(i+9),qcye);
            	}
            }
            //经业务确认，对于每年一月份，第四行期初余额默认为0.
            var ssq_yf = SSSQ_Q.substring(5, 7);
            if("01"==ssq_yf){
            	DCellWeb1.setValByLabel('C12',"0.00");
            }
        },
        initAnnotation: function () {
            DCellWeb1.SetCellTip(2, 11, 0, "6%税率无法提取，请手动填写");
            DCellWeb1.SetCellTip(2, 12, 0, "6%税率无法提取，请手动填写");
        },
        //主要检查一下 数据是否符合要求
        checkData: function () {
            var msg = "";
            for (var i = 9; i < 17; i++) {
                var hc = i - 8;
                var col01 = "B" + i;
                var col04 = "E" + i;
                var col05 = "F" + i;
                var col001 = DCellWeb1.getValByLabel("B" + i);
                if (col001 >= 0) {
                    if (!DCellWeb1.checkExpress([col01], null, ">=", col05)) {
                        msg += '第' + hc + '行，第5列应该小于等于第1列的值。\n';
                    }
                    if (!DCellWeb1.checkExpress([col04], null, ">=", col05)) {
                        msg += '第' + hc + '行，第5列应该小于等于第4列的值。\n';
                    }
                } else {
                    if (!DCellWeb1.checkExpress([col04], null, ">=", col05)) {
                        msg += '第' + hc + '行，第5列应该小于等于第4列的值。\n';
                    }
                }
                if(col05<0){
                    alert('第' + hc + '行，第5列应该大于等于0');
                    return false;
                }
            }
            if (hlwsbTools.trim(msg)) {
                alert(msg);
                return false;
            }
            return true;
        },
        //禁用表单的按钮 
        invalidate: function () {
            var inputList = document.getElementsByTagName('input')
            for (var i = 0; i < inputList.length; i++) {
                inputList[i].disabled = true;
            }
        },
        /*
         提取数据调用此方法
         */
        onExtract: function () {
            return false;
            var YGZNSRLX_DM = hlwsbTools.getYGZNSRLX_DM();
            var data = DCellWeb1.submitJsonjs({
                cols: ["YBHW_LW_BYS", "YBHW_LW_BNLJ", "JZJTHW_LW_BYS",
                    "JZJTHW_LW_BNLJ"]
            });
            var url = "/hlwsb/zzs/ybnsr/extractSB_ZZS_YBNSR_FB3.do";
            baseTools.xhrAjax({
                url: url,
                params: {
                    DATA: data,
                    YGZNSRLX_DM: YGZNSRLX_DM, SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,
                    ZBSBBDM: baseTools.getUrlQueryString("zb"), FB3SBBDM: SBBZL_DM
                },
                callback: [curSeg.pageFlowControl]
            });
        },

        onZzsfp: function () {
            return false;
			var winParam = {
                    id: 'win' + hlwsbTools.getNSRMC(), title: "服务、不动产和无形资产扣除项目明细",
                    url: '/hlwsb/zzs/ybnsr/sb_zzs_fp_hz.html?SBBZL_DM='+SBBZL_DM,
                    width: 680,
                    height:550
                };
             winObj = baseTools.showWinExt(winParam);
             $(winObj.DOM.wrap).bgiframe({
                	width: 700,
                    height: 550		
             });
			
		},
		
        onSxfp: function () {
            return false;
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
						break;
						default:
						}
					}]
				});
			}
		},

        openPopWin: function () {
            return false;
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=fb3&&startRow=10&&sheetIndex=1&templatePath=../../printModel/zzs/ybnsr/ybnsr2016/sb_zzs_fb3_2016.zip',
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
            /*var data1 = {
                BODY: []
            };*/
            for(var i =0;i<jsonArray.length;i++){
                if(jsonArray[i].MSXSE=="END"){
                    break;
                }
                data1.BODY.push(jsonArray[i]);
            }
            DCellWeb1.initDataToCell({
                cols: ["MSXSE", "YSKC_QCYE", "YSKC_BQFSE", "YSKC_BQSJKCJE"],
                data: data1,
                iszdjskxg: true
            });
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
                    alert("提取成功\n6%税率无法提取数，请手工填写数据");
                    curSeg.initAnnotation();
                    curSeg.initData(jsonObj);
                    //return;
                    cell.calculateAllJs();
                    if (confirm("提取成功后，请保存数据\r\n 确定要保存吗？")) {
                        curSeg.onSave(1);
                    }
                    break;
                //数据已经申报过
                case 4:
                    alert(jsonObj.msg);
                    break;
                //在线帮助
                case 6:
                    break;
                case -1://保存出错返回标志
                case -2://其它错误返回标志
//                    alert(jsonObj.msg);
                    var reason = jsonObj.msg;
                    if (reason.indexOf("异常原因：") > -1) {
                        reason = reason.substring(reason.indexOf("异常原因："));
                        var sssq = DCellWeb1.getValByName('SSSQ');
                        sssq += hlwsbTools.setSSsq(SSSQ_Q, SSSQ_Z);
                        DCellWeb1.setValByName('SSSQ', sssq);
                        curSeg.invalidate();
                    }
                    DCellWeb1.setValByLabel("A3", "系统异常：" + reason);
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