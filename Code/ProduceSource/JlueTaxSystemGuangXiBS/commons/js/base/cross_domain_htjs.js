if (document.domain.indexOf("tax.cn") > -1) {
	try{
    document.domain = "tax.cn";
	}catch(e){}
} else {
	// 其它情况，不改变document.domain
}

// 解决IE下无location.origin问题
if (!document.location.origin) {
	document.location.origin = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ':' + document.location.port : '');
}