<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="form.sword_SB175FxmtysbCtrl_cwgzInitView.aspx.cs" Inherits="JlueTaxSystemGXGS.form_sword_SB175FxmtysbCtrl_cwgzInitView" %>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>申报——通用申报</title>
		<script language="javascript" type="text/javascript"
			src="../../swordweb/core/jsimport/Sword.js"></script>
		<script type="text/javascript" src="/gt3_public/cacheindex.js"></script>
	</head>
	<body>
	<!-- 缓存 -->
	<div style="position:absolute;top:0;left:-20" id="_persist_flash_wrap">
	<center>
			<object id="_persist_flash" name="_persist_flash" width="1" height="1"  classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" >
						<param name="movie" value="/swordweb/widgets/SwordClientCache/swordcache.swf"></param>
						<param name="allowFullScreen" value="true"></param>
						 <param name="allowscriptaccess" value="always"></param>
						<param name="quality" value="high" />
						<param name="flashvars" value="autostart=true" />
					     <embed  id="ex_persist_flash" src="/swordweb/widgets/SwordClientCache/swordcache.swf"  type="application/x-shockwave-flash" width="1" height="1" allowscriptaccess="always" quality="high" flashvars="autostart=true"></embed>
			</object>
			<div style="display:none;font-size:30px;" id="_persist_flash_text">为了系统使用更顺畅，请点击【允许】按钮。</div>
	</center>
	</div>
	<!-- 缓存 -->
		<div class="wrapper" style="width:100%" caption="通用申报">
			<div sword='PageInit' onFinish="init();"></div> 
			<div sword='SwordToolBar' name='fxmtysbToolBar' style="width: 100%" showType="mini" id="sbToolBarNoTrees">
				<div name="save" type="save" caption="申报" quickKey="Ctrl+S" enabled='false' onclick="declare();"></div> 
				<div name="print" type="print" caption="打印" quickKey="Ctrl+P" enabled='false' onclick="printhtm();"></div> 
				<div name="reset" type="refresh" caption="重置" quickKey="Ctrl+R" enabled='true' onclick="reset();"></div> 
				<div name="printHz" type="print" caption="打印回执" quickKey="Ctrl+Y" enabled='false'onclick="printHz();"></div> 
				
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


			<div sword="SwordForm" name="nsrxxForm" caption="纳税人基本信息"
				panel="true" userdefine="true" vType="fldiv">
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col style="width: 23%"></col>
						<col style="width: 16%"></col>
						<col style="width: 10%"></col>
						<col style="width: 23%"></col>
						<col style="width: 13%"></col>
						<col style="width: 15%"></col>
					</colgroup>
					<tr>
						<th style="text-align: right;">
							<span class="red">*</span>纳税人识别号
						</th>
						<td>
							<div name="nsrsbh" type="text" maxlength="20"
								rule="customFunction;nsrsbhCheck()_must" disable="true" onkeyup="queryNsrxx()"></div>
						</td>
						<th style="text-align: right;">
							<span class="red">*</span>纳税人名称
						</th>
						<td>
							<div name="nsrmc" type="text" rule="must" disable="true"></div>
						</td>
						<th style="text-align: right;">
							<span class="red">*</span>申报类型
						</th>
						<td>
							<div name="sbsxDm1" type="select" rule="must" defValue="11"
								onChange="changeSblx();" disable="true">
								<div code="11" caption="正常申报"></div>
								<div code="21" caption="纳税人自行补正"></div>
							</div>
						</td>
					</tr>
					<tr>
						<th>
							<span class="red">*</span>申报日期
						</th>
						<td>
							<div name="sbrq1" type="date" disable="true"  rule="must" returnRealValue="true" onChange="changeSbrq();">
							</div>
						</td>
						<th>
							<span class="red">*</span>税款所属期起
						</th>
						<td>
							<div name="skssqq" type="date" rule="must" showOptions="true,true,false,false,false,false" dateControl="minDay" returnRealValue="true" onChange="changeSsqq();"></div>
						</td>
						<th>
							<span class="red">*</span>税款所属期止
						</th>
						<td>
							<div name="skssqz" type="date" rule="must" showOptions="true,true,false,false,false,false" dateControl="maxDay" returnRealValue="true" onChange="changeSsqz();"></div>
						</td> 
					</tr>
					<tr>
						<th>
							其他个人出租不动产租金是否分摊
						</th>
						<td colspan="2">
							<div name="qtgrczbdczjsfft" type="select" dataName="DM_GY_SFBZ" onChange="changesfft()" defValue="N">
							</div>
						</td>
						<th>
							其他个人出租不动产租赁期起
						</th>
						<td colspan="2">
							<div name="qtgrczbdczlqq" type="date"   showOptions="true,true,false,false,false,false" dateControl="minDay" returnRealValue="true" onChange="changezlq();"></div>
						</td>
					</tr>
					<tr>
						<th>
							其他个人出租不动产租赁期止
						</th>
						<td colspan="2">
							<div name="qtgrczbdczlqz" type="date"   showOptions="true,true,false,false,false,false" dateControl="maxDay" returnRealValue="true" onChange="changezlq();">
							</div>
						</td>
						<th>
							其他个人出租不动产分摊后月租金收入
						</th>
						<td colspan="2">
							<div name="qtgrczbdcfthyzjsr" type="text" disable="true"></div>
						</td>
					</tr>
					<tr id="zrrTR1" style="display: none;">
						<th>
							<span class="red">*</span>行业
						</th>
						<td>
							<div name="hyDm" type="pulltree" treename='DM_GY_HY' selectrule="leaf">
							</div>
						</td>
						<th>
							<span class="red">*</span>行政区划
						</th>
						<td>
							<div name="xzqhszDm" type="pulltree" selectrule="leaf" popdisplay="{code}|{caption}" selectRealKey="code"
								inputWidth="100%" width="300px" onSelectChange="changeXzqh();"></div>
						</td>
						<th>
							<span class="red">*</span>街道乡镇
						</th>
						<td>
							<div name="jdxzDm" type="select" dataname="DM_GY_JDXZ" dataFilter="jdxzFilter();" popdisplay="{code}|{caption}" edit="true" ></div>
						</td>
					</tr>
					<tr id="zrrTR2" style="display: none;">
						<th>
							<span class="red">*</span>税务机关
						</th>
						<td>
							<div name="zgswskfjDm" type="pulltree" treename='zgswskfjDm' width="300px" onNodeClick="changeZgswskfjDm('nsrxxForm','zgswskfjDm');">
							</div>
						</td>
						<th colspan="4"></th>
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



			<div sword='SwordGrid' name="skxxGrid" caption="申报表信息" checkMoudle="false" fenye="false" showConsole="true"
             dataX="100%" dataY="300" scrollX="190%" showHJ="true" autoHeight="false" dragWidth="true"
             onBeforeCreateRow="beforeCreateRow();" onAfterInitData="afterInitGrid();"> 
                <div name="xz"  isHjLabel="true" type="checkbox" x="2%" onclick="getdelete();" hjnum="2"></div>
                <div name="xh" type="rowNum" show="false"></div>
                <div name="zfsbz" caption="主副税标志" type="text" show="false" noView="true"></div>
                <div name="rdzsuuid" caption="认定主税UUID" type="text" show="false" noView="true"></div>
                <div name="rdpzuuid" caption="认定凭证UUID" type="text" show="false" noView="true"></div>
                <div name="xmxh" caption="项目序号" type="text" show="false" noView="true"></div>
				<div name="sybzDm1" caption="税源标志" type="select" x="3%" popdisplay="{code}|{caption}"  dataName='DM_SB_SYBZ'  popWidth='320px' disable="true" ></div>
				<div name="sybh1" caption="税源编号" type"text" x="3.5%"  disable="true"></div> 
				<div name="syzldz" caption="税源坐落" type="text" x="4.5%" disable="true"></div> 
				<div name="zsxmDm" caption="征收项目" type="select" x="5%" rule="must" popdisplay="{code}|{caption}" popwidth="300px" dataName='DM_GY_ZSXM' dataFilter="zsxmFilter()" onChange="changeZsxm();"></div>
				<div name="zspmDm" caption="征收品目" type="select" x="5%" rule="must" popdisplay="{code}|{caption}" popwidth="300px" dataName='DM_GY_ZSPM_Y' dataFilter="zspmFilter()" parent="zsxmDm" onChange="changeZspm();"></div>
				<div name="zszmDm" caption="征收子目" type="select" x="5%" popdisplay="{code}|{caption}" popwidth="300px" dataName='DM_GY_ZSZM' dataFilter="zszmFilter()" parent="zspmDm" onChange="changeZszm();"></div>
				<div name="sfkssqq" caption="税款所属期起" type="date" x="5%" rule="must" returnRealValue="true" onChange="changeSSq()"></div>
				<div name="sfkssqz" caption="税款所属期止" type="date"x="5%" rule="must" returnRealValue="true" onChange="changeSSq()"></div>
				<div name="ysx" caption="应税项(1)" type="text" css="text-align:right" format="{'type':'number','format':'#,####0.0000'}" x="5%" rule="must_contrast;>=0_number(18,4)" maxlength="20" onBlur="changeYsx();"></div>
				<div name="jcx" caption="减除项(2)" type="text" css="text-align:right" format="{'type':'number','format':'#,##0.00'}" x="4%" rule="contrast;>=0" hj="true" maxlength="20" onBlur="changeJcx();"></div>
				<div name="yssdl" caption="应税所得率(3)" type="text" css="text-align:right" format="{'type':'number','format':'#,######0.000000'}" x="4%" disable="true"></div>
				<div name="jsfyj" caption="计税(费)依据(4=(1-2)*3)" type="text" rule="must" css="text-align:right" format="{'type':'number','format':'#,##0.00'}" x="6%"  hj="true" disable="true"></div>
				<div name="sflhdwse" caption="税(费)率或单位税额(5)" type="text" css="text-align:right" disable="true" rule="must" format="{'type':'number','format':'#,######0.000000'}" x="6%" maxlength="22"></div>
				<div name="sskcs" caption="速算扣除数(6)" type="text" rule="number(18,2)" disable="true" css="text-align:right" format="{'type':'number','format':'#,##0.00'}" x="4%" maxlength="20"></div>
				<div name="bqynsfe" caption="本期应纳税(费)额(7=4*5-6)" type="text" rule="must" css="text-align:right" format="{'type':'number','format':'#,##0.00'}" x="7%" disable="true" hj="true" ></div>
				<div name="bqjmsfe" caption="本期减免税(费)额(8)" type='text'  rule="contrast;>=0_must" css="text-align:right" format="{'type':'number','format':'#,##0.00'}" defValue="0.00" x="5%" maxlength="20" onBlur="changeJmse();" hj="true" ></div>
				<div name="ssjmxzDm" caption="减免性质" type="select"  dataname="jmxzList" popdisplay="{code}|{caption}"  dataFilter="jmxzFilter()"  onChange="changeSsjmxzDm();"  x="5%" ></div>
				<div name="bqyjsfe" caption="本期已缴税（费）额(9)" type="text" rule="contrast;>=0_number(18,2)" css="text-align:right" format="{'type':'number','format':'#,##0.00'}" x="5%" onBlur="changeYjse();" hj="true"></div>
				<div name="bqybtsfe" caption="本期应补（退）税（费）额(10=7-8-9)" type="text" css="text-align:right" disable="true" format="{'type':'number','format':'#,##0.00'}" x="9%" hj="true"></div>  
				<div name="yhpzuuid" caption="优惠凭证" show="false" noView="true" type="text"></div>
				<div name="yhsl" caption="优惠税率" show="false" noView="true" type="text"></div>
				<div name="yhje" caption="优惠金额" show="false" noView="true" type="text"></div>
				<div name="yhjmse" caption="优惠减免税额" show="false" noView="true" type="text"></div>
				<div name="ssjmxzDm2" caption="税收减免性质" show="false" noView="true" type="text"></div>
				<div name="qs" caption="期数" show="false" noView="true" type="text"></div>
				<div name="yxqq" caption="有效期起" show="false" noView="true" type="text"></div>
				<div name="yxqz" caption="有效期止" show="false" noView="true" type="text"></div>
				<div name="sbqxDm" caption="申报期限代码" show="false" noView="true" type="text"></div>
				<div name="jkqxDm" caption="缴款期限代码" show="false" noView="true" type="text"></div>
				<div name="nsqxDm" caption="纳税期限代码" show="false" noView="true" type="text"></div>
				<div name="slbz" caption="获取税率标志" show="false" noView="true" type="text"></div>
				<div name="jcl" caption="减除率" show="false" noView="true" type="text"></div>
				<div name="nzjsr" caption="年租金收入" show="false" noView="true" type="text"></div>
				<div name="wdqzdbz" caption="未达起征点标志" show="false" noView="true" type="text"></div>
				<div name="jsbz" caption="计税标志" show="false" noView="true" type="text"></div>
				<div name="ysbse" caption="已申报税额" show="false" noView="true" type="text"></div>
				<div name="dqjsFlag" caption="是否当期计税标志" show="false" noView="true" type="text"></div>
				<div name="zsZsxmDm" caption="主税征收项目" show="false" noView="true" type="text"></div>
				<div name="zfBtn" caption=""  type ="a" x="2%"  disable="true" onClick="openSbzf();" ></div> 
				<div name="getSzxxBtn" caption="获取税种信息" console="button" disable="true" onclick="setSkxx();"></div>
				<div name='insertBtn' caption='增行' console="button" onClick="insert();" autoInsert="true"></div>
				<div name ='deleteBtn' caption="删行" console="button" onclick="deleteRows();"></div>
				<div name= 'xmtq' caption="项目提取" console="button" onclick="openSyxx();"></div>
			</div>
			<div sword="SwordForm" name="slxxForm" caption="受理信息"
				panel="true" userdefine="true" style="display:none">
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col style="width: 10%"></col>
						<col style="width: 15%"></col>
						<col style="width: 10%"></col>
						<col style="width: 15%"></col>
						<col style="width: 10%"></col>
						<col style="width: 15%"></col>
						<col style="width: 10%"></col>
						<col style="width: 15%"></col>
					</colgroup>
					<tr>
						<th style="text-align: right;">
							办税人
						</th>
						<td>
							<div name="bsr" type="text"></div>
						</td>
						<th style="text-align: right;">
							<span class="red">*</span>受理人
						</th>
						<td>
							<div name="slr" type="text" rule="must" maxlength="30"></div>
						</td>
						<th style="text-align: right;">
							<span class="red">*</span>受理日期
						</th>
						<td>
							<div name="slrq" type="date" rule="must" returnRealValue="true"></div>
						</td>
						<th style="text-align: right;">
							<span class="red">*</span>受理税务机关
						</th>
						<td>
							<div name="slswjg" type="text" rule="must" disable="true"></div>
						</td>
					</tr>
				</table>
			</div>
		</div>  
			<span class="red" id="sbgnxts"><font color="red">
