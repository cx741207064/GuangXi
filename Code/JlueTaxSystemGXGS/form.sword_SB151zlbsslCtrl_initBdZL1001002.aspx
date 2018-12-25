<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="form.sword_SB151zlbsslCtrl_initBdZL1001002.aspx.cs" Inherits="JlueTaxSystemGXGS.form_sword_SB151zlbsslCtrl_initBdZL1001002" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>金税三期业务工作门户</title>
		<script language="javascript" type="text/javascript"
			src="../../swordweb/core/jsimport/Sword.js">
</script>
		<script language="javascript" type="text/javascript"
			src="../../gt3_public/formula_engine.js">
</script>
<script language='javascript' type='text/javascript'
	src='/gy/gy011/gyPrint.js'></script>
<script language='javascript' type='text/javascript'
			src='../../sb/sb100/sb100_qykjzdcwbbbsyxxcj_frame.js'>
</script>
		<script language='javascript' type='text/javascript'
			src='../../sb/sb100/sb100_qykjzdcwbbbsyxxcj00.js'>
</script>
<script language="javascript" type="text/javascript"
			src="../../sb/gy/sb_gy.js"></script>
<script language="javascript" type="text/javascript"
			src="../../sb/gy/sbdr_gy.js"></script>
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
		<div sword='PageInit' onAfter="init();"></div>
		<table cellpadding="0" cellspacing="0" border="0" width="100%">
			<tr>
				<td>
					
	<div sword='SwordToolBar' name='zzsybnsrsb' style="width: 100%" showType="mini" id='zzsybnsrsb'>
		<div name="org" type="custom" >         
	        <table style="height:25px; margin: -5px 0px 0px 0px">
	        	<tr>
	        		<td valign="top">主附表树:</td>
	        		<td valign="top"><div sword='SwordTree'   onNodeClick="openTab();"name="SwordTreeJSON"
										inputWidth="300px" width="500px" select="true" autoShrink="true"
										dataStr=" {'data':[{'code':'00','caption':'企业会计制度资产负债表'},
										{'code':'01','caption':'企业会计制度利润表'}, 
										 {'code':'02','caption':'企业会计制度现金流量表'},
										 {'code':'03','caption':'企业会计制度所有者权益变动表'}],'name':'SwordTreeJSON','sword':'SwordTree'}"
										 ></div>
				    </td>
	        	</tr>
	        </table>
   	 </div>
   	 <div name="save" type="save"  caption="报送"  quickKey="Ctrl+S" enabled='true'  onclick="saveBeforeCheck()" >
		<div widgetName="nsrxxForm" isVal='true'></div>
		<div widgetName="zcfzbxxForm" isVal='true'></div>
	 </div>
	<div name="reset" type="refresh" caption="重置" quickKey="Ctrl+R" enabled='true'	onclick="reset();"></div>
	<div name="import" type="import" caption="导入"  enabled='true'	onclick="getDrxx();"></div>
	<div name="downloadExcelTemplet" type="export" caption="模板下载" quickKey="Ctrl+Q"
					enabled='true' onclick="downloadExcelTemplet();"></div>
	<div name="export" type="export" caption="导出" quickKey="Ctrl+E"  enabled='false'	onclick="exportsbxx();"></div>
	<div name="print" type="print" caption="打印" quickKey="Ctrl+P"  enabled='true'	onclick="printhtm();"></div>
<div name="back" type="back" caption="返回" onclick="backSfxywh();"></div>
</div>
						<div id="fjxxGrid_id">
						
	<div id="ftpkg">
		<div sword="SwordGrid" name="flzlGrid" caption="附件上传" autoHeight="false" checkMoudle="false"  fenye="false" dataX="100%" dataY="200" align="center">
	         <div name="flzlDm" caption="flzlDm" type="hidden" x="5%"></div>
	         <div name="fileMsg" type="hidden"></div>
	         <div name="serverFileName" caption="serverFileName" type="hidden" x="5%"></div>
	         <div name="xh" type="rowNum" caption="序号" disable="true" x="5%"></div>
	         <div name="flzlmc" caption="附送资料名称" type="text" x="45%" disable="true"></div>
	         <div name="sfbb" caption="是否必报" type="select" x="10%" disable="true">
				<div code="1" caption="是" ></div>
				<div code="2" caption="否" ></div>
			 </div>
	         <div name="flzlzt" caption="状态" type="select" x="10%" defvalue="N" disable="true">
				 <div code="Y" caption="已上传" ></div>
				 <div code="N" caption="未上传" ></div>
	 		 </div>
	     	 <div name="cj" caption="上传" type="a" css = 'text-align:center' x="10%" onClick="flzlCj()"></div>
	     	 <div name="ck" caption="查看" type="a" css = 'text-align:center' x="10%" onClick="flzlCk()"></div>
	         <div name="qc" caption="删除" type="a" css = 'text-align:center' x="10%" onClick="flzlDel()" ></div>
		</div>
	
			<table class="tab_botton" cellpadding="0" cellspacing="0">
				<tr>
					<td>
						<div name="xzSubmit2" sword="SwordSubmit" btnName="下载"
							enabled="true" isShow="false" postType="download"
							ctrl="GY013AttachOperateCtrl_downloadFile4FTP" class="submitbutton"></div>
					</td>
				</tr>
			</table>
	</div>
