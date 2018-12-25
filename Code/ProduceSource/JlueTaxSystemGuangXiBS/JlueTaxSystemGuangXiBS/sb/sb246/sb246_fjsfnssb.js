var sb246_jmxxList = null;// 对应的jmxxList
var sb246_jmxxforSave = null;// 保存的时候需要的减免信息List
var sb246_sbxxList = null;// 保存申报信息List的全局变量
var sb246_saveOnSuccess;// 保存成功后返回的参数
var sb246_resDataOnSave;// 保存成功后返回的数据
var sb246_cfsbBz=false;// 重复申报标志
var sb246_cfsbBzOnZcbbTzs = false;// 重复申报标志，默认为重复申报，自查补报
var sb246_tmpResDataOnZcbbTzs;// 自查补报临时存储
var sb246_sysbbz;// 税源申报申报明细Y和N
var is_zstz = false;// 是否由主税页面进入
var gt3_nsqx="";// 公共表头需要取纳税期限代码 默认按月 。
var kdqsssrfpbz;// 跨区
var sb246_cszForXML="";// 用来判断xml的标志，现在大概分为三种，作废，错误更正，导入，参数值先大致分为三种SBZF，SBCWGZ，SBDR
var sb246_resDataXMLForSBZF;// 申报作废返回的resData
var sb246_resDataXMLForSBCWGZ;// 申报错误更正返回的resData
var sb246_resDataXMLForSBDR;// 申报导入返回的resData
var sb246_sysDate;
var sb246_initData;// 主税跳转过来之后的初始化存储的信息
var sb246_sbcwgz_pzxh = null;// 错误更正里面用到的凭证序号
var sb246_sbcwgz_sbuuid = null;// 错误更正里面需要用到的sbuuid
var sbbwz;
var djXh;// 定义全局变量登记序号
var resetresData;
var mxMesgList = null;// 重复申报的明细信息
var ctrl = 'SB246FjsfnssbCtrl';// 定义全局CTRL
var sbrq1;// 全局变量申报日期
var cwgzbz;// 错误更正标志
var pzxh;// 错误更正的时候使用
var sbuuid;// 申报sbuuid 错误更正的时候使用
var gt3 = {};
gt3.djxh = null;
gt3.zxbztzsuuid = null;
var djxh;// 登记序号 错误更正的时候使用
var sbbList;// 错误更正 时 原始申报表信息
var sblxDm;// 申报类型代码
var yzpzzlDm;
var sbrq1;
var sfzddc="N";
var nsrxxVO = {}; // 缓存纳税人主体数据信息
var nsrxxJsonVO = {}; // 缓存纳税人主体json对象,解决弹出纳税人选择框后引用对象失效,无法在自己JS里面通过JSON.encode(nsrxxVO)的问题
var tsswjggzlx="";// 获取税务机关的特殊征收类型lx="1"代表内蒙地税特殊规则
var sb246_pzxh="";// 当是主税进行跳转到时候，需要保存主税的凭证序号，再次进行保存的时候就用主税的凭证序号
var _arrVars_NOywpt={};
var dymbuuid = "sb246_fjsfnssbprint";
var hxdyForPrint = "Y";
var printTitle = "申报——附加税（费）申报";
var caculateGridHJFlag = "Y";
gt3.type = ""; // 调用changeSbssqz方法的参数
gt3.uniqueNsqx = ""; // 如果认定多个纳税期限，一次只能申报一个
gt3.nsqxList = "";
gt3.lybz = "1";
var zspmArray=new Array();
var sb246_rdxxList=null;
gt3.yjxxGrid = null;// 预缴税款数据信息 网报增加
var yzpzxh= null;// 网报
var isCheckYjskxx = "Y";// 网报参数
gt3._sysrq = ""; // 服务器系统日期
gt3._nsrHyxx = ""; // 纳税人行业信息
gt3._zgswjgxx = ""; // 纳税人主管机关信息
gt3.zrrbz = "N";// 自然人标志,默认为纳税人
var htmbfzkg = "N";//是否启用新版打印
var fjsmztskg = "N";//吉林地税省局财产行为处要求教育费附加、地方教育费附加免征提示开关ZOG00_201710130040
var dfjyfjJmtskg = "N";//附加税（费）申报，内蒙地税要求地方教育费附加增加减免提示开关ZOG00_201805150061
var xwqybz = "N";//小微企业标志
var wglbz = "N";//未归类标志

var printFileType="excel";// 模版类型
var hxdyForPrint="Y";// 横向打印参数
var fykg="N"; // 分页参数
var zzlx="A4";// 纸张参数
var printMode='{"PRINT_PAGE_PERCENT":"100%"}';// 缩放参数
var dzswj_gridArr="";//申报错误更正初始化全局变量
var dzswj_gzsekg="N";//更正税额开关
var gzsekg;//更正开关
var ybtseyz;//原应补退税额

/**
 * 主表打印函数
 * 
 * @return
 */
function setZbdymbuuid(){
 var dymbuuid = "sb246_fjsfnssbprint";
 fykg = "N";
 hxdyForPrint = "Y";
 zzlx = "A4";
 caculateGridHJFlag="Y";
 printMode = '{"PRINT_PAGE_PERCENT":"65%"}';
 printTitle = "申报——附加税（费）申报"; 
 return dymbuuid;
}
function printhtm(){
	if("Y"==htmbfzkg){
		gyTaxPrintWordOrExcel();
	} else {
		fjssbPrint();
	}
}
function initSB246Delay(resData){
	(function(){initSB246(resData);}).delay(100);
}
/**
 * @description 界面初始化方法
 * @param resData
 *            初始化数据
 * 
 */
function initSB246(resData) {
	gzsekg = resData.getAttr("gzsekg"); //网报更正税额开关
	htmbfzkg = resData.getAttr("htmbfzkg"); //网报
	fjsmztskg = resData.getAttr("fjsmztskg"); //网报 
	dfjyfjJmtskg = resData.getAttr("dfjyfjJmtskg");//内蒙地税要求地方教育费附加增加减免提示开关
	gt3._sysrq = resData.getAttr("sysrq");
	resetresData = resData;
	public_init(resData);
	var nsrxx=$w("nsrxxForm");
	var slxxForm = pc.getResData("slxxForm", resData);
	var nsrxxForm = pc.getResData("nsrxxForm", resData);
	tsswjggzlx = resData.getAttr("tsswjggzlx");// 获取税务机关特殊规则
	var slxxForm1 = $w("sfxxForm");
	if($chk(slxxForm)){
	slxxForm1.setValue('slr', slxxForm.data.slr.value);// 网报修改
	slxxForm1.setValue('slswjg', slxxForm.data.slswjg.value);
	slxxForm1.setValue('slrq', slxxForm.data.slrq.value);
	sbrq1 = nsrxxForm.data.sbrq1.value;
	var bsr = $chk(nsrxxForm.data)&&$chk(nsrxxForm.data.bsr)&&$chk(nsrxxForm.data.bsr.value)?nsrxxForm.data.bsr.value:nsrxxForm.data.nsrmc.value;
	bsr = $chk(bsr)&&bsr.length>25?bsr.substring(0,25):bsr;
	slxxForm1.setValue('bsr', bsr); // 网报修改
	}
	$w("sbToolBar").setDisabled('print');
	nsrxx.setValue('sbrq', resData.getAttr("sysrq"));
	nsrxx.disable('skssqq');
	nsrxx.disable('skssqz');
	sfzddc=resData.getAttr('sfzddc');
    cwgzbz = resData.getAttr('cwgzbz');
    var scenceCs = resData.getAttr("scenceCs");
    // 网报特有代码
	if($chk(resData.getAttr("sbgnxts"))){
		$('sbgnxts').innerHTML = resData.getAttr("sbgnxts");// 网报特有逻辑
	}

	if (cwgzbz == 'cwgzbz') {// 错误更正
		ybtseyz = resData.getAttr("ybtseyz"); //网报应补退税额原值
		sbuuid = resData.getAttr('sbuuid');
		pzxh = resData.getAttr('pzxh');
		djxh = resData.getAttr('djxh');
		gt3.djxh = djxh;
		sblxDm = resData.getAttr('sblxDm');
		kdqsssrfpbz=resData.getAttr('kdqsssrfpbz');
		sbrq1 = resData.getAttr('sbrq1');
		yzpzzlDm = resData.getAttr('yzpzzlDm');
		sbbList = pc.getResData("sbbList", resData);
		sb246_rdxxList=pc.getResData("rdxxList", resData);
		if("sbbck"==scenceCs){ // 网报修改
			$w("fjsfsbxxGrid").readonly();
			var gridCloItems = $w("fjsfsbxxGrid").items();
			var gridClo;
			var gridCloName;
			for(var i = 0;i< gridCloItems.length;i++){
				gridClo = gridCloItems[i];
				gridCloName = gridClo.getAttribute("name");
				gridClo.setAttribute("disable","true");
			}
		}
		$w("sbToolBar").setEnabled('print');// 错误更正进来要将保存按钮置可用状态
		$w('sbToolBar').setDisabled('import');
		$w("nsrxxForm").disable();
		_arrVars_NOywpt['yqtfpGrid'] = pc.getResData("yqtfpGrid", resData);
		// $("sfysbTR").style.display = "none";
		var fjsfsbxxGrid = $w("fjsfsbxxGrid");
		var data = fjsfsbxxGrid.getAllGridData().trs;
		//网报特色修改：申报错误更正，应补退税额不能小于原应补退税额begin
		dzswj_gzsekg = resData.getAttr("gzsekg");
		if($chk(dzswj_gzsekg) && (dzswj_gzsekg=="Y")){
			fjsfsbxxGrid.disableColumn("bqybtse");
	        var deleteBtn = fjsfsbxxGrid.console().getElement('input[name="shanhang"]');   
			fjsfsbxxGrid.disableConsoleBtn(deleteBtn, true);
			var rdxxtqBtn = fjsfsbxxGrid.console().getElement('input[name="rdxxtq"]');   
			fjsfsbxxGrid.disableConsoleBtn(rdxxtqBtn, true);
			dzswj_gridArr = fjsfsbxxGrid.getAllGridData().trs;
		}
		//网报特色修改：申报错误更正，应补退税额不能小于原应补退税额end
		var rows = fjsfsbxxGrid.dataDiv().getChildren();
		rows.each(function(row, i) {
			// 根据是否申报标志改变当前行的颜色
			if($chk(data[i].tds.lsbbz)){
				var lsbbz = data[i].tds.lsbbz.value;
				if (lsbbz == "Y") {
					row.style.backgroundColor = "#f35336";// 彤色
				}
			}		
		});
		if("sbbck"==scenceCs){
			return;
		}else {
			$w("sbToolBar").setEnabled('save');// 错误更正进来要将保存按钮置可用状态
			$w("nsrxxForm").enable('lxfs');
		}
	} else if("sbbck" == cwgzbz){
		$w("nsrxxForm").disable();
		$w("sfxxForm").disable();
		return;
	}else{
		var cl = $w("fjsfsbxxGrid");
		cl.console().getElements('input[type=button]:not([name=shanhang])').each(
			function(el) {
				cl.disableConsoleBtn(el, true);
			});
			
		var nsrsbh = $w('nsrxxForm').getValue('nsrsbh');
		var cxbz = "4";
		queryNsrxxbyNsrsbh(nsrsbh, querySuccessforfjssb, cxbz);
	}
	sbgyInit(resData);
    var dzswj_sqkzkg = isEnableSkssq("BDA0610678");
	if($chk(dzswj_sqkzkg)&&dzswj_sqkzkg == "Y"){
		$w("nsrxxForm").disable(["skssqq","skssqz"]);
	}
	var bz = isEnableZcbb("BDA0610678");
	if($chk(bz) && bz=="Y"){
		$w('nsrxxForm').enable('sbsxDm1');             	
	}
	
	isCheckYjskxx  = resData.getAttr("isCheckYjskxx");
	//默认带出纳税人
//	var tmpDjxh = resData.getAttr('dsdjxh');
//	if (tmpDjxh != null && tmpDjxh != undefined && tmpDjxh != "") {
//		gt3.djxh = resData.getAttr('dsdjxh');
//		djxh = resData.getAttr('dsdjxh'); //修改从国税跳转过来正常申报时，修改减免性质会抛出djxh为空的异常。修改国税错误更正后跳转到地税错误更正时，修改减免性质会抛出djxh为空的异常。
//		var swdjxxVO = pc.getResData("swdjxxVO", resData).data;
//		nsrxxVO ={};
//		// 开始遍历
//		for ( var prop in swdjxxVO) {
//			if (typeof (swdjxxVO[prop]) == " function ") { // 方法
//				swdjxxVO[prop]();
//			} else { // p 为属性名称，nsrParam[p]为对应属性的值
//				nsrxxVO[prop] = swdjxxVO[prop].value;
//			}
//		}
//		nsrxxJsonVO ={};
//		nsrxxJsonVO = JSON.encode(nsrxxVO);
//		skssqzChangesdxg();
//		nsrxx.enable('skssqq');
//		nsrxx.enable('skssqz');
//	} 
}

/**
 * 从表单跳出到表格（noNextEvent）
 */
function toGrid() {
	if ($w("fjsfsbxxGrid").totalRows() != 0) {
		$w("fjsfsbxxGrid").setCellFocus(1, "jsyj");
	} 
}

function nextOne() {
	$w('fjsfsbxxGrid').reset();
	$w('nsrxxForm').setValue('nsrsbh');
	$w('nsrxxForm').setValue('nsrmc');
	$w('sbToolBar').setDisabled('save');
}
/**
 * xml读取申报作废，这个要求所有的button都灭着，这个就相当于读取xml了
 * 
 * @param resData
 * @return
 */
function XMLForSBZF(resData){
	sb246_resDataXMLForSBZF = resData;// 准备好全局变量
	var g = $w("fjsfsbxxGrid");
	g.console().getElements('input[type=button]:not([fenye=true])').each(function(el) {
         g.disableConsoleBtn(el, true);
     });
// g.readonly();
	
	$w("sfxxForm").disable();
	$w("nsrxxForm").disable();
	$w("bcBtn").disabled();
	$w("drBtn").disabled();
	$w("qxBtn").disabled();
}
/**
 * grid数据插入之后的操作
 * 
 * @return
 */
function afterInitGridData(){
	if(sb246_cszForXML=="SBZF"){
		$w("fjsfsbxxGrid").readonly();
	}else{
		// 循环每一条数据，触发公式计算
		var sbxxGrid = $w("fjsfsbxxGrid");
		var allRows = sbxxGrid.dataDiv().getChildren();
		var length= allRows.length;
		for(var i=0;i<length;i++){
			var oneRowData = sbxxGrid.getOneRowData(allRows[i]);
			jisuan1(null, null, oneRowData, null, allRows[i], null);
// jisuan2(null, null, oneRowData, null, allRows[i], null);
		}
		// 置红重复申报行
		redCfsb();
		
	}
}
var sbcwgzFlag;// 申报错误更正标记
/**
 * 申报错误更正，除保存按钮外都不能用，要置灰nsrxxmap的form
 * 
 * @param resData
 * @return
 */
function XMLForSBCWGZ(resData){
	// alert(JSON.encode(resData));
	sb246_resDataXMLForSBCWGZ = resData;// 准备好全局变量，剩下的自动回填
	sb246_sbcwgz_pzxh = sb246_resDataXMLForSBCWGZ.getAttr("pzxh");
	sb246_sbcwgz_sbuuid = sb246_resDataXMLForSBCWGZ.getAttr("sbuuid");
	sbbwz=sb246_resDataXMLForSBCWGZ.getAttr("sbbwz");
	var nsrxxForm = pc.getResData("tysl",sb246_resDataXMLForSBCWGZ);
	var nsrxx=$w("nsrxxForm");
	nsrxx.setValue('djxh', nsrxxForm.data.djxh.value);
	nsrxx.setValue('nsrsbh', nsrxxForm.data.nsrsbh.value);
	nsrxx.setValue('nsrmc', nsrxxForm.data.nsrmc.value);
	// alert(JSON.encode(nsrxxForm));
	nsrxx.setValue('hyDm', nsrxxForm.data.hyDm.value);
	nsrxx.setValue('ssglyDm', nsrxxForm.data.ssglyDm.value);
	nsrxx.setValue('zgswskfjDm', nsrxxForm.data.zgswskfjDm.value);
	nsrxx.setValue('djzclxDm', nsrxxForm.data.djzclxDm.value);
	nsrxx.setValue('dwlsgxDm', nsrxxForm.data.dwlsgxDm.value);
	nsrxx.setValue('jdxzDm', nsrxxForm.data.jdxzDm.value);
	nsrxx.setValue('yzpzzlDm', nsrxxForm.data.yzpzzlDm.value);
	nsrxx.setValue('sjgsdq', nsrxxForm.data.sjgsdq.value);

	nsrxx.setValue('sblxDm', resData.getAttr("sblxDm"));
	
	var nsrxxFormFromXML = pc.getResData("nsrxxForm",sb246_resDataXMLForSBCWGZ);
	nsrxx.setValue("skssqq",nsrxxFormFromXML.data.skssqq.value);
	nsrxx.setValue("skssqz",nsrxxFormFromXML.data.skssqz.value);
	
	
	var sfxxForm=$w("sfxxForm");
	nsrxx.disable([ 'nsrsbh','nsrmc','sbrq', 'skssqq', 'skssqz', 'sblxDm' ]);// 只让回填
																				// 不让修改
	// sfxxForm.disable();
	var initBtn = new SwordSubmit();
	initBtn.pushData("cs",sb246_cszForXML);
	initBtn.pushData($w("nsrxxForm").getSubmitData());
	initBtn.pushData(pc.getResData("tysl",resData));
	initBtn.pushData("sbbwz",sbbwz);
	initBtn.pushData("pzxh",sb246_sbcwgz_pzxh);
	// initBtn.setTid("PBS_SB246_init");
	initBtn.setFunction("onSuccess", "initSbcwgz");
	initBtn.submit();
}
/**
 * 申报错误更正后台取得数据成功
 * 
 * @param req
 * @param resData
 * @return
 */
