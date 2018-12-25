<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SB099QykjzzcwbbbsyxxcjCtrl_toSbfb2.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SB099QykjzzcwbbbsyxxcjCtrl_toSbfb2" %>

 
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

			<div sword="SwordForm" name="nsrxxForm4" panel="true" vType="fldiv"
			userdefine="true" caption="纳税人基本信息">
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
					<td  colspan=3>
						<div name="nsrmc" type="text" rule="must" disable="true">
						</div>
					</td>
				</tr>
				<tr>
					<th>
						报送日期
					</th>
					<td>
						<div name="bsrq" type="date"  rule="must" disable="true">
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
		<div sword="SwordForm" name="qybxxForm" panel="true" vType="fldiv"
			userdefine="true" caption="所有者权益变动表(适用执行企业会计准则的一般企业)">
			<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
				<colgroup>
						<col style="width: 13%" />
						<col style="width: 8%" />
						<col style="width: 5%" />
						<col style="width: 5%" />
						<col style="width: 6%" />
						<col style="width: 5%" />
						<col style="width: 6%" />
						<col style="width: 7%" />
						<col style="width: 8%" />
						<col style="width: 5%" />
						<col style="width: 5%" />
						<col style="width: 6%" />
						<col style="width: 5%" />
						<col style="width: 6%" />
						<col style="width: 7%" />
				</colgroup>
				<tr>
					<th rowspan=2 style="text-align:center;">
						项 目
					</th>
					<th colspan=7 style="text-align:center;">
						本年金额
					</th>
					<th colspan=7 style="text-align:center;">
						上年金额
					</th>
				</tr>
				<tr>
					<th style="text-align:center;">
						实收资本(或股本)
					</th>
					<th style="text-align:center;">
						资本公积
					</th>
					<th style="text-align:center;">
						减:库存股
					</th>
					<th style="text-align:center;">
						其他综合收益
					</th>
					<th style="text-align:center;">
						盈余公积
					</th>
					<th style="text-align:center;">
						未分配利润
					</th>
					<th style="text-align:center;">
						所有者权益合计
					</th>
					<th style="text-align:center;">
						实收资本(或股本)
					</th>
					<th style="text-align:center;">
						资本公积
					</th>
					<th style="text-align:center;">
						减:库存股
					</th>
					<th style="text-align:center;">
						其他综合收益
					</th>
					<th style="text-align:center;">
						盈余公积
					</th>
					<th style="text-align:center;">
						未分配利润
					</th>
					<th style="text-align:center;">
						所有者权益合计
					</th>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h1l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一、上年年末余额"></div>
					</td>	
					<td>
						<div name="h1l2" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h1l3" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h1l4" type="text"  rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h1l14" type="text"  rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h1l5" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h1l6" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h1l7" type="text"  disable="true" defValue="0.00"
							 style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h1l8" type="text" defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h1l9" type="text"  rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h1l10" type="text"  rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h1l15" type="text"  rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h1l11" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h1l12" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h1l13" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h2l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加:会计政策变更"></div>
					</td>
					<td>
						<div name="h2l2" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h2l3" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h2l4" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h2l14" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h2l5" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h2l6" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h2l7" type="text" disable="true"  defValue="0.00"
							 style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h2l8" type="text" defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h2l9" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h2l10" type="text"  rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h2l15" type="text"  rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h2l11" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h2l12" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h2l13" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h3l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前期差错更正"></div>
					</td>
					<td>
						<div name="h3l2" type="text" rule="number_must"  defValue="0.00"
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
					<td>
						<div name="h3l4" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h3l14" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h3l5" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h3l6" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h3l7" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h3l8" type="text" defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h3l9" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h3l10" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h3l15" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h3l11" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h3l12" type="text"  rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h3l13" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h4l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二、本年年初余额"></div>
					</td>
					<td>
						<div name="h4l2" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h4l3" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h4l4" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h4l14" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h4l5" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h4l6" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h4l7" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h4l8" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h4l9" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h4l10" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h4l15" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h4l11" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h4l12" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h4l13" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h5l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三、本年增减变动金额(减少以&ndash;号填列)"></div>
					</td>
					<td>
						<div name="h5l2" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h5l3" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h5l4" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h5l14" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h5l5" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h5l6" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h5l7" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h5l8" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h5l9" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h5l10" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h5l15" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h5l11" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h5l12" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h5l13" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h6l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(一)综合收益总额"></div>
					</td>
					<td>
						<div name="h6l2" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h6l3" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h6l4" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h6l14" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h6l5" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h6l6" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h6l7" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h6l8" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h6l9" type="text"  defValue="0.00"
							style="text-align:right"  rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h6l10" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h6l15" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h6l11" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h6l12" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h6l13" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h13l1" type="label" defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(二)所有者投入和减少资本"></div>
					</td>
					<td>
						<div name="h13l2" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h13l3" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h13l4" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h13l14" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h13l5" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h13l6" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h13l7" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h13l8" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h13l9" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h13l10" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h13l15" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h13l11" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h13l12" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h13l13" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr><tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h14l1" type="label" defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.所有者投入资本"></div>
					</td>
					<td>
						<div name="h14l2" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h14l3" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h14l4" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h14l14" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h14l5" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h14l6" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h14l7" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h14l8" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h14l9" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h14l10" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h14l15" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h14l11" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h14l12" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h14l13" type="text" defValue="0.00" style="text-align:right" disable="true" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr><tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h15l1" type="label" defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.股份支付计入所有者权益的金额"></div>
					</td>
					<td>
						<div name="h15l2" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h15l3" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h15l4" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h15l14" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h15l5" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h15l6" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h15l7" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h15l8" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h15l9" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h15l10" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h15l15" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h15l11" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h15l12" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h15l13" type="text" defValue="0.00" style="text-align:right" disable="true" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr><tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h16l1" type="label" defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.其他"></div>
					</td>
					<td>
						<div name="h16l2" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h16l3" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h16l4" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h16l14" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h16l5" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h16l6" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h16l7" type="text" defValue="0.00" disable="true" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h16l8" type="text" defValue="0.00" style="text-align:right" rule="number_must" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h16l9" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h16l10" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h16l15" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h16l11" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h16l12" type="text" rule="number_must" defValue="0.00" style="text-align:right" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h16l13" type="text" defValue="0.00" style="text-align:right" disable="true" format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr><tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h12l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上述(一)和(二)小计"></div>
					</td>
					<td>
						<div name="h12l2" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h12l3" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h12l4" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h12l14" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h12l5" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h12l6" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h12l7" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h12l8" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h12l9" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h12l10" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h12l15" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h12l11" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h12l12" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h12l13" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				
				
				
				
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h17l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(三)利润分配"></div>
					</td>
					<td>
						<div name="h17l2" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h17l3" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h17l4" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h17l14" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h17l5" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h17l6" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h17l7" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h17l8" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h17l9" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h17l10" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h17l15" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h17l11" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h17l12" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h17l13" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h18l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.提取盈余公积"></div>
					</td>
					<td>
						<div name="h18l2" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h18l3" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h18l4" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h18l14" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h18l5" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h18l6" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h18l7" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h18l8" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h18l9" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h18l10" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h18l15" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h18l11" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h18l12" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h18l13" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h19l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.对所有者(或股东)的分配"></div>
					</td>
					<td>
						<div name="h19l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h19l3" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h19l4" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h19l14" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h19l5" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h19l6" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h19l7" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h19l8" type="text" defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h19l9" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h19l10" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h19l15" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h19l11" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h19l12" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right" 
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h19l13" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h20l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.其他"></div>
					</td>
					<td>
						<div name="h20l2" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h20l3" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h20l4" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h20l14" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h20l5" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h20l6" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h20l7" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h20l8" type="text" defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h20l9" type="text"  rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h20l10" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h20l15" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h20l11" type="text"  rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h20l12" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h20l13" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h21l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(四)所有者权益内部结转"></div>
					</td>
					<td>
						<div name="h21l2" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h21l3" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h21l4" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h21l14" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h21l5" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h21l6" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h21l7" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h21l8" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h21l9" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h21l10" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h21l15" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h21l11" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h21l12" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h21l13" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h22l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.资本公积转增资本(或股本)"></div>
					</td>
					<td>
						<div name="h22l2" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h22l3" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h22l4" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h22l14" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h22l5" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h22l6" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h22l7" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h22l8" type="text" defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h22l9" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h22l10" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h22l15" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h22l11" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h22l12" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h22l13" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h23l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.盈余公积转增资本(或股本)"></div>
					</td>
					<td>
						<div name="h23l2" type="text"  rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h23l3" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h23l4" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h23l14" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h23l5" type="text"  rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h23l6" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h23l7" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h23l8" type="text" defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h23l9" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h23l10" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h23l15" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h23l11" type="text"  rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h23l12" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h23l13" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h24l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.盈余公积弥补亏损"></div>
					</td>
					<td>
						<div name="h24l2" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h24l3" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h24l4" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h24l14" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h24l5" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h24l6" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h24l7" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h24l8" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h24l9" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h24l10" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h24l15" type="text"  defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h24l11" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h24l12" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h24l13" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h25l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.其他"></div>
					</td>
					<td>
						<div name="h25l2" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h25l3" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h25l4" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h25l14" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h25l5" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h25l6" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h25l7" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h25l8" type="text" defValue="0.00"
							style="text-align:right" rule="number_must"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h25l9" type="text"  rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h25l10" type="text"  rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h25l15" type="text"  rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h25l11" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h25l12" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h25l13" type="text"  defValue="0.00"
							 style="text-align:right" disable="true"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h26l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四、本年年末余额"></div>
					</td>
					<td>
						<div name="h26l2" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h26l3" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h26l4" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h26l14" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h26l5" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h26l6" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h26l7" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h26l8" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h26l9" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h26l10" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h26l15" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h26l11" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h26l12" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td>
						<div name="h26l13" type="text"  defValue="0.00"
							disable="true" style="text-align:right"
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
			src="../../sb/sb099/sb099_qykjzzsyzqybdb_formula.js"></script>
		<script language="javascript" type="text/javascript"
			src="../../sb/sb099/sb099_qykjzzsyzqybdb.js"></script>
	</body>
</html>


<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"f53ac634d37c497db63772da65916d88","type":""}]}'></div>

