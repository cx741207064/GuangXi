<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SB071Kjqysdssb2015Ctrl_initView_SB071Kjqysdssb2015Ctrl_initView.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SB071Kjqysdssb2015Ctrl_initView_SB071Kjqysdssb2015Ctrl_initView" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>申报——扣缴企业所得税申报2015</title>
		<script language="javascript" type="text/javascript"
			src="../../swordweb/core/jsimport/Sword.js"></script>
		<script language="javascript" type="text/javascript"
			src="../../gt3_public/formula_engine.js"></script>
		<script language="javascript" type="text/javascript"
			src="../../gt3_public/jsDelegate.js"></script>
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
		<div>
			<div sword='PageInit' onFinish="init()"></div>
			<div sword='SwordToolBar' name='sbToolBar' style="width: 100%" showType="mini" id="sbToolBarHaveTrees">
				<div name="org" type="custom">
					<table style="height: 25px; margin: -5px 0px 0px 0px">
						<tr>
							<td valign="top" style="font-size: 12px;">
								主附表树:
							</td>
							<td valign="top">
								<div sword='SwordTree' onNodeClick="openTab();"
									name="sbZfbTree" inputWidth="300px" width="500px"
									select="true" autoShrink="true"
									dataStr=" {'data':[{'code':'00','caption':'-- 请选择 --'}],'name':'sbZfbTree','sword':'SwordTree'}"></div>
							</td>
						</tr>
					</table>
				</div>
				<div name="export" type="export" caption="导入" quickKey="Ctrl+I" enabled='true' onclick="drxx();" isShow="false"></div>
				
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<script type="text/javascript" src="/wsbs/pages/layout/layout3/cacheAdapter.js"></script>
	<script type="text/javascript" src="/sb/sb000/sb_tempsave.js"></script>
	<script type="text/javascript">
	
		
		_tempsave_arrVars['switch'] = 'N';
		_tempsave_arrVars['isVisible'] = true;
		_tempsave_arrVars['toolBarName'] = 'sbToolBar';
		
		window.addListener("load", function(){tempsave_init('sbToolBar')});
		
	</script>
</head>
<body >
	<div name="tempsave" type="save" caption="暂存" quickKey=""
		onclick="click_save_temp();"></div>
</body>
</html>

				<div name="save" type="save" caption="申报" quickKey="Ctrl+S" enabled='true' onclick="declare();"></div>
				<div name="edit" type="edit" caption="下一户" enabled='true' onclick="nextOne();" isShow="false"></div>
				<div name="print" type="print" caption="打印" quickKey="Ctrl+P" enabled='true' onclick="print();"></div>
            </div>
			<table cellpadding="0" cellspacing="0" border="0" width="100%">
				<tr>
					<td>
						<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
							<tr>
								<th>
									<center>
										<h2>
											中华人民共和国扣缴企业所得税报告表
										</h2>
									</center>
								</th>
							</tr>
						</table>

					</td>
				</tr>
				<tr>
					<td>
						<div id="table00">
							<div sword="SwordForm" name="nsrxxForm" caption="纳税人基本信息"
								panel="true" userdefine="true">
								<table class="tab_form" border="0" cellpadding="0"
									cellspacing="0">
									<colgroup>
										<col style="width: 15%"></col>
										<col style="width: 35%"></col>
										<col style="width: 15%"></col>
										<col style="width: 35%"></col>
									</colgroup>
									<tr>
										<th width="15%">
											代扣代缴义务人识别号
										</th>
										<td width="35%">
											<div name="dkdjywrsbh" type="text" disable="true" >
											</div>
										</td>
										<th width="15%">
											扣缴义务人名称
										</th>
										<td width="35%">
											<div name="kjrwrmc" type="text" disable="true">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											<span class="red">*</span> 税款所属期起
										</th>
										<td style="border-right: 0px">
											<div name="skssqq" type="date" rule="must"
												onkeyup="newChangeSj()" onChange="changSkssq();"
												returnRealValue="true">
											</div>
										</td>
										<th style="border-left: 0px; border-right: 0px">
											<span class="red">*</span> 止
										</th>
										<td style="border-left: 0px;">
											<div name="skssqz" type="date" rule="must"  disable="true"
												returnRealValue="true">
											</div>

										</td>
									</tr>
									<tr id="zrrTR1" style="display: none;">

										<th>
											<span class="red">*</span>行政区划
										</th>
										<td>
											<div name="xzqhszDm" type="pulltree" selectrule="leaf"
												popdisplay="{code}|{caption}" selectRealKey="code"
												inputWidth="100%" rule="must" width="300px"
												onSelectChange="changeXzqh();"></div>
										</td>
										<th>
											<span class="red">*</span>街道乡镇
										</th>
										<td>
											<div name="jdxzDm" type="select" dataname="DM_GY_JDXZ"
												dataFilter="jdxzFilter();" popdisplay="{code}|{caption}"
												edit="true" rule="must"></div>
										</td>
									</tr>
									<tr id="zrrTR2" style="display: none;">
										<th>
											<span class="red">*</span>税务机关
										</th>
										<td>
											<div name="zgswskfjDm" type="pulltree" treename='zgswskfjDm'
												width="300px"
												onNodeClick="changeZgswskfjDm('nsrxxForm','zgswskfjDm');">
											</div>
										</td>
										<th colspan="2"></th>
									</tr>
									<tr>
										<th>
											<span class="red">*</span> 申报日期
										</th>
										<td>
											<div name="sbrq1" type="date"
												rule="customFunction;checkSbrq()" returnRealValue="true" disable="true">
											</div>
										</td>
										<th style="text-align: right;">
											<span class="red">*</span>申报类型
										</th>
										<td>
											<div name="sbsxDm1" type="select" rule="must" defValue="11"
												onChange="changeSblx();">
												<div code="11" caption="正常申报"></div>
												<div code="21" caption="纳税人自行补正"></div>
											</div>
										</td>
									</tr>
									<tr>
										<th width="15%">
											<span class="red">*</span> 扣缴义务人类型
										</th>
										<td>
											<div name="kjrwrlx" type="select" onChange="changekjlx()"
												rule="must">
												<div code="1" caption="法定源泉扣缴"></div>
												<div code="2" caption="指定扣缴"></div>
											</div>
										</td>
										<th style="border-left: 0px; border-right: 0px">
											<span class="red">*</span> 申报方式
										</th>
										<td style="border-left: 0px;">
											<div name="sbfs" type="select" rule="must" defValue="扣缴申报"
												disable="true">
												<div code="扣缴申报" caption="扣缴申报"></div>
												<div code="自行申报" caption="自行申报"></div>
											</div>
										</td>
									</tr>
									<tr>
										<th>
											<span class="red">*</span> 登记注册类型
										</th>
										<td>
											<div name="djzclx" type="select" rule="must"
												popDisplay="{code}|{caption}" submitcontent="{code}"
												dataName="DM_DJ_DJZCLX" dataFilter="zsfsFilter()">
											</div>
										</td>
										<th>
											<span class="red">*</span>行业
										</th>
										<td>
											<div name="hyDm1" pulltreetype="HYDM" type='pulltree'
												rule="must" onCreateNode='cacheTreeNode(this)'
												selectrule="leaf" lazyLayer="1" lazyTime="200"
												rooPcode='      ' inputWidth="100%" width="300px"
												height="200px" onSelectChange="changeHy();"></div>
										</td>
									</tr>
								</table>
							</div>
							
