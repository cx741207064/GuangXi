<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showReport_zzsJmssbMxb.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showReport_zzsJmssbMxb" %>

<!DOCTYPE html>










 
 
 

<html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=8,9,10" />
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

<input type="hidden" value="raq=/zzs2013Ybnsr/zzsJmssbMxb.raq;nsrsbh=450100399111430;sbzt=0;skssq=20171111;ssqq=2017-11-01;ssqz=2017-11-30;isTbBz=0" id="myParams" />
<iframe name="submitFrame" src="" style="display:none"></iframe> 
<table id="rpt" width="100%"><tr><td align="center">
		<script language=javascript src="/WSSBSL/Finput.js" charset="UTF-8">
</script>
<script language=javascript src="/WSSBSL/FlineInput.js" charset="UTF-8">
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
	var report1_cachedId = "10_1_1_176_8080_41510";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2Fzzs2013Ybnsr%2FzzsJmssbMxb.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15123563589443392140648&cachedId=10_1_1_176_8080_41510&t_i_m_e=1512356359053" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2Fzzs2013Ybnsr%2FzzsJmssbMxb.raq&columns=0&srcType=file&reportParamsId=15123563589443392140648&cachedId=10_1_1_176_8080_41510&t_i_m_e=1512356359053" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2Fzzs2013Ybnsr%2FzzsJmssbMxb.raq&columns=0&srcType=file&reportParamsId=15123563589443392140648&cachedId=10_1_1_176_8080_41510&t_i_m_e=1512356359053";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2Fzzs2013Ybnsr%2FzzsJmssbMxb.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15123563589443392140648&cachedId=10_1_1_176_8080_41510&t_i_m_e=1512356359053";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2Fzzs2013Ybnsr%2FzzsJmssbMxb.raq&srcType=file&reportParamsId=15123563589443392140648&cachedId=10_1_1_176_8080_41510&t_i_m_e=1512356359053" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2Fzzs2013Ybnsr%2FzzsJmssbMxb.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15123563589443392140648&cachedId=10_1_1_176_8080_41510&t_i_m_e=1512356359053";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2Fzzs2013Ybnsr%2FzzsJmssbMxb.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15123563589443392140648&cachedId=10_1_1_176_8080_41510&t_i_m_e=1512356359053";
	}
</script>
<table id=report1_reportTbl style="position:relative;"><tr><td>
<div id=report1_reportDiv style="display:inline-block;text-align:left;position:relative;">
<table>
	<tr><td style="background-color:">
		<div noWrap style="font-family:宋体;font-size:13px;color:;">