function initSbcwgz(req,resData){
sb246_initData = resData;
	$w("sfxxForm").setValue("sbrq",sbrq);
	if(resData.getAttr("sbxxList")=="no"){
		swordAlert("本纳税人未进行税（费）种登记，请先进行税（费）种认定！");
// swordConfirm("本纳税人未进行税（费）种登记，是否进行税（费）种认定？", {okBtnName:"是",cancelBtnName:"否",
// onOk : function(){
// $w('bcBtn').disabled();
// zzsdjTrue();
// },
// onCancel : function(){
// $w('bcBtn').disabled();
// }
// });
	}
	var tmpSb246_sysbbz = pc.getResData("sysbbz", resData);
	sb246_sysbbz = tmpSb246_sysbbz.value;
	// 把减免信息拿出来
	// 将获取的减免信息存入全局变量sb246_jmxxList
	var tmpJmxxList =  pc.getResData("jmxxList", resData);
	if(tmpJmxxList==null||tmpJmxxList==undefined||""==tmpJmxxList){
		sb246_jmxxList = null;
	}else{
		if(tmpJmxxList.trs.length==0){
			sb246_jmxxList = null;
		}else{
			sb246_jmxxList = tmpJmxxList;
		}
	}
	var sbxxListData = pc.getResData("sbxxlist", resData);
// var sbxxListData = pc.getResData("sbxxGrid", resData);
	sb246_sbxxList = sbxxListData;
}

/**
 * 申报错误导入，要求所有的button都亮着
 * 
 * @param resData
 * @return
 *//*
	 * function XMLForSBDR(resData){ sb246_resDataXMLForSBDR = resData;准备好全局变量}
	 */
/**
 * 正常申报情况
 * 
 * @param resData
 * @return
 */
function normalSB(resData){
	var nsrxxForm = $w('nsrxxForm');
	if(resData.getAttr("cs")=="initzstz"){// 如果是主税跳转的
		is_zstz = true;
		nsrxxForm._itemSwitch('sbrq','date',{'disable':true});
		nsrxxForm._itemSwitch('skssqq','date',{'disable':true});
		nsrxxForm._itemSwitch('skssqz','date',{'disable':true});
		nsrxxForm._itemSwitch('sblxDm','select',{'disable':true});
		var sfxxForm = $w('sfxxForm');
		sfxxForm.setValue("slswjg",resData.getAttr("slswjg"));
		sfxxForm.setValue("bsr",resData.getAttr("bsrxm"));
		sfxxForm.setValue("slr",resData.getAttr("slr"));
		sfxxForm.setValue("slrq",resData.getAttr("slrq"));
		// 如果是主税跳转过来的就需要保存
		var nsrxxMap = pc.getResData("nsrxxForm", resData);
		sb246_pzxh = nsrxxMap.data.pzxh.value;

		sb246_sysDate = nsrxxMap.data.sbrq.value;
		
		initOnSuccess(null,resData);
		return;
	}
		
	
	nsrxxForm.setValue('nsrsbh', resData.getAttr("nsrsbh"));
	nsrxxForm.setValue('nsrmc', resData.getAttr("nsrmc"));
	nsrxxForm.setValue('sblxDm', resData.getAttr("sblxDm"));
	nsrxxForm.setValue('sbrq', resData.getAttr("sbrq"));
	
	sb246_sysDate = resData.getAttr("sbrq");
	
	nsrxxForm.setValue('sbqx', resData.getAttr("sbrq"));
	nsrxxForm.setValue('zsxmDm', resData.getAttr("zsxmDm"));
	nsrxxForm.setValue('djxh', resData.getAttr("djxh"));
	nsrxxForm.setValue('ssglyDm', resData.getAttr("ssglyDm"));
	nsrxxForm.setValue('zgswskfjDm', resData.getAttr("zgswskfjDm"));
	nsrxxForm.setValue('djzclxDm', resData.getAttr("djzclxDm"));
	nsrxxForm.setValue('hyDm', resData.getAttr("hyDm"));
	nsrxxForm.setValue('dwlsgxDm', resData.getAttr("dwlsgxDm"));
	nsrxxForm.setValue('yzpzzlDm', resData.getAttr("yzpzzlDm"));
	nsrxxForm.setValue('jdxzDm', resData.getAttr("jdxzDm"));
	nsrxxForm.setValue('sjgsdq', resData.getAttr("sjgsdq"));
	nsrxxForm.setValue('nsqxDm', resData.getAttr("nsqxDm"));
	
	var sfxxForm = $w('sfxxForm');
	sfxxForm.setValue("slswjg",resData.getAttr("swjgmc"));
	sfxxForm.setValue("bsr",resData.getAttr("bsrxm"));
	sfxxForm.setValue("slr",resData.getAttr("swrymc"));
	sfxxForm.setValue("slrq",resData.getAttr("slrq"));
	
	initGo();
}

function initGo(){
  	var initBtn = new SwordSubmit();
	initBtn.pushData('cs', "initView");
	initBtn.pushData($w('nsrxxForm').getSubmitData());
	// initBtn.setTid('PBS_SB246_init');
	initBtn.setFunction('onSuccess', 'initOnSuccess');
	initBtn.submit();
}

function initOnSuccess(req,resData) {
	sb246_initData = resData;
	
	getCfsbMxXx(resData);
	
	if(resData.getAttr("sbxxList")=="no"){
		swordAlert("本纳税人未进行税（费）种登记，请先进行税（费）种认定！");
// $w('bcBtn').disabled();
// swordConfirm("本纳税人未进行税（费）种登记，是否进行税（费）种认定？", {okBtnName:"是",cancelBtnName:"否",
// onOk : function(){
// $w('bcBtn').disabled();
// zzsdjTrue();
// },
// onCancel : function(){
// $w('bcBtn').disabled();
// }
// });
		return;
	}
	var tmpSb246_sysbbz = pc.getResData("sysbbz", resData);
	sb246_sysbbz = tmpSb246_sysbbz.value;
	
	// 判断是否重复申报
	var tmpCfsbBz = pc.getResData("cfsbBz", resData);
	if(tmpCfsbBz==null||tmpCfsbBz==undefined||tmpCfsbBz==""){
		sb246_cfsbBz = false;
	}else{
		if(tmpCfsbBz.value=="N"){
			sb246_cfsbBz = false;
		}else{
			sb246_cfsbBz = true;
			swordAlert("纳税人属期内已进行了申报，请进行申报错误更正");
		}
	}
	
	// 把减免信息拿出来
	// 将获取的减免信息存入全局变量sb246_jmxxList
	var tmpJmxxList =  pc.getResData("jmxxList", resData);
	if(tmpJmxxList==null||tmpJmxxList==undefined||""==tmpJmxxList){
		sb246_jmxxList = null;
	}else{
		if(tmpJmxxList.trs.length==0){
			sb246_jmxxList = null;
		}else{
			sb246_jmxxList = tmpJmxxList;
		}
	}
	var sbxxListData = pc.getResData("fjsfsbxxGrid", resData);
	sb246_sbxxList = sbxxListData;
	gt3.yjxxGrid = pc.getResData("yjxxGrid", resData);// 2016-12-20ZOG00_201612140014网报调整预缴信息
}


// /**
// * 保存时校验重复申报明细,true是没有重复申报
// */
// function checkCfsbMx(){
// if($chk(mxMesgList)){
// var gridData = $w("sbxxGrid").getAllGridData();//getCurPageGridData
// if($chk(gridData)&&$chk(gridData.trs)){
// var gridDataTrs = gridData.trs;
// var lengthInGrid = gridDataTrs.length;
// for(var i=0;i<lengthInGrid;i++){
// var rdpzuuidInGrid = gridDataTrs[i].tds.rdpzuuid.value;
// if(mxMesgList.indexOf(rdpzuuidInGrid)!=-1){
// return false;
// }
// }
// }
// }
// return true;
// }

/**
 * 获取重复申报的明细信息，并提示
 */
function getCfsbMxXx(resData){
	mxMesgListObj = pc.getResData("mxMesgList", resData);
	if($chk(mxMesgListObj)){
		if($chk(mxMesgListObj.value)){
			mxMesgList = mxMesgListObj.value;
		}else{
			mxMesgList = null;
		}
	}else{
		mxMesgList = null;
	}
}
/**
 * 删除行
 */
function deleteOneRow(){
	var row=$w('fjsfsbxxGrid').getCheckedRow();   
    if(row==null){   
       swordAlert('请选择要删除的行');   
       return ;   
    }
    
// if($chk(mxMesgList)){
// var rowData = $w('sbxxGrid').getCheckedRowData();
// var rdpzuuid = rowData.tds.rdpzuuid.value;
// if(mxMesgList.indexOf(rdpzuuid)!=-1){
// $w('sbxxGrid').deleteRow(row);
// }else{
// swordAlert("此行没有重复申报，不许删除");
// }
//    	
// }else{
    	$w('fjsfsbxxGrid').deleteRow(row);
// }
}

/**
 * 如果有重复申报就标红
 */
function redCfsb(){
	if($chk(mxMesgList)){
		var allRows = $w("fjsfsbxxGrid").dataDiv().getChildren();
		var length = allRows.length;
		for(var i=0;i<length;i++){
			var singleRow = allRows[i];
			var rowData = $w("fjsfsbxxGrid").getOneRowData(singleRow);// rdpzuuid
			if($chk(rowData.tds.rdpzuuid)){
				var rdpzuuid =rowData.tds.rdpzuuid.value;
				if(mxMesgList.indexOf(rdpzuuid)!=-1){
					singleRow.setStyle('color','red');    
				}else{
					singleRow.setStyle('color','');    
				}
			}
		}
	}else{
		var allRows = $w("fjsfsbxxGrid").dataDiv().getChildren();
		var length = allRows.length;
		for(var i=0;i<length;i++){
			var singleRow = allRows[i];
			var rowData = $w("fjsfsbxxGrid").getOneRowData(singleRow);// rdpzuuid
			if($chk(rowData.tds.rdpzuuid)){
				var rdpzuuid =rowData.tds.rdpzuuid.value;
				singleRow.setStyle('color','');   
			}
		}
	}
}

/**
 * 检查页面是否被删除干净
 */
function checkPageData(){
	var pageData = $w('fjsfsbxxGrid').getCurPageGridData();
	if($chk(pageData)&&$chk(pageData.trs)&&$chk(pageData.trs.length)&&pageData.trs.length>0){
		return true ;
	}else{
		return false;
	}
}

/**
 * 置灰删除按钮
 */
function disableDeleteBtn(){
	var g = $w("fjsfsbxxGrid");
		g.console().getElements('input[type=button]:not([fenye=true])').each(function(el) {
       	  g.disableConsoleBtn(el, true);
    	 });
}


// 针对未做税费种认定的进行操作
function zzsdjTrue() {
	
	// alert("进入税费种认定界面");
	var nsrxxForm = pc.getResData("nsrxxForm",sb246_initData);
	var djxh = nsrxxForm.data.djxh.value;
	var initBtn =  new SwordSubmit();	
	initBtn.pushData('zsxm_dm_in', GYConstants.getDM_GY_ZSXM_CSWHJSS());// （用例申报范围）适应于多个zsxm
// initBtn.pushData('zsxm_dm_in', "10101");//（用例申报范围）适应于多个zsxm
	initBtn.pushData('zspm_dm_in', "");
	// 一般用例只传zsxm_dm_in和zspm_dm_in即可
	initBtn.pushData('zsxm_dm_notin', "");// （不在用例申报范围）
	initBtn.pushData('zspm_dm_notin', "");		
	initBtn.pushData('djxh',djxh);	
	initBtn.pushData(nsrxxForm);
// initBtn.setTid('PBS_SB000_toLssfzrd');
	initBtn.setTid('PBS_SB000_toLssfzrdForZrr');
	swordAlertIframe('', {
		titleName : "临时税费种认定",
		width : 800,
		height : 400,
		param : window,
		isNormal : 'true',
		isMax : 'true',
		isClose : 'true',
		isMin : "true",
		submit : initBtn
	});
}
/**
 * 不进行临时税费种认定
 * 
 * @return
 */
function zzsdjFalse() {
	// 把所有的都disable掉
	var nsrxxForm = $w('nsrxxForm');
	nsrxxForm.disable(['sbrq1','skssqq','skssqz','sblxDm']);
	$w('bcBtn').disabled();
	$w('drBtn').disabled();
	$w('qxBtn').disabled();
// alert("不进入税费种认定界面");
}
/**
 * 临时税费种认定的回调函数
 * 
 * @param lsszxxGrid
 * @return
 */
function sfzrd(lsszxxGrid){
	
	
	var cs = "lssfzrd";
	var nsrxxForm = $w('nsrxxForm').getSubmitData();
	
	var initBtn = new SwordSubmit();
	initBtn.pushData('cs', cs);
	initBtn.pushData(nsrxxForm);
	
	var initzstz = sb246_initData.getAttr("cs");// =="initzstz"是否是主税跳转过来的
	if(initzstz=="initzstz"){
		initBtn.pushData('initzstz', "Y");
	}else{
		initBtn.pushData('initzstz', "N");
	}
	
	initBtn.pushData(lsszxxGrid);
	// initBtn.setTid('PBS_SB246_init');
	initBtn.setFunction('onSuccess', 'initOnSuccess');
	initBtn.submit();
}


function initSkssqz(){
	var skssqq = $w("nsrxxForm").getValue("skssqq");
	var skssqz = $w("nsrxxForm").getValue("skssqz");
	var sbqx = $w("nsrxxForm").getValue("sbqx");
	var nsqxDm = $w("nsrxxForm").getValue("nsqxDm");
	return qzDate(skssqq,skssqz,sbqx,nsqxDm);
}

function sbrq(){
	var sbrq = $w("nsrxxForm").getValue("sbrq");
	var sysdate = new Date();
	var sysdateY = sysdate.getFullYear();
	var sysdateM = sysdate.getMonth()+1;
	var sysdateD = sysdate.getDate();
	var sbqx = sysdateY+"-"+sysdateM+"-"+sysdateD;
	if(!compareDate2(sbrq,sbqx)){
		swordAlert("申报日期必须为今天或今天以前！");
		return false;
	}
	return true;
}

function slrq(){
	var sbrq = $w("nsrxxForm").getValue("sbrq");
	var sbqx = sb246_sysDate;
	var slrq = $w("sfxxForm").getValue("slrq");
	
// if(!compareDate2(slrq,sbqx)){
// swordAlert("受理日期必须为今天或今天以前！");
// return false;
// }
// if(!compareDate2(sbrq,slrq)){
// swordAlert("受理日期必须不小于申报日期！");
// return false;
// }
	return true;
}

function initSblx() {
	// 设置参数类型
// $w('bcBtn').disabled();
	// 将nsrjbxxForm的某些信息放入到隐藏域中
	var nsrxxForm = $w('nsrxxForm');
	var sblxDm = nsrxxForm.getValue('sblxDm').code;

	if (sblxDm == SBConstants.getDM_SB_SBSX_ZCSB()) {// 正常申报
// if (sblxDm == "0") {// 正常申报
		var zcSbBtn = $w("zcSbBtn");
		zcSbBtn.pushData("cs", "sblx");
		zcSbBtn.pushData(sb035_sbxxList);
		// zcSbBtn.submit({"tid":"PBS_sb035_init"});
		zcSbBtn.submit();
	}

	if (sblxDm == SBConstants.getDM_SB_SBSX_ZCBB()) {// 自查补报
// if (sblxDm == "1") {// 自查补报
		var zcbbtzsBtn = $w("zcbbtzsBtn");
		zcbbtzsBtn.pushData("cs", "sblx");
		zcbbtzsBtn.pushData(sb035_sbxxList);
		zcbbtzsBtn.submit();
	}
}

/**
 * 查询纳税人信息
 * 
 * @param e
 * @return
 */
function queryNsrxxforfjssb(e) {
	if (isEnterUp(e)) {
		var nsrxxFormObj = $w('nsrxxForm');
		var nsrsbh = nsrxxFormObj.getValue("nsrsbh");
		// cxbz 查询标志：
		// 1.只查询自然人
		// 2.只查询纳税人(需要权限过滤)
		// 3.只查询纳税人(不权限过滤)
		// 4.查询自然人和纳税人（纳税人需要权限过滤）；
		var cxbz = "4";
		queryNsrxxbyNsrsbh(nsrsbh, querySuccessforfjssb, cxbz);
	}
}

