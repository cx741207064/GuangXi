<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SBGyCtrl_toCwbbSbfb_ZL1001003_13.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SBGyCtrl_toCwbbSbfb_ZL1001003_13" %>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>金税三期业务工作门户</title>
		<script language="javascript" type="text/javascript"
			src="../../swordweb/core/jsimport/Sword.js"></script>
		<script language="javascript" type="text/javascript"
			src="../../gt3_public/formula_engine.js"></script>
		<script language="javascript" type="text/javascript"
			src="../../../gt3_public/SwordGrid_ex.js"></script>
		<link rel="stylesheet" type="text/style"
			href="../../../gt3_public/styles/grid_comm.style" />
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
		<div class="wrapper" style="width: 100%">
			<div sword='PageInit' onFinish="initV()"></div>
			
			<div sword="SwordForm" name="xqykjzzfzForm" caption="小企业会计准则附注"
				panel="true" userdefine="true">
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col style="width: 13%" />
						<col style="width: 20%" />
						<col style="width: 13%" />
						<col style="width: 20%" />
						<col style="width: 14%" />
						<col style="width: 20%" />
					</colgroup>
					<tr>
						<th>
							纳税人识别号
						</th>
						<td>
							<div name="nsrsbh" type="text" disable="true">
							</div>
						</td>
						<th>
							纳税人名称
						</th>
						<td>
							<div name="nsrmc" type="text" disable="true">
							</div>
						</td>
						<th>
							报送年度
						</th>
						<td>
							<div name="bsnd" type="text" disable="true">
							</div>
						</td>
					</tr>
					
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							附注应当按照下列顺序披露：
						</th>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;附注是财务报表的重要组成部分。小企业应当按照小企业会计准则规定披露附注信息，主要包括下列内容：
						</th>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（一）遵循小企业会计准则的声明
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz11" type="textarea" rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（二）短期投资、应收账款、存货、固定资产项目的说明
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz12" type="textarea" rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（三）应付职工薪酬、应交税费项目的说明
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz13" type="textarea" rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（四）利润分配的说明
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz14" type="textarea" rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（五）用于对外担保的资产名称、账面余额及形成的原因；未决诉讼、未决仲裁以及对外提供担保所涉及的金额
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz15" type="textarea" rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（六）发生严重亏损的，应当披露持续经营的计划、未来经营的方案
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz16" type="textarea" rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（七）对已在资产负债表和利润表中列示项目与企业所得税法规定存在差异的纳税调整过程
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz17" type="textarea" rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（八）其他需要在附注中说明的事项
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz18" type="textarea" rule="must"
								style="height: 60px">
							</div>
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
		<script language="javascript" type="text/javascript"
			src="../../sb/gy/sb_gy.js"></script>
		<script language="javascript" type="text/javascript"
			src="../../sb/sb104/sb104_qykjzzfz.js"></script>
	</body>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501950500","type":""},{"name":"sessionID","value":"d0c8aa1da3a74396873a99218695eeb1","type":""}]}'></div>
