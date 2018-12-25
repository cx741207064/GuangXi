<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="form.sword_GY011GyDyCtrl_gyPrint.aspx.cs" Inherits="JlueTaxSystemGXGS.form_sword_GY011GyDyCtrl_gyPrint" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta http-equiv="X-UA-Compatible" content="IE=8" />
<meta name="renderer" content="ie-stand">
<title>打印</title>
<script language="javascript" type="text/javascript"
            src="../../swordweb/core/jsimport/Sword.js"></script>
<script type="text/javascript" src="/gy/lodopPrint/LodopFuncs.js"></script>
<script type="text/javascript" src="/gy/lodopPrint/gyPrint.js"></script>
<script type="text/javascript">
	debugger;
	var lodop;
	var printPageArray = [];
	var templateName = "";
	var templateType = "";
	function success(resData){
		debugger;
		$w('printBarButton').setHide('print_setup');
		$w('printBarButton').setHide('print_design');
		templateName = resData.getAttr('templateName');
		templateType = resData.getAttr('templateType')
		if(resData.getAttr('tsxx')!=null){
			var tsxx = document.getElementById('tsxx');
			tsxx.innerHTML = resData.getAttr('tsxx');
		}
  		if(resData.getAttr('dckg')!='Y'){
   			$w("printBarButton").setHide("export");
  		}
		setIframeHeight();
		var options = {
				top : '10mm',
				left : '0',
				width : 'RightMargin:0mm',//打印区域的宽度
				height : 'BottomMargin:10mm',//打印区域的高度
				viewTop :0,
				viewLeft:0	
//				viewWidth:2000,
//				viewHeight:2000
//	 			createType:'url'
		};
		//横向纵向显示
		if(resData.getAttr('lodopLandscape')=='Y'){
			options.intOrient = 2;
		}else{
			options.intOrient = 1;
		}
		if(resData.getAttr('templateType')=='excel'){
			options.createType = 'table';
			if(resData.getAttr("ccbg") =='Y'){
				options.createType = 'htm';
			}
		}
		if(resData.getAttr('zzlx')!=null){
			options.strPageName = resData.getAttr('zzlx');
		}
		if(resData.getAttr('printMode')!=null){
			options.printMode = resData.getAttr('printMode');
		}
		lodop = new WingsPrint(options);
		//页面赋值
		var forms = [];
        for(var i = 0;i < resData.data.length; i++){
            if(resData.data[i].sword == "SwordForm"){
            	forms[i] = pc.getResData(resData.data[i].name,resData).data;
                jsonToForm(forms[i],resData.data[i].name);
                var form = getVodata(resData.data[i].name, null);
                if(form.singlevo != null) {
                	var voObj = form.singlevo;
	                if(typeof voObj != "object") {
	                    alert("请输入正确的vo对象");
	                } else {
	                    for(var j in voObj) {
	                    	if(resData.getAttr('templateType')=='excel'){
	                    		var tds = document.getElementsByTagName('td');
	                    		for(var k = 0;k<tds.length;k++){
		                    		if(tds[k].innerHTML!=null&&tds[k].innerHTML.indexOf('{:'+j+'}')!=-1){
		                    			if(voObj[j].length>5){
		                    				var trHeight = tds[k].parentElement.style.height;
		                    				tds[k].parentElement.style.height = "";
		                    				if(trHeight!=""){
			                    				tds[k].parentElement.style.minHeight = trHeight;
		                    				}
		                    			}
		                    			var value = tds[k].innerHTML.replace(new RegExp('{:'+j+'}', 'g'),voObj[j]);
		                    			var showValue = value;
           								var type = tds[k].getAttribute("type");
           								var format = tds[k].getAttribute("format");
           								if(type!=null&&format!=null){
 	           								showValue = swordFormat(value,type,format);
           								}
           								tds[k].innerHTML = showValue;
		                    		}
	                    		}
	                    	}else{
		                    	var aDom = window.document.getElementsByName(j);
			                    for(var k = 0;k<aDom.length;k++){
			                    	lodop.replaceBookMark(aDom[k],voObj[j])
			        			}
	                    	}
	                    }
	                }
                }
            }
            else if(resData.data[i].sword == "SwordGrid"){
            	//所有行数据
            	var tdsArray = resData.data[i].trs;
            	if(tdsArray.length>0){
	            	//数据行数
            		var rowCount = tdsArray.length;
	            	//获取grid第一行数据
	            	var trObj = null;
	            	if(resData.getAttr('templateType')=='excel'){
		            	//获取所有tr对象
	            		var trs = window.document.getElementsByTagName('tr');
		            	var trLength = trs.length;
		            	for(var i1=0;i1<trLength;i1++){
		            		var rowIndex = 0;
		            		for(var l in tdsArray[0].tds){
		            			trObj = null;
		            			if(trs[i1].outerText.indexOf('{:'+l+'}')!=-1){
	           						rowIndex = trs[i1].rowIndex;
		            				trObj = trs[i1];
	           						break;
	           					}
		            		}
		            		if(trObj!=null){
		            			//处理合并
		            			var rowspanTd = [];
		            			var table = WingsParents(trObj,'table');
		            			for(var rowspani = 0;rowspani<rowIndex;rowspani++){
		            				for(var rowspanj = 0;rowspanj<table.rows[rowspani].cells.length;rowspanj++){
		            					if(table.rows[rowspani].cells[rowspanj].getAttribute('rowspan')>1){
		            						var rowspan = table.rows[rowspani].cells[rowspanj].getAttribute('rowspan');
		            						if(rowspani+parseInt(rowspan)-1>=rowIndex){
		            							rowspanTd.push(table.rows[rowspani].cells[rowspanj]);
		            						}
		            					}
		            				}
		            			}
		            			for (var m = 0; m < rowCount; m++) {
	    	           				var newTrObj = trObj.cloneNode(true);
    	           					var tds = newTrObj.getElementsByTagName("td");
    	           					var nullRowFlag = true;
    	           					for(var k = 0;k<tds.length;k++){
    	           						for ( var j in tdsArray[m].tds) {
    	           							if(tds[k].innerHTML.indexOf('{:'+j+'}')!=-1){
    	           								if(tdsArray[m].tds[j].value.length>5){
    	           									var trheight = tds[k].parentElement.style.height;
    	           									tds[k].parentElement.style.height = "";
    	           									if(trheight!=""){
	    	           									tds[k].parentElement.style.minHeight = trheight;
    	           									}
    			                    			}
    	           								var value = tds[k].innerHTML.replace(new RegExp('{:'+j+'}', 'g'),tdsArray[m].tds[j].value);
    	           								var showValue = value;
    	           								var type = tds[k].getAttribute("type");
    	           								var format = tds[k].getAttribute("format");
    	           								if(type!=null&&type!=null){
	    	           								showValue = swordFormat(value,type,format);
    	           								}
    	           								tds[k].innerHTML = showValue;
    	           								nullRowFlag = false;
    			                    		}
    	           						}
    	           					}
    	           					//标记未赋值格
    	           					for(var k = 0;k<tds.length;k++){
    	           						if(tds[k].innerHTML!=null&&tds[k].innerHTML.indexOf("{:")!=-1){
    	           							tds[k].innerHTML = "";
    	           						}
    	           					}
    	           					if(!nullRowFlag){
		    	           				trObj.parentNode.insertBefore(newTrObj, trObj);
		    	           				if(rowspanTd.length>0){
		    	           					for(var rowspanTdi = 0;rowspanTdi<rowspanTd.length;rowspanTdi++){
			    	           					rowspanTd[rowspanTdi].setAttribute('rowspan',Number(rowspanTd[rowspanTdi].getAttribute('rowspan'))+1);
		    	           					}
		    	           				}
    	           					}
	    	           			}
	    	           			trObj.parentNode.removeChild(trObj);
	    	           			if(rowspanTd.length>0){
    	           					for(var rowspanTdi = 0;rowspanTdi<rowspanTd.length;rowspanTdi++){
	    	           					rowspanTd[rowspanTdi].setAttribute('rowspan',Number(rowspanTd[rowspanTdi].getAttribute('rowspan'))-1);
    	           					}
    	           				}
	    	           		}
		            	}
	            	}else{
		           		for(var l in tdsArray[0].tds){
		           			var aDom = window.document.getElementsByName(l);
		           			if(aDom!=null&&aDom.length>0){
		           				//查找A标签所在行
				            	trObj = WingsParents(aDom[0],'tr');
		           			}
		           			if(trObj!=null){
			           			for (var m = 0; m < rowCount; m++) {
			           				var newTrObj = trObj.cloneNode(true);
			           				for ( var j in tdsArray[m].tds) {
			           					//遍历新行里所有A标签，找到对应替换的a标签位置
			           					for (var k = 0; k < newTrObj.getElementsByTagName("a").length; k++) {
				           					if(newTrObj.getElementsByTagName("a")[k].name==j){	
				           						//赋值
				           						lodop.replaceBookMark(newTrObj.getElementsByTagName("a")[k],tdsArray[m].tds[j].value);
			           						}
			           					}
			           				}
			           				trObj.parentNode.insertBefore(newTrObj, trObj);
			           			}
			           			trObj.parentNode.removeChild(trObj);
				            	break;
			           		}
		           		}
	            	}
	            	
            	}
			}
		}
		var trs = document.getElementsByTagName('tr');
		for(var nulltrsi=0;nulltrsi<trs.length;nulltrsi++){
			var tds = trs[nulltrsi].childNodes;
			var nullRowFlag = true;
			if(tds.length<=0){
				nullRowFlag = false;				
			}
			for(var tdsi = 0;tdsi<tds.length;tdsi++){
				if(tds[tdsi].innerHTML!=null&&tds[tdsi].innerHTML.indexOf("{:")!=-1){
	        		tds[tdsi].innerHTML = "";
	        	}else{
	        		nullRowFlag = false;
	        	}
			}
// 			if(nullRowFlag){
// 				trs[nulltrsi].removeNode(true);
// 			}
		}
//         var tds = document.getElementsByTagName('td');
//         for(var tdsi = 0;tdsi<tds.length;tdsi++){
//         	if(tds[tdsi].innerHTML.indexOf("{:")!=-1){
//         		tds[tdsi].innerHTML = "";
//         	}
//         }
		var printContent = window.document.getElementById('mainFrame').innerHTML;
		var tables = [];
		if(document.getElementById("mainFrame").document!=null){
			tables = document.getElementById("mainFrame").document.getElementsByTagName('table');
		}else{
			tables = document.getElementById("mainFrame").getElementsByTagName('table');
		}
		for(var tablesi = 0;tablesi<tables.length;tablesi++){
			var cssText = tables[tablesi].style.cssText;
			var a= cssText+";word-wrap:break-word;word-break:break-all;";
			tables[tablesi].style.cssText = a;
		}
		if(resData.getAttr('templateType')=='excel'){
			var tableObj = tables[0];
			if(tableObj!=null){
				var width = tableObj.offsetWidth;
				options.width = width;
				lodop.setOpts(options);
			}
		}
  		if('Y' == resData.getAttr('fykg')){
 			var colnum = 0;
 			for(var celli = 0;celli<tableObj.rows[0].cells.length;celli++){
 				var colspan = 1;
 				colspan = tableObj.cells[celli].getAttribute('colspan');
 				colnum = parseInt(colnum) +parseInt(colspan);
 			}
			var tfoot = document.createElement("tfoot");
			tfoot.setAttribute("id","lodopPage");
			var tr = document.createElement("tr");
			var th = document.createElement("th");
			th.setAttribute("align","center");
			th.setAttribute("height","30px");
			th.setAttribute("colspan",colnum);
			th.setAttribute("tindex",1);
			th.setAttribute("width","100%");
			th.innerHTML = '第<font tdata="PageNO" format="0">##</font>页/共<font tdata="PageCount" format="0" >##</font>页';
			tr.appendChild(th);
			tfoot.appendChild(tr);
			if(tableObj!=null){
				tableObj.appendChild(tfoot);
			}
  		}
 		
		printContent = window.document.getElementById('mainFrame').innerHTML;

		//兼容性处理
		//边框线chrome不显示
		WingsReplaceAll(printContent,':.5pt',':0.5px');
		WingsReplaceAll(printContent,'pt','px');
		//构建打印区域
		printPageArray.push('<html>'+printContent+'</html>');
		if(document.getElementById('lodopPage')!=null){
			document.getElementById('lodopPage').style.display = 'none';
		}
	}
	function setIframeHeight(){
		var toolBar = document.getElementById("toolbar");
		var tsxx = document.getElementById("tsxx");
		var height = document.documentElement.clientHeight-toolBar.offsetHeight-tsxx.offsetHeight-tsxx.offsetTop+"px";
		var frame = document.getElementById('mainFrame');
		frame.style.height = height;
	}
	//移植原逻辑
	function jsonToForm(json, name) {
		if ('array' == $type(json)) {
			json.each(function(v, i) {
				createOneForm(v);
			});
		} else if ('object' == $type(json)) {
			createOneForm(json);
		} else {
			return false;
		}
		return true;
		function createOneForm(oneForm) {
			var form = new Element('form', {
				'id' : name,
				'name' : name,
				'styles' : {
					'display' : 'none'
				}
			}).inject(window.document.body, 'bottom');
			for (e in oneForm) {
				var value = $defined(oneForm[e].value) ? oneForm[e].value
						: oneForm[e];
				if (!$defined(value))
					value = "";
				new Element('textarea', {
					'name' : e,
					'text' : value
				}).inject(form, 'bottom');
			}
		}

	}
	function getVodata(singlevoformName, volistformName) {
		var voListObj = new baseVoListObj();
		var formObj = document.forms[singlevoformName];
		if (formObj) {
			var vo = {};
			if (formObj.elements) {
				var elArray = formObj.elements;
				for (var i = elArray.length; i >= 1;) {
					i--;
					vo[elArray[i].name] = elArray[i].value;
				}
				voListObj.singlevo = vo;
			}

		}
		if (volistformName) {
			volistformName
					.each(function(item, index) {
						var formArray = document.getElementsByName(item);
						var formObj = null;
						if (formArray.length > 0)
							formObj = formArray[0];
						if (formObj != null & formObj.elements) {
							var vo = {};
							var elArray = formObj.elements;
							for (var i = elArray.length; i >= 0; i--) {
								vo[elArray[i].name] = elArray[i].value;
							}
							voListObj.volist.push(vo);
							if (index = 0) {
								voListObj.cols.push(formObj.elements[0].name);
								voListObj.captions
										.push(formObj.elements[0].caption ? formObj.elements[0].caption
												: "");
								voListObj.widths
										.push(formObj.elements[0].style.width);
							}
						}
					});
		}
		return voListObj;
	}
	function baseVoListObj() {
		this.singlevo = null;
		this.volist = [];
		this.cols = [];
		this.captions = [];
		this.widths = [];
	}
	function traverseNodes(nodes ,node){
		//判断是否是元素节点
			nodes.push(node);
			//判断该元素节点是否有子节点
			if(node.hasChildNodes){
				//得到所有的子节点
				var sonnodes = node.children;
				//遍历所哟的子节点
				for (var i = 0; i < sonnodes.length; i++) {
					//得到具体的某个子节点
					var sonnode = sonnodes.item(i);
					//递归遍历
					traverseNodes(nodes,sonnode);
				}
			}
	}
	function preview(){
		lodop.preview(printPageArray);
	}
	function print(){
		lodop.print(printPageArray);
		alert("已打印,请查看打印机");
	}
	function print_setup(){
		lodop.print_setup(printPageArray);
	}
	function print_design(){
		lodop.print_design(printPageArray);
	}
	function exportFile(){
	  	var path = getPath(document.getElementById('exportPath'));
		if(path==""){
			alert("请设置文件存放路径");
			return;
		}
		lodop.exportFile('UTF-8',path,printPageArray);
	}
	function getFilePath(){
		var path = browseFolder();
		if(path!=null){
			if(templateType=='excel'){
				path += templateName+'.xls';
			}else if(templateType=='word'){
				path += templateName+'.doc';
			}
			document.getElementById('exportPath').value = path;
		}
	}
	//附带不用修改浏览器安全配置的javascript代码，兼容ie， firefox全系列
	function getPath(obj)  
	{  
	  if(obj)  
	    {  
	 
	    if (window.navigator.userAgent.indexOf("MSIE")>=1)  
	      {  
	        obj.select();  
	 
	      return document.selection.createRange().text;  
	      }  
	 
	    else if(window.navigator.userAgent.indexOf("Firefox")>=1)  
	      {  
	      if(obj.files)  
	        {  
	 
	        return obj.files.item(0).getAsDataURL();  
	        }  
	      return obj.value;  
	      }  
	    return obj.value;  
	    }  
	}  
	//参数obj为input file对象
	function openExportWindow(){
 	  if(templateType=='excel'){
 	    var path = templateName+'.xls';
 	    lodop.exportExcelFile(path,printPageArray);
 	  }else{
		var div = '<div>导出文件路径：<input id="exportPath" type="text" value=""/><input id="xzwj" type="button" value="选择路径" onclick="getFilePath();"><input type="button" value="导出" onclick="exportFile();"></div>'
		swordAlertDiv(div,{
			width:850,   
            height:300
		});
		var ua=navigator.userAgent;
		if(ua.match(/MSIE\D?\d+/i)==null){
			var xzwj = document.getElementById('xzwj');
			xzwj.style.display = 'none';
		}
 	  }
	}
	function browseFolder() {
	    try {
	        var Message = "\u8bf7\u9009\u62e9\u6587\u4ef6\u5939"; //选择框提示信息
	        var Shell = new ActiveXObject("Shell.Application");
	        var Folder = Shell.BrowseForFolder(0, Message, 64, 17); //起始目录为：我的电脑
	        //var Folder = Shell.BrowseForFolder(0, Message, 0); //起始目录为：桌面
	        if (Folder != null) {
	            Folder = Folder.items(); // 返回 FolderItems 对象
	            Folder = Folder.item(); // 返回 Folderitem 对象
	            Folder = Folder.Path; // 返回路径
	            if (Folder.charAt(Folder.length - 1) != "\\") {
	                Folder = Folder + "\\";
	            }
	            return Folder;
	        }
	    }
	    catch (e) {
	        alert(e.message);
	    }
	}
	function swordFormat(value,type,format){
	  return sword_fmt.convertText(value,"{'type':'"+type+"','format':'"+format+"'}").value;
	}
	
