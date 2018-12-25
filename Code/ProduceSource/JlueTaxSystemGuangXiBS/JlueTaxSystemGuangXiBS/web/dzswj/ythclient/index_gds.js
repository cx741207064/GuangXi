$(document).ready(function () {
	index_gds.onLoad();
	if(!jcptTools.getIsLogin()){
		$("#wep_form_cadl").find("input[name='USER_ZH']").val("123");
		$("#wep_form_cadl").find("input[name='USER_MM']").val("123456");
		index_gds.onLogin();
	}
});

function onCaChanged(p, w) {
	if (jcptTools.getCookie("loginFlag") && jcptTools.getCookie("QX_USER")) {
		return false;
	} else {
		$('.cover').show();
		$('.login_box').show();
		$('.companyLogin').show();
		$('.messageLogin').hide();
		$('.userLogin').hide();
		for (var i = 0; i < 3; i++) {
			if (i == 0) {
				$('.form_div ul li').eq(i).attr("class", "current");
			} else {
				$('.form_div ul li').eq(i).removeClass("current");
			}
		}
		$("input[name='USER_ZH']").val(p);
	}
}
/**
 * <ol>
 * date:2016-11-7 editor:gaoyixiao
 * </ol>
 */
var index_gds = (function () {
    //跳转到过度页面只存放Tid，跳转到主页存Tid Pid 所以 根据PID区分跳转到那个页面
	var mhToMainPId="75037,75038,75016,10001,75260,75261";//前三个是企业  后三个是个人
	//var mhHtmlIndex="mh.html";
    var mhHtmlIndex="index.html";
	var mh_khdHtmlIndex = "mh_khd.html";
    var _xmlhttp;
    //var _url = "http://jspt11.gxgs.gov.cn:25386";
	//var _url = "http://127.0.0.1:8089";
    var functionFlg = 0;
    //原文
    var rerand;
    //证书
    var base64cert;
    //签名
    var base64P7;
    //口令
    var pin;
	// 私有属性
	var curSeg, maskObj;
	var YXQZ, CertCN;
	var cakg = 'N';
	var CERTTYPE, signdata, signcert, Cert_HnOrHnxa, random, data;
	var timer = null;
	var re_yh = null;
	var re_zh = null;
	var dx_time = 0;
	var dl_time = 0;
	var zh, mm;
	var gtsdhbz = "";

	var byh_bz = false; //报验户标志
	var wssqUrl = window.location.host;
	// var dsjkUrl = taxClientTools.cnf.dswtURL;
	var titleMap = {
		"li_wsbs": "网上办税",
		"li_gsgg": "公示公告",
		"li_nszx": "纳税咨询",
		"li_sscx": "涉税查询",
		"li_zccx": "政策查询",
		"li_zlxz": "资料下载"
	};
	var gsUrlMap = {
		"li_wsbs": "gs网上办税",
		"li_gsgg": "/ythclient/gsgg.html",
		"li_nszx": "/ythclient/nszx.html",
		"li_sscx": "http://www.12366.ha.cn/003/bsfw_302/sscx_30202/index.html?NVG=2&LM_ID=30202",
		"li_zccx": "http://fgk.12366.ha.cn/guoshui/",
		"li_zlxz": "http://www.12366.ha.cn/003/bsfw_302/zlxz_30204/index.html?NVG=2&LM_ID=30204"
	};
	var dsUrlMap = {
		"li_wsbs": "ds网上办税",
		"li_gsgg": "http://www.ha-l-tax.gov.cn/viewCmsCac.do?cacId=ff8080814dbe16d8014ddb4a12c52357",
		"li_nszx": "http://218.28.41.134/hnww/ZssyBLH_toshouye.do",
		"li_sscx": "http://www.ha-l-tax.gov.cn/viewCmsCac.do?cacId=ff8080814dbe16d8014dfa6ced0772e3",
		"li_zccx": "http://www.ha-l-tax.gov.cn/viewCmsCac.do?cacId=ff8080813870bb2d01387937a1b32584",
		"li_zlxz": "http://www.ha-l-tax.gov.cn/viewCmsCac.do?cacId=ff8080813695180701369f5116bd02cd"
	};
	// 私有方法
	var initLayout = function () {
		//获取点击对象id
		var ywlx = baseTools.getUrlQueryString("ywlx");
		if (baseTools.getUrlQueryString("spt_check_url") == "htjs") {
			if (!baseTools.getCookie("spt_check_url")) {
				baseTools.setCookie("spt_check_url", "htjs");
			}
		}

		if (baseTools.getUrlQueryString("CATEGORY") && baseTools.getUrlQueryString("MOBILE")) {
			index_gds.onUserLoginOth();
		}

		if (ywlx != '') {
			var loginFlag = baseTools.getCookie("loginFlag");
			var QX_USER = baseTools.getCookie("QX_USER");
			if (ywlx == 'li_wsbs' && (loginFlag == null || QX_USER == null)) {
				$(".cover").show();
				$(".login_box").show();
			} else if (ywlx == 'li_wsbs' && loginFlag != null && QX_USER != null) {
				window.location = "wsbs.html";
			}
		}
		//添加样式
		$(".index_main li").hover(function () {
			$(this).addClass("lihover");
		}, function () {
			$(this).removeClass("lihover");
		});
		//关闭按钮事件
		$(".login_box").find(".close").on("click", function () {
			if (baseTools.getUrlQueryString("proWeb") == "fal") {
				window.opener = null;
				window.open('', '_self');
				window.close();
			} else {
				$(".cover").hide();
				$(".login_box").hide();
				baseTools.hideMash(maskObj);
			}

		});
		//导航图标事件
		$(".index_main li").on("click", function () {
			//初始化选择入口页面链接
			var liid = $(this).attr('id');
			var loginFlag = baseTools.getCookie("loginFlag");
			var QX_USER = baseTools.getCookie("QX_USER");
			if (liid == 'li_wsbs' && (loginFlag == null || QX_USER == null)) {
				if (baseTools.getCookie("spt_check_url") && baseTools.getCookie("spt_check_url") == "htjs") {
					window.location = "https://puser.hnzwfw.gov.cn:8083/login?client_id=bigapp&redirect_uri=http://jcpt.ha-n-tax.gov.cn/web/sptLogin.do&response_type=code&scope=openid&state=spttohtjs"
				} else {
					$(".cover").show();
					$(".login_box").show();
				}
			} else {
				window.location = "wsbs.html";
			}
		});

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
			if (baseTools.getUrlQueryString("proWeb") != "") {
				$(".cover").show();
				$(".login_box").show();
			}
			//$('input').val('');

			if (baseTools.getUrlQueryString("n") && baseTools.getUrlQueryString("n") == "xbnsrtc") {
				$('.cover').show();
				$('.newPro').show();
			}
			initLayout();
			// 点击空白隐藏忘记密码选择
			// $(document).on("click", function () {
			// 	$('.wep_loginform').slideUp();
			// })

			// $('.wep_loginform').on("click", function (event) {
			// 	event = event || window.event;
			// 	event.stopPropagation();
			// })

			// $('.wep_login').on("click", function (event) {
			// 	if (!jcptTools.getIsLogin()) {

			// 	}

			// })

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
                $(this).hide().siblings(".passwords").val("")
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
					$(this).siblings(".widthHalf").val("短信验证码");
					$(this).hide().siblings(".widthHalf").show();
					$(this).siblings().removeClass('right').addClass('wrong');
				}
			})
			//登陆框模拟placeholder结束

			$('.wep_login').on("click", function (event) {
				//未登录
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

			// 删除组件释放内存
			$(window).unload(function () {});
		},

        //显示登录框
        showLogin:function(){
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    type: 1,
                    skin: "login_wrap",
                    title: false,
                    area: ['420px', '345px'],
                    shade: 0.4,
                    closeBtn: 0,
                    shadeClose: false,
                    content: $('.wep_loginlogin'),
                    success: function () {
                        layui.use('form', function () {
                            var form = layui.form;
                            form.render();
                            $('#sfcx').find('input').val("请选择身份");
                            $('#sfhm').find('input').val("请选择手机号码");
                        })
                    }
                })
            });
        },

		loginMethod: function () {
            $('.wxl_wyzc').hide();
            $('.wxl_scbsbl').show();
            $('.caLogin').hide();
            $('.dxLogin').show();
			$('.wep_ul li').on('click', function () {
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
                        $('.caLogin').show();
                        $('.dxLogin').hide();
						break;
                    case 1:
                        $('.wxl_wyzc').hide();
                        $('.wxl_scbsbl').hide();
                        $('.wep_form form').css('display', 'none');
                        $(this).addClass('active').siblings().removeClass('active');
                        $('.wep_form form').eq($(this).index()).css('display', 'block');
                        $('.caLogin').show();
                        $('.dxLogin').hide();
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
		onHideDlrsf: function () {
			/*  alert("fff");
			  return ;*/

            var zh = $("#wep_form_dxdl").find("input[name='USER_ZH']").val().trim();
            var mm = $("#wep_form_dxdl").find("input[name='USER_MM']").val().trim();
			if (re_yh != null&&re_zh==zh) {
				$("#dlrsf_dh_content").hide();
				$("#dlrsf_content").show();
				return;
			}

			var zh = $("#wep_form_dxdl").find("input[name='USER_ZH']").val().trim();
			var mm = $("#wep_form_dxdl").find("input[name='USER_MM']").val().trim();
			if (zh == "" || zh == "账号") {
				alert('请录入正确的帐号!');
				$("#wep_form_dxdl").find("input[name='USER_ZH']").focus();
				return false;
			}
			if (mm == "" || mm == "密码") {
				alert('请录入密码!');
				$("#wep_form_dxdl").find("input[name='USER_MM']").focus();
				return false;
			}

            re_zh = zh;

			var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
			var srcs = CryptoJS.enc.Utf8.parse(mm);
			var encrypted = CryptoJS.AES.encrypt(srcs, key, {
				mode: CryptoJS.mode.ECB,
				padding: CryptoJS.pad.Pkcs7
			});
			load.loading();
			baseTools.xhrAjax({
				url: '/checkQyyhDxptInfo.do',
				bShow: false,
				async: false,
				params: {
					USERNAME: zh,
					PASSWORD: encrypted.toString()
				},
				callback: [function (jsonObj, xhrArgs) {
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
							baseTools.hideMash(maskObj);
							if (jsonObj.msg == '您尚未开通系统的使用权限！') {
								if (confirm("您尚未开通系统的使用权限！\n是否现在开通？")) {
									index_gds.addQyyhByNsrsbhIA(zh);
									break;
								} else {
                                    index_gds.unlockLogin();
								}
							} else {
								alert(jsonObj.msg);
                                index_gds.unlockLogin();
							}
							break;
						case -3: // session 失效请重新登录
							jcptTools.clearAllCookie();
							alert(jsonObj.msg);
							window.location = 'index.html';
							break;
						case -5: //弱密码类型
							jcptTools.setCookieJsonObjLogin(jsonObj.data);
							window.location.href = "wsbs.html?n=xgmm";
							break;
						case -9: //未开户
							if (confirm("您尚未开通系统的使用权限！\n是否现在开通？")) {
								index_gds.addQyyhByNsrsbhDx(zh);
								break;
							} else {
								curSeg.unlockLogin();
							}
							break;

						case -10: //未开户
							if (confirm("您尚未开通系统的使用权限！\n是否现在开通？")) {
								index_gds.addQyyhByNsrsbhDx();
								break;
							} else {
								curSeg.unlockLogin();
							}
							break;
						default:
							curSeg.unlockLogin();

					}
				}]
			});
		},
		onCheckParam: function (form_id) {
			$("#" + form_id).find("input[name='USER_ZH']").val($("#" + form_id).find("input[name='USER_ZH']").val().trim());
			$("#" + form_id).find("input[name='USER_MM']").val($("#" + form_id).find("input[name='USER_MM']").val().trim());

			zh = $("#" + form_id).find("input[name='USER_ZH']").val();
			mm = $("#" + form_id).find("input[name='USER_MM']").val();

			if (zh.length == 0 || zh == "账号") {
				alert('请录入帐号!');
				$("#" + form_id).find("input[name='USER_ZH']")[0].focus();
				return false;
			}
			if (mm.length == 0 || mm == "密码") {
				alert('请录入密码!');
				//$("#"+form_id).find("input[name='USER_MM']")[0].focus();
				return false;
			}

			return true;
		},
		onClickDlrsf: function (obj) {

			if (!index_gds.onCheckParam("wep_form_dxdl")) {
				return;
			}

			var int_zh = $("#wep_form_dxdl").find("input[name='USER_ZH']").val().trim();
			if (re_yh == null||re_zh!=int_zh) {
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
		onSetDx: function (op) {

			dx_time++;
			if (dx_time <= 60) {
				$("#" + op).find("a[name='WEP_SEND_MSG']").text((60 - dx_time) + "s重新获取");
				window.setTimeout("index_gds.onSetDx('" + op + "')", 1000);
			} else {
				dx_time = 0;
				$("#" + op).find("a[name='WEP_SEND_MSG']").text("发送验证码");
			}
		},
        onSetDl: function (form) {
            dl_time++;
            if (dl_time <= 3) {
                $("#" + form).find("a.swf_form_btn").text((3 - dl_time) + "s重新登陆");
                window.setTimeout("index_gds.onSetDl(\"" + form + "\")", 1000);
            } else {
                dl_time = 0;
                $("#" + form).find("a.swf_form_btn").text("登 录");
				//$("#" + form).find("a.swf_form_btn").attr("disabled",false);
				var func = $('#' + form).find('.swf_form_btn').data('func');
				$('#' + form).find('.swf_form_btn').get(0).onclick = func;
            }
        },
		onGetQyyhDxptYzm: function (op) {

			var zh = $("#wep_form_dxdl").find("input[name='USER_ZH']").val().trim();
			var mm = $("#wep_form_dxdl").find("input[name='USER_MM']").val().trim();
			if (zh == "") {
				alert('请录入正确的帐号!');
				$("#wep_form_dxdl").find("input[name='USER_ZH']").focus();
				return false;
			}
			if (mm == "") {
				alert('请录入密码!');
				$("#wep_form_dxdl").find("input[name='USER_MM']").focus();
				return false;
			}

			var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
			var srcs = CryptoJS.enc.Utf8.parse(mm);
			var encrypted = CryptoJS.AES.encrypt(srcs, key, {
				mode: CryptoJS.mode.ECB,
				padding: CryptoJS.pad.Pkcs7
			});

			if (dx_time > 0) {
				return;
			}

			if (!index_gds.onCheckParam(op)) {
				return;
			}

			if (re_yh == null) {
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

					if (op == "" || op.trim() == "请选择身份") {
						alert("您选择的登录人身份   ");
						return;
					}
					alert("您选择的登录人身份未进行手机号码登记，请到税务大厅进行手机号码登记或重新选择其他登录人身份进行登录   ");
					return;
				}
			} else {
				lxdh = zh;
			}

			var num = 60;
			$("a[name='CXHQ2']").show();
			$("a[name='CXHQ1']").hide();

			baseTools.xhrAjax({
				url: '/getQyyhDxptYzm.do',
				bShow: false,
				async: false,
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
							index_gds.onSetDx("wep_form_dxdl");
							break;
						case -1: //登录失败
							jcptTools.clearAllCookie();
							baseTools.hideMash(maskObj);
							if (jsonObj.msg == '您尚未开通系统的使用权限！') {
								if (confirm("您尚未开通系统的使用权限！\n是否现在开通？")) {
									index_gds.addQyyhByNsrsbh();
									break;
								} else {
									curSeg.unlockLogin();
								}
							} else {
								alert(jsonObj.msg);
								curSeg.unlockLogin();
							}
							break;
						case -3: // session 失效请重新登录
							jcptTools.clearAllCookie();
							alert(jsonObj.msg);
							window.location = 'index.html';
							break;
						case -5: //弱密码类型
							jcptTools.setCookieJsonObjLogin(jsonObj.data);
							window.location.href = "wsbs.html?n=xgmm";
						default:
							curSeg.unlockLogin();

					}
				}]
			});

		},
		onClickDlrsf_dh: function (num, iden) {
			if (iden) {
				$("#dlrsf_dh").attr("name", iden);
			}
			$("#dlrsf_dh").val(num);
			$("#dlrsf_dh_content").hide();
		},
		onHideDlrsf_dh: function () {
			if ($("#dlrsf").val() == "购票员") {
				$("#dlrsf_dh_content").show();

			}
			$("#dlrsf_content").hide();
		},
		onLogin: function () {
			var zh = $("#wep_form_cadl").find("input[name='USER_ZH']").val().trim();
			var mm = $("#wep_form_cadl").find("input[name='USER_MM']").val().trim();
			if (zh.length == 0 || zh == "账号") {
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
			}
			curSeg.lockLogin("wep_form_cadl");

			var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
			var srcs = CryptoJS.enc.Utf8.parse(mm);
			var encrypted = CryptoJS.AES.encrypt(srcs, key, {
				mode: CryptoJS.mode.ECB,
				padding: CryptoJS.pad.Pkcs7
			});
			load.loading();
			baseTools.xhrAjax({
				url: '/gtsdhByhJy.do',
				bShow: false,
				async: false,
				params: {
					USERNAME: zh,
					PASSWORD: encrypted.toString()
				},
				callback: [function (jsonObj) {

					switch (jsonObj.code) {
						case "1":
							//判断新用户，先开户
							if (jsonObj.WKHBZ == "Y") {
								if (confirm("您尚未开通系统的使用权限！\n是否现在开通？")) {
									index_gds.addQyyhByNsrsbh(zh);
								} else {
									curSeg.unlockLogin();
									return;
								}

								//如果不是新开户，则走老用户流程
							} else {
								var byhbz = jsonObj.BYHBZ;
								gtsdhbz = jsonObj.GTSDHBZ;

								//判断是否是报验户，是报验户走非CA流程
								if (byhbz == "Y") {
									curSeg.checkLoginWithoutCA();

									//判断是否是个体双订户或者可以申请软证书的企业
								} else if (gtsdhbz == "Y") {
									var shxydm = jsonObj.SHXYDM;
									var yhid = jsonObj.YHID;
									var nsrmc = jsonObj.NSRMC;
									var dlmmbz = jsonObj.DLMMBZ;
									//校验密码是否正确
									if (dlmmbz == 'Y') {
										baseTools.setCookie('secUserSHXYDM', shxydm);
										baseTools.setCookie('secUserFLAG', 9);
										baseTools.setCookie('secUserQYID', yhid);
										baseTools.setCookie('secUserKHMC', nsrmc);
										if (typeof external.CheckPfxCertInIE != "undefined") {
											if (external.CheckPfxCertInIE(shxydm) == 0) { // 系统中未安装该企业的软证书
												alert("你尚未安装数字证书，请先进行数字证书申请操作！");
                                                var url = window.location.protocol + "//" + window.location.host +jcptTools.getWebRoot()+"/dzswj/ythclient/user_main_rca.html";
                                                external.OpenModel(url , "0", "max", "11");
											} else {
												curSeg.checkCA();
											}
										} else {
											curSeg.checkCA();
										}
									} else {
										alert("账号或密码输入错误！");
										curSeg.unlockLogin();
										return;
									}
								} else {
									if (cakg == "Y") {
										curSeg.checkCA();
									} else {
										curSeg.checkLoginWithoutCA();
									}
								}
							}
							load.closeLoading();
							break;
						default:
							alert(jsonObj.msg);
							return;
					}

				}]
			});

		},
        onLoginIA: function () {
            var zh = $("#wep_form_iadl").find("input[name='USER_ZH']").val().trim();
            var mm = $("#wep_form_iadl").find("input[name='USER_MM']").val().trim();
            if (zh.length == 0 || zh == "账号") {
                alert('请录入账号!');
                $("#wep_form_iadl").find("input[name='USER_ZH']").focus();
                return false;
            } else if (zh == '1') {
                alert('请录入正确的账号!');
                $("#wep_form_iadl").find("input[name='USER_ZH']").focus();
                return false;
            }
            if (mm.length == 0) {
                alert('请录入密码!');
                $("#wep_form_iadl").find("input[name='USER_MM']").focus();
                return false;
            }

            curSeg.lockLogin();

            var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
            var srcs = CryptoJS.enc.Utf8.parse(mm);
            var encrypted = CryptoJS.AES.encrypt(srcs, key, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            load.loading();
            baseTools.xhrAjax({
                url: '/gtsdhByhJy.do',
                bShow: false,
                async: false,
                params: {
                    USERNAME: zh,
                    PASSWORD: encrypted.toString()
                },
                callback: [function (jsonObj) {

                    switch (jsonObj.code) {
                        case "1":
                            //判断新用户，先开户
                            if (jsonObj.WKHBZ == "Y") {
                                if (confirm("您尚未开通系统的使用权限！\n是否现在开通？")) {
                                    index_gds.addQyyhByNsrsbhIA();
                                } else {
                                    curSeg.unlockLogin();
                                    return;
                                }

                                //如果不是新开户，则走老用户流程
                            } else {
                                var byhbz = jsonObj.BYHBZ;
                                gtsdhbz = jsonObj.GTSDHBZ;

                                curSeg.checkLoginWithoutIA();
                            }
                            load.closeLoading();
                            break;
                        default:
                            alert(jsonObj.msg);
                            return;
                    }

                }]
            });

        },
		onDxLogin: function () {

			if (!index_gds.onCheckParam("wep_form_dxdl")) {
				return;
			}

			curSeg.lockLogin("wep_form_dxdl");
			/**
			 * ca开关同时，报验户不走ca
			 */
			if ($('#dlrsf_dh').val() == "") {
				alert("请选择有效的手机号码");
                curSeg.unlockLogin();
				return false;
			}

			var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
			var srcs = CryptoJS.enc.Utf8.parse(mm);
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
			if (re_yh == null) {
				alert("未获取短信验证码，请重新获取！");
                curSeg.unlockLogin();
				return false;
			}

			load.loading();
			baseTools.xhrAjax({
				url: '/qyDxptLogin.do',
				bShow: false,
				async: false,
				params: {
					USERNAME: zh,
					PASSWORD: encrypted.toString(),
					DX_YZM: wep_send_yzm,
					DX_JYXH: jyxh,
					CUR_USERID: "-1"
				},
				callback: [curSeg.pageFlowControl]
			});

		},
		//个人用户登录
		onUserLogin: function () {

			if (!index_gds.onCheckParam("wep_form_grdl")) {
				return;
			}

			var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
			var srcs = CryptoJS.enc.Utf8.parse(mm);
			var encrypted = CryptoJS.AES.encrypt(srcs, key, {
				mode: CryptoJS.mode.ECB,
				padding: CryptoJS.pad.Pkcs7
			});
			load.loading();
			//zh为账号信息,mm为密码信息checkZrrLogin
			baseTools.xhrAjax({
				url: '/checkZrrLogin.do',
				bShow: false,
				async: false,
				params: {
					USERNAME: zh,
					PASSWORD: encrypted.toString()
				},
				callback: [function (jsonObj) {
					switch (jsonObj.code) {
						case "0":
							if (jsonObj.data) {
								var r = jsonObj.data;
								if (r.sfsmrz_smrz && r.sfsmrz_smrz == "N") {
									alert("您未进行实名认证，请登录广西壮族自治区税务云综合管理平台或者下载电子税务局-广西壮族自治区税务局(移动版)进行实名认证!   ");
									var url = "https://cportal.ha-l-tax.gov.cn/";
									if (typeof external.get_version != "undefined") {
										if (Number(external.get_version().replace(/\./g, "")) >= 318628) {
											external.Open_IE_Url(url);
										} else {
											window.open(url);
										}
									} else {
										window.open(url);
									}
								} else {

									dzswjCommon.setCookieCddwGzfw("GRDL");
									jcptTools.setCookieJsonObjLogin(jsonObj.JCPT_USER);
									// taxClientTools.setCookieJsonObjLogin(jsonObj.data);

									//打开壳子方法
									load.closeLoading();
									jcptTools.closeAllLayer();

									//2018.11.21 tbb 修改 需求变更 纳税人也增加过度页面
									// jcptTools.OpenModel(jcptTools.getMainZrr());
									jcptTools.OpenModel(jcptTools.getLoginIndex());
									/*if (typeof external.get_version != "undefined") {
										if (Number(external.get_version().replace(/\./g, "")) >= 318628) {
											external.Open_IE_Url(url);
										} else {
											window.open(url);
										}
									} else {
										window.open(url);
									}*/
								}

							} else {
								alert("获取纳税人信息失败");
							}

							break;
						default:
							alert(jsonObj.msg);
							load.closeLoading();
							return;
					}

				}]
			});

		},
        onGetDsGryhYzm:function() {
            if (!index_gds.onCheckParam("wep_form_grdl")) {
                return;
            }

            var encrypted_zh = aesTools.encrypt(zh);
            var encrypted_mm = aesTools.encrypt(mm);
            var jyxh = $('#wep_form_grdl').find("span[name='JYXH']").text();
            baseTools.xhrAjax({
                url: "/server/jcpt/logininfo/getGryhDsDxptYzm.do",
                bShow: false,
                params: {
                    RANDOM_NUM: Math.random(),
                    JYXH: jyxh,
                    USERNAME: encrypted_zh.toString(),
                    PASSWORD: encrypted_mm.toString(),
                    YHDLLX: "3"
                },
                callback: [function (jsonObj, xhrArgs) {
                    switch (parseInt(jsonObj.code)) {
                        case 1:
                            $("#wep_form_grdl").find("span[name='JYXH']").text(jsonObj.data);
                            alert("短信发送成功，请收到短信后，将对应交易序号" + jsonObj.data + "的验证码录入界面，点击登录  ");
                            break;
                        case -1: //登录失败
                            jcptTools.msg(jsonObj.msg);
                            jcptTools.clearAllCookie();
                            if ((jsonObj.msg).indexOf("用户名或密码错误") != -1) {
                                jcptTools.countDownClean($obj, timerReg, "发送验证码");
                            }
                            break;
                        case -3: // session 失效请重新登录
                            jcptTools.msg(jsonObj.msg);
                            jcptTools.gotoLogin();
                            break;
                        default:
                            jcptTools.countDownClean($obj, timerReg, "发送验证码");
                            curSeg.unlockLogin();
                    }
                }]
            });

        },
		//发送验证码
		onGetGryhDxptYzm: function () {

			if (!index_gds.onCheckParam("wep_form_grdl_new")) {
				return;
			}
			var jyxh = $("#wep_form_grdl_new").find("span[name='JYXH']").text();
			var encrypted_zh = aesTools.encrypt(zh);
			var encrypted_mm = aesTools.encrypt(mm);
			var $obj = $("#wep_form_grdl_new").find(":input[name='WEP_SEND_MSG']");
			var timerReg = jcptTools.countDown($obj, 60, 's重新获取');
			baseTools.xhrAjax({
				url: "/server/jcpt/logininfo/getGryhDxptYzm.do",
				bShow: false,
				params: {
					RANDOM_NUM: Math.random(),
					JYXH: jyxh,
					USERNAME: encrypted_zh.toString(),
					PASSWORD: encrypted_mm.toString(),
					YHDLLX: "3"
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
							if ((jsonObj.msg).indexOf("账号或密码错误") != -1) {
								jcptTools.countDownClean($obj, timerReg, "发送验证码");
							}
							break;
						case -3: // session 失效请重新登录
							jcptTools.msg(jsonObj.msg);
							jcptTools.gotoLogin();
							break;
						default:
							jcptTools.countDownClean($obj, timerReg, "发送验证码");
							curSeg.unlockLogin();
					}
				}]
			});
		},
        //新平台 个人登录
        onDsGrLogin: function () {

            if (!index_gds.onCheckParam("wep_form_grdl")) {
                return;
            }
            curSeg.lockLogin("wep_form_grdl");
            // var loginUrl = "/checkGrDxptLogin.do";
            var loginUrl = "/server/jcpt/logininfo/grDxptDsLogin.do";

            if ($("#wep_form_grdl").find("input[name='WEP_SEND_YZM']").val() == "") {
                jcptTools.msg("请输入有效的验证码  ");
                return;
            }
            load.loading();
            baseTools.xhrAjax({
                url: loginUrl,
                bShow: false,
                params: {
                    DX_YZM: $("#wep_form_grdl").find("input[name='WEP_SEND_YZM']").val(),
                    CUR_USERID: "-1"
                },
                callback: [function (jsonObj) {
                    switch (jsonObj.code) {
                        case "1":
                            if (jsonObj.data) {
                                var r = jsonObj.data;
                                if (r.sfsmrz_smrz && r.sfsmrz_smrz == "N") {
                                    alert("您未进行实名认证，请登录广西壮族自治区税务云综合管理平台或者下载网上税务局-广西壮族自治区税务局(移动版)进行实名认证!   ");
                                    var url = "https://cportal.ha-l-tax.gov.cn/";
                                    if (typeof external.get_version != "undefined") {
                                        if (Number(external.get_version().replace(/\./g, "")) >= 318628) {
                                            external.Open_IE_Url(url);
                                        } else {
                                            window.open(url);
                                        }
                                    } else {
                                        window.open(url);
                                    }
                                } else {
                                    dzswjCommon.setCookieCddwGzfw("GRDL");
                                    jcptTools.setCookieJsonObjLogin(jsonObj.JCPT_USER);
                                    // taxClientTools.setCookieJsonObjLogin(jsonObj.data);
                                    jcptTools.setCookie("QX_USER_DDDL", jsonObj.r);
                                    //打开壳子方法
                                    load.closeLoading();
                                    jcptTools.closeAllLayer();
                                    if (window.location.href.indexOf(mhHtmlIndex) > -1  || window.location.href.indexOf(mh_khdHtmlIndex) > -1) {
                                        //有值并且是上边的三个按钮 跳转到主页面
                                        var pid = dzswjCommon.getCookieCddwByStr("PID");
                                        if(pid && mhToMainPId.indexOf(pid) != -1){
                                            if(pid == "75016"){//个人 个性服务
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

                                    //2018.11.21 tbb 修改 需求变更 纳税人也增加过度页面
                                    // jcptTools.OpenModel(jcptTools.getMainZrr());
                                    // jcptTools.OpenModel(jcptTools.getLoginIndex());
                                }

                            } else {
                                alert("获取纳税人信息失败");
                            }

                            break;
                        default:
                            alert(jsonObj.msg);
                            load.closeLoading();
                            return;
                    }

                }]
            });
        },
		//新平台 个人登录
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


		//个人用户登录
		onUserLoginOth: function () {
			var zh = baseTools.getUrlQueryString("MOBILE");

			//zh为账号信息,mm为密码信息
			baseTools.xhrAjax({
				url: '/checkZrrLogin.do',
				bShow: false,
				async: false,
				params: {
					USERNAME: zh
				},
				callback: [function (jsonObj) {
					switch (jsonObj.code) {
						case "0":
							if (jsonObj.data) {
								var r = jsonObj.data;
								if (r.sfsmrz_smrz && r.sfsmrz_smrz == "N") {
									alert("您未进行实名认证，请登录广西税务云综合管理平台或者下载电子税务局-广西壮族自治区税务局(移动版)进行实名认证!   ");
									var url = "https://cportal.ha-l-tax.gov.cn/";
									if (typeof external.get_version != "undefined") {
										if (Number(external.get_version().replace(/\./g, "")) >= 318628) {
											external.Open_IE_Url(url);
										} else {
											window.open(url);
										}
									} else {
										window.location = url;
									}
								} else {
									var param = "?htjs_sso_service=" + encodeURIComponent(r.htjs_sso_service) + "&yhuuid=" + encodeURIComponent(r.yhuuid) + "&nsrsbh=" + encodeURIComponent(r.nsrsbh) +
										"&dlzhdm=" + encodeURIComponent(r.dlzhdm) + "&sjhm=" + encodeURIComponent(r.sjhm) + "&shxydm=" + encodeURIComponent(r.shxydm) + "&zyhuuid=" + encodeURIComponent(r.zyhuuid) + "&djxh=" + encodeURIComponent(r.djxh) +
										"&sfsmrz=" + encodeURIComponent(r.sfsmrz) + "&sfzzh=" + encodeURIComponent(r.sfzzh) + "&sfmrmm=" + encodeURIComponent(r.sfmrmm) +
										"&xm=" + encodeURIComponent(r.xm) + "&yhmc=" + encodeURIComponent(r.yhmc);
									var url = jcptTools.cnf.dswtzrrURL + param;
									if (typeof external.get_version != "undefined") {
										if (Number(external.get_version().replace(/\./g, "")) >= 318628) {
											external.Open_IE_Url(url);
										} else {
											window.open(url);
										}
									} else {
										window.location = url;
									}
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

		},
		//回车登录
		keyDown: function () {
            if ($('.wep_loginlogin').css("display") == "block") {
                if (event.keyCode == 13) {
                    event.returnValue = false;
                    event.cancel = true;
                    if ($('#wep_form_cadl').css("display") == "block") {
                        var value = $("#wep_form_cadl :input[name='USER_ZH']").val();
                        if(value == '914101057355318653' || value == '91410000169955857C' || value == '41292119741215112201') {
                            document.getElementById('yzmlogin').style.display = 'block';
                            if($('#yzmlogin').find('img').get(0).src.trim() == '') {
                                $('#yzmlogin').find('img').get(0).src = '/web/cm/showPictureCode.do?m'+ Math.random();
                            }
                            //document.getElementById('dlbutton').onclick = function() {
                            mhtt.onLogin();

                        } else {
                            index_gds.onLogin();
                        }
                    } else if ($('#wep_form_dxdl').css("display") == "block") {
                        index_gds.onDxLogin();
                    } else if ($('#wep_form_grdl').css("display") == "block"){
                        var value = $("#wep_form_grdl :input[name='USER_ZH']").val();
                        if(value == '15890636717' || value == '15093187793') {
                            document.getElementById('zrrYzmDiv').style.display = 'block';
                            document.getElementById('grdxDiv').style.display = 'none';
                            if($('#wep_form_grdl').find('img').get(0).src.trim() == '') {
                                $('#wep_form_grdl').find('img').get(0).src = '/web/cm/showPictureCode.do?m'+ Math.random();
                            }
                            mhtt.onDsGrLogin();
                        } else {
                            index_gds.onDsGrLogin();
                        }
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

		//企业忘记密码切换国税企业和地税企业
		// changePWD:function () {

		// },

		gs_wsbs: function () {
			curSeg.checkSessionGdsgj('gsrk');
		},
		ds_wsbs: function () {
			curSeg.checkSessionGdsgj('dsrk');
		},
		checkSessionGdsgj: function (gdsrk) {
			if (gdsrk == undefined) {
				return;
			}
			baseTools.xhrAjax({
				url: "/checkSession.do",
				params: {
					GDSRK: gdsrk
				},
				callback: [function (jsonObj, xhrArgs) {
					if (parseInt(jsonObj.code) == 1) { //检查成功
						//处理弱口令
						if (jsonObj.data && jsonObj.data == 'RKL') {
							jcptTools.setCookie("RKLBZ", 'y');
						}
						if ("gsrk" == gdsrk) {
							var winheight = window.screen.availHeight;
							var winwidth = window.screen.availWidth - 10;
							var ileft = 0;
							var itop = 0;
							var param = "location=yes,titlebar=yes,menubar=yes,toolbar=yes,modal=yes,resizable=yes,width=" + winwidth + ",height=" + winheight + ",left=" + ileft + ",top=" + itop;
							window.open("/web/ythclient/wsbs.html", "_blank", param);
						} else if ("dsrk" == gdsrk) {

						}
					} else if (parseInt(jsonObj.code) == -3) {
						alert("请重新登录！");
						jcptTools.clearAllCookie();
						window.location = 'index.html';
					} else {
						jcptTools.clearAllCookie();
						alert(jsonObj.msg);
					}
				}]
			});
		},
		gdsToPage: function (url) {
			var winheight = window.screen.availHeight;
			var winwidth = window.screen.availWidth - 10;
			var ileft = 0;
			var itop = 0;
			var param = "location=yes,titlebar=yes,menubar=yes,toolbar=yes,modal=yes,resizable=yes,width=" + winwidth + ",height=" + winheight + ",left=" + ileft + ",top=" + itop;
			window.open(url, "_blank", param);
		},
		checkCA: function () {
			//start CA校验
			if (document.all.camanger.object != null) {
				var base64 = "";
				var res = camanger.SelectCert("SC");
				if (res == 0) {
					base64 = camanger.jg;
					camanger.setFunction(curSeg.a, curSeg.b);
					//该方法会先执行a再执行b
					camanger.SetCert(base64, 1);
				} else {
					camanger.GetErrorInfo();
					alert(camanger.jg || "选择证书发生错误");
					jcptTools.clearAllCookie();
					curSeg.unlockLogin();
				}
			} else {
				if (confirm("你没有安装CA浏览器组件，是否打开组件检测下载页面？")) {
					var iwidth = 800;
					var iheight = 600;
					var itop = (window.screen.availHeight - 30 - iheight) / 2; //获得窗口的垂直位置;
					var ileft = (window.screen.availWidth - 10 - iwidth) / 2; //获得窗口的水平位置;

					var param = "left=" + ileft + ",top=" + itop + ",width=" + iwidth + ",height=" + iheight;
					param += ",scrollbars,resizable=yes,toolbar=no";
					window.open("./ca/checkCa.html", "CA组件检测页", param);
					// window.location.href=loc_tmp;
					jcptTools.clearAllCookie();
					curSeg.unlockLogin();
					return;
				}
			}

		},
		a: function () {},

		b: function (state, s) {
			if (state == 0) {
				var res, ZSLX;

				//证书有效起止
				res = camanger.GetYxqz();
				if (res == 0) {
					YXQZ = camanger.jg;
					var yxqq = YXQZ.substring(0, YXQZ.indexOf(" -- "));
					YXQZ = YXQZ.substring(YXQZ.indexOf(" -- ") + 4, YXQZ.length);
					var yxqz_d = YXQZ.replace(/-/g, "/");
					var date_c = new Date();
					yxqz_d = new Date(yxqz_d);
					if (yxqz_d < date_c) { //已过期，30天内提醒，外不能使用
						var days = (date_c - yxqz_d) / (3600 * 1000 * 24);
						days = Math.ceil(days); //天数差值向上取整
						if (days <= 30) {
							alert("您的CA证书已过期" + days + "天，过期30天将不能使用系统！");
						} else {
							alert("您的CA证书已过期");
							jcptTools.clearAllCookie();
							curSeg.unlockLogin();
							return;
						}
					} else { //未过期，30天内提醒
						var days = (yxqz_d - date_c) / (3600 * 1000 * 24);
						days = Math.ceil(days); //天数差值向上取整
						if (days <= 30) {
							alert("您的CA证书还有" + days + "天过期，请及时更新！");
						}
					}
				} else {
					camanger.GetErrorInfo();
					alert(camanger.jg || "获得证书有效期失败");
					jcptTools.clearAllCookie();
					curSeg.unlockLogin();
					return;
				}
				//服务商
				res = camanger.GetFws();
				if (res == 0) {
					Cert_HnOrHnxa = camanger.jg;
				} else {
					camanger.GetErrorInfo();
					alert(camanger.jg || "获得证书服务商失败");
					jcptTools.clearAllCookie();
					curSeg.unlockLogin();
					return;
				}
				//证书CN,税号
				res = camanger.GetCN();
				if (res == 0) {
					CertCN = camanger.jg;
					var nsrsbh = $(":input[name='USER_ZH']").val().trim();
					if (nsrsbh.indexOf('(') != -1) {
						var reg_nsrsbh = nsrsbh.match('(\\w+)\\(');
						nsrsbh = reg_nsrsbh[1];
					}
					if (CertCN != nsrsbh) {
						alert("证书选择错误！");
						jcptTools.clearAllCookie();
						curSeg.unlockLogin();
						return;
					}
				} else {
					camanger.GetErrorInfo();
					alert(camanger.jg || "获得证书CN项失败");
					jcptTools.clearAllCookie();
					curSeg.unlockLogin();
					return;
				}
				//证书证书类型RSA,SM2
				res = camanger.GetCertType();
				if (res == 0) {
					CERTTYPE = camanger.jg;
				} else {
					camanger.GetErrorInfo();
					alert(camanger.jg || "获得证书类型失败");
					jcptTools.clearAllCookie();
					curSeg.unlockLogin();
					return;
				}
				//签名
				baseTools.xhrAjax({
					url: "/getSign.do",
					bShow: false,
					async: false,
					params: {},
					callback: [function (jsonObj) {
						if (jsonObj.code == 0) {
							random = jsonObj.date;
							res = camanger.Sign(random, 1);
							if (res == 0) {
								signdata = camanger.jg;
								if (signdata == "" || signdata.length < 10) {
									alert("签名失败");
									jcptTools.clearAllCookie();
									curSeg.unlockLogin();
									return;
								}
							} else {
								camanger.GetErrorInfo();
								alert(camanger.jg || "签名失败");
								jcptTools.clearAllCookie();
								curSeg.unlockLogin();
								return;
							}
							//证书Base64
							res = camanger.GetCertBase64();
							if (res == 0) {
								signcert = camanger.jg;
							} else {
								camanger.GetErrorInfo();
								alert(camanger.jg || "获得证书base64失败");
								jcptTools.clearAllCookie();
								curSeg.unlockLogin();
								return;
							}

							flag = true;


							if (Cert_HnOrHnxa == "XACA" || Cert_HnOrHnxa == "HNXACA") {
								Cert_HnOrHnxa = "HNXACA";
								zsbfz = "xaca";
								jcptTools.setCookie("CA_BFZ", "xaca");
							} else if (Cert_HnOrHnxa == "HNCA") {
								zsbfz = "hnca";
								jcptTools.setCookie("CA_BFZ", "hnca");
							} else if (Cert_HnOrHnxa == "SKPCA") {
								zsbfz = "skpca";
								jcptTools.setCookie("CA_BFZ", "skpca");
							}

							$("#Cert_HnOrHnxa").val(Cert_HnOrHnxa);
							$("#signcert").val(signcert);
							$("#random").val(random);
							$("#signdata").val(signdata);
							$("#caNsrsbh").val(CertCN);
							var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
							var srcs = CryptoJS.enc.Utf8.parse($(":input[name='USER_MM']").val().trim());
							var encrypted = CryptoJS.AES.encrypt(srcs, key, {
								mode: CryptoJS.mode.ECB,
								padding: CryptoJS.pad.Pkcs7
							});

							maskObj = baseTools.showMask("正在登录...");
							baseTools.xhrAjax({
								url: "/checkQyyhLogin.do",
								bShow: false,
								async: false,
								params: {
									USERNAME: $(":input[name='USER_ZH']").val().trim(),
									PASSWORD: encrypted.toString(),
									CUR_USERID: "-1",
									RANDOM: random,
									RANDOMSIGNDATA: signdata,
									ZSLX: ZSLX,
									CERTTYPE: CERTTYPE,
									CLIENTSIGNCERT: signcert,
									ZSBFZ: zsbfz,
									ZSYXQQ: yxqq,
									ZSYXQZ: YXQZ,
									CERTCN: CertCN
								},
								callback: [curSeg.pageFlowControl]
							});
						}
					}]
				});
			} else {
				camanger.GetErrorInfo();
				alert(camanger.jg || "证书初始化错误");
				jcptTools.clearAllCookie();
				curSeg.unlockLogin();
				return;
			}
		},
		checkLoginWithoutCA: function () {
			var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
            var $wepFormCadl = $("#wep_form_cadl");
            var userzh = $.trim($wepFormCadl.find("input[name='USER_ZH']").val());
            var usermm = $.trim($wepFormCadl.find("input[name='USER_MM']").val());
			var srcs = CryptoJS.enc.Utf8.parse(usermm);
			var encrypted = CryptoJS.AES.encrypt(srcs, key, {
				mode: CryptoJS.mode.ECB,
				padding: CryptoJS.pad.Pkcs7
			});

			baseTools.xhrAjax({
				url: "/checkQyLoginNoCa.do",
				bShow: false,
				async: false,
				params: {
					USERNAME: userzh,
					PASSWORD: encrypted.toString(),
					CUR_USERID: "-1",
					RANDOM: '',
					RANDOMSIGNDATA: '',
					ZSLX: '',
					CERTTYPE: '',
					CLIENTSIGNCERT: '',
					ZSBFZ: '',
					ZSYXQQ: '',
					ZSYXQZ: '',
					CERTCN: ''
				},
				callback: [curSeg.pageFlowControl]
			});
		},
        checkLoginWithoutIA: function () {
            var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
            var $wepFormIadl = $("#wep_form_iadl");
            var userzh = $.trim($wepFormIadl.find("input[name='USER_ZH']").val());
            var usermm = $.trim($wepFormIadl.find("input[name='USER_MM']").val());
            var srcs = CryptoJS.enc.Utf8.parse(usermm);
            var encrypted = CryptoJS.AES.encrypt(srcs, key, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });

            baseTools.xhrAjax({
                url: "/checkQyLoginNoCa.do",
                bShow: false,
                async: false,
                params: {
                    USERNAME: userzh,
                    PASSWORD: encrypted.toString(),
                    CUR_USERID: "-1",
                    RANDOM: '',
                    RANDOMSIGNDATA: '',
                    ZSLX: '',
                    CERTTYPE: '',
                    CLIENTSIGNCERT: '',
                    ZSBFZ: '',
                    ZSYXQQ: '',
                    ZSYXQZ: '',
                    CERTCN: ''
                },
                callback: [curSeg.pageFlowControl]
            });
        },
		//ca方法登录 免ca
		checkLoginCaWithoutCA: function () {
			var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
			var srcs = CryptoJS.enc.Utf8.parse($(":input[name='USER_MM']").val().trim());
			var encrypted = CryptoJS.AES.encrypt(srcs, key, {
				mode: CryptoJS.mode.ECB,
				padding: CryptoJS.pad.Pkcs7
			});

			baseTools.xhrAjax({
				url: "/checkQyyhLogin.do",
				bShow: false,
				async: false,
				params: {
					USERNAME: $(":input[name='USER_ZH']").val().trim(),
					PASSWORD: encrypted.toString(),
					CUR_USERID: "-1",
					RANDOM: '',
					RANDOMSIGNDATA: '',
					ZSLX: '',
					CERTTYPE: '',
					CLIENTSIGNCERT: '',
					ZSBFZ: '',
					ZSYXQQ: '',
					ZSYXQZ: '',
					CERTCN: ''
				},
				callback: [curSeg.pageFlowControl]
			});
		},
        checkLoginCaWithoutIA: function () {

            var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
            var srcs = CryptoJS.enc.Utf8.parse($("#wep_form_iadl").find("input[name='USER_MM']").val().trim());
            var encrypted = CryptoJS.AES.encrypt(srcs, key, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });

            baseTools.xhrAjax({
                url: "/checkQyyhLogin.do",
                bShow: false,
                async: false,
                params: {
                    USERNAME: $("#wep_form_iadl").find("input[name='USER_ZH']").val().trim(),
                    PASSWORD: encrypted.toString(),
                    CUR_USERID: "-1",
                    RANDOM: '',
                    RANDOMSIGNDATA: '',
                    ZSLX: '',
                    CERTTYPE: '',
                    CLIENTSIGNCERT: '',
                    ZSBFZ: '',
                    ZSYXQQ: '',
                    ZSYXQZ: '',
                    CERTCN: ''
                },
                callback: [curSeg.pageFlowControl]
            });
        },
        lockLogin: function () {
            //隐藏登录按钮、输入框置灰，登录后恢复
            $('.wep_login_btn').attr("disabled", "disabled");
            $(":input[name='USER_ZH']").attr("readonly", "readonly");
            $(":input[name='USER_MM']").attr("readonly", "readonly");
        },
		unlockLogin: function () {
			//隐藏登录按钮、输入框置灰，登录后恢复
			/*load.closeLoading();
            $('#dlbutton').get(0).onclick = function() {
                index_gds.onLogin();
            };
			$(":input[name='USER_ZH']").attr("readonly", false);
			$(":input[name='USER_MM']").attr("readonly", false);*/
		},
		onClear: function () {
			$(":input[name='USER_ZH']").val('');
			$(":input[name='USER_MM']").val('');
		},
		onOpenNotice: function () {
			msg = "通知";
			winParam = {
				id: 'win_module',
				title: msg,
				height: '500px',
				width: '700px',
				url: '../taxclient/manage/notice.html'
			};
			winObj = baseTools.showWinExt(winParam);
		},
		MaxScreen: function () {
			window.moveTo(0, 0);
			window.resizeTo(screen.availWidth, screen.availHeight);
		},
		addQyyhByNsrsbh: function (nsrsbh) {
			var zh = $("input[name='USER_ZH']").val().trim();
			if (nsrsbh) {
				zh = nsrsbh;
			}
			if (zh == "") {
				var zh_dx = $("input[name='USER_ZH_DX']").val().trim();
				zh = zh_dx;
			}

			baseTools.xhrAjax({
				url: '/taxclient/addQyyhByNsrsbh.do',
				bShow: false,
				params: {
					NSRSBH: zh
				},
				callback: [function (jsonObj, xhrArgs) {
					switch (parseInt(jsonObj.code)) {
						// 查询操作返回标志
						case 1: // 开户成功
							if (confirm("您已成功开通广西壮族自治区电子税务局！默认密码Aa加纳税人识别号后8位，现在是否登录？")) {
								$(":input[name='USER_ZH']").val(zh);
								$(":input[name='USER_MM']").val("Aa" + zh.substring(zh.length - 8));

								if ($("#wep_form_dxdl").css("display") == "none") {
									curSeg.onLogin();
								} else {
                                    alert("新开户纳税人初次使用短信登录，请点击身份信息获取验证码");
								}
							}
							break;
							// 在线帮助
						case 0:
							alert("您已开通过广西壮族自治区电子税务局，无需再次开通！");
							break;
						case 2:
							alert("纳税人识别号无效！");
							break;
						case 3:
							alert("用户状态异常，请联系主管税务机关！");
							break;
						case -3: // session 失效请重新登录
							break;
						default:
							alert(jsonObj.msg);
					}
				}]
			});
		},
        addQyyhByNsrsbhIA: function (nsrsbh) {
            var zh = $("input[name='USER_ZH']").val().trim();
            if (nsrsbh) {
                zh = nsrsbh;
            }

            baseTools.xhrAjax({
                url: '/taxclient/addQyyhByNsrsbh.do',
                bShow: false,
                params: {
                    NSRSBH: zh
                },
                callback: [function (jsonObj, xhrArgs) {
                    switch (parseInt(jsonObj.code)) {
                        // 查询操作返回标志
                        case 1: // 开户成功
                            if (confirm("您已成功开通广西壮族自治区电子税务局！默认密码Aa加纳税人识别号后8位，现在是否登录？")) {
                                $(":input[name='USER_ZH']").val(zh);

                                //IA登陆的情况，需要拿纳税人识别号查询得到登陆账号和密码
                                baseTools.xhrAjax({
                                    url: '/getNsrzhmm.do',
                                    bShow: false,
                                    async: false,
                                    params: {
                                        USERNAME: zh,
                                        PASSWORD: ''
                                    },
                                    callback: [function (jsonObj) {
                                        if(jsonObj){
                                            $("#wep_form_iadl").find("input[name='USER_ZH']").val(jsonObj.username);
                                            $("#wep_form_iadl").find("input[name='USER_MM']").val(jsonObj.nsrdlmm );
                                        }
                                    }]
                                });
                                //$(":input[name='USER_MM']").val("Aa" + zh.substring(zh.length - 8));
                                    curSeg.onLoginIA();
                            }else{
                                $(":input[name='USER_MM']").val("");
                                $(":input[name='USER_MM']").attr("readonly", false);
							}
                            break;
                        // 在线帮助
                        case 0:
                            alert("您已开通过广西壮族自治区电子税务局，无需再次开通！");
                            break;
                        case 2:
                            alert("纳税人识别号无效！");
                            break;
                        case 3:
                            alert("用户状态异常，请联系主管税务机关！");
                            break;
                        case -3: // session 失效请重新登录
                            break;
                        default:
                            alert(jsonObj.msg);
                    }
                }]
            });
        },

		addQyyhByNsrsbhDx: function (zh_temp) {
			var zh = $("input[name='USER_ZH']").val();
			var zh_dx = $("input[name='USER_ZH_DX']").val();

			if (zh == "") {
				zh = zh_dx;
			}

			if (zh_temp != "") {
				zh = zh_temp;
			}

			baseTools.xhrAjax({
				url: '/taxclient/addQyyhByNsrsbh.do',
				bShow: false,
				params: {
					NSRSBH: zh
				},
				callback: [function (jsonObj, xhrArgs) {
					switch (parseInt(jsonObj.code)) {
						// 查询操作返回标志
						case 1: // 开户成功
							if (confirm("您已成功开通广西壮族自治区电子税务局！默认密码Aa加纳税人识别号后8位，现在是否登录？")) {
								$(":input[name='USER_MM_DX']").val("Aa" + zh.substring(zh.length - 8));
								index_gds.onHideDlrsf();
							}
							break;
							// 在线帮助
						case 0:
							alert("您已开通过广西壮族自治区电子税务局，无需再次开通！");
							break;
						case 2:
							alert("纳税人识别号无效！");
							break;
						case 3:
							alert("用户状态异常，请联系主管税务机关！");
							break;
						case -3: // session 失效请重新登录
							break;
						default:
							alert(jsonObj.msg);
					}
				}]
			});
		},
		//给地税单管户开户
		addQyyhForDsdgh: function () {
			var zh = $(":input[name='USER_ZH']").val().trim();
			baseTools.xhrAjax({
				url: '/taxclient/addQyyhForDsdgh.do',
				bShow: false,
				params: {
					DLMC: zh
				},
				callback: [function (jsonObj, xhrArgs) {
					switch (parseInt(jsonObj.code)) {
						// 查询操作返回标志
						case 1: // 开户成功
							if (confirm("您已成功开通广西壮族自治区电子税务局！默认密码Aa加纳税人识别号后8位，现在是否登录？")) {
								$(":input[name='USER_MM']").val("Aa" + zh.substring(zh.length - 8));
								curSeg.onLogin();
							}
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
		/**
		 * 需要的时候可以覆盖该方法 在ajax调用中，在得到数据时调用该方法
		 */
		pageFlowControl: function (jsonObj, xhrArgs) {
			//登录返回清空账号密码，启用登录按钮、输入框
			var zh = $(":input[name='USER_ZH']").val();
			switch (parseInt(jsonObj.code)) {
				case 0:
					alert(jsonObj.msg);
					curSeg.unlockLogin();
					load.closeLoading();
					break;
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
						jcptTools.setCookie("USER_CODE", $(":input[name='USER_ZH']").val().trim());
						// 删除弱口令标志
						jcptTools.delCookie("RKLBZ");
						//记录签名数据，后面跳转地税网厅需要使用
						jcptTools.setCookie("randomData", random);
						jcptTools.setCookie("signData", signdata);
						jcptTools.setCookie("signcert", signcert);
						jcptTools.setCookie("cert_hnOrhnxa", Cert_HnOrHnxa);
						jcptTools.setCookie("caNsrsbh", CertCN);

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

					if (jsonObj.data.RDBZ == 'Y') {
						alert("获取地方税费业务信息超时，你可办理其他业务，或5分钟后重新登录。");
					}
					if (jsonObj.data.DSKHBZ == 'Y') {
						alert("您已成功开通广西壮族自治区电子税务局！默认密码Aa加纳税人识别号后8位。");
					}

					baseTools.hideMash(maskObj);

					//登录后清除value值
					$(".wep_form input.clearInput").val("");
					layui.use('form', function () {
						var form = layui.form;
						form.render();

						$('#sfcx').find('input').val("请选择身份");
						$('#sfhm').find('input').val("请选择手机号码");
					})

					//显示选择入口界面
					$(".login_box").hide();

					curSeg.unlockLogin();

					//报验户 直接跳转到main页面
					if (jsonObj && jsonObj.DQ_YHSF && "BYH" == jsonObj.DQ_YHSF) {

						//判断是在mh.html还是login_index.html
						if (window.location.href.indexOf(mhHtmlIndex) > -1 || window.location.href.indexOf(mh_khdHtmlIndex) > -1) {
							jcptTools.OpenModel(jcptTools.getMain());
						} else {
							window.location.reload();
						}
					} else {
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
					}

					//写在最后不怕前面报错
					baseTools.setCookie("loginFlag", "true");
					load.closeLoading();
					jcptTools.closeAllLayer();
					break;
				case -1: //登录失败
					jcptTools.clearAllCookie();
					baseTools.hideMash(maskObj);
					if (jsonObj.msg == '您尚未开通系统的使用权限！') {
						if (confirm("您尚未开通系统的使用权限！\n是否现在开通？")) {
							index_gds.addQyyhByNsrsbh();
						}
					} else {
						alert(jsonObj.msg);
					}
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
					baseTools.hideMash(maskObj);
                    curSeg.unlockLogin();
					load.closeLoading();
					break;
				case -5: //弱密码类型
					jcptTools.setCookieJsonObjLogin(jsonObj.JCPT_USER);
					// jcptTools.setCookieJsonObjLogin(jsonObj.data);
					// window.location.href = "/web/dzswj/ythclient/up_qyyh_pwd.html";
					var url = jcptTools.getMain();
					if (jcptTools.getIsZrr()) {
						dzswjCommon.setCookieCddwID('75010', '77886', '75242');
					} else {
						dzswjCommon.setCookieCddwID('75020', '75055', '77884');
					}
                    curSeg.unlockLogin();
					jcptTools.changePWD(url);
					break;
				case -9: //尚未开户
					jcptTools.clearAllCookie();
					baseTools.hideMash(maskObj);
					if (confirm("您尚未开通系统的使用权限！\n是否现在开通？")) {
						index_gds.addQyyhByNsrsbh(jsonObj.NSRSBH);
					}
                    curSeg.unlockLogin();
					load.closeLoading();
					break;
				default:
					curSeg.unlockLogin();
					load.closeLoading();
			}
		},
		pageFlowControl_gr: function (jsonObj, xhrArgs) {
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
					baseTools.hideMash(maskObj);
					load.closeLoading();
					break;
				case -3: // session 失效请重新登录
					jcptTools.msg(jsonObj.msg);
					window.location = jcptTools.getLogin();
					break;
				default:
					load.closeLoading();
			}
		}
	};
})();