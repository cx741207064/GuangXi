<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SBGyCtrl_toCwbbSbfb_ZL1001003_14.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SBGyCtrl_toCwbbSbfb_ZL1001003_14" %>


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
			src='../../sb/sb104/sb104_yszkazljgpl.js'></script>
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
			
			<div sword="SwordForm" name="nsrxxForm" caption="纳税人基本信息"
				panel="true" userdefine="true" vType="fldiv">
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col style="width: 25%" />
						<col style="width: 25%" />
						<col style="width: 25%" />
						<col style="width: 25%" />
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
						<td>
							<div name="nsrmc" type="text" disable="true"></div>
						</td>
					</tr>
					<tr>
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

			<div sword="SwordForm" name="yszkazljgplForm"
				caption="应收账款按账龄结构披露（适用执行小企业会计准则的企业）" panel="true" userdefine="true">
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col style="width: 40%" />
						<col style="width: 30%" />
						<col style="width: 30%" />
					</colgroup>

					<tr>
						<th style="text-align: center">
							账龄结构 
						</th>
						<th style="text-align: center">
							期末账面余额
						</th>
						<th style="text-align: center">
							年初账面余额
						</th>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h1l1" type="label"
								defValue="1年以内（含1年） "></div>
						</td>
						<td>
							<div name="h1l2" type="text" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h1l3" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h2l1" type="label"
								defValue="1年至2年（含2年）  "></div>
						</td>
						<td>
							<div name="h2l2" type="text" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h2l3" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h3l1" type="label"
								defValue="2年至3年（含3年）  "></div>
						</td>
						<td>
							<div name="h3l2" type="text" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h3l3" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h4l1" type="label"
								defValue="3年以上 "></div>
						</td>
						<td>
							<div name="h4l2" type="text" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h4l3" type="text" defValue="0.00" rule="number_must"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h5l1" type="label"
								defValue="合计 "></div>
						</td>
						<td>
							<div name="h5l2" type="text" defValue="0.00" disable="true"
								format="{'type':'number','format':'#,##0.00'}"
								rule="number_must" style="text-align: right"></div>
						</td>
						<td>
							<div name="h5l3" type="text" defValue="0.00" disable="true"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align: right"></div>
						</td>
					</tr>
				</table>
			</div>
		</div>
		
<div sword='SwordToolBar' name='qykjzdInner' class="tab_botton" style="width: 100%"  showType="mini"  id="wtdzsb" isFixed='false'>
<div name="bcBtn" sword="SwordSubmit" btnName="保存" isShow="true"
							postType="ajax" class="submitbutton"
							onSubmitBefore="savefb();" >
</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div name="qxBtn" sword="SwordSubmit" btnName="重置" isShow="true"
							postType="ajax" class="submitbutton" onSubmitBefore="reset();">
</div>
</div>
	</body>
</html>
<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501950500","type":""},{"name":"sessionID","value":"4f281f30d93f4dc6b84032abd70fdb3f","type":""}]}'></div>

