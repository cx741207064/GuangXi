<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showReport_hznsqyzzsfpb.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showReport_hznsqyzzsfpb" %>

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

<input type="hidden" value="raq=/zzs2013Ybnsr/hznsqyzzsfpb.raq;nsrsbh=450100399111430;sbzt=0;skssq=20171111;ssqq=2017-11-01;ssqz=2017-11-30;isTbBz=0" id="myParams" />
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
	var report1_cachedId = "10_1_1_176_8080_41508";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet4.aspx?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2Fzzs2013Ybnsr%2Fhznsqyzzsfpb.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15123563588973383140645&cachedId=10_1_1_176_8080_41508&t_i_m_e=1512356359490" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet25.aspx?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2Fzzs2013Ybnsr%2Fhznsqyzzsfpb.raq&columns=0&srcType=file&reportParamsId=15123563588973383140645&cachedId=10_1_1_176_8080_41508&t_i_m_e=1512356359490" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2Fzzs2013Ybnsr%2Fhznsqyzzsfpb.raq&columns=0&srcType=file&reportParamsId=15123563588973383140645&cachedId=10_1_1_176_8080_41508&t_i_m_e=1512356359490";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2Fzzs2013Ybnsr%2Fhznsqyzzsfpb.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15123563588973383140645&cachedId=10_1_1_176_8080_41508&t_i_m_e=1512356359490";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2Fzzs2013Ybnsr%2Fhznsqyzzsfpb.raq&srcType=file&reportParamsId=15123563588973383140645&cachedId=10_1_1_176_8080_41508&t_i_m_e=1512356359490" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2Fzzs2013Ybnsr%2Fhznsqyzzsfpb.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15123563588973383140645&cachedId=10_1_1_176_8080_41508&t_i_m_e=1512356359490";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2Fzzs2013Ybnsr%2Fhznsqyzzsfpb.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15123563588973383140645&cachedId=10_1_1_176_8080_41508&t_i_m_e=1512356359490";
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
	function report1457167over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1457167out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_2 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#009B00;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#009B00;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;line-height:16px;}
	.report1_7 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#009B00;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_12 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_13 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#009B00;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_14 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#0000FF;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_15 { text-align:center;vertical-align:middle;font-family:宋体;font-size:18px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_16 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1457167out()" onmouseover="report1457167over()" rowCount=14 cols=17 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" isli=true nextRowNo=15 ndr="1,2,3,4,5,6,7,8,9,10,11,12,14" style="width:1499px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:76px;"></col>
		<col style="width:167px;"></col>
		<col style="width:102px;"></col>
		<col style="width:140px;"></col>
		<col style="width:125px;"></col>
		<col style="width:100px;"></col>
		<col style="width:81px;"></col>
		<col style="width:66px;"></col>
		<col style="width:64px;"></col>
		<col style="width:88px;"></col>
		<col style="width:81px;"></col>
		<col style="width:87px;"></col>
		<col style="width:84px;"></col>
		<col style="width:80px;"></col>
		<col style="width:78px;"></col>
		<col style="width:80px;"></col>
	</colgroup>
	<tr rn="1" id=report1_row1 status="0" pid="report1" height=23 style="height:23px;">
		<td rowSpan=2 colSpan=16 id="report1_A1" colNo=1 sc="A1" value='' onclick="_hideEditor()" class="report1_15">汇总纳税企业增值税分配表</td>
		<td id="report1_Q1" colNo=17 bkj="true" sc="Q1" value='' onclick="_hideEditor()" class="report1_8" style="display:none;"></td>
	</tr>
	<tr rn="2" id=report1_row2 status="0" pid="report1" height=23 style="height:23px;">
		<td id="report1_Q2" colNo=17 bkj="true" sc="Q2" value='' onclick="_hideEditor()" class="report1_8" style="display:none;"></td>
	</tr>
	<tr rn="3" id=report1_row3 status="0" pid="report1" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A3" colNo=1 sc="A3" value='总机构纳税人名称' onclick="_hideEditor()" class="report1_2">总机构纳税人名称</td>
		<td colSpan=2 id="report1_C3" colNo=3 sc="C3" value='' onclick="_hideEditor()" class="report1_6"></td>
		<td colSpan=2 id="report1_E3" colNo=5 sc="E3" value='营业地址' onclick="_hideEditor()" class="report1_2">营业地址</td>
		<td colSpan=3 id="report1_G3" colNo=7 sc="G3" value='南宁市那洪大道38号西四栋58号' onclick="_hideEditor()" class="report1_6">南宁市那洪大道38号西四栋58号</td>
		<td colSpan=4 id="report1_J3" colNo=10 sc="J3" value='联系电话' onclick="_hideEditor()" class="report1_2">联系电话</td>
		<td colSpan=3 id="report1_N3" colNo=14 sc="N3" value='13768016394' onclick="_hideEditor()" class="report1_2">13768016394</td>
		<td id="report1_Q3" colNo=17 bkj="true" sc="Q3" value='' onclick="_hideEditor()" class="report1_12" style="display:none;"></td>
	</tr>
	<tr rn="4" id=report1_row4 status="0" pid="report1" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A4" colNo=1 sc="A4" value='法定代表人姓名' onclick="_hideEditor()" class="report1_2">法定代表人姓名</td>
		<td colSpan=2 id="report1_C4" colNo=3 sc="C4" value='李品卫' onclick="_hideEditor()" class="report1_2">李品卫</td>
		<td colSpan=2 id="report1_E4" colNo=5 sc="E4" value='开户银行' onclick="_hideEditor()" class="report1_2">开户银行</td>
		<td colSpan=3 id="report1_G4" colNo=7 sc="G4" value='中国建设银行股份有限公司南宁铁道支行' onclick="_hideEditor()" class="report1_6">中国建设银行股份有限公司南宁铁道支<br>行</td>
		<td colSpan=4 id="report1_J4" colNo=10 sc="J4" value='银行账号' onclick="_hideEditor()" class="report1_2">银行账号</td>
		<td colSpan=3 id="report1_N4" colNo=14 sc="N4" value='45050160476800000132' onclick="_hideEditor()" class="report1_2">45050160476800000132</td>
		<td id="report1_Q4" colNo=17 bkj="true" sc="Q4" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="5" id=report1_row5 status="0" pid="report1" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A5" colNo=1 sc="A5" value='总机构纳税人识别号' onclick="_hideEditor()" class="report1_2">总机构纳税人识别号</td>
		<td colSpan=2 id="report1_C5" colNo=3 sc="C5" value='' onclick="_hideEditor()" class="report1_2"></td>
		<td colSpan=2 id="report1_E5" colNo=5 sc="E5" value='应补(退)税额' onclick="_hideEditor()" class="report1_2">应补(退)税额</td>
		<td colSpan=3 id="report1_G5" colNo=7 sc="G5" value='0.0' format="%230.00" digits="2" calc='(_xxf("N6")+_xxf("N8")+_xxf("G14")+_xxf("M14")).toFixed(2)' onclick="_hideEditor()" class="report1_10">0.00</td>
		<td colSpan=4 id="report1_J5" colNo=10 sc="J5" value='总分机构销售额合计' onclick="_hideEditor()" class="report1_2">总分机构销售额合计</td>
		<td colSpan=3 id="report1_N5" colNo=14 sc="N5" value='0.0' format="%230.00" digits="2" calc='(_xxf("C6")+_xxf("C8")+_xxf("E14")+_xxf("K14")).toFixed(2)' onclick="_hideEditor()" class="report1_10">0.00</td>
		<td id="report1_Q5" colNo=17 bkj="true" sc="Q5" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="6" id=report1_row6 status="0" pid="report1" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A6" colNo=1 sc="A6" value='总机构一般货物及劳务销售收入' onclick="_hideEditor()" class="report1_2">总机构一般货物及劳务销售收入</td>
		<td colSpan=2 id="report1_C6" colNo=3 sc="C6" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" calc='(_xxf("C6")<0?0:_xxf("C6")).toFixed(2)' onclick="_displayEditor()" class="report1_14">0.00</td>
		<td colSpan=2 id="report1_E6" colNo=5 sc="E6" value='总机构一般货物及劳务分配比例' onclick="_hideEditor()" class="report1_2">总机构一般货物及劳务分配比例</td>
		<td colSpan=3 id="report1_G6" colNo=7 sc="G6" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00000000%25" digits="10" dataValid="report1_G6_valid()" calc='_xxf("C6")==0?0:(_xxf("C6")/(_xxf("E14")+_xxf("C6"))).toFixed(10)' onclick="_displayEditor()" class="report1_4">0.00000000%</td>
