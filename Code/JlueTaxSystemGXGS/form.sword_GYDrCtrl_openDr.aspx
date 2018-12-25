<%@ Page Language="C#" AutoEventWireup="true" CodeFile="form.sword_GYDrCtrl_openDr.aspx.cs" Inherits="form_sword_GYDrCtrl_openDr" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<script language="javascript" type="text/javascript"
			src="../../swordweb/core/jsimport/Sword.js"></script>
		<script type="text/javascript" src="../jspt/styles/style.js"></script>
	</head>
	<body>
		<div class="wrapper">
			<div sword='PageInit' onFinish="init();"></div>
			<div sword='SwordForm' name='saveStudent0' caption='申报数据导入' userdefine='true'>
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<tr>
						<th style="width: 25%">上传文件</th>
						<td style="width: 75%">
							<div caption='上传文件' name='drForm' type="file" isMulti="false"></div>
						</td>
					</tr>
				</table>
			</div>
			<table class="tab_botton" cellpadding="0" cellspacing="0"
				align="center">
				<tr>
					<td>
						<div name="importBtn" sword="SwordSubmit" btnName="导入上传文件"
							isShow="true" postType="ajax" class="submitbutton"
							 isRedirect=false rule="must" 
							onSubmitBefore="setTid()">
							<div widgetName="saveStudent0"></div>
						</div>
					</td>
				</tr>
			</table>
		</div>
		<script language='javascript' type='text/javascript'
			src='../../gy/dr/gydr.js'></script>
	</body>
</html>
<div id="SwordPageData"  style='display:none;' data='{"data":[{"name":"gydrYzpzzlDm","value":null,"type":""},{"name":"gydrCtrl","value":"SB001XfssbCtrl_getDrxx","type":""},{"name":"djxh","value":null,"type":""},{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"aa4d822e40e84483833ab5bde9bcedab","type":""}]}'></div>

