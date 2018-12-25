<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showReport_ybnsrFb4_bc.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showReport_ybnsrFb4_bc" %>

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

<input type="hidden" value="raq=/zzs2013Ybnsr/ybnsrFb4.raq;nsrsbh=450100399111430;sbzt=0;skssq=20171111;ssqq=2017-11-01;ssqz=2017-11-30;isTbBz=0" id="myParams" />
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
	var report1_cachedId = "10_1_1_176_8080_12258";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2Fzzs2013Ybnsr%2FybnsrFb4.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15127080774726949111961&cachedId=10_1_1_176_8080_12258&t_i_m_e=1512708077956" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2Fzzs2013Ybnsr%2FybnsrFb4.raq&columns=0&srcType=file&reportParamsId=15127080774726949111961&cachedId=10_1_1_176_8080_12258&t_i_m_e=1512708077956" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2Fzzs2013Ybnsr%2FybnsrFb4.raq&columns=0&srcType=file&reportParamsId=15127080774726949111961&cachedId=10_1_1_176_8080_12258&t_i_m_e=1512708077956";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2Fzzs2013Ybnsr%2FybnsrFb4.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15127080774726949111961&cachedId=10_1_1_176_8080_12258&t_i_m_e=1512708077956";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2Fzzs2013Ybnsr%2FybnsrFb4.raq&srcType=file&reportParamsId=15127080774726949111961&cachedId=10_1_1_176_8080_12258&t_i_m_e=1512708077956" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2Fzzs2013Ybnsr%2FybnsrFb4.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15127080774726949111961&cachedId=10_1_1_176_8080_12258&t_i_m_e=1512708077956";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2Fzzs2013Ybnsr%2FybnsrFb4.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15127080774726949111961&cachedId=10_1_1_176_8080_12258&t_i_m_e=1512708077956";
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
	function report1428482over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1428482out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_6 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:center;vertical-align:bottom;font-family:宋体;font-size:18px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:center;vertical-align:top;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1428482out()" onmouseover="report1428482over()" rowCount=11 cols=8 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:799px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:48px;"></col>
		<col style="width:42px;"></col>
		<col style="width:184px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
	</colgroup>
	<tr rn="1" height=40 style="height:40px;">
		<td colSpan=8 id="report1_A1" colNo=1 value='46508009' onclick="_hideEditor()" class="report1_8">增值税纳税申报表附列资料（四）</td>
	</tr>
	<tr rn="2" height=20 style="height:20px;">
		<td colSpan=8 id="report1_A2" colNo=1 value='（税额抵减情况表）' onclick="_hideEditor()" class="report1_9">（税额抵减情况表）</td>
	</tr>
	<tr rn="3" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A3" colNo=1 value='纳税人识别号：' onclick="_hideEditor()" class="report1_7">纳税人识别号：</td>
		<td colSpan=2 id="report1_C3" colNo=3 value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_E3" colNo=5 value='填表日期： ' onclick="_hideEditor()" class="report1_3">填表日期：&nbsp;</td>
		<td id="report1_F3" colNo=6 value='2017-12-08' onclick="_hideEditor()" class="report1_3">2017-12-08</td>
		<td colSpan=2 id="report1_G3" colNo=7 value='金额单位:元至角分' onclick="_hideEditor()" class="report1_3">金额单位:元至角分</td>
	</tr>
	<tr rn="4" height=35 style="height:35px;">
		<td colSpan=2 id="report1_A4" colNo=1 value='纳税人名称：' onclick="_hideEditor()" class="report1_7">纳税人名称：</td>
		<td colSpan=2 id="report1_C4" colNo=3 value='' onclick="_hideEditor()" class="report1_5"></td>
		<td id="report1_E4" colNo=5 value='所属时期： ' onclick="_hideEditor()" class="report1_3">所属时期：&nbsp;</td>
		<td id="report1_F4" colNo=6 value='' onclick="_hideEditor()" class="report1_3"></td>
		<td id="report1_G4" colNo=7 value='至 ' onclick="_hideEditor()" class="report1_3">至&nbsp;</td>
		<td id="report1_H4" colNo=8 value='' onclick="_hideEditor()" class="report1_3"></td>
	</tr>
	<tr rn="5" height=20 style="height:20px;">
		<td rowSpan=2 id="report1_A5" colNo=1 value='序号' onclick="_hideEditor()" class="report1_3">序号</td>
		<td rowSpan=2 colSpan=2 id="report1_B5" colNo=2 value='抵减项目' onclick="_hideEditor()" class="report1_3">抵减项目</td>
		<td id="report1_D5" colNo=4 value='期初余额' onclick="_hideEditor()" class="report1_3">期初余额</td>
		<td id="report1_E5" colNo=5 value='本期发生额' onclick="_hideEditor()" class="report1_3">本期发生额</td>
		<td id="report1_F5" colNo=6 value='本期应抵减税额' onclick="_hideEditor()" class="report1_3">本期应抵减税额</td>
		<td id="report1_G5" colNo=7 value='本期实际抵减税额' onclick="_hideEditor()" class="report1_3">本期实际抵减税额</td>
		<td id="report1_H5" colNo=8 value='期末余额' onclick="_hideEditor()" class="report1_3">期末余额</td>
	</tr>
	<tr rn="6" height=20 style="height:20px;">
		<td id="report1_D6" colNo=4 value='1' onclick="_hideEditor()" class="report1_3">1</td>
		<td id="report1_E6" colNo=5 value='2' onclick="_hideEditor()" class="report1_3">2</td>
		<td id="report1_F6" colNo=6 value='3=1+2' onclick="_hideEditor()" class="report1_3">3=1+2</td>
		<td id="report1_G6" colNo=7 value='4≤3' onclick="_hideEditor()" class="report1_3">4≤3</td>
		<td id="report1_H6" colNo=8 value='5=3-4' onclick="_hideEditor()" class="report1_3">5=3-4</td>
	</tr>
	<tr rn="7" height=20 style="height:20px;">
		<td id="report1_A7" colNo=1 value='1' onclick="_hideEditor()" class="report1_3">1</td>
		<td colSpan=2 id="report1_B7" colNo=2 value='增值税税控系统专用设备费及技术维护费' onclick="_hideEditor()" class="report1_5">增值税税控系统专用设备费及技术维护费</td>
		<td id="report1_D7" colNo=4 value='820.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1">820.00</td>
		<td id="report1_E7" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='1.2321321E7' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">12321321.00</td>
		<td id="report1_F7" colNo=6 value='1.2322141E7' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">12322141.00</td>
		<td id="report1_G7" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='12321.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">12321.00</td>
		<td id="report1_H7" colNo=8 value='1.230982E7' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">12309820.00</td>
	</tr>
	<tr rn="8" height=20 style="height:20px;">
		<td id="report1_A8" colNo=1 value='2' onclick="_hideEditor()" class="report1_3">2</td>
		<td colSpan=2 id="report1_B8" colNo=2 value='分支机构预征缴纳税款 ' onclick="_hideEditor()" class="report1_5">分支机构预征缴纳税款&nbsp;</td>
		<td id="report1_D8" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_E8" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_F8" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">0.00</td>
		<td id="report1_G8" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_H8" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">0.00</td>
	</tr>
	<tr rn="9" height=20 style="height:20px;">
		<td id="report1_A9" colNo=1 value='3' onclick="_hideEditor()" class="report1_3">3</td>
		<td colSpan=2 id="report1_B9" colNo=2 value='建筑服务预征缴纳税款 ' onclick="_hideEditor()" class="report1_6">建筑服务预征缴纳税款&nbsp;</td>
		<td id="report1_D9" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_E9" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='1232131.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">1232131.00</td>
		<td id="report1_F9" colNo=6 value='1232131.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">1232131.00</td>
		<td id="report1_G9" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='12321.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">12321.00</td>
		<td id="report1_H9" colNo=8 value='1219810.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">1219810.00</td>
	</tr>
	<tr rn="10" height=20 style="height:20px;">
		<td id="report1_A10" colNo=1 value='4' onclick="_hideEditor()" class="report1_3">4</td>
		<td colSpan=2 id="report1_B10" colNo=2 value='销售不动产预征缴纳税款 ' onclick="_hideEditor()" class="report1_6">销售不动产预征缴纳税款&nbsp;</td>
		<td id="report1_D10" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_E10" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='21321.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">21321.00</td>
		<td id="report1_F10" colNo=6 value='21321.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">21321.00</td>
		<td id="report1_G10" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_H10" colNo=8 value='21321.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">21321.00</td>
	</tr>
	<tr rn="11" height=20 style="height:20px;">
		<td id="report1_A11" colNo=1 value='5' onclick="_hideEditor()" class="report1_3">5</td>
		<td colSpan=2 id="report1_B11" colNo=2 value='出租不动产预征缴纳税款' onclick="_hideEditor()" class="report1_6">出租不动产预征缴纳税款</td>
		<td id="report1_D11" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_1">0.00</td>
		<td id="report1_E11" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='1232131.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">1232131.00</td>
		<td id="report1_F11" colNo=6 value='1232131.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">1232131.00</td>
		<td id="report1_G11" colNo=7 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_2">0.00</td>
		<td id="report1_H11" colNo=8 value='1232131.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4">1232131.00</td>
	</tr>
