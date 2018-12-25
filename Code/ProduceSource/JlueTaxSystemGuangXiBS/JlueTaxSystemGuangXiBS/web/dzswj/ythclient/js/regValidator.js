var regValidator = {};
regValidator.name_msg = "用户名最少需包含4个字符，最多可包含20个字符，可以使用数字或字母，且前四个字符必须为字母";
regValidator.pwd_msg = "密码长度为8到16位，可以使用数字及大、小写字母，其中数字和大、小写字母都必须至少要有一位";

regValidator.placeholder_name = "请输入用户名";
regValidator.placeholder_phone = "请输入手机号码";
regValidator.placeholder_pwd = "请输入密码";
regValidator.placeholder_repwd = "请重新输入设置的密码";
regValidator.placeholder_piccode = "请输入图片验证码";
regValidator.placeholder_dxyzm = "请输入短信验证码";
//个人用户修改手机号
regValidator.placeholder_new_phone = "请输入新手机号码";
//个人用户修改密码
regValidator.placeholder_old_pwd = "请输入当前密码";
regValidator.placeholder_new_pwd = "请输入新的密码";

//初始化离焦事件
regValidator.init = function () {
    $('.content').css("height",$(window).height() - $('.wrap>div:first').height() + 'px');
    $(window).resize(function(){
        $('.content').css("height",$(window).height() - $('.wrap>div:first').height() + 'px');
    });
    $("input[type='text']") .each(function() {
        $(this).focus(function() {
            $(this).removeClass('wrong').addClass('right');
        }).blur(function() {
            $(this).removeClass('right').addClass('wrong');
        })
    });
    $("input[type='password']") .each(function() {
        $(this).focus(function() {
            $(this).removeClass('wrong').addClass('right');
        }).blur(function() {
            $(this).removeClass('right').addClass('wrong');
        })
    });
};

/**
 * 显示校验信息
 * @param cs obj对象
 * @param inputColor true:input修改为红色 false:修改为黑色 (2018.8.23修改：规则内容也显示为红色)
 * @param showRule true:显示输入规则 false:不显示
 * @param ruleMsg 校验规则信息
 * @param showError true:显示错误信息 false:不显示
 * @param errMsg 错误信息
 */
regValidator.showMsg = function (cs, inputColor, showRule, ruleMsg, showError, errMsg) {
    if (inputColor) {
        cs.addClass("wrong");
        cs.parents("li").find(".msg").css("color", "#ff5621");
    } else {
        cs.removeClass("wrong").addClass('right');
        cs.parents("li").find(".msg").css("color", "");
    }
    if (showRule) {
        cs.parents("li").find(".msg").css("display", "block");
        cs.parents("li").find(".msg").html(ruleMsg);
    } else {
        cs.parents("li").find(".msg").css("display", "none");
    }
    if (showError) {
        cs.parents("li").find(".msg_exist").html(errMsg);
        cs.parents("li").find(".msg_exist").css("display", "block");
    } else {
        cs.parents("li").find(".msg_exist").css("display", "none");
    }

    if ((!inputColor) && (!showRule) && (!showError)) {
        cs.parents("li").find(".icon-roundcheckfill").css("display", "inline-block");//显示对号
        cs.parents("li").find(".icon-round_close_fill_light").css("display", "none");//不显示X号
    } else {
        cs.parents("li").find(".icon-roundcheckfill").css("display", "none");//不显示对号
        //为了解决图片验证码、短信验证码的问题
        if(showRule == true && ruleMsg == ""){
            cs.parents("li").find(".icon-round_close_fill_light").css("display", "none");//不显示X号
        }else{
            cs.parents("li").find(".icon-round_close_fill_light").css("display", "inline-block");//显示X号
        }
    }
};

/**
 * 检查用户名称是否已经注册
 * @param $obj 操作的当前对象
 * @param isShowExist 是否显示已经存在 true:显示(注册页面使用) false:不显示(个人忘记密码页面使用)
 * @returns {boolean}
 */
regValidator.checkYhmc = function ($obj,isShowExist) {
    var regYhmc = /^[a-zA-Z]{4,}[a-zA-Z0-9]*/;
    if ($obj.val() == "" || $obj.val() == "请输入用户名" ) {
        regValidator.showMsg($obj, true, false, "", true,"请输入用户名");
        return false;
    } else if (!regYhmc.test($obj.val())){
        regValidator.showMsg($obj, true, true, regValidator.name_msg, false);
        return false;
    }else {
        if($obj.val().length>20){
            regValidator.showMsg($obj, true, false, "", true,"用户名长度不能大于20");
            return false;
        }
        if(isShowExist){
            var flag = false;
            baseTools.xhrAjax({
                url: '/server/dzswj/gryh/checkGryhYhmc.do',
                bShow: false,
                async: false,
                params: {
                    USERNAME: $("input[name='REG_NAME']").val()
                },
                callback: [function (jsonObj, xhrArgs) {
                    switch (parseInt(jsonObj.code)) {
                        case 1:
                            if (jsonObj && jsonObj.TOTAL > 0) {
                                regValidator.showMsg($obj, true, false, "", true, "此用户名已经注册，请更换");
                                flag = false;
                            } else {
                                regValidator.showMsg($obj, false, false, regValidator.name_msg, false);
                                flag = true;
                            }
                            break;
                        case -1:
                            alert(jsonObj.msg);
                            break;
                        default:
                            alert(jsonObj.msg);
                            break;
                    }
                }]
            });
            return flag;
        }else{
            regValidator.showMsg($obj, false, false, regValidator.name_msg, false);
            return true;
        }
    }
};

