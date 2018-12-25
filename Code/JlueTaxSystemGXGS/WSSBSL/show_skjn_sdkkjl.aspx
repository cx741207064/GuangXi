<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_skjn_sdkkjl.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_skjn_sdkkjl" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>往期税款缴纳记录</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!-- 禁止缓存 开始 -->
<meta http-equiv="Pragma" content="no-cache"/>
<meta http-equiv="no-cache"/>
<meta http-equiv="Expires" content="-1"/>
<meta http-equiv="Cache-Control" content="no-cache"/>
<!-- 禁止缓存 结束 -->
<link rel="stylesheet" type="text/css" href="/WSSBSL/easyUI/themes/default/easyui.css">  
<link rel="stylesheet" type="text/css" href="/WSSBSL/easyUI/themes/icon.css">
<script type="text/javascript" src="/WSSBSL/easyUI/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="/WSSBSL/easyUI/jquery.easyui.min.js"></script>
<script type="text/javascript" src="/WSSBSL/easyUI/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="/WSSBSL/js/My97DatePicker/WdatePicker.js" ></script>
<script type="text/javascript" src="/WSSBSL/js/common/common.js"></script>
<script type="text/javascript" src="/WSSBSL/js/page/skjn/sdkkjl.js?ts=new Date().getTime()"></script>
</head>
<body>  
		<table width="100%" border="0" align="center"  style="word-break:break-all;font-size:10px;">
			<tr bgcolor="#E0ECFF"><td>
		&nbsp;扣款日期起：<input id="cxsjQ" name="cxsjQ" size="10" style="cursor: pointer" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})"/> - 
			     扣款日期止：<input id="cxsjZ" name="cxsjZ" size="10" style="cursor: pointer" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})"/>
			<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-search'" onclick="loadSdkkjlList()">查 询</a>
		</td></tr>
	</table>
	<table id="sdkkjlList" border="0" align="center" width="100%" 
	cellpadding="1" cellspacing="1" bgcolor="#000000" style="word-break:break-all;font-size:10px;">
	<tr>
		<th bgcolor="#E0ECFF" height="20" align="center" >征收项目名称</td>
		<th bgcolor="#E0ECFF" align="center" >应征凭证种类名称</td>
		<th bgcolor="#E0ECFF" align="center" >征收品目名称</td>
		<th bgcolor="#E0ECFF" width="80" align="center" >所属期起</td>
		<th bgcolor="#E0ECFF" width="80" align="center" >所属期止</td>
		<th bgcolor="#E0ECFF" width="100" align="center" >税额</td>
		<th bgcolor="#E0ECFF" width="100" align="center" >扣款日期</td>
		<th bgcolor="#E0ECFF" width="80" align="center" >扣款状态</td>
		<th bgcolor="#E0ECFF" align="center" >扣款结果</td>
	</tr>
</table>
</body>  
</html>

