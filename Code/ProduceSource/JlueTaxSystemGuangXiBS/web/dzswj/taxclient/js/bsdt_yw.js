$(document).ready(function () {
    bsdt_yw.onload();
});
var bsdt_yw = (function () {
    var curSeg;
    var allMenu = [];//存放所有的菜单
    var cygnList = [];//常用功能集合
    var isLoginIndexPage = true;

    var init = function () {
    };

    return {
        onload: function () {
            //说明:该文件在main.html中也有引用，但是部分功能不使用，在加载过程过滤掉
            var thisUrl =window.location.href;
            if(thisUrl.indexOf('login_index.html') == -1){
                isLoginIndexPage = false;
            }
            curSeg = bsdt_yw;
            init();

            //初始化菜单
            curSeg.initAllGnmk();
            //初始化 常用功能
            if (jcptTools.getIsLogin()) {
                //数据库查询常用功能
                curSeg.commonFunction();
            }

            curSeg.bindEvent();
        },

        getCygnList:function(){
            return cygnList;
        },

        getAllMenu:function(){
            return allMenu;
        },

        //绑定所有事件
        bindEvent: function () {
            //常用功能搜索
            $(document).on("click", "#laySearch", function () {
                // login_index_cygn.laySearchClick();
                login_index_cygn.searchMenu();
            });

            //常用功能添加
            $(document).on("click", "#confirmSubmit", function () {
                login_index_cygn.confirmSubmitClick();
            });

            //左侧常用功能 更多
            $("#wxl_btn_setting_cygn").click(function () {
                if (jcptTools.getIsLogin()) {
                    login_index_cygn.cygnMoreClick(bsdt_yw.cygnMoreClickCall);
                }else{
                    curSeg.showLogin();
                }
            });

            //左侧定制业务 设置点击事件
            $("#wxl_btn_setting_dzyw").click(function () {
                return false;
                if (jcptTools.getIsLogin()) {
                    login_index_cygn.dzywSettingClick();
                }else{
                    curSeg.showLogin();
                }
                return false;
            });

            //左侧特色业务 设置点击事件
            $("#wxl_btn_setting_tsyw").click(function () {
                if (jcptTools.getIsLogin()) {
                    dzswjCommon.liClick("/web/dzswj/taxclient/main.html?tid=75019&pid=75033");
                }else{
                    curSeg.showLogin();
                }
            });
            //左侧套餐及组合业务 设置点击事件
            $("#wxl_btn_setting_tc").click(function () {
                if (jcptTools.getIsLogin()) {
                    dzswjCommon.liClick("/web/dzswj/taxclient/main.html?tid=75019&pid=77313");
                }else{
                    curSeg.showLogin();
                }
            });
            /*收藏弹框复选框事件*/
            $(".wxl_collSwdj").on("click", "label", function () {
                $(this).toggleClass("active");
            });
            $(".wxl_collSwdj1").on("click", "label", function () {
                $(this).toggleClass("active");
            });
            //聚焦显示下拉内容
            $("#titleInput").focus(function (e) {

                $("#search_box").show();
                $(this).css('color', '#666');
                // // $(this).parent().css('background', 'url(img/search_bg_focus.png) 0 0 no-repeat');
                $(this).next().find('i').css('color', '#1092E8');
                if (jcptTools.getIsLogin()) {
                    cdss.serarchDefaultMenuInfo()
                }

            });
            //离焦隐藏下拉内容
            $("#titleInput").blur(function (e) {
                // $(this).parent().css('background', 'url(img/search_bg.png) 0 0 no-repeat');
                $(this).next().find('i').css('color', '#bce2ff');

                setTimeout(function () {
                    $("#search_box").hide();
                }, 200)
            });

        },


        //更多页面加载数据后回调
        cygnMoreClickCall: function(datalist){

            $(".wxl_collSwdj").html("");
            // var cygnList = menulist.menulist[0].menulist;
            var cygnList = [];
            // var cygnList = menulist.menulist;
            var showlist = $("<ul></ul>");
            // var datalist = datas.list;

            $("<li></li>").append("<label></label><span></span>").append("<ul class='submenu'></ul>").appendTo(showlist);
            for (var i = 0; i < datalist.length; i++) {
                var obj = datalist[i];
                $("<li></li>").append("<label></label><span class='span_sub'><img src='img/icon_cygn5.png' style='float: left;margin-top: 8px;margin-left: 6px;'><a href='javascript:void(0)' onclick='dzswjCommon.liClick(\"" + dzswjCommon.getMainUrl(obj) +"\")'>"+obj.MKXK_MC+"</a><span onclick='login_index_cygn.delCommonFunction("+obj["ID"]+",this)' class=\"close_icon\"></span></span>").appendTo(showlist.find(".submenu"));
            }
            $(".wxl_collSwdj").append(showlist);
        },


        initAllGnmk: function () {
            var tid = dzswjCommon.getCookieCddwByStr("TID");
            var url = "";
            var pid = "";
            if (jcptTools.getIsLogin()) {
                url = "/server/platform/ptgl/qyyh/selectGnmkByYhid.do";
            } else {
                if (dzswjCommon.getIsGzfwByCookie()) {//id_tzgg:通知公告 75018:公众服务
                    url = "/server/platform/ptgl/qyyh/selectGnmkByGzfw.do";
                    pid = "75018";
                } else {
                    //以下方法不使用 禁用
                    url = "/server/platform/ptgl/qyyh/selectGnmkByYhid.do";
                }
            }
            baseTools.xhrAjax({
                url: url,
                dataType: 'jsonp',
                params: {
                    PID: pid
                },
                callback: [function (data) {
                    if (data.code == 0) {
                        jcptTools.msg(data.msg);
                        return;
                    } else {
                        var datalist = data.list;
                        if (jcptTools.getIsLogin()) {
                            allMenu = datalist;
                        }
                    }
                }]
            });
        },
        //常用功能
        commonFunction: function () {
            baseTools.xhrAjax({
                url: '/server/main/getCommonFuction.do',
                dataType: 'jsonp',
                callback: [function (datas) {
                    if (datas.code == '0') {
                        parent.jcptTools.msg(datas.msg);
                        return false;
                    }  else if(datas.code == '1'){
                        if (datas && datas.list) {
                            cygnList = datas.list;
                            var cygnHtml = '<li onclick=javascript:curSeg.shouCangJia() ><span>▪</span>收藏夹<a class="content_title_arrow" onclick=javascript:bsdt_yw.shouCangJia()>+</a></li>';
                            var datalist = datas.list;
                            for (var i = 0; i < datalist.length; i++) {
                                var obj = datalist[i];
                                if(i<10){
                                    cygnHtml = curSeg.getLeftLiHtml(cygnHtml, obj);
                                }
                            }
                            $("#cygn_ul").html(cygnHtml);
                        }
                    }
                }]
            });
        },
        shouCangJia:function(){
            window.open('shoucangjia.html','_blank');
        },
        //追加左边 li的html
        getLeftLiHtml: function (html, obj) {
            html += '<li onclick=dzswjCommon.liClick("' + dzswjCommon.getMainUrl(obj) + '") title="'+ obj.MKXK_MC +'"><span>▪</span>' + obj.MKXK_MC + '</li>';

            return html;
        },


        liClick: function (url, type) {
            curSeg.showLogin();
        },
        liClickNoLogin: function (url) {
            window.location.href = url;
        },

        //显示登录框
        showLogin: function(){
            $('.wep_login').click();
        }



    }
})();