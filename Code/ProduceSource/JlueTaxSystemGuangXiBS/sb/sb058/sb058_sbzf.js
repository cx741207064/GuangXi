
//对申报作废页面进行初始化，带出纳税人识别号、纳税人名称。
var gt3_ctrl ='SB058SbzfCtrl';
var gt3_djxh;
var win;

var  skssqq;
var  skssqz;
var  sbrq1;
var  sbrq2;
var  slr;
var  slswjg;
var slrq;
var nsrxxVO = {}; // 缓存纳税人主体数据信息
var sfqdtygzpt;//是否启动统一工作平台
var viewSbbBz;//查看申报表标志
function init_sbzf(resData){
	jspt_czsm_butncontrol("sbzfTB","SB058");
	$w("sbzfTB").setDisabled("zfBtn");
	$w("cxtjMap").setValue("nsrsbh",resData.getAttr("nsrsbh"));
	//$w("cxtjMap").getFieldEl("nsrsbh").focus();
	
	// 初始化页面查询条件数据信息
	var sbrq1 = resData.getAttr("sbrqq");
	var sbrq2 = resData.getAttr("sbrqz");
	slr = resData.getAttr("slr");
	slswjg = resData.getAttr("slswjg");
	sfqdtygzpt = resData.getAttr("sfqdtygzpt");
	
	var nsrxxFormInit = pc.getResData("nsrxxForm", resData);
	skssqq = nsrxxFormInit.data.skssqq.value;
	skssqz = nsrxxFormInit.data.skssqz.value;
	slrq = nsrxxFormInit.data.sbrq1.value;
	
	var zfxxMap = $w("zfxxMap");
	zfxxMap.setValue("slr",slr);
	zfxxMap.setValue("slswjg",slswjg);
	zfxxMap.setValue("sqrq", nsrxxFormInit.data.sbrq1.value);
	zfxxMap.setValue("slrq", nsrxxFormInit.data.sbrq1.value);
	
	$w("sbzfTB").setDisabled("cxBtn");
	//$w("cxtjMap").getFieldEl("nsrsbh").focus();
	queryBynsrsbh();
	var nsrxxMap = pc.getResData("nsrxxMap",resData);
	if($chk(nsrxxMap)){
		// 开始遍历
		for ( var prop in nsrxxMap.data) {
			nsrxxVO[prop] = nsrxxMap.data[prop].value;
		}
		gt3_djxh = resData.getAttr("djxh");
		$w("sbzfTB").setEnabled("zfBtn");
		$w("sbzfTB").setEnabled("cxBtn");
	}else{
		var cxtjMap = $w("cxtjMap");
		cxtjMap.setValue("sbrq1",sbrq1);
		cxtjMap.setValue("sbrq2",sbrq2);
		cxtjMap.setValue("skssqq",skssqq);
		cxtjMap.setValue("skssqz",skssqz);
	}
	// 以下是网报逻辑，请更新同步时勿覆盖
	/**
	 * begin
	 */
	viewSbbBz = resData.getAttr("viewSbbBz");//网报特色修改：查看申报表标志
	var wssbSbbckBz = resData.getAttr("wssbSbbckBz");
	if("Y"==wssbSbbckBz){
		$w("sbzfTB").setHide("zfBtn");
	}
	/**
	 * end
	 */
	var sbrqBz = resData.getAttr("sbrqBz");
	if("N"==sbrqBz){
		$w("cxtjMap").disable("sbrq1");
		$w("cxtjMap").disable("sbrq2");
	}
	// 实名办税-获取纳税人信息
	//handleAndSetNsrsbhByLcswsx("sbzf","cxtjMap","nsrsbh",queryBynsrsbh);
}

function queryBynsrsbh(e){
	//if(e.code =='13'){
		var gt3_cxtjMap = $w("cxtjMap");
		var gt3_nsrsbh = gt3_cxtjMap.getValue("nsrsbh");
		if ($chk(gt3_nsrsbh) && gt3_nsrsbh != "") {
			queryNsrxxbyNsrsbh(gt3_nsrsbh,queryBynsrsbhSuccess,'4');
		}
	//}
}

