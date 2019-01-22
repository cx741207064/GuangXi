$(document).ready(function () {
    mainYwObj.onLoad();
    $("#scrollsidebar").bgiframe(
       {
        width:93,
        height:150
      
        
       } 
    );
});

var mainYwObj = (function () {

    var curSeg;//当前对象
    var mainZgswj, curZgswj, curSkbh;

    return {
        onLoad: function () {
            curSeg = mainYwObj;
            //登录状态
            if(jcptTools.getIsLogin()){
                curSeg.bindEvent();
                curSeg.loadYhxx();
                //下个方法先注释 切换税务机关 功能开发完成后再放开 tbb 2018年11月15日10:06:25
                // curSeg.loadZgswjgFromGt3();
            }
            //个人用户切换企业时 此页面显示切回按钮
            if(jcptTools.getUserDataByKey("CS_DLLX") == "GRYH"){
                $("#kf-btn-sfqh-qhgr").css('display','block');
            }
            jcptTools.getWSSQUrl();
            baseTools.xhrAjaxJsonP({
                url: jcptTools.cnf.wssqURL + "/server/wssq/ctais2/taxerLoginAction.do",
                bShow: false,
                async: false,
                params: {
                    NSRSBH: jcptTools.getUserDataByKey("NSRSBH"),
                    CLIENTSIGNCERT: 1,//CA登陆标志，1是0不是
                    START:1,
                    END:5
                },
                callback: [function (jsonObj, xhrArgs) {
                    switch (jsonObj.code) {
                        case "6":
                            if(jsonObj.data) {
                                if(jsonObj.data[0] && jsonObj.data[0].PDDJ) {
                                    $('#kf-main-header-xydj').append('<b>&nbsp;信用等级<font color="#ffffff">' + jsonObj.data[0].PDDJ + '</font></b>');
                                }
                            }
                            break;
                    }

                }]

            });
        },
        // 绑定事件
        bindEvent: function () {
            // “切换所属机关”按钮点击事件
            // $('#kf-btn-sfqh-qhzgswjg').on('click', curSeg.sfqhToQyZgswj);
            layuiTools.selectEvent("filter-qy",curSeg.sfqhToQyZgswj);

            // “切换个人办税”按钮点击事件
            $('#kf-btn-sfqh-qhgr').on('click', curSeg.sfqhToGryh);
        },

        /*redirectDb: function (type) {
            $(".m_nav li").siblings("li").find("a").removeClass("j_active");
            $(".m_nav li").find("a[name=hdzx]").addClass("j_active");
            $("#main_iframe").attr("src", "hdzx/htjs_hdzx_iframe.html");
            // msgObj = type;
        },*/

        //加载登录的企业用户信息
        loadYhxx: function () {
            var dlmc = jcptTools.getUserDataByKey('DLMC');
            $('#kf-txt-yhxx-dlzh').text(dlmc);

            var nsrsbh = jcptTools.getUserDataByKey('SHXYDM') || jcptTools.getUserDataByKey('NSRSBH');
            var nsrmc = jcptTools.getUserDataByKey('NSRMC');

            $('#kf-txt-yhxx-qymc').text(nsrmc);
            $('#kf-main-header-nsrmc').text("【 " + nsrmc);
            $('#kf-main-header-nsrsbh').text(nsrsbh + " 】");
        },

        /* 从gt3加载有效主管税务机关 */
        loadZgswjgFromGt3: function () {
            baseTools.xhrAjax({
                url: '/server/jcpt/sfqh/getZgswjgList.do',
                bShow: false,
                callback: [function (jsonObj, xhrArgs) {
                    switch (jsonObj.code) {
                        case "0":
                            if (jsonObj.data && jsonObj.data.length > 0) {
                                curSeg.setQhZgswjgSelect(jsonObj);
                            }
                            break;
                        case "-3":
                            alert(jsonObj.msg);
                            window.location = 'login.html';
                            break;
                    }
                }]
            });
        },

        /* 设置切换主管税务机关下拉选 */
        setQhZgswjgSelect: function (jsonObj) {
            var $zgswj = $('#kf-select-sfqh-zgswjg');
            var item, djxh, html, zgswj;
            if (jsonObj.data) {
                for (var i = 0; i < jsonObj.data.length; i++) {
                    item = jsonObj.data[i];
                    zgswj = item['ZGSWSKFJ_DM'];

                    if (zgswj === mainZgswj) {
                        continue;
                    }

                    html = [];
                    djxh = item['DJXH'];
                    html.push('<option value="');
                    html.push(djxh);
                    html.push('"');
                    html.push(' data-zgswj="');
                    html.push(zgswj);
                    html.push('"');
                    if (djxh === jsonObj['DQSF_DJXH']) {
                        html.push(' selected="selected"');
                    }
                    html.push('data-ismain="' + item['ISMAIN'] + '"');
                    html.push('>');
                    html.push(item['SWJGMC']);
                    if (item['ISMAIN'] === 'Y') {
                        html.push('（主）');
                    } else if (zgswj && zgswj.substr(0, 1) === '2') {
                        html.push('（原地税）');
                    }
                    html.push('</option>');
                    $zgswj.append(html.join(''));

                    layuiTools.renderForm();
                    // console.log($('.main_ssjg').find('dl'));
                    $('.main_ssjg').find('dl').append('<iframe id="iframebar" src="about:blank" frameBorder=0 marginHeight=0 marginWidth=0 style="position:absolute;visibility:inherit;top:0px;left:0px;height:150px;width:320px;z-index:-1;background:#fff;filter="grogid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)"></iframe>')

                    /*setTimeout(function () {
                        form.render('select');
                    }, 200)*/
                }
            }
        },

        // 切换到企业主管税务局
        sfqhToQyZgswj: function () {
            var $qhZgswjgSelect = $('#kf-select-sfqh-zgswjg');
            var obj = {};
            obj.DJXH = $qhZgswjgSelect.val();
            var $option = $qhZgswjgSelect.find(':selected');
            obj.ZGSWSKFJ_DM = $option.attr('data-zgswj');
            obj.ISMAIN = $option.attr('data-ismain');

            baseTools.xhrAjax({
                url: '/server/jcpt/sfqh/toZgswjg.do',
                bShow: false,
                params: obj,
                callback: [function (jsonObj, xhrArgs) {
                    switch (jsonObj.code) {
                        case "0":
                            jcptTools.setCookieJsonObjLogin(jsonObj.JCPTMAP);
                            jcptTools.setCookieSwjgNsr(jsonObj.SWJGNSRMAP);
                            jcptTools.gotoMain(1);
                            location.reload();
                            break;
                        case "-3":
                            alert(jsonObj.msg);
                            window.location = 'login.html';
                            break;
                    }
                }]
            });
        },

        // 切换到个人用户
        sfqhToGryh : function () {
            baseTools.xhrAjax({
                url: "/server/jcpt/sfqh/grsf.do",
                type: 'GET',
                dataType: 'jsonp',
                callback: [function (jsonObj, textStatus, jqXHR) {
                    if (jsonObj.code === "1") {
                        jcptTools.setCookieJsonObjLogin(jsonObj['jcptMap']);
                        location.href = 'main_zrr.html';
                    }else if (jsonObj.code === "-1"){
                        jcptTools.msg(jsonObj.msg);
                    }
                }]
            });
        },


        //给申报设置cookie
        setSbCookie: function (sbUserData) {
            window.QX_USER = sbUserData;
        }
    };
})();