</script>
</head>
<body>
<div sword='PageInit' onSuccess="success();"></div>
	<div id="toolbar" class="toolbar" name="printBarButton" sword="SwordToolBar">
		<div name="printpreview" type="print" caption="打印预览" onclick="preview();"></div>
		<div name="print" type="print" caption="直接打印" onclick="print();"></div>
		<div name="print_setup" type="print" caption="打印维护" onclick="print_setup();"></div>
		<div name="print_design" type="print" caption="打印设计" onclick="print_design();" style="display:none;"></div>
		<div name="export" type="export" caption="导出" onclick="openExportWindow()"></div>
	</div>
		<p id="tsxx"></p>
<div class="main" id="mainFrame"  style="overflow-x:auto;overflow-y:auto;width:99%">
	<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta name="ProgId" content="Excel.Sheet"/>
  <meta name="Generator" content="WPS Office ET"/>
  <!--[if gte mso 9]>
   <xml>
    <o:DocumentProperties>
     <o:Author>nawei</o:Author>
     <o:Created>2017-09-09T12:25:33</o:Created>
     <o:LastAuthor>nawei</o:LastAuthor>
     <o:LastSaved>2017-10-16T09:52:36</o:LastSaved>
    </o:DocumentProperties>
    <o:CustomDocumentProperties>
     <o:KSOProductBuildVer dt:dt="string">2052-10.1.0.6875</o:KSOProductBuildVer>
    </o:CustomDocumentProperties>
   </xml>
  <![endif]-->
  <style>
