/***--------------以下部分为跨系统调用-----------------------------------*/
//跨系统结构转换工具
function dataSelfDefine(dataObj, tidOrCtrl) {
    var dataContainer = [];
    for (var key in dataObj) {
        if (typeof (dataObj[key]) == "string") {
            dataContainer[dataContainer.length] = {
                'name': key,
                'value': dataObj[key] + '',
                'sword': 'attr'
            };
        } else {
            var tempArrayMap = dataObj[key];
            var tempSubmitDataObj = {
                'sword': "SwordGrid",
                'name': key,
                'beanname': null,
                'trs': []
            };
            var templength = tempArrayMap.length;
            for (var i = 0; i < templength; i++) {
                var trData = {
                    'tds': {}
                };
                var tempMap = tempArrayMap[i];
                for (var tempkey in tempMap) {
                    trData.tds[tempkey] = {
                        value: tempMap[tempkey]
                    };
                }
                tempSubmitDataObj.trs[i] = trData;
            }
            dataContainer[dataContainer.length] = tempSubmitDataObj;
        }
    }
    var result = {
        'tid': null,
        'ctrl': null,
        'page': null,
        'data': dataContainer
    };
    for (var key in tidOrCtrl) {
        result[key] = tidOrCtrl[key];
    }
    return JSON.encode(result);
}
var kxtform;
function formCreate() {
    if (kxtform) return kxtform;
    kxtform = new Element('form', {
        'name': this.formKey,
        'id': this.formKey,
        'method': 'post',
        'display': 'none',
        'target': '',
        'action': ''
    }).inject(document.body);
    new Element('input', {
        'name': 'postData',
        'type': 'hidden',
        'id': 'kxtinput'
    }).inject(kxtform);
}

//业务系统间调用Json传递，在主窗口中创建新的tab。
function openTreeNodedyJson(gndm, url, data) {
    var tabObj = pc.getWidget('tab1');
    obj = {
        id: gndm,
        title: "业务系统间调用",
        tabContentType: 'iframe',
        isCloseBtn: 'true',
        tabItemWidth: 150
    };
    addTabItem1(obj);
    $$(".tab_box ul li").each(function (el, i) {
        el.setStyle("width", "150px");
    });
    //setTabSpanWidth();
    pc.getWidget('tab1').scrollRight();
    var iframe = tabObj.getTabcontent(gndm);
    formCreate();
    var urlStrArray = url.split("?");
    var tempMap = {};
    var ctvalue = urlStrArray[1].substring(urlStrArray[1].indexOf("=") + 1).replace('&', "?");
    kxtform.action = urlStrArray[0].replace("sword", "form.sword.ashx");//;
    if (urlStrArray[1].startWith("tid")) {
        tempMap["tid"] = ctvalue;
    } else {
        tempMap["ctrl"] = ctvalue;
    }
    kxtform.getElement('input[name=postData]').value = dataSelfDefine(data, tempMap);
    kxtform.target = iframe.name;
    kxtform.submit();
}

// 业务系统间调用，在主窗口中创建新的tab。

function openTreeNodedy(gndm, url) {
    var title = "业务系统间调用";
    if (url.indexOf("&title=") != -1) {
        var title = url.substring(url.indexOf("&title=") + 7);
        if (title.indexOf("&") != -1) {
            title = title.substring(0, title.indexOf("&"));
        }
        title = decodeURI(title);
    }
    var obj = {
        id: gndm,
        title: title,
        tabContentType: 'iframe',
        src: url,
        isCloseBtn: 'true',
        tabItemWidth: 150
    };
    addTabItem1(obj);
    $$(".tab_box ul li").each(function (el, i) {
        el.setStyle("width", "150px");
    });
    //setTabSpanWidth();
    top.pc.getWidget('tab1').scrollRight();
}

// 跨系统调用js
//测试
/*
var serviceCs_1="DJXH=10123501000000175003&PZXH=100000000245000332&SBUUID=23500000000000100000000245000332&YZPZZLDM=BDA0610100";
callserv(serviceCs_1,"R_DZCX_SB_001","","","");
*/

