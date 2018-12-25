<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_sb_ndsds_2014_jcxx.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_sb_ndsds_2014_jcxx" %>










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
	var report1_cachedId = "10_1_1_176_8080_74728";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2FndsdsA%2Fsb_ndsds_2014_jcxx.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=1511506632256166172191&cachedId=10_1_1_176_8080_74728&t_i_m_e=1511506632568" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2FndsdsA%2Fsb_ndsds_2014_jcxx.raq&columns=0&srcType=file&reportParamsId=1511506632256166172191&cachedId=10_1_1_176_8080_74728&t_i_m_e=1511506632568" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2FndsdsA%2Fsb_ndsds_2014_jcxx.raq&columns=0&srcType=file&reportParamsId=1511506632256166172191&cachedId=10_1_1_176_8080_74728&t_i_m_e=1511506632568";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2FndsdsA%2Fsb_ndsds_2014_jcxx.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=1511506632256166172191&cachedId=10_1_1_176_8080_74728&t_i_m_e=1511506632568";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2FndsdsA%2Fsb_ndsds_2014_jcxx.raq&srcType=file&reportParamsId=1511506632256166172191&cachedId=10_1_1_176_8080_74728&t_i_m_e=1511506632568" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_jcxx.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=1511506632256166172191&cachedId=10_1_1_176_8080_74728&t_i_m_e=1511506632568";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_jcxx.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=1511506632256166172191&cachedId=10_1_1_176_8080_74728&t_i_m_e=1511506632568";
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
	function report1488713over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1488713out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_4 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_5 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FB;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_12 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_13 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_14 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_15 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_16 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_17 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_18 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_19 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_20 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_21 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_22 { text-align:left;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_23 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_24 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000F7;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_25 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_26 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_27 { text-align:center;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:24px;}
	.report1_28 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_29 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_30 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1488713out()" onmouseover="report1488713over()" rowCount=42 cols=15 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:851px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:151px;"></col>
		<col style="width:113px;"></col>
		<col style="width:79px;"></col>
		<col style="width:67px;"></col>
		<col style="width:18px;"></col>
		<col style="width:41px;"></col>
		<col style="width:19px;"></col>
		<col style="width:66px;"></col>
		<col style="width:70px;"></col>
		<col style="width:49px;"></col>
		<col style="width:17px;"></col>
		<col style="width:70px;"></col>
		<col style="width:91px;"></col>
	</colgroup>
	<tr rn="1" height=25 style="height:25px;">
		<td colSpan=13 id="report1_A1" colNo=1 value='10014517000015884336' onclick="_hideEditor()" class="report1_22">A000000</td>
		<td id="report1_N1" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_O1" colNo=15 bkj="true" value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="2" height=30 style="height:30px;">
		<td colSpan=13 id="report1_A2" colNo=1 value='10014517000015884336' onclick="_hideEditor()" class="report1_27">企业基础信息表</td>
		<td id="report1_N2" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O2" colNo=15 bkj="true" value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="3" height=25 style="height:25px;">
		<td colSpan=2 id="report1_A3" colNo=1 value='1' onclick="_hideEditor()" class="report1_6">正常申报<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'A3' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_A3'));}catch(e){}" checked disabled></td>
		<td colSpan=6 id="report1_C3" colNo=3 value='0' onclick="_hideEditor()" class="report1_6">更正申报<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C3' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C3'));}catch(e){}" disabled></td>
		<td colSpan=5 id="report1_I3" colNo=9 value='0' onclick="_hideEditor()" class="report1_6">补充申报<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'I3' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_I3'));}catch(e){}" disabled></td>
		<td id="report1_N3" colNo=14 bkj="true" value='1' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O3" colNo=15 bkj="true" value='2016-01-01' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="4" height=25 style="height:25px;">
		<td colSpan=13 id="report1_A4" colNo=1 value='100基本信息' onclick="_hideEditor()" class="report1_4">100基本信息</td>
		<td id="report1_N4" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O4" colNo=15 bkj="true" value='2016-12-31' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="5" height=25 style="height:25px;">
		<td id="report1_A5" colNo=1 value='101汇总纳税企业' onclick="_hideEditor()" class="report1_5">101汇总纳税企业</td>
		<td colSpan=2 id="report1_B5" colNo=2 value='0' onclick="_hideEditor()" class="report1_1">是（总机构<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'B5' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_B5'));}catch(e){}" disabled></td>
		<td colSpan=3 id="report1_D5" colNo=4 value='0' onclick="_hideEditor()" class="report1_16">按比例缴纳总机构 <input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D5' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D5'));}catch(e){}" disabled></td>
		<td id="report1_G5" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="1" value='）' onclick="_displayEditor()" class="report1_16">）</td>
		<td id="report1_H5" colNo=8 value='' onclick="_hideEditor()" class="report1_16"></td>
		<td colSpan=5 id="report1_I5" colNo=9 value='1' onclick="_hideEditor()" class="report1_9">否<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'I5' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_I5'));}catch(e){}" checked disabled></td>
		<td id="report1_N5" colNo=14 bkj="true" value='3' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O5" colNo=15 bkj="true" value='2017-05-08' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="6" height=25 style="height:25px;">
		<td id="report1_A6" colNo=1 value='102注册资本<font color="#FF0000">（万元）</font>' onclick="_hideEditor()" class="report1_3">102注册资本<font color="#FF0000">（万元）</font></td>
		<td colSpan=2 id="report1_B6" colNo=2 modifiable=true writable=true editStyle="1" inputDataType="2" value='200.0' format="%230.00" digits="2" dataValid="report1_6_2_dataValid()" onclick="_displayEditor()" class="report1_18">200.00</td>