<!-- @page
	{margin:0.75in 0.71in 0.75in 0.71in;
	mso-header-margin:0.32in;
	mso-footer-margin:0.32in;}
tr
	{mso-height-source:auto;
	mso-ruby-visibility:none;}
col
	{mso-width-source:auto;
	mso-ruby-visibility:none;}
br
	{mso-data-placement:same-cell;}
.font0
	{color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font1
	{color:#000000;
	font-size:18.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"黑体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font2
	{color:#000000;
	font-size:9.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"微软雅黑";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font3
	{color:windowtext;
	font-size:9.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"微软雅黑";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font4
	{color:windowtext;
	font-size:9.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font5
	{color:windowtext;
	font-size:9.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"Tahoma";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font6
	{color:windowtext;
	font-size:9.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font7
	{color:#1F497D;
	font-size:15.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font8
	{color:#1F497D;
	font-size:18.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font9
	{color:#0000FF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:underline;
	text-underline-style:single;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font10
	{color:#1F497D;
	font-size:13.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font11
	{color:#FF0000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font12
	{color:#1F497D;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font13
	{color:#9C0006;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font14
	{color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font15
	{color:#9C6500;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font16
	{color:#3F3F76;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font17
	{color:#006100;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font18
	{color:#7F7F7F;
	font-size:11.0pt;
	font-weight:400;
	font-style:italic;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font19
	{color:#800080;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:underline;
	text-underline-style:single;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font20
	{color:#FA7D00;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font21
	{color:#000000;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font22
	{color:#3F3F3F;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font23
	{color:#FA7D00;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.font24
	{color:#FFFFFF;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:"宋体";
	mso-generic-font-family:auto;
	mso-font-charset:134;}
.style0
	{mso-number-format:"General";
	text-align:general;
	vertical-align:middle;
	white-space:nowrap;
	mso-rotate:0;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	border:none;
	mso-protection:locked visible;
	mso-style-name:"常规";
	mso-style-id:0;}
.style16
	{mso-number-format:"_ \\¥* \#\,\#\#0_ \;_ \\¥* \\-\#\,\#\#0_ \;_ \\¥* \0022-\0022_ \;_ \@_ ";
	mso-style-name:"货币[0]";
	mso-style-id:7;}
.style17
	{mso-pattern:auto none;
	background:#EBF1DE;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"20% - 强调文字颜色 3";}
.style18
	{mso-pattern:auto none;
	background:#FFCC99;
	color:#3F3F76;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	border:.5pt solid #7F7F7F;
	mso-style-name:"输入";}
.style19
	{mso-number-format:"_ \\¥* \#\,\#\#0\.00_ \;_ \\¥* \\-\#\,\#\#0\.00_ \;_ \\¥* \0022-\0022??_ \;_ \@_ ";
	mso-style-name:"货币";
	mso-style-id:4;}
.style20
	{mso-number-format:"_ * \#\,\#\#0_ \;_ * \\-\#\,\#\#0_ \;_ * \0022-\0022_ \;_ \@_ ";
	mso-style-name:"千位分隔[0]";
	mso-style-id:6;}
.style21
	{mso-pattern:auto none;
	background:#D8E4BC;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"40% - 强调文字颜色 3";}
.style22
	{mso-pattern:auto none;
	background:#FFC7CE;
	color:#9C0006;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"差";}
.style23
	{mso-number-format:"_ * \#\,\#\#0\.00_ \;_ * \\-\#\,\#\#0\.00_ \;_ * \0022-\0022??_ \;_ \@_ ";
	mso-style-name:"千位分隔";
	mso-style-id:3;}
.style24
	{mso-pattern:auto none;
	background:#C4D79B;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"60% - 强调文字颜色 3";}
.style25
	{color:#0000FF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:underline;
	text-underline-style:single;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"超链接";
	mso-style-id:8;}
.style26
	{mso-number-format:"0%";
	mso-style-name:"百分比";
	mso-style-id:5;}
.style27
	{color:#800080;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:underline;
	text-underline-style:single;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"已访问的超链接";
	mso-style-id:9;}
.style28
	{mso-pattern:auto none;
	background:#FFFFCC;
	border:.5pt solid #B2B2B2;
	mso-style-name:"注释";}
.style29
	{mso-pattern:auto none;
	background:#DA9694;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"60% - 强调文字颜色 2";}
.style30
	{color:#1F497D;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"标题 4";}
.style31
	{color:#FF0000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"警告文本";}
.style32
	{color:#1F497D;
	font-size:18.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"标题";}
.style33
	{color:#7F7F7F;
	font-size:11.0pt;
	font-weight:400;
	font-style:italic;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"解释性文本";}
.style34
	{color:#1F497D;
	font-size:15.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	border-left:none;
	border-top:none;
	border-right:none;
	border-bottom:1.5pt solid #4F81BD;
	mso-style-name:"标题 1";}
.style35
	{color:#1F497D;
	font-size:13.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	border-left:none;
	border-top:none;
	border-right:none;
	border-bottom:1.5pt solid #A7BFDE;
	mso-style-name:"标题 2";}
.style36
	{mso-pattern:auto none;
	background:#95B3D7;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"60% - 强调文字颜色 1";}
.style37
	{color:#1F497D;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	border-left:none;
	border-top:none;
	border-right:none;
	border-bottom:1.0pt solid #95B3D7;
	mso-style-name:"标题 3";}
.style38
	{mso-pattern:auto none;
	background:#B1A0C7;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"60% - 强调文字颜色 4";}
.style39
	{mso-pattern:auto none;
	background:#F2F2F2;
	color:#3F3F3F;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	border:.5pt solid #3F3F3F;
	mso-style-name:"输出";}
.style40
	{mso-pattern:auto none;
	background:#F2F2F2;
	color:#FA7D00;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	border:.5pt solid #7F7F7F;
	mso-style-name:"计算";}
.style41
	{mso-pattern:auto none;
	background:#A5A5A5;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	border:2.0pt double #3F3F3F;
	mso-style-name:"检查单元格";}
.style42
	{mso-pattern:auto none;
	background:#FDE9D9;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"20% - 强调文字颜色 6";}
.style43
	{mso-pattern:auto none;
	background:#C0504D;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"强调文字颜色 2";}
.style44
	{color:#FA7D00;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	border-left:none;
	border-top:none;
	border-right:none;
	border-bottom:2.0pt double #FF8001;
	mso-style-name:"链接单元格";}
.style45
	{color:#000000;
	font-size:11.0pt;
	font-weight:700;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	border-left:none;
	border-top:.5pt solid #4F81BD;
	border-right:none;
	border-bottom:2.0pt double #4F81BD;
	mso-style-name:"汇总";}
.style46
	{mso-pattern:auto none;
	background:#C6EFCE;
	color:#006100;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"好";}
.style47
	{mso-pattern:auto none;
	background:#FFEB9C;
	color:#9C6500;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"适中";}
.style48
	{mso-pattern:auto none;
	background:#DAEEF3;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"20% - 强调文字颜色 5";}
.style49
	{mso-pattern:auto none;
	background:#4F81BD;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"强调文字颜色 1";}
.style50
	{mso-pattern:auto none;
	background:#DCE6F1;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"20% - 强调文字颜色 1";}
.style51
	{mso-pattern:auto none;
	background:#B8CCE4;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"40% - 强调文字颜色 1";}
.style52
	{mso-pattern:auto none;
	background:#F2DCDB;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"20% - 强调文字颜色 2";}
.style53
	{mso-pattern:auto none;
	background:#E6B8B7;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"40% - 强调文字颜色 2";}
.style54
	{mso-pattern:auto none;
	background:#9BBB59;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"强调文字颜色 3";}
.style55
	{mso-pattern:auto none;
	background:#8064A2;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"强调文字颜色 4";}
.style56
	{mso-pattern:auto none;
	background:#E4DFEC;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"20% - 强调文字颜色 4";}
.style57
	{mso-pattern:auto none;
	background:#CCC0DA;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"40% - 强调文字颜色 4";}
.style58
	{mso-pattern:auto none;
	background:#4BACC6;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"强调文字颜色 5";}
.style59
	{mso-pattern:auto none;
	background:#B7DEE8;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"40% - 强调文字颜色 5";}
.style60
	{mso-pattern:auto none;
	background:#92CDDC;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"60% - 强调文字颜色 5";}
.style61
	{mso-pattern:auto none;
	background:#F79646;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"强调文字颜色 6";}
.style62
	{mso-pattern:auto none;
	background:#FCD5B4;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"40% - 强调文字颜色 6";}
.style63
	{mso-pattern:auto none;
	background:#FABF8F;
	color:#FFFFFF;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	mso-style-name:"60% - 强调文字颜色 6";}
td
	{mso-style-parent:style0;
	padding-top:1px;
	padding-right:1px;
	padding-left:1px;
	mso-ignore:padding;
	mso-number-format:"General";
	text-align:general;
	vertical-align:middle;
	white-space:nowrap;
	mso-rotate:0;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	font-family:宋体;
	mso-font-charset:134;
	border:none;
	mso-protection:locked visible;}
.xl65
	{mso-style-parent:style0;
	font-size:18.0pt;
	font-family:黑体, monospace;
	mso-font-charset:134;}
.xl66
	{mso-style-parent:style0;
	font-size:9.0pt;
	font-family:微软雅黑, sans-serif;
	mso-font-charset:134;}
.xl67
	{mso-style-parent:style0;
	text-align:center;
	font-size:18.0pt;
	font-family:黑体, monospace;
	mso-font-charset:134;}
.xl68
	{mso-style-parent:style0;
	text-align:right;
	font-size:9.0pt;
	font-family:微软雅黑, sans-serif;
	mso-font-charset:134;}
.xl69
	{mso-style-parent:style0;
	text-align:left;
	white-space:normal;
	mso-pattern:auto none;
	background:#FFFFFF;
	color:windowtext;
	font-size:9.0pt;
	font-weight:700;
	font-family:微软雅黑, sans-serif;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl70
	{mso-style-parent:style0;
	text-align:right;
	white-space:normal;
	mso-pattern:auto none;
	background:#FFFFFF;
	color:windowtext;
	font-size:9.0pt;
	font-weight:700;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl71
	{mso-style-parent:style0;
	text-align:left;
	white-space:normal;
	mso-pattern:auto none;
	background:#FFFFFF;
	color:windowtext;
	font-size:9.0pt;
	font-family:Tahoma;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl72
	{mso-style-parent:style0;
	text-align:right;
	white-space:normal;
	mso-pattern:auto none;
	background:#FFFFFF;
	color:windowtext;
	font-size:9.0pt;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl73
	{mso-style-parent:style0;
	text-align:right;
	mso-pattern:auto none;
	background:#FFFFFF;
	color:windowtext;
	font-size:9.0pt;
	font-weight:700;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl74
	{mso-style-parent:style0;
	text-align:left;
	white-space:normal;
	mso-pattern:auto none;
	background:#FFFFFF;
	color:windowtext;
	font-size:9.0pt;
	font-weight:700;
	font-family:微软雅黑, sans-serif;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;}
.xl75
	{mso-style-parent:style0;
	text-align:center;
	white-space:normal;
	mso-pattern:auto none;
	background:#FFFFFF;
	color:windowtext;
	font-size:9.0pt;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl76
	{mso-style-parent:style0;
	text-align:center;
	mso-pattern:auto none;
	background:#FFFFFF;
	color:windowtext;
	font-size:9.0pt;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl77
	{mso-style-parent:style0;
	text-align:center;
	font-size:9.0pt;
	font-family:微软雅黑, sans-serif;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl78
	{mso-style-parent:style0;
	text-align:right;
	font-size:9.0pt;
	font-family:微软雅黑, sans-serif;
	mso-font-charset:134;
	border:.5pt solid windowtext;}
.xl79
	{mso-style-parent:style0;
	text-align:center;
	font-size:9.0pt;
	font-family:微软雅黑, sans-serif;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-top:.5pt solid windowtext;
	border-right:.5pt solid windowtext;}
.xl80
	{mso-style-parent:style0;
	text-align:right;
	font-size:9.0pt;
	font-family:微软雅黑, sans-serif;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-top:.5pt solid windowtext;
	border-right:.5pt solid windowtext;}
.xl81
	{mso-style-parent:style0;
	text-align:left;
	white-space:normal;
	font-size:9.0pt;
	font-family:微软雅黑, sans-serif;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-top:.5pt solid windowtext;}
.xl82
	{mso-style-parent:style0;
	text-align:left;
	white-space:normal;
	font-size:9.0pt;
	font-family:微软雅黑, sans-serif;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-top:.5pt solid windowtext;
	border-right:.5pt solid windowtext;}
.xl83
	{mso-style-parent:style0;
	text-align:center;
	font-size:9.0pt;
	font-family:微软雅黑, sans-serif;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-right:.5pt solid windowtext;}
.xl84
	{mso-style-parent:style0;
	text-align:left;
	white-space:normal;
	font-size:9.0pt;
	font-family:微软雅黑, sans-serif;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;}
.xl85
	{mso-style-parent:style0;
	text-align:left;
	white-space:normal;
	font-size:9.0pt;
	font-family:微软雅黑, sans-serif;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-right:.5pt solid windowtext;}
.xl86
	{mso-style-parent:style0;
	text-align:center;
	font-size:9.0pt;
	font-family:微软雅黑, sans-serif;
	mso-font-charset:134;
	border-left:.5pt solid windowtext;
	border-right:.5pt solid windowtext;
	border-bottom:.5pt solid windowtext;}
 -->  </style>
  <!--[if gte mso 9]>
   <xml>
    <x:ExcelWorkbook>
     <x:ExcelWorksheets>
      <x:ExcelWorksheet>
       <x:Name>增值税预缴申报</x:Name>
       <x:WorksheetOptions>
        <x:DefaultRowHeight>270</x:DefaultRowHeight>
        <x:Selected/>
        <x:TopRowVisible>1</x:TopRowVisible>
        <x:Panes>
         <x:Pane>
          <x:Number>3</x:Number>
          <x:ActiveCol>0</x:ActiveCol>
          <x:ActiveRow>1</x:ActiveRow>
          <x:RangeSelection>A2:F2</x:RangeSelection>
         </x:Pane>
        </x:Panes>
        <x:ProtectContents>False</x:ProtectContents>
        <x:ProtectObjects>False</x:ProtectObjects>
        <x:ProtectScenarios>False</x:ProtectScenarios>
        <x:PageBreakZoom>100</x:PageBreakZoom>
        <x:Print>
         <x:ValidPrinterInfo/>
         <x:PaperSizeIndex>9</x:PaperSizeIndex>
         <x:HorizontalResolution>600</x:HorizontalResolution>
         <x:VerticalResolution>600</x:VerticalResolution>
        </x:Print>
       </x:WorksheetOptions>
      </x:ExcelWorksheet>
     </x:ExcelWorksheets>
     <x:ProtectStructure>False</x:ProtectStructure>
     <x:ProtectWindows>False</x:ProtectWindows>
     <x:SelectedSheets>0</x:SelectedSheets>
     <x:WindowHeight>8370</x:WindowHeight>
     <x:WindowWidth>20385</x:WindowWidth>
    </x:ExcelWorkbook>
   </xml>
  <![endif]-->
 </head>
 <body link="blue" vlink="purple">
  <table width="1000" border="0" cellpadding="0" cellspacing="0" style='width:750.00pt;border-collapse:collapse;table-layout:fixed;'>
   <col width="165" span="5" style='mso-width-source:userset;mso-width-alt:5280;'/>
   <col width="175" style='mso-width-source:userset;mso-width-alt:5600;'/>
   <tr height="53.27" class="xl65" style='height:39.95pt;mso-height-source:userset;mso-height-alt:799;'>
    <td class="xl67" height="53.27" width="1000" colspan="6" style='height:39.95pt;width:750.00pt;border-right:none;border-bottom:none;' x:str>增值税预缴申报</td>
   </tr>
   <tr height="26.67" class="xl65" style='height:20.00pt;mso-height-source:userset;mso-height-alt:400;'>
    <td class="xl68" height="26.67" colspan="6" style='height:20.00pt;border-right:none;border-bottom:none;' x:str>金额单位：元(列至角分)</td>
   </tr>
   <tr height="26.80" style='height:20.10pt;mso-height-source:userset;mso-height-alt:402;'>
    <td class="xl69" height="26.80" colspan="6" style='height:20.10pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>纳税人信息</td>
   </tr>
   <tr height="26.80" style='height:20.10pt;mso-height-source:userset;mso-height-alt:402;'>
    <td class="xl70" height="26.80" style='height:20.10pt;' x:str>*<font class="font6">纳税人识别号</font></td>
    <td class="xl71" colspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>{:nsrxxForm_nsrsbh}</td>
    <td class="xl72" x:str>纳税人名称</td>
    <td class="xl71" colspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>{:nsrxxForm_nsrmc}</td>
   </tr>
   <tr height="26.80" style='height:20.10pt;mso-height-source:userset;mso-height-alt:402;'>
    <td class="xl70" height="26.80" style='height:20.10pt;' x:str>*<font class="font6">税款所属期起</font></td>
    <td class="xl71" colspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>{:nsrxxForm_skssqq}</td>
    <td class="xl70" x:str>*<font class="font6">税款所属期止</font></td>
    <td class="xl71" colspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>{:nsrxxForm_skssqz}</td>
   </tr>
   <tr height="26.80" style='height:20.10pt;mso-height-source:userset;mso-height-alt:402;'>
    <td class="xl73" height="26.80" style='height:20.10pt;' x:str>*<font class="font6">是否增值税一般纳税人</font></td>
    <td class="xl71" colspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>{:nsrxxForm_ybrbz}</td>
    <td class="xl73" x:str>*<font class="font6">是否适用一般计税方法</font></td>
    <td class="xl71" colspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>{:nsrxxForm_syybjsff}</td>
   </tr>
   <tr height="26.80" style='height:20.10pt;mso-height-source:userset;mso-height-alt:402;'>
    <td class="xl70" height="26.80" style='height:20.10pt;' x:str>*<font class="font6">项目编号</font></td>
    <td class="xl71" colspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>{:nsrxxForm_xmbh}</td>
    <td class="xl70" x:str>*<font class="font6">项目名称</font></td>
    <td class="xl71" colspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>{:nsrxxForm_xmmc}</td>
   </tr>
   <tr height="26.80" style='height:20.10pt;mso-height-source:userset;mso-height-alt:402;'>
    <td class="xl70" height="26.80" style='height:20.10pt;' x:str>*<font class="font6">项目地址</font></td>
    <td class="xl71" colspan="5" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>{:nsrxxForm_xmdz}</td>
   </tr>
   <tr height="26.80" style='height:20.10pt;mso-height-source:userset;mso-height-alt:402;'>
    <td class="xl74" height="26.80" colspan="6" style='height:20.10pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>增值税预缴税款信息</td>
   </tr>
   <tr height="26.80" style='height:20.10pt;mso-height-source:userset;mso-height-alt:402;'>
    <td class="xl75" height="53.60" colspan="2" rowspan="2" style='height:40.20pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>预征项目和栏次</td>
    <td class="xl75" x:str>销售额</td>
    <td class="xl75" x:str>扣除金额</td>
    <td class="xl75" x:str>预征率</td>
    <td class="xl76" x:str>预征税额</td>
   </tr>
   <tr height="26.80" style='height:20.10pt;mso-height-source:userset;mso-height-alt:402;'>
    <td class="xl75" x:num>1</td>
    <td class="xl75" x:num>2</td>
    <td class="xl75" x:num>3</td>
    <td class="xl75" x:num>4</td>
   </tr>
   <tr height="26.80" style='height:20.10pt;mso-height-source:userset;mso-height-alt:402;'>
    <td class="xl77" height="26.80" style='height:20.10pt;' x:str>{:yzxmGrid_yzxmDm}</td>
    <td class="xl77" x:str>{:yzxmGrid_lc}</td>
    <td class="xl78" x:str>{:yzxmGrid_xse}</td>
    <td class="xl78" x:str>{:yzxmGrid_kcje}</td>
    <td class="xl78" x:str>{:yzxmGrid_yzl}</td>
    <td class="xl78" x:str>{:yzxmGrid_yzse}</td>
   </tr>
   <tr height="26.80" style='height:20.10pt;mso-height-source:userset;mso-height-alt:402;'>
    <td class="xl79" height="26.80" style='height:20.10pt;' x:str>合计</td>
    <td class="xl79" x:str="'--">--</td>
    <td class="xl80" x:str>{:yzxmGrid_xseHJ}</td>
    <td class="xl80" x:str>{:yzxmGrid_kcjeHJ}</td>
    <td class="xl80" x:str="'--">--</td>
    <td class="xl80" x:str>{:yzxmGrid_yzseHJ}</td>
   </tr>
   <tr height="49.33" class="xl66" style='height:37.00pt;mso-height-source:userset;mso-height-alt:740;'>
    <td class="xl77" height="156" rowspan="4" style='height:117.00pt;border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>授权声明</td>
    <td class="xl81" colspan="2" rowspan="2" style='border-right:none;border-bottom:none;' x:str><span style='mso-spacerun:yes;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><font class="font2">如果你已委托代理人填报，请填写下列资料：</font><font class="font2"><br/></font><font class="font2"><span style='mso-spacerun:yes;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></font><font class="font2">为代理一切税务事宜，现授权  （地址）</font><font class="font2"><span style='mso-spacerun:yes;'>&nbsp; </span></font><font class="font2">为本次纳税人的代理填报人，任何与本表有关的往来文件，都可寄予此人。</font></td>
    <td class="xl77" rowspan="4" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;' x:str>填表人申明</td>
    <td class="xl82" colspan="2" style='border-right:.5pt solid windowtext;border-bottom:none;' x:str>以上内容是真实的、可靠的、完整的。</td>
   </tr>
   <tr height="53.33" class="xl66" style='height:40.00pt;mso-height-source:userset;mso-height-alt:800;'>
    <td class="xl83" colspan="2" style='border-right:.5pt solid windowtext;border-bottom:none;'></td>
   </tr>
   <tr height="26.67" class="xl66" style='height:20.00pt;mso-height-source:userset;mso-height-alt:400;'>
    <td class="xl84" colspan="2" rowspan="2" style='border-right:none;border-bottom:.5pt solid windowtext;' x:str>授权人签字：</td>
    <td class="xl85" colspan="2" style='border-right:.5pt solid windowtext;border-bottom:none;' x:str>纳税人签字：</td>
   </tr>
   <tr height="26.67" class="xl66" style='height:20.00pt;mso-height-source:userset;mso-height-alt:400;'>
    <td class="xl86" colspan="2" style='border-right:.5pt solid windowtext;border-bottom:.5pt solid windowtext;'></td>
   </tr>
   <![if supportMisalignedColumns]>
    <tr width="0" style='display:none;'>
     <td width="165" style='width:124;'></td>
     <td width="175" style='width:131;'></td>
    </tr>
   <![endif]>
  </table>
 </body>
</html>

</div>
</body>
</html>
<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"form1","data":{"nsrxxForm_ybrbz":{"value":"是"},"nsrxxForm_skssqz":{"value":"2017-12-31"},"nsrxxForm_xmdz":{"value":""},"nsrxxForm_cshBtn":{"value":"初始化"},"nsrxxForm_nsrsbh":{"value":"91450107MA5KE0EQ2B"},"nsrxxForm_xmmc":{"value":""},"nsrxxForm_xmbh":{"value":""},"nsrxxForm_nsrmc":{"value":"广西龙森胜贸易有限公司"},"nsrxxForm_djxh":{"value":"10114501010114170071"},"nsrxxForm_syybjsff":{"value":"否"},"nsrxxForm_skssqq":{"value":"2017-12-01"}},"sword":"SwordForm"},{"name":"form2","data":{"yzxm_cshBtn":{"value":"初始化"}},"sword":"SwordForm"},{"name":"form3","data":{"slxxForm_dlrdz":{"value":""},"slxxForm_zxsb":{"value":"是"},"slxxForm_cshBtn":{"value":"初始化"},"slxxForm_dlrxm":{"value":""},"slxxForm_slswjgDm":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"slxxForm_slrDm":{"value":""},"slxxForm_slrq":{"value":"2017-12-05"}},"sword":"SwordForm"},{"trs":[{"status":null,"tds":{"flzlGrid_sfcy":{"value":"1"},"flzlGrid_printRowNum":{"value":"1"},"flzlGrid_flzlfs":{"value":""},"flzlGrid_xh":{"value":"1"},"flzlGrid_bsnsrlx":{"value":""},"flzlGrid_lcswsxDm":{"value":"LCSXA061001040"},"flzlGrid_flzlcllxDm":{"value":"1"},"flzlGrid_check":{"value":"1"},"flzlGrid_sfgd":{"value":"1"},"flzlGrid_slswsxDm":{"value":"SLSXA061001046"},"flzlGrid_flzlmc":{"value":"增值税预缴税款表"},"flzlGrid_flzlbz":{"value":"Y"},"flzlGrid_flzlbslxDm":{"value":"1"},"flzlGrid_sfbb":{"value":"1"},"flzlGrid_swjgDm":{"value":"00000000000"},"flzlGrid_flzlDm":{"value":"003114"}}},{"status":null,"tds":{"flzlGrid_sfcy":{"value":"2"},"flzlGrid_printRowNum":{"value":"2"},"flzlGrid_flzlfs":{"value":""},"flzlGrid_xh":{"value":"2"},"flzlGrid_bsnsrlx":{"value":""},"flzlGrid_lcswsxDm":{"value":"LCSXA061001040"},"flzlGrid_flzlcllxDm":{"value":"2"},"flzlGrid_check":{"value":"0"},"flzlGrid_sfgd":{"value":"2"},"flzlGrid_slswsxDm":{"value":"SLSXA061001046"},"flzlGrid_flzlmc":{"value":"与发包方签订的建筑合同原件"},"flzlGrid_flzlbz":{"value":"Y"},"flzlGrid_flzlbslxDm":{"value":"2"},"flzlGrid_sfbb":{"value":"2"},"flzlGrid_swjgDm":{"value":"00000000000"},"flzlGrid_flzlDm":{"value":"003115"}}},{"status":null,"tds":{"flzlGrid_sfcy":{"value":"2"},"flzlGrid_printRowNum":{"value":"3"},"flzlGrid_flzlfs":{"value":""},"flzlGrid_xh":{"value":"3"},"flzlGrid_bsnsrlx":{"value":""},"flzlGrid_lcswsxDm":{"value":"LCSXA061001040"},"flzlGrid_flzlcllxDm":{"value":"2"},"flzlGrid_check":{"value":"0"},"flzlGrid_sfgd":{"value":"2"},"flzlGrid_slswsxDm":{"value":"SLSXA061001046"},"flzlGrid_flzlmc":{"value":"与分包方签订的分包合同原件"},"flzlGrid_flzlbz":{"value":"Y"},"flzlGrid_flzlbslxDm":{"value":"2"},"flzlGrid_sfbb":{"value":"2"},"flzlGrid_swjgDm":{"value":"00000000000"},"flzlGrid_flzlDm":{"value":"003116"}}},{"status":null,"tds":{"flzlGrid_sfcy":{"value":"2"},"flzlGrid_printRowNum":{"value":"4"},"flzlGrid_flzlfs":{"value":""},"flzlGrid_xh":{"value":"4"},"flzlGrid_bsnsrlx":{"value":""},"flzlGrid_lcswsxDm":{"value":"LCSXA061001040"},"flzlGrid_flzlcllxDm":{"value":"2"},"flzlGrid_check":{"value":"0"},"flzlGrid_sfgd":{"value":"2"},"flzlGrid_slswsxDm":{"value":"SLSXA061001046"},"flzlGrid_flzlmc":{"value":"从分包方取得的发票原件"},"flzlGrid_flzlbz":{"value":"Y"},"flzlGrid_flzlbslxDm":{"value":"2"},"flzlGrid_sfbb":{"value":"2"},"flzlGrid_swjgDm":{"value":"00000000000"},"flzlGrid_flzlDm":{"value":"003117"}}},{"status":null,"tds":{"flzlGrid_sfcy":{"value":"1"},"flzlGrid_printRowNum":{"value":"5"},"flzlGrid_flzlfs":{"value":""},"flzlGrid_xh":{"value":"5"},"flzlGrid_bsnsrlx":{"value":""},"flzlGrid_lcswsxDm":{"value":"LCSXA061001040"},"flzlGrid_flzlcllxDm":{"value":"1"},"flzlGrid_check":{"value":"0"},"flzlGrid_sfgd":{"value":"1"},"flzlGrid_slswsxDm":{"value":"SLSXA061001046"},"flzlGrid_flzlmc":{"value":"与发包方签订的建筑合同复印件"},"flzlGrid_flzlbz":{"value":"Y"},"flzlGrid_flzlbslxDm":{"value":"2"},"flzlGrid_sfbb":{"value":"2"},"flzlGrid_swjgDm":{"value":"00000000000"},"flzlGrid_flzlDm":{"value":"003118"}}},{"status":null,"tds":{"flzlGrid_sfcy":{"value":"1"},"flzlGrid_printRowNum":{"value":"6"},"flzlGrid_flzlfs":{"value":""},"flzlGrid_xh":{"value":"6"},"flzlGrid_bsnsrlx":{"value":""},"flzlGrid_lcswsxDm":{"value":"LCSXA061001040"},"flzlGrid_flzlcllxDm":{"value":"1"},"flzlGrid_check":{"value":"0"},"flzlGrid_sfgd":{"value":"1"},"flzlGrid_slswsxDm":{"value":"SLSXA061001046"},"flzlGrid_flzlmc":{"value":"与分包方签订的分包合同复印件"},"flzlGrid_flzlbz":{"value":"Y"},"flzlGrid_flzlbslxDm":{"value":"2"},"flzlGrid_sfbb":{"value":"2"},"flzlGrid_swjgDm":{"value":"00000000000"},"flzlGrid_flzlDm":{"value":"003119"}}},{"status":null,"tds":{"flzlGrid_sfcy":{"value":"1"},"flzlGrid_printRowNum":{"value":"7"},"flzlGrid_flzlfs":{"value":""},"flzlGrid_xh":{"value":"7"},"flzlGrid_bsnsrlx":{"value":""},"flzlGrid_lcswsxDm":{"value":"LCSXA061001040"},"flzlGrid_flzlcllxDm":{"value":"1"},"flzlGrid_check":{"value":"0"},"flzlGrid_sfgd":{"value":"1"},"flzlGrid_slswsxDm":{"value":"SLSXA061001046"},"flzlGrid_flzlmc":{"value":"从分包方取得的发票复印件"},"flzlGrid_flzlbz":{"value":"Y"},"flzlGrid_flzlbslxDm":{"value":"2"},"flzlGrid_sfbb":{"value":"2"},"flzlGrid_swjgDm":{"value":"00000000000"},"flzlGrid_flzlDm":{"value":"003120"}}}],"name":"grid4","sword":"SwordGrid"},{"trs":[{"status":null,"tds":{"yzxmGrid_jsyj":{"value":"0.00"},"yzxmGrid_yzxmDm":{"value":"建筑服务"},"yzxmGrid_printRowNum":{"value":"1"},"yzxmGrid_yjse":{"value":"0.00"},"yzxmGrid_yzse":{"value":"0.00"},"yzxmGrid_sybh":{"value":"0.00"},"yzxmGrid_skssqq":{"value":"2017-12-01"},"yzxmGrid_rdpzuuid":{"value":"4637DDAAB5D0519D597983998AE05AB5"},"yzxmGrid_kcje":{"value":"0.00"},"yzxmGrid_sl1":{"value":"1.03"},"yzxmGrid_skssqz":{"value":"2017-12-31"},"yzxmGrid_xse":{"value":"0.00"},"yzxmGrid_zsxmDm":{"value":"10101"},"yzxmGrid_yzl":{"value":"0.03"},"yzxmGrid_lc":{"value":"1"},"yzxmGrid_ynse":{"value":"0.00"}}},{"status":null,"tds":{"yzxmGrid_jsyj":{"value":"0.00"},"yzxmGrid_yzxmDm":{"value":"出租不动产"},"yzxmGrid_printRowNum":{"value":"2"},"yzxmGrid_yjse":{"value":"0.00"},"yzxmGrid_yzse":{"value":"0.00"},"yzxmGrid_sybh":{"value":"0.00"},"yzxmGrid_skssqq":{"value":"2017-12-01"},"yzxmGrid_rdpzuuid":{"value":"0F37EA429B79FE7F10EB5E63CC92FCDB"},"yzxmGrid_kcje":{"value":"0.00"},"yzxmGrid_sl1":{"value":"1.05"},"yzxmGrid_skssqz":{"value":"2017-12-31"},"yzxmGrid_xse":{"value":"0.00"},"yzxmGrid_zsxmDm":{"value":"10101"},"yzxmGrid_yzl":{"value":"0.05"},"yzxmGrid_lc":{"value":"2"},"yzxmGrid_ynse":{"value":"0.00"}}},{"status":null,"tds":{"yzxmGrid_jsyj":{"value":"0.00"},"yzxmGrid_yzxmDm":{"value":"销售不动产"},"yzxmGrid_printRowNum":{"value":"3"},"yzxmGrid_yjse":{"value":"0.00"},"yzxmGrid_yzse":{"value":"0.00"},"yzxmGrid_sybh":{"value":"0.00"},"yzxmGrid_skssqq":{"value":"2017-12-01"},"yzxmGrid_rdpzuuid":{"value":"6A5C129DD682B7215222CBC087845CB3"},"yzxmGrid_kcje":{"value":"0.00"},"yzxmGrid_sl1":{"value":"1.05"},"yzxmGrid_skssqz":{"value":"2017-12-31"},"yzxmGrid_xse":{"value":"0.00"},"yzxmGrid_zsxmDm":{"value":"10101"},"yzxmGrid_yzl":{"value":"0.03"},"yzxmGrid_lc":{"value":"3"},"yzxmGrid_ynse":{"value":"0.00"}}}],"name":"grid5","sword":"SwordGrid"},{"name":"form6","data":{"flzlGrid_checkHJ":{"value":"1.00"},"flzlGrid_swjgDmHJ":{"value":"0.00"},"flzlGrid_sfgdHJ":{"value":"10.00"},"flzlGrid_sfcyHJ":{"value":"10.00"},"flzlGrid_flzlcllxDmHJ":{"value":"10.00"},"flzlGrid_flzlbslxDmHJ":{"value":"13.00"},"flzlGrid_flzlDmHJ":{"value":"21819.00"},"flzlGrid_sfbbHJ":{"value":"13.00"},"flzlGrid_xhHJ":{"value":"28.00"}},"sword":"SwordForm"},{"name":"form7","data":{"yzxmGrid_yzlHJ":{"value":"0.11"},"yzxmGrid_xseHJ":{"value":"0.00"},"yzxmGrid_ynseHJ":{"value":"0.00"},"yzxmGrid_zsxmDmHJ":{"value":"30303.00"},"yzxmGrid_yjseHJ":{"value":"0.00"},"yzxmGrid_lcHJ":{"value":"6.00"},"yzxmGrid_sl1HJ":{"value":"3.13"},"yzxmGrid_sybhHJ":{"value":"0.00"},"yzxmGrid_kcjeHJ":{"value":"0.00"},"yzxmGrid_yzxmDmHJ":{"value":"303051400.00"},"yzxmGrid_yzseHJ":{"value":"0.00"},"yzxmGrid_jsyjHJ":{"value":"0.00"}},"sword":"SwordForm"},{"name":"templatePath","value":"/template/sb/sbzzbdy/sb207/sb207_zzsyjnsb.xls","type":""},{"name":"title","value":"增值税预缴申报表","type":""},{"name":"isExport","value":"true","type":""},{"name":"printMode","value":"{\"PRINT_PAGE_PERCENT\":\"100%\"}","type":""},{"name":"isNewPrint","value":"N","type":""},{"name":"templateName","value":"sb207_zzsyjnsb","type":""},{"name":"templateType","value":"excel","type":""},{"name":"lodopLandscape","value":"Y","type":""},{"name":"dckg","value":"Y","type":""},{"name":"dzqh","value":"JNDS","type":""},{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"abf0d0562a0e4620916211bd16a6a970","type":""}]}'></div>

