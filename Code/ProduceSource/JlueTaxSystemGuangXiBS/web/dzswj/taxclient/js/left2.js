$(document).ready(function () {
    left2.onload();
});
var left2 = (function () {
    var curSeg;
    var init = function () {
        //页面高度
        $('.wxn_container').css("height", $(window).height() - 25);
        $('.wxn_c_footer').css("height", $(window).height() - $('.wxn_c_header').height() - 44 + 'px');
        $('.wxn_main_contain').css("width", $(window).width() - $('.wxn_sidebar').width() - 20 + 'px');
        layui.use('form', function () {
            var form = layui.form;
            form.render();
        });
    };

    return {
        onload: function () {
            init();
            curSeg = left2;
            //绑定所有事件
            curSeg.bindEvent();
            curSeg.pageInit();

            //获取顶部id并查询左侧菜单
            var data_name = dzswjCommon.getTopIfremPid();
            var isgzfw = dzswjCommon.getTopIfremIsGzfw();
            if (isgzfw) {
                var gzfwMenuList = parent.main.getGzfwMenuList();
                dzswjCommon.initMenuTypeOne(data_name, {
                    'iframe_obj': $("#left2_iframe"),
                    'ul_obj': $("#gzfw_zrr_tree_ul")
                }, gzfwMenuList);
                var pid=left2.getQueryString("pid");
                var id=left2.getQueryString("id");
                $(".wxn_list>li").each(function(){
                    if($(this).attr("id")==pid){
                        $(".wxn_list li").eq(0).find("ul").hide();
                        $(this).find("a")[0].click();
                        $(this).find("li[id='"+id+"']").find("a")[0].click();
                    }
                })
            } else {
                dzswjCommon.initMenu(data_name, '1', {
                    'iframe_obj': $("#left2_iframe"),
                    'ul_obj': $("#gzfw_zrr_tree_ul")
                });
            }
        },

        bindEvent: function () {
            /*$('.wxn_list_list li').on("click", function () {
                if ($(this).find('a').attr("data-url")) {
                    $('#left2_iframe').attr("src", $(this).find('a').attr("data-url"));
                }
            });*/
            // 两级菜单左侧菜单栏点击切换页面
            $(".wxn_sidebar").on('click', '.wxn_list>li>a', function (e) {

                if ($(this).parent().hasClass("active")) {
                    $(this).siblings('ul').slideUp();
                    $(this).parent().removeClass("active");
                    $(this).find("i.lasti").removeClass("icon-down1").addClass("icon-arr-right-red");
                    return false;
                }
                var liUrl = $(this).attr("data-url");
                var liobj2 = $(this).siblings('ul').find("li");
                if (liobj2.length > 0) {
                    var liUrl2 = liobj2.eq(0).find("a").attr("data-url");
                    liobj2.eq(0).addClass("active").siblings().removeClass('active');
                    $("#left2_iframe").attr("src", liUrl2);
                    $(this).parent().siblings("li").find("ul").slideUp();
                    $(this).siblings('ul').slideDown();
                    $(this).parent().addClass("active").siblings().removeClass('active');
                    $(this).find("i.lasti").removeClass("icon-arr-right-red").addClass("icon-down1");
                    $(this).parent().siblings("li").find("i.lasti").removeClass("icon-down1").addClass("icon-arr-right-red");
                } else {
                    if (liUrl && liUrl != 'null' && liUrl != 'undefined') {
                        $("#left2_iframe").attr("src", liUrl);
                        $(this).parent().addClass("active").siblings().removeClass('active');
                        $(this).parent().siblings("li").find("ul").slideUp();
                        $(this).parent().siblings("li").find("i.lasti").removeClass("icon-down1").addClass("icon-arr-right-red");
                    }
                }
                return false;

            });
            $(".wxn_c_footer").on('click', '.wxn_list_list>li>a', function (e) {
                //办税地图78240
                if ($(this).parent().attr("id") == "75061" || $(this).parent().attr("id") == "75461") {
                    window.open('http://12366.chinatax.gov.cn/BsdtAllBLH_bsdtMain.do');
                } else {
                    var liUrl = $(this).attr("data-url");
                    $("#left2_iframe").attr("src", liUrl);
                    $(this).parent().addClass("active").siblings().removeClass('active');
                }

                // if (e && e.preventDefault){
                //     e.preventDefault();}
                // else{
                //     window.event.returnValue = false;}
                return false;
            });

            /*常用功能弹框复选框事件*/
            $("#wxn_collAdd_dzyw").on("click", "label", function () {
                $(this).toggleClass("active");
            });

            //常用功能添加
            $("#wxn_collAdd_dzyw").on("click", "#confirmSubmit", function () {
                cygn.confirmSubmitClick();
            });
            //常用功能搜索
            $("#wxn_collAdd_dzyw").on("click", "#laySearch", function () {
                cygn.laySearchClick();
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
        /*弹框预约须知*/
        tsNotes: function () {
            left2.alertBox('#wdl_yyxz_tk', '900px', '350px');

        },
        alertBox: function (dom, width, height) {
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    type: 1,
                    area: [width, height],
                    content: $(dom) //这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
                });
            });
        },
        /*点击增加弹出框*/
        alertBoxs: function (dom, options, h) {
            // alert("ww");

            //初始化元素
            //            $(".wep_dzzl_addBox").html(dzzlObj);
            //            yhzx_zrr.imgUploadF();

            $("#BssfNsrsbh").val('');
            $("#BssfNsrmc").val('');
            layui.use('layer', function () {
                var layer = layui.layer;

                var $dom = $(dom);

                // 初始化窗口
                var layerIndex = layer.open({
                    title: "申请",
                    type: 1,
                    area: ['900px', h ? h : "auto"],
                    content: $dom, //这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
                    cancel: function () {
                        // 右上角关闭回调
                        if (options && options.cancel && typeof options.cancel === 'function') {
                            options.cancel($dom, layerIndex);
                        }
                    }
                });
                // 窗口初始化调用
                if (options && options.init && typeof options.init === 'function') {
                    options.init($dom, layerIndex);
                }
            });
        },
        pageInit: function () {
            $(window).resize(function () {
                $('.wxn_container').css("height", $(window).height() - 25);
                $('.wxn_c_footer').css("height", $(window).height() - $('.wxn_c_header').height() - 44 + 'px');
                $('.wxn_main_contain').css("width", $(window).width() - $('.wxn_sidebar').width() - 20 + 'px');
            })
        },

        /*点击增加弹出框*/
        alertQyglyzrBox: function (dom, options, h) {
            layui.use('layer', function () {
                var layer = layui.layer;

                var $dom = $(dom);

                // 初始化窗口
                var layerIndex = layer.open({
                    title: "申请",
                    type: 1,
                    area: ['900px', h ? h : "auto"],
                    content: $dom, //这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
                    cancel: function () {
                        // 右上角关闭回调
                        if (options && options.cancel && typeof options.cancel === 'function') {
                            options.cancel($dom, layerIndex);
                        }
                    }
                });
                // 窗口初始化调用
                if (options && options.init && typeof options.init === 'function') {
                    options.init($dom, layerIndex);
                }
            });
        },

        //定制业务设置点击事件
        dzywSettingClick: function () {
            // cygn.dzywSettingClick();
            cygn.selectedComFuc();
            // $('.wxn_collAdd1').show();
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    type: 1,
                    skin: 'layui-layer-demo', //样式类名
                    closeBtn: 1, //不显示关闭按钮
                    anim: 2,
                    title: '更多',
                    area: ['1100px', '450px'],
                    shadeClose: true, //开启遮罩关闭
                    // content: $('.wxn_collAdd1')
                    content: $('#wxn_collAdd_dzyw')
                });
            });
        },

        closeColl: function () {
            layer.closeAll();
        },


        /*弹框预约须知选中按钮*/
        changeIcon: function (obj) {
            // $(obj).find('i').addClass('icon-square').removeClass('icon-squarecheck');
            if ($(obj).find('i').hasClass('icon-square')) {
                $(obj).find('i').addClass('icon-squarecheck').removeClass('icon-square');
                hdzx.tsNotesClose(obj);
                // alert(11);
            } else {
                $(obj).find('i').addClass('icon-square').removeClass('icon-squarecheck');
                hdzx.unNotesClose(obj);
                // alert(22);
            }
        },
        getQueryString: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.top.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
    }
})();