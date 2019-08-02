$(document).ready(function () {
    login_index_yw.onload();
});
var login_index_yw = (function () {
    var curSeg;
    var allMenu = [];//存放所有的菜单
    var gzfwMenuList = [];//公众服务菜单集合
    var cygnList = [];//常用功能集合

    var init = function () {
        //页面初始化
        if(jcptTools.getIsZrr()) {//自然人
            $("#nsrmc").html(jcptTools.getUserDataByKey("GR_YHMC"));
        }else{
            $("#nsrmc").html(jcptTools.getUserDataByKey("NSRMC"));
        }
        /*alert($(".content_left ").height());*/
    };

    return {
        onload: function () {
            curSeg = login_index_yw;
            init();

            //初始化菜单
            curSeg.initAllGnmk();
            //初始化 常用功能
            if (jcptTools.getIsLogin()) {

                //搜索框
                $("#m_top_search").css("display","block");

                if(jcptTools.getIsZrr()) {//自然人
                    $("#id_div_wddb").css("display", "none");
                    $("#id_div_tzgg").css("display", "block");
                }else{
                    $("#id_div_wddb").css("display", "block");
                    $("#id_div_tzgg").css("display", "none");
                }
                $(".wep_button").css("display", "none");
                $("#id_header_msg").css("display", "block");
                $("#id_div_tzgg").css("height","366px");
                //数据库查询常用功能
                curSeg.commonFunction();
                // index.onQuerytzgg();
                // getHlwsbUrl();//低风险事项提醒
//                curSeg.onQueryDbsx();//待办事项
            } else {
                //搜索框
                //$("#m_top_search").css("display","block");
                $(".f_left").css("display", "block");
                $("#id_div_wddb").css("display", "none");
                $("#id_div_tzgg").css("display", "block");
                $("#id_header_msg>span").css("display", "none");
                $(".header_search").css("margin-right","140px");
                $(".wep_button .wep_login").css("top","20px");
                $(".content_tb").css("height", "216px");
                $("#id_div_tzgg").css("height","466px");
                //11.25号15.27 提出需求 未登陆时不再显示常用功能
                //常用功能加载静态数据
                $("#cygn_ul").html(curSeg.getCygnStatic());

                // curSeg.gzfwTableData();
                // index.onQuerytzgg();
            }

            curSeg.bindEvent();


        },

        getCygnList:function(){
            return cygnList;
        },

        getAllMenu:function(){
            return allMenu;
        },
        setAllMenu:function(all){
            allMenu = all;
        },
        getGzfwMenu:function(){
            return gzfwMenuList;
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
                    login_index_cygn.cygnMoreClick(login_index_yw.cygnMoreClickCall);
                }else{
                    curSeg.showLogin();
                }
            });

            //左侧定制业务 设置点击事件
            $("#wxl_btn_setting_dzyw").click(function () {
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
            //弹框复选框点击点击事件：
           /* $(".wxn_collAdd ul li label").click(function () {
                $(this).toggleClass("active")
            });

            $(".wxn_collAdd1 ul li label").click(function () {
                $(this).toggleClass("active")
            });*/
            /*收藏弹框复选框事件*/
            $(".wxl_collSwdj").on("click", "label", function () {
                $(this).toggleClass("active");
            });
            $(".wxl_collSwdj1").on("click", "label", function () {
                $(this).toggleClass("active");
            });

            /*点击搜到的菜单展开菜单栏并定位打开*/
            $("#search_box").on("click", "label", function () {
                cdss.serarchMenuLiClick($(this),"1");
            });
            $("#titleInput").keyup(function () {
                cdss.serarchMenu($(this));
            });
            //右键粘贴复制点击搜索显示下拉框
            $(".header_search .search_btn").click(function(){
                cdss.serarchMenu($("#titleInput"));
            });
            //聚焦显示下拉内容
            $("#titleInput").focus(function (e) {
                $("#search_box").show();
                $(this).css('color', '#666');
                // $(this).parent().css('background', 'url(img/search_bg_focus.png) 0 0 no-repeat');
                $(this).next().find('i').css('color', '#1092E8');
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
                    /*if(pid == "75018" || pid == "75042"){ //企业
                        pid = "75018";
                    }else if(pid == "75008"){
                        pid = "75008";
                    }*/
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
                    } else if (data.code == '-3') {
//						    jcptTools.msg("请登录系统！");
                        jcptTools.clearAllCookie();
                        jcptTools.gotoLogin();
                        return;
                    } else {
                        var tcywHtml = "";//套餐业务 75034 > 77313
                        var tsywHtml = "";//特色业务 75033
                        var topHtml = "";
                        var wdxxHtml = "";//我的信息 75020
                        var wybsHtml = "";//我要办税 75019
                        var wycxHtml = "";//我要查询 75015
                        var hdzxHtml = "";//互动中心 75017
                        var gzfwHtml = "";//公众服务 75018
                        var gzfwGzcxHtml = "";//公众服务>公众查询 75041
                        var gzfwZxfdHtml = "";//公众服务>咨询辅导 75040

                        var datalist = data.list;
                        //11.22 没有登录就访问公众服务
                        /*if (dzswjCommon.getIsGzfwByCookie()) {
                            gzfwMenuList = datalist;
                        }else{
                            allMenu = datalist;
                        }*/
                        //把查询到的菜单缓存到cdss中
                        if (jcptTools.getIsLogin()) {
                            allMenu = datalist;
                            cdss.setAllMenu(datalist)
                        }else{
                            gzfwMenuList = datalist;
                            cdss.setGzfwMenu(datalist);
                        }
                        var sj_qy_gr="";//上级 企业、个人
                        var sj_wdxx="";//上级 我的信息
                        var sj_wybs="";//上级 我要办税
                        var sj_wycx="";//上级 我要查询
                        var sj_hdzx="";//上级 互动中心
                        var sj_gzfw="";//上级 公众服务
                        var sj_gzfw_gzcx="";//上级 公众服务 公众查询
                        var sj_gzfw_zxfd="";//上级 公众服务 质询辅导
                        if(jcptTools.getIsZrr()){//自然人
                            sj_qy_gr="75001";
                            sj_wdxx="75010";
                            sj_wybs="75009";
                            sj_wycx="75005";
                            sj_hdzx="75007";
                            sj_gzfw="75008";
                            sj_gzfw_gzcx="75441";
                            sj_gzfw_zxfd="75440";
                        }else{
                            sj_qy_gr="75002";
                            sj_wdxx="75020";
                            sj_wybs="75019";
                            sj_wycx="75015";
                            sj_hdzx="75017";
                            sj_gzfw="75018";
                            sj_gzfw_gzcx="75041";
                            sj_gzfw_zxfd="75040";
                        }
                        for (var i = 0; i < datalist.length; i++) {
                            var obj = datalist[i];
                            if (obj.SJ_MKXKID == "77313") { //套餐业务 75034>77313
                                $("#tcyw_name").html('套餐业务');
                                tcywHtml = curSeg.getLeftLiHtml(tcywHtml, obj);
                            } else if (obj.SJ_MKXKID == "75033") {//特色业务 75033
                                $("#tsyw_name").html(obj.SJ_MKXKMC);
                                tsywHtml = curSeg.getLeftLiHtml(tsywHtml, obj);
                            } else if (obj.SJ_MKXKID == sj_wdxx) {//我的信息 75020
                                wdxxHtml = curSeg.getDiv(wdxxHtml, obj);
                            } else if (obj.SJ_MKXKID == sj_wybs) {//我要办税 75019
                                wybsHtml = curSeg.getDiv(wybsHtml, obj);
                            } else if (obj.SJ_MKXKID == sj_wycx) {//我要查询 75015
                                wycxHtml = curSeg.getDiv(wycxHtml, obj);
                            } else if (obj.SJ_MKXKID == sj_hdzx) {//互动中心 75017
                                hdzxHtml = curSeg.getDiv(hdzxHtml, obj);
                            } else if (obj.SJ_MKXKID == sj_gzfw) {//公众服务 75018
                                // gzfwHtml = curSeg.getDiv(gzfwHtml, obj);
                            } else if (obj.SJ_MKXKID == sj_qy_gr && obj.MKXKID != "75016") {//头部信息 不是个性化办税
                                // topHtml+='<li>'+obj.MKXK_MC+'</li>';
                            } else if (obj.SJ_MKXKID == sj_gzfw_gzcx) {//公众服务>公众查询
                                gzfwGzcxHtml = curSeg.getGzfwGzcxDiv(gzfwGzcxHtml, obj);
                            } else if (obj.SJ_MKXKID == sj_gzfw_zxfd) {//公众服务>咨询辅导
                                // gzfwZxfdHtml = curSeg.getGzfwZxfdDiv(gzfwZxfdHtml, obj);
                            }

                        }

                        //未登录加载静态数据
                        if (jcptTools.getIsLogin()) {
                            $("#tcyw_ul").html(tcywHtml);
                            $("#tsyw_ul").html(tsywHtml);
                        }else{
                            $("#tcyw_ul").html(curSeg.getTcywStatic());
                            $("#tsyw_ul").html(curSeg.getTsywStatic());
                        }


                        // var flag = false;//是否有 active
                        var contHtml = "";
                        for (var i = 0; i < datalist.length; i++) {
                            var obj = datalist[i];
                            if (obj.SJ_MKXKID == sj_qy_gr && obj.MKXKID != "75016") {//头部信息 不是个性化办税
                                //topHtml += '<li id="' + obj.MKXKID + '">' + obj.MKXK_MC + '</li>';
                                topHtml += '<li id="' + obj.MKXKID + '">' + curSeg.getTopDiv('', obj); + '</li>';
                                if (obj.MKXKID != sj_gzfw) {//公众服务
                                    contHtml += '<li>';
                                } else {
                                    contHtml += '<li class="gzfw clearfix">';
                                }

                                if (obj.MKXKID == sj_wdxx) {//我的信息 75020
                                    contHtml += wdxxHtml;
                                } else if (obj.MKXKID == sj_wybs) {//我要办税 75019
                                    contHtml += wybsHtml;
                                } else if (obj.MKXKID == sj_wycx) {//我要查询 75015
                                    contHtml += wycxHtml;
                                } else if (obj.MKXKID == sj_hdzx) {//互动中心 75017
                                    contHtml += hdzxHtml;
                                } else if (obj.MKXKID == sj_gzfw) {//公众服务 75018
                                    gzfwHtml = '<div class="gzfw_l f_left">' +
                                        '<img src="img/gzcx_tit.png" alt="">'
                                        + gzfwGzcxHtml
                                        + '</div>' + '<div class="gzfw_r f_left">' +
                                        '<img src="img/zxfd_tit.png" alt="">' + curSeg.getGzfwZxfdDivStatic() + '</div>';
                                    contHtml += gzfwHtml;
                                }
                                contHtml += '</li>';
                            }
                        }

                        $("#top_tab_ul").html(topHtml);
                        var script = document.createElement('script');
                        script.type = "text/javascript";
                        script.src = "/driver/mydriver.js?v=1.0";
                        document.body.appendChild(script);

                        $("#top_cont_ul").html(contHtml);

                        $('#top_cont_ul').find('li').eq(1).find('div:last').hide();

                        //打开页面默认选中
                        var tid = dzswjCommon.getCookieCddwByStr("TID");
                        if (tid) {
                            var litid = $("#top_tab_ul").find("li[id='" + tid + "']");
                            var len = litid.length;
                            if (len) {
                                curSeg.topLiClick(litid);
                                // dzswjCommon.setCookieCddwID("","","");
                                dzswjCommon.clearCookieCddwID();
                                //公众服务 未登录状态不清空cookie  登录状态清空cookie
                                /*if (dzswjCommon.getIsGzfwByCookie()) {
                                    if (jcptTools.getIsLogin()) {
                                        dzswjCommon.setCookieCddw("");
                                    }
                                } else {
                                    dzswjCommon.setCookieCddw("");
                                }*/
                            } else {
                                // 11.22 如果未登录就访问公众服务
                                // if (dzswjCommon.getIsGzfwByCookie()) {
                                if (!jcptTools.getIsLogin()) {
                                    litid = $("#top_tab_ul").find("li[id='"+sj_gzfw+"']");//75018 公众服务
                                    curSeg.topLiClick(litid);
                                } else {
                                    //是公众服务 默认打开公众服务
                                    if(dzswjCommon.getIsGzfwByCookie()){
                                        litid = $("#top_tab_ul").find("li[id='"+sj_gzfw+"']");//75018 公众服务
                                        curSeg.topLiClick(litid);
                                    }else{
                                        //地税单管户 默认打开我要办税
                                        if(jcptTools.getIsDsdgh()){
                                            litid = $("#top_tab_ul").find("li[id='"+sj_gzfw+"']");//75019 我要办税 75020 我的信息
                                            curSeg.topLiClick(litid);
                                        }else{
                                            litid = $("#top_tab_ul").find("li[id='"+sj_wdxx+"']");//75019 我要办税 75020 我的信息
                                            curSeg.topLiClick(litid);
                                            curSeg.mhLiDw();
                                        }
                                    }
                                }
                            }
                        } else {
                            // 11.22 如果未登录就访问公众服务
                            // if (dzswjCommon.getIsGzfwByCookie()) {
                            if (!jcptTools.getIsLogin()) {
                                litid = $("#top_tab_ul").find("li[id='"+sj_gzfw+"']");//75018 公众服务
                                curSeg.topLiClick(litid);
                            } else {
                                //地税单管户 默认打开我要办税
                                if(jcptTools.getIsDsdgh()){
                                    litid = $("#top_tab_ul").find("li[id='"+sj_gzfw+"']");//75019 我要办税 75020 我的信息
                                    curSeg.topLiClick(litid);
                                    curSeg.mhLiDw();
                                }else{
                                    litid = $("#top_tab_ul").find("li[id='"+sj_wdxx+"']");//75019 我要办税 75020 我的信息
                                    curSeg.topLiClick(litid);
                                    curSeg.mhLiDw();
                                }
                            }
                        }
                    }
                }]
            });
        },
        //顶部li 的点击事件
        topLiClick: function (litid) {
            litid.mouseenter();
            $(window).scrollTop(0);
        },
        //门户传过来的值 定位
        mhLiDw: function () {
            var tid = dzswjCommon.getCookieCddwByStr("TID");
            if (tid) {
                if ($("#" + tid).offset()) {
                    var toppx = $("#" + tid).offset().top;
                    $(window).scrollTop(toppx);
                }
                //公众服务 未登录状态不清空cookie  登录状态清空cookie
                // dzswjCommon.setCookieCddwID("","","");
                dzswjCommon.clearCookieCddwID();
                /*if (dzswjCommon.getIsGzfwByCookie()) {
                    if (jcptTools.getIsLogin()) {
                        dzswjCommon.setCookieCddw("");
                    }
                } else {
                    dzswjCommon.setCookieCddw("");
                }*/
            }
        },
        getDiv: function (html, obj) {
            var vobj = $(html).length;
            if (vobj >999) {//显示5个
                var strMore = "更多>>";
                if (html.indexOf(strMore) == -1) {
                    html += '<div class="cont_div">' +
                        '<a onclick=dzswjCommon.liClick("' + dzswjCommon.getMainUrl(obj, "1") + '") data-nav="">' +
                        '<img src="img/more_icon.png" alt="" /><br />' +
                        '<span>' + strMore + '</span>' +
                        '</a>' +
                        '</div>';
                }
                return html;
            }
            html += '<div class="cont_div">' +
                '<a onclick=dzswjCommon.liClick("' + dzswjCommon.getMainUrl(obj) + '") data-nav="' + obj['TOP_MKXKMC'] + '">' +
                '<img src="img/' + curSeg.convertIcon(obj) + '.png" alt="" /><br />' +
                '<span>' + obj.MKXK_MC + '</span>' +
                '</a>' +
                '</div>';
            return html;
        },
        topSpanTz:function(url,obj) {
            if(jcptTools.getIsLogin()) {
                dzswjCommon.liClick(url );
            } else {
                if($(obj).text() != '公众服务') {
                    $(".wep_ul li").eq(0).trigger("click");
                    index_gds.showLogin();
                } else {
                    dzswjCommon.liClick(url );
                }
            }
        },
        getTopDiv: function (html, obj) {
            var vobj = $(html).length;
            if (vobj > 4) {//显示5个
                var strMore = "更多>>";
                if (html.indexOf(strMore) == -1) {

                    html += '<span onclick=login_index_yw.topSpanTz(\'' + dzswjCommon.getMainUrl(obj, "1") + '\',this) data-nav="">' +
                        obj.MKXK_MC +
                        '</span>';
                }
                return html;
            }
           /* html += '<a onclick=dzswjCommon.liClick("' + dzswjCommon.getMainUrl(obj) + '") data-nav="' + obj['TOP_MKXKMC'] + '">' +
                '<span>' + obj.MKXK_MC + '</span>' +
                '</a>';*/
           html += '<span onclick=login_index_yw.topSpanTz(\'' + dzswjCommon.getMainUrl(obj, "1") + '\',this) data-nav="' + obj['TOP_MKXKMC'] + '">' +
               obj.MKXK_MC +
               '</span>';
            return html;
        },
        convertIcon: function (obj) {
            if (obj["ICON"]) {
                return obj["ICON"];
            } else {
                return "img1_index";
            }
        },
        //公众服务 的公众查询
        getGzfwGzcxDiv: function (html, obj) {
            var vobj = $(html).length;
            if (vobj > 4) {//显示5个
                var strMore = "......";
                if (html.indexOf(strMore) == -1) {
                    html += '<div class="cont_div">' +
                        '<a onclick=dzswjCommon.liClick("' + dzswjCommon.getMainUrl(obj, "2") + '")>' +
                        '<i class="iconfont icon-xiaotuziCduan_-copy"></i>' +
                        '<span>' + strMore + '</span>' +
                        '</a>' +
                        '</div>';
                }
                return html;
            }
            html += '<div class="cont_div">' +
                '<a onclick=dzswjCommon.liClick("' + dzswjCommon.getMainUrl(obj) + '")>' +
                '<i class="iconfont icon-xiaotuziCduan_-copy"></i>' +
                '<span>' + curSeg.convertGzcxMc(obj) + '</span>' +
                '</a>' +
                '</div>';
            return html;
        },
        //转换公众服务公众查询名称
        convertGzcxMc: function (obj) {
            var mkxkid = obj["MKXKID"];
            if (mkxkid == "75071") { // 发票查询
                return "发票查询"
            } else if (mkxkid == "75062") {
                return "重大税收违法案件信息查询";
            } else if (mkxkid == "75063") {
                return "信用等级A类纳税人查询";
            } else if (mkxkid == "75097") {
                return "欠税公告信息查询";
            } else if (mkxkid == "75088") {
                return "证明信息查询";
            } else if (mkxkid == "77086"){
                return "三方协议查询";
            } else if(mkxkid == "77085"){
                return "跨区域涉税事项报告查询";
            } else if (mkxkid == "75471") { // 个人 发票查询
                return "发票查询"
            } else if (mkxkid == "75462") {
                return "重大税收违法案件信息查询";
            } else if (mkxkid == "75463") {
                return "纳税人信用信息查询";
            } else if (mkxkid == "75497") {
                return "欠税公告信息查询";
            } else if (mkxkid == "75488") {
                return "证明信息查询";
            } else if (mkxkid == "77486"){
                return "三方协议查询";
            } else if(mkxkid == "77485"){
                return "税跨报信息查询";
            } else{
                return "";
            }
        },
        //公众服务 的咨询辅导
        getGzfwZxfdDiv: function (html, obj) {
            var vobj = $(html).length;
            if (vobj > 6) {//显示7个
                var strMore = "......";
                if (html.indexOf(strMore) == -1) {
                    html += '<div class="cont_div">' +
                        '<a onclick=dzswjCommon.liClick("' + dzswjCommon.getMainUrl(obj, "2") + '")>' +
                        '<i class="iconfont icon-xiaotuziCduan_-copy"></i>' +
                        '<span>' + strMore + '</span>' +
                        '</a>' +
                        '</div>';
                }
                return html;
            }
            html += '<div class="cont_div">' +
                '<a onclick=dzswjCommon.liClick("' + dzswjCommon.getMainUrl(obj) + '") data-nav="' + obj['TOP_MKXKMC'] + '">' +
                '<i class="iconfont icon-xiaotuziCduan_-copy"></i>' +
                '<span>' + obj.MKXK_MC + '</span>' +
                '</a>' +
                '</div>';
            return html;
        },

        getGzfwZxfdDivStatic: function () {
            var gzfw = "公众服务";
            var html = "";
            html += '<div class="cont_div">' +
                '<a onclick=dzswjCommon.liClick("/web/dzswj/taxclient/main.html?tid=75018?tid=75018&pid=75040&id=75070") data-nav="' + gzfw + '">' +
                '<i class="iconfont icon-xiaotuziCduan_-copy"></i>' +
                '<span>纳税人学堂</span>' +
                '</a>' +
                '</div>';
            html += '<div class="cont_div">' +
                '<a onclick=dzswjCommon.liClick("/web/dzswj/taxclient/main.html?tid=75018?tid=75018&pid=75040&id=75060") data-nav="' + gzfw + '">' +
                '<i class="iconfont icon-xiaotuziCduan_-copy"></i>' +
                '<span>办税指南</span>' +
                '</a>' +
                '</div>';
            html += '<div class="cont_div">' +
                '<a onclick=dzswjCommon.liClick("/web/dzswj/taxclient/main.html?tid=75018?tid=75018&pid=75040&id=75108") data-nav="' + gzfw + '">' +
                '<i class="iconfont icon-xiaotuziCduan_-copy"></i>' +
                '<span>税收政策及解读</span>' +
                '</a>' +
                '</div>';
            html += '<div class="cont_div">' +
                '<a onclick=dzswjCommon.liClick("/web/dzswj/taxclient/main.html?tid=75018?tid=75018&pid=75040&id=75061") data-nav="' + gzfw + '">' +
                '<i class="iconfont icon-xiaotuziCduan_-copy"></i>' +
                '<span>办税地图</span>' +
                '</a>' +
                '</div>';
            html += '<div class="cont_div">' +
                '<a onclick=dzswjCommon.liClick("/web/dzswj/taxclient/main.html?tid=75018?tid=75018&pid=75040&id=75110") data-nav="' + gzfw + '">' +
                '<i class="iconfont icon-xiaotuziCduan_-copy"></i>' +
                '<span>重点专题</span>' +
                '</a>' +
                '</div>';
            html += '<div class="cont_div">' +
                '<a onclick=dzswjCommon.liClick("/web/dzswj/taxclient/main.html?tid=75018?tid=75018&pid=75040&id=75111") data-nav="' + gzfw + '">' +
                '<i class="iconfont icon-xiaotuziCduan_-copy"></i>' +
                '<span>办税日历</span>' +
                '</a>' +
                '</div>';
            html += '<div class="cont_div">' +
                '<a onclick=dzswjCommon.liClick("/web/dzswj/taxclient/main.html?tid=75018?tid=75018&pid=75040&id=75109") data-nav="' + gzfw + '">' +
                '<i class="iconfont icon-xiaotuziCduan_-copy"></i>' +
                '<span>热点问题</span>' +
                '</a>' +
                '</div>';
            var strMore = "......";
            html += '<div class="cont_div">' +
                '<a onclick=dzswjCommon.liClick("/web/dzswj/taxclient/main.html?tid=75018?tid=75018&pid=75040")>' +
                '<i class="iconfont icon-xiaotuziCduan_-copy"></i>' +
                '<span>' + strMore + '</span>' +
                '</a>' +
                '</div>';
            return html;

        },

        //常用功能静态数据
        getCygnStatic: function(){
            var str = "<li onclick=login_index_yw.liClick(\"/web/dzswj/taxclient/main.html?tid=75019&pid=75019&id=77109\")><span>▪</span>税费申报及缴纳</li>" +
                "<li onclick=login_index_yw.liClick(\"/web/dzswj/taxclient/main.html?tid=75015&pid=75015&id=75021\")><span>▪</span>办税进度</li>";
            return str;
        },


        //套餐业务静态数据
        getTcywStatic: function(){
          var str = "<li onclick=login_index_yw.liClick(\"/web/dzswj/taxclient/main.html?tid=75019&pid=77313&id=75193\")><span>▪</span>新办纳税人套餐</li>" +
              "<li onclick=login_index_yw.liClick(\"/web/dzswj/taxclient/main.html?tid=75019&pid=77313&id=81171\")><span>▪</span>新登记一般纳税人套餐</li>" ;
          return str;
        },


        //特殊业务静态数据
        getTsywStatic: function(){
            var str = "";
            /*baseTools.xhrAjax({
                url: "/server/platform/ptgl/qyyh/selectGnmkTsywWdl.do",
                dataType: 'jsonp',
                async:false,
                callback: [function (data) {
                    if (data.code == 0) {
                        jcptTools.msg(data.msg);
                        return;
                    } else {
                        var dataList = data.list;
                        for (var i = 0; i < dataList.length; i++) {
                            var obj = dataList[i];
                            str += "<li onclick='login_index_yw.liClickNoLogin(\""+ obj["MKXK_URL_PT"]+"\")'><span>▪</span>"+obj["MKXK_MC"]+"</li>";
                        }
                    }
                }]
            });*/
          var str = "<li onclick=login_index_yw.liClick(\"/web/dzswj/taxclient/main.html?tid=75019&pid=75033&id=81041\")><span>▪</span>我为广西做贡献</li>" +
              "<li onclick=login_index_yw.liClick(\"/web/dzswj/taxclient/main.html?tid=75019&pid=75033&id=81042\")><span>▪</span>政府为我减税负</li>" +
              "<li onclick=login_index_yw.liClick(\"/web/dzswj/taxclient/main.html?tid=75019&pid=75033&id=75271\")><span>▪</span>一表集成</li>" +
              "<li onclick='login_index_yw.liClickDWNSRDJ()'><span>▪</span>单位纳税人登记</li>";
          return str;
        },

        // 单位纳税人登记，免登录
        liClickDWNSRDJ: function(){
            var left = 0;
            var top = 0;
            var width = screen.availWidth - 16;
            var height = screen.availHeight - 70;
            var param = "left=" + left + ",top=" + top + ",width=" + width + ",height=" + height;
            param += ",scrollbars,resizable=yes,toolbar=no,location=no, status=no,";
            window.open('http://www.gxgs.gov.cn:9801/taxclient/wssq2/swdj/nsrdj/dwnsrdj_add.html?isView=0&mkxkid=77212',
                '',param);
            return;
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
                    } else if (datas.code == '-3') {
//			    		parent.jcptTools.msg("请登录系统");
                        parent.jcptTools.clearAllCookie();
                        parent.jcptTools.gotoLogin();
                        return false;
                    } else {
                        if (datas && datas.list) {
                            cygnList = datas.list;
                            var cygnHtml = "";
                            var datalist = datas.list;
                            for (var i = 0; i < datalist.length; i++) {
                                var obj = datalist[i];
                                // cygnHtml += '<li><span>▪</span>' + obj.MKXK_MC + '</li>';
                                if(i<4){
                                    cygnHtml = curSeg.getLeftLiHtml(cygnHtml, obj);
                                }
                            }
                            //11.25号15.27 提出需求收藏少于四行时不再补空行
                            /*if(datalist.length<4){
                                for (var j = 0; j < 4 - datalist.length; j++) {
                                    cygnHtml = curSeg.getLeftLiHtmlNull(cygnHtml);
                                }
                            }*/
                            $("#cygn_ul").html(cygnHtml);
                        }
                    }
                }]
            });
        },

        //追加左边 li的html
        getLeftLiHtml: function (html, obj) {
            html += '<li onclick=dzswjCommon.liClick("' + dzswjCommon.getMainUrl(obj) + '") title="'+ obj.MKXK_MC +'"><span>▪</span>' + obj.MKXK_MC + '</li>';

            return html;
        },

        //查询数据
        onQueryDbsx: function () {
            var DJXH = baseTools.getUserDataByKey("DJXH");
            baseTools.xhrAjax({
                url: "/server/platform/dbsy/selectPT_DBSY_DBLX.do",
                params: {
                    "DJXH": DJXH,
                    "DBLX": "1",
                    "NUM": 5
                },
                callback: [function (jsonObj) {
                    switch (parseInt(jsonObj.code)) {
                        // 查询操作返回标志
                        case 0:
                            if (jsonObj.data) {
                                curSeg.fillWDDB(jsonObj.data, 0)
                            }
                            break;
                        case -3:// cookie 失效请重新登录
                            break;
                        default:
                            alert(jsonObj.msg);
                            break;
                    }
                }]
            });
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
        },

        fillWDDB: function (list, dbStart) {
            $('#wddb').DataTable({
                "data": list,
                "columnDefs": [{
                    "targets": 3,
                    "data": null,
                    "render": function (data, type, full, meta) {
                        return '<a href="javascript:;"><span class="table_btn">查看</span></a>'
                    }
                }],
                "columns": [
                    {"data": "SXMC"},
                    {"data": "SXRQ"},
                    {"data": "CLJGMC"}
                ],
                "paging": false,
                "ordering": false,
                "info": false,
                "lengthChange": false,
                "searching": false,
                "fnInitComplete": function (oSettings, json) { /*判断认证状态显示字体颜色*/
                    for (var i = 0; i < $('#wddb tbody tr').length; i++) {
                        $('#wddb tbody tr').eq(i).find('td').eq(2).css("color", '#ff0000');
                        $('#wddb tbody tr').eq(i).find('td').eq(1).css("color", '#666');
                    }
                }
            });
        },

        /*表格数据交互*/
        gzfwTableData: function () {
            var data = [{
                "name": "关于网上办税系统维护的通知",
                "date": "2018-09-15"
            },
                {
                    "name": "广西壮族自治区地方税务局关于取消十六项涉税证明的公告",
                    "date": "2018-08-13"
                },
                {
                    "name": "国家税务总局广西壮族自治区税务局关于农产品收购业务增值税发票使用有关问题的公告",
                    "date": "2018-07-28"
                },
                {
                    "name": "国家税务总局广西壮族自治区税务局关于发布涉企软件清单的通告",
                    "date": "2018-07-20"
                },
                {
                    "name": "国家税务总局广西壮族自治区税务局关于互联网物流平台企业代开增值税专用发票有关事项的公告",
                    "date": "2018-06-15"
                }
            ];
            $('#tzgg').DataTable({
                "data": data,
                "columns": [{
                    "data": "name"
                },
                    {
                        "data": "date"
                    }
                ],
                "paging": false,
                "ordering": false,
                "info": false,
                "lengthChange": false,
                "searching": false,
                "fnInitComplete": function (oSettings, json) { /*判断认证状态显示字体颜色*/
                    $('#tzgg').find('thead').hide();
                }
            });
        }

        /*onLoginOut: function () {
            loginOut();
        }*/


    }
})();