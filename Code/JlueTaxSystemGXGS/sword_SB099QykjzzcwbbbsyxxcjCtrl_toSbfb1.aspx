<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SB099QykjzzcwbbbsyxxcjCtrl_toSbfb1.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SB099QykjzzcwbbbsyxxcjCtrl_toSbfb1" %>

 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>金税三期业务工作门户</title>
		<script language="javascript" type="text/javascript" src="../../swordweb/core/jsimport/Sword.js"></script>
		<script language="javascript" type="text/javascript" src="../../gt3_public/formula_engine.js"></script>
		<script language="javascript" type="text/javascript" src="../../../gt3_public/SwordGrid_ex.js"></script>
		<link rel="stylesheet" type="text/style" href="../../../gt3_public/styles/grid_comm.style" />
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
		<div class="wrapper" style="width:100%">
			<div sword='PageInit' onFinish="initV();"></div>

			<div sword="SwordForm" name="nsrxxForm3" caption="纳税人基本信息" panel="true"
			vType="fldiv" userdefine="true">
			<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
				<colgroup>
						<col style="width: 20%" />
						<col style="width: 20%" />
						<col style="width: 20%" />
						<col style="width: 16%" />
						<col style="width: 8%" />
						<col style="width: 16%" />
				</colgroup>
				<tr>
					<th>
						纳税人识别号
					</th>
					<td>
						<div name="nsrsbh" type="text" rule="must" disable="true">
						</div>
					</td>
					<th>
						纳税人名称
					</th>
					<td colspan=3>
						<div name="nsrmc" type="text" rule="must" disable="true">
						</div>
					</td>
				</tr>
				<tr>
					<th>
						报送日期
					</th>
					<td>
						<div name="bsrq" type="date" rule="must" disable="true">
						</div>
					</td>
					<th>
						所属期起
					</th>
					<td>
						<div name="skssqq" type="date" rule="must" disable="true">
						</div>
					</td>
					<th>
						所属期止
					</th>
					<td>
						<div name="skssqz" type="date" rule="must" disable="true">
						</div>
					</td>
				</tr>
			</table>


		</div>
		<div sword="SwordForm" name="xjllbxxForm"
			caption="现金流量表(适用执行企业会计准则的一般企业)" panel="true" vType="fldiv"
			userdefine="true">
			<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
				<colgroup>
						<col style="width: 40%" />
						<col style="width: 30%" />
						<col style="width: 30%" />
				</colgroup>
				<tr>
					<th style="text-align:center;">
						项 目
					</th>
					<th style="text-align:center;">
						本期金额
					</th>
					<th style="text-align:center;">
						上期金额
					</th>
				</tr>
				<tr>
					<th style="text-align:left;">
						&nbsp;一、经营活动产生的现金流量:
					</th>
					<th></th>
					<th></th>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h1l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销售商品、提供劳务收到的现金"></div>
					</td>	
					<td>
						<div name="h1l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h1l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h2l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收到的税费返还"></div>
					</td>	
					<td>
						<div name="h2l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h2l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h3l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收到其他与经营活动有关的现金"></div>
					</td>	
					<td>
						<div name="h3l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h3l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h4l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经营活动现金流入小计"></div>
					</td>	
					<td>
						<div name="h4l2" type="text" defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h4l3" type="text" defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h5l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;购买商品、接受劳务支付的现金"></div>
					</td>	
					<td>
						<div name="h5l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h5l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h6l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支付给职工以及为职工支付的现金"></div>
					</td>	
					<td>
						<div name="h6l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h6l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h7l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支付的各项税费"></div>
					</td>	
					<td>
						<div name="h7l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h7l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h8l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支付其他与经营活动有关的现金"></div>
					</td>	
					<td>
						<div name="h8l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h8l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h9l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经营活动现金流出小计"></div>
					</td>	
					<td>
						<div name="h9l2" type="text" defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h9l3" type="text" defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h10l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经营活动产生的现金流量净额"></div>
					</td>		
					<td>
						<div name="h10l2" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h10l3" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<th style="text-align:left;">
						&nbsp;二、投资活动产生的现金流量:
					</th>
					<th style="text-align:left;"></th>
					<th></th>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h11l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收回投资收到的现金"></div>
					</td>
					<td>
						<div name="h11l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h11l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h12l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;取得投资收益收到的现金"></div>
					</td>
					<td>
						<div name="h12l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h12l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h13l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;处置固定资产、无形资产和其他长期资产收回的现金净额"></div>
					</td>
					<td>
						<div name="h13l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h13l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h14l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;处置子公司及其他营业单位收到的现金净额"></div>
					</td>
					<td>
						<div name="h14l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h14l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h15l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收到其他与投资活动有关的现金"></div>
					</td>
					<td>
						<div name="h15l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h15l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h16l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投资活动现金流入小计"></div>
					</td>
					<td>
						<div name="h16l2" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h16l3" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h17l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;购建固定资产、无形资产和其他长期资产支付的现金"></div>
					</td>
					<td>
						<div name="h17l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h17l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h18l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投资支付的现金"></div>
					</td>
					<td>
						<div name="h18l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h18l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h19l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;取得子公司及其他营业单位支付的现金净额"></div>
					</td>
					<td>
						<div name="h19l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h19l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h20l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支付其他与投资活动有关的现金"></div>
					</td>
					<td>
						<div name="h20l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h20l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h21l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投资活动现金流出小计"></div>
					</td>
					<td>
						<div name="h21l2" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h21l3" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h22l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投资活动产生的现金流量净额"></div>
					</td>
					<td>
						<div name="h22l2" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h22l3" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<th style="text-align:left;">
						&nbsp;三、筹资活动产生的现金流量:
					</th>
					<th style="text-align:left;"></th>
					<th></th>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h23l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;吸收投资收到的现金"></div>
					</td>
					<td>
						<div name="h23l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h23l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h24l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;取得借款收到的现金"></div>
					</td>
					<td>
						<div name="h24l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h24l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h25l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收到其他与筹资活动有关的现金"></div>
					</td>
					<td>
						<div name="h25l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h25l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h26l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;筹资活动现金流入小计"></div>
					</td>
					<td>
						<div name="h26l2" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h26l3" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h27l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;偿还债务支付的现金"></div>
					</td>
					<td>
						<div name="h27l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h27l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h28l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分配股利、利润或偿付利息支付的现金"></div>
					</td>
					<td>
						<div name="h28l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h28l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h29l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支付其他与筹资活动有关的现金"></div>
					</td>
					<td>
						<div name="h29l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h29l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h30l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;筹资活动现金流出小计"></div>
					</td>
					<td>
						<div name="h30l2" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h30l3" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h31l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;筹资活动产生的现金流量净额"></div>
					</td>
					<td>
						<div name="h31l2" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h31l3" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h32l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四、汇率变动对现金及现金等价物的影响"></div>
					</td>
					<td>
						<div name="h32l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h32l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h33l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;五、现金及现金等价物净增加额"></div>
					</td>
					<td>
						<div name="h33l2" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h33l3" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h34l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加:期初现金及现金等价物余额"></div>
					</td>
					<td>
						<div name="h34l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h34l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h35l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;六、期末现金及现金等价物余额"></div>
					</td>
					<td>
						<div name="h35l2" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h35l3" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
			</table>
		</div>
		</div>
		
<div sword='SwordToolBar' name='qykjzdInner' style="width: 100%;"
	class="tab_botton" showType="mini" id="wtdzsb" isFixed='false'>
	<div name="bcBtn" sword="SwordSubmit" btnName="保存" isShow="true"
		postType="ajax" class="submitbutton" onSubmitBefore="saveTrue();"
		style="margin-right: 30px"></div>
	<div name="qxBtn" sword="SwordSubmit" btnName="重置" isShow="true"
		postType="ajax" class="submitbutton" onSubmitBefore="reset();"></div>
</div>


		<script language="javascript" type="text/javascript"
			src="../../sb/gy/sb_gy.js"></script>
		<script language="javascript" type="text/javascript"
			src="../../sb/sb099/sb099_qykjzzxjllb.js"></script>
		<script language="javascript" type="text/javascript"
			src="../../sb/sb099/sb099_qykjzzxjllb_formula.js"></script>
	</body>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"c68f18df61b447469dabf5374eaf001a","type":""}]}'></div>