<script language=javascript>
	function report1_G6_valid() {
		if( ! ( (_xxf("G6")+_xxf("F14")) == 1 || (_xxf("G6")+_xxf("F14")) == 0 ) ) {
			try{ report1_markInvalidCell( _xxid('G6')+","+_xxid('F14') );}catch(e){}
			alert( '总机构一般货物及劳务分配比例+分支机构一般货物及劳务分配比例合计不等于1' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=4 id="report1_J6" colNo=10 sc="J6" value='总机构一般货物及劳务分配税额' onclick="_hideEditor()" class="report1_2">总机构一般货物及劳务分配税额</td>
		<td colSpan=3 id="report1_N6" colNo=14 sc="N6" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" calc='(_xxf("Q6")*_xxf("G6")).toFixed(4)' onclick="_displayEditor()" class="report1_4">0.00</td>
		<td id="report1_Q6" colNo=17 bkj="true" sc="Q6" value='0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="7" id=report1_row7 status="0" pid="report1" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A7" colNo=1 sc="A7" value='总机构一般货物及劳务即征即退销售收入' onclick="_hideEditor()" class="report1_2">总机构一般货物及劳务即征即退销售收入</td>
		<td colSpan=2 id="report1_C7" colNo=3 sc="C7" value='--' onclick="_hideEditor()" class="report1_2">--</td>
		<td colSpan=2 id="report1_E7" colNo=5 sc="E7" value='总机构一般货物及劳务即征即退分配比例' onclick="_hideEditor()" class="report1_2">总机构一般货物及劳务即征即退分配比例</td>
		<td colSpan=3 id="report1_G7" colNo=7 sc="G7" value='--' onclick="_hideEditor()" class="report1_2">--</td>
		<td colSpan=4 id="report1_J7" colNo=10 sc="J7" value='总机构一般货物及劳务即征即退分配税额' onclick="_hideEditor()" class="report1_2">总机构一般货物及劳务即征即退分配税额</td>
		<td colSpan=3 id="report1_N7" colNo=14 sc="N7" value='--' onclick="_hideEditor()" class="report1_2">--</td>
		<td id="report1_Q7" colNo=17 bkj="true" sc="Q7" value='' onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="8" id=report1_row8 status="0" pid="report1" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A8" colNo=1 sc="A8" value='总机构应税服务销售收入' onclick="_hideEditor()" class="report1_2">总机构应税服务销售收入</td>
		<td colSpan=2 id="report1_C8" colNo=3 sc="C8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" calc='(_xxf("C8")<0?0:_xxf("C8")).toFixed(2)' onclick="_displayEditor()" class="report1_14">0.00</td>
		<td colSpan=2 id="report1_E8" colNo=5 sc="E8" value='总机构应税服务分配比例' onclick="_hideEditor()" class="report1_2">总机构应税服务分配比例</td>
		<td colSpan=3 id="report1_G8" colNo=7 sc="G8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00000000%25" digits="10" dataValid="report1_G8_valid()" calc='_xxf("C8")==0?0:(_xxf("C8")/(_xxf("K14")+_xxf("C8"))).toFixed(10)' onclick="_displayEditor()" class="report1_4">0.00000000%</td>
<script language=javascript>
	function report1_G8_valid() {
		if( ! ( (_xxf("G8")+_xxf("L14")) == 1 || (_xxf("G8")+_xxf("L14")) == 0 ) ) {
			try{ report1_markInvalidCell( _xxid('L14')+","+_xxid('G8') );}catch(e){}
			alert( '总机构应税服务分配比例+分支机构应税服务分配比例合计不等于1' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=4 id="report1_J8" colNo=10 sc="J8" value='总机构应税服务分配税额' onclick="_hideEditor()" class="report1_2">总机构应税服务分配税额</td>
		<td colSpan=3 id="report1_N8" colNo=14 sc="N8" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" calc='(_xxf("Q8")*_xxf("G8")).toFixed(2)' onclick="_displayEditor()" class="report1_4">0.00</td>
		<td id="report1_Q8" colNo=17 bkj="true" sc="Q8" value='0' format="%230.00" digits="2" onclick="_hideEditor()" class="report1_2" style="display:none;"></td>
	</tr>
	<tr rn="9" id=report1_row9 status="0" pid="report1" height=23 style="height:23px;">
		<td colSpan=2 id="report1_A9" colNo=1 sc="A9" value='总机构应税服务即征即退销售收入' onclick="_hideEditor()" class="report1_2">总机构应税服务即征即退销售收入</td>
		<td colSpan=2 id="report1_C9" colNo=3 sc="C9" value='--' onclick="_hideEditor()" class="report1_2">--</td>
		<td colSpan=2 id="report1_E9" colNo=5 sc="E9" value='总机构应税服务即征即退分配比例' onclick="_hideEditor()" class="report1_2">总机构应税服务即征即退分配比例</td>
		<td colSpan=3 id="report1_G9" colNo=7 sc="G9" value='--' onclick="_hideEditor()" class="report1_2">--</td>
		<td colSpan=4 id="report1_J9" colNo=10 sc="J9" value='总机构应税服务即征即退分配税额' onclick="_hideEditor()" class="report1_2">总机构应税服务即征即退分配税额</td>
		<td colSpan=3 id="report1_N9" colNo=14 sc="N9" value='--' onclick="_hideEditor()" class="report1_2">--</td>
		<td id="report1_Q9" colNo=17 bkj="true" sc="Q9" value='' onclick="_hideEditor()" class="report1_7" style="display:none;"></td>
	</tr>
	<tr rn="10" id=report1_row10 status="0" pid="report1" height=23 style="height:23px;">
		<td colSpan=16 id="report1_A10" colNo=1 sc="A10" value='分支机构销售收入情况' onclick="_hideEditor()" class="report1_2">分支机构销售收入情况</td>
		<td id="report1_Q10" colNo=17 bkj="true" sc="Q10" value='' onclick="_hideEditor()" class="report1_16" style="display:none;"></td>
	</tr>
	<tr rn="11" id=report1_row11 status="0" pid="report1" height=23 style="height:23px;">
		<td rowSpan=2 id="report1_A11" colNo=1 sc="A11" value='序号' onclick="_hideEditor()" class="report1_5">序号</td>
		<td rowSpan=2 id="report1_B11" colNo=2 sc="B11" value='纳税人识别号' onclick="_hideEditor()" class="report1_5">纳税人识别号</td>
		<td rowSpan=2 colSpan=2 id="report1_C11" colNo=3 sc="C11" value='纳税人名称' onclick="_hideEditor()" class="report1_5">纳税人名称</td>
		<td colSpan=3 id="report1_E11" colNo=5 sc="E11" value='分支机构一般货物及劳务' onclick="_hideEditor()" class="report1_5">分支机构一般货物及劳务</td>
		<td colSpan=3 id="report1_H11" colNo=8 sc="H11" value='分支机构一般货物及劳务即征即退' onclick="_hideEditor()" class="report1_5">分支机构一般货物及劳务即征即退</td>
		<td colSpan=3 id="report1_K11" colNo=11 sc="K11" value='分支机构应税服务' onclick="_hideEditor()" class="report1_5">分支机构应税服务</td>
		<td colSpan=3 id="report1_N11" colNo=14 sc="N11" value='分支机构应税服务即征即退' onclick="_hideEditor()" class="report1_5">分支机构应税服务即征即退</td>
		<td id="report1_Q11" colNo=17 bkj="true" sc="Q11" value='' onclick="_hideEditor()" class="report1_11" style="display:none;"></td>
	</tr>
	<tr rn="12" id=report1_row12 status="0" pid="report1" height=23 style="height:23px;">
		<td id="report1_E12" colNo=5 sc="E12" value='销售收入' onclick="_hideEditor()" class="report1_1">销售收入</td>
		<td id="report1_F12" colNo=6 sc="F12" value='分配比例' onclick="_hideEditor()" class="report1_1">分配比例</td>
		<td id="report1_G12" colNo=7 sc="G12" value='分配税额' onclick="_hideEditor()" class="report1_1">分配税额</td>
		<td id="report1_H12" colNo=8 sc="H12" value='销售收入' onclick="_hideEditor()" class="report1_1">销售收入</td>
		<td id="report1_I12" colNo=9 sc="I12" value='分配比例' onclick="_hideEditor()" class="report1_1">分配比例</td>
		<td id="report1_J12" colNo=10 sc="J12" value='分配税额' onclick="_hideEditor()" class="report1_1">分配税额</td>
		<td id="report1_K12" colNo=11 sc="K12" value='销售收入' onclick="_hideEditor()" class="report1_1">销售收入</td>
		<td id="report1_L12" colNo=12 sc="L12" value='分配比例' onclick="_hideEditor()" class="report1_1">分配比例</td>
		<td id="report1_M12" colNo=13 sc="M12" value='分配税额' onclick="_hideEditor()" class="report1_1">分配税额</td>
		<td id="report1_N12" colNo=14 sc="N12" value='销售收入' onclick="_hideEditor()" class="report1_1">销售收入</td>
		<td id="report1_O12" colNo=15 sc="O12" value='分配比例' onclick="_hideEditor()" class="report1_1">分配比例</td>
		<td id="report1_P12" colNo=16 sc="P12" value='分配税额' onclick="_hideEditor()" class="report1_1">分配税额</td>
		<td id="report1_Q12" colNo=17 bkj="true" sc="Q12" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="13" id=report1_row13 status="0" isDetail=true did="0|1|13|13|13" isFirst=true drows=1 pid="report1" height=23 style="height:23px;">
		<td id="report1_A13" colNo=1 sc="A13" value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_B13" colNo=2 sc="B13" value='' onclick="_hideEditor()" class="report1_1"></td>
		<td colSpan=2 id="report1_C13" colNo=3 sc="C13" value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_E13" colNo=5 sc="E13" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" calc='(_xxf("E13")<0?0:_xxf("E13")).toFixed(2)' onclick="_displayEditor()" class="report1_9">0.00</td>
		<td id="report1_F13" colNo=6 sc="F13" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00000000%25" digits="10" calc='_xxf("E14")==0?0:(_xxf("E13")/(_xxf("E14")+_xxf("C6"))).toFixed(10)' onclick="_displayEditor()" class="report1_3">0.00000000%</td>
		<td id="report1_G13" colNo=7 sc="G13" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" calc='(_xxf("Q6")*_xxf("F13")).toFixed(2)' onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_H13" colNo=8 sc="H13" value='--' onclick="_hideEditor()" class="report1_5">--</td>
		<td id="report1_I13" colNo=9 sc="I13" value='--' onclick="_hideEditor()" class="report1_5">--</td>
		<td id="report1_J13" colNo=10 sc="J13" value='--' onclick="_hideEditor()" class="report1_5">--</td>
		<td id="report1_K13" colNo=11 sc="K13" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" calc='(_xxf("K13")<0?0:_xxf("K13")).toFixed(2)' onclick="_displayEditor()" class="report1_9">0.00</td>
		<td id="report1_L13" colNo=12 sc="L13" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00000000%25" digits="10" calc='_xxf("K14")==0?0:(_xxf("K13")/(_xxf("K14")+_xxf("C8"))).toFixed(10)' onclick="_displayEditor()" class="report1_3">0.00000000%</td>
		<td id="report1_M13" colNo=13 sc="M13" modifiable=true writable=true editStyle="1" inputDataType="2" value='0.0' format="%230.00" digits="2" calc='(_xxf("Q8")*_xxf("L13")).toFixed(2)' onclick="_displayEditor()" class="report1_3">0.00</td>
		<td id="report1_N13" colNo=14 sc="N13" value='--' onclick="_hideEditor()" class="report1_5">--</td>
		<td id="report1_O13" colNo=15 sc="O13" value='--' onclick="_hideEditor()" class="report1_5">--</td>
		<td id="report1_P13" colNo=16 sc="P13" value='--' onclick="_hideEditor()" class="report1_5">--</td>
		<td id="report1_Q13" colNo=17 bkj="true" sc="Q13" value='' onclick="_hideEditor()" class="report1_1" style="display:none;"></td>
	</tr>
	<tr rn="14" id=report1_row14 status="0" pid="report1" height=23 style="height:23px;">
		<td colSpan=4 id="report1_A14" colNo=1 sc="A14" value='合计' onclick="_hideEditor()" class="report1_5">合计</td>
		<td id="report1_E14" colNo=5 sc="E14" value='0.0' format="%230.00" digits="2" calc='(sum("E13")).toFixed(2)' onclick="_hideEditor()" class="report1_13">0.00</td>
		<td id="report1_F14" colNo=6 sc="F14" value='0.0' format="%230.00000000%25" digits="10" dataValid="report1_F14_valid()" calc='(sum("F13")).toFixed(10)' onclick="_hideEditor()" class="report1_13">0.00000000%</td>
<script language=javascript>
	function report1_F14_valid() {
		if( ! ( (_xxf("G6")+_xxf("F14")) ==1 || (_xxf("G6")+_xxf("F14")) ==0 ) ) {
			try{ report1_markInvalidCell( _xxid('G6')+","+_xxid('F14') );}catch(e){}
			alert( '总机构一般货物及劳务分配比例+分支机构一般货物及劳务分配比例合计不等于1' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_G14" colNo=7 sc="G14" value='0.0' format="%230.00" digits="2" calc='(sum("G13")).toFixed(2)' onclick="_hideEditor()" class="report1_13">0.00</td>
		<td id="report1_H14" colNo=8 sc="H14" value='' onclick="_hideEditor()" class="report1_5"></td>
		<td id="report1_I14" colNo=9 sc="I14" value='' onclick="_hideEditor()" class="report1_5"></td>
		<td id="report1_J14" colNo=10 sc="J14" value='' onclick="_hideEditor()" class="report1_5"></td>
		<td id="report1_K14" colNo=11 sc="K14" value='0.0' format="%230.00" digits="2" calc='(sum("K13")).toFixed(2)' onclick="_hideEditor()" class="report1_13">0.00</td>
		<td id="report1_L14" colNo=12 sc="L14" value='0.0' format="%230.00000000%25" digits="10" dataValid="report1_L14_valid()" calc='(sum("L13")).toFixed(10)' onclick="_hideEditor()" class="report1_13">0.00000000%</td>
<script language=javascript>
	function report1_L14_valid() {
		if( ! ( (_xxf("G8")+_xxf("L14")) == 1 || (_xxf("G8")+_xxf("L14")) == 0 ) ) {
			try{ report1_markInvalidCell( _xxid('L14')+","+_xxid('G8') );}catch(e){}
			alert( '总机构应税服务分配比例+分支机构应税服务分配比例合计不等于1' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_M14" colNo=13 sc="M14" value='0.0' format="%230.00" digits="2" calc='(sum("M13")).toFixed(2)' onclick="_hideEditor()" class="report1_13">0.00</td>
		<td id="report1_N14" colNo=14 sc="N14" value='' onclick="_hideEditor()" class="report1_5"></td>
		<td id="report1_O14" colNo=15 sc="O14" value='' onclick="_hideEditor()" class="report1_5"></td>
		<td id="report1_P14" colNo=16 sc="P14" value='' onclick="_hideEditor()" class="report1_5"></td>
		<td id="report1_Q14" colNo=17 bkj="true" sc="Q14" value='rowList-end' onclick="_hideEditor()" class="report1_5" style="display:none;"></td>
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
	<input type=hidden name=fileName value="/zzs2013Ybnsr/hznsqyzzsfpb.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_41508">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showReport.jsp?raq=%2Fzzs2013Ybnsr%2Fhznsqyzzsfpb.raq&nsrsbh=450100399111430&sbzt=0&skssq=20171111&ssqq=2017-11-01&ssqz=2017-11-30&isTbBz=0&reportParamsId=15123563588973383140645">
	<input type=hidden name=backAndRefresh value="/reportJsp/success.jsp">
	<input type=hidden name=promptAfterSave value="no">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=WBJK_SB_ZZS_HZNSFPB;xmlName=zzs2013/zzs_ybnsr_hznsfpb;sbzt=0;ssqq=2017-11-01;skssq=20171111;nsrsbh=450100399111430;dynamicBz=Y;raq=/zzs2013Ybnsr/hznsqyzzsfpb.raq;ssqz=2017-11-30;isTbBz=0">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/zzs2013Ybnsr/hznsqyzzsfpb.raq&srcType=file&cachedId=10_1_1_176_8080_41508&isScroll=0&backAndRefresh=/reportJsp/success.jsp&webTableName=report1&canSelectSheet=no&params=bbmc%3DWBJK_SB_ZZS_HZNSFPB%3BxmlName%3Dzzs2013%2Fzzs_ybnsr_hznsfpb%3Bsbzt%3D0%3Bssqq%3D2017-11-01%3Bskssq%3D20171111%3Bnsrsbh%3D450100399111430%3BdynamicBz%3DY%3Braq%3D%2Fzzs2013Ybnsr%2Fhznsqyzzsfpb.raq%3Bssqz%3D2017-11-30%3BisTbBz%3D0&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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