// 查询成功返回事件
function querySuccessforfjssb(nsrParam, zrrParam) {
	$w("sbToolBar").setEnabled('sl');
	$w("sbToolBar").setEnabled('bysl');
	$w("sbToolBar").setEnabled('bz');
	var nsrxxForm = $w("nsrxxForm");
	if ((nsrParam == "" || nsrParam == null || nsrParam == undefined) && (zrrParam == "" || zrrParam == null || zrrParam == undefined)) {
		swordAlert("未能根据当前纳税人识别号查询到当前纳税人基本数据信息，请重新输入！", {
			// 确定：所属期起获得焦点
				onOk : function() {
					(function() {
						nsrxxForm.getFieldEl("nsrsbh").focus();
					}).delay(500);
					nsrxxForm.setValue("nsrsbh", "");
				}
			});
		nsrxxForm.disable('skssqz');
		return;
	}
	var nsrxxParam=null;
	if (nsrParam != "" && nsrParam != null && nsrParam != undefined) {
		nsrxxParam = nsrParam;
		var nsrZt = nsrParam.nsrztDm.value;// 纳税人状态代码
		nsrxxForm.setValue("nsrmc", nsrParam.nsrmc.value);
		// 监控纳税人状态
		if (!checkNsrzt(nsrParam.nsrztDm.value)) {
			//nsrxxForm.getFieldEl('nsrsbh').focus();
			return;
		}
	} else if (zrrParam != "" && zrrParam != null && zrrParam != undefined) {
		nsrxxParam = zrrParam;
		gt3.zrrbz = "Y";
	}
	nsrxxVO={};
	nsrxxJsonVO={};
	// 开始遍历
	for ( var prop in nsrxxParam) {
		if (typeof (nsrxxParam[prop]) == " function ") { // 方法
			nsrxxParam[prop]();
		} else { // p 为属性名称，nsrParam[p]为对应属性的值
			nsrxxVO[prop] = nsrxxParam[prop].value;
		}
	}
	nsrxxForm.setValue('nsrmc', nsrxxVO['nsrmc']);
	
	var djzclxDm=nsrxxVO['djzclxDm'];
	var djzclxMc=nsrxxVO['djzclxmc'];
	nsrxxForm.setValue('djzclxDm',"code,"+djzclxDm+"|caption,"+djzclxMc);
	var djzclx=null;// 4开头为个人
	if(djzclxDm!=""&&djzclxDm!=null&&djzclxDm!=undefined){
		djzclx=djzclxDm.substr(0,1);
	}
	if(djzclx!=null&&djzclx==4){// 登记类型为个人则必录
// pc.getWidget('nsrxxForm')._itemSwitch("zjhm","text",{'rule':'must'});
// 网报修改：因页面没有zjhm字段，故将其注释掉
	}
	var hyDm=nsrxxVO['hyDm'];
	var hyMc=nsrxxVO['hymc'];
	var zgswskfjDm=nsrxxVO['zgswskfjDm'];
	var zgswskfjmc=nsrxxVO['zgswskfjmc'];
	djxh = nsrxxVO['djxh'];
	gt3.djxh = djxh;
	if ("Y" != gt3.zrrbz) {
		nsrxxForm.setValue("lxfs", nsrParam.scjydlxdh.value);
		nsrxxForm._itemSwitch("hyDm", "pulltree", {
			'rule' : '',
			'value' : ''
		});
		
		gt3._nsrHyxx = "code," + hyDm + "|caption," + hyMc;
		gt3._zgswjgxx = "code," + zgswskfjDm + "|caption," + zgswskfjmc;
		nsrxxForm.disable(["hyDm", "zgswskfjDm"]);
		nsrxxForm.setValue('hyDm', gt3._nsrHyxx);
		nsrxxForm.setValue('zgswskfjDm', gt3._zgswjgxx);				
		if (djzclx != null && djzclx == 4) {// 登记类型为个人
			nsrxxForm.setValue("djlx", "2");	
		}else{
			nsrxxForm.setValue("djlx", "1");		
		}
		
		// 纳税人自动带出
		document.getElementById("hyID").innerHTML = "所属行业"; 
	} else {
		gt3._nsrHyxx = "";
		gt3._zgswjgxx = "";
		nsrxxForm.setValue('hyDm', "");
		nsrxxForm.setValue('zgswskfjDm', "");
		nsrxxForm.enable(["hyDm", "zgswskfjDm"]);
		nsrxxForm.setValue("djlx", "2");
				
		// 个人设置主管税务机关必录，属期按次
		document.getElementById("hyID").innerHTML = "<span class='red'>*</span>所属行业";
		nsrxxForm._itemSwitch("hyDm", "pulltree", {'rule':'must'});
		// 属期期和服务器日期不为同一天
		nsrxxForm.setValue("skssqq", gt3._sysrq);
		nsrxxForm.setValue("skssqz", gt3._sysrq);
		fjsnsqxDm = "11"; // 设置纳税期限为按次
	}
	if("Y"==dfjyfjJmtskg){//内蒙地税需求，对未划形企业提示纳税人做归类管理。
		queryDjhglxx();
		if("Y" == wglbz){
			swordAlert("您尚未进行企业划型，请联系主管税务机关划型后再进行申报。");
		}
	}
	nsrxxJsonVO = JSON.encode(nsrxxVO);
	
	nsrxxForm.enable('skssqq');
	nsrxxForm.enable('skssqz');
	// 导入时，获取页面初始化数据
	if (typeof getSbdrInitData != 'undefined'
			&& getSbdrInitData instanceof Function) {
		getSbdrInitData();
	}

	// 导入时，不能执行获取默认税款属期起止时间()
	if ($_cshFlag == 1) {
		getMrSkssqzTime();
	} else {
		$_cshFlag = 1;
	}
}

/**
 * 载入基础数据，更改所属期回调函数
 * 
 * @param reData
 * @param
 */
function loadBaseInfo(req, resData) {
	debugger
	// 网报 选择纳税期限
	var nsqxXzbz = resData.getAttr("nsqxXzbz");
	if("Y"==nsqxXzbz){
		gt3.nsqxList = resData.getData("nsqxList");
		var submitBtn = new SwordSubmit();
		submitBtn.setCtrl("SB246FjsfnssbCtrl_openNsqxPage");
		submitBtn.pushData(gt3.nsqxList);
		submitBtn.pushData(resData.getData("rdxxList"));
		swordAlertIframe('', {
			titleName : '选择附加税（费）申报纳税期限',
			width : 500,
			height : 300,
			param : window,
			isNormal : 'true',
			isMax : 'true',
			isClose : 'false',
			isMin : "false",
			submit : submitBtn
		});
		return;
	}
	
	// var sbxxList = pc.getResData("sbxxvoList", resData);
	kdqsssrfpbz = resData.getAttr("kdqsssrfpbz", resData);
	// 获得后台传过来的系统日期
	$w("nsrxxForm").setValue('skssqq',resData.getAttr('skssqq'));
	$w("nsrxxForm").setValue('skssqz',resData.getAttr('skssqz'));
	$w("nsrxxForm").disable('nsrsbh');
	gt3_nsqx = resData.getAttr("nsqxDm");
	$w("sbToolBar").setEnabled('save');
	if("Y"==fjsmztskg){
		// ZOG00_201801190087 去掉 是否 及 清零逻辑
		swordAlert("按月纳税的月销售额或营业额不超过10万元（按季度纳税的季度销售额或营业额不超过30万元）的，免缴教育费附加、地方教育费附加。");
//		swordConfirm("按月纳税的月销售额或营业额不超过10万元（按季度纳税的季度销售额或营业额不超过30万元）的，免缴教育费附加、地方教育费附加。", {
//			okBtnName:"是",
//			cancelBtnName:"否",
//			onOk:function() { //申报表计税依据自动清零
//				clearJsyj();
//			},
//			onCancel : function() {
//				return;
//	       }
//		});
	}
	// 查询到税费种认定信息 增行,删行按钮点亮
	var cl = $w("fjsfsbxxGrid");
	cl.console().getElements('input[type=button]:not([name=shanhang])').each(
			function(el) {
				cl.disableConsoleBtn(el, true);
			});
//	var strZsGswsbszmc = resData.getAttr('strZsGswsbszmc');
//	if ($chk(strZsGswsbszmc)) {
//		var strMsg ="纳税人"+resData.getAttr('skssqq')+"至"+resData.getAttr('skssqz')+"主税（"+strZsGswsbszmc+"）尚未申报，是否进行附加费申报？";
//		 swordConfirm(strMsg,{okBtnName:"是",cancelBtnName:"否",onOk:function(){ }
//		 ,onCancel:function(){
//			 $w("sbToolBar").setDisabled('save');
//		 }
//		 });
//	}
	// 网报逻辑
	var gdmsgXjdsBz = resData.getAttr('gdmsgXjdsBz');
	if($chk(gdmsgXjdsBz) && "Y"==gdmsgXjdsBz){
		var gsmsgString=resData.getAttr('gsmsgStringForXjDs');
		if ($chk(gsmsgString)) {
			swordAlert(gsmsgString);
		}
	} else {
		var gsmsgString=resData.getAttr('gsmsgString');
		if ($chk(gsmsgString)) {
			swordAlert(gsmsgString);
		}
	}
	
	
	// ZOG00_201604150036 保存前强制性重复申报监控改为提示性监控 2016-04-15 begin
	var fjsfsbxxGrid = $w("fjsfsbxxGrid");
	var data = fjsfsbxxGrid.getAllGridData().trs;
	var rows = fjsfsbxxGrid.dataDiv().getChildren();
	rows.each(function(row, i) {
		// 根据是否申报标志改变当前行的颜色
		if($chk(data[i].tds.lsbbz)){
			var lsbbz = data[i].tds.lsbbz.value;
			if (lsbbz == "Y") {
				row.style.backgroundColor = "#f35336";// 彤色
			}
		}		
	});
	changeSblx();
	// ZOG00_201604150036 保存前强制性重复申报监控改为提示性监控 2016-04-15 end
	_arrVars_NOywpt['yqtfpGrid'] = pc.getResData("yqtfpGrid", resData);
	// 逾期申报提示信息
	var yqsbxx= pc.getResData("yqsbxx", resData);
	if($chk(yqsbxx)){
		if(yqsbxx.data.yqsbBz.value=='Y'){
			swordAlert(yqsbxx.data.yqsbMes.value);
		}
	}
	
		
	// 判断是不是双定户，是则建议提示
	var zshdBz = resData.getAttr("zshdBz");
	if($chk(zshdBz)&&zshdBz=='Y'){
		swordAlert('该户为定期定额户，建议到"定期定额自行申报"模块申报');
	}
	gt3.yjxxGrid = pc.getResData("yjxxGrid", resData);// 网报
														// 2016-12-20ZOG00_201612140014网报调整预缴信息
}


function initonError(req, resData) {
	$w('sbToolBar').setDisabled('export');
	$w('sbToolBar').setDisabled('save');
}
/**
 * 改变税款所属期成功返回
 * 
 * @param req
 * @param resData
 * @return
 */
function changeSkssqOnSuccess(req,resData){// 自动回填之后还能关联起来
	initOnSuccess(req,resData);
}
/**
 * 改变税款所属期起失败返回
 * 
 * @param req
 * @param resData
 * @return
 */
function changeSkssqOnError(req,resData){
	$w('bcBtn').disabled();
}

/**
 * 申报类型
 */
function initsblx(option,selItem,obj){
	if(sb246_sbxxList==null)
		return;
	if(!initSkssqz() || !sbrq()){
		$w('nsrxxForm').setValue("sblxDm", "0");
		return;
	}
    if(selItem.get("code")==0)
    	$w('drBtn').enabled();
    else
    	$w('drBtn').disabled();
// var cs = "initsblx";
	var nsrxxForm = $w('nsrxxForm').getSubmitData();
	$w("fjsfsbxxGrid").reset();
    var initBtn = new SwordSubmit();
	initBtn.pushData('cs', "initsblx");
	initBtn.pushData(nsrxxForm);
	initBtn.pushData(sb246_sbxxList);
	// initBtn.setTid('PBS_SB246_init');
	initBtn.setFunction('onSuccess', 'sblxAlertIframe');
	initBtn.setFunction('onError', 'sblxAlertIframeOnError');
	initBtn.submit();
}

/**
 * 弹出自查补报通知书页面
 * 
 * @param {Object}
 *            resData
 * @return {TypeName}
 */
function sblxAlertIframe(req,resData){
	getCfsbMxXx(resData);
	// 改变重复申报状态
	sb246_tmpResDataOnZcbbTzs = resData;// 临时存储
var	tmpCfsbBz = pc.getResData("cfsbBz", resData);
	if(tmpCfsbBz!=null&&tmpCfsbBz!=undefined&&tmpCfsbBz!=""&&tmpCfsbBz.value=="Y"){
		sb246_cfsbBzOnZcbbTzs=true;
		swordAlert("纳税人属期内已进行了申报，请进行申报错误更正",{onClose:getZcbbTzs});
	}else{
		sb246_cfsbBzOnZcbbTzs=false;
		getZcbbTzs();
	}
}
/**
 * 打开自查补报通知书
 * 
 * @return
 */
function getZcbbTzs(){
	var resData = sb246_tmpResDataOnZcbbTzs;
	if($w("nsrxxForm").getValue("sblxDm").code==0){
		// 单元格的内容要回归不可用变成可用
		setCellEnable();
		return;
	}
	var nsrzcbbtzsGrid = pc.getResData("nsrzcbbtzsGrid", resData);
// if(nsrzcbbtzsGrid.trs.length==0)
// return;
	var hiddenSubmit = $w('hiddenSubmit');
	hiddenSubmit.setTid("PBS_SB000_toNsrzcbb");
	hiddenSubmit.clear();
	hiddenSubmit.pushData(nsrzcbbtzsGrid);
	
	swordAlertIframe('', {
				titleName:'纳税评估自查补报通知书',
				width: 850,
				height:400,
				param:window,
				submit:hiddenSubmit,
				isNormal:'false',
	 	    	isMax:'false',
	 	   	    isClose:'false',
	 	        isMin:"false"
	 	        });
}

function sblxAlertIframeOnError(req,resData){
	
}
// 将弹出的通知书页面选择后的uuid写入到申报页面 然后将保存设置为可用，这是个回调函数
function setNsrzcbbtzsUUID(uuid) {
	$w("nsrxxForm").setValue('zxbztzsuuid', uuid);
	// 要把单元格变成不可用
	setCellDisable();
}

// 自查补报不选东西直接回来
function setSel() {
	var nsrxxForm = $w("nsrxxForm");
	nsrxxForm.setValue("sblxDm", "0");
	$w("drBtn").enabled();
	// 要把单元格变成可用
	setCellEnable();
}
// 把单元格变成可用，
function setCellEnable(){
	var sbxxGrid = $w("fjsfsbxxGrid");
	var sbxxGridDiv = sbxxGrid.dataDiv();
	var sbxxChildren = sbxxGridDiv.getChildren();
	var length = sbxxChildren.length;
	for(var i=0;i<length;i++){
		sbxxChildren[i].enable("jmse");
		sbxxChildren[i].enable("yjse1");
	}
}
// 把单元格变成不可用
function setCellDisable(){
	var sbxxGrid = $w("fjsfsbxxGrid");
	var sbxxGridDiv = sbxxGrid.dataDiv();
	var sbxxChildren = sbxxGridDiv.getChildren();
	var length = sbxxChildren.length;
	for(var i=0;i<length;i++){
		sbxxChildren[i].disable("jmse");
		sbxxChildren[i].disable("yjse1");
	}
}

// 减免信息回调函数，jmxxList的返回页面
function setJmxx(allData,checkedData){
// sb003_jmxxListInit = JSON.decode(allData);
// //为保存赋值
// var tmpforSave = JSON.decode(checkedData);
// if(tmpforSave==null||tmpforSave==undefined||""==tmpforSave){
// //sb003_jmxxListSave = null;
// }else{
// if(tmpforSave.trs.length==0){
// //sb003_jmxxListSave = null;
// }else{
// sb014_reset(["cswghsssbGrid2"]);
// $w('cswghsssbGrid2').initData(tmpforSave);
// }
// }
	// 为显示而生
	sb246_jmxxList = JSON.decode(allData);
	// 为像后台传值
	var tmpforSave = JSON.decode(checkedData);
	if(tmpforSave==null||tmpforSave==undefined||""==tmpforSave){
		sb246_jmxxforSave = null;
	}else{
		if(tmpforSave.trs.length==0){
			sb246_jmxxforSave = null;
		}else{
			sb246_jmxxforSave = tmpforSave;
		}
	}
}

// 保存前的减免信息监控
function jmxxjk(){
// var jmsdse = $w("nsrxxForm").getValue("jmsdse");
// if(parseFloat(jmsdse)>0){
// if(sb003_jmxxListSave.trs.length==0){
// swordAlert("请您选择减免税务事项通知书！");
// return;
// }
// }
// 首先判断减免
	// 判断是否jmxxList添置了，但是没有选jmxxListForSave里面的值
	// 先判断是否填值，确定填的都是正值了
	var grid  = $w('fjsfsbxxGrid');
	var allGridDa = grid.getCurPageGridData();
	if(sb246_jmxxforSave==null){
		var count=0;
		var length = allGridDa.trs.length;
		for(var i=0;i<length;i++){
// count += allGridDa.trs[i].tds.jmse.value/1;
			count= count.accAdd(allGridDa.trs[i].tds.jmse.value/1);
		}
		if(count!=0){
			swordAlert("未选择减免税务事项通知书");
			$w('bcBtn').enabled();
			$w("bcBtn").stop();
			return false;
		}
	}
	return true;
}

// function changeSblx() {
// var nsrxxForm = $w('nsrxxForm');
// var sblxDm = nsrxxForm.getValue('sbsxDm1').code;
//
// if (sblxDm == SBConstants.getDM_SB_SBSX_ZCSB()) {// 正常申报
// var zcSbBtn = $w("zcSbBtn");
// zcSbBtn.pushData("cs", "sblx");
// zcSbBtn.pushData(sb035_sbxxList);
// zcSbBtn.submit();
// }
// if (sblxDm == SBConstants.getDM_SB_SBSX_ZCBB()) {// 自查补报
// var zcbbtzsBtn = $w("zcbbtzsBtn");
// zcbbtzsBtn.pushData("cs", "sblx");
// zcbbtzsBtn.pushData(sb035_sbxxList);
// zcbbtzsBtn.submit();
// }
// }

/**
 * 保存方法
 * 
 * @return
 */
