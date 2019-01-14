//使用窗口组件加载时注释下面的代码
$(document).ready(function() {
    lrb_yb.onLoad();
});
/**
 *
 *
 */
var lrb_yb = (function() {
    //私有属性
    var curSeg; // 保存lrb_yb对象的
    var SBBXH = '';
    var SBBZL_DM = "";
    var NSRLX_DM = '';
    var SSSQ_Q="";
    var SSSQ_Z="";
    var SBBZT='';
    var DRJsonObj;
    var SAVE_TYPE = ''; //财务报表保存方式：1通过xml导入
    //私有方法
    var data1;
    //是否是添加
    var bAdd = true;
    //私有方法

    //公有方法
    return {
    	//跳转到打印页面
        onPrint:function() {
                      var str = hlwsbTools.urlStr({
                   				SBBZL_DM : SBBZL_DM,
                   				SSSQ_Q : SSSQ_Q,
                   				SSSQ_Z : SSSQ_Z
                   			});
                   		window.location="/hlwsb/cwbb2013_print/xqy/sb_cwbb_xqy_lrb_yb.html?"+str;
                   	},
        onLoad:function() {
            curSeg = lrb_yb;
            //引用报表控制
            dcell(DCellWeb1, "/hlwsb/printModel/cwbb2013/xqy/sb_cwbb_xqy_lrb_yb.cll");

            curSeg.onQuery();

            //删除组件释放内存
            $(window).unload(function () {
            });
        } ,
        onImport:function(){
            alert();
        },
        //查询数据
        onQuery:function() {
             SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");    //获取所属时期开始时间
             SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");    //获取所属时期结束时间     
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            NSRLX_DM=baseTools.getUrlQueryString("NSRLX_DM");
            baseTools.xhrAjax({
                url:"/hlwsb/cwbb/xqy/getSB_CWBB_XQY_LRB_YB.do",
                params: { SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,NSRLX_DM:NSRLX_DM},
                callback:[curSeg.pageFlowControl]
            });
        },
        //保存数据
        onSave:function() {
        	if(!curSeg.checkData()){
				return false;
			}
			if(hlwsbTools.isSBBZT_SB(SBBZT,1)){
          	    return false;
          	}
          	if(!confirm("是否要保存？")){
				return false;
			}
            var data = DCellWeb1.submitJsonjs({cols : ["BNLJJE", "BYJE"]});
            var url = bAdd
                ? "/hlwsb/cwbb/xqy/insertSB_CWBB_XQY_LRB_YB.do"
                : "/hlwsb/cwbb/xqy/updateSB_CWBB_XQY_LRB_YB.do";
            baseTools.xhrAjax({
                url:url,
                params: {DATA: data, SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q,
					SSSQ_Z: SSSQ_Z,NSRLX_DM:NSRLX_DM, SAVE_TYPE:SAVE_TYPE},
                callback:[curSeg.pageFlowControl]
            });

        },
        onDelete:function(){
        	if(hlwsbTools.isSBBZT_SB(SBBZT,2)){
          	   return false;
          	}
        	if(confirm("确定删除此报表？")){
            var url = "/hlwsb/cwbb/xqy/delSB_CWBB_XQY_LRB_YB.do";
            baseTools.xhrAjax({
                url:url,
                    params: { SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,NSRLX_DM:NSRLX_DM},
                callback:[curSeg.pageFlowControl]
            });
                    }    else{
                        return;
                    }
        },
        initData:function(jsonObj){
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
            DCellWeb1.initDataToCell({
            	cols :["BNLJJE", "BYJE"],
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
        	//验证表内关系
		checkData:function(){
			var list= new Array("D","F");
		    //①行3>=行4+行5+行6+行7+行8+行9+行10，强制关系。
		        var mes03='';
		    	var col03_1=parseFloat(DCellWeb1.getValByLabel("D7"));
		    	var col03_2=parseFloat(DCellWeb1.getValByLabel("F7"));
			    var hj_1=0;
			    var hj_2=0;
			    for(var i=8;i<=14;i++){
			    	hj_1=hj_1+parseFloat(DCellWeb1.getValByLabel("D"+i));
			    	hj_2=hj_2+parseFloat(DCellWeb1.getValByLabel("F"+i));
			    }
			    if(col03_1<Number(hj_1.toFixed(2))){
			    	mes03+="【本年累计金额】行3大于等于行4+行5+行6+行7+行8+行9+行10 \n";
			    }
			    if(col03_2<Number(hj_2.toFixed(2))){
			    	mes03+="【本月金额】行3大于等于行4+行5+行6+行7+行8+行9+行10";
			    }
		     if(mes03.length>0){
			    	mes03="不符合条件：\n "+mes03+"请检查!";
			    	alert(mes03);
			    	return false;
			    }
			/**
			 * 　 ②行11>=行12+行13，提示关系；
			　　　③行14>=行15+行16+行17，提示关系；
			　　　④行18>=行19，提示关系；
			　　　⑤22行>=行23，提示关系；
			     ⑥行24>=行25+行26+行27+行28+行29，提示关系。
			 */
			 var hintMes='';
			 for(var j=0;j<list.length;j++){
			 	var hintMesItem='';
			     var col11=parseFloat(DCellWeb1.getValByLabel(list[j]+"15"));
			     var col12_13=parseFloat(DCellWeb1.getValByLabel(list[j]+"16"))+parseFloat(DCellWeb1.getValByLabel(list[j]+"17"));
			     var col14=parseFloat(DCellWeb1.getValByLabel(list[j]+"18"));
			     var col15_17=parseFloat(DCellWeb1.getValByLabel(list[j]+"19"))+parseFloat(DCellWeb1.getValByLabel(list[j]+"20"))+parseFloat(DCellWeb1.getValByLabel(list[j]+"21"));
				 var col18=parseFloat(DCellWeb1.getValByLabel(list[j]+"22"));
				 var col19=parseFloat(DCellWeb1.getValByLabel(list[j]+"23"));
				 var col22=parseFloat(DCellWeb1.getValByLabel(list[j]+"26"));
				 var col23=parseFloat(DCellWeb1.getValByLabel(list[j]+"27"));
				 var col24=parseFloat(DCellWeb1.getValByLabel(list[j]+"28"));
				 var col25_29=0;
				 for(var i=29;i<=33;i++){
				 	col25_29=col25_29+parseFloat(DCellWeb1.getValByLabel(list[j]+i))
				 };
				 if(col11<col12_13){
				 	hintMesItem+="行11大于等于行12+行13，请检查！\n";
				 }
				 if(col14<col15_17){
				 	hintMesItem+="行14大于等于行15+行16+行17，请检查！\n";
				 }
				 if(col18<col19){
				 	hintMesItem+="行18大于等于行19，请检查！\n";
				 }
				 if(col22<col23){
				 	hintMesItem+="行22大于等于行23，请检查！\n";
				 }
				  if(col24<col25_29){
				 	hintMesItem+="行24大于等于行25+行26+行27+行28+行29，请检查！\n";
				 }
				 if(hintMesItem.length>0){
				 	if(j==0){
				 		hintMesItem="不符合条件【本年累计金额】：\n"+hintMesItem;
				 		hintMes+=hintMesItem;
				 	}
				 	else{
				 		hintMesItem="不符合条件【本月金额】：\n"+hintMesItem;
				 		hintMes+=hintMesItem;
				 	}
				 	
				 }
			 }
			 if(hintMes.length>0){
			 	alert(hintMes);
			 	//return false;
			 }
			return true;
		},
		//初始化本年累计数
        initLjs: function (jsonObj) {
            var ljs = jsonObj.data.LJS;            
            DCellWeb1.initSNLJ([{bys: "BYJE",bnlj: "BNLJJE"}], ljs, ["D25", "D34", "D36"]);
        },
		 initControl:function(jsonObj){
		 	// if(jsonObj.data.YMKZ.ISSHOW=="0"){
		 	// 	 //禁用表单的按钮
		      //      var inputList=document.getElementsByTagName('input')
		      //      for (var i=0;i<inputList.length;i++){
		      //     		 inputList[i].disabled=true;
		      //      }
		      //      alert("只有1月，4月，7月，10月才需填写此表");
		 	// }
		 },
		 	/**
		 * 控制本年累计金额是否可读
		 */
		onEditBNLJ:function(obj){
			DCellWeb1.editLjs([ "BNLJJE"], obj.checked);
		},

        openZlsc: function () {
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/cwbb/sb_cwbb_zlsc.html?bbzl=cwww_xqy_lrb_yb&bbmc=lrb_yb',
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
                    tempEnd.BYJE=tempp.byje;
                    tempEnd.BNLJJE= tempp.bnljje;
                    temp.push(tempEnd);
                }
                DRJsonObj.data.BODY=temp;
                SAVE_TYPE = "1";
                curSeg.initData(DRJsonObj);
            }

        },

//导入
        openPopWin:function(){

            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=lrb_yb&&startRow=6&&sheetIndex=1&templatePath=../../printModel/cwbb2013/xqy/sb_cwbb_xqy_all.zip',
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
                cols :["BNLJJE", "BYJE"],
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
					curSeg.initLjs(jsonObj);
                	curSeg.initData(jsonObj);
                	curSeg.initControl(jsonObj);
					var obj = document.getElementById("ljs");
                    DCellWeb1.editLjs(["BNLJJE"],obj.checked);
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