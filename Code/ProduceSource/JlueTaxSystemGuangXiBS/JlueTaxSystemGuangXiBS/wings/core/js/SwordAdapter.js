//扩展jquery ajax 使之支持sword
(function ($) {
	$.getUrlParam = function (url,name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = url.substr(url.indexOf('?')+1).match(reg);
		if (r != null) return unescape(r[2]); return "";
	}
	$.getUrlParams = function (url) {
		var params = {};
		var args = url.substr(url.indexOf('?')+1);
		if (args != null){
			var kvs = args.split('&');
			$(kvs).each(function(i,v){
				var kv = v.split('=');
				params[kv[0]] = kv[1];
			});
			return params;
		} 
		return null;
	}
	$.ajaxSetup({
		url:'ajax.sword?ctrl=',
		//type:'POST',
		//dataType:'json',
		cache:false,
		beforeSend:function(a,b){
			//不是sword请求直接放过，不转||(/^\/?upload.sword/g).test(b.url)
			if(!(/^\/?(.*\.)?sword/g).test(b.url)){
				return true;
			}
			//放过WingsSubmit 的提交请求
			if(b.wingsSubmitAjax == true){
				return true;
			}
			
			var params={},ctrl,tid="",baseUrl = b.url.substr(0,b.url.indexOf('?'));
			if(b.ctrl){ctrl = b.ctrl;}else{ctrl = $.getUrlParam(b.url,'ctrl');}
			if(!ctrl){alert("未指定ctrl！");return false;}
			//处理tid
			if(b.tid){tid = b.tid;}else{tid = $.getUrlParam(b.url,'tid');}
			//处理其他参数
			if(b.type==='POST'||b.type==='post'){
				if(Object.prototype.toString.call(b.data) !== "[object String]"){
					//文件上传不做处理
					return;
				}
				if(b.data){
					$(b.data.split('&')).each(function(i,v){
						var kv = v.split('=');
						params[kv[0]]=kv[1];
					});
				}
				var postData={tid:tid,ctrl:ctrl};
				if(params){
					var datas = new Array();
					for(var k in params){
						if(params[k]!=='ctrl'&&params[k]!=='tid'){
							var pData = {name:k,value:params[k],sword:'attr'};
							datas.push(pData);
						}
					}
					postData.data = datas;
				}
				b.data = 'postData='+JSON.stringify(postData);
				b.url = baseUrl+"?ctrl="+ctrl;
				b.data = 'postData='+JSON.stringify(postData);
			}
		},
		dataFilter:function(data,type){
			//如果url是/ajax开头直接返回数据
			if((/^\/?sword?.*/g).test(this.url) ||!(/^\/?(.*\.)?sword/g).test(this.url)){
				return data;
			}
			
			//兼容ie8\9返回iframe json格式数据, file upload
			if(type == 'iframe json'){
				try{
					var responseText = $(data[0].body).text();
					var responseObj =$.parseJSON(responseText);
					if(responseObj.exception == true && responseObj.debugMes){//打印异常信息
						SwordAdapter.alertDebugMsg(responseObj);
						return null;
					}
				}catch(e){
					//Connection reset will occur when network bad.
					if(window.console && window.console.log) console.log('file upload error: ', e);
				}
				return data;
			}
			
			var jsonObj=$.parseJSON(data);
			if(this.wingsHasException != true && typeof (jsonObj.message) != "undefined"){//打印异常信息
				SwordAdapter.alertErrorMsg(jsonObj.message);
				return null;
			}
			if(this.wingsHasException != true &&jsonObj.debugMes){// 调试信息
				SwordAdapter.alertDebugMsg(jsonObj);
				return null;
			}
			
			if(this.wingsHasException == true 
					&& (jsonObj.message || jsonObj.debugMes)){
				//有sword的错误，并且有处理的方法
				jsonObj.HasException = true;
				return JSON.stringify(jsonObj);
			}
			
			//放过WingsSubmit 的提交请求
			if(this.wingsSubmitAjax == true){
				return data;
			}
			if(jsonObj.page){
				window.location = jsonObj.page;
				return null;
			}
			var jsonresult;
			var result = {};
			$(jsonObj.data).each(function(index, obj) {
				if(obj.name){
					if(obj.name==='jsonresult'){
						jsonresult = obj.value;
						return;
					}else if(obj.name==='wingsTreeJson'){
						jsonresult = obj.value;
						return;
					}else{
						result[obj.name] = obj.value;
					}
				}else if(obj.sword){
					//兼容sword select
					if(obj.sword == 'SwordSelect'){
						result[obj.dataName] = obj.data;
					}
				}
			});
			
			//直接通过addAttr返回的数据进行解析
			if(!jsonresult && result){
				jsonresult = JSON.stringify(result);
			}
			return jsonresult;
		},
		error : function(jqXHR, textStatus, errorThrown) {
			SwordAdapter.alertMsg(errorThrown.toString());
		}
	});
})(jQuery);