function declare(){
	var grid = $w("fjsfsbxxGrid"); // 获取表格组件对象
	var hjje = grid.getHj("bqybtse");// 获取表格中bqybtse列的合计值
	// 内蒙需求地方教育费附加/教育费附加/地方水利建设基金并且应不退税额大于0时必须选择减免性质
	if ("Y" == dfjyfjJmtskg) {
		var fjsfsbxxGrid = grid.getAllNoDeleteGridData();
		for ( var i = 0; i < fjsfsbxxGrid.trs.length; i++) {
			var zsxmDm = fjsfsbxxGrid.trs[i].tds.zsxmDm.value;
			var zspmDm = fjsfsbxxGrid.trs[i].tds.zspmDm.value;
			var bqybtse = fjsfsbxxGrid.trs[i].tds.bqybtse.value;
			var jmxzDm = fjsfsbxxGrid.trs[i].tds.jmxzDm == null ? ""
					: fjsfsbxxGrid.trs[i].tds.jmxzDm.value;
			if (("30216" == zsxmDm || "30203" == zsxmDm || "302210400" == zspmDm)
					&& "0099129999" != jmxzDm && bqybtse > 0) {
				queryDjhglxx();
				if ("Y" == xwqybz) {
					swordAlert("您属于小型企业/微型企业，享受地方教育费附加/教育费附加/地方水利建设基金减免，请在“减免性质代码”中选择“0099129999︱小微企业免征地方教育附加︱其他”");
					return;
				}
			}
		}
	}
	if (gzsekg == "Y" && cwgzbz == "cwgzbz") {// 申报错误更正只昜大不更小 内蒙地税需求
		// 2018-05-14
		if (hjje.round(2) < ybtseyz.round(2)) {
			swordAlert("申报更正金额小于原申报金额，请到办税服务厅办理");
			return;
		}
	}
	swordConfirm("本期应补退税额合计:&nbsp&nbsp&nbsp" + hjje + "<br>"
			+ "您是否确认填写无误，提交申报?", {
		onOk : function() {
			save();
		},
		onCancel : function() {
			return;
		}
	});
}

function save(){

	var grid = $w("fjsfsbxxGrid");
	//网报特色修改：申报错误更正，应补退税额不能小于原应补退税额begin
	if($chk(dzswj_gzsekg) && (dzswj_gzsekg=="Y") && (cwgzbz=="cwgzbz")){
		var data = grid.getAllGridData().trs;
		var len1 = dzswj_gridArr.length;
		var len2 = data.length;
		if(len2 != len2){
			swordAlert("两次更正数据条数不同，请检查！");
			return;
		}
		for(var i=0; i<len1; i++){
			if(data[i].tds.bqybtse.value.subtract( dzswj_gridArr[i].tds.bqybtse.originValue)<0){
				var n = i+1;
				swordAlert("第"+n+"行应补退税额不能小于更正前的金额，请调整后保存！");
				return;
			}
		}
	}
	//网报特色修改：申报错误更正，应补退税额不能小于原应补退税额end
	var rows = grid.dataDiv().getChildren().length;
	if(rows<1){
		swordAlert('至少填写一条数据！');
		return;
	}
	// 网报增加获取最新数据，避免修改主表未同步修改附表数据
	if ($chk($("yqtfb_iframe")) && $chk($("yqtfb_iframe").contentWindow)){
		var yqtfpGrid;
		try{
			var date = $w("fjsfsbxxGrid").getAllNoDeleteGridData();
			date.name = "dfpGrid";
			$("yqtfb_iframe").contentWindow.$w("dfpGrid").initData(date);
		}catch(e){
		}
	}

	
	if(jyyqtfb()){
		swordAlert("油气田企业税款分配表中存在必录项未填写,或者存在已分配应补退税额合计不等于分配前应补退税额合计的记录,请修改");
		return;
	} 
	if(jyyqtfbFpblHj()){ // 网报校验分配比例是否为1
		swordAlert("油气田企业税款分配表中存在已分配比例之和不等于1的记录,请修改");
		return;
	}
	var fjsfsbxxGrid = $w("fjsfsbxxGrid").getAllNoDeleteGridData();
		
	for ( var i = 0; i < fjsfsbxxGrid.trs.length; i++) {
		var ssjmxzDm= fjsfsbxxGrid.trs[i].tds.jmxzDm;
		var jmse= (fjsfsbxxGrid.trs[i].tds.jme.value)/1;
		if($chk(ssjmxzDm) && ssjmxzDm!=undefined && $chk(ssjmxzDm.value)) {
			if(jmse<=0){
				swordAlert("第"+(i+1)+"行,存在减免性质，减免税额不能为0");
				return ;
			}
		}
		if(jmse>0){
			if(!$chk(ssjmxzDm) || ssjmxzDm==undefined || !$chk(ssjmxzDm.value)){
				swordAlert("第"+(i+1)+"行,减免税额大于0，请选择减免性质，");
				return ;
			}
		}
	}
	
	// 网报增加
	var bcqzjkObj = wbsaveBeforeCheck();
	if (bcqzjkObj.jkbz) {
		var bcstrBuf = bcqzjkObj.strBuf;
		swordAlert(bcstrBuf + "不允许保存，请核实！");
		return;
	}
	
	
	if(!($w("nsrxxForm").validate()&& $w("sfxxForm").validate()&&$w("fjsfsbxxGrid").validate())){
		return;	
	};

	  if(kdqsssrfpbz=="Y"){
		var gridDataObj = {
			"sword" : "SwordGrid",
			"name" : "sbxxGrid",
			"trs" : [ {
				"status" : "",
				"tds" : {
					"zsxmDm" : {
						"value" : ""
					},
					"zspmDm" : {
						"value" : ""
					},
					"skssqq" : {
						"value" : ""
					},
					"skssqz" : {
						"value" : ""
					},
					"ynse" : {
						"value" : ""
					},
					"yjse" : {
						"value" : ""
					}
				}
			} ]
		};
		  for( var i = 0, j = 0; i < fjsfsbxxGrid.trs.length; i++, j++){
			  gridDataObj.trs[j] = fjsfsbxxGrid.trs[i];
			gridDataObj.trs[j].tds["zsxmDm"] = {
				value : fjsfsbxxGrid.trs[i].tds.zsxmDm.value
			};
			gridDataObj.trs[j].tds["zspmDm"] = {
				value : fjsfsbxxGrid.trs[i].tds.zspmDm.value
			};
			gridDataObj.trs[j].tds["skssqq"] = {
				value : $w("nsrxxForm").getValue("skssqq")
			};
			gridDataObj.trs[j].tds["skssqz"] = {
				value : $w("nsrxxForm").getValue("skssqz")
			};
			gridDataObj.trs[j].tds["ynse"] = {
				value : fjsfsbxxGrid.trs[i].tds.bqynsfe.value
			};
			gridDataObj.trs[j].tds["yjse"] = {
				value : fjsfsbxxGrid.trs[i].tds.bqyjse.value
			};
		  }
		  var kstlBtn = new SwordSubmit();
		  kstlBtn.setCtrl("SBGyCtrl_openkdqsssrfpFb");
		  kstlBtn.pushData(gridDataObj);
		  var djXh = nsrxxVO['djxh'];
		  if (cwgzbz == 'cwgzbz') {// 错误更正
			  kstlBtn.pushData("djxh",djxh);// 要把登记序号传过来 。SBGyCtrl里没有地方取到这个值。
		  }else{
			  kstlBtn.pushData("djxh",nsrxxVO['djxh']);
		  }
		 
		  swordAlertIframe('', {
		  titleName : "跨地区税收收入分配表",
		  width :1000,
		  height : 800,
		  param : window,
		  isNormal : 'true',
		  isMax : 'true',
		  isClose : 'true',
		  isMin : "true",
		  submit : kstlBtn
		  });

		  
	  }else{
		  sbbSavejx();
	  }
		
}

function  sbbSavejx(){
	var djXh = nsrxxVO['djxh'];
	var saveBtn = new SwordSubmit();
	saveBtn.pushData($w("nsrxxForm").getSubmitData());
	saveBtn.pushData("zxbztzsuuid",gt3.zxbztzsuuid);
	saveBtn.pushData($w("fjsfsbxxGrid").getAllNoDeleteGridData());
	saveBtn.pushData($w("sfxxForm").getSubmitData());
	saveBtn.pushData("djxh", gt3.djxh);
	// 添加油气田附表数据
	var yqtfpGrid = null;
	if(yqtfbopen){
		try{
			yqtfpGrid = $("yqtfb_iframe").contentWindow.$w("yqtfpGrid").getAllNoDeleteGridData();
		}catch(e){
			
		}
	}else{
		yqtfpGrid = _arrVars_NOywpt['yqtfpGrid'];
	}
	saveBtn.pushData(yqtfpGrid);
	if (cwgzbz == 'cwgzbz') {// 错误更正
			saveBtn.pushData('cwgzbz', cwgzbz);// 错误更正标志
			saveBtn.pushData('djxh', djxh);
			saveBtn.pushData('pzxh', pzxh);
			saveBtn.pushData('sbuuid', sbuuid);
			saveBtn.pushData('yzpzzlDm', yzpzzlDm);
			saveBtn.pushData('sblxDm', sblxDm);
			saveBtn.pushData('sbrq1', sbrq1);
			saveBtn.pushData(sbbList);// 错误更正原始表单数据
			if(sbcwgzJs!='sbcwgzJs'){
				saveBtn.pushData("sbcwgzJs",'sbcwgzJs');	
			}else{
				saveBtn.pushData("sbcwgzJs",'sbcwgzSv');
			}
			saveBtn.setCtrl(ctrl+"_cwgzSave");
		} else {
	        saveBtn.setCtrl(ctrl + "_saveSbxxData");
	}
	saveBtn.setFunction('onSuccess', 'saveOnSuccess');
	saveBtn.setFunction("onError", "saveError");
	$w('sbToolBar').setDisabled('save');
	saveBtn.submit();

}


function saveError(req,res){
	$w('sbToolBar').setEnabled('save');
}
function saveOnSuccess(req, resData) {
	// afterSaveSuc(resData); 此处要考虑是否跳转征收开票，尚未实现，后续统一处理
	var sbsaveReturnVO = pc.getResData("sbsaveReturnVO", resData);
	var returnBz = sbsaveReturnVO.data.returnBz.value;
	var pzxh = sbsaveReturnVO.data.pzxh.value;
	yzpzxh = pzxh;
	var djxh = resData.getAttr("djxh");
	sbcwgzJs=resData.getAttr('sbcwgzJs');
	
	var swjgDm = pc.getResData("swjgDm", resData).value;
	var nsrxxFrom = $w("nsrxxForm");
	var flzlGridData = $w('flzlGrid').getCheckedData("check");
	if('cwgzbz'!=cwgzbz){
		saveSxslxx(pzxh, djxh, nsrxxFrom.getValue("nsrsbh"), nsrxxFrom.getValue("nsrmc"), "SLSXA061001014", "LCSXA061001014", swjgDm, flzlGridData);
	}
	if(sbcwgzJs =='sbcwgzJs'){
		var pzxhPre = sbsaveReturnVO.data.pzxh.value;
		var ybtse = sbsaveReturnVO.data.ybtse.value;
		sbcwgzGyjs(pzxhPre,ybtse,djxh,resData,'save',null);
	}
	else{
		if (returnBz == "Y") {
			var pzxh = sbsaveReturnVO.data.pzxh.value;
			var ybtse = sbsaveReturnVO.data.ybtse.value;
			fromYbSBJumpZskp(pzxh, ybtse, djxh, resData);
			$w("sbToolBar").setEnabled('print');
			$w("sbToolBar").setEnabled('printHz');
		}
	}	
	
// if (pzxh != "") {
// var pzxh = sbsaveReturnVO.data.pzxh.value;
// var ybtse = sbsaveReturnVO.data.ybtse.value;
// fromYbSBJumpZskp(pzxh, ybtse, djxh, resData);
// }
}

/**
 * 申报错误更正不保存
 * 
 * @return
 */
function sbcwgzNotSave(){
	sbcwgzJs='';// 清空
	$w('sbToolBar').setEnabled('save');// 点亮保存按钮
}
function notJumpZskp($_saveResData) {

}
function noZskp() {
		var nsrxxForm = $w('nsrxxForm');
		nsrxxForm.disable(['sbrq','skssqq','skssqz']);
		$w('bcBtn').disabled();
		$w('drBtn').disabled();
		$w('qxBtn').disabled();

	}
function yesZskp() {
		var yzpzxhList = pc.getResData("yzpzxhList",sb246_resDataOnSave);
		var djxh = pc.getResData("djxh",sb246_resDataOnSave);
		var zskpBtn = $w("zskpBtn");
// alert(JSON.encode(yzpzxhList));
		zskpBtn.pushData(yzpzxhList);
		zskpBtn.pushData(djxh);
		zskpBtn.setTid("PBS_ZS040_initViewBysb");
		zskpBtn.submit();
// swordAlert("一般征收开票");
	}
function saveSuccess(req,resData){
	sb246_resDataOnSave = resData;// 这里面包括征收开票，附加税的信息
	// 判断是否从申报错误更正进去
	if(sb246_cszForXML=="SBCWGZ"){// 时申报错误更正
		var reCode = pc.getResData("reCode",sb246_resDataOnSave);
		if(reCode==null||reCode==undefined||reCode==""||reCode.value=="01"){
			swordAlert("因为该税款处于已开票未入库状态，不允许更正！");
			$w('bcBtn').disabled();
			$w('drBtn').disabled();
			$w('qxBtn').disabled();
			return;
		}else if(reCode.value=="02"){
			swordAlert("保存成功！", {
				onClose : function() {
					swordConfirm("是否进行一般征收开票？", {
						okBtnName : "是",
						cancelBtnName : "否",
						onOk : yesZskp,
						onError : noZskp
					});
				}
			});
			
		}else if(reCode.value=="03"){
			swordAlert("纳税人应申请退抵税（费）审批！");
			$w('bcBtn').disabled();
			$w('drBtn').disabled();
			$w('qxBtn').disabled();
		}else {
			swordAlert("保存成功!");
			$w('bcBtn').disabled();
			$w('drBtn').disabled();
			$w('qxBtn').disabled();
		}
	}else{
		$w('bcBtn').disabled();
		sb246_saveOnSuccess = resData;
			// 是否由主税页面进入
		if(is_zstz){
			// 保存后调用主页面的函数，关闭当前页
			var yzpzxhList = pc.getResData("yzpzxhList", resData);
			var box = this.parent[this.name];
			box.options.param.fbPutPzxh(JSON.encode(yzpzxhList));
			swordAlert("保存成功！", {
				onClose : function() {
					box.close();
				}
			});
		} else {
			swordAlert("保存成功！", {
				onClose : bcbgTrue
			});// 判断税源申报明细报告
		}
	}
}
/**
 * 税源明细报告
 * 
 * @return
 */
function bcbgTrue() {
	var sysbbz = pc.getResData("sysbbz", sb246_saveOnSuccess);
	var ybtse = sb246_saveOnSuccess.getAttr("ybtse")/1;
	if(ybtse>0){
		if(sysbbz==undefined||sysbbz==null||sysbbz==""){
			ybzskp();// 直接跳一般征收开票
		}else{
			var yzpzxhList =  pc.getResData("yzpzxhList", sb246_saveOnSuccess);
			var nsrxxForm = $w('nsrxxForm').getSubmitData();
			
			var symxbgBtn=new SwordSubmit();
			symxbgBtn.pushData("cs","sbtz");
			symxbgBtn.pushData(yzpzxhList);
			symxbgBtn.pushData(nsrxxForm);
			symxbgBtn.setTid("PBS_SB147_init");
			swordAlertIframe('', {
			titleName : "税源明细报告",
			width : 800,
				height : 400,
				param : window,
				isNormal : 'true',
				isMax : 'true',
				isClose : 'true',
				isMin : "true",
				submit : symxbgBtn,
				onClose : ybzskp
			});
		}
	}else{
		ybzskp();// 直接跳一般征收开票
	}
}

// /**
// * 税源申报明细报告
// */
// function sysbmxBg(){
// if(sb246_sysbbz=="Y"){
// swordConfirm("是否进行税源明细报告？",{okBtnName:"是",cancelBtnName:"否",onOk:function(){ybzskp();}
// ,onCancel:ybzskp
// });
// }else{
// ybzskp();
// }
//	
// }
/**
 * 一般征收开票
 * 
 * @return
 */
function ybzskp() {
	var resData = sb246_saveOnSuccess;
	$w('bcBtn').disabled();
	// if(resData.getAttr("yzsjbhbz")){
	// swordConfirm("是否要进行税源申报明细信息的补充报告？",{okBtnName:"是",cancelBtnName:"否",
	// onOk : function(){
	// //调用税源申报明细信息报告
	// },
	// onCancel : function(){}});
	// }

	if (resData.getAttr("ybtse") / 1 < 0) {
		swordAlert("纳税人应申请办理退抵税（费）审批!");
	} else if (resData.getAttr("ybtse") / 1 >= 1.0) {
		swordConfirm("是否进行一般征收开票？", {
			okBtnName : "是",
			cancelBtnName : "否",
			onOk : function() {
				// 调用一般征收开票页面
				var yzpzxhList = pc.getResData("yzpzxhList", sb246_saveOnSuccess);
				var djxh = pc.getResData("djxh", sb246_saveOnSuccess);
				var zskpBtn = $w("zskpBtn");

				zskpBtn.pushData(yzpzxhList);
				zskpBtn.pushData(djxh);
				zskpBtn.setTid("PBS_ZS040_initViewBysb");
				zskpBtn.submit();
			},
			onCancel : function() {
			}
		});
	}
}

function sbxximport() {

}

function reset() {
	sb014_reset([ "fjsfsbxxGrid" ]);
	$w("bcBtn").enabled();
	$w("drBtn").enabled();

	initGo();
}

function tcExit() {
	window.parent.window.close();
}

