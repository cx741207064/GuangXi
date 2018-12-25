<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SB097TydkdjsbCtrl_initView_SB097TydkdjsbCtrl_initView.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SB097TydkdjsbCtrl_initView_SB097TydkdjsbCtrl_initView" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
			<title>申报——通用代扣代缴</title> <script language="javascript"
				type="text/javascript" src="../../swordweb/core/jsimport/Sword.js">
	
</script>
			<script language="javascript" type="text/javascript"
				src="../../gt3_public/formula_engine.js">
	
</script>
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
				<div style="display: none; font-size: 30px;"
					id="_persist_flash_text">
					为了系统使用更顺畅，请点击【允许】按钮。
				</div>
			</center>
		</div>
		<!-- 缓存 -->
		<div class="wrapper">
			<div sword='PageInit' onFinish="init();"></div>
			<div sword='SwordToolBar' name='sbToolBar' style="width: 100%"
				showType="mini" id="sbToolBarHaveTrees">
				<div name="org" type="custom">
					<table style="height: 25px; margin: -5px 0px 0px 0px">
						<tr>
							<td valign="top" style="font-size: 12px;">
								主附表树:
							</td>
							<td valign="top">
								<div sword='SwordTree' onNodeClick="openTab();" name="sbZfbTree"
									inputWidth="300px" width="500px" select="true"
									autoShrink="true"
									dataStr=" {'data':[{'code':'00','caption':'-- 请选择 --'}],'name':'sbZfbTree','sword':'SwordTree'}"></div>
							</td>
						</tr>
					</table>
				</div>
				<div name="export" type="export" caption="导入" quickKey="Ctrl+I"
					enabled='true' onclick="drxx();"></div>
				<!-- 增加暂存按钮 -->
				
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
	
				<div name="save" type="save" caption="申报" quickKey="Ctrl+S"
					enabled='true' onclick="declare();"></div>
				<!--				<div name="print" type="print" caption="打印" quickKey="Ctrl+P" enabled='true' onclick="print();"></div>-->
				<div name="print" type="print" caption="打印" enabled="true" 	onclick="printhtm();"></div>
				<!--div name="save" type="save" caption="通用代扣代缴模板下载" enabled='true'  onclick="download();"></div-->
				
				
				<div name="download" type="download" caption="下载导入模版(excel)" quickKey="Ctrl+D"	
					enabled='true'  href="TAX_SB_097_TYDKDJSB_V1.0.xls"></div>
				<div name="download1" type="download" caption="下载导入模版_车船税(excel)" quickKey="Ctrl+D"
					enabled='true' onclick="downloadEX_ccs();"></div>	
				<div name="printHz" type="print" caption="打印回执" quickKey="Ctrl+Y"
					enabled='false' onclick="	printHz();"></div>
			</div>
			<div id="table00">
				
