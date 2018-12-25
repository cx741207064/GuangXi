<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_sb_ndsds_2014_fb6.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_sb_ndsds_2014_fb6" %>










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
	var report1_cachedId = "10_1_1_176_8080_74727";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2FndsdsA%2Fsb_ndsds_2014_fb6.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15115066322565559172190&cachedId=10_1_1_176_8080_74727&t_i_m_e=1511506632678" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2FndsdsA%2Fsb_ndsds_2014_fb6.raq&columns=0&srcType=file&reportParamsId=15115066322565559172190&cachedId=10_1_1_176_8080_74727&t_i_m_e=1511506632678" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2FndsdsA%2Fsb_ndsds_2014_fb6.raq&columns=0&srcType=file&reportParamsId=15115066322565559172190&cachedId=10_1_1_176_8080_74727&t_i_m_e=1511506632678";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2FndsdsA%2Fsb_ndsds_2014_fb6.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15115066322565559172190&cachedId=10_1_1_176_8080_74727&t_i_m_e=1511506632678";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2FndsdsA%2Fsb_ndsds_2014_fb6.raq&srcType=file&reportParamsId=15115066322565559172190&cachedId=10_1_1_176_8080_74727&t_i_m_e=1511506632678" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_fb6.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15115066322565559172190&cachedId=10_1_1_176_8080_74727&t_i_m_e=1511506632678";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_fb6.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15115066322565559172190&cachedId=10_1_1_176_8080_74727&t_i_m_e=1511506632678";
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
	function report1488714over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1488714out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_5 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:center;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_12 { text-align:left;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1488714out()" onmouseover="report1488714over()" rowCount=30 cols=9 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:865px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:48px;"></col>
		<col style="width:187px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
	</colgroup>
	<tr rn="1" height=30 style="height:30px;">
		<td colSpan=8 id="report1_A1" colNo=1 value='10014517000015884336' onclick="_hideEditor()" class="report1_12">A104000</td>
		<td id="report1_I1" colNo=9 bkj="true" value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_12" style="display:none;"></td>
	</tr>
	<tr rn="2" height=30 style="height:30px;">
		<td colSpan=8 id="report1_A2" colNo=1 value='期间费用明细表' onclick="_hideEditor()" class="report1_10">期间费用明细表</td>
		<td id="report1_I2" colNo=9 bkj="true" value='2017-05-08' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="3" height=20 style="height:20px;">
		<td rowSpan=3 id="report1_A3" colNo=1 value='行次' onclick="_hideEditor()" class="report1_9" style="border-bottom-style:solid;">行次</td>
		<td rowSpan=3 id="report1_B3" colNo=2 value='项        目' onclick="_hideEditor()" class="report1_9" style="border-bottom-style:solid;">项&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目</td>
		<td rowSpan=2 id="report1_C3" colNo=3 value='销售费用' onclick="_hideEditor()" class="report1_11" style="border-bottom-style:solid;">销售费用</td>
		<td rowSpan=2 id="report1_D3" colNo=4 value='其中：境外支付' onclick="_hideEditor()" class="report1_11" style="border-bottom-style:solid;">其中：境外支付</td>
		<td rowSpan=2 id="report1_E3" colNo=5 value='管理费用' onclick="_hideEditor()" class="report1_9" style="border-bottom-style:solid;">管理费用</td>
		<td rowSpan=2 id="report1_F3" colNo=6 value='其中：境外支付' onclick="_hideEditor()" class="report1_11" style="border-bottom-style:solid;">其中：境外支付</td>
		<td rowSpan=2 id="report1_G3" colNo=7 value='财务费用' onclick="_hideEditor()" class="report1_9" style="border-bottom-style:solid;">财务费用</td>
		<td rowSpan=2 id="report1_H3" colNo=8 value='其中：境外支付' onclick="_hideEditor()" class="report1_11" style="border-bottom-style:solid;">其中：境外支付</td>
		<td id="report1_I3" colNo=9 bkj="true" value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="4" height=20 style="height:20px;">
		<td id="report1_I4" colNo=9 bkj="true" value='2016-01-01' onclick="_hideEditor()" class="report1_8" style="display:none;"></td>
	</tr>
	<tr rn="5" height=20 style="height:20px;">
		<td id="report1_C5" colNo=3 value='1' onclick="_hideEditor()" class="report1_4">1</td>
		<td id="report1_D5" colNo=4 value='2' onclick="_hideEditor()" class="report1_4">2</td>
		<td id="report1_E5" colNo=5 value='3' onclick="_hideEditor()" class="report1_5">3</td>
		<td id="report1_F5" colNo=6 value='4' onclick="_hideEditor()" class="report1_4">4</td>
		<td id="report1_G5" colNo=7 value='5' onclick="_hideEditor()" class="report1_5">5</td>
		<td id="report1_H5" colNo=8 value='6' onclick="_hideEditor()" class="report1_5">6</td>
		<td id="report1_I5" colNo=9 bkj="true" value='2016-12-31' onclick="_hideEditor()" class="report1_8" style="display:none;"></td>
	</tr>
	<tr rn="6" height=20 style="height:20px;">
		<td id="report1_A6" colNo=1 value='1' onclick="_hideEditor()" class="report1_5">1</td>
		<td id="report1_B6" colNo=2 value='一、职工薪酬' onclick="_hideEditor()" class="report1_2">一、职工薪酬</td>
		<td id="report1_C6" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D6" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_E6" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='13200.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">13200.00</td>
		<td id="report1_F6" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_G6" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H6" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I6" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="7" height=20 style="height:20px;">
		<td id="report1_A7" colNo=1 value='2' onclick="_hideEditor()" class="report1_5">2</td>
		<td id="report1_B7" colNo=2 value='二、劳务费' onclick="_hideEditor()" class="report1_2">二、劳务费</td>
		<td id="report1_C7" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D7" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_7_4_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_7_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_C7' ) )<0?_parseValue( document.getElementById( 'report1_D7' ) )<=-_parseValue( document.getElementById( 'report1_C7' ) ):_parseValue( document.getElementById( 'report1_D7' ) )<=_parseValue( document.getElementById( 'report1_C7' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_C7,report1_D7" );}catch(e){}
			alert( '行次2 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E7" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F7" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_7_6_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_7_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E7' ) )<0?_parseValue( document.getElementById( 'report1_F7' ) )<=-_parseValue( document.getElementById( 'report1_E7' ) ):_parseValue( document.getElementById( 'report1_F7' ) )<=_parseValue( document.getElementById( 'report1_E7' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E7,report1_F7" );}catch(e){}
			alert( '行次2 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G7" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H7" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I7" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="8" height=20 style="height:20px;">
		<td id="report1_A8" colNo=1 value='3' onclick="_hideEditor()" class="report1_5">3</td>
		<td id="report1_B8" colNo=2 value='三、咨询顾问费' onclick="_hideEditor()" class="report1_2">三、咨询顾问费</td>
		<td id="report1_C8" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D8" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_8_4_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_8_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_C8' ) )<0?_parseValue( document.getElementById( 'report1_D8' ) )<=-_parseValue( document.getElementById( 'report1_C8' ) ):_parseValue( document.getElementById( 'report1_D8' ) )<=_parseValue( document.getElementById( 'report1_C8' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_C8,report1_D8" );}catch(e){}
			alert( '行次3 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E8" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F8" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_8_6_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_8_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E8' ) )<0?_parseValue( document.getElementById( 'report1_F8' ) )<=-_parseValue( document.getElementById( 'report1_E8' ) ):_parseValue( document.getElementById( 'report1_F8' ) )<=_parseValue( document.getElementById( 'report1_E8' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_F8,report1_E8" );}catch(e){}
			alert( '行次3 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G8" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H8" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I8" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="9" height=20 style="height:20px;">
		<td id="report1_A9" colNo=1 value='4' onclick="_hideEditor()" class="report1_5">4</td>
		<td id="report1_B9" colNo=2 value='四、业务招待费' onclick="_hideEditor()" class="report1_2">四、业务招待费</td>
		<td id="report1_C9" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D9" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_E9" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F9" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_G9" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H9" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I9" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="10" height=20 style="height:20px;">
		<td id="report1_A10" colNo=1 value='5' onclick="_hideEditor()" class="report1_5">5</td>
		<td id="report1_B10" colNo=2 value='五、广告费和业务宣传费' onclick="_hideEditor()" class="report1_2">五、广告费和业务宣传费</td>
		<td id="report1_C10" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D10" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_E10" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F10" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_G10" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H10" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I10" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="11" height=20 style="height:20px;">
		<td id="report1_A11" colNo=1 value='6' onclick="_hideEditor()" class="report1_5">6</td>
		<td id="report1_B11" colNo=2 value='六、佣金和手续费' onclick="_hideEditor()" class="report1_2">六、佣金和手续费</td>
		<td id="report1_C11" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D11" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_11_4_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_11_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_C11' ) )<0?_parseValue( document.getElementById( 'report1_D11' ) )<=-_parseValue( document.getElementById( 'report1_C11' ) ):_parseValue( document.getElementById( 'report1_D11' ) )<=_parseValue( document.getElementById( 'report1_C11' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_D11,report1_C11" );}catch(e){}
			alert( '行次6 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E11" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F11" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_11_6_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_11_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E11' ) )<0?_parseValue( document.getElementById( 'report1_F11' ) )<=-_parseValue( document.getElementById( 'report1_E11' ) ):_parseValue( document.getElementById( 'report1_F11' ) )<=_parseValue( document.getElementById( 'report1_E11' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_F11,report1_E11" );}catch(e){}
			alert( '行次6 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G11" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_H11" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_11_8_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_11_8_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_G11' ) )<0?_parseValue( document.getElementById( 'report1_H11' ) )<=-_parseValue( document.getElementById( 'report1_G11' ) ):_parseValue( document.getElementById( 'report1_H11' ) )<=_parseValue( document.getElementById( 'report1_G11' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_H11,report1_G11" );}catch(e){}
			alert( '行次6 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I11" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="12" height=20 style="height:20px;">
		<td id="report1_A12" colNo=1 value='7' onclick="_hideEditor()" class="report1_5">7</td>
		<td id="report1_B12" colNo=2 value='七、资产折旧摊销费' onclick="_hideEditor()" class="report1_2">七、资产折旧摊销费</td>
		<td id="report1_C12" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D12" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_E12" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F12" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_G12" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H12" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I12" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_8" style="display:none;"></td>
	</tr>
	<tr rn="13" height=20 style="height:20px;">
		<td id="report1_A13" colNo=1 value='8' onclick="_hideEditor()" class="report1_5">8</td>
		<td id="report1_B13" colNo=2 value='八、财产损耗、盘亏及毁损损失' onclick="_hideEditor()" class="report1_2">八、财产损耗、盘亏及毁损损失</td>
		<td id="report1_C13" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D13" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_E13" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F13" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_G13" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H13" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I13" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="14" height=20 style="height:20px;">
		<td id="report1_A14" colNo=1 value='9' onclick="_hideEditor()" class="report1_5">9</td>
		<td id="report1_B14" colNo=2 value='九、办公费' onclick="_hideEditor()" class="report1_2">九、办公费</td>
		<td id="report1_C14" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D14" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_E14" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='1927.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">1927.00</td>
		<td id="report1_F14" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_G14" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H14" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I14" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="15" height=20 style="height:20px;">
		<td id="report1_A15" colNo=1 value='10' onclick="_hideEditor()" class="report1_5">10</td>
		<td id="report1_B15" colNo=2 value='十、董事会费' onclick="_hideEditor()" class="report1_2">十、董事会费</td>
		<td id="report1_C15" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D15" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_E15" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F15" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_G15" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H15" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I15" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="16" height=20 style="height:20px;">
		<td id="report1_A16" colNo=1 value='11' onclick="_hideEditor()" class="report1_5">11</td>
		<td id="report1_B16" colNo=2 value='十一、租赁费' onclick="_hideEditor()" class="report1_2">十一、租赁费</td>
		<td id="report1_C16" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D16" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_16_4_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_16_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_C16' ) )<0?_parseValue( document.getElementById( 'report1_D16' ) )<=-_parseValue( document.getElementById( 'report1_C16' ) ):_parseValue( document.getElementById( 'report1_D16' ) )<=_parseValue( document.getElementById( 'report1_C16' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_C16,report1_D16" );}catch(e){}
			alert( '行次11 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E16" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F16" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_16_6_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_16_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E16' ) )<0?_parseValue( document.getElementById( 'report1_F16' ) )<=-_parseValue( document.getElementById( 'report1_E16' ) ):_parseValue( document.getElementById( 'report1_F16' ) )<=_parseValue( document.getElementById( 'report1_E16' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E16,report1_F16" );}catch(e){}
			alert( '行次11 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G16" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H16" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I16" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="17" height=20 style="height:20px;">
		<td id="report1_A17" colNo=1 value='12' onclick="_hideEditor()" class="report1_5">12</td>
		<td id="report1_B17" colNo=2 value='十二、诉讼费' onclick="_hideEditor()" class="report1_2">十二、诉讼费</td>
		<td id="report1_C17" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D17" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_E17" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F17" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_G17" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H17" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I17" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="18" height=20 style="height:20px;">
		<td id="report1_A18" colNo=1 value='13' onclick="_hideEditor()" class="report1_5">13</td>
		<td id="report1_B18" colNo=2 value='十三、差旅费' onclick="_hideEditor()" class="report1_2">十三、差旅费</td>
		<td id="report1_C18" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D18" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_E18" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F18" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_G18" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H18" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I18" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="19" height=20 style="height:20px;">
		<td id="report1_A19" colNo=1 value='14' onclick="_hideEditor()" class="report1_5">14</td>
		<td id="report1_B19" colNo=2 value='十四、保险费' onclick="_hideEditor()" class="report1_2">十四、保险费</td>
		<td id="report1_C19" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D19" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_E19" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F19" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_G19" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H19" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I19" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_8" style="display:none;"></td>
	</tr>
	<tr rn="20" height=20 style="height:20px;">
		<td id="report1_A20" colNo=1 value='15' onclick="_hideEditor()" class="report1_5">15</td>
		<td id="report1_B20" colNo=2 value='十五、运输、仓储费' onclick="_hideEditor()" class="report1_2">十五、运输、仓储费</td>
		<td id="report1_C20" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D20" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_20_4_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_20_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_C20' ) )<0?_parseValue( document.getElementById( 'report1_D20' ) )<=-_parseValue( document.getElementById( 'report1_C20' ) ):_parseValue( document.getElementById( 'report1_D20' ) )<=_parseValue( document.getElementById( 'report1_C20' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_D20,report1_C20" );}catch(e){}
			alert( '行次15 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E20" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F20" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_20_6_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_20_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E20' ) )<0?_parseValue( document.getElementById( 'report1_F20' ) )<=-_parseValue( document.getElementById( 'report1_E20' ) ):_parseValue( document.getElementById( 'report1_F20' ) )<=_parseValue( document.getElementById( 'report1_E20' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E20,report1_F20" );}catch(e){}
			alert( '行次15 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G20" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H20" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I20" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="21" height=20 style="height:20px;">
		<td id="report1_A21" colNo=1 value='16' onclick="_hideEditor()" class="report1_5">16</td>
		<td id="report1_B21" colNo=2 value='十六、修理费' onclick="_hideEditor()" class="report1_2">十六、修理费</td>
		<td id="report1_C21" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D21" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_21_4_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_21_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_C21' ) )<0?_parseValue( document.getElementById( 'report1_D21' ) )<=-_parseValue( document.getElementById( 'report1_C21' ) ):_parseValue( document.getElementById( 'report1_D21' ) )<=_parseValue( document.getElementById( 'report1_C21' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_D21,report1_C21" );}catch(e){}
			alert( '行次16 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E21" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F21" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_21_6_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_21_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E21' ) )<0?_parseValue( document.getElementById( 'report1_F21' ) )<=-_parseValue( document.getElementById( 'report1_E21' ) ):_parseValue( document.getElementById( 'report1_F21' ) )<=_parseValue( document.getElementById( 'report1_E21' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E21,report1_F21" );}catch(e){}
			alert( '行次16 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G21" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H21" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I21" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="22" height=20 style="height:20px;">
		<td id="report1_A22" colNo=1 value='17' onclick="_hideEditor()" class="report1_5">17</td>
		<td id="report1_B22" colNo=2 value='十七、包装费' onclick="_hideEditor()" class="report1_2">十七、包装费</td>
		<td id="report1_C22" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D22" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_E22" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F22" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_G22" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H22" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I22" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="23" height=20 style="height:20px;">
		<td id="report1_A23" colNo=1 value='18' onclick="_hideEditor()" class="report1_5">18</td>
		<td id="report1_B23" colNo=2 value='十八、技术转让费' onclick="_hideEditor()" class="report1_2">十八、技术转让费</td>
		<td id="report1_C23" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D23" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_23_4_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_23_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_C23' ) )<0?_parseValue( document.getElementById( 'report1_D23' ) )<=-_parseValue( document.getElementById( 'report1_C23' ) ):_parseValue( document.getElementById( 'report1_D23' ) )<=_parseValue( document.getElementById( 'report1_C23' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_D23,report1_C23" );}catch(e){}
			alert( '行次18 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E23" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F23" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_23_6_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_23_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E23' ) )<0?_parseValue( document.getElementById( 'report1_F23' ) )<=-_parseValue( document.getElementById( 'report1_E23' ) ):_parseValue( document.getElementById( 'report1_F23' ) )<=_parseValue( document.getElementById( 'report1_E23' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E23,report1_F23" );}catch(e){}
			alert( '行次18 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G23" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H23" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I23" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="24" height=20 style="height:20px;">
		<td id="report1_A24" colNo=1 value='19' onclick="_hideEditor()" class="report1_5">19</td>
		<td id="report1_B24" colNo=2 value='十九、研究费用' onclick="_hideEditor()" class="report1_2">十九、研究费用</td>
		<td id="report1_C24" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D24" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_24_4_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_24_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_C24' ) )<0?_parseValue( document.getElementById( 'report1_D24' ) )<=-_parseValue( document.getElementById( 'report1_C24' ) ):_parseValue( document.getElementById( 'report1_D24' ) )<=_parseValue( document.getElementById( 'report1_C24' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_D24,report1_C24" );}catch(e){}
			alert( '行次19 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E24" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F24" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_24_6_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_24_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E24' ) )<0?_parseValue( document.getElementById( 'report1_F24' ) )<=-_parseValue( document.getElementById( 'report1_E24' ) ):_parseValue( document.getElementById( 'report1_F24' ) )<=_parseValue( document.getElementById( 'report1_E24' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E24,report1_F24" );}catch(e){}
			alert( '行次19 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G24" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H24" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I24" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="25" height=20 style="height:20px;">
		<td id="report1_A25" colNo=1 value='20' onclick="_hideEditor()" class="report1_5">20</td>
		<td id="report1_B25" colNo=2 value='二十、各项税费' onclick="_hideEditor()" class="report1_2">二十、各项税费</td>
		<td id="report1_C25" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D25" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_E25" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F25" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_G25" colNo=7 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H25" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I25" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="26" height=20 style="height:20px;">
		<td id="report1_A26" colNo=1 value='21' onclick="_hideEditor()" class="report1_5">21</td>
		<td id="report1_B26" colNo=2 value='二十一、利息收支' onclick="_hideEditor()" class="report1_2">二十一、利息收支</td>
		<td id="report1_C26" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_D26" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_E26" colNo=5 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_F26" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_G26" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='-8.24' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">-8.24</td>
		<td id="report1_H26" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_I26" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="27" height=20 style="height:20px;">
		<td id="report1_A27" colNo=1 value='22' onclick="_hideEditor()" class="report1_5">22</td>
		<td id="report1_B27" colNo=2 value='二十二、汇兑差额' onclick="_hideEditor()" class="report1_2">二十二、汇兑差额</td>
		<td id="report1_C27" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_D27" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_E27" colNo=5 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_F27" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_G27" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_H27" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_I27" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="28" height=20 style="height:20px;">
		<td id="report1_A28" colNo=1 value='23' onclick="_hideEditor()" class="report1_5">23</td>
		<td id="report1_B28" colNo=2 value='二十三、现金折扣' onclick="_hideEditor()" class="report1_2">二十三、现金折扣</td>
		<td id="report1_C28" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_D28" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_E28" colNo=5 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_F28" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_G28" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_H28" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I28" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="29" height=20 style="height:20px;">
		<td id="report1_A29" colNo=1 value='24' onclick="_hideEditor()" class="report1_5">24</td>
		<td id="report1_B29" colNo=2 value='二十四、其他' onclick="_hideEditor()" class="report1_2">二十四、其他</td>
		<td id="report1_C29" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_D29" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_29_4_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_29_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_C29' ) )<0?_parseValue( document.getElementById( 'report1_D29' ) )<=-_parseValue( document.getElementById( 'report1_C29' ) ):_parseValue( document.getElementById( 'report1_D29' ) )<=_parseValue( document.getElementById( 'report1_C29' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_C29,report1_D29" );}catch(e){}
			alert( '行次24 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E29" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='17105.29' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">17105.29</td>
		<td id="report1_F29" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_29_6_dataValid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_29_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E29' ) )<0?_parseValue( document.getElementById( 'report1_F29' ) )<=-_parseValue( document.getElementById( 'report1_E29' ) ):_parseValue( document.getElementById( 'report1_F29' ) )<=_parseValue( document.getElementById( 'report1_E29' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_F29,report1_E29" );}catch(e){}
			alert( '行次24 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G29" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_H29" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_I29" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="30" height=20 style="height:20px;">
		<td id="report1_A30" colNo=1 value='25' onclick="_hideEditor()" class="report1_5">25</td>
		<td id="report1_B30" colNo=2 value='合计(1+2+3+…24)' onclick="_hideEditor()" class="report1_2">合计(1+2+3+…24)</td>
		<td id="report1_C30" colNo=3 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_D30" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_E30" colNo=5 value='32232.29' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">32232.29</td>
		<td id="report1_F30" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_7">0.00</td>
		<td id="report1_G30" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='-8.24' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_7">-8.24</td>
		<td id="report1_H30" colNo=8 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_7">0.00</td>
		<td id="report1_I30" colNo=9 value='' onclick="_hideEditor()" class="report1_8" style="display:none;"></td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,C6,C7,C8,C9,C10,C11,C12,C13,C14,C15,C16,C17,C18,C19,C20,C21,C22,C23,C24,C25,C29,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C6' ) )+_parseValue( document.getElementById( 'report1_C7' ) )+_parseValue( document.getElementById( 'report1_C8' ) )+_parseValue( document.getElementById( 'report1_C9' ) )+_parseValue( document.getElementById( 'report1_C10' ) )+_parseValue( document.getElementById( 'report1_C11' ) )+_parseValue( document.getElementById( 'report1_C12' ) )+_parseValue( document.getElementById( 'report1_C13' ) )+_parseValue( document.getElementById( 'report1_C14' ) )+_parseValue( document.getElementById( 'report1_C15' ) )+_parseValue( document.getElementById( 'report1_C16' ) )+_parseValue( document.getElementById( 'report1_C17' ) )+_parseValue( document.getElementById( 'report1_C18' ) )+_parseValue( document.getElementById( 'report1_C19' ) )+_parseValue( document.getElementById( 'report1_C20' ) )+_parseValue( document.getElementById( 'report1_C21' ) )+_parseValue( document.getElementById( 'report1_C22' ) )+_parseValue( document.getElementById( 'report1_C23' ) )+_parseValue( document.getElementById( 'report1_C24' ) )+_parseValue( document.getElementById( 'report1_C25' ) )+_parseValue( document.getElementById( 'report1_C29' ) )).toFixed(2);
				document.getElementById( 'report1_C30' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_C30' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_C30' ) );
			}catch(e1){}
		}
		cells = ",,D7,D8,D11,D16,D20,D21,D23,D24,D29,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D7' ) )+_parseValue( document.getElementById( 'report1_D8' ) )+_parseValue( document.getElementById( 'report1_D11' ) )+_parseValue( document.getElementById( 'report1_D16' ) )+_parseValue( document.getElementById( 'report1_D20' ) )+_parseValue( document.getElementById( 'report1_D21' ) )+_parseValue( document.getElementById( 'report1_D23' ) )+_parseValue( document.getElementById( 'report1_D24' ) )+_parseValue( document.getElementById( 'report1_D29' ) )).toFixed(2);
				document.getElementById( 'report1_D30' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D30' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D30' ) );
			}catch(e1){}
		}
		cells = ",,E6,E7,E8,E9,E10,E11,E12,E13,E14,E15,E16,E17,E18,E19,E20,E21,E22,E23,E24,E25,E29,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E6' ) )+_parseValue( document.getElementById( 'report1_E7' ) )+_parseValue( document.getElementById( 'report1_E8' ) )+_parseValue( document.getElementById( 'report1_E9' ) )+_parseValue( document.getElementById( 'report1_E10' ) )+_parseValue( document.getElementById( 'report1_E11' ) )+_parseValue( document.getElementById( 'report1_E12' ) )+_parseValue( document.getElementById( 'report1_E13' ) )+_parseValue( document.getElementById( 'report1_E14' ) )+_parseValue( document.getElementById( 'report1_E15' ) )+_parseValue( document.getElementById( 'report1_E16' ) )+_parseValue( document.getElementById( 'report1_E17' ) )+_parseValue( document.getElementById( 'report1_E18' ) )+_parseValue( document.getElementById( 'report1_E19' ) )+_parseValue( document.getElementById( 'report1_E20' ) )+_parseValue( document.getElementById( 'report1_E21' ) )+_parseValue( document.getElementById( 'report1_E22' ) )+_parseValue( document.getElementById( 'report1_E23' ) )+_parseValue( document.getElementById( 'report1_E24' ) )+_parseValue( document.getElementById( 'report1_E25' ) )+_parseValue( document.getElementById( 'report1_E29' ) )).toFixed(2);
				document.getElementById( 'report1_E30' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E30' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E30' ) );
			}catch(e1){}
		}
		cells = ",,F7,F8,F11,F16,F20,F21,F23,F24,F29,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F7' ) )+_parseValue( document.getElementById( 'report1_F8' ) )+_parseValue( document.getElementById( 'report1_F11' ) )+_parseValue( document.getElementById( 'report1_F16' ) )+_parseValue( document.getElementById( 'report1_F20' ) )+_parseValue( document.getElementById( 'report1_F21' ) )+_parseValue( document.getElementById( 'report1_F23' ) )+_parseValue( document.getElementById( 'report1_F24' ) )+_parseValue( document.getElementById( 'report1_F29' ) )).toFixed(2);
				document.getElementById( 'report1_F30' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F30' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F30' ) );
			}catch(e1){}
		}
		cells = ",,G11,G26,G27,G28,G29,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G11' ) )+_parseValue( document.getElementById( 'report1_G26' ) )+_parseValue( document.getElementById( 'report1_G27' ) )+_parseValue( document.getElementById( 'report1_G28' ) )+_parseValue( document.getElementById( 'report1_G29' ) )).toFixed(2);
				document.getElementById( 'report1_G30' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G30' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G30' ) );
			}catch(e1){}
		}
		cells = ",,H11,H26,H27,H29,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H11' ) )+_parseValue( document.getElementById( 'report1_H26' ) )+_parseValue( document.getElementById( 'report1_H27' ) )+_parseValue( document.getElementById( 'report1_H29' ) )).toFixed(2);
				document.getElementById( 'report1_H30' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H30' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H30' ) );
			}catch(e1){}
		}
		try{ group_autoCalc( 'report1_' + cellName ); }catch(e){}
	}

	function report1_checkValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_C7' ) )<0?_parseValue( document.getElementById( 'report1_D7' ) )<=-_parseValue( document.getElementById( 'report1_C7' ) ):_parseValue( document.getElementById( 'report1_D7' ) )<=_parseValue( document.getElementById( 'report1_C7' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_C7,report1_D7" );}catch(e){}
			alert( '行次2 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E7' ) )<0?_parseValue( document.getElementById( 'report1_F7' ) )<=-_parseValue( document.getElementById( 'report1_E7' ) ):_parseValue( document.getElementById( 'report1_F7' ) )<=_parseValue( document.getElementById( 'report1_E7' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E7,report1_F7" );}catch(e){}
			alert( '行次2 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_C8' ) )<0?_parseValue( document.getElementById( 'report1_D8' ) )<=-_parseValue( document.getElementById( 'report1_C8' ) ):_parseValue( document.getElementById( 'report1_D8' ) )<=_parseValue( document.getElementById( 'report1_C8' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_C8,report1_D8" );}catch(e){}
			alert( '行次3 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E8' ) )<0?_parseValue( document.getElementById( 'report1_F8' ) )<=-_parseValue( document.getElementById( 'report1_E8' ) ):_parseValue( document.getElementById( 'report1_F8' ) )<=_parseValue( document.getElementById( 'report1_E8' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_F8,report1_E8" );}catch(e){}
			alert( '行次3 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_C11' ) )<0?_parseValue( document.getElementById( 'report1_D11' ) )<=-_parseValue( document.getElementById( 'report1_C11' ) ):_parseValue( document.getElementById( 'report1_D11' ) )<=_parseValue( document.getElementById( 'report1_C11' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_D11,report1_C11" );}catch(e){}
			alert( '行次6 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E11' ) )<0?_parseValue( document.getElementById( 'report1_F11' ) )<=-_parseValue( document.getElementById( 'report1_E11' ) ):_parseValue( document.getElementById( 'report1_F11' ) )<=_parseValue( document.getElementById( 'report1_E11' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_F11,report1_E11" );}catch(e){}
			alert( '行次6 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_G11' ) )<0?_parseValue( document.getElementById( 'report1_H11' ) )<=-_parseValue( document.getElementById( 'report1_G11' ) ):_parseValue( document.getElementById( 'report1_H11' ) )<=_parseValue( document.getElementById( 'report1_G11' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_H11,report1_G11" );}catch(e){}
			alert( '行次6 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_C16' ) )<0?_parseValue( document.getElementById( 'report1_D16' ) )<=-_parseValue( document.getElementById( 'report1_C16' ) ):_parseValue( document.getElementById( 'report1_D16' ) )<=_parseValue( document.getElementById( 'report1_C16' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_C16,report1_D16" );}catch(e){}
			alert( '行次11 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E16' ) )<0?_parseValue( document.getElementById( 'report1_F16' ) )<=-_parseValue( document.getElementById( 'report1_E16' ) ):_parseValue( document.getElementById( 'report1_F16' ) )<=_parseValue( document.getElementById( 'report1_E16' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E16,report1_F16" );}catch(e){}
			alert( '行次11 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_C20' ) )<0?_parseValue( document.getElementById( 'report1_D20' ) )<=-_parseValue( document.getElementById( 'report1_C20' ) ):_parseValue( document.getElementById( 'report1_D20' ) )<=_parseValue( document.getElementById( 'report1_C20' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_D20,report1_C20" );}catch(e){}
			alert( '行次15 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E20' ) )<0?_parseValue( document.getElementById( 'report1_F20' ) )<=-_parseValue( document.getElementById( 'report1_E20' ) ):_parseValue( document.getElementById( 'report1_F20' ) )<=_parseValue( document.getElementById( 'report1_E20' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E20,report1_F20" );}catch(e){}
			alert( '行次15 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_C21' ) )<0?_parseValue( document.getElementById( 'report1_D21' ) )<=-_parseValue( document.getElementById( 'report1_C21' ) ):_parseValue( document.getElementById( 'report1_D21' ) )<=_parseValue( document.getElementById( 'report1_C21' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_D21,report1_C21" );}catch(e){}
			alert( '行次16 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E21' ) )<0?_parseValue( document.getElementById( 'report1_F21' ) )<=-_parseValue( document.getElementById( 'report1_E21' ) ):_parseValue( document.getElementById( 'report1_F21' ) )<=_parseValue( document.getElementById( 'report1_E21' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E21,report1_F21" );}catch(e){}
			alert( '行次16 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_C23' ) )<0?_parseValue( document.getElementById( 'report1_D23' ) )<=-_parseValue( document.getElementById( 'report1_C23' ) ):_parseValue( document.getElementById( 'report1_D23' ) )<=_parseValue( document.getElementById( 'report1_C23' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_D23,report1_C23" );}catch(e){}
			alert( '行次18 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E23' ) )<0?_parseValue( document.getElementById( 'report1_F23' ) )<=-_parseValue( document.getElementById( 'report1_E23' ) ):_parseValue( document.getElementById( 'report1_F23' ) )<=_parseValue( document.getElementById( 'report1_E23' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E23,report1_F23" );}catch(e){}
			alert( '行次18 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_C24' ) )<0?_parseValue( document.getElementById( 'report1_D24' ) )<=-_parseValue( document.getElementById( 'report1_C24' ) ):_parseValue( document.getElementById( 'report1_D24' ) )<=_parseValue( document.getElementById( 'report1_C24' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_D24,report1_C24" );}catch(e){}
			alert( '行次19 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E24' ) )<0?_parseValue( document.getElementById( 'report1_F24' ) )<=-_parseValue( document.getElementById( 'report1_E24' ) ):_parseValue( document.getElementById( 'report1_F24' ) )<=_parseValue( document.getElementById( 'report1_E24' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E24,report1_F24" );}catch(e){}
			alert( '行次19 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_C29' ) )<0?_parseValue( document.getElementById( 'report1_D29' ) )<=-_parseValue( document.getElementById( 'report1_C29' ) ):_parseValue( document.getElementById( 'report1_D29' ) )<=_parseValue( document.getElementById( 'report1_C29' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_C29,report1_D29" );}catch(e){}
			alert( '行次24 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E29' ) )<0?_parseValue( document.getElementById( 'report1_F29' ) )<=-_parseValue( document.getElementById( 'report1_E29' ) ):_parseValue( document.getElementById( 'report1_F29' ) )<=_parseValue( document.getElementById( 'report1_E29' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_F29,report1_E29" );}catch(e){}
			alert( '行次24 其中：境外支付金额应小于等于对应的费用金额的绝对值' );
			return false;
		}
		return true;
	}

</script>
</div>
</td></tr></table>
<div style="display:none"><form id="report1_submitForm" method=post action="/WSSBSL/reportServlet.aspx?action=11" target="submitFrame">
	<input type=hidden name=fileName value="/ndsdsA/sb_ndsds_2014_fb6.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_74727">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2FndsdsA%2Fsb_ndsds_2014_fb6.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000015884336&sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466&reportParamsId=15115066322565559172190">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_NDSDS_2014_FB6;xmlName=ndsdsA/sb_ndsds_2014_fb6;pzxh=10014517000015884336;nsrsbh=91450107MA5KE0EQ2B;dataFromBz=0;raq=/ndsdsA/sb_ndsds_2014_fb6.raq;sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/ndsdsA/sb_ndsds_2014_fb6.raq&srcType=file&cachedId=10_1_1_176_8080_74727&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_NDSDS_2014_FB6%3BxmlName%3DndsdsA%2Fsb_ndsds_2014_fb6%3Bpzxh%3D10014517000015884336%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdataFromBz%3D0%3Braq%3D%2FndsdsA%2Fsb_ndsds_2014_fb6.raq%3Bsbuuid%3D4F35CE4F88AE666EB53FF3AE9DC76466%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

