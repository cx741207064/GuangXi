var func="";
function init(resData) {
	nsrzcbbtzsGrid = pc.getResData("nsrzcbbtzsGrid", resData);
	func = pc.getResData("func", resData);
	if (nsrzcbbtzsGrid == null || nsrzcbbtzsGrid == "" || nsrzcbbtzsGrid == undefined) {
		var box = this.parent[this.name];
		swordAlert("没有相应的自查补报通知书", {
			onClose : function() {
				// 调用主页面的方法，将下拉框初始化为正常状态
				// box.options.param.setSel();
				// 最新要求，当没有自查补报通知书的时候也能进行自查补报，也就说以前的要返回正常状态的方法要改成和能够找到自查补报通知书一样的处理方式
				// 当没有的时候就直接填0，在后台进行判断，如果是0同样不存
				box.options.param.setNsrzcbbtzsUUID("0",func);
				box.close();
			}
		});
		return;
	}

	if (nsrzcbbtzsGrid.trs == null || nsrzcbbtzsGrid.trs == "" || nsrzcbbtzsGrid.trs == undefined || nsrzcbbtzsGrid.trs.length == 0) {
		var box = this.parent[this.name];
		swordAlert("没有相应的自查补报通知书", {
			onClose : function() {
				// 调用主页面的方法，将下拉框初始化为正常状态
				// box.options.param.setSel();
				// 最新要求，当没有自查补报通知书的时候也能进行自查补报，也就说以前的要返回正常状态的方法要改成和能够找到自查补报通知书一样的处理方式
				// 当没有的时候就直接填0，在后台进行判断，如果是0同样不存
				box.options.param.setNsrzcbbtzsUUID("0",func);
				box.close();
			}
		});
		return;
	}

	// 若存有对应的自行补正明细数据信息，则此时将明细信息进行展示
	var flag = resData.getAttr('flag');
	if ("Y" == flag) {
		var sbZcbbtzsMxDataVOList = pc.getResData("sbZcbbtzsMxDataVOList", resData);
		$w("nsrzcbbtzsmxGrid").initData(sbZcbbtzsMxDataVOList);
	} else {
		//swordAlert("当前自行补正通知书没有对应的明细信息。");
		return;
	}
}

function initOnOk() {
	var box = this.parent[this.name];// 集成环境下使用
	// 调用主页面的方法，将下拉框初始化为正常状态
	// box.options.param.setSel();
	// 最新要求，当没有自查补报通知书的时候也能进行自查补报，也就说以前的要返回正常状态的方法要改成和能够找到自查补报通知书一样的处理方式
	// 当没有的时候就直接填0，在后台进行判断，如果是0同样不存
	box.options.param.setNsrzcbbtzsUUID("0",func);
	box.close();
}

// 获取自查补报通知书详细信息
function linkCk() {

}

// 将选择的通知书uuid回写到申报页面
function qd() {
	var box = this.parent[this.name];// 集成环境下使用
	var checkBoxData = $w('nsrzcbbtzsGrid').getCheckedData("xz");

	// 将uuid解析后回传
	if (checkBoxData != null && checkBoxData != undefined && checkBoxData != "" && checkBoxData.trs != null && checkBoxData.trs != undefined) {
		var nsrzcbbtzsGridUUid = checkBoxData.trs[0].tds.zxbztzsuuid.value;
		if (nsrzcbbtzsGridUUid != null && nsrzcbbtzsGridUUid != "") {
			// 主页面的回调方法
			box.options.param.setNsrzcbbtzsUUID(nsrzcbbtzsGridUUid,func);
			if (parent._arrVars != null) {
				parent._arrVars['zxbztzsuuid'] = nsrzcbbtzsGridUUid;
			}
			box.close();
		}
	} else {
		tc();
	}
}

// 展示自查补报通知书
function showZcbbtzs() {
	var gird = $w('nsrzcbbtzsGrid');
	var row = $w('nsrzcbbtzsGrid').getCheckedRowData();
	window.row = row;
	// swordAlertIframe('../../sb000/sb033/sb_nspgzcbbtzsAlertPrint.html',
	// {titleName:'自查补报通知书',width: 850,height:450,param:window});
	swordAlertIframe('../../sb/sb000/sb_nspgzcbbtzsAlertPrint.html', {
		titleName : '自查补报通知书',
		width : 850,
		height : 450,
		param : window
	});
}

// 展示每一条自查补报通知书对应的明细数据信息
function showMxData() {
	var nsrzcbbtzsGrid = $w('nsrzcbbtzsGrid');
	var checkBoxData = nsrzcbbtzsGrid.getCheckedRowData();
	if (checkBoxData != null && checkBoxData != undefined && checkBoxData != "" && checkBoxData.tds != null && checkBoxData.tds != undefined) {
		// 获取选中的自查补报通知书对应的uuid和文书字轨
		var nsrzcbbtzsGridUUid = checkBoxData.tds.zxbztzsuuid.value;
		var zg = checkBoxData.tds.zg.value;
		
		// 将单击选择的数据设置为默认选择的数据
		var rows = nsrzcbbtzsGrid.dataDiv().getChildren('div[status!=delete]');
		if (rows.length > 0){
			var rowslength = rows.length;
			for ( var rowIndex = 0; rowIndex < rowslength; rowIndex++){
				var row = rows[rowIndex];
				var zxbztzsuuidOneRow = row.getCell("zxbztzsuuid").get("realValue");
				var xzFlag = "0";
				if(zxbztzsuuidOneRow == nsrzcbbtzsGridUUid){
					// 将当前选中的记录选择标志设置为1
					xzFlag = "1";
				}
				
				var newRow = {"tds" : { "xz" : {"value" : xzFlag}}};
				nsrzcbbtzsGrid.updateRow(row, newRow);
			}
		}
		
		// 根据自查补报通知书uuid查询其对应的明细数据
		var cxBtn = new SwordSubmit();
		cxBtn.pushData('zxbztzsuuid', nsrzcbbtzsGridUUid);
		cxBtn.pushData('zg', zg);
		cxBtn.setCtrl('SBGyCtrl_cxZxbztzsMxData');
		cxBtn.setFunction('onSuccess', 'cxOnSuccess');
		cxBtn.submit();
	}
}
// 明细查询回调方法
function cxOnSuccess(req, resData) {
	// 先将明细信息数据清空
	$w("nsrzcbbtzsmxGrid").reset();

	// 展示数据
	var flag = resData.getAttr('flag');
	if ("Y" == flag) {
		var sbZcbbtzsMxDataVOList = pc.getResData("sbZcbbtzsMxDataVOList", resData);
		$w("nsrzcbbtzsmxGrid").initData(sbZcbbtzsMxDataVOList);
	} else {
		swordAlert("当前自行补正通知书没有对应的明细信息。");
		return;
	}
}

// 退出功能实现
function tc() {
	var box = this.parent[this.name];// 集成环境下使用
	// var box = top[window.name];
	// 调用主页面的方法，将下拉框初始化为正常状态
	// box.options.param.setSel();
	// 最新要求，当没有自查补报通知书的时候也能进行自查补报，也就说以前的要返回正常状态的方法要改成和能够找到自查补报通知书一样的处理方式
	box.options.param.setNsrzcbbtzsUUID("0",func);
	box.close();
}





























