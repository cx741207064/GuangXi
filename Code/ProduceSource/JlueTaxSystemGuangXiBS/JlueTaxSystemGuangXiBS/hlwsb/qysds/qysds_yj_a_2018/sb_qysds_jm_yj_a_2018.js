//使用窗口组件加载时注释下面的代码
$(document).ready(function () {
    jm_yj_a.onLoad();
});
/**
 *
 *
 */
var jm_yj_a = (function () {
    // 私有属性
    var curSeg; // 保存jm_yj_a对象的
    var SBBXH = '';
    var SBBZL_DM = "";
    var SSSQ_Q = "";
    var SSSQ_Z = "";
   /* var HZNSQYLB = "";
    var KDQSSZYQY = "";
    var hjqylx = "";*/
    var SBBZT="";
    var MBNDKS = 0;
    var YQNDDJSE = "";
    var winObj = '';
    var NSRLX_DM = "";

    var CSGJXZHJZHYBZ = "";
    var SNSDE = 0.00;
    var XXWL_BZ = "";

    //上期利润额累计
    var SQ_SJLRE_LE = 0.00;

    var hzsbzg = "";
    var kdq = "";
    // 私有方法

    // 是否是添加
    var bAdd = true;


    var BYJLRELJ = 0.00;//本月季应纳所得税税额累计

    var SFCZFZJG = "N";//是否存在分支机构
    
    var arr = [];
    
    var jtdyw=0; //存放本年上一期加特定累计金额（由金三带出）
    
    var tsnsr='00'; //特殊纳税人类型
    
    var tdywyj=0; //存放本年上一期特定业务预缴（由金三带出）
    var jdyjbl=0; // 特殊纳税人维护为06的金三返回就地预缴比例从接口取得
    var fzjgfpbl=0;//分支机构分配比例从接口获得
    var fzjgftsdse=0;//分支机构分摊所得税额
    var sqyjje=0;//上期已缴金额
    var kdqfzjglx='0';//跨地区转移标志，3、4表示跨地市或者跨县区
    var qylx='0'//企业类型全局变量
    var zyyh=''//中原银行标志
    var gdslx = "1";//国地税标志。1：国税；2，国税
    // 私有方法
    var data1;
    // 公有方法
    return {
        //跳转到打印页面
        onPrint: function () {

            if (bAdd) {
                alert("请先保存报表，再进行打印");
                return;
            }
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z,
                NSRLX_DM: NSRLX_DM,
                GDSLX:gdslx
            });
            window.location = "/hlwsb/qysds_print/qysds_yj_a_2018/sb_qysds_jm_yj_a_2018.html?" + str;
        },
        onEditSNLJ: function (obj) {
            DCellWeb1.editLjs(["LJJE"], obj.checked);
        },
        onLoad: function () {
            curSeg = jm_yj_a;
            // 引用报表控制
            dcell(DCellWeb1, "/hlwsb/printModel/qysds/qysds_yj_a_2018/sb_qysds_jm_yj_a_2018.cll");
           // DCellWeb1.setValByLabel("A2", "基础数据加载中...");
            for(var i=0; i<DCellWeb1.GetVarCount; i++) {
            	arr.push(DCellWeb1.EnumVar_J(i).name);            	
            }

            curSeg.onQuery();

            // 删除组件释放内存
            $(window).unload(function () {
            });
        },
        // 查询数据
        onQuery: function () {


            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");    //获取所属时期开始时间
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");    //获取所属时期结束时间
            NSRLX_DM = baseTools.getUrlQueryString("NSRLX_DM");
            gdslx = baseTools.getUrlQueryString("GDSLX");
            baseTools.xhrAjax({
                url: "/hlwsb/qysds/getSB_QYSDS_JM_YJ_A_2015.do",
                params: {
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, NSRLX_DM: NSRLX_DM,GDSLX:gdslx
                },
                callback: [curSeg.pageFlowControl]
            });
        },
        // 保存数据
        onSave: function () {
            if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能保存");
                return;
            }
           

            var isValidSuccess = true;
         
           
            var data = DCellWeb1.submitJsonjs({
                cols: ["LJJE"],
                headCols : ["YJFS00","YJFS01","YJFS02","QYLX00","QYLX01","QYLX02","SFSYXXWL00","SFSYXXWL01","KJXZXQY00","KJXZXQY01","GXJSQY00","GXJSQY01","JSRG00","JSRG01","ZJGFTBL","CZJZFPBL","QBFZJGFPBL","ZNBMFPBL","QMCYRS"],
                returnType: "object"
            });
            this.tjclCode(data.HEAD,arr);
            
            if(!this.saveCheck(data)) {
              	return;
              } 
           
            
            var url = bAdd ? "/hlwsb/qysds/insertSB_QYSDS_JM_YJ_A_2015.do" : "/hlwsb/qysds/updateSB_QYSDS_JM_YJ_A_2015.do";

          baseTools.xhrAjax({
              url: url,
              params: {
                  DATA: JSON.stringify(data),
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
        //检查校验各个复选框是否填写
        saveCheck:function(data) {
        	
            var yjfsArr = ["YJFS00","YJFS01","YJFS02"];
          	
              if(this.getCheckFlag(yjfsArr)) {
              	alert("请选择“预缴方式”");
              	return false;
              }
            var qylxArr = ["QYLX00","QYLX01","QYLX02"];
            	
              if(this.getCheckFlag(qylxArr)) {
              	alert("请选择“企业类型”");
              	return false;
              }
              
            var sfsyxxwlArr = ["SFSYXXWL00","SFSYXXWL01"];
          	
              if(this.getCheckFlag(sfsyxxwlArr)) {
              	alert("请选择“是否属于小型微利企业”");
              	return false;
              }
              
            var KJXZXQYArr = ["KJXZXQY00","KJXZXQY01"];
            	
              if(this.getCheckFlag(KJXZXQYArr)) {
              	alert("请选择“是否属于科技型中小企业”");
              	return false;
              }
            var GXJSQYArr = ["GXJSQY00","GXJSQY01"];
          	
              if(this.getCheckFlag(GXJSQYArr)) {
              	alert("请选择“是否属于高新技术企业”");
              	return false;
              }
              
            var JSRGArr = ["JSRG00","JSRG01"];
            	
              if(this.getCheckFlag(JSRGArr)) {
              	alert("请选择“是否属于技术入股递延纳税事项”");
              	return false;
              }
              
              var jtdbqyw =  DCellWeb1.getValByLabel('H13');
              if(jtdbqyw<0){
            	  alert('加：特定业务计算的应纳税所得额本年累计金额必须大于等于0！');
            	  return false;
              }
             
              //由于接口问题这个校验先不管
              if(jtdbqyw<jtdyw){
            	  alert('加：特定业务计算的应纳税所得额本年累计金额:'+jtdbqyw+'必须大于等于本年上期本行金额:'+jtdyw);
            	  return false;
              }
              
              var bzssr =  DCellWeb1.getValByLabel('H14');
              if(bzssr<0){
            	  alert('不征税收入本年累计金额必须大于等于0！');
            	  return false;
              }
              
              var mssr =  DCellWeb1.getValByLabel('H14');
              if(mssr<0){
            	  alert('免税收入、减计收入、所得减免等优惠金额本年累计金额必须大于等于0！');
            	  return false;
              }
              
              var gdzc =  DCellWeb1.getValByLabel('H15');
              if(gdzc<0){
            	  alert('固定资产加速折旧（扣除）调减额本年累计金额必须大于等于0！');
            	  return false;
              }
              var yjfstemp = data.HEAD.YJFS;
              if(yjfstemp==1){
            	  var sjlre =  DCellWeb1.getValByLabel('H18');
                  if(sjlre<0){
                	  alert('按照上一纳税年度应纳税所得额平均额确定的应纳税所得额本年累计金额必须大于等于0！');
                	  return false;
                  }
              }
              
              var col1202 = DCellWeb1.getValByLabel('H21'); //已经修改
              //   var col1201 = DCellWeb1.getValByLabel('F18');
                 var col1102 = DCellWeb1.getValByLabel('H20');
                 if (col1202 > col1102) {
                     alert("第12行“减免所得税额”不能大于第11行“应纳所得税额”，请检查调整附表3！");
                     return false;//验证失败，但可以强制通过，否则无法修改其他表数据
                     //return;
                 }
                 
             var sjyjn = DCellWeb1.getValByLabel('H22'); 
               if(sjyjn<0){
           	    alert('实际已缴纳所得税额本年累计金额必须大于等于0！');
           	    return false;
               }
               
               
               
               var tdywyjbq =  DCellWeb1.getValByLabel('H23');
               if(tdywyjbq<0){
             	  alert('特定业务预缴（征）所得税额本年累计金额必须大于等于0！');
             	  return false;
               }
               
               if(tdywyjbq<tdywyj){
            	   alert('特定业务预缴（征）所得税额本年本期累计金额:'+tdywyjbq+'必须大于等于本年上期累计金额:'+tdywyj);
            	   return false;
               }
               
               var bqybtse =  DCellWeb1.getValByLabel('H24');
               if(bqybtse<0){
             	  alert('本期应补（退）所得税额 \ 税务机关确定的本期应纳所得税额必须大于等于0！');
             	  return false;
               }
               
               var zjgybsdse =  DCellWeb1.getValByLabel('H26');
               if(zjgybsdse<0){
             	  alert('总机构本期分摊应补（退）所得税额必须大于等于0！');
             	  return false;
               }
               var qmcyrstemp = DCellWeb1.getValByLabel('B35');
               if(!qmcyrstemp||qmcyrstemp==0||qmcyrstemp<0){
            	   alert('期末从业人数必须大于0！');
            	   return false;
               }
               
               var zjgftbl = DCellWeb1.getValByLabel('F27');
               var czjzbl = DCellWeb1.getValByLabel('F28');
               var qbfzjgbl = DCellWeb1.getValByLabel('D29');
           	  if(qylx=='1'){
               if(zjgftbl>0||czjzbl>0||qbfzjgbl>0){
            	   if(kdqfzjglx=='3'||kdqfzjglx=='4'){
            		  if(zyyh!='Y'){//排除中原银行
            		   if((zjgftbl!=0.25&&zjgftbl!=0.5)||(qbfzjgbl!=0.75&&qbfzjgbl!=0.5)){
            			   alert('跨地市跨县区的企业总机构分摊比例只能是25%、50%其中之一;全部分支机构分摊比例值只能是50%、75%中之一');
            			   return false;
            		   }
            		  }
            	   }
            	   var blhj = curSeg.formatFloatSw(zjgftbl+czjzbl+qbfzjgbl,3).toFixed(2);
            	   if(blhj!=1){
            		   alert('总机构分摊比例、财政集中分摊比例、全部分支机构分摊比例之和必须为1！');
            		   return false;
            	   }
               }else if(XXWL_BZ!='Y'){//上年小微的总机构不分摊税额
            	   alert('总机构分摊比例、财政集中分摊比例、全部分支机构分摊比例必须填写');
            	   return false;
               }
           	  }
               this.XXWLOper(data);
  			return true;

          },
          getCheckFlag : function (arr) {
          	var flag = true;
          	for(var i=0; i<arr.length; i++) {
      			var map = DCellWeb1.GetCellVar_J(arr[i]);
      			var val = DCellWeb1.GetCellDouble(map.col,map.row,map.sheet);
      			var input = DCellWeb1.GetCellInput(map.col,map.row,0);
      			if(val == 1 || input == 5) {
      				flag = false;
      				break;
      			}
      		}
          	
          	return flag;
          	
          },
          //小微操作判断勾选
          XXWLOper:function(data){
        	  var qylxtemp = data.HEAD.QYLX;
        	  var yjfstemp = data.HEAD.YJFS;
        	  var sjlreLj = DCellWeb1.getValByLabel('H18');//第9行实际利润额累计
        	if(qylxtemp=='0' || qylxtemp=='1'){//是否小微判断只针对于一般企业和总机构
        	  if(XXWL_BZ=='Y'){
        		  if(yjfstemp=='0'||yjfstemp=='1'){//预缴方式为按照实际利润额预缴,预缴方式为按照上一年度预缴
          	              if(sjlreLj<=1000000){
                  			  alert('您的实际利润额没有超过100万属于小型微利企业');
                  			  DCellWeb1.SetCellDouble(2,33,0,1);
                  			  DCellWeb1.SetCellDouble(5,33,0,0);
                  			  data.HEAD.SFSYXXWL=0;
                  		  }else{
                  			  alert('您的实际利润额超过100万不属于小型微利企业');
                  			  DCellWeb1.SetCellDouble(2,33,0,0);
                  			  DCellWeb1.SetCellDouble(5,33,0,1);
                  			data.HEAD.SFSYXXWL=1;
                  		  }
                  
          	     }/*else if(yjfstemp=='1'){//预缴方式为按照上一年度预缴
          	        alert('您的实际利润额没有超过100万属于小型微利企业');
                    DCellWeb1.SetCellDouble(2,33,0,1);
                    DCellWeb1.SetCellDouble(5,33,0,0);
                    data.HEAD.SFSYXXWL=0;	  
          	    }*/
        	  }else /*if(XXWL_BZ!='T')*/{//T的这种是三大标准不符合的，不符合三大标准的永远不能小微
        		if(yjfstemp!='2'){//按照税务机关预缴这种方式没有小微
        		  if(sjlreLj<=1000000){
          			  
          			 /* DCellWeb1.SetCellInput(2,33,0,2);
        			  DCellWeb1.SetCellInput(5,33,0,2);*/
          			  if(confirm('请确认选择是否属于小型微利企业，点击确定则属于小型微利企业，点击取消或关闭窗口则不属于')){
          				 DCellWeb1.SetCellDouble(2,33,0,1);
             			 DCellWeb1.SetCellDouble(5,33,0,0);
             			 data.HEAD.SFSYXXWL=0;
          			  }else{
          				 DCellWeb1.SetCellDouble(2,33,0,0);
             			 DCellWeb1.SetCellDouble(5,33,0,1);
             			 data.HEAD.SFSYXXWL=1;
          			  }
          			  
          		  }else{
          			  alert('您的实际利润额超过100万不属于小型微利企业');
          			  DCellWeb1.SetCellDouble(2,33,0,0);
          			  DCellWeb1.SetCellDouble(5,33,0,1);
          			  data.HEAD.SFSYXXWL=1;
          		  }
        		}
        	  }/*else{//不符合三大标准不允许小微
        		  alert('资产总额，从业人数，年度纳税所得额不符合标准，不允许小微');
        		  DCellWeb1.SetCellDouble(2,33,0,0);
      			  DCellWeb1.SetCellDouble(5,33,0,1);
      			  data.HEAD.SFSYXXWL=1;
        	  }*/
        	   
        		
        	}
        	  
        	  
          },

      

        onDelete: function () {
            if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能保存");
                return;
            }
            if (confirm("确定删除此报表？")) {

                var url = "/hlwsb/qysds/delSB_QYSDS_JM_YJ_A_2015.do";
                baseTools.xhrAjax({
                    url: url,
                    params: {
                        SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, NSRLX_DM: NSRLX_DM,
                        SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z
                    },
                    callback: [curSeg.pageFlowControl]
                });
            }
        },
        
        //解析因为cll中用了复选框，和数据库中的字段不一致，添加解析和拼装的方法。cell中名称定义也有一点规则
        tjclDeCode : function(map, arr) {
        	var temp = {};
        	for(var i=0; i<arr.length; i++) {
        		if(isNaN(Number(arr[i].substr(arr[i].length - 2,2)))){
        			continue;
        		}
        		temp[arr[i].substr(0, arr[i].length - 2)] = 1;
        	}
        	for (var k in temp) {
        		
        		var val = map[k];        		
        		if(val) {        			
        			map[k + "0" +val] = 1;
        		}
        	}
        },
        tjclCode : function(map, arr) {
        	
        	for(var i=0; i<arr.length; i++) {
        		var val = map[arr[i]];
        		var key = arr[i].substr(0, arr[i].length - 2);
        		if(isNaN(Number(arr[i].substr(arr[i].length - 2,2)))){
        			continue;
        		}
        		
        		if(val == 1) {
        			map[key] = Number(arr[i].substr(arr[i].length - 2,2));
        		}
        		
        		delete map[arr[i]];
        		
        	}
        },
        initData: function (jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
            // 页面控制参数
            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            if (jsonObj.data.HEAD.SBBZT) {
                bAdd = false;
            }
            //MBNDKS 接口返回数据
            MBNDKS=jsonObj.data.YMKZ.MBNDKS;
            //TSNSRLX等于10的按照应纳税额再乘以50%计算税额，接口取得
            tsnsr=jsonObj.data.YMKZ.TSNSRLX_DM;
            //就地预缴比例
            jdyjbl=jsonObj.data.YMKZ.JDYJBL;
            DCellWeb1.DefineDoubleVar("JDYJBL", jdyjbl);
            //小型微利企业标志接口返回
            //XXWL_BZ
            XXWL_BZ=jsonObj.data.YMKZ.XXWL_BZ;
            //分支机构分摊比例
            fzjgfpbl=jsonObj.data.YMKZ.fzjgfpbl;
            //加特定
            jtdyw=jsonObj.data.YMKZ.jtdyw;
            //特定业务预缴
            tdywyj=jsonObj.data.YMKZ.tdywyj;
            //分支机构分摊所得税额
            fzjgftsdse=jsonObj.data.YMKZ.fzjgftsdse;
            
            //上期已缴金额
            sqyjje=jsonObj.data.YMKZ.sqyjje;
           
            //跨地市、跨县区标志主要用于判断是否放开比例
            kdqfzjglx=jsonObj.data.YMKZ.kdqfzjglx;
            //中原银行标志
            var djxh=hlwsbTools.getDjxh();
            if('10114101000241681576'==djxh){
            	zyyh='Y';
            }
            
            this.tjclDeCode(jsonObj.data.HEAD,arr); //解析复选框
            DCellWeb1.initDataToCell({
                cols: ["LJJE"],
                headCols: ["YJFS00","YJFS01","YJFS02","QYLX00","QYLX01","QYLX02","SFSYXXWL00","SFSYXXWL01","KJXZXQY00","KJXZXQY01","GXJSQY00","GXJSQY01","JSRG00","JSRG01","ZJGFTBL","CZJZFPBL","QBFZJGFPBL","ZNBMFPBL","QMCYRS"],
                nsrxxCols: ["NSRSBH", "SSSQ", "NSRMC", "TBRQ"],
                data: jsonObj.data,
                iszdjskxg: true
            });
        },

      
      
        initControl: function (jsonObj) {

          
        	//监控复选框
        	 DCellWeb1.checkCellChanged = function(col, row) {
      	    	var name = DCellWeb1.FindCellVar(col, row, 0);
      	    //	var nameVal=DCellWeb1.getValByName(name);
      	    	var kjzd = name.substr(0, name.length - 2);
      	    	var kjzdArr = [];
      	    	var hy_dm = hlwsbTools.getNsrxx("HY_DM");
      	    	switch(kjzd){
  	        		case 'YJFS':
  	        			kjzdArr = ["YJFS00","YJFS01","YJFS02"];
  	        			break;
  	        		case 'QYLX':
  	        			kjzdArr = ["QYLX00","QYLX01","QYLX02"];
  	        		    break;
  	        		case 'SFSYXXWL' :
  	        			kjzdArr = ["SFSYXXWL00","SFSYXXWL01"];
  	        			break;
  	        		case 'KJXZXQY' :
  	        			kjzdArr = ["KJXZXQY00","KJXZXQY01"];
  	        			break;
  	        		case 'GXJSQY' :
  	        			kjzdArr = ["GXJSQY00","GXJSQY01"];
  	        			break;
  	        		case 'JSRG' :
  	        			kjzdArr = ["JSRG00","JSRG01"];
  	        			break;
  	           }
      	    	for(var i=0; i<kjzdArr.length; i++) {
  					if(name!=kjzdArr[i]) {
  						var map = DCellWeb1.GetCellVar_J(kjzdArr[i]);
  						DCellWeb1.SetCellDouble(map.col,map.row,map.sheet,0);
  					}

  				}
      	    	
      	    }
        	 //监控文本输入框
        	 DCellWeb1.inputCheck = function (col, row,sheet,text) {
        		  // 为空时为0
                 if (!text) {
                     text = 0;
                 }
        		//弥补亏损
   				if(col==8&&(row==12||row==13||row==14||row==15||row==16)){
   					curSeg.mbkslj();
   				}
   				if(col==8&&row==13){//非房地产开发企业（按照行业代码判断），填写此行给予提示，“房地产开发企业销售未完工开发产品取得的预售收入，按照税收规定的预计计税毛利率计算的预计毛利额填入此行。请确认是否填写正确。”
   					var hy_dm = hlwsbTools.getNsrxx("HY_DM");
                      if(hy_dm!=7010){
                 	     alert("房地产开发企业销售未完工开发产品取得的预售收入，按照税收规定的预计计税毛利率计算的预计毛利额填入此行。请确认是否填写正确。");
                      }
   			    }
                 //广西特色
                 //第14行允许用户录入，录入数据>0时，弹窗提示14行填表说明
                 if (col == 8 && row == 23) {
                     if (text > 0){
                         alert("第14行“特定业务预缴（征）所得税额”：填报建筑企业总机构直接管理的跨地区设立的项目部，按照税收规定已经向项目所在地主管税务机关预缴企业所得税的本年累计金额。\n");
                     }
                 }
        		 return true;
        	 }
        	 //默认将小微，高新技术，科技型，递延收益都设置成否
        	/* var xwtemp=jsonObj.data.HEAD.SFSYXXWL;
        	 var kjxzxqytemp=jsonObj.data.HEAD.KJXZXQY;
        	 var gxjsqytemp=jsonObj.data.HEAD.GXJSQY;
        	 var jsrgdynstemp=jsonObj.data.HEAD.JSRG;*/
        	/* if(!xwtemp||xwtemp==''){
        		 DCellWeb1.SetCellDouble(5, 33, 0, 1);
        	 }
        	 if(!kjxzxqytemp||kjxzxqytemp==''){
        		 DCellWeb1.SetCellDouble(10, 33, 0, 1);
        	 }
        	 
        	 if(!gxjsqytemp||gxjsqytemp==''){
        		 DCellWeb1.SetCellDouble(5, 34, 0, 1);
        	 }
        	 if(!jsrgdynstemp||jsrgdynstemp==''){
        		 DCellWeb1.SetCellDouble(10, 34, 0, 1);
        	 }*/
        	 
        	 if(!SBBZT||SBBZT==''){
        		 DCellWeb1.SetCellDouble(5, 33, 0, 1);
        		 DCellWeb1.SetCellDouble(10, 33, 0, 1);
        		 DCellWeb1.SetCellDouble(5, 34, 0, 1);
        		 DCellWeb1.SetCellDouble(10, 34, 0, 1);
        	 }
        	 //总机构分摊比例,财政集中分配比例,全部分支机构分配比例判断是否修改过
           /* var zjgftbl=jsonObj.data.HEAD.ZJGFTBL;
            var czjzfpbl=jsonObj.data.HEAD.CZJZFPBL;
            var qbfzjgfpbl = jsonObj.data.HEAD.QBFZJGFPBL;*/
            
        	var yjfs =jsonObj.data.HEAD.YJFS;
        	if(yjfs){
        		if (yjfs=='1'){//预缴方式为“按照上一纳税年度应纳税所得额平均额预缴”的纳税人填报第9、10、11、12、13、15行
        		 for(var i=10;i<=17;i++){
        			 DCellWeb1.SetCellInput(8, i, 0, 5);
        			 if(i!=16){
        				 DCellWeb1.SetCellDouble(8,i,0,0);//固定资产需要提数
        			 }
        			
        		 }
        		 DCellWeb1.SetCellInput(8, 23, 0, 5);
        		 
        		// 实行按照实际利润额预缴的纳税人或按照上一纳税年度应纳税所得额平均额预缴的纳税人填报。自动带出（25%），不可修改
    			 DCellWeb1.SetCellDouble(8,19,0,0.25);
    			 DCellWeb1.SetCellInput(8, 19, 0, 5);
    			//实行按照实际利润额预缴的纳税人或按照上一纳税年度应纳税所得额平均额预缴的纳税人填报。自动带出，不可修改。
    			 DCellWeb1.SetCellInput(8, 20, 0, 5);
    			     if(tsnsr!='10'){//中石油、中石化按照年度应纳所得税额50%
    		            DCellWeb1.setFormulaByLabel('H20', 'if(Round(H18*H19,2)>0,Round(H18*H19,2),0)');
    			 
    			       }else{
    				    DCellWeb1.setFormulaByLabel('H20', 'if(Round(H18*H19*0.5,2)>0,Round(H18*H19*0.5,2),0)'); 
    			       }
    			     
    			     //实行按照实际利润额预缴的纳税人或按照上一纳税年度应纳税所得额平均额预缴的纳税人，本项带出的值=本表第11行-12行-13行-14行，当带出值＜0时，本栏填0
        			 //06省内按特定比例就地预缴企业所得税二级分支机构”信息的纳税人）按比例就地预缴税款时，本项带出的值=第11行×就地预缴比例-第12行×就地预缴比例-第13行-第14行，当带出值＜0时，本栏填0
    			     DCellWeb1.SetCellInput(8, 24, 0, 5);
    			     if(tsnsr!='06'){
    			    	 DCellWeb1.setFormulaByLabel('H24', 'IF((H20-H21-H22-H23)<0,0,Round(H20-H21-H22-H23,2))');
    			     }else{
    			    	 DCellWeb1.setFormulaByLabel('H24', 'IF(((H20*JDYJBL)-(H21*JDYJBL)-H22-H23)<0,0,Round((H20*JDYJBL)-(H21*JDYJBL)-H22-H23,2))');
    			     }
        			
        		}else if (yjfs=='2'){//预缴方式为“按照税务机关确定的其他方法预缴”的纳税人填报第13、15行
        			 for(var i=10;i<=24;i++){
            			 DCellWeb1.SetCellInput(8, i, 0, 5);
            			 DCellWeb1.SetCellDouble(8,i,0,0);
            		 }
        			 //您的核定方式是按照税务机关确定的其他方法预缴，请前往大厅进行申报2018.7.21封晨光确认
        			 jQuery(".toolBar input[type='button']").attr('disabled', 'true');
        			 alert('您的核定方式是按照税务机关确定的其他方法预缴，请前往大厅进行申报!');
        			 DCellWeb1.setValByLabel("A2", '您的核定方式是按照税务机关确定的其他方法预缴，请前往大厅进行申报!');
        			 return;
        			 DCellWeb1.SetCellInput(8, 22, 0, 2);
        			 DCellWeb1.SetCellInput(8, 24, 0, 2);
        		}else{
        			//实行按照实际利润额预缴的纳税人，本项=“本年累计金额”的第3行+第4行-第5行-第6行-第7行-第8行。
        			 DCellWeb1.setFormulaByLabel('H18', 'Round((H12+H13-H14-H15-H16-H17),2)');
        			 DCellWeb1.SetCellInput(8, 18, 0, 5);
        			// 实行按照实际利润额预缴的纳税人或按照上一纳税年度应纳税所得额平均额预缴的纳税人填报。自动带出（25%），不可修改
        			 DCellWeb1.SetCellDouble(8,19,0,0.25);
        			 DCellWeb1.SetCellInput(8, 19, 0, 5);
        			//实行按照实际利润额预缴的纳税人或按照上一纳税年度应纳税所得额平均额预缴的纳税人填报。自动带出，不可修改。
        			 DCellWeb1.SetCellInput(8, 20, 0, 5);
        			 if(tsnsr!='10'){//中石油、中石化按照年度应纳所得税额50%
        		        DCellWeb1.setFormulaByLabel('H20', 'if(Round(H18*H19,2)>0,Round(H18*H19,2),0)');
        			 
        			 }else{
        				 DCellWeb1.setFormulaByLabel('H20', 'if(Round(H18*H19*0.5,2)>0,Round(H18*H19*0.5,2),0)'); 
        			 }
        			 //实行按照实际利润额预缴的纳税人或按照上一纳税年度应纳税所得额平均额预缴的纳税人，本项带出的值=本表第11行-12行-13行-14行，当带出值＜0时，本栏填0
        			 //06省内按特定比例就地预缴企业所得税二级分支机构”信息的纳税人）按比例就地预缴税款时，本项带出的值=第11行×就地预缴比例-第12行×就地预缴比例-第13行-第14行，当带出值＜0时，本栏填0
        			 DCellWeb1.SetCellInput(8, 24, 0, 5);
    			     if(tsnsr!='06'){
    			    	 DCellWeb1.setFormulaByLabel('H24', 'IF((H20-H21-H22-H23)<0,0,Round(H20-H21-H22-H23,2))');
    			     }else{
    			    	 DCellWeb1.setFormulaByLabel('H24', 'IF(((H20*JDYJBL)-(H21*JDYJBL)-H22-H23)<0,0,Round((H20*JDYJBL)-(H21*JDYJBL)-H22-H23,2))');
    			     }
        		}
        	}
        	//总分机构类型控制（企业类型）
             qylx =jsonObj.data.HEAD.QYLX;
        	if(qylx){
        		if(qylx=='1'){
        			//总机构的纳税人
        		  if(XXWL_BZ!='Y'){//需求确认上年不是小微的企业总机构不让填写
        			for(var i=27;i<=29;i++){
        				 DCellWeb1.SetCellInput(8, i, 0, 2);
        				 //总机构相关比例先锁死
        				
        				// DCellWeb1.SetCellInput(6, i, 0, 2);
        			}
        			//总机构相关比例先锁死
        			 if(kdqfzjglx=='3'||kdqfzjglx=='4'){//如果是跨地市，跨县区的话比例放开总机构分摊和全部分支机构分摊
        				 if(zyyh!='Y'){//中原银行不让编辑
        				 DCellWeb1.SetCellInput(6, 27, 0, 2);
        				 DCellWeb1.SetCellInput(4, 29, 0, 2);
        				 }else{
        					 DCellWeb1.SetCellInput(6, 27, 0, 5);
            				 DCellWeb1.SetCellInput(4, 29, 0, 5);
        				 }
        				 DCellWeb1.setValByLabel("A2", '您是跨地市、跨县区的总机构可以修改总机构分摊比例和全部分支机构分摊比例!');
               			
    				 }
        			// DCellWeb1.SetCellInput(4, 29, 0, 2);
        			//企业类型为“跨地区经营汇总纳税企业总机构”的纳税人填报。第16行＝第17+18+19行。

        			 DCellWeb1.setFormulaByLabel('H26', 'Round((H27+H28+H29),2)'); 
        			 if(!SBBZT||SBBZT==''){
        			 //对于“跨省、自治区、直辖市、计划单列市”的，总机构分摊比例填报25%；对于“跨地市”、“跨县（区）”的，其总机构分摊比例由各省自行维护确定。
        			 DCellWeb1.SetCellDouble(6, 27, 0, 0.25);
        			
        			//对于“跨省、自治区、直辖市、计划单列市”的，财政集中分配比例填报25%，对于“跨地市”、“跨县（区）”的，其财政集中分配比例由各省自行维护确定。
        			 DCellWeb1.SetCellDouble(6, 28, 0, 0.25);
        			
        			 //对于“跨省、自治区、直辖市、计划单列市”的，全部分支机构分摊比例填报50%；对于“跨地市”、“跨县（区）”的，全部分支机构分摊比例由各省自行维护确定。
        			 DCellWeb1.SetCellDouble(4, 29, 0, 0.5);
        		   }
        			
        			 //职能比例
        			 
        			 //总机构分摊应补（退）所得税额公式计算，所以锁死
        			 DCellWeb1.SetCellInput(8, 27, 0, 5);
        			 DCellWeb1.setFormulaByLabel('H27', 'Round((H24*F27),2)'); 
        			 DCellWeb1.SetCellInput(8, 28, 0, 5);
        			 DCellWeb1.setFormulaByLabel('H28', 'Round((H24*F28),2)'); 
        			 DCellWeb1.SetCellInput(6, 29, 0, 5);
        			 DCellWeb1.SetCellInput(8, 29, 0, 5);
        			 //只能部门分摊税额计算公式注释掉由分配表保存时推送过来
        			// DCellWeb1.setFormulaByLabel('H29', 'Round((H24*D29*F29),2)'); 
        		  }else{
        			  
        			 jQuery(".toolBar input[type='button']").attr('disabled', 'true');
        			 $('#delete').attr('disabled',false);
         			 alert('您为“跨地区经营汇总纳税企业总机构”，您上一纳税年度为小型微利企业，分支机构无法分配税款，请您修改并提醒分支机构前往税务机关修改汇总纳税企业登记信息，然后再进行申报。!');
         			 DCellWeb1.setValByLabel("A2", '您为“跨地区经营汇总纳税企业总机构”，您上一纳税年度为小型微利企业，分支机构无法分配税款，请您修改并提醒分支机构前往税务机关修改汇总纳税企业登记信息，然后再进行申报。');
         			 return;
        			 
        		  }
        				//小微，高新技术，递延收益，科技型中小企业放开
        			// DCellWeb1.SetCellInput(2, 33, 0, 2);
        			 DCellWeb1.SetCellInput(2, 34, 0, 2);
        			// DCellWeb1.SetCellInput(5, 33, 0, 2);
        			 DCellWeb1.SetCellInput(5, 34, 0, 2);
        			 DCellWeb1.SetCellInput(8, 33, 0, 2);
        			 DCellWeb1.SetCellInput(8, 34, 0, 2);
        			 DCellWeb1.SetCellInput(10, 33, 0, 2);
        			 DCellWeb1.SetCellInput(10, 34, 0, 2);
        		}else if(qylx=='2'){//分支机构
        			
        			 for(var i=10;i<=29;i++){
            			 DCellWeb1.SetCellInput(8, i, 0, 5);
            		 }
        		 // if(XXWL_BZ!='Y'){//需求确认上年不是小微的分支机构不让填写    2018.7.11 经灵卫，胡晓杰确认分支机构放开不管小微
        			/* DCellWeb1.SetCellInput(8, 30, 0, 2);
         			 DCellWeb1.SetCellInput(8, 31, 0, 2);*/ //分支机构全部带出不让手动填写
        			 
        			 //分支机构分配比例和税额从接口带出，表上不放置公式计算
        			  if(SBBZT!='2'&&SBBZT!='3'){
        			  alert('您属于分支机构，申报前请确认总机构已申报!');
        			  DCellWeb1.setValByLabel("A2", '您属于分支机构，申报前请确认总机构已申报!');
        			  }
        			 if(kdqfzjglx=='2'){//跨省,(跨省分支机构让企业自己填写)
        			      if(fzjgfpbl && fzjgftsdse){
                              DCellWeb1.SetCellDouble(8, 30, 0, fzjgfpbl);
                              DCellWeb1.SetCellDouble(8, 31, 0, fzjgftsdse);
                          }
                            DCellWeb1.SetCellInput(8, 30, 0, 2);
        			        DCellWeb1.SetCellInput(8, 31, 0, 2);
            			    DCellWeb1.setValByLabel("A2", '您是跨省或直辖市的分支机构，请按照实际情况填写!');
              			//跨地市分支机构带出比例税额
        			 }else{
        				 DCellWeb1.SetCellDouble(8, 30, 0, fzjgfpbl);
            			 DCellWeb1.SetCellDouble(8, 31, 0, fzjgftsdse);
        			 }
        		 /* }else{
        			  DCellWeb1.setValByLabel("A2", '您是符合小型微利企业的分支机构，不允许填写20-21行!');
            			
        		  }*/
        		}else {
        			//一般企业
        			//小微，高新技术，递延收益，科技型中小企业放开
        			// DCellWeb1.SetCellInput(2, 33, 0, 2);
        			 DCellWeb1.SetCellInput(2, 34, 0, 2);
        			// DCellWeb1.SetCellInput(5, 33, 0, 2);
        			 DCellWeb1.SetCellInput(5, 34, 0, 2);
        			 DCellWeb1.SetCellInput(8, 33, 0, 2);
        			 DCellWeb1.SetCellInput(8, 34, 0, 2);
        			 DCellWeb1.SetCellInput(10, 33, 0, 2);
        			 DCellWeb1.SetCellInput(10, 34, 0, 2);
        		}
        	}
        	//弥补年度亏损带数开始
        	
        	curSeg.mbkslj();
       
        },
        
        //弥补亏损
        mbkslj : function(){
        	if(MBNDKS){
        		var col3=DCellWeb1.getValByLabel('H12');
        		var col4=DCellWeb1.getValByLabel('H13');
        		var col5=DCellWeb1.getValByLabel('H14');
        		var col6=DCellWeb1.getValByLabel('H15');
        		var col7=DCellWeb1.getValByLabel('H16');
        		//var bllj=DCellWeb1.getValByLabel('H17');
        		var tempdata = curSeg.formatFloatSw(col3+col4-col5-col6-col7,3).toFixed(2);
        		if(tempdata<=0){
        			 DCellWeb1.SetCellDouble(8, 17, 0, 0);
        		}else{
        			var ssssss=new Number(MBNDKS);
        				if(ssssss<=tempdata){
        					 DCellWeb1.SetCellDouble(8, 17, 0, ssssss);
        				}else{
        					 DCellWeb1.SetCellDouble(8, 17, 0, tempdata);
       					    
        				}
        		
        		}
        	}else{
        		 DCellWeb1.SetCellDouble(8, 17, 0, 0);
        	}
        	
        },
        formatFloatSw: function (f, digit) {
            var m = Math.pow(10, digit);
            return parseInt(f * m, 10) / m;

        },

      
        initTishi: function () {

            if (SBBZT == undefined || SBBZT == '') {
                //jm_yj_a.onOpenTbsxsm();
            }

        },

        //验证1、3行数据关系
        //疑问 减免所得税额本期是否可以为负数
        //累计  弥补和减免不能为负数 
        //本期 弥补能为负数 
        // 本期  减免不能为负数
        //TO_DO 减免要小于应纳税所得
        checkNoNegative1425: function () {
            DCellWeb1.inputCheck = function (col, row, sheet, text) {

                var argsArray = ['F14', 'F12', 'F13', 'F18', 'F32', 'F37', 'G15', 'G12', 'G13', 'G14', 'G17', 'G18', 'G25'];
                for (var ii = 0; ii < argsArray.length; ii++) {
                    var cellTag = argsArray[ii];
                    var cellObj = DCellWeb1.LabelToCell_J(cellTag);
                    if (cellObj.row == row && cellObj.col == col) {
                        if (text < 0) {
                            DCellWeb1.SetCellDouble(cellObj.col, cellObj.row, 0, 0);
                            return false;
                        }
                    }
                }

                return true;
            }
        },

//导入
        openPopWin:function(){
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=jm_yj_a&&startRow=8&&sheetIndex=1&templatePath=../../printModel/qysds/qysds_yj_a_2018/sb_qysds_jm_yj_a_2018.zip',
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
        pageFlowControl: function (jsonObj, xhrArgs) {
            //var SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
        	
        	
            switch (parseInt(jsonObj.code)) {
                // 查询操作返回标志
                case 0:
                   curSeg.initData(jsonObj);
                  
                   curSeg.initControl(jsonObj);
                   
//                    curSeg.initTishi();

                    //自动计算可修改的单元格需要重新赋值

                    DCellWeb1.ProtectFormula = false;

                    break;
                // 添加、更新以及状态更新操作返回标志
                case 1:
                    bAdd = false;
                    alert("保存成功");
                    
                    top.main.changeNodeStatus(SBBZL_DM, "1");
//                    document.getElementById("save").disabled = false;
//                    document.getElementById("delete").disabled = false;

                    break;
                // 删除操作返回标志
                case 2:
                    alert("删除成功");
                    top.main.changeNodeStatus(SBBZL_DM, "0");
                    bAdd = true;
                    curSeg.onQuery();
                    /*curSeg.initData(jsonObj);
                    curSeg.initControl(jsonObj);*/
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
                        jQuery(".toolBar input[type='button']").attr('disabled', 'true');
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

function tabIn() {
    jm_yj_a.onQuery();
}