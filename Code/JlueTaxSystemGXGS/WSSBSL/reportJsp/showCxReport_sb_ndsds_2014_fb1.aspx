<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_sb_ndsds_2014_fb1.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_sb_ndsds_2014_fb1" %>










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
	var report1_cachedId = "10_1_1_176_8080_74735";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2FndsdsA%2Fsb_ndsds_2014_fb1.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15115066352053921172198&cachedId=10_1_1_176_8080_74735&t_i_m_e=1511506635345" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2FndsdsA%2Fsb_ndsds_2014_fb1.raq&columns=0&srcType=file&reportParamsId=15115066352053921172198&cachedId=10_1_1_176_8080_74735&t_i_m_e=1511506635345" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2FndsdsA%2Fsb_ndsds_2014_fb1.raq&columns=0&srcType=file&reportParamsId=15115066352053921172198&cachedId=10_1_1_176_8080_74735&t_i_m_e=1511506635345";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2FndsdsA%2Fsb_ndsds_2014_fb1.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15115066352053921172198&cachedId=10_1_1_176_8080_74735&t_i_m_e=1511506635345";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2FndsdsA%2Fsb_ndsds_2014_fb1.raq&srcType=file&reportParamsId=15115066352053921172198&cachedId=10_1_1_176_8080_74735&t_i_m_e=1511506635345" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_fb1.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15115066352053921172198&cachedId=10_1_1_176_8080_74735&t_i_m_e=1511506635345";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_fb1.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15115066352053921172198&cachedId=10_1_1_176_8080_74735&t_i_m_e=1511506635345";
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
	function report1488721over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1488721out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:center;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:left;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1488721out()" onmouseover="report1488721over()" rowCount=29 cols=4 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:548px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:48px;"></col>
		<col style="width:380px;"></col>
		<col style="width:120px;"></col>
	</colgroup>
	<tr rn="1" height=24 style="height:24px;">
		<td colSpan=3 id="report1_A1" colNo=1 value='10014517000015884336' onclick="_hideEditor()" class="report1_8">A101010</td>
		<td id="report1_D1" colNo=4 bkj="true" value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="2" height=30 style="height:30px;">
		<td colSpan=3 id="report1_A2" colNo=1 value='一般企业收入明细表' onclick="_hideEditor()" class="report1_7">一般企业收入明细表</td>
		<td id="report1_D2" colNo=4 bkj="true" value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="3" height=20 style="height:20px;">
		<td id="report1_A3" colNo=1 value='行次' onclick="_hideEditor()" class="report1_3">行次</td>
		<td id="report1_B3" colNo=2 value='项        目 ' onclick="_hideEditor()" class="report1_3">项&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目&nbsp;</td>
		<td id="report1_C3" colNo=3 value='金    额' onclick="_hideEditor()" class="report1_3">金&nbsp;&nbsp;&nbsp;&nbsp;额</td>
		<td id="report1_D3" colNo=4 bkj="true" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="4" height=20 style="height:20px;">
		<td id="report1_A4" colNo=1 value='1' onclick="_hideEditor()" class="report1_3">1</td>
		<td id="report1_B4" colNo=2 value='一、营业收入（2+9）' onclick="_hideEditor()" class="report1_4">一、营业收入（2+9）</td>
		<td id="report1_C4" colNo=3 value='153861.42' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">153861.42</td>
		<td id="report1_D4" colNo=4 bkj="true" value='2016-01-01' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="5" height=20 style="height:20px;">
		<td id="report1_A5" colNo=1 value='2' onclick="_hideEditor()" class="report1_3">2</td>
		<td id="report1_B5" colNo=2 value='   （一）主营业务收入（3+5+6+7+8）' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;（一）主营业务收入（3+5+6+7+8）</td>
		<td id="report1_C5" colNo=3 value='153861.42' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">153861.42</td>
		<td id="report1_D5" colNo=4 bkj="true" value='2016-12-31' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="6" height=20 style="height:20px;">
		<td id="report1_A6" colNo=1 value='3' onclick="_hideEditor()" class="report1_3">3</td>
		<td id="report1_B6" colNo=2 value='       1.销售商品收入' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.销售商品收入</td>
		<td id="report1_C6" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='153861.42' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">153861.42</td>
		<td id="report1_D6" colNo=4 bkj="true" value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="7" height=20 style="height:20px;">
		<td id="report1_A7" colNo=1 value='4' onclick="_hideEditor()" class="report1_3">4</td>
		<td id="report1_B7" colNo=2 value='         其中：非货币性资产交换收入' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：非货币性资产交换收入</td>
		<td id="report1_C7" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_7_3_dataValid()" onclick="_displayEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_7_3_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_C6' ) )>=0?_parseValue( document.getElementById( 'report1_C7' ) )<=_parseValue( document.getElementById( 'report1_C6' ) ):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_C7,report1_C6" );}catch(e){}
			alert( '第4行<=第3行' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_D7" colNo=4 bkj="true" value='2017-05-08' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="8" height=20 style="height:20px;">
		<td id="report1_A8" colNo=1 value='5' onclick="_hideEditor()" class="report1_3">5</td>
		<td id="report1_B8" colNo=2 value='       2.提供劳务收入' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.提供劳务收入</td>
		<td id="report1_C8" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D8" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="9" height=20 style="height:20px;">
		<td id="report1_A9" colNo=1 value='6' onclick="_hideEditor()" class="report1_3">6</td>
		<td id="report1_B9" colNo=2 value='       3.建造合同收入' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.建造合同收入</td>
		<td id="report1_C9" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D9" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="10" height=20 style="height:20px;">
		<td id="report1_A10" colNo=1 value='7' onclick="_hideEditor()" class="report1_3">7</td>
		<td id="report1_B10" colNo=2 value='       4.让渡资产使用权收入' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.让渡资产使用权收入</td>
		<td id="report1_C10" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D10" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="11" height=20 style="height:20px;">
		<td id="report1_A11" colNo=1 value='8' onclick="_hideEditor()" class="report1_3">8</td>
		<td id="report1_B11" colNo=2 value='       5.其他' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.其他</td>
		<td id="report1_C11" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D11" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="12" height=20 style="height:20px;">
		<td id="report1_A12" colNo=1 value='9' onclick="_hideEditor()" class="report1_3">9</td>
		<td id="report1_B12" colNo=2 value='  （二）其他业务收入（10+12+13+14+15）' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;（二）其他业务收入（10+12+13+14+15）</td>
		<td id="report1_C12" colNo=3 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td id="report1_D12" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="13" height=20 style="height:20px;">
		<td id="report1_A13" colNo=1 value='10' onclick="_hideEditor()" class="report1_3">10</td>
		<td id="report1_B13" colNo=2 value='       1.销售材料收入' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.销售材料收入</td>
		<td id="report1_C13" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D13" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="14" height=20 style="height:20px;">
		<td id="report1_A14" colNo=1 value='11' onclick="_hideEditor()" class="report1_3">11</td>
		<td id="report1_B14" colNo=2 value='         其中：非货币性资产交换收入' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：非货币性资产交换收入</td>
		<td id="report1_C14" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_14_3_dataValid()" onclick="_displayEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_14_3_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_C13' ) )>=0?_parseValue( document.getElementById( 'report1_C14' ) )<=_parseValue( document.getElementById( 'report1_C13' ) ):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_C13,report1_C14" );}catch(e){}
			alert( '第11行<=第10行' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_D14" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="15" height=20 style="height:20px;">
		<td id="report1_A15" colNo=1 value='12' onclick="_hideEditor()" class="report1_3">12</td>
		<td id="report1_B15" colNo=2 value='       2.出租固定资产收入' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.出租固定资产收入</td>
		<td id="report1_C15" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D15" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="16" height=20 style="height:20px;">
		<td id="report1_A16" colNo=1 value='13' onclick="_hideEditor()" class="report1_3">13</td>
		<td id="report1_B16" colNo=2 value='       3.出租无形资产收入' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.出租无形资产收入</td>
		<td id="report1_C16" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D16" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="17" height=20 style="height:20px;">
		<td id="report1_A17" colNo=1 value='14' onclick="_hideEditor()" class="report1_3">14</td>
		<td id="report1_B17" colNo=2 value='       4.出租包装物和商品收入' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.出租包装物和商品收入</td>
		<td id="report1_C17" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D17" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="18" height=20 style="height:20px;">
		<td id="report1_A18" colNo=1 value='15' onclick="_hideEditor()" class="report1_3">15</td>
		<td id="report1_B18" colNo=2 value='       5.其他' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.其他</td>
		<td id="report1_C18" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D18" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="19" height=20 style="height:20px;">
		<td id="report1_A19" colNo=1 value='16' onclick="_hideEditor()" class="report1_3">16</td>
		<td id="report1_B19" colNo=2 value='二、营业外收入（17+18+19+20+21+22+23+24+25+26）' onclick="_hideEditor()" class="report1_4">二、营业外收入（17+18+19+20+21+22+23+24+25+26）</td>
		<td id="report1_C19" colNo=3 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">0.00</td>
		<td id="report1_D19" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="20" height=20 style="height:20px;">
		<td id="report1_A20" colNo=1 value='17' onclick="_hideEditor()" class="report1_3">17</td>
		<td id="report1_B20" colNo=2 value='   （一）非流动资产处置利得' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;（一）非流动资产处置利得</td>
		<td id="report1_C20" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D20" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="21" height=20 style="height:20px;">
		<td id="report1_A21" colNo=1 value='18' onclick="_hideEditor()" class="report1_3">18</td>
		<td id="report1_B21" colNo=2 value='   （二）非货币性资产交换利得' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;（二）非货币性资产交换利得</td>
		<td id="report1_C21" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D21" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="22" height=20 style="height:20px;">
		<td id="report1_A22" colNo=1 value='19' onclick="_hideEditor()" class="report1_3">19</td>
		<td id="report1_B22" colNo=2 value='   （三）债务重组利得' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;（三）债务重组利得</td>
		<td id="report1_C22" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D22" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="23" height=20 style="height:20px;">
		<td id="report1_A23" colNo=1 value='20' onclick="_hideEditor()" class="report1_3">20</td>
		<td id="report1_B23" colNo=2 value='   （四）政府补助利得' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;（四）政府补助利得</td>
		<td id="report1_C23" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D23" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="24" height=20 style="height:20px;">
		<td id="report1_A24" colNo=1 value='21' onclick="_hideEditor()" class="report1_3">21</td>
		<td id="report1_B24" colNo=2 value='   （五）盘盈利得' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;（五）盘盈利得</td>
		<td id="report1_C24" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D24" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="25" height=20 style="height:20px;">
		<td id="report1_A25" colNo=1 value='22' onclick="_hideEditor()" class="report1_3">22</td>
		<td id="report1_B25" colNo=2 value='   （六）捐赠利得' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;（六）捐赠利得</td>
		<td id="report1_C25" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D25" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="26" height=20 style="height:20px;">
		<td id="report1_A26" colNo=1 value='23' onclick="_hideEditor()" class="report1_3">23</td>
		<td id="report1_B26" colNo=2 value='   （七）罚没利得' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;（七）罚没利得</td>
		<td id="report1_C26" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D26" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="27" height=20 style="height:20px;">
		<td id="report1_A27" colNo=1 value='24' onclick="_hideEditor()" class="report1_3">24</td>
		<td id="report1_B27" colNo=2 value='   （八）确实无法偿付的应付款项' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;（八）确实无法偿付的应付款项</td>
		<td id="report1_C27" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D27" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="28" height=20 style="height:20px;">
		<td id="report1_A28" colNo=1 value='25' onclick="_hideEditor()" class="report1_3">25</td>
		<td id="report1_B28" colNo=2 value='   （九）汇兑收益' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;（九）汇兑收益</td>
		<td id="report1_C28" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D28" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="29" height=25 style="height:25px;">
		<td id="report1_A29" colNo=1 value='26' onclick="_hideEditor()" class="report1_3">26</td>
		<td id="report1_B29" colNo=2 value='   （十）其他' onclick="_hideEditor()" class="report1_4">&nbsp;&nbsp;&nbsp;（十）其他</td>
		<td id="report1_C29" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_D29" colNo=4 value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,C6,C8,C9,C10,C11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C6' ) )+_parseValue( document.getElementById( 'report1_C8' ) )+_parseValue( document.getElementById( 'report1_C9' ) )+_parseValue( document.getElementById( 'report1_C10' ) )+_parseValue( document.getElementById( 'report1_C11' ) )).toFixed(2);
				document.getElementById( 'report1_C5' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_C5' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_C5' ) );
			}catch(e1){}
		}
		cells = ",,C13,C15,C16,C17,C18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C13' ) )+_parseValue( document.getElementById( 'report1_C15' ) )+_parseValue( document.getElementById( 'report1_C16' ) )+_parseValue( document.getElementById( 'report1_C17' ) )+_parseValue( document.getElementById( 'report1_C18' ) )).toFixed(2);
				document.getElementById( 'report1_C12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_C12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_C12' ) );
			}catch(e1){}
		}
		cells = ",,C20,C21,C22,C23,C24,C25,C26,C27,C28,C29,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C20' ) )+_parseValue( document.getElementById( 'report1_C21' ) )+_parseValue( document.getElementById( 'report1_C22' ) )+_parseValue( document.getElementById( 'report1_C23' ) )+_parseValue( document.getElementById( 'report1_C24' ) )+_parseValue( document.getElementById( 'report1_C25' ) )+_parseValue( document.getElementById( 'report1_C26' ) )+_parseValue( document.getElementById( 'report1_C27' ) )+_parseValue( document.getElementById( 'report1_C28' ) )+_parseValue( document.getElementById( 'report1_C29' ) )).toFixed(2);
				document.getElementById( 'report1_C19' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_C19' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_C19' ) );
			}catch(e1){}
		}
		cells = ",,C5,C6,C8,C9,C10,C11,C12,C13,C15,C16,C17,C18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C5' ) )+_parseValue( document.getElementById( 'report1_C12' ) )).toFixed(2);
				document.getElementById( 'report1_C4' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_C4' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_C4' ) );
			}catch(e1){}
		}
		try{ group_autoCalc( 'report1_' + cellName ); }catch(e){}
	}

	function report1_checkValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_C6' ) )>=0?_parseValue( document.getElementById( 'report1_C7' ) )<=_parseValue( document.getElementById( 'report1_C6' ) ):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_C7,report1_C6" );}catch(e){}
			alert( '第4行<=第3行' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_C13' ) )>=0?_parseValue( document.getElementById( 'report1_C14' ) )<=_parseValue( document.getElementById( 'report1_C13' ) ):1==1 ) ) {
			try{ report1_markInvalidCell( "report1_C13,report1_C14" );}catch(e){}
			alert( '第11行<=第10行' );
			return false;
		}
		return true;
	}

</script>
</div>
</td></tr></table>
<div style="display:none"><form id="report1_submitForm" method=post action="/WSSBSL/reportServlet.aspx?action=11" target="submitFrame">
	<input type=hidden name=fileName value="/ndsdsA/sb_ndsds_2014_fb1.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_74735">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2FndsdsA%2Fsb_ndsds_2014_fb1.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000015884336&sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466&reportParamsId=15115066352053921172198">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_NDSDS_2014_FB1;xmlName=ndsdsA/sb_ndsds_2014_fb1;pzxh=10014517000015884336;nsrsbh=91450107MA5KE0EQ2B;dataFromBz=0;raq=/ndsdsA/sb_ndsds_2014_fb1.raq;sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/ndsdsA/sb_ndsds_2014_fb1.raq&srcType=file&cachedId=10_1_1_176_8080_74735&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_NDSDS_2014_FB1%3BxmlName%3DndsdsA%2Fsb_ndsds_2014_fb1%3Bpzxh%3D10014517000015884336%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdataFromBz%3D0%3Braq%3D%2FndsdsA%2Fsb_ndsds_2014_fb1.raq%3Bsbuuid%3D4F35CE4F88AE666EB53FF3AE9DC76466%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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
