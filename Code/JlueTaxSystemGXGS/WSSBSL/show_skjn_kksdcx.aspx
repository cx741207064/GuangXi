<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_skjn_kksdcx.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_skjn_kksdcx" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>扣款锁定情况查询</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!-- 禁止缓存 开始 -->
<meta http-equiv="Pragma" content="no-cache"/>
<meta http-equiv="no-cache"/>
<meta http-equiv="Expires" content="-1"/>
<meta http-equiv="Cache-Control" content="no-cache"/>
<!-- 禁止缓存 结束 -->
<link rel="stylesheet" type="text/css" href="/WSSBSL/easyUI/themes/default/easyui.css">  
<link rel="stylesheet" type="text/css" href="/WSSBSL/easyUI/themes/icon.css">
<!-- 分页样式 -->
<script type="text/javascript" src="/WSSBSL/easyUI/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="/WSSBSL/easyUI/jquery.easyui.min.js"></script>
<script type="text/javascript" src="/WSSBSL/easyUI/locale/easyui-lang-zh_CN.js"></script>
<!-- 通用JS脚本 -->
<script src="/WSSBSL/js/common/common.js" type="text/javascript"></script>
<!-- 查询脚本 -->
<script type="text/javascript" src="/WSSBSL/js/page/skjn/kksdcx.js"></script>
	<style type="text/css">
		body {
			margin-left: 0px;
			margin-top: 0px;
			margin-right: 0px;
			margin-bottom: 0px;
		}
		html { overflow-x: auto; overflow-y: auto; border:0;}
		form {
			margin: 0;
			padding:0;
		}
		* {
			font-size: 12px;
			font-family: Verdana, Arial, "宋体";
		}
	</style>
</head>
<body>  
<table id="kksdcxList" border="0" align="center" width="100%" 
	cellpadding="1" cellspacing="1" bgcolor="#000000" style="word-break:break-all;font-size:10px;">
	<tr>
		<th bgcolor="#E0ECFF" height="20" align="center" >征收项目</td>
		<th bgcolor="#E0ECFF" height="20" align="center" >凭证种类</td>
		<th bgcolor="#E0ECFF" height="20" align="center" >征收品目</td>
		<th bgcolor="#E0ECFF" width="80" align="center" >所属期起</td>
		<th bgcolor="#E0ECFF" width="80" align="center" >所属期止</td>
		<th bgcolor="#E0ECFF" width="100" align="center" >税额</td>
		<th bgcolor="#E0ECFF" width="100" align="center" >应征发生日期</td>
		<th bgcolor="#E0ECFF" width="80" align="center" >扣款状态</td>
	</tr>
</table>
</body>  
</html>