<div sword="SwordForm" name="nsrxxForm" caption="纳税人信息" panel="true"
	noNextEvent="toGrid()" userdefine="true" vType="fldiv"
	onFinish="addEventForDate()">
	<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
		<colgroup>
			<col style="width: 16%"></col>
			<col style="width: 17%"></col>
			<col style="width: 17%"></col>
			<col style="width: 16%"></col>
			<col style="width: 17%"></col>
			<col style="width: 17%"></col>
		</colgroup>
		<tr>
			<th width="16%">
				<span class="red">*</span>申报类型
			</th>
			<td colspan=2  width="34%">
				<div name="sbsxDm1" type="select"  defValue="11" onChange="changeSblx();"  disable="true">
					<div code="11" caption="正常申报"></div>
					<div code="21" caption="纳税人自行补正"></div> 
				</div>
			</td>
			<th width="16%">
				<span class="red">*</span>申报日期
			</th>
			<td colspan=2 width="34%">
				<div name="sbrq1" type="date" rule="customFunction;checkSbrq()" disable="true" returnRealValue="true">
				</div>
			</td>
		</tr>
		
		<tr>
			<th width="16%">
				<span class="red">*</span> 代扣代缴义务人识别号
			</th>
			<td colspan=2 width="34%">
				<div name="dkdjywrsbh" type="text" 	disable="true"maxlength="21">
				</div>
			</td>
			<th width="16%">
				扣缴义务人名称
			</th>
			<td colspan=3 width="34%">
				<div name="kjrwrmc" type="text" disable="true">
				</div>
			</td>
		</tr>
		<tr>
			<th>
				<span class="red">*</span> 税款所属期
			</th>
			<td colspan=2 >
				<div name="skssqq" type="date" rule="must"
					onkeyup="changeSbssqzForEnter();" onChange="changeSbssqq();"
					showOptions="true,true,false,false,false,false"
					dateControl="minDay" returnRealValue="true">
				</div>
			</td>
			<th width="16%">
				至 
			</th>
			<td  colspan=2 width="34%" style="border-left: 0px;">
				<div name="skssqz" type="date" returnRealValue="true"
					onkeyup="changeSbssqzForEnter();"
					showOptions="true,true,false,false,false,false"
					dateControl="maxDay" onChange="changeSbssqz();" rule="must">
				</div>
			</td>
		</tr>
		<tr id="zrrTR1" style="display: none;">
			<th>
				<span class="red">*</span>行业
			</th>
			<td>
				<div name="hyDm" type="pulltree" treename='DM_GY_HY'
					selectrule="leaf">
				</div>
			</td>
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
			<th colspan="4"></th>
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



				<div sword="SwordGrid" name="dkdjdsdjskbgbGrid" dataX="100%"
					dataY=150 align="center" fenye="false" treePcode="pcode"
					treeCode="code" caption="申报信息" showHJ="true" scrollX="130%" >
					<div name="zsxmDm" caption="征收项目" type="select" x='6%'
						dataname="DM_GY_ZSXM" onChange="jlSelect()" disable="true"></div>
					<div name="zspmDm" caption="征收品目" type="select" x='6%'
						dataname="DM_GY_ZSPM" disable="true"></div>
					<div name="zszmDm" caption="征收子目" type="select" x='6%'
						dataname="DM_GY_ZSZM" disable="true"></div>
					<div name="skssqq" caption="税款所属期起" type="date" x='7%'
						disable="true"></div>
					<div name="skssqz" caption="税款所属期止" type="date" x='7%'
						disable="true"></div>
					<div name="ydkdjdsdjxm" caption="应代扣代缴代收代缴项目" type="text" x='10%'
						disable="true"></div>
					<div name="jsyj" caption="计税依据" type="text" x='5%'
						css="text-align:right"
						format="{'type':'number','format':'#,##0.00'}" disable="true"></div>
					<!--<div name="kcxm" caption="扣除项目111" type="text" x='6%'  disable="true"></div>
				-->
					<div name="kcxmbz" caption="扣除项目标准" type="text" x='8%'
						css="text-align:right"
						format="{'type':'number','format':'#,##0.00'}"
						disable="true"></div>
					<div name="syslhdwse" caption="适用税率或单位税额" type="text" x='11%'
						css="text-align:right"
						format="{'type':'number','format':'#,##0.000000'}" disable="true"></div>
					<!--<div name="yjmsxm" caption="应减免税项目222" type="text"   x='6%'  disable="true"></div>-->
					<div name="yjmse" caption="应减免税额" type="text" x='7%'
						css="text-align:right"
						format="{'type':'number','format':'#,##0.00'}" disable="true"
						hj="true"></div>
					<div name="ydkdjdsdjse" caption="应代扣代缴代收代缴税额" type="text" x='13%'
						css="text-align:right"
						format="{'type':'number','format':'#,##0.00'}" hj="true"
						disable="true"></div>
					<div name="sdkdjdsdjse" caption="实代扣代缴代收代缴税额" type="text" x='12%'
						css="text-align:right"
						format="{'type':'number','format':'#,##0.00'}" disable="true"
						hj="true">
					</div>
				</div>
				<font color="red" style="font-size: 16px;"> &nbsp&nbsp功能小贴士：<br>
						&nbsp&nbsp1.通用代扣代缴应先填写对应代缴类型的明细报告表，确认后进行保存申报。<br>
							&nbsp&nbsp2.通过导入模板方式申报的，模板只需填写对应代缴类型的明细报告表，填写过程中身份证件类型、征收品目、征收子目等数据项，应根据模板最后一个标签页《代码表》中的代码进行填写。<br>
				</font>
				<div style="display: none">
					
