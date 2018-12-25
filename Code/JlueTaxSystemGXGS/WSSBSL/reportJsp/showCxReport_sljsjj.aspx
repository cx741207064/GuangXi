<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_sljsjj.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_sljsjj" %>

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
	var report1_cachedId = "10_1_1_176_8080_73973";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2Fsljsjj%2Fsljsjj.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15114934536054306171468&cachedId=10_1_1_176_8080_73973&t_i_m_e=1511493453886" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2Fsljsjj%2Fsljsjj.raq&columns=0&srcType=file&reportParamsId=15114934536054306171468&cachedId=10_1_1_176_8080_73973&t_i_m_e=1511493453886" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2Fsljsjj%2Fsljsjj.raq&columns=0&srcType=file&reportParamsId=15114934536054306171468&cachedId=10_1_1_176_8080_73973&t_i_m_e=1511493453886";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2Fsljsjj%2Fsljsjj.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15114934536054306171468&cachedId=10_1_1_176_8080_73973&t_i_m_e=1511493453886";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2Fsljsjj%2Fsljsjj.raq&srcType=file&reportParamsId=15114934536054306171468&cachedId=10_1_1_176_8080_73973&t_i_m_e=1511493453886" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2Fsljsjj%2Fsljsjj.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15114934536054306171468&cachedId=10_1_1_176_8080_73973&t_i_m_e=1511493453886";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2Fsljsjj%2Fsljsjj.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15114934536054306171468&cachedId=10_1_1_176_8080_73973&t_i_m_e=1511493453886";
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
	function report1487991over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1487991out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:center;vertical-align:middle;font-family:黑体;font-size:22px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#006633;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_12 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_13 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_14 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_15 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_16 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_17 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1487991out()" onmouseover="report1487991over()" rowCount=8 cols=10 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:880px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:82px;"></col>
		<col style="width:47px;"></col>
		<col style="width:102px;"></col>
		<col style="width:83px;"></col>
		<col style="width:70px;"></col>
		<col style="width:137px;"></col>
		<col style="width:23px;"></col>
		<col style="width:151px;"></col>
		<col style="width:185px;"></col>
	</colgroup>
	<tr rn="1" height=42 style="height:42px;">
		<td colSpan=9 id="report1_A1" colNo=1 value='10014517000033404934' onclick="_hideEditor()" class="report1_6">水利建设基金申报表</td>
		<td id="report1_J1" colNo=10 value='' onclick="_hideEditor()" class="report1_6" style="display:none;"></td>
	</tr>
	<tr rn="2" height=23 style="height:23px;">
		<td id="report1_A2" colNo=1 value='纳税人识别号' onclick="_hideEditor()" class="report1_2">纳税人识别号</td>
		<td colSpan=3 id="report1_B2" colNo=2 value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_1">91450107MA5KE0EQ2B</td>
		<td id="report1_E2" colNo=5 value='填表日期' onclick="_hideEditor()" class="report1_8">填表日期</td>
		<td colSpan=2 id="report1_F2" colNo=6 value='2017-11-02' onclick="_hideEditor()" class="report1_8">2017-11-02</td>
		<td colSpan=2 id="report1_H2" colNo=8 value='单位：元（列至角分）' onclick="_hideEditor()" class="report1_1">单位：元（列至角分）</td>
		<td id="report1_J2" colNo=10 value='' onclick="_hideEditor()" class="report1_15" style="display:none;"></td>
	</tr>
	<tr rn="3" height=23 style="height:23px;">
		<td id="report1_A3" colNo=1 value='纳税人名称' onclick="_hideEditor()" class="report1_2">纳税人名称</td>
		<td colSpan=3 id="report1_B3" colNo=2 value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_1">广西龙森胜贸易有限公司</td>
		<td id="report1_E3" colNo=5 value='所属时期' onclick="_hideEditor()" class="report1_8">所属时期</td>
		<td id="report1_F3" colNo=6 value='2017-10-01' onclick="_hideEditor()" class="report1_8">2017-10-01</td>
		<td id="report1_G3" colNo=7 value='至' onclick="_hideEditor()" class="report1_8">至</td>
		<td colSpan=2 id="report1_H3" colNo=8 value='2017-10-31' onclick="_hideEditor()" class="report1_8">2017-10-31</td>
		<td id="report1_J3" colNo=10 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_15" style="display:none;"></td>
	</tr>
	<tr rn="4" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A4" colNo=1 value='销售收入' onclick="_hideEditor()" class="report1_8">销售收入</td>
		<td id="report1_C4" colNo=3 value='征收率' onclick="_hideEditor()" class="report1_8">征收率</td>
		<td colSpan=2 id="report1_D4" colNo=4 value='应征费额' onclick="_hideEditor()" class="report1_8">应征费额</td>
		<td colSpan=2 id="report1_F4" colNo=6 value='减免费额' onclick="_hideEditor()" class="report1_8">减免费额</td>
		<td id="report1_H4" colNo=8 value='应（补）退费额' onclick="_hideEditor()" class="report1_8">应（补）退费额</td>
		<td id="report1_I4" colNo=9 value='减免性质' onclick="_hideEditor()" class="report1_8">减免性质</td>
		<td id="report1_J4" colNo=10 value='' onclick="_hideEditor()" class="report1_12" style="display:none;"></td>
	</tr>
	<tr rn="5" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A5" colNo=1 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_14">0.00</td>
		<td id="report1_C5" colNo=3 value='0.0010' format="0.00%25" digits="4" onclick="_hideEditor()" class="report1_9">0.10%</td>
		<td colSpan=2 id="report1_D5" colNo=4 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_10">0.00</td>
		<td colSpan=2 id="report1_F5" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_10">0.00</td>
		<td id="report1_H5" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_10">0.00</td>
		<td id="report1_I5" colNo=9 ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="2" inputDataType="1" editConfig="0099129999,0099129999|其他" value='' onclick="_displayEditor()" class="report1_8"></td>
