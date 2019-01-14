/**
 * Created by jin-3 on 2018/04/11.
 */
// 使用窗口组件加载时注释下面的代码
$(document).ready(function() {
    zlsc.onLoad();
});
/**
 *
 *
 */
var zlsc = (function() {
    //私有属性
    var curSeg; // 保存zlsc对象的
    var bbzl;
    var bbmc;
    return {
        onLoad:function() {
            curSeg = zlsc;
            winObj = frameElement.api;
            bbzl = baseTools.getUrlQueryString("bbzl");
            bbmc = baseTools.getUrlQueryString("bbmc");
            //删除组件释放内存
            $(window).unload(function () {
            });
        } ,


//上传文件方法
        UpladFile:function() {
            var filepathmyfile = document.all.myfile.value;// js 获取文件对象
            if (filepathmyfile == null || "" == filepathmyfile) {
                alert("请先上传文件！");
                return false;
            }
            if (filepathmyfile !== "") {
                if (filepathmyfile.toLowerCase().indexOf(".xml".toLowerCase()) < 0) {
                    alert("请上传xml格式的文件！");
                    return false;
                }
            }
            // 然后开始获取需要的Login/Weapon/W的第一个节点的属性值
            var xmlDoc = curSeg.checkXMLDocObj(filepathmyfile);
            var v = null;
            try {
            	v = xmlDoc.documentElement.nodeName;
			} catch (e) {
				alert("导入数据xml格式有误，请核实后重新导入！");
				return false;
			}
            if(v.indexOf(bbzl)<0 ||v == "" || v == null) {
                alert("请上传本表的xml文件！");
                return false;
            }
            var x2js = new X2JS;
            var jsonObj = x2js.xml_str2json(xmlDoc.xml);
            var dataGrid = jsonObj[bbzl].dataGrid;
            if(dataGrid.data&&dataGrid.data.length>0){
            	for(var flag=0;flag<dataGrid.data.length;flag++){
            		var tempdata = dataGrid.data[flag];
            		for(var colcontent in tempdata){
            			
            			 if (tempdata[colcontent] > 1000000000000 || tempdata[colcontent] < -1000000000000) {
                             alert('值' + tempdata[colcontent] + '过大');
                            return;
                             
                         }
            		}
            	}
            }
            winObj.opener[bbmc].nsrxxtransVal(dataGrid);
            winObj.close();
            var needSuccessMsg = "上传成功！\n "+
            "请点击保存按钮，保存上传的数据!\n ";
            alert(needSuccessMsg);

            /*var url = '/uploadCWBB_ZLSC.do';
            baseTools.xhrAjax({
                url: url,
                params: {sb_xml: xmlDoc.xml},
                callback: [ curSeg.pageFlowControl ]
            });*/
        },

// 首先对xml对象进行判断
    checkXMLDocObj : function(xmlFile)
    {
        var xmlDoc = curSeg.loadXML(xmlFile);
        if(xmlDoc==null)
        {
            alert('您的浏览器不支持xml文件读取,于是本页面禁止您的操作,推荐使用IE5.0以上可以解决此问题!');
            window.location.href='/hlwsb/main_fca.html';
        }
        return xmlDoc;
    },

    loadXML : function(xmlFile){
        var xmlDoc=null;
        var agent = navigator.userAgent.toLowerCase();

        //判断浏览器的类型
        //支持IE浏览器
        if(agent.indexOf("msie") > 0){

            var xmlDomVersions = ['MSXML2.DOMDocument.6.0','MSXML2.DOMDocument.3.0','Microsoft.XMLDOM'];
            for(var i=0;i<xmlDomVersions.length;i++){
                try{
                    xmlDoc = new ActiveXObject(xmlDomVersions[i]);
                    break;
                }catch(e){
                	continue;
                }
            }
        }
        //支持firefox浏览器
        else if(agent.indexOf("firefox") > 0){
            try{
                xmlDoc = document.implementation.createDocument('','',null);
            }catch(e){
            }
        } else{//谷歌浏览器
            var oXmlHttp = new XMLHttpRequest() ;
            oXmlHttp.open( "GET", xmlFile, false ) ;
            oXmlHttp.send(null) ;
            return oXmlHttp.responseXML;
        }
        if(xmlDoc!=null){
            xmlDoc.async = false;
            try {
            	xmlDoc.load(xmlFile);
			} catch (e) {
				var errMsg = "请按如下步骤设置IE浏览器\n "+
                " 1.客户端必须安装Microsoft Active控件\n "+
                " 2. a)点击浏览器”工具“ -> ”Internet选项“ -> “安全”，选择“可信站点”\n "+
                "    b)点击“站点(s)”按钮，将本网站添加到列表中\n "+
                "    c)点击“自定义级别(C)”，在安全设置中找到“ActiveX控件和插件”节点下的“对未标记为可安全执行脚本的ActiveX控件初始化并执行脚本”，设置为“启用”\n "+
                " 3.点击浏览器”工具“ -> ”Internet选项“ -> “安全” -> 自定义级别 -> 将本地文件上载到服务器时包含本地目录路径 -> “启动” ";
	            alert(errMsg);
	            return false;
			}
        }
        return xmlDoc;
    },




        /**
         * 需要的时候可以覆盖该方法
         * 在ajax调用中，在得到数据时调用该方法
         */
        pageFlowControl:function(jsonObj, xhrArgs) {
            //var SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            switch (parseInt(jsonObj.code)) {
                //查询操作返回标志
                case 0:
                    alert("上传成功！请刷新当前页面");
                    winObj.close();
                    break;
                //添加、更新以及状态更新操作返回标志
                case 1:
                    alert("保存成功");
                    break;
                // 删除操作返回标志
                case 2:
                    alert(jsonObj.msg);
                    //top.main.changeNodeStatus(SBBZL_DM,"0");
                    curSeg.initData(jsonObj);
                    break;
                //准备添加的记录已经存在
                case 3:
                    break;
                //在线帮助
                case 6:
                    break;
                case -1://保存出错返回标志
                    alert(jsonObj.msg);
                    break;
                case -2://其它错误返回标志
                    alert(jsonObj.msg);
                    break;
                case -3://cookie 失效请重新登录
                    alert(jsonObj.msg);
                    baseTools.gotoLogin();
                    break;
                default:
            }
        }
    };
})();