<div sword="SwordGrid" name="flzlGrid" caption="附送资料" autoHeight="false"
	checkMoudle="false" fenye="false" dataX="100%"
	onAfterCreateCell="SwordGrid_onAfterCreateCell_flzlGrid()" dataY="200"
	align="center" style="display: none">
	<div name="flzlmc" caption="材料列表" type="label" x="60%"></div>
	<div name="sfbb" caption="是否必报" type="select" x="10%" disable="true"
		onChange="select_onChange_sfbb()">
		<div code="1" caption="是"></div>
		<div code="2" caption="否"></div>
	</div>
	<div name="sfcy" caption="是否查验" type="select" x="10%" defValue="1,1"
		disable="true">
		<div code="1" caption="否"></div>
		<div code="2" caption="是"></div>
		<div code="3" caption="否"></div>
		<div code="4" caption="否"></div>
	</div>
	<div name="sfgd" caption="是否归档" type="select" x="10%" defValue="2,1"
		disable="true">
		<div code="1" caption="是"></div>
		<div code="2" caption="否"></div>
		<div code="3" caption="否"></div>
		<div code="4" caption="否"></div>
	</div>
	<div name="check" type="checkbox" x="8%" data='true' allChk='false' caption='选中' onClick="select_onClick_xz()" OnCheckedChanged="alert(1);"></div>
