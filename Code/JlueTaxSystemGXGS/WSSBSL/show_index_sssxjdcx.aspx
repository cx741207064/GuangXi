<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_index_sssxjdcx.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_index_sssxjdcx" %>

<!DOCTYPE html>
<html>
  <head>
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">  
        <title>涉税事项进度查询</title>  
		<link href="/WSSBSL/css/css.css" rel="stylesheet" type="text/css"></link>
		<link rel="stylesheet" type="text/css" href="/WSSBSL/easyUI/themes/default/easyui.css">  
		<link rel="stylesheet" type="text/css" href="/WSSBSL/easyUI/themes/icon.css">
        <script type="text/javascript" src="/WSSBSL/easyUI/jquery-1.8.0.min.js"></script>  
        <script type="text/javascript" src="/WSSBSL/easyUI/jquery.easyui.min.js"></script>
		 <script type="text/javascript" src="/WSSBSL/js/common/common.js"></script>   
		<script type="text/javascript" src="/WSSBSL/js/page/index/sssxjdcx.js?ts=new Date().getTime()"></script>

  </head>
  
  <body style="margin: 0px;padding: 0px;">
   <div title="涉税事项进度查询" data-options="iconCls:'icon-search'" style="overflow:auto;padding:10px;">
		<table id="sssxjdList" border="0" align="center" width="100%" 
			cellpadding="3" cellspacing="1" bgcolor="#464646" style="word-break:break-all;">
			<tr bgcolor="#E0ECFF">
				<td height="15" width="150" align="center" >纳税人识别号</td>
				<td align="center" >纳税人名称</td>
				<td align="center" >涉税事项名称</td>
				<td align="center" >受理时间</td>
				<td align="center" >流程状态</td>
			</tr>
	    </table>
	</div>
  </body>
</html>

