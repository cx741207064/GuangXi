<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_sb_ndsds_2014_fb12.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_sb_ndsds_2014_fb12" %>

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
	var report1_cachedId = "10_1_1_176_8080_74731";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2FndsdsA%2Fsb_ndsds_2014_fb12.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15115066322725249172194&cachedId=10_1_1_176_8080_74731&t_i_m_e=1511506632475" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2FndsdsA%2Fsb_ndsds_2014_fb12.raq&columns=0&srcType=file&reportParamsId=15115066322725249172194&cachedId=10_1_1_176_8080_74731&t_i_m_e=1511506632475" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2FndsdsA%2Fsb_ndsds_2014_fb12.raq&columns=0&srcType=file&reportParamsId=15115066322725249172194&cachedId=10_1_1_176_8080_74731&t_i_m_e=1511506632475";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2FndsdsA%2Fsb_ndsds_2014_fb12.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15115066322725249172194&cachedId=10_1_1_176_8080_74731&t_i_m_e=1511506632475";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2FndsdsA%2Fsb_ndsds_2014_fb12.raq&srcType=file&reportParamsId=15115066322725249172194&cachedId=10_1_1_176_8080_74731&t_i_m_e=1511506632475" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_fb12.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15115066322725249172194&cachedId=10_1_1_176_8080_74731&t_i_m_e=1511506632475";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2FndsdsA%2Fsb_ndsds_2014_fb12.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15115066322725249172194&cachedId=10_1_1_176_8080_74731&t_i_m_e=1511506632475";
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
	function report1488712over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1488712out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;line-height:16px;}
	.report1_4 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:left;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_12 { text-align:center;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:transparent;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1488712out()" onmouseover="report1488712over()" rowCount=17 cols=9 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:1051px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:48px;"></col>
		<col style="width:267px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:105px;"></col>
		<col style="width:106px;"></col>
	</colgroup>
	<tr rn="1" height=30 style="height:30px;">
		<td colSpan=8 id="report1_A1" colNo=1 value='10014517000015884336' onclick="_hideEditor()" class="report1_11">A105050</td>
		<td id="report1_I1" colNo=9 bkj="true" value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_8"></td>
	</tr>
	<tr rn="2" height=30 style="height:30px;">
		<td colSpan=8 id="report1_A2" colNo=1 value='职工薪酬纳税调整明细表' onclick="_hideEditor()" class="report1_12">职工薪酬纳税调整明细表</td>
		<td id="report1_I2" colNo=9 bkj="true" value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_8"></td>
	</tr>
	<tr rn="3" height=41 style="height:41px;">
		<td rowSpan=2 id="report1_A3" colNo=1 value='行次' onclick="_hideEditor()" class="report1_1">行次</td>
		<td rowSpan=2 id="report1_B3" colNo=2 value='项        目' onclick="_hideEditor()" class="report1_1">项&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目</td>
		<td id="report1_C3" colNo=3 value='账载金额' onclick="_hideEditor()" class="report1_1">账载金额</td>
		<td id="report1_D3" colNo=4 value='税收规定扣除率' onclick="_hideEditor()" class="report1_3">税收规定扣除率</td>
		<td id="report1_E3" colNo=5 value='以前年度累计结转扣除额' onclick="_hideEditor()" class="report1_3">以前年度累计结转<br>扣除额</td>
		<td id="report1_F3" colNo=6 value='税收金额' onclick="_hideEditor()" class="report1_1">税收金额</td>
		<td id="report1_G3" colNo=7 value='纳税调整金额' onclick="_hideEditor()" class="report1_1">纳税调整金额</td>
		<td id="report1_H3" colNo=8 value='累计结转以后年度扣除额' onclick="_hideEditor()" class="report1_3">累计结转以后年度<br>扣除额</td>
		<td id="report1_I3" colNo=9 bkj="true" value='2017-05-08' onclick="_hideEditor()" class="report1_4"></td>
	</tr>
	<tr rn="4" height=20 style="height:20px;">
		<td id="report1_C4" colNo=3 value='1' onclick="_hideEditor()" class="report1_1">1</td>
		<td id="report1_D4" colNo=4 value='2' onclick="_hideEditor()" class="report1_10">2</td>
		<td id="report1_E4" colNo=5 value='3' onclick="_hideEditor()" class="report1_10">3</td>
		<td id="report1_F4" colNo=6 value='4' onclick="_hideEditor()" class="report1_10">4</td>
		<td id="report1_G4" colNo=7 value='5(1-4)' onclick="_hideEditor()" class="report1_10">5(1-4)</td>
		<td id="report1_H4" colNo=8 value='6(1+3-4)' onclick="_hideEditor()" class="report1_10">6(1+3-4)</td>
		<td id="report1_I4" colNo=9 bkj="true" value='2016-01-01' onclick="_hideEditor()" class="report1_4"></td>
	</tr>
	<tr rn="5" height=20 style="height:20px;">
		<td id="report1_A5" colNo=1 value='1' onclick="_hideEditor()" class="report1_1">1</td>
		<td id="report1_B5" colNo=2 value='一、工资薪金支出' onclick="_hideEditor()" class="report1_9">一、工资薪金支出</td>
		<td id="report1_C5" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='13200.0' format="%230.00" digits="2" dataValid="report1_5_3_dataValid()" onclick="_displayEditor()" class="report1_5">13200.00</td>
<script language=javascript>
	function report1_5_3_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_C5' ) )>=_parseValue( document.getElementById( 'report1_C6' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_C6,report1_C5" );}catch(e){}
			alert( '第1行1列>=第2行1列' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_D5" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E5" colNo=5 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_F5" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='13200.0' format="%230.00" digits="2" dataValid="report1_5_6_dataValid()" onclick="_displayEditor()" class="report1_5">13200.00</td>
<script language=javascript>
	function report1_5_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F5' ) )>=_parseValue( document.getElementById( 'report1_F6' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_F5,report1_F6" );}catch(e){}
			alert( '第4行1列>=第4行1列' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G5" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_H5" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_I5" colNo=9 bkj="true" value='2016-12-31' onclick="_hideEditor()" class="report1_4"></td>
	</tr>
	<tr rn="6" height=20 style="height:20px;">
		<td id="report1_A6" colNo=1 value='2' onclick="_hideEditor()" class="report1_1">2</td>
		<td id="report1_B6" colNo=2 value='    其中：股权激励' onclick="_hideEditor()" class="report1_9">&nbsp;&nbsp;&nbsp;&nbsp;其中：股权激励</td>
		<td id="report1_C6" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_D6" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E6" colNo=5 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_F6" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_G6" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_H6" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_I6" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_4"></td>
	</tr>
	<tr rn="7" height=20 style="height:20px;">
		<td id="report1_A7" colNo=1 value='3' onclick="_hideEditor()" class="report1_1">3</td>
		<td id="report1_B7" colNo=2 value='二、职工福利费支出' onclick="_hideEditor()" class="report1_9">二、职工福利费支出</td>
		<td id="report1_C7" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_D7" colNo=4 value='0.14' format="%230.0000%25" digits="6" dataValid="report1_7_4_dataValid()" onclick="_hideEditor()" class="report1_7">14.0000%</td>
<script language=javascript>
	function report1_7_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_D7' ) )>=0&&_parseValue( document.getElementById( 'report1_D7' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_D7" );}catch(e){}
			alert( '0=<第2列<=1' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E7" colNo=5 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_F7" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_G7" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_H7" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_I7" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_4"></td>
	</tr>
	<tr rn="8" height=20 style="height:20px;">
		<td id="report1_A8" colNo=1 value='4' onclick="_hideEditor()" class="report1_1">4</td>
		<td id="report1_B8" colNo=2 value='三、职工教育经费支出' onclick="_hideEditor()" class="report1_9">三、职工教育经费支出</td>
		<td id="report1_C8" colNo=3 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_D8" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E8" colNo=5 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_F8" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_G8" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_H8" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_I8" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_4"></td>
	</tr>
	<tr rn="9" height=20 style="height:20px;">
		<td id="report1_A9" colNo=1 value='5' onclick="_hideEditor()" class="report1_1">5</td>
		<td id="report1_B9" colNo=2 value='    其中：按税收规定比例扣除的职工教育经费' onclick="_hideEditor()" class="report1_9">&nbsp;&nbsp;&nbsp;&nbsp;其中：按税收规定比例扣除的职工教育经费</td>
		<td id="report1_C9" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_D9" colNo=4 ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 modifiable=true writable=true editStyle="2" inputDataType="2" editConfig="0.025,2.5000%;0.08,8.0000%" value='0.025' format="%230.0000%25" digits="6" dataValid="report1_9_4_dataValid()" onclick="_displayEditor()" class="report1_5">2.5000%</td>
<script language=javascript src="/WSSBSL/Fselect.js" charset="UTF-8"></script>
<script language=javascript>
	function report1_9_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_D9' ) )>=0&&_parseValue( document.getElementById( 'report1_D9' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_D9" );}catch(e){}
			alert( '0=<第2列<=1' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E9" colNo=5 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_F9" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_G9" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_H9" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_I9" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_4"></td>
	</tr>
	<tr rn="10" height=20 style="height:20px;">
		<td id="report1_A10" colNo=1 value='6' onclick="_hideEditor()" class="report1_1">6</td>
		<td id="report1_B10" colNo=2 value='          按税收规定全额扣除的职工培训费用' onclick="_hideEditor()" class="report1_9">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;按税收规定全额扣除的职工培训费用</td>
		<td id="report1_C10" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_D10" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='1.0' format="%230.0000%25" digits="6" dataValid="report1_10_4_dataValid()" onclick="_displayEditor()" class="report1_5">100.0000%</td>
<script language=javascript>
	function report1_10_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_D10' ) )>=0&&_parseValue( document.getElementById( 'report1_D10' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_D10" );}catch(e){}
			alert( '0=<第2列<=1' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E10" colNo=5 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_F10" colNo=6 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_G10" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_H10" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_I10" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_4"></td>
	</tr>
	<tr rn="11" height=20 style="height:20px;">
		<td id="report1_A11" colNo=1 value='7' onclick="_hideEditor()" class="report1_1">7</td>
		<td id="report1_B11" colNo=2 value='四、工会经费支出' onclick="_hideEditor()" class="report1_9">四、工会经费支出</td>
		<td id="report1_C11" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_D11" colNo=4 value='0.02' format="%230.0000%25" digits="6" dataValid="report1_11_4_dataValid()" onclick="_hideEditor()" class="report1_7">2.0000%</td>
<script language=javascript>
	function report1_11_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_D11' ) )>=0&&_parseValue( document.getElementById( 'report1_D11' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_D11" );}catch(e){}
			alert( '0=<第2列<=1' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E11" colNo=5 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_F11" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_G11" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_H11" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_I11" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_4"></td>
	</tr>
	<tr rn="12" height=20 style="height:20px;">
		<td id="report1_A12" colNo=1 value='8' onclick="_hideEditor()" class="report1_1">8</td>
		<td id="report1_B12" colNo=2 value='五、各类基本社会保障性缴款' onclick="_hideEditor()" class="report1_9">五、各类基本社会保障性缴款</td>
		<td id="report1_C12" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_D12" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E12" colNo=5 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_F12" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_G12" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_H12" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_I12" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_4"></td>
	</tr>
	<tr rn="13" height=20 style="height:20px;">
		<td id="report1_A13" colNo=1 value='9' onclick="_hideEditor()" class="report1_1">9</td>
		<td id="report1_B13" colNo=2 value='六、住房公积金' onclick="_hideEditor()" class="report1_9">六、住房公积金</td>
		<td id="report1_C13" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_D13" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E13" colNo=5 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_F13" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_G13" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_H13" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_I13" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_4"></td>
	</tr>
	<tr rn="14" height=20 style="height:20px;">
		<td id="report1_A14" colNo=1 value='10' onclick="_hideEditor()" class="report1_1">10</td>
		<td id="report1_B14" colNo=2 value='七、补充养老保险' onclick="_hideEditor()" class="report1_9">七、补充养老保险</td>
		<td id="report1_C14" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_D14" colNo=4 value='0.05' format="%230.0000%25" digits="6" dataValid="report1_14_4_dataValid()" onclick="_hideEditor()" class="report1_7">5.0000%</td>
<script language=javascript>
	function report1_14_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_D14' ) )>=0&&_parseValue( document.getElementById( 'report1_D14' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_D14" );}catch(e){}
			alert( '0=<第2列<=1' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E14" colNo=5 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_F14" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_G14" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_H14" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_I14" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_4"></td>
	</tr>
	<tr rn="15" height=20 style="height:20px;">
		<td id="report1_A15" colNo=1 value='11' onclick="_hideEditor()" class="report1_1">11</td>
		<td id="report1_B15" colNo=2 value='八、补充医疗保险' onclick="_hideEditor()" class="report1_9">八、补充医疗保险</td>
		<td id="report1_C15" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_D15" colNo=4 value='0.0' format="%230.0000%25" digits="6" dataValid="report1_15_4_dataValid()" onclick="_hideEditor()" class="report1_7">5.0000%</td>
<script language=javascript>
	function report1_15_4_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_D15' ) )>=0&&_parseValue( document.getElementById( 'report1_D15' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_D15" );}catch(e){}
			alert( '0=<第2列<=1' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E15" colNo=5 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_F15" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.05' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.05</td>
		<td id="report1_G15" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_H15" colNo=8 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_I15" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_4"></td>
	</tr>
	<tr rn="16" height=20 style="height:20px;">
		<td id="report1_A16" colNo=1 value='12' onclick="_hideEditor()" class="report1_1">12</td>
		<td id="report1_B16" colNo=2 value='九、其他' onclick="_hideEditor()" class="report1_9">九、其他</td>
		<td id="report1_C16" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_D16" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E16" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_F16" colNo=6 modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" dataValid="report1_16_6_dataValid()" onclick="_displayEditor()" class="report1_5">0.00</td>
<script language=javascript>
	function report1_16_6_dataValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_F16' ) )<=_parseValue( document.getElementById( 'report1_C16' ) )+_parseValue( document.getElementById( 'report1_E16' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_C16,report1_E16,report1_F16" );}catch(e){}
			alert( '第12行4列<=第12行1列+第12行3列' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G16" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_H16" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_7">0.00</td>
		<td id="report1_I16" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_4"></td>
	</tr>
	<tr rn="17" height=20 style="height:20px;">
		<td id="report1_A17" colNo=1 value='13' onclick="_hideEditor()" class="report1_1">13</td>
		<td id="report1_B17" colNo=2 value='合计（1+3+4+7+8+9+10+11+12）' onclick="_hideEditor()" class="report1_9">合计（1+3+4+7+8+9+10+11+12）</td>
		<td id="report1_C17" colNo=3 value='13200.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">13200.00</td>
		<td id="report1_D17" colNo=4 value='' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_6">--</td>
		<td id="report1_E17" colNo=5 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_F17" colNo=6 value='13200.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">13200.00</td>
		<td id="report1_G17" colNo=7 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_H17" colNo=8 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2">0.00</td>
		<td id="report1_I17" colNo=9 bkj="true" value='' onclick="_hideEditor()" class="report1_4"></td>
	</tr>
</table><script language=javascript>
            
    _initInput(document.getElementById('report1'));
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,C5,F5,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C5' ) )-_parseValue( document.getElementById( 'report1_F5' ) )).toFixed(2);
				document.getElementById( 'report1_G5' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G5' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G5' ) );
			}catch(e1){}
		}
		cells = ",,C6,F6,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C6' ) )-_parseValue( document.getElementById( 'report1_F6' ) )).toFixed(2);
				document.getElementById( 'report1_G6' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G6' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G6' ) );
			}catch(e1){}
		}
		cells = ",,C7,F7,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C7' ) )-_parseValue( document.getElementById( 'report1_F7' ) )).toFixed(2);
				document.getElementById( 'report1_G7' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G7' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G7' ) );
			}catch(e1){}
		}
		cells = ",,C9,C10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C9' ) )+_parseValue( document.getElementById( 'report1_C10' ) )).toFixed(2);
				document.getElementById( 'report1_C8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_C8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_C8' ) );
			}catch(e1){}
		}
		cells = ",,E9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E9' ) )).toFixed(2);
				document.getElementById( 'report1_E8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E8' ) );
			}catch(e1){}
		}
		cells = ",,C9,F9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C9' ) )-_parseValue( document.getElementById( 'report1_F9' ) )).toFixed(2);
				document.getElementById( 'report1_G9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G9' ) );
			}catch(e1){}
		}
		cells = ",,C9,E9,F9,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C9' ) )+_parseValue( document.getElementById( 'report1_E9' ) )-_parseValue( document.getElementById( 'report1_F9' ) )).toFixed(2);
				document.getElementById( 'report1_H9' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H9' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H9' ) );
			}catch(e1){}
		}
		cells = ",,C10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C10' ) )).toFixed(2);
				document.getElementById( 'report1_F10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F10' ) );
			}catch(e1){}
		}
		cells = ",,C10,F10,C10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C10' ) )-_parseValue( document.getElementById( 'report1_F10' ) )).toFixed(2);
				document.getElementById( 'report1_G10' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G10' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G10' ) );
			}catch(e1){}
		}
		cells = ",,C11,F11,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C11' ) )-_parseValue( document.getElementById( 'report1_F11' ) )).toFixed(2);
				document.getElementById( 'report1_G11' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G11' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G11' ) );
			}catch(e1){}
		}
		cells = ",,C12,F12,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C12' ) )-_parseValue( document.getElementById( 'report1_F12' ) )).toFixed(2);
				document.getElementById( 'report1_G12' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G12' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G12' ) );
			}catch(e1){}
		}
		cells = ",,C13,F13,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C13' ) )-_parseValue( document.getElementById( 'report1_F13' ) )).toFixed(2);
				document.getElementById( 'report1_G13' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G13' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G13' ) );
			}catch(e1){}
		}
		cells = ",,C14,F14,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C14' ) )-_parseValue( document.getElementById( 'report1_F14' ) )).toFixed(2);
				document.getElementById( 'report1_G14' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G14' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G14' ) );
			}catch(e1){}
		}
		cells = ",,C15,F15,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C15' ) )-_parseValue( document.getElementById( 'report1_F15' ) )).toFixed(2);
				document.getElementById( 'report1_G15' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G15' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G15' ) );
			}catch(e1){}
		}
		cells = ",,C16,F16,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C16' ) )-_parseValue( document.getElementById( 'report1_F16' ) )).toFixed(2);
				document.getElementById( 'report1_G16' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G16' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G16' ) );
			}catch(e1){}
		}
		cells = ",,C5,C7,C8,C9,C10,C11,C12,C13,C14,C15,C16,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C5' ) )+_parseValue( document.getElementById( 'report1_C7' ) )+_parseValue( document.getElementById( 'report1_C8' ) )+_parseValue( document.getElementById( 'report1_C11' ) )+_parseValue( document.getElementById( 'report1_C12' ) )+_parseValue( document.getElementById( 'report1_C13' ) )+_parseValue( document.getElementById( 'report1_C14' ) )+_parseValue( document.getElementById( 'report1_C15' ) )+_parseValue( document.getElementById( 'report1_C16' ) )).toFixed(2);
				document.getElementById( 'report1_C17' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_C17' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_C17' ) );
			}catch(e1){}
		}
		cells = ",,E8,E9,E16,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_E8' ) )+_parseValue( document.getElementById( 'report1_E16' ) )).toFixed(2);
				document.getElementById( 'report1_E17' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_E17' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_E17' ) );
			}catch(e1){}
		}
		cells = ",,F9,F10,C10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F9' ) )+_parseValue( document.getElementById( 'report1_F10' ) )).toFixed(2);
				document.getElementById( 'report1_F8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F8' ) );
			}catch(e1){}
		}
		cells = ",,C8,C9,C10,F8,F9,F10,C10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C8' ) )-_parseValue( document.getElementById( 'report1_F8' ) )).toFixed(2);
				document.getElementById( 'report1_G8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G8' ) );
			}catch(e1){}
		}
		cells = ",,C8,C9,C10,E8,E9,F8,F9,F10,C10,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_C8' ) )+_parseValue( document.getElementById( 'report1_E8' ) )-_parseValue( document.getElementById( 'report1_F8' ) )).toFixed(2);
				document.getElementById( 'report1_H8' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H8' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H8' ) );
			}catch(e1){}
		}
		cells = ",,F5,F7,F8,F9,F10,C10,F11,F12,F13,F14,F15,F16,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_F5' ) )+_parseValue( document.getElementById( 'report1_F7' ) )+_parseValue( document.getElementById( 'report1_F8' ) )+_parseValue( document.getElementById( 'report1_F11' ) )+_parseValue( document.getElementById( 'report1_F12' ) )+_parseValue( document.getElementById( 'report1_F13' ) )+_parseValue( document.getElementById( 'report1_F14' ) )+_parseValue( document.getElementById( 'report1_F15' ) )+_parseValue( document.getElementById( 'report1_F16' ) )).toFixed(2);
				document.getElementById( 'report1_F17' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F17' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F17' ) );
			}catch(e1){}
		}
		cells = ",,G5,C5,F5,G7,C7,F7,G8,C8,C9,C10,F8,F9,F10,C10,G11,C11,F11,G12,C12,F12,G13,C13,F13,G14,C14,F14,G15,C15,F15,G16,C16,F16,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_G5' ) )+_parseValue( document.getElementById( 'report1_G7' ) )+_parseValue( document.getElementById( 'report1_G8' ) )+_parseValue( document.getElementById( 'report1_G11' ) )+_parseValue( document.getElementById( 'report1_G12' ) )+_parseValue( document.getElementById( 'report1_G13' ) )+_parseValue( document.getElementById( 'report1_G14' ) )+_parseValue( document.getElementById( 'report1_G15' ) )+_parseValue( document.getElementById( 'report1_G16' ) )).toFixed(2);
				document.getElementById( 'report1_G17' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_G17' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_G17' ) );
			}catch(e1){}
		}
		cells = ",,H8,C8,C9,C10,E8,E9,F8,F9,F10,C10,H16,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_H8' ) )+_parseValue( document.getElementById( 'report1_H16' ) )).toFixed(2);
				document.getElementById( 'report1_H17' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_H17' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_H17' ) );
			}catch(e1){}
		}
		try{ group_autoCalc( 'report1_' + cellName ); }catch(e){}
	}

	function report1_checkValid() {
		if( ! ( _parseValue( document.getElementById( 'report1_C5' ) )>=_parseValue( document.getElementById( 'report1_C6' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_C6,report1_C5" );}catch(e){}
			alert( '第1行1列>=第2行1列' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F5' ) )>=_parseValue( document.getElementById( 'report1_F6' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_F5,report1_F6" );}catch(e){}
			alert( '第4行1列>=第4行1列' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_D7' ) )>=0&&_parseValue( document.getElementById( 'report1_D7' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_D7" );}catch(e){}
			alert( '0=<第2列<=1' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_D9' ) )>=0&&_parseValue( document.getElementById( 'report1_D9' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_D9" );}catch(e){}
			alert( '0=<第2列<=1' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_D10' ) )>=0&&_parseValue( document.getElementById( 'report1_D10' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_D10" );}catch(e){}
			alert( '0=<第2列<=1' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_D11' ) )>=0&&_parseValue( document.getElementById( 'report1_D11' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_D11" );}catch(e){}
			alert( '0=<第2列<=1' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_D14' ) )>=0&&_parseValue( document.getElementById( 'report1_D14' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_D14" );}catch(e){}
			alert( '0=<第2列<=1' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_D15' ) )>=0&&_parseValue( document.getElementById( 'report1_D15' ) )<=1 ) ) {
			try{ report1_markInvalidCell( "report1_D15" );}catch(e){}
			alert( '0=<第2列<=1' );
			return false;
		}
		if( ! ( _parseValue( document.getElementById( 'report1_F16' ) )<=_parseValue( document.getElementById( 'report1_C16' ) )+_parseValue( document.getElementById( 'report1_E16' ) ) ) ) {
			try{ report1_markInvalidCell( "report1_C16,report1_E16,report1_F16" );}catch(e){}
			alert( '第12行4列<=第12行1列+第12行3列' );
			return false;
		}
		return true;
	}

</script>
</div>
</td></tr></table>
<div style="display:none"><form id="report1_submitForm" method=post action="/WSSBSL/reportServlet.aspx?action=11" target="submitFrame">
	<input type=hidden name=fileName value="/ndsdsA/sb_ndsds_2014_fb12.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_74731">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2FndsdsA%2Fsb_ndsds_2014_fb12.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000015884336&sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466&reportParamsId=15115066322725249172194">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_NDSDS_2014_FB12;xmlName=ndsdsA/sb_ndsds_2014_fb12;pzxh=10014517000015884336;nsrsbh=91450107MA5KE0EQ2B;dataFromBz=0;raq=/ndsdsA/sb_ndsds_2014_fb12.raq;sbuuid=4F35CE4F88AE666EB53FF3AE9DC76466;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/ndsdsA/sb_ndsds_2014_fb12.raq&srcType=file&cachedId=10_1_1_176_8080_74731&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_NDSDS_2014_FB12%3BxmlName%3DndsdsA%2Fsb_ndsds_2014_fb12%3Bpzxh%3D10014517000015884336%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdataFromBz%3D0%3Braq%3D%2FndsdsA%2Fsb_ndsds_2014_fb12.raq%3Bsbuuid%3D4F35CE4F88AE666EB53FF3AE9DC76466%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

