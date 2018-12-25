<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_ybnsrFb2.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_ybnsrFb2" %>

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
	var report1_cachedId = "10_1_1_176_8080_73506";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2Fzzs2013Ybnsr%2FybnsrFb2.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15114905439809976171014&cachedId=10_1_1_176_8080_73506&t_i_m_e=1511490544027" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2Fzzs2013Ybnsr%2FybnsrFb2.raq&columns=0&srcType=file&reportParamsId=15114905439809976171014&cachedId=10_1_1_176_8080_73506&t_i_m_e=1511490544027" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2Fzzs2013Ybnsr%2FybnsrFb2.raq&columns=0&srcType=file&reportParamsId=15114905439809976171014&cachedId=10_1_1_176_8080_73506&t_i_m_e=1511490544027";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2Fzzs2013Ybnsr%2FybnsrFb2.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15114905439809976171014&cachedId=10_1_1_176_8080_73506&t_i_m_e=1511490544027";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2Fzzs2013Ybnsr%2FybnsrFb2.raq&srcType=file&reportParamsId=15114905439809976171014&cachedId=10_1_1_176_8080_73506&t_i_m_e=1511490544027" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2Fzzs2013Ybnsr%2FybnsrFb2.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15114905439809976171014&cachedId=10_1_1_176_8080_73506&t_i_m_e=1511490544027";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2Fzzs2013Ybnsr%2FybnsrFb2.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15114905439809976171014&cachedId=10_1_1_176_8080_73506&t_i_m_e=1511490544027";
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
	function report1487537over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1487537out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_2 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_4 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;line-height:16px;}
	.report1_6 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_9 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_12 { text-align:center;vertical-align:bottom;font-family:宋体;font-size:18px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_13 { text-align:center;vertical-align:top;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_14 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1487537out()" onmouseover="report1487537over()" rowCount=49 cols=9 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:648px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:78px;"></col>
		<col style="width:48px;"></col>
		<col style="width:97px;"></col>
		<col style="width:90px;"></col>
		<col style="width:55px;"></col>
		<col style="width:45px;"></col>
		<col style="width:95px;"></col>
		<col style="width:20px;"></col>
		<col style="width:120px;"></col>
	</colgroup>
	<tr rn="1" height=35 style="height:35px;">
		<td colSpan=9 id="report1_A1" colNo=1 value='10014517000033386709' onclick="_hideEditor()" class="report1_12">增值税纳税申报表附列资料（表二）</td>
	</tr>
	<tr rn="2" height=20 style="height:20px;">
		<td colSpan=9 id="report1_A2" colNo=1 value='（本期进项税额明细）' onclick="_hideEditor()" class="report1_13">（本期进项税额明细）</td>
	</tr>
	<tr rn="3" height=20 style="height:20px;">
		<td id="report1_A3" colNo=1 value='纳税人识别号' onclick="_hideEditor()" class="report1_8">纳税人识别号</td>
		<td colSpan=3 id="report1_B3" colNo=2 value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_1">91450107MA5KE0EQ2B</td>
		<td id="report1_E3" colNo=5 value='填表日期' onclick="_hideEditor()" class="report1_3">填表日期</td>
		<td colSpan=2 id="report1_F3" colNo=6 value='2017-11-02' onclick="_hideEditor()" class="report1_3">2017-11-02</td>
		<td colSpan=2 id="report1_H3" colNo=8 value='金额单位：元(列至角分)' onclick="_hideEditor()" class="report1_3">金额单位：元(列至角分)</td>
	</tr>
	<tr rn="4" height=35 style="height:35px;">
		<td id="report1_A4" colNo=1 value='纳税人名称' onclick="_hideEditor()" class="report1_8">纳税人名称</td>
		<td colSpan=3 id="report1_B4" colNo=2 value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_1">广西龙森胜贸易有限公司</td>
		<td id="report1_E4" colNo=5 value='所属日期' onclick="_hideEditor()" class="report1_3">所属日期</td>
		<td colSpan=2 id="report1_F4" colNo=6 value='2017-10-01' onclick="_hideEditor()" class="report1_3">2017-10-01</td>
		<td id="report1_H4" colNo=8 value='至' onclick="_hideEditor()" class="report1_3">至</td>
		<td id="report1_I4" colNo=9 value='2017-10-31' onclick="_hideEditor()" class="report1_3">2017-10-31</td>
	</tr>
	<tr rn="5" height=25 style="height:25px;">
		<td colSpan=9 id="report1_A5" colNo=1 value='一、申报抵扣的进项税额' onclick="_hideEditor()" class="report1_3">一、申报抵扣的进项税额</td>
	</tr>
	<tr rn="6" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A6" colNo=1 value='栏目' onclick="_hideEditor()" class="report1_3">栏目</td>
		<td id="report1_D6" colNo=4 value='栏次' onclick="_hideEditor()" class="report1_3">栏次</td>
		<td id="report1_E6" colNo=5 value='份数' onclick="_hideEditor()" class="report1_3">份数</td>
		<td colSpan=2 id="report1_F6" colNo=6 value='金额' onclick="_hideEditor()" class="report1_3">金额</td>
		<td colSpan=2 id="report1_H6" colNo=8 value='税额' onclick="_hideEditor()" class="report1_3">税额</td>
	</tr>
	<tr rn="7" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A7" colNo=1 value='（一）认证相符的税控增值税专用发票' onclick="_hideEditor()" class="report1_1">（一）认证相符的税控增值税专用发票</td>
		<td id="report1_D7" colNo=4 value='1=2+3' onclick="_hideEditor()" class="report1_1">1=2+3</td>
		<td id="report1_E7" colNo=5 value='0' onclick="_hideEditor()" class="report1_10">0</td>
		<td colSpan=2 id="report1_F7" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td colSpan=2 id="report1_H7" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
	</tr>
	<tr rn="8" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A8" colNo=1 value='其中：本期认证相符且本期申报抵扣' onclick="_hideEditor()" class="report1_1">其中：本期认证相符且本期申报抵扣</td>
		<td id="report1_D8" colNo=4 value='2' onclick="_hideEditor()" class="report1_1">2</td>
		<td id="report1_E8" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="6" value='0' onclick="_displayEditor()" class="report1_7">0</td>
		<td colSpan=2 id="report1_F8" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td colSpan=2 id="report1_H8" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="9" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A9" colNo=1 value='    前期认证相符且本期申报抵扣' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;前期认证相符且本期申报抵扣</td>
		<td id="report1_D9" colNo=4 value='3' onclick="_hideEditor()" class="report1_1">3</td>
		<td id="report1_E9" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="6" value='0' onclick="_displayEditor()" class="report1_7">0</td>
		<td colSpan=2 id="report1_F9" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td colSpan=2 id="report1_H9" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="10" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A10" colNo=1 value='（二）其他扣税凭证' onclick="_hideEditor()" class="report1_1">（二）其他扣税凭证</td>
		<td id="report1_D10" colNo=4 value='4=5+6+7+8' onclick="_hideEditor()" class="report1_1">4=5+6+7+8</td>
		<td id="report1_E10" colNo=5 value='0' onclick="_hideEditor()" class="report1_10">0</td>
		<td colSpan=2 id="report1_F10" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td colSpan=2 id="report1_H10" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
	</tr>
	<tr rn="11" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A11" colNo=1 value='其中：海关进口增值税专用缴款书' onclick="_hideEditor()" class="report1_1">其中：海关进口增值税专用缴款书</td>
		<td id="report1_D11" colNo=4 value='5' onclick="_hideEditor()" class="report1_1">5</td>
		<td id="report1_E11" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="6" value='0' onclick="_displayEditor()" class="report1_7">0</td>
		<td colSpan=2 id="report1_F11" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td colSpan=2 id="report1_H11" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="12" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A12" colNo=1 value='    农产品收购发票或者销售发票' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;农产品收购发票或者销售发票</td>
		<td id="report1_D12" colNo=4 value='6' onclick="_hideEditor()" class="report1_1">6</td>
		<td id="report1_E12" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="6" value='0' onclick="_displayEditor()" class="report1_7">0</td>
		<td colSpan=2 id="report1_F12" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td colSpan=2 id="report1_H12" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="13" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A13" colNo=1 value='    代扣代缴税收通用缴款书' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;代扣代缴税收通用缴款书</td>
		<td id="report1_D13" colNo=4 value='7' onclick="_hideEditor()" class="report1_1">7</td>
		<td id="report1_E13" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="6" value='0' onclick="_displayEditor()" class="report1_7">0</td>
		<td colSpan=2 id="report1_F13" colNo=6 value='--' onclick="_hideEditor()" class="report1_5">--</td>
		<td colSpan=2 id="report1_H13" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="14" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A14" colNo=1 value='    加计扣除农产品进项税额		 ' onclick="_hideEditor()" class="report1_9">&nbsp;&nbsp;&nbsp;&nbsp;加计扣除农产品进项税额		&nbsp;</td>
		<td id="report1_D14" colNo=4 value='8a' onclick="_hideEditor()" class="report1_9">8a</td>
		<td id="report1_E14" colNo=5 value='--' onclick="_hideEditor()" class="report1_11">--</td>
		<td colSpan=2 id="report1_F14" colNo=6 value='--' onclick="_hideEditor()" class="report1_11">--</td>
		<td colSpan=2 id="report1_H14" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="15" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A15" colNo=1 value='    其他' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;其他</td>
		<td id="report1_D15" colNo=4 value='8b' onclick="_hideEditor()" class="report1_1">8b</td>
		<td id="report1_E15" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="6" value='0' onclick="_displayEditor()" class="report1_7">0</td>
		<td colSpan=2 id="report1_F15" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td colSpan=2 id="report1_H15" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="16" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A16" colNo=1 value='（三）本期用于购建不动产的扣税凭证' onclick="_hideEditor()" class="report1_1">（三）本期用于购建不动产的扣税凭证</td>
		<td id="report1_D16" colNo=4 value='9' onclick="_hideEditor()" class="report1_1">9</td>
		<td id="report1_E16" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="6" value='0' onclick="_displayEditor()" class="report1_7">0</td>
		<td colSpan=2 id="report1_F16" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td colSpan=2 id="report1_H16" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="17" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A17" colNo=1 value='（四）本期不动产允许抵扣进项税额' onclick="_hideEditor()" class="report1_1">（四）本期不动产允许抵扣进项税额</td>
		<td id="report1_D17" colNo=4 value='10' onclick="_hideEditor()" class="report1_1">10</td>
		<td id="report1_E17" colNo=5 value='--' onclick="_hideEditor()" class="report1_5">--</td>
		<td colSpan=2 id="report1_F17" colNo=6 value='--' onclick="_hideEditor()" class="report1_5">--</td>
		<td colSpan=2 id="report1_H17" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="18" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A18" colNo=1 value='（五）外贸企业进项税额抵扣证明' onclick="_hideEditor()" class="report1_1">（五）外贸企业进项税额抵扣证明</td>
		<td id="report1_D18" colNo=4 value='11' onclick="_hideEditor()" class="report1_1">11</td>
		<td id="report1_E18" colNo=5 value='--' onclick="_hideEditor()" class="report1_5">--</td>
		<td colSpan=2 id="report1_F18" colNo=6 value='--' onclick="_hideEditor()" class="report1_5">--</td>
		<td colSpan=2 id="report1_H18" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="19" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A19" colNo=1 value='当期申报抵扣进项税额合计' onclick="_hideEditor()" class="report1_1">当期申报抵扣进项税额合计</td>
		<td id="report1_D19" colNo=4 value='12=1+4-9+10+11' onclick="_hideEditor()" class="report1_1">12=1+4-9+10+11</td>
		<td id="report1_E19" colNo=5 value='0' onclick="_hideEditor()" class="report1_10">0</td>
		<td colSpan=2 id="report1_F19" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td colSpan=2 id="report1_H19" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
	</tr>
	<tr rn="20" height=25 style="height:25px;">
		<td colSpan=9 id="report1_A20" colNo=1 value='二、进项税额转出额' onclick="_hideEditor()" class="report1_3">二、进项税额转出额</td>
	</tr>
	<tr rn="21" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A21" colNo=1 value='栏目' onclick="_hideEditor()" class="report1_1">栏目</td>
		<td id="report1_D21" colNo=4 value='栏次' onclick="_hideEditor()" class="report1_3">栏次</td>
		<td colSpan=5 id="report1_E21" colNo=5 value='税额' onclick="_hideEditor()" class="report1_3">税额</td>
	</tr>
	<tr rn="22" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A22" colNo=1 value='本期进项税转出额' onclick="_hideEditor()" class="report1_1">本期进项税转出额</td>
		<td id="report1_D22" colNo=4 value='13=14至23之和' onclick="_hideEditor()" class="report1_1">13=14至23之和</td>
		<td colSpan=5 id="report1_E22" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_22_5_dataValid()" onclick="_hideEditor()" class="report1_6">0.00</td>
<script language=javascript>
	function report1_22_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E22' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E22" );}catch(e){}
			alert( '表内关系需满足：第13行>=0' );
			return false;
		}
		return true;
	}