/**
 * 检查手机号是否已经注册
 * @param $obj 操作的当前对象
 * @param isShowExist 是否显示已经存在 true:显示(注册页面使用) false:不显示(个人忘记密码页面使用)
 * @returns {boolean}
 */
regValidator.checkPhone = function ($obj,isShowExist) {
    var regPhone = /^[1][345678][0-9]{9}$/;
    if ($obj.val() == "" || $obj.val() == "请输入手机号码") {
        regValidator.showMsg($obj, true, false, "", true, "请输入手机号码");
        return false;
    }  else if (!regPhone.test($obj.val())){
        regValidator.showMsg($obj, true, false, "", true, "手机号格式错误");
        return false;
    }else {
        if(isShowExist){
            var flag = false;
            baseTools.xhrAjax({
                url: '/server/dzswj/gryh/checkPhone.do',
                bShow: false,
                async: false,
                params: {
                    PHONE: $("input[name='REG_PHONE']").val().trim()
                },
                callback: [function (jsonObj, xhrArgs) {
                    switch (parseInt(jsonObj.code)) {
                        case 1:
                            if (jsonObj && jsonObj.TOTAL > 0) {
                                regValidator.showMsg($obj, true, false, "", true, "此手机号已经注册过，请直接登录");
                                flag = false;
                            } else {
                                regValidator.showMsg($obj, false, false, "", false);
                                flag = true;
                            }
                            break;
                        case -1:
                            alert(jsonObj.msg);
                            break;
                        default:
                            alert(jsonObj.msg);
                            break;
                    }
                }]
            });
            return flag;
        }else{
            regValidator.showMsg($obj, false, false, "", false);
            return true;
        }

    }
};
//检查图片验证码格式
regValidator.checkPiccode = function ($obj) {
    var regPiccode = /^[a-zA-Z0-9]{4}$/;
    if ($obj.val() == "" || $obj.val() == "请输入图片验证码") {
        regValidator.showMsg($obj, true, false, "", true, "请输入图片验证码");
        return false;
    } else if(!regPiccode.test($obj.val())){
        regValidator.showMsg($obj, true, false, "", true, "图片验证码格式错误");
        return false;
    }else {
        regValidator.showMsg($obj, false, true, "", false);
        return true;
    }
};
//检查短信验证码
regValidator.checkDxyzm = function ($obj) {
    var regDxyzm = /^\d{6}$/;
    if ($obj.val() == "" || $obj.val() == "请输入短信验证码") {
        regValidator.showMsg($obj, true, false, "", true, "请输入短信验证码");
        return false;
    } else if(!regDxyzm.test($obj.val())){
        regValidator.showMsg($obj, true, false, "", true, "短信验证码格式错误");
        return false;
    }else {
        regValidator.showMsg($obj, false, true, "", false);
        return true;
    }
};
//检查密码
regValidator.checkPwd = function ($obj) {
    var regPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    if ($obj.val() == "" || $obj.val() == "请输入密码") {
        regValidator.showMsg($obj, true, false, regValidator.pwd_msg, true,"请输入密码");
        return false;
    } else if(!regPwd.test($obj.val())){
        regValidator.showMsg($obj, true, true, regValidator.pwd_msg, false);
        return false;
    }else {
        regValidator.showMsg($obj, false, false, regValidator.pwd_msg, false);
        return true;
    }
};
//检查确认密码
regValidator.checkRepwd = function ($obj,$oldObj) {
    if ($obj.val() != $oldObj.val()) {
        regValidator.showMsg($obj, true, false, "", true, "确认密码和密码不一致，请修改");
        return false;
    } else {
        if ($obj.val() != "") {
            regValidator.showMsg($obj, false, false, "", false);
            return true;
        } else {
            return false;
        }
    }
};
//检查旧密码
regValidator.checkOldpwd= function ($obj) {
    var regOlpwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    if ($obj.val() == "" || $obj.val() == "8-16位字母和数字组合") {
        regValidator.showMsg($obj, true, false, regValidator.pwd_msg, true,"请输入当前密码");
        return false;
    }else if(!regOlpwd.test($obj.val())){
        regValidator.showMsg($obj, true, true, regValidator.pwd_msg, false);
        return false;
    } else {
        regValidator.showMsg($obj, false, true, "", false);
        return true;
    }
};

