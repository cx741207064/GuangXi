<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showReport_ybnsrZb.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showReport_ybnsrZb" %>

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

<input type="hidden" value="raq=/zzs2013Ybnsr/ybnsrZb.raq;nsrsbh=450100399111430;sbzt=0;skssq=20171111;ssqq=2017-11-01;ssqz=2017-11-30;isTbBz=0;szlbDm=22" id="myParams" />
<iframe name="submitFrame" src="" style="display:none"></iframe> 
<table id="rpt" width="100%"><tr><td align="center">
		<script language=javascript src="/WSSBSL/Finput.js" charset="UTF-8">
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
	var report1_cachedId = "10_1_1_176_8080_41509";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2Fzzs2013Ybnsr%2FybnsrZb.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=1512356358944288140646&cachedId=10_1_1_176_8080_41509&t_i_m_e=1512356359241" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2Fzzs2013Ybnsr%2FybnsrZb.raq&columns=0&srcType=file&reportParamsId=1512356358944288140646&cachedId=10_1_1_176_8080_41509&t_i_m_e=1512356359241" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2Fzzs2013Ybnsr%2FybnsrZb.raq&columns=0&srcType=file&reportParamsId=1512356358944288140646&cachedId=10_1_1_176_8080_41509&t_i_m_e=1512356359241";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2Fzzs2013Ybnsr%2FybnsrZb.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=1512356358944288140646&cachedId=10_1_1_176_8080_41509&t_i_m_e=1512356359241";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2Fzzs2013Ybnsr%2FybnsrZb.raq&srcType=file&reportParamsId=1512356358944288140646&cachedId=10_1_1_176_8080_41509&t_i_m_e=1512356359241" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2Fzzs2013Ybnsr%2FybnsrZb.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=1512356358944288140646&cachedId=10_1_1_176_8080_41509&t_i_m_e=1512356359241";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2Fzzs2013Ybnsr%2FybnsrZb.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=1512356358944288140646&cachedId=10_1_1_176_8080_41509&t_i_m_e=1512356359241";
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
	function report1457167over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1457167out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_3 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_4 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_9 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:center;vertical-align:bottom;font-family:宋体;font-size:18px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_12 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_13 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_14 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_15 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_16 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_17 { text-align:left;vertical-align:top;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_18 { text-align:left;vertical-align:top;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_19 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_20 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_21 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_22 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_23 { text-align:center;vertical-align:top;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_24 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_25 { text-align:left;vertical-align:top;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_26 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_27 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#3333FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_28 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_29 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1457167out()" onmouseover="report1457167over()" rowCount=52 cols=12 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:809px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:20px;"></col>
		<col style="width:83px;"></col>
		<col style="width:161px;"></col>
		<col style="width:125px;"></col>
		<col style="width:20px;"></col>
		<col style="width:85px;"></col>
		<col style="width:105px;"></col>
		<col style="width:50px;"></col>
		<col style="width:55px;"></col>
		<col style="width:105px;"></col>
	</colgroup>
	<tr rn="1" height=28 style="height:28px;">
		<td colSpan=10 id="report1_A1" colNo=1 value='增值税纳税申报表' onclick="_hideEditor()" class="report1_11">增值税纳税申报表</td>
		<td id="report1_K1" colNo=11 bkj="true" value='' onclick="_hideEditor()" class="report1_11" style="display:none;"></td>
		<td id="report1_L1" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_11" style="display:none;"></td>
	</tr>
	<tr rn="2" height=20 style="height:20px;">
		<td colSpan=10 id="report1_A2" colNo=1 value='（适用于增值税一般纳税人）' onclick="_hideEditor()" class="report1_23">（适用于增值税一般纳税人）</td>
		<td id="report1_K2" colNo=11 bkj="true" value='' onclick="_hideEditor()" class="report1_23" style="display:none;"></td>
		<td id="report1_L2" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_23" style="display:none;"></td>
	</tr>
	<tr rn="3" height=45 style="height:45px;">
		<td colSpan=10 id="report1_A3" colNo=1 value='    根据《中华人民共和国增值税暂行条例》和《交通运输业和部分现代服务业营业税改征增值税试点实施办法》的规定制定本表。纳税人不论有无销售额，均应按主管税务机关核定的纳税期限填报本表，并向当地税务机关申报。' onclick="_hideEditor()" class="report1_21">&nbsp;&nbsp;&nbsp;&nbsp;根据《中华人民共和国增值税暂行条例》和《交通运输业和部分现代服务业营业税改征增值税试点实施办法》的规定制定本表。纳税人不论有无销售<br>额，均应按主管税务机关核定的纳税期限填报本表，并向当地税务机关申报。</td>
		<td id="report1_K3" colNo=11 bkj="true" value='' onclick="_hideEditor()" class="report1_15" style="display:none;"></td>
		<td id="report1_L3" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_15" style="display:none;"></td>
	</tr>
	<tr rn="4" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A4" colNo=1 value='纳税人识别号' onclick="_hideEditor()" class="report1_29">纳税人识别号</td>
		<td colSpan=2 id="report1_C4" colNo=3 value='' onclick="_hideEditor()" class="report1_24"></td>
		<td colSpan=2 id="report1_E4" colNo=5 value='填表日期' onclick="_hideEditor()" class="report1_8">填表日期</td>
		<td colSpan=2 id="report1_G4" colNo=7 value='' onclick="_hideEditor()" class="report1_22"></td>
		<td colSpan=2 id="report1_I4" colNo=9 value='金额单位：元（列至角分）' onclick="_hideEditor()" class="report1_8">金额单位：元（列至角分）</td>
		<td id="report1_K4" colNo=11 bkj="true" value='0' onclick="_hideEditor()" class="report1_13" style="display:none;"></td>
		<td id="report1_L4" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_14" style="display:none;"></td>
	</tr>
	<tr rn="5" height=35 style="height:35px;">
		<td colSpan=2 id="report1_A5" colNo=1 value='纳税人名称' onclick="_hideEditor()" class="report1_29">纳税人名称</td>
		<td colSpan=2 id="report1_C5" colNo=3 value='' onclick="_hideEditor()" class="report1_3"></td>
		<td colSpan=2 id="report1_E5" colNo=5 value='所属日期' onclick="_hideEditor()" class="report1_8">所属日期</td>
		<td id="report1_G5" colNo=7 value='' onclick="_hideEditor()" class="report1_22"></td>
		<td id="report1_H5" colNo=8 value='至' onclick="_hideEditor()" class="report1_8">至</td>
		<td colSpan=2 id="report1_I5" colNo=9 value='' onclick="_hideEditor()" class="report1_8"></td>
		<td id="report1_K5" colNo=11 bkj="true" value='' onclick="_hideEditor()" class="report1_13" style="display:none;"></td>
		<td id="report1_L5" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_14" style="display:none;"></td>
	</tr>
	<tr rn="6" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A6" colNo=1 value='注册地址' onclick="_hideEditor()" class="report1_8">注册地址</td>
		<td colSpan=2 id="report1_C6" colNo=3 value='' onclick="_hideEditor()" class="report1_3"></td>
		<td colSpan=2 id="report1_E6" colNo=5 value='营业地址' onclick="_hideEditor()" class="report1_8">营业地址</td>
		<td colSpan=4 id="report1_G6" colNo=7 value='' onclick="_hideEditor()" class="report1_3"></td>
		<td id="report1_K6" colNo=11 bkj="true" value='' onclick="_hideEditor()" class="report1_12" style="display:none;"></td>
		<td id="report1_L6" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_15" style="display:none;"></td>
	</tr>
	<tr rn="7" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A7" colNo=1 value='开户银行及账号' onclick="_hideEditor()" class="report1_8">开户银行及账号</td>
		<td colSpan=4 id="report1_C7" colNo=3 value='' onclick="_hideEditor()" class="report1_3"></td>
		<td id="report1_G7" colNo=7 value='企业登记注册类型' onclick="_hideEditor()" class="report1_8">企业登记注册类型</td>
		<td colSpan=3 id="report1_H7" colNo=8 value='' onclick="_hideEditor()" class="report1_8"></td>
		<td id="report1_K7" colNo=11 bkj="true" value='' onclick="_hideEditor()" class="report1_13" style="display:none;"></td>
		<td id="report1_L7" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_14" style="display:none;"></td>
	</tr>
	<tr rn="8" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A8" colNo=1 value='所属行业' onclick="_hideEditor()" class="report1_8">所属行业</td>
		<td id="report1_C8" colNo=3 value='' onclick="_hideEditor()" class="report1_3"></td>
		<td id="report1_D8" colNo=4 value='法定代表人名称' onclick="_hideEditor()" class="report1_8">法定代表人名称</td>
		<td colSpan=2 id="report1_E8" colNo=5 value='' onclick="_hideEditor()" class="report1_8"></td>
		<td id="report1_G8" colNo=7 value='电话号码' onclick="_hideEditor()" class="report1_8">电话号码</td>
		<td colSpan=3 id="report1_H8" colNo=8 value='' onclick="_hideEditor()" class="report1_8"></td>
		<td id="report1_K8" colNo=11 bkj="true" value='' onclick="_hideEditor()" class="report1_13" style="display:none;"></td>
		<td id="report1_L8" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_14" style="display:none;"></td>
	</tr>
	<tr rn="9" height=20 style="height:20px;">
		<td rowSpan=2 colSpan=3 id="report1_A9" colNo=1 value='项目' onclick="_hideEditor()" class="report1_2" style="border-right-style:solid;">项目</td>
		<td rowSpan=2 id="report1_D9" colNo=4 value='栏次' onclick="_hideEditor()" class="report1_8">栏次</td>
		<td colSpan=3 id="report1_E9" colNo=5 value='一般项目' onclick="_hideEditor()" class="report1_2" style="border-right-style:solid;">一般项目</td>
		<td colSpan=3 id="report1_H9" colNo=8 value='即征即退项目' onclick="_hideEditor()" class="report1_8">即征即退项目</td>
		<td id="report1_K9" colNo=11 bkj="true" value='0' onclick="_hideEditor()" class="report1_13" style="display:none;"></td>
		<td id="report1_L9" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_14" style="display:none;"></td>
	</tr>
	<tr rn="10" height=20 style="height:20px;">
		<td colSpan=2 id="report1_E10" colNo=5 value='本月数' onclick="_hideEditor()" class="report1_2" style="border-right-style:solid;">本月数</td>
		<td id="report1_G10" colNo=7 value='本年累计' onclick="_hideEditor()" class="report1_8">本年累计</td>
		<td colSpan=2 id="report1_H10" colNo=8 value='本月数' onclick="_hideEditor()" class="report1_2" style="border-right-style:solid;">本月数</td>
		<td id="report1_J10" colNo=10 value='本年累计' onclick="_hideEditor()" class="report1_8">本年累计</td>
		<td id="report1_K10" colNo=11 bkj="true" value='一般上年累计 ' onclick="_hideEditor()" class="report1_13" style="display:none;"></td>
		<td id="report1_L10" colNo=12 bkj="true" value='即征上年累计' onclick="_hideEditor()" class="report1_14" style="display:none;"></td>
	</tr>
	<tr rn="11" height=20 style="height:20px;">
		<td rowSpan=10 id="report1_A11" colNo=1 value='销售额' onclick="_hideEditor()" class="report1_19" style="border-bottom-style:solid;">销<br>售<br>额</td>
		<td colSpan=2 id="report1_B11" colNo=2 value='（一）按适用税率征税销售额' onclick="_hideEditor()" class="report1_3">（一）按适用税率征税销售额</td>
		<td id="report1_D11" colNo=4 value='1' onclick="_hideEditor()" class="report1_3">1</td>
		<td colSpan=2 id="report1_E11" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_16" style="border-right-style:solid;">0.00</td>
		<td id="report1_G11" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H11" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_J11" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K11" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L11" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="12" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B12" colNo=2 value='其中：应税货物销售额' onclick="_hideEditor()" class="report1_3">其中：应税货物销售额</td>
		<td id="report1_D12" colNo=4 value='2' onclick="_hideEditor()" class="report1_3">2</td>
		<td colSpan=2 id="report1_E12" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G12" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H12" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_J12" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K12" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L12" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="13" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B13" colNo=2 value='应税劳务销售额' onclick="_hideEditor()" class="report1_3">应税劳务销售额</td>
		<td id="report1_D13" colNo=4 value='3' onclick="_hideEditor()" class="report1_3">3</td>
		<td colSpan=2 id="report1_E13" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G13" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H13" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_J13" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K13" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L13" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="14" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B14" colNo=2 value='纳税检查调整的销售额' onclick="_hideEditor()" class="report1_3">纳税检查调整的销售额</td>
		<td id="report1_D14" colNo=4 value='4' onclick="_hideEditor()" class="report1_3">4</td>
		<td colSpan=2 id="report1_E14" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G14" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H14" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_J14" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K14" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L14" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="15" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B15" colNo=2 value='（二）按简易征收办法征税销售额' onclick="_hideEditor()" class="report1_3">（二）按简易征收办法征税销售额</td>
		<td id="report1_D15" colNo=4 value='5' onclick="_hideEditor()" class="report1_3">5</td>
		<td colSpan=2 id="report1_E15" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G15" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H15" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_J15" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K15" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L15" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="16" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B16" colNo=2 value='其中：纳税检查调整的销售额' onclick="_hideEditor()" class="report1_3">其中：纳税检查调整的销售额</td>
		<td id="report1_D16" colNo=4 value='6' onclick="_hideEditor()" class="report1_3">6</td>
		<td colSpan=2 id="report1_E16" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G16" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H16" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_J16" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K16" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L16" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="17" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B17" colNo=2 value='（三）免、抵、退办法出口销售额' onclick="_hideEditor()" class="report1_3">（三）免、抵、退办法出口销售额</td>
		<td id="report1_D17" colNo=4 value='7' onclick="_hideEditor()" class="report1_3">7</td>
		<td colSpan=2 id="report1_E17" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G17" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H17" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_J17" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K17" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L17" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="18" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B18" colNo=2 value='（四）免税销售额' onclick="_hideEditor()" class="report1_3">（四）免税销售额</td>
		<td id="report1_D18" colNo=4 value='8' onclick="_hideEditor()" class="report1_3">8</td>
		<td colSpan=2 id="report1_E18" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G18" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H18" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_J18" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K18" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L18" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="19" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B19" colNo=2 value='其中：免税货物销售额' onclick="_hideEditor()" class="report1_3">其中：免税货物销售额</td>
		<td id="report1_D19" colNo=4 value='9' onclick="_hideEditor()" class="report1_3">9</td>
		<td colSpan=2 id="report1_E19" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G19" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H19" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_J19" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K19" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L19" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="20" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B20" colNo=2 value='免税劳务销售额' onclick="_hideEditor()" class="report1_3">免税劳务销售额</td>
		<td id="report1_D20" colNo=4 value='10' onclick="_hideEditor()" class="report1_3">10</td>
		<td colSpan=2 id="report1_E20" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G20" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H20" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_J20" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K20" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L20" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="21" height=20 style="height:20px;">
		<td rowSpan=14 id="report1_A21" colNo=1 value='税款计算' onclick="_hideEditor()" class="report1_19" style="border-bottom-style:solid;">税<br>款<br>计<br>算</td>
		<td colSpan=2 id="report1_B21" colNo=2 value='销项税额' onclick="_hideEditor()" class="report1_3">销项税额</td>
		<td id="report1_D21" colNo=4 value='11' onclick="_hideEditor()" class="report1_3">11</td>
		<td colSpan=2 id="report1_E21" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_21_5_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_21_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E33' ) )<=_parseValue( document.getElementById( 'report1_E29' ) )+_parseValue( document.getElementById( 'report1_E31' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E33,report1_E31,report1_E29" );}catch(e){}
			alert( '第23行 本月数≤第19+21行之和' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G21" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H21" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_J21" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K21" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L21" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="22" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B22" colNo=2 value='进项税额' onclick="_hideEditor()" class="report1_3">进项税额</td>
		<td id="report1_D22" colNo=4 value='12' onclick="_hideEditor()" class="report1_3">12</td>
		<td colSpan=2 id="report1_E22" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G22" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H22" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_J22" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K22" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L22" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="23" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B23" colNo=2 value='上期留抵税额' onclick="_hideEditor()" class="report1_3">上期留抵税额</td>
		<td id="report1_D23" colNo=4 value='13' onclick="_hideEditor()" class="report1_3">13</td>
		<td colSpan=2 id="report1_E23" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G23" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_27">0.00</td>
		<td colSpan=2 id="report1_H23" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_J23" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K23" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L23" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="24" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B24" colNo=2 value='进项税额转出' onclick="_hideEditor()" class="report1_3">进项税额转出</td>
		<td id="report1_D24" colNo=4 value='14' onclick="_hideEditor()" class="report1_3">14</td>
		<td colSpan=2 id="report1_E24" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G24" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H24" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_J24" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K24" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L24" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="25" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B25" colNo=2 value='免、抵、退应退税额' onclick="_hideEditor()" class="report1_3">免、抵、退应退税额</td>
		<td id="report1_D25" colNo=4 value='15' onclick="_hideEditor()" class="report1_3">15</td>
		<td colSpan=2 id="report1_E25" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G25" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H25" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_J25" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K25" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L25" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="26" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B26" colNo=2 value='按适用税率计算的纳税检查应补缴税额' onclick="_hideEditor()" class="report1_3">按适用税率计算的纳税检查应补缴税额</td>
		<td id="report1_D26" colNo=4 value='16' onclick="_hideEditor()" class="report1_3">16</td>
		<td colSpan=2 id="report1_E26" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G26" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H26" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_J26" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K26" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L26" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="27" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B27" colNo=2 value='应抵扣税额合计' onclick="_hideEditor()" class="report1_3">应抵扣税额合计</td>
		<td id="report1_D27" colNo=4 value='17=12+13-14-15+16' onclick="_hideEditor()" class="report1_3">17=12+13-14-15+16</td>
		<td colSpan=2 id="report1_E27" colNo=5 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7" style="border-right-style:solid;">0.00</td>
		<td id="report1_G27" colNo=7 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td colSpan=2 id="report1_H27" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_J27" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K27" colNo=11 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L27" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="28" height=35 style="height:35px;">
		<td colSpan=2 id="report1_B28" colNo=2 value='实际抵扣税额' onclick="_hideEditor()" class="report1_3">实际抵扣税额</td>
		<td id="report1_D28" colNo=4 value='18（如17<11,则为17,否则为11）' onclick="_hideEditor()" class="report1_3">18（如17&lt;11,则为17,<br>否则为11）</td>
		<td colSpan=2 id="report1_E28" colNo=5 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_G28" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_28">0.00</td>
		<td colSpan=2 id="report1_H28" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_J28" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K28" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L28" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="29" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B29" colNo=2 value='应纳税额' onclick="_hideEditor()" class="report1_3">应纳税额</td>
		<td id="report1_D29" colNo=4 value='19=11-18' onclick="_hideEditor()" class="report1_3">19=11-18</td>
		<td colSpan=2 id="report1_E29" colNo=5 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_G29" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H29" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_J29" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K29" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L29" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="30" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B30" colNo=2 value='期末留抵税额' onclick="_hideEditor()" class="report1_3">期末留抵税额</td>
		<td id="report1_D30" colNo=4 value='20=17-18' onclick="_hideEditor()" class="report1_3">20=17-18</td>
		<td colSpan=2 id="report1_E30" colNo=5 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_G30" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_28">0.00</td>
		<td colSpan=2 id="report1_H30" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_J30" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K30" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L30" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="31" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B31" colNo=2 value='简易征收办法计算的应纳税额' onclick="_hideEditor()" class="report1_3">简易征收办法计算的应纳税额</td>
		<td id="report1_D31" colNo=4 value='21' onclick="_hideEditor()" class="report1_3">21</td>
		<td colSpan=2 id="report1_E31" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_31_5_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_31_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E33' ) )<=_parseValue( document.getElementById( 'report1_E29' ) )+_parseValue( document.getElementById( 'report1_E31' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E33,report1_E31,report1_E29" );}catch(e){}
			alert( '第23行 本月数≤第19+21行之和' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G31" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H31" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_J31" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K31" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L31" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="32" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B32" colNo=2 value='按简易征收办法计算的 纳税检查应补缴税额' onclick="_hideEditor()" class="report1_3">按简易征收办法计算的&nbsp;纳税检查应补缴税额</td>
		<td id="report1_D32" colNo=4 value='22' onclick="_hideEditor()" class="report1_3">22</td>
		<td colSpan=2 id="report1_E32" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G32" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H32" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_J32" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K32" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L32" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="33" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B33" colNo=2 value='应纳税额减征额' onclick="_hideEditor()" class="report1_3">应纳税额减征额</td>
		<td id="report1_D33" colNo=4 value='23' onclick="_hideEditor()" class="report1_3">23</td>
		<td colSpan=2 id="report1_E33" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_33_5_dataValid()" onclick="_displayEditor()" class="report1_20">0.00</td>
<script language=javascript>
	function report1_33_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E33' ) )<=_parseValue( document.getElementById( 'report1_E29' ) )+_parseValue( document.getElementById( 'report1_E31' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E33,report1_E31,report1_E29" );}catch(e){}
			alert( '第23行 本月数≤第19+21行之和' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G33" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H33" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_33_8_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_33_8_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_H33' ) )<=_parseValue( document.getElementById( 'report1_H29' ) )+_parseValue( document.getElementById( 'report1_H31' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_H31,report1_H33,report1_H29" );}catch(e){}
			alert( '第23行 本月数≤第19+21行之和' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_J33" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K33" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L33" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="34" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B34" colNo=2 value='应纳税额合计' onclick="_hideEditor()" class="report1_3">应纳税额合计</td>
		<td id="report1_D34" colNo=4 value='24=19+21-23' onclick="_hideEditor()" class="report1_3">24=19+21-23</td>
		<td colSpan=2 id="report1_E34" colNo=5 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_G34" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H34" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_J34" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K34" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L34" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="35" height=20 style="height:20px;">
		<td rowSpan=14 id="report1_A35" colNo=1 value='税款缴纳' onclick="_hideEditor()" class="report1_8">税<br>款<br>缴<br>纳</td>
		<td colSpan=2 id="report1_B35" colNo=2 value='期初未缴税额（多缴为负数）' onclick="_hideEditor()" class="report1_3">期初未缴税额（多缴为负数）</td>
		<td id="report1_D35" colNo=4 value='25' onclick="_hideEditor()" class="report1_3">25</td>
		<td colSpan=2 id="report1_E35" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.0</td>
		<td id="report1_G35" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_20">0.00</td>
		<td colSpan=2 id="report1_H35" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_J35" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K35" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L35" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="36" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B36" colNo=2 value='实收出口开具专用缴款书退税额' onclick="_hideEditor()" class="report1_3">实收出口开具专用缴款书退税额</td>
		<td id="report1_D36" colNo=4 value='26' onclick="_hideEditor()" class="report1_3">26</td>
		<td colSpan=2 id="report1_E36" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G36" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H36" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_J36" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K36" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L36" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="37" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B37" colNo=2 value='本期已缴税额' onclick="_hideEditor()" class="report1_3">本期已缴税额</td>
		<td id="report1_D37" colNo=4 value='27=28+29+30+31' onclick="_hideEditor()" class="report1_3">27=28+29+30+31</td>
		<td colSpan=2 id="report1_E37" colNo=5 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_G37" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H37" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_J37" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K37" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L37" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="38" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B38" colNo=2 value='①分次预缴税额' onclick="_hideEditor()" class="report1_3">①分次预缴税额</td>
		<td id="report1_D38" colNo=4 value='28' onclick="_hideEditor()" class="report1_3">28</td>
		<td colSpan=2 id="report1_E38" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_16" style="border-right-style:solid;">0.00</td>
		<td id="report1_G38" colNo=7 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td colSpan=2 id="report1_H38" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_J38" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K38" colNo=11 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L38" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="39" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B39" colNo=2 value='②出口开具专用缴款书预缴税额' onclick="_hideEditor()" class="report1_3">②出口开具专用缴款书预缴税额</td>
		<td id="report1_D39" colNo=4 value='29' onclick="_hideEditor()" class="report1_3">29</td>
		<td colSpan=2 id="report1_E39" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_16" style="border-right-style:solid;">0.00</td>
		<td id="report1_G39" colNo=7 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td colSpan=2 id="report1_H39" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_J39" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K39" colNo=11 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L39" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="40" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B40" colNo=2 value='③本期缴纳上期应纳税额' onclick="_hideEditor()" class="report1_3">③本期缴纳上期应纳税额</td>
		<td id="report1_D40" colNo=4 value='30' onclick="_hideEditor()" class="report1_3">30</td>
		<td colSpan=2 id="report1_E40" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G40" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H40" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_20">0.00</td>
		<td id="report1_J40" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K40" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L40" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="41" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B41" colNo=2 value='④本期缴纳欠缴税额' onclick="_hideEditor()" class="report1_3">④本期缴纳欠缴税额</td>
		<td id="report1_D41" colNo=4 value='31' onclick="_hideEditor()" class="report1_3">31</td>
		<td colSpan=2 id="report1_E41" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G41" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H41" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_J41" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K41" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L41" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="42" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B42" colNo=2 value='期末未缴税额（多缴为负数）' onclick="_hideEditor()" class="report1_3">期末未缴税额（多缴为负数）</td>
		<td id="report1_D42" colNo=4 value='32=24+25+26-27' onclick="_hideEditor()" class="report1_3">32=24+25+26-27</td>
		<td colSpan=2 id="report1_E42" colNo=5 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_G42" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H42" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_J42" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_K42" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L42" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="43" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B43" colNo=2 value='其中：欠缴税额（≥0）' onclick="_hideEditor()" class="report1_3">其中：欠缴税额（≥0）</td>
		<td id="report1_D43" colNo=4 value='33=25+26-27' onclick="_hideEditor()" class="report1_3">33=25+26-27</td>
		<td colSpan=2 id="report1_E43" colNo=5 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7" style="border-right-style:solid;">0.00</td>
		<td id="report1_G43" colNo=7 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td colSpan=2 id="report1_H43" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_J43" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K43" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L43" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="44" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B44" colNo=2 value='本期应补（退）税额' onclick="_hideEditor()" class="report1_3">本期应补（退）税额</td>
		<td id="report1_D44" colNo=4 value='34=24-28-29' onclick="_hideEditor()" class="report1_3">34=24-28-29</td>
		<td colSpan=2 id="report1_E44" colNo=5 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7" style="border-right-style:solid;">0.00</td>
		<td id="report1_G44" colNo=7 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td colSpan=2 id="report1_H44" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_J44" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K44" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L44" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="45" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B45" colNo=2 value='即征即退实际退税额' onclick="_hideEditor()" class="report1_3">即征即退实际退税额</td>
		<td id="report1_D45" colNo=4 value='35' onclick="_hideEditor()" class="report1_3">35</td>
		<td colSpan=2 id="report1_E45" colNo=5 value='--' onclick="_hideEditor()" class="report1_9" style="border-right-style:solid;">--</td>
		<td id="report1_G45" colNo=7 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td colSpan=2 id="report1_H45" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_20">0.00</td>
		<td id="report1_J45" colNo=10 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_20">0.00</td>
		<td id="report1_K45" colNo=11 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L45" colNo=12 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="46" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B46" colNo=2 value='期初未缴查补税额' onclick="_hideEditor()" class="report1_3">期初未缴查补税额</td>
		<td id="report1_D46" colNo=4 value='36' onclick="_hideEditor()" class="report1_3">36</td>
		<td colSpan=2 id="report1_E46" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G46" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_20">0.00</td>
		<td colSpan=2 id="report1_H46" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_J46" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K46" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L46" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="47" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B47" colNo=2 value='本期入库查补税额' onclick="_hideEditor()" class="report1_3">本期入库查补税额</td>
		<td id="report1_D47" colNo=4 value='37' onclick="_hideEditor()" class="report1_3">37</td>
		<td colSpan=2 id="report1_E47" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_G47" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td colSpan=2 id="report1_H47" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_J47" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K47" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L47" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="48" height=20 style="height:20px;">
		<td colSpan=2 id="report1_B48" colNo=2 value='期末未缴查补税额' onclick="_hideEditor()" class="report1_3">期末未缴查补税额</td>
		<td id="report1_D48" colNo=4 value='38=16+22+36-37' onclick="_hideEditor()" class="report1_3">38=16+22+36-37</td>
		<td colSpan=2 id="report1_E48" colNo=5 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_5">0.00</td>
		<td id="report1_G48" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_48_7_dataValid()" onclick="_displayEditor()" class="report1_20">0.00</td>
<script language=javascript>
	function report1_48_7_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E48' ) )==_parseValue( document.getElementById( 'report1_G48' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E48,report1_G48" );}catch(e){}
			alert( '第38行第1列=第38行第2列' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_H48" colNo=8 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_J48" colNo=10 value='--' onclick="_hideEditor()" class="report1_4">--</td>
		<td id="report1_K48" colNo=11 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L48" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="49" height=97 style="height:97px;">
		<td id="report1_A49" colNo=1 value='授权声明' onclick="_hideEditor()" class="report1_8">授<br>权<br>声<br>明</td>
		<td colSpan=3 id="report1_B49" colNo=2 value='如果你已委托代理人申报，请填写下列资料： 
为代理一切税务事宜，现授权                                            （地址）         为本纳税人的代理申报人，任何与本申报表有关的往来文件，都可寄予此人。
 　　　　　 　　　　授权人签字：' onclick="_hideEditor()" class="report1_3">如果你已委托代理人申报，请填写下列资料：&nbsp;<br>为代理一切税务事宜，现授权&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（地址）&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为本纳税人的代理申报人，任何与本<br>申报表有关的往来文件，都可寄予此人。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;授权人签字：</td>
		<td id="report1_E49" colNo=5 value='申报人声明' onclick="_hideEditor()" class="report1_8">申<br>报<br>人<br>声<br>明</td>
		<td colSpan=5 id="report1_F49" colNo=6 value='此纳税申报表是根据《中华人民共和国增值税暂行条例》的规定填报的，我相信它是真实的、可靠的、完整的。 　　　　　 　
                             声明人签字：' onclick="_hideEditor()" class="report1_3">此纳税申报表是根据《中华人民共和国增值税暂行条例》的规定填报的，<br>我相信它是真实的、可靠的、完整的。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;声明人签字：</td>
		<td id="report1_K49" colNo=11 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L49" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_15" style="display:none;"></td>
	</tr>
	<tr rn="50" height=20 style="height:20px;">
		<td colSpan=10 id="report1_A50" colNo=1 value='以下由税务机关填写:' onclick="_hideEditor()" class="report1_26">以下由税务机关填写:</td>
		<td id="report1_K50" colNo=11 bkj="true" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
		<td id="report1_L50" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_14" style="display:none;"></td>
	</tr>
	<tr rn="51" height=1 style="height:1px;">
		<td rowSpan=2 colSpan=10 id="report1_A51" colNo=1 value='收到日期：                  接收人：                      主管税务机关盖章：' onclick="_hideEditor()" class="report1_17">收到日期：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接收人：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主管税务机关盖章：</td>
		<td id="report1_K51" colNo=11 bkj="true" value='' onclick="_hideEditor()" class="report1_12" style="display:none;"></td>
		<td id="report1_L51" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_15" style="display:none;"></td>
	</tr>
	<tr rn="52" height=22 style="height:22px;">
		<td id="report1_K52" colNo=11 bkj="true" value='' onclick="_hideEditor()" class="report1_18" style="display:none;"></td>
		<td id="report1_L52" colNo=12 bkj="true" value='' onclick="_hideEditor()" class="report1_25" style="display:none;"></td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,E11,K11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E11' ) )+_parseValue( document.getElementById( 'report1_K11' ) )).toFixed(2);
				document.getElementById( 'report1_G11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G11' ) );
			}catch(e1){}
		}
		cells = ",,H11,L11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H11' ) )+_parseValue( document.getElementById( 'report1_L11' ) )).toFixed(2);
				document.getElementById( 'report1_J11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J11' ) );
			}catch(e1){}
		}
		cells = ",,E12,K12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E12' ) )+_parseValue( document.getElementById( 'report1_K12' ) )).toFixed(2);
				document.getElementById( 'report1_G12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G12' ) );
			}catch(e1){}
		}
		cells = ",,H12,L12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H12' ) )+_parseValue( document.getElementById( 'report1_L12' ) )).toFixed(2);
				document.getElementById( 'report1_J12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J12' ) );
			}catch(e1){}
		}
		cells = ",,E13,K13,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E13' ) )+_parseValue( document.getElementById( 'report1_K13' ) )).toFixed(2);
				document.getElementById( 'report1_G13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G13' ) );
			}catch(e1){}
		}
		cells = ",,H13,L13,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H13' ) )+_parseValue( document.getElementById( 'report1_L13' ) )).toFixed(2);
				document.getElementById( 'report1_J13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J13' ) );
			}catch(e1){}
		}
		cells = ",,E14,K14,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E14' ) )+_parseValue( document.getElementById( 'report1_K14' ) )).toFixed(2);
				document.getElementById( 'report1_G14' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G14' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G14' ) );
			}catch(e1){}
		}
		cells = ",,H14,L14,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H14' ) )+_parseValue( document.getElementById( 'report1_L14' ) )).toFixed(2);
				document.getElementById( 'report1_J14' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J14' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J14' ) );
			}catch(e1){}
		}
		cells = ",,E15,K15,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E15' ) )+_parseValue( document.getElementById( 'report1_K15' ) )).toFixed(2);
				document.getElementById( 'report1_G15' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G15' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G15' ) );
			}catch(e1){}
		}
		cells = ",,H15,L15,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H15' ) )+_parseValue( document.getElementById( 'report1_L15' ) )).toFixed(2);
				document.getElementById( 'report1_J15' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J15' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J15' ) );
			}catch(e1){}
		}
		cells = ",,E16,K16,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E16' ) )+_parseValue( document.getElementById( 'report1_K16' ) )).toFixed(2);
				document.getElementById( 'report1_G16' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G16' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G16' ) );
			}catch(e1){}
		}
		cells = ",,H16,L16,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H16' ) )+_parseValue( document.getElementById( 'report1_L16' ) )).toFixed(2);
				document.getElementById( 'report1_J16' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J16' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J16' ) );
			}catch(e1){}
		}
		cells = ",,E17,K17,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E17' ) )+_parseValue( document.getElementById( 'report1_K17' ) )).toFixed(2);
				document.getElementById( 'report1_G17' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G17' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G17' ) );
			}catch(e1){}
		}
		cells = ",,E18,K18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E18' ) )+_parseValue( document.getElementById( 'report1_K18' ) )).toFixed(2);
				document.getElementById( 'report1_G18' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G18' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G18' ) );
			}catch(e1){}
		}
		cells = ",,E19,K19,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E19' ) )+_parseValue( document.getElementById( 'report1_K19' ) )).toFixed(2);
				document.getElementById( 'report1_G19' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G19' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G19' ) );
			}catch(e1){}
		}
		cells = ",,E20,K20,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E20' ) )+_parseValue( document.getElementById( 'report1_K20' ) )).toFixed(2);
				document.getElementById( 'report1_G20' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G20' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G20' ) );
			}catch(e1){}
		}
		cells = ",,E21,K21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E21' ) )+_parseValue( document.getElementById( 'report1_K21' ) )).toFixed(2);
				document.getElementById( 'report1_G21' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G21' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G21' ) );
			}catch(e1){}
		}
		cells = ",,H21,L21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H21' ) )+_parseValue( document.getElementById( 'report1_L21' ) )).toFixed(2);
				document.getElementById( 'report1_J21' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J21' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J21' ) );
			}catch(e1){}
		}
		cells = ",,E22,K22,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E22' ) )+_parseValue( document.getElementById( 'report1_K22' ) )).toFixed(2);
				document.getElementById( 'report1_G22' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G22' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G22' ) );
			}catch(e1){}
		}
		cells = ",,H22,L22,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H22' ) )+_parseValue( document.getElementById( 'report1_L22' ) )).toFixed(2);
				document.getElementById( 'report1_J22' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J22' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J22' ) );
			}catch(e1){}
		}
		cells = ",,E24,K24,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E24' ) )+_parseValue( document.getElementById( 'report1_K24' ) )).toFixed(2);
				document.getElementById( 'report1_G24' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G24' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G24' ) );
			}catch(e1){}
		}
		cells = ",,H24,L24,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H24' ) )+_parseValue( document.getElementById( 'report1_L24' ) )).toFixed(2);
				document.getElementById( 'report1_J24' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J24' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J24' ) );
			}catch(e1){}
		}
		cells = ",,E25,K25,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E25' ) )+_parseValue( document.getElementById( 'report1_K25' ) )).toFixed(2);
				document.getElementById( 'report1_G25' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G25' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G25' ) );
			}catch(e1){}
		}
		cells = ",,E26,K26,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E26' ) )+_parseValue( document.getElementById( 'report1_K26' ) )).toFixed(2);
				document.getElementById( 'report1_G26' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G26' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G26' ) );
			}catch(e1){}
		}
		cells = ",,E22,E23,E24,E25,E26,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E22' ) )+_parseValue( document.getElementById( 'report1_E23' ) )-_parseValue( document.getElementById( 'report1_E24' ) )-_parseValue( document.getElementById( 'report1_E25' ) )+_parseValue( document.getElementById( 'report1_E26' ) )).toFixed(2);
				document.getElementById( 'report1_E27' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E27' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E27' ) );
			}catch(e1){}
		}
		cells = ",,H22,H23,H24,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H22' ) )+_parseValue( document.getElementById( 'report1_H23' ) )-_parseValue( document.getElementById( 'report1_H24' ) )).toFixed(2);
				document.getElementById( 'report1_H27' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H27' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H27' ) );
			}catch(e1){}
		}
		cells = ",,E27,E22,E23,E24,E25,E26,E21,E27,E22,E23,E24,E25,E26,E21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E27' ) )<_parseValue( document.getElementById( 'report1_E21' ) )?_parseValue( document.getElementById( 'report1_E27' ) ):_parseValue( document.getElementById( 'report1_E21' ) )).toFixed(2);
				document.getElementById( 'report1_E28' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E28' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E28' ) );
			}catch(e1){}
		}
		cells = ",,H27,H22,H23,H24,H21,H27,H22,H23,H24,H21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H27' ) )<_parseValue( document.getElementById( 'report1_H21' ) )?_parseValue( document.getElementById( 'report1_H27' ) ):_parseValue( document.getElementById( 'report1_H21' ) )).toFixed(2);
				document.getElementById( 'report1_H28' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H28' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H28' ) );
			}catch(e1){}
		}
		cells = ",,H28,H27,H22,H23,H24,H21,H27,H22,H23,H24,H21,L28,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H28' ) )+_parseValue( document.getElementById( 'report1_L28' ) )).toFixed(2);
				document.getElementById( 'report1_J28' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J28' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J28' ) );
			}catch(e1){}
		}
		cells = ",,E21,E28,E27,E22,E23,E24,E25,E26,E21,E27,E22,E23,E24,E25,E26,E21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E21' ) )-_parseValue( document.getElementById( 'report1_E28' ) )).toFixed(2);
				document.getElementById( 'report1_E29' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E29' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E29' ) );
			}catch(e1){}
		}
		cells = ",,E29,E21,E28,E27,E22,E23,E24,E25,E26,E21,E27,E22,E23,E24,E25,E26,E21,K29,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E29' ) )+_parseValue( document.getElementById( 'report1_K29' ) )).toFixed(2);
				document.getElementById( 'report1_G29' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G29' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G29' ) );
			}catch(e1){}
		}
		cells = ",,H21,H28,H27,H22,H23,H24,H21,H27,H22,H23,H24,H21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H21' ) )-_parseValue( document.getElementById( 'report1_H28' ) )).toFixed(2);
				document.getElementById( 'report1_H29' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H29' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H29' ) );
			}catch(e1){}
		}
		cells = ",,H29,H21,H28,H27,H22,H23,H24,H21,H27,H22,H23,H24,H21,L29,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H29' ) )+_parseValue( document.getElementById( 'report1_L29' ) )).toFixed(2);
				document.getElementById( 'report1_J29' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J29' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J29' ) );
			}catch(e1){}
		}
		cells = ",,E27,E22,E23,E24,E25,E26,E28,E27,E22,E23,E24,E25,E26,E21,E27,E22,E23,E24,E25,E26,E21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E27' ) )-_parseValue( document.getElementById( 'report1_E28' ) )).toFixed(2);
				document.getElementById( 'report1_E30' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E30' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E30' ) );
			}catch(e1){}
		}
		cells = ",,H27,H22,H23,H24,H28,H27,H22,H23,H24,H21,H27,H22,H23,H24,H21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H27' ) )-_parseValue( document.getElementById( 'report1_H28' ) )).toFixed(2);
				document.getElementById( 'report1_H30' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H30' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H30' ) );
			}catch(e1){}
		}
		cells = ",,E31,K31,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E31' ) )+_parseValue( document.getElementById( 'report1_K31' ) )).toFixed(2);
				document.getElementById( 'report1_G31' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G31' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G31' ) );
			}catch(e1){}
		}
		cells = ",,H31,L31,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H31' ) )+_parseValue( document.getElementById( 'report1_L31' ) )).toFixed(2);
				document.getElementById( 'report1_J31' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J31' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J31' ) );
			}catch(e1){}
		}
		cells = ",,E32,K32,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E32' ) )+_parseValue( document.getElementById( 'report1_K32' ) )).toFixed(2);
				document.getElementById( 'report1_G32' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G32' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G32' ) );
			}catch(e1){}
		}
		cells = ",,E33,K33,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E33' ) )+_parseValue( document.getElementById( 'report1_K33' ) )).toFixed(2);
				document.getElementById( 'report1_G33' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G33' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G33' ) );
			}catch(e1){}
		}
		cells = ",,H33,L33,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H33' ) )+_parseValue( document.getElementById( 'report1_L33' ) )).toFixed(2);
				document.getElementById( 'report1_J33' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J33' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J33' ) );
			}catch(e1){}
		}
		cells = ",,E29,E21,E28,E27,E22,E23,E24,E25,E26,E21,E27,E22,E23,E24,E25,E26,E21,E31,E33,E29,E21,E28,E27,E22,E23,E24,E25,E26,E21,E27,E22,E23,E24,E25,E26,E21,E31,E33,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E29' ) )+_parseValue( document.getElementById( 'report1_E31' ) )-_parseValue( document.getElementById( 'report1_E33' ) )<0?0:_parseValue( document.getElementById( 'report1_E29' ) )+_parseValue( document.getElementById( 'report1_E31' ) )-_parseValue( document.getElementById( 'report1_E33' ) )).toFixed(2);
				document.getElementById( 'report1_E34' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E34' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E34' ) );
			}catch(e1){}
		}
		cells = ",,E34,E29,E21,E28,E27,E22,E23,E24,E25,E26,E21,E27,E22,E23,E24,E25,E26,E21,E31,E33,E29,E21,E28,E27,E22,E23,E24,E25,E26,E21,E27,E22,E23,E24,E25,E26,E21,E31,E33,K34,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E34' ) )+_parseValue( document.getElementById( 'report1_K34' ) )).toFixed(2);
				document.getElementById( 'report1_G34' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G34' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G34' ) );
			}catch(e1){}
		}
		cells = ",,H29,H21,H28,H27,H22,H23,H24,H21,H27,H22,H23,H24,H21,H31,H33,H29,H21,H28,H27,H22,H23,H24,H21,H27,H22,H23,H24,H21,H31,H33,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H29' ) )+_parseValue( document.getElementById( 'report1_H31' ) )-_parseValue( document.getElementById( 'report1_H33' ) )<0?0:_parseValue( document.getElementById( 'report1_H29' ) )+_parseValue( document.getElementById( 'report1_H31' ) )-_parseValue( document.getElementById( 'report1_H33' ) )).toFixed(2);
				document.getElementById( 'report1_H34' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H34' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H34' ) );
			}catch(e1){}
		}
		cells = ",,H34,H29,H21,H28,H27,H22,H23,H24,H21,H27,H22,H23,H24,H21,H31,H33,H29,H21,H28,H27,H22,H23,H24,H21,H27,H22,H23,H24,H21,H31,H33,L34,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H34' ) )+_parseValue( document.getElementById( 'report1_L34' ) )).toFixed(2);
				document.getElementById( 'report1_J34' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J34' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J34' ) );
			}catch(e1){}
		}
		cells = ",,L35,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_L35' ) )).toFixed(2);
				document.getElementById( 'report1_J35' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J35' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J35' ) );
			}catch(e1){}
		}
		cells = ",,E36,K36,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E36' ) )+_parseValue( document.getElementById( 'report1_K36' ) )).toFixed(2);
				document.getElementById( 'report1_G36' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G36' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G36' ) );
			}catch(e1){}
		}
		cells = ",,E38,E39,E40,E41,E38,E39,E40,E41,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E38' ) )+_parseValue( document.getElementById( 'report1_E39' ) )+_parseValue( document.getElementById( 'report1_E40' ) )+_parseValue( document.getElementById( 'report1_E41' ) )<0?0:_parseValue( document.getElementById( 'report1_E38' ) )+_parseValue( document.getElementById( 'report1_E39' ) )+_parseValue( document.getElementById( 'report1_E40' ) )+_parseValue( document.getElementById( 'report1_E41' ) )).toFixed(2);
				document.getElementById( 'report1_E37' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E37' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E37' ) );
			}catch(e1){}
		}
		cells = ",,E37,E38,E39,E40,E41,E38,E39,E40,E41,K37,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E37' ) )+_parseValue( document.getElementById( 'report1_K37' ) )).toFixed(2);
				document.getElementById( 'report1_G37' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G37' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G37' ) );
			}catch(e1){}
		}
		cells = ",,H38,H40,H41,H38,H40,H41,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H38' ) )+_parseValue( document.getElementById( 'report1_H40' ) )+_parseValue( document.getElementById( 'report1_H41' ) )<0?0:_parseValue( document.getElementById( 'report1_H38' ) )+_parseValue( document.getElementById( 'report1_H40' ) )+_parseValue( document.getElementById( 'report1_H41' ) )).toFixed(2);
				document.getElementById( 'report1_H37' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H37' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H37' ) );
			}catch(e1){}
		}
		cells = ",,H37,H38,H40,H41,H38,H40,H41,L37,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H37' ) )+_parseValue( document.getElementById( 'report1_L37' ) )).toFixed(2);
				document.getElementById( 'report1_J37' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J37' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J37' ) );
			}catch(e1){}
		}
		cells = ",,E40,K40,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E40' ) )+_parseValue( document.getElementById( 'report1_K40' ) )).toFixed(2);
				document.getElementById( 'report1_G40' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G40' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G40' ) );
			}catch(e1){}
		}
		cells = ",,H40,L40,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H40' ) )+_parseValue( document.getElementById( 'report1_L40' ) )).toFixed(2);
				document.getElementById( 'report1_J40' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J40' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J40' ) );
			}catch(e1){}
		}
		cells = ",,E41,K41,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E41' ) )+_parseValue( document.getElementById( 'report1_K41' ) )).toFixed(2);
				document.getElementById( 'report1_G41' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G41' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G41' ) );
			}catch(e1){}
		}
		cells = ",,H41,L41,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H41' ) )+_parseValue( document.getElementById( 'report1_L41' ) )).toFixed(2);
				document.getElementById( 'report1_J41' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J41' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J41' ) );
			}catch(e1){}
		}
		cells = ",,E34,E29,E21,E28,E27,E22,E23,E24,E25,E26,E21,E27,E22,E23,E24,E25,E26,E21,E31,E33,E29,E21,E28,E27,E22,E23,E24,E25,E26,E21,E27,E22,E23,E24,E25,E26,E21,E31,E33,E35,E36,E37,E38,E39,E40,E41,E38,E39,E40,E41,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E34' ) )+_parseValue( document.getElementById( 'report1_E35' ) )+_parseValue( document.getElementById( 'report1_E36' ) )-_parseValue( document.getElementById( 'report1_E37' ) )).toFixed(2);
				document.getElementById( 'report1_E42' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E42' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E42' ) );
			}catch(e1){}
		}
		cells = ",,E42,E34,E29,E21,E28,E27,E22,E23,E24,E25,E26,E21,E27,E22,E23,E24,E25,E26,E21,E31,E33,E29,E21,E28,E27,E22,E23,E24,E25,E26,E21,E27,E22,E23,E24,E25,E26,E21,E31,E33,E35,E36,E37,E38,E39,E40,E41,E38,E39,E40,E41,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E42' ) )).toFixed(2);
				document.getElementById( 'report1_G42' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G42' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G42' ) );
			}catch(e1){}
		}
		cells = ",,H34,H29,H21,H28,H27,H22,H23,H24,H21,H27,H22,H23,H24,H21,H31,H33,H29,H21,H28,H27,H22,H23,H24,H21,H27,H22,H23,H24,H21,H31,H33,H35,H37,H38,H40,H41,H38,H40,H41,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H34' ) )+_parseValue( document.getElementById( 'report1_H35' ) )-_parseValue( document.getElementById( 'report1_H37' ) )).toFixed(2);
				document.getElementById( 'report1_H42' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H42' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H42' ) );
			}catch(e1){}
		}
		cells = ",,H42,H34,H29,H21,H28,H27,H22,H23,H24,H21,H27,H22,H23,H24,H21,H31,H33,H29,H21,H28,H27,H22,H23,H24,H21,H27,H22,H23,H24,H21,H31,H33,H35,H37,H38,H40,H41,H38,H40,H41,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H42' ) )).toFixed(2);
				document.getElementById( 'report1_J42' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_J42' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_J42' ) );
			}catch(e1){}
		}
		cells = ",,E35,E36,E37,E38,E39,E40,E41,E38,E39,E40,E41,E35,E36,E37,E38,E39,E40,E41,E38,E39,E40,E41,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E35' ) )+_parseValue( document.getElementById( 'report1_E36' ) )-_parseValue( document.getElementById( 'report1_E37' ) )<0?0:_parseValue( document.getElementById( 'report1_E35' ) )+_parseValue( document.getElementById( 'report1_E36' ) )-_parseValue( document.getElementById( 'report1_E37' ) )).toFixed(2);
				document.getElementById( 'report1_E43' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E43' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E43' ) );
			}catch(e1){}
		}
		cells = ",,H35,H37,H38,H40,H41,H38,H40,H41,H35,H37,H38,H40,H41,H38,H40,H41,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H35' ) )-_parseValue( document.getElementById( 'report1_H37' ) )<0?0:_parseValue( document.getElementById( 'report1_H35' ) )-_parseValue( document.getElementById( 'report1_H37' ) )).toFixed(2);
				document.getElementById( 'report1_H43' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H43' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H43' ) );
			}catch(e1){}
		}
		cells = ",,E34,E29,E21,E28,E27,E22,E23,E24,E25,E26,E21,E27,E22,E23,E24,E25,E26,E21,E31,E33,E29,E21,E28,E27,E22,E23,E24,E25,E26,E21,E27,E22,E23,E24,E25,E26,E21,E31,E33,E38,E39,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E34' ) )-_parseValue( document.getElementById( 'report1_E38' ) )-_parseValue( document.getElementById( 'report1_E39' ) )).toFixed(2);
				document.getElementById( 'report1_E44' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E44' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E44' ) );
			}catch(e1){}
		}
		cells = ",,H34,H29,H21,H28,H27,H22,H23,H24,H21,H27,H22,H23,H24,H21,H31,H33,H29,H21,H28,H27,H22,H23,H24,H21,H27,H22,H23,H24,H21,H31,H33,H38,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H34' ) )-_parseValue( document.getElementById( 'report1_H38' ) )).toFixed(2);
				document.getElementById( 'report1_H44' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H44' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H44' ) );
			}catch(e1){}
		}
		cells = ",,E47,K47,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E47' ) )+_parseValue( document.getElementById( 'report1_K47' ) )).toFixed(2);
				document.getElementById( 'report1_G47' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G47' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G47' ) );
			}catch(e1){}
		}
		cells = ",,E26,E32,E46,E47,E26,E32,E46,E47,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E26' ) )+_parseValue( document.getElementById( 'report1_E32' ) )+_parseValue( document.getElementById( 'report1_E46' ) )-_parseValue( document.getElementById( 'report1_E47' ) )<0?0:_parseValue( document.getElementById( 'report1_E26' ) )+_parseValue( document.getElementById( 'report1_E32' ) )+_parseValue( document.getElementById( 'report1_E46' ) )-_parseValue( document.getElementById( 'report1_E47' ) )).toFixed(2);
				document.getElementById( 'report1_E48' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E48' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E48' ) );
			}catch(e1){}
		}
		try{ group_autoCalc( 'report1_' + cellName ); }catch(e){}
	}

	function report1_checkValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E33' ) )<=_parseValue( document.getElementById( 'report1_E29' ) )+_parseValue( document.getElementById( 'report1_E31' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E33,report1_E31,report1_E29" );}catch(e){}
			alert( '第23行 本月数≤第19+21行之和' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E33' ) )<=_parseValue( document.getElementById( 'report1_E29' ) )+_parseValue( document.getElementById( 'report1_E31' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E33,report1_E31,report1_E29" );}catch(e){}
			alert( '第23行 本月数≤第19+21行之和' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E33' ) )<=_parseValue( document.getElementById( 'report1_E29' ) )+_parseValue( document.getElementById( 'report1_E31' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E33,report1_E31,report1_E29" );}catch(e){}
			alert( '第23行 本月数≤第19+21行之和' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_H33' ) )<=_parseValue( document.getElementById( 'report1_H29' ) )+_parseValue( document.getElementById( 'report1_H31' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_H31,report1_H33,report1_H29" );}catch(e){}
			alert( '第23行 本月数≤第19+21行之和' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E48' ) )==_parseValue( document.getElementById( 'report1_G48' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E48,report1_G48" );}catch(e){}
			alert( '第38行第1列=第38行第2列' );
			return false;
		}
		return true;
	}

</script>
</div>
</td></tr></table>
<div style="display:none"><form id="report1_submitForm" method=post action="/WSSBSL/reportServlet.aspx?action=11" target="submitFrame">
	<input type=hidden name=fileName value="/zzs2013Ybnsr/ybnsrZb.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_41509">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showReport.jsp?raq=%2Fzzs2013Ybnsr%2FybnsrZb.raq&nsrsbh=450100399111430&sbzt=0&skssq=20171111&ssqq=2017-11-01&ssqz=2017-11-30&isTbBz=0&szlbDm=22&reportParamsId=1512356358944288140646">
	<input type=hidden name=backAndRefresh value="/reportJsp/success.jsp">
	<input type=hidden name=promptAfterSave value="no">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_ZZS_2003_YBNSR;xmlName=zzs2013/zzs_ybnsr_zb;sbzt=0;ssqq=2017-11-01;skssq=20171111;nsrsbh=450100399111430;raq=/zzs2013Ybnsr/ybnsrZb.raq;ssqz=2017-11-30;szlbDm=22;isTbBz=0">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/zzs2013Ybnsr/ybnsrZb.raq&srcType=file&cachedId=10_1_1_176_8080_41509&isScroll=0&backAndRefresh=/reportJsp/success.jsp&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_ZZS_2003_YBNSR%3BxmlName%3Dzzs2013%2Fzzs_ybnsr_zb%3Bsbzt%3D0%3Bssqq%3D2017-11-01%3Bskssq%3D20171111%3Bnsrsbh%3D450100399111430%3Braq%3D%2Fzzs2013Ybnsr%2FybnsrZb.raq%3Bssqz%3D2017-11-30%3BszlbDm%3D22%3BisTbBz%3D0&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