function queryBynsrsbhSuccess(nsrParam,zrrParam){
	if ((nsrParam == "" || nsrParam == null || nsrParam == undefined) && (zrrParam==""|| zrrParam==null || zrrParam==undefined)) {
		swordAlert("未能根据当前纳税人识别号查询到当前纳税人基本数据信息，请重新输入！");
		$w("sbzfTB").setDisabled("cxBtn");
		return;
	}
	$w("sbzfTB").setEnabled("cxBtn");
	
	var nsrxxParam=null;
	
	if(nsrParam!=null){
		gt3_djxh=nsrParam.djxh.value;
		var gt3_nsrmc=nsrParam.nsrmc.value;
		$w("cxtjMap").setValue("nsrmc",gt3_nsrmc);
		$w('zfxxMap').setValue('fddbrhfzrhyzxm',nsrParam.fddbrxm.value);
		nsrxxParam = nsrParam;
	}else{
		gt3_djxh=zrrParam.djxh.value;
		var gt3_nsrmc=zrrParam.xm.value;
		$w("cxtjMap").setValue("nsrmc",gt3_nsrmc);
		$w('zfxxMap').setValue('fddbrhfzrhyzxm',zrrParam.xm.value);	
		nsrxxParam = zrrParam;
	}
	

	// 开始遍历
	for ( var prop in nsrxxParam) {
		if (typeof (nsrxxParam[prop]) == " function ") { // 方法
			nsrxxParam[prop]();
		} else { // p 为属性名称，nsrParam[p]为对应属性的值
			nsrxxVO[prop] = nsrxxParam[prop].value;
		}
	}
	
	var ssqzBtn = new SwordSubmit();
	ssqzBtn.setCtrl("SB058SbzfCtrl_querySbbzl");
	ssqzBtn.setFunction('onSuccess', 'querySbbzlSuccess');
	ssqzBtn.pushData('djxh',gt3_djxh);
	ssqzBtn.submit();
}
/**
 * 
 * @param req
 * @param resData
 * @return
 */
function querySbbzlSuccess(req,resData)
{
	$w('sbsjxxGrid').reset();
	$w('cxtjMap').setValue('yzpzzlDm','');
	$w('cxtjMap').setValue('zsxmDm','');
}

//申报表种类下拉触发方法，根据纳税期限代码自动刷新页面上的申报时期
function checkYzpzzl() {
	var yzpzzlDm = $w("cxtjMap").getValue("yzpzzlDm").code;
	var changeSbbzlBtn = new SwordSubmit();
	changeSbbzlBtn.setCtrl("SB058SbzfCtrl_getSkssqzByYzpzzlDm");
	changeSbbzlBtn.setFunction('onSuccess', 'changeSbbzlonSuccess');
	changeSbbzlBtn.pushData('yzpzzlDm', yzpzzlDm);
	changeSbbzlBtn.submit();
}
function changeSbbzlonSuccess(req, resData) {
	var skssqq = resData.getAttr("skssqq");
	var skssqz = resData.getAttr("skssqz");
	/*var sbrqq = resData.getAttr("sbrqq");
	var sbrqz = resData.getAttr("sbrqz");*/
	
	// 将重新计算后的税款所属期起止、申报日期起止回刷到页面上
	var cxtjMap = $w("cxtjMap");
	cxtjMap.setValue('skssqq', skssqq);
	cxtjMap.setValue('skssqz', skssqz);
	/*cxtjMap.setValue('sbrq1', sbrqq);
	cxtjMap.setValue('sbrq2', sbrqz);*/
}

