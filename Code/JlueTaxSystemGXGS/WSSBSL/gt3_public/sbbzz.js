
/*申报表暂存调用*/
function getSwryDm() {
    //var caparam = $w("catchParam");
    //var swrydm = caparam.getValue("swrydm");
    var swrydm = null;;
    $.postJSON("/WSSBSL/do_index_Index_loadNsrDjxh.action?wssbtid=" + Math.round(Math.random() * 1000000), function (data) {
        if (data && data.length > 0) {
            swrydm = data[0];
        }
    });
    return swrydm;
}