//使用窗口组件加载时注释下面的代码
$(document).ready(function() {
	jm_yj_a_dynsbab.onLoad();
});
/**
 * 
 * 
 */
var jm_yj_a_dynsbab = (function() {
	// 私有属性
	var curSeg; // 保存lrb对象的
	var SBBXH = '';
	var SBBZL_DM="";
	var SSSQ_Q="";
	var SSSQ_Z="";
	var SBBZT = '';//申报状态
	var SBBZL_DM = '';//申报表种类代码
	var NSRLX_DM = '';//纳税人类型代码

   	var data1;
	// 公有方法
	return {
	//跳转到打印页面
		onPrint:function() {
			var str = hlwsbTools.urlStr({
				NSRLX_DM : NSRLX_DM,
				SBBZL_DM : SBBZL_DM,
				SSSQ_Q : SSSQ_Q,
				SSSQ_Z : SSSQ_Z
			});
	   		window.location="/hlwsb/qysds_print/qysds_yj_a/sb_qysds_jm_yj_a_dynsbab.html?"+str;
	   	},
		onLoad : function() {
			// 引用报表控制
			curSeg = jm_yj_a_dynsbab;
			dcell(DCellWeb1,"/hlwsb/printModel/qysds/qysds_yj_a/sb_qysds_jm_yj_a_dynsbab.cll");
			curSeg.onQuery();
			// 删除组件释放内存
			$(window).unload(function() {
			});
		},
        
		// 查询数据
		onQuery : function() {
			NSRLX_DM = baseTools.getUrlQueryString("NSRLX_DM");//获取页面纳税人类型代码标记
			SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");    //获取所属时期开始时间
			SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");    //获取所属时期结束时间
			SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");    //获取页面申报表种类代码标记
			 baseTools.xhrAjax({
				url : "/hlwsb/qysds/getSB_QYSDS_JM_YJ_A_DYNSBAB.do",
				params:{SBBZL_DM:SBBZL_DM,SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z,NSRLX_DM:NSRLX_DM},
				callback : [ curSeg.pageFlowControl ]
			});
		},
		// 保存数据
		onSave : function() {
			if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能保存");
                return;
            }
            var data = DCellWeb1.cellRowToJson({
				cols: ["COL01","COL02","COL03","COL04","COL05","COL06","COL07","COL08","COL09","COL10","COL11","COL12"],
                cellRows: [
                    {start: "HC", end: "HJ"}
                ],
				nsrxxCols: ["NSRSBH","NSRMC","SSSQ"],
                returnType: "object"
            });
            if(curSeg.checkData(data)){
            	return false;
            }
			var url ="/hlwsb/qysds/insertSB_QYSDS_JM_YJ_A_DYNSBAB.do";
            baseTools.xhrAjax({
                url: url,
                params: {DATA: JSON.stringify(data),SBBXH: SBBXH, SBBZL_DM: SBBZL_DM,DJXH:DJXH},
                callback: [curSeg.pageFlowControl]
            });
	
		},
        // 添加暂存
        onCacheSave: function () {
            curSeg.onSave();
        },
		checkData:function(data){
			for(var i = 0;i<data.BODY.length;i++){
				var body = data.BODY[i];
//				alert(body.COL01);
				if(!body.COL01 || hlwsbTools.trim(body.COL01)==''){
					alert("第"+(i+1)+"行第1列“技术成果名称”不能为空，请正确录入！");
					return true;
				}
				if(!body.COL02 || hlwsbTools.trim(body.COL02)==''){
					alert("第"+(i+1)+"行第2列“技术成果类型”不能为空，请正确录入！");
					return true;
				}
				if(!body.COL03 || hlwsbTools.trim(body.COL03)==''){
					alert("第"+(i+1)+"行第3列“技术成果编号”不能为空，请正确录入！");
					return true;
				}
//				if(!body.COL04 || body.COL04=='' ){
//					alert("第"+(i+1)+"行第4列“公允价值”不能为空，请正确录入！");
//					return true;
//				}
//				if(!body.COL05 || body.COL05==''){
//					alert("第"+(i+1)+"行第5列“计税基础”不能为空，请正确录入！");
//					return true;
//				}
				if(!body.COL06 || hlwsbTools.trim(body.COL06)==''){
					alert("第"+(i+1)+"行第6列“取得股权时间”不能为空，请正确录入！");
					return true;
				}
//				if(!body.COL07 || body.COL07==''){
//					alert("第"+(i+1)+"行第7列“递延所得”不能为空，请正确录入！");
//					return true;
//				}
				if(!body.COL08 || hlwsbTools.trim(body.COL08)==''){
					alert("第"+(i+1)+"行第8列“企业名称”不能为空，请正确录入！");
					return true;
				}
                if (body.COL08.length > 50) {
                    alert("第"+(i+1)+"行第8列“企业名称”最大长度50");
                    return true;
                }
				if(!body.COL09 || hlwsbTools.trim(body.COL09)==''){
					alert("第"+(i+1)+"行第9列“纳税人识别号”不能为空，请正确录入！");
					return true;
				}
				
				 if (!curSeg.checkNsrsbh(body.COL09)) {
	                 alert("第"+(i+1)+"行第9列“纳税人识别号”填写有误，请正确填写！");
	                 return true;
	             }
				
				if(!body.COL10 || hlwsbTools.trim(body.COL10)==''){
					alert("第"+(i+1)+"行第10列“主管税务机关”不能为空，请正确录入！");
					return true;
				}
               
				if(!body.COL11 || body.COL11==''){
					alert("第"+(i+1)+"行第11列“与投资方是否为关联业务”不能为空，请正确录入！");
					return true;
				}

			}
			return false;
		},

        /*检查纳税人识别号的合法性*/
        checkNsrsbh: function (obj) {
            var reg = /^(([A-Za-z0-9]{15})|([A-Za-z0-9]{18})|([A-Za-z0-9]{20}))$/;
            if (obj.search(reg) == -1) {
//                alert("你输入的税号：" + obj + "有误。" + "请输入正确的纳税人识别号格式，匹配长度为15、18或者20,由字母或者数字");
                return  false;
            }
            return true;
        },
		
		onDelete:function(){
			if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能保存");
                return;
            }
			if(confirm("确定删除此报表？")){
				var url = "/hlwsb/qysds/delSB_QYSDS_JM_YJ_A_DYNSBAB.do";
				baseTools.xhrAjax({
					url : url,
	                params:{ SBBXH:SBBXH,SBBZL_DM:SBBZL_DM,NSRLX_DM:NSRLX_DM,SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z},
					callback : [ curSeg.pageFlowControl ]
				});          
			}
		},
		initData : function(jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
			SBBXH = jsonObj.data.HEAD.SBBXH;
			DJXH = jsonObj.data.HEAD.DJXH;
			// 页面控制参数
			/**
			 * 1|专利技术
			 * 2|计算机著作权
			 * 3|集成电路布图设计权
			 * 4|植物新品种（权）
			 * 5|生物医药新品种
			 * Z|其他技术成果
			 */
			DCellWeb1.initSelectCell({
				col: "COL02",
				selectStr:"专利技术\t1\r\n计算机软件著作权\t2\r\n集成电路布图设计权\t3\r\n植物新品种（权）\t4\r\n生物医药新品种\t5\r\n其他技术成果\tZ\r\n"
			});
			DCellWeb1.initSelectCell({
				col: "COL11",
				selectStr:"是\t1\r\n否\t0\r\n"
			});
            DCellWeb1.initRowToCell({
				cols: ["COL01","COL02","COL03","COL04","COL05","COL06","COL07","COL08","COL09","COL10","COL11","COL12"],
				cellRows: [
					{
						start: "HC", end: "HJ",
						hc: "HC", xl: "XL",
						addButton: {name: "ADD"},
						delButton: {
							name: "DEL",
							checkbox: "CZ",
							url: "/hlwsb/qysds/delSB_QYSDS_JM_YJ_A_DYNSBAB.do",
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
				nsrxxCols:["NSRSBH","NSRMC","SSSQ"]
            });
		},
        //导入
        openPopWin:function(){
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=jm_yj_a_dynsbab&&startRow=8&&sheetIndex=1&templatePath=../../printModel/qysds/qysds_yj_a/sb_qysds_jm_yj_a_dynsbab.zip',
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
					break;
				// 添加、更新以及状态更新操作返回标志
				case 1:
					alert("保存成功");
					top.main.changeNodeStatus(SBBZL_DM,"1");
					break;
				// 删除操作返回标志
				case 2:
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
					var reason = jsonObj.msg;
					if (reason.indexOf("异常原因：") > -1) {
						reason = reason.substring(reason.indexOf("异常原因："));
						var sssq = DCellWeb1.getValByName('SSSQ');
						sssq += hlwsbTools.setSSsq(SSSQ_Q, SSSQ_Z);
						DCellWeb1.setValByName('SSSQ', sssq);
						curSeg.invalidate();
					}
					DCellWeb1.setValByLabel('A2', reason);
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