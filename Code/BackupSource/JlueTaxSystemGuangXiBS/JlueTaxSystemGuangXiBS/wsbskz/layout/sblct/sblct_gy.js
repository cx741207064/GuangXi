//function(){ }();
//var $SwordAddSblct = (function(){})();
/*申报流程状态代码定义*/
var _gx_GyLcztClass = function() {
	var DM_ZDY_SBLCZT_CSH = "csh"; // 初始化
	/**
	 * 初始化
	 */
	this.getDM_ZDY_SBLCZT_CSH = function() {
		return DM_ZDY_SBLCZT_CSH;
	};
	var DM_ZDY_SBLCZT_SBTX = "sbtx"; // 填写
	this.getDM_ZDY_SBLCZT_SBTX = function() {
		return DM_ZDY_SBLCZT_SBTX;
	};
	var DM_ZDY_SBLCZT_SBTJ = "sbtj"; // 提交
	this.getDM_ZDY_SBLCZT_SBTJ = function() {
		return DM_ZDY_SBLCZT_SBTJ;
	};
	var DM_ZDY_SBLCZT_DYHZ = "dyhz"; // 打印
	this.getDM_ZDY_SBLCZT_DYHZ = function() {
		return DM_ZDY_SBLCZT_DYHZ;
	};
	var DM_ZDY_SBLCZT_SBWC = "sbwc"; // 完成
	this.getDM_ZDY_SBLCZT_SBWC = function() {
		return DM_ZDY_SBLCZT_SBWC;
	};
};
var _gx_GyLcztConstants = new _gx_GyLcztClass();

var _gx_syindex = 0;//执行首页方法次数
//切换申报流程图
function _gx_changeSblctb(lczt) {
	_gx_change(lczt);
}
function sblctChange(lczt) {
	change(lczt);
}

function change(lczt) {
	_gx_change(lczt);
}

//图片切换 /wsbs/pages/layout/layout5/sblct/layout/images
function _gx_change(lczt) {
	var index = lczt;
	if (index == null) {
		document.getElementById("sblct").setAttribute("src",
				"/wsbskz/layout/sblct/layout/images/0.png");//
	} else if (index == _gx_GyLcztConstants.getDM_ZDY_SBLCZT_CSH()) {
		document.getElementById("sblct").setAttribute("src",
				"/wsbskz/layout/sblct/layout/images/0.png");// 1
	} else if (index == _gx_GyLcztConstants.getDM_ZDY_SBLCZT_SBTX()) {
		document.getElementById("sblct").setAttribute("src",
				"/wsbskz/layout/sblct/layout/images/1.png");// 2
	} else if (index == _gx_GyLcztConstants.getDM_ZDY_SBLCZT_SBTJ()) {
		document.getElementById("sblct").setAttribute("src",
				"/wsbskz/layout/sblct/layout/images/2.png");// 3
	}

	else if (index == _gx_GyLcztConstants.getDM_ZDY_SBLCZT_DYHZ()) {
		document.getElementById("sblct").setAttribute("src",
				"/wsbskz/layout/sblct/layout/images/4.png");// 4
	} else if (index == _gx_GyLcztConstants.getDM_ZDY_SBLCZT_SBWC()) {
		document.getElementById("sblct").setAttribute("src",
				"/wsbskz/layout/sblct/layout/images/3.png");// 4
		if (syindex < 1) {
			try {
				top.window.querybydsbxx();// 待申报信息
				top.window.querysbjkxx();// 刷新待缴款信息
			} catch (e) {

			}
			_gx_syindex = _gx_syindex + 1;
		}
	}
}

