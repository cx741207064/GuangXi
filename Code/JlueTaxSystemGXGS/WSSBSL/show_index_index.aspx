<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="show_index_index.aspx.cs" Inherits="JlueTaxSystemGXGS.WSSBSL.show_index_index" %>

<!DOCTYPE html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>广西国税网上申报</title>
    <!-- 禁止缓存 开始 -->
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="no-cache" />
    <meta http-equiv="Expires" content="-1" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="X-UA-Compatible" content="IE=8,9,10" />
    <!-- 禁止缓存 结束 -->
    <link rel="stylesheet" type="text/css" href="/WSSBSL/easyUI/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="/WSSBSL/easyUI/themes/icon.css">
    <script type="text/javascript" src="/WSSBSL/gt3_public/mootools-1.2.1-all.js"></script>
    <script type="text/javascript" src="/WSSBSL/easyUI/jquery-1.8.0.min.js"></script>
    <script type="text/javascript" src="/WSSBSL/easyUI/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="/WSSBSL/easyUI/locale/easyui-lang-zh_CN.js"></script>
    <script type="text/javascript" src="/WSSBSL/js/easyUI/pop.js"></script>
    <script type="text/javascript" src="/WSSBSL/js/easyUI/tabs.js"></script>
    <script type="text/javascript" src="/WSSBSL/js/easyUI/dialog.js"></script>
    <script type="text/javascript" src="/WSSBSL/js/easyUI/window.js"></script>
    <script charset="utf-8" type="text/javascript" src="/WSSBSL/js/common/highcharts.js"></script>
    <script type="text/javascript" src="/WSSBSL/js/common/common.js"></script>
    <script type="text/javascript" src="/WSSBSL/lodop/LodopFuncs.js?ts=new Date().getTime()"></script>
    <script type="text/javascript" src="/WSSBSL/lodop/myPrint.js?ts=new Date().getTime()"></script>
    <script type="text/javascript" src="/WSSBSL/ueditor/ueditor.parse.min.js"></script>
    <script type="text/javascript" src="/WSSBSL/js/page/index/index.js?ts=new Date().getTime()"></script>
    <script type="text/javascript" src="/WSSBSL/gt3_public/cacheindex.js"></script>
    <script type="text/javascript" src="/WSSBSL/gt3_public/kxtdy.js"></script>
    <script type="text/javascript" src="/WSSBSL/gt3_public/sbbzz.js"></script>
    <script type="text/javascript" src="http://wpa.b.qq.com/cgi/wpa.php"></script>
    <style type="text/css">
        <!--
        form {
            margin: 0;
        }

        body {
            margin: 0 auto;
        }

        a:link {
            text-decoration: none;
            color: #000000;
        }

        a:visited {
            text-decoration: none;
            color: #000000;
        }

        a:active {
            text-decoration: none;
            color: #000000;
        }

        a:hover {
            text-decoration: none;
            color: #D65803;
        }

        -->
    </style>

