<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_scxz_yffyjjkc_sc.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_scxz_yffyjjkc_sc" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<html>
<head>
	<title>研发费加计扣除_上传</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<!-- 禁止缓存 开始 -->
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="no-cache" />
	<meta http-equiv="Expires" content="-1" />
	<meta http-equiv="Cache-Control" content="no-cache" />
	<!-- 禁止缓存 结束 -->
<link rel="stylesheet" type="text/css" href="/WSSBSL/easyUI/themes/default/easyui.css">  
<link rel="stylesheet" type="text/css" href="/WSSBSL/easyUI/themes/icon.css">
<script type="text/javascript" src="/WSSBSL/easyUI/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="/WSSBSL/easyUI/jquery.easyui.min.js"></script>
<script type="text/javascript" src="/WSSBSL/easyUI/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="/WSSBSL/js/easyUI/tabs.js"></script>
<script type="text/javascript" src="/WSSBSL/js/common/common.js"></script>
<script type="text/javascript" src="/WSSBSL/js/page/scxz/yffyjjkc_sc.js"></script>
</head>
<body>  
 	<div class="easyui-panel" id="yffyjjkcscdiv" align="left" style="width:auto;background-color:#E0ECFF" data-options="iconCls:'icon-search'">
		<form action="" method="post" id="uploadForm" name="uploadForm" enctype="multipart/form-data" target="yffyjjkcscIfr">
			<input type="hidden" id="uploadFjName" name="uploadFjName"/>
			<input type="hidden" id="uploadFjSsqnd" name="uploadFjSsqnd"/>
			&nbsp;请选择要上传的附件：
			<select style="WIDTH: auto; HEIGHT: 23px" size="1" name="yffyjjkcBbmc" id="yffyjjkcBbmc">
				<option value="">-------------------------请选择报表------------------------</option>
				<!--<option value="YFFY_JJKC_FJ5">附件5 “研发支出”辅助账汇总表</option>-->
				<option value="YFFY_JJKC_FJ6">附件6 研发项目可加计扣除研究开发费用情况归集表</option>
			</select>
			所属期年度：
			<select style="WIDTH: auto; HEIGHT: 23px" size="1" name="yffyjjkcSsqnd" id="yffyjjkcSsqnd">
				<option value="2016">2016</option>
				<option value="2017">2017</option>
				<option value="2018">2018</option>
				<option value="2019">2019</option>
				<option value="2020">2020</option>
			</select>
			<input type="file" size="70" id="uploadFile" name="uploadFile" />
			<input type="hidden" name="uploadFilename" id="uploadFilename" />
			<input type="button" id="bt_upload" class="button2" value="上传" onclick="uploadFj()" />
			
			<table border="0" align="left" cellpadding="1" cellspacing="1" style="font-size:12px;"> 
				<tr> 
					<td>
						<font color="red"><br><br>
						<b>&nbsp;温馨提示：</b></br>
						    &nbsp;根据《国家税务总局关于企业研究开发费用税前加计扣除政策有关问题的公告》（国家税务总局公告2015年第97号）的规定：</br>
							&nbsp;企业应按照国家财务会计制度要求，对研发支出进行会计处理。研发项目立项时应设置研发支出辅助账，由企业留存备查。</br>
							&nbsp;年末汇总分析填报研发支出辅助账汇总表，并在报送《年度财务会计报告》的同时随附注一并报送主管税务机关。汇总表在“网报系统－数据采集（财务报表）－年报”模块中提供在线填报。</br>
							&nbsp;企业年度纳税申报时，根据研发支出辅助账汇总表填报研发项目可加计扣除研发费用情况归集表，在年度纳税申报时随申报表一并报送。归集表在“网报系统－报表填报－企业所得税年度A类”模块中提供在线填报。</br>
							&nbsp;请从下方下载Excel模版,填写数据后再上传Excel文件。</br>
						</font>
					</td> 
				</tr>
			</table>
		</form>
		<iframe name="yffyjjkcscIfr" id="yffyjjkcscIfr" width="0" height="0" src="" frameborder="0" marginheight="0" marginwidth="0"></iframe>
 	</div>
</body>  
</html>