// 表格列之间相乘（*）
// function jisuan1(realvalue,showvalue,rowData,cellEl,rowEl,oldValue){
// var cswghsssbGrid = $w('fjsfsbxxGrid');
// swordAlert("1");
// // var ynse =rowData.getValue('sl1')/1 * (rowData.getValue('jsyj')/1);
// // var ynse
// //
// =(rowData.getValue('sl1')/1).multiple(rowData.getValue('jsyj')/1).round(2);
// //ZOG00_201606020036 保留2位小数 2016-06-02 begin
// //ZOG00_201605200034 附加税申报金额保留6位小数 2016-05-20 begin
// var ynse =(rowData.getValue('sl1')/1).multiple(realvalue).round(2);
// // var ynse =(rowData.getValue('sl1')/1).multiple(realvalue).round(6);
// //ZOG00_201605200034 附加税申报金额保留6位小数 2016-05-20 end
// //ZOG00_201606020036 保留2位小数 2016-06-02 end
// // var se =ynse - (rowData.getValue('jmse')/1) -
// (rowData.getValue('yjse1')/1);
// var se
// =ynse.subtract(rowData.getValue('jmse')/1).subtract(rowData.getValue('yjse1')/1);
// if(se<0){
// se = 0.00;
// }else{
// se =se.round(2);
// }
// var data = {tds:{"bqynse":{value:ynse},"bqybtse":{value:se}}};
// cswghsssbGrid.updateRow(rowEl, data);
// $w('fjsfsbxxGrid').refreshConsole();
// }
// 表格列之间相减（-）
// function jisuan2(realvalue,showvalue,rowData,cellEl,rowEl,oldValue){
//	
// var cswghsssbGrid = $w('fjsfsbxxGrid');
// // 获取页面显示原始本期已缴税额值
// var yscjYjze = rowData.tds.yjse1.originValue;
// var xzcjYjze = rowData.getValue('yjse1');
// var rowNum = cswghsssbGrid.getRealRowNum(rowEl)/1+1;
// if ((yscjYjze / 1) < (xzcjYjze / 1)) {
// swordAlert("输入的已缴税额值大于原初始化的已缴税额值" + yscjYjze + "，请重新输入！",{onOk:function(){
// cswghsssbGrid.setCellFocus(rowNum, "yjse1");
// }});
// return;
// }
//	
//	
// // var rowEl = cswghsssbGrid.getCheckedRow();
// var rowData = cswghsssbGrid.getCheckedRowData();
// // var se =rowData.getValue('ynse')/1 - (rowData.getValue('jmse')/1) -
// // (rowData.getValue('yjse1')/1);
// var se
// =(rowData.getValue('bqynse')/1).subtract(rowData.getValue('jmse')/1).subtract(rowData.getValue('yjse1')/1);
// if(se < 0){
// se = 0.00;
// }
// else{
// se =se.round(2);
// }
// var data = {tds:{"bqybtse":{value:se}}};
// cswghsssbGrid.updateRow(rowEl, data);
// // $w('sbxxGrid').refreshConsole();
// }

/**
 * 减免税额不能大于应补退税额
 * 
 * @return
 */
function checkJmAndYnse(){
	var sbxxGrid = $w("fjsfsbxxGrid");
	var allData = sbxxGrid.getCurPageGridData();
	if(allData!=null&&allData!=undefined&&allData!=""){
		var allDataTrs = allData.trs;
		var length = allDataTrs.length;
		for(var i=0;i<length;i++){
			var jmse = allDataTrs[i].tds.jmse.value/1;
			var ynse = allDataTrs[i].tds.ynse.value/1;
			if(ynse<jmse){
				swordAlert("应纳税额不能小于减免税额");
				return false;
			}
		}
	}else{
		return false;
	}
	return true;
}

/**
 * 同税种同税目预缴税额判断
 * 
 * @return
 */
function yjseJudge(){
	var yjse1Array = new Array();
	var sbxxData = sb246_sbxxList.trs;
	var length = sbxxData.length;
	for(var i=0;i<length;i++){
		var zspmDm = sbxxData[i].tds.zspmDm.value;
		if(yjse1Array[zspmDm]==null||yjse1Array[zspmDm]==undefined||yjse1Array[zspmDm]==""){
			yjse1Array[zspmDm]=sbxxData[i].tds.yjse1.value/1;
		}else{
// yjse1Array[zspmDm]+=sbxxData[i].tds.yjse1.value/1;
			yjse1Array[zspmDm]=(yjse1Array[zspmDm]).accAdd(sbxxData[i].tds.yjse1.value/1);
		}
	}
	for(var i=0;i<length;i++){
		var zspmDm = sbxxData[i].tds.zspmDm.value;
		var yjze = sbxxData[i].tds.yjze.value/1;
		if(yjse1Array[zspmDm]>yjze){
// swordAlert("录入的已缴税额不正确!"+yjze);
// return false;
		}
	}
	return true;
}

/**
 * 同税种同税目预缴税额判断
 * 
 * @return
 */
function yjseJudgeFor(){
	var yjse1Array = new Array();
	var sbxxGrid = $w("fjsfsbxxGrid");
	var allData = sbxxGrid.getCurPageGridData();
	var sbxxData = allData.trs;
	
	var length = sbxxData.length;
	for(var i=0;i<length;i++){
		var zspmDm = sbxxData[i].tds.zspmDm.value;
		if(yjse1Array[zspmDm]==null||yjse1Array[zspmDm]==undefined||yjse1Array[zspmDm]==""){
			yjse1Array[zspmDm]=sbxxData[i].tds.yjse1.value/1;
		}else{
// yjse1Array[zspmDm]+=sbxxData[i].tds.yjse1.value/1;
			yjse1Array[zspmDm]=(yjse1Array[zspmDm]).accAdd(sbxxData[i].tds.yjse1.value/1);
		}
	}
	
	
	sbxxData = sb246_sbxxList.trs;
	for(var i=0;i<length;i++){
		var zspmDm = sbxxData[i].tds.zspmDm.value;
		var yjze = sbxxData[i].tds.yjze.value/1;
		if(yjse1Array[zspmDm]>yjze){
// swordAlert("录入的已缴税额不正确!"+yjze);
// return false;
		}
	}
	return true;
}


var sb246_cszForXML;
function boxCallBackForSBdr(resData) {
	sb246_cszForXML = resData.getAttr("cszForXML");// xml的参数值
	if (sb246_cszForXML == "SBDR") {// 导入
		XMLForSBDR(resData);

	}
}

/**
 * 申报导入，要求所有的button都亮着
 * 
 * @param resData
 * @return
 */
var fbXMLData = {};// xml全局对象
var sb246_resDataXMLForSBDR;// xml导入全局对象
function XMLForSBDR(resData) {
	sb246_resDataXMLForSBDR = JSON.encode(resData);
	fbXMLData["nsrxxForm"] = pc.getResData("nsrxxForm",resData);
	$w("nsrxxForm").initData(fbXMLData["nsrxxForm"]);
	$w("nsrxxForm").disable();
	
	fbXMLData["sfxxForm"] = pc.getResData("sfxxForm", resData);
	$w("sfxxForm").initData(fbXMLData["sfxxForm"]);
	$w("sfxxForm").disable();
	
	fbXMLData["fjsfsbxxGrid"] = pc.getResData("fjsfsbxxGrid", resData);
	$w("fjsfsbxxGrid").initData(fbXMLData["fjsfsbxxGrid"]);
	$w("sbToolBar").setEnabled('save');
	/*
	 * for ( var i = 0; i < fbXMLData["sbxxGrid"].trs.length; i++) { var
	 * sbxxGrid = $w("sbxxGrid"); var rows = sbxxGrid.dataDiv().getChildren();
	 * rows.each(function(row, index) { if
	 * ((fbXMLData["sbxxGrid"]).trs[i].tds.zspmDm.value==row.getCell('zspmDm').get("text")) {
	 * sbxxGrid.updateCell(row.getCell('jsyj'),
	 * (fbXMLData["sbxxGrid"]).trs[i].tds.jsyj.value,
	 * (fbXMLData["sbxxGrid"]).trs[i].tds.jsyj.value);
	 * sbxxGrid.updateCell(row.getCell('sl1'),
	 * (fbXMLData["sbxxGrid"]).trs[i].tds.sl1.value,
	 * (fbXMLData["sbxxGrid"]).trs[i].tds.sl1.value);
	 * sbxxGrid.updateCell(row.getCell('ynse'),
	 * (fbXMLData["sbxxGrid"]).trs[i].tds.ynse.value,
	 * (fbXMLData["sbxxGrid"]).trs[i].tds.ynse.value);
	 * sbxxGrid.updateCell(row.getCell('jmse'),
	 * (fbXMLData["sbxxGrid"]).trs[i].tds.jmse.value,
	 * (fbXMLData["sbxxGrid"]).trs[i].tds.jmse.value);
	 * sbxxGrid.updateCell(row.getCell('yjse1'),
	 * (fbXMLData["sbxxGrid"]).trs[i].tds.yjse1.value,
	 * (fbXMLData["sbxxGrid"]).trs[i].tds.yjse1.value);
	 * sbxxGrid.updateCell(row.getCell('ybtse'),
	 * (fbXMLData["sbxxGrid"]).trs[i].tds.ybtse.value,
	 * (fbXMLData["sbxxGrid"]).trs[i].tds.ybtse.value); } }) }
	 */

}

// 增行
var i=1;
function addRowCheck() {
	var sbxxGrid = $w("fjsfsbxxGrid");
	var dataObj = {
			"tds" : {
				"sl1" : {
					"value" : "0.00"
				},
				"jmse" : {
					"value" : "0.00"
				},
				"yjse1" : {
					"value" : "0.00"
				},
				"rdpzuuid" :{
					"value" :i 
				}
			}
		};
	sbxxGrid.insertRow(dataObj);
	i=i+1;
}

// 获取费率
function onChangeZspm(option, selItem) {
	  var grid = $w('fjsfsbxxGrid');
	  var row = grid.getCheckedRow();
	  if(!$chk(selItem) || !$chk(selItem.code)){
		  return;
	  }
	  var sl1 = selItem.sl1;
	  var zszsxmDm = selItem.zszsxmDm;
	  var data = {
	    tds: {
			sl1 : {
				value : sl1
			},
			ybzzs : {
				value : 0.0
			},
			zzsmdse : {
				value : 0.0
			},
			xfs : {
				value : 0.0
			},
			yys : {
				value : 0.0
			},
			hj : {
				value : 0.0
			},
			bqynsfe : {
				value : 0.0
			},
			jmxzDm : {
				value : ""
			},
			jme : {
				value : 0.0
			},
			bqyjse : {
				value : 0.0
			},
			yhjmse : {
				value : 0.0
			},
			bqybtse : {
				value : 0.0
			},
			jmzlxDm : {
				value : ""
			},
			jmsl : {
				value : 0.0
			},
			jmed : {
				value : 0.0
			},
			jmfd : {
				value : 0.0
			},
			zszsxmDm : {
				value : zszsxmDm
			}
		}
	};
	  grid.updateRow(row, data);
	  // 处理计税依据的录入
	  handleJsyjEdit(row, zszsxmDm);
}

// 删除行
function deleteGrid(){
	var row=$w('fjsfsbxxGrid').getCheckedRow(); 
	if(row==null ||row==undefined){   
	       swordAlert('请先选择要删除的行');   
	       return ;   
	    }  
	pc.getWidget('fjsfsbxxGrid').deleteRow(row);     
}

/*******************************************************************************
 * 初始化表格
 */
function afterC() {
	var grid = $w('fjsfsbxxGrid'); // 需要多表头的表格
	grid.options.dataX = "100%";
	grid.options.sGrid_div.setStyle('width', "100%");
	grid.options.sGrid_header_div.setStyle('width', "1435px"); // 宽度是表格定义的宽度
	grid.options.sGrid_data_div.setStyle('width', "1435px");
	grid.options.showHeader = true;
	grid.options.headerY = "94"; // 会存在横向滚动条时 为 y+17 y为多表头的高度
	var pNodeArray = $$('div[type=SwordGridHeader]');
	pNodeArray.each(function(item, index) {
				var grid = $w(item.get('bindGrid'));
				item.inject(grid.options.sGrid_header_div, 'after');
				var h = grid.scrollDiv.getHeight();
				var hs = item.getHeight();
				grid.scrollDiv.setStyle('height', h + hs + 17); // 会存在横向滚动条时 +17
				item.setStyle('border-top', '0');
				item.setStyle('border-left', '0');
			});
}

function pljisuan(jsje,lx,zszsxmbz){
	var grid=$w('fjsfsbxxGrid');
	var rowsChilden=grid.dataDiv().getChildren('div[status!=delete]');
	var fjsfsbxxGrid = grid.getAllNoDeleteGridData();
	for(var i=0;i<fjsfsbxxGrid.trs.length;i++){
		var zszsxmDm = !$chk(fjsfsbxxGrid.trs[i].tds.zszsxmDm) ? "": fjsfsbxxGrid.trs[i].tds.zszsxmDm.value;
		if(zszsxmDm==zszsxmbz){
			jshyzszsxm(jsje,lx,grid,rowsChilden,fjsfsbxxGrid,i);
		}
	}
	
	//网报特色改造，内蒙地税小微企业地方教育附加减免提示
	xwqyJmts();
}


function jshyzszsxm(jsje,lx,grid,rowsChilden,fjsfsbxxGrid,i){
	var  ybzzs=0;
	if("1"==lx){
		ybzzs=jsje;
		var ybzzsCell=rowsChilden[i].getCell("ybzzs");
		grid.updateCell(ybzzsCell,ybzzs,ybzzs);
	}else{
		ybzzs=(fjsfsbxxGrid.trs[i].tds.ybzzs.value)/1;
	}
	var  zzsmdse=0;
	if("2"==lx){
		zzsmdse=jsje;
		var zzsmdseCell=rowsChilden[i].getCell("zzsmdse");
		grid.updateCell(zzsmdseCell,zzsmdse,zzsmdse);
	}else{
		zzsmdse=(fjsfsbxxGrid.trs[i].tds.zzsmdse.value)/1;
	}
   
	var  xfs=0;
	if("3"==lx){
		xfs=jsje;
		var xfsCell=rowsChilden[i].getCell("xfs");
		grid.updateCell(xfsCell,xfs,xfs);
	}else{
		xfs=(fjsfsbxxGrid.trs[i].tds.xfs.value)/1;
	}
	var yys=0.0;
	if("4"==lx){
		yys=jsje;
		var yysCell=rowsChilden[i].getCell("yys");
		grid.updateCell(yysCell,yys,yys);
	}else{
		yys=(fjsfsbxxGrid.trs[i].tds.yys.value)/1;
	}
	
	var sl1=fjsfsbxxGrid.trs[i].tds.sl1.value;
	var bqyjse=fjsfsbxxGrid.trs[i].tds.bqyjse.value;
	var jme=fjsfsbxxGrid.trs[i].tds.jme.value;
	var bqybtse=fjsfsbxxGrid.trs[i].tds.bqybtse.value;
	var hjje=((ybzzs/1).accAdd(zzsmdse/1).accAdd(xfs/1).accAdd(yys/1));
	var ynse = hjje.multiple(sl1/1).round(2);
	// var bqybtse=(ynse-(jme/1)-(bqyjse/1)).round(2);
	var bqybtse=(((ynse).subtract(jme/1)).subtract(bqyjse/1)).round(2);	// 网报修改
	var hjCell=rowsChilden[i].getCell("hj");
	var bqynsfeCell=rowsChilden[i].getCell("bqynsfe");
	var bqybtseCell=rowsChilden[i].getCell("bqybtse");
	grid.updateCell(hjCell,hjje,hjje);
	grid.updateCell(bqynsfeCell,ynse,ynse);
	grid.updateCell(bqybtseCell,bqybtse,bqybtse);
}

function jisuanybzzs(realvalue, showvalue, rowData, el, row, srcRealvalue){
	if("Y"==sfzddc){
		var ybzzs=rowData.getValue('ybzzs')/1;
		var zszsxmDm=rowData.getValue('zszsxmDm');
		pljisuan(ybzzs,"1",zszsxmDm);
	}else{
		jisuan1(realvalue, showvalue, rowData, el, row, srcRealvalue);
	}
	
}

function jisuanzzsmdse(realvalue, showvalue, rowData, el, row, srcRealvalue){
	if("Y"==sfzddc){
		var zzsmdse=rowData.getValue('zzsmdse')/1;
		var zszsxmDm=rowData.getValue('zszsxmDm');
		pljisuan(zzsmdse,"2",zszsxmDm);
	}else{
		jisuan1(realvalue, showvalue, rowData, el, row, srcRealvalue);
	}
}


function jisuanxfs(realvalue, showvalue, rowData, el, row, srcRealvalue){
	if("Y"==sfzddc){
		var xfs=rowData.getValue('xfs')/1;
		var zszsxmDm=rowData.getValue('zszsxmDm');
		pljisuan(xfs,"3",zszsxmDm);
	}else{
		jisuan1(realvalue, showvalue, rowData, el, row, srcRealvalue);
	}
}

