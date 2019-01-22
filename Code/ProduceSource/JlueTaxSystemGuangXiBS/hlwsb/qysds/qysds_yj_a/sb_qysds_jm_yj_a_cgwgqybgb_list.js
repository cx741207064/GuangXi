$(document).ready(function() {
    jm_yj_a_cgwgqybgb_list.onLoad();
});

/**
 *
 *关联业务往来报告表附表8
 *
 */
var jm_yj_a_cgwgqybgb_list = (function() {
    //私有属性
    var curSeg;

    var tbList;
    var gridObj;
    var SBBZT = "";
    
    var winObj,winParam;

    //公有方法
    return {
        onLoad:function() {
        	curSeg = jm_yj_a_cgwgqybgb_list;
        	winObj = frameElement.api;
        	winParam = winObj.data;
            tbList = $("#tbList");
            var cols = [{ title:'被投资外国企业名称', name:'WGQYMC' ,width:200, align:'center'},
            			{ title:'所在国纳税人识别号', name:'NSRSBHSZG' ,width:140, align:'center'},
            			{ title:'成立地', name:'CLD' ,width:150, align:'center'},
                        { title:'报告人持股比例', name:'CGBLBGR' ,width:100, align:'center'},
                        { title:'序号', name:'LSXH' ,width:150, align:'left',hidden:true }
                        ];
            gridObj = tbList.mmGrid({
                height:355,
                checkCol: false,
                indexColWidth: 35,
                showBackboard:false,
                autoLoad:false,
                cols: cols
            });
			
			var dataList = winParam.other.data.dataList;
			for(var i=0;i<dataList.length;i++){
				dataList[i].CGBLBGR = (Number(dataList[i].CGBLBGR)*100).toFixed(4)+'%';
			}
             gridObj.load(winParam.other.data.dataList);
             
             
            gridObj.on('cellSelected', function(e,item,rowIndex,index){
     			//点击行时触发
    	 		 winParam.paretWin.jm_yj_a_cgwgqybgb.selectXHHCallBack({LSXH:item.LSXH});
    
    	 		 window.setTimeout(function(){ winObj.close();});
        		
 	
 			 });
 			 if(winParam.other.data.SBBZT=='2'||winParam.other.data.SBBZT=='3'){
 				
 			 	document.getElementById("addt").disabled = true;
 			 }
 			
     
     
            //删除组件释放内存
            $(window).unload(function () {
            	
            });
        },
        
        onEdit:function(){
        	var LSXH = '';
        	var rows = gridObj.selectedRows();
        	if (rows.length == 0 || rows.length > 1) {
                alert("请选择一条记录!");
                return false;
            }else{
            	LSXH=rows[0].LSXH;
            }
  
        	winParam.paretWin.jm_yj_a_cgwgqybgb.selectXHHCallBack({LSXH:LSXH});
        	winObj.close();
        
        },
        onAdd:function(){
        	baseTools.xhrAjax({
				url : "/hlwsb/qysds/getSB_QYSDS_JM_YJ_A_CGWGQYBGB_NEWXH.do",
				params : {
					SBBZL_DM : winParam.SBBZL_DM,
					SSSQ_Q:winParam.SSSQ_Q,SSSQ_Z:winParam.SSSQ_Z,NSRLX_DM : winParam.NSRLX_DM
				},
				callback : [jm_yj_a_cgwgqybgb_list.addCallBack]
			});
        	
        
        },
        addCallBack:function(jsonObj, xhrArgs){
        	
        	winParam.paretWin.jm_yj_a_cgwgqybgb.selectXHHCallBack({LSXH:jsonObj.data.NEWXH});
        	winObj.close();
        
        },
        
        /**
         * 需要的时候可以覆盖该方法
         * 在ajax调用中，在得到数据时调用该方法
         */
        pageFlowControl:function(jsonObj, xhrArgs) {
            switch (parseInt(jsonObj.code)) {
                //查询操作返回标志
                case 0:
                    break;
                default:
            }
        }
    };
})();