<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_whsyjsfsbb.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_whsyjsfsbb" %>










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
	var report1_cachedId = "10_1_1_176_8080_74406";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2Fwhsyjsf%2Fwhsyjsfsbb.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15115034213832703171890&cachedId=10_1_1_176_8080_74406&t_i_m_e=1511503421414" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2Fwhsyjsf%2Fwhsyjsfsbb.raq&columns=0&srcType=file&reportParamsId=15115034213832703171890&cachedId=10_1_1_176_8080_74406&t_i_m_e=1511503421414" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2Fwhsyjsf%2Fwhsyjsfsbb.raq&columns=0&srcType=file&reportParamsId=15115034213832703171890&cachedId=10_1_1_176_8080_74406&t_i_m_e=1511503421414";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2Fwhsyjsf%2Fwhsyjsfsbb.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15115034213832703171890&cachedId=10_1_1_176_8080_74406&t_i_m_e=1511503421414";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2Fwhsyjsf%2Fwhsyjsfsbb.raq&srcType=file&reportParamsId=15115034213832703171890&cachedId=10_1_1_176_8080_74406&t_i_m_e=1511503421414" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2Fwhsyjsf%2Fwhsyjsfsbb.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15115034213832703171890&cachedId=10_1_1_176_8080_74406&t_i_m_e=1511503421414";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2Fwhsyjsf%2Fwhsyjsfsbb.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15115034213832703171890&cachedId=10_1_1_176_8080_74406&t_i_m_e=1511503421414";
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
	function report1488412over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1488412out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#008000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_3 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#008000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E0E0E0;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:right;vertical-align:bottom;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_10 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E0E0E0;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_12 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E0E0E0;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_13 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_14 { text-align:center;vertical-align:top;font-family:宋体;font-size:10px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_15 { text-align:left;vertical-align:middle;font-family:宋体;font-size:10px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_16 { text-align:left;vertical-align:middle;font-family:宋体;font-size:10px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_17 { text-align:left;vertical-align:top;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_18 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_19 { text-align:center;vertical-align:middle;font-family:黑体;font-size:18px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_20 { text-align:center;vertical-align:bottom;font-family:黑体;font-size:16px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_21 { text-align:left;vertical-align:bottom;font-family:宋体;font-size:10px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_22 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1488412out()" onmouseover="report1488412over()" rowCount=30 cols=9 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:626px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:29px;"></col>
		<col style="width:49px;"></col>
		<col style="width:37px;"></col>
		<col style="width:172px;"></col>
		<col style="width:71px;"></col>
		<col style="width:120px;"></col>
		<col style="width:44px;"></col>
		<col style="width:104px;"></col>
	</colgroup>
	<tr rn="1" height=33 style="height:33px;">
		<td rowSpan=2 colSpan=8 id="report1_A1" colNo=1 value='10014517000033404947' onclick="_hideEditor()" class="report1_19">文化事业建设费申报表</td>
		<td id="report1_I1" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_20" style="display:none;"></td>
	</tr>
	<tr rn="2" height=12 style="height:12px;">
		<td id="report1_I2" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_14" style="display:none;"></td>
	</tr>
	<tr rn="3" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A3" colNo=1 value='缴纳人识别号' onclick="_hideEditor()" class="report1_3">缴纳人识别号</td>
		<td id="report1_D3" colNo=4 value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_18">91450107MA5KE0EQ2B</td>
		<td id="report1_E3" colNo=5 value='填表日期' onclick="_hideEditor()" class="report1_7">填表日期</td>
		<td id="report1_F3" colNo=6 value='2017-11-02' onclick="_hideEditor()" class="report1_7">2017-11-02</td>
		<td colSpan=2 id="report1_G3" colNo=7 value='金额单位：元（列至角分）' onclick="_hideEditor()" class="report1_7">金额单位：元（列至角分）</td>
		<td id="report1_I3" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_7" style="display:none;"></td>
	</tr>
	<tr rn="4" height=35 style="height:35px;">
		<td colSpan=3 id="report1_A4" colNo=1 value='缴纳人名称（公章）' onclick="_hideEditor()" class="report1_3">缴纳人名称（公章）</td>
		<td id="report1_D4" colNo=4 value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_2">广西龙森胜贸易有限公司</td>
		<td id="report1_E4" colNo=5 value='费款所属期' onclick="_hideEditor()" class="report1_7">费款所属期</td>
		<td id="report1_F4" colNo=6 value='2017-10-01' onclick="_hideEditor()" class="report1_7">2017-10-01</td>
		<td id="report1_G4" colNo=7 value='至' onclick="_hideEditor()" class="report1_7">至</td>
		<td id="report1_H4" colNo=8 value='2017-10-31' onclick="_hideEditor()" class="report1_7">2017-10-31</td>
		<td id="report1_I4" colNo=9 bkj="true" value='N' onclick="_hideEditor()" class="report1_7" style="display:none;"></td>
	</tr>
	<tr rn="5" height=20 style="height:20px;">
		<td colSpan=4 id="report1_A5" colNo=1 value='项      目' onclick="_hideEditor()" class="report1_9">项&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目</td>
		<td id="report1_E5" colNo=5 value='栏次' onclick="_hideEditor()" class="report1_9">栏次</td>
		<td id="report1_F5" colNo=6 value='本月（期）数' onclick="_hideEditor()" class="report1_9">本月（期）数</td>
		<td colSpan=2 id="report1_G5" colNo=7 value='本年累计' onclick="_hideEditor()" class="report1_9">本年累计</td>
		<td id="report1_I5" colNo=9 bkj="true" value='上期累计' onclick="_hideEditor()" class="report1_7" style="display:none;"></td>
	</tr>
	<tr rn="6" height=20 style="height:20px;">
		<td rowSpan=2 id="report1_A6" colNo=1 value='计费收入' onclick="_hideEditor()" class="report1_9">计费<br>收入</td>
		<td colSpan=3 id="report1_B6" colNo=2 value=' 应征收入' onclick="_hideEditor()" class="report1_2">&nbsp;应征收入</td>
		<td id="report1_E6" colNo=5 value='1' onclick="_hideEditor()" class="report1_2">1</td>
		<td id="report1_F6" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_4">0.00</td>
		<td colSpan=2 id="report1_G6" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_I6" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_13" style="display:none;"></td>
	</tr>
	<tr rn="7" height=20 style="height:20px;">
		<td colSpan=3 id="report1_B7" colNo=2 value=' 免征收入' onclick="_hideEditor()" class="report1_2">&nbsp;免征收入</td>
		<td id="report1_E7" colNo=5 value='2' onclick="_hideEditor()" class="report1_2">2</td>
		<td id="report1_F7" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_4">0.00</td>
		<td colSpan=2 id="report1_G7" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_I7" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_13" style="display:none;"></td>
	</tr>
	<tr rn="8" height=20 style="height:20px;">
		<td rowSpan=8 id="report1_A8" colNo=1 value='费
