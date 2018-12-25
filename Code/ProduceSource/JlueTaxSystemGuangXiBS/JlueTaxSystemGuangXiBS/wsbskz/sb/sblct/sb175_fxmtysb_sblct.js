var divstyle = "sb175_fxmtysb";  

/* 页面提示信息 可以没有 name=app3 */
var nameTips = new Hash();//必须存在
nameTips.set('app3','显示已申报待缴税款清册');
nameTips.set('app4','当月已申报查询');
nameTips.set('app5','当月已缴费查询');
nameTips.set('app6','税费种认定查询');
nameTips.set('app7','申报作废');

nameTips.set('bszn','办税指南');
nameTips.set('bsdt','办税地图');
nameTips.set('ssfg','税收法规');
nameTips.set('zlxz','资料下载');
nameTips.set('lnew','运维电话');
  


/* 申报流程控制方法 //必须存在*/
function sblctChange(){
   var lczt = null;
   if(gt3 && $chk(gt3)){
     //表示已经初始化 1 可以填写了
	 lczt =GyLcztConstants.getDM_ZDY_SBLCZT_SBTX();
	 var tgbz = "0";
	 if ($w("skxxGrid").validate() && $w("nsrxxForm").validate()) {
		var nsrxxForm = $w("nsrxxForm");
		var nsrsbh = nsrxxForm.getFieldEl("nsrsbh").value;// 纳税人识别号
		var sblxDm = nsrxxForm.getValue("sbsxDm1").code;// 申报类型代码
		var skssqq = nsrxxForm.getValue("skssqq");// 所属期起
		var skssqz = nsrxxForm.getValue("skssqz");// 所属期止
		// 任意一项为空，return
		if (!$chk(nsrsbh) || !$chk(sblxDm) || !$chk(skssqq) || !$chk(skssqz)
				|| !$chk(gt3.djxh)) {
			tgbz = "1";
		}
		
		if (!$chk(gt3.skxxList) || gt3.skxxList.trs == 0) {
			tgbz = "2";
	    }
	    
	    if($w("skxxGrid").totalRows() == 0){
	    	tgbz = "3";
	    }
		
		if (tgbz == "0" ) {
			//表示已经填写完成 1 可以提交了
			lczt =GyLcztConstants.getDM_ZDY_SBLCZT_SBTJ();
			if(yzpzxh != ""){
			   //表示已经保存成功 1 可以打印回执
			   lczt =GyLcztConstants.getDM_ZDY_SBLCZT_SBWC();
			}
		}
	  }
   }else{
     //表示初始化失败 为 0   
	 lczt =GyLcztConstants.getDM_ZDY_SBLCZT_CSH();
   }
   change(lczt);
}

//必须存在
function clickTbsm(){
    var nowHtml = '<div class="">1、问：通用申报可以申报哪些税种？<br/>'
    	+'答：税费种认定信息中认定的税种，均可自动获取税种进行申报。</div>';
    openBox('使用帮助',nowHtml);
}
//必须存在
function clickCzsz(){
	var nowHtml = '<div class="">【高清组图：上海一栋28层公寓发生严重火灾】目前火势不断蔓延，外立面的防护网已经烧到了10层楼高。另据消息，上海警方已经调遣直升机赴现场。<div id="testMoreBox" class="dn">现场火势凶猛，浓烟滚滚。据附近居民介绍，胶州路718号胶州教师公寓内住着不少的退休教师</div><a id="testMore" href="javascript:;" rel="testMoreBox">显示更多&gt;&gt;</a></div>';
	
	var href = "sb/czsc/通用申报.html";
	window.open(href);
	
}

//必须存在
function openPageRemind(){
   var nowHtml = '<div class="">【高清组图：上海一栋28层公寓发生严重火灾】目前火势<br>不断蔓延，外立面的防护网已经烧到了10层楼高。<br>另据消息，上海警方已经调遣直升机赴现场。</div>';
  // showTipsInit(nowHtml,700,50);

}



