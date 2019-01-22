var hlwsbTools = baseTools || {};
hlwsbTools.cnf = {
	clientURL: "",
	contextPath: ""
};
hlwsbTools.getClientOrServerUrl = function() {
	return hlwsbTools.cnf.clientURL != "" ? hlwsbTools.cnf.clientURL : hlwsbTools.cnf.contextPath
};
hlwsbTools.getUserIdSeq = function() {
	return this.getCookie("USER_SEQ")
};
hlwsbTools.getUserId = function() {
	var a = "";
	try {
		switch (this.getUserType()) {
		case 3:
		case 4:
			a = this.getCookie("QX_USER").data.USER_ZH;
			break;
		default:
			a = this.getCookie("QX_USER").data.USER_ID
		}
	} catch (b) {}
	return a
};
hlwsbTools.getUserZh = function() {
	return this.getCookie("QX_USER").data.USER_ZH
};
hlwsbTools.getCWKJZDBABZ = function() {
	return this.getCookie("QX_USER").data.CWKJZDBABZ;
};
hlwsbTools.getSHXYDM = function() {
	return this.getCookie("QX_USER").data.SHXYDM
};
hlwsbTools.getUserMc = function() {
	return this.getCookie("QX_USER").data.USER_MC
};
hlwsbTools.getYGZNSRLX_DM = function() {
	return this.getCookie("QX_USER").data.YGZNSRLX_DM
};
hlwsbTools.getSCJYDLXDH = function() {
	return this.getCookie("QX_USER").data.SCJYDLXDH
};
hlwsbTools.getSDHBZ = function() {
	return this.getCookie("QX_USER").data.SDHBZ
};
hlwsbTools.getLxdh = function() {
	return this.getCookie("LOGIN_USER").QYXXS[0].LXDH
};
hlwsbTools.getKhyh = function() {
	return this.getCookie("LOGIN_USER").QYXXS[0].KHYH
};
hlwsbTools.getYhzh = function() {
	return this.getCookie("LOGIN_USER").QYXXS[0].YHZH
};
hlwsbTools.getDz = function() {
	return this.getCookie("LOGIN_USER").QYXXS[0].JYDZ
};
hlwsbTools.getSwjgLrrDm = function() {
	return this.getCookie("LOGIN_USER").QYXXS[0].LRR_DM
};
hlwsbTools.getNsrxx = function(a) {
	return this.getCookie("QX_USER").data[a]
};
hlwsbTools.getUserType = function() {
	return parseInt(this.getCookie("QX_USER").data.USER_TYPE)
};
hlwsbTools.getNSRZG_DM = function() {
	return this.getCookie("QX_USER").data.NSRZG_DM
};
hlwsbTools.getNsrsbh = function() {
	var a = this.getUserZh();
	switch (this.getUserType()) {
	case 3:
		break;
	case 4:
		a = a.substr(0, a.length - 3);
		break;
	default:
		a = ""
	}
	return a
};
hlwsbTools.getDjxh = function() {
	return this.getCookie("QX_USER").data.DJXH
};
hlwsbTools.getDjxhDs = function() {
	return this.getCookie("QX_USER").data.DJXH_DS;
};
hlwsbTools.getYnsrsbh = function() {
	return this.getCookie("QX_USER").data.YNSRSBH
};
hlwsbTools.getOldSbh = function() {
	return this.getCookie("QX_USER").data.OLDSBH
};
hlwsbTools.getUserSwjgMc = function() {
	return this.getCookie("QX_USER").data.SWJG_MC
};
hlwsbTools.getUserSwjgDm = function() {
	return this.getCookie("QX_USER").data.SWJG_DM
};
hlwsbTools.getUserZgswjDm = function() {
	return this.getCookie("QX_USER").data.ZGSWJ_DM
};
hlwsbTools.getNSRMC = function() {
	return this.getCookie("QX_USER").data.NSRMC
};
hlwsbTools.getCurServerDate = function() {
	return this.getCookie("LOGIN_USER").mapParam.CUR_DATE
};
hlwsbTools.getFkpjBh = function() {
	return this.getSkpBz() == 0 ? this.getCookie("QX_USER").data.USER_FKPJBH : hlwsbTools.getSkpTools().getSkph(0)
};
hlwsbTools.getSkpBz = function() {
	return this.getYwxtDm() == "cgs" ? 0 : 1
};
hlwsbTools.getYwxtDm = function() {
	return this.getCookie("LOGIN_USER").KPJS[0].YWXT_DM
};
hlwsbTools.getCurKpyPlx = function() {
	return this.getCookie("LOGIN_USER").KPJS[0].PLX
};
hlwsbTools.getDJZCLX_DM = function() {
	return this.getCookie("QX_USER").data.DJZCLX_DM
};
hlwsbTools.setCookieJsonObjLogin = function(a) {
	if (!this.checkCookie()) {
		return false
	}
	this.setCookie("QX_USER", a);
	return true
};
hlwsbTools.setCookieJsonObj = function(a) {
	if (!this.checkCookie()) {
		return false
	}
	this.setCookie("LOGIN_USER", a);
	return true
};
hlwsbTools.clearAllCookie = function() {
	this.delCookie("LOGIN_USER");
	this.delCookie("QX_USER");
	this.delCookie("USER_SEQ")
};
hlwsbTools.setCookie = function(a, b) {
	if (/[\]\}]$/.test(b)) {
		b = baseTools.stringify(b)
	}
	$.cookie(a, b, {
		domain: DOMAIN,
		expires: 1,
		path: "/"
	})
};
hlwsbTools.getCookie = function(a) {
	if (!this.checkCookie()) {
		this.gotoLogin();
		return ""
	}
	var b;
	if (b == null || b == "") {
		if (window.top[a]) {
			b = {
				data: window.top[a]
			};
			return b
		}
	}
	if (window.sessionStorage) {
		b = sessionStorage.getItem(a)
	} else {
		if (!window.top[a]) {
			window.top[a] = UserData.get(a)
		}
		b = window.top[a]
	}
	if (b == null) {
		alert("\u83b7\u53d6\u4e0d\u5230\u60a8\u7684\u767b\u5f55\u4fe1\u606f,\u8bf7\u91cd\u65b0\u767b\u9646!");
		if (this.getCurPage().indexOf("manage") != -1) {
			this.gotoAdminLogin()
		} else {
			this.gotoLogin()
		}
		return ""
	}
	return baseTools.parse(b)
};
hlwsbTools.delCookie = function(a) {
	$.cookie(a, null, {
		path: "/"
	})
};
baseTools.checkCookie = function() {
	var a = (navigator.cookieEnabled) ? true : false;
	if (!a) {
		alert("\u8bf7\u5f00\u542f\u6d4f\u89c8\u5668COOKIE\u529f\u80fd!");
		return false
	}
	return true
};
baseTools.invalidat = function() {
	var b = document.getElementsByTagName("input");
	for (var a = 0; a < b.length; a++) {
		b[a].disabled = true
	}
}, baseTools.gotoLogin = function() {
	top.window.location.href = this.getLogin()
};
baseTools.gotoAdminLogin = function() {
	top.window.location.href = this.getAdminLogin()
};
baseTools.getWebRoot = function() {
	if (location.href.indexOf("http") != -1) {
		if (location.href.indexOf("/cxdy.html") != -1 || location.href.indexOf("/sb_cwgz.html") != -1 || location.href.indexOf("/sbxxcx.html") != -1) {
			return hlwsbTools.cnf.contextPath
		}
		if (!hlwsbTools.cnf.contextPath || hlwsbTools.cnf.contextPath == "") {
			return location.href.substring(0, location.href.indexOf("/hlwsb"))
		} else {
			return hlwsbTools.cnf.contextPath
		}
	}
	var a = [];
	var c = location.href.split("/");
	for (var b in c) {
		if (c[b] == "web") {
			break
		}
		a.push(c[b])
	}
	a.push("web");
	return a.join("/")
};
baseTools.getLogin = function() {
	return "http://www.gxgs.gov.cn:9711/web"
};
baseTools.getAdminLogin = function() {
	return "http://www.gxgs.gov.cn:9711/web"
};
baseTools.getCaLogin = function() {
	return "http://www.gxgs.gov.cn:9711/web"
};
hlwsbTools.getMmGridHeight = function(e) {
	var a = 2;
	var d = e.next();
	if (d.size() != 0) {
		a = d.height() == 0 ? 24 : d.height()
	}
	var c = document.documentElement.clientHeight;
	var b = baseTools.getCurBrowser().isIE7 ? 29 - a : 0;
	return c - Math.abs(e.offset().top) - a - b
};
hlwsbTools.getMmGridHeightOld = function(e) {
	var a = 2;
	var d = e.next();
	if (d.size() != 0) {
		a = d.height() == 0 ? 24 : d.height()
	}
	var c = document.documentElement.clientHeight;
	var b = baseTools.getCurBrowser().isIE7 ? 190 : 0;
	return c - e.offset().top - a - b
};
baseTools.xhrAjax = function(g) {
	if (hlwsbTools.cnf.clientURL != "") {
		g.url = hlwsbTools.cnf.clientURL + g.url
	} else {
		g.url = hlwsbTools.cnf.contextPath + g.url
	}
	var f = g.params || {};
	var d = true;
	for (var c in f) {
		if ("CUR_USERID" == c) {
			d = false
		}
	}
	if (d) {
		f.CUR_USERID = hlwsbTools.getUserId();
		f.NSRSBH = hlwsbTools.getUserZh();
		if (!f.SSSQ_Q && hlwsbTools.getSSSQ_Q()) {
			f.SSSQ_Q = hlwsbTools.getSSSQ_Q()
		}
		if (!f.SSSQ_Z && hlwsbTools.getSSSQ_Z()) {
			f.SSSQ_Z = hlwsbTools.getSSSQ_Z()
		}
		if (!f.NSRLX_DM && hlwsbTools.getNSRLX_DM()) {
			f.NSRLX_DM = hlwsbTools.getNSRLX_DM()
		}
	}
	var b = baseTools.getUrlQueryString("isPrint");
	var a = baseTools.getUrlQueryString("OLDSBH");
	var e = baseTools.getUrlQueryString("SJLY");
	if (b) {
		f.isPrint = "Y";
		if (a) {
			f.NSRSBH = a
		}
		if (e) {
			f.SJLY = e
		}
		f.ISFROMCXK = baseTools.getUrlQueryString("ISFROMCXK")
	}
	g.params = f;
	return this.xhrAjaxJsonP(g)
};
hlwsbTools.getNSRLX_DM = function() {
	var a = baseTools.getUrlQueryString("NSRLX_DM");
	if (a) {
		return a
	} else {
		return ""
	}
};
hlwsbTools.getSSSQ_Q = function() {
	var a = baseTools.getUrlQueryString("SSSQ_Q");
	if (a) {
		return a
	} else {
		return ""
	}
};
hlwsbTools.getSSSQ_Z = function() {
	var a = baseTools.getUrlQueryString("SSSQ_Z");
	if (a) {
		return a
	} else {
		return ""
	}
};
hlwsbTools.getCentsFramt = function(c, d, b) {
	if (isNaN(c - 0)) {
		return c
	}
	if (!d || d == "") {
		d = 2
	}
	if (typeof(b) == "undefined" || b.length == 0) {
		b = "true"
	}
	c -= 0;
	c = String(c.toFixed(d));
	if (b == "fasle") {
		var a = /(-?\d+)(\d{3})/;
		while (a.test(c)) {
			c = c.replace(a, "$1,$2")
		}
	}
	return c
};
hlwsbTools.urlStr = function(c) {
	var b = "";
	for (var a in c) {
		b += a + "=" + c[a] + "&"
	}
	return b.substr(0, b.length - 1)
};
hlwsbTools.isYH = function() {
	var a = this.getCookie("QX_USER").data.HY_DM.substr(0, 2);
	if (a == "66" || a == "69") {
		return true
	} else {
		return false
	}
};
hlwsbTools.isHY_41_43 = function() {
	var a = this.getCookie("QX_USER").data.HY_DM.substr(0, 2);
	if (a == "41" || a == "43") {
		return true
	} else {
		return false
	}
};
hlwsbTools.isCj_jldw = function(a) {
	if ("1002" == a || "0207" == a || "0211" == a || "1029" == a) {
		return false
	} else {
		return true
	}
};
hlwsbTools.compareDate = function(d, c) {
	if (!d || !c) {
		return false
	}
	var b = d.split("-");
	var b = new Date(d.replace(/-/g, "/"));
	var a = new Date(c.replace(/-/g, "/"));
	if (b > a) {
		return true
	}
	return false
};
hlwsbTools.isXgmGrGtgsh = function(a) {
	if (a == "410" || a == "430") {
		return true
	}
	return false
};
hlwsbTools.trim = function(a) {
	if (a) {
		return a.replace(/(^\s*)|(\s*$)/g, "")
	}
	return a
};
hlwsbTools.isHKMY = function(a) {
	if (!a) {
		return false
	}
	if ("101020604" == a || "0818" == a) {
		return true
	} else {
		return false
	}
};
hlwsbTools.isHK_SN_WQQY = function(a) {
	if (!a) {
		return false
	}
	if ("101020604" == a || "101020605" == a || "101020602" == a) {
		return true
	} else {
		return false
	}
};
hlwsbTools.isSBBZT_SB = function(b, a) {
	if (b == "2" || b == "3") {
		if (parseInt(a) == 1) {
			alert("\u5df2\u7533\u62a5\uff0c\u4e0d\u80fd\u4fdd\u5b58")
		}
		if (parseInt(a) == 2) {
			alert("\u5df2\u7533\u62a5\uff0c\u4e0d\u80fd\u5220\u9664")
		}
		return true
	} else {
		return false
	}
};
hlwsbTools.checkMonth = function(b, a) {
	if (!b || !a) {
		return false
	}
	var d = b.split("-")[1];
	for (var c = 0; c < a.length; c++) {
		if (d == a[c]) {
			return true
		}
	}
	return false
};
hlwsbTools.getElemFromDate = function(b, a) {
	if (b) {
		var c = b.split("-");
		return c[a]
	}
	return 0
};
hlwsbTools.isNB = function(d, b) {
	var c = parseInt(d.split("-")[1]);
	var a = parseInt(b.split("-")[1]);
	if ((a - c) == 11) {
		return true
	} else {
		return false
	}
};
hlwsbTools.checkSsqDate = function(str) {
	var reg = /^\d{4}-{1}[0-1]{1}[0-9]{1}-{1}[0-3]{1}[0-9]{1}$/;
	if (str.match(reg)) {
		var y = parseInt(eval(str.split("-")[0]));
		var m = parseInt(eval(str.split("-")[1]));
		var d = parseInt(eval(str.split("-")[2]));
		if (parseInt(y) <= 0 || parseInt(m) <= 0 || parseInt(d) <= 0) {
			alert("\u6240\u5c5e\u671f\u6709\u8bef\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55\u7cfb\u7edf\uff01");
			return false
		}
		return true
	} else {
		alert("\u6240\u5c5e\u671f\u6709\u8bef\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55\u7cfb\u7edf\uff01");
		return false
	}
};
hlwsbTools.checkDateForm = function(str) {
	var reg = /^\d{4}-{1}[0-1]{1}[0-9]{1}-{1}[0-3]{1}[0-9]{1}$/;
	if (str.match(reg)) {
		var y = parseInt(eval(str.split("-")[0]));
		var m = parseInt(eval(str.split("-")[1]));
		var d = parseInt(eval(str.split("-")[2]));
		if (parseInt(y) <= 0 || parseInt(m) <= 0 || parseInt(d) <= 0) {
			return false
		}
		return true
	} else {
		return false
	}
};
hlwsbTools.getMapListKey = function(c, a, b) {
	if (c && c[a] && c[a][b]) {
		return c[a][b]
	} else {
		return "0.00"
	}
};
hlwsbTools.getSBMS = function() {
	return 2
};
hlwsbTools.getQysdsZsxm = function() {
	return "04"
};
hlwsbTools.isDjzclx_dm4143 = function() {
	var a = hlwsbTools.getDJZCLX_DM();
	a = a.substr(0, 2);
	if ("41" == a || "43" == a) {
		return true
	} else {
		return false
	}
};
$(function() {
	var c = baseTools.getUrlQueryString("HIDE");
	if (c && c == "1") {
		var d = $(":button");
		if (d && d.length > 0) {
			for (var b = 0; b < d.length; b++) {
				if (d[b].value.indexOf("\u8fd4\u56de") != -1) {
					d[b].parentNode.style.display = "none"
				}
			}
		}
	}
	var a = $(".toolBar").find("#calcButton");
	if (a.length == 0) {
		$(".toolBar").append('<li id="calcButton" style="display:none;" class="line">line</li><li  style="display:none;" id="inputLi" class=""><input style="vertical-align: middle;" checked id="calcInput" type="checkbox" onclick="cell.calcManual(this);">\u662f\u5426\u81ea\u52a8\u8ba1\u7b97</li>')
	}
});
hlwsbTools.getDaysInMonth = function(b, a) {
	a = parseInt(a);
	b = parseInt(b);
	switch (a) {
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
		return 31;
	case 4:
	case 6:
	case 9:
	case 11:
		return 30
	}
	return b % 100 == 0 || b % 4 != 0 ? 28 : 29
};
hlwsbTools.isNotGsqy = function(a) {
	if (a != 10104001002010) {
		return true
	}
	return false
};
hlwsbTools.isNotSydw = function(a) {
	if (a != 10104001002030) {
		return true
	}
	return false
};
hlwsbTools.isZZS_XGM = function(a) {
	return (a == "101010201")
};
hlwsbTools.isZZS_CPY_YBNSR = function(a) {
	return (a == "101010101" || a == "101010102")
};
hlwsbTools.dateDiff = function(a, c, b) {
	if (!c || !b) {
		return 0
	}
	if (typeof c == "string") {
		c = new Date(c.replace(/\-/g, "/"))
	}
	if (typeof b == "string") {
		b = new Date(b.replace(/\-/g, "/"))
	}
	var e = (b.getTime() - c.getTime()) / 1000 / 60 / 60;
	switch (a) {
	case "ww":
		e /= 7;
		break;
	case "dd":
		e /= 24;
		break;
	case "hh":
		e /= 60;
		break;
	case "nn":
		e /= 60;
		break
	}
	return Math.ceil(e)
};
document.onkeyup = function(a) {
	a = a || window.event;
	if (a.keyCode == 17) {
		window._ctrl = false
	}
};
document.onkeydown = function(a) {
	a = a || window.event;
	if (a.keyCode == 17) {
		window._ctrl = true
	} else {
		if (window._ctrl && a.keyCode == 119) {
			showAutoCalc()
		} else {
			window._ctrl = false
		}
	}
};

