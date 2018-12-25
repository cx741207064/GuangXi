<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SB207zzsyjnssbCtrl_initView_SB207zzsyjnssbCtrl_initView.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SB207zzsyjnssbCtrl_initView_SB207zzsyjnssbCtrl_initView" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>金税三期业务工作门户</title>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'></meta>
		<script language="javascript" type="text/javascript" src="../../swordweb/core/jsimport/Sword.js"></script>
		<script language="javascript" type="text/javascript" src="/gy/ywpt/ywpt_zypz_gy.js"></script>
		<script language="javascript" type="text/javascript" src="../../sb/gy/sb_gy.js"></script>
		<script language="javascript" type="text/javascript" src="/gy/gy002/queryNsrxxByNsrsbhComm.js"></script>
		<script language="javascript" type="text/javascript" src="/sb/sb207/sb207_zzsyjnsb.js"></script>
		<script language='javascript' type='text/javascript' src='../../gy/gy011/gyPrint.js'></script>
		<script type="text/javascript" src="/gt3_public/cacheindex.js"></script>
	</head>	
	<body>
	<!-- 缓存 -->
	<div style="position: absolute; top: 0; left: -20"
		id="_persist_flash_wrap">
		<center>
			<object id="_persist_flash" name="_persist_flash" width="1"
				height="1" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">
				<param name="movie"
					value="/swordweb/widgets/SwordClientCache/swordcache.swf"></param>
				<param name="allowFullScreen" value="true"></param>
				<param name="allowscriptaccess" value="always"></param>
				<param name="quality" value="high" />
				<param name="flashvars" value="autostart=true" />
				<embed id="ex_persist_flash"
					src="/swordweb/widgets/SwordClientCache/swordcache.swf"
					type="application/x-shockwave-flash" width="1" height="1"
					allowscriptaccess="always" quality="high"
					flashvars="autostart=true"></embed>
			</object>
			<div style="display: none; font-size: 30px;" id="_persist_flash_text">为了系统使用更顺畅，请点击【允许】按钮。</div>
		</center>
	</div>
	<!-- 缓存 -->
		<div sword='PageInit' onFinish="onSuccessForm();"></div>
		<table cellpadding="0" cellspacing="0" border="0" width="100%">
			<tr>
				<td>
					<div id="topDiv">
						<div sword='SwordToolBar' name='sbToolBar' style="width: 100%" showType="mini"
							id="sbToolBarHaveTrees">
							<div name="org" type="custom">
							 <table style="height:25px; margin: -5px 0px 0px 0px">
                               <tr>
                                   <td valign="top" style="font-size: 12px;">主附表树:</td>
                                   <td valign="top">
                                       <div sword='SwordTree'  onNodeClick="openTab('BDA0610865');"
                                           name="SwordTreeJSON" inputWidth="300px" width="500px" select="true" autoShrink="true"
                                           dataStr=" {'data':[{'code':'BDA0610865','caption':'增值税预缴申报'},{'code':'table66','caption':'增值税附加税申报'}],'name':'sbZfbTree','sword':'SwordTree'}">
                                       </div>
                                   </td>
                               </tr>
                           </table>
                           </div>
                           
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<script type="text/javascript" src="/wsbs/pages/layout/layout3/cacheAdapter.js"></script>
	<script type="text/javascript" src="/sb/sb000/sb_tempsave.js"></script>
	<script type="text/javascript">
	
		
		_tempsave_arrVars['switch'] = 'N';
		_tempsave_arrVars['isVisible'] = true;
		_tempsave_arrVars['toolBarName'] = 'sbToolBar';
		
		window.addListener("load", function(){tempsave_init('sbToolBar')});
		
	</script>
</head>
<body >
	<div name="tempsave" type="save" caption="暂存" quickKey=""
		onclick="click_save_temp();"></div>
