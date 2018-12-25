<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="showReport_cwkjzdba.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportJsp.showReport_cwkjzdba" %>

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

<input type="hidden" value="raq=/cwkjzdba/cwkjzdba.raq;nsrsbh=450100399111430;cwkjzdbaxh=79820;sbzt=0;isTbBz=0" id="myParams" />
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
	var report1_cachedId = "10_1_1_176_8080_27169";
</script>
<script language=javascript>
	function report1_saveAsExcel() {
		var address = "/WSSBSL/reportServlet?action=4&reportName=report1&isDialog=1&excelFormat=2003";
		rq_showPopWin( address, 300, 210, null );
	}
	function report1_saveAsExcel2( returnVal) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=3&file=%2Fcwkjzdba%2Fcwkjzdba.raq&columns=0&srcType=file&width=0&height=0&reportParamsId=15127969491754296126522&cachedId=10_1_1_176_8080_27169&t_i_m_e=1512796949549" + returnVal;
	}
</script>
<script language=javascript>
	function report1_saveAsPdf() {
		var address = "/WSSBSL/reportServlet?action=25&reportName=report1&isDialog=1";
		rq_showPopWin( address, 300, 200, null );
	}
	function report1_saveAsPdf2( returnVal ) {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=6&file=%2Fcwkjzdba%2Fcwkjzdba.raq&columns=0&srcType=file&reportParamsId=15127969491754296126522&cachedId=10_1_1_176_8080_27169&t_i_m_e=1512796949549" + returnVal;
	}
</script>

<script language=javascript>
	function report1_saveAsWord() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=7&file=%2Fcwkjzdba%2Fcwkjzdba.raq&columns=0&srcType=file&reportParamsId=15127969491754296126522&cachedId=10_1_1_176_8080_27169&t_i_m_e=1512796949549";
	}
</script>

<iframe name="report1_saveAs_frame" id="report1_saveAs_frame" src="" style="display:none"></iframe>
<script language=javascript>
	function report1_saveAsText() {
		document.report1_saveAs_frame.location = "/WSSBSL/reportServlet?action=18&file=%2Fcwkjzdba%2Fcwkjzdba.raq&srcType=file&separator=%09&lineBreak=%0A&reportParamsId=15127969491754296126522&cachedId=10_1_1_176_8080_27169&t_i_m_e=1512796949549";
	}
</script>

<script language=javascript>
	function report1_pivot() {
		window.open( "/WSSBSL/reportServlet?action=28&file=%2Fcwkjzdba%2Fcwkjzdba.raq&srcType=file&reportParamsId=15127969491754296126522&cachedId=10_1_1_176_8080_27169&t_i_m_e=1512796949549" );
	}
</script>

<script language=javascript>
	function report1_print() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=2&name=report1&reportFileName=%2Fcwkjzdba%2Fcwkjzdba.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&serverPagedPrint=no&mirror=no&reportParamsId=15127969491754296126522&cachedId=10_1_1_176_8080_27169&t_i_m_e=1512796949549";
	}
