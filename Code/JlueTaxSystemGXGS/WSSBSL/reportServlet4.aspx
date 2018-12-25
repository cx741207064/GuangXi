<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="reportServlet4.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportServlet4" %>

<!DOCTYPE html>

<HTML><head><title>导出Excel设置</title>
<script language=javascript>
var _excel_font_f, _excel_EE, _excel_FF, _excel_GG, _excel_HH, _excel_JJ, _excel_MM, _excel_BL;
function _initExcelPageStyle(){
_excel_font_f = "宋体";
_excel_EE = "请选择分页方式：";
_excel_FF = "不分页";
_excel_GG = "分页";
_excel_HH = "确定";
_excel_JJ = "是否导出公式";
_excel_MM = "请选择导出格式：";
_excel_BL = "显示比例";
}
</script>
</head>
<BODY BGCOLOR="white" leftMargin=15 topMargin=10 onload="pageLoaded()">
<script language=javascript>
	var pageStyle = 0;
	var formula = 0;
	var excelFormat = '2003';
	function myOk() {
		parent.rq_hidePopWin();parent.report1_saveAsExcel2( "&excelFormat=" + excelFormat + "&pageStyle=" + pageStyle + "&formula=" + formula + "&ratio=" + document.getElementById('ratio').value );
	}
	function pageLoaded() {
		var winsize = document.getElementById( "winsize" );
		if( winsize != null ) parent._popupResizeTo( winsize.offsetWidth + 50, winsize.offsetHeight + 25 )
	}
</script>
<!-- 导出Excel文件的界面 -->
<script language=javascript>
        //var _excel_font_f = "宋体";
        //var _excel_EE = "请选择分页方式：";
        //var _excel_FF = "不分页";
        //var _excel_GG = "分页";
        //var _excel_HH = "确定";
        //var _excel_JJ = "是否导出公式";
        //var _excel_MM = "请选择导出格式：";
        //var _excel_BL = "显示比例：";
        _initExcelPageStyle();
        document.body.bgcolor = "#ffe4e1";
</script>
<table id=winsize width=280>
	<tr id=formatRow1><td colspan=3 style="FONT-SIZE: 14px; COLOR: royalblue;">
	<script language=javascript>document.write( _excel_MM );</script>
	</td></tr>
	<tr id=formatRow2 style="font-size:14px;color:forestgreen;">
		<td><INPUT onclick="excelFormat='2003';" type=radio CHECKED name=format id=format2003>&nbsp;2003</td>
		<td><INPUT onclick="excelFormat='2007';" type=radio name=format id=format2007>&nbsp;2007</td>
		<td><INPUT onclick="excelFormat='OpenXML';" type=radio name=format id=formatXml>&nbsp;OpenXML</td>
	</tr>
	<tr><td colspan=3 style="FONT-SIZE: 14px; COLOR: royalblue;">
	<script language=javascript>document.write( _excel_EE );</script>
	</td></tr>
	<tr style="font-size:14px;color:forestgreen;"><td>
	<INPUT onclick="pageStyle=0;extFormula.disabled=false;" type=radio CHECKED name=pageStyle>&nbsp;<script language=javascript>document.write( _excel_FF );</script>
	</td><td>
	<INPUT onclick="pageStyle=1;formula=0;extFormula.disabled=true;extFormula.checked=false;" type=radio name=pageStyle>&nbsp;<script language=javascript>document.write( _excel_GG );</script>
	</td><td></td></tr>
	<tr><td colspan=2 style="padding-top:10px;font-size:14px;color:forestgreen;">
	<INPUT type=checkbox id=extFormula onclick="if( this.checked ) formula=1;else formula=0;">&nbsp;<script language=javascript>document.write( _excel_JJ );</script>
	</td><td style="padding-top:10px;font-size:14px;color:forestgreen;"><script language=javascript>document.write( _excel_BL );</script>(%)<input type=text id=ratio name=ration value="100" style="width:35px">
	</td></tr>
	<tr><td colspan=3 align=center style="padding-top:12px">
	<INPUT onclick=myOk() type=button ID="B_HH" style="width:60px;height:22px">
	</td></tr>
</table>
<script language=javascript>
	document.getElementById( "B_HH" ).value = _excel_HH;
</script>
</BODY> </HTML>

