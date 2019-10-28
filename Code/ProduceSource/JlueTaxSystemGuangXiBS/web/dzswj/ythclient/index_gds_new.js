var qydl_bz = 1;//1:账号密码验证 2：不验证密码
var sfdl_bz = 2;//1:身份证登录隐藏 2:身份证登录显示

$(document).ready(function () {
	index_gds_new.onLoad();
    var sfdl_nav_html="<li class=\"\" id=\"wdl_sfzdl_nav\">身份证登录</li>";
	var sfdl_html="<form id=\"wep_form_sfzdl\" action=\"\" style=\"display: none;\">\n" +
        "<p class=\"usernameAll\">\n<input type=\"text\" value=\"请输入统一社会信用代码（或纳税人识别号）\" class=\"username clearInput\" data-value=\"请输入统一社会信用代码（或纳税人识别号）\" />\n<input type=\"text\" name=\"USER_ZH3\"    class=\"usernames clearInput\" />\n</p>\n" +
        "<p class=\"passwordAll\">\n<input type=\"text\" class=\"topPw clearInput\" value=\"请输入密码\"  data-value=\"请输入密码\" />\n<input type=\"password\" class=\"passwords clearInput\" name=\"USER_MM3\" /></p>\n" +
        "<p class=\"layui-form\">\n<span class=\"sfdl_new\" id=\"sfcx3\">\n" +
        "<select name=\"SFLX_ZJLX\" lay-filter=\"sflx_dm_filter3\" onchange=\"index_gds.onClickDlrsf3(this)\">\n" +
        "<option value=\"请选择登录身份\">请选择登录身份</option>\n" +
        "<option value=\"1\">法定代表人</option>\n" +
        "<option value=\"2\">财务负责人</option>\n" +
        "<option value=\"3\">办税人</option>\n" +
        "<option value=\"4\">购票员</option>\n" +
        "</select>\n" +
        "</span>\n" +
        "<span class=\"sfdl_new usernameAll\">\n" +
        "<input type=\"text\" class=\"username clearInput\" value=\"请输入身份证件号码\" data-value=\"请输入身份证件号码\">\n" +
        "<input type=\"text\" name=\"USER_SFZH\" class=\"usernames clearInput\" />\n" +
        "</span>\n" +
        "</p>\n" +
        "<p style=\"white-space: normal;margin-top: 5px;\">\n" +
        "<input type=\"button\" id=\"id_sfzdl_login\"  class=\"wep_login_btn\" onclick=\"index_gds.dlTip(5)\" value=\"登  录\">\n" +
        "</p>\n</form>";
	if(qydl_bz==1){
        $("#wdl_dxdl1").css("display","block");
		$("#wdl_dxdl2").css("display","none");
        // $("#wdl_dxdl3").css("display","none");
	}else if(qydl_bz==2){
        $("#wdl_dxdl2").css("display","block");
        $("#wdl_dxdl1").css("display","none");
        // $("#wdl_dxdl3").css("display","none");
	};
	if(sfdl_bz==1){
        $("#wdl_sfzdl_nav").remove();
        $(".wep_loginform").removeClass('wdl_loginform');
        $("#wep_form_sfzdl").remove();
    }else if(sfdl_bz==2){
        $(".wep_ul li:first-child").after(sfdl_nav_html);
        $(".wep_loginform").addClass('wdl_loginform');
        $("#wep_form_dxdl").after(sfdl_html);

        $("#sfcx3").on("click", "input", function () {
            index_gds_new.onHideDlrsf3()
        });
        layuiTools.selectEvent("sflx_dm_filter3", index_gds_new.onClickDlrsf3);
    };
});

/**
 * <ol>
 * date:2019-2-14 editor:ZHANGDONGFANG
 * </ol>
 */
