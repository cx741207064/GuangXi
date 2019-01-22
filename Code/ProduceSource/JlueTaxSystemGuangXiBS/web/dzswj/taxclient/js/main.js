var dbObj = null,
    msgObj = null,
    jbxxObj = null; //消息代办、首页更多、基本信息

$(document).ready(function () {
    setTimeout(function () {
        var content_h = $(window).height() - $(".g_hd").height() - 4;
        $("#main_iframe").css("height", content_h + "px");
        $(".g_main ").css("height", content_h + "px");

    }, 100)

    main.onload();
});

var main = (function () {
    var drag_win_id = "main";
    var sjly = "平台";
    var cxxx = "";
    var shxydm = "";
    var gnmk_mc = ""; //取的是yw_dm，在线客服传递参数使用
    var gnmk_dm = ""; //取得是ywmc，在线客服传递参数使用
    var curSeg; //当前对象
    var gzfwMenuList = []; //公众服务菜单集合


    //判断是不是壳子，是否显示最小化和关闭



    var init = function () {

        $(window).resize(function () {
            main.windowResize();
        });
        layui.use('form', function () {
            var form = layui.form;
        });

        //头部 切换样式
        $(".wxl_top_info_box").show();
        var content_h = $(window).height() - $(".g_hd").height() - 4;
        $("#main_iframe").css("height", content_h + "px");

        if (typeof external.Run_Fwzs != "undefined") {
            $('.header_right').css("margin-top", "20px");
        } else {
            $('.mainKZ').hide();
        }
        var dq_yhsf = jcptTools.getUserDataByKey("DQ_YHSF");
        var p_id = "";
        var url;
        if (dq_yhsf == "ZRR") {
            url = jcptTools.cnf.contextPath + '/dzswj/taxclient/main_zrr.html';
        } else if (dq_yhsf == "QY" || dq_yhsf == "GLY" || dq_yhsf == "GLY_PT" || dq_yhsf == "BSR") {
            url = jcptTools.cnf.contextPath + '/dzswj/taxclient/main.html';
        } else if(dq_yhsf == "BYH"){
            url = jcptTools.cnf.contextPath + '/dzswj/taxclient/main.html';
        }


        // 判断是否登录，是的话判断cookie如果是第一次登录，就弹出引导页面
        if (jcptTools.getIsLogin()) {
            if (jcptTools.getCookie('isGuid')) {
                if (jcptTools.getCookie('isGuid')['main']) {} else {
                    var dq_yhsf = jcptTools.getUserDataByKey("DQ_YHSF");
                    if (dq_yhsf != "BYH") {
                        jcptTools.setGuidCookie('isGuid', {
                            index: true,
                            main: true
                        });
                        // $('.cover').show();
                        // $('.guidPage').show();
                    }
                }
            } else {
                var dq_yhsf = jcptTools.getUserDataByKey("DQ_YHSF");
                if (dq_yhsf != "BYH") {
                    jcptTools.setGuidCookie('isGuid', {
                        index: true,
                        main: true
                    });
                    // $('.cover').show();
                    // $('.guidPage').show();
                }
            }
        }

    };
    return {
        onload: function () {
            dbObj = dzswjCommon.getCookieOtherUrl();
            dzswjCommon.setCookieOtherUrl(null);
            curSeg = main;
            init();

            $("#m_top_search").css("display", "block");
            //登录
            if (jcptTools.getIsLogin()) {
                var dq_yhsf = jcptTools.getUserDataByKey("DQ_YHSF");
                if (dq_yhsf != "BYH") {
                    $("#m_hd_portrait").css("display", "block");
                }
                curSeg.initFlcdUrl();
            } else {
                curSeg.initFlcdUrlGzfw();
            }
            //绑定所有事件
            curSeg.bindEvent();
            curSeg.hdRight();


        },

        onMin: function (e) {
            external.MinForm(drag_win_id);
        },

        onClose: function (e) {
            if (confirm("确定关闭当前窗口吗?")) {
                external.CloseForm(drag_win_id);
            }
        },

        onMax: function (e) {
            $('.footer').css('bottom', '0');
            external.MaxForm(drag_win_id);
            if ($(window).width() > 1000) {
                $('.ctrl_max').html('<i class="icon iconfont icon-huanyuan"></i>');
            } else {
                $('.ctrl_max').html('<i class="icon iconfont icon-zuidahua"></i>');

            }
        },
        //绑定所有事件
        bindEvent: function () {
            /*点击搜到的菜单展开菜单栏并定位打开*/
            $("#search_box").on("click", "label", function () {
                curSeg.serarchMenuLiClick($(this), "2");
            });

            $("#titleInput").keyup(function () {
                return false;
                cdss.serarchMenu($(this));
            });
            //右键粘贴复制点击搜索显示下拉框
            $(".m_top_search .u_btn_search").click(function(){
                return false;
                cdss.serarchMenu($("#titleInput"));
            })
            //聚焦显示下拉内容
            $("#titleInput").focus(function (e) {
                $("#search_box").show();
                $(this).css('color', '#666');
                $(this).parent().css('background', 'url(img/search_bg_focus.png) 0 0 no-repeat');
                $(this).next().find('i').css('color', '#1092E8');
            });
            //离焦隐藏下拉内容
            $("#titleInput").blur(function (e) {
                $(this).css('color', '#fff');
                $(this).parent().css('background', 'url(img/search_bg.png) 0 0 no-repeat');
                $(this).next().find('i').css('color', '#fff');

                setTimeout(function () {
                    $("#search_box").hide();
                }, 200)
            });
            //头部五大中心点击事件
            $(".m_nav").on('click', 'li', function () {
                curSeg.hdTab($(this));
            });
        },

        //main页面 查询出来的li 点击跳转方法 tbb 2018年10月27日20:34:41
        serarchMenuLiClick: function ($obj, type) {
            $("#search_box").empty();
            $("#titleInput").val("");
            var url = $obj.attr('data-url');
            $("#search_box").hide();
            dzswjCommon.setCookieCddwID(baseTools.getUrlQueryStringByUrl(url, "tid"), baseTools.getUrlQueryStringByUrl(url, "pid"), baseTools.getUrlQueryStringByUrl(url, "id"));
            var tid = baseTools.getUrlQueryStringByUrl(url, "tid");
            $("#m_nav_ul").find("li[id='" + tid + "']").click();
        },

        hdTab: function ($obj) {
            // var n = $(this).index();
            var a_url = $obj.find("a").attr("data-url");
            var a_name = $obj.find("a").attr("data_name");
            if(a_name == "exit"){
                return ;
            }
            $obj.find("a").addClass("j_active");
            $obj.siblings("li").find("a").removeClass("j_active");
            //以下方法为了跳转到下个页面默认打开
            var tid = dzswjCommon.getCookieCddwByStr("TID");
            if (!tid) {
                dzswjCommon.setCookieCddwID(a_name, "", "");
            }
            var gzfw = jcptTools.getMainGzfw();
            var curUrl = window.location.href;
            if (a_name == "75018" || a_name == "75008") { //企业 公众服务  个人公众服务
                //不是公众服务页面 跳转到公众服务页面
                if (curUrl.indexOf(gzfw) == -1) {
                    window.location.href = jcptTools.getGzfwUrl();
                    window.event.returnValue = false;
                    return;
                }
            } else {
                //是公众服务 将要跳转至main页面
                if (curUrl.indexOf(gzfw) != -1) {
                    var dq_yhsf = jcptTools.getUserDataByKey("DQ_YHSF");
                    var url;
                    if (dq_yhsf == "ZRR") {
                        url = jcptTools.cnf.contextPath + '/dzswj/taxclient/main_zrr.html';
                    } else if (dq_yhsf == "QY" || dq_yhsf == "GLY" || dq_yhsf == "GLY_PT" || dq_yhsf == "BSR") {
                        url = jcptTools.cnf.contextPath + '/dzswj/taxclient/main.html';
                    } else if (dq_yhsf == "BYH") {
                        url = jcptTools.cnf.contextPath + '/dzswj/taxclient/main.html';
                    }
                    // var url ="http://" + window.location.host + url;
                    window.location.href = jcptTools.getHttpsByUrl(url);
                    window.event.returnValue = false;
                    return;
                }
            }
            $("#main_iframe").attr("src", a_url);
            $(".wxl_top_info_box").show();
            // $(".g_hd").css("height", "90px");
            var content_h = $(window).height() - $(".g_hd").height() - 4;
            $("#main_iframe").css("height", content_h + "px");
        },
        /*头部右侧鼠标经过显示*/
        hdRight: function () {
            var timer = null;
            $(".m_icons_link>ul>li").hover(function () {
                $(this).siblings().find("div").hide();
                clearTimeout(timer);
                $(this).find("div").show();
                $(this).find("div").find('select').mouseleave(function () {
                    return false;
                });
            }, function () {
                var that = this;
                timer = setTimeout(function () {
                    $(that).find("div").hide()
                }, 300)
            });
        },
        /*页面放大缩小事件*/
        windowResize: function () {
            var content_h = $(window).height() - $(".g_hd").height() - 4;
            $("#main_iframe").css("height", content_h + "px");
            $(".g_main ").css("height", content_h + "px");
            $('.guidPage').css("width", 2 * ($('.m_nav').width()) + 'px');
        },
        //弹出显示
        onShow: function () {
            curSeg.onload();
        },

        //给申报提供方法
        setCxxx: function (sbCxxx) {
            cxxx = sbCxxx;
        },
        onZxkf: function (msg, id) { //打开在线客服

            nsrsbh = jcptTools.getUserDataByKey("NSRSBH");
            shxydm = jcptTools.getUserDataByKey("SHXYDM");
            nsrmc = jcptTools.getUserDataByKey("NSRMC");
            msg = nsrmc + "(" + nsrsbh + ")" + "咨询在线客服";
            var a = $.base64('encode', encodeURI(sjly));
            var b = $.base64('encode', encodeURI(nsrsbh));
            var c = $.base64('encode', encodeURI(gnmk_mc));
            var d = $.base64('encode', encodeURI(cxxx));
            var e = $.base64('encode', encodeURI(shxydm));
            //获得窗口的垂直位置
            var iTop = (window.screen.availHeight - 30 - 620) / 2;
            //获得窗口的水平位置
            var iLeft = (window.screen.availWidth - 10 - 900) / 2;
            //判断时调用客户端版本的还是调用网页版本
            if (typeof external.Run_Fwzs != "undefined") {
                var dz = "sjly=" + a + "&nsrsbh=" + b + "&gnmk=" + c + "&cxxx=" + d;
                external.Run_Fwzs(dz);
            } else {
                var zxkfUrl = "http://218.28.172.26:20005/znkf-qgb/index2.jsp?swjgdm=14500";
                // var zxkfUrl = "http://218.28.172.26:20002/znkf/?sjly=" + a + "&nsrsbh=" + b + "," + e + "&gnmk=" + c + "&cxxx=" + d;
                window.open(zxkfUrl, '', 'height=650,innerHeight=620,width=1020,innerWidth=950,top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=yes,titlebar=no');
            }
        },
        showMsg: function () {
            var sxlx = '2';
            baseTools.xhrAjax({
                url: '/server/main/getMsgNum.do',
                bShow: false,
                params: {
                    SXLX: '2',
                    CUR_USERID: "-1"
                },
                callback: [function (jsonObj, xhrArgs) {
                    switch (jsonObj.code) {
                        case "1":
                            //我的代办
                            $("#wddb_lbl").html(datas.data.WDDB);
                            //我的消息
                            $("#wdxx_lbl").html(datas.data.WDXX);
                            //风险预警
                            $("#fxyj_lbl").html(datas.data.YJFX);
                            break;
                        case "-3":
                            alert(jsonObj.msg);
                            window.location = 'login.html';
                            break;
                    }
                }]
            });
        },




        //初始化分类菜单Url
        initFlcdUrl: function () {
            var loadMkid = dzswjCommon.getCookieCddwByStr("TID");
            var dq_yhsf = jcptTools.getUserDataByKey("DQ_YHSF");
            var p_id = "";
            //ZRR:自然人 | QY:企业 | GLY:管理员 | GLY_PT:普通管理员 | BSR:办税人
            if (dq_yhsf == "ZRR") {
                p_id = "75001";
                if (!loadMkid) {
                    loadMkid = "75009"; //默认打开我要办税
                }
            } else if (dq_yhsf == "QY" || dq_yhsf == "GLY" || dq_yhsf == "GLY_PT" || dq_yhsf == "BSR") {
                p_id = "75002";
                if (!loadMkid) {
                    loadMkid = "75019"; //默认打开我要办税
                }
                //调用申报服务设置session cookie
                hlwsbUtils.getRjbbUrl("2");
            } else if (dq_yhsf == "BYH") {
                p_id = "75002";
                if (!loadMkid) {
                    loadMkid = "75019"; //默认打开我要办税
                }
            } else {
                jcptTools.msg("没有获取到当前用户身份，请重新登录");
                return;
            }
            baseTools.xhrAjax({
                url: '/server/platform/userInfo/initUrl.do',
                bShow: false,
                dataType: 'jsonp',
                params: {
                    ID: p_id
                },
                callback: [function (jsonObj, xhrArgs) {
                    var $li = $(".m_nav li").find("a");
                    switch (parseInt(jsonObj.code)) {
                        // 查询操作返回标志
                        case 1: // 开户成功
                            var data = jsonObj.data;
                            var html = '';
                            for (var i = 0; i < data.length; i++) {
                                //0 企业；1 自然人
                                var obj = data[i];
                                if(obj["SJ_MKXKID"] == "75001" || obj["SJ_MKXKID"] == "75002"){
                                    html += '<li id="' + obj["MKXKID"] + '">' +
                                        '<a href="javascript:void(0)" data-url="' + obj["MKXK_URL"] + '" data_name="' + obj["MKXKID"] + '">' +
                                        '<i class="icon iconfont ' + obj["ICON"] + '"></i>' +
                                        '<span>' + obj["MKXK_MC"] + '</span>' +
                                        '</a>' +
                                        '</li>';
                                }
                            }
                            html += '<li><a href="javascript:void(0)" onclick="return false;dzswjCommon.dzswjLoginOut(3);" data_name = "exit"><i class="icon iconfont icon-exit"></i><span>退出登录</span></a></li>'
                            $("#m_nav_ul").html(html);
                            var litid = $("#m_nav_ul").find("li[id='" + loadMkid + "']");
                            var len = litid.length;
                            if (len) {
                                litid.click();
                            } else {
                                $("#m_nav_ul").find("li").eq(0).click(); //75019 我要办税
                            }
                            $('.guidPage').css("width", 2 * ($('.m_nav').width()) + 'px');
                            break;
                        case -2:
                            alert(jsonObj.msg);
                            break;
                        case -3: // session 失效请重新登录
                            break;
                        default:
                            alert(jsonObj.msg);
                    }
                }]
            });
        },

        //初始化分类菜单Url
        initFlcdUrlGzfw: function () {
            var tid = dzswjCommon.getCookieCddwByStr("TID");
            var loadMkid;
            var url = "";
            var p_id = "";
            //11.19 增加 || true   tbb 通知公告 不在进行拦截
            if (dzswjCommon.getIsGzfwByCookie() || true) { //id_tzgg:通知公告 75018:公众服务
                url = "/server/platform/ptgl/qyyh/selectGnmkByGzfw.do";
                p_id = "75018";
                loadMkid = p_id;
            } else {
                alert("cookie失效，请重新登录");
                jcptTools.gotoLogin(1);
                return;
            }
            baseTools.xhrAjax({
                url: url,
                bShow: false,
                dataType: 'jsonp',
                params: {
                    PID: p_id
                },
                callback: [function (jsonObj, xhrArgs) {
                    var $li = $(".m_nav li").find("a");
                    switch (parseInt(jsonObj.code)) {
                        // 查询操作返回标志
                        case 1:
                            var data = jsonObj.list;
                            cdss.setGzfwMenu(data); //缓存菜单搜索时使用
                            gzfwMenuList = data;
                            var html = '';
                            for (var i = 0; i < data.length; i++) {
                                //0 企业；1 自然人
                                var obj = data[i];
                                if (obj["MKXKID"] == loadMkid) {
                                    html += '<li id="' + obj["MKXKID"] + '">' +
                                        '<a href="javascript:void(0)" data-url="' + obj["MKXK_URL"] + '" data_gzfw="true" data_name="' + obj["MKXKID"] + '">' +
                                        '<i class="icon iconfont ' + obj["ICON"] + '"></i>' +
                                        '<span>' + obj["MKXK_MC"] + '</span>' +
                                        '</a>' +
                                        '</li>';
                                }
                            }
                            $("#m_nav_ul").html(html);
                            var litid = $("#m_nav_ul").find("li[id='" + loadMkid + "']");
                            var len = litid.length;
                            if (len) {
                                litid.click();
                            } else {
                                $("#m_nav_ul").find("li").eq(0).click(); //75019 我要办税
                            }

                            //加载引导图层长度

                            break;
                        case 0:
                            alert(jsonObj.msg);
                            break;
                        case -3: // session 失效请重新登录
                            break;
                        default:
                            alert(jsonObj.msg);
                    }
                }]
            });
        },

        //left2 使用
        getGzfwMenuList: function () {
            return gzfwMenuList;
        },


        //点击切换引导图片
        changeGuidImg: function (obj) {
            var url = $(obj).attr("src");
            switch (url) {
                case "img/main_wdxx.png":
                    $('.guidPage').attr("src", "img/main_wybs.png").css("right", "0");
                    break;
                case "img/main_wybs.png":
                    $('.guidPage').attr("src", "img/main_wycx.png").css("right", "0");
                    break;
                case "img/main_wycx.png":
                    $('.guidPage').attr("src", "img/main_hdzx.png").css("right", "0");
                    break;
                case "img/main_hdzx.png":
                    $('.guidPage').attr("src", "img/main_gzfw.png").css("right", "0");
                    break;
                case "img/main_gzfw.png":
                    $('.cover').hide();
                    $('.guidPage').hide();
                    break;

            }
        },

        //申报保存后回调此方法
        changeNodeStatus: function (sbbzl_dm, status) {
            if (window.frames['main_iframe'] && window.frames['main_iframe'].leftSlider) {
                window.frames['main_iframe'].leftSlider.changeNodeStatus(sbbzl_dm, status);
            }
        },
        //供其他系统调用
        gotoMhLogin: function () {
            if (typeof external.Run_Fwzs != "undefined") {
                jcptTools.clearAllCookie();
                external.CloseForm('11');
            } else {
                jcptTools.clearAllCookie();
                window.location.href = jcptTools.getHttpByUrl(jcptTools.getLogin());
            }
        },

        /***
         * 其他系统打开我要办税下新窗口
         * @param type 类型 1：平台相对路径 2:网厅 3:社保 4互联网申报
         * @param text 标题
         * @param url 路径
         */
        openIframe: function (type, text, url) {
            var rjbb;
            if (type == "2") {
                rjbb = "dzswj.wssq";
            } else if (type == "3") {
                rjbb = "dzswj.sbfjn";
            } else if (type == "4") {
                rjbb = "dzswj.hlwsb";
            }
            var rjbbDz;
            if (rjbb) {
                rjbbDz = jcptTools.getRjbbUrl(rjbb);
            }
            var objIframe = {};
            objIframe["TEXT"] = text;
            objIframe["URL"] = rjbbDz + url;
            dzswjCommon.setCookieIframe(objIframe);
            dzswjCommon.setCookieCddwID("75019");
            window.location.href = jcptTools.getHttpByUrl(jcptTools.getMain());
        },
        //返回技术平台路径 申报调用平台验证码时使用 tbb 2018年11月29日15:07:56
        getJsptDomainUrl: function () {
            return window.location.protocol + "//" + window.location.host;
        }
    }
})();