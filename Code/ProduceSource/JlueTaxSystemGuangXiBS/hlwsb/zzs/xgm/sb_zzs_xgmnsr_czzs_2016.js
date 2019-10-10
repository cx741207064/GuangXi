//使用窗口组件加载时注释下面的代码
$(document).ready(function () {
    czzs.onLoad();
});

var czzs = (function () {
    // 私有属性
    var curSeg; // 保存czzs对象的
    var SBBXH = '';
    var SBBZL_DM = '';
    var SSSQ_Q = '';
    var SSSQ_Z = '';
    var SBBZT = "";
    var YSHWLWSL = "";// 应税货物、劳物税率
    var YSFWSL = "";// 应税服务税率
    var YSHWLWZSL = "";// 应税货物、劳物征收率
    var YSFWZSL = "";// 应税服务征收率

    // 以下为公式使用的值
    // 计算应征货物销售额使用到的征收率
    var yzhwxsezsl = 0.03;// 应征销售额货物征收率
    // 计算应征服务销售额使用到的征收率
    var yzfwxsezsl = 0.03;// 应征销售额服务征收率3%
    var yzfwxsezsl5 = 0.05;// 应征销售额服务征收率5%
    // 免税销售额计算免税税额使用到的税率
    var zsl = 0.03;
    var YDKZYFPJE = "";// 已代开专业发票金额
    var YSHWLWFPDKBHSXSE = ""; //已代开专业发票金额(货物劳务)
    var YSFWFPDKBHSXSE = 0.00;//已代开专业发票金额（服务）合计
    var YSFWFPDKBHSXSE3 = "";//已代开专业发票金额（服务）3%部分
    var YSFWFPDKBHSXSE5 = "";//已代开专业发票金额（服务）5%部分
    var JE = '';// 应税服务起征点或免征额
    var YSHWQZD = '';//货物劳务起征点
    var YGZNSRLX_DM = '';// 营改增纳税人类型
    var ISYQWRDYBNSR = '';// 是否是逾期未申请一般纳税人
    var ISGTGR = '';//是否个体户
    var ISYHY = '';// 是否银行业
    var FB1QBHSSR = '';
    var FB1QBHSSR_HW = '';
    var FB1QBHSSR_FW = '';
    var bAdd = true;// 是否是添加
    var COL0104BZ = "N";
    var COL0102BZ = "N";
    var gzbz="";
    var data1;
    return {
        onEditSNLJ: function (obj) {
            DCellWeb1.editLjs(["BNLJ_YSHWJLW", "BNLJ_YSFW"], obj.checked);
        },
        // 自动计算
        onCalc: function (obj) {
            DCellWeb1.calcManual(obj.checked);
        },
        onLoad: function () {
            curSeg = czzs;
            // 引用报表控制
            dcell(DCellWeb1,
                "/hlwsb/printModel/zzs/xgm/sb_zzs_xgmnsr_czzs_2016.cll");
            curSeg.onQuery();

            // 删除组件释放内存
            $(window).unload(function () {
            });
        },
        onPrint: function () {
            return false;
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z
            });
            window.location = "/hlwsb/zzs_print/xgm/sb_zzs_xgmnsr_czzs_2016.html?" + str;
        },
        // 查询数据
        onQuery: function () {
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM"); // 获取页面申报表种类代码标记
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");
            gzbz = baseTools.getUrlQueryString("gz");
            var url = "/hlwsb/zzs/xgm/getSB_ZZS_XGMNSR_CZZS.do";
            baseTools.xhrAjax({
                url: url,
                params: {
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q,
                    SSSQ_Z: SSSQ_Z
                },
                callback: [curSeg.pageFlowControl]
            });
        },
        // 保存数据
        onSave: function () {
            if (gzbz == "Y") {
                if (!confirm("保存后会将原数据覆盖，确定要保存吗？")) {
                    return;
                }
            } else if (SBBZT == "2" || SBBZT == "3") {
                alert("数据已申报，不允许添加");
                return;
            }

            if (!confirm('是否保存？')) {
                return false;
            }

            if (!curSeg.checkData()) {
                return false;
            }
            var data = DCellWeb1.submitJsonjs({cols: ["BQS_YSHWJLW", "BQS_YSFW", "BNLJ_YSHWJLW", "BNLJ_YSFW"]});
            var url = bAdd ? "/hlwsb/zzs/xgm/insertSB_ZZS_XGMNSR_CZZS.do" : "/hlwsb/zzs/xgm/updateSB_ZZS_XGMNSR_CZZS.do";
            baseTools.xhrAjax({
                url: url,
                params: {
                    DATA: data,
                    SBBXH: SBBXH,
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q,
                    SSSQ_Z: SSSQ_Z,
                    GZ: gzbz
                },
                callback: [curSeg.pageFlowControl]
            });
        },
        // 添加暂存
        onCacheSave: function () {
            if (gzbz == "Y") {
                if (!confirm("暂存后会将原数据覆盖，确定要保存吗？")) {
                    return;
                }
            } else if (SBBZT == "2" || SBBZT == "3") {
                alert("数据已申报，不允许添加");
                return;
            }

            if (!confirm('是否暂存？')) {
                return false;
            }
            var data = DCellWeb1.submitJsonjs({cols: ["BQS_YSHWJLW", "BQS_YSFW", "BNLJ_YSHWJLW", "BNLJ_YSFW"]});
            var url = bAdd ? "/hlwsb/zzs/xgm/insertSB_ZZS_XGMNSR_CZZS.do" : "/hlwsb/zzs/xgm/updateSB_ZZS_XGMNSR_CZZS.do";
            baseTools.xhrAjax({
                url: url,
                params: {
                    DATA: data,
                    SBBXH: SBBXH,
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q,
                    SSSQ_Z: SSSQ_Z,
                    GZ: gzbz,
                    temSBBZT: 5
                },
                callback: [curSeg.pageFlowControl]
            });
        },
        //删除数据
        onDelete: function () {
            if (SBBZT == "2" || SBBZT == "3") {
                alert("数据已申报，不允许删除");
                return null;
            }
            if (confirm("确定删除此报表？")) {
                var url = "/hlwsb/zzs/xgm/delSB_ZZS_XGMNSR_CZZS.do";
                baseTools.xhrAjax({
                    url: url,
                    params: {
                        SBBXH: SBBXH,
                        SBBZL_DM: SBBZL_DM,
                        SSSQ_Q: SSSQ_Q,
                        SSSQ_Z: SSSQ_Z
                    },
                    callback: [curSeg.pageFlowControl]
                });
            }
        },

//		赋值
        initData: function (jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
            DCellWeb1.initDataToCell({
                cols: ["BQS_YSHWJLW", "BQS_YSFW", "BNLJ_YSHWJLW", "BNLJ_YSFW"],
                data: jsonObj.data,
                nsrxxCols: ["NSRMC", "NSRSBH", "SSSQ", "TBRQ"],
                iszdjskxg: true
            });
           
        },


//	 		初始化基础数据
        initparaData: function (jsonObj) {
            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            YSFWSL = parseFloat(jsonObj.data.YMKZ.YSFWSL);
            YSHWLWSL = parseFloat(jsonObj.data.YMKZ.YSHWLWSL);
            YSFWZSL = parseFloat(jsonObj.data.YMKZ.YSFWZSL);
            YSHWLWZSL = parseFloat(jsonObj.data.YMKZ.YSHWLWZSL);
            YDKZYFPJE = jsonObj.data.YMKZ.YDKZYFPJE;
            YSHWLWFPDKBHSXSE = jsonObj.data.YMKZ.YSHWLWFPDKBHSXSE;
            YSFWFPDKBHSXSE3 = jsonObj.data.YMKZ.YSFWFPDKBHSXSE3;//3%
            YSFWFPDKBHSXSE5 = jsonObj.data.YMKZ.YSFWFPDKBHSXSE5;//5%
            if (!YDKZYFPJE) {
                YDKZYFPJE = 0.00;
            }
            if (!YSHWLWFPDKBHSXSE) {
                YSHWLWFPDKBHSXSE = 0.00;
            }
            if (!YSFWFPDKBHSXSE3) {
                YSFWFPDKBHSXSE3 = 0.00;
            }
            if (!YSFWFPDKBHSXSE5) {
                YSFWFPDKBHSXSE5 = 0.00;
            }
            YDKZYFPJE = parseFloat(YDKZYFPJE);
            YSHWLWFPDKBHSXSE = parseFloat(YSHWLWFPDKBHSXSE);
            YSFWFPDKBHSXSE3 = parseFloat(YSFWFPDKBHSXSE3);
            YSFWFPDKBHSXSE5 = parseFloat(YSFWFPDKBHSXSE5);
            YSFWFPDKBHSXSE = curSeg.roundTFix(YSFWFPDKBHSXSE3 + YSFWFPDKBHSXSE5);
            JE = jsonObj.data.YMKZ.JE;// 服务起征点金额
            JE = parseFloat(JE);
            YSHWQZD = jsonObj.data.YMKZ.YSHWQZD;//货物起征点金额
            YSHWQZD = parseFloat(YSHWQZD);
            ISYQWRDYBNSR = jsonObj.data.YMKZ.ISYQWRDYBNSR;
            //YGZNSRLX_DM = jsonObj.data.YMKZ.YGZNSRLX_DM;
            YGZNSRLX_DM = hlwsbTools.getYGZNSRLX_DM();
            // 营改增纳税人类型代码;10-非营改增纳税人;11-销售货物劳务纳税人;
            // 20-营改增纳税人;21-提供应税服务纳税人;22-混业纳税人

            if (jsonObj.data.HEAD.SBBZT) {
                bAdd = false;
            }
            ISGTGR = jsonObj.data.YMKZ.ISGTGR == 'Y' ? true : false;
            //ISYHY = jsonObj.data.YMKZ.ISYHY == 'Y' ? true : false;
            ISYHY = false;     //20160615经郭培源和封晨光确认，不加银行业判断，把此标志置为false  姜航
            FB1QBHSSR = jsonObj.data.YMKZ.QBHSSR;
            FB1QBHSSR_HW = jsonObj.data.YMKZ.QBHSSR_HW;
            FB1QBHSSR_FW = jsonObj.data.YMKZ.QBHSSR_FW;
        },
//      初始化控制
        initControl: function (jsonObj) {

            // 先全部打开，然后特殊情况关闭
            if (SBBZT != '2' && SBBZT != '3') {
                document.getElementById("savebutton").disabled = false;
                document.getElementById("deletebutton").disabled = false;
            }

            // 表头message
            var msg = "特别提醒：";
//			msg += "第1、4、7、9、13栏次销售额合计如果未超过" + JE + "元，暂免征收增值税。";
            msg += "本期数“货物及劳务”列第1、4、7、9、13栏次销售额合计如果未超过" + YSHWQZD + "元，暂免征收“货物及劳务”增值税。";
            msg += "本期数“服务、不动产和无形资产”列第1、4、7、9、13栏次销售额合计如果未超过" + JE + "元，暂免征收“服务、不动产和无形资产”增值税。";

            msg += "\r\n您当前所属期的\"已代开专用发票金额\"为" + YDKZYFPJE + "元(该金额从税务机关自动带出)。";
            msg += "\r\n其中\"货物劳务\"列为" + YSHWLWFPDKBHSXSE + "元，\"服务、不动产和无形资产\"列为" + YSFWFPDKBHSXSE + "元。";
            msg += "\r\n其中\"服务、不动产和无形资产\"列(3%征收率)已代开专用发票金额" + YSFWFPDKBHSXSE3 + "元，\"服务、不动产和无形资产\"列(5%征收率)已代开专用发票金额为" + YSFWFPDKBHSXSE5 + "元。";
            var ysfwPos = DCellWeb1.GetCellVar_J("BQS_YSFW");
            var yshwPos = DCellWeb1.GetCellVar_J("BQS_YSHWJLW");
            var bnljYsfwPos = DCellWeb1.GetCellVar_J("BNLJ_YSFW");
            var bnljYshwPos = DCellWeb1.GetCellVar_J("BNLJ_YSHWJLW");

            // 营改增纳税人类型代码:
            //10-非营改增纳税人;11-销售货物劳务纳税人;
            //20-营改增纳税人;21-提供应税服务纳税人;22-混业纳税人
            if ("20" == YGZNSRLX_DM) {
                // 营改增 只能填写 服务、不动产和无形资产
                //控制 货物及劳务 列不允许填写
                for (var i = 1; i <= 22; i++) {
                    DCellWeb1.SetCellInput(yshwPos.col, (yshwPos.row + i), ysfwPos.sheet, 5);
                    DCellWeb1.SetCellBackColor(yshwPos.col, (yshwPos.row + i), ysfwPos.sheet, -1);
                    DCellWeb1.SetCellInput(bnljYshwPos.col, (bnljYshwPos.row + i), bnljYshwPos.sheet, 5)
                }
                msg += "\r\n您是营改增纳税人,只能填写服务、不动产和无形资产列!"
            } else if ("10" == YGZNSRLX_DM) {
                // 非营改增 只能填写 货物及劳务 列，
                //控制 服务、不动产和无形资产 列不允许填写
                for (var i = 1; i <= 22; i++) {
                    DCellWeb1.SetCellInput(ysfwPos.col, (ysfwPos.row + i), ysfwPos.sheet, 5);
                    DCellWeb1.SetCellBackColor(ysfwPos.col, (ysfwPos.row + i), ysfwPos.sheet, -1);
                    DCellWeb1.SetCellInput(bnljYsfwPos.col, (bnljYsfwPos.row + i), bnljYsfwPos.sheet, 5);
                }
                msg += "\r\n您是非营改增纳税人,只能填写货物及劳务列!"
            } else if ("22" == YGZNSRLX_DM) {
//				msg += "\r\n您是混营增值税纳税人!"
//				业务确认取消“混营”叫法，改为“兼营纳税人”。两种叫法业务上意思相同
                msg += "\r\n您是兼营增值税纳税人!"
            }

            //判断是否属于个体户。个体户判断起征点标准。非个体户（即企业）判断小薇标注
            //10行:小微企业免税销售额；11行：未达起征点销售额
            //若为 是，填写第11行，第10行不允许填写。
            //若为 否 ，填写第10行，第11行不允许填写。
            if (!ISGTGR) {
                DCellWeb1.setCellInputByLabel("E19", 5);
                DCellWeb1.setCellInputByLabel("F19", 5);
                DCellWeb1.setCellInputByLabel("F27", 5);

            } else {
                DCellWeb1.setCellInputByLabel("E18", 5);
                DCellWeb1.setCellInputByLabel("F18", 5);
                DCellWeb1.setCellInputByLabel("F26", 5);

            }

            if (ISYQWRDYBNSR == "1") {
                msg += "\r\n您为逾期未申请认定增值税一般纳税人，按适用税率进行征收。如果有疑问可咨询当地税务机关！";
            }
            // 是否显示 ISSHOW=0是不显示 1是显示
            // if (0 == jsonObj.data.YMKZ.ISSHOW) {
            //     msg += "您只在1月，4月，7月，10月才需填写此表";
            //     curSeg.disableButton();
            // }
            DCellWeb1.setValByLabel("A3", msg);
            curSeg.initZspm(jsonObj);
            curSeg.initCacl();
            // 设置提示
            curSeg.initannotation();
        },

        initZspm: function (jsonObj) {
            /**
             * fenglaoshi 20160518
             * 只有3%，免税额=免税销售额*0.03
             * 只有5%，免税额=免税销售额*0.05
             * 两者都有，区间段判断
             */
            var zspmList = jsonObj.data.ZSPMLIST;//
            if (zspmList && zspmList.length >= 0) {
                for (var i = 0; i < zspmList.length; i++) {
                    if (zspmList[i].ZSPM_DM
                        && (zspmList[i].ZSPM_DM.substring(5, 6) == '6' || zspmList[i].ZSPM_DM
                            .substring(5, 6) == '7')) {//2016.07.02加入应该增校验

                        if (zspmList[i].ZSL && zspmList[i].ZSL == 0.05) {
                            COL0104BZ = "Y";// 保存时用于校验小薇免税额
                        } else if (zspmList[i].ZSL && zspmList[i].ZSL == 0.03) {
                            COL0102BZ = "Y";// 保存时用于校验小薇免税额
                        }
                    }
                }
            }

            if (COL0102BZ == "Y" && COL0104BZ == "N") {
                if (!ISGTGR) {//企业
                    var formula1 = 'Round(第1页!F18*0.03,2)';
                    DCellWeb1.setFormulaByLabel('F26', formula1);
                } else {//个体户
                    var formula1 = 'Round(第1页!F19*0.03,2)';
                    DCellWeb1.setFormulaByLabel('F27', formula1);
                }

            } else if (COL0102BZ == "N" && COL0104BZ == "Y") {
                if (!ISGTGR) {//企业
                    var formula1 = 'Round(第1页!F18*0.05,2)';
                    DCellWeb1.setFormulaByLabel('F26', formula1);
                } else {//个体户
                    var formula1 = 'Round(第1页!F19*0.05,2)';
                    DCellWeb1.setFormulaByLabel('F27', formula1);
                }
            }
            if (COL0102BZ == "N") {
                DCellWeb1.SetCellInput(6, 9, 0, 5);
                DCellWeb1.SetCellBackColor(6, 9, 0, -1);
                DCellWeb1.SetCellInput(6, 10, 0, 5);
                DCellWeb1.SetCellInput(6, 11, 0, 5);
            }
            if (COL0104BZ == "N") {
                DCellWeb1.SetCellInput(6, 12, 0, 5);
                DCellWeb1.SetCellBackColor(6, 12, 0, -1);
                DCellWeb1.SetCellInput(6, 13, 0, 5);
                DCellWeb1.SetCellInput(6, 14, 0, 5);
            }
        },

//		  初始化计算公式所用参数
        initCacl: function () {

            //郭培源明确营改增后银行业理论上不会再出现小规模企业。避免部分银行业营改增初期认定有问题。暂时保留银行业判断
            if (ISYHY) {
                yzhwxsezsl = hlwsbTools.getYhyZsl();
                // 不存在银行业小规模应税服务
                yzfwxsezsl = hlwsbTools.getYhyZsl();

                yzfwxsezsl5 = hlwsbTools.getYhyZsl();
                zsl = hlwsbTools.getYhyZsl();
            } else if (ISYQWRDYBNSR == '1') {// 逾期未认定一般纳税人
                yzhwxsezsl = YSHWLWSL;// 取税率
                yzfwxsezsl = YSFWSL;
                yzfwxsezsl5 = YSFWSL;
            } else {
//				yzhwxsezsl = YSHWLWZSL;// 取征收率
//				yzfwxsezsl = YSFWZSL;// 取征收率
                /**
                 * 业务敲定
                 * 第一行 征收率3%，第4行5%，第7行3%
                 */
                yzhwxsezsl = 0.03;
                yzfwxsezsl = 0.03;
                yzfwxsezsl5 = 0.05;
            }

            DCellWeb1.DefineDoubleVar("YZHWXSEZSL", yzhwxsezsl);
            DCellWeb1.DefineDoubleVar("YZFWXSEZSL", yzfwxsezsl);
            DCellWeb1.DefineDoubleVar("YZFWXSEZSL5", yzfwxsezsl5);

            curSeg.initCaclYnse();
        },
        initCaclYnse: function () {

            DCellWeb1.inputCheck = function (col, row, sheet, text) {
                // 为空时为0
                if (!text) {
                    text = 0;
                }

                /**
                 * 2016营改增调整，业务明确要求(郭培源)
                 * 起征点及小薇判断 货物劳务列、应税服务列分开与业务标准判断。
                 * 不再相加合计后进行判断
                 * lijunbo
                 */
                // 此处需要判断起征点以上或达到免征值以上户，不能输入第8行 第9行
                //否则依据条件可以输入第8行第9行
                if ((col == 5 || col == 6) &&
                    (row == 9 || row == 12 || row == 15 || row == 18 || row == 19 || row == 20 || row == 21)) {
                    // 实际销售额
//					var sumDealXse = DCellWeb1.getValByLabel("E9")
//							+ DCellWeb1.getValByLabel("F9")
//							+ DCellWeb1.getValByLabel("F12")
//							+ DCellWeb1.getValByLabel("E15")
//							+ DCellWeb1.getValByLabel("E20")
//							+ DCellWeb1.getValByLabel("F20")
//							+ DCellWeb1.getValByLabel("E21")
//							+ DCellWeb1.getValByLabel("F21");
                    //货物劳务
                    var sumDealXse_hw = DCellWeb1.getValByLabel("E9") + DCellWeb1.getValByLabel("E15")
                        + DCellWeb1.getValByLabel("E20") + DCellWeb1.getValByLabel("E21");
                    //服务

                    var sumDealXse_fw = DCellWeb1.getValByLabel("F9") + DCellWeb1.getValByLabel("F12")
                        + DCellWeb1.getValByLabel("F20") + DCellWeb1.getValByLabel("F21");
                    // 合计销售额
//					var sumXse = DCellWeb1.getValByLabel("E9")
//					+ DCellWeb1.getValByLabel("F9")
//					+ DCellWeb1.getValByLabel("F12")
//					+ DCellWeb1.getValByLabel("E15")
//					+ DCellWeb1.getValByLabel("E18")
//					+ DCellWeb1.getValByLabel("F18")
//					+ DCellWeb1.getValByLabel("E19")
//					+ DCellWeb1.getValByLabel("F19")
//					+ DCellWeb1.getValByLabel("E20")
//					+ DCellWeb1.getValByLabel("F20")
//					+ DCellWeb1.getValByLabel("E21")
//					+ DCellWeb1.getValByLabel("F21");
                    //货物劳务
                    var sumXse_hw = DCellWeb1.getValByLabel("E9") + DCellWeb1.getValByLabel("E15") + DCellWeb1.getValByLabel("E18")
                        + DCellWeb1.getValByLabel("E19") + DCellWeb1.getValByLabel("E20") + DCellWeb1.getValByLabel("E21");
                    //服务
                    var sumXse_fw = DCellWeb1.getValByLabel("F9") + DCellWeb1.getValByLabel("F18") + DCellWeb1.getValByLabel("F19")
                        + DCellWeb1.getValByLabel("F20") + DCellWeb1.getValByLabel("F21") + DCellWeb1.getValByLabel("F12");

                    // 实际销售额是否超过水平线
//					var isexceed_hw = sumDealXse_hw > JE;
                    var isexceed_hw = sumDealXse_hw > YSHWQZD;
                    var isexceed_fw = sumDealXse_fw > JE;

                    // 合计销售额是否超过水平线
//					var allisexceed_hw = sumXse_hw > JE;
                    var allisexceed_hw = sumXse_hw > YSHWQZD;
                    var allisexceed_fw = sumXse_fw > JE;

                    // 如果附表1填写了全部含税收入，并且除以1.03大于起征点 也做为合计销售额超过起征点对待
                    /**
                     * 因营改增附表一调整，全部含税收入包含两种：3%和5%。
                     * 判断起征点不再全部按照除以1.03计算
                     * 分开计算后相加判断
                     */
                    var qbbhssr_hw = curSeg.roundTFix(FB1QBHSSR_HW / 1.03);//货物劳务
                    var qbbhssr_fw = curSeg.roundTFix(FB1QBHSSR_FW / 1.05);//服务

                    //货物劳务
                    if (col == 5) {
//						if (qbbhssr_hw > JE){isexceed_hw = true;}
                        if (isexceed_hw) {
                            // 实际销售额是否超过水平线 不能输入第10行、第11行
                            DCellWeb1.setCellInputByLabel("E18", 5);
                            DCellWeb1.setCellInputByLabel("E19", 5);
                            DCellWeb1.setValByLabel('E18', 0.00);
                            DCellWeb1.setValByLabel('E19', 0.00);
                        } else {
                            DCellWeb1.setCellInputByLabel("E18", 5);
                            DCellWeb1.setCellInputByLabel("E19", 5);
                            if (YGZNSRLX_DM == '10') {
                                if (!ISGTGR) {
                                    DCellWeb1.setCellInputByLabel("E18", 2);
                                } else {
                                    DCellWeb1.setCellInputByLabel("E19", 2);
                                }
                            } else if (YGZNSRLX_DM == '22') {
                                if (!ISGTGR) {
                                    DCellWeb1.setCellInputByLabel("E18", 2);
                                } else {
                                    DCellWeb1.setCellInputByLabel("E19", 2);
                                }
                            }
                            if (allisexceed_hw) {
//								var gthmsg = '“劳务及货物”列合计销售额大于' + JE+ '! ，无法享受免税政策，请检查调整（“劳务及货物”列第11行未达起征点销售额）！';
//								var xwqymsg = '“劳务及货物”列合计销售额大于' + JE+ '! ，无法享受免税政策，请检查调整（“劳务及货物”列第10行小微企业免税销售额）！';
                                var gthmsg = '“劳务及货物”列合计销售额大于' + YSHWQZD + '! ，无法享受免税政策，请检查调整（“劳务及货物”列第11行未达起征点销售额）！';
                                var xwqymsg = '“劳务及货物”列合计销售额大于' + YSHWQZD + '! ，无法享受免税政策，请检查调整（“劳务及货物”列第10行小微企业免税销售额）！';
                                var msg = ISGTGR ? gthmsg : xwqymsg;
                                alert(msg);
                                return false;
                            }
                        }

                    }

                    //应税服务
                    /**
                     * 业务扈天超确认需加上第12行+第13行
                     */
                    var col0902 = DCellWeb1.getValByLabel("F20");
                    var col1302 = DCellWeb1.getValByLabel("F21");
                    if (col == 6) {

//						if(col1202==0){//第四行等于0
                        var isexceed_fw1 = false;
                        if ((qbbhssr_fw + qbbhssr_hw + col0902 + col1302) > JE)
                            isexceed_fw = true;
                        if (qbbhssr_hw + col0902 + col1302 > JE) {//不算5% 已经大于起征点了
                            isexceed_fw1 = true;
                        }
                        if (isexceed_fw1) {//不算第四行超过起征点
                            // 实际销售额是否超过水平线 不能输入第10行、第11行
                            DCellWeb1.setCellInputByLabel("F18", 5);
                            DCellWeb1.setCellInputByLabel("F19", 5);
                            DCellWeb1.setValByLabel('F18', 0.00);
                            DCellWeb1.setValByLabel('F19', 0.00);
                        } else if (!isexceed_fw) {//加上第四行还小于起征点
                            DCellWeb1.setCellInputByLabel("F18", 5);
                            DCellWeb1.setCellInputByLabel("F19", 5);
                            if (YGZNSRLX_DM == '20' ) {
                                if (!ISGTGR) {
                                    DCellWeb1.setCellInputByLabel("F18", 2);
                                } else {
                                    DCellWeb1.setCellInputByLabel("F19", 2);
                                }
                            } else if (YGZNSRLX_DM == '22' ) {
                                if (!ISGTGR) {
                                    DCellWeb1.setCellInputByLabel("F18", 2);
                                } else {
                                    DCellWeb1.setCellInputByLabel("F19", 2);
                                }
                            }

                            var sumXse_fw1 = DCellWeb1.getValByLabel("F9") + DCellWeb1.getValByLabel("F18") + DCellWeb1.getValByLabel("F19")
                                + DCellWeb1.getValByLabel("F20") + DCellWeb1.getValByLabel("F21");

                            if (sumXse_fw1 > JE) {//不考虑第四行已经大于起征点
                                var gthmsg = '“服务、不动产和无形资产”列合计销售额大于' + JE + '! ，无法享受免税政策，请检查调整（“服务、不动产和无形资产”列第11行未达起征点销售额）！';
                                var xwqymsg = '“服务、不动产和无形资产”列合计销售额大于' + JE + '! ，无法享受免税政策，请检查调整（“服务、不动产和无形资产”列第10行小微企业免税销售额）！';
                                var msg = ISGTGR ? gthmsg : xwqymsg;
                                alert(msg);
                                return false;
                            }
//								else if(!allisexceed_fw){//考率第四行还小于起征点
//									
//								}else if(sumXse_fw1<=JE && allisexceed_fw){
//									
//								}


//								if (allisexceed_fw) {
//									var gthmsg = '“服务、不动产和无形资产”列合计销售额大于' + JE+ '! ，无法享受免税政策，请检查调整（“服务、不动产和无形资产”列第11行未达起征点销售额）！';
//									var xwqymsg = '“服务、不动产和无形资产”列合计销售额大于' + JE+ '! ，无法享受免税政策，请检查调整（“服务、不动产和无形资产”列第10行小微企业免税销售额）！';
//									var msg = ISGTGR ? gthmsg : xwqymsg;
//									alert(msg);
//									return false;
//								}
                            return true;
                        }
//						}

                    }

//					if(col == 6 ){
//						if ((qbbhssr_fw+qbbhssr_hw+col0902+col1302) > JE)
//							isexceed_fw = true;
//						if (isexceed_fw) {
//							// 实际销售额是否超过水平线 不能输入第10行、第11行
//							DCellWeb1.setCellInputByLabel("F18", 5);
//							DCellWeb1.setCellInputByLabel("F19", 5);
//							DCellWeb1.setValByLabel('F18', 0.00);
//							DCellWeb1.setValByLabel('F19', 0.00);
//						} else {
//							DCellWeb1.setCellInputByLabel("F18", 5);
//							DCellWeb1.setCellInputByLabel("F19", 5);
//							if (YGZNSRLX_DM == '20' || YGZNSRLX_DM == '30') {
//								if (!ISGTGR) {
//									DCellWeb1.setCellInputByLabel("F18", 2);
//								} else {
//									DCellWeb1.setCellInputByLabel("F19", 2);
//								}
//							} else if (YGZNSRLX_DM == '22' || YGZNSRLX_DM == '32') {
//								if (!ISGTGR) {
//									DCellWeb1.setCellInputByLabel("F18", 2);
//								} else {
//									DCellWeb1.setCellInputByLabel("F19", 2);
//								}
//							}
//							//第四栏允许再次录入
//							if (allisexceed_fw && row!=12) {
//								var gthmsg = '“服务、不动产和无形资产”列合计销售额大于' + JE+ '! ，无法享受免税政策，请检查调整（“服务、不动产和无形资产”列第11行未达起征点销售额）！';
//								var xwqymsg = '“服务、不动产和无形资产”列合计销售额大于' + JE+ '! ，无法享受免税政策，请检查调整（“服务、不动产和无形资产”列第10行小微企业免税销售额）！';
//								var msg = ISGTGR ? gthmsg : xwqymsg;
//								alert(msg);
//								return false;
//							}
//						}
//					}

                }

                // 负数控制 控制销售额应大于0
                if ((col >= 4 && col <= 8) && (row >= 9 && row <= 21)) {
                    if (text < 0) {
                        return false;
                    }
                }
                return true;
            };
        },

        // 主要检查一下 数据是否符合要求
        checkData: function () {
            var t8val = Number(DCellWeb1.getValByLabel("E9"));
            var t9val = Number(DCellWeb1.getValByLabel("E10"));
            var t10val = Number(DCellWeb1.getValByLabel("E11"));

            var x8val = Number(DCellWeb1.getValByLabel("F9"));
            var x9val = Number(DCellWeb1.getValByLabel("F10"));
            var x10val = Number(DCellWeb1.getValByLabel("F11"));

            var f12val = Number(DCellWeb1.getValByLabel("F12"));
            var f13val = Number(DCellWeb1.getValByLabel("F13"));
            var f14val = Number(DCellWeb1.getValByLabel("F14"));

            /**
             * （1）货物劳务列，2+3<1强制校验
             * 服务列，2+3<1提示行校验
             */
            if (curSeg.roundTFix((t10val + t9val) - t8val) > 0) {
//				alert("（一）第3栏“税控器具开具的普通发票不含税销售额”与第2栏“税务机关代开的增值税专用发票不含税销售额”之和不应该大于第1栏“应征增值税货物及劳务不含税销售额！");
                alert("（一）第1栏“应征增值税货物及劳务不含税销售额应该大于第3栏“税控器具开具的普通发票不含税销售额”与第2栏“税务机关代开的增值税专用发票不含税销售额”之和！");
                return false;
            }

            if (curSeg.roundTFix((x10val + x9val) - x8val) > 0) {
//				if (!confirm('（一）税控器具开具的普通发票不含税销售额与税务机关代开的增值税专用发票不含税销售额之和大于应征增值税服务不含税销售额！\r\n 是否保存? [确定]保存，[取消]不保存')) {
                if (!confirm('（一）应征增值税服务不含税销售额小于税控器具开具的普通发票不含税销售额与税务机关代开的增值税专用发票不含税销售额之和！\r\n 是否保存? [确定]保存，[取消]不保存')) {
                    return false;
                }
            }

            //新增三行5%征收率判断
            if (curSeg.roundTFix((f14val + f13val) - f12val) > 0) {
//				if (!confirm('（二）税控器具开具的普通发票不含税销售额与税务机关代开的增值税专用发票不含税销售额之和大于应征增值税服务不含税销售额！\r\n 是否保存? [确定]保存，[取消]不保存')) {
                if (!confirm('（二）应征增值税服务不含税销售额小于税控器具开具的普通发票不含税销售额与税务机关代开的增值税专用发票不含税销售额之和！\r\n 是否保存? [确定]保存，[取消]不保存')) {
                    return false;
                }
            }

            //（2）第7栏大于大于第8栏其中项
            if (!DCellWeb1.checkExpress(["E15"], null, ">=", "E16")) {
                alert("（三）销售使用过的应税固定资产不含税销售额必须大于等于其中：税控器具开具的普通发票不含税销售额！");
                return false;
            }
//			// 应税服务
//			if (!DCellWeb1.checkExpress([ "F15" ], null, ">=", "F16")) {
//				alert("（三）销售使用过的应税固定资产不含税销售额必须大于等于其中：税控器具开具的普通发票不含税销售额！");
//				return false;
//			}

            //（3）第13栏大于大于第14栏其中项
            if (!DCellWeb1.checkExpress(["E21"], null, ">=", "E22")) {
                alert("（五）出口免税货物销售额必须大于等于其中：税控器具开具的普通发票销售额！");
                return false;
            }

            if (!DCellWeb1.checkExpress(["F21"], null, ">=", "F22")) {
                alert("（五）出口免税销售额必须大于等于其中：税控器具开具的普通发票销售额！");
                return false;
            }

            //（4）校验代开值
            // 栏次2、5的本期数[应税货物及劳务]列与[应税服务]列相加之和,\n与核心征管系统中的已代开专用发票金额 进行检查
            // 不通过返回false
//			var c0201_02 = parseFloat(DCellWeb1.getValByLabel("E10"))+ parseFloat(DCellWeb1.getValByLabel("F10"))
//					     + parseFloat(DCellWeb1.getValByLabel("F13"));
            // 判断两者的差，误差范围为1
//			if (Math.abs(c0201_02 - parseFloat(YDKZYFPJE)) > 1) {
//				alert("您好：栏次2的本期数[应税货物及劳务]列、[【服务、不动产和无形资产】]列与栏次5的本期数[【服务、不动产和无形资产】]列相加之和" + c0201_02
//						+ ",\n与核心征管系统中的已代开专用发票金额" + YDKZYFPJE + "不相符,请检查!");
//				return false;
//			}

            //20160630 lijunbo 3%、5%两行分别区分判断，20170706 孙文  分开判断先去掉
         /*   var h02_02 = parseFloat(DCellWeb1.getValByLabel("F10"));
            // 判断两者的差，误差范围为1
            if (h02_02 - parseFloat(YSFWFPDKBHSXSE3) < 0) {
                alert("您好：栏次2的本期数[服务、不动产和无形资产]列" + h02_02
                    + ",\n应大于等于核心征管系统中的“服务、不动产和无形资产(3%)”已代开专用发票金额" + YSFWFPDKBHSXSE3 + "请检查!");
                return false;
            }
            var h02_05 = parseFloat(DCellWeb1.getValByLabel("F13"));
            if (h02_05 - parseFloat(YSFWFPDKBHSXSE5) < 0) {
                alert("您好：栏次5的本期数[服务、不动产和无形资产]列相加之和" + h02_05
                    + ",\n应大于等于核心征管系统中的“服务、不动产和无形资产(5%)”已代开专用发票金额" + YSFWFPDKBHSXSE5 + "请检查!");
                return false;
            }*/

//			var c0201_02 = curSeg.roundTFix(parseFloat(DCellWeb1.getValByLabel("F10"))+ parseFloat(DCellWeb1.getValByLabel("F13")));
            var c0201_02 = curSeg.accAddSw(DCellWeb1.getValByLabel("F10") + DCellWeb1.getValByLabel("F13"));
            // 判断两者的差，误差范围为1
            if (c0201_02 - parseFloat(YSFWFPDKBHSXSE) < 0) {
                alert("您好：栏次2的本期数[服务、不动产和无形资产]列与栏次5的本期数[服务、不动产和无形资产]列相加之和" + c0201_02
                    + ",\n应大于等于税务机关系统中的“服务、不动产和无形资产”已代开专用发票金额" + YSFWFPDKBHSXSE + "请检查!");
                return false;
            }

            //（5）校验免税额
            // 其他免税额为0时，分别校验14行本期值=15+16
            var h1201 = parseFloat(DCellWeb1.getValByLabel("E20"));
            if (h1201 == 0) {
                var diff = Math.abs(DCellWeb1.getValByLabel("E25") - DCellWeb1.getValByLabel("E26")
                    - DCellWeb1.getValByLabel("E27"));
                diff = hlwsbTools.formatFloatData(diff, 6).toFixed(2)
                if (diff > 0) {
                    alert("【货物及劳务】第十七栏本期数应等于第十八栏本期数与第十九栏本期数之和！");
                    return false;
                }
            }

            //服务列本期：若第九行免税销售额为0，则17行本期免税额应为0
            if (COL0104BZ == 'Y') {
                var h02_09 = curSeg.roundTFix(DCellWeb1.getValByLabel("F17") * 0.05);
                var zsl = 0.05;
            }
            else {
                var h02_09 = curSeg.roundTFix(DCellWeb1.getValByLabel("F17") * 0.03);
                var zsl = 0.03;
            }
            /*	var h0902 = parseFloat(DCellWeb1.getValByLabel("F17"));*/
            var h1702 = parseFloat(DCellWeb1.getValByLabel("F25"));
            /*if(h0902==0 && h1702 != 0){
             alert("【服务、不动产和无形资产】第九栏本期数“免税销售额等于0时”，第十七栏本期数“本期免税额”应等于0！");
             return false;
             }*/
            if (h1702 > h02_09) {
                alert("17栏的本期免税额，本期数[服务、不动产和无形资产]列，不应>第9栏免税销售额，本期数的服务、不动产和无形资产*" + zsl + "请检查!");
                return false;
            }

            var h1202 = parseFloat(DCellWeb1.getValByLabel("F20"));
            if (h1202 == 0) {
                var diff = Math.abs(DCellWeb1.getValByLabel("F25") - DCellWeb1.getValByLabel("F26")
                    - DCellWeb1.getValByLabel("F27"));
                if (diff > 0) {
                    alert("【服务、不动产和无形资产】第十七栏本期数应等于第十八栏本期数与第十九栏本期数之和！");
                    return false;
                }
            }
            var e10val = Number(DCellWeb1.getValByLabel("E10"));
            if(curSeg.roundTFix(e10val)<curSeg.roundTFix(YSHWLWFPDKBHSXSE)){
                alert("第2栏的本期数[货物及劳务]列" + e10val
                + ",应大于等于税务机关系统\n中的“货物及劳务”已代开专用发票金额" + YSHWLWFPDKBHSXSE + "请检查!");
                return false;
            }
            // （6）验证第15应纳税额栏的值
            var result = curSeg.checkYnse();
            if (!result.result) {
                alert(result.errorMsg);
                return false;
            }
            // （7）校验起征点
            if (!curSeg.checkQzdyh())
                return false;

            // （8）校验减征额
            if (!curSeg.checkJze())
                return false;
            /**
             * 新增待一切正常后校验17、18、19填写是否正确
             */
            if (!curSeg.checkMse())
                return false;

            return true;
        },

        accAddSw: function (arg1, arg2) {
            var r1, r2, m;
//        	arg1 = 137425.58;
//        	arg2 = 6925.27;
            try {
                r1 = arg1.toString().split(".")[1].length
            } catch (e) {
                r1 = 0
            }
            ;
            try {
                r2 = arg2.toString().split(".")[1].length
            } catch (e) {
                r2 = 0
            }
            ;
            if (r1 == 0 && r2 == 0) {
                m = 1;
            } else {
                m = Math.pow(10, Math.max(r1, r2) + 1);
            }
            return (arg1 * m + arg2 * m) / m;
        },

        checkMse: function () {
            var h1002 = parseFloat(DCellWeb1.getValByLabel("F18"));
            var h1102 = parseFloat(DCellWeb1.getValByLabel("F19"));
            if (h1002 + h1102 > JE) {
                alert("【服务、不动产和无形资产】本期数第10行与第11行应小于等于" + JE + "！");
                return false;
            }

            //如果应税服务 10、11有值。校验18、19
            var h1802 = parseFloat(DCellWeb1.getValByLabel("F26"));
            var h1902 = parseFloat(DCellWeb1.getValByLabel("F27"));
            if (h1002 > 0 && h1802 == 0) {
                alert("【服务、不动产和无形资产】本期数第10行大于0，第18行“小微企业免税额不能等于0！”");
                return false;
            }

            if (COL0102BZ == "Y" && COL0104BZ == "N") {//只有3%的，校验免税额= 免税销售额*0.03
                if (!ISGTGR) {
                    var diff = Math.abs(DCellWeb1.getValByLabel("F26") - hlwsbTools.cont(DCellWeb1.getValByLabel("F18")
                            + '*' + 0.03));
                    if (diff > 1) {
                        alert("【服务、不动产和无形资产】第十八栏本期数应等于第十栏本期数*0.03！");
                        return false;
                    }
                } else {
                    var diff = Math.abs(DCellWeb1.getValByLabel("F27") - hlwsbTools.cont(DCellWeb1.getValByLabel("F19")
                            + '*' + 0.03));
                    if (diff > 1) {
                        alert("【服务、不动产和无形资产】第十九栏本期数应等于第十一栏本期数*0.03！");
                        return false;
                    }
                }
            } else if (COL0102BZ == "N" && COL0104BZ == "Y") {
                if (!ISGTGR) {
                    var diff = Math.abs(DCellWeb1.getValByLabel("F26") - hlwsbTools.cont(DCellWeb1.getValByLabel("F18")
                            + '*' + 0.05));
                    if (diff > 1) {
                        alert("【服务、不动产和无形资产】第十八栏本期数应等于第十栏本期数*0.05！");
                        return false;
                    }
                } else {
                    var diff = Math.abs(DCellWeb1.getValByLabel("F27") - hlwsbTools.cont(DCellWeb1.getValByLabel("F19")
                            + '*' + 0.05));
                    if (diff > 1) {
                        alert("【服务、不动产和无形资产】第十九栏本期数应等于第十一栏本期数*0.05！");
                        return false;
                    }
                }
            } else if (COL0102BZ == "Y" && COL0104BZ == "Y") {
                if (!ISGTGR) {
                    var mse3 = hlwsbTools.cont(DCellWeb1.getValByLabel("F18") + '*' + 0.03);
                    var mse5 = hlwsbTools.cont(DCellWeb1.getValByLabel("F18") + '*' + 0.05);
                    var mse = DCellWeb1.getValByLabel("F26");
                    if (mse < mse3 || mse > mse5) {
                        alert("【应税服务】第十八栏本期数应大于等于第十栏本期数*0.03，小于等于第十栏本期数*0.05");
                        return false;
                    }
                } else {
                    var mse3 = hlwsbTools.cont(DCellWeb1.getValByLabel("F19") + '*' + 0.03);
                    var mse5 = hlwsbTools.cont(DCellWeb1.getValByLabel("F19") + '*' + 0.05);
                    var mse = DCellWeb1.getValByLabel("F27");
                    if (mse < mse3 || mse > mse5) {
                        alert("【应税服务】第十九栏本期数应大于等于第十一栏本期数*0.03，小于等于第十一栏本期数*0.05");
                        return false;
                    }
                }
            }

            //针对服务不动产列，增加一个通用校验，不再区分上述情况。因为金三存在该校验，且不允许误差出现。
            //对于网报端，如果企业改小免税额，金三申报会校验不过。20170106lijunbo
            var h10 = hlwsbTools.cont(DCellWeb1.getValByLabel("F18") + '*' + 0.03);
            var h11 = hlwsbTools.cont(DCellWeb1.getValByLabel("F19") + '*' + 0.03);
            var h18 = DCellWeb1.getValByLabel("F26");
            var h19 = DCellWeb1.getValByLabel("F27");
            if (h18 < h10) {
                alert("【应税服务】第十八栏本期数不允许小于第十栏本期数*0.03");
                return false;
            }
            if (h19 < h11) {
                alert("【应税服务】第十九栏本期数不允许小于第十一栏本期数*0.03");
                return false;
            }


            if (h1002 == 0 && h1802 > 0) {
                alert("【服务、不动产和无形资产】本期数第10行等于0，第18行“小微企业免税额应等于0！”");
                return false;
            }

            if (h1102 > 0 && h1902 == 0) {
                alert("【服务、不动产和无形资产】本期数第11行大于0，第19行“未达起征点免税额不能等于0！”");
                return false;
            }

            if (h1102 == 0 && h1902 > 0) {
                alert("【服务、不动产和无形资产】本期数第11行等于0，第19行“小微企业免税额应等于0！”");
                return false;
            }

            var h1202 = parseFloat(DCellWeb1.getValByLabel("F20"));

            if (h1202 == 0) {
                var diff = Math.abs(DCellWeb1.getValByLabel("F25") - DCellWeb1.getValByLabel("F26")
                    - DCellWeb1.getValByLabel("F27"));
                if (diff > 0) {
                    alert("【服务、不动产和无形资产】第十七栏本期数应等于第十八栏本期数与第十九栏本期数之和！");
                    return false;
                }
            }

            //如果小薇或未达起征点有值，应控制1=2，
            var h0102 = parseFloat(DCellWeb1.getValByLabel("F9"));
            var h0202 = parseFloat(DCellWeb1.getValByLabel("F10"));

            if (h1002 + h1102 > 0) {
                if (h0102 > h0202 + 1) {
                    alert("您享受了小微减免，【服务、不动产和无形资产】第一栏本期数应等于第二栏本期数【误差1元】！");
                    return false;
                }
            }
            var h0302 = parseFloat(DCellWeb1.getValByLabel("F11"));
            /**
             *当附表第5栏大于0时，第5栏/（1+3%）应大于等于第2栏、第3栏之和。
             　　　　         *当附表第5栏等于0时，第1栏应大于等于第2栏、第3栏之和。
             　　　　         *以上，如纳税人符合小微企业优惠政策，则应大于等于第2栏。
             *以上，监控同时适用于第4、5、6栏监控，此时附表取值口径为第13栏/（1+5%）。
             *暂按提示性监控
             */
//			var FB1QBHSSR_HW = '';
            var FB1QBHSSR_FW = '';
            if (FB1QBHSSR_HW > 0 && (FB1QBHSSR_HW - h0202 - h0302 < 0)) {
                if (!confirm('附列资料第5栏大于0时，主表“服务、不动产和无形资产”列第2栏、第3栏之和应小于等于附列资料第5栏/（1+3%）！\r\n 是否保存? [确定]保存，[取消]不保存')) {
                    return false;
                }
            }
            if (FB1QBHSSR_HW == 0 && (h0102 - h0202 - h0302 < 0)) {
                if (!confirm('附列资料第5栏等于0时，主表“服务、不动产和无形资产”列第1栏应大于等于主表“服务、不动产和无形资产”列第2栏、第3栏之和！\r\n 是否保存? [确定]保存，[取消]不保存')) {
                    return false;
                }
            }
            var h0402 = parseFloat(DCellWeb1.getValByLabel("F12"));
            var h0502 = parseFloat(DCellWeb1.getValByLabel("F13"));
            var h0602 = parseFloat(DCellWeb1.getValByLabel("F14"));
            if (FB1QBHSSR_FW > 0 && (FB1QBHSSR_FW - h0502 - h0602 < 0)) {
                if (!confirm('附列资料第13栏大于0时，主表“服务、不动产和无形资产”列第5栏、第6栏之和应小于等于附列资料第13栏/（1+5%）！\r\n 是否保存? [确定]保存，[取消]不保存')) {
                    return false;
                }
            }
            if (FB1QBHSSR_FW == 0 && (h0402 - h0502 - h0602 < 0)) {
                if (!confirm('附列资料第13栏等于0时，主表“服务、不动产和无形资产”列第4栏应大于等于主表“服务、不动产和无形资产”列第5栏、第6栏之和！\r\n 是否保存? [确定]保存，[取消]不保存')) {
                    return false;
                }
            }

            return true;
        },

        // 验证第15行1,2列的值
        checkYnse: function () {

            var msg = '';
            var flag = true;
            //固定资产改为最高税率计算，不再是固定值。对于逾期未认定一般人的企业 20161227 lijunbo 封确认
            //15行
            // 第十五栏本期数应等于第一栏本期数*征收率与第七栏本期数*3%之和,
            var diff = Math.abs(DCellWeb1.getValByLabel("E23") - (hlwsbTools.cont(DCellWeb1.getValByLabel("E9")
                    + '*' + yzhwxsezsl) + hlwsbTools.cont(DCellWeb1.getValByLabel("E15") + ' * 0.03')));
//			var diff = Math.abs(DCellWeb1.getValByLabel("E23")- (hlwsbTools.cont(DCellWeb1.getValByLabel("E9") 
//			 + '*'+ yzhwxsezsl) + hlwsbTools.cont(DCellWeb1.getValByLabel("E15")+ ' * '+yzhwxsezsl)));
            if (diff > 1) {
                msg = "【货物及劳务】第十五栏本期数应等于第一栏本期数*" + (yzhwxsezsl * 100) + "%与第七栏本期数*3%之和！";
                flag = false;
            }
//			if (diff > 1) {
//				msg = "【货物及劳务】第十五栏本期数应等于第一栏本期数*" + (yzhwxsezsl * 100)+ "%与第七栏本期数*"+(yzhwxsezsl * 100)+"%之和！";
//				flag = false;
//			}
            // 提示信息一次只提示一个错误，所以上面的都通过后再判断应税服务
            if (flag) {

//				var diff = Math.abs(parseFloat(parseFloat(DCellWeb1.getValByLabel("F23"))
//						 -( parseFloat(hlwsbTools.cont(DCellWeb1.getValByLabel("F9") + '*'+ yzfwxsezsl)
//						 + hlwsbTools.cont(DCellWeb1.getValByLabel("F12")+ ' * 0.05')) )));
//				if (diff > 1) {
//					msg = "【服务、不动产和无形资产】第十五栏本期数:应等于第一栏本期数*" + (yzfwxsezsl * 100)+ "%与第四栏本期数*5%之和！";
//					flag = false;
//				}
                var diff = Math.abs(parseFloat(parseFloat(DCellWeb1.getValByLabel("F23"))
                    - ( parseFloat(hlwsbTools.cont(DCellWeb1.getValByLabel("F9") + '*' + yzfwxsezsl)
                        + hlwsbTools.cont(DCellWeb1.getValByLabel("F12") + ' * ' + yzfwxsezsl5)) )));
                if (diff > 1) {
                    msg = "【服务、不动产和无形资产】第十五栏本期数:应等于第一栏本期数*" + (yzfwxsezsl * 100) + "%与第四栏本期数*" + yzfwxsezsl5 + "%之和！";
                    flag = false;
                }
            }

            return {
                'result': flag,
                'errorMsg': msg
            };
        },

        // 起征点优惠
        checkQzdyh: function () {
            // 第1行第1栏的值
            var col0101 = DCellWeb1.getValByLabel("E9");
            // 第1行第2栏的值
            var col0102 = DCellWeb1.getValByLabel("F9");

            // 代开专用发票 货物销售额
            var col0201 = DCellWeb1.getValByLabel("E10");
            // 代开专用发票 服务销售额
            var col0202 = DCellWeb1.getValByLabel("F10");

            var col0402 = DCellWeb1.getValByLabel("F12");
            var col0502 = DCellWeb1.getValByLabel("F13");

            // 固定置产销售额
            var col0701 = DCellWeb1.getValByLabel("E15");

            // 免税货物销售额合计
            var col0901 = DCellWeb1.getValByLabel("E18") + DCellWeb1.getValByLabel("E19") + DCellWeb1.getValByLabel("E20");
            // 免税劳务销售额合计
            var col0902 = DCellWeb1.getValByLabel("F18") + DCellWeb1.getValByLabel("F19") + DCellWeb1.getValByLabel("F20");

            // 小微企业免税销售额
            var col1001 = DCellWeb1.getValByLabel("E18");
            var col1002 = DCellWeb1.getValByLabel("F18");
            // 未达起征点销售额
            var col1101 = DCellWeb1.getValByLabel("E19");
            var col1102 = DCellWeb1.getValByLabel("F19");
            // 其他销售额
            var col1201 = DCellWeb1.getValByLabel("E20");
            var col1202 = DCellWeb1.getValByLabel("F20");
            // 出口免税销售额
            var col1301 = DCellWeb1.getValByLabel("E21");
            var col1302 = DCellWeb1.getValByLabel("F21");

            // 实际销售额
            var sumDealXse_hw = col0101 + col0701 + col1201 + col1301;
            var sumDealXse_fw = col0102 + col0402 + col1202 + col1302;

            // 合计销售额
//			var sumXse = col0101 + col0102 + col0401 + col0601 + col0602+ col1001 + col1002;
            var sumXse_hw = col0101 + col0701 + col0901 + col1301;
            var sumXse_fw = col0102 + col0402 + col0902 + col1302;
            // 个体是起征点 大于等于不优惠 企业 是 优惠政策 大于不优惠

            // 实际销售额是否超过水平线
//			var isexceed_hw = sumDealXse_hw > JE;
            var isexceed_hw = sumDealXse_hw > YSHWQZD;
            var isexceed_fw = sumDealXse_fw > JE;
            // 合计销售额是否超过水平线
//			var allisexceed_hw = sumXse_hw > JE;
            var allisexceed_hw = sumXse_hw > YSHWQZD;
            var allisexceed_fw = sumXse_fw > JE;

            var qbbhssr_hw = curSeg.roundTFix(FB1QBHSSR_HW / 1.03);
            var qbbhssr_fw = curSeg.roundTFix(FB1QBHSSR_FW / 1.05);
//			if (qbbhssr_hw > JE){isexceed_hw = true;}
            /**
             * 扈天超要求加上12行、13行
             */
            if ((qbbhssr_fw + qbbhssr_hw + col1202 + col1302) > JE) {
                isexceed_fw = true;
            }

            // 封老师确认小微企业免税销售额（未达起征点销售额）不再和税务机关代开专票存在关系（因为无法确定代开发票是否是扣除项）
            // 附列资料有扣除项 第一行可以小于第二行

            //货物劳务
            if (!isexceed_hw) { // 实际销售额没有超过水平线 需要优惠
                if (allisexceed_hw) { // 输入免税额过大
//					var gthmsg = '“劳务及货物”列合计销售额大于' + JE+ '! ，无法享受免税政策，请检查调整（“劳务及货物”列第11行未达起征点销售额）！';
//					var xwqymsg = '“劳务及货物”列合计销售额大于' + JE+ '! ，无法享受免税政策，请检查调整（“劳务及货物”列第10行小微企业免税销售额）！';
                    var gthmsg = '“劳务及货物”列合计销售额大于' + YSHWQZD + '! ，无法享受免税政策，请检查调整（“劳务及货物”列第11行未达起征点销售额）！';
                    var xwqymsg = '“劳务及货物”列合计销售额大于' + YSHWQZD + '! ，无法享受免税政策，请检查调整（“劳务及货物”列第10行小微企业免税销售额）！';
                    var msg = ISGTGR ? gthmsg : xwqymsg;
                    alert(msg);
                    return false;
                } else {
                    // 是否还可以享受优惠
                    var isDiscount = !(YDKZYFPJE > 0 ? (col0701 == 0) && (col0101 <= col0201 + 1) : (col0701 == 0) && (col0101 == 0));
                    if (isDiscount) {// 可以继续享受优惠
                        // 用户确认是否享受优惠
                        // 2015-04-07 封老师确认 将未达起征点优惠政策改为强制
//						var gthmsg0 = '“货物及劳务”列销售额小于等于'+ JE+ '!，未达到起征点，暂免征收增值税!。\r\n（第11行）(未达起征点销售额)自动录入免税销售额';
//						var gthmsg1 = '“货物及劳务”列销售额小于等于'+ JE+ '!，未达到起征点，暂免征收增值税!。\r\n（第11行）(未达起征点销售额)自动录入免税销售额';
//						var xwqymsg0 = '“货物及劳务”列销售额小于等于' + JE+ '!，暂免征收增值税!。\r\n（第10行）(小微企业免税销售额)自动录入免税销售额';
//						var xwqymsg1 = '“货物及劳务”列销售额小于等于' + JE+ '!，暂免征收增值税!。\r\n（第10行）(小微企业免税销售额)自动录入免税销售额';
                        var gthmsg0 = '“货物及劳务”列销售额小于等于' + YSHWQZD + '!，未达到起征点，暂免征收增值税!。\r\n（第11行）(未达起征点销售额)自动录入免税销售额';
                        var gthmsg1 = '“货物及劳务”列销售额小于等于' + YSHWQZD + '!，未达到起征点，暂免征收增值税!。\r\n（第11行）(未达起征点销售额)自动录入免税销售额';
                        var xwqymsg0 = '“货物及劳务”列销售额小于等于' + YSHWQZD + '!，暂免征收增值税!。\r\n（第10行）(小微企业免税销售额)自动录入免税销售额';
                        var xwqymsg1 = '“货物及劳务”列销售额小于等于' + YSHWQZD + '!，暂免征收增值税!。\r\n（第10行）(小微企业免税销售额)自动录入免税销售额';
                        var nowDiscount = col1001 + col1101;
                        var maxDiscount = nowDiscount + col0701 + col0101 - col0201 + col1301;
                        var diff = maxDiscount - nowDiscount;
                        var msg = '';
                        if (ISGTGR) {
                            msg = (col1101) == 0 ? gthmsg0 : gthmsg1;
                        } else {
                            msg = (col1001) == 0 ? xwqymsg0 : xwqymsg1;
                        }
                        // 确认录入免税额
                        // 不是银行业 才验证
                        if (ISYHY == false) {
                            alert(msg);
                            //因新增2016营改增类型代码，需调整该段代码
//							var mscol = ISGTGR ? (YGZNSRLX_DM == '10' ? 'E19': '')
//								: (YGZNSRLX_DM == '10' ? 'E18': '');
                            DCellWeb1.setValByLabel("E11", 0);
                            DCellWeb1.setValByLabel("E15", 0);
                            DCellWeb1.setValByLabel("E16", 0);
                            DCellWeb1.setValByLabel("E21", 0);
                            DCellWeb1.setValByLabel("E22", 0);
//							if ( (YGZNSRLX_DM != '22') && (YGZNSRLX_DM != '32')) {// 不是混营业
//								DCellWeb1.setValByLabel(mscol, nowDiscount+ diff);
//							} else {
                            /**
                             * 20160516
                             * 业务敲定：需减去其他免税额。
                             *
                             * 20170703 投资大厦3楼5号会议室 张志森打电话，封老师确认，免税销售额的修改误差，小于1块钱不再放到10、11栏
                             * 如果修改误差大于1块钱，将多余的分到10、11栏，如果修改误差小于1块钱，第1栏不再按第2栏的值，按微调的值
                             */
                            var wc = (col0101 + col0701 + col1301 - col0201);
                            if ((wc > 1 && col0201 != 0) || col0201 == 0) {
                                DCellWeb1.setValByLabel("E9", col0201);
                                if (!ISGTGR) {
//									DCellWeb1.setValByLabel("E18",(col0101 + col0701 + col0901+ col1301 - col0201-col1201));
                                    DCellWeb1.setValByLabel("E18", wc.toFixed(2));
                                } else {
//									DCellWeb1.setValByLabel("E19",(col0101 + col0701 + col0901+ col1301 - col0201-col1201));
                                    DCellWeb1.setValByLabel("E19", wc.toFixed(2));
                                }
                            } else {
                                DCellWeb1.setValByLabel("E9", col0101);
                            }
//							}
//						return true;
                        }
                    }
                }
            } else {// 实际销售额超过水平线
                // 超过警戒线 判断起征点行 与 小微企业免税行是否有值 有值 提示错误 //此时无法回推销售额 因为有固定资产
                if ((col1001 + col1101) > 0) {
//					var gthmsg = '“货物及劳务”列销售额大于' + JE + '! ，（第11行“货物及劳务”列未达起征点销售额）为0，请检查调整！';
//					var xwqymsg = '“货物及劳务”列销售额大于' + JE + '! ，（第10行“货物及劳务”列小微企业免税销售额）为0，请检查调整！';
                    var gthmsg = '“货物及劳务”列销售额大于' + YSHWQZD + '! ，（第11行“货物及劳务”列未达起征点销售额）为0，请检查调整！';
                    var xwqymsg = '“货物及劳务”列销售额大于' + YSHWQZD + '! ，（第10行“货物及劳务”列小微企业免税销售额）为0，请检查调整！';
                    var msg = ISGTGR ? gthmsg : xwqymsg;
                    alert(msg);
                    return false;
                }
            }

            //应税服务
            var isexceed_fw1 = false;
            if ((qbbhssr_hw + col1202 + col1302) > JE) {
                isexceed_fw1 = true;
            }
            if (!isexceed_fw) { // 实际销售额没有超过水平线 需要优惠
                var sumXse_fw1 = col0102 + col0902 + col1302;
                allisexceed_fw = sumXse_fw1 > JE;
                if (allisexceed_fw) { // 输入免税额过大
                    var gthmsg = '“服务、不动产和无形资产”列合计销售额大于' + JE + '! ，无法享受免税政策，请检查调整（“劳务及货物”列第11行未达起征点销售额）！';
                    var xwqymsg = '“服务、不动产和无形资产”列合计销售额大于' + JE + '! ，无法享受免税政策，请检查调整（“劳务及货物”列第10行小微企业免税销售额）！';
                    var msg = ISGTGR ? gthmsg : xwqymsg;
                    alert(msg);
                    return false;
                } else {
                    // 是否还可以享受优惠
                    //20170704 胡晓杰确认col0102<=col0202+1，原col0102<=col0202
//					var isDiscount = !(YDKZYFPJE > 0 ?((col0102+col0402) <= (col0202+col0502)): (col0102+col0402 == 0));
                    var isDiscount = !(YDKZYFPJE > 0 ? ((col0102 <= col0202 + 1) && (col0402 <= col0502 + 1)) : (col0102 + col0402 == 0));
                    if (isDiscount) {// 可以继续享受优惠
                        // 用户确认是否享受优惠
                        // 2015-04-07 封老师确认 将未达起征点优惠政策改为强制
                        var gthmsg0 = '“服务、不动产和无形资产”列销售额小于等于' + JE + '!，未达到起征点，暂免征收增值税!。\r\n（第11行）(未达起征点销售额)自动录入免税销售额';
                        var gthmsg1 = '“服务、不动产和无形资产”列销售额小于等于' + JE + '!，未达到起征点，暂免征收增值税!。\r\n（第11行）(未达起征点销售额)自动录入免税销售额';
                        var xwqymsg0 = '“服务、不动产和无形资产”列销售额小于等于' + JE + '!，暂免征收增值税!。\r\n（第10行）(小微企业免税销售额)自动录入免税销售额';
                        var xwqymsg1 = '“服务、不动产和无形资产”列销售额小于等于' + JE + '!，暂免征收增值税!。\r\n（第10行）(小微企业免税销售额)自动录入免税销售额';
                        var nowDiscount = col1002 + col1102;
                        var maxDiscount = nowDiscount + col0102 - col0202 + col0402 - col0502 + col1302;
                        var diff = maxDiscount - nowDiscount;
                        var msg = '';
                        if (ISGTGR) {
                            msg = (col1102) == 0 ? gthmsg0 : gthmsg1;
                            if (COL0104BZ == "Y") {//2016.07.02 //5%征收率手动输入

                                msg = '“服务、不动产和无形资产”列销售额小于等于' + JE + '!，暂免征收增值税!。\r\n（第11行）(小微企业免税销售额)手动录入免税销售额';
                            }
                        } else {
                            msg = (col1002) == 0 ? xwqymsg0 : xwqymsg1;
                            if (COL0104BZ == "Y") {//2016.07.02 //5%征收率手动输入

                                msg = '“服务、不动产和无形资产”列销售额小于等于' + JE + '!，暂免征收增值税!。\r\n（第10行）(小微企业免税销售额)手动录入免税销售额';
                            }
                        }


                        // 确认录入免税额
                        // 不是银行业 才验证
                        if (ISYHY == false) {
                            alert(msg);
                            //因新增2016营改增类型代码，需调整该段代码
//							var mscol = ISGTGR ? (YGZNSRLX_DM == '10' ? 'E19': '')
//								: (YGZNSRLX_DM == '10' ? 'E18': '');
                            DCellWeb1.setValByLabel("F9", col0202);
//							DCellWeb1.setValByLabel("F12",0);
                            DCellWeb1.setValByLabel("F11", 0);
//							DCellWeb1.setValByLabel("F12",col0502);
                            DCellWeb1.setValByLabel("F14", 0);
                            DCellWeb1.setValByLabel("F21", 0);
                            DCellWeb1.setValByLabel("F22", 0);
//							if ( (YGZNSRLX_DM != '22') && (YGZNSRLX_DM != '32')) {// 不是混营业
//								DCellWeb1.setValByLabel(mscol, nowDiscount+ diff);
//							} else {
                            if (!ISGTGR) {
                                /**
                                 * 20160516
                                 * 业务敲定：需减去其他免税额。
                                 */(col0101 + col0701 + col1301 - col0201);
//									DCellWeb1.setValByLabel("F18",(col0102 + col0402-col0502+col0902+ col1302 - col0202-col1202));
//									var col1802 = (col0102+col1302-col0202)*0.03+(col0402-col0502)*0.05;
                                //20170711 jh 免税不能为负值
                                if (col0102 == 0&&(col0102 + col0902 + col1302 - col0202 - col1202)>=0) {
                                    DCellWeb1.setValByLabel("F18", (col0102 + col0902 + col1302 - col0202 - col1202).toFixed(2));
                                } else if (col0102 == col0202) {

                                    DCellWeb1.setValByLabel("F18", (col0102 + col0902 + col1302 - col0202 - col1202).toFixed(2));
                                } else if (COL0104BZ == "Y") {//5%征收率手动输入。 20170711姜航 5%税率的第一栏不再控制 ，填啥是啥
                                    DCellWeb1.setValByLabel("F9", col0102);
                                } else {
                                    var wc = col0102 + col0902 + col1302 - col0202 - col1202;
                                    //代开的误差大于1或者没有代开的 销售额带到10栏，代开微调 不放到10栏
                                    if ((wc > 1 && col0202 != 0) || col0202 == 0) {
                                        DCellWeb1.setValByLabel("F9", col0202);
                                        DCellWeb1.setValByLabel("F18", wc.toFixed(2));
                                    } else {
                                        DCellWeb1.setValByLabel("F9", col0102);
                                    }
                                }
//									var col1802 = (col0102+col1302-col0202)*0.03;
//									DCellWeb1.setValByLabel("F26",col1802);
                            } else {

//									DCellWeb1.setValByLabel("F19",(col0102 + col0402-col0502+col0902+col1302 - col0202-col1202));
//									var col1902 = (col0102+col1302-col0202)*0.03+(col0402-col0502)*0.05;
                                if (col0102 == 0) {
                                    DCellWeb1.setValByLabel("F19", (col0102 + col0902 + col1302 - col0202 - col1202).toFixed(2));
                                } else if (col0102 == col0202) {
                                    DCellWeb1.setValByLabel("F19", (col0102 + col0902 + col1302 - col0202 - col1202).toFixed(2));
                                } else if (COL0104BZ == "Y") {
                                }
                                else {
                                    DCellWeb1.setValByLabel("F19", (col0102 + col1302 - col0202).toFixed(2));
                                }
//									var col1902 = (col0102+col1302-col0202)*0.03;
//									DCellWeb1.setValByLabel("F26",col1902);
                            }
//							}
                            return true;
                        }
                    }
                }
            } else {// 实际销售额超过水平线
                // 超过警戒线 判断起征点行 与 小微企业免税行是否有值 有值 提示错误 //此时无法回推销售额 因为有固定资产
                if (isexceed_fw1 || (col0102 + col0902 + col1302 > JE)) {
                    if ((col1002 + col1102) > 0) {
                        var gthmsg = '“服务、不动产和无形资产”列销售额大于' + JE + '! ，（第11行“服务、不动产和无形资产”列未达起征点销售额）为0，请检查调整！';
                        var xwqymsg = '“服务、不动产和无形资产”列销售额大于' + JE + '! ，（第10行“服务、不动产和无形资产”列小微企业免税销售额）为0，请检查调整主表和附列资料数据！';
                        var msg = ISGTGR ? gthmsg : xwqymsg;
                        alert(msg);
                        return false;
                    }
                }
            }

            return true;
        },
        roundTFix: function (value) {
            if (!isNaN(value)) {
                return parseFloat(Number(Number(value).toFixed(3)).toFixed(2));
            } else {
                return value;
            }
        },
        // 校验减征额
        checkJze: function () {
            // 默认值
            // var c1301 = curSeg.roundTFix(DCellWeb1.getValByLabel("E23") - DCellWeb1.getValByLabel("E10") * 0.03);
            // c1301 = c1301 < 0 ? 0 : c1301;
            // var t20 = parseFloat(DCellWeb1.getValByLabel("E24"));
            // if (t20 > c1301) {
            //     alert("16栏【货物及劳务】减征额不应该大于第15栏-第2栏*0.03");
            //     return false;
            // }
            /*20180426因企业税控盘和自开票部分无法填写，开启一窗式比对后该校验暂时取消
            var c1302 = curSeg.roundTFix(DCellWeb1.getValByLabel("F23") - DCellWeb1.getValByLabel("F10") * 0.03
                - DCellWeb1.getValByLabel("F13") * 0.05);
            c1302 = c1302 < 0 ? 0 : c1302;
            var x20 = parseFloat(DCellWeb1.getValByLabel("F24"));
            if (x20 > c1302) {
                alert("16栏【应税服务】减征额不应该大于第15栏-第2栏*0.03-第5栏*0.05");
                return false;
            }*/
            return true;
        },

        // 初始化累计数
        initLjs: function (jsonObj) {
            var ljs = jsonObj.data.LJS;
            DCellWeb1.initSNLJ([{
                bys: "BQS_YSHWJLW",
                bnlj: "BNLJ_YSHWJLW"
            }, {
                bys: "BQS_YSFW",
                bnlj: "BNLJ_YSFW"
            }], ljs);
            var jk_ljs = jsonObj.data.JK_LJS;
            DCellWeb1.initSNLJ([{
                //bys : "BQS_YSHWJLW",
                bnlj: "JK_BNLJ_YSHWJLW"
            }, {
                //bys : "BQS_YSFW",
                bnlj: "JK_BNLJ_YSFW"
            }], jk_ljs);
        },
        // 禁用表单按钮
        disableButton: function () {
            // 禁用表单的按钮
            var inputList = document.getElementsByTagName('input')
            for (var i = 0; i < inputList.length; i++) {
                inputList[i].disabled = true;
            }
        },
        initannotation: function () {
            // 第2行本期
            DCellWeb1.setCellannotation('E10', "从税务机关提取数据");
            DCellWeb1.setCellannotation('F10', "从税务机关提取数据");
            DCellWeb1.setCellannotation('F13', "从税务机关提取数据");
            // 第21行本期
            DCellWeb1.setCellannotation('E29', "从税务机关提取数据");
            DCellWeb1.setCellannotation('F29', "从税务机关提取数据");

        },

        formatFloatSw: function (f, digit) {
            var m = Math.pow(10, digit);
            return parseInt(f * m, 10) / m;

        },
        //填表顺序
        onOpenTbsxsm: function () {
//            msg = "增值税（小规模纳税人适用）申报表填表顺序";
//            var winParam = {
//                id: 'winTbsxsm', title: msg,
//                url: '/hlwsb/bbsxsm/zzs_xgmnsr_2016.html',
//                width: 500,
//                height: 330
//            };
//            winObj = baseTools.showWinExt(winParam);
//            $(winObj.DOM.wrap).bgiframe({
//                width: 520,
//                height: 380
//            });
//        	var iTop =  200;
//			var iLeft = window.screen.availWidth - 1000;
//			window.open("/hlwsb/bbsxsm/zzs_xgmnsr_2016.html",'','height=330,innerHeight=300,width=520,innerWidth=500,top='+iTop+',left='+iLeft);
			
			window.showModalDialog("/hlwsb/bbsxsm/zzs_xgmnsr_2016.html",'',"dialogWidth=520px;dialogHeight=330px;center:yes;status:no;scroll:no;");
        },
//导入
        openPopWin: function () {
            return false;
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=czzs&&startRow=8&&sheetIndex=1&templatePath=../../printModel/zzs/xgm/sb_zzs_xgmnsr_czzs_2016_all.zip',
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
         * 需要的时候可以覆盖该方法 在ajax调用中，在得到数据时调用该方法
         */
        pageFlowControl: function (jsonObj, xhrArgs) {
            var SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            //top.main.setSBBZL_DM_CODE(SBBZL_DM,parseInt(jsonObj.code));
            switch (parseInt(jsonObj.code)) {
                // 查询操作返回标志
                case 0:

                    curSeg.initLjs(jsonObj);// 累计数初始化
                    curSeg.initparaData(jsonObj);// 初始化基础数据
                    curSeg.initControl(jsonObj);// 初始化页面
                    curSeg.initData(jsonObj);// 赋值
                    var obj = document.getElementById('ljs');
                    DCellWeb1.ProtectFormula = false;
                    if (SBBZT == null) {// 第一次进入页面要重新计算（如果存在前行公式引用后行,默认重新计算不容易出错），有值不需要重新计算
                        cell.calculateAllJs();
                    }
                    if (!SBBZT) {
                    	curSeg.onOpenTbsxsm();
                    }
                    
                    break;
                // 添加、更新以及状态更新操作返回标志
                case 1:
                    alert("保存成功");
                    //top.main.changeNodeStatus(SBBZL_DM,"1");
                    bAdd = false;
                    break;
                // 删除操作返回标志
                case 2:
                    alert("删除成功");
                    //top.main.changeNodeStatus(SBBZL_DM,"0");
                    bAdd = true;
                    curSeg.initLjs(jsonObj);// 累计数初始化
                    curSeg.initparaData(jsonObj);// 初始化基础数据
                    curSeg.initControl(jsonObj);// 初始化页面
                    curSeg.initData(jsonObj);// 赋值
                    var obj = document.getElementById('ljs');
                    DCellWeb1.ProtectFormula = false;
                    if (SBBZT == null) {// 第一次进入页面要重新计算（如果存在前行公式引用后行,默认重新计算不容易出错），有值不需要重新计算
                        cell.calculateAllJs();
                    }
                    if (!SBBZT) {
                    	curSeg.onOpenTbsxsm();
                    }
                    break;
                // 准备添加的记录已经存在
                case 3:
                    break;
                // 在线帮助
                case 6:
                    break;
                case -1:// 保存出错返回标志
                case -2:// 其它错误返回标志
                    var reason = jsonObj.msg;
                    if (reason.indexOf("异常原因：") > -1) {
                        reason = reason.substring(reason.indexOf("异常原因："));
                        var sssq = DCellWeb1.getValByName('SSSQ');
                        sssq += hlwsbTools.setSSsq(SSSQ_Q, SSSQ_Z);
                        DCellWeb1.setValByName('SSSQ', sssq);
                        jQuery(".toolBar input[type='button']").attr('disabled',
                            'true');
                    }
                    DCellWeb1.setValByLabel("A3", "系统异常：" + reason);
                    baseTools.hideMash();
                    break;
                case -3:// cookie 失效请重新登录
                    alert(jsonObj.msg);
                    baseTools.gotoLogin();
                    break;
                default:
                    break;
            }
        }
    };
})();

function tabIn() {
    czzs.onQuery();
}