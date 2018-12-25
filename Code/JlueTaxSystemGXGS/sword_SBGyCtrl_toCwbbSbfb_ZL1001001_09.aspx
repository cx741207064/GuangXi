<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SBGyCtrl_toCwbbSbfb_ZL1001001_09.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SBGyCtrl_toCwbbSbfb_ZL1001001_09" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'/>
		<script language="javascript" type="text/javascript"
			src="../../swordweb/core/jsimport/Sword.js"></script>
		<script language="javascript" type="text/javascript"
			src="../../gt3_public/formula_engine.js"></script>
		<link rel="stylesheet" type="text/css"href="../../../gt3_public/styles/grid_comm.css" />
        <script language="javascript" type="text/javascript"
			src="../../../gt3_public/SwordGrid_ex.js"></script>
		<script language="javascript" type="text/javascript"
			src="../../sb/gy/sb_gy.js"></script>
		<script language='javascript' type='text/javascript'
			src='../../sb/gycwbb/sb000_qtsygxmjsdshzrsyqk.js'></script>	
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
		<div sword="PageInit" onFinish='initV()'></div>
		<div sword="SwordForm" name="111" caption="申报表信息"	panel="true" userdefine="true">		
			<table class="tab_form" border="0" cellpadding="0" cellspacing="0"	id="fzbtid" style="width: 100%">
				<colgroup>
					<col style="width: 40%"></col>
					<col style="width: 10%"></col>
					<col style="width: 10%"></col>
					<col style="width: 10%"></col>
					<col style="width: 10%"></col>
					<col style="width: 10%"></col>
					<col style="width: 10%"></col>
				</colgroup>
				<tr>
				<th colspan='7' style="text-align: center;"><b>《其他综合收益各项目及其所得税影响和转入损益情况》</b></th>
				</tr>
				<tr>
					<th rowspan='2' style="text-align: center;">
						项目
					</th>
					<th colspan='3' style="text-align: center;">
						本期发生额
					</th>
					<th colspan='3' style="text-align: center;">
						上期发生额
					</th>
				</tr>
				<tr>
					<th style="text-align: center;">
						税前金额
					</th>
					<th style="text-align: center;">
						所得税
					</th>
					<th style="text-align: center;">
						税后净额
					</th>
					<th style="text-align: center;">
						税前金额
					</th>
					<th style="text-align: center;">
						所得税
					</th>
					<th style="text-align: center;">
						税后净额
					</th>
				</tr>
			</table>
			</div>
			<div sword="SwordGrid" name="qtsygxmjsdshzrsyqkGrid1" showHeader="false" dataY="200" dataX="100%" fenye="false" fzbtId="fzbtid" onAfterCreateRow="afterCreateQtsygxmjsdshzrsyqkGrid1Row()">   
        		<div name="xmmc"  type="text" x="40%" rule="must"></div>           
		        <div name="bqfseSqje"  type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right"></div>
				<div name="bqfseSds"   type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right" ></div>
				<div name="bqfseShje"  type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right"></div>
				<div name="sqfseSqje"  type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right"></div>
				<div name="sqfseSds"   type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right"></div>
				<div name="sqfseShje"  type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right"></div>
				<div name="ewbhxh"     type="text" show="false"></div>
				<div name="zjh" caption="增加" console="button" onclick="insertrow1();"></div>
				<div name="sch" caption="刪除" console="button" onclick="delrow1();"></div>    
          </div>
          <div sword="SwordGrid" name="qtsygxmjsdshzrsyqkGrid2" showHeader="false" dataY="550" dataX="100%" fenye="false" onAfterCreateRow="afterCreateQtsygxmjsdshzrsyqkGrid2Row()">   
        		<div name="xmmc"  type="text" x="40%" rule="must"></div>           
		        <div name="bqfseSqje"  type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right" onblur="jsHj();"></div>
				<div name="bqfseSds"   type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right" onblur="jsHj();"></div>
				<div name="bqfseShje"  type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right" onblur="jsHj();"></div>
				<div name="sqfseSqje"  type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right" onblur="jsHj();"></div>
				<div name="sqfseSds"   type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right" onblur="jsHj();"></div>
				<div name="sqfseShje"  type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right" onblur="jsHj();"></div>
				<div name="ewbhxh"     type="text" show="false"></div>
				<div name="zjh" caption="增加" console="button" onclick="insertrow2();"></div>
				<div name="sch" caption="刪除" console="button" onclick="delrow2();"></div>    
          </div>
          <div sword="SwordGrid" name="qtsygxmjsdshzrsyqkGrid3" showHeader="false" dataY="50" dataX="100%" fenye="false" onAfterCreateRow="afterCreateQtsygxmjsdshzrsyqkGrid3Row()">   
        		<div name="xmmc"  type="text" x="40%" rule="must"></div>           
		        <div name="bqfseSqje"  type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right"></div>
				<div name="bqfseSds"   type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right"></div>
				<div name="bqfseShje"  type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right"></div>
				<div name="sqfseSqje"  type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right"></div>
				<div name="sqfseSds"   type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right"></div>
				<div name="sqfseShje"  type="text"  rule="number(16,2)" x="10%" format="{'type':'number','format':'#,##0.00'}" css="text-align:right"></div>
				<div name="ewbhxh"     type="text" show="false"></div>
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

<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"a97b025269814e628c2d2d1e782dc3c3","type":""}]}'></div>


