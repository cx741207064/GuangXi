/**
 * IE下的JS加速
 */

/**
 * <ol>
 * date:2012-1-6 editor:yanghongjian
 * <li>创建文档</li>
 * <li>按需使用编码加载JS组件</li>
 * </ol>
 */

//try {
//	document.domain = "ha-n-tax.gov.cn";
//} catch (err) {
//}
//var DOMAIN = "ha-n-tax.gov.cn";
var hostUrl = window.location.host.match('\\w+.([\\w.-]+)[:\\w]*');
var DOMAIN = hostUrl[1];
try{
   //document.domain="localhost";
}catch(e){}
var _curPage = window.document.location.href;
var _curPagePath = window.document.location.pathname;
var pos = _curPage.indexOf(_curPagePath);
var prePath = _curPage.substring(0, pos);
var postPath = _curPagePath.substring(0, _curPagePath.substr(1).indexOf('/') + 1);
//站点根路径
var webRoot = prePath + postPath;

var href = window.location.href;
var host = window.location.host;
var f1 = href.substring(href.indexOf(host));
var f2 = f1.substring(f1.indexOf("/"));
var root = f2.split("/");

//alert(root)

//获取commons路径
var INCLUDE_NAME = 'include_ui';
var COMMONS_NAME = 'commons';
var commonsJsPath;
var includePath;
(function() {
    var path = [];
    var hds = document.getElementsByTagName("script");
    var src,ds;
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
    commonsJsPath = path.join('/');
    
})();

