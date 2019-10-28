$(document).ready(function() {
	/*var djxh =  jdglTools.getUserDataByKey("DJXH");
	if(djxh!=null&&djxh!=""){
		$("#buttonDiv").css("display","none");
		alert('你已经办理过税务登记，不能办理该业务。符合办理条件的，可在"公众服务"->"特色业务"中进行业务办理');
	}else{
		scbl_login.onLoad();
	}*/
    scbl_login.onLoad();
});

var scbl_login = (function() {
	var formSave = "wep_form_xbnsr";
    var form,layer,table,laydate,layerXb;
    var init = function () {
        /*办理须知弹出*/
        $('#yrbj_blxz').on('click',function(){
            layer.open({
                type: 1,
                title: '办理须知',
                content: $('.blxz_box'),
                area: ['948px', '460px']
            })
        })
    }
	// 公有方法
	return {
		onLoad : function() {
			curSeg = scbl_login;
            jQuery.support.cors = true ;
			init();
		},
		/*实名认证弹窗*/
        rz_open : function () {
            layui.use(['form','layer','table','laydate'],function(){
                form = layui.form;
                layer = layui.layer;
                laydate = layui.laydate;
                $('.layui-form-radioed').find('div').css('color','#1e9fff');
                form.on('radio',function(){
                    $('.layui-form-radioed').find('div').css('color','#1e9fff');
                })
                layer.open({
                    type: 1,
                    title: '新办纳税人套餐',
                    content: $('.nsrtc_box'),
                    area: ['948px', '460px'],
                    success:function(){
                        $('.layui-layer-title').css('text-align','left');
                        $('.layui-layer-title').css('padding','0 80px 0 20px');
                    }
                })
                /*关闭弹出框*/
               /* $('.yrbj_close').on('click',function(){
                    layer.closeAll()
                })*/
            })
        },
		/*认证二维码*/
		rz_ewm : function(){
            var TYSHXYDM = $(":input[name='TYSHXYDM']").val().trim();
            var FDDBRSFZJHM = $(":input[name='FDDBRSFZJHM']").val().trim();
            baseTools.xhrAjax({
                url: window.wsbsfwtUrl+'/taxclient/wssq/djl/getFddbrxxByFddbrsfz.do',
                async: false,
                params:  {
                    FDDBRSFZJHM : FDDBRSFZJHM,
                    TYSHXYDM :TYSHXYDM
                },
                callback: [function(jsonObj, xhrgs){
                    if(jsonObj.code==0){
                        var fddbrxx =jsonObj.data.FDDBRXX;
                        $('#sfzh').val(FDDBRSFZJHM);
                        $('#xm').val(fddbrxx[0].FDDBRXM);
                        $('#sjhm').val(fddbrxx[0].FDDBRYDDH);
                    } else {
                        alert(jsonObj.msg);
                    }
                }]
            });

            curSeg.update_ewm('0');

		},
        //刷新二维码
        update_ewm : function(sbz){
            var sjhm1 = $('#sjhm').val();
            if(sbz=='0'){
                curSeg.load_ewm(sbz);
            }else{
                if(sjhm1.length==11){
                    curSeg.load_ewm(sbz);
                }else{
                    alert("电话号码格式不正确！");
                }
            }
        },
        //二维码加载
        load_ewm : function(sbz){
            var xm = $("#xm").val();
            var sfzh = $("#sfzh").val();
            var sjhm = $("#sjhm").val();

            var maps = {
                xm: xm,
                sfzh: sfzh,
                sjhm: sjhm,
                rzfs: $("#rzfs").val()
            };

            baseTools.xhrAjax({
                url: window.wsbsfwtUrl+'/taxclient/wssq/djl/saveAndCheck.do',
                async: false,
                params: maps,
                callback: [function (jsonObj, xhrArgs) {
                    if (jsonObj.code == 1) {
                        layui.use("layer", function () {
                            var accessid = "xEwq21RvqWfJUoJK";
                            var accesskey = "OggiJEuE4wkt65mxcWcqKO6e0wejXwm1dp7pSLBvSR4bqBTyhGAy8XUWRGpZFs47";
                            var idname = $("#xm").val();
                            var idno = $("#sfzh").val();
                            var phone =$("#sjhm").val();
                            var layer = layui.layer;
                            var QRCODE_URL = "http://www.gxgs.gov.cn:8181/sjrz/view/tips.html?accessid=" + accessid + "&accesskey=" + accesskey +
                                "&idno=" + idno + "&idname=" + idname + "&phone=" + phone + "&verifyid=" + idno;
                            /*
                                                        layer.open({
                                                            title: "微信扫一扫",
                                                            type: 1,
                                                            area: ['450px', '400px'],
                                                            content: '<div align="center"><div id="qrcode"></div></div>' +
                                                            '<div class="wdl_sm_btn text_alc" style="align:center">\n' +
                                                            '        <span class="wxn_btn_primary wxl_bg_lan1" onclick="smrzxx.checkRzzt();" style="width:170px">我已完成认证</span>\n' +
                                                            '    </div>',
                                                            end:function () {
                                                                smrzxx.checkRzzt();
                                                            }
                                                        });*/
                            $('#qrcode').html("");
                            var qrcode = new QRCode(document.getElementById("qrcode"), {
                                width: 100,
                                height: 100,
                                correctLevel: 0
                            });
                            qrcode.makeCode(QRCODE_URL);
                            $('#qrcode img').css('margin','0 auto');
                            if(sbz=='0'){
                                curSeg.rz_open();
                            }

                        });
                    } else {
                        alert("认证失败，请重试！");
                    }
                }]
            });
        },

		/*确认认证*/
        checkRzzt:function () {
            var xm = $("#xm").val();
            var sfzh = $("#sfzh").val();
            var sjhm = $("#sjhm").val();
            var param = {
                xm: xm,
                sfzh: sfzh,
                sjhm: sjhm,
                rzfs: $("#rzfs").val()
            };
            baseTools.xhrAjax({
                url: window.wsbsfwtUrl+'/taxclient/wssq/djl/getRzxx.do',
                bShow: false,
                async: false,
                params: param,
                callback: [function(jsonObj, xhrgs){
                    if(jsonObj.code==1){
                       // alert("认证完成，请重新登录！");
                        layer.closeAll();
                        curSeg.onLogin();
                    } else {
                        alert("认证未完成，请稍后再试");
                    }
                }]
            });
        },
		onLogin : function() {

           /* if(!Validator.validate(baseTools.byId(formSave))){
                return false;
            }*/
            var TYSHXYDM = $(":input[name='TYSHXYDM']").val().trim();
            var FDDBRSFZJHM = $(":input[name='FDDBRSFZJHM']").val().trim();
            if(TYSHXYDM==undefined && FDDBRSFZJHM==undefined && TYSHXYDM=='' && FDDBRSFZJHM=='' ) {
                alert("请填写统一信用代码和法人身份证号");
                return;
            }
            if(TYSHXYDM==undefined || TYSHXYDM=='' ){
                alert("请填写统一信用代码");
                return;
            }
            if(FDDBRSFZJHM==undefined  || FDDBRSFZJHM=='') {
                alert("请填写法人身份证号");
                return;
            }
            /*if(TYSHXYDM==undefined || FDDBRSFZJHM==undefined || TYSHXYDM=='' || FDDBRSFZJHM=='') {
                alert("暂未查询到结果，请检查填写的信息是否正确！");
                return;
            }*/
            var sfnn;
            //当前只允许属于南宁市的企业办理新的新办纳税人套餐业务
            baseTools.xhrAjax({
                url : window.wsbsfwtUrl+"/taxclient/smzgl/nsrdyxcj/check_IsNn.do",
                bShow : false,
                async : false,
                params : {
                    TYSHXYDM : TYSHXYDM,
                    FDDBRSFZJHM : FDDBRSFZJHM
                },
                callback: [function(jsonObj, xhrArgs){
                    if(jsonObj.code=="1") {
                        sfnn="1";
                    }
                }]
            });

            /*if(sfnn=="1"){
                alert("当前业务只允许南宁市的纳税人办理，请使用原有新办纳税人套餐进行办理！");
                return false;
            }*/

            $(".user").css("display", "none");
            $(".info").html("正在为您跳转，请稍候......");
            baseTools.xhrAjax({
                url : window.wsbsfwtUrl+"/taxclient/wssq/djl/djxxqrQyLogin.do",
                bShow : false,
                async : false,
                params : {
                    TYSHXYDM : TYSHXYDM,
                    FDDBRSFZJHM : FDDBRSFZJHM,
                    //FDDBRYDDH : FDDBRYDDH
                },
                callback : [ function(jsonObj, xhrArgs) {
                    var SMRZXX = jsonObj.data.SMRZXX;
                    var COUNT = SMRZXX[0].COUNT;
                    var KZZTDJLX_DM='1110';
                    var GSDJXX = jsonObj.data.GSDJXX;
                    var WSSQ = jsonObj.data.WSSQ;
                    var JSDJXX = jsonObj.data.JSDJXX;
                    var NSRMC = "";
                    if(GSDJXX && GSDJXX.length > 0){
                        KZZTDJLX_DM = GSDJXX[0].KZZTDJLX_DM;
                        NSRMC = GSDJXX[0].NSRMC;
                    }
                    //add by zpl 20181120  新增首次办税补录实名认证
                    /*if(COUNT == 0){
                        window.location.href = "/taxclient/wssq/ywsq/djl/scbsbl/smrzxx_zrr.html?FDDBRSFZJHM="+FDDBRSFZJHM;
                    }else{*/
                    $(".user").css("display", "");
                    if(GSDJXX && GSDJXX.length == 0){
                        alert("暂未查询到结果，请检查填写的信息是否正确！");
                       // $(".info").html("暂未查询到结果，请检查填写的信息是否正确！");
                    }else if(GSDJXX && GSDJXX.length > 0){
                        if(JSDJXX.length > 0){
                            if(WSSQ.length == 0){
                                alert("您已办理过税务登记，无需申请此项业务！")
                               // $(".info").html("您已办理过税务登记，无需申请此项业务！");
                            }else if(WSSQ.length > 0){
                                alert("您的业务已经受理完成，请登录广西壮族自治区电子税务局进行后续业务办理。");
                              //  $(".info").html("您的业务已经受理完成，请登录广西壮族自治区电子税务局进行后续业务办理。");
                            }
                        }else if(JSDJXX && JSDJXX.length == 0){

                            //modify by zpl 20181129  新增首次办税补录实名认证
                            // 调用航信接口的判定，返回0则验证不通过
                            var SMYZXX = 0;
                            baseTools.xhrAjax({
                                url : window.wsbsfwtUrl+"/taxclient/smzgl/nsrdyxcj/checkSmrz.do",
                                bShow : false,
                                async : false,
                                params : {
                                    FDDBRSFZJHM : FDDBRSFZJHM
                                },
                                callback: [function(jsonObj, xhrArgs){
                                    SMYZXX = jsonObj.code;
                                }]
                            });

                            // if(SMYZXX) {
                            //     window.location.href = "/taxclient/wssq/ywsq/djl/scbsbl/scbl_tcs_blxz.html";
                            // }
                            // --
                            if(COUNT == 0 && SMYZXX == 0) {
                                curSeg.rz_ewm();

                                //window.location.href = "/taxclient/wssq/ywsq/djl/scbsbl/smrzxx_zrr.html?FDDBRSFZJHM=" + FDDBRSFZJHM;
                            }else{
                                if(WSSQ.length > 0){
                                    var slbz = WSSQ[0].SLBZ;
                                    if(slbz=='2') {
                                        $(".user").css("display", "none");
                                        alert("您提交的业务已被退回，退回原因：" +WSSQ[0].SLYJ+ "。正在为您跳转，请稍候......");
                                      //  $(".info").html("您提交的业务已被退回，退回原因：" +WSSQ[0].SLYJ+ "。正在为您跳转，请稍候......");
                                        $.cookie("TYSHXYDM", TYSHXYDM);
                                        $.cookie("NSRMC", NSRMC);
                                        var XZQHSZ_DM;
                                        if(GSDJXX[0].SCJYDZXZQHSZ_DM!=null && GSDJXX[0].SCJYDZXZQHSZ_DM!=""){
                                            $.cookie("XZQHSZ_DM", GSDJXX[0].SCJYDZXZQHSZ_DM);
                                            XZQHSZ_DM = GSDJXX[0].SCJYDZXZQHSZ_DM;
                                        }else{
                                            $.cookie("XZQHSZ_DM", GSDJXX[0].ZCDZXZQHSZ_DM);
                                            XZQHSZ_DM = GSDJXX[0].ZCDZXZQHSZ_DM;
                                        }
                                        $.cookie("SLBZ", slbz);
                                        if(KZZTDJLX_DM == '1120'){
                                            window.location.href = window.wsbsfwtUrl+"/taxclient/wssq/ywsq/djl/scbsbl/scbl_gtjy.html?TYSHXYDM="+TYSHXYDM+"&NSRMC="+NSRMC+"&XZQHSZ_DM="+XZQHSZ_DM+"&SLBZ="+slbz+"&YWSQ_ID="+WSSQ[0].YWSQ_ID;
                                        }else{
                                            window.location.href = window.wsbsfwtUrl+"/taxclient/wssq/ywsq/djl/scbsbl/scbl_index.html?TYSHXYDM="+TYSHXYDM+"&NSRMC="+NSRMC+"&XZQHSZ_DM="+XZQHSZ_DM+"&SLBZ="+slbz+"&YWSQ_ID="+WSSQ[0].YWSQ_ID;
                                        }
                                    }else if(slbz=='0'){
                                        $("#xbnsrtcButton").css("display", "");
                                        $.cookie("TYSHXYDM", TYSHXYDM);
                                        $.cookie("NSRMC", NSRMC);
                                        $.cookie("YWSQ_ID", WSSQ[0].YWSQ_ID);
                                        window.location.href = window.wsbsfwtUrl+"/taxclient/wssq/ywsq/djl/scbsbl/scbl_zlsc.html?TYSHXYDM="+TYSHXYDM+"&NSRMC="+NSRMC+"&XZQHSZ_DM="+XZQHSZ_DM+"&SLBZ="+slbz+"&YWSQ_ID="+WSSQ[0].YWSQ_ID;
                                    }else {
                                        $.cookie("TYSHXYDM", TYSHXYDM);
                                        $.cookie("NSRMC", NSRMC);
                                        //$("#xbnsrtcButton").css("display", "");
                                        //$(".info").html("您已成功进行工商登记信息确认，您可以继续办理新办纳税人套餐业务！");
                                        baseTools.xhrAjax({
                                            url: window.wsbsfwtUrl+"/taxclient/wssq/djl/selectBsblIsDoYthyw.do",
                                            async: true,
                                            params: {
                                                TYSHXYDM: $(":input[name='TYSHXYDM']").val().trim(),
                                                SHXYDM: $(":input[name='TYSHXYDM']").val().trim(),
                                                KZZTDJLX_DM : '1110'
                                            },
                                            callback: [function (jsonObj, xhrArgs) {
                                                // debugger;

                                                // test
                                                jsonObj.data.GSDJXX = 1;
                                                jsonObj.data.GSDJXX.length= 1;

                                                if(jsonObj.data.GSDJXX){
                                                    if(jsonObj.data.GSDJXX.length==0){
                                                        alert("您纳税人类型不是单位纳税人税务登记，不能办理新办纳税人套餐业务！");
                                                    }else {
                                                        window.location.href = window.wsbsfwtUrl+"/taxclient/wssq/ywsq/djl/scbsbl/scbl_ywsxxz_index2.html?TYSHXYDM="+TYSHXYDM+"&NSRMC="+NSRMC+"&XZQHSZ_DM="+XZQHSZ_DM+"&SLBZ="+slbz+"&YWSQ_ID="+WSSQ[0].YWSQ_ID;
                                                    }
                                                }else{
                                                    alert("您已做过新办纳税人套餐业务，不能再次办理该套餐业务！");
                                                }
                                            }]
                                        })
                                    }
                                }else if(WSSQ && WSSQ.length == 0){
                                    $("#xbnsrtcButton").css("display", "");
                                    $(".user").css("display", "none");
                                 //   alert("正在为您跳转，请稍候......")
                                //    $(".info").html("正在为您跳转，请稍候......");
                                    $.cookie("TYSHXYDM", TYSHXYDM);
                                    $.cookie("NSRMC", NSRMC);
                                    var XZQHSZ_DM;
                                    if(GSDJXX[0].SCJYDZXZQHSZ_DM!=null && GSDJXX[0].SCJYDZXZQHSZ_DM!=""){
                                        $.cookie("XZQHSZ_DM", GSDJXX[0].SCJYDZXZQHSZ_DM);
                                        XZQHSZ_DM = GSDJXX[0].SCJYDZXZQHSZ_DM;
                                    }else{
                                        $.cookie("XZQHSZ_DM", GSDJXX[0].ZCDZXZQHSZ_DM);
                                        XZQHSZ_DM = GSDJXX[0].ZCDZXZQHSZ_DM;
                                    }
                                    $.cookie("SLBZ", '');
                                    var SLBZ  =  '';
                                    if(KZZTDJLX_DM == '1120'){

                                        window.location.href = window.wsbsfwtUrl+"/taxclient/wssq/ywsq/djl/scbsbl/scbl_gtjy.html?TYSHXYDM="+TYSHXYDM+"&NSRMC="+NSRMC+"&XZQHSZ_DM="+XZQHSZ_DM+"&SLBZ="+SLBZ;
                                    }else{
                                        window.location.href = window.wsbsfwtUrl+"/taxclient/wssq/ywsq/djl/scbsbl/scbl_index.html?TYSHXYDM="+TYSHXYDM+"&NSRMC="+NSRMC+"&XZQHSZ_DM="+XZQHSZ_DM+"&SLBZ="+SLBZ;
                                    }
                                }
                            }
                        }
                    }
                    /*}*/

                }]
            });
		}
			
	};
})();