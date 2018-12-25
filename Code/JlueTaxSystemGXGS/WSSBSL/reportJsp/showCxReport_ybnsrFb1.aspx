<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_ybnsrFb1.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_ybnsrFb1" %>

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
<script type="text/javascript" src="/WSSBSL/js/page/report/clearAndKeepCalc.js"></script>
<script type="text/javascript" src="/WSSBSL/js/page/report/reportTdPop.js"></script>
<script type="text/javascript" src="/WSSBSL/js/page/report/showReport.js"></script>

<body topmargin=0 leftmargin=0 rightmargin=0 bottomMargin=0>

<iframe name="submitFrame" src="" style="display:none"></iframe> 
<table id="rpt" width="100%"><tr><td align="center">
		<script language=javascript src="/WSSBSL/Finput.js" charset="UTF-8">
</script>
<script language=javascript>
	autoCalcOnlyOnSubmit = true;
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
	var report1_cachedId = "10_1_1_176_8080_73505";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2Fzzs2013Ybnsr%2FybnsrFb1.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15114905436835550171013&cachedId=10_1_1_176_8080_73505&t_i_m_e=1511490543886" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2Fzzs2013Ybnsr%2FybnsrFb1.raq&columns=0&srcType=file&reportParamsId=15114905436835550171013&cachedId=10_1_1_176_8080_73505&t_i_m_e=1511490543886" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2Fzzs2013Ybnsr%2FybnsrFb1.raq&columns=0&srcType=file&reportParamsId=15114905436835550171013&cachedId=10_1_1_176_8080_73505&t_i_m_e=1511490543886";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2Fzzs2013Ybnsr%2FybnsrFb1.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15114905436835550171013&cachedId=10_1_1_176_8080_73505&t_i_m_e=1511490543886";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2Fzzs2013Ybnsr%2FybnsrFb1.raq&srcType=file&reportParamsId=15114905436835550171013&cachedId=10_1_1_176_8080_73505&t_i_m_e=1511490543886" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2Fzzs2013Ybnsr%2FybnsrFb1.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15114905436835550171013&cachedId=10_1_1_176_8080_73505&t_i_m_e=1511490543886";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2Fzzs2013Ybnsr%2FybnsrFb1.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15114905436835550171013&cachedId=10_1_1_176_8080_73505&t_i_m_e=1511490543886";
	}
</script>
<table id=report1_reportTbl style="position:relative;"><tr><td>
<div id=report1_reportDiv style="display:inline-block;text-align:left;position:relative;">
<table>
	<tr><td style="background-color:">
		<div noWrap style="font-family:宋体;font-size:13px;color:;">
