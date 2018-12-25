<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_index_indexMain.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_index_indexMain" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>首页-当期应申报信息列表</title>
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
<script type="text/javascript" src="/WSSBSL/js/common/common.js"></script>
<script type="text/javascript" src="/WSSBSL/js/page/index/indexMain.js?ts=new Date().getTime()"></script>
</head>
<body> 
<div class="easyui-panel" id="dqysbDiv" align="left" style="width:auto;background-color:#E0ECFF" data-options="iconCls:'icon-search'">
	<table id="queryResult"  border="0" align="center" width="100%" 
		cellpadding="3" cellspacing="1" bgcolor="#E0ECFF" style="word-break:break-all;font-size:10px;">
		<tr>
			<td align="center">
				<font style="font-size: 16px;"><strong>当期应申报信息列表</strong></font>
			</td>
		</tr>
	</table>
	<table id="dqysbList"  border="0" align="center" width="100%" 
		cellpadding="3" cellspacing="1" bgcolor="#000000" style="word-break:break-all;font-size:12px;">
		<tr bgcolor="#EEEEEE">
			<th align="center" height="20">报表种类</th>
			<th align="center" width="6%">所属期起</th>
			<th align="center" width="6%">所属期止</th>
			<th align="center" width="9%">申报日期</th>
			<th align="center" width="6%">申报期限</th>
			<th align="center" width="6%">缴款期限</th>
			<th align="center" width="11%">申报状态</th>
			<th align="center" width="6%">缴款状态</th>
			<th align="center" width="7%">申报方式</th>
			<th align="center" width="90">操作</th>
			<th align="center" width="7%">备注</th>
		</tr>
		<tr>
			<td bgcolor="#FFFFFF" colspan="11" align="center"><img src="/WSSBSL/images/zz.gif" height="16" width="16" />正在加载...</td>
		</tr>
	</table>
</div>
</body>  
</html>

