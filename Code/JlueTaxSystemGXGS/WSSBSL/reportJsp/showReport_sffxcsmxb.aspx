<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showReport_sffxcsmxb.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showReport_sffxcsmxb" %>

<!DOCTYPE html>










 
 
 

<html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link type="text/css" href="/WSSBSL/css/report.css" rel="stylesheet"/>
<script type="text/javascript" src="/WSSBSL/easyUI/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="/WSSBSL/js/common/common.js"></script>
<script type="text/javascript" src="/WSSBSL/js/common/check.js"></script>
<script type="text/javascript" src="/WSSBSL/js/page/report/reportCheck.js"></script>
<script type="text/javascript" src="/WSSBSL/js/page/report/reportCheckOnClick.js"></script>
<script type="text/javascript" src="/WSSBSL/js/page/report/reportPopSelect.js"></script>
<script type="text/javascript" src="/WSSBSL/js/page/report/reportTdPop.js"></script>
<script type="text/javascript" src="/WSSBSL/js/page/report/reportDataCheck.js"></script>
<script type="text/javascript" src="/WSSBSL/js/page/report/showReport.js"></script>

<body topmargin=0 leftmargin=0 rightmargin=0 bottomMargin=0>

<input type="hidden" value="raq=/zzs2013Ybnsr/sffxcsmxb.raq;nsrsbh=450100399111430;sbzt=0;skssq=20171111;ssqq=2017-11-01;ssqz=2017-11-30;isTbBz=0" id="myParams" />
<iframe name="submitFrame" src="" style="display:none"></iframe> 
<table id="rpt" width="100%"><tr><td align="center">
		<script language=javascript src="/WSSBSL/Finput.js" charset="UTF-8">
</script>
<script language=javascript src="/WSSBSL/FlineInput.js" charset="UTF-8">
</script>
<script language=javascript>
	var report1_validOnSubmit = true;
</script>
<div id="div_report1">
<script language=javascript src="/WSSBSL/Frqdialog.js" charset="UTF-8">
</script>
<script language=javascript>
	function report1_getCurrPage() {
		return 1;
	}
	function report1_getTotalPage() {
		return 1;
	}
	var report1_cachedId = "10_1_1_176_8080_41507";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2Fzzs2013Ybnsr%2Fsffxcsmxb.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15123563588199528140644&cachedId=10_1_1_176_8080_41507&t_i_m_e=1512356358851" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2Fzzs2013Ybnsr%2Fsffxcsmxb.raq&columns=0&srcType=file&reportParamsId=15123563588199528140644&cachedId=10_1_1_176_8080_41507&t_i_m_e=1512356358851" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2Fzzs2013Ybnsr%2Fsffxcsmxb.raq&columns=0&srcType=file&reportParamsId=15123563588199528140644&cachedId=10_1_1_176_8080_41507&t_i_m_e=1512356358851";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2Fzzs2013Ybnsr%2Fsffxcsmxb.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15123563588199528140644&cachedId=10_1_1_176_8080_41507&t_i_m_e=1512356358851";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2Fzzs2013Ybnsr%2Fsffxcsmxb.raq&srcType=file&reportParamsId=15123563588199528140644&cachedId=10_1_1_176_8080_41507&t_i_m_e=1512356358851" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2Fzzs2013Ybnsr%2Fsffxcsmxb.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15123563588199528140644&cachedId=10_1_1_176_8080_41507&t_i_m_e=1512356358851";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2Fzzs2013Ybnsr%2Fsffxcsmxb.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15123563588199528140644&cachedId=10_1_1_176_8080_41507&t_i_m_e=1512356358851";
	}
</script>
<table id=report1_reportTbl style="position:relative;"><tr><td>
<div id=report1_reportDiv style="display:inline-block;text-align:left;position:relative;">
<table>
	<tr><td style="background-color:">
		<div noWrap style="font-family:宋体;font-size:13px;color:;">
