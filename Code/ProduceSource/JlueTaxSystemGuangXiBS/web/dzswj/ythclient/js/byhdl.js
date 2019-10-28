$(function(){
    byhdl.init();
});
var user_zh,snsw_dm,user_nh,user_wh;
var timerReg;
var byhdl = {
    init : function(){
        byhdl.bindEvent();
        setTimeout(function(){
            if (jcptTools.getIsLogin()) {
                $("#top_tab_ul").find("li[id=75019]").mouseenter();
            }
        },1500);

    },
    bindEvent:function(){

        $("#jg").click(function(){
            byhdl.selectByhdlxx();
        });
        // layuiTools.selectEvent("snsw_jg_filter", byhdl.selectByhdlxx);
    },
    //查询报验户局轨信息
    selectByhdlxx:function(){
        var user_zh_byh = $("input[name=USER_ZH_BYH]").val().trim();
        var snsw_dm_byh = $("select[name=SNSW_DM]").val().trim();
        var user_nh_byh = $("input[name=USER_NH_BYH]").val().trim();
        var user_wh_byh = $("input[name=USER_WH_BYH]").val().trim();


        if(user_zh_byh == "" || user_zh_byh == null){
            alert("请输入统一社会信用代码（或纳税人识别号）");
            return;
        }

        if(snsw_dm_byh == "" || snsw_dm_byh == null || snsw_dm_byh =='选择省内/外'){
            alert("请选择省内/外");
            return;
        }

        if(user_nh_byh == "" || user_nh_byh == null){
            alert("请输入年号");
            return;
        }
        if(user_wh_byh == "" || user_wh_byh == null){
            alert("请输入文号");
            return;
        }
        if(user_zh == user_zh_byh && snsw_dm == snsw_dm_byh && user_nh == user_nh_byh && user_wh == user_wh_byh){
            return;
        }

        user_zh = user_zh_byh ;
        snsw_dm = snsw_dm_byh ;
        user_nh = user_nh_byh ;
        user_wh = user_wh_byh ;
        // load.loading();
        baseTools.xhrAjax({
            url: '/getByhJgxx.do',
            bShow: true,
            // async: false,
            params: {
                USER_ZH_BYH : user_zh_byh,
                SNSW_DM : snsw_dm_byh,
                USER_NH_BYH : user_nh_byh,
                USER_WH_BYH : user_wh_byh
            },
            callback: [byhdl.pageFlowControl]
        });
    },
    pageFlowControl: function (jsonObj, xhrArgs) {
        // load.closeLoading();
        switch (parseInt(jsonObj.code)) {
            case 1:
                var form = layui.form;
                var data = jsonObj.data;

                $("select[name=JG]").children().remove();

                var flag=false;//默认没有查询出来数据
                var html='<option id="firstOption" value="请选择局轨" wcjyzmuuid="">请选择局轨</option>';
                if(data && data.length>0){
                    for (var i=0;i<data.length;i++) {
                        if(data[i].WCJYZMUUID){
                            flag = true;
                            html += "<option value="+data[i].SWJGJG+" wcjyzmuuid="+data[i].WCJYZMUUID+" djxh="+ data[i].DJXH +">"+ data[i].SWJGJG +"</option>";
                        }
                    }
                }
                if(!flag){
                    alert("未查询到局轨信息，请确认登录账号、省内/外、年号、文号是否正确！");
                    form.render();
                    return;
                }
                $("select[name=JG]").append(html);
                form.render("select");
                $('#jg').find('.layui-unselect').addClass('layui-form-selected');

                break;
            case -1: //查询失败
                alert(jsonObj.msg);
                break;
            case -3: // session 失效请重新登录
                jcptTools.clearAllCookie();
                alert(jsonObj.msg);
                window.location = 'index.html';
                break;
            default:
                byhdl.unlockLogin();

        }
    },
    onLoginByh:function(){
        var user_zh_byh = $("input[name=USER_ZH_BYH]").val().trim();
        var snsw_dm_byh = $("select[name=SNSW_DM]").val().trim();
        var user_nh_byh = $("input[name=USER_NH_BYH]").val().trim();
        var user_wh_byh = $("input[name=USER_WH_BYH]").val().trim();
        var user_mm_byh = $("input[name=USER_MM_BYH]").val().trim();
        var jg_byh = $("select[name=JG]").val();
        var wcjyzmuuid = $("select[name=JG]").find("option:selected").attr("wcjyzmuuid");
        // var djxh = $("select[name=JG]").find("option:selected").attr("djxh");

        if(jg_byh == null || jg_byh == ""){
            alert("请先选择局轨！");
            return;
        }
        if(user_zh != user_zh_byh || snsw_dm != snsw_dm_byh || user_nh != user_nh_byh || user_wh != user_wh_byh){
            alert("您修改了登录信息，请重新选择局轨！");
            return;
        }

        if(user_mm_byh == null || user_mm_byh == ""){
            alert("请输入密码！");
            return;
        }

        var key = CryptoJS.enc.Utf8.parse("AES454-HTJSQ9-IT");
        var srcs = CryptoJS.enc.Utf8.parse(user_mm_byh);
        var encrypted = CryptoJS.AES.encrypt(srcs, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        byhdl.lockLogin();
        timerReg = jcptTools.countDown($("#id_byh_login"), 60, 's重新登录');
        load.loading();
        baseTools.xhrAjax({
            url: '/byhLogin_new.do',
            bShow: false,
            params: {
                USER_ZH_BYH : user_zh_byh,
                SNSW_DM : snsw_dm_byh,
                USER_NH_BYH : user_nh_byh,
                USER_WH_BYH : user_wh_byh,
                USER_MM_BYH : encrypted.toString(),
                JG_BYH : jg_byh,
                WCJYZMUUID : wcjyzmuuid
                // ,DJXH : djxh
            },
            callback: [byhdl.pageFlowControl_login]
        });
    },
    pageFlowControl_login: function (jsonObj, xhrArgs) {
        jcptTools.countDownClean($("#id_byh_login"), timerReg, "登录");
        load.closeLoading();
        //登录返回清空账号密码，启用登录按钮、输入框
        switch (parseInt(jsonObj.code)) {
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
                    jcptTools.setCookie("USER_CODE", $(":input[name='USER_ZH_BYH']").val().trim());
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

                //登录后清除value值
                $("#wep_form_cadl input.clearInput").val("");

                //显示选择入口界面
                $(".login_box").hide();
                byhdl.unlockLogin();

                //报验户 直接跳转到main页面
                //判断是在mh.html还是login_index.html
                if (window.location.href.indexOf("mh.html") > -1 || window.location.href.indexOf("mh_khd.html") > -1) {
                    jcptTools.OpenModel(jcptTools.getMain());
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
                index_gds_new.unlockLogin();
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
            case -13: //没有获取到局轨信息，请重试
            case -14: //没有获取到局轨信息，请重新登录
            case -15: //存在多条报验记录
            case -16: //报验户登录异常，请联系运维
                alert(jsonObj.msg);
                break;
            case -21://平台自动开户 else
                if(jsonObj.KHBZ == "Y"){
                    alert("您已成功开通广西壮族自治区电子税务局！默认密码Aa加社会信用代码后8位");
                    window.location.reload();
                }else if(jsonObj.KHBZ == "Z") {
                    alert("未找到有效用户信息，请确认纳税人识别号或社会信用代码是否错误？账号无误请使用左下角《新办纳税人套餐》功能进行相关业务办理！");
                    // window.location.reload();
                }else{
                    alert(jsonObj.msg);
                    byhdl.unlockLogin();
                }
                break;
            case -22://便利通、中软开户 失败
                alert(jsonObj.msg);
                byhdl.unlockLogin();
                break;
            case -23:
                //系统查询到数据 但是校验不通过 如:用户名密码错误 返回前台
                alert(jsonObj.msg);
                byhdl.unlockLogin();
                break;
            case -101:
                //图片验证码错误
                alert(jsonObj.msg);
                byhdl.unlockLogin();
                break;
            default:
                byhdl.unlockLogin();

        }

    },
    //锁定用户名密码
    lockLogin: function () {
        $('.wep_login_btn').attr("disabled", "disabled");
        $(":input[name='USER_ZH_BYH']").attr("readonly", "readonly");
        $(":input[name='USER_MM_BYH']").attr("readonly", "readonly");
        $(":input[name='USER_NH_BYH']").attr("readonly", "readonly");
        $(":input[name='USER_WH_BYH']").attr("readonly", "readonly");
        $("select[name='JG']").attr("readonly", "readonly");
    },
    //解锁用户名密码
    unlockLogin: function () {
        $('.wep_login_btn').removeAttr("disabled");
        $(":input[name='USER_ZH_BYH']").removeAttr("readonly");
        $(":input[name='USER_MM_BYH']").removeAttr("readonly");
        $(":input[name='USER_NH_BYH']").removeAttr("readonly");
        $(":input[name='USER_WH_BYH']").removeAttr("readonly");
        $("select[name='JG']").removeAttr("readonly");
    }

};
