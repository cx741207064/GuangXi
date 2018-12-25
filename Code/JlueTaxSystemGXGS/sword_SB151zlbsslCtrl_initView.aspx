<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SB151zlbsslCtrl_initView.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SB151zlbsslCtrl_initView" %>

 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>资料报送受理登记表</title>
		<script language="javascript" type="text/javascript" src="../../swordweb/core/jsimport/Sword.js"></script>
		<script language="javascript" type="text/javascript" src="../../gt3_public/jsDelegate.js"></script>
		<script type="text/javascript" src="/gt3_public/cacheindex.js"></script>
	    <script language='javascript' type='text/javascript'  src='/jspt/nsrd/qxxt/gy_qxxt.js'></script>
	
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
			<div sword="PageInit" onFinish="init();"></div>
			
<div sword='SwordToolBar' name='sbToolBar' style="width: 100%" showType="mini" id="sbToolBar">
				<div name="org" type="custom"></div>
	<!--<div name="print" type="print" caption="打印受理回执" quickKey="Ctrl+P" enabled='true' onclick="printSwsxslhz();" disable='true'></div>					
	
	--><div name="next" type="nextPage" caption="下一步" quickKey="Ctrl+S" enabled='true' onclick="save();"></div>
	   <div name="reset" type="refresh" caption="重置" quickKey="Ctrl+R" enabled='true'	onclick="reset();"></div>