</head>
<body id="main" class="easyui-layout">

    <div data-options="region:'north',border:false" style="height: 60px; background: #C1C1C1; padding: 0px; text-align: right; overflow: hidden;">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
            <tr>
                <td colspan="2" style="background-image: url(/WSSBSL/images/managebj.jpg); height: 49px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td width="280" align="center" style="background: url(/WSSBSL/images/jxzy.png) no-repeat center">
                                <img src="/WSSBSL/images/logo.png" width="40" height="40" style="margin-bottom: -10px;" />
                                <font style="font-family: 楷体_GB2312; font-size: 24px;" color="0e55a7"><b><span id="logoWord">广西国税网上申报</span></b></font>
                            </td>
                            <td style="font-size: 12px; text-align: right;">
                                <font color="0e55a7">
                                    <label id="nsrmc"></label>
                                </font>您好，欢迎使用网上申报！&nbsp;&nbsp;<br />
                                <div align="right" valign="middle">
                                    <a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-home'" id="indexBut" onclick="showMain()">首页</a>
                                    <a href="http://wsbs.gxds.gov.cn:7005/sword?ctrl=LoginCtrlTmp_logout" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-table'" id="dssb" target="_blank" style="display:none;">地税申报</a>
                                    <a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-service'" id="BizQQWPA">在线咨询</a>
                                    知识库搜索：<input type="text" id="searchText" value="" style="width: 150px" onkeyup="searchKeyEvnet(event)" />
                                    <a href="#" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-search'" onclick="showSearch()">查 询 </a>
                                    <a href="#" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-exit'" onclick="logout()">退  出 </a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td colspan="2" height="11" style="background-image: url(/WSSBSL/images/topbj.gif);"></td>
            </tr>
        </table>
    </div>

    <div id="leftDiv" data-options="region:'west',split:true" title="<label id='leftTitle'><font color='#0033FF'></font></label>" style="width: 206px; padding1: 1px; overflow: hidden;">
        <div id="leftAccordion" class="easyui-accordion" data-options="fit:true,border:false">
            <div title="纳税申报" data-options="selected:true,iconCls:'icon-table'" style="padding: 10px; overflow: auto;">
                <table width="180" cellpadding="0" cellspacing="0">
                    <tr id="bbtb_zzsYbnsr" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('tb_zzsybnsr');">&nbsp;<span id="tb_zzsybnsr">增值税（一般纳税人）</span></a></td>
                    </tr>
                    <tr id="bbtb_zzsYbnsr" style="display: none;">
                        <td height="7"></td>
                    </tr>
                    <tr id="bbtb_zzsXgmnsr" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('tb_zzsxgmnsr');">&nbsp;<span id="tb_zzsxgmnsr">增值税（小规模纳税人）</span></a></td>
                    </tr>
                    <tr id="bbtb_zzsXgmnsr" style="display: none;">
                        <td height="7"></td>
                    </tr>
                    <tr id="bbtb_jdsds2012_a" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('tb_sdsjd_a');">&nbsp;<span id="tb_sdsjd_a">企业所得税月（季）度A类</span></a></td>
                    </tr>
                    <tr id="bbtb_jdsds2012_a" style="display: none;">
                        <td height="7"></td>
                    </tr>
                    <tr id="bbtb_jdsds2012_b" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('tb_sdsjd_b');">&nbsp;<span id="tb_sdsjd_b">企业所得税月（季）度B类</span></a></td>
                    </tr>
                    <tr id="bbtb_jdsds2012_b" style="display: none;">
                        <td height="7"></td>
                    </tr>
                    <tr id="bbtb_ndsds_a" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('tb_sdsnd_a');">&nbsp;<span id="tb_sdsnd_a">企业所得税年度A类</span></a></td>
                    </tr>
                    <tr id="bbtb_ndsds_a" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="bbtb_whsyjsf" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('tb_whsyjsf');">&nbsp;<span id="tb_whsyjsf">文化事业建设费</span></a></td>
                    </tr>
                    <tr id="bbtb_whsyjsf" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="bbtb_sljsjj" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('tb_sljsjj');">&nbsp;<span id="tb_sljsjj">水利建设基金</span></a></td>
                    </tr>
                    <tr id="bbtb_sljsjj" style="display: none;">
                        <td height="7"></td>
                    </tr>
                    <tr id="bbtb_sljsjj_bcsb" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('bbtb_sljsjj_bcsb');">&nbsp;<span id="tb_sljsjj">水利建设基金(补充申报)</span></a></td>
                    </tr>
                    <tr id="bbtb_sljsjj_bcsb" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="bbtb_lxsds_05" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('tb_lxsds_05');">&nbsp;<span id="tb_lxsds_05">利息所得税_5%</span></a></td>
                    </tr>
                    <tr id="bbtb_lxsds_05" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="bbtb_lxsds_20" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('tb_lxsds_20');">&nbsp;<span id="tb_lxsds_20">利息所得税_20%</span></a></td>
                    </tr>
                    <tr id="bbtb_lxsds_20" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="bbtb_ndsds_b" style="display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('tb_ndsds_b');">&nbsp;<span id="tb_ndsds_b">企业所得税年度B类</span></a></td>
                    </tr>
                    <tr id="bbtb_ndsds_b" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="bbtb_ndsds_fzjg" style="display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('tb_ndsds_fzjg');">&nbsp;<span id="tb_ndsds_fzjg">企业所得税年度分支机构</span></a></td>
                    </tr>
                    <tr id="bbtb_ndsds_fzjg" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="bbtb_qyndglyw2016" style="display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('tb_qyndglyw2016');">&nbsp;<span id="tb_qyndglyw2016">企业年度关联业务（2016版）</span></a></td>
                    </tr>
                    <tr id="bbtb_qyndglyw2016" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="dzswj_xfssb" style="font-size: 12px;display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showCheckDzswjIE('dzswj_href_xfs');">&nbsp;<span id="dzswj_href_xfs">消费税申报</span></a></td>
                    </tr>
                    <tr id="dzswj_xfssb" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="dzswj_sbcwgz" style="display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showCheckDzswjIE('dzswj_href_sbgz');">&nbsp;<span id="dzswj_href_sbgz">申报错误更正</span></a></td>
                    </tr>
                    <tr id="dzswj_sbcwgz" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="dzswj_kjqysdssb" style="display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showCheckDzswjIE('dzswj_href_kjqysdssb');">&nbsp;<span id="dzswj_href_kjqysdssb">扣缴企业所得税申报</span></a></td>
                    </tr>
                    <tr id="dzswj_kjqysdssb" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="dzswj_tydkdj" style="display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showCheckDzswjIE('dzswj_href_tydkdj');">&nbsp;<span id="dzswj_href_tydkdj">通用代扣代缴</span></a></td>
                    </tr>
                    <tr id="dzswj_tydkdj" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="dzswj_zzsyjsb" style="display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showCheckDzswjIE('dzswj_href_zzsyjsb');">&nbsp;<span id="dzswj_href_zzsyjsb">增值税预缴申报</span></a></td>
                    </tr>
                    <tr id="dzswj_zzsyjsb" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="sjcj_yffy_jjkc" style="font-size: 12px;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('scxz_yffy_jjkc');">&nbsp;<span id="scxz_yffy_jjkc">研发费加计扣除_上传下载区</span></a></td>
                    </tr>
                    <tr id="sjcj_yffy_jjkc">
                        <td height="7"></td>
                    </tr>
                </table>
            </div>

            <div title="财务报表报送" data-options="selected:true,iconCls:'icon-table'" style="padding: 10px; overflow: auto;">
                <table id="sjcj_table" width="180" cellpadding="0" cellspacing="0">
                    <tr id="sjcj_cwkjzdba" style="font-size: 12px;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('dj_cwkjzdba');">&nbsp;<span id="dj_cwkjzdba">财务制度备案</span></a></td>
                    </tr>
                    <tr id="sjcj_cwkjzdba">
                        <td height="7"></td>
                    </tr>
                    <tr id="dzswj_cwbb" style="font-size: 12px;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showCheckDzswjIE('dzswj_href_cwbb');">&nbsp;<span id="dzswj_href_cwbb">财务报表报送与信息采集</span></a></td>
                    </tr>
                    <tr id="dzswj_cwbb">
                        <td height="7"></td>
                    </tr>
                </table>
            </div>
            <div title="税款缴纳" data-options="iconCls:'icon-redo'" style="padding: 10px;">
                <table width="180" cellpadding="0" cellspacing="0">
                    <tr id="tr1_dqwjnsk" style="font-size: 12px;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('js_dqwjnsk');">&nbsp;<span id="js_dqwjnsk">当期未缴税款</span></a></td>
                    </tr>
                    <tr id="tr2_dqwjnsk">
                        <td height="7"></td>
                    </tr>
                    <tr id="tr1_wqskjnjl" style="font-size: 12px;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('js_wqskjnjl');">&nbsp;<span id="js_wqskjnjl">往期税款缴纳记录</span></a></td>
                    </tr>
                    <tr id="tr2_wqskjnjl">
                        <td height="7"></td>
                    </tr>
                    <tr id="tr1_sdjkjl" style="font-size: 12px;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('js_sdjkjl');">&nbsp;<span id="js_sdjkjl">我的手动缴款记录</span></a></td>
                    </tr>
                    <tr id="tr2_sdjkjl">
                        <td height="7"></td>
                    </tr>
                    <tr id="tr1_kksdcx" style="font-size: 12px;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('js_kksdcx');">&nbsp;<span id="js_kksdcx">扣款锁定记录查询</span></a></td>
                    </tr>
                    <tr id="tr2_kksdcx">
                        <td height="7"></td>
                    </tr>
                </table>
            </div>
            <div title="海关缴款书稽核" data-options="selected:true,iconCls:'icon-table'" style="padding: 10px; overflow: auto;">
                <table width="180" cellpadding="0" cellspacing="0">
                    <tr id="qt_jhhg" style="font-size: 12px;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('qt_jhhg');">&nbsp;<span id="qt_jhhg">稽核海关</span></a></td>
                    </tr>
                    <tr id="qt_jhhg">
                        <td height="7"></td>
                    </tr>
                    <tr id="qt_wtkkxy" style="font-size: 12px;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('qt_wtkkxy');">&nbsp;<span id="qt_wtkkxy">委托扣款协议书</span></a></td>
                    </tr>
                    <tr id="qt_wtkkxy">
                        <td height="7"></td>
                    </tr>
                    <!--
				  <tr id="qt_sbzfqk" style="font-size:12px;">
			         <td height="24" style="background-color:#E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('qt_sbzfqk');">&nbsp;<span id="qt_sbzfqk">申报作废情况查询</span></a></td>
			      </tr>
				  <tr id="qt_sbzfqk" ><td height="7"></td></tr>
				  -->
                </table>
            </div>
            <div title="申报数据查询" data-options="iconCls:'icon-search'" style="padding: 10px">
                <table width="180" cellpadding="0" cellspacing="0">
                    <tr id="bbcx_zzsYbnsr" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('cx_zzsybnsr');">&nbsp;<span id="cx_zzsybnsr">增值税（一般纳税人）</span></a></td>
                    </tr>
                    <tr id="bbcx_zzsYbnsr" style="display: none;">
                        <td height="7"></td>
                    </tr>
                    <tr id="bbcx_zzsXgmnsr" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('cx_zzsxgmnsr');">&nbsp;<span id="cx_zzsxgmnsr">增值税（小规模纳税人）</span></a></td>
                    </tr>
                    <tr id="bbcx_zzsXgmnsr" style="display: none;">
                        <td height="7"></td>
                    </tr>
                    <tr id="bbcx_jdsds_a" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('cx_jdsds_a');">&nbsp;<span id="cx_sdsjda">企业所得税月（季）度A类</span></a></td>
                    </tr>
                    <tr id="bbcx_jdsds_a" style="display: none;">
                        <td height="7"></td>
                    </tr>
                    <tr id="bbcx_jdsds_b" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('cx_jdsds_b');">&nbsp;<span id="cx_sdsjdb">企业所得税月（季）度B类</span></a></td>
                    </tr>
                    <tr id="bbcx_jdsds_b" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="bbcx_ndsds_a" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('cx_ndsds_a');">&nbsp;<span id="cx_sdsnda">企业所得税年度A类</span></a></td>
                    </tr>
                    <tr id="bbcx_ndsds_a" style="display: none;">
                        <td height="7"></td>
                    </tr>
                    <!--
					  <tr id="bbcx_ndsds_glyw" style="font-size:12px;display:none;">
				         <td height="24" style="background-color:#E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('cx_sdsndglyw');">&nbsp;<span id="cx_sdsndglyw">企业所得税年度关联业务</span></a></td>
				      </tr>
					  <tr id="bbcx_ndsds_glyw" style="display:none;"><td height="7"></td></tr>
					  -->
                    <tr id="bbcx_whsyjsf" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('cx_whsyjsf');">&nbsp;<span id="cx_whsyjsf">文化事业建设费</span></a></td>
                    </tr>
                    <tr id="bbcx_whsyjsf" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="bbcx_sljsjj" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('cx_sljsjj');">&nbsp;<span id="cx_sljsjj">水利建设基金</span></a></td>
                    </tr>
                    <tr id="bbcx_sljsjj" style="display: none;">
                        <td height="7"></td>
                    </tr>
                    <tr id="bbcx_lxsds_05" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('cx_lxsds_05');">&nbsp;<span id="cx_lxsds_05">利息所得税_5%</span></a></td>
                    </tr>
                    <tr id="bbcx_lxsds_05" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="bbcx_lxsds_20" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('cx_lxsds_20');">&nbsp;<span id="cx_lxsds_20">利息所得税_20%</span></a></td>
                    </tr>
                    <tr id="bbcx_lxsds_20" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="bbcx_ndsds_b" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('cx_ndsds_b');">&nbsp;<span id="cx_ndsds_b">企业所得税年度B类</span></a></td>
                    </tr>
                    <tr id="bbcx_ndsds_b" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="bbcx_ndsds_fzjg" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('cx_ndsds_fzjg');">&nbsp;<span id="cx_ndsds_fzjg">分支机构企业所得税年度报表</span></a></td>
                    </tr>
                    <tr id="bbcx_ndsds_fzjg" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="bbcx_qyndglyw2016" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('cx_qyndglyw2016');">&nbsp;<span id="cx_qyndglyw2016">企业年度关联业务（2016版）</span></a></td>
                    </tr>
                    <tr id="bbcx_qyndglyw2016" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="bbcx_dzswj_cwbb" style="font-size: 12px;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showCheckDzswjIE('cx_dzswj_cwbb');">&nbsp;<span id="cx_dzswj_cwbb">财务报表申报查询</span></a></td>
                    </tr>
                    <tr id="bbcx_dzswj_cwbb" style="">
                        <td height="7"></td>
                    </tr>

                    <tr id="bbcx_cwkjzdba" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('cx_cwkjzdba');">&nbsp;<span id="cx_cwkjzdba">财务会计制度备案</span></a></td>
                    </tr>
                    <tr id="bbcx_cwkjzdba" style="display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="dzswj_xfssbcx" style="font-size: 12px;display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showCheckDzswjIE('dzswj_href_xfs_cx');">&nbsp;<span id="dzswj_href_xfs_cx">消费税申报查询</span></a></td>
                    </tr>
                    <tr id="dzswj_xfssbcx" style="font-size: 12px;display: none;">
                        <td height="7"></td>
                    </tr>
                </table>
            </div>
            <div title="基础信息管理" data-options="iconCls:'icon-tip'" style="padding: 10px">
                <table width="180" cellpadding="0" cellspacing="0">
                    <tr id="tr2_jbxx" style="font-size: 12px;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('gl_nsrjbxxcx');">&nbsp;<span id="gl_nsrjbxxcx">纳税人基本信息查询</span></a></td>
                    </tr>
                    <tr id="tr2_jbxx">
                        <td height="7"></td>
                    </tr>

                    <tr id="tr2_xgmm" style="font-size: 12px;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showXgmmWindow();">&nbsp;<span id="xgmm">修改密码</span></a></td>
                    </tr>
                    <tr id="tr2_xgmm">
                        <td height="7"></td>
                    </tr>

                    <tr id="tr2_gxrz" style="font-size: 12px;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('xt_gxrz');">&nbsp;<span id="gxrz">系统更新日志</span></a></td>
                    </tr>
                    <tr id="tr2_gxrz">
                        <td height="7"></td>
                    </tr>

                    <tr id="cwbb_nsqx" style="font-size: 12px; display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showCwbbNsqxWindow();">&nbsp;<span id="xgmm">财务报表纳税期限管理</span></a></td>
                    </tr>
                    <tr id="cwbb_nsqx" style="font-size: 12px; display: none;">
                        <td height="7"></td>
                    </tr>

                    <tr id="tbDjSzList" style="font-size: 12px;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('gl_nsrdjszxxcx');">&nbsp;<span id="gl_nsrdjszxxcx">税（费）种认定信息查询</span></a></td>
                    </tr>
                    <tr id="tbDjSzList">
                        <td height="7"></td>
                    </tr>

                    <tr style="font-size: 12px;display: none;">
                        <td height="24" style="background-color: #E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('gl_sssxjdcx');">&nbsp;<span id="gl_sssxjdcx">涉税事项进度查询</span></a></td>
                    </tr>
                    <tr style="font-size: 12px;display: none;">
                        <td height="7"></td>
                    </tr>

                </table>
            </div>
            <!--
			<div title="系统帮助" data-options="iconCls:'icon-help'" style="padding:10px">  
				<table width="180" cellpadding="0" cellspacing="0">
					<tr id="tr1_cwrz" ><td height="7"></td></tr>
			       	<tr id="tr2_cwrz" style="font-size:12px;">
						<td height="24" style="background-color:#E0ECFF;">&nbsp;<img src="/WSSBSL/images/point.png"><a href="javascript:showTabPage('bz_wssbyhsc');">&nbsp;<span id="bz_wssbyhsc">财务报表解读及常见问题</span></a></td>
			      	</tr>
				</table>
            </div>
			-->
        </div>
    </div>
    <div data-options="region:'center'" style="overflow: hidden;">
        <div id="tabList" class="easyui-tabs" data-options="fit:true,border:false,tools:'#tab-tools'"></div>
    </div>
    <!-- -->
    <div id="tbbzEasy" data-options="region:'east',iconCls:'icon-help',split:true,collapsed:true" title="填表帮助" style="width: 180px;">
        <div id="tbbzDiv"></div>
    </div>

    <div id="tab-tools">
        <a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-reload'" onclick="reloadTab()">刷新当前标签</a>
    </div>
    <div>
        <form id="searchForm" name="searchForm" action="" method="post" target="_blank" style="display: none;">
            <input type="hidden" id="searchText1" name="zltitle" />
            <input type="hidden" id="searchFlag" name="zlflag" value="1,2,5,6" />
        </form>
    </div>
    <!-- 缓存 -->
    <div style="position: absolute; top: 0; left: -20" id="_persist_flash_wrap">
        <center>
            <object id="_persist_flash" name="_persist_flash" width="1" height="1" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">
                <param name="movie" value="swordweb/widgets/SwordClientCache/swordcache.swf"/>
                <param name="allowFullScreen" value="true"/>
                <param name="allowscriptaccess" value="always"/>
                <param name="quality" value="high" />
                <param name="flashvars" value="autostart=true" />
                <embed id="ex_persist_flash" src="swordweb/widgets/SwordClientCache/swordcache.swf" type="application/x-shockwave-flash" width="1" height="1" allowscriptaccess="always" quality="high" flashvars="autostart=true" />
            </object>
            <div style="display: none; font-size: 30px;" id="_persist_flash_text">为了系统使用更顺畅，请点击【允许】按钮。</div>
        </center>

    </div>
    <!-- 缓存 -->
    <object id="LODOP_OB" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width="0" height="0">
        <embed id="LODOP_EM" type="application/x-print-lodop" width="0" height="0" />
    </object>
</body>
</html>

