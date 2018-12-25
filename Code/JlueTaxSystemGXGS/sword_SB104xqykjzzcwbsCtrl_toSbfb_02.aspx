<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SB104xqykjzzcwbsCtrl_toSbfb_02.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SB104xqykjzzcwbsCtrl_toSbfb_02" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>金税三期业务工作门户</title>
		<script language="javascript" type="text/javascript"
			src="../../swordweb/core/jsimport/Sword.js"></script>
		<script language="javascript" type="text/javascript"
			src="../../gt3_public/formula_engine.js"></script>
		<script language='javascript' type='text/javascript'
			src='../../sb/sb104/sb104_xjllb.js'></script>
       <script type="text/javascript" src="/gt3_public/cacheindex.js"></script>
	</head>
	<body> 
	<!-- 缓存 -->
	<div style="position: absolute; top: 0; left: -20"
		id="_persist_flash_wrap">
		<center>
			<object id="_persist_flash" name="_persist_flash" width="1"
				height="1" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">
				<param name="movie"
					value="/swordweb/widgets/SwordClientCache/swordcache.swf"></param>
				<param name="allowFullScreen" value="true"></param>
				<param name="allowscriptaccess" value="always"></param>
				<param name="quality" value="high" />
				<param name="flashvars" value="autostart=true" />
				<embed id="ex_persist_flash"
					src="/swordweb/widgets/SwordClientCache/swordcache.swf"
					type="application/x-shockwave-flash" width="1" height="1"
					allowscriptaccess="always" quality="high"
					flashvars="autostart=true"></embed>
			</object>
			<div style="display: none; font-size: 30px;" id="_persist_flash_text">为了系统使用更顺畅，请点击【允许】按钮。</div>
		</center>
	</div>
	<!-- 缓存 -->
		<div class="wrapper">
			<div sword='PageInit' onFinish="initV();"></div>
			
			<div sword="SwordForm" name="nsrxxForm3" caption="纳税人基本信息"
				panel="true" userdefine="true" vType="fldiv">
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col style="width: 15%" />
						<col style="width: 20%" />
						<col style="width: 15%" />
						<col style="width: 20%" />
						<col style="width: 10" />
						<col style="width: 20%" />
					</colgroup>
					<tr>
						<th style="text-align: right; padding-right: 6px">
							<span class="red">*</span>纳税人识别号
						</th>
						<td>
							<div name="nsrsbh" type="text" disable="true"></div>
						</td>
						<th style="text-align: right; padding-right: 6px">
							纳税人名称
						</th>
						<td colspan=3>
							<div name="nsrmc" type="text" disable="true"></div>
						</td>
					</tr>
					<tr>
						<th style="text-align: right; padding-right: 6px">
							<span class="red">*</span>报送日期
						</th>
						<td>
							<div name="bsrq" type="date" rule="must" disable="true"></div>
						</td>
						<th style="text-align: right; padding-right: 6px">
							<span class="red">*</span>所属期起
						</th>
						<td style="border-right: none;">
							<div name="skssqq" type="date" rule="must" disable="true"></div>
						</td>
						<th
							style="border-left: none; border-right: none; text-align: center">
							<span class="red">*</span>所属期止
						</th>
						<td style="border-left: none">
							<div name="skssqz" type="date" rule="must" disable="true"></div>
						</td>
					</tr>
				</table>
			</div>

			<div sword="SwordForm" name="xjllbxxForm"
				caption="现金流量表(适用执行小企业会计准则的企业)" panel="true" userdefine="true">
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col style="width: 35%" />
						<col style="width: 5%" />
						<col style="width: 30%" />
						<col style="width: 30%" />
					</colgroup>

					<tr>
						<th style="text-align: center">
							项 目
						</th>
						<th style="text-align: center">
							行次
						</th>
						<th style="text-align: center">
							本月金额
						</th>
						<th style="text-align: center">
							本年累计金额
						</th>
					</tr>
					<tr>
						<th colspan="4" style="text-align: left">
							一、经营活动产生的现金流量:
						</th>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h1l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销售产成品、商品、提供劳务收到的现金"></div>
						</td>
						<th style="text-align: center">
							1
						</th>
						<td>
							<div name="h1l3" type="text" defValue="0.00" onblur="jsbnlja(1)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h1l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h2l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收到的其他与经营活动有关的现金"></div>
						</td>
						<th style="text-align: center">
							2
						</th>
						<td>
							<div name="h2l3" type="text" defValue="0.00" onblur="jsbnlja(2)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h2l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h3l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;购买原材料、商品、接受劳务支付的现金"></div>
						</td>
						<th style="text-align: center">
							3
						</th>
						<td>
							<div name="h3l3" type="text" defValue="0.00" onblur="jsbnlja(3)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h3l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h4l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支付的职工薪酬"></div>
						</td>
						<th style="text-align: center">
							4
						</th>
						<td>
							<div name="h4l3" type="text" defValue="0.00" onblur="jsbnlja(4)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h4l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h5l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支付的税费"></div>
						</td>
						<th style="text-align: center">
							5
						</th>
						<td>
							<div name="h5l3" type="text" defValue="0.00" onblur="jsbnlja(5)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h5l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h6l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支付的其他与经营活动有关的现金"></div>
						</td>
						<th style="text-align: center">
							6
						</th>
						<td>
							<div name="h6l3" type="text" defValue="0.00" onblur="jsbnlja(6)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h6l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h7l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经营活动产生的现金流量净额"></div>
						</td>
						<th style="text-align: center">
							7
						</th>
						<td>
							<div name="h7l3" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h7l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<th colspan="4" style="text-align: left">
							二、投资活动产生的现金流量:
						</th>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h8l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收回短期投资、长期债券投资和长期股权投资收到的现金"></div>
						</td>
						<th style="text-align: center">
							8
						</th>
						<td>
							<div name="h8l3" type="text" defValue="0.00" onblur="jsbnlja(8)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h8l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h9l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;取得投资收益收到的现金"></div>
						</td>
						<th style="text-align: center">
							9
						</th>
						<td>
							<div name="h9l3" type="text" defValue="0.00" onblur="jsbnlja(9)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h9l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h10l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;处置固定资产、无形资产和其他非流动资产收回的现金净额"></div>
						</td>
						<th style="text-align: center">
							10
						</th>
						<td>
							<div name="h10l3" type="text" defValue="0.00"
								onblur="jsbnlja(10)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h10l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h11l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;短期投资、长期债券投资和长期股权投资支付的现金"></div>
						</td>
						<th style="text-align: center">
							11
						</th>
						<td>
							<div name="h11l3" type="text" defValue="0.00"
								onblur="jsbnlja(11)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h11l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h12l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;购建固定资产、无形资产和其他非流动资产支付的现金"></div>
						</td>
						<th style="text-align: center">
							12
						</th>
						<td>
							<div name="h12l3" type="text" defValue="0.00"
								onblur="jsbnlja(12)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h12l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h13l1" type="label"
								rule="number_must"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投资活动产生的现金流量净额"></div>
						</td>
						<th style="text-align: center">
							13
						</th>
						<td>
							<div name="h13l3" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h13l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<th colspan="4" style="text-align: left">
							三、筹资活动产生的现金流量:
						</th>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h14l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;取得借款收到的现金"></div>
						</td>
						<th style="text-align: center">
							14
						</th>
						<td>
							<div name="h14l3" type="text" defValue="0.00"
								onblur="jsbnlja(14)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h14l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h15l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;吸收投资者投资收到的现金"></div>
						</td>
						<th style="text-align: center">
							15
						</th>
						<td>
							<div name="h15l3" type="text" defValue="0.00"
								onblur="jsbnlja(15)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h15l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h16l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;偿还借款本金支付的现金"></div>
						</td>
						<th style="text-align: center">
							16
						</th>
						<td>
							<div name="h16l3" type="text" defValue="0.00"
								onblur="jsbnlja(16)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h16l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h17l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;偿还借款利息支付的现金"></div>
						</td>
						<th style="text-align: center">
							17
						</th>
						<td>
							<div name="h17l3" type="text" defValue="0.00"
								onblur="jsbnlja(17)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h17l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h18l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分配利润支付的现金"></div>
						</td>
						<th style="text-align: center">
							18
						</th>
						<td>
							<div name="h18l3" type="text" defValue="0.00"
								onblur="jsbnlja(18)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h18l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h19l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;筹资活动产生的现金流量净额"></div>
						</td>
						<th style="text-align: center">
							19
						</th>
						<td>
							<div name="h19l3" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h19l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h20l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四、现金净增加额"></div>
						</td>
						<th style="text-align: center">
							20
						</th>
						<td>
							<div name="h20l3" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h20l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h21l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加:期初现金余额"></div>
						</td>
						<th style="text-align: center">
							21
						</th>
						<td>
							<div name="h21l3" type="text" defValue="0.00"
								onblur="jsbnlja(21)"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h21l2" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h22l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;五、期末现金余额"></div>
						</td>
						<th style="text-align: center">
							22
						</th>
						<td>
							<div name="h22l3" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h22l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
					</tr>
				</table>


			</div>

		</div>
		
<div sword='SwordToolBar' name='qykjzdInner' style="width: 100%;"
	class="tab_botton" showType="mini" id="wtdzsb" isFixed='false'>
	<!--  <div name="save" type="save" caption="保存" quickKey="Ctrl+S"  enabled='true' onclick="saveTrue();"></div>												
	<div name="refresh" type="refresh" caption="重置" quickKey="Ctrl+R" enabled='true' onclick="reset();"></div>
-->
	<div name="bcBtn" sword="SwordSubmit" btnName="保存" isShow="true"
	postType="ajax" class="submitbutton" onSubmitBefore="savefb();" style="margin-right:30px" ></div>
	<div name="qxBtn" sword="SwordSubmit" btnName="重置" isShow="true"
		postType="ajax" class="submitbutton" onSubmitBefore="reset();"></div>
</div>


	</body>

</html>
<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501950500","type":""},{"name":"sessionID","value":"c5499495e9f14c73a817275f6685617f","type":""}]}'></div>

