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
    var SBBZT="";
    var MBNDKS = 0;
    var winObj = '';
    var NSRLX_DM = "";

    var XXWL_BZ = "";


    // 是否是添加
    var bAdd = true;
    var gzbz="";    //更正标志


    
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
    var isjd = "N";//是否需要填写季度信息
    var cyrsPjsLjs = 0;//之前季度从业人数平均数合计（金三带出）
    var zczePjsLjs = 0;//之前季度资产总额平均数合计（金三带出）
    var ysbJds = 0;//之前已经申报季度数(金三带出）
    var zfjglx_dm='';//总分机构类型代码
    var kdqsszyqylx_dm=''//跨地区税收转移企业类型代码
    var sfsyxxwlqy=''//上年度  是否属于小型微利企业  Y是 N 否
    var xwbs_sfbcyz=''//是否跟总机构小微标识 保持一致
    var sj_sfsyxxwlqy=''//上级机构 是否属于小型微利企业  Y是 N 否
    var fbxx = '';//零申报页面传过来的标志
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
                NSRLX_DM: NSRLX_DM
            });
            window.location = "/hlwsb/qysds_print/qysds_yj_a_2019/sb_qysds_jm_yj_a_2019.html?" + str;
        },
        onEditSNLJ: function (obj) {
            DCellWeb1.editLjs(["LJJE"], obj.checked);
        },
        onLoad: function () {
            curSeg = jm_yj_a;
            // 引用报表控制
            fbxx = baseTools.getUrlQueryString("FBXX");
            if(fbxx){
                //2019-10-15 如果从零申报页面传过来的请求需禁用保存外其他按钮。
                dcell(DCellWeb1, "/hlwsb/printModel/qysds/qysds_yj_a_2019/sb_qysds_jm_yj_a_fbxx.cll");
                $('.line').hide();
                $('.delete').hide();
                $("#print").hide();
                $('.editBtn').hide();
                $('.sb').hide();
                $('.lsb').hide();
                $('.able').hide();
                $('.zancun').hide();
                $('.bzwd').hide();
                $(':input[value="保存"]').val('确认并提交');
            }else{
                dcell(DCellWeb1, "/hlwsb/printModel/qysds/qysds_yj_a_2019/sb_qysds_jm_yj_a_2019.cll");
            }
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
            gzbz = baseTools.getUrlQueryString("gz");
            if ("Y" == gzbz) {  //如果是更正，仅仅显示保存按钮
                $('.line').hide();
                $('.cancel').hide();
                $('.print').hide();
            }
            baseTools.xhrAjax({
                url: "/hlwsb/qysds/getSB_QYSDS_JM_YJ_A_2015.do",
                params: {
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, NSRLX_DM: NSRLX_DM,GZ: gzbz
                },
                callback: [curSeg.pageFlowControl]
            });
        },
        
        /**
         * 静默保存, 没有经过表内关系校验直接保存
         */
        onStaticSave: function () {
            if (SBBZT == '2' || SBBZT == '3') {
                return;
            }

            var data = DCellWeb1.submitJsonjs({
                cols: ["LJJE"],
                headCols : ["YJFS00","YJFS01","YJFS02","QYLX00","QYLX01","QYLX02","KJXZXQY00","KJXZXQY01",
                    "GXJSQY00","GXJSQY01", "JSRG00","JSRG01", "ZJGFTBL","CZJZFPBL","QBFZJGFPBL","ZNBMFPBL",
                    "SFSYXXWL00","SFSYXXWL01","GJXZHY00","GJXZHY01", "JCCYRS","JMCYRS","JCZCZE","JMZCZE"],
                returnType: "object"
            });
            this.tjclCode(data.HEAD,arr);
            
            var url = bAdd ? "/hlwsb/qysds/insertSB_QYSDS_JM_YJ_A_2015.do" : "/hlwsb/qysds/updateSB_QYSDS_JM_YJ_A_2015.do";

            baseTools.xhrAjax({
                url: url,
                params: {
                    DATA: JSON.stringify(data),
                    SBBXH: SBBXH,
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q,
                    SSSQ_Z: SSSQ_Z,
                    NSRLX_DM: NSRLX_DM,
                    STATIC: 1
                },
                callback: [function (jsonObj, xhrArgs) {
                	if(parseInt(jsonObj.code)==1){
                		bAdd = false;//保存成功修改状态。避免再次保存主键冲突
                	}
                }]
            });
        },
        
        // 保存数据
        onSave: function () {
            if (gzbz == "Y") {
                if (!confirm("保存后会将原数据覆盖，确定要保存吗？")) {
                    return;
                }
            } else if (SBBZT == '2' || SBBZT == '3'){
                alert('已申报，无法保存数据!');
                return;
            }
           

            var isValidSuccess = true;
         
           
            var data = DCellWeb1.submitJsonjs({
                cols: ["LJJE"],
                headCols : ["YJFS00","YJFS01","YJFS02","QYLX00","QYLX01","QYLX02","KJXZXQY00","KJXZXQY01",
                    "GXJSQY00","GXJSQY01", "JSRG00","JSRG01", "ZJGFTBL","CZJZFPBL","QBFZJGFPBL","ZNBMFPBL",
                    "SFSYXXWL00","SFSYXXWL01","GJXZHY00","GJXZHY01", "JCCYRS","JMCYRS","JCZCZE","JMZCZE"],
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
                  NSRLX_DM: NSRLX_DM,
				  GZ: gzbz
              },
              callback: [curSeg.pageFlowControl]
          });
        },
        //检查校验各个复选框是否填写
        saveCheck:function(data) {

            //暂时在此校验表中的按季度填报信息区域的编辑状态
            var arr = ["GJXZHY00","GJXZHY01", "JCCYRS","JMCYRS","JCZCZE","JMZCZE"];
            for(var i = 0; i < arr.length; i++){
                var temp = DCellWeb1.GetCellVar_J(arr[i]);
                if(DCellWeb1.isCellEditing(temp.col,temp.row)){
                    alert("请结束编辑状态!");
                    return false;
                }
            }


            var mon_q = SSSQ_Q.substr(5,2);
            var mon_z = SSSQ_Z.substr(5,2);
            if(qylx!='2'){
                if(parseInt(mon_z)-parseInt(mon_q) == 2 || "03,06,09,12".indexOf(mon_z) > -1){
                    //2019-04-22 赵振国反馈需求：填写的数必须大于等于0，如果小于0时，提示：您的季初资产总额或者季末资产总额不允许小于等于0，请核实您填写的数据，如果确实需要填写，请到办税服务厅办理！
                    //2019-10-15 根据广西需求修改季初资产总额和季末资产总额修改为大于等于0
                    if (data.HEAD.JCZCZE < 0 || data.HEAD.JMZCZE < 0) {
                        alert("您的季初资产总额或者季末资产总额不允许小于等于0，请核实您填写的数据，如果确实需要填写，请到办税服务厅办理！");
                        return false;
                    }
                }
            }

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
            var GXJSQYArr = ["GXJSQY00","GXJSQY01"];

            if(this.getCheckFlag(GXJSQYArr)) {
                alert("请选择“是否属于高新技术企业”");
                return false;
            }

            var KJXZXQYArr = ["KJXZXQY00","KJXZXQY01"];
            	
              if(this.getCheckFlag(KJXZXQYArr)) {
              	alert("请选择“是否属于科技型中小企业”");
              	return false;
              }
              
            var JSRGArr = ["JSRG00","JSRG01"];
            	
              if(this.getCheckFlag(JSRGArr)) {
              	alert("请选择“是否属于技术入股递延纳税事项”");
              	return false;
              }

            var sfsyxxwlArr = ["SFSYXXWL00","SFSYXXWL01"];

            // if(this.getCheckFlag(sfsyxxwlArr)) {
            //     alert("请选择“是否属于小型微利企业”");
            //     return false;
            // }
            //2019-07-13 根据需求修改 去除验证
            // var jtdbqyw =  DCellWeb1.getValByLabel('H13');
            // if(jtdbqyw<0){
            //     alert('加：特定业务计算的应纳税所得额本年累计金额必须大于等于0！');
            //     return false;
            // }
            //
            // //由于接口问题这个校验先不管
            // if(jtdbqyw<jtdyw){
            //     alert('加：特定业务计算的应纳税所得额本年累计金额:'+jtdbqyw+'必须大于等于本年上期本行金额:'+jtdyw);
            //     return false;
            // }
            
            /*var yysr = DCellWeb1.getValByLabel('H10');
            var yycb = DCellWeb1.getValByLabel('H11');
            if(jtdbqyw<0 && Math.abs(jtdbqyw) >= yysr - yycb){
                  alert('第四行 加：特定业务计算的应纳税所得额：冲回的预计利润，不应小于营业收入-营业成本！');
                  return false;
            }*/
              
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
                     alert("第12行“减免所得税额”不能大于第11行“应纳所得税额”，请删除附表3后重新填写此表！");
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
               //非季末月份疑似小微添加提示--特殊纳税人和分支机构不提示
                if(tsnsr != '05' && tsnsr != '06' && qylx != '2'){
                    var month_z =SSSQ_Z.substr(5,2);
                    var sjlre = DCellWeb1.getValByLabel("H18");
                    if("03,06,09,12".indexOf(month_z) == -1 && Number(sjlre) <= 3000000){
                        if(confirm("根据您填报A200000第9行“实际利润额/应纳税所得额”，初步判断您很可能符合小型微利企业条件，为减轻您的办税负担，建议您联系主管税务机关调整纳税期限为按季度预缴申报，感谢您的配合！\n" +
                            "点击【确认】按钮为终止申报变更申报期限，点击【取消】按钮继续完成保存。")){
                            alert("请及时联系主管税务机关变更申报期限。");
                            return false;
                        }else {
                            if(confirm("根据您填报的信息，很可能符合小型微利企业条件。如您认为本年度内有可能符合小型微利企业条件，建议您终止本次申报，尽快调整为按季度预缴申报，"+
                                "符合条件时可充分享受小型微利企业所得税优惠政策。如您确认不符合小型微利企业条件，不享受小型微利企业所得税优惠政策，请继续完成申报。\n" +
                                "点击【确认】按钮为终止申报变更申报期限，点击【取消】按钮继续完成保存。")){
                                alert("请及时联系主管税务机关变更申报期限。");
                                return false;
                            }
                        }
                    }
                }
               //季末时校验按季度填报信息区域
               if(isjd == "Y" && (qylx == "0" || qylx =="1")){

                   var gjxzhyArr = ["GJXZHY00","GJXZHY01"];
                   if(this.getCheckFlag(gjxzhyArr) && isjd == "Y") {
                       alert("请选择“是否属于国家限制或禁止行业”");
                       return false;
                   }

                   var jccyrs =  DCellWeb1.getValByLabel('B36');
                   if(jccyrs <= 0){
                       alert('季初从业人数必须大于0！');
                       return false;
                   }

                   var jmcyrs =  DCellWeb1.getValByLabel('H36');
                  if(jmcyrs <= 0){
                       alert('季末从业人数必须大于0！');
                       return false;
                   }

                   var jczcze =  DCellWeb1.getValByLabel('B37');
                   if(jczcze < 0){
                       alert('季初资产总额必须大于等于0！');
                       return false;
                   }else if(jczcze == 0){
                       if(!confirm("请确认季初资产总额为0，点击【确定】继续保存，点击【关闭】返回修改。")){
                           return false;
                       }
                   }
                   var jmzcze =  DCellWeb1.getValByLabel('H37');
                   if(jmzcze < 0){
                       alert('季末资产总额必须大于等于0！');
                       return false;
                   }else if(jmzcze == 0){
                       if(!confirm("请确认季末资产总额为0，点击【确定】继续保存，点击【关闭】返回修改。")){
                           return false;
                       }
                   }
                   //小型微利企业判断
                   curSeg.XXWLOper(data);
                    var xxylqy00 = DCellWeb1.GetCellDouble(8,38,0);
                   var xwbs = '';
                   //符合小微企业且为月报用户添加提示，并添加小微标识Y，否则制空
                   if(xxylqy00 == 1 && SSSQ_Q.substr(5,2) == SSSQ_Z.substr(5,2)){
                       alert("温馨提醒：\n" +
                           "您属于小型微利企业，请联系主管税务机关，自下个月起企业所得税调整为按季申报，且已经调整，本年内不再变更。");
                       xwbs = "Y";
                   }
                   //添加小微标识
                   data.HEAD["XWBS"] = xwbs;

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
          //自动选择是否小型微利企业
          XXWLOper:function(data){
              if(qylx=='0' && (zfjglx_dm=='2' || zfjglx_dm=='3')&&(tsnsr!='05' && tsnsr!='06' && tsnsr!='10')){
                  // alert("温馨提醒：您纳税人税务登记信息中的“总分机构类型代码”为“分支机构”或“分总机构”，且特殊纳税人维护信息“特殊纳税人类型”不为：“中石油、中石化按照年度应纳所得税额50%比例就地预缴企业所得税二级分支机构”、“省内按特定比例就地预缴企业所得税二级分支机构”和“只申报不缴纳的企业所得税二级分支机构”，小型微利企业标识默认为“否”。");
                  alert("温馨提醒：您属于不具备法人资格的分支机构，小型微利企业默认为“否”。")
                  DCellWeb1.SetCellDouble(10,38,0,1);
                  DCellWeb1.SetCellDouble(8,38,0,0);
                  data.HEAD.SFSYXXWL=1;
              }else{
                  jm_yj_a.xwbz_4(data);
              }
              if(qylx=='2' && xwbs_sfbcyz=='Y') {
                  //分支机构就地缴纳未否，跟上级机构小微标志保持同步
                  if(sj_sfsyxxwlqy=="Y"){
                      alert("温馨提醒：因分支机构就地缴纳标识未“否”，总机构上年度认定为小型微利企业的下设二级分支机构，总机构本期小型微利标志未“是”，分支机构需跟总机构保持一致选“是”")
                      DCellWeb1.SetCellDouble(8,38,0,1);
                      DCellWeb1.SetCellDouble(10,38,0,0);
                      data.HEAD.SFSYXXWL=0;
                  }
                  if(sj_sfsyxxwlqy=="N"){
                      alert("温馨提醒：因分支机构就地缴纳标识未“否”，总机构上年度认定为小型微利企业的下设二级分支机构，总机构本期小型微利标志未“否”，分支机构需跟总机构保持一致选“否”")
                      DCellWeb1.SetCellDouble(10,38,0,1);
                      DCellWeb1.SetCellDouble(8,38,0,0);
                      data.HEAD.SFSYXXWL=1;
                  }
              }
          },
        xwbz_4:function(data){//小微判断的4大标准，因为一般企业和总机构都用到，提取出来公用
            var isxw = "Y";
            //对金三传来的数据进行处理
            if(!cyrsPjsLjs || cyrsPjsLjs == ''){
                cyrsPjsLjs = 0;
            }
            if(!zczePjsLjs || zczePjsLjs == ''){
                zczePjsLjs = 0;
            }
            if(!ysbJds || ysbJds == ''){
                ysbJds = 0;
            }
            //国家限制或禁止行业未选择否不是小微
            var gjxzhy01 = DCellWeb1.GetCellDouble(5,38,0);
            //平均从业人数大于300不是小微
            var jccyrs = DCellWeb1.GetCellDouble(2,36,0);//季初从业人数
            var jmcyrs = DCellWeb1.GetCellDouble(8,36,0);//季末从业人数
            var pjcyrs = Math.round((Number(cyrsPjsLjs) + (jccyrs + jmcyrs)/2)/(Number(ysbJds)+1));
            // 平均资产总额大于5000万元不是小微
            var jczcze = DCellWeb1.GetCellDouble(2,37,0)*10000;//季初资产总额
            var jmzcze = DCellWeb1.GetCellDouble(8,37,0)*10000;//季末资产总额
            var pjzcze = curSeg.formatFloatSw((Number(zczePjsLjs)*10000 + (jczcze + jmzcze)/2)/(Number(ysbJds)+1),3).toFixed(2);
            //应纳税所得额（本表第9行）大于3000000不是小微
            var ynssde = DCellWeb1.GetCellDouble(8,18,0);
            if(Number(gjxzhy01) == 0){
                alert("温馨提醒：您属于国家限制或禁止行业，不符合小型微利企业标准。");
                isxw = "N";
            }else if(Number(pjcyrs)> 300){
                alert("温馨提醒：您的平均从业人数大于300，不符合小型微利企业标准。");
                isxw = "N";
            }else if(Number(pjzcze) > 50000000){
                alert("温馨提醒：您的平均资产总额大于5000万元，不符合小型微利企业标准。");
                isxw = "N";
            }else if(Number(ynssde) > 3000000){
                isxw = "N";
                alert("温馨提醒：您的应纳税所得额大于300万元，不符合小型微利企业标准。");
            }
            if(isxw == 'Y'){
                alert("温馨提醒：您符合小型微利企业标准，已将小型微利标志勾选为是。");
                DCellWeb1.SetCellDouble(8,38,0,1);
                DCellWeb1.SetCellDouble(10,38,0,0);
                data.HEAD.SFSYXXWL=0;
            }else {
                DCellWeb1.SetCellDouble(10,38,0,1);
                DCellWeb1.SetCellDouble(8,38,0,0);
                data.HEAD.SFSYXXWL=1;
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
            zfjglx_dm=jsonObj.data.YMKZ.ZFJGLX_DM;
            kdqsszyqylx_dm=jsonObj.data.YMKZ.KDQSSZYQYLX_DM;
            sfsyxxwlqy=jsonObj.data.YMKZ.SFSYXXWLQY;
            xwbs_sfbcyz=jsonObj.data.YMKZ.XWBS_SFBCYZ;
            sj_sfsyxxwlqy=jsonObj.data.YMKZ.SJ_SFSYXXWLQY;
            /**
             * 分支机构分摊比例和分配税额初始值及更正时取接口数据，其他时候取数据库数据
             */
            if(SBBZT==0||SBBZT==5){
                //分支机构分摊比例
                fzjgfpbl=jsonObj.data.YMKZ.fzjgfpbl;
                //分支机构分摊所得税额
                fzjgftsdse=jsonObj.data.YMKZ.fzjgftsdse;
            }else{
                //分支机构分摊比例
                fzjgfpbl=jsonObj.data.BODY[20].LJJE;
                //分支机构分摊所得税额
                fzjgftsdse=jsonObj.data.BODY[21].LJJE;
            }
            cyrsPjsLjs = jsonObj.data.YMKZ.cyrsPjsLjs;//之前季度从业人数平均数合计
            zczePjsLjs = jsonObj.data.YMKZ.zczePjsLjs;//之前季度资产总额平均数合计
            ysbJds = jsonObj.data.YMKZ.ysbJds;//之前已经申报季度数
            //加特定
            jtdyw=jsonObj.data.YMKZ.jtdyw;
            //特定业务预缴
            tdywyj=jsonObj.data.YMKZ.tdywyj;
            //上期已缴金额
            sqyjje=jsonObj.data.YMKZ.sqyjje;
            //跨地市、跨县区标志主要用于判断是否放开比例
            kdqfzjglx=jsonObj.data.YMKZ.kdqfzjglx;
            //中原银行标志
            var djxh=hlwsbTools.getDjxh();
            if('10114101000241681576'==djxh){
            	zyyh='Y';
            }
            //控制季度
            curSeg.istbjd(jsonObj.data);
            this.tjclDeCode(jsonObj.data.HEAD,arr); //解析复选框
            DCellWeb1.initDataToCell({
                cols: ["LJJE"],
                headCols: ["YJFS00","YJFS01","YJFS02","QYLX00","QYLX01","QYLX02","SFSYXXWL00","SFSYXXWL01","KJXZXQY00","KJXZXQY01","GXJSQY00","GXJSQY01","JSRG00","JSRG01","ZJGFTBL","CZJZFPBL","QBFZJGFPBL","ZNBMFPBL","GJXZHY00","GJXZHY01", "JCCYRS","JMCYRS","JCZCZE","JMZCZE"],
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
                    case 'GJXZHY':
                        kjzdArr = ["GJXZHY00","GJXZHY01"];
                        break;
  	           }
      	    	for(var i=0; i<kjzdArr.length; i++) {
                    if (name != kjzdArr[i]) {
                        var map = DCellWeb1.GetCellVar_J(kjzdArr[i]);
                        DCellWeb1.SetCellDouble(map.col, map.row, map.sheet, 0);
                    }

                }
      	    };
            //监控文本输入框
            DCellWeb1.inputCheck = function (col, row, sheet, text) {
                // 为空时为0
                if (!text) {
                    text = 0;
                }
                //弥补亏损
                if (col == 8 && (row == 12 || row == 13 || row == 14 || row == 15 || row == 16)) {
                    curSeg.mbkslj();
                }
                if (col == 8 && row == 13) {//非房地产开发企业（按照行业代码判断），填写此行给予提示，“房地产开发企业销售未完工开发产品取得的预售收入，按照税收规定的预计计税毛利率计算的预计毛利额填入此行。请确认是否填写正确。”
                    var hy_dm = hlwsbTools.getNsrxx("HY_DM");
                    if (hy_dm != 7010) {
                        alert("房地产开发企业销售未完工开发产品取得的预售收入，按照税收规定的预计计税毛利率计算的预计毛利额填入此行。请确认是否填写正确。");
                    }
                }
                //2019-10-15根据广西需求将季初资产总额修改为可填写大于等于0
                if ((col == 8 || col == 2) && row == 37) {//2019-04-22 赵振国反馈需求：填写的数必须大于0，如果小于等于0时，提示：您的季初资产总额或者季末资产总额不允许小于等于0，请核实您填写的数据，如果确实需要填写，请到办税服务厅办理！
                    var zcze = parseFloat(text);
                    if (zcze < 0) {
                        alert("您的季初资产总额或者季末资产总额不允许小于等于0，请核实您填写的数据，如果确实需要填写，请到办税服务厅办理！");
                    }
                }

   			  //非季末时提示
   			//   if(row >= 36 && row <= 38 && isjd == "N" &&　text != 0){
   			//       alert("本区域按季度填报，当前属期不是季度末了，无法填报本区域数据");
              //     DCellWeb1.SetCellDouble(col, row, 0, 0);
              //     return false;
              //     //DCellWeb1.ClearArea(col,row,col,row,sheet,1);
              // }
        		 return true;
        	 };
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

        	 //总机构分摊比例,财政集中分配比例,全部分支机构分配比例判断是否修改过
           /* var zjgftbl=jsonObj.data.HEAD.ZJGFTBL;
            var czjzfpbl=jsonObj.data.HEAD.CZJZFPBL;
            var qbfzjgfpbl = jsonObj.data.HEAD.QBFZJGFPBL;*/

        	var yjfs =jsonObj.data.HEAD.YJFS;
        	if(yjfs){
        		if (yjfs=='1'){//预缴方式为“按照上一纳税年度应纳税所得额平均额预缴”的纳税人填报第9、10、11、12、13、15行
        		 for(var i=10;i<=17;i++){
        			 DCellWeb1.SetCellInput(8, i, 0, 5);
                     DCellWeb1.SetCellColor('H'+i,DCellWeb1.FindColorIndex(0xEBEBEB,1));
        			 if(i!=16){
        				 DCellWeb1.SetCellDouble(8,i,0,0);//固定资产需要提数
        			 }
        			
        		 }
        		 DCellWeb1.SetCellInput(8, 23, 0, 5);
                    DCellWeb1.SetCellColor('H23',DCellWeb1.FindColorIndex(0xEBEBEB,1));
        		 
        		// 实行按照实际利润额预缴的纳税人或按照上一纳税年度应纳税所得额平均额预缴的纳税人填报。自动带出（25%），不可修改
    			 DCellWeb1.SetCellDouble(8,19,0,0.25);
    			 DCellWeb1.SetCellInput(8, 19, 0, 5);
                    DCellWeb1.SetCellColor('H19',DCellWeb1.FindColorIndex(0xEBEBEB,1));
    			//实行按照实际利润额预缴的纳税人或按照上一纳税年度应纳税所得额平均额预缴的纳税人填报。自动带出，不可修改。
    			 DCellWeb1.SetCellInput(8, 20, 0, 5);
                    DCellWeb1.SetCellColor('H20',DCellWeb1.FindColorIndex(0xEBEBEB,1));
    			     if(tsnsr!='10'){//中石油、中石化按照年度应纳所得税额50%
    		            DCellWeb1.setFormulaByLabel('H20', 'if(Round(H18*H19,2)>0,Round(H18*H19,2),0)');
    			 
    			       }else{
    				    DCellWeb1.setFormulaByLabel('H20', 'if(Round(H18*H19*0.5,2)>0,Round(H18*H19*0.5,2),0)'); 
    			       }
    			     
    			     //实行按照实际利润额预缴的纳税人或按照上一纳税年度应纳税所得额平均额预缴的纳税人，本项带出的值=本表第11行-12行-13行-14行，当带出值＜0时，本栏填0
        			 //06省内按特定比例就地预缴企业所得税二级分支机构”信息的纳税人）按比例就地预缴税款时，本项带出的值=第11行×就地预缴比例-第12行×就地预缴比例-第13行-第14行，当带出值＜0时，本栏填0
    			     DCellWeb1.SetCellInput(8, 24, 0, 5);
                    DCellWeb1.SetCellColor('H24',DCellWeb1.FindColorIndex(0xEBEBEB,1));
    			     if(tsnsr!='06'){
    			    	 DCellWeb1.setFormulaByLabel('H24', 'IF((H20-H21-H22-H23)<0,0,Round(H20-H21-H22-H23,2))');
    			     }else{
    			    	 DCellWeb1.setFormulaByLabel('H24', 'IF(((H20*JDYJBL)-(H21*JDYJBL)-H22-H23)<0,0,Round((H20*JDYJBL)-(H21*JDYJBL)-H22-H23,2))');
    			     }
        			
        		}else if (yjfs=='2'){//预缴方式为“按照税务机关确定的其他方法预缴”的纳税人填报第13、15行
        			 for(var i=10;i<=24;i++){
            			 DCellWeb1.SetCellInput(8, i, 0, 5);
                         DCellWeb1.SetCellColor('H'+i,DCellWeb1.FindColorIndex(0xEBEBEB,1));
            			 DCellWeb1.SetCellDouble(8,i,0,0);
            		 }
        			 //您的核定方式是按照税务机关确定的其他方法预缴，请前往大厅进行申报2018.7.21封晨光确认
        			 jQuery(".toolBar input[type='button']").attr('disabled', 'true');
        			 alert('您的核定方式是按照税务机关确定的其他方法预缴，请前往大厅进行申报!');
        			 DCellWeb1.setValByLabel("A2", '您的核定方式是按照税务机关确定的其他方法预缴，请前往大厅进行申报!');
        			 return;
        			 DCellWeb1.SetCellInput(8, 22, 0, 2);
        			 DCellWeb1.SetCellInput(8, 24, 0, 2);
                    DCellWeb1.SetCellColor('H22',DCellWeb1.FindColorIndex(0xFFFFFF,1));
                    DCellWeb1.SetCellColor('H24',DCellWeb1.FindColorIndex(0xFFFFFF,1));
        		}else{
        			//实行按照实际利润额预缴的纳税人，本项=“本年累计金额”的第3行+第4行-第5行-第6行-第7行-第8行。
        			 DCellWeb1.setFormulaByLabel('H18', 'Round((H12+H13-H14-H15-H16-H17),2)');
        			 DCellWeb1.SetCellInput(8, 18, 0, 5);
                    DCellWeb1.SetCellColor('H18',DCellWeb1.FindColorIndex(0xEBEBEB,1));
        			// 实行按照实际利润额预缴的纳税人或按照上一纳税年度应纳税所得额平均额预缴的纳税人填报。自动带出（25%），不可修改
        			 DCellWeb1.SetCellDouble(8,19,0,0.25);
        			 DCellWeb1.SetCellInput(8, 19, 0, 5);
                    DCellWeb1.SetCellColor('H19',DCellWeb1.FindColorIndex(0xEBEBEB,1));
        			//实行按照实际利润额预缴的纳税人或按照上一纳税年度应纳税所得额平均额预缴的纳税人填报。自动带出，不可修改。
        			 DCellWeb1.SetCellInput(8, 20, 0, 5);
                    DCellWeb1.SetCellColor('H20',DCellWeb1.FindColorIndex(0xEBEBEB,1));

                    if(tsnsr!='10'){//中石油、中石化按照年度应纳所得税额50%
        		        DCellWeb1.setFormulaByLabel('H20', 'if(Round(H18*H19,2)>0,Round(H18*H19,2),0)');
        			 
        			 }else{
        				 DCellWeb1.setFormulaByLabel('H20', 'if(Round(H18*H19*0.5,2)>0,Round(H18*H19*0.5,2),0)'); 
        			 }
        			 //实行按照实际利润额预缴的纳税人或按照上一纳税年度应纳税所得额平均额预缴的纳税人，本项带出的值=本表第11行-12行-13行-14行，当带出值＜0时，本栏填0
        			 //06省内按特定比例就地预缴企业所得税二级分支机构”信息的纳税人）按比例就地预缴税款时，本项带出的值=第11行×就地预缴比例-第12行×就地预缴比例-第13行-第14行，当带出值＜0时，本栏填0
        			 DCellWeb1.SetCellInput(8, 24, 0, 5);
                    DCellWeb1.SetCellColor('H24',DCellWeb1.FindColorIndex(0xEBEBEB,1));
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
                             DCellWeb1.SetCellColor('F27',DCellWeb1.FindColorIndex(0xEBEBEB,1));
                             DCellWeb1.SetCellColor('D29',DCellWeb1.FindColorIndex(0xEBEBEB,1));

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
                      DCellWeb1.SetCellColor('H27',DCellWeb1.FindColorIndex(0xEBEBEB,1));
                      DCellWeb1.SetCellColor('H28',DCellWeb1.FindColorIndex(0xEBEBEB,1));
                      DCellWeb1.SetCellColor('H29',DCellWeb1.FindColorIndex(0xEBEBEB,1));
                      DCellWeb1.SetCellColor('F29',DCellWeb1.FindColorIndex(0xEBEBEB,1));
                      //只能部门分摊税额计算公式注释掉由分配表保存时推送过来
        			// DCellWeb1.setFormulaByLabel('H29', 'Round((H24*D29*F29),2)'); 
        		  }else{
        			  
        			 jQuery(".toolBar input[type='button']").attr('disabled', 'true');
        			 $('#delete').attr('disabled',false);
         			 alert('您为“跨地区经营汇总纳税企业总机构”，您上一纳税年度为小型微利企业，分支机构无法分配税款，请您修改并提醒分支机构前往税务机关修改汇总纳税企业登记信息，然后再进行申报。!');
         			 DCellWeb1.setValByLabel("A2", '您为“跨地区经营汇总纳税企业总机构”，您上一纳税年度为小型微利企业，分支机构无法分配税款，请您修改并提醒分支机构前往税务机关修改汇总纳税企业登记信息，然后再进行申报。');
         			 return;
        			 
        		  }
        				//高新技术，递延收益，科技型中小企业放开
        			 DCellWeb1.SetCellInput(2, 33, 0, 2);
        			 DCellWeb1.SetCellInput(2, 34, 0, 2);
        			 DCellWeb1.SetCellInput(5, 33, 0, 2);
        			 DCellWeb1.SetCellInput(5, 34, 0, 2);
        			 DCellWeb1.SetCellInput(8, 33, 0, 2);
        			 DCellWeb1.SetCellInput(10, 33, 0, 2);
                    var fbxxdata = jsonObj.data.HEAD;
                    if(fbxxdata!=""){
                        //高新技术产业
                        if("1"==fbxxdata.GXJSQY){
                            DCellWeb1.SetCellDouble(2,33,0,0);
                            DCellWeb1.SetCellDouble(5,33,0,1);
                        }else{
                            DCellWeb1.SetCellDouble(2,33,0,1);
                            DCellWeb1.SetCellDouble(5,33,0,0);
                        }
                        //技术型中小企业
                        if("1"==fbxxdata.KJXZXQY){
                            DCellWeb1.SetCellDouble(8,33,0,0);
                            DCellWeb1.SetCellDouble(10,33,0,1);
                        }else{
                            DCellWeb1.SetCellDouble(8,33,0,1);
                            DCellWeb1.SetCellDouble(10,33,0,0);
                        }
                        //技术入股递延纳税事项
                        if("1"==fbxxdata.JSRG){
                            DCellWeb1.SetCellDouble(2,34,0,0);
                            DCellWeb1.SetCellDouble(5,34,0,1);
                        }else{
                            DCellWeb1.SetCellDouble(2,34,0,1);
                            DCellWeb1.SetCellDouble(5,34,0,0);
                        }
                    }
        		}else if(qylx=='2'){//分支机构
        			
        			 for(var i=10;i<=29;i++){
            			 DCellWeb1.SetCellInput(8, i, 0, 5);
                         DCellWeb1.SetCellColor('H'+i,DCellWeb1.FindColorIndex(0xEBEBEB,1));

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
                            DCellWeb1.SetCellColor('H30',DCellWeb1.FindColorIndex(0xFFFFFF,1));
                            DCellWeb1.SetCellColor('H31',DCellWeb1.FindColorIndex(0xFFFFFF,1));
            			    DCellWeb1.setValByLabel("A2", '您是跨省或直辖市的分支机构，请按照实际情况填写!');
              			//跨地市分支机构带出比例税额
        			 }else{
        				 DCellWeb1.SetCellDouble(8, 30, 0, fzjgfpbl);
            			 DCellWeb1.SetCellDouble(8, 31, 0, fzjgftsdse);
        			 }
                    DCellWeb1.SetCellDouble(2,33,0,0);
                    DCellWeb1.SetCellDouble(5,33,0,0);
                    DCellWeb1.SetCellDouble(2,34,0,0);
                    DCellWeb1.SetCellDouble(5,34,0,0);
                    DCellWeb1.SetCellDouble(8,33,0,0);
                    DCellWeb1.SetCellDouble(10,33,0,0);
        		 /* }else{
        			  DCellWeb1.setValByLabel("A2", '您是符合小型微利企业的分支机构，不允许填写20-21行!');
            			
        		  }*/
        		}else if(qylx == '0') {
        			//一般企业
        			//高新技术，递延收益，科技型中小企业放开
                    DCellWeb1.SetCellInput(2, 33, 0, 1);
        			DCellWeb1.SetCellInput(2, 34, 0, 1);
        			DCellWeb1.SetCellInput(5, 33, 0, 1);
        			DCellWeb1.SetCellInput(5, 34, 0, 1);
        			DCellWeb1.SetCellInput(8, 33, 0, 1);
        			DCellWeb1.SetCellInput(10, 33, 0, 1);
                    var fbxxdata = jsonObj.data.HEAD;
                    if(fbxxdata!=""){
                        //高新技术产业
                        if("1"==fbxxdata.GXJSQY){
                            DCellWeb1.SetCellDouble(2,33,0,0);
                            DCellWeb1.SetCellDouble(5,33,0,1);
                        }else{
                            DCellWeb1.SetCellDouble(2,33,0,1);
                            DCellWeb1.SetCellDouble(5,33,0,0);
                        }
                        //技术型中小企业
                        if("1"==fbxxdata.KJXZXQY){
                            DCellWeb1.SetCellDouble(8,33,0,0);
                            DCellWeb1.SetCellDouble(10,33,0,1);
                        }else{
                            DCellWeb1.SetCellDouble(8,33,0,1);
                            DCellWeb1.SetCellDouble(10,33,0,0);
                        }
                        //技术入股递延纳税事项
                        if("1"==fbxxdata.JSRG){
                            DCellWeb1.SetCellDouble(2,34,0,0);
                            DCellWeb1.SetCellDouble(5,34,0,1);
                        }else{
                            DCellWeb1.SetCellDouble(2,34,0,1);
                            DCellWeb1.SetCellDouble(5,34,0,0);
                        }
                    }
        		}
        		//上年度年报符合小微微利企业，本年度总机构和分支机构所有属期的月季报申报表中16-21行为0
        		if((qylx=="1" || qylx=="2") && sfsyxxwlqy=="Y"){
                    for(var i=26;i<=31;i++){
                        DCellWeb1.SetFormula(8, i, 0,'');
                        DCellWeb1.SetCellDouble(8, i, 0, 0);
                        DCellWeb1.SetCellInput(8, i, 0, 5);
                        DCellWeb1.SetCellColor('H'+i,DCellWeb1.FindColorIndex(0xEBEBEB,1));
                    }
                    // for(var i=27;i<=29;i++){
                    //     DCellWeb1.SetCellDouble(6, i, 0, 0);
                    //     DCellWeb1.SetCellInput(6, i, 0, 5);
                    //     DCellWeb1.SetCellColor('F'+i,DCellWeb1.FindColorIndex(0xEBEBEB,1));
                    // }
                    // DCellWeb1.SetCellDouble(4, 29, 0, 0);
                    // DCellWeb1.SetCellInput(4, 29, 0, 5);
                    // DCellWeb1.SetCellColor('D'+i,DCellWeb1.FindColorIndex(0xEBEBEB,1));
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
        //按季度填报信息区域控制
        istbjd:function(data){
            qylx = data.HEAD.QYLX//企业类型
            //一般企业和总机构去判季度区域是否需填报
            if(qylx == "0" || qylx == "1"){
                //判断是否为季报或当前时间为季末
                var mon_q = SSSQ_Q.substr(5,2);
                var mon_z = SSSQ_Z.substr(5,2);
                if(parseInt(mon_z)-parseInt(mon_q) == 2 || "03,06,09,12".indexOf(mon_z) > -1){
                    isjd = "Y";
                    //解除单元格锁定
                    DCellWeb1.SetCellInput(2,36,0,3);
                    DCellWeb1.SetCellInput(8,36,0,3);
                    DCellWeb1.SetCellInput(2,37,0,2);
                    DCellWeb1.SetCellInput(8,37,0,2);
                    DCellWeb1.SetCellInput(2,38,0,1);
                    DCellWeb1.SetCellInput(5,38,0,1);
                    //修改颜色
                    DCellWeb1.SetCellColor('B36',DCellWeb1.FindColorIndex(0xFFFFFF,1));
                    DCellWeb1.SetCellColor('H36',DCellWeb1.FindColorIndex(0xFFFFFF,1));
                    DCellWeb1.SetCellColor('B37',DCellWeb1.FindColorIndex(0xFFFFFF,1));
                    DCellWeb1.SetCellColor('H37',DCellWeb1.FindColorIndex(0xFFFFFF,1));
                    var sqQmcyrs = data.YMKZ.sqQmcyrs;//上期期末从业人数
                    var sqQmzcze = data.YMKZ.sqQmzcze;//上期期末资产总额
                    var sqGjxzhjzhy = data.YMKZ.sqGjxzhjzhy;//上期是否为国建限制或禁止行业
                    if( !sqQmcyrs || sqQmcyrs==''){
                        sqQmcyrs = 0;
                    }
                    if( !sqQmzcze || sqQmzcze==''){
                        sqQmzcze = 0;
                    }
                    //用户尚未保存过赋值接口数据
                    //2019-10-15 广西需求不再进行带出季末从业人数与季末资产总额
                    if(SBBZT == '0' || SBBZT == '5'){
                        DCellWeb1.SetCellDouble(2,36,0,sqQmcyrs);
                        //DCellWeb1.SetCellDouble(8,36,0,sqQmcyrs);
                        DCellWeb1.SetCellDouble(2,37,0,sqQmzcze);
                        //DCellWeb1.SetCellDouble(8,37,0,sqQmzcze);

                        if(sqGjxzhjzhy == "Y"){
                            DCellWeb1.SetCellDouble(2,38,0,1);
                        }else {
                            DCellWeb1.SetCellDouble(5,38,0,1);
                        }
                    }
                }
            }
            if(isjd != 'Y'){
                DCellWeb1.SetCellString(2,36,0,'');
                DCellWeb1.SetCellString(8,36,0,'');
                DCellWeb1.SetCellString(2,37,0,'');
                DCellWeb1.SetCellString(8,37,0,'');
            }
        },
        formatFloatSw: function (f, digit) {
            var m = Math.pow(10, digit);
            return parseInt(f * m, 10) / m;

        },

      
        /*initTishi: function () {

            if (SBBZT == undefined || SBBZT == '5') {
                jm_yj_a.onOpenTbsxsm();
            }

        },
        onOpenTbsxsm:function() {
            window.showModalDialog("/hlwsb/bbsxsm/qysds_a_2019.html",'',"dialogWidth=575x;dialogHeight=400px;center:yes;status:no;scroll:no;");
        },*/

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
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=jm_yj_a&&startRow=8&&sheetIndex=1&templatePath=printModel/qysds/qysds_yj_a_2019/sb_qysds_jm_yj_a_2019.zip',
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
    //XML导入
        openZlsc: function () {
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/qysds/sb_qysds_jm_yj_a.html?bbzl=qysds_jm_yj_a&bbmc=jm_yj_a',
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
            if(ret){
                //项目
                var xmdata=ret.xmdata.data;
                if(xmdata.length>0){
                    for (var i = 0; i < xmdata.length; i++) {
                        DCellWeb1.setValue(8, 10 + i,0,xmdata[i].ljje);
                    }
                }
                //附报信息
                var fbxxdata=ret.fbxxdata;
                if(fbxxdata!=""){
                    //高新技术产业
                    if(1==fbxxdata.gxjsqy){
                        DCellWeb1.SetCellDouble(2,33,0,1);
                        DCellWeb1.SetCellDouble(5,33,0,0);
                    }else if(0==fbxxdata.gxjsqy){
                        DCellWeb1.SetCellDouble(2,33,0,0);
                        DCellWeb1.SetCellDouble(5,33,0,1);
                    }
                    //技术型中小企业
                    if(1==fbxxdata.kjxzxqy){
                        DCellWeb1.SetCellDouble(8,33,0,1);
                        DCellWeb1.SetCellDouble(10,33,0,0);
                    }else if(0==fbxxdata.kjxzxqy){
                        DCellWeb1.SetCellDouble(8,33,0,0);
                        DCellWeb1.SetCellDouble(10,33,0,1);
                    }
                    //技术入股递延纳税事项
                    if(1==fbxxdata.jsrgdynssx){
                        DCellWeb1.SetCellDouble(2,34,0,1);
                        DCellWeb1.SetCellDouble(5,34,0,0);
                    }else if(0==fbxxdata.jsrgdynssx){
                        DCellWeb1.SetCellDouble(2,34,0,0);
                        DCellWeb1.SetCellDouble(5,34,0,1);
                    }
                }
                //按季度填报信息
                var ajdtbdata=ret.ajdtbdata;
                if(ajdtbdata!=""){
                    //季初从业人数
                    DCellWeb1.SetCellDouble(2,36,0,ajdtbdata.jccyrs);
                    //季末从业人数
                    DCellWeb1.SetCellDouble(8,36,0,ajdtbdata.jmcyrs);
                    //季初资产总额
                    DCellWeb1.SetCellDouble(2,37,0,ajdtbdata.jczcze);
                    //季末资产总额
                    DCellWeb1.SetCellDouble(8,37,0,ajdtbdata.jmzcze);
                    //国家限制或禁止行业
                    if(1==ajdtbdata.gjxzhjzqy){
                        DCellWeb1.SetCellDouble(2,38,0,1);
                        DCellWeb1.SetCellDouble(5,38,0,0);
                    }else if("0"==ajdtbdata.gjxzhjzqy){
                        DCellWeb1.SetCellDouble(2,38,0,0);
                        DCellWeb1.SetCellDouble(5,38,0,1);
                    }
                    //小型微利企业
                    if(1==ajdtbdata.xxwlqy){
                        DCellWeb1.SetCellDouble(8,38,0,1);
                        DCellWeb1.SetCellDouble(10,38,0,0);
                    }else if("0"==ajdtbdata.xxwlqy){
                        DCellWeb1.SetCellDouble(8,38,0,0);
                        DCellWeb1.SetCellDouble(10,38,0,1);
                    }
                }
            }

        },
        //申报
        onSb:function(){
            if(SBBZT == "" || SBBZT == "1" || !bAdd){
                if (confirm('确认是否进行申报提交？')) {
                    baseTools.xhrAjax({
                        url: "/hlwsb/sbkk/tsxCheck.do",
                        params: {
                            NSRSBH: baseTools.getUserZh(),
                            NSRLX_DM: hlwsbTools.getNSRLX_DM(),
                            SSSQ_Q: SSSQ_Q,
                            SSSQ_Z: SSSQ_Z,
                            CMD: '0'
                        },
                        callback: [curSeg.pageFlowControlSb]
                    });
                }
            }else if(SBBZT=="2"){
                alert("企业所得税已申报！");
            }else{
                alert("请先保存企业所得税表，再执行申报操作！");
            }
        },
        //能否进行实时扣款
        onCxkk:function(jsonObj){
            var ZSPM_DM = jsonObj.data.ZSPM_DM;
            var YZPZXH = jsonObj.data.YZPZXH;
            baseTools.xhrAjax({
                url:"/hlwsb/sbkk/cxkk.do",
                params:{
                    NSRSBH:baseTools.getUserZh(),NSRLX_DM:NSRLX_DM,SSSQ_Q:SSSQ_Q,
                    SSSQ_Z:SSSQ_Z,CMD:'1',ZSPM_DM:ZSPM_DM,YZPZXH:YZPZXH
                },
                callback:[curSeg.pageKkControl]
            });
        },
        //扣款金额提示
        onKkje:function(jsonObj){
            var kkje = jsonObj.data.KKJE;
            var kkjg_dm = jsonObj.data.KKJG_DM;
            var znjje = jsonObj.data.ZNJJE;
            var fkje = jsonObj.data.FKJE;
            var lxje = jsonObj.data.LXJE;
            if(kkjg_dm==0001){
                var kkstr ="实际扣款金额为"+kkje+"。\n";
                if(znjje && znjje !=0.00){
                    kkstr += "其中：滞纳金金额为"+znjje+",";
                }
                if(fkje && fkje !=0.00){
                    kkstr += "罚款金额为"+fkje+",";
                }
                if(lxje && lxje !=0.00){
                    kkstr += "利息金额为"+lxje+",";
                }
                kkstr += "是否立即缴款。";
                if(confirm(kkstr)){
                    curSeg.onKk(jsonObj);
                }
            }
        },
        //进行扣款
        onKk:function(jsonObj) {
            var ZSPM_DM = jsonObj.data.ZSPM_DM;
            var YZPZXH = jsonObj.data.YZPZXH;
            baseTools.xhrAjax({
                url:"/hlwsb/sbkk/kk.do",
                params:{
                    NSRSBH:baseTools.getUserZh(),NSRLX_DM:NSRLX_DM,SSSQ_Q:SSSQ_Q,
                    SSSQ_Z:SSSQ_Z,CMD:'1',ZSPM_DM:ZSPM_DM,YZPZXH:YZPZXH
                },
                callback:[curSeg.pageKkControl]
            });
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
//                   curSeg.initTishi();
                    //自动计算可修改的单元格需要重新赋值
                    DCellWeb1.ProtectFormula = false;
                    
                    var sfStaticSave= jsonObj.data.YMKZ.STATICSAVE;
                    if("Y"==sfStaticSave){
                        curSeg.onStaticSave();
                    }
                    break;
                // 添加、更新以及状态更新操作返回标志
                case 1:
                    bAdd = false;
                    alert("保存成功");
                    if(fbxx){
                        var winObj = frameElement.api;
                        winObj.close();
                        winObj.opener.lsb.onlSb();
                    }
                    //top.main.changeNodeStatus(SBBZL_DM, "1");
//                    document.getElementById("save").disabled = false;
//                    document.getElementById("delete").disabled = false;

                    break;
                // 删除操作返回标志
                case 2:
                    alert("删除成功");
                    //top.main.changeNodeStatus(SBBZL_DM, "0");
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
                    }else if(reason.indexOf("按照您上期申报的信息")>-1){
                        reason = reason.substring(reason.indexOf("按照您上期申报的信息"));
                        jQuery(".toolBar input[type='button']").attr('disabled', 'true');
                        alert(reason);
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
        },
        /**
         * 20190918 新增申报功能，接收返回状态
         * @param jsonObj
         * @param xhrArgs
         */
        pageFlowControlSb: function (jsonObj, xhrArgs) {
            switch (parseInt(jsonObj.code)) {
                //申报成功
                case 1:
                    if (jsonObj.msg) {
                        top.main.setCxxx(jsonObj.msg);//将申报返回的各种信息赋值给在线客服cxxx变量 20170508 zzg
                        var retMsg1 = jsonObj.msg;
                        //广西税局要求，附加税申报成功后直接在附加税页面进行扣款操作
                        if (retMsg1.indexOf("申报成功") > -1) {
                            curSeg.onCxkk(jsonObj);
                        }
                    }
                    break;
                //提示性检查
                case 8:
                    if (jsonObj.data.CODE == '-1') {
                        alert(jsonObj.msg);
                        //curSeg.openSbywCnt(jsonObj.msg);//将异常信息放置到浮窗内展示给纳税人
                        return;
                    }else{
                        var PTBM = "sbCommand";//平台编码
                        //code为00，必填表验证通过，不用提示校验
                        baseTools.xhrAjax({
                            url: "/hlwsb/sbkk/sb.do",
                            params: {
                                NSRSBH: baseTools.getUserZh(),
                                NSRLX_DM: NSRLX_DM,
                                SSSQ_Q: SSSQ_Q,
                                SSSQ_Z: SSSQ_Z,
                                CMD: '0',
                                ZSPM_DM: '',
                                PTBM: PTBM,
                                SFYCZB: ''
                            },
                            callback: [curSeg.pageFlowControlSb]
                        });
                    }
                    break;
                case -1://保存出错返回标志
                    var msg = "";
                    if (jsonObj.msg.indexOf("SbKkException") > -1) {
                        msg = jsonObj.msg.substring(jsonObj.msg.indexOf("SbKkException") + 14, jsonObj.msg.length);
                        top.main.setCxxx(msg);
                    } else {
                        msg = jsonObj.msg;
                        if (msg.indexOf("异常原因：") > -1) {
                            msg = msg.substring(msg.indexOf("异常原因：") + 5);
                        }
                        top.main.setCxxx(msg);//将申报返回的各种信息赋值给在线客服cxxx变量 20170508 zzg
                    }
                    alert(msg);
                    break;
                default:
            }
        },
        //扣款返回结果
        pageKkControl: function (jsonObj, xhrArgs) {
            var msg = "";
            switch (parseInt(jsonObj.code)) {
                case 1:
                    msg = jsonObj.msg;
                    if(msg.indexOf("获取的预算分配比例为多个")>-1){
                        msg = "获取的预算分配比例为多个，请前往大厅办理该业务。";
                    }
                    alert(msg);
                    break;
                //查询扣款信息成功标志
                case 4:
                    if(jsonObj.msg.indexOf("可以进行扣款操作") > -1){
                        curSeg.onKkje(jsonObj);
                    }else {
                        alert("申报成功！\r\n"+jsonObj.msg);
                    }
                    break;
                case -1://查询扣款信息出错返回标志
                    if (jsonObj.msg.indexOf("SbKkException") > -1) {
                        msg = jsonObj.msg.substring(jsonObj.msg.indexOf("SbKkException") + 14, jsonObj.msg.length);
                    } else {
                        msg = jsonObj.msg;
                        if (msg.indexOf("异常原因：") > -1) {
                            msg = msg.substring(msg.indexOf("异常原因：") + 5);
                        }else if(msg.indexOf("没有欠税信息") > -1) {
                            msg ="申报成功，当前纳税人：" + baseTools.getUserZh()+"应缴纳税税款不超过一元，无需进行网上扣款。";
                        }
                    }
                    alert(msg);
                    break;
                default:
            }
        }
    };
})();

function tabIn() {
    jm_yj_a.onQuery();
}