function callserv(serviceCs, BM, lo, x, y) {
    if (BM == undefined || BM == null) {
        alert("跨系统调用参数输入错误，第一位输入调用参数如果为空输入'',第二位输入关联关系编号！");
        return;
    }
    var data = [];
    if (BM == 'R_DZCX_SB_001') {
        data.push("http://www.gxgs.gov.cn:8012/sword?ctrl=GY007SbSbbdxxCkCtrl_initView");
    } else if (BM == 'R_DZCX_SB_002') {
        data.push("sword_SB151zlbsslCtrl_initView.aspx");
    }
    data.push(serviceCs);
    data.push(BM);
    data.push(lo);
    data.push(x);
    data.push(y);
    callservCallBack(data);
}

function callservCallBack(data) {
    if (data == null || data.length <= 0) {
        alert("获取跨系统调用配置出错！");
        return;
    }

    callserv1(data[0], data[1], data[2], data[3], data[4], data[5]);
}

function callserv1(res, serviceCs, BM, lo, x, y) {
    /*
	if(BM==undefined){
		swordAlertWrong("跨系统调用参数输入错误，第一位输入调用参数如果为空输入'',第二位输入关联关系编号！");
		return;
	}
	
	
		var options = {
				url : "ajax.sword?ctrl=DZBSXTKJ020KxtdyCtrl_xtdyCstq",  
//				async:false,
				method:"post", //提交方式
				data:'bm='+BM+'&loca'+lo, //发送的数据
	          	onSuccess : function(res) {
	          		
	          		alert(res);
	          		alert(JSON.decode(res));
	          		JSON.decode(res).data;
				},
	          	onFailure : function() {
//					alert('获取服务器缓存代码表信息出错！')
				}
		  };
		  new Request(options).send(options.data);
	*/

    /*
	var dataArray = res.data;
	if (!$chk(dataArray)) {
		swordAlertWrong("获取跨系统调用配置出错！");
		return;
	}
	var loca = dataArray.filter(function(item, index) {
		return item.name == "loca"
	})[0] == null ? "" : dataArray.filter(function(item, index) {
		return item.name == "loca"
	})[0].value;

	// 还一个业务系统调用编号，需要有个独立配置用例，在此先写死，如xh=‘123’
	var str = "";
	if(loca!="") str=loca.indexOf("&") == 0 ? loca : "&" + loca;
	
	if (!$chk(dataArray.filter(function(item, index) {
		return item.name == "URL"
	})[0]) || !$chk(dataArray.filter(function(item, index) {
		return item.name == "URL"
	})[0].value)) {
		swordAlertWrong("获取跨系统调用配置出错！");
		return;
	}
	var url = dataArray.filter(function(item, index) {
		return item.name == "URL"
	})[0].value;
	var tcms = dataArray.filter(function(item, index) {
		return item.name == "tcms"
	})[0].value;
	
	var paramstr="";	
	if(serviceCs!=undefined && typeof(serviceCs)=='string'){
		paramstr = serviceCs.replace(/(^\s*)(\s*$)/g, '');	//trim（）
		if(paramstr!="")var paramstr = serviceCs.indexOf("&") == 0 ? serviceCs : "&" + serviceCs;
	} else if (serviceCs != undefined && typeof (serviceCs) == 'object') {
		if (url.lastIndexOf("?") <= 0) {
			url = url + str.substring(1);
		} else {
			url = url + str;
		}
		url = url + "&" + Math.random();
		openTreeNodedyJson(Math.random(),url,serviceCs);
		return;
	}
	
	if (url.lastIndexOf("?") <= 0) {
		url = url + str.substring(1) + paramstr;
	} else {
		url = url + str + paramstr;
	}
	url = url + "&" + Math.random();
	*/

    /**
	 *单点登录漫游问题
	 
	if($chk(mycs)){
		url = url + "&fromZone="+mycs;
	}*/


    var url = res + "&" + serviceCs;
    window.open(url);

    /*
	
	if (tcms == 0) { // 判断弹出模式0为模态，1为非模态
		if (x == undefined || y == undefined || x == "" || y == "") {
			openXtgnToAlertIframe("","业务系统间调用",768,600,url);
		} else {
		   openXtgnToAlertIframe("","业务系统间调用",x,y,url);
		}
	} else {
		openTreeNodedy(Math.random(), url);
	}
	*/
}
function xcallserv(serviceCs, BM) {
    if (BM == undefined) {
        swordAlertWrong("跨系统调用参数输入错误，第一位输入调用参数如果为空输入'',第二位输入关联关系编号！");
        return;
    }
    var caparam = $w("catchParam");
    serviceCs.userID = caparam.getValue("swrydm");
    serviceCs.swjgdm = caparam.getValue("swjgdm");
    serviceCs.swrysfdm = caparam.getValue("swrysfdm");
    var c = Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000;
    var b = new Date(c);
    var tempStr = SwordDataFormat.formatDateToString(b, "yyyy-MM-dd HH:mm:ss");
    serviceCs.ExpireTime = tempStr;
    var ss = JSON.encode(serviceCs);
    var sub = pc.create("SwordSubmit");
    sub.pushData("bm", BM);
    sub.pushData("serviceCs", ss);
    var res = sub.submit({
        "ctrl": "MH007KxtdyCtrl_xxtdyCstq"
    });
    var dataArray = res.data;
    if (!$chk(dataArray)) {
        swordAlertWrong("获取跨系统调用配置出错！");
        return;
    }
    // 还一个业务系统调用编号，需要有个独立配置用例，在此先写死，如xh=‘123’
    var str = "";
    if (!$chk(dataArray.filter(function (item, index) {
		return item.name == "URL"
    })[0]) || !$chk(dataArray.filter(function (item, index) {
		return item.name == "URL"
    })[0].value)) {
        swordAlertWrong("获取跨系统调用配置出错！");
        return;
    }
    var url = dataArray.filter(function (item, index) {
        return item.name == "URL"
    })[0].value;
    var srice = dataArray.filter(function (item, index) {
        return item.name == "srice"
    })[0].value;
    PageContainer.implement({
        SwordformSubmit: function (req, target) {
            var form = new Element('form', {
                'name': "swordDownLoadForm",
                'method': 'post',
                'target': target,
                'action': url,
                styles: { 'display': 'none' }
            }).inject($(document.body));
            new Element('input', {
                'name': "token"
            }).inject(form).set('value', srice);
            form.submit();
        }
    });
    var sub = pc.create('SwordSubmit');
    sub.options.ctrl = 'zrIndex.do';
    sub.pushData('token', "11");
    var winheight = screen.availHeight;
    var winwidth = screen.availWidth - 10;
    var sUserAgent = navigator.userAgent;
    var isWin2003 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
    if (isWin2003) winheight = winheight - 40
    var strEditDlgFeather = 'top=0,left=0,toolbar=no,menubar=no,scrollbars=no,width=' + winwidth + ',height=' + winheight + ',resizable=no,location=no, status=no';
    var ranNum = Math.random() + "";
    if (ranNum.indexOf('.') != -1) ranNum = ranNum.substr(ranNum.indexOf('.') + 1, ranNum.length);
    var openErrorWindowName = "openErrorWindowName" + ranNum;
    var openWin = top.window.open('about:blank', "", strEditDlgFeather);
    openWin.name = openErrorWindowName;
    sub.options.postType = "form_" + openErrorWindowName;
    sub.submit();
}
// 业务系统调用测试
query = {
    QueryString: function (item, loca) {
        var svalue = loca.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)",
				"i"));
        return svalue ? svalue[1] : svalue;
    }
}
YWDY = {
    QueryString: function (item) {
        var svalue = location.search.match(new RegExp("[\?\&]" + item
				+ "=([^\&]*)(\&?)", "i"));
        return svalue ? svalue[1] : svalue;
    }
}
/***--------------以上部分为跨系统调用-----------------------------------*/
/**
 * 
 * @param xtbm 系统编码
 * @param title 显示title
 * @param width alertIframe宽度
 * @param height alertIframe高度
 * @param url 打开的URL地址
 * @return
 */
function openXtgnToAlertIframe(xtbm, title, width, height, url) {
    if (xtbm == undefined || xtbm == null || xtbm == "") {
        swordAlertIframe(url, {
            titleName: title,
            width: width,
            height: height,
            param: window
        });
    }
}
function addTabItem1(obj) {
    if ($chk(obj)) {
        obj.isShowMenuItem = ["false", "true", "true", "true"];
        top.pc.getWidget('tab1').addTabItem(obj);
        $$(".tab_box ul li").each(function (el, i) {
            el.setStyle("width", "150px");
        });
        //setTabSpanWidth();
        top.pc.getWidget('tab1').scrollRight();
    }
}