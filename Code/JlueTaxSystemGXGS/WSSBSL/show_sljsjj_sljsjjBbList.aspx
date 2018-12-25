<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_sljsjj_sljsjjBbList.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_sljsjj_sljsjjBbList" %>

<!DOCTYPE html>


<html>
<head>
	<title>水利建设基金主页</title>
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
	<script type="text/javascript" src="/WSSBSL/js/page/sljsjj/sljsjjBbList.js?ts=new Date().getTime()"></script>
</head>
<body>
	<div class="easyui-panel" id="tbxxDiv" align="left" style="width:auto;background-color:#E0ECFF" data-options="iconCls:'icon-search'">
		<table width="100%" >
			<tr><td align="left">
				<B>所属期起：</B><label id="lb_ssqq"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		 		<B>所属期止：</B><label id="lb_ssqz"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
				<B>当期已申报标志：</B><label id="yisbbz"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		 		<B>当期增值税销售金额：</B><label id="zzsxsje"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
				<B id="sljjzsl_title">水利建设基金征收率：</B><label id="sljjzsl"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
				</td>
				<td align="right" width="350">
					&nbsp;&nbsp;<br>
					<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-redo'" onclick="submitTableData()">提交申报</a>
					&nbsp;&nbsp;
				</td>
			</tr>
		</table>
 	</div>
    <div id="tabList" class="easyui-tabs" data-options="fix:true,border:false,tools:'#tab-tools'"></div>
	<div id="tab-tools">  
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-save'" onclick="saveReport()">保存当前表</a>
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-cancel'" onclick="deleteReport()">删除当前表</a>
		<a href="javascript:void(0)" class="easyui-menubutton" data-options="menu:'#otherMenu',iconCls:'icon-print'" onclick="" style="display:none;">打印报表</a>
    </div>
	<div id="otherMenu">
        <div data-options="iconCls:'icon-print'" onclick="lodopPrint()">打印单张报表</div>
        <div data-options="iconCls:'icon-save'" onclick="saveAsExcel()">导出excel </div>
        <div data-options="iconCls:'icon-save'" onclick="saveAsPdf()">导出pdf </div>
    </div>
</body>
</html>