功能小贴士：<br>
1.点击"获取税种信息"查询税务核定的税种信息到申报页面，录入申报表信息完成申报；<br>
2.如果对于获取的税费种认定信息存在疑问，请通过"税（费）种查询"查看当前税务机关核定的有效的认定信息。如果存在疑问请与税务机关联系；<br>
3.对于申报错误，如果尚未扣款，可以通过"申报作废"查询出申报进行申报作废；如果已经完成扣款，需要到大厅进行申报错误更正，更正时，需要提供全量的申报表；<br>
4.有专门申报表的税（费）种，不适用于通用申报功能，须到各税（费）种的申报模块进行申报；<br>
5.外来（含跨区）报验的纳税人，在进行项目申报时，可以使用通用申报。
			</font></span>
		<div id="SwordCacheData" query="[{ T:'DM_GY_ZSXM'},{T:'DM_GY_SFBZ'},
		{ T:'DM_SB_SYBZ','WN':'sybzDm1','DM':'SYBZ_DM_1','MC':'SYBZMC_1'}]"
		queryTree="[{T:'DM_GY_HY','PDM':'SJHY_DM','DM':'HY_DM','MC':'HYMC','WN':'hyDm','load':'lazy'}]"></div> 
		
		 <script language='javascript' type='text/javascript' src='/gy/gy011/gyPrint.js'></script>
		<script language='javascript' type='text/javascript' src='../../sb/sb175/sb175_fxmtysb.js'></script> 
		<script language='javascript' type='text/javascript'  src='/gy/gy002/queryNsrxxByNsrsbhComm.js'></script>
		<script language='javascript' type='text/javascript' src='../../sb/gy/sb_gy.js'></script>
		<script language='javascript' type='text/javascript' src='../../sb/gy/sb_constants.js'></script>
	</body>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"data":[],"sword":"SwordSelect","dataName":"jmxzList"},{"data":[{"caption":"南宁市西乡塘区国家税务局税源管理二股","code":"14501070500","pcode":"14501070000"}],"dataType":"json","sword":"SwordTree","name":"zgswskfjDm"},{"data":[{"caption":"西乡塘区","pcode":"450100","code":"450107"}],"dataType":"json","sword":"SwordTree","name":"xzqhszDm"},{"data":[{"caption":"西乡塘区","code":"450107000","xzqhDm":"450107"},{"caption":"衡阳街道办事处","code":"450107001","xzqhDm":"450107"},{"caption":"北湖街道办事处","code":"450107002","xzqhDm":"450107"},{"caption":"西乡塘街道办事处","code":"450107003","xzqhDm":"450107"},{"caption":"安吉街道办事处","code":"450107004","xzqhDm":"450107"},{"caption":"华强街道办事处","code":"450107005","xzqhDm":"450107"},{"caption":"新阳街道办事处","code":"450107006","xzqhDm":"450107"},{"caption":"上尧街道办事处","code":"450107007","xzqhDm":"450107"},{"caption":"安宁街道办事处","code":"450107008","xzqhDm":"450107"},{"caption":"石埠街道办事处","code":"450107009","xzqhDm":"450107"},{"caption":"心圩街道办事处","code":"450107010","xzqhDm":"450107"},{"caption":"金陵镇","code":"450107100","xzqhDm":"450107"},{"caption":"双定镇","code":"450107101","xzqhDm":"450107"},{"caption":"坛洛镇","code":"450107105","xzqhDm":"450107"},{"caption":"那龙矿务局","code":"450107450","xzqhDm":"450107"},{"caption":"金光农场","code":"450107453","xzqhDm":"450107"},{"caption":"高新技术开发区管委会","code":"450107454","xzqhDm":"450107"}],"sword":"SwordSelect","dataName":"DM_GY_JDXZ"},{"name":"nsrxxMap","data":{"bsryddh":{"value":"15778803036"},"tzze":{"value":"2000000.0"},"zgswjDm":{"value":"14501070000"},"cyrs":{"value":"3.0"},"gszgswjDm":{"value":""},"cwfzrxm":{"value":"邓凯玲"},"wz":{"value":""},"zcdlxdh":{"value":"13617873356"},"lsswdjyxqz":{"value":""},"djxh":{"value":"10114501010114170071"},"kyslrq":{"value":"2016-08-30 00:00:00"},"zzjglxDm":{"value":"1"},"bzfsDm":{"value":"3"},"bsrdzxx":{"value":"1918488842@qq.com"},"lsswdjyxqq":{"value":""},"yhsjnfsDm":{"value":""},"zsxmcxbzDm":{"value":""},"ssdabh":{"value":"91450107MA5KE0EQ2B"},"hyDm":{"value":"5164"},"nsrfyhyxxList":{"value":"[\"{\\\"sjgsdq\\\":\\\"\\\",\\\"lrrDm\\\":\\\"\\\",\\\"hyDm\\\":\\\"7240\\\",\\\"xh\\\":\\\"1\\\",\\\"yxbz\\\":\\\"Y\\\",\\\"djxh\\\":\\\"10114501010114170071\\\",\\\"fyhyuuid\\\":\\\"161D173D333DB7DC7A50EA5B75D345F3\\\",\\\"xgrDm\\\":\\\"\\\",\\\"xgrq\\\":\\\"\\\",\\\"lrrq\\\":\\\"\\\"}\"]"},"zzlxDm":{"value":"80"},"scjyqxq":{"value":"2016-08-30 00:00:00"},"fddbrsfzjhm":{"value":"412727199005085478"},"cwfzryddh":{"value":"15778803036"},"fddbrsfzjlxDm":{"value":"201"},"kzztdjlxDm":{"value":"1110"},"gjhdqszDm":{"value":""},"gytzbl":{"value":"0.0"},"gdgrs":{"value":"0.0"},"scjydlxdh":{"value":"13617873356"},"shxydm":{"value":"91450107MA5KE0EQ2B"},"fjmqybz":{"value":"N"},"scjydzxzqhszDm":{"value":"450107"},"scjyqxz":{"value":"2066-08-29 00:00:00"},"bsrxm":{"value":"邓凯玲"},"bsrsfzjzlDm":{"value":"201"},"gdghlxDm":{"value":"1"},"cwfzrdzxx":{"value":"1918488842@qq.com"},"nsrbm":{"value":""},"pzsljglxDm":{"value":"01"},"swdlrnsrsbh":{"value":""},"zcdzxzqhszmc":{"value":"西乡塘区"},"kjzdzzDm":{"value":"102"},"nsrzgswjgxxList":{"value":"[\"{\\\"ssglyDm\\\":\\\"14501070052\\\",\\\"zgswjDm\\\":\\\"14501070000\\\",\\\"zgswjguuid\\\":\\\"\\\",\\\"sjgsdq\\\":\\\"\\\",\\\"lrrDm\\\":\\\"\\\",\\\"yxbz\\\":\\\"\\\",\\\"djxh\\\":\\\"\\\",\\\"zgswskfjDm\\\":\\\"14501070500\\\",\\\"xgrDm\\\":\\\"\\\",\\\"xgrq\\\":\\\"\\\",\\\"lrrq\\\":\\\"\\\",\\\"zgswjgtssxDm\\\":\\\"\\\"}\"]"},"lrrDm":{"value":"14501940056"},"gszgswskfjDm":{"value":""},"jyfw":{"value":"批发、零售：金属材料、矿产品、电子产品、通信设备、安防监控设备（以上项目除国家专控产品）、钢材、建筑材料（除危险化学品及木材）、机械设备、管材及配件、五金交电、水暖器材、机电产品、化妆品、日用百货、服装鞋帽、皮革制品、计算机、劳保用品、体育器材、酒店用品；庆典活动策划、礼仪服务、文化艺术交流活动策划、会展服务（以上项目除国家有专项规定外）；设计、制作、代理、发布国内各类广告。"},"wcjyhdssglzmbh":{"value":""},"djzclxmc":{"value":"私营有限责任公司"},"pzzmhwjh":{"value":""},"djjgmc":{"value":""},"pzsljgmc":{"value":""},"zcdz":{"value":"南宁市西乡塘区人民西路25号融昌邕江银座3号楼1单元1-2103号"},"zgswjmc":{"value":"南宁市西乡塘区国家税务局"},"zgswskfjDm":{"value":"14501070500"},"nsrztDm":{"value":"03"},"hhrs":{"value":"0.0"},"hjszd":{"value":""},"fddbrdzxx":{"value":""},"zrrtzbl":{"value":"100.0"},"ssglyDm":{"value":"14501070052"},"gdslxDm":{"value":"1"},"scjydyzbm":{"value":"530000"},"swdjblbz":{"value":"Y"},"nsrsbh":{"value":"91450107MA5KE0EQ2B"},"bsrgddh":{"value":"3321167"},"jdxzDm":{"value":"450107000"},"djjgDm":{"value":"14501940800"},"cwfzrsfzjhm":{"value":"450821199405073022"},"scjydz":{"value":"南宁市西乡塘区人民西路25号融昌邕江银座3号楼1单元1-2103号"},"kqccsztdjbz":{"value":"N"},"ynsrsbh":{"value":"91450107MA5KE0EQ2B"},"wjcyrs":{"value":"0.0"},"cwfzrsfzjzlDm":{"value":"201"},"nsrmc":{"value":"广西龙森胜贸易有限公司"},"swdlrlxdh":{"value":""},"fddbrgddh":{"value":"3321167"},"djrq":{"value":"2016-09-18 00:00:00"},"bsrsfzjhm":{"value":"450821199405073022"},"zzhm":{"value":"91450107MA5KE0EQ2B"},"djzclxDm":{"value":"173"},"whsyjsfjfxxdjbz":{"value":"Y"},"fddbrsfzjlxmc":{"value":"居民身份证"},"zfjglxDm":{"value":"0"},"fddbryddh":{"value":"13617873356"},"nsrztmc":{"value":"正常"},"hsfsDm":{"value":"11"},"nsrywmc":{"value":""},"zcxs":{"value":""},"wztzbl":{"value":"0.0"},"pzsljgDm":{"value":"450100000"},"zgswskfjmc":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"dwlsgxDm":{"value":"51"},"scjydzxzqhszmc":{"value":"西乡塘区"},"zzsjylb":{"value":"01,08"},"zzsqylxDm":{"value":"9"},"hymc":{"value":"金属及金属矿批发"},"cwfzrgddh":{"value":"3321167"},"zczb":{"value":"2000000.0"},"kzztdjlxmc":{"value":"单位纳税人税务登记"},"swdlrmc":{"value":""},"gsdjxh":{"value":""},"lrrq":{"value":"2016-09-18 15:39:06"},"ggrs":{"value":"0.0"},"fddbrxm":{"value":"刘士鹏"},"jdxzmc":{"value":"西乡塘区"},"zcdyzbm":{"value":"530000"},"gykglxDm":{"value":""},"ssglymc":{"value":""},"ygznsrlxDm":{"value":"22"},"zzjgDm":{"value":"MA5KE0EQ2"},"pgjgDm":{"value":""},"swdlrdzxx":{"value":""},"zcdzxzqhszDm":{"value":"450107"}},"sword":"SwordForm"},{"trs":[{"status":null,"tds":{"zsxmDm":{"value":"30221"},"xh":{"value":""},"sybzDm1":{"value":""},"wdqzdbz":{"value":""},"bqynsfe":{"value":"0.0"},"zszmDm":{"value":"code,3022104001450001|caption,企业类纳税人水利建设基金"},"sflhdwse":{"value":"0.0010"},"bqybtsfe":{"value":"0.0"},"qtgrczbdcfthyzjsr":{"value":""},"rdpzuuid":{"value":""},"rdzsuuid":{"value":""},"sfkssqq":{"value":"2017-11-01"},"jcx":{"value":""},"ysbse":{"value":""},"zspmDm":{"value":"code,302210400|caption,地方水利建设基金"},"ysx":{"value":"0.0"},"syzldz":{"value":""},"bqjmsfe":{"value":"0.0"},"ssjmxzDm":{"value":""},"yssdl":{"value":""},"qtgrczbdczlqz":{"value":""},"sfkssqz":{"value":"2017-11-30"},"qtgrczbdczjsfft":{"value":""},"bqyjsfe":{"value":"0.0"},"sskcs":{"value":"0.0"},"sybh1":{"value":""},"qtgrczbdczlqq":{"value":""},"jsfyj":{"value":"0.0"}}}],"name":"skxxGrid","sword":"SwordGrid"},{"trs":[{"status":null,"tds":{"zsxmDm":{"value":"30221"},"xh":{"value":""},"sybzDm1":{"value":""},"wdqzdbz":{"value":""},"bqynsfe":{"value":"0.0"},"zszmDm":{"value":"code,3022104001450001|caption,企业类纳税人水利建设基金"},"sflhdwse":{"value":"0.0010"},"bqybtsfe":{"value":"0.0"},"qtgrczbdcfthyzjsr":{"value":""},"rdpzuuid":{"value":""},"rdzsuuid":{"value":""},"sfkssqq":{"value":"2017-11-01"},"jcx":{"value":""},"ysbse":{"value":""},"zspmDm":{"value":"code,302210400|caption,地方水利建设基金"},"ysx":{"value":"0.0"},"syzldz":{"value":""},"bqjmsfe":{"value":"0.0"},"ssjmxzDm":{"value":""},"yssdl":{"value":""},"qtgrczbdczlqz":{"value":""},"sfkssqz":{"value":"2017-11-30"},"qtgrczbdczjsfft":{"value":""},"bqyjsfe":{"value":"0.0"},"sskcs":{"value":"0.0"},"sybh1":{"value":""},"qtgrczbdczlqq":{"value":""},"jsfyj":{"value":"0.0"}}}],"name":"sbxxList","sword":"SwordGrid"},{"name":"nsrxxForm","data":{"skssqq":{"value":"2017-11-01"},"hyDm":{"value":""},"sbsxDm1":{"value":"11"},"nsrsbh":{"value":"91450107MA5KE0EQ2B"},"nsrmc":{"value":"广西龙森胜贸易有限公司"},"sbrq1":{"value":"2017-12-01"},"bsr":{"value":""},"qtgrczbdcfthyzjsr":{"value":""},"qtgrczbdczlqz":{"value":""},"qtgrczbdczjsfft":{"value":""},"jdxzDm":{"value":""},"zgswskfjDm":{"value":""},"qtgrczbdczlqq":{"value":""},"xzqhszDm":{"value":""},"skssqz":{"value":"2017-11-30"}},"sword":"SwordForm"},{"trs":[],"name":"sbbList","sword":"SwordGrid"},{"name":"slxxForm","data":{"slrq":{"value":"2017-12-05"},"slr":{"value":"WSSB"},"slswjg":{"value":"南宁市西乡塘区国家税务局税源管理二股"}},"sword":"SwordForm"},{"name":"fjsxx","value":"10109:1,10302@103020301#103020302#103020303:1,10301@103021601#103021602#103021603#103022102#103019902:1,10301@103021701#103021702:0,30199@301990200:0,30221:0,30446:0,30217:0,30217:0,30221:0,30216:1,30203:1","type":""},{"name":"today","value":"2017-12-05","type":""},{"name":"skssqq","value":"2017-11-01","type":""},{"name":"skssqz","value":"2017-11-30","type":""},{"name":"swryMc","value":"WSSB","type":""},{"name":"yzpzzlDm","value":"BDA0610100","type":""},{"name":"cwgzbz","value":"cwgzbz","type":""},{"name":"djxh","value":"10114501010114170071","type":""},{"name":"pzxh","value":"10014517000034798372","type":""},{"name":"sbuuid","value":"AA03C4A8378ADBCA7E9AACEF58808C14","type":""},{"trs":[],"name":"xmxxList","sword":"SwordGrid"},{"name":"lcswsxDm","value":"LCSXA061001019","type":""},{"name":"cxbj","value":null,"type":""},{"name":"sfxstqxm","value":"Y","type":""},{"name":"ygzsxsj","value":"2016-05-01","type":""},{"name":"fjsxmsbbz","value":"N","type":""},{"name":"fjszspms","value":"302030100,302160100,101090203,101090102,101090202,101090301,101090201,101090103,302030200,304460201,101090303,302160200,101090101,302030300,302160300,101090302","type":""},{"name":"htmbfzkg","value":"Y","type":""},{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"0c8c32049f554e75b0b0644d0bf4f55b","type":""}]}'></div>

