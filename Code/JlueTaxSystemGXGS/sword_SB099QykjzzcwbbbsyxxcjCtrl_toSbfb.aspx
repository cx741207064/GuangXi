<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SB099QykjzzcwbbbsyxxcjCtrl_toSbfb.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SB099QykjzzcwbbbsyxxcjCtrl_toSbfb" %>

 
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
			<div sword="SwordForm" name="nsrxxForm2" caption="纳税人基本信息" panel="true"
			vType="fldiv" userdefine="true">
			<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
				<colgroup>
						<col style="width: 25%" />
						<col style="width: 25%" />
						<col style="width: 25%" />
						<col style="width: 25%" />
<!--						<col style="width: 8%" />-->
<!--						<col style="width: 16%" />-->
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
					<td  >
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
						报表所属期
					</th>
					<td  >
						<div name="bbssq" type="text"  disable="true">
						</div>
					</td>
<!--					<th>-->
<!--						所属期起-->
<!--					</th>-->
<!--					<td>-->
<!--						<div name="skssqq" type="date" rule="must" disable="true">-->
<!--						</div>-->
<!--					</td>-->
<!--					<th>-->
<!--						所属期止-->
<!--					</th>-->
<!--					<td>-->
<!--						<div name="skssqz" type="date" rule="must" disable="true">-->
<!--						</div>-->
<!--					</td>-->
				</tr>
			</table>
		</div>
		<div sword="SwordForm" name="lrbxxForm" caption="利润表(适用执行企业会计准则的一般企业)"
			panel="true" vType="fldiv" userdefine="true">
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
					<th colspan=4 style="text-align:center;">
						上期金额
					</th>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h1l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一、营业收入"></div>
					</td>
					<td>
						<div name="h1l2" type="text" rule="number_must"  defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h1l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h2l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减:营业成本"></div>
					</td>
					<td>
						<div name="h2l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h2l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h3l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;营业税金及附加"></div>
					</td>
					<td>
						<div name="h3l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h3l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h4l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销售费用"></div>
					</td>
					<td>
						<div name="h4l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h4l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h5l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;管理费用"></div>
					</td>
					<td>
						<div name="h5l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h5l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h6l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;财务费用"></div>
					</td>
					<td>
						<div name="h6l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h6l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h7l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资产减值损失"></div>
					</td>
					<td>
						<div name="h7l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h7l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h8l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加:公允价值变动收益(损失以&ndash;号填列)"></div>
					</td>
					<td>
						<div name="h8l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h8l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h9l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投资收益(损失以&ndash;号填列)"></div>
					</td>
					<td>
						<div name="h9l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h9l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h10l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中:对联营企业和合营企业的投资收益"></div>
					</td>
					<td>
						<div name="h10l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h10l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h11l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二、营业利润(亏损以&ndash;号填列)"></div>
					</td>
					<td>
						<div name="h11l2" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h11l3" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h12l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加:营业外收入"></div>
					</td>
					<td>
						<div name="h12l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h12l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h21l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中:非流动资产处置利得"></div>
					</td>
					<td>
						<div name="h21l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h21l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h13l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减:营业外支出"></div>
					</td>
					<td>
						<div name="h13l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h13l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h14l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中:非流动资产处置损失"></div>
					</td>
					<td>
						<div name="h14l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h14l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h15l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三、利润总额(亏损总额以&ndash;号填列)"></div>
					</td>
					<td>
						<div name="h15l2" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h15l3" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h16l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减:所得税费用"></div>
					</td>
					<td>
						<div name="h16l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h16l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h17l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四、净利润(净亏损以&ndash;号填列)"></div>
					</td>
					<td>
						<div name="h17l2" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h17l3" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h22l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;五、其他综合收益的税后净额"></div>
					</td>
					<td>
						<div name="h22l2" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h22l3" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h23l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）以后不能重分类进损益的其他综合收益"></div>
					</td>
					<td>
						<div name="h23l2" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h23l3" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h24l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.重新计量设定收益计划净负债或净资产的变动"></div>
					</td>
					<td>
						<div name="h24l2" type="text" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h24l3" type="text" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h25l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.权益法下在被投资单位不能重分类进损益的其他综合收益中享有的份额"></div>
					</td>
					<td>
						<div name="h25l2" type="text" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h25l3" type="text" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h26l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）以后将重分类进损益的其他综合收益"></div>
					</td>
					<td>
						<div name="h26l2" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h26l3" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h27l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.权益法下在被投资单位以后将重分类进损益的其他综合收益中享有的份额"></div>
					</td>
					<td>
						<div name="h27l2" type="text" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h27l3" type="text" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h28l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.可供出售金融资产公允价值变动损益"></div>
					</td>
					<td>
						<div name="h28l2" type="text" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h28l3" type="text" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h29l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.将有至到期投资重分类可供出售金融资产损益"></div>
					</td>
					<td>
						<div name="h29l2" type="text" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h29l3" type="text" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h30l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.现金流经套期损益的有效部分"></div>
					</td>
					<td>
						<div name="h30l2" type="text" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h30l3" type="text" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h31l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.外币财务报表折算差额"></div>
					</td>
					<td>
						<div name="h31l2" type="text" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h31l3" type="text" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h32l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;六、综合收益总额"></div>
					</td>
					<td>
						<div name="h32l2" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h32l3" type="text" defValue="0.00" disable="true"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				
				<tr>
					<th style="text-align: left; background-color: #e8f5ff;">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;七、每股收益:
					</th>				
					<th colspan="5"></th>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h19l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(一)基本每股收益"></div>
					</td>		
					<td>
						<div name="h19l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h19l3" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
				</tr>
				<tr>
					<td style="text-align: left; background-color: #e8f5ff;">
						<div style="color: black" name="h20l1" type="label"
							defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(二)稀释每股收益"></div>
					</td>	
					<td>
						<div name="h20l2" type="text" rule="number_must" defValue="0.00"
							style="text-align:right"
							format="{'type':'number','format':'#,##0.00'}">
						</div>
					</td>
					<td colspan=4>
						<div name="h20l3" type="text" rule="number_must" defValue="0.00"
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
			src="../../sb/sb099/sb099_qykjzzlrb.js"></script>
		<script language="javascript" type="text/javascript"
		src="../../sb/sb099/sb099_qykjzzlrb_formula.js"></script>
	</body>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"787b71a47e5444d0906682cd94c8bb2b","type":""}]}'></div>

