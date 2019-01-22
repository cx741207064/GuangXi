(function($) {

	$.fn.wingsMenu = function(options) {
		// 参数赋值
		var opts = $.extend({}, $.fn.wingsMenu.defaults, options);
		$tabMenuObj = $(this);
		
		//创建菜单
		opts.menuFnObj = new wingsMenu(options);
		opts.menuFnObj.build();
		
		$tabMenuObj.show = function(opTemp){
			opts.menuFnObj.display(opTemp);
		}
		
		//保存信息
		$tabMenuObj.setTempDate = function(name,tempObj){
			if(name){
				opts.tempDate[name] = tempObj;
			}
		}
		$tabMenuObj.getTempDate = function(name){
			return opts.tempDate[name];
		}
		
		$tabMenuObj.setOnSelectFn = function(fnStr){
			return opts.menuFnObj.setOnSelectFn(fnStr);
		}
		
		return $tabMenuObj;
		
	}
	
	$.fn.wingsMenu.defaults = {
			'isShow' : 'false',
			'name' : 'menu',
			'pos' : 'absolute',
			'left':'0',
			'top':'0',
			'dataStr' : '',
			'dataType' : 'json',
			'isRightMenu':'false',
			'tempDate':{},
			'type' : 'vertical',
			'pNode' : ''
		};
})(window.jQuery);

	var wingsMenu = (function (options){
		defaults = {
			'isShow' : 'false',
			'name' : 'menu',
			'pos' : 'absolute',
			'left':'0',
			'top':'0',
			'dataStr' : '',
			'isRightMenu':'false',
			'dataType' : 'json',
			'tempDate':{},
			'type' : 'vertical',
			'pNode' : ''
		};
		var $menuthis = $(this);
		$menuthis.opts = $.extend({}, defaults, options);
		$menuthis.opts.id = $menuthis.opts.name+"_wingsMenu_" + Math.floor(Math.random()*100);
			
		
		//创建
		function fn_build(){
			var vid = $menuthis.opts.id;
			//删掉原来的
			var oldDiv = $('#'+ vid).remove();
			var htmlTemp = "";
			var obj = null;
			if($menuthis.opts.dataStr ){
				obj = $.parseJSON($menuthis.opts.dataStr);
				if(obj && obj.data){
					//【1】转化成tree结构数据
					var treeNodes = $tersforStrToTreeNodes(obj.data);
						
					//【2】生成菜单
					$.each(treeNodes,function(i,obj){
						htmlTemp += p_menu_getMenuHtml($menuthis.opts,obj);
					});
				};
				
			}
			var style ="";
			if($menuthis.opts.isRightMenu == "true"){
				style = "visibility:hidden;";
			}
			//重新追加
			htmlTemp = '<div id="'+vid+'" style="position:absolute; top:0;'+ style +'" ><ul class="nav_wings_menu">' + htmlTemp + '</ul></div>';
			$(document.body).append(htmlTemp);
			
			//设置参数
			if($menuthis.opts.isRightMenu == "true"){
				//鼠标离开即消失
				$('#'+vid).bind("mouseleave", function(){
					//延时0.25秒执行
					setTimeout(function(){return closeMenu();},"250");
				});
			}
			function closeMenu(){
				$('#'+$menuthis.opts.id).css({"visibility":"hidden"});
			}
			//追加点击事件
			if(obj && obj.data){
				$.each(obj.data, function(i, perObj) {
					$('#wingsm_'+$menuthis.opts.name+'_son_'+perObj.code).click(function(){
						if($menuthis.opts.onSelect){
							var tempFn =  wings_getFunc($menuthis.opts.onSelect);
							for (var b = 0; b < tempFn.length; b++) {
					            var  func = eval(tempFn[b]);
						       	if (typeof func == "function") {
					            	var result = new func(perObj);
						       	}
						    }
						}
						//关闭菜单
						if($menuthis.opts.isRightMenu == "true"){
							$('#'+$menuthis.opts.id).css({"visibility":"hidden"});
						}
					});
				});
			}
			
		}
		function setFn(fnStr){
			var obj = null;
			if($menuthis.opts.dataStr ){
				obj = $.parseJSON($menuthis.opts.dataStr);
			}
			//修改点击事件
			if(obj && obj.data){
				$.each(obj.data, function(i, perObj) {
					var id = '#wingsm_'+$menuthis.opts.name+'_son_'+perObj.code;
					$(id).unbind("click");
					$(id).click(function(){
						if(fnStr){
							var tempFn =  wings_getFunc(fnStr);
							for (var b = 0; b < tempFn.length; b++) {
					            var  func = eval(tempFn[b]);
						       	if (typeof func == "function") {
					            	var result = new func(perObj);
						       	}
						    }
						}
						//关闭菜单
						if($menuthis.opts.isRightMenu == "true"){
							$('#'+$menuthis.opts.id).css({"visibility":"hidden"});
						}
					});
				});
			}
			
		}
		
		return {
			opts:$menuthis.opts,
		 	build:fn_build,
		 	setOnSelectFn:setFn,
		 	hide : function(){
				if($('#'+$menuthis.opts.id)){
					$('#'+$menuthis.opts.id).css({"visibility":"hidden"});
				}
			},
			display : function(options){
				var opTemp = $.extend({}, {left : 10,top : 10}, options);
				//页面显示  在哪个位置
				if($('#'+$menuthis.opts.id)){
					$('#'+$menuthis.opts.id).css({"top":opTemp.top+"px", "left":opTemp.left+"px", "visibility":"visible"});
				}
			},
			show:function(opTemp){
				this.display(opTemp);
			}
		}
	});
	wingsMenu.showLei = function(){
		
	}
	
	/**
	 * 递归生成菜单
	 * @param {Object} obj
	 * @return {TypeName} 
	 */
	function p_menu_getMenuHtml(opts,obj){
		var htmlStr ="";
		if(obj){
			htmlStr += '<li ><a  id="wingsm_'+opts.name+'_son_'+obj.code+'" >' + obj.caption + '</a>'
			if(obj.children){
				htmlStr += '<ul>';
				$.each(obj.children,function(j,s_obj){
					htmlStr += p_menu_getMenuHtml(opts,s_obj);
				});
				htmlStr += '</ul>';
			}
			htmlStr += '</li>'
		}
		return htmlStr;
	}
	
	
		
	
	