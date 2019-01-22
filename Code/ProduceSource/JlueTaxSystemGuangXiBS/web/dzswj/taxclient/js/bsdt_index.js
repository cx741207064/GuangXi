$(document).ready(function () {
    bsdt.onload();
})

var bsdt = (function () {

    $(window).resize(function () {
        bsdt.windowResize();
    });

    var init = function () {
        /*表格偶数增加背景色*/
        $(".wxl_list_con table tr:nth-child(2n)").css("background", "#f9fafd");
        $(".wxl_bsdt_con .item_content ul li:nth-child(2n)").css("margin", "0px");
    }

    return {
        onload: function () {
            init();
            //			bsdt.collectShow();
            // bsdt.tabSwitch();
            bsdt.windowResize();
//            setTimeout(function () {
//                bsdt.tablePage();
//
//            }, 100)
        },
        /*添加收藏弹框*/

        /*办税指引、我的消息选项卡*/
        tabSwitch: function () {
            var item_content_li_w = $(".item_content li").width();
            $(".item").css("width", item_content_li_w + "px");
            $(".item_content ul li:nth-child(2n)").css("margin", "0px");
            $(".wxl_list p>span.f_left").click(function () {
                var n = $(this).index();
                $(this).addClass("active");
                $(this).siblings("span.f_left").removeClass("active");
                $(".wxl_list_con .wxl_tab_con").eq(n).show();
                $(".wxl_list_con .wxl_tab_con").eq(n).siblings(".wxl_tab_con").hide();
            });
        },
        /*表格分页*/
        tablePage: function () {
            $('#wxl_bszj1').dataTable({
                "info": false,
                "lengthChange": false,
                "ordering": false,
                "searching": false,
                "paging": false,
                "scrollY": $('.wxl_list').height() - 76 + 'px'
            });
            $('#wxl_bszj2').dataTable({
                "info": false,
                "lengthChange": false,
                "ordering": false,
                "searching": false,
                "paging": false,
                "scrollY": $('.wxl_list').height() - 76 + 'px'
            });
            $('#wxl_bszj3').dataTable({
                "info": false,
                "lengthChange": false,
                "ordering": false,
                "searching": false,
                "paging": false,
                "scrollY": $('.wxl_list').height() - 76 + 'px'
            });
            /*表格中表头错位*/
            setTimeout(function () {
                $(".dataTables_scrollHeadInner,.dataTables_scrollHeadInner table").css("width", "100%")
                $('.dataTables_empty').css("height",'140px');
            }, 50)
        },
        //页面缩放效果
        windowResize: function () {
            setTimeout(function () {
                var content_bsdt_h = $(window).height();
                $(".wxl_bsdt_con").css("height", content_bsdt_h + "px");
                $(".wxl_list").css("height", (content_bsdt_h - 30) / 2 + "px");
                $(".wxl_commen_gn").css("height", (content_bsdt_h - 10) + "px");
                /*表格中表头错位*/
                $(".dataTables_scrollHeadInner,.dataTables_scrollHeadInner table").css("width", "100%")
            })

        },

        //首页待办 更多事件
        redirectDb : function(type){
            var obj = {};
            obj['TOP_MKXKID']="75017";
            obj['SJ_MKXKID']="75037";
            if(type =="1"){//待办事项
                obj['MKXKID']="75073";
            }else if (type == "2") {//办理情况查询
                obj['MKXKID']="75090";
                dzswjCommon.setCookieCommonUrl("main","blqk");
            }else if(type == "3"){//低风险事项提醒
                obj['MKXKID']="75090";
                dzswjCommon.setCookieCommonUrl("main","dfxsx");
            }else {
                return ;
            }
            var url = dzswjCommon.getMainUrl(obj);
            dzswjCommon.liClick(url,"3");
        },

        //关闭layui弹出框
        closeLayuiOpen: function () {
            layer.closeAll();
        }
    }
})();