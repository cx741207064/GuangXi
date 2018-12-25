<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_zzs2013Ybnsr_zzs2013YbnsrBbList.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_zzs2013Ybnsr_zzs2013YbnsrBbList" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<html>
<head>
	<title>增值税一般纳税人报表列表</title>
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
	<script type="text/javascript" src="/WSSBSL/js/page/zzs2013Ybnsr/zzs2013YbnsrBbList.js?ts=new Date().getTime()"></script>
</head>
<body>
	<div class="easyui-panel" id="tbxxDiv" align="left" style="width:auto;background-color:#E0ECFF" data-options="iconCls:'icon-search'">
		<table width="100%" >
			<tr><td align="left">
				<B>当期申报有效期起：</B><label id="lb_sbqq"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<B>当期申报有效期止：</B><label id="lb_sbqz"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
		 		<B>所属期起：</B><label id="lb_ssqq"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		 		<B>所属期止：</B><label id="lb_ssqz"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<B>税种类别：</B><label id="lb_szlb"></label><%--<br>
				是否适用农产品增值税进项税额核定扣除办法：--%><input type="checkbox" name="sbncpflag" id="sbncpflag" value="1" onclick="showOrHideNcpTable()" style="display:none;"/>
				</td>
				<td align="right" width="350">
					
					<a id="createNcphzb" style="display:none;" href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-add'" onclick="createNcphzbData()">
						<font color="blue"><B>生成农产品汇总表</B></font>
					</a>
					
					<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-add'" onclick="createZbDate()">
						<font color="blue"><B>生成增值税主表</B></font>
					</a>
					
					&nbsp;&nbsp;<br>
					<a id="addRow" style="display:none;" href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-add'" onclick="addRow()">添加行</a>
					<a id="delRow" style="display:none;" href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-remove'" onclick="delRow()">删除行</a>
					<!--
					<a id="zaro" href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-redo'" onclick="reloadTab()">零申报</a>
			 		-->
					<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-redo'" onclick="submitTableData()">提交申报</a>
					&nbsp;&nbsp;
				</td>
			</tr>
		</table>
 	</div>
    <div id="tabList" class="easyui-tabs" data-options="fix:true,border:false,fit:false,tools:'#tab-tools'"></div>
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

