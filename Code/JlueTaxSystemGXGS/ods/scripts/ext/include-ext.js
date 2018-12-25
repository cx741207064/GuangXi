(function () {
    function getQueryParam(name) {
        var regex = RegExp("[?&]" + name + "=([^&]*)");

        var match = regex.exec(location.search) || regex.exec(path);
        return match && decodeURIComponent(match[1]);
    }

    function hasOption(opt, queryString) {
        var s = queryString || location.search;
        var re = new RegExp("(?:^|[&?])" + opt + "(?:[=]([^&]*))?(?:$|[&])", "i");
        var m = re.exec(s);

        return m ? (m[1] === undefined || m[1] === "" ? true : m[1]) : false;
    }

    function getCookieValue(name) {
        var cookies = document.cookie.split("; "),
            i = cookies.length,
            cookie, value;

        while (i--) {
            cookie = cookies[i].split("=");
            if (cookie[0] === name) {
                value = cookie[1];
            }
        }

        return value;
    }

    var scriptEls = document.getElementsByTagName("script"),
        path = scriptEls[scriptEls.length - 1].src,
        rtl = getQueryParam("rtl"),
        theme = getQueryParam("theme") || "classic",
        includeCSS = !hasOption("nocss", path),
        neptune = (theme === "neptune"),
        repoDevMode = getCookieValue("ExtRepoDevMode"),
        suffix = [],
        i = 3,
        neptunePath;

    rtl = rtl && rtl.toString() === "true"

    while (i--) {
        path = path.substring(0, path.lastIndexOf("/"));
    }

    path += "/scripts/ext";

    if (theme && theme !== "classic") {
        suffix.push(theme);
    }
    if (rtl) {
        suffix.push("rtl");
    }

    /**
     * 如果url中没有定义页面风格，则ajax请求后台，从参数表中读取定制查询页面风格（“DZCX_THEME”) 
     */
    if (suffix.length == 0) {
        styleChangeReq = createStyleXMLHTTPRequest();
        styleChangeReq.open("POST", "ajax.sword_CX301DzcxMainCtrl_getDzcxTheme.ashx?ctrl=CX301DzcxMainCtrl_getDzcxTheme", false);
        styleChangeReq.send(null);
        var resText = styleChangeReq.responseText;
        //var resData = JSON.parse(resText);//360浏览器不支持此种写法
        var resData = eval('(' + resText + ')');
        for (var i = 0; i < resData.data.length; i++) {
            if (resData.data[i].name == "theme") {
                suffix.push(resData.data[i].value);
            }
        }
    }

    suffix = (suffix.length) ? ("-" + suffix.join("-")) : "";

    if (includeCSS) {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"" + path + "/resources/css/ext-all" + suffix + ".css\"/>");
    }
    document.write("<script type=\"text/javascript\" src=\"" + path + "/ext-all" + (rtl ? "-rtl" : "") + ".js\"></script>");
    document.write("<script type=\"text/javascript\" src=\"" + path + "/locale/ext-lang-zh_CN.js\"></script>");

    if (neptune) {
        neptunePath = (repoDevMode ? path + "/.." : path) +
            "/packages/ext-theme-neptune/build/ext-theme-neptune" +
            (repoDevMode ? "-dev" : "") + ".js";

        if (repoDevMode && window.ActiveXObject) {
            Ext = {
                _beforereadyhandler: function () {
                    Ext.Loader.loadScript({ url: neptunePath });
                }
            };
        } else {
            document.write("<script type=\"text/javascript\" src=\"" + neptunePath + "\" defer></script>");
        }
    }

    var ReqUtils = window.ReqUtils || {};

    function getPageData(key) {
        var div = document.getElementById("SwordPageData");

        if (div) {
            var data = eval("(" + div.getAttribute("data") + ")").data;

            for (var i = 0; i < data.length; i++) {
                if (data[i].name == key) {
                    return data[i].value;
                }
            }
        }
    }

    function AddBizCode2URL(url) {
        var gwssswjg = getPageData("gwssswjg") || "",
			gwxh = getPageData("gwxh") || "",
			zndm = getPageData("zndm") || "",
			gndm = getPageData("gndm") || "";

        url += url.indexOf("?") != -1 ? "&" : "?";
        url += "gwssswjg=" + gwssswjg;
        url += "&gwxh=" + gwxh,
		url += "&zndm=" + zndm,
		url += "&gndm=" + gndm;

        return url;
    }


    function createStyleXMLHTTPRequest() {
        //1.创建XMLHttpRequest对象     
        //这是XMLHttpReuquest对象无部使用中最复杂的一步     
        //需要针对IE和其他类型的浏览器建立这个对象的不同方式写不同的代码     
        var xmlHttpRequest;
        if (window.XMLHttpRequest) {
            //针对FireFox，Mozillar，Opera，Safari，IE7，IE8     
            xmlHttpRequest = new XMLHttpRequest();
            //针对某些特定版本的mozillar浏览器的BUG进行修正     
            if (xmlHttpRequest.overrideMimeType) {
                xmlHttpRequest.overrideMimeType("text/xml");
            }
        } else if (window.ActiveXObject) {
            //针对IE6，IE5.5，IE5     
            //两个可以用于创建XMLHTTPRequest对象的控件名称，保存在一个js的数组中     
            //排在前面的版本较新     
            var activexName = ["MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
            for (var i = 0; i < activexName.length; i++) {
                try {
                    //取出一个控件名进行创建，如果创建成功就终止循环     
                    //如果创建失败，回抛出异常，然后可以继续循环，继续尝试创建     
                    xmlHttpRequest = new ActiveXObject(activexName[i]);
                    if (xmlHttpRequest) {
                        break;
                    }
                } catch (e) {
                }
            }
        }
        return xmlHttpRequest;
    }

    ReqUtils.getPageData = getPageData;
    ReqUtils.AddBizCode2URL = AddBizCode2URL;

    window.ReqUtils = ReqUtils;
})();