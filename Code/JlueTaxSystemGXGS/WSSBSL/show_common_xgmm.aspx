<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_common_xgmm.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_common_xgmm" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>修改密码</title>
<!-- 禁止缓存 开始 -->
<meta http-equiv="Pragma" content="no-cache"/>
<meta http-equiv="no-cache"/>
<meta http-equiv="Expires" content="-1"/>
<meta http-equiv="Cache-Control" content="no-cache"/>
<!-- 禁止缓存 结束 -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" href="/WSSBSL/easyUI/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="/WSSBSL/easyUI/themes/icon.css">
<script type="text/javascript" src="/WSSBSL/easyUI/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="/WSSBSL/easyUI/jquery.easyui.min.js"></script>
<script type="text/javascript" src="/WSSBSL/easyUI/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="/WSSBSL/js/page/common/xgmm.js?ts=new Date().getTime()"></script>
<style type="text/css">
<!--
body,td,th {
	font-size: 9pt;
}
.style2 {color: #FF0000}
.style3 {color: #000000}
-->
</style>
</head>
<body>
<form id="frmXgmm">
	<table width="450" border="0" align="center" cellpadding="2" cellspacing="3" bordercolor="#993300">
	  <tr bordercolor="#EEEEEE">
	    <td><div align="right">旧密码：</div></td>
	    <td align="center" bordercolor="#EEEEEE"><input class="easyui-validatebox" type="password" data-options="required:true,validType:'length[1,20]'" id="oldpwd"></td>
	    <td class="style2">*<span class="style3">请输入原密码。</span></td>
	  </tr>
	  <tr bordercolor="#EEEEEE">
	    <td><div align="right">新密码：</div></td>
	    <td align="center" bordercolor="#EEEEEE">
	    	<input class="easyui-validatebox" type="password" data-options="required:true,validType:'length[1,20]'" id="password1">
		</td>
	    <td class="style2">*<span class="style3">请输入新密码。</span></td>
	  </tr>
	  <tr bordercolor="#EEEEEE">
	    <td><div align="right">确认新密码：</div></td>
	    <td align="center" bordercolor="#EEEEEE">
	    	<input class="easyui-validatebox" type="password" data-options="required:true,validType:'length[1,20]'" id="password2">
		</td>
	    <td class="style2">*<span class="style3">请再次输入新密码。</span></td>
	  </tr>
	</table>
</form>
</body>
</html>
