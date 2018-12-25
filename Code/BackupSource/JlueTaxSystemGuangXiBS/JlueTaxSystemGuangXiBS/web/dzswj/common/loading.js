$(document).ready(function(){
	load.onload();
})

var load = (function(){
	
	var init = function () {
		
	}
	return {
		onload: function() {
			init();
			
//			load.loading();
//			load.closeLoading();
		},
		
		loading: function() {
			var html = "<div class='background'></div>";
			html += "<div class='pro_div'>"
					+"<img src='/web/dzswj/common/images/loading.gif' class='progressBar'>"
					+"<p>数据加载中...</p>"
					+"</div>";
			
			$('body').prepend(html);
		},
		
		closeLoading: function() {

			$('.background').hide();
			$('.pro_div').hide();

		}
	}
})();
