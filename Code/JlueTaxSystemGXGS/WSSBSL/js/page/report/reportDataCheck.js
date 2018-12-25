//报表数据校验（点击保存时）总入口
function reportDataCheck() {
    /**
	 * 校验示例
	if(bbmc=="WBJK_SB_NDSDS_2014_TBBD"){
		var e26 = getTabTableData("填报表单","report1_E26");
	}
	*/
    doSaveBbsj(); //执行保存报表数据
}


function doSaveBbsj() {
    //保存报表数据
    if (dynamicBz == "Y") {
        _submitRowInput(report1);
    } else {
        _submitTable(report1);
    }
}