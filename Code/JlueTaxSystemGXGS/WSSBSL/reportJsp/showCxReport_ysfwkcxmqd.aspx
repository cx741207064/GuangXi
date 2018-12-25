<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showCxReport_ysfwkcxmqd.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showCxReport_ysfwkcxmqd" %>

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
<script language=javascript src="/WSSBSL/FlineInput.js" charset="UTF-8">
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
	var report1_cachedId = "10_1_1_176_8080_74405";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2Fwhsyjsf%2Fysfwkcxmqd.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15115034211496805171889&cachedId=10_1_1_176_8080_74405&t_i_m_e=1511503421586" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2Fwhsyjsf%2Fysfwkcxmqd.raq&columns=0&srcType=file&reportParamsId=15115034211496805171889&cachedId=10_1_1_176_8080_74405&t_i_m_e=1511503421586" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2Fwhsyjsf%2Fysfwkcxmqd.raq&columns=0&srcType=file&reportParamsId=15115034211496805171889&cachedId=10_1_1_176_8080_74405&t_i_m_e=1511503421586";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2Fwhsyjsf%2Fysfwkcxmqd.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15115034211496805171889&cachedId=10_1_1_176_8080_74405&t_i_m_e=1511503421586";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2Fwhsyjsf%2Fysfwkcxmqd.raq&srcType=file&reportParamsId=15115034211496805171889&cachedId=10_1_1_176_8080_74405&t_i_m_e=1511503421586" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2Fwhsyjsf%2Fysfwkcxmqd.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15115034211496805171889&cachedId=10_1_1_176_8080_74405&t_i_m_e=1511503421586";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2Fwhsyjsf%2Fysfwkcxmqd.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15115034211496805171889&cachedId=10_1_1_176_8080_74405&t_i_m_e=1511503421586";
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
	function report1488413over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1488413out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_2 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_5 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:center;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#008000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E0E0E0;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:center;vertical-align:middle;font-family:宋体;font-size:16px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1488413out()" onmouseover="report1488413over()" rowCount=6 cols=9 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" isli=true nextRowNo=7 ndr="1,2,3,4,6" style="width:971px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:144px;"></col>
		<col style="width:224px;"></col>
		<col style="width:129px;"></col>
		<col style="width:119px;"></col>
		<col style="width:78px;"></col>
		<col style="width:112px;"></col>
		<col style="width:31px;"></col>
		<col style="width:134px;"></col>
	</colgroup>
	<tr rn="1" id=report1_row1 status="0" pid="report1" height=43 style="height:43px;">
		<td colSpan=8 id="report1_A1" colNo=1 sc="A1" value='10014517000033404947' onclick="_hideEditor()" class="report1_9">应税服务扣除项目清单</td>
		<td id="report1_I1" colNo=9 sc="I1" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="2" id=report1_row2 status="0" pid="report1" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A2" colNo=1 sc="A2" value='缴纳人识别号：' onclick="_hideEditor()" class="report1_2">缴纳人识别号：</td>
		<td colSpan=2 id="report1_C2" colNo=3 sc="C2" value='91450107MA5KE0EQ2B' onclick="_hideEditor()" class="report1_7">91450107MA5KE0EQ2B</td>
		<td id="report1_E2" colNo=5 sc="E2" value='填表日期：' onclick="_hideEditor()" class="report1_2">填表日期：</td>
		<td id="report1_F2" colNo=6 sc="F2" value='2017-11-02' onclick="_hideEditor()" class="report1_2">2017-11-02</td>
		<td colSpan=2 id="report1_G2" colNo=7 sc="G2" value='金额单位:元（列至角分）' onclick="_hideEditor()" class="report1_2">金额单位:元（列至角分）</td>
		<td id="report1_I2" colNo=9 sc="I2" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="3" id=report1_row3 status="0" pid="report1" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A3" colNo=1 sc="A3" value='缴纳人名称（公章）：' onclick="_hideEditor()" class="report1_2">缴纳人名称（公章）：</td>
		<td colSpan=2 id="report1_C3" colNo=3 sc="C3" value='广西龙森胜贸易有限公司' onclick="_hideEditor()" class="report1_4">广西龙森胜贸易有限公司</td>
		<td id="report1_E3" colNo=5 sc="E3" value='费款所属期：' onclick="_hideEditor()" class="report1_2">费款所属期：</td>
		<td id="report1_F3" colNo=6 sc="F3" value='2017-10-01' onclick="_hideEditor()" class="report1_2">2017-10-01</td>
		<td id="report1_G3" colNo=7 sc="G3" value='至' onclick="_hideEditor()" class="report1_2">至</td>
		<td id="report1_H3" colNo=8 sc="H3" value='2017-10-31' onclick="_hideEditor()" class="report1_2">2017-10-31</td>
		<td id="report1_I3" colNo=9 sc="I3" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="4" id=report1_row4 status="0" pid="report1" height=23 style="height:23px;">
		<td id="report1_A4" colNo=1 sc="A4" value='开票方纳税人识别号' onclick="_hideEditor()" class="report1_2">开票方纳税人识别号</td>
		<td id="report1_B4" colNo=2 sc="B4" value='开票方单位名称' onclick="_hideEditor()" class="report1_2">开票方单位名称</td>
		<td id="report1_C4" colNo=3 sc="C4" value='服务项目名称' onclick="_hideEditor()" class="report1_2">服务项目名称</td>
		<td id="report1_D4" colNo=4 sc="D4" value='凭证种类' onclick="_hideEditor()" class="report1_2">凭证种类</td>
		<td colSpan=2 id="report1_E4" colNo=5 sc="E4" value='凭证号码' onclick="_hideEditor()" class="report1_2">凭证号码</td>
		<td colSpan=2 id="report1_G4" colNo=7 sc="G4" value='金额' onclick="_hideEditor()" class="report1_2">金额</td>
		<td id="report1_I4" colNo=9 sc="I4" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="5" id=report1_row5 status="0" isDetail=true did="0|1|5|5|5" isFirst=true drows=1 pid="report1" height=23 style="height:23px;">
		<td id="report1_A5" colNo=1 sc="A5" modifiable=true writable=true editStyle="1" inputDataType="1" value='' _dv="report1_A5_dv()" onclick="_displayEditor()" class="report1_7"></td>
