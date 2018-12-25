<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showReport_ybnsrFb5_bc.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showReport_ybnsrFb5_bc" %>

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

<input type="hidden" value="raq=/zzs2013Ybnsr/ybnsrFb5.raq;nsrsbh=450100399111430;sbzt=0;skssq=20171111;ssqq=2017-11-01;ssqz=2017-11-30;isTbBz=0" id="myParams" />
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
	var report1_cachedId = "10_1_1_176_8080_12269";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2Fzzs2013Ybnsr%2FybnsrFb5.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15127081682161149111972&cachedId=10_1_1_176_8080_12269&t_i_m_e=1512708168482" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2Fzzs2013Ybnsr%2FybnsrFb5.raq&columns=0&srcType=file&reportParamsId=15127081682161149111972&cachedId=10_1_1_176_8080_12269&t_i_m_e=1512708168482" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2Fzzs2013Ybnsr%2FybnsrFb5.raq&columns=0&srcType=file&reportParamsId=15127081682161149111972&cachedId=10_1_1_176_8080_12269&t_i_m_e=1512708168482";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2Fzzs2013Ybnsr%2FybnsrFb5.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15127081682161149111972&cachedId=10_1_1_176_8080_12269&t_i_m_e=1512708168482";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2Fzzs2013Ybnsr%2FybnsrFb5.raq&srcType=file&reportParamsId=15127081682161149111972&cachedId=10_1_1_176_8080_12269&t_i_m_e=1512708168482" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2Fzzs2013Ybnsr%2FybnsrFb5.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15127081682161149111972&cachedId=10_1_1_176_8080_12269&t_i_m_e=1512708168482";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2Fzzs2013Ybnsr%2FybnsrFb5.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15127081682161149111972&cachedId=10_1_1_176_8080_12269&t_i_m_e=1512708168482";
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
	function report1428493over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1428493out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_3 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_4 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:right;vertical-align:middle;font-family:Dialog;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:center;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:right;vertical-align:middle;font-family:Dialog;font-size:12px;color:#009900;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:center;vertical-align:middle;font-family:宋体;font-size:16px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1428493out()" onmouseover="report1428493over()" rowCount=7 cols=6 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" style="width:837px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:124px;"></col>
		<col style="width:204px;"></col>
		<col style="width:140px;"></col>
		<col style="width:128px;"></col>
		<col style="width:121px;"></col>
		<col style="width:120px;"></col>
	</colgroup>
	<tr rn="1" height=30 style="height:30px;">
		<td colSpan=6 id="report1_A1" colNo=1 value='46508100' onclick="_hideEditor()" class="report1_9">增值税纳税申报表附列资料（五）</td>
	</tr>
	<tr rn="2" height=20 style="height:20px;">
		<td colSpan=6 id="report1_A2" colNo=1 value='（不动产分期抵扣计算表）' onclick="_hideEditor()" class="report1_4">（不动产分期抵扣计算表）</td>
	</tr>
	<tr rn="3" height=22 style="height:22px;">
		<td id="report1_A3" colNo=1 value='纳税人识别号：' onclick="_hideEditor()" class="report1_6">纳税人识别号：</td>
		<td id="report1_B3" colNo=2 value='' onclick="_hideEditor()" class="report1_10"></td>
		<td id="report1_C3" colNo=3 value='填表日期： ' onclick="_hideEditor()" class="report1_1">填表日期：&nbsp;</td>
		<td id="report1_D3" colNo=4 value='2017-12-08' onclick="_hideEditor()" class="report1_1">2017-12-08</td>
		<td colSpan=2 id="report1_E3" colNo=5 value='金额单位:元至角分' onclick="_hideEditor()" class="report1_1">金额单位:元至角分</td>
	</tr>
	<tr rn="4" height=31 style="height:31px;">
		<td id="report1_A4" colNo=1 value='纳税人名称：' onclick="_hideEditor()" class="report1_6">纳税人名称：</td>
		<td id="report1_B4" colNo=2 value='' onclick="_hideEditor()" class="report1_2"></td>
		<td id="report1_C4" colNo=3 value='所属时期： ' onclick="_hideEditor()" class="report1_3">所属时期：&nbsp;</td>
		<td id="report1_D4" colNo=4 value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_E4" colNo=5 value='至' onclick="_hideEditor()" class="report1_1">至</td>
		<td id="report1_F4" colNo=6 value='' onclick="_hideEditor()" class="report1_1"></td>
	</tr>
	<tr rn="5" height=38 style="height:38px;">
		<td id="report1_A5" colNo=1 value='期初待抵扣不动产进项税额' onclick="_hideEditor()" class="report1_3">期初待抵扣不动产进<br>项税额</td>
		<td id="report1_B5" colNo=2 value='本期不动产进项税额增加额' onclick="_hideEditor()" class="report1_3">本期不动产进项税额增加额</td>
		<td id="report1_C5" colNo=3 value='本期可抵扣不动产进项税额' onclick="_hideEditor()" class="report1_3">本期可抵扣不动产进项税<br>额</td>
		<td id="report1_D5" colNo=4 value='本期转入的待抵扣不动产进项税额' onclick="_hideEditor()" class="report1_3">本期转入的待抵扣不动<br>产进项税额</td>
		<td id="report1_E5" colNo=5 value='本期转出的待抵扣不动产进项税额' onclick="_hideEditor()" class="report1_3">本期转出的待抵扣不<br>动产进项税额</td>
		<td id="report1_F5" colNo=6 value='期末待抵扣不动产进项税额' onclick="_hideEditor()" class="report1_3">期末待抵扣不动产进<br>项税额</td>
	</tr>
	<tr rn="6" height=23 style="height:23px;">
		<td id="report1_A6" colNo=1 value='1' onclick="_hideEditor()" class="report1_7">1</td>
		<td id="report1_B6" colNo=2 value='2' onclick="_hideEditor()" class="report1_7">2</td>
		<td id="report1_C6" colNo=3 value='3≤1+2+4' onclick="_hideEditor()" class="report1_7">3≤1+2+4</td>
		<td id="report1_D6" colNo=4 value='4' onclick="_hideEditor()" class="report1_7">4</td>
		<td id="report1_E6" colNo=5 value='5≤1+4' onclick="_hideEditor()" class="report1_7">5≤1+4</td>
		<td id="report1_F6" colNo=6 value='6=1+2-3+4-5' onclick="_hideEditor()" class="report1_7">6=1+2-3+4-5</td>
	</tr>
	<tr rn="7" height=23 style="height:23px;">
		<td id="report1_A7" colNo=1 value='0.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_B7" colNo=2 modifiable=true writable=true editStyle="1" inputDataType="2" value='12321.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">12321.00</td>
		<td id="report1_C7" colNo=3 modifiable=true writable=true editStyle="1" inputDataType="2" value='123213.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">123213.00</td>
		<td id="report1_D7" colNo=4 modifiable=true writable=true editStyle="1" inputDataType="2" value='12321.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">12321.00</td>
		<td id="report1_E7" colNo=5 modifiable=true writable=true editStyle="1" inputDataType="2" value='12321.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">12321.00</td>
		<td id="report1_F7" colNo=6 value='-110892.0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_8">-110892.00</td>
	</tr>