/**
 * @title sword adapter
 * @version 1.0
 * @auther 
 * @descetion sword ajax adapter
 * @other depend jquery
 */
var SwordAdapter = SwordAdapter || {
	alertMsg : function(msg){
		window.BootstrapDialog.show({
			type:BootstrapDialog.TYPE_PRIMARY,
			title: '提示',
			message:msg,
			draggable: true,
			buttons: [{
				icon: 'icon-ok', 
				cssClass: 'btn-sm btn-primary', 
		        autospin: false,
	            label: '确定',
	            action: function(dialog) {
	            	dialog.close();
	            }
	        }]
		});
	},
	alertErrorMsg : function(msg){
		var popWindow = window;
		var dialog = new popWindow.BootstrapDialog({
			type:BootstrapDialog.TYPE_DANGER,
			title: '错误',
			message:msg,
			draggable: true,
			buttons: [{
				icon: 'icon-ok', 
				cssClass: 'btn-sm btn-primary', 
		        autospin: false,
	            label: '确定',
	            action: function(dialog) {
	            	dialog.close();
	            }
	        }]
		});
		
		var dialogWidth = 400; // firm width
		var windowHeight = $(popWindow).height();
		var windowWidth = $(popWindow).width();
		dialog.onShown(function() {
			dialog.getModal().prev('.modal-backdrop').append(WingsDialog.forceTopHTML);
			var $modalDialog = dialog.getModalDialog();
			var dialogHeight = $modalDialog.height();
			// dialogWidth = $modalDialog.width();
			// When dialog height greater than window height,
			// use default margin top value to set dialog position.
			if (windowHeight < dialogHeight) {
				// do nothing
				return;
			}
			$modalDialog.css({
				"position" : "absolute",
				"left" : "50%",
				"margin-left" : -(dialogWidth / 2)
			});
		});
		
		dialog.onShow(function() {
			var lines = Math.ceil(msg.length / 25); //25 characters per line
			var paddingTop = (windowHeight - 260 - lines*20) / 2; 
			dialog.getModalDialog().css({
		        'padding-top': paddingTop,
		        'width':dialogWidth
		    });
		});
		
		dialog.open();
	},
	alertDebugMsg : function(debugObj){
		WingsDialog.alertDebugMsg(debugObj);
	}
};


/**
 * 以下是Swordweb兼容内容
 */

function $w(name){
	return $.wingsWidget(name)
}

function $$(name){
	return $(name);
}

var pc = {
		getWidget:function(name){
			return $.wingsWidget(name);
		},
		getWidgetsByType:function(name){
			return {
				getValues:function(){
					return [];
				}
			};
		}
}

function $H(){
	var obj = {};
	obj.get = function(name){
		return obj[name];
	}
	obj.set = function(name,value){
		obj[name]=value;
	}
	return obj;
}

function SwordSubmit(){
	WingsSubmit.apply(this, arguments);
};

