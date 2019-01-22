/**
 * 办税申请-授权
 */
var bssfHandler = {
	init:function(){
		bssfHandler.bindEvent();
	},
	bindEvent:function(){
		$("#BssfSqSubmit").on('click',function(){
    		var nsrsbh = $.trim($("#BssfNsrsbh").val());
    		var nsrmc = $.trim($("#BssfNsrmc").val());
    		if(!nsrsbh || !nsrmc){
    			layer.msg("信息不能为空，请把项目补充完整！");
    			return;
    		}
    		var sqsf = $.trim($('#kf-bssf-shenqing-sqsf').val());
            baseTools.xhrAjax({
    			url:baseTools.getWebRoot()+"/server/jcpt/yhzx/zrr/bssfsqsq/addBssfSq.do",
    			params:{NSRSBH:nsrsbh,NSRMC:nsrmc,SQSF:sqsf},
    			callback: [function (data, xhrArgs) {
    		    	if(data.code == '-3'){
    	   				jcptTools.msg(data.msg);
    	   				jcptTools.clearAllCookie();
    	   				jcptTools.gotoLogin();
                        return false;
    				}else if(data.code=='-2'){
    					$("#BssfNsrsbh").val('');
    		    		$("#BssfNsrmc").val('');
    					layer.msg(data.msg);
    				}else{
    					layer.msg(data.msg);
    				}
    		    	if(data.code > 0){
    		    		$("#BssfNsrsbh").val('');
    		    		$("#BssfNsrmc").val('');
    		    		layer.closeAll();
    		    		//重新加载列表信息
    		    		$("#left2_iframe")[0].contentWindow.bssfsq.selectBssfSqList('add');
    		    	}
    		    }]
    		});
    	});
		$("#BssfNsrsbh").on("blur",function(){
			var nsrsbh = $.trim($("#BssfNsrsbh").val());
			if(!nsrsbh){
				return;
			}
            baseTools.xhrAjax({
				url:baseTools.getWebRoot()+'/server/jcpt/yhzx/zrr/bssfsqsq/getNsrmcByNsrsbh.do',
				params:{NSRSBH:nsrsbh},
				callback: [function (data, xhrArgs) {
			    	if(data.code > 0){
			    		if(data.data != null){
			    			$("#BssfNsrmc").val(data.data.NSRMC);
			    		}else{
			    			layer.msg("没有查到数据！");
			    		}
			    	}else{
			    		layer.msg(data.msg);
			    	}
			    }]
			});
		});
	}
	
};
$(function(){
	bssfHandler.init();
});