<script language=javascript src="/WSSBSL/Fselect.js" charset="UTF-8"></script>
		<td id="report1_J5" colNo=10 value='' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
	</tr>
	<tr rn="6" height=34 style="height:34px;">
		<td colSpan=2 id="report1_A6" colNo=1 value='   申报单位（盖章）：' onclick="_hideEditor()" class="report1_3">&nbsp;&nbsp;&nbsp;申报单位（盖章）：</td>
		<td colSpan=3 id="report1_C6" colNo=3 value='' onclick="_hideEditor()" class="report1_7"></td>
		<td id="report1_F6" colNo=6 value='填报人：' onclick="_hideEditor()" class="report1_7">填报人：</td>
		<td colSpan=3 id="report1_G6" colNo=7 value='' onclick="_hideEditor()" class="report1_16"></td>
		<td id="report1_J6" colNo=10 value='0' onclick="_hideEditor()" class="report1_3" style="display:none;">0</td>
	</tr>
	<tr rn="7" height=24 style="height:24px;">
		<td colSpan=9 id="report1_A7" colNo=1 value=' 1、本表适用于按销售收入或营业收入缴交水利建设基金的单位或个体工商业户。' onclick="_hideEditor()" class="report1_11">&nbsp;1、本表适用于按销售收入或营业收入缴交水利建设基金的单位或个体工商业户。</td>
		<td id="report1_J7" colNo=10 value='' onclick="_hideEditor()" class="report1_17" style="display:none;"></td>
	</tr>
	<tr rn="8" height=21 style="height:21px;">
		<td colSpan=9 id="report1_A8" colNo=1 value=' 2、本表一式两份。交征收机关审核后，一份留存征收机关，一份退缴交人。' onclick="_hideEditor()" class="report1_4">&nbsp;2、本表一式两份。交征收机关审核后，一份留存征收机关，一份退缴交人。</td>
		<td id="report1_J8" colNo=10 value='' onclick="_hideEditor()" class="report1_13" style="display:none;"></td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,A5,C5,A5,C5,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = _parseValue( document.getElementById( 'report1_A5' ) )*_parseValue( document.getElementById( 'report1_C5' ) )<0?0:(_parseValue( document.getElementById( 'report1_A5' ) )*_parseValue( document.getElementById( 'report1_C5' ) )).toFixed(5);
				document.getElementById( 'report1_D5' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_D5' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_D5' ) );
			}catch(e1){}
		}
		cells = ",,H3,C5,D5,A5,C5,A5,C5,H3,H3,A5,J3,D5,A5,C5,A5,C5,D5,A5,C5,A5,C5,H3,J6,A5,J3,D5,A5,C5,A5,C5,D5,A5,C5,A5,C5,A5,J3,J2,D5,A5,C5,A5,C5,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (parseInt(document.getElementById( 'report1_H3' ).getAttribute('value').substring(0,4))>2016 && _parseValue( document.getElementById( 'report1_C5' ) )>1?_parseValue( document.getElementById( 'report1_D5' ) )*0.5:parseInt(document.getElementById( 'report1_H3' ).getAttribute('value').substring(0,4))>=2018 && parseInt(document.getElementById( 'report1_H3' ).getAttribute('value').substring(0,4))<=2020?_parseValue( document.getElementById( 'report1_A5' ) )<=_parseValue( document.getElementById( 'report1_J3' ) )?_parseValue( document.getElementById( 'report1_D5' ) ):(_parseValue( document.getElementById( 'report1_D5' ) )*0.5):(parseInt(document.getElementById( 'report1_H3' ).getAttribute('value').substring(0,4))==2017 && _parseValue( document.getElementById( 'report1_J6' ) )>=7 ? (_parseValue( document.getElementById( 'report1_A5' ) )<=_parseValue( document.getElementById( 'report1_J3' ) )?_parseValue( document.getElementById( 'report1_D5' ) ):(_parseValue( document.getElementById( 'report1_D5' ) )*0.5)):(_parseValue( document.getElementById( 'report1_A5' ) )<=_parseValue( document.getElementById( 'report1_J3' ) ) && _parseValue( document.getElementById( 'report1_J2' ) )=="1"?_parseValue( document.getElementById( 'report1_D5' ) ):0))).toFixed(5);
				document.getElementById( 'report1_F5' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F5' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F5' ) );
			}catch(e1){}
		}
		cells = ",,D5,A5,C5,A5,C5,F5,H3,C5,D5,A5,C5,A5,C5,H3,H3,A5,J3,D5,A5,C5,A5,C5,D5,A5,C5,A5,C5,H3,J6,A5,J3,D5,A5,C5,A5,C5,D5,A5,C5,A5,C5,A5,J3,J2,D5,A5,C5,A5,C5,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_D5' ) )-_parseValue( document.getElementById( 'report1_F5' ) )).toFixed(2);
				document.getElementById( 'report1_H5' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H5' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H5' ) );
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
	<input type=hidden name=fileName value="/sljsjj/sljsjj.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_73973">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2Fsljsjj%2Fsljsjj.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000033404934&ssqq=2017-10-01&ssqz=2017-10-31&sbuuid=B8289B1EEB56C45E63566659F556B415&reportParamsId=15114934536054306171468">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=SB_SLJSJJ;xmlName=sljsjj/sb_sljsjj;ssqq=2017-10-01;pzxh=10014517000033404934;nsrsbh=91450107MA5KE0EQ2B;dataFromBz=0;raq=/sljsjj/sljsjj.raq;ssqz=2017-10-31;sbuuid=B8289B1EEB56C45E63566659F556B415;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/sljsjj/sljsjj.raq&srcType=file&cachedId=10_1_1_176_8080_73973&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DSB_SLJSJJ%3BxmlName%3Dsljsjj%2Fsb_sljsjj%3Bssqq%3D2017-10-01%3Bpzxh%3D10014517000033404934%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdataFromBz%3D0%3Braq%3D%2Fsljsjj%2Fsljsjj.raq%3Bssqz%3D2017-10-31%3Bsbuuid%3DB8289B1EEB56C45E63566659F556B415%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

