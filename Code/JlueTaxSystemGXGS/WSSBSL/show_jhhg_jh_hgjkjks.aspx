<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_jhhg_jh_hgjkjks.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_jhhg_jh_hgjkjks" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<html>
<head>
	<title>海关进口增值税专用缴款书</title>
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
	<script type="text/javascript" src="/WSSBSL/js/page/jhhg/jh_hgjkjks.js"></script>
</head>
<body>
	<div class="easyui-panel" id="tbxxDiv" align="left" style="width:auto;background-color:#E0ECFF" data-options="iconCls:'icon-search'">
		<table width="100%" >
			<tr>
				<td align="center">
				<B>稽核海关相关功能选择：</B>
									<select style="WIDTH: 300px; HEIGHT: 23px" size="1" name="jhhgSelect" id="jhhgSelect" onchange="loadIframe();">
										<option value="">请选择...</option>
										<option value="sbjzqcx">海关进口增值税专用缴款书申报截止期查询</option>
										<option value="mxsjsc">海关进口增值税专用缴款书明细数据上传</option>
										<option value="jhjgcx">海关进口增值税专用缴款书稽核情况查询</option>
										<option value="zlfpxxcx">海关进口增值税专用缴款书滞留发票信息查询</option>
										<option value="jgtzs">海关进口增值税专用缴款书稽核结果通知书下载</option>
									</select>
				</td>
			</tr>
		</table>
 	</div>
	
	<div id="sbjzqcxDiv" style="display:none;">
		<iframe src="/WSSBSL/show_jhhg_jh_hgjkjks_sbjzqcx.aspx" id="sbjzqcxIf" name="sbjzqcxIf" width="100%" height="100%" marginheight="0" marginwidth="0" scrolling="auto" frameborder="0" allowtransparency="true"></iframe>
	</div>
	<div id="mxsjscDiv" style="display:none;">
		<iframe src="/WSSBSL/show_jhhg_jh_hgjkjks_mxsjsc.aspx" id="mxsjscIf" name="mxsjscIf" width="100%" height="100%" marginheight="0" marginwidth="0" scrolling="auto" frameborder="0" allowtransparency="true"></iframe>
	</div>
	<div id="jhjgcxDiv" style="display:none;">
		<iframe src="/WSSBSL/show_jhhg_jh_hgjkjks_jhjgcx.aspx" id="jhjgcxIf" name="jhjgcxIf" width="100%" height="100%" marginheight="0" marginwidth="0" scrolling="auto" frameborder="0" allowtransparency="true"></iframe>
	</div>
	<div id="zlfpxxcxDiv" style="display:none;">
		<iframe src="/WSSBSL/show_jhhg_jh_hgjkjks_zlfpcx.aspx" id="zlfpxxcxIf" name="zlfpxxcxIf" width="100%" height="100%" marginheight="0" marginwidth="0" scrolling="auto" frameborder="0" allowtransparency="true"></iframe>
	</div>
	<div id="jgtzsDiv" style="display:none;">
		<iframe src="/WSSBSL/show_jhhg_jh_hgjkjks_jgtzs.aspx" id="jgtzsIf" name="jgtzsIf" width="100%" height="100%" marginheight="0" marginwidth="0" scrolling="auto" frameborder="0" allowtransparency="true"></iframe>
	</div>
</body>
</html>

