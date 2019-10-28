
//使用窗口组件加载时注释下面的代码
$(document).ready(function() {
    czzs.onLoad();
});
/**
 *
 *
 */
var czzs = (function() {
    //私有属性
    var curSeg; // 保存czzs对象的
    var SBBXH = '';
    var SBBZL_DM = '101012009';
    var SSSQ_Q='';
    var SSSQ_Z='';
    var SBBZT="";
    var NSRLX_DM = "";
    var jmdata = [];
    var mzdata = [];
    //是否是添加
    var bAdd = true;
    //私有方法
    var data1;
    //公有方法
	var gz="";
    var DJXH ='';
    var BQMSETS;//本期免税额提示框标志 "Y"弹 "N"不弹
    return {
       
        onLoad:function() {
            curSeg = czzs;
            //引用报表控制
            dcell(DCellWeb1, "/hlwsb/printModel/zzs/xgm/sb_zzs_xgmnsr_czzs_jmsmxb_2016.cll");
            curSeg.onQuery();
            //删除组件释放内存
            baseTools.xhrAjax({
				url : "/hlwsb/dm/getDM_ZZS_JMSZC.do?isPrint=N&JMZLB=0",
				params : {
					SBBZL_DM : SBBZL_DM,
					SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z,NSRLX_DM : NSRLX_DM
				},
				callback : [ function(jsonObj, xhrArgs) {
					jzdata = jsonObj.data.BODY;					
				} ]
			});
            
            baseTools.xhrAjax({
				url : "/hlwsb/dm/getDM_ZZS_JMSZC.do?isPrint=N&JMZLB=1",
				params : {
					SBBZL_DM : SBBZL_DM,
					SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z,NSRLX_DM : NSRLX_DM
				},
				callback : [ function(jsonObj, xhrArgs) {
					mzdata = jsonObj.data.BODY;					
				} ]
			});
			
			DCellWeb1.MouseLClick = function(col, row) {
				var row1 = DCellWeb1.GetCellVar_J("END1").row;
				var row2 = DCellWeb1.GetCellVar_J("HJ2").row;
				var row3 = DCellWeb1.GetCellVar_J("END2").row;
				if(2 == col && ((row >8 && row < row1) || (row>row2 && row <row3) )) {
					var value = DCellWeb1.GetDroplistCellKey(col, row, 0);
					var offset = $("#DCellWeb1").offset();
					var inputNode = $("#select").find(":input");
					var c1 = DCellWeb1.GetColWidth(1,col,0);
					var c2 = DCellWeb1.GetColWidth(1,3,0);
					var c = c1+c2;
					var r = DCellWeb1.GetRowHeight(1,row,0);
					var left,t;
					inputNode.css({width:c,height:r});
					left = getWidth(col,n_col);
					t = getHeight(row,n_row) + offset.top;
					$("#select").get(0).style.left = left;
					$("#select").get(0).style.top = t;
					$("#JM_ID").combobox({
	               	    prompt:'输入关键字后自动搜索',
	               	    data:row>row2 ? mzdata : jzdata,
	                 	valueField:"XLH",
	                 	textField:"JMXZ_MC",
						multiple:false,
	               	    onLoadSuccess:function(){
		               		$(".combo-p").bgiframe({
		               			width: c,
		               			height : 250
		               		});
		               		$("#select").bgiframe({
		               			width: c,
		               			height : r
		               		});
		               		
		               		$("#JM_ID").combobox('setValue', value);
	               	    },
	                   filter:function(q,row){
                  		 var opts=$(this).combobox("options");
                  		 return row[opts.textField].indexOf(q)>=0;
                  	   },
	               	    onSelect : function(recode) {	               	    	
				var JMXZ_DM=recode.JMXZ_DM;
	               	    	DCellWeb1.SetDroplistCellKey(col, row, 0, recode.XLH);	               	    	
	               	    	//DCellWeb1.setValue(col,row,0, recode.XH + '_' + recode.JMXZ_MC);
	               	    	$("#select").bgiframe({
		               			width: 0,
		               			height : 0
		               		});
                            if (col == 2 && ((row > 8 && row < row1) || (row > row2 && row < row3) )) {
                                //20190618彩影让添加提示
                                if(col == 2 && (row > row2 && row < row3)){
                                    if (JMXZ_DM=="0001041504"){
                                        alert("此代码适用的情形是：《财政部 税务总局关于金融机构小微企业贷款利息收入免征增值税政策的通知》（财税〔2018〕91号）规定的金融机构向小微企业、个体工商户发放1000万元以下贷款免征增值税");
                                    }
                                    if (JMXZ_DM=="0001041502"){
                                        alert("此代码适用的情形是：《财政部 税务总局关于支持小微企业融资有关税收政策的通知》（财税〔2017〕77号）规定的金融机构向农户发放100万元以下贷款免征增值税");
                                    }
                                    if (JMXZ_DM=="0001041505"){
                                        alert("此代码适用的情形是：《财政部 税务总局关于支持小微企业融资有关税收政策的通知》（财税〔2017〕77号）规定的金融机构向小微企业、个体工商户发放100万元以下贷款免征增值税");
                                    }
                                }
							//20190328 chenbojun获取“重点群体人员”是否采集
                            	if (JMXZ_DM=="0001013612"||JMXZ_DM=="0001013613"){
                                    baseTools.xhrAjax({
                                        url: '/hlwsb/dm/getJMXZDM_ZDQT.do',
                                        params: {DJXH: DJXH},
                                        callback: [function (jsonObj) {
                                           // alert(JSON.stringify(jsonObj.data.zdqtCount))
                                            if (jsonObj.data.zdqtCount <= 0) {
                                                if(confirm('没有采集企业重点群体人员信息，不能享受这个减免性质，点击“确定”按钮进行采集。')){
                                                    if(parent.openNewTab){//平台登陆，调用平台方法
                                                        parent.openNewTab("4","企业重点群体人员采集", "/hlwsb/zzs/ybnsr/sb_zzs_ybnsr_zdqtrycj.html","79116");
                                                    }else{//网报端登陆，调用网报密码
                                                        parent.navTab.openTab("101011056", "zzs/ybnsr/sb_zzs_ybnsr_zdqtrycj.html", {title:"企业重点群体人员采集",external:true});
                                                    }
                                                }
                                                //alert('您本年度未采集"企业重点群体人员信息"，不能享受对应减免优惠，请到税务机关进行采集');
                                                DCellWeb1.SetDroplistCellKey(col, row, 0, ' ');
                                                DCellWeb1.SetCellString(col, row, 0, ' ');
                                            } /*else {
                                            	alert("已采集");
                                            }*/
                                        }]
                                    });
								}
								else if (JMXZ_DM=="0001011814"){
								//20190328 chenbojun获取“自主就业退役士兵”是否采集
                                    baseTools.xhrAjax({
                                        url: '/hlwsb/dm/getJMXZDM_TYSB.do',
                                        params: {DJXH: DJXH},
                                        callback: [function (jsonObj) {
                                           // alert(JSON.stringify(jsonObj.data.tysbCount))
                                            if (jsonObj.data.tysbCount <= 0) {
                                                if(confirm('没有采集企业退役士兵信息，不能享受这个减免性质，点击“确定”按钮进行采集。')){
                                                    if(parent.openNewTab){//平台登陆，调用平台方法
                                                        parent.openNewTab("4","企业退役士兵采集", "/hlwsb/zzs/ybnsr/sb_zzs_ybnsr_qytysbcj.html","79117");
                                                    }else{//网报端登陆，调用网报密码
                                                        parent.navTab.openTab("101011057", "zzs/ybnsr/sb_zzs_ybnsr_qytysbcj.html", {title:"企业退役士兵采集",external:true});
                                                    }
                                                }
                                                //alert('您本年度未采集"企业退役士兵信息"，不能享受对应减免优惠，请到税务机关进行采集');
                                                DCellWeb1.SetDroplistCellKey(col, row, 0, ' ');
                                                DCellWeb1.SetCellString(col, row, 0, ' ');
                                            }/* else {
                                                alert("已采集");
                                            }*/
                                        }]
                                    });
								}

                            }

	               	    },
	               	    onUnselect : function() {
	               	    	alert('un');
	               	    },
	               	    onShowPanel : function() {
	               	    	$(".combo-p").bgiframe({
		               			width: c,
		               			height : 250
		               		});
	               	    },
	               	    onHidePanel : function() {
	               	    	$(".combo-p").bgiframe({
		               			width: c,
		               			height : 0
		               		});
	               	    }
	                });	
				}						
			}			
            $(window).unload(function () {
            });
        } ,
        onPrint:function() {
            var str = hlwsbTools.urlStr({
         				SBBZL_DM : SBBZL_DM,
         				SSSQ_Q : SSSQ_Q,
         				SSSQ_Z : SSSQ_Z,
         				NSRLX_DM : NSRLX_DM
         			});
            	window.location = hlwsbTools.cnf.clientURL+ "/hlwsb/zzs_print/xgm/sb_zzs_xgmnsr_czzs_jmsmxb_2016.html?"+str;
            	},
        //查询数据
        onQuery:function() {
            // SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");    //获取页面申报表种类代码标记
            SSSQ_Q= baseTools.getUrlQueryString("SSSQ_Q");
            SSSQ_Z= baseTools.getUrlQueryString("SSSQ_Z");
            NSRLX_DM =  baseTools.getUrlQueryString("NSRLX_DM");
            gz=baseTools.getUrlQueryString("gz");
            var url = "/hlwsb/zzs/xgm/getSB_ZZS_XGMNSR_CZZS_JMSMXB.do";
            baseTools.xhrAjax({
                url:url,
                params:{SBBZL_DM:SBBZL_DM,SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z},
                callback:[curSeg.pageFlowControl]
            });
        },
        hideSelect : function() {
	   		$("#select").bgiframe({
       			width: 0,
       			height : 0
       		});
	   	},
        //保存数据
        onSave:function() {
        	 if(gz!="Y"){
                 if(SBBZT=="2" ||SBBZT=="3"){
                     alert("数据已申报，不允许添加");
                     return null;
                 }
			 }

             var map1 = DCellWeb1.cellRowToJson({//lm：1，指得是减税项目
                 cols: ["XZDM","COL1","COL2","COL3","COL4","COL5","LM"],
                 returnType: "object",
                 cellRows: [
                     {start: "HJ", end: "END1"}
                 ]
             });
             
             if(map1.BODY.length>0){
            	 for(var i = 0; i < map1.BODY.length; i++){
            		 
            		 var xzdm = map1.BODY[i].XZDM;
            		 if(xzdm == ""){
            			 alert("减税项目第"+(i+1)+"行中“减免性质代码和名称”不能为空");
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
            		 if(col03<col04){
            			 alert("减税项目第"+(i+1)+"行中“本期实际抵减税额”不能大于“本期应抵减税额”");
            			 return false;
            		 }
            		 if(col04<0){
            			 alert("减税项目第"+(i+1)+"行中“本期实际抵减税额”不能小于0");
            			 return false;
            		 }
            	 }
             }
             
             
             
             
             var map2 = DCellWeb1.cellRowToJson({//lm：2，指得是免税项目
            	 cols: ["XZDM","COL1","COL2","COL3","COL4","COL5","LM"],
                 returnType: "object",
                 cellRows: [
                     {start: "HJ2", end: "END2"}
                 ]
             });
             
             if (map2.BODY.length > 0) {
                 if (!confirm('请确认“免税额”填写是否正确')) {
                     return false;
                 }
                 for (var i = 0; i < map2.BODY.length; i++) {
                     var xzdm = map2.BODY[i].XZDM;
                     if (xzdm == "") {
                         alert("免税项目第" + (i + 1) + "行中“免税性质代码和名称”不能为空");
                         return false;
                     }
                     for (var j = 0; j < i; j++) {
                         var xzdm1 = map2.BODY[j].XZDM;
                         if (xzdm1 == xzdm) {
                             alert("免税性质代码及名称不能重复，请重新选择!");
                             return false;
                         }
                     }


                     var msxse = map2.BODY[i].COL3;
                     var jxse = map2.BODY[i].COL4;
                     if (jxse < 0) {
                         alert("免税项目第" + (i + 1) + "行中“免税销售额对应的进项税额”不能小于0");
                         return false;
                     }
                     /****
                      * 第3列小于0时。不校验该关系。允许第4列填0或者负数
                      * feng 20150512 lijunbo
                      */
                     if (msxse > 0) {
                         if (jxse > msxse) {
                             alert("免税项目第" + (i + 1) + "行中“免税销售额对应的进项税额”不能大于“扣除后免税销售额”");
                             return false;
                         }
                     } else {
                         if (jxse != 0 && jxse > msxse) {
                             alert("免税项目第" + (i + 1) + "行中“免税销售额对应的进项税额”不能大于“扣除后免税销售额”");
                             return false;
                         }
                     }

                     var mse1 = map2.BODY[i].COL5;
                     if (mse1 < 0) {
                         alert("免税项目第" + (i + 1) + "行中“免税额”不能小于0");
                         return false;
                     }
                     //2019-09-20 188版本添加校验 不符合第3列“扣除后免税销售额” ×3% ≤第5列“免税额”≤第3列“扣除后免税销售额”×5%时，向纳税人显示提示语（具体如下），
                     // 并设置“确认”按钮。当纳税人点击“确认”按钮后，本期申报不再提示该提示语。
                     var col01 = map2.BODY[i].COL1;
                     if (BQMSETS == "Y" && ((col01 > 0 && mse1 == 0) || !(msxse * 0.03 <= mse1 && mse1 <= msxse * 0.05))) {
                         if (confirm("本期免税额栏次请按照以下公式：第5列“免税额”＝第3列“扣除后免税销售额”×征收率填写")) {
                             var url = "/hlwsb/zzs/xgm/insertSB_TSYWMD_XGM_JMMXB.do";
                             baseTools.xhrAjax({
                                 url: url,
                                 params: {SBBZL_DM: SBBZL_DM},
                                 callback: []
                             });
                         }
                     }
                 }
             }
             
             
			 map1.BODY = map1.BODY.concat(map2.BODY);
            if(gz=='Y'){
                if (!confirm('保存后会将原数据覆盖，确定要保存吗？')) {
                    return;
                }
            }
            var url = "/hlwsb/zzs/xgm/insertSB_ZZS_XGMNSR_CZZS_JMSMXB.do";
//            : "/hlwsb/zzs/xgm/updateSB_ZZS_XGMNSR_CZZS_JMSMXB.do";
            baseTools.xhrAjax({
                url:url,
                params:{DATA:JSON.stringify(map1), SBBXH:SBBXH,SBBZL_DM:SBBZL_DM,SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z,NSRLX_DM : NSRLX_DM,bodyCheck:'noCheck',GZ:gz},
                callback:[curSeg.pageFlowControl]
            });
        },
        // 添加暂存
        onCacheSave: function () {
            if(gz!="Y"){
                if(SBBZT=="2" ||SBBZT=="3"){
                    alert("数据已申报，不允许添加");
                    return null;
                }
            }

            var map1 = DCellWeb1.cellRowToJson({//lm：1，指得是减税项目
                cols: ["XZDM","COL1","COL2","COL3","COL4","COL5","LM"],
                returnType: "object",
                cellRows: [
                    {start: "HJ", end: "END1"}
                ]
            });

            if(map1.BODY.length>0){
                for(var i = 0; i < map1.BODY.length; i++){

                    var xzdm = map1.BODY[i].XZDM;
                    if(xzdm == ""){
                        alert("减税项目第"+(i+1)+"行中“减免性质代码和名称”不能为空");
                        return false;
                    }
                    for (var j = 0 ;j<i;j++){
                        var xzdm1 = map1.BODY[j].XZDM;
                        if (xzdm1 == xzdm ) {
                            alert("减税性质代码及名称不能重复，请重新选择!");
                            return false;
                        }
                    }

                }
            }




            var map2 = DCellWeb1.cellRowToJson({//lm：2，指得是免税项目
                cols: ["XZDM","COL1","COL2","COL3","COL4","COL5","LM"],
                returnType: "object",
                cellRows: [
                    {start: "HJ2", end: "END2"}
                ]
            });

            if (map2.BODY.length > 0) {
                if(!confirm('请确认“免税额”填写是否正确')){
                    return false;
                }
                for (var i = 0; i < map2.BODY.length; i++) {
                    var xzdm = map2.BODY[i].XZDM;
                    if(xzdm == ""){
                        alert("免税项目第"+(i+1)+"行中“免税性质代码和名称”不能为空");
                        return false;
                    }

                    for (var j = 0 ;j<i;j++){
                        var xzdm1 = map2.BODY[j].XZDM;
                        if (xzdm1 == xzdm ) {
                            alert("免税性质代码及名称不能重复，请重新选择!");
                            return false;
                        }
                    }

                }
            }


            map1.BODY = map1.BODY.concat(map2.BODY);
            if(gz=='Y'){
                if (!confirm('暂存后会将原数据覆盖，确定要保存吗？')) {
                    return;
                }
            }
            var url = "/hlwsb/zzs/xgm/insertSB_ZZS_XGMNSR_CZZS_JMSMXB.do";
            baseTools.xhrAjax({
                url:url,
                params:{DATA:JSON.stringify(map1), SBBXH:SBBXH,SBBZL_DM:SBBZL_DM,SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z,NSRLX_DM : NSRLX_DM,bodyCheck:'noCheck',GZ:gz,temSBBZT: 5},
                callback:[curSeg.pageFlowControl]
            });
        },
        onDelete:function() {
            if(SBBZT=="2" ||SBBZT=="3"){
               alert("数据已申报，不允许删除");
               return null;
            }
            if(confirm("确定删除此报表？")) {
	        	var url = "/hlwsb/zzs/xgm/delSB_ZZS_XGMNSR_CZZS_JMSMXB.do";
	            baseTools.xhrAjax({
	                url:url,
	                params:{ SBBXH:SBBXH,SBBZL_DM:SBBZL_DM,SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z,NSRLX_DM:NSRLX_DM},
	                callback:[curSeg.pageFlowControl]
	            });
            }
            
        },
        
        initData:function(jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
            DJXH = jsonObj.data.DJXH;
//        	alert(JSON.stringify(jsonObj.data.BODY));
       	 DCellWeb1.initSelectCell({
             col: "HJ",
             action: "/hlwsb/dm/getDM_ZZS_JMSZC.do?isPrint=N&JMZLB=0",
             value: "XLH",
             text: "JMXZ_MC"

         });
       	 
       	DCellWeb1.initSelectCell({
            col: "HJ2",
            action: "/hlwsb/dm/getDM_ZZS_JMSZC.do?isPrint=N&JMZLB=1",
            value: "XLH",
            text: "JMXZ_MC"

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
        		 if(body[i].LM == '1'){
        			 map1.BODY.push(body[i]);
        		 }else if(body[i].LM == '2'){
        			 map2.BODY.push(body[i]);
        		 }
//        		 else if(body[i].LM == '3'){
//        			 var ckms = body[i].COL1
//        			 DCellWeb1.setValByName("CKMS",ckms);
//        		 }
        		 
             }
        	 
        	 
			DCellWeb1.initRowToCell({
        		cols:["XZDM","COL1","COL2","COL3","COL4","COL5","HC"],
        		 cellRows: [
        	                   {start: "ADD1", end: "END1",
        	                    hc:"HC",xl:"XH2",
        	       	    	 addButton : {name:"ADD1"},
        	       	    	 delButton :  {name:"DEL1",
        	       	    		checkbox : "CZ1",
        	       	    		url:"/hlwsb/zzs/xgm/delSB_ZZS_XGMNSR_CZZS_JMSMXB.do",
        	     	    		    params:{SBBXH:SBBXH,SBBZL_DM:SBBZL_DM,SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z,NSRLX_DM:NSRLX_DM,LM:'1'}
        	                   }
        	                   }
        	               ],
        	               nsrxxCols: ["NSRMC", "NSRSBH", "SSSQ"],
        	               data:map1
        	});
			
			DCellWeb1.initRowToCell({
        		cols:["XZDM","COL1","COL2","COL3","COL4","COL5","HC"],
        		 cellRows: [
        	                   {start: "HJ2", end: "END2",
        	                    hc:"HC",xl:"XH2",
        	       	    	 addButton : {name:"ADD2"},
        	       	    	 delButton :  {name:"DEL2",
        	       	    		checkbox : "CZ2",
        	       	    		url:"/hlwsb/zzs/xgm/delSB_ZZS_XGMNSR_CZZS_JMSMXB.do",
        	     	    		    params:{SBBXH:SBBXH,SBBZL_DM:SBBZL_DM,SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z,NSRLX_DM:NSRLX_DM,LM:'2'}
        	                   }
        	                   }
        	               ],
        	               nsrxxCols: ["NSRMC", "NSRSBH", "SSSQ"],
        	               data:map2,
                           iszdjskxg:true
        	});
			 SBBXH = jsonObj.data.HEAD.SBBXH;
	         SBBZT = jsonObj.data.HEAD.SBBZT;
             BQMSETS = jsonObj.data.BQMSETS;
	         if (jsonObj.data.HEAD.SBBZT && jsonObj.data.HEAD.SBBZT == 1) {
	                bAdd = false;
	         }else if(!(jsonObj.data.HEAD.SBBZT)  ){
	        	   DCellWeb1.SetCellDouble(5,15,0,0.0);
	        	   DCellWeb1.SetCellDouble(6,15,0,0.0);
	        	   DCellWeb1.SetCellDouble(7,15,0,0.0);
	        	   DCellWeb1.SetCellDouble(8,15,0,0.0);
	        	   DCellWeb1.SetCellDouble(9,15,0,0.0);
	           }
	         var Tip = "温馨提醒：如您需要填写“减税项目”或“免税项目”具体明细，请点击增加按钮增加行次进行填报！\r"
		     DCellWeb1.setValByLabel("A2",Tip); 
        },
        //导入
        openPopWin:function(){

            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=czzs&&startRow=8&&sheetIndex=1&templatePath=printModel/zzs/xgm/sb_zzs_xgmnsr_czzs_2016_all.zip',
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
        pageFlowControl:function(jsonObj, xhrArgs) {
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
                    DCellWeb1.ProtectFormula = false;
                    curSeg.onLoad();
                    break;
                // 删除操作返回标志
                case 2:
                    alert("删除成功");
                    top.main.changeNodeStatus(SBBZL_DM,"0");
                    bAdd=true;
                    curSeg.initData(jsonObj);
                    DCellWeb1.ProtectFormula = false;
                    break;
                //准备添加的记录已经存在
                case 3:
                    break;
                //在线帮助
                case 6:
                    break;
                case -1://保存出错返回标志
                case -2://其它错误返回标志
                	var reason = 	jsonObj.msg;
                	if(reason.indexOf("异常原因：")>-1){
	                	reason = reason.substring(reason.indexOf("异常原因："));
	                    var sssq = DCellWeb1.getValByName('SSSQ');
	                	sssq +=  hlwsbTools.setSSsq(SSSQ_Q, SSSQ_Z);
	                	DCellWeb1.setValByName('SSSQ', sssq);
	                    jQuery(".toolBar input[type='button']").attr('disabled','true');
                    }
                	alert(reason);
                    DCellWeb1.setValByLabel("A2","系统异常："+reason);
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