//作废成功后回调函数
function cancelSbbOnSuccess(req,resData){
	var sfysh =  pc.getResData("sfysh", resData).value;
	if(sfysh=='Y'){
		swordAlert("该纳税人该属期纳税申报表已审核，不能作废！");
		querySbb();
		$w("sbzfTB").setDisabled("zfBtn");
	}else{
		
		var checkRowData = $w("sbsjxxGrid").getCheckedData('xz');
		var yzpzzlDm = checkRowData.trs[0].tds.yzpzzlDm;
		var skssqq = checkRowData.trs[0].tds.skssqq.value;
		var skssqz = checkRowData.trs[0].tds.skssqz.value;
		//消费税申报,增值税申报申报作废时需要跳转地税附加税申报作废
		if("Y"==sfqdtygzpt&&$chk(yzpzzlDm)&&$chk(yzpzzlDm.value)&&("BDA0610017"==yzpzzlDm.value||"BDA0610019"==yzpzzlDm.value
				||"BDA0610090"==yzpzzlDm.value||"BDA0610091"==yzpzzlDm.value
				||"BDA0610109"==yzpzzlDm.value||"BDA0610110"==yzpzzlDm.value
				||"BDA0610728"==yzpzzlDm.value||"BDA0610729"==yzpzzlDm.value
				||"BDA0610732"==yzpzzlDm.value||"BDA0610735"==yzpzzlDm.value
				||"BDA0610738"==yzpzzlDm.value||"BDA0610744"==yzpzzlDm.value
				||"BDA0610611"==yzpzzlDm.value||"BDA0610606"==yzpzzlDm.value)){
			toDsfjssb("dsyy","A0000001A0600123",skssqq,skssqz,nsrxxVO);
		}
		
		swordAlert("作废成功");
		$w("sbzfTB").setEnabled("zfBtn");
		
	}
}

// 根据录入的条件查询纳税人历史申报信息。
function querySbb(){
	var cxBtn = new SwordSubmit();
	var cxtjMap = $w("cxtjMap");
	// 校验录入的查询条件，“申报表种类”、“申报日期”、“所属时期起/止”和“征收项目”不允许全部为空，否则提示“请输入查询条件”。
	var yzpzzlDm ="";
	if(cxtjMap.getValue("yzpzzlDm").code!=null){
		yzpzzlDm = cxtjMap.getValue("yzpzzlDm").code;
	}
	var sbrq1 = cxtjMap.getValue("sbrq1");
	var sbrq2 = cxtjMap.getValue("sbrq2");
	var skssqq = cxtjMap.getValue("skssqq");
	var skssqz = cxtjMap.getValue("skssqz");
	var pzxh = cxtjMap.getValue("pzxh");
	var zsxmDm = "";
	if(cxtjMap.getValue("zsxmDm").code!=null){
		var zsxmDm = cxtjMap.getValue("zsxmDm").code;
	}
	
	if(checkNull(pzxh)||checkNull(yzpzzlDm)||checkNull(sbrq1)||checkNull(skssqq)||checkNull(skssqz)||checkNull(zsxmDm)){
		// 只要有条件就能做
		var data = cxtjMap.getSubmitData();
		cxBtn.pushData("djxh",gt3_djxh);
		cxBtn.pushData("sbrq1",sbrq1);
		cxBtn.pushData("sbrq2",sbrq2);
		cxBtn.pushData("skssqq",skssqq);
		cxBtn.pushData("skssqz",skssqz);
		cxBtn.pushData("yzpzzlDm",yzpzzlDm);
		cxBtn.pushData("pzxh",pzxh);
		cxBtn.pushData("zsxmDm",zsxmDm);
		cxBtn.setCtrl("SB058SbzfCtrl_querySbbxx");
		cxBtn.setFunction('onSuccess', 'querysbxxSuccess');
		cxBtn.submit();
	}else{
		swordAlert("请输入查询条件");
		cxBtn.stop();
		//$w("cxtjMap").getFieldEl("sbrq1").focus();
		return ;
	}
}

