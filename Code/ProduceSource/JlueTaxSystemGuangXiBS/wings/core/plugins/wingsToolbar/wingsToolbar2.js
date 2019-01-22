(function($){
	$.fn.wingsToolbar2=function(options){
		var $toolbar = $(this);
		$toolbar.attr({"class":"s-tool"})
		$toolbar.opt = $.extend({}, $.fn.wingsToolbar2.defaults, options);
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
	 			quickKey:$(el).attr("quickKey")
	 		};
			
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
	 	
		
		//初始化方法
		$toolbar._init = function(){
			//【一】去掉原有的菜单
			if($toolbar.opt.divId){
				$('#' + $toolbar.opt.divId).remove();
			}else{
				$toolbar.opt.divId = "toolbar2_div_" + $toolbar.opt.name + "_" + Math.floor(Math.random()*100);
			}
			
			//【二】生成新菜单
			var tempHtml = '';
			tempHtml += '<div id= "'+ $toolbar.opt.divId +'" >' ;
			if($toolbar.opt.noUpDown != "true"){
				//追加向上按钮
				tempHtml += '<a class = "wings_toolbar_up" id = "'+$toolbar.opt.divId+'_bt_up" ><img src="/wings/core/plugins/wingsToolbar/image/up_arrow.png"/></a>';
			}
			tempHtml += '<div id= "'+ $toolbar.opt.divId +'_tool_2" class ="s-tool_2" ><div  class ="s-tool_indiv" >';
			
			var i = 0 ;
			$.each($toolbar.opt.divInfoMap,function(name,info){
				if(info.display=="false"){
					return true;
				}
				
				var wingsType=$.trim(info.typeOut);
				var temptitle="";
				if(info.showTitle){
					temptitle = '<span>'+info.showTitle+'</span>'
				}
				var tempOnclick ="";
//				if(info.clickFn){
//					tempOnclick = 'onclick = "'+info.clickFn+'"'
//				}
				
				//设置图片路径
				var imgStr = _getToolbar2Img(wingsType);
				
				
				var a_id ="toolbar2_" + $toolbar.opt.name + "_a_" + Math.floor(Math.random()*100);
				tempHtml += '<a id="'+a_id+'" '+tempOnclick+'  >'+temptitle+
						'<img src="'+imgStr+'"/></a>';
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
					'<img src="/wings/core/plugins/wingsToolbar/image/down_arrow.png"/></a>' 
				
				tempHtml += '</div>';
				
				$toolbar.append(tempHtml);
				
				//设置滑动的高
				$toolbar.opt._w = $toolbar.opt._a_height * $toolbar.opt._pageSize;
				$('#'+ $toolbar.opt.divId +'_tool_2').height($toolbar.opt._w);
				
				//绑定上下点击事件
				$('#'+$toolbar.opt.divId+'_bt_up').click(function(){
						$toolbar.btUp();
				});
				$('#'+$toolbar.opt.divId+'_bt_down').click(function(){
						$toolbar.btDown();
				});
				$('#'+ $toolbar.opt.divId +'_tool_2').css('top', $('#'+$toolbar.opt.divId+'_bt_up').height());
				$('#'+$toolbar.opt.divId+'_bt_down').css('top', $toolbar.opt._w + $('#'+$toolbar.opt.divId+'_bt_up').height())
				
			}else{
				tempHtml += '</div>';
				$toolbar.append(tempHtml);
				$('#'+ $toolbar.opt.divId +'_tool_2').height($toolbar.opt._a_height * i);
				$('#'+ $toolbar.opt.divId +'_tool_2').css('top', '0px');
			}
	    	$toolbar.opt.slider_Obj = $('#'+ $toolbar.opt.divId +'_tool_2').children('.s-tool_indiv');
	    	
	    	//追加按钮点击事件
			$.each($toolbar.opt.divInfoMap,function(name,info){
				$("#" + info.a_id).on("click",function(){
					if(info.clickFn){
						var tempFn =  wings_getFunc(info.clickFn);
						for (var b = 0; b < tempFn.length; b++) {
				            var  func = eval(tempFn[b]);
					       	if (typeof func == "function") {
				            	var result = new func();
					       	}
					    }
					}
				});
			});
		}
	 	
		//创建toolbar
	 	$toolbar._init();
	 	
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
				$("[wings='wingsToolbar2'] div").each(function(index,domElement){
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
	 			$toolbar._init();
			}
		};
		
		$toolbar.setDisplay=function(key){
			if($toolbar.opt.divInfoMap[key]&&$toolbar.opt.divInfoMap[key].aObject){
				var obj = $toolbar.opt.divInfoMap[key].display = "true";
	 			$toolbar._init();
			}
		}

		$toolbar.setDisabled=function(key){
			var info = $toolbar.opt.divInfoMap[key];
			if(info&&info.aObject){
				//变色
				var obj =$("#" + info.a_id);
    			obj.css("background-color","#083b75");
	  			$(obj).find(">img").each(function(j,el){
    				$(el).css("background-color","#083b75");
	  			});
	  			$(obj).find(">span").each(function(j,el){
    				$(el).css("background-color","#083b75");
	  			});
	  			//事件
				obj.unbind("click");
			}
		}
		
		$toolbar.setEnabled=function(key){
			if($toolbar.opt.clickFunc[key]){
				var info = $toolbar.opt.divInfoMap[key];
				
				if(info&&info.aObject){
					//变色
					var obj =$("#" + info.a_id);
	    			obj.css("background-color","#316eb4");
		  			$(obj).find(">img").each(function(j,el){
	    				$(el).css("background-color","#316eb4");
		  			});
		  			$(obj).find(">span").each(function(j,el){
	    				$(el).css("background-color","#316eb4");
		  			});
		  			//事件
					$("#" + info.a_id).unbind("click");
					$("#" + info.a_id).on("click",function(){
						if(info.clickFn){
							var tempFn =  wings_getFunc(info.clickFn);
							for (var b = 0; b < tempFn.length; b++) {
					            var  func = eval(tempFn[b]);
						       	if (typeof func == "function") {
					            	var result = new func();
						       	}
						    }
						}
					});
				}
			}
		}
		
		return $toolbar;
	};
	
	function _getToolbar2Img(wingsType){
		var imgStr = "inquire_condition_not_click_icon";
		var url = "/wings/core/plugins/wingsToolbar/image/";
		
		var imageMap = {
			"search":url + "inquire_condition_not_click_icon.png",//查询
			"editor":url + "transaction_not_click_icon.png",//办理
			"delete":url + "backlog_delete_not_click_icon.png",//		删除	
			"send":url + "accessory_send_not_click_icon.png",//发送
			"zf":url + "transmit_not_click_icon.png",//转发
			"yl":url + "accessory_single_screen_not_click_icon.png",//阅览
			
			"refresh":url + "backlog_refresh_not_click_icon.png",//刷新
			"gz":url + "tail_after_not_click_icon.png",//跟踪
			"dj":url + "register_not_click_icon.png",//登记
			"tmsm":url + "bar_code_not_click_icon.png",//条码扫描
			"kr":url + "accessory_save_exit_copy_not_click_icon.png",//拷入
			
			"kc":url + "accessory_first_copy_not_click_icon.png",//拷出
			"th":url + "backlog_send_back_not_click_icon.png",//退回
			"bj":url + "conclude_the_matter_not_click_icon.png",//办结
			"sc":url + "backlog_collect_not_click_icon.png",//收藏
			"zd":url + "backlog_stick_not_click_icon.png",//置顶
			
			"lbsz":url + "backlog_tabulator_set_not_click_icon.png",//列表设置
			"sh":url + "backlog_send_back_not_click_icon.png",//收回
			"xj":url + "new_not_click_icon.png",//新建
			"dk":url + "open_not_click_icon.png",//打开
			"sjx":url + "home_page_performance_management_not_click_icon.png",//送绩效	
			
			"lbkc":url + "backlog_file_first_copy_not_click_icon.png",//列表拷出
			"tmgz":url + "bar_code_tail_after_not_click_icon.png",//条码跟踪
			"cxff":url + "anew_dispatching_not_click_icon.png",//重新封发
			"qxqf":url + "backlog_cancel_stick_not_click_icon.png",//取消签发
			"error":url + "error_not_click_icon.png", //置差错项
			
			
			"cy":url + "adopt_not_click_cion.png", //采用
			"ckmx":url + "inquire_condition_not_click_icon.png", //查看明细	
			"xgqx":url + "deadline_modification_not_click_icon.png", //期限修改	
			"rownum":url + "a_row_number_not_click_icon.png", //档号重排	
			"xg":url + "modification_not_click_icon.png", //修改
			
			"gd":url + "backlog_not_pitch_on_icon.png", //选中归档
			"print":url + "print_not_click_icon.png", //打印
			"screen":url + "scan_not_click_icon.png",//文件扫描
			"set":url + "my_install_not_click_icon.png", //设置
			"save":url + "accessory_save_not_click_icon.png", //保存	
			
			"saveout":url + "accessory_save_exit_copy_not_click_icon.png", //保存退出
			"quit":url + "accessory_quit_not_click_icon.png", //关闭
			"destory":url + "backlog_delete_not_click_icon.png"//销毁文件
			};
		var temp = imageMap[wingsType];
		
		return temp;
	}
			

	$.fn.wingsToolbar2.defaults = {
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
		_a_height:60,
		_pageNum:3,
		_pageSize:5,
		slider_Obj:null
	};
})(window.jQuery);

