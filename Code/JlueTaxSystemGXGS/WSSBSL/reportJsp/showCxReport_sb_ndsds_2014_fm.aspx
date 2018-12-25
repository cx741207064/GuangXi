<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_sb_ndsds_2014_fm.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_sb_ndsds_2014_fm" %>










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
	var report1_cachedId = "10_1_1_176_8080_74725";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2FndsdsA%2Fsb_ndsds_2014_fm.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15115066318206415172188&cachedId=10_1_1_176_8080_74725&t_i_m_e=1511506631835" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2FndsdsA%2Fsb_ndsds_2014_fm.raq&columns=0&srcType=file&reportParamsId=15115066318206415172188&cachedId=10_1_1_176_8080_74725&t_i_m_e=1511506631835" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2FndsdsA%2Fsb_ndsds_2014_fm.raq&columns=0&srcType=file&reportParamsId=15115066318206415172188&cachedId=10_1_1_176_8080_74725&t_i_m_e=1511506631835";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2FndsdsA%2Fsb_ndsds_2014_fm.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15115066318206415172188&cachedId=10_1_1_176_8080_74725&t_i_m_e=1511506631835";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2FndsdsA%2Fsb_ndsds_2014_fm.raq&srcType=file&reportParamsId=15115066318206415172188&cachedId=10_1_1_176_8080_74725&t_i_m_e=1511506631835" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_fm.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15115066318206415172188&cachedId=10_1_1_176_8080_74725&t_i_m_e=1511506631835";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_fm.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15115066318206415172188&cachedId=10_1_1_176_8080_74725&t_i_m_e=1511506631835";
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
	function report1488710over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1488710out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_4 { text-align:right;vertical-align:top;font-family:宋体;font-size:14px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:18px;}
	.report1_5 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:center;vertical-align:top;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_8 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:right;vertical-align:bottom;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:left;vertical-align:top;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_12 { text-align:left;vertical-align:top;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_13 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_14 { text-align:left;vertical-align:top;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_15 { text-align:center;vertical-align:middle;font-family:宋体;font-size:22px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_16 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_17 { text-align:left;vertical-align:middle;font-family:宋体;font-size:14px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:18px;}
	.report1_18 { text-align:right;vertical-align:top;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_19 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_20 { text-align:left;vertical-align:middle;font-family:宋体;font-size:14px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1488710out()" onmouseover="report1488710over()" rowCount=24 cols=21 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:630px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:86px;"></col>
		<col style="width:18px;"></col>
		<col style="width:29px;"></col>
		<col style="width:17px;"></col>
		<col style="width:30px;"></col>
		<col style="width:17px;"></col>
		<col style="width:87px;"></col>
		<col style="width:20px;"></col>
		<col style="width:17px;"></col>
		<col style="width:21px;"></col>
		<col style="width:27px;"></col>
		<col style="width:12px;"></col>
		<col style="width:27px;"></col>
		<col style="width:15px;"></col>
		<col style="width:79px;"></col>
		<col style="width:35px;"></col>
		<col style="width:13px;"></col>
		<col style="width:25px;"></col>
		<col style="width:14px;"></col>
		<col style="width:25px;"></col>
		<col style="width:16px;"></col>
	</colgroup>
	<tr rn="1" height=69 style="height:69px;">
		<td colSpan=21 id="report1_A1" colNo=1 value='中华人民共和国企业所得税年度纳税申报表' onclick="_hideEditor()" class="report1_15">中华人民共和国企业所得税年度纳税申报表</td>
	</tr>
	<tr rn="2" height=25 style="height:25px;">
		<td colSpan=21 id="report1_A2" colNo=1 value='（A类 , 2014年版）' onclick="_hideEditor()" class="report1_6">（A类&nbsp;,&nbsp;2014年版）</td>
	</tr>
	<tr rn="3" height=25 style="height:25px;">
		<td colSpan=21 id="report1_A3" colNo=1 value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="4" height=25 style="height:25px;">
		<td colSpan=5 id="report1_A4" colNo=1 value=' 税款所属期间：' onclick="_hideEditor()" class="report1_5">&nbsp;税款所属期间：</td>
		<td colSpan=2 id="report1_F4" colNo=6 value='2016-01-01' onclick="_hideEditor()" class="report1_5">2016-01-01</td>
		<td id="report1_H4" colNo=8 value='至' onclick="_hideEditor()" class="report1_6">至</td>
		<td colSpan=13 id="report1_I4" colNo=9 value='2016-12-31' onclick="_hideEditor()" class="report1_2">2016-12-31</td>
	</tr>
	<tr rn="5" height=30 style="height:30px;">
		<td colSpan=21 id="report1_A5" colNo=1 value='' onclick="_hideEditor()" class="report1_18"></td>
	</tr>
	<tr rn="6" height=25 style="height:25px;">
		<td colSpan=5 id="report1_A6" colNo=1 value='纳税人识别号：' onclick="_hideEditor()" class="report1_3">纳税人识别号：</td>
		<td colSpan=16 id="report1_F6" colNo=6 value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_2">91450107MA5KE0EQ2B</td>
	</tr>
	<tr rn="7" height=20 style="height:20px;">
		<td colSpan=21 id="report1_A7" colNo=1 value='' onclick="_hideEditor()" class="report1_10"></td>
	</tr>
	<tr rn="8" height=25 style="height:25px;">
		<td colSpan=5 id="report1_A8" colNo=1 value='纳税人名称：' onclick="_hideEditor()" class="report1_3">纳税人名称：</td>
		<td colSpan=16 id="report1_F8" colNo=6 value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_2">广西龙森胜贸易有限公司</td>
	</tr>
	<tr rn="9" height=20 style="height:20px;">
		<td colSpan=21 id="report1_A9" colNo=1 value='' onclick="_hideEditor()" class="report1_12"></td>
	</tr>
	<tr rn="10" height=25 style="height:25px;">
		<td colSpan=5 id="report1_A10" colNo=1 value='金额单位：' onclick="_hideEditor()" class="report1_3">金额单位：</td>
		<td colSpan=16 id="report1_F10" colNo=6 value='人民币元（列至角分）' onclick="_hideEditor()" class="report1_2">人民币元（列至角分）</td>
	</tr>
	<tr rn="11" height=50 style="height:50px;">
		<td colSpan=21 id="report1_A11" colNo=1 value='' onclick="_hideEditor()" class="report1_20"></td>
	</tr>
	<tr rn="12" height=83 style="height:83px;">
		<td colSpan=21 id="report1_A12" colNo=1 value='    谨声明：此纳税申报表是根据《中华人民共和国企业所得税法》、《中华人民共和国企业所得税法实施条例》、有关税收政策以及国家统一会计制度的规定填报的，是真实的、可靠的、完整的。' onclick="_hideEditor()" class="report1_17">&nbsp;&nbsp;&nbsp;&nbsp;谨声明：此纳税申报表是根据《中华人民共和国企业所得税法》、《中华人民共和国企业<br>所得税法实施条例》、有关税收政策以及国家统一会计制度的规定填报的，是真实的、可靠<br>的、完整的。</td>
	</tr>
	<tr rn="13" height=25 style="height:25px;">
		<td colSpan=15 id="report1_A13" colNo=1 value='法定代表人（签章）：' onclick="_hideEditor()" class="report1_3">法定代表人（签章）：</td>
		<td id="report1_P13" colNo=16 value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_Q13" colNo=17 value='年' onclick="_hideEditor()" class="report1_6">年</td>
		<td id="report1_R13" colNo=18 value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_S13" colNo=19 value='月' onclick="_hideEditor()" class="report1_6">月</td>
		<td id="report1_T13" colNo=20 value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_U13" colNo=21 value='日' onclick="_hideEditor()" class="report1_6">日</td>
	</tr>
	<tr rn="14" height=21 style="height:21px;">
		<td colSpan=21 id="report1_A14" colNo=1 value='' onclick="_hideEditor()" class="report1_7"></td>
	</tr>
	<tr rn="15" height=21 style="height:21px;">
		<td rowSpan=5 colSpan=6 id="report1_A15" colNo=1 value='纳税人公章：' onclick="_hideEditor()" class="report1_14">纳税人公章：</td>
		<td rowSpan=5 colSpan=8 id="report1_G15" colNo=7 value='代理申报中介机构公章：' onclick="_hideEditor()" class="report1_14">代理申报中介机构公章：</td>
		<td rowSpan=5 colSpan=7 id="report1_O15" colNo=15 value='  主管税务机关受理专用章：' onclick="_hideEditor()" class="report1_14">&nbsp;&nbsp;主管税务机关受理专用章：</td>
	</tr>
	<tr rn="16" height=21 style="height:21px;">
	</tr>
	<tr rn="17" height=21 style="height:21px;">
	</tr>
	<tr rn="18" height=21 style="height:21px;">
	</tr>
	<tr rn="19" height=21 style="height:21px;">
	</tr>
	<tr rn="20" height=21 style="height:21px;">
		<td rowSpan=3 colSpan=6 id="report1_A20" colNo=1 value='会计主管：    ' onclick="_hideEditor()" class="report1_11">会计主管：&nbsp;&nbsp;&nbsp;&nbsp;</td>
		<td colSpan=8 id="report1_G20" colNo=7 value='经办人：' onclick="_hideEditor()" class="report1_9">经办人：</td>
		<td rowSpan=3 colSpan=7 id="report1_O20" colNo=15 value='  受理人：' onclick="_hideEditor()" class="report1_11">&nbsp;&nbsp;受理人：</td>
	</tr>
	<tr rn="21" height=21 style="height:21px;">
		<td colSpan=8 id="report1_G21" colNo=7 value='经办人执业证件号码：' onclick="_hideEditor()" class="report1_9">经办人执业证件号码：</td>
	</tr>
	<tr rn="22" height=21 style="height:21px;">
		<td colSpan=8 id="report1_G22" colNo=7 value='' onclick="_hideEditor()" class="report1_16"></td>
	</tr>
	<tr rn="23" height=21 style="height:21px;">
		<td id="report1_A23" colNo=1 value='填表日期： ' onclick="_hideEditor()" class="report1_8">填表日期：&nbsp;</td>
		<td id="report1_B23" colNo=2 value='年' onclick="_hideEditor()" class="report1_1">年</td>
		<td id="report1_C23" colNo=3 value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_D23" colNo=4 value='月' onclick="_hideEditor()" class="report1_1">月</td>
		<td id="report1_E23" colNo=5 value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_F23" colNo=6 value='日' onclick="_hideEditor()" class="report1_13">日</td>
		<td id="report1_G23" colNo=7 value='代理申报日期: ' onclick="_hideEditor()" class="report1_8">代理申报日期:&nbsp;</td>
		<td colSpan=2 id="report1_H23" colNo=8 value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_J23" colNo=10 value='年' onclick="_hideEditor()" class="report1_1">年</td>
		<td id="report1_K23" colNo=11 value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_L23" colNo=12 value='月' onclick="_hideEditor()" class="report1_1">月</td>
		<td id="report1_M23" colNo=13 value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_N23" colNo=14 value='日' onclick="_hideEditor()" class="report1_13">日</td>
		<td id="report1_O23" colNo=15 value='  受理日期：' onclick="_hideEditor()" class="report1_19">&nbsp;&nbsp;受理日期：</td>
		<td id="report1_P23" colNo=16 value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_Q23" colNo=17 value='年' onclick="_hideEditor()" class="report1_1">年</td>
		<td id="report1_R23" colNo=18 value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_S23" colNo=19 value='月' onclick="_hideEditor()" class="report1_1">月</td>
		<td id="report1_T23" colNo=20 value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_U23" colNo=21 value='日' onclick="_hideEditor()" class="report1_13">日</td>
	</tr>
	<tr rn="24" height=21 style="height:21px;">
		<td colSpan=21 id="report1_A24" colNo=1 value='国家税务总局监制' onclick="_hideEditor()" class="report1_4">国家税务总局监制</td>
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
		return true;
	}

</script>
</div>
</td></tr></table>
<div style="display:none"><form id="report1_submitForm" method=post action="/WSSBSL/reportServlet.aspx?action=11" target="submitFrame">
	<input type=hidden name=fileName value="/ndsdsA/sb_ndsds_2014_fm.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_74725">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2FndsdsA%2Fsb_ndsds_2014_fm.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000015884336&sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466&reportParamsId=15115066318206415172188">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=SB_NDSDS_2014_FM;xmlName=ndsdsA/sb_ndsds_2014_fm;pzxh=10014517000015884336;nsrsbh=91450107MA5KE0EQ2B;dataFromBz=0;raq=/ndsdsA/sb_ndsds_2014_fm.raq;sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/ndsdsA/sb_ndsds_2014_fm.raq&srcType=file&cachedId=10_1_1_176_8080_74725&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DSB_NDSDS_2014_FM%3BxmlName%3DndsdsA%2Fsb_ndsds_2014_fm%3Bpzxh%3D10014517000015884336%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdataFromBz%3D0%3Braq%3D%2FndsdsA%2Fsb_ndsds_2014_fm.raq%3Bsbuuid%3D4F35CE4F88AE666EB53FF3AE9DC76466%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

