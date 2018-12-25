<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SB100QykjzdcwbbbsyxxcjCtrl_toSbfb.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SB100QykjzdcwbbbsyxxcjCtrl_toSbfb" %>


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
			src='../../sb/sb100/sb100_qykjzdcwbbbsyxxcj_lrb.js'></script>
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
							报表所属期
						</th>
						<td >
							<div name="bbssq" type="text" disable="true"></div>
						</td>
						
					</tr>
					<tr style="display: none">
						<td>
							<div name="djxh" type="text"></div>
						</td>
					</tr>
				</table>
			</div>

			<div sword="SwordForm" name="lrbxxForm" caption="利润表(适用执行企业会计制度的企业)"
				panel="true" userdefine="true">
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
							本月数
						</th>
						<th style="text-align: center">
							本年累计数
						</th>
					</tr>
					<tr>

						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h1l1" type="label"
								defValue="一、主营业务收入"></div>
						</td>
						<th style="text-align: center">
							1
						</th>
						<td>
							<div name="h1l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right" onblur="jsbnlj(1)"></div>
						</td>
						<td>
							<div name="h1l3" type="text" rule="number_must" defValue="0.00" rule="number_must" 
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right"  ></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h2l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减:主营业务成本"></div>
						</td>
						<th style="text-align: center">
							4
						</th>
						<td>
							<div name="h2l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right" onblur="jsbnlj(2)"></div>
						</td>
						<td>
							<div name="h2l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right" ></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h3l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主营业务税金及附加"></div>
						</td>
						<th style="text-align: center">
							5
						</th>
						<td>
							<div name="h3l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right" onblur="jsbnlj(3)"></div>
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
								defValue="二、主营业务利润(亏损以“-”号填列)"></div>
						</td>
						<th style="text-align: center">
							10
						</th>
						<td>
							<div name="h4l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right" ></div>
						</td>
						<td>
							<div name="h4l3" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h5l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加:其他业务利润(亏损“-”号填列)"></div>
						</td>
						<th style="text-align: center">
							11
						</th>
						<td>
							<div name="h5l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right" onblur="jsbnlj(5)"></div>
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
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减:营业费用"></div>
						</td>
						<th style="text-align: center">
							14
						</th>
						<td>
							<div name="h6l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right" onblur="jsbnlj(6)"></div>
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
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;管理费用"></div>
						</td>
						<th style="text-align: center">
							15
						</th>
						<td>
							<div name="h7l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right" onblur="jsbnlj(7)"></div>
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
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;财务费用"></div>
						</td>
						<th style="text-align: center">
							16
						</th>
						<td>
							<div name="h8l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right" onblur="jsbnlj(8)"></div>
						</td>
						<td>
							<div name="h8l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h9l1" type="label"
								defValue="三、营业利润(亏损以“-”号填列)"></div>
						</td>
						<th style="text-align: center">
							18
						</th>
						<td>
							<div name="h9l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right" onblur="jsbnlj(9)"></div>
						</td>
						<td>
							<div name="h9l3" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}" disable="true"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h10l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加:投资收益(损失以“-”填列)"></div>
						</td>
						<th style="text-align: center">
							19
						</th>
						<td>
							<div name="h10l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right" onblur="jsbnlj(10)"></div>
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
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;补贴收入"></div>
						</td>
						<th style="text-align: center">
							22
						</th>
						<td>
							<div name="h11l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right" onblur="jsbnlj(11)"></div> 
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
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;营业外收入"></div>
						</td>
						<th style="text-align: center">
							23
						</th>
						<td>
							<div name="h12l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right" onblur="jsbnlj(12)"></div>
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
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减:营业外支出"></div>
						</td>
						<th style="text-align: center">
							25
						</th>
						<td>
							<div name="h13l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right" onblur="jsbnlj(13)"></div>
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
								defValue="四、利润总额(亏损总额以“-”号填列)"></div>
						</td>
						<th style="text-align: center">
							27
						</th>
						<td>
							<div name="h14l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right" onblur="jsbnlj(14)"></div>
						</td>
						<td>
							<div name="h14l3" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}" disable="true"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h15l1" type="label"
								defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减:所得税"></div>
						</td>
						<th style="text-align: center">
							28
						</th>
						<td>
							<div name="h15l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right" onblur="jsbnlj(15)"></div>
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
								defValue="五、净利润(净亏损以“-”号填列)"></div>
						</td>
						<th style="text-align: center">
							30
						</th>
						<td>
							<div name="h16l2" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}" 
								style="text-align:right" onblur="jsbnlj(16)"></div>
						</td>
						<td>
							<div name="h16l3" type="text" defValue="0.00" disable='true'
								format="{'type':'number','format':'#,##0.00'}" disable="true"
								style="text-align:right"></div>
						</td>
					</tr>
				</table>

				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col style="width: 28%" />
						<col style="width: 11%" />
						<col style="width: 17%" />
					</colgroup>
					<tr>
						<th colspan="3" style="text-align: left">
							补充资料:
						</th>
					</tr>
					<tr>
						<th style="text-align: center">
							项 目
						</th>
						<th style="text-align: center">
							本年累计数
						</th>
						<th style="text-align: center">
							上年实际数
						</th>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h17l1" type="label"
								defValue="1.出售、处置部门或被投资单位所得收益"></div>
						</td>
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
								defValue="2.自然灾害发生的损失"></div>
						</td>
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
								defValue="3.会计政策变更增加(或减少)利润总额"></div>
						</td>
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
								defValue="4.会计估计变更增加(或减少)利润总额"></div>
						</td>
						<td>
							<div name="h20l2" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
						<td>
							<div name="h20l3" type="text" rule="number_must" defValue="0.00"
								format="{'type':'number','format':'#,##0.00'}"
								style="text-align:right"></div>
						</td>
					</tr>
					<tr>
						<td style="text-align: left; background-color: #e8f5ff;">
							<div style="color: black" name="h21l1" type="label"
								defValue="5.债务重组损失"></div>
						</td>
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
								defValue="6.其他"></div>
						</td>

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
<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501950500","type":""},{"name":"sessionID","value":"b92306bf4e5947e3b5403bc000edaa82","type":""}]}'></div>

