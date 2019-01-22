/**
 * 为定制查询系统提供申报表信息查看功能，复用申报错误更正的源代码，通过本js进行服务转发调用
 */

var gt3_sbbdck_djxh = null;
var gt3_sbbdck_pzxh = null;
var gt3_sbbdck_sbuuid = null;
var gt3_sbbdck_skssqq = null;
var gt3_sbbdck_skssqz = null;
var gt3_sbbdck_sbrq = null;
var gt3_sbbdck_yzpzzlDm = null;
var gt3_sbbdck_sbsxDm1 = null;
var gt3_sbbdck_sbbckdxlmc = null;
var gt3_sbbdck_gsdz = null;

// 页面打开初始化方法（定制查询跳转申报表查看功能统一入口）
function init(resData){
	// 获取页面初始化方法
	gt3_sbbdck_djxh = resData.getAttr('djxh');
	gt3_sbbdck_pzxh = resData.getAttr('pzxh');
	gt3_sbbdck_sbuuid = resData.getAttr('sbuuid');
	gt3_sbbdck_skssqq = resData.getAttr('skssqq');
	gt3_sbbdck_skssqz = resData.getAttr('skssqz');
	gt3_sbbdck_sbrq = resData.getAttr('sbrq');
	gt3_sbbdck_yzpzzlDm = resData.getAttr('yzpzzlDm');
	gt3_sbbdck_sbsxDm1 = resData.getAttr('sbsxDm1');
	gt3_sbbdck_sbbckdxlmc = resData.getAttr('sbbckdxlmc');
	//gt3_sbbdck_sbbckdxlmc ="SB217QysdsCzzsYjd2015BO";//先模拟一下
	var serviceName = "";
	var cxbj = "Y"; // 20160922
	if (gt3_sbbdck_yzpzzlDm == "BDA0610040" || gt3_sbbdck_yzpzzlDm == "BDA0610039" 
	       || "BDA0610994" == gt3_sbbdck_yzpzzlDm 
	       || gt3_sbbdck_yzpzzlDm == "BDA0610688" || gt3_sbbdck_yzpzzlDm =="BDA0610756" 
	       || gt3_sbbdck_yzpzzlDm =="BDA0610108" || gt3_sbbdck_yzpzzlDm =="BDA0610036" ||gt3_sbbdck_yzpzzlDm=='BDA0610098' 
	       || gt3_sbbdck_yzpzzlDm=='BDA0610099' || gt3_sbbdck_yzpzzlDm =="BDA0610070"|| gt3_sbbdck_yzpzzlDm =="BDA0610069"|| gt3_sbbdck_yzpzzlDm =="BDA0610289"
					 || "BDA0610084" == gt3_sbbdck_yzpzzlDm || "BDA0610114" == gt3_sbbdck_yzpzzlDm 
					 || "BDA0610748" == gt3_sbbdck_yzpzzlDm || "BDA0610118" == gt3_sbbdck_yzpzzlDm 
					 || "BDA0610749" == gt3_sbbdck_yzpzzlDm || "BDA0610095" == gt3_sbbdck_yzpzzlDm 
					 || "BDA0610678" == gt3_sbbdck_yzpzzlDm || "BDA0610017" == gt3_sbbdck_yzpzzlDm 
					 || "BDA0610019" == gt3_sbbdck_yzpzzlDm || "BDA0610090" == gt3_sbbdck_yzpzzlDm 
					 || "BDA0610109" == gt3_sbbdck_yzpzzlDm || "BDA0610110" == gt3_sbbdck_yzpzzlDm 
		             || "BDA0610732" == gt3_sbbdck_yzpzzlDm || "BDA0610735" == gt3_sbbdck_yzpzzlDm 
		             || "BDA0610738" == gt3_sbbdck_yzpzzlDm || "BDA0610744" == gt3_sbbdck_yzpzzlDm
		             || "BDA0619905" == gt3_sbbdck_yzpzzlDm//土地交易申报
		             || "BDA0610764" == gt3_sbbdck_yzpzzlDm//核定2015
		             || "BDA0610809" == gt3_sbbdck_yzpzzlDm//废弃电子基金2015
		             || "BDA0610100" == gt3_sbbdck_yzpzzlDm//通用申报
		             || "BDA0610606" == gt3_sbbdck_yzpzzlDm//一般人
		             || "BDA0610611" == gt3_sbbdck_yzpzzlDm//小规模
	                 || "BDA0610786" == gt3_sbbdck_yzpzzlDm//土增表七         
		             || "BDA0610785" == gt3_sbbdck_yzpzzlDm//土增表六       
		             || "BDA0610683" == gt3_sbbdck_yzpzzlDm//土增表一   
		             || "BDA0610682" == gt3_sbbdck_yzpzzlDm//土增表三
		             || "BDA0610783" == gt3_sbbdck_yzpzzlDm//土增表四
		             || "BDA0610784" == gt3_sbbdck_yzpzzlDm//土增表五
		             || "BDA0610681" == gt3_sbbdck_yzpzzlDm//土增表二
		             || "BDA0610865" == gt3_sbbdck_yzpzzlDm//增值税预缴
		             || "BDA0610058" == gt3_sbbdck_yzpzzlDm//居民企业清算企业所得税申报
		             || "BDA0610922" == gt3_sbbdck_yzpzzlDm//企业年度关联业务往来报告2016
		             || "BDA0610068" == gt3_sbbdck_yzpzzlDm//企业年度关联业务往来报告旧版
		             || "BDA0611033" == gt3_sbbdck_yzpzzlDm//居民企业（查账征收）企业所得税月（季）度申报（2018年版）
		             || "BDA0610987" == gt3_sbbdck_yzpzzlDm//水资源税申报表A
		             || "BDA0610988" == gt3_sbbdck_yzpzzlDm) //水资源税申报表B	    
    {
		serviceName = "SBGyCtrl_sbbCkInitView";
	}
	else{
		serviceName = resData.getAttr('serviceName');
	}
	gt3_sbbdck_gsdz = resData.getAttr('gsdz');
	if(gt3_sbbdck_gsdz=="N"){
		// 20160922 申报有打印按钮不适用架构的打印
		if (gt3_sbbdck_yzpzzlDm == "BDA0610994"
				|| gt3_sbbdck_yzpzzlDm == "BDA0610987"
				|| gt3_sbbdck_yzpzzlDm == "BDA0610069"
				|| gt3_sbbdck_yzpzzlDm == "BDA0610070"
				|| gt3_sbbdck_yzpzzlDm == "BDA0610108"
				|| gt3_sbbdck_yzpzzlDm == "BDA0610794"
				|| gt3_sbbdck_yzpzzlDm == "BDA0610857"
				|| gt3_sbbdck_yzpzzlDm == "BDA0610887"
				|| "BDA0610088" == gt3_sbbdck_yzpzzlDm
				|| "BDA0610809" == gt3_sbbdck_yzpzzlDm
				|| "BDA0610750" == gt3_sbbdck_yzpzzlDm
				|| "BDA0610081" == gt3_sbbdck_yzpzzlDm
				|| "BDA0610865" == gt3_sbbdck_yzpzzlDm
				|| "BDA0610611" == gt3_sbbdck_yzpzzlDm
				|| "BDA0610988" == gt3_sbbdck_yzpzzlDm
				|| "BDA0610986" == gt3_sbbdck_yzpzzlDm
				|| "BDA0611033" == gt3_sbbdck_yzpzzlDm
				|| "BDA0610988" == gt3_sbbdck_yzpzzlDm
				|| "BDA0610987" == gt3_sbbdck_yzpzzlDm
				|| "BDA0619905" == gt3_sbbdck_yzpzzlDm) {
			cxbj = "N";
		}
	}
	
	serviceName = serviceName+"?sName="+serviceName+"&cxbj="+cxbj; //cxbj为Y表示不能保存，可查看，可打印。为N标识更正分支，可保存。
	
	// 转发服务调用
	var serviceForwardBtn = new SwordSubmit();
	serviceForwardBtn.pushData('pzxh', gt3_sbbdck_pzxh);
	serviceForwardBtn.pushData('skssqq', gt3_sbbdck_skssqq);
	serviceForwardBtn.pushData('skssqz', gt3_sbbdck_skssqz);
	serviceForwardBtn.pushData('sbuuid', gt3_sbbdck_sbuuid);
	serviceForwardBtn.pushData('sblxDm', gt3_sbbdck_sbsxDm1);
	serviceForwardBtn.pushData('sbrq1', gt3_sbbdck_sbrq);
	serviceForwardBtn.pushData('djxh', gt3_sbbdck_djxh);
	serviceForwardBtn.pushData('yzpzzlDm', gt3_sbbdck_yzpzzlDm);
	serviceForwardBtn.pushData('sbbckdxlmc', gt3_sbbdck_sbbckdxlmc);
	serviceForwardBtn.pushData('cwgzbz', "cwgzbz");
	serviceForwardBtn.pushData('scenceCs', "sbbck");
	serviceForwardBtn.options.postType = "form";
	serviceForwardBtn.setCtrl(serviceName);
	serviceForwardBtn.submit();
}

