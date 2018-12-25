<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SBGyCtrl_toCwbbSbfb_ZL1001002_15.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SBGyCtrl_toCwbbSbfb_ZL1001002_15" %>



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
			<div sword='SwordGrid' name="gdzcdplGrid1" caption="一、原价"  showHj="true"
				checkMoudle="false" fenye="false" showConsole="true" dataX="100%"
				dataY="170" showHJ="true" autoHeight="false"  onAfterCreateRow="disable()">
				<div name="xmmc" caption="项目"   type="text" x="20%" isHjLabel="true"></div>
				<div name="qcye" caption="期初余额" rule="number(18,2)" type="text" x="20%"  hj="true"></div>
				<div name="bqzj" caption="本期增加" rule="number(18,2)" type="text" x="20%"  hj="true"></div>
				<div name="bqjs" caption="本期减少" rule="number(18,2)"  type="text" x="20%"  hj="true"></div>
				<div name="qmye" caption="期末余额" rule="number(18,2)" type="text" x="20%"  hj="true"></div>
				<div name="insert" console="insert"></div>
				<div name="insert" console="delete"></div>
			</div>
			<div sword='SwordGrid' name="gdzcdplGrid2" caption="二、累计折旧"  showHj="true"
				checkMoudle="false" fenye="false" showConsole="true" dataX="100%"
				dataY="170" showHJ="true" autoHeight="false" onAfterCreateRow="disable()">
				<div name="xmmc" caption="项目"   type="text" x="20%" isHjLabel="true"></div>
				<div name="qcye" caption="期初余额" rule="number(18,2)" type="text" x="20%"  hj="true"></div>
				<div name="bqzj" caption="本期增加" rule="number(18,2)" type="text" x="20%"  hj="true"></div>
				<div name="bqjs" caption="本期减少" rule="number(18,2)"  type="text" x="20%"  hj="true"></div>
				<div name="qmye" caption="期末余额" rule="number(18,2)" type="text" x="20%"  hj="true"></div>
				<div name="insert" console="insert"></div>
				<div name="insert" console="delete"></div>
			</div>
			<div sword='SwordGrid' name="gdzcdplGrid3" caption="三、固定资产净值" showHj="true"
				checkMoudle="false" fenye="false" showConsole="true" dataX="100%"
				dataY="170" showHJ="true" autoHeight="false" onAfterCreateRow="disable()">
				<div name="xmmc" caption="项目"   type="text" x="20%" isHjLabel="true"></div>
				<div name="qcye" caption="期初余额" rule="number(18,2)" type="text" x="20%"  hj="true"></div>
				<div name="bqzj" caption="本期增加" rule="number(18,2)" type="text" x="20%"  hj="true"></div>
				<div name="bqjs" caption="本期减少" rule="number(18,2)"  type="text" x="20%"  hj="true"></div>
				<div name="qmye" caption="期末余额" rule="number(18,2)" type="text" x="20%"  hj="true"></div>
				<div name="insert" console="insert"></div>
				<div name="insert" console="delete"></div>
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
			src="../../sb/gycwbb/sb000_gdzcdpl.js"></script>
	</body>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501950500","type":""},{"name":"sessionID","value":"1b89178bca524d669de723ffc22a963b","type":""}]}'></div>

