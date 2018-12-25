<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SB001XfssbCtrl_initView_SB001XfssbCtrl_initView.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SB001XfssbCtrl_initView_SB001XfssbCtrl_initView" %>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
		<script language="javascript" type="text/javascript" src="../../swordweb/core/jsimport/Sword.js"></script>
		<script language="javascript" type="text/javascript" src="../../gt3_public/formula_engine.js"></script>
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
		<div class="wrapper">
			<div sword='PageInit' onFinish="init();"></div>
			<div>
				<div sword='SwordToolBar' name='sbToolBar' style="width: 100%" showType="mini" id="sbToolBarHaveTrees">
					<div name="org" type="custom">
						<table style="height: 25px; margin: -5px 0px 0px 0px">
							<tr>
								<td valign="top" style="font-size: 12px;">
									主附表树:
								</td>
								<td valign="top">
									<div sword='SwordTree' onNodeClick="openTab();" name="sbZfbTree" inputWidth="300px" width="500px" select="true" autoShrink="true" dataStr=" {'data':[{'code':'00','caption':'-- 请选择 --'}],'name':'sbZfbTree','sword':'SwordTree'}"></div>
								</td>
							</tr>
						</table>
					</div>
					<div name="export" type="export" caption="导入" quickKey="Ctrl+I" enabled='true' onclick='drxx();'></div>
					
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

					<div name="save" type="save" caption="申报" quickKey="Ctrl+S" enabled='true' onclick='save();'></div>
					<!--  <div name="edit" type="edit" caption="下一户" enabled='true' onclick='nextOne();'></div>-->
					<div name="dy" type="print" caption="打印" enabled="true" onclick='gyTaxPrintWordOrExcel();'></div>
					 
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
				<div id="oTMoT">
					<table cellpadding="0" cellspacing="0" border="0" width="100%">
						<tr>
							<td>
								<div id="table00">
									
<div sword="SwordForm" name="nsrxxForm" caption="纳税人信息" panel="true" noNextEvent="toGrid();" userdefine="true" vType="fldiv" onFinish="addEventForDate()">
	<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
		<colgroup>
			<col style="width: 20%"></col>
			<col style="width: 30%"></col>
			<col style="width: 20%"></col>
			<col style="width: 30%"></col>
		</colgroup>
		<tr>
			<th style="text-align: right;">
				<span class="red">*</span>
				申报类型
			</th>
			<td>
				<div name="sbsxDm1" type="select" rule="must" defValue="11"  onChange="changeSblx();"  disable="true" defIndex=0>
					<div code="11" caption="正常申报"></div>
					<div code="21" caption="纳税人自行补正"></div> 
				</div>

			</td>
			<th style="text-align: right;">
				<span class="red">*</span>
				申报日期
			</th>
			<td>
				<div name="sbrq1" type="date" disable="true" rule="must" onchange="checkSbrq();"></div>
			</td>
		</tr>
		<tr>
			<th style="text-align: right;">
				<span class="red">*</span>
				纳税人识别号
			</th>
			<td>
				<div name="nsrsbh" type="text" onkeyup="queryNsrxx();" rule="must" maxlength="21"></div>
			</td>
			<th style="text-align: right;">纳税人名称</th>
			<td colspan="3">
				<div name="nsrmc" type="text" disabled="true"></div>
			</td>
		</tr>
		
		<th style="text-align: right;">
			<span class="red">*</span>
			所属时期起
		</th>
		<td style="border-right: none;">
			<div name="skssqq" type="date" rule="must" onHide="changSkssq();" returnRealValue="true"  disable="true"></div>
		</td>
		<th style="border-left: none; border-right: none; text-align: center">至</th>
		<td style="border-left: none">
			<div name="skssqz" type="date" returnRealValue="true" rule="must" disable="true"></div>
		</td>
	</tr>
</table>
</div>
									
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



									<div id="qtG" style="position: absolute; zoom: 1; display: none; left: 6px; top: 230px; width: 98%">
										<div sword="SwordGrid" name="sbsjxxqtGrid" dataY="230" dataX="98%" align="center" showhj="true" fenye='false'>
											<div name="zspmDm" caption="应税消费品名称" type="select" dataName="DM_GY_ZSPM" isHjLabel="true" disable="true" x="20%"></div>
											<div name="sl1" caption="适用税率" disable="true" css="text-align:right" format="{'type':'number','format':'#,##0.000000'}" type="text" x="18%"></div>
											<div name="xssl" caption="销售数量" type="text" rule="number(14,4)" css="text-align:right" onblur="jisuanQt()" x="20%" format="{'type':'number','format':'#,##0.0000'}"></div>
											<div name="xse" caption="销售额" type="text" hj="true" onblur="jisuanQt()" x="20%" rule="number(16,2)" css="text-align:right" format="{'type':'number','format':'#,##0.00'}"></div>
											<div name="ynse" caption="应纳税额" type="text" hj="true" disable="true" css="text-align:right" format="{'type':'number','format':'#,##0.00'}" x="20%"></div>
										</div>
									</div>
									<div id="cpyG" style="position: absolute; zoom: 1; display: none; left: 6px; top: 230px; width: 98%">
										<div sword="SwordGrid" name="sbsjxxcpyGrid" dataY="230" dataX="98%" align="center" showhj="true" fenye='false'>
											<div name="zspmDm" caption="应税消费品名称" type="select" dataName="DM_GY_ZSPM" css="text-align:center" isHjLabel="true" disable="true" x="20%"></div>
											<div name="sl1" caption="适用税率(元/升)" disable="true" css="text-align:right" format="{'type':'number','format':'#,##0.00'}" type="text" x="18%"></div>
											<div name="xssl" caption="销售数量" type="text" rule="number(14,3)" css="text-align:right" format="{'type':'number','format':'#,##0.000'}" onblur="jisuanCpy()" x="20%"></div>
											<div name="ynse" caption="应纳税额" type="text" hj="true" disable="true" css="text-align:right" format="{'type':'number','format':'#,##0.00'}" x="20%"></div>
										</div>
									</div>
									<div sword="SwordForm" id ="sbsjxxFormID" name="sbsjxxForm" userdefine="true" caption="申报数据信息" style="width: 100%" panel="true">
										<table class="tab_form" id="sbsjxxFormTable" border="0" style="width: 100%" cellpadding="0" cellspacing="0">
											<tr>
												<th style="width: 15%">
													<span class="red">*</span>申报表类型
												</th>
												<td style="width: 85%">
													<!--<div name="sbblx" type="select" defIndex=0 rule="must" onChange="changeSbblx(1)">-->
													<div name="sbblx" type="select" inputDisplay="{code}|{caption}" popDisplay="{code}|{caption}" onChange="changeSbblx(1)" dataFilter="choose()" rule="must">
														<div code="01" caption="烟类应税消费品消费税纳税申报表"></div>
														<div code="02" caption="卷烟批发环节消费税纳税申报表"></div>
														<div code="03" caption="酒类消费税纳税申报表"></div>
														<div code="04" caption="成品油消费税纳税申报表"></div>
														<div code="05" caption="小汽车消费税纳税申报表"></div>
														<div code="06" caption="其他应税消费品消费税纳税申报表"></div>
														<div code="07" caption="电池消费税纳税申报表"></div>
														<div code="08" caption="涂料消费税纳税申报表"></div>
													</div>
												</td>
											</tr>
											<tr style="display: none">
												<td>
													<div name="ynseheji" id="ynseheji" type="text" defValue="0.00" style="display: none;"></div>
												</td>
												<td></td>
											</tr>
										</table>

										<table id="div1" class="tab_form" border="0" cellpadding="0" cellspacing="0" style="display: none;">
											<tr>
												<th style="width: 20%; text-align: center" rowspan="2">
													应税消费品名称
												</th>
												<th style="width: 20%; text-align: center" colspan="2">
													适用税率
												</th>
												<th style="width: 20%; text-align: center" rowspan="2">
													销售数量(万支)
												</th>
												<th style="width: 20%; text-align: center" rowspan="2">
													销售额
												</th>
												<th style="width: 20%; text-align: center" rowspan="2">
													应纳税额
												</th>
											</tr>
											<tr>
												<th style="width: 10%; text-align: center">
													定额税率
												</th>
												<th style="width: 10%; text-align: center">
													比例税率
												</th>
											</tr>
											<tr>
												<th style="text-align: right">
													卷烟（70元以上/条）
												</th>
												<td>
													<div name="sysldesljljy" css="text-align:right" type="text" defValue="30元/万支" disable="true">
													</div>
												</td>
												<td>
													<div name="syslblsljljy" css="text-align:right" type="text" defValue="0.56" disable="true">
													</div>
												</td>
												<td>
													<div name="xssljljy" css="text-align:right" type="text" disable="true" defValue="0.0000" format="{'type':'number','format':'#,##0.0000'}">
													</div>
												</td>
												<td>
													<div name="xsejljy" type="text" disable="true" css="text-align:right" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynsejljy" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th style="text-align: right">
													卷烟（70元以下/条）
												</th>
												<td>
													<div name="sysldeslyljy" css="text-align:right" type="text" defValue="30元/万支" disable="true">
													</div>
												</td>
												<td>
													<div name="syslblslyljy" css="text-align:right" type="text" defValue="0.36" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslyljy" css="text-align:right" type="text" disable="true" defValue="0.0000" format="{'type':'number','format':'#,##0.0000'}">
													</div>
												</td>
												<td>
													<div name="xseyljy" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynseyljy" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th style="text-align: right">
													雪茄烟
												</th>
												<td>
													<div name="sysldeslxjy" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="syslblslxjy" css="text-align:right" type="text" defValue="0.36" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslxjy" css="text-align:right" type="text" disable="true" defValue="0.0000" format="{'type':'number','format':'#,##0.0000'}">
													</div>
												</td>
												<td>
													<div name="xsexjy" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynsexjy" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th style="text-align: right">
													烟丝
												</th>
												<td>
													<div name="sysldeslys" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="syslblslys" css="text-align:right" type="text" defValue="0.30" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslys" css="text-align:right" type="text" disable="true" defValue="0.0000" format="{'type':'number','format':'#,##0.0000'}">
													</div>
												</td>
												<td>
													<div name="xseys" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynseys" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th style="text-align: right">
													合计
												</th>
												<td>
													<div name="sysldeslhj1" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="syslblslhj1" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslhj1" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="xsehj1" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="ynsehj1" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
										</table>

										<!--</div>

									<div id="div2">-->
										<table id="div2" class="tab_form" border="0" cellpadding="0" cellspacing="0" style="display: none;">

											<tr>
												<th style="width: 20%; text-align: center" rowspan="2">
													应税消费品名称
												</th>
												<th style="width: 10%; text-align: center" rowspan="2">
													税款所属期
												</th>
												<th style="width: 20%; text-align: center" colspan="2">
													适用税率
												</th>
												<th style="width: 20%; text-align: center" rowspan="2">
													销售数量（万支）
												</th>
												<th style="width: 20%; text-align: center" rowspan="2">
													销售额
												</th>
												<th style="width: 10%; text-align: center" rowspan="2">
													应纳税额
												</th>
											</tr>
											<tr>
												<th style="width: 10%; text-align: center">
													定额税率（元/万支）
												</th>
												<th style="width: 10%; text-align: center">
													比例税率
												</th>
											</tr>
											<tr>
												<th rowspan="2">
													卷烟
												</th>
												<td>
													<div name="skssqyljypf" css="text-align:right" type="text" defValue="5月10日以前（不含）" disable="true">
													</div>
												</td>
												<td>
													<div name="sysldeslyljypf" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="sysljy" css="text-align:right" type="text" defValue="0.05" disable="true">
													</div>
												</td>
												<td>
													<div name="xssljy" type="text" css="text-align:right" onblur="changeXsslhj2();" disable="true" defValue="0.0000" format="{'type':'number','format':'#,##0.0000'}">
													</div>
												</td>

												<td>
													<div name="xsejy" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynsejy" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div name="skssqyljypf2" css="text-align:right" type="text" defValue="5月10日以后（含）" disable="true">
													</div>
												</td>
												<td>
													<div name="sysldeslyljypf2" css="text-align:right" type="text" defValue="50" disable="true">
													</div>
												</td>
												<td>
													<div name="sysljy2" css="text-align:right" type="text" defValue="0.11" disable="true">
													</div>
												</td>
												<td>
													<div name="xssljy2" type="text" css="text-align:right" onblur="changeXsslhj2();" disable="true" defValue="0.0000" format="{'type':'number','format':'#,##0.0000'}">
													</div>
												</td>

												<td>
													<div name="xsejy2" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynsejy2" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th>
													合计
												</th>
												<td>
													<div name="skssqyljypfhj" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="sysldeslyljypfhj" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="syslhj2" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>

												<td>
													<div name="xsslhj2" type="text" css="text-align:right" defValue="0.0000" disable="true" format="{'type':'number','format':'#,##0.0000'}">
													</div>
												</td>
												<td>
													<div name="xsehj2" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynsehj2" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
										</table>

										<!--  </div>-->

										<!--<div id="div3">-->
										<table id="div3" class="tab_form" border="0" cellpadding="0" cellspacing="0" style="display: none;">

											<tr>
												<th style="width: 20%" rowspan="2">
													应税消费品名称
												</th>
												<th style="width: 20%" colspan="2">
													适用税率
												</th>
												<th style="width: 20%" rowspan="2">
													销售数量(白酒:斤/啤酒:吨)
												</th>
												<th style="width: 20%" rowspan="2">
													销售额
												</th>
												<th style="width: 20%" rowspan="2">
													应纳税额
												</th>
											</tr>
											<tr>
												<th>
													定额税率
												</th>
												<th>
													比例税率
												</th>
											</tr>
											<tr>
												<th>
													粮食白酒
												</th>
												<td>
													<div name="sysldesllsbj" css="text-align:right" type="text" defValue="0.5元/斤" disable="true">
													</div>
												</td>
												<td>
													<div name="syslblsllsbj" css="text-align:right" type="text" defValue="0.20" disable="true">
													</div>
												</td>
												<td>
													<div name="xssllsbj" css="text-align:right" type="text" disable="true" defValue="0">
													</div>
												</td>
												<td>
													<div name="xselsbj" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynselsbj" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th>
													薯类白酒
												</th>
												<td>
													<div name="sysldeslslbj" css="text-align:right" type="text" defValue="0.5元/斤" disable="true">
													</div>
												</td>
												<td>
													<div name="syslblslslbj" css="text-align:right" type="text" defValue="0.20" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslslbj" css="text-align:right" type="text" disable="true" defValue="0">
													</div>
												</td>
												<td>
													<div name="xseslbj" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynseslbj" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th>
													啤酒（3000元/吨以上）
												</th>
												<td>
													<div name="sysldesljlpj" css="text-align:right" type="text" defValue="250元/吨" disable="true">
													</div>
												</td>
												<td>
													<div name="syslblsljlpj" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="xssljlpj" css="text-align:right" type="text" disable="true" defValue="0">
													</div>
												</td>
												<td>
													<div name="xsejlpj" css="text-align:right" type="text" disable="true" defValue="--">
													</div>
												</td>
												<td>
													<div name="ynsejlpj" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th>
													啤酒（3000元/吨以下）
												</th>
												<td>
													<div name="sysldeslylpj" css="text-align:right" type="text" defValue="220元/吨" disable="true">
													</div>
												</td>
												<td>
													<div name="syslblslylpj" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslylpj" css="text-align:right" type="text" disable="true" defValue="0">
													</div>
												</td>
												<td>
													<div name="xseylpj" css="text-align:right" type="text" disable="true" defValue="--">
													</div>
												</td>
												<td>
													<div name="ynseylpj" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th>
													黄酒
												</th>
												<td>
													<div name="sysldeslhj" css="text-align:right" type="text" defValue="240元/吨" disable="true">
													</div>
												</td>
												<td>
													<div name="syslblslhj" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslhj" css="text-align:right" type="text" disable="true" defValue="0">
													</div>
												</td>
												<td>
													<div name="xsehj" css="text-align:right" type="text" disable="true" defValue="--">
													</div>
												</td>
												<td>
													<div name="ynsehj" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th>
													其他酒
												</th>
												<td>
													<div name="sysldeslqtj" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="syslblslqtj" css="text-align:right" type="text" defValue="0.10" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslqtj" css="text-align:right" type="text" disable="true" defValue="0">
													</div>
												</td>
												<td>
													<div name="xseqtj" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynseqtj" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<!-- 
											<tr>
												<th>
													酒精
												</th>
												<td>
													<div name="sysldesljj" css="text-align:right" type="text"
														defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="syslblsljj" css="text-align:right" type="text"
														defValue="0.05" disable="true">
													</div>
												</td>
												<td>
													<div name="xssljj" css="text-align:right" type="text"
														disable="true" defValue="0">
													</div>
												</td>
												<td>
													<div name="xsejj" css="text-align:right" type="text"
														disable="true" defValue="0.00"
														format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynsejj" css="text-align:right" type="text"
														disable="true" defValue="0.00"
														format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											 -->
											<tr>
												<th>
													合计
												</th>
												<td>
													<div name="sysldeslhj3" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="syslblslhj3" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslhj3" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="xsehj3" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="ynsehj3" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
										</table>
										<!--</div>-->

										<!--<div id="div4">-->
										<table id="div4" class="tab_form" border="0" cellpadding="0" cellspacing="0" style="display: none">
											<tr>
												<td>
													<div style="height: 290px;">
													</div>
												</td>
											</tr>
											<tr style="display: none">
												<td>
													<div name="ynsehj4" type="hidden"></div>
												</td>
											</tr>
										</table>
										<!--</div>-->

										<!--<div id="div5">-->
										<table id="div5" class="tab_form" border="0" cellpadding="0" cellspacing="0" style="display: none;">

											<tr>
												<th style="width: 20%" colspan="2">
													应税消费品名称
												</th>
												<th style="width: 20%">
													适用税率
												</th>
												<th style="width: 20%">
													销售数量
												</th>
												<th style="width: 20%">
													销售额
												</th>
												<th style="width: 20%">
													应纳税额
												</th>
											</tr>
											<tr>
												<th rowspan="7">
													乘用车
												</th>
												<th>
													气缸容量小于等于1.0升
												</th>
												<td>
													<div name="syslqg1" css="text-align:right" type="text" defValue="0.01" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslqg1" type="text" css="text-align:right" rule="numberInt" disable="true" defValue="0">
													</div>
												</td>

												<td>
													<div name="xseqg1" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynseqg1" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th>
													气缸容量大于1.0升小于等于1.5升
												</th>
												<td>
													<div name="syslqg2" css="text-align:right" type="text" defValue="0.03" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslqg2" type="text" css="text-align:right" rule="numberInt" disable="true" defValue="0">
													</div>
												</td>

												<td>
													<div name="xseqg2" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynseqg2" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th>
													气缸容量大于1.5升小于等于2.0升
												</th>
												<td>
													<div name="syslqg3" css="text-align:right" type="text" defValue="0.05" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslqg3" type="text" css="text-align:right" rule="numberInt" disable="true" defValue="0">
													</div>
												</td>

												<td>
													<div name="xseqg3" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynseqg3" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th>
													气缸容量大于2.0升小于等于2.5升
												</th>
												<td>
													<div name="syslqg4" css="text-align:right" type="text" defValue="0.09" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslqg4" type="text" css="text-align:right" rule="numberInt" disable="true" defValue="0">
													</div>
												</td>

												<td>
													<div name="xseqg4" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynseqg4" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th>
													气缸容量大于2.5升小于等于3.0升
												</th>
												<td>
													<div name="syslqg5" css="text-align:right" type="text" defValue="0.12" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslqg5" type="text" css="text-align:right" rule="numberInt" disable="true" defValue="0">
													</div>
												</td>

												<td>
													<div name="xseqg5" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynseqg5" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th>
													气缸容量大于3.0升小于等于4.0升
												</th>
												<td>
													<div name="syslqg6" css="text-align:right" type="text" defValue="0.25" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslqg6" type="text" css="text-align:right" rule="numberInt" disable="true" defValue="0">
													</div>
												</td>

												<td>
													<div name="xseqg6" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynseqg6" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th>
													气缸容量大于4.0升
												</th>
												<td>
													<div name="syslqg7" css="text-align:right" type="text" defValue="0.40" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslqg7" type="text" css="text-align:right" rule="numberInt" disable="true" defValue="0">
													</div>
												</td>

												<td>
													<div name="xseqg7" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynseqg7" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th colspan="2">
													中轻型商用客车
												</th>
												<td>
													<div name="syslzxsykc" css="text-align:right" type="text" defValue="0.05" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslzxsykc" type="text" css="text-align:right" rule="numberInt" disable="true" defValue="0">
													</div>
												</td>

												<td>
													<div name="xsezxsykc" type="text" css="text-align:right" defValue="0.00" disable="true" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynsezxsykc" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th colspan="2">
													合计
												</th>
												<td>
													<div name="syslhj5" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslhj5" type="text" css="text-align:right" defValue="--" disable="true">
													</div>
												</td>

												<td>
													<div name="xsehj5" type="text" css="text-align:right" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="ynsehj5" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
										</table>
										<!--</div>-->

										<!--</div>-->
										<table id="div6" class="tab_form" border="0" cellpadding="0" cellspacing="0" style="display: none">
											<tr>
												<td>
													<div style="height: 290px;">
													</div>
												</td>
											</tr>
											<tr style="display: none">
												<td>
													<div name="ynsehj6" type="hidden"></div>
												</td>
											</tr>
										</table>
										<!--</div>-->

										<table id="div7" class="tab_form" border="0" cellpadding="0" cellspacing="0" style="display: none;">
											<tr>
												<th style="width: 20%">
													应税消费品名称
												</th>
												<th style="width: 20%">
													适用税率
												</th>
												<th style="width: 20%">
													销售数量
												</th>
												<th style="width: 20%">
													销售额
												</th>
												<th style="width: 20%">
													应纳税额
												</th>
											</tr>
											<tr>
												<th>
													电池（不含铅蓄电池）
												</th>
												<td>
													<div name="sysldc1" css="text-align:right" type="text" defValue="0.04" disable="true">
													</div>
												</td>
												<td>
													<div name="xssldc1" type="text" css="text-align:right" disable="true" format="{'type':'number','format':'#,##0'}" defValue="0">
													</div>
												</td>

												<td>
													<div name="xsedc1" type="text" css="text-align:right" onblur="xseCheck();" defValue="0.00" format="{'type':'number','format':'#,##0.00'}" disable="true">
													</div>
												</td>
												<td>
													<div name="ynsedc1" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th>
													铅蓄电池
												</th>
												<td>
													<div name="sysldc2" css="text-align:right" type="text" defValue="0.04" disable="true">
													</div>
												</td>
												<td>
													<div name="xssldc2" type="text" css="text-align:right" disable="true" format="{'type':'number','format':'#,##0'}" defValue="0">
													</div>
												</td>

												<td>
													<div name="xsedc2" type="text" css="text-align:right" onblur="xseCheck();" defValue="0.00" format="{'type':'number','format':'#,##0.00'}" disable="true">
													</div>
												</td>
												<td>
													<div name="ynsedc2" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr>
												<th>
													合计
												</th>
												<td>
													<div name="syslhj7" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="xsslhj7" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="xsehj7" css="text-align:right" type="text" defValue="--" disable="true">
													</div>
												</td>
												<td>
													<div name="ynsehj7" css="text-align:right" type="text" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
										</table>

										<table id="div8" class="tab_form" border="0" cellpadding="0" cellspacing="0" style="display: none;">

											<tr>
												<th style="width: 20%">
													应税消费品名称
												</th>
												<th style="width: 20%">
													适用税率
												</th>
												<th style="width: 20%">
													销售数量
												</th>
												<th style="width: 20%">
													销售额
												</th>
												<th style="width: 20%">
													应纳税额
												</th>
											</tr>
											<tr>
												<th>
													涂料
												</th>
												<td>
													<div name="sysltl" css="text-align:right" type="text" defValue="0.04" disable="true">
													</div>
												</td>
												<td>
													<div name="xssltl" type="text" css="text-align:right" format="{'type':'number','format':'#,##0.00'}" disable="true" defValue="0">
													</div>
												</td>

												<td>
													<div name="xsetl" type="text" css="text-align:right" disable="true" defValue="0.00" onblur="xseCheck();" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
												<td>
													<div name="ynsetl" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
													<div name="ynsehj8" type="hidden">
												</td>
											</tr>
										</table>

										<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
											<colgroup>
												<col style="width: 20%"></col>
												<col style="width: 80%"></col>
											</colgroup>
											<tr id="tr03">
												<th style="text-align: right" id="bqzykcsecaption" name="bqzykcsecaption">
													本期准予扣除税额
												</th>
												<td>
													<div name="bqzykcse" type="text" css="text-align:right" disable="true" defValue="0.00" rule="number(16,2)_contrast;>=0" onblur="zykcseCheck();" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr id="tr01">
												<th style="text-align: right;">
													本期减（免）税额
												</th>
												<td>
													<div name="bqjse" type="text" css="text-align:right" rule="number(16,2)" defValue="0.00" onblur="checkJm()" format="{'type':'number','format':'#,##0.00'}">
													</div>
													<!--onblur="openJmxxPage()"-->
												</td>
											</tr>
											<tr id="tr02">
												<th style="text-align: right;">
													期初留抵税额
												</th>
												<td>
													<div name="qclqse" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr id="tr04">
												<th style="text-align: right">
													本期应抵扣税额
												</th>
												<td>
													<div name="bqydkse" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr id="tr05">
												<th style="text-align: right">
													期初未缴税额
												</th>
												<td>
													<div name="qcwjse" type="text" css="text-align:right" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr id="tr06">
												<th style="text-align: right">
													期末留抵税额
												</th>
												<td>
													<div name="qmldse" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr id="tr07">
												<th style="text-align: right">
													本期实际抵扣税额
												</th>
												<td>
													<div name="bqsjdkse" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr id="tr08">
												<th style="text-align: right">
													本期缴纳前期应纳税额
												</th>
												<td>
													<div name="bqjnqqynse" type="text" css="text-align:right" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr id="tr09">
												<th style="text-align: right">
													本期预缴税额
												</th>
												<td>
													<div name="bqyjse" type="text" css="text-align:right" rule="number" defValue="0.00" onblur="bijiaoyujiao()" format="{'type':'number','format':'#,##0.00'}">
													</div>
													<div name="yjse" type="text" style="display: none;"></div>
												</td>
											</tr>
											<tr id="tr10">
												<th style="text-align: right">
													本期应补（退）税额
												</th>
												<td>
													<div name="bqybtse" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr id="tr11">
												<th style="text-align: right">
													期末未缴税额
												</th>
												<td>
													<div name="qmwjse" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
											<tr id="tr12" style="display: none">
												<th style="text-align: right">
													已缴金额
												</th>
												<td>
													<div name="yijiaoje" type="text" css="text-align:right" disable="true" defValue="0.00" format="{'type':'number','format':'#,##0.00'}">
													</div>
												</td>
											</tr>
										</table>
										</div>
										<div sword="SwordForm" name="slxxForm" userdefine="true" caption="受理人信息" panel="true" vType="fldiv" style="display:none"  >
											<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
												<tr>
													<th style="width: 12%">
														经办人(签章)
													</th>
													<td style="width: 22%">
														<div name="jbr" type="text">
														</div>
													</td>
													<th style="width: 11%">
														财务负责人(签章)
													</th>
													<td style="width: 22%">
														<div name="cwfzr" type="text">
														</div>
													</td>
													<th style="width: 11%">
														联系电话
													</th>
													<td style="width: 22%">
														<div name="lxdh" type="text">
														</div>
													</td>
												</tr>
												<tr>
													<th>
														税务代理人名称
													</th>
													<td>
														<div name="swdlrmc" type="text">
														</div>
													</td>
													<th>
														授权人
													</th>
													<td>
														<div name="sqr" type="text">
														</div>
													</td>
													<th colspan="2"></th>
												</tr>
												<tr style="padding: 0;margin: 0;width: 100%;">
													<th rowspan="1" style="width: 12%">
														税务代理人地址
													</th>
													<td colspan="3" style="width: 88%;padding: 0;margin: 0;border: 0;">
														<table style="padding: 0;margin: 0;border: 0;">
															<tr style="width: 100%;">
																<th style="text-align: right; width: 5%;">
																	省份
																</th>
																<td align="center" style="width: 10%">
																	<div name="ywptxzqhsfselect" type="select" style="text-align: right" onChange="ywpt_clearJdxzData('slxxForm','ywptxzqhjdxzselect');" popDisplay="{caption}" dataName="ywptxzqhList"></div>
																</td>
																<th style="text-align: right; width: 5%;">
																	地市
																</th>
																<td align="center" style="width: 10%">
																	<div name="ywptxzqhdsselect" type="select" style="text-align: right" onChange="ywpt_clearJdxzData('slxxForm','ywptxzqhjdxzselect');" popDisplay="{caption}" parent="ywptxzqhsfselect" dataName="ywptxzqhList"></div>
																</td>
																<th style="text-align: right; width: 5%;">
																	区县
																</th>
																<td align="center" style="width: 10%">
																	<div name="ywptxzqhqxselect" type="select" style="text-align: right" onChange="ywpt_getJdxzData('slxxForm','ywptxzqhqxselect','ywptxzqhjdxzselect');" popDisplay="{caption}" parent="ywptxzqhdsselect" dataName="ywptxzqhList"></div>
																</td>
																<th style="text-align: right; width: 5%;">
																	街道乡镇
																</th>
																<td align="center" style="width: 12.5%">
																	<div name="ywptxzqhjdxzselect" type="select" style="text-align: right" popDisplay="{caption}" dataName="DM_GY_YWPTJDXZ"></div>
																</td>
															</tr>
														</table>
													</td>
													<th style="text-align: right;width: 12.5%;">
														详细地址
													</th>
													<td style="width: 25%">
														<div name="ywptxzqhxxdz" type="text"></div>
													</td>
												</tr>
											</table>
										</div>
									</div>
									<div id="table01" style="display: none">
										<iframe id="table01iframe" src="" name="table01iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table02" style="display: none">
										<iframe id="table02iframe" src="" name="table02iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table03" style="display: none">
										<iframe id="table03iframe" src="" name="table03iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table04" style="display: none">
										<iframe id="table04iframe" src="" name="table04iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table05" style="display: none">
										<iframe id="table05iframe" src="" name="table05iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table06" style="display: none">
										<iframe id="table06iframe" src="" name="table06iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table07" style="display: none">
										<iframe id="table07iframe" src="" name="table07iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table08" style="display: none">
										<iframe id="table08iframe" src="" name="table08iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table09" style="display: none">
										<iframe id="table09iframe" src="" name="table09iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table10" style="display: none">
										<iframe id="table10iframe" src="" name="table10iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table11" style="display: none">
										<iframe id="table11iframe" src="" name="table11iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table12" style="display: none">
										<iframe id="table12iframe" src="" name="table12iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table13" style="display: none">
										<iframe id="table13iframe" src="" name="table13iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table14" style="display: none">
										<iframe id="table14iframe" src="" name="table14iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table15" style="display: none">
										<iframe id="table15iframe" src="" name="table15iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table16" style="display: none">
										<iframe id="table16iframe" src="" name="table16iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table17" style="display: none">
										<iframe id="table17iframe" src="" name="table17iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table18" style="display: none">
										<iframe id="table18iframe" src="" name="table18iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table19" style="display: none">
										<iframe id="table19iframe" src="" name="table19iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table20" style="display: none">
										<iframe id="table20iframe" src="" name="table20iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table21" style="display: none">
										<iframe id="table21iframe" src="" name="table21iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table22" style="display: none">
										<iframe id="table22iframe" src="" name="table22iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table23" style="display: none">
										<iframe id="table23iframe" src="" name="table23iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table24" style="display: none">
										<iframe id="table24iframe" src="" name="table24iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table25" style="display: none">
										<iframe id="table25iframe" src="" name="table25iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table26" style="display: none">
										<iframe id="table26iframe" src="" name="table26iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table27" style="display: none">
										<iframe id="table27iframe" src="" name="table27iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table28" style="display: none">
										<iframe id="table28iframe" src="" name="table28iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table29" style="display: none">
										<iframe id="table29iframe" src="" name="table29iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table30" style="display: none">
										<iframe id="table30iframe" src="" name="table30iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table31" style="display: none">
										<iframe id="table31iframe" src="" name="table31iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table32" style="display: none">
										<iframe id="table32iframe" src="" name="table32iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table33" style="display: none">
										<iframe id="table33iframe" src="" name="table33iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table34" style="display: none">
										<iframe id="table34iframe" src="" name="table34iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table35" style="display: none">
										<iframe id="table35iframe" src="" name="table35iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table36" style="display: none">
										<iframe id="table36iframe" src="" name="table36iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table37" style="display: none">
										<iframe id="table37iframe" src="" name="table37iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table38" style="display: none">
										<iframe id="table38iframe" src="" name="table38iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table39" style="display: none">
										<iframe id="table39iframe" src="" name="table39iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table40" style="display: none">
										<iframe id="table40iframe" src="" name="table40iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table41" style="display: none">
										<iframe id="table41iframe" src="" name="table41iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table42" style="display: none">
										<iframe id="table42iframe" src="" name="table42iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table43" style="display: none">
										<iframe id="table43iframe" src="" name="table43iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table44" style="display: none">
										<iframe id="table44iframe" src="" name="table44iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table45" style="display: none">
										<iframe id="table45iframe" src="" name="table45iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table46" style="display: none">
										<iframe id="table46iframe" src="" name="table46iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table47" style="display: none">
										<iframe id="table47iframe" src="" name="table47iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table48" style="display: none">
										<iframe id="table48iframe" src="" name="table48iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table49" style="display: none">
										<iframe id="table49iframe" src="" name="table49iframe" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
									<div id="table66" style="display: none">
										<iframe id="table66iframe" name="table66iframeName" src="" style="height: 525px; width: 100%" scrolling="auto"></iframe>
									</div>
							</td>
						</tr>
					</table>
					</div>

					<div id="dqdetsxx" style="display: none; font-size: 14px; color: red; height: 50px; position: absolute; left: 110px; top: 156px">
						此纳税人存在定期定额信息，请点击
						<a id="bdtsxxIn" href="javascript:void(0);" onclick="showDqdexx();">这里</a>查看 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					</div>

				</div>

				<div id="SwordCacheData" query="[{T:'DM_GY_ZSPM', W:'T.ZSXM_DM==\'10102\' AND T.SJZSPM_DM != \'101020100\' AND T.SJZSPM_DM != \'101020200\' AND T.SJZSPM_DM != \'101020600\' AND T.SJZSPM_DM != \'101020900\' AND T.SJZSPM_DM != \'101029900\'', 'WN':'zspmDm'}]"></div>
				<script language='javascript' type='text/javascript' src='/gy/gy002/queryNsrxxByNsrsbhComm.js'></script>
				<script language='javascript' type='text/javascript' src='../../sb/sb000/sb000_Head.js'></script>
				<script language='javascript' type='text/javascript' src='../../sb/sb001/sb001_xfssb.js'></script>
				<script language='javascript' type='text/javascript' src='../../sb/sb001/sb001_xfssb_formula.js'></script>
				<script language='javascript' type='text/javascript' src='../../sb/sb001/sb001_xfssb_frame.js'></script>
				<script language='javascript' type='text/javascript' src='../../sb/gy/sb_gy.js'></script>
				<script language='javascript' type='text/javascript' src='/gy/gy011/gyPrint.js'></script>
	</body>

