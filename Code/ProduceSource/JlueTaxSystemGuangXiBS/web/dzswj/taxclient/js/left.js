$(document).ready(function () {
    left.onload();
});
// var layer;
var left = (function () {

    var curSeg;

    var init = function () {
        //初始化页面高度
        $('.wxn_container').css("height", $(window).height() - 10 + "px");
        // layui.use('layer',function(){
        //     layer = layui.layer;
        // })

        var window_h = $(window).height();
        var content_h = $(".wxn_container").height();
        $(".wxn_content ").css("height", content_h - 6 + "px");
        $('.wxn_main_contain').css("width", $(window).width() - $('.wxn_sidebar').width() - 5 + 'px');

        var scroll_h = $('.scrollbar').height();
        $('.scrollbar').css("height", scroll_h).niceScroll({
            cursorcolor: "#ccc", //#CC0071 光标颜色
            cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
            touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
            cursorwidth: "5px", //像素光标的宽度
            cursorborder: "0", // 	游标边框css定义
            autohidemode: false //是否隐藏滚动条
        });
    };

    return {
        onload: function () {
            init();

            curSeg = left;
            //绑定所有事件
            curSeg.bindEvent();

            curSeg.pageInit();

            var data_name = dzswjCommon.getTopIfremPid();
            dzswjCommon.initMenu(data_name, '1', {
                'iframe_obj': $("#left_iframe"),
                'ul_obj': $("#cxzx_tree_ul")
            });
        },

        bindEvent: function () {
            //左侧菜单切换事件
            $('.wxn_sidebar').on('click', '.wxn_list li', function () {
                curSeg.slideChange($(this));
            })
        },

        //左侧菜单栏切换
        slideChange: function ($obj) {

            if($obj && $obj.context && $obj.context.id){
                if($obj.context.id=="78237"
                    || $obj.context.id=="78238"
                    || $obj.context.id=="78239"){
                    curSeg.onCktsLogin();
                    return;
                }
            }

            $obj.siblings().removeClass('active');
            $obj.addClass('active');
            if ($obj.index() != 0) {
                $obj.css({
                    "border-top": "1px solid #e8e8e8"
                })
            }
            $obj.siblings().css({
                "border-top": "1px solid #f6fafd"
            });
            $("#left_iframe").attr("src", $obj.attr("data-url"));
        },
        onCktsLogin : function(){
            baseTools.xhrAjax({
                url: '/server/pt/gdsdzgx/getCktsNsrsbh.do',
                bShow: false,
                async: false,
                callback: [function (jsonObj) {
                    switch (jsonObj.code) {
                        case "1":
                            if (jsonObj.data) {
                                var r = jsonObj.data;
                                if (jsonObj.data.rltCode == "200") {
                                    var url = jsonObj.data_url + "?token=" + r.token + "&tokenid=" + r.rltContent; //taxClientTools.cnf.zrrDswtURL;
                                    if (typeof external.get_version != "undefined") {
                                        if (Number(external.get_version().replace(/\./g, "")) >= 31878) {
                                            external.Open_IE_Url(url);
                                        } else {
                                            window.open(url);
                                        }
                                    } else {
                                        window.open(url);
                                    }
                                } else {
                                    alert(jsonObj.data.rltMsg);
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
        //返回left页面的 dom对象
        getDom: function () {
            return document;
        },
        /*弹出框1*/
        openBox: function (obj) {
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open(
                    obj
                );
            });
        },
        pageInit: function () {
            $(window).resize(function () {
                $('.wxn_main_contain').css("width", $(window).width() - $('.wxn_sidebar').width() - 5 + 'px');
            })
        }
    }
})();