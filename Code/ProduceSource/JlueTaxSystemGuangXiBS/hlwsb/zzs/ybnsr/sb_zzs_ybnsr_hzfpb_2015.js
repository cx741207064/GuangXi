/**
 * Created by sb_xfs_cpy_fb4.html.
 * User: jh
 * Date: 13-12-7
 * Time: 上午11:09
 * To change this template use File | Settings | File Templates.
 */

//使用窗口组件加载时注释下面的代码
$(document).ready(function () {
    hzfpb.onLoad();
});

var hzfpb = (function () {
    //私有属性
    var curSeg; // 保存zcfz对象的
    var SBBXH = '';
    var SBBZL_DM = "";
    var SSSQ_Q = "";
    var SSSQ_Z = "";
    var SBBZT = '';
    var ZZSHZNSFPBZ = ''; //增值税汇总分配资格
    var NSRSBH = "";//纳税人识别号
    var Tip = "";//A2
    var NSRLX_DM = "";
    var YGZNSRLX_DM = hlwsbTools.getYGZNSRLX_DM();
    //私有方法
    var data1;
    //是否是添加
    var bAdd = true;
    //私有方法

    var ybt_ybhw = 0.00;
    var ybt_jzhw = 0.00;
    var ybt_ysfw = 0.00;
    var ybt_jzfw = 0.00;

    //公有方法
    return {

        onPrint: function () {
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z,
                NSRLX_DM: NSRLX_DM
            });
            window.location = "/hlwsb/zzs_print/ybnsr/sb_zzs_ybnsr_hzfpb_2015.html?" + str;
        },
        onExport: function () {
            DCellWeb1.ExportExcelDlg();
        }
        , onLoad: function () {
            curSeg = hzfpb;
            //引用报表控制
            dcell(DCellWeb1, "/hlwsb/printModel/zzs/ybnsr/sb_zzs_ybnsr_hzfpb_2015.cll");
            curSeg.onQuery();
            //删除组件释放内存
            $(window).unload(function () {
            });
        },
        //查询数据
        onQuery: function () {
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");    //获取所属时期开始时间
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");    //获取所属时期结束时间
            NSRLX_DM = baseTools.getUrlQueryString("NSRLX_DM");
            baseTools.xhrAjax({
                url: "/hlwsb/zzs/ybnsr/getSB_ZZS_YBNSR_HZFPB_2015.do",
                params: {
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, NSRLX_DM: NSRLX_DM, YGZNSRLX_DM: YGZNSRLX_DM
                },
                callback: [curSeg.pageFlowControl]
            });
        },
        //保存数据
        onSave: function () {
            if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能保存");
                return;
            }
            var ad223 = DCellWeb1.GetStringVar_J("NSRSBH");
            var data = DCellWeb1.cellRowToJson({
                cols: ["XL", "FZJG_NSRSBH", "FZJG_MC", "YBHWXSSR", "YBHWFPBL", "YBHWFPSE", "YBJZJTXSSR", "YBJZJTFPBL", "YBJZJTFPSE", "YSFWXSSR", "YSFWFPBL", "YSFWFPSE", "YSJZJTXSSR", "YSJZJTFPBL", "YSJZJTFPSE"],
                cellRows: [
                    {start: "HC", end: "HJ"}
                ],
                headCols: ["ZJG_NSRSBH", "ZJG_MC", "YYDZ", "FDDBRXM", "KHYH", "YHZH", "LXDH", "YBTSE", "ZFJGXSEHJ",
                    "ZJGXSSR_YBHW", "ZJGFPBL_YBHW", "ZJGFPSE_YBHW",
                    "ZJGXSSR_YBJZJT", "ZJGFPBL_YBJZJT", "ZJGFPSE_YBJZJT",
                    "ZJGXSSR_YSFW", "ZJGFPBL_YSFW", "ZJGFPSE_YSFW",
                    "ZJGXSSR_YSJZJT", "ZJGFPBL_YSJZJT", "ZJGFPSE_YSJZJT"
                ],
                nsrxxCols: ["NSRMC", "NSRSBH", "SSSQ", "TBRQ"]
            });
            //debugger;

            var data1 = JSON.parse(data);


            if (!curSeg.checkData(data1)) {
                return false;
            }
            if (!confirm('是否保存？')) {
                return false;
            }
            var url = "/hlwsb/zzs/ybnsr/insertSB_ZZS_YBNSR_HZFPB_2015.do";
            baseTools.xhrAjax({
                url: url,
                params: {
                    DATA: data,
                    SBBXH: SBBXH,
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q,
                    SSSQ_Z: SSSQ_Z,
                    NSRLX_DM: NSRLX_DM
                },
                callback: [curSeg.pageFlowControl]
            });
            //alert(JSON.stringify(data))
        },
        onDelete: function () {
            if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能删除");
                return;
            }
            if (confirm("确定删除此报表？")) {
                var url = "/hlwsb/zzs/ybnsr/delSB_ZZS_YBNSR_HZFPB_2015.do";
                baseTools.xhrAjax({
                    url: url,
                    params: {SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, NSRLX_DM: NSRLX_DM},
                    callback: [curSeg.pageFlowControl]
                });
            }
        },
        onInit: function (jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
//       	alert(JSON.stringify(jsonObj.data));
            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
//            var arr = ["SSSQ"];

            DCellWeb1.initRowToCell({
                    cols: ["HC", "FZJG_NSRSBH", "FZJG_MC", "YBHWXSSR", "YBHWFPBL", "YBHWFPSE", "YBJZJTXSSR", "YBJZJTFPBL", "YBJZJTFPSE", "YSFWXSSR", "YSFWFPBL", "YSFWFPSE", "YSJZJTXSSR", "YSJZJTFPBL", "YSJZJTFPSE"],
                    cellRows: [
                        {
                            start: "XL", end: "HJ",
                            hc: "HC",
                            xl: "XL",
                            addButton: {name: "AddButton"},
                            delButton: {
                                name: "DelButton1",
                                checkbox: "CB",
                                url: "/hlwsb/zzs/ybnsr/delSB_ZZS_YBNS_HZFPB_2015.do",
                                params: {
                                    SBBXH: SBBXH,
                                    SBBZL_DM: SBBZL_DM,
                                    SSSQ_Q: SSSQ_Q,
                                    SSSQ_Z: SSSQ_Z,
                                    NSRLX_DM: NSRLX_DM
                                }
                            }
                        }
                    ],
                    manual: true,
                    headCols: ["ZJG_NSRSBH", "ZJG_MC", "YYDZ", "FDDBRXM", "KHYH", "YHZH", "LXDH", "YBTSE", "ZFJGXSEHJ",
                        "ZJGXSSR_YBHW", "ZJGFPBL_YBHW", "ZJGFPSE_YBHW",
                        "ZJGXSSR_YBJZJT", "ZJGFPBL_YBJZJT", "ZJGFPSE_YBJZJT",
                        "ZJGXSSR_YSFW", "ZJGFPBL_YSFW", "ZJGFPSE_YSFW",
                        "ZJGXSSR_YSJZJT", "ZJGFPBL_YSJZJT", "ZJGFPSE_YSJZJT"],
                    nsrxxCols: ["NSRMC", "NSRSBH", "SSSQ", "TBRQ"],
                    data: jsonObj.data,
                    iszdjskxg: true
                }
            );

            var yhzh = hlwsbTools.getNsrxx("YHZH");
            var zhmc = hlwsbTools.getNsrxx("ZHMC");
            DCellWeb1.setValByName("YHZH", yhzh);
            DCellWeb1.setValByName("KHYH", zhmc);

            if (jsonObj.data.HEAD.SBBZT) {
                bAdd = false;
            }

        },
        initControl: function (jsonObj) {
        	//如果分支机构中存在被注销的分支机构，提示信息，控制报表不允许保存
           var zxfzjgList = jsonObj.data.YMKZ.zxfzjgList;
           if(zxfzjgList && zxfzjgList.length>0){
        	   var top = "";
        	  for(var i = 0;i<zxfzjgList.length ;i++){
        		  top += zxfzjgList[i].FZJGSBH+":"+zxfzjgList[i].FZJGMC+"\r";
        	  }
        	  DCellWeb1.setValByLabel("A2", "下列分支机构为注销状态，请前往办税服务厅取消该分支机构的被汇总认定资格。\r"+top);
        	  alert("上述分支机构为注销状态，请前往办税服务厅取消该分支机构的被汇总认定资格。\r"+top);
        	  curSeg.disableButton();
        	  return;
           }	
        	
//            var ybt_ybhw_1 = jsonObj.data.YMKZ.ybt_ybhw;
//            ybt_ybhw = curSeg.roundTFix(ybt_ybhw_1);
//            var ybt_jzhw_1 = jsonObj.data.YMKZ.ybt_jzhw;
//            ybt_jzhw = curSeg.roundTFix(ybt_jzhw_1);
//            var ybt_ysfw_1 = jsonObj.data.YMKZ.ybt_ysfw;
//            ybt_ysfw = curSeg.roundTFix(ybt_ysfw_1);
//            var ybt_jzfw_1 = jsonObj.data.YMKZ.ybt_jzfw;
//            ybt_jzfw = curSeg.roundTFix(ybt_jzfw_1);
        	ybt_ybhw = jsonObj.data.YMKZ.ybt_ybhw;
            ybt_jzhw = jsonObj.data.YMKZ.ybt_jzhw;
            ybt_ysfw = jsonObj.data.YMKZ.ybt_ysfw;
            ybt_jzfw = jsonObj.data.YMKZ.ybt_jzfw;
            var tips = "";
            if (ybt_ybhw != 0) {
                tips += "其中： 一般货物及劳务应补（退）税额" + ybt_ybhw+"\t\r";
            }
            if (ybt_jzhw != 0) {
                tips += "其中： 一般货物及劳务即征即退应补（退）税额" + ybt_jzhw+"\t\r";
            }
            if (ybt_ysfw != 0) {
                tips += "其中：  应税服务应补（退）税额" + ybt_ysfw+"\t\r";
            }
            if (ybt_jzfw != 0) {
                tips += "其中： 应税服务即征即退应补（退）税额" + ybt_jzfw+"\t\r";
            }
//            //应补退税额加提示
//            DCellWeb1.setCellannotation("I7",tips);

            DCellWeb1.setValByName("ybt_ybhw", ybt_ybhw);
            DCellWeb1.setValByName("ybt_jzhw", ybt_jzhw);
            DCellWeb1.setValByName("ybt_ysfw", ybt_ysfw);
            DCellWeb1.setValByName("ybt_jzfw", ybt_jzfw);

            var HJPos = DCellWeb1.GetCellVar_J("HJ");  //纳税人总机构识别号
            var HCPos = DCellWeb1.GetCellVar_J("HC");
            var rowbegin = Number(HCPos.row) + 3;
            var rowEnd = Number(HJPos.row);
            // 总机构不能修改总机构数据，可以添加行，编辑分支机构数据
            if (jsonObj.data.YMKZ.ZZSHZNSFPBZ == "Y") {
            	 //应补退税额加提示
                DCellWeb1.setCellannotation("I7",tips);

                var ZJG_NSRSBHPos = DCellWeb1.GetCellVar_J("ZJG_NSRSBH");  //纳税人总机构识别号
                DCellWeb1.SetCellInput(ZJG_NSRSBHPos.col, ZJG_NSRSBHPos.row, ZJG_NSRSBHPos.sheet, 5);    //设置总机构纳税人识别号
                Tip = "您为(按销售收入比例分配应纳税额申报预缴的)总机构，须填写此表。应补（退）税额取主表34行（本期应补（退）税额）本期数合计";
                //DCellWeb1.SetCellString(ZJG_NSRSBHPos.col, ZJG_NSRSBHPos.row, ZJG_NSRSBHPos.sheet, hlwsbTools.getNsrxx("NSRSBH"));


                if (YGZNSRLX_DM == "20") { //21 提供应税服务纳税人 22 混业纳税人
                    Tip += "\r\n您为提供应税服务的纳税人，只能填写应税服务项目";

                    colpos = DCellWeb1.GetCellVar_J("ZJGXSSR_YBHW");
                    DCellWeb1.SetCellInput(colpos.col, colpos.row, colpos.sheet, 5);

                    colpos = DCellWeb1.GetCellVar_J("ZJGFPBL_YBHW");
                    DCellWeb1.SetCellInput(colpos.col, colpos.row, colpos.sheet, 5);
                    //DCellWeb1.SetCellDouble(colpos.col, colpos.row, colpos.sheet, 1);

                    colpos = DCellWeb1.GetCellVar_J("ZJGFPSE_YBHW");
                    DCellWeb1.SetCellInput(colpos.col, colpos.row, colpos.sheet, 5);


                    var colXSSR = DCellWeb1.GetCellVar_J("YBHWXSSR");
                    var colFPBL = DCellWeb1.GetCellVar_J("YBHWFPBL");
                    var colFPSE = DCellWeb1.GetCellVar_J("YBHWFPSE");
                    for (var i = rowbegin; i < rowEnd; i++) {
                        DCellWeb1.SetCellInput(colXSSR.col, i, colpos.sheet, 5);
                        DCellWeb1.SetCellInput(colFPBL.col, i, colpos.sheet, 5);
                        DCellWeb1.SetCellInput(colFPSE.col, i, colpos.sheet, 5);
                    }


                } else if (YGZNSRLX_DM != "22") { // 22 兼营
                    Tip += "\r\n您为提供应税货物劳务的纳税人，只能填写一般货物劳务项目";


                    colpos = DCellWeb1.GetCellVar_J("ZJGXSSR_YSFW");
                    DCellWeb1.SetCellInput(colpos.col, colpos.row, colpos.sheet, 5);

                    colpos = DCellWeb1.GetCellVar_J("ZJGFPBL_YSFW");
                    DCellWeb1.SetCellInput(colpos.col, colpos.row, colpos.sheet, 5);
                    //DCellWeb1.SetCellDouble(colpos.col, colpos.row, colpos.sheet, 1);

                    colpos = DCellWeb1.GetCellVar_J("ZJGFPSE_YSFW");
                    DCellWeb1.SetCellInput(colpos.col, colpos.row, colpos.sheet, 5);


                    var colXSSR = DCellWeb1.GetCellVar_J("YSFWXSSR");
                    var colFPBL = DCellWeb1.GetCellVar_J("YSFWFPBL");
                    var colFPSE = DCellWeb1.GetCellVar_J("YSFWFPSE");
                    for (var i = rowbegin; i < rowEnd; i++) {
                        DCellWeb1.SetCellInput(colXSSR.col, i, colpos.sheet, 5);
                        DCellWeb1.SetCellInput(colFPBL.col, i, colpos.sheet, 5);
                        DCellWeb1.SetCellInput(colFPSE.col, i, colpos.sheet, 5);

                    }


                }


                if (jsonObj.data.YMKZ.JZJTZG == "Y") {
                    Tip += "\r\n您为即征即退纳税人，可以填写即征即退项目";
                    if (YGZNSRLX_DM != "22" && YGZNSRLX_DM != "21") {
                        colpos = DCellWeb1.GetCellVar_J("ZJGXSSR_YSJZJT");
                        DCellWeb1.SetCellInput(colpos.col, colpos.row, colpos.sheet, 5);

                        colpos = DCellWeb1.GetCellVar_J("ZJGFPBL_YSJZJT");
                        DCellWeb1.SetCellInput(colpos.col, colpos.row, colpos.sheet, 5);
                        //DCellWeb1.SetCellDouble(colpos.col, colpos.row, colpos.sheet, 1);

                        colpos = DCellWeb1.GetCellVar_J("ZJGFPSE_YSJZJT");
                        DCellWeb1.SetCellInput(colpos.col, colpos.row, colpos.sheet, 5);

                        var colXSSR = DCellWeb1.GetCellVar_J("YSJZJTXSSR");
                        var colFPBL = DCellWeb1.GetCellVar_J("YSJZJTFPBL");
                        var colFPSE = DCellWeb1.GetCellVar_J("YSJZJTFPSE");
                        for (var i = rowbegin; i < rowEnd; i++) {
                            DCellWeb1.SetCellInput(colXSSR.col, i, colpos.sheet, 5);
                            DCellWeb1.SetCellInput(colFPBL.col, i, colpos.sheet, 5);
                            DCellWeb1.SetCellInput(colFPSE.col, i, colpos.sheet, 5);

                        }
                    }
                } else {
                    Tip += "\r\n您不为即征即退纳税人，不能填写即征即退项目";
                    var colpos = DCellWeb1.GetCellVar_J("ZJGXSSR_YBJZJT");
                    DCellWeb1.SetCellInput(colpos.col, colpos.row, colpos.sheet, 5);

                    colpos = DCellWeb1.GetCellVar_J("ZJGFPBL_YBJZJT");
                    DCellWeb1.SetCellInput(colpos.col, colpos.row, colpos.sheet, 5);
                    DCellWeb1.SetCellDouble(colpos.col, colpos.row, colpos.sheet, 1);

                    colpos = DCellWeb1.GetCellVar_J("ZJGFPSE_YBJZJT");
                    DCellWeb1.SetCellInput(colpos.col, colpos.row, colpos.sheet, 5);

                    colpos = DCellWeb1.GetCellVar_J("ZJGXSSR_YSJZJT");
                    DCellWeb1.SetCellInput(colpos.col, colpos.row, colpos.sheet, 5);

                    colpos = DCellWeb1.GetCellVar_J("ZJGFPBL_YSJZJT");
                    DCellWeb1.SetCellInput(colpos.col, colpos.row, colpos.sheet, 5);
                    DCellWeb1.SetCellDouble(colpos.col, colpos.row, colpos.sheet, 1);

                    colpos = DCellWeb1.GetCellVar_J("ZJGFPSE_YSJZJT");
                    DCellWeb1.SetCellInput(colpos.col, colpos.row, colpos.sheet, 5);

                    var colXSSR = DCellWeb1.GetCellVar_J("YBJZJTXSSR");
                    var colFPBL = DCellWeb1.GetCellVar_J("YBJZJTFPBL");
                    var colFPSE = DCellWeb1.GetCellVar_J("YBJZJTFPSE");
                    for (var i = rowbegin; i < rowEnd; i++) {
                        DCellWeb1.SetCellInput(colXSSR.col, i, colpos.sheet, 5);
                        DCellWeb1.SetCellInput(colFPBL.col, i, colpos.sheet, 5);
                        DCellWeb1.SetCellInput(colFPSE.col, i, colpos.sheet, 5);

                    }

                    var colXSSR = DCellWeb1.GetCellVar_J("YSJZJTXSSR");
                    var colFPBL = DCellWeb1.GetCellVar_J("YSJZJTFPBL");
                    var colFPSE = DCellWeb1.GetCellVar_J("YSJZJTFPSE");
                    for (var i = rowbegin; i < rowEnd; i++) {
                        DCellWeb1.SetCellInput(colXSSR.col, i, colpos.sheet, 5);
                        DCellWeb1.SetCellInput(colFPBL.col, i, colpos.sheet, 5);
                        DCellWeb1.SetCellInput(colFPSE.col, i, colpos.sheet, 5);

                    }


                }
                DCellWeb1.setValByLabel("A2", Tip+"\r\n"+tips);
            } else {
                curSeg.disableButton();
                Tip = "非汇总企业不能填写此表！";
                if (jsonObj.data.HEAD.SBBZT) {
                    Tip += "\r\n您已保存过数据，请点击“清除全部”按钮清空数据。";
                	document.getElementById('DELETE').disabled = false;
                }
                DCellWeb1.setValByLabel("A2", Tip);
            }
//            DCellWeb1.setValByLabel("A2", Tip+"\r\n"+tips);

            DCellWeb1.inputCheck = function (col, row, sheet, text) {
                var fjxx = DCellWeb1.GetCellVar_J("FJXX");
                var maxRow = fjxx.row;
                if ((row == 9 && col == 9) || (col == 7 && row > 15 && row < maxRow )) {
                    DCellWeb1.setValByName("ybt_ybhw", ybt_ybhw);
                }
                if ((row == 9 && col == 10) || (col == 10 && row > 15 && row < maxRow )) {
                    DCellWeb1.setValByName("ybt_ybhw", ybt_ybhw);
                }
                if ((row == 9 && col == 11) || (col == 13 && row > 15 && row < maxRow )) {
                    DCellWeb1.setValByName("ybt_ybhw", ybt_ybhw);
                }
                if ((row == 9 && col == 12) || (col == 16 && row > 15 && row < maxRow )) {
                    DCellWeb1.setValByName("ybt_ybhw", ybt_ybhw);
                }
                return true;
            };

        },
        disableButton: function () {
            var inputList = document.getElementsByTagName('input')
            for (var i = 0; i < inputList.length; i++) {
                inputList[i].disabled = true;
            }
        },
        checkData: function (data) {
            var head = data.HEAD;
            if (head) {
                //总机构名称是否为空
                if (!hlwsbTools.trim(head.ZJG_MC)) {
                    alert("总机构名称不能为空")
                    return false;
                }
                //总机构纳税人识别号是否为空
                if (!hlwsbTools.trim(head.ZJG_NSRSBH)) {
                    alert("总机构纳税人识别号不能为空");
                    return false;
                }
            }
            var jsons = data.BODY;
            var YBHW_XSE = 0;
            var YBHW_fpbl = 0; //分配税额
            var YBHW_fpse = 0;//累计税额
            var YBHW_fzjg_fpse = 0;//单行分支机构税额
            
            var YBJZJT_XSE = 0;
            var YBJZJT_fpbl = 0; //分配税额
            var YBJZJT_fpse = 0;//累计税额
            var YBJZJT_fzjg_fpse = 0;//单行分支机构税额

            var FW_XSE = 0;
            var FW_fpbl = 0; //分配税额
            var FW_fpse = 0;//累计税额
            var FW_fzjg_fpse = 0;//单行分支机构税额

            var FWJZJT_XSE = 0;
            var FWJZJT_fpbl = 0; //分配税额
            var FWJZJT_fpse = 0;//累计税额
            var FWJZJT_fzjg_fpse = 0;//单行分支机构税额

            //校验总分机构的税额合计与应补退是否相等。若不等，取分配税额最多的进行调整修改。
            //先默认取总机构的税额。与分支机构的分配税额进行比对。
            var YBHW_fpse_max = Number(DCellWeb1.getValByName("ZJGFPSE_YBHW"));//一般货物及劳务总机构分配税额
            var lb1_max = 0;//记录行次，用于后续提示某行税额最大。默认0表示总机构税额
            var YBJZJT_fpse_max = Number(DCellWeb1.getValByName("ZJGFPSE_YBJZJT"));//一般货物及劳务即征即退总机构分配税额
            var lb2_max = 0;//记录行次，用于后续提示某行税额最大。默认0表示总机构税额
            var FW_fpse_max = Number(DCellWeb1.getValByName("ZJGFPSE_YSFW"));//应税服务总机构分配税额
            var lb3_max = 0;//记录行次，用于后续提示某行税额最大。默认0表示总机构税额
            var FWJZJT_fpse_max = Number(DCellWeb1.getValByName("ZJGFPSE_YSJZJT"));//应税服务即征即退总机构分配税额
            var lb4_max = 0;//记录行次，用于后续提示某行税额最大。默认0表示总机构税额
            
            if (jsons && jsons.length > 0) {
            	
                for (var index = 0; index < jsons.length; index++) {
                    var json = jsons[index];

                    //分支机构纳税人识别号是否为空
                    if (!hlwsbTools.trim(json.FZJG_NSRSBH)) {
                        alert("分支机构纳税人识别号不能为空");
                        return false;
                    }
                    //纳税人识别号合法性
                    if (!curSeg.checkNsrsbh(json.FZJG_NSRSBH)) {
                        return false;
                    }
                    //分支机构名称号是否为空
                    if (!hlwsbTools.trim(json.FZJG_MC)) {
                        alert("分支机构名称不能为空");
                        return false;
                    }
                    if (json.FZJG_MC.length > 50) {
                        alert("分支机构名称最大长度50");
                        return false;
                    }
                    for (var j = index + 1; j < jsons.length; j++) {
                        if (jsons[j].FZJG_NSRSBH == json.FZJG_NSRSBH) {
                            alert("分支机构情况：“纳税人识别号”有重复，请检查！");
                            return false;
                            break;
                        }
                    }
                    YBHW_XSE += parseFloat(json.YBHWXSSR);
                    YBHW_fpbl += parseFloat(json.YBHWFPBL);
                    YBHW_fpse += parseFloat(json.YBHWFPSE);
                    YBHW_fzjg_fpse = parseFloat(json.YBHWFPSE);
                    //循环获取最大值,若两值相等先取总机构、再取行次靠前的分支机构
                    if(YBHW_fpse_max<YBHW_fzjg_fpse){
//                    	alert(index);
                    	YBHW_fpse_max = YBHW_fzjg_fpse;
                    	lb1_max = (index+1);
                    }
                    //不再校验单行分配税额
//                    alert(YBHW_fpse+"-"+ybt_ybhw+"-"+YBHW_fpbl);
                    //2016070 郭培源要求 分支机构分配税额允许修改 误差控制为10
//                    if( Math.abs(YBHW_fpse-curSeg.roundTFix(ybt_ybhw*YBHW_fpbl)) > 10 ){
//                    	alert("分支机构情况：第"+(index+1)+"行“分支机构一般货物及劳务”列分配税额填写有误，请确认！");
//                    	return false;
//                    }
                    YBJZJT_XSE += parseFloat(json.YBJZJTXSSR);
                    YBJZJT_fpbl += parseFloat(json.YBJZJTFPBL);
                    YBJZJT_fpse += parseFloat(json.YBJZJTFPSE);
                    YBJZJT_fzjg_fpse = parseFloat(json.YBJZJTFPSE);
                    if(YBJZJT_fpse_max<YBJZJT_fzjg_fpse){
                    	YBJZJT_fpse_max = YBJZJT_fzjg_fpse;
                    	lb2_max = (index+1);
                    }
//                    if( Math.abs(YBJZJT_fpse-curSeg.roundTFix(ybt_jzhw*YBJZJT_fpbl)) > 10 ){
//                    	alert("分支机构情况：第"+(index+1)+"行“分支机构一般货物及劳务即征即退”列分配税额填写有误，请确认！");
//                    	return false;
//                    }
                    
                    FW_XSE += parseFloat(json.YSFWXSSR);
                    FW_fpbl += parseFloat(json.YSFWFPBL);
                    FW_fpse += parseFloat(json.YSFWFPSE);
                    FW_fzjg_fpse = parseFloat(json.YSFWFPSE);
                    if(FW_fpse_max<FW_fzjg_fpse){
                	   FW_fpse_max = FW_fzjg_fpse;
                    	lb3_max = (index+1);
                    }
//                    if( Math.abs(FW_fpse-curSeg.roundTFix(ybt_ysfw*FW_fpbl)) > 10 ){
//                    	alert("分支机构情况：第"+(index+1)+"行“分支机构应税服务”列分配税额填写有误，请确认！");
//                    	return false;
//                    }
                    
                    FWJZJT_XSE += parseFloat(json.YSJZJTXSSR);
                    FWJZJT_fpbl += parseFloat(json.YSJZJTFPBL);
                    FWJZJT_fpse += parseFloat(json.YSJZJTFPSE);
                    FWJZJT_fzjg_fpse = parseFloat(json.YSJZJTFPSE);
                    if(FWJZJT_fpse_max<FWJZJT_fzjg_fpse){
                    	FWJZJT_fpse_max = FWJZJT_fzjg_fpse;
                     	lb4_max = (index+1);
                     }
//                    if( Math.abs(FWJZJT_fpse-curSeg.roundTFix(ybt_jzfw*FWJZJT_fpbl)) > 10 ){
//                    	alert("分支机构情况：第"+(index+1)+"行“分支机构应税服务即征即退”列分配税额填写有误，请确认！");
//                    	return false;
//                    }

                }


                YBHW_XSE = Number(YBHW_XSE.toFixed(2));
                YBHW_fpbl = Number(YBHW_fpbl.toFixed(10));
                YBHW_fpse = Number(YBHW_fpse.toFixed(2));

                YBJZJT_XSE = Number(YBJZJT_XSE.toFixed(2));
                YBJZJT_fpbl = Number(YBJZJT_fpbl.toFixed(10));
                YBJZJT_fpse = Number(YBJZJT_fpse.toFixed(2));


                FW_XSE = Number(FW_XSE.toFixed(2));
                FW_fpbl = Number(FW_fpbl.toFixed(10));
                FW_fpse = Number(FW_fpse.toFixed(2));


                FWJZJT_XSE = Number(FWJZJT_XSE.toFixed(2));
                FWJZJT_fpbl = Number(FWJZJT_fpbl.toFixed(10));
                FWJZJT_fpse = Number(FWJZJT_fpse.toFixed(2));


            }

            //.20160630 封晨光确认不校验分配比例 姜航
            //var zfpbl = Number(DCellWeb1.getValByName("ZJGFPBL_YBHW")) + YBHW_fpbl;
            //if (Math.abs(zfpbl - 1) > 0.000001) {
            //    alert("[一般货物及劳务]总机构和分支机构的分配比例之和不等于1，请检查填写是否正确!");
            //    return false;
            //}

            //var zfpbl = Number(DCellWeb1.getValByName("ZJGFPBL_YBJZJT")) + YBJZJT_fpbl;
            //if (Math.abs(zfpbl - 1) > 0.000001) {
            //    alert("[一般货物及劳务即征即退]总机构和分支机构的分配比例之和不等于1，请检查填写是否正确!");
            //    return false;
            //}

            //
            //var zfpbl = Number(DCellWeb1.getValByName("ZJGFPBL_YSFW")) + FW_fpbl;
            //if (Math.abs(zfpbl - 1) > 0.000001) {
            //    alert("[应税服务]总机构和分支机构的分配比例之和不等于1，请检查填写是否正确!");
            //    return false;
            //}

            //var zfpbl = Number(DCellWeb1.getValByName("ZJGFPBL_YSJZJT")) + FWJZJT_fpbl;
            //if (Math.abs(zfpbl - 1) > 0.000001) {
            //    alert("[应税服务即征即退]总机构和分支机构的分配比例之和不等于1，请检查填写是否正确!");
            //    return false;
            //}

            //保存前先将所有税额置灰
            DCellWeb1.SetCellInput(15,10,0,5);
            DCellWeb1.SetCellInput(15,11,0,5);
            DCellWeb1.SetCellInput(15,12,0,5);
            DCellWeb1.SetCellInput(15,13,0,5);
            for(var hc = 1;hc<=jsons.length;hc++){
            	DCellWeb1.SetCellInput(8,(18+hc),0,5);
            	DCellWeb1.SetCellInput(11,(18+hc),0,5);
            	DCellWeb1.SetCellInput(14,(18+hc),0,5);
            	DCellWeb1.SetCellInput(17,(18+hc),0,5);
            }
            
            var zfpse_ybhw = curSeg.roundTFix(Number(DCellWeb1.getValByName("ZJGFPSE_YBHW")) + YBHW_fpse);
            var wc1 = curSeg.roundTFix(ybt_ybhw - zfpse_ybhw);
            if (Math.abs(wc1) > 0.001) {
            	var msg1 = "“一般货物及劳务”项总机构和分支机构的分配税额之和:"+zfpse_ybhw+"不等于“一般货物及劳务”项应补退税额:"+ybt_ybhw;
            	if(wc1>0){
            		if(lb1_max==0){
            			msg1 += "\n请对“总机构一般货物及劳务分配税额”调整增加"+wc1;
            			DCellWeb1.SetCellInput(15,10,0,2);
            		}else{
            			msg1 += "\n请对第"+(lb1_max)+"行“分支机构一般货物及劳务分配税额”调整增加"+wc1;
            			DCellWeb1.SetCellInput(8,(18+lb1_max),0,2);
            		}
            	}else if(wc1<0){
            		if(lb1_max==0){
            			msg1 += "\n请对“总机构一般货物及劳务分配税额”调整减少"+Math.abs(wc1);
            			DCellWeb1.SetCellInput(15,10,0,2);
            		}else{
            			msg1 += "\n请对第"+(lb1_max)+"行“分支机构一般货物及劳务分配税额”调整减少"+Math.abs(wc1);
            			DCellWeb1.SetCellInput(8,(18+lb1_max),0,2);
            		}
            	}
            	alert(msg1);
                return false;
            }
            
            var zfpse_ybjzjt = curSeg.roundTFix(Number(DCellWeb1.getValByName("ZJGFPSE_YBJZJT")) + YBJZJT_fpse);
            var wc2 = curSeg.roundTFix(ybt_jzhw-zfpse_ybjzjt);
            if(Math.abs(wc2)>0){
            	var msg2 = "“一般货物及劳务即征即退”项总机构和分支机构的分配税额之和:"+zfpse_ybjzjt+"不等于“一般货物及劳务即征即退”项应补退税额:"+ybt_jzhw;
            	if(wc2>0){
            		if(lb2_max==0){
            			msg2 += "\n请对“总机构一般货物及劳务即征即退分配税额”调整增加"+wc2;
            			DCellWeb1.SetCellInput(15,11,0,2);
            		}else{
            			msg1 += "\n请对第"+(lb2_max)+"行“分支机构一般货物及劳务即征即退分配税额”调整增加"+wc2;
            			DCellWeb1.SetCellInput(11,(18+lb2_max),0,2);
            		}
            	}else if(wc2<0){
            		if(lb2_max==0){
            			msg2 += "\n请对“总机构一般货物及劳务即征即退分配税额”调整减少"+Math.abs(wc2);
            			DCellWeb1.SetCellInput(15,11,0,2);
            		}else{
            			msg2 += "\n请对第"+(lb2_max)+"行“分支机构一般货物及劳务即征即退分配税额”调整减少"+Math.abs(wc2);
            			DCellWeb1.SetCellInput(11,(18+lb2_max),0,2);
            		}
            	}
            	alert(msg2);
            	return false;
            }
            
            var zfpse_fw = curSeg.roundTFix(Number(DCellWeb1.getValByName("ZJGFPSE_YSFW"))+FW_fpse);
            var wc3 = curSeg.roundTFix(ybt_ysfw - zfpse_fw);
            if(Math.abs(wc3)>0){
            	var msg3 = "“应税服务”项总机构和分支机构的分配税额之和:"+zfpse_fw+"不等于“应税服务”项应补退税额:"+ybt_ysfw;
            	if(wc3>0){
            		if(lb3_max==0){
            			msg3 += "\n请对“总机构应税服务分配税额”调整增加"+wc3;
            			DCellWeb1.SetCellInput(15,12,0,2);
            		}else{
            			msg3 += "\n请对第"+(lb3_max)+"行“分支机构应税服务分配税额”调整增加"+wc3;
            			DCellWeb1.SetCellInput(14,(18+lb3_max),0,2);
            		}
            	}else if(wc3<0){
            		if(lb3_max==0){
            			msg3 += "\n请对“总机构应税服务分配税额”调整减少"+Math.abs(wc3);
            			DCellWeb1.SetCellInput(15,12,0,2);
            		}else{
            			msg3 += "\n请对第"+(lb3_max)+"行“分支机构应税服务分配税额”调整减少"+Math.abs(wc3);
            			DCellWeb1.SetCellInput(14,(18+lb3_max),0,2);
            		}
            	}
            	alert(msg3);
            	return false;
            }
            
            var zfpse_fwjzjt = curSeg.roundTFix(Number(DCellWeb1.getValByName("ZJGFPSE_YSJZJT"))+FWJZJT_fpse);
            var wc4 = curSeg.roundTFix(ybt_jzfw-zfpse_fwjzjt);
            if(Math.abs(wc4)>0){
            	msg4 = "“应税服务即征即退”项总机构和分支机构的分配税额之和:"+zfpse_fwjzjt+"不等于“应税服务即征即退”项应补退税额:"+ybt_jzfw;
            	if(wc4>0){
            		if(lb4_max==0){
            			msg4 += "\n请对“总机构应税服务即征即退分配税额”调整增加"+wc4;
            			DCellWeb1.SetCellInput(15,13,0,2);
            		}else if(lb4_max<0){
            			msg4 += "\n请对第"+(lb4_max)+"行“分支机构应税服务分配税额”调整增加"+wc4;
            			DCellWeb1.SetCellInput(17,(18+lb4_max),0,2);
            		}
            	}else if(wc4<0){
            		if(lb4_max==0){
            			msg4 += "\n请对“总机构应税服务即征即退分配税额”调整减少"+Math.abs(wc4);
            			DCellWeb1.SetCellInput(15,13,0,2);
            		}else if(lb4_max<0){
            			msg4 += "\n请对第"+(lb4_max)+"行“分支机构应税服务分配税额”调整减少"+Math.abs(wc4);
            			DCellWeb1.SetCellInput(17,(18+lb4_max),0,2);
            		}
            	}
            	alert(msg4);
            	return false;
            }

            var zfpse = Number(DCellWeb1.getValByName("ZJGFPSE_YBHW")) + Number(DCellWeb1.getValByName("ZJGFPSE_YBJZJT")) + Number(DCellWeb1.getValByName("ZJGFPSE_YSFW")) + Number(DCellWeb1.getValByName("ZJGFPSE_YSJZJT"))
                + YBHW_fpse + YBJZJT_fpse + FW_fpse + FWJZJT_fpse;
            var ybtse = Number(DCellWeb1.getValByName("YBTSE"));
            if (Math.abs(zfpse - ybtse) > 0.001) {
                alert("总机构和分支机构的分配税额之和:"+zfpse+"不等于应补退税额:"+ybtse+"，请检查调整任一行分支机构分配税额!");
                return false;
            }

            var zxxsr = Number(DCellWeb1.getValByName("ZJGXSSR_YBHW")) + Number(DCellWeb1.getValByName("ZJGXSSR_YBJZJT")) + Number(DCellWeb1.getValByName("ZJGXSSR_YSFW")) + Number(DCellWeb1.getValByName("ZJGXSSR_YSJZJT"))
                + YBHW_XSE + YBJZJT_XSE + FW_XSE + FWJZJT_XSE;
            var zfjgxsehj = Number(DCellWeb1.getValByName("ZFJGXSEHJ"));

            if (Math.abs(zxxsr - zfjgxsehj) > 0.001) {
                alert("总机构和分支机构的销售额之和:"+zxxsr+"不等于总分机构销售额合计:"+zfjgxsehj+"，请检查调整!");
                return false;
            }


            return true;
        },

		roundTFix : function(value) {
			if (!isNaN(value)) {
				return parseFloat(Number(Number(value).toFixed(3)).toFixed(2));
			} else {
				return value;
			}
		},
        
        /*检查纳税人识别号的合法性*/
        checkNsrsbh: function (obj) {
            var reg = /^(([A-Za-z0-9]{15})|([A-Za-z0-9]{18})|([A-Za-z0-9]{20}))$/;
            if (obj.search(reg) == -1) {
                alert("你输入的税号：" + obj + "有误。" + "请输入正确的纳税人识别号格式，匹配长度为15、18或者20,由字母或者数字");
                return false;
            }
            return true;
        },
        //导入
        openPopWin:function(){
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=hzfpb&&startRow=8&&sheetIndex=1&templatePath=../../printModel/zzs/ybnsr/sb_zzs_ybnsr_hzfpb_2015.zip',
                width: 400,
                height: 150
            };
            winObj = baseTools.showWinExt(winParam);
            $(winObj.DOM.wrap).bgiframe({
                width: 425,
                height: 200
            });
        },

        fillData:function(jsonArray){
            return true;
        },
        /**
         * 需要的时候可以覆盖该方法
         * 在ajax调用中，在得到数据时调用该方法
         */
        pageFlowControl: function (jsonObj, xhrArgs) {
        	var SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            switch (parseInt(jsonObj.code)) {
                //查询操作返回标志
                case 0:
                	curSeg.initControl(jsonObj);
                    curSeg.onInit(jsonObj);
                    DCellWeb1.ProtectFormula = false;
//                    if(SBBZT==null){// 第一次进入页面要重新计算（如果存在前行公式引用后行,默认重新计算不容易出错），有值不需要重新计算
//						  cell.calculateAllJs();
//				    }
                    break;
                //添加、更新以及状态更新操作返回标志
                case 1:
                    bAdd = false;
                    alert("保存成功");
                    top.main.changeNodeStatus(SBBZL_DM,"1");
                    //curSeg.onInit(jsonObj);
                    break;
                // 删除操作返回标志
                case 2:
                    alert("删除成功");
                    top.main.changeNodeStatus(SBBZL_DM,"0");
                    bAdd = true;
                    //curSeg.onInit(jsonObj);
                    window.location.reload();
                    DCellWeb1.ProtectFormula = false;
                    break;
                //准备添加的记录已经存在
                case 3:
                    break;
                //在线帮助
                case 6:
                    break;
                case -1://保存出错返回标志
                case -2://其它错误返回标志
                    jsonObj.msg = jsonObj.msg.replace(/^[\S\s]+:/g, '')
                    DCellWeb1.setValByLabel('A2', jsonObj.msg);
                    curSeg.disableButton();
                    baseTools.hideMash();
                    break;
                case -3://cookie 失效请重新登录
                    alert(jsonObj.msg);
                    baseTools.gotoLogin();
                    break;
                default:
            }
        }
    };
})();

function tabIn() {
    hzfpb.onQuery();
}