<script language=javascript>
	function report1_6_2_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_B6' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_B6" );}catch(e){}
			alert( '102注册资本（万元）不能为空' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=5 id="report1_D6" colNo=4 value='106境外中资控股居民企业' onclick="_hideEditor()" class="report1_3">106境外中资控股居民企业</td>
		<td colSpan=3 id="report1_I6" colNo=9 modifiable=true value='0' onclick="_hideEditor()" class="report1_1">是<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'I6' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_I6'));}catch(e){}"></td>
		<td colSpan=2 id="report1_L6" colNo=12 modifiable=true value='1' onclick="_hideEditor()" class="report1_19">否<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'L6' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_L6'));}catch(e){}" checked></td>
		<td id="report1_N6" colNo=14 bkj="true" value='N' dataValid="report1_6_14_dataValid()" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
<script language=javascript>
	function report1_6_14_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_N6' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_N6" );}catch(e){}
			alert( '106境外中资控股居民企业不能为空' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_O6" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="7" height=25 style="height:25px;">
		<td id="report1_A7" colNo=1 value='103所属行业明细代码' onclick="_hideEditor()" class="report1_3">103所属行业明细代码</td>
		<td colSpan=2 id="report1_B7" colNo=2 value='金属及金属矿批发' onclick="_hideEditor()" class="report1_4">金属及金属矿批发</td>
		<td colSpan=5 id="report1_D7" colNo=4 value='107从事国家限制和禁止行业' onclick="_hideEditor()" class="report1_3">107从事国家限制和禁止行业</td>
		<td colSpan=3 id="report1_I7" colNo=9 value='0' onclick="_hideEditor()" class="report1_1">是<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'I7' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_I7'));}catch(e){}" disabled></td>
		<td colSpan=2 id="report1_L7" colNo=12 value='1' onclick="_hideEditor()" class="report1_19">否<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'L7' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_L7'));}catch(e){}" checked disabled></td>
		<td id="report1_N7" colNo=14 bkj="true" value='N' dataValid="report1_7_14_dataValid()" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
<script language=javascript>
	function report1_7_14_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_N7' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_N7" );}catch(e){}
			alert( '107从事国家限制和禁止行业' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_O7" colNo=15 bkj="true" value='5164' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="8" height=25 style="height:25px;">
		<td id="report1_A8" colNo=1 value='104从业人数 ' onclick="_hideEditor()" class="report1_5">104从业人数&nbsp;</td>
		<td colSpan=2 id="report1_B8" colNo=2 modifiable=true writable=true editStyle="1" inputDataType="6" value='3' dataValid="report1_8_2_dataValid()" onclick="_displayEditor()" class="report1_18">3</td>
<script language=javascript>
	function report1_8_2_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_B8' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_B8" );}catch(e){}
			alert( '104从业人数不能为空' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_B8' ) )>0 ) ) {
			try{ report1_markInvalidCell( "report1_B8" );}catch(e){}
			alert( '104从业人数>0' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=5 id="report1_D8" colNo=4 value='108存在境外关联交易' onclick="_hideEditor()" class="report1_5">108存在境外关联交易</td>
		<td colSpan=3 id="report1_I8" colNo=9 modifiable=true value='0' onclick="_hideEditor()" class="report1_1">是<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'I8' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_I8'));}catch(e){}"></td>
		<td colSpan=2 id="report1_L8" colNo=12 modifiable=true value='1' onclick="_hideEditor()" class="report1_19">否<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'L8' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_L8'));}catch(e){}" checked></td>
		<td id="report1_N8" colNo=14 bkj="true" value='1' dataValid="report1_8_14_dataValid()" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
<script language=javascript>
	function report1_8_14_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_N8' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_N8" );}catch(e){}
			alert( '108存在境外关联交易不能为空' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_O8" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="9" height=25 style="height:25px;">
		<td id="report1_A9" colNo=1 value='105资产总额<font color="FF0000">（万元）</font>' onclick="_hideEditor()" class="report1_5">105资产总额<font color="FF0000">（万元）</font></td>
		<td colSpan=2 id="report1_B9" colNo=2 modifiable=true writable=true editStyle="1" inputDataType="2" value='6.46' format="%230.00" digits="2" dataValid="report1_9_2_dataValid()" onclick="_displayEditor()" class="report1_18">6.46</td>
<script language=javascript>
	function report1_9_2_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_B9' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_B9" );}catch(e){}
			alert( '105资产总额（万元）不能为空' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_B9' ) )>0 ) ) {
			try{ report1_markInvalidCell( "report1_B9" );}catch(e){}
			alert( '105资产总额>0' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=5 id="report1_D9" colNo=4 value='109上市公司' onclick="_hideEditor()" class="report1_3">109上市公司</td>
		<td id="report1_I9" colNo=9 modifiable=true value='0' onclick="_hideEditor()" class="report1_15">是（境内<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'I9' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_I9'));}catch(e){}"></td>
		<td id="report1_J9" colNo=10 modifiable=true value='0' onclick="_hideEditor()" class="report1_16">境外<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'J9' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_J9'));}catch(e){}"></td>
		<td id="report1_K9" colNo=11 value='）' onclick="_hideEditor()" class="report1_28">）</td>
		<td colSpan=2 id="report1_L9" colNo=12 modifiable=true value='1' onclick="_hideEditor()" class="report1_9">否<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'L9' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_L9'));}catch(e){}" checked></td>
		<td id="report1_N9" colNo=14 bkj="true" value='2' dataValid="report1_9_14_dataValid()" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
<script language=javascript>
	function report1_9_14_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_N9' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_N9" );}catch(e){}
			alert( '109上市公司不能为空' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_O9" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="10" height=25 style="height:25px;">
		<td colSpan=13 id="report1_A10" colNo=1 value='200主要会计政策和估计' onclick="_hideEditor()" class="report1_4">200主要会计政策和估计</td>
		<td id="report1_N10" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O10" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="11" height=27 style="height:27px;">
		<td rowSpan=9 id="report1_A11" colNo=1 value='201适用的会计准则或会计制度 ' onclick="_hideEditor()" class="report1_4">201适用的会计准则或会计<br>制度&nbsp;</td>
		<td id="report1_B11" colNo=2 value='企业会计准则    （' onclick="_hideEditor()" class="report1_20">企业会计准则&nbsp;&nbsp;&nbsp;&nbsp;（</td>
		<td id="report1_C11" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_17">一般企业<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C11' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C11'));}catch(e){}"></td>
		<td id="report1_D11" colNo=4 modifiable=true value='0' onclick="_hideEditor()" class="report1_17">银行<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D11' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D11'));}catch(e){}"></td>
		<td colSpan=3 id="report1_E11" colNo=5 modifiable=true value='0' onclick="_hideEditor()" class="report1_17">证券<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'E11' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_E11'));}catch(e){}"></td>
		<td id="report1_H11" colNo=8 modifiable=true value='0' onclick="_hideEditor()" class="report1_17">保险<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'H11' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_H11'));}catch(e){}"></td>
		<td id="report1_I11" colNo=9 modifiable=true value='0' onclick="_hideEditor()" class="report1_17">担保<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'I11' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_I11'));}catch(e){}"></td>
		<td colSpan=4 id="report1_J11" colNo=10 value='）' onclick="_hideEditor()" class="report1_23">）</td>
		<td id="report1_N11" colNo=14 bkj="true" value='' dataValid="report1_11_14_dataValid()" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
<script language=javascript>
	function report1_11_14_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_N11' ).getAttribute( "value" ).toString()+document.getElementById( 'report1_N12' ).getAttribute( "value" ).toString()+document.getElementById( 'report1_N13' ).getAttribute( "value" ).toString()
+document.getElementById( 'report1_N14' ).getAttribute( "value" ).toString()+document.getElementById( 'report1_N16' ).getAttribute( "value" ).toString()+document.getElementById( 'report1_N17' ).getAttribute( "value" ).toString()+document.getElementById( 'report1_N18' ).getAttribute( "value" ).toString()+document.getElementById( 'report1_N19' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_N11,report1_N12,report1_N14,report1_N13,report1_N16,report1_N18,report1_N17,report1_N19" );}catch(e){}
			alert( '201适用的会计准则或会计制度 不能为空' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_O11" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="12" height=27 style="height:27px;">
		<td colSpan=12 id="report1_B12" colNo=2 modifiable=true value='1' onclick="_hideEditor()" class="report1_21">小企业会计准则<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'B12' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_B12'));}catch(e){}" checked></td>
		<td id="report1_N12" colNo=14 bkj="true" value='Y' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O12" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="13" height=27 style="height:27px;">
		<td colSpan=12 id="report1_B13" colNo=2 modifiable=true value='0' onclick="_hideEditor()" class="report1_21">企业会计制度 <input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'B13' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_B13'));}catch(e){}"></td>
		<td id="report1_N13" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O13" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="14" height=27 style="height:27px;">
		<td id="report1_B14" colNo=2 value='事业单位会计准则（' onclick="_hideEditor()" class="report1_12">事业单位会计准则（</td>
		<td colSpan=2 id="report1_C14" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_14">事业单位会计制度<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C14' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C14'));}catch(e){}"></td>
		<td colSpan=5 id="report1_E14" colNo=5 modifiable=true value='0' onclick="_hideEditor()" class="report1_14">科学事业单位会计制度<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'E14' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_E14'));}catch(e){}"></td>
		<td colSpan=4 id="report1_J14" colNo=10 modifiable=true value='0' onclick="_hideEditor()" class="report1_7">医院会计制度<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'J14' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_J14'));}catch(e){}"></td>
		<td id="report1_N14" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O14" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="15" height=27 style="height:27px;">
		<td id="report1_B15" colNo=2 value='' onclick="_hideEditor()" class="report1_12"></td>
		<td colSpan=2 id="report1_C15" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_14">高等学校会计制度<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C15' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C15'));}catch(e){}"></td>
		<td colSpan=5 id="report1_E15" colNo=5 modifiable=true value='0' onclick="_hideEditor()" class="report1_14">中小学校会计制度<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'E15' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_E15'));}catch(e){}"></td>
		<td colSpan=3 id="report1_J15" colNo=10 modifiable=true value='0' onclick="_hideEditor()" class="report1_14">彩票机构会计制度<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'J15' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_J15'));}catch(e){}"></td>
		<td id="report1_M15" colNo=13 value='）' onclick="_hideEditor()" class="report1_7">）</td>
		<td id="report1_N15" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O15" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="16" height=27 style="height:27px;">
		<td colSpan=12 id="report1_B16" colNo=2 modifiable=true value='0' onclick="_hideEditor()" class="report1_21">民间非营利组织会计制度<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'B16' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_B16'));}catch(e){}"></td>
		<td id="report1_N16" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O16" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="17" height=27 style="height:27px;">
		<td colSpan=12 id="report1_B17" colNo=2 modifiable=true value='0' onclick="_hideEditor()" class="report1_21">村集体经济组织会计制度<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'B17' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_B17'));}catch(e){}"></td>
		<td id="report1_N17" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O17" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="18" height=27 style="height:27px;">
		<td colSpan=12 id="report1_B18" colNo=2 modifiable=true value='0' onclick="_hideEditor()" class="report1_21">农民专业合作社财务会计制度（试行）<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'B18' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_B18'));}catch(e){}"></td>
		<td id="report1_N18" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O18" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="19" height=26 style="height:26px;">
		<td colSpan=12 id="report1_B19" colNo=2 modifiable=true value='0' onclick="_hideEditor()" class="report1_26">其他<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'B19' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_B19'));}catch(e){}"></td>
		<td id="report1_N19" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O19" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="20" height=25 style="height:25px;">
		<td id="report1_A20" colNo=1 value='202会计档案的存放地' onclick="_hideEditor()" class="report1_5">202会计档案的存放地</td>
		<td colSpan=2 id="report1_B20" colNo=2 modifiable=true writable=true editStyle="1" inputDataType="1" value='南宁市西乡塘区人民西路25号融昌邕江银座3号楼1单元1-2103号' dataValid="report1_20_2_dataValid()" onclick="_displayEditor()" class="report1_5">南宁市西乡塘区人民西路25号融昌邕江银座3号楼1单元1-2103号</td>
<script language=javascript>
	function report1_20_2_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_B20' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_B20" );}catch(e){}
			alert( '202会计档案的存放地不能为空' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=5 id="report1_D20" colNo=4 value='203会计核算软件' onclick="_hideEditor()" class="report1_5">203会计核算软件</td>
		<td colSpan=5 id="report1_I20" colNo=9 modifiable=true writable=true editStyle="1" inputDataType="1" value='金蝶' dataValid="report1_20_9_dataValid()" onclick="_displayEditor()" class="report1_5">金蝶</td>
<script language=javascript>
	function report1_20_9_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_I20' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_I20" );}catch(e){}
			alert( '203会计核算软件不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_N20" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O20" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="21" height=25 style="height:25px;">
		<td id="report1_A21" colNo=1 value='204记账本位币   ' onclick="_hideEditor()" class="report1_5">204记账本位币&nbsp;&nbsp;&nbsp;</td>
		<td id="report1_B21" colNo=2 modifiable=true value='1' onclick="_hideEditor()" class="report1_15">人民币<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'B21' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_B21'));}catch(e){}" checked></td>
		<td id="report1_C21" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_9">其他<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C21' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C21'));}catch(e){}"></td>
		<td colSpan=5 id="report1_D21" colNo=4 value='205会计政策和估计是否发生变化  ' onclick="_hideEditor()" class="report1_3">205会计政策和估计是否发生变化&nbsp;&nbsp;</td>
		<td colSpan=2 id="report1_I21" colNo=9 modifiable=true value='0' onclick="_hideEditor()" class="report1_15">是<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'I21' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_I21'));}catch(e){}"></td>
		<td colSpan=3 id="report1_K21" colNo=11 modifiable=true value='1' onclick="_hideEditor()" class="report1_9">否<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'K21' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_K21'));}catch(e){}" checked></td>
		<td id="report1_N21" colNo=14 bkj="true" value='Y' dataValid="report1_21_14_dataValid()" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
<script language=javascript>
	function report1_21_14_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_N21' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_N21" );}catch(e){}
			alert( '204记账本位币不能为空' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_O21" colNo=15 bkj="true" value='N' dataValid="report1_21_15_dataValid()" onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
<script language=javascript>
	function report1_21_15_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_O21' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_O21" );}catch(e){}
			alert( '205会计政策和估计是否发生变化  不能为空' );
			return false;
		}
		return true;
	}
</script>
	</tr>
	<tr rn="22" height=25 style="height:25px;">
		<td id="report1_A22" colNo=1 value='206固定资产折旧方法' onclick="_hideEditor()" class="report1_5">206固定资产折旧方法</td>
		<td id="report1_B22" colNo=2 modifiable=true value='11' dataValid="report1_22_2_dataValid()" onclick="_hideEditor()" class="report1_15">年限平均法<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '11');else this.parentElement.setAttribute('value','');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'B22' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_B22'));}catch(e){}" checked></td>
<script language=javascript>
	function report1_22_2_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_B22' ) )!=11&&_parseValue( document.getElementById( 'report1_C22' ) )!=12&&_parseValue( document.getElementById( 'report1_D22' ) )!=21&&_parseValue( document.getElementById( 'report1_G22' ) )!=22&&_parseValue( document.getElementById( 'report1_I22' ) )!=90?checkNull(document.getElementById( 'report1_B22' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_B22,report1_D22,report1_G22,report1_I22,report1_C22" );}catch(e){}
			alert( '206固定资产折旧方法不能为空' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_C22" colNo=3 modifiable=true value='' onclick="_hideEditor()" class="report1_16">工作量法<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '12');else this.parentElement.setAttribute('value','');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C22' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C22'));}catch(e){}"></td>
		<td colSpan=3 id="report1_D22" colNo=4 modifiable=true value='' onclick="_hideEditor()" class="report1_16">双倍余额递减法<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '21');else this.parentElement.setAttribute('value','');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D22' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D22'));}catch(e){}"></td>
		<td colSpan=2 id="report1_G22" colNo=7 modifiable=true value='' onclick="_hideEditor()" class="report1_16">年数总和法<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '22');else this.parentElement.setAttribute('value','');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'G22' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_G22'));}catch(e){}"></td>
		<td id="report1_I22" colNo=9 modifiable=true value='' onclick="_hideEditor()" class="report1_29">其他<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '90');else this.parentElement.setAttribute('value','');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'I22' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_I22'));}catch(e){}"></td>
		<td colSpan=4 id="report1_J22" colNo=10 value='' onclick="_hideEditor()" class="report1_9"></td>
		<td id="report1_N22" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O22" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="23" height=25 style="height:25px;">
		<td rowSpan=2 id="report1_A23" colNo=1 value='207存货成本计价方法' onclick="_hideEditor()" class="report1_5">207存货成本计价方法</td>
		<td id="report1_B23" colNo=2 modifiable=true value='0' dataValid="report1_23_2_dataValid()" onclick="_hideEditor()" class="report1_20">先进先出法<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '0');else this.parentElement.setAttribute('value','');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'B23' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_B23'));}catch(e){}" checked></td>
<script language=javascript>
	function report1_23_2_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_B23' ).getAttribute( "value" ).toString()) || checkNull(document.getElementById( 'report1_C23' ).getAttribute( "value" ).toString()) || checkNull(document.getElementById( 'report1_E23' ).getAttribute( "value" ).toString()) || checkNull(document.getElementById( 'report1_J23' ).getAttribute( "value" ).toString()) || checkNull(document.getElementById( 'report1_B24' ).getAttribute( "value" ).toString()) || checkNull(document.getElementById( 'report1_C24' ).getAttribute( "value" ).toString()) || checkNull(document.getElementById( 'report1_E24' ).getAttribute( "value" ).toString()) || checkNull(document.getElementById( 'report1_J24' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_E24,report1_B23,report1_E23,report1_J23,report1_J24,report1_B24,report1_C23,report1_C24" );}catch(e){}
			alert( '207存货成本计价方法不能为空' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_C23" colNo=3 modifiable=true value='' onclick="_hideEditor()" class="report1_17">移动加权平均法<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C23' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C23'));}catch(e){}"></td>
		<td colSpan=5 id="report1_E23" colNo=5 modifiable=true value='' onclick="_hideEditor()" class="report1_17">月末一次加权平均法<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '2');else this.parentElement.setAttribute('value','');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'E23' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_E23'));}catch(e){}"></td>
		<td colSpan=4 id="report1_J23" colNo=10 modifiable=true value='' onclick="_hideEditor()" class="report1_23">个别计价法<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '3');else this.parentElement.setAttribute('value','');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'J23' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_J23'));}catch(e){}"></td>
		<td id="report1_N23" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O23" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="24" height=25 style="height:25px;">
		<td id="report1_B24" colNo=2 modifiable=true value='' onclick="_hideEditor()" class="report1_25">毛利率法<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '4');else this.parentElement.setAttribute('value','');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'B24' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_B24'));}catch(e){}"></td>
		<td colSpan=2 id="report1_C24" colNo=3 modifiable=true value='' onclick="_hideEditor()" class="report1_13">零售价法<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '5');else this.parentElement.setAttribute('value','');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C24' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C24'));}catch(e){}"></td>
		<td colSpan=5 id="report1_E24" colNo=5 modifiable=true value='' onclick="_hideEditor()" class="report1_13">计划成本法<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '6');else this.parentElement.setAttribute('value','');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'E24' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_E24'));}catch(e){}"></td>
		<td colSpan=4 id="report1_J24" colNo=10 modifiable=true value='' onclick="_hideEditor()" class="report1_30">其他<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '7');else this.parentElement.setAttribute('value','');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'J24' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_J24'));}catch(e){}"></td>
		<td id="report1_N24" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O24" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="25" height=25 style="height:25px;">
		<td id="report1_A25" colNo=1 value='208坏账损失核算方法' onclick="_hideEditor()" class="report1_5">208坏账损失核算方法</td>
		<td colSpan=2 id="report1_B25" colNo=2 modifiable=true value='1' onclick="_hideEditor()" class="report1_15">备抵法<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'B25' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_B25'));}catch(e){}" checked></td>
		<td colSpan=10 id="report1_D25" colNo=4 modifiable=true value='0' onclick="_hideEditor()" class="report1_9">直接核销法<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D25' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D25'));}catch(e){}"></td>
		<td id="report1_N25" colNo=14 bkj="true" value='Y' dataValid="report1_25_14_dataValid()" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