var index_gds_new = (function () {
    var $obj_dxdl_login;//短信登陆 登陆按钮
    var timerReg_dxdl_login;//短信登陆 登陆按钮定时器


    //跳转到过度页面只存放Tid，跳转到主页存Tid Pid 所以 根据PID区分跳转到那个页面
    var mhToMainPId="75037,75038,75016,10001,75260,75261";//前三个是企业  后三个是个人
    var mhHtmlIndex="mh.aspx";
	var mh_khdHtmlIndex = "mh_khd.html";

	// 私有属性
	var curSeg;
	var re_yh = null;
	var re_zh = null;
	var re_mm = null;
	var zh, mm;

	// 私有方法
	var initLayout = function () {

		// 初始化页面UI
		if (!jcptTools.checkCookie()) {
			$(":input").attr('disabled', true);
			$("#msg")
				.html(
					"<a href='../taxclient/manage/cookie_help/cookie.html' target='_blank'><font style='font-size:12px;color:red'>浏览器COOKIE启用说明!</font></a> ")
		} else {
			$(":input[name='USER_ZH2']").val(jcptTools.getCookie("USER_CODE"));
		}
	};

	// 公有方法
	return {
		onLoad: function () {
			curSeg = index_gds_new;

			// initLayout();

			//登录框value模拟placeholder
			$("input").each(function () {
				var dataValue = $(this).data("value");
				$(this).val(dataValue);
			});
			$("select[name='SFLX_DM2']").val("0");
			// var oldval;
			// $(".wep_loginform input[name='USER_ZH2']").focus(function () {
			// 	oldval = $(this).val();
			// 	if (oldval == "账号") {
			// 		$(this).val("");
			// 	}
			// 	$(this).removeClass('wrong').addClass('right');
			// });
			// $(".wep_loginform input[name='USER_ZH2']").blur(function () {
			// 	var dataValue1 = $(this).data("value");
			// 	if ($(this).val() == "" || $(this).val() == undefined) {
			// 		$(this).val(dataValue1);
			// 		$(this).removeClass('right').addClass('wrong');
			// 	}
			// })
			// $(".username2").focus(function () {
			// 	$(this).hide().siblings(".usernames2").show().focus();
			// 	$(this).siblings(".usernames2").removeClass('wrong').addClass('right');
			// })
			// $(".usernames2").blur(function () {
			// 	var dataValue1 = $(this).data("value");
			// 	var dataValue2=$(this).siblings(".username2").val();
			// 	if ($(this).val() == "" || $(this).val() == undefined) {
			// 		$(this).val(dataValue1);
			// 		$(this).siblings(".username2").val(dataValue2);
			// 		$(this).hide().siblings(".username2").show();
			// 		$(this).siblings().removeClass('right').addClass('wrong');
			// 	}
			// })
			// $("input[name='WEP_SEND_YZM2']").focus(function () {
			// 	$(this).val("");
			// }).blur(function () {
			// 	var dataValue1 = $(this).data("value");
			// 	if ($(this).val() == "") {
			// 		$(this).val(dataValue1);
			// 	}
			// })
			// $(".widthHalf2").focus(function () {
			// 	$(this).hide().siblings(".widthHalfs2").show().focus();
			// 	$(this).siblings(".widthHalfs2").removeClass('wrong').addClass('right');
			// })
			// $(".widthHalfs2").blur(function () {
			// 	var dataValue1 = $(this).data("value");
			// 	if ($(this).val() == "" || $(this).val() == undefined) {
			// 		$(this).val(dataValue1);
			// 		$(this).siblings(".widthHalf2").val("请输入短信验证码");
			// 		$(this).hide().siblings(".widthHalf2").show();
			// 		$(this).siblings().removeClass('right').addClass('wrong');
			// 	}
			// })
			//登陆框模拟placeholder结束

			$("#sfcx2").on("click", "input", function () {
				index_gds_new.onHideDlrsf()
			});

			layuiTools.selectEvent("sflx_dm_filter2", index_gds_new.onClickDlrsf);


            //
			// $('.wep_login_btn2').val("登  录");
			// $('.wep_send_msg2').val("获取验证码");

            //老域名增加自动跳转
            // if(window.inlineOutlinepro == "sc" && window.location.hostname == "www.gxgs.gov.cn"){
            //     alert("按照国家税务总局统一部署，2019年1月1号起广西电子税务局将使用新的域名，检测到您正在使用旧域名登录，我们将会为您自动跳转到新域名(etax.guangxi.chinatax.gov.cn)。如浏览器有收藏请重新收藏。");
            //     window.location.href="http://etax.guangxi.chinatax.gov.cn:9711/web/";
            // }

			// 删除组件释放内存
			$(window).unload(function () {});
		},

        //通用校验用户名、密码不为空方法
        onCheckParam: function (form_id) {
            $("#" + form_id).find("input[name='USER_ZH2']").val($("#" + form_id).find("input[name='USER_ZH2']").val().trim());

            zh = $("#" + form_id).find("input[name='USER_ZH2']").val();

            if (zh.length == 0 || zh == "账号" || zh == "请输入统一社会信用代码（或纳税人识别号）" || zh == "请输入账号") {
                alert('请录入帐号!');
                $("#" + form_id).find("input[name='USER_ZH2']")[0].focus();
                return false;
            }

            return true;
        },

        onCheckParam3: function (form_id) {
            $("#" + form_id).find("input[name='USER_ZH3']").val($("#" + form_id).find("input[name='USER_ZH3']").val().trim());
            $("#" + form_id).find("input[name='USER_MM3']").val($("#" + form_id).find("input[name='USER_MM3']").val().trim());

            zh = $("#" + form_id).find("input[name='USER_ZH3']").val();
            mm = $("#" + form_id).find("input[name='USER_MM3']").val();

            if (zh.length == 0 || zh == "账号" || zh == "请输入统一社会信用代码（或纳税人识别号）" || zh == "请输入账号") {
                alert('请录入帐号!');
                $("#" + form_id).find("input[name='USER_ZH3']")[0].focus();
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
            if (!index_gds_new.onCheckParam("wep_form_dxdl")) {
                return;
            }

            var int_zh = $("#wep_form_dxdl").find("input[name='USER_ZH2']").val().trim();
			if (re_yh != null && re_zh == int_zh) {
				$("#dlrsf_dh_content").hide();
				$("#dlrsf_content").show();
				return;
			}

            re_zh = int_zh;

			load.loading();
			baseTools.xhrAjax({
				url: '/checkQyyhDxptInfoNoMm.do',
				bShow: false,
				async: false,
				params: {
					USERNAME: int_zh,
				},
				callback: [index_gds_new.pageFlowControl_dx_info]
			});
		},
        //1.2短信登陆 切换登陆身份 事件
        onClickDlrsf: function (obj) {

            if (!index_gds_new.onCheckParam("wep_form_dxdl")) {
                return;
            }

            var int_zh = $("#wep_form_dxdl").find("input[name='USER_ZH2']").val().trim();
            if (re_yh == null || re_zh != int_zh) {
                $("#wep_form_dxdl").find("select[name='SJHM2']").find("option:selected").text("");
                $("#wep_form_dxdl").find("select[name='SJHM2']").empty();
                index_gds_new.onHideDlrsf();
                return;
            }

            $("#wep_form_dxdl").find("select[name='SJHM2']").find("option:selected").text("");
            $("#wep_form_dxdl").find("select[name='SJHM2']").empty();
            var op = $("#wep_form_dxdl").find("select[name='SFLX_DM2']").find("option:selected").val();
            if (!op) {
                alert("请选择登录人身份1");
                return;
            }
            if (op == "1") {
                $("#wep_form_dxdl").find("select[name='SJHM2']").append("<option value='1'>" + re_yh.FDDBRYDDH + "</option>");
                layuiTools.renderForm();
                if (re_yh.FDDBRYDDH == "") {
                    alert("您选择的登录人身份未进行手机号码登记，请到税务大厅进行手机号码登记或重新选择其他登录人身份进行登录   ");
                }
            } else if (op == "2") {
                $("#wep_form_dxdl").find("select[name='SJHM2']").append("<option value='2'>" + re_yh.CWFZRYDDH + "</option>");
                layuiTools.renderForm();
                if (re_yh.CWFZRYDDH == "") {
                    alert("您选择的登录人身份未进行手机号码登记，请到税务大厅进行手机号码登记或重新选择其他登录人身份进行登录   ");
                }
                $("#dlrsf_dh").val(re_yh.CWFZRYDDH);
            } else if (op == "3") {
                $("#wep_form_dxdl").find("select[name='SJHM2']").append("<option value='3'>" + re_yh.BSRYDDH + "</option>");
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
                        $("#wep_form_dxdl").find("select[name='SJHM2']").append("<option value='" + gpyArr[i].LXDH_XH + "'>" + gpyArr[i].LXDH + "</option>");
                    }
                } else {
                    alert("您选择的登录人身份未进行手机号码登记，请到税务大厅进行手机号码登记或重新选择其他登录人身份进行登录   ");
                }
            }
        },
        //1.3短信登陆 发送验证码
		onGetQyyhDxptYzm: function (op) {

            if (!index_gds_new.onCheckParam("wep_form_dxdl")) {
                return;
            }

			var zh = $("#wep_form_dxdl").find("input[name='USER_ZH2']").val().trim();
			var sjhm = $("#wep_form_dxdl").find("input[name='WEP_WZ_SJHM']").val().trim();


			if (!index_gds_new.onCheckParam(op)) {
				return;
			}

            if (sjhm.length == 0 || sjhm == "请输入完整手机号") {
                alert('请输入完整手机号!');
                $("#" + form_id).find("input[name='WEP_WZ_SJHM']")[0].focus();
                return;
            }

			if (re_yh == null || re_zh != zh ) {
                $("#wep_form_dxdl").find("select[name='SJHM2']").find("option:selected").text("");
                $("#wep_form_dxdl").find("select[name='SJHM2']").empty();
				index_gds_new.onHideDlrsf();
				return;
			}

			var lxdh;
			var djhm;
			if (op == "wep_form_dxdl") {
				var jyxh = $("#wep_form_dxdl").find("span[name='JYXH2']");
				var username = $("#wep_form_dxdl").find("input[name='USER_ZH2']");
				lxdh = $("#wep_form_dxdl").find("select[name='SFLX_DM2']").find("option:selected");
				djhm = $("#wep_form_dxdl").find("select[name='SJHM2']").find("option:selected");
				if ($(lxdh).val() == "") {
					alert("您选择的登录人身份   ");
					return;
				}
				if (djhm.length == 0 || $(djhm).val() == "") {
					var op = $("#wep_form_dxdl").find("select[name='SFLX_DM2']").find("option:selected").val();

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

            var $obj = $("#wep_form_dxdl").find(":input[name='WEP_SEND_MSG2']");
            var timerReg = jcptTools.countDown($obj, 60, 's重新获取');

			baseTools.xhrAjax({
				url: '/getQyyhDxptYzmNoMm.do',
				bShow: false,
				async: true,
				params: {
					LXDH: $(lxdh).val(),
					USERNAME: username.val().trim(),
					JYXH: jyxh.text(),
					DJHM: $(djhm).val(),
					WZ_SJHM:sjhm.trim()
				},
				callback: [function (jsonObj, xhrArgs) {
					//登录返回清空账号密码，启用登录按钮、输入框
					switch (parseInt(jsonObj.code)) {
						case 1:
							$(jyxh).text(jsonObj.data);
							alert("短信发送成功，请收到短信后，将对应交易序号" + jsonObj.data + "的验证码录入界面，点击登录  ");
							// index_gds_new.onSetDx("wep_form_dxdl");
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
            var int_zh = $("#wep_form_dxdl").find("input[name='USER_ZH2']").val().trim();
            if (!index_gds_new.onCheckParam("wep_form_dxdl")) {
                return;
            }
            curSeg.lockLogin("wep_form_dxdl");
            if ($('#dlrsf_dh').val() == "") {
                alert("请选择有效的手机号码");
                curSeg.unlockLogin();
                return false;
            }

            var wep_send_yzm = $("#wep_form_dxdl").find("input[name='WEP_SEND_YZM2']").val().trim();
            var jyxh = $("#wep_form_dxdl").find("span[name='JYXH2']").text();

            if (wep_send_yzm == "") {
                alert("请输入验证码");
                curSeg.unlockLogin();
                return false;
            }
            if (re_yh == null || re_zh != int_zh) {
                $("#wep_form_dxdl").find("select[name='SJHM2']").find("option:selected").text("");
                $("#wep_form_dxdl").find("select[name='SJHM2']").empty();
                index_gds_new.onHideDlrsf();
                curSeg.unlockLogin();
                return false;
            }

            $obj_dxdl_login = $("#id_dxdl_login2");
            timerReg_dxdl_login = jcptTools.countDown($obj_dxdl_login, 60, 's重新登录');

            load.loading();
            baseTools.xhrAjax({
                url: '/qyDxptLogin.do',
                bShow: false,
                async: true,
                params: {
                    USERNAME: zh,
                    DX_YZM: wep_send_yzm,
                    DX_JYXH: jyxh,
                    CUR_USERID: "-1"
                },
                callback: [curSeg.pageFlowControl_dx_login]
            });

        },

        //锁定用户名密码
        lockLogin: function () {
            //隐藏登录按钮、输入框置灰，登录后恢复
            $('.wep_login_btn').attr("disabled", "disabled");
            $(":input[name='USER_ZH2']").attr("readonly", "readonly");
            $(":input[name='WEP_WZ_SJHM']").attr("readonly", "readonly");
        },
        //解锁用户名密码
		unlockLogin: function () {
			//隐藏登录按钮、输入框置灰，登录后恢复
			$('.wep_login_btn').removeAttr("disabled");
            $(":input[name='USER_ZH2']").removeAttr("readonly");
            $(":input[name='WEP_WZ_SJHM']").removeAttr("readonly");
		},
        //清空用户名密码
		onClear: function () {
			$(":input[name='USER_ZH2']").val('');
			$(":input[name='WEP_WZ_SJHM']").val('');
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

                    var op = $("#wep_form_dxdl").find("select[name='SFLX_DM2']").find("option:selected").val();
                    if (!op == "") {
                        index_gds_new.onClickDlrsf();
                    }
                    break;
                case -1: //登录失败
                    //taxClientTools.clearAllCookie();
                    /*if (jsonObj.msg == '您尚未开通系统的使用权限！') {
                        if (confirm("您尚未开通系统的使用权限！\n是否现在开通？")) {
                            index_gds_new.addQyyhByNsrsbhIA(zh);
                            break;
                        } else {
                            index_gds_new.unlockLogin();
                        }
                    } else {*/
                    re_yh=null;
                    alert(jsonObj.msg);
                    index_gds_new.unlockLogin();
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
			// var zh = $(":input[name='USER_ZH2']").val();
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
						if(gsxxData == undefined || gsxxData == null){
                            curSeg.unlockLogin();
                            load.closeLoading();
                            alert("登录失败，请重新登录！");
                            return;
                        }
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

						$('#sfcx2').find('input').val("请选择登录身份");
						$('#sfhm2').find('input').val("请选择手机号码");
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
                            index_gds.init();
                            //jcptTools.OpenModel(jcptTools.getLoginIndex());
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
        /**
         * 身份证号登录
         * @param obj
         */
        onClickDlrsf3: function (obj) {

            if (!index_gds_new.onCheckParam3("wep_form_sfzdl")) {
                return;
            }

            var int_zh = $("#wep_form_sfzdl").find("input[name='USER_ZH3']").val().trim();
            var int_mm = $("#wep_form_sfzdl").find("input[name='USER_MM3']").val().trim();
            if (re_yh == null || re_zh != int_zh || re_mm != int_mm) {
                index_gds_new.onHideDlrsf3();
                return;
            }

            var op = $("#wep_form_sfzdl").find("select[name='SFLX_ZJLX']").find("option:selected").val();
            if (!op) {
                alert("请选择登录人身份!");
                return;
            }
        },
        onHideDlrsf3: function () {
            if (!index_gds_new.onCheckParam3("wep_form_sfzdl")) {
                return;
            }

            var int_zh = $("#wep_form_sfzdl").find("input[name='USER_ZH3']").val().trim();
            var int_mm = $("#wep_form_sfzdl").find("input[name='USER_MM3']").val().trim();
            if (re_yh != null && re_zh == int_zh && re_mm == int_mm) {
                return;
            }

            re_zh = int_zh;
            re_mm = int_mm;

            var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
            var srcs = CryptoJS.enc.Utf8.parse(int_mm);
            var encrypted = CryptoJS.AES.encrypt(srcs, key, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            load.loading();
            var yzm = '-1';
            baseTools.xhrAjax({
                url: '/checkQyyhDxptInfo.do',
                bShow: false,
                async: false,
                params: {
                    USERNAME: int_zh,
                    PASSWORD: encrypted.toString(),
                    RCODE:yzm,
                    DLFS:'SFZDL'
                },
                callback: [index_gds_new.pageFlowControl_dx_info3]
            });
        },
        pageFlowControl_dx_info3: function (jsonObj, xhrArgs) {
            load.closeLoading();
            //登录返回清空账号密码，启用登录按钮、输入框
            switch (parseInt(jsonObj.code)) {
                case 1:
                    re_yh = jsonObj.data;

                    var op = $("#wep_form_sfzdl").find("select[name='SFLX_ZJLX']").find("option:selected").val();
                    if (!op == "") {
                        index_gds_new.onClickDlrsf3();
                    }
                    break;
                case -1: //登录失败
                    re_yh=null;
                    alert(jsonObj.msg);
                    index_gds_new.unlockLogin();
                    // }
                    $("#wep_form_sfzdl").find("select[name='SFLX_ZJLX']").val("");
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
                    $("#wep_form_sfzdl").find("select[name='SFLX_ZJLX']").val("");
                    break;
                case -101:
                    //图片验证码错误
                    alert(jsonObj.msg);
                    curSeg.unlockLogin();
                    re_yh=null;
                    break;
                default:
                    curSeg.unlockLogin();

            }
        },
        onDxLogin_new: function () {
            var int_zh = $("#wep_form_sfzdl").find("input[name='USER_ZH3']").val().trim();
            var int_mm = $("#wep_form_sfzdl").find("input[name='USER_MM3']").val().trim();
            var int_sflx = $("#wep_form_sfzdl").find("select[name='SFLX_ZJLX']").val().trim();
            var int_sfzh = $("#wep_form_sfzdl").find("input[name='USER_SFZH']").val().trim();
            if (!index_gds_new.onCheckParam3("wep_form_sfzdl")) {
                return;
            }
            if(int_sflx == null || int_sflx == ""){
                alert("请选择身份类型！");
                return;
            }
            if(int_sfzh == null || int_sfzh == ""){
                alert("请输入身份证件号码！");
                return;
            }
            //curSeg.lockLogin("wep_form_sfzdl");

            var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
            var srcs = CryptoJS.enc.Utf8.parse(int_mm);
            var encrypted = CryptoJS.AES.encrypt(srcs, key, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });


            if (re_yh == null || re_zh != int_zh || re_mm != int_mm) {
                index_gds_new.onHideDlrsf3();
                curSeg.unlockLogin();
                return false;
            }

            $obj_dxdl_login = $("#id_sfzdl_login");
            timerReg_dxdl_login = jcptTools.countDown($obj_dxdl_login, 60, 's重新登录');

            load.loading();
            baseTools.xhrAjax({
                url: '/qyDxptLogin.do',
                bShow: false,
                async: true,
                params: {
                    USERNAME: zh,
                    PASSWORD: encrypted.toString(),
                    SFLX : int_sflx,
                    SFZHM : int_sfzh,
                    DLFS:'SFZDL',
                    CUR_USERID: "-1"
                },
                callback: [curSeg.pageFlowControl_dx_login]
            });

        },usernameBlur:function(obj){
            var zh = $("#wep_form_sfzdl").find("input[name='USER_ZH3']").val().trim();
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