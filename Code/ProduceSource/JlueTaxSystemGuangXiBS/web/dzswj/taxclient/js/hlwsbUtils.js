$(document).ready(function () {
    //互联网申报帮助
    hlwsbUtils.onload();
});
var hlwsbUtils = (function () {
    var curSeg,hlwsbTreeObj,zdsyTreeObj;

    var init = function () {
    };

    return {
        onload: function () {
            curSeg = hlwsbUtils;
            init();
            curSeg.bindEvent();
        },

        //绑定所有事件
        bindEvent: function () {
        },

        /***
         * 调用申报服务
         * @param type 1或空 加载申报菜单并显示在页面上 2：只设置cookie不显示页面
         */
        getRjbbUrl: function (type) {
            var hlwsbUrl = '';
            baseTools.xhrAjax({
                url: "/server/main/getRjbbUrl.do",
                params: {RJBB_BM: 'dzswj.hlwsb'},
                callback: [function (data) {
                    if (data.code == '-3') {
                        jcptTools.clearAllCookie();
                        jcptTools.gotoLogin();
                        return;
                    }
                    if (data.code == 0) {
                        hlwsbUrl = data.data.JDDZ;
                    }
                    curSeg.initHlwsbTree(hlwsbUrl,type);
                }]
            });
        },

        initHlwsbTree: function (hlwsbUrl,type) {
            var nsrztdm = jcptTools.getUserDataByKey("NSRZT_DM");
            if (nsrztdm == '04') {//停业状态
                return;
            }
            var yhlx_dm = jcptTools.getUserDataByKey("YHLX_DM");
            var NSRSBH = "";
            var SHXYDM = "";

            var yhlx_dm = baseTools.getCookie("QX_USER").YHLX_DM;
            if (yhlx_dm == 3 || yhlx_dm == 4) {
                var NSRSBH = jcptTools.getUserDataByKey("NSRSBH");
            } else {
                var NSRSBH = jcptTools.getUserDataByKey("DLMC");
            }
            var COL1 = jcptTools.getUserDataByKey("COL1");
            var COL2 = jcptTools.getUserDataByKey("COL2");
            var DJXH = jcptTools.getUserDataByKey("DJXH");

            var url = hlwsbUrl + '/hlwsb/GetSbTree';

            baseTools.xhrAjaxJsonP({
                url: url,
                bShow: false,
                params: {
                    "NSRSBH": NSRSBH,
                    "COL1": COL1,
                    "COL2": COL2,
                    "DJXH": DJXH
                },
                callback: [function (jsonObj, xhrArgs) {
                    baseTools.hideMash();
                    switch (parseInt(jsonObj.code)) {
                        // 查询操作返回标志
                        case 0:
                            if(type == "2"){
                                var sbUserData = jsonObj.userdata;
                                window.QX_USER = sbUserData;
                                // alert("申报菜单可以使用了");
                                return;
                            }
                            jsonObj.strJson = jsonObj.tree;
                            delete jsonObj['tree'];
                            if(jsonObj.strJson){
                                for (var i = 0; i < jsonObj.strJson.length; i++) {
                                    if (i == 0) {
                                        jsonObj.strJson[i].open = 'false';
                                    }
                                    jsonObj.strJson[i].MKXKID = jsonObj.strJson[i].id == 0 ? "sb0" : jsonObj.strJson[i].id;
                                    jsonObj.strJson[i].MKXK_MC = jsonObj.strJson[i].name;

                                    jsonObj.strJson[i].SSY = "10";
                                    jsonObj.strJson[i].XMFL_DM = "hlwsb";
                                    jsonObj.strJson[i].XYBZ = "Y";
                                    jsonObj.strJson[i].ISSHOW = "Y";
                                    jsonObj.strJson[i].BZ = "";
                                    jsonObj.strJson[i].GLBZ = "HLWSBCD=1";

                                    if (jsonObj.strJson[i].other.URL == "") {
                                        jsonObj.strJson[i].MKXK_URL = "";
                                        jsonObj.strJson[i].MKXK_URL_PT = "";
                                        jsonObj.strJson[i].JDFL_DM = "02";
                                        jsonObj.strJson[i].SHOW_ORDER = "10";
                                    } else {
                                        //wsbsds.12366.ha.cn
                                        if ((jsonObj.strJson[i].other.URL).indexOf("GDSLX=3") != -1) {
                                            jsonObj.strJson[i].MKXK_URL = "http://wsbsds.12366.ha.cn:9118/" + jsonObj.strJson[i].other.URL;
                                            jsonObj.strJson[i].MKXK_URL_PT = "http://wsbsds.12366.ha.cn:9118/" + jsonObj.strJson[i].other.URL;
                                            jsonObj.strJson[i].JDFL_DM = "03";
                                            jsonObj.strJson[i].SHOW_ORDER = "1";
                                        } else {
                                            jsonObj.strJson[i].MKXK_URL = hlwsbUrl + jsonObj.strJson[i].other.URL;
                                            jsonObj.strJson[i].MKXK_URL_PT = hlwsbUrl + jsonObj.strJson[i].other.URL;
                                            jsonObj.strJson[i].JDFL_DM = "03";
                                            jsonObj.strJson[i].SHOW_ORDER = "1";
                                        }

                                    }

                                    if (jsonObj.strJson[i].pId == -1) {
                                        jsonObj.strJson[i].SJ_MKXKID = "0";
                                    } else if (jsonObj.strJson[i].pId == 0) {
                                        jsonObj.strJson[i].SJ_MKXKID = 'sb0';
                                    } else {
                                        jsonObj.strJson[i].SJ_MKXKID = jsonObj.strJson[i].pId;
                                    }
                                }
                            }

                            var setting = {
                                data: {
                                    key: {
                                        name: "MKXK_MC",
                                        title: "MKXK_MC"
                                    },
                                    simpleData: {
                                        enable: true,
                                        idKey: "MKXKID",
                                        pIdKey: "SJ_MKXKID"
                                    }
                                },
                                callback: {
                                    onClick: function (e, treeId, treeNode) {
                                        var zTree = $.fn.zTree.getZTreeObj("hlwsbTreeModule"); // zTree 对象
                                        zTree.expandNode(treeNode, null, null, null, true);
                                        slider.tabIframe(treeNode.MKXK_MC, treeNode.MKXK_URL_PT, treeNode.MKXKID);
                                        if (treeNode.MKXK_URL_PT) {
                                            var currentId = $('.page-tabs-content').find('.active').attr('data-id');
                                            var target = $('.LRADMS_iframe[data-id="' + currentId + '"]');
                                            var url = target.attr('src');
                                            target.attr('src', url).load(function () {
                                            });
                                            $(this).parents(".btn-group").toggleClass("open");
                                        }
                                    }
                                }
                            };
                            var nodes = new Array();

                            //红色对号
                            var ssqq = "";
                            var ssqz = "";
                            var nsrlx_dm_end = '';
                            for (var i = 0; i < jsonObj.strJson.length; i++) {
                                var strJson = jsonObj.strJson[i];
                                if (strJson.MKXK_URL_PT != undefined && "" != strJson.MKXK_URL_PT) {
                                    //增加红色对号
                                    strJson.other = {
                                        SSSQ_Q: baseTools.getUrlQueryStringByUrl(strJson.MKXK_URL_PT, "SSSQ_Q"),
                                        SBBZT: baseTools.getUrlQueryStringByUrl(strJson.MKXK_URL_PT, "SBBZT"),
                                        NSRLX_DM: baseTools.getUrlQueryStringByUrl(strJson.MKXK_URL_PT, "NSRLX_DM"),
                                        SSSQ_Z: baseTools.getUrlQueryStringByUrl(strJson.MKXK_URL_PT, "SSSQ_Z")
                                    }
                                    if (typeof (strJson.other.SSSQ_Q) != "undefined" && "" != strJson.other.SSSQ_Q) {
                                        if (strJson.other.SBBZT == 2 || strJson.other.SBBZT == 3) {
                                            //  sbzt[strJson[i].pId] = "2";
                                            //	strJson[i].iconSkin = 'icon2';
                                        } else if (strJson.other.SBBZT == 1) {
                                            // strJson.iconSkin = 'icon1';
                                        }
                                        /* else {
                                            sbzt[strJson[i].pId] = "1";
                                        }*/
                                        var nsrlx_dm_LS = strJson.other.NSRLX_DM;
                                        if (nsrlx_dm_LS == '101010101' || nsrlx_dm_LS == '101010102' || nsrlx_dm_LS == '101010201' || nsrlx_dm_LS == '101010202' || nsrlx_dm_LS == '101010203') {
                                            ssqq = strJson.other.SSSQ_Q;
                                            ssqz = strJson.other.SSSQ_Z;
                                            zzsybr = 'Y';
                                            nsrlx_dm_end = nsrlx_dm_LS;
                                        }
                                    }
                                }

                                if (strJson.ISSHOW == 'N' || !strJson.GLBZ || (strJson.GLBZ.indexOf("XSSSBLCD=1") == -1 && strJson.GLBZ.indexOf("HLWSBCD=1") == -1)) {//当前菜单隐藏
                                    continue;
                                } else {
                                    nodes[nodes.length++] = (strJson);
                                }
                            }
                            hlwsbTreeObj = $.fn.zTree.init($("#hlwsbTreeModule"), setting, nodes);
                            // baseTools.expandTree(treeObj, 0);// 展开level层菜单
                            var proName = baseTools.getUrlQueryString("n") || "";
                            if (proName == "ss") {
                                proName = SSSXBL;
                            } else if (proName == "sb") {
                                proName = HNSB;
                            }
                            if (proName) {
                                for (var i = 0; i < hlwsbTreeObj.getNodes().length; i++) {
                                    if (hlwsbTreeObj.getNodes()[i].MKXKID == proName) {
                                        hlwsbTreeObj.expandNode(hlwsbTreeObj.getNodes()[i]);
                                    }
                                }
                            }
                            var sbUserData = jsonObj.userdata;
                            window.QX_USER = sbUserData;

                            if (sbUserData.ZDSYBZ && sbUserData.ZDSYBZ == "Y") {
                                curSeg.initZdsyMkTree(hlwsbUrl);
                            }
                            var jzzbz = jsonObj.jzzbz;
                            if (jzzbz && jzzbz == "Y") {
                                var jzztcbz = baseTools.getCookie("jzztcbz");
                                if (jzztcbz && jzztcbz == "Y") {
                                } else {
                                    baseTools.setCookie("jzztcbz", "Y");
                                    alert("您属于季度中认定一般纳税人，请在“季中转一般人”模块中选择所属期进行相应月份的申报");
                                }
                            } else if (jzzbz && jzzbz == "N") {

                            } else if (jzzbz && jzzbz == "G") {
                                var jzzzdbz = baseTools.getCookie("jzzzdbz");
                                if (jzzzdbz && jzzzdbz == "Y") {
                                } else {
                                    baseTools.setCookie("jzzzdbz", "Y");
                                    alert("您属于季度中认定一般纳税人，其中税费种信息纳税期限应当核定为月报，请去大厅核实税费种信息");
                                }
                            }
                            break;
                        case -2:
                            // alert(jsonObj.msg);
                            break;
                        case -3:
                            // alert(jsonObj.msg);
                            // window.location = 'login.html';
                            break;
                        default:
                            // alert(jsonObj.msg);
                            break;

                    }
                }]
            });
        },

        // 初始化模块树
        initZdsyMkTree: function (hlwsbUrl) {
            //manage为0  企业为1
            var NSRSBH = baseTools.getCookie("QX_USER")["DLMC"];
            var SHXYDM = baseTools.getCookie("QX_USER")["SHXYDM"];
            var CUR_DLMC = baseTools.getCookie("QX_USER")["DLMC"];
            baseTools.xhrAjaxJsonP({
                url: hlwsbUrl + '/hlwsb/GetSbTree',
                bShow: false,
                params: {
                    "SHXYDM": SHXYDM,
                    "NSRSBH": NSRSBH,
                    "ZDSYBZ": "Y",
                    "username": CUR_DLMC
                },
                callback: [function (jsonObj, xhrArgs) {
                    switch (parseInt(jsonObj.code)) {
                        // 查询操作返回标志
                        case 0:
                            jsonObj.strJson = jsonObj.ZDSYTREE;
                            delete jsonObj['ZDSYTREE'];
                            for (var i = 0; i < jsonObj.strJson.length; i++) {
                                if (i == 0) {
                                    jsonObj.strJson[i].open = 'false';
                                }
                                jsonObj.strJson[i].MKXKID = jsonObj.strJson[i].id == 0 ? "sb1" : jsonObj.strJson[i].id;
                                jsonObj.strJson[i].MKXK_MC = jsonObj.strJson[i].name;

                                jsonObj.strJson[i].BZ = "";
                                jsonObj.strJson[i].ISSHOW = "Y";
                                jsonObj.strJson[i].SSY = "10";
                                jsonObj.strJson[i].XMFL_DM = "hlwsb";
                                jsonObj.strJson[i].XYBZ = "Y";
                                jsonObj.strJson[i].GLBZ = "HLWSBCD=1";

                                if (jsonObj.strJson[i].other.URL == "") {
                                    jsonObj.strJson[i].MKXK_URL = "";
                                    jsonObj.strJson[i].MKXK_URL_PT = "";
                                    jsonObj.strJson[i].JDFL_DM = "02";
                                    jsonObj.strJson[i].SHOW_ORDER = "10";
                                } else {
                                    jsonObj.strJson[i].MKXK_URL = hlwsbUrl + jsonObj.strJson[i].other.URL;
                                    jsonObj.strJson[i].MKXK_URL_PT = hlwsbUrl + jsonObj.strJson[i].other.URL;
                                    jsonObj.strJson[i].JDFL_DM = "03";
                                    jsonObj.strJson[i].SHOW_ORDER = "1";
                                }

                                if (jsonObj.strJson[i].id == 0) {
                                    jsonObj.strJson[i].SJ_MKXKID = "sb1";
                                } else {
                                    jsonObj.strJson[i].SJ_MKXKID = jsonObj.strJson[i].id;

                                }

                                if (jsonObj.strJson[i].pId == -1) {
                                    jsonObj.strJson[i].SJ_MKXKID = "0";
                                } else if (jsonObj.strJson[i].pId == 0) {
                                    jsonObj.strJson[i].SJ_MKXKID = 'sb1';

                                } else {
                                    jsonObj.strJson[i].SJ_MKXKID = jsonObj.strJson[i].pId;

                                }

                            }
                            var setting = {
                                data: {
                                    key: {
                                        name: "MKXK_MC",
                                        title: "MKXK_MC"
                                    },
                                    simpleData: {
                                        enable: true,
                                        idKey: "MKXKID",
                                        pIdKey: "SJ_MKXKID"
                                    }
                                },
                                callback: {
                                    onClick: function (e, treeId, treeNode) {
                                        var zTree = $.fn.zTree.getZTreeObj("zdsyTreeModule"); // zTree 对象
                                        zTree.expandNode(treeNode, null, null, null, true);
                                        slider.tabIframe(treeNode.MKXK_MC, treeNode.MKXK_URL_PT, treeNode.MKXKID);
                                        if (treeNode.MKXK_URL_PT) {
                                            var currentId = $('.page-tabs-content').find('.active').attr('data-id');
                                            var target = $('.LRADMS_iframe[data-id="' + currentId + '"]');
                                            var url = target.attr('src');
                                            target.attr('src', url).load(function () {
                                            });
                                            $(this).parents(".btn-group").toggleClass("open");
                                        }
                                    }
                                }
                            };
                            var nodes = new Array();
                            for (var i = 0; i < jsonObj.strJson.length; i++) {
                                var strJson = jsonObj.strJson[i];
                                if (strJson.ISSHOW == 'N' || !strJson.GLBZ || (strJson.GLBZ.indexOf("XSSSBLCD=1") == -1 && strJson.GLBZ.indexOf("HLWSBCD=1") == -1)) {//当前菜单隐藏
                                    continue;
                                } else {
                                    nodes[nodes.length++] = (strJson);
                                }
                            }
                            zdsyTreeObj = $.fn.zTree.init($("#zdsyTreeModule"), setting, nodes);
                            break;
                        case -3:
                            alert("登录信息失效，请重新登录");
                            window.location = 'login.html';
                            break;
                        default:
                            alert("获取重点税源菜单失败");
                            break;

                    }
                }]
            });
        }
    }
})();