</script>
<iframe name="report1_printIFrame" id="report1_printIFrame" src="" style="position:absolute;left:-100px;top:-100px" width=50 height=50></iframe>
<script language=javascript>
	function report1_directPrint() {
		document.report1_printIFrame.location = "/WSSBSL/reportServlet?action=30&name=report1&reportFileName=%2Fcwkjzdba%2Fcwkjzdba.raq&srcType=file&savePrintSetup=no&appletJarName=runqianReport4Applet.jar%2CdmGraphApplet.jar&needPrintPrompt=no&needSelectPrinter=no&mirror=no&reportParamsId=15127969491754296126522&cachedId=10_1_1_176_8080_27169&t_i_m_e=1512796949549";
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
	function report1443043over(){
		report1oldstatus = window.status;
		window.status = "广西国税办税便利通项目";
	}
	function report1443043out(){
		window.status = report1oldstatus;
	}
</script>
<style id="report1_style">
	.report1_1 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_2 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_3 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_4 { text-align:left;vertical-align:middle;font-family:Dialog;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_5 { text-align:right;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_6 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_7 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#E1E1E1;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_8 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_9 { text-align:center;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:solid;border-top-width:1px;border-top-color:#000000;border-right-style:solid;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_10 { text-align:center;vertical-align:middle;font-family:宋体;font-size:16px;color:#000000;font-weight:bold;font-style:normal;text-decoration:none;border-left-style:none;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
	.report1_11 { text-align:left;vertical-align:middle;font-family:宋体;font-size:12px;color:#000000;font-weight:normal;font-style:normal;text-decoration:none;border-left-style:solid;border-left-width:1px;border-left-color:#000000;border-top-style:none;border-top-width:1px;border-top-color:#000000;border-right-style:none;border-right-width:1px;border-right-color:#000000;border-bottom-style:none;border-bottom-width:1px;border-bottom-color:#000000;background-color:#FFFFFF;white-space:nowrap;overflow:hidden;word-break:keep-all;}
</style>
<table id="report1" cellSpacing=0 cellPadding=0 selectText=yes onmouseout="report1443043out()" onmouseover="report1443043over()" rowCount=29 cols=8 submitCells="2" ajaxUrl="/WSSBSL/reportServlet" offSvr="/WSSBSL/servlet/saveLineoffInput" isli=true nextRowNo=30 ndr="1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,29" style="width:985px;table-layout:fixed;border-collapse:collapse">
	<colgroup>
		<col style="width:52px;"></col>
		<col style="width:193px;"></col>
		<col style="width:128px;"></col>
		<col style="width:113px;"></col>
		<col style="width:253px;"></col>
		<col style="width:124px;"></col>
		<col style="width:122px;"></col>
	</colgroup>
	<tr rn="1" id=report1_row1 status="0" pid="report1" height=40 style="height:40px;">
		<td colSpan=7 id="report1_A1" colNo=1 sc="A1" value='79820' onclick="_hideEditor()" class="report1_10">财务会计制度备案</td>
		<td id="report1_H1" colNo=8 bkj="true" sc="H1" value='' onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
	<tr rn="2" id=report1_row2 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=7 id="report1_A2" colNo=1 sc="A2" value='  财务会计制度-基本信息' onclick="_hideEditor()" class="report1_8">&nbsp;&nbsp;财务会计制度-基本信息</td>
		<td id="report1_H2" colNo=8 bkj="true" sc="H2" value='' onclick="_hideEditor()" class="report1_11" style="display:none;"></td>
	</tr>
	<tr rn="3" id=report1_row3 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A3" colNo=1 sc="A3" value='纳税人识别号 ' onclick="_hideEditor()" class="report1_5">纳税人识别号&nbsp;</td>
		<td colSpan=2 id="report1_C3" colNo=3 sc="C3" value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_E3" colNo=5 sc="E3" value='纳税人名称 ' onclick="_hideEditor()" class="report1_5">纳税人名称&nbsp;</td>
		<td colSpan=2 id="report1_F3" colNo=6 sc="F3" value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_H3" colNo=8 bkj="true" sc="H3" value='2017-12-09' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="4" id=report1_row4 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A4" colNo=1 sc="A4" value='<font color="#FF0000">*</font>经办人 ' onclick="_hideEditor()" class="report1_5"><font color="#FF0000">*</font>经办人 </td>
		<td colSpan=2 id="report1_C4" colNo=3 sc="C4" modifiable=true writable=true editStyle="1" inputDataType="1" value='' _dv="report1_C4_dv()" onclick="_displayEditor()" class="report1_2"></td>
<script language=javascript>
	function report1_C4_dv() {
		if( ! ( checkNull(_xxs("C4").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('C4') );}catch(e){}
			alert( '“经办人”不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E4" colNo=5 sc="E4" value='<font color="#FF0000">*</font>报告日期 ' onclick="_hideEditor()" class="report1_5"><font color="#FF0000">*</font>报告日期 </td>
		<td colSpan=2 id="report1_F4" colNo=6 sc="F4" value='2017-05-19' class="report1_1">2017-05-19</td>
<script language=javascript src="/WSSBSL/Fcalendar.js" charset="UTF-8"></script>
<script language=javascript>_createRunqianCalendar();</script>
		<td id="report1_H4" colNo=8 bkj="true" sc="H4" value='10114501000046124195' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="5" id=report1_row5 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A5" colNo=1 sc="A5" value='<font color="#FF0000">*</font>负责人 ' onclick="_hideEditor()" class="report1_5"><font color="#FF0000">*</font>负责人 </td>
		<td colSpan=2 id="report1_C5" colNo=3 sc="C5" modifiable=true writable=true editStyle="1" inputDataType="1" value='' _dv="report1_C5_dv()" onclick="_displayEditor()" class="report1_2"></td>
<script language=javascript>
	function report1_C5_dv() {
		if( ! ( checkNull(_xxs("C5").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('C5') );}catch(e){}
			alert( '“负责人”不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E5" colNo=5 sc="E5" value='受理人 ' onclick="_hideEditor()" class="report1_5">受理人&nbsp;</td>
		<td colSpan=2 id="report1_F5" colNo=6 sc="F5" value='办税便利通专用' onclick="_hideEditor()" class="report1_1">办税便利通专用</td>
		<td id="report1_H5" colNo=8 bkj="true" sc="H5" value='14500980001' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="6" id=report1_row6 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A6" colNo=1 sc="A6" value='受理日期 ' onclick="_hideEditor()" class="report1_5">受理日期&nbsp;</td>
		<td colSpan=2 id="report1_C6" colNo=3 sc="C6" value='2017-05-19' class="report1_1">2017-05-19</td>
		<td id="report1_E6" colNo=5 sc="E6" value='<font color="#FF0000">*</font>受理税务机关负责人 ' onclick="_hideEditor()" class="report1_5"><font color="#FF0000">*</font>受理税务机关负责人 </td>
		<td colSpan=2 id="report1_F6" colNo=6 sc="F6" value='办税便利通专用' onclick="_hideEditor()" class="report1_1">办税便利通专用</td>
		<td id="report1_H6" colNo=8 bkj="true" sc="H6" value='14500980001' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="7" id=report1_row7 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A7" colNo=1 sc="A7" value='<font color="#FF0000">*</font>受理税务机关 ' onclick="_hideEditor()" class="report1_5"><font color="#FF0000">*</font>受理税务机关 </td>
		<td colSpan=2 id="report1_C7" colNo=3 sc="C7" value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_E7" colNo=5 sc="E7" value='<font color="#FF0000">*</font>催报责任机关 ' onclick="_hideEditor()" class="report1_5"><font color="#FF0000">*</font>催报责任机关 </td>
		<td id="report1_F7" colNo=6 sc="F7" value='1' onclick="_hideEditor()" class="report1_1"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');_calcTbl(report1,this.parentElement); var r = this.parentElement.parentElement; if( r.status=='0')r.status='1';if( r.status=='2')r.status='3';try{_cellValueChanged(document.getElementById('report1_F7'));}catch(e){}" checked disabled>国税</td>
		<td id="report1_G7" colNo=7 sc="G7" value='0' onclick="_hideEditor()" class="report1_1"><input type=checkbox onclick="_setRowColBackColor(this.parentElement);if( this.checked ) this.parentElement.setAttribute( 'value', '1');else this.parentElement.setAttribute('value','0');_calcTbl(report1,this.parentElement); var r = this.parentElement.parentElement; if( r.status=='0')r.status='1';if( r.status=='2')r.status='3';try{_cellValueChanged(document.getElementById('report1_G7'));}catch(e){}" disabled>地税</td>
		<td id="report1_H7" colNo=8 bkj="true" sc="H7" value='1' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="8" id=report1_row8 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=7 id="report1_A8" colNo=1 sc="A8" value='  会计制度备案信息' onclick="_hideEditor()" class="report1_8">&nbsp;&nbsp;会计制度备案信息</td>
		<td id="report1_H8" colNo=8 bkj="true" sc="H8" value='14501950000' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="9" id=report1_row9 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A9" colNo=1 sc="A9" value='<font color="#FF0000">*</font>财务、会计制度名称' onclick="_hideEditor()" class="report1_9"><font color="#FF0000">*</font>财务、会计制度名称</td>
		<td colSpan=2 id="report1_D9" colNo=4 sc="D9" value='<font color="#FF0000">*</font>有效期起' onclick="_hideEditor()" class="report1_9"><font color="#FF0000">*</font>有效期起</td>
		<td colSpan=2 id="report1_F9" colNo=6 sc="F9" value='有效期止' onclick="_hideEditor()" class="report1_9">有效期止</td>
		<td id="report1_H9" colNo=8 bkj="true" sc="H9" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="10" id=report1_row10 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=3 id="report1_A10" colNo=1 sc="A10" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="101,101 | 企业会计准则;102,102 | 小企业会计准则;216,216 | 事业单位会计制度" value='102' _dv="report1_A10_dv()" onclick="_displayEditor()" class="report1_9">102 | 小企业会计准则</td>
<script language=javascript src="/WSSBSL/Fselect.js" charset="UTF-8"></script>
<script language=javascript>
	function report1_A10_dv() {
		if( ! ( checkNull(_xxs("A10").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('A10') );}catch(e){}
			alert( '“财务、会计制度名称”不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_D10" colNo=4 sc="D10" value='2017-01-01' _dv="report1_D10_dv()" class="report1_7">2017-01-01</td>
<script language=javascript>
	function report1_D10_dv() {
		if( ! ( checkNull(_xxs("D10").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('D10') );}catch(e){}
			alert( '“有效期起”不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_F10" colNo=6 sc="F10" value='9999-12-31' class="report1_7">9999-12-31</td>
		<td id="report1_H10" colNo=8 bkj="true" sc="H10" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="11" id=report1_row11 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=7 id="report1_A11" colNo=1 sc="A11" value='  资料信息' onclick="_hideEditor()" class="report1_8">&nbsp;&nbsp;资料信息</td>
		<td id="report1_H11" colNo=8 bkj="true" sc="H11" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="12" id=report1_row12 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A12" colNo=1 sc="A12" value='<font color="#FF0000">*</font>会计制度名称 ' onclick="_hideEditor()" class="report1_5"><font color="#FF0000">*</font>会计制度名称 </td>
		<td colSpan=2 id="report1_C12" colNo=3 sc="C12" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 dataSet="report1_ds123" filterExp="realvalue1==_xxf('A10')" editConfig="" value='102' _dv="report1_C12_dv()" onclick="_hideEditor()" class="report1_1">102 | 小企业会计准则</td>
<script language=javascript src="/WSSBSL/Ffilter.js" charset="UTF-8"></script>
<script language=javascript>
var report1_ds123 = new _rqDataSet( 'realvalue2', 'showname2' );
report1_ds123.setColNames( 'realvalue1,showname1,realvalue2,showname2,realvalue3,showname3' );
report1_ds123.setColTypes( '1,1,1,1,1,1' );
report1_ds123.appendData( '101	101 | 企业会计准则	101	101 | 企业会计准则	ZL1001001	ZL1001001 | 企业会计准则（一般企业）财务报表报送与信息采集' );
report1_ds123.appendData( '102	102 | 小企业会计准则	102	102 | 小企业会计准则	ZL1001003	ZL1001003 | 小企业会计准则财务报表与信息采集' );
report1_ds123.appendData( '216	216 | 事业单位会计制度	216	216 | 事业单位会计制度	ZL1001024	ZL1001024 | 事业单位会计制度财务报表报送与信息采集' );
</script>
<script language=javascript>
	function report1_C12_dv() {
		if( ! ( checkNull(_xxs("C12").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('C12') );}catch(e){}
			alert( '“会计制度名称”不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E12" colNo=5 sc="E12" value='会计制度备注 ' onclick="_hideEditor()" class="report1_5">会计制度备注&nbsp;</td>
		<td colSpan=2 id="report1_F12" colNo=6 sc="F12" modifiable=true writable=true editStyle="1" inputDataType="1" value='' onclick="_displayEditor()" class="report1_2"></td>
		<td id="report1_H12" colNo=8 bkj="true" sc="H12" value='' calc='1+1' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="13" id=report1_row13 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A13" colNo=1 sc="A13" value='财务制度 ' onclick="_hideEditor()" class="report1_5">财务制度&nbsp;</td>
		<td colSpan=2 id="report1_C13" colNo=3 sc="C13" ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 editConfig="01,01 | 企业财务通则;02,02 | 金融企业财务规定;07,07 | 运输企业财务制度;08,08 | 邮电通信企业财务制度;11,11 | 电影、新闻出版企业财务制度;12,12 | 高等学校财务制度;13,13 | 中小学校财务制度;14,14 | 科学事业单位财务制度;15,15 | 文化事业单位财务制度;16,16 | 广播电视事业单位财务制度;17,17 | 体育事业单位财务制度;18,18 | 文物事业单位财务制度;19,19 | 人口和计划生育事业单位财务制度;20,20 | 医院财务制度;21,21 | 基层医疗卫生机构财务制度;22,22 | 事业单位财务规则;23,23 | 彩票机构财务管理办法;24,24 | 地方金融企业财务监督管理办法;25,25 | 社会保险基金财务制度;26,26 | 行政单位财务规则;27,27 | 会计师事务所财务管理暂行办法;99,99 | 其他;28,28 | 国家艺术基金财务管理办法" value='' onclick="_hideEditor()" class="report1_1"></td>
		<td id="report1_E13" colNo=5 sc="E13" value='财务制度备注 ' onclick="_hideEditor()" class="report1_5">财务制度备注&nbsp;</td>
		<td colSpan=2 id="report1_F13" colNo=6 sc="F13" modifiable=true writable=true editStyle="1" inputDataType="1" value='' onclick="_displayEditor()" class="report1_2"></td>
		<td id="report1_H13" colNo=8 bkj="true" sc="H13" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="14" id=report1_row14 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A14" colNo=1 sc="A14" value='<font color="#FF0000">*</font>低值易耗品摊销方法名称 ' onclick="_hideEditor()" class="report1_5"><font color="#FF0000">*</font>低值易耗品摊销方法名称 </td>
		<td colSpan=2 id="report1_C14" colNo=3 sc="C14" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 modifiable=true writable=true editStyle="2" inputDataType="1" editConfig="1,1 | 一次摊销;3,3 | 五五摊销;2,2 | 分次摊销;9,9 | 其他" value='1' _dv="report1_C14_dv()" onclick="_displayEditor()" class="report1_2">1 | 一次摊销</td>
<script language=javascript>
	function report1_C14_dv() {
		if( ! ( checkNull(_xxs("C14").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('C14') );}catch(e){}
			alert( '“低值易耗品摊销方法名称”不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E14" colNo=5 sc="E14" value='低值易耗品摊销方法备注 ' onclick="_hideEditor()" class="report1_5">低值易耗品摊销方法备注&nbsp;</td>
		<td colSpan=2 id="report1_F14" colNo=6 sc="F14" modifiable=true writable=true editStyle="1" inputDataType="1" value='' onclick="_displayEditor()" class="report1_2"></td>
		<td id="report1_H14" colNo=8 bkj="true" sc="H14" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="15" id=report1_row15 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A15" colNo=1 sc="A15" value='<font color="#FF0000">*</font>折旧方法（大类）名称 ' onclick="_hideEditor()" class="report1_5"><font color="#FF0000">*</font>折旧方法（大类）名称 </td>
		<td colSpan=2 id="report1_C15" colNo=3 sc="C15" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="10,10 | 直线折旧法;20,20 | 加速折旧法" value='10' _dv="report1_C15_dv()" onclick="_displayEditor()" class="report1_2">10 | 直线折旧法</td>
<script language=javascript>
	function report1_C15_dv() {
		if( ! ( checkNull(_xxs("C15").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('C15') );}catch(e){}
			alert( '“折旧方法（大类）名称”不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E15" colNo=5 sc="E15" value='折旧方法备注 ' onclick="_hideEditor()" class="report1_5">折旧方法备注&nbsp;</td>
		<td colSpan=2 id="report1_F15" colNo=6 sc="F15" modifiable=true writable=true editStyle="1" inputDataType="1" value='' onclick="_displayEditor()" class="report1_2"></td>
		<td id="report1_H15" colNo=8 bkj="true" sc="H15" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="16" id=report1_row16 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A16" colNo=1 sc="A16" value='<font color="#FF0000">*</font>折旧方法（小类）名称 ' onclick="_hideEditor()" class="report1_5"><font color="#FF0000">*</font>折旧方法（小类）名称 </td>
		<td colSpan=2 id="report1_C16" colNo=3 sc="C16" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 dataSet="report1_ds163" filterExp="realvalue==_xxf('C15')" modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="" value='11' _dv="report1_C16_dv()" onclick="_displayEditor()" class="report1_2">11 | 平均年限法</td>
<script language=javascript>
var report1_ds163 = new _rqDataSet( 'realvalue1', 'showname1' );
report1_ds163.setColNames( 'realvalue,showname,realvalue1,showname1' );
report1_ds163.setColTypes( '1,1,1,1' );
report1_ds163.appendData( '10	10 | 直线折旧法	11	11 | 平均年限法' );
report1_ds163.appendData( '10	10 | 直线折旧法	12	12 | 工作量法' );
report1_ds163.appendData( '20	20 | 加速折旧法	21	21 | 双倍余额递减法' );
report1_ds163.appendData( '20	20 | 加速折旧法	22	22 | 年数总和法' );
report1_ds163.appendData( '20	20 | 加速折旧法	23	23 | 盘算法' );
report1_ds163.appendData( '20	20 | 加速折旧法	24	24 | 重置法' );
report1_ds163.appendData( '20	20 | 加速折旧法	25	25 | 偿债基金法' );
report1_ds163.appendData( '20	20 | 加速折旧法	26	26 | 年金法' );
report1_ds163.appendData( '20	20 | 加速折旧法	90	90 | 其他' );
</script>
<script language=javascript>
	function report1_C16_dv() {
		if( ! ( checkNull(_xxs("C16").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('C16') );}catch(e){}
			alert( '“折旧方法（小类）名称”不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E16" colNo=5 sc="E16" value='开采油（气）资源企业开发资产折旧方法 ' onclick="_hideEditor()" class="report1_5">开采油（气）资源企业开发资产折旧方法&nbsp;</td>
		<td colSpan=2 id="report1_F16" colNo=6 sc="F16" ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="2" inputDataType="1" editConfig="11,11 | 平均年限法" value='' onclick="_displayEditor()" class="report1_2"></td>
		<td id="report1_H16" colNo=8 bkj="true" sc="H16" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="17" id=report1_row17 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A17" colNo=1 sc="A17" value='开采油（气）资源企业勘探支出摊销方法 ' onclick="_hideEditor()" class="report1_5">开采油（气）资源企业勘探支出摊销方法&nbsp;</td>
		<td colSpan=2 id="report1_C17" colNo=3 sc="C17" ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="2" inputDataType="1" editConfig="1,1 | 发生当期扣除;2,2 | 按直线法3年计提扣除;9,9 | 其他" value='' onclick="_displayEditor()" class="report1_2"></td>
		<td id="report1_E17" colNo=5 sc="E17" value='开采油（气）资源企业矿区权益支出折耗方法 ' onclick="_hideEditor()" class="report1_5">开采油（气）资源企业矿区权益支出折耗方法&nbsp;</td>
		<td colSpan=2 id="report1_F17" colNo=6 sc="F17" ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="2" inputDataType="1" editConfig="1,1 | 发生当期扣除;2,2 | 按直线法3年计提扣除;9,3 | 其他" value='' onclick="_displayEditor()" class="report1_2"></td>
		<td id="report1_H17" colNo=8 bkj="true" sc="H17" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="18" id=report1_row18 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A18" colNo=1 sc="A18" value='<font color="#FF0000">*</font>成本核算方法名称 ' onclick="_hideEditor()" class="report1_5"><font color="#FF0000">*</font>成本核算方法名称 </td>
		<td colSpan=2 id="report1_C18" colNo=3 sc="C18" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 modifiable=true writable=true editStyle="2" inputDataType="1" editConfig="01,01 | 移动加权平均法;02,02 | 个别指定法;03,03 | 全月一次平均法;04,04 | 品种法;05,05 | 分批法;06,06 | 分步法;07,07 | 分类法;08,08 | 估计成本法;09,09 | 毛利率法;99,99 | 其他" value='01' _dv="report1_C18_dv()" onclick="_displayEditor()" class="report1_2">01 | 移动加权平均法</td>
<script language=javascript>
	function report1_C18_dv() {
		if( ! ( checkNull(_xxs("C18").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('C18') );}catch(e){}
			alert( '“成本核算方法名称”不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E18" colNo=5 sc="E18" value='成本核算方法备注 ' onclick="_hideEditor()" class="report1_5">成本核算方法备注&nbsp;</td>
		<td colSpan=2 id="report1_F18" colNo=6 sc="F18" modifiable=true writable=true editStyle="1" inputDataType="1" value='' onclick="_displayEditor()" class="report1_2"></td>
		<td id="report1_H18" colNo=8 bkj="true" sc="H18" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="19" id=report1_row19 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A19" colNo=1 sc="A19" value='会计核算软件名称 ' onclick="_hideEditor()" class="report1_5">会计核算软件名称&nbsp;</td>
		<td colSpan=2 id="report1_C19" colNo=3 sc="C19" modifiable=true writable=true editStyle="1" inputDataType="1" value='' onclick="_displayEditor()" class="report1_2"></td>
		<td id="report1_E19" colNo=5 sc="E19" value='会计核算软件版本号 ' onclick="_hideEditor()" class="report1_5">会计核算软件版本号&nbsp;</td>
		<td colSpan=2 id="report1_F19" colNo=6 sc="F19" modifiable=true writable=true editStyle="1" inputDataType="1" value='' onclick="_displayEditor()" class="report1_2"></td>
		<td id="report1_H19" colNo=8 bkj="true" sc="H19" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="20" id=report1_row20 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A20" colNo=1 sc="A20" value='会计核算软件启用日期 ' onclick="_hideEditor()" class="report1_5">会计核算软件启用日期&nbsp;</td>
		<td colSpan=2 id="report1_C20" colNo=3 sc="C20" modifiable=true value='' editStyle="6" onclick="_hideEditor(); _runqianCalendar.dateFormat='yyyy-MM-dd'; _runqianCalendar.type= 'day';_runqianCalendar.emptyAsNow=false;_showCalendar();_setRowColBackColor(this)" class="report1_2"></td>
		<td id="report1_E20" colNo=5 sc="E20" value='会计核算软件数据库类型 ' onclick="_hideEditor()" class="report1_5">会计核算软件数据库类型&nbsp;</td>
		<td colSpan=2 id="report1_F20" colNo=6 sc="F20" ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="2" inputDataType="1" editConfig="01,01 | Oracle;02,02 | DB2;03,03 | Informix;04,04 | Sybase;05,05 | SQL Server;06,06 | PostgreSQL;07,07 | mySQL;08,08 | access;99,99 | 其他" value='' onclick="_displayEditor()" class="report1_2"></td>
		<td id="report1_H20" colNo=8 bkj="true" sc="H20" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="21" id=report1_row21 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A21" colNo=1 sc="A21" value='会计核算软件备注 ' onclick="_hideEditor()" class="report1_5">会计核算软件备注&nbsp;</td>
		<td colSpan=2 id="report1_C21" colNo=3 sc="C21" modifiable=true writable=true editStyle="1" inputDataType="1" value='' onclick="_displayEditor()" class="report1_2"></td>
		<td id="report1_E21" colNo=5 sc="E21" value='财务报表报送小类 ' onclick="_hideEditor()" class="report1_5">财务报表报送小类&nbsp;</td>
		<td colSpan=2 id="report1_F21" colNo=6 sc="F21" ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 dataSet="report1_ds216" filterExp="realvalue1==_xxf('A10')" modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="" value='' onclick="_displayEditor()" class="report1_2"></td>
<script language=javascript>
var report1_ds216 = new _rqDataSet( 'realvalue3', 'showname3' );
report1_ds216.setColNames( 'realvalue1,showname1,realvalue2,showname2,realvalue3,showname3' );
report1_ds216.setColTypes( '1,1,1,1,1,1' );
report1_ds216.appendData( '101	101 | 企业会计准则	101	101 | 企业会计准则	ZL1001001	ZL1001001 | 企业会计准则（一般企业）财务报表报送与信息采集' );
report1_ds216.appendData( '101	101 | 企业会计准则	101	101 | 企业会计准则	ZL1001018	ZL1001018 | 企业会计准则（商业银行）财务报表报送与信息采集' );
report1_ds216.appendData( '101	101 | 企业会计准则	101	101 | 企业会计准则	ZL1001019	ZL1001019 | 企业会计准则（证券公司）财务报表报送与信息采集' );
report1_ds216.appendData( '101	101 | 企业会计准则	101	101 | 企业会计准则	ZL1001020	ZL1001020 | 企业会计准则（保险公司）财务报表报送与信息采集' );
report1_ds216.appendData( '101	101 | 企业会计准则	101	101 | 企业会计准则	ZL1001021	ZL1001021 | 企业会计准则（典当企业）财务报表报送与信息采集' );
report1_ds216.appendData( '102	102 | 小企业会计准则	102	102 | 小企业会计准则	ZL1001003	ZL1001003 | 小企业会计准则财务报表与信息采集' );
report1_ds216.appendData( '216	216 | 事业单位会计制度	216	216 | 事业单位会计制度	ZL1001024	ZL1001024 | 事业单位会计制度财务报表报送与信息采集' );
</script>
		<td id="report1_H21" colNo=8 onclick="_hideEditor()" class="null" style="display:none;"></td>
	</tr>
	<tr rn="22" id=report1_row22 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=7 id="report1_A22" colNo=1 sc="A22" value='  财务会计制度备案-会计报表情况' onclick="_hideEditor()" class="report1_8">&nbsp;&nbsp;财务会计制度备案-会计报表情况</td>
		<td id="report1_H22" colNo=8 bkj="true" sc="H22" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="23" id=report1_row23 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A23" colNo=1 sc="A23" value='<font color="#FF0000">*</font>会计报表名称' onclick="_hideEditor()" class="report1_9"><font color="#FF0000">*</font>会计报表名称</td>
		<td id="report1_C23" colNo=3 sc="C23" value='<font color="#FF0000">*</font>报送期间' onclick="_hideEditor()" class="report1_9"><font color="#FF0000">*</font>报送期间</td>
		<td id="report1_D23" colNo=4 sc="D23" value='<font color="#FF0000">*</font>报送期限' onclick="_hideEditor()" class="report1_9"><font color="#FF0000">*</font>报送期限</td>
		<td id="report1_E23" colNo=5 sc="E23" value='<font color="#FF0000">*</font>会计报表类型' onclick="_hideEditor()" class="report1_9"><font color="#FF0000">*</font>会计报表类型</td>
		<td colSpan=2 id="report1_F23" colNo=6 sc="F23" value='会计报表备注' onclick="_hideEditor()" class="report1_9">会计报表备注</td>
		<td id="report1_H23" colNo=8 bkj="true" sc="H23" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="24" id=report1_row24 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A24" colNo=1 sc="A24" ddEdit=0 ddNew=0 isMulti=0 canEmpty=1 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="01,01 | 资产负债表;02,02 | 利润表;03,03 | 现金流量表;04,04 | 所有者权益（股东权益）变动表;05,05 | 利润分配表;99,99 | 其他;07,07 | 盈余及盈余分配表;08,08 | 合并资产负债表;09,09 | 合并利润表;10,10 | 合并现金流量表;11,11 | 合并所有者权益(股东权益)变动表" value='01' onclick="_displayEditor()" class="report1_2">01 | 资产负债表</td>
		<td id="report1_C24" colNo=3 sc="C24" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 modifiable=true writable=true editStyle="2" inputDataType="1" editConfig="3,3 | 季报  ;4,4 | 月报" value='3' _dv="report1_C24_dv()" onclick="_displayEditor()" class="report1_2">3 | 季报  </td>
<script language=javascript>
	function report1_C24_dv() {
		if( ! ( checkNull(_xxs("C24").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('C24') );}catch(e){}
			alert( '“报送期间”不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_D24" colNo=4 sc="D24" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 modifiable=true writable=true editStyle="2" inputDataType="1" editConfig="21,21 | 15日（季报）;11,11 | 15日（月报）" value='21' dataValid="report1_D24_valid()" _dv="report1_D24_dv()" onclick="_displayEditor()" class="report1_2">21 | 15日（季报）</td>
<script language=javascript>
	function report1_D24_valid() {
		if( ! ( _xxf("C24")==3?_xxf("D24")==21:_xxf("C24")==4?_xxf("D24")==11:0 ) ) {
			try{ report1_markInvalidCell( _xxid('D24')+","+_xxid('C24') );}catch(e){}
			alert( '“报送期限”必须对应“报送期间”！' );
			return false;
		}
		return true;
	}
</script>
<script language=javascript>
	function report1_D24_dv() {
		if( ! ( checkNull(_xxs("D24").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('D24') );}catch(e){}
			alert( '“报送期限”不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E24" colNo=5 sc="E24" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 modifiable=true writable=true editStyle="2" inputDataType="1" editConfig="02,02 | 季报表;01,01 | 月报表" value='02' dataValid="report1_E24_valid()" _dv="report1_E24_dv()" onclick="_displayEditor()" class="report1_2">02 | 季报表</td>
<script language=javascript>
	function report1_E24_valid() {
		if( ! ( _xxf("C24")==3?_xxf("E24")==02:_xxf("C24")==4?_xxf("E24")==01:0 ) ) {
			try{ report1_markInvalidCell( _xxid('E24')+","+_xxid('C24') );}catch(e){}
			alert( '“会计报表类型”必须对应“报送期间”。' );
			return false;
		}
		return true;
	}
</script>
<script language=javascript>
	function report1_E24_dv() {
		if( ! ( checkNull(_xxs("E24").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('E24') );}catch(e){}
			alert( '“会计报表类型”不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_F24" colNo=6 sc="F24" modifiable=true writable=true editStyle="1" inputDataType="1" value='' onclick="_displayEditor()" class="report1_2"></td>
		<td id="report1_H24" colNo=8 bkj="true" sc="H24" value='1' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="25" id=report1_row25 status="0" isDetail=true did="0|1|25|25|25" isFirst=true drows=1 pid="report1" height=20 style="height:20px;">
		<td colSpan=2 id="report1_A25" colNo=1 sc="A25" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 modifiable=true writable=true editStyle="3" inputDataType="1" editConfig="ref:report1_A24" value='02' _dv="report1_A25_dv()" onclick="_displayEditor()" class="report1_2">02 | 利润表</td>
<script language=javascript>
	function report1_A25_dv() {
		if( ! ( checkNull(_xxs("A25").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('A25') );}catch(e){}
			alert( '“会计报表名称”不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_C25" colNo=3 sc="C25" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 modifiable=true writable=true editStyle="2" inputDataType="1" editConfig="3,3 | 季报;4,4 | 月报" value='3' _dv="report1_C25_dv()" onclick="_displayEditor()" class="report1_2">3 | 季报</td>
<script language=javascript>
	function report1_C25_dv() {
		if( ! ( checkNull(_xxs("C25").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('C25') );}catch(e){}
			alert( '“报送期间”不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_D25" colNo=4 sc="D25" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 modifiable=true writable=true editStyle="2" inputDataType="1" editConfig="21,21 | 15日（季报）;11,11 | 15日（月报）" value='21' dataValid="report1_D25_valid()" _dv="report1_D25_dv()" onclick="_displayEditor()" class="report1_2">21 | 15日（季报）</td>
<script language=javascript>
	function report1_D25_valid() {
		if( ! ( _xxf("C25")==3?_xxf("D25")==21:_xxf("C25")==4?_xxf("D25")==11:0 ) ) {
			try{ report1_markInvalidCell( _xxid('D25')+","+_xxid('C25') );}catch(e){}
			alert( '“报送期限”必须对应“报送期间”！' );
			return false;
		}
		return true;
	}
</script>
<script language=javascript>
	function report1_D25_dv() {
		if( ! ( checkNull(_xxs("D25").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('D25') );}catch(e){}
			alert( '“报送期限”不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td id="report1_E25" colNo=5 sc="E25" ddEdit=0 ddNew=0 isMulti=0 canEmpty=0 modifiable=true writable=true editStyle="2" inputDataType="1" editConfig="02,02 | 季报表;01,01 | 月报表" value='02' dataValid="report1_E25_valid()" _dv="report1_E25_dv()" onclick="_displayEditor()" class="report1_2">02 | 季报表</td>
<script language=javascript>
	function report1_E25_valid() {
		if( ! ( _xxf("C25")==3?_xxf("E25")==02:_xxf("C25")==4?_xxf("E25")==01:0 ) ) {
			try{ report1_markInvalidCell( _xxid('C25')+","+_xxid('E25') );}catch(e){}
			alert( '“会计报表类型”必须对应“报送期间”。' );
			return false;
		}
		return true;
	}
</script>
<script language=javascript>
	function report1_E25_dv() {
		if( ! ( checkNull(_xxs("E25").toString()) ) ) {
			try{ report1_markInvalidCell( _xxid('E25') );}catch(e){}
			alert( '“会计报表类型”不能为空！' );
			return false;
		}
		return true;
	}
</script>
		<td colSpan=2 id="report1_F25" colNo=6 sc="F25" modifiable=true writable=true editStyle="1" inputDataType="1" value='' onclick="_displayEditor()" class="report1_2"></td>
		<td id="report1_H25" colNo=8 bkj="true" sc="H25" value='2' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="26" id=report1_row26 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=7 id="report1_A26" colNo=1 sc="A26" value='  财务会计制度备案-其他资料' onclick="_hideEditor()" class="report1_8">&nbsp;&nbsp;财务会计制度备案-其他资料</td>
		<td id="report1_H26" colNo=8 bkj="true" sc="H26" value='kjbbqkList-end' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="27" id=report1_row27 status="0" pid="report1" height=20 style="height:20px;">
		<td colSpan=4 id="report1_A27" colNo=1 sc="A27" value='其他资料名称' onclick="_hideEditor()" class="report1_9">其他资料名称</td>
		<td colSpan=3 id="report1_E27" colNo=5 sc="E27" value='备注' onclick="_hideEditor()" class="report1_9">备注</td>
		<td id="report1_H27" colNo=8 bkj="true" sc="H27" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="28" id=report1_row28 status="0" isDetail=true did="0|1|28|28|28" isFirst=true drows=1 pid="report1" height=20 style="height:20px;">
		<td colSpan=4 id="report1_A28" colNo=1 sc="A28" modifiable=true writable=true editStyle="1" inputDataType="1" value='' onclick="_displayEditor()" class="report1_2"></td>
		<td colSpan=3 id="report1_E28" colNo=5 sc="E28" modifiable=true writable=true editStyle="1" inputDataType="1" value='' onclick="_displayEditor()" class="report1_2"></td>
		<td id="report1_H28" colNo=8 bkj="true" sc="H28" value='' onclick="_hideEditor()" class="report1_3" style="display:none;"></td>
	</tr>
	<tr rn="29" id=report1_row29 status="0" pid="report1" height=20 style="height:20px;">
		<td id="report1_A29" colNo=1 sc="A29" value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_B29" colNo=2 sc="B29" value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_C29" colNo=3 sc="C29" value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_D29" colNo=4 sc="D29" value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_E29" colNo=5 sc="E29" value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_F29" colNo=6 sc="F29" value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_G29" colNo=7 sc="G29" value='' onclick="_hideEditor()" class="report1_6"></td>
		<td id="report1_H29" colNo=8 bkj="true" sc="H29" value='qtzlList-end' onclick="_hideEditor()" class="report1_4" style="display:none;"></td>
	</tr>
</table><script language=javascript>
	_initInput( document.getElementById( 'report1' ) );
	_formatData( document.getElementById( 'report1' ) );
	document.getElementById( 'report1_C15' ).filterCells = "report1_C16";
	document.getElementById( 'report1_A10' ).filterCells = "report1_C12,report1_F21";
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
	<input type=hidden name=fileName value="/cwkjzdba/cwkjzdba.raq">
	<input type=hidden name=srcType value="file">
	<input type=hidden name=cachedId value="10_1_1_176_8080_27169">
	<input type=hidden name=pageUrl value="/WSSBSL/reportJsp/showReport.jsp?raq=%2Fcwkjzdba%2Fcwkjzdba.raq&nsrsbh=450100399111430&cwkjzdbaxh=79820&sbzt=0&isTbBz=0&reportParamsId=15127969491754296126522">
	<input type=hidden name=backAndRefresh value="/reportJsp/success.jsp">
	<input type=hidden name=promptAfterSave value="no">
	<input type=hidden name=saveDataByListener value="no">
	<input type=hidden name=inputExceptionPage value="/reportJsp/inputException.jsp">
	<input type=hidden name=keyRepeatError value="no">
	<input type=hidden name=data>
	<input type=hidden name=params value="bbmc=DJ_CWBB_BA_JBXX;xmlName=cwkjzdba/cwkjzdba;sbzt=0;cwkjzdbaxh=79820;nsrsbh=450100399111430;dynamicBz=Y;raq=/cwkjzdba/cwkjzdba.raq;isTbBz=0">
	<input type=hidden name=inputListener value="cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction">
</form>
</div>
<script language=javascript>
	function report1_importExcel() {
		var address = "/WSSBSL/reportServlet?action=17&fileName=/cwkjzdba/cwkjzdba.raq&srcType=file&cachedId=10_1_1_176_8080_27169&isScroll=0&backAndRefresh=/reportJsp/success.jsp&webTableName=report1&canSelectSheet=no&params=bbmc%3DDJ_CWBB_BA_JBXX%3BxmlName%3Dcwkjzdba%2Fcwkjzdba%3Bsbzt%3D0%3Bcwkjzdbaxh%3D79820%3Bnsrsbh%3D450100399111430%3BdynamicBz%3DY%3Braq%3D%2Fcwkjzdba%2Fcwkjzdba.raq%3BisTbBz%3D0&inputListener=cn.gxgs.bsblt.wssb.wssbsl.report.action.RQReportAction&canImport2DB=1";
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

