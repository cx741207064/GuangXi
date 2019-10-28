$(document).ready(function () {
    //判断是否是壳子切换样式
    if (typeof external.CheckPfxCertInIE != "undefined") {
        
        $(".wep_operation div span img").css({
            "width": "100%"
        });
        $('.wep_operation div a img.first_img').css('width', '125%');
        $('.content').css('margin-top', '20px');
        $('.top').css('height', '60%');
        $('.wep_box').css('padding', '0 3%');
        $('.wep_guide a').css('padding-top', '9%');
        $('.detail').css({
            'height': '29%',
            "padding-top": "3.8%"
        });
        $('.wep_guide .iconfont').css('font-size', '35px');
        $('.header_logo span').css('font-size', '25px');
        $('.footer').css('bottom', '31px');
        $('.wep_login img').css("height", "36px");
        $('.wep_login span').css("font-size", "14px");
        $('.wep_loginform').css("top", "115px");
        $('.wep_guide .iconfont').css("padding-top", "0px");
        $('.header_right ').css("margin-top", "20px");
        $('.wep_button .wep_login ').css("top", "65px");


    } else {
        // $(".wep_operation div span img").css('width', '70%');
        $('.top').css('height', '460px');
        $('.footer').css('bottom', '0');
        $('.wrap').css("min-width","1200px");
        // mh.tipcon();
        mh.showElePage1();
    }

    if (typeof external.get_version != "undefined") { //显示版本号
        //        	alert(external.get_version());
        $("#version").html("&nbsp;&nbsp;&nbsp;&nbsp;当前版本号：" + external.get_version());
    }
    mh.onload();
})
var mh = (function () {
    var curSeg;
    var drag_win_id = "main";
    var init = function () {
        layui.use('form', function () {
            var form = layui.form;
            form.render();
        });
        /*飘窗关闭*/
        $(".float_close").click(function(){
            $("#float").hide()
        })

        //判断是不是壳子，是否显示最小化和关闭
        if (typeof external.Run_Fwzs != "undefined") {
            $('.header_right').css("margin-top", "20px");
        } else {
            $('.tright').css("visibility", "hidden");
        }

        //首页帮助
        $("#dzswj_help").click(function () {

            return false;
            if (typeof external.get_version != "undefined") {
                var url = window.location.protocol + "//" + window.location.host + '/web/dzswj/help/index.html';
                external.Open_IE_Url(url);
            } else {
                var winheight = window.screen.availHeight;
                var winwidth = window.screen.availWidth - 10;
                var ileft = 0;
                var itop = 0;
                var param = "location=yes,titlebar=yes,menubar=yes,toolbar=yes,modal=yes,resizable=yes,width=" + winwidth + ",height=" + winheight + ",left=" + ileft + ",top=" + itop;
                window.open("/web/dzswj/help/index.html", "_blank");
            }
        });

        //鼠标悬停显示操作指南二维码
        $(".czzn a").hover(function () {
            $(".erweima").fadeIn(300);
        },function () {
            $(".erweima").fadeOut(300);
        });

        /* if (typeof external.Run_Fwzs != "undefined") {
         } else {
             var hostname = window.location.host;
             hostname = hostname.substring(hostname.indexOf(".")+1);
             var WshShell=null;
             try{
                 WshShell = new ActiveXObject("WScript.Shell");
                 str = WshShell.RegRead("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\ZoneMap\\Domains\\"+hostname+"\\http");
                 //alert(str);
             }catch(e){
                 layui.use('layer', function () {
                     var layer = layui.layer;
                     layer.confirm('<p class="airTest">检测到客户环境未将"' + hostname + '"添加到信任站点，请先下载环境检测工具进行检测并修复！<a class="airTestDown" href="/web/downloads/setupfix.zip" target="_blank">下载</a>环境监测工具</p>', {
                         btn: ['确定'],
                         offset:'200px'
                     })
                 });
             }
         }*/

    };
    return {
        onload: function () {
            init();
            curSeg = mh;
            index_gds.loginMethod();
            curSeg.download();
            curSeg.changeImg('.mh_wddb', 'imgs/mh_wddb_h.png');
            curSeg.changeImg('.mh_wyyy', 'imgs/mh_wyyy_h.png');
            curSeg.changeImg('.mh_gxfw', 'imgs/mh_gxfw_h.png');
            curSeg.changeImg('.mh_tzgg', 'imgs/mh_tzgg_h.png');
            curSeg.changeImg('#id_mh_login_img', 'imgs/mh_login_h.png');
            curSeg.bindEvent();
            curSeg.otherSystemSkip();
            // curSeg.judgeTrust();
            //检测网速
            curSeg.checkNetSpeed();
            //加载通知公告
            gnmkUtils.selectPtTzgg('mh');
            //加载安全证书安装提示
            // mh.alertBox2('#aqzs_tx','600px','200px');

            //通知提醒：1弹出 、0不弹
            // curSeg.alertBox1OnOff(1);
        },

        /*提示框*/
        tipcon: function () {
            layui.use('layer', function () {
                var layer = layui.layer;
                var $ggtc = $("#ggtc");
                // console.log($ggtc);
                layer.open({
                    type: 1,
                    title: "温馨提醒",
                    // anim: 2,
                    shade:0,
                    area: ["950px", "auto"],
                    shadeClose: true, //开启遮罩关闭
                    content: $ggtc
                });
                $ggtc.parents('.layui-layer').css({
                    'border': '#58b8f3 solid 8px'
                })
            });
        },
        //绑定所有事件
        bindEvent: function () {
            curSeg.iconOnClick();
        },


        /*下载弹窗*/
        download: function () {
            $(".wxl_xz").click(function () {
                layui.use('layer', function () {
                    var layer = layui.layer;
                    layer.open({
                        type: 1,
                        skin: 'layui-layer-demo',
                        closeBtn: 1,
                        // anim: 2,
                        title: '下载控件',
                        area: ['850px', '350px'],
                        shadeClose: true,
                        content: $('.wxl_downLoad')
                    });
                });
            })
        },

        closeLayer: function () {
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.closeAll();
            })
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
        run_fixtool_net: function () {
            if (typeof external.run_fixtool_net != 'undefined') {
                external.run_fixtool_net()
            } else {
                if (typeof external.getCurrentDir != "undefined") {
                    external.run_fixtool()
                }
            }
        },

        //个人更换密码
        psLogin: function () {
            jcptTools.OpenModel('/web/dzswj/ythclient/forget_gr_pwd.html');
        },

        //个人注册
        psRegister: function () {
            jcptTools.OpenModel('/web/dzswj/ythclient/register.html');
        },

        //更换背景图
        changeImg: function (name, url) {

            $(name).on("mouseover", function () {
                var lastUrl = $(this).attr("src");
                $(this).attr("src", url);

                $(this).on("mouseout", function () {
                    $(this).attr("src", lastUrl);
                })
            })
        },

        //环境监测判断是否是壳子
        showElePage: function () {
            if (typeof external.run_fixtool != 'undefined') {
                external.run_fixtool();
            } else {
                    mh.exploreElePage();
            }
        },
        //环境监测判断是否是壳子,且如果环境监测符合要求，则不弹出监测结果弹窗，如果环境监测不符合要求，则弹出结果。
        showElePage1: function () {
            var dom = document.URL;
            if(dom.indexOf('https:') == 0){
            if (typeof external.run_fixtool != 'undefined') {
                external.run_fixtool();
            } else {
                if (mh.judgeSys()[1] && mh.judgeExplore()[1] && document.getElementById('Dcellweb1').AllowCopy && window.screen.width >= 1280 ){
                   return;
                }else{
                    mh.exploreElePage();
                }
            }
            }
        },
        //弹出环境监测页面
        exploreElePage: function () {
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    type: 1,
                    title: '电子税务局使用环境检测',
                    shadeClose: true,
                    area: ['1068px', "545px"], //宽高
                    content: $('#m_check_result'),
                    success: function () {
                        var flag = 1;
                        //系统检测
                        $('.sysStatus').find('.f16').html("电脑系统:" + mh.judgeSys()[0]);
                        if (mh.judgeSys()[1]) {
                            mh.showTOE('.sysStatus', 1);
                        } else {
                            mh.showTOE('.sysStatus', 0);
                            flag = 0;
                        }

                        //浏览器检测
                        $(".exploreStatus").find(".f16").html("浏览器（建议使用IE8）:" + mh.judgeExplore()[0]);
                        if (mh.judgeExplore()[1]) {
                            mh.showTOE('.exploreStatus', 1);
                        } else {
                            mh.showTOE('.exploreStatus', 0, "建议使用ie8以上浏览器");
                            flag = 0;
                        }

                        //CA验证
                        // if (document.all.camanger.object != null) {
                        //     $(".caStatus").find(".f16").html("CA控件安装情况:已安装");
                        //     mh.showTOE('.caStatus', 1);
                        // } else {
                        //     $(".caStatus").find(".f16").html("CA控件安装情况:未安装");
                        //     mh.showTOE('.caStatus', 0, "", "ca");
                        //     flag = 0;
                        // }

                        // cell华表检测
                        // if (document.getElementById('Dcellweb1').OpenFile) {
                        //     $(".cellStatus").find(".f16").html("报表控件安装情况:已安装");
                        //     mh.showTOE('.cellStatus', 1);
                        // } else {
                        //     $(".cellStatus").find(".f16").html("报表控件安装情况:未安装");
                        //     mh.showTOE('.cellStatus', 0);
                        // }

                        try {
                            if (document.getElementById('Dcellweb1').AllowCopy) {
                                $(".cellStatus").find(".f16").html("报表控件安装情况:已安装");
                                mh.showTOE('.cellStatus', 1);
                            } else {
                                $(".cellStatus").find(".f16").html("报表控件安装情况:未安装");
                                mh.showTOE('.cellStatus', 0, "", "cell");
                            }
                        } catch (error) {
                            $(".cellStatus").find(".f16").html("报表控件安装情况:未安装");
                            mh.showTOE('.cellStatus', 0, "", "cell");
                        }

                        //分辨率检测

                        $('.fblStatus').find('.f16').html('分辨率检测:  您的分辨率为' + window.screen.width + '×' + window.screen.height);
                        if (window.screen.width >= 1280) {
                            mh.showTOE('.fblStatus', 1);
                        } else {
                            curSeg.showTOE('.fblStatus', 0, "建议使用1280×720及以上分辨率");
                        }


                        //判断网络，电脑系统，浏览器只要有一个不通过，就显示未通过
                        for (var i = 0; i < 5; i++) {
                            var dom = $('.m_check_right li').eq(i);
                            if (dom.find('span').eq(1).html().indexOf("不通过") > -1) {
                                // $('#m_check_result').css("background", "url(imgs/orange.jpg) 70px center no-repeat")
                                $(".check_result_bhg").show();
                                $(".check_result_hg").hide();
                                return;
                            } else {
                                $(".check_result_bhg").hide();
                                $(".check_result_hg").show()
                            }
                        }
                        /*      if (flag == 0) {
                                  /!*layer.confirm("您的环境检测不通过会影响使用，是否强制登录？",
                                      function (index) {
                                          mh.closeLayer();
                                          login_index_yw.showLogin();
                                          layer.close(index);
                                  });*!/

                                  layui.use('layer', function () {
                                      var layer = layui.layer;
                                      layer.open({
                                          type: 1,
                                          closeBtn: false, //不显示关闭按钮
                                          area: '300px',
                                          anim: 4,
                                          icon: 3,
                                          title: '提示信息',
                                          resize: false,
                                          fixed: false,
                                          shade: 0.7,
                                          content: '<div style="padding: 30px;">您的环境检测不通过会影响使用，是否强制登录？</div>',
                                          btn: ['确定', '取消'],
                                          btnAlign: 'c',
                                          yes: function () {
                                              mh.closeLayer();
                                              $('.wep_login').click();
                                          }
                                      });
                                  });
                              }*/
                    }
                });
            });
        },

        //环境监测判断系统
        judgeSys: function () {
            var sUserAgent = navigator.userAgent;
            var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
            var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
            if (isMac) return ["Mac", 0];
            var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
            if (isUnix) return ["Unix", 0];
            var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
            if (isLinux) return ["Linux", 0];
            if (isWin) {
                var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
                if (isWin2K) return ["Win2000", 0];
                var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
                if (isWinXP) return ["WinXP", 1, "建议升级win7以上系统"];
                var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
                if (isWin2003) return ["Win2003", 0];
                var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
                if (isWinVista) return ["WinVista", 0];
                var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
                if (isWin7) return ["Win7", 1];
                var isWin8 = sUserAgent.indexOf("Windows NT 6.2") > -1 || sUserAgent.indexOf("Windows 8") > -1;
                if (isWin8) return ["Win8", 1];
                var isWin81 = sUserAgent.indexOf("Windows NT 6.3") > -1;
                if (isWin81) return ["Win8.1", 1];
                var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1;
                if (isWin10) return ["Win10", 1];

            }
            return "其他系统";
        },

        //浏览器检测
        judgeExplore: function () {
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
            var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
            var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1; //判断是否是IE11浏览器
            var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
            var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
            var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

            if (isIE) {
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp["$1"]);
                if (fIEVersion == 7) {
                    return ["IE7", 0];
                } else if (fIEVersion == 8) {
                    return ["IE8", 1];
                } else if (fIEVersion == 9) {
                    return ["IE9", 1];
                } else if (fIEVersion == 10) {
                    return ["IE10", 1];
                } else {
                    return ["IE浏览器版本过低", 0]
                } //IE版本过低
            } //isIE end

            if (isFF) {
                return ["Firfox", 0];
            }
            if (isIE11) {
                return ["IE11", 1];
            }
            if (isOpera) {
                return ["Opera", 0];
            }
            if (isSafari) {
                return ["Safari", 0];
            }
            if (isChrome) {
                return ["Chrome", 0];
            }
            if (isEdge) {
                return ["Edge", 0];
            }
        },

        //显示通过或失败
        showTOE: function (name, type, message, download) {
            if (type) {
                $(name).find('span').eq(1).removeClass().addClass("c_pass");
                if (message) {
                    $(name).find('span').eq(1).html('通过   ' + "  " + message);
                } else {
                    $(name).find('span').eq(1).html('通过');
                }
                $(name).find('i').removeClass("icon-zuowu_tanhao").removeClass("c_nopass").addClass("icon-chenggong").addClass("c_pass");
            } else {
                $(name).find('span').eq(1).removeClass().addClass("c_nopass");
                if (message) {
                    $(name).find('span').eq(1).html('不通过' + '   ' + message);
                } else {
                    $(name).find('span').eq(1).html('不通过');
                }
                if (download) {
                    if (download == "cell") {
                        $(name).find('span').eq(1).html('不通过 ');
                    }
                }
                $(name).find('i').removeClass("icon-chenggong").removeClass("c_pass").addClass("icon-zuowu_tanhao").addClass("c_nopass");
            }
        },

        //其他系统跳转本页面
        otherSystemSkip: function () {
            var i = baseTools.getUrlQueryString("i");
            if (i) {
                if (i == "01") { //登录弹出登录框01
                    index_gds.showLogin();
                } else if (i == "02") { //我要预约02
                    // dzswjCommon.mhLiClick('75017', '3')
                    dzswjCommon.setCookieCddwID("75017", "75038", "");
                    //未登录
                    if (!jcptTools.getIsLogin()) {
                        window.index_gds.showLogin();
                        return;
                    }else{
                        jcptTools.changePWD(jcptTools.getMain());
                    }
                } else if (i == "03") { //我的待办03
                    // dzswjCommon.mhLiClick('id_wddb', '3')
                    dzswjCommon.setCookieCddwID("75017", "75037", "75073");
                    if (!jcptTools.getIsLogin()) {
                        window.index_gds.showLogin();
                        return;
                    }else{
                        jcptTools.changePWD(jcptTools.getMain());
                    }
                } else if (i == "04") { //个性服务04
                    // dzswjCommon.mhLiClick('75019', '3')
                    dzswjCommon.setCookieCddwID("75019", "75016", "");
                    //未登录
                    if (!jcptTools.getIsLogin()) {
                        window.index_gds.showLogin();
                        return;
                    }else{
                        jcptTools.changePWD(jcptTools.getMain());
                    }
                } else if (i == "05") { //通知公告05
                    dzswjCommon.mhLiClick('id_tzgg', '3')
                } else if (i == "06") { //我的消息06
                    dzswjCommon.mhLiClick('75020', '3')
                } else if (i == "07") { //我要办税07
                    dzswjCommon.mhLiClick('75019', '3')
                } else if (i == "08") { //我要查询08
                    dzswjCommon.mhLiClick('75015', '3')
                } else if (i == "09") { //互动中心09
                    dzswjCommon.mhLiClick('75017', '3')
                } else if (i == "10") { //公众服务10
                    dzswjCommon.mhLiClick('75018', '3')
                } else if (i == "11") { //打开main页面 公众查询
                    var url = jcptTools.getGzfwUrl();
                    url += '?tid=75018';
                    url += '&pid=75041';
                    dzswjCommon.liClick(url, '1');
                } else if (i == "12") { //打开main页面 通知公告
                    if (jcptTools.getIsZrr()) {
                        var url = jcptTools.getGzfwUrl();
                        url += '?tid=75008';
                        url += '&pid=75442';
                        url += '&id=77447';
                        dzswjCommon.liClick(url, '1');
                    } else {
                        var url = jcptTools.getGzfwUrl();
                        url += '?tid=75018';
                        url += '&pid=75042';
                        url += '&id=77077';
                        dzswjCommon.liClick(url, '1');
                    }
                } else if (i == "51"){ //广西在当前页面打开公众服务
                    if (jcptTools.getIsZrr()) {
                        dzswjCommon.setCookieCddwID("75008","75440","75477");
                        jcptTools.changePWD(jcptTools.getMainGzfw());
                    }
                    else {
                        dzswjCommon.setCookieCddwID("75018","75040","75077");
                        jcptTools.changePWD(jcptTools.getMainGzfw());
                    }

                    /*var obj = {};
                    obj["CS!"]="a";
                    obj["CS2"]="b";
                    dzswjCommon.setCookieCommonUrl("GZFW_CS",obj);
                    dzswjCommon.setCookieCddwID("75019", "75042", "77077");
                    window.location.href=jcptTools.getGzfwUrl();*/
                } else if(i == "81174"){//注销税务登记申请（优化版）
                    var url = jcptTools.getMain();
                    url += '?tid=75019';
                    url += '&pid=81002';
                    url += '&id=81174';
                    dzswjCommon.liClick(url, '2');
                }
            }
        },
        //cookie中企业id装换位个人id
        qyidConvertGrid: function(){
            var pid = dzswjCommon.getCookieCddwByStr("PID");
            if(pid == "75037"){//我的待办
                //修改pid 需修改两个地方
                dzswjCommon.setCookieCddwID("75007", "75260", "75276");
            }else if(pid == "75038"){//我要预约
                //修改pid 需修改两个地方
                dzswjCommon.setCookieCddwID("75007", "75261", "");
            }else if(pid == "75016"){//个性服务
                //修改pid 需修改两个地方
                dzswjCommon.setCookieCddwID("75009", "10001", "");
            }else if(pid == "75042"){//通知公告

            }else {
                var tid = dzswjCommon.getCookieCddwByStr("TID");
                if(tid == "75020"){//我的信息
                    dzswjCommon.setCookieCddwID("75010");
                }else if(tid == "75019"){//我要办税
                    dzswjCommon.setCookieCddwID("75009");
                }else if(tid == "75015"){//我要查询
                    dzswjCommon.setCookieCddwID("75005");
                }else if(tid == "75017"){//互动中心
                    dzswjCommon.setCookieCddwID("75007");
                }else if(tid == "id_tzgg"){//通知公告
                    // dzswjCommon.setCookieCddwID("");
                }
            }
        },
        //门户十个中心图标点击事件
        iconOnClick: function () {
            if (jcptTools.getIsZrr()) {
                $("#id_a_mh_wddb").on("click", function () {
                    // dzswjCommon.mhLiClick('id_wddb', '3');
                    //修改pid 需修改两个地方
                    dzswjCommon.setCookieCddwID("75007", "75260", "75276");
                    //未登录
                    if (!jcptTools.getIsLogin()) {
                        window.index_gds.showLogin();
                        return;
                    }else{
                        jcptTools.changePWD(jcptTools.getMainZrr());
                    }
                });
                $("#id_a_mh_wyyy").on("click", function () {
                    // dzswjCommon.mhLiClick('75007', '3');
                    //修改pid 需修改两个地方
                    dzswjCommon.setCookieCddwID("75007", "75261", "");
                    //未登录
                    if (!jcptTools.getIsLogin()) {
                        window.index_gds.showLogin();
                        return;
                    }else{
                        jcptTools.changePWD(jcptTools.getMainZrr());
                    }
                });
                $("#id_a_mh_gxfw").on("click", function () {
                    // dzswjCommon.mhLiClick('75009', '3');
                    //修改pid 需修改两个地方
                    dzswjCommon.setCookieCddwID("75009", "10001", "");
                    //未登录
                    if (!jcptTools.getIsLogin()) {
                        window.index_gds.showLogin();
                        return;
                    }else{
                        jcptTools.changePWD(jcptTools.getLoginIndex());
                    }
                });
                $("#id_a_mh_tzgg").on("click", function () {
                    // var url = jcptTools.getGzfwUrl();
                    // dzswjCommon.setCookieCddwID('75008', '75442', '77447');
                    // window.open(url, '', 'width=' + (window.screen.availWidth) + ',height=' + (window.screen.availHeight - 50) + ',top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no, fullscreen=no');
                    dzswjCommon.setCookieCddwID('75008', '75442', '77447');
                    jcptTools.changePWD(jcptTools.getMainGzfw());
                });
                //
                $("#id_a_mh_wdxx").on("click", function () {
                    dzswjCommon.mhLiClick('75010', '3');
                });
                $("#id_a_mh_wybs").on("click", function () {
                    dzswjCommon.mhLiClick('75009', '3');
                });
                $("#id_a_mh_wycx").on("click", function () {
                    dzswjCommon.mhLiClick('75005', '3');
                });
                $("#id_a_mh_hdzx").on("click", function () {
                    dzswjCommon.mhLiClick('75007', '3');
                });
                $("#id_a_mh_gzfw").on("click", function () {
                    dzswjCommon.mhLiClick('id_tzgg', '3');
                });
            } else {
                $("#id_a_mh_wddb").on("click", function () {
                    // dzswjCommon.mhLiClick('id_wddb', '3');
                    //修改pid 需修改两个地方
                    dzswjCommon.setCookieCddwID("75017", "75037", "75073");
                    //未登录
                    if (!jcptTools.getIsLogin()) {
                        window.index_gds.showLogin();
                        return;
                    }else{
                        jcptTools.changePWD(jcptTools.getMain());
                    }
                });
                $("#id_a_mh_wyyy").on("click", function () {
                    // dzswjCommon.mhLiClick('75017', '3');
                    //修改pid 需修改两个地方
                    dzswjCommon.setCookieCddwID("75017", "75038", "");
                    //未登录
                    if (!jcptTools.getIsLogin()) {
                        window.index_gds.showLogin();
                        return;
                    }else{
                        jcptTools.changePWD(jcptTools.getMain());
                    }
                });
                $("#id_a_mh_gxfw").on("click", function () {
                    // dzswjCommon.mhLiClick('75019', '3');
                    //修改pid 需修改两个地方
                    dzswjCommon.setCookieCddwID("75019", "75016", "75016");
                    //未登录
                    if (!jcptTools.getIsLogin()) {
                        window.index_gds.showLogin();
                        return;
                    }else{
                        jcptTools.changePWD(jcptTools.getMain());
                    }
                });
                $("#id_a_mh_tzgg").on("click", function () {
                    dzswjCommon.setCookieCddwID('75018', '75042', '77077');
                    jcptTools.changePWD(jcptTools.getMainGzfw());
                    // var url = jcptTools.getGzfwUrl();
                    // window.open(url, '', 'width=' + (window.screen.availWidth) + ',height=' + (window.screen.availHeight - 50) + ',top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no, fullscreen=no');
                });
                //
                $("#id_a_mh_wdxx").on("click", function () {
                    dzswjCommon.mhLiClick('75020', '3');
                });
                $("#id_a_mh_wybs").on("click", function () {
                    dzswjCommon.mhLiClick('75019', '3');
                });
                $("#id_a_mh_wycx").on("click", function () {
                    dzswjCommon.mhLiClick('75015', '3');
                });
                $("#id_a_mh_hdzx").on("click", function () {
                    dzswjCommon.mhLiClick('75017', '3');
                });
                $("#id_a_mh_gzfw").on("click", function () {
                    dzswjCommon.mhLiClick('id_tzgg', '3');
                });
            }
        },
        gotoDownload: function () {
            dzswjCommon.setCookieCddwGzfw("WDL");
            dzswjCommon.setCookieCommonUrl("MH_DOW", "Y"); //门户下载

            if (typeof external.CheckPfxCertInIE != "undefined") {
                var url = window.location.protocol + "//" + window.location.host + '/web/dzswj/taxclient/main.html';
                if (jcptTools.getIsZrr()) {
                    dzswjCommon.setCookieCddwID('75008', '75442', '77447');
                } else {
                    dzswjCommon.setCookieCddwID('75018', '75040', '75077');
                }
                external.OpenModel(url, "0", "max", "11");
            } else {
                dzswjCommon.liClick('/web/dzswj/taxclient/main.html?tid=75018&pid=75040&id=75077', '1')

            }
        },
        /*通知提醒*/
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
                        $(layero.selector).addClass('wdl_layui-layer1');
                        // $(layero.selector).find('.layui-layer-content').css('overflow','auto !important');
                    }
                });
    		});
     	},

        //安装安全证书提醒
        alertBox2:function(dom,width,height){
            layui.use('layer', function(){
                var layer = layui.layer;
                // layer.open({
                //     closeBtn:1,
                //     title:"通知",
                //     type: 1,
                //     area: [width, height],
                //     // offset:'rb',
                //     shade:0,
                //     // closeBtn:1,
                //     zIndex:19891012,
                //     // btn:['关闭'],
                //     content: $(dom),//这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
                //     success:function (layero,index){
                //         $(layero.selector).addClass('wdl_layui-layer');
                //         $(layero.selector).addClass('wdl_layui-layer1');
                //     }
                // });
                var $ggtc = $("#aqzs_tx");
                // console.log($ggtc);
                layer.open({
                    type: 1,
                    title: "温馨提醒",
                    // anim: 2,
                    shade:0,
                    area: ["950px", "auto"],
                    shadeClose: true, //开启遮罩关闭
                    content: $ggtc
                });
                $ggtc.parents('.layui-layer').css({
                    'border': '#58b8f3 solid 8px'
                })
            });
        },
        alertBox1OnOff:function (sign) {
            if(sign==1){
                curSeg.alertBox1('#wdl_tx','320px','200px');
            // }else{
            //     alert(false);
            }
        },
        // 只关闭当前layer
        closeLayer1:function (index) {
            // mh.closeLayer();
            // login_index_yw.showLogin();
            layer.close(index);
        },

        checkNetSpeed:function () {
            var total = 0;
            var lastTotal = 0;
            var seconds = 0;
            var netTime = setInterval(function () {
                    var netSize = total-lastTotal;
                    if(netSize >75){
                        $("#netspeed").text("稳定性良好");
                    }else if(netSize<=75 && netSize>50){
                        $("#netspeed").text("稳定性良好");
                    }else{
                        $("#netspeed").text("稳定性较差");
                    }
                    // if (parseInt(total - lastTotal).toString().length > 4) {
                    //     $("#speed").text('速度:' + ((total - lastTotal) / 1024).toFixed(2) + "m/s");
                    // } else {
                    //     $("#speed").text('速度:' + parseInt(total - lastTotal) + "k/s");
                    // }
                    seconds = seconds + 1;
                    lastTotal = total;

                }
                , 1000);

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange =function(){
                if(xhr.readyState==3){
                    total=xhr.responseText.length/1024;
                    //text.text("已下载大小:"+(total=xhr.responseText.length/1024)+"k");
                    //alert(total)
                }else if(xhr.readyState==4){
                    // text.text("已下载大小:"+(total=xhr.responseText.length/1024)+"k");
                    //alert(xhr.responseText)
                    //alert(total)
                    total=xhr.responseText.length/1024;
                }

            }
            xhr.onload = function (e) {
                if (this.status == 200) {
                    var speed = 0;
                    if (seconds > 0) {
                        speed=(total/seconds).toFixed(2);
                        if(speed >75){
                            window.clearInterval(netTime);
                            $("#netspeed").text("稳定性良好");
                        }else if(speed<=75 && speed>50){
                            window.clearInterval(netTime);
                            $("#netspeed").text("稳定性良好");
                        }else{
                            window.clearInterval(netTime);
                            $("#netspeed").text("稳定性较差");
                        }
                    } else {
                        window.clearInterval(netTime);
                        $("#netspeed").text("稳定性良好");
                    }

                }
            };
            var timestamp = (new Date()).getTime();
            xhr.open('GET', '/web/dzswj/ythclient/imgs/mh_topbg.png?time=' + timestamp, true);
            xhr.send(null);
        }


    }
})()