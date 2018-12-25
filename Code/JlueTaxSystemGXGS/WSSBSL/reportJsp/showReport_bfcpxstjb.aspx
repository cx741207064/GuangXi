<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showReport_bfcpxstjb.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showReport_bfcpxstjb" %>

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

<input type="hidden" value="raq=/zzs2013Ybnsr/bfcpxstjb.raq;nsrsbh=450100399111430;sbzt=0;skssq=20171111;ssqq=2017-11-01;ssqz=2017-11-30;isTbBz=0" id="myParams" />
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
	var report1_cachedId = "10_1_1_176_8080_41512";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2Fzzs2013Ybnsr%2Fbfcpxstjb.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15123563589602373140649&cachedId=10_1_1_176_8080_41512&t_i_m_e=1512356358975" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2Fzzs2013Ybnsr%2Fbfcpxstjb.raq&columns=0&srcType=file&reportParamsId=15123563589602373140649&cachedId=10_1_1_176_8080_41512&t_i_m_e=1512356358975" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2Fzzs2013Ybnsr%2Fbfcpxstjb.raq&columns=0&srcType=file&reportParamsId=15123563589602373140649&cachedId=10_1_1_176_8080_41512&t_i_m_e=1512356358975";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2Fzzs2013Ybnsr%2Fbfcpxstjb.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15123563589602373140649&cachedId=10_1_1_176_8080_41512&t_i_m_e=1512356358975";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2Fzzs2013Ybnsr%2Fbfcpxstjb.raq&srcType=file&reportParamsId=15123563589602373140649&cachedId=10_1_1_176_8080_41512&t_i_m_e=1512356358975" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2Fzzs2013Ybnsr%2Fbfcpxstjb.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15123563589602373140649&cachedId=10_1_1_176_8080_41512&t_i_m_e=1512356358975";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2Fzzs2013Ybnsr%2Fbfcpxstjb.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15123563589602373140649&cachedId=10_1_1_176_8080_41512&t_i_m_e=1512356358975";
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
	function report1457160over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1457160out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:center;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:center;vertical-align:middle;font-family:宋体;font-size:16px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_10 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#008000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_12 { text-align:center;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_13 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_14 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_15 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_16 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_17 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_18 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_19 { text-align:center;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_20 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1457160out()" onmouseover="report1457160over()" rowCount=16 cols=7 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:807px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:28px;"></col>
		<col style="width:185px;"></col>
		<col style="width:202px;"></col>
		<col style="width:71px;"></col>
		<col style="width:117px;"></col>
		<col style="width:19px;"></col>
		<col style="width:185px;"></col>
	</colgroup>
	<tr rn="1" height=43 style="height:43px;">
		<td colSpan=7 id="report1_A1" colNo=1 value='' onclick="_hideEditor()" class="report1_7">部分产品销售统计表</td>
	</tr>
	<tr rn="2" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A2" colNo=1 value='纳税人识别号：' onclick="_hideEditor()" class="report1_20">纳税人识别号：</td>
		<td id="report1_C2" colNo=3 value='' onclick="_hideEditor()" class="report1_11"></td>
		<td id="report1_D2" colNo=4 value='填表日期' onclick="_hideEditor()" class="report1_4">填表日期</td>
		<td colSpan=2 id="report1_E2" colNo=5 value='' onclick="_hideEditor()" class="report1_4"></td>
		<td id="report1_G2" colNo=7 value='金额单位：人民币元（列至角分）' onclick="_hideEditor()" class="report1_15">金额单位：人民币元（列至角分）</td>
	</tr>
	<tr rn="3" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A3" colNo=1 value='纳税人名称：' onclick="_hideEditor()" class="report1_14">纳税人名称：</td>
		<td id="report1_C3" colNo=3 value='' onclick="_hideEditor()" class="report1_17"></td>
		<td id="report1_D3" colNo=4 value='所属日期' onclick="_hideEditor()" class="report1_4">所属日期</td>
		<td id="report1_E3" colNo=5 value='' onclick="_hideEditor()" class="report1_4"></td>
		<td id="report1_F3" colNo=6 value='至' onclick="_hideEditor()" class="report1_4">至</td>
		<td id="report1_G3" colNo=7 value='' onclick="_hideEditor()" class="report1_4"></td>
	</tr>
	<tr rn="4" height=23 style="height:23px;">
		<td id="report1_A4" colNo=1 value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_B4" colNo=2 value='项目' onclick="_hideEditor()" class="report1_6">项目</td>
		<td id="report1_C4" colNo=3 value='栏次' onclick="_hideEditor()" class="report1_1">栏次</td>
		<td colSpan=2 id="report1_D4" colNo=4 value='销售数量' onclick="_hideEditor()" class="report1_4">销售数量</td>
		<td colSpan=2 id="report1_F4" colNo=6 value='销售额' onclick="_hideEditor()" class="report1_4">销售额</td>
	</tr>
	<tr rn="5" height=23 style="height:23px;">
		<td rowSpan=8 id="report1_A5" colNo=1 value='产品名称' onclick="_hideEditor()" class="report1_9">产<br>品<br>名<br>称</td>
		<td id="report1_B5" colNo=2 value='一、轮胎' onclick="_hideEditor()" class="report1_2">一、轮胎</td>
		<td id="report1_C5" colNo=3 value='1=2+3' onclick="_hideEditor()" class="report1_1">1=2+3</td>
		<td colSpan=2 id="report1_D5" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_10">0.00</td>
		<td colSpan=2 id="report1_F5" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_10">0.00</td>
	</tr>
	<tr rn="6" height=23 style="height:23px;">
		<td id="report1_B6" colNo=2 value='其中：子午线轮胎' onclick="_hideEditor()" class="report1_2">其中：子午线轮胎</td>
		<td id="report1_C6" colNo=3 value='2' onclick="_hideEditor()" class="report1_1">2</td>
		<td colSpan=2 id="report1_D6" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td colSpan=2 id="report1_F6" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
	</tr>
	<tr rn="7" height=23 style="height:23px;">
		<td id="report1_B7" colNo=2 value='     斜交轮胎' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;斜交轮胎</td>
		<td id="report1_C7" colNo=3 value='3' onclick="_hideEditor()" class="report1_1">3</td>
		<td colSpan=2 id="report1_D7" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td colSpan=2 id="report1_F7" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
	</tr>
	<tr rn="8" height=23 style="height:23px;">
		<td id="report1_B8" colNo=2 value='二、酒精' onclick="_hideEditor()" class="report1_2">二、酒精</td>
		<td id="report1_C8" colNo=3 value='4=5+6+7' onclick="_hideEditor()" class="report1_1">4=5+6+7</td>
		<td colSpan=2 id="report1_D8" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_10">0.00</td>
		<td colSpan=2 id="report1_F8" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_10">0.00</td>
	</tr>
	<tr rn="9" height=23 style="height:23px;">
		<td id="report1_B9" colNo=2 value='其中：用于乙醇汽油的酒精' onclick="_hideEditor()" class="report1_2">其中：用于乙醇汽油的酒精</td>
		<td id="report1_C9" colNo=3 value='5' onclick="_hideEditor()" class="report1_1">5</td>
		<td colSpan=2 id="report1_D9" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td colSpan=2 id="report1_F9" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
	</tr>
	<tr rn="10" height=23 style="height:23px;">
		<td id="report1_B10" colNo=2 value='     使用酒精' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用酒精</td>
		<td id="report1_C10" colNo=3 value='6' onclick="_hideEditor()" class="report1_1">6</td>
		<td colSpan=2 id="report1_D10" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td colSpan=2 id="report1_F10" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
	</tr>
	<tr rn="11" height=23 style="height:23px;">
		<td id="report1_B11" colNo=2 value='     其他酒精' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他酒精</td>
		<td id="report1_C11" colNo=3 value='7' onclick="_hideEditor()" class="report1_1">7</td>
		<td colSpan=2 id="report1_D11" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td colSpan=2 id="report1_F11" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
	</tr>
	<tr rn="12" height=23 style="height:23px;">
		<td id="report1_B12" colNo=2 value='三、摩托车（排量<250毫升）' onclick="_hideEditor()" class="report1_2">三、摩托车（排量&lt;250毫升）</td>
		<td id="report1_C12" colNo=3 value='8' onclick="_hideEditor()" class="report1_1">8</td>
		<td colSpan=2 id="report1_D12" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
		<td colSpan=2 id="report1_F12" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_8">0.00</td>
	</tr>
	<tr rn="13" height=23 style="height:23px;">
		<td id="report1_A13" colNo=1 value='' onclick="_hideEditor()" class="report1_16"></td>
		<td id="report1_B13" colNo=2 value='' onclick="_hideEditor()" class="report1_16"></td>
		<td id="report1_C13" colNo=3 value='' onclick="_hideEditor()" class="report1_12"></td>
		<td id="report1_D13" colNo=4 value='' onclick="_hideEditor()" class="report1_5"></td>
		<td id="report1_E13" colNo=5 value='' onclick="_hideEditor()" class="report1_5"></td>
		<td id="report1_F13" colNo=6 value='' onclick="_hideEditor()" class="report1_5"></td>
		<td id="report1_G13" colNo=7 value='' onclick="_hideEditor()" class="report1_5"></td>
	</tr>
	<tr rn="14" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A14" colNo=1 value=' 填表说明：' onclick="_hideEditor()" class="report1_18">&nbsp;填表说明：</td>
		<td id="report1_C14" colNo=3 value='' onclick="_hideEditor()" class="report1_19"></td>
		<td id="report1_D14" colNo=4 value='' onclick="_hideEditor()" class="report1_3"></td>
		<td id="report1_E14" colNo=5 value='' onclick="_hideEditor()" class="report1_3"></td>
		<td id="report1_F14" colNo=6 value='' onclick="_hideEditor()" class="report1_3"></td>
		<td id="report1_G14" colNo=7 value='' onclick="_hideEditor()" class="report1_3"></td>
	</tr>
	<tr rn="15" height=23 style="height:23px;">
		<td id="report1_A15" colNo=1 value='' onclick="_hideEditor()" class="report1_13"></td>
		<td colSpan=6 id="report1_B15" colNo=2 value='一、本表由生产轮胎、酒精、摩托车的增值税一般纳税人按月填报。' onclick="_hideEditor()" class="report1_18">一、本表由生产轮胎、酒精、摩托车的增值税一般纳税人按月填报。</td>
	</tr>
	<tr rn="16" height=23 style="height:23px;">
		<td id="report1_A16" colNo=1 value='' onclick="_hideEditor()" class="report1_13"></td>
		<td colSpan=6 id="report1_B16" colNo=2 value='二、本表“销售数量”的计量单位；轮胎为条；酒精为吨；摩托车为辆。' onclick="_hideEditor()" class="report1_18">二、本表“销售数量”的计量单位；轮胎为条；酒精为吨；摩托车为辆。</td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,D6,D7,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D6' ) )+_parseValue( document.getElementById( 'report1_D7' ) )).toFixed(2);
				document.getElementById( 'report1_D5' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D5' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D5' ) );
			}catch(e1){}
		}
		cells = ",,F6,F7,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F6' ) )+_parseValue( document.getElementById( 'report1_F7' ) )).toFixed(2);
				document.getElementById( 'report1_F5' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F5' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F5' ) );
			}catch(e1){}
		}
		cells = ",,D9,D10,D11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D9' ) )+_parseValue( document.getElementById( 'report1_D10' ) )+_parseValue( document.getElementById( 'report1_D11' ) )).toFixed(2);
				document.getElementById( 'report1_D8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D8' ) );
			}catch(e1){}
		}
		cells = ",,F9,F10,F11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F9' ) )+_parseValue( document.getElementById( 'report1_F10' ) )+_parseValue( document.getElementById( 'report1_F11' ) )).toFixed(2);
				document.getElementById( 'report1_F8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F8' ) );
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
	<input type=hidden name=fileName value="/zzs2013Ybnsr/bfcpxstjb.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_41512">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showReport.jsp?raq=%2Fzzs2013Ybnsr%2Fbfcpxstjb.raq&nsrsbh=450100399111430&sbzt=0&skssq=20171111&ssqq=2017-11-01&ssqz=2017-11-30&isTbBz=0&reportParamsId=15123563589602373140649">
	<input type=hidden name=backAndRefresh value="/reportJsp/success.jsp">
	<input type=hidden name=promptAfterSave value="no">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_ZZS_BFCPXSTJB;xmlName=zzs2013/zzs_ybnsr_bfcpxstjb;sbzt=0;ssqq=2017-11-01;skssq=20171111;nsrsbh=450100399111430;raq=/zzs2013Ybnsr/bfcpxstjb.raq;ssqz=2017-11-30;isTbBz=0">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/zzs2013Ybnsr/bfcpxstjb.raq&srcType=file&cachedId=10_1_1_176_8080_41512&isScroll=0&backAndRefresh=/reportJsp/success.jsp&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_ZZS_BFCPXSTJB%3BxmlName%3Dzzs2013%2Fzzs_ybnsr_bfcpxstjb%3Bsbzt%3D0%3Bssqq%3D2017-11-01%3Bskssq%3D20171111%3Bnsrsbh%3D450100399111430%3Braq%3D%2Fzzs2013Ybnsr%2Fbfcpxstjb.raq%3Bssqz%3D2017-11-30%3BisTbBz%3D0&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

