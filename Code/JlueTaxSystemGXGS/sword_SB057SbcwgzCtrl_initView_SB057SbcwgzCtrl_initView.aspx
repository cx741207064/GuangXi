<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SB057SbcwgzCtrl_initView_SB057SbcwgzCtrl_initView.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SB057SbcwgzCtrl_initView_SB057SbcwgzCtrl_initView" %>

 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=8"/>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
		<title>金税三期业务工作门户</title>
		<script language="javascript" type="text/javascript" src="../../swordweb/core/jsimport/Sword.js"></script>
		<script language="javascript" type="text/javascript" src="../../gt3_public/formula_engine.js"></script>
		<script language="javascript" type="text/javascript" src="../../../gt3_public/SwordGrid_ex.js"></script>
		<script language='javascript' type='text/javascript' src='../../sb/sb057/sb057_sbcwgz.js'></script>
		<script language="javascript" type="text/javascript" src="/gy/gy002/queryNsrxxByNsrsbhComm.js"></script>
		<script type="text/javascript" src="../jspt/styles/style.js"></script>
		<link rel="stylesheet" type="text/css" href="../../../gt3_public/styles/grid_comm.css" />
		

	</head>
	<body>
		<div class="wrapper" style="width:100%">
			<div sword='PageInit' onFinish="init();"></div>
			<div sword='SwordToolBar' name='cwgzTB' style="width: 100%" showType="mini" id="sbzfTB">
				<div name="org" type="custom"></div>
				<div name="cxBtn" type="find" caption="查询" quickKey="Ctrl+Q" enabled='true' onclick="querySbb();"></div>
				<div name="gzBtn" type="review" caption="更正" quickKey="Ctrl+E" enabled='true' onclick="gengzSbb();"></div>
				<div name="czBtn" type="refresh" caption="重置" quickKey="Ctrl+R" enabled="true" onclick="qxView()"></div>
			</div>
			<div sword="SwordForm" name="nsrxxForm1" caption="查询条件" panel="true" userdefine="true">
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<tr>
						<th style="width:20%">
							纳税人或扣缴义务人识别号
						</th>
						<td style="width:30%">
							<div name="dkdjywrsbh" type="text"  onKeyup="queryBynsrsbh();" rule="must" disable="true"></div>
						</td>
						<th style="width:20%">
							纳税人或扣缴义务人名称
						</th>
						<td style="width:30%">
							<div name="kjrwrmc" type="text" disable="true">
							</div>
						</td>
					</tr>
					<tr>
						<th>
							<span class="red">*</span>申报表种类
						</th>
						<td>
							<div name="sbbzl" type="select"  onChange="checkYzpzzl()"  dataname="CS_SB_CWGZPZB"  popDisplay="{code}|{caption}" ></div>
						</td>
						<th>
							申报日期
						</th>
						<td>
							<div name="sbrq1" type="date" returnRealValue="true">
							</div>
						</td>
					</tr>
					<tr>
				     <th>
							所属时期
						</th>
						<td style="border-right: 0px">
							<div name="skssqq" type="date"  returnRealValue="true">
							</div>
						</td>
						<th style="border-left: 0px; border-right: 0px">
						
							至
						</th>
						<td style="border-left: 0px;">
							<div name="skssqz" type="date"  returnRealValue="true" rule="customFunction;checkSkssz()"></div>
						</td>
					</tr>
					<tr>
						<th>税种</th>
						<td style="border-right: 0px">
							<div name="sz" type="text"  disable="true"></div>
						</td>
						<th>是否增量更正</th>
						<td><!--
							<div name="sfzlgz" type="radio" defValue="qlgz">
								<div code="qlgz" caption="全量更正"></div>
								<div code="zlgz" caption="增量更正"></div>
							</div>-->
							<div name="sfzlgz" type="radio" defValue="qlgz" >
								<div code="qlgz" caption="全量更正" ></div>
							</div>
						</td>
					</tr>
				</table>
			</div>
			<div sword="SwordGrid" name="sbsjxxGrid" dataX="100%" dataY="200" align="center" fenye="false" treePcode="pcode" treeCode="code" caption="申报数据信息" onRowDbClick="gengzSbb();" >
				<div name="xz" caption="选择" type="radio" x="5%" ></div>
				<div name="yzpzzlDm" caption="申报表种类" type="select" disable="true" x="24%" dataname="CS_SB_CWGZPZB" ></div>
				<div name="nssbrq" caption="原申报表申报日期" type="label" format={'type':'date','format':'Y-m-d'} x="12%" ></div>
				<div name="ybtse" caption="更正前应补退税额" type="text"  format="{'type':'number','format':'#,##0.00'}" disable="true" x="18%" ></div>
				<div name="pzxh" caption="凭证序号" type="text" disable="true" x='15%'></div>	
				<div name="skssqq" caption="所属期起" type="label" format={'type':'date','format':'Y-m-d'} x="12%" ></div>	
				<div name="skssqz" caption="所属期止" type="label" format={'type':'date','format':'Y-m-d'} x="12%" ></div>	
				<div name="serviceName" caption="服务名 主要服务对象扣缴企业所得税和自行申报" type='text' show='false'></div>
				<div name="sbsxDm1" caption="申报类型" type="text" show="false" ></div>	
				<div name="sbqx" caption="申报期限" type="text" show="false" ></div>	
				<div name="csz" type="text" show="false" ></div>
			</div>

			<div sword="SwordForm" name="slxxForm" panel="false" userdefine="true" style = "display:none">
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
					<tr>
						<th style="width:20%">
						<span class="red" >*</span>
							受理人
						</th>
						<td style="width:30%">
							<div name="slr" type="text" rule="must">
							</div>
						</td>					
						<th style="width:20%">
						<span class="red" >*</span>
							受理日期
						</th>
						<td style="width:30%">
							<div name="slrq" type="date" rule="must">
							</div>
						</td>
					</tr>
				</table>
			</div>
		</div>
			
	</body>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"nsrxxForm","data":{"bsryddh":{"value":"15778803036"},"tzze":{"value":"2000000.0"},"zgswjDm":{"value":"14501070000"},"cyrs":{"value":"3.0"},"gszgswjDm":{"value":""},"cwfzrxm":{"value":"邓凯玲"},"wz":{"value":""},"zcdlxdh":{"value":"13617873356"},"lsswdjyxqz":{"value":""},"djxh":{"value":"10114501010114170071"},"bsrlxdh":{"value":"15778803036"},"kyslrq":{"value":"2016-08-30 00:00:00"},"zzjglxDm":{"value":"1"},"bzfsDm":{"value":"3"},"bsrdzxx":{"value":"1918488842@qq.com"},"lsswdjyxqq":{"value":""},"yhsjnfsDm":{"value":""},"zsxmcxbzDm":{"value":""},"ssdabh":{"value":"91450107MA5KE0EQ2B"},"hyDm":{"value":"5164"},"nsrfyhyxxList":{"value":""},"zzlxDm":{"value":"80"},"scjyqxq":{"value":"2016-08-30 00:00:00"},"fddbrsfzjhm":{"value":"412727199005085478"},"cwfzryddh":{"value":"15778803036"},"fddbrsfzjlxDm":{"value":"201"},"kzztdjlxDm":{"value":"1110"},"gjhdqszDm":{"value":""},"slswjg":{"value":"14501070500"},"gytzbl":{"value":"0.0"},"gdgrs":{"value":"0.0"},"scjydlxdh":{"value":"13617873356"},"shxydm":{"value":"91450107MA5KE0EQ2B"},"fjmqybz":{"value":"N"},"scjydzxzqhszDm":{"value":"450107"},"scjyqxz":{"value":"2066-08-29 00:00:00"},"bsrxm":{"value":"邓凯玲"},"bsrsfzjzlDm":{"value":"201"},"gdghlxDm":{"value":"1"},"cwfzrdzxx":{"value":"1918488842@qq.com"},"nsrbm":{"value":""},"pzsljglxDm":{"value":"01"},"slrq":{"value":"2017-11-30 09:55:09"},"dkdjywrsbh":{"value":"91450107MA5KE0EQ2B"},"swdlrnsrsbh":{"value":""},"zcdzxzqhszmc":{"value":""},"kjzdzzDm":{"value":"102"},"bsr":{"value":"刘士鹏"},"nsrzgswjgxxList":{"value":""},"lrrDm":{"value":"14501940056"},"gszgswskfjDm":{"value":""},"sfzjlxDm":{"value":"201"},"jyfw":{"value":"批发、零售：金属材料、矿产品、电子产品、通信设备、安防监控设备（以上项目除国家专控产品）、钢材、建筑材料（除危险化学品及木材）、机械设备、管材及配件、五金交电、水暖器材、机电产品、化妆品、日用百货、服装鞋帽、皮革制品、计算机、劳保用品、体育器材、酒店用品；庆典活动策划、礼仪服务、文化艺术交流活动策划、会展服务（以上项目除国家有专项规定外）；设计、制作、代理、发布国内各类广告。"},"wcjyhdssglzmbh":{"value":""},"sbrq":{"value":"2017-11-30"},"djzclxmc":{"value":"私营有限责任公司"},"pzzmhwjh":{"value":""},"djjgmc":{"value":""},"pzsljgmc":{"value":""},"zcdz":{"value":"南宁市西乡塘区人民西路25号融昌邕江银座3号楼1单元1-2103号"},"zgswjmc":{"value":""},"zgswskfjDm":{"value":"14501070500"},"zrrBz":{"value":"N"},"nsrztDm":{"value":"03"},"hhrs":{"value":"0.0"},"hjszd":{"value":""},"fddbrdzxx":{"value":""},"zrrtzbl":{"value":"100.0"},"ssglyDm":{"value":"14501070052"},"gdslxDm":{"value":"1"},"scjydyzbm":{"value":"530000"},"swdjblbz":{"value":"Y"},"nsrsbh":{"value":"91450107MA5KE0EQ2B"},"slr":{"value":"000000dzswj"},"bsrgddh":{"value":"3321167"},"jdxzDm":{"value":"450107000"},"djjgDm":{"value":"14501940800"},"cwfzrsfzjhm":{"value":"450821199405073022"},"scjydz":{"value":"南宁市西乡塘区人民西路25号融昌邕江银座3号楼1单元1-2103号"},"tbrq1":{"value":"2017-11-30"},"kqccsztdjbz":{"value":"N"},"ynsrsbh":{"value":""},"tbrq":{"value":"2017-11-30"},"wjcyrs":{"value":"0.0"},"cwfzrsfzjzlDm":{"value":"201"},"nsrmc":{"value":"广西龙森胜贸易有限公司"},"swdlrlxdh":{"value":""},"fddbrgddh":{"value":"3321167"},"djrq":{"value":"2016-09-18 00:00:00"},"bsrsfzjhm":{"value":"450821199405073022"},"zzhm":{"value":"91450107MA5KE0EQ2B"},"djzclxDm":{"value":"173"},"whsyjsfjfxxdjbz":{"value":"Y"},"fddbrsfzjlxmc":{"value":""},"zfjglxDm":{"value":"0"},"fddbryddh":{"value":"13617873356"},"nsrztmc":{"value":""},"hsfsDm":{"value":"11"},"nsrywmc":{"value":""},"zcxs":{"value":""},"wztzbl":{"value":"0.0"},"zgswskfjmc":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"pzsljgDm":{"value":"450100000"},"sbrq1":{"value":"2017-11-30"},"dwlsgxDm":{"value":"51"},"scjydzxzqhszmc":{"value":""},"zzsjylb":{"value":"01,08"},"zzsqylxDm":{"value":"9"},"hymc":{"value":"金属及金属矿批发"},"cwfzrgddh":{"value":"3321167"},"zczb":{"value":"2000000.0"},"kzztdjlxmc":{"value":""},"hydm":{"value":"5164"},"swdlrmc":{"value":""},"skssqz":{"value":"2017-10-31"},"gsdjxh":{"value":""},"zgbm":{"value":"南宁市西乡塘区国家税务局"},"kjrwrmc":{"value":"广西龙森胜贸易有限公司"},"lrrq":{"value":"2016-09-18 15:39:06"},"skssqq":{"value":"2017-10-01"},"ggrs":{"value":"0.0"},"fddbrxm":{"value":"刘士鹏"},"jdxzmc":{"value":""},"zcdyzbm":{"value":"530000"},"gykglxDm":{"value":""},"ssglymc":{"value":""},"ygznsrlxDm":{"value":"22"},"zzjgDm":{"value":"MA5KE0EQ2"},"pgjgDm":{"value":""},"swdlrdzxx":{"value":""},"hylb":{"value":"金属及金属矿批发"},"xzqhszDm":{"value":"450107"},"zcdzxzqhszDm":{"value":"450107"}},"sword":"SwordForm"},{"name":"slxxForm","data":{"slswjgDm":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"slrDm":{"value":"000000dzswj"},"slrq":{"value":"2017-11-30"},"sqr":{"value":"邓凯玲"},"slr":{"value":"WSSB"},"slswjg":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"fddbr":{"value":"刘士鹏"},"ssgly":{"value":"周榆凯"},"shrDm":{"value":"周榆凯"},"jbr":{"value":"WSSB"},"lxdh":{"value":"13617873356"},"swjgmc":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"shrq":{"value":"2017-11-30"},"slrxm":{"value":"WSSB"},"bsrxm":{"value":"刘士鹏"},"tpr":{"value":"邓凯玲"},"swdlrjbr":{"value":"WSSB"}},"sword":"SwordForm"},{"name":"skssqq","value":"2017-10-01","type":""},{"name":"skssqz","value":"2017-10-31","type":""},{"name":"zgswskfjDm","value":"14501070500","type":""},{"name":"djxh","value":"10114501010114170071","type":""},{"name":"djzclxDm","value":"173","type":""},{"name":"nsrxxReturn","data":{"bsryddh":{"value":"15778803036"},"tzze":{"value":"2000000.0"},"zgswjDm":{"value":"14501070000"},"cyrs":{"value":"3.0"},"gszgswjDm":{"value":""},"cwfzrxm":{"value":"邓凯玲"},"wz":{"value":""},"zcdlxdh":{"value":"13617873356"},"lsswdjyxqz":{"value":""},"djxh":{"value":"10114501010114170071"},"bsrlxdh":{"value":"15778803036"},"kyslrq":{"value":"2016-08-30 00:00:00"},"zzjglxDm":{"value":"1"},"bzfsDm":{"value":"3"},"bsrdzxx":{"value":"1918488842@qq.com"},"lsswdjyxqq":{"value":""},"yhsjnfsDm":{"value":""},"zsxmcxbzDm":{"value":""},"ssdabh":{"value":"91450107MA5KE0EQ2B"},"hyDm":{"value":"5164"},"nsrfyhyxxList":{"value":""},"zzlxDm":{"value":"80"},"scjyqxq":{"value":"2016-08-30 00:00:00"},"fddbrsfzjhm":{"value":"412727199005085478"},"cwfzryddh":{"value":"15778803036"},"fddbrsfzjlxDm":{"value":"201"},"kzztdjlxDm":{"value":"1110"},"gjhdqszDm":{"value":""},"slswjg":{"value":"14501070500"},"gytzbl":{"value":"0.0"},"gdgrs":{"value":"0.0"},"scjydlxdh":{"value":"13617873356"},"shxydm":{"value":"91450107MA5KE0EQ2B"},"fjmqybz":{"value":"N"},"scjydzxzqhszDm":{"value":"450107"},"scjyqxz":{"value":"2066-08-29 00:00:00"},"bsrxm":{"value":"邓凯玲"},"bsrsfzjzlDm":{"value":"201"},"gdghlxDm":{"value":"1"},"cwfzrdzxx":{"value":"1918488842@qq.com"},"nsrbm":{"value":""},"pzsljglxDm":{"value":"01"},"slrq":{"value":"2017-11-30 09:55:09"},"dkdjywrsbh":{"value":"91450107MA5KE0EQ2B"},"swdlrnsrsbh":{"value":""},"zcdzxzqhszmc":{"value":""},"kjzdzzDm":{"value":"102"},"bsr":{"value":"刘士鹏"},"nsrzgswjgxxList":{"value":""},"lrrDm":{"value":"14501940056"},"gszgswskfjDm":{"value":""},"sfzjlxDm":{"value":"201"},"jyfw":{"value":"批发、零售：金属材料、矿产品、电子产品、通信设备、安防监控设备（以上项目除国家专控产品）、钢材、建筑材料（除危险化学品及木材）、机械设备、管材及配件、五金交电、水暖器材、机电产品、化妆品、日用百货、服装鞋帽、皮革制品、计算机、劳保用品、体育器材、酒店用品；庆典活动策划、礼仪服务、文化艺术交流活动策划、会展服务（以上项目除国家有专项规定外）；设计、制作、代理、发布国内各类广告。"},"wcjyhdssglzmbh":{"value":""},"sbrq":{"value":"2017-11-30"},"djzclxmc":{"value":"私营有限责任公司"},"pzzmhwjh":{"value":""},"djjgmc":{"value":""},"pzsljgmc":{"value":""},"zcdz":{"value":"南宁市西乡塘区人民西路25号融昌邕江银座3号楼1单元1-2103号"},"zgswjmc":{"value":""},"zgswskfjDm":{"value":"14501070500"},"zrrBz":{"value":"N"},"nsrztDm":{"value":"03"},"hhrs":{"value":"0.0"},"hjszd":{"value":""},"fddbrdzxx":{"value":""},"zrrtzbl":{"value":"100.0"},"ssglyDm":{"value":"14501070052"},"gdslxDm":{"value":"1"},"scjydyzbm":{"value":"530000"},"swdjblbz":{"value":"Y"},"nsrsbh":{"value":"91450107MA5KE0EQ2B"},"slr":{"value":"000000dzswj"},"bsrgddh":{"value":"3321167"},"jdxzDm":{"value":"450107000"},"djjgDm":{"value":"14501940800"},"cwfzrsfzjhm":{"value":"450821199405073022"},"scjydz":{"value":"南宁市西乡塘区人民西路25号融昌邕江银座3号楼1单元1-2103号"},"tbrq1":{"value":"2017-11-30"},"kqccsztdjbz":{"value":"N"},"ynsrsbh":{"value":""},"tbrq":{"value":"2017-11-30"},"wjcyrs":{"value":"0.0"},"cwfzrsfzjzlDm":{"value":"201"},"nsrmc":{"value":"广西龙森胜贸易有限公司"},"swdlrlxdh":{"value":""},"fddbrgddh":{"value":"3321167"},"djrq":{"value":"2016-09-18 00:00:00"},"bsrsfzjhm":{"value":"450821199405073022"},"zzhm":{"value":"91450107MA5KE0EQ2B"},"djzclxDm":{"value":"173"},"whsyjsfjfxxdjbz":{"value":"Y"},"fddbrsfzjlxmc":{"value":""},"zfjglxDm":{"value":"0"},"fddbryddh":{"value":"13617873356"},"nsrztmc":{"value":""},"hsfsDm":{"value":"11"},"nsrywmc":{"value":""},"zcxs":{"value":""},"wztzbl":{"value":"0.0"},"zgswskfjmc":{"value":"南宁市西乡塘区国家税务局税源管理二股"},"pzsljgDm":{"value":"450100000"},"sbrq1":{"value":"2017-11-30"},"dwlsgxDm":{"value":"51"},"scjydzxzqhszmc":{"value":""},"zzsjylb":{"value":"01,08"},"zzsqylxDm":{"value":"9"},"hymc":{"value":"金属及金属矿批发"},"cwfzrgddh":{"value":"3321167"},"zczb":{"value":"2000000.0"},"kzztdjlxmc":{"value":""},"hydm":{"value":"5164"},"swdlrmc":{"value":""},"skssqz":{"value":"2017-10-31"},"gsdjxh":{"value":""},"zgbm":{"value":"南宁市西乡塘区国家税务局"},"kjrwrmc":{"value":"广西龙森胜贸易有限公司"},"lrrq":{"value":"2016-09-18 15:39:06"},"skssqq":{"value":"2017-10-01"},"ggrs":{"value":"0.0"},"fddbrxm":{"value":"刘士鹏"},"jdxzmc":{"value":""},"zcdyzbm":{"value":"530000"},"gykglxDm":{"value":""},"ssglymc":{"value":""},"ygznsrlxDm":{"value":"22"},"zzjgDm":{"value":"MA5KE0EQ2"},"pgjgDm":{"value":""},"swdlrdzxx":{"value":""},"hylb":{"value":"金属及金属矿批发"},"xzqhszDm":{"value":"450107"},"zcdzxzqhszDm":{"value":"450107"}},"sword":"SwordForm"},{"name":"tsswjggzlx","value":"0","type":""},{"name":"wssbbz","value":"Y","type":""},{"name":"skselbz","value":"Y","type":""},{"name":"gzkg","value":"Y","type":""},{"name":"swrymc","value":"周榆凯","type":""},{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"f87560a6ee7247f0805b883d7253bb04","type":""}]}'></div>

