//使用窗口组件加载时注释下面的代码
$(document).ready(function () {
    zzs.onLoad();
});
/**
 *
 *
 */
var zzs = (function () {
    //私有属性
    var curSeg; // 保存zzs对象的
    var SBBXH = '';
    var SBBZL_DM = '';
    var SSSQ_Q = '';
    var SSSQ_Z = '';
    var SBBZT = "";
    var NSRLX_DM = "";
    var jsdata = [];
    var msdata = [];
    var DJXH = '';
    //是否是添加
    var bAdd = true;

    var sysl = 0.00;
    var sfzNum = 0;
    //私有方法
    var data1;
    //公有方法
    return {

        onLoad: function () {
            curSeg = zzs;
            //引用报表控制
            dcell(DCellWeb1, "/hlwsb/printModel/zzs/ybnsr/ybnsr2016/sb_zzs_ybnsr_jmsmxb_2016.cll");
            curSeg.onQuery();
            baseTools.xhrAjax({
//                url: "/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_ZZS_JMSZC&JMZLB=0",
            	url : "/hlwsb/dm/getDM_ZZS_JMSZC.do?isPrint=N&JMZLB=0",
                params: {
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, NSRLX_DM: NSRLX_DM
                },
                callback: [function (jsonObj, xhrArgs) {
                    jsdata = jsonObj.data.BODY;
                }]
            });
            baseTools.xhrAjax({
//                url: "/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_ZZS_JMSZC&JMZLB=1",
            	url : "/hlwsb/dm/getDM_ZZS_JMSZC.do?isPrint=N&JMZLB=1",
                params: {
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, NSRLX_DM: NSRLX_DM
                },
                callback: [function (jsonObj, xhrArgs) {
                    msdata = jsonObj.data.BODY;
                }]
            });
            DCellWeb1.MouseLClick = function (col, row) {
                var row1 = DCellWeb1.GetCellVar_J("END1").row;
                var row2 = DCellWeb1.GetCellVar_J("HJ2").row;
                var row3 = DCellWeb1.GetCellVar_J("END2").row;
                if (2 == col && ((row > 8 && row < row1) || (row > row2 && row < row3) )) {
                    var value = DCellWeb1.GetDroplistCellKey(col, row, 0);
                    var offset = $("#DCellWeb1").offset();
                    var inputNode = $("#select").find(":input");
                    var c1 = DCellWeb1.GetColWidth(1, col, 0);
                    var c2 = DCellWeb1.GetColWidth(1, 3, 0);
                    var c = c1 + c2;
                    var r = DCellWeb1.GetRowHeight(1, row, 0);
                    var left, t;
                    inputNode.css({width: c, height: r});
                    left = getWidth(col, n_col);
                    t = getHeight(row, n_row) + offset.top;
                    $("#select").get(0).style.left = left;
                    $("#select").get(0).style.top = t;
                    $("#JM_ID").combobox({
                        prompt: '输入关键字后自动搜索',
                        data: (row > 8 && row < row1) ? jsdata : msdata,
                        valueField: "XLH",
                        textField: "JMXZ_MC",
                        onLoadSuccess: function () {
                            $(".combo-p").bgiframe({
                                width: c,
                                height: 250
                            });
                            $("#select").bgiframe({
                                width: c,
                                height: r
                            });

                            $("#JM_ID").combobox('setValue', value);
                        },
                        filter: function (q, row) {
                            var opts = $(this).combobox("options");
                            return row[opts.textField].indexOf(q) >= 0;
                        },
                        onSelect: function (recode) {
                            DCellWeb1.SetDroplistCellKey(col, row, 0, recode.XLH);
                            //DCellWeb1.setValue(col,row,0, recode.XH + '_' + recode.JMXZ_MC);
                            // alert(JSON.stringify(recode))
                            $("#select").bgiframe({
                                width: 0,
                                height: 0
                            });
                            if (col == 2 && row > row2 && row < row3) {
                                var xlh = recode.XLH;
                                curSeg.autoFillSL(col, row, xlh);
                                baseTools.xhrAjax({
                                    url: '/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_QY_YHBA',
                                    params: {DJXH: DJXH},                         //JMXZ_DM: recode.JMXZ_DM,
                                    callback: [function (jsonObj) {
                                        //alert(jsonObj.data.BODY[0]);
                                        if (jsonObj.data.BODY[0] == 0) {
                                            alert("请到税务机关进行减免事项备案");
                                        } else {
                                            baseTools.xhrAjax({
                                                url: '/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_QY_YHBA',
                                                params: {JMXZ_DM: recode.JMXZ_DM, DJXH: DJXH},
                                                callback: [function (jsonObj) {
                                                    //alert(jsonObj.data.BODY[0]);
                                                    if (jsonObj.data.BODY[0] == 0) {
                                                        alert("请选择已备案的减免事项");
                                                    }
                                                }]
                                            });
                                        }
                                    }]
                                });
                            }
                        },
                        onUnselect: function () {
                            alert('un')
                        },
                        onShowPanel: function () {
                            $(".combo-p").bgiframe({
                                width: c,
                                height: 250
                            });
                        },
                        onHidePanel: function () {
                            $(".combo-p").bgiframe({
                                width: c,
                                height: 0
                            });
                        }
                    });

                } else if ((col == 5 || col == 6 || col == 8) && (row > row2 && row < row3)) {
                    var xlh = DCellWeb1.GetDroplistCellKey(2, row, 0);
                    curSeg.autoFillSL(col, row, xlh);
                }
            }
            //删除组件释放内存
            $(window).unload(function () {
            });
        },

        autoFillSL: function (col, row, xlh) {
            if (sfzNum == 1) {//税费种认定信息表只有一条数据，则取该条税率
                DCellWeb1.setValue(12, row, 0, sysl);
            } else {//否则，取当前勾选减免项对应的税率值，存在多个税率的取第一个；
                //没有对应税率的减免项取税费种认定表的税率
                if (xlh) {  //获取税率
                    baseTools.xhrAjax({
                        url: '/hlwsb/dm/getDM_ZZS_JMSZC.do?isPrint=N',
                        params: {XH: xlh},
                        callback: [function (jsonObj) {
                            var sl1 = jsonObj.data.BODY[0].SL1;
                            if (sl1) {
                                DCellWeb1.setValue(12, row, 0, sl1);
                            } else {
                                DCellWeb1.setValue(12, row, 0, sysl);
                            }
                        }]
                    });
                }

            }
        },

        hideSelect: function () {
            $("#select").bgiframe({
                width: 0,
                height: 0
            });
        },
        onPrint: function () {
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z,
                NSRLX_DM: NSRLX_DM
            });
            window.location = "/hlwsb/zzs_print/ybnsr/ybnsr2016/sb_zzs_ybnsr_jmsmxb_2016.html?" + str;
        },
        //查询数据
        onQuery: function () {
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");    //获取页面申报表种类代码标记
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");
            NSRLX_DM = baseTools.getUrlQueryString("NSRLX_DM");
            var url = "/hlwsb/zzs/ybnsr/getSB_ZZS_YBNSR_JMSMXB.do";
            baseTools.xhrAjax({
                url: url,
                params: {SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, NSRLX_DM: NSRLX_DM},
                callback: [curSeg.pageFlowControl]
            });
        },
        //保存数据
        onSave: function () {


            if (SBBZT == "2" || SBBZT == "3") {
                alert("数据已申报，不能保存");
                return false;
            }
            var map0 = DCellWeb1.submitJsonjs({
                cols: ["XZDM", "COL1", "COL2", "COL3", "COL4", "COL5","LM"],
                returnType: "object"
            });
            var ckms = DCellWeb1.getValByName("CKMS");
            map0.BODY[0].XZDM = "";
            map0.BODY[0].COL1 = ckms;
            map0.BODY[0].COL2 = 0;
            map0.BODY[0].COL3 = 0;
            map0.BODY[0].COL4 = 0;
            map0.BODY[0].COL5 = 0;
            map0.BODY[0].COL6 = 0;
            map0.BODY[0].COL7 = 0;
            map0.BODY[0].HC = 0;
            map0.BODY[0].LM = "0";//lm：0，指得是免税项目：出口免税

            var kjfw = DCellWeb1.getValByName("KJFW");
            map0.BODY[1].XZDM = "";
            map0.BODY[1].COL1 = kjfw;
            map0.BODY[1].COL2 = 0;
            map0.BODY[1].COL3 = 0;
            map0.BODY[1].COL4 = 0;
            map0.BODY[1].COL5 = 0;
            map0.BODY[1].COL6 = 0;
            map0.BODY[1].COL7 = 0;
            map0.BODY[1].HC = 1;
            map0.BODY[1].LM = "0";//lm：0，hc:1指得是其中：跨境服务

            if( (kjfw>ckms) && (ckms>=0)){
            	alert("“其中：跨境服务免征增值税项目销售额”必须小于等于“出口免税免征增值税项目销售额”");
            	return false;
            }
            
            
            var map1 = DCellWeb1.cellRowToJson({//lm：1，指得是减税项目
                cols: ["XZDM", "COL1", "COL2", "COL3", "COL4", "COL5","LM"],
                returnType: "object",
                cellRows: [
                    {start: "HJ", end: "END1"}
                ]
            });

            if (map1.BODY.length > 0) {

                for (var i = 0; i < map1.BODY.length; i++) {

                    var xzdm = map1.BODY[i].XZDM;
                    if (xzdm == "") {
                        alert("减税项目中“减免性质代码和名称”不能为空");
                        return false;
                    }
                    
                    for (var j = 0 ;j<i;j++){
           			   var xzdm1 = map1.BODY[j].XZDM;
           			   if (xzdm1 == xzdm ) {
           				 alert("减税性质代码及名称不能重复，请重新选择!");
           				 return false;
           			   }
           		    }

                    var col04 = map1.BODY[i].COL4;
                    var col03 = map1.BODY[i].COL3;
                    if (col03 < col04) {
                        alert("减税项目第"+(i+1)+"行中“本期实际抵减税额”不能大于“本期应抵减税额”");
                        return false;
                    }
                    if(col04<0){
           			  alert("减税项目第"+(i+1)+"行中“本期实际抵减税额”不能小于0");
           			  return false;
           		    }
                }
            }

            map0.BODY = map0.BODY.concat(map1.BODY);
            var map2 = DCellWeb1.cellRowToJson({//lm：2，指得是免税项目
                cols: ["XZDM", "COL1", "COL2", "COL3", "COL4", "COL5","LM"],
                returnType: "object",
                cellRows: [
                    {start: "HJ2", end: "END2"}
                ]
            });

            if (map2.BODY.length > 0) {
                var tip = '';
                for (var i = 0; i < map2.BODY.length; i++) {
                    var col04 = map2.BODY[i].COL4;
                    var col03 = map2.BODY[i].COL3;
                    var col05 = map2.BODY[i].COL5;
                    //20180821 陈博君 修改【增值税申报（适用于一般纳税人）】用例，《增值税减免税申报明细表》增加强制监控：“免税项目”的第5列“免税额”必须小于等于第3列“扣除后免税销售额”×-第4列“免税销售额对应的进项税额”
                    var YZ05=hlwsbTools.formatFloatData((col03*0.16-col04), 3).toFixed(2);////col03*增值税一般人最大税率（16%）-col04------20181208  0.17改为0.16  liuguozhong
                    if (col05>YZ05) {
                        alert( "请确认第" + (i + 1) + "行“第5列免税额”应小于等于“第3列扣除后免税销售额”×增值税一般人最大税率（16%）-第4列免税销售额对应的进项税额.");
                        return false;
                    }
                }
                if (tip != '') {
                    if (!confirm(tip)) {
                        return false;
                    }
                }
                for (var i = 0; i < map2.BODY.length; i++) {
                    var xzdm = map2.BODY[i].XZDM;
                    if (xzdm == "") {
                        alert("免税项目中“免税性质代码和名称”不能为空");
                        return false;
                    }

                    for (var j = 0 ;j<i;j++){
           			  var xzdm1 = map2.BODY[j].XZDM;
           			  if (xzdm1 == xzdm ) {
           				 alert("免税性质代码及名称不能重复，请重新选择!");
           				 return false;
           			  }
           		    }
                    
                    var col05 = map2.BODY[i].COL5;
                    if (col05 < 0) {
                        alert("免税项目中“免税额”不能小于0");
                        return false;
                    }
					if(map2.BODY[i].COL3<0){
						alert("免税项目中“扣除后免税销售额”不能小于0");
						return false;
					}
					var col03 = map2.BODY[i].COL3;
					var col04 = map2.BODY[i].COL4;
                    if(col04>col03){
                    	alert("免税项目中“免税销售额对应的进项税额”必须小于等于“扣除后免税销售额 ”");
                    	return false;
                    }
                }
            }

            map0.BODY = map0.BODY.concat(map2.BODY);
            var url = "/hlwsb/zzs/ybnsr/insertSB_ZZS_YBNSR_JMSMXB.do";
            baseTools.xhrAjax({
                url: url,
                params: {
                    DATA: JSON.stringify(map0),
                    SBBXH: SBBXH,
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q,
                    SSSQ_Z: SSSQ_Z,
                    NSRLX_DM: NSRLX_DM
                },
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
                var url = "/hlwsb/zzs/ybnsr/delSB_ZZS_YBNSR_JMSMXB.do";
                baseTools.xhrAjax({
                    url: url,
                    params: {SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, NSRLX_DM: NSRLX_DM},
                    callback: [curSeg.pageFlowControl]
                });
            }
            DCellWeb1.setValByName("CKMS", 0);
            DCellWeb1.setValByName("KJFW", 0);

        },
        initData: function (jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
            DJXH = jsonObj.data.DJXH;
            DCellWeb1.initSelectCell({
                col: "HJ",
//                action: "/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_ZZS_JMSZC&JMZLB=0",
                action:"/hlwsb/dm/getDM_ZZS_JMSZC.do?isPrint=N&JMZLB=0",
                value: "XLH",
                text: "JMXZ_MC"
            });

            DCellWeb1.initSelectCell({
                col: "HJ2",
//                action: "/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_ZZS_JMSZC&JMZLB=1",
                action:"/hlwsb/dm/getDM_ZZS_JMSZC.do?isPrint=N&JMZLB=1",
                value: "XLH",
                text: "JMXZ_MC"
//            callback:curSeg.autoFillSL()
            });

            var body = jsonObj.data.BODY;
            var map1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };


            var map2 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };

            for (var i = 0; i < body.length; i++) {
                if (body[i].LM == '1') {
                    map1.BODY.push(body[i]);
                } else if (body[i].LM == '2') {
                    map2.BODY.push(body[i]);
                } else if (body[i].LM == '0') {
                    if (body[i].HC == '0') {
                        var ckms = body[i].COL1
                        DCellWeb1.setValByName("CKMS", ckms);
                    } else if (body[i].HC == '1') {
                        var kjfw = body[i].COL1
                        DCellWeb1.setValByName("KJFW", kjfw);
                    }
                }

            }


            DCellWeb1.initRowToCell({
                cols: ["XZDM", "COL1", "COL2", "COL3", "COL4", "COL5","HC", "LM"],
                cellRows: [
                    {
                        start: "ADD1", end: "END1",
                        hc: "HC", xl: "XH2",
                        addButton: {name: "ADD1"},
                        delButton: {
                            name: "DEL1",
                            checkbox: "CZ1",
                            url: "/hlwsb/zzs/ybnsr/delSB_ZZS_YBNSR_JMSMXB.do",
                            params: {
                                SBBXH: SBBXH,
                                SBBZL_DM: SBBZL_DM,
                                SSSQ_Q: SSSQ_Q,
                                SSSQ_Z: SSSQ_Z,
                                NSRLX_DM: NSRLX_DM,
                                LM: '1'
                            }
                        }
                    }
                ],
                nsrxxCols: ["NSRMC", "NSRSBH", "SSSQ"],
                data: map1
            });

            DCellWeb1.initRowToCell({
                cols: ["XZDM", "COL1", "COL2", "COL3", "COL4", "COL5","HC", "LM"],
                cellRows: [
                    {
                        start: "HJ2", end: "END2",
                        hc: "HC", xl: "XH2",
                        addButton: {name: "ADD2"},
                        delButton: {
                            name: "DEL2",
                            checkbox: "CZ2",
                            url: "/hlwsb/zzs/ybnsr/delSB_ZZS_YBNSR_JMSMXB.do",
                            params: {
                                SBBXH: SBBXH,
                                SBBZL_DM: SBBZL_DM,
                                SSSQ_Q: SSSQ_Q,
                                SSSQ_Z: SSSQ_Z,
                                NSRLX_DM: NSRLX_DM,
                                LM: '2'
                            }
                        }
                    }
                ],
                nsrxxCols: ["NSRMC", "NSRSBH", "SSSQ"],
                data: map2,
//        	               manual : true,
                iszdjskxg: true

            });
            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            sysl = jsonObj.data.YMKZ.SYSL;
            sfzNum = jsonObj.data.YMKZ.sfzNum;
            if (jsonObj.data.HEAD.SBBZT && jsonObj.data.HEAD.SBBZT == 1) {
                bAdd = false;
            } else if (!(jsonObj.data.HEAD.SBBZT)) {
                DCellWeb1.SetCellDouble(5, 15, 0, 0.0);
                DCellWeb1.SetCellDouble(6, 15, 0, 0.0);
                DCellWeb1.SetCellDouble(7, 15, 0, 0.0);
                DCellWeb1.SetCellDouble(8, 15, 0, 0.0);
                DCellWeb1.SetCellDouble(9, 15, 0, 0.0);
            }
            var Tip = "温馨提醒：如您需要填写“减税项目”或“免税项目”具体明细，请点击增加按钮增加行次进行填报！\r"
            Tip += "\r\n用于免税额计算的适用税率取自税费种认定信息。如有疑义，请针对“免税额”列自行修改。";
            DCellWeb1.setValByLabel("A2", Tip);
        },

        //导入
        openPopWin:function(){
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=zzs&&startRow=8&&sheetIndex=1&templatePath=../../printModel/zzs/ybnsr/ybnsr2016/sb_zzs_ybnsr_jmsmxb_2016.zip',
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
                    alert("保存成功");
                    top.main.changeNodeStatus(SBBZL_DM,"1");
                    bAdd = false;
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
                        jQuery(".toolBar input[type='button']").attr('disabled', 'true');
                    }
                    alert(reason);
                    DCellWeb1.setValByLabel("A2", "系统异常：" + reason);
                    baseTools.hideMash();
                    break;
                case -3://cookie 失效请重新登录
                    alert(jsonObj.msg);
                    baseTools.gotoLogin();
                    break;
                default:
                    break;
            }
        }
    };
})();