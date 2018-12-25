<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SBGyCtrl_toCwbbSbfb_ZL1001002_04.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SBGyCtrl_toCwbbSbfb_ZL1001002_04" %>



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
			<div sword="SwordForm" name="ndcwkjbgshbgForm" caption="年度财务会计报告审计报告"
				panel="true" userdefine="true">
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col style="width: 25%" />
						<col style="width: 25%" />
						<col style="width: 25%" />
						<col style="width: 25%" />
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
					</tr>
					<tr>
						<th>
							报送年度
						</th>
						<td>
							<div name="bsnd" type="text" disable="true">
							</div>
						</td>
						<th colspan="2">
						</th>
					</tr>
					<tr>
						<th>
							审计情况及意见
						</th>
						<td>
							<div name="shqkjyj" type="select" rule="must">
								<div code="0" caption="未经审计"></div>
								<div code="1" caption="无保留意见"></div>
								<div code="2" caption="保留意见"></div>
								<div code="3" caption="否定意见"></div>
								<div code="4" caption="无法表示意见"></div>
							</div>
						</td>
						<th>
							审计会计师事务所
						</th>
						<td>
							<div name="shkjssws" type="text" rule="must">
							</div>
						</td>
					</tr>
					<tr>
						<th>
							报告编号
						</th>
						<td>
							<div name="bgbh" type="text" rule="must">
							</div>
						</td>
						<th>
							签字注册会计师
						</th>
						<td>
							<div name="qzzckjs" type="text" rule="must">
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="4">
							<div name="shbgzw" type="textarea" rule="must"
								style="height: 200px">
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
			src="../../sb/gycwbb/sb000_ndcwkjbgshbg.js"></script>
	</body>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501950500","type":""},{"name":"sessionID","value":"a1df78fed0fd4620a636c4dd709d108e","type":""}]}'></div>