function querysbxxSuccess(req,resData){   
	var slbz=resData.getAttr("slbz");
	if(slbz=="0"){
		swordAlert("没有查到符合条件记录");
	}else{
		$w("sbzfTB").setEnabled("zfBtn");
		// add by fanyl 20150311 如果查询结果中包含《车辆购置税纳税申报表》，则显示车辆识别代号字段
		var sbsjxxGridData = pc.getResData("sbsjxxGrid",resData).trs;
		var isShowClsbdh = "N";
		sbsjxxGridData.each(function(el, index) {
			if ($chk(el.tds.yzpzzlDm)) {
				var yzpzzlDm = el.tds.yzpzzlDm.value;
				if (yzpzzlDm == "BDA0610128") {
					isShowClsbdh = "Y";
				}
			}
		});
		if (isShowClsbdh == "Y") {
			$w("sbsjxxGrid").showColumn("clsbdh");
		} else {
			$w("sbsjxxGrid").hideColumn("clsbdh");
		}
	}
}
// 查询出结果0或多
function querySbbOnSuccess(req,resData){
	var reCode =  pc.getResData("reCode", resData);
	if(reCode!=null&&reCode!=undefined&&reCode.value=="01"){
		// 没有查到内容
		swordAlert("没有查到内容");
		$w('cxtjMap').reset(['nsrsbh','nsrmc','djxh']);
	}else{
		$w("sbzfTB").setEnabled("zfBtn");
	}
	
}
/**
 * 设置为不可用
 * 
 * @return
 */
function setDisable(){
// var sbsjxxGrid = $w('sbsjxxGrid');
// sbsjxxGrid.readonly();
// //把序号变成可用
// var datadivs = sbsjxxGrid.dataDiv().getChildren();
// var datadivsLength = datadivs.length;
// for(var i=0;i<datadivsLength;i++){
// datadivs[i].enable("xz");
// }
}

function checkNull(value){
	if(value==undefined||value==null||value==""){
		return false;
	}
	return true;
}

// 调用原申报界面查看选中的申报表。
function viewSbb(){
/*	var checkRow = sbsjxxGrid.getCheckedRow();
	
	var yzpzzlStr = checkRowData.trs[0].tds.yzpzzlDm.value;
	yzpzzlStr = yzpzzlStr.split("|");
	var serviceName = yzpzzlStr[1];
	if(serviceName==null||serviceName==undefined||serviceName==""){
		swordAlert("此申报表尚未开通XML预览功能");
	}else{*/
	//网报特色修改：申报作废查看申报表标志begin
	if($chk(viewSbbBz) && viewSbbBz!= null && viewSbbBz!=undefined){
		if(viewSbbBz=="N"){
			return;
		}
	}
	//网报特色修改：申报作废查看申报表标志end
	var sbsjxxGrid = $w("sbsjxxGrid");
	var checkRowData = sbsjxxGrid.getCheckedData('xz');
	var zfBtn = $w("zfBtn");
	if(checkRowData.trs.length==0){
		swordAlert("请选择一行");
		zfBtn.stop();
		return;
	}else{
		var djxh=checkRowData.trs[0].tds.djxh.value;
		var pzxh=checkRowData.trs[0].tds.pzxh.value;
		var sbuuid=checkRowData.trs[0].tds.sbuuid.value;
		var skssqq=checkRowData.trs[0].tds.skssqq.value;
		var skssqz=checkRowData.trs[0].tds.skssqz.value;
		var sbrq=checkRowData.trs[0].tds.sbrq1.value;
		var yzpzzlDm=checkRowData.trs[0].tds.yzpzzlDm.value;
		var sbsxDm1=checkRowData.trs[0].tds.sblxDm.value;
//		sbbdckEntranceFromDzcx(djxh,pzxh,sbuuid,skssqq,skssqz,sbrq,yzpzzlDm,sbsxDm1);
		//网报特殊调整，新版房土不支持申报表查看
//		BDA0610790.城镇土地使用税申报
//		BDA0610791.房产税申报
		if("BDA0610790"==yzpzzlDm){
			swordAlert("此处不支持查看功能。请到城镇土地使用税申报页面最上排按钮“申报表查看”处进行查看！");
		} else if("BDA0610791"==yzpzzlDm){
			swordAlert("此处不支持查看功能。请到房产税申报页面最上排按钮“申报表查看”处进行查看！");
		}  else {
			sbbCkInitViewGyCtrl(djxh,pzxh,sbuuid,skssqq,skssqz,sbrq,yzpzzlDm,sbsxDm1);
		}
		
		/*var sbbwz = checkRowData.trs[0].tds.sbbwz.value;
		var viewBtn = new SwordSubmit();
		viewBtn.pushData('sbbwz',sbbwz);
		viewBtn.pushData('sbbckFlag',"Y");
		viewBtn.setTid(serviceName);
		swordAlertIframe('', {
			titleName : "查看申报表",
			width : 800,
			height : 600,
			param : window,
			submit : getServiceNameBtn,
			isNormal : 'false',
			isMax : 'true',
			isClose : 'true',
			isMin : "true",
			submit : viewBtn
		});*/
	}
}

