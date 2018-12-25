$(document).ready(function () {
    //菜单搜索
    cdss.onload();
});
var cdss = (function () {
    var curSeg;
    var allMenu = []; //存放所有的菜单
    var gzfwMenuList = []; //公众服务菜单集合

    var init = function () {};

    return {
        onload: function () {
            curSeg = cdss;
            init();

            curSeg.bindEvent();
        },

        //绑定所有事件
        bindEvent: function () {

        },

        //查询出来的li 点击跳转方法 tbb 2018年10月27日20:34:41
        /* serarchMenuLiClick: function($obj,type){
             alert(type);
             $("#search_box").empty();
             $("#titleInput").val("");
             var dataUrl = $obj.attr('data-url');
             $("#search_box").hide();
             // window.location.href=dataUrl;
             dzswjCommon.liClick(dataUrl,type);
         },*/
        //头部搜索框搜索事件 tbb 2018年10月27日19:39:57
        serarchMenu: function ($obj) {
            $("#search_box").empty().show();
            var filter = $obj.val().trim().toUpperCase();
            if (filter) {
                var allMenuInfo;
                if (jcptTools.getIsLogin()) {
                    allMenuInfo = allMenu;
                    /*if(!allMenuInfo || allMenu.length<=0){
                        if(window.opener && window.opener.login_index_yw){
                            //加载上个页面 避免每次加载都查询数据库
                            allMenu = window.opener.login_index_yw.getAllMenu();
                        }
                    }
                    allMenuInfo = allMenu;*/
                } else {
                    allMenuInfo = gzfwMenuList;
                    /*if(!allMenuInfo || allMenu.length<=0){
                        if(window.login_index_yw){
                            gzfwMenuList = window.login_index_yw.getGzfwMenu();
                        }
                    }
                    allMenuInfo = gzfwMenuList;
                    if(!allMenuInfo || allMenu.length<=0){
                        if(window.opener && window.opener.login_index_yw){
                            gzfwMenuList = window.opener.login_index_yw.getGzfwMenu();
                        }
                    }
                    allMenuInfo = gzfwMenuList;*/
                }

                if (allMenuInfo && allMenuInfo.length > 0) {
                    curSeg.serarchMenuInfo(filter, allMenuInfo);
                } else {
                    if (jcptTools.getIsLogin()) {
                        curSeg.selectAllGnmk();
                        allMenuInfo = allMenu;
                    } else {
                        curSeg.selectAllGnmkGzfw();
                        allMenuInfo = gzfwMenuList;
                    }
                    curSeg.serarchMenuInfo(filter, allMenuInfo);
                }
            }
        },

        selectAllGnmkGzfw: function () {
            // alert("查询公众服务全部菜单");
            baseTools.xhrAjax({
                url: "/server/platform/ptgl/qyyh/selectGnmkByGzfw.do",
                dataType: 'jsonp',
                async: false,
                params: {
                    PID: "75018"
                },
                callback: [function (data) {
                    if (data.code == 0) {
                        jcptTools.msg(data.msg);
                        return;
                    } else if (data.code == '-3') {
                        //						    jcptTools.msg("请登录系统！");
                        jcptTools.clearAllCookie();
                        jcptTools.gotoLogin();
                        return;
                    } else {
                        gzfwMenuList = data.list;
                    }
                }]
            })
        },

        //查询菜单具体的方法 tbb 2018年10月27日20:07:22
        serarchMenuInfo: function (filter, strallMenu) {
            $("#search_box").empty();
            if (strallMenu && strallMenu.length > 0) {
                for (var j = 0; j < strallMenu.length; j++) {
                    var obj = strallMenu[j];
                    if (obj.MKXK_MC.indexOf(filter) != -1 || (obj['MKXK_MC_QP'] && obj.MKXK_MC_QP.indexOf(filter) != -1) || (obj['MKXK_MC_JP'] && obj.MKXK_MC_JP.indexOf(filter) != -1)) {
                        if (obj.MKXK_URL_PT) {
                            var html = "<label  style='cursor:pointer;' class='menuItem' data-url='" + dzswjCommon.getMainUrl(obj) + "'><span>" + obj.MKXK_MC + "</span></label>"
                            $("#search_box").append(html)
                        }
                    }
                }
                var height = 35 * strallMenu.length > ($(window).height() - 35) ? ($(window).height() - 35) : strallMenu.length * 35;

                //	滚动条
                var scroll_h = 500;
                $('.scrollbar').css("height", scroll_h).niceScroll({
                    cursorcolor: "#ccc", //#CC0071 光标颜色
                    cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
                    touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
                    cursorwidth: "5px", //像素光标的宽度
                    cursorborder: "0", // 	游标边框css定义
                    autohidemode: false //是否隐藏滚动条
                });

                $('#search_box').find('bgiframe').remove();

                 var ifr = '<iframe class="bgiframe" frameborder="0" scrolling="no" tabindex="-1" src="javascript: ;" style="display:block;position:absolute;z-index:-1;opacity:0;background:none;background-color:transparent;overflow:hidden;top:0px;left:0px;width:240px;height:500px;"></iframe>';

                $("#search_box").append(ifr);
            }
        },

        //查询出来的li 点击跳转方法 tbb 2018年10月27日20:34:41
        serarchMenuLiClick: function ($obj, type) {
            $("#search_box").empty();
            $("#titleInput").val("");
            var dataUrl = $obj.attr('data-url');
            $("#search_box").hide();
            // window.location.href=dataUrl;
            dzswjCommon.liClick(dataUrl, type);
        },

        //查下所有的菜单 tbb 2018年10月27日20:01:49
        selectAllGnmk: function () {
            var url = "";
            if(jcptTools.getIsZrr()){
                url = "/server/platform/ptgl/qyyh/selectAllGnmkByYhid.do";
            }else{
                // url = "/server/platform/ptgl/qyyh/selectGnmkByYhidPidSb.do";
                url = "/server/platform/ptgl/qyyh/selectAllGnmkByYhid.do";
            }
            // alert("查询全部菜单");
            baseTools.xhrAjax({
                url: url,
                dataType: 'jsonp',
                async: false,
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
                        /*if(window.opener && window.opener.login_index_yw){
                            //放入上个页面 避免每次加载都查询数据库
                            window.opener.login_index_yw.setAllMenu(data.list);
                        }*/
                        allMenu = data.list;
                    }
                }]
            });
        },

        setAllMenu: function (all) {
            allMenu = all;
        },
        setGzfwMenu: function (gzfwMenu) {
            gzfwMenuList = gzfwMenu;
        },
        //给我的信息 常用功能 添加 功能提供方法 目的是搜索和常用功能共用一个变量
        getAllMenu: function () {
            if (allMenu && allMenu.length > 0) {
                return allMenu;
            } else {
                curSeg.selectAllGnmk();
                return allMenu;
            }
        }

    }
})();