额
计
算
' onclick="_hideEditor()" class="report1_9">费<br>额<br>计<br>算<br></td>
		<td colSpan=3 id="report1_B8" colNo=2 value=' 减除项目期初金额' onclick="_hideEditor()" class="report1_2">&nbsp;减除项目期初金额</td>
		<td id="report1_E8" colNo=5 value='3' onclick="_hideEditor()" class="report1_2">3</td>
		<td id="report1_F8" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_10">0.00</td>
		<td colSpan=2 id="report1_G8" colNo=7 value='--' onclick="_hideEditor()" class="report1_12">--</td>
		<td id="report1_I8" colNo=9 bkj="true" value='0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="9" height=20 style="height:20px;">
		<td colSpan=3 id="report1_B9" colNo=2 value=' 减除项目本期发生额' onclick="_hideEditor()" class="report1_2">&nbsp;减除项目本期发生额</td>
		<td id="report1_E9" colNo=5 value='4' onclick="_hideEditor()" class="report1_2">4</td>
		<td id="report1_F9" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_4">0.00</td>
		<td colSpan=2 id="report1_G9" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td id="report1_I9" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="10" height=20 style="height:20px;">
		<td rowSpan=2 id="report1_B10" colNo=2 value='本期
减除额' onclick="_hideEditor()" class="report1_9">本期<br>减除额</td>
		<td colSpan=2 id="report1_C10" colNo=3 value=' 应征收入减除额' onclick="_hideEditor()" class="report1_2">&nbsp;应征收入减除额</td>
		<td id="report1_E10" colNo=5 value='5' onclick="_hideEditor()" class="report1_2">5</td>
		<td id="report1_F10" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td colSpan=2 id="report1_G10" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_I10" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="11" height=20 style="height:20px;">
		<td colSpan=2 id="report1_C11" colNo=3 value=' 免征收入减除额' onclick="_hideEditor()" class="report1_2">&nbsp;免征收入减除额</td>
		<td id="report1_E11" colNo=5 value='6' onclick="_hideEditor()" class="report1_2">6</td>
		<td id="report1_F11" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td colSpan=2 id="report1_G11" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_I11" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8" style="display:none;"></td>
	</tr>
	<tr rn="12" height=20 style="height:20px;">
		<td colSpan=3 id="report1_B12" colNo=2 value='减除项目期末余额' onclick="_hideEditor()" class="report1_2">减除项目期末余额</td>
		<td id="report1_E12" colNo=5 value='7=3+4-5-6' onclick="_hideEditor()" class="report1_2">7=3+4-5-6</td>
		<td id="report1_F12" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td colSpan=2 id="report1_G12" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td id="report1_I12" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8" style="display:none;"></td>
	</tr>
	<tr rn="13" height=20 style="height:20px;">
		<td colSpan=3 id="report1_B13" colNo=2 value='计费销售额' onclick="_hideEditor()" class="report1_2">计费销售额</td>
		<td id="report1_E13" colNo=5 value='8=1-5' onclick="_hideEditor()" class="report1_2">8=1-5</td>
		<td id="report1_F13" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td colSpan=2 id="report1_G13" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_I13" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="14" height=20 style="height:20px;">
		<td colSpan=3 id="report1_B14" colNo=2 value='费率' onclick="_hideEditor()" class="report1_2">费率</td>
		<td id="report1_E14" colNo=5 value='9' onclick="_hideEditor()" class="report1_2">9</td>
		<td id="report1_F14" colNo=6 value='0.03' format="%230.00%25" digits="4" onclick="_hideEditor()" class="report1_10">3.00%</td>
		<td colSpan=2 id="report1_G14" colNo=7 value='--' onclick="_hideEditor()" class="report1_12">--</td>
		<td id="report1_I14" colNo=9 bkj="true" value='0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="15" height=20 style="height:20px;">
		<td colSpan=3 id="report1_B15" colNo=2 value='应缴费额' onclick="_hideEditor()" class="report1_2">应缴费额</td>
		<td id="report1_E15" colNo=5 value='10=8×9' onclick="_hideEditor()" class="report1_2">10=8×9</td>
		<td id="report1_F15" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td colSpan=2 id="report1_G15" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_I15" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="16" height=20 style="height:20px;">
		<td rowSpan=9 id="report1_A16" colNo=1 value='费额缴纳' onclick="_hideEditor()" class="report1_9">费额<br>缴纳</td>
		<td colSpan=3 id="report1_B16" colNo=2 value='期初未缴费额（多缴为负）' onclick="_hideEditor()" class="report1_2">期初未缴费额（多缴为负）</td>
		<td id="report1_E16" colNo=5 value='11' onclick="_hideEditor()" class="report1_2">11</td>
		<td id="report1_F16" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_10">0.00</td>
		<td colSpan=2 id="report1_G16" colNo=7 value='--' onclick="_hideEditor()" class="report1_12">--</td>
		<td id="report1_I16" colNo=9 bkj="true" value='0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="17" height=20 style="height:20px;">
		<td colSpan=3 id="report1_B17" colNo=2 value='本期已缴费额' onclick="_hideEditor()" class="report1_2">本期已缴费额</td>
		<td id="report1_E17" colNo=5 value='12=13+14+15' onclick="_hideEditor()" class="report1_2">12=13+14+15</td>
		<td id="report1_F17" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td colSpan=2 id="report1_G17" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_I17" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="18" height=20 style="height:20px;">
		<td colSpan=3 id="report1_B18" colNo=2 value='    其中：本期预缴费额' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;其中：本期预缴费额</td>
		<td id="report1_E18" colNo=5 value='13' onclick="_hideEditor()" class="report1_2">13</td>
		<td id="report1_F18" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_11">0.00</td>
		<td colSpan=2 id="report1_G18" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_I18" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_13" style="display:none;"></td>
	</tr>
	<tr rn="19" height=20 style="height:20px;">
		<td colSpan=3 id="report1_B19" colNo=2 value='          本期缴纳上期费额' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本期缴纳上期费额</td>
		<td id="report1_E19" colNo=5 value='14' onclick="_hideEditor()" class="report1_2">14</td>
		<td id="report1_F19" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_10">0.00</td>
		<td colSpan=2 id="report1_G19" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_I19" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_13" style="display:none;"></td>
	</tr>
	<tr rn="20" height=20 style="height:20px;">
		<td colSpan=3 id="report1_B20" colNo=2 value='          本期缴纳欠费额' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本期缴纳欠费额</td>
		<td id="report1_E20" colNo=5 value='15' onclick="_hideEditor()" class="report1_2">15</td>
		<td id="report1_F20" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_10">0.00</td>
		<td colSpan=2 id="report1_G20" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_I20" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8" style="display:none;"></td>
	</tr>
	<tr rn="21" height=20 style="height:20px;">
		<td colSpan=3 id="report1_B21" colNo=2 value='期末未缴费额（多缴为负）' onclick="_hideEditor()" class="report1_2">期末未缴费额（多缴为负）</td>
		<td id="report1_E21" colNo=5 value='16=10+11-12' onclick="_hideEditor()" class="report1_2">16=10+11-12</td>
		<td id="report1_F21" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td colSpan=2 id="report1_G21" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td id="report1_I21" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8" style="display:none;"></td>
	</tr>
	<tr rn="22" height=20 style="height:20px;">
		<td colSpan=3 id="report1_B22" colNo=2 value='其中：欠缴费额（≥0）' onclick="_hideEditor()" class="report1_2">其中：欠缴费额（≥0）</td>
		<td id="report1_E22" colNo=5 value='17=11-14-15' onclick="_hideEditor()" class="report1_2">17=11-14-15</td>
		<td id="report1_F22" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td colSpan=2 id="report1_G22" colNo=7 value='--' onclick="_hideEditor()" class="report1_12">--</td>
		<td id="report1_I22" colNo=9 bkj="true" value='0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8" style="display:none;"></td>
	</tr>
	<tr rn="23" height=20 style="height:20px;">
		<td colSpan=3 id="report1_B23" colNo=2 value='本期应补（退）费额' onclick="_hideEditor()" class="report1_2">本期应补（退）费额</td>
		<td id="report1_E23" colNo=5 value='18=10-13' onclick="_hideEditor()" class="report1_2">18=10-13</td>
		<td id="report1_F23" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td colSpan=2 id="report1_G23" colNo=7 value='--' onclick="_hideEditor()" class="report1_12">--</td>
		<td id="report1_I23" colNo=9 bkj="true" value='0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8" style="display:none;"></td>
	</tr>
	<tr rn="24" height=20 style="height:20px;">
		<td colSpan=3 id="report1_B24" colNo=2 value='本期检查已补缴费额' onclick="_hideEditor()" class="report1_2">本期检查已补缴费额</td>
		<td id="report1_E24" colNo=5 value='19' onclick="_hideEditor()" class="report1_2">19</td>
		<td id="report1_F24" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_4">0.00</td>
		<td colSpan=2 id="report1_G24" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_I24" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8" style="display:none;"></td>
	</tr>
	<tr rn="25" height=22 style="height:22px;">
		<td rowSpan=4 colSpan=2 id="report1_A25" colNo=1 value='缴纳义务人或代理人声明：
    此申报表是根据国家相关税费规定填报的，我确定它是真实的、可靠的、完整的。' onclick="_hideEditor()" class="report1_2">缴纳义务人或<br>代理人声明：<br>&nbsp;&nbsp;&nbsp;&nbsp;此申报表<br>是根据国家相<br>关税费规定填<br>报的，我确定<br>它是真实的、<br>可靠的、完整<br>的。</td>
		<td colSpan=6 id="report1_C25" colNo=3 value='如缴纳人申报，由缴纳人填写以下各栏：' onclick="_hideEditor()" class="report1_5">如缴纳人申报，由缴纳人填写以下各栏：</td>
		<td rowSpan=6 id="report1_I25" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_21" style="display:none;"></td>
	</tr>
	<tr rn="26" height=69 style="height:69px;">
		<td colSpan=6 id="report1_C26" colNo=3 value='办税人员（签章）：                      财务负责人（签章）：

