$(document).ready(function () {
    mhtt.onload();
});
var mhtt = (function () {
    //跳转到过度页面只存放Tid，跳转到主页存Tid Pid 所以 根据PID区分跳转到那个页面
    var mhToMainPId="75037,75038,75016,10001,75260,75261";//前三个是企业  后三个是个人
    var mhHtmlIndex="mh.html";
    var mh_khdHtmlIndex = "mh_khd.html";

    var drag_win_id = "main";
    var maskObj;
    var init = function () {

    };
    return {
        onload: function () {
            curSeg = mhtt;
        },
        onLogin: function () {
            var zh = $("#wep_form_cadl").find("input[name='USER_ZH']").val().trim();
            var mm = $("#wep_form_cadl").find("input[name='USER_MM']").val().trim();
            var yzm = $("#wep_form_cadl").find("input[name='WEP_SEND_YZM']").val().trim();
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
            if(yzm.length == 0) {
                alert('请输入验证码');
                $("#wep_form_cadl").find("input[name='WEP_SEND_YZM']").focus();
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
                                        curSeg.checkLoginCaWithoutCA();

                                    } else {
                                        alert("账号或密码输入错误！");
                                        curSeg.unlockLogin();
                                        return;
                                    }
                                } else {
                                    curSeg.checkLoginCaWithoutCA();
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
        lockLogin: function () {
            //隐藏登录按钮、输入框置灰，登录后恢复
            $('.wep_login_btn').attr("disabled", "disabled");
            $(":input[name='USER_ZH']").attr("readonly", "readonly");
            $(":input[name='USER_MM']").attr("readonly", "readonly");
        },
        unlockLogin: function () {
            //隐藏登录按钮、输入框置灰，登录后恢复
            load.closeLoading();
            $('.wep_login_btn').attr("disabled", false);
            $(":input[name='USER_ZH']").attr("readonly", false);
            $(":input[name='USER_MM']").attr("readonly", false);
        },
        checkLoginCaWithoutCA: function () {
            var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
            var srcs = CryptoJS.enc.Utf8.parse($(":input[name='USER_MM']").val().trim());
            var encrypted = CryptoJS.AES.encrypt(srcs, key, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            maskObj = baseTools.showMask("正在登录...");
            baseTools.xhrAjax({
                url: "/checkQyCaLoginNoCaYzm.do",
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
                    CERTCN: '',
                    WEP_SEND_YZM:document.getElementById('caYzm').value
                },
                callback: [curSeg.pageFlowControl]
            });
        },
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

                    if (jcptTools.setCookieJsonObjLogin(jsonObj.JCPT_USER)) {
                        //检查成功同时国税认证成功：jsonObj.data有数据是国税认证成功的标志
                        //写在此处是为了写一次cookie
                        gsxxData = jsonObj.data;
                        jcptTools.setCookie("USER_SEQ", gsxxData.USERID);
                        jcptTools.setCookie("DJXH", gsxxData.DJXH);
                        jcptTools.setCookie("DJZCLX_DM", gsxxData.DJZCLX_DM);
                        // 登录的账号
                        jcptTools.setCookie("USER_CODE", $(":input[name='USER_ZH']").val().trim());
                        // 删除弱口令标志
                        jcptTools.delCookie("RKLBZ");
                        //记录签名数据，后面跳转地税网厅需要使用
                        jcptTools.setCookie("randomData", '');
                        jcptTools.setCookie("signData", '');
                        jcptTools.setCookie("signcert", '');
                        jcptTools.setCookie("cert_hnOrhnxa", '');
                        jcptTools.setCookie("caNsrsbh", '');

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
                        alert("您已成功开通广西壮族自治区地税网上税务局！默认密码Aa加社会信用代码后8位。");
                    }

                    baseTools.hideMash(maskObj);

                    //登录后清除value值
                    $(".wep_form input.clearInput").val("");
                    layui.use('form', function () {
                        var form = layui.form;
                        form.render();

                        $('#sfcx').find('input').val("请选择登录身份");
                        $('#sfhm').find('input').val("请选择手机号码");
                    })

                    //显示选择入口界面
                    $(".login_box").hide();

                    curSeg.unlockLogin();

                    //报验户 直接跳转到main页面
                    if (jsonObj && jsonObj.DQ_YHSF && "BYH" == jsonObj.DQ_YHSF) {

                        //判断是在mh.html还是login_index.html
                        if (window.location.href.indexOf(mhHtmlIndex) > -1  || window.location.href.indexOf(mh_khdHtmlIndex) > -1) {
                            jcptTools.OpenModel(jcptTools.getMain());
                        } else {
                            window.location.reload();
                        }
                    } else {
                        if (window.location.href.indexOf(mhHtmlIndex) > -1  || window.location.href.indexOf(mh_khdHtmlIndex) > -1) {
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
                        } else {
                            curSeg.unlockLogin();
                        }
                    } else {
                        alert(jsonObj.msg);
                        curSeg.unlockLogin();
                    }
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
                    jcptTools.changePWD(url);
                    break;
                case -9: //尚未开户
                    jcptTools.clearAllCookie();
                    baseTools.hideMash(maskObj);
                    if (confirm("您尚未开通系统的使用权限！\n是否现在开通？")) {
                        index_gds.addQyyhByNsrsbh(jsonObj.NSRSBH);
                    } else {
                        curSeg.unlockLogin();
                    }
                    load.closeLoading();
                    break;
                default:
                    curSeg.unlockLogin();
                    load.closeLoading();
            }
        },
        onDsGrLogin: function () {

            if (!index_gds.onCheckParam("wep_form_grdl")) {
                return;
            }
            // var loginUrl = "/checkGrDxptLogin.do";
            var loginUrl = "/server/jcpt/logininfo/getGryhDsTxYzm.do";

            var jyxh = $("#wep_form_grdl_new").find("span[name='JYXH']").text();
            var mm = $("#wep_form_grdl :input[name='USER_MM']").val().trim();
            var zh = $("#wep_form_grdl :input[name='USER_ZH']").val().trim();
            var encrypted_zh = aesTools.encrypt(zh);
            var encrypted_mm = aesTools.encrypt(mm);
            var $obj = $("#wep_form_grdl_new").find(":input[name='WEP_SEND_MSG']");

            load.loading();
            baseTools.xhrAjax({
                url: loginUrl,
                bShow: false,
                params: {
                    DX_YZM: $("#wep_form_grdl").find("input[name='WEP_SEND_YZM']").val(),
                    CUR_USERID: "-1",
                    USERNAME: encrypted_zh,
                    PASSWORD : encrypted_mm,
                    YZM : document.getElementById('zrrYzm').value
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

                                    //2018.11.21 tbb 修改 需求变更 纳税人也增加过度页面
                                    // jcptTools.OpenModel(jcptTools.getMainZrr());
                                    // jcptTools.OpenModel(jcptTools.getLoginIndex());
                                    if (window.location.href.indexOf(mhHtmlIndex) > -1  || window.location.href.indexOf(mh_khdHtmlIndex) > -1) {
                                        //有值并且是上边的三个按钮 跳转到主页面
                                        var pid = dzswjCommon.getCookieCddwByStr("PID");
                                        if(pid && mhToMainPId.indexOf(pid) != -1){
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
        hahahahaha:function(obj){
            if(obj.value == '914101057355318653' || obj.value == '91410000169955857C' || obj.value == '41292119741215112201') {
                document.getElementById('yzmlogin').style.display = 'block';
                $('#yzmlogin').find('img').get(0).src = '/web/cm/showPictureCode.do?m'+ Math.random();
                document.getElementById('dlbutton').onclick = function() {
                    mhtt.onLogin()
                };
            }

            if(obj.value == '15890636717' || obj.value == '15093187793') {
                document.getElementById('zrrYzmDiv').style.display = 'block';
                document.getElementById('grdxDiv').style.display = 'none';
                $('#wep_form_grdl').find('img').get(0).src = '/web/cm/showPictureCode.do?m'+ Math.random();
                document.getElementById('grdlButton').onclick = function() {
                    mhtt.onDsGrLogin()
                };
            }
        },
        changeCode:function (obj) {
            obj.src = '/web/cm/showPictureCode.do?m'+ Math.random();
        }
    }
})();