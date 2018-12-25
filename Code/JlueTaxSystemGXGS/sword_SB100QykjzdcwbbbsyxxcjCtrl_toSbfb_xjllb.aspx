<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SB100QykjzdcwbbbsyxxcjCtrl_toSbfb_xjllb.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SB100QykjzdcwbbbsyxxcjCtrl_toSbfb_xjllb" %>


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
			src='../../sb/sb100/sb100_qykjzdcwbbbsyxxcj_xjllb.js'></script>
        <script type="text/javascript" src="/gt3_public/cacheindex.js"></script>
        <script language="javascript" type="text/javascript"
			src="../../sb/gy/sbdr_gy.js"></script>
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
		<div>
			<div sword='PageInit' onFinish="initV();"></div>
			<div sword="SwordForm" name="nsrxxForm" caption="纳税人基本信息"
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
							<div name="nsrsbh" type="text" rule="must" disable="true"></div>
						</td>
						<th style="text-align: right; padding-right: 6px">
							纳税人名称
						</th>
						<td colspan=3>
							<div name="nsrmc" type="text" rule="must" disable="true"></div>
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
							<div name="skssqz" type="date" disable="true" rule="must"
								returnRealValue=true></div>
						</td>
					</tr>
				</table>
			</div>
			<div sword="SwordForm" name="xjllbxxForm"
				caption="现金流量表(适用执行企业会计制度的企业)" panel="true" userdefine="true">
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col style="width: 35%" />
						<col style="width: 15%" />
						<col style="width: 50%" />
					</colgroup>

					<tr>
						<th style="text-align: center">
							项 目
						</th>
						<th style="text-align: center">
							行次
						</th>
						<th style="text-align: center">
							金额
						</th>
					</tr>
					<tr>
						<th colspan="3" style="text-align: left">
							一、经营活动产生的现金流量:
						</th>
					</tr>

					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h1l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销售商品、提供劳务收到的现金"></div>
						</td>
						<th style="text-align: center">
							1
						</th>
						<td>
							<div name="h1l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h2l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收到的税费返还"></div>
						</td>
						<th style="text-align: center">
							3
						</th>
						<td>
							<div name="h2l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h3l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收到的其他与经营活动有关的现金"></div>
						</td>
						<th style="text-align: center">
							8
						</th>
						<td>
							<div name="h3l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h4l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现金流入小计"></div>
						</td>
						<th style="text-align: center">
							9
						</th>
						<td>
							<div name="h4l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h5l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;购买商品、接受劳务支付的现金"></div>
						</td>
						<th style="text-align: center">
							10
						</th>
						<td>
							<div name="h5l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h6l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支付给职工以及为职工支付的现金"></div>
						</td>
						<th style="text-align: center">
							12
						</th>
						<td>
							<div name="h6l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h7l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支付的各项税费"></div>
						</td>

						<th style="text-align: center">
							13
						</th>
						<td>
							<div name="h7l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h8l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支付的其他与经营活动有关的现金"></div>
						</td>
						<th style="text-align: center">
							18
						</th>
						<td>
							<div name="h8l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h9l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现金流出小计"></div>
						</td>
						<th style="text-align: center">
							20
						</th>
						<td>
							<div name="h9l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h10l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经营活动产生的现金流量净额"></div>
						</td>
						<th style="text-align: center">
							21
						</th>
						<td>
							<div name="h10l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<th colspan="3" style="text-align: left">
							二、投资活动产生的现金流量:
						</th>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h11l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收回投资所收到的现金"></div>
						</td>

						<th style="text-align: center">
							22
						</th>
						<td>
							<div name="h11l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h12l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;取得投资收益所收到的现金"></div>
						</td>

						<th style="text-align: center">
							23
						</th>
						<td>
							<div name="h12l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h13l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;处置固定资产、无形资产和其他长期资产所收回的现金净额"></div>
						</td>
						<th style="text-align: center">
							25
						</th>
						<td>
							<div name="h13l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h14l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收到的其他与投资活动有关的现金"></div>
						</td>

						<th style="text-align: center">
							28
						</th>
						<td>
							<div name="h14l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h15l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现金流入小计"></div>
						</td>

						<th style="text-align: center">
							29
						</th>
						<td>
							<div name="h15l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h16l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;购建固定资产、无形资产和其他长期资产所支付的现金"></div>
						</td>

						<th style="text-align: center">
							30
						</th>
						<td>
							<div name="h16l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h17l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投资所支付的现金"></div>
						</td>
						<th style="text-align: center">
							31
						</th>
						<td>
							<div name="h17l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h18l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支付的其他与投资活动有关的现金"></div>
						</td>
						<th style="text-align: center">
							35
						</th>
						<td>
							<div name="h18l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h19l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现金流出小计"></div>
						</td>
						<th style="text-align: center">
							36
						</th>
						<td>
							<div name="h19l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h20l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投资活动产生的现金流量净额"></div>
						</td>
						<th style="text-align: center">
							37
						</th>
						<td>
							<div name="h20l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<th colspan="3" style="text-align: left">
							三、筹资活动产生的现金流量:
						</th>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h21l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;吸收投资所收到的现金"></div>
						</td>
						<th style="text-align: center">
							38
						</th>
						<td>
							<div name="h21l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h22l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;借款所收到的现金"></div>
						</td>
						<th style="text-align: center">
							40
						</th>
						<td>
							<div name="h22l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h23l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收到的其他与筹资活动有关的现金"></div>
						</td>
						<th style="text-align: center">
							43
						</th>
						<td>
							<div name="h23l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h24l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现金流入小计"></div>
						</td>
						<th style="text-align: center">
							44
						</th>
						<td>
							<div name="h24l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h25l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;偿还债务所支付的现金"></div>
						</td>
						<th style="text-align: center">
							45
						</th>
						<td>
							<div name="h25l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h26l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分配股利、利润或偿付利息所支付的现金"></div>
						</td>
						<th style="text-align: center">
							46
						</th>
						<td>
							<div name="h26l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h27l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支付的其他与筹资活动有关的现金"></div>
						</td>
						<th style="text-align: center">
							52
						</th>
						<td>
							<div name="h27l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h28l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现金流出小计"></div>
						</td>
						<th style="text-align: center">
							53
						</th>
						<td>
							<div name="h28l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h29l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;筹资活动产生的现金流量净额"></div>
						</td>
						<th style="text-align: center">
							54
						</th>
						<td>
							<div name="h29l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h30l1" type="label"
								defValue="四、汇率变动对现金的影响"></div>
						</td>
						<th style="text-align: center">
							55
						</th>
						<td>
							<div name="h30l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h31l1" type="label"
								defValue="五、现金及现金等价物净增加额"></div>
						</td>
						<th style="text-align: center">
							56
						</th>
						<td>
							<div name="h31l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
				</table>

				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col style="width: 35%" />
						<col style="width: 15%" />
						<col style="width: 50%" />
					</colgroup>
					<tr>
						<th colspan="3" style="text-align: left">
							补充资料:
						</th>
					</tr>
					<tr>
						<th style="text-align: center">
							项 目
						</th>
						<th style="text-align: center">
							行次
						</th>
						<th style="text-align: center">
							金额
						</th>
					</tr>
					<tr>

						<th colspan="3" style="text-align: left">
							1.将净利润调节为经营活动现金流量:
						</th>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h32l1" type="label"
								defValue="	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;净利润"></div>
						</td>
						<th style="text-align: center">
							57
						</th>
						<td>
							<div name="h32l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h33l1" type="label"
								defValue="	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加:计提的资产减值准备"></div>
						</td>
						<th style="text-align: center">
							58
						</th>
						<td>
							<div name="h33l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h34l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;固定资产折旧"></div>
						</td>
						<th style="text-align: center">
							59
						</th>
						<td>
							<div name="h34l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h35l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无形资产摊销"></div>
						</td>
						<th style="text-align: center">
							60
						</th>
						<td>
							<div name="h35l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h36l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长期待摊费用摊销"></div>
						</td>
						<th style="text-align: center">
							61
						</th>
						<td>
							<div name="h36l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h37l1" type="label"
								defValue="	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;待摊费用减少(减:增加)"></div>
						</td>
						<th style="text-align: center">
							64
						</th>
						<td>
							<div name="h37l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h38l1" type="label"
								defValue="	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预提费用增加(减:减少)"></div>
						</td>
						<th style="text-align: center">
							65
						</th>
						<td>
							<div name="h38l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h39l1" type="label"
								defValue="	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;处置固定资产、无形资产和其他长期资产的损失(减:收益)"></div>
						</td>
						<th style="text-align: center">
							66
						</th>
						<td>
							<div name="h39l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h40l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;固定资产报废损失"></div>
						</td>
						<th style="text-align: center">
							67
						</th>
						<td>
							<div name="h40l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h41l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;财务费用"></div>
						</td>
						<th style="text-align: center">
							68
						</th>
						<td>
							<div name="h41l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h42l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投资损失(减:收益)"></div>
						</td>
						<th style="text-align: center">
							69
						</th>
						<td>
							<div name="h42l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h43l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;递延税款贷项(减:借项)"></div>
						</td>
						<th style="text-align: center">
							70
						</th>
						<td>
							<div name="h43l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h44l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存货的减少(减:增加)"></div>
						</td>
						<th style="text-align: center">
							71
						</th>
						<td>
							<div name="h44l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h45l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经营性应收项目的减少(减:增加)"></div>
						</td>
						<th style="text-align: center">
							72
						</th>
						<td>
							<div name="h45l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h46l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经营性应付项目的增加(减:减少)"></div>
						</td>
						<th style="text-align: center">
							73
						</th>
						<td>
							<div name="h46l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h47l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他"></div>
						</td>
						<th style="text-align: center">
							74
						</th>
						<td>
							<div name="h47l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h48l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经营活动产生的现金流量净额"></div>
						</td>
						<th style="text-align: center">
							75
						</th>
						<td>
							<div name="h48l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<th colspan="3" style="text-align: left">
							2.不涉及现金收支的投资和筹资活动:
						</th>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h49l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;债务转为资本"></div>
						</td>
						<th style="text-align: center">
							76
						</th>
						<td>
							<div name="h49l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h50l1" type="label"
								defValue="	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一年内到期的可转换公司债券"></div>
						</td>
						<th style="text-align: center">
							77
						</th>
						<td>
							<div name="h50l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h51l1" type="label"
								defValue="	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;融资租入固定资产"></div>
						</td>
						<th style="text-align: center">
							78
						</th>
						<td>
							<div name="h51l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<th colspan="3" style="text-align: left">
							3.现金及现金等价物净增加情况:
						</th>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h52l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现金的期末余额"></div>
						</td>
						<th style="text-align: center">
							79
						</th>
						<td>
							<div name="h52l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h53l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减:现金的期初余额"></div>
						</td>
						<th style="text-align: center">
							80
						</th>
						<td>
							<div name="h53l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h54l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加:现金等价物的期末余额"></div>
						</td>
						<th style="text-align: center">
							81
						</th>
						<td>
							<div name="h54l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h55l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减:现金等价物的期初余额"></div>
						</td>
						<th style="text-align: center">
							82
						</th>
						<td>
							<div name="h55l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h56l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现金及现金等价物净增加额"></div>
						</td>

						<th style="text-align: center">
							83
						</th>
						<td>
							<div name="h56l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
				</table>
			</div>
		</div>
		           
<div sword='SwordToolBar' name='qykjzdInner' class="tab_botton" style="width: 100%"  showType="mini"  id="wtdzsb" isFixed='false'>
<!--  <div name="save" type="save" caption="保存" quickKey="Ctrl+S"  enabled='true' onclick=savefb();></div>												
	<div name="refresh" type="refresh" caption="重置" quickKey="Ctrl+R" enabled='true' onclick=reset();></div>
-->	
<div name="bcBtn" sword="SwordSubmit" btnName="保存" isShow="true"
							postType="ajax" class="submitbutton"
							onSubmitBefore="savefb();" style="margin-right:30px">
</div>
<div name="qxBtn" sword="SwordSubmit" btnName="重置" isShow="true"
							postType="ajax" class="submitbutton" onSubmitBefore="reset();">
</div>
</div>
	</body>

</html>
<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501950500","type":""},{"name":"sessionID","value":"7f7c093bb3194607917c574384b05f40","type":""}]}'></div>

