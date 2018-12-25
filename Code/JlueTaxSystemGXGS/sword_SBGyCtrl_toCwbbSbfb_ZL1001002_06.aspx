<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SBGyCtrl_toCwbbSbfb_ZL1001002_06.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SBGyCtrl_toCwbbSbfb_ZL1001002_06" %>



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
			<div sword='PageInit' onFinish="initV();"></div>
			
			<div sword="SwordForm" name="qykjzdfzForm" caption="企业会计制度附注"
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
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;企业的年度会计报表附注至少应披露如下内容，法律、行政法规和国家统一的会计制度另有规定的，从其规定：
						</th>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（一）不符合会计核算前提的说明
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz11" type="textarea"  rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（二）重要会计政策和会计估计的说明
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
							（三）重要会计政策和会计估计变更的说明，以及重大会计差错更正的说明，主要包括以下事项
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz13" type="textarea"  rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（四）或有事项的说明
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz14" type="textarea"  rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（五）资产负债表日后事项的说明
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz15" type="textarea"  rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（六）关联方关系及其交易的说明
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz16" type="textarea"  rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（七）重要资产转让及其出售的说明
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz17" type="textarea"  rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（八）企业合并、分立的说明
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz18" type="textarea"  rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（九）会计报表重要项目的说明，包括
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz19" type="textarea"  rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（十）收入
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz20" type="textarea"  rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（十一）所得税的会计处理方法
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz21" type="textarea"  rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（十二）合并会计报表的说明
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz22" type="textarea"  rule="must"
								style="height: 60px">
							</div>
						</td>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（十三）有助于理解和分析会计报表需要说明的其他事项
						</th>						
					</tr>
					<tr>
						<td colspan=6>
							<div name="bz23" type="textarea"  rule="must"
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
			src="../../sb/gycwbb/sb000_qykjzdfz.js"></script>
	</body>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501950500","type":""},{"name":"sessionID","value":"45f687b06d7843ee8d91371a98d260fb","type":""}]}'></div>