/*
 * 以下为申报域申报表查看功能统一服务入口
 * @param {Object} djxh 登记序号
 * @param {Object} pzxh 凭证序号
 * @param {Object} sbuuid 申报uuid
 * @param {Object} skssqq 税款所属期起
 * @param {Object} skssqz 税款所属期止
 * @param {Object} sbrq 申报日期
 * @param {Object} yzpzzlDm 应征凭证种类代码
 * @param {Object} sbsxDm1 申报属性代码
 * @return {TypeName} 各个用例数据信息
 */
function sbbdckEntranceFromDzcx(djxh, pzxh, sbuuid, skssqq, skssqz, sbrq, yzpzzlDm, sbsxDm1) {
	if (djxh == null || djxh == undefined || djxh == "") {
		swordAlert("当前纳税人登记序号为空，请重新传入。");
		return;
	} else {
		gt3_sbbdck_djxh = djxh;
	}
	if (pzxh == null || pzxh == undefined || pzxh == "") {
		swordAlert("当前纳税人查看申报数据凭证序号为空，请重新传入。");
		return;
	} else {
		gt3_sbbdck_pzxh = pzxh;
	}
	if (sbuuid == null || sbuuid == undefined || sbuuid == "") {
		swordAlert("当前纳税人查看申报数据主键为空，请重新传入。");
		return;
	} else {
		gt3_sbbdck_sbuuid = sbuuid;
	}
	if (skssqq == null || skssqq == undefined || skssqq == "") {
		swordAlert("当前纳税人查看申报数据税款所属期起为空，请重新传入。");
		return;
	} else {
		gt3_sbbdck_skssqq = skssqq;
	}
	if (skssqz == null || skssqz == undefined || skssqz == "") {
		swordAlert("当前纳税人查看申报数据税款所属期止为空，请重新传入。");
		return;
	} else {
		gt3_sbbdck_skssqz = skssqz;
	}
	if (sbrq == null || sbrq == undefined || sbrq == "") {
		swordAlert("当前纳税人查看申报数据申报日期为空，请重新传入。");
		return;
	} else {
		gt3_sbbdck_sbrq = sbrq;
	}
	if (yzpzzlDm == null || yzpzzlDm == undefined || yzpzzlDm == "") {
		swordAlert("当前纳税人查看申报数据应征凭证种类代码为空，请重新传入。");
		return;
	} else {
		gt3_sbbdck_yzpzzlDm = yzpzzlDm;
	}
	if (sbsxDm1 == null || sbsxDm1 == undefined || sbsxDm1 == "") {
		swordAlert("当前纳税人查看申报数据申报属性代码为空，请重新传入。");
		return;
	} else {
		gt3_sbbdck_sbsxDm1 = sbsxDm1;
	}
	
	// 根据应征凭证种类代码获取对应的各个用例Ctrl类服务初始化数据信息
	var getServiceNameBtn = new SwordSubmit();
	getServiceNameBtn.pushData('yzpzzlDm', gt3_sbbdck_yzpzzlDm);
	getServiceNameBtn.setCtrl("GY007SbSbbdxxCkCtrl_getServiceNameToYzpzzlDm");
	getServiceNameBtn.setFunction("onSuccess", "getServiceNameOnSuccess");
	getServiceNameBtn.submit();
}