</script>
	</tr>
	<tr rn="23" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A23" colNo=1 value='其中：免税项目用' onclick="_hideEditor()" class="report1_1">其中：免税项目用</td>
		<td id="report1_D23" colNo=4 value='14' onclick="_hideEditor()" class="report1_1">14</td>
		<td colSpan=5 id="report1_E23" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="24" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A24" colNo=1 value='    集体福利、个人消费' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;集体福利、个人消费</td>
		<td id="report1_D24" colNo=4 value='15' onclick="_hideEditor()" class="report1_1">15</td>
		<td colSpan=5 id="report1_E24" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="25" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A25" colNo=1 value='    非正常损失' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;非正常损失</td>
		<td id="report1_D25" colNo=4 value='16' onclick="_hideEditor()" class="report1_1">16</td>
		<td colSpan=5 id="report1_E25" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="26" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A26" colNo=1 value='    简易计税方法征税项目用' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;简易计税方法征税项目用</td>
		<td id="report1_D26" colNo=4 value='17' onclick="_hideEditor()" class="report1_1">17</td>
		<td colSpan=5 id="report1_E26" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="27" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A27" colNo=1 value='    免抵退税办法不得抵扣的进项税额' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;免抵退税办法不得抵扣的进项税额</td>
		<td id="report1_D27" colNo=4 value='18' onclick="_hideEditor()" class="report1_1">18</td>
		<td colSpan=5 id="report1_E27" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="28" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A28" colNo=1 value='    纳税检查调减进项税额' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;纳税检查调减进项税额</td>
		<td id="report1_D28" colNo=4 value='19' onclick="_hideEditor()" class="report1_1">19</td>
		<td colSpan=5 id="report1_E28" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="29" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A29" colNo=1 value='    红字专用发票通知单注明的进项税额' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;红字专用发票通知单注明的进项税额</td>
		<td id="report1_D29" colNo=4 value='20' onclick="_hideEditor()" class="report1_1">20</td>
		<td colSpan=5 id="report1_E29" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="30" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A30" colNo=1 value='    上期留抵税额抵减欠税' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;上期留抵税额抵减欠税</td>
		<td id="report1_D30" colNo=4 value='21' onclick="_hideEditor()" class="report1_1">21</td>
		<td colSpan=5 id="report1_E30" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="31" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A31" colNo=1 value='    上期留抵税额退税' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;上期留抵税额退税</td>
		<td id="report1_D31" colNo=4 value='22' onclick="_hideEditor()" class="report1_1">22</td>
		<td colSpan=5 id="report1_E31" colNo=5 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">0.00</td>
	</tr>
	<tr rn="32" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A32" colNo=1 value='    其他应作进项税额转出的情形' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;其他应作进项税额转出的情形</td>
		<td id="report1_D32" colNo=4 value='23' onclick="_hideEditor()" class="report1_1">23</td>
		<td colSpan=5 id="report1_E32" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="33" height=25 style="height:25px;">
		<td colSpan=9 id="report1_A33" colNo=1 value='三、待抵扣进项税额' onclick="_hideEditor()" class="report1_3">三、待抵扣进项税额</td>
	</tr>
	<tr rn="34" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A34" colNo=1 value='栏目' onclick="_hideEditor()" class="report1_3">栏目</td>
		<td id="report1_D34" colNo=4 value='栏次' onclick="_hideEditor()" class="report1_3">栏次</td>
		<td id="report1_E34" colNo=5 value='份数' onclick="_hideEditor()" class="report1_3">份数</td>
		<td colSpan=2 id="report1_F34" colNo=6 value='金额' onclick="_hideEditor()" class="report1_3">金额</td>
		<td colSpan=2 id="report1_H34" colNo=8 value='税额' onclick="_hideEditor()" class="report1_3">税额</td>
	</tr>
	<tr rn="35" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A35" colNo=1 value='（一）认证相符的税控增值税专用发票' onclick="_hideEditor()" class="report1_1">（一）认证相符的税控增值税专用发票</td>
		<td id="report1_D35" colNo=4 value='24' onclick="_hideEditor()" class="report1_1">24</td>
		<td id="report1_E35" colNo=5 value='--' onclick="_hideEditor()" class="report1_5">--</td>
		<td colSpan=2 id="report1_F35" colNo=6 value='--' onclick="_hideEditor()" class="report1_5">--</td>
		<td colSpan=2 id="report1_H35" colNo=8 value='--' onclick="_hideEditor()" class="report1_5">--</td>
	</tr>
	<tr rn="36" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A36" colNo=1 value='期初已认证相符但未申报抵扣' onclick="_hideEditor()" class="report1_1">期初已认证相符但未申报抵扣</td>
		<td id="report1_D36" colNo=4 value='25' onclick="_hideEditor()" class="report1_1">25</td>
		<td id="report1_E36" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="6" value='0' onclick="_displayEditor()" class="report1_7">0</td>
		<td colSpan=2 id="report1_F36" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td colSpan=2 id="report1_H36" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="37" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A37" colNo=1 value='    本期认证相符且本期未申报抵扣' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;本期认证相符且本期未申报抵扣</td>
		<td id="report1_D37" colNo=4 value='26' onclick="_hideEditor()" class="report1_1">26</td>
		<td id="report1_E37" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="6" value='0' onclick="_displayEditor()" class="report1_7">0</td>
		<td colSpan=2 id="report1_F37" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td colSpan=2 id="report1_H37" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="38" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A38" colNo=1 value='    期末已认证相符但未申报抵扣' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;期末已认证相符但未申报抵扣</td>
		<td id="report1_D38" colNo=4 value='27' onclick="_hideEditor()" class="report1_1">27</td>
		<td id="report1_E38" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="6" value='0' onclick="_displayEditor()" class="report1_7">0</td>
		<td colSpan=2 id="report1_F38" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td colSpan=2 id="report1_H38" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="39" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A39" colNo=1 value='    其中：按照税法规定不允许抵扣' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;其中：按照税法规定不允许抵扣</td>
		<td id="report1_D39" colNo=4 value='28' onclick="_hideEditor()" class="report1_1">28</td>
		<td id="report1_E39" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="6" value='0' onclick="_displayEditor()" class="report1_7">0</td>
		<td colSpan=2 id="report1_F39" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td colSpan=2 id="report1_H39" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="40" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A40" colNo=1 value='（二）其他扣税凭证' onclick="_hideEditor()" class="report1_1">（二）其他扣税凭证</td>
		<td id="report1_D40" colNo=4 value='29=30至33之和' onclick="_hideEditor()" class="report1_1">29=30至33之和</td>
		<td id="report1_E40" colNo=5 value='0' onclick="_hideEditor()" class="report1_10">0</td>
		<td colSpan=2 id="report1_F40" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td colSpan=2 id="report1_H40" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
	</tr>
	<tr rn="41" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A41" colNo=1 value='其中：海关进口增值税专用缴款书' onclick="_hideEditor()" class="report1_1">其中：海关进口增值税专用缴款书</td>
		<td id="report1_D41" colNo=4 value='30' onclick="_hideEditor()" class="report1_1">30</td>
		<td id="report1_E41" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="6" value='0' onclick="_displayEditor()" class="report1_7">0</td>
		<td colSpan=2 id="report1_F41" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td colSpan=2 id="report1_H41" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="42" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A42" colNo=1 value='    农产品收购发票或者销售发票' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;农产品收购发票或者销售发票</td>
		<td id="report1_D42" colNo=4 value='31' onclick="_hideEditor()" class="report1_1">31</td>
		<td id="report1_E42" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="6" value='0' onclick="_displayEditor()" class="report1_7">0</td>
		<td colSpan=2 id="report1_F42" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td colSpan=2 id="report1_H42" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="43" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A43" colNo=1 value='    代扣代缴税收通用缴款书' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;代扣代缴税收通用缴款书</td>
		<td id="report1_D43" colNo=4 value='32' onclick="_hideEditor()" class="report1_1">32</td>
		<td id="report1_E43" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="6" value='0' onclick="_displayEditor()" class="report1_7">0</td>
		<td colSpan=2 id="report1_F43" colNo=6 value='--' onclick="_hideEditor()" class="report1_5">--</td>
		<td colSpan=2 id="report1_H43" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="44" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A44" colNo=1 value='    其他' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;其他</td>
		<td id="report1_D44" colNo=4 value='33' onclick="_hideEditor()" class="report1_1">33</td>
		<td id="report1_E44" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="6" value='0' onclick="_displayEditor()" class="report1_7">0</td>
		<td colSpan=2 id="report1_F44" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td colSpan=2 id="report1_H44" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="45" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A45" colNo=1 value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_D45" colNo=4 value='34' onclick="_hideEditor()" class="report1_1">34</td>
		<td id="report1_E45" colNo=5 value='0' onclick="_hideEditor()" class="report1_14">0</td>
		<td colSpan=2 id="report1_F45" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">0.00</td>
		<td colSpan=2 id="report1_H45" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">0.00</td>
	</tr>
	<tr rn="46" height=25 style="height:25px;">
		<td colSpan=9 id="report1_A46" colNo=1 value='四、其他' onclick="_hideEditor()" class="report1_3">四、其他</td>
	</tr>
	<tr rn="47" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A47" colNo=1 value='栏目' onclick="_hideEditor()" class="report1_3">栏目</td>
		<td id="report1_D47" colNo=4 value='栏次' onclick="_hideEditor()" class="report1_3">栏次</td>
		<td id="report1_E47" colNo=5 value='份数' onclick="_hideEditor()" class="report1_3">份数</td>
		<td colSpan=2 id="report1_F47" colNo=6 value='金额' onclick="_hideEditor()" class="report1_3">金额</td>
		<td colSpan=2 id="report1_H47" colNo=8 value='税额' onclick="_hideEditor()" class="report1_3">税额</td>
	</tr>
	<tr rn="48" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A48" colNo=1 value='本期认证相符的税控增值税专用发票' onclick="_hideEditor()" class="report1_1">本期认证相符的税控增值税专用发票</td>
		<td id="report1_D48" colNo=4 value='35' onclick="_hideEditor()" class="report1_1">35</td>
		<td id="report1_E48" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="6" value='0' onclick="_displayEditor()" class="report1_7">0</td>
		<td colSpan=2 id="report1_F48" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td colSpan=2 id="report1_H48" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
	<tr rn="49" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A49" colNo=1 value='代扣代缴税额' onclick="_hideEditor()" class="report1_1">代扣代缴税额</td>
		<td id="report1_D49" colNo=4 value='36' onclick="_hideEditor()" class="report1_1">36</td>
		<td id="report1_E49" colNo=5 value='--' onclick="_hideEditor()" class="report1_5">--</td>
		<td colSpan=2 id="report1_F49" colNo=6 value='--' onclick="_hideEditor()" class="report1_5">--</td>
		<td colSpan=2 id="report1_H49" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,E8,E9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = _parseValue( document.getElementById( 'report1_E8' ) )+_parseValue( document.getElementById( 'report1_E9' ) );
				document.getElementById( 'report1_E7' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E7' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E7' ) );
			}catch(e1){}
		}
		cells = ",,F8,F9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F8' ) )+_parseValue( document.getElementById( 'report1_F9' ) )).toFixed(2);
				document.getElementById( 'report1_F7' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F7' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F7' ) );
			}catch(e1){}
		}
		cells = ",,H8,H9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H8' ) )+_parseValue( document.getElementById( 'report1_H9' ) )).toFixed(2);
				document.getElementById( 'report1_H7' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H7' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H7' ) );
			}catch(e1){}
		}
		cells = ",,E11,E12,E13,E14,E15,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = _parseValue( document.getElementById( 'report1_E11' ) )+_parseValue( document.getElementById( 'report1_E12' ) )+_parseValue( document.getElementById( 'report1_E13' ) )+_parseValue( document.getElementById( 'report1_E14' ) )+_parseValue( document.getElementById( 'report1_E15' ) );
				document.getElementById( 'report1_E10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E10' ) );
			}catch(e1){}
		}
		cells = ",,F11,F12,F13,F14,F15,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F11' ) )+_parseValue( document.getElementById( 'report1_F12' ) )+_parseValue( document.getElementById( 'report1_F13' ) )+_parseValue( document.getElementById( 'report1_F14' ) )+_parseValue( document.getElementById( 'report1_F15' ) )).toFixed(2);
				document.getElementById( 'report1_F10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F10' ) );
			}catch(e1){}
		}
		cells = ",,H11,H12,H13,H14,H15,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H11' ) )+_parseValue( document.getElementById( 'report1_H12' ) )+_parseValue( document.getElementById( 'report1_H13' ) )+_parseValue( document.getElementById( 'report1_H14' ) )+_parseValue( document.getElementById( 'report1_H15' ) )).toFixed(2);
				document.getElementById( 'report1_H10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H10' ) );
			}catch(e1){}
		}
		cells = ",,E7,E8,E9,E10,E11,E12,E13,E14,E15,E16,E17,E18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = _parseValue( document.getElementById( 'report1_E7' ) )+_parseValue( document.getElementById( 'report1_E10' ) )-_parseValue( document.getElementById( 'report1_E16' ) )+_parseValue( document.getElementById( 'report1_E17' ) )+_parseValue( document.getElementById( 'report1_E18' ) );
				document.getElementById( 'report1_E19' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E19' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E19' ) );
			}catch(e1){}
		}
		cells = ",,F7,F8,F9,F10,F11,F12,F13,F14,F15,F16,F17,F18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F7' ) )+_parseValue( document.getElementById( 'report1_F10' ) )-_parseValue( document.getElementById( 'report1_F16' ) )+_parseValue( document.getElementById( 'report1_F17' ) )+_parseValue( document.getElementById( 'report1_F18' ) )).toFixed(2);
				document.getElementById( 'report1_F19' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F19' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F19' ) );
			}catch(e1){}
		}
		cells = ",,H7,H8,H9,H10,H11,H12,H13,H14,H15,H16,H17,H18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H7' ) )+_parseValue( document.getElementById( 'report1_H10' ) )-_parseValue( document.getElementById( 'report1_H16' ) )+_parseValue( document.getElementById( 'report1_H17' ) )+_parseValue( document.getElementById( 'report1_H18' ) )).toFixed(2);
				document.getElementById( 'report1_H19' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H19' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H19' ) );
			}catch(e1){}
		}
		cells = ",,E23,E24,E25,E26,E27,E28,E29,E30,E31,E32,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E23' ) )+_parseValue( document.getElementById( 'report1_E24' ) )+_parseValue( document.getElementById( 'report1_E25' ) )+_parseValue( document.getElementById( 'report1_E26' ) )+_parseValue( document.getElementById( 'report1_E27' ) )+_parseValue( document.getElementById( 'report1_E28' ) )+_parseValue( document.getElementById( 'report1_E29' ) )+_parseValue( document.getElementById( 'report1_E30' ) )+_parseValue( document.getElementById( 'report1_E31' ) )+_parseValue( document.getElementById( 'report1_E32' ) )).toFixed(2);
				document.getElementById( 'report1_E22' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E22' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E22' ) );
			}catch(e1){}
		}
		cells = ",,E41,E42,E43,E44,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = _parseValue( document.getElementById( 'report1_E41' ) )+_parseValue( document.getElementById( 'report1_E42' ) )+_parseValue( document.getElementById( 'report1_E43' ) )+_parseValue( document.getElementById( 'report1_E44' ) );
				document.getElementById( 'report1_E40' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E40' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E40' ) );
			}catch(e1){}
		}
		cells = ",,F41,F42,F44,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F41' ) )+_parseValue( document.getElementById( 'report1_F42' ) )+_parseValue( document.getElementById( 'report1_F44' ) )).toFixed(2);
				document.getElementById( 'report1_F40' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F40' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F40' ) );
			}catch(e1){}
		}
		cells = ",,H41,H42,H43,H44,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H41' ) )+_parseValue( document.getElementById( 'report1_H42' ) )+_parseValue( document.getElementById( 'report1_H43' ) )+_parseValue( document.getElementById( 'report1_H44' ) )).toFixed(2);
				document.getElementById( 'report1_H40' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H40' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H40' ) );
			}catch(e1){}
		}
		try{ group_autoCalc( 'report1_' + cellName ); }catch(e){}
	}

	function report1_checkValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E22' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E22" );}catch(e){}
			alert( '表内关系需满足：第13行>=0' );
			return false;
		}
		return true;
	}