function jisuanyys(realvalue, showvalue, rowData, el, row, srcRealvalue){
	if("Y"==sfzddc){
		var yys=rowData.getValue('yys')/1;
		var zszsxmDm=rowData.getValue('zszsxmDm');
		pljisuan(yys,"4",zszsxmDm);
	}else{
		jisuan1(realvalue, showvalue, rowData, el, row, srcRealvalue);
	}
}
// 计算本期应纳税（费）额与计税依据合计
function jisuan1(realvalue, showvalue, rowData, el, row, srcRealvalue) {
	var data;
	var grid = $w('fjsfsbxxGrid');// 表格对象
	var ybzzs=rowData.getValue('ybzzs');
	var zzsmdse=rowData.getValue('zzsmdse');
	var xfs=rowData.getValue('xfs');
	var yys=rowData.getValue('yys');
	var sl1=rowData.getValue('sl1');
	var hjje=ybzzs.accAdd(zzsmdse).accAdd(xfs).accAdd(yys);
	// ZOG00_201606020036 保留2位小数 2016-06-02 begin
	// ZOG00_201605200034 附加税申报金额保留6位小数 2016-05-20 begin
	var se = hjje.multiple(rowData.getValue('sl1') / 1).round(2);
// var se = hjje.multiple(rowData.getValue('sl1') / 1).round(6);
	// ZOG00_201605200034 附加税申报金额保留6位小数 2016-05-20 end
	// ZOG00_201606020036 保留2位小数 2016-06-02 end
		data = {
			"tds" : {
			"hj" : {
				"value" : hjje
				},
				"bqynsfe" : {
					"value" : se
				}
			}
		};
	grid.updateRow(row, data);
	jisuan2("", "", rowData, el, row, srcRealvalue);
	changysyj(grid,rowData,row,hjje);
}
// 计算本期应补（退）税（费）额
function jisuan2(realvalue, showvalue, rowDataCR, el, row, srcRealvalue) {
	
	var rowData = $w('fjsfsbxxGrid').getCheckedRowData();
	var data;
	var grid = $w('fjsfsbxxGrid');// 表格对象
	var jsyj = rowData.getValue('hj') / 1;
	var ysx = rowData.getValue('hj') / 1;
	var hdjsyj = rowData.getValue('hdjsyj') / 1;
	var sl1 = rowData.getValue('sl1') / 1;
	var jme = rowData.getValue('jme') / 1;
	var yjse = rowData.getValue('bqyjse') / 1;
	var zsxmDm = rowData.getValue('zsxmDm');
	var zspmDm = rowData.getValue('zspmDm');
	var bqynsfe=rowData.getValue('bqynsfe');
	var bqyjse=rowData.getValue('bqyjse');
	/*暂不监控，需求上没有监控本期已缴税额
	var ysbse = rowData.getValue('ysbse') / 1; // 已申报金额
	var yjse1 = rowData.getValue('yjse1') / 1; // 预缴金额
	var yjhj = ysbse.accAdd(yjse1);
	if (yjse < ysbse) {
		swordAlertWrong("本期已缴税额必须大于等于本期已申报税额（ " + ysbse + "）!");
		yjse = ysbse;
	} else if (yjse > yjhj) {
		swordAlertWrong("本期已缴税额不能大于本期已申报税额和本期预缴税额之和（" + yjhj + "）!");
		yjse = yjhj;
	}*/
	
	var ybtse = rowData.getValue('bqybtse');
	var skssqq = $w("nsrxxForm").getValue("skssqq");// 税款所属期起
	var skssqz = $w("nsrxxForm").getValue("skssqz");// 税款所属期止
	var arr = processTsjmxx(djxh,zsxmDm,zspmDm,skssqq,skssqz,jsyj,ysx,jsyj.multiple(sl1).round(2),jme,yjse,ybtse,sl1);
	jme = arr[0];
	yjse = arr[1];
	
	// 网报增加逻辑，计算预缴的过程 // 2016-12-20ZOG00_201612140014网报调整
	// ZOG00_201704170017 大连提示要求不进行判断
	if(isCheckYjskxx=="Y"){
		yjse = jisuanyjse(yjse,rowData,el);
		if((bqynsfe).subtract(jme).subtract(yjse)<0){
			if(bqynsfe.subtract(yjse)>0){
				jme = bqynsfe.subtract(yjse);
			}
		}
	}

	var bqybtse=((bqynsfe).subtract(jme).subtract(yjse)).round(2);
	if(bqybtse<0){
		// bqybtse=0.0;
// swordAlert("已缴税额不能大于应纳税额!");
		data1 = {
				"tds" : {
			        "jme" : {
						"value" : jme
					},
					"bqyjse" : {
						"value" : yjse
					},
					"bqybtse" : {
							"value" : bqybtse
						}
				}
			};
		grid.updateRow(row, data1);
		return;
	}
	data2 = {
			"tds" : {
			        "jme" : {
						"value" : jme
					},
					"bqyjse" : {
						"value" : yjse
					},
					"bqybtse" : {
							"value" : bqybtse
						}
				}
			};
	grid.updateRow(row, data2);
	
	//网报特色改造，内蒙地税小微企业地方教育附加减免提示
	xwqyJmts();
}

//网报特色改造，内蒙地税小微企业地方教育附加减免提示
function xwqyJmts(){
	debugger;
	var dfjyfjbz = "N";
	var grid=$w('fjsfsbxxGrid');
	var fjsfsbxxGrid = grid.getAllNoDeleteGridData();
	var ysr = null;
	var skssqq = $w("nsrxxForm").getValue("skssqq");
	var skssqz = $w("nsrxxForm").getValue("skssqz");
	var yfkd = getMonths(skssqq, skssqz);
	for(var i=0;i<fjsfsbxxGrid.trs.length;i++){
		var zsxmDm = fjsfsbxxGrid.trs[i].tds.zsxmDm.value;
		var zspmDm = fjsfsbxxGrid.trs[i].tds.zspmDm.value;
		var jmxzDm = fjsfsbxxGrid.trs[i].tds.jmxzDm == null ? "" : fjsfsbxxGrid.trs[i].tds.jmxzDm.value;
		var ybtse = fjsfsbxxGrid.trs[i].tds.bqybtse.value;
		if(("30216" == zsxmDm||"30203" == zsxmDm||"302210400" == zspmDm) && (jmxzDm == null || jmxzDm == "") && "Y" == dfjyfjJmtskg && ybtse > 0){
			var jsyj = fjsfsbxxGrid.trs[i].tds.hj.value;
			ysr = accDiv(jsyj, yfkd);
			dfjyfjbz = "Y";
			break;
		}
	}
	if("Y" == dfjyfjbz){
		queryDjhglxx();
		if("Y" == xwqybz){
			swordAlert("您属于小型企业/微型企业，享受地方教育费附加/教育费附加/地方水利建设基金减免，请在“减免性质代码”中选择“0099129999︱小微企业免征地方教育附加︱其他”");
		}
	}
}

//网报特色改造，内蒙地税小微企业地方教育附加减免提示
function getMonths(skssqq, skssqz){
	var yfkd = 1;
	if((!$chk(skssqq) || "" == skssqq) || (!$chk(skssqz) || "" == skssqz)){
		return yfkd;
	}
	var date1 = skssqq.split("-");
    var date2 = skssqz.split("-"); 
    // 获取年,月数
    var year1 = parseInt(date1[0], 10);  
    var month1 = parseInt(date1[1], 10); 
    var year2 = parseInt(date2[0], 10);
    var month2 = parseInt(date2[1], 10); 
    // 通过年,月差计算月份差
    yfkd = (year2 - year1) * 12 + (month2 - month1) + 1; 
    return yfkd;
}

//网报特色改造，内蒙地税小微企业地方教育附加减免提示
function queryDjhglxx(){
	//查询纳税人登记户归类
	var skssqq = $w("nsrxxForm").getValue("skssqq");
	var skssqz = $w("nsrxxForm").getValue("skssqz");
	var djhgl = new SwordSubmit();
	djhgl.pushData("skssqq", skssqq);
	djhgl.pushData("skssqz", skssqz);
	djhgl.setCtrl("SBGyCtrl_getDjhglxx");
	djhgl.setFunction("onSuccess","djhglSuccess");
	djhgl.submit();
}
//网报特色改造，内蒙地税小微企业地方教育附加减免提示
function djhglSuccess(req, res){
	xwqybz = res.getAttr("xwqybz");
	wglbz = res.getAttr("wglbz");
}

// 减免信息操作
function jmje(realvalue, showvalue, rowData, el, row, srcRealvalue) {
	var jmxzDm=rowData.getValue("jmxzDm");
	var grid = $w('fjsfsbxxGrid');// 表格对象
	var jmse = rowData.tds.jme.value; // 网报调整 减免性质为空，减免金额改为0 不提示
	if (!$chk(jmxzDm) && jmse!=0) {
		swordAlert("请选择减免性质，再录入减免税额");
		grid.updateCell(row.getCell("jme"), "0.00");
		return;
	}
	if(jmse/1<=0){
		grid.updateCell(row.getCell("jmxzDm"), "");
// return;
	}
	
	var bqynsfe=rowData.getValue("bqynsfe");
	
	// ZOG00_201605200034 附加税申报金额保留6位小数 2016-05-20 begin
// if((jmse/1)>(bqynsfe/1)){
	if((jmse/1)>(bqynsfe/1).round(2)){
	// ZOG00_201605200034 附加税申报金额保留6位小数 2016-05-20 end
		jmse=0.0;
		 swordAlert("本期减免金额不能大于本期应纳税（费）额");
	}
	var yhjmse=rowData.getValue("yhjmse");
	if($chk(yhjmse)&&yhjmse/1>0){
		if(jmse>yhjmse){
			 swordAlert("本期减免金额不能大于减免性质自动带出的减免税额");
			 jmse=yhjmse;
		}
	}
	var bqyjse=rowData.getValue("bqyjse");
	var bqybtse=((bqynsfe/ 1).subtract(jmse / 1).subtract(bqyjse/1)).round(2);
// if(bqybtse<0){
// bqybtse=0.0;
// }
//	
	if(jmse>0){
		jmse=jmse.round(2);
	}
	var dataObj = {
			tds : {					
			    jme : {
					value : jmse
				},
				bqybtse:{
					value:bqybtse
				 }
			}
		};
	grid.updateRow(row,dataObj);
	
// // 获取页面显示原始本期已缴税额值
// var yscjYjze = rowData.tds.jme.originValue;
// var xzcjYjze = rowData.getValue('jme');
// var rowNum = grid.getRealRowNum(row)/1+1;
// /*
// * if ((yscjYjze / 1) < (xzcjYjze / 1)) {
// * swordAlert("输入的减免税额值大于原初始化的已减免的税额值" + yscjYjze +
// * "，请重新输入！",{onOk:function(){ grid.setCellFocus(rowNum, "jme"); }});
// * return; }
// */
// jisuan2("", "", rowData, el, row, srcRealvalue);
}

/**
 * 申报导入
 * 
 * @return
 */
function drxx(){
    var sbdrctrl = "SB246FjsfnssbCtrl"+"_getDrxx";
    var drxxBtn = new SwordSubmit();
    var djxh=djXh;
    if($chk(djxh)){
        drxxBtn.pushData('djxh', djxh);
    }
    drxxBtn.pushData('sbdrCtrl', sbdrctrl);
    drxxBtn.setCtrl('SBDrCtrl_openDr');
    swordAlertIframe('', {
        titleName: "申报信息导入",
        width: 600,
        height: 450,
        param: window,
        isNormal: 'true',
        isMax: 'true',
        isClose: 'true',
        isMin: "true",
        submit: drxxBtn
    });
}

function boxCallBackForSBdr(resData) {
	$_cshFlag=0;
	var nsrsl = resData.getAttr("nsrsl");
	var nsrsbh = resData.getAttr("nsrsbh");
	var nsrxxForm = $w("nsrxxForm");
	var nsrxxFormData = pc.getResData("nsrxxForm",resData);
	$w("nsrxxForm").initData(nsrxxFormData);
	var fjsfsbxxGrid = pc.getResData("fjsfsbxxGrid",resData);
	$w("fjsfsbxxGrid").initData(fjsfsbxxGrid);
	var sfxxForm = pc.getResData("sfxxForm",resData);
	$w("sfxxForm").initData(sfxxForm);
	$w("sbToolBar").setEnabled('save');
	$w("nsrxxForm").disable();
	$w("sfxxForm").disable();
	$w("fjsfsbxxGrid").readonly();
	gt3.drbz = "Y";
	if($chk(nsrsl) && nsrsl > 1){
		queryNsrxxbyNsrsbh(nsrsbh, queryNsrxxSuccessForDr,4);
	}else{
		gt3.djxh = resData.getAttr("djxh");

	}

}