// 根据查询出来的服务名称开始进行数据转发，调用各个对应用例的申报错误更正服务进行数据展示（申报域申报表查看复用该业务逻辑）
function getServiceNameOnSuccess(req, resData) {
	var serviceName = pc.getResData("serviceName", resData);

	// 转发服务调用
	var serviceForwardBtn = new SwordSubmit();
	serviceForwardBtn.pushData('pzxh', gt3_sbbdck_pzxh);
	serviceForwardBtn.pushData('skssqq', gt3_sbbdck_skssqq);
	serviceForwardBtn.pushData('skssqz', gt3_sbbdck_skssqz);
	serviceForwardBtn.pushData('sbuuid', gt3_sbbdck_sbuuid);
	serviceForwardBtn.pushData('sblxDm', gt3_sbbdck_sbsxDm1);
	serviceForwardBtn.pushData('sbrq1', gt3_sbbdck_sbrq);
	serviceForwardBtn.pushData('djxh', gt3_sbbdck_djxh);
	serviceForwardBtn.pushData('yzpzzlDm', gt3_sbbdck_yzpzzlDm);
	serviceForwardBtn.pushData('cwgzbz', "cwgzbz");
	serviceForwardBtn.pushData('sbbck', "sbbck");
	serviceForwardBtn.setCtrl(serviceName.value);
	var t =swordAlertIframe('', {
		titleName : '申报表单查看',
		width : 850,
		height : 400,
		param : window,
		submit : serviceForwardBtn,
		isNormal : 'false',
		isMax : 'true',
		isClose : 'true',
		isMin : "true"
	});
}