</div>
			<div sword="SwordForm" name="nsrxxMap" caption="纳税人基本信息" panel="true"
				userdefine="true">
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col style="width: 12%">
						<col style="width: 24%">
						<col style="width: 12%">
						<col style="width: 12%">
						<col style="width: 10%">
						<col style="width: 10%">
						<col style="width: 10%">
						<col style="width: 10%">
					</colgroup>
					<tr>
						<th style="width:18%;">
							<span class="red" >*</span>纳税人识别号
						</th>
						<td style="width:82%;">
							<div name="nsrsbh" type="text" rule="must" onkeydown="checkNsr();" disable='true'> 
							</div>
						</td>

					</tr>
					<tr>
						<th  style="width:18%;">
							纳税人名称
						</th>
						<td style="width:82%;">
							<div name="nsrmc" type="text" rule="must" disable='true'>
							</div>
						</td>
					</tr>
					<tr style="display: none">
					<th style="width:18%;">
							<span class="red">*</span>资料报送大类
						</th>
						<td style="width:82%;">
							<div name="zlbsdlDm" type="select" edit="true" disable="true"
								dataname="DM_SB_ZLBSDL" submitcontent="{code}"
								popdisplay="{code}|{caption}" rule="must" onchange="getNsrcwzdxx();" >
							</div>
						</td>
					</tr>
					<tr>
						
						<th style="width:18%;">
							<span class="red">*</span>资料报送小类
						</th>
						<td style="width:82%;">
							<div name="zlbsxlDm" type="select" edit="true" submitcontent="{code}"
								dataname="DM_SB_ZLBSXL" parent="zlbsdlDm" rule="must"
								popdisplay="{code}|{caption}" onchange="checkByXlDm('xl')">
							</div>
						</td>

					</tr>					
					<tr style="display: none" id="dcnd">
						<th style="width:18%;">
							调查年度
						</th>
						<td style="width:82%;">
							<div name="dcnd" type="date" returnRealValue=true onchange="checkSfzgrd();" disable="true" showOptions="true,false,false,false,false,false">
							</div>
						</td>
					</tr>
					<tr style="display: none">
						<th style="widht:18%;">
							资料类型
						</th>
						<td style="width:82%;">
							<div name="zllx" type="select" rule="must" defValue="1" disable='true'>
								<div code="0" caption="纸质"></div>
								<div code="1" caption="电子"></div>
							</div>
						</td>
                    </tr>
                    <tr>
					<th style="width: 18%;">
							<span class="red" >*</span>资料数量
						</th>
						<td style="width:82%;">
							<div name="zlsl" type="text" rule="number_must" >
							</div>
						</td>
					</tr>
                    <tr>
                    <th style="width:18%;">
							所属期起 
						</th>
						<td style="width:82%;">
							<div name="ssqq" type="date" rule="must" onchange="getSsqz();" showOptions="true,true,false,false,false,false" dateControl='minDay'
								returnRealValue="true">
							</div>
						</td>
                    </tr>
                    
                    <tr>
                    <th style="width:18%;">
							所属期止 
						</th>
						<td style="width:82%;">
							<div name="ssqz"  type="date" rule="must" onchange="changessqz();" showOptions="true,true,false,false,false,false" dateControl='maxDay'
								returnRealValue="true">
							</div>
						</td>
                    </tr>

											
					
					<tr style="display: none">
						<td>
							<div name="djxh" type="text"></div>
						</td>
						<td>
							<div name="djzclxDm" type="text"></div>
						</td>
						<td>
							<div name="hyDm" type="text"></div>
						</td>
						<td>
							<div name="nsrztDm" type="text"></div>
						</td>
						<td>
							<div name="zgswjDm" type="text"></div>
						</td>
							<td>
							<div name="zgswjgDm" type="text"></div>
						</td>
						<td>
							<div name="zgswskfjDm" type="text"></div>
						</td>
						<td>
							<div name="kjzdzzDm" type="text"></div>
						</td>
						<td>
							<div name="sfyhd" type="text"></div>
						</td>
								<td>
							<div name="scjydz" type="text"></div>
						</td>
						<td>
							<div name="scjydlxdh" type="text"></div>
						</td>
						<td>
							<div name="fddbrhfzrhyzsfzjzlDm" type="text"></div>
						</td>
						<td>
							<div name="fddbrxm" type="text"></div>
						</td>
						<td>
							<div name="cwfzrxm" type="text"></div>
						</td>
						<td>
							<div name="bsrxm" type="text"></div>
						</td>
						<td>
							<div name="bsrgddh" type="text"></div>
						</td>
						<td>
							<div name="fddbrhfzrhyzsfzjhm" type="text"></div>
						</td>
						<td>
							<div name="nsqxDm" type="text"></div>
						</td>
						<td>
							<div name="shxydm" type="text"></div>
						</td>
						<td>
							<div name="ynsrsbh" type="text"></div>
						</td>
						
					</tr>
				</table>
			</div>

			<div sword="SwordGrid" name="yhdzlGrid" caption="已核定资料" checkMoudle="false"  fenye="false" showConsole="false" panel="true" dataX="100%" style='display:none'>
				<div name="xh" caption="序号" type="text" disable="true" x="11%" css="text-align:center"></div>
				<div name="bszlmc" caption="资料名称" type="text" disable="true" x="58%" ></div>
				<div name="bb" caption="必报" type="checkbox" disable="true" allchk=false x="10%"></div>
				<div name="tjbs" caption="条件报送" type="checkbox" disable="true" allchk=false x="10%"></div>
				<div name="sftj" caption="是否提交" type="checkbox" allchk="false" x="10%"></div>
				<div name="bszlDm" type="text" Show ="false"></div>
				<div name="sfbszl" type="text"  Show ="false"></div>
				<div name="sfxcj" type="text" Show ="false"></div>
				<div name="cwbbzlDm" type="text" Show ="false"></div>
				<div name="sfyhd" type="text" Show ="false"></div>
				<div name="ljwz" type="text" Show ="false"></div>				
				<div name="zlbsuuid" type="text" Show ="false"></div>
				<div name="cfdz" type="text" Show ="false"></div>
			</div>
			<div sword="SwordGrid" name="whdzlGrid" caption="未核定资料" checkMoudle="false" fenye="false" panel="true" dataX="100%" style='display:none'>
				<div name="xh" caption="序号" type="text" disable="true" x="11%" css="text-align:center"></div>
				<div name="bszlmc" caption="资料名称" type="text" x="58%" ></div>
				<div name="bb" caption="必报" type="checkbox" allchk=false x="10%"></div>
				<div name="tjbs" caption="条件报送" type="checkbox" allchk=false x="10%"></div>
				<div name="sftj" caption="是否提交" type="checkbox" allchk="false" x="10%"></div>
				<div name="bszlDm" type="text" Show ="false"></div>
				<div name="sfbszl" type="text" Show ="false"></div>
				<div name="sfxcj" type="text" Show ="false" ></div>
				<div name="cwbbzlDm" type="text" Show ="false"></div>
				<div name="sfyhd" type="text" Show ="false"></div>
				<div name="ljwz" type="text" Show ="false"></div>
				<div name="zlbsuuid" type="text" Show ="false"></div>
				<div name="cfdz" type="text" Show ="false"></div>
				<div name="zjh" caption="增行" console="insert"></div>
				<div name="sch" caption="刪行" console="delete"></div>
			</div>
			<div sword="SwordForm" name="slxxForm" panel="false" userdefine="true" style ="display:none">
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<colgroup>
						<col style="width: 12%">
						<col style="width: 24%">
						<col style="width: 12%">
						<col style="width: 12%">
						<col style="width: 10%">
						<col style="width: 10%">
						<col style="width: 10%">
						<col style="width: 10%">
					</colgroup>
					<tr style = "display:none">
						<th>
							受理人
						</th>
						<td >
							<div name="swrymc" type="text" disable="true">
							</div>
						</td>
						<th>
							受理税务机关
						</th>
						<td colspan="2">
							<div name="swjgmc" type="text"  >
							</div>
						</td>
						<th>
							受理日期
						</th>
						<td colspan="2">
							<div name="lrrq" type="date" returnRealValue=true disable="true" >
							</div>
						</td>
					</tr>
					<tr style="display: none">
						<td>
							<div name="znDm" type="text"></div>
						</td>
						<td>
							<div name="gwxh" type="text"></div>
						</td>
					</tr>
				</table>
			</div>	
			<div  style="height: 241px;background: #e8f5ff;">
			<tr>
			<br>
			<span class="red">说明：请严格按照该纳税人认定的纳税期限报送。</span>
			</br>
			</tr>
			</div>
			
			
			<div style="display:none">
				<div sword="SwordGrid" name="nsrcwzdxxList">
					<div name="cwbbzlDm" type="text"></div>
					<div name="bbbsqDm" type="text"></div>
					<div name="cwkjbblxDm" type="text"></div>
					
				</div>
				<div name="saveBtn" sword="SwordSubmit" enabled="true" isShow="true" postType="ajax" class="submitbutton"
					 onAfterLoadData="saveOnSuccess();" onError="saveOnError();">
							<div widgetName="nsrxxMap" isVal="false"></div>
							<div widgetName="yhdzlGrid" isVal="false" console="curPageData"></div>
							<div widgetName="whdzlGrid" isVal="false" console="curPageData"></div>
							<div widgetName="slxxForm" isVal="false" console="curPageData"></div>
				</div>
				<div name="checkNsrBtn" sword="SwordSubmit" enabled="true" isShow="true" postType="ajax" class="submitbutton"
					onAfterLoadData="nsrxxOnSuccess();" onError="slxxOnError();">
					<div widgetName="nsrxxMap" isVal="false"></div>
					<div widgetName="slxxForm" isVal="false"></div>
				</div>
				<div name="checkNsrcwzdxxBtn" sword="SwordSubmit" enabled="true" isShow="true" postType="ajax" class="submitbutton" 
					onAfterLoadData="nsrcwzdxxOnSuccess();" onError="slxxOnError();">
					<div widgetName="nsrxxMap" isVal="false"></div>
				</div>
				<div name="checkBalxByXlDmBtn" sword="SwordSubmit" enabled="true" isShow="true" postType="ajax" class="submitbutton" 
					onAfterLoadData="checkBalxByXlDmOnSuccess();" onError="slxxOnError();">
					<div widgetName="nsrxxMap" isVal="false"></div>
					<div widgetName="yhdzlGrid" isVal="false" console="curPageData"></div>
					<div widgetName="whdzlGrid" isVal="false" console="curPageData"></div>
				</div>
				<div name="getSsqzBtn" sword="SwordSubmit" enabled="true" isShow="true" postType="ajax" class="submitbutton"
					onAfterLoadData="ssqzOnSuccess();" onError="slxxOnError();">	
					<div widgetName="nsrxxMap" isVal="false"></div>
					<div widgetName="nsrcwzdxxList" isVal="false" console="curPageData"></div>
				</div>
				<div name="checkSfazhdzqbsBtn" sword="SwordSubmit" enabled="true" isShow="true" postType="ajax" class="submitbutton"
					onAfterLoadData="checkSfazhdzqbsOnSuccess();" onError="slxxOnError();">	
					<div widgetName="nsrxxMap" isVal="false"></div>
					<div widgetName="nsrcwzdxxList" isVal="false" console="curPageData"></div>
				</div>
				<div name="getZlbsbdlbBtn" sword="SwordSubmit" enabled="true" isShow="true" postType="ajax" class="submitbutton"
					onAfterLoadData="getZlbsbdlbSuccess();" 
					onError="slxxOnError();">	
					<div widgetName="nsrxxMap" isVal="false"></div>
					<div widgetName="nsrcwzdxxList" isVal="false" console="curPageData"></div>
				</div>		
				<div name="cjBtn" sword="SwordSubmit" enabled="true" isShow="true" postType="form" class="submitbutton">	
					<div widgetName="nsrxxMap" isVal="false"></div>
					<div widgetName="slxxForm" isVal="false" console="curPageData"></div>
					<div widgetName="yhdzlGrid" isVal="false" console="curPageData"></div>
					<div widgetName="whdzlGrid" isVal="false" console="curPageData"></div>
					<div widgetName="nsrcwzdxxList" isVal="false" console="curPageData"></div>
				</div>	
				<div name="sfcfbsBtn" sword="SwordSubmit" enabled="true" isShow="true" postType="ajax" class="submitbutton" 
					onSuccess="querySuccess();">
					<div widgetName="nsrxxMap" isVal='false'></div>
				</div>
				<div name="openbdlrjmBtn" sword="SwordSubmit" enabled="true" isShow="true" postType="ajax" class="submitbutton" 
					onAfterLoadData="bdlrOnSuccess();" onError="bdlrOnError();" >
					<div widgetName="nsrxxMap" isVal='false'></div>
					<div widgetName="slxxForm" isVal='false'></div>
					<div widgetName="bwlshForm" isVal='false'></div>
				</div>
				<div name="sfcfbsBtn1" sword="SwordSubmit" enabled="true"
					isShow="true" postType="ajax" class="submitbutton">
					<div widgetName="nsrxxMap" isVal='false'></div>
					<div widgetName="slxxForm" isVal='false'></div>
				</div>
				<!-- 隐藏提交按钮 -->
				<div name="hiddenSubmit" sword="SwordSubmit" enabled="true" isShow="false" postType="ajax" class="submitbutton" ></div>	
			</div>
		</div>
		<script language="javascript" type="text/javascript" src="../../sb/gy/sb_gy.js"></script>
		<script language="javascript" type="text/javascript" src="../../sb/sb151/sb151_zlbssldjb.js"></script>
        <script language='javascript' type='text/javascript' src='/gy/gy002/queryNsrxxByNsrsbhComm.js'></script>
	</body>