function queryNsrxxSuccessForDr(nsrParam, zrrParam){

		var nsrxxForm = $w("nsrxxForm");
		if ((nsrParam == "" || nsrParam == null || nsrParam == undefined)
				&& (zrrParam == "" || zrrParam == null || zrrParam == undefined)) {
			swordAlert("未能根据当前纳税人识别号查询到当前纳税人基本数据信息，请重新输入！", {
				// 确定：所属期起获得焦点
					onOk : function() {
						(function() {
							nsrxxForm.getFieldEl("nsrsbh").focus();
						}).delay(500);
					}
				});
			$w("sbToolBar").setDisabled('save');
			return;
		}
		var nsrxxParam=null;
		if (nsrParam != "" && nsrParam != null && nsrParam != undefined) {
			nsrxxParam = nsrParam;
		} else if (zrrParam != "" && zrrParam != null && zrrParam != undefined) {
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
		nsrxxForm.setValue('nsrmc', nsrxxVO['nsrmc']);
		nsrxxJsonVO = JSON.encode(nsrxxVO);

		// 纳税人状态监控
		var nsrztDm = nsrxxVO.nsrztDm;
		var nsrztDm = nsrxxVO.nsrztDm;
		if (nsrztDm == "07") {
			swordAlert("纳税人为注销状态，请先办理重新税务登记！");
			
			return;
		} else if (nsrztDm == "04") {// 停业控制纳税人为停业状态且申报属期内全月停业,不允许进行申报
			// swordAlert("本纳税人在本属期内停业。");
			// nsrxxForm.disable('skssqz');
			// return;
		} else if (nsrztDm == "05") {
			swordAlert("纳税人处于非正常户状态，请进行非正常户解除，可继续进行申报！");
		} else if (nsrztDm == "06") {
			swordAlert("纳税人处于清算状态，可继续进行申报！");
		}

		 $w("sbToolBar").setEnabled('sl');
		 $w("sbToolBar").setEnabled('bysl');
		 $w("sbToolBar").setEnabled('bz');
		 $w("sbToolBar").setEnabled('save');
		 gt3.djxh=nsrxxVO.djxh;
}
/**
 * 过滤减免性质
 * 
 * @param dataObj
 * @param inputEl
 * @param obj
 * @return
 */
function jmxzFilter(dataObj, inputEl, obj){
	var jmxzList=[];
	var zsxmDm;
	var zspmDm;
	var rowData = $w("fjsfsbxxGrid").getCheckedRowData();
	if(!$chk(rowData) || rowData==null ||rowData == undefined){
		return dataObj;
	}else{		
		zspmDm = rowData.getValue("zspmDm");
		zsxmDm = rowData.getValue("zsxmDm");
	}	
	var queryBtn = new SwordSubmit();
	
	queryBtn.pushData("djxh", djxh);
	queryBtn.pushData("zsxmDm", zsxmDm);
	queryBtn.pushData("zspmDm", zspmDm);
	queryBtn.pushData("skssqq", $w("nsrxxForm").getValue("skssqq"));
	queryBtn.pushData("skssqz", $w("nsrxxForm").getValue("skssqz"));
	queryBtn.setOptions({
		async:'false',
		mask:'false',
		ctrl:'SBGyCtrl_setJmxzxx',
		onSuccess:function(req,res){
		    jmxzList=res.getDataByDataName("jmxzList").data;
		}
	});
	queryBtn.submit();
	return jmxzList;
}

// 减免性质变化(减免)-2015-5-20
function changeJmxz(option, selItem, obj) {
	var ssjmxzDm = selItem.code;
	var skxxGrid = $w('fjsfsbxxGrid');
	// 减免性质为空，清空减免税额
	var jmse=0.0;
	var yhjmse=0.0;
	var row = skxxGrid.getCheckedRow();
	var rowData = skxxGrid.getCheckedRowData();
	var bqynsfe = rowData.getValue("bqynsfe")/1;
	if($chk(ssjmxzDm) &&ssjmxzDm!='null' && ssjmxzDm!=undefined){
		var jsyj = rowData.getValue("hj");
		var fdsl = rowData.getValue("sl1");
		jmse = changeJmxzXXCl(selItem,skxxGrid,jsyj,bqynsfe,fdsl);
		
	}
	// ZOG00_201605200034 附加税申报金额保留6位小数 2016-05-20 begin
// if(jmse>(bqynsfe / 1)){
	if(jmse>(bqynsfe / 1).round(2)){
	// ZOG00_201605200034 附加税申报金额保留6位小数 2016-05-20 end
		jmse=0.0;
	}
	jmse=jmse.round(2);
	yhjmse=jmse;
	var bqybtse = (bqynsfe).subtract(jmse)
	.subtract(rowData.getValue('bqyjse') / 1);
	// ZOG00_201605200034 附加税申报金额保留6位小数 2016-05-20 begin
// if(bqybtse < 0){
// bqybtse = 0.0;
// }
	// ZOG00_201605200034 附加税申报金额保留6位小数 2016-05-20 end
	var dataObj = {
		tds : {					
		    jme : {
				value : jmse
			},
			bqybtse:{
				value:bqybtse
			},
			yhjmse:{
				value:yhjmse
			 }
		}
	};
	skxxGrid.updateRow(row,dataObj);
	 if($chk(selItem)){
		 pandSpbz(option, selItem, obj);
	 }
}

/**
 * 2015-5-20依据依据变化时减免税额的变化
 * 
 * @param skxxGrid
 * @param rowData
 * @param row
 * @param hjje
 * @return
 */
function changysyj(gridName,rowDatacr,row,hjje){
	var rowData = $w('fjsfsbxxGrid').getCheckedRowData();
	var fdsl=rowData.getValue("sl1");
	var bqynsfe=rowData.getValue("bqynsfe");
	var bqyjse=rowData.getValue("bqyjse");
	var jmse=getJsjmse(hjje/1,bqynsfe,fdsl,gridName);
	// ZOG00_201605200034 附加税申报金额保留6位小数 2016-05-20 begin
// if(jmse>(bqynsfe/1)){
	if(jmse>(bqynsfe/1).round(2)){
	// ZOG00_201605200034 附加税申报金额保留6位小数 2016-05-20 end
		jmse=0;
	}
	var bqybtse= (bqynsfe / 1).subtract(jmse / 1).subtract(bqyjse / 1).round(2);
	var dataObj = {
			tds : {					
		         jme : {
					value : jmse
				},
				bqybtse:{
					value:bqybtse
				},
				yhjmse:{
					value:jmse
				 }
			}
		};
	gridName.updateRow(row,dataObj);
}

/**
 * @description 处理行创建后的操作
 * 
 */
function createRow(rowData, rowEl, items, obj){
	var zszsxmDm = rowData.getValue("zszsxmDm");
	handleJsyjEdit(rowEl, zszsxmDm); 
}
/**
 * @description 根据主税征收项目处理可录入的计税依据
 */
function handleJsyjEdit(rowEl, zszsxmDm) {
	if ($chk(zszsxmDm) && "10103" == zszsxmDm) { // 营业税
		rowEl.disable('xfs');
		rowEl.disable('zzsmdse');
		rowEl.disable('ybzzs');
		
		rowEl.enable("yys");
	} else if($chk(zszsxmDm) && "10102" == zszsxmDm) { // 消费税
		rowEl.disable('yys');
		rowEl.disable('zzsmdse');
		rowEl.disable('ybzzs');
		
		rowEl.enable("xfs");
	} else if($chk(zszsxmDm) && "10101" == zszsxmDm) { // 增值税
		rowEl.disable('yys');
		rowEl.disable('xfs');
		
		rowEl.enable("zzsmdse");
		rowEl.enable("ybzzs");
	}
}


function fjssbPrint(){
	var printBtn =new SwordSubmit();
	var nsrxxForm =$w("nsrxxForm").getSubmitData();
	var fjsfsbxxGrid=$w("fjsfsbxxGrid").getAllNoDeleteGridData();
	var sfxxForm=$w("sfxxForm").getSubmitData();
	printBtn.pushData("djxh",gt3.djxh);
	printBtn.pushData(nsrxxForm);
	printBtn.pushData(fjsfsbxxGrid);
	printBtn.pushData("sfhxdy","Y");
	printBtn.pushData(sfxxForm);
	printBtn.setCtrl("SB246FjsfnssbCtrl_printFjssb");
	swordOpenWin('/sword?ctrl=SB246FjsfnssbCtrl_printFjssb&r=' + Math
			.random(), printBtn);
	printBtn.setFunction("onError","onErrorPrint");
	
	
}

function openGssbxx(){
	openGssbxxFords(gt3.djxh, $w('nsrxxForm').getValue("skssqq"),$w('nsrxxForm').getValue("skssqz"));
}

/**
 * 查询认定的纳税期限
 * 
 * @param type
 * @return
 */
function checkFjsRdInfo(type){
	gt3.type = type;
	gt3.nsqxList = "";
	gt3.uniqueNsqx = "";
	var submitBtn = new SwordSubmit();
	submitBtn.setCtrl("SB246FjsfnssbCtrl_queryFjsRdInfo");
	submitBtn.setFunction('zrrBz', gt3.zrrBz);
	submitBtn.setFunction('onSuccess', 'queryRdOnSuccess');
	submitBtn.pushData($w("nsrxxForm").getSubmitData());
	submitBtn.pushData('nsrxxVO', JSON.encode(JSON.decode(nsrxxJsonVO)));
	submitBtn.submit();
}



function queryRdOnSuccess(req, res){
	var rdFlag = res.getAttr("rdFlag");
	if(rdFlag == "1"){
		gt3.nsqxList = res.getData("nsqxList");
		var submitBtn = new SwordSubmit();
		submitBtn.setCtrl("SB246FjsfnssbCtrl_openNsqxPage");
		submitBtn.pushData(gt3.nsqxList);
		swordAlertIframe('', {
			titleName : '选择附加税（费）申报纳税期限',
			width : 500,
			height : 300,
			param : window,
			isNormal : 'true',
			isMax : 'true',
			isClose : 'false',
			isMin : "false",
			submit : submitBtn
		});
	}
	else{
		var nsrqxDm=res.getAttr("nsrqxDm");
		changeSbssqz(gt3.type);
	}
}

/**
 * 选择纳税期限回调
 * 
 * @param nsqxDm
 * @return
 */
function chooseNsqxCallBack(nsqxDm){
	gt3.uniqueNsqx = nsqxDm;
	if($chk(nsqxDm)){
//		changeSbssqz(gt3.type);
		// 网报调整
		fjsnsqxDm = nsqxDm;
		loadInitData();
	}
}
function  skssqzChangesdxg(){
	
	var skssqq=$w("nsrxxForm").getValue("skssqq");
	var skssqz=$w("nsrxxForm").getValue("skssqz");
	if(!$chk(skssqq)|| !$chk(skssqz)){
		return;
	}
	
	var qDates = splitStr(skssqq);
	var zDates = splitStr(skssqz);
	// 按次申报
	if((parseInt(qDates[0], 10)== parseInt(zDates[0], 10)) &&(parseInt(qDates[1], 10)== parseInt(zDates[1], 10))&&(parseInt(qDates[2], 10)== parseInt(zDates[2], 10)) ){
		fjsnsqxDm="11";
	}
	else{
		if(!checkSkssqqzForfjs(skssqq,skssqz)){
			$w("nsrxxForm").setValue("skssqz","");
			$w("sbToolBar").setDisabled('save');
			return;
		}
	}
	changeSbssqz();
}

var fjsnsqxDm="";// 2016-10-11
					// 网报修改初始化不默认申报期限按月，因为小规模纳税人按季很多，避免不友好的一进去就提示没有税费种认定
/**
 * 检查录入的所属期起止
 * 
 * @param skssqq
 * @param skssqq
 * @return
 */
function checkSkssqqzForfjs(skssqq,skssqz){
	var qDates = splitStr(skssqq);
	var zDates = splitStr(skssqz);
	if (qDates[0] != zDates[0]) {
		swordAlert("所属期起和所属期止必须在同一年！");
		fjsnsqxDm="";
		return false;
	}
	if (!((parseInt(qDates[1], 10) == 1 && parseInt(zDates[1], 10) == 3)
			|| (parseInt(qDates[1], 10) == 4 && parseInt(zDates[1], 10) == 6)
			|| (parseInt(qDates[1], 10) == 7 && parseInt(zDates[1], 10) == 9) || (parseInt(
			qDates[1], 10) == 10 && parseInt(zDates[1], 10) == 12))
			&& !((parseInt(qDates[1], 10) == 1 && parseInt(zDates[1], 10) == 6) || (parseInt(
					qDates[1], 10) == 7 && parseInt(zDates[1], 10) == 12))
			&& !((parseInt(qDates[1], 10) == 1 && parseInt(zDates[1], 10) == 12))
			&& parseInt(qDates[1], 10) != parseInt(zDates[1], 10)) {
		swordAlert("所属期不合法，必须为整年、半年、季或月！");
		fjsnsqxDm="";
		return false;
	}
    if(parseInt(qDates[1], 10) == parseInt(zDates[1], 10)){
	    if(parseInt(qDates[2], 10) != 1) {
			swordAlert("按月申报，所属期起必须为某月的第一天！");
			fjsnsqxDm="";
			return false;
		  }
		 if (monthDay(zDates[0], parseInt(zDates[1], 10)) != parseInt(zDates[2],
				10)) {
			swordAlert("按月申报，所属期止必须为某月的最后一天！");
			fjsnsqxDm="";
			return false;
		 }
		 fjsnsqxDm="06";
		 return true; 
	}
	// 按季申报
	if(((parseInt(qDates[1], 10) == 1 && parseInt(zDates[1], 10) == 3)
			|| (parseInt(qDates[1], 10) == 4 && parseInt(zDates[1], 10) == 6)
			|| (parseInt(qDates[1], 10) == 7 && parseInt(zDates[1], 10) == 9) || (parseInt(
			qDates[1], 10) == 10 && parseInt(zDates[1], 10) == 12))){
		if (parseInt(qDates[2], 10) != 1) {
			swordAlert("按季申报，所属期起必须为季初！");
			fjsnsqxDm="";
			return false;
		}
		if (monthDay(zDates[0], parseInt(zDates[1], 10)) != parseInt(zDates[2], 10)) {
			swordAlert("按季申报，所属期止必须为为季末！");
			fjsnsqxDm="";
			return false;
		}
		 fjsnsqxDm="08";
		return true;
	}
	// 按半年申报
	if((parseInt(qDates[1], 10) == 1 && parseInt(zDates[1], 10) == 6) || (parseInt(
			qDates[1], 10) == 7 && parseInt(zDates[1], 10) == 12)){
		if (!(parseInt(qDates[2], 10) == 1)) {
			swordAlert("按半年申报，所属期起必须为某半年的第一天！");
			fjsnsqxDm="";
			return false;
		}
		if (monthDay(zDates[0], parseInt(zDates[1], 10)) != parseInt(zDates[2], 10)) {
			swordAlert("按半年申报，所属期起必须为某半年的最后一天！");
			fjsnsqxDm="";
			return false;
		}
		fjsnsqxDm="09";
		return true;
	}
	// 按年申报
	if((parseInt(qDates[1], 10) == 1 && parseInt(zDates[1], 10) == 12)){
		if (parseInt(qDates[2], 10) != 1) {
			swordAlert("按年申报，所属期起必须为年初！");
			fjsnsqxDm="";
			return false;
		}
		if (monthDay(zDates[0], parseInt(zDates[1], 10)) != parseInt(zDates[2], 10)) {
			swordAlert("按年申报，所属期止必须为年末！");
			fjsnsqxDm="";
			return false;
		}
		fjsnsqxDm="10";
		return true;
	}
} 
function checkOnSuccess(req,res){
	
}


/**
 * 打印主表
 * 
 * @return
 */
function print(){
	printhtm();
// fjssbPrint();
// var nsrxxForm=$w("nsrxxForm").getSubmitData();
// var sfxxForm=$w("sfxxForm").getSubmitData();
// var fjsfsbxxGrid=$w("fjsfsbxxGrid").getAllNoDeleteGridData();
// var bqynsfeHj = 0.00;
// var jmeHj = 0.00;
// var bqyjseHj = 0.00;
// var bqybtseHj = 0.00;
// if ($chk($w("fjsfsbxxGrid"))) {
// var hjRow = $w('fjsfsbxxGrid').hjRow;// 取到合计div元素
// var HjDiv = hjRow.getElements("div");// 取到合计cell数组
// bqynsfeHj = HjDiv[8].get("realvalue");
// jmeHj = HjDiv[10].get("realvalue");
// bqyjseHj = HjDiv[11].get("realvalue");
// bqybtseHj = HjDiv[12].get("realvalue");
// }
// var printBtn = new SwordSubmit();
// printBtn.pushData(nsrxxForm);
// printBtn.pushData(sfxxForm);
// printBtn.pushData(fjsfsbxxGrid);
// printBtn.pushData("bqynsfeHj", bqynsfeHj);
// printBtn.pushData("jmeHj", jmeHj);
// printBtn.pushData("bqyjseHj", bqyjseHj);
// printBtn.pushData("bqybtseHj", bqybtseHj);
// printBtn.setCtrl(ctrl + "_print");
// swordOpenWin('/sword?ctrl=' +ctrl + '_print&r=' + Math.random(), printBtn);
}

// 油气田分配相关js________________________
var yqtfbopen = false;
function setdata(inputEl){
	var id = inputEl.get("code");
	var dfpGrid = null;
	var btn = new SwordSubmit();
	btn.pushData("id",id);
	// 是否加载附表页面
	btn.pushData("flag","N");
	btn.pushData($w("fjsfsbxxGrid").getAllNoDeleteGridData());
	btn.setOptions({
		'onSuccess' : function(req, res) {
		dfpGrid = pc.getResData("dfpGrid",res);
		}
	});
	btn.pushData(nsrxxForm.getSubmitData());
	btn.setCtrl(ctrl+"_toSbfb");
	btn.submit();
	
// if(cwgzbz != "cwgzbz"){
// _arrVars_NOywpt['yqtfpGrid'] = null;
// }
//	
	if ($chk($("yqtfb_iframe")) && $chk($("yqtfb_iframe").contentWindow) && yqtfbopen){
		try{
			_arrVars_NOywpt['yqtfpGrid'] = $("yqtfb_iframe").contentWindow.$w("yqtfpGrid").getAllNoDeleteGridData();
		}catch(e){
			_arrVars_NOywpt['yqtfpGrid'] = null;
		}
	}
	_arrVars_NOywpt['dfpGrid'] = dfpGrid;
	openTab(inputEl);
}

function openTab(inputEl) {
	var id = inputEl.get("code");
	if("00"!=id){
		$("fjssb_div").style.display = "none";
		$("yqtfb_div").style.display = "";
	}else{
		$("fjssb_div").style.display = "";
		$("yqtfb_div").style.display = "none";
	}

	if("00"!=id ){
		var btn = new SwordSubmit();
		btn.pushData("id",id);
		if(!yqtfbopen){
			// 是否初次加载附表
			yqtfbopen = true;
			btn.options.postType = "form_yqtfb_iframeName";
			btn.pushData("flag","Y");
			btn.pushData($w("fjsfsbxxGrid").getAllNoDeleteGridData());
			btn.pushData(nsrxxForm.getSubmitData());
			btn.setCtrl(ctrl+"_toSbfb");
			btn.submit();
		}else{
			$("yqtfb_iframe").contentWindow.init();
		}
		
	}
}
// 油气田分配相关js结束________________________
function openRdxx(){
	var istq="N";
	if(!$chk(sb246_rdxxList) ||sb246_rdxxList==null ||sb246_rdxxList==undefined){
		swordAlert("未提取到可申报的认定信息！");
		return ;
	}
	var getNsqxDm=getfjsNsqxDm($w("nsrxxForm").getValue("skssqq"), $w("nsrxxForm").getValue("skssqz"));
// ($w("nsrxxForm").getValue("skssqq"),$w("nsrxxForm").getValue("skssqz"));
	var length=sb246_rdxxList.trs.length;
	if(length<=0){
		swordAlert("未提取到可申报的认定信息！");
		return;
	}
	zspmxx();
	for(var i=0;i<length;i++){
		var tempData= sb246_rdxxList.trs[i].tds;
		var zspmDm=tempData.zspmDm.value;
		if(!getNsqxDm==tempData.nsqxDm.vaelue){
			continue;
		}
		if (zspmArray.length>0&&zspmArray.indexOf(zspmDm) > -1){
			continue;
		}
		 var sl1 = tempData.sl1.value;
		 var zszsxmDm= !$chk(tempData.zszsxmDm) ? "": tempData.zszsxmDm.value;
		 istq="Y";
		var data = {
			tds : {
				zsxmDm : {
					value : tempData.zsxmDm.value
				},
				zspmDm : {
					value : zspmDm
				},
				sl1 : {
					value : sl1
				},
				ybzzs : {
					value : 0.0
				},
				zzsmdse : {
					value : 0.0
				},
				xfs : {
					value : 0.0
				},
				yys : {
					value : 0.0
				},
				hj : {
					value : 0.0
				},
				bqynsfe : {
					value : 0.0
				},
				jmxzDm : {
					value : ""
				},
				jme : {
					value : 0.0
				},
				bqyjse : {
					value : 0.0
				},
				yhjmse : {
					value : 0.0
				},
				bqybtse : {
					value : 0.0
				},
				jmzlxDm : {
					value : ""
				},
				jmsl : {
					value : 0.0
				},
				jmed : {
					value : 0.0
				},
				jmfd : {
					value : 0.0
				},
				zszsxmDm : {
					value : zszsxmDm
				}
			}
		};
		  $w("fjsfsbxxGrid").insertRow(data);
		
	}
	if(istq=="N"){
		swordAlert("未提取到可申报的认定信息！");
	}
	sethddeblcwgz();
}


function sethddeblcwgz(){
	var fjsfsbxxGrid=$w("fjsfsbxxGrid");
	var len = $w("fjsfsbxxGrid").getInsertRows().length;
	for(var j = 0; j < len; j++){
		var zszsxmDm = fjsfsbxxGrid.getInsertRows()[j].getChildren()[19].innerHTML;
		
		var ybzzsCell = fjsfsbxxGrid.getInsertRows()[j].getElement('[name=ybzzs]');
		var zzsmdseCell = fjsfsbxxGrid.getInsertRows()[j].getElement('[name=zzsmdse]');
		var xfsCell = fjsfsbxxGrid.getInsertRows()[j].getElement('[name=xfs]');
		var yysCell = fjsfsbxxGrid.getInsertRows()[j].getElement('[name=yys]');
		
		
		if($chk(zszsxmDm)&&"10103"==zszsxmDm){
			ybzzsCell.set("disabled", "true");
			zzsmdseCell.set("disabled", "true");
			xfsCell.set("disabled", "true");
			yysCell.set("disabled", "");
		}else if($chk(zszsxmDm)&&"10102"==zszsxmDm){
			ybzzsCell.set("disabled", "true");
			zzsmdseCell.set("disabled", "true");
			xfsCell.set("disabled", "");
			yysCell.set("disabled", "true");
		}else if($chk(zszsxmDm)&&"10101"==zszsxmDm){
			ybzzsCell.set("disabled", "");
			zzsmdseCell.set("disabled", "");
			xfsCell.set("disabled", "true");
			yysCell.set("disabled", "true");
		}else{
			ybzzsCell.set("disabled", "");
			zzsmdseCell.set("disabled", "");
			xfsCell.set("disabled", "");
			yysCell.set("disabled", "");
		}
	}
}

function zspmxx(){
	zspmArray=new Array();
	var fjsfsbxxGrid = $w("fjsfsbxxGrid").getAllNoDeleteGridData();
	
	for ( var i = 0; i < fjsfsbxxGrid.trs.length; i++) {
		var zspmDm= fjsfsbxxGrid.trs[i].tds.zspmDm.value;
		zspmArray[i]=zspmDm;
	}
}

/**
 * 根据所属期取纳税期限代码
 * 
 * @param skssqq
 * @param skssqz
 * @return
 */
function getfjsNsqxDm(skssqq,skssqz) {
	var nsqxDm = "";
	var qDates = splitStr(skssqq);// 年月日的数组
	var zDates = splitStr(skssqz);// 年月日的数组
	if(skssqq == skssqz){
		nsqxDm = "11";// 按次
	}
	else if (parseInt(zDates[1], 10) == parseInt(qDates[1], 10)) {
		nsqxDm = "06";// 按月申报
	} else if ((parseInt(qDates[1], 10) == 1 && parseInt(zDates[1], 10) == 3)
			|| (parseInt(qDates[1], 10) == 4 && parseInt(zDates[1], 10) == 6)
			|| (parseInt(qDates[1], 10) == 7 && parseInt(zDates[1], 10) == 9)
			|| (parseInt(qDates[1], 10) == 10 && parseInt(zDates[1], 10) == 12)) {
		nsqxDm = "08";// 按季
	} else if ((parseInt(qDates[1], 10) == 1 && parseInt(zDates[1], 10) == 6)
			|| (parseInt(qDates[1], 10) == 7 && parseInt(zDates[1], 10) == 12)) {
		nsqxDm = "09";// 按半年
	} else if ((parseInt(qDates[1], 10) == 1 && parseInt(zDates[1], 10) == 12)) {
		nsqxDm = "10";// 按年
	}
	return nsqxDm;
}


/**
 * @description 处理登记类型的改变
 * @param code
 *            代码
 * @param caption
 *            名称
 */
function onChangeDjlx(code, caption) {
	var nsrxxForm = $w("nsrxxForm");
	var nsrsbh = nsrxxForm.getValue("nsrsbh");
	
	if (!$chk(code) || "" == code) {
		return;
	}
	
	// 先注释掉根据登记类型来调整行业和税务机关的处理，该处理根据报税人为自然人还是纳税人自动处理
	var isGetSfzxx = false; // 是否获取税费种信息
	if ("1" == code) { // 单位
// if ($chk(gt3._nsrHyxx) && "" != gt3._nsrHyxx) {
// nsrxxForm.setValue('hyDm', gt3._nsrHyxx);
// nsrxxForm.disable(["hyDm"]);
// }
//		
// if ($chk(gt3._zgswjgxx) && "" != gt3._zgswjgxx) {
// nsrxxForm.setValue('zgswskfjDm', gt3._zgswjgxx);
// nsrxxForm.disable(["zgswskfjDm"]);
// }
//		
// document.getElementById("swjgID").innerHTML = "税务机关";
// nsrxxForm._itemSwitch("zgswskfjDm", "pulltree", {'rule':''});
	} else if ("2" == code) { // 个人
// nsrxxForm.enable(["hyDm", "zgswskfjDm"]);
//		
// document.getElementById("swjgID").innerHTML = "<span
// class='red'>*</span>税务机关";
// nsrxxForm._itemSwitch("zgswskfjDm", "pulltree", {'rule':'must'});
		var skssqq = nsrxxForm.getValue("skssqq");
		var skssqz = nsrxxForm.getValue("skssqz");
		if (!$chk(skssqq) || "" == skssqq  // 所属期起为空
			|| !$chk(skssqz) || "" == skssqz // 所属期止为空
			|| !compareDate3(skssqq, skssqz) // 属期起止不为同一天
			|| !compareDate3(skssqq, gt3._sysrq)) { // 属期期和服务器日期不为同一天
			nsrxxForm.setValue("skssqq", gt3._sysrq);
			nsrxxForm.setValue("skssqz", gt3._sysrq);
			isGetSfzxx = true;
		}
	}
	
	// 重新获取税费种认定信息
	if (isGetSfzxx && $chk(nsrsbh) && "" != nsrsbh
		&& $chk(gt3.djxh) && "" != gt3.djxh) {
		skssqzChangesdxg();
	}
}


/**
 * 获取默认税款属期起止时间
 */
function getMrSkssqzTime() {
	if (gt3.djxh == undefined || gt3.djxh == null || gt3.djxh == "") {
		return;
	}
	var jyBtn = new SwordSubmit();
	jyBtn.setCtrl(ctrl + "_getMrSkssqzTime");
	jyBtn.setFunction('onSuccess', 'getSkssqzTimeSuccess');
	jyBtn.pushData('djxh', gt3.djxh);
	jyBtn.pushData('zrrBz', gt3.zrrbz);
	jyBtn.submit();
}

/**
 * 获取默认税款属期起止时间成功回调函数
 */
function getSkssqzTimeSuccess(req, resData) {
	// 获得后台传过来的系统日期
	$w("nsrxxForm").setValue('skssqq', resData.getAttr('skssqq'));
	$w("nsrxxForm").setValue('skssqz', resData.getAttr('skssqz'));
	skssqzChangesdxg();
}
/**
 * 根据征收品目设置是否可录入
 */
// function setCellEnableByzspm(){
// var sbxxGrid = $w("fjsfsbxxGrid");
// var sbxxGridDiv = sbxxGrid.dataDiv();
// var sbxxChildren = sbxxGridDiv.getChildren();
// var length = sbxxChildren.length;
// for(var i=0;i<length;i++){
// var zsxmDm = sbxxChildren[i].getCell('zsxmDm').get("realValue");
// var zspmDm = sbxxChildren[i].getCell('zspmDm').get("realValue");
// var zspmDmCheck ="00";
// if(zsxmDm=="10109"){// 最后2位判断
// zspmDmCheck = zspmDm.substr(7,2);// 等价于zspmDm.substring(7,9);
// }
// if(zsxmDm=="30127"||zsxmDm=="30203"||zsxmDm=="30216"){// 倒数3、4位
// zspmDmCheck = zspmDm.substr(5,2);
// }
// if(zspmDmCheck=="01"){// 增值税附征
// sbxxChildren[i].enable("ybzzs");
// sbxxChildren[i].enable("zzsmdse");
// }else if(zspmDmCheck=="02"){// 营业税附征
// sbxxChildren[i].enable("yys");
// }else if(zspmDmCheck=="03"){// 消费税附征
// sbxxChildren[i].enable("xfs");
// }
// }
// }
/*******************************************************************************
 * 打印回执
 */
function printHz() {	
	var printBtn = new SwordSubmit();
	printBtn.pushData("yzpzxh",yzpzxh);
	printBtn.pushData("sbbmc","附加税申报回执");
	printBtn.setCtrl("SBDyCtrl" + "_printHz");
	swordOpenWin('/sword?ctrl=' + "SBDyCtrl" + '_printHz&r=' + Math.random(),
			printBtn);
}


/**
 * ZOG00_201612140014 广西地税预生产环境 中软电子税务局-网页版-附加税费申报带出已预缴数可以修改未加控制（数据风险）。
 * 需要改成：修改的数不能大于实际已预缴税款。
 */
function changeYjse(realvalue, showvalue, rowData, el, row, oldvalue) {
	if (realvalue == oldvalue) {
		return;
	}
	jisuan2(realvalue, showvalue, rowData, el, row, oldvalue);
// // 更新预缴税额
// var fjsfsbxxGrid = $w("fjsfsbxxGrid");
// fjsfsbxxGrid.updateCell(el, emptyToZ(bqyjse));
// jisuan2(emptyToZ(bqyjse), showvalue, fjsfsbxxGrid.getOneRowData(row), el,
// row, oldvalue);
}

function jisuanyjse(realvalue,rowData,el){
	debugger;
	var fjsfsbxxGrid = $w("fjsfsbxxGrid");
	var zsxmDm = rowData.getValue("zsxmDm");
	var bqyjse = realvalue;
	var yjxxList = 	gt3.yjxxGrid;
	var yjse1 = rowData.getValue("yjse1")/1; // 已申报金额
	var ysbse = rowData.getValue("ysbse")/1; // 已申报金额
	if (((!$chk(yjxxList) || yjxxList.trs.length == 0) && yjse1==0 ) && ysbse ==0) {
			if(bqyjse/1>0){
				swordAlert("没有查询到纳税人的已缴税款信息,不能录入本期已缴税款");
			}
			bqyjse = 0.00;
	} else {
		var kyyjse = 0;// 可以预缴税额
		if (!$chk(yjxxList) || yjxxList.trs.length == 0) { // 2017-10-17错误更正初始化没有返回yjxxlist 暂时先用sbxxlist中的yjse1
			kyyjse = yjse1; 
		} else {
			var zspmDm = rowData.getValue("zspmDm");
			var skssqq = $w("nsrxxForm").getValue("skssqq");
			var skssqz = $w("nsrxxForm").getValue("skssqz");

			yjxxList.trs.each(function(yjxx, index) {
				var yjZspmDm = yjxx.tds.zspmDm.value;
				var yjSkssqq = yjxx.tds.skssqq.value;
				var yjSkssqz = yjxx.tds.skssqz.value;
				var yjye = yjxx.tds.yjye1.value / 1;// 预缴余额
				if (zspmDm == yjZspmDm
						&& (compareDate(yjSkssqq, skssqz) || compareDate(
								skssqq, yjSkssqz))) {
					kyyjse = (kyyjse).accAdd(yjye);
				}
			});
		}
		kyyjse = (kyyjse).accAdd(ysbse);  // 2017-10-17 增加上已申报金额
		if (kyyjse  < bqyjse) {
			bqyjse = kyyjse ;
		}
	}
	var bqynsfe = rowData.getValue("bqynsfe") / 1;
	// 格式化已缴税额
	bqyjse=(bqyjse/1).round(2);
	if(bqyjse>bqynsfe){
		bqyjse = bqynsfe;
	}
	return bqyjse;
}


/*******************************************************************************
 * 空转为0.00数值
 * 
 * @param {}
 *            obj
 * @return {String}
 */
function emptyToZ(obj) {
	if (typeof(obj) == "object") {
		if (!$chk(obj)) {
			return "0.00";
		} else if (!$chk(trimStr(obj.value))) {
			return "0.00";
		} else if (trimStr(obj.value) == "null") {
			return "0.00";
		} else {
			return trimStr(obj.value);
		}
	} else if (typeof(obj) == "number") {
		if (!$chk(obj)) {
			return "0.00";
		} else if (obj == "null") {
			return "0.00";
		} else if (obj == 0) {
			return "0.00";
		} else {
			return obj;
		}
	} else {
		if (!$chk(obj)) {
			return "0.00";
		} else if (!$chk(trimStr(obj))) {
			return "0.00";
		} else if (trimStr(obj) == "null") {
			return "0.00";
		} else if (trimStr(obj) == "0") {
			return "0.00";
		} else {
			return trimStr(obj);
		}
	}
}

function wbsaveBeforeCheck() {
	var gridData = $w("fjsfsbxxGrid") .getAllGridData().trs;
	var length = gridData.length;
	var exceptionStr = "";
	var isError = false;
	var deleteRowNum = 0;
	
	for ( var i = 0; i < length; i++) {
		var status = gridData[i].status;
		if (status != 'delete') {
			var gridRowData = gridData[i].tds;
			var bqynsfeTemp = gridRowData.bqynsfe.value;
			var jmxzDmTemp = $chk(gridRowData.jmxzDm)?gridRowData.jmxzDm.value:"";
			var jmeTemp = gridRowData.jme.value/1;
			var bqyjseTemp = gridRowData.bqyjse.value/1;
			var bqybtseTemp = gridRowData.bqybtse.value/1;
			var bqybtseJisuan = ((bqynsfeTemp).subtract(jmeTemp).subtract(bqyjseTemp)).round(2);
			var exceptionStrCurRow = "第" + (i-deleteRowNum + 1) + "行记录的"; 
			var isErrorCurRow = false;
			if(jmeTemp>bqynsfeTemp){
				exceptionStrCurRow = exceptionStrCurRow	+ ("“减免额”不应该大于“本期应纳税额”，");
				isError = true;
				isErrorCurRow = true;
			}
			if((bqybtseTemp).round(2)!=bqybtseJisuan){
				exceptionStrCurRow = exceptionStrCurRow	+ ("”本期应补退税额”应该等于“本期应纳税（费）额“减去“减免额”减去“本期已缴税（费）额“,");
				isError = true;
				isErrorCurRow = true;
			} 		
			if(jmeTemp>0 && !$chk(jmxzDmTemp)){
				exceptionStrCurRow = exceptionStrCurRow	+ ("“减免额”大于0时，“减免性质代码”必须录入,");
				isError = true;
				isErrorCurRow = true;
			}
			if(!$chk(jmxzDmTemp) && jmeTemp!=0){
				exceptionStrCurRow = exceptionStrCurRow	+ ("”减免性质”为空时，“减免额”必须为0,");
				isError = true;
				isErrorCurRow = true;
			}
			if(isErrorCurRow){
				exceptionStr = exceptionStr + exceptionStrCurRow;
			}
		} else {
			deleteRowNum++;
		}
	}
	
	var jkbz = isError;
	var jkObj = {};
	jkObj.jkbz = jkbz;
	jkObj.strBuf = exceptionStr;
	return jkObj;
}

//计税依据清空
function clearJsyj(){
	var grid=$w('fjsfsbxxGrid');
	var rowsChilden=grid.dataDiv().getChildren('div[status!=delete]');
	var fjsfsbxxGrid = grid.getAllNoDeleteGridData();
	for(var i=0;i<fjsfsbxxGrid.trs.length;i++){
		var  ybzzs=0.00;
		var ybzzsCell=rowsChilden[i].getCell("ybzzs");
		grid.updateCell(ybzzsCell,'0.00','0.00');
		var zzsmdse = 0.00;
		var zzsmdseCell=rowsChilden[i].getCell("zzsmdse");
		grid.updateCell(zzsmdseCell,'0.000000','0.000000');
		var  xfs=0.00;
		var xfsCell=rowsChilden[i].getCell("xfs");
		grid.updateCell(xfsCell,'0.00','0.00');
		var yys=0.00;
		var yysCell=rowsChilden[i].getCell("yys");
		grid.updateCell(yysCell,'0.00','0.00');
		
		var sl1=fjsfsbxxGrid.trs[i].tds.sl1.value;
		var bqyjse=fjsfsbxxGrid.trs[i].tds.bqyjse.value;
		var jme=fjsfsbxxGrid.trs[i].tds.jme.value;
		var bqybtse=fjsfsbxxGrid.trs[i].tds.bqybtse.value;
		var hjje=((ybzzs/1).accAdd(zzsmdse/1).accAdd(xfs/1).accAdd(yys/1));
		var ynse = hjje.multiple(sl1/1).round(2);
		var bqybtse=(((ynse).subtract(jme/1)).subtract(bqyjse/1)).round(2);	// 网报修改
		var hjCell=rowsChilden[i].getCell("hj");
		var bqynsfeCell=rowsChilden[i].getCell("bqynsfe");
		var bqybtseCell=rowsChilden[i].getCell("bqybtse");
		grid.updateCell(hjCell,hjje,hjje);
		grid.updateCell(bqynsfeCell,ynse,ynse);
		grid.updateCell(bqybtseCell,bqybtse,bqybtse);
		
	}
}
function tzsHandler(tzslx) {
    var submit = new SwordSubmit();
    if ("bysltzs" == tzslx) {
        submit.pushData("title", "《税务事项通知书》（不予受理通知）");
        submit.pushData("sy", "《税务事项通知书》（不予受理通知）");
        submit.pushData("dzbzdszlDm", "BDA0110223");
    } else if ("bztzs" == tzslx) {
        submit.pushData("title", "《税务事项通知书》（补正通知）");
        submit.pushData("sy", "《税务事项通知书》（补正通知）");
        submit.pushData("dzbzdszlDm", "BDA0110222");
    } else if ("sltzs" == tzslx) {
        submit.pushData("title", "《税务事项通知书》（受理通知）");
        submit.pushData("sy", "《税务事项通知书》（受理通知）");
        submit.pushData("dzbzdszlDm", "BDA0010008");
    }
    var sbrq = $w("sfxxForm").getValue("slrq") || dateFormat(new Date());
    submit.pushData("sbrq", sbrq);
    submit.pushData("djxh", gt3.djxh);
    submit.pushData("sxmc", "附加税（费）申报");
    submit.pushData("lcswsxDm", "LCSXA061001014");
    
    submit.pushData("nsrsbh",nsrxxVO['nsrsbh']);
    submit.pushData("nsrmc",nsrxxVO['nsrmc'] );
    submit.pushData('tzslx', tzslx);
    submit.setCtrl("SBGyCtrl_dywsInitView");
    swordOpenWin("", submit);
}
/*******************************************************************************
 * 监控纳税人状态
 * 
 * @param {}
 *            nsrztDm 纳税人状态代码
 */
function checkNsrzt(nsrztDm) {
	if (nsrztDm == "07") {
		swordAlert("纳税人为注销状态，请先办理重新税务登记！");
		return false;
	} else if (nsrztDm == "04") {
		swordAlert("本纳税人在本属期内停业。");
		return false;
	} else if (nsrztDm == "05") {
		swordAlert("纳税人处于非正常户状态，请进行非正常户解除，可继续进行采集！");
	} else if (nsrztDm == "06") {
		swordAlert("纳税人处于清算状态，可继续进行采集！");
	}
	 else if (nsrztDm == "08") {
		swordAlert("纳税人处于非正常户注销，请先办理重新税务登记！");
		return false;
	}
	return true;
}