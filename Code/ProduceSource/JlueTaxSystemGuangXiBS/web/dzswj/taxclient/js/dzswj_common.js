$(document).ready(function () {
    dzswjCommon.onload();
});
var dzswjCommon = (function () {
    var curSeg;
    var init = function () {
    };

    var logout = function (type) {
        $.ajax({
            url: jcptTools.cnf.contextPath + '/sso/control/ssoLogout.do',
            data: {},
            success: function (datas) {
                if (datas && parseInt(datas.code) === 0) {
                    var urls = datas.data || [],
                        i;

                    for (i = 0; i < urls.length; i++) {
                        logout3(urls[i]);
                        setTimeout("", 1000);
                    }
                }
                jcptTools.exitLogin(type);
            },
            error:function () {
                jcptTools.exitLogin(type);
            }
        });

    };

    var logout3 = function (url) {
        $('#kf-qwert').attr('src', url);
    };

    return {
        onload: function () {
            init();
            curSeg = dzswjCommon;
        },
        /***
         * 获取导航栏上点击图标的id
         */
        getTopIfremPid: function () {
            var data_name;
            var v_m_navs = $(".m_nav", parent.document).find("a");
            for (var i = 0; i < v_m_navs.length; i++) {
                var obj = $(v_m_navs[i]);
                if (obj.attr("class") == "j_active") {
                    data_name = obj.attr("data_name");
                    break;
                }
            }
            return data_name;
        },
        /***
         * 顶部横向菜单选中
         */
        mainHtmlLiCheck: function (pid) {
            if (pid == undefined || pid == null) {
                return;
            }
            $(".m_nav", parent.document).find("a").each(function () {
                if ($(this).attr("data_name") == pid) {
                    $(this).addClass("j_active");
                } else {
                    if ($(this).hasClass("j_active")) {
                        $(this).removeClass("j_active");
                    }
                }
            });
        },
        /***
         * 获取导航栏上点击图标 是否是未登录状态下的 公众服务
         */
        getTopIfremIsGzfw: function () {
            var data_name;
            var v_m_navs = $(".m_nav", parent.document).find("a");
            for (var i = 0; i < v_m_navs.length; i++) {
                var obj = $(v_m_navs[i]);
                if (obj.attr("class") == "j_active") {
                    data_name = obj.attr("data_gzfw");
                    break;
                }
            }
            if (data_name) {
                return true;
            } else {
                return false;
            }
        },
        /***
         * 初始化菜单
         * @param sjmkxkid 上级ID
         * @param type 1:通用方式  2自定义callback
         * @param obj { iframe: iframeID   ULID:ul 的id}
         * @param callback
         */
        initMenu: function (sjmkxkid, type, inobj, callback) {
            var pid = dzswjCommon.getCookieCddwByStr("PID"); // = baseTools.getUrlQueryString("pid")
            var id = dzswjCommon.getCookieCddwByStr("ID"); //  = baseTools.getUrlQueryString("id")
            var url;
            if(jcptTools.getIsDsdgh()){
                //只是为了查询地税单管户菜单
                url = "/server/platform/ptgl/qyyh/selectGnmkByYhid.do"
            }else{
                url = "/server/platform/ptgl/qyyh/selectGnmkByYhidPid.do";
            }

            baseTools.xhrAjax({
                url: url,
                dataType: 'jsonp',
                params: {
                    SJ_MKXKID: sjmkxkid
                },
                callback: [function (data) {
                    if (data.code == '-3') {
                        jcptTools.clearAllCookie();
                        jcptTools.gotoLogin();
                        return;
                    }
                    if (data.code <= 0) {
                        jcptTools.msg(data.msg, '2');
                        return;
                    } else {
                        if (type == "1") {
                            var datalist = data.list;
                            dzswjCommon.initMenuTypeOne(sjmkxkid, inobj, datalist);
                        } else if (type == "2") {
                            if (callback) {
                                callback(data, sjmkxkid);
                                // curSeg.setCookieCddw("");
                                // curSeg.setCookieCddwID("","","");
                                curSeg.clearCookieCddwID();
                            }
                        }
                    }
                }]
            });
        },

        /***
         * 初始化菜单 通用回调 TYPE = 1 时调用
         * @param sjmkxkid 升级模块id
         * @param inobj 传过来的obj对象
         * @param datalist 后台返回的数据
         */
        initMenuTypeOne: function (sjmkxkid, inobj, datalist) {
            var pid = dzswjCommon.getCookieCddwByStr("PID"); // = baseTools.getUrlQueryString("pid")
            var id = dzswjCommon.getCookieCddwByStr("ID"); //  = baseTools.getUrlQueryString("id")

            var html = "";
            var flag = true; //是否第一项  第一项页面默认会被打开
            var secondaryPage = curSeg.getIsSecondaryPage(sjmkxkid, datalist);
            var active = '';
            for (var i = 0; i < datalist.length; i++) {
                var obj = datalist[i];
                if (obj['MKXKID'] == sjmkxkid) {
                    continue;
                }

                if (secondaryPage) {
                    if (obj['SJ_MKXKID'] == sjmkxkid) {
                        var activeSj = '';
                        /*if(pid){
                            if(obj['MKXKID'] == pid){
                                activeSj = 'class="active"';
                            }
                        }*/
                        html += '<li ' + activeSj + ' id="' + obj['MKXKID'] + '">' +
                            '<a href="javascript:void(0)" data-url="' + dzswjCommon.getUrlByObj(obj) + '">' +
                            '<p><i class="iconfont ' + obj["ICON"] + '"></i>' + obj["MKXK_MC"] + '<i class="iconfont icon-arr-right-red lasti"></i></p>' +
                            '</a>' +
                            '<ul class="wxn_list_list" >';
                        var activeSon = '';
                        for (var j = 0; j < datalist.length; j++) {
                            var obj2 = datalist[j];
                            if (obj2['SJ_MKXKID'] == obj['MKXKID']) {
                                /*if(id){
                                    if(obj2['MKXKID'] == id){
                                        activeSon = 'class="active"';
                                    }else{
                                        activeSon='';
                                    }
                                }*/
                                html += '<li ' + activeSon + ' id="' + obj2["MKXKID"] + '"><a href="javascript:void(0)" data-url="' + dzswjCommon.getUrlByObj(obj2) + '">' + obj2["MKXK_MC"] + '</a></li>';
                            }
                        }
                        html += '</ul>' +
                            '</li>';
                    }
                } else {
                    html += '<li data-url="' + dzswjCommon.getUrlByObj(obj) + '" ' + active + ' id="' + obj["MKXKID"] + '">' +
                        '<p><i class="iconfont ' + obj["ICON"] + '"></i>' + obj["MKXK_MC"] + '<i class="iconfont icon-arr-right-red" style="font-size: 10px;float:right;"></i></p>' +
                        /*'<ul style="display: none;">' +
                        '<li ><a href="" target="_blank">政策法规与流程查询</a></li>' +
                        '<li ><a href="" target="_blank">留言咨询</a></li>' +
                        '</ul>' +*/
                        '</li>';
                }

            }

            // $("#yhzx_zrr_tree_ul").html(html);
            if (inobj['ul_obj']) {
                inobj['ul_obj'].html(html);
            }

            //将增值税发票查验平台赋成新窗打开属性
            $('#81014').click(function () {
               window.open("https://inv-veri.chinatax.gov.cn", "_blank");
               return false;
            });

            //二级页面 模拟点击事件
            if (secondaryPage) {
                if (pid) {
                    var pidobj = inobj['ul_obj'].find("li[id='" + pid + "']");
                    if (pidobj.length > 0) {
                        pidobj.find('a').eq(0).click();
                        if (id) {
                            inobj['ul_obj'].find("li[id='" + pid + "']").find("ul").find("li[id='" + id + "']").find('a').eq(0).click();
                        }
                    } else {
                        inobj['ul_obj'].find("li[id='" + id + "']").find("a").eq(0).click();
                        /*if(inobj['ul_obj'].find("li[id='" + id + "']").find('ul')){
                            //支持 我的信息 用户管理搜索
                            inobj['ul_obj'].find("li[id='" + id + "']").find("a").eq(0).click();
                            // inobj['ul_obj'].find("li[id='" + id + "']").find('ul').find("a").eq(0).click();
                        }else{
                            //支持 我的信息 电子资料搜索
                            inobj['ul_obj'].find("li[id='" + id + "']").find('a').click();
                        }*/


                    }
                } else {
                    inobj['ul_obj'].find("li").eq(0).find('a').eq(0).click();
                    inobj['ul_obj'].find("li").eq(0).find("ul").find("li").eq(0).find('a').eq(0).click();
                }
            } else {
                if (id) {
                    inobj['ul_obj'].find("li[id='" + id + "']").click();
                } else {
                    //inobj['ul_obj'].find("li").eq(0).click();
                    inobj['ul_obj'].find("li").eq(2).click();
                }
            }
            // curSeg.setCookieCddw("");
            // curSeg.setCookieCddwID("","","");
            curSeg.clearCookieCddwID();
        },


        getUrlByObj: function (obj) {
            // var url = obj["MKXK_URL_PT"];
            var url = obj["MKXK_URL_PT"];
            if (url && url.charAt(0) == "/") {
                return url.substr(1, url.length)
            } else {
                return url;
            }
            /* if (url) {
                 if (!(url.indexOf("http://") == 0 || url
                     .indexOf("https://") == 0)) {
                     if (jcptTools.cnf.clientURL != '') {
                         // 客户端请求
                         url = jcptTools.cnf.clientURL + url;
                     } else {
                         // 支持二级目录部署
                         url = jcptTools.cnf.contextPath + url;
                     }
                 }
             }*/
            return url;
        },
        //获取是否二级页面
        getIsSecondaryPage: function (sjmkxkid, list) {
            var flag = false;
            for (var i = 0; i < list.length; i++) {
                var obj = list[i];
                if (obj['MKXKID'] == sjmkxkid) {
                    continue;
                }
                if (obj['SONMENUNUM'] != "0") {
                    flag = true;
                    break;
                }
            }
            return flag;
        },
        /**
         * li 的点击事件
         * @param url 需要打开的页面的路径 包括菜单定位的参数
         * @param type 1或为空：open新页面 2:当前页面打开 3top当前页面打开
         */
        liClick: function (url, type) {
            dzswjCommon.setCookieCddwID(baseTools.getUrlQueryStringByUrl(url, "tid"), baseTools.getUrlQueryStringByUrl(url, "pid"), baseTools.getUrlQueryStringByUrl(url, "id"));
            var newurl;
            //公众服务
            if (baseTools.getUrlQueryStringByUrl(url, "tid") == "75018" || baseTools.getUrlQueryStringByUrl(url, "tid") == "75008") {
                //公众服务
                newurl = jcptTools.getGzfwUrl();
                if (type) {
                    if (type == "1") {
                        jcptTools.clientMain(newurl);
                    } else if (type == "2") {
                        parent.window.location.href = newurl;
                    } else if (type == "3") {
                        top.parent.window.location.href = newurl;
                    }
                } else {
                    if (baseTools.getUrlQueryStringByUrl(url, "id") == "75061" || baseTools.getUrlQueryStringByUrl(url, "id") == "75461") {
                        window.open('http://12366.chinatax.gov.cn/BsdtAllBLH_bsdtMain.do');
                    }else if(baseTools.getUrlQueryStringByUrl(url, "id") == "75062" || baseTools.getUrlQueryStringByUrl(url, "id") == "75462"){
                        //window.open('http://hd.chinatax.gov.cn/xxk/');
                        jcptTools.clientMain(newurl);
                    } else {
                        jcptTools.clientMain(newurl);
                    }
                }
            } else {
                //不是公众服务
                newurl = url.substr(0, url.indexOf("?"));
                if (type) {
                    if (type == "1") {
                        jcptTools.clientMain(jcptTools.getHttpsByUrl(newurl));
                        // window.open(newurl, '', 'width=' + (window.screen.availWidth) + ',height=' + (window.screen.availHeight - 50) + ',top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no, fullscreen=no')
                    } else if (type == "2") {
                        parent.window.location.href = jcptTools.getHttpsByUrl(newurl);
                    } else if (type == "3") {
                        top.parent.window.location.href = jcptTools.getHttpsByUrl(newurl);
                    }
                } else {
                    jcptTools.clientMain(jcptTools.getHttpsByUrl(newurl));
                }
            }
        },

        /***
         * 获取跳转的 公众服务 首页面的路径
         * @param obj
         * @param type 类型 为空或三：会拼装 TID PID ID ;    2 会拼装TID PID    1 只拼装TID    增加此方法是因为过度页面 更多只打开两级页面
         * @returns {string}
         */
        getMainGzfwUrl: function (obj, type) {
            var url = jcptTools.getMainGzfw();
            if (type) {
                if ("1" == type) {
                    url += '?tid=' + obj['TOP_MKXKID'];
                } else if ("2" == type) {
                    url += '?tid=' + obj['TOP_MKXKID'];
                    url += '&pid=' + obj['SJ_MKXKID'];
                } else if ("3" == type) {
                    url += '?tid=' + obj['TOP_MKXKID'];
                    url += '&pid=' + obj['SJ_MKXKID'];
                    url += '&id=' + obj['MKXKID'];
                }
            } else {
                url += '?tid=' + obj['TOP_MKXKID'];
                url += '&pid=' + obj['SJ_MKXKID'];
                url += '&id=' + obj['MKXKID'];
            }
            return url;
        },

        /***
         * 获取跳转的main页面的路径
         * @param obj
         * @param type 类型 为空或三：会拼装 TID PID ID ;    2 会拼装TID PID    1 只拼装TID    增加此方法是因为过度页面 更多只打开两级页面
         * @returns {string}
         */
        getMainUrl: function (obj, type) {
            var dq_yhsf = jcptTools.getUserDataByKey("DQ_YHSF");
            var p_id = "";
            var url;
            if (dq_yhsf == "ZRR") {
                url = jcptTools.cnf.contextPath + '/dzswj/taxclient/main_zrr.html';
            } else if (dq_yhsf == "QY" || dq_yhsf == "GLY" || dq_yhsf == "GLY_PT" || dq_yhsf == "BSR") {
                url = jcptTools.cnf.contextPath + '/dzswj/taxclient/main.html';
            } else if (dq_yhsf == "BYH") {
                url = jcptTools.cnf.contextPath + '/dzswj/taxclient/main.html';
            } else {
                //门户页面判断是否是公众服务 12.22增加 等于 true  tbb 未登录跳转到main页面
                if (dzswjCommon.getIsGzfwByCookie() || true) {
                    url = jcptTools.getMainGzfw();
                } else {
                    jcptTools.msg("没有获取到当前用户身份，请重新登录");
                    return;
                }
            }
            // url += '?tid=' + obj['TOP_MKXKID'];
            if (type) {
                if ("1" == type) {
                    url += '?tid=' + obj['TOP_MKXKID'];
                } else if ("2" == type) {
                    url += '?tid=' + obj['TOP_MKXKID'];
                    url += '&pid=' + obj['SJ_MKXKID'];
                } else if ("3" == type) {
                    url += '?tid=' + obj['TOP_MKXKID'];
                    url += '&pid=' + obj['SJ_MKXKID'];
                    url += '&id=' + obj['MKXKID'];
                }
            } else {
                url += '?tid=' + obj['TOP_MKXKID'];
                url += '&pid=' + obj['SJ_MKXKID'];
                url += '&id=' + obj['MKXKID'];
            }
            return url;
        },

        /**
         * 门户页面 li 的点击事件
         * @param tid 顶层id 定位需要使用
         * @param type 1或为空：open新页面 2:上级页面打开 3:当前页面打开
         */
        mhLiClick: function (tid, type) {
            var url;
            var cddw = {}; //菜单定位
            cddw["TID"] = tid;
            dzswjCommon.setCookieCddwID(tid, "", "");
            if (!curSeg.getIsGzfwByCookie()) { //id_tzgg:通知公告 75018:公众服务
                //未登录
                if (!jcptTools.getIsLogin()) {
                    if (window.index_gds) {
                        window.index_gds.showLogin();
                    }
                    // window.location.href = url;
                    return;
                }
            } else {
                //未登录
                if (!jcptTools.getIsLogin()) {
                    curSeg.setCookieCddwGzfw("WDL"); //公众服务 未登录
                }
            }

            var dq_yhsf = jcptTools.getUserDataByKey("DQ_YHSF");
            var url;
            if (dq_yhsf == "ZRR") {
                //11.21 修改需求 自然人也需要跳转到过度页面
                // url = jcptTools.cnf.contextPath + '/dzswj/taxclient/main_zrr.html';
                url = jcptTools.cnf.contextPath + '/dzswj/taxclient/login_index.html';
            } else if (dq_yhsf == "QY" || dq_yhsf == "GLY" || dq_yhsf == "GLY_PT" || dq_yhsf == "BSR") {
                url = jcptTools.cnf.contextPath + '/dzswj/taxclient/login_index.html';
            } else if (dq_yhsf == "BYH") {
                url = jcptTools.cnf.contextPath + '/dzswj/taxclient/main.html';
            } else {
                //门户页面判断是否是公众服务
                if (dzswjCommon.getIsGzfwByCookie()) {
                    url = jcptTools.cnf.contextPath + '/dzswj/taxclient/login_index.html';
                    jcptTools.OpenModel(jcptTools.getLoginIndex());
                } else {
                    jcptTools.msg("没有获取到当前用户身份，请重新登录");
                    return;
                }
            }

            // dzswjCommon.setCookieCddw(cddw);
            var newurl;
            if ( url && url.indexOf("?") != -1) {
                newurl = url.substr(0, url.indexOf("?"));
            } else {
                newurl = url;
            }
            if (type) {
                if (type == "1") {
                    // window.open(newurl, '', 'width=' + (window.screen.availWidth) + ',height=' + (window.screen.availHeight - 50) + ',top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no, fullscreen=yes')
                } else if (type == "2") {
                    // parent.window.location.href = newurl;
                } else if (type == "3") {
                    window.location.href = jcptTools.getHttpByUrl(newurl);
                }
            } else {
                // window.open(newurl, '', 'width=' + (window.screen.availWidth) + ',height=' + (window.screen.availHeight - 50) + ',top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no, fullscreen=yes')
            }
        },


        //查询cookie中菜单定位变量中的值
        getCookieCddwByStr: function (str) {
            var cddw = dzswjCommon.getCookieCddw();
            if (cddw) {
                return cddw[str];
            } else {
                return "";
            }
        },
        //清除cookie中菜单定位的值
        clearCookieCddwID: function () {
            var cddw = dzswjCommon.getCookieCddw();
            cddw["TID"] = "";
            cddw["PID"] = "";
            cddw["ID"] = "";
            jcptTools.setCookie("CDDW", cddw);
        },
        //其他页面赋值
        setCookieOtherUrl: function (url) {
            var cddw = dzswjCommon.getCookieCddw();
            cddw["OtherParam"] = url;
            dzswjCommon.setCookieCddw(cddw);
        },
        getCookieOtherUrl: function () {
            var cddw = dzswjCommon.getCookieCddw();
            if (cddw) {
                return cddw["OtherParam"];
            } else {
                return "";
            }
        },
        //通用页面跳转携带参数
        setCookieCommonUrl: function (key, value) {
            var cddw = dzswjCommon.getCookieCddw();
            cddw[key] = value;
            dzswjCommon.setCookieCddw(cddw);
        },
        getCookieCommonUrl: function (key) {
            var cddw = dzswjCommon.getCookieCddw();
            if (cddw) {
                return cddw[key];
            } else {
                return "";
            }
        },
        //其他系统打开我要办税页面 Iframe
        setCookieIframe: function (obj) {
            var cddw = dzswjCommon.getCookieCddw();
            cddw["Iframe"] = obj;
            dzswjCommon.setCookieCddw(cddw);
        },
        getCookieIframe: function () {
            var cddw = dzswjCommon.getCookieCddw();
            if (cddw) {
                return cddw["Iframe"];
            } else {
                return "";
            }
        },
        setCookieCddwID: function (tid, pid, id) {
            var cddw = dzswjCommon.getCookieCddw();
            cddw["TID"] = tid;
            cddw["PID"] = pid;
            cddw["ID"] = id;
            jcptTools.setCookie("CDDW", cddw);
        },
        setCookieCddw: function (cddw) {
            jcptTools.setCookie("CDDW", cddw);
        },
        setCookieCddwGzfw: function (statu) {
            var cddw = dzswjCommon.getCookieCddw();
            cddw["GZFW"] = statu;
            jcptTools.setCookie("CDDW", cddw);
        },
        getCookieCddw: function () {
            return jcptTools.getCookie("CDDW") || {};
        },
        setCookieCddwByKeyVal: function (key, val) {
            var cddw = dzswjCommon.getCookieCddw();
            cddw[key] = val;
            jcptTools.setCookie("CDDW", cddw);
        },
        getCookieCddwByKeyVal: function (key) {
            var cddw = dzswjCommon.getCookieCddw();
            if (cddw) {
                return cddw[key];
            } else {
                return "";
            }
        },

        // 查询是否公众服务 此方法禁用了 准备删除 tbb 11.22
        getIsGzfw: function (tid) {
            //id_tzgg:通知公告 75018:公众服务
            if (tid != "75018" && tid != "id_tzgg") {
                return false;
            } else {
                return true;
                $('.content_tb .content_tb1').hide();
                $('.content_tb .content_tb2').show();
            }
        },
        getIsGzfwByCookie: function () {
            var tid = dzswjCommon.getCookieCddwByKeyVal("TID");
            if (tid == "75018" || tid == "id_tzgg" || tid == "75008") {
                return true;
            } else {
                return false;
            }
        },

        //退出登录
        dzswjLoginOut: function (type) {
            return false;
            if (confirm("确定退出吗?")) {
                logout(type);
            }
        },

        //返回
        dzswjReturnOut: function () {
            if (confirm("确定返回吗?")) {

                jcptTools.exitLogin(5);
            }
        }

        /*getMainUrlZrr: function (obj) {
            var url = jcptTools.cnf.contextPath + '/dzswj/taxclient/main_zrr.html';
            /!*if (url.indexOf("?") != -1) {
                url += '&tid=' + obj['TOP_MKXKID'];
            } else {
            }*!/
            url += '?tid=' + obj['TOP_MKXKID'];
            url += '&pid=' + obj['SJ_MKXKID'] + '&id=' + obj['MKXKID'];
            return url;
        }*/
    }
})();