/* 为财务报表查看页面 添加表单打印按钮，去除kz.js中已经添加的表单打印按钮 自己实现处理 */
function _gx_addSbbKzSubmitDivNf() {
	var tooBar = $(document.body).getElements('div[sword=SwordToolBar]').get(
			'name');
	if (tooBar.length != 0) {
		var toolBar = tooBar[0];
		if (!$chk(toolBar))
			return;
		var czszElement = new Element('div', {
			name : 'tysbbczsz',
			type : 'view',
			caption : '操作手册',
			onclick : 'clickCzsz_gy()',
			enabled : 'true'
		});
		var tbsmElement = new Element('div', {
			name : 'tysbbcjwt',
			type : 'help',
			caption : '填表说明',
			onclick : 'clickTbsm_gy()',
			enabled : 'true'
		});
		// var sblctElement = new Element('div',
		// {name:'tysbbcklc',type:'view',caption:'查看流程',onclick:'viewSblct()',enabled:'true'});
		$(document.body).getElements('div[name=' + toolBar + ']').grab(
				czszElement);
		$(document.body).getElements('div[name=' + toolBar + ']').grab(
				tbsmElement);
		// $(document.body).getElements('div[name='+toolBar+']').grab(sblctElement);

	} else {
		var toolBarElement = new Element('div', {
			name : 'ToolBarButton',
			sword : 'SwordToolBar',
			showType : 'mini'
		});
		var czszElement = new Element('div', {
			name : 'tysbbczsz',
			type : 'view',
			caption : '操作手册',
			onclick : 'clickCzsz_gy()',
			enabled : 'true'
		});
		var tbsmElement = new Element('div', {
			name : 'tysbbcjwt',
			type : 'help',
			caption : '填表说明',
			onclick : 'clickTbsm_gy()',
			enabled : 'true'
		});
		// var sblctElement = new Element('div',
		// {name:'tysbbcklc',type:'view',caption:'查看流程',onclick:'viewSblct()',enabled:'true'});
		$(toolBarElement).grab(czszElement);
		$(toolBarElement).grab(tbsmElement);
		// $(toolBarElement).grab(sblctElement);
		var wrapper = $(document.body).getElements('div[class=wrapper]')[0];
		if ($chk(wrapper))
			$(wrapper).grab(toolBarElement, 'top');
		else
			$(document.body).grab(toolBarElement, 'top');
	}
	var swordTree = $(document.body).getElements('div[sword=SwordToolBar]').get('name');
	if (swordTree.length != 0) {
		/*var swordTreename = swordTree[0];
		if (!$chk(swordTreename))
			return;
		var onclickfun = $(document.body).getElements(
				'div[type="print"][caption="打印"]').get("onclick");
		if (onclickfun.length != 0) {
			var onclickfunone = onclickfun[0];
			onclickfunone = onclickfunone.replace('(', '').replace(')', '')
					.replace(';', '');
			$(document.body).getElements('div[type="print"][caption="打印"]')
					.set("onclick", "sbwcLctkc('" + onclickfunone + "');");
		}*/
		// $(document.body).getElements('div[name='+swordTreename+']').fireEvent("onSelectHide","SelectHide();");type="print"
		// caption="打印"
	}
}
//申报完成流程图查看 
function _gx_sbwcLctkc(onclickfunone) {
	eval(onclickfunone + "();");
	var imgsrc = $$('#sblctdiv a img').getProperty("src");
	if (imgsrc.length != 0) {
		var imgsrcone = imgsrc[0];
		if (!$chk(imgsrcone))
			return;
		if (imgsrcone.indexOf("3.png") > 0) {
			changeSblctb(_gx_GyLcztConstants.getDM_ZDY_SBLCZT_DYHZ());
			sblctwc = true;
		}
	}
}
//添加流程图
function _gx_addImgElToBody() {
	if (divstyle && $chk(divstyle)) {
		if (divstyle == "sb039_gdzyssb") {
			divstyle = "height:25px;margin:0;padding:10px 30px 2px 10px;position:absolute; right:0px; top:0px; z-index:9999;float:right;vertical-align:middle;display:none;";
		} else if (divstyle == "zs063_xjpzhz") {
			divstyle = "height:25px;margin:0;padding:10px 30px 2px 10px;position:absolute; right:0px; top:-5px; z-index:9999;float:right;vertical-align:middle;display:none;";
		} else if (divstyle == "sb071_kjqysdssb") {
			divstyle = "height:25px;margin:0;padding:10px 30px 2px 10px;position:absolute; right:0px; top:70px; z-index:9999;float:right;vertical-align:middle;display:none;";
		} else {
			divstyle = "height:25px;margin:0;padding:1px 0px 1px 1px;position:absolute; right:0px; top:0px; z-index:9999;float:right;vertical-align:middle;display:none;";
		}
	}
	if (divstyle && $chk(divstyle)) {
		astyle = "padding:0px;10px;margin:0px 5px 0 5px;line-height:20px; text-align:center;font-size:14px; vertical-align:middle;";
	}

	var div = document.createElement("div");
	div.style.cssText = divstyle;
	div.id = "sblctdiv";

	var a1 = document.createElement("a");
	a1.style.cssText = astyle;
	a1.onclick = function() {
		clickSblct();
	};
	var img1 = document.createElement("img");
	img1.id = "sblct";
	img1.src = "/wsbskz/layout/sblct/layout/images/0.png";
	img1.height = 80;
	img1.width = 500;
	a1.appendChild(img1);

	var a2 = document.createElement("a");
	a2.style.cssText = astyle;
	a2.name = "czsz";
	a2.onclick = function() {
		clickCzsz_gy();
	};
	var img2 = document.createElement("img");
	img2.id = "czsz";
	img2.src = "/wsbskz/layout/sblct/layout/images/czsc.png";
	img2.alt = "操作手册";
	img2.height = 20;
	img2.width = 20;
	img2.align = "middle";
	var span2 = document.createElement("span");
	var cztext = document.createTextNode("操作手册");
	span2.appendChild(cztext);
	a2.appendChild(img2);
	a2.appendChild(span2);

	var a3 = document.createElement("a");
	a3.style.cssText = astyle;
	a3.name = "help";
	a3.onclick = function() {
		clickTbsm_gy();
	};
	var img3 = document.createElement("img");
	img3.id = "tbsm";
	img3.src = "/wsbskz/layout/sblct/layout/images/help.png";
	img3.alt = "填表说明";
	img3.height = 20;
	img3.width = 20;
	img3.align = "middle";
	var span3 = document.createElement("span");
	var smtext = document.createTextNode("填表说明");
	span3.appendChild(smtext);
	a3.appendChild(img3);
	a3.appendChild(span3);

	div.appendChild(a1);
	// div.appendChild(a2);
	// div.appendChild(a3);
	// posEl.injectAfter(div);
	// document.all.div[1].insertBefore(div,document.body.firstChild().firstChild());
	document.body.appendChild(div);
	// document.write(addStr);
	// document.close();
}

