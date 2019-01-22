// 使用窗口组件加载时注释下面的代码
$(document).ready(function () {
    fphz.onLoad();
});

var fphz = (function () {
    // 私有属性
    var curSeg;
    var YGZNSRLX_DM = '';//纳税人类型
    var oldsbh = '';//老税号
    return {
      
        onExport: function() {DCellWeb1.ExportExcelDlg();},
        onLoad: function () {
            curSeg = fphz;
            
            var sbbzl_dm=  baseTools.getUrlQueryString("SBBZL_DM");
            if(sbbzl_dm){
            	dcell(DCellWeb1,"/hlwsb/printModel/zzs/ybnsr/sb_zzs_fp_hz.cll");
            }else{
            	dcell(DCellWeb1,"/hlwsb/printModel/zzs/ybnsr/sb_zzs_fp_hz_db.cll");
            }
            
            var oldNsrsbh = hlwsbTools.getOldSbh();
            var shxydm = hlwsbTools.getUserZh();
            if (oldNsrsbh && oldNsrsbh != shxydm) {
                oldsbh = oldNsrsbh;
            }
            
            curSeg.hiddenRowBySbbzl(sbbzl_dm);     
            curSeg.onQuery();

            // 删除组件释放内存
            $(window).unload(function () {});
        },

        // 查询数据
        onQuery: function () {
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM"); // 获取页面申报表种类代码标记
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");
            var url = "/hlwsb/zzs/ybnsr/getSB_ZZS_FP_HZ.do";
            YGZNSRLX_DM = hlwsbTools.getYGZNSRLX_DM();
            baseTools.xhrAjax({
                url: url,
                params: {SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,YGZNSRLX_DM:YGZNSRLX_DM,OLDSBH:oldsbh},
                callback: [ curSeg.pageFlowControl ]
            });
        },

        initData: function (jsonObj) {
            DCellWeb1.initDataToCell({
                cols: ["COL01","COL02","COL03","COL04"],
                data: jsonObj.data,
                nsrxxCols:["NSRMC","NSRSBH","SSSQ","TBRQ"],
                iszdjskxg : true
            });
            
        if(SBBZL_DM){
        	//对于纯营改增、非营改增避免企业开票商品编码选择错误，在此这两类纳税人数据重新筛选处理
        	if("10"==YGZNSRLX_DM){
        		
        		for(var i = 6 ;i<=16 ; i++){
        			if(i==6 || i==9 || i==13 || i==16){
        				//将营改增行数据放置到对应非营改增行次上
        				var hj = DCellWeb1.GetCellDouble(3,i,0) +DCellWeb1.GetCellDouble(3,(i+1),0);
        				DCellWeb1.SetCellDouble(3,i,0,hj);
        				hj = DCellWeb1.GetCellDouble(4,i,0) +DCellWeb1.GetCellDouble(4,(i+1),0);
        				DCellWeb1.SetCellDouble(4,i,0,hj);
        				hj = DCellWeb1.GetCellDouble(5,i,0) +DCellWeb1.GetCellDouble(5,(i+1),0);
        				DCellWeb1.SetCellDouble(5,i,0,hj);
        				hj = DCellWeb1.GetCellDouble(6,i,0) +DCellWeb1.GetCellDouble(6,(i+1),0);
        				DCellWeb1.SetCellDouble(6,i,0,hj);
        				
        				//营改增行设置为0
        				DCellWeb1.SetCellDouble(3,(i+1),0,0.00);
        				DCellWeb1.SetCellDouble(4,(i+1),0,0.00);
        				DCellWeb1.SetCellDouble(5,(i+1),0,0.00);
        				DCellWeb1.SetCellDouble(6,(i+1),0,0.00);
        				
        			}
        			//第5行6%为营改增品目，非营改增户应为0
        			if(i==11){
        				DCellWeb1.SetCellDouble(5,i,0,0.00);
        				DCellWeb1.SetCellDouble(6,i,0,0.00);
        				DCellWeb1.SetCellDouble(3,i,0,0.00);
        				DCellWeb1.SetCellDouble(4,i,0,0.00);
        			}
        		}
        		
        	}else if("20"==YGZNSRLX_DM){
        		for(var i = 6 ;i<=16 ; i++){
        			if(i==6 || i==9 || i==13 || i==16){
        				//将营改增行数据放置到对应非营改增行次上
        				var hj = DCellWeb1.GetCellDouble(3,i,0) +DCellWeb1.GetCellDouble(3,(i+1),0);
        				DCellWeb1.SetCellDouble(3,(i+1),0,hj);
        				hj = DCellWeb1.GetCellDouble(4,i,0) +DCellWeb1.GetCellDouble(4,(i+1),0);
        				DCellWeb1.SetCellDouble(4,(i+1),0,hj);
        				hj = DCellWeb1.GetCellDouble(5,i,0) +DCellWeb1.GetCellDouble(5,(i+1),0);
        				DCellWeb1.SetCellDouble(5,(i+1),0,hj);
        				hj = DCellWeb1.GetCellDouble(6,i,0) +DCellWeb1.GetCellDouble(6,(i+1),0);
        				DCellWeb1.SetCellDouble(6,(i+1),0,hj);
        				
        				//营改增行设置为0
        				DCellWeb1.SetCellDouble(3,i,0,0.00);
        				DCellWeb1.SetCellDouble(4,i,0,0.00);
        				DCellWeb1.SetCellDouble(5,i,0,0.00);
        				DCellWeb1.SetCellDouble(6,i,0,0.00);
        				
        			}
        			//第3行13%、第10行4%为非营改增品目，营改增户应为0
        			if(i==8 ||i==15){
        				DCellWeb1.SetCellDouble(5,i,0,0.00);
        				DCellWeb1.SetCellDouble(6,i,0,0.00);
        				DCellWeb1.SetCellDouble(3,i,0,0.00);
        				DCellWeb1.SetCellDouble(4,i,0,0.00);
        			}
        		}
        	}
        }  
            
            
        },
        hiddenRowBySbbzl: function (sbbzlDm){
        	if(sbbzlDm){
        		if(sbbzlDm=='101011034'){
        			DCellWeb1.SetRowHidden(21,67);
        		}else if(sbbzlDm=='101011035'){
        			DCellWeb1.SetRowHidden(2,21);
        			DCellWeb1.SetRowHidden(26,67);
        		}else if(sbbzlDm=='101011029'){
        			DCellWeb1.SetRowHidden(2,38);
        		}else if(sbbzlDm=='101011024'){
        			DCellWeb1.SetRowHidden(2,26);
        			DCellWeb1.SetRowHidden(38,67);
        		}
        	}else{
        		var YGZNSRLX = hlwsbTools.getYGZNSRLX_DM();
            	if (YGZNSRLX == '10') {//非营改增企业屏蔽掉附表三的栏次，避免企业误解
            		DCellWeb1.SetRowHidden(39,50);
            	}
        	}
        },
        pageFlowControl: function (jsonObj, xhrArgs) {
            switch (parseInt(jsonObj.code)) {
                // 查询操作返回标志
                case 0:
                    curSeg.initData(jsonObj);
                    break;
                // 添加、更新以及状态更新操作返回标志
                case 1:
                    break;
                // 删除操作返回标志
                case 2:
                    break;
                // 准备添加的记录已经存在
                case 3:
                    break;
                // 在线帮助
                case 6:
                    break;
                case -1:// 保存出错返回标志
                case -2:// 其它错误返回标志
                	 var reason = 	jsonObj.msg;
                	 DCellWeb1.setValByLabel("A2",reason);
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