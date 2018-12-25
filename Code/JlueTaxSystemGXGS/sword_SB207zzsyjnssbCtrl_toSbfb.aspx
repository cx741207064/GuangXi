<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SB207zzsyjnssbCtrl_toSbfb.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SB207zzsyjnssbCtrl_toSbfb" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>金税三期业务工作门户</title>
		<script language="javascript" type="text/javascript"
			src="../../swordweb/core/jsimport/Sword.js"></script>
		<script language="javascript" type="text/javascript" src="/gy/ywpt/ywpt_zypz_gy.js"></script>
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
			<div sword="PageInit" onFinish='initSb()'></div>
			<div sword="SwordGrid" name="fjsSbxxGrid" caption="附加税（费）申报信息"
				rows=10 dataX="100%" align="center" fenye="false" treePcode="pcode"
				treeCode="code">
                <div name="ewbhxh" type="rowNum" show="false"></div>
				<div name="sybh" caption="税源编号" type="text" rule="number_must" disable="true"
					x="10%" css="text-align:right"></div>
				<div name="zsxmmc" caption="征收项目" type="text" rule="" x="10%" 
					disable="true"></div>
				<div name="zspmmc" caption="征收品目" type="text" rule="" x="10%" 
					disable="true"></div>
				<div name="jsyj" caption="计税依据" type="text" rule="number_must" disable="true"
					x="10%" format="{'type':'number','format':'#,##0.00'}"
					css="text-align:right" onblur="fs5()"></div>
				<div name="sl1" caption="税率" type="text" rule="" disable="true"
					x="10%" format="{'type':'number','format':'#,##0.000000'}"
					css="text-align:right" onblur="fs5()"></div>
				<div name="ynse" caption="本期应纳税额" type="text" rule="" x="10%"
					disable="true" format="{'type':'number','format':'#,##0.00'}"
					css="text-align:right" onchange="fs8()"></div>
				<div name="ssjmxzDm" caption="减免性质代码" x="10%" type="select"
					dataname="jmxzList" popdisplay="{code}|{caption}"
					onChange="changeJmxz();" onBeforeClick="jmxzFilter()"></div>
				<div name="jmse" caption="减免税额" type="text" rule="number_must"
					x="10%" format="{'type':'number','format':'#,##0.00'}"
					onblur='jmxxAndJs();' css="text-align:right" onblur="fs8();"></div>
				<div name="yjse1" caption="已缴税额" type="text" rule="number_must"
				    x="10%" format="{'type':'number','format':'#,##0.00'}"
					css="text-align:right" onBlur=jsYjse();></div>
				<div name="ybtse" caption="本期应补（退）税额" type="text" rule="number_must"
					disable="true" x="10%"
					format="{'type':'number','format':'#,##0.00'}"
					css="text-align:right"></div>
				<div name="syssswjgdm" type="text" show="false"></div>
				<div name="jdxzdm" type="text" show="false"></div>
				<div name="zsxmDm" type="text" Show="false"></div>
				<!-- 预缴信息判断需要 -->
				<div name="zspmDm" type="text" Show="false"></div>
				<div name="skssqq" type="text" Show="false"></div>
				<!-- 预缴信息判断需要 -->
				<div name="skssqz" type="text" Show="false"></div>

				<div name="sb167Row" show="false" caption="与全局变量的编号对应" type="text"></div>
				<div name="sb167Cfsb" show="false" caption="本条目是否重复申报" type="text"></div>
				<div name="szbz" show="false" caption="随证标志0，计税依据，1应纳税额" type="text"></div>
				<div name="rdpzuuid" show="false" caption="认定主税UUID" type="text"></div>
				<div name="wdqzdBz" show="false" caption="未达起征点标记" type="text"></div>
			</div>

			<table class="tab_botton" border="0" cellpadding="0" cellspacing="0"
				align="center">
				<tr style="display:none">
                                                         <td colspan=100><div  name="cshBtn" sword="SwordSubmit" btnName="初始化" enabled="true" isShow="false" postType="ajax" class="submitbutton"></div></td>
                                                     </tr>
				<tr>
					<td>
						<div name="bcBtn" sword="SwordSubmit" btnName="保存" isShow="true"
							postType="ajax" class="submitbutton"
							onSubmitBefore="beforeSave();" onSuccess="saveSbxxOnSuccess();"
							onError="saveSbxxOnError();">
							<!-- <div widgetName="fjsxxList" isVal='false'></div> -->
						</div>
					</td>
					<td>
						<div name="drBtn" sword="SwordSubmit" btnName="导入" enabled="false"
							isShow="true" postType="ajax" class="submitbutton"
							onSubmitBefore="transToMainTab();">
						</div>
					</td>
					<td>
						<div name="gbBtn" sword="SwordSubmit" btnName="取消" enabled="true"
							isShow="false" postType="ajax" class="submitbutton">
						</div>
					</td>
					<td>
						<div name="dyBtn" sword="SwordSubmit" btnName="打印" enabled="true"
							isShow="true" postType="ajax" class="submitbutton"
							onclick="print();">
						</div>
					</td>
				</tr>
			</table>

			<div style="display: none">
				<div sword="SwordForm" name="nsrxxForm">
					<div name="nsrsbh" type="text"></div>
					<div name="nsrmc" type="text"></div>
					<div name="djxh" type="text"></div>
					<div name="ssglyDm" type="text"></div>
					<div name="zgswskfjDm" type="text"></div>
					<div name="djzclxDm" type="text"></div>
					<div name="hyDm" type="text"></div>
					<div name="dwlsgxDm" type="text"></div>
					<div name="jdxzDm" type="text"></div>
					<div name="skssqq" type="text"></div>
					<div name="skssqz" type="text"></div>
					<div name="yzpzzlDm" type="text"></div>
					<div name="sbrq1" type="text"></div>
					<div name="sblxDm" type="text" defValue="0"></div>
				</div>

				<div sword="SwordForm" name="nsrzcbbtzsGridForm">
					<div name="zxbztzsuuid" type="text"></div>
				</div>
				<div sword="SwordGrid" name="yzpzxhList" dataX="100%" scrollX="200%">
					<div name="yzpzxh" type="text"></div>
				</div>
				<div name="sblxDm" type="text"></div>

				<div name="zskpBtn" sword="SwordSubmit" enabled="true" isShow="true"
					caption="一般征收开票按钮" postType="form" class="submitbutton">
				</div>
				<div name="getJmxxBtn" sword="SwordSubmit" enabled="true"
					isShow="true" caption="得到减免信息按钮" postType="form"
					class="submitbutton">
				</div>
				<div name="openJmxxPageBtn" sword="SwordSubmit" enabled="true"
					isShow="true" caption="打开减免信息的页面" postType="ajax"
					class="submitbutton">
				</div>
			</div>

		</div>
		<script language='javascript' type='text/javascript' src='../../sb/sb000/sb000_fjssb.js'></script>
		<script language='javascript' type='text/javascript' src='../../sb/sb000/sb000_fjssb_formula.js'></script>
		<script language="javascript" type="text/javascript" src="../../sb/gy/sb_gy.js"></script>
		<script language='javascript' type='text/javascript' src='../../sb/scripts/sb_constants.js'></script>
	</body>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"csh","value":"0","type":""},{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"1621cb11f39b4c3ea028f45fa7225445","type":""}]}'></div>

