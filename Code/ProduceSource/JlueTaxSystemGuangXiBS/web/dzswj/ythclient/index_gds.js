$(document).ready(function () {
    index_gds.onLoad();
});

/**
 * <ol>
 * date:2016-11-7 editor:gaoyixiao
 * </ol>
 */
var index_gds = (function () {
    var $obj_dxdl_login;//短信登陆 登陆按钮
    var timerReg_dxdl_login;//短信登陆 登陆按钮定时器
    var $obj_byh_login;//报验户登陆 登陆按钮
    var timerReg_byh_login;//报验户登陆 登陆按钮定时器
    var $obj_zrr_login;//自然人登陆 登陆按钮
    var timerReg_zrr_login;//自然人登陆 登陆按钮定时器
    var sta1;
    var szzstx;
    var openxbnsr_html;


    //跳转到过度页面只存放Tid，跳转到主页存Tid Pid 所以 根据PID区分跳转到那个页面
    var mhToMainPId="75037,75038,75016,10001,75260,75261";//前三个是企业  后三个是个人
    var mhHtmlIndex="mh.html";
    var mh_khdHtmlIndex = "mh_khd.html";

    // 私有属性
    var curSeg;
    var re_yh = null;
    var re_zh = null;
    var re_mm = null;
    var zh, mm;

    // 私有方法
    var initLayout = function () {

        //点击切换企业和个人登录
        $('.form_div ul li').on("click", function () {
            $(this).addClass('current').siblings().removeClass('current');
            if ($(this).index() == 0) {
                $('.companyLogin').css("display", "block");
                $('.messageLogin').css("display", "none");
                $('.userLogin').css("display", "none");
                $('.userLogin input').val('');
                $('.messageLogin input').val('');
            } else if ($(this).index() == 1) {
                $('.companyLogin').css("display", "none");
                $('.messageLogin').css("display", "block");
                $('.userLogin').css("display", "none");
                $('.companyLogin input').val('');
                $('.userLogin input').val('');
            } else {
                $('.companyLogin').css("display", "none");
                $('.messageLogin').css("display", "none");
                $('.userLogin').css("display", "block");
                $('.companyLogin input').val('');
                $('.messageLogin input').val('');
            }
        })

        // 初始化页面UI
        if (!jcptTools.checkCookie()) {
            $(":input").attr('disabled', true);
            $("#msg")
                .html(
                    "<a href='../taxclient/manage/cookie_help/cookie.html' target='_blank'><font style='font-size:12px;color:red'>浏览器COOKIE启用说明!</font></a> ")
        } else {
            $(":input[name='USER_ZH']").val(jcptTools.getCookie("USER_CODE"));
            $(":input[name='USER_MM']").val('');
        }
    };

    // 公有方法
    return {
        onLoad: function () {
            curSeg = index_gds;
            openxbnsr_html = $(".wep_loginlogin_xbnsr").html();
            $(".wep_loginlogin_xbnsr").html('');
            initLayout();

            //搜索框value模拟placeholder
            $(".title").focus(function () {
                $(this).hide().siblings(".titles").show().focus();
            })
            $(".titles").blur(function () {
                var dataValue1 = $(this).data("value");
                if ($(this).val() == "" || $(this).val() == undefined) {
                    $(this).val(dataValue1);
                    $(this).siblings(".title").val("请输入需要搜索的内容");
                    $(this).hide().siblings(".title").show();
                }
            })

            //登录框value模拟placeholder
            $("input").each(function () {
                var dataValue = $(this).data("value");
                $(this).val(dataValue);
            });
            $("select[name='SFLX_DM']").val("0");
            var oldval;
            $(".wep_loginform input[name='USER_ZH']").focus(function () {
                oldval = $(this).val();
                if (oldval == "账号") {
                    $(this).val("");
                }
                $(this).removeClass('wrong').addClass('right');
            });
            $(".wep_loginform input[name='USER_ZH']").blur(function () {
                var dataValue1 = $(this).data("value");
                if ($(this).val() == "" || $(this).val() == undefined) {
                    $(this).val(dataValue1);
                    $(this).removeClass('right').addClass('wrong');
                }
            })
            $(".wep_loginlogin_form input").blur(function () {
                alert('1')
                var dataValue1 = $(this).data("value");
                if ($(this).val() == "" || $(this).val() == undefined) {
                    $(this).val(dataValue1);
                    $(this).removeClass('right').addClass('wrong');
                }
            })
            $(".username").focus(function () {
                $(this).hide().siblings(".usernames").show().focus();
                $(this).siblings(".usernames").removeClass('wrong').addClass('right');
            })
            $(".usernames").blur(function () {
                var dataValue1 = $(this).data("value");
                var dataValue2=$(this).siblings(".username").val();
                if ($(this).val() == "" || $(this).val() == undefined) {
                    $(this).val(dataValue1);
                    $(this).siblings(".username").val(dataValue2);
                    $(this).hide().siblings(".username").show();
                    $(this).siblings().removeClass('right').addClass('wrong');
                }
            })
            $(".topPw").focus(function () {
                $(this).hide().siblings(".passwords").show().focus();
                $(this).hide().siblings(".passwords").val("");
                $(this).siblings(".passwords").removeClass('wrong').addClass('right');
            })
            $(".passwords").blur(function () {
                var dataValue1 = $(this).siblings(".topPw ").data("value");
                if ($(this).val() == "" || $(this).val() == undefined) {
                    $(this).val(dataValue1);
                    $(this).siblings(".topPw").val(dataValue1);
                    $(this).siblings().removeClass('right').addClass('wrong');
                    $(this).hide().siblings(".topPw").show();
                }
            })
            $(".wep_loginform select").each(function () {
                $(this).focus(function () {
                    $(this).removeClass('wrong').addClass('right');
                }).blur(function () {
                    $(this).removeClass('right').addClass('wrong');
                })
            });
            $("input[name='WEP_SEND_YZM']").focus(function () {
                $(this).val("");
            }).blur(function () {
                var dataValue1 = $(this).data("value");
                if ($(this).val() == "") {
                    $(this).val(dataValue1);
                }
            })
            $(".widthHalf").focus(function () {
                $(this).hide().siblings(".widthHalfs").show().focus();
                $(this).siblings(".widthHalfs").removeClass('wrong').addClass('right');
            })
            $(".widthHalfs").blur(function () {
                var dataValue1 = $(this).data("value");
                if ($(this).val() == "" || $(this).val() == undefined) {
                    $(this).val(dataValue1);
                    $(this).siblings(".widthHalf").val("请输入短信验证码");
                    $(this).hide().siblings(".widthHalf").show();
                    $(this).siblings().removeClass('right').addClass('wrong');
                }
            })
            $(".usernh").focus(function () {
                $(this).hide().siblings(".usernhs").show().focus();
                $(this).siblings(".usernhs").removeClass('wrong').addClass('right');
            })
            $(".usernhs").blur(function () {
                var dataValue1 = $(this).data("value");
                var dataValue2=$(this).siblings(".usernh").val();
                if ($(this).val() == "" || $(this).val() == undefined) {
                    $(this).val(dataValue1);
                    $(this).siblings(".usernh").val(dataValue2);
                    $(this).hide().siblings(".usernh").show();
                    $(this).siblings().removeClass('right').addClass('wrong');
                }
            })
            $(".userwh").focus(function () {
                $(this).hide().siblings(".userwhs").show().focus();
                $(this).siblings(".userwhs").removeClass('wrong').addClass('right');
            })
            $(".userwhs").blur(function () {
                var dataValue1 = $(this).data("value");
                var dataValue2=$(this).siblings(".userwh").val();
                if ($(this).val() == "" || $(this).val() == undefined) {
                    $(this).val(dataValue1);
                    $(this).siblings(".userwh").val(dataValue2);
                    $(this).hide().siblings(".userwh").show();
                    $(this).siblings().removeClass('right').addClass('wrong');
                }
            })
            $(".yzmInput").focus(function () {
                $(this).val("");
            }).blur(function () {
                var dataValue1 = $(this).data("value");
                if ($(this).val() == "") {
                    $(this).val(dataValue1);
                }
            })
            //登陆框模拟placeholder结束

            $('.wep_login').on("click", function (event) {
                //未登录
                //4种登录或者5种登录判断
                if (!jcptTools.getIsLogin()) {
                    curSeg.showLogin();
                }
            });

            $("#sfcx").on("click", "input", function () {
                index_gds.onHideDlrsf()
            });
            layuiTools.selectEvent("sflx_dm_filter", index_gds.onClickDlrsf);

            curSeg.init();

            curSeg.loginMethod();

            $('.wep_login_btn').val("登  录");
            $('.wep_send_msg').val("获取验证码");

            //动态修改门户页面图片内容 测试、预生产、生产
            $("#id_mh_title_img").attr('src',window.mhTitleImg);

            //老域名增加自动跳转
            if(window.inlineOutlinepro == "sc" && window.location.hostname == "www.gxgs.gov.cn"){
                alert("按照国家税务总局统一部署，2019年1月1号起广西电子税务局将使用新的域名，检测到您正在使用旧域名登录，我们将会为您自动跳转到新域名(etax.guangxi.chinatax.gov.cn)。如浏览器有收藏请重新收藏。");
                window.location.href="http://etax.guangxi.chinatax.gov.cn:9711/web/";
            }

            if(window.inlineOutlinepro == "sc" && window.location.hostname == "etax.guangxi.chinatax.gov.cn" && window.location.protocol =="http:"){
                // alert("为确保纳税人信息数据安全，电子税务局已经调整为使用https安全协议访问。如尚未安装安全证书登录电子税务局时，浏览器会弹出安全警告信息，请继续访问，并按电子税务局首页提示信息安装安全证书！");
                //安全证书安装
                // curSeg.alertBox3('#httpstz_tx','300px','300px');
                // window.location.href="https://etax.guangxi.chinatax.gov.cn:9723/web/";
                // window.inlineOutlinepro == "sc" && window.location.hostname == "etax.guangxi.chinatax.gov.cn" && window.location.protocol =="http:"
                // window.inlineOutlinepro == "dev" && window.location.hostname == "jspt11.gxgs.gov.cn" && window.location.protocol =="http:"
            }

            $("#id_grsds_img").on("click", function () {
                index_gds.grsdsOnclick();
            });
            // 删除组件释放内存
            $(window).unload(function () {});

            setTimeout(
                "index_gds.openMsg();", "" || 1000);

        },
        openMsg: function () {
         var parm = jcptTools.getParams('parm');
            if(parm != undefined && parm != "undefined" && parm != null && parm != ""){
                switch (parseInt(parm)) {
                    case 1:
                        break;
                    case -16://金三账号不存在
                        index_gds.xbnsrtcOnclick();
                        alert("查询不到有效的税务登记信息，请使用电子税务局首页登录功能中的《新办纳税人套餐》进行税务登记业务办理！");
                        break;
                    default:
                        break;
                    //  curSeg.goLogin();
                }
            }
        },
        //新办纳税人套餐事件
        xbnsrtcOnclick: function () {
            //显示登录框
            layer.closeAll();
            setTimeout(function () {
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    type: 1,
                    skin: "login_wrap",
                    title: false,
                    area: ['520px', '345px'],
                    shade: 0.4,
                    // offset:'rt',
                    //offset:'r',
                    closeBtn: 0,
                    shadeClose: false,
                    content: openxbnsr_html,
                    success: function () {
                        $("#wdl_xbnsr .letinput").focus(function () {
                            $(this).hide();
                            $(this).parent().find(".messinput").show().focus();
                            if(!$(this).parent().find(".messinput").val()){
                                $(this).parent().find("input").addClass('wrong');
                            }else{
                                $(this).parent().find("input").removeClass("wrong").addClass('right');
                            }
                            })
                        $("#wdl_xbnsr .messinput").blur(function () {
                            var newval = $(this).val();
                            if(newval){
                                $(this).parent().find("input").removeClass("wrong").addClass('right');
                            }else{
                                $(this).hide();
                                $(this).parent().find(".letinput").show();
                                $(this).parent().find("input").removeClass("right").addClass('wrong');
                            }
                        })
                        var nsrsbh = baseTools.getCookie("oauth_nsrsbh");
                        var sfzhm = baseTools.getCookie("oauth_sfzhm");
			if(nsrsbh){
			   $(":input[name='TYSHXYDM']").val(nsrsbh);
                           $(":input[name='FDDBRSFZJHM']").val(sfzhm);
			   $("#wdl_xbnsr .letinput").hide();
			   $("#wdl_xbnsr .messinput").show();
			}

                        $('.wep_xbnsr_btn').val("下 一 步");
                        layui.use('form', function () {
                            var form = layui.form;
                            form.render();
                        })

                        var left = parseInt($('.login_wrap').css("left"));
                        $('.login_wrap').css("left",left-40 + 'px');
                    },
                    end:function (){
                        $('.layui-layer-shade').remove();
                    }
                })
            });
            },300)
           // window.location=window.xbnsrtc;


        },
        //个人所得税二维码点击放大
        grsdsOnclick:function (){
            var width = $("#id_grsds_img").attr("width");
            if(width == '100'){
                $("#id_grsds_img").attr("width","300");
                $("#id_grsds_img").attr("height","300");
            }else{
                $("#id_grsds_img").attr("width","100");
                $("#id_grsds_img").attr("height","100");
            }
        },
        gohttps:function() {
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    type: 1,
                    title: '温馨提示',
                    shadeClose: false,
                    closeBtn: 1,
                    area: ['760px', 'auto'],
                    content: $('#https'),
                    btn: ['确定'],
                    cancel: function () {
                    	window.location.href = "https://etax.guangxi.chinatax.gov.cn:9723/web/dzswj/ythclient/mh.html"
                    },
                    yes: function (index) {
                        window.location.href = "https://etax.guangxi.chinatax.gov.cn:9723/web/dzswj/ythclient/mh.html"
                    }
                })
            })
			return false
        },
        //显示登录框
        showLogin:function(){
            var oWidth,oHeight;
            if(sfdl_bz == 1){
                oWidth='420px';
                oHeight='407px';
            }else if(sfdl_bz == 2){
                oWidth='520px';
                oHeight='407px';
            }
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    type: 1,
                    skin: "login_wrap",
                    title: false,
                    area: [oWidth, oHeight],
                    shade: 0.4,
                    closeBtn: 0,
                    shadeClose: false,
                    content: $('.wep_loginlogin'),
                    success: function () {
                        layui.use('form', function () {
                            var form = layui.form;
                            form.render();
                            $('#sfcx').find('input').val("请选择登录身份");
                            $('#sfhm').find('input').val("请选择手机号码");
                            $('#sfcx2').find('input').val("请选择登录身份");
                            $('#sfhm2').find('input').val("请选择手机号码");
                        })
                    }
                })
            });
        },

        //登陆框切换事件
        loginMethod: function () {
            $('.wxl_wyzc').hide();
            $('.wxl_scbsbl').show();
            $('.caLogin').hide();
            $('.dxLogin').show();
            $('.wep_ul li').on('click', function () {
                if(sfdl_bz==1){
                    switch ($(this).index()) {
                        case 3:
                            $('.wxl_wyzc').show();
                            $('.wxl_scbsbl').hide();
                            $('.caLogin').show();
                            $('.dxLogin').hide();
                            $('.wep_form form').css('display', 'none');
                            $(this).addClass('active').siblings().removeClass('active');
                            $('.wep_form form').eq($(this).index()).css('display', 'block');
                            break;
                        case 2:
                            $('.wxl_wyzc').hide();
                            $('.wxl_scbsbl').hide();
                            $('.wep_form form').css('display', 'none');
                            $(this).addClass('active').siblings().removeClass('active');
                            $('.wep_form form').eq($(this).index()).css('display', 'block');
                            $('.caLogin').hide();
                            $('.dxLogin').hide();
                            if(sfdl_bz=="2"){
                                //数字证书登陆环境检测
                                index_gds.szzsJC();
                            }
                            break;
                        case 1:
                            $('.wxl_wyzc').hide();
                            $('.wxl_scbsbl').hide();
                            $('.wep_form form').css('display', 'none');
                            $(this).addClass('active').siblings().removeClass('active');
                            $('.wep_form form').eq($(this).index()).css('display', 'block');
                            $('.caLogin').hide();
                            $('.dxLogin').hide();
                            if(sfdl_bz=="1"){
                                //数字证书登陆环境检测
                                index_gds.szzsJC();
                            }
                            break;
                        default:
                            $('.wxl_wyzc').hide();
                            $('.wxl_scbsbl').show();
                            $(this).addClass('active').siblings().removeClass('active');
                            $('.wep_form form').css('display', 'none');
                            $('.wep_form form').eq($(this).index()).css('display', 'block');
                            $('.caLogin').hide();
                            $('.dxLogin').show();
                    }
                }else if(sfdl_bz==2){
                    switch ($(this).index()) {
                        case 4:
                            $('.wxl_wyzc').show();
                            $('.wxl_scbsbl').hide();
                            $('.caLogin').show();
                            $('.dxLogin').hide();
                            $('.wep_form form').css('display', 'none');
                            $(this).addClass('active').siblings().removeClass('active');
                            $('.wep_form form').eq($(this).index()).css('display', 'block');
                            break;
                        case 3:
                            $('.wxl_wyzc').hide();
                            $('.wxl_scbsbl').hide();
                            $('.wep_form form').css('display', 'none');
                            $(this).addClass('active').siblings().removeClass('active');
                            $('.wep_form form').eq($(this).index()).css('display', 'block');
                            $('.caLogin').hide();
                            $('.dxLogin').hide();
                            break;
                        case 2:
                            $('.wxl_wyzc').hide();
                            $('.wxl_scbsbl').hide();
                            $('.wep_form form').css('display', 'none');
                            $(this).addClass('active').siblings().removeClass('active');
                            $('.wep_form form').eq($(this).index()).css('display', 'block');
                            $('.caLogin').hide();
                            $('.dxLogin').hide();
                            break;
                        case 1:
                            $('.wxl_wyzc').hide();
                            $('.wxl_scbsbl').show();
                            $(this).addClass('active').siblings().removeClass('active');
                            $('.wep_form form').css('display', 'none');
                            $('.wep_form form').eq($(this).index()).css('display', 'block');
                            $('.caLogin').hide();
                            $('.dxLogin').show();
                            break;
                        default:
                            $('.wxl_wyzc').hide();
                            $('.wxl_scbsbl').show();
                            $(this).addClass('active').siblings().removeClass('active');
                            $('.wep_form form').css('display', 'none');
                            $('.wep_form form').eq($(this).index()).css('display', 'block');
                            $('.caLogin').hide();
                            $('.dxLogin').show();
                    }
                };


                /*	if ($(this).text() == "个人所得税") {

                    } else if ($(this).index() == 2) {
                        $('.caLogin').show();
                        $('.dxLogin').hide();
                        $(this).addClass('active').siblings().removeClass('active');
                    } else {
                        $('.wep_form form').css('display', 'none');
                        $(this).addClass('active').siblings().removeClass('active');
                        $('.wep_form form').eq($(this).index()).css('display', 'block');
                        $('.caLogin').show();
                        $('.dxLogin').()
                    }*/

            })
        },

        //登陆后 登陆按钮显示为个人、企业名字
        init: function () {
            //登录
            if (jcptTools.getIsLogin()) {
                $("#id_mh_login_img").css("display", "none");
                $("#id_mh_login_span").css("display", "none");
                if(jcptTools.getIsZrr()) {//自然人
                    $("#id_mh_login_div").css("display", "block").html(jcptTools.getUserDataByKey("GR_YHMC") + '<span onclick="dzswjCommon.dzswjLoginOut(1);" class="exit_bt"><i class="iconfont icon-exit"></i>退出登录</span>');
                }else{
                    $("#id_mh_login_div").css("display", "block").html(jcptTools.getUserDataByKey("NSRMC") + '<span onclick="dzswjCommon.dzswjLoginOut(1);" class="exit_bt"><i class="iconfont icon-exit"></i>退出登录</span>');
                }
            } else {
                $("#id_mh_login_img").css("display", "block");
                $("#id_mh_login_span").css("display", "block");
                $("#id_mh_login_div").css("display", "none");
            }
        },

        //通用校验用户名、密码不为空方法
        onCheckParam: function (form_id) {
            $("#" + form_id).find("input[name='USER_ZH']").val($("#" + form_id).find("input[name='USER_ZH']").val().trim());
            $("#" + form_id).find("input[name='USER_MM']").val($("#" + form_id).find("input[name='USER_MM']").val().trim());

            zh = $("#" + form_id).find("input[name='USER_ZH']").val();
            mm = $("#" + form_id).find("input[name='USER_MM']").val();

            if (zh.length == 0 || zh == "账号" || zh == "请输入统一社会信用代码（或纳税人识别号）" || zh == "请输入账号") {
                alert('请录入帐号!');
                $("#" + form_id).find("input[name='USER_ZH']")[0].focus();
                return false;
            }
            if (mm.length == 0 || mm == "密码" || mm == "请输入密码" || mm == "请输入证书密码" || mm == "默认密码Aa+社会信用代码后8位") {
                alert('请录入密码!');
                //$("#"+form_id).find("input[name='USER_MM']")[0].focus();
                return false;
            }

            return true;
        },

        //1.1短信登陆 根据用户名、密码查询手机号
        onHideDlrsf: function () {
            if (!index_gds.onCheckParam("wep_form_dxdl")) {
                return;
            }

            var int_zh = $("#wep_form_dxdl").find("input[name='USER_ZH']").val().trim();
            var int_mm = $("#wep_form_dxdl").find("input[name='USER_MM']").val().trim();
            if (re_yh != null && re_zh == int_zh && re_mm == int_mm) {
                $("#dlrsf_dh_content").hide();
                $("#dlrsf_content").show();
                return;
            }
            /*if (int_zh == "" || int_zh == "账号") {
                alert('请录入正确的帐号!');
                $("#wep_form_dxdl").find("input[name='USER_ZH']").focus();
                return false;
            }
            if (int_mm == "" || int_mm == "密码") {
                alert('请录入密码!');
                $("#wep_form_dxdl").find("input[name='USER_MM']").focus();
                return false;
            }*/

            re_zh = int_zh;
            re_mm = int_mm;

            var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
            var srcs = CryptoJS.enc.Utf8.parse(int_mm);
            var encrypted = CryptoJS.AES.encrypt(srcs, key, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            load.loading();
            var display = $("#dxdl_yzm1").css("display");
            var yzm = '-1';
            if(display!='none'){
                yzm = $("#dxdl_yzm").val();
                if(yzm==''||yzm.trim().length==0||yzm=="请输入验证码"){
                    alert("请输入图片验证码！");
                    load.closeLoading();
                    return;
                }
            }
            baseTools.xhrAjax({
                url: '/checkQyyhDxptInfo.do',
                bShow: false,
                async: false,
                params: {
                    USERNAME: int_zh,
                    PASSWORD: encrypted.toString(),
                    RCODE:yzm
                },
                callback: [index_gds.pageFlowControl_dx_info]
            });
        },
        //1.2短信登陆 切换登陆身份 事件
        onClickDlrsf: function (obj) {

            if (!index_gds.onCheckParam("wep_form_dxdl")) {
                return;
            }

            var int_zh = $("#wep_form_dxdl").find("input[name='USER_ZH']").val().trim();
            var int_mm = $("#wep_form_dxdl").find("input[name='USER_MM']").val().trim();
            if (re_yh == null || re_zh != int_zh || re_mm != int_mm) {
                $("#wep_form_dxdl").find("select[name='SJHM']").find("option:selected").text("");
                $("#wep_form_dxdl").find("select[name='SJHM']").empty();
                index_gds.onHideDlrsf();
                return;
            }

            $("#wep_form_dxdl").find("select[name='SJHM']").find("option:selected").text("");
            $("#wep_form_dxdl").find("select[name='SJHM']").empty();
            var op = $("#wep_form_dxdl").find("select[name='SFLX_DM']").find("option:selected").val();
            if (!op) {
                alert("请选择登录人身份1");
                return;
            }
            if (op == "1") {
                $("#wep_form_dxdl").find("select[name='SJHM']").append("<option value='1'>" + re_yh.FDDBRYDDH + "</option>");
                layuiTools.renderForm();
                if (re_yh.FDDBRYDDH == "") {
                    alert("您选择的登录人身份未进行手机号码登记，请到税务大厅进行手机号码登记或重新选择其他登录人身份进行登录   ");
                }
            } else if (op == "2") {
                $("#wep_form_dxdl").find("select[name='SJHM']").append("<option value='2'>" + re_yh.CWFZRYDDH + "</option>");
                layuiTools.renderForm();
                if (re_yh.CWFZRYDDH == "") {
                    alert("您选择的登录人身份未进行手机号码登记，请到税务大厅进行手机号码登记或重新选择其他登录人身份进行登录   ");
                }
                $("#dlrsf_dh").val(re_yh.CWFZRYDDH);
            } else if (op == "3") {
                $("#wep_form_dxdl").find("select[name='SJHM']").append("<option value='3'>" + re_yh.BSRYDDH + "</option>");
                layuiTools.renderForm();
                if (re_yh.BSRYDDH == "") {
                    alert("您选择的登录人身份未进行手机号码登记，请到税务大厅进行手机号码登记或重新选择其他登录人身份进行登录   ");
                }
            } else if (op == "4") {
                if (re_yh.GPRLXDH) {
                    if (re_yh.GPRLXDH.length == 0) {
                        alert("您选择的登录人身份未进行手机号码登记，请到税务大厅进行手机号码登记或重新选择其他登录人身份进行登录   ");
                        return false;
                    }
                    var gpyArr = re_yh.GPRLXDH;
                    for (var i = 0; i < gpyArr.length; i++) {
                        $("#wep_form_dxdl").find("select[name='SJHM']").append("<option value='" + gpyArr[i].LXDH_XH + "'>" + gpyArr[i].LXDH + "</option>");
                    }
                } else {
                    alert("您选择的登录人身份未进行手机号码登记，请到税务大厅进行手机号码登记或重新选择其他登录人身份进行登录   ");
                }
            }
        },
        //1.3短信登陆 发送验证码
        onGetQyyhDxptYzm: function (op) {

            if (!index_gds.onCheckParam("wep_form_dxdl")) {
                return;
            }

            var zh = $("#wep_form_dxdl").find("input[name='USER_ZH']").val().trim();
            var mm = $("#wep_form_dxdl").find("input[name='USER_MM']").val().trim();
            /*if (zh == "") {
                alert('请录入正确的帐号!');
                $("#wep_form_dxdl").find("input[name='USER_ZH']").focus();
                return false;
            }
            if (mm == "") {
                alert('请录入密码!');
                $("#wep_form_dxdl").find("input[name='USER_MM']").focus();
                return false;
            }*/

            var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
            var srcs = CryptoJS.enc.Utf8.parse(mm);
            var encrypted = CryptoJS.AES.encrypt(srcs, key, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });


            if (!index_gds.onCheckParam(op)) {
                return;
            }

            if (re_yh == null || re_zh != zh || re_mm != mm ) {
                $("#wep_form_dxdl").find("select[name='SJHM']").find("option:selected").text("");
                $("#wep_form_dxdl").find("select[name='SJHM']").empty();
                index_gds.onHideDlrsf();
                return;
            }

            var lxdh;
            var djhm;
            if (op == "wep_form_dxdl") {
                var jyxh = $("#wep_form_dxdl").find("span[name='JYXH']");
                var username = $("#wep_form_dxdl").find("input[name='USER_ZH']");
                lxdh = $("#wep_form_dxdl").find("select[name='SFLX_DM']").find("option:selected");
                djhm = $("#wep_form_dxdl").find("select[name='SJHM']").find("option:selected");
                if ($(lxdh).val() == "") {
                    alert("您选择的登录人身份   ");
                    return;
                }
                if (djhm.length == 0 || $(djhm).val() == "") {
                    var op = $("#wep_form_dxdl").find("select[name='SFLX_DM']").find("option:selected").val();

                    if (op == "" || op.trim() == "请选择登录身份") {
                        alert("您选择的登录人身份   ");
                        return;
                    }
                    alert("您选择的登录人身份未进行手机号码登记，请到税务大厅进行手机号码登记或重新选择其他登录人身份进行登录   ");
                    return;
                }
            } else {
                lxdh = zh;
            }

            // var num = 60;
            // $("a[name='CXHQ2']").show();
            // $("a[name='CXHQ1']").hide();

            var $obj = $("#wep_form_dxdl").find(":input[name='WEP_SEND_MSG']");
            var timerReg = jcptTools.countDown($obj, 60, 's重新获取');

            baseTools.xhrAjax_dxpt({
                url: '/getQyyhDxptYzm.do',
                bShow: false,
                async: true,
                params: {
                    LXDH: $(lxdh).val(),
                    USERNAME: username.val().trim(),
                    JYXH: jyxh.text(),
                    DJHM: $(djhm).val(),
                    PASSWORD: encrypted.toString()
                },
                callback: [function (jsonObj, xhrArgs) {
                    //登录返回清空账号密码，启用登录按钮、输入框
                    switch (parseInt(jsonObj.code)) {
                        case 1:
                            $(jyxh).text(jsonObj.data);
                            alert("短信发送成功，请收到短信后，将对应交易序号" + jsonObj.data + "的验证码录入界面，点击登录  ");
                            // index_gds.onSetDx("wep_form_dxdl");
                            break;
                        case -1: //登录失败
                            jcptTools.clearAllCookie();
                            alert(jsonObj.msg);
                            curSeg.unlockLogin();
                            jcptTools.countDownClean($obj, timerReg, "获取验证码");
                            break;
                        case -2: //没有获取到当前身份的手机号
                            jcptTools.clearAllCookie();
                            alert(jsonObj.msg);
                            curSeg.unlockLogin();
                            jcptTools.countDownClean($obj, timerReg, "获取验证码");
                            break;
                        case -3: // session 失效请重新登录
                            jcptTools.clearAllCookie();
                            alert(jsonObj.msg);
                            window.location = 'index.html';
                            break;
                        default:
                            curSeg.unlockLogin();
                            jcptTools.countDownClean($obj, timerReg, "获取验证码");
                    }
                }]
            });

        },
        //1.4短信登陆 登陆
        onDxLogin: function () {
            var int_zh = $("#wep_form_dxdl").find("input[name='USER_ZH']").val().trim();
            var int_mm = $("#wep_form_dxdl").find("input[name='USER_MM']").val().trim();

            if (!index_gds.onCheckParam("wep_form_dxdl")) {
                return;
            }
            curSeg.lockLogin("wep_form_dxdl");
            if ($('#dlrsf_dh').val() == "") {
                alert("请选择有效的手机号码");
                curSeg.unlockLogin();
                return false;
            }

            var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
            var srcs = CryptoJS.enc.Utf8.parse(int_mm);
            var encrypted = CryptoJS.AES.encrypt(srcs, key, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });

            var wep_send_yzm = $("#wep_form_dxdl").find("input[name='WEP_SEND_YZM']").val().trim();
            var jyxh = $("#wep_form_dxdl").find("span[name='JYXH']").text();

            if (wep_send_yzm == "") {
                alert("请输入验证码");
                curSeg.unlockLogin();
                return false;
            }
            if (re_yh == null || re_zh != int_zh || re_mm != int_mm) {
                $("#wep_form_dxdl").find("select[name='SJHM']").find("option:selected").text("");
                $("#wep_form_dxdl").find("select[name='SJHM']").empty();
                index_gds.onHideDlrsf();
                curSeg.unlockLogin();
                return false;
            }

            $obj_dxdl_login = $("#id_dxdl_login");
            timerReg_dxdl_login = jcptTools.countDown($obj_dxdl_login, 60, 's重新登录');

            load.loading();

            var init_sflx_dm = $("#wep_form_dxdl").find("select[name='SFLX_DM']").find("option:selected").val();
            var djhm = $("#wep_form_dxdl").find("select[name='SJHM']").find("option:selected").val();


            baseTools.xhrAjax({
                url: '/qyDxptLogin.do',
                bShow: false,
                async: true,
                params: {
                    USERNAME: zh,
                    PASSWORD: encrypted.toString(),
                    DX_YZM: wep_send_yzm,
                    DX_JYXH: jyxh,
                    CUR_USERID: "-1",
                    SFLX_DM : init_sflx_dm,
					DJHM : djhm
                },
                callback: [curSeg.pageFlowControl_dx_login]
            });

        },

        //3.1报验户登陆 tbb 2018年12月10日17:20:12
        onLoginByh: function () {

            if (!index_gds.onCheckParam("wep_form_cadl")) {
                return;
            }

            var zh = $("#wep_form_cadl").find("input[name='USER_ZH']").val().trim();
            var mm = $("#wep_form_cadl").find("input[name='USER_MM']").val().trim();
            var nh = $("#wep_form_cadl").find("input[name='USER_NH']").val().trim();
            var wh = $("#wep_form_cadl").find("input[name='USER_WH']").val().trim();

            /*if (zh.length == 0 || zh == "请输入统一社会信用代码（或纳税人识别号）") {
                alert('请录入账号!');
                $("#wep_form_cadl").find("input[name='USER_ZH']").focus();
                return false;
            } else if (zh == '1') {
                alert('请录入正确的账号!');
                $("#wep_form_cadl").find("input[name='USER_ZH']").focus();
                return false;
            }
            if (mm.length == 0) {
                alert('请录入密码!');
                $("#wep_form_cadl").find("input[name='USER_MM']").focus();
                return false;
            }*/
            if(nh.length == 0 || nh == "请输入年号"){
                alert('请输入年号!');
                $("#wep_form_cadl").find("input[name='USER_NH']").focus();
                return false;
            }
            if(wh.length == 0 || wh == "请输入文号"){
                alert('请输入文号!');
                $("#wep_form_cadl").find("input[name='USER_WH']").focus();
                return false;
            }
            var username = zh + nh + wh ;

            curSeg.lockLogin("wep_form_cadl");

            var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
            var srcs = CryptoJS.enc.Utf8.parse(mm);
            var encrypted = CryptoJS.AES.encrypt(srcs, key, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });

            $obj_byh_login = $("#id_byh_login");
            timerReg_byh_login = jcptTools.countDown($obj_byh_login, 60, 's重新登录');

            load.loading();
            baseTools.xhrAjax({
                url: '/checkByhLogin.do',
                bShow: false,
                async: true,
                params: {
                    USERNAME: username,
                    PASSWORD: encrypted.toString()
                },
                callback: [index_gds.pageFlowControl_byh]
            });

        },

        //4.1个人用户登录 发送验证码
        onGetGryhDxptYzm: function () {
            if (!index_gds.onCheckParam("wep_form_grdl_new")) {
                return;
            }
            var jyxh = $("#wep_form_grdl_new").find("span[name='JYXH']").text();
            var encrypted_zh = aesTools.encrypt(zh);
            var encrypted_mm = aesTools.encrypt(mm);
            var $obj = $("#wep_form_grdl_new").find(":input[name='WEP_SEND_MSG']");
            var timerReg = jcptTools.countDown($obj, 60, 's重新获取');
            var display = $("#zrrdl_yzm1").css("display");
            var yzm = '-1';
            if(display!='none'){
                yzm = $("#zrrdl_yzm").val();
                if(yzm==''||yzm.trim().length==0||yzm=="请输入验证码"){
                    alert("请输入图片验证码！");
                    load.closeLoading();
                    return;
                }
            }
            baseTools.xhrAjax_dxpt({
                url: "/server/jcpt/logininfo/getGryhDxptYzm.do",
                bShow: false,
                params: {
                    RANDOM_NUM: Math.random(),
                    JYXH: jyxh,
                    USERNAME: encrypted_zh.toString(),
                    PASSWORD: encrypted_mm.toString(),
                    YHDLLX: "3",
                    RCODE:yzm
                },
                callback: [function (jsonObj, xhrArgs) {
                    switch (parseInt(jsonObj.code)) {
                        case 1:
                            $("#wep_form_grdl_new").find("span[name='JYXH']").text(jsonObj.data);
                            alert("短信发送成功，请收到短信后，将对应交易序号" + jsonObj.data + "的验证码录入界面，点击登录  ");
                            break;
                        case -1: //登录失败
                            jcptTools.msg(jsonObj.msg);
                            jcptTools.clearAllCookie();
                            if ((jsonObj.msg).indexOf("用户名或密码错误") != -1) {
                                jcptTools.countDownClean($obj, timerReg, "发送验证码");
                            }
                            //判断是否连续三次错误
                            if(jsonObj.is_show_tpyzm!=undefined&&jsonObj.is_show_tpyzm=='Y'){
                                $("#zrrdl_yzm1").css("display","block");
                                $("#zrrdl_pic_code").attr('src', jcptTools.cnf.contextPath + '/cm/showPictureCode.do?flag=zrrdl_yzm&t=' + Math.random());
                            }else{
                                $("#zrrdl_yzm1").css("display","none");
                            }
                            break;
                        case -3: // session 失效请重新登录
                            jcptTools.msg(jsonObj.msg);
                            jcptTools.gotoLogin();
                            break;
                        case -101:
                            //图片验证码错误
                            alert(jsonObj.msg);
                            re_yh=null;
                            $("#zrrdl_pic_code").attr('src', jcptTools.cnf.contextPath + '/cm/showPictureCode.do?flag=zrrdl_yzm&t=' + Math.random());
                            break;
                        default:
                            jcptTools.countDownClean($obj, timerReg, "发送验证码");
                            curSeg.unlockLogin();
                    }
                }]
            });
        },
        //4.2个人登录 登陆
        onGrLogin: function () {

            if (!index_gds.onCheckParam("wep_form_grdl_new")) {
                return;
            }

            // var loginUrl = "/checkGrDxptLogin.do";
            var loginUrl = "/server/jcpt/logininfo/grDxptLogin.do";

            if ($("#wep_form_grdl_new").find("input[name='WEP_SEND_YZM']").val() == "") {
                jcptTools.msg("请输入有效的验证码  ");
                return;
            }

            $obj_zrr_login = $("#id_zrr_login");
            timerReg_zrr_login = jcptTools.countDown($obj_zrr_login, 60, 's重新登录');

            load.loading();
            baseTools.xhrAjax({
                url: loginUrl,
                bShow: false,
                params: {
                    DX_YZM: $("#wep_form_grdl_new").find("input[name='WEP_SEND_YZM']").val(),
                    CUR_USERID: "-1"
                },
                callback: [curSeg.pageFlowControl_gr]
            });
        },

        //回车登录
        keyDown: function () {
            if ($('.wep_loginlogin').css("display") == "block") {
                if (event.keyCode == 13) {
                    event.returnValue = false;
                    event.cancel = true;

                    if ($('#wep_form_dxdl').css("display") == "block") {
                        if(qydl_bz==1){
                            index_gds.onDxLogin();
                        }else{
                            index_gds_new.onDxLogin();
                        }
                    } else if ($('#wep_form_iadl').css("display") == "block") {
                        onSkpLogin1();
                    } else if ($('#wep_form_cadl').css("display") == "block"){
                        index_gds.onLoginByh();
                    } else if ($('#wep_form_grdl_new').css("display") == "block"){
                        index_gds.onGrLogin();
                    }else{
                        return;
                    }
                }
            } else {
                return;
            }

        },

        //点击新版纳税人套餐介绍
        onNewShow: function () {
            $('.cover').show();
            $('.newPro').show();
        },
        //点击关闭关闭新版纳税人套餐介绍
        onNewHide: function () {
            $('.cover').hide();
            $('.newPro').hide();
        },
        //锁定用户名密码
        lockLogin: function () {
            //隐藏登录按钮、输入框置灰，登录后恢复
            $('.wep_login_btn').attr("disabled", "disabled");
            $(":input[name='USER_ZH']").attr("readonly", "readonly");
            $(":input[name='USER_MM']").attr("readonly", "readonly");
        },
        //解锁用户名密码
        unlockLogin: function () {
            //隐藏登录按钮、输入框置灰，登录后恢复
            /*load.closeLoading();
            $('#dlbutton').get(0).onclick = function() {
                index_gds.onLogin();
            };
            $(":input[name='USER_ZH']").attr("readonly", false);
            $(":input[name='USER_MM']").attr("readonly", false);*/
            $('.wep_login_btn').removeAttr("disabled");
            $(":input[name='USER_ZH']").removeAttr("readonly");
            $(":input[name='USER_MM']").removeAttr("readonly");
        },
        //清空用户名密码
        onClear: function () {
            $(":input[name='USER_ZH']").val('');
            $(":input[name='USER_MM']").val('');
        },

        MaxScreen: function () {
            window.moveTo(0, 0);
            window.resizeTo(screen.availWidth, screen.availHeight);
        },

        // 应该是无用代码 确定后删除
        onClickDlrsf_dh: function (num, iden) {
            /*if (iden) {
                $("#dlrsf_dh").attr("name", iden);
            }
            $("#dlrsf_dh").val(num);
            $("#dlrsf_dh_content").hide();*/
        },
        onHideDlrsf_dh: function () {
            /*if ($("#dlrsf").val() == "购票员") {
                $("#dlrsf_dh_content").show();

            }
            $("#dlrsf_content").hide();*/
        },


        //1.1短信登陆 校验用户名密码 回调
        pageFlowControl_dx_info: function (jsonObj, xhrArgs) {
            load.closeLoading();
            //登录返回清空账号密码，启用登录按钮、输入框
            switch (parseInt(jsonObj.code)) {
                case 1:
                    $("#dlrsf_dh_content").hide();
                    $("#dlrsf_content").show();
                    re_yh = jsonObj.data;

                    var op = $("#wep_form_dxdl").find("select[name='SFLX_DM']").find("option:selected").val();
                    if (!op == "") {
                        index_gds.onClickDlrsf();
                    }
                    break;
                case -1: //登录失败
                    //taxClientTools.clearAllCookie();
                    /*if (jsonObj.msg == '您尚未开通系统的使用权限！') {
                        if (confirm("您尚未开通系统的使用权限！\n是否现在开通？")) {
                            index_gds.addQyyhByNsrsbhIA(zh);
                            break;
                        } else {
                            index_gds.unlockLogin();
                        }
                    } else {*/
                    re_yh=null;
                    alert(jsonObj.msg);
                    index_gds.unlockLogin();
                    // }
                    break;
                case -3: // session 失效请重新登录
                    jcptTools.clearAllCookie();
                    alert(jsonObj.msg);
                    window.location = 'index.html';
                    break;
                case -5: //弱密码类型
                    jcptTools.setCookieJsonObjLogin(jsonObj.data);
                    alert(jsonObj.msg);
                    window.location.href = "up_qyyh_pwd.html";
                    break;
                case -16://金三账号不存在
                    alert(jsonObj.msg);
                    curSeg.unlockLogin();
                    break;
                case -21://平台自动开户 else
                    if(jsonObj.KHBZ == "Y"){
                        alert("您已成功开通广西壮族自治区电子税务局！默认密码Aa加社会信用代码后8位");
                        window.location.reload();
                    }else if(jsonObj.KHBZ == "Z") {
                        alert("未找到有效用户信息，请确认纳税人识别号或社会信用代码是否错误？账号无误请使用左下角《新办纳税人套餐》功能进行相关业务办理！");
                        // window.location.reload();
                    }else if(jsonObj.KHBZ == "W") {
                        alert("登录失败.");
                        // alert("您的登记信息存在重复，请到大厅处理！");
                        // window.location.reload();
                    }else{
                        alert(jsonObj.msg);
                        curSeg.unlockLogin();
                    }
                    break;
                case -22://便利通、中软开户 失败
                    if(jsonObj && jsonObj.KHBZ == "W"){
                        alert("登录失败.");
                        // alert("您的登记信息存在重复，请到大厅处理！");
                        curSeg.unlockLogin();
                        break;
                    }else{
                        alert(jsonObj.msg);
                        curSeg.unlockLogin();
                        break;
                    }
                case -23:
                    //系统查询到数据 但是校验不通过 如:用户名密码错误 返回前台
                    alert(jsonObj.msg);
                    curSeg.unlockLogin();
                    re_yh=null;
                    //判断是否连续三次错误
                    if(jsonObj.is_show_tpyzm!=undefined&&jsonObj.is_show_tpyzm=='Y'){
                        $("#dxdl_yzm1").css("display","block");
                        $("#dxdl_pic_code").attr('src', jcptTools.cnf.contextPath + '/cm/showPictureCode.do?flag=dxdl_yzm&t=' + Math.random());
                    }else{
                        $("#dxdl_yzm1").css("display","none");
                    }
                    break;
                case -101:
                    //图片验证码错误
                    alert(jsonObj.msg);
                    curSeg.unlockLogin();
                    re_yh=null;
                    $("#dxdl_pic_code").attr('src', jcptTools.cnf.contextPath + '/cm/showPictureCode.do?flag=dxdl_yzm&t=' + Math.random());
                    break;
                default:
                    curSeg.unlockLogin();

            }
        },
        //1.4短信登陆 真正的登陆
        pageFlowControl_dx_login: function (jsonObj, xhrArgs) {
            //登录返回清空账号密码，启用登录按钮、输入框
            // var zh = $(":input[name='USER_ZH']").val();
            jcptTools.countDownClean($obj_dxdl_login, timerReg_dxdl_login, "登  录");
            switch (parseInt(jsonObj.code)) {
                case 1:
                    var gsxxData;
                    dzswjCommon.setCookieCddwGzfw("DXDL_CADL");
                    // jcptTools.setCookieJsonObjLogin(jsonObj.JCPT_USER);
                    // if (jcptTools.setCookieJsonObjLogin(jsonObj.data)) {
                    if (jcptTools.setCookieJsonObjLogin(jsonObj.JCPT_USER)) {
                        //检查成功同时国税认证成功：jsonObj.data有数据是国税认证成功的标志
                        //写在此处是为了写一次cookie
                        gsxxData = jsonObj.data;
                        jcptTools.setCookie('CUR_USERID', gsxxData.USERID);
                        jcptTools.setCookie("USER_SEQ", gsxxData.USERID);
                        jcptTools.setCookie("DJXH", gsxxData.DJXH);
                        jcptTools.setCookie("DJZCLX_DM", gsxxData.DJZCLX_DM);
                        // 登录的账号
                        jcptTools.setCookie("USER_CODE", jsonObj.loginname);
                        // 删除弱口令标志
                        jcptTools.delCookie("RKLBZ");
                        //记录签名数据，后面跳转地税网厅需要使用
                        /*jcptTools.setCookie("randomData", random);
                        jcptTools.setCookie("signData", signdata);
                        jcptTools.setCookie("signcert", signcert);
                        jcptTools.setCookie("cert_hnOrhnxa", Cert_HnOrHnxa);
                        jcptTools.setCookie("caNsrsbh", CertCN);*/

                        //以下为网厅使用cookie
                        //电子档案号
                        jcptTools.setCookie("NSRDZDAH", gsxxData.NSRDZDAH);
                        //法定代表人名称
                        jcptTools.setCookie("FDDBRMC", gsxxData.FDDBRMC);
                        //办税员名称
                        jcptTools.setCookie("BSRMC", gsxxData.BSRMC);
                        //办税员手机号码
                        jcptTools.setCookie("BSR_YDDHHM", gsxxData.BSR_YDDHHM);
                        //生产经营地址
                        jcptTools.setCookie("SCJYDZ", gsxxData.SCJYDZ);
                    }
                    // 检查成功且纳税人存在
                    if (jsonObj.data && jsonObj.data.NSRSBH) {
                        $("#nsrsbh").val(jsonObj.data.NSRSBH);
                        $("#shxydm").val(jsonObj.data.SHXYDM);
                        $("#ssdabh").val(jsonObj.data.SSDABH);
                    }
                    //登录后清除value值
                    $(".wep_form input.clearInput").val("");
                    layui.use('form', function () {
                        var form = layui.form;
                        form.render();

                        $('#sfcx').find('input').val("请选择登录身份");
                        $('#sfhm').find('input').val("请选择手机号码");
                    })

                    //显示选择入口界面
                    // $(".login_box").hide();

                    curSeg.unlockLogin();
                    //增加单管户 提示
                    var ghlx = jcptTools.getUserDataByKey("GHLX");
                    if(ghlx == "2" || ghlx == "3"){
                        alert("您的登记信息存在不一致的情况，请及时去大厅办理互通手续");
                    }

                    if (window.location.href.indexOf(mhHtmlIndex) > -1 || window.location.href.indexOf(mh_khdHtmlIndex) > -1) {
                        //有值并且是上边的三个按钮 跳转到主页面
                        var pid = dzswjCommon.getCookieCddwByStr("PID");
                        if(pid && mhToMainPId.indexOf(pid) != -1) {
                            jcptTools.OpenModel(jcptTools.getMain());
                        }else{
                            jcptTools.OpenModel(jcptTools.getLoginIndex());
                        }
                    } else {
                        window.location.reload();
                    }

                    //写在最后不怕前面报错
                    baseTools.setCookie("loginFlag", "true");
                    load.closeLoading();
                    jcptTools.closeAllLayer();
                    break;
                case -1: //登录失败
                    jcptTools.clearAllCookie();
                    alert(jsonObj.msg);
                    curSeg.unlockLogin();
                    load.closeLoading();
                    break;
                case -3: // session 失效请重新登录
                    jcptTools.clearAllCookie();
                    alert(jsonObj.msg);
                    window.location = jcptTools.getLogin();
                    break;
                case -4: // 验证码错误
                    alert(jsonObj.msg);
                    curSeg.unlockLogin();
                    load.closeLoading();
                    break;
                default:
                    curSeg.unlockLogin();
                    load.closeLoading();
            }
        },
        //2.1数字证书登陆回调
        pageFlowControl_IA: function (jsonObj, xhrArgs) {
            load.closeLoading();
            //登录返回清空账号密码，启用登录按钮、输入框
            switch (parseInt(jsonObj.code)) {
                case 1:
                    var gsxxData;
                    dzswjCommon.setCookieCddwGzfw("DXDL_CADL");
                    // jcptTools.setCookieJsonObjLogin(jsonObj.JCPT_USER);
                    // if (jcptTools.setCookieJsonObjLogin(jsonObj.data)) {
                    if (jcptTools.setCookieJsonObjLogin(jsonObj.JCPT_USER)) {
                        //检查成功同时国税认证成功：jsonObj.data有数据是国税认证成功的标志
                        //写在此处是为了写一次cookie
                        gsxxData = jsonObj.data;
                        jcptTools.setCookie('CUR_USERID', gsxxData.USERID);
                        jcptTools.setCookie("USER_SEQ", gsxxData.USERID);
                        jcptTools.setCookie("DJXH", gsxxData.DJXH);
                        jcptTools.setCookie("DJZCLX_DM", gsxxData.DJZCLX_DM);
                        // 登录的账号
                        // jcptTools.setCookie("USER_CODE", $(":input[name='USER_ZH']").val().trim());
                        jcptTools.setCookie("USER_CODE", jsonObj.loginname);
                        // 删除弱口令标志
                        jcptTools.delCookie("RKLBZ");
                        //记录签名数据，后面跳转地税网厅需要使用
                        // jcptTools.setCookie("randomData", random);
                        // jcptTools.setCookie("signData", signdata);
                        // jcptTools.setCookie("signcert", signcert);
                        // jcptTools.setCookie("cert_hnOrhnxa", Cert_HnOrHnxa);
                        // jcptTools.setCookie("caNsrsbh", CertCN);

                        //以下为网厅使用cookie
                        //电子档案号
                        jcptTools.setCookie("NSRDZDAH", gsxxData.NSRDZDAH);
                        //法定代表人名称
                        jcptTools.setCookie("FDDBRMC", gsxxData.FDDBRMC);
                        //办税员名称
                        jcptTools.setCookie("BSRMC", gsxxData.BSRMC);
                        //办税员手机号码
                        jcptTools.setCookie("BSR_YDDHHM", gsxxData.BSR_YDDHHM);
                        //生产经营地址
                        jcptTools.setCookie("SCJYDZ", gsxxData.SCJYDZ);
                    }
                    // 检查成功且纳税人存在
                    // if (jsonObj.data && jsonObj.data.NSRSBH) {
                    //     $("#nsrsbh").val(jsonObj.data.NSRSBH);
                    //     $("#shxydm").val(jsonObj.data.SHXYDM);
                    //     $("#ssdabh").val(jsonObj.data.SSDABH);
                    // }


                    //登录后清除value值
                    /*$(".wep_form input.clearInput").val("");
                    layui.use('form', function () {
                        var form = layui.form;
                        form.render();

                        $('#sfcx').find('input').val("请选择登录身份");
                        $('#sfhm').find('input').val("请选择手机号码");
                    })*/

                    //显示选择入口界面
                    // $(".login_box").hide();

                    curSeg.unlockLogin();

                    //增加单管户 提示
                    var ghlx = jcptTools.getUserDataByKey("GHLX");
                    if(ghlx == "2" || ghlx == "3"){
                        alert("您的登记信息存在不一致的情况，请及时去大厅办理互通手续");
                    }

                    if (window.location.href.indexOf(mhHtmlIndex) > -1 || window.location.href.indexOf(mh_khdHtmlIndex) > -1) {
                        //有值并且是上边的三个按钮 跳转到主页面
                        var pid = dzswjCommon.getCookieCddwByStr("PID");
                        if(pid && mhToMainPId.indexOf(pid) != -1) {
                            jcptTools.OpenModel(jcptTools.getMain());
                        }else{
                            jcptTools.OpenModel(jcptTools.getLoginIndex());
                        }
                    } else {
                        window.location.reload();
                    }

                    //写在最后不怕前面报错
                    baseTools.setCookie("loginFlag", "true");
                    load.closeLoading();
                    jcptTools.closeAllLayer();
                    break;
                case -1: //登录失败
                    alert(jsonObj.msg);
                    index_gds.unlockLogin();
                    break;
                case -3: // session 失效请重新登录
                    jcptTools.clearAllCookie();
                    alert(jsonObj.msg);
                    window.location = 'index.html';
                    break;
                case -5: //弱密码类型
                    jcptTools.setCookieJsonObjLogin(jsonObj.data);
                    alert(jsonObj.msg);
                    window.location.href = "up_qyyh_pwd.html";
                    break;
                case -16://金三账号不存在
                    alert(jsonObj.msg);
                    curSeg.unlockLogin();
                    break;
                case -21://平台自动开户 else
                    if(jsonObj.KHBZ == "Y"){
                        alert("您已成功开通广西壮族自治区电子税务局！短信登陆时，默认密码为Aa加社会信用代码后8位");
                        window.location.reload();
                    }else if(jsonObj.KHBZ == "Z") {
                        alert("未找到有效用户信息，请确认纳税人识别号或社会信用代码是否错误？账号无误请使用左下角《新办纳税人套餐》功能进行相关业务办理！");
                        // window.location.reload();
                    }else if(jsonObj.KHBZ == "W") {
                        alert("登录失败.");
                        // alert("您的登记信息存在重复，请到大厅处理！");
                        // window.location.reload();
                    }else{
                        alert(jsonObj.msg);
                        curSeg.unlockLogin();
                    }
                    break;
                case -22://便利通、中软开户 失败
                    if(jsonObj && jsonObj.KHBZ == "W"){
                        alert("登录失败.");
                        // alert("您的登记信息存在重复，请到大厅处理！");
                        curSeg.unlockLogin();
                        break;
                    }else{
                        alert(jsonObj.msg);
                        curSeg.unlockLogin();
                        break;
                    }
                case -23:
                    //系统查询到数据 但是校验不通过 如:用户名密码错误 返回前台
                    alert(jsonObj.msg);
                    curSeg.unlockLogin();
                    break;
                case -24:
                    //税控盘验签失败
                    alert(jsonObj.msg);
                    curSeg.unlockLogin();
                    break;
                case -25:
                    //后台异常
                    alert(jsonObj.msg);
                    curSeg.unlockLogin();
                    break;
                default:
                    curSeg.unlockLogin();
            }
        },
        //4.2个人登陆回调
        pageFlowControl_gr: function (jsonObj, xhrArgs) {
            jcptTools.countDownClean($obj_zrr_login, timerReg_zrr_login, "登  录");
            switch (parseInt(jsonObj.code)) {
                // 查询操作返回标志
                case 1:
                    dzswjCommon.setCookieCddwGzfw("XGRDL");
                    jcptTools.setCookieJsonObjLogin(jsonObj.JCPT_USER);
                    jcptTools.setCookie("USER_SEQ", "-1");

                    // taxClientTools.setCookieJsonObjLogin(jsonObj.data);
                    if (jsonObj.data && jsonObj.data.CS_DLLX == "GRYH") {
                        //判断是在mh.html还是login_index.html
                        if (window.location.href.indexOf(mhHtmlIndex) > -1  || window.location.href.indexOf(mh_khdHtmlIndex) > -1) {
                            //有值并且是上边的三个按钮 跳转到主页面
                            var pid = dzswjCommon.getCookieCddwByStr("PID");
                            if(pid && mhToMainPId.indexOf(pid) != -1) {
                                if(pid == "75016") {//个人 个性服务
                                    mh.qyidConvertGrid();//转换企业id为个人id
                                    jcptTools.OpenModel(jcptTools.getLoginIndex());
                                }else{
                                    mh.qyidConvertGrid();//转换企业id为个人id
                                    jcptTools.OpenModel(jcptTools.getMainZrr());
                                }
                            }else{
                                mh.qyidConvertGrid();//转换企业id为个人id
                                jcptTools.OpenModel(jcptTools.getLoginIndex());
                            }
                        } else {
                            window.location.reload();
                        }
                    } else {
                        if (window.location.href.indexOf(mhHtmlIndex) > -1  || window.location.href.indexOf(mh_khdHtmlIndex) > -1) {
                            //有值并且是上边的三个按钮 跳转到主页面
                            var pid = dzswjCommon.getCookieCddwByStr("PID");
                            if(pid && mhToMainPId.indexOf(pid) != -1) {
                                jcptTools.OpenModel(jcptTools.getMainZrr());
                            }else{
                                jcptTools.OpenModel(jcptTools.getLoginIndex());
                            }
                        } else {
                            window.location.reload();

                        }
                    }
                    load.closeLoading();
                    jcptTools.closeAllLayer();
                    break;
                // 在线帮助
                case 6:
                    break;
                case -1: // 保存出错返回标志
                    jcptTools.msg(jsonObj.msg);
                    load.closeLoading();
                    break;
                case -2: // 其它错误返回标志
                case -4: // 校验码出错返回标志
                    jcptTools.msg(jsonObj.msg);
                    load.closeLoading();
                    break;
                case -3: // session 失效请重新登录
                    jcptTools.msg(jsonObj.msg);
                    window.location = jcptTools.getLogin();
                    break;
                default:
                    load.closeLoading();
            }
        },
        //3.1报验户登陆
        pageFlowControl_byh: function (jsonObj, xhrArgs) {
            jcptTools.countDownClean($obj_byh_login, timerReg_byh_login, "登  录");
            switch (parseInt(jsonObj.code)) {
                case -11://数据库中无此数据
                    alert(jsonObj.msg);
                    curSeg.unlockLogin();
                    load.closeLoading();
                    break;
                case -12://校验不通过 如账号锁定 密码错误
                    alert(jsonObj.msg);
                    curSeg.unlockLogin();
                    load.closeLoading();
                    break;
                case -1://异常
                    alert(jsonObj.msg);
                    curSeg.unlockLogin();
                    load.closeLoading();
                    break;
                case 1:
                    var gsxxData;
                    if (jcptTools.setCookieJsonObjLogin(jsonObj.JCPT_USER)) {
                        //检查成功同时国税认证成功：jsonObj.data有数据是国税认证成功的标志
                        //写在此处是为了写一次cookie
                        gsxxData = jsonObj.data;
                        jcptTools.setCookie('CUR_USERID', gsxxData.USERID);
                        jcptTools.setCookie("USER_SEQ", gsxxData.USERID);
                        jcptTools.setCookie("DJXH", gsxxData.DJXH);
                        jcptTools.setCookie("DJZCLX_DM", gsxxData.DJZCLX_DM);
                        // 登录的账号
                        jcptTools.setCookie("USER_CODE", $(":input[name='USER_ZH']").val().trim());
                        // 删除弱口令标志
                        jcptTools.delCookie("RKLBZ");

                        //以下为网厅使用cookie
                        //电子档案号
                        jcptTools.setCookie("NSRDZDAH", gsxxData.NSRDZDAH);
                        //法定代表人名称
                        jcptTools.setCookie("FDDBRMC", gsxxData.FDDBRMC);
                        //办税员名称
                        jcptTools.setCookie("BSRMC", gsxxData.BSRMC);
                        //办税员手机号码
                        jcptTools.setCookie("BSR_YDDHHM", gsxxData.BSR_YDDHHM);
                        //生产经营地址
                        jcptTools.setCookie("SCJYDZ", gsxxData.SCJYDZ);
                    }
                    // 检查成功且纳税人存在
                    /*if (jsonObj.data && jsonObj.data.NSRSBH) {
                        $("#nsrsbh").val(jsonObj.data.NSRSBH);
                        $("#shxydm").val(jsonObj.data.SHXYDM);
                        $("#ssdabh").val(jsonObj.data.SSDABH);
                    }*/

                    //登录后清除value值
                    $(".wep_form input.clearInput").val("");

                    //显示选择入口界面
                    $(".login_box").hide();
                    curSeg.unlockLogin();

                    //报验户 直接跳转到main页面
                    //判断是在mh.html还是login_index.html
                    if (window.location.href.indexOf(mhHtmlIndex) > -1 || window.location.href.indexOf(mh_khdHtmlIndex) > -1) {
                        jcptTools.OpenModel(jcptTools.getMain());
                    } else {
                        window.location.reload();
                    }

                    //写在最后不怕前面报错
                    baseTools.setCookie("loginFlag", "true");
                    load.closeLoading();
                    jcptTools.closeAllLayer();
                    break;
                case -3: // session 失效请重新登录
                    jcptTools.clearAllCookie();
                    alert(jsonObj.msg);
                    window.location = jcptTools.getLogin();
                    break;
                case -5: //弱密码类型
                    jcptTools.setCookieJsonObjLogin(jsonObj.JCPT_USER);
                    alert(jsonObj.msg);
                    window.location.href = "up_qyyh_pwd.html";
                    break;
                default:
                    alert(jsonObj.msg);
                    curSeg.unlockLogin();
                    load.closeLoading();
                    return;
            }
        },








        /*登录前判断环境监测是否通过*/
        judgeAlert:function (){
            if(index_gds.judgeSys()[1] && index_gds.judgeExplore()[1]){
                try {
                    if (document.getElementById('Dcellweb1').AllowCopy) {
                        return true;
                    }else{
                        return false;

                    }
                } catch (error) {
                    return false;
                }

            }else{
                return false;
            }
        },
        /*登录环境监测不通过提醒*/
        dlTip:function(type){
            if(index_gds.judgeAlert()==true){
                if(type=="1"){
                    index_gds.onDxLogin();
                }else if(type=="2"){
                    onSkpLogin1();
                }else if(type=="3"){
                    byhdl.onLoginByh();
                }else if(type=="4"){
                    index_gds_new.onDxLogin();
                }else if(type=="5"){
                    index_gds_new.onDxLogin_new();
                }else{
                    index_gds.onGrLogin();
                }
            }else{
                layer.confirm('<p class="airTest">检测到客户环境未通过,请先下载环境检测工具进行检测并修复！<a class="airTestDown" href="'+window.downloadPath+'/download/setupfix.zip" target="_blank">下载</a>环境监测工具</p>', {
                    btn: ['确定'],
                    offset:'200px',
                    end:function(){
                        if(type=="1"){
                            index_gds.onDxLogin();
                        }else if(type=="2"){
                            onSkpLogin1();
                        }else if(type=="3"){
                            byhdl.onLoginByh();
                        }else if(type=="4"){
                            index_gds_new.onDxLogin();
                        }else if(type=="5"){
                            index_gds_new.onDxLogin_new();
                        }else{
                            index_gds.onGrLogin();
                        }
                    }
                })
            }
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
        //数据证书登陆环境检测
        szzsJC: function () {
            //判断是否安装税控盘控件
            document.getElementById("getyqsj").contentWindow.GetCertificate1();
            sta1 = $("#wep_form_iadl").find("input[name='sta1']").val().trim();
            szzstx = "数字证书登录是电子税务局新提供的一种登录方式，您可以插入税控盘或者金税盘直接登录，密码是税务数字证书密码。\n" +
                "\t\t\t\t\t\t\t\t首次使用数字证书登录前需要<a href=\"https://share.weiyun.com/56zT3x1\" target=\"_blank\" style=\"color:#0090ff;text-decoration: underline\">&nbsp;下载&nbsp;</a>安装数字证书服务及设备驱动。<br/>";

            if(sta1=='0'){
                //税控盘
                var filePath1="C:\\Program Files (x86)\\NISEC\\NISEC_Tool.exe";
                //金税盘
                //var filePath2="C:\\Program Files (x86)\\AisinoCSP\\CertManager.exe";
                var filePath2="C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\金报税盘税务数字证书管理工具\\卸载.lnk";
                var isie = index_gds.IEVersion();
                if(isie != "-1"){
                    try {
                        var newObj=new ActiveXObject("Scripting.FileSystemObject");
                        if(!newObj.FileExists(filePath1) && !newObj.FileExists(filePath2) && !newObj.FileExists(filePath3) && !newObj.FileExists(filePath4)){
                            szzstx = szzstx +"&nbsp; &nbsp; &nbsp; &nbsp; 系统检测到您本地电脑尚未安装数字证书服务及设备驱动。<br/>" +
                                "&nbsp; &nbsp; &nbsp; &nbsp; 1、如果您使用的是税控盘，需要安装“数字证书服务”及“税控盘税务数字证书驱动”； <br/> "  +
                                "&nbsp; &nbsp; &nbsp; &nbsp; 2、如果您使用的是金税盘，需要安装“数字证书服务”及“金报税盘税务数字证书驱动”。";
                        }else if(newObj.FileExists(filePath1) && !newObj.FileExists(filePath2) && !newObj.FileExists(filePath3) && !newObj.FileExists(filePath4)){
                            szzstx = szzstx +"&nbsp; &nbsp; &nbsp; &nbsp;   系统检测到您本地电脑已安装“税控盘税务数字证书驱动”，未安装“数字证书服务”及“金报税盘税务数字证书驱动”。 <br/>" +
                                "&nbsp; &nbsp; &nbsp; &nbsp; 1、如果您使用的是税控盘，只需再安装“数字证书服务”； <br/>" +
                                "&nbsp; &nbsp; &nbsp; &nbsp; 2、如果您使用的是金税盘，需要再安装“数字证书服务”及“金报税盘税务数字证书驱动”。";
                        }else if(!newObj.FileExists(filePath1) && (newObj.FileExists(filePath2) || newObj.FileExists(filePath3) || newObj.FileExists(filePath4))){
                            szzstx = szzstx +"&nbsp; &nbsp; &nbsp; &nbsp;   系统检测到您本地电脑已安装“金报税盘税务数字证书驱动”，未安装“数字证书服务”及“金报税盘税务数字证书驱动”。 <br/>" +
                                "&nbsp; &nbsp; &nbsp; &nbsp; 1、如果您使用的是金税盘，只需再安装“数字证书服务”； <br/>" +
                                "&nbsp; &nbsp; &nbsp; &nbsp; 2、如果您使用的是税控盘，需要再安装“数字证书服务”及“税控盘税务数字证书驱动”。";
                        }else if(newObj.FileExists(filePath1) && (newObj.FileExists(filePath2) || newObj.FileExists(filePath3) || newObj.FileExists(filePath4))){
                            szzstx = szzstx +"&nbsp; &nbsp; &nbsp; &nbsp;   系统检测到您本地电脑已安装设备驱动，未安装“数字证书服务”。" +
                                "请安装“数字证书服务”后登陆系统。";
                        }else{
                            szzstx = szzstx +"&nbsp; &nbsp; &nbsp; &nbsp;     系统检测到您本地电脑尚未安装“数字证书服务”。<br/>" +
                                "&nbsp; &nbsp; &nbsp; &nbsp; 1、如果您使用的是税控盘，需要安装“数字证书服务”及“税控盘税务数字证书驱动”； <br/> "  +
                                "&nbsp; &nbsp; &nbsp; &nbsp; 2、如果您使用的是金税盘，需要安装“数字证书服务”及“金报税盘税务数字证书驱动”。";
                        }
                    }catch (e) {
                        szzstx = szzstx +"&nbsp; &nbsp; &nbsp; &nbsp;     系统检测到您本地电脑尚未安装“数字证书服务”。<br/>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; 1、如果您使用的是税控盘，需要安装“数字证书服务”及“税控盘税务数字证书驱动”； <br/> "  +
                            "&nbsp; &nbsp; &nbsp; &nbsp; 2、如果您使用的是金税盘，需要安装“数字证书服务”及“金报税盘税务数字证书驱动”。";
                    }

                }else{
                    szzstx = szzstx +"&nbsp; &nbsp; &nbsp; &nbsp;     系统检测到您本地电脑尚未安装“数字证书服务”。<br/>" +
                        "&nbsp; &nbsp; &nbsp; &nbsp; 1、如果您使用的是税控盘，需要安装“数字证书服务”及“税控盘税务数字证书驱动”； <br/> "  +
                        "&nbsp; &nbsp; &nbsp; &nbsp; 2、如果您使用的是金税盘，需要安装“数字证书服务”及“金报税盘税务数字证书驱动”。";
                }
            }else if(sta1=='455'){
                //税控盘
                var filePath1="C:\\Program Files (x86)\\NISEC\\NISEC_Tool.exe";
                //金税盘
                var filePath2="C:\\Program Files (x86)\\AisinoCSP\\CertManager.exe";
                var filePath3="C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\金报税盘税务数字证书管理工具\\卸载.lnk";
                var filePath4="C:\\Users\\aa\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\金报税盘税务数字证书管理工具\\卸载.lnk";
                var isie = index_gds.IEVersion();
                // if(isie != "-1") {
                //     var newObj = new ActiveXObject("Scripting.FileSystemObject");
                //     if (!newObj.FileExists(filePath1)) {
                //         alert("缺少税控盘驱动！");
                //     } else {
                //         alert("已安装税控盘驱动！");
                //     }
                //     if (!newObj.FileExists(filePath2)) {
                //         alert("缺少金税盘驱动！");
                //     } else {
                //         alert("已安装金税盘驱动！");
                //     }
                // }else{
                //     alert("缺少税控盘或金税盘设备驱动！");
                // }
                if(isie != "-1"){
                    try{
                        var newObj=new ActiveXObject("Scripting.FileSystemObject");
                        if(!newObj.FileExists(filePath1) && !newObj.FileExists(filePath2) && !newObj.FileExists(filePath3) && !newObj.FileExists(filePath4)){
                            szzstx = szzstx +"&nbsp; &nbsp; &nbsp; &nbsp;  系统检测到您本地电脑尚未安装设备驱动。 <br/>" +
                                "&nbsp; &nbsp; &nbsp; &nbsp; 1、如果您使用的是税控盘，需要再安装“税控盘税务数字证书驱动”；<br/>"  +
                                "&nbsp; &nbsp; &nbsp; &nbsp; 2、如果您使用的是金税盘，需要再安装“金报税盘税务数字证书驱动”。";
                        }else if(newObj.FileExists(filePath1) && !newObj.FileExists(filePath2) && !newObj.FileExists(filePath3) && !newObj.FileExists(filePath4)){
                            szzstx = szzstx +"&nbsp; &nbsp; &nbsp; &nbsp;   系统检测到您本地电脑已安装“数字证书服务”和“税控盘税务数字证书驱动”，未安装“金报税盘税务数字证书驱动”。 <br/>" +
                                "&nbsp; &nbsp; &nbsp; &nbsp; 1、如果您使用的是税控盘，可直接登陆系统; <br/>" +
                                "&nbsp; &nbsp; &nbsp; &nbsp; 2、如果您使用的是金税盘，需要再安装“金报税盘税务数字证书驱动”。";
                        }else if(!newObj.FileExists(filePath1) && (newObj.FileExists(filePath2) || newObj.FileExists(filePath3) || newObj.FileExists(filePath4))) {
                            szzstx = szzstx +"&nbsp; &nbsp; &nbsp; &nbsp;   系统检测到您本地电脑已安装“数字证书服务”和“金报税盘税务数字证书驱动”，未安装“税控盘税务数字证书驱动”。 <br/>" +
                                "&nbsp; &nbsp; &nbsp; &nbsp; 1、如果您使用的是金税盘，可直接登陆系统; <br/>" +
                                "&nbsp; &nbsp; &nbsp; &nbsp; 2、如果您使用的是税控盘，需要再安装“税控盘税务数字证书驱动”。";
                        }else if(newObj.FileExists(filePath1) && (newObj.FileExists(filePath2) || newObj.FileExists(filePath3) || newObj.FileExists(filePath4))){
                            szzstx = szzstx +"&nbsp; &nbsp; &nbsp; &nbsp;   系统检测到您本地电脑已安装“数字证书服务”、“税控盘税务数字证书驱动”、“金报税盘税务数字证书驱动”，不需要再安装服务或驱动。 <br/>" ;
                        }else{
                            szzstx = szzstx +"&nbsp; &nbsp; &nbsp; &nbsp;   系统检测到您本地电脑已安装“数字证书服务”，请确认设备驱动已安装后登陆系统。 <br/>" +
                                "&nbsp; &nbsp; &nbsp; &nbsp; 1、如果您使用税控盘登陆失败，请安装“税控盘税务数字证书驱动”后登陆系统;  <br/>" +
                                "&nbsp; &nbsp; &nbsp; &nbsp; 2、如果您使用金税盘登陆失败，请安装“金报税盘税务数字证书驱动”后登陆系统。";
                        }
                    }catch (e) {
                        szzstx = szzstx +"&nbsp; &nbsp; &nbsp; &nbsp;   系统检测到您本地电脑已安装“数字证书服务”，请确认设备驱动已安装后登陆系统。 <br/>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; 1、如果您使用税控盘登陆失败，请安装“税控盘税务数字证书驱动”后登陆系统;  <br/>" +
                            "&nbsp; &nbsp; &nbsp; &nbsp; 2、如果您使用金税盘登陆失败，请安装“金报税盘税务数字证书驱动”后登陆系统。";
                    }


                }else{
                    szzstx = szzstx +"&nbsp; &nbsp; &nbsp; &nbsp;    系统检测到您本地电脑已安装“数字证书服务”。 <br/>" +
                        "&nbsp; &nbsp; &nbsp; &nbsp; 1、如果您使用税控盘登陆失败，请安装“税控盘税务数字证书驱动”后登陆系统;  <br/>" +
                        "&nbsp; &nbsp; &nbsp; &nbsp; 2、如果您使用金税盘登陆失败，请安装“金报税盘税务数字证书驱动”后登陆系统。";
                }
            }
            $("#szzstx").html(szzstx);
        },

        zzaz : function () {
            try {
                var certEnroll = document.getElementById("objCertEnrollClassFactory");
                var objRoll = certEnroll.CreateObject("X509Enrollment.CX509Enrollment");
                if(objRoll == null || objRoll==''){
                    alert('证书安装出错，请在电子税务局首页下载“电子税务局安全证书安装包”并按照指引手动导入证书')
                }
                var str = "MIII5AYJKoZIhvcNAQcCoIII1TCCCNECAQExADALBgkqhkiG9w0BBwGgggi5MIIEZDCCA0ygAwIBAgIGAgAAAAAzMA0GCSqGSIb3DQEBBQUAMEExCzAJBgNVBAYTAmNuMRUwEwYDVQQLHgxW/Vu2eg5SoWA7XEAxGzAZBgNVBAMeEnoOUqF1NVtQi8FOZk4AfqdoOTAeFw0wODAxMTAwMDAwMDBaFw0zODAxMTAwMDAwMDBaMF4xCzAJBgNVBAYTAmNuMRUwEwYDVQQLHgxW/Vu2eg5SoWA7XEAxHTAbBgNVBAMeFHoOUqF1NVtQi8FOZnuhdAZOLV/DMRkwFwYDVQQNHhAAYwBhADEAMAAwADAAMAAyMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCQp6drzsDpzJfzeC8/4BFQTYm/wgInw1AjE9ePHPN/ZYIGBJDYha1T/8liHg8PibjZD7f7iI2UBlgbyTD9NediQYjYHXAwwX4LdwtzBim46NFfV5eJ2UAXYcTVsSTjq8GAI9wnZ+emENsv35oLPeo93PlqLqgep0BUBhFynFI2OQIDAQABo4IBxzCCAcMwEQYJYIZIAYb4QgEBBAQDAgEGMA4GA1UdDwEB/wQEAwIA/zASBgNVHRMBAf8ECDAGAQH/AgEBMB8GA1UdIwQYMBaAFN0tHitOJfBKisnOpW/PDBAmSrPnMB0GA1UdDgQWBBT17HjlKlYJ6oindEAwlfW4HB4yJjATBgkrBgEEAYI3FAIEBh4EAEMAQTBEBgkqhkiG9w0BCQ8ENzA1MA4GCCqGSIb3DQMCAgIAgDAOBggqhkiG9w0DBAICAIAwBwYFKw4DAgcwCgYIKoZIhvcNAwcwcAYDVR0fBGkwZzBloGOgYYZfbGRhcDovLzEwMC4xNi4xMDAuNTE6Mzg5L2NuPWNhY3JsLG91PWNhY3JsLG91PWNybCxjPWNuP2NlcnRpZmljYXRlcmV2b2NhdGlvbmxpc3Q/c3ViPyhjbj1jYWNybCkwGgYKKwYBBAGpQ2QFBgQMFgpDMDAwMDAwMDEyMBoGCisGAQQBqUNkBQkEDBYKQzAwMDAwMDAxMjASBgorBgEEAalDZAIEBAQWAkNBMBEGCisGAQQBqUNkAgEEAxYBMzAeBghghkgBhvhDCQQSFhAwMDAwMDAwMDAwMDAwMDI2MA0GCSqGSIb3DQEBBQUAA4IBAQAtSDsD12MP7yOlyZ+Ka0/LeKIcyLqU/J4XIvkrp8BwlSACV2a2fii9QudmtM6WQQhVNFaVSGryS3BGkJlLBO34iZ+9jKLhv/oy+WbxIyy8Q7KCMKgJkoEBf3JLKTUY+LpUkDJVyeV70qWGiw+7FWwsO2Pyfq0lTiV06OUvSeUpFijMC7T90SOkc6en5pkC4jesgDxawqni9ZnoCroVg4XVOgxzWs7kE95NwQRKzNc6C0iAWwmwu2PBW1ax6tyDeTJ4wnxOZU7CB844WSieqGVFtQnimpe4T5lYrKgIcFij/baYeVH04DsLXbQgTc/dcEx+LUU3fHWzQ0cCdk9/hQAJMIIETTCCAzWgAwIBAgIGAgAAAAAfMA0GCSqGSIb3DQEBBQUAMEExCzAJBgNVBAYTAmNuMRUwEwYDVQQLHgxW/Vu2eg5SoWA7XEAxGzAZBgNVBAMeEnoOUqF1NVtQi8FOZk4AfqdoOTAeFw0wNjEyMjIwMDAwMDBaFw0zODEyMjIwMDAwMDBaMEExCzAJBgNVBAYTAmNuMRUwEwYDVQQLHgxW/Vu2eg5SoWA7XEAxGzAZBgNVBAMeEnoOUqF1NVtQi8FOZk4AfqdoOTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANWrPRA/6vtVL8XXWdV+LPPArVGDHUKubZETkGk1EDhlFf3Uf+2VCzYvgKvSudtoyXqfYpAGd2DFkDkks4ill2pLIE41AntwivBIDix4BfwnLwi2grWgevP4upxFjD1PxthZlzt/d15ix+IWN3ZyGmjbWyLay/7qzTsqMe4UKRVMdQjCb8xv3LzaRRCfa9ew5OeUcSFXZSj49vZZCDN6efqXCSaQ1opwYtnsqnaqlak3vpFoDEAIa4HmVbd2qTtLPzyHxjtly/KPje6MOeTO4PIQYkU+Ca7k6+MatQeZe5S6lnQgj1PsirsgA+xshpQ6ccLIKxfpN/YDvjuu+N3JtG8CAwEAAaOCAUkwggFFMBEGCWCGSAGG+EIBAQQEAwIBBjAOBgNVHQ8BAf8EBAMCAP8wDwYDVR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAWgBTdLR4rTiXwSorJzqVvzwwQJkqz5zAdBgNVHQ4EFgQU3S0eK04l8EqKyc6lb88MECZKs+cwEwYJKwYBBAGCNxQCBAYeBABDAEEwRAYJKoZIhvcNAQkPBDcwNTAOBggqhkiG9w0DAgICAIAwDgYIKoZIhvcNAwQCAgCAMAcGBSsOAwIHMAoGCCqGSIb3DQMHMBUGCisGAQQBqUNkBQYEBxYFUzEwMTIwFQYKKwYBBAGpQ2QFCQQHFgVTMTAxMjASBgorBgEEAalDZAIEBAQWAkNBMBIGCisGAQQBqUNkAgEEBBYCMDEwHgYIYIZIAYb4QwkEEhYQMDAwMDAwMDAwMDAwMDAxNjANBgkqhkiG9w0BAQUFAAOCAQEAjbuEjnqjDwP4gzO4pxXExqVwZQJdBg+Q9Hz4B9rE4uWM/9lmgyjleoQQGGJzGLkm7ktc8c2Mm4ZVN2KhumdDTjpZ9OBbx8CjQFpC4ozk6TrboN4LBIHPxK8UjeS+1zt8IwM+tBLVLMjrcjyJ8kPy+dp/f943UN3+xStrhXHtCI2jeTiEoU369Ho1IoPH7byDJCmBVGjA89iZX4e68ykaGg5FS7pzBvhZnINxsL2s0VnfeHKoSEjSr48eQeNSE3X8QbLiM8Z83+cnoCKUei9fTa/yLnuQMooPUzwqQ8x+SvJUnS4wTyOWR9SFgw6D4ilHplvs4DU51gkt6VFkz26TjjEA";
                objRoll.Initialize(1);
                objRoll.InstallResponse(4,str,6,"");
                alert('证书安装已完成');
            }catch (ex) {
                alert('证书安装出错，请在电子税务局首页下载“电子税务局安全证书安装包”并按照指引手动导入证书!');
            }
        },

        //安装安全证书提醒
        alertBox3:function(dom,width,height){
            layui.use('layer', function(){
                var layer = layui.layer;
                var $ggtc = $("#httpstz_tx");
                // console.log($ggtc);
                layer.open({
                    type: 1,
                    title: "温馨提醒",
                    // anim: 2,
                    shade:0.5,
                    area: ["750px", "auto"],
                    shadeClose: false, //开启遮罩关闭
                    cancel: function() {
                        window.location.href="https://etax.guangxi.chinatax.gov.cn:9723/web/";
                    },
                    content: $ggtc,
                    btn: ['确定'],
                    yes: function (index) {
                        window.location.href="https://etax.guangxi.chinatax.gov.cn:9723/web/";
                    }
                });
                $ggtc.parents('.layui-layer').css({
                    'border': '#58b8f3 solid 8px'
                })
            });
        },

        IEVersion:function () {
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
            var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
            var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
            if(isIE) {
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp["$1"]);
                if(fIEVersion == 7) {
                    return 7;
                } else if(fIEVersion == 8) {
                    return 8;
                } else if(fIEVersion == 9) {
                    return 9;
                } else if(fIEVersion == 10) {
                    return 10;
                } else {
                    return 6;//IE版本<=7
                }
            } else if(isEdge) {
                return 'edge';//edge
            } else if(isIE11) {
                return 11; //IE11
            }else{
                return -1;//不是ie浏览器
            }
        },
        usernameBlur:function(obj){
            var zh = $("#wep_form_dxdl").find("input[name='USER_ZH']").val().trim();
            if(zh == '' ||　zh == 'null' || zh == undefined || zh.length < 5){
                alert('请输入正确的识别号码');
                return;
            }
            baseTools.xhrAjax({
                url: '/checkUsernameValid.do',
                bShow: false,
                async: true,
                params: {
                    USERNAME: zh
                },
                callback: [curSeg.checkUnameValidReturn]
            });
        },
        checkUnameValidReturn: function (jsonObj, xhrArgs) {
            if(jsonObj.code == -1){
                alert(jsonObj.msg);
            }
        }
    };
})();