function alertCancelSbb(){
	var sbsjxxGrid = $w("sbsjxxGrid");
	var checkRowData = sbsjxxGrid.getCheckedData('xz');
	if(checkRowData.trs.length==0){
		swordAlert("请选择一行");
		return;
	}
	swordConfirm("是否作废已选择的申报表", {okBtnName:"是",cancelBtnName:"否",
		onOk : function(){
			cancelSbb();
		}
	});
}

// 判断所选申报表是否允许进行申报作废，允许则作废申报表。
function cancelSbb(){
	debugger
	var sbsjxxGrid = $w("sbsjxxGrid");
	var checkRowData = sbsjxxGrid.getCheckedData('xz');
	var zfxxMap=$w("zfxxMap").getSubmitData();
	var zfBtn = $w("zfBtn");
	if(checkRowData.trs.length==0){
		swordAlert("请选择一行");
		zfBtn.stop();
		return;
	}
	if(($chk(checkRowData.trs[0].tds.sbfsDm)&&checkRowData.trs[0].tds.sbfsDm.value == "32") || ($chk(checkRowData.trs[0].tds.lrrDm)&&checkRowData.trs[0].tds.lrrDm.value =="00000000000")){
			var checkRow = sbsjxxGrid.getCheckedRow();
			var isSbqx=false;
			if(checkRowData.trs[0].tds.sbbwz.value=="true"){
				isSbqx=true;
			}
			var yzpzzlDm=checkRowData.trs[0].tds.yzpzzlDm.value;
			var csz = checkRowData.trs[0].tds.csz.value;
			var sbsxDm=checkRowData.trs[0].tds.sblxDm.value;
			// 所得税查账征收年报自查补报的不允许作废
			if ((yzpzzlDm == 'BDA0610688' || "BDA0610994" == yzpzzlDm) && sbsxDm == '21') {
				swordAlert('《中华人民共和国企业所得税年度纳税申报表（A类）》进行过自查补报操作不允许作废,如有需要请错误更正,谢谢');
				$w("sbzfTB").setEnabled("zfBtn");
				return;
			}
			if(isSbqx && !(yzpzzlDm=='BDA0610790'||yzpzzlDm=='BDA0610791')){
				swordConfirm("该笔申报期限已过,是否作废此申报表", {okBtnName:"是",cancelBtnName:"否",
					onOk : function(){
					var zfBtn1 = new SwordSubmit();
					sbsjxxGrid.deleting(checkRow);
					zfBtn1.setCtrl(gt3_ctrl + "_saveSbzf");
					zfBtn1.pushData("djxh",gt3_djxh);
					zfBtn1.pushData(checkRowData);
					zfBtn1.pushData(zfxxMap);
					zfBtn1.setFunction('onSuccess', 'cancelSbbOnSuccess');
					zfBtn1.submit();
				}
				});
			}else{
				if(csz=="Y"){
				swordAlertIframe('../../sb/sb058/sb058_sbzfDxfs.html',{
				titleName : "申报作废短信验证码确认",
				width : 400,
				height : 230,
				param : {'sbsjxxGrid':$w("sbsjxxGrid"),'gt3_djxh':gt3_djxh}
				});
				}else{
					swordConfirm("是否作废此申报表", {okBtnName:"是",cancelBtnName:"否",
					onOk : function(){
					var zfBtn1 = new SwordSubmit();
					sbsjxxGrid.deleting(checkRow);
					zfBtn1.setCtrl(gt3_ctrl + "_saveSbzf");
					zfBtn1.pushData("djxh",gt3_djxh);
					zfBtn1.pushData(checkRowData);
					zfBtn1.pushData(zfxxMap);
					zfBtn1.setFunction('onSuccess', 'cancelSbbOnSuccess');
					zfBtn1.submit();
				}
				});
				}
			}
	}else{
		swordAlert("该笔申报为大厅申报，请联系税管员进行作废！");
		return;
	}
}
function sb058_check(name){
	var valid = pc.getWidget(name);
	if (!valid.validate()) {
		return false;
	}else{
		return true;
	}
}
/**
 * 作废成功后返回函数
 * 
 * @return
 */