</div>
<script language="javascript" type="text/javascript" src="../../gy/tysl/tyslComm/tysl_flzl.js">
</script>



							<div sword="SwordForm" name="kjxxForm" userdefine="true">
								<table class="tab_form" border="0" cellpadding="0"
									cellspacing="0">
									<colgroup>
										<col style="width: 12.5%"></col>
										<col style="width: 12.5%"></col>
										<col style="width: 12.5%"></col>
										<col style="width: 12.5%"></col>
										<col style="width: 12.5%"></col>
										<col style="width: 12.5%"></col>
										<col style="width: 12.5%"></col>
										<col style="width: 12.5%"></col>
									</colgroup>
									<tr>
										<th colspan=8 style="text-align: left">
											扣缴义务人基本信息：
										</th>
									</tr>
									<tr>
										<th colspan=2>
											纳税人识别号
										</th>
										<td colspan=2>
											<div name="nsrsbh" type="text" disable="true">
											</div>
										</td>
										<th colspan=2>
											经济类型
										</th>
										<td colspan=2>
											<div name="jjlxDm" type="select" disabled="true"
												popDisplay="{code}|{caption}" dataname="DM_DJ_DJZCLX">
											</div>
										</td>
									</tr>
									<tr>
										<th rowspan=2 colspan=1>
											名 称
										</th>
										<th>
											中：
										</th>
										<td colspan=2>
											<div name="nsrmc" type="text" disable="true">
											</div>
										</td>
										<th colspan=2>
											经济行业分类
										</th>
										<td colspan=2>
											<div name="jjhyflDm" type="select" dataname="DM_GY_HY"
												disabled="true">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											英：
										</th>
										<td rowspan=1 colspan=2>
											<div name="nsrmcEn" type="text">
											</div>
										</td>
										<th colspan=2>
											联系人
										</th>
										<td colspan=2>
											<div name="lxr" type="text">
											</div>
										</td>
									</tr>
									<tr>
										<th rowspan=2 colspan=1>
											地 址
										</th>
										<th>
											中：
										</th>
										<td rowspan=1 colspan=2>
											<div name="dz" type="text" disable="true">
											</div>
										</td>
										<th colspan=2>
											联系电话
										</th>
										<td colspan=2>
											<div name="lxdh" type="text">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											英：
										</th>
										<td rowspan=1 colspan=2>
											<div name="dzEn" type="text">
											</div>
										</td>
										<th rowspan=1 colspan=2>
											邮政编码
										</th>
										<td colspan=3>
											<div name="yzbm" type="text">
											</div>
										</td>
									</tr>
									<tr>
										<th colspan=8 style="text-align: left">
											纳税人基本信息：
										</th>
									</tr>
									<tr>
										<th colspan=2>
											被扣缴纳税人识别号
										</th>
										<td colspan=2>
											<div name="zqjmgnssbh" type="text" onblur="checknsrsbh();">
											</div>
										</td>
										<th rowspan=1 colspan=2>
											被扣缴纳税人名称
										</th>
										<td colspan=2>
											<div name="zzgjndmc" type="text">
											</div>
										</td>
									</tr>
									<tr>
										<th colspan=2>
											在其居民国纳税识别号
										</th>
										<td colspan=2>
											<div name="jmgnssbh" type="text">
											</div>
										</td>
										<th rowspan=2>
											在中国境内的名称
										</th>
										<th>
											中：
										</th>
										<td colspan=2>
											<div name="jndmc" type="text">
											</div>
										</td>
									</tr>
									<tr>
										<th colspan=2>
											<span class="red">*</span>居民国（地区）名称及代码
										</th>
										<td colspan=2>
											<div name="jmgmcjdm" type="select" dataname="DM_GY_GJHDQ"
												edit="true" popDisplay="{code}|{caption}">
											</div>
										</td>
										<th>
											英：
										</th>
										<td colspan=2>
											<div name="zzgjldmcEn" type="text">
											</div>
										</td>
									</tr>
									<tr>
										<th rowspan=2 colspan=1>
											在其居民国名称
										</th>
										<th>
											<span class="red">*</span>中：
										</th>
										<td rowspan=1 colspan=2>
											<div name="zqjmgmc" type="text" rule="must">
											</div>
										</td>
										<th rowspan=2>
											<span class="red">*</span>在其居民国地址
										</th>
										<th>
											<span class="red">*</span>中：
										</th>
										<td colspan=2>
											<div name="zqjmgdz" type="text" rule="must">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											<span class="red">*</span>英：
										</th>
										<td rowspan=1 colspan=2>
											<div name="zqjmgmcEn" rule="must" type="text">
											</div>
										</td>
										<th>
											<span class="red">*</span>英：
										</th>
										<td colspan=2>
											<div name="zqjmgdzEn" type="text" rule="must">
											</div>
										</td>
									</tr>
									<tr>
										<th colspan=2>
											<span class="red">*</span>申报所得类型及代码
										</th>
										<td colspan=2>
											<div name="sbsdlxjdm" type="select" rule="must"
												popdisplay="{code}|{caption}" dataname="sdlxData"
												onChange="getsjzsl();">
											</div>                                          
										</td>
										<th rowspan=1 colspan=2>
											<span class="red">*</span>本次申报所得取得日期
										</th>
										<td colspan=2>
											<div name="bcsbsdqdrq" type="date" rule="must"
												returnRealValue="true">
											</div>
										</td>
									</tr>
									<tr>
										<th colspan=2>
											<span class="red">*</span>合同名称
										</th>
										<td colspan=2>
											<div name="htmc" type="text" rule="must">
											</div>
										</td>
										<th rowspan=1 colspan=2>
											<span class="red">*</span>合同编号
										</th>
										<td colspan=2>
											<div name="htbh" type="text" rule="must">
											</div>
										</td>
									</tr>
									<tr>
										<th colspan=2>
											合同总金额
										</th>
										<td colspan=2>
											<div name="htjewz" type="text" css="text-align:right"
												returnRealValue="true" disable="true">
											</div>
										</td>
										<th colspan=2>
											合同币种
										</th>
										<td colspan=2>
											<div name="htbz" type="select" dataname="DM_GY_HB" disable="true"
												popDisplay="{code}|{caption}" defValue="156">
											</div>
										</td>
									</tr>
									<tr>
										<th colspan=2>
											合同执行起始时间
										</th>
										<td colspan=2>
											<div name="htzxqssj" type="date" disable="true"
												onchange="jyHtrqsj()">
											</div>
										</td>
										<th colspan=2>
											合同执行终止时间
										</th>
										<td colspan=2>
											<div name="htqszzsj" type="date" disable="true"
												onchange="jyHtrqsj()">
											</div>
										</td>										
									</tr>
									<tr>
										<th colspan=2>
											是否享受税收协定待遇
										</th>
										<td colspan=2>
											<div name="sfxsssxddy"  type="select" dataname="DM_GY_SFBZ" onchange="changeSfxsssxddy()" defValue="N">
											</div>
										</td>
										<th colspan=2>
											适用税收协定条款
										</th>
										<td colspan=2>
											<div name="syssxdtk" type="select" dataname="syssxdtkList" onchange="changeSyssxdtk()">												
											</div>
										</td>										
									</tr>
									<tr>
										<th colspan=2>
											是否享受其他类协定待遇
										</th>
										<td colspan=2>
											<div name="sfxsqtlxddy" type="select" dataname="DM_GY_SFBZ" onchange="changeSfxsqtlxddy()" defValue="N">
											</div>
										</td>
										<th colspan=2>
											其他类协定名称
										</th>
										<td colspan=2>
											<div name="qtlxdmc" type="text" onchange="changeQtlxdmc()">
											</div>
										</td>										
									</tr>
									<tr>
										<th colspan=2>
											是否享受国内税法优惠
										</th>
										<td colspan=2>
											<div name="sfxsgnsfyh" type="select" dataname="DM_GY_SFBZ" onchange="changeSfxsgnsfyh()" defValue="N">
											</div>
										</td>
										<th colspan=2>
											国内税法优惠项目
										</th>
										<td colspan=2>
											<div name="gnsfyhxm" type="select" dataname="gnsfyhxmList" onchange="changeGnsfyhxm()">												
											</div>
										</td>										
									</tr>
									<tr>
										<th colspan=8 style="text-align: left">
											以下内容适用于法定源泉扣缴和自行申报情况填写：
										</th>
									</tr>
									<tr>
										<th style="text-align: center">
											行次
										</th>
										<th colspan=4 style="text-align: center">
											项 目
										</th>
										<th colspan=3 style="text-align: center">
											依法申报数据
										</th>
									</tr>
									<tr>
										<th>
											1
										</th>
										<th rowspan=6>
											本次申报收入
										</th>
										<th colspan=3>
											人民币金额
										</th>
										<td colspan=3>
											<div name="rmbje" type="text" css="text-align:right"
												defvalue="0.00" returnRealValue="true"
												format="{'type':'number','format':'#,##0.00'}"
												onblur='ybtseJs();'>
											</div>
										</td>
									</tr>
									<tr>
										<th>
											2
										</th>
										<th rowspan=4>
											外 币
										</th>
										<th colspan=2>
											名称
										</th>
										<td colspan=3>
											<div name="mc" type="select" dataname="DM_GY_HB" rule="must"
												popDisplay="{code}|{caption}">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											3
										</th>
										<th colspan=2>
											金额
										</th>
										<td colspan=3>
											<div name="je" type="text" rule="must" css="text-align:right"
												defvalue="0.00" returnRealValue="true"
												format="{'type':'number','format':'#,##0.00'}"
												onblur="ybtseJs();">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											4
										</th>
										<th colspan=2>
											汇率
										</th>
										<td colspan=3>
											<div name="sl" type="text" rule="must" css="text-align:right"
												defvalue="0.00" returnRealValue="true"
												format="{'type':'number','format':'#,######0.000000'}"
												onblur="ybtseJs();">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											5
										</th>
										<th colspan=2>
											折算人民币金额 5=3×4
										</th>
										<td colspan=3>
											<div name="zsrmbje" type="text" disable="true"
												defvalue="0.00" css="text-align:right"
												returnRealValue="true"
												format="{'type':'number','format':'#,##0.00'}">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											6
										</th>
										<th colspan=3>
											人民币金额合计 6=1+5
										</th>
										<td colspan=3>
											<div name="rmbjehj" type="text" disable="true"
												defvalue="0.00" css="text-align:right"
												returnRealValue="true"
												format="{'type':'number','format':'#,##0.00'}">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											7
										</th>
										<th rowspan=3>
											应纳税所得额的计算
										</th>
										<th colspan=3>
											扣除额
										</th>
										<td colspan=3>
											<div name="kce" rule="must" type="text" defvalue="0.00"
												css="text-align:right" returnRealValue="true"
												format="{'type':'number','format':'#,##0.00'}"
												onblur="ybtseJs();">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											8
										</th>
										<th colspan=3>
											所得减免
										</th>
										<td colspan=3>
											<div name="sdsjmse" type="text" defvalue="0.00" rule="number(14,2)" 
												css="text-align:right" returnRealValue="true"
												format="{'type':'number','format':'#,##0.00'}" onblur="checkJmse();">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											9
										</th>
										<th colspan=3>
											应纳税所得额 9=6-7-8
										</th>
										<td colspan=3>
											<div name="ynsdse" type="text" disable="true" defvalue="0.00"
												css="text-align:right" returnRealValue="true"
												format="{'type':'number','format':'#,##0.00'}">
											</div>
										</td>
									</tr>									
									<tr>
										<th>
											10
										</th>
										<th rowspan=5>
											应纳企业所得税额的计算
										</th>
										<th colspan=3>
											适用税率（10%）
										</th>
										<td colspan=3>
											<div name="sysl" type="text" css="text-align:right"
												defvalue="0.10" disable="true" value="0.1"
												returnRealValue="true"
												format="{'type':'number','format':'#,######0.000000'}">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											11
										</th>
										<th colspan=3>
											应缴纳的企业所得税额 11=9×10
										</th>
										<td colspan=3>
											<div name="yjndqysdse" type="text" defvalue="0.00"
												disable="true" returnRealValue="true" css="text-align:right"
												format="{'type':'number','format':'#,##0.00'}">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											12
										</th>
										<th colspan=3>
											实际征收率（%）
										</th>
										<td colspan=3>
											<div name="sjzsl" type="text" css="text-align:right"
												returnRealValue="true" defvalue="0.00"
												onblur="jyYqkjsjzsl();" disable="true"
												format="{'type':'number','format':'#,######0.000000'}">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											13
										</th>
										<th colspan=3>
											实际应缴纳的企业所得税额 13=9×12
										</th>
										<td colspan=3>
											<div name="ysjjndqysdse" type="text" disable="true"
												defvalue="0.00" css="text-align:right"
												returnRealValue="true"
												format="{'type':'number','format':'#,##0.00'}">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											14
										</th>
										<th colspan=3>
											减免企业所得税额 14=11-13
										</th>
										<td colspan=3>
											<div name="jmqysdse" type="text" disable="true"
												defvalue="0.00" css="text-align:right"
												returnRealValue="true"
												format="{'type':'number','format':'#,##0.00'}">
											</div>
										</td>
									</tr>
									<tr>
										<th colspan=8 style="text-align: left">
											以下内容适用于主管税务机关指定扣缴情况填写：
										</th>
									</tr>
									<tr>
										<th style="text-align: center">
											行次
										</th>
										<th colspan=4 style="text-align: center">
											项 目
										</th>
										<th colspan=3 style="text-align: center">
											依法申报数据
										</th>
									</tr>
									<tr>
										<th>
											15
										</th>
										<th colspan=4>
											行业
										</th>
										<td colspan=3>
											<div name="kjhy" type="select"   dataname="kjhyList"  popDisplay="{code}|{caption}">												
											</div>
										</td>
									</tr>
									<tr>
										<th>
											16
										</th>
										<th colspan=4>
											本次申报的收入总额
										</th>
										<td colspan=3>
											<div name="bcsbdsrze" type="text" css="text-align:right"
												defvalue="0.00" returnRealValue="true"
												format="{'type':'number','format':'#,##0.00'}">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											17
										</th>
										<th colspan=4>
											税务机关核定的利润率（%）
										</th>
										<td colspan=3>
											<div name="swjghdlrl" type="text" css="text-align:right"
												disable="true" defvalue="0.00"
												format="{'type':'number','format':'#,######0.000000'}"
												returnRealValue="true">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											18
										</th>
										<th colspan=4>
											应纳税所得额 18=16×17
										</th>
										<td colspan=3>
											<div name="ynssde" type="text" disable="true"
												css="text-align:right" returnRealValue="true"
												format="{'type':'number','format':'#,##0.00'}">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											19
										</th>
										<th colspan=4>
											税率（25%）
										</th>
										<td colspan=3>
											<div name="sysl1" type="text" css="text-align:right"
												defvalue="0.25" disable="true" returnRealValue="true"
												format="{'type':'number','format':'#,######0.000000'}">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											20
										</th>
										<th colspan=4>
											应纳企业所得税额 20=18×19
										</th>
										<td colspan=3>
											<div name="ynqysdse" type="text" disable="true"
												css="text-align:right" defvalue="0.00"
												returnRealValue="true"
												format="{'type':'number','format':'#,##0.00'}">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											21
										</th>
										<th colspan=4>
											减免所得税额
										</th>
										<td colspan=3>
											<div name="jmqysdse1" type="text" css="text-align:right" rule="number(14,2)" 
												defvalue="0.00" disable="true" returnRealValue="true"
												format="{'type':'number','format':'#,######0.00'}" onblur="checkJmse();">
											</div>
										</td>
									</tr>
									<tr>
										<th>
											22
										</th>
										<th colspan=4>
											实际应缴纳的企业所得税额22＝20-21
										</th>
										<td colspan=3>
											<div name="sjyjnedqysdse" type="text" disable="true"
												css="text-align:right" defvalue="0.00"
												returnRealValue="true"
												format="{'type':'number','format':'#,##0.00'}">
											</div>
										</td>
									</tr>
									<tr style="display: none">
										<th>
											税务代理人经办人
										</th>
										<td>
											<div name="swdljbr" type="text">
											</div>
										</td>
										<th colspan=2>
											税务代理人经办人执业证件号码
										</th>
										<td>
											<div name="swdlrjbrzyzjhm" type="text">
											</div>
										</td>
										<th colspan=2>
											<span class="red">*</span>税务代理人代理申报日期
										</th>
										<td>
											<div name="swdlrdlsbrq" type="date" rule="must">
											</div>
										</td>
									</tr>
									<tr style="display: none">
										<th>
											受理人
										</th>
										<td>
											<div name="slr" type="text">
											</div>
										</td>
										<th colspan=2>
											受理税务机关
										</th>
										<td>
											<div name="slswjgmc" type="text" disable="true"></div>
										</td>
										<th colspan=2>
											受理日期
										</th>
										<td>
											<div name="slrq" type="date">
											</div>
										</td>										
									</tr>
								</table>
							</div>
							<table class="tab_botton" border="0" cellpadding="0"
								cellspacing="0" align="center">
								<tr>
									<td>
										<div name="zskpBtn" sword="SwordSubmit" enabled="true"
											isShow="false" caption="一般征收开票按钮" postType="form">
										</div>
									</td>
									<td>
										<div name="ssqzBtn" caption="在页面日期onchange事件后需要提交的"
											sword="SwordSubmit" enabled="true" isShow="false"
											postType="ajax" onSuccess="changessqzOnSuccess();">
										</div>
									</td>
								</tr>
							</table>
						</div>
						<table class="tab_botton" border="0" cellpadding="0"
							cellspacing="0" align="center">
							<tr>
								<td>
									<div name="openTabBtn" sword="SwordSubmit" enabled="true"
										isShow="false" caption="打开附表功能" postType="ajax"
										class="submitbutton" tid="SB071KjqysdssbCtrl_gethtbaxx"
										onSuccess="initOnSuccess();" onError="initOnError();">
									</div>
								</td>
								<td>
									<div name="zskpBtn" sword="SwordSubmit" enabled="true"
										isShow="false" caption="一般征收开票按钮" postType="form">
									</div>
								</td>
								<td>
									<div name="ssqzBtn" caption="在页面日期onchange事件后需要提交的"
										sword="SwordSubmit" enabled="true" isShow="false"
										postType="ajax" onSuccess="changessqzOnSuccess();">
									</div>
								</td>
							</tr>
						</table>
						</div>
						<div id="table01" style="display: none">
							<iframe id="table01iframe" src="" name="table01iframe"
								style="height: 525px; width: 100%" scrolling="auto"></iframe>
						</div>
						<div id="table02" style="display: none">
							<iframe id="table02iframe" src="" name="table02iframe"
								style="height: 525px; width: 100%" scrolling="auto"></iframe>
						</div>
					</td>
				</tr>
			</table>
		</div>
		<div id="SwordCacheData"
			query="[{T:'DM_GY_SFBZ'},
		{T:'DM_GY_HY'},
		{T:'DM_DJ_DJZCLX','WN':'djzclx'},
		{T:'DM_GY_GJHDQ','WN':'jmgmcjdm'},
		{T:'DM_GY_HB','WN':'mc'}]"
			queryTree="[{T:'DM_GY_HY'}]"></div>
		<script language='javascript' type='text/javascript' src='/gy/gy002/queryNsrxxByNsrsbhComm.js'></script>
		<script language='javascript' type='text/javascript' src='../../sb/sb071/sb071_kjqysdssb2015.js'></script>
		<script language='javascript' type='text/javascript' src='../../sb/sb071/sb071_zb_frame.js'></script>
		<script language='javascript' type='text/javascript' src='../../sb/gy/sb_gy.js'></script>
		<script language='javascript' type='text/javascript' src='/gy/gy011/gyPrint.js'></script>			
	</body>