法定代表人（签章）：                    联系电话：
' onclick="_hideEditor()" class="report1_17">办税人员（签章）：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;财务负责人（签章）：<br><br>法定代表人（签章）：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系电话：<br></td>
	</tr>
	<tr rn="27" height=20 style="height:20px;">
		<td colSpan=6 id="report1_C27" colNo=3 value='如委托代理人填报，由代理人填写以下各栏：' onclick="_hideEditor()" class="report1_5">如委托代理人填报，由代理人填写以下各栏：</td>
	</tr>
	<tr rn="28" height=69 style="height:69px;">
		<td colSpan=6 id="report1_C28" colNo=3 value='代理人名称：                            经办人（签章）：               

代理人（公章）：                        联系电话： 
' onclick="_hideEditor()" class="report1_22">代理人名称：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经办人（签章）：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><br>代理人（公章）：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系电话：&nbsp;<br></td>
	</tr>
	<tr rn="29" height=19 style="height:19px;">
		<td colSpan=8 id="report1_A29" colNo=1 value='以下由税务机关填写：' onclick="_hideEditor()" class="report1_16">以下由税务机关填写：</td>
	</tr>
	<tr rn="30" height=23 style="height:23px;">
		<td colSpan=8 id="report1_A30" colNo=1 value='收到日期：     年   月   日       接收人：              主管税务机关（签章）：' onclick="_hideEditor()" class="report1_15">收到日期：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接收人：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主管税务机关（签章）：</td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,F6,I6,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F6' ) )+_parseValue( document.getElementById( 'report1_I6' ) )).toFixed(2);
				document.getElementById( 'report1_G6' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G6' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G6' ) );
			}catch(e1){}
		}
		cells = ",,F7,I7,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F7' ) )+_parseValue( document.getElementById( 'report1_I7' ) )).toFixed(2);
				document.getElementById( 'report1_G7' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G7' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G7' ) );
			}catch(e1){}
		}
		cells = ",,F9,I9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F9' ) )+_parseValue( document.getElementById( 'report1_I9' ) )).toFixed(2);
				document.getElementById( 'report1_G9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G9' ) );
			}catch(e1){}
		}
		cells = ",,F6,F8,F9,F6,F8,F9,F6,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F6' ) )>0?(_parseValue( document.getElementById( 'report1_F8' ) )+_parseValue( document.getElementById( 'report1_F9' ) )<=_parseValue( document.getElementById( 'report1_F6' ) )?_parseValue( document.getElementById( 'report1_F8' ) )+_parseValue( document.getElementById( 'report1_F9' ) ):_parseValue( document.getElementById( 'report1_F6' ) )):0).toFixed(2);
				document.getElementById( 'report1_F10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F10' ) );
			}catch(e1){}
		}
		cells = ",,F10,F6,F8,F9,F6,F8,F9,F6,I10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F10' ) )+_parseValue( document.getElementById( 'report1_I10' ) )).toFixed(2);
				document.getElementById( 'report1_G10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G10' ) );
			}catch(e1){}
		}
		cells = ",,F7,F8,F9,F7,F8,F9,F7,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F7' ) )>0?(_parseValue( document.getElementById( 'report1_F8' ) )+_parseValue( document.getElementById( 'report1_F9' ) )<=_parseValue( document.getElementById( 'report1_F7' ) )?_parseValue( document.getElementById( 'report1_F8' ) )+_parseValue( document.getElementById( 'report1_F9' ) ):_parseValue( document.getElementById( 'report1_F7' ) )):0).toFixed(2);
				document.getElementById( 'report1_F11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F11' ) );
			}catch(e1){}
		}
		cells = ",,F11,F7,F8,F9,F7,F8,F9,F7,I11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F11' ) )+_parseValue( document.getElementById( 'report1_I11' ) )).toFixed(2);
				document.getElementById( 'report1_G11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G11' ) );
			}catch(e1){}
		}
		cells = ",,F8,F9,F10,F6,F8,F9,F6,F8,F9,F6,F11,F7,F8,F9,F7,F8,F9,F7,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F8' ) )+_parseValue( document.getElementById( 'report1_F9' ) )-_parseValue( document.getElementById( 'report1_F10' ) )-_parseValue( document.getElementById( 'report1_F11' ) )).toFixed(2);
				document.getElementById( 'report1_F12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F12' ) );
			}catch(e1){}
		}
		cells = ",,F12,F8,F9,F10,F6,F8,F9,F6,F8,F9,F6,F11,F7,F8,F9,F7,F8,F9,F7,I12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F12' ) )+_parseValue( document.getElementById( 'report1_I12' ) )).toFixed(2);
				document.getElementById( 'report1_G12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G12' ) );
			}catch(e1){}
		}
		cells = ",,F6,F10,F6,F8,F9,F6,F8,F9,F6,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F6' ) )-_parseValue( document.getElementById( 'report1_F10' ) )).toFixed(2);
				document.getElementById( 'report1_F13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F13' ) );
			}catch(e1){}
		}
		cells = ",,F13,F6,F10,F6,F8,F9,F6,F8,F9,F6,I13,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F13' ) )+_parseValue( document.getElementById( 'report1_I13' ) )).toFixed(2);
				document.getElementById( 'report1_G13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G13' ) );
			}catch(e1){}
		}
		cells = ",,F13,F6,F10,F6,F8,F9,F6,F8,F9,F6,F14,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F13' ) )*_parseValue( document.getElementById( 'report1_F14' ) )).toFixed(2);
				document.getElementById( 'report1_F15' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F15' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F15' ) );
			}catch(e1){}
		}
		cells = ",,F15,F13,F6,F10,F6,F8,F9,F6,F8,F9,F6,F14,I15,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F15' ) )+_parseValue( document.getElementById( 'report1_I15' ) )).toFixed(2);
				document.getElementById( 'report1_G15' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G15' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G15' ) );
			}catch(e1){}
		}
		cells = ",,F18,F19,F20,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F18' ) )+_parseValue( document.getElementById( 'report1_F19' ) )+_parseValue( document.getElementById( 'report1_F20' ) )).toFixed(2);
				document.getElementById( 'report1_F17' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F17' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F17' ) );
			}catch(e1){}
		}
		cells = ",,F17,F18,F19,F20,I17,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F17' ) )+_parseValue( document.getElementById( 'report1_I17' ) )).toFixed(2);
				document.getElementById( 'report1_G17' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G17' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G17' ) );
			}catch(e1){}
		}
		cells = ",,F18,I18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F18' ) )+_parseValue( document.getElementById( 'report1_I18' ) )).toFixed(2);
				document.getElementById( 'report1_G18' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G18' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G18' ) );
			}catch(e1){}
		}
		cells = ",,F19,I19,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F19' ) )+_parseValue( document.getElementById( 'report1_I19' ) )).toFixed(2);
				document.getElementById( 'report1_G19' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G19' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G19' ) );
			}catch(e1){}
		}
		cells = ",,F20,I20,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F20' ) )+_parseValue( document.getElementById( 'report1_I20' ) )).toFixed(2);
				document.getElementById( 'report1_G20' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G20' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G20' ) );
			}catch(e1){}
		}
		cells = ",,F15,F13,F6,F10,F6,F8,F9,F6,F8,F9,F6,F14,F16,F17,F18,F19,F20,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F15' ) )+_parseValue( document.getElementById( 'report1_F16' ) )-_parseValue( document.getElementById( 'report1_F17' ) )).toFixed(2);
				document.getElementById( 'report1_F21' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F21' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F21' ) );
			}catch(e1){}
		}
		cells = ",,F21,F15,F13,F6,F10,F6,F8,F9,F6,F8,F9,F6,F14,F16,F17,F18,F19,F20,I21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F21' ) )+_parseValue( document.getElementById( 'report1_I21' ) )).toFixed(2);
				document.getElementById( 'report1_G21' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G21' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G21' ) );
			}catch(e1){}
		}
		cells = ",,F16,F19,F20,F16,F19,F20,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F16' ) )-_parseValue( document.getElementById( 'report1_F19' ) )-_parseValue( document.getElementById( 'report1_F20' ) )>0?_parseValue( document.getElementById( 'report1_F16' ) )-_parseValue( document.getElementById( 'report1_F19' ) )-_parseValue( document.getElementById( 'report1_F20' ) ):0).toFixed(2);
				document.getElementById( 'report1_F22' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F22' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F22' ) );
			}catch(e1){}
		}
		cells = ",,F15,F13,F6,F10,F6,F8,F9,F6,F8,F9,F6,F14,F18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F15' ) )-_parseValue( document.getElementById( 'report1_F18' ) )).toFixed(2);
				document.getElementById( 'report1_F23' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F23' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F23' ) );
			}catch(e1){}
		}
		cells = ",,F24,I24,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F24' ) )+_parseValue( document.getElementById( 'report1_I24' ) )).toFixed(2);
				document.getElementById( 'report1_G24' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G24' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G24' ) );
			}catch(e1){}
		}
		try{ group_autoCalc( 'report1_' + cellName ); }catch(e){}
	}

	function report1_checkValid() {
		return true;
	}

