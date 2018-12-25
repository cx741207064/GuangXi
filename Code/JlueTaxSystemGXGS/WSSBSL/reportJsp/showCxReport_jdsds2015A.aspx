<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_jdsds2015A.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_jdsds2015A" %>

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
	var report1_cachedId = "10_1_1_176_8080_74086";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2Fjdsds2012%2Fjdsds2015A.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=1511495255785203171580&cachedId=10_1_1_176_8080_74086&t_i_m_e=1511495255800" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2Fjdsds2012%2Fjdsds2015A.raq&columns=0&srcType=file&reportParamsId=1511495255785203171580&cachedId=10_1_1_176_8080_74086&t_i_m_e=1511495255800" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2Fjdsds2012%2Fjdsds2015A.raq&columns=0&srcType=file&reportParamsId=1511495255785203171580&cachedId=10_1_1_176_8080_74086&t_i_m_e=1511495255800";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2Fjdsds2012%2Fjdsds2015A.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=1511495255785203171580&cachedId=10_1_1_176_8080_74086&t_i_m_e=1511495255800";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2Fjdsds2012%2Fjdsds2015A.raq&srcType=file&reportParamsId=1511495255785203171580&cachedId=10_1_1_176_8080_74086&t_i_m_e=1511495255800" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2Fjdsds2012%2Fjdsds2015A.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=1511495255785203171580&cachedId=10_1_1_176_8080_74086&t_i_m_e=1511495255800";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2Fjdsds2012%2Fjdsds2015A.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=1511495255785203171580&cachedId=10_1_1_176_8080_74086&t_i_m_e=1511495255800";
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
	function report1488102over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1488102out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:center;vertical-align:middle;font-family:宋体;font-size:14px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_12 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_13 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_14 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_15 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_16 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_17 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_18 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_19 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_20 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_21 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_22 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_23 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_24 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_25 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_26 { text-align:left;vertical-align:middle;font-family:宋体;font-size:14px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_27 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_28 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_29 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_30 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_31 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_32 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_33 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_34 { text-align:center;vertical-align:middle;font-family:宋体;font-size:16px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_35 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1488102out()" onmouseover="report1488102over()" rowCount=44 cols=10 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:726px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:36px;"></col>
		<col style="width:45px;"></col>
		<col style="width:221px;"></col>
		<col style="width:57px;"></col>
		<col style="width:90px;"></col>
		<col style="width:55px;"></col>
		<col style="width:113px;"></col>
		<col style="width:109px;"></col>
	</colgroup>
	<tr rn="1" height=39 style="height:39px;">
		<td colSpan=8 id="report1_A1" colNo=1 value='10014517000030479051' onclick="_hideEditor()" class="report1_34">中华人民共和国企业所得税月(季)度预缴纳税申报表(A类，2015年版)</td>
		<td id="report1_I1" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_26" style="display:none;"></td>
		<td id="report1_J1" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="2" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A2" colNo=1 value='纳税人识别号' onclick="_hideEditor()" class="report1_12">纳税人识别号</td>
		<td id="report1_C2" colNo=3 value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_12">91450107MA5KE0EQ2B</td>
		<td id="report1_D2" colNo=4 value='填表日期' onclick="_hideEditor()" class="report1_12">填表日期</td>
		<td id="report1_E2" colNo=5 value='2017-10-17' onclick="_hideEditor()" class="report1_4">2017-10-17</td>
		<td colSpan=3 id="report1_F2" colNo=6 value='金额单位:   人民币元(列至角分)' onclick="_hideEditor()" class="report1_12">金额单位:&nbsp;&nbsp;&nbsp;人民币元(列至角分)</td>
		<td id="report1_I2" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J2" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_20" style="display:none;"></td>
	</tr>
	<tr rn="3" height=40 style="height:40px;">
		<td colSpan=2 id="report1_A3" colNo=1 value='纳税人名称' onclick="_hideEditor()" class="report1_12">纳税人名称</td>
		<td id="report1_C3" colNo=3 value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_28">广西龙森胜贸易有限公司</td>
		<td id="report1_D3" colNo=4 value='所属日期' onclick="_hideEditor()" class="report1_12">所属日期</td>
		<td id="report1_E3" colNo=5 value='2017-07-01' onclick="_hideEditor()" class="report1_4">2017-07-01</td>
		<td id="report1_F3" colNo=6 value='至' onclick="_hideEditor()" class="report1_4">至</td>
		<td colSpan=2 id="report1_G3" colNo=7 value='2017-09-30' onclick="_hideEditor()" class="report1_4">2017-09-30</td>
		<td id="report1_I3" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J3" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_20" style="display:none;"></td>
	</tr>
	<tr rn="4" height=20 style="height:20px;">
		<td id="report1_A4" colNo=1 value='行次' onclick="_hideEditor()" class="report1_4">行次</td>
		<td colSpan=5 id="report1_B4" colNo=2 value='项    目' onclick="_hideEditor()" class="report1_4">项&nbsp;&nbsp;&nbsp;&nbsp;目</td>
		<td id="report1_G4" colNo=7 value='本期金额' onclick="_hideEditor()" class="report1_4">本期金额</td>
		<td id="report1_H4" colNo=8 value='累计金额' onclick="_hideEditor()" class="report1_4">累计金额</td>
		<td id="report1_I4" colNo=9 bkj="true" value='上期累计金额' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J4" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_23" style="display:none;"></td>
	</tr>
	<tr rn="5" height=20 style="height:20px;">
		<td id="report1_A5" colNo=1 value='1' onclick="_hideEditor()" class="report1_4">1</td>
		<td colSpan=7 id="report1_B5" colNo=2 value='一、按照实际利润额预缴' onclick="_hideEditor()" class="report1_3">一、按照实际利润额预缴</td>
		<td id="report1_I5" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_19" style="display:none;"></td>
		<td id="report1_J5" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_14" style="display:none;"></td>
	</tr>
	<tr rn="6" height=20 style="height:20px;">
		<td id="report1_A6" colNo=1 value='2' onclick="_hideEditor()" class="report1_4">2</td>
		<td colSpan=5 id="report1_B6" colNo=2 value='营业收入' onclick="_hideEditor()" class="report1_12">营业收入</td>
		<td id="report1_G6" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='1029234.85' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">1029234.85</td>
		<td id="report1_H6" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='2693946.49' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_16">2693946.49</td>
		<td id="report1_I6" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J6" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="7" height=20 style="height:20px;">
		<td id="report1_A7" colNo=1 value='3' onclick="_hideEditor()" class="report1_4">3</td>
		<td colSpan=5 id="report1_B7" colNo=2 value='营业成本' onclick="_hideEditor()" class="report1_12">营业成本</td>
		<td id="report1_G7" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_H7" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_16">0.00</td>
		<td id="report1_I7" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J7" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="8" height=20 style="height:20px;">
		<td id="report1_A8" colNo=1 value='4' onclick="_hideEditor()" class="report1_4">4</td>
		<td colSpan=5 id="report1_B8" colNo=2 value='利润总额' onclick="_hideEditor()" class="report1_12">利润总额</td>
		<td id="report1_G8" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='-100.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">-100.00</td>
		<td id="report1_H8" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='-300.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_16">-300.00</td>
		<td id="report1_I8" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J8" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="9" height=20 style="height:20px;">
		<td id="report1_A9" colNo=1 value='5' onclick="_hideEditor()" class="report1_4">5</td>
		<td colSpan=5 id="report1_B9" colNo=2 value='加:特定业务计算的应纳税所得额' onclick="_hideEditor()" class="report1_12">加:特定业务计算的应纳税所得额</td>
		<td id="report1_G9" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_9_7_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_9_7_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_G9' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_G9" );}catch(e){}
			alert( '第5行第1列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_H9" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_16">0.00</td>
		<td id="report1_I9" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J9" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="10" height=20 style="height:20px;">
		<td id="report1_A10" colNo=1 value='6' onclick="_hideEditor()" class="report1_4">6</td>
		<td colSpan=5 id="report1_B10" colNo=2 value='减:不征税收入和税基减免应纳税所得额（请填附表1）' onclick="_hideEditor()" class="report1_12">减:不征税收入和税基减免应纳税所得额（请填附表1）</td>
		<td id="report1_G10" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_10_7_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_10_7_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_G10' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_G10" );}catch(e){}
			alert( '第6行第1列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_H10" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_I10" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J10" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="11" height=20 style="height:20px;">
		<td id="report1_A11" colNo=1 value='7' onclick="_hideEditor()" class="report1_4">7</td>
		<td colSpan=5 id="report1_B11" colNo=2 value='   固定资产加速折旧（扣除）调减额（请填附表2）' onclick="_hideEditor()" class="report1_12">&nbsp;&nbsp;&nbsp;固定资产加速折旧（扣除）调减额（请填附表2）</td>
		<td id="report1_G11" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_11_7_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_11_7_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_G11' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_G11" );}catch(e){}
			alert( '第7行第1列要≥0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_H11" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_I11" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J11" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="12" height=20 style="height:20px;">
		<td id="report1_A12" colNo=1 value='8' onclick="_hideEditor()" class="report1_4">8</td>
		<td colSpan=5 id="report1_B12" colNo=2 value='   弥补以前年度亏损' onclick="_hideEditor()" class="report1_12">&nbsp;&nbsp;&nbsp;弥补以前年度亏损</td>
		<td id="report1_G12" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_H12" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_I12" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J12" colNo=10 bkj="true" value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="13" height=20 style="height:20px;">
		<td id="report1_A13" colNo=1 value='9' onclick="_hideEditor()" class="report1_4">9</td>
		<td colSpan=5 id="report1_B13" colNo=2 value='实际利润额（4行+5行-6行-7行-8行）' onclick="_hideEditor()" class="report1_12">实际利润额（4行+5行-6行-7行-8行）</td>
		<td id="report1_G13" colNo=7 value='-100.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">-100.00</td>
		<td id="report1_H13" colNo=8 value='-300.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">-300.00</td>
		<td id="report1_I13" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J13" colNo=10 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="14" height=20 style="height:20px;">
		<td id="report1_A14" colNo=1 value='10' onclick="_hideEditor()" class="report1_4">10</td>
		<td colSpan=5 id="report1_B14" colNo=2 value='税率(25%)' onclick="_hideEditor()" class="report1_12">税率(25%)</td>
		<td id="report1_G14" colNo=7 value='0.25' format="%230.00%25" digits="4" onclick="_hideEditor()" class="report1_9">25.00%</td>
		<td id="report1_H14" colNo=8 value='0.25' format="%230.00%25" digits="4" onclick="_hideEditor()" class="report1_9">25.00%</td>
		<td id="report1_I14" colNo=9 bkj="true" value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_24" style="display:none;"></td>
		<td id="report1_J14" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_17" style="display:none;"></td>
	</tr>
	<tr rn="15" height=20 style="height:20px;">
		<td id="report1_A15" colNo=1 value='11' onclick="_hideEditor()" class="report1_4">11</td>
		<td colSpan=5 id="report1_B15" colNo=2 value='应纳所得税额（9行×10行）' onclick="_hideEditor()" class="report1_12">应纳所得税额（9行×10行）</td>
		<td id="report1_G15" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_H15" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_I15" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J15" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="16" height=20 style="height:20px;">
		<td id="report1_A16" colNo=1 value='12' onclick="_hideEditor()" class="report1_4">12</td>
		<td colSpan=5 id="report1_B16" colNo=2 value='减:减免所得税额（请填附表3）' onclick="_hideEditor()" class="report1_12">减:减免所得税额（请填附表3）</td>
		<td id="report1_G16" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_16_7_dataValid()" onclick="_displayEditor()" class="report1_10">0.00</td>
<script language=javascript>
	function report1_16_7_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_G16' ) )<=_parseValue( document.getElementById( 'report1_G15' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_G15,report1_G16" );}catch(e){}
			alert( '第12行第1列<=第11行第1列' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_H16" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_16_8_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_16_8_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_H16' ) )<=_parseValue( document.getElementById( 'report1_H15' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_H15,report1_H16" );}catch(e){}
			alert( '第12行第2列<=第11行第2列' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I16" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J16" colNo=10 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="17" height=20 style="height:20px;">
		<td id="report1_A17" colNo=1 value='13' onclick="_hideEditor()" class="report1_4">13</td>
		<td colSpan=5 id="report1_B17" colNo=2 value='   实际已预缴所得税额' onclick="_hideEditor()" class="report1_12">&nbsp;&nbsp;&nbsp;实际已预缴所得税额</td>
		<td id="report1_G17" colNo=7 value='--' onclick="_hideEditor()" class="report1_13">--</td>
		<td id="report1_H17" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_9">0.00</td>
		<td id="report1_I17" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J17" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="18" height=20 style="height:20px;">
		<td id="report1_A18" colNo=1 value='14' onclick="_hideEditor()" class="report1_4">14</td>
		<td colSpan=5 id="report1_B18" colNo=2 value='   特定业务预缴（征）所得税额' onclick="_hideEditor()" class="report1_12">&nbsp;&nbsp;&nbsp;特定业务预缴（征）所得税额</td>
		<td id="report1_G18" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_H18" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_I18" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J18" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="19" height=20 style="height:20px;">
		<td id="report1_A19" colNo=1 value='15' onclick="_hideEditor()" class="report1_4">15</td>
		<td colSpan=5 id="report1_B19" colNo=2 value='应补（退）所得税额（11行-12行-13行-14行）' onclick="_hideEditor()" class="report1_12">应补（退）所得税额（11行-12行-13行-14行）</td>
		<td id="report1_G19" colNo=7 value='--' onclick="_hideEditor()" class="report1_13">--</td>
		<td id="report1_H19" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_I19" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J19" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="20" height=20 style="height:20px;">
		<td id="report1_A20" colNo=1 value='16' onclick="_hideEditor()" class="report1_4">16</td>
		<td colSpan=5 id="report1_B20" colNo=2 value='减：以前年度多缴在本期抵缴所得税额' onclick="_hideEditor()" class="report1_12">减：以前年度多缴在本期抵缴所得税额</td>
		<td id="report1_G20" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_9">0.00</td>
		<td id="report1_H20" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_9">0.00</td>
		<td id="report1_I20" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_24" style="display:none;"></td>
		<td id="report1_J20" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_17" style="display:none;"></td>
	</tr>
	<tr rn="21" height=20 style="height:20px;">
		<td id="report1_A21" colNo=1 value='17' onclick="_hideEditor()" class="report1_4">17</td>
		<td colSpan=5 id="report1_B21" colNo=2 value='本月（季）实际应补（退）所得税额' onclick="_hideEditor()" class="report1_12">本月（季）实际应补（退）所得税额</td>
		<td id="report1_G21" colNo=7 value='--' onclick="_hideEditor()" class="report1_13">--</td>
		<td id="report1_H21" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_I21" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J21" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="22" height=20 style="height:20px;">
		<td id="report1_A22" colNo=1 value='18' onclick="_hideEditor()" class="report1_4">18</td>
		<td colSpan=7 id="report1_B22" colNo=2 value='二、按照上一纳税年度应纳税所得额平均额预缴' onclick="_hideEditor()" class="report1_3">二、按照上一纳税年度应纳税所得额平均额预缴</td>
		<td id="report1_I22" colNo=9 bkj="true" value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_19" style="display:none;"></td>
		<td id="report1_J22" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_14" style="display:none;"></td>
	</tr>
	<tr rn="23" height=20 style="height:20px;">
		<td id="report1_A23" colNo=1 value='19' onclick="_hideEditor()" class="report1_4">19</td>
		<td colSpan=5 id="report1_B23" colNo=2 value='上一纳税年度应纳税所得额' onclick="_hideEditor()" class="report1_12">上一纳税年度应纳税所得额</td>
		<td id="report1_G23" colNo=7 value='--' onclick="_hideEditor()" class="report1_13">--</td>
		<td id="report1_H23" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_9">0.00</td>
		<td id="report1_I23" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J23" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="24" height=20 style="height:20px;">
		<td id="report1_A24" colNo=1 value='20' onclick="_hideEditor()" class="report1_4">20</td>
		<td colSpan=5 id="report1_B24" colNo=2 value='本月（季）应纳税所得额（19行×1/4或1/12）' onclick="_hideEditor()" class="report1_12">本月（季）应纳税所得额（19行×1/4或1/12）</td>
		<td id="report1_G24" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_H24" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_I24" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J24" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="25" height=20 style="height:20px;">
		<td id="report1_A25" colNo=1 value='21' onclick="_hideEditor()" class="report1_4">21</td>
		<td colSpan=5 id="report1_B25" colNo=2 value='税率(25%)' onclick="_hideEditor()" class="report1_12">税率(25%)</td>
		<td id="report1_G25" colNo=7 value='0.25' format="%230.00%25" digits="4" onclick="_hideEditor()" class="report1_9">25.00%</td>
		<td id="report1_H25" colNo=8 value='0.25' format="%230.00%25" digits="4" onclick="_hideEditor()" class="report1_9">25.00%</td>
		<td id="report1_I25" colNo=9 bkj="true" value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_24" style="display:none;"></td>
		<td id="report1_J25" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_17" style="display:none;"></td>
	</tr>
	<tr rn="26" height=20 style="height:20px;">
		<td id="report1_A26" colNo=1 value='22' onclick="_hideEditor()" class="report1_4">22</td>
		<td colSpan=5 id="report1_B26" colNo=2 value='本月（季）应纳所得税额（20行×21行）' onclick="_hideEditor()" class="report1_12">本月（季）应纳所得税额（20行×21行）</td>
		<td id="report1_G26" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_H26" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_I26" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J26" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="27" height=20 style="height:20px;">
		<td id="report1_A27" colNo=1 value='23' onclick="_hideEditor()" class="report1_4">23</td>
		<td colSpan=5 id="report1_B27" colNo=2 value='减：减免所得税额(请填附表3）' onclick="_hideEditor()" class="report1_12">减：减免所得税额(请填附表3）</td>
		<td id="report1_G27" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_9">0.00</td>
		<td id="report1_H27" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_I27" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J27" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="28" height=20 style="height:20px;">
		<td id="report1_A28" colNo=1 value='24' onclick="_hideEditor()" class="report1_4">24</td>
		<td colSpan=5 id="report1_B28" colNo=2 value='本月（季）实际应纳所得税额（22行-23行）' onclick="_hideEditor()" class="report1_12">本月（季）实际应纳所得税额（22行-23行）</td>
		<td id="report1_G28" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_H28" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_I28" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J28" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="29" height=20 style="height:20px;">
		<td id="report1_A29" colNo=1 value='25' onclick="_hideEditor()" class="report1_33">25</td>
		<td colSpan=7 id="report1_B29" colNo=2 value='三、按照税务机关确定的其他方法预缴' onclick="_hideEditor()" class="report1_3">三、按照税务机关确定的其他方法预缴</td>
		<td id="report1_I29" colNo=9 bkj="true" value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_19" style="display:none;"></td>
		<td id="report1_J29" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_14" style="display:none;"></td>
	</tr>
	<tr rn="30" height=20 style="height:20px;">
		<td id="report1_A30" colNo=1 value='26' onclick="_hideEditor()" class="report1_4">26</td>
		<td colSpan=5 id="report1_B30" colNo=2 value='本月（季）税务机关确定的预缴所得税额' onclick="_hideEditor()" class="report1_12">本月（季）税务机关确定的预缴所得税额</td>
		<td id="report1_G30" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_9">0.00</td>
		<td id="report1_H30" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_I30" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J30" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="31" height=20 style="height:20px;">
		<td id="report1_A31" colNo=1 value='27' onclick="_hideEditor()" class="report1_4">27</td>
		<td colSpan=7 id="report1_B31" colNo=2 value='总分机构纳税人' onclick="_hideEditor()" class="report1_33">总分机构纳税人</td>
		<td id="report1_I31" colNo=9 bkj="true" value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_19" style="display:none;"></td>
		<td id="report1_J31" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_29" style="display:none;"></td>
	</tr>
	<tr rn="32" height=20 style="height:20px;">
		<td id="report1_A32" colNo=1 value='28' onclick="_hideEditor()" class="report1_4">28</td>
		<td rowSpan=4 id="report1_B32" colNo=2 value='总机构' onclick="_hideEditor()" class="report1_30" style="border-bottom-style:solid;">总机构</td>
		<td colSpan=4 id="report1_C32" colNo=3 value='总机构分摊所得税额(15行或24行或26行×总机构分摊预缴比例)' onclick="_hideEditor()" class="report1_12">总机构分摊所得税额(15行或24行或26行×总机构分摊预缴比例)</td>
		<td id="report1_G32" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_16">0.00</td>
		<td id="report1_H32" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_I32" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J32" colNo=10 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="33" height=20 style="height:20px;">
		<td id="report1_A33" colNo=1 value='29' onclick="_hideEditor()" class="report1_4">29</td>
		<td colSpan=4 id="report1_C33" colNo=3 value='财政集中分配所得税额' onclick="_hideEditor()" class="report1_11" style="border-right-style:solid;">财政集中分配所得税额</td>
		<td id="report1_G33" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_16">0.00</td>
		<td id="report1_H33" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_I33" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J33" colNo=10 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="34" height=20 style="height:20px;">
		<td id="report1_A34" colNo=1 value='30' onclick="_hideEditor()" class="report1_4">30</td>
		<td colSpan=4 id="report1_C34" colNo=3 value='分支机构分摊所得税额(15行或24行或26行×分支机构分摊比例)' onclick="_hideEditor()" class="report1_11" style="border-right-style:solid;">分支机构分摊所得税额(15行或24行或26行×分支机构分摊比例)</td>
		<td id="report1_G34" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_16">0.00</td>
		<td id="report1_H34" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_I34" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J34" colNo=10 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="35" height=20 style="height:20px;">
		<td id="report1_A35" colNo=1 value='31' onclick="_hideEditor()" class="report1_4">31</td>
		<td colSpan=4 id="report1_C35" colNo=3 value='其中：总机构独立生产经营部门应分摊所得税额' onclick="_hideEditor()" class="report1_11" style="border-right-style:solid;">其中：总机构独立生产经营部门应分摊所得税额</td>
		<td id="report1_G35" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_9">0.00</td>
		<td id="report1_H35" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_I35" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J35" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="36" height=20 style="height:20px;">
		<td id="report1_A36" colNo=1 value='32' onclick="_hideEditor()" class="report1_4">32</td>
		<td rowSpan=2 id="report1_B36" colNo=2 value='分支
机构' onclick="_hideEditor()" class="report1_31" style="border-bottom-style:solid;">分支<br>机构</td>
		<td colSpan=4 id="report1_C36" colNo=3 value='分配比例' onclick="_hideEditor()" class="report1_11" style="border-right-style:solid;">分配比例</td>
		<td id="report1_G36" colNo=7 value='0.0' format="%230.0000%25" digits="6" onclick="_hideEditor()" class="report1_9">0.0000%</td>
		<td id="report1_H36" colNo=8 value='0.0' format="%230.0000%25" digits="6" dataValid="report1_36_8_dataValid()" onclick="_hideEditor()" class="report1_7">0.0000%</td>
<script language=javascript>
	function report1_36_8_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_H36' ) )==_parseValue( document.getElementById( 'report1_G36' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_G36,report1_H36" );}catch(e){}
			alert( '第32行累计数要等于本期数' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I36" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J36" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="37" height=20 style="height:20px;">
		<td id="report1_A37" colNo=1 value='33' onclick="_hideEditor()" class="report1_4">33</td>
		<td colSpan=4 id="report1_C37" colNo=3 value='分配所得税额' onclick="_hideEditor()" class="report1_11" style="border-right-style:solid;">分配所得税额</td>
		<td id="report1_G37" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_9">0.00</td>
		<td id="report1_H37" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_I37" colNo=9 bkj="true" value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J37" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="38" height=20 style="height:20px;">
		<td colSpan=4 id="report1_A38" colNo=1 value='是否属于小型微利企业：' onclick="_hideEditor()" class="report1_27">是否属于小型微利企业：</td>
		<td colSpan=2 id="report1_E38" colNo=5 modifiable=true value='1' onclick="_hideEditor()" class="report1_21">是<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'E38' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_E38'));}catch(e){}" checked></td>
		<td colSpan=2 id="report1_G38" colNo=7 modifiable=true value='0' onclick="_hideEditor()" class="report1_22">否<input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'G38' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_G38'));}catch(e){}"></td>
		<td id="report1_I38" colNo=9 bkj="true" value='Y' onclick="_hideEditor()" class="report1_19" style="display:none;"></td>
		<td id="report1_J38" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_29" style="display:none;"></td>
	</tr>
	<tr rn="39" height=40 style="height:40px;">
		<td colSpan=8 id="report1_A39" colNo=1 value='   谨声明：此纳税申报表是根据《中华人民共和国企业所得税法》、《中华人民共和国企业所得税法实施条例》和国家有关税收规定填报的，是真实的、可靠的、完整的。' onclick="_hideEditor()" class="report1_35">&nbsp;&nbsp;&nbsp;谨声明：此纳税申报表是根据《中华人民共和国企业所得税法》、《中华人民共和国企业所得税法实施条例》和国家有关税收规定填<br>报的，是真实的、可靠的、完整的。</td>
		<td id="report1_I39" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J39" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_20" style="display:none;"></td>
	</tr>
	<tr rn="40" height=20 style="height:20px;">
		<td colSpan=4 id="report1_A40" colNo=1 value='法定代表人（签字）：' onclick="_hideEditor()" class="report1_32">法定代表人（签字）：</td>
		<td colSpan=4 id="report1_E40" colNo=5 value='                                           年     月     日' onclick="_hideEditor()" class="report1_25">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日</td>
		<td id="report1_I40" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J40" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_23" style="display:none;"></td>
	</tr>
	<tr rn="41" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A41" colNo=1 value='纳税人公章：' onclick="_hideEditor()" class="report1_15">纳税人公章：</td>
		<td colSpan=3 id="report1_D41" colNo=4 value='代理申报中介机构公章：' onclick="_hideEditor()" class="report1_15">代理申报中介机构公章：</td>
		<td colSpan=2 id="report1_G41" colNo=7 value='主管税务机关受理专用章：' onclick="_hideEditor()" class="report1_15">主管税务机关受理专用章：</td>
		<td id="report1_I41" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J41" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_20" style="display:none;"></td>
	</tr>
	<tr rn="42" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A42" colNo=1 value='会计主管：' onclick="_hideEditor()" class="report1_18">会计主管：</td>
		<td colSpan=3 id="report1_D42" colNo=4 value='经办人：' onclick="_hideEditor()" class="report1_18">经办人：</td>
		<td colSpan=2 id="report1_G42" colNo=7 value='受理人：' onclick="_hideEditor()" class="report1_18">受理人：</td>
		<td id="report1_I42" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J42" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_20" style="display:none;"></td>
	</tr>
	<tr rn="43" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A43" colNo=1 value='' onclick="_hideEditor()" class="report1_18"></td>
		<td colSpan=3 id="report1_D43" colNo=4 value='经办人执业证件号码：' onclick="_hideEditor()" class="report1_18">经办人执业证件号码：</td>
		<td colSpan=2 id="report1_G43" colNo=7 value='' onclick="_hideEditor()" class="report1_18"></td>
		<td id="report1_I43" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J43" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_20" style="display:none;"></td>
	</tr>
	<tr rn="44" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A44" colNo=1 value='填表日期：                       年     月     日' onclick="_hideEditor()" class="report1_5">填表日期：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日</td>
		<td colSpan=3 id="report1_D44" colNo=4 value='代理申报日期：     年    月    日' onclick="_hideEditor()" class="report1_5">代理申报日期：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;日</td>
		<td colSpan=2 id="report1_G44" colNo=7 value='受理日期：          年     月     日  ' onclick="_hideEditor()" class="report1_5">受理日期：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;</td>
		<td id="report1_I44" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
		<td id="report1_J44" colNo=10 bkj="true" value='' onclick="_hideEditor()" class="report1_20" style="display:none;"></td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,G6,I6,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G6' ) )+_parseValue( document.getElementById( 'report1_I6' ) )).toFixed(2);
				document.getElementById( 'report1_H6' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H6' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H6' ) );
			}catch(e1){}
		}
		cells = ",,G7,I7,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G7' ) )+_parseValue( document.getElementById( 'report1_I7' ) )).toFixed(2);
				document.getElementById( 'report1_H7' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H7' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H7' ) );
			}catch(e1){}
		}
		cells = ",,G8,I8,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G8' ) )+_parseValue( document.getElementById( 'report1_I8' ) )).toFixed(2);
				document.getElementById( 'report1_H8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H8' ) );
			}catch(e1){}
		}
		cells = ",,G9,I9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G9' ) )+_parseValue( document.getElementById( 'report1_I9' ) )).toFixed(2);
				document.getElementById( 'report1_H9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H9' ) );
			}catch(e1){}
		}
		cells = ",,G8,G9,G10,G11,I13,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G8' ) )+_parseValue( document.getElementById( 'report1_G9' ) )-_parseValue( document.getElementById( 'report1_G10' ) )-_parseValue( document.getElementById( 'report1_G11' ) )+_parseValue( document.getElementById( 'report1_I13' ) )).toFixed(2);
				document.getElementById( 'report1_J12' ).setAttribute( 'value', value + "" );
				_formatCalcValue( document.getElementById( 'report1_J12' ) );
			}catch(e1){}
		}
		cells = ",,G8,G9,G10,G11,G12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G8' ) )+_parseValue( document.getElementById( 'report1_G9' ) )-_parseValue( document.getElementById( 'report1_G10' ) )-_parseValue( document.getElementById( 'report1_G11' ) )-_parseValue( document.getElementById( 'report1_G12' ) )).toFixed(2);
				document.getElementById( 'report1_G13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G13' ) );
			}catch(e1){}
		}
		cells = ",,H8,G8,I8,H9,G9,I9,H10,H11,H12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H8' ) )+_parseValue( document.getElementById( 'report1_H9' ) )-_parseValue( document.getElementById( 'report1_H10' ) )-_parseValue( document.getElementById( 'report1_H11' ) )-_parseValue( document.getElementById( 'report1_H12' ) )).toFixed(2);
				document.getElementById( 'report1_H13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H13' ) );
			}catch(e1){}
		}
		cells = ",,G13,G8,G9,G10,G11,G12,G14,G13,G8,G9,G10,G11,G12,G14,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = ((_parseValue( document.getElementById( 'report1_G13' ) )*_parseValue( document.getElementById( 'report1_G14' ) ))<0?0:(_parseValue( document.getElementById( 'report1_G13' ) )*_parseValue( document.getElementById( 'report1_G14' ) ))).toFixed(2);
				document.getElementById( 'report1_G15' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G15' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G15' ) );
			}catch(e1){}
		}
		cells = ",,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = ((_parseValue( document.getElementById( 'report1_H13' ) )*_parseValue( document.getElementById( 'report1_H14' ) ))<0?0:(_parseValue( document.getElementById( 'report1_H13' ) )*_parseValue( document.getElementById( 'report1_H14' ) ))).toFixed(2);
				document.getElementById( 'report1_H15' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H15' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H15' ) );
			}catch(e1){}
		}
		cells = ",,G18,I18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G18' ) )+_parseValue( document.getElementById( 'report1_I18' ) )).toFixed(2);
				document.getElementById( 'report1_H18' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H18' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H18' ) );
			}catch(e1){}
		}
		cells = ",,J16,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_J16' ) ) == 0?((_parseValue( document.getElementById( 'report1_H15' ) )-_parseValue( document.getElementById( 'report1_H16' ) )-_parseValue( document.getElementById( 'report1_H17' ) )-_parseValue( document.getElementById( 'report1_H18' ) ))<0?0:(_parseValue( document.getElementById( 'report1_H15' ) )-_parseValue( document.getElementById( 'report1_H16' ) )-_parseValue( document.getElementById( 'report1_H17' ) )-_parseValue( document.getElementById( 'report1_H18' ) ))):((_parseValue( document.getElementById( 'report1_H15' ) )*_parseValue( document.getElementById( 'report1_J16' ) )-_parseValue( document.getElementById( 'report1_H16' ) )-_parseValue( document.getElementById( 'report1_H17' ) )-_parseValue( document.getElementById( 'report1_H18' ) ))<0?0:(_parseValue( document.getElementById( 'report1_H15' ) )*_parseValue( document.getElementById( 'report1_J16' ) )-_parseValue( document.getElementById( 'report1_H16' ) )-_parseValue( document.getElementById( 'report1_H17' ) )-_parseValue( document.getElementById( 'report1_H18' ) )))).toFixed(2);
				document.getElementById( 'report1_H19' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H19' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H19' ) );
			}catch(e1){}
		}
		cells = ",,H19,J16,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,H19,J16,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H19' ) )>0?_parseValue( document.getElementById( 'report1_H19' ) ):0).toFixed(2);
				document.getElementById( 'report1_H21' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H21' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H21' ) );
			}catch(e1){}
		}
		cells = ",,E3,G3,H23,H23,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (document.getElementById( 'report1_E3' ).getAttribute('value').substring(0,7)==document.getElementById( 'report1_G3' ).getAttribute('value').substring(0,7)?_parseValue( document.getElementById( 'report1_H23' ) )/12:_parseValue( document.getElementById( 'report1_H23' ) )/4).toFixed(2);
				document.getElementById( 'report1_G24' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G24' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G24' ) );
			}catch(e1){}
		}
		cells = ",,G24,E3,G3,H23,H23,I24,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G24' ) )+_parseValue( document.getElementById( 'report1_I24' ) )).toFixed(2);
				document.getElementById( 'report1_H24' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H24' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H24' ) );
			}catch(e1){}
		}
		cells = ",,G24,E3,G3,H23,H23,G25,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G24' ) )*_parseValue( document.getElementById( 'report1_G25' ) )).toFixed(2);
				document.getElementById( 'report1_G26' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G26' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G26' ) );
			}catch(e1){}
		}
		cells = ",,G26,G24,E3,G3,H23,H23,G25,I26,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G26' ) )+_parseValue( document.getElementById( 'report1_I26' ) )).toFixed(2);
				document.getElementById( 'report1_H26' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H26' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H26' ) );
			}catch(e1){}
		}
		cells = ",,G27,I27,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G27' ) )+_parseValue( document.getElementById( 'report1_I27' ) )).toFixed(2);
				document.getElementById( 'report1_H27' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H27' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H27' ) );
			}catch(e1){}
		}
		cells = ",,G26,G24,E3,G3,H23,H23,G25,G27,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G26' ) )-_parseValue( document.getElementById( 'report1_G27' ) )).toFixed(2);
				document.getElementById( 'report1_G28' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G28' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G28' ) );
			}catch(e1){}
		}
		cells = ",,H26,G26,G24,E3,G3,H23,H23,G25,I26,H27,G27,I27,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H26' ) )-_parseValue( document.getElementById( 'report1_H27' ) )).toFixed(2);
				document.getElementById( 'report1_H28' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H28' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H28' ) );
			}catch(e1){}
		}
		cells = ",,G30,I30,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G30' ) )+_parseValue( document.getElementById( 'report1_I30' ) )).toFixed(2);
				document.getElementById( 'report1_H30' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H30' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H30' ) );
			}catch(e1){}
		}
		cells = ",,H19,J16,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,G28,G26,G24,E3,G3,H23,H23,G25,G27,G30,J32,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = ((_parseValue( document.getElementById( 'report1_H19' ) )+_parseValue( document.getElementById( 'report1_G28' ) )+_parseValue( document.getElementById( 'report1_G30' ) ))*_parseValue( document.getElementById( 'report1_J32' ) )).toFixed(2);
				document.getElementById( 'report1_G32' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G32' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G32' ) );
			}catch(e1){}
		}
		cells = ",,G32,H19,J16,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,G28,G26,G24,E3,G3,H23,H23,G25,G27,G30,J32,I32,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G32' ) )+_parseValue( document.getElementById( 'report1_I32' ) )).toFixed(2);
				document.getElementById( 'report1_H32' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H32' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H32' ) );
			}catch(e1){}
		}
		cells = ",,H19,J16,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,G28,G26,G24,E3,G3,H23,H23,G25,G27,G30,J33,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = ((_parseValue( document.getElementById( 'report1_H19' ) )+_parseValue( document.getElementById( 'report1_G28' ) )+_parseValue( document.getElementById( 'report1_G30' ) ))*_parseValue( document.getElementById( 'report1_J33' ) )).toFixed(2);
				document.getElementById( 'report1_G33' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G33' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G33' ) );
			}catch(e1){}
		}
		cells = ",,G33,H19,J16,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,G28,G26,G24,E3,G3,H23,H23,G25,G27,G30,J33,I33,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G33' ) )+_parseValue( document.getElementById( 'report1_I33' ) )).toFixed(2);
				document.getElementById( 'report1_H33' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H33' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H33' ) );
			}catch(e1){}
		}
		cells = ",,H19,J16,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,G28,G26,G24,E3,G3,H23,H23,G25,G27,G30,J34,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = ((_parseValue( document.getElementById( 'report1_H19' ) )+_parseValue( document.getElementById( 'report1_G28' ) )+_parseValue( document.getElementById( 'report1_G30' ) ))*_parseValue( document.getElementById( 'report1_J34' ) )).toFixed(2);
				document.getElementById( 'report1_G34' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G34' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G34' ) );
			}catch(e1){}
		}
		cells = ",,G34,H19,J16,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,H15,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,H14,J16,H16,H17,H18,G18,I18,G28,G26,G24,E3,G3,H23,H23,G25,G27,G30,J34,I34,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G34' ) )+_parseValue( document.getElementById( 'report1_I34' ) )).toFixed(2);
				document.getElementById( 'report1_H34' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H34' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H34' ) );
			}catch(e1){}
		}
		cells = ",,G35,I35,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G35' ) )+_parseValue( document.getElementById( 'report1_I35' ) )).toFixed(2);
				document.getElementById( 'report1_H35' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H35' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H35' ) );
			}catch(e1){}
		}
		cells = ",,G36,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G36' ) )).toFixed(6);
				document.getElementById( 'report1_H36' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H36' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H36' ) );
			}catch(e1){}
		}
		cells = ",,G37,I37,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G37' ) )+_parseValue( document.getElementById( 'report1_I37' ) )).toFixed(2);
				document.getElementById( 'report1_H37' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H37' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H37' ) );
			}catch(e1){}
		}
		cells = ",,H13,H8,G8,I8,H9,G9,I9,H10,H11,H12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = _parseValue( document.getElementById( 'report1_H13' ) )>500000?"N":"Y";
				document.getElementById( 'report1_I38' ).setAttribute( 'value', value + "" );
				_formatCalcValue( document.getElementById( 'report1_I38' ) );
			}catch(e1){}
		}
		try{ group_autoCalc( 'report1_' + cellName ); }catch(e){}
	}

	function report1_checkValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_G9' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_G9" );}catch(e){}
			alert( '第5行第1列要≥0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_G10' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_G10" );}catch(e){}
			alert( '第6行第1列要≥0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_G11' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_G11" );}catch(e){}
			alert( '第7行第1列要≥0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_G16' ) )<=_parseValue( document.getElementById( 'report1_G15' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_G15,report1_G16" );}catch(e){}
			alert( '第12行第1列<=第11行第1列' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_H16' ) )<=_parseValue( document.getElementById( 'report1_H15' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_H15,report1_H16" );}catch(e){}
			alert( '第12行第2列<=第11行第2列' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_H36' ) )==_parseValue( document.getElementById( 'report1_G36' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_G36,report1_H36" );}catch(e){}
			alert( '第32行累计数要等于本期数' );
			return false;
		}
		return true;
	}

</script>
</div>
</td></tr></table>
<div style="display:none"><form id="report1_submitForm" method=post action="/WSSBSL/reportServlet.aspx?action=11" target="submitFrame">
	<input type=hidden name=fileName value="/jdsds2012/jdsds2015A.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_74086">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2Fjdsds2012%2Fjdsds2015A.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000030479051&sbuuid=34ADFA3C41108CBBA2B0A5C685F1024A&reportParamsId=1511495255785203171580">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_JDSDS_2008;xmlName=jdsds2012/jdsds_2015_A_zb;pzxh=10014517000030479051;nsrsbh=91450107MA5KE0EQ2B;dataFromBz=0;raq=/jdsds2012/jdsds2015A.raq;sbuuid=34ADFA3C41108CBBA2B0A5C685F1024A;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/jdsds2012/jdsds2015A.raq&srcType=file&cachedId=10_1_1_176_8080_74086&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_JDSDS_2008%3BxmlName%3Djdsds2012%2Fjdsds_2015_A_zb%3Bpzxh%3D10014517000030479051%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdataFromBz%3D0%3Braq%3D%2Fjdsds2012%2Fjdsds2015A.raq%3Bsbuuid%3D34ADFA3C41108CBBA2B0A5C685F1024A%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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