<script language="javascript" type="text/javascript" src="../../gy/gy013/attachOperate_flzlList.js"></script>	

<div style="display:none">
	<object id="LODOP_X" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=100% height=600 >
			<param name="Color" value="#ADD8E6"></param>
	</object>
</div>

<script language="javascript" type="text/javascript" src='../../gy/dy/script/LodopFuncs.js'></script>
<script language='javascript' type='text/javascript' src='../../sb/gy/sb_gy.js'></script>
<script language="javascript" type="text/javascript">
function print(){
	zlbstydy();
}
</script>	
					</div>
					<div>
						<div id="table00">
							<div sword="SwordForm" name="nsrxxForm" caption="纳税人基本信息"
								panel="true" userdefine="true" vType="fldiv">
								<table class="tab_form" border="0" cellpadding="0"
									cellspacing="0">
									<colgroup>
										<col style="width: 15%" />
										<col style="width: 20%" />
										<col style="width: 15%" />
										<col style="width: 20%" />
										<col style="width: 10" />
										<col style="width: 20%" />
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
											<span class="red">*</span>所属期起
										</th>
										<td style="border-right: none;">
											<div name="skssqq" type="date" rule="must" disable="true" dataformat="yyyy-MM-dd" returnRealValue=true></div>
										</td>
										<th
											style="border-left: none; border-right: none; text-align: center">
											<span class="red">*</span>所属期止
										</th>
										<td style="border-left: none">
											<div name="skssqz" type="date" rule="must" disable="true"
												returnRealValue=true></div>
										</td>
										
									</tr>
									<tr style="display: none">
										<td>
											<div name="djxh" type="text"></div>
										</td>
										<td>
											<div name="bbssq" type="text"></div>
										</td>
									</tr>
								</table>
							</div>
							<div sword="SwordForm" name="zcfzbxxForm"
								caption="资产负债表(适用执行企业会计制度的企业)" panel="true" userdefine="true"
								vType='fldiv'>
								<table class="tab_form" border="0" cellpadding="0"
									cellspacing="0">
									<colgroup>
										<col style="width: 19%" />
										<col style="width: 5%" />
										<col style="width: 13%" />
										<col style="width: 13%" />
										<col style="width: 19%" />
										<col style="width: 5%" />
										<col style="width: 13%" />
										<col style="width: 13%" />
									</colgroup>

									<tr>
										<th style="text-align: center">
											资 产
										</th>
										<th style="text-align: center">
											行次
										</th>
										<th style="text-align: center">
											年初数
										</th>
										<th style="text-align: center">
											期末数
										</th>
										<th style="text-align: center">
											负债和所有者权益(或股东权益)
										</th>
										<th style="text-align: center">
											行次
										</th>
										<th style="text-align: center">
											年初数
										</th>
										<th style="text-align: center">
											期末数
										</th>
									</tr>
									<tr>
										<th colspan="4"
											style="text-align: left; background-color: #e8f5ff; color: black">
											流动资产:
										</th>
										<th colspan="4"
											style="text-align: left; background-color: #e8f5ff; color: black">
											流动负债:
										</th>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h1l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;货币资金"></div>
										</td>
										<th style="text-align: center">
											1
										</th>
										<td>
											<div name="h1l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h1l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h1l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;短期借款"></div>
										</td>
										<th style="text-align: center">
											68
										</th>
										<td>
											<div name="h1l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h1l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h2l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;短期投资"></div>
										</td>
										<th style="text-align: center">
											2
										</th>
										<td>
											<div name="h2l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h2l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h2l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应付票据"></div>
										</td>
										<th style="text-align: center">
											69
										</th>
										<td>
											<div name="h2l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h2l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h3l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应收票据"></div>
										</td>
										<th style="text-align: center">
											3
										</th>
										<td>
											<div name="h3l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h3l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h3l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应付账款"></div>
										</td>
										<th style="text-align: center">
											70
										</th>
										<td>
											<div name="h3l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h3l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h4l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应收股利"></div>
										</td>
										<th style="text-align: center">
											4
										</th>
										<td>
											<div name="h4l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h4l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h4l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预收账款"></div>
										</td>
										<th style="text-align: center">
											71
										</th>
										<td>
											<div name="h4l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h4l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h5l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应收利息"></div>
										</td>
										<th style="text-align: center">
											5
										</th>
										<td>
											<div name="h5l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h5l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h5l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应付工资"></div>
										</td>
										<th style="text-align: center">
											72
										</th>
										<td>
											<div name="h5l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h5l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h6l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应收账款"></div>
										</td>
										<th style="text-align: center">
											6
										</th>
										<td>
											<div name="h6l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h6l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h6l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应付福利费"></div>
										</td>
										<th style="text-align: center">
											73
										</th>
										<td>
											<div name="h6l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h6l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h7l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他应收款"></div>
										</td>
										<th style="text-align: center">
											7
										</th>
										<td>
											<div name="h7l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h7l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h7l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应付股利"></div>
										</td>
										<th style="text-align: center">
											74
										</th>
										<td>
											<div name="h7l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h7l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h8l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预付账款"></div>
										</td>
										<th style="text-align: center">
											8
										</th>
										<td>
											<div name="h8l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h8l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h8l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应交税金"></div>
										</td>
										<th style="text-align: center">
											75
										</th>
										<td>
											<div name="h8l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h8l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h9l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应收补贴款"></div>
										</td>
										<th style="text-align: center">
											9
										</th>
										<td>
											<div name="h9l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h9l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h9l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他应交款"></div>
										</td>
										<th style="text-align: center">
											80
										</th>
										<td>
											<div name="h9l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h9l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h10l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存货"></div>
										</td>
										<th style="text-align: center">
											10
										</th>
										<td>
											<div name="h10l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h10l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h10l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他应付款"></div>
										</td>
										<th style="text-align: center">
											81
										</th>
										<td>
											<div name="h10l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h10l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h11l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;待摊费用"></div>
											</th>
											<th style="text-align: center">
												11
											</th>
											<td>
												<div name="h11l2" type="text" rule="number_must"
													defValue="0.00"
													format="{'type':'number','format':'#,##0.00'}"
													style="text-align: right"></div>
											</td>
											<td>
												<div name="h11l3" type="text" rule="number_must"
													defValue="0.00"
													format="{'type':'number','format':'#,##0.00'}"
													style="text-align: right"></div>
											</td>
											<td style="text-align: left; background-color: #e8f5ff;">
												<div style="color: black" name="h11l4" type="label"
													defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预提费用"></div>
											</td>
											<th style="text-align: center">
												82
											</th>
											<td>
												<div name="h11l5" type="text" rule="number_must"
													defValue="0.00"
													format="{'type':'number','format':'#,##0.00'}"
													style="text-align: right"></div>
											</td>
											<td>
												<div name="h11l6" type="text" rule="number_must"
													defValue="0.00"
													format="{'type':'number','format':'#,##0.00'}"
													style="text-align: right"></div>
											</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h12l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一年内到期的长期债权投资"></div>
										</td>
										<th style="text-align: center">
											21
										</th>
										<td>
											<div name="h12l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h12l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h12l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预计负债"></div>
										</td>
										<th style="text-align: center">
											83
										</th>
										<td>
											<div name="h12l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h12l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h13l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他流动资产"></div>
										</td>
										<th style="text-align: center">
											24
										</th>
										<td>
											<div name="h13l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h13l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h13l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一年内到期的长期负债"></div>
										</td>
										<th style="text-align: center">
											86
										</th>
										<td>
											<div name="h13l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h13l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h14l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;流动资产合计"></div>
										</td>
										<th style="text-align: center">
											31
										</th>
										<td>
											<div name="h14l2" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h14l3" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h14l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他流动负债"></div>
										</td>
										<th style="text-align: center">
											90
										</th>
										<td>
											<div name="h14l5" type="text" defValue="0.00"  rule="number_must"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h14l6" type="text" defValue="0.00"  rule="number_must"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<th colspan="8"
											style="text-align: left; background-color: #e8f5ff; color: black;">
											长期投资:
										</th>

									</tr>

									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div name="h15l1" style="color: black" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长期股权投资"></div>
										</td>
										<th style="text-align: center">
											32
										</th>
										<td>
											<div name="h15l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h15l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h15l4" type="label"
												defValue="流动负债合计"></div>
										</td>
										<th style="text-align: center">
											100
										</th>
										<td>
											<div name="h15l5" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h15l6" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h16l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长期债权投资"></div>
										</td>
										<th style="text-align: center">
											34
										</th>
										<td>
											<div name="h16l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h16l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<th colspan="4"
											style="text-align: left; background-color: #e8f5ff; color: black">
											长期负债:
										</th>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h17l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长期投资合计"></div>
										</td>
										<th style="text-align: center">
											38
										</th>
										<td>
											<div name="h17l2" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h17l3" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h17l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长期借款"></div>
										</td>
										<th style="text-align: center">
											101
										</th>
										<td>
											<div name="h17l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h17l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<th colspan="4"
											style="text-align: left; background-color: #e8f5ff; color: black">
											固定资产:
										</th>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h18l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应付债券"></div>
										</td>
										<th style="text-align: center">
											102
										</th>
										<td>
											<div name="h18l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h18l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h19l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;固定资产原价"></div>
										</td>
										<th style="text-align: center">
											39
										</th>
										<td>
											<div name="h19l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h19l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h19l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长期应付款"></div>
										</td>
										<th style="text-align: center">
											103
										</th>
										<td>
											<div name="h19l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h19l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h20l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减:累计折旧"></div>
										</td>
										<th style="text-align: center">
											40
										</th>
										<td>
											<div name="h20l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h20l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h20l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专项应付款"></div>
										</td>
										<th style="text-align: center">
											106
										</th>
										<td>
											<div name="h20l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h20l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h21l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;固定资产净值"></div>
										</td>
										<th style="text-align: center">
											41
										</th>
										<td>
											<div name="h21l2" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h21l3" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h21l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他长期负债"></div>
										</td>
										<th style="text-align: center">
											108
										</th>
										<td>
											<div name="h21l5" type="text" defValue="0.00" rule="number_must"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h21l6" type="text" defValue="0.00" rule="number_must"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h22l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减:固定资产减值准备"></div>
										</td>
										<th style="text-align: center">
											42
										</th>
										<td>
											<div name="h22l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h22l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h22l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长期负债合计"></div>
										</td>
										<th style="text-align: center">
											110
										</th>
										<td>
											<div name="h22l5" type="text" rule="number_must"
												defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h22l6" type="text" rule="number_must"
												defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h23l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;固定资产净额"></div>
										</td>
										<th style="text-align: center">
											43
										</th>
										<td>
											<div name="h23l2" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h23l3" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>

										<th colspan="4" style="text-align: left; color: black">
											递延税项:
										</th>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h24l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工程物资"></div>
										</td>
										<th style="text-align: center">
											44
										</th>
										<td>
											<div name="h24l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h24l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h24l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;递延税款贷项"></div>
										</td>
										<th style="text-align: center">
											111
										</th>
										<td>
											<div name="h24l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h24l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h25l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在建工程"></div>
										</td>
										<th style="text-align: center">
											45
										</th>
										<td>
											<div name="h25l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h25l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h25l4" type="label"
												defValue="负债合计"></div>
										</td>
										<th style="text-align: center">
											114
										</th>
										<td>
											<div name="h25l5" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h25l6" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h26l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;固定资产清理"></div>
										</td>
										<th style="text-align: center">
											46
										</th>
										<td>
											<div name="h26l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h26l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<th colspan="4" style="text-align: left; color: black">&nbsp;</th>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h27l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;固定资产合计"></div>
										</td>
										<th style="text-align: center">
											50
										</th>
										<td>
											<div name="h27l2" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h27l3" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<th colspan="4" style="text-align: left; color: black">
											所有者权益(或股东权益):
										</th>
									</tr>
									<tr>
										<th colspan="4" style="text-align: left; color: black">
											无形资产及其他资产:
										</th>

										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h28l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实收资本(或股本)"></div>
										</td>
										<th style="text-align: center">
											115
										</th>
										<td>
											<div name="h28l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h28l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h29l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无形资产"></div>
										</td>
										<th style="text-align: center">
											51
										</th>
										<td>
											<div name="h29l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h29l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h29l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;减:已归还投资"></div>
										</td>
										<th style="text-align: center">
											116
										</th>
										<td>
											<div name="h29l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h29l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h30l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长期待摊费用"></div>
										</td>
										<th style="text-align: center">
											52
										</th>
										<td>
											<div name="h30l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h30l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h30l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实收资本(或股本)净额"></div>
										</td>
										<th style="text-align: center">
											117
										</th>
										<td>
											<div name="h30l5" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h30l6" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h31l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他长期资产"></div>
										</td>
										<th style="text-align: center">
											53
										</th>
										<td>
											<div name="h31l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h31l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h31l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资本公积"></div>
										</td>
										<th style="text-align: center">
											118
										</th>
										<td>
											<div name="h31l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h31l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h32l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无形资产及其他资产合计"></div>
										</td>
										<th style="text-align: center">
											60
										</th>
										<td>
											<div name="h32l2" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h32l3" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h32l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;盈余公积"></div>
										</td>
										<th style="text-align: center">
											119
										</th>
										<td>
											<div name="h32l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h32l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<th colspan="4" style="text-align: left; color: black"> &nbsp;</th>

										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h33l4" type="label"
												type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中:法定公益金"></div>
										</td>
										<th style="text-align: center">
											120
										</th>
										<td>
											<div name="h33l5" type="text" defValue="0.00" rule="number_must"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h33l6" type="text" defValue="0.00" rule="number_must"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<th colspan="4" style="text-align: left; color: black">
											递延税项:
										</th>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h34l4" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;未分配利润"></div>
										</td>
										<th style="text-align: center">
											121
										</th>
										<td>
											<div name="h34l5" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h34l6" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h35l1" type="label"
												defValue="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;递延税款借项"></div>
										</td>
										<th style="text-align: center">
											61
										</th>
										<td>
											<div name="h35l2" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h35l3" type="text" rule="number_must"
												defValue="0.00"
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h35l4" type="label"
												defValue="所有者权益(或股东权益)合计"></div>
										</td>
										<th style="text-align: center">
											122
										</th>
										<td>
											<div name="h35l5" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h35l6" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
									<tr>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h36l1" type="label"
												defValue="资产合计"></div>
										</td>
										<th style="text-align: center">
											67
										</th>
										<td>
											<div name="h36l2" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h36l3" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td style="text-align: left; background-color: #e8f5ff;">
											<div style="color: black" name="h36l4" type="label"
												defValue="负债和所有者权益(或股东权益)总计"></div>
										</td>
										<th style="text-align: center">
											135
										</th>
										<td>
											<div name="h36l5" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
										<td>
											<div name="h36l6" type="text" defValue="0.00" disable='true'
												format="{'type':'number','format':'#,##0.00'}"
												style="text-align: right"></div>
										</td>
									</tr>
								</table>
							</div>
						</div>
						<div id="table01" style="display: none">
							<iframe id="table01iframe" src="" frameborder="0"
								style="height: 675px; width: 100%" scrolling="auto"></iframe>
						</div>
						<div id="table02" style="display: none">
							<iframe id="table02iframe" src="" frameborder="0"
								style="height: 675px; width: 100%" scrolling="auto"></iframe>
						</div>
						<div id="table03" style="display: none">
							<iframe id="table03iframe" src="" frameborder="0"
								style="height: 675px; width: 100%" scrolling="auto"></iframe>
						</div>
						<div id="table04" style="display: none">
							<iframe id="table04iframe" src="" frameborder="0"
								style="height: 675px; width: 100%" scrolling="auto"></iframe>
						</div>
						<div id="table05" style="display: none">
							<iframe id="table05iframe" src="" frameborder="0"
								style="height: 675px; width: 100%" scrolling="auto"></iframe>
						</div>
						<div id="table06" style="display: none">
							<iframe id="table06iframe" src="" frameborder="0"
								style="height: 675px; width: 100%" scrolling="auto"></iframe>
						</div>
						<div id="table07" style="display: none">
							<iframe id="table07iframe" src="" frameborder="0"
								style="height: 675px; width: 100%" scrolling="auto"></iframe>
						</div>
						<div id="table08" style="display: none">
							<iframe id="table08iframe" src="" frameborder="0"
								style="height: 675px; width: 100%" scrolling="auto"></iframe>
						</div>
						<div id="table09" style="display: none">
							<iframe id="table09iframe" src="" frameborder="0"
								style="height: 675px; width: 100%" scrolling="auto"></iframe>
						</div>
						<div id="table10" style="display: none">
							<iframe id="table10iframe" src="" frameborder="0"
								style="height: 675px; width: 100%" scrolling="auto"></iframe>
						</div>
						<div id="table11" style="display: none">
							<iframe id="table11iframe" src="" frameborder="0"
								style="height: 675px; width: 100%" scrolling="auto"></iframe>
						</div>
						<div id="table12" style="display: none">
							<iframe id="table12iframe" src="" frameborder="0"
								style="height: 675px; width: 100%" scrolling="auto"></iframe>
						</div>
						<div id="table13" style="display: none">
							<iframe id="table13iframe" src="" frameborder="0"
								style="height: 675px; width: 100%" scrolling="auto"></iframe>
						</div>
						<div id="table14" style="display: none">
							<iframe id="table14iframe" src="" frameborder="0"
								style="height: 675px; width: 100%" scrolling="auto"></iframe>
						</div>
						<div id="table15" style="display: none">
							<iframe id="table15iframe" src="" frameborder="0"
								style="height: 675px; width: 100%" scrolling="auto"></iframe>
						</div>
					</div>
				</td>
			</tr>
		</table>
	</body>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"bszlmc","value":"《分部报表（地区分部）》","type":""},{"name":"nsrxxMap","data":{"zlbsuuid":{"value":"CB676969DE451364FC6745D3080EE072"},"zgswjDm":{"value":""},"swrydm":{"value":"000000dzswj"},"gdslxDm":{"value":"1"},"zlsl":{"value":"23"},"nsrsbh":{"value":"450100399111430"},"bszldm":{"value":"ZLA0610211"},"zlbsdlDm":{"value":"ZL1001"},"cwfzrxm":{"value":"温建祥"},"bsrgddh":{"value":""},"swrymc":{"value":""},"kjzdzzDm":{"value":""},"ssqq":{"value":"2017-01-01"},"djxh":{"value":"10114501000046124195"},"scjydz":{"value":"南宁市那洪大道38号西四栋58号"},"bbssq":{"value":"2017-01"},"ssqz":{"value":"2017-01-31"},"skssqz":{"value":"2017-01-31"},"ynsrsbh":{"value":""},"zlbsxlDm":{"value":"ZL1001002"},"zllx":{"value":"1"},"skssqq":{"value":"2017-01-01"},"hyDm":{"value":"5123"},"nsqxDm":{"value":""},"nsrmc":{"value":"广西南宁东投商贸有限公司"},"fddbrxm":{"value":"李品卫"},"djrq":{"value":"2014-05-28 00:00:00"},"bszlmc":{"value":"《分部报表（地区分部）》"},"bsrq":{"value":"2017-12-08"},"fddbrhfzrhyzsfzjhm":{"value":""},"scjydlxdh":{"value":""},"shxydm":{"value":"914501003991114300"},"zcdz":{"value":"南宁市那洪大道38号西四栋58号"},"djzclxDm":{"value":"159"},"zgswjmc":{"value":"南宁经济技术开发区国家税务局"},"sfyhd":{"value":"Y"},"zgswskfjDm":{"value":"14501950000"},"nd":{"value":"2016"},"fddbrhfzrhyzsfzjzlDm":{"value":""},"dcnd":{"value":""},"nsrztDm":{"value":""},"zgswjgDm":{"value":""},"bsrxm":{"value":"覃小利"},"zcfzbr":{"value":"2017-11-30"}},"sword":"SwordForm"},{"name":"nsrxxForm","data":{"zlbsuuid":{"value":"CB676969DE451364FC6745D3080EE072"},"zgswjDm":{"value":""},"swrydm":{"value":"000000dzswj"},"gdslxDm":{"value":"1"},"zlsl":{"value":"23"},"nsrsbh":{"value":"450100399111430"},"bszldm":{"value":"ZLA0610211"},"zlbsdlDm":{"value":"ZL1001"},"cwfzrxm":{"value":"温建祥"},"bsrgddh":{"value":""},"swrymc":{"value":""},"kjzdzzDm":{"value":""},"ssqq":{"value":"2017-01-01"},"djxh":{"value":"10114501000046124195"},"scjydz":{"value":"南宁市那洪大道38号西四栋58号"},"bbssq":{"value":"2017-01"},"ssqz":{"value":"2017-01-31"},"skssqz":{"value":"2017-01-31"},"ynsrsbh":{"value":""},"zlbsxlDm":{"value":"ZL1001002"},"zllx":{"value":"1"},"skssqq":{"value":"2017-01-01"},"hyDm":{"value":"5123"},"nsqxDm":{"value":""},"nsrmc":{"value":"广西南宁东投商贸有限公司"},"fddbrxm":{"value":"李品卫"},"djrq":{"value":"2014-05-28 00:00:00"},"bszlmc":{"value":"《分部报表（地区分部）》"},"bsrq":{"value":"2017-12-08"},"fddbrhfzrhyzsfzjhm":{"value":""},"scjydlxdh":{"value":""},"shxydm":{"value":"914501003991114300"},"zcdz":{"value":"南宁市那洪大道38号西四栋58号"},"djzclxDm":{"value":"159"},"zgswjmc":{"value":"南宁经济技术开发区国家税务局"},"sfyhd":{"value":"Y"},"zgswskfjDm":{"value":"14501950000"},"nd":{"value":"2016"},"fddbrhfzrhyzsfzjzlDm":{"value":""},"dcnd":{"value":""},"nsrztDm":{"value":""},"zgswjgDm":{"value":""},"bsrxm":{"value":"覃小利"},"zcfzbr":{"value":"2017-11-30"}},"sword":"SwordForm"},{"name":"slxxForm","data":{"swjgmc":{"value":"南宁经济技术开发区国家税务局税源管理二股"},"znDm":{"value":""},"gwxh":{"value":""},"swrymc":{"value":""},"lrrq":{"value":"2017-12-08"}},"sword":"SwordForm"},{"name":"fjxxForm","data":{"swjgmc":{"value":"南宁经济技术开发区国家税务局税源管理二股"},"znDm":{"value":""},"gwxh":{"value":""},"swrymc":{"value":""},"lrrq":{"value":"2017-12-08"}},"sword":"SwordForm"},{"name":"reCode","value":"0","type":""},{"name":"sfcfcj","value":"N","type":""},{"data":[{"caption":"江南区","pcode":"450100","code":"450105"}],"dataType":"json","sword":"SwordTree","name":"xzqhszDm"},{"name":"cfdz","value":"1","type":""},{"name":"bbssq","value":"2017-01","type":""},{"name":"sqcfdz","value":"","type":""},{"name":"bsfsDm","value":"0","type":""},{"name":"bszldm","value":"ZLA0610211","type":""},{"name":"djxh","value":"10114501000046124195","type":""},{"name":"djzclxDm","value":"159","type":""},{"name":"zllx","value":"1","type":""},{"name":"zlsl","value":"23","type":""},{"name":"zlbsxlDm","value":"ZL1001002","type":""},{"name":"zlbsdlDm","value":"ZL1001","type":""},{"name":"zlbsuuid","value":"CB676969DE451364FC6745D3080EE072","type":""},{"name":"zlbsuuidOld","value":"","type":""},{"name":"sntqcfdz","value":"","type":""},{"data":[{"yxbz":"Y","mc":"gov.gt3.vo.sbzs.sb.sb100.Qykjzdcwbbywbw","bdmc":"QykjzdcwbbzcfzbVO","caption":"企业会计制度资产负债表","bh":"100","dzbzdszlDm":"BDA0610165","uuid":"5","code":"00","bszlDm":"ZLA0610316","zlbsxlDm":"ZL1001002"},{"yxbz":"Y","mc":"gov.gt3.vo.sbzs.sb.sb100.Qykjzdcwbbywbw","bdmc":"QykjzdcwbblrbVO","caption":"企业会计制度利润表","bh":"100","dzbzdszlDm":"BDA0610165","uuid":"6","code":"01","bszlDm":"ZLA0610317","zlbsxlDm":"ZL1001002"},{"yxbz":"Y","mc":"gov.gt3.vo.sbzs.sb.sb100.Qykjzdcwbbywbw","bdmc":"QykjzdcwbbxjllbVO","caption":"企业会计制度现金流量表","bh":"100","dzbzdszlDm":"BDA0610165","uuid":"7","code":"02","bszlDm":"ZLA0610318","zlbsxlDm":"ZL1001002"},{"yxbz":"Y","mc":"gov.gt3.vo.sbzs.sb.sb100.Qykjzdcwbbywbw","bdmc":"QykjzdcwbbqybVO","caption":"企业会计制度所有者权益变动表","bh":"100","dzbzdszlDm":"BDA0610165","uuid":"8","code":"03","bszlDm":"ZLA0610319","zlbsxlDm":"ZL1001002"},{"yxbz":"Y","mc":"gov.gt3.vo.sbzs.sb.sb100.Qykjzdcwbbywbw","bdmc":"NdcwkjbgshbgVO","caption":"年度财务会计报告审计报告","bh":"100","dzbzdszlDm":"BDA0610165","uuid":"4B2089F411C51F7EE0530100007F0EEA","code":"04","bszlDm":"ZLA0610291","zlbsxlDm":"ZL1001002"},{"yxbz":"Y","mc":"gov.gt3.vo.sbzs.sb.sb100.Qykjzdcwbbywbw","bdmc":"YfzcfzzhzbVO","caption":"“研发支出”辅助账汇总表","bh":"100","dzbzdszlDm":"BDA0610165","uuid":"4B2089F411E81F7EE0530100007F0EEA","code":"05","bszlDm":"ZLA0610292","zlbsxlDm":"ZL1001002"},{"yxbz":"Y","mc":"gov.gt3.vo.sbzs.sb.sb100.Qykjzdcwbbywbw","bdmc":"QykjzdfzForm","caption":"企业会计制度附注","bh":"100","dzbzdszlDm":"BDA0610165","uuid":"4BFF16597E792FA0E053990C170A457F","code":"06","bszlDm":"ZLA0610298","zlbsxlDm":"ZL1001002"},{"yxbz":"Y","mc":"gov.gt3.vo.sbzs.sb.sb100.Qykjzdcwbbywbw","bdmc":"CqdtfydplVO","caption":"长期待摊费用的披露（适用执行企业会计制度的企业）","bh":"100","dzbzdszlDm":"BDA0610165","uuid":"4BFF16597E712FA0E053990C170A457F","code":"07","bszlDm":"ZLA0610307","zlbsxlDm":"ZL1001002"},{"yxbz":"Y","mc":"gov.gt3.vo.sbzs.sb.sb100.Qykjzdcwbbywbw","bdmc":"WxzcdplVO","caption":"无形资产的披露（适用执行企业会计制度的企业）","bh":"100","dzbzdszlDm":"BDA0610165","uuid":"4BFF16597E722FA0E053990C170A457F","code":"08","bszlDm":"ZLA0610306","zlbsxlDm":"ZL1001002"},{"yxbz":"Y","mc":"gov.gt3.vo.sbzs.sb.sb100.Qykjzdcwbbywbw","bdmc":"CqzqtzdplVO","caption":"长期债券投资的披露（适用执行企业会计制度的企业）","bh":"100","dzbzdszlDm":"BDA0610165","uuid":"4BFF16597E742FA0E053990C170A457F","code":"09","bszlDm":"ZLA0610304","zlbsxlDm":"ZL1001002"},{"yxbz":"Y","mc":"gov.gt3.vo.sbzs.sb.sb100.Qykjzdcwbbywbw","bdmc":"CqgptzdplVO","caption":"长期股票投资的披露（适用执行企业会计制度的企业）","bh":"100","dzbzdszlDm":"BDA0610165","uuid":"4BFF16597E732FA0E053990C170A457F","code":"10","bszlDm":"ZLA0610303","zlbsxlDm":"ZL1001002"},{"yxbz":"Y","mc":"gov.gt3.vo.sbzs.sb.sb100.Qykjzdcwbbywbw","bdmc":"CqtzdplVO","caption":"长期投资的披露（适用执行企业会计制度的企业）","bh":"100","dzbzdszlDm":"BDA0610165","uuid":"4BFF16597E752FA0E053990C170A457F","code":"11","bszlDm":"ZLA0610302","zlbsxlDm":"ZL1001002"},{"yxbz":"Y","mc":"gov.gt3.vo.sbzs.sb.sb100.Qykjzdcwbbywbw","bdmc":"DqtzdplVO","caption":"短期投资的披露（适用执行企业会计制度的企业）","bh":"100","dzbzdszlDm":"BDA0610165","uuid":"4BFF16597E762FA0E053990C170A457F","code":"12","bszlDm":"ZLA0610301","zlbsxlDm":"ZL1001002"},{"yxbz":"Y","mc":"gov.gt3.vo.sbzs.sb.sb100.Qykjzdcwbbywbw","bdmc":"ChdplVO","caption":"存货的披露（适用执行企业会计制度的企业）","bh":"100","dzbzdszlDm":"BDA0610165","uuid":"4BFF16597E772FA0E053990C170A457F","code":"13","bszlDm":"ZLA0610300","zlbsxlDm":"ZL1001002"},{"yxbz":"Y","mc":"gov.gt3.vo.sbzs.sb.sb100.Qykjzdcwbbywbw","bdmc":"YszkdplVO","caption":"应收账款的披露（适用执行企业会计制度的企业）","bh":"100","dzbzdszlDm":"BDA0610165","uuid":"4BFF16597E782FA0E053990C170A457F","code":"14","bszlDm":"ZLA0610299","zlbsxlDm":"ZL1001002"},{"yxbz":"Y","mc":"gov.gt3.vo.sbzs.sb.sb100.Qykjzdcwbbywbw","bdmc":"GdzcdplVO","caption":"固定资产的披露（适用执行企业会计制度的企业）","bh":"100","dzbzdszlDm":"BDA0610165","uuid":"4BFF16597E702FA0E053990C170A457F","code":"15","bszlDm":"ZLA0610305","zlbsxlDm":"ZL1001002"}],"dataType":"json","sword":"SwordTree","name":"SwordTreeJSON"},{"name":"sfbhfj","value":"N","type":""},{"name":"sfjsljz","value":"Y","type":""},{"name":"gwssswjg","value":"14501950500","type":""},{"name":"sessionID","value":"46264fb003114803ab93c7ca7316674e","type":""}]}'></div>

