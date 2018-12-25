<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SB100QykjzdcwbbbsyxxcjCtrl_toSbfb_qyb.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SB100QykjzdcwbbbsyxxcjCtrl_toSbfb_qyb" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>金税三期业务工作门户</title>
		<script language="javascript" type="text/javascript"
			src="../../swordweb/core/jsimport/Sword.js"></script>
		<script language="javascript" type="text/javascript"
			src="../../gt3_public/formula_engine.js"></script>
		<script language="javascript" type="text/javascript"
			src="../../sb/sb100/sb100_qykjzdcwbbbsyxxcj_qyb.js"></script>
		<script type="text/javascript"></script>
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
							<div name="skssqz" type="date" rule="must"  disable="true"
								returnRealValue=true ></div>
						</td>
					</tr>
					<tr style="display: none">
						<td>
							<div name="djxh" type="text"></div>
						</td>
					</tr>
				</table>
			</div>
			<div sword="SwordForm" name="qybxxForm"
				caption="所有者权益(或股东权益)增减变动表(适用执行企业会计制度的企业)" panel="true"
				userdefine="true">
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col style="width: 35%" />
						<col style="width: 15%" />
						<col style="width: 20%" />
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
							本年数
						</th>
						<th style="text-align: center">
							上年数
						</th>
					</tr>
					<tr>
						<th colspan="4" style="text-align: left">
							一、实收资本(或股本):
						</th>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h1l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年初余额"></div>
						</td>
						<th style="text-align: center">
							1
						</th>
						<td>
							<div name="h1l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h1l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h2l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本年增加数"></div>
						</td>
						<th style="text-align: center">
							2
						</th>
						<td>
							<div name="h2l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h2l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h3l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中:资本公积转入"></div>
						</td>
						<th style="text-align: center">
							3
						</th>
						<td>
							<div name="h3l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h3l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h4l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;盈余公积转入"></div>
						</td>
						<th style="text-align: center">
							4
						</th>
						<td>
							<div name="h4l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h4l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h5l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;利润分配转入"></div>
						</td>
						<th style="text-align: center">
							5
						</th>
						<td>
							<div name="h5l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h5l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h6l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新增资本(或股本)"></div>
						</td>
						<th style="text-align: center">
							6
						</th>
						<td>
							<div name="h6l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h6l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h7l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本年减少数"></div>
						</td>
						<th style="text-align: center">
							10
						</th>
						<td>
							<div name="h7l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h7l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h8l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年末余额"></div>
						</td>
						<th style="text-align: center">
							15
						</th>
						<td>
							<div name="h8l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h8l3" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<th colspan="4" style="text-align: left">
							二、资本公积
						</th>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h9l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年初余额"></div>
						</td>
						<th style="text-align: center">
							16
						</th>
						<td>
							<div name="h9l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h9l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h10l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本年增加数"></div>
						</td>
						<th style="text-align: center">
							17
						</th>
						<td>
							<div name="h10l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h10l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h11l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中:资本(或股本)溢价"></div>
						</td>
						<th style="text-align: center">
							18
						</th>
						<td>
							<div name="h11l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h11l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h12l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接受捐赠非现金资产准备"></div>
						</td>
						<th style="text-align: center">
							19
						</th>
						<td>
							<div name="h12l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h12l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h13l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接受现金捐赠"></div>
						</td>
						<th style="text-align: center">
							20
						</th>
						<td>
							<div name="h13l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h13l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h14l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;股权投资准备"></div>
						</td>
						<th style="text-align: center">
							21
						</th>
						<td>
							<div name="h14l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h14l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h15l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;拨款转入"></div>
						</td>
						<th style="text-align: center">
							22
						</th>
						<td>
							<div name="h15l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h15l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h16l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;外币资本折算差额"></div>
						</td>
						<th style="text-align: center">
							23
						</th>
						<td>
							<div name="h16l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h16l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h17l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他资本公积"></div>
						</td>
						<th style="text-align: center">
							30
						</th>
						<td>
							<div name="h17l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h17l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h18l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本年减少数"></div>
						</td>
						<th style="text-align: center">
							40
						</th>
						<td>
							<div name="h18l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h18l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h19l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中:转增资本(或股本)"></div>
						</td>
						<th style="text-align: center">
							41
						</th>
						<td>
							<div name="h19l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h19l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h20l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年末余额"></div>
						</td>
						<th style="text-align: center">
							45
						</th>
						<td>
							<div name="h20l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h20l3" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<th colspan="4" style="text-align: left">
							三、法定和任意盈余公积
						</th>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h21l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年初余额"></div>
						</td>
						<th style="text-align: center">
							46
						</th>
						<td>
							<div name="h21l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h21l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h22l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本年增加数"></div>
						</td>
						<th style="text-align: center">
							47
						</th>
						<td>
							<div name="h22l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h22l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h23l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中:从净利润中提取数"></div>
						</td>
						<th style="text-align: center">
							48
						</th>
						<td>
							<div name="h23l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h23l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h24l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中:法定盈余公积"></div>
						</td>
						<th style="text-align: center">
							49
						</th>
						<td>
							<div name="h24l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h24l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h25l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;任意盈余公积"></div>
						</td>
						<th style="text-align: center">
							50
						</th>
						<td>
							<div name="h25l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h25l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h26l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;储备基金"></div>
						</td>
						<th style="text-align: center">
							51
						</th>
						<td>
							<div name="h26l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h26l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h27l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;企业发展基金"></div>
						</td>

						<th style="text-align: center">
							52
						</th>
						<td>
							<div name="h27l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h27l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h28l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;法定公益金转入数"></div>
						</td>

						<th style="text-align: center">
							53
						</th>
						<td>
							<div name="h28l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h28l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h29l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本年减少数"></div>
						</td>
						<th style="text-align: center">
							54
						</th>
						<td>
							<div name="h29l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h29l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h30l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中:弥补亏损"></div>
						</td>
						<th style="text-align: center">
							55
						</th>
						<td>
							<div name="h30l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h30l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h31l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;转增资本(或股本)"></div>
						</td>
						<th style="text-align: center">
							56
						</th>
						<td>
							<div name="h31l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h31l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h32l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分派现金股利或利润"></div>
						</td>
						<th style="text-align: center">
							57
						</th>
						<td>
							<div name="h32l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h32l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h33l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分派股票股利"></div>
						</td>
						<th style="text-align: center">
							58
						</th>
						<td>
							<div name="h33l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h33l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h34l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年末余额"></div>
						</td>

						<th style="text-align: center">
							62
						</th>
						<td>
							<div name="h34l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h34l3" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h35l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中:法定盈余公积"></div>
						</td>
						<th style="text-align: center">
							63
						</th>
						<td>
							<div name="h35l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h35l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h36l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;储备基金"></div>
						</td>
						<th style="text-align: center">
							64
						</th>
						<td>
							<div name="h36l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h36l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>

					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h37l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;企业发展基金"></div>
						</td>

						<th style="text-align: center">
							65
						</th>
						<td>
							<div name="h37l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h37l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<th colspan="4" style="text-align: left">
							四、法定公益金
						</th>
					</tr>
					<tr>

						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h38l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年初余额"></div>
						</td>
						<th style="text-align: center">
							66
						</th>
						<td>
							<div name="h38l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h38l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h39l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本年增加数"></div>
						</td>
						<th style="text-align: center">
							67
						</th>
						<td>
							<div name="h39l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h39l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h40l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中:从净利润中提取数"></div>
						</td>
						<th style="text-align: center">
							68
						</th>
						<td>
							<div name="h40l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h40l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h41l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本年减少数"></div>
						</td>
						<th style="text-align: center">
							70
						</th>
						<td>
							<div name=h41l2 " type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h41l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h42l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中:集体福利支出"></div>
						</td>
						<th style="text-align: center">
							71
						</th>
						<td>
							<div name="h42l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h42l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h43l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年末余额"></div>
						</td>

						<th style="text-align: center">
							75
						</th>
						<td>
							<div name="h43l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h43l3" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<th colspan="4" style="text-align: left">
							五、未分配利润:
						</th>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h44l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年初未分配利润"></div>
						</td>
						<th style="text-align: center">
							76
						</th>
						<td>
							<div name="h44l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h44l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h45l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本年净利润（净亏损以“-”号填列）"></div>
						</td>

						<th style="text-align: center">
							77
						</th>
						<td>
							<div name="h45l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h45l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h46l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本年利润分配"></div>
						</td>
						<th style="text-align: center">
							78
						</th>
						<td>
							<div name="h46l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h46l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h47l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年末未分配利润（未弥补亏损以“-”号填列）"></div>
						</td>
						<th style="text-align: center">
							80
						</th>
						<td>
							<div name="h47l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h47l3" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
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
<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501950500","type":""},{"name":"sessionID","value":"b9c2cbd357e6445da98b033c3924aced","type":""}]}'></div>