function showAutoCalc() {
	var b = document.getElementById("calcButton");
	var a = document.getElementById("inputLi");
	if (!b) {
		if (window.frames[0].document) {
			b = window.frames[0].document.getElementById("calcButton");
			a = window.frames[0].document.getElementById("inputLi")
		}
	}
	if (!b) {
		return
	}
	if (b.style.display == "none") {
		b.style.display = "block";
		a.style.display = "block"
	} else {
		b.style.display = "none";
		a.style.display = "none"
	}
}
hlwsbTools.helpWD = function() {
	var b = 900;
	var e = 600;
	var d = (window.screen.availHeight - 30 - e) / 2;
	var c = (window.screen.availWidth - 10 - b) / 2;
	var a = baseTools.getUrlQueryString("SBBZL_DM");
	window.open("/hlwsb/help/help.html?SBBZL_DM=" + a, "", "height=" + e + ",,innerHeight=" + e + ",width=" + b + ",innerWidth=" + b + ",top=" + d + ",left=" + c + ",toolbar=no,menubar=no,scrollbars=yes,resizeable=yes,location=no,status=no")
};
hlwsbTools.cont = function(d) {
	if (d) {
		var c = 1;
		var a = d.split("*");
		for (var b = 0; b < a.length; b++) {
			c = c * parseFloat(hlwsbTools.trim(a[b]))
		}
		return parseFloat(c.toFixed(2))
	}
	return 0
};
hlwsbTools.getYhyZsl = function() {
	return 0.005
};
hlwsbTools.isXgmNsr = function(a) {
	return a == "101010201" || a == "101010202" || a == "101010203"
};
hlwsbTools.setSSq = function(d, c) {
	if (d) {
		var b = d.split("-");
		var a = "";
		if (c) {
			a = b[0] + "\u5e74" + b[1] + "\u6708" + b[2] + "\u65e5"
		} else {
			a = b[0] + "\u5e74" + b[1] + "\u6708"
		}
		return a
	}
};
hlwsbTools.setSSsq = function(c, a) {
	c = c.replace("-", "\u5e74");
	c = c.replace("-", "\u6708");
	c = c + "\u65e5";
	a = a.replace("-", "\u5e74");
	a = a.replace("-", "\u6708");
	a = a + "\u65e5";
	var b = c + " \u81f3 " + a;
	return b
};
var UserData = {
	storageObject: null,
	initialize: function() {
		if (!this.storageObject) {
			this.storageObject = document.createElement("div");
			this.storageObject.addBehavior("#default#userData");
			this.storageObject.style.display = "none";
			document.body.appendChild(this.storageObject)
		}
	},
	set: function(a, b) {
		if (!this.storageObject) {
			this.initialize()
		}
		this.storageObject.setAttribute(a, b);
		this.storageObject.save("OfflineStorage");
		return b
	},
	get: function(a) {
		if (!this.storageObject) {
			this.initialize()
		}
		this.storageObject.load("OfflineStorage");
		return this.storageObject.getAttribute(a)
	},
	del: function(a) {
		if (!this.storageObject) {
			this.initialize()
		}
		this.storageObject.removeAttribute(a);
		this.storageObject.save("OfflineStorage")
	}
};
hlwsbTools.formatFloatData = function(b, c) {
	var a = Math.pow(10, c);
	return parseInt(b * a, 10) / a
};
hlwsbTools.getNsrztdm = function() {
	return this.getCookie("QX_USER").data.NSRZT_DM
};
hlwsbTools.getYqwrdybr = function() {
	return this.getCookie("QX_USER").data.YQWRDYBR
};
hlwsbTools.initYfSelect = function(d) {
	if (!d) {
		return ""
	}
	var e = {};
	var b = "";
	var c = "";
	var a = "";
	var f = "";
	if (d.substr(5, 2) == "03") {
		b = "1\u6708\t1\r\n2\u6708\t2\r\n3\u6708\t3\r\n";
		c = 1;
		a = 2;
		f = 3
	} else {
		if (d.substr(5, 2) == "06") {
			b = "4\u6708\t4\r\n5\u6708\t5\r\n6\u6708\t6\r\n";
			c = 4;
			a = 5;
			f = 6
		} else {
			if (d.substr(5, 2) == "09") {
				b = "7\u6708\t7\r\n8\u6708\t8\r\n9\u6708\t9\r\n";
				c = 7;
				a = 8;
				f = 9
			} else {
				if (d.substr(5, 2) == "12") {
					b = "10\u6708\t10\r\n11\u6708\t11\r\n12\u6708\t12\r\n";
					c = 10;
					a = 11;
					f = 12
				}
			}
		}
	}
	e.yfSel = b;
	e.fMonth = c;
	e.sMonth = a;
	e.tMonth = f;
	return e
};
$(document).ready(function() {
	var $div = $('.panelBar');
	var $bc = $('.panelBar :input[value="保存"]');
	var $sb = $('.panelBar :input[value="申报"]');
	var $zc = $('.panelBar :input[value="暂存"]');
	if ($div.length > 0 && $bc.length > 0) {
		var $li = $('.panelBar li:eq(0)').clone();
		if ($zc.length == 0) {
			$li.find(':input[value="保存"]').val('暂存');
			$li.find('a').attr('class', 'able');
			$li.insertBefore($('.panelBar li:eq(0)').get(0));
			$('<li class="line">line</li>').insertAfter($li.get(0));
		}
	}
});