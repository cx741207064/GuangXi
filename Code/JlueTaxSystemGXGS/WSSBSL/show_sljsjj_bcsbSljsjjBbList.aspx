<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_sljsjj_bcsbSljsjjBbList.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_sljsjj_bcsbSljsjjBbList" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<html>
<head>
	<title>水利建设基金（补充申报）主页</title>
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
	<script type="text/javascript" src="/WSSBSL/js/My97DatePicker/WdatePicker.js" ></script>
	<script type="text/javascript" src="/WSSBSL/js/page/sljsjj/bcsbSljsjjBbList.js?ts=new Date().getTime()"></script>
</head>
<body>
	<div class="easyui-panel" id="tbxxDiv" align="left" style="width:auto;background-color:#E0ECFF" data-options="iconCls:'icon-search'">
		<table width="100%" >
			<tr><td align="left">
				<div id="fgth_div" style="display:none;">
					<B>所属期起：</B>
					<input id="ssqq" name="ssqq" class="easyui-validatebox" data-options="required:true" size="12" style="cursor: pointer;" onclick="WdatePicker({dateFmt:'yyyy-MM',maxDate:$('#ssqz').val()})"/>&nbsp;&nbsp;
			 		<B>所属期止：</B>
					<input id="ssqz" name="ssqz" class="easyui-validatebox" data-options="required:true" size="12" style="cursor: pointer;" onclick="WdatePicker({dateFmt:'yyyy-MM',minDate:$('#ssqq').val()})"/>&nbsp;&nbsp;
					<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-redo'" onclick="startSb()">开始填报</a><br>
				</div>
				<div id="gth_div" style="display:none;">
					<B>所属期：</B>
					<input id="ssq" name="ssq" class="easyui-validatebox" data-options="required:true" size="12" style="cursor: pointer;" onclick="WdatePicker({dateFmt:'yyyy',maxDate:new Date()})"/>&nbsp;&nbsp;
					<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-redo'" onclick="startSb()">开始填报</a><br>
				</div>
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
		<a href="javascript:void(0)" class="easyui-menubutton" data-options="menu:'#otherMenu',iconCls:'icon-print'" onclick="">打印报表</a>
    </div>
	<div id="otherMenu">
        <div data-options="iconCls:'icon-print'" onclick="lodopPrint()">打印单张报表</div>
        <div data-options="iconCls:'icon-save'" onclick="saveAsExcel()">导出excel </div>
        <div data-options="iconCls:'icon-save'" onclick="saveAsPdf()">导出pdf </div>
    </div>
</body>
</html>

