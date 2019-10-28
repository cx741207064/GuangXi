//使用窗口组件加载时注释下面的代码
$(document).ready(function() {
	fb1.onLoad();
});

var fb1 = (function() {
	// 私有属性
	var curSeg; // 保存fb1对象的
	var SBBXH = '';
	var SBBZL_DM = '101012008';
	var SSSQ_Q = '';
	var SSSQ_Z = '';
	var SBBZT = '';

	var YGZNSRLX_DM = '';// 营改增纳税人类型
	// 私有方法
    var data1;
	// 是否是添加
	var bAdd = true;
	// 私有方法
    var gz='';
	// 公有方法
	return {
		// 修改期初余额
		// editQcye : function(obj){
		// if(obj.checked) {
		// DCellWeb1.setCellInputByLabel("A8", 2);
		// } else {
		// DCellWeb1.setCellInputByLabel("A8", 5);
		// }
		// },

		onCalc : function(obj) {
			DCellWeb1.calcManual(obj.checked);
		},
		onLoad : function() {
			curSeg = fb1;
			// 引用报表控制
			dcell(DCellWeb1,
					"/hlwsb/printModel/zzs/xgm/sb_zzs_xgmnsr_czzs_2016_fb1.cll");
			curSeg.onQuery();
			// 删除组件释放内存
			$(window).unload(function() {
			});
		},
		// 查询数据
		onQuery : function() {
			// SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM"); // 获取页面申报表种类代码标记
			SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");
			SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");
            gz= baseTools.getUrlQueryString("gz");
			var url = "/hlwsb/zzs/xgm/getSB_ZZS_XGMNSR_CZZS_FB1_2016.do";
			baseTools.xhrAjax( {
				url : url,
				params : {
					SBBZL_DM : SBBZL_DM,
					SSSQ_Q : SSSQ_Q,
					SSSQ_Z : SSSQ_Z
				},
				callback : [ curSeg.pageFlowControl ]
			});
		},
		// 跳转到打印页面
		onPrint : function() {
			var str = hlwsbTools.urlStr( {
				SBBZL_DM : SBBZL_DM,
				SSSQ_Q : SSSQ_Q,
				SSSQ_Z : SSSQ_Z
			});
			window.location = "/hlwsb/zzs_print/xgm/sb_zzs_xgmnsr_czzs_2016_fb1.html?"
					+ str;
		},
		// 保存数据
		onSave : function() {
			if(gz!='Y'){
                if (SBBZT == '2' || SBBZT == '3') {
                    alert("已申报，不能保存");
                    return;
                }
            }
			if (!curSeg.checkData()) {
				return;
			}

			if (!confirm('是否要保存?')) {
				return;
			}
			var data = DCellWeb1.submitJsonjsSL( {
				cols : [ "COL01", "COL02", "COL03", "COL04", "COL05", "COL06",
						"COL07", "COL08", "COL09", "COL10", "COL11", "COL12",
						"COL13", "COL14", "COL15", "COL16" ]
			});
			if(gz=='Y'){
                if (!confirm('保存后会将原数据覆盖，确定要保存吗？')) {
                    return;
                }
			}
			var url = bAdd ? "/hlwsb/zzs/xgm/insertSB_ZZS_XGMNSR_CZZS_FB1_2016.do"
					: "/hlwsb/zzs/xgm/updateSB_ZZS_XGMNSR_CZZS_FB1_2016.do";
			baseTools.xhrAjax( {
				url : url,
				params : {
					DATA : data,
					SBBXH : SBBXH,
					SBBZL_DM : SBBZL_DM,
					SSSQ_Q : SSSQ_Q,
					SSSQ_Z : SSSQ_Z,
					gz:gz
				},
				callback : [ curSeg.pageFlowControl ]
			});

		},
        // 添加暂存
        onCacheSave: function () {
            if(gz!='Y'){
                if (SBBZT == '2' || SBBZT == '3') {
                    alert("已申报，不能保存");
                    return;
                }
            }

            if (!confirm('是否暂存?')) {
                return;
            }
            var data = DCellWeb1.submitJsonjsSL( {
                cols : [ "COL01", "COL02", "COL03", "COL04", "COL05", "COL06",
                    "COL07", "COL08", "COL09", "COL10", "COL11", "COL12",
                    "COL13", "COL14", "COL15", "COL16" ]
            });
            if(gz=='Y'){
                if (!confirm('保存后会将原数据覆盖，确定要保存吗？')) {
                    return;
                }
            }
            var url = bAdd ? "/hlwsb/zzs/xgm/insertSB_ZZS_XGMNSR_CZZS_FB1_2016.do"
                : "/hlwsb/zzs/xgm/updateSB_ZZS_XGMNSR_CZZS_FB1_2016.do";
            baseTools.xhrAjax( {
                url : url,
                params : {
                    DATA : data,
                    SBBXH : SBBXH,
                    SBBZL_DM : SBBZL_DM,
                    SSSQ_Q : SSSQ_Q,
                    SSSQ_Z : SSSQ_Z,
                    gz:gz,
                    temSBBZT: 5
                },
                callback : [ curSeg.pageFlowControl ]
            });
        },

		roundTFix : function(value) {
			if (!isNaN(value)) {
				return parseFloat(Number(Number(value).toFixed(3)).toFixed(2));
			} else {
				return value;
			}
		},

		onDelete : function() {
			if (SBBZT == '2' || SBBZT == '3') {
				alert("已申报，不能删除");
				return;
			}
			if (confirm("确定删除此报表？")) {
				var url = "/hlwsb/zzs/xgm/delSB_ZZS_XGMNSR_CZZS_FB1_2016.do";
				baseTools.xhrAjax( {
					url : url,
					params : {
						SBBXH : SBBXH,
						SBBZL_DM : SBBZL_DM,
						SSSQ_Q : SSSQ_Q,
						SSSQ_Z : SSSQ_Z
					},
					callback : [ curSeg.pageFlowControl ]
				});
			}
		},
		initData : function(jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
			DCellWeb1.initDataToCellSL( {
				cols : [ "COL01", "COL02", "COL03", "COL04", "COL05", "COL06",
						"COL07", "COL08", "COL09", "COL10", "COL11", "COL12",
						"COL13", "COL14", "COL15", "COL16" ],
				data : jsonObj.data,
				nsrxxCols : [ "NSRMC", "NSRSBH", "SSSQ", "TBRQ" ]
			});
			SBBXH = jsonObj.data.HEAD.SBBXH;
			SBBZT = jsonObj.data.HEAD.SBBZT;
			YGZNSRLX_DM = jsonObj.data.YMKZ.YGZNSRLX_DM;
			// 营改增纳税人类型代码;10-非营改增纳税人;11-销售货物劳务纳税人;20-营改增纳税人;21-提供应税服务纳税人;22-混业纳税人
			if ("10" == YGZNSRLX_DM) {
				alert("您是非营改增纳税人，不能填写此表！");
				jQuery(".toolBar input[type='button']")
						.attr('disabled', 'true');
			}
			// if(jsonObj.data.YMKZ.CEZSZG == '1'){
			// DCellWeb1.setValByLabel("A2",'您不具有差额征税资格，请先到税务机关办理差额征税资格的备案登记');
			// jQuery(".toolBar input[type='button']").attr('disabled','true');
			// }

			if (jsonObj.data.HEAD.SBBZT) {
				bAdd = false;
			}

			// 控制季报显示
			// if (jsonObj.data.YMKZ.ISSHOW == "0") {
			// 	var inputList = document.getElementsByTagName('input')
			// 	for ( var i = 0; i < inputList.length; i++) {
			// 		inputList[i].disabled = true;
			// 	}
			// 	alert("只有1月，4月，7月，10月才需填写此表");
			// }
			curSeg.initYmkz(jsonObj);
		},

		initYmkz : function(jsonObj) {
			/**
			 * fenglaoshi 20160518 1，没有5%的应税服务列4、5行控死 2，有5%，没有不动产征收项目的，不控死，不弹窗
			 * 3，有5%，只有不动产，不控死，不弹窗，不参与计算 4，有5%，不只有不动产，不控死,弹窗，不参与计算
			 */
			var zspmList = jsonObj.data.ZSPMLIST;
			// if(zspmList && zspmList.length>=0){
		// for(var i= 0;i<zspmList.length;i++){
		// if(zspmList[i].ZSL && zspmList[i].ZSL==0.05){
		// DCellWeb1.setCellInput(4,15,0,2);
		// DCellWeb1.setCellInput(4,16,0,2);
		// DCellWeb1.setCellInput(4,18,0,2);
		// }
		// }
		// }
		var COL0102BZ = "Y";
		var COL0104BZ = "Y";
		if (zspmList && zspmList.length >= 0) {
			for ( var i = 0; i < zspmList.length; i++) {
				if (zspmList[i].ZSPM_DM
						&& (zspmList[i].ZSPM_DM.substring(5, 6) == '6' || zspmList[i].ZSPM_DM
								.substring(5, 6) == '7')) {// 2016.07.02加入应该增校验

					if (zspmList[i].ZSL && zspmList[i].ZSL == 0.05) {
						COL0104BZ = "Y";// 保存时用于校验小薇免税额
					} else if (zspmList[i].ZSL && zspmList[i].ZSL == 0.03) {
						COL0102BZ = "Y";// 保存时用于校验小薇免税额
					}
				}
			}
		}

		if (COL0102BZ == "N") {
			DCellWeb1.SetCellInput(4, 7, 0, 5);
			DCellWeb1.SetCellInput(4, 8, 0, 5);
			DCellWeb1.SetCellInput(4, 10, 0, 5);
			DCellWeb1.SetCellInput(4, 13, 0, 5);
		}
		if (COL0104BZ == "N") {
			DCellWeb1.SetCellInput(4, 15, 0, 5);
			DCellWeb1.SetCellInput(4, 16, 0, 5);
			DCellWeb1.SetCellInput(4, 18, 0, 5);
			DCellWeb1.SetCellInput(4, 21, 0, 5);
		}

	},

	checkData : function() {
		var h1 = DCellWeb1.getValByLabel('D6');
		var h2 = DCellWeb1.getValByLabel('D7');
		var h3 = DCellWeb1.getValByLabel('D8');
		var h5 = DCellWeb1.getValByLabel('D10');

		if (h3 > Number(h1) + Number(h2)) {
			alert("不满足3≤1+2之和,请重新输入");
			return false;
		}
		if (h3 > h5) {
			alert("不满足3≤5，请重新输入");
			return false;
		}
//20160706 郭培源确认误差 改为1元
		var h7 = DCellWeb1.getValByLabel('D12');
		var h8 = DCellWeb1.getValByLabel('D13');
		if (Math.abs(h8 - curSeg.roundTFix(h7 / 1.03)) > 1) {
			alert("第八栏不含税销售额应等于第七栏含税销售额/1.03！");
			return false;
		}

		var h9 = DCellWeb1.getValByLabel('D14');
		var h10 = DCellWeb1.getValByLabel('D15');
		var h11 = DCellWeb1.getValByLabel('D16');
		var h13 = DCellWeb1.getValByLabel('D18');
		if (h11 > Number(h9) + Number(h10)) {
			alert("不满足11≤9+10之和,请重新输入");
			return false;
		}
		if (h11 > h13) {
			alert("不满足11≤13，请重新输入");
			return false;
		}

		var h15 = DCellWeb1.getValByLabel('D20');
		var h16 = DCellWeb1.getValByLabel('D21');
		if (Math.abs(h16 - curSeg.roundTFix(h15 / 1.05)) > 1) {
			alert("第八栏不含税销售额应等于第七栏含税销售额/1.05！");
			return false;
		}

		return true;
	},
        //导入
        openPopWin:function(){

            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=fb1&&startRow=8&&sheetIndex=1&templatePath=printModel/zzs/xgm/sb_zzs_xgmnsr_czzs_2016_all.zip',
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
	 * 需要的时候可以覆盖该方法 在ajax调用中，在得到数据时调用该方法
	 */
	pageFlowControl : function(jsonObj, xhrArgs) {
		var SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
		switch (parseInt(jsonObj.code)) {
		// 查询操作返回标志
		case 0:
			curSeg.initData(jsonObj);
			cell.calculateAllJs();
			DCellWeb1.ProtectFormula = false;
			break;
		// 添加、更新以及状态更新操作返回标志
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
			cell.calculateAllJs();
			break;
		// 准备添加的记录已经存在
		case 3:
			break;
		// 在线帮助
		case 6:
			break;
		case -1:// 保存出错返回标志
		case -2:// 其它错误返回标志
			var reason = jsonObj.msg;
			if (reason.indexOf("异常原因：") > -1) {
				reason = reason.substring(reason.indexOf("异常原因："));
				var sssq = DCellWeb1.getValByName('SSSQ');
				sssq += hlwsbTools.setSSsq(SSSQ_Q, SSSQ_Z);
				DCellWeb1.setValByName('SSSQ', sssq);
				jQuery(".toolBar input[type='button']")
						.attr('disabled', 'true');
			}
			DCellWeb1.setValByLabel("A2", reason);
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