</script>
</div>
</td></tr></table>
<div style="display:none"><form id="report1_submitForm" method=post action="/WSSBSL/reportServlet.aspx?action=11" target="submitFrame">
	<input type=hidden name=fileName value="/zzs2013Ybnsr/ybnsrFb2.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_73506">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2Fzzs2013Ybnsr%2FybnsrFb2.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000033386709&sbuuid=F0A486ECC12ABC478BE0031BF355F0AD&reportParamsId=15114905439809976171014">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_ZZS_2013_FB2;xmlName=zzs2013/zzs_ybnsr_fb2;pzxh=10014517000033386709;nsrsbh=91450107MA5KE0EQ2B;dataFromBz=0;raq=/zzs2013Ybnsr/ybnsrFb2.raq;sbuuid=F0A486ECC12ABC478BE0031BF355F0AD;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/zzs2013Ybnsr/ybnsrFb2.raq&srcType=file&cachedId=10_1_1_176_8080_73506&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_ZZS_2013_FB2%3BxmlName%3Dzzs2013%2Fzzs_ybnsr_fb2%3Bpzxh%3D10014517000033386709%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdataFromBz%3D0%3Braq%3D%2Fzzs2013Ybnsr%2FybnsrFb2.raq%3Bsbuuid%3DF0A486ECC12ABC478BE0031BF355F0AD%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

