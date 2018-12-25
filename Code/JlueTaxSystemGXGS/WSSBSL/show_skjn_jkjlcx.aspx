<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_skjn_jkjlcx.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_skjn_jkjlcx" %>

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
<script type="text/javascript" src="/WSSBSL/js/page/skjn/jkjlcx.js?ts=new Date().getTime()"></script>
</head>
<body>  
		<table width="100%" border="0" align="center"  style="word-break:break-all;font-size:10px;">
			<tr bgcolor="#E0ECFF"><td>
		&nbsp;查询税种：<select id="zsxmDm">
			<option value="10101" selected>增值税</option>
    		<option value="10102">消费税</option>
    		<option value="10104">企业所得税</option>
    		<option value="10106">利息所得税</option>
    		<option value="10116">车辆购置税</option>
    		<option value="30126">文化事业建设费</option>
    		<option value="30221">水利建设基金</option>
			<option value="10109">城市维护建设税</option>
			<option value="30203">教育费附加</option>
			<option value="30216">地方教育费附加</option>
			</select>
		&nbsp;所属时期起：<input id="cxsjQ" name="cxsjQ" size="10" style="cursor: pointer" onclick="WdatePicker({dateFmt:'yyyy-MM'})"/> - 
			     所属时期止：<input id="cxsjZ" name="cxsjZ" size="10" style="cursor: pointer" onclick="WdatePicker({dateFmt:'yyyy-MM'})"/>
			<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-search'" onclick="loadWqjkjlList()">查 询</a>
		</td></tr>
	</table>
	<table id="wqjkjlList" border="0" align="center" width="100%" 
	cellpadding="1" cellspacing="1" bgcolor="#000000" style="word-break:break-all;font-size:10px;">
	<tr>
		<th bgcolor="#E0ECFF" height="20" align="center" >征收项目名称</td>
		<th bgcolor="#E0ECFF" align="center" >应征凭证种类名称</td>
		<th bgcolor="#E0ECFF" align="center" >征收品目名称</td>
		<th bgcolor="#E0ECFF" width="80" align="center" >所属期起</td>
		<th bgcolor="#E0ECFF" width="80" align="center" >所属期止</td>
		<th bgcolor="#E0ECFF" width="100" align="center" >税额</td>
	</tr>
</table>
</body>  
</html>

