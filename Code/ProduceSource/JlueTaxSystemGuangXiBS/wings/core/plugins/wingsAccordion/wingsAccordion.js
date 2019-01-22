
//添加选中的颜色
function wingsAccChooseItem(obj){
//	if(obj){
//		var $obj = $(obj);
//		$obj.addClass('wingsAccChooseItemIn');
//	}
}

(function($){
	//wingsAccordion
	$.fn.wingsAccordion= function(options){
		// 参数赋值
		var opt = $.extend({}, $.fn.wingsAccordion.defaults, options);
		$accordion = $(this);
		
		//点击时触发的事件
		$.each(opt.cols, function(i, val) {
			if(val.onclickFn){
				$('#a_'+val.sid).click(function(){
					var tempFn =  wings_getFunc(val.onclickFn);
					for (var b = 0; b < tempFn.length; b++) {
			            var  func = eval(tempFn[b]);
				       	if (typeof func == "function") {
			            	var result = new func(val.sid);
				       	}
				    }
				});
			}
		});
		
	    //按序号展开，flag 为true时，则重复点击不关闭
		$accordion.showAccordion = function(num,flag){
			var tempid = '';
			$.each(opt.cols, function(i, val) {
				if(val.num == num || val.name == num){
					tempid = val.sid;
				}
			});
			var temp = $('#a_'+tempid);
			if(temp){
				var tempDiv =$('#'+tempid);
				if(flag && tempDiv && tempDiv.hasClass('in')){
					
				}else{
					temp.click(); 
				}
			}
  		};
			
  		//获得展示的条目的 id
		$accordion.getShowAccId = function(){
			var tempid = null;
			$.each(opt.cols, function(i, val) {
				var temp = $('#a_'+val.sid);
				if(temp){
					var tempDiv =$('#'+val.sid);
					if(tempDiv && tempDiv.hasClass('in')){
						tempid = val.sid;
					}
				}
			});
			return tempid;
		}
		return $accordion;
	};
	
	
	$.fn.wingsAccordion.defaults = {
			cols :[]
		};
	
	
	
})(window.jQuery);

