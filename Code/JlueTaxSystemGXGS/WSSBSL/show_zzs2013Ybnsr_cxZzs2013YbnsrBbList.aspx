<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_zzs2013Ybnsr_cxZzs2013YbnsrBbList.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_zzs2013Ybnsr_cxZzs2013YbnsrBbList" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>申报数据查询-增值税一般纳税人</title>
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
<script type="text/javascript" src="/WSSBSL/js/easyUI/tabs.js"></script>
<script type="text/javascript" src="/WSSBSL/js/My97DatePicker/WdatePicker.js" ></script>
<script type="text/javascript" src="/WSSBSL/js/common/common.js"></script>
<script type="text/javascript" src="/WSSBSL/js/common/highcharts.js" charset="utf-8"></script>
<script type="text/javascript" src="/WSSBSL/js/page/zzs2013Ybnsr/cxZzs2013YbnsrBbList.js?ts=new Date().getTime()"></script>
	<style type="text/css">
		form {
			margin: 0;
			padding:0;
		}
	</style>
</head>
<body>  
 	<div class="easyui-panel" id="cxtjDiv" align="left" style="width:auto;background-color:#E0ECFF" data-options="iconCls:'icon-search'">
 		<form id="searchForm">
			&nbsp;
	 		查询时间起：<input id="cxsjQ" name="cxsjQ" class="easyui-validatebox" data-options="required:true" size="12" style="cursor: pointer" onclick="WdatePicker({dateFmt:'yyyy-MM'})"/>
			查询时间止：<input id="cxsjZ" name="cxsjZ" class="easyui-validatebox" data-options="required:true" size="12" style="cursor: pointer" onclick="WdatePicker({dateFmt:'yyyy-MM'})"/>
			<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-search'" onclick="loadZzs2013List()">查 询</a>
		</form>
 	</div>
	<div class="easyui-panel" id="cxjgDiv" align="left" style="height:100px; data-options="iconCls:'icon-ok'">
 		<table id="sbxxList" border="0" align="center" width="100%" 
			cellpadding="3" cellspacing="1" bgcolor="#95B8E7" style="word-break:break-all;">
			<tr>
				<th bgcolor="#E0ECFF" height="15" width="150" align="center" >报表种类</td>
				<th bgcolor="#E0ECFF" align="center" >附加税</td>
				<th bgcolor="#E0ECFF" align="center" >所属期起</td>
				<th bgcolor="#E0ECFF" align="center" >所属期止</td>
				<th bgcolor="#E0ECFF" align="center" >申报状态</td>
				<th bgcolor="#E0ECFF" align="center" >申报时间</td>
				<th bgcolor="#E0ECFF" align="center" >申报类型</td>
				<th bgcolor="#E0ECFF" align="center" >备注</td>
			</tr>
			
	    </table>
 	</div>
	<div id="tabList" class="easyui-tabs" data-options="border:false,tools:'#tab-tools'"></div>
	<div id="tab-tools">
		<a href="javascript:void(0)" id="lbt_toHide" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-tip'" style="display:;" onclick="hideQuery()">↑隐藏↑</a>
		<a href="javascript:void(0)" id="lbt_toShow" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-tip'" style="display:none;" onclick="showQuery()">↓显示↓</a>
		<a href="javascript:void(0)" class="easyui-menubutton" data-options="menu:'#otherMenu',iconCls:'icon-print'" onclick="" style="display:none;">打印报表</a>	</div>
	<div id="otherMenu">
        <div data-options="iconCls:'icon-print'" onclick="lodopPrint()">打印单张报表</div>
        <div data-options="iconCls:'icon-save'" onclick="saveAsExcel()">导出excel </div>
        <div data-options="iconCls:'icon-save'" onclick="saveAsPdf()">导出pdf </div>
    </div>
</body>  
</html>

</body>  
</html>
