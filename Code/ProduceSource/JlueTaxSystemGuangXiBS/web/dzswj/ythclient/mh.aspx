<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="mh.aspx.cs" Inherits="JlueTaxSystemGuangXiBS.web.dzswj.ythclient.mh" %>

<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=11" />
    <title>国家税务总局广西壮族自治区电子税务局</title>
    <link rel="stylesheet" href="../common/dzswj_font/iconfont.css" />
    <link type="text/css" rel="stylesheet" href="../common/reset.css" />
    <link type="text/css" rel="stylesheet" href="css/mh.css?version=1.15" />
    <link type="text/css" rel="stylesheet" href="css/yrbj.css" />
    <link type="text/css" rel="stylesheet" href="css/scbl_index3.css" />
    <script>
        if (typeof external.CheckPfxCertInIE != "undefined") {
            window.location.href = "mh_khd.html";
        }
    </script>
    <script src="../../dzswj/ythclient/js/validator.js"></script>
    <script src="../commons/jcpt_properties.js?version=20190527"></script>
    <script src="../commons/include_ui_jcpt.js?dm=5051&version=20190527"></script>
    <script src="../../dzswj/tools/jcptTools.js"></script>
    <script src="../../dzswj/tools/layuiTools.js"></script>
    <script src="../taxclient/js/dzswj_common.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" src="index_gds_new.js?version=20190720"></script>
    <script type="text/javascript" src="index_gds.js?version=20190720"></script>
    <script src="js/LoadCertTools1.js"></script>
    <script src="../tools/aesTools.js"></script>
    <script src="js/mh.js"></script>
    <script src="js/json2.js"></script>
    <script src="js/json_parse.js"></script>
    <script src="js/json_parse_state.js"></script>
    <script src="js/cycle.js"></script>
    <script type="text/javascript" src="js/mh_temp.js"></script>
    <script src="../commons/js/gnmkUtils.js"></script>
    <script src="js/byhdl.js"></script>
    <script src="js/qrcode2.js"></script>
    <script src="js/scbl_login.js"></script>
    <style>
        .layui-layer-shade{
            z-index: 9999 !important;
        }
        .czzn{
            position: fixed;
            left: 0px;
            top: 48%;
            z-index: 10000;
        }
        .czsp{
            position: fixed;
            right: 0px;
            top: 48%;
            z-index: 10000;
        }
        .czzn .erweima{
            position: absolute;
            left: 75px;
            top: 28px;
            height: 150px;
            width: 130px;
            padding: 5px;
            background-color: white;
            display: none;
        }
        .erweima h3{
            font-size: 6px;
            color: #000;
            font-family: "微软雅黑";
            margin-bottom: 5px;
            text-align: center;
        }
        .https { color: #333; padding: 20px; line-height: 23px;}
        .https a { color: #0098f4;}
        .https font { padding-bottom: 10px; display: inline-block}
        .https span { display: inline-block; float: right; width: 200px; padding-top: 30px; text-align: center;}
    </style>
</head>

<body onkeydown="index_gds.keyDown()">

<!--关闭 缩小按扭开始-->

<div class="tright">

    <div class="ctrl_div">

        <a href="#;" onclick="mh.onClose()" class="ctrl_close" id="ctrl_close">
            <i class="icon iconfont icon-guanbi"></i>
        </a>

        <!-- <a href="#;" onclick="mh.onMax()" class="ctrl_max" id="ctrl_max">
            <i class="icon iconfont icon-zuidahua"></i>
        </a> -->

        <a href="#;" onclick="mh.onMin()" class="ctrl_min" id="ctrl_min">
            <i class="icon iconfont icon-zuixiaohua"></i>
        </a>

    </div>

</div>

<!--关闭 缩小按扭结束-->


<div class="wrap"  style="display: none">
    <div class="top">
        <img src="imgs/mh_topbg.png" class="bg_top_img">
        <div class="header clearfix">
            <div class="header_logo f_left">
                <img id="id_mh_title_img" src="imgs/gxlogo.png?version=1.14" alt="" />
                <!--<span>国家税务总局广西壮族自治区电子税务局</span>-->
            </div>
            <div class="header_right f_right">
                <!--<div class="header_right_op f_left">-->
                <!--<i class="icon iconfont icon-transaction_fill"></i>-->
                <!--<span onclick="window.location.href='http://zrrwt.gxds.gov.cn:7666/'">自然人网上办税平台（旧）</span>-->
                <!--</div>-->
                <!--<div class="header_right_op f_left" id="dzswj_help0">-->
                <!--<i class="icon iconfont icon-moneybagfill"></i>-->
                <!--<span onclick="window.location.href='https://its.guangxi.chinatax.gov.cn:8011'">个人所得税入口</span>-->
                <!--</div>-->
                <div class="header_right_op f_left" id="btn_hjjc" onclick="mh.showElePage();">
                    <i class="icon iconfont icon-editor2"></i>
                    <span>环境检测</span>
                </div>
                <div class="header_right_op f_left wxl_xz">
                    <i class="icon iconfont icon-xiazai2"></i>
                    <span>下载</span>
                </div>
                <div class="header_right_op f_left" id="dzswj_help">
                    <i class="icon iconfont icon-question"></i>
                    <span>帮助</span>
                </div>
            </div>
            <div class="wep_button">
                <div class="wep_login">
                    <img id="id_mh_login_img" src="imgs/mh_login.png" alt="" />
                    <span id="id_mh_login_span">登录</span>
                    <div id="id_mh_login_div" class="companyName">

                    </div>
                </div>

            </div>
        </div>
        <div class="content wep_box">
            <div class="wep_operation clearfix">
                <div class="wep_wddb f_left alertLogin">
                    <a id="id_a_mh_wddb">
                        <img class="mh_wddb" src="imgs/mh_wddb.png" alt="" /><br />
                        <span><img src="imgs/mh_wddb_txt.png?version=1.21" alt="" /></span>
                    </a>
                </div>
                <div class="f_left alertLogin">
                    <a id="id_a_mh_wyyy">
                        <img class="mh_wyyy" src="imgs/mh_wyyy.png" alt="" /><br />
                        <span><img src="imgs/mh_wyyy_txt.png?version=1.21" alt="" /></span>
                    </a>
                </div>
                <div class="f_left alertLogin">
                    <a id="id_a_mh_gxfw">
                        <img class="mh_gxfw" src="imgs/mh_gxfw.png" alt="" /><br />
                        <span><img src="imgs/mh_gxfw_txt.png?version=1.21" alt="" /></span>
                    </a>
                </div>
                <div class="f_left">
                    <a id="id_a_mh_tzgg">
                        <img class="mh_tzgg" src="imgs/mh_tzgg.png" alt="" /><br />
                        <span><img src="imgs/mh_tzgg_txt.png?version=1.21" alt="" /></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="detail wep_box">
        <div class="wep_guide clearfix">
            <div class="wep_wdxx f_left alertLogin">
                <a id="id_a_mh_wdxx" class="wep_wdxx_a">

                </a>
            </div>
            <div class="wep_wybs f_left alertLogin">
                <a id="id_a_mh_wybs" class="wep_wybs_a">

                </a>
            </div>
            <div class="wep_wycx f_left alertLogin">
                <a id="id_a_mh_wycx" class="wep_wycx_a">

                </a>
            </div>
            <div class="wep_hdzx f_left alertLogin">
                <a id="id_a_mh_hdzx" class="wep_hdzx_a">

                </a>
            </div>
            <div class="wep_gzfw f_left">
                <a id="id_a_mh_gzfw" class="wep_gzfw_a">

                </a>
            </div>
        </div>
    </div>
    <!--<div class="czzn">-->
    <!--<a href="http://www.gxgs.gov.cn:9731/czsyqgl/strategy.html" target="_blank" >&ndash;&gt;-->
    <!--<img src="imgs/huanhuan.png">-->
    <!--</a>-->
    <!--<div class="erweima">&ndash;&gt;-->
    <!--<h3>扫码查看“操作指南”</h3>-->
    <!--<img src="imgs/erweima.png" alt="">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="czsp">-->
    <!--<a href="http://www.gxgs.gov.cn:9731/czsyqgl/video.html" title="操作视频" target="_blank">&ndash;&gt;-->
    <!--<img src="imgs/xixi.png">-->
    <!--</a>-->
    <!--</div>-->
    <div class="footer ">
        <div class="footer_box wep_box clearfix" style="padding-top:10px">
            <div class="foot_logo">
                <img src="imgs/mh_foot_logo.png" alt="" />
            </div>
            <div class="foot_text">
                <p>版权所有：国家税务总局广西壮族自治区税务局</p>
                <p>服务电话：12366</p>
                <span id="version"></span>
            </div>
        </div>
    </div>
</div>

<div class="wep_loginlogin" style="display:none;">
    <div class="wep_loginform wep_button">
        <div class="wep_tab">
            <ul class="wep_ul">
                <li class="active">短信登录</li>
                <li class="wdl_szzs">数字证书登录<!--<img class="wdl_bot" src="imgs/hot.png" />--></li>
                <li>报验户登录</li>
                <li>自然人登录</li>
                <!--<li><a href="https://zrr.gxds.gov.cn:8008">个人所得税</a></li>-->
                <p class="text_alc wdl_text_alc wdl_text_alc1">
						<span class="layui-layer-setwin">
							<a class="layui-layer-ico layui-layer-close layui-layer-close1" style="" href="javascript:;"></a>
							<span class="login_close_bt"><i class="icon iconfont icon-guanbi1 "></i></span>
						</span>
                </p>

            </ul>
            <div class="wep_form">
                <form id="wep_form_dxdl" action="" style="display: block;">
                    <div id="wdl_dxdl1" class="wdl_dxdl1" style="display: block;">
                        <p class="usernameAll">
                            <input type="text" value="请输入统一社会信用代码（或纳税人识别号）" class="username clearInput" data-value="请输入统一社会信用代码（或纳税人识别号）" />
                            <input type="text" name="USER_ZH"  class="usernames clearInput" />
                        </p>
                        <p class="passwordAll">
                            <input type="text" class="topPw clearInput" value="请输入密码" data-value="请输入密码" />
                            <input type="password" class="passwords clearInput" name="USER_MM" />
                        </p>
                        <p class="yzm" id="dxdl_yzm1" style="position: relative; overflow: hidden;display: none">
								<span class="widthHalfAll wdl_yzm" style="display: block">
									<input id="dxdl_yzm" type="text" class="yzmInput clearInput" value="请输入验证码" data-value="请输入验证码" />
								</span>
                            <img id="dxdl_pic_code" class="wdl_yzm_img" src="/web/cm/showPictureCode.do?flag=dxdl_yzm&t=0.8399987216477371" onclick="document.getElementById('dxdl_pic_code').src='/web/cm/showPictureCode.do?flag=dxdl_yzm&t=' + Math.random();">
                        </p>
                        <p style="width:320px;">
                        <div id="sfcx" class="layui-form layui-inline">
                            <select name="SFLX_DM" lay-filter="sflx_dm_filter" onchange="index_gds.onClickDlrsf(this)">
                                <option value="请选择登录身份">请选择登录身份</option>
                                <option value="1">法定代表人</option>
                                <option value="2">财务负责人</option>
                                <option value="3">办税人</option>
                                <option value="4">购票员</option>
                            </select>
                        </div>
                        <div id="sfhm" class="layui-form layui-inline">
                            <select name="SJHM" value="请选择">
                            </select>
                        </div>
                        </p>
                        <p style="position: relative; overflow: hidden">
								<span class="widthHalfAll" style="display: block">
									<input type="text" class="widthHalf clearInput" value="请输入短信验证码" data-value="请输入短信验证码" />
									<input type="text" name="WEP_SEND_YZM" class="widthHalfs clearInput" />
								</span>
                            <input type="button" name="WEP_SEND_MSG" class="wep_send_msg widthHalf" onclick="index_gds.onGetQyyhDxptYzm('wep_form_dxdl')"
                                   value="发送验证码">

                        </p>

                        <p style="text-align: left;">
                            <input type="button" id="id_dxdl_login" class="wep_login_btn" onclick="index_gds.dlTip(1)" value="登  录" style="margin-top: 8px; margin-bottom: 10px" />
                            <span class="tradeOrder wdl_tips">交易序号：<span name="JYXH">**</span></span>
                            <!--<a  target="_blank" style="color:red;font-size:15px;font-weight:bold;padding-left:15px;text-decoration: underline;float:right;" href="http://etax.guangxi.chinatax.gov.cn:8103/">原网上申报（A站）入口</a>-->
                        </p>
                    </div>
                    <div id="wdl_dxdl2" class="wdl_dxdl2" style="display: none;">
                        <p class="usernameAll">
                            <input type="text" value="请输入统一社会信用代码（或纳税人识别号）" class="username clearInput" data-value="请输入统一社会信用代码（或纳税人识别号）" />
                            <input type="text" name="USER_ZH2"  class="usernames clearInput" />
                        </p>
                        <p style="width:320px;">
                        <div id="sfcx2" class="layui-form layui-inline">
                            <select name="SFLX_DM2" lay-filter="sflx_dm_filter2" onchange="index_gds_new.onClickDlrsf(this)">
                                <option value="请选择登录身份">请选择登录身份</option>
                                <option value="1">法定代表人</option>
                                <option value="2">财务负责人</option>
                                <option value="3">办税人</option>
                                <option value="4">购票员</option>
                            </select>
                        </div>
                        <div id="sfhm2" class="layui-form layui-inline">
                            <select name="SJHM2" value="请选择">
                            </select>
                        </div>
                        </p>
                        <p class="passwordAll wdl_phone">
                            <input type="text" class="topPw clearInput" value="请输入完整手机号码" data-value="请输入完整手机号码" />
                            <input type="text" class="passwords clearInput" name="WEP_WZ_SJHM" />
                        </p>
                        <p style="position: relative; overflow: hidden">
							<span class="widthHalfAll" style="display: block">
								<input type="text" class="widthHalf clearInput" value="请输入短信验证码" data-value="请输入短信验证码" />
								<input type="text" name="WEP_SEND_YZM2" class="widthHalfs clearInput" />
							</span>
                            <input type="button" name="WEP_SEND_MSG2" class="wep_send_msg widthHalf" onclick="index_gds_new.onGetQyyhDxptYzm('wep_form_dxdl')"
                                   value="发送验证码">
                        </p>

                        <p style="text-align: left;">
                            <input type="button" id="id_dxdl_login2" class="wep_login_btn" onclick="index_gds.dlTip(4)" value="登  录" style="margin-top: 8px; margin-bottom: 10px" />
                            <span class="tradeOrder wdl_tips">交易序号：<span name="JYXH2">**</span></span>
                            <!--<a  target="_blank" style="color:red;font-size:15px;font-weight:bold;padding-left:15px;text-decoration: underline;float:right;" href="http://etax.guangxi.chinatax.gov.cn:8103/">原网上申报（A站）入口</a>-->
                        </p>
                    </div>
                    <div class="wep_xzlj_left f_left wxl_scbsbl" style="display: block;  margin-left: 31%; margin-top: 7%;">
                        <a onclick="index_gds.xbnsrtcOnclick()" href="javascript:void(0)" style="color: #0090ff;font-size: 20px;text-decoration:underline;">新办纳税人套餐</a>
                    </div>
                </form>

                <form id="wep_form_iadl" action="" style="display: none;">
                    <p>
                        <input type="text" value="账号" name="USER_ZH" class="username" data-value="请输入账号" style="display: none;"/>
                        <input id="ifcert" type="text" value="证书" name="ifcert" class="username" data-value="证书" style="display: none;"/>
                        <input id="ifp7" type="text" value="签名" name="ifp7" class="username" data-value="签名" style="display: none;"/>
                        <input id="sta1" type="text" value="环境状态" name="sta1" class="username" data-value="环境状态" style="display: none;"/>

                    </p>
                    <p class="passwordAll">
                        <input type="text" class="topPw" value="请输入证书密码" data-value="请输入证书密码" />
                        <input type="password" name="USER_MM" class="passwords" />
                    </p>
                    <!--<p>
                        <input type="password" name="USER_MM" placeholder="密码" />
                    </p>-->
                    <p style="white-space: normal">
                        <input type="button" class="wep_login_btn" onclick="index_gds.dlTip(2)" value="登  录">
                    </p>
                    <div class="wdl_tips">
                        <p style="">温馨提醒：</p>
                        <span id="szzstx" name="szzstx" style="display: inline-block;text-indent: 26px;">
								数字证书登录是电子税务局新提供的一种登录方式，您可以插入税控盘或者金税盘直接登录，密码是税务数字证书密码。
								首次使用数字证书登录前需要<a href="https://share.weiyun.com/54KpS51" target="_blank" style="color:#0090ff;text-decoration: underline">&nbsp;下载&nbsp;</a>安装数字证书服务及设备驱动。
                            <!--数字证书登录是电子税务局新提供的一种登录方式，您可以插入增值税防伪税控系统使用的税控盘/金税盘登录，密码是税控系统的密码。
                            首次使用数字证书登录前需要下载安装数字证书服务及设备驱动。后续我们将首次免费提供数字证书ukey，可与税控盘/金税盘替换使用。
                            <br><a href="https://share.weiyun.com/54KpS51" target="_blank" style="color:#0090ff;text-decoration: underline">（点击下载数字证书服务及设备驱动）</a>-->
							</span>
                    </div>

                    <iframe  name="ifname" id="getyqsj" src="get_iayq.html" style="display: none"></iframe>
                </form>
                <form id="wep_form_cadl" action="" style="display: none;">
                    <p class="usernameAll">
                        <input type="text" value="请输入统一社会信用代码（或纳税人识别号）" class="username clearInput" data-value="请输入统一社会信用代码（或纳税人识别号）" />
                        <input type="text" name="USER_ZH_BYH" class="usernames clearInput" />
                    </p>
                    <p class="usernameAll" style="overflow:visible;">
							<span id="snsw" class="layui-form layui-inline wdl_snsw_box">
								<select name="SNSW_DM" lay-filter="snsw_dm_filter">
									<option value="选择省内/外">选择省内/外</option>
									<option value="1">省内</option>
									<option value="2">省外</option>
								</select>
							</span>
                        <span class="wdl_usernh_box">
								<input type="text" value="请输入年号" class="usernh clearInput" data-value="请输入年号"/>
								<input type="text" class="usernhs clearInput" name="USER_NH_BYH"/>
						    </span>
                        <span class="wdl_userwh_box">
								<input type="text" value="请输入文号" class="userwh clearInput" data-value="请输入文号"/>
								<input type="text" class="userwhs clearInput" name="USER_WH_BYH"/>
						    </span>
                        <span id="jg" class="layui-form layui-inline wdl_jg_box">
								<select name="JG" lay-filter="snsw_jg_filter">

								</select>
							</span>
                    </p>
                    <p class="passwordAll">
                        <input type="text" class="topPw clearInput" value="默认密码Aa+社会信用代码后8位" data-value="默认密码Aa+社会信用代码后8位" />
                        <input type="password" name="USER_MM_BYH" class="passwords clearInput" />
                    </p>
                    <p style="white-space: normal">
                        <input type="button" id="id_byh_login" class="wep_login_btn" onclick="index_gds.dlTip(3)" value="登  录">
                    </p>
                    <div class="wdl_tips">
                        <p style="">温馨提醒：</p>
                        <span style="display: inline-block;text-indent: 26px;">
								报验户登录提供跨省、县（市）、外来临时从事生产经营的纳税人登录电子税务局使用。
							</span>
                    </div>
                </form>
                <!-- <form id="wep_form_grdl" action="" style="display: none;">
                     <p class="usernameAll">
                         <input type="text" value="账号" class="username clearInput" data-value="账号" />
                         <input type="text" name="USER_ZH" class="usernames clearInput" />
                         &lt;!&ndash;<input type="text" name="USER_ZH" placeholder="用户名" />&ndash;&gt;
                     </p>
                     <p class="passwordAll">
                         <input type="text" class="topPw clearInput" value="密码" data-value="密码" />
                         <input type="password" name="USER_MM" class="passwords clearInput" name="USER_MM" />
                     </p>
                     <p style="white-space: normal">
                         <input type="button" class="wep_login_btn" onclick="index_gds.onUserLogin()" value="登  录">
                     </p>
                 </form>-->
                <form id="wep_form_grdl_new" action="" style="display: none;">
                    <p class="usernameAll">
                        <input type="text" value="请输入账号" class="username clearInput" data-value="请输入账号或手机号" />
                        <input type="text" name="USER_ZH" class="usernames clearInput" />
                    </p>
                    <p class="passwordAll">
                        <input type="text" class="topPw clearInput" value="请输入密码" data-value="请输入密码" />
                        <input type="password" class="passwords clearInput" name="USER_MM" />
                    </p>
                    <p class="yzm"  id="zrrdl_yzm1" style="position: relative; overflow: hidden;display: none">
							<span class="widthHalfAll wdl_yzm" style="display: block">
								<input id="zrrdl_yzm" type="text" class="yzmInput clearInput" value="请输入验证码" data-value="请输入验证码" />
							</span>
                        <img id="zrrdl_pic_code" class="wdl_yzm_img" src="/web/cm/showPictureCode.do?flag=zrrdl_yzm&t=0.8399987216477371" onclick="document.getElementById('zrrdl_pic_code').src='/web/cm/showPictureCode.do?flag=zrrdl_yzm&t=' + Math.random();">
                    </p>
                    <p style="position: relative; overflow: hidden">
							<span class="widthHalfAll" style="display: block">
								<input type="text" class="widthHalf clearInput" value="请输入短信验证码" data-value="请输入短信验证码" />
								<input type="text" name="WEP_SEND_YZM" class="widthHalfs clearInput" />
							</span>
                        <input type="button" name="WEP_SEND_MSG" class="wep_send_msg widthHalf" onclick="index_gds.onGetGryhDxptYzm()"
                               value="发送验证码">

                    </p>
                    <p style="text-align: left;">
                        <input type="button" id="id_zrr_login" class="wep_login_btn" onclick="index_gds.dlTip(6)" value="登  录" style="margin-top: 8px; margin-bottom: 10px" />
                        <span class="tradeOrder wdl_tips">交易序号：<span name="JYXH">**</span></span>
                    </p>
                    <p class="wdl_tips" style="white-space: normal;line-height: 15px">
                        <a>温馨提醒：</a>
                        <a style="line-height: 22px;display: block;text-indent: 26px;">自然人登录主要用于自然人注册并登录后，办理自然人相关涉税业务。</a>
                    </p>
                </form>
            </div>
        </div>
        <div class="wep_xzlj clearfix">
            <!--<div class="wep_xzlj_left f_left wxl_scbsbl" style="display: block">
                <a onclick="index_gds.xbnsrtcOnclick()" href="javascript:void(0)" class="">新办纳税人套餐</a>
            </div>-->
            <div class="wep_xzlj_left f_left wxl_wyzc">
                <a href="register.html" style="float: left">我要注册</a>
                <a href="https://its.guangxi.chinatax.gov.cn:8011"  style="padding-left:15px;float: left;" target="_blank">个人所得税</a>
            </div>
            <div class="f_left" >
                <a  target="_blank" style="color:#0090ff;font-size:12px;padding-left:15px;text-decoration: underline" href="login_help.html">登录帮助</a>
            </div>
            <a class="dxLogin" target="" href="javascript:window.location='forget_qy_pwd.html'">忘记密码？</a>
            <a class="caLogin" target="" href="javascript:window.location='forget_gr_pwd.html'">忘记密码？</a>
        </div>
    </div>
</div>

<div class="wep_loginlogin_xbnsr" style="display:none;">
    <div class="wep_loginform wep_button">
        <div class="wep_tab">
            <ul class="wep_ul">
                <span style="font-size: 14px;  text-align: center; line-height: 55px; padding-left: 200px;">新办纳税人套餐</span>
                <p class="text_alc wdl_text_alc wdl_text_alc1">
						<span class="layui-layer-setwin">
							<a class="layui-layer-ico layui-layer-close layui-layer-close1" style="" href="javascript:;"></a>
							<span class="login_close_bt"><i class="icon iconfont icon-guanbi1 "></i></span>
						</span>
                </p>

            </ul>
            <div class="wep_form">
                <form id="wep_form_xbnsr wep_loginlogin_form" name="wep_form_xbnsr" action="" style="display: block;">
                    <div id="wdl_xbnsr" class="wdl_dxdl1" style="display: block;">
                        <p class="usernameAll">
                            <input type="text" class="username clearInput letinput" data-value="请输入统一社会信用代码（或纳税人识别号）" value="请输入统一社会信用代码（或纳税人识别号）" />
                            <input type="text" name="TYSHXYDM" id="TYSHXYDM"  class="username clearInput messinput" style="display: none" />
                        </p>
                        <p class="usernameAll">
                            <input type="text" class="username clearInput letinput" data-value="请输入法人身份证号" value="请输入法人身份证号" />
                            <input type="text" name="FDDBRSFZJHM" id="FDDBRSFZJHM"  class="username clearInput messinput" style="display: none" />
                        </p>

                        <br>
                        <p style="text-align: left;">
                            <input type="button" id="id_xbnsr_login" class="wep_xbnsr_btn" style=" background-color: #0f90ef;" onclick="scbl_login.onLogin();" value="下一步" style="margin-top: 8px; margin-bottom: 10px" />
                        </p>
                    </div>
                </form>



            </div>
        </div>

    </div>
</div>
<!--新办纳税人套餐-->
<div class="nsrtc_box clearfix" style="display: none;">
    <div class="f_left" style="padding:52px 24px 0 52px;">
        <img src="imgs/yrbj_img11.png" alt="" />
    </div>
    <div class="f_left">
        <p style="padding:27px 0 18px 0;font-size: 24px;">尊敬的纳税人您好：</p>
        <p style="padding-bottom:46px;font-size: 14px;">您正在办理新办纳税人套餐的实名认证业务，请您微信扫描右侧二维码，进行法定代表人实名认证。</p>
        <div class="clearfix">
            <div class="f_left">
                <ul class="layui-form">
                    <li>
                        <label class="layui-form-label">身份证号：</label>
                        <input type="text" name="" placeholder="" id="sfzh" value="" autocomplete="off" class="layui-input" style="border: 0;" readonly>
                        <input type="hidden" id="rzfs" value="3">
                    </li>
                    <li>
                        <label class="layui-form-label">姓名：</label>
                        <input type="text" name="" placeholder="" id="xm" value="" autocomplete="off" class="layui-input" style="border: 0;" readonly>
                    </li>
                    <li>
                        <label class="layui-form-label">手机号码：</label>
                        <input type="text" name="" placeholder="" id="sjhm" value="" autocomplete="off" class="layui-input" style="border: 0;" onblur="curSeg.update_ewm('1');">
                    </li>
                </ul>
                <p style="text-align: right;margin: 25px 52px 0 90px;">
                    <span class="yrbj_btn " style="display: inline-block;width:109px;border: 1px solid #1e9fff;" onclick="curSeg.checkRzzt()">我已完成认证</span>
                    <span class="yrbj_btn " id="yrbj_blxz" style="display: inline-block;width:109px;margin-left: 10px;background-color: #fff;color: #1e9fff;border: 1px solid #1e9fff;" >业务办理需知</span>
                </p>
            </div>
            <div class="f_left nsrtc_ewm" >
                <div id="qrcode"></div>
                <p>微信扫一扫</p>
            </div>
        </div>
    </div>
</div>
<!--办理须知-->
<div class="blxz_box" style="display: none;">
    <ul>
        <li>1.新办纳税人套餐业务仅限于新办单位纳税人申请办理（新办单位纳税人是指已在工商部门办理过一照一码营业执照，尚未在税务部门办理税费种登记、存款账户账号报告、发票票种核定、增值税一般纳税人登记的新设立企业、农民专业合作社）；个体纳税人不适用于本套餐。</li>
        <li>2.新办纳税人套餐包含财务会计制度及核算软件备案、存款账户账号报告、增值税一般纳税人登记、购票人维护、发票票种核定、增值税专用发票最高开票限额审批、实名办税、实名制信息采集、发票领用等。</li>
        <li>3.纳税人可根据自身经营需要，对申请的资格类型（一般纳税人、小规模纳税人）进行勾选，选择是否成为一般纳税人，一般纳税人的生效之日由纳税人自行选择，请根据实际经营需要谨慎办理。</li>
        <li>4.纳税人勾选申请成为一般纳税人，适用一般纳税人计税方法进行计税，可自主开具增值税专用发票，在收到增值税专用发票后可按规定抵扣税款，一般纳税人按月进行增值税申报。</li>
        <li>5.纳税人勾选申请成为小规模纳税人，适用简易征收方式进行计税，不能自行开具增值税专用发票（文件规定的住宿业、鉴证咨询业、建筑业、工业、信息传输、软件和信息技术服务业除外），收到增值税专用发票不可抵扣税款，小规模纳税人按季进行增值税申报。</li>
        <li>6.纳税人可根据自身经营需要，对申请的购票类型（不购票、普通发票、增值税发票）进行勾选，申请领购发票的纳税人对发票领购数量、单份发票最高开票限额请按实际经营情况申请；后续若需要增加发票份数或限额，请在完成实名制信息采集后至办税服务大厅办理，或使用广西壮族自治区广西壮族自治区电子税务局相应模块进行业务申请办理。</li>
    </ul>
</div>
<!-- 2018-11-12新增环境监测 -->
<div class="m_main  clearfix" id="m_check_result">
    <div class="tip" style="display: none">
        <p style="padding:7px 10px"> 尊敬的纳税人：您好！11月20日起我局网上税务局已升级改版为电子税务局，为了您更好地使用电子税务局，需要对您的使用环境进行检测，初步检测的结果如下：</p>
    </div>
    <div style="padding:0px 20px" class="clearfix">
        <div class="check_result clearfix">
            <div class="check_result_hg">
                <div class="f_left">
                    <img src="imgs/check_ok.jpg" alt="" >
                </div>
                <div class="f_left " style="padding-top: 0px;margin-bottom: 50px">
                    <p class="result_box">您的检测结果为：<span style="color: #29d179">合格</span></p>
                    <p class="wxl_f_14">您可以关闭本窗口，正常登录、使用电子税务局</p>
                </div>
            </div>
            <div class="check_result_bhg" style="display: none">
                <div class="f_left">
                    <img src="imgs/check_sb.jpg" alt="" >
                </div>
                <div class="f_left" style="width: 74%" >
                    <p class="result_box" >您的检测结果为：<span style="color: #eb6809">需要修复</span></p>
                    <span class="wxl_f_14">您可以下载 “<a href="http://etax.guangxi.chinatax.gov.cn:19920/download/setupfix.zip" target="_blank" style="color:#0994dc;text-decoration:underline">环境检测修复工具</a>”，安装并运行后，点击“检测并修复”按钮，一键修复使用环境后，再重新登录电子税务局。</span>
                    <!--<span>注：环境检测修复工具安装过程中，360等杀毒软件会误报，允许操作即可。</span>-->
                </div>
            </div>

        </div>
        <div class="m_check_right f_left" style="width:55%;margin-top: 10px">
            <p class="check_title">本地环境检测结果</p>
            <ul>
                <li class="lineStatus"> <a href="#"><i class="icon iconfont icon-chenggong c_pass"></i><span class="f16">网络链接情况：联网正常</span>
                    <span class="c_pass"  id="netspeed">通过</span> </a> </li>
                <li class="sysStatus"> <a href="#"><i class="icon iconfont icon-chenggong c_pass"></i><span class="f16"></span>
                    <span class="c_pass">通过</span> </a> </li>
                <li class="exploreStatus"> <a href="#"><i class="icon iconfont icon-chenggong c_pass"></i><span class="f16"></span>
                    <span class="c_pass">通过</span>
                </a> </li>
                <li class="cellStatus"> <a href="#"><i class="icon iconfont icon-zuowu_tanhao c_nopass"></i><span class="f16">报表控件安装情况：已安装</span>
                    <span class="c_nopass">未通过</span> </a> </li>
                <!--<li class="trustStatus"> <a href="#"><i class="icon iconfont icon-zuowu_tanhao c_nopass"></i><span class="f16">是否添加信任站点：否</span>
                        <span class="c_nopass">未通过</span> </a> </li>-->
                <li class="fblStatus"> <a href="#"><i class="icon iconfont icon-zuowu_tanhao c_nopass"></i><span class="f16">分辨率检测：未通过</span>
                    <span class="c_nopass">未通过</span> </a> </li>
            </ul>
        </div>
        <div class="help">
            <p class="check_title">如果您使用过程中遇到问题，您可以</p>
            <div class="check_content" style="line-height: 50px;padding:0px 10px 15px">
                <p><i></i><span>点击右侧智能客服自己查找答案</span></p>
                <p><i></i><span>下载<a href="/web/dzswj/help/index.html" target="_blank" style="color:#0994dc">操作手册</a>阅读</span></p>
                <p><i></i><span>拨打热线电话寻求人工帮助</span></p>
            </div>
            <div class="p_tel">
                <img src="imgs/p_tel.jpg" alt="">
            </div>
        </div>
    </div>

</div>

</div>

<!-- 提前缓存hover图片 -->
<div style="display:none;">
    <img src="imgs/mh_guide_img1_h.png?version=1.14" alt="">
    <img src="imgs/mh_guide_img2_h.png?version=1.14" alt="">
    <img src="imgs/mh_guide_img3_h.png?version=1.14" alt="">
    <img src="imgs/mh_guide_img4_h.png?version=1.14" alt="">
    <img src="imgs/mh_guide_img5_h.png?version=1.14" alt="">

    <img src="imgs/mh_wddb_h.png" alt="">
    <img src="imgs/mh_wyyy_h.png" alt="">
    <img src="imgs/mh_gxfw_h.png" alt="">
    <img src="imgs/mh_tzgg_h.png" alt="">
</div>

<!--个人所得税二维码-->
<!--<div style="position: absolute;right: 10px;top: 150px;z-index: 644;">-->
<!--<img id="id_grsds_img" src="imgs/grsds.jpg" height="100" width="100">-->
<!--</div>-->

<!--上线通知-->
<div id="ggtc" style="padding: 10px 20px; line-height: 24px; background-color: #fff; color: #000; font-size:14px;display: none;">
    <!--<p >尊敬的纳税人：</p>
    <p style="text-indent: 32px;"> 11月20日起我局网上税务局已升级改版为电子税务局，全区纳税人可通过广西壮族自治区税务局官方网站首页进入，或通过网址http://etax.guangxi.chinatax.gov.cn:9711/web/登录。登录方式如下：</p>
    <p>1、短信登录：用户名输入统一社会信用代码或纳税人识别号，密码使用原网上税务局密码；选择法人、财务负责人、办税人、购票员等身份，提取在税务机关采集的手机号码，获取并输入短信验证码后登录。新办纳税人首次登录默认密码为：“Aa”+“社会信用代码后8位”。</p>
    <p>2、数字证书登录：插入税控盘或金税盘直接登录，密码是税务数字证书密码。首次数字证书登录前需要先下载安装数字证书服务及设备驱动，点击本系统首页右上角"下载"按钮获取安装包。</p>
    <p>3、报验户登录：请输入统一社会信用代码（或纳税人识别号）、年号、文号和密码后登录，默认密码：“Aa”+“社会信用代码后8位”。</p>
    <p>4、自然人登录：主要用于办理自然人相关涉税业务。</p>
    <p style="padding-top:10px">电子税务局操作指南可在“公众服务/操作规程”中浏览，使用遇到问题请拨打以下服务热线：</p>
    <p>技术支持服务热线：400-900-2366</p>
    <p>业务咨询服务热线：12366</p>
    <p align="right" style="padding:5px 0px 10px 0px;">国家税务总局广西壮族自治区税务局</p>
    <p align="right" style="padding-right: 0px;">2018年11月21日</p>-->
</div>
<!--下载弹框页面-->
<div class="wxl_downLoad" style="display: none;">
    <table>
        <thead>
        <tr>
            <th>组件名称</th>
            <th>微云链接</th>
            <th>本地链接</th>
            <th>描述</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>环境检测修复工具</td>
            <td><a href="https://share.weiyun.com/54KpS51" target="_blank">下载</a></td>
            <td><a href="javascript:void(0);"  target="_blank" onclick="dowonload_bd(1,this);">下载</a></td>
            <td>可自动安装华表cell组件、打印控件、iweboffice2009组件，<br/>可一键修复使用环境问题，使用时需关闭浏览器</td>
        </tr>
        <tr>
            <td>华表cell</td>
            <td><a href="https://share.weiyun.com/54KpS51" target="_blank">下载</a></td>
            <td><a href="javascript:void(0);"  target="_blank" onclick="dowonload_bd(2,this);">下载</a></td>
            <td>表单编辑、查看组件</td>
        </tr>
        <tr>
            <td>打印控件</td>
            <td><a href="https://share.weiyun.com/54KpS51" target="_blank">下载</a></td>
            <td><a href="javascript:void(0);"  target="_blank" onclick="dowonload_bd(3,this);">下载</a></td>
            <td>依申请业务打印用控件</td>
        </tr>
        <tr>
            <td>数字证书服务及设备驱动</td>
            <td><a href="https://share.weiyun.com/54KpS51" target="_blank">下载</a></td>
            <td><a href="javascript:void(0);"  target="_blank" onclick="dowonload_bd(4,this);">下载</a></td>
            <td>首次数字证书登录前需要安装的数字证书服务及设备驱动</td>
        </tr>
        <tr>
            <td>[iWebOffice2009]组件</td>
            <td><a href="https://share.weiyun.com/54KpS51" target="_blank">下载</a></td>
            <td><a href="javascript:void(0);"  target="_blank" onclick="dowonload_bd(5,this);">下载</a></td>
            <td>[iWebOffice2009]组件</td>
        </tr>
        <tr>
            <td>flash控件</td>
            <td><a href="https://share.weiyun.com/54KpS51" target="_blank">下载</a></td>
            <td><a href="javascript:void(0);"  target="_blank" onclick="dowonload_bd(6,this);">下载</a></td>
            <td>flash控件，用于客户端缓存</td>
        </tr>
        <!--<tr>-->
        <!--<td>安全证书安装</td>-->
        <!--<td><a href="https://share.weiyun.com/54KpS51" target="_blank">下载</a></td>-->
        <!--<td><a href="javascript:void(0);"  target="_blank" onclick="dowonload_bd(7,this);">下载</a></td>-->
        <!--<td>安全证书，确保纳税人信息的数据安全</td>-->
        <!--</tr>-->
        <tr>
            <td>广西税务APP</td>
            <td colspan="2"><a onclick="dowonload_bd(8,this);">点击扫码</a></td>
            <td>使用手机扫码下载（支持安卓）</td>
        </tr>
        </tbody>
    </table>
</div>
<!--飘窗效果内容-->
<!--<div style=" width: 300px; height: 150px;position: relative;background: url(imgs/ad.gif)" id="float">
    <span style="position: absolute;right: 5px;top:5px;cursor: pointer;" class="float_close">
        <i class="iconfont icon-guanbi1 wxl_clr_f"></i>
    </span>
</div>-->
<!-- 测试cell是否安装 -->
<OBJECT id="Dcellweb1" classid="clsid:3F166327-8030-4881-8BD2-EA25350E574A" style="width:200px;height:200px;display: none;"
        VIEWASTEXT>
    <PARAM NAME="_Version" VALUE="65536">
    <PARAM NAME="_ExtentX" VALUE="21696">
    <PARAM NAME="_ExtentY" VALUE="12568">
    <PARAM NAME="_StockProps" VALUE="0">
    <param name="wmode" value="transparent">
    <param name="wmode" value="opaque">
</OBJECT>

<script type="text/javascript">

    var _xmlhttp;
    var mflag;
    var rerand;
    var mm;

    var base64cert;
    var base64P7;


    function onSkpLogin1() {
        mm = $("#wep_form_iadl").find("input[name='USER_MM']").val().trim();
        if (mm == null || mm == "") {
            alert('请录入密码!');
            $("#wep_form_iadl").find("input[name='USER_MM']").focus();
            return false;
        }

        index_gds.lockLogin();

        //后台获取原文数据（随机数）
        baseTools.xhrAjax({
            url: '/getRandoms.do',
            data: "",
            async: false,
            callback: [function (datas) {
                if (datas.code == '1') {
                    rerand = datas.rerand;

                } else {
                    return;
                }
            }]
        });

        //console.log(document.getElementById("getyqsj"));

        //正式需修改以下代码tbb1
        document.getElementById("getyqsj").contentWindow.GetCertificate1();
        document.getElementById("getyqsj").contentWindow.P7SignData1(rerand, mm);
        base64cert = $("#wep_form_iadl").find("input[name='ifcert']").val().trim();
        base64P7 = $("#wep_form_iadl").find("input[name='ifp7']").val().trim();


        //onLogin_IA();

        doSkpyq();

    }


    function doSkpyq() {
        //税控盘验签
        if (rerand != null && base64cert != null && base64P7 != null) {
            // var mm = $("#wep_form_iadl").find("input[name='USER_MM']").val().trim();
            baseTools.xhrAjax({
                url: '/skpdlyq.do',
                async: false,
                params: { "mdata": rerand, "base64cert": base64cert, "base64P7": base64P7 },
                // params: {"USERNAME" : mm},
                callback: [index_gds.pageFlowControl_IA]
            });
            //$("#wep_form_iadl").find("input[name='USER_ZH']").val("45242119700115007X");
            //$("#wep_form_iadl").find("input[name='USER_ZH']").val("9145050055227953X2");
            //onLogin_IA();
        } else {
            alert("验签参数丢失");
        }
    }

    var flag = 0;// 本地下载开关
    function dowonload_bd(num, that) {
        if (flag == 1)
            return;
        switch (num) {
            case 1:
                that.href = "http://etax.guangxi.chinatax.gov.cn:19920/download/setupfix.zip";
                break;
            case 2:
                that.href = "http://etax.guangxi.chinatax.gov.cn:19920/download/cellsoft.zip";
                break;
            case 3:
                that.href = "http://etax.guangxi.chinatax.gov.cn:19920/download/install_lodop32.zip";
                break;
            case 4:
                that.href = "http://etax.guangxi.chinatax.gov.cn:19920/download/skpyq_soft.zip";
                break;
            case 5:
                that.href = "http://etax.guangxi.chinatax.gov.cn:19920/download/iWebOffice2009.zip";
                break;
            case 6:
                that.href = "http://etax.guangxi.chinatax.gov.cn:19920/download/flashplayer.zip";
                break;
            case 7:
                that.href = "http://etax.guangxi.chinatax.gov.cn:19920/download/aqzs.zip";
                break;
            case 8:
                layer.open({
                    type: 1,
                    title: false,
                    closeBtn: 0,
                    area: ['300px', '300px'],
                    skin: 'layui-layer-rim',
                    shade: 0.618,
                    shadeClose: true,
                    content: '<div style="text-align: center; position: relative; padding-top: 20px;"><img src="imgs/gxswapp.png" width="250px" height="250px"></div>'
                });
                break;
        }
    }
</script>

<div id="kf-qwert" style="display: none;"></div>
<script type="text/javascript">
    var $kfQwert = $('#kf-qwert');
    $kfQwert.append($('<iframe style="display: none;" src="'
        + window.zrdssbUrl + '/nothing?sso_logout_token=' + Math.random() + '"></iframe>'));
</script>

<!--20190117通知提醒-->
<div class="wdl_tztx_tk" id="wdl_tx" style="padding: 10px;display: none;" >
    <!--<div class="tsxz_con">
        <p>我是内容</p>
        <br>
    </div>-->
</div>

<!--安全证书安装提示-->
<div id="aqzs_tx" style="padding: 10px 20px; line-height: 24px; background-color: #fff; color: #000; font-size:14px;display: none;" >
    <!--<p>尊敬的纳税人：</p>-->
    <!--<p style="text-indent: 2em;">为确保纳税人信息数据安全，广西电子税务局已经调整为使用HTTPS安全协议访问。使用HTTPS安全协议访问需安装“税务电子证书管理中心”颁发的安全证书，如尚未安装，可以按照以下方式进行安装。</p>-->
    <!--<p style="text-indent: 2em;">方式一：您可以点击<a onclick="index_gds.zzaz()" style="color:#0994dc">“安全证书安装”</a>进行安装。</p>-->
    <!--<p style="text-indent: 2em;">方式二：如果通过方式一安装失败，您可以下载<a href="http://etax.guangxi.chinatax.gov.cn:19920/download/aqzs.zip" target="_blank" style="color:#0994dc">“电子税务局安全证书安装包”</a>按照指引进行手动安装。</p>-->

    <p>尊敬的纳税人：</p>
    <p style="text-indent: 2em;">为确保纳税人信息数据安全，广西电子税务局已经调整为使用HTTPS安全协议访问。使用HTTPS安全协议访问需安装“税务电子证书管理中心”颁发的安全证书，如尚未安装，可以下载<a href="http://etax.guangxi.chinatax.gov.cn:19920/download/aqzs.zip" target="_blank" style="color:#0994dc">“电子税务局安全证书安装包”</a>按照指引进行手动安装。</p>
</div>
<!--<div id="httpstz_tx" style="padding: 10px 20px; line-height: 24px; background-color: #fff; color: #000; font-size:14px;display: none;" >
    <p>尊敬的纳税人：</p>
    <p>为保障您的办税信息安全，电子税务局近期进行了优化升级，具体如下：</p>
    <p>一、启用https安全协议，网址因此发生变更，即使用本网址不能打开电子税务局。</p>
    <p>二、原网址及本页面将保留到2019年7月31日，8月1日起关闭。</p>
    <p>三、您可以通过以下三种方式进入新网址</p>
    <p style="text-indent: 2em;"><span>1、可以在本页面点击“确定”，跳转进入新网址，同时收藏保留新网址方便下次使用。</span></p>
    <P style="text-indent: 2em;"><span>2、点击并收藏<a href="https://etax.guangxi.chinatax.gov.cn:9723/web/dzswj/ythclient/mh.html" style="color: #0a77d0">https://etax.guangxi.chinatax.gov.cn:9723/web/dzswj/ythclient/mh.html</a>，进入新网址。</span></P>
    <p style="text-indent: 2em;">3、进入广西税务局官方网站（<a href="http://guangxi.chinatax.gov.cn" style="color: #0a77d0">http://guangxi.chinatax.gov.cn</a>），点击“电子税务局”，进入新网址。</p>
    <p>感谢您的理解和支持！</p>
    <p style="overflow: hidden"><span style="width: 250px; display: inline-block; text-align: center; float: right;">广西壮族自治区电子税务局</br>2019年7月2日</span></p>
</div>-->
<div style=" text-align: center; padding-top: 10px; padding-bottom: 5px">
    <object  classid="clsid:884e2049-217d-11da-b2a4-000e7bbb2b09" codebase="xenroll.dll" id="objCertEnrollClassFactory"></object>
</div>
<div id="https" style="display: none">
    <div class="https">
        <p><font>尊敬的纳税人：</font><p>
        <p> 为保障您的办税信息安全，电子税务局近期进行了优化升级，具体如下：</br>
            一、启用https安全协议，网址因此发生变更，即使用本网址不能打开电子税务局。</br>
            二、您可以通过以下三种方式，进入电子税务局新网址：</br>
            &nbsp;&nbsp;&nbsp;&nbsp;1、可以在本页面点击“确定”，跳转进入新网址，同时收藏保留新网址方便下次使用。</br>
            &nbsp;&nbsp;&nbsp;&nbsp;2、点击并收藏 <a href="https://etax.guangxi.chinatax.gov.cn:9723/web/dzswj/ythclient/mh.html"> https://etax.guangxi.chinatax.gov.cn:9723/web/dzswj/ythclient/mh.html</a> ，进入新网址。</br>
            &nbsp;&nbsp;&nbsp;&nbsp;3、进入广西税务局官方网站（ <a href="http://guangxi.chinatax.gov.cn">http://guangxi.chinatax.gov.cn </a>），点击“电子税务局”，进入新网址。</br>
            感谢您的理解和支持！</br>
        <p style="overflow: hidden;"><span> 广西壮族自治区电子税务局</br>
            2019年7月2日</span></p>
        </p>
    </div>
</div>
<script>
    var dom = document.URL;
    //判断是否https,不是的话弹出引导
    if (dom.indexOf('https:') != 0 && window.inlineOutlinepro == 'sc') {
        //index_gds.gohttps();
        $(".wrap").show();
        $(function () {
            $("#wep_form_sfzdl").find("input[name='USER_ZH3']").val("cx");
            $("#wep_form_sfzdl").find("input[name='USER_MM3']").val("123");
            $("#wep_form_sfzdl").find("select[name='SFLX_ZJLX']").val("1");
            $("#wep_form_sfzdl").find("input[name='USER_SFZH']").val("3212");
            index_gds_new.onDxLogin_new();
            index_gds_new.onDxLogin_new();
        })
    } else {
        $(".wrap").show();
        // $("#id_grsds_img_div").show();
    }
</script>
</body>
</html>