</body>
</html>

							<div name="save" type="save" caption="申报" enabled='true' onclick="click_save();"
								quickKey="Ctrl+S"></div>
							<!--<div name="edit" type="refresh" caption="下一户" enabled='true' onclick="click_edit();"
								quickKey="Ctrl+R"></div>-->							
							<div name="import" type="import" caption="导入" enabled='true' onclick="drxx();"
								quickKey="Ctrl+I"></div>
							<div name="print" type="print" caption="打印" enabled='true' onclick="gyTaxPrintWordOrExcel();"
								quickKey="Ctrl+P"></div>
							
<script languange="JavaScript">
var TYSL_TOOLBAR_JSOBJ = (function () {
	var _COMMON_BYSL_BUTTON=false;//是否添加不予受理按钮
	var _COMMON_BZNR_BUTTON=false;//是否添加补证内容按钮
	var _COMMON_SL_BUTTON=false;//是否添加受理按钮
	var toolbarName = ""//页面toolbar名称
	var byslButton = null;//不予受理按钮对象
	var bznrButton = null;//补证内容按钮对象
	var slButton = null;//受理按钮对象
	var djxh = "";
	var lcswsxDm = "";
	var slswsxDm = "";
	var lcslidVar = "";
	var ywwsuuidVar = "";
	var swsxDm = "";
	setTimeout(function(){ 
		if(typeof pc != "undefined"){//当pc不为未定义时，说明页面已经加载完毕
			var body = document.body;
            if($chk(body)){
            	var toolbarDiv = $(body).getElements('div[sword=SwordToolBar]');
            	if($chk(toolbarDiv)&&$chk(toolbarDiv[0])){
                    toolbarName = toolbarDiv[0].get('name');
                     _ADD_COMMON_BUTTON();
                 }
              }
		}else{
			setTimeout(arguments.callee, 10); 
		}
	},10);
	function _ADD_COMMON_BUTTON() {
		var toolBar = $w(toolbarName);
		if(_COMMON_BYSL_BUTTON){
	   		var obj = new Element("div",{//创建按钮定义div
	   			name:"__bysl",
	   			pclass:"delete",
	   			caption:"不予受理(E)",
	   			enabled:'false'
	   		});
	   		byslButton = _CREAT_BUTTON(obj,toolBar);	//创建按钮对象
        	byslButton.addEvent("click",function(e) {//添加点击事件
        		if(e.target.getParent().get('enabled')=='false') {
        			return;
        		}
        		bysl();
        	}.bind(this));
		}
		if(_COMMON_BZNR_BUTTON){
			var obj = new Element("div",{//创建按钮定义div
	   			name:"__bznr",
	   			pclass:"ticket",
	   			caption:"补正内容(R)",
	   			enabled:'false'
	   		});
	   		bznrButton = _CREAT_BUTTON(obj,toolBar);	//创建按钮对象
        	bznrButton.addEvent("click",function(e) {//添加点击事件
        		if(e.target.getParent().get('enabled')=='false') {
        			return;
        		}
        		bznr();
        	}.bind(this));
		}
		if(_COMMON_SL_BUTTON){
			var obj = new Element("div",{//创建按钮定义div
	   			name:"__sl",
	   			pclass:"inspect",
	   			caption:"打印受理通知书(Q)",
	   			enabled:'false'
	   		});
	   		slButton = _CREAT_BUTTON(obj,toolBar);	//创建按钮对象
        	slButton.addEvent("click",function(e) {//添加点击事件
        		if(e.target.getParent().get('enabled')=='false') {
        			return;
        		}
        		sl();
        	}.bind(this));
		}
        window.addEvent('keydown', function(e) {//给按钮添加快捷键
        	var event = new Event(e);
        	if(event.alt&&event.code=="69"){
           		if($chk(byslButton))byslButton.fireEvent('click');
        	}else if(event.alt&&event.code=="82"){
        		if($chk(bznrButton))bznrButton.fireEvent('click');
        	}else if(event.alt&&event.code=="81"){
        		if($chk(slButton))slButton.fireEvent('click');
        	}
        }.bind(this));  	
   	}
   	function _CREAT_BUTTON(obj,toolBar){
        var container = toolBar.pNode().getElement("div[name='container']");
        var box = container.getElement("div[name='box']");
        var button = toolBar.creatDefualtButton(
                   obj, obj.get('name'), null,
                   obj.get("pclass"),
                   obj.get("caption"),
                   obj.get("enabled"),"true");
          box.adopt(button);
          return button;
   	}
   	function _SET_DATA(xh,lcswsx,slswsx,lcslid,ywwsuuid, swsx){
	   	djxh = xh;
		lcswsxDm = lcswsx;
		slswsxDm = slswsx;
		lcslidVar = lcslid;
		ywwsuuidVar = ywwsuuid;
		swsxDm = swsx;
   	}
   	function bysl(){
   		var queryBtn = pc.create('SwordSubmit');
   		queryBtn.pushData('djxh',djxh);
		queryBtn.pushData('lcswsxDm',lcswsxDm);
		queryBtn.pushData('slswsxDm',slswsxDm);
		queryBtn.pushData('swsxDm',swsxDm);
		queryBtn.pushData('tzszlDm',"03");
   		if (typeof TYSL_YCJK_JSOBJ != "undefined") {
   			queryBtn.pushData('byslly', TYSL_YCJK_JSOBJ.getJkxmInfo());
   		}
   		queryBtn.pushData('lcslid', lcslidVar);
   		queryBtn.pushData('ywwsuuid', ywwsuuidVar);
   		queryBtn.pushData("dyfs", "TYSL_BYSL"); //统一受理调用公共打印框架时塞入此值由框架特殊处理
   		queryBtn.setCtrl('GY004PrintCtrl_initView');
   		swordOpenWin("", queryBtn);
   	}
   	function bznr(){
   		var queryBtn = pc.create('SwordSubmit');
   		queryBtn.pushData('djxh',djxh);
		queryBtn.pushData('lcswsxDm',lcswsxDm);
		queryBtn.pushData('slswsxDm',slswsxDm);
		queryBtn.pushData('swsxDm',swsxDm);
		queryBtn.pushData('tzszlDm',"02");
   		if (typeof TYSL_YCJK_JSOBJ != "undefined") {
   			queryBtn.pushData('byslly', TYSL_YCJK_JSOBJ.getJkxmInfo());
   		}
   		queryBtn.pushData('lcslid', lcslidVar);
   		queryBtn.pushData('ywwsuuid', ywwsuuidVar);
   		queryBtn.pushData("dyfs", "TYSL_BZNR"); //统一受理调用公共打印框架时塞入此值由框架特殊处理
   		queryBtn.setCtrl('GY004PrintCtrl_initView');
   		swordOpenWin("", queryBtn);
   	}
   	function sl(){
   		var queryBtn = pc.create('SwordSubmit');
   		queryBtn.pushData('djxh',djxh);
		queryBtn.pushData('lcswsxDm',lcswsxDm);
		queryBtn.pushData('slswsxDm',slswsxDm);
		queryBtn.pushData('swsxDm',swsxDm);
		queryBtn.pushData('tzszlDm',"01");
   		if (typeof TYSL_YCJK_JSOBJ != "undefined") {
   			queryBtn.pushData('byslly', TYSL_YCJK_JSOBJ.getJkxmInfo());
   		}
   		queryBtn.pushData('lcslid', lcslidVar);
   		queryBtn.pushData('ywwsuuid', ywwsuuidVar);
   		queryBtn.pushData("dyfs", "TYSL_SL"); //统一受理调用公共打印框架时塞入此值由框架特殊处理
   		queryBtn.setCtrl('GY004PrintCtrl_initView');
   		swordOpenWin("", queryBtn);
   	}
   	
	return {
	 	enableBysl : function(){
	 		if($chk(toolbarName)&&$w(toolbarName)){//存在该toolbar
	 			if(byslButton)$w(toolbarName).setEnabled("__bysl");
	 		}
	 	},
	 	disableBysl : function(){
	 		if($chk(toolbarName)&&$w(toolbarName)){//存在该toolbar
	 			if(byslButton)$w(toolbarName).setDisabled("__bysl");
	 		}
	 	},
	 	enableBznr : function(){
	 		if($chk(toolbarName)&&$w(toolbarName)){//存在该toolbar
	 			if(bznrButton)$w(toolbarName).setEnabled("__bznr");
	 		}
	 	},
	 	disableBznr : function(){
	 		if($chk(toolbarName)&&$w(toolbarName)){//存在该toolbar
	 			if(bznrButton)$w(toolbarName).setDisabled("__bznr");
	 		}
	 	},
	 	enableSl : function(){
	 		if($chk(toolbarName)&&$w(toolbarName)){//存在该toolbar
	 			if(slButton)$w(toolbarName).setEnabled("__sl");
	 		}
	 	},
	 	disableSl : function(){
	 		if($chk(toolbarName)&&$w(toolbarName)){//存在该toolbar
	 			if(slButton)$w(toolbarName).setDisabled("__sl");
	 		}
	 	},
	 	setData : function(xh,lcswsx,slswsx,lcslid,ywwsuuid, swsxDm){
	 		_SET_DATA(xh,lcswsx,slswsx,lcslid,ywwsuuid, swsxDm);
	 		TYSL_TOOLBAR_JSOBJ.enableBysl();
	 		TYSL_TOOLBAR_JSOBJ.enableBznr();
	 		TYSL_TOOLBAR_JSOBJ.enableSl();
	 		//DZDA_JSOBJ.init(lcswsx,slswsx);
	 		//DZDA_JSOBJ.setData(lcslid);
	 	},
	 	_setData : function(xh,lcswsx,slswsx,lcslid,ywwsuuid, swsxDm){
	 		_SET_DATA(xh,lcswsx,slswsx,lcslid,ywwsuuid, swsxDm);
	 		TYSL_TOOLBAR_JSOBJ.enableBysl();
	 		TYSL_TOOLBAR_JSOBJ.enableBznr();
	 		TYSL_TOOLBAR_JSOBJ.enableSl();
	 	}
	}
}());	
</script>
<script language="javascript" type="text/javascript" src="../../gy/tysl/tyslComm/tysl_saveSxslxx.js"></script>	

						</div>
						<div id="BDA0610865_div">
							<table border=0 align=center cellpadding=0 cellspacing=0 width="100%">
								<tr>
									<td colspan="100" width="100%" style="height: 180">
										<div sword="SwordForm" name="nsrxxForm" caption="纳税人信息" userdefine="true" panel="true"
											vType="fldiv">
											<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
												<tr style="display: none">
													<td colspan=100>
														<div name="cshBtn" sword="SwordSubmit" btnName="初始化" enabled="true" isShow="false"
															postType="ajax" class="submitbutton"></div>
													</td>
												</tr>
												<tr>
													<th style="width: 26%; text-align: right;" colspan="26" id="field2">
														<span class="red">*</span>纳税人识别号
													</th>
													<td style="width: 26%" colspan="26" align="center">
														<div name="nsrsbh" type="text" disable="true" rule="must" onkeyup="queryNsrxx('nsrxxForm')"></div>
													</td>

													<th style="width: 24%; text-align: right;" colspan="24" id="field4">
														纳税人名称
													</th>
													<td style="width: 24%" colspan="24" align="center">
														<div name="nsrmc" type="text"></div>
													</td>
												</tr>
												<tr>

													<th style="width: 26%; text-align: right;" colspan="26" id="field6">
														<span class="red">*</span>税款所属期起
													</th>
													<td style="width: 26%" colspan="26" align="center">
														<div name="skssqq" type="date" submitDateformat="yyyy-MM-dd" onchange="changeDate()"
															rule="must"></div>
													</td>

													<th style="width: 24%; text-align: right;" colspan="24" id="field7">
														<span class="red">*</span>税款所属期止
													</th>
													<td style="width: 24%" colspan="24" align="center">
														<div name="skssqz" type="date" submitDateformat="yyyy-MM-dd" onchange="changeDate()"
															rule="must"></div>
													</td>
												</tr>
												<tr>
                                                    <th style="width: 26%; text-align: right;" colspan="26" id="field10">
														<span class="red">*</span>是否增值税一般纳税人
													</th>
													<td style="width: 26%; text-align: left" colspan="26">
														&nbsp;&nbsp;
														<div name="ybrbz" type="radio" edit="true" col=2 rule="must_1" defValue="N"
															onClickAfter="changeYbrbz('ybrbz');">
															<div code="Y" caption="是"></div>
															<div code="N" caption="否"></div>
														</div>
													</td>
													<th style="width: 24%; text-align: right;" colspan="24" id="field10">
														<span class="red">*</span>是否适用一般计税方法
													</th>
													<td style="width: 24%; text-align: left" colspan="24">
														&nbsp;&nbsp;
														<div name="syybjsff" type="radio" edit="true" col=2 rule="must_1" defValue="N"
															onClickAfter="_checkRadio('syybjsff');">
															<div code="Y" caption="是"></div>
															<div code="N" caption="否"></div>
														</div>
													</td>
												</tr>
												<tr>

													<th style="width: 26%; text-align: right;" colspan="26" id="field13">
													<span class="red">*</span>项目编号
													</th>
													<td style="width: 26%" colspan="26" align="center">
														<div name="xmbh" type="text"></div>
													</td>

													<th style="width: 24%; text-align: right;" colspan="24" id="field15">
													<span class="red">*</span>项目名称
													</th>
													<td style="width: 24%" colspan="24" align="center">
														<div name="xmmc" type="text"></div>
													</td>
												</tr>
												<tr>

													<th style="width: 26%; text-align: right;" colspan="26" id="field17">
													<span class="red">*</span>项目地址
													</th>
													<td style="width: 74%" colspan="74" align="center">
														<div name="xmdz" type="text"></div>
													</td>
													<div name="djxh" type="hidden">
												</tr>
											</table>
										</div>

									</td>
								</tr>
								 <tr>
                                     <td colspan="100" width="100%" style="height:30">
                                           
