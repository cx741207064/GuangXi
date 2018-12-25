<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_wtkkxy_wtkkxys.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_wtkkxy_wtkkxys" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<html>
<head>
	<title>委托扣款协议书</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<!-- 禁止缓存 开始 -->
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="no-cache" />
	<meta http-equiv="Expires" content="-1" />
	<meta http-equiv="Cache-Control" content="no-cache" />
	<!-- 禁止缓存 结束 -->
	<link href="/WSSBSL/css/css.css" rel="stylesheet" type="text/css"></link>
	<link rel="stylesheet" type="text/css" href="/WSSBSL/easyUI/themes/default/easyui.css">  
	<link rel="stylesheet" type="text/css" href="/WSSBSL/easyUI/themes/icon.css">
	<script type="text/javascript" src="/WSSBSL/easyUI/jquery-1.8.0.min.js"></script>
	<script type="text/javascript" src="/WSSBSL/easyUI/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="/WSSBSL/easyUI/locale/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="/WSSBSL/js/easyUI/tabs.js"></script>
	<script type="text/javascript" src="/WSSBSL/js/common/common.js"></script>
	<script type="text/javascript" src="/WSSBSL/js/page/wtkkxy/wtkkxys.js"></script>
</head>
<body>
	<div class="easyui-panel" id="tbxxDiv" align="left" style="width:auto;background-color:#E0ECFF" data-options="iconCls:'icon-search'">
		<table width="100%" >
			<tr>
				<td align="left" style="color:red;">尊敬的纳税人：</td>
			</tr>
			<tr>
				<td align="left" style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、委托扣款协议打印功能目前仅支持营改增纳税人使用。</td>
			</tr>
			<tr>
				<td align="left" style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、请您核对本协议内容无误后，打印全部三联内容，并在协议“甲方法定代表人”处加盖公章后，交主管国税机关办税服务厅办理委托扣款协议签订工作。</td>
			</tr>
			<tr>
				<td align="right" style="color:red;">国家税务局&nbsp;&nbsp;&nbsp;&nbsp;</td>
			</tr>
			<tr>
				<td align="right" style="color:red;">2016年5月1日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
			</tr>
		</table>
 	</div>
    <div id="tabList" class="easyui-tabs" data-options="fix:true,border:false,tools:'#tab-tools'"></div>
	<div id="tab-tools">  
		<a href="javascript:void(0)" class="easyui-menubutton" data-options="menu:'#otherMenu',iconCls:'icon-print'" onclick="">打印报表</a>
    </div>
	<div id="otherMenu">
        <div data-options="iconCls:'icon-print'" onclick="lodopPrint()">打印单张报表</div>
		<div data-options="iconCls:'icon-save'" onclick="saveAsExcel()">导出excel </div>
        <div data-options="iconCls:'icon-save'" onclick="saveAsPdf()">导出pdf </div>
    </div>
</body>
</html>

