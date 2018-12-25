<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_index_nsrBaseInfo.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_index_nsrBaseInfo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head> 
    <head>  
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">  
        <title>纳税人基本信息</title>  
		<link href="/WSSBSL/css/css.css" rel="stylesheet" type="text/css"></link>
		<link rel="stylesheet" type="text/css" href="/WSSBSL/easyUI/themes/default/easyui.css">  
		<link rel="stylesheet" type="text/css" href="/WSSBSL/easyUI/themes/icon.css">
        <script type="text/javascript" src="/WSSBSL/easyUI/jquery-1.8.0.min.js"></script>  
        <script type="text/javascript" src="/WSSBSL/easyUI/jquery.easyui.min.js"></script>  
		<script type="text/javascript" src="/WSSBSL/js/page/index/nsrBaseInfo.js?ts=new Date().getTime()"></script>
    </head> 
    
    <body>
    	<table align="center">
    		<tr><td><br><br>
			<table id="nsrxxTb" class="easyui-propertygrid" style="width:600px;" data-options="showGroup:false,scrollbarSize:1">
				<tr>
					<td></td>
					<td>纳税人识别号：</td>
					<td id="nsrsbh"><input type="text" id="nsrsbh" value="" size="50" readonly/></td>
				</tr>
				<tr>
					<td></td>
					<td>纳税人名称：</td>
					<td id="nsrmc"><input type="text" id="nsrmc" value="" size="50" readonly/></td>
				</tr>
				<tr>
					<td a></td>
					<td>银行名称：</td>
					<td id="yh_mc"><input type="text" id="yh_mc" value="" size="50" readonly/></td>
				</tr>
				<tr>
					<td></td>
					<td>银行账号：</td>
					<td id="yhzh"><input type="text" id="yhzh" value="" size="50" readonly/></td>
				</tr>
				<tr>
					<td></td>
					<td>法定代表人：</td>
					<td id="fddbrmc"><input type="text" id="fddbrmc" value="" size="50" readonly/></td>
				</tr>
				<tr>
					<td></td>
					<td>企业登记注册类型：</td>
					<td id="djzclx_mc"><input type="text" id="djzclx_mc" value="" size="50" readonly/></td>
				</tr>
				<tr>
					<td></td>
					<td>邮政编码：</td>
					<td id="scjyd_yb"><input type="text" id="scjyd_yb" value="" size="50" readonly/></td>
				</tr>
				<tr>
					<td></td>
					<td>主管税务机关：</td>
					<td id="swjg_mc"><input type="text" id="swjg_mc" value="" size="50" readonly/></td>
				</tr>
				<tr>
					<td></td>
					<td>所属行业：</td>
					<td id="hy_mc"><input type="text" id="hy_mc" value="" size="50" readonly/></td>
				</tr>
				<tr>
					<td></td>
					<td>适用会计制度：</td>
					<td id="hy_mc"><input type="text" id="sykjzd_mc" value="" size="50" readonly/></td>
				</tr>
				<tr>
					<td></td>
					<td>注册地址：</td>
					<td id="zcdz"><input type="text" id="zcdz" value="" size="50" readonly/></td>
				</tr>
				<tr>
					<td></td>
					<td>营业地址：</td>
					<td id="scjydz"><input type="text" id="scjydz" value="" size="50" readonly/></td>
				</tr>
			</table>
			</td></tr>
		</table>  
        
    </body>  
</html>  
