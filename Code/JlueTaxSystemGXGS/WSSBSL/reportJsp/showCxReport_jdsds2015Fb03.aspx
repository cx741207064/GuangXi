<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_jdsds2015Fb03.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_jdsds2015Fb03" %>

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
<script language=javascript src="/WSSBSL/FlineInput.js" charset="UTF-8">
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
	var report1_cachedId = "10_1_1_176_8080_74085";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2Fjdsds2012%2Fjdsds2015Fb03.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15114952555517502171579&cachedId=10_1_1_176_8080_74085&t_i_m_e=1511495255738" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2Fjdsds2012%2Fjdsds2015Fb03.raq&columns=0&srcType=file&reportParamsId=15114952555517502171579&cachedId=10_1_1_176_8080_74085&t_i_m_e=1511495255738" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2Fjdsds2012%2Fjdsds2015Fb03.raq&columns=0&srcType=file&reportParamsId=15114952555517502171579&cachedId=10_1_1_176_8080_74085&t_i_m_e=1511495255738";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2Fjdsds2012%2Fjdsds2015Fb03.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15114952555517502171579&cachedId=10_1_1_176_8080_74085&t_i_m_e=1511495255738";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2Fjdsds2012%2Fjdsds2015Fb03.raq&srcType=file&reportParamsId=15114952555517502171579&cachedId=10_1_1_176_8080_74085&t_i_m_e=1511495255738" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2Fjdsds2012%2Fjdsds2015Fb03.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15114952555517502171579&cachedId=10_1_1_176_8080_74085&t_i_m_e=1511495255738";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2Fjdsds2012%2Fjdsds2015Fb03.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15114952555517502171579&cachedId=10_1_1_176_8080_74085&t_i_m_e=1511495255738";
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
	function report1488102over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1488102out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_2 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_10 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:center;vertical-align:middle;font-family:宋体;font-size:14px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_12 { text-align:center;vertical-align:middle;font-family:宋体;font-size:16px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_13 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_14 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1488102out()" onmouseover="report1488102over()" rowCount=34 cols=9 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" isli=true nextRowNo=35 ndr="1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34" style="width:829px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:38px;"></col>
		<col style="width:127px;"></col>
		<col style="width:281px;"></col>
		<col style="width:57px;"></col>
		<col style="width:90px;"></col>
		<col style="width:26px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
	</colgroup>
	<tr rn="1" id=report1_row1 status="0" pid="report1" height=46 style="height:46px;">
		<td colSpan=8 id="report1_A1" colNo=1 sc="A1" value='10014517000030479051' onclick="_hideEditor()" class="report1_12">减免所得税额明细表</td>
		<td id="report1_I1" colNo=9 bkj="true" sc="I1" value='' onclick="_hideEditor()" class="report1_11" style="display:none;"></td>
	</tr>
	<tr rn="2" id=report1_row2 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A2" colNo=1 sc="A2" value='纳税人识别号' onclick="_hideEditor()" class="report1_10">纳税人识别号</td>
		<td id="report1_C2" colNo=3 sc="C2" value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_10">91450107MA5KE0EQ2B</td>
		<td id="report1_D2" colNo=4 sc="D2" value='填表日期' onclick="_hideEditor()" class="report1_10">填表日期</td>
		<td id="report1_E2" colNo=5 sc="E2" value='2017-10-17' onclick="_hideEditor()" class="report1_4">2017-10-17</td>
		<td colSpan=3 id="report1_F2" colNo=6 sc="F2" value='金额单位:   人民币元(列至角分)' onclick="_hideEditor()" class="report1_10">金额单位:&nbsp;&nbsp;&nbsp;人民币元(列至角分)</td>
		<td id="report1_I2" colNo=9 sc="I2" value='' onclick="_hideEditor()" class="report1_7" style="display:none;"></td>
	</tr>
	<tr rn="3" id=report1_row3 status="0" pid="report1" height=40 style="height:40px;">
		<td colSpan=2 id="report1_A3" colNo=1 sc="A3" value='纳税人名称' onclick="_hideEditor()" class="report1_10">纳税人名称</td>
		<td id="report1_C3" colNo=3 sc="C3" value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_13">广西龙森胜贸易有限公司</td>
		<td id="report1_D3" colNo=4 sc="D3" value='所属日期' onclick="_hideEditor()" class="report1_10">所属日期</td>
		<td id="report1_E3" colNo=5 sc="E3" value='2017-07-01' onclick="_hideEditor()" class="report1_4">2017-07-01</td>
		<td id="report1_F3" colNo=6 sc="F3" value='至' onclick="_hideEditor()" class="report1_4">至</td>
		<td colSpan=2 id="report1_G3" colNo=7 sc="G3" value='2017-09-30' onclick="_hideEditor()" class="report1_14">2017-09-30</td>
		<td id="report1_I3" colNo=9 sc="I3" value='0' onclick="_hideEditor()" class="report1_7" style="display:none;">0</td>
	</tr>
	<tr rn="4" id=report1_row4 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A4" colNo=1 sc="A4" value='行次' onclick="_hideEditor()" class="report1_4">行次</td>
		<td colSpan=5 id="report1_B4" colNo=2 sc="B4" value='项       目' onclick="_hideEditor()" class="report1_4">项&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目</td>
		<td id="report1_G4" colNo=7 sc="G4" value='本期金额' onclick="_hideEditor()" class="report1_4">本期金额</td>
		<td id="report1_H4" colNo=8 sc="H4" value='累计金额' onclick="_hideEditor()" class="report1_4">累计金额</td>
		<td id="report1_I4" colNo=9 bkj="true" sc="I4" value='上期累计金额' onclick="_hideEditor()" class="report1_7" style="display:none;"></td>
	</tr>
	<tr rn="5" id=report1_row5 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A5" colNo=1 sc="A5" value='1' onclick="_hideEditor()" class="report1_4">1</td>
		<td colSpan=5 id="report1_B5" colNo=2 sc="B5" value='合计（2行+4行+5行+6行）' onclick="_hideEditor()" class="report1_9">合计（2行+4行+5行+6行）</td>
		<td id="report1_G5" colNo=7 sc="G5" value='0.0' format="%230.00" digits="2" calc='(_xxf("G6")+_xxf("G8")+_xxf("G9")+_xxf("G10")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_H5" colNo=8 sc="H5" value='0.0' format="%230.00" digits="2" dataValid="report1_H5_valid()" calc='(_xxf("H6")+_xxf("H8")+_xxf("H9")+_xxf("H10")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H5_valid() {
		if( ! ( _xxf("H5")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H5') );}catch(e){}
			alert( '第1行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I5" colNo=9 bkj="true" sc="I5" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="6" id=report1_row6 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A6" colNo=1 sc="A6" value='2' onclick="_hideEditor()" class="report1_4">2</td>
		<td colSpan=5 id="report1_B6" colNo=2 sc="B6" value='一、符合条件的小型微利企业' onclick="_hideEditor()" class="report1_1">一、符合条件的小型微利企业</td>
		<td id="report1_G6" colNo=7 sc="G6" value='0.0' format="%230.00" digits="2" calc='(_xxf("H6")-_xxf("I6")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_H6" colNo=8 sc="H6" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_H6_valid()" onclick="_displayEditor()" class="report1_6">0.00</td>
<script language=javascript>
	function report1_H6_valid() {
		if( ! ( _xxf("H6")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H6') );}catch(e){}
			alert( '第2行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I6" colNo=9 bkj="true" sc="I6" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="7" id=report1_row7 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A7" colNo=1 sc="A7" value='3' onclick="_hideEditor()" class="report1_4">3</td>
		<td colSpan=5 id="report1_B7" colNo=2 sc="B7" value='    其中：减半征税' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;其中：减半征税</td>
		<td id="report1_G7" colNo=7 sc="G7" value='0.0' format="%230.00" digits="2" calc='(_xxf("H7")-_xxf("I7")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_H7" colNo=8 sc="H7" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_H7_valid()" onclick="_displayEditor()" class="report1_6">0.00</td>
<script language=javascript>
	function report1_H7_valid() {
		if( ! ( _xxf("H7")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H7') );}catch(e){}
			alert( '第3行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I7" colNo=9 bkj="true" sc="I7" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="8" id=report1_row8 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A8" colNo=1 sc="A8" value='4' onclick="_hideEditor()" class="report1_4">4</td>
		<td colSpan=5 id="report1_B8" colNo=2 sc="B8" value='二、国家需要重点扶持的高新技术企业' onclick="_hideEditor()" class="report1_1">二、国家需要重点扶持的高新技术企业</td>
		<td id="report1_G8" colNo=7 sc="G8" value='0.0' format="%230.00" digits="2" calc='(_xxf("H8")-_xxf("I8")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_H8" colNo=8 sc="H8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_H8_valid()" onclick="_displayEditor()" class="report1_6">0.00</td>
<script language=javascript>
	function report1_H8_valid() {
		if( ! ( _xxf("H8")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H8') );}catch(e){}
			alert( '第4行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I8" colNo=9 bkj="true" sc="I8" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="9" id=report1_row9 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A9" colNo=1 sc="A9" value='5' onclick="_hideEditor()" class="report1_4">5</td>
		<td colSpan=5 id="report1_B9" colNo=2 sc="B9" value='三、减免地方分享所得税的民族自治地方企业' onclick="_hideEditor()" class="report1_1">三、减免地方分享所得税的民族自治地方企业</td>
		<td id="report1_G9" colNo=7 sc="G9" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H9" colNo=8 sc="H9" value='0.0' format="%230.00" digits="2" dataValid="report1_H9_valid()" calc='(_xxf("G9")+_xxf("I9")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H9_valid() {
		if( ! ( _xxf("H9")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H9') );}catch(e){}
			alert( '第5行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I9" colNo=9 bkj="true" sc="I9" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="10" id=report1_row10 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A10" colNo=1 sc="A10" value='6' onclick="_hideEditor()" class="report1_4">6</td>
		<td colSpan=5 id="report1_B10" colNo=2 sc="B10" value='四、其他专项优惠（7行+8行+9行+…30行）' onclick="_hideEditor()" class="report1_1">四、其他专项优惠（7行+8行+9行+…30行）</td>
		<td id="report1_G10" colNo=7 sc="G10" value='0.0' format="%230.00" digits="2" calc='(_xxf("G11")+_xxf("G12")+_xxf("G13")+_xxf("G14")+_xxf("G15")+_xxf("G16")+_xxf("G17")+_xxf("G18")+_xxf("G19")+_xxf("G20")+_xxf("G21")+_xxf("G22")+_xxf("G23")+_xxf("G24")+_xxf("G25")+_xxf("G26")+_xxf("G27")+_xxf("G28")+_xxf("G29")+_xxf("G30")+_xxf("G31")+_xxf("G32")+_xxf("G33")+_xxf("G34")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_H10" colNo=8 sc="H10" value='0.0' format="%230.00" digits="2" dataValid="report1_H10_valid()" calc='(_xxf("H11")+_xxf("H12")+_xxf("H13")+_xxf("H14")+_xxf("H15")+_xxf("H16")+_xxf("H17")+_xxf("H18")+_xxf("H19")+_xxf("H20")+_xxf("H21")+_xxf("H22")+_xxf("H23")+_xxf("H24")+_xxf("H25")+_xxf("H26")+_xxf("H27")+_xxf("H28")+_xxf("H29")+_xxf("H30")+_xxf("H31")+_xxf("H32")+_xxf("H33")+_xxf("H34")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H10_valid() {
		if( ! ( _xxf("H10")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H10') );}catch(e){}
			alert( '第6行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I10" colNo=9 bkj="true" sc="I10" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="11" id=report1_row11 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A11" colNo=1 sc="A11" value='7' onclick="_hideEditor()" class="report1_4">7</td>
		<td colSpan=5 id="report1_B11" colNo=2 sc="B11" value='   （一）经济特区和上海浦东新区新设立的高新技术企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（一）经济特区和上海浦东新区新设立的高新技术企业</td>
		<td id="report1_G11" colNo=7 sc="G11" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">0.00</td>
		<td id="report1_H11" colNo=8 sc="H11" value='0.0' format="%230.00" digits="2" dataValid="report1_H11_valid()" calc='(_xxf("G11")+_xxf("I11")).toFixed(2)' onclick="_hideEditor()" class="report1_3">0.00</td>
<script language=javascript>
	function report1_H11_valid() {
		if( ! ( _xxf("H11")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H11') );}catch(e){}
			alert( '第7行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I11" colNo=9 bkj="true" sc="I11" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="12" id=report1_row12 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A12" colNo=1 sc="A12" value='8' onclick="_hideEditor()" class="report1_4">8</td>
		<td colSpan=5 id="report1_B12" colNo=2 sc="B12" value='   （二）经营性文化事业单位转制企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（二）经营性文化事业单位转制企业</td>
		<td id="report1_G12" colNo=7 sc="G12" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H12" colNo=8 sc="H12" value='0.0' format="%230.00" digits="2" dataValid="report1_H12_valid()" calc='(_xxf("G12")+_xxf("I12")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H12_valid() {
		if( ! ( _xxf("H12")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H12') );}catch(e){}
			alert( '第8行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I12" colNo=9 bkj="true" sc="I12" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="13" id=report1_row13 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A13" colNo=1 sc="A13" value='9' onclick="_hideEditor()" class="report1_4">9</td>
		<td colSpan=5 id="report1_B13" colNo=2 sc="B13" value='   （三）动漫企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（三）动漫企业</td>
		<td id="report1_G13" colNo=7 sc="G13" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H13" colNo=8 sc="H13" value='0.0' format="%230.00" digits="2" dataValid="report1_H13_valid()" calc='(_xxf("G13")+_xxf("I13")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H13_valid() {
		if( ! ( _xxf("H13")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H13') );}catch(e){}
			alert( '第9行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I13" colNo=9 bkj="true" sc="I13" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="14" id=report1_row14 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A14" colNo=1 sc="A14" value='10' onclick="_hideEditor()" class="report1_4">10</td>
		<td colSpan=5 id="report1_B14" colNo=2 sc="B14" value='   （四）受灾地区损失严重的企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（四）受灾地区损失严重的企业</td>
		<td id="report1_G14" colNo=7 sc="G14" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H14" colNo=8 sc="H14" value='0.0' format="%230.00" digits="2" dataValid="report1_H14_valid()" calc='(_xxf("G14")+_xxf("I14")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H14_valid() {
		if( ! ( _xxf("H14")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H14') );}catch(e){}
			alert( '第10行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I14" colNo=9 bkj="true" sc="I14" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="15" id=report1_row15 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A15" colNo=1 sc="A15" value='11' onclick="_hideEditor()" class="report1_4">11</td>
		<td colSpan=5 id="report1_B15" colNo=2 sc="B15" value='   （五）受灾地区农村信用社' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（五）受灾地区农村信用社</td>
		<td id="report1_G15" colNo=7 sc="G15" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H15" colNo=8 sc="H15" value='0.0' format="%230.00" digits="2" dataValid="report1_H15_valid()" calc='(_xxf("G15")+_xxf("I15")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H15_valid() {
		if( ! ( _xxf("H15")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H15') );}catch(e){}
			alert( '第11行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I15" colNo=9 bkj="true" sc="I15" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="16" id=report1_row16 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A16" colNo=1 sc="A16" value='12' onclick="_hideEditor()" class="report1_4">12</td>
		<td colSpan=5 id="report1_B16" colNo=2 sc="B16" value='   （六）受灾地区的促进就业企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（六）受灾地区的促进就业企业</td>
		<td id="report1_G16" colNo=7 sc="G16" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H16" colNo=8 sc="H16" value='0.0' format="%230.00" digits="2" dataValid="report1_H16_valid()" calc='(_xxf("G16")+_xxf("I16")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H16_valid() {
		if( ! ( _xxf("H16")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H16') );}catch(e){}
			alert( '第12行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I16" colNo=9 bkj="true" sc="I16" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="17" id=report1_row17 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A17" colNo=1 sc="A17" value='13' onclick="_hideEditor()" class="report1_4">13</td>
		<td colSpan=5 id="report1_B17" colNo=2 sc="B17" value='   （七）技术先进型服务企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（七）技术先进型服务企业</td>
		<td id="report1_G17" colNo=7 sc="G17" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H17" colNo=8 sc="H17" value='0.0' format="%230.00" digits="2" dataValid="report1_H17_valid()" calc='(_xxf("G17")+_xxf("I17")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H17_valid() {
		if( ! ( _xxf("H17")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H17') );}catch(e){}
			alert( '第13行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I17" colNo=9 bkj="true" sc="I17" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="18" id=report1_row18 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A18" colNo=1 sc="A18" value='14' onclick="_hideEditor()" class="report1_4">14</td>
		<td colSpan=5 id="report1_B18" colNo=2 sc="B18" value='   （八）新疆困难地区新办企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（八）新疆困难地区新办企业</td>
		<td id="report1_G18" colNo=7 sc="G18" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">0.00</td>
		<td id="report1_H18" colNo=8 sc="H18" value='0.0' format="%230.00" digits="2" dataValid="report1_H18_valid()" calc='(_xxf("G18")+_xxf("I18")).toFixed(2)' onclick="_hideEditor()" class="report1_3">0.00</td>
<script language=javascript>
	function report1_H18_valid() {
		if( ! ( _xxf("H18")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H18') );}catch(e){}
			alert( '第14行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I18" colNo=9 bkj="true" sc="I18" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="19" id=report1_row19 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A19" colNo=1 sc="A19" value='15' onclick="_hideEditor()" class="report1_4">15</td>
		<td colSpan=5 id="report1_B19" colNo=2 sc="B19" value='   （九）新疆喀什、霍尔果斯特殊经济开发区新办企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（九）新疆喀什、霍尔果斯特殊经济开发区新办企业</td>
		<td id="report1_G19" colNo=7 sc="G19" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">0.00</td>
		<td id="report1_H19" colNo=8 sc="H19" value='0.0' format="%230.00" digits="2" dataValid="report1_H19_valid()" calc='(_xxf("G19")+_xxf("I19")).toFixed(2)' onclick="_hideEditor()" class="report1_3">0.00</td>
<script language=javascript>
	function report1_H19_valid() {
		if( ! ( _xxf("H19")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H19') );}catch(e){}
			alert( '第15行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I19" colNo=9 bkj="true" sc="I19" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="20" id=report1_row20 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A20" colNo=1 sc="A20" value='16' onclick="_hideEditor()" class="report1_4">16</td>
		<td colSpan=5 id="report1_B20" colNo=2 sc="B20" value='   （十）支持和促进重点群体创业就业企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（十）支持和促进重点群体创业就业企业</td>
		<td id="report1_G20" colNo=7 sc="G20" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H20" colNo=8 sc="H20" value='0.0' format="%230.00" digits="2" dataValid="report1_H20_valid()" onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H20_valid() {
		if( ! ( _xxf("H20")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H20') );}catch(e){}
			alert( '第16行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I20" colNo=9 bkj="true" sc="I20" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="21" id=report1_row21 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A21" colNo=1 sc="A21" value='17' onclick="_hideEditor()" class="report1_4">17</td>
		<td colSpan=5 id="report1_B21" colNo=2 sc="B21" value='   （十一）集成电路线宽小于0.8微米（含）的集成电路生产企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（十一）集成电路线宽小于0.8微米（含）的集成电路生产企业</td>
		<td id="report1_G21" colNo=7 sc="G21" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H21" colNo=8 sc="H21" value='0.0' format="%230.00" digits="2" dataValid="report1_H21_valid()" calc='(_xxf("G21")+_xxf("I21")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H21_valid() {
		if( ! ( _xxf("H21")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H21') );}catch(e){}
			alert( '第17行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I21" colNo=9 bkj="true" sc="I21" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="22" id=report1_row22 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A22" colNo=1 sc="A22" value='18' onclick="_hideEditor()" class="report1_4">18</td>
		<td colSpan=5 id="report1_B22" colNo=2 sc="B22" value='   （十二）集成电路线宽小于0.25微米的集成电路生产企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（十二）集成电路线宽小于0.25微米的集成电路生产企业</td>
		<td id="report1_G22" colNo=7 sc="G22" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H22" colNo=8 sc="H22" value='0.0' format="%230.00" digits="2" dataValid="report1_H22_valid()" calc='(_xxf("G22")+_xxf("I22")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H22_valid() {
		if( ! ( _xxf("H22")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H22') );}catch(e){}
			alert( '第18行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I22" colNo=9 bkj="true" sc="I22" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="23" id=report1_row23 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A23" colNo=1 sc="A23" value='19' onclick="_hideEditor()" class="report1_4">19</td>
		<td colSpan=5 id="report1_B23" colNo=2 sc="B23" value='   （十三）投资额超过80亿元人民币的集成电路生产企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（十三）投资额超过80亿元人民币的集成电路生产企业</td>
		<td id="report1_G23" colNo=7 sc="G23" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H23" colNo=8 sc="H23" value='0.0' format="%230.00" digits="2" dataValid="report1_H23_valid()" calc='(_xxf("G23")+_xxf("I23")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H23_valid() {
		if( ! ( _xxf("H23")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H23') );}catch(e){}
			alert( '第19行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I23" colNo=9 bkj="true" sc="I23" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="24" id=report1_row24 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A24" colNo=1 sc="A24" value='20' onclick="_hideEditor()" class="report1_4">20</td>
		<td colSpan=5 id="report1_B24" colNo=2 sc="B24" value='   （十四）新办集成电路设计企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（十四）新办集成电路设计企业</td>
		<td id="report1_G24" colNo=7 sc="G24" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H24" colNo=8 sc="H24" value='0.0' format="%230.00" digits="2" dataValid="report1_H24_valid()" calc='(_xxf("G24")+_xxf("I24")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H24_valid() {
		if( ! ( _xxf("H24")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H24') );}catch(e){}
			alert( '第20行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I24" colNo=9 bkj="true" sc="I24" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="25" id=report1_row25 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A25" colNo=1 sc="A25" value='21' onclick="_hideEditor()" class="report1_4">21</td>
		<td colSpan=5 id="report1_B25" colNo=2 sc="B25" value='   （十五）国家规划布局内重点集成电路设计企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（十五）国家规划布局内重点集成电路设计企业</td>
		<td id="report1_G25" colNo=7 sc="G25" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H25" colNo=8 sc="H25" value='0.0' format="%230.00" digits="2" dataValid="report1_H25_valid()" calc='(_xxf("G25")+_xxf("I25")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H25_valid() {
		if( ! ( _xxf("H25")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H25') );}catch(e){}
			alert( '第21行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I25" colNo=9 bkj="true" sc="I25" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="26" id=report1_row26 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A26" colNo=1 sc="A26" value='22' onclick="_hideEditor()" class="report1_4">22</td>
		<td colSpan=5 id="report1_B26" colNo=2 sc="B26" value='   （十六）符合条件的软件企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（十六）符合条件的软件企业</td>
		<td id="report1_G26" colNo=7 sc="G26" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H26" colNo=8 sc="H26" value='0.0' format="%230.00" digits="2" dataValid="report1_H26_valid()" calc='(_xxf("G26")+_xxf("I26")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H26_valid() {
		if( ! ( _xxf("H26")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H26') );}catch(e){}
			alert( '第22行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I26" colNo=9 bkj="true" sc="I26" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="27" id=report1_row27 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A27" colNo=1 sc="A27" value='23' onclick="_hideEditor()" class="report1_4">23</td>
		<td colSpan=5 id="report1_B27" colNo=2 sc="B27" value='   （十七）国家规划布局内重点软件企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（十七）国家规划布局内重点软件企业</td>
		<td id="report1_G27" colNo=7 sc="G27" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H27" colNo=8 sc="H27" value='0.0' format="%230.00" digits="2" dataValid="report1_H27_valid()" calc='(_xxf("G27")+_xxf("I27")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H27_valid() {
		if( ! ( _xxf("H27")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H27') );}catch(e){}
			alert( '第23行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I27" colNo=9 bkj="true" sc="I27" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="28" id=report1_row28 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A28" colNo=1 sc="A28" value='24' onclick="_hideEditor()" class="report1_4">24</td>
		<td colSpan=5 id="report1_B28" colNo=2 sc="B28" value='   （十八）设在西部地区的鼓励类产业企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（十八）设在西部地区的鼓励类产业企业</td>
		<td id="report1_G28" colNo=7 sc="G28" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H28" colNo=8 sc="H28" value='0.0' format="%230.00" digits="2" dataValid="report1_H28_valid()" calc='(_xxf("G28")+_xxf("I28")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H28_valid() {
		if( ! ( _xxf("H28")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H28') );}catch(e){}
			alert( '第24行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I28" colNo=9 bkj="true" sc="I28" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="29" id=report1_row29 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A29" colNo=1 sc="A29" value='25' onclick="_hideEditor()" class="report1_4">25</td>
		<td colSpan=5 id="report1_B29" colNo=2 sc="B29" value='   （十九）符合条件的生产和装配伤残人员专门用品企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（十九）符合条件的生产和装配伤残人员专门用品企业</td>
		<td id="report1_G29" colNo=7 sc="G29" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H29" colNo=8 sc="H29" value='0.0' format="%230.00" digits="2" dataValid="report1_H29_valid()" calc='(_xxf("G29")+_xxf("I29")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H29_valid() {
		if( ! ( _xxf("H29")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H29') );}catch(e){}
			alert( '第25行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I29" colNo=9 bkj="true" sc="I29" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="30" id=report1_row30 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A30" colNo=1 sc="A30" value='26' onclick="_hideEditor()" class="report1_4">26</td>
		<td colSpan=5 id="report1_B30" colNo=2 sc="B30" value='   （二十）中关村国家自主创新示范区从事文化产业支撑技术等领域的高新技术企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（二十）中关村国家自主创新示范区从事文化产业支撑技术等领域的高新技术企业</td>
		<td id="report1_G30" colNo=7 sc="G30" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">0.00</td>
		<td id="report1_H30" colNo=8 sc="H30" value='0.0' format="%230.00" digits="2" dataValid="report1_H30_valid()" calc='(_xxf("G30")+_xxf("I30")).toFixed(2)' onclick="_hideEditor()" class="report1_3">0.00</td>
<script language=javascript>
	function report1_H30_valid() {
		if( ! ( _xxf("H30")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H30') );}catch(e){}
			alert( '第26行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I30" colNo=9 bkj="true" sc="I30" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="31" id=report1_row31 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A31" colNo=1 sc="A31" value='27' onclick="_hideEditor()" class="report1_4">27</td>
		<td colSpan=5 id="report1_B31" colNo=2 sc="B31" value='   （二十一）享受过渡期税收优惠企业' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（二十一）享受过渡期税收优惠企业</td>
		<td id="report1_G31" colNo=7 sc="G31" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H31" colNo=8 sc="H31" value='0.0' format="%230.00" digits="2" dataValid="report1_H31_valid()" calc='(_xxf("G31")+_xxf("I31")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H31_valid() {
		if( ! ( _xxf("H31")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H31') );}catch(e){}
			alert( '第27行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I31" colNo=9 bkj="true" sc="I31" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="32" id=report1_row32 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A32" colNo=1 sc="A32" value='28' onclick="_hideEditor()" class="report1_4">28</td>
		<td colSpan=5 id="report1_B32" colNo=2 sc="B32" value='   （二十二）横琴新区、平潭综合实验区和前海深港现代化服务业合作区企业  ' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（二十二）横琴新区、平潭综合实验区和前海深港现代化服务业合作区企业&nbsp;&nbsp;</td>
		<td id="report1_G32" colNo=7 sc="G32" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">0.00</td>
		<td id="report1_H32" colNo=8 sc="H32" value='0.0' format="%230.00" digits="2" dataValid="report1_H32_valid()" calc='(_xxf("G32")+_xxf("I32")).toFixed(2)' onclick="_hideEditor()" class="report1_3">0.00</td>
<script language=javascript>
	function report1_H32_valid() {
		if( ! ( _xxf("H32")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H32') );}catch(e){}
			alert( '第28行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I32" colNo=9 bkj="true" sc="I32" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="33" id=report1_row33 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A33" colNo=1 sc="A33" value='29' onclick="_hideEditor()" class="report1_4">29</td>
		<td id="report1_B33" colNo=2 sc="B33" value='   （二十三）其他1：' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（二十三）其他1：</td>
		<td colSpan=4 id="report1_C33" colNo=3 sc="C33" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 modifiable=true writable=true editStyle="2" inputDataType="1" editConfig="0004021921,0004021921||符合条件的集成电路封装、测试企业定期减免企业所得税||《财政部 国家税务总局 发展改革委 
工业和信息化部关于进一步鼓励集成电路产业发展企业所得税政策的通知》 财税〔2015〕6 号第一条;0004129999,0004129999|证券投资基金管理人运用基金买卖股票、债券的差价收入暂不征收企业所得税|其他;0004021922,0004021922|符合条件的集成电路关键专用材料生产企业、集成电路专用设备生产企业定期减免企业所得税|《财政部 国家税务总局 发展改革委 工业和信息化部关于进一步鼓励集成电路产业发展企业所得税政策的通知》 财税〔2015〕6 号第一条" value='' dataValid="report1_C33_valid()" onclick="_displayEditor()" class="report1_2"></td>
<script language=javascript src="/WSSBSL/Fselect.js" charset="UTF-8"></script>
<script language=javascript>
	function report1_C33_valid() {
		if( ! ( (_xxf("G33")>0||_xxf("H33")>0)?_xxf("C33")>0:1==1 ) ) {
			try{ report1_markInvalidCell( _xxid('G33')+","+_xxid('H33')+","+_xxid('C33') );}catch(e){}
			alert( '第29行减免性质不能为空' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G33" colNo=7 sc="G33" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H33" colNo=8 sc="H33" value='0.0' format="%230.00" digits="2" dataValid="report1_H33_valid()" calc='(_xxf("G33")+_xxf("I33")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H33_valid() {
		if( ! ( _xxf("H33")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H33') );}catch(e){}
			alert( '第29行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I33" colNo=9 bkj="true" sc="I33" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="34" id=report1_row34 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A34" colNo=1 sc="A34" value='30' onclick="_hideEditor()" class="report1_4">30</td>
		<td id="report1_B34" colNo=2 sc="B34" value='   （二十四）其他2：' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;（二十四）其他2：</td>
		<td colSpan=4 id="report1_C34" colNo=3 sc="C34" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 modifiable=true writable=true editStyle="2" inputDataType="1" editConfig="0004021922,0004021922||符合条件的集成电路关键专用材料生产企业、集成电路专用设备生产企业定期减免企业所得税||《财政部 国家税务总局 发展改革委 工业和信息化部关于进一步鼓励集成电路产业发展企业所得税政策的通知》 财税〔2015〕6 号第一条;0004129999,0004129999|证券投资基金管理人运用基金买卖股票、债券的差价收入暂不征收企业所得税|其他;0004021921,0004021921|符合条件的集成电路封装、测试企业定期减免企业所得税|《财政部 国家税务总局 发展改革委 工业和信息化部关于进一步鼓励集成电路产业发展企业所得税政策的通知》 财税〔2015〕6 号第一条" value='' dataValid="report1_C34_valid()" onclick="_displayEditor()" class="report1_2"></td>
<script language=javascript>
	function report1_C34_valid() {
		if( ! ( (_xxf("G34")>0||_xxf("H34")>0)?_xxf("C34")>0:1==1 ) ) {
			try{ report1_markInvalidCell( _xxid('G34')+","+_xxid('C34')+","+_xxid('H34') );}catch(e){}
			alert( '第30行减免性质不能为空' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G34" colNo=7 sc="G34" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_6">0.00</td>
		<td id="report1_H34" colNo=8 sc="H34" value='0.0' format="%230.00" digits="2" dataValid="report1_H34_valid()" calc='(_xxf("G34")+_xxf("I34")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H34_valid() {
		if( ! ( _xxf("H34")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H34') );}catch(e){}
			alert( '第30行第2列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I34" colNo=9 bkj="true" sc="I34" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
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
	<input type=hidden name=fileName value="/jdsds2012/jdsds2015Fb03.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_74085">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2Fjdsds2012%2Fjdsds2015Fb03.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000030479051&sbuuid=34ADFA3C41108CBBA2B0A5C685F1024A&reportParamsId=15114952555517502171579">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_JDSDS_2008_FB03;xmlName=jdsds2012/jdsds_2015_A_fb03;pzxh=10014517000030479051;nsrsbh=91450107MA5KE0EQ2B;dynamicBz=Y;dataFromBz=0;raq=/jdsds2012/jdsds2015Fb03.raq;sbuuid=34ADFA3C41108CBBA2B0A5C685F1024A;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/jdsds2012/jdsds2015Fb03.raq&srcType=file&cachedId=10_1_1_176_8080_74085&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_JDSDS_2008_FB03%3BxmlName%3Djdsds2012%2Fjdsds_2015_A_fb03%3Bpzxh%3D10014517000030479051%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdynamicBz%3DY%3BdataFromBz%3D0%3Braq%3D%2Fjdsds2012%2Fjdsds2015Fb03.raq%3Bsbuuid%3D34ADFA3C41108CBBA2B0A5C685F1024A%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