</html>
<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"nsrxxForm","data":{"bsryddh":{"value":"15778803036"},"tzze":{"value":"2000000.0"},"zgswjDm":{"value":"14501070000"},"cyrs":{"value":"3.0"},"gszgswjDm":{"value":""},"cwfzrxm":{"value":"邓凯玲"},"wz":{"value":""},"zcdlxdh":{"value":"13617873356"},"lsswdjyxqz":{"value":""},"djxh":{"value":"10114501010114170071"},"bsrlxdh":{"value":"15778803036"},"kyslrq":{"value":"2016-08-30 00:00:00"},"zzjglxDm":{"value":"1"},"bzfsDm":{"value":"3"},"bsrdzxx":{"value":"1918488842@qq.com"},"lsswdjyxqq":{"value":""},"yhsjnfsDm":{"value":""},"zsxmcxbzDm":{"value":""},"ssdabh":{"value":"91450107MA5KE0EQ2B"},"hyDm":{"value":"5164"},"nsrfyhyxxList":{"value":""},"zzlxDm":{"value":"80"},"scjyqxq":{"value":"2016-08-30 00:00:00"},"fddbrsfzjhm":{"value":"412727199005085478"},"cwfzryddh":{"value":"15778803036"},"fddbrsfzjlxDm":{"value":"201"},"kzztdjlxDm":{"value":"1110"},"gjhdqszDm":{"value":""},"slswjg":{"value":"14501070500"},"gytzbl":{"value":"0.0"},"gdgrs":{"value":"0.0"},"scjydlxdh":{"value":"13617873356"},"shxydm":{"value":"91450107MA5KE0EQ2B"},"fjmqybz":{"value":"N"},"scjydzxzqhszDm":{"value":"450107"},"scjyqxz":{"value":"2066-08-29 00:00:00"},"bsrxm":{"value":"邓凯玲"},"bsrsfzjzlDm":{"value":"201"},"gdghlxDm":{"value":"1"},"cwfzrdzxx":{"value":"1918488842@qq.com"},"nsrbm":{"value":""},"pzsljglxDm":{"value":"01"},"slrq":{"value":"2017-11-29 16:16:19"},"dkdjywrsbh":{"value":"91450107MA5KE0EQ2B"},"swdlrnsrsbh":{"value":""},"zcdzxzqhszmc":{"value":""},"kjzdzzDm":{"value":"102"},"bsr":{"value":"刘士鹏"},"nsrzgswjgxxList":{"value":""},"lrrDm":{"value":"14501940056"},"gszgswskfjDm":{"value":""},"sfzjlxDm":{"value":"201"},"jyfw":{"value":"批发、零售：金属材料、矿产品、电子产品、通信设备、安防监控设备（以上项目除国家专控产品）、钢材、建筑材料（除危险化学品及木材）、机械设备、管材及配件、五金交电、水暖器材、机电产品、化妆品、日用百货、服装鞋帽、皮革制品、计算机、劳保用品、体育器材、酒店用品；庆典活动策划、礼仪服务、文化艺术交流活动策划、会展服务（以上项目除国家有专项规定外）；设计、制作、代理、发布国内各类广告。"},"wcjyhdssglzmbh":{"value":""},"sbrq":{"value":"2017-11-29"},"djzclxmc":{"value":"私营有限责任公司"},"pzzmhwjh":{"value":""},"djjgmc":{"value":""},"pzsljgmc":{"value":""},"zcdz":{"value":"南宁市西乡塘区人民西路25号融昌邕江银座3号楼1单元1-2103号"},"zgswjmc":{"value":""},"zgswskfjDm":{"value":"14501070500"},"zrrBz":{"value":"N"},"nsrztDm":{"value":"03"},"hhrs":{"value":"0.0"},"hjszd":{"value":""},"fddbrdzxx":{"value":""},"zrrtzbl":{"value":"100.0"},"ssglyDm":{"value":"14501070052"},"gdslxDm":{"value":"1"},"scjydyzbm":{"value":"530000"},"swdjblbz":{"value":"Y"},"nsrsbh":{"value":"91450107MA5KE0EQ2B"},"slr":{"value":"000000dzswj"},"bsrgddh":{"value":"3321167"},"jdxzDm":{"value":"450107000"},"djjgDm":{"value":"14501940800"},"cwfzrsfzjhm":{"value":"450821199405073022"},"scjydz":{"value":"南宁市西乡塘区人民西路25号融昌邕江银座3号楼1单元1-2103号"},"tbrq1":{"value":"2017-11-29"},"kqccsztdjbz":{"value":"N"},"ynsrsbh":{"value":""},"tbrq":{"value":"2017-11-29"},"wjcyrs":{"value":"0.0"},"cwfzrsfzjzlDm":{"value":"201"},"nsrmc":{"value":"广西龙森胜贸易有限公司"},"swdlrlxdh":{"value":""},"fddbrgddh":{"value":"3321167"},"djrq":{"value":"2016-09-18 00:00:00"},"bsrsfzjhm":{"value":"450821199405073022"},"zzhm":{"value":"91450107MA5KE0EQ2B"},"djzclxDm":{"value":"173"},"whsyjsfjfxxdjbz":{"value":"Y"},"fddbrsfzjlxmc":{"value":""},"zfjglxDm":{"value":"0"},"fddbryddh":{"value":"13617873356"},"nsrztmc":{"value":""},"hsfsDm":{"value":"11"},"nsrywmc":{"value":""},"zcxs":{"value":""},"wztzbl":{"value":"0.0"},"zgswskfjmc":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"pzsljgDm":{"value":"450100000"},"sbrq1":{"value":"2017-11-29"},"dwlsgxDm":{"value":"51"},"scjydzxzqhszmc":{"value":""},"zzsjylb":{"value":"01,08"},"zzsqylxDm":{"value":"9"},"hymc":{"value":"金属及金属矿批发"},"cwfzrgddh":{"value":"3321167"},"zczb":{"value":"2000000.0"},"kzztdjlxmc":{"value":""},"hydm":{"value":"5164"},"swdlrmc":{"value":""},"skssqz":{"value":"2017-10-31"},"gsdjxh":{"value":""},"zgbm":{"value":"南宁市西乡塘区国家税务局"},"kjrwrmc":{"value":"广西龙森胜贸易有限公司"},"lrrq":{"value":"2016-09-18 15:39:06"},"skssqq":{"value":"2017-10-01"},"ggrs":{"value":"0.0"},"fddbrxm":{"value":"刘士鹏"},"jdxzmc":{"value":""},"zcdyzbm":{"value":"530000"},"gykglxDm":{"value":""},"ssglymc":{"value":""},"ygznsrlxDm":{"value":"22"},"zzjgDm":{"value":"MA5KE0EQ2"},"pgjgDm":{"value":""},"swdlrdzxx":{"value":""},"hylb":{"value":"金属及金属矿批发"},"xzqhszDm":{"value":"450107"},"zcdzxzqhszDm":{"value":"450107"}},"sword":"SwordForm"},{"name":"slxxForm","data":{"slswjgDm":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"slrDm":{"value":"000000dzswj"},"slrq":{"value":"2017-11-29"},"sqr":{"value":"邓凯玲"},"slr":{"value":"WSSB"},"slswjg":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"fddbr":{"value":"刘士鹏"},"ssgly":{"value":"周榆凯"},"shrDm":{"value":"周榆凯"},"jbr":{"value":"WSSB"},"lxdh":{"value":"13617873356"},"swjgmc":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"shrq":{"value":"2017-11-29"},"slrxm":{"value":"WSSB"},"bsrxm":{"value":"刘士鹏"},"tpr":{"value":"邓凯玲"},"swdlrjbr":{"value":"WSSB"}},"sword":"SwordForm"},{"name":"skssqq","value":"2017-10-01","type":""},{"name":"skssqz","value":"2017-10-31","type":""},{"name":"zgswskfjDm","value":"14501070500","type":""},{"name":"djxh","value":"10114501010114170071","type":""},{"name":"djzclxDm","value":"173","type":""},{"name":"nsrxxReturn","data":{"bsryddh":{"value":"15778803036"},"tzze":{"value":"2000000.0"},"zgswjDm":{"value":"14501070000"},"cyrs":{"value":"3.0"},"gszgswjDm":{"value":""},"cwfzrxm":{"value":"邓凯玲"},"wz":{"value":""},"zcdlxdh":{"value":"13617873356"},"lsswdjyxqz":{"value":""},"djxh":{"value":"10114501010114170071"},"bsrlxdh":{"value":"15778803036"},"kyslrq":{"value":"2016-08-30 00:00:00"},"zzjglxDm":{"value":"1"},"bzfsDm":{"value":"3"},"bsrdzxx":{"value":"1918488842@qq.com"},"lsswdjyxqq":{"value":""},"yhsjnfsDm":{"value":""},"zsxmcxbzDm":{"value":""},"ssdabh":{"value":"91450107MA5KE0EQ2B"},"hyDm":{"value":"5164"},"nsrfyhyxxList":{"value":""},"zzlxDm":{"value":"80"},"scjyqxq":{"value":"2016-08-30 00:00:00"},"fddbrsfzjhm":{"value":"412727199005085478"},"cwfzryddh":{"value":"15778803036"},"fddbrsfzjlxDm":{"value":"201"},"kzztdjlxDm":{"value":"1110"},"gjhdqszDm":{"value":""},"slswjg":{"value":"14501070500"},"gytzbl":{"value":"0.0"},"gdgrs":{"value":"0.0"},"scjydlxdh":{"value":"13617873356"},"shxydm":{"value":"91450107MA5KE0EQ2B"},"fjmqybz":{"value":"N"},"scjydzxzqhszDm":{"value":"450107"},"scjyqxz":{"value":"2066-08-29 00:00:00"},"bsrxm":{"value":"邓凯玲"},"bsrsfzjzlDm":{"value":"201"},"gdghlxDm":{"value":"1"},"cwfzrdzxx":{"value":"1918488842@qq.com"},"nsrbm":{"value":""},"pzsljglxDm":{"value":"01"},"slrq":{"value":"2017-11-29 16:16:19"},"dkdjywrsbh":{"value":"91450107MA5KE0EQ2B"},"swdlrnsrsbh":{"value":""},"zcdzxzqhszmc":{"value":""},"kjzdzzDm":{"value":"102"},"bsr":{"value":"刘士鹏"},"nsrzgswjgxxList":{"value":""},"lrrDm":{"value":"14501940056"},"gszgswskfjDm":{"value":""},"sfzjlxDm":{"value":"201"},"jyfw":{"value":"批发、零售：金属材料、矿产品、电子产品、通信设备、安防监控设备（以上项目除国家专控产品）、钢材、建筑材料（除危险化学品及木材）、机械设备、管材及配件、五金交电、水暖器材、机电产品、化妆品、日用百货、服装鞋帽、皮革制品、计算机、劳保用品、体育器材、酒店用品；庆典活动策划、礼仪服务、文化艺术交流活动策划、会展服务（以上项目除国家有专项规定外）；设计、制作、代理、发布国内各类广告。"},"wcjyhdssglzmbh":{"value":""},"sbrq":{"value":"2017-11-29"},"djzclxmc":{"value":"私营有限责任公司"},"pzzmhwjh":{"value":""},"djjgmc":{"value":""},"pzsljgmc":{"value":""},"zcdz":{"value":"南宁市西乡塘区人民西路25号融昌邕江银座3号楼1单元1-2103号"},"zgswjmc":{"value":""},"zgswskfjDm":{"value":"14501070500"},"zrrBz":{"value":"N"},"nsrztDm":{"value":"03"},"hhrs":{"value":"0.0"},"hjszd":{"value":""},"fddbrdzxx":{"value":""},"zrrtzbl":{"value":"100.0"},"ssglyDm":{"value":"14501070052"},"gdslxDm":{"value":"1"},"scjydyzbm":{"value":"530000"},"swdjblbz":{"value":"Y"},"nsrsbh":{"value":"91450107MA5KE0EQ2B"},"slr":{"value":"000000dzswj"},"bsrgddh":{"value":"3321167"},"jdxzDm":{"value":"450107000"},"djjgDm":{"value":"14501940800"},"cwfzrsfzjhm":{"value":"450821199405073022"},"scjydz":{"value":"南宁市西乡塘区人民西路25号融昌邕江银座3号楼1单元1-2103号"},"tbrq1":{"value":"2017-11-29"},"kqccsztdjbz":{"value":"N"},"ynsrsbh":{"value":""},"tbrq":{"value":"2017-11-29"},"wjcyrs":{"value":"0.0"},"cwfzrsfzjzlDm":{"value":"201"},"nsrmc":{"value":"广西龙森胜贸易有限公司"},"swdlrlxdh":{"value":""},"fddbrgddh":{"value":"3321167"},"djrq":{"value":"2016-09-18 00:00:00"},"bsrsfzjhm":{"value":"450821199405073022"},"zzhm":{"value":"91450107MA5KE0EQ2B"},"djzclxDm":{"value":"173"},"whsyjsfjfxxdjbz":{"value":"Y"},"fddbrsfzjlxmc":{"value":""},"zfjglxDm":{"value":"0"},"fddbryddh":{"value":"13617873356"},"nsrztmc":{"value":""},"hsfsDm":{"value":"11"},"nsrywmc":{"value":""},"zcxs":{"value":""},"wztzbl":{"value":"0.0"},"zgswskfjmc":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"pzsljgDm":{"value":"450100000"},"sbrq1":{"value":"2017-11-29"},"dwlsgxDm":{"value":"51"},"scjydzxzqhszmc":{"value":""},"zzsjylb":{"value":"01,08"},"zzsqylxDm":{"value":"9"},"hymc":{"value":"金属及金属矿批发"},"cwfzrgddh":{"value":"3321167"},"zczb":{"value":"2000000.0"},"kzztdjlxmc":{"value":""},"hydm":{"value":"5164"},"swdlrmc":{"value":""},"skssqz":{"value":"2017-10-31"},"gsdjxh":{"value":""},"zgbm":{"value":"南宁市西乡塘区国家税务局"},"kjrwrmc":{"value":"广西龙森胜贸易有限公司"},"lrrq":{"value":"2016-09-18 15:39:06"},"skssqq":{"value":"2017-10-01"},"ggrs":{"value":"0.0"},"fddbrxm":{"value":"刘士鹏"},"jdxzmc":{"value":""},"zcdyzbm":{"value":"530000"},"gykglxDm":{"value":""},"ssglymc":{"value":""},"ygznsrlxDm":{"value":"22"},"zzjgDm":{"value":"MA5KE0EQ2"},"pgjgDm":{"value":""},"swdlrdzxx":{"value":""},"hylb":{"value":"金属及金属矿批发"},"xzqhszDm":{"value":"450107"},"zcdzxzqhszDm":{"value":"450107"}},"sword":"SwordForm"},{"name":"tsswjggzlx","value":"0","type":""},{"name":"wssbbz","value":"Y","type":""},{"name":"skselbz","value":"Y","type":""},{"data":[{"caption":"北京市","pcode":"null","code":"110000"},{"caption":"天津市","pcode":"null","code":"120000"},{"caption":"河北省","pcode":"null","code":"130000"},{"caption":"石家庄市","pcode":"130000","code":"130100"},{"caption":"长安区","pcode":"130100","code":"130102"},{"caption":"桥西区","pcode":"130100","code":"130104"},{"caption":"新华区","pcode":"130100","code":"130105"},{"caption":"井陉矿区","pcode":"130100","code":"130107"},{"caption":"裕华区","pcode":"130100","code":"130108"},{"caption":"藁城区","pcode":"130100","code":"130109"},{"caption":"鹿泉区","pcode":"130100","code":"130110"},{"caption":"栾城区","pcode":"130100","code":"130111"},{"caption":"井陉县","pcode":"130100","code":"130121"},{"caption":"正定县","pcode":"130100","code":"130123"},{"caption":"行唐县","pcode":"130100","code":"130125"},{"caption":"灵寿县","pcode":"130100","code":"130126"},{"caption":"高邑县","pcode":"130100","code":"130127"},{"caption":"深泽县","pcode":"130100","code":"130128"},{"caption":"赞皇县","pcode":"130100","code":"130129"},{"caption":"无极县","pcode":"130100","code":"130130"},{"caption":"平山县","pcode":"130100","code":"130131"},{"caption":"元氏县","pcode":"130100","code":"130132"},{"caption":"赵县","pcode":"130100","code":"130133"},{"caption":"辛集市","pcode":"130000","code":"130181"},{"caption":"晋州市","pcode":"130100","code":"130183"},{"caption":"新乐市","pcode":"130100","code":"130184"},{"caption":"唐山市","pcode":"130000","code":"130200"},{"caption":"路南区","pcode":"130200","code":"130202"},{"caption":"路北区","pcode":"130200","code":"130203"},{"caption":"古冶区","pcode":"130200","code":"130204"},{"caption":"开平区","pcode":"130200","code":"130205"},{"caption":"丰南区","pcode":"130200","code":"130207"},{"caption":"丰润区","pcode":"130200","code":"130208"},{"caption":"曹妃甸区","pcode":"130200","code":"130209"},{"caption":"滦县","pcode":"130200","code":"130223"},{"caption":"滦南县","pcode":"130200","code":"130224"},{"caption":"乐亭县","pcode":"130200","code":"130225"},{"caption":"迁西县","pcode":"130200","code":"130227"},{"caption":"玉田县","pcode":"130200","code":"130229"},{"caption":"遵化市","pcode":"130200","code":"130281"},{"caption":"迁安市","pcode":"130200","code":"130283"},{"caption":"秦皇岛市","pcode":"130000","code":"130300"},{"caption":"海港区","pcode":"130300","code":"130302"},{"caption":"山海关区","pcode":"130300","code":"130303"},{"caption":"北戴河区","pcode":"130300","code":"130304"},{"caption":"青龙满族自治县","pcode":"130300","code":"130321"},{"caption":"昌黎县","pcode":"130300","code":"130322"},{"caption":"抚宁县","pcode":"130300","code":"130323"},{"caption":"卢龙县","pcode":"130300","code":"130324"},{"caption":"邯郸市","pcode":"130000","code":"130400"},{"caption":"邯山区","pcode":"130400","code":"130402"},{"caption":"丛台区","pcode":"130400","code":"130403"},{"caption":"复兴区","pcode":"130400","code":"130404"},{"caption":"峰峰矿区","pcode":"130400","code":"130406"},{"caption":"邯郸县","pcode":"130400","code":"130421"},{"caption":"临漳县","pcode":"130400","code":"130423"},{"caption":"成安县","pcode":"130400","code":"130424"},{"caption":"大名县","pcode":"130400","code":"130425"},{"caption":"涉县","pcode":"130400","code":"130426"},{"caption":"磁县","pcode":"130400","code":"130427"},{"caption":"肥乡县","pcode":"130400","code":"130428"},{"caption":"永年县","pcode":"130400","code":"130429"},{"caption":"邱县","pcode":"130400","code":"130430"},{"caption":"鸡泽县","pcode":"130400","code":"130431"},{"caption":"广平县","pcode":"130400","code":"130432"},{"caption":"馆陶县","pcode":"130400","code":"130433"},{"caption":"魏县","pcode":"130400","code":"130434"},{"caption":"曲周县","pcode":"130400","code":"130435"},{"caption":"武安市","pcode":"130400","code":"130481"},{"caption":"邢台市","pcode":"130000","code":"130500"},{"caption":"桥东区","pcode":"130500","code":"130502"},{"caption":"桥西区","pcode":"130500","code":"130503"},{"caption":"邢台县","pcode":"130500","code":"130521"},{"caption":"临城县","pcode":"130500","code":"130522"},{"caption":"内丘县","pcode":"130500","code":"130523"},{"caption":"柏乡县","pcode":"130500","code":"130524"},{"caption":"隆尧县","pcode":"130500","code":"130525"},{"caption":"任县","pcode":"130500","code":"130526"},{"caption":"南和县","pcode":"130500","code":"130527"},{"caption":"宁晋县","pcode":"130500","code":"130528"},{"caption":"巨鹿县","pcode":"130500","code":"130529"},{"caption":"新河县","pcode":"130500","code":"130530"},{"caption":"广宗县","pcode":"130500","code":"130531"},{"caption":"平乡县","pcode":"130500","code":"130532"},{"caption":"威县","pcode":"130500","code":"130533"},{"caption":"清河县","pcode":"130500","code":"130534"},{"caption":"临西县","pcode":"130500","code":"130535"},{"caption":"南宫市","pcode":"130500","code":"130581"},{"caption":"沙河市","pcode":"130500","code":"130582"},{"caption":"保定市","pcode":"130000","code":"130600"},{"caption":"竞秀区","pcode":"130600","code":"130602"},{"caption":"莲池区","pcode":"130600","code":"130606"},{"caption":"满城区","pcode":"130600","code":"130607"},{"caption":"清苑区","pcode":"130600","code":"130608"},{"caption":"徐水区","pcode":"130600","code":"130609"},{"caption":"涞水县","pcode":"130600","code":"130623"},{"caption":"阜平县","pcode":"130600","code":"130624"},{"caption":"定兴县","pcode":"130600","code":"130626"},{"caption":"唐县","pcode":"130600","code":"130627"},{"caption":"高阳县","pcode":"130600","code":"130628"},{"caption":"容城县","pcode":"130600","code":"130629"},{"caption":"涞源县","pcode":"130600","code":"130630"},{"caption":"望都县","pcode":"130600","code":"130631"},{"caption":"安新县","pcode":"130600","code":"130632"},{"caption":"易县","pcode":"130600","code":"130633"},{"caption":"曲阳县","pcode":"130600","code":"130634"},{"caption":"蠡县","pcode":"130600","code":"130635"},{"caption":"顺平县","pcode":"130600","code":"130636"},{"caption":"博野县","pcode":"130600","code":"130637"},{"caption":"雄县","pcode":"130600","code":"130638"},{"caption":"涿州市","pcode":"130600","code":"130681"},{"caption":"定州市","pcode":"130000","code":"130682"},{"caption":"安国市","pcode":"130600","code":"130683"},{"caption":"高碑店市","pcode":"130600","code":"130684"},{"caption":"张家口市","pcode":"130000","code":"130700"},{"caption":"桥东区","pcode":"130700","code":"130702"},{"caption":"桥西区","pcode":"130700","code":"130703"},{"caption":"宣化区","pcode":"130700","code":"130705"},{"caption":"下花园区","pcode":"130700","code":"130706"},{"caption":"宣化县","pcode":"130700","code":"130721"},{"caption":"张北县","pcode":"130700","code":"130722"},{"caption":"康保县","pcode":"130700","code":"130723"},{"caption":"沽源县","pcode":"130700","code":"130724"},{"caption":"尚义县","pcode":"130700","code":"130725"},{"caption":"蔚县","pcode":"130700","code":"130726"},{"caption":"阳原县","pcode":"130700","code":"130727"},{"caption":"怀安县","pcode":"130700","code":"130728"},{"caption":"万全县","pcode":"130700","code":"130729"},{"caption":"怀来县","pcode":"130700","code":"130730"},{"caption":"涿鹿县","pcode":"130700","code":"130731"},{"caption":"赤城县","pcode":"130700","code":"130732"},{"caption":"崇礼县","pcode":"130700","code":"130733"},{"caption":"承德市","pcode":"130000","code":"130800"},{"caption":"双桥区","pcode":"130800","code":"130802"},{"caption":"双滦区","pcode":"130800","code":"130803"},{"caption":"鹰手营子矿区","pcode":"130800","code":"130804"},{"caption":"承德县","pcode":"130800","code":"130821"},{"caption":"兴隆县","pcode":"130800","code":"130822"},{"caption":"平泉县","pcode":"130800","code":"130823"},{"caption":"滦平县","pcode":"130800","code":"130824"},{"caption":"隆化县","pcode":"130800","code":"130825"},{"caption":"丰宁满族自治县","pcode":"130800","code":"130826"},{"caption":"宽城满族自治县","pcode":"130800","code":"130827"},{"caption":"围场满族蒙古族自治县","pcode":"130800","code":"130828"},{"caption":"沧州市","pcode":"130000","code":"130900"},{"caption":"新华区","pcode":"130900","code":"130902"},{"caption":"运河区","pcode":"130900","code":"130903"},{"caption":"沧县","pcode":"130900","code":"130921"},{"caption":"青县","pcode":"130900","code":"130922"},{"caption":"东光县","pcode":"130900","code":"130923"},{"caption":"海兴县","pcode":"130900","code":"130924"},{"caption":"盐山县","pcode":"130900","code":"130925"},{"caption":"肃宁县","pcode":"130900","code":"130926"},{"caption":"南皮县","pcode":"130900","code":"130927"},{"caption":"吴桥县","pcode":"130900","code":"130928"},{"caption":"献县","pcode":"130900","code":"130929"},{"caption":"孟村回族自治县","pcode":"130900","code":"130930"},{"caption":"泊头市","pcode":"130900","code":"130981"},{"caption":"任丘市","pcode":"130900","code":"130982"},{"caption":"黄骅市","pcode":"130900","code":"130983"},{"caption":"河间市","pcode":"130900","code":"130984"},{"caption":"廊坊市","pcode":"130000","code":"131000"},{"caption":"安次区","pcode":"131000","code":"131002"},{"caption":"广阳区","pcode":"131000","code":"131003"},{"caption":"固安县","pcode":"131000","code":"131022"},{"caption":"永清县","pcode":"131000","code":"131023"},{"caption":"香河县","pcode":"131000","code":"131024"},{"caption":"大城县","pcode":"131000","code":"131025"},{"caption":"文安县","pcode":"131000","code":"131026"},{"caption":"大厂回族自治县","pcode":"131000","code":"131028"},{"caption":"霸州市","pcode":"131000","code":"131081"},{"caption":"三河市","pcode":"131000","code":"131082"},{"caption":"衡水市","pcode":"130000","code":"131100"},{"caption":"桃城区","pcode":"131100","code":"131102"},{"caption":"枣强县","pcode":"131100","code":"131121"},{"caption":"武邑县","pcode":"131100","code":"131122"},{"caption":"武强县","pcode":"131100","code":"131123"},{"caption":"饶阳县","pcode":"131100","code":"131124"},{"caption":"安平县","pcode":"131100","code":"131125"},{"caption":"故城县","pcode":"131100","code":"131126"},{"caption":"景县","pcode":"131100","code":"131127"},{"caption":"阜城县","pcode":"131100","code":"131128"},{"caption":"冀州市","pcode":"131100","code":"131181"},{"caption":"深州市","pcode":"131100","code":"131182"},{"caption":"山西省","pcode":"null","code":"140000"},{"caption":"太原市","pcode":"140000","code":"140100"},{"caption":"小店区","pcode":"140100","code":"140105"},{"caption":"迎泽区","pcode":"140100","code":"140106"},{"caption":"杏花岭区","pcode":"140100","code":"140107"},{"caption":"尖草坪区","pcode":"140100","code":"140108"},{"caption":"万柏林区","pcode":"140100","code":"140109"},{"caption":"晋源区","pcode":"140100","code":"140110"},{"caption":"清徐县","pcode":"140100","code":"140121"},{"caption":"阳曲县","pcode":"140100","code":"140122"},{"caption":"娄烦县","pcode":"140100","code":"140123"},{"caption":"古交市","pcode":"140100","code":"140181"},{"caption":"大同市","pcode":"140000","code":"140200"},{"caption":"城区","pcode":"140200","code":"140202"},{"caption":"矿区","pcode":"140200","code":"140203"},{"caption":"南郊区","pcode":"140200","code":"140211"},{"caption":"新荣区","pcode":"140200","code":"140212"},{"caption":"阳高县","pcode":"140200","code":"140221"},{"caption":"天镇县","pcode":"140200","code":"140222"},{"caption":"广灵县","pcode":"140200","code":"140223"},{"caption":"灵丘县","pcode":"140200","code":"140224"},{"caption":"浑源县","pcode":"140200","code":"140225"},{"caption":"左云县","pcode":"140200","code":"140226"},{"caption":"大同县","pcode":"140200","code":"140227"},{"caption":"阳泉市","pcode":"140000","code":"140300"},{"caption":"城区","pcode":"140300","code":"140302"},{"caption":"矿区","pcode":"140300","code":"140303"},{"caption":"郊区","pcode":"140300","code":"140311"},{"caption":"平定县","pcode":"140300","code":"140321"},{"caption":"盂县","pcode":"140300","code":"140322"},{"caption":"长治市","pcode":"140000","code":"140400"},{"caption":"城区","pcode":"140400","code":"140402"},{"caption":"郊区","pcode":"140400","code":"140411"},{"caption":"长治县","pcode":"140400","code":"140421"},{"caption":"襄垣县","pcode":"140400","code":"140423"},{"caption":"屯留县","pcode":"140400","code":"140424"},{"caption":"平顺县","pcode":"140400","code":"140425"},{"caption":"黎城县","pcode":"140400","code":"140426"},{"caption":"壶关县","pcode":"140400","code":"140427"},{"caption":"长子县","pcode":"140400","code":"140428"},{"caption":"武乡县","pcode":"140400","code":"140429"},{"caption":"沁县","pcode":"140400","code":"140430"},{"caption":"沁源县","pcode":"140400","code":"140431"},{"caption":"潞城市","pcode":"140400","code":"140481"},{"caption":"晋城市","pcode":"140000","code":"140500"},{"caption":"城区","pcode":"140500","code":"140502"},{"caption":"沁水县","pcode":"140500","code":"140521"},{"caption":"阳城县","pcode":"140500","code":"140522"},{"caption":"陵川县","pcode":"140500","code":"140524"},{"caption":"泽州县","pcode":"140500","code":"140525"},{"caption":"高平市","pcode":"140500","code":"140581"},{"caption":"朔州市","pcode":"140000","code":"140600"},{"caption":"朔城区","pcode":"140600","code":"140602"},{"caption":"平鲁区","pcode":"140600","code":"140603"},{"caption":"山阴县","pcode":"140600","code":"140621"},{"caption":"应县","pcode":"140600","code":"140622"},{"caption":"右玉县","pcode":"140600","code":"140623"},{"caption":"怀仁县","pcode":"140600","code":"140624"},{"caption":"晋中市","pcode":"140000","code":"140700"},{"caption":"榆次区","pcode":"140700","code":"140702"},{"caption":"榆社县","pcode":"140700","code":"140721"},{"caption":"左权县","pcode":"140700","code":"140722"},{"caption":"和顺县","pcode":"140700","code":"140723"},{"caption":"昔阳县","pcode":"140700","code":"140724"},{"caption":"寿阳县","pcode":"140700","code":"140725"},{"caption":"太谷县","pcode":"140700","code":"140726"},{"caption":"祁县","pcode":"140700","code":"140727"},{"caption":"平遥县","pcode":"140700","code":"140728"},{"caption":"灵石县","pcode":"140700","code":"140729"},{"caption":"介休市","pcode":"140700","code":"140781"},{"caption":"运城市","pcode":"140000","code":"140800"},{"caption":"盐湖区","pcode":"140800","code":"140802"},{"caption":"临猗县","pcode":"140800","code":"140821"},{"caption":"万荣县","pcode":"140800","code":"140822"},{"caption":"闻喜县","pcode":"140800","code":"140823"},{"caption":"稷山县","pcode":"140800","code":"140824"},{"caption":"新绛县","pcode":"140800","code":"140825"},{"caption":"绛县","pcode":"140800","code":"140826"},{"caption":"垣曲县","pcode":"140800","code":"140827"},{"caption":"夏县","pcode":"140800","code":"140828"},{"caption":"平陆县","pcode":"140800","code":"140829"},{"caption":"芮城县","pcode":"140800","code":"140830"},{"caption":"永济市","pcode":"140800","code":"140881"},{"caption":"河津市","pcode":"140800","code":"140882"},{"caption":"忻州市","pcode":"140000","code":"140900"},{"caption":"忻府区","pcode":"140900","code":"140902"},{"caption":"定襄县","pcode":"140900","code":"140921"},{"caption":"五台县","pcode":"140900","code":"140922"},{"caption":"代县","pcode":"140900","code":"140923"},{"caption":"繁峙县","pcode":"140900","code":"140924"},{"caption":"宁武县","pcode":"140900","code":"140925"},{"caption":"静乐县","pcode":"140900","code":"140926"},{"caption":"神池县","pcode":"140900","code":"140927"},{"caption":"五寨县","pcode":"140900","code":"140928"},{"caption":"岢岚县","pcode":"140900","code":"140929"},{"caption":"河曲县","pcode":"140900","code":"140930"},{"caption":"保德县","pcode":"140900","code":"140931"},{"caption":"偏关县","pcode":"140900","code":"140932"},{"caption":"原平市","pcode":"140900","code":"140981"},{"caption":"临汾市","pcode":"140000","code":"141000"},{"caption":"尧都区","pcode":"141000","code":"141002"},{"caption":"曲沃县","pcode":"141000","code":"141021"},{"caption":"翼城县","pcode":"141000","code":"141022"},{"caption":"襄汾县","pcode":"141000","code":"141023"},{"caption":"洪洞县","pcode":"141000","code":"141024"},{"caption":"古县","pcode":"141000","code":"141025"},{"caption":"安泽县","pcode":"141000","code":"141026"},{"caption":"浮山县","pcode":"141000","code":"141027"},{"caption":"吉县","pcode":"141000","code":"141028"},{"caption":"乡宁县","pcode":"141000","code":"141029"},{"caption":"大宁县","pcode":"141000","code":"141030"},{"caption":"隰县","pcode":"141000","code":"141031"},{"caption":"永和县","pcode":"141000","code":"141032"},{"caption":"蒲县","pcode":"141000","code":"141033"},{"caption":"汾西县","pcode":"141000","code":"141034"},{"caption":"侯马市","pcode":"141000","code":"141081"},{"caption":"霍州市","pcode":"141000","code":"141082"},{"caption":"吕梁市","pcode":"140000","code":"141100"},{"caption":"离石区","pcode":"141100","code":"141102"},{"caption":"文水县","pcode":"141100","code":"141121"},{"caption":"交城县","pcode":"141100","code":"141122"},{"caption":"兴县","pcode":"141100","code":"141123"},{"caption":"临县","pcode":"141100","code":"141124"},{"caption":"柳林县","pcode":"141100","code":"141125"},{"caption":"石楼县","pcode":"141100","code":"141126"},{"caption":"岚县","pcode":"141100","code":"141127"},{"caption":"方山县","pcode":"141100","code":"141128"},{"caption":"中阳县","pcode":"141100","code":"141129"},{"caption":"交口县","pcode":"141100","code":"141130"},{"caption":"孝义市","pcode":"141100","code":"141181"},{"caption":"汾阳市","pcode":"141100","code":"141182"},{"caption":"内蒙古自治区","pcode":"null","code":"150000"},{"caption":"呼和浩特市","pcode":"150000","code":"150100"},{"caption":"新城区","pcode":"150100","code":"150102"},{"caption":"回民区","pcode":"150100","code":"150103"},{"caption":"玉泉区","pcode":"150100","code":"150104"},{"caption":"赛罕区","pcode":"150100","code":"150105"},{"caption":"土默特左旗","pcode":"150100","code":"150121"},{"caption":"托克托县","pcode":"150100","code":"150122"},{"caption":"和林格尔县","pcode":"150100","code":"150123"},{"caption":"清水河县","pcode":"150100","code":"150124"},{"caption":"武川县","pcode":"150100","code":"150125"},{"caption":"包头市","pcode":"150000","code":"150200"},{"caption":"东河区","pcode":"150200","code":"150202"},{"caption":"昆都仑区","pcode":"150200","code":"150203"},{"caption":"青山区","pcode":"150200","code":"150204"},{"caption":"石拐区","pcode":"150200","code":"150205"},{"caption":"白云鄂博矿区","pcode":"150200","code":"150206"},{"caption":"九原区","pcode":"150200","code":"150207"},{"caption":"土默特右旗","pcode":"150200","code":"150221"},{"caption":"固阳县","pcode":"150200","code":"150222"},{"caption":"达尔罕茂明安联合旗","pcode":"150200","code":"150223"},{"caption":"乌海市","pcode":"150000","code":"150300"},{"caption":"海勃湾区","pcode":"150300","code":"150302"},{"caption":"海南区","pcode":"150300","code":"150303"},{"caption":"乌达区","pcode":"150300","code":"150304"},{"caption":"赤峰市","pcode":"150000","code":"150400"},{"caption":"红山区","pcode":"150400","code":"150402"},{"caption":"元宝山区","pcode":"150400","code":"150403"},{"caption":"松山区","pcode":"150400","code":"150404"},{"caption":"阿鲁科尔沁旗","pcode":"150400","code":"150421"},{"caption":"巴林左旗","pcode":"150400","code":"150422"},{"caption":"巴林右旗","pcode":"150400","code":"150423"},{"caption":"林西县","pcode":"150400","code":"150424"},{"caption":"克什克腾旗","pcode":"150400","code":"150425"},{"caption":"翁牛特旗","pcode":"150400","code":"150426"},{"caption":"喀喇沁旗","pcode":"150400","code":"150428"},{"caption":"宁城县","pcode":"150400","code":"150429"},{"caption":"敖汉旗","pcode":"150400","code":"150430"},{"caption":"通辽市","pcode":"150000","code":"150500"},{"caption":"科尔沁区","pcode":"150500","code":"150502"},{"caption":"科尔沁左翼中旗","pcode":"150500","code":"150521"},{"caption":"科尔沁左翼后旗","pcode":"150500","code":"150522"},{"caption":"开鲁县","pcode":"150500","code":"150523"},{"caption":"库伦旗","pcode":"150500","code":"150524"},{"caption":"奈曼旗","pcode":"150500","code":"150525"},{"caption":"扎鲁特旗","pcode":"150500","code":"150526"},{"caption":"霍林郭勒市","pcode":"150500","code":"150581"},{"caption":"鄂尔多斯市","pcode":"150000","code":"150600"},{"caption":"东胜区","pcode":"150600","code":"150602"},{"caption":"康巴什区","pcode":"150600","code":"150603"},{"caption":"达拉特旗","pcode":"150600","code":"150621"},{"caption":"准格尔旗","pcode":"150600","code":"150622"},{"caption":"鄂托克前旗","pcode":"150600","code":"150623"},{"caption":"鄂托克旗","pcode":"150600","code":"150624"},{"caption":"杭锦旗","pcode":"150600","code":"150625"},{"caption":"乌审旗","pcode":"150600","code":"150626"},{"caption":"伊金霍洛旗","pcode":"150600","code":"150627"},{"caption":"呼伦贝尔市","pcode":"150000","code":"150700"},{"caption":"海拉尔区","pcode":"150700","code":"150702"},{"caption":"扎赉诺尔区","pcode":"150700","code":"150703"},{"caption":"阿荣旗","pcode":"150700","code":"150721"},{"caption":"莫力达瓦达斡尔族自治旗","pcode":"150700","code":"150722"},{"caption":"鄂伦春自治旗","pcode":"150700","code":"150723"},{"caption":"鄂温克族自治旗","pcode":"150700","code":"150724"},{"caption":"陈巴尔虎旗","pcode":"150700","code":"150725"},{"caption":"新巴尔虎左旗","pcode":"150700","code":"150726"},{"caption":"新巴尔虎右旗","pcode":"150700","code":"150727"},{"caption":"满洲里市","pcode":"150700","code":"150781"},{"caption":"牙克石市","pcode":"150700","code":"150782"},{"caption":"扎兰屯市","pcode":"150700","code":"150783"},{"caption":"额尔古纳市","pcode":"150700","code":"150784"},{"caption":"根河市","pcode":"150700","code":"150785"},{"caption":"巴彦淖尔市","pcode":"150000","code":"150800"},{"caption":"临河区","pcode":"150800","code":"150802"},{"caption":"五原县","pcode":"150800","code":"150821"},{"caption":"磴口县","pcode":"150800","code":"150822"},{"caption":"乌拉特前旗","pcode":"150800","code":"150823"},{"caption":"乌拉特中旗","pcode":"150800","code":"150824"},{"caption":"乌拉特后旗","pcode":"150800","code":"150825"},{"caption":"杭锦后旗","pcode":"150800","code":"150826"},{"caption":"乌兰察布市","pcode":"150000","code":"150900"},{"caption":"集宁区","pcode":"150900","code":"150902"},{"caption":"卓资县","pcode":"150900","code":"150921"},{"caption":"化德县","pcode":"150900","code":"150922"},{"caption":"商都县","pcode":"150900","code":"150923"},{"caption":"兴和县","pcode":"150900","code":"150924"},{"caption":"凉城县","pcode":"150900","code":"150925"},{"caption":"察哈尔右翼前旗","pcode":"150900","code":"150926"},{"caption":"察哈尔右翼中旗","pcode":"150900","code":"150927"},{"caption":"察哈尔右翼后旗","pcode":"150900","code":"150928"},{"caption":"四子王旗","pcode":"150900","code":"150929"},{"caption":"丰镇市","pcode":"150900","code":"150981"},{"caption":"兴安盟","pcode":"150000","code":"152200"},{"caption":"乌兰浩特市","pcode":"152200","code":"152201"},{"caption":"阿尔山市","pcode":"152200","code":"152202"},{"caption":"科尔沁右翼前旗","pcode":"152200","code":"152221"},{"caption":"科尔沁右翼中旗","pcode":"152200","code":"152222"},{"caption":"扎赉特旗","pcode":"152200","code":"152223"},{"caption":"突泉县","pcode":"152200","code":"152224"},{"caption":"锡林郭勒盟","pcode":"150000","code":"152500"},{"caption":"二连浩特市","pcode":"152500","code":"152501"},{"caption":"锡林浩特市","pcode":"152500","code":"152502"},{"caption":"阿巴嘎旗","pcode":"152500","code":"152522"},{"caption":"苏尼特左旗","pcode":"152500","code":"152523"},{"caption":"苏尼特右旗","pcode":"152500","code":"152524"},{"caption":"东乌珠穆沁旗","pcode":"152500","code":"152525"},{"caption":"西乌珠穆沁旗","pcode":"152500","code":"152526"},{"caption":"太仆寺旗","pcode":"152500","code":"152527"},{"caption":"镶黄旗","pcode":"152500","code":"152528"},{"caption":"正镶白旗","pcode":"152500","code":"152529"},{"caption":"正蓝旗","pcode":"152500","code":"152530"},{"caption":"多伦县","pcode":"152500","code":"152531"},{"caption":"阿拉善盟","pcode":"150000","code":"152900"},{"caption":"阿拉善左旗","pcode":"152900","code":"152921"},{"caption":"阿拉善右旗","pcode":"152900","code":"152922"},{"caption":"额济纳旗","pcode":"152900","code":"152923"},{"caption":"辽宁省","pcode":"null","code":"210000"},{"caption":"沈阳市","pcode":"210000","code":"210100"},{"caption":"和平区","pcode":"210100","code":"210102"},{"caption":"沈河区","pcode":"210100","code":"210103"},{"caption":"大东区","pcode":"210100","code":"210104"},{"caption":"皇姑区","pcode":"210100","code":"210105"},{"caption":"铁西区","pcode":"210100","code":"210106"},{"caption":"苏家屯区","pcode":"210100","code":"210111"},{"caption":"东陵区","pcode":"210100","code":"210112"},{"caption":"沈北新区","pcode":"210100","code":"210113"},{"caption":"于洪区","pcode":"210100","code":"210114"},{"caption":"辽中县","pcode":"210100","code":"210122"},{"caption":"康平县","pcode":"210100","code":"210123"},{"caption":"法库县","pcode":"210100","code":"210124"},{"caption":"新民市","pcode":"210100","code":"210181"},{"caption":"大连市","pcode":"210000","code":"210200"},{"caption":"中山区","pcode":"210200","code":"210202"},{"caption":"西岗区","pcode":"210200","code":"210203"},{"caption":"沙河口区","pcode":"210200","code":"210204"},{"caption":"甘井子区","pcode":"210200","code":"210211"},{"caption":"旅顺口区","pcode":"210200","code":"210212"},{"caption":"金州区","pcode":"210200","code":"210213"},{"caption":"长海县","pcode":"210200","code":"210224"},{"caption":"瓦房店市","pcode":"210200","code":"210281"},{"caption":"普兰店市","pcode":"210200","code":"210282"},{"caption":"庄河市","pcode":"210200","code":"210283"},{"caption":"鞍山市","pcode":"210000","code":"210300"},{"caption":"铁东区","pcode":"210300","code":"210302"},{"caption":"铁西区","pcode":"210300","code":"210303"},{"caption":"立山区","pcode":"210300","code":"210304"},{"caption":"千山区","pcode":"210300","code":"210311"},{"caption":"台安县","pcode":"210300","code":"210321"},{"caption":"岫岩满族自治县","pcode":"210300","code":"210323"},{"caption":"海城市","pcode":"210300","code":"210381"},{"caption":"抚顺市","pcode":"210000","code":"210400"},{"caption":"新抚区","pcode":"210400","code":"210402"},{"caption":"东洲区","pcode":"210400","code":"210403"},{"caption":"望花区","pcode":"210400","code":"210404"},{"caption":"顺城区","pcode":"210400","code":"210411"},{"caption":"抚顺县","pcode":"210400","code":"210421"},{"caption":"新宾满族自治县","pcode":"210400","code":"210422"},{"caption":"清原满族自治县","pcode":"210400","code":"210423"},{"caption":"本溪市","pcode":"210000","code":"210500"},{"caption":"平山区","pcode":"210500","code":"210502"},{"caption":"溪湖区","pcode":"210500","code":"210503"},{"caption":"明山区","pcode":"210500","code":"210504"},{"caption":"南芬区","pcode":"210500","code":"210505"},{"caption":"本溪满族自治县","pcode":"210500","code":"210521"},{"caption":"桓仁满族自治县","pcode":"210500","code":"210522"},{"caption":"丹东市","pcode":"210000","code":"210600"},{"caption":"元宝区","pcode":"210600","code":"210602"},{"caption":"振兴区","pcode":"210600","code":"210603"},{"caption":"振安区","pcode":"210600","code":"210604"},{"caption":"宽甸满族自治县","pcode":"210600","code":"210624"},{"caption":"东港市","pcode":"210600","code":"210681"},{"caption":"凤城市","pcode":"210600","code":"210682"},{"caption":"锦州市","pcode":"210000","code":"210700"},{"caption":"古塔区","pcode":"210700","code":"210702"},{"caption":"凌河区","pcode":"210700","code":"210703"},{"caption":"太和区","pcode":"210700","code":"210711"},{"caption":"黑山县","pcode":"210700","code":"210726"},{"caption":"义县","pcode":"210700","code":"210727"},{"caption":"凌海市","pcode":"210700","code":"210781"},{"caption":"北镇市","pcode":"210700","code":"210782"},{"caption":"营口市","pcode":"210000","code":"210800"},{"caption":"站前区","pcode":"210800","code":"210802"},{"caption":"西市区","pcode":"210800","code":"210803"},{"caption":"鲅鱼圈区","pcode":"210800","code":"210804"},{"caption":"老边区","pcode":"210800","code":"210811"},{"caption":"盖州市","pcode":"210800","code":"210881"},{"caption":"大石桥市","pcode":"210800","code":"210882"},{"caption":"阜新市","pcode":"210000","code":"210900"},{"caption":"海州区","pcode":"210900","code":"210902"},{"caption":"新邱区","pcode":"210900","code":"210903"},{"caption":"太平区","pcode":"210900","code":"210904"},{"caption":"清河门区","pcode":"210900","code":"210905"},{"caption":"细河区","pcode":"210900","code":"210911"},{"caption":"阜新蒙古族自治县","pcode":"210900","code":"210921"},{"caption":"彰武县","pcode":"210900","code":"210922"},{"caption":"辽阳市","pcode":"210000","code":"211000"},{"caption":"白塔区","pcode":"211000","code":"211002"},{"caption":"文圣区","pcode":"211000","code":"211003"},{"caption":"宏伟区","pcode":"211000","code":"211004"},{"caption":"弓长岭区","pcode":"211000","code":"211005"},{"caption":"太子河区","pcode":"211000","code":"211011"},{"caption":"辽阳县","pcode":"211000","code":"211021"},{"caption":"灯塔市","pcode":"211000","code":"211081"},{"caption":"盘锦市","pcode":"210000","code":"211100"},{"caption":"双台子区","pcode":"211100","code":"211102"},{"caption":"兴隆台区","pcode":"211100","code":"211103"},{"caption":"大洼县","pcode":"211100","code":"211121"},{"caption":"盘山县","pcode":"211100","code":"211122"},{"caption":"铁岭市","pcode":"210000","code":"211200"},{"caption":"银州区","pcode":"211200","code":"211202"},{"caption":"清河区","pcode":"211200","code":"211204"},{"caption":"铁岭县","pcode":"211200","code":"211221"},{"caption":"西丰县","pcode":"211200","code":"211223"},{"caption":"昌图县","pcode":"211200","code":"211224"},{"caption":"调兵山市","pcode":"211200","code":"211281"},{"caption":"开原市","pcode":"211200","code":"211282"},{"caption":"朝阳市","pcode":"210000","code":"211300"},{"caption":"双塔区","pcode":"211300","code":"211302"},{"caption":"龙城区","pcode":"211300","code":"211303"},{"caption":"朝阳县","pcode":"211300","code":"211321"},{"caption":"建平县","pcode":"211300","code":"211322"},{"caption":"喀喇沁左翼蒙古族自治县","pcode":"211300","code":"211324"},{"caption":"北票市","pcode":"211300","code":"211381"},{"caption":"凌源市","pcode":"211300","code":"211382"},{"caption":"葫芦岛市","pcode":"210000","code":"211400"},{"caption":"连山区","pcode":"211400","code":"211402"},{"caption":"龙港区","pcode":"211400","code":"211403"},{"caption":"南票区","pcode":"211400","code":"211404"},{"caption":"绥中县","pcode":"211400","code":"211421"},{"caption":"建昌县","pcode":"211400","code":"211422"},{"caption":"兴城市","pcode":"211400","code":"211481"},{"caption":"吉林省","pcode":"null","code":"220000"},{"caption":"长春市","pcode":"220000","code":"220100"},{"caption":"南关区","pcode":"220100","code":"220102"},{"caption":"宽城区","pcode":"220100","code":"220103"},{"caption":"朝阳区","pcode":"220100","code":"220104"},{"caption":"二道区","pcode":"220100","code":"220105"},{"caption":"绿园区","pcode":"220100","code":"220106"},{"caption":"双阳区","pcode":"220100","code":"220112"},{"caption":"农安县","pcode":"220100","code":"220122"},{"caption":"九台市","pcode":"220100","code":"220181"},{"caption":"榆树市","pcode":"220100","code":"220182"},{"caption":"德惠市","pcode":"220100","code":"220183"},{"caption":"吉林市","pcode":"220000","code":"220200"},{"caption":"昌邑区","pcode":"220200","code":"220202"},{"caption":"龙潭区","pcode":"220200","code":"220203"},{"caption":"船营区","pcode":"220200","code":"220204"},{"caption":"丰满区","pcode":"220200","code":"220211"},{"caption":"永吉县","pcode":"220200","code":"220221"},{"caption":"蛟河市","pcode":"220200","code":"220281"},{"caption":"桦甸市","pcode":"220200","code":"220282"},{"caption":"舒兰市","pcode":"220200","code":"220283"},{"caption":"磐石市","pcode":"220200","code":"220284"},{"caption":"四平市","pcode":"220000","code":"220300"},{"caption":"铁西区","pcode":"220300","code":"220302"},{"caption":"铁东区","pcode":"220300","code":"220303"},{"caption":"梨树县","pcode":"220300","code":"220322"},{"caption":"伊通满族自治县","pcode":"220300","code":"220323"},{"caption":"公主岭市","pcode":"220300","code":"220381"},{"caption":"双辽市","pcode":"220300","code":"220382"},{"caption":"辽源市","pcode":"220000","code":"220400"},{"caption":"龙山区","pcode":"220400","code":"220402"},{"caption":"西安区","pcode":"220400","code":"220403"},{"caption":"东丰县","pcode":"220400","code":"220421"},{"caption":"东辽县","pcode":"220400","code":"220422"},{"caption":"通化市","pcode":"220000","code":"220500"},{"caption":"东昌区","pcode":"220500","code":"220502"},{"caption":"二道江区","pcode":"220500","code":"220503"},{"caption":"通化县","pcode":"220500","code":"220521"},{"caption":"辉南县","pcode":"220500","code":"220523"},{"caption":"柳河县","pcode":"220500","code":"220524"},{"caption":"梅河口市","pcode":"220500","code":"220581"},{"caption":"集安市","pcode":"220500","code":"220582"},{"caption":"白山市","pcode":"220000","code":"220600"},{"caption":"浑江区","pcode":"220600","code":"220602"},{"caption":"江源区","pcode":"220600","code":"220605"},{"caption":"抚松县","pcode":"220600","code":"220621"},{"caption":"靖宇县","pcode":"220600","code":"220622"},{"caption":"长白朝鲜族自治县","pcode":"220600","code":"220623"},{"caption":"临江市","pcode":"220600","code":"220681"},{"caption":"松原市","pcode":"220000","code":"220700"},{"caption":"宁江区","pcode":"220700","code":"220702"},{"caption":"前郭尔罗斯蒙古族自治县","pcode":"220700","code":"220721"},{"caption":"长岭县","pcode":"220700","code":"220722"},{"caption":"乾安县","pcode":"220700","code":"220723"},{"caption":"扶余县","pcode":"220700","code":"220724"},{"caption":"白城市","pcode":"220000","code":"220800"},{"caption":"洮北区","pcode":"220800","code":"220802"},{"caption":"镇赉县","pcode":"220800","code":"220821"},{"caption":"通榆县","pcode":"220800","code":"220822"},{"caption":"洮南市","pcode":"220800","code":"220881"},{"caption":"大安市","pcode":"220800","code":"220882"},{"caption":"延边朝鲜族自治州","pcode":"220000","code":"222400"},{"caption":"延吉市","pcode":"222400","code":"222401"},{"caption":"图们市","pcode":"222400","code":"222402"},{"caption":"敦化市","pcode":"222400","code":"222403"},{"caption":"珲春市","pcode":"222400","code":"222404"},{"caption":"龙井市","pcode":"222400","code":"222405"},{"caption":"和龙市","pcode":"222400","code":"222406"},{"caption":"汪清县","pcode":"222400","code":"222424"},{"caption":"安图县","pcode":"222400","code":"222426"},{"caption":"黑龙江省","pcode":"null","code":"230000"},{"caption":"哈尔滨市","pcode":"230000","code":"230100"},{"caption":"道里区","pcode":"230100","code":"230102"},{"caption":"南岗区","pcode":"230100","code":"230103"},{"caption":"道外区","pcode":"230100","code":"230104"},{"caption":"平房区","pcode":"230100","code":"230108"},{"caption":"松北区","pcode":"230100","code":"230109"},{"caption":"香坊区","pcode":"230100","code":"230110"},{"caption":"呼兰区","pcode":"230100","code":"230111"},{"caption":"阿城区","pcode":"230100","code":"230112"},{"caption":"双城区","pcode":"230100","code":"230113"},{"caption":"依兰县","pcode":"230100","code":"230123"},{"caption":"方正县","pcode":"230100","code":"230124"},{"caption":"宾县","pcode":"230100","code":"230125"},{"caption":"巴彦县","pcode":"230100","code":"230126"},{"caption":"木兰县","pcode":"230100","code":"230127"},{"caption":"通河县","pcode":"230100","code":"230128"},{"caption":"延寿县","pcode":"230100","code":"230129"},{"caption":"尚志市","pcode":"230100","code":"230183"},{"caption":"五常市","pcode":"230100","code":"230184"},{"caption":"齐齐哈尔市","pcode":"230000","code":"230200"},{"caption":"龙沙区","pcode":"230200","code":"230202"},{"caption":"建华区","pcode":"230200","code":"230203"},{"caption":"铁锋区","pcode":"230200","code":"230204"},{"caption":"昂昂溪区","pcode":"230200","code":"230205"},{"caption":"富拉尔基区","pcode":"230200","code":"230206"},{"caption":"碾子山区","pcode":"230200","code":"230207"},{"caption":"梅里斯达斡尔族区","pcode":"230200","code":"230208"},{"caption":"龙江县","pcode":"230200","code":"230221"},{"caption":"依安县","pcode":"230200","code":"230223"},{"caption":"泰来县","pcode":"230200","code":"230224"},{"caption":"甘南县","pcode":"230200","code":"230225"},{"caption":"富裕县","pcode":"230200","code":"230227"},{"caption":"克山县","pcode":"230200","code":"230229"},{"caption":"克东县","pcode":"230200","code":"230230"},{"caption":"拜泉县","pcode":"230200","code":"230231"},{"caption":"讷河市","pcode":"230200","code":"230281"},{"caption":"鸡西市","pcode":"230000","code":"230300"},{"caption":"鸡冠区","pcode":"230300","code":"230302"},{"caption":"恒山区","pcode":"230300","code":"230303"},{"caption":"滴道区","pcode":"230300","code":"230304"},{"caption":"梨树区","pcode":"230300","code":"230305"},{"caption":"城子河区","pcode":"230300","code":"230306"},{"caption":"麻山区","pcode":"230300","code":"230307"},{"caption":"鸡东县","pcode":"230300","code":"230321"},{"caption":"虎林市","pcode":"230300","code":"230381"},{"caption":"密山市","pcode":"230300","code":"230382"},{"caption":"鹤岗市","pcode":"230000","code":"230400"},{"caption":"向阳区","pcode":"230400","code":"230402"},{"caption":"工农区","pcode":"230400","code":"230403"},{"caption":"南山区","pcode":"230400","code":"230404"},{"caption":"兴安区","pcode":"230400","code":"230405"},{"caption":"东山区","pcode":"230400","code":"230406"},{"caption":"兴山区","pcode":"230400","code":"230407"},{"caption":"萝北县","pcode":"230400","code":"230421"},{"caption":"绥滨县","pcode":"230400","code":"230422"},{"caption":"双鸭山市","pcode":"230000","code":"230500"},{"caption":"尖山区","pcode":"230500","code":"230502"},{"caption":"岭东区","pcode":"230500","code":"230503"},{"caption":"四方台区","pcode":"230500","code":"230505"},{"caption":"宝山区","pcode":"230500","code":"230506"},{"caption":"集贤县","pcode":"230500","code":"230521"},{"caption":"友谊县","pcode":"230500","code":"230522"},{"caption":"宝清县","pcode":"230500","code":"230523"},{"caption":"饶河县","pcode":"230500","code":"230524"},{"caption":"大庆市","pcode":"230000","code":"230600"},{"caption":"萨尔图区","pcode":"230600","code":"230602"},{"caption":"龙凤区","pcode":"230600","code":"230603"},{"caption":"让胡路区","pcode":"230600","code":"230604"},{"caption":"红岗区","pcode":"230600","code":"230605"},{"caption":"大同区","pcode":"230600","code":"230606"},{"caption":"肇州县","pcode":"230600","code":"230621"},{"caption":"肇源县","pcode":"230600","code":"230622"},{"caption":"林甸县","pcode":"230600","code":"230623"},{"caption":"杜尔伯特蒙古族自治县","pcode":"230600","code":"230624"},{"caption":"伊春市","pcode":"230000","code":"230700"},{"caption":"伊春区","pcode":"230700","code":"230702"},{"caption":"南岔区","pcode":"230700","code":"230703"},{"caption":"友好区","pcode":"230700","code":"230704"},{"caption":"西林区","pcode":"230700","code":"230705"},{"caption":"翠峦区","pcode":"230700","code":"230706"},{"caption":"新青区","pcode":"230700","code":"230707"},{"caption":"美溪区","pcode":"230700","code":"230708"},{"caption":"金山屯区","pcode":"230700","code":"230709"},{"caption":"五营区","pcode":"230700","code":"230710"},{"caption":"乌马河区","pcode":"230700","code":"230711"},{"caption":"汤旺河区","pcode":"230700","code":"230712"},{"caption":"带岭区","pcode":"230700","code":"230713"},{"caption":"乌伊岭区","pcode":"230700","code":"230714"},{"caption":"红星区","pcode":"230700","code":"230715"},{"caption":"上甘岭区","pcode":"230700","code":"230716"},{"caption":"嘉荫县","pcode":"230700","code":"230722"},{"caption":"铁力市","pcode":"230700","code":"230781"},{"caption":"佳木斯市","pcode":"230000","code":"230800"},{"caption":"向阳区","pcode":"230800","code":"230803"},{"caption":"前进区","pcode":"230800","code":"230804"},{"caption":"东风区","pcode":"230800","code":"230805"},{"caption":"郊区","pcode":"230800","code":"230811"},{"caption":"桦南县","pcode":"230800","code":"230822"},{"caption":"桦川县","pcode":"230800","code":"230826"},{"caption":"汤原县","pcode":"230800","code":"230828"},{"caption":"同江市","pcode":"230800","code":"230881"},{"caption":"富锦市","pcode":"230800","code":"230882"},{"caption":"抚远市","pcode":"230800","code":"230883"},{"caption":"七台河市","pcode":"230000","code":"230900"},{"caption":"新兴区","pcode":"230900","code":"230902"},{"caption":"桃山区","pcode":"230900","code":"230903"},{"caption":"茄子河区","pcode":"230900","code":"230904"},{"caption":"勃利县","pcode":"230900","code":"230921"},{"caption":"牡丹江市","pcode":"230000","code":"231000"},{"caption":"东安区","pcode":"231000","code":"231002"},{"caption":"阳明区","pcode":"231000","code":"231003"},{"caption":"爱民区","pcode":"231000","code":"231004"},{"caption":"西安区","pcode":"231000","code":"231005"},{"caption":"林口县","pcode":"231000","code":"231025"},{"caption":"绥芬河市","pcode":"231000","code":"231081"},{"caption":"海林市","pcode":"231000","code":"231083"},{"caption":"宁安市","pcode":"231000","code":"231084"},{"caption":"穆棱市","pcode":"231000","code":"231085"},{"caption":"东宁市","pcode":"231000","code":"231086"},{"caption":"黑河市","pcode":"230000","code":"231100"},{"caption":"爱辉区","pcode":"231100","code":"231102"},{"caption":"嫩江县","pcode":"231100","code":"231121"},{"caption":"逊克县","pcode":"231100","code":"231123"},{"caption":"孙吴县","pcode":"231100","code":"231124"},{"caption":"北安市","pcode":"231100","code":"231181"},{"caption":"五大连池市","pcode":"231100","code":"231182"},{"caption":"绥化市","pcode":"230000","code":"231200"},{"caption":"北林区","pcode":"231200","code":"231202"},{"caption":"望奎县","pcode":"231200","code":"231221"},{"caption":"兰西县","pcode":"231200","code":"231222"},{"caption":"青冈县","pcode":"231200","code":"231223"},{"caption":"庆安县","pcode":"231200","code":"231224"},{"caption":"明水县","pcode":"231200","code":"231225"},{"caption":"绥棱县","pcode":"231200","code":"231226"},{"caption":"安达市","pcode":"231200","code":"231281"},{"caption":"肇东市","pcode":"231200","code":"231282"},{"caption":"海伦市","pcode":"231200","code":"231283"},{"caption":"大兴安岭地区","pcode":"230000","code":"232700"},{"caption":"呼玛县","pcode":"232700","code":"232721"},{"caption":"塔河县","pcode":"232700","code":"232722"},{"caption":"漠河县","pcode":"232700","code":"232723"},{"caption":"加格达奇区","pcode":"232700","code":"232741"},{"caption":"松岭区","pcode":"232700","code":"232742"},{"caption":"新林区","pcode":"232700","code":"232743"},{"caption":"呼中区","pcode":"232700","code":"232744"},{"caption":"上海市","pcode":"null","code":"310000"},{"caption":"江苏省","pcode":"null","code":"320000"},{"caption":"南京市","pcode":"320000","code":"320100"},{"caption":"玄武区","pcode":"320100","code":"320102"},{"caption":"秦淮区","pcode":"320100","code":"320104"},{"caption":"建邺区","pcode":"320100","code":"320105"},{"caption":"鼓楼区","pcode":"320100","code":"320106"},{"caption":"浦口区","pcode":"320100","code":"320111"},{"caption":"栖霞区","pcode":"320100","code":"320113"},{"caption":"雨花台区","pcode":"320100","code":"320114"},{"caption":"江宁区","pcode":"320100","code":"320115"},{"caption":"六合区","pcode":"320100","code":"320116"},{"caption":"溧水区","pcode":"320100","code":"320117"},{"caption":"高淳区","pcode":"320100","code":"320118"},{"caption":"无锡市","pcode":"320000","code":"320200"},{"caption":"锡山区","pcode":"320200","code":"320205"},{"caption":"惠山区","pcode":"320200","code":"320206"},{"caption":"滨湖区","pcode":"320200","code":"320211"},{"caption":"梁溪区","pcode":"320200","code":"320213"},{"caption":"新吴区","pcode":"320200","code":"320214"},{"caption":"江阴市","pcode":"320200","code":"320281"},{"caption":"宜兴市","pcode":"320200","code":"320282"},{"caption":"徐州市","pcode":"320000","code":"320300"},{"caption":"鼓楼区","pcode":"320300","code":"320302"},{"caption":"云龙区","pcode":"320300","code":"320303"},{"caption":"贾汪区","pcode":"320300","code":"320305"},{"caption":"泉山区","pcode":"320300","code":"320311"},{"caption":"铜山区","pcode":"320300","code":"320312"},{"caption":"丰县","pcode":"320300","code":"320321"},{"caption":"沛县","pcode":"320300","code":"320322"},{"caption":"睢宁县","pcode":"320300","code":"320324"},{"caption":"新沂市","pcode":"320300","code":"320381"},{"caption":"邳州市","pcode":"320300","code":"320382"},{"caption":"常州市","pcode":"320000","code":"320400"},{"caption":"天宁区","pcode":"320400","code":"320402"},{"caption":"钟楼区","pcode":"320400","code":"320404"},{"caption":"新北区","pcode":"320400","code":"320411"},{"caption":"武进区","pcode":"320400","code":"320412"},{"caption":"金坛区","pcode":"320400","code":"320413"},{"caption":"溧阳市","pcode":"320400","code":"320481"},{"caption":"苏州市","pcode":"320000","code":"320500"},{"caption":"虎丘区","pcode":"320500","code":"320505"},{"caption":"吴中区","pcode":"320500","code":"320506"},{"caption":"相城区","pcode":"320500","code":"320507"},{"caption":"姑苏区","pcode":"320500","code":"320508"},{"caption":"吴江区","pcode":"320500","code":"320509"},{"caption":"常熟市","pcode":"320500","code":"320581"},{"caption":"张家港市","pcode":"320500","code":"320582"},{"caption":"昆山市","pcode":"320500","code":"320583"},{"caption":"太仓市","pcode":"320500","code":"320585"},{"caption":"南通市","pcode":"320000","code":"320600"},{"caption":"崇川区","pcode":"320600","code":"320602"},{"caption":"港闸区","pcode":"320600","code":"320611"},{"caption":"通州区","pcode":"320600","code":"320612"},{"caption":"海安县","pcode":"320600","code":"320621"},{"caption":"如东县","pcode":"320600","code":"320623"},{"caption":"启东市","pcode":"320600","code":"320681"},{"caption":"如皋市","pcode":"320600","code":"320682"},{"caption":"海门市","pcode":"320600","code":"320684"},{"caption":"连云港市","pcode":"320000","code":"320700"},{"caption":"连云区","pcode":"320700","code":"320703"},{"caption":"海州区","pcode":"320700","code":"320706"},{"caption":"赣榆区","pcode":"320700","code":"320707"},{"caption":"东海县","pcode":"320700","code":"320722"},{"caption":"灌云县","pcode":"320700","code":"320723"},{"caption":"灌南县","pcode":"320700","code":"320724"},{"caption":"淮安市","pcode":"320000","code":"320800"},{"caption":"淮安区","pcode":"320800","code":"320803"},{"caption":"淮阴区","pcode":"320800","code":"320804"},{"caption":"清江浦区","pcode":"320800","code":"320812"},{"caption":"洪泽区","pcode":"320800","code":"320813"},{"caption":"涟水县","pcode":"320800","code":"320826"},{"caption":"盱眙县","pcode":"320800","code":"320830"},{"caption":"金湖县","pcode":"320800","code":"320831"},{"caption":"盐城市","pcode":"320000","code":"320900"},{"caption":"亭湖区","pcode":"320900","code":"320902"},{"caption":"盐都区","pcode":"320900","code":"320903"},{"caption":"大丰区","pcode":"320900","code":"320904"},{"caption":"响水县","pcode":"320900","code":"320921"},{"caption":"滨海县","pcode":"320900","code":"320922"},{"caption":"阜宁县","pcode":"320900","code":"320923"},{"caption":"射阳县","pcode":"320900","code":"320924"},{"caption":"建湖县","pcode":"320900","code":"320925"},{"caption":"东台市","pcode":"320900","code":"320981"},{"caption":"扬州市","pcode":"320000","code":"321000"},{"caption":"广陵区","pcode":"321000","code":"321002"},{"caption":"邗江区","pcode":"321000","code":"321003"},{"caption":"江都区","pcode":"321000","code":"321012"},{"caption":"宝应县","pcode":"321000","code":"321023"},{"caption":"仪征市","pcode":"321000","code":"321081"},{"caption":"高邮市","pcode":"321000","code":"321084"},{"caption":"镇江市","pcode":"320000","code":"321100"},{"caption":"京口区","pcode":"321100","code":"321102"},{"caption":"润州区","pcode":"321100","code":"321111"},{"caption":"丹徒区","pcode":"321100","code":"321112"},{"caption":"丹阳市","pcode":"321100","code":"321181"},{"caption":"扬中市","pcode":"321100","code":"321182"},{"caption":"句容市","pcode":"321100","code":"321183"},{"caption":"泰州市","pcode":"320000","code":"321200"},{"caption":"海陵区","pcode":"321200","code":"321202"},{"caption":"高港区","pcode":"321200","code":"321203"},{"caption":"姜堰区","pcode":"321200","code":"321204"},{"caption":"兴化市","pcode":"321200","code":"321281"},{"caption":"靖江市","pcode":"321200","code":"321282"},{"caption":"泰兴市","pcode":"321200","code":"321283"},{"caption":"宿迁市","pcode":"320000","code":"321300"},{"caption":"宿城区","pcode":"321300","code":"321302"},{"caption":"宿豫区","pcode":"321300","code":"321311"},{"caption":"沭阳县","pcode":"321300","code":"321322"},{"caption":"泗阳县","pcode":"321300","code":"321323"},{"caption":"泗洪县","pcode":"321300","code":"321324"},{"caption":"浙江省","pcode":"null","code":"330000"},{"caption":"杭州市","pcode":"330000","code":"330100"},{"caption":"上城区","pcode":"330100","code":"330102"},{"caption":"下城区","pcode":"330100","code":"330103"},{"caption":"江干区","pcode":"330100","code":"330104"},{"caption":"拱墅区","pcode":"330100","code":"330105"},{"caption":"西湖区","pcode":"330100","code":"330106"},{"caption":"滨江区","pcode":"330100","code":"330108"},{"caption":"萧山区","pcode":"330100","code":"330109"},{"caption":"余杭区","pcode":"330100","code":"330110"},{"caption":"富阳区","pcode":"330100","code":"330111"},{"caption":"桐庐县","pcode":"330100","code":"330122"},{"caption":"淳安县","pcode":"330100","code":"330127"},{"caption":"建德市","pcode":"330100","code":"330182"},{"caption":"临安市","pcode":"330100","code":"330185"},{"caption":"宁波市","pcode":"330000","code":"330200"},{"caption":"海曙区","pcode":"330200","code":"330203"},{"caption":"江北区","pcode":"330200","code":"330205"},{"caption":"北仑区","pcode":"330200","code":"330206"},{"caption":"镇海区","pcode":"330200","code":"330211"},{"caption":"鄞州区","pcode":"330200","code":"330212"},{"caption":"奉化区","pcode":"330200","code":"330213"},{"caption":"象山县","pcode":"330200","code":"330225"},{"caption":"宁海县","pcode":"330200","code":"330226"},{"caption":"余姚市","pcode":"330200","code":"330281"},{"caption":"慈溪市","pcode":"330200","code":"330282"},{"caption":"温州市","pcode":"330000","code":"330300"},{"caption":"鹿城区","pcode":"330300","code":"330302"},{"caption":"龙湾区","pcode":"330300","code":"330303"},{"caption":"瓯海区","pcode":"330300","code":"330304"},{"caption":"洞头区","pcode":"330300","code":"330305"},{"caption":"永嘉县","pcode":"330300","code":"330324"},{"caption":"平阳县","pcode":"330300","code":"330326"},{"caption":"苍南县","pcode":"330300","code":"330327"},{"caption":"文成县","pcode":"330300","code":"330328"},{"caption":"泰顺县","pcode":"330300","code":"330329"},{"caption":"瑞安市","pcode":"330300","code":"330381"},{"caption":"乐清市","pcode":"330300","code":"330382"},{"caption":"嘉兴市","pcode":"330000","code":"330400"},{"caption":"南湖区","pcode":"330400","code":"330402"},{"caption":"秀洲区","pcode":"330400","code":"330411"},{"caption":"嘉善县","pcode":"330400","code":"330421"},{"caption":"海盐县","pcode":"330400","code":"330424"},{"caption":"海宁市","pcode":"330400","code":"330481"},{"caption":"平湖市","pcode":"330400","code":"330482"},{"caption":"桐乡市","pcode":"330400","code":"330483"},{"caption":"湖州市","pcode":"330000","code":"330500"},{"caption":"吴兴区","pcode":"330500","code":"330502"},{"caption":"南浔区","pcode":"330500","code":"330503"},{"caption":"德清县","pcode":"330500","code":"330521"},{"caption":"长兴县","pcode":"330500","code":"330522"},{"caption":"安吉县","pcode":"330500","code":"330523"},{"caption":"绍兴市","pcode":"330000","code":"330600"},{"caption":"越城区","pcode":"330600","code":"330602"},{"caption":"柯桥区","pcode":"330600","code":"330603"},{"caption":"上虞区","pcode":"330600","code":"330604"},{"caption":"新昌县","pcode":"330600","code":"330624"},{"caption":"诸暨市","pcode":"330600","code":"330681"},{"caption":"嵊州市","pcode":"330600","code":"330683"},{"caption":"金华市","pcode":"330000","code":"330700"},{"caption":"婺城区","pcode":"330700","code":"330702"},{"caption":"金东区","pcode":"330700","code":"330703"},{"caption":"武义县","pcode":"330700","code":"330723"},{"caption":"浦江县","pcode":"330700","code":"330726"},{"caption":"磐安县","pcode":"330700","code":"330727"},{"caption":"兰溪市","pcode":"330700","code":"330781"},{"caption":"义乌市","pcode":"330700","code":"330782"},{"caption":"东阳市","pcode":"330700","code":"330783"},{"caption":"永康市","pcode":"330700","code":"330784"},{"caption":"衢州市","pcode":"330000","code":"330800"},{"caption":"柯城区","pcode":"330800","code":"330802"},{"caption":"衢江区","pcode":"330800","code":"330803"},{"caption":"常山县","pcode":"330800","code":"330822"},{"caption":"开化县","pcode":"330800","code":"330824"},{"caption":"龙游县","pcode":"330800","code":"330825"},{"caption":"江山市","pcode":"330800","code":"330881"},{"caption":"舟山市","pcode":"330000","code":"330900"},{"caption":"定海区","pcode":"330900","code":"330902"},{"caption":"普陀区","pcode":"330900","code":"330903"},{"caption":"岱山县","pcode":"330900","code":"330921"},{"caption":"嵊泗县","pcode":"330900","code":"330922"},{"caption":"台州市","pcode":"330000","code":"331000"},{"caption":"椒江区","pcode":"331000","code":"331002"},{"caption":"黄岩区","pcode":"331000","code":"331003"},{"caption":"路桥区","pcode":"331000","code":"331004"},{"caption":"玉环县","pcode":"331000","code":"331021"},{"caption":"三门县","pcode":"331000","code":"331022"},{"caption":"天台县","pcode":"331000","code":"331023"},{"caption":"仙居县","pcode":"331000","code":"331024"},{"caption":"温岭市","pcode":"331000","code":"331081"},{"caption":"临海市","pcode":"331000","code":"331082"},{"caption":"丽水市","pcode":"330000","code":"331100"},{"caption":"莲都区","pcode":"331100","code":"331102"},{"caption":"青田县","pcode":"331100","code":"331121"},{"caption":"缙云县","pcode":"331100","code":"331122"},{"caption":"遂昌县","pcode":"331100","code":"331123"},{"caption":"松阳县","pcode":"331100","code":"331124"},{"caption":"云和县","pcode":"331100","code":"331125"},{"caption":"庆元县","pcode":"331100","code":"331126"},{"caption":"景宁畲族自治县","pcode":"331100","code":"331127"},{"caption":"龙泉市","pcode":"331100","code":"331181"},{"caption":"安徽省","pcode":"null","code":"340000"},{"caption":"合肥市","pcode":"340000","code":"340100"},{"caption":"瑶海区","pcode":"340100","code":"340102"},{"caption":"庐阳区","pcode":"340100","code":"340103"},{"caption":"蜀山区","pcode":"340100","code":"340104"},{"caption":"包河区","pcode":"340100","code":"340111"},{"caption":"长丰县","pcode":"340100","code":"340121"},{"caption":"肥东县","pcode":"340100","code":"340122"},{"caption":"肥西县","pcode":"340100","code":"340123"},{"caption":"庐江县","pcode":"340100","code":"340124"},{"caption":"巢湖市","pcode":"340100","code":"340181"},{"caption":"芜湖市","pcode":"340000","code":"340200"},{"caption":"镜湖区","pcode":"340200","code":"340202"},{"caption":"弋江区","pcode":"340200","code":"340203"},{"caption":"鸠江区","pcode":"340200","code":"340207"},{"caption":"三山区","pcode":"340200","code":"340208"},{"caption":"芜湖县","pcode":"340200","code":"340221"},{"caption":"繁昌县","pcode":"340200","code":"340222"},{"caption":"南陵县","pcode":"340200","code":"340223"},{"caption":"无为县","pcode":"340200","code":"340225"},{"caption":"蚌埠市","pcode":"340000","code":"340300"},{"caption":"龙子湖区","pcode":"340300","code":"340302"},{"caption":"蚌山区","pcode":"340300","code":"340303"},{"caption":"禹会区","pcode":"340300","code":"340304"},{"caption":"淮上区","pcode":"340300","code":"340311"},{"caption":"怀远县","pcode":"340300","code":"340321"},{"caption":"五河县","pcode":"340300","code":"340322"},{"caption":"固镇县","pcode":"340300","code":"340323"},{"caption":"淮南市","pcode":"340000","code":"340400"},{"caption":"大通区","pcode":"340400","code":"340402"},{"caption":"田家庵区","pcode":"340400","code":"340403"},{"caption":"谢家集区","pcode":"340400","code":"340404"},{"caption":"八公山区","pcode":"340400","code":"340405"},{"caption":"潘集区","pcode":"340400","code":"340406"},{"caption":"凤台县","pcode":"340400","code":"340421"},{"caption":"寿县","pcode":"340400","code":"340422"},{"caption":"马鞍山市","pcode":"340000","code":"340500"},{"caption":"花山区","pcode":"340500","code":"340503"},{"caption":"雨山区","pcode":"340500","code":"340504"},{"caption":"博望区","pcode":"340500","code":"340506"},{"caption":"当涂县","pcode":"340500","code":"340521"},{"caption":"含山县","pcode":"340500","code":"340522"},{"caption":"和县","pcode":"340500","code":"340523"},{"caption":"淮北市","pcode":"340000","code":"340600"},{"caption":"杜集区","pcode":"340600","code":"340602"},{"caption":"相山区","pcode":"340600","code":"340603"},{"caption":"烈山区","pcode":"340600","code":"340604"},{"caption":"濉溪县","pcode":"340600","code":"340621"},{"caption":"铜陵市","pcode":"340000","code":"340700"},{"caption":"铜官区","pcode":"340700","code":"340705"},{"caption":"义安区","pcode":"340700","code":"340706"},{"caption":"郊区","pcode":"340700","code":"340711"},{"caption":"铜陵县","pcode":"340700","code":"340721"},{"caption":"枞阳县","pcode":"340700","code":"340722"},{"caption":"安庆市","pcode":"340000","code":"340800"},{"caption":"迎江区","pcode":"340800","code":"340802"},{"caption":"大观区","pcode":"340800","code":"340803"},{"caption":"宜秀区","pcode":"340800","code":"340811"},{"caption":"怀宁县","pcode":"340800","code":"340822"},{"caption":"潜山县","pcode":"340800","code":"340824"},{"caption":"太湖县","pcode":"340800","code":"340825"},{"caption":"宿松县","pcode":"340800","code":"340826"},{"caption":"望江县","pcode":"340800","code":"340827"},{"caption":"岳西县","pcode":"340800","code":"340828"},{"caption":"桐城市","pcode":"340800","code":"340881"},{"caption":"黄山市","pcode":"340000","code":"341000"},{"caption":"屯溪区","pcode":"341000","code":"341002"},{"caption":"黄山区","pcode":"341000","code":"341003"},{"caption":"徽州区","pcode":"341000","code":"341004"},{"caption":"歙县","pcode":"341000","code":"341021"},{"caption":"休宁县","pcode":"341000","code":"341022"},{"caption":"黟县","pcode":"341000","code":"341023"},{"caption":"祁门县","pcode":"341000","code":"341024"},{"caption":"滁州市","pcode":"340000","code":"341100"},{"caption":"琅琊区","pcode":"341100","code":"341102"},{"caption":"南谯区","pcode":"341100","code":"341103"},{"caption":"来安县","pcode":"341100","code":"341122"},{"caption":"全椒县","pcode":"341100","code":"341124"},{"caption":"定远县","pcode":"341100","code":"341125"},{"caption":"凤阳县","pcode":"341100","code":"341126"},{"caption":"天长市","pcode":"341100","code":"341181"},{"caption":"明光市","pcode":"341100","code":"341182"},{"caption":"阜阳市","pcode":"340000","code":"341200"},{"caption":"颍州区","pcode":"341200","code":"341202"},{"caption":"颍东区","pcode":"341200","code":"341203"},{"caption":"颍泉区","pcode":"341200","code":"341204"},{"caption":"临泉县","pcode":"341200","code":"341221"},{"caption":"太和县","pcode":"341200","code":"341222"},{"caption":"阜南县","pcode":"341200","code":"341225"},{"caption":"颍上县","pcode":"341200","code":"341226"},{"caption":"界首市","pcode":"341200","code":"341282"},{"caption":"宿州市","pcode":"340000","code":"341300"},{"caption":"埇桥区","pcode":"341300","code":"341302"},{"caption":"砀山县","pcode":"341300","code":"341321"},{"caption":"萧县","pcode":"341300","code":"341322"},{"caption":"灵璧县","pcode":"341300","code":"341323"},{"caption":"泗县","pcode":"341300","code":"341324"},{"caption":"六安市","pcode":"340000","code":"341500"},{"caption":"金安区","pcode":"341500","code":"341502"},{"caption":"裕安区","pcode":"341500","code":"341503"},{"caption":"叶集区","pcode":"341500","code":"341504"},{"caption":"寿县","pcode":"341500","code":"341521"},{"caption":"霍邱县","pcode":"341500","code":"341522"},{"caption":"舒城县","pcode":"341500","code":"341523"},{"caption":"金寨县","pcode":"341500","code":"341524"},{"caption":"霍山县","pcode":"341500","code":"341525"},{"caption":"亳州市","pcode":"340000","code":"341600"},{"caption":"谯城区","pcode":"341600","code":"341602"},{"caption":"涡阳县","pcode":"341600","code":"341621"},{"caption":"蒙城县","pcode":"341600","code":"341622"},{"caption":"利辛县","pcode":"341600","code":"341623"},{"caption":"池州市","pcode":"340000","code":"341700"},{"caption":"贵池区","pcode":"341700","code":"341702"},{"caption":"东至县","pcode":"341700","code":"341721"},{"caption":"石台县","pcode":"341700","code":"341722"},{"caption":"青阳县","pcode":"341700","code":"341723"},{"caption":"宣城市","pcode":"340000","code":"341800"},{"caption":"宣州区","pcode":"341800","code":"341802"},{"caption":"郎溪县","pcode":"341800","code":"341821"},{"caption":"广德县","pcode":"341800","code":"341822"},{"caption":"泾县","pcode":"341800","code":"341823"},{"caption":"绩溪县","pcode":"341800","code":"341824"},{"caption":"旌德县","pcode":"341800","code":"341825"},{"caption":"宁国市","pcode":"341800","code":"341881"},{"caption":"福建省","pcode":"null","code":"350000"},{"caption":"福州市","pcode":"350000","code":"350100"},{"caption":"鼓楼区","pcode":"350100","code":"350102"},{"caption":"台江区","pcode":"350100","code":"350103"},{"caption":"仓山区","pcode":"350100","code":"350104"},{"caption":"马尾区","pcode":"350100","code":"350105"},{"caption":"晋安区","pcode":"350100","code":"350111"},{"caption":"闽侯县","pcode":"350100","code":"350121"},{"caption":"连江县","pcode":"350100","code":"350122"},{"caption":"罗源县","pcode":"350100","code":"350123"},{"caption":"闽清县","pcode":"350100","code":"350124"},{"caption":"永泰县","pcode":"350100","code":"350125"},{"caption":"平潭县","pcode":"350100","code":"350128"},{"caption":"福清市","pcode":"350100","code":"350181"},{"caption":"长乐市","pcode":"350100","code":"350182"},{"caption":"厦门市","pcode":"350000","code":"350200"},{"caption":"思明区","pcode":"350200","code":"350203"},{"caption":"海沧区","pcode":"350200","code":"350205"},{"caption":"湖里区","pcode":"350200","code":"350206"},{"caption":"集美区","pcode":"350200","code":"350211"},{"caption":"同安区","pcode":"350200","code":"350212"},{"caption":"翔安区","pcode":"350200","code":"350213"},{"caption":"莆田市","pcode":"350000","code":"350300"},{"caption":"城厢区","pcode":"350300","code":"350302"},{"caption":"涵江区","pcode":"350300","code":"350303"},{"caption":"荔城区","pcode":"350300","code":"350304"},{"caption":"秀屿区","pcode":"350300","code":"350305"},{"caption":"仙游县","pcode":"350300","code":"350322"},{"caption":"三明市","pcode":"350000","code":"350400"},{"caption":"梅列区","pcode":"350400","code":"350402"},{"caption":"三元区","pcode":"350400","code":"350403"},{"caption":"明溪县","pcode":"350400","code":"350421"},{"caption":"清流县","pcode":"350400","code":"350423"},{"caption":"宁化县","pcode":"350400","code":"350424"},{"caption":"大田县","pcode":"350400","code":"350425"},{"caption":"尤溪县","pcode":"350400","code":"350426"},{"caption":"沙县","pcode":"350400","code":"350427"},{"caption":"将乐县","pcode":"350400","code":"350428"},{"caption":"泰宁县","pcode":"350400","code":"350429"},{"caption":"建宁县","pcode":"350400","code":"350430"},{"caption":"永安市","pcode":"350400","code":"350481"},{"caption":"泉州市","pcode":"350000","code":"350500"},{"caption":"鲤城区","pcode":"350500","code":"350502"},{"caption":"丰泽区","pcode":"350500","code":"350503"},{"caption":"洛江区","pcode":"350500","code":"350504"},{"caption":"泉港区","pcode":"350500","code":"350505"},{"caption":"惠安县","pcode":"350500","code":"350521"},{"caption":"安溪县","pcode":"350500","code":"350524"},{"caption":"永春县","pcode":"350500","code":"350525"},{"caption":"德化县","pcode":"350500","code":"350526"},{"caption":"金门县","pcode":"350500","code":"350527"},{"caption":"石狮市","pcode":"350500","code":"350581"},{"caption":"晋江市","pcode":"350500","code":"350582"},{"caption":"南安市","pcode":"350500","code":"350583"},{"caption":"漳州市","pcode":"350000","code":"350600"},{"caption":"芗城区","pcode":"350600","code":"350602"},{"caption":"龙文区","pcode":"350600","code":"350603"},{"caption":"云霄县","pcode":"350600","code":"350622"},{"caption":"漳浦县","pcode":"350600","code":"350623"},{"caption":"诏安县","pcode":"350600","code":"350624"},{"caption":"长泰县","pcode":"350600","code":"350625"},{"caption":"东山县","pcode":"350600","code":"350626"},{"caption":"南靖县","pcode":"350600","code":"350627"},{"caption":"平和县","pcode":"350600","code":"350628"},{"caption":"华安县","pcode":"350600","code":"350629"},{"caption":"龙海市","pcode":"350600","code":"350681"},{"caption":"南平市","pcode":"350000","code":"350700"},{"caption":"延平区","pcode":"350700","code":"350702"},{"caption":"顺昌县","pcode":"350700","code":"350721"},{"caption":"浦城县","pcode":"350700","code":"350722"},{"caption":"光泽县","pcode":"350700","code":"350723"},{"caption":"松溪县","pcode":"350700","code":"350724"},{"caption":"政和县","pcode":"350700","code":"350725"},{"caption":"邵武市","pcode":"350700","code":"350781"},{"caption":"武夷山市","pcode":"350700","code":"350782"},{"caption":"建瓯市","pcode":"350700","code":"350783"},{"caption":"建阳市","pcode":"350700","code":"350784"},{"caption":"龙岩市","pcode":"350000","code":"350800"},{"caption":"新罗区","pcode":"350800","code":"350802"},{"caption":"长汀县","pcode":"350800","code":"350821"},{"caption":"永定县","pcode":"350800","code":"350822"},{"caption":"上杭县","pcode":"350800","code":"350823"},{"caption":"武平县","pcode":"350800","code":"350824"},{"caption":"连城县","pcode":"350800","code":"350825"},{"caption":"漳平市","pcode":"350800","code":"350881"},{"caption":"宁德市","pcode":"350000","code":"350900"},{"caption":"蕉城区","pcode":"350900","code":"350902"},{"caption":"霞浦县","pcode":"350900","code":"350921"},{"caption":"古田县","pcode":"350900","code":"350922"},{"caption":"屏南县","pcode":"350900","code":"350923"},{"caption":"寿宁县","pcode":"350900","code":"350924"},{"caption":"周宁县","pcode":"350900","code":"350925"},{"caption":"柘荣县","pcode":"350900","code":"350926"},{"caption":"福安市","pcode":"350900","code":"350981"},{"caption":"福鼎市","pcode":"350900","code":"350982"},{"caption":"江西省","pcode":"null","code":"360000"},{"caption":"南昌市","pcode":"360000","code":"360100"},{"caption":"东湖区","pcode":"360100","code":"360102"},{"caption":"西湖区","pcode":"360100","code":"360103"},{"caption":"青云谱区","pcode":"360100","code":"360104"},{"caption":"湾里区","pcode":"360100","code":"360105"},{"caption":"青山湖区","pcode":"360100","code":"360111"},{"caption":"南昌县","pcode":"360100","code":"360121"},{"caption":"新建县","pcode":"360100","code":"360122"},{"caption":"安义县","pcode":"360100","code":"360123"},{"caption":"进贤县","pcode":"360100","code":"360124"},{"caption":"景德镇市","pcode":"360000","code":"360200"},{"caption":"昌江区","pcode":"360200","code":"360202"},{"caption":"珠山区","pcode":"360200","code":"360203"},{"caption":"浮梁县","pcode":"360200","code":"360222"},{"caption":"乐平市","pcode":"360200","code":"360281"},{"caption":"萍乡市","pcode":"360000","code":"360300"},{"caption":"安源区","pcode":"360300","code":"360302"},{"caption":"湘东区","pcode":"360300","code":"360313"},{"caption":"莲花县","pcode":"360300","code":"360321"},{"caption":"上栗县","pcode":"360300","code":"360322"},{"caption":"芦溪县","pcode":"360300","code":"360323"},{"caption":"九江市","pcode":"360000","code":"360400"},{"caption":"濂溪区","pcode":"360400","code":"360402"},{"caption":"浔阳区","pcode":"360400","code":"360403"},{"caption":"九江县","pcode":"360400","code":"360421"},{"caption":"武宁县","pcode":"360400","code":"360423"},{"caption":"修水县","pcode":"360400","code":"360424"},{"caption":"永修县","pcode":"360400","code":"360425"},{"caption":"德安县","pcode":"360400","code":"360426"},{"caption":"都昌县","pcode":"360400","code":"360428"},{"caption":"湖口县","pcode":"360400","code":"360429"},{"caption":"彭泽县","pcode":"360400","code":"360430"},{"caption":"瑞昌市","pcode":"360400","code":"360481"},{"caption":"共青城市","pcode":"360400","code":"360482"},{"caption":"庐山市","pcode":"360400","code":"360483"},{"caption":"新余市","pcode":"360000","code":"360500"},{"caption":"渝水区","pcode":"360500","code":"360502"},{"caption":"分宜县","pcode":"360500","code":"360521"},{"caption":"鹰潭市","pcode":"360000","code":"360600"},{"caption":"月湖区","pcode":"360600","code":"360602"},{"caption":"余江县","pcode":"360600","code":"360622"},{"caption":"贵溪市","pcode":"360600","code":"360681"},{"caption":"赣州市","pcode":"360000","code":"360700"},{"caption":"章贡区","pcode":"360700","code":"360702"},{"caption":"南康区","pcode":"360700","code":"360703"},{"caption":"赣县区","pcode":"360700","code":"360704"},{"caption":"信丰县","pcode":"360700","code":"360722"},{"caption":"大余县","pcode":"360700","code":"360723"},{"caption":"上犹县","pcode":"360700","code":"360724"},{"caption":"崇义县","pcode":"360700","code":"360725"},{"caption":"安远县","pcode":"360700","code":"360726"},{"caption":"龙南县","pcode":"360700","code":"360727"},{"caption":"定南县","pcode":"360700","code":"360728"},{"caption":"全南县","pcode":"360700","code":"360729"},{"caption":"宁都县","pcode":"360700","code":"360730"},{"caption":"于都县","pcode":"360700","code":"360731"},{"caption":"兴国县","pcode":"360700","code":"360732"},{"caption":"会昌县","pcode":"360700","code":"360733"},{"caption":"寻乌县","pcode":"360700","code":"360734"},{"caption":"石城县","pcode":"360700","code":"360735"},{"caption":"瑞金市","pcode":"360700","code":"360781"},{"caption":"吉安市","pcode":"360000","code":"360800"},{"caption":"吉州区","pcode":"360800","code":"360802"},{"caption":"青原区","pcode":"360800","code":"360803"},{"caption":"吉安县","pcode":"360800","code":"360821"},{"caption":"吉水县","pcode":"360800","code":"360822"},{"caption":"峡江县","pcode":"360800","code":"360823"},{"caption":"新干县","pcode":"360800","code":"360824"},{"caption":"永丰县","pcode":"360800","code":"360825"},{"caption":"泰和县","pcode":"360800","code":"360826"},{"caption":"遂川县","pcode":"360800","code":"360827"},{"caption":"万安县","pcode":"360800","code":"360828"},{"caption":"安福县","pcode":"360800","code":"360829"},{"caption":"永新县","pcode":"360800","code":"360830"},{"caption":"井冈山市","pcode":"360800","code":"360881"},{"caption":"宜春市","pcode":"360000","code":"360900"},{"caption":"袁州区","pcode":"360900","code":"360902"},{"caption":"奉新县","pcode":"360900","code":"360921"},{"caption":"万载县","pcode":"360900","code":"360922"},{"caption":"上高县","pcode":"360900","code":"360923"},{"caption":"宜丰县","pcode":"360900","code":"360924"},{"caption":"靖安县","pcode":"360900","code":"360925"},{"caption":"铜鼓县","pcode":"360900","code":"360926"},{"caption":"丰城市","pcode":"360900","code":"360981"},{"caption":"樟树市","pcode":"360900","code":"360982"},{"caption":"高安市","pcode":"360900","code":"360983"},{"caption":"抚州市","pcode":"360000","code":"361000"},{"caption":"临川区","pcode":"361000","code":"361002"},{"caption":"东乡区","pcode":"361000","code":"361003"},{"caption":"南城县","pcode":"361000","code":"361021"},{"caption":"黎川县","pcode":"361000","code":"361022"},{"caption":"南丰县","pcode":"361000","code":"361023"},{"caption":"崇仁县","pcode":"361000","code":"361024"},{"caption":"乐安县","pcode":"361000","code":"361025"},{"caption":"宜黄县","pcode":"361000","code":"361026"},{"caption":"金溪县","pcode":"361000","code":"361027"},{"caption":"资溪县","pcode":"361000","code":"361028"},{"caption":"广昌县","pcode":"361000","code":"361030"},{"caption":"上饶市","pcode":"360000","code":"361100"},{"caption":"信州区","pcode":"361100","code":"361102"},{"caption":"上饶县","pcode":"361100","code":"361121"},{"caption":"广丰县","pcode":"361100","code":"361122"},{"caption":"玉山县","pcode":"361100","code":"361123"},{"caption":"铅山县","pcode":"361100","code":"361124"},{"caption":"横峰县","pcode":"361100","code":"361125"},{"caption":"弋阳县","pcode":"361100","code":"361126"},{"caption":"余干县","pcode":"361100","code":"361127"},{"caption":"鄱阳县","pcode":"361100","code":"361128"},{"caption":"万年县","pcode":"361100","code":"361129"},{"caption":"婺源县","pcode":"361100","code":"361130"},{"caption":"德兴市","pcode":"361100","code":"361181"},{"caption":"山东省","pcode":"null","code":"370000"},{"caption":"济南市","pcode":"370000","code":"370100"},{"caption":"历下区","pcode":"370100","code":"370102"},{"caption":"市中区","pcode":"370100","code":"370103"},{"caption":"槐荫区","pcode":"370100","code":"370104"},{"caption":"天桥区","pcode":"370100","code":"370105"},{"caption":"历城区","pcode":"370100","code":"370112"},{"caption":"长清区","pcode":"370100","code":"370113"},{"caption":"平阴县","pcode":"370100","code":"370124"},{"caption":"济阳县","pcode":"370100","code":"370125"},{"caption":"商河县","pcode":"370100","code":"370126"},{"caption":"章丘市","pcode":"370100","code":"370181"},{"caption":"青岛市","pcode":"370000","code":"370200"},{"caption":"市南区","pcode":"370200","code":"370202"},{"caption":"市北区","pcode":"370200","code":"370203"},{"caption":"黄岛区","pcode":"370200","code":"370211"},{"caption":"崂山区","pcode":"370200","code":"370212"},{"caption":"李沧区","pcode":"370200","code":"370213"},{"caption":"城阳区","pcode":"370200","code":"370214"},{"caption":"胶州市","pcode":"370200","code":"370281"},{"caption":"即墨市","pcode":"370200","code":"370282"},{"caption":"平度市","pcode":"370200","code":"370283"},{"caption":"莱西市","pcode":"370200","code":"370285"},{"caption":"淄博市","pcode":"370000","code":"370300"},{"caption":"淄川区","pcode":"370300","code":"370302"},{"caption":"张店区","pcode":"370300","code":"370303"},{"caption":"博山区","pcode":"370300","code":"370304"},{"caption":"临淄区","pcode":"370300","code":"370305"},{"caption":"周村区","pcode":"370300","code":"370306"},{"caption":"桓台县","pcode":"370300","code":"370321"},{"caption":"高青县","pcode":"370300","code":"370322"},{"caption":"沂源县","pcode":"370300","code":"370323"},{"caption":"枣庄市","pcode":"370000","code":"370400"},{"caption":"市中区","pcode":"370400","code":"370402"},{"caption":"薛城区","pcode":"370400","code":"370403"},{"caption":"峄城区","pcode":"370400","code":"370404"},{"caption":"台儿庄区","pcode":"370400","code":"370405"},{"caption":"山亭区","pcode":"370400","code":"370406"},{"caption":"滕州市","pcode":"370400","code":"370481"},{"caption":"东营市","pcode":"370000","code":"370500"},{"caption":"东营区","pcode":"370500","code":"370502"},{"caption":"河口区","pcode":"370500","code":"370503"},{"caption":"垦利县","pcode":"370500","code":"370521"},{"caption":"利津县","pcode":"370500","code":"370522"},{"caption":"广饶县","pcode":"370500","code":"370523"},{"caption":"烟台市","pcode":"370000","code":"370600"},{"caption":"芝罘区","pcode":"370600","code":"370602"},{"caption":"福山区","pcode":"370600","code":"370611"},{"caption":"牟平区","pcode":"370600","code":"370612"},{"caption":"莱山区","pcode":"370600","code":"370613"},{"caption":"长岛县","pcode":"370600","code":"370634"},{"caption":"龙口市","pcode":"370600","code":"370681"},{"caption":"莱阳市","pcode":"370600","code":"370682"},{"caption":"莱州市","pcode":"370600","code":"370683"},{"caption":"蓬莱市","pcode":"370600","code":"370684"},{"caption":"招远市","pcode":"370600","code":"370685"},{"caption":"栖霞市","pcode":"370600","code":"370686"},{"caption":"海阳市","pcode":"370600","code":"370687"},{"caption":"潍坊市","pcode":"370000","code":"370700"},{"caption":"潍城区","pcode":"370700","code":"370702"},{"caption":"寒亭区","pcode":"370700","code":"370703"},{"caption":"坊子区","pcode":"370700","code":"370704"},{"caption":"奎文区","pcode":"370700","code":"370705"},{"caption":"临朐县","pcode":"370700","code":"370724"},{"caption":"昌乐县","pcode":"370700","code":"370725"},{"caption":"青州市","pcode":"370700","code":"370781"},{"caption":"诸城市","pcode":"370700","code":"370782"},{"caption":"寿光市","pcode":"370700","code":"370783"},{"caption":"安丘市","pcode":"370700","code":"370784"},{"caption":"高密市","pcode":"370700","code":"370785"},{"caption":"昌邑市","pcode":"370700","code":"370786"},{"caption":"济宁市","pcode":"370000","code":"370800"},{"caption":"市中区","pcode":"370800","code":"370802"},{"caption":"任城区","pcode":"370800","code":"370811"},{"caption":"微山县","pcode":"370800","code":"370826"},{"caption":"鱼台县","pcode":"370800","code":"370827"},{"caption":"金乡县","pcode":"370800","code":"370828"},{"caption":"嘉祥县","pcode":"370800","code":"370829"},{"caption":"汶上县","pcode":"370800","code":"370830"},{"caption":"泗水县","pcode":"370800","code":"370831"},{"caption":"梁山县","pcode":"370800","code":"370832"},{"caption":"曲阜市","pcode":"370800","code":"370881"},{"caption":"兖州市","pcode":"370800","code":"370882"},{"caption":"邹城市","pcode":"370800","code":"370883"},{"caption":"泰安市","pcode":"370000","code":"370900"},{"caption":"泰山区","pcode":"370900","code":"370902"},{"caption":"岱岳区","pcode":"370900","code":"370911"},{"caption":"宁阳县","pcode":"370900","code":"370921"},{"caption":"东平县","pcode":"370900","code":"370923"},{"caption":"新泰市","pcode":"370900","code":"370982"},{"caption":"肥城市","pcode":"370900","code":"370983"},{"caption":"威海市","pcode":"370000","code":"371000"},{"caption":"环翠区","pcode":"371000","code":"371002"},{"caption":"文登市","pcode":"371000","code":"371081"},{"caption":"荣成市","pcode":"371000","code":"371082"},{"caption":"乳山市","pcode":"371000","code":"371083"},{"caption":"日照市","pcode":"370000","code":"371100"},{"caption":"东港区","pcode":"371100","code":"371102"},{"caption":"岚山区","pcode":"371100","code":"371103"},{"caption":"五莲县","pcode":"371100","code":"371121"},{"caption":"莒县","pcode":"371100","code":"371122"},{"caption":"莱芜市","pcode":"370000","code":"371200"},{"caption":"莱城区","pcode":"371200","code":"371202"},{"caption":"钢城区","pcode":"371200","code":"371203"},{"caption":"临沂市","pcode":"370000","code":"371300"},{"caption":"兰山区","pcode":"371300","code":"371302"},{"caption":"罗庄区","pcode":"371300","code":"371311"},{"caption":"河东区","pcode":"371300","code":"371312"},{"caption":"沂南县","pcode":"371300","code":"371321"},{"caption":"郯城县","pcode":"371300","code":"371322"},{"caption":"沂水县","pcode":"371300","code":"371323"},{"caption":"兰陵县","pcode":"371300","code":"371324"},{"caption":"费县","pcode":"371300","code":"371325"},{"caption":"平邑县","pcode":"371300","code":"371326"},{"caption":"莒南县","pcode":"371300","code":"371327"},{"caption":"蒙阴县","pcode":"371300","code":"371328"},{"caption":"临沭县","pcode":"371300","code":"371329"},{"caption":"德州市","pcode":"370000","code":"371400"},{"caption":"德城区","pcode":"371400","code":"371402"},{"caption":"陵县","pcode":"371400","code":"371421"},{"caption":"宁津县","pcode":"371400","code":"371422"},{"caption":"庆云县","pcode":"371400","code":"371423"},{"caption":"临邑县","pcode":"371400","code":"371424"},{"caption":"齐河县","pcode":"371400","code":"371425"},{"caption":"平原县","pcode":"371400","code":"371426"},{"caption":"夏津县","pcode":"371400","code":"371427"},{"caption":"武城县","pcode":"371400","code":"371428"},{"caption":"乐陵市","pcode":"371400","code":"371481"},{"caption":"禹城市","pcode":"371400","code":"371482"},{"caption":"聊城市","pcode":"370000","code":"371500"},{"caption":"东昌府区","pcode":"371500","code":"371502"},{"caption":"阳谷县","pcode":"371500","code":"371521"},{"caption":"莘县","pcode":"371500","code":"371522"},{"caption":"茌平县","pcode":"371500","code":"371523"},{"caption":"东阿县","pcode":"371500","code":"371524"},{"caption":"冠县","pcode":"371500","code":"371525"},{"caption":"高唐县","pcode":"371500","code":"371526"},{"caption":"临清市","pcode":"371500","code":"371581"},{"caption":"滨州市","pcode":"370000","code":"371600"},{"caption":"滨城区","pcode":"371600","code":"371602"},{"caption":"沾化区","pcode":"371600","code":"371603"},{"caption":"惠民县","pcode":"371600","code":"371621"},{"caption":"阳信县","pcode":"371600","code":"371622"},{"caption":"无棣县","pcode":"371600","code":"371623"},{"caption":"博兴县","pcode":"371600","code":"371625"},{"caption":"邹平县","pcode":"371600","code":"371626"},{"caption":"菏泽市","pcode":"370000","code":"371700"},{"caption":"牡丹区","pcode":"371700","code":"371702"},{"caption":"曹县","pcode":"371700","code":"371721"},{"caption":"单县","pcode":"371700","code":"371722"},{"caption":"成武县","pcode":"371700","code":"371723"},{"caption":"巨野县","pcode":"371700","code":"371724"},{"caption":"郓城县","pcode":"371700","code":"371725"},{"caption":"鄄城县","pcode":"371700","code":"371726"},{"caption":"定陶县","pcode":"371700","code":"371727"},{"caption":"东明县","pcode":"371700","code":"371728"},{"caption":"河南省","pcode":"null","code":"410000"},{"caption":"郑州市","pcode":"410000","code":"410100"},{"caption":"中原区","pcode":"410100","code":"410102"},{"caption":"二七区","pcode":"410100","code":"410103"},{"caption":"管城回族区","pcode":"410100","code":"410104"},{"caption":"金水区","pcode":"410100","code":"410105"},{"caption":"上街区","pcode":"410100","code":"410106"},{"caption":"惠济区","pcode":"410100","code":"410108"},{"caption":"中牟县","pcode":"410100","code":"410122"},{"caption":"巩义市","pcode":"410100","code":"410181"},{"caption":"荥阳市","pcode":"410100","code":"410182"},{"caption":"新密市","pcode":"410100","code":"410183"},{"caption":"新郑市","pcode":"410100","code":"410184"},{"caption":"登封市","pcode":"410100","code":"410185"},{"caption":"开封市","pcode":"410000","code":"410200"},{"caption":"龙亭区","pcode":"410200","code":"410202"},{"caption":"顺河回族区","pcode":"410200","code":"410203"},{"caption":"鼓楼区","pcode":"410200","code":"410204"},{"caption":"禹王台区","pcode":"410200","code":"410205"},{"caption":"金明区","pcode":"410200","code":"410211"},{"caption":"杞县","pcode":"410200","code":"410221"},{"caption":"通许县","pcode":"410200","code":"410222"},{"caption":"尉氏县","pcode":"410200","code":"410223"},{"caption":"祥符区","pcode":"410200","code":"410224"},{"caption":"兰考县","pcode":"410200","code":"410225"},{"caption":"洛阳市","pcode":"410000","code":"410300"},{"caption":"老城区","pcode":"410300","code":"410302"},{"caption":"西工区","pcode":"410300","code":"410303"},{"caption":"瀍河回族区","pcode":"410300","code":"410304"},{"caption":"涧西区","pcode":"410300","code":"410305"},{"caption":"吉利区","pcode":"410300","code":"410306"},{"caption":"洛龙区","pcode":"410300","code":"410311"},{"caption":"孟津县","pcode":"410300","code":"410322"},{"caption":"新安县","pcode":"410300","code":"410323"},{"caption":"栾川县","pcode":"410300","code":"410324"},{"caption":"嵩县","pcode":"410300","code":"410325"},{"caption":"汝阳县","pcode":"410300","code":"410326"},{"caption":"宜阳县","pcode":"410300","code":"410327"},{"caption":"洛宁县","pcode":"410300","code":"410328"},{"caption":"伊川县","pcode":"410300","code":"410329"},{"caption":"偃师市","pcode":"410300","code":"410381"},{"caption":"平顶山市","pcode":"410000","code":"410400"},{"caption":"新华区","pcode":"410400","code":"410402"},{"caption":"卫东区","pcode":"410400","code":"410403"},{"caption":"石龙区","pcode":"410400","code":"410404"},{"caption":"湛河区","pcode":"410400","code":"410411"},{"caption":"宝丰县","pcode":"410400","code":"410421"},{"caption":"叶县","pcode":"410400","code":"410422"},{"caption":"鲁山县","pcode":"410400","code":"410423"},{"caption":"郏县","pcode":"410400","code":"410425"},{"caption":"舞钢市","pcode":"410400","code":"410481"},{"caption":"汝州市","pcode":"410400","code":"410482"},{"caption":"安阳市","pcode":"410000","code":"410500"},{"caption":"文峰区","pcode":"410500","code":"410502"},{"caption":"北关区","pcode":"410500","code":"410503"},{"caption":"殷都区","pcode":"410500","code":"410505"},{"caption":"龙安区","pcode":"410500","code":"410506"},{"caption":"安阳县","pcode":"410500","code":"410522"},{"caption":"汤阴县","pcode":"410500","code":"410523"},{"caption":"滑县","pcode":"410500","code":"410526"},{"caption":"内黄县","pcode":"410500","code":"410527"},{"caption":"林州市","pcode":"410500","code":"410581"},{"caption":"鹤壁市","pcode":"410000","code":"410600"},{"caption":"鹤山区","pcode":"410600","code":"410602"},{"caption":"山城区","pcode":"410600","code":"410603"},{"caption":"淇滨区","pcode":"410600","code":"410611"},{"caption":"浚县","pcode":"410600","code":"410621"},{"caption":"淇县","pcode":"410600","code":"410622"},{"caption":"新乡市","pcode":"410000","code":"410700"},{"caption":"红旗区","pcode":"410700","code":"410702"},{"caption":"卫滨区","pcode":"410700","code":"410703"},{"caption":"凤泉区","pcode":"410700","code":"410704"},{"caption":"牧野区","pcode":"410700","code":"410711"},{"caption":"新乡县","pcode":"410700","code":"410721"},{"caption":"获嘉县","pcode":"410700","code":"410724"},{"caption":"原阳县","pcode":"410700","code":"410725"},{"caption":"延津县","pcode":"410700","code":"410726"},{"caption":"封丘县","pcode":"410700","code":"410727"},{"caption":"长垣县","pcode":"410700","code":"410728"},{"caption":"卫辉市","pcode":"410700","code":"410781"},{"caption":"辉县市","pcode":"410700","code":"410782"},{"caption":"焦作市","pcode":"410000","code":"410800"},{"caption":"解放区","pcode":"410800","code":"410802"},{"caption":"中站区","pcode":"410800","code":"410803"},{"caption":"马村区","pcode":"410800","code":"410804"},{"caption":"山阳区","pcode":"410800","code":"410811"},{"caption":"修武县","pcode":"410800","code":"410821"},{"caption":"博爱县","pcode":"410800","code":"410822"},{"caption":"武陟县","pcode":"410800","code":"410823"},{"caption":"温县","pcode":"410800","code":"410825"},{"caption":"沁阳市","pcode":"410800","code":"410882"},{"caption":"孟州市","pcode":"410800","code":"410883"},{"caption":"濮阳市","pcode":"410000","code":"410900"},{"caption":"华龙区","pcode":"410900","code":"410902"},{"caption":"清丰县","pcode":"410900","code":"410922"},{"caption":"南乐县","pcode":"410900","code":"410923"},{"caption":"范县","pcode":"410900","code":"410926"},{"caption":"台前县","pcode":"410900","code":"410927"},{"caption":"濮阳县","pcode":"410900","code":"410928"},{"caption":"许昌市","pcode":"410000","code":"411000"},{"caption":"魏都区","pcode":"411000","code":"411002"},{"caption":"建安区","pcode":"411000","code":"411003"},{"caption":"鄢陵县","pcode":"411000","code":"411024"},{"caption":"襄城县","pcode":"411000","code":"411025"},{"caption":"禹州市","pcode":"411000","code":"411081"},{"caption":"长葛市","pcode":"411000","code":"411082"},{"caption":"漯河市","pcode":"410000","code":"411100"},{"caption":"源汇区","pcode":"411100","code":"411102"},{"caption":"郾城区","pcode":"411100","code":"411103"},{"caption":"召陵区","pcode":"411100","code":"411104"},{"caption":"舞阳县","pcode":"411100","code":"411121"},{"caption":"临颍县","pcode":"411100","code":"411122"},{"caption":"三门峡市","pcode":"410000","code":"411200"},{"caption":"湖滨区","pcode":"411200","code":"411202"},{"caption":"渑池县","pcode":"411200","code":"411221"},{"caption":"陕县","pcode":"411200","code":"411222"},{"caption":"卢氏县","pcode":"411200","code":"411224"},{"caption":"义马市","pcode":"411200","code":"411281"},{"caption":"灵宝市","pcode":"411200","code":"411282"},{"caption":"南阳市","pcode":"410000","code":"411300"},{"caption":"宛城区","pcode":"411300","code":"411302"},{"caption":"卧龙区","pcode":"411300","code":"411303"},{"caption":"南召县","pcode":"411300","code":"411321"},{"caption":"方城县","pcode":"411300","code":"411322"},{"caption":"西峡县","pcode":"411300","code":"411323"},{"caption":"镇平县","pcode":"411300","code":"411324"},{"caption":"内乡县","pcode":"411300","code":"411325"},{"caption":"淅川县","pcode":"411300","code":"411326"},{"caption":"社旗县","pcode":"411300","code":"411327"},{"caption":"唐河县","pcode":"411300","code":"411328"},{"caption":"新野县","pcode":"411300","code":"411329"},{"caption":"桐柏县","pcode":"411300","code":"411330"},{"caption":"邓州市","pcode":"411300","code":"411381"},{"caption":"商丘市","pcode":"410000","code":"411400"},{"caption":"梁园区","pcode":"411400","code":"411402"},{"caption":"睢阳区","pcode":"411400","code":"411403"},{"caption":"民权县","pcode":"411400","code":"411421"},{"caption":"睢县","pcode":"411400","code":"411422"},{"caption":"宁陵县","pcode":"411400","code":"411423"},{"caption":"柘城县","pcode":"411400","code":"411424"},{"caption":"虞城县","pcode":"411400","code":"411425"},{"caption":"夏邑县","pcode":"411400","code":"411426"},{"caption":"永城市","pcode":"411400","code":"411481"},{"caption":"信阳市","pcode":"410000","code":"411500"},{"caption":"浉河区","pcode":"411500","code":"411502"},{"caption":"平桥区","pcode":"411500","code":"411503"},{"caption":"罗山县","pcode":"411500","code":"411521"},{"caption":"光山县","pcode":"411500","code":"411522"},{"caption":"新县","pcode":"411500","code":"411523"},{"caption":"商城县","pcode":"411500","code":"411524"},{"caption":"固始县","pcode":"411500","code":"411525"},{"caption":"潢川县","pcode":"411500","code":"411526"},{"caption":"淮滨县","pcode":"411500","code":"411527"},{"caption":"息县","pcode":"411500","code":"411528"},{"caption":"周口市","pcode":"410000","code":"411600"},{"caption":"川汇区","pcode":"411600","code":"411602"},{"caption":"扶沟县","pcode":"411600","code":"411621"},{"caption":"西华县","pcode":"411600","code":"411622"},{"caption":"商水县","pcode":"411600","code":"411623"},{"caption":"沈丘县","pcode":"411600","code":"411624"},{"caption":"郸城县","pcode":"411600","code":"411625"},{"caption":"淮阳县","pcode":"411600","code":"411626"},{"caption":"太康县","pcode":"411600","code":"411627"},{"caption":"鹿邑县","pcode":"411600","code":"411628"},{"caption":"项城市","pcode":"411600","code":"411681"},{"caption":"驻马店市","pcode":"410000","code":"411700"},{"caption":"驿城区","pcode":"411700","code":"411702"},{"caption":"西平县","pcode":"411700","code":"411721"},{"caption":"上蔡县","pcode":"411700","code":"411722"},{"caption":"平舆县","pcode":"411700","code":"411723"},{"caption":"正阳县","pcode":"411700","code":"411724"},{"caption":"确山县","pcode":"411700","code":"411725"},{"caption":"泌阳县","pcode":"411700","code":"411726"},{"caption":"汝南县","pcode":"411700","code":"411727"},{"caption":"遂平县","pcode":"411700","code":"411728"},{"caption":"新蔡县","pcode":"411700","code":"411729"},{"caption":"济源市","pcode":"410000","code":"419001"},{"caption":"湖北省","pcode":"null","code":"420000"},{"caption":"武汉市","pcode":"420000","code":"420100"},{"caption":"江岸区","pcode":"420100","code":"420102"},{"caption":"江汉区","pcode":"420100","code":"420103"},{"caption":"硚口区","pcode":"420100","code":"420104"},{"caption":"汉阳区","pcode":"420100","code":"420105"},{"caption":"武昌区","pcode":"420100","code":"420106"},{"caption":"青山区","pcode":"420100","code":"420107"},{"caption":"洪山区","pcode":"420100","code":"420111"},{"caption":"东西湖区","pcode":"420100","code":"420112"},{"caption":"汉南区","pcode":"420100","code":"420113"},{"caption":"蔡甸区","pcode":"420100","code":"420114"},{"caption":"江夏区","pcode":"420100","code":"420115"},{"caption":"黄陂区","pcode":"420100","code":"420116"},{"caption":"新洲区","pcode":"420100","code":"420117"},{"caption":"黄石市","pcode":"420000","code":"420200"},{"caption":"黄石港区","pcode":"420200","code":"420202"},{"caption":"西塞山区","pcode":"420200","code":"420203"},{"caption":"下陆区","pcode":"420200","code":"420204"},{"caption":"铁山区","pcode":"420200","code":"420205"},{"caption":"阳新县","pcode":"420200","code":"420222"},{"caption":"大冶市","pcode":"420200","code":"420281"},{"caption":"十堰市","pcode":"420000","code":"420300"},{"caption":"茅箭区","pcode":"420300","code":"420302"},{"caption":"张湾区","pcode":"420300","code":"420303"},{"caption":"郧阳区","pcode":"420300","code":"420304"},{"caption":"郧西县","pcode":"420300","code":"420322"},{"caption":"竹山县","pcode":"420300","code":"420323"},{"caption":"竹溪县","pcode":"420300","code":"420324"},{"caption":"房县","pcode":"420300","code":"420325"},{"caption":"丹江口市","pcode":"420300","code":"420381"},{"caption":"宜昌市","pcode":"420000","code":"420500"},{"caption":"西陵区","pcode":"420500","code":"420502"},{"caption":"伍家岗区","pcode":"420500","code":"420503"},{"caption":"点军区","pcode":"420500","code":"420504"},{"caption":"猇亭区","pcode":"420500","code":"420505"},{"caption":"夷陵区","pcode":"420500","code":"420506"},{"caption":"远安县","pcode":"420500","code":"420525"},{"caption":"兴山县","pcode":"420500","code":"420526"},{"caption":"秭归县","pcode":"420500","code":"420527"},{"caption":"长阳土家族自治县","pcode":"420500","code":"420528"},{"caption":"五峰土家族自治县","pcode":"420500","code":"420529"},{"caption":"宜都市","pcode":"420500","code":"420581"},{"caption":"当阳市","pcode":"420500","code":"420582"},{"caption":"枝江市","pcode":"420500","code":"420583"},{"caption":"襄阳市","pcode":"420000","code":"420600"},{"caption":"襄城区","pcode":"420600","code":"420602"},{"caption":"樊城区","pcode":"420600","code":"420606"},{"caption":"襄州区","pcode":"420600","code":"420607"},{"caption":"南漳县","pcode":"420600","code":"420624"},{"caption":"谷城县","pcode":"420600","code":"420625"},{"caption":"保康县","pcode":"420600","code":"420626"},{"caption":"老河口市","pcode":"420600","code":"420682"},{"caption":"枣阳市","pcode":"420600","code":"420683"},{"caption":"宜城市","pcode":"420600","code":"420684"},{"caption":"鄂州市","pcode":"420000","code":"420700"},{"caption":"梁子湖区","pcode":"420700","code":"420702"},{"caption":"华容区","pcode":"420700","code":"420703"},{"caption":"鄂城区","pcode":"420700","code":"420704"},{"caption":"荆门市","pcode":"420000","code":"420800"},{"caption":"东宝区","pcode":"420800","code":"420802"},{"caption":"掇刀区","pcode":"420800","code":"420804"},{"caption":"京山县","pcode":"420800","code":"420821"},{"caption":"沙洋县","pcode":"420800","code":"420822"},{"caption":"钟祥市","pcode":"420800","code":"420881"},{"caption":"孝感市","pcode":"420000","code":"420900"},{"caption":"孝南区","pcode":"420900","code":"420902"},{"caption":"孝昌县","pcode":"420900","code":"420921"},{"caption":"大悟县","pcode":"420900","code":"420922"},{"caption":"云梦县","pcode":"420900","code":"420923"},{"caption":"应城市","pcode":"420900","code":"420981"},{"caption":"安陆市","pcode":"420900","code":"420982"},{"caption":"汉川市","pcode":"420900","code":"420984"},{"caption":"荆州市","pcode":"420000","code":"421000"},{"caption":"沙市区","pcode":"421000","code":"421002"},{"caption":"荆州区","pcode":"421000","code":"421003"},{"caption":"公安县","pcode":"421000","code":"421022"},{"caption":"监利县","pcode":"421000","code":"421023"},{"caption":"江陵县","pcode":"421000","code":"421024"},{"caption":"石首市","pcode":"421000","code":"421081"},{"caption":"洪湖市","pcode":"421000","code":"421083"},{"caption":"松滋市","pcode":"421000","code":"421087"},{"caption":"黄冈市","pcode":"420000","code":"421100"},{"caption":"黄州区","pcode":"421100","code":"421102"},{"caption":"团风县","pcode":"421100","code":"421121"},{"caption":"红安县","pcode":"421100","code":"421122"},{"caption":"罗田县","pcode":"421100","code":"421123"},{"caption":"英山县","pcode":"421100","code":"421124"},{"caption":"浠水县","pcode":"421100","code":"421125"},{"caption":"蕲春县","pcode":"421100","code":"421126"},{"caption":"黄梅县","pcode":"421100","code":"421127"},{"caption":"麻城市","pcode":"421100","code":"421181"},{"caption":"武穴市","pcode":"421100","code":"421182"},{"caption":"咸宁市","pcode":"420000","code":"421200"},{"caption":"咸安区","pcode":"421200","code":"421202"},{"caption":"嘉鱼县","pcode":"421200","code":"421221"},{"caption":"通城县","pcode":"421200","code":"421222"},{"caption":"崇阳县","pcode":"421200","code":"421223"},{"caption":"通山县","pcode":"421200","code":"421224"},{"caption":"赤壁市","pcode":"421200","code":"421281"},{"caption":"随州市","pcode":"420000","code":"421300"},{"caption":"曾都区（新）","pcode":"421300","code":"421303"},{"caption":"随县","pcode":"421300","code":"421321"},{"caption":"广水市","pcode":"421300","code":"421381"},{"caption":"恩施土家族苗族自治州","pcode":"420000","code":"422800"},{"caption":"恩施市","pcode":"422800","code":"422801"},{"caption":"利川市","pcode":"422800","code":"422802"},{"caption":"建始县","pcode":"422800","code":"422822"},{"caption":"巴东县","pcode":"422800","code":"422823"},{"caption":"宣恩县","pcode":"422800","code":"422825"},{"caption":"咸丰县","pcode":"422800","code":"422826"},{"caption":"来凤县","pcode":"422800","code":"422827"},{"caption":"鹤峰县","pcode":"422800","code":"422828"},{"caption":"仙桃市","pcode":"420000","code":"429004"},{"caption":"潜江市","pcode":"420000","code":"429005"},{"caption":"天门市","pcode":"420000","code":"429006"},{"caption":"神农架林区","pcode":"420000","code":"429021"},{"caption":"湖南省","pcode":"null","code":"430000"},{"caption":"长沙市","pcode":"430000","code":"430100"},{"caption":"芙蓉区","pcode":"430100","code":"430102"},{"caption":"天心区","pcode":"430100","code":"430103"},{"caption":"岳麓区","pcode":"430100","code":"430104"},{"caption":"开福区","pcode":"430100","code":"430105"},{"caption":"雨花区","pcode":"430100","code":"430111"},{"caption":"望城区","pcode":"430100","code":"430112"},{"caption":"长沙县","pcode":"430100","code":"430121"},{"caption":"宁乡县","pcode":"430100","code":"430124"},{"caption":"浏阳市","pcode":"430100","code":"430181"},{"caption":"株洲市","pcode":"430000","code":"430200"},{"caption":"荷塘区","pcode":"430200","code":"430202"},{"caption":"芦淞区","pcode":"430200","code":"430203"},{"caption":"石峰区","pcode":"430200","code":"430204"},{"caption":"天元区","pcode":"430200","code":"430211"},{"caption":"株洲县","pcode":"430200","code":"430221"},{"caption":"攸县","pcode":"430200","code":"430223"},{"caption":"茶陵县","pcode":"430200","code":"430224"},{"caption":"炎陵县","pcode":"430200","code":"430225"},{"caption":"醴陵市","pcode":"430200","code":"430281"},{"caption":"湘潭市","pcode":"430000","code":"430300"},{"caption":"雨湖区","pcode":"430300","code":"430302"},{"caption":"岳塘区","pcode":"430300","code":"430304"},{"caption":"湘潭县","pcode":"430300","code":"430321"},{"caption":"湘乡市","pcode":"430300","code":"430381"},{"caption":"韶山市","pcode":"430300","code":"430382"},{"caption":"衡阳市","pcode":"430000","code":"430400"},{"caption":"珠晖区","pcode":"430400","code":"430405"},{"caption":"雁峰区","pcode":"430400","code":"430406"},{"caption":"石鼓区","pcode":"430400","code":"430407"},{"caption":"蒸湘区","pcode":"430400","code":"430408"},{"caption":"南岳区","pcode":"430400","code":"430412"},{"caption":"衡阳县","pcode":"430400","code":"430421"},{"caption":"衡南县","pcode":"430400","code":"430422"},{"caption":"衡山县","pcode":"430400","code":"430423"},{"caption":"衡东县","pcode":"430400","code":"430424"},{"caption":"祁东县","pcode":"430400","code":"430426"},{"caption":"耒阳市","pcode":"430400","code":"430481"},{"caption":"常宁市","pcode":"430400","code":"430482"},{"caption":"邵阳市","pcode":"430000","code":"430500"},{"caption":"双清区","pcode":"430500","code":"430502"},{"caption":"大祥区","pcode":"430500","code":"430503"},{"caption":"北塔区","pcode":"430500","code":"430511"},{"caption":"邵东县","pcode":"430500","code":"430521"},{"caption":"新邵县","pcode":"430500","code":"430522"},{"caption":"邵阳县","pcode":"430500","code":"430523"},{"caption":"隆回县","pcode":"430500","code":"430524"},{"caption":"洞口县","pcode":"430500","code":"430525"},{"caption":"绥宁县","pcode":"430500","code":"430527"},{"caption":"新宁县","pcode":"430500","code":"430528"},{"caption":"城步苗族自治县","pcode":"430500","code":"430529"},{"caption":"武冈市","pcode":"430500","code":"430581"},{"caption":"岳阳市","pcode":"430000","code":"430600"},{"caption":"岳阳楼区","pcode":"430600","code":"430602"},{"caption":"云溪区","pcode":"430600","code":"430603"},{"caption":"君山区","pcode":"430600","code":"430611"},{"caption":"岳阳县","pcode":"430600","code":"430621"},{"caption":"华容县","pcode":"430600","code":"430623"},{"caption":"湘阴县","pcode":"430600","code":"430624"},{"caption":"平江县","pcode":"430600","code":"430626"},{"caption":"汨罗市","pcode":"430600","code":"430681"},{"caption":"临湘市","pcode":"430600","code":"430682"},{"caption":"常德市","pcode":"430000","code":"430700"},{"caption":"武陵区","pcode":"430700","code":"430702"},{"caption":"鼎城区","pcode":"430700","code":"430703"},{"caption":"安乡县","pcode":"430700","code":"430721"},{"caption":"汉寿县","pcode":"430700","code":"430722"},{"caption":"澧县","pcode":"430700","code":"430723"},{"caption":"临澧县","pcode":"430700","code":"430724"},{"caption":"桃源县","pcode":"430700","code":"430725"},{"caption":"石门县","pcode":"430700","code":"430726"},{"caption":"津市市","pcode":"430700","code":"430781"},{"caption":"张家界市","pcode":"430000","code":"430800"},{"caption":"永定区","pcode":"430800","code":"430802"},{"caption":"武陵源区","pcode":"430800","code":"430811"},{"caption":"慈利县","pcode":"430800","code":"430821"},{"caption":"桑植县","pcode":"430800","code":"430822"},{"caption":"益阳市","pcode":"430000","code":"430900"},{"caption":"资阳区","pcode":"430900","code":"430902"},{"caption":"赫山区","pcode":"430900","code":"430903"},{"caption":"南县","pcode":"430900","code":"430921"},{"caption":"桃江县","pcode":"430900","code":"430922"},{"caption":"安化县","pcode":"430900","code":"430923"},{"caption":"沅江市","pcode":"430900","code":"430981"},{"caption":"郴州市","pcode":"430000","code":"431000"},{"caption":"北湖区","pcode":"431000","code":"431002"},{"caption":"苏仙区","pcode":"431000","code":"431003"},{"caption":"桂阳县","pcode":"431000","code":"431021"},{"caption":"宜章县","pcode":"431000","code":"431022"},{"caption":"永兴县","pcode":"431000","code":"431023"},{"caption":"嘉禾县","pcode":"431000","code":"431024"},{"caption":"临武县","pcode":"431000","code":"431025"},{"caption":"汝城县","pcode":"431000","code":"431026"},{"caption":"桂东县","pcode":"431000","code":"431027"},{"caption":"安仁县","pcode":"431000","code":"431028"},{"caption":"资兴市","pcode":"431000","code":"431081"},{"caption":"永州市","pcode":"430000","code":"431100"},{"caption":"零陵区","pcode":"431100","code":"431102"},{"caption":"冷水滩区","pcode":"431100","code":"431103"},{"caption":"祁阳县","pcode":"431100","code":"431121"},{"caption":"东安县","pcode":"431100","code":"431122"},{"caption":"双牌县","pcode":"431100","code":"431123"},{"caption":"道县","pcode":"431100","code":"431124"},{"caption":"江永县","pcode":"431100","code":"431125"},{"caption":"宁远县","pcode":"431100","code":"431126"},{"caption":"蓝山县","pcode":"431100","code":"431127"},{"caption":"新田县","pcode":"431100","code":"431128"},{"caption":"江华瑶族自治县","pcode":"431100","code":"431129"},{"caption":"怀化市","pcode":"430000","code":"431200"},{"caption":"鹤城区","pcode":"431200","code":"431202"},{"caption":"中方县","pcode":"431200","code":"431221"},{"caption":"沅陵县","pcode":"431200","code":"431222"},{"caption":"辰溪县","pcode":"431200","code":"431223"},{"caption":"溆浦县","pcode":"431200","code":"431224"},{"caption":"会同县","pcode":"431200","code":"431225"},{"caption":"麻阳苗族自治县","pcode":"431200","code":"431226"},{"caption":"新晃侗族自治县","pcode":"431200","code":"431227"},{"caption":"芷江侗族自治县","pcode":"431200","code":"431228"},{"caption":"靖州苗族侗族自治县","pcode":"431200","code":"431229"},{"caption":"通道侗族自治县","pcode":"431200","code":"431230"},{"caption":"洪江市","pcode":"431200","code":"431281"},{"caption":"娄底市","pcode":"430000","code":"431300"},{"caption":"娄星区","pcode":"431300","code":"431302"},{"caption":"双峰县","pcode":"431300","code":"431321"},{"caption":"新化县","pcode":"431300","code":"431322"},{"caption":"冷水江市","pcode":"431300","code":"431381"},{"caption":"涟源市","pcode":"431300","code":"431382"},{"caption":"湘西土家族苗族自治州","pcode":"430000","code":"433100"},{"caption":"吉首市","pcode":"433100","code":"433101"},{"caption":"泸溪县","pcode":"433100","code":"433122"},{"caption":"凤凰县","pcode":"433100","code":"433123"},{"caption":"花垣县","pcode":"433100","code":"433124"},{"caption":"保靖县","pcode":"433100","code":"433125"},{"caption":"古丈县","pcode":"433100","code":"433126"},{"caption":"永顺县","pcode":"433100","code":"433127"},{"caption":"龙山县","pcode":"433100","code":"433130"},{"caption":"广东省","pcode":"null","code":"440000"},{"caption":"广州市","pcode":"440000","code":"440100"},{"caption":"荔湾区","pcode":"440100","code":"440103"},{"caption":"越秀区","pcode":"440100","code":"440104"},{"caption":"海珠区","pcode":"440100","code":"440105"},{"caption":"天河区","pcode":"440100","code":"440106"},{"caption":"白云区","pcode":"440100","code":"440111"},{"caption":"黄埔区","pcode":"440100","code":"440112"},{"caption":"番禺区","pcode":"440100","code":"440113"},{"caption":"花都区","pcode":"440100","code":"440114"},{"caption":"南沙区","pcode":"440100","code":"440115"},{"caption":"萝岗区","pcode":"440100","code":"440116"},{"caption":"增城市","pcode":"440100","code":"440183"},{"caption":"从化市","pcode":"440100","code":"440184"},{"caption":"韶关市","pcode":"440000","code":"440200"},{"caption":"武江区","pcode":"440200","code":"440203"},{"caption":"浈江区","pcode":"440200","code":"440204"},{"caption":"曲江区","pcode":"440200","code":"440205"},{"caption":"始兴县","pcode":"440200","code":"440222"},{"caption":"仁化县","pcode":"440200","code":"440224"},{"caption":"翁源县","pcode":"440200","code":"440229"},{"caption":"乳源瑶族自治县","pcode":"440200","code":"440232"},{"caption":"新丰县","pcode":"440200","code":"440233"},{"caption":"乐昌市","pcode":"440200","code":"440281"},{"caption":"南雄市","pcode":"440200","code":"440282"},{"caption":"深圳市","pcode":"440000","code":"440300"},{"caption":"罗湖区","pcode":"440300","code":"440303"},{"caption":"福田区","pcode":"440300","code":"440304"},{"caption":"南山区","pcode":"440300","code":"440305"},{"caption":"宝安区","pcode":"440300","code":"440306"},{"caption":"龙岗区","pcode":"440300","code":"440307"},{"caption":"盐田区","pcode":"440300","code":"440308"},{"caption":"龙华区","pcode":"440300","code":"440309"},{"caption":"坪山区","pcode":"440300","code":"440310"},{"caption":"珠海市","pcode":"440000","code":"440400"},{"caption":"香洲区","pcode":"440400","code":"440402"},{"caption":"斗门区","pcode":"440400","code":"440403"},{"caption":"金湾区","pcode":"440400","code":"440404"},{"caption":"汕头市","pcode":"440000","code":"440500"},{"caption":"龙湖区","pcode":"440500","code":"440507"},{"caption":"金平区","pcode":"440500","code":"440511"},{"caption":"濠江区","pcode":"440500","code":"440512"},{"caption":"潮阳区","pcode":"440500","code":"440513"},{"caption":"潮南区","pcode":"440500","code":"440514"},{"caption":"澄海区","pcode":"440500","code":"440515"},{"caption":"南澳县","pcode":"440500","code":"440523"},{"caption":"佛山市","pcode":"440000","code":"440600"},{"caption":"禅城区","pcode":"440600","code":"440604"},{"caption":"南海区","pcode":"440600","code":"440605"},{"caption":"顺德区","pcode":"440600","code":"440606"},{"caption":"三水区","pcode":"440600","code":"440607"},{"caption":"高明区","pcode":"440600","code":"440608"},{"caption":"江门市","pcode":"440000","code":"440700"},{"caption":"蓬江区","pcode":"440700","code":"440703"},{"caption":"江海区","pcode":"440700","code":"440704"},{"caption":"新会区","pcode":"440700","code":"440705"},{"caption":"台山市","pcode":"440700","code":"440781"},{"caption":"开平市","pcode":"440700","code":"440783"},{"caption":"鹤山市","pcode":"440700","code":"440784"},{"caption":"恩平市","pcode":"440700","code":"440785"},{"caption":"湛江市","pcode":"440000","code":"440800"},{"caption":"赤坎区","pcode":"440800","code":"440802"},{"caption":"霞山区","pcode":"440800","code":"440803"},{"caption":"坡头区","pcode":"440800","code":"440804"},{"caption":"麻章区","pcode":"440800","code":"440811"},{"caption":"遂溪县","pcode":"440800","code":"440823"},{"caption":"徐闻县","pcode":"440800","code":"440825"},{"caption":"廉江市","pcode":"440800","code":"440881"},{"caption":"雷州市","pcode":"440800","code":"440882"},{"caption":"吴川市","pcode":"440800","code":"440883"},{"caption":"茂名市","pcode":"440000","code":"440900"},{"caption":"茂南区","pcode":"440900","code":"440902"},{"caption":"电白区","pcode":"440900","code":"440904"},{"caption":"高州市","pcode":"440900","code":"440981"},{"caption":"化州市","pcode":"440900","code":"440982"},{"caption":"信宜市","pcode":"440900","code":"440983"},{"caption":"肇庆市","pcode":"440000","code":"441200"},{"caption":"端州区","pcode":"441200","code":"441202"},{"caption":"鼎湖区","pcode":"441200","code":"441203"},{"caption":"广宁县","pcode":"441200","code":"441223"},{"caption":"怀集县","pcode":"441200","code":"441224"},{"caption":"封开县","pcode":"441200","code":"441225"},{"caption":"德庆县","pcode":"441200","code":"441226"},{"caption":"高要市","pcode":"441200","code":"441283"},{"caption":"四会市","pcode":"441200","code":"441284"},{"caption":"惠州市","pcode":"440000","code":"441300"},{"caption":"惠城区","pcode":"441300","code":"441302"},{"caption":"惠阳区","pcode":"441300","code":"441303"},{"caption":"博罗县","pcode":"441300","code":"441322"},{"caption":"惠东县","pcode":"441300","code":"441323"},{"caption":"龙门县","pcode":"441300","code":"441324"},{"caption":"梅州市","pcode":"440000","code":"441400"},{"caption":"梅江区","pcode":"441400","code":"441402"},{"caption":"梅县区","pcode":"441400","code":"441403"},{"caption":"大埔县","pcode":"441400","code":"441422"},{"caption":"丰顺县","pcode":"441400","code":"441423"},{"caption":"五华县","pcode":"441400","code":"441424"},{"caption":"平远县","pcode":"441400","code":"441426"},{"caption":"蕉岭县","pcode":"441400","code":"441427"},{"caption":"兴宁市","pcode":"441400","code":"441481"},{"caption":"汕尾市","pcode":"440000","code":"441500"},{"caption":"城区","pcode":"441500","code":"441502"},{"caption":"海丰县","pcode":"441500","code":"441521"},{"caption":"陆河县","pcode":"441500","code":"441523"},{"caption":"陆丰市","pcode":"441500","code":"441581"},{"caption":"河源市","pcode":"440000","code":"441600"},{"caption":"源城区","pcode":"441600","code":"441602"},{"caption":"紫金县","pcode":"441600","code":"441621"},{"caption":"龙川县","pcode":"441600","code":"441622"},{"caption":"连平县","pcode":"441600","code":"441623"},{"caption":"和平县","pcode":"441600","code":"441624"},{"caption":"东源县","pcode":"441600","code":"441625"},{"caption":"阳江市","pcode":"440000","code":"441700"},{"caption":"江城区","pcode":"441700","code":"441702"},{"caption":"阳西县","pcode":"441700","code":"441721"},{"caption":"阳东县","pcode":"441700","code":"441723"},{"caption":"阳春市","pcode":"441700","code":"441781"},{"caption":"清远市","pcode":"440000","code":"441800"},{"caption":"清城区","pcode":"441800","code":"441802"},{"caption":"清新区","pcode":"441800","code":"441803"},{"caption":"佛冈县","pcode":"441800","code":"441821"},{"caption":"阳山县","pcode":"441800","code":"441823"},{"caption":"连山壮族瑶族自治县","pcode":"441800","code":"441825"},{"caption":"连南瑶族自治县","pcode":"441800","code":"441826"},{"caption":"英德市","pcode":"441800","code":"441881"},{"caption":"连州市","pcode":"441800","code":"441882"},{"caption":"东莞市","pcode":"440000","code":"441900"},{"caption":"中堂镇","pcode":"441900","code":"441901"},{"caption":"望牛墩镇","pcode":"441900","code":"441902"},{"caption":"麻涌镇","pcode":"441900","code":"441903"},{"caption":"高埗镇","pcode":"441900","code":"441904"},{"caption":"石碣镇","pcode":"441900","code":"441905"},{"caption":"道窖镇","pcode":"441900","code":"441906"},{"caption":"洪梅镇","pcode":"441900","code":"441907"},{"caption":"厚街镇","pcode":"441900","code":"441908"},{"caption":"沙田镇","pcode":"441900","code":"441909"},{"caption":"松山湖","pcode":"441900","code":"441910"},{"caption":"长安镇","pcode":"441900","code":"441911"},{"caption":"寮步镇","pcode":"441900","code":"441912"},{"caption":"大岭山镇","pcode":"441900","code":"441913"},{"caption":"大朗镇","pcode":"441900","code":"441914"},{"caption":"黄江镇","pcode":"441900","code":"441915"},{"caption":"樟木头镇","pcode":"441900","code":"441916"},{"caption":"清溪镇","pcode":"441900","code":"441917"},{"caption":"塘厦镇","pcode":"441900","code":"441918"},{"caption":"凤岗镇","pcode":"441900","code":"441919"},{"caption":"谢岗镇","pcode":"441900","code":"441920"},{"caption":"常平镇","pcode":"441900","code":"441921"},{"caption":"桥头镇","pcode":"441900","code":"441922"},{"caption":"横沥镇","pcode":"441900","code":"441923"},{"caption":"东坑镇","pcode":"441900","code":"441924"},{"caption":"企石镇","pcode":"441900","code":"441925"},{"caption":"石排镇","pcode":"441900","code":"441926"},{"caption":"茶山镇","pcode":"441900","code":"441927"},{"caption":"南城区","pcode":"441900","code":"441928"},{"caption":"万江区","pcode":"441900","code":"441929"},{"caption":"东城区","pcode":"441900","code":"441930"},{"caption":"莞城区","pcode":"441900","code":"441931"},{"caption":"石龙镇","pcode":"441900","code":"441932"},{"caption":"虎门镇","pcode":"441900","code":"441933"},{"caption":"中山市","pcode":"440000","code":"442000"},{"caption":"潮州市","pcode":"440000","code":"445100"},{"caption":"湘桥区","pcode":"445100","code":"445102"},{"caption":"潮安区","pcode":"445100","code":"445103"},{"caption":"饶平县","pcode":"445100","code":"445122"},{"caption":"揭阳市","pcode":"440000","code":"445200"},{"caption":"榕城区","pcode":"445200","code":"445202"},{"caption":"揭东区","pcode":"445200","code":"445203"},{"caption":"揭西县","pcode":"445200","code":"445222"},{"caption":"惠来县","pcode":"445200","code":"445224"},{"caption":"普宁市","pcode":"445200","code":"445281"},{"caption":"云浮市","pcode":"440000","code":"445300"},{"caption":"云城区","pcode":"445300","code":"445302"},{"caption":"云安区","pcode":"445300","code":"445303"},{"caption":"新兴县","pcode":"445300","code":"445321"},{"caption":"郁南县","pcode":"445300","code":"445322"},{"caption":"罗定市","pcode":"445300","code":"445381"},{"caption":"广西壮族自治区","pcode":"null","code":"450000"},{"caption":"南宁市","pcode":"450000","code":"450100"},{"caption":"兴宁区","pcode":"450100","code":"450102"},{"caption":"青秀区","pcode":"450100","code":"450103"},{"caption":"江南区","pcode":"450100","code":"450105"},{"caption":"西乡塘区","pcode":"450100","code":"450107"},{"caption":"良庆区","pcode":"450100","code":"450108"},{"caption":"邕宁区","pcode":"450100","code":"450109"},{"caption":"武鸣区","pcode":"450100","code":"450110"},{"caption":"隆安县","pcode":"450100","code":"450123"},{"caption":"马山县","pcode":"450100","code":"450124"},{"caption":"上林县","pcode":"450100","code":"450125"},{"caption":"宾阳县","pcode":"450100","code":"450126"},{"caption":"横县","pcode":"450100","code":"450127"},{"caption":"柳州市","pcode":"450000","code":"450200"},{"caption":"城中区","pcode":"450200","code":"450202"},{"caption":"鱼峰区","pcode":"450200","code":"450203"},{"caption":"柳南区","pcode":"450200","code":"450204"},{"caption":"柳北区","pcode":"450200","code":"450205"},{"caption":"柳江县","pcode":"450200","code":"450221"},{"caption":"柳城县","pcode":"450200","code":"450222"},{"caption":"鹿寨县","pcode":"450200","code":"450223"},{"caption":"融安县","pcode":"450200","code":"450224"},{"caption":"融水苗族自治县","pcode":"450200","code":"450225"},{"caption":"三江侗族自治县","pcode":"450200","code":"450226"},{"caption":"桂林市","pcode":"450000","code":"450300"},{"caption":"秀峰区","pcode":"450300","code":"450302"},{"caption":"叠彩区","pcode":"450300","code":"450303"},{"caption":"象山区","pcode":"450300","code":"450304"},{"caption":"七星区","pcode":"450300","code":"450305"},{"caption":"雁山区","pcode":"450300","code":"450311"},{"caption":"临桂区","pcode":"450300","code":"450312"},{"caption":"阳朔县","pcode":"450300","code":"450321"},{"caption":"灵川县","pcode":"450300","code":"450323"},{"caption":"全州县","pcode":"450300","code":"450324"},{"caption":"兴安县","pcode":"450300","code":"450325"},{"caption":"永福县","pcode":"450300","code":"450326"},{"caption":"灌阳县","pcode":"450300","code":"450327"},{"caption":"龙胜各族自治县","pcode":"450300","code":"450328"},{"caption":"资源县","pcode":"450300","code":"450329"},{"caption":"平乐县","pcode":"450300","code":"450330"},{"caption":"荔浦县","pcode":"450300","code":"450331"},{"caption":"恭城瑶族自治县","pcode":"450300","code":"450332"},{"caption":"梧州市","pcode":"450000","code":"450400"},{"caption":"万秀区","pcode":"450400","code":"450403"},{"caption":"长洲区","pcode":"450400","code":"450405"},{"caption":"龙圩区","pcode":"450400","code":"450406"},{"caption":"苍梧县","pcode":"450400","code":"450421"},{"caption":"藤县","pcode":"450400","code":"450422"},{"caption":"蒙山县","pcode":"450400","code":"450423"},{"caption":"岑溪市","pcode":"450400","code":"450481"},{"caption":"北海市","pcode":"450000","code":"450500"},{"caption":"海城区","pcode":"450500","code":"450502"},{"caption":"银海区","pcode":"450500","code":"450503"},{"caption":"铁山港区","pcode":"450500","code":"450512"},{"caption":"合浦县","pcode":"450500","code":"450521"},{"caption":"防城港市","pcode":"450000","code":"450600"},{"caption":"港口区","pcode":"450600","code":"450602"},{"caption":"防城区","pcode":"450600","code":"450603"},{"caption":"上思县","pcode":"450600","code":"450621"},{"caption":"东兴市","pcode":"450600","code":"450681"},{"caption":"钦州市","pcode":"450000","code":"450700"},{"caption":"钦南区","pcode":"450700","code":"450702"},{"caption":"钦北区","pcode":"450700","code":"450703"},{"caption":"灵山县","pcode":"450700","code":"450721"},{"caption":"浦北县","pcode":"450700","code":"450722"},{"caption":"贵港市","pcode":"450000","code":"450800"},{"caption":"港北区","pcode":"450800","code":"450802"},{"caption":"港南区","pcode":"450800","code":"450803"},{"caption":"覃塘区","pcode":"450800","code":"450804"},{"caption":"平南县","pcode":"450800","code":"450821"},{"caption":"桂平市","pcode":"450800","code":"450881"},{"caption":"玉林市","pcode":"450000","code":"450900"},{"caption":"玉州区","pcode":"450900","code":"450902"},{"caption":"福绵区","pcode":"450900","code":"450903"},{"caption":"容县","pcode":"450900","code":"450921"},{"caption":"陆川县","pcode":"450900","code":"450922"},{"caption":"博白县","pcode":"450900","code":"450923"},{"caption":"兴业县","pcode":"450900","code":"450924"},{"caption":"北流市","pcode":"450900","code":"450981"},{"caption":"百色市","pcode":"450000","code":"451000"},{"caption":"右江区","pcode":"451000","code":"451002"},{"caption":"田阳县","pcode":"451000","code":"451021"},{"caption":"田东县","pcode":"451000","code":"451022"},{"caption":"平果县","pcode":"451000","code":"451023"},{"caption":"德保县","pcode":"451000","code":"451024"},{"caption":"靖西市","pcode":"451000","code":"451025"},{"caption":"那坡县","pcode":"451000","code":"451026"},{"caption":"凌云县","pcode":"451000","code":"451027"},{"caption":"乐业县","pcode":"451000","code":"451028"},{"caption":"田林县","pcode":"451000","code":"451029"},{"caption":"西林县","pcode":"451000","code":"451030"},{"caption":"隆林各族自治县","pcode":"451000","code":"451031"},{"caption":"贺州市","pcode":"450000","code":"451100"},{"caption":"八步区","pcode":"451100","code":"451102"},{"caption":"平桂区","pcode":"451100","code":"451103"},{"caption":"昭平县","pcode":"451100","code":"451121"},{"caption":"钟山县","pcode":"451100","code":"451122"},{"caption":"富川瑶族自治县","pcode":"451100","code":"451123"},{"caption":"河池市","pcode":"450000","code":"451200"},{"caption":"金城江区","pcode":"451200","code":"451202"},{"caption":"南丹县","pcode":"451200","code":"451221"},{"caption":"天峨县","pcode":"451200","code":"451222"},{"caption":"凤山县","pcode":"451200","code":"451223"},{"caption":"东兰县","pcode":"451200","code":"451224"},{"caption":"罗城仫佬族自治县","pcode":"451200","code":"451225"},{"caption":"环江毛南族自治县","pcode":"451200","code":"451226"},{"caption":"巴马瑶族自治县","pcode":"451200","code":"451227"},{"caption":"都安瑶族自治县","pcode":"451200","code":"451228"},{"caption":"大化瑶族自治县","pcode":"451200","code":"451229"},{"caption":"宜州市","pcode":"451200","code":"451281"},{"caption":"来宾市","pcode":"450000","code":"451300"},{"caption":"兴宾区","pcode":"451300","code":"451302"},{"caption":"忻城县","pcode":"451300","code":"451321"},{"caption":"象州县","pcode":"451300","code":"451322"},{"caption":"武宣县","pcode":"451300","code":"451323"},{"caption":"金秀瑶族自治县","pcode":"451300","code":"451324"},{"caption":"合山市","pcode":"451300","code":"451381"},{"caption":"崇左市","pcode":"450000","code":"451400"},{"caption":"江州区","pcode":"451400","code":"451402"},{"caption":"扶绥县","pcode":"451400","code":"451421"},{"caption":"宁明县","pcode":"451400","code":"451422"},{"caption":"龙州县","pcode":"451400","code":"451423"},{"caption":"大新县","pcode":"451400","code":"451424"},{"caption":"天等县","pcode":"451400","code":"451425"},{"caption":"凭祥市","pcode":"451400","code":"451481"},{"caption":"海南省","pcode":"null","code":"460000"},{"caption":"海口市","pcode":"460000","code":"460100"},{"caption":"秀英区","pcode":"460100","code":"460105"},{"caption":"龙华区","pcode":"460100","code":"460106"},{"caption":"琼山区","pcode":"460100","code":"460107"},{"caption":"美兰区","pcode":"460100","code":"460108"},{"caption":"三亚市","pcode":"460000","code":"460200"},{"caption":"三沙市","pcode":"460000","code":"460300"},{"caption":"西沙群岛","pcode":"460300","code":"460321"},{"caption":"南沙群岛","pcode":"460300","code":"460322"},{"caption":"中沙群岛的岛礁及其海域","pcode":"460300","code":"460323"},{"caption":"五指山市","pcode":"460000","code":"469001"},{"caption":"琼海市","pcode":"460000","code":"469002"},{"caption":"儋州市","pcode":"460000","code":"469003"},{"caption":"文昌市","pcode":"460000","code":"469005"},{"caption":"万宁市","pcode":"460000","code":"469006"},{"caption":"东方市","pcode":"460000","code":"469007"},{"caption":"定安县","pcode":"460000","code":"469021"},{"caption":"屯昌县","pcode":"460000","code":"469022"},{"caption":"澄迈县","pcode":"460000","code":"469023"},{"caption":"临高县","pcode":"460000","code":"469024"},{"caption":"白沙黎族自治县","pcode":"460000","code":"469025"},{"caption":"昌江黎族自治县","pcode":"460000","code":"469026"},{"caption":"乐东黎族自治县","pcode":"460000","code":"469027"},{"caption":"陵水黎族自治县","pcode":"460000","code":"469028"},{"caption":"保亭黎族苗族自治县","pcode":"460000","code":"469029"},{"caption":"琼中黎族苗族自治县","pcode":"460000","code":"469030"},{"caption":"重庆市","pcode":"null","code":"500000"},{"caption":"四川省","pcode":"null","code":"510000"},{"caption":"成都市","pcode":"510000","code":"510100"},{"caption":"锦江区","pcode":"510100","code":"510104"},{"caption":"青羊区","pcode":"510100","code":"510105"},{"caption":"金牛区","pcode":"510100","code":"510106"},{"caption":"武侯区","pcode":"510100","code":"510107"},{"caption":"成华区","pcode":"510100","code":"510108"},{"caption":"龙泉驿区","pcode":"510100","code":"510112"},{"caption":"青白江区","pcode":"510100","code":"510113"},{"caption":"新都区","pcode":"510100","code":"510114"},{"caption":"温江区","pcode":"510100","code":"510115"},{"caption":"双流区","pcode":"510100","code":"510116"},{"caption":"郫都区","pcode":"510100","code":"510117"},{"caption":"金堂县","pcode":"510100","code":"510121"},{"caption":"大邑县","pcode":"510100","code":"510129"},{"caption":"蒲江县","pcode":"510100","code":"510131"},{"caption":"新津县","pcode":"510100","code":"510132"},{"caption":"都江堰市","pcode":"510100","code":"510181"},{"caption":"彭州市","pcode":"510100","code":"510182"},{"caption":"邛崃市","pcode":"510100","code":"510183"},{"caption":"崇州市","pcode":"510100","code":"510184"},{"caption":"简阳市","pcode":"510100","code":"510185"},{"caption":"自贡市","pcode":"510000","code":"510300"},{"caption":"自流井区","pcode":"510300","code":"510302"},{"caption":"贡井区","pcode":"510300","code":"510303"},{"caption":"大安区","pcode":"510300","code":"510304"},{"caption":"沿滩区","pcode":"510300","code":"510311"},{"caption":"荣县","pcode":"510300","code":"510321"},{"caption":"富顺县","pcode":"510300","code":"510322"},{"caption":"攀枝花市","pcode":"510000","code":"510400"},{"caption":"东区","pcode":"510400","code":"510402"},{"caption":"西区","pcode":"510400","code":"510403"},{"caption":"仁和区","pcode":"510400","code":"510411"},{"caption":"米易县","pcode":"510400","code":"510421"},{"caption":"盐边县","pcode":"510400","code":"510422"},{"caption":"泸州市","pcode":"510000","code":"510500"},{"caption":"江阳区","pcode":"510500","code":"510502"},{"caption":"纳溪区","pcode":"510500","code":"510503"},{"caption":"龙马潭区","pcode":"510500","code":"510504"},{"caption":"泸县","pcode":"510500","code":"510521"},{"caption":"合江县","pcode":"510500","code":"510522"},{"caption":"叙永县","pcode":"510500","code":"510524"},{"caption":"古蔺县","pcode":"510500","code":"510525"},{"caption":"德阳市","pcode":"510000","code":"510600"},{"caption":"旌阳区","pcode":"510600","code":"510603"},{"caption":"中江县","pcode":"510600","code":"510623"},{"caption":"罗江县","pcode":"510600","code":"510626"},{"caption":"广汉市","pcode":"510600","code":"510681"},{"caption":"什邡市","pcode":"510600","code":"510682"},{"caption":"绵竹市","pcode":"510600","code":"510683"},{"caption":"绵阳市","pcode":"510000","code":"510700"},{"caption":"涪城区","pcode":"510700","code":"510703"},{"caption":"游仙区","pcode":"510700","code":"510704"},{"caption":"安州区","pcode":"510700","code":"510705"},{"caption":"三台县","pcode":"510700","code":"510722"},{"caption":"盐亭县","pcode":"510700","code":"510723"},{"caption":"梓潼县","pcode":"510700","code":"510725"},{"caption":"北川羌族自治县","pcode":"510700","code":"510726"},{"caption":"平武县","pcode":"510700","code":"510727"},{"caption":"江油市","pcode":"510700","code":"510781"},{"caption":"广元市","pcode":"510000","code":"510800"},{"caption":"利州区","pcode":"510800","code":"510802"},{"caption":"昭化区","pcode":"510800","code":"510811"},{"caption":"朝天区","pcode":"510800","code":"510812"},{"caption":"旺苍县","pcode":"510800","code":"510821"},{"caption":"青川县","pcode":"510800","code":"510822"},{"caption":"剑阁县","pcode":"510800","code":"510823"},{"caption":"苍溪县","pcode":"510800","code":"510824"},{"caption":"遂宁市","pcode":"510000","code":"510900"},{"caption":"船山区","pcode":"510900","code":"510903"},{"caption":"安居区","pcode":"510900","code":"510904"},{"caption":"蓬溪县","pcode":"510900","code":"510921"},{"caption":"射洪县","pcode":"510900","code":"510922"},{"caption":"大英县","pcode":"510900","code":"510923"},{"caption":"内江市","pcode":"510000","code":"511000"},{"caption":"市中区","pcode":"511000","code":"511002"},{"caption":"东兴区","pcode":"511000","code":"511011"},{"caption":"威远县","pcode":"511000","code":"511024"},{"caption":"资中县","pcode":"511000","code":"511025"},{"caption":"隆昌县","pcode":"511000","code":"511028"},{"caption":"乐山市","pcode":"510000","code":"511100"},{"caption":"市中区","pcode":"511100","code":"511102"},{"caption":"沙湾区","pcode":"511100","code":"511111"},{"caption":"五通桥区","pcode":"511100","code":"511112"},{"caption":"金口河区","pcode":"511100","code":"511113"},{"caption":"犍为县","pcode":"511100","code":"511123"},{"caption":"井研县","pcode":"511100","code":"511124"},{"caption":"夹江县","pcode":"511100","code":"511126"},{"caption":"沐川县","pcode":"511100","code":"511129"},{"caption":"峨边彝族自治县","pcode":"511100","code":"511132"},{"caption":"马边彝族自治县","pcode":"511100","code":"511133"},{"caption":"峨眉山市","pcode":"511100","code":"511181"},{"caption":"南充市","pcode":"510000","code":"511300"},{"caption":"顺庆区","pcode":"511300","code":"511302"},{"caption":"高坪区","pcode":"511300","code":"511303"},{"caption":"嘉陵区","pcode":"511300","code":"511304"},{"caption":"南部县","pcode":"511300","code":"511321"},{"caption":"营山县","pcode":"511300","code":"511322"},{"caption":"蓬安县","pcode":"511300","code":"511323"},{"caption":"仪陇县","pcode":"511300","code":"511324"},{"caption":"西充县","pcode":"511300","code":"511325"},{"caption":"阆中市","pcode":"511300","code":"511381"},{"caption":"眉山市","pcode":"510000","code":"511400"},{"caption":"东坡区","pcode":"511400","code":"511402"},{"caption":"彭山区","pcode":"511400","code":"511403"},{"caption":"仁寿县","pcode":"511400","code":"511421"},{"caption":"洪雅县","pcode":"511400","code":"511423"},{"caption":"丹棱县","pcode":"511400","code":"511424"},{"caption":"青神县","pcode":"511400","code":"511425"},{"caption":"宜宾市","pcode":"510000","code":"511500"},{"caption":"翠屏区","pcode":"511500","code":"511502"},{"caption":"南溪区","pcode":"511500","code":"511503"},{"caption":"宜宾县","pcode":"511500","code":"511521"},{"caption":"江安县","pcode":"511500","code":"511523"},{"caption":"长宁县","pcode":"511500","code":"511524"},{"caption":"高县","pcode":"511500","code":"511525"},{"caption":"珙县","pcode":"511500","code":"511526"},{"caption":"筠连县","pcode":"511500","code":"511527"},{"caption":"兴文县","pcode":"511500","code":"511528"},{"caption":"屏山县","pcode":"511500","code":"511529"},{"caption":"广安市","pcode":"510000","code":"511600"},{"caption":"广安区","pcode":"511600","code":"511602"},{"caption":"前锋区","pcode":"511600","code":"511603"},{"caption":"岳池县","pcode":"511600","code":"511621"},{"caption":"武胜县","pcode":"511600","code":"511622"},{"caption":"邻水县","pcode":"511600","code":"511623"},{"caption":"华蓥市","pcode":"511600","code":"511681"},{"caption":"达州市","pcode":"510000","code":"511700"},{"caption":"通川区","pcode":"511700","code":"511702"},{"caption":"达川区","pcode":"511700","code":"511703"},{"caption":"宣汉县","pcode":"511700","code":"511722"},{"caption":"开江县","pcode":"511700","code":"511723"},{"caption":"大竹县","pcode":"511700","code":"511724"},{"caption":"渠县","pcode":"511700","code":"511725"},{"caption":"万源市","pcode":"511700","code":"511781"},{"caption":"雅安市","pcode":"510000","code":"511800"},{"caption":"雨城区","pcode":"511800","code":"511802"},{"caption":"名山区","pcode":"511800","code":"511803"},{"caption":"荥经县","pcode":"511800","code":"511822"},{"caption":"汉源县","pcode":"511800","code":"511823"},{"caption":"石棉县","pcode":"511800","code":"511824"},{"caption":"天全县","pcode":"511800","code":"511825"},{"caption":"芦山县","pcode":"511800","code":"511826"},{"caption":"宝兴县","pcode":"511800","code":"511827"},{"caption":"巴中市","pcode":"510000","code":"511900"},{"caption":"巴州区","pcode":"511900","code":"511902"},{"caption":"恩阳区","pcode":"511900","code":"511903"},{"caption":"通江县","pcode":"511900","code":"511921"},{"caption":"南江县","pcode":"511900","code":"511922"},{"caption":"平昌县","pcode":"511900","code":"511923"},{"caption":"资阳市","pcode":"510000","code":"512000"},{"caption":"雁江区","pcode":"512000","code":"512002"},{"caption":"安岳县","pcode":"512000","code":"512021"},{"caption":"乐至县","pcode":"512000","code":"512022"},{"caption":"阿坝藏族羌族自治州","pcode":"510000","code":"513200"},{"caption":"马尔康市","pcode":"513200","code":"513201"},{"caption":"汶川县","pcode":"513200","code":"513221"},{"caption":"理县","pcode":"513200","code":"513222"},{"caption":"茂县","pcode":"513200","code":"513223"},{"caption":"松潘县","pcode":"513200","code":"513224"},{"caption":"九寨沟县","pcode":"513200","code":"513225"},{"caption":"金川县","pcode":"513200","code":"513226"},{"caption":"小金县","pcode":"513200","code":"513227"},{"caption":"黑水县","pcode":"513200","code":"513228"},{"caption":"马尔康县","pcode":"513200","code":"513229"},{"caption":"壤塘县","pcode":"513200","code":"513230"},{"caption":"阿坝县","pcode":"513200","code":"513231"},{"caption":"若尔盖县","pcode":"513200","code":"513232"},{"caption":"红原县","pcode":"513200","code":"513233"},{"caption":"甘孜藏族自治州","pcode":"510000","code":"513300"},{"caption":"康定市","pcode":"513300","code":"513301"},{"caption":"泸定县","pcode":"513300","code":"513322"},{"caption":"丹巴县","pcode":"513300","code":"513323"},{"caption":"九龙县","pcode":"513300","code":"513324"},{"caption":"雅江县","pcode":"513300","code":"513325"},{"caption":"道孚县","pcode":"513300","code":"513326"},{"caption":"炉霍县","pcode":"513300","code":"513327"},{"caption":"甘孜县","pcode":"513300","code":"513328"},{"caption":"新龙县","pcode":"513300","code":"513329"},{"caption":"德格县","pcode":"513300","code":"513330"},{"caption":"白玉县","pcode":"513300","code":"513331"},{"caption":"石渠县","pcode":"513300","code":"513332"},{"caption":"色达县","pcode":"513300","code":"513333"},{"caption":"理塘县","pcode":"513300","code":"513334"},{"caption":"巴塘县","pcode":"513300","code":"513335"},{"caption":"乡城县","pcode":"513300","code":"513336"},{"caption":"稻城县","pcode":"513300","code":"513337"},{"caption":"得荣县","pcode":"513300","code":"513338"},{"caption":"凉山彝族自治州","pcode":"510000","code":"513400"},{"caption":"西昌市","pcode":"513400","code":"513401"},{"caption":"木里藏族自治县","pcode":"513400","code":"513422"},{"caption":"盐源县","pcode":"513400","code":"513423"},{"caption":"德昌县","pcode":"513400","code":"513424"},{"caption":"会理县","pcode":"513400","code":"513425"},{"caption":"会东县","pcode":"513400","code":"513426"},{"caption":"宁南县","pcode":"513400","code":"513427"},{"caption":"普格县","pcode":"513400","code":"513428"},{"caption":"布拖县","pcode":"513400","code":"513429"},{"caption":"金阳县","pcode":"513400","code":"513430"},{"caption":"昭觉县","pcode":"513400","code":"513431"},{"caption":"喜德县","pcode":"513400","code":"513432"},{"caption":"冕宁县","pcode":"513400","code":"513433"},{"caption":"越西县","pcode":"513400","code":"513434"},{"caption":"甘洛县","pcode":"513400","code":"513435"},{"caption":"美姑县","pcode":"513400","code":"513436"},{"caption":"雷波县","pcode":"513400","code":"513437"},{"caption":"贵州省","pcode":"null","code":"520000"},{"caption":"贵阳市","pcode":"520000","code":"520100"},{"caption":"南明区","pcode":"520100","code":"520102"},{"caption":"云岩区","pcode":"520100","code":"520103"},{"caption":"花溪区","pcode":"520100","code":"520111"},{"caption":"乌当区","pcode":"520100","code":"520112"},{"caption":"白云区","pcode":"520100","code":"520113"},{"caption":"观山湖区","pcode":"520100","code":"520115"},{"caption":"开阳县","pcode":"520100","code":"520121"},{"caption":"息烽县","pcode":"520100","code":"520122"},{"caption":"修文县","pcode":"520100","code":"520123"},{"caption":"清镇市","pcode":"520100","code":"520181"},{"caption":"六盘水市","pcode":"520000","code":"520200"},{"caption":"钟山区","pcode":"520200","code":"520201"},{"caption":"六枝特区","pcode":"520200","code":"520203"},{"caption":"水城县","pcode":"520200","code":"520221"},{"caption":"盘县","pcode":"520200","code":"520222"},{"caption":"遵义市","pcode":"520000","code":"520300"},{"caption":"红花岗区","pcode":"520300","code":"520302"},{"caption":"汇川区","pcode":"520300","code":"520303"},{"caption":"遵义县","pcode":"520300","code":"520321"},{"caption":"桐梓县","pcode":"520300","code":"520322"},{"caption":"绥阳县","pcode":"520300","code":"520323"},{"caption":"正安县","pcode":"520300","code":"520324"},{"caption":"道真仡佬族苗族自治县","pcode":"520300","code":"520325"},{"caption":"务川仡佬族苗族自治县","pcode":"520300","code":"520326"},{"caption":"凤冈县","pcode":"520300","code":"520327"},{"caption":"湄潭县","pcode":"520300","code":"520328"},{"caption":"余庆县","pcode":"520300","code":"520329"},{"caption":"习水县","pcode":"520300","code":"520330"},{"caption":"赤水市","pcode":"520300","code":"520381"},{"caption":"仁怀市","pcode":"520300","code":"520382"},{"caption":"安顺市","pcode":"520000","code":"520400"},{"caption":"西秀区","pcode":"520400","code":"520402"},{"caption":"平坝区","pcode":"520400","code":"520421"},{"caption":"普定县","pcode":"520400","code":"520422"},{"caption":"镇宁布依族苗族自治县","pcode":"520400","code":"520423"},{"caption":"关岭布依族苗族自治县","pcode":"520400","code":"520424"},{"caption":"紫云苗族布依族自治县","pcode":"520400","code":"520425"},{"caption":"毕节市","pcode":"520000","code":"520500"},{"caption":"七星关区","pcode":"520500","code":"520502"},{"caption":"大方县","pcode":"520500","code":"520521"},{"caption":"黔西县","pcode":"520500","code":"520522"},{"caption":"金沙县","pcode":"520500","code":"520523"},{"caption":"织金县","pcode":"520500","code":"520524"},{"caption":"纳雍县","pcode":"520500","code":"520525"},{"caption":"威宁彝族回族苗族自治县","pcode":"520500","code":"520526"},{"caption":"赫章县","pcode":"520500","code":"520527"},{"caption":"铜仁市","pcode":"520000","code":"520600"},{"caption":"碧江区","pcode":"520600","code":"520602"},{"caption":"万山区","pcode":"520600","code":"520603"},{"caption":"江口县","pcode":"520600","code":"520621"},{"caption":"玉屏侗族自治县","pcode":"520600","code":"520622"},{"caption":"石阡县","pcode":"520600","code":"520623"},{"caption":"思南县","pcode":"520600","code":"520624"},{"caption":"印江土家族苗族自治县","pcode":"520600","code":"520625"},{"caption":"德江县","pcode":"520600","code":"520626"},{"caption":"沿河土家族自治县","pcode":"520600","code":"520627"},{"caption":"松桃苗族自治县","pcode":"520600","code":"520628"},{"caption":"黔西南布依族苗族自治州","pcode":"520000","code":"522300"},{"caption":"兴义市","pcode":"522300","code":"522301"},{"caption":"兴仁县","pcode":"522300","code":"522322"},{"caption":"普安县","pcode":"522300","code":"522323"},{"caption":"晴隆县","pcode":"522300","code":"522324"},{"caption":"贞丰县","pcode":"522300","code":"522325"},{"caption":"望谟县","pcode":"522300","code":"522326"},{"caption":"册亨县","pcode":"522300","code":"522327"},{"caption":"安龙县","pcode":"522300","code":"522328"},{"caption":"黔东南苗族侗族自治州","pcode":"520000","code":"522600"},{"caption":"凯里市","pcode":"522600","code":"522601"},{"caption":"黄平县","pcode":"522600","code":"522622"},{"caption":"施秉县","pcode":"522600","code":"522623"},{"caption":"三穗县","pcode":"522600","code":"522624"},{"caption":"镇远县","pcode":"522600","code":"522625"},{"caption":"岑巩县","pcode":"522600","code":"522626"},{"caption":"天柱县","pcode":"522600","code":"522627"},{"caption":"锦屏县","pcode":"522600","code":"522628"},{"caption":"剑河县","pcode":"522600","code":"522629"},{"caption":"台江县","pcode":"522600","code":"522630"},{"caption":"黎平县","pcode":"522600","code":"522631"},{"caption":"榕江县","pcode":"522600","code":"522632"},{"caption":"从江县","pcode":"522600","code":"522633"},{"caption":"雷山县","pcode":"522600","code":"522634"},{"caption":"麻江县","pcode":"522600","code":"522635"},{"caption":"丹寨县","pcode":"522600","code":"522636"},{"caption":"黔南布依族苗族自治州","pcode":"520000","code":"522700"},{"caption":"都匀市","pcode":"522700","code":"522701"},{"caption":"福泉市","pcode":"522700","code":"522702"},{"caption":"荔波县","pcode":"522700","code":"522722"},{"caption":"贵定县","pcode":"522700","code":"522723"},{"caption":"瓮安县","pcode":"522700","code":"522725"},{"caption":"独山县","pcode":"522700","code":"522726"},{"caption":"平塘县","pcode":"522700","code":"522727"},{"caption":"罗甸县","pcode":"522700","code":"522728"},{"caption":"长顺县","pcode":"522700","code":"522729"},{"caption":"龙里县","pcode":"522700","code":"522730"},{"caption":"惠水县","pcode":"522700","code":"522731"},{"caption":"三都水族自治县","pcode":"522700","code":"522732"},{"caption":"贵安新区","pcode":"520000","code":"529700"},{"caption":"云南省","pcode":"null","code":"530000"},{"caption":"昆明市","pcode":"530000","code":"530100"},{"caption":"五华区","pcode":"530100","code":"530102"},{"caption":"盘龙区","pcode":"530100","code":"530103"},{"caption":"官渡区","pcode":"530100","code":"530111"},{"caption":"西山区","pcode":"530100","code":"530112"},{"caption":"东川区","pcode":"530100","code":"530113"},{"caption":"呈贡区","pcode":"530100","code":"530114"},{"caption":"晋宁区","pcode":"530100","code":"530115"},{"caption":"富民县","pcode":"530100","code":"530124"},{"caption":"宜良县","pcode":"530100","code":"530125"},{"caption":"石林彝族自治县","pcode":"530100","code":"530126"},{"caption":"嵩明县","pcode":"530100","code":"530127"},{"caption":"禄劝彝族苗族自治县","pcode":"530100","code":"530128"},{"caption":"寻甸回族彝族自治县","pcode":"530100","code":"530129"},{"caption":"安宁市","pcode":"530100","code":"530181"},{"caption":"曲靖市","pcode":"530000","code":"530300"},{"caption":"麒麟区","pcode":"530300","code":"530302"},{"caption":"沾益区","pcode":"530300","code":"530303"},{"caption":"马龙县","pcode":"530300","code":"530321"},{"caption":"陆良县","pcode":"530300","code":"530322"},{"caption":"师宗县","pcode":"530300","code":"530323"},{"caption":"罗平县","pcode":"530300","code":"530324"},{"caption":"富源县","pcode":"530300","code":"530325"},{"caption":"会泽县","pcode":"530300","code":"530326"},{"caption":"宣威市","pcode":"530300","code":"530381"},{"caption":"玉溪市","pcode":"530000","code":"530400"},{"caption":"红塔区","pcode":"530400","code":"530402"},{"caption":"江川区","pcode":"530400","code":"530403"},{"caption":"澄江县","pcode":"530400","code":"530422"},{"caption":"通海县","pcode":"530400","code":"530423"},{"caption":"华宁县","pcode":"530400","code":"530424"},{"caption":"易门县","pcode":"530400","code":"530425"},{"caption":"峨山彝族自治县","pcode":"530400","code":"530426"},{"caption":"新平彝族傣族自治县","pcode":"530400","code":"530427"},{"caption":"元江哈尼族彝族傣族自治县","pcode":"530400","code":"530428"},{"caption":"保山市","pcode":"530000","code":"530500"},{"caption":"隆阳区","pcode":"530500","code":"530502"},{"caption":"施甸县","pcode":"530500","code":"530521"},{"caption":"腾冲县","pcode":"530500","code":"530522"},{"caption":"龙陵县","pcode":"530500","code":"530523"},{"caption":"昌宁县","pcode":"530500","code":"530524"},{"caption":"昭通市","pcode":"530000","code":"530600"},{"caption":"昭阳区","pcode":"530600","code":"530602"},{"caption":"鲁甸县","pcode":"530600","code":"530621"},{"caption":"巧家县","pcode":"530600","code":"530622"},{"caption":"盐津县","pcode":"530600","code":"530623"},{"caption":"大关县","pcode":"530600","code":"530624"},{"caption":"永善县","pcode":"530600","code":"530625"},{"caption":"绥江县","pcode":"530600","code":"530626"},{"caption":"镇雄县","pcode":"530600","code":"530627"},{"caption":"彝良县","pcode":"530600","code":"530628"},{"caption":"威信县","pcode":"530600","code":"530629"},{"caption":"水富县","pcode":"530600","code":"530630"},{"caption":"丽江市","pcode":"530000","code":"530700"},{"caption":"古城区","pcode":"530700","code":"530702"},{"caption":"玉龙纳西族自治县","pcode":"530700","code":"530721"},{"caption":"永胜县","pcode":"530700","code":"530722"},{"caption":"华坪县","pcode":"530700","code":"530723"},{"caption":"宁蒗彝族自治县","pcode":"530700","code":"530724"},{"caption":"普洱市","pcode":"530000","code":"530800"},{"caption":"思茅区","pcode":"530800","code":"530802"},{"caption":"宁洱哈尼族彝族自治县","pcode":"530800","code":"530821"},{"caption":"墨江哈尼族自治县","pcode":"530800","code":"530822"},{"caption":"景东彝族自治县","pcode":"530800","code":"530823"},{"caption":"景谷傣族彝族自治县","pcode":"530800","code":"530824"},{"caption":"镇沅彝族哈尼族拉祜族自治县","pcode":"530800","code":"530825"},{"caption":"江城哈尼族彝族自治县","pcode":"530800","code":"530826"},{"caption":"孟连傣族拉祜族佤族自治县","pcode":"530800","code":"530827"},{"caption":"澜沧拉祜族自治县","pcode":"530800","code":"530828"},{"caption":"西盟佤族自治县","pcode":"530800","code":"530829"},{"caption":"临沧市","pcode":"530000","code":"530900"},{"caption":"临翔区","pcode":"530900","code":"530902"},{"caption":"凤庆县","pcode":"530900","code":"530921"},{"caption":"云县","pcode":"530900","code":"530922"},{"caption":"永德县","pcode":"530900","code":"530923"},{"caption":"镇康县","pcode":"530900","code":"530924"},{"caption":"双江拉祜族佤族布朗族傣族自治县","pcode":"530900","code":"530925"},{"caption":"耿马傣族佤族自治县","pcode":"530900","code":"530926"},{"caption":"沧源佤族自治县","pcode":"530900","code":"530927"},{"caption":"楚雄彝族自治州","pcode":"530000","code":"532300"},{"caption":"楚雄市","pcode":"532300","code":"532301"},{"caption":"双柏县","pcode":"532300","code":"532322"},{"caption":"牟定县","pcode":"532300","code":"532323"},{"caption":"南华县","pcode":"532300","code":"532324"},{"caption":"姚安县","pcode":"532300","code":"532325"},{"caption":"大姚县","pcode":"532300","code":"532326"},{"caption":"永仁县","pcode":"532300","code":"532327"},{"caption":"元谋县","pcode":"532300","code":"532328"},{"caption":"武定县","pcode":"532300","code":"532329"},{"caption":"禄丰县","pcode":"532300","code":"532331"},{"caption":"红河哈尼族彝族自治州","pcode":"530000","code":"532500"},{"caption":"个旧市","pcode":"532500","code":"532501"},{"caption":"开远市","pcode":"532500","code":"532502"},{"caption":"蒙自市","pcode":"532500","code":"532503"},{"caption":"屏边苗族自治县","pcode":"532500","code":"532523"},{"caption":"建水县","pcode":"532500","code":"532524"},{"caption":"石屏县","pcode":"532500","code":"532525"},{"caption":"弥勒县","pcode":"532500","code":"532526"},{"caption":"泸西县","pcode":"532500","code":"532527"},{"caption":"元阳县","pcode":"532500","code":"532528"},{"caption":"红河县","pcode":"532500","code":"532529"},{"caption":"金平苗族瑶族傣族自治县","pcode":"532500","code":"532530"},{"caption":"绿春县","pcode":"532500","code":"532531"},{"caption":"河口瑶族自治县","pcode":"532500","code":"532532"},{"caption":"文山壮族苗族自治州","pcode":"530000","code":"532600"},{"caption":"文山市","pcode":"532600","code":"532601"},{"caption":"砚山县","pcode":"532600","code":"532622"},{"caption":"西畴县","pcode":"532600","code":"532623"},{"caption":"麻栗坡县","pcode":"532600","code":"532624"},{"caption":"马关县","pcode":"532600","code":"532625"},{"caption":"丘北县","pcode":"532600","code":"532626"},{"caption":"广南县","pcode":"532600","code":"532627"},{"caption":"富宁县","pcode":"532600","code":"532628"},{"caption":"西双版纳傣族自治州","pcode":"530000","code":"532800"},{"caption":"景洪市","pcode":"532800","code":"532801"},{"caption":"勐海县","pcode":"532800","code":"532822"},{"caption":"勐腊县","pcode":"532800","code":"532823"},{"caption":"大理白族自治州","pcode":"530000","code":"532900"},{"caption":"大理市","pcode":"532900","code":"532901"},{"caption":"漾濞彝族自治县","pcode":"532900","code":"532922"},{"caption":"祥云县","pcode":"532900","code":"532923"},{"caption":"宾川县","pcode":"532900","code":"532924"},{"caption":"弥渡县","pcode":"532900","code":"532925"},{"caption":"南涧彝族自治县","pcode":"532900","code":"532926"},{"caption":"巍山彝族回族自治县","pcode":"532900","code":"532927"},{"caption":"永平县","pcode":"532900","code":"532928"},{"caption":"云龙县","pcode":"532900","code":"532929"},{"caption":"洱源县","pcode":"532900","code":"532930"},{"caption":"剑川县","pcode":"532900","code":"532931"},{"caption":"鹤庆县","pcode":"532900","code":"532932"},{"caption":"德宏傣族景颇族自治州","pcode":"530000","code":"533100"},{"caption":"瑞丽市","pcode":"533100","code":"533102"},{"caption":"芒市","pcode":"533100","code":"533103"},{"caption":"梁河县","pcode":"533100","code":"533122"},{"caption":"盈江县","pcode":"533100","code":"533123"},{"caption":"陇川县","pcode":"533100","code":"533124"},{"caption":"怒江傈僳族自治州","pcode":"530000","code":"533300"},{"caption":"泸水市","pcode":"533300","code":"533301"},{"caption":"福贡县","pcode":"533300","code":"533323"},{"caption":"贡山独龙族怒族自治县","pcode":"533300","code":"533324"},{"caption":"兰坪白族普米族自治县","pcode":"533300","code":"533325"},{"caption":"迪庆藏族自治州","pcode":"530000","code":"533400"},{"caption":"香格里拉县","pcode":"533400","code":"533421"},{"caption":"德钦县","pcode":"533400","code":"533422"},{"caption":"维西傈僳族自治县","pcode":"533400","code":"533423"},{"caption":"西藏自治区","pcode":"null","code":"540000"},{"caption":"拉萨市","pcode":"540000","code":"540100"},{"caption":"城关区","pcode":"540100","code":"540102"},{"caption":"林周县","pcode":"540100","code":"540121"},{"caption":"当雄县","pcode":"540100","code":"540122"},{"caption":"尼木县","pcode":"540100","code":"540123"},{"caption":"曲水县","pcode":"540100","code":"540124"},{"caption":"堆龙德庆县","pcode":"540100","code":"540125"},{"caption":"达孜县","pcode":"540100","code":"540126"},{"caption":"墨竹工卡县","pcode":"540100","code":"540127"},{"caption":"日喀则市","pcode":"540000","code":"540200"},{"caption":"桑珠孜区","pcode":"540200","code":"540202"},{"caption":"南木林县","pcode":"540200","code":"540221"},{"caption":"江孜县","pcode":"540200","code":"540222"},{"caption":"定日县","pcode":"540200","code":"540223"},{"caption":"萨迦县","pcode":"540200","code":"540224"},{"caption":"拉孜县","pcode":"540200","code":"540225"},{"caption":"昂仁县","pcode":"540200","code":"540226"},{"caption":"谢通门县","pcode":"540200","code":"540227"},{"caption":"白朗县","pcode":"540200","code":"540228"},{"caption":"仁布县","pcode":"540200","code":"540229"},{"caption":"康马县","pcode":"540200","code":"540230"},{"caption":"定结县","pcode":"540200","code":"540231"},{"caption":"仲巴县","pcode":"540200","code":"540232"},{"caption":"亚东县","pcode":"540200","code":"540233"},{"caption":"吉隆县","pcode":"540200","code":"540234"},{"caption":"聂拉木县","pcode":"540200","code":"540235"},{"caption":"萨嘎县","pcode":"540200","code":"540236"},{"caption":"岗巴县","pcode":"540200","code":"540237"},{"caption":"昌都市","pcode":"540000","code":"540300"},{"caption":"卡若区","pcode":"540300","code":"540302"},{"caption":"江达县","pcode":"540300","code":"540321"},{"caption":"贡觉县","pcode":"540300","code":"540322"},{"caption":"类乌齐县","pcode":"540300","code":"540323"},{"caption":"丁青县","pcode":"540300","code":"540324"},{"caption":"察雅县","pcode":"540300","code":"540325"},{"caption":"八宿县","pcode":"540300","code":"540326"},{"caption":"左贡县","pcode":"540300","code":"540327"},{"caption":"芒康县","pcode":"540300","code":"540328"},{"caption":"洛隆县","pcode":"540300","code":"540329"},{"caption":"边坝县","pcode":"540300","code":"540330"},{"caption":"林芝市","pcode":"540000","code":"540400"},{"caption":"巴宜区","pcode":"540400","code":"540402"},{"caption":"工布江达县","pcode":"540400","code":"540421"},{"caption":"米林县","pcode":"540400","code":"540422"},{"caption":"墨脱县","pcode":"540400","code":"540423"},{"caption":"波密县 ","pcode":"540400","code":"540424"},{"caption":"察隅县","pcode":"540400","code":"540425"},{"caption":"朗县","pcode":"540400","code":"540426"},{"caption":"山南市","pcode":"540000","code":"540500"},{"caption":"乃东区","pcode":"540500","code":"540502"},{"caption":"扎囊县","pcode":"540500","code":"540521"},{"caption":"贡嘎县","pcode":"540500","code":"540522"},{"caption":"桑日县","pcode":"540500","code":"540523"},{"caption":"琼结县","pcode":"540500","code":"540524"},{"caption":"曲松县","pcode":"540500","code":"540525"},{"caption":"措美县","pcode":"540500","code":"540526"},{"caption":"洛扎县","pcode":"540500","code":"540527"},{"caption":"加查县","pcode":"540500","code":"540528"},{"caption":"隆子县","pcode":"540500","code":"540529"},{"caption":"错那县","pcode":"540500","code":"540530"},{"caption":"浪卡子县","pcode":"540500","code":"540531"},{"caption":"那曲地区","pcode":"540000","code":"542400"},{"caption":"那曲县","pcode":"542400","code":"542421"},{"caption":"嘉黎县","pcode":"542400","code":"542422"},{"caption":"比如县","pcode":"542400","code":"542423"},{"caption":"聂荣县","pcode":"542400","code":"542424"},{"caption":"安多县","pcode":"542400","code":"542425"},{"caption":"申扎县","pcode":"542400","code":"542426"},{"caption":"索县","pcode":"542400","code":"542427"},{"caption":"班戈县","pcode":"542400","code":"542428"},{"caption":"巴青县","pcode":"542400","code":"542429"},{"caption":"尼玛县","pcode":"542400","code":"542430"},{"caption":"双湖县","pcode":"542400","code":"542431"},{"caption":"阿里地区","pcode":"540000","code":"542500"},{"caption":"普兰县","pcode":"542500","code":"542521"},{"caption":"札达县","pcode":"542500","code":"542522"},{"caption":"噶尔县","pcode":"542500","code":"542523"},{"caption":"日土县","pcode":"542500","code":"542524"},{"caption":"革吉县","pcode":"542500","code":"542525"},{"caption":"改则县","pcode":"542500","code":"542526"},{"caption":"措勤县","pcode":"542500","code":"542527"},{"caption":"陕西省","pcode":"null","code":"610000"},{"caption":"西安市","pcode":"610000","code":"610100"},{"caption":"新城区","pcode":"610100","code":"610102"},{"caption":"碑林区","pcode":"610100","code":"610103"},{"caption":"莲湖区","pcode":"610100","code":"610104"},{"caption":"灞桥区","pcode":"610100","code":"610111"},{"caption":"未央区","pcode":"610100","code":"610112"},{"caption":"雁塔区","pcode":"610100","code":"610113"},{"caption":"阎良区","pcode":"610100","code":"610114"},{"caption":"临潼区","pcode":"610100","code":"610115"},{"caption":"长安区","pcode":"610100","code":"610116"},{"caption":"高陵区","pcode":"610100","code":"610117"},{"caption":"蓝田县","pcode":"610100","code":"610122"},{"caption":"周至县","pcode":"610100","code":"610124"},{"caption":"户县","pcode":"610100","code":"610125"},{"caption":"铜川市","pcode":"610000","code":"610200"},{"caption":"王益区","pcode":"610200","code":"610202"},{"caption":"印台区","pcode":"610200","code":"610203"},{"caption":"耀州区","pcode":"610200","code":"610204"},{"caption":"宜君县","pcode":"610200","code":"610222"},{"caption":"宝鸡市","pcode":"610000","code":"610300"},{"caption":"渭滨区","pcode":"610300","code":"610302"},{"caption":"金台区","pcode":"610300","code":"610303"},{"caption":"陈仓区","pcode":"610300","code":"610304"},{"caption":"凤翔县","pcode":"610300","code":"610322"},{"caption":"岐山县","pcode":"610300","code":"610323"},{"caption":"扶风县","pcode":"610300","code":"610324"},{"caption":"眉县","pcode":"610300","code":"610326"},{"caption":"陇县","pcode":"610300","code":"610327"},{"caption":"千阳县","pcode":"610300","code":"610328"},{"caption":"麟游县","pcode":"610300","code":"610329"},{"caption":"凤县","pcode":"610300","code":"610330"},{"caption":"太白县","pcode":"610300","code":"610331"},{"caption":"咸阳市","pcode":"610000","code":"610400"},{"caption":"秦都区","pcode":"610400","code":"610402"},{"caption":"杨陵区","pcode":"610400","code":"610403"},{"caption":"渭城区","pcode":"610400","code":"610404"},{"caption":"三原县","pcode":"610400","code":"610422"},{"caption":"泾阳县","pcode":"610400","code":"610423"},{"caption":"乾县","pcode":"610400","code":"610424"},{"caption":"礼泉县","pcode":"610400","code":"610425"},{"caption":"永寿县","pcode":"610400","code":"610426"},{"caption":"彬县","pcode":"610400","code":"610427"},{"caption":"长武县","pcode":"610400","code":"610428"},{"caption":"旬邑县","pcode":"610400","code":"610429"},{"caption":"淳化县","pcode":"610400","code":"610430"},{"caption":"武功县","pcode":"610400","code":"610431"},{"caption":"兴平市","pcode":"610400","code":"610481"},{"caption":"渭南市","pcode":"610000","code":"610500"},{"caption":"临渭区","pcode":"610500","code":"610502"},{"caption":"华州区","pcode":"610500","code":"610503"},{"caption":"潼关县","pcode":"610500","code":"610522"},{"caption":"大荔县","pcode":"610500","code":"610523"},{"caption":"合阳县","pcode":"610500","code":"610524"},{"caption":"澄城县","pcode":"610500","code":"610525"},{"caption":"蒲城县","pcode":"610500","code":"610526"},{"caption":"白水县","pcode":"610500","code":"610527"},{"caption":"富平县","pcode":"610500","code":"610528"},{"caption":"韩城市","pcode":"610500","code":"610581"},{"caption":"华阴市","pcode":"610500","code":"610582"},{"caption":"延安市","pcode":"610000","code":"610600"},{"caption":"宝塔区","pcode":"610600","code":"610602"},{"caption":"延长县","pcode":"610600","code":"610621"},{"caption":"延川县","pcode":"610600","code":"610622"},{"caption":"子长县","pcode":"610600","code":"610623"},{"caption":"安塞县","pcode":"610600","code":"610624"},{"caption":"志丹县","pcode":"610600","code":"610625"},{"caption":"吴起县","pcode":"610600","code":"610626"},{"caption":"甘泉县","pcode":"610600","code":"610627"},{"caption":"富县","pcode":"610600","code":"610628"},{"caption":"洛川县","pcode":"610600","code":"610629"},{"caption":"宜川县","pcode":"610600","code":"610630"},{"caption":"黄龙县","pcode":"610600","code":"610631"},{"caption":"黄陵县","pcode":"610600","code":"610632"},{"caption":"汉中市","pcode":"610000","code":"610700"},{"caption":"汉台区","pcode":"610700","code":"610702"},{"caption":"南郑县","pcode":"610700","code":"610721"},{"caption":"城固县","pcode":"610700","code":"610722"},{"caption":"洋县","pcode":"610700","code":"610723"},{"caption":"西乡县","pcode":"610700","code":"610724"},{"caption":"勉县","pcode":"610700","code":"610725"},{"caption":"宁强县","pcode":"610700","code":"610726"},{"caption":"略阳县","pcode":"610700","code":"610727"},{"caption":"镇巴县","pcode":"610700","code":"610728"},{"caption":"留坝县","pcode":"610700","code":"610729"},{"caption":"佛坪县","pcode":"610700","code":"610730"},{"caption":"榆林市","pcode":"610000","code":"610800"},{"caption":"榆阳区","pcode":"610800","code":"610802"},{"caption":"神木县","pcode":"610800","code":"610821"},{"caption":"府谷县","pcode":"610800","code":"610822"},{"caption":"横山县","pcode":"610800","code":"610823"},{"caption":"靖边县","pcode":"610800","code":"610824"},{"caption":"定边县","pcode":"610800","code":"610825"},{"caption":"绥德县","pcode":"610800","code":"610826"},{"caption":"米脂县","pcode":"610800","code":"610827"},{"caption":"佳县","pcode":"610800","code":"610828"},{"caption":"吴堡县","pcode":"610800","code":"610829"},{"caption":"清涧县","pcode":"610800","code":"610830"},{"caption":"子洲县","pcode":"610800","code":"610831"},{"caption":"安康市","pcode":"610000","code":"610900"},{"caption":"汉滨区","pcode":"610900","code":"610902"},{"caption":"汉阴县","pcode":"610900","code":"610921"},{"caption":"石泉县","pcode":"610900","code":"610922"},{"caption":"宁陕县","pcode":"610900","code":"610923"},{"caption":"紫阳县","pcode":"610900","code":"610924"},{"caption":"岚皋县","pcode":"610900","code":"610925"},{"caption":"平利县","pcode":"610900","code":"610926"},{"caption":"镇坪县","pcode":"610900","code":"610927"},{"caption":"旬阳县","pcode":"610900","code":"610928"},{"caption":"白河县","pcode":"610900","code":"610929"},{"caption":"商洛市","pcode":"610000","code":"611000"},{"caption":"商州区","pcode":"611000","code":"611002"},{"caption":"洛南县","pcode":"611000","code":"611021"},{"caption":"丹凤县","pcode":"611000","code":"611022"},{"caption":"商南县","pcode":"611000","code":"611023"},{"caption":"山阳县","pcode":"611000","code":"611024"},{"caption":"镇安县","pcode":"611000","code":"611025"},{"caption":"柞水县","pcode":"611000","code":"611026"},{"caption":"甘肃省","pcode":"null","code":"620000"},{"caption":"兰州市","pcode":"620000","code":"620100"},{"caption":"城关区","pcode":"620100","code":"620102"},{"caption":"七里河区","pcode":"620100","code":"620103"},{"caption":"西固区","pcode":"620100","code":"620104"},{"caption":"安宁区","pcode":"620100","code":"620105"},{"caption":"红古区","pcode":"620100","code":"620111"},{"caption":"永登县","pcode":"620100","code":"620121"},{"caption":"皋兰县","pcode":"620100","code":"620122"},{"caption":"榆中县","pcode":"620100","code":"620123"},{"caption":"嘉峪关市","pcode":"620000","code":"620200"},{"caption":"金昌市","pcode":"620000","code":"620300"},{"caption":"金川区","pcode":"620300","code":"620302"},{"caption":"永昌县","pcode":"620300","code":"620321"},{"caption":"白银市","pcode":"620000","code":"620400"},{"caption":"白银区","pcode":"620400","code":"620402"},{"caption":"平川区","pcode":"620400","code":"620403"},{"caption":"靖远县","pcode":"620400","code":"620421"},{"caption":"会宁县","pcode":"620400","code":"620422"},{"caption":"景泰县","pcode":"620400","code":"620423"},{"caption":"天水市","pcode":"620000","code":"620500"},{"caption":"秦州区","pcode":"620500","code":"620502"},{"caption":"麦积区","pcode":"620500","code":"620503"},{"caption":"清水县","pcode":"620500","code":"620521"},{"caption":"秦安县","pcode":"620500","code":"620522"},{"caption":"甘谷县","pcode":"620500","code":"620523"},{"caption":"武山县","pcode":"620500","code":"620524"},{"caption":"张家川回族自治县","pcode":"620500","code":"620525"},{"caption":"武威市","pcode":"620000","code":"620600"},{"caption":"凉州区","pcode":"620600","code":"620602"},{"caption":"民勤县","pcode":"620600","code":"620621"},{"caption":"古浪县","pcode":"620600","code":"620622"},{"caption":"天祝藏族自治县","pcode":"620600","code":"620623"},{"caption":"张掖市","pcode":"620000","code":"620700"},{"caption":"甘州区","pcode":"620700","code":"620702"},{"caption":"肃南裕固族自治县","pcode":"620700","code":"620721"},{"caption":"民乐县","pcode":"620700","code":"620722"},{"caption":"临泽县","pcode":"620700","code":"620723"},{"caption":"高台县","pcode":"620700","code":"620724"},{"caption":"山丹县","pcode":"620700","code":"620725"},{"caption":"平凉市","pcode":"620000","code":"620800"},{"caption":"崆峒区","pcode":"620800","code":"620802"},{"caption":"泾川县","pcode":"620800","code":"620821"},{"caption":"灵台县","pcode":"620800","code":"620822"},{"caption":"崇信县","pcode":"620800","code":"620823"},{"caption":"华亭县","pcode":"620800","code":"620824"},{"caption":"庄浪县","pcode":"620800","code":"620825"},{"caption":"静宁县","pcode":"620800","code":"620826"},{"caption":"酒泉市","pcode":"620000","code":"620900"},{"caption":"肃州区","pcode":"620900","code":"620902"},{"caption":"金塔县","pcode":"620900","code":"620921"},{"caption":"瓜州县","pcode":"620900","code":"620922"},{"caption":"肃北蒙古族自治县","pcode":"620900","code":"620923"},{"caption":"阿克塞哈萨克族自治县","pcode":"620900","code":"620924"},{"caption":"玉门市","pcode":"620900","code":"620981"},{"caption":"敦煌市","pcode":"620900","code":"620982"},{"caption":"庆阳市","pcode":"620000","code":"621000"},{"caption":"西峰区","pcode":"621000","code":"621002"},{"caption":"庆城县","pcode":"621000","code":"621021"},{"caption":"环县","pcode":"621000","code":"621022"},{"caption":"华池县","pcode":"621000","code":"621023"},{"caption":"合水县","pcode":"621000","code":"621024"},{"caption":"正宁县","pcode":"621000","code":"621025"},{"caption":"宁县","pcode":"621000","code":"621026"},{"caption":"镇原县","pcode":"621000","code":"621027"},{"caption":"定西市","pcode":"620000","code":"621100"},{"caption":"安定区","pcode":"621100","code":"621102"},{"caption":"通渭县","pcode":"621100","code":"621121"},{"caption":"陇西县","pcode":"621100","code":"621122"},{"caption":"渭源县","pcode":"621100","code":"621123"},{"caption":"临洮县","pcode":"621100","code":"621124"},{"caption":"漳县","pcode":"621100","code":"621125"},{"caption":"岷县","pcode":"621100","code":"621126"},{"caption":"陇南市","pcode":"620000","code":"621200"},{"caption":"武都区","pcode":"621200","code":"621202"},{"caption":"成县","pcode":"621200","code":"621221"},{"caption":"文县","pcode":"621200","code":"621222"},{"caption":"宕昌县","pcode":"621200","code":"621223"},{"caption":"康县","pcode":"621200","code":"621224"},{"caption":"西和县","pcode":"621200","code":"621225"},{"caption":"礼县","pcode":"621200","code":"621226"},{"caption":"徽县","pcode":"621200","code":"621227"},{"caption":"两当县","pcode":"621200","code":"621228"},{"caption":"临夏回族自治州","pcode":"620000","code":"622900"},{"caption":"临夏市","pcode":"622900","code":"622901"},{"caption":"临夏县","pcode":"622900","code":"622921"},{"caption":"康乐县","pcode":"622900","code":"622922"},{"caption":"永靖县","pcode":"622900","code":"622923"},{"caption":"广河县","pcode":"622900","code":"622924"},{"caption":"和政县","pcode":"622900","code":"622925"},{"caption":"东乡族自治县","pcode":"622900","code":"622926"},{"caption":"积石山保安族东乡族撒拉族自治县","pcode":"622900","code":"622927"},{"caption":"甘南藏族自治州","pcode":"620000","code":"623000"},{"caption":"合作市","pcode":"623000","code":"623001"},{"caption":"临潭县","pcode":"623000","code":"623021"},{"caption":"卓尼县","pcode":"623000","code":"623022"},{"caption":"舟曲县","pcode":"623000","code":"623023"},{"caption":"迭部县","pcode":"623000","code":"623024"},{"caption":"玛曲县","pcode":"623000","code":"623025"},{"caption":"碌曲县","pcode":"623000","code":"623026"},{"caption":"夏河县","pcode":"623000","code":"623027"},{"caption":"青海省","pcode":"null","code":"630000"},{"caption":"西宁市","pcode":"630000","code":"630100"},{"caption":"城东区","pcode":"630100","code":"630102"},{"caption":"城中区","pcode":"630100","code":"630103"},{"caption":"城西区","pcode":"630100","code":"630104"},{"caption":"城北区","pcode":"630100","code":"630105"},{"caption":"大通回族土族自治县","pcode":"630100","code":"630121"},{"caption":"湟中县","pcode":"630100","code":"630122"},{"caption":"湟源县","pcode":"630100","code":"630123"},{"caption":"海东市","pcode":"630000","code":"630200"},{"caption":"乐都区","pcode":"630200","code":"630202"},{"caption":"平安区","pcode":"630200","code":"630203"},{"caption":"民和回族土族自治县","pcode":"630200","code":"630222"},{"caption":"互助土族自治县","pcode":"630200","code":"630223"},{"caption":"化隆回族自治县","pcode":"630200","code":"630224"},{"caption":"循化撒拉族自治县","pcode":"630200","code":"630225"},{"caption":"海北藏族自治州","pcode":"630000","code":"632200"},{"caption":"门源回族自治县","pcode":"632200","code":"632221"},{"caption":"祁连县","pcode":"632200","code":"632222"},{"caption":"海晏县","pcode":"632200","code":"632223"},{"caption":"刚察县","pcode":"632200","code":"632224"},{"caption":"黄南藏族自治州","pcode":"630000","code":"632300"},{"caption":"同仁县","pcode":"632300","code":"632321"},{"caption":"尖扎县","pcode":"632300","code":"632322"},{"caption":"泽库县","pcode":"632300","code":"632323"},{"caption":"河南蒙古族自治县","pcode":"632300","code":"632324"},{"caption":"海南藏族自治州","pcode":"630000","code":"632500"},{"caption":"共和县","pcode":"632500","code":"632521"},{"caption":"同德县","pcode":"632500","code":"632522"},{"caption":"贵德县","pcode":"632500","code":"632523"},{"caption":"兴海县","pcode":"632500","code":"632524"},{"caption":"贵南县","pcode":"632500","code":"632525"},{"caption":"果洛藏族自治州","pcode":"630000","code":"632600"},{"caption":"玛沁县","pcode":"632600","code":"632621"},{"caption":"班玛县","pcode":"632600","code":"632622"},{"caption":"甘德县","pcode":"632600","code":"632623"},{"caption":"达日县","pcode":"632600","code":"632624"},{"caption":"久治县","pcode":"632600","code":"632625"},{"caption":"玛多县","pcode":"632600","code":"632626"},{"caption":"玉树藏族自治州","pcode":"630000","code":"632700"},{"caption":"玉树市","pcode":"632700","code":"632701"},{"caption":"杂多县","pcode":"632700","code":"632722"},{"caption":"称多县","pcode":"632700","code":"632723"},{"caption":"治多县","pcode":"632700","code":"632724"},{"caption":"囊谦县","pcode":"632700","code":"632725"},{"caption":"曲麻莱县","pcode":"632700","code":"632726"},{"caption":"海西蒙古族藏族自治州","pcode":"630000","code":"632800"},{"caption":"格尔木市","pcode":"632800","code":"632801"},{"caption":"德令哈市","pcode":"632800","code":"632802"},{"caption":"乌兰县","pcode":"632800","code":"632821"},{"caption":"都兰县","pcode":"632800","code":"632822"},{"caption":"天峻县","pcode":"632800","code":"632823"},{"caption":"大柴旦行委","pcode":"632800","code":"632857"},{"caption":"冷湖行委","pcode":"632800","code":"632858"},{"caption":"茫崖行委","pcode":"632800","code":"632859"},{"caption":"宁夏回族自治区","pcode":"null","code":"640000"},{"caption":"银川市","pcode":"640000","code":"640100"},{"caption":"兴庆区","pcode":"640100","code":"640104"},{"caption":"西夏区","pcode":"640100","code":"640105"},{"caption":"金凤区","pcode":"640100","code":"640106"},{"caption":"永宁县","pcode":"640100","code":"640121"},{"caption":"贺兰县","pcode":"640100","code":"640122"},{"caption":"灵武市","pcode":"640100","code":"640181"},{"caption":"石嘴山市","pcode":"640000","code":"640200"},{"caption":"大武口区","pcode":"640200","code":"640202"},{"caption":"惠农区","pcode":"640200","code":"640205"},{"caption":"平罗县","pcode":"640200","code":"640221"},{"caption":"吴忠市","pcode":"640000","code":"640300"},{"caption":"利通区","pcode":"640300","code":"640302"},{"caption":"红寺堡区","pcode":"640300","code":"640303"},{"caption":"盐池县","pcode":"640300","code":"640323"},{"caption":"同心县","pcode":"640300","code":"640324"},{"caption":"青铜峡市","pcode":"640300","code":"640381"},{"caption":"固原市","pcode":"640000","code":"640400"},{"caption":"原州区","pcode":"640400","code":"640402"},{"caption":"西吉县","pcode":"640400","code":"640422"},{"caption":"隆德县","pcode":"640400","code":"640423"},{"caption":"泾源县","pcode":"640400","code":"640424"},{"caption":"彭阳县","pcode":"640400","code":"640425"},{"caption":"中卫市","pcode":"640000","code":"640500"},{"caption":"沙坡头区","pcode":"640500","code":"640502"},{"caption":"中宁县","pcode":"640500","code":"640521"},{"caption":"海原县","pcode":"640500","code":"640522"},{"caption":"新疆维吾尔自治区","pcode":"null","code":"650000"},{"caption":"乌鲁木齐市","pcode":"650000","code":"650100"},{"caption":"天山区","pcode":"650100","code":"650102"},{"caption":"沙依巴克区","pcode":"650100","code":"650103"},{"caption":"新市区","pcode":"650100","code":"650104"},{"caption":"水磨沟区","pcode":"650100","code":"650105"},{"caption":"头屯河区","pcode":"650100","code":"650106"},{"caption":"达坂城区","pcode":"650100","code":"650107"},{"caption":"米东区","pcode":"650100","code":"650109"},{"caption":"乌鲁木齐县","pcode":"650100","code":"650121"},{"caption":"克拉玛依市","pcode":"650000","code":"650200"},{"caption":"独山子区","pcode":"650200","code":"650202"},{"caption":"克拉玛依区","pcode":"650200","code":"650203"},{"caption":"白碱滩区","pcode":"650200","code":"650204"},{"caption":"乌尔禾区","pcode":"650200","code":"650205"},{"caption":"吐鲁番地区","pcode":"650000","code":"652100"},{"caption":"吐鲁番市","pcode":"652100","code":"652101"},{"caption":"鄯善县","pcode":"652100","code":"652122"},{"caption":"托克逊县","pcode":"652100","code":"652123"},{"caption":"哈密地区","pcode":"650000","code":"652200"},{"caption":"哈密市","pcode":"652200","code":"652201"},{"caption":"巴里坤哈萨克自治县","pcode":"652200","code":"652222"},{"caption":"伊吾县","pcode":"652200","code":"652223"},{"caption":"昌吉回族自治州","pcode":"650000","code":"652300"},{"caption":"昌吉市","pcode":"652300","code":"652301"},{"caption":"阜康市","pcode":"652300","code":"652302"},{"caption":"呼图壁县","pcode":"652300","code":"652323"},{"caption":"玛纳斯县","pcode":"652300","code":"652324"},{"caption":"奇台县","pcode":"652300","code":"652325"},{"caption":"吉木萨尔县","pcode":"652300","code":"652327"},{"caption":"木垒哈萨克自治县","pcode":"652300","code":"652328"},{"caption":"博尔塔拉蒙古自治州","pcode":"650000","code":"652700"},{"caption":"博乐市","pcode":"652700","code":"652701"},{"caption":"阿拉山口市","pcode":"652700","code":"652702"},{"caption":"精河县","pcode":"652700","code":"652722"},{"caption":"温泉县","pcode":"652700","code":"652723"},{"caption":"巴音郭楞蒙古自治州","pcode":"650000","code":"652800"},{"caption":"库尔勒市","pcode":"652800","code":"652801"},{"caption":"轮台县","pcode":"652800","code":"652822"},{"caption":"尉犁县","pcode":"652800","code":"652823"},{"caption":"若羌县","pcode":"652800","code":"652824"},{"caption":"且末县","pcode":"652800","code":"652825"},{"caption":"焉耆回族自治县","pcode":"652800","code":"652826"},{"caption":"和静县","pcode":"652800","code":"652827"},{"caption":"和硕县","pcode":"652800","code":"652828"},{"caption":"博湖县","pcode":"652800","code":"652829"},{"caption":"阿克苏地区","pcode":"650000","code":"652900"},{"caption":"阿克苏市","pcode":"652900","code":"652901"},{"caption":"温宿县","pcode":"652900","code":"652922"},{"caption":"库车县","pcode":"652900","code":"652923"},{"caption":"沙雅县","pcode":"652900","code":"652924"},{"caption":"新和县","pcode":"652900","code":"652925"},{"caption":"拜城县","pcode":"652900","code":"652926"},{"caption":"乌什县","pcode":"652900","code":"652927"},{"caption":"阿瓦提县","pcode":"652900","code":"652928"},{"caption":"柯坪县","pcode":"652900","code":"652929"},{"caption":"克孜勒苏柯尔克孜自治州","pcode":"650000","code":"653000"},{"caption":"阿图什市","pcode":"653000","code":"653001"},{"caption":"阿克陶县","pcode":"653000","code":"653022"},{"caption":"阿合奇县","pcode":"653000","code":"653023"},{"caption":"乌恰县","pcode":"653000","code":"653024"},{"caption":"喀什地区","pcode":"650000","code":"653100"},{"caption":"喀什市","pcode":"653100","code":"653101"},{"caption":"疏附县","pcode":"653100","code":"653121"},{"caption":"疏勒县","pcode":"653100","code":"653122"},{"caption":"英吉沙县","pcode":"653100","code":"653123"},{"caption":"泽普县","pcode":"653100","code":"653124"},{"caption":"莎车县","pcode":"653100","code":"653125"},{"caption":"叶城县","pcode":"653100","code":"653126"},{"caption":"麦盖提县","pcode":"653100","code":"653127"},{"caption":"岳普湖县","pcode":"653100","code":"653128"},{"caption":"伽师县","pcode":"653100","code":"653129"},{"caption":"巴楚县","pcode":"653100","code":"653130"},{"caption":"塔什库尔干塔吉克自治县","pcode":"653100","code":"653131"},{"caption":"和田地区","pcode":"650000","code":"653200"},{"caption":"和田市","pcode":"653200","code":"653201"},{"caption":"和田县","pcode":"653200","code":"653221"},{"caption":"墨玉县","pcode":"653200","code":"653222"},{"caption":"皮山县","pcode":"653200","code":"653223"},{"caption":"洛浦县","pcode":"653200","code":"653224"},{"caption":"策勒县","pcode":"653200","code":"653225"},{"caption":"于田县","pcode":"653200","code":"653226"},{"caption":"民丰县","pcode":"653200","code":"653227"},{"caption":"伊犁哈萨克自治州","pcode":"650000","code":"654000"},{"caption":"伊宁市","pcode":"654000","code":"654002"},{"caption":"奎屯市","pcode":"654000","code":"654003"},{"caption":"霍尔果斯市","pcode":"654000","code":"654004"},{"caption":"伊宁县","pcode":"654000","code":"654021"},{"caption":"察布查尔锡伯自治县","pcode":"654000","code":"654022"},{"caption":"霍城县","pcode":"654000","code":"654023"},{"caption":"巩留县","pcode":"654000","code":"654024"},{"caption":"新源县","pcode":"654000","code":"654025"},{"caption":"昭苏县","pcode":"654000","code":"654026"},{"caption":"特克斯县","pcode":"654000","code":"654027"},{"caption":"尼勒克县","pcode":"654000","code":"654028"},{"caption":"塔城地区","pcode":"650000","code":"654200"},{"caption":"塔城市","pcode":"654200","code":"654201"},{"caption":"乌苏市","pcode":"654200","code":"654202"},{"caption":"额敏县","pcode":"654200","code":"654221"},{"caption":"沙湾县","pcode":"654200","code":"654223"},{"caption":"托里县","pcode":"654200","code":"654224"},{"caption":"裕民县","pcode":"654200","code":"654225"},{"caption":"和布克赛尔蒙古自治县","pcode":"654200","code":"654226"},{"caption":"阿勒泰地区","pcode":"650000","code":"654300"},{"caption":"阿勒泰市","pcode":"654300","code":"654301"},{"caption":"布尔津县","pcode":"654300","code":"654321"},{"caption":"富蕴县","pcode":"654300","code":"654322"},{"caption":"福海县","pcode":"654300","code":"654323"},{"caption":"哈巴河县","pcode":"654300","code":"654324"},{"caption":"青河县","pcode":"654300","code":"654325"},{"caption":"吉木乃县","pcode":"654300","code":"654326"},{"caption":"石河子市","pcode":"650000","code":"659001"},{"caption":"阿拉尔市","pcode":"650000","code":"659002"},{"caption":"图木舒克市","pcode":"650000","code":"659003"},{"caption":"五家渠市","pcode":"650000","code":"659004"},{"caption":"北屯市","pcode":"650000","code":"659005"},{"caption":"铁门关市","pcode":"650000","code":"659006"},{"caption":"双河市","pcode":"650000","code":"659007"},{"caption":"可克达拉市","pcode":"659000","code":"659008"},{"caption":"昆玉市","pcode":"659000","code":"659009"},{"caption":"台湾省","pcode":"null","code":"710000"},{"caption":"香港特别行政区","pcode":"null","code":"810000"},{"caption":"澳门特别行政区","pcode":"null","code":"820000"},{"caption":"测试省","pcode":"null","code":"990000"},{"caption":"测试市","pcode":"990000","code":"999900"},{"caption":"测试县","pcode":"999900","code":"999901"},{"caption":"东城区","pcode":"110000_zhixiashi","code":"110101"},{"caption":"西城区","pcode":"110000_zhixiashi","code":"110102"},{"caption":"朝阳区","pcode":"110000_zhixiashi","code":"110105"},{"caption":"丰台区","pcode":"110000_zhixiashi","code":"110106"},{"caption":"石景山区","pcode":"110000_zhixiashi","code":"110107"},{"caption":"海淀区","pcode":"110000_zhixiashi","code":"110108"},{"caption":"门头沟区","pcode":"110000_zhixiashi","code":"110109"},{"caption":"房山区","pcode":"110000_zhixiashi","code":"110111"},{"caption":"通州区","pcode":"110000_zhixiashi","code":"110112"},{"caption":"顺义区","pcode":"110000_zhixiashi","code":"110113"},{"caption":"昌平区","pcode":"110000_zhixiashi","code":"110114"},{"caption":"大兴区","pcode":"110000_zhixiashi","code":"110115"},{"caption":"怀柔区","pcode":"110000_zhixiashi","code":"110116"},{"caption":"平谷区","pcode":"110000_zhixiashi","code":"110117"},{"caption":"密云县","pcode":"110000_zhixiashi","code":"110228"},{"caption":"延庆县","pcode":"110000_zhixiashi","code":"110229"},{"caption":"北京市","code":"110000_zhixiashi","pcode":"110000"},{"caption":"和平区","pcode":"120000_zhixiashi","code":"120101"},{"caption":"河东区","pcode":"120000_zhixiashi","code":"120102"},{"caption":"河西区","pcode":"120000_zhixiashi","code":"120103"},{"caption":"南开区","pcode":"120000_zhixiashi","code":"120104"},{"caption":"河北区","pcode":"120000_zhixiashi","code":"120105"},{"caption":"红桥区","pcode":"120000_zhixiashi","code":"120106"},{"caption":"东丽区","pcode":"120000_zhixiashi","code":"120110"},{"caption":"西青区","pcode":"120000_zhixiashi","code":"120111"},{"caption":"津南区","pcode":"120000_zhixiashi","code":"120112"},{"caption":"北辰区","pcode":"120000_zhixiashi","code":"120113"},{"caption":"武清区","pcode":"120000_zhixiashi","code":"120114"},{"caption":"宝坻区","pcode":"120000_zhixiashi","code":"120115"},{"caption":"滨海新区","pcode":"120000_zhixiashi","code":"120116"},{"caption":"宁河区","pcode":"120000_zhixiashi","code":"120117"},{"caption":"静海区","pcode":"120000_zhixiashi","code":"120118"},{"caption":"蓟州区","pcode":"120000_zhixiashi","code":"120119"},{"caption":"天津市","code":"120000_zhixiashi","pcode":"120000"},{"caption":"黄浦区","pcode":"310000_zhixiashi","code":"310101"},{"caption":"徐汇区","pcode":"310000_zhixiashi","code":"310104"},{"caption":"长宁区","pcode":"310000_zhixiashi","code":"310105"},{"caption":"静安区","pcode":"310000_zhixiashi","code":"310106"},{"caption":"普陀区","pcode":"310000_zhixiashi","code":"310107"},{"caption":"虹口区","pcode":"310000_zhixiashi","code":"310109"},{"caption":"杨浦区","pcode":"310000_zhixiashi","code":"310110"},{"caption":"闵行区","pcode":"310000_zhixiashi","code":"310112"},{"caption":"宝山区","pcode":"310000_zhixiashi","code":"310113"},{"caption":"嘉定区","pcode":"310000_zhixiashi","code":"310114"},{"caption":"浦东新区","pcode":"310000_zhixiashi","code":"310115"},{"caption":"金山区","pcode":"310000_zhixiashi","code":"310116"},{"caption":"松江区","pcode":"310000_zhixiashi","code":"310117"},{"caption":"青浦区","pcode":"310000_zhixiashi","code":"310118"},{"caption":"奉贤区","pcode":"310000_zhixiashi","code":"310120"},{"caption":"崇明县","pcode":"310000_zhixiashi","code":"310230"},{"caption":"上海市","code":"310000_zhixiashi","pcode":"310000"},{"caption":"万州区","pcode":"500000_zhixiashi","code":"500101"},{"caption":"涪陵区","pcode":"500000_zhixiashi","code":"500102"},{"caption":"渝中区","pcode":"500000_zhixiashi","code":"500103"},{"caption":"大渡口区","pcode":"500000_zhixiashi","code":"500104"},{"caption":"江北区","pcode":"500000_zhixiashi","code":"500105"},{"caption":"沙坪坝区","pcode":"500000_zhixiashi","code":"500106"},{"caption":"九龙坡区","pcode":"500000_zhixiashi","code":"500107"},{"caption":"南岸区","pcode":"500000_zhixiashi","code":"500108"},{"caption":"北碚区","pcode":"500000_zhixiashi","code":"500109"},{"caption":"綦江区","pcode":"500000_zhixiashi","code":"500110"},{"caption":"大足区","pcode":"500000_zhixiashi","code":"500111"},{"caption":"渝北区","pcode":"500000_zhixiashi","code":"500112"},{"caption":"巴南区","pcode":"500000_zhixiashi","code":"500113"},{"caption":"黔江区","pcode":"500000_zhixiashi","code":"500114"},{"caption":"长寿区","pcode":"500000_zhixiashi","code":"500115"},{"caption":"江津区","pcode":"500000_zhixiashi","code":"500116"},{"caption":"合川区","pcode":"500000_zhixiashi","code":"500117"},{"caption":"永川区","pcode":"500000_zhixiashi","code":"500118"},{"caption":"南川区","pcode":"500000_zhixiashi","code":"500119"},{"caption":"潼南县","pcode":"500000_zhixiashi","code":"500223"},{"caption":"铜梁县","pcode":"500000_zhixiashi","code":"500224"},{"caption":"荣昌县","pcode":"500000_zhixiashi","code":"500226"},{"caption":"璧山县","pcode":"500000_zhixiashi","code":"500227"},{"caption":"梁平县","pcode":"500000_zhixiashi","code":"500228"},{"caption":"城口县","pcode":"500000_zhixiashi","code":"500229"},{"caption":"丰都县","pcode":"500000_zhixiashi","code":"500230"},{"caption":"垫江县","pcode":"500000_zhixiashi","code":"500231"},{"caption":"武隆县","pcode":"500000_zhixiashi","code":"500232"},{"caption":"忠县","pcode":"500000_zhixiashi","code":"500233"},{"caption":"开县","pcode":"500000_zhixiashi","code":"500234"},{"caption":"云阳县","pcode":"500000_zhixiashi","code":"500235"},{"caption":"奉节县","pcode":"500000_zhixiashi","code":"500236"},{"caption":"巫山县","pcode":"500000_zhixiashi","code":"500237"},{"caption":"巫溪县","pcode":"500000_zhixiashi","code":"500238"},{"caption":"石柱土家族自治县","pcode":"500000_zhixiashi","code":"500240"},{"caption":"秀山土家族苗族自治县","pcode":"500000_zhixiashi","code":"500241"},{"caption":"酉阳土家族苗族自治县","pcode":"500000_zhixiashi","code":"500242"},{"caption":"彭水苗族土家族自治县","pcode":"500000_zhixiashi","code":"500243"},{"caption":"重庆市","code":"500000_zhixiashi","pcode":"500000"}],"sword":"SwordSelect","dataName":"ywptxzqhList"},{"name":"lcswsxDm","value":"LCSXA061001031","type":""},{"name":"isShowBtn","value":"N","type":""},{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"a8ef17ab5fe54baa9425dad7bdb425bb","type":""}]}'></div>