<span id=runqian_submit style="cursor:pointer" onclick="_submitTable( report1 )"></span>		</div></td></tr></table>
<script language=javascript>
	var report1oldstatus = "";
	function report1487535over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1487535out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;line-height:16px;}
	.report1_5 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_7 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_9 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_10 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_11 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_12 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_13 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_14 { text-align:center;vertical-align:bottom;font-family:宋体;font-size:18px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_15 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_16 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_17 { text-align:center;vertical-align:top;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1487535out()" onmouseover="report1487535over()" rowCount=30 cols=18 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:1860px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:92px;"></col>
		<col style="width:66px;"></col>
		<col style="width:204px;"></col>
		<col style="width:28px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
	</colgroup>
	<tr rn="1" height=35 style="height:35px;">
		<td colSpan=18 id="report1_A1" colNo=1 value='10014517000033386709' onclick="_hideEditor()" class="report1_14">增值税纳税申报表附列资料（一）</td>
	</tr>
	<tr rn="2" height=20 style="height:20px;">
		<td colSpan=18 id="report1_A2" colNo=1 value='（本期销售情况明细）' onclick="_hideEditor()" class="report1_17">（本期销售情况明细）</td>
	</tr>
	<tr rn="3" height=20 style="height:20px;">
		<td id="report1_A3" colNo=1 value='纳税人识别号：' onclick="_hideEditor()" class="report1_15">纳税人识别号：</td>
		<td colSpan=8 id="report1_B3" colNo=2 value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_8">91450107MA5KE0EQ2B</td>
		<td id="report1_J3" colNo=10 value='填表日期：' onclick="_hideEditor()" class="report1_7">填表日期：</td>
		<td colSpan=3 id="report1_K3" colNo=11 value='2017-11-02' onclick="_hideEditor()" class="report1_7">2017-11-02</td>
		<td colSpan=5 id="report1_N3" colNo=14 value='金额单位：元（列至角分）' onclick="_hideEditor()" class="report1_6">金额单位：元（列至角分）</td>
	</tr>
	<tr rn="4" height=20 style="height:20px;">
		<td id="report1_A4" colNo=1 value='纳税人名称：' onclick="_hideEditor()" class="report1_15">纳税人名称：</td>
		<td colSpan=8 id="report1_B4" colNo=2 value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_8">广西龙森胜贸易有限公司</td>
		<td id="report1_J4" colNo=10 value='所属时期：' onclick="_hideEditor()" class="report1_7">所属时期：</td>
		<td colSpan=3 id="report1_K4" colNo=11 value='2017-10-01' onclick="_hideEditor()" class="report1_7">2017-10-01</td>
		<td id="report1_N4" colNo=14 value='至' onclick="_hideEditor()" class="report1_6">至</td>
		<td colSpan=4 id="report1_O4" colNo=15 value='2017-10-31' onclick="_hideEditor()" class="report1_6">2017-10-31</td>
	</tr>
	<tr rn="5" height=20 style="height:20px;">
		<td rowSpan=3 colSpan=4 id="report1_A5" colNo=1 value='项目及栏次' onclick="_hideEditor()" class="report1_10" style="border-bottom-style:solid;border-right-style:solid;">项目及栏次</td>
		<td colSpan=2 id="report1_E5" colNo=5 value='开具税控增值税 专用发票' onclick="_hideEditor()" class="report1_9" style="border-right-style:solid;">开具税控增值税&nbsp;专用发票</td>
		<td colSpan=2 id="report1_G5" colNo=7 value='开具其他发票' onclick="_hideEditor()" class="report1_9" style="border-right-style:solid;">开具其他发票</td>
		<td colSpan=2 id="report1_I5" colNo=9 value='未开具发票' onclick="_hideEditor()" class="report1_9" style="border-right-style:solid;">未开具发票</td>
		<td colSpan=2 id="report1_K5" colNo=11 value='纳税检查调整' onclick="_hideEditor()" class="report1_9" style="border-right-style:solid;">纳税检查调整</td>
		<td colSpan=3 id="report1_M5" colNo=13 value='合 计' onclick="_hideEditor()" class="report1_6">合&nbsp;计</td>
		<td rowSpan=2 id="report1_P5" colNo=16 value='服务、不动产和无形资产扣除项目本期实际扣除金额' onclick="_hideEditor()" class="report1_6">服务、不动产和无<br>形资产扣除项目本<br>期实际扣除金额</td>
		<td colSpan=2 id="report1_Q5" colNo=17 value='扣除后' onclick="_hideEditor()" class="report1_6">扣除后</td>
	</tr>
	<tr rn="6" height=55 style="height:55px;">
		<td id="report1_E6" colNo=5 value='销售额' onclick="_hideEditor()" class="report1_6">销售额</td>
		<td id="report1_F6" colNo=6 value='销项
（应纳）
税额' onclick="_hideEditor()" class="report1_6">销项<br>（应纳）<br>税额</td>
		<td id="report1_G6" colNo=7 value='销售额' onclick="_hideEditor()" class="report1_6">销售额</td>
		<td id="report1_H6" colNo=8 value='销项
（应纳）
税额' onclick="_hideEditor()" class="report1_6">销项<br>（应纳）<br>税额</td>
		<td id="report1_I6" colNo=9 value='销售额' onclick="_hideEditor()" class="report1_6">销售额</td>
		<td id="report1_J6" colNo=10 value='销项
（应纳）
税额' onclick="_hideEditor()" class="report1_6">销项<br>（应纳）<br>税额</td>
		<td id="report1_K6" colNo=11 value='销售额' onclick="_hideEditor()" class="report1_6">销售额</td>
		<td id="report1_L6" colNo=12 value='销项
（应纳）
税额' onclick="_hideEditor()" class="report1_6">销项<br>（应纳）<br>税额</td>
		<td id="report1_M6" colNo=13 value='销售额' onclick="_hideEditor()" class="report1_6">销售额</td>
		<td id="report1_N6" colNo=14 value='销项
（应纳）
税额' onclick="_hideEditor()" class="report1_6">销项<br>（应纳）<br>税额</td>
		<td id="report1_O6" colNo=15 value='价税合计' onclick="_hideEditor()" class="report1_6">价税合计</td>
		<td id="report1_Q6" colNo=17 value='含税
（免税）
销售额' onclick="_hideEditor()" class="report1_6">含税<br>（免税）<br>销售额</td>
		<td id="report1_R6" colNo=18 value='销项
（应纳）
税额' onclick="_hideEditor()" class="report1_6">销项<br>（应纳）<br>税额</td>
	</tr>
	<tr rn="7" height=55 style="height:55px;">
		<td id="report1_E7" colNo=5 value='1' onclick="_hideEditor()" class="report1_6">1</td>
		<td id="report1_F7" colNo=6 value='2' onclick="_hideEditor()" class="report1_6">2</td>
		<td id="report1_G7" colNo=7 value='3' onclick="_hideEditor()" class="report1_6">3</td>
		<td id="report1_H7" colNo=8 value='4' onclick="_hideEditor()" class="report1_6">4</td>
		<td id="report1_I7" colNo=9 value='5' onclick="_hideEditor()" class="report1_6">5</td>
		<td id="report1_J7" colNo=10 value='6' onclick="_hideEditor()" class="report1_6">6</td>
		<td id="report1_K7" colNo=11 value='7' onclick="_hideEditor()" class="report1_6">7</td>
		<td id="report1_L7" colNo=12 value='8' onclick="_hideEditor()" class="report1_6">8</td>
		<td id="report1_M7" colNo=13 value='9=1+3+5+7' onclick="_hideEditor()" class="report1_6">9=1+3+5+7</td>
		<td id="report1_N7" colNo=14 value='10=2+4+6+8' onclick="_hideEditor()" class="report1_6">10=2+4+6+8</td>
		<td id="report1_O7" colNo=15 value='11=9+10' onclick="_hideEditor()" class="report1_6">11=9+10</td>
		<td id="report1_P7" colNo=16 value='12' onclick="_hideEditor()" class="report1_6">12</td>
		<td id="report1_Q7" colNo=17 value='13=11-12' onclick="_hideEditor()" class="report1_6">13=11-12</td>
		<td id="report1_R7" colNo=18 value='14=13÷（100%+税率或征收率）×税率或征收率' onclick="_hideEditor()" class="report1_6">14=13÷（100%+税<br>率或征收率）×税<br>率或征收率</td>
	</tr>
	<tr rn="8" height=20 style="height:20px;">
		<td rowSpan=8 id="report1_A8" colNo=1 value='一、
一般
计税
方法
征税' onclick="_hideEditor()" class="report1_6">一、<br>一般<br>计税<br>方法<br>征税</td>
		<td rowSpan=6 id="report1_B8" colNo=2 value='全部征税项目' onclick="_hideEditor()" class="report1_13" style="border-bottom-style:solid;">全部征税项<br>目</td>
		<td id="report1_C8" colNo=3 value='17%税率的货物及加工修理修配劳务' onclick="_hideEditor()" class="report1_8">17%税率的货物及加工修理修配劳务</td>
		<td id="report1_D8" colNo=4 value='1' onclick="_hideEditor()" class="report1_6">1</td>
		<td id="report1_E8" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_F8" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G8" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H8" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_I8" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J8" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_K8" colNo=11 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_L8" colNo=12 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_M8" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N8" colNo=14 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_O8" colNo=15 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_P8" colNo=16 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_Q8" colNo=17 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_R8" colNo=18 value='--' onclick="_hideEditor()" class="report1_4">--</td>
	</tr>
	<tr rn="9" height=20 style="height:20px;">
		<td id="report1_C9" colNo=3 value='17%税率的服务、不动产和无形资产' onclick="_hideEditor()" class="report1_8">17%税率的服务、不动产和无形资产</td>
		<td id="report1_D9" colNo=4 value='2' onclick="_hideEditor()" class="report1_6">2</td>
		<td id="report1_E9" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_F9" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G9" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H9" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_I9" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J9" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_K9" colNo=11 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_L9" colNo=12 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_M9" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N9" colNo=14 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_O9" colNo=15 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_P9" colNo=16 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_Q9" colNo=17 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_R9" colNo=18 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
	</tr>
	<tr rn="10" height=20 style="height:20px;">
		<td id="report1_C10" colNo=3 value='13%税率' onclick="_hideEditor()" class="report1_8">13%税率</td>
		<td id="report1_D10" colNo=4 value='3' onclick="_hideEditor()" class="report1_6">3</td>
		<td id="report1_E10" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_F10" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G10" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H10" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_I10" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J10" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_K10" colNo=11 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_L10" colNo=12 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_M10" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N10" colNo=14 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_O10" colNo=15 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_P10" colNo=16 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_Q10" colNo=17 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_R10" colNo=18 value='--' onclick="_hideEditor()" class="report1_4">--</td>
	</tr>
	<tr rn="11" height=20 style="height:20px;">
		<td id="report1_C11" colNo=3 value='11%税率的货物及加工修理修配劳务 ' onclick="_hideEditor()" class="report1_11">11%税率的货物及加工修理修配劳务&nbsp;</td>
		<td id="report1_D11" colNo=4 value='4a' onclick="_hideEditor()" class="report1_7">4a</td>
		<td id="report1_E11" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_F11" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G11" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H11" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_I11" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J11" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_K11" colNo=11 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_L11" colNo=12 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_M11" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N11" colNo=14 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_O11" colNo=15 value='--' onclick="_hideEditor()" class="report1_2">--</td>
		<td id="report1_P11" colNo=16 value='--' onclick="_hideEditor()" class="report1_2">--</td>
		<td id="report1_Q11" colNo=17 value='--' onclick="_hideEditor()" class="report1_2">--</td>
		<td id="report1_R11" colNo=18 value='--' onclick="_hideEditor()" class="report1_2">--</td>
	</tr>
	<tr rn="12" height=34 style="height:34px;">
		<td id="report1_C12" colNo=3 value='11%税率的服务、不动产和无形资产
' onclick="_hideEditor()" class="report1_8">11%税率的服务、不动产和无形资产<br></td>
		<td id="report1_D12" colNo=4 value='4b' onclick="_hideEditor()" class="report1_6">4b</td>
		<td id="report1_E12" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_F12" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G12" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H12" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_I12" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J12" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_K12" colNo=11 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_L12" colNo=12 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_M12" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N12" colNo=14 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_O12" colNo=15 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_P12" colNo=16 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_Q12" colNo=17 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_R12" colNo=18 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
	</tr>
	<tr rn="13" height=20 style="height:20px;">
		<td id="report1_C13" colNo=3 value='6%税率' onclick="_hideEditor()" class="report1_8">6%税率</td>
		<td id="report1_D13" colNo=4 value='5' onclick="_hideEditor()" class="report1_6">5</td>
		<td id="report1_E13" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_F13" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G13" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H13" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_I13" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J13" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_K13" colNo=11 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_L13" colNo=12 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_M13" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N13" colNo=14 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_O13" colNo=15 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_P13" colNo=16 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_Q13" colNo=17 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_R13" colNo=18 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
	</tr>
	<tr rn="14" height=20 style="height:20px;">
		<td rowSpan=2 id="report1_B14" colNo=2 value='其中：即征即退项目' onclick="_hideEditor()" class="report1_8">其中：即征<br>即退项目</td>
		<td id="report1_C14" colNo=3 value='即征即退货物及加工修理修配劳务' onclick="_hideEditor()" class="report1_8">即征即退货物及加工修理修配劳务</td>
		<td id="report1_D14" colNo=4 value='6' onclick="_hideEditor()" class="report1_6">6</td>
		<td id="report1_E14" colNo=5 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_F14" colNo=6 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_G14" colNo=7 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_H14" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_I14" colNo=9 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_J14" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K14" colNo=11 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_L14" colNo=12 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_M14" colNo=13 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_N14" colNo=14 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_O14" colNo=15 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_P14" colNo=16 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_Q14" colNo=17 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_R14" colNo=18 value='--' onclick="_hideEditor()" class="report1_4">--</td>
	</tr>
	<tr rn="15" height=20 style="height:20px;">
		<td id="report1_C15" colNo=3 value='即征即退服务、不动产和无形资产' onclick="_hideEditor()" class="report1_8">即征即退服务、不动产和无形资产</td>
		<td id="report1_D15" colNo=4 value='7' onclick="_hideEditor()" class="report1_6">7</td>
		<td id="report1_E15" colNo=5 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_F15" colNo=6 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_G15" colNo=7 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_H15" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_I15" colNo=9 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_J15" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K15" colNo=11 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_L15" colNo=12 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_M15" colNo=13 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_N15" colNo=14 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_O15" colNo=15 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_P15" colNo=16 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_Q15" colNo=17 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_R15" colNo=18 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
	</tr>
	<tr rn="16" height=20 style="height:20px;">
		<td rowSpan=11 id="report1_A16" colNo=1 value='二、
简易
计税
方法
征税' onclick="_hideEditor()" class="report1_6">二、<br>简易<br>计税<br>方法<br>征税</td>
		<td rowSpan=9 id="report1_B16" colNo=2 value='全部征税项目' onclick="_hideEditor()" class="report1_8">全部征税项<br>目</td>
		<td id="report1_C16" colNo=3 value='6%征收率' onclick="_hideEditor()" class="report1_8">6%征收率</td>
		<td id="report1_D16" colNo=4 value='8' onclick="_hideEditor()" class="report1_6">8</td>
		<td id="report1_E16" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_F16" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G16" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H16" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_I16" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J16" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_K16" colNo=11 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_L16" colNo=12 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_M16" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N16" colNo=14 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_O16" colNo=15 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_P16" colNo=16 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_Q16" colNo=17 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_R16" colNo=18 value='--' onclick="_hideEditor()" class="report1_4">--</td>
	</tr>
	<tr rn="17" height=20 style="height:20px;">
		<td id="report1_C17" colNo=3 value='5%征收率的货物及加工修理修配劳务' onclick="_hideEditor()" class="report1_8">5%征收率的货物及加工修理修配劳务</td>
		<td id="report1_D17" colNo=4 value='9a' onclick="_hideEditor()" class="report1_6">9a</td>
		<td id="report1_E17" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_F17" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G17" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H17" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_I17" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J17" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_K17" colNo=11 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_L17" colNo=12 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_M17" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N17" colNo=14 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_O17" colNo=15 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_P17" colNo=16 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_Q17" colNo=17 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_R17" colNo=18 value='--' onclick="_hideEditor()" class="report1_4">--</td>
	</tr>
	<tr rn="18" height=20 style="height:20px;">
		<td id="report1_C18" colNo=3 value='5%征收率的服务、不动产和无形资产' onclick="_hideEditor()" class="report1_8">5%征收率的服务、不动产和无形资产</td>
		<td id="report1_D18" colNo=4 value='9b' onclick="_hideEditor()" class="report1_7">9b</td>
		<td id="report1_E18" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_F18" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G18" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H18" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_I18" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J18" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_K18" colNo=11 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_L18" colNo=12 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_M18" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N18" colNo=14 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_O18" colNo=15 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_12">0.00</td>
		<td id="report1_P18" colNo=16 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_Q18" colNo=17 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_R18" colNo=18 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
	</tr>
	<tr rn="19" height=20 style="height:20px;">
		<td id="report1_C19" colNo=3 value='4%征收率' onclick="_hideEditor()" class="report1_8">4%征收率</td>
		<td id="report1_D19" colNo=4 value='10' onclick="_hideEditor()" class="report1_6">10</td>
		<td id="report1_E19" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_F19" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G19" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H19" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_I19" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J19" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_K19" colNo=11 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_L19" colNo=12 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_M19" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N19" colNo=14 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_O19" colNo=15 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_P19" colNo=16 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_Q19" colNo=17 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_R19" colNo=18 value='--' onclick="_hideEditor()" class="report1_4">--</td>
	</tr>
	<tr rn="20" height=20 style="height:20px;">
		<td id="report1_C20" colNo=3 value='3%征收率的货物及加工修理修配劳务' onclick="_hideEditor()" class="report1_8">3%征收率的货物及加工修理修配劳务</td>
		<td id="report1_D20" colNo=4 value='11' onclick="_hideEditor()" class="report1_6">11</td>
		<td id="report1_E20" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_F20" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G20" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H20" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_I20" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J20" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_K20" colNo=11 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_L20" colNo=12 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_M20" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N20" colNo=14 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_O20" colNo=15 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_P20" colNo=16 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_Q20" colNo=17 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_R20" colNo=18 value='--' onclick="_hideEditor()" class="report1_4">--</td>
	</tr>
	<tr rn="21" height=20 style="height:20px;">
		<td id="report1_C21" colNo=3 value='3%征收率的服务、不动产和无形资产' onclick="_hideEditor()" class="report1_8">3%征收率的服务、不动产和无形资产</td>
		<td id="report1_D21" colNo=4 value='12' onclick="_hideEditor()" class="report1_6">12</td>
		<td id="report1_E21" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_F21" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G21" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H21" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_I21" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J21" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_K21" colNo=11 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_L21" colNo=12 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_M21" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N21" colNo=14 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_O21" colNo=15 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_P21" colNo=16 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_Q21" colNo=17 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_R21" colNo=18 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
	</tr>
	<tr rn="22" height=20 style="height:20px;">
		<td id="report1_C22" colNo=3 value='预征率 %' onclick="_hideEditor()" class="report1_8">预征率&nbsp;%</td>
		<td id="report1_D22" colNo=4 value='0.0' onclick="_hideEditor()" class="report1_6">13a</td>
		<td id="report1_E22" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_F22" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_G22" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H22" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_I22" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J22" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_K22" colNo=11 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_L22" colNo=12 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_M22" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N22" colNo=14 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_O22" colNo=15 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_P22" colNo=16 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_Q22" colNo=17 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_R22" colNo=18 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
	</tr>
	<tr rn="23" height=20 style="height:20px;">
		<td id="report1_C23" colNo=3 value='预征率 %' onclick="_hideEditor()" class="report1_11">预征率&nbsp;%</td>
		<td id="report1_D23" colNo=4 value='0.0' onclick="_hideEditor()" class="report1_7">13b</td>
		<td id="report1_E23" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_F23" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_G23" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H23" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_I23" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J23" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_K23" colNo=11 value='--' onclick="_hideEditor()" class="report1_2">--</td>
		<td id="report1_L23" colNo=12 value='--' onclick="_hideEditor()" class="report1_2">--</td>
		<td id="report1_M23" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N23" colNo=14 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_O23" colNo=15 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_P23" colNo=16 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_Q23" colNo=17 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_R23" colNo=18 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
	</tr>
	<tr rn="24" height=20 style="height:20px;">
		<td id="report1_C24" colNo=3 value='预征率 %' onclick="_hideEditor()" class="report1_11">预征率&nbsp;%</td>
		<td id="report1_D24" colNo=4 value='13c' onclick="_hideEditor()" class="report1_7">13c</td>
		<td id="report1_E24" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_F24" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_G24" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H24" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_I24" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J24" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_K24" colNo=11 value='--' onclick="_hideEditor()" class="report1_2">--</td>
		<td id="report1_L24" colNo=12 value='--' onclick="_hideEditor()" class="report1_2">--</td>
		<td id="report1_M24" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N24" colNo=14 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_O24" colNo=15 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_P24" colNo=16 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_Q24" colNo=17 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_R24" colNo=18 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
	</tr>
	<tr rn="25" height=20 style="height:20px;">
		<td rowSpan=2 id="report1_B25" colNo=2 value='其中：即征即退项目' onclick="_hideEditor()" class="report1_13" style="border-bottom-style:solid;">其中：即征<br>即退项目</td>
		<td id="report1_C25" colNo=3 value='即征即退货物及加工修理修配劳务' onclick="_hideEditor()" class="report1_8">即征即退货物及加工修理修配劳务</td>
		<td id="report1_D25" colNo=4 value='14' onclick="_hideEditor()" class="report1_6">14</td>
		<td id="report1_E25" colNo=5 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_F25" colNo=6 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_G25" colNo=7 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_H25" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_I25" colNo=9 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_J25" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K25" colNo=11 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_L25" colNo=12 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_M25" colNo=13 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_N25" colNo=14 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_O25" colNo=15 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_P25" colNo=16 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_Q25" colNo=17 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_R25" colNo=18 value='--' onclick="_hideEditor()" class="report1_4">--</td>
	</tr>
	<tr rn="26" height=20 style="height:20px;">
		<td id="report1_C26" colNo=3 value='即征即退服务、不动产和无形资产' onclick="_hideEditor()" class="report1_8">即征即退服务、不动产和无形资产</td>
		<td id="report1_D26" colNo=4 value='15' onclick="_hideEditor()" class="report1_6">15</td>
		<td id="report1_E26" colNo=5 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_F26" colNo=6 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_G26" colNo=7 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_H26" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_I26" colNo=9 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_J26" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K26" colNo=11 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_L26" colNo=12 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_M26" colNo=13 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_N26" colNo=14 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_O26" colNo=15 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_P26" colNo=16 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_Q26" colNo=17 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_R26" colNo=18 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
	</tr>
	<tr rn="27" height=26 style="height:26px;">
		<td rowSpan=2 id="report1_A27" colNo=1 value='三、
免抵
退税' onclick="_hideEditor()" class="report1_16" style="border-bottom-style:solid;">三、<br>免抵<br>退税</td>
		<td colSpan=2 id="report1_B27" colNo=2 value='货物及加工修理修配劳务' onclick="_hideEditor()" class="report1_9" style="border-right-style:solid;">货物及加工修理修配劳务</td>
		<td id="report1_D27" colNo=4 value='16' onclick="_hideEditor()" class="report1_6">16</td>
		<td id="report1_E27" colNo=5 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_F27" colNo=6 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_G27" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H27" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_I27" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J27" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K27" colNo=11 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_L27" colNo=12 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_M27" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N27" colNo=14 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_O27" colNo=15 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_P27" colNo=16 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_Q27" colNo=17 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_R27" colNo=18 value='--' onclick="_hideEditor()" class="report1_4">--</td>
	</tr>
	<tr rn="28" height=26 style="height:26px;">
		<td colSpan=2 id="report1_B28" colNo=2 value='服务、不动产和无形资产' onclick="_hideEditor()" class="report1_9" style="border-right-style:solid;">服务、不动产和无形资产</td>
		<td id="report1_D28" colNo=4 value='17' onclick="_hideEditor()" class="report1_6">17</td>
		<td id="report1_E28" colNo=5 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_F28" colNo=6 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_G28" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H28" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_I28" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J28" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K28" colNo=11 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_L28" colNo=12 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_M28" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N28" colNo=14 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_O28" colNo=15 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_P28" colNo=16 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_Q28" colNo=17 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_R28" colNo=18 value='--' onclick="_hideEditor()" class="report1_4">--</td>
	</tr>
	<tr rn="29" height=20 style="height:20px;">
		<td rowSpan=2 id="report1_A29" colNo=1 value='四、
免税' onclick="_hideEditor()" class="report1_6">四、<br>免税</td>
		<td colSpan=2 id="report1_B29" colNo=2 value='货物及加工修理修配劳务' onclick="_hideEditor()" class="report1_9" style="border-right-style:solid;">货物及加工修理修配劳务</td>
		<td id="report1_D29" colNo=4 value='18' onclick="_hideEditor()" class="report1_6">18</td>
		<td id="report1_E29" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_F29" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_G29" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H29" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_I29" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J29" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K29" colNo=11 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_L29" colNo=12 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_M29" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N29" colNo=14 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_O29" colNo=15 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_P29" colNo=16 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_Q29" colNo=17 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_R29" colNo=18 value='--' onclick="_hideEditor()" class="report1_4">--</td>
	</tr>
	<tr rn="30" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B30" colNo=2 value='服务、不动产和无形资产' onclick="_hideEditor()" class="report1_9" style="border-right-style:solid;">服务、不动产和无形资产</td>
		<td id="report1_D30" colNo=4 value='19' onclick="_hideEditor()" class="report1_6">19</td>
		<td id="report1_E30" colNo=5 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_F30" colNo=6 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_G30" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H30" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_I30" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_J30" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K30" colNo=11 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_L30" colNo=12 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_M30" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_N30" colNo=14 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_O30" colNo=15 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_P30" colNo=16 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_Q30" colNo=17 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_R30" colNo=18 value='--' onclick="_hideEditor()" class="report1_4">--</td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,E8,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E8' ) )*0.17).toFixed(2);
				document.getElementById( 'report1_F8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F8' ) );
			}catch(e1){}
		}
		cells = ",,G8,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G8' ) )*0.17).toFixed(2);
				document.getElementById( 'report1_H8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H8' ) );
			}catch(e1){}
		}
		cells = ",,I8,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_I8' ) )*0.17).toFixed(2);
				document.getElementById( 'report1_J8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J8' ) );
			}catch(e1){}
		}
		cells = ",,K8,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_K8' ) )*0.17).toFixed(2);
				document.getElementById( 'report1_L8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_L8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_L8' ) );
			}catch(e1){}
		}
		cells = ",,E8,G8,I8,K8,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E8' ) )+_parseValue( document.getElementById( 'report1_G8' ) )+_parseValue( document.getElementById( 'report1_I8' ) )+_parseValue( document.getElementById( 'report1_K8' ) )).toFixed(2);
				document.getElementById( 'report1_M8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M8' ) );
			}catch(e1){}
		}
		cells = ",,F8,E8,H8,G8,J8,I8,L8,K8,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F8' ) )+_parseValue( document.getElementById( 'report1_H8' ) )+_parseValue( document.getElementById( 'report1_J8' ) )+_parseValue( document.getElementById( 'report1_L8' ) )).toFixed(2);
				document.getElementById( 'report1_N8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_N8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_N8' ) );
			}catch(e1){}
		}
		cells = ",,E9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E9' ) )*0.17).toFixed(2);
				document.getElementById( 'report1_F9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F9' ) );
			}catch(e1){}
		}
		cells = ",,G9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G9' ) )*0.17).toFixed(2);
				document.getElementById( 'report1_H9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H9' ) );
			}catch(e1){}
		}
		cells = ",,I9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_I9' ) )*0.17).toFixed(2);
				document.getElementById( 'report1_J9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J9' ) );
			}catch(e1){}
		}
		cells = ",,K9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_K9' ) )*0.17).toFixed(2);
				document.getElementById( 'report1_L9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_L9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_L9' ) );
			}catch(e1){}
		}
		cells = ",,E9,G9,I9,K9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E9' ) )+_parseValue( document.getElementById( 'report1_G9' ) )+_parseValue( document.getElementById( 'report1_I9' ) )+_parseValue( document.getElementById( 'report1_K9' ) )).toFixed(2);
				document.getElementById( 'report1_M9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M9' ) );
			}catch(e1){}
		}
		cells = ",,F9,E9,H9,G9,J9,I9,L9,K9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F9' ) )+_parseValue( document.getElementById( 'report1_H9' ) )+_parseValue( document.getElementById( 'report1_J9' ) )+_parseValue( document.getElementById( 'report1_L9' ) )).toFixed(2);
				document.getElementById( 'report1_N9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_N9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_N9' ) );
			}catch(e1){}
		}
		cells = ",,M9,E9,G9,I9,K9,N9,F9,E9,H9,G9,J9,I9,L9,K9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_M9' ) )+_parseValue( document.getElementById( 'report1_N9' ) )).toFixed(2);
				document.getElementById( 'report1_O9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_O9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_O9' ) );
			}catch(e1){}
		}
		cells = ",,O9,M9,E9,G9,I9,K9,N9,F9,E9,H9,G9,J9,I9,L9,K9,P9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_O9' ) )-_parseValue( document.getElementById( 'report1_P9' ) )).toFixed(2);
				document.getElementById( 'report1_Q9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_Q9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_Q9' ) );
			}catch(e1){}
		}
		cells = ",,P9,N9,F9,E9,H9,G9,J9,I9,L9,K9,Q9,O9,M9,E9,G9,I9,K9,N9,F9,E9,H9,G9,J9,I9,L9,K9,P9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = _parseValue( document.getElementById( 'report1_P9' ) )==0?_parseValue( document.getElementById( 'report1_N9' ) ):(_parseValue( document.getElementById( 'report1_Q9' ) )/(1+0.17)*0.17).toFixed(2);
				document.getElementById( 'report1_R9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_R9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_R9' ) );
			}catch(e1){}
		}
		cells = ",,E10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E10' ) )*0.13).toFixed(2);
				document.getElementById( 'report1_F10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F10' ) );
			}catch(e1){}
		}
		cells = ",,G10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G10' ) )*0.13).toFixed(2);
				document.getElementById( 'report1_H10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H10' ) );
			}catch(e1){}
		}
		cells = ",,I10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_I10' ) )*0.13).toFixed(2);
				document.getElementById( 'report1_J10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J10' ) );
			}catch(e1){}
		}
		cells = ",,K10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_K10' ) )*0.13).toFixed(2);
				document.getElementById( 'report1_L10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_L10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_L10' ) );
			}catch(e1){}
		}
		cells = ",,E10,G10,I10,K10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E10' ) )+_parseValue( document.getElementById( 'report1_G10' ) )+_parseValue( document.getElementById( 'report1_I10' ) )+_parseValue( document.getElementById( 'report1_K10' ) )).toFixed(2);
				document.getElementById( 'report1_M10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M10' ) );
			}catch(e1){}
		}
		cells = ",,F10,E10,H10,G10,J10,I10,L10,K10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F10' ) )+_parseValue( document.getElementById( 'report1_H10' ) )+_parseValue( document.getElementById( 'report1_J10' ) )+_parseValue( document.getElementById( 'report1_L10' ) )).toFixed(2);
				document.getElementById( 'report1_N10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_N10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_N10' ) );
			}catch(e1){}
		}
		cells = ",,E11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E11' ) )*0.11).toFixed(2);
				document.getElementById( 'report1_F11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F11' ) );
			}catch(e1){}
		}
		cells = ",,G11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G11' ) )*0.11).toFixed(2);
				document.getElementById( 'report1_H11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H11' ) );
			}catch(e1){}
		}
		cells = ",,I11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_I11' ) )*0.11).toFixed(2);
				document.getElementById( 'report1_J11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J11' ) );
			}catch(e1){}
		}
		cells = ",,K11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_K11' ) )*0.11).toFixed(2);
				document.getElementById( 'report1_L11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_L11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_L11' ) );
			}catch(e1){}
		}
		cells = ",,E11,G11,I11,K11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E11' ) )+_parseValue( document.getElementById( 'report1_G11' ) )+_parseValue( document.getElementById( 'report1_I11' ) )+_parseValue( document.getElementById( 'report1_K11' ) )).toFixed(2);
				document.getElementById( 'report1_M11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M11' ) );
			}catch(e1){}
		}
		cells = ",,F11,E11,H11,G11,J11,I11,L11,K11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F11' ) )+_parseValue( document.getElementById( 'report1_H11' ) )+_parseValue( document.getElementById( 'report1_J11' ) )+_parseValue( document.getElementById( 'report1_L11' ) )).toFixed(2);
				document.getElementById( 'report1_N11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_N11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_N11' ) );
			}catch(e1){}
		}
		cells = ",,E12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E12' ) )*0.11).toFixed(2);
				document.getElementById( 'report1_F12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F12' ) );
			}catch(e1){}
		}
		cells = ",,G12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G12' ) )*0.11).toFixed(2);
				document.getElementById( 'report1_H12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H12' ) );
			}catch(e1){}
		}
		cells = ",,I12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_I12' ) )*0.11).toFixed(2);
				document.getElementById( 'report1_J12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J12' ) );
			}catch(e1){}
		}
		cells = ",,K12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_K12' ) )*0.11).toFixed(2);
				document.getElementById( 'report1_L12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_L12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_L12' ) );
			}catch(e1){}
		}
		cells = ",,E12,G12,I12,K12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E12' ) )+_parseValue( document.getElementById( 'report1_G12' ) )+_parseValue( document.getElementById( 'report1_I12' ) )+_parseValue( document.getElementById( 'report1_K12' ) )).toFixed(2);
				document.getElementById( 'report1_M12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M12' ) );
			}catch(e1){}
		}
		cells = ",,F12,E12,H12,G12,J12,I12,L12,K12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F12' ) )+_parseValue( document.getElementById( 'report1_H12' ) )+_parseValue( document.getElementById( 'report1_J12' ) )+_parseValue( document.getElementById( 'report1_L12' ) )).toFixed(2);
				document.getElementById( 'report1_N12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_N12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_N12' ) );
			}catch(e1){}
		}
		cells = ",,M12,E12,G12,I12,K12,N12,F12,E12,H12,G12,J12,I12,L12,K12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_M12' ) )+_parseValue( document.getElementById( 'report1_N12' ) )).toFixed(2);
				document.getElementById( 'report1_O12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_O12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_O12' ) );
			}catch(e1){}
		}
		cells = ",,O12,M12,E12,G12,I12,K12,N12,F12,E12,H12,G12,J12,I12,L12,K12,P12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_O12' ) )-_parseValue( document.getElementById( 'report1_P12' ) )).toFixed(2);
				document.getElementById( 'report1_Q12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_Q12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_Q12' ) );
			}catch(e1){}
		}
		cells = ",,P12,N12,F12,E12,H12,G12,J12,I12,L12,K12,Q12,O12,M12,E12,G12,I12,K12,N12,F12,E12,H12,G12,J12,I12,L12,K12,P12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = _parseValue( document.getElementById( 'report1_P12' ) )==0?_parseValue( document.getElementById( 'report1_N12' ) ):(_parseValue( document.getElementById( 'report1_Q12' ) )/(1+0.11)*0.11).toFixed(2);
				document.getElementById( 'report1_R12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_R12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_R12' ) );
			}catch(e1){}
		}
		cells = ",,E13,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E13' ) )*0.06).toFixed(2);
				document.getElementById( 'report1_F13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F13' ) );
			}catch(e1){}
		}
		cells = ",,G13,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G13' ) )*0.06).toFixed(2);
				document.getElementById( 'report1_H13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H13' ) );
			}catch(e1){}
		}
		cells = ",,I13,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_I13' ) )*0.06).toFixed(2);
				document.getElementById( 'report1_J13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J13' ) );
			}catch(e1){}
		}
		cells = ",,K13,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_K13' ) )*0.06).toFixed(2);
				document.getElementById( 'report1_L13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_L13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_L13' ) );
			}catch(e1){}
		}
		cells = ",,E13,G13,I13,K13,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E13' ) )+_parseValue( document.getElementById( 'report1_G13' ) )+_parseValue( document.getElementById( 'report1_I13' ) )+_parseValue( document.getElementById( 'report1_K13' ) )).toFixed(2);
				document.getElementById( 'report1_M13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M13' ) );
			}catch(e1){}
		}
		cells = ",,F13,E13,H13,G13,J13,I13,L13,K13,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F13' ) )+_parseValue( document.getElementById( 'report1_H13' ) )+_parseValue( document.getElementById( 'report1_J13' ) )+_parseValue( document.getElementById( 'report1_L13' ) )).toFixed(2);
				document.getElementById( 'report1_N13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_N13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_N13' ) );
			}catch(e1){}
		}
		cells = ",,M13,E13,G13,I13,K13,N13,F13,E13,H13,G13,J13,I13,L13,K13,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_M13' ) )+_parseValue( document.getElementById( 'report1_N13' ) )).toFixed(2);
				document.getElementById( 'report1_O13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_O13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_O13' ) );
			}catch(e1){}
		}
		cells = ",,O13,M13,E13,G13,I13,K13,N13,F13,E13,H13,G13,J13,I13,L13,K13,P13,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_O13' ) )-_parseValue( document.getElementById( 'report1_P13' ) )).toFixed(2);
				document.getElementById( 'report1_Q13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_Q13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_Q13' ) );
			}catch(e1){}
		}
		cells = ",,P13,N13,F13,E13,H13,G13,J13,I13,L13,K13,Q13,O13,M13,E13,G13,I13,K13,N13,F13,E13,H13,G13,J13,I13,L13,K13,P13,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = _parseValue( document.getElementById( 'report1_P13' ) )==0?_parseValue( document.getElementById( 'report1_N13' ) ):(_parseValue( document.getElementById( 'report1_Q13' ) )/(1+0.06)*0.06).toFixed(2);
				document.getElementById( 'report1_R13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_R13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_R13' ) );
			}catch(e1){}
		}
		cells = ",,M15,N15,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_M15' ) )+_parseValue( document.getElementById( 'report1_N15' ) )).toFixed(2);
				document.getElementById( 'report1_O15' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_O15' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_O15' ) );
			}catch(e1){}
		}
		cells = ",,O15,M15,N15,P15,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_O15' ) )-_parseValue( document.getElementById( 'report1_P15' ) )).toFixed(2);
				document.getElementById( 'report1_Q15' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_Q15' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_Q15' ) );
			}catch(e1){}
		}
		cells = ",,E16,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E16' ) )*0.06).toFixed(2);
				document.getElementById( 'report1_F16' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F16' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F16' ) );
			}catch(e1){}
		}
		cells = ",,G16,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G16' ) )*0.06).toFixed(2);
				document.getElementById( 'report1_H16' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H16' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H16' ) );
			}catch(e1){}
		}
		cells = ",,I16,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_I16' ) )*0.06).toFixed(2);
				document.getElementById( 'report1_J16' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J16' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J16' ) );
			}catch(e1){}
		}
		cells = ",,E16,G16,I16,K16,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E16' ) )+_parseValue( document.getElementById( 'report1_G16' ) )+_parseValue( document.getElementById( 'report1_I16' ) )+_parseValue( document.getElementById( 'report1_K16' ) )).toFixed(2);
				document.getElementById( 'report1_M16' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M16' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M16' ) );
			}catch(e1){}
		}
		cells = ",,F16,E16,H16,G16,J16,I16,L16,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F16' ) )+_parseValue( document.getElementById( 'report1_H16' ) )+_parseValue( document.getElementById( 'report1_J16' ) )+_parseValue( document.getElementById( 'report1_L16' ) )).toFixed(2);
				document.getElementById( 'report1_N16' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_N16' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_N16' ) );
			}catch(e1){}
		}
		cells = ",,E17,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E17' ) )*0.05).toFixed(2);
				document.getElementById( 'report1_F17' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F17' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F17' ) );
			}catch(e1){}
		}
		cells = ",,G17,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G17' ) )*0.05).toFixed(2);
				document.getElementById( 'report1_H17' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H17' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H17' ) );
			}catch(e1){}
		}
		cells = ",,I17,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_I17' ) )*0.05).toFixed(2);
				document.getElementById( 'report1_J17' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J17' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J17' ) );
			}catch(e1){}
		}
		cells = ",,E17,G17,I17,K17,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E17' ) )+_parseValue( document.getElementById( 'report1_G17' ) )+_parseValue( document.getElementById( 'report1_I17' ) )+_parseValue( document.getElementById( 'report1_K17' ) )).toFixed(2);
				document.getElementById( 'report1_M17' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M17' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M17' ) );
			}catch(e1){}
		}
		cells = ",,F17,E17,H17,G17,J17,I17,L17,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F17' ) )+_parseValue( document.getElementById( 'report1_H17' ) )+_parseValue( document.getElementById( 'report1_J17' ) )+_parseValue( document.getElementById( 'report1_L17' ) )).toFixed(2);
				document.getElementById( 'report1_N17' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_N17' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_N17' ) );
			}catch(e1){}
		}
		cells = ",,E18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E18' ) )*0.05).toFixed(2);
				document.getElementById( 'report1_F18' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F18' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F18' ) );
			}catch(e1){}
		}
		cells = ",,G18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G18' ) )*0.05).toFixed(2);
				document.getElementById( 'report1_H18' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H18' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H18' ) );
			}catch(e1){}
		}
		cells = ",,I18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_I18' ) )*0.05).toFixed(2);
				document.getElementById( 'report1_J18' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J18' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J18' ) );
			}catch(e1){}
		}
		cells = ",,E18,G18,I18,K18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E18' ) )+_parseValue( document.getElementById( 'report1_G18' ) )+_parseValue( document.getElementById( 'report1_I18' ) )+_parseValue( document.getElementById( 'report1_K18' ) )).toFixed(2);
				document.getElementById( 'report1_M18' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M18' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M18' ) );
			}catch(e1){}
		}
		cells = ",,F18,E18,H18,G18,J18,I18,L18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F18' ) )+_parseValue( document.getElementById( 'report1_H18' ) )+_parseValue( document.getElementById( 'report1_J18' ) )+_parseValue( document.getElementById( 'report1_L18' ) )).toFixed(2);
				document.getElementById( 'report1_N18' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_N18' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_N18' ) );
			}catch(e1){}
		}
		cells = ",,M18,E18,G18,I18,K18,N18,F18,E18,H18,G18,J18,I18,L18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_M18' ) )+_parseValue( document.getElementById( 'report1_N18' ) )).toFixed(2);
				document.getElementById( 'report1_O18' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_O18' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_O18' ) );
			}catch(e1){}
		}
		cells = ",,O18,M18,E18,G18,I18,K18,N18,F18,E18,H18,G18,J18,I18,L18,P18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_O18' ) )-_parseValue( document.getElementById( 'report1_P18' ) )).toFixed(2);
				document.getElementById( 'report1_Q18' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_Q18' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_Q18' ) );
			}catch(e1){}
		}
		cells = ",,P18,N18,F18,E18,H18,G18,J18,I18,L18,Q18,O18,M18,E18,G18,I18,K18,N18,F18,E18,H18,G18,J18,I18,L18,P18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = _parseValue( document.getElementById( 'report1_P18' ) )==0?_parseValue( document.getElementById( 'report1_N18' ) ):(_parseValue( document.getElementById( 'report1_Q18' ) )/(1+0.05)*0.05).toFixed(2);
				document.getElementById( 'report1_R18' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_R18' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_R18' ) );
			}catch(e1){}
		}
		cells = ",,E19,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E19' ) )*0.04).toFixed(2);
				document.getElementById( 'report1_F19' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F19' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F19' ) );
			}catch(e1){}
		}
		cells = ",,G19,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G19' ) )*0.04).toFixed(2);
				document.getElementById( 'report1_H19' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H19' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H19' ) );
			}catch(e1){}
		}
		cells = ",,I19,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_I19' ) )*0.04).toFixed(2);
				document.getElementById( 'report1_J19' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J19' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J19' ) );
			}catch(e1){}
		}
		cells = ",,E19,G19,I19,K19,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E19' ) )+_parseValue( document.getElementById( 'report1_G19' ) )+_parseValue( document.getElementById( 'report1_I19' ) )+_parseValue( document.getElementById( 'report1_K19' ) )).toFixed(2);
				document.getElementById( 'report1_M19' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M19' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M19' ) );
			}catch(e1){}
		}
		cells = ",,F19,E19,H19,G19,J19,I19,L19,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F19' ) )+_parseValue( document.getElementById( 'report1_H19' ) )+_parseValue( document.getElementById( 'report1_J19' ) )+_parseValue( document.getElementById( 'report1_L19' ) )).toFixed(2);
				document.getElementById( 'report1_N19' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_N19' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_N19' ) );
			}catch(e1){}
		}
		cells = ",,E20,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E20' ) )*0.03).toFixed(2);
				document.getElementById( 'report1_F20' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F20' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F20' ) );
			}catch(e1){}
		}
		cells = ",,G20,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G20' ) )*0.03).toFixed(2);
				document.getElementById( 'report1_H20' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H20' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H20' ) );
			}catch(e1){}
		}
		cells = ",,I20,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_I20' ) )*0.03).toFixed(2);
				document.getElementById( 'report1_J20' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J20' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J20' ) );
			}catch(e1){}
		}
		cells = ",,E20,G20,I20,K20,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E20' ) )+_parseValue( document.getElementById( 'report1_G20' ) )+_parseValue( document.getElementById( 'report1_I20' ) )+_parseValue( document.getElementById( 'report1_K20' ) )).toFixed(2);
				document.getElementById( 'report1_M20' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M20' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M20' ) );
			}catch(e1){}
		}
		cells = ",,F20,E20,H20,G20,J20,I20,L20,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F20' ) )+_parseValue( document.getElementById( 'report1_H20' ) )+_parseValue( document.getElementById( 'report1_J20' ) )+_parseValue( document.getElementById( 'report1_L20' ) )).toFixed(2);
				document.getElementById( 'report1_N20' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_N20' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_N20' ) );
			}catch(e1){}
		}
		cells = ",,E21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E21' ) )*0.03).toFixed(2);
				document.getElementById( 'report1_F21' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F21' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F21' ) );
			}catch(e1){}
		}
		cells = ",,G21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G21' ) )*0.03).toFixed(2);
				document.getElementById( 'report1_H21' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H21' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H21' ) );
			}catch(e1){}
		}
		cells = ",,I21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_I21' ) )*0.03).toFixed(2);
				document.getElementById( 'report1_J21' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J21' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J21' ) );
			}catch(e1){}
		}
		cells = ",,E21,G21,I21,K21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E21' ) )+_parseValue( document.getElementById( 'report1_G21' ) )+_parseValue( document.getElementById( 'report1_I21' ) )+_parseValue( document.getElementById( 'report1_K21' ) )).toFixed(2);
				document.getElementById( 'report1_M21' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M21' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M21' ) );
			}catch(e1){}
		}
		cells = ",,F21,E21,H21,G21,J21,I21,L21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F21' ) )+_parseValue( document.getElementById( 'report1_H21' ) )+_parseValue( document.getElementById( 'report1_J21' ) )+_parseValue( document.getElementById( 'report1_L21' ) )).toFixed(2);
				document.getElementById( 'report1_N21' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_N21' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_N21' ) );
			}catch(e1){}
		}
		cells = ",,M21,E21,G21,I21,K21,N21,F21,E21,H21,G21,J21,I21,L21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_M21' ) )+_parseValue( document.getElementById( 'report1_N21' ) )).toFixed(2);
				document.getElementById( 'report1_O21' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_O21' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_O21' ) );
			}catch(e1){}
		}
		cells = ",,O21,M21,E21,G21,I21,K21,N21,F21,E21,H21,G21,J21,I21,L21,P21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_O21' ) )-_parseValue( document.getElementById( 'report1_P21' ) )).toFixed(2);
				document.getElementById( 'report1_Q21' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_Q21' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_Q21' ) );
			}catch(e1){}
		}
		cells = ",,P21,N21,F21,E21,H21,G21,J21,I21,L21,Q21,O21,M21,E21,G21,I21,K21,N21,F21,E21,H21,G21,J21,I21,L21,P21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = _parseValue( document.getElementById( 'report1_P21' ) )==0?_parseValue( document.getElementById( 'report1_N21' ) ):(_parseValue( document.getElementById( 'report1_Q21' ) )/(1+0.03)*0.03).toFixed(2);
				document.getElementById( 'report1_R21' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_R21' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_R21' ) );
			}catch(e1){}
		}
		cells = ",,E22,G22,I22,K22,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E22' ) )+_parseValue( document.getElementById( 'report1_G22' ) )+_parseValue( document.getElementById( 'report1_I22' ) )+_parseValue( document.getElementById( 'report1_K22' ) )).toFixed(2);
				document.getElementById( 'report1_M22' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M22' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M22' ) );
			}catch(e1){}
		}
		cells = ",,F22,H22,J22,L22,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F22' ) )+_parseValue( document.getElementById( 'report1_H22' ) )+_parseValue( document.getElementById( 'report1_J22' ) )+_parseValue( document.getElementById( 'report1_L22' ) )).toFixed(2);
				document.getElementById( 'report1_N22' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_N22' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_N22' ) );
			}catch(e1){}
		}
		cells = ",,M22,E22,G22,I22,K22,N22,F22,H22,J22,L22,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_M22' ) )+_parseValue( document.getElementById( 'report1_N22' ) )).toFixed(2);
				document.getElementById( 'report1_O22' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_O22' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_O22' ) );
			}catch(e1){}
		}
		cells = ",,O22,M22,E22,G22,I22,K22,N22,F22,H22,J22,L22,P22,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_O22' ) )-_parseValue( document.getElementById( 'report1_P22' ) )).toFixed(2);
				document.getElementById( 'report1_Q22' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_Q22' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_Q22' ) );
			}catch(e1){}
		}
		cells = ",,E23,G23,I23,K23,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E23' ) )+_parseValue( document.getElementById( 'report1_G23' ) )+_parseValue( document.getElementById( 'report1_I23' ) )+_parseValue( document.getElementById( 'report1_K23' ) )).toFixed(2);
				document.getElementById( 'report1_M23' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M23' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M23' ) );
			}catch(e1){}
		}
		cells = ",,F23,H23,J23,L23,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F23' ) )+_parseValue( document.getElementById( 'report1_H23' ) )+_parseValue( document.getElementById( 'report1_J23' ) )+_parseValue( document.getElementById( 'report1_L23' ) )).toFixed(2);
				document.getElementById( 'report1_N23' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_N23' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_N23' ) );
			}catch(e1){}
		}
		cells = ",,M23,E23,G23,I23,K23,N23,F23,H23,J23,L23,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_M23' ) )+_parseValue( document.getElementById( 'report1_N23' ) )).toFixed(2);
				document.getElementById( 'report1_O23' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_O23' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_O23' ) );
			}catch(e1){}
		}
		cells = ",,O23,M23,E23,G23,I23,K23,N23,F23,H23,J23,L23,P23,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_O23' ) )-_parseValue( document.getElementById( 'report1_P23' ) )).toFixed(2);
				document.getElementById( 'report1_Q23' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_Q23' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_Q23' ) );
			}catch(e1){}
		}
		cells = ",,E24,G24,I24,K24,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E24' ) )+_parseValue( document.getElementById( 'report1_G24' ) )+_parseValue( document.getElementById( 'report1_I24' ) )+_parseValue( document.getElementById( 'report1_K24' ) )).toFixed(2);
				document.getElementById( 'report1_M24' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M24' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M24' ) );
			}catch(e1){}
		}
		cells = ",,F24,H24,J24,L24,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F24' ) )+_parseValue( document.getElementById( 'report1_H24' ) )+_parseValue( document.getElementById( 'report1_J24' ) )+_parseValue( document.getElementById( 'report1_L24' ) )).toFixed(2);
				document.getElementById( 'report1_N24' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_N24' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_N24' ) );
			}catch(e1){}
		}
		cells = ",,M24,E24,G24,I24,K24,N24,F24,H24,J24,L24,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_M24' ) )+_parseValue( document.getElementById( 'report1_N24' ) )).toFixed(2);
				document.getElementById( 'report1_O24' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_O24' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_O24' ) );
			}catch(e1){}
		}
		cells = ",,O24,M24,E24,G24,I24,K24,N24,F24,H24,J24,L24,P24,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_O24' ) )-_parseValue( document.getElementById( 'report1_P24' ) )).toFixed(2);
				document.getElementById( 'report1_Q24' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_Q24' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_Q24' ) );
			}catch(e1){}
		}
		cells = ",,M26,N26,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_M26' ) )+_parseValue( document.getElementById( 'report1_N26' ) )).toFixed(2);
				document.getElementById( 'report1_O26' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_O26' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_O26' ) );
			}catch(e1){}
		}
		cells = ",,O26,M26,N26,P26,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_O26' ) )-_parseValue( document.getElementById( 'report1_P26' ) )).toFixed(2);
				document.getElementById( 'report1_Q26' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_Q26' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_Q26' ) );
			}catch(e1){}
		}
		cells = ",,E27,G27,I27,K27,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E27' ) )+_parseValue( document.getElementById( 'report1_G27' ) )+_parseValue( document.getElementById( 'report1_I27' ) )+_parseValue( document.getElementById( 'report1_K27' ) )).toFixed(2);
				document.getElementById( 'report1_M27' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M27' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M27' ) );
			}catch(e1){}
		}
		cells = ",,E28,G28,I28,K28,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E28' ) )+_parseValue( document.getElementById( 'report1_G28' ) )+_parseValue( document.getElementById( 'report1_I28' ) )+_parseValue( document.getElementById( 'report1_K28' ) )).toFixed(2);
				document.getElementById( 'report1_M28' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M28' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M28' ) );
			}catch(e1){}
		}
		cells = ",,M28,E28,G28,I28,K28,N28,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_M28' ) )+_parseValue( document.getElementById( 'report1_N28' ) )).toFixed(2);
				document.getElementById( 'report1_O28' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_O28' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_O28' ) );
			}catch(e1){}
		}
		cells = ",,O28,M28,E28,G28,I28,K28,N28,P28,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_O28' ) )-_parseValue( document.getElementById( 'report1_P28' ) )).toFixed(2);
				document.getElementById( 'report1_Q28' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_Q28' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_Q28' ) );
			}catch(e1){}
		}
		cells = ",,E29,G29,I29,K29,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E29' ) )+_parseValue( document.getElementById( 'report1_G29' ) )+_parseValue( document.getElementById( 'report1_I29' ) )+_parseValue( document.getElementById( 'report1_K29' ) )).toFixed(2);
				document.getElementById( 'report1_M29' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M29' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M29' ) );
			}catch(e1){}
		}
		cells = ",,E30,G30,I30,K30,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E30' ) )+_parseValue( document.getElementById( 'report1_G30' ) )+_parseValue( document.getElementById( 'report1_I30' ) )+_parseValue( document.getElementById( 'report1_K30' ) )).toFixed(2);
				document.getElementById( 'report1_M30' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M30' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M30' ) );
			}catch(e1){}
		}
		cells = ",,M30,E30,G30,I30,K30,N30,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_M30' ) )+_parseValue( document.getElementById( 'report1_N30' ) )).toFixed(2);
				document.getElementById( 'report1_O30' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_O30' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_O30' ) );
			}catch(e1){}
		}
		cells = ",,O30,M30,E30,G30,I30,K30,N30,P30,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_O30' ) )-_parseValue( document.getElementById( 'report1_P30' ) )).toFixed(2);
				document.getElementById( 'report1_Q30' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_Q30' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_Q30' ) );
			}catch(e1){}
		}
		try{ group_autoCalc( 'report1_' + cellName ); }catch(e){}
	}

	function report1_checkValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_P15' ) )==0?_parseValue( document.getElementById( 'report1_R15' ) )==_parseValue( document.getElementById( 'report1_N15' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_P15,report1_R15,report1_N15" );}catch(e){}
			alert( '第12列=0时，第14列=第10列' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_P22' ) )==0?_parseValue( document.getElementById( 'report1_R22' ) )==_parseValue( document.getElementById( 'report1_N22' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_R22,report1_N22,report1_P22" );}catch(e){}
			alert( '第12列=0时，第14列=第10列' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_P23' ) )==0?_parseValue( document.getElementById( 'report1_R23' ) )==_parseValue( document.getElementById( 'report1_N23' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_R23,report1_N23,report1_P23" );}catch(e){}
			alert( '第12列=0时，第14列=第10列' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_P24' ) )==0?_parseValue( document.getElementById( 'report1_R24' ) )==_parseValue( document.getElementById( 'report1_N24' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_R24,report1_N24,report1_P24" );}catch(e){}
			alert( '第12列=0时，第14列=第10列' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_P26' ) )==0?_parseValue( document.getElementById( 'report1_R26' ) )==_parseValue( document.getElementById( 'report1_N26' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_R26,report1_N26,report1_P26" );}catch(e){}
			alert( '第12列=0时，第14列=第10列' );
			return false;
		}
		return true;
	}

</script>
</div>
</td></tr></table>
<div style="display:none"><form id="report1_submitForm" method=post action="/WSSBSL/reportServlet.aspx?action=11" target="submitFrame">
	<input type=hidden name=fileName value="/zzs2013Ybnsr/ybnsrFb1.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_73505">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2Fzzs2013Ybnsr%2FybnsrFb1.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000033386709&sbuuid=F0A486ECC12ABC478BE0031BF355F0AD&reportParamsId=15114905436835550171013">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_ZZS_2013_FB1;xmlName=zzs2013/zzs_ybnsr_fb1;pzxh=10014517000033386709;nsrsbh=91450107MA5KE0EQ2B;dataFromBz=0;raq=/zzs2013Ybnsr/ybnsrFb1.raq;sbuuid=F0A486ECC12ABC478BE0031BF355F0AD;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/zzs2013Ybnsr/ybnsrFb1.raq&srcType=file&cachedId=10_1_1_176_8080_73505&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_ZZS_2013_FB1%3BxmlName%3Dzzs2013%2Fzzs_ybnsr_fb1%3Bpzxh%3D10014517000033386709%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdataFromBz%3D0%3Braq%3D%2Fzzs2013Ybnsr%2FybnsrFb1.raq%3Bsbuuid%3DF0A486ECC12ABC478BE0031BF355F0AD%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
		rq_showPopWin( address, 400, 180, null );
	}
</script>
<script language=javascript>
	function report1_save() {
		_submitTable( document.getElementById( "report1" ) );
	}
</script>
</div>

	</td>
	</tr>
</table>

</body>
</html>

