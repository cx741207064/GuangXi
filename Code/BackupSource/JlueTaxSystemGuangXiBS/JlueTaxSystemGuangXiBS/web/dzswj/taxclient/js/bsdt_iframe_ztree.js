$(document).ready(function () {
    leftSlider.onload();
});

var leftSlider = (function () {
    // 私有属性
    var curSeg, treeObj;
    var jddzList = [];
    var mainMenuNoSb = []; //除申报外的菜单
    var mainMenuSb = []; //申报的菜单
    var nsrmc;

    var init = function () {
        layui.use('form', function () {
            var form = layui.form;
            form.render();
        });
        nsrmc = jcptTools.getUserDataByKey('NSRMC');
        // $('#kf-sso-login3').attr('src', '/web/dzswj/taxclient/bsdt/zrdssb/proxy.html?r='+Math.random());
        // $('#kf-sso-login3-zrgs').attr('src', '/web/dzswj/taxclient/bsdt/zrdssb/proxyg.html?r='+Math.random());
    };

    var getXmUrl = function (xmflDm) {
        if (jddzList) {
            return jddzList[xmflDm] || '';
        }
        return '';
    };

    // 检测社保征收用户身份
    var checkSbzsYhsf = function () {
        var djxh = jcptTools.getUserDataByKey("DJXH");
        baseTools.xhrAjax({
            url: getXmUrl('dzswj.sbzs') + '/checkuser/checkUserSf.do',
            params: {SBH: djxh, ZHLX: "1"},
            dataType: 'jsonp',
            callback: [function (data) {
                if (data) {
                    getSbzsGnmkTree(data['sflx']);
                }
            }]
        });
    };

    // 获取社保征收模块树
    var getSbzsGnmkTree = function (sflx) {
        if (sflx) {
            baseTools.xhrAjax({
                url: '/server/platform/ptgl/qyyh/getQySbzsGnmkTree.do',
                params: {SBZS_SFLX: sflx},
                callback: [function (data) {
                }]
            });
        }
    };

    var ignoreMenu = function () {
        return !(nsrmc === '广西方略房地产评估有限公司'
            || nsrmc === '广西辉煌置业咨询服务有限公司'
            || nsrmc === '广西元大房地产评估有限公司'
            || nsrmc === '桂林标城信息技术有限公司'
            || nsrmc === '广西英威尔房地产评估有限公司'
            || nsrmc === '广西中阳房地产评估事务所有限公司'
            || nsrmc === '广西向阳房地产评估有限公司'
            || nsrmc === '一般纳税人全功能测试1号'
        );
    };

    return {
        onload: function () {
            curSeg = leftSlider;

            var data_name = dzswjCommon.getTopIfremPid();
            if(jcptTools.getIsDsdgh()){
                curSeg.initMenuDsdgh(data_name);
            }else{
                // curSeg.selectGnmk();
                //企业 我要办税
                curSeg.initMenuNoSb(data_name);
            }
            // curSeg.initMenuSb(data_name);
            init();

            //判断其他系统是否打开新窗口
            curSeg.openIframe();
        },


        /***
         * 初始化菜单
         * @param sjmkxkid 上级ID
         */
        initMenuNoSb: function (sjmkxkid) {
            baseTools.xhrAjax({
                url: '/server/platform/ptgl/qyyh/selectGnmkByYhidPidNoSb.do',
                dataType: 'jsonp',
                params: {
                    SJ_MKXKID: sjmkxkid
                },
                callback: [function (data) {
                    if (data.code == '-3') {
                        jcptTools.clearAllCookie();
                        jcptTools.gotoLogin();
                        return;
                    }
                    if (data.code < 0) {
                        jcptTools.msg(data.msg, '2');
                        return;
                    } else {
                        curSeg.gnmkCallback(data, sjmkxkid, "1");
                    }
                }]
            });
        },
        /***
         * 初始化菜单
         * @param sjmkxkid 上级ID
         */
        initMenuDsdgh: function (sjmkxkid) {
            baseTools.xhrAjax({
                url: "/server/platform/ptgl/qyyh/selectGnmkByYhid.do",
                dataType: 'jsonp',
                params: {
                    SJ_MKXKID: sjmkxkid
                },
                callback: [function (data) {
                    if (data.code == '-3') {
                        jcptTools.clearAllCookie();
                        jcptTools.gotoLogin();
                        return;
                    }
                    if (data.code < 0) {
                        jcptTools.msg(data.msg, '2');
                        return;
                    } else {
                        curSeg.gnmkDsdghCallback(data, sjmkxkid, "1");
                    }
                }]
            });
        },

        initMenuSb: function (sjmkxkid) {
            baseTools.xhrAjax({
                url: '/server/platform/ptgl/qyyh/selectGnmkByYhidPidSb.do',
                dataType: 'jsonp',
                params: {
                    SJ_MKXKID: sjmkxkid
                },
                callback: [function (data) {
                    if (data.code == '-3') {
                        jcptTools.clearAllCookie();
                        jcptTools.gotoLogin();
                        return;
                    }
                    if (data.code < 0) {
                        jcptTools.msg(data.msg, '2');
                        return;
                    } else {
                        curSeg.gnmkCallback(data, sjmkxkid, "2");
                    }
                }]
            });
        },


        onOpenByid: function (id) {
            treeObj.expandAll(false);
            var nodes = treeObj.transformToArray(treeObj.getNodes());
            treeObj.cancelSelectedNode();
            var results = [];
            for (var i = 0; i < nodes.length; i++) {
                var temp = nodes[i];
                if (temp.ID == id) {
                    results.push(temp);
                    break;
                }
            }
            treeObj.refresh();
            if (results.length == 1) {
                var temp = results[0];
                treeObj.selectNode(temp, true);
                treeObj.setting.callback.onClick(null, id, temp);
            }
            dzswjCommon.clearCookieCddwID();
            /*for (var i = 0; i < results.length; i++) {
                treeObj.selectNode(results[i], true);
            }*/
        },

        closeColl: function () {
            layer.closeAll()
        },

        menuZtreeList: function () {
            this.ID = '';
            this.pId = '';
            this.name = '';
            this.Url = '';
        },

        /***
         *
         * @param data
         * @param sjmkxkid
         * @param type 1没有申报的菜单  2申报的菜单
         */
        gnmkCallback: function (data, sjmkxkid, type) {
            if (type == "1") {
                mainMenuNoSb = [];
            } else if (type == "2") {
                mainMenuSb = [];
            } else {
                return;
            }
            //循环一级菜单
            var datalist = data.list;
            if(datalist && datalist.length>0){
                for (var i = 0; i < datalist.length; i++) {
                    var obj = datalist[i];
                    if (obj.MKXKID === 81001 && ignoreMenu(obj.MKXK_MC)) {
                        continue;
                    }
                    if (obj['MKXKID'] == sjmkxkid) {
                        continue;
                    }
                    var menuZtreeList = new leftSlider.menuZtreeList();
                    menuZtreeList.ID = obj.MKXKID;
                    menuZtreeList.pId = obj.SJ_MKXKID;
                    menuZtreeList.name = obj.MKXK_MC;
                    menuZtreeList.Url = obj.MKXK_URL_PT;
                    menuZtreeList.XMFL_DM = obj.XMFL_DM;
                    if (type == "1") {
                        mainMenuNoSb.push(menuZtreeList);
                    } else if (type == "2") {
                        mainMenuSb.push(menuZtreeList);
                    }
                }
                leftSlider.loadZtree(type);
                if (type == "1") {
                    var dq_yhsf = jcptTools.getUserDataByKey("DQ_YHSF");
                    curSeg.initMenuSb(sjmkxkid);
                    if(dq_yhsf != "BYH"){
                        // 调用申报接口显示菜单
                        // hlwsbUtils.getRjbbUrl();
                    }
                }
            }
        },
        /***
         *
         * @param data
         * @param sjmkxkid
         * @param type 1没有申报的菜单  2申报的菜单
         */
        gnmkDsdghCallback: function (data, sjmkxkid, type) {
            if (type == "1") {
                mainMenuNoSb = [];
            } else if (type == "2") {
                mainMenuSb = [];
            } else {
                return;
            }
            //循环一级菜单
            var datalist = data.list;
            if(datalist && datalist.length>0){
                for (var i = 0; i < datalist.length; i++) {
                    var obj = datalist[i];
                    if (obj['TOP_MKXKID'] == sjmkxkid && obj['MKXKID'] != sjmkxkid) {
                        var menuZtreeList={};
                        menuZtreeList.ID = obj.MKXKID;
                        menuZtreeList.pId = obj.SJ_MKXKID;
                        menuZtreeList.name = obj.MKXK_MC;
                        menuZtreeList.Url = obj.MKXK_URL_PT;
                        menuZtreeList.XMFL_DM = obj.XMFL_DM;
                        if (type == "1") {
                            mainMenuNoSb.push(menuZtreeList);
                        } else if (type == "2") {
                            mainMenuSb.push(menuZtreeList);
                        }
                    }
                }
                leftSlider.loadZtree(type);
                /*if (type == "1") {
                    var dq_yhsf = jcptTools.getUserDataByKey("DQ_YHSF");
                    curSeg.initMenuSb(sjmkxkid);
                    if(dq_yhsf != "BYH"){
                        // 调用申报接口显示菜单
                        // hlwsbUtils.getRjbbUrl();
                    }
                }*/
            }
            var id = dzswjCommon.getCookieCddwByStr("ID"); // = baseTools.getUrlQueryString("id");
            if (id) {
                curSeg.onOpenByid(id);
            }else{
                dzswjCommon.clearCookieCddwID();
            }
        },

        loadZtree: function (type) {
            var menulist = [];
            if (type == "1") {
                menulist = mainMenuNoSb;
            } else if (type == "2") {
                menulist = mainMenuSb;
            } else {
                return;
            }

            if ((!menulist) || (menulist.length <= 0)) {
                return;
            }
            var setting = {
                view: {
                    showLine: true,
                    selectedMulti: false,
                    dblClickExpand: false
                },
                data: {
                    simpleData: {
                        idKey: "ID",
                        pIdKey: "pId",
                        enable: true
                    }
                },
                callback: {
                    beforeExpand: beforeExpand,
                    onExpand: onExpand,
                    onClick: onClick,
                    onCollapse: onCollapse

                }
            };

            var zNodes = menulist;
            var curExpandNode = null;

            function beforeExpand(treeId, treeNode) {
                var pNode = curExpandNode ? curExpandNode.getParentNode() : null;
                var treeNodeP = treeNode.parentTId ? treeNode.getParentNode() : null;
                var zTree = $.fn.zTree.getZTreeObj("sidebarZtr");
                for (var i = 0, l = !treeNodeP ? 0 : treeNodeP.children.length; i < l; i++) {
                    if (treeNode !== treeNodeP.children[i]) {
                        zTree.expandNode(treeNodeP.children[i], false);
                    }
                }
                while (pNode) {
                    if (pNode === treeNode) {
                        break;
                    }
                    pNode = pNode.getParentNode();
                }
                if (!pNode) {
                    singlePath(treeNode);
                }

            }

            function singlePath(newNode) {
                if (newNode === curExpandNode) return;

                var zTree = $.fn.zTree.getZTreeObj("sidebarZtr"),
                    rootNodes, tmpRoot, tmpTId, i, j, n;

                if (!curExpandNode) {
                    tmpRoot = newNode;
                    while (tmpRoot) {
                        tmpTId = tmpRoot.tId;
                        tmpRoot = tmpRoot.getParentNode();
                    }
                    rootNodes = zTree.getNodes();
                    for (i = 0, j = rootNodes.length; i < j; i++) {
                        n = rootNodes[i];
                        if (n.tId != tmpTId) {
                            zTree.expandNode(n, false);
                        }
                    }
                } else if (curExpandNode && curExpandNode.open) {
                    if (newNode.parentTId === curExpandNode.parentTId) {
                        zTree.expandNode(curExpandNode, false);
                    } else {
                        var newParents = [];
                        while (newNode) {
                            newNode = newNode.getParentNode();
                            if (newNode === curExpandNode) {
                                newParents = null;
                                break;
                            } else if (newNode) {
                                newParents.push(newNode);
                            }
                        }
                        if (newParents != null) {
                            var oldNode = curExpandNode;
                            var oldParents = [];
                            while (oldNode) {
                                oldNode = oldNode.getParentNode();
                                if (oldNode) {
                                    oldParents.push(oldNode);
                                }
                            }
                            if (newParents.length > 0) {
                                zTree.expandNode(oldParents[Math.abs(oldParents.length - newParents.length) - 1], false);
                            } else {
                                zTree.expandNode(oldParents[oldParents.length - 1], false);
                            }
                        }
                    }
                }
                curExpandNode = newNode;
            }

            function onExpand(event, treeId, treeNode) {
                // 修复背景不平铺
                // $(".slidebar_nav").css({
                //     "display": "table",
                //     "width": "100%"
                // });
                // if ($('.slidebar_nav').width() < 240) {
                //     $('.slidebar_nav').css("width", "240px");
                // }

                curExpandNode = treeNode;
                $("#sidebarZtr ul li:last-child").addClass("lastli").css("border", "none");
                $("head").append('<style>#sidebarZtr ul li.lastli:before {content:"";display:inline-block;width:10px;height:12px;border-left:1px dotted #8BAEBF}</style>')
            }

            function onCollapse() {
                $(".slidebar_nav").css("display", "block");

            }

            function onLoginDswt() {
                baseTools.xhrAjax({
                    url: '/checkGt3DsLogin.do',
                    bShow: false,
                    async: false,
                    params: {

                    },
                    callback: [function (jsonObj) {
                        switch (jsonObj.code) {
                            case "0":
                                if (jsonObj.data) {
                                    var r = jsonObj.data;
                                    var param = "?htjs_sso_service=" + encodeURIComponent(r.htjs_sso_service) + "&yhuuid=" + encodeURIComponent(r.yhuuid) + "&nsrsbh=" + encodeURIComponent(r.nsrsbh)
                                        + "&dlzhdm=" + encodeURIComponent(r.dlzhdm) + "&sjhm=" + encodeURIComponent(r.sjhm) + "&shxydm=" + encodeURIComponent(r.shxydm) + "&zyhuuid=" + encodeURIComponent(r.zyhuuid) + "&djxh=" + encodeURIComponent(r.djxh)
                                        + "&sfsmrz=" + encodeURIComponent(r.sfsmrz) + "&sfzzh=" + encodeURIComponent(r.sfzzh) + "&sfmrmm=" + encodeURIComponent(r.sfmrmm)
                                        + "&xm=" + encodeURIComponent(r.xm) + "&yhmc=" + encodeURIComponent(r.yhmc);
                                    var zrrDswtURL = "https://dzswj.ha-l-tax.gov.cn/webroot/pages/home/index.jsp";
                                    var url = zrrDswtURL + param;
                                    if (typeof external.get_version != "undefined") {
                                        if (Number(external.get_version().replace(/\./g, "")) >= 31878) {
                                            external.Open_IE_Url(url);
                                        } else {
                                            window.open(url);
                                        }
                                    } else {
                                        window.open(url);
                                    }
                                } else {
                                    alert("获取纳税人信息失败");
                                }

                                break;
                            default:
                                alert(jsonObj.msg);
                                return;
                        }

                    }]
                });
            }

            function onCktsLogin() {
                baseTools.xhrAjax({
                    url: '/server/pt/gdsdzgx/getCktsNsrsbh.do',
                    bShow: false,
                    async: false,
                    callback: [function (jsonObj) {
                        switch (jsonObj.code) {
                            case "1":
                                if (jsonObj.data) {
                                    var r = jsonObj.data;
                                    if (jsonObj.data.rltCode == "200") {
                                        var url = jsonObj.data_url + "?token=" + jsonObj.token + "&tokenid=" + r.rltContent; //taxClientTools.cnf.zrrDswtURL;
                                        if (typeof external.get_version != "undefined") {
                                            if (Number(external.get_version().replace(/\./g, "")) >= 31878) {
                                                external.Open_IE_Url(url);
                                            } else {
                                                window.open(url);
                                            }
                                        } else {
                                            window.open(url);
                                        }
                                    } else {
                                        alert(jsonObj.data.rltMsg);
                                    }
                                } else {
                                    alert("获取纳税人信息失败");
                                }
                                break;
                            default:
                                alert(jsonObj.msg);
                                return;
                        }
                    }]
                });
            }

            function onSsoLogin(url) {

                if (typeof external.get_version != "undefined") {
                    if (Number(external.get_version().replace(/\./g, "")) >= 31878) {
                        //external.Open_IE_Url(url);
                        //alert(external.get_version());
                        parent.window.location.href=url;
                    } else {
                        window.open(url);
                    }
                } else {
                    window.open(url);
                }
            }
            function ssoLoginRjbb(RJBB_DM, RJBB_BM, RJBB_MC) {
                baseTools.xhrAjax({
                    url : "/taxclient/ssoLogin.do",
                    params : {
                        RJBB_DM : RJBB_DM,
                        returnJson : true
                    },
                    callback : [ function(jsonObj, xhrArgs) {
                        switch (parseInt(jsonObj.code)) {
                            case 0:
                                if (typeof external.OpenModel != "undefined") {
                                    var url = jsonObj.data.ssoRedirectURL;
                                    var drag_win_id = RJBB_MC;
                                    if (url.indexOf("?") > -1) {
                                        url += "&drag_win_id=" + drag_win_id;
                                    } else {
                                        url += "?drag_win_id=" + drag_win_id;
                                    }
                                    //external.OpenModel(url, "0", "max", drag_win_id);
                                    //alert(url);
                                    external.Open_IE_Url(url);
                                } else {
                                    var left = 0;
                                    var top = 0;
                                    var width = screen.availWidth - 16;
                                    var height = screen.availHeight - 70;
                                    var param = "left=" + left + ",top=" + top + ",width=" + width + ",height=" + height;
                                    param += ",scrollbars,resizable=yes,toolbar=no";
                                    window.open(jsonObj.data.ssoRedirectURL, RJBB_MC, param);
                                }
                                break;
                            default:
                                alert(jsonObj.msg);
                                break;
                        }
                    } ]
                });
            }

            function onClick(e, treeId, treeNode) {
                if (treeNode.Url && (treeNode.XMFL_DM === 'dzswj.zrdssb' || treeNode.XMFL_DM === 'dzswj.zrgssb')) {
                    $('#kf-hdipt-dssb-mkmc').val(treeNode.name);
                    $('#kf-hdipt-dssb-mkurl').val(treeNode.Url);
                    var left = 0;
                    var top = 0;
                    var width = screen.availWidth - 16;
                    var height = screen.availHeight - 70;
                    var param = "left=" + left + ",top=" + top + ",width=" + width + ",height=" + height;
                    param += ",scrollbars,resizable=yes,toolbar=no,location=no, status=no,";
                    if (treeNode.XMFL_DM === 'dzswj.zrgssb'){
                        window.open(jcptTools.cnf.contextPath+'/dzswj/taxclient/bsdt/zrdssb/proxyg-p.html?r='+Math.random(),
                            '',param);
                        return;
                    }
                    window.open(jcptTools.cnf.contextPath+'/dzswj/taxclient/bsdt/zrdssb/proxy-p.html?r='+Math.random(),
                        '',param);
                    return;
                }

                // 存量房
                if (treeNode.Url && (treeNode.XMFL_DM === 'dzswj.san.clf' || treeNode.XMFL_DM === 'dzswj.zdsy')) {
                    var left = 0;
                    var top = 0;
                    var width = screen.availWidth - 16;
                    var height = screen.availHeight - 70;
                    var param = "left=" + left + ",top=" + top + ",width=" + width + ",height=" + height;
                    param += ",scrollbars,resizable=yes,toolbar=no,location=no, status=no,";
                    window.open(treeNode.Url, '', param);
                    return;
                }
                if (treeNode.XMFL_DM && treeNode.XMFL_DM === "dzswj.ckts") {
                    onCktsLogin();
                    return;
                }
                if(treeNode.XMFL_DM && treeNode.XMFL_DM==='dzswj.dfswywbl'){
                    onLoginDswt();
                    return;
                }

                if ((treeNode.ID)=="1311201606280001" || (treeNode.ID)=="1311201606480001" ){
                    //ssoLoginRjbb(treeNode.ID, treeNode.rjbb_bm, treeNode.name);
                    onSsoLogin(treeNode.qyddz);
                    return;
                }

                if ((treeNode.ID)=="2222222"
                    || (treeNode.ID)=="1311150951340001"
                    || (treeNode.ID)=="1311201606480001"
                    || (treeNode.ID)=="1311201606280001"
                    || (treeNode.cpddload && treeNode.cpddload=="cplist2100")
                    ) {
                    ssoLoginRjbb(treeNode.ID, treeNode.rjbb_bm, treeNode.name);
                    //onSsoLogin(treeNode.qyddz);
                    return;
                }

                //增值税发票选择确认平台新窗
                if(treeNode.ID == "81009" || treeNode.XMFL_DM == "dzswj.san.zzsfpxzqrpt") {
                    window.open("https://fpdk.gxgs.gov.cn", "_blank");
                    return;
                }

                if ((treeNode.ID)=="GXPT") {
                    onSsoLogin(treeNode.qyddz);
                    return;
                }

                var zTree = $.fn.zTree.getZTreeObj("sidebarZtr"); // zTree 对象
                zTree.expandNode(treeNode, null, null, null, true);
                slider.tabIframe(treeNode.name, treeNode.Url, treeNode.ID);

                if (treeNode.Url) {
                    var currentId = $('.page-tabs-content').find('.active').attr('data-id');
                    var target = $('.LRADMS_iframe[data-id="' + currentId + '"]');
                    var url = target.attr('src');
                    target.attr('src', url);
                    $(this).parents(".btn-group").toggleClass("open")
                }
            }


            treeObj = $.fn.zTree.init($("#sidebarZtr"), setting, zNodes);
            $("#sidebarZtr ul li:last-child").addClass("lastli").css("border", "none");
            $("head").append('<style>#sidebarZtr ul li.lastli:before {content:"";display:inline-block;width:10px;height:12px;border-left:1px dotted #8BAEBF}</style>');
            //如果传过来有id 默认打开
            // var pid = baseTools.getUrlQueryString("pid");
            if (type == "2") {
                curSeg.tsclGxhyw();
                var id = dzswjCommon.getCookieCddwByStr("ID"); // = baseTools.getUrlQueryString("id");
                if (id) {
                    curSeg.onOpenByid(id);
                }else{
                    dzswjCommon.clearCookieCddwID();
                }
            }
            curSeg.deleteDfsyyw();
        },
        //删除地方税费业务
        deleteDfsyyw: function(){
            var dlmc = jcptTools.getUserDataByKey("DLMC");
            if(dlmc == '914101057355318653' || dlmc == "410105735531865" || dlmc == "91410000169955857C" || dlmc =="410000169955857" || dlmc == "41292119741215112201"){
                var zTree = $.fn.zTree.getZTreeObj("sidebarZtr");
                var n1 = zTree.getNodeByParam("ID", '78159', '');
                zTree.removeNode(n1);
            } else {
                //增值税发票认证
                var n1 = treeObj.getNodeByParam("ID", '78157', '');
                var n2 = treeObj.getNodeByParam("ID", '78251', '');
                //货运发票远程认证
                var n3 = treeObj.getNodeByParam("ID", '775', '');
                var n4 = treeObj.getNodeByParam("ID", '78158', '');

                treeObj.removeNode(n1);
                treeObj.removeNode(n2);
                treeObj.removeNode(n3);
                treeObj.removeNode(n4);
            }
        },
        //特殊处理个性化业务
        tsclGxhyw: function(){
            var zTree = $.fn.zTree.getZTreeObj("sidebarZtr");
            var p = zTree.getNodeByParam("ID", '78184', '');//环保税业务办理套餐
            // var n1 = zTree.getNodeByParam("ID", '78200', '');//环境保护税纳税申报表（A类）
            //正式环境 为77650 和测试环境不一致 tbb 2018年11月27日00:56:02
            var n1 = zTree.getNodeByParam("ID", '77650', '');//环境保护税纳税申报表（A类）
            var n2 = zTree.getNodeByParam("ID", '77651', '');//环境保护税按月计算报表（大气污染物适用）
            var n3 = zTree.getNodeByParam("ID", '77652', '');//环境保护税按月计算报表（水污染物适用）
            var n4 = zTree.getNodeByParam("ID", '77653', '');//环境保护税按月计算报表（固体废物适用）
            var n5 = zTree.getNodeByParam("ID", '77654', '');//环境保护税按月计算报表（噪声适用）
            var n6 = zTree.getNodeByParam("ID", '77655', '');//环境保护税减免税明细计算报表
            var n7 = zTree.getNodeByParam("ID", '77657', '');//环境保护税纳税申报表（B类）
            if(n1){
                n1["pId"]="";
                zTree.addNodes(p, n1);
            }
            if(n2){
                n2["pId"]="";
                zTree.addNodes(p, n2);
            }
            if(n3){
                n3["pId"]="";
                zTree.addNodes(p, n3);
            }
            if(n4){
                n4["pId"]="";
                zTree.addNodes(p, n4);
            }
            if(n5){
                n5["pId"]="";
                zTree.addNodes(p, n5);
            }
            if(n6){
                n6["pId"]="";
                zTree.addNodes(p, n6);
            }
            if(n7){
                n7["pId"]="";
                zTree.addNodes(p, n7);
            }
            treeObj.expandAll(false);
        },
        //申报保存后回调此方法
        changeNodeStatus: function (sbbzl_dm, status) {
            var zTree = $.fn.zTree.getZTreeObj("sidebarZtr");
            var n1;//保存当前要更新标志的节点
            // n1 = zTree.getNodeByParam("ID", sbbzl_dm, '');
            if(zTree.getSelectedNodes() && zTree.getSelectedNodes().length>0){
                n1 = zTree.getSelectedNodes()[0];
                //对于居民所得税年报，因下级菜单报表是在企业点击上级菜单时才异步带出的。在带出之前，n1可能会出现错误，导致后续js报错
                if(n1){
                    if (status == "0" || status == "11") {
                        n1.iconSkin = "";// 空的
                    } else if (status == "1") {
                        n1.iconSkin = "icon1";//保存 打对号
                    } else if (status == "2") {
                        n1.iconSkin = "icon2";// 暂时不用
                    }
                }
                zTree.updateNode(n1);
            }
        },
        //判断其他系统是否打开新窗口
        openIframe: function () {
            var objIframe = dzswjCommon.getCookieIframe();
            if(objIframe){
                var text = objIframe["TEXT"];
                var url = objIframe["URL"];
                if(text && url){
                    slider.tabIframe(text,url);
                    dzswjCommon.setCookieIframe("");
                }
            }
        }
    }
})();