<script language=javascript>
	function report1_A5_dv() {
		if( ! ( checkNull(_xxs("A5").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('A5') );}catch(e){}
			alert( '请填写开票方纳税人识别号！如果有不需要填写的多余空行，请删除空行再保存！如果没有需要填写的项目，可以不保存该表进行申报！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_B5" colNo=2 sc="B5" modifiable=true writable=true editStyle="1" inputDataType="1" value='' _dv="report1_B5_dv()" onclick="_displayEditor()" class="report1_7"></td>
<script language=javascript>
	function report1_B5_dv() {
		if( ! ( checkNull(_xxs("B5").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('B5') );}catch(e){}
			alert( '请填写开票方单位名称！如果有不需要填写的多余空行，请删除空行再保存！如果没有需要填写的项目，可以不保存该表进行申报！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_C5" colNo=3 sc="C5" modifiable=true writable=true editStyle="1" inputDataType="1" value='' _dv="report1_C5_dv()" onclick="_displayEditor()" class="report1_7"></td>
<script language=javascript>
	function report1_C5_dv() {
		if( ! ( checkNull(_xxs("C5").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('C5') );}catch(e){}
			alert( '请填写服务项目名称！如果有不需要填写的多余空行，请删除空行再保存！如果没有需要填写的项目，可以不保存该表进行申报！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_D5" colNo=4 sc="D5" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 modifiable=true writable=true editStyle="2" inputDataType="1" editConfig="1,发票;2,财政票据;3,境外支付单据" value='' _dv="report1_D5_dv()" onclick="_displayEditor()" class="report1_7"></td>
<script language=javascript src="/WSSBSL/Fselect.js" charset="UTF-8"></script>
<script language=javascript>
	function report1_D5_dv() {
		if( ! ( checkNull(_xxs("D5").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('D5') );}catch(e){}
			alert( '请选择凭证种类！如果有不需要填写的多余空行，请删除空行再保存！如果没有需要填写的项目，可以不保存该表进行申报！' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_E5" colNo=5 sc="E5" modifiable=true writable=true editStyle="1" inputDataType="1" value='' _dv="report1_E5_dv()" onclick="_displayEditor()" class="report1_7"></td>
<script language=javascript>
	function report1_E5_dv() {
		if( ! ( checkNull(_xxs("E5").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('E5') );}catch(e){}
			alert( '请填写凭证代码！如果有不需要填写的多余空行，请删除空行再保存！如果没有需要填写的项目，可以不保存该表进行申报！' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_G5" colNo=7 sc="G5" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" onclick="_displayEditor()" class="report1_5">0.00</td>
		<td id="report1_I5" colNo=9 sc="I5" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="6" id=report1_row6 status="0" pid="report1" height=23 style="height:23px;">
		<td colSpan=6 id="report1_A6" colNo=1 sc="A6" value='合 计' onclick="_hideEditor()" class="report1_1">合&nbsp;计</td>
		<td colSpan=2 id="report1_G6" colNo=7 sc="G6" value='0.0' format="%230.00" digits="2" calc='(sum("G5")).toFixed(2)' onclick="_hideEditor()" class="report1_8">0.00</td>
		<td id="report1_I6" colNo=9 sc="I6" value='kpfRow-end' onclick="_hideEditor()" class="report1_6" style="display:none;">kpfRow-end</td>
	</tr>
</table><script language=javascript>
            
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
</script>
<script language=javascript>
	try{
		var init_report1 = function(){ _initSelectACell( document.getElementById( "report1" ) );}
		window.attachEvent( "onload", init_report1 );
	}catch(e){}
</script>
</div>
</td></tr></table>
<div style="display:none"><form id="report1_submitForm" method=post action="/WSSBSL/reportServlet.aspx?action=11" target="submitFrame">
	<input type=hidden name=fileName value="/whsyjsf/ysfwkcxmqd.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_74405">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showCxReport.jsp?raq=%2Fwhsyjsf%2Fysfwkcxmqd.raq&nsrsbh=91450107MA5KE0EQ2B&isTbBz=1&dataFromBz=0&pzxh=10014517000033404947&sbuuid=C7C0CD03C2E085563E857B2C6139D6BA&reportParamsId=15115034211496805171889">
	<input type=hidden name=backAndRefresh value="yes">
	<input type=hidden name=promptAfterSave value="yes">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_WHSYJSF_FB1;xmlName=whsyjsf/whsyjsf_fb1;pzxh=10014517000033404947;nsrsbh=91450107MA5KE0EQ2B;dynamicBz=Y;dataFromBz=0;raq=/whsyjsf/ysfwkcxmqd.raq;sbuuid=C7C0CD03C2E085563E857B2C6139D6BA;isTbBz=1">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/whsyjsf/ysfwkcxmqd.raq&srcType=file&cachedId=10_1_1_176_8080_74405&isScroll=0&backAndRefresh=yes&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_WHSYJSF_FB1%3BxmlName%3Dwhsyjsf%2Fwhsyjsf_fb1%3Bpzxh%3D10014517000033404947%3Bnsrsbh%3D91450107MA5KE0EQ2B%3BdynamicBz%3DY%3BdataFromBz%3D0%3Braq%3D%2Fwhsyjsf%2Fysfwkcxmqd.raq%3Bsbuuid%3DC7C0CD03C2E085563E857B2C6139D6BA%3BisTbBz%3D1&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

