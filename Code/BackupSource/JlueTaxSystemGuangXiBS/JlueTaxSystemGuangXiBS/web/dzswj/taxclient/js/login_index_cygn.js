$(document).ready(function () {
    login_index_cygn.onload();
});
var login_index_cygn = (function () {
    var curSeg;
    var init = function () {
    };

    return {
        onload: function () {
            curSeg = login_index_cygn;
            init();

            curSeg.bindEvent();
        },

        //绑定所有事件
        bindEvent: function () {
        },

        //左侧常用功能 更多事件
        cygnMoreClick: function(callBack){
            curSeg.cygnMoreClickInfo(callBack);
            layui.use('layer', function () {
                var layer = layui.layer;
                layer.open({
                    type: 1,
                    skin: 'layui-layer-demo', //样式类名
                    closeBtn: 1, //不显示关闭按钮
                    anim: 2,
                    title: '更多',
                    area: ['1100px', '320px'],
                    shadeClose: true, //开启遮罩关闭
                    content: $('.wxn_collAdd')
                })
            })
        },

        /***
         * 左侧常用功能 具体的方法
         * @param callback
         */
        cygnMoreClickInfo:function(callback){
            var menulist = {
                "menulist": [{
                    "Name": "",
                    "menulist": []
                }]
            };
            baseTools.xhrAjax({
                url: '/server/main/getCommonFuction.do',
                dataType: 'jsonp',
                callback: [function (datas) {
                    if (datas.code == '0') {
                        parent.jcptTools.msg(datas.msg);
                        return false;
                    } else if (datas.code == '-3') {
                        parent.jcptTools.clearAllCookie();
                        parent.jcptTools.gotoLogin();
                        return false;
                    } else {
                        if (datas && datas.list) {
                            if(callback){
                                callback(datas.list);
                            }
                        }
                    }
                }]
            });
        },

        //删除常用功能
        delCommonFunction: function (id,$obj) {
            baseTools.xhrAjax({
                url: '/server/main/deleteComFuc.do',
                params: {ID: id},
                dataType: 'jsonp',
                callback: [function (datas) {
                    if (datas.code == '-3') {
//			    		parent.jcptTools.msg("请登录系统");
                        parent.jcptTools.clearAllCookie();
                        parent.jcptTools.gotoLogin();
                        return false;
                    }
                    $($obj).parent().parent().remove();

                    //过度页面刷新常用功能
                    login_index_yw.commonFunction();
                    parent.jcptTools.msg(datas.msg);
                    //top常用功能移除
//			    	$('body',parent.parent.document).find("#mainComFuc").children("#"+id).remove();

                }]
            });
        },

        // 常用功能添加
        confirmSubmitClick: function () {
            var subClass = $("#confirmSubmit").attr("class");
            if (subClass == "layui-btn temp") {
                return;
            }
            $("#confirmSubmit").addClass("temp");
            var gncd = '';
            var cygnList = $("#CYGNLIST ul").children().find('label[class=active]');
            // var num = $("#iframe00001")[0].contentWindow.$(".rmPicture").length;
            var num = 0;
            if (cygnList.length == 0) {
                jcptTools.msg('请选择要添加的记录！');
                $("#confirmSubmit").removeClass("temp");
                return false;
            }
            cygnList.each(function (index) {
                gncd += $(this).attr("mkxkid") + ',';
                num++;
            });
            // if (num > 9) {
            //     jcptTools.msg('最多能添加9项常用功能，请确认！');
            //     $("#confirmSubmit").removeClass("temp");
            //     return false;
            // }
            gncd = gncd.substring(0, gncd.length - 1);

            baseTools.xhrAjax({
                url: '/server/main/addCommonFuction.do',
                dataType: 'jsonp',
                params: {MKXKID: gncd},
                callback: [function (datas) {
                    $("#confirmSubmit").removeClass("temp");
                    if (datas.code == '-3') {
//				    		jcptTools.msg("请登录系统");
                        jcptTools.clearAllCookie();
                        jcptTools.gotoLogin();
                        return;
                    }
                    if (datas.code != '0' && datas.code != undefined) {
                        jcptTools.msg(datas.msg);
                        return;
                    } else {
                        //过度页面刷新常用功能
                        login_index_yw.commonFunction();
                        curSeg.closeColl();
                        setTimeout(function () {
                            jcptTools.msg("操作成功！")
                        }, 500);
                    }
                }]
            });
        },


        //新搜索方法 tbb
        searchMenu: function (){
            var menulist = {
                "menulist": [{
                    "Name": "查询结果",
                    "menulist": []
                }]
            };
            var typeId = $("#menuType").val();
            var title = $("#seachTitle").val();
            if (title == "" && typeId == "") {
                jcptTools.msg("请输入查询条件！");
                return false;
            }

            // $("#menuType").val('');
            // $("#menuType").children("option:not(:first)").remove();
            // $("#seachTitle").val('');
            $("#CYGNLIST").html('');

            var objList = curSeg.encapsulation(login_index_yw.getAllMenu());
            menulist.menulist=objList["List"];

            var showlist = $("<ul></ul>");
            var html="";
            showa222(menulist, html);
            // $(".wxl_collSwdj").append(showlist);
            // $(".wxl_collSwdj1").append(showlist);

            function showa222(menu_list1, parent) {
                for (var menu in menu_list1) {
                    var obj = menu_list1[menu];
                    if (obj.menulist.length > 0) {
                        /*if(curSeg.isHaveData(obj,typeId,title)){
                            html += "<li><label mkxkid='"+obj.id+"'></label><span>" + obj.Name + "</span></li>";
                        }*/
                        showa222(obj.menulist, "");
                    } else {
                        if(curSeg.isHaveData(obj,typeId,title)){
                            html += "<li><label mkxkid='"+obj.id+"'></label><span>" + obj.Name + "</span></li>";
                        }
                    }
                }
            }
            html = "<ul><li><label></label><span>查询结果</span><ul class='submenu'>" + html;
            html += "</ul></li></ul>";
            $(".wxl_collSwdj1").append(html);
            //选中节点
            curSeg.selectNodes();
        },

        //菜单搜索是 判断是否符合条件
        isHaveData: function(obj,typeId,title){
            if(obj){
                if(typeId && title){
                    if(obj["Name"] != null && obj["Name"].indexOf(title) != -1 && obj["mkxk_level"].startWith(typeId)){
                        return true;
                    }else{
                        return false;
                    }
                }else if(typeId){
                    if(obj["mkxk_level"] != null && obj["mkxk_level"].startWith(typeId)){
                        return true;
                    }else{
                        return false;
                    }
                }else if(title){
                    if(obj["Name"] != null && obj["Name"].indexOf(title) != -1){
                        return true;
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }else{
                return false;
            }
        },

        selectNodes:function(){
            $("#CYGNLIST").find("label").removeClass("active");
            var bcCygn = login_index_yw.getCygnList();
            if(bcCygn){
                for (var i = 0; i < bcCygn.length; i++) {
                    var obj = bcCygn[i];
                    $("#CYGNLIST").find("label[mkxkid='"+obj["MKXKID"]+"']").addClass("active");
                }
            }
        },


        //常用功能查询方法 弃用查询方法
        laySearchClick: function () {
            alert("异常方法");
            return;
            var menulist = {
                "menulist": [{
                    "Name": "查询结果",
                    "menulist": []
                }]
            };
            var typeId = $("#menuType").val();
            var title = $("#seachTitle").val();
            if (title == "" && typeId == "") {
                jcptTools.msg("请输入查询条件！");
                return false;
            }
            baseTools.xhrAjax({
                url: '/server/main/selectAllGncd.do',
                dataType: 'jsonp',
                params: {
                    TYPEID: typeId,
                    TITLE: title,
                    GNCD: 'CYGN'
                },
                callback: [function (data) {
                    if (data.code == '0') {
                        jcptTools.msg(data.msg);
                        return;
                    } else if (data.code == '-3') {
                        jcptTools.clearAllCookie();
                        jcptTools.gotoLogin();
                        return;
                    } else {
                        $("#CYGNLIST").html("");
                        var cygnList = menulist.menulist[0].menulist;
                        // var cygnList = menulist.menulist;
                        var datalist = data.list;
                        for (var i = 0; i < datalist.length; i++) {
                            if (datalist[i].MKXK_LEVEL.length > 4) {
                                var cygn = new curSeg.cygnModel();
                                cygn.Name = datalist[i].MKXK_MC;
                                cygn.id = datalist[i].MKXKID;
                                cygnList.push(cygn);
                            }
                        }
                        curSeg.collectDate(menulist);
                    }
                }]
            });
        },

        //定制业务设置点击事件
        dzywSettingClick: function () {
            // 以下一行代码为 点击常用功能设置时，默认加载全部菜单 现屏蔽 修改为从login_index_yw中获取 tbb 2018年11月20日20:18:15
            // curSeg.selectedComFuc();
            curSeg.selectedComFucInfo(login_index_yw.getAllMenu());

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

        //打开常用功能添加窗口查询所有项目
        selectedComFuc: function () {
            alert("异常方法");
            baseTools.xhrAjax({
                url: '/server/platform/ptgl/qyyh/selectGnmkByYhid.do',
                params: {
                    GNCD: 'CYGN'
                },
                dataType: 'jsonp',
                callback: [function (data) {
                    if (data.code == '0') {
                        jcptTools.msg(data.msg);
                        return;
                    } else if (data.code == '-3') {
                        jcptTools.clearAllCookie();
                        jcptTools.gotoLogin();
                        return;
                    } else {
                        var datalist = data.list;
                        curSeg.selectedComFucInfo(datalist);
                    }
                }]
            });
        },

        //加载全部数据的具体的方法
        selectedComFucInfo: function(datalist){
            $("#menuType").val('');
            $("#menuType").children("option:not(:first)").remove();
            $("#seachTitle").val('');
            $("#CYGNLIST").html('');

            var enca = curSeg.encapsulation(datalist);

            // debugger;
            $("#menuType").append(enca["option"]);
            curSeg.collectDate(enca["List"]);
            layui.use('form',function (){
                var form  = layui.form;
                form.render();
            });
            curSeg.selectNodes();
        },

        //封装
        encapsulation: function(datalist){
            var menulist = {
                "menulist": []
            };

            // var datalist = data.list;
            var cygnList = menulist.menulist;
            var option = "";
            for (var i = 0; i < datalist.length; i++) {
                var obj = datalist[i];
                if(obj.MKXK_LEVEL==null) continue;
                //不加载公众服务
                if (obj.MKXK_LEVEL.length == 6 && obj.MKXKID != "75008" && obj.MKXKID != "75018") {
                    option += '<option value="' + obj.MKXK_LEVEL + '">' + obj.MKXK_MC + '</option>';
                }
                if (obj.MKXK_LEVEL.length == 8 && obj.SONMENUNUM != 0 && obj.SJ_MKXKID != "75008" && obj.SJ_MKXKID != "75018") {
                    var cygn = new curSeg.cygnModel();
                    //以下代码为了取上级名称1 tbb 2018年11月20日19:58:01
                    var t_sj_mkxkmc="";
                    for (var p = 0; p < datalist.length; p++) {
                        var obj9 = datalist[p];
                        if(obj9.MKXKID == obj.SJ_MKXKID){
                            t_sj_mkxkmc = obj9.MKXK_MC;
                            break;
                        }
                    }
                    //税费申报及缴纳 不显示
                    if(obj.MKXKID == "77109"){
                        cygn.Name = t_sj_mkxkmc + '>>' + obj.MKXK_MC;
                        cygn.id = obj.MKXKID;
                        cygn.mkxk_level = obj.MKXK_LEVEL;
                        cygn.mkxk_url = obj.MKXK_URL;

                        var cygn2 = new curSeg.cygnModel();
                        cygn2.Name = obj.MKXK_MC;
                        cygn2.id = obj.MKXKID;
                        cygn2.mkxk_level = obj.MKXK_LEVEL;
                        cygn2.mkxk_url = obj.MKXK_URL;
                        cygn.menulist.push(cygn2);
                        cygnList.push(cygn);
                    }else{
                        // cygn.Name = obj.SJ_MKXKMC + '>>' + obj.MKXK_MC;
                        cygn.Name = t_sj_mkxkmc + '>>' + obj.MKXK_MC;
                        cygn.id = obj.MKXKID;
                        cygn.mkxk_level = obj.MKXK_LEVEL;
                        cygn.mkxk_url = obj.MKXK_URL;
                        for (var j = 0; j < datalist.length; j++) {
                            var obj2 = datalist[j];
                            if(obj2.MKXK_LEVEL==null){
                                continue;
                            }
                            if (obj.MKXK_LEVEL == obj2.MKXK_LEVEL.substring(0, 8) && obj.MKXKID != obj2.MKXKID ) {
                                var cygn2 = new curSeg.cygnModel();
                                cygn2.Name = obj2.MKXK_MC;
                                cygn2.id = obj2.MKXKID;
                                cygn2.mkxk_level = obj2.MKXK_LEVEL;
                                cygn2.mkxk_url = obj2.MKXK_URL;
                                cygn.menulist.push(cygn2);
                            }
                        }
                        cygnList.push(cygn);
                    }
                } else if (obj.MKXK_LEVEL.length == 8 && obj.SONMENUNUM == 0) {
                    //地方税务业务
                    if(obj.MKXKID == "78159"){
                        continue;
                    }

                    wcfor:
                        for (var j = 0; j < datalist.length; j++) {
                            var obj2 = datalist[j];
                            if (obj2.SJ_MKXKID == obj.SJ_MKXKID) {
                                for (var k = 0; k < cygnList.length; k++) {
                                    var objcygn = cygnList[k];
                                    if (objcygn.id == obj.SJ_MKXKID) {
                                        break wcfor;
                                    }
                                }
                                var cygn = new curSeg.cygnModel();

                                //以下代码为了取上级名称2 tbb 2018年11月20日20:02:32
                                var t_sj_mkxkmc="";
                                for (var p2 = 0; p2 < datalist.length; p2++) {
                                    var obj92 = datalist[p2];
                                    if(obj92.MKXKID == obj.SJ_MKXKID){
                                        t_sj_mkxkmc = obj92.MKXK_MC;
                                        break;
                                    }
                                }
                                // cygn.Name = obj.SJ_MKXKMC;
                                cygn.Name = t_sj_mkxkmc;
                                cygn.id = obj.SJ_MKXKID;
                                cygn.mkxk_level = obj.MKXK_LEVEL;
                                cygn.mkxk_url = obj.MKXK_URL;

                                for (var k = 0; k < datalist.length; k++) {
                                    var obj3 = datalist[k];
                                    if (obj3.MKXK_LEVEL && obj3.MKXK_LEVEL.length == 8 && obj3.SJ_MKXKID == obj.SJ_MKXKID && obj3.SONMENUNUM == 0) {
                                        var cygn2 = new curSeg.cygnModel();
                                        cygn2.Name = obj3.MKXK_MC;
                                        cygn2.id = obj3.MKXKID;
                                        cygn2.mkxk_level = obj3.MKXK_LEVEL;
                                        cygn2.mkxk_url = obj3.MKXK_URL;
                                        cygn.menulist.push(cygn2);
                                    }
                                }
                                cygnList.push(cygn);
                                break;
                            }
                        }
                }
            }
            var obj ={};
            obj["option"] = option;
            obj["List"] = menulist;
            return obj;
        },

        /*收藏弹框数据展示*/
        collectDate: function (menulist) {
            var showlist = $("<ul></ul>");
            showall1(menulist.menulist, showlist);
            // $(".wxl_collSwdj").append(showlist);
            $(".wxl_collSwdj1").append(showlist);

            function showall1(menu_list1, parent) {
                for (var menu in menu_list1) {
                    if (menu_list1[menu].menulist.length > 0) {
                        var li = $("<li></li>");
                        $(li).append("<label mkxkid='"+menu_list1[menu].id+"'></label><span>" + menu_list1[menu].Name + "</span>").append("<ul class='submenu'></ul>").appendTo(parent);
                        showall1(menu_list1[menu].menulist, $(li).children().eq(2));
                    } else {
                        $("<li></li>").append("<label mkxkid='"+menu_list1[menu].id+"'></label><span>" + menu_list1[menu].Name + "</span>").appendTo(parent);
                    }
                }
            };
        },

        //更多页面 可点击超链接
        collectDate2: function (menulist) {
            var showlist = $("<ul></ul>");
            showall(menulist.menulist, showlist);
            $(".wxl_collSwdj").append(showlist);

            function showall(menu_list, parent) {
                for (var menu in menu_list) {
                    if (menu_list[menu].menulist.length > 0) {
                        var li = $("<li></li>");
                        $(li).append("<label></label><span><a href='' onclick='dzswjCommon.liClick(" + dzswjCommon.getMainUrl(+menu_list[menu]) + "')>"+menu_list[menu].Name+"</a></span>").append("<ul class='submenu'></ul>").appendTo(parent);
                        showall(menu_list[menu].menulist, $(li).children().eq(2));
                    } else {
                        $("<li></li>").append("<label></label><span><a href='' onclick='dzswjCommon.liClick(" + dzswjCommon.getMainUrl(+menu_list[menu]) + "')>"+menu_list[menu].Name+"</a></span>").appendTo(parent);
                    }
                }
            };
        },




        closeColl: function () {
            layer.closeAll()
        },

        //常用功能模板
        cygnModel: function () {
            this.Name = '';
            this.id = '';
            this.mkxk_level = '';
            this.mkxk_url = '';
            this.menulist = [];
        }
    }
})();
String.prototype.startWith = function(str){
    if(str == null || str== "" || this.length== 0 || str.length > this.length){
        return false;
    }
    if(this.substr(0,str.length) == str){
        return true;
    }else{
        return false;
    }
    return true;
};