<div sword="SwordGrid" name="flzlGrid" caption="附送资料" autoHeight="false"
	checkMoudle="false" fenye="false" dataX="100%"
	onAfterCreateCell="SwordGrid_onAfterCreateCell_flzlGrid()" dataY="200"
	align="center" style="display: none">
	<div name="flzlmc" caption="材料列表" type="label" x="60%"></div>
	<div name="sfbb" caption="是否必报" type="select" x="10%" disable="true"
		onChange="select_onChange_sfbb()">
		<div code="1" caption="是"></div>
		<div code="2" caption="否"></div>
	</div>
	<div name="sfcy" caption="是否查验" type="select" x="10%" defValue="1,1"
		disable="true">
		<div code="1" caption="否"></div>
		<div code="2" caption="是"></div>
		<div code="3" caption="否"></div>
		<div code="4" caption="否"></div>
	</div>
	<div name="sfgd" caption="是否归档" type="select" x="10%" defValue="2,1"
		disable="true">
		<div code="1" caption="是"></div>
		<div code="2" caption="否"></div>
		<div code="3" caption="否"></div>
		<div code="4" caption="否"></div>
	</div>
	<div name="check" type="checkbox" x="8%" data='true' allChk='false' caption='选中' onClick="select_onClick_xz()" OnCheckedChanged="alert(1);"></div>
