<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_sb_ndsds_2014_zb.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_sb_ndsds_2014_zb" %>










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
	var report1_cachedId = "10_1_1_176_8080_74730";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2FndsdsA%2Fsb_ndsds_2014_zb.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15115066322563380172192&cachedId=10_1_1_176_8080_74730&t_i_m_e=1511506632288" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2FndsdsA%2Fsb_ndsds_2014_zb.raq&columns=0&srcType=file&reportParamsId=15115066322563380172192&cachedId=10_1_1_176_8080_74730&t_i_m_e=1511506632288" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2FndsdsA%2Fsb_ndsds_2014_zb.raq&columns=0&srcType=file&reportParamsId=15115066322563380172192&cachedId=10_1_1_176_8080_74730&t_i_m_e=1511506632288";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2FndsdsA%2Fsb_ndsds_2014_zb.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15115066322563380172192&cachedId=10_1_1_176_8080_74730&t_i_m_e=1511506632288";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2FndsdsA%2Fsb_ndsds_2014_zb.raq&srcType=file&reportParamsId=15115066322563380172192&cachedId=10_1_1_176_8080_74730&t_i_m_e=1511506632288" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_zb.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15115066322563380172192&cachedId=10_1_1_176_8080_74730&t_i_m_e=1511506632288";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_zb.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15115066322563380172192&cachedId=10_1_1_176_8080_74730&t_i_m_e=1511506632288";
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
	function report1488711over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1488711out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:center;vertical-align:top;font-family:宋体;font-size:18px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:24px;}
	.report1_2 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_4 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_10 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_12 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_13 { text-align:left;vertical-align:top;font-family:宋体;font-size:18px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_14 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_15 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_16 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000E1;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1488711out()" onmouseover="report1488711over()" rowCount=42 cols=5 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:717px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:48px;"></col>
		<col style="width:114px;"></col>
		<col style="width:435px;"></col>
		<col style="width:120px;"></col>
	</colgroup>
	<tr rn="1" height=25 style="height:25px;">
		<td colSpan=4 id="report1_A1" colNo=1 value='10014517000015884336' onclick="_hideEditor()" class="report1_13">A100000</td>
		<td id="report1_E1" colNo=5 value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_10" style="display:none;">91450107MA5KE0EQ2B</td>
	</tr>
	<tr rn="2" height=25 style="height:25px;">
		<td colSpan=4 id="report1_A2" colNo=1 value='10014517000015884336' onclick="_hideEditor()" class="report1_1">中华人民共和国企业所得税年度纳税申报表（A类）</td>
		<td id="report1_E2" colNo=5 bkj="true" value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="3" height=20 style="height:20px;">
		<td id="report1_A3" colNo=1 value='行次' onclick="_hideEditor()" class="report1_4">行次</td>
		<td id="report1_B3" colNo=2 value='类别' onclick="_hideEditor()" class="report1_3">类别</td>
		<td id="report1_C3" colNo=3 value='项        目' onclick="_hideEditor()" class="report1_4">项&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目</td>
		<td id="report1_D3" colNo=4 value='金    额' onclick="_hideEditor()" class="report1_4">金&nbsp;&nbsp;&nbsp;&nbsp;额</td>
		<td id="report1_E3" colNo=5 bkj="true" value='2016-01-01' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="4" height=20 style="height:20px;">
		<td id="report1_A4" colNo=1 value='1' onclick="_hideEditor()" class="report1_4">1</td>
		<td rowSpan=13 id="report1_B4" colNo=2 value='利润总额计算' onclick="_hideEditor()" class="report1_3">利润总额计算</td>
		<td id="report1_C4" colNo=3 value='一、营业收入(填写A101010\101020\103000)' onclick="_hideEditor()" class="report1_6">一、营业收入(填写A101010\101020\103000)</td>
		<td id="report1_D4" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='153861.42' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">153861.42</td>
		<td id="report1_E4" colNo=5 bkj="true" value='2016-12-31' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="5" height=20 style="height:20px;">
		<td id="report1_A5" colNo=1 value='2' onclick="_hideEditor()" class="report1_4">2</td>
		<td id="report1_C5" colNo=3 value='    减：营业成本(填写A102010\102020\103000)' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;减：营业成本(填写A102010\102020\103000)</td>
		<td id="report1_D5" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='286263.17' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">286263.17</td>
		<td id="report1_E5" colNo=5 bkj="true" value='2017-05-08' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="6" height=20 style="height:20px;">
		<td id="report1_A6" colNo=1 value='3' onclick="_hideEditor()" class="report1_4">3</td>
		<td id="report1_C6" colNo=3 value='        营业税金及附加' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;营业税金及附加</td>
		<td id="report1_D6" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E6" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="7" height=20 style="height:20px;">
		<td id="report1_A7" colNo=1 value='4' onclick="_hideEditor()" class="report1_4">4</td>
		<td id="report1_C7" colNo=3 value='        销售费用(填写A104000)' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销售费用(填写A104000)</td>
		<td id="report1_D7" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E7" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="8" height=20 style="height:20px;">
		<td id="report1_A8" colNo=1 value='5' onclick="_hideEditor()" class="report1_4">5</td>
		<td id="report1_C8" colNo=3 value='        管理费用(填写A104000)' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;管理费用(填写A104000)</td>
		<td id="report1_D8" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='32232.29' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">32232.29</td>
		<td id="report1_E8" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="9" height=20 style="height:20px;">
		<td id="report1_A9" colNo=1 value='6' onclick="_hideEditor()" class="report1_4">6</td>
		<td id="report1_C9" colNo=3 value='        财务费用(填写A104000)' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;财务费用(填写A104000)</td>
		<td id="report1_D9" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='-8.24' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">-8.24</td>
		<td id="report1_E9" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="10" height=20 style="height:20px;">
		<td id="report1_A10" colNo=1 value='7' onclick="_hideEditor()" class="report1_4">7</td>
		<td id="report1_C10" colNo=3 value='        资产减值损失' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资产减值损失</td>
		<td id="report1_D10" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E10" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="11" height=20 style="height:20px;">
		<td id="report1_A11" colNo=1 value='8' onclick="_hideEditor()" class="report1_4">8</td>
		<td id="report1_C11" colNo=3 value='    加：公允价值变动收益' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;加：公允价值变动收益</td>
		<td id="report1_D11" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E11" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="12" height=20 style="height:20px;">
		<td id="report1_A12" colNo=1 value='9' onclick="_hideEditor()" class="report1_4">9</td>
		<td id="report1_C12" colNo=3 value='        投资收益' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投资收益</td>
		<td id="report1_D12" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E12" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="13" height=20 style="height:20px;">
		<td id="report1_A13" colNo=1 value='10' onclick="_hideEditor()" class="report1_4">10</td>
		<td id="report1_C13" colNo=3 value='二、营业利润(1-2-3-4-5-6-7+8+9)' onclick="_hideEditor()" class="report1_6">二、营业利润(1-2-3-4-5-6-7+8+9)</td>
		<td id="report1_D13" colNo=4 value='-164625.8' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">-164625.80</td>
		<td id="report1_E13" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="14" height=20 style="height:20px;">
		<td id="report1_A14" colNo=1 value='11' onclick="_hideEditor()" class="report1_4">11</td>
		<td id="report1_C14" colNo=3 value='    加：营业外收入(填写A101010\101020\103000)' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;加：营业外收入(填写A101010\101020\103000)</td>
		<td id="report1_D14" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E14" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="15" height=20 style="height:20px;">
		<td id="report1_A15" colNo=1 value='12' onclick="_hideEditor()" class="report1_4">12</td>
		<td id="report1_C15" colNo=3 value='    减：营业外支出(填写A102010\102020\103000)' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;减：营业外支出(填写A102010\102020\103000)</td>
		<td id="report1_D15" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E15" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="16" height=20 style="height:20px;">
		<td id="report1_A16" colNo=1 value='13' onclick="_hideEditor()" class="report1_4">13</td>
		<td id="report1_C16" colNo=3 value='三、利润总额（10+11-12）' onclick="_hideEditor()" class="report1_6">三、利润总额（10+11-12）</td>
		<td id="report1_D16" colNo=4 value='-164625.8' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">-164625.80</td>
		<td id="report1_E16" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="17" height=20 style="height:20px;">
		<td id="report1_A17" colNo=1 value='14' onclick="_hideEditor()" class="report1_4">14</td>
		<td rowSpan=10 id="report1_B17" colNo=2 value='应纳税所得额计算' onclick="_hideEditor()" class="report1_15" style="border-bottom-style:solid;">应纳税所得额计算</td>
		<td id="report1_C17" colNo=3 value='    减：境外所得（填写A108010）' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;减：境外所得（填写A108010）</td>
		<td id="report1_D17" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E17" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="18" height=20 style="height:20px;">
		<td id="report1_A18" colNo=1 value='15' onclick="_hideEditor()" class="report1_4">15</td>
		<td id="report1_C18" colNo=3 value='    加：纳税调整增加额（填写A105000）' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;加：纳税调整增加额（填写A105000）</td>
		<td id="report1_D18" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E18" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="19" height=20 style="height:20px;">
		<td id="report1_A19" colNo=1 value='16' onclick="_hideEditor()" class="report1_4">16</td>
		<td id="report1_C19" colNo=3 value='    减：纳税调整减少额（填写A105000）' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;减：纳税调整减少额（填写A105000）</td>
		<td id="report1_D19" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E19" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="20" height=20 style="height:20px;">
		<td id="report1_A20" colNo=1 value='17' onclick="_hideEditor()" class="report1_4">17</td>
		<td id="report1_C20" colNo=3 value='    减：免税、减计收入及加计扣除（填写A107010）' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;减：免税、减计收入及加计扣除（填写A107010）</td>
		<td id="report1_D20" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E20" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="21" height=20 style="height:20px;">
		<td id="report1_A21" colNo=1 value='18' onclick="_hideEditor()" class="report1_4">18</td>
		<td id="report1_C21" colNo=3 value='    加：境外应税所得抵减境内亏损（填写A108000）' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;加：境外应税所得抵减境内亏损（填写A108000）</td>
		<td id="report1_D21" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_21_4_dataValid()" onclick="_displayEditor()" class="report1_5">0.00</td>
<script language=javascript>
	function report1_21_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_D16' ) )-_parseValue( document.getElementById( 'report1_D17' ) )+_parseValue( document.getElementById( 'report1_D18' ) )-_parseValue( document.getElementById( 'report1_D19' ) )-_parseValue( document.getElementById( 'report1_D20' ) )>=0?_parseValue( document.getElementById( 'report1_D21' ) )==0:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_D20,report1_D21,report1_D19,report1_D16,report1_D18,report1_D17" );}catch(e){}
			alert( '当本表第13-14+15-16-17行≥0时，第18行＝0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E21" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="22" height=20 style="height:20px;">
		<td id="report1_A22" colNo=1 value='19' onclick="_hideEditor()" class="report1_4">19</td>
		<td id="report1_C22" colNo=3 value='四、纳税调整后所得（13-14+15-16-17+18）' onclick="_hideEditor()" class="report1_6">四、纳税调整后所得（13-14+15-16-17+18）</td>
		<td id="report1_D22" colNo=4 value='-164625.8' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">-164625.80</td>
		<td id="report1_E22" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="23" height=20 style="height:20px;">
		<td id="report1_A23" colNo=1 value='20' onclick="_hideEditor()" class="report1_4">20</td>
		<td id="report1_C23" colNo=3 value='    减：所得减免（填写A107020）' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;减：所得减免（填写A107020）</td>
		<td id="report1_D23" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E23" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="24" height=20 style="height:20px;">
		<td id="report1_A24" colNo=1 value='21' onclick="_hideEditor()" class="report1_4">21</td>
		<td id="report1_C24" colNo=3 value='    减：抵扣应纳税所得额（填写A107030）' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;减：抵扣应纳税所得额（填写A107030）</td>
		<td id="report1_D24" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_24_4_dataValid()" onclick="_displayEditor()" class="report1_5">0.00</td>
<script language=javascript>
	function report1_24_4_dataValid() {
		if( ! ( (_parseValue( document.getElementById( 'report1_D22' ) )-_parseValue( document.getElementById( 'report1_D23' ) ))>0?(_parseValue( document.getElementById( 'report1_D24' ) )<=_parseValue( document.getElementById( 'report1_D22' ) )-_parseValue( document.getElementById( 'report1_D23' ) )):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_D24,report1_D22,report1_D23" );}catch(e){}
			alert( '当第19-20行>0时，第21行≤第19-20行。当第19-20行≤0时，第21行=0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E24" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="25" height=20 style="height:20px;">
		<td id="report1_A25" colNo=1 value='22' onclick="_hideEditor()" class="report1_4">22</td>
		<td id="report1_C25" colNo=3 value='    减：弥补以前年度亏损（填写A106000）' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;减：弥补以前年度亏损（填写A106000）</td>
		<td id="report1_D25" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_25_4_dataValid()" onclick="_displayEditor()" class="report1_5">0.00</td>
<script language=javascript>
	function report1_25_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_D25' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_D25" );}catch(e){}
			alert( '第22行≥0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E25' ) )>0?_parseValue( document.getElementById( 'report1_D25' ) )<=_parseValue( document.getElementById( 'report1_E25' ) ):_parseValue( document.getElementById( 'report1_D25' ) )==0 ) ) {
			try{ report1_markInvalidCell( "report1_D25,report1_E25" );}catch(e){}
			alert( '当第19-20-21行>0时，第22行≤第19-20-21行。当第19-20-21行≤0时，第22行=0。' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E25" colNo=5 bkj="true" value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="26" height=20 style="height:20px;">
		<td id="report1_A26" colNo=1 value='23' onclick="_hideEditor()" class="report1_4">23</td>
		<td id="report1_C26" colNo=3 value='五、应纳税所得额（19-20-21-22）' onclick="_hideEditor()" class="report1_6">五、应纳税所得额（19-20-21-22）</td>
		<td id="report1_D26" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_E26" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="27" height=20 style="height:20px;">
		<td id="report1_A27" colNo=1 value='24' onclick="_hideEditor()" class="report1_4">24</td>
		<td rowSpan=14 id="report1_B27" colNo=2 value='应纳税额计算' onclick="_hideEditor()" class="report1_3">应纳税额计算</td>
		<td id="report1_C27" colNo=3 value='    税率（25%）' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;税率（25%）</td>
		<td id="report1_D27" colNo=4 value='0.25' format="%230.00%25" digits="4" onclick="_hideEditor()" class="report1_12">25.00%</td>
		<td id="report1_E27" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="28" height=20 style="height:20px;">
		<td id="report1_A28" colNo=1 value='25' onclick="_hideEditor()" class="report1_4">25</td>
		<td id="report1_C28" colNo=3 value='六、应纳所得税额（23×24）' onclick="_hideEditor()" class="report1_6">六、应纳所得税额（23×24）</td>
		<td id="report1_D28" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_E28" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="29" height=20 style="height:20px;">
		<td id="report1_A29" colNo=1 value='26' onclick="_hideEditor()" class="report1_4">26</td>
		<td id="report1_C29" colNo=3 value='    减：减免所得税额（填写A107040）' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;减：减免所得税额（填写A107040）</td>
		<td id="report1_D29" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E29" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="30" height=20 style="height:20px;">
		<td id="report1_A30" colNo=1 value='27' onclick="_hideEditor()" class="report1_4">27</td>
		<td id="report1_C30" colNo=3 value='    减：抵免所得税额（填写A107050）' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;减：抵免所得税额（填写A107050）</td>
		<td id="report1_D30" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E30" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="31" height=20 style="height:20px;">
		<td id="report1_A31" colNo=1 value='28' onclick="_hideEditor()" class="report1_4">28</td>
		<td id="report1_C31" colNo=3 value='七、应纳税额（25-26-27）' onclick="_hideEditor()" class="report1_6">七、应纳税额（25-26-27）</td>
		<td id="report1_D31" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_E31" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="32" height=20 style="height:20px;">
		<td id="report1_A32" colNo=1 value='29' onclick="_hideEditor()" class="report1_4">29</td>
		<td id="report1_C32" colNo=3 value='    加：境外所得应纳所得税额（填写A108000）' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;加：境外所得应纳所得税额（填写A108000）</td>
		<td id="report1_D32" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E32" colNo=5 bkj="true" value='0.0' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="33" height=20 style="height:20px;">
		<td id="report1_A33" colNo=1 value='30' onclick="_hideEditor()" class="report1_4">30</td>
		<td id="report1_C33" colNo=3 value='    减：境外所得抵免所得税额（填写A108000）' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;减：境外所得抵免所得税额（填写A108000）</td>
		<td id="report1_D33" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E33" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="34" height=20 style="height:20px;">
		<td id="report1_A34" colNo=1 value='31' onclick="_hideEditor()" class="report1_4">31</td>
		<td id="report1_C34" colNo=3 value='八、实际应纳所得税额（28+29-30）' onclick="_hideEditor()" class="report1_6">八、实际应纳所得税额（28+29-30）</td>
		<td id="report1_D34" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_E34" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="35" height=20 style="height:20px;">
		<td id="report1_A35" colNo=1 value='32' onclick="_hideEditor()" class="report1_4">32</td>
		<td id="report1_C35" colNo=3 value='    减：本年累计实际已预缴的所得税额' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;减：本年累计实际已预缴的所得税额</td>
		<td id="report1_D35" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_16">0.00</td>
		<td id="report1_E35" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="36" height=20 style="height:20px;">
		<td id="report1_A36" colNo=1 value='33' onclick="_hideEditor()" class="report1_4">33</td>
		<td id="report1_C36" colNo=3 value='九、本年应补（退）所得税额（31-32）' onclick="_hideEditor()" class="report1_6">九、本年应补（退）所得税额（31-32）</td>
		<td id="report1_D36" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_E36" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="37" height=20 style="height:20px;">
		<td id="report1_A37" colNo=1 value='34' onclick="_hideEditor()" class="report1_4">34</td>
		<td id="report1_C37" colNo=3 value='    其中：总机构分摊本年应补（退）所得税额(填写A109000)' onclick="_hideEditor()" class="report1_9">&nbsp;&nbsp;&nbsp;&nbsp;其中：总机构分摊本年应补（退）所得税额(填写A109000)</td>
		<td id="report1_D37" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E37" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="38" height=20 style="height:20px;">
		<td id="report1_A38" colNo=1 value='35' onclick="_hideEditor()" class="report1_4">35</td>
		<td id="report1_C38" colNo=3 value='          财政集中分配本年应补（退）所得税额（填写A109000）' onclick="_hideEditor()" class="report1_9">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;财政集中分配本年应补（退）所得税额（填写A109000）</td>
		<td id="report1_D38" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E38" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="39" height=10 style="height:10px;">
		<td rowSpan=2 id="report1_A39" colNo=1 value='36' onclick="_hideEditor()" class="report1_8" style="border-bottom-style:solid;">36</td>
		<td rowSpan=2 id="report1_C39" colNo=3 value='          总机构主体生产经营部门分摊本年应补（退）所得税额(填写A109000)' onclick="_hideEditor()" class="report1_14" style="border-bottom-style:solid;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总机构主体生产经营部门分摊本年应补（退）所得税额(填写A109000)</td>
		<td rowSpan=2 id="report1_D39" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_11" style="border-bottom-style:solid;">0.00</td>
		<td id="report1_E39" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="40" height=10 style="height:10px;">
		<td id="report1_E40" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="41" height=20 style="height:20px;">
		<td id="report1_A41" colNo=1 value='37' onclick="_hideEditor()" class="report1_4">37</td>
		<td rowSpan=2 id="report1_B41" colNo=2 value='附列资料' onclick="_hideEditor()" class="report1_3">附列资料</td>
		<td id="report1_C41" colNo=3 value='以前年度多缴的所得税额在本年抵减额' onclick="_hideEditor()" class="report1_6">以前年度多缴的所得税额在本年抵减额</td>
		<td id="report1_D41" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E41" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="42" height=20 style="height:20px;">
		<td id="report1_A42" colNo=1 value='38' onclick="_hideEditor()" class="report1_4">38</td>
		<td id="report1_C42" colNo=3 value='以前年度应缴未缴在本年入库所得税额' onclick="_hideEditor()" class="report1_6">以前年度应缴未缴在本年入库所得税额</td>
		<td id="report1_D42" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_E42" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,D4,D5,D6,D7,D8,D9,D10,D11,D12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D4' ) )-_parseValue( document.getElementById( 'report1_D5' ) )-_parseValue( document.getElementById( 'report1_D6' ) )-_parseValue( document.getElementById( 'report1_D7' ) )-_parseValue( document.getElementById( 'report1_D8' ) )-_parseValue( document.getElementById( 'report1_D9' ) )-_parseValue( document.getElementById( 'report1_D10' ) )+_parseValue( document.getElementById( 'report1_D11' ) )+_parseValue( document.getElementById( 'report1_D12' ) )).toFixed(2);
				document.getElementById( 'report1_D13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D13' ) );
			}catch(e1){}
		}
		cells = ",,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D13' ) )+_parseValue( document.getElementById( 'report1_D14' ) )-_parseValue( document.getElementById( 'report1_D15' ) )).toFixed(2);
				document.getElementById( 'report1_D16' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D16' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D16' ) );
			}catch(e1){}
		}
		cells = ",,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D16' ) )-_parseValue( document.getElementById( 'report1_D17' ) )+_parseValue( document.getElementById( 'report1_D18' ) )-_parseValue( document.getElementById( 'report1_D19' ) )-_parseValue( document.getElementById( 'report1_D20' ) )+_parseValue( document.getElementById( 'report1_D21' ) )).toFixed(2);
				document.getElementById( 'report1_D22' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D22' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D22' ) );
			}catch(e1){}
		}
		cells = ",,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D22' ) )-_parseValue( document.getElementById( 'report1_D23' ) )-_parseValue( document.getElementById( 'report1_D24' ) )).toFixed(2);
				document.getElementById( 'report1_E25' ).setAttribute( 'value', value + "" );
				_formatCalcValue( document.getElementById( 'report1_E25' ) );
			}catch(e1){}
		}
		cells = ",,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = ((_parseValue( document.getElementById( 'report1_D22' ) )-_parseValue( document.getElementById( 'report1_D23' ) )-_parseValue( document.getElementById( 'report1_D24' ) )-_parseValue( document.getElementById( 'report1_D25' ) )>0)&&(_parseValue( document.getElementById( 'report1_D22' ) )>0)?_parseValue( document.getElementById( 'report1_D22' ) )-_parseValue( document.getElementById( 'report1_D23' ) )-_parseValue( document.getElementById( 'report1_D24' ) )-_parseValue( document.getElementById( 'report1_D25' ) ):0).toFixed(2);
				document.getElementById( 'report1_D26' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D26' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D26' ) );
			}catch(e1){}
		}
		cells = ",,D26,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D27,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D26' ) )*_parseValue( document.getElementById( 'report1_D27' ) )).toFixed(2);
				document.getElementById( 'report1_D28' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D28' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D28' ) );
			}catch(e1){}
		}
		cells = ",,D28,D26,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D27,D29,D30,D28,D26,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D27,D29,D30,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D28' ) )-_parseValue( document.getElementById( 'report1_D29' ) )-_parseValue( document.getElementById( 'report1_D30' ) )>0?_parseValue( document.getElementById( 'report1_D28' ) )-_parseValue( document.getElementById( 'report1_D29' ) )-_parseValue( document.getElementById( 'report1_D30' ) ):0).toFixed(2);
				document.getElementById( 'report1_D31' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D31' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D31' ) );
			}catch(e1){}
		}
		cells = ",,D31,D28,D26,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D27,D29,D30,D28,D26,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D27,D29,D30,D32,D33,D31,D28,D26,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D27,D29,D30,D28,D26,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D27,D29,D30,D32,D33,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D31' ) )+_parseValue( document.getElementById( 'report1_D32' ) )-_parseValue( document.getElementById( 'report1_D33' ) )>0?_parseValue( document.getElementById( 'report1_D31' ) )+_parseValue( document.getElementById( 'report1_D32' ) )-_parseValue( document.getElementById( 'report1_D33' ) ):0).toFixed(2);
				document.getElementById( 'report1_D34' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D34' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D34' ) );
			}catch(e1){}
		}
		cells = ",,E31,D34,D31,D28,D26,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D27,D29,D30,D28,D26,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D27,D29,D30,D32,D33,D31,D28,D26,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D27,D29,D30,D28,D26,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D27,D29,D30,D32,D33,E32,D35,D34,D31,D28,D26,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D27,D29,D30,D28,D26,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D27,D29,D30,D32,D33,D31,D28,D26,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D27,D29,D30,D28,D26,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D22,D16,D13,D4,D5,D6,D7,D8,D9,D10,D11,D12,D14,D15,D17,D18,D19,D20,D21,D23,D24,D25,D27,D29,D30,D32,D33,D35,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E31' ) )=='06'?_parseValue( document.getElementById( 'report1_D34' ) )*_parseValue( document.getElementById( 'report1_E32' ) )-_parseValue( document.getElementById( 'report1_D35' ) ):_parseValue( document.getElementById( 'report1_D34' ) )-_parseValue( document.getElementById( 'report1_D35' ) )).toFixed(2);
				document.getElementById( 'report1_D36' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D36' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D36' ) );
			}catch(e1){}
		}
		try{ group_autoCalc( 'report1_' + cellName ); }catch(e){}
	}

	function report1_checkValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_D16' ) )-_parseValue( document.getElementById( 'report1_D17' ) )+_parseValue( document.getElementById( 'report1_D18' ) )-_parseValue( document.getElementById( 'report1_D19' ) )-_parseValue( document.getElementById( 'report1_D20' ) )>=0?_parseValue( document.getElementById( 'report1_D21' ) )==0:0==0 ) ) {
			try{ report1_markInvalidCell( "report1_D20,report1_D21,report1_D19,report1_D16,report1_D18,report1_D17" );}catch(e){}
			alert( '当本表第13-14+15-16-17行≥0时，第18行＝0' );
			return false;
		}
		if( ! ( (_parseValue( document.getElementById( 'report1_D22' ) )-_parseValue( document.getElementById( 'report1_D23' ) ))>0?(_parseValue( document.getElementById( 'report1_D24' ) )<=_parseValue( document.getElementById( 'report1_D22' ) )-_parseValue( document.getElementById( 'report1_D23' ) )):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_D24,report1_D22,report1_D23" );}catch(e){}
			alert( '当第19-20行>0时，第21行≤第19-20行。当第19-20行≤0时，第21行=0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E25' ) )>0?_parseValue( document.getElementById( 'report1_D25' ) )<=_parseValue( document.getElementById( 'report1_E25' ) ):_parseValue( document.getElementById( 'report1_D25' ) )==0 ) ) {
			try{ report1_markInvalidCell( "report1_D25,report1_E25" );}catch(e){}
			alert( '当第19-20-21行>0时，第22行≤第19-20-21行。当第19-20-21行≤0时，第22行=0。' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_D25' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_D25" );}catch(e){}
			alert( '第22行≥0' );
			return false;
		}
		return true;
	}

</script>
</div>
</td></tr></table>
<div style="display:none"><form id="report1_submitForm" method=post action="/WSSBSL/reportServlet.aspx?action=11" target="submitFrame">
	<input type=hidden name=fileName value="/ndsdsA/sb_ndsds_2014_zb.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_74730">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2FndsdsA%2Fsb_ndsds_2014_zb.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000015884336&sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466&reportParamsId=15115066322563380172192">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_NDSDS_2014;xmlName=ndsdsA/sb_ndsds_2014_zb;pzxh=10014517000015884336;nsrsbh=91450107MA5KE0EQ2B;dataFromBz=0;raq=/ndsdsA/sb_ndsds_2014_zb.raq;sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/ndsdsA/sb_ndsds_2014_zb.raq&srcType=file&cachedId=10_1_1_176_8080_74730&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_NDSDS_2014%3BxmlName%3DndsdsA%2Fsb_ndsds_2014_zb%3Bpzxh%3D10014517000015884336%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdataFromBz%3D0%3Braq%3D%2FndsdsA%2Fsb_ndsds_2014_zb.raq%3Bsbuuid%3D4F35CE4F88AE666EB53FF3AE9DC76466%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

