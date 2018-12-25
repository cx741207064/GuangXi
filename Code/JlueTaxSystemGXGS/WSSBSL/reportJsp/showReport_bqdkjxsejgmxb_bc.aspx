<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showReport_bqdkjxsejgmxb_bc.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showReport_bqdkjxsejgmxb_bc" %>

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

<input type="hidden" value="raq=/zzs2013Ybnsr/bqdkjxsejgmxb.raq;nsrsbh=450100399111430;sbzt=0;skssq=20171111;ssqq=2017-11-01;ssqz=2017-11-30;isTbBz=0" id="myParams" />
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
	var report1_cachedId = "10_1_1_176_8080_12272";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2Fzzs2013Ybnsr%2Fbqdkjxsejgmxb.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15127082505981882111975&cachedId=10_1_1_176_8080_12272&t_i_m_e=1512708250629" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2Fzzs2013Ybnsr%2Fbqdkjxsejgmxb.raq&columns=0&srcType=file&reportParamsId=15127082505981882111975&cachedId=10_1_1_176_8080_12272&t_i_m_e=1512708250629" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2Fzzs2013Ybnsr%2Fbqdkjxsejgmxb.raq&columns=0&srcType=file&reportParamsId=15127082505981882111975&cachedId=10_1_1_176_8080_12272&t_i_m_e=1512708250629";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2Fzzs2013Ybnsr%2Fbqdkjxsejgmxb.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15127082505981882111975&cachedId=10_1_1_176_8080_12272&t_i_m_e=1512708250629";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2Fzzs2013Ybnsr%2Fbqdkjxsejgmxb.raq&srcType=file&reportParamsId=15127082505981882111975&cachedId=10_1_1_176_8080_12272&t_i_m_e=1512708250629" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2Fzzs2013Ybnsr%2Fbqdkjxsejgmxb.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15127082505981882111975&cachedId=10_1_1_176_8080_12272&t_i_m_e=1512708250629";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2Fzzs2013Ybnsr%2Fbqdkjxsejgmxb.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15127082505981882111975&cachedId=10_1_1_176_8080_12272&t_i_m_e=1512708250629";
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
	function report1428496over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1428496out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_5 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:center;vertical-align:middle;font-family:宋体;font-size:16px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1428496out()" onmouseover="report1428496over()" rowCount=38 cols=7 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:606px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:97px;"></col>
		<col style="width:136px;"></col>
		<col style="width:66px;"></col>
		<col style="width:75px;"></col>
		<col style="width:88px;"></col>
		<col style="width:40px;"></col>
		<col style="width:104px;"></col>
	</colgroup>
	<tr rn="1" height=48 style="height:48px;">
		<td colSpan=7 id="report1_A1" colNo=1 value='46508148' onclick="_hideEditor()" class="report1_8">本期抵扣进项税额结构明细表</td>
	</tr>
	<tr rn="2" height=33 style="height:33px;">
		<td id="report1_A2" colNo=1 value='纳税人识别号：' onclick="_hideEditor()" class="report1_6">纳税人识别号：</td>
		<td colSpan=2 id="report1_B2" colNo=2 value='' onclick="_hideEditor()" class="report1_4"></td>
		<td id="report1_D2" colNo=4 value='填表日期： ' onclick="_hideEditor()" class="report1_2">填表日期：&nbsp;</td>
		<td id="report1_E2" colNo=5 value='2017-12-08' onclick="_hideEditor()" class="report1_2">2017-12-08</td>
		<td colSpan=2 id="report1_F2" colNo=6 value='金额单位:元至角分' onclick="_hideEditor()" class="report1_2">金额单位:元至角分</td>
	</tr>
	<tr rn="3" height=40 style="height:40px;">
		<td id="report1_A3" colNo=1 value='纳税人名称：' onclick="_hideEditor()" class="report1_6">纳税人名称：</td>
		<td colSpan=2 id="report1_B3" colNo=2 value='' onclick="_hideEditor()" class="report1_4"></td>
		<td id="report1_D3" colNo=4 value='所属时期： ' onclick="_hideEditor()" class="report1_2">所属时期：&nbsp;</td>
		<td id="report1_E3" colNo=5 value='' onclick="_hideEditor()" class="report1_2"></td>
		<td id="report1_F3" colNo=6 value='至 ' onclick="_hideEditor()" class="report1_2">至&nbsp;</td>
		<td id="report1_G3" colNo=7 value='' onclick="_hideEditor()" class="report1_2"></td>
	</tr>
	<tr rn="4" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A4" colNo=1 value='' onclick="_hideEditor()" class="report1_2"></td>
		<td id="report1_C4" colNo=3 value='栏次' onclick="_hideEditor()" class="report1_2">栏次</td>
		<td colSpan=2 id="report1_D4" colNo=4 value='金额' onclick="_hideEditor()" class="report1_2">金额</td>
		<td colSpan=2 id="report1_F4" colNo=6 value='税额' onclick="_hideEditor()" class="report1_2">税额</td>
	</tr>
	<tr rn="5" height=53 style="height:53px;">
		<td colSpan=2 id="report1_A5" colNo=1 value='合计' onclick="_hideEditor()" class="report1_2">合计</td>
		<td id="report1_C5" colNo=3 value='1=2+4+5+11+16+18+27+29+30' onclick="_hideEditor()" class="report1_4">1=2+4+5+11<br>+16+18+27+<br>29+30</td>
		<td colSpan=2 id="report1_D5" colNo=4 value='1.3554674E7' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_10">13554674.00</td>
		<td colSpan=2 id="report1_F5" colNo=6 value='1515730.62' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_10">1515730.62</td>
	</tr>
	<tr rn="6" height=23 style="height:23px;">
		<td colSpan=7 id="report1_A6" colNo=1 value='一、按税率或征收率归集（不包括构建不动产、通行费）的进项' onclick="_hideEditor()" class="report1_7">一、按税率或征收率归集（不包括构建不动产、通行费）的进项</td>
	</tr>
	<tr rn="7" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A7" colNo=1 value='17%税率的进项' onclick="_hideEditor()" class="report1_2">17%税率的进项</td>
		<td id="report1_C7" colNo=3 value='2' onclick="_hideEditor()" class="report1_4">2</td>
		<td colSpan=2 id="report1_D7" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='1231.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">1231.00</td>
		<td colSpan=2 id="report1_F7" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='209.27' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">209.27</td>
	</tr>
	<tr rn="8" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A8" colNo=1 value='   其中：有形动产租赁的进项' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;其中：有形动产租赁的进项</td>
		<td id="report1_C8" colNo=3 value='3' onclick="_hideEditor()" class="report1_4">3</td>
		<td colSpan=2 id="report1_D8" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='123213.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">123213.00</td>
		<td colSpan=2 id="report1_F8" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='20946.21' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">20946.21</td>
	</tr>
	<tr rn="9" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A9" colNo=1 value='13%税率的进项' onclick="_hideEditor()" class="report1_2">13%税率的进项</td>
		<td id="report1_C9" colNo=3 value='4' onclick="_hideEditor()" class="report1_4">4</td>
		<td colSpan=2 id="report1_D9" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='1232131.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">1232131.00</td>
		<td colSpan=2 id="report1_F9" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='160177.03' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">160177.03</td>
	</tr>
	<tr rn="10" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A10" colNo=1 value='11%税率的进项' onclick="_hideEditor()" class="report1_2">11%税率的进项</td>
		<td id="report1_C10" colNo=3 value='5' onclick="_hideEditor()" class="report1_4">5</td>
		<td colSpan=2 id="report1_D10" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='1.2321312E7' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">12321312.00</td>
		<td colSpan=2 id="report1_F10" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='1355344.32' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">1355344.32</td>
	</tr>
	<tr rn="11" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A11" colNo=1 value='      其中：运输服务的进项' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：运输服务的进项</td>
		<td id="report1_C11" colNo=3 value='6' onclick="_hideEditor()" class="report1_4">6</td>
		<td colSpan=2 id="report1_D11" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F11" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="12" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A12" colNo=1 value='电信服务的进项' onclick="_hideEditor()" class="report1_2">电信服务的进项</td>
		<td id="report1_C12" colNo=3 value='7' onclick="_hideEditor()" class="report1_1">7</td>
		<td colSpan=2 id="report1_D12" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F12" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="13" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A13" colNo=1 value='    建筑安装服务的进项' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;建筑安装服务的进项</td>
		<td id="report1_C13" colNo=3 value='8' onclick="_hideEditor()" class="report1_4">8</td>
		<td colSpan=2 id="report1_D13" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F13" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="14" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A14" colNo=1 value='      不动产租赁服务的进项' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不动产租赁服务的进项</td>
		<td id="report1_C14" colNo=3 value='9' onclick="_hideEditor()" class="report1_4">9</td>
		<td colSpan=2 id="report1_D14" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F14" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="15" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A15" colNo=1 value='       受让土地使用权的进项' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;受让土地使用权的进项</td>
		<td id="report1_C15" colNo=3 value='10' onclick="_hideEditor()" class="report1_4">10</td>
		<td colSpan=2 id="report1_D15" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F15" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="16" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A16" colNo=1 value='6%税率的进项' onclick="_hideEditor()" class="report1_2">6%税率的进项</td>
		<td id="report1_C16" colNo=3 value='11' onclick="_hideEditor()" class="report1_4">11</td>
		<td colSpan=2 id="report1_D16" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F16" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="17" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A17" colNo=1 value='     其中：电信服务的进项' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：电信服务的进项</td>
		<td id="report1_C17" colNo=3 value='12' onclick="_hideEditor()" class="report1_4">12</td>
		<td colSpan=2 id="report1_D17" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F17" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="18" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A18" colNo=1 value='            金融保险服务的进项' onclick="_hideEditor()" class="report1_1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金融保险服务的进项</td>
		<td id="report1_C18" colNo=3 value='13' onclick="_hideEditor()" class="report1_4">13</td>
		<td colSpan=2 id="report1_D18" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F18" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="19" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A19" colNo=1 value='生活服务的进项' onclick="_hideEditor()" class="report1_2">生活服务的进项</td>
		<td id="report1_C19" colNo=3 value='14' onclick="_hideEditor()" class="report1_1">14</td>
		<td colSpan=2 id="report1_D19" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F19" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="20" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A20" colNo=1 value='   取得无形资产的进项' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;取得无形资产的进项</td>
		<td id="report1_C20" colNo=3 value='15' onclick="_hideEditor()" class="report1_1">15</td>
		<td colSpan=2 id="report1_D20" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F20" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="21" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A21" colNo=1 value='5%征收率的进项' onclick="_hideEditor()" class="report1_2">5%征收率的进项</td>
		<td id="report1_C21" colNo=3 value='16' onclick="_hideEditor()" class="report1_4">16</td>
		<td colSpan=2 id="report1_D21" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F21" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="22" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A22" colNo=1 value='   其中：不动产租赁服务的进项' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;其中：不动产租赁服务的进项</td>
		<td id="report1_C22" colNo=3 value='17' onclick="_hideEditor()" class="report1_4">17</td>
		<td colSpan=2 id="report1_D22" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F22" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="23" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A23" colNo=1 value='3%征收率的进项' onclick="_hideEditor()" class="report1_2">3%征收率的进项</td>
		<td id="report1_C23" colNo=3 value='18' onclick="_hideEditor()" class="report1_4">18</td>
		<td colSpan=2 id="report1_D23" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F23" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="24" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A24" colNo=1 value='其中：货物及加工、修理修配劳务的进项' onclick="_hideEditor()" class="report1_2">其中：货物及加工、修理修配劳务的进项</td>
		<td id="report1_C24" colNo=3 value='19' onclick="_hideEditor()" class="report1_1">19</td>
		<td colSpan=2 id="report1_D24" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F24" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="25" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A25" colNo=1 value='运输服务的进项' onclick="_hideEditor()" class="report1_2">运输服务的进项</td>
		<td id="report1_C25" colNo=3 value='20' onclick="_hideEditor()" class="report1_1">20</td>
		<td colSpan=2 id="report1_D25" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F25" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="26" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A26" colNo=1 value='电信服务的进项' onclick="_hideEditor()" class="report1_2">电信服务的进项</td>
		<td id="report1_C26" colNo=3 value='21' onclick="_hideEditor()" class="report1_1">21</td>
		<td colSpan=2 id="report1_D26" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F26" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="27" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A27" colNo=1 value='建筑安装服务的进项' onclick="_hideEditor()" class="report1_2">建筑安装服务的进项</td>
		<td id="report1_C27" colNo=3 value='22' onclick="_hideEditor()" class="report1_1">22</td>
		<td colSpan=2 id="report1_D27" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F27" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="28" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A28" colNo=1 value='金融保险服务的进项' onclick="_hideEditor()" class="report1_2">金融保险服务的进项</td>
		<td id="report1_C28" colNo=3 value='23' onclick="_hideEditor()" class="report1_1">23</td>
		<td colSpan=2 id="report1_D28" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F28" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="29" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A29" colNo=1 value='有形动产租赁服务的进项' onclick="_hideEditor()" class="report1_2">有形动产租赁服务的进项</td>
		<td id="report1_C29" colNo=3 value='24' onclick="_hideEditor()" class="report1_1">24</td>
		<td colSpan=2 id="report1_D29" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F29" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="30" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A30" colNo=1 value='生活服务的进项' onclick="_hideEditor()" class="report1_2">生活服务的进项</td>
		<td id="report1_C30" colNo=3 value='25' onclick="_hideEditor()" class="report1_1">25</td>
		<td colSpan=2 id="report1_D30" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F30" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="31" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A31" colNo=1 value='取得无形资产的进项' onclick="_hideEditor()" class="report1_2">取得无形资产的进项</td>
		<td id="report1_C31" colNo=3 value='26' onclick="_hideEditor()" class="report1_4">26</td>
		<td colSpan=2 id="report1_D31" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F31" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="32" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A32" colNo=1 value='减按1.5%征收率的进项' onclick="_hideEditor()" class="report1_2">减按1.5%征收率的进项</td>
		<td id="report1_C32" colNo=3 value='27' onclick="_hideEditor()" class="report1_4">27</td>
		<td colSpan=2 id="report1_D32" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F32" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
	</tr>
	<tr rn="33" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A33" colNo=1 value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_C33" colNo=3 value='28' onclick="_hideEditor()" class="report1_1">28</td>
		<td colSpan=2 id="report1_D33" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_9"></td>
		<td colSpan=2 id="report1_F33" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_9"></td>
	</tr>
	<tr rn="34" height=23 style="height:23px;">
		<td colSpan=7 id="report1_A34" colNo=1 value='二、按抵扣项目归集的进项' onclick="_hideEditor()" class="report1_7">二、按抵扣项目归集的进项</td>
	</tr>
	<tr rn="35" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A35" colNo=1 value='用于构建不动产并一次性抵扣的进项' onclick="_hideEditor()" class="report1_2">用于构建不动产并一次性抵扣的进项</td>
		<td id="report1_C35" colNo=3 value='29' onclick="_hideEditor()" class="report1_4">29</td>
		<td colSpan=2 id="report1_D35" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F35" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
	</tr>
	<tr rn="36" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A36" colNo=1 value='通行费的进项' onclick="_hideEditor()" class="report1_2">通行费的进项</td>
		<td id="report1_C36" colNo=3 value='30' onclick="_hideEditor()" class="report1_1">30</td>
		<td colSpan=2 id="report1_D36" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
		<td colSpan=2 id="report1_F36" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_3">0.00</td>
	</tr>
	<tr rn="37" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A37" colNo=1 value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_C37" colNo=3 value='31' onclick="_hideEditor()" class="report1_1">31</td>
		<td colSpan=2 id="report1_D37" colNo=4 value='' onclick="_hideEditor()" class="report1_9"></td>
		<td colSpan=2 id="report1_F37" colNo=6 value='' onclick="_hideEditor()" class="report1_9"></td>
	</tr>
	<tr rn="38" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A38" colNo=1 value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_C38" colNo=3 value='32' onclick="_hideEditor()" class="report1_4">32</td>
		<td colSpan=2 id="report1_D38" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_9"></td>
		<td colSpan=2 id="report1_F38" colNo=6 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_9"></td>
	</tr>