</table><script language=javascript>
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	function report1_autoCalc( cellName ) {
		var value, cells;
		cells = ",,A7,B7,C7,D7,E7,";
		if( cells.indexOf( ',' + cellName + ',' ) >= 0 ) {
			try { value = (_parseValue( document.getElementById( 'report1_A7' ) )+_parseValue( document.getElementById( 'report1_B7' ) )-_parseValue( document.getElementById( 'report1_C7' ) )+_parseValue( document.getElementById( 'report1_D7' ) )-_parseValue( document.getElementById( 'report1_E7' ) )).toFixed(2);
				document.getElementById( 'report1_F7' ).setAttribute( 'value', value + "" );
				document.getElementById( 'report1_F7' ).innerText = value + "";
				_formatCalcValue( document.getElementById( 'report1_F7' ) );
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
	<input type=hidden name=fileName value="/zzs2013Ybnsr/ybnsrFb5.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_12269">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showReport.jsp?raq=%2Fzzs2013Ybnsr%2FybnsrFb5.raq&nsrsbh=450100399111430&sbzt=0&skssq=20171111&ssqq=2017-11-01&ssqz=2017-11-30&isTbBz=0&reportParamsId=15127081682161149111972">
	<input type=hidden name=backAndRefresh value="/reportJsp/success.jsp">
	<input type=hidden name=promptAfterSave value="no">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_ZZS_2016_FB5;xmlName=zzs2013/zzs_ybnsr_fb5;sbzt=0;ssqq=2017-11-01;skssq=20171111;nsrsbh=450100399111430;raq=/zzs2013Ybnsr/ybnsrFb5.raq;ssqz=2017-11-30;isTbBz=0">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/zzs2013Ybnsr/ybnsrFb5.raq&srcType=file&cachedId=10_1_1_176_8080_12269&isScroll=0&backAndRefresh=/reportJsp/success.jsp&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_ZZS_2016_FB5%3BxmlName%3Dzzs2013%2Fzzs_ybnsr_fb5%3Bsbzt%3D0%3Bssqq%3D2017-11-01%3Bskssq%3D20171111%3Bnsrsbh%3D450100399111430%3Braq%3D%2Fzzs2013Ybnsr%2FybnsrFb5.raq%3Bssqz%3D2017-11-30%3BisTbBz%3D0&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

