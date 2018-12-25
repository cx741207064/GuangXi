<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SBGyCtrl_toCwbbSbfb_ZL1001002_05.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SBGyCtrl_toCwbbSbfb_ZL1001002_05" %>



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
			src='../../sb/gy/sb_gy.js'></script>
		<script language='javascript' type='text/javascript'
			src='../../sb/gycwbb/sb000_yfzcfzzhzb.js'></script>
		<style type="text/css"> 
			/* table {width:100%;table-layout:fixed;} 
		 	table td {white-space:nowrap;overflow:hidden;word-break:keep-all;text-overflow:ellipsis}  */
		 	#xxGrid_id {width:100%;table-layout:fixed;}
		 	#xxGrid_id td {white-space:nowrap;overflow:hidden;word-break:keep-all;text-overflow:ellipsis}
		</style> 
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
			<div sword='PageInit' onFinish="initV()"></div>
			<div>
				<div sword="SwordForm" name="nsrxxForm" caption="纳税人基本信息"
					panel="true" userdefine="true" vType="fldiv">
					<table class="tab_form" border="0" cellpadding="0" cellspacing="0">
						<colgroup>
							<col style="width: 15%" />
							<col style="width: 20%" />
							<col style="width: 15%" />
							<col style="width: 20%" />
							<col style="width: 15%" />
							<col style="width: 15%" />
						</colgroup>
						<tr>
							<th style="text-align: right; padding-right: 6px">
								<span class="red">*</span>纳税人识别号
							</th>
							<td>
								<div name="nsrsbh" type="text" disable="true"></div>
							</td>
							<th style="text-align: right; padding-right: 6px">
								纳税人名称
							</th>
							<td 	>
								<div name="nsrmc" type="text" disable="true"></div>
							</td>
							<th>
								报表所属年度
							</th>
							<td>
								<div name="bsnd" type="text" disable="true" ></div>
							</td>
						</tr>
					</table>
				</div>
				<div style="width: 100%; overflow: auto">
					<div sword="SwordForm" name="yfzcfzzhzbForm" caption="“研发支出”辅助账汇总表"
						panel="true" vType="fldiv" userdefine="true" scrollx="300%">
						<table class="tab_form" border="0" cellpadding="0" cellspacing="0"
							style="width: 300%">
							<colgroup>
								<col style="width: 1%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 1%" />
								<col style="width: 1%" />
								<col style="width: 1%" />
								<col style="width: 1%" />
								<col style="width: 1%" />
								<col style="width: 1%" />
								<col style="width: 1%" />
								<col style="width: 1%" />
								<col style="width: 1%" />
								<col style="width: 1%" />
								<col style="width: 1%" />
								<col style="width: 1%" />
								<col style="width: 1%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
								<col style="width: 2%" />
							</colgroup>

							<tr>
								<th rowspan="4" style="text-align: center;">
									序号
								</th>
								<th rowspan="4" style="text-align: center;">
									项目名称
								</th>
								<th rowspan="4" style="text-align: center;">
									项目编号
								</th>
								<th rowspan="4" style="text-align: center;">
									研发形式
								</th>
								<th rowspan="4" style="text-align: center;">
									资本化、费用化支出选项
								</th>
								<th rowspan="4" style="text-align: center;">
									项目实施状态选项
								</th>
								<th rowspan="4" style="text-align: center;">
									委托方与受托方是否存在关联关系选项
								</th>
								<th rowspan="4" style="text-align: center;">
									是否委托境外选项
								</th>
								<th rowspan="4" style="text-align: center;">
									研发成果
								</th>
								<th rowspan="4" style="text-align: center;">
									研发成果证书号
								</th>
								<th colspan="3" style="text-align: center;">
									一、人员人工费用
								</th>
								<th colspan="8" style="text-align: center;">
									二、直接投入费用
								</th>
								<th colspan="2" style="text-align: center;">
									三、折旧费
								</th>
								<th colspan="3" style="text-align: center;">
									四、无形资产摊销
								</th>
								<th colspan="4" style="text-align: center;">
									五、新产品设计费等
								</th>
								<th rowspan="2" colspan="21" style="text-align: center;">
									六、其他相关费用
								</th>
								<th rowspan="3" style="text-align: center;">
									七、委托外部机构或个人进行研发活动所发生的费用
								</th>
								<th rowspan="3" style="text-align: center;">
									其中：委托境外进行研发活动所发生的费用（包括存在关联关系的委托研发）
								</th>
								<th rowspan="3" style="text-align: center;">
									八、允许 加计扣除 的研发费 用中的第 1至5类 费用合计 (1+2+3+4+5)
								</th>
								<th rowspan="3" style="text-align: center;">
									其他相关费用限额=序号8×10％/(1-10％)
								</th>
								<th rowspan="3" style="text-align: center;">
									九、当期费用化支出可加计扣除总额
								</th>
								<th rowspan="3" style="text-align: center;">
									当期资本化可加计扣除的研发费用率
								</th>
							</tr>
							<tr>
								<th colspan="2" style="text-align: center;">
									直接从事研发活动人员
								</th>
								<th style="text-align: center;" rowspan="2">
									外聘研发人员的劳务费用
								</th>
								<th colspan="3" style="text-align: center;">
									研发活动直接消耗
								</th>
								<th style="text-align: center;" rowspan="2">
									用于中间试验和产品试制的模具、工艺装备开发及制造费
								</th>
								<th style="text-align: center;" rowspan="2">
									用于不构成固定资产的样品、样机及一般测试手段购置费
								</th>
								<th style="text-align: center;" rowspan="2">
									用于试制产品的检验费
								</th>
								<th style="text-align: center;" rowspan="2">
									用于研发活动的仪器、设备的运行维护、调整、检验、维修等费用
								</th>
								<th style="text-align: center;" rowspan="2">
									通过经营租赁方式租入的用于研发活动的仪器、设备租赁费
								</th>
								<th style="text-align: center;" rowspan="2">
									用于研发活动的仪器的折旧费
								</th>
								<th style="text-align: center;" rowspan="2">
									用于研发活动的设备的折旧费
								</th>
								<th style="text-align: center;" rowspan="2">
									用于研发活动的软件的摊销费用
								</th>
								<th style="text-align: center;" rowspan="2">
									用于研发活动的专利权的摊销费用
								</th>
								<th style="text-align: center;" rowspan="2">
									用于研发活动的非专利技术（包括许可证、专有技术、设计和计算方法等）的摊销费用
								</th>
								<th style="text-align: center;" rowspan="2">
									新产品设计费
								</th>
								<th style="text-align: center;" rowspan="2">
									新工艺规程制定费
								</th>
								<th style="text-align: center;" rowspan="2">
									新药研制的临床试验费
								</th>
								<th style="text-align: center;" rowspan="2">
									勘探开发技术的现场试验费
								</th>

							</tr>

							<tr>

								<th style="text-align: center;">
									工资薪金
								</th>
								<th style="text-align: center;">
									五险一金
								</th>
								<th style="text-align: center;">
									材料
								</th>
								<th style="text-align: center;">
									燃料
								</th>
								<th style="text-align: center;">
									动力费用
								</th>
								<th style="text-align: center;">
									其他相关费用1
								</th>
								<th style="text-align: center;">
									其他相关费用2
								</th>
								<th style="text-align: center;">
									其他相关费用3
								</th>
								<th style="text-align: center;">
									其他相关费用4
								</th>
								<th style="text-align: center;">
									其他相关费用5
								</th>
								<th style="text-align: center;">
									其他相关费用6
								</th>
								<th style="text-align: center;">
									其他相关费用7
								</th>
								<th style="text-align: center;">
									其他相关费用8
								</th>
								<th style="text-align: center;">
									其他相关费用9
								</th>
								<th style="text-align: center;">
									其他相关费用10
								</th>
								<th style="text-align: center;">
									其他相关费用11
								</th>
								<th style="text-align: center;">
									其他相关费用12
								</th>
								<th style="text-align: center;">
									其他相关费用13
								</th>
								<th style="text-align: center;">
									其他相关费用14
								</th>
								<th style="text-align: center;">
									其他相关费用15
								</th>
								<th style="text-align: center;">
									其他相关费用16
								</th>
								<th style="text-align: center;">
									其他相关费用17
								</th>
								<th style="text-align: center;">
									其他相关费用18
								</th>
								<th style="text-align: center;">
									其他相关费用19
								</th>
								<th style="text-align: center;">
									其他相关费用20
								</th>
								<th style="text-align: center;">
									合计
								</th>
							</tr>
							<tr>

								<th style="text-align: center;">
									1.1
								</th>
								<th style="text-align: center;">
									1.2
								</th>
								<th style="text-align: center;">
									1.3
								</th>
								<th style="text-align: center;">
									2.1
								</th>
								<th style="text-align: center;">
									2.2
								</th>
								<th style="text-align: center;">
									2.3
								</th>
								<th style="text-align: center;">
									2.4
								</th>
								<th style="text-align: center;">
									2.5
								</th>
								<th style="text-align: center;">
									2.6
								</th>
								<th style="text-align: center;">
									2.7
								</th>
								<th style="text-align: center;">
									2.8
								</th>
								<th style="text-align: center;">
									3.1
								</th>
								<th style="text-align: center;">
									3.2
								</th>
								<th style="text-align: center;">
									4.1
								</th>
								<th style="text-align: center;">
									4.2
								</th>
								<th style="text-align: center;">
									4.3
								</th>
								<th style="text-align: center;">
									5.1
								</th>
								<th style="text-align: center;">
									5.2
								</th>
								<th style="text-align: center;">
									5.3
								</th>
								<th style="text-align: center;">
									5.4
								</th>
								<th style="text-align: center;">
									6.1
								</th>
								<th style="text-align: center;">
									6.2
								</th>
								<th style="text-align: center;">
									6.3
								</th>
								<th style="text-align: center;">
									6.4
								</th>
								<th style="text-align: center;">
									6.5
								</th>
								<th style="text-align: center;">
									6.6
								</th>
								<th style="text-align: center;">
									6.7
								</th>
								<th style="text-align: center;">
									6.8
								</th>
								<th style="text-align: center;">
									6.9
								</th>
								<th style="text-align: center;">
									6.10
								</th>
								<th style="text-align: center;">
									6.11
								</th>
								<th style="text-align: center;">
									6.12
								</th>
								<th style="text-align: center;">
									6.13
								</th>
								<th style="text-align: center;">
									6.14
								</th>
								<th style="text-align: center;">
									6.15
								</th>
								<th style="text-align: center;">
									6.16
								</th>
								<th style="text-align: center;">
									6.17
								</th>
								<th style="text-align: center;">
									6.18
								</th>
								<th style="text-align: center;">
									6.19
								</th>
								<th style="text-align: center;">
									6.20
								</th>
								<th style="text-align: center;">
									6.21
								</th>
								<th style="text-align: center;">
									7
								</th>
								<th style="text-align: center;">
									7.1
								</th>
								<th style="text-align: center;">
									8
								</th>
								<th style="text-align: center;">
									8.1
								</th>
								<th style="text-align: center;">
									9
								</th>
								<th style="text-align: center;">
									9.1
								</th>
							</tr>
							<tr>
								<th style="">
									1
								</th>
								<th colspan="9">
									期初余额
								</th>
								<td>
									<div name="h1l1" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l2" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l3" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l4" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l5" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l6" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l7" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l8" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l9" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l10" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l11" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l12" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l13" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l14" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l15" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l16" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l17" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l18" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l19" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l20" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l21" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l22" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l23" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l24" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l25" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l26" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l27" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l28" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l29" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l30" type="text" rule="number(14,2)_must"
										defValue="0.00"  style="text-align: right"></div>
								</td>
								<td>
									<div name="h1l31" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l32" type="text" rule="number(14,2)_must"
										defValue="0.00"  style="text-align: right"></div>
								</td>
								<td>
									<div name="h1l33" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l34" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l35" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l36" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l37" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l38" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l39" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l40" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l41" type="text" rule="number(14,2)_must"
										disable="true" defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l42" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l43" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l44" type="text" rule="number(14,2)_must"
										disable="true" defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l45" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l46" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h1l47" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>

							</tr>
							<tr>
								<th>
									2
								</th>
								<th colspan="9">
									本期借方发生额
								</th>
								<td>
									<div name="h2l1" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l2" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l3" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l4" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l5" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l6" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l7" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l8" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l9" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l10" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l11" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l12" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l13" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l14" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l15" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l16" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l17" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l18" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l19" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l20" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l21" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l22" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l23" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l24" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l25" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l26" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l27" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l28" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l29" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l30" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l31" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l32" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l33" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l34" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l35" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l36" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l37" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l38" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l39" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l40" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l41" type="text" rule="number(14,2)_must"
										disable="true" defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l42" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l43" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l44" type="text" rule="number(14,2)_must"
										disable="true" defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l45" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l46" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h2l47" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
							</tr>
							<tr>
								<th>
									3
								</th>
								<th colspan="9">
									本期贷方发生额
								</th>
								<td>
									<div name="h3l1" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l2" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l3" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l4" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l5" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l6" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l7" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l8" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l9" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l10" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l11" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l12" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l13" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l14" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l15" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l16" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l17" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l18" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l19" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l20" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l21" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l22" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l23" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l24" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l25" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l26" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l27" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l28" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l29" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l30" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l31" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l32" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l33" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l34" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l35" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l36" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l37" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l38" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l39" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l40" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l41" type="text" rule="number(14,2)_must"
										disable="true" defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l42" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l43" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l44" type="text" rule="number(14,2)_must"
										disable="true" defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l45" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l46" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h3l47" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
							</tr>
							<tr>
								<th>
									4
								</th>
								<th colspan="9">
									其中：结转管理费用
								</th>
								<td>
									<div name="h4l1" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l2" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l3" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l4" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l5" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l6" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l7" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l8" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l9" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l10" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l11" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l12" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l13" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l14" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l15" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l16" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l17" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l18" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l19" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l20" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l21" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l22" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l23" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l24" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l25" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l26" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l27" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l28" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l29" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l30" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l31" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l32" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l33" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l34" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l35" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l36" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l37" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l38" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l39" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l40" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l41" type="text" rule="number(14,2)_must"
										disable="true" defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l42" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l43" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l44" type="text" rule="number(14,2)_must"
										disable="true" defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l45" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l46" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h4l47" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
							</tr>
							<tr>
								<th>
									5
								</th>
								<th colspan="9">
									结转无形资产
								</th>
								<td>
									<div name="h5l1" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l2" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l3" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l4" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l5" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l6" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l7" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l8" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l9" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l10" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l11" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l12" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l13" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l14" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l15" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l16" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l17" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l18" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l19" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l20" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l21" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l22" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l23" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l24" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l25" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l26" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l27" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l28" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l29" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l30" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l31" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l32" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l33" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l34" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l35" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l36" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l37" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l38" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l39" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l40" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l41" type="text" rule="number(14,2)_must"
										disable="true" defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l42" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l43" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l44" type="text" rule="number(14,2)_must"
										disable="true" defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l45" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l46" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h5l47" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
							</tr>
							<tr>
								<th>
									6
								</th>
								<th colspan="9">
									期末余额
								</th>
								<td>
									<div name="h6l1" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l2" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l3" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l4" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l5" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l6" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l7" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l8" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l9" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l10" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l11" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l12" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l13" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l14" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l15" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l16" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l17" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l18" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l19" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l20" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l21" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l22" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l23" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l24" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l25" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l26" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l27" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l28" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l29" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l30" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l31" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l32" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l33" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l34" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l35" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l36" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l37" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l38" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l39" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l40" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l41" type="text" rule="number(14,2)_must"
										disable="true" defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l42" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l43" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l44" type="text" rule="number(14,2)_must"
										disable="true" defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l45" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l46" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
								<td>
									<div name="h6l47" type="text" rule="number(14,2)_must"
										defValue="0.00" style="text-align: right" ></div>
								</td>
							</tr>
						</table>
					</div>
				</div>
				<table class="tab_form" border="0" cellpadding="0" cellspacing="0"
					id="xxGrid_id">
					<colgroup>
						<col style="width: 1%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 1%" />
						<col style="width: 1%" />
						<col style="width: 1%" />
						<col style="width: 1%" />
						<col style="width: 1%" />
						<col style="width: 1%" />
						<col style="width: 1%" />
						<col style="width: 1%" />
						<col style="width: 1%" />
						<col style="width: 1%" />
						<col style="width: 1%" />
						<col style="width: 1%" />
						<col style="width: 1%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
						<col style="width: 2%" />
					</colgroup>

					<tr>
						<th rowspan="4" style="text-align: center;">
							序号
						</th>
						<th rowspan="4" style="text-align: center;">
							项目名称
						</th>
						<th rowspan="4" style="text-align: center;">
							项目编号
						</th>
						<th rowspan="4" style="text-align: center;">
							研发形式
						</th>
						<th rowspan="4" style="text-align: center;">
							资本化、费用化支出选项
						</th>
						<th rowspan="4" style="text-align: center;">
							项目实施状态选项
						</th>
						<th rowspan="4" style="text-align: center;">
							委托方与受托方是否存在关联关系选项
						</th>
						<th rowspan="4" style="text-align: center;">
							是否委托境外选项
						</th>
						<th rowspan="4" style="text-align: center;">
							研发成果
						</th>
						<th rowspan="4" style="text-align: center;">
							研发成果证书号
						</th>
						<th colspan="3" style="text-align: center;">
							一、人员人工费用
						</th>
						<th colspan="8" style="text-align: center;">
							二、直接投入费用
						</th>
						<th colspan="2" style="text-align: center;">
							三、折旧费
						</th>
						<th colspan="3" style="text-align: center;">
							四、无形资产摊销
						</th>
						<th colspan="4" style="text-align: center;">
							五、新产品设计费等
						</th>
						<th rowspan="2" colspan="21" style="text-align: center;">
							六、其他相关费用
						</th>
						<th rowspan="3" style="text-align: center;">
							七、委托外部机构或个人进行研发活动所发生的费用
						</th>
						<th rowspan="3" style="text-align: center;">
							其中：委托境外进行研发活动所发生的费用（包括存在关联关系的委托研发）
						</th>
						<th rowspan="3" style="text-align: center;">
							八、允许 加计扣除 的研发费 用中的第 1至5类 费用合计 (1+2+3+4+5)
						</th>
						<th rowspan="3" style="text-align: center;">
							其他相关费用限额=序号8×10％/(1-10％)
						</th>
						<th rowspan="3" style="text-align: center;">
							九、当期费用化支出可加计扣除总额
						</th>
						<th rowspan="3" style="text-align: center;">
							当期资本化可加计扣除的研发费用率
						</th>
					</tr>
					<tr>
						<th colspan="2" style="text-align: center;">
							直接从事研发活动人员
						</th>
						<th style="text-align: center;" rowspan="2">
							外聘研发人员的劳务费用
						</th>
						<th colspan="3" style="text-align: center;">
							研发活动直接消耗
						</th>
						<th style="text-align: center;" rowspan="2">
							用于中间试验和产品试制的模具、工艺装备开发及制造费
						</th>
						<th style="text-align: center;" rowspan="2">
							用于不构成固定资产的样品、样机及一般测试手段购置费
						</th>
						<th style="text-align: center;" rowspan="2">
							用于试制产品的检验费
						</th>
						<th style="text-align: center;" rowspan="2">
							用于研发活动的仪器、设备的运行维护、调整、检验、维修等费用
						</th>
						<th style="text-align: center;" rowspan="2">
							通过经营租赁方式租入的用于研发活动的仪器、设备租赁费
						</th>
						<th style="text-align: center;" rowspan="2">
							用于研发活动的仪器的折旧费
						</th>
						<th style="text-align: center;" rowspan="2">
							用于研发活动的设备的折旧费
						</th>
						<th style="text-align: center;" rowspan="2">
							用于研发活动的软件的摊销费用
						</th>
						<th style="text-align: center;" rowspan="2">
							用于研发活动的专利权的摊销费用
						</th>
						<th style="text-align: center;" rowspan="2">
							用于研发活动的非专利技术（包括许可证、专有技术、设计和计算方法等）的摊销费用
						</th>
						<th style="text-align: center;" rowspan="2">
							新产品设计费
						</th>
						<th style="text-align: center;" rowspan="2">
							新工艺规程制定费
						</th>
						<th style="text-align: center;" rowspan="2">
							新药研制的临床试验费
						</th>
						<th style="text-align: center;" rowspan="2">
							勘探开发技术的现场试验费
						</th>

					</tr>

					<tr>

						<th style="text-align: center;">
							工资薪金
						</th>
						<th style="text-align: center;">
							五险一金
						</th>
						<th style="text-align: center;">
							材料
						</th>
						<th style="text-align: center;">
							燃料
						</th>
						<th style="text-align: center;">
							动力费用
						</th>
						<th style="text-align: center;">
							其他相关费用1
						</th>
						<th style="text-align: center;">
							其他相关费用2
						</th>
						<th style="text-align: center;">
							其他相关费用3
						</th>
						<th style="text-align: center;">
							其他相关费用4
						</th>
						<th style="text-align: center;">
							其他相关费用5
						</th>
						<th style="text-align: center;">
							其他相关费用6
						</th>
						<th style="text-align: center;">
							其他相关费用7
						</th>
						<th style="text-align: center;">
							其他相关费用8
						</th>
						<th style="text-align: center;">
							其他相关费用9
						</th>
						<th style="text-align: center;">
							其他相关费用10
						</th>
						<th style="text-align: center;">
							其他相关费用11
						</th>
						<th style="text-align: center;">
							其他相关费用12
						</th>
						<th style="text-align: center;">
							其他相关费用13
						</th>
						<th style="text-align: center;">
							其他相关费用14
						</th>
						<th style="text-align: center;">
							其他相关费用15
						</th>
						<th style="text-align: center;">
							其他相关费用16
						</th>
						<th style="text-align: center;">
							其他相关费用17
						</th>
						<th style="text-align: center;">
							其他相关费用18
						</th>
						<th style="text-align: center;">
							其他相关费用19
						</th>
						<th style="text-align: center;">
							其他相关费用20
						</th>
						<th style="text-align: center;">
							合计
						</th>
					</tr>
					<tr>

						<th style="text-align: center;">
							1.1
						</th>
						<th style="text-align: center;">
							1.2
						</th>
						<th style="text-align: center;">
							1.3
						</th>
						<th style="text-align: center;">
							2.1
						</th>
						<th style="text-align: center;">
							2.2
						</th>
						<th style="text-align: center;">
							2.3
						</th>
						<th style="text-align: center;">
							2.4
						</th>
						<th style="text-align: center;">
							2.5
						</th>
						<th style="text-align: center;">
							2.6
						</th>
						<th style="text-align: center;">
							2.7
						</th>
						<th style="text-align: center;">
							2.8
						</th>
						<th style="text-align: center;">
							3.1
						</th>
						<th style="text-align: center;">
							3.2
						</th>
						<th style="text-align: center;">
							4.1
						</th>
						<th style="text-align: center;">
							4.2
						</th>
						<th style="text-align: center;">
							4.3
						</th>
						<th style="text-align: center;">
							5.1
						</th>
						<th style="text-align: center;">
							5.2
						</th>
						<th style="text-align: center;">
							5.3
						</th>
						<th style="text-align: center;">
							5.4
						</th>
						<th style="text-align: center;">
							6.1
						</th>
						<th style="text-align: center;">
							6.2
						</th>
						<th style="text-align: center;">
							6.3
						</th>
						<th style="text-align: center;">
							6.4
						</th>
						<th style="text-align: center;">
							6.5
						</th>
						<th style="text-align: center;">
							6.6
						</th>
						<th style="text-align: center;">
							6.7
						</th>
						<th style="text-align: center;">
							6.8
						</th>
						<th style="text-align: center;">
							6.9
						</th>
						<th style="text-align: center;">
							6.10
						</th>
						<th style="text-align: center;">
							6.11
						</th>
						<th style="text-align: center;">
							6.12
						</th>
						<th style="text-align: center;">
							6.13
						</th>
						<th style="text-align: center;">
							6.14
						</th>
						<th style="text-align: center;">
							6.15
						</th>
						<th style="text-align: center;">
							6.16
						</th>
						<th style="text-align: center;">
							6.17
						</th>
						<th style="text-align: center;">
							6.18
						</th>
						<th style="text-align: center;">
							6.19
						</th>
						<th style="text-align: center;">
							6.20
						</th>
						<th style="text-align: center;">
							6.21
						</th>
						<th style="text-align: center;">
							7
						</th>
						<th style="text-align: center;">
							7.1
						</th>
						<th style="text-align: center;">
							8
						</th>
						<th style="text-align: center;">
							8.1
						</th>
						<th style="text-align: center;">
							9
						</th>
						<th style="text-align: center;">
							9.1
						</th>
					</tr>
					<tr>
						<th colspan="10" style="text-align: left;">
							项目明细（填写项目贷方发生额）
						</th>
						<th colspan="47"></th>
					</tr>
				</table>

				<div sword='SwordGrid' name="yfzcfzzhzbGrid" caption="“研发支出”辅助账汇总表"
					fzbtid="xxGrid_id" showHeader="false" checkMoudle="false"
					fenye="false" showConsole="true" autoHeight="false" dataY="180px"
					dataX="100%" scrollx="400%"    onAfterCreateRow="disable()">
					<div name="xh" type="rowNum" X="1%"></div>
					<div name="xmmc" type="text" X="2%" rule="must"  onblur="checkYfcg()"></div>
					<div name="xmbh" type="text" X="2%" rule="must"></div>
					<div name="yfxs" type="select" X="2%" onChange="changeyfxs()" rule="must"  dataName="DM_SB_YFXS">
					</div>
					<div name="zbhfyhzcxx" type="select" X="2%" rule="must"  onChange="js()">
						<div code="01" caption="资本化"></div>
						<div code="02" caption="费用化"></div>
					</div>
					<div name="xmssztxx" type="select" X="2%" rule="must"  onChange="changesszt()">
						<div code="01" caption="未完成"></div>
						<div code="02" caption="已完成"></div>
					</div>
					<div name="wtfystfsfczglgxxx" type="select" X="2%" rule="must"  onChange="js()">
						<div code="01" caption="存在"></div>
						<div code="02" caption="不存在"></div>
					</div>
					<div name="sfwtjwxx" type="select" X="2%" rule="must" onChange="js()">
						<div code="01" caption="委托境内"></div>
						<div code="02" caption="委托境外"></div>
					</div>
					<div name="yfcg" type="text" X="2%"></div>
					<div name="yfcgzsh" type="text" X="2%"></div>
					<div name="f001" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f002" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f003" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f004" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f005" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f006" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f007" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f008" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f009" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f010" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f011" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f012" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f013" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f014" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f015" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f016" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f017" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f018" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f019" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f020" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f021" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f022" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f023" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f024" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f025" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f026" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f027" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f028" type="text" X="1%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f029" type="text" X="1%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f030" type="text" X="1%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f031" type="text" X="1%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f032" type="text" X="1%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f033" type="text" X="1%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f034" type="text" X="1%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f035" type="text" X="1%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f036" type="text" X="1%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f037" type="text" X="1%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f038" type="text" X="1%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f039" type="text" X="1%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f040" type="text" X="1%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f041" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" disable="true"></div>
					<div name="f042" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f043" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" onblur="js()"></div>
					<div name="f044" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" disable="true"></div>
					<div name="f045" type="text" X="2%" rule="number(14,2)_must" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" disable="true"></div>
					<div name="f046" type="text" X="2%" rule="number(14,2)"  disable="true"></div>
					<div name="f047" type="text" X="2%" rule="number(14,2)" format="{'type':'number','format':'#,##0.00'}"  defValue="0.00" disable="true"></div>
					<div name="insert"  caption="增加" console="button" onclick="inserow();"></div>
					<div name="delete"  caption="删除" console="button" onclick="deleteRows();"></div>
				</div>
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
		<div id="SwordCacheData" query="[{ T:'DM_SB_YFXS'}]"></div> 
		</div>
	</body>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501950500","type":""},{"name":"sessionID","value":"fc651948f0c341e2b939cf5693134329","type":""}]}'></div>