<span style="cursor:pointer" onclick="_insertRow( report1 )"></span>&nbsp;<span style="cursor:pointer" onclick="_appendRow( report1 )"></span>&nbsp;<span style="cursor:pointer" onclick="_deleteRow( report1 )"></span>&nbsp;<span style="cursor:pointer" onclick="_submitRowInput( report1 )"></span>		</div></td></tr></table>
<script language=javascript>
	var report1oldstatus = "";
	function report1457162over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1457162out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_5 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#008000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;line-height:16px;}
	.report1_8 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#008000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_12 { text-align:center;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_13 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_14 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_15 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#008002;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_16 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1457162out()" onmouseover="report1457162over()" rowCount=16 cols=9 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" isli=true nextRowNo=17 ndr="1,2,3,4,5,6,7,9,10,11,12,13,14,16" style="width:1031px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:133px;"></col>
		<col style="width:358px;"></col>
		<col style="width:28px;"></col>
		<col style="width:105px;"></col>
		<col style="width:94px;"></col>
		<col style="width:103px;"></col>
		<col style="width:112px;"></col>
		<col style="width:98px;"></col>
	</colgroup>
	<tr rn="1" id=report1_row1 status="0" pid="report1" height=54 style="height:54px;">
		<td colSpan=8 id="report1_A1" colNo=1 sc="A1" value='增值税减免税申报明细表' onclick="_hideEditor()" class="report1_12">增值税减免税申报明细表</td>
		<td id="report1_I1" colNo=9 bkj="true" sc="I1" value='' onclick="_hideEditor()" class="report1_12" style="display:none;"></td>
	</tr>
	<tr rn="2" id=report1_row2 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A2" colNo=1 sc="A2" value='纳税人识别号：' onclick="_hideEditor()" class="report1_13">纳税人识别号：</td>
		<td colSpan=3 id="report1_B2" colNo=2 sc="B2" value='' onclick="_hideEditor()" class="report1_13"></td>
		<td id="report1_E2" colNo=5 sc="E2" value='填表日期： ' onclick="_hideEditor()" class="report1_3">填表日期：&nbsp;</td>
		<td id="report1_F2" colNo=6 sc="F2" value='' onclick="_hideEditor()" class="report1_13"></td>
		<td colSpan=2 id="report1_G2" colNo=7 sc="G2" value='金额单位：元（列至角分）' onclick="_hideEditor()" class="report1_3">金额单位：元（列至角分）</td>
		<td id="report1_I2" colNo=9 bkj="true" sc="I2" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="3" id=report1_row3 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A3" colNo=1 sc="A3" value='纳税人名称（公章）：' onclick="_hideEditor()" class="report1_13">纳税人名称（公章）：</td>
		<td colSpan=3 id="report1_B3" colNo=2 sc="B3" value='' onclick="_hideEditor()" class="report1_13"></td>
		<td id="report1_E3" colNo=5 sc="E3" value='所属时期：' onclick="_hideEditor()" class="report1_3">所属时期：</td>
		<td id="report1_F3" colNo=6 sc="F3" value='' onclick="_hideEditor()" class="report1_13"></td>
		<td id="report1_G3" colNo=7 sc="G3" value='至' onclick="_hideEditor()" class="report1_3">至</td>
		<td id="report1_H3" colNo=8 sc="H3" value='' onclick="_hideEditor()" class="report1_13"></td>
		<td id="report1_I3" colNo=9 bkj="true" sc="I3" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="4" id=report1_row4 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=8 id="report1_A4" colNo=1 sc="A4" value='一、减税项目' onclick="_hideEditor()" class="report1_3">一、减税项目</td>
		<td id="report1_I4" colNo=9 bkj="true" sc="I4" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="5" id=report1_row5 status="0" pid="report1" height=20 style="height:20px;">
		<td rowSpan=2 colSpan=2 id="report1_A5" colNo=1 sc="A5" value='减税性质代码及名称' onclick="_hideEditor()" class="report1_3">减税性质代码及名称</td>
		<td rowSpan=2 id="report1_C5" colNo=3 sc="C5" value='栏次' onclick="_hideEditor()" class="report1_3">栏次</td>
		<td id="report1_D5" colNo=4 sc="D5" value='期初余额' onclick="_hideEditor()" class="report1_4">期初余额</td>
		<td id="report1_E5" colNo=5 sc="E5" value='本期发生额' onclick="_hideEditor()" class="report1_4">本期发生额</td>
		<td id="report1_F5" colNo=6 sc="F5" value='本期应抵减税额' onclick="_hideEditor()" class="report1_4">本期应抵减税额</td>
		<td id="report1_G5" colNo=7 sc="G5" value='本期实际抵减税额' onclick="_hideEditor()" class="report1_4">本期实际抵减税额</td>
		<td id="report1_H5" colNo=8 sc="H5" value='期末余额' onclick="_hideEditor()" class="report1_4">期末余额</td>
		<td id="report1_I5" colNo=9 bkj="true" sc="I5" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="6" id=report1_row6 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_D6" colNo=4 sc="D6" value='1' onclick="_hideEditor()" class="report1_3">1</td>
		<td id="report1_E6" colNo=5 sc="E6" value='2' onclick="_hideEditor()" class="report1_3">2</td>
		<td id="report1_F6" colNo=6 sc="F6" value='3=1+2' onclick="_hideEditor()" class="report1_3">3=1+2</td>
		<td id="report1_G6" colNo=7 sc="G6" value='4≤3' onclick="_hideEditor()" class="report1_3">4≤3</td>
		<td id="report1_H6" colNo=8 sc="H6" value='5=3-4' onclick="_hideEditor()" class="report1_3">5=3-4</td>
		<td id="report1_I6" colNo=9 bkj="true" sc="I6" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="7" id=report1_row7 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A7" colNo=1 sc="A7" value='合  计' onclick="_hideEditor()" class="report1_3">合&nbsp;&nbsp;计</td>
		<td id="report1_C7" colNo=3 sc="C7" value='1' onclick="_hideEditor()" class="report1_3">1</td>
		<td id="report1_D7" colNo=4 sc="D7" value='0.0' format="0.00" digits="2" calc='(sum("D8")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E7" colNo=5 sc="E7" value='0.0' format="0.00" digits="2" calc='(sum("E8")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_F7" colNo=6 sc="F7" value='0.0' format="0.00" digits="2" calc='(sum("F8")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_G7" colNo=7 sc="G7" value='0.0' format="0.00" digits="2" dataValid="report1_G7_valid()" calc='(sum("G8")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_G7_valid() {
		if( ! ( _xxf("G7")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('G7') );}catch(e){}
			alert( '“本期实际抵减税额”应该大于等于0' );
			return false;
		}
		if( ! ( _xxf("F7")>=_xxf("G7") ) ) {
			try{ report1_markInvalidCell( _xxid('F7')+","+_xxid('G7') );}catch(e){}
			alert( '“本期实际抵减税额”应该小于等于“本期应抵减税额”' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_H7" colNo=8 sc="H7" value='0.0' format="0.00" digits="2" calc='(sum("H8")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_I7" colNo=9 bkj="true" sc="I7" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
    <asp:Literal ID="ltrJS" runat="server"></asp:Literal>
	<%--<tr rn="8" id=report1_row8 status="0" isDetail=true did="0|1|8|8|8" isFirst=true drows=1 pid="report1" height=40 style="height:40px;">
		<td colSpan=2 id="report1_A8" colNo=1 sc="A8" ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="0001011705|SXA031900839,0001011705 | SXA031900839 | 个人出租住房应按照5%的征收率减按1.5%计算应纳增值税 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件2第一条第（九）款第6项;0001011811|SXA031900831,0001011811 | SXA031900831 | 退役士兵从事个体经营扣减增值税优惠 | 《财政部 税务总局 民政部关于继续实施扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2017〕46号第一条;0001011812|SXA031900832,0001011812 | SXA031900832 | 企业招用退役士兵扣减增值税优惠 | 《财政部 税务总局 民政部关于继续实施扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2017〕46号第二条;0001013609|SXA031900396,0001013609 | SXA031900396 | 招录重点群体就业扣减增值税优惠 | 《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第二条;0001024103|SXA031900378,0001024103 | SXA031900378 | 软件产品增值税即征即退 | 《财政部 国家税务总局关于软件产品增值税政策的通知》 财税〔2011〕100号;0001064204|SXA031900430,0001064204 | SXA031900430 | 水力发电增值税即征即退 | 《财政部 国家税务总局关于大型水电企业增值税政策的通知》 财税〔2014〕10号;0001103222|SXA031900087,0001103222 | SXA031900087 | 动漫企业增值税即征即退 | 《财政部 国家税务总局关于动漫产业增值税和营业税政策的通知》 财税〔2013〕98号第一条;0001120401|SXA031900121,0001120401 | SXA031900121 | 飞机维修劳务增值税即征即退 | 《财政部 国家税务总局关于飞机维修增值税问题的通知》 财税〔2000〕102号;0001120404|SXA031900871,0001120404 | SXA031900871 | 生产销售新支线飞机减按5%征收增值税 | 《财政部 国家税务总局关于大型客机和新支线飞机增值税政策的通知》财税〔2016〕141号第二条;0001129901|SXA031900035,0001129901 | SXA031900035 | 铂金增值税即征即退 | 《财政部 国家税务总局关于铂金及其制品税收政策的通知》 财税〔2003〕86号第一、二、四条;0001129902|SXA031900512,0001129902 | SXA031900512 | 已使用固定资产减征增值税 | 《财政部 国家税务总局关于部分货物适用增值税低税率和简易办法征收增值税政策的通知》 财税〔2009〕9号第二条（一）、（二）项;0001129914|SXA031900185,0001129914 | SXA031900185 | 购置增值税税控系统专用设备抵减增值税 | 《财政部 国家税务总局关于增值税税控系统专用设备和技术维护费用抵减增值税税额有关政策的通知》 财税〔2012〕15号;0001129917|SXA031900185,0001129917 | SXA031900185 | 购置增值税税控系统专用设备抵减增值税 | 《财政部 国家税务总局关于推广税控收款机有关税收政策的通知》 财税〔2004〕167号;0001129924|SXA031900512,0001129924 | SXA031900512 | 已使用固定资产减征增值税 | 《财政部 国家税务总局关于简并增值税征收率政策的通知》 财税〔2014〕57号第一条;0001129932|SXA031900838,0001129932 | SXA031900838 | 公路经营企业中的一般纳税人选择适用简易计税方法减按3%计算应纳增值税 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件2第一条第（九）款第2项;0011129999|SXA031900108,0011129999 | SXA031900108 | 对企业改制、资产整合过程中涉及的土地增值税予以免征 | 其他" value='0011129999|SXA031900108' _dv="report1_A8_dv()" onclick="_displayEditor()" class="report1_3">0011129999|SXA031900108</td>
<script language=javascript src="/WSSBSL/Fselect.js" charset="UTF-8"></script>
<script language=javascript>
    function report1_A8_dv() {
        if (!(_xxf("D8") != 0 || _xxf("E8") != 0 || _xxf("G8") != 0 ? checkNull(_xxs("A8").toString()) : 0 == 0)) {
            try { report1_markInvalidCell(_xxid('D8') + "," + _xxid('A8') + "," + _xxid('E8') + "," + _xxid('G8')); } catch (e) { }
            alert('“一、减免项目”栏的第1列至第5列相关行次填写有数值的情况下必须选择本行的“减税性质代码及名称”。');
            return false;
        }
        return true;
    }
</script>
		<td id="report1_C8" colNo=3 sc="C8" value='2' flow='groupMaxNumber()' onclick="_hideEditor()" class="report1_3">2</td>
		<td id="report1_D8" colNo=4 sc="D8" modifiable=true writable=true editStyle="1" inputDataType="2" value='2.0' format="0.00" digits="2" onclick="_displayEditor()" class="report1_1">2.00</td>
		<td id="report1_E8" colNo=5 sc="E8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="0.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F8" colNo=6 sc="F8" value='2.0' format="0.00" digits="2" calc='(_xxf("D8")+_xxf("E8")).toFixed(2)' onclick="_hideEditor()" class="report1_8">2.00</td>
		<td id="report1_G8" colNo=7 sc="G8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="0.00" digits="2" dataValid="report1_G8_valid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
    function report1_G8_valid() {
        if (!(_xxf("G8") >= 0)) {
            try { report1_markInvalidCell(_xxid('G8')); } catch (e) { }
            alert('“本期实际抵减税额”应该大于等于0');
            return false;
        }
        if (!(_xxf("F8") >= _xxf("G8"))) {
            try { report1_markInvalidCell(_xxid('F8') + "," + _xxid('G8')); } catch (e) { }
            alert('“本期实际抵减税额”应该小于等于“本期应抵减税额”');
            return false;
        }
        return true;
    }
</script>
		<td id="report1_H8" colNo=8 sc="H8" value='2.0' format="0.00" digits="2" calc='(_xxf("F8")-_xxf("G8")).toFixed(2)' onclick="_hideEditor()" class="report1_8">2.00</td>
		<td id="report1_I8" colNo=9 bkj="true" sc="I8" value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
    <tr rn="8" id=report1_row17 status="3" isDetail=true did="0|1|8|8|8" isFirst=true drows=1 pid="report1" height=40 style="height:40px;">
		<td colSpan=2 id="report1_A17" colNo=1 sc="A8" ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="0001011705|SXA031900839,0001011705 | SXA031900839 | 个人出租住房应按照5%的征收率减按1.5%计算应纳增值税 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件2第一条第（九）款第6项;0001011811|SXA031900831,0001011811 | SXA031900831 | 退役士兵从事个体经营扣减增值税优惠 | 《财政部 税务总局 民政部关于继续实施扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2017〕46号第一条;0001011812|SXA031900832,0001011812 | SXA031900832 | 企业招用退役士兵扣减增值税优惠 | 《财政部 税务总局 民政部关于继续实施扶持自主就业退役士兵创业就业有关税收政策的通知》 财税〔2017〕46号第二条;0001013609|SXA031900396,0001013609 | SXA031900396 | 招录重点群体就业扣减增值税优惠 | 《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第二条;0001024103|SXA031900378,0001024103 | SXA031900378 | 软件产品增值税即征即退 | 《财政部 国家税务总局关于软件产品增值税政策的通知》 财税〔2011〕100号;0001064204|SXA031900430,0001064204 | SXA031900430 | 水力发电增值税即征即退 | 《财政部 国家税务总局关于大型水电企业增值税政策的通知》 财税〔2014〕10号;0001103222|SXA031900087,0001103222 | SXA031900087 | 动漫企业增值税即征即退 | 《财政部 国家税务总局关于动漫产业增值税和营业税政策的通知》 财税〔2013〕98号第一条;0001120401|SXA031900121,0001120401 | SXA031900121 | 飞机维修劳务增值税即征即退 | 《财政部 国家税务总局关于飞机维修增值税问题的通知》 财税〔2000〕102号;0001120404|SXA031900871,0001120404 | SXA031900871 | 生产销售新支线飞机减按5%征收增值税 | 《财政部 国家税务总局关于大型客机和新支线飞机增值税政策的通知》财税〔2016〕141号第二条;0001129901|SXA031900035,0001129901 | SXA031900035 | 铂金增值税即征即退 | 《财政部 国家税务总局关于铂金及其制品税收政策的通知》 财税〔2003〕86号第一、二、四条;0001129902|SXA031900512,0001129902 | SXA031900512 | 已使用固定资产减征增值税 | 《财政部 国家税务总局关于部分货物适用增值税低税率和简易办法征收增值税政策的通知》 财税〔2009〕9号第二条（一）、（二）项;0001129914|SXA031900185,0001129914 | SXA031900185 | 购置增值税税控系统专用设备抵减增值税 | 《财政部 国家税务总局关于增值税税控系统专用设备和技术维护费用抵减增值税税额有关政策的通知》 财税〔2012〕15号;0001129917|SXA031900185,0001129917 | SXA031900185 | 购置增值税税控系统专用设备抵减增值税 | 《财政部 国家税务总局关于推广税控收款机有关税收政策的通知》 财税〔2004〕167号;0001129924|SXA031900512,0001129924 | SXA031900512 | 已使用固定资产减征增值税 | 《财政部 国家税务总局关于简并增值税征收率政策的通知》 财税〔2014〕57号第一条;0001129932|SXA031900838,0001129932 | SXA031900838 | 公路经营企业中的一般纳税人选择适用简易计税方法减按3%计算应纳增值税 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件2第一条第（九）款第2项;0011129999|SXA031900108,0011129999 | SXA031900108 | 对企业改制、资产整合过程中涉及的土地增值税予以免征 | 其他" value='0001129932|SXA031900838' _dv="report1_A8_dv()" onclick="_displayEditor()" class="report1_3">0001129932|SXA031900838</td>
<script language=javascript src="/WSSBSL/Fselect.js" charset="UTF-8"></script>
<script language=javascript>
    function report1_A8_dv() {
        if (!(_xxf("D8") != 0 || _xxf("E8") != 0 || _xxf("G8") != 0 ? checkNull(_xxs("A8").toString()) : 0 == 0)) {
            try { report1_markInvalidCell(_xxid('D8') + "," + _xxid('A8') + "," + _xxid('E8') + "," + _xxid('G8')); } catch (e) { }
            alert('“一、减免项目”栏的第1列至第5列相关行次填写有数值的情况下必须选择本行的“减税性质代码及名称”。');
            return false;
        }
        return true;
    }
</script>
		<td id="report1_C17" colNo=3 sc="C8" value='3' flow='groupMaxNumber()' onclick="_hideEditor()" class="report1_3">3</td>
		<td id="report1_D17" colNo=4 sc="D8" modifiable=true writable=true editStyle="1" inputDataType="2" value='2.0' format="0.00" digits="2" onclick="_displayEditor()" class="report1_1">2.00</td>
		<td id="report1_E17" colNo=5 sc="E8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="0.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F17" colNo=6 sc="F8" value='2.0' format="0.00" digits="2" calc='(_xxf("D8")+_xxf("E8")).toFixed(2)' onclick="_hideEditor()" class="report1_8">2.00</td>
		<td id="report1_G17" colNo=7 sc="G8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="0.00" digits="2" dataValid="report1_G8_valid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
    function report1_G8_valid() {
        if (!(_xxf("G8") >= 0)) {
            try { report1_markInvalidCell(_xxid('G8')); } catch (e) { }
            alert('“本期实际抵减税额”应该大于等于0');
            return false;
        }
        if (!(_xxf("F8") >= _xxf("G8"))) {
            try { report1_markInvalidCell(_xxid('F8') + "," + _xxid('G8')); } catch (e) { }
            alert('“本期实际抵减税额”应该小于等于“本期应抵减税额”');
            return false;
        }
        return true;
    }
</script>
		<td id="report1_H17" colNo=8 sc="H8" value='2.0' format="0.00" digits="2" calc='(_xxf("F8")-_xxf("G8")).toFixed(2)' onclick="_hideEditor()" class="report1_8">2.00</td>
		<td id="report1_I17" colNo=9 bkj="true" sc="I8" value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>--%>
	<tr rn="9" id=report1_row9 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=8 id="report1_A9" colNo=1 sc="A9" value='二、免税项目' onclick="_hideEditor()" class="report1_3">二、免税项目</td>
		<td id="report1_I9" colNo=9 bkj="true" sc="I9" value='jsxm-end' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="10" id=report1_row10 status="0" pid="report1" height=60 style="height:60px;">
		<td rowSpan=2 colSpan=2 id="report1_A10" colNo=1 sc="A10" value='免税性质代码及名称' onclick="_hideEditor()" class="report1_3">免税性质代码及名称</td>
		<td rowSpan=2 id="report1_C10" colNo=3 sc="C10" value='栏次' onclick="_hideEditor()" class="report1_16">栏次</td>
		<td id="report1_D10" colNo=4 sc="D10" value='免征增值税项目
销售额' onclick="_hideEditor()" class="report1_4">免征增值税项目<br>销售额</td>
		<td id="report1_E10" colNo=5 sc="E10" value='免税销售额扣除项目 本期实际扣除金额' onclick="_hideEditor()" class="report1_4">免税销售额扣除<br>项目&nbsp;本期实际<br>扣除金额</td>
		<td id="report1_F10" colNo=6 sc="F10" value='扣除后免税销售额' onclick="_hideEditor()" class="report1_4">扣除后免税销售额</td>
		<td id="report1_G10" colNo=7 sc="G10" value='免税销售额
对应的进项税额' onclick="_hideEditor()" class="report1_4">免税销售额<br>对应的进项税额</td>
		<td id="report1_H10" colNo=8 sc="H10" value='免税额' onclick="_hideEditor()" class="report1_4">免税额</td>
		<td id="report1_I10" colNo=9 bkj="true" sc="I10" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="11" id=report1_row11 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_D11" colNo=4 sc="D11" value='1' onclick="_hideEditor()" class="report1_3">1</td>
		<td id="report1_E11" colNo=5 sc="E11" value='2' onclick="_hideEditor()" class="report1_3">2</td>
		<td id="report1_F11" colNo=6 sc="F11" value='3=1-2' onclick="_hideEditor()" class="report1_3">3=1-2</td>
		<td id="report1_G11" colNo=7 sc="G11" value='4' onclick="_hideEditor()" class="report1_3">4</td>
		<td id="report1_H11" colNo=8 sc="H11" value='5' onclick="_hideEditor()" class="report1_4">5</td>
		<td id="report1_I11" colNo=9 bkj="true" sc="I11" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="12" id=report1_row12 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A12" colNo=1 sc="A12" value='合  计' onclick="_hideEditor()" class="report1_3">合&nbsp;&nbsp;计</td>
		<td id="report1_C12" colNo=3 sc="C12" value='1' onclick="_hideEditor()" class="report1_3">1</td>
		<td id="report1_D12" colNo=4 sc="D12" value='0.0' format="0.00" digits="2" calc='(_xxf("D13")+sum("D15")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_E12" colNo=5 sc="E12" value='0.0' format="0.00" digits="2" calc='(sum("E15")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_F12" colNo=6 sc="F12" value='0.0' format="0.00" digits="2" calc='(sum("F15")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_G12" colNo=7 sc="G12" value='0.0' format="0.00" digits="2" dataValid="report1_G12_valid()" calc='(sum("G15")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_G12_valid() {
		if( ! ( _xxf("F12")>=_xxf("G12") ) ) {
			try{ report1_markInvalidCell( _xxid('F12')+","+_xxid('G12') );}catch(e){}
			alert( '“免税销售额对应的进项税额”应该小于等于“扣除后免税销售额”' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_H12" colNo=8 sc="H12" value='0.0' format="0.00" digits="2" dataValid="report1_H12_valid()" calc='(sum("H15")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_H12_valid() {
		if( ! ( _xxf("H12")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H12') );}catch(e){}
			alert( '“免税项目免税额”应该大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I12" colNo=9 bkj="true" sc="I12" value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="13" id=report1_row13 status="1" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A13" colNo=1 sc="A13" value='出口免税' onclick="_hideEditor()" class="report1_6">出口免税</td>
		<td id="report1_C13" colNo=3 sc="C13" value='2' onclick="_hideEditor()" class="report1_3">2</td>
        <asp:Literal ID="ckmstd" runat="server"></asp:Literal>
		<%--<td id="report1_D13" runat="server" colNo=4 sc="D13" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="0.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>--%>
		<td id="report1_E13" colNo=5 sc="E13" value='——' onclick="_hideEditor()" class="report1_2">——</td>
		<td id="report1_F13" colNo=6 sc="F13" value='——' onclick="_hideEditor()" class="report1_2">——</td>
		<td id="report1_G13" colNo=7 sc="G13" value='——' onclick="_hideEditor()" class="report1_2">——</td>
		<td id="report1_H13" colNo=8 sc="H13" value='——' onclick="_hideEditor()" class="report1_7">——</td>
		<td id="report1_I13" colNo=9 bkj="true" sc="I13" value='' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="14" id=report1_row14 status="1" pid="report1" height=24 style="height:24px;">
		<td colSpan=2 id="report1_A14" colNo=1 sc="A14" value='           其中：跨境服务' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中：跨境服务</td>
		<td id="report1_C14" colNo=3 sc="C14" value='3' onclick="_hideEditor()" class="report1_3">3</td>
        <asp:Literal ID="kjfwtd" runat="server"></asp:Literal>
		<%--<td id="report1_D14" runat="server" colNo=4 sc="D14" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_D14_valid()" onclick="_displayEditor()" class="report1_1">0.00</td>--%>
<script language=javascript>
	function report1_D14_valid() {
		if( ! ( _xxf("D13")>=_xxf("D14") ) ) {
			try{ report1_markInvalidCell( _xxid('D14')+","+_xxid('D13') );}catch(e){}
			alert( '“其中:跨境服务免征增值税项目销售额”应该小于等于“出口免税免征增值税项目销售额”' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E14" colNo=5 sc="E14" value='——' onclick="_hideEditor()" class="report1_2">——</td>
		<td id="report1_F14" colNo=6 sc="F14" value='——' onclick="_hideEditor()" class="report1_2">——</td>
		<td id="report1_G14" colNo=7 sc="G14" value='——' onclick="_hideEditor()" class="report1_2">——</td>
		<td id="report1_H14" colNo=8 sc="H14" value='——' onclick="_hideEditor()" class="report1_2">——</td>
		<td id="report1_I14" colNo=9 sc="I14" value='' onclick="_hideEditor()" class="report1_11" style="display:none;"></td>
	</tr>
    <asp:Literal ID="ltrMS" runat="server"></asp:Literal>
	<%--<tr rn="15" id=report1_row15 status="0" isDetail=true did="0|1|15|15|15" isFirst=true drows=1 pid="report1" height=40 style="height:40px;">
		<td colSpan=2 id="report1_A15" colNo=1 sc="A15" ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="0001010503|SXA031900485,0001010503 | SXA031900485 | 鲜活肉蛋产品免征增值税优惠 | 《财政部 国家税务总局关于免征部分鲜活肉蛋产品流通环节增值税政策的通知》 财税〔2012〕75号;0001010504|SXA031900428,0001010504 | SXA031900428 | 蔬菜免征增值税优惠 | 《财政部 国家税务总局关于免征蔬菜流通环节增值税有关问题的通知》 财税〔2011〕137号;0001011606|SXA031900275,0001011606 | SXA031900275 | 救灾救济粮免征增值税优惠 | 《财政部 国家税务总局关于粮食企业增值税征免问题的通知》 财税字〔1999〕198号第二条第（二）项;0001011701|SXA031900796,0001011701 | SXA031900796 | 个人销售自建自用住房免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十五）款;0001011702|SXA031900823,0001011702 | SXA031900823 | 为了配合国家住房制度改革，企业、行政事业单位按房改成本价、标准价出售住房取得的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十四）款;0001011703|SXA031900828,0001011703 | SXA031900828 | 个人将购买2年以上（含2年）的住房对外销售免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第五条;0001011704|SXA031900834,0001011704 | SXA031900834 | 公共租赁住房经营管理单位出租公共租赁住房免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十六）款;0001011806|SXA031900448,0001011806 | SXA031900448 | 随军家属从事个体经营免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十九）款第2项;0001011807|SXA031900284,0001011807 | SXA031900284 | 军转干部从事个体经营免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（四十）款第1项;0001011809|SXA031900836,0001011809 | SXA031900836 | 企业安置随军家属免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十九）款第1项;0001011810|SXA031900837,0001011810 | SXA031900837 | 企业安置军转干部免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（四十）款第2项;0001012707|SXA031900044,0001012707 | SXA031900044 | 残疾人专用物品免征增值税优惠 | 《中华人民共和国增值税暂行条例》 中华人民共和国国务院令第538号第十五条第（六）项;0001012708|SXA031900785,0001012708 | SXA031900785 | 托儿所、幼儿园提供的保育和教育服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（一）款;0001012709|SXA031900786,0001012709 | SXA031900786 | 养老机构提供的养老服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二）款;0001012710|SXA031900787,0001012710 | SXA031900787 | 残疾人福利机构提供的育养服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三）款;0001012711|SXA031900788,0001012711 | SXA031900788 | 婚姻介绍服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（四）款;0001012712|SXA031900789,0001012712 | SXA031900789 | 殡葬服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（五）款;0001012713|SXA031900801,0001012713 | SXA031900801 | 住房公积金管理中心用住房公积金在指定的委托银行发放的个人住房贷款取得的利息收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第5项;0001012714|SXA031900820,0001012714 | SXA031900820 | 家政服务企业由员工制家政服务员提供家政服务取得的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十一）款;0001012715|SXA031900830,0001012715 | SXA031900830 | 残疾人员本人为社会提供的服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（六）款;0001012716|SXA031900011,0001012716 | SXA031900011 | 安置残疾人就业增值税即征即退 | 《财政部 国家税务总局关于促进残疾人就业增值税政策的通知》 财税〔2016〕52号第一、三条;0001012717|SXA031900798,0001012717 | SXA031900798 | 残疾人个人提供劳务免征增值税优惠 | 《财政部 国家税务总局关于促进残疾人就业增值税政策的通知》 财税〔2016〕52号第八条;0001013608|SXA031900394,0001013608 | SXA031900394 | 重点群体从事个体经营扣减增值税优惠 | 《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第一条;0001019902|SXA031900301,0001019902 | SXA031900301 | 粮食免征增值税优惠 | 《财政部 国家税务总局关于粮食企业增值税征免问题的通知》 财税字〔1999〕198号第一、五条;0001019905|SXA031900053,0001019905 | SXA031900053 | 储备大豆免征增值税优惠 | 《财政部 国家税务总局关于免征储备大豆增值税政策的通知》 财税〔2014〕38号;0001019906|SXA031900551,0001019906 | SXA031900551 | 政府储备食用植物油免征增值税优惠 | 《财政部 国家税务总局关于粮食企业增值税征免问题的通知》 财税字〔1999〕198号第五条;0001019907|SXA031900821,0001019907 | SXA031900821 | 福利彩票、体育彩票的发行收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十二）款;0001019908|SXA031900825,0001019908 | SXA031900825 | 涉及家庭财产分割的个人无偿转让不动产、土地使用权免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十六）款;0001019909|SXA031900033,0001019909 | SXA031900033 | 边销茶免征增值税优惠 | 《财政部 国家税务总局关于延长边销茶增值税政策执行期限的通知》 财税〔2016〕73号;0001021203|SXA031900244,0001021203 | SXA031900244 | 技术转让、技术开发免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十六）款;0001021903|SXA031900193,0001021903 | SXA031900193 | 光伏发电增值税即征即退 | 《财政部 国家税务总局关于继续执行光伏发电增值税政策的通知》 财税〔2016〕81号;0001021904|SXA031900867,0001021904 | SXA031900867 | 国家大学科技园收入免征增值税 | 《财政部 国家税务总局关于国家大学科技园税收政策的通知》 财税〔2016〕98号第一条;0001021905|SXA031900868,0001021905 | SXA031900868 | 科技企业孵化器收入免征增值税 | 《财政部 国家税务总局关于科技企业孵化器税收政策的通知》 财税〔2016〕89号第一条;0001032103|SXA031900449,0001032103 | SXA031900449 | 台湾航运公司、航空公司从事海峡两岸海上直航、空中直航业务在大陆取得的运输收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十七）款;0001033302|SXA031900865,0001033302 | SXA031900865 | 从事与新疆国际大巴扎项目有关的营业税应税业务免征增值税 | 《财政部 国家税务总局关于部分营业税和增值税政策到期延续问题的通知》 财税〔2016〕83号第四条;0001033303|SXA031900874,0001033303 | SXA031900874 | 从事与新疆国际大巴扎项目有关的营改增应税业务免征增值税 | 《财政部 国家税务总局关于继续执行新疆国际大巴扎项目增值税政策的通知》 财税〔2017〕36号;0001039901|SXA031900230,0001039901 | SXA031900230 | 横琴、平潭企业销售货物免征增值税优惠 | 《财政部 海关总署 国家税务总局关于横琴 平潭开发有关增值税和消费税政策的通知》 财税〔2014〕51号第二条;0001041501|SXA031900814,0001041501 | SXA031900814 | 符合条件的担保机构从事中小企业信用担保或者再担保业务取得的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十四）款;0001045301|SXA031900489,0001045301 | SXA031900489 | 小微企业免征增值税优惠（货物及劳务） | 《财政部 国家税务总局关于暂免征收部分小微企业增值税和营业税的通知》 财税〔2013〕52号;0001045303|SXA031900489,0001045303 | SXA031900489 | 小微企业免征增值税优惠（货物及劳务） | 《财政部 国家税务总局关于继续执行小微企业增值税和营业税政策的通知》 财税〔2015〕96号;0001045304|SXA031900840,0001045304 | SXA031900840 | 小微企业免征增值税优惠（服务、不动产和无形资产） | 《财政部 国家税务总局关于继续执行小微企业增值税和营业税政策的通知》 财税〔2015〕96号;0001045305|SXA031900840,0001045305 | SXA031900840 | 小微企业免征增值税优惠（服务、不动产和无形资产） | 《财政部 国家税务总局关于暂免征收部分小微企业增值税和营业税的通知》 财税〔2013〕52号;0001052402|SXA031900585,0001052402 | SXA031900585 | 资产重组免征增值税优惠 | 《财政部 国家税务总局关于中国邮政集团公司邮政速递物流业务重组改制有关税收问题的通知》 财税〔2011〕116号第一条;0001052403|SXA031900585,0001052403 | SXA031900585 | 资产重组免征增值税优惠 | 《财政部 国家税务总局关于中国邮政储蓄银行改制上市有关税收政策的通知》 财税〔2013〕53号第三条;0001059901|SXA031900585,0001059901 | SXA031900585 | 资产重组免征增值税优惠 | 《财政部 国家税务总局关于中国联合网络通信集团有限公司转让CDMA网及其用户资产企业合并资产整合过程中涉及的增值税营业税印花税和土地增值税政策问题的通知》 财税〔2011〕13号第一、二条;0001064001|SXA031900226,0001064001 | SXA031900226 | 合同能源管理项目免征增值税优惠 | 《财政部 国家税务总局关于促进节能服务产业发展增值税营业税和企业所得税政策问题的通知》 财税〔2010〕110号第一条第（二）项;0001064007|SXA031900481,0001064007 | SXA031900481 | 污水处理费免征增值税优惠 | 《财政部 国家税务总局关于污水处理费有关增值税政策的通知》 财税〔2001〕97号;0001064017|SXA031900720,0001064017 | SXA031900720 | 新型墙体材料增值税即征即退 | 《财政部 国家税务总局关于新型墙体材料增值税政策的通知》 财税〔2015〕73号;0001064018|SXA031900723,0001064018 | SXA031900723 | 风力发电增值税即征即退 | 《财政部 国家税务总局关于风力发电增值税政策的通知》 财税〔2015〕74号;0001064019|SXA031900587,0001064019 | SXA031900587 | 资源综合利用产品及劳务增值税即征即退 | 《财政部 国家税务总局关于印发<资源综合利用产品和劳务增值税优惠目录>的通知》 财税〔2015〕78号;0001064020|SXA031900183,0001064020 | SXA031900183 | 供热企业免征增值税优惠 | 《财政部 国家税务总局关于供热企业增值税 房产税 城镇土地使用税优惠政策的通知》 财税〔2016〕94号第一条;0001069902|SXA031900226,0001069902 | SXA031900226 | 合同能源管理项目免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十七）款;0001081501|SXA031900032,0001081501 | SXA031900032 | 被撤销金融机构转让财产免征增值税优惠 | 《财政部 国家税务总局关于被撤销金融机构有关税收政策问题的通知》 财税〔2003〕141号第二条第4款;0001081502|SXA031900132,0001081502 | SXA031900132 | 黄金期货交易免征增值税优惠 | 《财政部 国家税务总局关于黄金期货交易有关税收政策的通知》 财税〔2008〕5号;0001081503|SXA031900381,0001081503 | SXA031900381 | 上海期货保税交割免征增值税优惠 | 《财政部 国家税务总局关于上海期货交易所开展期货保税交割业务有关增值税问题的通知》 财税〔2010〕108号;0001081505|SXA031900596,0001081505 | SXA031900596 | 钻石交易免征增值税优惠 | 《财政部 海关总署 国家税务总局关于调整钻石及上海钻石交易所有关税收政策的通知》 财税〔2006〕65号;0001081506|SXA031900538,0001081506 | SXA031900538 | 原油和铁矿石期货保税交割业务增值税政策 | 《财政部 国家税务总局关于原油和铁矿石期货保税交割业务增值税政策的通知》 财税〔2015〕35号;0001081507|SXA031900800,0001081507 | SXA031900800 | 国债、地方政府债利息收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第3项;0001081508|SXA031900802,0001081508 | SXA031900802 | 外汇管理部门在从事国家外汇储备经营过程中,委托金融机构发放的外汇贷款取得的利息收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第6项;0001081509|SXA031900803,0001081509 | SXA031900803 | 统借统还业务取得的利息收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第7项;0001081510|SXA031900805,0001081510 | SXA031900805 | 被撤销金融机构以货物、不动产、无形资产、有价证券、票据等财产清偿债务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十）款;0001081511|SXA031900808,0001081511 | SXA031900808 | 香港市场投资者（包括单位和个人）通过沪港通买卖上海证券交易所上市A股取得的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十二）款第2项;0001081512|SXA031900809,0001081512 | SXA031900809 | 香港市场投资者（包括单位和个人）通过基金互认买卖内地基金份额取得的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十二）款第3项;0001081513|SXA031900810,0001081513 | SXA031900810 | 证券投资基金（封闭式证券投资基金，开放式证券投资基金）管理人运用基金买卖股票、债券取得的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十二）款第4项;0001081515|SXA031900813,0001081515 | SXA031900813 | 金融同业往来利息收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十三）款;0001081515|SXA031900862,0001081515 | SXA031900862 | 适用财税〔2016〕36号文件规定的金融同业往来利息收入（不含财税〔2016〕46号、财税〔2016〕70号文件规定的免税收入）增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十三）款;0001081517|SXA031900807,0001081517 | SXA031900807 | 合格境外投资者（简称QFII）委托境内公司在我国从事证券买卖业务取得的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十二）款第1项;0001081518|SXA031900812,0001081518 | SXA031900812 | 个人从事金融商品转让业务取得的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十二）款第5项;0001081519|SXA031900835,0001081519 | SXA031900835 | 人民银行对金融机构的贷款的利息收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第4项;0001081520|SXA031900829,0001081520 | SXA031900829 | 黄金期货交易增值税即征即退 | 《财政部 国家税务总局关于黄金期货交易有关税收政策的通知》 财税〔2008〕5号;0001081521|SXA031900859,0001081521 | SXA031900859 | 适用财税〔2016〕46号文件规定的金融同业往来利息收入增值税优惠 | 《财政部 国家税务总局关于进一步明确全面推开营改增试点金融业有关政策的通知》 财税〔2016〕46号第一条;0001081522|SXA031900860,0001081522 | SXA031900860 | 适用财税〔2016〕70号文件规定的金融同业往来利息收入增值税优惠 | 《财政部 国家税务总局关于金融机构同业往来等增值税政策的补充通知》 财税〔2016〕70号第一、二、三条;0001081523|SXA031900866,0001081523 | SXA031900866 | 邮政代理金融收入免征增值税优惠 | 《财政部 国家税务总局关于部分营业税和增值税政策到期延续问题的通知》 财税〔2016〕83号第三条;0001083901|SXA031900256,0001083901 | SXA031900256 | 金融资产管理公司免征增值税优惠 | 《财政部 国家税务总局关于4家资产管理公司接收资本金项下的资产在办理过户时有关税收政策问题的通知》 财税〔2003〕21号第二条;0001083903|SXA031900256,0001083903 | SXA031900256 | 金融资产管理公司免征增值税优惠 | 《财政部 国家税务总局关于中国信达等4家金融资产管理公司税收政策问题的通知》 财税〔2001〕10号;0001083904|SXA031900256,0001083904 | SXA031900256 | 金融资产管理公司免征增值税优惠 | 《财政部 国家税务总局关于中国东方资产管理公司处置港澳国际（集团）有限公司有关资产税收政策问题的通知》 财税〔2003〕212号第二条第4项、第三条第4项、第四条第4项;0001083907|SXA031900497,0001083907 | SXA031900497 | 熊猫普制金币免征增值税优惠 | 《财政部 国家税务总局关于熊猫普制金币免征增值税政策的通知》 财税〔2012〕97号;0001083911|SXA031900256,0001083911 | SXA031900256 | 金融资产管理公司免征增值税优惠 | 《财政部 国家税务总局关于中国信达资产管理股份有限公司等4家金融资产管理公司有关税收政策问题的通知》 财税〔2013〕56号;0001083913|SXA031900806,0001083913 | SXA031900806 | 保险公司开办的一年期以上人身保险产品取得的保费收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十一）款;0001083916|SXA031900536,0001083916 | SXA031900536 | 有形动产融资租赁服务增值税即征即退 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第二条第（二）款;0001091502|SXA031900797,0001091502 | SXA031900797 | 金融机构农户小额贷款取得的利息收入免征增值税优惠 | 《财政部 税务总局关于延续支持农村金融发展有关税收政策的通知》 财税〔2017〕44号第一条;0001091503|SXA031900878,0001091503 | SXA031900878 | 小额贷款公司取得的农户小额贷款利息收入免征增值税优惠 | 《财政部 税务总局关于小额贷款公司有关税收政策的通知》 财税〔2017〕48号第一条;0001092202|SXA031900444,0001092202 | SXA031900444 | 饲料产品免征增值税优惠 | 《财政部 国家税务总局关于饲料产品免征增值税问题的通知》 财税〔2001〕121号;0001092203|SXA031900534,0001092203 | SXA031900534 | 有机肥免征增值税优惠 | 《财政部 国家税务总局关于有机肥产品免征增值税的通知》 财税〔2008〕56号;0001092212|SXA031900444,0001092212 | SXA031900444 | 饲料产品免征增值税优惠 | 《财政部 国家税务总局关于豆粕等粕类产品征免增值税政策的通知》 财税〔2001〕30号;0001092301|SXA031900345,0001092301 | SXA031900345 | 农业生产资料免征增值税优惠 | 《财政部 国家税务总局关于不带动力的手扶拖拉机和三轮农用运输车增值税政策的通知》 财税〔2002〕89号;0001092303|SXA031900333,0001092303 | SXA031900333 | 农村电网维护费免征增值税优惠 | 《财政部 国家税务总局关于免征农村电网维护费增值税问题的通知》 财税字〔1998〕47号;0001092311|SXA031900343,0001092311 | SXA031900343 | 农民专业合作社免征增值税优惠 | 《财政部 国家税务总局关于农民专业合作社有关税收政策的通知》 财税〔2008〕81号第一、二、三条;0001092312|SXA031900345,0001092312 | SXA031900345 | 农业生产资料免征增值税优惠 | 《财政部 国家税务总局关于农业生产资料征免增值税政策的通知》 财税〔2001〕113号;0001092313|SXA031900793,0001092313 | SXA031900793 | 农业机耕、排灌、病虫害防治、植物保护、农牧保险以及相关技术培训业务，家禽、牲畜、水生动物的配种和疾病防治免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十）款;0001092314|SXA031900337,0001092314 | SXA031900337 | 农村饮水安全工程免征增值税优惠 | 《财政部 国家税务总局关于继续实行农村饮水安全工程建设运营税收优惠政策的通知》 财税〔2016〕19号第四条;0001099901|SXA031900069,0001099901 | SXA031900069 | 滴灌带和滴灌管产品免征增值税优惠 | 《财政部 国家税务总局关于免征滴灌带和滴灌管产品增值税的通知》 财税〔2007〕83号;0001099903|SXA031900824,0001099903 | SXA031900824 | 将土地使用权转让给农业生产者用于农业生产免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十五）款;0001101401|SXA031900451,0001101401 | SXA031900451 | 特殊教育校办企业增值税优惠 | 《财政部 国家税务总局关于教育税收政策的通知》 财税〔2004〕39号第一条第7项;0001101402|SXA031900791,0001101402 | SXA031900791 | 从事学历教育的学校提供的教育服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（八）款;0001101403|SXA031900792,0001101403 | SXA031900792 | 学生勤工俭学提供的服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（九）款;0001101404|SXA031900799,0001101404 | SXA031900799 | 国家助学贷款取得的利息收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第2项;0001101405|SXA031900818,0001101405 | SXA031900818 | 政府举办的从事学历教育的高等、中等和初等学校（不含下属单位），举办进修班、培训班取得的全部归该学校所有的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十九）款;0001101406|SXA031900819,0001101406 | SXA031900819 | 政府举办的职业学校设立的企业从事“现代服务”、“生活服务”业务活动取得的收入免征增值税免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十）款;0001101407|SXA031900864,0001101407 | SXA031900864 | 高校学生食堂餐饮服务收入免征增值税,高校学生公寓住宿费收入免征增值税 | 《财政部 国家税务总局关于继续执行高校学生公寓和食堂有关税收政策的通知》 财税〔2016〕82号第二、三条;0001102902|SXA031900884,0001102902 | SXA031900884 | 对北京冬奥组委、北京冬奥会测试赛赛事组委会取得的分成收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（一）款;0001102903|SXA031900885,0001102903 | SXA031900885 | 对北京冬奥组委、北京冬奥会测试赛赛事组委会取得的赞助收入、特许权收入、销售门票收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（二）款;0001102904|SXA031900886,0001102904 | SXA031900886 | 对北京冬奥组委、北京冬奥会测试赛赛事组委会取得的发行纪念邮票、纪念币收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（三）款;0001102905|SXA031900887,0001102905 | SXA031900887 | 对北京冬奥组委、北京冬奥会测试赛赛事组委会取得的媒体收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（四）款;0001102906|SXA031900888,0001102906 | SXA031900888 | 对北京冬奥组委、北京冬奥会测试赛赛事组委会向分支机构划拨所获赞助物资免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（八）款;0001102907|SXA031900889,0001102907 | SXA031900889 | 对北京冬奥组委、北京冬奥会测试赛赛事组委会赛后再销售物品和出让资产收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（八）款;0001102908|SXA031900890,0001102908 | SXA031900890 | 对北京冬奥组委、北京冬奥会测试赛赛事组委会取得的餐饮服务、住宿、租赁、介绍服务和收费卡收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（十四）款;0001102909|SXA031900899,0001102909 | SXA031900899 | 对国际奥委会取得的收入免征增值税（除转播权收入） | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（一）款;0001102910|SXA031900900,0001102910 | SXA031900900 | 对国际奥委会取得的转播权收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（三）款;0001102911|SXA031900904,0001102911 | SXA031900904 | 对中国奥委会取得的由北京冬奥组委支付的收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（四）款;0001102912|SXA031900908,0001102912 | SXA031900908 | 对国际残奥委会取得的与北京2022年冬残奥会有关的收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（五）款;0001102913|SXA031900912,0001102913 | SXA031900912 | 对中国残奥委会取得的由北京冬奥组委分期支付的收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（六）款;0001102914|SXA031900916,0001102914 | SXA031900916 | 企业根据赞助协议向北京冬奥组委免费提供的服务免征增值税（免税清单由北京冬奥组委报财政部、税务总局确定） | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第三条第（二）款;0001102915|SXA031900917,0001102915 | SXA031900917 | 免征参与者向北京冬奥组委无偿提供服务和无偿转让无形资产的增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第三条第（九）款;0001102916|SXA031900918,0001102916 | SXA031900918 | 对外籍技术官员取得的由北京冬奥组委、测试赛赛事组委会支付的劳务报酬免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第三条第（五）款;0001102917|SXA031900919,0001102917 | SXA031900919 | 对中方技术官员取得的由北京冬奥组委、测试赛赛事组委会支付的劳务报酬免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第三条第（六）款;0001103203|SXA031900261,0001103203 | SXA031900261 | 进口图书、报刊资料免征增值税优惠 | 《财政部 国家税务总局关于北京中科进出口公司销售给高等学校科研单位和北京图书馆的进口图书报刊资料免征增值税问题的通知》 财税字〔1998〕69号;0001103207|SXA031900261,0001103207 | SXA031900261 | 进口图书、报刊资料免征增值税优惠 | 《财政部 国家税务总局关于中国国际图书贸易总公司销售给高等学校教育科研单位和北京图书馆的进口图书报刊资料免征增值税问题的通知》 财税字〔1998〕68号;0001103208|SXA031900261,0001103208 | SXA031900261 | 进口图书、报刊资料免征增值税优惠 | 《财政部 国家税务总局关于中国教育图书进出口公司销售给高等学校教育科研单位和北京图书馆的进口图书报刊资料免征增值税问题的通知》 财税字〔1998〕67号;0001103209|SXA031900261,0001103209 | SXA031900261 | 进口图书、报刊资料免征增值税优惠 | 《财政部 国家税务总局关于中国经济图书进出口公司中国出版对外贸易总公司销售给大专院校和科研单位的进口书刊资料免征增值税的通知》 财税字〔1999〕255号;0001103210|SXA031900261,0001103210 | SXA031900261 | 进口图书、报刊资料免征增值税优惠 | 《财政部 国家税务总局关于中国科技资料进出口总公司销售进口图书享受免征国内销售环节增值税政策的通知》 财税〔2004〕69号;0001103211|SXA031900261,0001103211 | SXA031900261 | 进口图书、报刊资料免征增值税优惠 | 《财政部 国家税务总局关于中国图书进出口总公司销售给科研教学单位的进口书刊资料免征增值税问题的通知》 财税字〔1997〕66号;0001103215|SXA031900480,0001103215 | SXA031900480 | 文化事业单位转制免征增值税优惠 | 《财政部 国家税务总局 中宣部关于下发红旗出版社有限责任公司等中央所属转制文化企业名单的通知》 财税〔2011〕3号;0001103216|SXA031900480,0001103216 | SXA031900480 | 文化事业单位转制免征增值税优惠 | 《财政部 国家税务总局 中宣部关于下发人民网股份有限公司等81家中央所属转制文化企业名单的通知》 财税〔2011〕27号;0001103217|SXA031900480,0001103217 | SXA031900480 | 文化事业单位转制免征增值税优惠 | 《财政部 国家税务总局 中宣部关于下发世界知识出版社等35家中央所属转制文化企业名单的通知》 财税〔2011〕120号;0001103220|SXA031900466,0001103220 | SXA031900466 | 图书批发、零售环节免征增值税优惠 | 《财政部 国家税务总局关于延续宣传文化增值税和营业税优惠政策的通知》 财税〔2013〕87号第二条;0001103224|SXA031900083,0001103224 | SXA031900083 | 电影产业免征增值税优惠 | 《财政部 海关总署 国家税务总局关于继续实施支持文化企业发展若干税收政策的通知》 财税〔2014〕85号第一条;0001103225|SXA031900582,0001103225 | SXA031900582 | 转制文化企业免征增值税优惠 | 《财政部 国家税务总局 中宣部关于继续实施文化体制改革中经营性文化事业单位转制为企业若干税收政策的通知》 财税〔2014〕84号第一条第（三）（四）项;0001103227|SXA031900794,0001103227 | SXA031900794 | 纪念馆、博物馆、文化馆、文物保护单位管理机构、美术馆、展览馆、书画院、图书馆在自己的场所提供文化体育服务取得的第一道门票收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十一）款;0001103228|SXA031900795,0001103228 | SXA031900795 | 寺院、宫观、清真寺和教堂举办文化、宗教活动的门票收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十二）款;0001103229|SXA031900817,0001103229 | SXA031900817 | 科普单位的门票收入，以及县级及以上党政部门和科协开展科普活动的门票收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十八）款;0001103230|SXA031900725,0001103230 | SXA031900725 | 个人转让著作权免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十四）款;0001103231|SXA031900535,0001103231 | SXA031900535 | 有线电视基本收视费免征增值税优惠 | 《财政部 国家税务总局关于继续执行有线电视收视费增值税政策的通知》 财税〔2017〕35号;0001120706|SXA031900822,0001120706 | SXA031900822 | 军队空余房产租赁收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十三）款;0001121301|SXA031900462,0001121301 | SXA031900462 | 铁路货车修理免征增值税优惠 | 《财政部 国家税务总局关于铁路货车修理免征增值税的通知》 财税〔2001〕54号;0001121310|SXA031900198,0001121310 | SXA031900198 | 国际货物运输代理服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十八）款;0001121311|SXA031900191,0001121311 | SXA031900191 | 管道运输服务增值税即征即退 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第二条第（一）款;0001122601|SXA031900815,0001122601 | SXA031900815 | 国家商品储备管理单位及其直属企业承担商品储备任务，从中央或者地方财政取得的利息补贴收入和价差补贴收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十五）款;0001123406|SXA031900790,0001123406 | SXA031900790 | 医疗机构提供的医疗服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（七）款;0001123407|SXA031900287,0001123407 | SXA031900287 | 抗艾滋病药品免征增值税优惠 | 《财政部 国家税务总局关于延续免征国产抗艾滋病病毒药品增值税政策的通知》 财税〔2016〕97号;0001124302|SXA031900482,0001124302 | SXA031900482 | 无偿援助项目免征增值税优惠 | 《财政部 国家税务总局外经贸部关于外国政府和国际组织无偿援助项目在华采购物资免征增值税问题的通知》 财税〔2002〕2号;0001129907|SXA031900234,0001129907 | SXA031900234 | 黄金交易免征增值税优惠 | 《财政部 国家税务总局关于黄金税收政策问题的通知》 财税〔2002〕142号第一、二条;0001129911|SXA031900347,0001129911 | SXA031900347 | 拍卖货物免征增值税优惠 | 《国家税务总局关于拍卖行取得的拍卖收入征收增值税、营业税有关问题的通知》 国税发〔1999〕40号第一条;0001129916|SXA031900234,0001129916 | SXA031900234 | 黄金交易免征增值税优惠 | 《财政部 国家税务总局 中国人民银行关于配售出口黄金有关税收规定的通知》 财税〔2000〕3号第二条;0001129927|SXA031900826,0001129927 | SXA031900826 | 土地所有者出让土地使用权和土地使用者将土地使用权归还给土地所有者免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十七）款;0001129928|SXA031900827,0001129928 | SXA031900827 | 县级以上地方人民政府或自然资源行政主管部门出让、转让或收回自然资源使用权（不含土地使用权）免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十八）款;0001129931|SXA031900833,0001129931 | SXA031900833 | 行政单位之外的其他单位收取的符合条件的政府性基金和行政事业性收费免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十三）款;0001129999|SXA031900727,0001129999 | SXA031900727 | 军队用粮免征增值税优惠 | 其他;0001129999|SXA031900830,0001129999 | SXA031900830 | 残疾人员本人为社会提供的服务免征增值税优惠 | 其他;0001129999|SXA031900191,0001129999 | SXA031900191 | 管道运输服务增值税即征即退 | 其他;0001129999|SXA031900722,0001129999 | SXA031900722 | 自产农产品免征增值税优惠 | 其他;0001129999|SXA031999999,0001129999 | SXA031999999 | 其他 | 其他;0001129999|SXA031900725,0001129999 | SXA031900725 | 个人转让著作权免征增值税优惠 | 其他;0001129999|SXA031900726,0001129999 | SXA031900726 | 军队、军工系统部分货物免征增值税优惠 | 其他;0001129999|SXA031900728,0001129999 | SXA031900728 | 血站免征增值税优惠 | 其他;0001129999|SXA031900731,0001129999 | SXA031900731 | 公安、司法免征增值税优惠 | 其他;0001129999|SXA031900724,0001129999 | SXA031900724 | 古旧图书免征增值税优惠 | 其他;0001129999|SXA031900732,0001129999 | SXA031900732 | 避孕药品和用具免征增值税优惠 | 其他;0001129999|SXA031900729,0001129999 | SXA031900729 | 医疗卫生机构免征增值税优惠 | 其他" value='0001010503|SXA031900485' _dv="report1_A15_dv()" onclick="_displayEditor()" class="report1_3">0001010503|SXA031900485</td>
<script language=javascript>
	function report1_A15_dv() {
		if( ! ( _xxf("D15")!=0 || _xxf("E15")!=0 || _xxf("G15")!=0 || _xxf("H15")?checkNull(_xxs("A15").toString()):0==0 ) ) {
			try{ report1_markInvalidCell( _xxid('G15')+","+_xxid('H15')+","+_xxid('D15')+","+_xxid('E15')+","+_xxid('A15') );}catch(e){}
			alert( '“二、免税项目”栏的第1列至第5列相关行次填写有数值的情况下必须选择本行的“免税性质代码及名称”。' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_C15" colNo=3 sc="C15" value='4' flow='groupMaxNumber()' onclick="_hideEditor()" class="report1_3">4</td>
		<td id="report1_D15" colNo=4 sc="D15" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="0.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E15" colNo=5 sc="E15" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="0.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F15" colNo=6 sc="F15" value='0.0' format="0.00" digits="2" calc='(_xxf("D15")-_xxf("E15")).toFixed(2)' onclick="_hideEditor()" class="report1_15">0.00</td>
		<td id="report1_G15" colNo=7 sc="G15" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="0.00" digits="2" dataValid="report1_G15_valid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_G15_valid() {
		if( ! ( _xxf("F15")>=_xxf("G15") ) ) {
			try{ report1_markInvalidCell( _xxid('G15')+","+_xxid('F15') );}catch(e){}
			alert( '“本期实际抵减税额”应该小于等于“本期应抵减税额”' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_H15" colNo=8 sc="H15" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="0.00" digits="2" dataValid="report1_H15_valid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
	function report1_H15_valid() {
		if( ! ( _xxf("H15")>=0 ) ) {
			try{ report1_markInvalidCell( _xxid('H15') );}catch(e){}
			alert( '“免税项目免税额”应该大于等于0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_I15" colNo=9 bkj="true" sc="I15" value='' onclick="_hideEditor()" class="report1_14" style="display:none;"></td>
	</tr>
    <tr rn="15" id=report1_row18 status="3" isDetail=true did="0|1|15|15|15" isFirst=true drows=1 pid="report1" height=40 style="height:40px;">
		<td colSpan=2 id="report1_A18" colNo=1 sc="A15" ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="0001010503|SXA031900485,0001010503 | SXA031900485 | 鲜活肉蛋产品免征增值税优惠 | 《财政部 国家税务总局关于免征部分鲜活肉蛋产品流通环节增值税政策的通知》 财税〔2012〕75号;0001010504|SXA031900428,0001010504 | SXA031900428 | 蔬菜免征增值税优惠 | 《财政部 国家税务总局关于免征蔬菜流通环节增值税有关问题的通知》 财税〔2011〕137号;0001011606|SXA031900275,0001011606 | SXA031900275 | 救灾救济粮免征增值税优惠 | 《财政部 国家税务总局关于粮食企业增值税征免问题的通知》 财税字〔1999〕198号第二条第（二）项;0001011701|SXA031900796,0001011701 | SXA031900796 | 个人销售自建自用住房免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十五）款;0001011702|SXA031900823,0001011702 | SXA031900823 | 为了配合国家住房制度改革，企业、行政事业单位按房改成本价、标准价出售住房取得的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十四）款;0001011703|SXA031900828,0001011703 | SXA031900828 | 个人将购买2年以上（含2年）的住房对外销售免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第五条;0001011704|SXA031900834,0001011704 | SXA031900834 | 公共租赁住房经营管理单位出租公共租赁住房免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十六）款;0001011806|SXA031900448,0001011806 | SXA031900448 | 随军家属从事个体经营免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十九）款第2项;0001011807|SXA031900284,0001011807 | SXA031900284 | 军转干部从事个体经营免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（四十）款第1项;0001011809|SXA031900836,0001011809 | SXA031900836 | 企业安置随军家属免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十九）款第1项;0001011810|SXA031900837,0001011810 | SXA031900837 | 企业安置军转干部免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（四十）款第2项;0001012707|SXA031900044,0001012707 | SXA031900044 | 残疾人专用物品免征增值税优惠 | 《中华人民共和国增值税暂行条例》 中华人民共和国国务院令第538号第十五条第（六）项;0001012708|SXA031900785,0001012708 | SXA031900785 | 托儿所、幼儿园提供的保育和教育服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（一）款;0001012709|SXA031900786,0001012709 | SXA031900786 | 养老机构提供的养老服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二）款;0001012710|SXA031900787,0001012710 | SXA031900787 | 残疾人福利机构提供的育养服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三）款;0001012711|SXA031900788,0001012711 | SXA031900788 | 婚姻介绍服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（四）款;0001012712|SXA031900789,0001012712 | SXA031900789 | 殡葬服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（五）款;0001012713|SXA031900801,0001012713 | SXA031900801 | 住房公积金管理中心用住房公积金在指定的委托银行发放的个人住房贷款取得的利息收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第5项;0001012714|SXA031900820,0001012714 | SXA031900820 | 家政服务企业由员工制家政服务员提供家政服务取得的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十一）款;0001012715|SXA031900830,0001012715 | SXA031900830 | 残疾人员本人为社会提供的服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（六）款;0001012716|SXA031900011,0001012716 | SXA031900011 | 安置残疾人就业增值税即征即退 | 《财政部 国家税务总局关于促进残疾人就业增值税政策的通知》 财税〔2016〕52号第一、三条;0001012717|SXA031900798,0001012717 | SXA031900798 | 残疾人个人提供劳务免征增值税优惠 | 《财政部 国家税务总局关于促进残疾人就业增值税政策的通知》 财税〔2016〕52号第八条;0001013608|SXA031900394,0001013608 | SXA031900394 | 重点群体从事个体经营扣减增值税优惠 | 《财政部 税务总局 人力资源社会保障部关于继续实施支持和促进重点群体创业就业有关税收政策的通知》 财税〔2017〕49号第一条;0001019902|SXA031900301,0001019902 | SXA031900301 | 粮食免征增值税优惠 | 《财政部 国家税务总局关于粮食企业增值税征免问题的通知》 财税字〔1999〕198号第一、五条;0001019905|SXA031900053,0001019905 | SXA031900053 | 储备大豆免征增值税优惠 | 《财政部 国家税务总局关于免征储备大豆增值税政策的通知》 财税〔2014〕38号;0001019906|SXA031900551,0001019906 | SXA031900551 | 政府储备食用植物油免征增值税优惠 | 《财政部 国家税务总局关于粮食企业增值税征免问题的通知》 财税字〔1999〕198号第五条;0001019907|SXA031900821,0001019907 | SXA031900821 | 福利彩票、体育彩票的发行收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十二）款;0001019908|SXA031900825,0001019908 | SXA031900825 | 涉及家庭财产分割的个人无偿转让不动产、土地使用权免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十六）款;0001019909|SXA031900033,0001019909 | SXA031900033 | 边销茶免征增值税优惠 | 《财政部 国家税务总局关于延长边销茶增值税政策执行期限的通知》 财税〔2016〕73号;0001021203|SXA031900244,0001021203 | SXA031900244 | 技术转让、技术开发免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十六）款;0001021903|SXA031900193,0001021903 | SXA031900193 | 光伏发电增值税即征即退 | 《财政部 国家税务总局关于继续执行光伏发电增值税政策的通知》 财税〔2016〕81号;0001021904|SXA031900867,0001021904 | SXA031900867 | 国家大学科技园收入免征增值税 | 《财政部 国家税务总局关于国家大学科技园税收政策的通知》 财税〔2016〕98号第一条;0001021905|SXA031900868,0001021905 | SXA031900868 | 科技企业孵化器收入免征增值税 | 《财政部 国家税务总局关于科技企业孵化器税收政策的通知》 财税〔2016〕89号第一条;0001032103|SXA031900449,0001032103 | SXA031900449 | 台湾航运公司、航空公司从事海峡两岸海上直航、空中直航业务在大陆取得的运输收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十七）款;0001033302|SXA031900865,0001033302 | SXA031900865 | 从事与新疆国际大巴扎项目有关的营业税应税业务免征增值税 | 《财政部 国家税务总局关于部分营业税和增值税政策到期延续问题的通知》 财税〔2016〕83号第四条;0001033303|SXA031900874,0001033303 | SXA031900874 | 从事与新疆国际大巴扎项目有关的营改增应税业务免征增值税 | 《财政部 国家税务总局关于继续执行新疆国际大巴扎项目增值税政策的通知》 财税〔2017〕36号;0001039901|SXA031900230,0001039901 | SXA031900230 | 横琴、平潭企业销售货物免征增值税优惠 | 《财政部 海关总署 国家税务总局关于横琴 平潭开发有关增值税和消费税政策的通知》 财税〔2014〕51号第二条;0001041501|SXA031900814,0001041501 | SXA031900814 | 符合条件的担保机构从事中小企业信用担保或者再担保业务取得的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十四）款;0001045301|SXA031900489,0001045301 | SXA031900489 | 小微企业免征增值税优惠（货物及劳务） | 《财政部 国家税务总局关于暂免征收部分小微企业增值税和营业税的通知》 财税〔2013〕52号;0001045303|SXA031900489,0001045303 | SXA031900489 | 小微企业免征增值税优惠（货物及劳务） | 《财政部 国家税务总局关于继续执行小微企业增值税和营业税政策的通知》 财税〔2015〕96号;0001045304|SXA031900840,0001045304 | SXA031900840 | 小微企业免征增值税优惠（服务、不动产和无形资产） | 《财政部 国家税务总局关于继续执行小微企业增值税和营业税政策的通知》 财税〔2015〕96号;0001045305|SXA031900840,0001045305 | SXA031900840 | 小微企业免征增值税优惠（服务、不动产和无形资产） | 《财政部 国家税务总局关于暂免征收部分小微企业增值税和营业税的通知》 财税〔2013〕52号;0001052402|SXA031900585,0001052402 | SXA031900585 | 资产重组免征增值税优惠 | 《财政部 国家税务总局关于中国邮政集团公司邮政速递物流业务重组改制有关税收问题的通知》 财税〔2011〕116号第一条;0001052403|SXA031900585,0001052403 | SXA031900585 | 资产重组免征增值税优惠 | 《财政部 国家税务总局关于中国邮政储蓄银行改制上市有关税收政策的通知》 财税〔2013〕53号第三条;0001059901|SXA031900585,0001059901 | SXA031900585 | 资产重组免征增值税优惠 | 《财政部 国家税务总局关于中国联合网络通信集团有限公司转让CDMA网及其用户资产企业合并资产整合过程中涉及的增值税营业税印花税和土地增值税政策问题的通知》 财税〔2011〕13号第一、二条;0001064001|SXA031900226,0001064001 | SXA031900226 | 合同能源管理项目免征增值税优惠 | 《财政部 国家税务总局关于促进节能服务产业发展增值税营业税和企业所得税政策问题的通知》 财税〔2010〕110号第一条第（二）项;0001064007|SXA031900481,0001064007 | SXA031900481 | 污水处理费免征增值税优惠 | 《财政部 国家税务总局关于污水处理费有关增值税政策的通知》 财税〔2001〕97号;0001064017|SXA031900720,0001064017 | SXA031900720 | 新型墙体材料增值税即征即退 | 《财政部 国家税务总局关于新型墙体材料增值税政策的通知》 财税〔2015〕73号;0001064018|SXA031900723,0001064018 | SXA031900723 | 风力发电增值税即征即退 | 《财政部 国家税务总局关于风力发电增值税政策的通知》 财税〔2015〕74号;0001064019|SXA031900587,0001064019 | SXA031900587 | 资源综合利用产品及劳务增值税即征即退 | 《财政部 国家税务总局关于印发<资源综合利用产品和劳务增值税优惠目录>的通知》 财税〔2015〕78号;0001064020|SXA031900183,0001064020 | SXA031900183 | 供热企业免征增值税优惠 | 《财政部 国家税务总局关于供热企业增值税 房产税 城镇土地使用税优惠政策的通知》 财税〔2016〕94号第一条;0001069902|SXA031900226,0001069902 | SXA031900226 | 合同能源管理项目免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十七）款;0001081501|SXA031900032,0001081501 | SXA031900032 | 被撤销金融机构转让财产免征增值税优惠 | 《财政部 国家税务总局关于被撤销金融机构有关税收政策问题的通知》 财税〔2003〕141号第二条第4款;0001081502|SXA031900132,0001081502 | SXA031900132 | 黄金期货交易免征增值税优惠 | 《财政部 国家税务总局关于黄金期货交易有关税收政策的通知》 财税〔2008〕5号;0001081503|SXA031900381,0001081503 | SXA031900381 | 上海期货保税交割免征增值税优惠 | 《财政部 国家税务总局关于上海期货交易所开展期货保税交割业务有关增值税问题的通知》 财税〔2010〕108号;0001081505|SXA031900596,0001081505 | SXA031900596 | 钻石交易免征增值税优惠 | 《财政部 海关总署 国家税务总局关于调整钻石及上海钻石交易所有关税收政策的通知》 财税〔2006〕65号;0001081506|SXA031900538,0001081506 | SXA031900538 | 原油和铁矿石期货保税交割业务增值税政策 | 《财政部 国家税务总局关于原油和铁矿石期货保税交割业务增值税政策的通知》 财税〔2015〕35号;0001081507|SXA031900800,0001081507 | SXA031900800 | 国债、地方政府债利息收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第3项;0001081508|SXA031900802,0001081508 | SXA031900802 | 外汇管理部门在从事国家外汇储备经营过程中,委托金融机构发放的外汇贷款取得的利息收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第6项;0001081509|SXA031900803,0001081509 | SXA031900803 | 统借统还业务取得的利息收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第7项;0001081510|SXA031900805,0001081510 | SXA031900805 | 被撤销金融机构以货物、不动产、无形资产、有价证券、票据等财产清偿债务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十）款;0001081511|SXA031900808,0001081511 | SXA031900808 | 香港市场投资者（包括单位和个人）通过沪港通买卖上海证券交易所上市A股取得的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十二）款第2项;0001081512|SXA031900809,0001081512 | SXA031900809 | 香港市场投资者（包括单位和个人）通过基金互认买卖内地基金份额取得的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十二）款第3项;0001081513|SXA031900810,0001081513 | SXA031900810 | 证券投资基金（封闭式证券投资基金，开放式证券投资基金）管理人运用基金买卖股票、债券取得的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十二）款第4项;0001081515|SXA031900813,0001081515 | SXA031900813 | 金融同业往来利息收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十三）款;0001081515|SXA031900862,0001081515 | SXA031900862 | 适用财税〔2016〕36号文件规定的金融同业往来利息收入（不含财税〔2016〕46号、财税〔2016〕70号文件规定的免税收入）增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十三）款;0001081517|SXA031900807,0001081517 | SXA031900807 | 合格境外投资者（简称QFII）委托境内公司在我国从事证券买卖业务取得的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十二）款第1项;0001081518|SXA031900812,0001081518 | SXA031900812 | 个人从事金融商品转让业务取得的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十二）款第5项;0001081519|SXA031900835,0001081519 | SXA031900835 | 人民银行对金融机构的贷款的利息收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第4项;0001081520|SXA031900829,0001081520 | SXA031900829 | 黄金期货交易增值税即征即退 | 《财政部 国家税务总局关于黄金期货交易有关税收政策的通知》 财税〔2008〕5号;0001081521|SXA031900859,0001081521 | SXA031900859 | 适用财税〔2016〕46号文件规定的金融同业往来利息收入增值税优惠 | 《财政部 国家税务总局关于进一步明确全面推开营改增试点金融业有关政策的通知》 财税〔2016〕46号第一条;0001081522|SXA031900860,0001081522 | SXA031900860 | 适用财税〔2016〕70号文件规定的金融同业往来利息收入增值税优惠 | 《财政部 国家税务总局关于金融机构同业往来等增值税政策的补充通知》 财税〔2016〕70号第一、二、三条;0001081523|SXA031900866,0001081523 | SXA031900866 | 邮政代理金融收入免征增值税优惠 | 《财政部 国家税务总局关于部分营业税和增值税政策到期延续问题的通知》 财税〔2016〕83号第三条;0001083901|SXA031900256,0001083901 | SXA031900256 | 金融资产管理公司免征增值税优惠 | 《财政部 国家税务总局关于4家资产管理公司接收资本金项下的资产在办理过户时有关税收政策问题的通知》 财税〔2003〕21号第二条;0001083903|SXA031900256,0001083903 | SXA031900256 | 金融资产管理公司免征增值税优惠 | 《财政部 国家税务总局关于中国信达等4家金融资产管理公司税收政策问题的通知》 财税〔2001〕10号;0001083904|SXA031900256,0001083904 | SXA031900256 | 金融资产管理公司免征增值税优惠 | 《财政部 国家税务总局关于中国东方资产管理公司处置港澳国际（集团）有限公司有关资产税收政策问题的通知》 财税〔2003〕212号第二条第4项、第三条第4项、第四条第4项;0001083907|SXA031900497,0001083907 | SXA031900497 | 熊猫普制金币免征增值税优惠 | 《财政部 国家税务总局关于熊猫普制金币免征增值税政策的通知》 财税〔2012〕97号;0001083911|SXA031900256,0001083911 | SXA031900256 | 金融资产管理公司免征增值税优惠 | 《财政部 国家税务总局关于中国信达资产管理股份有限公司等4家金融资产管理公司有关税收政策问题的通知》 财税〔2013〕56号;0001083913|SXA031900806,0001083913 | SXA031900806 | 保险公司开办的一年期以上人身保险产品取得的保费收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十一）款;0001083916|SXA031900536,0001083916 | SXA031900536 | 有形动产融资租赁服务增值税即征即退 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第二条第（二）款;0001091502|SXA031900797,0001091502 | SXA031900797 | 金融机构农户小额贷款取得的利息收入免征增值税优惠 | 《财政部 税务总局关于延续支持农村金融发展有关税收政策的通知》 财税〔2017〕44号第一条;0001091503|SXA031900878,0001091503 | SXA031900878 | 小额贷款公司取得的农户小额贷款利息收入免征增值税优惠 | 《财政部 税务总局关于小额贷款公司有关税收政策的通知》 财税〔2017〕48号第一条;0001092202|SXA031900444,0001092202 | SXA031900444 | 饲料产品免征增值税优惠 | 《财政部 国家税务总局关于饲料产品免征增值税问题的通知》 财税〔2001〕121号;0001092203|SXA031900534,0001092203 | SXA031900534 | 有机肥免征增值税优惠 | 《财政部 国家税务总局关于有机肥产品免征增值税的通知》 财税〔2008〕56号;0001092212|SXA031900444,0001092212 | SXA031900444 | 饲料产品免征增值税优惠 | 《财政部 国家税务总局关于豆粕等粕类产品征免增值税政策的通知》 财税〔2001〕30号;0001092301|SXA031900345,0001092301 | SXA031900345 | 农业生产资料免征增值税优惠 | 《财政部 国家税务总局关于不带动力的手扶拖拉机和三轮农用运输车增值税政策的通知》 财税〔2002〕89号;0001092303|SXA031900333,0001092303 | SXA031900333 | 农村电网维护费免征增值税优惠 | 《财政部 国家税务总局关于免征农村电网维护费增值税问题的通知》 财税字〔1998〕47号;0001092311|SXA031900343,0001092311 | SXA031900343 | 农民专业合作社免征增值税优惠 | 《财政部 国家税务总局关于农民专业合作社有关税收政策的通知》 财税〔2008〕81号第一、二、三条;0001092312|SXA031900345,0001092312 | SXA031900345 | 农业生产资料免征增值税优惠 | 《财政部 国家税务总局关于农业生产资料征免增值税政策的通知》 财税〔2001〕113号;0001092313|SXA031900793,0001092313 | SXA031900793 | 农业机耕、排灌、病虫害防治、植物保护、农牧保险以及相关技术培训业务，家禽、牲畜、水生动物的配种和疾病防治免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十）款;0001092314|SXA031900337,0001092314 | SXA031900337 | 农村饮水安全工程免征增值税优惠 | 《财政部 国家税务总局关于继续实行农村饮水安全工程建设运营税收优惠政策的通知》 财税〔2016〕19号第四条;0001099901|SXA031900069,0001099901 | SXA031900069 | 滴灌带和滴灌管产品免征增值税优惠 | 《财政部 国家税务总局关于免征滴灌带和滴灌管产品增值税的通知》 财税〔2007〕83号;0001099903|SXA031900824,0001099903 | SXA031900824 | 将土地使用权转让给农业生产者用于农业生产免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十五）款;0001101401|SXA031900451,0001101401 | SXA031900451 | 特殊教育校办企业增值税优惠 | 《财政部 国家税务总局关于教育税收政策的通知》 财税〔2004〕39号第一条第7项;0001101402|SXA031900791,0001101402 | SXA031900791 | 从事学历教育的学校提供的教育服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（八）款;0001101403|SXA031900792,0001101403 | SXA031900792 | 学生勤工俭学提供的服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（九）款;0001101404|SXA031900799,0001101404 | SXA031900799 | 国家助学贷款取得的利息收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十九）款第2项;0001101405|SXA031900818,0001101405 | SXA031900818 | 政府举办的从事学历教育的高等、中等和初等学校（不含下属单位），举办进修班、培训班取得的全部归该学校所有的收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十九）款;0001101406|SXA031900819,0001101406 | SXA031900819 | 政府举办的职业学校设立的企业从事“现代服务”、“生活服务”业务活动取得的收入免征增值税免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十）款;0001101407|SXA031900864,0001101407 | SXA031900864 | 高校学生食堂餐饮服务收入免征增值税,高校学生公寓住宿费收入免征增值税 | 《财政部 国家税务总局关于继续执行高校学生公寓和食堂有关税收政策的通知》 财税〔2016〕82号第二、三条;0001102902|SXA031900884,0001102902 | SXA031900884 | 对北京冬奥组委、北京冬奥会测试赛赛事组委会取得的分成收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（一）款;0001102903|SXA031900885,0001102903 | SXA031900885 | 对北京冬奥组委、北京冬奥会测试赛赛事组委会取得的赞助收入、特许权收入、销售门票收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（二）款;0001102904|SXA031900886,0001102904 | SXA031900886 | 对北京冬奥组委、北京冬奥会测试赛赛事组委会取得的发行纪念邮票、纪念币收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（三）款;0001102905|SXA031900887,0001102905 | SXA031900887 | 对北京冬奥组委、北京冬奥会测试赛赛事组委会取得的媒体收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（四）款;0001102906|SXA031900888,0001102906 | SXA031900888 | 对北京冬奥组委、北京冬奥会测试赛赛事组委会向分支机构划拨所获赞助物资免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（八）款;0001102907|SXA031900889,0001102907 | SXA031900889 | 对北京冬奥组委、北京冬奥会测试赛赛事组委会赛后再销售物品和出让资产收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（八）款;0001102908|SXA031900890,0001102908 | SXA031900890 | 对北京冬奥组委、北京冬奥会测试赛赛事组委会取得的餐饮服务、住宿、租赁、介绍服务和收费卡收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第一条第（十四）款;0001102909|SXA031900899,0001102909 | SXA031900899 | 对国际奥委会取得的收入免征增值税（除转播权收入） | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（一）款;0001102910|SXA031900900,0001102910 | SXA031900900 | 对国际奥委会取得的转播权收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（三）款;0001102911|SXA031900904,0001102911 | SXA031900904 | 对中国奥委会取得的由北京冬奥组委支付的收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（四）款;0001102912|SXA031900908,0001102912 | SXA031900908 | 对国际残奥委会取得的与北京2022年冬残奥会有关的收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（五）款;0001102913|SXA031900912,0001102913 | SXA031900912 | 对中国残奥委会取得的由北京冬奥组委分期支付的收入免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第二条第（六）款;0001102914|SXA031900916,0001102914 | SXA031900916 | 企业根据赞助协议向北京冬奥组委免费提供的服务免征增值税（免税清单由北京冬奥组委报财政部、税务总局确定） | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第三条第（二）款;0001102915|SXA031900917,0001102915 | SXA031900917 | 免征参与者向北京冬奥组委无偿提供服务和无偿转让无形资产的增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第三条第（九）款;0001102916|SXA031900918,0001102916 | SXA031900918 | 对外籍技术官员取得的由北京冬奥组委、测试赛赛事组委会支付的劳务报酬免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第三条第（五）款;0001102917|SXA031900919,0001102917 | SXA031900919 | 对中方技术官员取得的由北京冬奥组委、测试赛赛事组委会支付的劳务报酬免征增值税 | 《财政部 税务总局 海关总署关于北京2022年冬奥会和冬残奥会税收政策的通知》 财税〔2017〕60号第三条第（六）款;0001103203|SXA031900261,0001103203 | SXA031900261 | 进口图书、报刊资料免征增值税优惠 | 《财政部 国家税务总局关于北京中科进出口公司销售给高等学校科研单位和北京图书馆的进口图书报刊资料免征增值税问题的通知》 财税字〔1998〕69号;0001103207|SXA031900261,0001103207 | SXA031900261 | 进口图书、报刊资料免征增值税优惠 | 《财政部 国家税务总局关于中国国际图书贸易总公司销售给高等学校教育科研单位和北京图书馆的进口图书报刊资料免征增值税问题的通知》 财税字〔1998〕68号;0001103208|SXA031900261,0001103208 | SXA031900261 | 进口图书、报刊资料免征增值税优惠 | 《财政部 国家税务总局关于中国教育图书进出口公司销售给高等学校教育科研单位和北京图书馆的进口图书报刊资料免征增值税问题的通知》 财税字〔1998〕67号;0001103209|SXA031900261,0001103209 | SXA031900261 | 进口图书、报刊资料免征增值税优惠 | 《财政部 国家税务总局关于中国经济图书进出口公司中国出版对外贸易总公司销售给大专院校和科研单位的进口书刊资料免征增值税的通知》 财税字〔1999〕255号;0001103210|SXA031900261,0001103210 | SXA031900261 | 进口图书、报刊资料免征增值税优惠 | 《财政部 国家税务总局关于中国科技资料进出口总公司销售进口图书享受免征国内销售环节增值税政策的通知》 财税〔2004〕69号;0001103211|SXA031900261,0001103211 | SXA031900261 | 进口图书、报刊资料免征增值税优惠 | 《财政部 国家税务总局关于中国图书进出口总公司销售给科研教学单位的进口书刊资料免征增值税问题的通知》 财税字〔1997〕66号;0001103215|SXA031900480,0001103215 | SXA031900480 | 文化事业单位转制免征增值税优惠 | 《财政部 国家税务总局 中宣部关于下发红旗出版社有限责任公司等中央所属转制文化企业名单的通知》 财税〔2011〕3号;0001103216|SXA031900480,0001103216 | SXA031900480 | 文化事业单位转制免征增值税优惠 | 《财政部 国家税务总局 中宣部关于下发人民网股份有限公司等81家中央所属转制文化企业名单的通知》 财税〔2011〕27号;0001103217|SXA031900480,0001103217 | SXA031900480 | 文化事业单位转制免征增值税优惠 | 《财政部 国家税务总局 中宣部关于下发世界知识出版社等35家中央所属转制文化企业名单的通知》 财税〔2011〕120号;0001103220|SXA031900466,0001103220 | SXA031900466 | 图书批发、零售环节免征增值税优惠 | 《财政部 国家税务总局关于延续宣传文化增值税和营业税优惠政策的通知》 财税〔2013〕87号第二条;0001103224|SXA031900083,0001103224 | SXA031900083 | 电影产业免征增值税优惠 | 《财政部 海关总署 国家税务总局关于继续实施支持文化企业发展若干税收政策的通知》 财税〔2014〕85号第一条;0001103225|SXA031900582,0001103225 | SXA031900582 | 转制文化企业免征增值税优惠 | 《财政部 国家税务总局 中宣部关于继续实施文化体制改革中经营性文化事业单位转制为企业若干税收政策的通知》 财税〔2014〕84号第一条第（三）（四）项;0001103227|SXA031900794,0001103227 | SXA031900794 | 纪念馆、博物馆、文化馆、文物保护单位管理机构、美术馆、展览馆、书画院、图书馆在自己的场所提供文化体育服务取得的第一道门票收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十一）款;0001103228|SXA031900795,0001103228 | SXA031900795 | 寺院、宫观、清真寺和教堂举办文化、宗教活动的门票收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十二）款;0001103229|SXA031900817,0001103229 | SXA031900817 | 科普单位的门票收入，以及县级及以上党政部门和科协开展科普活动的门票收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十八）款;0001103230|SXA031900725,0001103230 | SXA031900725 | 个人转让著作权免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十四）款;0001103231|SXA031900535,0001103231 | SXA031900535 | 有线电视基本收视费免征增值税优惠 | 《财政部 国家税务总局关于继续执行有线电视收视费增值税政策的通知》 财税〔2017〕35号;0001120706|SXA031900822,0001120706 | SXA031900822 | 军队空余房产租赁收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十三）款;0001121301|SXA031900462,0001121301 | SXA031900462 | 铁路货车修理免征增值税优惠 | 《财政部 国家税务总局关于铁路货车修理免征增值税的通知》 财税〔2001〕54号;0001121310|SXA031900198,0001121310 | SXA031900198 | 国际货物运输代理服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十八）款;0001121311|SXA031900191,0001121311 | SXA031900191 | 管道运输服务增值税即征即退 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第二条第（一）款;0001122601|SXA031900815,0001122601 | SXA031900815 | 国家商品储备管理单位及其直属企业承担商品储备任务，从中央或者地方财政取得的利息补贴收入和价差补贴收入免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（二十五）款;0001123406|SXA031900790,0001123406 | SXA031900790 | 医疗机构提供的医疗服务免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（七）款;0001123407|SXA031900287,0001123407 | SXA031900287 | 抗艾滋病药品免征增值税优惠 | 《财政部 国家税务总局关于延续免征国产抗艾滋病病毒药品增值税政策的通知》 财税〔2016〕97号;0001124302|SXA031900482,0001124302 | SXA031900482 | 无偿援助项目免征增值税优惠 | 《财政部 国家税务总局外经贸部关于外国政府和国际组织无偿援助项目在华采购物资免征增值税问题的通知》 财税〔2002〕2号;0001129907|SXA031900234,0001129907 | SXA031900234 | 黄金交易免征增值税优惠 | 《财政部 国家税务总局关于黄金税收政策问题的通知》 财税〔2002〕142号第一、二条;0001129911|SXA031900347,0001129911 | SXA031900347 | 拍卖货物免征增值税优惠 | 《国家税务总局关于拍卖行取得的拍卖收入征收增值税、营业税有关问题的通知》 国税发〔1999〕40号第一条;0001129916|SXA031900234,0001129916 | SXA031900234 | 黄金交易免征增值税优惠 | 《财政部 国家税务总局 中国人民银行关于配售出口黄金有关税收规定的通知》 财税〔2000〕3号第二条;0001129927|SXA031900826,0001129927 | SXA031900826 | 土地所有者出让土地使用权和土地使用者将土地使用权归还给土地所有者免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十七）款;0001129928|SXA031900827,0001129928 | SXA031900827 | 县级以上地方人民政府或自然资源行政主管部门出让、转让或收回自然资源使用权（不含土地使用权）免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（三十八）款;0001129931|SXA031900833,0001129931 | SXA031900833 | 行政单位之外的其他单位收取的符合条件的政府性基金和行政事业性收费免征增值税优惠 | 《财政部 国家税务总局关于全面推开营业税改征增值税试点的通知》 财税〔2016〕36号附件3第一条第（十三）款;0001129999|SXA031900727,0001129999 | SXA031900727 | 军队用粮免征增值税优惠 | 其他;0001129999|SXA031900830,0001129999 | SXA031900830 | 残疾人员本人为社会提供的服务免征增值税优惠 | 其他;0001129999|SXA031900191,0001129999 | SXA031900191 | 管道运输服务增值税即征即退 | 其他;0001129999|SXA031900722,0001129999 | SXA031900722 | 自产农产品免征增值税优惠 | 其他;0001129999|SXA031999999,0001129999 | SXA031999999 | 其他 | 其他;0001129999|SXA031900725,0001129999 | SXA031900725 | 个人转让著作权免征增值税优惠 | 其他;0001129999|SXA031900726,0001129999 | SXA031900726 | 军队、军工系统部分货物免征增值税优惠 | 其他;0001129999|SXA031900728,0001129999 | SXA031900728 | 血站免征增值税优惠 | 其他;0001129999|SXA031900731,0001129999 | SXA031900731 | 公安、司法免征增值税优惠 | 其他;0001129999|SXA031900724,0001129999 | SXA031900724 | 古旧图书免征增值税优惠 | 其他;0001129999|SXA031900732,0001129999 | SXA031900732 | 避孕药品和用具免征增值税优惠 | 其他;0001129999|SXA031900729,0001129999 | SXA031900729 | 医疗卫生机构免征增值税优惠 | 其他" value='0001012707|SXA031900044' _dv="report1_A15_dv()" onclick="_displayEditor()" class="report1_3">0001012707|SXA031900044</td>
<script language=javascript>
    function report1_A15_dv() {
        if (!(_xxf("D15") != 0 || _xxf("E15") != 0 || _xxf("G15") != 0 || _xxf("H15") ? checkNull(_xxs("A15").toString()) : 0 == 0)) {
            try { report1_markInvalidCell(_xxid('G15') + "," + _xxid('H15') + "," + _xxid('D15') + "," + _xxid('E15') + "," + _xxid('A15')); } catch (e) { }
            alert('“二、免税项目”栏的第1列至第5列相关行次填写有数值的情况下必须选择本行的“免税性质代码及名称”。');
            return false;
        }
        return true;
    }
</script>
		<td id="report1_C18" colNo=3 sc="C15" value='5' flow='groupMaxNumber()' onclick="_hideEditor()" class="report1_3">5</td>
		<td id="report1_D18" colNo=4 sc="D15" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="0.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_E18" colNo=5 sc="E15" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="0.00" digits="2" onclick="_displayEditor()" class="report1_1">0.00</td>
		<td id="report1_F18" colNo=6 sc="F15" value='0.0' format="0.00" digits="2" calc='(_xxf("D15")-_xxf("E15")).toFixed(2)' onclick="_hideEditor()" class="report1_15">0.00</td>
		<td id="report1_G18" colNo=7 sc="G15" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="0.00" digits="2" dataValid="report1_G15_valid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
    function report1_G15_valid() {
        if (!(_xxf("F15") >= _xxf("G15"))) {
            try { report1_markInvalidCell(_xxid('G15') + "," + _xxid('F15')); } catch (e) { }
            alert('“本期实际抵减税额”应该小于等于“本期应抵减税额”');
            return false;
        }
        return true;
    }
</script>
		<td id="report1_H18" colNo=8 sc="H15" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="0.00" digits="2" dataValid="report1_H15_valid()" onclick="_displayEditor()" class="report1_1">0.00</td>
<script language=javascript>
    function report1_H15_valid() {
        if (!(_xxf("H15") >= 0)) {
            try { report1_markInvalidCell(_xxid('H15')); } catch (e) { }
            alert('“免税项目免税额”应该大于等于0');
            return false;
        }
        return true;
    }
</script>
		<td id="report1_I18" colNo=9 bkj="true" sc="I15" value='' onclick="_hideEditor()" class="report1_14" style="display:none;"></td>
	</tr>--%>
	<tr rn="16" id=report1_row16 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=8 id="report1_A16" colNo=1 sc="A16" value='' onclick="_hideEditor()" class="report1_9"></td>
		<td id="report1_I16" colNo=9 bkj="true" sc="I16" value='msxm-end' onclick="_hideEditor()" class="report1_9" style="display:none;"></td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	try{
		var init_report1 = function(){ _initSelectACell( document.getElementById( "report1" ) );}
		window.attachEvent( "onload", init_report1 );
	} catch (e) { }

	function report1_checkValid() {
	    return true;
	}
</script>
</div>
</td></tr></table>
<div style="display:none"><form id="report1_submitForm" method=post action="/WSSBSL/reportServlet.aspx?action=11" target="submitFrame">
	<input type=hidden name=fileName value="/zzs2013Ybnsr/zzsJmssbMxb.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_41510">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showReport.jsp?raq=%2Fzzs2013Ybnsr%2FzzsJmssbMxb.raq&nsrsbh=450100399111430&sbzt=0&skssq=20171111&ssqq=2017-11-01&ssqz=2017-11-30&isTbBz=0&reportParamsId=15123563589443392140648">
	<input type=hidden name=backAndRefresh value="/reportJsp/success.jsp">
	<input type=hidden name=promptAfterSave value="no">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_ZZS_JMSSBMXB;xmlName=zzs2013/zzsJmssbMxb;sbzt=0;ssqq=2017-11-01;skssq=20171111;nsrsbh=450100399111430;dynamicBz=Y;raq=/zzs2013Ybnsr/zzsJmssbMxb.raq;ssqz=2017-11-30;isTbBz=0">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/zzs2013Ybnsr/zzsJmssbMxb.raq&srcType=file&cachedId=10_1_1_176_8080_41510&isScroll=0&backAndRefresh=/reportJsp/success.jsp&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_ZZS_JMSSBMXB%3BxmlName%3Dzzs2013%2FzzsJmssbMxb%3Bsbzt%3D0%3Bssqq%3D2017-11-01%3Bskssq%3D20171111%3Bnsrsbh%3D450100399111430%3BdynamicBz%3DY%3Braq%3D%2Fzzs2013Ybnsr%2FzzsJmssbMxb.raq%3Bssqz%3D2017-11-30%3BisTbBz%3D0&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
		address += "&isLi=1";
		var tbl = document.getElementById( 'report1' );
		if( tbl.currCell==null || !tbl.currCell.parentElement.getAttribute( 'isDetail' ) ) {
			alert( '当前单元格不在扩展区，不能导入！' ); return; }
		var importInfo = _getImportInfo( tbl );
		if( importInfo == null ) return;
		address += "&header=" + importInfo[0] + "&footer=" + importInfo[1] + "&drows=" + importInfo[2] + "&footStart=" + importInfo[3];
		rq_showPopWin( address, 400, 180, null );
	}
</script>
<script language=javascript>
	function report1_save() {
		_submitRowInput( document.getElementById( "report1" ) );
	}
</script>
</div>

	</td>
	</tr>
</table>
</body>
</html>

