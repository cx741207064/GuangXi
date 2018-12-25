(function($){
	$.fn.wingsToolbar3=function(options){
		var $toolbar = $(this);
		$toolbar.attr({"class":"s-tool-3"})
		$toolbar.opt = $.extend({}, $.fn.wingsToolbar3.defaults, options);
		$toolbar.opt.divInfoMap = {};
		$toolbar.opt.clickFunc = {};
		
		//所有图标增加样式
	 	$toolbar.find("div").each(function(index,el){
	 		var info = {
	 			name:$(el).attr("name")?$(el).attr("name"):$(el).attr("type"),
	 			typeOut:$(el).attr("type"),
	 			clickFn:$(el).attr("clickFn"),
	 			showTitle:$(el).attr("showTitle"),
	 			enabled:$(el).attr("enabled"),
	 			quickKey:$(el).attr("quickKey"),
	 			show:$(el).attr("show"),
	 			disable:$(el).attr("disable"),
	 			isDisable:"false"
	 		};
	 		//设置隐藏
	 		if(info.show == "false"){
	 			info.display = "false";
	 		}
			
			if(info.typeOut == "" || info.typeOut==null){
				info.typeOut=info.name;
			}
		 		
			if(info.typeOut !=null && info.typeOut !=""){
				
				if(info.clickFn){
					$toolbar.opt.clickFunc[info.name] = info.clickFn;
				}
		 		$toolbar.opt.divInfoMap[info.name] = info;
	 		}
	 	})
	 	
	 	//设置toolbar每页数量
		$toolbar.setPageSize = function(pagesize){
	 		if(!isNaN(pagesize)){
	 			$toolbar.opt._pageSize = pagesize;
	 		}
	 		
		};
		
	 	
	 	
		//初始化方法
		$toolbar.init = function(){
			//【一】去掉原有的菜单
			if($toolbar.opt.divId){
				$('#' + $toolbar.opt.divId).remove();
			}else{
				$toolbar.opt.divId = "toolbar3_div_" + $toolbar.opt.name + "_" + Math.floor(Math.random()*100);
			}
			
			//【二】生成新菜单
			var tempHtml = '';
			tempHtml += '<div id= "'+ $toolbar.opt.divId +'" >' ;
			if($toolbar.opt.noUpDown != "true"){
				//追加向上按钮
				tempHtml += '<a class = "wings_toolbar_up" id = "'+$toolbar.opt.divId+'_bt_up" >' +
				'<img src="/wings/core/plugins/wingsToolbar/image/up_arrow.png" style="width:50px;"/></a>';
			}
			tempHtml += '<div id= "'+ $toolbar.opt.divId +'_tool_3" class ="s-tool_3" ><div  class ="s-tool_indiv_3" >';
			
			var i = 0 ;
			$.each($toolbar.opt.divInfoMap,function(name,info){
				if(info.display=="false"){
					return true;
				}
				
				var wingsType=$.trim(info.typeOut);
				
				//获得对应样式的句柄
				var className = _getToolbar3ClassName(wingsType);
				
				var temptitle="";
				if(info.showTitle){
					if(info.isDisable == "true"){
						temptitle = '<span class ="'+className+'_unclickable" ></br>'+info.showTitle+'</span>'
					}else{
						temptitle = '<span class ="'+className+'_not_click" ></br>'+info.showTitle+'</span>'
					}
				}
				var tempOnclick ="";
//				if(info.clickFn){
//					tempOnclick = 'onclick = "'+info.clickFn+'"'
//				}
				
				
				
				var a_id ="toolbar3_" + $toolbar.opt.name + name +"_a_" + Math.floor(Math.random()*100);
				tempHtml += '<a id="'+a_id+'" '+tempOnclick+' class="actTool3" >'+temptitle+
						'</a>';
				info.aObject = $("#"+a_id);
				info.a_id = a_id;
				i++;//计数
			});
			
	    
			if($toolbar.opt.noUpDown != "true"){
				//根据pageSize 计算要补几个，以及分几页
				$toolbar.opt._pageNum = Math.ceil(i/$toolbar.opt._pageSize);//向上取整
		 		var puqiNum = $toolbar.opt._pageSize - i%$toolbar.opt._pageSize; //需要补齐的个数
		 		if(puqiNum!= $toolbar.opt._pageSize){
					for(var j = 0;j < puqiNum;j++){
						tempHtml += '<a ></a>';//补色
					}
		 		}
		 		tempHtml += "</div></div>"
		 		
				//追加向上按钮
				tempHtml += '<a class = "wings_toolbar_down" id = "'+$toolbar.opt.divId+'_bt_down" >' +
					'<img src="/wings/core/plugins/wingsToolbar/image/down_arrow.png" style="width:50px;"/></a>' 
				
				tempHtml += '</div>';
				
				$toolbar.append(tempHtml);
				
				//设置滑动的高
				$toolbar.opt._w = $toolbar.opt._a_height * $toolbar.opt._pageSize;
				$('#'+ $toolbar.opt.divId +'_tool_3').height($toolbar.opt._w);
				
				//绑定上下点击事件
				$('#'+$toolbar.opt.divId+'_bt_up').click(function(){
						$toolbar.btUp();
				});
				$('#'+$toolbar.opt.divId+'_bt_down').click(function(){
						$toolbar.btDown();
				});
				$('#'+ $toolbar.opt.divId +'_tool_3').css('top', $('#'+$toolbar.opt.divId+'_bt_up').height());
				$('#'+$toolbar.opt.divId+'_bt_down').css('top', $toolbar.opt._w + $('#'+$toolbar.opt.divId+'_bt_up').height())
				
			}else{
				tempHtml += '</div>';
				$toolbar.append(tempHtml);
				$('#'+ $toolbar.opt.divId +'_tool_3').height($toolbar.opt._a_height * i);
				$('#'+ $toolbar.opt.divId +'_tool_3').css('top', '0px');
			}
	    	$toolbar.opt.slider_Obj = $('#'+ $toolbar.opt.divId +'_tool_3').children('.s-tool_indiv_3');
	    	tempHtml = null;
	    	
	    	//追加按钮点击事件
			$.each($toolbar.opt.divInfoMap,function(name,infoTemp){
				
				if(infoTemp.isDisable == "true"){
					return true;
				}
				//alert(infoTemp.a_id + " = " + infoTemp.clickFn);
				$("#" + infoTemp.a_id).on("click",function(){
					//【1】公共事件
					//按钮颜色
					$toolbar.setButtonColor(infoTemp.name);
					
					//【2】私有事件
					if(infoTemp.clickFn){
						var tempFn =  wings_getFunc(infoTemp.clickFn);
						for (var b = 0; b < tempFn.length; b++) {
				            var  func = eval(tempFn[b]);
					       	if (typeof func == "function") {
				            	var result = new func();
					       	}
					    }
					};
				});
				//处理不可用
//				if(infoTemp.isDisable == "true"){
//					$toolbar.setDisabled(infoTemp.name);
//				}
			});
			
		}
	 	
		//创建toolbar
	 	$toolbar.init();
 		//设置 不可用按钮
		$.each($toolbar.opt.divInfoMap,function(name,infoTemp){
			if(infoTemp.disable == "true"){
				_toolbarDisable(name);
			}
		});
	 	
	 	
	 	//设置按钮颜色
	 	$toolbar.setButtonColor = function(key){
	 		var info = $toolbar.opt.divInfoMap[key];
			var obj =$("#" + info.a_id);
			if(info&&obj){
				$.each($toolbar.opt.divInfoMap,function(name,info_el){
					//变色
					var wingsType = $.trim(info_el.typeOut);
					//获得对应样式的句柄
					var className = _getToolbar3ClassName(wingsType)
					var obj_temp =$("#" + info_el.a_id);
					//不操作不可用的按钮
					if(!obj_temp.hasClass("actTool3")){
						return;
					}
					if(key == name){
						//选中
						obj_temp.addClass("action3");
			  			$(obj_temp).find(">span").each(function(j,el){
							$(el).removeClass(className+"_not_click");
							$(el).addClass(className+"_click");
			  			});
					}else{
						//均不选中
						obj_temp.removeClass("action3");
			  			$(obj_temp).find(">span").each(function(j,el){
							$(el).removeClass(className+"_click");
							$(el).addClass(className+"_not_click");
			  			});
					}
					
				});
			}
		};	
	 	
	 	//向上滑動
		$toolbar.btUp = function(){
			if($toolbar.opt._current > -1){
		        $toolbar.opt._current --
		        if($toolbar.opt._current != -1){
					$toolbar.opt.slider_Obj.stop(true, false).animate({top: - $toolbar.opt._w * $toolbar.opt._current}, $toolbar.opt._speed, function() {
		          	})
		        }
		        //回到开头
		        if($toolbar.opt._current === -1){
		          	$toolbar.opt.slider_Obj.stop(true, false).animate({top: - $toolbar.opt._w * ($toolbar.opt._pageNum -1)}, $toolbar.opt._speed, function() {
		            	$toolbar.opt._current = $toolbar.opt._pageNum -1
		          	})
		        }
			}
		}
	 	//向下滑動
		$toolbar.btDown = function(){
			if($toolbar.opt._current < $toolbar.opt._pageNum ){
		        $toolbar.opt._current ++
		        if($toolbar.opt._current != $toolbar.opt._pageNum ) {
		          $toolbar.opt.slider_Obj.stop(true, false).animate({top: - $toolbar.opt._w * $toolbar.opt._current }, $toolbar.opt._speed, function () {
		          })
		        }
		        //回到第一个页面
		        if ($toolbar.opt._current === $toolbar.opt._pageNum ) {
		        	$toolbar.opt.slider_Obj.stop(true, false).animate({top: 0 }, $toolbar.opt._speed, function() {
		            	$toolbar.opt._current = 0
		          	})
		        }
	      	}
			
		}
	 	
	 	
	 	
	 	
	 	var ctrlKeydown = false;
		
	 	$(document).keyup(function(event){
	 		if(event.keyCode==17){
	 			ctrlKeydown = false;
			}
	 	});
		$(document).keydown(function(event){
			var keyArr1=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
			             "r","s","t","u","v","w","x","y","z"];
			if(event.keyCode==17){
				ctrlKeydown = true;
			}
			if(event.keyCode>=65 && event.keyCode<=90){
				var qk="ctrl+"+keyArr1[event.keyCode-65];
				$("[wings='wingsToolbar3'] div").each(function(index,domElement){
					var quickKey=$.trim($(this).attr("quickKey")).toLowerCase();
					if(null!=quickKey && ""!=quickKey){
						var qks=new Array();
					    qks=quickKey.split("+");
					    quickKey=$.trim(qks[0])+"+"+$.trim(qks[1]);
					}
					
					if(qk==quickKey && ctrlKeydown){
						$(this).click();
					  }
				  });
				$.each($toolbar.opt.divInfoMap,function(name,info){
					var quickKey =$.trim(info.quickKey).toLowerCase();
					if(null!=quickKey && ""!=quickKey){
						var qks=new Array();
					    qks=quickKey.split("+");
					    quickKey=$.trim(qks[0])+"+"+$.trim(qks[1]);
					}
					
					if(qk==quickKey && ctrlKeydown){
						info.aObject.click();
					  }
				});
			}
		});
		
		
	 	$toolbar.setHide = function(key){
			if($toolbar.opt.divInfoMap[key]&&$toolbar.opt.divInfoMap[key].aObject){
				var obj = $toolbar.opt.divInfoMap[key].display = "false";
	 			$toolbar.init();
			}
		};
		
		$toolbar.setDisplay=function(key){
//			if($toolbar.opt.divInfoMap[key]&&$toolbar.opt.divInfoMap[key].aObject){
			if($toolbar.opt.divInfoMap[key]){
				var obj = $toolbar.opt.divInfoMap[key].display = "true";
	 			$toolbar.init();
			}
		}

		
		$toolbar.setDisabled=function(key){
			_toolbarDisable(key);
		}
		
		function _toolbarDisable(key){
			var info = $toolbar.opt.divInfoMap[key];
			if(info&&info.aObject && info.isDisable == "false"){
				var wingsType=$.trim(info.typeOut);
				//获得对应样式的句柄
				var className = _getToolbar3ClassName(wingsType);
				
				//变色
				var obj =$("#" + info.a_id);
				obj.removeClass("actTool3");
	  			$(obj).find(">span").each(function(j,el){
					$(el).removeClass(className+"_not_click");
					$(el).addClass(className+"_unclickable");
	  			});
	  			//事件
				obj.unbind("click");
				//标记为不可用
				info.isDisable = "true";
			}
		}
		
		$toolbar.setEnabled=function(key){
			if($toolbar.opt.clickFunc[key]){
				var info = $toolbar.opt.divInfoMap[key];
				
				if(info&&info.aObject && info.isDisable == "true"){
					//变色
					var wingsType=$.trim(info.typeOut);
					//获得对应样式的句柄
					var className = _getToolbar3ClassName(wingsType)
					var obj =$("#" + info.a_id);
					obj.addClass("actTool3");
		  			$(obj).find(">span").each(function(j,el){
						$(el).addClass(className+"_not_click");
						$(el).removeClass(className+"_unclickable");
		  			});
		  			//事件
					$("#" + info.a_id).unbind("click");
					$("#" + info.a_id).on("click",function(){
						var info_temp = $toolbar.opt.divInfoMap[key]
						//【1】公共事件
						//按钮颜色
						$toolbar.setButtonColor(info_temp.name);
						
						//【2】私有事件
						if(info_temp.clickFn){
							var tempFn =  wings_getFunc(info_temp.clickFn);
							for (var b = 0; b < tempFn.length; b++) {
					            var  func = eval(tempFn[b]);
						       	if (typeof func == "function") {
					            	var result = new func();
						       	}
						    }
						}
						info_temp = null;
					});
					//标记为可用
					info.isDisable = "false";
				}
				info = null;
			}
		}
		
	 	//设置toolbar每页数量
		$toolbar.destroy = function(){

			$.each($toolbar.opt.clickFunc,function(k,v){
				v = null;
			});
			$.each($toolbar.opt.divInfoMap,function(k,info){
				$("#" + info.a_id).unbind("click");
				$("#" + info.a_id).remove();
				$.each(info,function(j,o){
					o = null;
				});
				info = null;
			});
			$('#'+$toolbar.opt.divId+'_bt_up').remove();
			$('#'+$toolbar.opt.divId+'_bt_down').remove();
			$('#'+ $toolbar.opt.divId +'_tool_3').remove();
			
			$.each($toolbar.opt,function(k,v){
				v = null;
			});
			_getToolbar3ClassName = null;
			
			$toolbar.opt = null;
			$.each($toolbar,function(k,v){
				v = null;
			});
			$toolbar.remove();
			$toolbar = null;
		};
		
		return $toolbar;
	};
	
	function _getToolbar3ClassName(wingsType){
		var imgStr = "home_page_inform";
		
		var imageMap = {
			"search":"inquire_condition",//查询
			"editor":"transaction",//办理
			"delete":"backlog_delete",//		删除	
			"send":"accessory_send",//发送
			"zf":"transmit",//转发
			
			
			"refresh":"backlog_refresh",//刷新
			"gz":"tail_after",//跟踪
			"dj":"register",//登记
			"tmsm":"bar_code",//条码扫描
			"kr":"accessory_save_exit_copy",//拷入
			
			"kc":"accessory_first_copy",//拷出
			"th":"backlog_send_back",//退回
			"bj":"conclude_the_matter",//办结
			"sc":"backlog_collect",//收藏
			"zd":"backlog_stick",//置顶
			
			"lbsz":"backlog_tabulator_set",//列表设置
			"sh":"backlog_send_back",//收回
			"xj":"new",//新建
			"dk":"open",//打开
			"sjx":"home_page_performance_management",//送绩效	
			
			"wjkc":"backlog_file_first_copy",//文件拷出
			"tmgz":"bar_code_tail_after",//条码跟踪
			"cxff":"anew_dispatching",//重新封发
			"qxqf":"backlog_cancel_stick",//取消签发
			"error":"error", //置差错项
			
			
			"cy":"adopt", //采用
			"ckmx":"inquire_condition", //查看明细	
			"xgqx":"deadline_modification", //期限修改	
			"rownum":"a_row_number", //档号重排	
			"xg":"modification", //修改
			
			"gd":"pitch_onpigeonhole", //选中归档
			"print":"print", //打印
			"screen":"scan",//文件扫描
			"set":"set", //设置
			"save":"accessory_save", //保存	
			
			"saveout":"accessory_save_exit_setup", //保存退出
			"quit":"close", //关闭
			"destory":"backlog_delete",//销毁文件
			"quit":"accessory_quit",//退出
			"yl":"read",//阅览
			
			"lbkc":"list_copy-ou",//列表考出
			"db":"backlog",//代办
			"yb":"have_done",//已办
			"dsp":"accessory_double_screen",//已办
			"ts":"push_oneself"//推送
			};
		var temp = imageMap[wingsType];
		return temp;
	}
			

	$.fn.wingsToolbar3.defaults = {
		 isFixed:"true",
	    wingsFixed:"fixed",
		wingsWidth:"100%",
		wingsHeight:"40px",
		wingsTop:"0px",
		widgetMap:{},
		clickFunc:{},
		divInfoMap:{},
		backgroundColor:"#f7f7f7",
		color:null,
		_b_height:60,//每个按钮的高度
		_current:0,
		_speed:500,
		_w:300,
		_a_height:50,
		_pageNum:3,
		_pageSize:5,
		slider_Obj:null
	};
})(window.jQuery);

