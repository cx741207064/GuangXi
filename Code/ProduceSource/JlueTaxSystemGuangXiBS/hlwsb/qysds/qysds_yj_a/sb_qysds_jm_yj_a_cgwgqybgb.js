//使用窗口组件加载时注释下面的代码
$(document).ready(function() {
	jm_yj_a_cgwgqybgb.onLoad();
});
/**
 * 
 * 
 */
var jm_yj_a_cgwgqybgb = (function() {
	// 私有属性
	var curSeg; // 保存jm_yj_a对象的
	var SBBXH = '';
	var SBBZL_DM = "";
    var SSSQ_Q="";
    var SSSQ_Z="";
    var DJXH="";
    var NSRLX_DM="";
    var TBRQ = "";
    var SBBZT="";
    
    var winObj='';
	// 私有方法
    var data1;
	// 是否是添加
	var bAdd = true;
    var gz="";

    //var savekey=false;
	var addbz=false;
	
	// 私有方法

	// 公有方法
	return {
	//跳转到打印页面
        onPrint:function() {
        	
	      var str = hlwsbTools.urlStr({
	   				SBBZL_DM : SBBZL_DM,
	   				SSSQ_Q : SSSQ_Q,
	   				SSSQ_Z : SSSQ_Z,
	   				NSRLX_DM : NSRLX_DM,
	   				LSXH:LSXH
	   				
	   			});
	   		window.location="/hlwsb/qysds_print/qysds_yj_a/sb_qysds_jm_yj_a_cgwgqybgb.html?"+str;
	   	},
		onLoad : function() {
			
			// 引用报表控制
			curSeg = jm_yj_a_cgwgqybgb;
            gz = baseTools.getUrlQueryString("gz");
            if (gz == "Y") {
                document.getElementById("save").disabled = false;//true
                document.getElementById("selectList").disabled = false;
                }
			dcell(DCellWeb1,"/hlwsb/printModel/qysds/qysds_yj_a/sb_qysds_jm_yj_a_cgwgqybgb.cll");
            if(gz != "Y"){
                if(!confirm("企业有境外投资业务的请填写此表，若无此类业务无需填写申报 。\r\n请确认是否填写此报表！")){
                	DCellWeb1.ProtectSheet(0,'111111');
                    return;
                }
			}

            //身份证件类型
            DCellWeb1.initSelectCell({
                col : "COLC2",
                action : "/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getSFZJLX",
                value : "DM",
                text : "MC"
            });
			
			DCellWeb1.initSelectCell({
                col: "COLE1",
                action: "/hlwsb/dm/getDM_QYSDS_ALL_YXBZ.do?LB=GFLX",
                value: "DM",
                text: "MC"
            });
			
			DCellWeb1.initSelectCell({
                col: "COLA3",
                action: "/hlwsb/dm/getDM_QYSDS_ALL_YXBZ.do?LB=GFLX",
                value: "DM",
                text: "MC"
            });
            DCellWeb1.initSelectCell({
                col: "COLA4",
                action: "/hlwsb/dm/getDM_QYSDS_ALL_YXBZ.do?LB=GFLX",
                value: "DM",
                text: "MC"
            });
            
            			
			
            
            
             SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
             SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");    //获取所属时期开始时间
             SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");    //获取所属时期结束时间
             NSRLX_DM =  baseTools.getUrlQueryString("NSRLX_DM");
             window.LSXH =  baseTools.getUrlQueryString("LSXH");
			// 删除组件释放内存
			curSeg.initWindow();
			$(window).unload(function() {
				
			});
		},

        /*set_savekey :function (flag) {
            savekey = flag;
            document.getElementById("save").disabled = flag;
        },*/
		initWindow:function(){
            //如果序号为空，弹出窗口，选择序号号
            /*if(!window.LSXH){
                curSeg.selectXHH();
            }*/
        	//如果保存的时候addbz是TRUE，弹出窗口，选择序号号
		    if(addbz){
            	curSeg.selectXHH();
            	addbz=false;
			}else{
			    curSeg.onQuery();
			}
		},
        initWindow1:function(lsh){
                window.LSXH =lsh;
                curSeg.onQuery();

        },


		selectXHHCallBack:function(obj){
			window.LSXH = obj.LSXH;
			curSeg.onQuery();
		},
		
		
		selectXHH:function() {
			baseTools.xhrAjax({
				url : "/hlwsb/qysds/getSB_QYSDS_JM_YJ_A_CGWGQYBGB_LIST.do",
				params : {
					SBBZL_DM : SBBZL_DM,
					SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z,NSRLX_DM : NSRLX_DM,GZ:gz
				},
				callback : [ jm_yj_a_cgwgqybgb.openSelectWin]
			});
        },
		openSelectWin:function(jsonObj, xhrArgs) {
            var windowapi = frameElement==null?window.top:frameElement.api, W = windowapi==null?window.top:windowapi.opener;var zIndex = W==null?1976:W.$.dialog.setting.zIndex+1;
			if(jsonObj.data.dataList.length!=0){
				var winParam = {
	            	id:'win' + SBBZL_DM,
	            	title:"选择列表",
	                url:'/hlwsb/qysds/qysds_yj_a/sb_qysds_jm_yj_a_cgwgqybgb_list.html',
	                other:jsonObj,
	                paretWin:window,
	                SBBZL_DM : SBBZL_DM,SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z,NSRLX_DM :NSRLX_DM,GZ:gz,
                    width: 650,
                    height: 400,
                    zIndex:zIndex,
					QYCG:curSeg
	            };
	            winObj = baseTools.showWinExt(winParam);
	            
	            $(winObj.DOM.wrap).bgiframe({
                    width: 675,
                    height: 440
                });
			}else{
			
				window.LSXH = jsonObj.data.NEWXH;
				  
			    curSeg.onQuery();
			}
        },

        clearBody : function(body) {
        	
        	var flag = true;
        	var arr = [];
        	var bodyArr = [];
        	
        	for(var i=0; i<body.length; i++) {
        		var temp = body[i];
        		
        		
        		for(var o in temp) {
        			var val = temp[o];
	        		if( val == 0 || val == "0") {
	        			val = ''
	        		}
        			if((val != '' )&& (o.indexOf('HC') == -1 )) {
        				flag = false;
        				break;
        			}
        		}
        		if(!flag) {
        			arr.push(i);
        		}
        	}
        	
        	for(var i=0; i< arr.length; i++) {
        		bodyArr.push(body[arr[i]]);
        	}
        	return bodyArr;
        },
        
        
		// 查询数据
		onQuery : function() {
             gz = baseTools.getUrlQueryString("gz");
			 baseTools.xhrAjax({
				url : "/hlwsb/qysds/getSB_QYSDS_JM_YJ_A_CGWGQYBGB.do",
				params : {
					SBBZL_DM : SBBZL_DM,LSXH:window.LSXH,
					SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z,NSRLX_DM : NSRLX_DM,GZ:gz
				},
				callback : [ curSeg.pageFlowControl ]
			});
		},
		// 保存数据
		onSave : function() {
            if (gz == "Y") {
                if (!confirm("保存后会将原数据覆盖，确定要保存吗？")) {
                    return;
                }
            }else if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能保存");
                return;
            }
			
		    
			//扩展多个body
            var map1 = DCellWeb1.cellRowToJson({
                cols: ["HC1","COLA1","COLB1", "COLC1", "COLD1", "COLE1", "COLF1", "COLG1"],
                cellRows: [
                    {start: "HC1", end: "HJ1"}
                ],
                headCols: ["NSRSBH","NSRMC","WGQYMC","WGQYMC_WW","NSRSBHSZG","CLD","CLD_WW","ZYYWLX","CGBLBGR"],
                returnType: "object"
            });
            map1.HEAD={};
            map1.HEAD["NSRSBH"]=DCellWeb1.getValByName("NSRSBH");
            map1.HEAD["NSRMC"]=DCellWeb1.getValByName("NSRMC");
            map1.HEAD["WGQYMC"]=DCellWeb1.getValByName("WGQYMC");
            map1.HEAD["WGQYMC_WW"]=DCellWeb1.getValByName("WGQYMC_WW");
            map1.HEAD["NSRSBHSZG"]=DCellWeb1.getValByName("NSRSBHSZG");
            map1.HEAD["CLD"]=DCellWeb1.getValByName("CLD");
            map1.HEAD["CLD_WW"]=DCellWeb1.getValByName("CLD_WW");
            map1.HEAD["ZYYWLX"]=DCellWeb1.getValByName("ZYYWLX");
            map1.HEAD["CGBLBGR"]=DCellWeb1.getValByName("CGBLBGR");
        
            map1.HEAD["LSXH"]=	window.LSXH ;
            
           
			
			
            var map2 = DCellWeb1.cellRowToJson({
                cols: ["HC2","COLA2","COLB2", "COLC2", "COLD2", "COLE2","COLF2", "COLG2"],
                cellRows: [
                    {start: "HC2", end: "HJ2"}
                ],
                returnType: "object"
            });
           
            
            var map3 = DCellWeb1.cellRowToJson({
                cols: ["HC3","COLA3","COLB3", "COLC3", "COLD3", "COLE3"],
                cellRows: [
                    {start: "HC3", end: "HJ3"}
                ],
                returnType: "object"
            });
            
            
            var map4 = DCellWeb1.cellRowToJson({
                cols: ["HC4","COLA4","COLB4", "COLC4", "COLD4", "COLE4"],
                cellRows: [
                    {start: "HC4", end: "HJ4"}
                ],
                returnType: "object"
            });
            
        	 var dataMap = {};
                        
            dataMap.HEAD = map1.HEAD;            
            map1.BODY = curSeg.clearBody(map1.BODY);
            map2.BODY = curSeg.clearBody(map2.BODY);
            map3.BODY = curSeg.clearBody(map3.BODY);
            map4.BODY = curSeg.clearBody(map4.BODY);
            
         
            var errorMSG = curSeg.checkBody1(map1.BODY);
            if(errorMSG!= "") {
        		alert(errorMSG);
	      		return false;
        	}
        	errorMSG = curSeg.checkBody2(map2.BODY);
        	if(errorMSG!= "") {
        		alert(errorMSG);
	      		return false;
        	}
        	
        	errorMSG = curSeg.checkBody3(map3.BODY);
        	if(errorMSG!= "") {
        		alert(errorMSG);
	      		return false;
        	}
        	
        	errorMSG = curSeg.checkBody4(map4.BODY);
        	if(errorMSG!= "") {
        		alert(errorMSG);
	      		return false;
        	}
        	
        	
        	
  
        	
            dataMap.BODY = map1.BODY.concat(map2.BODY).concat(map3.BODY).concat(map4.BODY);
          
           
            //不填写企业名称，不能保存
            if(!dataMap.HEAD.WGQYMC)
            {
                alert("请填写外国企业名称！")
                return;
            }
            
            if(parseFloat(dataMap.HEAD.CGBLBGR)<0||parseFloat(dataMap.HEAD.CGBLBGR)>1) {
  				alert("报告人持股比例为空或超出范围{0-1}。");
				return;
        	}
        	
        	
        	if(!dataMap.HEAD.CLD)
            {
                alert("请填写外国企业成立地！")
                return;
            }
            
            if(!dataMap.HEAD.NSRSBHSZG||dataMap.HEAD.NSRSBHSZG.length<1 )
            {
                alert("请填写所在国纳税人识别号！")
                return;
            }
            
    
            if(!dataMap.HEAD.ZYYWLX||dataMap.HEAD.ZYYWLX.length<1 )
            {
                alert("请填写主营业务类型！")
                return;
            }
            
         
        			
           
           
           
           
            
            var url = "/hlwsb/qysds/insertSB_QYSDS_JM_YJ_A_CGWGQYBGB.do";
            document.getElementById("save").disabled = false;//true
	        document.getElementById("delete").disabled = false;//true
	         document.getElementById("print").disabled = false;//true
	         document.getElementById("cache").disabled = false;//true
            baseTools.xhrAjax({
                url: url,
                params: {DATA: JSON.stringify(dataMap),SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,NSRLX_DM:NSRLX_DM,DJXH:DJXH,GZ:gz},
                callback: [curSeg.pageFlowControl]
            });
            
	
		},
        // 添加暂存
        onCacheSave: function () {
            curSeg.onSave();
        },
		
		 checkBody1:function(jsons){
        	//错误序列
        	var errorIndex = 0;
        	//错误信息
        	var errorMsg = '';
        	var cgbl=0;
        	var tempobj;
        	var newobj;
        	if(jsons && jsons.length > 0){
        	
        		for(var index = 0; index < jsons.length; index++){
        			tempobj = jsons[index];
        			
        			if(tempobj.COLA1.trim()=="") {
        				errorMsg = "[持有外国企业10%以上股份或有表决权股份的其他股东情况栏]\r\n第["+(index+1)+"]行-持股股东名称不能为空。";
    					return errorMsg;
    					break;
        			}
        			
        			if(tempobj.COLE1.trim()==""||tempobj.COLE1=="0") {
        				errorMsg = "[持有外国企业10%以上股份或有表决权股份的其他股东情况栏]\r\n第["+(index+1)+"]行-持股类型不能为空。";
    					return errorMsg;
    					break;
        			}
        			if(parseFloat(tempobj.COLF1)<0||parseFloat(tempobj.COLF1)>1) {
        				errorMsg = "[持有外国企业10%以上股份或有表决权股份的其他股东情况栏]\r\n第["+(index+1)+"]行-持股比例为空或超出范围{0-1}。";
    					return errorMsg;
    					break;
        			}
        			jsons[index]=null;
        			jsons[index] = {};
        			jsons[index].HC= tempobj.HC;
        			jsons[index].COLA = tempobj.COLA1;
        			jsons[index].COLB = tempobj.COLB1;
        			jsons[index].COLC = tempobj.COLC1;
        			jsons[index].COLD = tempobj.COLD1;
        			jsons[index].COLE = tempobj.COLE1;
                    jsons[index].COLF = tempobj.COLF1;
                    jsons[index].COLG = tempobj.COLG1;
        			jsons[index].LM='1';
        		}
        		
        	}
        	return errorMsg;
        },
        
        
         checkBody2:function(jsons){
        	//错误序列
        	var errorIndex = 0;
        	//错误信息
        	var errorMsg = '';
        	var cgbl=0;
        	var tempobj;
        	if(jsons && jsons.length > 0){
        		for(var index = 0; index < jsons.length; index++){
        			tempobj = jsons[index];
        			if(tempobj.COLA2.trim()=="") {
        				errorMsg = "[中国居民个人担任外国企业高管或董事情况 ]\r\n第["+(index+1)+"]行-中国居民个人姓名不能为空。";
    					return errorMsg;
    					break;
        			}
        			
        			if(tempobj.COLD2.trim()=="") {
        				errorMsg = "[中国居民个人担任外国企业高管或董事情况 ]\r\n第["+(index+1)+"]行-身份证件号码不能为空。";
    					return errorMsg;
    					break;
        			}
        			if(tempobj.COLD2.trim()!=""&&tempobj.COLD2.length>20) {
        				errorMsg = "[中国居民个人担任外国企业高管或董事情况 ]\r\n第["+(index+1)+"]行-身份证件号码不能多于20位。";
    					return errorMsg;
    					break;
        			}
        			
        			if(tempobj.COLF2 != "") {
        				if(!hlwsbTools.checkDateForm(tempobj.COLF2)) {
        					errorMsg = "[中国居民个人担任外国企业高管或董事情况 ]\r\n第["+(index+1)+"]行-任职起日期格式不正确。";
        					return errorMsg;
        					break;
        				}
        			}else {
        				errorMsg = "[中国居民个人担任外国企业高管或董事情况 ]\r\n第["+(index+1)+"]行-任职起日期不能为空。";
    					return errorMsg;
    					break;
        			}
        			

        			
        			jsons[index]=null;
        			jsons[index] = {};
        			jsons[index].HC= tempobj.HC;
        			jsons[index].COLA = tempobj.COLA2;
        			jsons[index].COLB = tempobj.COLB2;
        			jsons[index].COLC = tempobj.COLC2;
        			jsons[index].COLD = tempobj.COLD2;
        			jsons[index].COLF = tempobj.COLF2+'~'+tempobj.COLG2;
                    jsons[index].COLE = tempobj.COLE2;
        			jsons[index].LM='2';
        			
        		}
        		
        	}
        	return errorMsg;
        },
		
		 checkBody3:function(jsons){
        	//错误序列
        	var errorIndex = 0;
        	//错误信息
        	var errorMsg = '';
        	var cgbl=0;
        	var tempobj;
        	if(jsons && jsons.length > 0){
        		for(var index = 0; index < jsons.length; index++){
        			tempobj = jsons[index];
        			if(tempobj.COLA3.trim()==""||tempobj.COLA3=="0") {
        				errorMsg = "[报告人收购外国企业股份情况]\r\n第["+(index+1)+"]行-被收购股份类型不能为空。";
    					return errorMsg;
    				
        			}
        			if(tempobj.COLB3 != "") {
        				if(!hlwsbTools.checkDateForm(tempobj.COLB3)) {
        					errorMsg = "[报告人收购外国企业股份情况]\r\n第["+(index+1)+"]行-交易日期格式不正确。";
        					return errorMsg;
    
        				}
        			}else {
        				errorMsg = "[报告人收购外国企业股份情况]\r\n第["+(index+1)+"]行-交易日期不能为空。";
    					return errorMsg;
    
        			}
        			if(parseFloat(tempobj.COLD3)<0||parseFloat(tempobj.COLD3)>1) {
        				errorMsg = "[报告人收购外国企业股份情况]\r\n第["+(index+1)+"]行-收购前报告人在外国企业持股份额为空或超出范围{0-1}。";
    					return errorMsg;
    				
        			}
        			if(parseFloat(tempobj.COLE3)<0||parseFloat(tempobj.COLE3)>1) {
        				errorMsg = "[报告人收购外国企业股份情况]\r\n第["+(index+1)+"]行-收购后报告人在外国企业持股份额为空或超出范围{0-1}。";
    					return errorMsg;
    		
        			}
        			jsons[index]=null;
        			jsons[index] = {};
        			jsons[index].HC= tempobj.HC;
        			jsons[index].COLA = tempobj.COLA3;
        			jsons[index].COLB = tempobj.COLB3;
        			jsons[index].COLC = tempobj.COLC3;
        			jsons[index].COLD = tempobj.COLD3;
        			jsons[index].COLE = tempobj.COLE3;
        			jsons[index].LM='3';
        		}
        		
        	}
        	return errorMsg;
        },
        checkBody4:function(jsons){
         
        	//错误序列
        	var errorIndex = 0;
        	//错误信息
        	var errorMsg = '';
        	var cgbl=0;
        	var tempobj;
        	if(jsons && jsons.length > 0){
        		for(var index = 0; index < jsons.length; index++){
        			tempobj = jsons[index];
        			if(tempobj.COLA4.trim()==""||tempobj.COLA4=="0") {
        				errorMsg = "[报告人处置外国企业股份情况]\r\n第["+(index+1)+"]行-被处置股份类型不能为空。";
    					return errorMsg;
    					break;
        			}
        			if(tempobj.COLB4 != "") {
        				if(!hlwsbTools.checkDateForm(tempobj.COLB4)) {
        					errorMsg = "[报告人处置外国企业股份情况]\r\n第["+(index+1)+"]行-处置日期格式不正确。";
        					return errorMsg;
        					break;
        				}
        			}else {
        				errorMsg = "[报告人收购外国企业股份情况]\r\n第["+(index+1)+"]行-处置日期不能为空。";
    					return errorMsg;
    					break;
        			}
        			if(parseFloat(tempobj.COLD4)<0||parseFloat(tempobj.COLD4)>1) {
        				errorMsg = "[报告人收购外国企业股份情况]\r\n第["+(index+1)+"]行-处置前报告人在外国企业持股份额为空或超出范围{0-1}。";
    					return errorMsg;
    					break;
        			}
        			if(parseFloat(tempobj.COLE4)<0||parseFloat(tempobj.COLE4)>1) {
        				errorMsg = "[报告人处置外国企业股份情况]\r\n第["+(index+1)+"]行-处置后报告人在外国企业持股份额为空或超出范围{0-1}。";
    					return errorMsg;
    					break;
        			}
        			jsons[index]=null;
        			jsons[index] = {};
        			jsons[index].HC= tempobj.HC;
        			jsons[index].COLA = tempobj.COLA4;
        			jsons[index].COLB = tempobj.COLB4;
        			jsons[index].COLC = tempobj.COLC4;
        			jsons[index].COLD = tempobj.COLD4;
        			jsons[index].COLE = tempobj.COLE4;
        			jsons[index].LM='4';
        		}
        		
        	}
        	return errorMsg;
        },
		onDelete:function(){
			if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能保存");
                return;
            }
			if(confirm("确定删除此报表？")){
				document.getElementById("save").disabled = true;
       			document.getElementById("delete").disabled = true;
				 document.getElementById("print").disabled = true;
				 document.getElementById("cache").disabled = true;
				var url = "/hlwsb/qysds/delSB_QYSDS_JM_YJ_A_CGWGQYBGB.do";
				baseTools.xhrAjax({
					url : url,
	                params:{ SBBXH:SBBXH,SBBZL_DM:SBBZL_DM,NSRLX_DM:NSRLX_DM,SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z,LSXH:window.LSXH},
					callback : [ curSeg.pageFlowControl ]
				});          
			}
		},
		initData : function(jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
			// 页面控制参数
			SBBXH = jsonObj.data.HEAD.SBBXH;
			SBBZT = jsonObj.data.HEAD.SBBZT;
			DJXH = jsonObj.data.HEAD.DJXH;
			TBRQ =  jsonObj.data.HEAD.TBRQ;
			window.LSXH  = jsonObj.data.HEAD.LSXH;
			if(TBRQ!=null&&TBRQ.length>0){
				TBRQ = TBRQ.substring(0,4)+"年"+TBRQ.substring(5,7)+"月"+TBRQ.substring(8,10)+"日";
				DCellWeb1.setValByLabel("G33",TBRQ);
			}

			
			var map1 = {};
                   
            map1.HEAD = jsonObj.data.HEAD;
            map1.BODY = jsonObj.data.BODY;
                        
            if(!map1.HEAD.WGQYMC) {
            	map1.HEAD.WGQYMC = '';
                map1.HEAD.WGQYMC_WW = '';
            	map1.HEAD.NSRSBHSZG = '';
            	map1.HEAD.CLD = '';
                map1.HEAD.CLD_WW = '';
            	map1.HEAD.ZYYWLX = '';
            	map1.HEAD.CGBLBGR = 0;
            	

            }
            
            DCellWeb1.initRowToCell({
                cols: ["COLA1","COLB1", "COLC1", "COLD1", "COLE1","COLF1","COLG1","HC1"],
                cellRows: [
                 	{start: "HC1", 
	                 end: "HJ1",
	                 hc:"HC1",
	      	    	 addButton : {name:"AddButton1"},
	      	    	 delButton :  {name:"DelButton1",
				      	    		checkbox : "CB1",
				      	    		url:"/hlwsb/qysds/delSB_QYSDS_JM_YJ_A_CGWGQYBGB.do",
				      	    		params:{LSXH:window.LSXH,SBBXH: SBBXH,SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,LM:"1",GZ:gz}
	      	    	 }	
	                }
                ],
                data: map1,
                headCols: ["NSRSBH","NSRMC","WGQYMC","WGQYMC_WW","NSRSBHSZG","CLD","CLD_WW","ZYYWLX","CGBLBGR"],
                nsrxxCols:["SSSQ"]
            });
            
            var map2 = {};
            map2.HEAD = [];
            map2.BODY = jsonObj.data.BODY2; 
           
            DCellWeb1.initRowToCell({
                  cols: ["HC2","COLA2","COLB2", "COLC2", "COLD2", "COLE2","COLF2","COLG2"],
                cellRows: [
                 	{start: "HC2", 
	                 end: "HJ2",
	                 hc:"HC2",
	      	    	 addButton : {name:"AddButton2"},
	      	    	 delButton :  {name:"DelButton2",
				      	    		checkbox : "CB2",
				      	    		url:"/hlwsb/qysds/delSB_QYSDS_JM_YJ_A_CGWGQYBGB.do",
				      	    		params:{LSXH:window.LSXH,SBBXH: SBBXH,SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,LM:"2",GZ:gz}
	      	    	 }	
	                }
                ],
                data: map2
             });
             
             
             
            
            var map3 = {};
            map3.HEAD = [];
            map3.BODY = jsonObj.data.BODY3;    
            DCellWeb1.initRowToCell({
                  cols: ["HC3","COLA3","COLB3", "COLC3", "COLD3", "COLE3"],
                cellRows: [
                 	{start: "HC3", 
	                 end: "HJ3",
	                 hc:"HC3",
	      	    	 addButton : {name:"AddButton3"},
	      	    	 delButton :  {name:"DelButton3",
				      	    		checkbox : "CB3",
				      	    		url:"/hlwsb/qysds/delSB_QYSDS_JM_YJ_A_CGWGQYBGB.do",
				      	    		params:{LSXH:window.LSXH,SBBXH: SBBXH,SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,LM:"3",GZ:gz}
	      	    	 }	
	                }
                ],
                data: map3
             });
             
             
            var map4 = {};
            map4.HEAD = [];
            map4.BODY = jsonObj.data.BODY4;    
            DCellWeb1.initRowToCell({
                  cols: ["HC4","COLA4","COLB4", "COLC4", "COLD4", "COLE4"],
                cellRows: [
                 	{start: "HC4", 
	                 end: "HJ4",
	                 hc:"HC4",
	      	    	 addButton : {name:"AddButton4"},
	      	    	 delButton :  {name:"DelButton4",
				      	    		checkbox : "CB4",
				      	    		url:"/hlwsb/qysds/delSB_QYSDS_JM_YJ_A_CGWGQYBGB.do",
				      	    		params:{LSXH:window.LSXH,SBBXH: SBBXH,SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,LM:"4",GZ:gz}
	      	    	 }	
	                }
                ],
                data: map4
             });
            
			if (jsonObj.data.HEAD.SBBZT) {
                bAdd = false;
            }
            if (SBBZT == '2' || SBBZT == '3') {
            	document.getElementById("save").disabled = true;
       			document.getElementById("delete").disabled = true;
       			document.getElementById("print").disabled = false;
       			document.getElementById("cache").disabled = false;
                document.getElementById("selectList").disabled = true;
                if (gz == "Y") {
                    document.getElementById("save").disabled = false;
                    document.getElementById("selectList").disabled = false;
                    }
            }else{
				document.getElementById("save").disabled = false;
       			document.getElementById("delete").disabled = false;
       			document.getElementById("print").disabled = false;
       			document.getElementById("cache").disabled = false;
                document.getElementById("selectList").disabled = false;
			}	

		},
        //导入
        openPopWin:function(){
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=jm_yj_a_cgwgqybgb&&startRow=8&&sheetIndex=1&templatePath=../../printModel/qysds/qysds_yj_a/sb_qysds_jm_yj_a_cgwgqybgb.zip',
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
				DCellWeb1.ProtectFormula = false;
				break;
			// 添加、更新以及状态更新操作返回标志
			case 1:
				bAdd = false;
				
				if(confirm("保存成功!\r\n是否有多个参股企业?\r\n【如选择确定，请在弹出窗口中点击新增按钮】")){
/* 		        	addbz=true;
		        	curSeg.initWindow();
					top.main.changeNodeStatus(SBBZL_DM,"1");
 */	        	}else{
	        		document.getElementById("save").disabled = false;
       				document.getElementById("delete").disabled = false;
				 	document.getElementById("print").disabled = false;
				 	document.getElementById("cache").disabled = false;
                    document.getElementById("selectList").disabled = false;
	        	}
				break;
			// 删除操作返回标志
			case 2:
				alert("删除成功");
				bAdd = true;
				//window.LSXH =  null;
				curSeg.initWindow();
				break;
			// 准备添加的记录已经存在
			case 3:
				alert(3);
				alert("删除成功");
				bAdd = true;
				curSeg.initWindow();
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