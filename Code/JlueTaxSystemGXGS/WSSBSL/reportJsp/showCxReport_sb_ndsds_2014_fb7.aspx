<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_sb_ndsds_2014_fb7.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_sb_ndsds_2014_fb7" %>










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
	var report1_cachedId = "10_1_1_176_8080_74732";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2FndsdsA%2Fsb_ndsds_2014_fb7.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15115066322885463172195&cachedId=10_1_1_176_8080_74732&t_i_m_e=1511506632553" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2FndsdsA%2Fsb_ndsds_2014_fb7.raq&columns=0&srcType=file&reportParamsId=15115066322885463172195&cachedId=10_1_1_176_8080_74732&t_i_m_e=1511506632553" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2FndsdsA%2Fsb_ndsds_2014_fb7.raq&columns=0&srcType=file&reportParamsId=15115066322885463172195&cachedId=10_1_1_176_8080_74732&t_i_m_e=1511506632553";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2FndsdsA%2Fsb_ndsds_2014_fb7.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15115066322885463172195&cachedId=10_1_1_176_8080_74732&t_i_m_e=1511506632553";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2FndsdsA%2Fsb_ndsds_2014_fb7.raq&srcType=file&reportParamsId=15115066322885463172195&cachedId=10_1_1_176_8080_74732&t_i_m_e=1511506632553" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_fb7.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15115066322885463172195&cachedId=10_1_1_176_8080_74732&t_i_m_e=1511506632553";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_fb7.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15115066322885463172195&cachedId=10_1_1_176_8080_74732&t_i_m_e=1511506632553";
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
	.report1_2 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_8 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:center;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_12 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_13 { text-align:left;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1488713out()" onmouseover="report1488713over()" rowCount=47 cols=7 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:913px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:48px;"></col>
		<col style="width:445px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
	</colgroup>
	<tr rn="1" height=30 style="height:30px;">
		<td colSpan=6 id="report1_A1" colNo=1 value='10014517000015884336' onclick="_hideEditor()" class="report1_13">A105000</td>
		<td id="report1_G1" colNo=7 bkj="true" value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_13" style="display:none;"></td>
	</tr>
	<tr rn="2" height=30 style="height:30px;">
		<td colSpan=6 id="report1_A2" colNo=1 value='纳税调整项目明细表' onclick="_hideEditor()" class="report1_11">纳税调整项目明细表</td>
		<td id="report1_G2" colNo=7 bkj="true" value='2017-05-08' onclick="_hideEditor()" class="report1_11" style="display:none;"></td>
	</tr>
	<tr rn="3" height=20 style="height:20px;">
		<td rowSpan=2 id="report1_A3" colNo=1 value='行次' onclick="_hideEditor()" class="report1_4">行次</td>
		<td rowSpan=2 id="report1_B3" colNo=2 value='项        目' onclick="_hideEditor()" class="report1_4">项&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目</td>
		<td id="report1_C3" colNo=3 value='账载金额' onclick="_hideEditor()" class="report1_4">账载金额</td>
		<td id="report1_D3" colNo=4 value='税收金额' onclick="_hideEditor()" class="report1_4">税收金额</td>
		<td id="report1_E3" colNo=5 value='调增金额' onclick="_hideEditor()" class="report1_4">调增金额</td>
		<td id="report1_F3" colNo=6 value='调减金额' onclick="_hideEditor()" class="report1_4">调减金额</td>
		<td id="report1_G3" colNo=7 bkj="true" value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="4" height=20 style="height:20px;">
		<td id="report1_C4" colNo=3 value='1' onclick="_hideEditor()" class="report1_4">1</td>
		<td id="report1_D4" colNo=4 value='2' onclick="_hideEditor()" class="report1_4">2</td>
		<td id="report1_E4" colNo=5 value='3' onclick="_hideEditor()" class="report1_4">3</td>
		<td id="report1_F4" colNo=6 value='4' onclick="_hideEditor()" class="report1_4">4</td>
		<td id="report1_G4" colNo=7 bkj="true" value='2016-01-01' onclick="_hideEditor()" class="report1_12" style="display:none;"></td>
	</tr>
	<tr rn="5" height=20 style="height:20px;">
		<td id="report1_A5" colNo=1 value='1' onclick="_hideEditor()" class="report1_4">1</td>
		<td id="report1_B5" colNo=2 value='一、收入类调整项目（2+3+4+5+6+7+8+10+11）' onclick="_hideEditor()" class="report1_5">一、收入类调整项目（2+3+4+5+6+7+8+10+11）</td>
		<td id="report1_C5" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D5" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E5" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_5_5_dataValid()" onclick="_hideEditor()" class="report1_3">0.00</td>
<script language=javascript>
	function report1_5_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E5' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E5" );}catch(e){}
			alert( '行次1 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F5" colNo=6 value='0.0' format="%230.00" digits="2" dataValid="report1_5_6_dataValid()" onclick="_hideEditor()" class="report1_3">0.00</td>
<script language=javascript>
	function report1_5_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F5' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F5" );}catch(e){}
			alert( '行次1 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G5" colNo=7 bkj="true" value='2016-12-31' onclick="_hideEditor()" class="report1_12" style="display:none;"></td>
	</tr>
	<tr rn="6" height=20 style="height:20px;">
		<td id="report1_A6" colNo=1 value='2' onclick="_hideEditor()" class="report1_4">2</td>
		<td id="report1_B6" colNo=2 value='　  （一）视同销售收入（填写A105010）' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（一）视同销售收入（填写A105010）</td>
		<td id="report1_C6" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D6" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E6" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_6_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_6_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E6' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E6" );}catch(e){}
			alert( '行次2 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F6" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_G6" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="7" height=20 style="height:20px;">
		<td id="report1_A7" colNo=1 value='3' onclick="_hideEditor()" class="report1_4">3</td>
		<td id="report1_B7" colNo=2 value='　  （二）未按权责发生制原则确认的收入（填写A105020）' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（二）未按权责发生制原则确认的收入（填写A105020）</td>
		<td id="report1_C7" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D7" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E7" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_7_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_7_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E7' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E7" );}catch(e){}
			alert( '行次3 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F7" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_7_6_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_7_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F7' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F7" );}catch(e){}
			alert( '行次3 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G7" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="8" height=20 style="height:20px;">
		<td id="report1_A8" colNo=1 value='4' onclick="_hideEditor()" class="report1_4">4</td>
		<td id="report1_B8" colNo=2 value='    （三）投资收益（填写A105030）' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（三）投资收益（填写A105030）</td>
		<td id="report1_C8" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D8" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E8" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_8_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_8_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E8' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E8" );}catch(e){}
			alert( '行次4 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F8" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_8_6_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_8_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F8' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F8" );}catch(e){}
			alert( '行次4 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G8" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="9" height=20 style="height:20px;">
		<td id="report1_A9" colNo=1 value='5' onclick="_hideEditor()" class="report1_4">5</td>
		<td id="report1_B9" colNo=2 value='　  （四）按权益法核算长期股权投资对初始投资成本调整确认收益' onclick="_hideEditor()" class="report1_7">&nbsp;&nbsp;&nbsp;&nbsp;（四）按权益法核算长期股权投资对初始投资成本调整确认收益</td>
		<td id="report1_C9" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D9" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E9" colNo=5 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_F9" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_9_6_dataValid()" onclick="_displayEditor()" class="report1_9">0.00</td>
<script language=javascript>
	function report1_9_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F9' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F9" );}catch(e){}
			alert( '行次5 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G9" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="10" height=20 style="height:20px;">
		<td id="report1_A10" colNo=1 value='6' onclick="_hideEditor()" class="report1_4">6</td>
		<td id="report1_B10" colNo=2 value='    （五）交易性金融资产初始投资调整  ' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（五）交易性金融资产初始投资调整&nbsp;&nbsp;</td>
		<td id="report1_C10" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D10" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E10" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_10_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_10_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E10' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E10" );}catch(e){}
			alert( '行次6 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F10" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_G10" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="11" height=20 style="height:20px;">
		<td id="report1_A11" colNo=1 value='7' onclick="_hideEditor()" class="report1_4">7</td>
		<td id="report1_B11" colNo=2 value='　  （六）公允价值变动净损益' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（六）公允价值变动净损益</td>
		<td id="report1_C11" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D11" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E11" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_11_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_11_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E11' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E11" );}catch(e){}
			alert( '行次7 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F11" colNo=6 value='0.0' format="%230.00" digits="2" dataValid="report1_11_6_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_11_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F11' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F11" );}catch(e){}
			alert( '行次7 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G11" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="12" height=20 style="height:20px;">
		<td id="report1_A12" colNo=1 value='8' onclick="_hideEditor()" class="report1_4">8</td>
		<td id="report1_B12" colNo=2 value='    （七）不征税收入' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（七）不征税收入</td>
		<td id="report1_C12" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D12" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E12" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_12_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_12_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E12' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E12" );}catch(e){}
			alert( '第8行3列>=0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E12' ) )>=_parseValue( document.getElementById( 'report1_E13' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E13,report1_E12" );}catch(e){}
			alert( '第8行3列>=第9行3列' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F12" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_12_6_dataValid()" onclick="_displayEditor()" class="report1_9">0.00</td>
<script language=javascript>
	function report1_12_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F12' ) )>=_parseValue( document.getElementById( 'report1_F13' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_F12,report1_F13" );}catch(e){}
			alert( '第8行4列>=第9行4列' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F12' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F12" );}catch(e){}
			alert( '第8行4列>=0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G12" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_12" style="display:none;"></td>
	</tr>
	<tr rn="13" height=20 style="height:20px;">
		<td id="report1_A13" colNo=1 value='9' onclick="_hideEditor()" class="report1_4">9</td>
		<td id="report1_B13" colNo=2 value='          其中：专项用途财政性资金（填写A105040）' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：专项用途财政性资金（填写A105040）</td>
		<td id="report1_C13" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D13" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E13" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_13_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_13_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E13' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E13" );}catch(e){}
			alert( '行次9 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F13" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_13_6_dataValid()" onclick="_displayEditor()" class="report1_9">0.00</td>
<script language=javascript>
	function report1_13_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F13' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F13" );}catch(e){}
			alert( '行次9 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G13" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="14" height=20 style="height:20px;">
		<td id="report1_A14" colNo=1 value='10' onclick="_hideEditor()" class="report1_4">10</td>
		<td id="report1_B14" colNo=2 value='    （八）销售折扣、折让和退回' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（八）销售折扣、折让和退回</td>
		<td id="report1_C14" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D14" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E14" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_14_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_14_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E14' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E14" );}catch(e){}
			alert( '行次10 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F14" colNo=6 value='0.0' format="%230.00" digits="2" dataValid="report1_14_6_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_14_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F14' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F14" );}catch(e){}
			alert( '行次10 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G14" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="15" height=20 style="height:20px;">
		<td id="report1_A15" colNo=1 value='11' onclick="_hideEditor()" class="report1_4">11</td>
		<td id="report1_B15" colNo=2 value='　  （九）其他' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（九）其他</td>
		<td id="report1_C15" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D15" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E15" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_15_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_15_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E15' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E15" );}catch(e){}
			alert( '行次11 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F15" colNo=6 value='0.0' format="%230.00" digits="2" dataValid="report1_15_6_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_15_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F15' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F15" );}catch(e){}
			alert( '行次11 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G15" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="16" height=20 style="height:20px;">
		<td id="report1_A16" colNo=1 value='12' onclick="_hideEditor()" class="report1_4">12</td>
		<td id="report1_B16" colNo=2 value='二、扣除类调整项目（13+14+15+16+17+18+19+20+21+22+23+24+26+27+28+29）' onclick="_hideEditor()" class="report1_7">二、扣除类调整项目（13+14+15+16+17+18+19+20+21+22+23+24+26+27+28+29）</td>
		<td id="report1_C16" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D16" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E16" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_16_5_dataValid()" onclick="_hideEditor()" class="report1_3">0.00</td>
<script language=javascript>
	function report1_16_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E16' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E16" );}catch(e){}
			alert( '行次12 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F16" colNo=6 value='0.0' format="%230.00" digits="2" dataValid="report1_16_6_dataValid()" onclick="_hideEditor()" class="report1_3">0.00</td>
<script language=javascript>
	function report1_16_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F16' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F16" );}catch(e){}
			alert( '行次12 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G16" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="17" height=20 style="height:20px;">
		<td id="report1_A17" colNo=1 value='13' onclick="_hideEditor()" class="report1_4">13</td>
		<td id="report1_B17" colNo=2 value='　  （一）视同销售成本（填写A105010）' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（一）视同销售成本（填写A105010）</td>
		<td id="report1_C17" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D17" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E17" colNo=5 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_F17" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_17_6_dataValid()" onclick="_displayEditor()" class="report1_9">0.00</td>
<script language=javascript>
	function report1_17_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F17' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F17" );}catch(e){}
			alert( '行次13 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G17" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="18" height=20 style="height:20px;">
		<td id="report1_A18" colNo=1 value='14' onclick="_hideEditor()" class="report1_4">14</td>
		<td id="report1_B18" colNo=2 value='　  （二）职工薪酬（填写A105050）' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（二）职工薪酬（填写A105050）</td>
		<td id="report1_C18" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='13200.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">13200.00</td>
		<td id="report1_D18" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='13200.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">13200.00</td>
		<td id="report1_E18" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_18_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_18_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E18' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E18" );}catch(e){}
			alert( '行次14 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F18" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_18_6_dataValid()" onclick="_displayEditor()" class="report1_9">0.00</td>
<script language=javascript>
	function report1_18_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F18' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F18" );}catch(e){}
			alert( '行次14 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G18" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="19" height=20 style="height:20px;">
		<td id="report1_A19" colNo=1 value='15' onclick="_hideEditor()" class="report1_4">15</td>
		<td id="report1_B19" colNo=2 value='　  （三）业务招待费支出' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（三）业务招待费支出</td>
		<td id="report1_C19" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_19_3_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_19_3_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_C19' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_C19" );}catch(e){}
			alert( '第15行1列 >= 0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_D19" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E19" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_19_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_19_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E19' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E19" );}catch(e){}
			alert( '行次15 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F19" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_G19" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_12" style="display:none;"></td>
	</tr>
	<tr rn="20" height=20 style="height:20px;">
		<td id="report1_A20" colNo=1 value='16' onclick="_hideEditor()" class="report1_4">16</td>
		<td id="report1_B20" colNo=2 value='　  （四）广告费和业务宣传费支出（填写A105060）' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（四）广告费和业务宣传费支出（填写A105060）</td>
		<td id="report1_C20" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D20" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E20" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_20_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_20_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E20' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E20" );}catch(e){}
			alert( '行次16 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F20" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_20_6_dataValid()" onclick="_displayEditor()" class="report1_9">0.00</td>
<script language=javascript>
	function report1_20_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F20' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F20" );}catch(e){}
			alert( '行次16 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G20" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="21" height=20 style="height:20px;">
		<td id="report1_A21" colNo=1 value='17' onclick="_hideEditor()" class="report1_4">17</td>
		<td id="report1_B21" colNo=2 value='　  （五）捐赠支出（填写A105070）' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（五）捐赠支出（填写A105070）</td>
		<td id="report1_C21" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D21" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E21" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_21_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_21_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E21' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E21" );}catch(e){}
			alert( '行次17 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F21" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_G21" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="22" height=20 style="height:20px;">
		<td id="report1_A22" colNo=1 value='18' onclick="_hideEditor()" class="report1_4">18</td>
		<td id="report1_B22" colNo=2 value='　  （六）利息支出' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（六）利息支出</td>
		<td id="report1_C22" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D22" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E22" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_22_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_22_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E22' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E22" );}catch(e){}
			alert( '行次18 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F22" colNo=6 value='0.0' format="%230.00" digits="2" dataValid="report1_22_6_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_22_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F22' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F22" );}catch(e){}
			alert( '行次18 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G22" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="23" height=20 style="height:20px;">
		<td id="report1_A23" colNo=1 value='19' onclick="_hideEditor()" class="report1_4">19</td>
		<td id="report1_B23" colNo=2 value='　  （七）罚金、罚款和被没收财物的损失' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（七）罚金、罚款和被没收财物的损失</td>
		<td id="report1_C23" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D23" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E23" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_23_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_23_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E23' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E23" );}catch(e){}
			alert( '行次19 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F23" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_G23" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="24" height=20 style="height:20px;">
		<td id="report1_A24" colNo=1 value='20' onclick="_hideEditor()" class="report1_4">20</td>
		<td id="report1_B24" colNo=2 value='　  （八）税收滞纳金、加收利息' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（八）税收滞纳金、加收利息</td>
		<td id="report1_C24" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D24" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E24" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_24_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_24_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E24' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E24" );}catch(e){}
			alert( '行次20 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F24" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_G24" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="25" height=20 style="height:20px;">
		<td id="report1_A25" colNo=1 value='21' onclick="_hideEditor()" class="report1_4">21</td>
		<td id="report1_B25" colNo=2 value='　  （九）赞助支出' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（九）赞助支出</td>
		<td id="report1_C25" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D25" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E25" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_25_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_25_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E25' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E25" );}catch(e){}
			alert( '行次21 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F25" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_G25" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="26" height=20 style="height:20px;">
		<td id="report1_A26" colNo=1 value='22' onclick="_hideEditor()" class="report1_4">22</td>
		<td id="report1_B26" colNo=2 value='　  （十）与未实现融资收益相关在当期确认的财务费用' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（十）与未实现融资收益相关在当期确认的财务费用</td>
		<td id="report1_C26" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D26" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E26" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_26_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_26_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E26' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E26" );}catch(e){}
			alert( '行次22 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F26" colNo=6 value='0.0' format="%230.00" digits="2" dataValid="report1_26_6_dataValid()" onclick="_hideEditor()" class="report1_10">0.00</td>
<script language=javascript>
	function report1_26_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F26' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F26" );}catch(e){}
			alert( '行次22 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G26" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="27" height=20 style="height:20px;">
		<td id="report1_A27" colNo=1 value='23' onclick="_hideEditor()" class="report1_4">23</td>
		<td id="report1_B27" colNo=2 value='    （十一）佣金和手续费支出' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（十一）佣金和手续费支出</td>
		<td id="report1_C27" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D27" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E27" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_27_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_27_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E27' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E27" );}catch(e){}
			alert( '行次23 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F27" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_G27" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="28" height=20 style="height:20px;">
		<td id="report1_A28" colNo=1 value='24' onclick="_hideEditor()" class="report1_4">24</td>
		<td id="report1_B28" colNo=2 value='　  （十二）不征税收入用于支出所形成的费用 ' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（十二）不征税收入用于支出所形成的费用&nbsp;</td>
		<td id="report1_C28" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D28" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E28" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_28_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_28_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E28' ) )>=_parseValue( document.getElementById( 'report1_E29' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E29,report1_E28" );}catch(e){}
			alert( '第24行3列>=第25行3列' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E28' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E28" );}catch(e){}
			alert( '第24行3列>=0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F28" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_G28" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="29" height=20 style="height:20px;">
		<td id="report1_A29" colNo=1 value='25' onclick="_hideEditor()" class="report1_4">25</td>
		<td id="report1_B29" colNo=2 value='            其中：专项用途财政性资金用于支出所形成的费用（填写A105040）' onclick="_hideEditor()" class="report1_7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：专项用途财政性资金用于支出所形成的费用（填写A105040）</td>
		<td id="report1_C29" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D29" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E29" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_29_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_29_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E29' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E29" );}catch(e){}
			alert( '行次25 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F29" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_G29" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="30" height=20 style="height:20px;">
		<td id="report1_A30" colNo=1 value='26' onclick="_hideEditor()" class="report1_4">26</td>
		<td id="report1_B30" colNo=2 value='    （十三）跨期扣除项目' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（十三）跨期扣除项目</td>
		<td id="report1_C30" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D30" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E30" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_30_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_30_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E30' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E30" );}catch(e){}
			alert( '行次26 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F30" colNo=6 value='0.0' format="%230.00" digits="2" dataValid="report1_30_6_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_30_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F30' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F30" );}catch(e){}
			alert( '行次26 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G30" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="31" height=20 style="height:20px;">
		<td id="report1_A31" colNo=1 value='27' onclick="_hideEditor()" class="report1_4">27</td>
		<td id="report1_B31" colNo=2 value='　  （十四）与取得收入无关的支出' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（十四）与取得收入无关的支出</td>
		<td id="report1_C31" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D31" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E31" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_31_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_31_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E31' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E31" );}catch(e){}
			alert( '行次27 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F31" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_G31" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="32" height=20 style="height:20px;">
		<td id="report1_A32" colNo=1 value='28' onclick="_hideEditor()" class="report1_4">28</td>
		<td id="report1_B32" colNo=2 value='    （十五）境外所得分摊的共同支出' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（十五）境外所得分摊的共同支出</td>
		<td id="report1_C32" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D32" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E32" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_32_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_32_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E32' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E32" );}catch(e){}
			alert( '行次28 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F32" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_G32" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="33" height=20 style="height:20px;">
		<td id="report1_A33" colNo=1 value='29' onclick="_hideEditor()" class="report1_4">29</td>
		<td id="report1_B33" colNo=2 value='　  （十六）其他' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（十六）其他</td>
		<td id="report1_C33" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D33" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E33" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_33_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_33_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E33' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E33" );}catch(e){}
			alert( '行次29 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F33" colNo=6 value='0.0' format="%230.00" digits="2" dataValid="report1_33_6_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_33_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F33' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F33" );}catch(e){}
			alert( '行次29 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G33" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="34" height=20 style="height:20px;">
		<td id="report1_A34" colNo=1 value='30' onclick="_hideEditor()" class="report1_4">30</td>
		<td id="report1_B34" colNo=2 value='三、资产类调整项目（31+32+33+34）' onclick="_hideEditor()" class="report1_5">三、资产类调整项目（31+32+33+34）</td>
		<td id="report1_C34" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D34" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E34" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_34_5_dataValid()" onclick="_hideEditor()" class="report1_3">0.00</td>
<script language=javascript>
	function report1_34_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E34' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E34" );}catch(e){}
			alert( '行次30 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F34" colNo=6 value='0.0' format="%230.00" digits="2" dataValid="report1_34_6_dataValid()" onclick="_hideEditor()" class="report1_3">0.00</td>
<script language=javascript>
	function report1_34_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F34' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F34" );}catch(e){}
			alert( '行次30 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G34" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_12" style="display:none;"></td>
	</tr>
	<tr rn="35" height=20 style="height:20px;">
		<td id="report1_A35" colNo=1 value='31' onclick="_hideEditor()" class="report1_4">31</td>
		<td id="report1_B35" colNo=2 value='    （一）资产折旧、摊销 （填写A105080）' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（一）资产折旧、摊销&nbsp;（填写A105080）</td>
		<td id="report1_C35" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D35" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E35" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_35_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_35_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E35' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E35" );}catch(e){}
			alert( '行次31 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F35" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_35_6_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_35_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F35' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F35" );}catch(e){}
			alert( '行次31 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G35" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="36" height=20 style="height:20px;">
		<td id="report1_A36" colNo=1 value='32' onclick="_hideEditor()" class="report1_4">32</td>
		<td id="report1_B36" colNo=2 value='    （二）资产减值准备金' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（二）资产减值准备金</td>
		<td id="report1_C36" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D36" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E36" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_36_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_36_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E36' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E36" );}catch(e){}
			alert( '行次32 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F36" colNo=6 value='0.0' format="%230.00" digits="2" dataValid="report1_36_6_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_36_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F36' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F36" );}catch(e){}
			alert( '行次32 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G36" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="37" height=20 style="height:20px;">
		<td id="report1_A37" colNo=1 value='33' onclick="_hideEditor()" class="report1_4">33</td>
		<td id="report1_B37" colNo=2 value='　  （三）资产损失（填写A105090）' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（三）资产损失（填写A105090）</td>
		<td id="report1_C37" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D37" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E37" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_37_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_37_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E37' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E37" );}catch(e){}
			alert( '行次33 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F37" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_37_6_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_37_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F37' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F37" );}catch(e){}
			alert( '行次33 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G37" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="38" height=20 style="height:20px;">
		<td id="report1_A38" colNo=1 value='34' onclick="_hideEditor()" class="report1_4">34</td>
		<td id="report1_B38" colNo=2 value='　  （四）其他' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（四）其他</td>
		<td id="report1_C38" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D38" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E38" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_38_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_38_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E38' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E38" );}catch(e){}
			alert( '行次34 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F38" colNo=6 value='0.0' format="%230.00" digits="2" dataValid="report1_38_6_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_38_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F38' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F38" );}catch(e){}
			alert( '行次34 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G38" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="39" height=20 style="height:20px;">
		<td id="report1_A39" colNo=1 value='35' onclick="_hideEditor()" class="report1_4">35</td>
		<td id="report1_B39" colNo=2 value='四、特殊事项调整项目（36+37+38+39+40）' onclick="_hideEditor()" class="report1_7">四、特殊事项调整项目（36+37+38+39+40）</td>
		<td id="report1_C39" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D39" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E39" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_39_5_dataValid()" onclick="_hideEditor()" class="report1_3">0.00</td>
<script language=javascript>
	function report1_39_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E39' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E39" );}catch(e){}
			alert( '行次35 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F39" colNo=6 value='0.0' format="%230.00" digits="2" dataValid="report1_39_6_dataValid()" onclick="_hideEditor()" class="report1_3">0.00</td>
<script language=javascript>
	function report1_39_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F39' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F39" );}catch(e){}
			alert( '行次35 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G39" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_12" style="display:none;"></td>
	</tr>
	<tr rn="40" height=20 style="height:20px;">
		<td id="report1_A40" colNo=1 value='36' onclick="_hideEditor()" class="report1_4">36</td>
		<td id="report1_B40" colNo=2 value='　  （一）企业重组（填写A105100）' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（一）企业重组（填写A105100）</td>
		<td id="report1_C40" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D40" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E40" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_40_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_40_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E40' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E40" );}catch(e){}
			alert( '行次36 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F40" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_40_6_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_40_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F40' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F40" );}catch(e){}
			alert( '行次36 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G40" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="41" height=20 style="height:20px;">
		<td id="report1_A41" colNo=1 value='37' onclick="_hideEditor()" class="report1_4">37</td>
		<td id="report1_B41" colNo=2 value='    （二）政策性搬迁（填写A105110）' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（二）政策性搬迁（填写A105110）</td>
		<td id="report1_C41" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D41" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E41" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_41_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_41_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E41' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E41" );}catch(e){}
			alert( '行次37 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F41" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_41_6_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_41_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F41' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F41" );}catch(e){}
			alert( '行次37 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G41" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="42" height=20 style="height:20px;">
		<td id="report1_A42" colNo=1 value='38' onclick="_hideEditor()" class="report1_4">38</td>
		<td id="report1_B42" colNo=2 value='    （三）特殊行业准备金（填写A105120）' onclick="_hideEditor()" class="report1_7">&nbsp;&nbsp;&nbsp;&nbsp;（三）特殊行业准备金（填写A105120）</td>
		<td id="report1_C42" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_D42" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E42" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_42_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_42_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E42' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E42" );}catch(e){}
			alert( '行次38 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F42" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_42_6_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_42_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F42' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F42" );}catch(e){}
			alert( '行次38 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G42" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="43" height=20 style="height:20px;">
		<td id="report1_A43" colNo=1 value='39' onclick="_hideEditor()" class="report1_4">39</td>
		<td id="report1_B43" colNo=2 value='    （四）房地产开发企业特定业务计算的纳税调整额(填写A105010)' onclick="_hideEditor()" class="report1_7">&nbsp;&nbsp;&nbsp;&nbsp;（四）房地产开发企业特定业务计算的纳税调整额(填写A105010)</td>
		<td id="report1_C43" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D43" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td id="report1_E43" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_43_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_43_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E43' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E43" );}catch(e){}
			alert( '行次39 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F43" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_43_6_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_43_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F43' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F43" );}catch(e){}
			alert( '行次39 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G43" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="44" height=20 style="height:20px;">
		<td id="report1_A44" colNo=1 value='40' onclick="_hideEditor()" class="report1_4">40</td>
		<td id="report1_B44" colNo=2 value='    （五）其他' onclick="_hideEditor()" class="report1_5">&nbsp;&nbsp;&nbsp;&nbsp;（五）其他</td>
		<td id="report1_C44" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D44" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E44" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_44_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_44_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E44' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E44" );}catch(e){}
			alert( '行次40 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F44" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_44_6_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_44_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F44' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F44" );}catch(e){}
			alert( '行次40 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G44" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="45" height=20 style="height:20px;">
		<td id="report1_A45" colNo=1 value='41' onclick="_hideEditor()" class="report1_4">41</td>
		<td id="report1_B45" colNo=2 value='五、特别纳税调整应税所得' onclick="_hideEditor()" class="report1_5">五、特别纳税调整应税所得</td>
		<td id="report1_C45" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D45" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E45" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_45_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_45_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E45' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E45" );}catch(e){}
			alert( '行次41 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F45" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_45_6_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_45_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F45' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F45" );}catch(e){}
			alert( '行次41 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G45" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="46" height=20 style="height:20px;">
		<td id="report1_A46" colNo=1 value='42' onclick="_hideEditor()" class="report1_4">42</td>
		<td id="report1_B46" colNo=2 value='六、其他' onclick="_hideEditor()" class="report1_5">六、其他</td>
		<td id="report1_C46" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D46" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E46" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_46_5_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_46_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E46' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E46" );}catch(e){}
			alert( '行次42 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F46" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_46_6_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_46_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F46' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F46" );}catch(e){}
			alert( '行次42 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G46" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="47" height=20 style="height:20px;">
		<td id="report1_A47" colNo=1 value='43' onclick="_hideEditor()" class="report1_4">43</td>
		<td id="report1_B47" colNo=2 value='合计（1+12+30+35+41+42）' onclick="_hideEditor()" class="report1_5">合计（1+12+30+35+41+42）</td>
		<td id="report1_C47" colNo=3 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_D47" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E47" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_47_5_dataValid()" onclick="_hideEditor()" class="report1_3">0.00</td>
<script language=javascript>
	function report1_47_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E47' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E47" );}catch(e){}
			alert( '行次43 调增金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F47" colNo=6 value='0.0' format="%230.00" digits="2" dataValid="report1_47_6_dataValid()" onclick="_hideEditor()" class="report1_3">0.00</td>
<script language=javascript>
	function report1_47_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F47' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F47" );}catch(e){}
			alert( '行次43 调减金额要大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G47" colNo=7 bkj="true" value='' onclick="_hideEditor()" class="report1_12" style="display:none;"></td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,C11,C11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C11' ) )<0?-_parseValue( document.getElementById( 'report1_C11' ) ):0).toFixed(2);
				document.getElementById( 'report1_E11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E11' ) );
			}catch(e1){}
		}
		cells = ",,C11,C11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C11' ) )>=0?_parseValue( document.getElementById( 'report1_C11' ) ):0).toFixed(2);
				document.getElementById( 'report1_F11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F11' ) );
			}catch(e1){}
		}
		cells = ",,C14,D14,C14,D14,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C14' ) )-_parseValue( document.getElementById( 'report1_D14' ) )>=0?_parseValue( document.getElementById( 'report1_C14' ) )-_parseValue( document.getElementById( 'report1_D14' ) ):0).toFixed(2);
				document.getElementById( 'report1_E14' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E14' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E14' ) );
			}catch(e1){}
		}
		cells = ",,C14,D14,C14,D14,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C14' ) )-_parseValue( document.getElementById( 'report1_D14' ) )<0?-(_parseValue( document.getElementById( 'report1_C14' ) )-_parseValue( document.getElementById( 'report1_D14' ) )):0).toFixed(2);
				document.getElementById( 'report1_F14' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F14' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F14' ) );
			}catch(e1){}
		}
		cells = ",,D15,C15,D15,C15,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D15' ) )>=_parseValue( document.getElementById( 'report1_C15' ) )?_parseValue( document.getElementById( 'report1_D15' ) )-_parseValue( document.getElementById( 'report1_C15' ) ):0).toFixed(2);
				document.getElementById( 'report1_E15' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E15' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E15' ) );
			}catch(e1){}
		}
		cells = ",,D15,C15,C15,D15,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D15' ) )<_parseValue( document.getElementById( 'report1_C15' ) )?_parseValue( document.getElementById( 'report1_C15' ) )-_parseValue( document.getElementById( 'report1_D15' ) ):0).toFixed(2);
				document.getElementById( 'report1_F15' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F15' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F15' ) );
			}catch(e1){}
		}
		cells = ",,C19,D19,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C19' ) )-_parseValue( document.getElementById( 'report1_D19' ) )).toFixed(2);
				document.getElementById( 'report1_E19' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E19' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E19' ) );
			}catch(e1){}
		}
		cells = ",,C22,D22,C22,D22,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C22' ) )>=_parseValue( document.getElementById( 'report1_D22' ) )?_parseValue( document.getElementById( 'report1_C22' ) )-_parseValue( document.getElementById( 'report1_D22' ) ):0).toFixed(2);
				document.getElementById( 'report1_E22' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E22' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E22' ) );
			}catch(e1){}
		}
		cells = ",,C22,D22,D22,C22,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C22' ) )<_parseValue( document.getElementById( 'report1_D22' ) )?_parseValue( document.getElementById( 'report1_D22' ) )-_parseValue( document.getElementById( 'report1_C22' ) ):0).toFixed(2);
				document.getElementById( 'report1_F22' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F22' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F22' ) );
			}catch(e1){}
		}
		cells = ",,C23,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C23' ) )).toFixed(2);
				document.getElementById( 'report1_E23' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E23' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E23' ) );
			}catch(e1){}
		}
		cells = ",,C24,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C24' ) )).toFixed(2);
				document.getElementById( 'report1_E24' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E24' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E24' ) );
			}catch(e1){}
		}
		cells = ",,C25,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C25' ) )).toFixed(2);
				document.getElementById( 'report1_E25' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E25' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E25' ) );
			}catch(e1){}
		}
		cells = ",,C26,D26,C26,D26,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C26' ) )>=_parseValue( document.getElementById( 'report1_D26' ) )?_parseValue( document.getElementById( 'report1_C26' ) )-_parseValue( document.getElementById( 'report1_D26' ) ):0).toFixed(2);
				document.getElementById( 'report1_E26' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E26' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E26' ) );
			}catch(e1){}
		}
		cells = ",,C26,D26,D26,C26,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C26' ) )<_parseValue( document.getElementById( 'report1_D26' ) )?_parseValue( document.getElementById( 'report1_D26' ) )-_parseValue( document.getElementById( 'report1_C26' ) ):0).toFixed(2);
				document.getElementById( 'report1_F26' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F26' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F26' ) );
			}catch(e1){}
		}
		cells = ",,C27,D27,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C27' ) )-_parseValue( document.getElementById( 'report1_D27' ) )).toFixed(2);
				document.getElementById( 'report1_E27' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E27' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E27' ) );
			}catch(e1){}
		}
		cells = ",,C30,D30,C30,D30,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C30' ) )>=_parseValue( document.getElementById( 'report1_D30' ) )?_parseValue( document.getElementById( 'report1_C30' ) )-_parseValue( document.getElementById( 'report1_D30' ) ):0).toFixed(2);
				document.getElementById( 'report1_E30' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E30' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E30' ) );
			}catch(e1){}
		}
		cells = ",,C30,D30,D30,C30,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C30' ) )<_parseValue( document.getElementById( 'report1_D30' ) )?_parseValue( document.getElementById( 'report1_D30' ) )-_parseValue( document.getElementById( 'report1_C30' ) ):0).toFixed(2);
				document.getElementById( 'report1_F30' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F30' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F30' ) );
			}catch(e1){}
		}
		cells = ",,C31,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C31' ) )).toFixed(2);
				document.getElementById( 'report1_E31' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E31' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E31' ) );
			}catch(e1){}
		}
		cells = ",,C33,D33,C33,D33,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C33' ) )>=_parseValue( document.getElementById( 'report1_D33' ) )?_parseValue( document.getElementById( 'report1_C33' ) )-_parseValue( document.getElementById( 'report1_D33' ) ):0).toFixed(2);
				document.getElementById( 'report1_E33' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E33' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E33' ) );
			}catch(e1){}
		}
		cells = ",,C33,D33,D33,C33,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C33' ) )<_parseValue( document.getElementById( 'report1_D33' ) )?_parseValue( document.getElementById( 'report1_D33' ) )-_parseValue( document.getElementById( 'report1_C33' ) ):0).toFixed(2);
				document.getElementById( 'report1_F33' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F33' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F33' ) );
			}catch(e1){}
		}
		cells = ",,C36,C36,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C36' ) )>=0?_parseValue( document.getElementById( 'report1_C36' ) ):0).toFixed(2);
				document.getElementById( 'report1_E36' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E36' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E36' ) );
			}catch(e1){}
		}
		cells = ",,C36,C36,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C36' ) )<0?-_parseValue( document.getElementById( 'report1_C36' ) ):0).toFixed(2);
				document.getElementById( 'report1_F36' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F36' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F36' ) );
			}catch(e1){}
		}
		cells = ",,C38,D38,C38,D38,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C38' ) )>=_parseValue( document.getElementById( 'report1_D38' ) )?_parseValue( document.getElementById( 'report1_C38' ) )-_parseValue( document.getElementById( 'report1_D38' ) ):0).toFixed(2);
				document.getElementById( 'report1_E38' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E38' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E38' ) );
			}catch(e1){}
		}
		cells = ",,C38,D38,D38,C38,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C38' ) )<_parseValue( document.getElementById( 'report1_D38' ) )?_parseValue( document.getElementById( 'report1_D38' ) )-_parseValue( document.getElementById( 'report1_C38' ) ):0).toFixed(2);
				document.getElementById( 'report1_F38' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F38' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F38' ) );
			}catch(e1){}
		}
		cells = ",,E40,E41,E42,E43,E44,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E40' ) )+_parseValue( document.getElementById( 'report1_E41' ) )+_parseValue( document.getElementById( 'report1_E42' ) )+_parseValue( document.getElementById( 'report1_E43' ) )+_parseValue( document.getElementById( 'report1_E44' ) )).toFixed(2);
				document.getElementById( 'report1_E39' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E39' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E39' ) );
			}catch(e1){}
		}
		cells = ",,F40,F41,F42,F43,F44,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F40' ) )+_parseValue( document.getElementById( 'report1_F41' ) )+_parseValue( document.getElementById( 'report1_F42' ) )+_parseValue( document.getElementById( 'report1_F43' ) )+_parseValue( document.getElementById( 'report1_F44' ) )).toFixed(2);
				document.getElementById( 'report1_F39' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F39' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F39' ) );
			}catch(e1){}
		}
		cells = ",,E6,E7,E8,E10,E11,C11,C11,E12,E14,C14,D14,C14,D14,E15,D15,C15,D15,C15,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E6' ) )+_parseValue( document.getElementById( 'report1_E7' ) )+_parseValue( document.getElementById( 'report1_E8' ) )+_parseValue( document.getElementById( 'report1_E10' ) )+_parseValue( document.getElementById( 'report1_E11' ) )+_parseValue( document.getElementById( 'report1_E12' ) )+_parseValue( document.getElementById( 'report1_E14' ) )+_parseValue( document.getElementById( 'report1_E15' ) )).toFixed(2);
				document.getElementById( 'report1_E5' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E5' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E5' ) );
			}catch(e1){}
		}
		cells = ",,F7,F8,F9,F11,C11,C11,F12,F14,C14,D14,C14,D14,F15,D15,C15,C15,D15,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F7' ) )+_parseValue( document.getElementById( 'report1_F8' ) )+_parseValue( document.getElementById( 'report1_F9' ) )+_parseValue( document.getElementById( 'report1_F11' ) )+_parseValue( document.getElementById( 'report1_F12' ) )+_parseValue( document.getElementById( 'report1_F14' ) )+_parseValue( document.getElementById( 'report1_F15' ) )).toFixed(2);
				document.getElementById( 'report1_F5' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F5' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F5' ) );
			}catch(e1){}
		}
		cells = ",,E18,E19,C19,D19,E20,E21,E22,C22,D22,C22,D22,E23,C23,E24,C24,E25,C25,E26,C26,D26,C26,D26,E27,C27,D27,E28,E30,C30,D30,C30,D30,E31,C31,E32,E33,C33,D33,C33,D33,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E18' ) )+_parseValue( document.getElementById( 'report1_E19' ) )+_parseValue( document.getElementById( 'report1_E20' ) )+_parseValue( document.getElementById( 'report1_E21' ) )+_parseValue( document.getElementById( 'report1_E22' ) )+_parseValue( document.getElementById( 'report1_E23' ) )+_parseValue( document.getElementById( 'report1_E24' ) )+_parseValue( document.getElementById( 'report1_E25' ) )+_parseValue( document.getElementById( 'report1_E26' ) )+_parseValue( document.getElementById( 'report1_E27' ) )+_parseValue( document.getElementById( 'report1_E28' ) )+_parseValue( document.getElementById( 'report1_E30' ) )+_parseValue( document.getElementById( 'report1_E31' ) )+_parseValue( document.getElementById( 'report1_E32' ) )+_parseValue( document.getElementById( 'report1_E33' ) )).toFixed(2);
				document.getElementById( 'report1_E16' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E16' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E16' ) );
			}catch(e1){}
		}
		cells = ",,F17,F18,F20,F22,C22,D22,D22,C22,F26,C26,D26,D26,C26,F30,C30,D30,D30,C30,F33,C33,D33,D33,C33,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F17' ) )+_parseValue( document.getElementById( 'report1_F18' ) )+_parseValue( document.getElementById( 'report1_F20' ) )+_parseValue( document.getElementById( 'report1_F22' ) )+_parseValue( document.getElementById( 'report1_F26' ) )+_parseValue( document.getElementById( 'report1_F30' ) )+_parseValue( document.getElementById( 'report1_F33' ) )).toFixed(2);
				document.getElementById( 'report1_F16' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F16' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F16' ) );
			}catch(e1){}
		}
		cells = ",,E35,E36,C36,C36,E37,E38,C38,D38,C38,D38,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E35' ) )+_parseValue( document.getElementById( 'report1_E36' ) )+_parseValue( document.getElementById( 'report1_E37' ) )+_parseValue( document.getElementById( 'report1_E38' ) )).toFixed(2);
				document.getElementById( 'report1_E34' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E34' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E34' ) );
			}catch(e1){}
		}
		cells = ",,F35,F36,C36,C36,F37,F38,C38,D38,D38,C38,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F35' ) )+_parseValue( document.getElementById( 'report1_F36' ) )+_parseValue( document.getElementById( 'report1_F37' ) )+_parseValue( document.getElementById( 'report1_F38' ) )).toFixed(2);
				document.getElementById( 'report1_F34' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F34' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F34' ) );
			}catch(e1){}
		}
		cells = ",,E5,E6,E7,E8,E10,E11,C11,C11,E12,E14,C14,D14,C14,D14,E15,D15,C15,D15,C15,E16,E18,E19,C19,D19,E20,E21,E22,C22,D22,C22,D22,E23,C23,E24,C24,E25,C25,E26,C26,D26,C26,D26,E27,C27,D27,E28,E30,C30,D30,C30,D30,E31,C31,E32,E33,C33,D33,C33,D33,E34,E35,E36,C36,C36,E37,E38,C38,D38,C38,D38,E39,E40,E41,E42,E43,E44,E45,E46,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E5' ) )+_parseValue( document.getElementById( 'report1_E16' ) )+_parseValue( document.getElementById( 'report1_E34' ) )+_parseValue( document.getElementById( 'report1_E39' ) )+_parseValue( document.getElementById( 'report1_E45' ) )+_parseValue( document.getElementById( 'report1_E46' ) )).toFixed(2);
				document.getElementById( 'report1_E47' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E47' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E47' ) );
			}catch(e1){}
		}
		cells = ",,F5,F7,F8,F9,F11,C11,C11,F12,F14,C14,D14,C14,D14,F15,D15,C15,C15,D15,F16,F17,F18,F20,F22,C22,D22,D22,C22,F26,C26,D26,D26,C26,F30,C30,D30,D30,C30,F33,C33,D33,D33,C33,F34,F35,F36,C36,C36,F37,F38,C38,D38,D38,C38,F39,F40,F41,F42,F43,F44,F45,F46,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F5' ) )+_parseValue( document.getElementById( 'report1_F16' ) )+_parseValue( document.getElementById( 'report1_F34' ) )+_parseValue( document.getElementById( 'report1_F39' ) )+_parseValue( document.getElementById( 'report1_F45' ) )+_parseValue( document.getElementById( 'report1_F46' ) )).toFixed(2);
				document.getElementById( 'report1_F47' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F47' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F47' ) );
			}catch(e1){}
		}
		try{ group_autoCalc( 'report1_' + cellName ); }catch(e){}
	}

	function report1_checkValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E5' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E5" );}catch(e){}
			alert( '行次1 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F5' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F5" );}catch(e){}
			alert( '行次1 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E6' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E6" );}catch(e){}
			alert( '行次2 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E7' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E7" );}catch(e){}
			alert( '行次3 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F7' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F7" );}catch(e){}
			alert( '行次3 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E8' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E8" );}catch(e){}
			alert( '行次4 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F8' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F8" );}catch(e){}
			alert( '行次4 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F9' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F9" );}catch(e){}
			alert( '行次5 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E10' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E10" );}catch(e){}
			alert( '行次6 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E11' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E11" );}catch(e){}
			alert( '行次7 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F11' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F11" );}catch(e){}
			alert( '行次7 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E12' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E12" );}catch(e){}
			alert( '第8行3列>=0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E12' ) )>=_parseValue( document.getElementById( 'report1_E13' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E13,report1_E12" );}catch(e){}
			alert( '第8行3列>=第9行3列' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F12' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F12" );}catch(e){}
			alert( '第8行4列>=0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F12' ) )>=_parseValue( document.getElementById( 'report1_F13' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_F12,report1_F13" );}catch(e){}
			alert( '第8行4列>=第9行4列' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E13' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E13" );}catch(e){}
			alert( '行次9 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F13' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F13" );}catch(e){}
			alert( '行次9 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E14' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E14" );}catch(e){}
			alert( '行次10 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F14' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F14" );}catch(e){}
			alert( '行次10 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E15' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E15" );}catch(e){}
			alert( '行次11 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F15' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F15" );}catch(e){}
			alert( '行次11 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E16' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E16" );}catch(e){}
			alert( '行次12 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F16' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F16" );}catch(e){}
			alert( '行次12 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F17' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F17" );}catch(e){}
			alert( '行次13 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E18' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E18" );}catch(e){}
			alert( '行次14 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F18' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F18" );}catch(e){}
			alert( '行次14 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_C19' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_C19" );}catch(e){}
			alert( '第15行1列 >= 0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E19' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E19" );}catch(e){}
			alert( '行次15 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E20' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E20" );}catch(e){}
			alert( '行次16 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F20' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F20" );}catch(e){}
			alert( '行次16 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E21' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E21" );}catch(e){}
			alert( '行次17 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E22' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E22" );}catch(e){}
			alert( '行次18 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F22' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F22" );}catch(e){}
			alert( '行次18 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E23' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E23" );}catch(e){}
			alert( '行次19 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E24' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E24" );}catch(e){}
			alert( '行次20 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E25' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E25" );}catch(e){}
			alert( '行次21 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E26' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E26" );}catch(e){}
			alert( '行次22 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F26' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F26" );}catch(e){}
			alert( '行次22 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E27' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E27" );}catch(e){}
			alert( '行次23 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E28' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E28" );}catch(e){}
			alert( '第24行3列>=0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E28' ) )>=_parseValue( document.getElementById( 'report1_E29' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_E29,report1_E28" );}catch(e){}
			alert( '第24行3列>=第25行3列' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E29' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E29" );}catch(e){}
			alert( '行次25 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E30' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E30" );}catch(e){}
			alert( '行次26 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F30' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F30" );}catch(e){}
			alert( '行次26 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E31' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E31" );}catch(e){}
			alert( '行次27 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E32' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E32" );}catch(e){}
			alert( '行次28 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E33' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E33" );}catch(e){}
			alert( '行次29 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F33' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F33" );}catch(e){}
			alert( '行次29 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E34' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E34" );}catch(e){}
			alert( '行次30 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F34' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F34" );}catch(e){}
			alert( '行次30 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E35' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E35" );}catch(e){}
			alert( '行次31 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F35' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F35" );}catch(e){}
			alert( '行次31 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E36' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E36" );}catch(e){}
			alert( '行次32 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F36' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F36" );}catch(e){}
			alert( '行次32 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E37' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E37" );}catch(e){}
			alert( '行次33 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F37' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F37" );}catch(e){}
			alert( '行次33 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E38' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E38" );}catch(e){}
			alert( '行次34 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F38' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F38" );}catch(e){}
			alert( '行次34 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E39' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E39" );}catch(e){}
			alert( '行次35 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F39' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F39" );}catch(e){}
			alert( '行次35 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E40' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E40" );}catch(e){}
			alert( '行次36 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F40' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F40" );}catch(e){}
			alert( '行次36 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E41' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E41" );}catch(e){}
			alert( '行次37 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F41' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F41" );}catch(e){}
			alert( '行次37 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E42' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E42" );}catch(e){}
			alert( '行次38 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F42' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F42" );}catch(e){}
			alert( '行次38 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E43' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E43" );}catch(e){}
			alert( '行次39 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F43' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F43" );}catch(e){}
			alert( '行次39 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E44' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E44" );}catch(e){}
			alert( '行次40 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F44' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F44" );}catch(e){}
			alert( '行次40 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E45' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E45" );}catch(e){}
			alert( '行次41 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F45' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F45" );}catch(e){}
			alert( '行次41 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E46' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E46" );}catch(e){}
			alert( '行次42 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F46' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F46" );}catch(e){}
			alert( '行次42 调减金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E47' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_E47" );}catch(e){}
			alert( '行次43 调增金额要大于等于0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F47' ) )>=0 ) ) {
			try{ report1_markInvalidCell( "report1_F47" );}catch(e){}
			alert( '行次43 调减金额要大于等于0' );
			return false;
		}
		return true;
	}

</script>
</div>
</td></tr></table>
<div style="display:none"><form id="report1_submitForm" method=post action="/WSSBSL/reportServlet.aspx?action=11" target="submitFrame">
	<input type=hidden name=fileName value="/ndsdsA/sb_ndsds_2014_fb7.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_74732">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2FndsdsA%2Fsb_ndsds_2014_fb7.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000015884336&sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466&reportParamsId=15115066322885463172195">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_NDSDS_2014_FB7;xmlName=ndsdsA/sb_ndsds_2014_fb7;pzxh=10014517000015884336;nsrsbh=91450107MA5KE0EQ2B;dataFromBz=0;raq=/ndsdsA/sb_ndsds_2014_fb7.raq;sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/ndsdsA/sb_ndsds_2014_fb7.raq&srcType=file&cachedId=10_1_1_176_8080_74732&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_NDSDS_2014_FB7%3BxmlName%3DndsdsA%2Fsb_ndsds_2014_fb7%3Bpzxh%3D10014517000015884336%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdataFromBz%3D0%3Braq%3D%2FndsdsA%2Fsb_ndsds_2014_fb7.raq%3Bsbuuid%3D4F35CE4F88AE666EB53FF3AE9DC76466%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

