/**
 * <ol>
 * date:2012-1-6 editor:yanghongjian
 * <li>创建文档</li>
 * <li>按需使用编码加载JS组件</li>
 * </ol>
 */
var hostUrl = window.location.host.match('\\w+.([\\w.-]+)[:\\w]*');
//var DOMAIN = hostUrl[1];
var DOMAIN = document.domain;
var COOKIE_DOMAIN = '.' + DOMAIN;
try {
    document.domain = DOMAIN;
} catch (err) {
}

var _curPage = window.document.location.href;
var _curPagePath = window.document.location.pathname;
var pos = _curPage.indexOf(_curPagePath);
var prePath = _curPage.substring(0, pos);
var postPath = _curPagePath.substring(0, _curPagePath.substr(1).indexOf('/') + 1);
// 站点根路径
var webRoot = prePath + postPath;

var href = window.location.href;
var host = window.location.host;
var f1 = href.substring(href.indexOf(host));
var f2 = f1.substring(f1.indexOf("/"));
var root = f2.split("/");

// alert(root)

// 获取commons路径
var INCLUDE_NAME = 'include_ui_jcpt';
var COMMONS_NAME = 'commons';
var commonsJsPath;
var commonsJsUrl = "";
var includePath;
(function () {
    var path = [];
    var hds = document.getElementsByTagName("script");
    var src, ds;
    for (var i = 0; i < hds.length; i++) {
        if (hds[i].src.length > 0) {
            includePath = hds[i].getAttribute('src');
            if (includePath.indexOf(INCLUDE_NAME) != -1) {
                ds = includePath.split('/');
                for (var x = 0; x < ds.length; x++) {
                    path.push(ds[x]);
                    if (ds[x] == COMMONS_NAME) {
                        break;
                    }
                }
                break;
            }
        }
    }
    commonsJsPath = commonsJsUrl + path.join('/');
})();

(function () {
    var includeDM = 'dm';
    var re = new RegExp("" + includeDM + "=([^&?]*)", "ig");
    var dm = '';
    try {
        dm = ((includePath.match(re)) ? (includePath.match(re)[0].substr(includeDM.length + 1)) : "");
    } catch (e) {
        dm = ''
    }
    // 没有指定js代码时，只加载基础JS
    var path = [];
    if (dm.length == 0) {
        // 为指定dm时返回基础类css/JS
        path.push(getCssJsPath(commonsJsPath + "/js/", 10));
    } else {
        re = /[^13579]{1,2}/;// 表示不可以有1 3 5 7 9的1到2位的偶数
        if (!re.test(dm.length)) {
            alert('请正确使用CSS/JS编码!');
            return;
        }
        var tem;
        for (var i = 0; i < dm.length; ++i) {
            // tem = getCssJsPath(commonsJsPath + "/js/", dm[i] + dm[++i]);
            tem = getCssJsPath(commonsJsPath + "/js/", dm.charAt(i) + dm.charAt(++i));
            if (tem.length > 0)
                path.push(tem);
        }
    }
    if (path.length > 0){
        document.write(path.join(''));
    }

})();

// 根据JS编码获取对应的js组件路径
function getCssJsPath(basePath, dm) {
    var path = [];
    switch (parseInt(dm, 10)) {
        case 50://基础类css/JS
            path.push('<script src="' + basePath + 'base/jquery.min.js" type="text/javascript"></script>');
            path.push('<script src="' + basePath + 'base/base_tools.js?version=20190328" type="text/javascript"></script>');
            path.push('<script src="' + basePath + 'base/jquery.cookie.js" type="text/javascript"></script>');
            path.push('<script src="' + basePath + 'base/backspace_disable.js" type="text/javascript"></script>');
            path.push('<link href="' + basePath + '../../common/loading.css"  rel="stylesheet" type="text/css">');
            path.push('<script src="' + basePath + '../../common/loading.js" type="text/javascript"></script>');
            break;
        case 51://通用弹出
            path.push('<link href="' + basePath + '../../plugs/layui/css/layui.css"  rel="stylesheet" type="text/css">');
            path.push('<script src="' + basePath + '../../plugs/layui/layui.js" type="text/javascript"></script>');
            break;
        case 52://表格 datatables
            path.push('<link href="' + basePath + 'dataTables/reset.css"  rel="stylesheet" type="text/css">');
            path.push('<link href="' + basePath + 'dataTables/jquery.dataTables.css"  rel="stylesheet" type="text/css">');
            path.push('<link href="' + basePath + 'dataTables/table.css"  rel="stylesheet" type="text/css">');
            path.push('<script src="' + basePath + 'dataTables/jquery.dataTables.js" type="text/javascript"></script>');
            break;
        case 75://表格 datatables
            path.push('<link href="' + basePath + '../../plugs/layui/css/layui.css"  rel="stylesheet" type="text/css">');
            path.push('<script src="' + basePath + '../../plugs/layui/layui.all.js" type="text/javascript"></script>');
            break;
        default:
            break;
    }
    return path.join('');
}