</div>
<script language="javascript" type="text/javascript" src="../../gy/tysl/tyslComm/tysl_flzl.js">
</script>



                                     </td>
                                 </tr>
								<tr>
									<td colspan="100" width="100%" style="height: 80">
										<div sword="SwordForm" name="yzxm" id="yzxm" caption="增值税预缴税款信息" userdefine="true"
											panel="true" vType="fldiv">
											<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
												<tr style="display: none">
													<td colspan=100>
														<div name="cshBtn" sword="SwordSubmit" btnName="初始化" enabled="true" isShow="false"
															postType="ajax" class="submitbutton"></div>
													</td>
												</tr>
												<tr>
													<th style="width: 36%; text-align: center;" colspan="36" rowspan="2" id="field30">
														预征项目和栏次
													</th>

													<th style="width: 16%; text-align: center;" colspan="16" id="field21">
														销售额
													</th>

													<th style="width: 16%; text-align: center;" colspan="16" id="field23">
														扣除金额
													</th>

													<th style="width: 16%; text-align: center;" colspan="16" id="field22">
														预征率
													</th>

													<th style="width: 16%; text-align: center;" colspan="16" id="field24">
														预征税额
													</th>
												</tr>
												<tr>

													<th style="width: 16%; text-align: center;" colspan="16" id="field26">
														1
													</th>

													<th style="width: 16%; text-align: center;" colspan="16" id="field25">
														2
													</th>

													<th style="width: 16%; text-align: center;" colspan="16" id="field54">
														3
													</th>

													<th style="width: 16%; text-align: center;" colspan="16" id="field27">
														4
													</th>
												</tr>
											</table>
										</div>

									</td>
								</tr>
								<tr>
									<td colspan="100" width="100%" style="height: 50">
										<div sword="SwordGrid" name="yzxmGrid" id="yzxmGrid" caption="" dragWidth="true"
											autoHeight="false" fenye="false" showHJ="true" showHeader="false" fzbtId="yzxm"
											showConsole="false" checkMoudle="false" align="center" fenye="true" panel="true"
											dataX="100%" onAfterCreateRow="ywpt_createrow();">
											<div name="yzxmDm" caption="预征项目" type="select" x="26%" dataName="yzxmList"
												dataFilter="yzxmDataFilter()" handInput="false" popdisplay="{caption}" disable="true"
												isHjLabel="true" css="text-align:center" popDisplay="{code}|{caption}"
												onChange="_selectDataChange()" dataFilter="_selectDataFilter()">
											</div>

											<div name="lc" caption="栏次" type="rowNum" x="10%">
											</div>

											<div name="xse" caption="销售额" type="text" x="16%" hj="true"
												format="{'type':'number','format':'#,##0.00'}" defValue="0.00" css="text-align:right"
												defValue="0.00">
											</div>

											<div name="kcje" caption="扣除金额" type="text" x="16%" hj="true"
												format="{'type':'number','format':'#,##0.00'}" defValue="0.00" css="text-align:right"
												defValue="0.00">
											</div>
											<div name="sl1" format="{'type':'number','format':'#,##0.00'}" type="text" show="false"></div>
											<div name="yzl" caption="预征率" type="select" x="16%" dataName="yzlList"
												dataFilter="yzlDataFilter()" handInput="false" popdisplay="{caption}" defIndex="0"
												rule="must" css="text-align:right" onChange="sb207grid_js();">
											</div>

											<div name="yzse" caption="预征税额" type="text" x="16%" hj="true" disable="true"
												format="{'type':'number','format':'#,##0.00'}" defValue="0.00" css="text-align:right"
												defValue="0.00">
											</div>
											<div name="sybh" caption="税源编号" type="text"   disable="true"
												format="{'type':'number','format':'#,##0.00'}" defValue="0.00" css="text-align:center"
												defValue="0" show="false">
											</div>
											<div name="jsyj" caption="计税依据" type="text"  disable="true"
												format="{'type':'number','format':'#,##0.00'}" defValue="0.00" css="text-align:center"
												defValue="0.00" show="false">
											</div>
											<div name="ynse" caption="应纳税额" type="text"   disable="true"
												format="{'type':'number','format':'#,##0.00'}" defValue="0.00" css="text-align:center"
												defValue="0.00" show="false">
											</div>
											<div name="yjse" caption="预缴税额" type="text"   disable="true"
												format="{'type':'number','format':'#,##0.00'}" defValue="0.00" css="text-align:center"
												defValue="0.00" show="false">
											</div>
											<div name="yzxmGrid_zjh" caption="增行" console="button"
												onclick="insertOneRow('yzxmGrid');"></div>
											<div name="yzxmGrid_sch" caption="删行" console="button"
												onclick="deleteOneRow('yzxmGrid');"></div>
										</div>
									</td>
								</tr>
								<tr>
									<td colspan="100" width="100%" style="height: 90">
										<div sword="SwordForm" name="slxxForm" caption="受理信息" userdefine="true" panel="true"
											vType="fldiv" style="display:none">
											<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
												<tr style="display: none">
													<td colspan=100>
														<div name="cshBtn" sword="SwordSubmit" btnName="初始化" enabled="true" isShow="false"
															postType="ajax" class="submitbutton"></div>
													</td>
												</tr>
												<tr>
													<th style="width: 18%; text-align: right;" colspan="18" id="field37">
														<span class="red">*</span>是否自行申报
													</th>
													<td style="width: 18%; text-align: left" colspan="18">
														&nbsp;&nbsp;
														<div name="zxsb" type="radio" edit="true" col=2 rule="must_1" defValue='Y'
															onClickAfter="_checkRadio('zxsb');">
															<div code="Y" caption="是"></div>
															<div code="N" caption="否"></div>
														</div>
													</td>

													<th style="width: 16%; text-align: right;" colspan="16" id="field39">
														代理人
													</th>
													<td style="width: 16%" colspan="16" align="center">
														<div name="dlrxm" type="text"></div>
													</td>

													<th style="width: 16%; text-align: right;" colspan="16" id="field41">
														代理人地址
													</th>
													<td style="width: 16%" colspan="16" align="center">
														<div name="dlrdz" type="text"></div>
													</td>
												</tr>
												<tr>

													<th style="width: 18%; text-align: right;" colspan="18" id="field43">
														受理人
													</th>
													<td style="width: 18%" colspan="18" align="center">
														<div name="slrDm" type="text"></div>
													</td>

													<th style="width: 16%; text-align: right;" colspan="16" id="field45">
														受理日期
													</th>
													<td style="width: 16%" colspan="16" align="center">
														<div name="slrq" type="date" submitDateformat="yyyy-MM-dd" onchange="changeDate()"></div>
													</td>

													<th style="width: 16%; text-align: right;" colspan="16" id="field47">
														受理税务机关
													</th>
													<td style="width: 16%" colspan="16" align="center">
														<div name="slswjgDm" type="text"></div>
													</td>
												</tr>
											</table>
										</div>

									</td>
								</tr>
								<tr>
									<td colspan="100" width="100%" style="height: 30">

									</td>
								</tr>
							</table>


						</div>
						<!--<div id="BDA0610865_div">
                         <iframe id="BDA0610865_iframe" name="BDA0610865iframeName" src="" style="height: 525px; width: 100%" scrolling="auto"></iframe>
                     </div>
						--><div id="table66_div" style="display: none">
                         <iframe id="table66_iframe" name="table66iframeName" src="" style="height: 525px; width: 100%" scrolling="auto"></iframe>
                     </div>
					</div>
				</td>
			</tr>
		</table>
	</body>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"nsrxxForm","data":{"skssqq":{"value":"2017-11-01 15:32:08"},"skssqz":{"value":"2017-11-30 15:32:08"}},"sword":"SwordForm"},{"name":"slxxForm","data":{"slswjgDm":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"slrDm":{"value":""},"slrq":{"value":"2017-11-30"}},"sword":"SwordForm"},{"name":"nsrxxForm","data":{"skssqq":{"value":"2017-11-01 15:32:08"},"djxh":{"value":"10114501010114170071"},"nsrmc":{"value":"广西龙森胜贸易有限公司"},"nsrsbh":{"value":"91450107MA5KE0EQ2B"},"skssqz":{"value":"2017-11-30 15:32:08"}},"sword":"SwordForm"},{"data":[{"caption":"建筑服务","code":"101017100"},{"caption":"出租不动产","code":"101016600"},{"caption":"销售不动产","code":"101017700"}],"sword":"SwordSelect","dataName":"yzxmList"},{"name":"nextOneCtrl","value":"SB207zzsyjnssbCtrl","type":""},{"name":"sfFjsCsz","value":"N","type":""},{"name":"cwgzbz","value":"zcsb","type":""},{"name":"isShowBtn","value":"N","type":""},{"name":"lcswsxDm","value":"LCSXA061001040","type":""},{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"06ead3e7f2e142cd8ac3f76a4b646020","type":""}]}'></div>

