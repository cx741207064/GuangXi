<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="form.sword_SBGyCtrl_toNsrzcbb.aspx.cs" Inherits="JlueTaxSystemGXGS.form_sword_SBGyCtrl_toNsrzcbb" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
		<script language="javascript" type="text/javascript"
			src="../../swordweb/core/jsimport/Sword.js"></script>
		<script language="javascript" type="text/javascript"
			src="../../gt3_public/jsDelegate.js"></script>
		<script language='javascript' type='text/javascript'
			src='../../sb/sb000/sb_nspgzcbbtzs.js'></script>
	</head>
	<body>
	<div sword='PageInit' onFinish="init();"></div>
		

		<div sword="SwordGrid" name='nsrzcbbtzsGrid' dataX="100%" dataY="160"
			showConsole="false" fenye="false" onRowDbClick="checkMX();"
			checkMoudle="false" caption="纳税评估自查补报通知书" showHeader="true">
			<div caption="选择" name="xz" type="radio" x="8%" ></div>
			<div caption="纳税人识别号" name="nsrsbh" type="text" disabled="true"
				x="27%"></div>
			<div caption="纳税人名称" name="nsrmc" type="text" disabled="true" x="29%"></div>
			<div caption="文书字轨" name="zg" type="text" disabled="true" x="24%"></div>
			<div caption="补正期限" name="bzqx" type="date" disabled="true" x="12%"></div>
		</div>
		<table class="tab_botton" border="0" cellpadding="0" cellspacing="0"
			align="center">
			<tr>
				<td>
					<div name="qdBtn" sword="SwordSubmit" btnName="确定" enabled="true"
						isShow="true" postType="ajax" class="submitbutton"
						onSubmitBefore="qd();">
					</div>
				</td>
				<td>
					<div name="qxBtn" sword="SwordSubmit" btnName="退出" enabled="true"
						isShow="true" postType="ajax" class="submitbutton"
						onSubmitBefore="tc();">
					</div>
				</td>
			</tr>
		</table>
	</body>
</html>
<div id="SwordPageData"  style='display:none' data='{"data":[{"trs":[],"name":"nsrzcbbtzsGrid","sword":"SwordGrid"},{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"a1fa3158455349b7859a713dbf567d06","type":""}]}'></div>

