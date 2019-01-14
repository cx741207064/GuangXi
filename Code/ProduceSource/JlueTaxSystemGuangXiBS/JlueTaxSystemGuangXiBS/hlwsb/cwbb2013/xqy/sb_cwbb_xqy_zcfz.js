//使用窗口组件加载时注释下面的代码
$(document).ready(function() {
    zcfz.onLoad();
});
/**
 * 
 * 
 */
var zcfz = (function() {
    //私有属性
    var curSeg; // 保存zcfz对象的
    var SBBXH = '';
    var SBBZL_DM = "";
    var NSRLX_DM = '';
    var SSSQ_Q="";
    var SSSQ_Z="";
    var SBBZT='';
    var DRJsonObj;
    var SAVE_TYPE = ''; //财务报表保存方式：1通过xml导入
    //私有方法

    //是否是添加
    var bAdd = true;
    //私有方法
    var data1;
    //公有方法
    return {
     	//跳转到打印页面
        onPrint:function() {
                      var str = hlwsbTools.urlStr({
                   				SBBZL_DM : SBBZL_DM,
                   				SSSQ_Q : SSSQ_Q,
                   				SSSQ_Z : SSSQ_Z
                   			});
                   		window.location="/hlwsb/cwbb2013_print/xqy/sb_cwbb_xqy_zcfz.html?"+str;
                   	},
        onLoad:function() {
            curSeg = zcfz;
            //引用报表控制
            dcell(DCellWeb1, "/hlwsb/printModel/cwbb2013/xqy/sb_cwbb_xqy_zcfz.cll");
            
            curSeg.onQuery();
            
            //删除组件释放内存
            $(window).unload(function () {
            });
        } ,
        //查询数据
        onQuery:function() {
             SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");    //获取所属时期开始时间
             SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");    //获取所属时期结束时间   
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            NSRLX_DM=baseTools.getUrlQueryString("NSRLX_DM");
            var url = "/hlwsb/cwbb/xqy/getSB_CWBB_XQY_ZCFZB.do";
            baseTools.xhrAjax({
                url:url,
                params: {SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z},
                callback:[curSeg.pageFlowControl]
            });
        },
        //保存数据
        onSave:function() {
        	if(!curSeg.checkData()){
				return false;
			}
        	
        	var msg = curSeg.tsxCheck();
        	
        	if(msg.length > 0 && !confirm(msg + "是否继续保存？")) {
        		return;
        	}
        	        	        	
			if(hlwsbTools.isSBBZT_SB(SBBZT,1)){
          	    return false;
          	}
        	var data = DCellWeb1.submitJsonjs({cols : ["ZCQMYE", "ZCQCYE", "FZQMYE", "FZNCYE"]});
        	if(confirm("是否要保存?")){
	        	var url = bAdd
	                    ? "/hlwsb/cwbb/xqy/insertSB_CWBB_XQY_ZCFZB.do"
	                    : "/hlwsb/cwbb/xqy/updateSB_CWBB_XQY_ZCFZB.do";
	            baseTools.xhrAjax({
	                url:url,
	                params: {DATA: data, SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q,
                        SSSQ_Z: SSSQ_Z,NSRLX_DM:NSRLX_DM, SAVE_TYPE:SAVE_TYPE},
	                callback:[curSeg.pageFlowControl]
	            });
            }
        },
        onDelete:function(){
          if(hlwsbTools.isSBBZT_SB(SBBZT,2)){          
          	    return false;
          }
         if(confirm("确定删除此报表？")){

        	var url = "/hlwsb/cwbb/xqy/delSB_CWBB_XQY_ZCFZB.do";
        	baseTools.xhrAjax({
                url:url,
                    params: { SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,NSRLX_DM:NSRLX_DM},
                callback:[curSeg.pageFlowControl]
            });
          }
        },
        initData:function(jsonObj){
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
            DCellWeb1.initDataToCell({
            	cols : ["ZCQMYE", "ZCQCYE", "FZQMYE", "FZNCYE"], 
            	data : jsonObj.data,
            	nsrxxCols : [ "NSRSBH", "NSRMC" ]
            });
            DCellWeb1.setValByName("SSSQ",hlwsbTools.setSSq(jsonObj.data.SSSQ_Q,true)+"到"+hlwsbTools.setSSq(jsonObj.data.SSSQ_Z,true));
            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            if(jsonObj.data.HEAD.SBBZT) {
				bAdd = false;
			}
        },

        openZlsc: function () {
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/cwbb/sb_cwbb_zlsc.html?bbzl=cwww_xqy_zcfzb&bbmc=zcfz',
                width: 400,
                height: 150
            };
            winObj = baseTools.showWinExt(winParam);
            $(winObj.DOM.wrap).bgiframe({
                width: 425,
                height: 200
            });
        },
        nsrxxtransVal : function(ret){
            var temp = [];
            if(ret && ret.data.length>0){
                for(var i = 0;i < ret.data.length; i++){
                    var tempEnd={};
                    var tempp=  ret.data[i];
                    tempEnd.HC= tempp.ewbhxh;
                    tempEnd.ZCQMYE=tempp.qmye_zc;
                    tempEnd.ZCQCYE= tempp.ncye_zc;
                    tempEnd.FZQMYE=tempp.qmye_qy;
                    tempEnd.FZNCYE= tempp.ncye_qy;
                    temp.push(tempEnd);
                }
                DRJsonObj.data.BODY=temp;
                SAVE_TYPE = "1";
                curSeg.initData(DRJsonObj);
            }

        },

               /**
		 * 控制是否可以修改年初余额
		 */
		onEditBNLJ:function(obj){
			// 资产年初余额 ZCQCYE  负债年初余额 FZNCYE
				var pos = DCellWeb1.GetCellVar_J("ZCQCYE");
				var pos2 = DCellWeb1.GetCellVar_J("FZNCYE");
				for(var i=1;i<=32;i++){
					//设为可写  且 资产年初余额 i 不能为 1, 17, 负债年初余额 i不能为1,13,20到26
					if(i!=1&&i!=17){
						if(obj.checked){
						  //可写
						  DCellWeb1.SetCellInput(pos.col, pos.row + i, pos.sheet, 2);
						}
						else{
						  //只读
						  DCellWeb1.SetCellInput(pos.col, pos.row + i, pos.sheet, 5);
						}
					}
					if((i!=1&&i!=13)&&(i<20||i>26)){
						if(obj.checked){
							  //可写
							DCellWeb1.SetCellInput(pos2.col, pos2.row + i, pos2.sheet, 2);
						}
						else{
							  //只读
							DCellWeb1.SetCellInput(pos2.col, pos2.row + i, pos2.sheet, 5);
						}
					
					}
				}
		},
		/**
		 * 验证表内关系
		 */
		checkData:function(){
			 var nd =  SSSQ_Q.split("-")[0];
		    	if(hlwsbTools.isNB(SSSQ_Q,SSSQ_Z)&&parseInt(nd)<2013){
		        alert("2012年之后的年报才能使用该报表！");
		        return false;
		    }
		    // *①行53＝行30，强制性关系；
		     var mes53='';
		     if(parseFloat(DCellWeb1.getValByLabel("G36"))!=parseFloat(DCellWeb1.getValByLabel("C36"))){
		     	mes53+= "\n[期末余额]行53与行30必须相等,请检查!";
		     }
		     if(parseFloat(DCellWeb1.getValByLabel("H36"))!=parseFloat(DCellWeb1.getValByLabel("D36"))){
		     	mes53+= "\n[年初余额]行53与行30必须相等,请检查!";
		     }
		     if(mes53.length>0){
                    mes53 = "不符合以下校验：" + mes53;
                    alert(mes53);
                    return false;
                }
              
		    return true;
		 },
		 tsxCheck: function() {
			 
			//②行9>=行10+行11行12+行13，提示性关系。
            var mes09=''; 
             //期末数据
            var col09_qm=parseFloat(DCellWeb1.getValByLabel("C14"));
            var col1013_qm=0;
            //年初数据
            var col09_nc=parseFloat(DCellWeb1.getValByLabel("D14"));
            var col1013_nc=0;
            for(var i=1;i<=4;i++){
            	 col1013_qm+=parseFloat(DCellWeb1.getValByLabel("C"+(14+i)));
            	 col1013_nc+=parseFloat(DCellWeb1.getValByLabel("D"+(14+i)));
            }
            //TODO  取两位有效数字
            col1013_qm = col1013_qm;
            col1013_nc = col1013_nc;
            col09_qm = col09_qm;
            col09_nc = col09_nc;
             if(col09_qm<Number(col1013_qm.toFixed(2))){
		     	mes09+= "\n[期末余额]行9大于等于行10+行11+行12+行13";
		     }
		     if(col09_nc<Number(col1013_nc.toFixed(2))){
		     	mes09+= "\n[年初余额]行9大于等于行10+行11+行12+行13";
		     }
		     if(mes09.length>0){
                mes09 = "不符合以下校验：" + mes09;                   
             }
			 return mes09;
		 },
		 
	 initControl:function(jsonObj){
		 	// if(jsonObj.data.YMKZ.ISSHOW=="0"){
		 	// 	 //禁用表单的按钮
		      //      var inputList=document.getElementsByTagName('input')
		      //      for (var i=0;i<inputList.length;i++)
		      //      {
		      //     		 inputList[i].disabled=true;
		      //      }
		      //      alert("只有1月，4月，7月，10月才需填写此表");
		 	// }
		 },
        //导入
        openPopWin:function(){

            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=zcfz&&startRow=6&&sheetIndex=1&templatePath=../../printModel/cwbb2013/xqy/sb_cwbb_xqy_zcfz.zip',
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
		    for(var i=0;i<jsonArray.length;i++){
                data1.BODY.push(jsonArray[i]);
            }
            DCellWeb1.initDataToCell({
                cols : ["ZCQMYE", "ZCQCYE", "FZQMYE", "FZNCYE"],
                data : data1,
                nsrxxCols : [ "NSRSBH", "NSRMC" ]
            });
            return true;
        },
        /**
         * 需要的时候可以覆盖该方法
         * 在ajax调用中，在得到数据时调用该方法
         */
        pageFlowControl:function(jsonObj, xhrArgs) {
        	
            switch (parseInt(jsonObj.code)) {
                //查询操作返回标志
                case 0:
                    DRJsonObj = jsonObj;
                	curSeg.initData(jsonObj);
                	curSeg.initControl(jsonObj);
                    
                    break;
                //添加、更新以及状态更新操作返回标志
                case 1:
                        bAdd=false;
                    alert("保存成功");
                    //top.main.changeNodeStatus(SBBZL_DM,"1");
                    break;
                // 删除操作返回标志
                case 2:
                	alert("删除成功");
                	//top.main.changeNodeStatus(SBBZL_DM,"0");
                    SAVE_TYPE = '';
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
					var reason = 	jsonObj.msg;
					if(reason.indexOf("已申报")>-1){
						reason = reason.substring(reason.indexOf("已申报")-1);
						var sssq = DCellWeb1.getValByName('SSSQ');
						sssq +=  hlwsbTools.setSSsq(SSSQ_Q, SSSQ_Z);
						DCellWeb1.setValByName('SSSQ', sssq);
						jQuery(".toolBar input[type='button']").attr('disabled','true');
					}
					alert(reason);
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