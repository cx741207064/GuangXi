<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="form.sword_SB071KjqysdssbCtrl_gethtbaxx.aspx.cs" Inherits="JlueTaxSystemGXGS.form_sword_SB071KjqysdssbCtrl_gethtbaxx" %>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>金税三期业务工作门户</title>
		<script language="javascript" type="text/javascript"
			src="../../swordweb/core/jsimport/Sword.js"></script>
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
			<div sword='PageInit' onFinish="init()"></div>
			<div sword='SwordToolBar' showType='mini' name="toolbar" isFixed='false'>
				<div name='cxtjBtn' caption='显示查询条件' onclick='showQueryCondition();'></div>
				<div name='ycBtn' caption='隐藏查询条件' onclick='hideQueryCondition();' isShow="false"></div>
                <div name="find" caption="过滤" onclick="filterHtbaxx()" isShow="false"></div>				
			</div>
			<div sword="SwordForm" name="cxForm" panel="true" layout="layer1"
				id="cxtj" style='display: none' caption="查询条件" userdefine="true">
				<table class="tab_form" cellpadding="0" cellspacing="0" id="tableform">
					<colgroup>
						<col width="15%" />
						<col width="35%" />
						<col width="15%" />
						<col width="35%" />
					</colgroup>
					<tr>
						<th>
							非居民组织纳税识别号
						</th>
						<td>
							<div name="fjmnsrsbh" type="select" dataName="fjmnsrList"></div> <!-- type="text"--> 
						</td>
						<th>
							合同编号
						</th>
						<td>
							<div name="hth" type="select" dataName="hthList"></div>
						</td>
					</tr>
					<tr>
						<th>
							合同执行起始时间
						</th>
						<td>
							<div name="htqyrq" type="date"></div>
						</td>
						<th>
							合同执行终止日期
						</th>
						<td>
							<div name="htyxqx" type="date"></div>
						</td>
					</tr>
				</table>
			</div>
			<div sword="SwordGrid" name="htbaxxGrid" caption="合同备案信息" scrollX="180%" dataX="100%" 
			    dataY=260 align="center" fenye="true"  treePcode="pcode" treeCode="code">
				<div name="xz" caption="选择" type="radio" x='3%'></div>
				<div name="kjlx" caption="扣缴义务类型" type="select" disable="true"
					x='5%' disable="true">
					 <div code="1" caption="法定源泉扣缴"></div>
					 <div code="2" caption="指定扣缴"></div>
					</div>
				<div name="fjmnsrsbh" caption="非居民组织纳税识别号" type="text" x='7%'
					disable="true"></div>
				<div name="fjmnsrzqjmgdqmcjdm" caption="纳税人在其居民国（地区）名称及代码"
					type="text" x='8%' disable="true"></div>
				<div name="fjmqyzwmc" caption="纳税人中文名称" type="text" x='5%'
					disable="true"></div>
				<div name="fjmqyywmc" caption="纳税人英文名称" type="text" x='5%'
					disable="true"></div>
				<div name="zqjmgnsrzwmc" caption="居民国纳税人中文名称" type="text" x='7%'
					disable="true"></div>
				<div name="zqjmgnsrywmc" caption="居民国纳税人英文名称" type="text" x='7%'
					disable="true"></div>	
				<div name="fjmqyzqjmgzwdz" caption="纳税人在其居民国中文地址" type="text" x='7%'
					disable="true"></div>
				<div name="fjmqyzqjmgywdz" caption="纳税人在其居民国英文地址" type="text" x='7%'
					disable="true"></div>
				<div name="hthxymc" caption="合同名称" type="text" x='5%' disable="true"></div>
				<div name="hth" caption="合同编号" type="text" x='7%' disable="true"></div>
				<div name="htqyrq" caption="合同执行起始时间" type="date" x='7%' 	disable="true"></div>
				<div name="htyxqx" caption="合同执行终止日期" type="date" x='7%' 	disable="true"></div>
				<div name="htje" caption="合同总金额" type="text" css="text-align:right" x='5%' disable="true"></div>
				<div name="qysdssdlxDm" caption="支付（所得）项目" type="select" popdisplay="{code}|{caption}" 
				    dataname="DM_SB_QYSDSSDLX" css="text-align:right" x='7%' disable="true"></div>	
					
				<div name="fjmqyzqjmgzwdz" caption="中文地址" type="date" show="false"
					disable="true"></div>
				<div name="fjmqyzqjmgywdz" caption="英文地址" type="text" show="false"
					disable="true"></div>	
			    <div name="gjhdqszDm" caption="国家或地主代码" type="text" show="false"
					disable="true"></div>	
				<div name="xthtbh" caption="编号" type="text" show="false"
					disable="true"></div>
				<div name="htbz" caption="合同币种" type="text" show="false"
					disable="true"></div>
				<div name="fjmdjzclxDm" caption="非居民登记注册类型代码" type="text" show="false"
					disable="true"></div>
				<div name="fjmhyDm" caption="非居民行业代码" type="text" show="false"
					disable="true"></div>								
			</div>
			<table class="tab_botton" border="0" cellpadding="0" cellspacing="0"
				align="center">
				<tr>
					<td>
						<div name="onokBtn" sword="SwordSubmit" btnName="确定"
							enabled="true" isShow="true" postType="ajax" class="submitbutton"
							onSubmitBefore="save()">

						</div>
					</td>
					<td>
						<div name="closeBtn" sword="SwordSubmit" btnName="退出"
							enabled="true" isShow="true" postType="ajax" class="submitbutton"
							onSubmitBefore="exit()">
						</div>
					</td>
				</tr>
			</table>
        <div id="SwordCacheData"
            query="[{T:'DM_SB_QYSDSSDLX','WN':'qysdssdlxDm'}]"></div>			
		<script language='javascript' type='text/javascript'
			src='../../sb/scripts/sb_gy.js'></script>
		<script language='javascript' type='text/javascript'
			src='../../sb/sb071/sb071_htxx.js'></script>
	</body>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"trs":[],"name":"htbaxxGrid","sword":"SwordGrid"},{"trs":[],"name":"ysGrid","sword":"SwordGrid"},{"data":[],"sword":"SwordSelect","dataName":"fjmnsrList"},{"data":[],"sword":"SwordSelect","dataName":"hthList"},{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"090a0b09b5224880a51c68ed2bb644e9","type":""}]}'></div>