function _gx_viewSblct() {
	// 显示图片
	$('sblctdiv').setStyle('display', '');
}

function _gx_clickSblct() {
	// 单击时隐藏图片
	$('sblctdiv').setStyle('display', 'none');
}
//添加脚本
function _gx_addScriptToBody() {
	// $SwordLoader.importJs($SwordLoader.rootPath +
	// "wsbs/pages/layout/layout5/sblct/sblct_gy.js");
	$SwordLoader.writeCSS($SwordLoader.rootPath + "wsbskz/layout/styleex.css");
	$SwordLoader.writeCSS($SwordLoader.rootPath
			+ "wsbskz/layout/mbox/css/zxx.lib.css");
	$SwordLoader.importJs($SwordLoader.rootPath
			+ "wsbskz/layout/mbox/js/mt.mbox.js");
	$SwordLoader.importJs($SwordLoader.rootPath + "wsbskz/layout/common.js");

	// <link href="swordweb/html/error/styles/errorinfo.css" rel="stylesheet"
	// type="text/css"/>
	var addStr = '<link href="wsbskz/layout/styleex.css" rel="stylesheet" type="text/css"/>';
	addStr = addStr
			+ '<link href="wsbskz/layout/mbox/css/zxx.lib.css" rel="stylesheet" type="text/css"/>';
	addStr = addStr
			+ '<script type="text/javascript" src="wsbskz/layout/mbox/js/mt.mbox.js" />';
	addStr = addStr
			+ '<script type="text/javascript" src="wsbskz/layout/common.js" />';
	addStr = addStr + '<div style="height:20px;"/>';
	// document.write(addStr);
	// document.close();
}

