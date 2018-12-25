<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SBGyCtrl_toCwbbSbfb_ZL1001002_14.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SBGyCtrl_toCwbbSbfb_ZL1001002_14" %>



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
			
			<div sword="SwordForm" name="yszkdplForm"
				caption="应收账款的披露（适用执行企业会计制度的企业）" panel="true" vType="fldiv"
				userdefine="true">
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col style="width: 25%" />
						<col style="width: 12.5%" />
						<col style="width: 12.5%" />
						<col style="width: 12.5%" />
						<col style="width: 12.5%" />
						<col style="width: 12.5%" />
						<col style="width: 12.5%" />
					</colgroup>
					<tr>
						<th style="text-align: center;" rowspan="2">
							账龄
						</th>
						<th style="text-align: center;" colspan="3">
							期初余额
						</th>
						<th colspan="3" style="text-align: center;">
							期末余额
						</th>
					</tr>
					<tr>
						<th style="text-align: center;">
							金额
						</th>
						<th style="text-align: center;">
							比例（％）
						</th>
						<th style="text-align: center;">
							坏账准备
						</th>
						<th style="text-align: center;">
							金额
						</th>
						<th style="text-align: center;">
							比例（％）
						</th>
						<th style="text-align: center;">
							坏账准备
						</th>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h1l1" type="label"
								defValue="1年以内"></div>
						</td>
						<td>
							<div name="h1l2" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h1l3" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h1l4" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h1l5" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h1l6" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h1l7" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h2l1" type="label"
								defValue="1～2年"></div>
						</td>
						<td>
							<div name="h2l2" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h2l3" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h2l4" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h2l5" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h2l6" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h2l7" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h3l1" type="label"
								defValue="2～3年"></div>
						</td>
						<td>
							<div name="h3l2" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h3l3" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h3l4" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h3l5" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h3l6" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h3l7" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h4l1" type="label"
								defValue="3年以上"></div>
						</td>
						<td>
							<div name="h4l2" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h4l3" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h4l4" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h4l5" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h4l6" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h4l7" type="text" rule="number(14,2)_must" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h5l1" type="label"
								defValue="合计"></div>
						</td>
						<td>
							<div name="h5l2" type="text" rule="number(14,2)_must" disable="true" defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h5l3" type="text" rule="number(14,2)_must" disable="true"  defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h5l4" type="text" rule="number(14,2)_must" disable="true"  defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h5l5" type="text" rule="number(14,2)_must" disable="true"  defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h5l6" type="text" rule="number(14,2)_must" disable="true"  defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
							</div>
						</td>
						<td>
							<div name="h5l7" type="text" rule="number(14,2)_must" disable="true"  defValue="0.00"
								style="text-align: right"
								format="{'type':'number','format':'#,##0.00'}">
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
			src="../../sb/gycwbb/sb000_yszkdpl.js"></script>
	</body>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501950500","type":""},{"name":"sessionID","value":"79c2ef165db6440ead061c0402ec0336","type":""}]}'></div>