function cancelSbbOnSuccess(req,resData){
	var sfysh =  pc.getResData("sfysh", resData).value;
	if(sfysh=='Y'){
		swordAlert("该纳税人该属期纳税申报表已审核，不能作废！");
		querySbb();
		$w("sbzfTB").setDisabled("zfBtn");
	}else{
		
		var checkRowData = $w("sbsjxxGrid").getCheckedData('xz');
		var yzpzzlDm = checkRowData.trs[0].tds.yzpzzlDm;
		var skssqq = checkRowData.trs[0].tds.skssqq.value;
		var skssqz = checkRowData.trs[0].tds.skssqz.value;
		//消费税申报,增值税申报申报作废时需要跳转地税附加税申报作废
		if("Y"==sfqdtygzpt&&$chk(yzpzzlDm)&&$chk(yzpzzlDm.value)&&("BDA0610017"==yzpzzlDm.value||"BDA0610019"==yzpzzlDm.value
				||"BDA0610090"==yzpzzlDm.value||"BDA0610091"==yzpzzlDm.value
				||"BDA0610109"==yzpzzlDm.value||"BDA0610110"==yzpzzlDm.value
				||"BDA0610728"==yzpzzlDm.value||"BDA0610729"==yzpzzlDm.value
				||"BDA0610732"==yzpzzlDm.value||"BDA0610735"==yzpzzlDm.value
				||"BDA0610738"==yzpzzlDm.value||"BDA0610744"==yzpzzlDm.value
				||"BDA0610611"==yzpzzlDm.value||"BDA0610606"==yzpzzlDm.value)){
			toDsfjssb("dsyy","A0000001A0600123",skssqq,skssqz,nsrxxVO);
		}
		
		swordAlert("作废成功");
		$w("sbzfTB").setEnabled("zfBtn");
		
	}
}
function cancelSbbOnError(req,resData){
	$w("sbzfTB").setEnabled("zfBtn");
}

// 清空页面数据，然后调用init方法。
function qxView(){
	$w("sbsjxxGrid").reset();
	$w("zfxxMap").reset(["fddbrxm","sqrq","slswjg"]);
	$w("cxtjMap").reset(["sbrq1","sbrq2","skssqq","skssqz"]);
	$w("cxtjMap").setValue("sbrq1",sbrq1);
	$w("cxtjMap").setValue("sbrq2",sbrq2);
	$w("cxtjMap").setValue("skssqq",skssqq);
	$w("cxtjMap").setValue("skssqz",skssqz);
	$w("zfxxMap").setValue("slr",slr);
	$w("zfxxMap").setValue("slswjg",slswjg);
	$w("zfxxMap").setValue("slrq",slrq);
	//$w("cxtjMap").getFieldEl("nsrsbh").focus();
	$w("sbzfTB").setDisabled("cxBtn");
}

function zffcjysbxx(){
	var hiddenSubmit = new SwordSubmit();
	hiddenSubmit.setCtrl("SB414FcjySbzfCtrl_initView");
	top.$w("tab1").addTabItem( {
		id : 'zffcjysbxx',
		title : '作废房产交易申报',
		tabContentType : 'iframe',
		submit : hiddenSubmit,
		isCloseBtn : 'true'
	});
	top.$$(".tab_box ul li").each(function(el, i) {
		el.setStyle("width", "150px");
	});
	top.setTabSpanWidth();
	top.pc.getWidget('tab1').scrollRight();
}