</html>
<div id="SwordCacheData" query="[{T:'DM_SB_ZLBSDL','WN':'zlbsdlDm','PDM':''}]"></div>

<div id="SwordPageData" runat="server"  style='display:none' ></div>
<%--data='{"data":[{"name":"ymkg","value":"N","type":""},{"name":"flag","value":"0","type":""},{"name":"nsrxxMap","data":{"ssqq":{"value":"2017-10-01"},"nsrsbh":{"value":"91450107MA5KE0EQ2B"},"sbrq":{"value":"2017-11-27"},"zlbsdlDm":{"value":"ZL1001"},"ssqz":{"value":"2017-10-31"}},"sword":"SwordForm"},{"name":"zlbsdlDm","value":"ZL1001","type":""},{"name":"slxxForm","data":{"sjgsrq":{"value":"2017-11-27 00:00:00"},"sjgsdq":{"value":"14501070500"},"lrrDm":{"value":"000000dzswj"},"swjgDm":{"value":"14501070500"},"swryDm":{"value":"000000dzswj"},"swjgmc":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"znDm":{"value":""},"gwxh":{"value":""},"xgrDm":{"value":"000000dzswj"},"swrymc":{"value":""},"xgrq":{"value":"2017-11-27 10:01:46"},"lrrq":{"value":"2017-11-27 10:01:46"}},"sword":"SwordForm"},{"name":"ssqq","value":"2017-10-01","type":""},{"name":"ssqz","value":"2017-10-31","type":""},{"data":[{"caption":"企业会计准则（一般企业）财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001001"},{"caption":"企业会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001002"},{"caption":"小企业会计准则财务报表与信息采集","pcode":"ZL1001","code":"ZL1001003"}],"sword":"SwordSelect","dataName":"DM_SB_ZLBSXL"},{"name":"zlbsbz","value":"N","type":""},{"name":"kjzdbz","value":"N","type":""},{"name":"kjzdbabz","value":"N","type":""},{"name":"zlbshtsqkg","value":"N","type":""},{"name":"tsxxkg","value":"Y","type":""},{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"90d54aeb5e1241468498f62f1238056f","type":""}]}'--%>
<%--,{"caption":"行业会计制度（运输[交通]）财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001010"},{"caption":"企业会计制度（民航企业会计核算办法）财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001012"},{"caption":"农民专业合作社财务会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001015"},{"caption":"勘察设计企业会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001016"},{"caption":"企业会计制度（保险中介公司会计核算办法）财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001017"},{"caption":"企业会计准则（商业银行）财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001018"},{"caption":"企业会计准则（证券公司）财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001019"},{"caption":"企业会计准则（保险公司）财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001020"},{"caption":"企业会计准则（典当企业）财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001021"},{"caption":"企业会计准则（担保企业会计核算办法）财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001022"},{"caption":"民间非营利组织会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001023"},{"caption":"事业单位会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001024"},{"caption":"中小学校会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001025"},{"caption":"高等学校会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001026"},{"caption":"医院会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001027"},{"caption":"科学事业单位会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001028"},{"caption":"测绘事业单位会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001029"},{"caption":"个人股东变动情况报告","pcode":"ZL1002","code":"ZL1002001"},{"caption":"个人所得税股权激励报告管理","pcode":"ZL1002","code":"ZL1002002"},{"caption":"同期资料采集","pcode":"ZL1003","code":"ZL1003001"},{"caption":"单边预约定价安排企业执行情况年度报告","pcode":"ZL1003","code":"ZL1003002"},{"caption":"双边或多边预约定价安排企业执行情况年度报告","pcode":"ZL1003","code":"ZL1003003"},{"caption":"单边预约定价安排企业执行情况实质性变化报告","pcode":"ZL1003","code":"ZL1003004"},{"caption":"双边或多边预约定价安排企业执行情况实质性变化报告","pcode":"ZL1003","code":"ZL1003005"},{"caption":"2015年企业减免税调查表","pcode":"ZL1004","code":"ZL1004001"},{"caption":"税收资料调查企业数据采集","pcode":"ZL1004","code":"ZL1004002"},{"caption":"企业集团数据采集","pcode":"ZL1004","code":"ZL1004003"},{"caption":"重点税源监控企业数据采集","pcode":"ZL1005","code":"ZL1005001"},{"caption":"非税控电子器具使用的软件程序说明资料备案","pcode":"ZL1006","code":"ZL1006001"},{"caption":"土地出（转）让信息采集","pcode":"ZL1007","code":"ZL1007001"},{"caption":"税源申报明细报告","pcode":"ZL1007","code":"ZL1007002"},{"caption":"海上油气生产设施废弃处置方案备案","pcode":"ZL1008","code":"ZL1008001"},{"caption":"非居民企业股权转让的资料采集","pcode":"ZL1009","code":"ZL1009002"},{"caption":"软件产品增值税即征即退进项分摊方式资料报送与信息采集","pcode":"ZL1010","code":"ZL1010001"},{"caption":"新牌号、新规格卷烟信息的资料采集","pcode":"ZL1011","code":"ZL1011001"},{"caption":"文化事业单位会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001030"},{"caption":"广播事业单位会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001031"},{"caption":"体育事业单位会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001032"},{"caption":"文物事业单位会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001033"},{"caption":"人口和计划生育事业单位会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001034"},{"caption":"银行类金融企业财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001036"},{"caption":"证券类金融企业财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001037"},{"caption":"保险类金融企业财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001038"},{"caption":"担保类金融企业财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001039"},{"caption":"金融控股集团公司类金融企业财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001040"},{"caption":"金融资产管理公司类金融企业财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001041"},{"caption":"消费税涉税信息采集","pcode":"ZL1011","code":"ZL1011002"},{"caption":"消费税退（免）税资料报送与信息采集","pcode":"ZL1011","code":"ZL1011003"},{"caption":"彩票机构会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001042"},{"caption":"村集体经济组织财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001043"},{"caption":"个体工商户财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001044"},{"caption":"固定资产加速折旧(扣除)预缴情况统计","pcode":"ZL1008","code":"ZL1008002"},{"caption":"定点联系企业名册信息报送与采集","pcode":"ZL1012","code":"ZL1012001"},{"caption":"耕地占用税税源明细信息采集","pcode":"ZL1013","code":"ZL1013001"},{"caption":"企业集团合并财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001045"},{"caption":"欠税清缴计划信息采集","pcode":"ZL1014","code":"ZL1014001"},{"caption":"对外合作开采石油企业勘探开发费用年度明细表（F170）","pcode":"ZL1008","code":"ZL1008003"},{"caption":"行政单位会计制度财务报表报送与信息采集","pcode":"ZL1001","code":"ZL1001046"},{"caption":"免征证券（股票）交易印花税股权过户信息采集","pcode":"ZL1015","code":"ZL1015001"},{"caption":"基层医疗卫生机构会计制度财务报表资料报送与信息采集","pcode":"ZL1001","code":"ZL1001047"},{"caption":"工会会计制度财务报表资料报送与信息采集","pcode":"ZL1001","code":"ZL1001048"},{"caption":"投资公司会计核算办法财务报表资料报送与信息采集","pcode":"ZL1001","code":"ZL1001049"}--%>
