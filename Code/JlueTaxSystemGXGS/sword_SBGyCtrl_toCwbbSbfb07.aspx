<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SBGyCtrl_toCwbbSbfb07.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SBGyCtrl_toCwbbSbfb07" %>



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
			
			<div sword="SwordForm" name="qykjzzfzForm" caption="企业会计准则附注"
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
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本准则规定，附注是对在资产负债表、利润表、现金流量表和所有者权益变动表等报表中列示项目的文字描述或明细资料，以及对未能在这些报表中列示项目的说明等。本准则对附注的披露要求是对企业附注披露的最低要求，应当适用于所有类型的企业，企业还应当按照各项会计准则的规定在附注中披露相关信息。
附注披露的总体要求：本准则规定，附注相关信息应当与资产负债表、利润表、现金流量表和所有者权益变动表等报表中列示的项目相互参照，以有助于使用者联系相关联的信息，并由此从整体上更好地理解财务报表。
企业在披露附注信息时，应当以定量、定性信息相结合，按照一定的结构对附注信息进行系统合理的排列和分类，以便于使用者理解和掌握。
						</th>						
					</tr>
					<tr>
						<th colspan=6 style="border-left: none; border-right: none; text-align: left">
							（一）企业的基本情况
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
							（二）财务报表的编制基础
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
							（三）遵循企业会计准则的声明
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
							（四）重要会计政策和会计估计
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
							（五）会计政策和会计估计变更以及差错更正的说明
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
							（六）报表重要项目的说明
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
							（七）或有和承诺事项、资产负债表日后非调整事项、关联方关系及其交易等需要说明的事项
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
							（八）有助于财务报表使用者评价企业管理资本的目标、政策及程序的信息
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
			src="../../sb/gycwbb/sb000_qykjzzfz.js"></script>
	</body>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"1dfbf6df55aa4c44a8332ea19d7b0e03","type":""}]}'></div>

