<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_sb_ndsds_2014_fb30.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_sb_ndsds_2014_fb30" %>

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
	var report1_cachedId = "10_1_1_176_8080_74733";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2FndsdsA%2Fsb_ndsds_2014_fb30.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=1511506632319150172196&cachedId=10_1_1_176_8080_74733&t_i_m_e=1511506632475" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2FndsdsA%2Fsb_ndsds_2014_fb30.raq&columns=0&srcType=file&reportParamsId=1511506632319150172196&cachedId=10_1_1_176_8080_74733&t_i_m_e=1511506632475" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2FndsdsA%2Fsb_ndsds_2014_fb30.raq&columns=0&srcType=file&reportParamsId=1511506632319150172196&cachedId=10_1_1_176_8080_74733&t_i_m_e=1511506632475";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2FndsdsA%2Fsb_ndsds_2014_fb30.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=1511506632319150172196&cachedId=10_1_1_176_8080_74733&t_i_m_e=1511506632475";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2FndsdsA%2Fsb_ndsds_2014_fb30.raq&srcType=file&reportParamsId=1511506632319150172196&cachedId=10_1_1_176_8080_74733&t_i_m_e=1511506632475" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_fb30.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=1511506632319150172196&cachedId=10_1_1_176_8080_74733&t_i_m_e=1511506632475";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_fb30.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=1511506632319150172196&cachedId=10_1_1_176_8080_74733&t_i_m_e=1511506632475";
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
	function report1488712over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1488712out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:left;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_12 { text-align:center;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_13 { text-align:center;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_14 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1488712out()" onmouseover="report1488712over()" rowCount=53 cols=5 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:743px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:36px;"></col>
		<col style="width:208px;"></col>
		<col style="width:247px;"></col>
		<col style="width:129px;"></col>
		<col style="width:123px;"></col>
	</colgroup>
	<tr rn="1" height=30 style="height:30px;">
		<td colSpan=4 id="report1_A1" colNo=1 value='10014517000015884336' onclick="_hideEditor()" class="report1_9">A107040</td>
		<td id="report1_E1" colNo=5 bkj="true" value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_9"></td>
	</tr>
	<tr rn="2" height=30 style="height:30px;">
		<td colSpan=4 id="report1_A2" colNo=1 value='减免所得税优惠明细表' onclick="_hideEditor()" class="report1_13">减免所得税优惠明细表</td>
		<td id="report1_E2" colNo=5 bkj="true" value='2017-05-08' onclick="_hideEditor()" class="report1_12"></td>
	</tr>
	<tr rn="3" height=20 style="height:20px;">
		<td id="report1_A3" colNo=1 value='行次' onclick="_hideEditor()" class="report1_2">行次</td>
		<td colSpan=2 id="report1_B3" colNo=2 value='项          目' onclick="_hideEditor()" class="report1_2">项&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目</td>
		<td id="report1_D3" colNo=4 value='金    额' onclick="_hideEditor()" class="report1_2">金&nbsp;&nbsp;&nbsp;&nbsp;额</td>
		<td id="report1_E3" colNo=5 bkj="true" value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_10"></td>
	</tr>
	<tr rn="4" height=20 style="height:20px;">
		<td id="report1_A4" colNo=1 value='1' onclick="_hideEditor()" class="report1_2">1</td>
		<td colSpan=2 id="report1_B4" colNo=2 value='一、符合条件的小型微利企业' onclick="_hideEditor()" class="report1_3">一、符合条件的小型微利企业</td>
		<td id="report1_D4" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E4" colNo=5 bkj="true" value='2016-01-01' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="5" height=20 style="height:20px;">
		<td id="report1_A5" colNo=1 value='2' onclick="_hideEditor()" class="report1_2">2</td>
		<td colSpan=2 id="report1_B5" colNo=2 value='    其中：减半征税' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;&nbsp;其中：减半征税</td>
		<td id="report1_D5" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E5" colNo=5 bkj="true" value='2016-12-31' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="6" height=20 style="height:20px;">
		<td id="report1_A6" colNo=1 value='3' onclick="_hideEditor()" class="report1_2">3</td>
		<td colSpan=2 id="report1_B6" colNo=2 value='二、国家需要重点扶持的高新技术企业（4+5）' onclick="_hideEditor()" class="report1_3">二、国家需要重点扶持的高新技术企业（4+5）</td>
		<td id="report1_D6" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">0.00</td>
		<td id="report1_E6" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_6"></td>
	</tr>
	<tr rn="7" height=20 style="height:20px;">
		<td id="report1_A7" colNo=1 value='4' onclick="_hideEditor()" class="report1_2">4</td>
		<td colSpan=2 id="report1_B7" colNo=2 value='   （一）高新技术企业低税率优惠（填写A107041）' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（一）高新技术企业低税率优惠（填写A107041）</td>
		<td id="report1_D7" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E7" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="8" height=20 style="height:20px;">
		<td id="report1_A8" colNo=1 value='5' onclick="_hideEditor()" class="report1_2">5</td>
		<td colSpan=2 id="report1_B8" colNo=2 value='   （二）经济特区和上海浦东新区新设立的高新技术企业定期减免（填写A107041）' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（二）经济特区和上海浦东新区新设立的高新技术企业定期减免（填写A107041）</td>
		<td id="report1_D8" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">0.00</td>
		<td id="report1_E8" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="9" height=20 style="height:20px;">
		<td id="report1_A9" colNo=1 value='6' onclick="_hideEditor()" class="report1_2">6</td>
		<td colSpan=2 id="report1_B9" colNo=2 value='三、其他专项优惠（7+8+9+10+11…+14+15+16+…+31）' onclick="_hideEditor()" class="report1_11">三、其他专项优惠（7+8+9+10+11…+14+15+16+…+31）</td>
		<td id="report1_D9" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">0.00</td>
		<td id="report1_E9" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_6"></td>
	</tr>
	<tr rn="10" height=20 style="height:20px;">
		<td id="report1_A10" colNo=1 value='7' onclick="_hideEditor()" class="report1_2">7</td>
		<td colSpan=2 id="report1_B10" colNo=2 value='   （一）受灾地区损失严重的企业（7.1+7.2+7.3）' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（一）受灾地区损失严重的企业（7.1+7.2+7.3）</td>
		<td id="report1_D10" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">0.00</td>
		<td id="report1_E10" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_6"></td>
	</tr>
	<tr rn="11" height=20 style="height:20px;">
		<td id="report1_A11" colNo=1 value='7.1' onclick="_hideEditor()" class="report1_2">7.1</td>
		<td colSpan=2 id="report1_B11" colNo=2 value='其中：1.' onclick="_hideEditor()" class="report1_3">其中：1.</td>
		<td id="report1_D11" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E11" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_7"></td>
	</tr>
	<tr rn="12" height=20 style="height:20px;">
		<td id="report1_A12" colNo=1 value='7.2' onclick="_hideEditor()" class="report1_2">7.2</td>
		<td colSpan=2 id="report1_B12" colNo=2 value='2' onclick="_hideEditor()" class="report1_3">2</td>
		<td id="report1_D12" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E12" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_7"></td>
	</tr>
	<tr rn="13" height=20 style="height:20px;">
		<td id="report1_A13" colNo=1 value='7.3' onclick="_hideEditor()" class="report1_2">7.3</td>
		<td id="report1_B13" colNo=2 value='3' onclick="_hideEditor()" class="report1_3">3</td>
		<td id="report1_C13" colNo=3 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 editConfig="" value='' onclick="_hideEditor()" class="report1_14"></td>
<script language=javascript src="/WSSBSL/Fselect.js" charset="UTF-8"></script>
		<td id="report1_D13" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E13" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_7"></td>
	</tr>
	<tr rn="14" height=20 style="height:20px;">
		<td id="report1_A14" colNo=1 value='8' onclick="_hideEditor()" class="report1_2">8</td>
		<td colSpan=2 id="report1_B14" colNo=2 value='   （二）受灾地区农村信用社（8.1+8.2+8.3）' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（二）受灾地区农村信用社（8.1+8.2+8.3）</td>
		<td id="report1_D14" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">0.00</td>
		<td id="report1_E14" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_6"></td>
	</tr>
	<tr rn="15" height=20 style="height:20px;">
		<td id="report1_A15" colNo=1 value='8.1' onclick="_hideEditor()" class="report1_2">8.1</td>
		<td colSpan=2 id="report1_B15" colNo=2 value='其中：1.' onclick="_hideEditor()" class="report1_3">其中：1.</td>
		<td id="report1_D15" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E15" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_7"></td>
	</tr>
	<tr rn="16" height=20 style="height:20px;">
		<td id="report1_A16" colNo=1 value='8.2' onclick="_hideEditor()" class="report1_2">8.2</td>
		<td colSpan=2 id="report1_B16" colNo=2 value='2' onclick="_hideEditor()" class="report1_3">2</td>
		<td id="report1_D16" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E16" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_7"></td>
	</tr>
	<tr rn="17" height=20 style="height:20px;">
		<td id="report1_A17" colNo=1 value='8.3' onclick="_hideEditor()" class="report1_2">8.3</td>
		<td id="report1_B17" colNo=2 value='3' onclick="_hideEditor()" class="report1_3">3</td>
		<td id="report1_C17" colNo=3 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 editConfig="" value='' onclick="_hideEditor()" class="report1_14"></td>
		<td id="report1_D17" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E17" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_7"></td>
	</tr>
	<tr rn="18" height=20 style="height:20px;">
		<td id="report1_A18" colNo=1 value='9' onclick="_hideEditor()" class="report1_2">9</td>
		<td colSpan=2 id="report1_B18" colNo=2 value='   （三）受灾地区的促进就业企业（9.1+9.2+9.3）' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（三）受灾地区的促进就业企业（9.1+9.2+9.3）</td>
		<td id="report1_D18" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">0.00</td>
		<td id="report1_E18" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_6"></td>
	</tr>
	<tr rn="19" height=20 style="height:20px;">
		<td id="report1_A19" colNo=1 value='9.1' onclick="_hideEditor()" class="report1_2">9.1</td>
		<td colSpan=2 id="report1_B19" colNo=2 value='其中：1.' onclick="_hideEditor()" class="report1_3">其中：1.</td>
		<td id="report1_D19" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E19" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_7"></td>
	</tr>
	<tr rn="20" height=20 style="height:20px;">
		<td id="report1_A20" colNo=1 value='9.2' onclick="_hideEditor()" class="report1_2">9.2</td>
		<td colSpan=2 id="report1_B20" colNo=2 value='2' onclick="_hideEditor()" class="report1_3">2</td>
		<td id="report1_D20" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E20" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_7"></td>
	</tr>
	<tr rn="21" height=20 style="height:20px;">
		<td id="report1_A21" colNo=1 value='9.3' onclick="_hideEditor()" class="report1_2">9.3</td>
		<td id="report1_B21" colNo=2 value='3' onclick="_hideEditor()" class="report1_3">3</td>
		<td id="report1_C21" colNo=3 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 editConfig="" value='' onclick="_hideEditor()" class="report1_14"></td>
		<td id="report1_D21" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E21" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_7"></td>
	</tr>
	<tr rn="22" height=20 style="height:20px;">
		<td id="report1_A22" colNo=1 value='10' onclick="_hideEditor()" class="report1_2">10</td>
		<td colSpan=2 id="report1_B22" colNo=2 value='   （四）支持和促进重点群体创业就业企业(10.1+10.2+10.3)' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（四）支持和促进重点群体创业就业企业(10.1+10.2+10.3)</td>
		<td id="report1_D22" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">0.00</td>
		<td id="report1_E22" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_6"></td>
	</tr>
	<tr rn="23" height=20 style="height:20px;">
		<td id="report1_A23" colNo=1 value='10.1' onclick="_hideEditor()" class="report1_2">10.1</td>
		<td colSpan=2 id="report1_B23" colNo=2 value='其中:1.下岗失业人员再就业' onclick="_hideEditor()" class="report1_3">其中:1.下岗失业人员再就业</td>
		<td id="report1_D23" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E23" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="24" height=20 style="height:20px;">
		<td id="report1_A24" colNo=1 value='10.2' onclick="_hideEditor()" class="report1_2">10.2</td>
		<td colSpan=2 id="report1_B24" colNo=2 value='          2.高校毕业生就业' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.高校毕业生就业</td>
		<td id="report1_D24" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E24" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="25" height=20 style="height:20px;">
		<td id="report1_A25" colNo=1 value='10.3' onclick="_hideEditor()" class="report1_2">10.3</td>
		<td colSpan=2 id="report1_B25" colNo=2 value='          3.退役士兵就业' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.退役士兵就业</td>
		<td id="report1_D25" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E25" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="26" height=20 style="height:20px;">
		<td id="report1_A26" colNo=1 value='11' onclick="_hideEditor()" class="report1_2">11</td>
		<td colSpan=2 id="report1_B26" colNo=2 value='   （五）技术先进型服务企业' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（五）技术先进型服务企业</td>
		<td id="report1_D26" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E26" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="27" height=20 style="height:20px;">
		<td id="report1_A27" colNo=1 value='12' onclick="_hideEditor()" class="report1_2">12</td>
		<td colSpan=2 id="report1_B27" colNo=2 value='   （六）动漫企业' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（六）动漫企业</td>
		<td id="report1_D27" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E27" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="28" height=20 style="height:20px;">
		<td id="report1_A28" colNo=1 value='13' onclick="_hideEditor()" class="report1_2">13</td>
		<td colSpan=2 id="report1_B28" colNo=2 value='   （七）集成电路线宽小于0.8微米（含）的集成电路生产企业' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（七）集成电路线宽小于0.8微米（含）的集成电路生产企业</td>
		<td id="report1_D28" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E28" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="29" height=20 style="height:20px;">
		<td id="report1_A29" colNo=1 value='14' onclick="_hideEditor()" class="report1_2">14</td>
		<td colSpan=2 id="report1_B29" colNo=2 value='   （八）集成电路线宽小于0.25微米的集成电路生产企业（14.1+14.2）' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（八）集成电路线宽小于0.25微米的集成电路生产企业（14.1+14.2）</td>
		<td id="report1_D29" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">0.00</td>
		<td id="report1_E29" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_6"></td>
	</tr>
	<tr rn="30" height=20 style="height:20px;">
		<td id="report1_A30" colNo=1 value='14.1' onclick="_hideEditor()" class="report1_2">14.1</td>
		<td colSpan=2 id="report1_B30" colNo=2 value='其中：1.定期减免企业所得税' onclick="_hideEditor()" class="report1_3">其中：1.定期减免企业所得税</td>
		<td id="report1_D30" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E30" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="31" height=20 style="height:20px;">
		<td id="report1_A31" colNo=1 value='14.2' onclick="_hideEditor()" class="report1_2">14.2</td>
		<td colSpan=2 id="report1_B31" colNo=2 value='2.减按15%税率征收企业所得税' onclick="_hideEditor()" class="report1_3">2.减按15%税率征收企业所得税</td>
		<td id="report1_D31" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E31" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="32" height=20 style="height:20px;">
		<td id="report1_A32" colNo=1 value='15' onclick="_hideEditor()" class="report1_2">15</td>
		<td colSpan=2 id="report1_B32" colNo=2 value='   （九）投资额超过80亿元人民币的集成电路生产企业（15.1+15.2）' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（九）投资额超过80亿元人民币的集成电路生产企业（15.1+15.2）</td>
		<td id="report1_D32" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">0.00</td>
		<td id="report1_E32" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_6"></td>
	</tr>
	<tr rn="33" height=20 style="height:20px;">
		<td id="report1_A33" colNo=1 value='15.1' onclick="_hideEditor()" class="report1_2">15.1</td>
		<td colSpan=2 id="report1_B33" colNo=2 value='其中：1.定期减免企业所得税' onclick="_hideEditor()" class="report1_3">其中：1.定期减免企业所得税</td>
		<td id="report1_D33" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E33" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="34" height=20 style="height:20px;">
		<td id="report1_A34" colNo=1 value='15.2' onclick="_hideEditor()" class="report1_2">15.2</td>
		<td colSpan=2 id="report1_B34" colNo=2 value='2.减按15%税率征收企业所得税' onclick="_hideEditor()" class="report1_3">2.减按15%税率征收企业所得税</td>
		<td id="report1_D34" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E34" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="35" height=20 style="height:20px;">
		<td id="report1_A35" colNo=1 value='16' onclick="_hideEditor()" class="report1_2">16</td>
		<td colSpan=2 id="report1_B35" colNo=2 value='   （十）新办集成电路设计企业（填写A107042）' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（十）新办集成电路设计企业（填写A107042）</td>
		<td id="report1_D35" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E35" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="36" height=20 style="height:20px;">
		<td id="report1_A36" colNo=1 value='17' onclick="_hideEditor()" class="report1_2">17</td>
		<td colSpan=2 id="report1_B36" colNo=2 value='   （十一）国家规划布局内重点集成电路设计企业' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（十一）国家规划布局内重点集成电路设计企业</td>
		<td id="report1_D36" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E36" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="37" height=20 style="height:20px;">
		<td id="report1_A37" colNo=1 value='18' onclick="_hideEditor()" class="report1_2">18</td>
		<td colSpan=2 id="report1_B37" colNo=2 value='   （十二）集成电路封装、测试企业' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（十二）集成电路封装、测试企业</td>
		<td id="report1_D37" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E37" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="38" height=20 style="height:20px;">
		<td id="report1_A38" colNo=1 value='19' onclick="_hideEditor()" class="report1_2">19</td>
		<td colSpan=2 id="report1_B38" colNo=2 value='   （十三）集成电路关键专用材料生产企业或集成电路专用设备生产企业' onclick="_hideEditor()" class="report1_11">&nbsp;&nbsp;&nbsp;（十三）集成电路关键专用材料生产企业或集成电路专用设备生产企业</td>
		<td id="report1_D38" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E38" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="39" height=20 style="height:20px;">
		<td id="report1_A39" colNo=1 value='20' onclick="_hideEditor()" class="report1_2">20</td>
		<td colSpan=2 id="report1_B39" colNo=2 value='   （十四）符合条件的软件企业（填写A107042）' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（十四）符合条件的软件企业（填写A107042）</td>
		<td id="report1_D39" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E39" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="40" height=20 style="height:20px;">
		<td id="report1_A40" colNo=1 value='21' onclick="_hideEditor()" class="report1_2">21</td>
		<td colSpan=2 id="report1_B40" colNo=2 value='   （十五）国家规划布局内重点软件企业' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（十五）国家规划布局内重点软件企业</td>
		<td id="report1_D40" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E40" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="41" height=20 style="height:20px;">
		<td id="report1_A41" colNo=1 value='22' onclick="_hideEditor()" class="report1_2">22</td>
		<td colSpan=2 id="report1_B41" colNo=2 value='   （十六）经营性文化事业单位转制企业' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（十六）经营性文化事业单位转制企业</td>
		<td id="report1_D41" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E41" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="42" height=20 style="height:20px;">
		<td id="report1_A42" colNo=1 value='23' onclick="_hideEditor()" class="report1_2">23</td>
		<td colSpan=2 id="report1_B42" colNo=2 value='   （十七）符合条件的生产和装配伤残人员专门用品企业' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（十七）符合条件的生产和装配伤残人员专门用品企业</td>
		<td id="report1_D42" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E42" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="43" height=20 style="height:20px;">
		<td id="report1_A43" colNo=1 value='24' onclick="_hideEditor()" class="report1_2">24</td>
		<td colSpan=2 id="report1_B43" colNo=2 value='   （十八）设在西部地区的鼓励类产业企业' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（十八）设在西部地区的鼓励类产业企业</td>
		<td id="report1_D43" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E43" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="44" height=20 style="height:20px;">
		<td id="report1_A44" colNo=1 value='25' onclick="_hideEditor()" class="report1_2">25</td>
		<td colSpan=2 id="report1_B44" colNo=2 value='   （十九）新疆困难地区新办企业' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（十九）新疆困难地区新办企业</td>
		<td id="report1_D44" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E44" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="45" height=20 style="height:20px;">
		<td id="report1_A45" colNo=1 value='26' onclick="_hideEditor()" class="report1_2">26</td>
		<td colSpan=2 id="report1_B45" colNo=2 value='   （二十）新疆喀什、霍尔果斯特殊经济开发区新办企业' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（二十）新疆喀什、霍尔果斯特殊经济开发区新办企业</td>
		<td id="report1_D45" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E45" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="46" height=20 style="height:20px;">
		<td id="report1_A46" colNo=1 value='27' onclick="_hideEditor()" class="report1_2">27</td>
		<td colSpan=2 id="report1_B46" colNo=2 value='   （二十一）横琴新区、平潭综合实验区和前海深港现代化服务业合作区企业' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（二十一）横琴新区、平潭综合实验区和前海深港现代化服务业合作区企业</td>
		<td id="report1_D46" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E46" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="47" height=20 style="height:20px;">
		<td id="report1_A47" colNo=1 value='28' onclick="_hideEditor()" class="report1_2">28</td>
		<td colSpan=2 id="report1_B47" colNo=2 value='   （二十二）享受过渡期税收优惠企业' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（二十二）享受过渡期税收优惠企业</td>
		<td id="report1_D47" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E47" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="48" height=20 style="height:20px;">
		<td id="report1_A48" colNo=1 value='29' onclick="_hideEditor()" class="report1_2">29</td>
		<td id="report1_B48" colNo=2 value='   （二十三）其他1' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（二十三）其他1</td>
		<td id="report1_C48" colNo=3 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 editConfig="" value='' onclick="_hideEditor()" class="report1_14"></td>
		<td id="report1_D48" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E48" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="49" height=20 style="height:20px;">
		<td id="report1_A49" colNo=1 value='30' onclick="_hideEditor()" class="report1_2">30</td>
		<td id="report1_B49" colNo=2 value='   （二十四）其他2' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（二十四）其他2</td>
		<td id="report1_C49" colNo=3 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 editConfig="" value='' onclick="_hideEditor()" class="report1_14"></td>
		<td id="report1_D49" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E49" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="50" height=20 style="height:20px;">
		<td id="report1_A50" colNo=1 value='31' onclick="_hideEditor()" class="report1_2">31</td>
		<td id="report1_B50" colNo=2 value='   （二十五）其他3' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;（二十五）其他3</td>
		<td id="report1_C50" colNo=3 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 editConfig="" value='' onclick="_hideEditor()" class="report1_14"></td>
		<td id="report1_D50" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E50" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="51" height=20 style="height:20px;">
		<td id="report1_A51" colNo=1 value='32' onclick="_hideEditor()" class="report1_2">32</td>
		<td colSpan=2 id="report1_B51" colNo=2 value='四、减：项目所得额按法定税率减半征收企业所得税叠加享受减免税优惠' onclick="_hideEditor()" class="report1_3">四、减：项目所得额按法定税率减半征收企业所得税叠加享受减免税优惠</td>
		<td id="report1_D51" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E51" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="52" height=20 style="height:20px;">
		<td id="report1_A52" colNo=1 value='33' onclick="_hideEditor()" class="report1_2">33</td>
		<td colSpan=2 id="report1_B52" colNo=2 value='五、减免地方分享所得税的民族自治地方企业' onclick="_hideEditor()" class="report1_3">五、减免地方分享所得税的民族自治地方企业</td>
		<td id="report1_D52" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E52" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="53" height=20 style="height:20px;">
		<td id="report1_A53" colNo=1 value='34' onclick="_hideEditor()" class="report1_2">34</td>
		<td colSpan=2 id="report1_B53" colNo=2 value='合计：（1+3+6-32+33）' onclick="_hideEditor()" class="report1_3">合计：（1+3+6-32+33）</td>
		<td id="report1_D53" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">0.00</td>
		<td id="report1_E53" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_6"></td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,D7,D8,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D7' ) )+_parseValue( document.getElementById( 'report1_D8' ) )).toFixed(2);
				document.getElementById( 'report1_D6' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D6' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D6' ) );
			}catch(e1){}
		}
		cells = ",,D11,D12,D13,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D11' ) )+_parseValue( document.getElementById( 'report1_D12' ) )+_parseValue( document.getElementById( 'report1_D13' ) )).toFixed(2);
				document.getElementById( 'report1_D10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D10' ) );
			}catch(e1){}
		}
		cells = ",,D15,D16,D17,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D15' ) )+_parseValue( document.getElementById( 'report1_D16' ) )+_parseValue( document.getElementById( 'report1_D17' ) )).toFixed(2);
				document.getElementById( 'report1_D14' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D14' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D14' ) );
			}catch(e1){}
		}
		cells = ",,D19,D20,D21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D19' ) )+_parseValue( document.getElementById( 'report1_D20' ) )+_parseValue( document.getElementById( 'report1_D21' ) )).toFixed(2);
				document.getElementById( 'report1_D18' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D18' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D18' ) );
			}catch(e1){}
		}
		cells = ",,D23,D24,D25,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D23' ) )+_parseValue( document.getElementById( 'report1_D24' ) )+_parseValue( document.getElementById( 'report1_D25' ) )).toFixed(2);
				document.getElementById( 'report1_D22' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D22' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D22' ) );
			}catch(e1){}
		}
		cells = ",,D30,D31,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D30' ) )+_parseValue( document.getElementById( 'report1_D31' ) )).toFixed(2);
				document.getElementById( 'report1_D29' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D29' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D29' ) );
			}catch(e1){}
		}
		cells = ",,D33,D34,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D33' ) )+_parseValue( document.getElementById( 'report1_D34' ) )).toFixed(2);
				document.getElementById( 'report1_D32' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D32' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D32' ) );
			}catch(e1){}
		}
		cells = ",,D10,D11,D12,D13,D14,D15,D16,D17,D18,D19,D20,D21,D22,D23,D24,D25,D26,D27,D28,D29,D30,D31,D32,D33,D34,D35,D36,D37,D38,D39,D40,D41,D42,D43,D44,D45,D46,D47,D48,D49,D50,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D10' ) )+_parseValue( document.getElementById( 'report1_D14' ) )+_parseValue( document.getElementById( 'report1_D18' ) )+_parseValue( document.getElementById( 'report1_D22' ) )+_parseValue( document.getElementById( 'report1_D26' ) )+_parseValue( document.getElementById( 'report1_D27' ) )+_parseValue( document.getElementById( 'report1_D28' ) )+_parseValue( document.getElementById( 'report1_D29' ) )+_parseValue( document.getElementById( 'report1_D32' ) )+_parseValue( document.getElementById( 'report1_D35' ) )+_parseValue( document.getElementById( 'report1_D36' ) )+_parseValue( document.getElementById( 'report1_D37' ) )+_parseValue( document.getElementById( 'report1_D38' ) )+_parseValue( document.getElementById( 'report1_D39' ) )+_parseValue( document.getElementById( 'report1_D40' ) )+_parseValue( document.getElementById( 'report1_D41' ) )+_parseValue( document.getElementById( 'report1_D42' ) )+_parseValue( document.getElementById( 'report1_D43' ) )+_parseValue( document.getElementById( 'report1_D44' ) )+_parseValue( document.getElementById( 'report1_D45' ) )+_parseValue( document.getElementById( 'report1_D46' ) )+_parseValue( document.getElementById( 'report1_D47' ) )+_parseValue( document.getElementById( 'report1_D48' ) )+_parseValue( document.getElementById( 'report1_D49' ) )+_parseValue( document.getElementById( 'report1_D50' ) )).toFixed(2);
				document.getElementById( 'report1_D9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D9' ) );
			}catch(e1){}
		}
		cells = ",,D4,D6,D7,D8,D9,D10,D11,D12,D13,D14,D15,D16,D17,D18,D19,D20,D21,D22,D23,D24,D25,D26,D27,D28,D29,D30,D31,D32,D33,D34,D35,D36,D37,D38,D39,D40,D41,D42,D43,D44,D45,D46,D47,D48,D49,D50,D51,D52,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D4' ) )+_parseValue( document.getElementById( 'report1_D6' ) )+_parseValue( document.getElementById( 'report1_D9' ) )-_parseValue( document.getElementById( 'report1_D51' ) )+_parseValue( document.getElementById( 'report1_D52' ) )).toFixed(2);
				document.getElementById( 'report1_D53' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D53' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D53' ) );
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
	<input type=hidden name=fileName value="/ndsdsA/sb_ndsds_2014_fb30.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_74733">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2FndsdsA%2Fsb_ndsds_2014_fb30.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000015884336&sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466&reportParamsId=1511506632319150172196">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_NDSDS_2014_FB30;xmlName=ndsdsA/sb_ndsds_2014_fb30;pzxh=10014517000015884336;nsrsbh=91450107MA5KE0EQ2B;dataFromBz=0;raq=/ndsdsA/sb_ndsds_2014_fb30.raq;sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/ndsdsA/sb_ndsds_2014_fb30.raq&srcType=file&cachedId=10_1_1_176_8080_74733&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_NDSDS_2014_FB30%3BxmlName%3DndsdsA%2Fsb_ndsds_2014_fb30%3Bpzxh%3D10014517000015884336%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdataFromBz%3D0%3Braq%3D%2FndsdsA%2Fsb_ndsds_2014_fb30.raq%3Bsbuuid%3D4F35CE4F88AE666EB53FF3AE9DC76466%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

