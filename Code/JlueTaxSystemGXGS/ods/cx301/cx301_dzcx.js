/*if(!window.console){
	var fns = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];

    window.console = {};
    for(var i = 0; i < fns.length; ++i){
    	window.console[fns[i]] = function(){};
    }
}*/


Ext.onReady(function () {
    Ext.QuickTips.init();
    Ext.BLANK_IMAGE_URL = "/ods/scripts/ext/resources/themes/images/default/tree/s.gif";

    Ext.widget("dzcxViewport", {
        sqlxh: ReqUtils.getPageData("sqlxh")
    });


});