<span style="cursor:pointer" onclick="_insertRow( report1 )"></span>&nbsp;<span style="cursor:pointer" onclick="_appendRow( report1 )"></span>&nbsp;<span style="cursor:pointer" onclick="_deleteRow( report1 )"></span>&nbsp;<span style="cursor:pointer" onclick="_submitRowInput( report1 )"></span>		</div></td></tr></table>
<script language=javascript>
	var report1oldstatus = "";
	function report1457158over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1457158out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_4 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:center;vertical-align:middle;font-family:宋体;font-size:16px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_12 { text-align:center;vertical-align:middle;font-family:宋体;font-size:16px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1457158out()" onmouseover="report1457158over()" rowCount=9 cols=18 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" isli=true nextRowNo=10 ndr="1,2,3,4,5,6,7,9" style="width:1227px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:118px;"></col>
		<col style="width:71px;"></col>
		<col style="width:71px;"></col>
		<col style="width:61px;"></col>
		<col style="width:65px;"></col>
		<col style="width:71px;"></col>
		<col style="width:60px;"></col>
		<col style="width:71px;"></col>
		<col style="width:71px;"></col>
		<col style="width:71px;"></col>
		<col style="width:71px;"></col>
		<col style="width:71px;"></col>
		<col style="width:71px;"></col>
		<col style="width:71px;"></col>
		<col style="width:71px;"></col>
		<col style="width:71px;"></col>
		<col style="width:71px;"></col>
	</colgroup>
	<tr rn="1" id=report1_row1 status="0" pid="report1" height=50 style="height:50px;">
		<td colSpan=17 id="report1_A1" colNo=1 sc="A1" value='营改增税负分析测算明细表' onclick="_hideEditor()" class="report1_12">营改增税负分析测算明细表</td>
		<td id="report1_R1" colNo=18 bkj="true" sc="R1" value='' onclick="_hideEditor()" class="report1_8" style="display:none;"></td>
	</tr>
	<tr rn="2" id=report1_row2 status="0" pid="report1" height=31 style="height:31px;">
		<td colSpan=2 id="report1_A2" colNo=1 sc="A2" value='纳税人识别号：' onclick="_hideEditor()" class="report1_9">纳税人识别号：</td>
		<td colSpan=8 id="report1_C2" colNo=3 sc="C2" value='' onclick="_hideEditor()" class="report1_6"></td>
		<td colSpan=3 id="report1_K2" colNo=11 sc="K2" value='填表日期：' onclick="_hideEditor()" class="report1_9">填表日期：</td>
		<td colSpan=2 id="report1_N2" colNo=14 sc="N2" value='' onclick="_hideEditor()" class="report1_7"></td>
		<td colSpan=2 id="report1_P2" colNo=16 sc="P2" value='金额单位:元至角分' onclick="_hideEditor()" class="report1_7">金额单位:元至角分</td>
		<td id="report1_R2" colNo=18 bkj="true" sc="R2" value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="3" id=report1_row3 status="0" pid="report1" height=29 style="height:29px;">
		<td colSpan=2 id="report1_A3" colNo=1 sc="A3" value='纳税人名称：' onclick="_hideEditor()" class="report1_9">纳税人名称：</td>
		<td colSpan=8 id="report1_C3" colNo=3 sc="C3" value='' onclick="_hideEditor()" class="report1_6"></td>
		<td colSpan=2 id="report1_K3" colNo=11 sc="K3" value='所属时期：' onclick="_hideEditor()" class="report1_9">所属时期：</td>
		<td colSpan=2 id="report1_M3" colNo=13 sc="M3" value='' onclick="_hideEditor()" class="report1_7"></td>
		<td id="report1_O3" colNo=15 sc="O3" value='至' onclick="_hideEditor()" class="report1_7">至</td>
		<td colSpan=2 id="report1_P3" colNo=16 sc="P3" value='' onclick="_hideEditor()" class="report1_7"></td>
		<td id="report1_R3" colNo=18 bkj="true" sc="R3" value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="4" id=report1_row4 status="0" pid="report1" height=38 style="height:38px;">
		<td rowSpan=3 colSpan=3 id="report1_A4" colNo=1 sc="A4" value='项目及栏次' onclick="_hideEditor()" class="report1_3">项目及栏次</td>
		<td colSpan=7 id="report1_D4" colNo=4 sc="D4" value='增值税' onclick="_hideEditor()" class="report1_3">增值税</td>
		<td colSpan=7 id="report1_K4" colNo=11 sc="K4" value='营业税' onclick="_hideEditor()" class="report1_3">营业税</td>
		<td id="report1_R4" colNo=18 bkj="true" sc="R4" value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="5" id=report1_row5 status="0" pid="report1" height=34 style="height:34px;">
		<td rowSpan=2 id="report1_D5" colNo=4 sc="D5" value='不含税销售额' onclick="_hideEditor()" class="report1_3">不含税销<br>售额</td>
		<td rowSpan=2 id="report1_E5" colNo=5 sc="E5" value='销项(应纳)税额' onclick="_hideEditor()" class="report1_3">销项(应纳)<br>税额</td>
		<td rowSpan=2 id="report1_F5" colNo=6 sc="F5" value='价税合计' onclick="_hideEditor()" class="report1_3">价税合计</td>
		<td rowSpan=2 id="report1_G5" colNo=7 sc="G5" value='服务、不动产和无形资产扣除项目本期实际扣除金额' onclick="_hideEditor()" class="report1_3">服务、不<br>动产和无<br>形资产扣<br>除项目本<br>期实际扣<br>除金额</td>
		<td colSpan=2 id="report1_H5" colNo=8 sc="H5" value='扣除后' onclick="_hideEditor()" class="report1_3">扣除后</td>
		<td rowSpan=2 id="report1_J5" colNo=10 sc="J5" value='增值税应纳税额（测算）' onclick="_hideEditor()" class="report1_3">增值税应纳<br>税额（测<br>算）</td>
		<td colSpan=5 id="report1_K5" colNo=11 sc="K5" value='原营业税税制下服务、不动产和无形资产差额扣除项目' onclick="_hideEditor()" class="report1_3">原营业税税制下服务、不动产和无形资产差额扣除项目</td>
		<td rowSpan=2 id="report1_P5" colNo=16 sc="P5" value='应税营业额' onclick="_hideEditor()" class="report1_3">应税营业额</td>
		<td rowSpan=2 id="report1_Q5" colNo=17 sc="Q5" value='营业税应纳税额' onclick="_hideEditor()" class="report1_3">营业税应纳<br>税额</td>
		<td id="report1_R5" colNo=18 bkj="true" sc="R5" value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="6" id=report1_row6 status="0" pid="report1" height=40 style="height:40px;">
		<td id="report1_H6" colNo=8 sc="H6" value='含税销售额' onclick="_hideEditor()" class="report1_3">含税销售额</td>
		<td id="report1_I6" colNo=9 sc="I6" value='销项(应纳)税额' onclick="_hideEditor()" class="report1_3">销项(应纳)<br>税额</td>
		<td id="report1_K6" colNo=11 sc="K6" value='期初余额' onclick="_hideEditor()" class="report1_3">期初余额</td>
		<td id="report1_L6" colNo=12 sc="L6" value='本期发生额' onclick="_hideEditor()" class="report1_3">本期发生额</td>
		<td id="report1_M6" colNo=13 sc="M6" value='本期应扣除金额' onclick="_hideEditor()" class="report1_3">本期应扣除<br>金额</td>
		<td id="report1_N6" colNo=14 sc="N6" value='本期实际扣除金额' onclick="_hideEditor()" class="report1_3">本期实际扣<br>除金额</td>
		<td id="report1_O6" colNo=15 sc="O6" value='期末余额' onclick="_hideEditor()" class="report1_3">期末余额</td>
		<td id="report1_R6" colNo=18 bkj="true" sc="R6" value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="7" id=report1_row7 status="0" pid="report1" height=84 style="height:84px;">
		<td id="report1_A7" colNo=1 sc="A7" value='应税项目代码及名称' onclick="_hideEditor()" class="report1_3">应税项目代码及名称</td>
		<td id="report1_B7" colNo=2 sc="B7" value='增值税税率或征收率' onclick="_hideEditor()" class="report1_3">增值税税率<br>或征收率</td>
		<td id="report1_C7" colNo=3 sc="C7" value='营业税税率' onclick="_hideEditor()" class="report1_3">营业税税率</td>
		<td id="report1_D7" colNo=4 sc="D7" value='1' onclick="_hideEditor()" class="report1_3">1</td>
		<td id="report1_E7" colNo=5 sc="E7" value='2=1×增值税税率或征收率' onclick="_hideEditor()" class="report1_3">2=1×增值<br>税税率或征<br>收率</td>
		<td id="report1_F7" colNo=6 sc="F7" value='3=1+2' onclick="_hideEditor()" class="report1_3">3=1+2</td>
		<td id="report1_G7" colNo=7 sc="G7" value='4' onclick="_hideEditor()" class="report1_3">4</td>
		<td id="report1_H7" colNo=8 sc="H7" value='5=3-4' onclick="_hideEditor()" class="report1_3">5=3-4</td>
		<td id="report1_I7" colNo=9 sc="I7" value='6=5÷(100%+增值税税率或征收率)×增值税税率或征收率' onclick="_hideEditor()" class="report1_3">6=5÷(100%+<br>增值税税率<br>或征收率)×<br>增值税税率<br>或征收率</td>
		<td id="report1_J7" colNo=10 sc="J7" value='7' onclick="_hideEditor()" class="report1_3">7</td>
		<td id="report1_K7" colNo=11 sc="K7" value='8' onclick="_hideEditor()" class="report1_3">8</td>
		<td id="report1_L7" colNo=12 sc="L7" value='9' onclick="_hideEditor()" class="report1_3">9</td>
		<td id="report1_M7" colNo=13 sc="M7" value='10=8+9' onclick="_hideEditor()" class="report1_3">10=8+9</td>
		<td id="report1_N7" colNo=14 sc="N7" value='11（11≤3且11≤10）' onclick="_hideEditor()" class="report1_3">11（11≤3且<br>11≤10）</td>
		<td id="report1_O7" colNo=15 sc="O7" value='12=10-11' onclick="_hideEditor()" class="report1_3">12=10-11</td>
		<td id="report1_P7" colNo=16 sc="P7" value='13=3-11' onclick="_hideEditor()" class="report1_3">13=3-11</td>
		<td id="report1_Q7" colNo=17 sc="Q7" value='14=13×营业税税率' onclick="_hideEditor()" class="report1_3">14=13×营业<br>税税率</td>
		<td id="report1_R7" colNo=18 bkj="true" sc="R7" value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="8" id=report1_row8 status="0" isDetail=true did="0|1|8|8|8" isFirst=true drows=1 pid="report1" height=29 style="height:29px;">
		<td id="report1_A8" colNo=1 sc="A8" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="090100,090100|销售不动产建筑物;090200,090200|销售不动产构筑物;010100,010100|铁路运输服务;010201,010201|陆路旅客运输服务;010202,010202|陆路货物运输服务;010300,010300|水路运输服务;010400,010400|航空运输服务;010500,010500|管道运输服务;020000,020000|邮政服务;030100,030100|基础电信服务;030200,030200|增值电信服务;040100,040100|工程服务;040200,040200|安装服务;040300,040300|修缮服务;040400,040400|装饰服务;040500,040500|其他建筑服务;050100,050100|贷款服务;050200,050200|直接收费金融服务;050300,050300|人身保险服务;050400,050400|财产保险服务;050500,050500|金融商品转让;060101,060101|研发服务;060102,060102|合同能源管理服务;060103,060103|工程勘察勘探服务;060104,060104|专业技术服务;060201,060201|软件服务;060202,060202|电路设计及测试服务;060203,060203|信息系统服务;060204,060204|业务流程管理服务;060205,060205|信息系统增值服务;060301,060301|设计服务;060302,060302|知识产权服务;060303,060303|广告服务;060304,060304|会议展览服务;060401,060401|航空服务;060402,060402|港口码头服务;060403,060403|货运客运场站服务;060404,060404|打捞救助服务;060405,060405|装卸搬运服务;060406,060406|仓储服务;060407,060407|收派服务;060501,060501|不动产融资租赁;060502,060502|不动产经营租赁;060503,060503|有形动产融资租赁;060504,060504|有形动产经营租赁;060601,060601|认证服务;060602,060602|鉴证服务;060603,060603|咨询服务;060701,060701|广播影视节目（作品）制作服务;060702,060702|广播影视节目（作品）发行服务;060703,060703|广播影视节目（作品）播映服务;060801,060801|企业管理服务;060802,060802|经纪代理服务;060803,060803|人力资源服务;060804,060804|安全保护服务;069900,069900|其他现代服务;070101,070101|文化服务;070102,070102|体育服务;070201,070201|教育服务;070202,070202|医疗服务;070301,070301|旅游服务;070302,070302|娱乐服务;070401,070401|餐饮服务;070402,070402|住宿服务;070500,070500|居民日常服务;079900,079900|其他生活服务;080100,080100|专利或非专利技术;080200,080200|商标和著作权;080300,080300|土地使用权;080400,080400|其他自然资源使用权;089900,089900|其他权益性无形资产" value='' _dv="report1_A8_dv()" onclick="_displayEditor()" class="report1_10">
            
		</td>
<script language=javascript src="/WSSBSL/Fselect.js" charset="UTF-8"></script>
<script language=javascript>
	function report1_A8_dv() {
		if( ! ( checkNull(_xxs("A8").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('A8') );}catch(e){}
			alert( '请选择应税项目代码及名称！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_B8" colNo=2 sc="B8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00%25" digits="4" onclick="_displayEditor()" class="report1_2">0.00%</td>
		<td id="report1_C8" colNo=3 sc="C8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00%25" digits="4" onclick="_displayEditor()" class="report1_2">0.00%</td>
		<td id="report1_D8" colNo=4 sc="D8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_E8" colNo=5 sc="E8" value='0.0' format="%230.00" digits="2" calc='(_xxf("D8")*_xxf("B8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_F8" colNo=6 sc="F8" value='0.0' format="%230.00" digits="2" calc='(_xxf("D8")+_xxf("E8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_G8" colNo=7 sc="G8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_H8" colNo=8 sc="H8" value='0.0' format="%230.00" digits="2" calc='(_xxf("F8")-_xxf("G8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_I8" colNo=9 sc="I8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" calc='(_xxf("H8")/(1+_xxf("B8"))*_xxf("B8")).toFixed(2)' onclick="_displayEditor()" class="report1_4">0.00</td>
		<td id="report1_J8" colNo=10 sc="J8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_K8" colNo=11 sc="K8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_L8" colNo=12 sc="L8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_M8" colNo=13 sc="M8" value='0.0' format="%230.00" digits="2" calc='(_xxf("K8")+_xxf("L8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_N8" colNo=14 sc="N8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_O8" colNo=15 sc="O8" value='0.0' format="%230.00" digits="2" calc='(_xxf("M8")-_xxf("N8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_P8" colNo=16 sc="P8" value='0.0' format="%230.00" digits="2" calc='(_xxf("F8")-_xxf("N8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_Q8" colNo=17 sc="Q8" value='0.0' format="%230.00" digits="2" calc='(_xxf("P8")*_xxf("C8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_R8" colNo=18 bkj="true" sc="R8" value='1' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="9" id=report1_row9 status="0" pid="report1" height=29 style="height:29px;">
		<td id="report1_A9" colNo=1 sc="A9" value='合计' onclick="_hideEditor()" class="report1_7">合计</td>
		<td id="report1_B9" colNo=2 sc="B9" value='——' onclick="_hideEditor()" class="report1_7">——</td>
		<td id="report1_C9" colNo=3 sc="C9" value='——' onclick="_hideEditor()" class="report1_7">——</td>
		<td id="report1_D9" colNo=4 sc="D9" value='0.0' format="%230.00" digits="2" calc='(sum("D8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_E9" colNo=5 sc="E9" value='0.0' format="%230.00" digits="2" calc='(sum("E8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_F9" colNo=6 sc="F9" value='0.0' format="%230.00" digits="2" calc='(sum("F8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_G9" colNo=7 sc="G9" value='0.0' format="%230.00" digits="2" calc='(sum("G8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_H9" colNo=8 sc="H9" value='0.0' format="%230.00" digits="2" calc='(sum("H8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_I9" colNo=9 sc="I9" value='0.0' format="%230.00" digits="2" calc='(sum("I8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_J9" colNo=10 sc="J9" value='0.0' format="%230.00" digits="2" calc='(sum("J8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_K9" colNo=11 sc="K9" value='0.0' format="%230.00" digits="2" calc='(sum("K8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_L9" colNo=12 sc="L9" value='0.0' format="%230.00" digits="2" calc='(sum("L8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_M9" colNo=13 sc="M9" value='0.0' format="%230.00" digits="2" calc='(sum("M8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_N9" colNo=14 sc="N9" value='0.0' format="%230.00" digits="2" calc='(sum("N8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_O9" colNo=15 sc="O9" value='0.0' format="%230.00" digits="2" calc='(sum("O8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_P9" colNo=16 sc="P9" value='0.0' format="%230.00" digits="2" calc='(sum("P8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_Q9" colNo=17 sc="Q9" value='0.0' format="%230.00" digits="2" calc='(sum("Q8")).toFixed(2)' onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_R9" colNo=18 bkj="true" sc="R9" value='rowList-end' onclick="_hideEditor()" class="report1_11" style="display:none;"></td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	try{
		var init_report1 = function(){ _initSelectACell( document.getElementById( "report1" ) );}
		window.attachEvent( "onload", init_report1 );
	}catch(e){}
</script>
</div>
</td></tr></table>
<div style="display:none"><form id="report1_submitForm" method=post action="/WSSBSL/reportServlet.aspx?action=11" target="submitFrame">
	<input type=hidden name=fileName value="/zzs2013Ybnsr/sffxcsmxb.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_41507">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showReport.jsp?raq=%2Fzzs2013Ybnsr%2Fsffxcsmxb.raq&nsrsbh=450100399111430&sbzt=0&skssq=20171111&ssqq=2017-11-01&ssqz=2017-11-30&isTbBz=0&reportParamsId=15123563588199528140644">
	<input type=hidden name=backAndRefresh value="/reportJsp/success.jsp">
	<input type=hidden name=promptAfterSave value="no">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_ZZS_YGZSFFXCSMXB;xmlName=zzs2013/zzs_ybnsr_ygzsffxcsmxb;sbzt=0;ssqq=2017-11-01;skssq=20171111;nsrsbh=450100399111430;dynamicBz=Y;raq=/zzs2013Ybnsr/sffxcsmxb.raq;ssqz=2017-11-30;isTbBz=0">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/zzs2013Ybnsr/sffxcsmxb.raq&srcType=file&cachedId=10_1_1_176_8080_41507&isScroll=0&backAndRefresh=/reportJsp/success.jsp&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_ZZS_YGZSFFXCSMXB%3BxmlName%3Dzzs2013%2Fzzs_ybnsr_ygzsffxcsmxb%3Bsbzt%3D0%3Bssqq%3D2017-11-01%3Bskssq%3D20171111%3Bnsrsbh%3D450100399111430%3BdynamicBz%3DY%3Braq%3D%2Fzzs2013Ybnsr%2Fsffxcsmxb.raq%3Bssqz%3D2017-11-30%3BisTbBz%3D0&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
		address += "&isLi=1";
		var tbl = document.getElementById( 'report1' );
		if( tbl.currCell==null || !tbl.currCell.parentElement.getAttribute( 'isDetail' ) ) {
			alert( '当前单元格不在扩展区，不能导入！' ); return; }
		var importInfo = _getImportInfo( tbl );
		if( importInfo == null ) return;
		address += "&header=" + importInfo[0] + "&footer=" + importInfo[1] + "&drows=" + importInfo[2] + "&footStart=" + importInfo[3];
		rq_showPopWin( address, 400, 180, null );
	}
</script>
<script language=javascript>
	function report1_save() {
		_submitRowInput( document.getElementById( "report1" ) );
	}
</script>
</div>

	</td>
	</tr>
</table>
</body>
</html>

