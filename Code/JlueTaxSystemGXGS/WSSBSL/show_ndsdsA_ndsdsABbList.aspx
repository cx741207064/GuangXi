<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_ndsdsA_ndsdsABbList.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_ndsdsA_ndsdsABbList" %>

<!DOCTYPE html>


<html>
<head>
	<title>企业所得税年度（A类）</title>
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
	<script type="text/javascript" src="/WSSBSL/js/page/ndsdsA/ndsdsABbList.js"></script>
</head>
<body>
	<div class="easyui-panel" id="tbxxDiv" align="left" style="width:auto;background-color:#E0ECFF" data-options="iconCls:'icon-search'">
		<table width="100%" >
			<tr><td align="left">
				<B><span>当期申报有效期起：</span></B><label id="lb_sbqq"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<B>当期申报有效期止：</B><label id="lb_sbqz"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
		 		<B>所属期起：</B><label id="lb_ssqq"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		 		<B>所属期止：</B><label id="lb_ssqz"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
				<B>汇总（合并）纳税企业类别：</B><label id="lb_hznsqylb"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<B>跨地区税收转移标志：</B><label id="lb_kdqsszyqy"></label><br>
				</td>
				<td align="right" width="350">
					<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-add'" onclick="createZbData()">
						<font color="blue"><B>生成主表</B></font>
					</a>
					&nbsp;&nbsp;
					<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-add'" onclick="createFb7Data()">
						<font color="blue"><B>生成附表7</B></font>
					</a>
					&nbsp;&nbsp;<br>
					<a id="addRow" style="display:none;" href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-add'" onclick="addRow()">添加行</a>
					<a id="delRow" style="display:none;" href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-remove'" onclick="delRow()">删除行</a>
					<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true" onclick="zcfxtssmSub()"><font color="blue"><B>政策风险提示扫描</B></font></a>
					<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-redo'" onclick="submitTableDataZcfxtssm()">提交申报</a>
					<!--<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-redo'" onclick="submitTableData()">提交申报</a>-->
					&nbsp;&nbsp;
				</td>
			</tr>
		</table>
 	</div>
    <div id="tabList" class="easyui-tabs" data-options="fix:true,border:false,tools:'#tab-tools'"></div>
	<div id="tab-tools">
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-table'" onclick="showChooseFbWindow()"><font color="red"><B>点击选择附表</B></font></a>
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