(function() {
    var includeDM = 'dm';
    var re = new RegExp("" + includeDM + "=([^&?]*)", "ig");
    var dm = '';
    try {
        dm = ((includePath.match(re)) ? (includePath.match(re)[0].substr(includeDM.length + 1)) : "");
    } catch(e) {
        dm = ''
    }
    //没有指定js代码时，只加载基础JS
    var path = [];
    if (dm.length == 0) {
        //为指定dm时返回基础类css/JS
        path.push(getCssJsPath(commonsJsPath + "/js/", 10));
    } else {
        re = /[^13579]{1,2}/;//表示不可以有1 3 5 7 9的1到2位的偶数
        if (!re.test(dm.length)) {
            alert('请正确使用CSS/JS编码!');
            return;
        }
        var tem;
        for (var i = 0; i < dm.length; ++i) {
//            tem = getCssJsPath(commonsJsPath + "/js/", dm[i] + dm[++i]);
            tem = getCssJsPath(commonsJsPath + "/js/", dm.charAt(i) + dm.charAt(++i));
            if (tem.length > 0)
                path.push(tem);
        }
    }
    if (path.length > 0)
        document.write(path.join(''));

})();
//根据JS编码获取对应的js组件路径
function getCssJsPath(basePath, dm) {
    var path = [];
    var lj = '';
    var eFlag = false;
    if(external && typeof external.get_dexists != "undefined" && typeof external.get_dexists != "unknown") {
    	var dir = external.get_dexists('html/hlwsbWeb');
    	if(dir != '') {
    		eFlag = true;
    	}
    }
    var openM = '';
    if(external && typeof external.GetClientCNF != "undefined" && typeof external.GetClientCNF != "unknown") {
    	openM = external.GetClientCNF("hlwsb.openmethod");
    }
    switch (parseInt(dm, 10)) {
    	/*
        case 10: //基础类css/JS
            path.push('<link href="' + basePath + '../../commons/themes/default/main.css"  rel="stylesheet" type="text/css">');
            path.push('<script src="' + basePath + 'base/jquery-1.7.1.min.js" type="text/javascript"></script>');
            path.push('<script src="' + basePath + 'base/base_tools.min.js" type="text/javascript"></script>');
            path.push('<script src="' + basePath + 'jquery.cookie.js" type="text/javascript"></script>');
            path.push('<script src="' + basePath + 'lhgDialog-4.2.0/lhgdialog.min.js?skin=blue" type="text/javascript"></script>');
            path.push('<script src="' + basePath + 'dwz/js/jquery.bgiframe.js" type="text/javascript"></script>');
            break;
         */
    case 10:
    		if(eFlag && openM != '' && openM == 'filelogin') {
        		lj = external.get_fexists('html/hlwsbWeb/commons/themes/default/main.css');
        		path.push('<link href="' + lj + '"  rel="stylesheet" type="text/css">');
        		
        		lj = external.get_fexists('html/hlwsbWeb/commons/js/sc/base_all.js');
        		path.push('<script src="' + lj + '" type="text/javascript"></script>');	    	    	         	
        	} else {
        		path.push('<link href="' + basePath + '../../commons/themes/default/main.css"  rel="stylesheet" type="text/css">');
        		path.push('<script src="' + basePath + 'sc/base_all.js" type="text/javascript"></script>');        		
        	}	        
	        break;
        case 11: //JS模板引擎
            path.push('<script src="' + basePath + 'base/base_template.js" type="text/javascript"></script>');
            break;
        case 20: //布局UI类css/JS
            //分割条组件
            //splitter组件在jquery1.7下在致使火狐自动关闭
            path.push('<link href="' + basePath + 'splitter/splitter.css"  rel="stylesheet" type="text/css">');
            path.push('<script src="' + basePath + 'splitter/splitter-152.js" type="text/javascript"></script>');
            break;
        case 21: //窗口类
            //当需要模态弹出多个窗口时 不要再加载该组件

            break;
        case 22: //zTree组件
            path.push('<link href="' + basePath + 'ztree3.5/css/zTreeStyle/zTreeStyle.css"  rel="stylesheet" type="text/css">');
            path.push('<script src="' + basePath + 'ztree3.5/jquery.ztree.core-3.5.min.js" type="text/javascript"></script>');
            path.push('<script src="' + basePath + 'ztree3.5/jquery.ztree.excheck-3.5.min.js" type="text/javascript"></script>');
            break;
        case 23://tab标签组件
            path.push('<link href="' + basePath + 'tab/tab.css"  rel="stylesheet" type="text/css">');
            path.push('<script src="' + basePath + 'tab/tab.js" type="text/javascript"></script>');
            break;
        case 24://baseGrid组件
            path.push('<script src="' + basePath + 'basegrid/pagenav.cn.js" type="text/javascript"></script>');


            path.push('<link href="' + basePath + 'mmGrid-master2/mmGrid.css"  rel="stylesheet" type="text/css">');
            path.push('<script src="' + basePath + 'mmGrid-master2/mmGrid.js" type="text/javascript"></script>');
            path.push('<link href="' + basePath + 'mmGrid-master2/mmPaginator.css"  rel="stylesheet" type="text/css">');
            path.push('<script src="' + basePath + 'mmGrid-master2/mmPaginator.js" type="text/javascript"></script>');
            path.push('<script src="' + basePath + 'mmGrid-master2/plugins.js" type="text/javascript"></script>');
            break;
        case 25://工具栏组件
            path.push('<link href="' + basePath + '../../commons/themes/toolbar.css"  rel="stylesheet" type="text/css">');
            break;
        case 26://日期组件
            path.push('<script src="' + basePath + 'datepicker/WdatePicker.js" type="text/javascript"></script>');
            break;
        case 27://校验组件
            path.push('<link href="' + basePath + 'validator3/validator.css"  rel="stylesheet" type="text/css">');
            path.push('<script src="' + basePath + 'validator3/validator.js" type="text/javascript"></script>');
            path.push('<script src="' + basePath + 'validator3/exvalidator.js" type="text/javascript"></script>');
            break;
        case 28://下拉组合框
            path.push('<link href="' + basePath + 'combo/basecombo.css"  rel="stylesheet" type="text/css">');
            path.push('<script src="' + basePath + 'combo/jquery.dropdown.js" type="text/javascript"></script>');
            path.push('<script src="' + basePath + 'combo/basecombo-1.0.0.js" type="text/javascript"></script>');
            path.push('<script src="' + basePath + 'combo/baseComboTree-1.0.0.js" type="text/javascript"></script>');
            break;
        case 29://弹出层浮动报表上
           path.push('<script src="' + basePath + 'dwz/js/speedup.js" type="text/javascript"></script>');
           path.push('<script src="' + basePath + 'dwz/js/jquery.validate.js" type="text/javascript"></script>');
           path.push('<script src="' + basePath + 'dwz/dwz_new_min.js" type="text/javascript"></script>');
           break;
        case 30:
           path.push('<link href="' + basePath + 'easyui/css/icon.css"  rel="stylesheet" type="text/css">');
           path.push('<link href="' + basePath + 'easyui/css/easyui.css"  rel="stylesheet" type="text/css">');
           path.push('<script src="' + basePath + 'easyui/js/jquery.easyui.min.js" type="text/javascript"></script>');           
           break;
        case 80:// CELL校验组件
            path.push('<script src="' + basePath + '../../hlwsb/commons/js/zdsyjs/validatorCell.js" type="text/javascript"></script>');
            path.push('<script src="' + basePath + '../../hlwsb/commons/js/zdsyjs/exvalidatorCell.js" type="text/javascript"></script>');
            break;
        case 81://与互联网申报10相似，差别在于base_all.js 路径不一样
            if(eFlag && openM != '' && openM == 'filelogin') {
                lj = external.get_fexists('html/hlwsbWeb/commons/themes/default/main.css');
                path.push('<link href="' + lj + '"  rel="stylesheet" type="text/css">');

                lj = external.get_fexists('html/hlwsbWeb/commons/js/sc/base_all.js');
                path.push('<script src="' + lj + '" type="text/javascript"></script>');
            } else {
                path.push('<link href="' + basePath + '../../commons/themes/default/main.css"  rel="stylesheet" type="text/css">');
                path.push('<script src="' + basePath + '../../hlwsb/commons/js/zdsyjs/base_all.js" type="text/javascript"></script>');
            }
            break;
        case 88:// 公式组件
            path.push('<script src="' + basePath + '../../hlwsb/commons/js/zdsyjs/dataResolve.js" type="text/javascript"></script>');
            break;
        case 90:
        	if(eFlag && openM != '' && openM == 'filelogin') {
        		lj = external.get_fexists('html/hlwsbWeb/commons/js/sc/plugin_all.css');
        		path.push('<link href="' + lj + '"  rel="stylesheet" type="text/css">');
        		
        		lj = external.get_fexists('html/hlwsbWeb/commons/js/sc/plugin_all.js');
        		path.push('<script src="' + lj + '" type="text/javascript"></script>');	        		
        		
	        } else {
	        		        	
	        	path.push('<link href="' + basePath + 'sc/plugin_all.css"  rel="stylesheet" type="text/css">');
	        	path.push('<script src="' + basePath + 'sc/plugin_all.js" type="text/javascript"></script>');
	        }
           break;
        case 91:        	
        	if(eFlag && openM != '' && openM == 'filelogin') {
        		lj = external.get_fexists('html/hlwsbWeb/commons/js/sc/dwz_all.css');
        		path.push('<link href="' + lj + '"  rel="stylesheet" type="text/css">');        		
	        } else {	        	
	        	path.push('<link href="' + basePath + 'sc/dwz_all.css"  rel="stylesheet" type="text/css">');        	
	        }        	
        	break;       
          default:
    }
    return path.join('');
}

