$(document).ready(function () {
    leftSlider.onload();
});

var leftSlider = (function () {
    // 私有属性
    var curSeg, treeObj;
    var jddzList = [];
    var mainMenuNoSb = []; //除申报外的菜单
    var mainMenuSb = []; //申报的菜单
    var mainMenuSbzs = []; //社保征收的菜单
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

    // 过滤没有url的空节点
    var filterEmptyNode = function (nodes) {
        if (!nodes && !(nodes instanceof Array)) {
            return nodes;
        }

        var nodesNew = [];
        for (var i = 0; i < nodes.length; i++) {
            if (isValidNodeByFilter(nodes,i)) {
                nodesNew.push(nodes[i]);
            }
        }
        return nodesNew;
    };

    // 判断是否为有效节点，规则：如果不存在有 url 的子孙节点则返回false
    var isValidNodeByFilter = function (nodes,idx) {
        if (nodes[idx] && (nodes[idx].Url || nodes[idx].XMFL_DM === 'dzswj.ckts')) {
            return true;
        }

        for (var i = 0; i < nodes.length; i++) {
            if (idx === i) {
                continue;
            }
            // 当 idx 对应的节点有子节点
            if (nodes[i].pId === nodes[idx].ID && isValidNodeByFilter(nodes, i)) {
                return true;
            }
        }

        return false;
    };

    return {
        //申报保存年报后调用此方法重新加载申报菜单
        loadSbTreeForSb: function () {
            var data_name = dzswjCommon.getTopIfremPid();
            curSeg.initMenuSb(data_name);
        },
        onload: function () {
            curSeg = leftSlider;

            var data_name = dzswjCommon.getTopIfremPid();
            // if(jcptTools.getIsDsdgh()){
            //     curSeg.initMenuDsdgh(data_name);
            // }else{
            // curSeg.selectGnmk();
            //企业 我要办税
            curSeg.initMenuNoSb(data_name);
            // curSeg.checkSbzsYhsf();
            // }
            // curSeg.initMenuSb(data_name);
            init();

            //判断其他系统是否打开新窗口
            curSeg.openIframe();

            //提示弹框
            if (jcptTools.getCookie('CJWTXSBZ') !== 'Y') {
                // curSeg.alertBox('#wdl_yyxz_tk','60%','390px');  注销弹出口，bylishaoxing 20190531
            }
            //右下角弹窗：1弹出 、0不弹
            // curSeg.alertBox1OnOff(0);
            //加载通知公告
            gnmkUtils.selectPtTzgg('bsdt');
            //非正常户等提示信息
            curSeg.alertBoxNoNormalUser();
            //加载常用功能
            curSeg.commonFunction();
        },

        commonFunction: function () {
            baseTools.xhrAjax({
                url: '/server/main/getCommonFuction.do',
                dataType: 'jsonp',
                callback: [function (datas) {
                    if (datas.code == '0') {
                        parent.jcptTools.msg(datas.msg);
                        return false;
                    } else if (datas.code == '-3') {
//			    		parent.jcptTools.msg("请登录系统");
                        parent.jcptTools.clearAllCookie();
                        parent.jcptTools.gotoLogin();
                        return false;
                    } else {
                        if (datas && datas.list) {
                            cygnList = datas.list;
                            var cygnHtml = '<li onclick=javascript:bsdt_yw.shouCangJia() ><span>▪</span>收藏夹<a class="content_title_arrow" onclick=javascript:login_index_yw.shouCangJia()>+</a></li>';
                            var datalist = datas.list;
                            for (var i = 0; i < datalist.length; i++) {
                                var obj = datalist[i];
                                if(i<10){
                                    cygnHtml = curSeg.getLeftLiHtml(cygnHtml, obj);
                                }
                            }
                            $("#common_function").html(cygnHtml);
                            if($(".slider_cy").length >0){
                            var top_h = $(".slider_cy").height()+76;
                            $("#sidebarZtr").height($(window).height() - top_h);
                          //  console.log(top_h)
                            }
                        }
                    }
                }]
            });
        },
        //追加左边 li的html
        getLeftLiHtml: function (html, obj) {
            html += '<li onclick=leftSlider.openCaiDan("' + obj.MKXK_MC+'","'+ obj.MKXK_URL+'","'+ obj.MKXKID+'","'+ obj.XMFL_DM+ '") title="'+ obj.MKXK_MC +'"><span>▪</span>' + obj.MKXK_MC + '</li>';
            //html += '<li onclick=leftSlider.onClickCommonFunction("' + obj.TOP_MKXKID + '","' +obj.SJ_MKXKID+'","' +obj.MKXKID+'") title="'+ obj.MKXK_MC +'"><span>▪</span>' + obj.MKXK_MC + '</li>';
            return html;
        },
        onClickCommonFunction:function(tid, pid, id){
            dzswjCommon.setCookieCddwID(tid, pid, id);
            if(id){
                gnmkUtils.addFwrz(id, "19");
            }else{
                if(gnmkUtils.getIsDeb()){
                    alert("主页搜索框没有获取到日志id");
                }
            }
            $("#m_nav_ul").find("li[id='" + tid + "']").click();
        },
        openCaiDan:function(mkxkmc,url,mkid,xmfldm){
            curSeg.onOpenByid(mkid);

            // if(url != '' && url != undefined && url != 'undefined' && url != 'null'){
            //     var rjbbDz = jcptTools.getRjbbUrl(xmfldm);
            //     if(xmfldm == 'dzswj.zrdssb'){
            //         var left = 0;
            //         var top = 0;
            //         var width = screen.availWidth - 16;
            //         var height = screen.availHeight - 70;
            //         var param = "left=" + left + ",top=" + top + ",width=" + width + ",height=" + height;
            //         param += ",scrollbars,resizable=yes,toolbar=no,location=no, status=no,";
            //         if (xmfldm === 'dzswj.zrgssb'){
            //             window.open(rjbbDz+'/'+url,
            //                 '',param);
            //             return;
            //
            //         }
            //         window.open(rjbbDz+'/'+url,
            //             '',param);
            //     }else{
            //         slider.tabIframe(mkxkmc,rjbbDz+'/'+url, mkid);
            //     }
            //
            // }
            //
            //
            // var nodes = treeObj.transformToArray(treeObj.getNodes());
            // treeObj.cancelSelectedNode();
            // var results = [];
            // for (var i = 0; i < nodes.length; i++) {
            //     var temp = nodes[i];
            //     if (temp.ID == mkid) {
            //         results.push(temp);
            //         break;
            //     }
            // }
            // treeObj.refresh();
            // if (results.length == 1) {
            //     var temp = results[0];
            //     treeObj.selectNode(temp, true);
            //     treeObj.expandNode(temp,null, null, null, true);
            // }

            // var result = treeObj.getNodesByParamFuzzy("name",mkxkmc);
            // for(var i=0;i<result.length;i++) {
            //     var node = result[i];
            //     if (!node.open) {
            //         treeObj.selectNode(node, true);
            //         treeObj.expandNode(node,null, null, null, true);
            //     } else {
            //         treeObj.expandNode(node, false, false);
            //     }
            // }
        },
        // 检测社保征收用户身份
        checkSbzsYhsf : function (sjmkxkid) {
            jcptTools.getSBZSUrl();
            var djxh = jcptTools.getUserDataByKey("DJXH");
            baseTools.xhrAjax({
                url: jcptTools.cnf.sbzsURL + '/checkuser/checkUserSf.do',
                params: {SBH: djxh, ZHLX: "1"},
                dataType: 'jsonp',
                isShowErrorMsg:false,
                callback: [function (data) {
                    // debugger;
                    if (data) {
                        curSeg.getSbzsGnmkTree(data['sflx'],sjmkxkid);
                    }
                }]
            });
        },

        // 获取社保征收模块树
        getSbzsGnmkTree : function (sflx,sjmkxkid) {
            if (sflx) {
                baseTools.xhrAjax({
                    url: '/server/platform/ptgl/qyyh/getQySbzsGnmkTree.do',
                    params: {SBZS_SFLX: sflx},
                    callback: [function (data) {
                        // debugger;
                        if(data && data.code == "0"){
                            //循环一级菜单
                            var datalist = data.data;
                            if(datalist && datalist.length>0){
                                for (var i = 0; i < datalist.length; i++) {
                                    var obj = datalist[i];
                                    if (obj.MKXKID === 81001 && ignoreMenu(obj.MKXK_MC)) {
                                        continue;
                                    }
                                    if (obj['MKXKID'] == sjmkxkid) {
                                        continue;
                                    }
                                    if (obj['MKXKID'] == "75000" || obj['MKXKID'] == "75002" || obj['MKXKID'] == "75019" ) {
                                        continue;
                                    }
                                    var sbHave=false;
                                    for (var j = 0; j < mainMenuSb.length; j++) {
                                        var ignoreMenu1 = mainMenuSb[j];
                                        if(ignoreMenu1.ID == obj.MKXKID){
                                            sbHave = true;
                                            break;
                                        }
                                    }
                                    if(sbHave){
                                        continue;
                                    }
                                    var menuZtreeList = new leftSlider.menuZtreeList();
                                    menuZtreeList.ID = obj.MKXKID;
                                    menuZtreeList.pId = obj.SJ_MKXKID;
                                    menuZtreeList.name = obj.MKXK_MC;
                                    menuZtreeList.Url = obj.MKXK_URL_PT;
                                    menuZtreeList.XMFL_DM = obj.XMFL_DM;
                                    mainMenuSbzs.push(menuZtreeList);
                                }
                                leftSlider.loadZtree("3");
                            }
                        }
                    }]
                });
            }
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
                        curSeg.gnmkCallback(data, sjmkxkid, "1",data.code);
                    }
                }]
            });
        },
        /***
         * 初始化菜单
         * @param sjmkxkid 上级ID
         */
        initMenuDsdgh: function (sjmkxkid) {
            alert("异常方法");
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
                        curSeg.gnmkCallback(data, sjmkxkid, "2",data.code);
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
        gnmkCallback: function (data, sjmkxkid, type,code) {
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
                    if (obj['MKXKID'] == sjmkxkid) {
                        continue;
                    }
                    if (obj['TOP_MKXKID'] != sjmkxkid) {
                        continue;
                    }

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
                    //  menuZtreeList.Url = obj.MKXK_URL_PT;
                    // if(obj.XMFL_DM == 'dzswj.zdsy'){
                    //   menuZtreeList.Url = obj.MKXK_URL_PT;
                    // }else{
                    menuZtreeList.Url = jcptTools.replaceProtocolPortPort(obj.MKXK_URL_PT);
                    // }
                    menuZtreeList.JDFL = obj.JDFL_DM;
                    menuZtreeList.XMFL_DM = obj.XMFL_DM;
                    if (type == "1") {
                        mainMenuNoSb.push(menuZtreeList);
                    } else if (type == "2") {
                        mainMenuSb.push(menuZtreeList);
                    }
                }
                leftSlider.loadZtree(type);
                //code=5 为特殊菜单处理
                if (type == "1" && code !="5") {
                    var dq_yhsf = jcptTools.getUserDataByKey("DQ_YHSF");
                    curSeg.initMenuSb(sjmkxkid);
                    if(dq_yhsf != "BYH"){
                        // 调用申报接口显示菜单
                        // hlwsbUtils.getRjbbUrl();
                    }
                }else if (type == "2"){
                    curSeg.checkSbzsYhsf(sjmkxkid);
                    // curSeg.getSbzsGnmkTree("3",sjmkxkid);
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
                        //  menuZtreeList.Url = obj.MKXK_URL_PT;
                        //  if( obj.XMFL_DM == 'dzswj.zdsy'){
                        //    menuZtreeList.Url = obj.MKXK_URL_PT;
                        // }else{
                        menuZtreeList.Url = jcptTools.replaceProtocolPortPort(obj.MKXK_URL_PT);
                        //  }
                        menuZtreeList.XMFL_DM = obj.XMFL_DM;
                        menuZtreeList.JDFL = obj.JDFL_DM;
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
            } else if (type == "3") {
                menulist = mainMenuSb.concat(mainMenuSbzs);
                // return ;
            } else {
                return ;
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

            function onCktsLogin(nodeUrl) {
                baseTools.xhrAjax({
                    url: '/server/pt/gdsdzgx/getCktsNsrsbh.do',
                    bShow: false,
                    async: false,
                    params: {nodeUrl:nodeUrl},
                    callback: [function (jsonObj) {
                        switch (jsonObj.code) {
                            case "1":
                                if (jsonObj.data) {
                                    var r = jsonObj.data;
                                    if (jsonObj.data.rltCode == "200") {
                                        if(nodeUrl!=null&&nodeUrl!="null"&&nodeUrl!="undefined"){
                                            nodeUrl = nodeUrl.substr(1,nodeUrl.length);
                                            var urlParam = nodeUrl.split("##");
                                            var url = jsonObj.data_url + "?businessDomain="+urlParam[0]+"&businessCode="+urlParam[1]+"&accessToken=" + r.accessToken; //taxClientTools.cnf.zrrDswtURL;
                                        }else{
                                            var url = jsonObj.data_url + "?token=" + jsonObj.token + "&tokenid=" + r.rltContent; //taxClientTools.cnf.zrrDswtURL;
                                        }
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
                    $('#kf-hdipt-dssb-id').val(treeNode.ID);
                    $('#kf-hdipt-dssb-sid').val(jcptTools.getCookie("WSBSFWTSESSIONID"));
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
                    var url = treeNode.Url+"&wsbsfwtsessionid="+jcptTools.getCookie("WSBSFWTSESSIONID");
                    if((jcptTools.getUserDataByKey("NSRSBH")=='91450103XXXXXXXX2A'||jcptTools.getUserDataByKey("NSRSBH")=='91450103XXXXXXXX4A') && treeNode.ID == '81031' ){
                        layer.confirm('<span><p style="padding-top:20px; text-indent: 0.1em;">尊敬的纳税人:</p>   ' +
                            '　<p style=" text-indent: 1em; margin-top: -24px;">　2019年度全国税收调查在线填报工作，已于2019年6月23日截止。目前无法进行税收调查在线填报。 </p> </span>'
                            , {
                                btn: ['继续访问','放弃'],
                                title:false,
                                offset:'200px',
                                yes:function(index){
                                    layer.close(index);
                                    window.open(url, '_blank', param);
                                    return;
                                },
                                cancel:function(index){
                                    layer.close(index);
                                }
                            })
                        //alert("尊敬的纳税人：2018年度全国税收调查在线填报工作，已于2019年6月23日截止。目前无法进行税收调查在线填报。");
                    }else{
                        window.open(url, '', param);
                        return;
                    }
                }
                if (treeNode.XMFL_DM && treeNode.XMFL_DM === "dzswj.ckts") {
                    onCktsLogin(treeNode.Url);
                    return;
                }
                //判断申报服务是否正常
                if(treeNode.XMFL_DM && (treeNode.XMFL_DM === "dzswj.hlwsb"||treeNode.XMFL_DM === "dzswj.dssb")){
                    if(!parent.window.QX_USER){
                        alert("页面正在加载中，请稍后再试！");
                        return                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ;
                    }
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
                    layui.use('layer', function () {
                        var layer = layui.layer;
                        layer.confirm('<span><p style="padding-top:20px; text-indent: 2em;">根据中国政府网站发展指引要求，按照国家税务总局关于加强税务网站域名管理的工作部署，广西税务增值税发票选择确认平台启用新域名https://fpdk.guangxi.chinatax.gov.cn，旧域名（https://fpdk.gxgs.gov.cn）已经停用。纳税人如不能正常访问网站及有关系统，可拨打0771-12366纳税服务热线进行反馈和获取支持。</p>   ' +
                            '　<p style=" text-indent: 2em; margin-top: -24px;">　感谢您对国家税务总局广西壮族自治区税务局网站工作的关心与支持！ </p> </span>' +
                            '　<p style="text-align: right; ">　国家税务总局广西壮族自治区税务局 </p>' +
                            '　<p style="text-align: right;margin-top: -24px;">　2019年3月22日 </p> ', {
                            btn: ['继续访问','放弃'],
                            title:false,
                            offset:'200px',
                            yes:function(index){
                                layer.close(index);
                                window.open("https://fpdk.guangxi.chinatax.gov.cn", "_blank");
                            },
                            cancel:function(index){
                                layer.close(index);
                            }
                        })
                    });
                    return;
                }

                if ((treeNode.ID)=="GXPT") {
                    onSsoLogin(treeNode.qyddz);
                    return;
                }

                if(treeNode.ID){
                    gnmkUtils.addFwrz(treeNode.ID, "14");
                }else{
                    if(gnmkUtils.getIsDeb()){
                        alert("没有获取到企业我要办税日志id");
                    }
                }
                var zTree = $.fn.zTree.getZTreeObj("sidebarZtr"); // zTree 对象
                zTree.expandNode(treeNode, null, null, null, true);
                slider.tabIframe(treeNode.name, treeNode.Url, treeNode.ID);

                /*if (treeNode.Url) {
                    var currentId = $('.page-tabs-content').find('.active').attr('data-id');
                    var target = $('.LRADMS_iframe[data-id="' + currentId + '"]');
                    var url = target.attr('src');
                    target.attr('src', url);
                    $(this).parents(".btn-group").toggleClass("open")
                }*/
            }
            zNodes = filterEmptyNode(zNodes);
            treeObj = $.fn.zTree.init($("#sidebarZtr"), setting, zNodes);
            globeZtree = treeObj;
            $("#sidebarZtr ul li:last-child").addClass("lastli").css("border", "none");
            $("head").append('<style>#sidebarZtr ul li.lastli:before {content:"";display:inline-block;width:10px;height:12px;border-left:1px dotted #8BAEBF}</style>');
            //如果传过来有id 默认打开
            // var pid = baseTools.getUrlQueryString("pid");
            if (type == "2") {
                curSeg.deleteTempSbTree();
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
        //删除申报空节点
        deleteTempSbTree:function() {
            var nodes = treeObj.getNodes();
            var nodeObj;
            for (var vi = 0; vi<nodes.length; vi++) {
                nodeObj = nodes[vi];
                if(nodeObj.isParent == false && nodeObj.JDFL != "03"){
                    treeObj.removeNode(nodeObj);
                }
            }
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
        },
        /*弹框模板*/
        alertBox:function(dom,width,height){
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.open({
                    closeBtn:1,
                    title:"常见问题",
                    type: 1,
                    area: [width, height],
                    content: $(dom)//这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
                });
            });
        },
        closeCjwt:function () {
            if ($('#kf-bzxs').prop('checked')){
                $.cookie('CJWTXSBZ', 'Y', {
                    domain: DOMAIN,
                    expires: 9999,
                    path: "/"
                });
            }
            layer.closeAll();
        },
        /*右下角通知弹窗*/
        alertBox1:function(dom,width,height){
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.open({
                    closeBtn:1,
                    title:"通知",
                    type: 1,
                    area: [width, height],
                    offset:'rb',
                    shade:0,
                    // closeBtn:1,
                    zIndex:19891010,
                    // btn:['关闭'],
                    content: $(dom),//这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
                    success:function (layero,index){
                        // console.log(layero.selector,index);
                        $(layero.selector).addClass('wdl_layui-layer');
                    }
                });
            });
        },
        alertBox1OnOff:function (sign) {
            if(sign==1){
                // alert(sign);
                // alert( sign == ture );
                // alert(ture);
                curSeg.alertBox1('#wdl_tx','320px','200px');
                // }else{
                //     alert(false);
            }
        },
        foldup:function () {
            globeZtree.expandAll(false);
        },
        alertBoxNoNormalUser:function () {
            var nsrStatus = jcptTools.getCookie("JCPT_USER").GS_NSRZT_DM;
            if(nsrStatus == '05' || nsrStatus == '07'){
                var url = "/server/main/fetchNoNormalNsrInfo.do";
                    baseTools.xhrAjax({
                        url : url,
                        bShow : false,
                        callback : [ curSeg.noNormalNsrBack ]
                    });
            }
        },
        noNormalNsrBack:function (jsonObject,xhrArgs) {
            var nsrStatus =jcptTools.getCookie("JCPT_USER").GS_NSRZT_DM;
            if(jsonObject.code == '0'){
                var result = jsonObject.data;
                var content = '';
                if(nsrStatus == '05'){
                    content  = "尊敬的纳税人，您已被认定为非正常户，暂不能在电子税务局办理相关涉税业务，请尽快到"+result.SWJGMC+"办税服务厅办理“非正常户解除”业务。";
                }else if(nsrStatus == '07'){
                    content  = "尊敬的纳税人，您的税务登记已注销，相关涉及文书可通过电子税务局【税务通知书查询】或办税服务厅打印。";
                }
                layui.use('layer', function() {
                    var layer = layui.layer;
                    layer.alert(content,{title:"提示信息",skin:"layui-layer-temp",offset:'auto'});
                })
            }
        },
        cygnArrowUp:function (obj) {
           if($(obj).text() == "∧"){
               $(obj).text("∨");
           }else{
               $(obj).text("∧");
           }
            $("#common_function").slideToggle(200);
           setTimeout(function () {
               var top_h = $(".add_slidear").height()+76;
               $("#sidebarZtr").height($(window).height() - top_h);
           },300)

        }
    }
})();


function openNewTab(type, text, url,mkid) {
    var rjbb;
    if (type == "2") {
        rjbb = "dzswj.wssq";
    } else if (type == "3") {
        rjbb = "dzswj.sbfjn";
    } else if (type == "4") {
        rjbb = "dzswj.hlwsb";
    } else if (type == "5"){
        rjbb = "dzswj.dssb"
    }
    var rjbbDz;
    if (rjbb) {
        rjbbDz = jcptTools.getRjbbUrl(rjbb);
    }
    slider.tabIframe(text,rjbbDz + url, mkid);
}