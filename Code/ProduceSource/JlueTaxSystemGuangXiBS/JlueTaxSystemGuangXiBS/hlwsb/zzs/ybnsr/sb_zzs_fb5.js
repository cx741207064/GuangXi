/**
 * Created by SB_XFS_CPY.html. User: wangshibo Date: 13-12-7 Time: 上午11:09 To
 * change this template use File | Settings | File Templates.
 */

// 使用窗口组件加载时注释下面的代码
$(document).ready(function () {
    fb5.onLoad();
});
/**
 *
 *
 */
var fb5 = (function () {
    // 私有属性
    var curSeg; // 保存fb5对象的
    var SBBXH = '';
    var SBBZL_DM = "";
    var SBBZT = '';
    var SSSQ_Q = '';
    var SSSQ_Z = '';
    var NSRSBH = '';
    // 是否是添加
    var bAdd = true;
    // 私有方法
    var data1;
    // 公有方法
    return {
        insertRow: function () {
            DCellWeb1.insertCellRow({
                insertBefore: "HJ"
            });
        },

        onExport: function() {DCellWeb1.ExportExcelDlg();},onLoad: function () {
            curSeg = fb5;
            // 引用报表控制
            dcell(DCellWeb1,
                "/hlwsb/printModel/zzs/ybnsr/sb_zzs_fb5.cll");

            curSeg.onQuery();

            // 删除组件释放内存
            $(window).unload(function () {
            });
        },
        onPrint: function () {
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z
            });
            window.location = "/hlwsb/zzs_print/ybnsr/sb_zzs_fb5.html?" + str;
        },
        // 查询数据
        onQuery: function () {
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM"); // 获取页面申报表种类代码标记
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");
            var url = "/hlwsb/zzs/ybnsr/getSB_ZZS_FB5.do";
            baseTools.xhrAjax({
                url: url,
                params: {SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z},
                callback: [ curSeg.pageFlowControl ]
            });
        },
        // 保存数据
        onSave: function () {
            if (SBBZT == "2" || SBBZT == "3") {
                alert("数据已申报，不允许添加");
                return;
            }
            var data = DCellWeb1.cellRowToJson({
                cols: [ "KJR_NSRSBH", "KJR_MC", "ZSJG_MC", "DKDJXM", "DKDJPZBH", "SE"],
                cellRows: [
                    {
                        start: "XH",
                        end: "HJ"
                    }
                ]
            });
            var body = JSON.parse(data).BODY;
			var result = curSeg.checkData(body);
            if (!result.result) {
                alert(result.errorMsg);
                return;
            } 
            if (!confirm('是否保存？')) {
                return false;
            }
            var url = "/hlwsb/zzs/ybnsr/insertSB_ZZS_FB5.do";
            baseTools.xhrAjax({
                url: url,
                params: {
                    DATA: data,
                    SBBXH: SBBXH,
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q,
                    SSSQ_Z: SSSQ_Z
                },
                callback: [ curSeg.pageFlowControl ]
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
                var url = "/hlwsb/zzs/ybnsr/delSB_ZZS_FB5.do";
                baseTools.xhrAjax({
                    url: url,
                    params: {  SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z},
                    callback: [ curSeg.pageFlowControl ]
                });
            }
        },
        initData: function (jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
            NSRSBH = jsonObj.data.HEAD.NSRSBH;
            SBBXH = jsonObj.data.HEAD.SBBXH;
            DCellWeb1.initRowToCell({
                cols: [ "XH", "KJR_NSRSBH", "KJR_MC", "ZSJG_MC", "DKDJXM", "DKDJPZBH", "SE"],
                cellRows: [{
                    start: "KJR_NSRSBH",
                    end: "HJ",
                    xl: "XL",
                    hc: "XH",
                    addButton: {name: "ADD"},
                    delButton: {name: "DEL",
                        checkbox: "CZ",
                        url: "/hlwsb/zzs/ybnsr/delSB_ZZS_FB5_BY_HC.do",
                        params: { SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z}
                    }
                }],
                data: jsonObj.data,
                nsrxxCols: [ "NSRSBH", "SSSQ", "NSRMC", "TBRQ" ]
            });
            SBBZT = jsonObj.data.HEAD.SBBZT;
            if (SBBZT) {
            	bAdd = false;
            }
        },
        initControl : function(){
        	DCellWeb1.inputCheck = function(col,row,sheet,text){
        		if(col == 4){
        			if(text && text.length > 20){
        				return false;
        			}
        		}
        		return true;
        	}
        },
        checkData : function (body) {
        	var msg = '';
        	var flag = true;
        	if(body && body.length > 0){
        		for(var i = 0; i < body.length; i++){
        			if(!body[i].KJR_NSRSBH || !hlwsbTools.trim(body[i].KJR_NSRSBH)){
        				flag = false;
        				msg = '提示信息:\n第' + (i + 1) +  '行的扣缴人纳税人识别号不能为空。';
        				break;
        			}
        			if(!body[i].KJR_MC || !hlwsbTools.trim(body[i].KJR_MC)){
        				flag = false;
        				msg = '提示信息:\n第' + (i + 1) +  '行的扣缴人名称不能为空。';
        				break;
        			}
        		}
        	}else {
        		flag = false;
        		msg = '请增加至少一行,然后再执行保存！'
        	}
        	return {'result' : flag,'errorMsg' : msg};
        },
        openPopWin:function(){
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=fb5&&startRow=9&&sheetIndex=1&templatePath=../../printModel/zzs/ybnsr/sb_zzs_fb5.zip',
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
            data1.BODY=[];
            for(var i =0;i<jsonArray.length;i++){
                if(jsonArray[i].XH=="合计"){
                    break;
                }
                data1.BODY.push(jsonArray[i]);
            }

            DCellWeb1.initRowToCell({
                cols: ["KJR_NSRSBH", "KJR_MC", "ZSJG_MC", "DKDJXM", "DKDJPZBH", "SE"],
                cellRows: [{
                    start: "KJR_NSRSBH",
                    end: "HJ",
                    xl: "XL",
                    hc: "XH",
                    addButton: {name: "ADD"},
                    delButton: {name: "DEL",
                        checkbox: "CZ",
                        url: "/hlwsb/zzs/ybnsr/delSB_ZZS_FB5_BY_HC.do",
                        params: { SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,GZ:gzbz}
                    }
                }],
                data: data1,
                nsrxxCols: [ "NSRSBH", "SSSQ", "NSRMC", "TBRQ" ]
            });
            return true;
        },
        /**
         * 需要的时候可以覆盖该方法 在ajax调用中，在得到数据时调用该方法
         */
        pageFlowControl: function (jsonObj, xhrArgs) {
        	var SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            switch (parseInt(jsonObj.code)) {
                // 查询操作返回标志
                case 0:
                    curSeg.initData(jsonObj);
                    curSeg.initControl();
                    break;
                // 添加、更新以及状态更新操作返回标志
                case 1:
                    bAdd = false;
                    alert("保存成功");
                    top.main.changeNodeStatus(SBBZL_DM,"1");
                    curSeg.initData(jsonObj);
                    break;
                // 删除操作返回标志
                case 2:
                    bAdd = true;
                    alert("删除成功");
                    top.main.changeNodeStatus(SBBZL_DM,"0");
                    curSeg.initData(jsonObj);
                    break;
                // 准备添加的记录已经存在
                case 3:
                    break;
                // 在线帮助
                case 6:
                    break;
                case -1:// 保存出错返回标志
                case -2:// 其它错误返回标志
                	var reason = 	jsonObj.msg;
                	if(reason.indexOf("异常原因：")>-1){
                		reason = reason.substring(reason.indexOf("异常原因："));
                		var sssq = DCellWeb1.getValByName('SSSQ');
                		sssq +=  hlwsbTools.setSSsq(SSSQ_Q, SSSQ_Z);
                		DCellWeb1.setValByName('SSSQ', sssq);
                	}
                	alert(reason);
                    baseTools.hideMash();
                    break;
                case -3:// cookie 失效请重新登录
                    alert(jsonObj.msg);
                    baseTools.gotoLogin();
                    break;
                default:
            }
        }
    };
})();