
var divstyle = "sb025_yhssbb";

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
   if(gt3_sbxxList && $chk(gt3_sbxxList)){
     //表示已经初始化 1 可以填写了
	 lczt =GyLcztConstants.getDM_ZDY_SBLCZT_SBTX();
	 if ($w("nsrxxForm").validate()) {
		var children = $w('yhssbGrid').dataDiv().getChildren();
		var yhssbGrid=$w("yhssbGrid").getAllNoDeleteGridData();
		if (children.length > 0 ) {
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
    var nowHtml = '<div class="">1、问：印花税有的税种带不出来，不能申报？<br/><br/>'
    	+'答：所需申报的印花税税种，必须事先到大厅做好税费种认定，不然带不出税种信息，没法申报。<br/></div>';
    openBox('使用帮助',nowHtml);
}
//必须存在
function clickCzsz(){
	var nowHtml = '<div class="">【高清组图：上海一栋28层公寓发生严重火灾】目前火势不断蔓延，外立面的防护网已经烧到了10层楼高。另据消息，上海警方已经调遣直升机赴现场。<div id="testMoreBox" class="dn">现场火势凶猛，浓烟滚滚。据附近居民介绍，胶州路718号胶州教师公寓内住着不少的退休教师</div><a id="testMore" href="javascript:;" rel="testMoreBox">显示更多&gt;&gt;</a></div>';
	var href = "sb/czsc/印花税申报操作手册.html";
	window.open(href);
	
}

//必须存在
function openPageRemind(){
   var nowHtml = '<div class="">【高清组图：上海一栋28层公寓发生严重火灾】目前火势<br>不断蔓延，外立面的防护网已经烧到了10层楼高。<br>另据消息，上海警方已经调遣直升机赴现场。</div>';
 //  showTipsInit(nowHtml,700,50);

}