function _gx_addValidate() {

}

function _gx_addInitCtrl() {
	setTimeout("openPageRemind_gy()", _gx_timeout);// 主页面打开时默认弹出使用帮助信息
}

/* 主页面加载完成时执行方法 */
function _gx_pageOnload() {
	_gx_addScriptToBody();// 给页面添加引用的文件
	_gx_addSbbKzSubmitDivNf();
	//_gx_addImgElToBody(); // 给页面添加流程图
	if (!nameTips || !$chk(nameTips)) {
		nameTips = new Hash();
	}
	try{
		addMouseEvent(nameTips); // 给页面添加提示信息
	}catch(e){e.message;}
	_gx_addValidate();
	_gx_addInitCtrl();
}

var _gx_timeout = 2000;
var _gx_flushtime = 5000;
var _gx_sblctwc = false;
window.onload = function(res) {
	_gx_pageOnload();
	// 定时刷新
	// setInterval("sblctChange()",flushtime);
	// 修改为延迟处理
	//setTimeout(_gx_sblctChangeTime, _gx_timeout);

};
/*流程图状态切换定时*/
function _gx_sblctChangeTime() {
	if (_gx_sblctwc)
		return;
	_gx_sblctChange();
	setTimeout(_gx_sblctChangeTime, _gx_flushtime);
};


//必须存在
function clickTbsm_gy(){
    //var nowHtml = '<div class=""></div>';
    //openBox('使用帮助',nowHtml);
	debugger;
    var currentBd = null;
    try{
    	currentBd = _gx_getCurrentBd();
    }catch(e){
    	e.message;
    }
    if(null == currentBd){
    	try{
    	   	currentBd = $w("sbZfbTree").getValue();
    	}catch(e){e.message;}
    }
   	if(null == currentBd){
   		try{
   	   	 	currentBd = $w("SwordTreeJSON").getValue();
   	   	}catch(e){e.message;}
    }
   	if(null == currentBd){
   		currentBd = "00";
   	}
    var dzbzdszlDm = _gx_bdConfig["dzbzdszlDm"];
    var bdzldm = _gx_bdConfig["bdzldm"];
    if(null == bdzldm || "" == bdzldm){
    	Mbox.remind("没有填表说明信息。", {
    		time: 1000,
    		overlay: false
    	});	
		return;
	}
    //var sbZfbTree = pc.getInitData('sbZfbTree');
    var currentHtml = "wsbskz/tbsm/"+dzbzdszlDm+"/"+bdzldm+currentBd+".html";
    //alert(currentHtml);
    if(FileIsExits(currentHtml)){
    	 openIframe('填表说明',currentHtml);
    }else{
    	Mbox.remind("没有填表说明信息。", {
    		time: 1000,
    		overlay: false
    	});	
    }
   // openIframe('填表说明',currentHtml);
}
//判断文件是否存在
function FileIsExits(filePath){
	var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	xmlhttp.open("GET",filePath,false);
	xmlhttp.send();
	if(xmlhttp.readyState==4){
		if(xmlhttp.status==200){
			return true;
		}else if(xmlhttp.status==404){
			return false;
		}
	}
}

function clickCzsz_gy(){
	var czscurl = _gx_bdConfig["czscurl"];
	if(null == czscurl || "" == czscurl){
		Mbox.remind("没有操作手册信息。", {
			time: 1000,
			overlay: false
		});	
		return;
	}
	var href = "wsbskz/czsc/"+czscurl;//车船税.html";
	window.open(href);
}

//必须存在
function openPageRemind_gy(){
	clickTbsm_gy();
	$("mboxWindow").addEvent('mouseleave',function(){
		Mbox.close();
	});
	setTimeout(function (){Mbox.close();}, 5000);
}