function reset() {
	var btn = new SwordSubmit();
	btn.setCtrl(gt3_ctrl + "_initView");
	btn.options.postType = "form";
	btn.submit();
}
////关闭页面。
//function tcExit(){
//	
//}

function sbbCkInitViewGyCtrl(djxh,pzxh,sbuuid,skssqq,skssqz,sbrq,yzpzzlDm,sbsxDm1){
	var serviceForwardBtn = new SwordSubmit();
	serviceForwardBtn.pushData('pzxh', pzxh);
	serviceForwardBtn.pushData('sbuuid', sbuuid);
	serviceForwardBtn.pushData('djxh', djxh);
	serviceForwardBtn.pushData('yzpzzlDm', yzpzzlDm);
	serviceForwardBtn.pushData("sbzf", "sbzf");
	serviceForwardBtn.options.postType = "form";
	serviceForwardBtn.setCtrl("GY007SbSbbdxxCkCtrl_initView");
	swordAlertIframe('', {
			titleName : "查看申报表",
			param : window,
			isMax : 'true',
			isClose : 'true',
			isMin : "true",
			max : true,
			submit : serviceForwardBtn
		});
}
//初始化验证码页面获取主页面数据
function init_sbzfdxfs(){
	var box = this.parent[this.name];
	win = box.options.param;
}
//获取验证码
function fsYzm(){
	var fsYzmBtn = new SwordSubmit();
	var dxfsForm = $w("dxfsForm").getFormData();
	fsYzmBtn.pushData("telNum", dxfsForm.get("telNum"));
	fsYzmBtn.setCtrl(gt3_ctrl + "_fsYzm");
	fsYzmBtn.setFunction('onSuccess', 'fsYzmOnSuccess');
	fsYzmBtn.submit();
}

function fsYzmOnSuccess(req,resData){
	var msg = resData.getAttr("msg");
	$w("dxfsForm").setValue("yzmbsID", resData.getAttr("yzmbsID"));
	swordAlert(msg);
}
//验证码验证
function yzYzm(){
	var fsYzmBtn = new SwordSubmit();
	var dxfsForm = $w("dxfsForm").getFormData();
	fsYzmBtn.pushData("yzm", dxfsForm.get("yzm"));
	fsYzmBtn.pushData("yzmbsID", dxfsForm.get("telNum"));
	fsYzmBtn.setCtrl(gt3_ctrl + "_yzYzm");
	fsYzmBtn.setFunction('onSuccess', 'yzYzmOnSuccess');
	fsYzmBtn.submit();
}
function yzYzmOnSuccess(req,resData){
	var grid = win.sbsjxxGrid;
	gt3_djxh = win.gt3_djxh;
	var msg = resData.getAttr("msg");
	var msgcode = resData.getAttr("msgcode");
	if(msgcode == "00"){
		swordConfirm("验证通过,是否作废此申报表", {okBtnName:"是",cancelBtnName:"否",
		onOk : function(){
		$w("dxfsForm").disable();
		$w("yzmTB").setDisabled("yz");
		$w("yzmTB").setDisabled("fsyzm");
		yztgcancelSbb(grid,gt3_djxh);
		}
	});
	}else{
		swordAlert(msg);
	}
}
function yztgcancelSbb(grid,gt3_djxh){
	var checkRowData = grid.getCheckedData('xz');
	var checkRow = grid.getCheckedRow();
	var zfBtn1 = new SwordSubmit();
	grid.deleting(checkRow);
	zfBtn1.setCtrl(gt3_ctrl + "_saveSbzf");
	zfBtn1.pushData("djxh",gt3_djxh);
	zfBtn1.pushData(checkRowData);
//	zfBtn1.pushData(zfxxMap);
	zfBtn1.setFunction('onSuccess', 'cancelSbbOnSuccess');
	zfBtn1.submit();
}