</table><script language=javascript>
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,D7,E7,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D7' ) )+_parseValue( document.getElementById( 'report1_E7' ) )).toFixed(2);
				document.getElementById( 'report1_F7' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F7' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F7' ) );
			}catch(e1){}
		}
		cells = ",,F7,D7,E7,G7,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F7' ) )-_parseValue( document.getElementById( 'report1_G7' ) )).toFixed(2);
				document.getElementById( 'report1_H7' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H7' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H7' ) );
			}catch(e1){}
		}
		cells = ",,D8,E8,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D8' ) )+_parseValue( document.getElementById( 'report1_E8' ) )).toFixed(2);
				document.getElementById( 'report1_F8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F8' ) );
			}catch(e1){}
		}
		cells = ",,F8,D8,E8,G8,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F8' ) )-_parseValue( document.getElementById( 'report1_G8' ) )).toFixed(2);
				document.getElementById( 'report1_H8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H8' ) );
			}catch(e1){}
		}
		cells = ",,D9,E9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D9' ) )+_parseValue( document.getElementById( 'report1_E9' ) )).toFixed(2);
				document.getElementById( 'report1_F9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F9' ) );
			}catch(e1){}
		}
		cells = ",,F9,D9,E9,G9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F9' ) )-_parseValue( document.getElementById( 'report1_G9' ) )).toFixed(2);
				document.getElementById( 'report1_H9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H9' ) );
			}catch(e1){}
		}
		cells = ",,D10,E10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D10' ) )+_parseValue( document.getElementById( 'report1_E10' ) )).toFixed(2);
				document.getElementById( 'report1_F10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F10' ) );
			}catch(e1){}
		}
		cells = ",,F10,D10,E10,G10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F10' ) )-_parseValue( document.getElementById( 'report1_G10' ) )).toFixed(2);
				document.getElementById( 'report1_H10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H10' ) );
			}catch(e1){}
		}
		cells = ",,D11,E11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D11' ) )+_parseValue( document.getElementById( 'report1_E11' ) )).toFixed(2);
				document.getElementById( 'report1_F11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F11' ) );
			}catch(e1){}
		}
		cells = ",,F11,D11,E11,G11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F11' ) )-_parseValue( document.getElementById( 'report1_G11' ) )).toFixed(2);
				document.getElementById( 'report1_H11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H11' ) );
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
	<input type=hidden name=fileName value="/zzs2013Ybnsr/ybnsrFb4.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_12258">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showReport.jsp?raq=%2Fzzs2013Ybnsr%2FybnsrFb4.raq&nsrsbh=450100399111430&sbzt=0&skssq=20171111&ssqq=2017-11-01&ssqz=2017-11-30&isTbBz=0&reportParamsId=15127080774726949111961">
	<input type=hidden name=backAndRefresh value="/reportJsp/success.jsp">
	<input type=hidden name=promptAfterSave value="no">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_ZZS_2013_FB4;xmlName=zzs2013/zzs_ybnsr_fb4;sbzt=0;ssqq=2017-11-01;skssq=20171111;nsrsbh=450100399111430;raq=/zzs2013Ybnsr/ybnsrFb4.raq;ssqz=2017-11-30;isTbBz=0">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/zzs2013Ybnsr/ybnsrFb4.raq&srcType=file&cachedId=10_1_1_176_8080_12258&isScroll=0&backAndRefresh=/reportJsp/success.jsp&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_ZZS_2013_FB4%3BxmlName%3Dzzs2013%2Fzzs_ybnsr_fb4%3Bsbzt%3D0%3Bssqq%3D2017-11-01%3Bskssq%3D20171111%3Bnsrsbh%3D450100399111430%3Braq%3D%2Fzzs2013Ybnsr%2FybnsrFb4.raq%3Bssqz%3D2017-11-30%3BisTbBz%3D0&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

