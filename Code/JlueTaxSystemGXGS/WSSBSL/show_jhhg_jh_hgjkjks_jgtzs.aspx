<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_jhhg_jh_hgjkjks_jgtzs.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_jhhg_jh_hgjkjks_jgtzs" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<html>
<head>
	<title>海关进口增值税专用缴款书明细数据上传</title>
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
<script type="text/javascript" src="/WSSBSL/js/common/highcharts.js" charset="utf-8"></script>
<script type="text/javascript" src="/WSSBSL/js/page/jhhg/jh_hgjkjks_jgtzs.js"></script>
</head>
<body>  
 	<div class="easyui-panel" id="tzsXzqrDiv" align="left" style="width:auto;background-color:#E0ECFF" data-options="iconCls:'icon-search'">
		&nbsp;
 		稽核结果通知书下载确认查询：<select style="WIDTH: 58px; HEIGHT: 23px" size="1" name="year" id="year">
										<option value="2025">2025</option>
										<option value="2024">2024</option>
										<option value="2023">2023</option>
										<option value="2022">2022</option>
										<option value="2021">2021</option>
										<option value="2020">2020</option>
										<option value="2019">2019</option>
										<option value="2018">2018</option>
										<option value="2017">2017</option>
										<option value="2016">2016</option>
										<option value="2015">2015</option>
										<option value="2014">2014</option>
										<option value="2013">2013</option>
										<option value="2012">2012</option>
										<option value="2011">2011</option>
										<option value="2010">2010</option>
									</select>
									年
									<select style="WIDTH: 45px; HEIGHT: 23px" size="1" name="month" id="month">
										<option value="01">01</option>
										<option value="02">02</option>
										<option value="03">03</option>
										<option value="04">04</option>
										<option value="05">05</option>
										<option value="06">06</option>
										<option value="07">07</option>
										<option value="08">08</option>
										<option value="09">09</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
									</select>
									月
			<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-search'" onclick="loadTzsXzqrCx()">下载确认</a>
 	</div>
	<div class="easyui-panel" id="xzqrxxDiv" style="height:50px; data-options="iconCls:'icon-ok'">
		<table id="tzsXzqrList" border="0" align="center" width="100%" cellpadding="3" cellspacing="1" bgcolor="#95B8E7" style="word-break:break-all;">
			<tr>
				<th bgcolor="#E0ECFF" align="center" >下载确认信息</td>
			</tr>
	    </table>
	</div>
	
	<div class="easyui-panel" id="tzsXzDiv" align="left" style="width:auto;background-color:#E0ECFF" data-options="iconCls:'icon-search'">
		<form width="90%" id="queryForm" name="queryForm" action="/WSSBSL/doJhhgTzsXzCx.action" method="post" target="tempIfr">
			&nbsp;
	 		稽核结果通知书下载：<select style="WIDTH: 58px; HEIGHT: 23px" size="1" name="xzYear" id="xzYear">
										<option value="2025">2025</option>
										<option value="2024">2024</option>
										<option value="2023">2023</option>
										<option value="2022">2022</option>
										<option value="2021">2021</option>
										<option value="2020">2020</option>
										<option value="2019">2019</option>
										<option value="2018">2018</option>
										<option value="2017">2017</option>
										<option value="2016">2016</option>
										<option value="2015">2015</option>
										<option value="2014">2014</option>
										<option value="2013">2013</option>
										<option value="2012">2012</option>
										<option value="2011">2011</option>
										<option value="2010">2010</option>
									</select>
									年
									<select style="WIDTH: 45px; HEIGHT: 23px" size="1" name="xzMonth" id="xzMonth">
										<option value="01">01</option>
										<option value="02">02</option>
										<option value="03">03</option>
										<option value="04">04</option>
										<option value="05">05</option>
										<option value="06">06</option>
										<option value="07">07</option>
										<option value="08">08</option>
										<option value="09">09</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
									</select>
									月
			<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-search'" onclick="loadTzsCx()">下 载</a>
		</form>
	</div>
	<iframe name="tempIfr" id="tempIfr" width="0" height="0" src="" frameborder="0" marginheight="0" marginwidth="0"></iframe>
</body>  
</html>