<div sword="SwordForm" name="slxxForm" caption="受理信息" panel="true" userdefine="true" vType="fldiv">
	<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col style="width: 22%" />
						<col style="width: 28%" />
						<col style="width: 22%" />
						<col style="width: 28%" />
					</colgroup>
					<tr>
						<th style="text-align: right; padding-right: 6px">
							<span class="red">*</span>办税人
						</th>
						<td>
							<div name="bsrxm" caption="办税人" type="text" rule="must"></div>
						</td>
						<th style="text-align: right; padding-right: 6px">
							受理税务机关
						</th>
						<td colspan=3>
							<div name="slswjgDm" caption="受理税务机关" type="text" disable="true"></div>
						</td>
					</tr>
					<tr>
						<th style="text-align: right; padding-right: 6px">
							<span class="red">*</span>受理人
						</th>
						<td>
							<div name="slrDm" type="text" rule="must"></div>
						</td>
						<th style="text-align: right; padding-right: 6px">
							<span class="red">*</span>受理日期
						</th>
						<td>
							<div name="slrq" type="date" rule="must"></div>
						</td>
					</tr>
				</table>
</div>

				</div>
			</div>

			<div id="table01"
				style="display: none; height: 100%; overflow: hidden">
				<iframe id="table01iframe" src=""
					style="height: 525px; width: 100%;" frameborder="no" border="0"
					name="table01iframe" scrolling="auto"></iframe>
			</div>
			<div id="table02" style="display: none">
				<iframe id="table02iframe" src="" style="height: 525px; width: 100%"
					frameborder="no" border="0" name='table02iframe' scrolling="auto"></iframe>
			</div>
			<div id="table03" style="display: none">
				<iframe id="table03iframe" src="" style="height: 525px; width: 100%"
					frameborder="no" border="0" name='table03iframe' scrolling="auto"></iframe>
			</div>
			<div id="table04" style="display: none">
				<iframe id="table04iframe" src="" style="height: 525px; width: 100%"
					frameborder="no" border="0" name='table04iframe' scrolling="auto"></iframe>
			</div>
			<div id="table05" style="display: none">
				<iframe id="table05iframe" src="" style="height: 525px; width: 100%"
					frameborder="no" border="0" name='table05iframe' scrolling="auto"></iframe>
			</div>
		</div>
		<div id="SwordCacheData"
			query="[
{T:'DM_GY_ZSXM','WN':'zsxmDm'},
{T:'DM_GY_ZSPM','WN':'zspmDm'},
{T:'DM_DJ_DJZCLX'}]"
			queryTree="[{T:'DM_GY_HY','PDM':'SJHY_DM','DM':'HY_DM','MC':'HYMC','WN':'hyDm','load':'lazy'}]"></div>

		<script language='javascript' type='text/javascript'
			src='../../sb/gy/sb_gy.js'>	
</script>
		<script language='javascript' type='text/javascript'
			src='../../sb/gy/sb_constants.js'>	
</script>

		<script language='javascript' type='text/javascript'
			src='/gy/gy002/queryNsrxxByNsrsbhComm.js'>	
</script>
		<script language='javascript' type='text/javascript'
			src='../../sb/sb097/sb097_tydkdjsb.js'>
	
</script>
		<script language='javascript' type='text/javascript'
			src='../../sb/sb097/sb097_tydkdjsb_frame.js'>	
