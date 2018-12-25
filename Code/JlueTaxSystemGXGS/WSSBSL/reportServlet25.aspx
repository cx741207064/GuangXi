<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="reportServlet25.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.reportServlet25" %>

<!DOCTYPE html>

<HTML><head><title>设置PDF导出属性</title>
<script language=javascript>
var _pdf_font_f, _pdf_EE, _pdf_FF, _pdf_GG, _pdf_HH, _pdf_II, _pdf_JJ;
function _initPdfExportStyle(){
_pdf_font_f = "宋体";
_pdf_EE = "请设置导出属性：";
_pdf_FF = "分页";
_pdf_GG = "不分页";
_pdf_HH = "确定";
_pdf_II = "导出文字为图形方式";
_pdf_JJ = "导出文字为文本方式";
}
</script>
</head>
<BODY BGCOLOR="white" leftMargin=15 topMargin=10 onload="pageLoaded()">
<script language=javascript>
	var expStyle = 'graph';
	var paged = 1;
	function myOk() {
		parent.rq_hidePopWin();parent.report1_saveAsPdf2( "&expStyle=" + expStyle + "&paged=" + paged );
	}
	function pageLoaded() {
		var winsize = document.getElementById( "winsize" );
		if( winsize != null ) parent._popupResizeTo( winsize.offsetWidth + 50, winsize.offsetHeight + 25 )
	}
</script>
<!-- 导出PDF文件的界面 -->
<script language=javascript>
        //var _pdf_font_f = "宋体";
        //var _pdf_FF = "分页";
        //var _pdf_GG = "不分页";
        //var _pdf_HH = "确定";
        //var _pdf_II = "导出文字为图形方式";
        //var _pdf_JJ = "导出文字为文本方式";
        _initPdfExportStyle();
        document.body.bgcolor = "#ffe4e1";
</script>

<table id=winsize width=210>
	<tr><td style="FONT-SIZE: 13px; COLOR: forestgreen;" colspan=2>
		<INPUT onclick="expStyle='graph'" type=radio CHECKED name=expStyle>&nbsp;<script language=javascript>document.write( _pdf_II );</script>
	</td></tr>
	<tr><td style="FONT-SIZE: 13px; COLOR: forestgreen;" colspan=2>
		<INPUT onclick="expStyle='text'" type=radio name=expStyle>&nbsp;<script language=javascript>document.write( _pdf_JJ );</script>
	</td></tr>
	<tr style="FONT-SIZE: 13px; COLOR: forestgreen;">
	<td style="padding-top:12px"><INPUT onclick="paged=1" type=radio checked name=paged>&nbsp;<script language=javascript>document.write( _pdf_FF );</script></td>
	<td style="padding-top:12px"><INPUT onclick="paged=0" type=radio name=paged>&nbsp;<script language=javascript>document.write( _pdf_GG );</script></td></tr>
	<tr><td align=center colspan=2 style="padding-top:12px">
		<INPUT onclick=myOk() type=button ID="B_HH"  style="WIDTH: 60px;height:22px">
	</td></tr>
</table>
<script language=javascript>
	document.getElementById( "B_HH" ).value = _pdf_HH;
</script>
</BODY> </HTML>