</table><script language=javascript>
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,D7,D9,D10,D16,D21,D23,D32,D35,D36,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D7' ) )+_parseValue( document.getElementById( 'report1_D9' ) )+_parseValue( document.getElementById( 'report1_D10' ) )+_parseValue( document.getElementById( 'report1_D16' ) )+_parseValue( document.getElementById( 'report1_D21' ) )+_parseValue( document.getElementById( 'report1_D23' ) )+_parseValue( document.getElementById( 'report1_D32' ) )+_parseValue( document.getElementById( 'report1_D35' ) )+_parseValue( document.getElementById( 'report1_D36' ) )).toFixed(2);
				document.getElementById( 'report1_D5' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D5' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D5' ) );
			}catch(e1){}
		}
		cells = ",,D7,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D7' ) )*0.17).toFixed(2);
				document.getElementById( 'report1_F7' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F7' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F7' ) );
			}catch(e1){}
		}
		cells = ",,D8,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D8' ) )*0.17).toFixed(2);
				document.getElementById( 'report1_F8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F8' ) );
			}catch(e1){}
		}
		cells = ",,D9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D9' ) )*0.13).toFixed(2);
				document.getElementById( 'report1_F9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F9' ) );
			}catch(e1){}
		}
		cells = ",,D10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D10' ) )*0.11).toFixed(2);
				document.getElementById( 'report1_F10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F10' ) );
			}catch(e1){}
		}
		cells = ",,D11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D11' ) )*0.11).toFixed(2);
				document.getElementById( 'report1_F11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F11' ) );
			}catch(e1){}
		}
		cells = ",,D12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D12' ) )*0.11).toFixed(2);
				document.getElementById( 'report1_F12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F12' ) );
			}catch(e1){}
		}
		cells = ",,D13,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D13' ) )*0.11).toFixed(2);
				document.getElementById( 'report1_F13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F13' ) );
			}catch(e1){}
		}
		cells = ",,D14,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D14' ) )*0.11).toFixed(2);
				document.getElementById( 'report1_F14' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F14' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F14' ) );
			}catch(e1){}
		}
		cells = ",,D15,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D15' ) )*0.11).toFixed(2);
				document.getElementById( 'report1_F15' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F15' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F15' ) );
			}catch(e1){}
		}
		cells = ",,D16,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D16' ) )*0.06).toFixed(2);
				document.getElementById( 'report1_F16' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F16' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F16' ) );
			}catch(e1){}
		}
		cells = ",,D17,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D17' ) )*0.06).toFixed(2);
				document.getElementById( 'report1_F17' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F17' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F17' ) );
			}catch(e1){}
		}
		cells = ",,D18,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D18' ) )*0.06).toFixed(2);
				document.getElementById( 'report1_F18' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F18' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F18' ) );
			}catch(e1){}
		}
		cells = ",,D19,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D19' ) )*0.06).toFixed(2);
				document.getElementById( 'report1_F19' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F19' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F19' ) );
			}catch(e1){}
		}
		cells = ",,D20,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D20' ) )*0.06).toFixed(2);
				document.getElementById( 'report1_F20' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F20' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F20' ) );
			}catch(e1){}
		}
		cells = ",,D21,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D21' ) )*0.05).toFixed(2);
				document.getElementById( 'report1_F21' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F21' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F21' ) );
			}catch(e1){}
		}
		cells = ",,D22,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D22' ) )*0.05).toFixed(2);
				document.getElementById( 'report1_F22' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F22' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F22' ) );
			}catch(e1){}
		}
		cells = ",,D23,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D23' ) )*0.03).toFixed(2);
				document.getElementById( 'report1_F23' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F23' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F23' ) );
			}catch(e1){}
		}
		cells = ",,D24,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D24' ) )*0.03).toFixed(2);
				document.getElementById( 'report1_F24' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F24' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F24' ) );
			}catch(e1){}
		}
		cells = ",,D25,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D25' ) )*0.03).toFixed(2);
				document.getElementById( 'report1_F25' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F25' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F25' ) );
			}catch(e1){}
		}
		cells = ",,D26,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D26' ) )*0.03).toFixed(2);
				document.getElementById( 'report1_F26' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F26' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F26' ) );
			}catch(e1){}
		}
		cells = ",,D27,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D27' ) )*0.03).toFixed(2);
				document.getElementById( 'report1_F27' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F27' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F27' ) );
			}catch(e1){}
		}
		cells = ",,D28,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D28' ) )*0.03).toFixed(2);
				document.getElementById( 'report1_F28' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F28' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F28' ) );
			}catch(e1){}
		}
		cells = ",,D29,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D29' ) )*0.03).toFixed(2);
				document.getElementById( 'report1_F29' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F29' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F29' ) );
			}catch(e1){}
		}
		cells = ",,D30,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D30' ) )*0.03).toFixed(2);
				document.getElementById( 'report1_F30' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F30' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F30' ) );
			}catch(e1){}
		}
		cells = ",,D31,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D31' ) )*0.03).toFixed(2);
				document.getElementById( 'report1_F31' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F31' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F31' ) );
			}catch(e1){}
		}
		cells = ",,D32,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D32' ) )*0.015).toFixed(2);
				document.getElementById( 'report1_F32' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F32' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F32' ) );
			}catch(e1){}
		}
		cells = ",,F7,D7,F9,D9,F10,D10,F16,D16,F21,D21,F23,D23,F32,D32,F35,F36,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F7' ) )+_parseValue( document.getElementById( 'report1_F9' ) )+_parseValue( document.getElementById( 'report1_F10' ) )+_parseValue( document.getElementById( 'report1_F16' ) )+_parseValue( document.getElementById( 'report1_F21' ) )+_parseValue( document.getElementById( 'report1_F23' ) )+_parseValue( document.getElementById( 'report1_F32' ) )+_parseValue( document.getElementById( 'report1_F35' ) )+_parseValue( document.getElementById( 'report1_F36' ) )).toFixed(2);
				document.getElementById( 'report1_F5' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F5' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F5' ) );
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
	<input type=hidden name=fileName value="/zzs2013Ybnsr/bqdkjxsejgmxb.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_12272">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showReport.jsp?raq=%2Fzzs2013Ybnsr%2Fbqdkjxsejgmxb.raq&nsrsbh=450100399111430&sbzt=0&skssq=20171111&ssqq=2017-11-01&ssqz=2017-11-30&isTbBz=0&reportParamsId=15127082505981882111975">
	<input type=hidden name=backAndRefresh value="/reportJsp/success.jsp">
	<input type=hidden name=promptAfterSave value="no">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_ZZS_BQDKJXSEJGMXB;xmlName=zzs2013/zzs_ybnsr_bqdkjxsejgmxb;sbzt=0;ssqq=2017-11-01;skssq=20171111;nsrsbh=450100399111430;raq=/zzs2013Ybnsr/bqdkjxsejgmxb.raq;ssqz=2017-11-30;isTbBz=0">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/zzs2013Ybnsr/bqdkjxsejgmxb.raq&srcType=file&cachedId=10_1_1_176_8080_12272&isScroll=0&backAndRefresh=/reportJsp/success.jsp&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_ZZS_BQDKJXSEJGMXB%3BxmlName%3Dzzs2013%2Fzzs_ybnsr_bqdkjxsejgmxb%3Bsbzt%3D0%3Bssqq%3D2017-11-01%3Bskssq%3D20171111%3Bnsrsbh%3D450100399111430%3Braq%3D%2Fzzs2013Ybnsr%2Fbqdkjxsejgmxb.raq%3Bssqz%3D2017-11-30%3BisTbBz%3D0&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