<script language=javascript>
	function report1_25_14_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_N25' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_N25" );}catch(e){}
			alert( '208坏账损失核算方法不能为空' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_O25" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="26" height=25 style="height:25px;">
		<td id="report1_A26" colNo=1 value='209所得税计算方法' onclick="_hideEditor()" class="report1_5">209所得税计算方法</td>
		<td colSpan=2 id="report1_B26" colNo=2 modifiable=true value='1' onclick="_hideEditor()" class="report1_15">应付税款法<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'B26' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_B26'));}catch(e){}" checked></td>
		<td colSpan=6 id="report1_D26" colNo=4 modifiable=true value='0' onclick="_hideEditor()" class="report1_16">资产负债表债务法<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D26' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D26'));}catch(e){}"></td>
		<td colSpan=4 id="report1_J26" colNo=10 modifiable=true value='0' onclick="_hideEditor()" class="report1_9">其他<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'J26' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_J26'));}catch(e){}"></td>
		<td id="report1_N26" colNo=14 bkj="true" value='0' dataValid="report1_26_14_dataValid()" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
<script language=javascript>
	function report1_26_14_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_N26' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_N26" );}catch(e){}
			alert( '209所得税计算方法不能为空' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_O26" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="27" height=25 style="height:25px;">
		<td colSpan=13 id="report1_A27" colNo=1 value='300企业主要股东及对外投资情况' onclick="_hideEditor()" class="report1_4">300企业主要股东及对外投资情况</td>
		<td id="report1_N27" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O27" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="28" height=25 style="height:25px;">
		<td colSpan=13 id="report1_A28" colNo=1 value='301企业主要股东（前5位）' onclick="_hideEditor()" class="report1_5">301企业主要股东（前5位）</td>
		<td id="report1_N28" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O28" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="29" height=25 style="height:25px;">
		<td id="report1_A29" colNo=1 value='股东名称' onclick="_hideEditor()" class="report1_4">股东名称</td>
		<td id="report1_B29" colNo=2 value='证件种类' onclick="_hideEditor()" class="report1_6">证件种类</td>
		<td colSpan=5 id="report1_C29" colNo=3 value='证件号码' onclick="_hideEditor()" class="report1_6">证件号码</td>
		<td colSpan=2 id="report1_H29" colNo=8 value='经济性质' onclick="_hideEditor()" class="report1_4">经济性质</td>
		<td colSpan=2 id="report1_J29" colNo=10 value='投资比例' onclick="_hideEditor()" class="report1_6">投资比例</td>
		<td colSpan=2 id="report1_L29" colNo=12 value='国籍（注册地址）' onclick="_hideEditor()" class="report1_4">国籍（注册地址）</td>
		<td id="report1_N29" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O29" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="30" height=30 style="height:30px;">
		<td id="report1_A30" colNo=1 modifiable=true writable=true editStyle="0" inputDataType="1" value='刘士鹏' dataValid="report1_30_1_dataValid()" onclick="_displayEditor()" class="report1_3">刘士鹏</td>
<script language=javascript>
	function report1_30_1_dataValid() {
		if( ! ( document.getElementById( 'report1_A30' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H30' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J30' ) )>0||document.getElementById( 'report1_L30' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_A30' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_A30,report1_H30,report1_L30,report1_J30" );}catch(e){}
			alert( '301企业主要股东（第1位） 股东名称未填写' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_B30" colNo=2 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="101,组织机构代码证;102,营业执照;103,税务登记证;199,其他单位证件;201,居民身份证;202,军官证;203,武警警官证;204,士兵证;205,军队离退休干部证;206,残疾人证;207,残疾军人证（1-8级）;208,外国护照;210,港澳居民来往内地通行证;212,中华人民共和国往来港澳通行证;213,台湾居民来往大陆通行证;214,大陆居民往来台湾通行证;215,外国人居留证;216,外交官证;217,使（领事）馆证;218,海员证;219,香港永久性居民身份证;220,台湾身份证;221,澳门特别行政区永久性居民身份证;222,外国人身份证件;224,就业失业登记证;225,退休证;226,离休证;227,中国护照;228,城镇退役士兵自谋职业证;229,随军家属身份证明;230,中国人民解放军军官转业证书;231,中国人民解放军义务兵退出现役证;232,中国人民解放军士官退出现役证;233,外国人永久居留身份证（外国人永久居留证）;234,就业创业证;235,香港特别行政区护照;236,澳门特别行政区护照;291,医学出生证明;299,其他个人证件" value='201' onclick="_displayEditor()" class="report1_5">居民身份证</td>
<script language=javascript src="/WSSBSL/Fselect.js" charset="UTF-8"></script>
		<td colSpan=5 id="report1_C30" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="1" value='412727199005085478' dataValid="report1_30_3_dataValid()" onclick="_displayEditor()" class="report1_5">412727199005085478</td>
<script language=javascript>
	function report1_30_3_dataValid() {
		if( ! ( getByteLength(document.getElementById( 'report1_C30' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_C30" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第一位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_H30" colNo=8 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="110,国有企业;120,集体企业;130,股份合作企业;141,国有联营企业;142,集体联营企业;143,国有与集体联营企业;149,其他联营企业;151,国有独资公司;159,其他有限责任公司;161,国有绝对控股上市企业;162,国有相对控股上市企业;163,非国有控股上市企业;164,国有绝对控股非上市企业;165,国有相对控股非上市企业;166,非国有控股非上市企业;171,私营独资企业;172,私营合伙企业;173,私营有限责任公司;174,私营股份有限公司;190,其他企业;210,合资经营企业（港或澳、台资）;220,合作经营企业（港或澳、台资）;230,港、澳、台商独资经营企业;240,港、澳、台商投资股份有限公司;251,（港澳台商）企业常驻代表机构;252,（港澳台商）提供劳务承包工程作业企业;253,（港澳台商）缴纳预提所得税的企业;254,（港澳台商）国际运输企业;255,（港澳台商）金融和保险企业;259,其他港澳台商企业;290,其他港、澳、台商投资企业;310,中外合资经营企业;320,中外合作经营企业;330,外资企业;340,外商投资股份有限公司;351,外国企业常驻代表机构;352,提供劳务、承包工程作业企业;353,缴纳预提所得税的企业;354,国际运输企业;355,金融和保险企业;359,其他外国企业;390,其他外商投资企业;411,内资个体;412,港澳台个体;413,外资个体;421,内资合伙;422,港澳台合伙;423,外资合伙;431,内资个人;432,港澳台个人;433,外资个人;510,事业单位;521,民办非企业单位（法人）;522,民办非企业单位（合伙）;523,民办非企业单位（个人）;530,国家机关;540,政党机关;550,社会团体;560,基层群众自治组织;900,其他" value='431' dataValid="report1_30_8_dataValid()" onclick="_displayEditor()" class="report1_5">内资个人</td>
<script language=javascript>
	function report1_30_8_dataValid() {
		if( ! ( document.getElementById( 'report1_A30' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H30' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J30' ) )>0||document.getElementById( 'report1_L30' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_H30' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_A30,report1_H30,report1_L30,report1_J30" );}catch(e){}
			alert( '301企业主要股东（第1位） 经济性质未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_J30" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='1.0' format="%230.00%25" digits="4" dataValid="report1_30_10_dataValid()" onclick="_displayEditor()" class="report1_8">100.00%</td>
<script language=javascript>
	function report1_30_10_dataValid() {
		if( ! ( document.getElementById( 'report1_A30' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H30' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J30' ) )>0||document.getElementById( 'report1_L30' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_J30' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_A30,report1_H30,report1_L30,report1_J30" );}catch(e){}
			alert( '301企业主要股东（第1位）投资比例未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_L30" colNo=12 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="156,中国;158,台湾;344,香港;446,澳门;004,阿富汗;008,阿尔巴尼亚;010,南极洲;012,阿尔及利亚;016,美属萨摩亚;020,安道尔;024,安哥拉;028,安提瓜和巴布达;031,阿塞拜疆;032,阿根廷;036,澳大利亚;040,奥地利;044,巴哈马;048,巴林;050,孟加拉国;051,亚美尼亚;052,巴巴多斯;056,比利时;060,百慕大;064,不丹;068,玻利维亚;070,波黑;072,博茨瓦纳;074,布维岛;076,巴西;084,伯利兹;086,英属印度洋领地;090,所罗门群岛;092,英属维尔京群岛;096,文莱;100,保加利亚;104,缅甸;108,布隆迪;112,白俄罗斯;116,柬埔寨;120,喀麦隆;124,加拿大;132,佛得角;136,开曼群岛;140,中非;144,斯里兰卡;148,乍得;152,智利;162,圣诞岛;166,科科斯（基林）群岛;170,哥伦比亚;174,科摩罗;175,马约特;178,刚果（布）;180,刚果（金）;184,库克群岛;188,哥斯达黎加;191,克罗地亚;192,古巴;196,塞浦路斯;203,捷克;204,贝宁;208,丹麦;212,多米尼克;214,多米尼加;218,厄瓜多尔;222,萨尔瓦多;226,赤道几内亚;231,埃塞俄比亚;232,厄立特里亚;233,爱沙尼亚;234,法罗群岛;238,福克兰群岛（马尔维纳斯）;239,南乔治亚岛和南桑德韦奇岛;242,斐济;246,芬兰;250,法国;254,法属圭亚那;258,法属波利尼西亚;260,法属南部领地;262,吉布提;266,加蓬;268,格鲁吉亚;270,冈比亚;275,巴勒斯坦;276,德国;288,加纳;292,直布罗陀;296,基里巴斯;300,希腊;304,格陵兰;308,格林纳达;312,瓜德罗普;316,关岛;320,危地马;324,几内亚;328,圭亚那;332,海地;334,赫德岛和麦克唐纳岛;336,梵蒂冈;340,洪都拉斯;348,匈牙利;352,冰岛;356,印度;360,印度尼西亚;364,伊朗;368,伊拉克;372,爱尔兰;376,以色列;380,意大利;384,科特迪瓦;388,牙买加;392,日本;398,哈萨克斯坦;400,约旦;404,肯尼亚;408,朝鲜;410,韩国;414,科威特;417,吉尔吉斯斯坦;418,老挝;422,黎巴嫩;426,莱索托;428,拉脱维亚;430,利比里亚;434,利比亚;438,列支敦士登;440,立陶宛;442,卢森堡;450,马达加斯加;454,马拉维;458,马来西亚;462,马尔代夫;466,马里;470,马耳他;474,马提尼克;478,毛里塔尼亚;480,毛里求斯;484,墨西哥;492,摩纳哥;496,蒙古;498,摩尔多瓦;499,黑山;500,蒙特塞拉特;504,摩洛哥;508,莫桑比克;512,阿曼;516,纳米比亚;520,瑙鲁;524,尼泊尔;528,荷兰;530,荷属安的列斯;533,阿鲁巴;540,新喀里多尼亚;548,瓦努阿图;554,新西兰;558,尼加拉瓜;562,尼日尔;566,尼日利亚;570,纽埃;574,诺福克岛;578,挪威;580,北马里亚纳;581,美国本土外小岛屿;583,密克罗尼西亚联邦;584,马绍尔群岛;585,帕劳;586,巴基斯坦;591,巴拿马;598,巴布亚新几内亚;600,巴拉圭;604,秘鲁;608,菲律宾;612,皮特凯恩;616,波兰;620,葡萄牙;624,几内亚比绍;626,东帝汶;630,波多黎各;634,卡塔尔;638,留尼汪;642,罗马尼亚;643,俄罗斯联邦;646,卢旺达;654,圣赫勒拿;659,圣基茨和尼维斯;660,安圭拉;662,圣卢西亚;666,圣皮埃尔和密克隆;670,圣文森特和格林纳丁斯;674,圣马力诺;678,圣多美和普林西比;682,沙特阿拉伯;686,塞内加尔;688,塞尔维亚;690,塞舌尔;694,塞拉利昂;702,新加坡;703,斯洛伐克;704,越南;705,斯洛文尼亚;706,索马里;710,南非;716,津巴布韦;724,西班牙;728,南苏丹;732,西撒哈拉;736,苏丹;740,苏里南;744,斯瓦尔巴岛和扬马延岛;748,斯威士兰;752,瑞典;756,瑞士;760,叙利亚;762,塔吉克斯坦;764,泰国;768,多哥;772,托克劳;776,汤加;780,特立尼达和多巴哥;784,阿联酋;788,突尼斯;792,土耳其;795,土库曼斯坦;796,特克斯和凯科斯群岛;798,图瓦卢;800,乌干达;804,乌克兰;807,前南马其顿;818,埃及;826,英国;831,根西岛;834,坦桑尼亚;840,美国;850,美属维尔京群岛;854,布基纳法索;858,乌拉圭;860,乌兹别克斯坦;862,委内瑞拉;876,瓦利斯和富图纳;882,萨摩亚;887,也门;891,南斯拉夫;894,赞比亚" value='156' dataValid="report1_30_12_dataValid()" onclick="_displayEditor()" class="report1_5">中国</td>
<script language=javascript>
	function report1_30_12_dataValid() {
		if( ! ( document.getElementById( 'report1_A30' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H30' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J30' ) )>0||document.getElementById( 'report1_L30' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_L30' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_A30,report1_H30,report1_L30,report1_J30" );}catch(e){}
			alert( '301企业主要股东（第1位） 国籍（注册地址）未填写' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_N30" colNo=14 bkj="true" value='1' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O30" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="31" height=30 style="height:30px;">
		<td id="report1_A31" colNo=1 modifiable=true writable=true editStyle="0" inputDataType="1" value='' dataValid="report1_31_1_dataValid()" onclick="_displayEditor()" class="report1_3"></td>
<script language=javascript>
	function report1_31_1_dataValid() {
		if( ! ( document.getElementById( 'report1_A31' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H31' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J31' ) )>0||document.getElementById( 'report1_L31' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_A31' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_A31,report1_J31,report1_L31,report1_H31" );}catch(e){}
			alert( '301企业主要股东（第2位） 股东名称未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_A31' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A31" );}catch(e){}
			alert( '“股东名称”（第二位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_B31" colNo=2 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_B30" value='' onclick="_displayEditor()" class="report1_5"></td>
		<td colSpan=5 id="report1_C31" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="1" value='' dataValid="report1_31_3_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_31_3_dataValid() {
		if( ! ( getByteLength(document.getElementById( 'report1_C31' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_C31" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第二位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_H31" colNo=8 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_H30" value='' dataValid="report1_31_8_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_31_8_dataValid() {
		if( ! ( document.getElementById( 'report1_A31' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H31' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J31' ) )>0||document.getElementById( 'report1_L31' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_H31' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_A31,report1_J31,report1_L31,report1_H31" );}catch(e){}
			alert( '301企业主要股东（第2位） 经济性质未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_J31" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='' format="%230.00%25" digits="4" dataValid="report1_31_10_dataValid()" onclick="_displayEditor()" class="report1_8"></td>
<script language=javascript>
	function report1_31_10_dataValid() {
		if( ! ( document.getElementById( 'report1_A31' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H31' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J31' ) )>0||document.getElementById( 'report1_L31' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_J31' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_A31,report1_J31,report1_L31,report1_H31" );}catch(e){}
			alert( '301企业主要股东（第2位）投资比例未填写' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_J31' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_J31' ) )>0&&_parseValue( document.getElementById( 'report1_J31' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J31" );}catch(e){}
			alert( '301企业主要股东（第2位）0<比例<=1' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_L31" colNo=12 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_L30" value='' dataValid="report1_31_12_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_31_12_dataValid() {
		if( ! ( document.getElementById( 'report1_A31' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H31' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J31' ) )>0||document.getElementById( 'report1_L31' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_L31' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_A31,report1_J31,report1_L31,report1_H31" );}catch(e){}
			alert( '301企业主要股东（第2位） 国籍（注册地址）未填写' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_N31" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O31" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="32" height=30 style="height:30px;">
		<td id="report1_A32" colNo=1 modifiable=true writable=true editStyle="0" inputDataType="1" value='' dataValid="report1_32_1_dataValid()" onclick="_displayEditor()" class="report1_3"></td>
<script language=javascript>
	function report1_32_1_dataValid() {
		if( ! ( document.getElementById( 'report1_A32' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H32' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J32' ) )>0||document.getElementById( 'report1_L32' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_A32' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J32,report1_H32,report1_L32,report1_A32" );}catch(e){}
			alert( '301企业主要股东（第3位） 股东名称未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_A32' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A32" );}catch(e){}
			alert( '“股东名称”（第三位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_B32" colNo=2 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_B30" value='' onclick="_displayEditor()" class="report1_5"></td>
		<td colSpan=5 id="report1_C32" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="1" value='' dataValid="report1_32_3_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_32_3_dataValid() {
		if( ! ( getByteLength(document.getElementById( 'report1_C32' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_C32" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第三位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_H32" colNo=8 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_H30" value='' dataValid="report1_32_8_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_32_8_dataValid() {
		if( ! ( document.getElementById( 'report1_A32' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H32' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J32' ) )>0||document.getElementById( 'report1_L32' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_H32' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J32,report1_H32,report1_L32,report1_A32" );}catch(e){}
			alert( '301企业主要股东（第3位） 经济性质未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_J32" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='' format="%230.00%25" digits="4" dataValid="report1_32_10_dataValid()" onclick="_displayEditor()" class="report1_8"></td>
<script language=javascript>
	function report1_32_10_dataValid() {
		if( ! ( document.getElementById( 'report1_A32' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H32' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J32' ) )>0||document.getElementById( 'report1_L32' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_J32' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J32,report1_H32,report1_L32,report1_A32" );}catch(e){}
			alert( '301企业主要股东（第3位）投资比例未填写' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_J32' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_J32' ) )>0&&_parseValue( document.getElementById( 'report1_J32' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J32" );}catch(e){}
			alert( '301企业主要股东（第3位）0<比例<=1' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_L32" colNo=12 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_L30" value='' dataValid="report1_32_12_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_32_12_dataValid() {
		if( ! ( document.getElementById( 'report1_A32' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H32' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J32' ) )>0||document.getElementById( 'report1_L32' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_L32' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J32,report1_H32,report1_L32,report1_A32" );}catch(e){}
			alert( '301企业主要股东（第3位） 国籍（注册地址）未填写' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_N32" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O32" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="33" height=30 style="height:30px;">
		<td id="report1_A33" colNo=1 modifiable=true writable=true editStyle="0" inputDataType="1" value='' dataValid="report1_33_1_dataValid()" onclick="_displayEditor()" class="report1_3"></td>
<script language=javascript>
	function report1_33_1_dataValid() {
		if( ! ( getByteLength(document.getElementById( 'report1_A33' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A33" );}catch(e){}
			alert( '“股东名称”（第四位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A33' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H33' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J33' ) )>0||document.getElementById( 'report1_L33' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_A33' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J33,report1_L33,report1_H33,report1_A33" );}catch(e){}
			alert( '301企业主要股东（第4位） 股东名称未填写' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_B33" colNo=2 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_B30" value='' onclick="_displayEditor()" class="report1_5"></td>
		<td colSpan=5 id="report1_C33" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="1" value='' dataValid="report1_33_3_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_33_3_dataValid() {
		if( ! ( getByteLength(document.getElementById( 'report1_C33' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_C33" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第四位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_H33" colNo=8 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_H30" value='' dataValid="report1_33_8_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_33_8_dataValid() {
		if( ! ( document.getElementById( 'report1_A33' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H33' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J33' ) )>0||document.getElementById( 'report1_L33' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_H33' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J33,report1_L33,report1_H33,report1_A33" );}catch(e){}
			alert( '301企业主要股东（第4位） 经济性质未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_J33" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='' format="%230.00%25" digits="4" dataValid="report1_33_10_dataValid()" onclick="_displayEditor()" class="report1_8"></td>
<script language=javascript>
	function report1_33_10_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_J33' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_J33' ) )>0&&_parseValue( document.getElementById( 'report1_J33' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J33" );}catch(e){}
			alert( '301企业主要股东（第4位）0<比例<=1' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A33' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H33' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J33' ) )>0||document.getElementById( 'report1_L33' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_J33' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J33,report1_L33,report1_H33,report1_A33" );}catch(e){}
			alert( '301企业主要股东（第4位）投资比例未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_L33" colNo=12 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_L30" value='' dataValid="report1_33_12_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_33_12_dataValid() {
		if( ! ( document.getElementById( 'report1_A33' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H33' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J33' ) )>0||document.getElementById( 'report1_L33' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_L33' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J33,report1_L33,report1_H33,report1_A33" );}catch(e){}
			alert( '301企业主要股东（第4位） 国籍（注册地址）未填写' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_N33" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O33" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="34" height=30 style="height:30px;">
		<td id="report1_A34" colNo=1 modifiable=true writable=true editStyle="0" inputDataType="1" value='' dataValid="report1_34_1_dataValid()" onclick="_displayEditor()" class="report1_3"></td>
<script language=javascript>
	function report1_34_1_dataValid() {
		if( ! ( getByteLength(document.getElementById( 'report1_A34' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A34" );}catch(e){}
			alert( '“股东名称”（第五位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A34' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H34' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J34' ) )>0||document.getElementById( 'report1_L34' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_A34' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J34,report1_L34,report1_H34,report1_A34" );}catch(e){}
			alert( '301企业主要股东（第5位） 股东名称未填写' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_B34" colNo=2 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_B30" value='' onclick="_displayEditor()" class="report1_5"></td>
		<td colSpan=5 id="report1_C34" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="1" value='' dataValid="report1_34_3_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_34_3_dataValid() {
		if( ! ( getByteLength(document.getElementById( 'report1_C34' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_C34" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第五位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_H34" colNo=8 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_H30" value='' dataValid="report1_34_8_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_34_8_dataValid() {
		if( ! ( document.getElementById( 'report1_A34' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H34' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J34' ) )>0||document.getElementById( 'report1_L34' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_H34' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J34,report1_L34,report1_H34,report1_A34" );}catch(e){}
			alert( '301企业主要股东（第5位） 经济性质未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_J34" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='' format="%230.00%25" digits="4" dataValid="report1_34_10_dataValid()" onclick="_displayEditor()" class="report1_8"></td>
<script language=javascript>
	function report1_34_10_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_J34' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_J34' ) )>0&&_parseValue( document.getElementById( 'report1_J34' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J34" );}catch(e){}
			alert( '301企业主要股东（第5位）0<比例<=1' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A34' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H34' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J34' ) )>0||document.getElementById( 'report1_L34' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_J34' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J34,report1_L34,report1_H34,report1_A34" );}catch(e){}
			alert( '301企业主要股东（第5位）投资比例未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_L34" colNo=12 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_L30" value='' dataValid="report1_34_12_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_34_12_dataValid() {
		if( ! ( document.getElementById( 'report1_A34' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H34' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J34' ) )>0||document.getElementById( 'report1_L34' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_L34' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J34,report1_L34,report1_H34,report1_A34" );}catch(e){}
			alert( '301企业主要股东（第5位） 国籍（注册地址）未填写' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_N34" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O34" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="35" height=25 style="height:25px;">
		<td colSpan=13 id="report1_A35" colNo=1 value='302对外投资（前5位）' onclick="_hideEditor()" class="report1_5">302对外投资（前5位）</td>
		<td id="report1_N35" colNo=14 bkj="true" value='gd-end' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O35" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="36" height=25 style="height:25px;">
		<td id="report1_A36" colNo=1 value='被投资者名称' onclick="_hideEditor()" class="report1_4">被投资者名称</td>
		<td id="report1_B36" colNo=2 value='纳税人识别号' onclick="_hideEditor()" class="report1_6">纳税人识别号</td>
		<td colSpan=5 id="report1_C36" colNo=3 value='经济性质' onclick="_hideEditor()" class="report1_6">经济性质</td>
		<td colSpan=2 id="report1_H36" colNo=8 value='投资比例' onclick="_hideEditor()" class="report1_4">投资比例</td>
		<td colSpan=2 id="report1_J36" colNo=10 value='投资金额' onclick="_hideEditor()" class="report1_6">投资金额</td>
		<td colSpan=2 id="report1_L36" colNo=12 value='注册地址' onclick="_hideEditor()" class="report1_4">注册地址</td>
		<td id="report1_N36" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O36" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="37" height=30 style="height:30px;">
		<td id="report1_A37" colNo=1 modifiable=true writable=true editStyle="0" inputDataType="1" value='' dataValid="report1_37_1_dataValid()" onclick="_displayEditor()" class="report1_3"></td>
<script language=javascript>
	function report1_37_1_dataValid() {
		if( ! ( document.getElementById( 'report1_B37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L37' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_A37' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J37,report1_B37,report1_A37,report1_C37,report1_L37,report1_H37" );}catch(e){}
			alert( '302对外投资（第1位）被投资者名称未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_A37' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A37" );}catch(e){}
			alert( '“被投资者名称”（第一位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_B37" colNo=2 modifiable=true writable=true editStyle="1" inputDataType="1" value='' dataValid="report1_37_2_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_37_2_dataValid() {
		if( ! ( document.getElementById( 'report1_A37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L37' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_B37' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J37,report1_B37,report1_A37,report1_C37,report1_L37,report1_H37" );}catch(e){}
			alert( '302对外投资（第1位）纳税人识别号未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_B37' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_B37" );}catch(e){}
			alert( '“302对外投资_纳税人识别号”（第一位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=5 id="report1_C37" colNo=3 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_H30" value='' dataValid="report1_37_3_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_37_3_dataValid() {
		if( ! ( document.getElementById( 'report1_A37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L37' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_C37' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J37,report1_B37,report1_A37,report1_C37,report1_L37,report1_H37" );}catch(e){}
			alert( '302对外投资（第1位）经济性质未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_H37" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='' format="%230.00%25" digits="4" dataValid="report1_37_8_dataValid()" onclick="_displayEditor()" class="report1_18"></td>
<script language=javascript>
	function report1_37_8_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_H37' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_H37' ) )>0&&_parseValue( document.getElementById( 'report1_H37' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H37" );}catch(e){}
			alert( '302对外投资（第1位）0<比例<=1' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L37' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_H37' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J37,report1_B37,report1_A37,report1_C37,report1_H37,report1_L37" );}catch(e){}
			alert( '302对外投资（第1位）投资比例未填写' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_H37' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_H37" );}catch(e){}
			alert( '302对外投资（第1位）投资比例不能大于100%' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_J37" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='' format="%230.00" digits="2" dataValid="report1_37_10_dataValid()" onclick="_displayEditor()" class="report1_24"></td>
<script language=javascript>
	function report1_37_10_dataValid() {
		if( ! ( document.getElementById( 'report1_A37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L37' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_J37' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J37,report1_B37,report1_A37,report1_C37,report1_L37,report1_H37" );}catch(e){}
			alert( '302对外投资（第1位）投资金额未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_L37" colNo=12 modifiable=true writable=true editStyle="0" inputDataType="1" value='' dataValid="report1_37_12_dataValid()" onclick="_displayEditor()" class="report1_3"></td>
<script language=javascript>
	function report1_37_12_dataValid() {
		if( ! ( getByteLength(document.getElementById( 'report1_L37' ).getAttribute( "value" ).toString())<=200 ) ) {
			try{ report1_markInvalidCell( "report1_L37" );}catch(e){}
			alert( '“注册地址”（第一位）超过最大长度（可输入100个汉字或200个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J37' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_L37' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J37,report1_B37,report1_A37,report1_C37,report1_L37,report1_H37" );}catch(e){}
			alert( '302对外投资（第1位）注册地址未填写' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_N37" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O37" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="38" height=30 style="height:30px;">
		<td id="report1_A38" colNo=1 modifiable=true writable=true editStyle="0" inputDataType="1" value='' dataValid="report1_38_1_dataValid()" onclick="_displayEditor()" class="report1_3"></td>
<script language=javascript>
	function report1_38_1_dataValid() {
		if( ! ( getByteLength(document.getElementById( 'report1_A38' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A38" );}catch(e){}
			alert( '“被投资者名称”（第二位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_B38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L38' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_A38' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C38,report1_J38,report1_B38,report1_A38,report1_L38,report1_H38" );}catch(e){}
			alert( '302对外投资（第2位）被投资者名称未填写' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_B38" colNo=2 modifiable=true writable=true editStyle="1" inputDataType="1" value='' dataValid="report1_38_2_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_38_2_dataValid() {
		if( ! ( document.getElementById( 'report1_A38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L38' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_B38' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C38,report1_J38,report1_B38,report1_A38,report1_L38,report1_H38" );}catch(e){}
			alert( '302对外投资（第2位）纳税人识别号未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_B38' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_B38" );}catch(e){}
			alert( '“302对外投资_纳税人识别号”（第二位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=5 id="report1_C38" colNo=3 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_H30" value='' dataValid="report1_38_3_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_38_3_dataValid() {
		if( ! ( document.getElementById( 'report1_A38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L38' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_C38' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C38,report1_J38,report1_B38,report1_A38,report1_L38,report1_H38" );}catch(e){}
			alert( '302对外投资（第2位）经济性质未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_H38" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='' format="%230.00%25" digits="4" dataValid="report1_38_8_dataValid()" onclick="_displayEditor()" class="report1_18"></td>
<script language=javascript>
	function report1_38_8_dataValid() {
		if( ! ( document.getElementById( 'report1_A38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L38' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_H38' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C38,report1_J38,report1_B38,report1_A38,report1_H38,report1_L38" );}catch(e){}
			alert( '302对外投资（第2位）投资比例未填写' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_H38' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_H38' ) )>0&&_parseValue( document.getElementById( 'report1_H38' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H38" );}catch(e){}
			alert( '302对外投资（第2位）0<比例<=1' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_H38' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_H38" );}catch(e){}
			alert( '302对外投资（第2位）投资比例不能大于100%' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_J38" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='' format="%230.00" digits="2" dataValid="report1_38_10_dataValid()" onclick="_displayEditor()" class="report1_24"></td>
<script language=javascript>
	function report1_38_10_dataValid() {
		if( ! ( document.getElementById( 'report1_A38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L38' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_J38' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C38,report1_J38,report1_B38,report1_A38,report1_L38,report1_H38" );}catch(e){}
			alert( '302对外投资（第2位）投资金额未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_L38" colNo=12 modifiable=true writable=true editStyle="0" inputDataType="1" value='' dataValid="report1_38_12_dataValid()" onclick="_displayEditor()" class="report1_3"></td>
<script language=javascript>
	function report1_38_12_dataValid() {
		if( ! ( getByteLength(document.getElementById( 'report1_L38' ).getAttribute( "value" ).toString())<=200 ) ) {
			try{ report1_markInvalidCell( "report1_L38" );}catch(e){}
			alert( '“注册地址”（第f二位）超过最大长度（可输入100个汉字或200个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J38' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_L38' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C38,report1_J38,report1_B38,report1_A38,report1_L38,report1_H38" );}catch(e){}
			alert( '302对外投资（第2位）注册地址未填写' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_N38" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O38" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="39" height=30 style="height:30px;">
		<td id="report1_A39" colNo=1 modifiable=true writable=true editStyle="0" inputDataType="1" value='' dataValid="report1_39_1_dataValid()" onclick="_displayEditor()" class="report1_3"></td>
<script language=javascript>
	function report1_39_1_dataValid() {
		if( ! ( document.getElementById( 'report1_B39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L39' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_A39' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C39,report1_B39,report1_A39,report1_J39,report1_L39,report1_H39" );}catch(e){}
			alert( '302对外投资（第3位）被投资者名称未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_A39' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A39" );}catch(e){}
			alert( '“被投资者名称”（第三位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_B39" colNo=2 modifiable=true writable=true editStyle="1" inputDataType="1" value='' dataValid="report1_39_2_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_39_2_dataValid() {
		if( ! ( document.getElementById( 'report1_A39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L39' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_B39' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C39,report1_B39,report1_A39,report1_J39,report1_L39,report1_H39" );}catch(e){}
			alert( '302对外投资（第3位）纳税人识别号未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_B39' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_B39" );}catch(e){}
			alert( '“302对外投资_纳税人识别号”（第三位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=5 id="report1_C39" colNo=3 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_H30" value='' dataValid="report1_39_3_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_39_3_dataValid() {
		if( ! ( document.getElementById( 'report1_A39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L39' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_C39' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C39,report1_B39,report1_A39,report1_J39,report1_L39,report1_H39" );}catch(e){}
			alert( '302对外投资（第3位）经济性质未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_H39" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='' format="%230.00%25" digits="4" dataValid="report1_39_8_dataValid()" onclick="_displayEditor()" class="report1_18"></td>
<script language=javascript>
	function report1_39_8_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_H39' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_H39' ) )>0&&_parseValue( document.getElementById( 'report1_H39' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H39" );}catch(e){}
			alert( '302对外投资（第3位）0<比例<=1' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_H39' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_H39" );}catch(e){}
			alert( '302对外投资（第3位）投资比例不能大于100%' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L39' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_H39' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C39,report1_B39,report1_A39,report1_J39,report1_H39,report1_L39" );}catch(e){}
			alert( '302对外投资（第3位）投资比例未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_J39" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='' format="%230.00" digits="2" dataValid="report1_39_10_dataValid()" onclick="_displayEditor()" class="report1_24"></td>
<script language=javascript>
	function report1_39_10_dataValid() {
		if( ! ( document.getElementById( 'report1_A39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L39' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_J39' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C39,report1_B39,report1_A39,report1_J39,report1_L39,report1_H39" );}catch(e){}
			alert( '302对外投资（第3位）投资金额未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_L39" colNo=12 modifiable=true writable=true editStyle="0" inputDataType="1" value='' dataValid="report1_39_12_dataValid()" onclick="_displayEditor()" class="report1_3"></td>
<script language=javascript>
	function report1_39_12_dataValid() {
		if( ! ( getByteLength(document.getElementById( 'report1_L39' ).getAttribute( "value" ).toString())<=200 ) ) {
			try{ report1_markInvalidCell( "report1_L39" );}catch(e){}
			alert( '“注册地址”（第三位）超过最大长度（可输入100个汉字或200个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J39' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_L39' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C39,report1_B39,report1_A39,report1_J39,report1_L39,report1_H39" );}catch(e){}
			alert( '302对外投资（第3位）注册地址未填写' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_N39" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O39" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="40" height=30 style="height:30px;">
		<td id="report1_A40" colNo=1 modifiable=true writable=true editStyle="0" inputDataType="1" value='' dataValid="report1_40_1_dataValid()" onclick="_displayEditor()" class="report1_3"></td>
<script language=javascript>
	function report1_40_1_dataValid() {
		if( ! ( getByteLength(document.getElementById( 'report1_A40' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A40" );}catch(e){}
			alert( '“被投资者名称”（第四位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_B40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L40' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_A40' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_L40,report1_A40,report1_H40,report1_C40,report1_J40,report1_B40" );}catch(e){}
			alert( '302对外投资（第4位）被投资者名称未填写' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_B40" colNo=2 modifiable=true writable=true editStyle="1" inputDataType="1" value='' dataValid="report1_40_2_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_40_2_dataValid() {
		if( ! ( document.getElementById( 'report1_A40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L40' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_B40' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_L40,report1_H40,report1_A40,report1_C40,report1_J40,report1_B40" );}catch(e){}
			alert( '302对外投资（第4位）纳税人识别号未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_B40' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_B40" );}catch(e){}
			alert( '“302对外投资_纳税人识别号”（第四位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=5 id="report1_C40" colNo=3 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_H30" value='' dataValid="report1_40_3_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_40_3_dataValid() {
		if( ! ( document.getElementById( 'report1_A40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L40' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_C40' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_L40,report1_H40,report1_A40,report1_C40,report1_J40,report1_B40" );}catch(e){}
			alert( '302对外投资（第4位）经济性质未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_H40" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='' format="%230.00%25" digits="4" dataValid="report1_40_8_dataValid()" onclick="_displayEditor()" class="report1_18"></td>
<script language=javascript>
	function report1_40_8_dataValid() {
		if( ! ( checkNull(document.getElementById( 'report1_H40' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_H40' ) )>0&&_parseValue( document.getElementById( 'report1_H40' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H40" );}catch(e){}
			alert( '302对外投资（第4位）0<比例<=1' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_H40' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_H40" );}catch(e){}
			alert( '302对外投资（第4位）投资比例不能大于100%' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L40' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_H40' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_L40,report1_H40,report1_A40,report1_C40,report1_J40,report1_B40" );}catch(e){}
			alert( '302对外投资（第4位）投资比例未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_J40" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='' format="%230.00" digits="2" dataValid="report1_40_10_dataValid()" onclick="_displayEditor()" class="report1_24"></td>
<script language=javascript>
	function report1_40_10_dataValid() {
		if( ! ( document.getElementById( 'report1_A40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L40' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_J40' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_L40,report1_H40,report1_A40,report1_C40,report1_J40,report1_B40" );}catch(e){}
			alert( '302对外投资（第4位）投资金额未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_L40" colNo=12 modifiable=true writable=true editStyle="0" inputDataType="1" value='' dataValid="report1_40_12_dataValid()" onclick="_displayEditor()" class="report1_3"></td>
<script language=javascript>
	function report1_40_12_dataValid() {
		if( ! ( getByteLength(document.getElementById( 'report1_L40' ).getAttribute( "value" ).toString())<=200 ) ) {
			try{ report1_markInvalidCell( "report1_L40" );}catch(e){}
			alert( '“注册地址”（第四位）超过最大长度（可输入100个汉字或200个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J40' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_L40' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_L40,report1_H40,report1_A40,report1_C40,report1_J40,report1_B40" );}catch(e){}
			alert( '302对外投资（第4位）注册地址未填写' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_N40" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O40" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="41" height=30 style="height:30px;">
		<td id="report1_A41" colNo=1 modifiable=true writable=true editStyle="0" inputDataType="1" value='' dataValid="report1_41_1_dataValid()" onclick="_displayEditor()" class="report1_3"></td>
<script language=javascript>
	function report1_41_1_dataValid() {
		if( ! ( getByteLength(document.getElementById( 'report1_A41' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A41" );}catch(e){}
			alert( '“被投资者名称”（第五位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_B41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L41' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_A41' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H41,report1_L41,report1_A41,report1_C41,report1_J41,report1_B41" );}catch(e){}
			alert( '302对外投资（第5位）被投资者名称未填写' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_B41" colNo=2 modifiable=true writable=true editStyle="1" inputDataType="1" value='' dataValid="report1_41_2_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_41_2_dataValid() {
		if( ! ( document.getElementById( 'report1_A41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L41' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_B41' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H41,report1_L41,report1_A41,report1_C41,report1_J41,report1_B41" );}catch(e){}
			alert( '302对外投资（第5位）纳税人识别号未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_B41' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_B41" );}catch(e){}
			alert( '“302对外投资_纳税人识别号”（第五位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=5 id="report1_C41" colNo=3 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_H30" value='' dataValid="report1_41_3_dataValid()" onclick="_displayEditor()" class="report1_5"></td>
<script language=javascript>
	function report1_41_3_dataValid() {
		if( ! ( document.getElementById( 'report1_A41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L41' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_C41' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H41,report1_L41,report1_A41,report1_C41,report1_J41,report1_B41" );}catch(e){}
			alert( '302对外投资（第5位）经济性质未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_H41" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='' format="%230.00%25" digits="4" dataValid="report1_41_8_dataValid()" onclick="_displayEditor()" class="report1_18"></td>
<script language=javascript>
	function report1_41_8_dataValid() {
		if( ! ( document.getElementById( 'report1_A41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L41' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_H41' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H41,report1_L41,report1_A41,report1_C41,report1_J41,report1_B41" );}catch(e){}
			alert( '302对外投资（第5位）投资比例未填写' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_H41' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_H41' ) )>0&&_parseValue( document.getElementById( 'report1_H41' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H41" );}catch(e){}
			alert( '302对外投资（第5位）0<比例<=1' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_H41' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_H41" );}catch(e){}
			alert( '302对外投资（第5位）投资比例不能大于100%' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_J41" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='' format="%230.00" digits="2" dataValid="report1_41_10_dataValid()" onclick="_displayEditor()" class="report1_24"></td>
<script language=javascript>
	function report1_41_10_dataValid() {
		if( ! ( document.getElementById( 'report1_A41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L41' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_J41' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H41,report1_L41,report1_A41,report1_C41,report1_J41,report1_B41" );}catch(e){}
			alert( '302对外投资（第5位）投资金额未填写' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_L41" colNo=12 modifiable=true writable=true editStyle="0" inputDataType="1" value='' dataValid="report1_41_12_dataValid()" onclick="_displayEditor()" class="report1_3"></td>
<script language=javascript>
	function report1_41_12_dataValid() {
		if( ! ( document.getElementById( 'report1_A41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J41' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_L41' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H41,report1_L41,report1_A41,report1_C41,report1_J41,report1_B41" );}catch(e){}
			alert( '302对外投资（第5位）注册地址未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_L41' ).getAttribute( "value" ).toString())<=200 ) ) {
			try{ report1_markInvalidCell( "report1_L41" );}catch(e){}
			alert( '“注册地址”（第五位）超过最大长度（可输入100个汉字或200个英文、数字）' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_N41" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
		<td id="report1_O41" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="42" height=25 style="height:25px;;display:none">
		<td id="report1_A42" colNo=1 bkj="true" value='' onclick="_hideEditor()" class="report1_11"></td>
		<td id="report1_B42" colNo=2 bkj="true" value='' onclick="_hideEditor()" class="report1_11"></td>
		<td id="report1_C42" colNo=3 bkj="true" value='' onclick="_hideEditor()" class="report1_11"></td>
		<td id="report1_D42" colNo=4 bkj="true" value='' onclick="_hideEditor()" class="report1_11"></td>
		<td id="report1_E42" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_11"></td>
		<td id="report1_F42" colNo=6 bkj="true" value='' onclick="_hideEditor()" class="report1_11"></td>
		<td id="report1_G42" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_11"></td>
		<td id="report1_H42" colNo=8 bkj="true" value='' onclick="_hideEditor()" class="report1_11"></td>
		<td id="report1_I42" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_11"></td>
		<td id="report1_J42" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_11"></td>
		<td id="report1_K42" colNo=11 bkj="true" value='' onclick="_hideEditor()" class="report1_11"></td>
		<td id="report1_L42" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_11"></td>
		<td id="report1_M42" colNo=13 bkj="true" value='' onclick="_hideEditor()" class="report1_11"></td>
		<td id="report1_N42" colNo=14 bkj="true" value='dwtz-end' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_O42" colNo=15 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		try{ group_autoCalc( 'report1_' + cellName ); }catch(e){}
	}

	function report1_checkValid() {
		if( ! ( checkNull(document.getElementById( 'report1_B6' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_B6" );}catch(e){}
			alert( '102注册资本（万元）不能为空' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_N6' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_N6" );}catch(e){}
			alert( '106境外中资控股居民企业不能为空' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_N7' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_N7" );}catch(e){}
			alert( '107从事国家限制和禁止行业' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_B8' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_B8" );}catch(e){}
			alert( '104从业人数不能为空' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_B8' ) )>0 ) ) {
			try{ report1_markInvalidCell( "report1_B8" );}catch(e){}
			alert( '104从业人数>0' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_N8' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_N8" );}catch(e){}
			alert( '108存在境外关联交易不能为空' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_B9' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_B9" );}catch(e){}
			alert( '105资产总额（万元）不能为空' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_B9' ) )>0 ) ) {
			try{ report1_markInvalidCell( "report1_B9" );}catch(e){}
			alert( '105资产总额>0' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_N9' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_N9" );}catch(e){}
			alert( '109上市公司不能为空' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_N11' ).getAttribute( "value" ).toString()+document.getElementById( 'report1_N12' ).getAttribute( "value" ).toString()+document.getElementById( 'report1_N13' ).getAttribute( "value" ).toString()
+document.getElementById( 'report1_N14' ).getAttribute( "value" ).toString()+document.getElementById( 'report1_N16' ).getAttribute( "value" ).toString()+document.getElementById( 'report1_N17' ).getAttribute( "value" ).toString()+document.getElementById( 'report1_N18' ).getAttribute( "value" ).toString()+document.getElementById( 'report1_N19' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_N11,report1_N12,report1_N14,report1_N13,report1_N16,report1_N18,report1_N17,report1_N19" );}catch(e){}
			alert( '201适用的会计准则或会计制度 不能为空' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_B20' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_B20" );}catch(e){}
			alert( '202会计档案的存放地不能为空' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_I20' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_I20" );}catch(e){}
			alert( '203会计核算软件不能为空！' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_N21' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_N21" );}catch(e){}
			alert( '204记账本位币不能为空' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_O21' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_O21" );}catch(e){}
			alert( '205会计政策和估计是否发生变化  不能为空' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_B22' ) )!=11&&_parseValue( document.getElementById( 'report1_C22' ) )!=12&&_parseValue( document.getElementById( 'report1_D22' ) )!=21&&_parseValue( document.getElementById( 'report1_G22' ) )!=22&&_parseValue( document.getElementById( 'report1_I22' ) )!=90?checkNull(document.getElementById( 'report1_B22' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_B22,report1_D22,report1_G22,report1_I22,report1_C22" );}catch(e){}
			alert( '206固定资产折旧方法不能为空' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_B23' ).getAttribute( "value" ).toString()) || checkNull(document.getElementById( 'report1_C23' ).getAttribute( "value" ).toString()) || checkNull(document.getElementById( 'report1_E23' ).getAttribute( "value" ).toString()) || checkNull(document.getElementById( 'report1_J23' ).getAttribute( "value" ).toString()) || checkNull(document.getElementById( 'report1_B24' ).getAttribute( "value" ).toString()) || checkNull(document.getElementById( 'report1_C24' ).getAttribute( "value" ).toString()) || checkNull(document.getElementById( 'report1_E24' ).getAttribute( "value" ).toString()) || checkNull(document.getElementById( 'report1_J24' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_E24,report1_B23,report1_E23,report1_J23,report1_J24,report1_B24,report1_C23,report1_C24" );}catch(e){}
			alert( '207存货成本计价方法不能为空' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_N25' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_N25" );}catch(e){}
			alert( '208坏账损失核算方法不能为空' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_N26' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_N26" );}catch(e){}
			alert( '209所得税计算方法不能为空' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A30' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H30' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J30' ) )>0||document.getElementById( 'report1_L30' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_A30' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_A30,report1_H30,report1_L30,report1_J30" );}catch(e){}
			alert( '301企业主要股东（第1位） 股东名称未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_A30' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A30" );}catch(e){}
			alert( '“股东名称”（第一位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_A30' ).getAttribute( "value" ).toString()) ) ) {
			try{ report1_markInvalidCell( "report1_A30" );}catch(e){}
			alert( '301企业主要股东（前5位）不能为空（至少要填一行）!' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_C30' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_B30' ).getAttribute( "value" ).toString()):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_C30,report1_B30" );}catch(e){}
			alert( '301企业主要股东（第一位）证件种类未填写！' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A30' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_B30' ).getAttribute( "value" ).toString()):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_A30,report1_B30" );}catch(e){}
			alert( '301企业主要股东（第一位）证件种类未填写！' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_B30' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_C30' ).getAttribute( "value" ).toString()):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_C30,report1_B30" );}catch(e){}
			alert( '301企业主要股东（第一位）证件号码未填写！' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_C30' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_C30" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第一位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_B30' ) )=='101'?document.getElementById( 'report1_C30' ).getAttribute( "value" ).toString().length==9:1==1 ) ) {
			try{ report1_markInvalidCell( "report1_C30,report1_B30" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第一位）为“组织机构代码证”时，证件号码的长度必须是9位。' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_B30' ) )=='201'?document.getElementById( 'report1_C30' ).getAttribute( "value" ).toString().length==15 || document.getElementById( 'report1_C30' ).getAttribute( "value" ).toString().length==18:1==1 ) ) {
			try{ report1_markInvalidCell( "report1_C30,report1_B30" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第一位）为“居民身份证”时，证件号码的长度必须是15位或18位。' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A30' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H30' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J30' ) )>0||document.getElementById( 'report1_L30' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_H30' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_A30,report1_H30,report1_L30,report1_J30" );}catch(e){}
			alert( '301企业主要股东（第1位） 经济性质未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A30' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H30' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J30' ) )>0||document.getElementById( 'report1_L30' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_J30' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_A30,report1_H30,report1_L30,report1_J30" );}catch(e){}
			alert( '301企业主要股东（第1位）投资比例未填写' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_J30' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_J30' ) )>0&&_parseValue( document.getElementById( 'report1_J30' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J30" );}catch(e){}
			alert( '301企业主要股东（第1位）0<比例<=1' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A30' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H30' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J30' ) )>0||document.getElementById( 'report1_L30' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_L30' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_A30,report1_H30,report1_L30,report1_J30" );}catch(e){}
			alert( '301企业主要股东（第1位） 国籍（注册地址）未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A31' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H31' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J31' ) )>0||document.getElementById( 'report1_L31' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_A31' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_A31,report1_J31,report1_L31,report1_H31" );}catch(e){}
			alert( '301企业主要股东（第2位） 股东名称未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_A31' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A31" );}catch(e){}
			alert( '“股东名称”（第二位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_C31' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_B31' ).getAttribute( "value" ).toString()):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B31,report1_C31" );}catch(e){}
			alert( '301企业主要股东（第二位）证件种类未填写！' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A31' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_B31' ).getAttribute( "value" ).toString()):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B31,report1_A31" );}catch(e){}
			alert( '301企业主要股东（第二位）证件种类未填写！' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_B31' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_C31' ).getAttribute( "value" ).toString()):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B31,report1_C31" );}catch(e){}
			alert( '301企业主要股东（第二位）证件号码未填写！' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_C31' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_C31" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第二位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_B31' ) )=='101'?document.getElementById( 'report1_C31' ).getAttribute( "value" ).toString().length==9:1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B31,report1_C31" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第二位）为“组织机构代码证”时，证件号码的长度必须是9位。' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_B31' ) )=='201'?document.getElementById( 'report1_C31' ).getAttribute( "value" ).toString().length==15 || document.getElementById( 'report1_C31' ).getAttribute( "value" ).toString().length==18:1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B31,report1_C31" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第二位）为“居民身份证”时，证件号码的长度必须是15位或18位。' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A31' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H31' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J31' ) )>0||document.getElementById( 'report1_L31' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_H31' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_A31,report1_J31,report1_L31,report1_H31" );}catch(e){}
			alert( '301企业主要股东（第2位） 经济性质未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A31' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H31' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J31' ) )>0||document.getElementById( 'report1_L31' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_J31' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_A31,report1_J31,report1_L31,report1_H31" );}catch(e){}
			alert( '301企业主要股东（第2位）投资比例未填写' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_J31' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_J31' ) )>0&&_parseValue( document.getElementById( 'report1_J31' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J31" );}catch(e){}
			alert( '301企业主要股东（第2位）0<比例<=1' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A31' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H31' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J31' ) )>0||document.getElementById( 'report1_L31' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_L31' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_A31,report1_J31,report1_L31,report1_H31" );}catch(e){}
			alert( '301企业主要股东（第2位） 国籍（注册地址）未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A32' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H32' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J32' ) )>0||document.getElementById( 'report1_L32' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_A32' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J32,report1_H32,report1_L32,report1_A32" );}catch(e){}
			alert( '301企业主要股东（第3位） 股东名称未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_A32' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A32" );}catch(e){}
			alert( '“股东名称”（第三位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_C32' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_B32' ).getAttribute( "value" ).toString()):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B32,report1_C32" );}catch(e){}
			alert( '301企业主要股东（第三位）证件种类未填写！' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A32' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_B32' ).getAttribute( "value" ).toString()):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B32,report1_A32" );}catch(e){}
			alert( '301企业主要股东（第三位）证件种类未填写！' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_B32' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_C32' ).getAttribute( "value" ).toString()):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B32,report1_C32" );}catch(e){}
			alert( '301企业主要股东（第三位）证件号码未填写！' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_C32' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_C32" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第三位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_B32' ) )=='101'?document.getElementById( 'report1_C32' ).getAttribute( "value" ).toString().length==9:1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B32,report1_C32" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第三位）为“组织机构代码证”时，证件号码的长度必须是9位。' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_B32' ) )=='201'?document.getElementById( 'report1_C32' ).getAttribute( "value" ).toString().length==15 || document.getElementById( 'report1_C32' ).getAttribute( "value" ).toString().length==18:1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B32,report1_C32" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第三位）为“居民身份证”时，证件号码的长度必须是15位或18位。' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A32' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H32' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J32' ) )>0||document.getElementById( 'report1_L32' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_H32' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J32,report1_H32,report1_L32,report1_A32" );}catch(e){}
			alert( '301企业主要股东（第3位） 经济性质未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A32' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H32' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J32' ) )>0||document.getElementById( 'report1_L32' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_J32' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J32,report1_H32,report1_L32,report1_A32" );}catch(e){}
			alert( '301企业主要股东（第3位）投资比例未填写' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_J32' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_J32' ) )>0&&_parseValue( document.getElementById( 'report1_J32' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J32" );}catch(e){}
			alert( '301企业主要股东（第3位）0<比例<=1' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A32' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H32' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J32' ) )>0||document.getElementById( 'report1_L32' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_L32' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J32,report1_H32,report1_L32,report1_A32" );}catch(e){}
			alert( '301企业主要股东（第3位） 国籍（注册地址）未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A33' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H33' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J33' ) )>0||document.getElementById( 'report1_L33' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_A33' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J33,report1_L33,report1_H33,report1_A33" );}catch(e){}
			alert( '301企业主要股东（第4位） 股东名称未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_A33' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A33" );}catch(e){}
			alert( '“股东名称”（第四位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_C33' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_B33' ).getAttribute( "value" ).toString()):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B33,report1_C33" );}catch(e){}
			alert( '301企业主要股东（第四位）证件种类未填写！' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A33' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_B33' ).getAttribute( "value" ).toString()):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B33,report1_A33" );}catch(e){}
			alert( '301企业主要股东（第四位）证件种类未填写！' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_B33' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_C33' ).getAttribute( "value" ).toString()):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B33,report1_C33" );}catch(e){}
			alert( '301企业主要股东（第四位）证件号码未填写！' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_C33' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_C33" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第四位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_B33' ) )=='101'?document.getElementById( 'report1_C33' ).getAttribute( "value" ).toString().length==9:1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B33,report1_C33" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第四位）为“组织机构代码证”时，证件号码的长度必须是9位。' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_B33' ) )=='201'?document.getElementById( 'report1_C33' ).getAttribute( "value" ).toString().length==15 || document.getElementById( 'report1_C33' ).getAttribute( "value" ).toString().length==18:1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B33,report1_C33" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第四位）为“居民身份证”时，证件号码的长度必须是15位或18位。' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A33' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H33' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J33' ) )>0||document.getElementById( 'report1_L33' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_H33' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J33,report1_L33,report1_H33,report1_A33" );}catch(e){}
			alert( '301企业主要股东（第4位） 经济性质未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A33' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H33' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J33' ) )>0||document.getElementById( 'report1_L33' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_J33' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J33,report1_L33,report1_H33,report1_A33" );}catch(e){}
			alert( '301企业主要股东（第4位）投资比例未填写' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_J33' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_J33' ) )>0&&_parseValue( document.getElementById( 'report1_J33' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J33" );}catch(e){}
			alert( '301企业主要股东（第4位）0<比例<=1' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A33' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H33' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J33' ) )>0||document.getElementById( 'report1_L33' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_L33' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J33,report1_L33,report1_H33,report1_A33" );}catch(e){}
			alert( '301企业主要股东（第4位） 国籍（注册地址）未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A34' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H34' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J34' ) )>0||document.getElementById( 'report1_L34' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_A34' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J34,report1_L34,report1_H34,report1_A34" );}catch(e){}
			alert( '301企业主要股东（第5位） 股东名称未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_A34' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A34" );}catch(e){}
			alert( '“股东名称”（第五位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_C34' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_B34' ).getAttribute( "value" ).toString()):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B34,report1_C34" );}catch(e){}
			alert( '301企业主要股东（第五位）证件种类未填写！' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A34' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_B34' ).getAttribute( "value" ).toString()):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B34,report1_A34" );}catch(e){}
			alert( '301企业主要股东（第五位）证件种类未填写！' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_B34' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_C34' ).getAttribute( "value" ).toString()):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B34,report1_C34" );}catch(e){}
			alert( '301企业主要股东（第五位）证件号码未填写！' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_C34' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_C34" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第五位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_B34' ) )=='101'?document.getElementById( 'report1_C34' ).getAttribute( "value" ).toString().length==9:1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B34,report1_C34" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第五位）为“组织机构代码证”时，证件号码的长度必须是9位。' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_B34' ) )=='201'?document.getElementById( 'report1_C34' ).getAttribute( "value" ).toString().length==15 || document.getElementById( 'report1_C34' ).getAttribute( "value" ).toString().length==18:1==1 ) ) {
			try{ report1_markInvalidCell( "report1_B34,report1_C34" );}catch(e){}
			alert( '“301企业主要股东_证件号码”（第五位）为“居民身份证”时，证件号码的长度必须是15位或18位。' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A34' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H34' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J34' ) )>0||document.getElementById( 'report1_L34' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_H34' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J34,report1_L34,report1_H34,report1_A34" );}catch(e){}
			alert( '301企业主要股东（第5位） 经济性质未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A34' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H34' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J34' ) )>0||document.getElementById( 'report1_L34' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_J34' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J34,report1_L34,report1_H34,report1_A34" );}catch(e){}
			alert( '301企业主要股东（第5位）投资比例未填写' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_J34' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_J34' ) )>0&&_parseValue( document.getElementById( 'report1_J34' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J34" );}catch(e){}
			alert( '301企业主要股东（第5位）0<比例<=1' );
			return false;
		}
		if( ! ( (_parseValue( document.getElementById( 'report1_J30' ) )+_parseValue( document.getElementById( 'report1_J31' ) )+_parseValue( document.getElementById( 'report1_J32' ) )+_parseValue( document.getElementById( 'report1_J33' ) )+_parseValue( document.getElementById( 'report1_J34' ) ))<1.01 ) ) {
			try{ report1_markInvalidCell( "report1_J33,report1_J34,report1_J31,report1_J32,report1_J30" );}catch(e){}
			alert( '301企业主要股东“投资比例”合计不能大于100%' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A34' ).getAttribute( "value" ).toString().length>0||document.getElementById( 'report1_H34' ).getAttribute( "value" ).toString().length>0||_parseValue( document.getElementById( 'report1_J34' ) )>0||document.getElementById( 'report1_L34' ).getAttribute( "value" ).toString().length>0?checkNull(document.getElementById( 'report1_L34' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J34,report1_L34,report1_H34,report1_A34" );}catch(e){}
			alert( '301企业主要股东（第5位） 国籍（注册地址）未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_B37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L37' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_A37' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J37,report1_B37,report1_A37,report1_C37,report1_L37,report1_H37" );}catch(e){}
			alert( '302对外投资（第1位）被投资者名称未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_A37' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A37" );}catch(e){}
			alert( '“被投资者名称”（第一位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L37' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_B37' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J37,report1_B37,report1_A37,report1_C37,report1_L37,report1_H37" );}catch(e){}
			alert( '302对外投资（第1位）纳税人识别号未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_B37' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_B37" );}catch(e){}
			alert( '“302对外投资_纳税人识别号”（第一位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L37' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_C37' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J37,report1_B37,report1_A37,report1_C37,report1_L37,report1_H37" );}catch(e){}
			alert( '302对外投资（第1位）经济性质未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L37' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_H37' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J37,report1_B37,report1_A37,report1_C37,report1_H37,report1_L37" );}catch(e){}
			alert( '302对外投资（第1位）投资比例未填写' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_H37' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_H37' ) )>0&&_parseValue( document.getElementById( 'report1_H37' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H37" );}catch(e){}
			alert( '302对外投资（第1位）0<比例<=1' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_H37' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_H37" );}catch(e){}
			alert( '302对外投资（第1位）投资比例不能大于100%' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L37' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_J37' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J37,report1_B37,report1_A37,report1_C37,report1_L37,report1_H37" );}catch(e){}
			alert( '302对外投资（第1位）投资金额未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H37' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J37' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_L37' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_J37,report1_B37,report1_A37,report1_C37,report1_L37,report1_H37" );}catch(e){}
			alert( '302对外投资（第1位）注册地址未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_L37' ).getAttribute( "value" ).toString())<=200 ) ) {
			try{ report1_markInvalidCell( "report1_L37" );}catch(e){}
			alert( '“注册地址”（第一位）超过最大长度（可输入100个汉字或200个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_B38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L38' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_A38' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C38,report1_J38,report1_B38,report1_A38,report1_L38,report1_H38" );}catch(e){}
			alert( '302对外投资（第2位）被投资者名称未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_A38' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A38" );}catch(e){}
			alert( '“被投资者名称”（第二位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L38' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_B38' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C38,report1_J38,report1_B38,report1_A38,report1_L38,report1_H38" );}catch(e){}
			alert( '302对外投资（第2位）纳税人识别号未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_B38' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_B38" );}catch(e){}
			alert( '“302对外投资_纳税人识别号”（第二位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L38' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_C38' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C38,report1_J38,report1_B38,report1_A38,report1_L38,report1_H38" );}catch(e){}
			alert( '302对外投资（第2位）经济性质未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L38' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_H38' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C38,report1_J38,report1_B38,report1_A38,report1_H38,report1_L38" );}catch(e){}
			alert( '302对外投资（第2位）投资比例未填写' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_H38' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_H38' ) )>0&&_parseValue( document.getElementById( 'report1_H38' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H38" );}catch(e){}
			alert( '302对外投资（第2位）0<比例<=1' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_H38' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_H38" );}catch(e){}
			alert( '302对外投资（第2位）投资比例不能大于100%' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L38' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_J38' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C38,report1_J38,report1_B38,report1_A38,report1_L38,report1_H38" );}catch(e){}
			alert( '302对外投资（第2位）投资金额未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H38' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J38' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_L38' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C38,report1_J38,report1_B38,report1_A38,report1_L38,report1_H38" );}catch(e){}
			alert( '302对外投资（第2位）注册地址未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_L38' ).getAttribute( "value" ).toString())<=200 ) ) {
			try{ report1_markInvalidCell( "report1_L38" );}catch(e){}
			alert( '“注册地址”（第f二位）超过最大长度（可输入100个汉字或200个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_B39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L39' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_A39' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C39,report1_B39,report1_A39,report1_J39,report1_L39,report1_H39" );}catch(e){}
			alert( '302对外投资（第3位）被投资者名称未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_A39' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A39" );}catch(e){}
			alert( '“被投资者名称”（第三位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L39' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_B39' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C39,report1_B39,report1_A39,report1_J39,report1_L39,report1_H39" );}catch(e){}
			alert( '302对外投资（第3位）纳税人识别号未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_B39' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_B39" );}catch(e){}
			alert( '“302对外投资_纳税人识别号”（第三位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L39' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_C39' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C39,report1_B39,report1_A39,report1_J39,report1_L39,report1_H39" );}catch(e){}
			alert( '302对外投资（第3位）经济性质未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L39' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_H39' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C39,report1_B39,report1_A39,report1_J39,report1_H39,report1_L39" );}catch(e){}
			alert( '302对外投资（第3位）投资比例未填写' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_H39' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_H39' ) )>0&&_parseValue( document.getElementById( 'report1_H39' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H39" );}catch(e){}
			alert( '302对外投资（第3位）0<比例<=1' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_H39' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_H39" );}catch(e){}
			alert( '302对外投资（第3位）投资比例不能大于100%' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L39' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_J39' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C39,report1_B39,report1_A39,report1_J39,report1_L39,report1_H39" );}catch(e){}
			alert( '302对外投资（第3位）投资金额未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H39' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J39' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_L39' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_C39,report1_B39,report1_A39,report1_J39,report1_L39,report1_H39" );}catch(e){}
			alert( '302对外投资（第3位）注册地址未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_L39' ).getAttribute( "value" ).toString())<=200 ) ) {
			try{ report1_markInvalidCell( "report1_L39" );}catch(e){}
			alert( '“注册地址”（第三位）超过最大长度（可输入100个汉字或200个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_B40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L40' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_A40' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_L40,report1_A40,report1_H40,report1_C40,report1_J40,report1_B40" );}catch(e){}
			alert( '302对外投资（第4位）被投资者名称未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_A40' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A40" );}catch(e){}
			alert( '“被投资者名称”（第四位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L40' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_B40' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_L40,report1_H40,report1_A40,report1_C40,report1_J40,report1_B40" );}catch(e){}
			alert( '302对外投资（第4位）纳税人识别号未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_B40' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_B40" );}catch(e){}
			alert( '“302对外投资_纳税人识别号”（第四位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L40' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_C40' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_L40,report1_H40,report1_A40,report1_C40,report1_J40,report1_B40" );}catch(e){}
			alert( '302对外投资（第4位）经济性质未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L40' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_H40' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_L40,report1_H40,report1_A40,report1_C40,report1_J40,report1_B40" );}catch(e){}
			alert( '302对外投资（第4位）投资比例未填写' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_H40' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_H40' ) )>0&&_parseValue( document.getElementById( 'report1_H40' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H40" );}catch(e){}
			alert( '302对外投资（第4位）0<比例<=1' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_H40' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_H40" );}catch(e){}
			alert( '302对外投资（第4位）投资比例不能大于100%' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L40' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_J40' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_L40,report1_H40,report1_A40,report1_C40,report1_J40,report1_B40" );}catch(e){}
			alert( '302对外投资（第4位）投资金额未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H40' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J40' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_L40' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_L40,report1_H40,report1_A40,report1_C40,report1_J40,report1_B40" );}catch(e){}
			alert( '302对外投资（第4位）注册地址未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_L40' ).getAttribute( "value" ).toString())<=200 ) ) {
			try{ report1_markInvalidCell( "report1_L40" );}catch(e){}
			alert( '“注册地址”（第四位）超过最大长度（可输入100个汉字或200个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_B41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L41' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_A41' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H41,report1_L41,report1_A41,report1_C41,report1_J41,report1_B41" );}catch(e){}
			alert( '302对外投资（第5位）被投资者名称未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_A41' ).getAttribute( "value" ).toString())<=80 ) ) {
			try{ report1_markInvalidCell( "report1_A41" );}catch(e){}
			alert( '“被投资者名称”（第五位）超过最大长度（可输入40个汉字或80个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L41' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_B41' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H41,report1_L41,report1_A41,report1_C41,report1_J41,report1_B41" );}catch(e){}
			alert( '302对外投资（第5位）纳税人识别号未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_B41' ).getAttribute( "value" ).toString())<=20 ) ) {
			try{ report1_markInvalidCell( "report1_B41" );}catch(e){}
			alert( '“302对外投资_纳税人识别号”（第五位）超过最大长度（可输入10个汉字或20个英文、数字）' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L41' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_C41' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H41,report1_L41,report1_A41,report1_C41,report1_J41,report1_B41" );}catch(e){}
			alert( '302对外投资（第5位）经济性质未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L41' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_H41' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H41,report1_L41,report1_A41,report1_C41,report1_J41,report1_B41" );}catch(e){}
			alert( '302对外投资（第5位）投资比例未填写' );
			return false;
		}
		if( ! ( checkNull(document.getElementById( 'report1_H41' ).getAttribute( "value" ).toString())?_parseValue( document.getElementById( 'report1_H41' ) )>0&&_parseValue( document.getElementById( 'report1_H41' ) )<=1:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H41" );}catch(e){}
			alert( '302对外投资（第5位）0<比例<=1' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_H41' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_H41" );}catch(e){}
			alert( '302对外投资（第5位）投资比例不能大于100%' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_L41' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_J41' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H41,report1_L41,report1_A41,report1_C41,report1_J41,report1_B41" );}catch(e){}
			alert( '302对外投资（第5位）投资金额未填写' );
			return false;
		}
		if( ! ( document.getElementById( 'report1_A41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_B41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_C41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_H41' ).getAttribute( "value" ).length>0||document.getElementById( 'report1_J41' ).getAttribute( "value" ).length>0?checkNull(document.getElementById( 'report1_L41' ).getAttribute( "value" ).toString()):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_H41,report1_L41,report1_A41,report1_C41,report1_J41,report1_B41" );}catch(e){}
			alert( '302对外投资（第5位）注册地址未填写' );
			return false;
		}
		if( ! ( getByteLength(document.getElementById( 'report1_L41' ).getAttribute( "value" ).toString())<=200 ) ) {
			try{ report1_markInvalidCell( "report1_L41" );}catch(e){}
			alert( '“注册地址”（第五位）超过最大长度（可输入100个汉字或200个英文、数字）' );
			return false;
		}
		return true;
	}

</script>
</div>
</td></tr></table>
<div style="display:none"><form id="report1_submitForm" method=post action="/WSSBSL/reportServlet.aspx?action=11" target="submitFrame">
	<input type=hidden name=fileName value="/ndsdsA/sb_ndsds_2014_jcxx.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_74728">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2FndsdsA%2Fsb_ndsds_2014_jcxx.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000015884336&sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466&reportParamsId=1511506632256166172191">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_NDSDS_2014_JCXX;xmlName=ndsdsA/sb_ndsds_2014_jcxx;pzxh=10014517000015884336;nsrsbh=91450107MA5KE0EQ2B;dataFromBz=0;raq=/ndsdsA/sb_ndsds_2014_jcxx.raq;sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/ndsdsA/sb_ndsds_2014_jcxx.raq&srcType=file&cachedId=10_1_1_176_8080_74728&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_NDSDS_2014_JCXX%3BxmlName%3DndsdsA%2Fsb_ndsds_2014_jcxx%3Bpzxh%3D10014517000015884336%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdataFromBz%3D0%3Braq%3D%2FndsdsA%2Fsb_ndsds_2014_jcxx.raq%3Bsbuuid%3D4F35CE4F88AE666EB53FF3AE9DC76466%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

