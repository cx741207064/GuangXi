$(document).ready(function () {
    //功能模块
    gnmkUtils.onload();
});
var gnmkUtils = (function () {
    var curSeg;
    var deb = false;//调试信息

    var init = function () {
    };

    return {
        onload: function () {
            curSeg = gnmkUtils;
            init();
            curSeg.bindEvent();
        },

        //绑定所有事件
        bindEvent: function () {
        },

        getIsDeb: function(){
            return deb;
        },

        //增加访问日志
        addFwrz: function (id,type) {
            if(jcptTools.getIsLogin()){
                var url ="/platform/taxmobile/gnmk/insertGnmkFwrz.do";
                baseTools.xhrAjax({
                    url: url,
                    isShowErrorMsg:false,
                    // dataType: 'jsonp',
                    params: {
                        MKXKID: id,
                        TYPE: type
                    },
                    callback: [function (data) {
                        if (data.code == '-3') {
                            jcptTools.clearAllCookie();
                            jcptTools.gotoLogin();
                            return;
                        }
                    }]
                });
            }else{
                var url ="/platform/taxmobile/gnmk/insertGnmkFwrzGzfw.do";
                baseTools.xhrAjax({
                    url: url,
                    isShowErrorMsg:false,
                    // dataType: 'jsonp',
                    params: {
                        MKXKID: id,
                        TYPE: type
                    },
                    callback: [function (data) {
                        if (data.code == '-3') {
                            jcptTools.clearAllCookie();
                            jcptTools.gotoLogin();
                            return;
                        }
                    }]
                });
            }
        },

        //查询平台的通知公告 ggtc
        selectPtTzgg: function (tag) {
            var url ="/platform/taxmobile/gnmk/selectPtTzgg.do";
            baseTools.xhrAjax({
                url: url,
                isShowErrorMsg:false,
                callback: [function (data) {
                    if (data.code == '0') {
                        if(data.NR && data.NR.length != "0"){
                            // $("#ggtc").html(data.NR);
                            // mh.tipcon();
                            // return;

                            var data = data.NR;
                            for(var i=0;i<data.length;i++){
                                var type = data[i].TYPE;
                                if(type == '01' && tag == 'mh'){
                                    $("#ggtc").html(data[i].NR);
                                    mh.tipcon();
                                }else if(type == '02' && tag == 'mh'){
                                    // $("#wdl_tx").show();
                                    $("#wdl_tx").html(data[i].NR);
                                    mh.alertBox1('#wdl_tx','320px','200px');
                                }else if(type == '03' && tag == 'bsdt'){
                                    // $("#wdl_tx3").show();
                                    $("#wdl_tx3").html(data[i].NR);
                                    leftSlider.alertBox1('#wdl_tx3','320px','200px');
                                }
                            }



                        }
                    }
                }]
            });
        }
    }
})();