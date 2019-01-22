var mainHtml = top;
$(document).ready(function () {
    wddb.onload();
});
var wddb = (function () {
	var init=function(){
        layui.use('form', function(){
            var form = layui.form
        });
    }
    return {
        onload:function () {
        	init();
        	wddb.dateShow();
//           	jbxx.tableData();
        	jcptTools.initOtherSystemUrl();
        	wddb.fillData(0);
        },
        /*日期显示*/
        dateShow:function(){
            layui.use('laydate', function(){
               var laydate = layui.laydate;
               laydate.render({
                 elem: '#dateStart'
               });
               laydate.render({
                 elem: '#dateEnd'
               });
           })
        },
	 	fillData:function(start){
	 		var status = $("#status_select").val();
	 		var date_start = $("#dateStart").val();
	 		var date_end = $("#dateEnd").val();
	 		$('#wep_bgxx_table').DataTable({
	 			"columns": [
				    {
						"data": "SXMC"
					},
	 			    {
	 					"data": "SXMC"
	 				},
	 				/*{
	 					"data": "XTMC"
	 				},*/
	 				{
	 					"data": "SXRQ"
	 				},
	 				{
	 					"data": "CLJGDM"
	 				}
	 			],
	 			"columnDefs": [
	 				{
	 					"targets": 4,
	 					"data": null,
	 					"render": function(data, type, full, meta) {
	 						if((full.CLJGDM=='0'||full.CLJGDM=='41'||full.CLJGDM=='42'||full.CLJGDM=='37')&&full.CZDZ!=null&&full.CZDZ!=''){
	 							return '<a href="#"><span class="btn wxl_bg_lan1" onClick="javascript:wddb.msgBL(\''+full.SXMC+'\',\''+full.ID+'\',\''+full.YWID+'\',\''+full.CZDZ+'\',\''+full.XTDM+'\');">办理</span><span class="btn wxl_bg_yel"  onClick="javascript:wddb.msgHL(\''+full.ID+'\');">忽略</span></a>'
	 						}else{
	 							return '';
	 						}
	 					}
	 				},
	 				{
						"targets": 3,
						"data": null,
						"render": function(data, type, full, meta) {
							return jcptTools.convertStatus(data);
						}
					},
					{
                        "targets": 0,
                        "data": null,
                        "render": function (data, type, full, meta) {
                            return meta.row + 1 + meta.settings._iDisplayStart;
                        }
                    },{
                        "targets": 1,
                        "data": null,
                        "render": function (data, type, full, meta) {
                        	if((full.CLJGDM=='0'||full.CLJGDM=='41'||full.CLJGDM=='42'||full.CLJGDM=='37')&&full.CZDZ!=null&&full.CZDZ!=''){
                        		return '<a style="text-decoration:underline;color:blue;" href="javascript:void(0);" onClick="javascript:wddb.msgBL(\''+full.SXMC+'\',\''+full.ID+'\',\''+full.YWID+'\',\''+full.CZDZ+'\',\''+full.XTDM+'\');">'+data+'</a>';
                        	}else{
                        		return data;
                        	}
                        }
                    }
	 			],
	 			"destroy":true,
	 			"bPaginate" : true,// 分页按钮
	 			"serverSide": true,
	 			"ajax": jcptTools.cnf.contextPath+"/server/main/listData.do",
	 			"ordering": false,
	 			"info": false,
	 			"displayStart":start,
	 			"pageLength": 5,
	 			"pagingType": "simple_numbers",
	 			"lengthChange": false,
	 			"searching": false,
	 			"language":{
	 				"zeroRecords":"没有找到记录"
	 			},
	 			"fnServerParams": function ( aoData ) { 
	 				aoData['SXLX'] = '1';
	 				aoData['CZDM_DBSX'] = '1';
	 				aoData["columns"] = null;
	 				if(status!='-1'){
	 					aoData["CLJGDM"] = status;
	 				}
	 				aoData["DATE_START"] = date_start;
	 				aoData["DATE_END"] = date_end;
	 			}, 
	 			"fnInitComplete": function (oSettings, json) {/*判断认证状态显示字体颜色*/
	 				
		        }
	 		});
	 	},
	 	redirectBS:function(){
	 		mainHtml.$(".m_nav li").siblings("li").find("a").removeClass("j_active");
	 		mainHtml.$("#wybs_a").addClass("j_active");
	 		mainHtml.$("#main_iframe").attr("src","bsdt_zrr_iframe.html");
	 	},
	 	msgHL:function(id){
			   if(id==null){
				   return;
			   }
			   if(confirm("确定要忽略这条消息吗？")){
				   baseTools.xhrAjax({
		                url : '/server/main/updateStatus.do',
		                bShow : false,
		                params : {
		                	ID:id,
							CZDM:'1'
		                },
		                callback : [function (datas, xhrArgs) {
		                	if(datas.code != '1' && datas.code != undefined){
					    		jcptTools.alert(datas.msg);
								return;
					    	}else{
					    		jcptTools.msg('操作成功！');
					    		var oSettings = $('#wep_bgxx_table').dataTable().fnSettings();
					    		var start = oSettings._iDisplayStart;
						 		var total = $('#wep_bgxx_table').DataTable().page.info().recordsTotal;
						 		var length = oSettings._iDisplayLength;
						 		if(start==(total-1)){
						 			start = start-length;
						 			if(start<0){
						 				start = 0;
						 			}
						 		}
						 		wddb.fillData(start);
					    	}
		                }]
		            });
			   }
		   },
		   msgBL:function(dmv,id,ywid,dz,xtdm){
			   if(dmv==null||dmv.length==0||id==null||id.length==0||ywid==null||ywid.length==0||dz==null||dz.length==0||xtdm==null||xtdm.length==0){
				   jcptTools.alert('参数丢失，无法办理！');
				   return;
			   }
			   mainHtml.dbObj = {};
			   mainHtml.dbObj.title = dmv;
			   mainHtml.dbObj.id = id;
			   mainHtml.dbObj.ywid = ywid;
			   mainHtml.dbObj.dz = jcptTools.getFullUrl(xtdm,dz);
			   wddb.redirectDb();
		   },
		 //首页待办 更多事件
	        redirectDb : function(){
	        	//DQ_YHSF
	        	var dq_yhsf = jcptTools.getUserDataByKey("DQ_YHSF");
	        	if(dq_yhsf=='ZRR'){ //||dq_yhsf=='BSR'
	        		mainHtml.$("#main_iframe").attr("src","bsdt_iframe_ztree_zrr.html");
	        	}else{
	        		mainHtml.dzswjCommon.mainHtmlLiCheck("75019");
	    	 		mainHtml.$("#main_iframe").attr("src","bsdt_iframe_ztree.html");
	        	}
	        }
	}
})();