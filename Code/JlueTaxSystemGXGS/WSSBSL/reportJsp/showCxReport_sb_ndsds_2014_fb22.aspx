<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_sb_ndsds_2014_fb22.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_sb_ndsds_2014_fb22" %>

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
	var report1_cachedId = "10_1_1_176_8080_74734";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2FndsdsA%2Fsb_ndsds_2014_fb22.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15115066323196680172197&cachedId=10_1_1_176_8080_74734&t_i_m_e=1511506632366" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2FndsdsA%2Fsb_ndsds_2014_fb22.raq&columns=0&srcType=file&reportParamsId=15115066323196680172197&cachedId=10_1_1_176_8080_74734&t_i_m_e=1511506632366" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2FndsdsA%2Fsb_ndsds_2014_fb22.raq&columns=0&srcType=file&reportParamsId=15115066323196680172197&cachedId=10_1_1_176_8080_74734&t_i_m_e=1511506632366";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2FndsdsA%2Fsb_ndsds_2014_fb22.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15115066323196680172197&cachedId=10_1_1_176_8080_74734&t_i_m_e=1511506632366";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2FndsdsA%2Fsb_ndsds_2014_fb22.raq&srcType=file&reportParamsId=15115066323196680172197&cachedId=10_1_1_176_8080_74734&t_i_m_e=1511506632366" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_fb22.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15115066323196680172197&cachedId=10_1_1_176_8080_74734&t_i_m_e=1511506632366";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_fb22.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15115066323196680172197&cachedId=10_1_1_176_8080_74734&t_i_m_e=1511506632366";
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
	.report1_2 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_6 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:center;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_12 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009933;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_13 { text-align:left;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_14 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1488711out()" onmouseover="report1488711over()" rowCount=12 cols=14 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:1228px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:48px;"></col>
		<col style="width:66px;"></col>
		<col style="width:64px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
	</colgroup>
	<tr rn="1" height=30 style="height:30px;">
		<td colSpan=13 id="report1_A1" colNo=1 value='10014517000015884336' onclick="_hideEditor()" class="report1_13">A106000</td>
		<td id="report1_N1" colNo=14 bkj="true" value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="2" height=30 style="height:30px;">
		<td colSpan=13 id="report1_A2" colNo=1 value='企业所得税弥补亏损明细表' onclick="_hideEditor()" class="report1_11">企业所得税弥补亏损明细表</td>
		<td id="report1_N2" colNo=14 bkj="true" value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_10" style="display:none;"></td>
	</tr>
	<tr rn="3" height=40 style="height:40px;">
		<td rowSpan=3 id="report1_A3" colNo=1 value='行次' onclick="_hideEditor()" class="report1_1">行次</td>
		<td rowSpan=3 id="report1_B3" colNo=2 value='项目' onclick="_hideEditor()" class="report1_1">项目</td>
		<td rowSpan=2 id="report1_C3" colNo=3 value='年度' onclick="_hideEditor()" class="report1_1">年度</td>
		<td rowSpan=2 id="report1_D3" colNo=4 value='纳税调整后所得' onclick="_hideEditor()" class="report1_5">纳税调整后所得</td>
		<td rowSpan=2 id="report1_E3" colNo=5 value='合并、分立转入（转出）可弥补的亏损额' onclick="_hideEditor()" class="report1_5">合并、分立转入<br>（转出）可弥补的<br>亏损额</td>
		<td rowSpan=2 id="report1_F3" colNo=6 value='当年可弥补的亏损额' onclick="_hideEditor()" class="report1_5">当年可弥补的亏损<br>额</td>
		<td colSpan=5 id="report1_G3" colNo=7 value='以前年度亏损已弥补额' onclick="_hideEditor()" class="report1_1">以前年度亏损已弥补额</td>
		<td rowSpan=2 id="report1_L3" colNo=12 value='本年度实际弥补的以前年度亏损额' onclick="_hideEditor()" class="report1_5">本年度实际弥补的<br>以前年度亏损额</td>
		<td rowSpan=2 id="report1_M3" colNo=13 value='可结转以后年度弥补的亏损额' onclick="_hideEditor()" class="report1_5">可结转以后年度弥<br>补的亏损额</td>
		<td id="report1_N3" colNo=14 bkj="true" value='2017-05-08' onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="4" height=20 style="height:20px;">
		<td id="report1_G4" colNo=7 value='前四年度' onclick="_hideEditor()" class="report1_1">前四年度</td>
		<td id="report1_H4" colNo=8 value='前三年度' onclick="_hideEditor()" class="report1_1">前三年度</td>
		<td id="report1_I4" colNo=9 value='前二年度' onclick="_hideEditor()" class="report1_1">前二年度</td>
		<td id="report1_J4" colNo=10 value='前一年度' onclick="_hideEditor()" class="report1_1">前一年度</td>
		<td id="report1_K4" colNo=11 value='合计' onclick="_hideEditor()" class="report1_1">合计</td>
		<td id="report1_N4" colNo=14 bkj="true" value='2016-01-01' onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="5" height=20 style="height:20px;">
		<td id="report1_C5" colNo=3 value='1' onclick="_hideEditor()" class="report1_1">1</td>
		<td id="report1_D5" colNo=4 value='2' onclick="_hideEditor()" class="report1_1">2</td>
		<td id="report1_E5" colNo=5 value='3' onclick="_hideEditor()" class="report1_1">3</td>
		<td id="report1_F5" colNo=6 value='4' onclick="_hideEditor()" class="report1_1">4</td>
		<td id="report1_G5" colNo=7 value='5' onclick="_hideEditor()" class="report1_1">5</td>
		<td id="report1_H5" colNo=8 value='6' onclick="_hideEditor()" class="report1_1">6</td>
		<td id="report1_I5" colNo=9 value='7' onclick="_hideEditor()" class="report1_1">7</td>
		<td id="report1_J5" colNo=10 value='8' onclick="_hideEditor()" class="report1_1">8</td>
		<td id="report1_K5" colNo=11 value='9' onclick="_hideEditor()" class="report1_1">9</td>
		<td id="report1_L5" colNo=12 value='10' onclick="_hideEditor()" class="report1_1">10</td>
		<td id="report1_M5" colNo=13 value='11' onclick="_hideEditor()" class="report1_1">11</td>
		<td id="report1_N5" colNo=14 bkj="true" value='2016-12-31' onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="6" height=20 style="height:20px;">
		<td id="report1_A6" colNo=1 value='1' onclick="_hideEditor()" class="report1_1">1</td>
		<td id="report1_B6" colNo=2 value='前五年度' onclick="_hideEditor()" class="report1_1">前五年度</td>
		<td id="report1_C6" colNo=3 value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_D6" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_E6" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_6_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_6_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E6' ) )>0&&_parseValue( document.getElementById( 'report1_D6' ) )<0?-_parseValue( document.getElementById( 'report1_D6' ) )>_parseValue( document.getElementById( 'report1_E6' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_D6,report1_E6" );}catch(e){}
			alert( '第1行，若第3列＞0且第2列＜0，则第3列＜第2列的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F6" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_G6" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_H6" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_I6" colNo=9 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_J6" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_K6" colNo=11 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_L6" colNo=12 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_6_12_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_6_12_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_D11' ) )<=0?_parseValue( document.getElementById( 'report1_L6' ) )==0:_parseValue( document.getElementById( 'report1_N6' ) )>=_parseValue( document.getElementById( 'report1_L6' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_N6,report1_D11,report1_L6" );}catch(e){}
			alert( '若第2列第6行＞0，第10列第1行≤第4列第1行的绝对值-第9列第1行；若第2列第6行＜0，第10列第1行＝0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_M6" colNo=13 value='' onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_N6" colNo=14 bkj="true" value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="7" height=20 style="height:20px;">
		<td id="report1_A7" colNo=1 value='2' onclick="_hideEditor()" class="report1_1">2</td>
		<td id="report1_B7" colNo=2 value='前四年度' onclick="_hideEditor()" class="report1_1">前四年度</td>
		<td id="report1_C7" colNo=3 value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_D7" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_E7" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_7_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_7_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E7' ) )>0&&_parseValue( document.getElementById( 'report1_D7' ) )<0?-_parseValue( document.getElementById( 'report1_D7' ) )>_parseValue( document.getElementById( 'report1_E7' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_D7,report1_E7" );}catch(e){}
			alert( '第2行7，若第3列＞0且第2列＜0，则第3列＜第2列的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F7" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_G7" colNo=7 value='' onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H7" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_I7" colNo=9 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_J7" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_K7" colNo=11 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_L7" colNo=12 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_7_12_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_7_12_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_D11' ) )<=0?_parseValue( document.getElementById( 'report1_L7' ) )==0:_parseValue( document.getElementById( 'report1_N7' ) )>=_parseValue( document.getElementById( 'report1_L7' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_N7,report1_D11,report1_L7" );}catch(e){}
			alert( '若第2列第6行＞0，第10列第2行≤第4列第2行的绝对值-第9列第2行；若第2列第6行＜0，第10列第2行＝0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_M7" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_N7" colNo=14 bkj="true" value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="8" height=20 style="height:20px;">
		<td id="report1_A8" colNo=1 value='3' onclick="_hideEditor()" class="report1_1">3</td>
		<td id="report1_B8" colNo=2 value='前三年度' onclick="_hideEditor()" class="report1_1">前三年度</td>
		<td id="report1_C8" colNo=3 value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_D8" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_E8" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_8_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_8_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E8' ) )>0&&_parseValue( document.getElementById( 'report1_D8' ) )<0?-_parseValue( document.getElementById( 'report1_D8' ) )>_parseValue( document.getElementById( 'report1_E8' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_D8,report1_E8" );}catch(e){}
			alert( '第3行，若第3列＞0且第2列＜0，则第3列＜第2列的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F8" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_G8" colNo=7 value='' onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H8" colNo=8 value='' onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I8" colNo=9 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_J8" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_K8" colNo=11 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_L8" colNo=12 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_8_12_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_8_12_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_D11' ) )<=0?_parseValue( document.getElementById( 'report1_L8' ) )==0:_parseValue( document.getElementById( 'report1_N8' ) )>=_parseValue( document.getElementById( 'report1_L8' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_N8,report1_L8,report1_D11" );}catch(e){}
			alert( '若第2列第6行＞0，第10列第3行≤第4列第3行的绝对值-第9列第3行；若第2列第6行＜0，第10列第3行＝0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_M8" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_N8" colNo=14 bkj="true" value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="9" height=20 style="height:20px;">
		<td id="report1_A9" colNo=1 value='4' onclick="_hideEditor()" class="report1_1">4</td>
		<td id="report1_B9" colNo=2 value='前二年度' onclick="_hideEditor()" class="report1_1">前二年度</td>
		<td id="report1_C9" colNo=3 value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_D9" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_E9" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_9_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_9_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E9' ) )>0&&_parseValue( document.getElementById( 'report1_D9' ) )<0?-_parseValue( document.getElementById( 'report1_D9' ) )>_parseValue( document.getElementById( 'report1_E9' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_D9,report1_E9" );}catch(e){}
			alert( '第4行，若第3列＞0且第2列＜0，则第3列＜第2列的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F9" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_G9" colNo=7 value='' onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_H9" colNo=8 value='' onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_I9" colNo=9 value='' onclick="_hideEditor()" class="report1_3">--</td>
		<td id="report1_J9" colNo=10 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_K9" colNo=11 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_L9" colNo=12 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_9_12_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_9_12_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_D11' ) )<=0?_parseValue( document.getElementById( 'report1_L9' ) )==0:_parseValue( document.getElementById( 'report1_N9' ) )>=_parseValue( document.getElementById( 'report1_L9' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_N9,report1_L9,report1_D11" );}catch(e){}
			alert( '若第2列第6行＞0，第10列第4行≤第4列第4行的绝对值-第9列第4行；若第2列第6行＜0，第10列第4行＝0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_M9" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_N9" colNo=14 bkj="true" value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="10" height=20 style="height:20px;">
		<td id="report1_A10" colNo=1 value='5' onclick="_hideEditor()" class="report1_1">5</td>
		<td id="report1_B10" colNo=2 value='前一年度' onclick="_hideEditor()" class="report1_1">前一年度</td>
		<td id="report1_C10" colNo=3 value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_D10" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_E10" colNo=5 value='0.0' format="%230.00" digits="2" dataValid="report1_10_5_dataValid()" onclick="_hideEditor()" class="report1_2">0.00</td>
<script language=javascript>
	function report1_10_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E10' ) )>0&&_parseValue( document.getElementById( 'report1_D10' ) )<0?-_parseValue( document.getElementById( 'report1_D10' ) )>_parseValue( document.getElementById( 'report1_E10' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_E10,report1_D10" );}catch(e){}
			alert( '第5行，若第3列＞0且第2列＜0，则第3列＜第2列的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F10" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_G10" colNo=7 value='' onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_H10" colNo=8 value='' onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_I10" colNo=9 value='' onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_J10" colNo=10 value='' onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_K10" colNo=11 value='' onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_L10" colNo=12 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_10_12_dataValid()" onclick="_displayEditor()" class="report1_8">0.00</td>
<script language=javascript>
	function report1_10_12_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_D11' ) )<=0?_parseValue( document.getElementById( 'report1_L10' ) )==0:_parseValue( document.getElementById( 'report1_N10' ) )>=_parseValue( document.getElementById( 'report1_L10' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_N10,report1_L10,report1_D11" );}catch(e){}
			alert( '若第2列第6行＞0，第10列第5行≤第4列第5行的绝对值-第9列第5行；若第2列第6行＜0，第10列第5行＝0' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_M10" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_N10" colNo=14 bkj="true" value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="11" height=20 style="height:20px;">
		<td id="report1_A11" colNo=1 value='6' onclick="_hideEditor()" class="report1_1">6</td>
		<td id="report1_B11" colNo=2 value='本年度' onclick="_hideEditor()" class="report1_1">本年度</td>
		<td id="report1_C11" colNo=3 value='2016' onclick="_hideEditor()" class="report1_6">2016</td>
		<td id="report1_D11" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='-164625.8' format="%230.00" digits="2" dataValid="report1_11_4_dataValid()" onclick="_displayEditor()" class="report1_8">-164625.80</td>
<script language=javascript>
	function report1_11_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_D11' ) )>0?_parseValue( document.getElementById( 'report1_D11' ) )>=_parseValue( document.getElementById( 'report1_L11' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_D11,report1_L11" );}catch(e){}
			alert( '若第2列第6行＞0，第10列第6行≤第2列第6行' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E11" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_11_5_dataValid()" onclick="_displayEditor()" class="report1_9">0.00</td>
<script language=javascript>
	function report1_11_5_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E11' ) )>0&&_parseValue( document.getElementById( 'report1_D11' ) )<0?-_parseValue( document.getElementById( 'report1_D11' ) )>_parseValue( document.getElementById( 'report1_E11' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_E11,report1_D11" );}catch(e){}
			alert( '第6行，若第3列＞0且第2列＜0，则第3列＜第2列的绝对值' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_F11" colNo=6 value='-164625.8' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">-164625.80</td>
		<td id="report1_G11" colNo=7 value='' onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_H11" colNo=8 value='' onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_I11" colNo=9 value='' onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_J11" colNo=10 value='' onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_K11" colNo=11 value='' onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_L11" colNo=12 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_M11" colNo=13 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_N11" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="12" height=20 style="height:20px;">
		<td id="report1_A12" colNo=1 value='7' onclick="_hideEditor()" class="report1_1">7</td>
		<td colSpan=11 id="report1_B12" colNo=2 value='可结转以后年度弥补的亏损额合计' onclick="_hideEditor()" class="report1_14" style="border-right-style:solid;">可结转以后年度弥补的亏损额合计</td>
		<td id="report1_M12" colNo=13 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_12"></td>
		<td id="report1_N12" colNo=14 bkj="true" value='' onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,G6,H6,I6,J6,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G6' ) )+_parseValue( document.getElementById( 'report1_H6' ) )+_parseValue( document.getElementById( 'report1_I6' ) )+_parseValue( document.getElementById( 'report1_J6' ) )).toFixed(2);
				document.getElementById( 'report1_K6' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_K6' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_K6' ) );
			}catch(e1){}
		}
		cells = ",,F6,F6,K6,G6,H6,I6,J6,F6,K6,G6,H6,I6,J6,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F6' ) )<0?-_parseValue( document.getElementById( 'report1_F6' ) )-_parseValue( document.getElementById( 'report1_K6' ) ):_parseValue( document.getElementById( 'report1_F6' ) )-_parseValue( document.getElementById( 'report1_K6' ) )).toFixed(2);
				document.getElementById( 'report1_N6' ).setAttribute( 'value', value + "" );
				_formatCalcValue( document.getElementById( 'report1_N6' ) );
			}catch(e1){}
		}
		cells = ",,H7,I7,J7,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H7' ) )+_parseValue( document.getElementById( 'report1_I7' ) )+_parseValue( document.getElementById( 'report1_J7' ) )).toFixed(2);
				document.getElementById( 'report1_K7' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_K7' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_K7' ) );
			}catch(e1){}
		}
		cells = ",,F7,F7,K7,H7,I7,J7,L7,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F7' ) )<0?(-_parseValue( document.getElementById( 'report1_F7' ) )-_parseValue( document.getElementById( 'report1_K7' ) )-_parseValue( document.getElementById( 'report1_L7' ) )):0).toFixed(2);
				document.getElementById( 'report1_M7' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M7' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M7' ) );
			}catch(e1){}
		}
		cells = ",,F7,F7,K7,H7,I7,J7,F7,K7,H7,I7,J7,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F7' ) )<0?-_parseValue( document.getElementById( 'report1_F7' ) )-_parseValue( document.getElementById( 'report1_K7' ) ):_parseValue( document.getElementById( 'report1_F7' ) )-_parseValue( document.getElementById( 'report1_K7' ) )).toFixed(2);
				document.getElementById( 'report1_N7' ).setAttribute( 'value', value + "" );
				_formatCalcValue( document.getElementById( 'report1_N7' ) );
			}catch(e1){}
		}
		cells = ",,I8,J8,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_I8' ) )+_parseValue( document.getElementById( 'report1_J8' ) )).toFixed(2);
				document.getElementById( 'report1_K8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_K8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_K8' ) );
			}catch(e1){}
		}
		cells = ",,F8,F8,K8,I8,J8,L8,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F8' ) )<0?(-_parseValue( document.getElementById( 'report1_F8' ) )-_parseValue( document.getElementById( 'report1_K8' ) )-_parseValue( document.getElementById( 'report1_L8' ) )):0).toFixed(2);
				document.getElementById( 'report1_M8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M8' ) );
			}catch(e1){}
		}
		cells = ",,F8,F8,K8,I8,J8,F8,K8,I8,J8,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F8' ) )<0?-_parseValue( document.getElementById( 'report1_F8' ) )-_parseValue( document.getElementById( 'report1_K8' ) ):_parseValue( document.getElementById( 'report1_F8' ) )-_parseValue( document.getElementById( 'report1_K8' ) )).toFixed(2);
				document.getElementById( 'report1_N8' ).setAttribute( 'value', value + "" );
				_formatCalcValue( document.getElementById( 'report1_N8' ) );
			}catch(e1){}
		}
		cells = ",,J9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_J9' ) )).toFixed(2);
				document.getElementById( 'report1_K9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_K9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_K9' ) );
			}catch(e1){}
		}
		cells = ",,F9,F9,K9,J9,L9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F9' ) )<0?(-_parseValue( document.getElementById( 'report1_F9' ) )-_parseValue( document.getElementById( 'report1_K9' ) )-_parseValue( document.getElementById( 'report1_L9' ) )):0).toFixed(2);
				document.getElementById( 'report1_M9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M9' ) );
			}catch(e1){}
		}
		cells = ",,F9,F9,K9,J9,F9,K9,J9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F9' ) )<0?-_parseValue( document.getElementById( 'report1_F9' ) )-_parseValue( document.getElementById( 'report1_K9' ) ):_parseValue( document.getElementById( 'report1_F9' ) )-_parseValue( document.getElementById( 'report1_K9' ) )).toFixed(2);
				document.getElementById( 'report1_N9' ).setAttribute( 'value', value + "" );
				_formatCalcValue( document.getElementById( 'report1_N9' ) );
			}catch(e1){}
		}
		cells = ",,F10,F10,K10,L10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F10' ) )<0?(-_parseValue( document.getElementById( 'report1_F10' ) )-_parseValue( document.getElementById( 'report1_K10' ) )-_parseValue( document.getElementById( 'report1_L10' ) )):0).toFixed(2);
				document.getElementById( 'report1_M10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M10' ) );
			}catch(e1){}
		}
		cells = ",,F10,F10,K10,F10,K10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F10' ) )<0?-_parseValue( document.getElementById( 'report1_F10' ) )-_parseValue( document.getElementById( 'report1_K10' ) ):_parseValue( document.getElementById( 'report1_F10' ) )-_parseValue( document.getElementById( 'report1_K10' ) )).toFixed(2);
				document.getElementById( 'report1_N10' ).setAttribute( 'value', value + "" );
				_formatCalcValue( document.getElementById( 'report1_N10' ) );
			}catch(e1){}
		}
		cells = ",,D11,E11,D11,E11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D11' ) )>=0?_parseValue( document.getElementById( 'report1_E11' ) ):(_parseValue( document.getElementById( 'report1_D11' ) )+_parseValue( document.getElementById( 'report1_E11' ) ))).toFixed(2);
				document.getElementById( 'report1_F11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F11' ) );
			}catch(e1){}
		}
		cells = ",,D11,L6,L7,L8,L9,L10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D11' ) )<=0?0:(_parseValue( document.getElementById( 'report1_L6' ) )+_parseValue( document.getElementById( 'report1_L7' ) )+_parseValue( document.getElementById( 'report1_L8' ) )+_parseValue( document.getElementById( 'report1_L9' ) )+_parseValue( document.getElementById( 'report1_L10' ) ))).toFixed(2);
				document.getElementById( 'report1_L11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_L11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_L11' ) );
			}catch(e1){}
		}
		cells = ",,F11,D11,E11,D11,E11,F11,D11,E11,D11,E11,K11,L11,D11,L6,L7,L8,L9,L10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F11' ) )<0?(-_parseValue( document.getElementById( 'report1_F11' ) )-_parseValue( document.getElementById( 'report1_K11' ) )-_parseValue( document.getElementById( 'report1_L11' ) )):0).toFixed(2);
				document.getElementById( 'report1_M11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M11' ) );
			}catch(e1){}
		}
		cells = ",,M7,F7,F7,K7,H7,I7,J7,L7,M8,F8,F8,K8,I8,J8,L8,M9,F9,F9,K9,J9,L9,M10,F10,F10,K10,L10,M11,F11,D11,E11,D11,E11,F11,D11,E11,D11,E11,K11,L11,D11,L6,L7,L8,L9,L10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_M7' ) )+_parseValue( document.getElementById( 'report1_M8' ) )+_parseValue( document.getElementById( 'report1_M9' ) )+_parseValue( document.getElementById( 'report1_M10' ) )+_parseValue( document.getElementById( 'report1_M11' ) )).toFixed(2);
				document.getElementById( 'report1_M12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_M12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_M12' ) );
			}catch(e1){}
		}
		try{ group_autoCalc( 'report1_' + cellName ); }catch(e){}
	}

	function report1_checkValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_E6' ) )>0&&_parseValue( document.getElementById( 'report1_D6' ) )<0?-_parseValue( document.getElementById( 'report1_D6' ) )>_parseValue( document.getElementById( 'report1_E6' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_D6,report1_E6" );}catch(e){}
			alert( '第1行，若第3列＞0且第2列＜0，则第3列＜第2列的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_D11' ) )<=0?_parseValue( document.getElementById( 'report1_L6' ) )==0:_parseValue( document.getElementById( 'report1_N6' ) )>=_parseValue( document.getElementById( 'report1_L6' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_N6,report1_D11,report1_L6" );}catch(e){}
			alert( '若第2列第6行＞0，第10列第1行≤第4列第1行的绝对值-第9列第1行；若第2列第6行＜0，第10列第1行＝0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E7' ) )>0&&_parseValue( document.getElementById( 'report1_D7' ) )<0?-_parseValue( document.getElementById( 'report1_D7' ) )>_parseValue( document.getElementById( 'report1_E7' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_D7,report1_E7" );}catch(e){}
			alert( '第2行7，若第3列＞0且第2列＜0，则第3列＜第2列的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_D11' ) )<=0?_parseValue( document.getElementById( 'report1_L7' ) )==0:_parseValue( document.getElementById( 'report1_N7' ) )>=_parseValue( document.getElementById( 'report1_L7' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_N7,report1_D11,report1_L7" );}catch(e){}
			alert( '若第2列第6行＞0，第10列第2行≤第4列第2行的绝对值-第9列第2行；若第2列第6行＜0，第10列第2行＝0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E8' ) )>0&&_parseValue( document.getElementById( 'report1_D8' ) )<0?-_parseValue( document.getElementById( 'report1_D8' ) )>_parseValue( document.getElementById( 'report1_E8' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_D8,report1_E8" );}catch(e){}
			alert( '第3行，若第3列＞0且第2列＜0，则第3列＜第2列的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_D11' ) )<=0?_parseValue( document.getElementById( 'report1_L8' ) )==0:_parseValue( document.getElementById( 'report1_N8' ) )>=_parseValue( document.getElementById( 'report1_L8' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_N8,report1_L8,report1_D11" );}catch(e){}
			alert( '若第2列第6行＞0，第10列第3行≤第4列第3行的绝对值-第9列第3行；若第2列第6行＜0，第10列第3行＝0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E9' ) )>0&&_parseValue( document.getElementById( 'report1_D9' ) )<0?-_parseValue( document.getElementById( 'report1_D9' ) )>_parseValue( document.getElementById( 'report1_E9' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_D9,report1_E9" );}catch(e){}
			alert( '第4行，若第3列＞0且第2列＜0，则第3列＜第2列的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_D11' ) )<=0?_parseValue( document.getElementById( 'report1_L9' ) )==0:_parseValue( document.getElementById( 'report1_N9' ) )>=_parseValue( document.getElementById( 'report1_L9' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_N9,report1_L9,report1_D11" );}catch(e){}
			alert( '若第2列第6行＞0，第10列第4行≤第4列第4行的绝对值-第9列第4行；若第2列第6行＜0，第10列第4行＝0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E10' ) )>0&&_parseValue( document.getElementById( 'report1_D10' ) )<0?-_parseValue( document.getElementById( 'report1_D10' ) )>_parseValue( document.getElementById( 'report1_E10' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_E10,report1_D10" );}catch(e){}
			alert( '第5行，若第3列＞0且第2列＜0，则第3列＜第2列的绝对值' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_D11' ) )<=0?_parseValue( document.getElementById( 'report1_L10' ) )==0:_parseValue( document.getElementById( 'report1_N10' ) )>=_parseValue( document.getElementById( 'report1_L10' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_N10,report1_L10,report1_D11" );}catch(e){}
			alert( '若第2列第6行＞0，第10列第5行≤第4列第5行的绝对值-第9列第5行；若第2列第6行＜0，第10列第5行＝0' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_D11' ) )>0?_parseValue( document.getElementById( 'report1_D11' ) )>=_parseValue( document.getElementById( 'report1_L11' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_D11,report1_L11" );}catch(e){}
			alert( '若第2列第6行＞0，第10列第6行≤第2列第6行' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_E11' ) )>0&&_parseValue( document.getElementById( 'report1_D11' ) )<0?-_parseValue( document.getElementById( 'report1_D11' ) )>_parseValue( document.getElementById( 'report1_E11' ) ):0==0 ) ) {
			try{ report1_markInvalidCell( "report1_E11,report1_D11" );}catch(e){}
			alert( '第6行，若第3列＞0且第2列＜0，则第3列＜第2列的绝对值' );
			return false;
		}
		return true;
	}

</script>
</div>
</td></tr></table>
<div style="display:none"><form id="report1_submitForm" method=post action="/WSSBSL/reportServlet.aspx?action=11" target="submitFrame">
	<input type=hidden name=fileName value="/ndsdsA/sb_ndsds_2014_fb22.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_74734">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2FndsdsA%2Fsb_ndsds_2014_fb22.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000015884336&sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466&reportParamsId=15115066323196680172197">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_NDSDS_2014_FB22;xmlName=ndsdsA/sb_ndsds_2014_fb22;pzxh=10014517000015884336;nsrsbh=91450107MA5KE0EQ2B;dataFromBz=0;raq=/ndsdsA/sb_ndsds_2014_fb22.raq;sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/ndsdsA/sb_ndsds_2014_fb22.raq&srcType=file&cachedId=10_1_1_176_8080_74734&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_NDSDS_2014_FB22%3BxmlName%3DndsdsA%2Fsb_ndsds_2014_fb22%3Bpzxh%3D10014517000015884336%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdataFromBz%3D0%3Braq%3D%2FndsdsA%2Fsb_ndsds_2014_fb22.raq%3Bsbuuid%3D4F35CE4F88AE666EB53FF3AE9DC76466%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

