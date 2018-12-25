<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_sb_ndsds_2014_tbbd.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_sb_ndsds_2014_tbbd" %>










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
	var report1_cachedId = "10_1_1_176_8080_74726";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2FndsdsA%2Fsb_ndsds_2014_tbbd.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15115066322569060172189&cachedId=10_1_1_176_8080_74726&t_i_m_e=1511506632288" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2FndsdsA%2Fsb_ndsds_2014_tbbd.raq&columns=0&srcType=file&reportParamsId=15115066322569060172189&cachedId=10_1_1_176_8080_74726&t_i_m_e=1511506632288" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2FndsdsA%2Fsb_ndsds_2014_tbbd.raq&columns=0&srcType=file&reportParamsId=15115066322569060172189&cachedId=10_1_1_176_8080_74726&t_i_m_e=1511506632288";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2FndsdsA%2Fsb_ndsds_2014_tbbd.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15115066322569060172189&cachedId=10_1_1_176_8080_74726&t_i_m_e=1511506632288";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2FndsdsA%2Fsb_ndsds_2014_tbbd.raq&srcType=file&reportParamsId=15115066322569060172189&cachedId=10_1_1_176_8080_74726&t_i_m_e=1511506632288" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_tbbd.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15115066322569060172189&cachedId=10_1_1_176_8080_74726&t_i_m_e=1511506632288";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_tbbd.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15115066322569060172189&cachedId=10_1_1_176_8080_74726&t_i_m_e=1511506632288";
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
	.report1_1 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_9 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_11 { text-align:center;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:24px;}
	.report1_12 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1488711out()" onmouseover="report1488711over()" rowCount=56 cols=6 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:677px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:60px;"></col>
		<col style="width:480px;"></col>
		<col style="width:70px;"></col>
		<col style="width:67px;"></col>
	</colgroup>
	<tr rn="1" height=35 style="height:35px;">
		<td colSpan=4 id="report1_A1" colNo=1 value='10014517000015884336' onclick="_hideEditor()" class="report1_11">企业所得税年度纳税申报表填报表单</td>
		<td id="report1_E1" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_9" style="display:none;"></td>
		<td id="report1_F1" colNo=6 value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_3" style="display:none;">91450107MA5KE0EQ2B</td>
	</tr>
	<tr rn="2" height=15 style="height:15px;">
		<td rowSpan=2 id="report1_A2" colNo=1 value='表单编号' onclick="_hideEditor()" class="report1_10">表单编号</td>
		<td rowSpan=2 id="report1_B2" colNo=2 value='表单名称' onclick="_hideEditor()" class="report1_10">表单名称</td>
		<td colSpan=2 id="report1_C2" colNo=3 value='选择填报情况' onclick="_hideEditor()" class="report1_1">选择填报情况</td>
		<td id="report1_E2" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F2" colNo=6 value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_3" style="display:none;">广西龙森胜贸易有限公司</td>
	</tr>
	<tr rn="3" height=15 style="height:15px;">
		<td id="report1_C3" colNo=3 value='填 报' onclick="_hideEditor()" class="report1_1">填&nbsp;报</td>
		<td id="report1_D3" colNo=4 value='不填报' onclick="_hideEditor()" class="report1_1">不填报</td>
		<td id="report1_E3" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F3" colNo=6 value='2016-01-01' onclick="_hideEditor()" class="report1_3" style="display:none;">2016-01-01</td>
	</tr>
	<tr rn="4" height=20 style="height:20px;">
		<td id="report1_A4" colNo=1 value='A000000' onclick="_hideEditor()" class="report1_1">A000000</td>
		<td id="report1_B4" colNo=2 value='企业基础信息表' onclick="_hideEditor()" class="report1_6">企业基础信息表</td>
		<td id="report1_C4" colNo=3 value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C4' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C4'));}catch(e){}" checked disabled></td>
		<td id="report1_D4" colNo=4 value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D4' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D4'));}catch(e){}" disabled></td>
		<td id="report1_E4" colNo=5 bkj="true" value='Y' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F4" colNo=6 value='2016-12-31' onclick="_hideEditor()" class="report1_3" style="display:none;">2016-12-31</td>
	</tr>
	<tr rn="5" height=20 style="height:20px;">
		<td id="report1_A5" colNo=1 value='A100000' onclick="_hideEditor()" class="report1_1">A100000</td>
		<td id="report1_B5" colNo=2 value='中华人民共和国企业所得税年度纳税申报表（A类）' onclick="_hideEditor()" class="report1_6">中华人民共和国企业所得税年度纳税申报表（A类）</td>
		<td id="report1_C5" colNo=3 value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C5' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C5'));}catch(e){}" checked disabled></td>
		<td id="report1_D5" colNo=4 value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D5' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D5'));}catch(e){}" disabled></td>
		<td id="report1_E5" colNo=5 bkj="true" value='Y' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F5" colNo=6 value='2017-05-08' onclick="_hideEditor()" class="report1_3" style="display:none;">2017-05-08</td>
	</tr>
	<tr rn="6" height=20 style="height:20px;">
		<td id="report1_A6" colNo=1 value='A101010' onclick="_hideEditor()" class="report1_1">A101010</td>
		<td id="report1_B6" colNo=2 value='    一般企业收入明细表' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;一般企业收入明细表</td>
		<td id="report1_C6" colNo=3 value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C6' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C6'));}catch(e){}" checked disabled></td>
		<td id="report1_D6" colNo=4 value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D6' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D6'));}catch(e){}" disabled></td>
		<td id="report1_E6" colNo=5 bkj="true" value='Y' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F6" colNo=6 value='0,1' onclick="_hideEditor()" class="report1_3" style="display:none;">0,1</td>
	</tr>
	<tr rn="7" height=20 style="height:20px;">
		<td id="report1_A7" colNo=1 value='A101020' onclick="_hideEditor()" class="report1_1">A101020</td>
		<td id="report1_B7" colNo=2 value='    金融企业收入明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;金融企业收入明细表</td>
		<td id="report1_C7" colNo=3 value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C7' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C7'));}catch(e){}" disabled></td>
		<td id="report1_D7" colNo=4 value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D7' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D7'));}catch(e){}" checked disabled></td>
		<td id="report1_E7" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F7" colNo=6 value='0,1' onclick="_hideEditor()" class="report1_3" style="display:none;">0,1</td>
	</tr>
	<tr rn="8" height=20 style="height:20px;">
		<td id="report1_A8" colNo=1 value='A102010' onclick="_hideEditor()" class="report1_1">A102010</td>
		<td id="report1_B8" colNo=2 value='    一般企业成本支出明细表' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;一般企业成本支出明细表</td>
		<td id="report1_C8" colNo=3 value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C8' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C8'));}catch(e){}" checked disabled></td>
		<td id="report1_D8" colNo=4 value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D8' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D8'));}catch(e){}" disabled></td>
		<td id="report1_E8" colNo=5 bkj="true" value='Y' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F8" colNo=6 value='0,1' onclick="_hideEditor()" class="report1_3" style="display:none;">0,1</td>
	</tr>
	<tr rn="9" height=20 style="height:20px;">
		<td id="report1_A9" colNo=1 value='A102020' onclick="_hideEditor()" class="report1_1">A102020</td>
		<td id="report1_B9" colNo=2 value='    金融企业支出明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;金融企业支出明细表</td>
		<td id="report1_C9" colNo=3 value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C9' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C9'));}catch(e){}" disabled></td>
		<td id="report1_D9" colNo=4 value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D9' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D9'));}catch(e){}" checked disabled></td>
		<td id="report1_E9" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F9" colNo=6 value='0,1' onclick="_hideEditor()" class="report1_3" style="display:none;">0,1</td>
	</tr>
	<tr rn="10" height=20 style="height:20px;">
		<td id="report1_A10" colNo=1 value='A103000' onclick="_hideEditor()" class="report1_1">A103000</td>
		<td id="report1_B10" colNo=2 value='    事业单位、民间非营利组织收入、支出明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;事业单位、民间非营利组织收入、支出明细表</td>
		<td id="report1_C10" colNo=3 value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C10' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C10'));}catch(e){}" disabled></td>
		<td id="report1_D10" colNo=4 value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D10' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D10'));}catch(e){}" checked disabled></td>
		<td id="report1_E10" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F10" colNo=6 value='0,1' onclick="_hideEditor()" class="report1_3" style="display:none;">0,1</td>
	</tr>
	<tr rn="11" height=20 style="height:20px;">
		<td id="report1_A11" colNo=1 value='A104000' onclick="_hideEditor()" class="report1_1">A104000</td>
		<td id="report1_B11" colNo=2 value='    期间费用明细表' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;期间费用明细表</td>
		<td id="report1_C11" colNo=3 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C11' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C11'));}catch(e){}" checked></td>
		<td id="report1_D11" colNo=4 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D11' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D11'));}catch(e){}"></td>
		<td id="report1_E11" colNo=5 bkj="true" value='Y' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F11" colNo=6 value='0,1' onclick="_hideEditor()" class="report1_3" style="display:none;">0,1</td>
	</tr>
	<tr rn="12" height=20 style="height:20px;">
		<td id="report1_A12" colNo=1 value='A105000' onclick="_hideEditor()" class="report1_1">A105000</td>
		<td id="report1_B12" colNo=2 value='    纳税调整项目明细表' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;纳税调整项目明细表</td>
		<td id="report1_C12" colNo=3 value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C12' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C12'));}catch(e){}" checked disabled></td>
		<td id="report1_D12" colNo=4 value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D12' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D12'));}catch(e){}" disabled></td>
		<td id="report1_E12" colNo=5 bkj="true" value='Y' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F12" colNo=6 value='0,0' onclick="_hideEditor()" class="report1_3" style="display:none;">0,0</td>
	</tr>
	<tr rn="13" height=20 style="height:20px;">
		<td id="report1_A13" colNo=1 value='A105010' onclick="_hideEditor()" class="report1_1">A105010</td>
		<td id="report1_B13" colNo=2 value='        视同销售和房地产开发企业特定业务纳税调整明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;视同销售和房地产开发企业特定业务纳税调整明细表</td>
		<td id="report1_C13" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C13' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C13'));}catch(e){}"></td>
		<td id="report1_D13" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D13' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D13'));}catch(e){}" checked></td>
		<td id="report1_E13" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F13" colNo=6 value='12,1' onclick="_hideEditor()" class="report1_3" style="display:none;">12,1</td>
	</tr>
	<tr rn="14" height=20 style="height:20px;">
		<td id="report1_A14" colNo=1 value='A105020' onclick="_hideEditor()" class="report1_1">A105020</td>
		<td id="report1_B14" colNo=2 value='        未按权责发生制确认收入纳税调整明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;未按权责发生制确认收入纳税调整明细表</td>
		<td id="report1_C14" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C14' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C14'));}catch(e){}"></td>
		<td id="report1_D14" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D14' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D14'));}catch(e){}" checked></td>
		<td id="report1_E14" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F14" colNo=6 value='12,1' onclick="_hideEditor()" class="report1_3" style="display:none;">12,1</td>
	</tr>
	<tr rn="15" height=20 style="height:20px;">
		<td id="report1_A15" colNo=1 value='A105030' onclick="_hideEditor()" class="report1_1">A105030</td>
		<td id="report1_B15" colNo=2 value='        投资收益纳税调整明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投资收益纳税调整明细表</td>
		<td id="report1_C15" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C15' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C15'));}catch(e){}"></td>
		<td id="report1_D15" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D15' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D15'));}catch(e){}" checked></td>
		<td id="report1_E15" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F15" colNo=6 value='12,1' onclick="_hideEditor()" class="report1_3" style="display:none;">12,1</td>
	</tr>
	<tr rn="16" height=20 style="height:20px;">
		<td id="report1_A16" colNo=1 value='A105040' onclick="_hideEditor()" class="report1_1">A105040</td>
		<td id="report1_B16" colNo=2 value='        专项用途财政性资金纳税调整明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专项用途财政性资金纳税调整明细表</td>
		<td id="report1_C16" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C16' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C16'));}catch(e){}"></td>
		<td id="report1_D16" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D16' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D16'));}catch(e){}" checked></td>
		<td id="report1_E16" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F16" colNo=6 value='12,1' onclick="_hideEditor()" class="report1_3" style="display:none;">12,1</td>
	</tr>
	<tr rn="17" height=20 style="height:20px;">
		<td id="report1_A17" colNo=1 value='A105050' onclick="_hideEditor()" class="report1_1">A105050</td>
		<td id="report1_B17" colNo=2 value='        职工薪酬纳税调整明细表' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;职工薪酬纳税调整明细表</td>
		<td id="report1_C17" colNo=3 value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C17' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C17'));}catch(e){}" checked disabled></td>
		<td id="report1_D17" colNo=4 value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D17' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D17'));}catch(e){}" disabled></td>
		<td id="report1_E17" colNo=5 bkj="true" value='Y' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F17" colNo=6 value='12,1' onclick="_hideEditor()" class="report1_3" style="display:none;">12,1</td>
	</tr>
	<tr rn="18" height=20 style="height:20px;">
		<td id="report1_A18" colNo=1 value='A105060' onclick="_hideEditor()" class="report1_1">A105060</td>
		<td id="report1_B18" colNo=2 value='        广告费和业务宣传费跨年度纳税调整明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;广告费和业务宣传费跨年度纳税调整明细表</td>
		<td id="report1_C18" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C18' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C18'));}catch(e){}"></td>
		<td id="report1_D18" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D18' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D18'));}catch(e){}" checked></td>
		<td id="report1_E18" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F18" colNo=6 value='12,1' onclick="_hideEditor()" class="report1_3" style="display:none;">12,1</td>
	</tr>
	<tr rn="19" height=20 style="height:20px;">
		<td id="report1_A19" colNo=1 value='A105070' onclick="_hideEditor()" class="report1_1">A105070</td>
		<td id="report1_B19" colNo=2 value='        捐赠支出纳税调整明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;捐赠支出纳税调整明细表</td>
		<td id="report1_C19" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C19' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C19'));}catch(e){}"></td>
		<td id="report1_D19" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D19' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D19'));}catch(e){}" checked></td>
		<td id="report1_E19" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F19" colNo=6 value='12,1' onclick="_hideEditor()" class="report1_3" style="display:none;">12,1</td>
	</tr>
	<tr rn="20" height=20 style="height:20px;">
		<td id="report1_A20" colNo=1 value='A105080' onclick="_hideEditor()" class="report1_1">A105080</td>
		<td id="report1_B20" colNo=2 value='        资产折旧、摊销情况及纳税调整明细表' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资产折旧、摊销情况及纳税调整明细表</td>
		<td id="report1_C20" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C20' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C20'));}catch(e){}"></td>
		<td id="report1_D20" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D20' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D20'));}catch(e){}" checked></td>
		<td id="report1_E20" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F20" colNo=6 value='12,0' onclick="_hideEditor()" class="report1_3" style="display:none;">12,0</td>
	</tr>
	<tr rn="21" height=20 style="height:20px;">
		<td id="report1_A21" colNo=1 value='A105081' onclick="_hideEditor()" class="report1_1">A105081</td>
		<td id="report1_B21" colNo=2 value='            固定资产加速折旧、扣除明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;固定资产加速折旧、扣除明细表</td>
		<td id="report1_C21" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C21' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C21'));}catch(e){}"></td>
		<td id="report1_D21" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D21' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D21'));}catch(e){}" checked></td>
		<td id="report1_E21" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F21" colNo=6 value='20,1' onclick="_hideEditor()" class="report1_3" style="display:none;">20,1</td>
	</tr>
	<tr rn="22" height=20 style="height:20px;">
		<td id="report1_A22" colNo=1 value='A105090' onclick="_hideEditor()" class="report1_1">A105090</td>
		<td id="report1_B22" colNo=2 value='        资产损失税前扣除及纳税调整明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资产损失税前扣除及纳税调整明细表</td>
		<td id="report1_C22" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C22' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C22'));}catch(e){}"></td>
		<td id="report1_D22" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D22' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D22'));}catch(e){}" checked></td>
		<td id="report1_E22" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F22" colNo=6 value='12,0' onclick="_hideEditor()" class="report1_3" style="display:none;">12,0</td>
	</tr>
	<tr rn="23" height=20 style="height:20px;">
		<td id="report1_A23" colNo=1 value='A105091' onclick="_hideEditor()" class="report1_1">A105091</td>
		<td id="report1_B23" colNo=2 value='            资产损失（专项申报）税前扣除及纳税调整明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资产损失（专项申报）税前扣除及纳税调整明细表</td>
		<td id="report1_C23" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C23' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C23'));}catch(e){}"></td>
		<td id="report1_D23" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D23' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D23'));}catch(e){}" checked></td>
		<td id="report1_E23" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F23" colNo=6 value='22,1' onclick="_hideEditor()" class="report1_3" style="display:none;">22,1</td>
	</tr>
	<tr rn="24" height=20 style="height:20px;">
		<td id="report1_A24" colNo=1 value='A105100' onclick="_hideEditor()" class="report1_1">A105100</td>
		<td id="report1_B24" colNo=2 value='        企业重组纳税调整明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;企业重组纳税调整明细表</td>
		<td id="report1_C24" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C24' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C24'));}catch(e){}"></td>
		<td id="report1_D24" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D24' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D24'));}catch(e){}" checked></td>
		<td id="report1_E24" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F24" colNo=6 value='12,1' onclick="_hideEditor()" class="report1_3" style="display:none;">12,1</td>
	</tr>
	<tr rn="25" height=20 style="height:20px;">
		<td id="report1_A25" colNo=1 value='A105110' onclick="_hideEditor()" class="report1_1">A105110</td>
		<td id="report1_B25" colNo=2 value='        政策性搬迁纳税调整明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;政策性搬迁纳税调整明细表</td>
		<td id="report1_C25" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C25' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C25'));}catch(e){}"></td>
		<td id="report1_D25" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D25' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D25'));}catch(e){}" checked></td>
		<td id="report1_E25" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F25" colNo=6 value='12,1' onclick="_hideEditor()" class="report1_3" style="display:none;">12,1</td>
	</tr>
	<tr rn="26" height=20 style="height:20px;">
		<td id="report1_A26" colNo=1 value='A105120' onclick="_hideEditor()" class="report1_1">A105120</td>
		<td id="report1_B26" colNo=2 value='        特殊行业准备金纳税调整明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特殊行业准备金纳税调整明细表</td>
		<td id="report1_C26" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C26' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C26'));}catch(e){}"></td>
		<td id="report1_D26" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D26' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D26'));}catch(e){}" checked></td>
		<td id="report1_E26" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F26" colNo=6 value='12,1' onclick="_hideEditor()" class="report1_3" style="display:none;">12,1</td>
	</tr>
	<tr rn="27" height=20 style="height:20px;">
		<td id="report1_A27" colNo=1 value='A106000' onclick="_hideEditor()" class="report1_1">A106000</td>
		<td id="report1_B27" colNo=2 value='    企业所得税弥补亏损明细表' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;企业所得税弥补亏损明细表</td>
		<td id="report1_C27" colNo=3 value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C27' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C27'));}catch(e){}" checked disabled></td>
		<td id="report1_D27" colNo=4 value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D27' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D27'));}catch(e){}" disabled></td>
		<td id="report1_E27" colNo=5 bkj="true" value='Y' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F27" colNo=6 value='0,1' onclick="_hideEditor()" class="report1_3" style="display:none;">0,1</td>
	</tr>
	<tr rn="28" height=20 style="height:20px;">
		<td id="report1_A28" colNo=1 value='A107010' onclick="_hideEditor()" class="report1_1">A107010</td>
		<td id="report1_B28" colNo=2 value='    免税、减计收入及加计扣除优惠明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;免税、减计收入及加计扣除优惠明细表</td>
		<td id="report1_C28" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C28' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C28'));}catch(e){}"></td>
		<td id="report1_D28" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D28' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D28'));}catch(e){}" checked></td>
		<td id="report1_E28" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F28" colNo=6 value='0,0' onclick="_hideEditor()" class="report1_3" style="display:none;">0,0</td>
	</tr>
	<tr rn="29" height=20 style="height:20px;">
		<td id="report1_A29" colNo=1 value='A107011' onclick="_hideEditor()" class="report1_1">A107011</td>
		<td id="report1_B29" colNo=2 value='        符合条件的居民企业之间的股息、红利等权益性投资收益优惠明细表' onclick="_hideEditor()" class="report1_8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;符合条件的居民企业之间的股息、红利等权益性投资收益优惠明细表</td>
		<td id="report1_C29" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C29' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C29'));}catch(e){}"></td>
		<td id="report1_D29" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D29' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D29'));}catch(e){}" checked></td>
		<td id="report1_E29" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F29" colNo=6 value='28,1' onclick="_hideEditor()" class="report1_3" style="display:none;">28,1</td>
	</tr>
	<tr rn="30" height=20 style="height:20px;">
		<td id="report1_A30" colNo=1 value='A107012' onclick="_hideEditor()" class="report1_1">A107012</td>
		<td id="report1_B30" colNo=2 value='        综合利用资源生产产品取得的收入优惠明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;综合利用资源生产产品取得的收入优惠明细表</td>
		<td id="report1_C30" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C30' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C30'));}catch(e){}"></td>
		<td id="report1_D30" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D30' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D30'));}catch(e){}" checked></td>
		<td id="report1_E30" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F30" colNo=6 value='28,1' onclick="_hideEditor()" class="report1_3" style="display:none;">28,1</td>
	</tr>
	<tr rn="31" height=20 style="height:20px;">
		<td id="report1_A31" colNo=1 value='A107013' onclick="_hideEditor()" class="report1_1">A107013</td>
		<td id="report1_B31" colNo=2 value='        金融、保险等机构取得的涉农利息、保费收入优惠明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金融、保险等机构取得的涉农利息、保费收入优惠明细表</td>
		<td id="report1_C31" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C31' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C31'));}catch(e){}"></td>
		<td id="report1_D31" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D31' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D31'));}catch(e){}" checked></td>
		<td id="report1_E31" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F31" colNo=6 value='28,1' onclick="_hideEditor()" class="report1_3" style="display:none;">28,1</td>
	</tr>
	<tr rn="32" height=20 style="height:20px;">
		<td id="report1_A32" colNo=1 value='A107014' onclick="_hideEditor()" class="report1_1">A107014</td>
		<td id="report1_B32" colNo=2 value='        研发费用加计扣除优惠明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;研发费用加计扣除优惠明细表</td>
		<td id="report1_C32" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C32' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C32'));}catch(e){}"></td>
		<td id="report1_D32" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D32' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D32'));}catch(e){}" checked></td>
		<td id="report1_E32" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F32" colNo=6 value='28,0;46,1' onclick="_hideEditor()" class="report1_3" style="display:none;">28,0;46,1</td>
	</tr>
	<tr rn="33" height=20 style="height:20px;">
		<td id="report1_A33" colNo=1 value='A107020' onclick="_hideEditor()" class="report1_1">A107020</td>
		<td id="report1_B33" colNo=2 value='    所得减免优惠明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;所得减免优惠明细表</td>
		<td id="report1_C33" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C33' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C33'));}catch(e){}"></td>
		<td id="report1_D33" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D33' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D33'));}catch(e){}" checked></td>
		<td id="report1_E33" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F33" colNo=6 value='0,1' onclick="_hideEditor()" class="report1_3" style="display:none;">0,1</td>
	</tr>
	<tr rn="34" height=20 style="height:20px;">
		<td id="report1_A34" colNo=1 value='A107030' onclick="_hideEditor()" class="report1_1">A107030</td>
		<td id="report1_B34" colNo=2 value='    抵扣应纳税所得额明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;抵扣应纳税所得额明细表</td>
		<td id="report1_C34" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C34' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C34'));}catch(e){}"></td>
		<td id="report1_D34" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D34' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D34'));}catch(e){}" checked></td>
		<td id="report1_E34" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F34" colNo=6 value='0,1' onclick="_hideEditor()" class="report1_3" style="display:none;">0,1</td>
	</tr>
	<tr rn="35" height=20 style="height:20px;">
		<td id="report1_A35" colNo=1 value='A107040' onclick="_hideEditor()" class="report1_1">A107040</td>
		<td id="report1_B35" colNo=2 value='    减免所得税优惠明细表' onclick="_hideEditor()" class="report1_6">&nbsp;&nbsp;&nbsp;&nbsp;减免所得税优惠明细表</td>
		<td id="report1_C35" colNo=3 value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C35' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C35'));}catch(e){}" checked disabled></td>
		<td id="report1_D35" colNo=4 value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D35' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D35'));}catch(e){}" disabled></td>
		<td id="report1_E35" colNo=5 bkj="true" value='Y' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F35" colNo=6 value='0,0' onclick="_hideEditor()" class="report1_3" style="display:none;">0,0</td>
	</tr>
	<tr rn="36" height=20 style="height:20px;">
		<td id="report1_A36" colNo=1 value='A107041' onclick="_hideEditor()" class="report1_1">A107041</td>
		<td id="report1_B36" colNo=2 value='        高新技术企业优惠情况及明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高新技术企业优惠情况及明细表</td>
		<td id="report1_C36" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C36' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C36'));}catch(e){}"></td>
		<td id="report1_D36" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D36' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D36'));}catch(e){}" checked></td>
		<td id="report1_E36" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F36" colNo=6 value='35,1' onclick="_hideEditor()" class="report1_3" style="display:none;">35,1</td>
	</tr>
	<tr rn="37" height=20 style="height:20px;">
		<td id="report1_A37" colNo=1 value='A107042' onclick="_hideEditor()" class="report1_1">A107042</td>
		<td id="report1_B37" colNo=2 value='        软件、集成电路企业优惠情况及明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;软件、集成电路企业优惠情况及明细表</td>
		<td id="report1_C37" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C37' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C37'));}catch(e){}"></td>
		<td id="report1_D37" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D37' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D37'));}catch(e){}" checked></td>
		<td id="report1_E37" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F37" colNo=6 value='35,1' onclick="_hideEditor()" class="report1_3" style="display:none;">35,1</td>
	</tr>
	<tr rn="38" height=20 style="height:20px;">
		<td id="report1_A38" colNo=1 value='A107050' onclick="_hideEditor()" class="report1_1">A107050</td>
		<td id="report1_B38" colNo=2 value='    税额抵免优惠明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;税额抵免优惠明细表</td>
		<td id="report1_C38" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C38' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C38'));}catch(e){}"></td>
		<td id="report1_D38" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D38' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D38'));}catch(e){}" checked></td>
		<td id="report1_E38" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F38" colNo=6 value='0,1' onclick="_hideEditor()" class="report1_3" style="display:none;">0,1</td>
	</tr>
	<tr rn="39" height=20 style="height:20px;">
		<td id="report1_A39" colNo=1 value='A108000' onclick="_hideEditor()" class="report1_1">A108000</td>
		<td id="report1_B39" colNo=2 value='    境外所得税收抵免明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;境外所得税收抵免明细表</td>
		<td id="report1_C39" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C39' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C39'));}catch(e){}"></td>
		<td id="report1_D39" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D39' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D39'));}catch(e){}" checked></td>
		<td id="report1_E39" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F39" colNo=6 value='0,0' onclick="_hideEditor()" class="report1_3" style="display:none;">0,0</td>
	</tr>
	<tr rn="40" height=20 style="height:20px;">
		<td id="report1_A40" colNo=1 value='A108010' onclick="_hideEditor()" class="report1_1">A108010</td>
		<td id="report1_B40" colNo=2 value='        境外所得纳税调整后所得明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;境外所得纳税调整后所得明细表</td>
		<td id="report1_C40" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C40' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C40'));}catch(e){}"></td>
		<td id="report1_D40" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D40' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D40'));}catch(e){}" checked></td>
		<td id="report1_E40" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F40" colNo=6 value='39,1' onclick="_hideEditor()" class="report1_3" style="display:none;">39,1</td>
	</tr>
	<tr rn="41" height=20 style="height:20px;">
		<td id="report1_A41" colNo=1 value='A108020' onclick="_hideEditor()" class="report1_1">A108020</td>
		<td id="report1_B41" colNo=2 value='        境外分支机构弥补亏损明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;境外分支机构弥补亏损明细表</td>
		<td id="report1_C41" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C41' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C41'));}catch(e){}"></td>
		<td id="report1_D41" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D41' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D41'));}catch(e){}" checked></td>
		<td id="report1_E41" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F41" colNo=6 value='39,1' onclick="_hideEditor()" class="report1_3" style="display:none;">39,1</td>
	</tr>
	<tr rn="42" height=20 style="height:20px;">
		<td id="report1_A42" colNo=1 value='A108030' onclick="_hideEditor()" class="report1_1">A108030</td>
		<td id="report1_B42" colNo=2 value='        跨年度结转抵免境外所得税明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;跨年度结转抵免境外所得税明细表</td>
		<td id="report1_C42" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C42' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C42'));}catch(e){}"></td>
		<td id="report1_D42" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D42' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D42'));}catch(e){}" checked></td>
		<td id="report1_E42" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F42" colNo=6 value='39,1' onclick="_hideEditor()" class="report1_3" style="display:none;">39,1</td>
	</tr>
	<tr rn="43" height=20 style="height:20px;">
		<td id="report1_A43" colNo=1 value='A109000' onclick="_hideEditor()" class="report1_1">A109000</td>
		<td id="report1_B43" colNo=2 value='    跨地区经营汇总纳税企业年度分摊企业所得税明细表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;跨地区经营汇总纳税企业年度分摊企业所得税明细表</td>
		<td id="report1_C43" colNo=3 value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C43' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C43'));}catch(e){}" disabled></td>
		<td id="report1_D43" colNo=4 value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D43' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D43'));}catch(e){}" checked disabled></td>
		<td id="report1_E43" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F43" colNo=6 value='0,0' onclick="_hideEditor()" class="report1_3" style="display:none;">0,0</td>
	</tr>
	<tr rn="44" height=20 style="height:20px;">
		<td id="report1_A44" colNo=1 value='A109010' onclick="_hideEditor()" class="report1_1">A109010</td>
		<td id="report1_B44" colNo=2 value='        企业所得税汇总纳税分支机构所得税分配表' onclick="_hideEditor()" class="report1_8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;企业所得税汇总纳税分支机构所得税分配表</td>
		<td id="report1_C44" colNo=3 value='0' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C44' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C44'));}catch(e){}" disabled></td>
		<td id="report1_D44" colNo=4 value='1' onclick="_hideEditor()" class="report1_4"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D44' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D44'));}catch(e){}" checked disabled></td>
		<td id="report1_E44" colNo=5 bkj="true" value='N' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F44" colNo=6 value='43,1' onclick="_hideEditor()" class="report1_3" style="display:none;">43,1</td>
	</tr>
	<tr rn="45" height=16 style="height:16px;">
		<td id="report1_A45" colNo=1 bkj="true" value='SKWGQY' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_B45" colNo=2 value='    受控外国企业信息报告表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;受控外国企业信息报告表</td>
		<td id="report1_C45" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_1"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C45' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C45'));}catch(e){}"></td>
		<td id="report1_D45" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_1"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D45' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D45'));}catch(e){}" checked></td>
		<td id="report1_E45" colNo=5 value='N' onclick="_hideEditor()" class="report1_5" style="display:none;">N</td>
		<td id="report1_F45" colNo=6 value='0,0' onclick="_hideEditor()" class="report1_3" style="display:none;">0,0</td>
	</tr>
	<tr rn="46" height=16 style="height:16px;">
		<td id="report1_A46" colNo=1 bkj="true" value='JJKCGJB' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_B46" colNo=2 value='    研发项目可加计扣除研究开发费用情况归集表' onclick="_hideEditor()" class="report1_2">&nbsp;&nbsp;&nbsp;&nbsp;研发项目可加计扣除研究开发费用情况归集表</td>
		<td id="report1_C46" colNo=3 modifiable=true value='0' onclick="_hideEditor()" class="report1_1"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C46' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C46'));}catch(e){}"></td>
		<td id="report1_D46" colNo=4 modifiable=true value='1' onclick="_hideEditor()" class="report1_1"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D46' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D46'));}catch(e){}" checked></td>
		<td id="report1_E46" colNo=5 value='N' onclick="_hideEditor()" class="report1_5" style="display:none;">N</td>
		<td id="report1_F46" colNo=6 value='32,1' onclick="_hideEditor()" class="report1_3" style="display:none;">32,1</td>
	</tr>
	<tr rn="47" height=16 style="height:16px;">
		<td id="report1_A47" colNo=1 value='附表1' onclick="_hideEditor()" class="report1_2">附表1</td>
		<td id="report1_B47" colNo=2 value='企业重组所得税特殊性税务处理报告表' onclick="_hideEditor()" class="report1_2">企业重组所得税特殊性税务处理报告表</td>
		<td id="report1_C47" colNo=3 value='' onclick="_hideEditor()" class="report1_7"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C47' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C47'));}catch(e){}" disabled></td>
		<td id="report1_D47" colNo=4 value='' onclick="_hideEditor()" class="report1_7"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D47' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D47'));}catch(e){}" disabled></td>
		<td id="report1_E47" colNo=5 value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F47" colNo=6 value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="48" height=16 style="height:16px;">
		<td id="report1_A48" colNo=1 value='附表1-1' onclick="_hideEditor()" class="report1_2">附表1-1</td>
		<td id="report1_B48" colNo=2 value='企业重组所得税特殊性税务处理报告表（债务重组）' onclick="_hideEditor()" class="report1_2">企业重组所得税特殊性税务处理报告表（债务重组）</td>
		<td id="report1_C48" colNo=3 value='' onclick="_hideEditor()" class="report1_7"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C48' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C48'));}catch(e){}" disabled></td>
		<td id="report1_D48" colNo=4 value='' onclick="_hideEditor()" class="report1_7"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D48' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D48'));}catch(e){}" disabled></td>
		<td id="report1_E48" colNo=5 value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F48" colNo=6 value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="49" height=16 style="height:16px;">
		<td id="report1_A49" colNo=1 value='附表1-2' onclick="_hideEditor()" class="report1_2">附表1-2</td>
		<td id="report1_B49" colNo=2 value='企业重组所得税特殊性税务处理报告表（股权收购）' onclick="_hideEditor()" class="report1_2">企业重组所得税特殊性税务处理报告表（股权收购）</td>
		<td id="report1_C49" colNo=3 value='' onclick="_hideEditor()" class="report1_7"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C49' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C49'));}catch(e){}" disabled></td>
		<td id="report1_D49" colNo=4 value='' onclick="_hideEditor()" class="report1_7"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D49' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D49'));}catch(e){}" disabled></td>
		<td id="report1_E49" colNo=5 value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F49" colNo=6 value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="50" height=16 style="height:16px;">
		<td id="report1_A50" colNo=1 value='附表1-3' onclick="_hideEditor()" class="report1_2">附表1-3</td>
		<td id="report1_B50" colNo=2 value='企业重组所得税特殊性税务处理报告表（资产收购）' onclick="_hideEditor()" class="report1_2">企业重组所得税特殊性税务处理报告表（资产收购）</td>
		<td id="report1_C50" colNo=3 value='' onclick="_hideEditor()" class="report1_7"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C50' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C50'));}catch(e){}" disabled></td>
		<td id="report1_D50" colNo=4 value='' onclick="_hideEditor()" class="report1_7"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D50' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D50'));}catch(e){}" disabled></td>
		<td id="report1_E50" colNo=5 value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F50" colNo=6 value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="51" height=16 style="height:16px;">
		<td id="report1_A51" colNo=1 value='附表1-4' onclick="_hideEditor()" class="report1_2">附表1-4</td>
		<td id="report1_B51" colNo=2 value='企业重组所得税特殊性税务处理报告表（企业合并）' onclick="_hideEditor()" class="report1_2">企业重组所得税特殊性税务处理报告表（企业合并）</td>
		<td id="report1_C51" colNo=3 value='' onclick="_hideEditor()" class="report1_7"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C51' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C51'));}catch(e){}" disabled></td>
		<td id="report1_D51" colNo=4 value='' onclick="_hideEditor()" class="report1_7"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D51' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D51'));}catch(e){}" disabled></td>
		<td id="report1_E51" colNo=5 value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F51" colNo=6 value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="52" height=16 style="height:16px;">
		<td id="report1_A52" colNo=1 value='附表1-5' onclick="_hideEditor()" class="report1_2">附表1-5</td>
		<td id="report1_B52" colNo=2 value='企业重组所得税特殊性税务处理报告表（企业分立）' onclick="_hideEditor()" class="report1_2">企业重组所得税特殊性税务处理报告表（企业分立）</td>
		<td id="report1_C52" colNo=3 value='' onclick="_hideEditor()" class="report1_7"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C52' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C52'));}catch(e){}" disabled></td>
		<td id="report1_D52" colNo=4 value='' onclick="_hideEditor()" class="report1_7"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D52' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D52'));}catch(e){}" disabled></td>
		<td id="report1_E52" colNo=5 value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F52" colNo=6 value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="53" height=16 style="height:16px;">
		<td id="report1_A53" colNo=1 value='' onclick="_hideEditor()" class="report1_2"></td>
		<td id="report1_B53" colNo=2 value='非货币性资产投资递延纳税调整明细表' onclick="_hideEditor()" class="report1_2">非货币性资产投资递延纳税调整明细表</td>
		<td id="report1_C53" colNo=3 value='' onclick="_hideEditor()" class="report1_7"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C53' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C53'));}catch(e){}" disabled></td>
		<td id="report1_D53" colNo=4 value='' onclick="_hideEditor()" class="report1_7"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D53' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D53'));}catch(e){}" disabled></td>
		<td id="report1_E53" colNo=5 value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F53" colNo=6 value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="54" height=16 style="height:16px;">
		<td id="report1_A54" colNo=1 value='' onclick="_hideEditor()" class="report1_2"></td>
		<td id="report1_B54" colNo=2 value='居民企业资产（股权）划转特殊性税务处理申报表' onclick="_hideEditor()" class="report1_2">居民企业资产（股权）划转特殊性税务处理申报表</td>
		<td id="report1_C54" colNo=3 value='' onclick="_hideEditor()" class="report1_7"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'C54' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_C54'));}catch(e){}" disabled></td>
		<td id="report1_D54" colNo=4 value='' onclick="_hideEditor()" class="report1_7"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');if(!autoCalcOnlyOnSubmit)try{report1_autoCalc( 'D54' );}catch(ex){};report1.changed = true;try{_cellValueChanged(document.getElementById('report1_D54'));}catch(e){}" disabled></td>
		<td id="report1_E54" colNo=5 value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
		<td id="report1_F54" colNo=6 value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="55" height=16 style="height:16px;">
		<td rowSpan=2 colSpan=4 id="report1_A55" colNo=1 value='说明：企业应当根据实际情况选择需要填表的表单。' onclick="_hideEditor()" class="report1_12">说明：企业应当根据实际情况选择需要填表的表单。</td>
		<td id="report1_E55" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_9" style="display:none;"></td>
		<td id="report1_F55" colNo=6 value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="56" height=16 style="height:16px;">
		<td id="report1_E56" colNo=5 bkj="true" value='' onclick="_hideEditor()" class="report1_9" style="display:none;"></td>
		<td id="report1_F56" colNo=6 value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
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
	<input type=hidden name=fileName value="/ndsdsA/sb_ndsds_2014_tbbd.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_74726">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2FndsdsA%2Fsb_ndsds_2014_tbbd.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000015884336&sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466&reportParamsId=15115066322569060172189">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_NDSDS_2014_TBBD;xmlName=ndsdsA/sb_ndsds_2014_tbbd;pzxh=10014517000015884336;nsrsbh=91450107MA5KE0EQ2B;dataFromBz=0;raq=/ndsdsA/sb_ndsds_2014_tbbd.raq;sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/ndsdsA/sb_ndsds_2014_tbbd.raq&srcType=file&cachedId=10_1_1_176_8080_74726&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_NDSDS_2014_TBBD%3BxmlName%3DndsdsA%2Fsb_ndsds_2014_tbbd%3Bpzxh%3D10014517000015884336%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdataFromBz%3D0%3Braq%3D%2FndsdsA%2Fsb_ndsds_2014_tbbd.raq%3Bsbuuid%3D4F35CE4F88AE666EB53FF3AE9DC76466%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