</script>
		<script language='javascript' type='text/javascript'
			src='/gy/gy011/gyPrint.js'></script>
	</body>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"nsrxxForm","data":{"bsryddh":{"value":"15778803036"},"tzze":{"value":"2000000.0"},"zgswjDm":{"value":"14501070000"},"cyrs":{"value":"3.0"},"gszgswjDm":{"value":""},"cwfzrxm":{"value":"邓凯玲"},"wz":{"value":""},"zcdlxdh":{"value":"13617873356"},"lsswdjyxqz":{"value":""},"djxh":{"value":"10114501010114170071"},"bsrlxdh":{"value":"15778803036"},"kyslrq":{"value":"2016-08-30 00:00:00"},"zzjglxDm":{"value":"1"},"bzfsDm":{"value":"3"},"bsrdzxx":{"value":"1918488842@qq.com"},"lsswdjyxqq":{"value":""},"yhsjnfsDm":{"value":""},"zsxmcxbzDm":{"value":""},"ssdabh":{"value":"91450107MA5KE0EQ2B"},"hyDm":{"value":"5164"},"nsrfyhyxxList":{"value":""},"zzlxDm":{"value":"80"},"scjyqxq":{"value":"2016-08-30 00:00:00"},"fddbrsfzjhm":{"value":"412727199005085478"},"cwfzryddh":{"value":"15778803036"},"fddbrsfzjlxDm":{"value":"201"},"kzztdjlxDm":{"value":"1110"},"gjhdqszDm":{"value":""},"slswjg":{"value":"14501070500"},"gytzbl":{"value":"0.0"},"gdgrs":{"value":"0.0"},"scjydlxdh":{"value":"13617873356"},"shxydm":{"value":"91450107MA5KE0EQ2B"},"fjmqybz":{"value":"N"},"scjydzxzqhszDm":{"value":"450107"},"scjyqxz":{"value":"2066-08-29 00:00:00"},"bsrxm":{"value":"邓凯玲"},"bsrsfzjzlDm":{"value":"201"},"gdghlxDm":{"value":"1"},"cwfzrdzxx":{"value":"1918488842@qq.com"},"nsrbm":{"value":""},"pzsljglxDm":{"value":"01"},"slrq":{"value":"2017-11-30 15:09:13"},"dkdjywrsbh":{"value":"91450107MA5KE0EQ2B"},"swdlrnsrsbh":{"value":""},"zcdzxzqhszmc":{"value":""},"kjzdzzDm":{"value":"102"},"bsr":{"value":"刘士鹏"},"nsrzgswjgxxList":{"value":""},"lrrDm":{"value":"14501940056"},"gszgswskfjDm":{"value":""},"sfzjlxDm":{"value":"201"},"jyfw":{"value":"批发、零售：金属材料、矿产品、电子产品、通信设备、安防监控设备（以上项目除国家专控产品）、钢材、建筑材料（除危险化学品及木材）、机械设备、管材及配件、五金交电、水暖器材、机电产品、化妆品、日用百货、服装鞋帽、皮革制品、计算机、劳保用品、体育器材、酒店用品；庆典活动策划、礼仪服务、文化艺术交流活动策划、会展服务（以上项目除国家有专项规定外）；设计、制作、代理、发布国内各类广告。"},"wcjyhdssglzmbh":{"value":""},"sbrq":{"value":"2017-11-30"},"djzclxmc":{"value":"私营有限责任公司"},"pzzmhwjh":{"value":""},"djjgmc":{"value":""},"pzsljgmc":{"value":""},"zcdz":{"value":"南宁市西乡塘区人民西路25号融昌邕江银座3号楼1单元1-2103号"},"zgswjmc":{"value":""},"zgswskfjDm":{"value":"14501070500"},"zrrBz":{"value":"N"},"nsrztDm":{"value":"03"},"hhrs":{"value":"0.0"},"hjszd":{"value":""},"fddbrdzxx":{"value":""},"zrrtzbl":{"value":"100.0"},"ssglyDm":{"value":"14501070052"},"gdslxDm":{"value":"1"},"scjydyzbm":{"value":"530000"},"swdjblbz":{"value":"Y"},"nsrsbh":{"value":"91450107MA5KE0EQ2B"},"slr":{"value":"000000dzswj"},"bsrgddh":{"value":"3321167"},"jdxzDm":{"value":"450107000"},"djjgDm":{"value":"14501940800"},"cwfzrsfzjhm":{"value":"450821199405073022"},"scjydz":{"value":"南宁市西乡塘区人民西路25号融昌邕江银座3号楼1单元1-2103号"},"tbrq1":{"value":"2017-11-30"},"kqccsztdjbz":{"value":"N"},"ynsrsbh":{"value":""},"tbrq":{"value":"2017-11-30"},"wjcyrs":{"value":"0.0"},"cwfzrsfzjzlDm":{"value":"201"},"nsrmc":{"value":"广西龙森胜贸易有限公司"},"swdlrlxdh":{"value":""},"fddbrgddh":{"value":"3321167"},"djrq":{"value":"2016-09-18 00:00:00"},"bsrsfzjhm":{"value":"450821199405073022"},"zzhm":{"value":"91450107MA5KE0EQ2B"},"djzclxDm":{"value":"173"},"whsyjsfjfxxdjbz":{"value":"Y"},"fddbrsfzjlxmc":{"value":""},"zfjglxDm":{"value":"0"},"fddbryddh":{"value":"13617873356"},"nsrztmc":{"value":""},"hsfsDm":{"value":"11"},"nsrywmc":{"value":""},"zcxs":{"value":""},"wztzbl":{"value":"0.0"},"zgswskfjmc":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"pzsljgDm":{"value":"450100000"},"sbrq1":{"value":"2017-11-30"},"dwlsgxDm":{"value":"51"},"scjydzxzqhszmc":{"value":""},"zzsjylb":{"value":"01,08"},"zzsqylxDm":{"value":"9"},"hymc":{"value":"金属及金属矿批发"},"cwfzrgddh":{"value":"3321167"},"zczb":{"value":"2000000.0"},"kzztdjlxmc":{"value":""},"hydm":{"value":"5164"},"swdlrmc":{"value":""},"skssqz":{"value":"2017-10-31"},"gsdjxh":{"value":""},"zgbm":{"value":"南宁市西乡塘区国家税务局"},"kjrwrmc":{"value":"广西龙森胜贸易有限公司"},"lrrq":{"value":"2016-09-18 15:39:06"},"skssqq":{"value":"2017-10-01"},"ggrs":{"value":"0.0"},"fddbrxm":{"value":"刘士鹏"},"jdxzmc":{"value":""},"zcdyzbm":{"value":"530000"},"gykglxDm":{"value":""},"ssglymc":{"value":""},"ygznsrlxDm":{"value":"22"},"zzjgDm":{"value":"MA5KE0EQ2"},"pgjgDm":{"value":""},"swdlrdzxx":{"value":""},"hylb":{"value":"金属及金属矿批发"},"xzqhszDm":{"value":"450107"},"zcdzxzqhszDm":{"value":"450107"}},"sword":"SwordForm"},{"name":"slxxForm","data":{"slswjgDm":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"slrDm":{"value":"000000dzswj"},"slrq":{"value":"2017-11-30"},"sqr":{"value":"邓凯玲"},"slr":{"value":"WSSB"},"slswjg":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"fddbr":{"value":"刘士鹏"},"ssgly":{"value":"周榆凯"},"shrDm":{"value":"周榆凯"},"jbr":{"value":"WSSB"},"lxdh":{"value":"13617873356"},"swjgmc":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"shrq":{"value":"2017-11-30"},"slrxm":{"value":"WSSB"},"bsrxm":{"value":"刘士鹏"},"tpr":{"value":"邓凯玲"},"swdlrjbr":{"value":"WSSB"}},"sword":"SwordForm"},{"name":"skssqq","value":"2017-10-01","type":""},{"name":"skssqz","value":"2017-10-31","type":""},{"name":"zgswskfjDm","value":"14501070500","type":""},{"name":"djxh","value":"10114501010114170071","type":""},{"name":"djzclxDm","value":"173","type":""},{"name":"nsrxxReturn","data":{"bsryddh":{"value":"15778803036"},"tzze":{"value":"2000000.0"},"zgswjDm":{"value":"14501070000"},"cyrs":{"value":"3.0"},"gszgswjDm":{"value":""},"cwfzrxm":{"value":"邓凯玲"},"wz":{"value":""},"zcdlxdh":{"value":"13617873356"},"lsswdjyxqz":{"value":""},"djxh":{"value":"10114501010114170071"},"bsrlxdh":{"value":"15778803036"},"kyslrq":{"value":"2016-08-30 00:00:00"},"zzjglxDm":{"value":"1"},"bzfsDm":{"value":"3"},"bsrdzxx":{"value":"1918488842@qq.com"},"lsswdjyxqq":{"value":""},"yhsjnfsDm":{"value":""},"zsxmcxbzDm":{"value":""},"ssdabh":{"value":"91450107MA5KE0EQ2B"},"hyDm":{"value":"5164"},"nsrfyhyxxList":{"value":""},"zzlxDm":{"value":"80"},"scjyqxq":{"value":"2016-08-30 00:00:00"},"fddbrsfzjhm":{"value":"412727199005085478"},"cwfzryddh":{"value":"15778803036"},"fddbrsfzjlxDm":{"value":"201"},"kzztdjlxDm":{"value":"1110"},"gjhdqszDm":{"value":""},"slswjg":{"value":"14501070500"},"gytzbl":{"value":"0.0"},"gdgrs":{"value":"0.0"},"scjydlxdh":{"value":"13617873356"},"shxydm":{"value":"91450107MA5KE0EQ2B"},"fjmqybz":{"value":"N"},"scjydzxzqhszDm":{"value":"450107"},"scjyqxz":{"value":"2066-08-29 00:00:00"},"bsrxm":{"value":"邓凯玲"},"bsrsfzjzlDm":{"value":"201"},"gdghlxDm":{"value":"1"},"cwfzrdzxx":{"value":"1918488842@qq.com"},"nsrbm":{"value":""},"pzsljglxDm":{"value":"01"},"slrq":{"value":"2017-11-30 15:09:13"},"dkdjywrsbh":{"value":"91450107MA5KE0EQ2B"},"swdlrnsrsbh":{"value":""},"zcdzxzqhszmc":{"value":""},"kjzdzzDm":{"value":"102"},"bsr":{"value":"刘士鹏"},"nsrzgswjgxxList":{"value":""},"lrrDm":{"value":"14501940056"},"gszgswskfjDm":{"value":""},"sfzjlxDm":{"value":"201"},"jyfw":{"value":"批发、零售：金属材料、矿产品、电子产品、通信设备、安防监控设备（以上项目除国家专控产品）、钢材、建筑材料（除危险化学品及木材）、机械设备、管材及配件、五金交电、水暖器材、机电产品、化妆品、日用百货、服装鞋帽、皮革制品、计算机、劳保用品、体育器材、酒店用品；庆典活动策划、礼仪服务、文化艺术交流活动策划、会展服务（以上项目除国家有专项规定外）；设计、制作、代理、发布国内各类广告。"},"wcjyhdssglzmbh":{"value":""},"sbrq":{"value":"2017-11-30"},"djzclxmc":{"value":"私营有限责任公司"},"pzzmhwjh":{"value":""},"djjgmc":{"value":""},"pzsljgmc":{"value":""},"zcdz":{"value":"南宁市西乡塘区人民西路25号融昌邕江银座3号楼1单元1-2103号"},"zgswjmc":{"value":""},"zgswskfjDm":{"value":"14501070500"},"zrrBz":{"value":"N"},"nsrztDm":{"value":"03"},"hhrs":{"value":"0.0"},"hjszd":{"value":""},"fddbrdzxx":{"value":""},"zrrtzbl":{"value":"100.0"},"ssglyDm":{"value":"14501070052"},"gdslxDm":{"value":"1"},"scjydyzbm":{"value":"530000"},"swdjblbz":{"value":"Y"},"nsrsbh":{"value":"91450107MA5KE0EQ2B"},"slr":{"value":"000000dzswj"},"bsrgddh":{"value":"3321167"},"jdxzDm":{"value":"450107000"},"djjgDm":{"value":"14501940800"},"cwfzrsfzjhm":{"value":"450821199405073022"},"scjydz":{"value":"南宁市西乡塘区人民西路25号融昌邕江银座3号楼1单元1-2103号"},"tbrq1":{"value":"2017-11-30"},"kqccsztdjbz":{"value":"N"},"ynsrsbh":{"value":""},"tbrq":{"value":"2017-11-30"},"wjcyrs":{"value":"0.0"},"cwfzrsfzjzlDm":{"value":"201"},"nsrmc":{"value":"广西龙森胜贸易有限公司"},"swdlrlxdh":{"value":""},"fddbrgddh":{"value":"3321167"},"djrq":{"value":"2016-09-18 00:00:00"},"bsrsfzjhm":{"value":"450821199405073022"},"zzhm":{"value":"91450107MA5KE0EQ2B"},"djzclxDm":{"value":"173"},"whsyjsfjfxxdjbz":{"value":"Y"},"fddbrsfzjlxmc":{"value":""},"zfjglxDm":{"value":"0"},"fddbryddh":{"value":"13617873356"},"nsrztmc":{"value":""},"hsfsDm":{"value":"11"},"nsrywmc":{"value":""},"zcxs":{"value":""},"wztzbl":{"value":"0.0"},"zgswskfjmc":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"pzsljgDm":{"value":"450100000"},"sbrq1":{"value":"2017-11-30"},"dwlsgxDm":{"value":"51"},"scjydzxzqhszmc":{"value":""},"zzsjylb":{"value":"01,08"},"zzsqylxDm":{"value":"9"},"hymc":{"value":"金属及金属矿批发"},"cwfzrgddh":{"value":"3321167"},"zczb":{"value":"2000000.0"},"kzztdjlxmc":{"value":""},"hydm":{"value":"5164"},"swdlrmc":{"value":""},"skssqz":{"value":"2017-10-31"},"gsdjxh":{"value":""},"zgbm":{"value":"南宁市西乡塘区国家税务局"},"kjrwrmc":{"value":"广西龙森胜贸易有限公司"},"lrrq":{"value":"2016-09-18 15:39:06"},"skssqq":{"value":"2017-10-01"},"ggrs":{"value":"0.0"},"fddbrxm":{"value":"刘士鹏"},"jdxzmc":{"value":""},"zcdyzbm":{"value":"530000"},"gykglxDm":{"value":""},"ssglymc":{"value":""},"ygznsrlxDm":{"value":"22"},"zzjgDm":{"value":"MA5KE0EQ2"},"pgjgDm":{"value":""},"swdlrdzxx":{"value":""},"hylb":{"value":"金属及金属矿批发"},"xzqhszDm":{"value":"450107"},"zcdzxzqhszDm":{"value":"450107"}},"sword":"SwordForm"},{"name":"tsswjggzlx","value":"0","type":""},{"name":"wssbbz","value":"Y","type":""},{"name":"skselbz","value":"Y","type":""},{"name":"ccsBz","value":"Y","type":""},{"data":[{"caption":"南宁市西乡塘区国家税务局税源管理二股","code":"14501070500","pcode":"14501070000"}],"dataType":"json","sword":"SwordTree","name":"zgswskfjDm"},{"data":[{"caption":"西乡塘区","pcode":"450100","code":"450107"}],"dataType":"json","sword":"SwordTree","name":"xzqhszDm"},{"name":"lcswsxDm","value":"LCSXA061005004","type":""},{"data":[{"caption":"西乡塘区","code":"450107000","xzqhDm":"450107"},{"caption":"衡阳街道办事处","code":"450107001","xzqhDm":"450107"},{"caption":"北湖街道办事处","code":"450107002","xzqhDm":"450107"},{"caption":"西乡塘街道办事处","code":"450107003","xzqhDm":"450107"},{"caption":"安吉街道办事处","code":"450107004","xzqhDm":"450107"},{"caption":"华强街道办事处","code":"450107005","xzqhDm":"450107"},{"caption":"新阳街道办事处","code":"450107006","xzqhDm":"450107"},{"caption":"上尧街道办事处","code":"450107007","xzqhDm":"450107"},{"caption":"安宁街道办事处","code":"450107008","xzqhDm":"450107"},{"caption":"石埠街道办事处","code":"450107009","xzqhDm":"450107"},{"caption":"心圩街道办事处","code":"450107010","xzqhDm":"450107"},{"caption":"金陵镇","code":"450107100","xzqhDm":"450107"},{"caption":"双定镇","code":"450107101","xzqhDm":"450107"},{"caption":"坛洛镇","code":"450107105","xzqhDm":"450107"},{"caption":"那龙矿务局","code":"450107450","xzqhDm":"450107"},{"caption":"金光农场","code":"450107453","xzqhDm":"450107"},{"caption":"高新技术开发区管委会","code":"450107454","xzqhDm":"450107"}],"sword":"SwordSelect","dataName":"DM_GY_JDXZ"},{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"02735f6f8899476d81110195d976e229","type":""}]}'></div>