</html>
<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"nsrxxForm","data":{"skssqq":{"value":"2017-11-30"},"tbrq1":{"value":"2017-11-30"},"nsrsbh":{"value":"91450107MA5KE0EQ2B"},"sbrq":{"value":"2017-11-30"},"sbrq1":{"value":"2017-11-30"},"skssqz":{"value":"2017-11-30"},"tbrq":{"value":"2017-11-30"}},"sword":"SwordForm"},{"name":"slxxForm","data":{"ssgly":{"value":""},"shrDm":{"value":""},"slrDm":{"value":""},"slrq":{"value":"2017-11-30 14:21:55"},"shrq":{"value":"2017-11-30"},"slswjgmc":{"value":"南宁市西乡塘区国家税务局税源管理二股"}},"sword":"SwordForm"},{"name":"kjxxForm","data":{"ssgly":{"value":""},"shrDm":{"value":""},"slrDm":{"value":""},"slrq":{"value":"2017-11-30 14:21:55"},"shrq":{"value":"2017-11-30"},"slswjgmc":{"value":"南宁市西乡塘区国家税务局税源管理二股"}},"sword":"SwordForm"},{"name":"tsswjggzlx","value":"0","type":""},{"data":[],"dataType":"json","sword":"SwordTree","name":"zgswskfjDm"},{"data":[{"caption":"西乡塘区","pcode":"450100","code":"450107"}],"dataType":"json","sword":"SwordTree","name":"xzqhszDm"},{"data":[{"caption":"西乡塘区","code":"450107000","xzqhDm":"450107"},{"caption":"衡阳街道办事处","code":"450107001","xzqhDm":"450107"},{"caption":"北湖街道办事处","code":"450107002","xzqhDm":"450107"},{"caption":"西乡塘街道办事处","code":"450107003","xzqhDm":"450107"},{"caption":"安吉街道办事处","code":"450107004","xzqhDm":"450107"},{"caption":"华强街道办事处","code":"450107005","xzqhDm":"450107"},{"caption":"新阳街道办事处","code":"450107006","xzqhDm":"450107"},{"caption":"上尧街道办事处","code":"450107007","xzqhDm":"450107"},{"caption":"安宁街道办事处","code":"450107008","xzqhDm":"450107"},{"caption":"石埠街道办事处","code":"450107009","xzqhDm":"450107"},{"caption":"心圩街道办事处","code":"450107010","xzqhDm":"450107"},{"caption":"金陵镇","code":"450107100","xzqhDm":"450107"},{"caption":"双定镇","code":"450107101","xzqhDm":"450107"},{"caption":"坛洛镇","code":"450107105","xzqhDm":"450107"},{"caption":"那龙矿务局","code":"450107450","xzqhDm":"450107"},{"caption":"金光农场","code":"450107453","xzqhDm":"450107"},{"caption":"高新技术开发区管委会","code":"450107454","xzqhDm":"450107"}],"sword":"SwordSelect","dataName":"DM_GY_JDXZ"},{"data":[{"ssyhxmmc":"股息条款","yxbz":"Y","swjgDm":"00000000000","yhlb":"2","caption":"股息条款","ssjmxzDm":"0004135501","code":"2001","ssyhxm":"2001"},{"ssyhxmmc":"利息条款","yxbz":"Y","swjgDm":"00000000000","yhlb":"2","caption":"利息条款","ssjmxzDm":"0004135501","code":"2002","ssyhxm":"2002"},{"ssyhxmmc":"特许权使用费条款或技术服务费条款","yxbz":"Y","swjgDm":"00000000000","yhlb":"2","caption":"特许权使用费条款或技术服务费条款","ssjmxzDm":"0004135501","code":"2003","ssyhxm":"2003"},{"ssyhxmmc":"财产收益条款","yxbz":"Y","swjgDm":"00000000000","yhlb":"2","caption":"财产收益条款","ssjmxzDm":"0004135701","code":"2004","ssyhxm":"2004"},{"ssyhxmmc":"海运、空运和陆运条款","yxbz":"Y","swjgDm":"00000000000","yhlb":"2","caption":"海运、空运和陆运条款","ssjmxzDm":"0004139901","code":"2005","ssyhxm":"2005"},{"ssyhxmmc":"常设机构及营业利润条款","yxbz":"Y","swjgDm":"00000000000","yhlb":"2","caption":"常设机构及营业利润条款","ssjmxzDm":"0004139901","code":"2006","ssyhxm":"2006"},{"ssyhxmmc":"其他所得条款","yxbz":"Y","swjgDm":"00000000000","yhlb":"2","caption":"其他所得条款","ssjmxzDm":"0004139901","code":"2009","ssyhxm":"2009"}],"sword":"SwordSelect","dataName":"syssxdtkList"},{"data":[{"ssyhxmmc":"外国政府利息免征企业所得税","yxbz":"Y","swjgDm":"00000000000","yhlb":"1","caption":"外国政府利息免征企业所得税","ssjmxzDm":"0004081511","code":"1001","ssyhxm":"1001"},{"ssyhxmmc":"国际金融组织利息免征企业所得税","yxbz":"Y","swjgDm":"00000000000","yhlb":"1","caption":"国际金融组织利息免征企业所得税","ssjmxzDm":"0004081512","code":"1002","ssyhxm":"1002"},{"ssyhxmmc":"QFII和RQFII股票转让免征企业所得税","yxbz":"Y","swjgDm":"00000000000","yhlb":"1","caption":"QFII和RQFII股票转让免征企业所得税","ssjmxzDm":"0004081513","code":"1003","ssyhxm":"1003"},{"ssyhxmmc":"沪港通A股转让免征企业所得税","yxbz":"Y","swjgDm":"00000000000","yhlb":"1","caption":"沪港通A股转让免征企业所得税","ssjmxzDm":"0004081514","code":"1004","ssyhxm":"1004"},{"ssyhxmmc":"投资者从证券投资基金分配中取得的收入暂不征收企业所得税","yxbz":"Y","swjgDm":"00000000000","yhlb":"1","caption":"投资者从证券投资基金分配中取得的收入暂不征收企业所得税","ssjmxzDm":"0004081516","code":"1005","ssyhxm":"1005"},{"ssyhxmmc":"分配08年以前股息红利免征企业所得税","yxbz":"Y","swjgDm":"00000000000","yhlb":"1","caption":"分配08年以前股息红利免征企业所得税","ssjmxzDm":"0004129922","code":"1006","ssyhxm":"1006"},{"ssyhxmmc":"非居民企业购买国债利息免征企业所得税","yxbz":"Y","swjgDm":"00000000000","yhlb":"1","caption":"非居民企业购买国债利息免征企业所得税","ssjmxzDm":"0004083904","code":"1007","ssyhxm":"1007"},{"ssyhxmmc":"非居民企业取得的地方政府债券利息所得免征企业所得税","yxbz":"Y","swjgDm":"00000000000","yhlb":"1","caption":"非居民企业取得的地方政府债券利息所得免征企业所得税","ssjmxzDm":"0004081507","code":"1008","ssyhxm":"1008"},{"ssyhxmmc":"非居民企业取得的中国铁路建设债券利息所得减半征收企业所得税","yxbz":"Y","swjgDm":"00000000000","yhlb":"1","caption":"非居民企业取得的中国铁路建设债券利息所得减半征收企业所得税","ssjmxzDm":"0004121302","code":"1009","ssyhxm":"1009"},{"ssyhxmmc":"海峡两岸海上直航免征企业所得税","yxbz":"Y","swjgDm":"00000000000","yhlb":"1","caption":"海峡两岸海上直航免征企业所得税","ssjmxzDm":"0004032101","code":"1010","ssyhxm":"1010"},{"ssyhxmmc":"海峡两岸空中直航免征企业所得税","yxbz":"Y","swjgDm":"00000000000","yhlb":"1","caption":"海峡两岸空中直航免征企业所得税","ssjmxzDm":"0004032102","code":"1011","ssyhxm":"1011"},{"ssyhxmmc":"北京2022年冬奥会免征企业所得税","yxbz":"Y","swjgDm":"00000000000","yhlb":"1","caption":"北京2022年冬奥会免征企业所得税","ssjmxzDm":"0004102906","code":"1013","ssyhxm":"1013"},{"ssyhxmmc":"北京2022年冬残奥会免征企业所得税","yxbz":"Y","swjgDm":"00000000000","yhlb":"1","caption":"北京2022年冬残奥会免征企业所得税","ssjmxzDm":"0004102908","code":"1014","ssyhxm":"1014"}],"sword":"SwordSelect","dataName":"gnsfyhxmList"},{"data":[{"hymc":"承包工程作业、设计和咨询劳务","hyDm":"1001","yxbz":"Y","swjgDm":"00000000000","hdlrl":"0.23","caption":"承包工程作业、设计和咨询劳务","code":"1001","swjghdLrl":"0.225"},{"hymc":"管理服务","hyDm":"1002","yxbz":"Y","swjgDm":"00000000000","hdlrl":"0.4","caption":"管理服务","code":"1002","swjghdLrl":"0.4"},{"hymc":"其他劳务或劳务以外经营活动","hyDm":"1003","yxbz":"Y","swjgDm":"00000000000","hdlrl":"0.23","caption":"其他劳务或劳务以外经营活动","code":"1003","swjghdLrl":"0.225"},{"hymc":"国际运输","hyDm":"1004","yxbz":"Y","swjgDm":"00000000000","hdlrl":"0.15","caption":"国际运输","code":"1004","swjghdLrl":"0.15"}],"sword":"SwordSelect","dataName":"kjhyList"},{"data":[{"type":"select","caption":"不动产租金","code":"06"},{"type":"select","caption":"承包工程、提供劳务所得","code":"07"},{"type":"select","caption":"股息红利所得","code":"10"},{"type":"select","caption":"利息所得","code":"11"},{"type":"select","caption":"特许权使用费所得","code":"12"},{"type":"select","caption":"转让财产所得","code":"13"},{"type":"select","caption":"其他所得","code":"21"},{"type":"select","caption":"国际运输","code":"08"}],"sword":"SwordSelect","dataName":"sdlxData"},{"name":"lcswsxDm","value":"LCSXA061005005","type":""},{"name":"qysdsskssq_cs","value":"N","type":""},{"name":"kjqysds_bj","value":"N","type":""},{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"f0a2f9997a834508bca92c3923234ed6","type":""}]}'></div>

