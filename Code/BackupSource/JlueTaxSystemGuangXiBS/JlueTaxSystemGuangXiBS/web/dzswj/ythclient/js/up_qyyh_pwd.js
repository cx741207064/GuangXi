$(document).ready(function () {
    up_qyyh_pwd.onload();
});
var up_qyyh_pwd = (function () {
    var curSeg;

    var initLayout = function () {
        $("#ID_QY_ZH").text(baseTools.getUserDataByKey("NSRSBH"));
        $("#ID_QY_ZHMC").text(baseTools.getUserDataByKey("NSRMC"));
        $("#ID_QY_QYMC").text(baseTools.getUserDataByKey("NSRMC"));
    };

    //初始化绑定
    var initBlur = function () {
        //旧密码离焦事件
        $(":input[name='QY_OLDPWD']").blur(function () {
//            regValidator.checkOldpwd($(this));
        	if($.trim($(":input[name='QY_OLDPWD']").val()) == ""){
        		regValidator.showMsg($(":input[name='QY_OLDPWD']"), true, false, regValidator.pwd_msg, true,"请输入当前密码");
        		return false;
        	}else{
        		regValidator.showMsg($(":input[name='QY_OLDPWD']"), false, true, "", false);
        	}
        });
        //密码离焦事件
        $(":input[name='QY_PWD']").blur(function () {
            regValidator.checkPwd($(this));
        });
        //确认密码离焦事件
        $(":input[name='QY_REPWD']").blur(function () {
            regValidator.checkRepwd($(this),$(":input[name='QY_PWD']"));
        });
    };

    return {
        onload: function () {
            curSeg = up_qyyh_pwd;
            regValidator.init();
            initLayout();
            initBlur();

            $(":input[name='REG_PWD']").parent().find(".msg").html(regValidator.pwd_msg);
        },




        //检查全部
        checkAll: function () {
            /*if (!regValidator.checkOldpwd($(":input[name='QY_OLDPWD']"))) {
                return false;
            }*/
        	if($.trim($(":input[name='QY_OLDPWD']").val()) ==""){
        		regValidator.showMsg($(":input[name='QY_OLDPWD']"), true, false, regValidator.pwd_msg, true,"请输入当前密码");
        		return false;
        	}else{
        		regValidator.showMsg($(":input[name='QY_OLDPWD']"), false, true, "", false);
        	}
            if (!regValidator.checkPwd($(":input[name='QY_PWD']"))) {
                return false;
            }
            if (!regValidator.checkRepwd($(":input[name='QY_REPWD']"),$(":input[name='QY_PWD']"))) {
                return false;
            }
            return true;
        },

        //个人用户修改密码
        onUpPwd: function () {
            if ($("#ID_QY_ZH").text() == "") {
                jcptTools.msg("没有获取到企业账号，请重新登录后再修改!");
                return false;
            }
            if ($("#ID_QY_ZHMC").text() == "") {
                jcptTools.msg("没有获取到企业账号名称，请重新登录后再修改!");
                return false;
            }

            if (curSeg.checkAll()) {
                //调用具体的注册方法
                curSeg.onUpPwdInfo();
            }
        },
        onUpPwdInfo: function () {
            //将注册按钮设置为只读，防止重复点击
            $(":input[name='submit']").attr("readonly", "readonly");

            var oldPass = $(":input[name='QY_OLDPWD']");
            var newPass1 = $(":input[name='QY_PWD']");
            var newPass2 = $(":input[name='QY_REPWD']");

            //重置密码aes加密传输
            var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
            var old_srcs = CryptoJS.enc.Utf8.parse(oldPass.val());
            var new_srcs = CryptoJS.enc.Utf8.parse(newPass1.val());
            var encrypted_old = CryptoJS.AES.encrypt(old_srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
            var encrypted_new = CryptoJS.AES.encrypt(new_srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });

            var params = {
                DLMC: baseTools.getUserDataByKey("DLMC"),
                PASSWORD_OLD: encrypted_old.toString(),
                PASSWORD_R: encrypted_new.toString(),
                qxxkdm: '99'//
            };
            baseTools.xhrAjax({
                url: "/taxclient/changePass.do",
                params: params,
                callback: [ function (jsonObj, xhrArgs) {
                    var code = parseInt(jsonObj.code);
                    var msg = jsonObj.msg;
                    if (code == 0) {
                        alert("密码修改成功，请保存好新密码，并用新密码重新登录！");
                        oldPass.val("");
                        newPass1.val("");
                        newPass2.val("");
                        //设置密码强度标识,不用重新登录
                        jcptTools.setCookie("CHECKPASS", false);
                        jcptTools.clearAllCookie();
                        jcptTools.gotoLogin();
                    } else {
                        alert(msg);
                    }
                } ]
            });
        }
    }
})();