</script>
</div>
</td></tr></table>
<div style="display:none"><form id="report1_submitForm" method=post action="/WSSBSL/reportServlet.aspx?action=11" target="submitFrame">
	<input type=hidden name=fileName value="/whsyjsf/whsyjsfsbb.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_74406">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2Fwhsyjsf%2Fwhsyjsfsbb.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000033404947&sbuuid=C7C0CD03C2E085563E857B2C6139D6BA&reportParamsId=15115034213832703171890">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_WHSYJSF;xmlName=whsyjsf/whsyjsf_whsyjsfsbb;pzxh=10014517000033404947;nsrsbh=91450107MA5KE0EQ2B;dataFromBz=0;raq=/whsyjsf/whsyjsfsbb.raq;sbuuid=C7C0CD03C2E085563E857B2C6139D6BA;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/whsyjsf/whsyjsfsbb.raq&srcType=file&cachedId=10_1_1_176_8080_74406&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_WHSYJSF%3BxmlName%3Dwhsyjsf%2Fwhsyjsf_whsyjsfsbb%3Bpzxh%3D10014517000033404947%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdataFromBz%3D0%3Braq%3D%2Fwhsyjsf%2Fwhsyjsfsbb.raq%3Bsbuuid%3DC7C0CD03C2E085563E857B2C6139D6BA%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

