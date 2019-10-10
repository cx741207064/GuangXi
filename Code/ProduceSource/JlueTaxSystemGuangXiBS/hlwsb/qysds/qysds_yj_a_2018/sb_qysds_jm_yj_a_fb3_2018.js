$(document).ready(function () {
    jm_yj_a3.onLoad();
});



var jm_yj_a3 = (function () {
    // 私有属性
    var curSeg; // 保存jm_yj_a对象的
    var SBBXH = '';
    var SBBZL_DM = "";
    var SSSQ_Q = "";
    var SSSQ_Z = "";

    var NSRLX_DM = "";
    var SBBZT = "";
    var jmdata = [];
    var zb_9;
    var zb_20;
    // 私有方法
    var jmlist;
    var hValueText;   //行中文本数据
    var SFSYXXWL,TSNSRLX_DM;//是否小微企业，特殊纳税人类型代码
    // 是否是添加
    var bAdd = true;
    // 私有方法
    // a主表信息
    var YMKZ;
    var LRZEBNLJ;   //主表第9行数据
    var BZSSRBNLJ;  //主表第11行数据
    var flag=false;
    var gdslx = "1";//国地税标志。1：国税；2，国税
    var data1;
    // 公有方法
    return {
        hideSelect: function () {
            $("#select").bgiframe({
                width: 0,
                height: 0
            });
        },
        // 跳转到打印页面
        onPrint: function () {
            return false;
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z,
                NSRLX_DM: NSRLX_DM,
                GDSLX:gdslx
            });
            window.location = "/hlwsb/qysds_print/qysds_yj_a_2018/sb_qysds_jm_yj_a_fb3_2018.html?"
                + str;
        },
        onLoad: function () {
            curSeg = jm_yj_a3;
            // 引用报表控制
            dcell(DCellWeb1,
                "/hlwsb/printModel/qysds/qysds_yj_a_2018/sb_qysds_jm_yj_a_fb3_2018.cll");
            curSeg.onQuery();

            //所得税业务需求确认_全20180621  结果其他不允许填写，金额可以填写
            // DCellWeb1.inputCheck = function(col, row, sheet, text) {
            //     if(3 == col && 34==row) {
            //         if (DCellWeb1.getValue(col,row) > 0) {
            //             DCellWeb1.setCellInputByLabel("G" + row , 2);//2 可写
            //         } else {
            //             if(DCellWeb1.GetCellDouble((col+4),row,0) != 0){//如果金额已经有值，不允许将项目置空
            //                 if("" == text.trim()){
            //                     alert("该项目对应累计金额已经有值，项目不能置空");
            //                     return false;
            //                 }
            //             }
            //             DCellWeb1.setCellInputByLabel("G" + row , 5);//5 只读，不可写
            //         }
            //     }
            //
            //     return true;
            // }

            //所得税业务需求确认_全20180621  结果
            // （1）第1、2行互斥
            // （2）1与2-22行互斥
            // （3）2与1、3-22行互斥
            DCellWeb1.inputCheck = function(col, row, sheet, text) {
                var needValue,twoValue, fiveToTwoTwoValue = 0;
                var conflictTwoWithOtherRowsArr = new Array();
                for (var i = 0; i <= 17; i++) {
                    conflictTwoWithOtherRowsArr[i] = i + 11;
                }

                twoValue = DCellWeb1.getValByLabel("G8");
                for (var i = 0; i < conflictTwoWithOtherRowsArr.length; i++) {
                    fiveToTwoTwoValue += Number(DCellWeb1.getValByLabel('G' + conflictTwoWithOtherRowsArr[i]));
                }
                if (SFSYXXWL!=0){    //不是小型微利企业
                    conflictTwoWithOtherRowsArr.push(8);
                    if (col == 7 && ($.inArray(row, conflictTwoWithOtherRowsArr) >= 0)) {
                        conflictTwoWithOtherRowsArr.pop();
                        //设置5-22行不可编辑
                        if (twoValue) {
                            if (fiveToTwoTwoValue) {
                                alert("本表第5到22行的和的累计值>0，本行不允许输入。");
                                return false;
                            }
                            for (var i = 0; i < conflictTwoWithOtherRowsArr.length; i++) {
                                DCellWeb1.setCellInputByLabel('G' + conflictTwoWithOtherRowsArr[i], 5);
                            }
                        } else {
                            for (var i = 0; i < conflictTwoWithOtherRowsArr.length; i++) {
                                DCellWeb1.setCellInputByLabel('G' + conflictTwoWithOtherRowsArr[i], 2);
                            }
                        }
                        //设置2行不可编辑
                        if (fiveToTwoTwoValue) {
                            // if (twoValue) {
                            //
                            // }
                            // alert("fiveToTwoTwoValue"+fiveToTwoTwoValue)
                            DCellWeb1.setCellInputByLabel('G8', 5);
                        } else {
                            DCellWeb1.setCellInputByLabel('G8', 2);
                        }
                    }
                }

                //当A200000第9行＞=0时，本表处理
                // （本行允许录入大于等于0且小于等于表A200000第9行×10%的金额）
                // 【2，7，8，21，22，23，26】表中行
                // （本行允许录入大于等于0且小于等于表A200000第9行×15%的金额）
                // 【14，16】表中行
                conflictTwoWithOtherRowsArr = [8,13,14,20,22,27,28,29,32];
                if (LRZEBNLJ >= 0) {
                    var perCent = 0, needCompareValue = 0;
                    if (col == 7 && ($.inArray(row, conflictTwoWithOtherRowsArr) >= 0)) {
                        for (var i = 0; i < conflictTwoWithOtherRowsArr.length; i++) {
                            needValue = Number(hlwsbTools.formatFloatData(DCellWeb1.getValByLabel('G' + conflictTwoWithOtherRowsArr[i]), 3).toFixed(2));
                            if (conflictTwoWithOtherRowsArr[i] == 20 || conflictTwoWithOtherRowsArr[i] == 22) {
                                perCent = 15;
                            } else {
                                perCent = 10;
                            }
                            needCompareValue = LRZEBNLJ * perCent/100;
                            needCompareValue = hlwsbTools.formatFloatData(needCompareValue, 3).toFixed(2)
                            if (conflictTwoWithOtherRowsArr[i] == 8) {  //如果是第2行只能填写表A200000第9行的10%
                                if (needValue != needCompareValue && needValue > 0) {
                                    alert("当第2行＞0时，第" + (conflictTwoWithOtherRowsArr[i] - 6) + "行等于表A200000第9行×"+perCent+"%\n" +
                                        "的金额（"+needCompareValue+"）");
                                    DCellWeb1.setValByLabel("G8", 0);
                                    return false;
                                }
                            } else {
                                if (needValue > needCompareValue || needValue < 0) {
                                    alert("当A200000第9行＞0,并且第"+(conflictTwoWithOtherRowsArr[i] - 6)+"行＞0，第" + (conflictTwoWithOtherRowsArr[i] - 6) + "行允许录入大于等于0且小于等于\n" +
                                        "表A200000第9行×"+perCent+"%的金额（"+needCompareValue+"）");
                                    return false;
                                }
                            }

                        }
                    }

                }
                //当A200000第11行＞=0时，本表处理
                // （本行允许录入小于等于表A200000第11行的金额）
                // 【3，4，5，6，9，10，11，12，13，15，17，18，19，20，24，25，27】表中行
                conflictTwoWithOtherRowsArr = [9,10,11,12,15,16,17,18,19,21,23,24,25,26,30,31,33];
                if (BZSSRBNLJ >= 0) {
                    if (col == 7 && ($.inArray(row, conflictTwoWithOtherRowsArr) >= 0)) {
                        for (var i = 0; i < conflictTwoWithOtherRowsArr.length; i++) {
                            needValue = Number(hlwsbTools.formatFloatData(DCellWeb1.getValByLabel('G' + conflictTwoWithOtherRowsArr[i]), 3).toFixed(2));
                            BZSSRBNLJ = hlwsbTools.formatFloatData(BZSSRBNLJ, 3).toFixed(2)
                            if (needValue > BZSSRBNLJ || needValue < 0) {
                                alert("当A200000第11行＞0时，第" + (conflictTwoWithOtherRowsArr[i] - 6) + "行允许录入大于等于0且小于等于\n" +
                                    "表A200000第11行的金额（"+BZSSRBNLJ+"）");
                                return false;
                            }
                        }
                    }

                }
                conflictTwoWithOtherRowsArr = null;

                return true;
            }

            DCellWeb1.MouseLClick = function (col, row, sheet, text) {
                //所得税业务需求确认_全20180621  结果其他不允许填写，金额可以填写
                // if ((col == 3 || col == 4) && row == 35) {
                //     var mz = DCellWeb1.getValByLabel("C35");
                //     var jz = DCellWeb1.getValByLabel("D35");
                //     if (mz == 1 ) {
                //         DCellWeb1.setValByLabel('E35', 0);
                //         DCellWeb1.setCellInputByLabel('E35', 5);
                //     } else if (jz == 1) {
                //         DCellWeb1.setCellInputByLabel('E35', 2);
                //         DCellWeb1.setCellInputByLabel('G35', 2);
                //     }
                //
                // }
                if ((col == 3 || col == 4) && row == 35) {
                    var mz = DCellWeb1.getValByLabel("C35");
                    var jz = DCellWeb1.getValByLabel("D35");
                    if (mz == 1 ) {
                        DCellWeb1.setValByLabel('E35', 0);
                        DCellWeb1.setCellInputByLabel('E35', 5);
                    } else if (jz == 1) {
                        DCellWeb1.setCellInputByLabel('E35', 2);
                    }

                }

                //所得税业务需求确认_全20180621  结果其他不允许填写，金额可以填写
                // if(7 == col && 34==row) {
                //     hValueText = DCellWeb1.GetCellString((col - 4), row, 0).trim();
                //     if ("" == hValueText) {
                //         alert("请先选择第"+(row-6)+"行其他中的内容！")
                //         DCellWeb1.setCellInputByLabel("G" + row , 5);//5 只读，不可写
                //     }
                // }
            }

            // 删除组件释放内存
            $(window).unload(function () {
            });

        },
        // 查询数据
        onQuery: function () {
            if (SBBZT == '2' || SBBZT == '3') {// 申报成功无需查询
                return;
            }
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q"); // 获取所属时期开始时间
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z"); // 获取所属时期结束时间
            NSRLX_DM = baseTools.getUrlQueryString("NSRLX_DM");
            gdslx = baseTools.getUrlQueryString("GDSLX");
            baseTools.xhrAjax({
                url: "/hlwsb/qysds/getSB_QYSDS_JM_YJ_A_FB3.do",
                params: {
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q,
                    SSSQ_Z: SSSQ_Z,
                    NSRLX_DM: NSRLX_DM,
                    GDSLX:gdslx
                },
                callback: [curSeg.pageFlowControl]
            });
        },

        checkSave: function (jsonObj) {

            //第2行保存强制添加校验
            if (LRZEBNLJ) {
                var needValue = Number(hlwsbTools.formatFloatData(DCellWeb1.getValByLabel("G8"), 3).toFixed(2));
                //var needCompareValue = Number(hlwsbTools.formatFloatData(LRZEBNLJ, 3).toFixed(2));
                var needCompareValue = Number(hlwsbTools.formatFloatData(LRZEBNLJ * 10/100, 3).toFixed(2));
                if (needValue) {
                    if (needValue != needCompareValue) {
                        alert("当第2行＞0时，第2行等于表A200000第9行×10%\n" +
                        "的金额（"+needCompareValue+"）");
                        return false;
                    }
                }
            }


            var col07 = Number(DCellWeb1.getValByLabel("G7"));
            var needNum1,needNum2;
            var col35 = Number(DCellWeb1.getValByLabel("G35"));
            var col36 = Number(DCellWeb1.getValByLabel("G36"));
            if(!flag){
                if((col36-col07-col35)<0){
                    alert('纳税人选择享受其他优惠的，需要保证本表2-28行的合计值不小于零');
                    return false;
                }
            }
            var j=BZSSRBNLJ-col36+col35;
            var js=hlwsbTools.formatFloatData((j*0.4), 3).toFixed(2);
            if(j>0){
                if(col35>js){
                    alert('第29行第3列值应小于等于（A200000第11行-本表第1+2+…+28行）×40%的金额');
                    return false;
                }

            }else{
                DCellWeb1.setCellInputByLabel('G35', 5);
            }
            var jz = DCellWeb1.getValByLabel("D35");
            var mz = DCellWeb1.getValByLabel("C35")
            var jzfd = DCellWeb1.getValByLabel("E35");
            if (jz == 1 && (jzfd < 1 || jzfd > 100)) {
                alert("当选择‘减征’时，减征幅度应在1至100之间");
                return false;
            }
            return true;
        },

        // 保存数据
        onSave: function () {
            if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能保存");
                return;
            }
            var map1 = DCellWeb1.submitJsonjs({
                cols: ["QTXM","LJJE"],
                headCols: ["JMZ", 'JMFD'],
                returnType: "object"
            });


            if (!curSeg.checkSave(map1)) { return false; }
            var jmz01 = DCellWeb1.getValByLabel('C35');
            var jmz02 = DCellWeb1.getValByLabel('D35');
            // 1代表免征，0代表减征
            if (jmz01 == 1) {
                map1.HEAD.JMZ = 1;
            } else if (jmz02 == 1) {
                map1.HEAD.JMZ = 0;
            }else {
                map1.HEAD.JMZ = 2;
            }
            var url = bAdd ? "/hlwsb/qysds/insertSB_QYSDS_JM_YJ_A_FB3.do"
                : "/hlwsb/qysds/updateSB_QYSDS_JM_YJ_A_FB3.do";
            baseTools.xhrAjax({
                url: url,
                params: {
                    DATA: JSON.stringify(map1),
                    SBBXH: SBBXH,
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q,
                    SSSQ_Z: SSSQ_Z,
                    NSRLX_DM: NSRLX_DM,
                    TSNSRLX_DM: TSNSRLX_DM
                },
                callback: [curSeg.pageFlowControl]
            });
        },
        // 添加暂存
        onCacheSave: function () {
            curSeg.onSave();
        },

        /**
         * 静默保存, 没有经过表内关系校验直接保存
         */
        onStaticSave: function () {
            if (SBBZT == '2' || SBBZT == '3') {
                return;
            }
            var map1 = DCellWeb1.submitJsonjs({
                cols: ["BQJE"],
                headCols: ["JMZ", 'JMFD'],
                returnType: "object"
            });

            var isValidSuccess = false;
            if (curSeg.checkLjs(map1)) {
                isValidSuccess = true;
            }

            var url = "/hlwsb/qysds/insertSB_QYSDS_JM_YJ_A_FB3.do";
            baseTools.xhrAjax({
                url: url,
                params: {
                    DATA: JSON.stringify(map1),
                    SBBXH: SBBXH,
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q,
                    SSSQ_Z: SSSQ_Z,
                    NSRLX_DM: NSRLX_DM,
                    STATIC: isValidSuccess ? 0 : 1
                },
                callback: [function (jsonObj, xhrArgs) {
                }]
            });

        },

        onDelete: function () {
            if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能删除");
                return;
            }
            if (confirm("确定删除此报表？")) {

                var url = "/hlwsb/qysds/delSB_QYSDS_JM_YJ_A_FB3.do";
                baseTools.xhrAjax({
                    url: url,
                    params: {
                        SBBXH: SBBXH,
                        SBBZL_DM: SBBZL_DM,
                        NSRLX_DM: NSRLX_DM,
                        SSSQ_Q: SSSQ_Q,
                        SSSQ_Z: SSSQ_Z
                    },
                    callback: [curSeg.pageFlowControl]
                });

            }
        },
        initData: function (jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            SFSYXXWL = jsonObj.data.SFSYXXWL;
            if (jsonObj.data.YMKZ) {
                TSNSRLX_DM = jsonObj.data.YMKZ["TSNSRLX_DM"];
            }
            var url = "/hlwsb/dm/getDM_QYSDS_JMSZC.do?isPrint=N";
            baseTools.xhrAjax({
                url: url,
                asyn: false,
                params: {
                    JMXZ_DM: "'0004129999','0004021921','0004021922'"
                    // JMXZ_DM:"'0004129999','0004021203'"
                },
                callback: [function (jsob) {
                    jmlist = jsob.data.BODY; //jmlist 数组类型
                    DCellWeb1.initSelectCell({
                        selectStr: curSeg.initSelectStr(['0004129999',
                            '0004021921', '0004021922'], jmlist), // 12行
                        col: "QT1",
                        rowType: "staticRow"
                    });
                    DCellWeb1.initDataToCell({
                        cols: ["QTXM"],
                        data: jsonObj.data,
                        nsrxxCols: ["NSRSBH", "SSSQ", "NSRMC", "TBRQ"],
                        iszdjskxg: true
                    });
                }]


            });
            DCellWeb1.initDataToCell({
                cols: ["JMZ", 'JMFD', "LJJE"],
                data: jsonObj.data,
                nsrxxCols: ["NSRSBH", "SSSQ", "NSRMC", "TBRQ"],
                iszdjskxg: true
            });
            DCellWeb1.checkCellChanged = function (col, row) {
                var name = DCellWeb1.FindCellVar(col, row, 0);
                var jmz = name.substr(0, name.length - 2);
                var jmzArr = [];
                if (jmz = 'JMZ') {
                    jmzArr = ['JMZ01', 'JMZ02']
                }
                for (var i = 0; i < 2; i++) {
                    if (name != jmzArr[i]) {
                        var map = DCellWeb1.GetCellVar_J(jmzArr[i]);
                        DCellWeb1.SetCellDouble(map.col, map.row, map.sheet, 0);
                    }
                }
            }
            var jmz01 = jsonObj.data.HEAD.JMZ;
            var jmz02 = jsonObj.data.HEAD.JMFD;
            if (jmz01 == "1") {// 1是 0否 //免征
                DCellWeb1.setValByLabel('C35', 1);
                DCellWeb1.setValByLabel('D35', 0);
                DCellWeb1.setValByLabel('E35', 0);
                DCellWeb1.setCellInputByLabel('E35', 5);
            } else if (jmz01 == "0") {  //减征
                DCellWeb1.setValByLabel('C35', 0);
                DCellWeb1.setValByLabel('D35', 1);
                DCellWeb1.setValByLabel('E35', jmz02);
                DCellWeb1.setCellInputByLabel('E35', 2);
                DCellWeb1.setCellInputByLabel('G35', 2);
            }


            // TOBO 往期已申报判断，将按钮置灰
            if (SBBZT == '2' || SBBZT == '3') {
                document.getElementById("save").disabled = true;
                document.getElementById("delete").disabled = true;
            }

            //A201030表，第23行：
            // 1、当纳税人主表的企业类型为：跨地区经总纳税企业总机构时，可填写
            // 2、其他情况不允许填写
            //广西特色，允许填写
            // if (jsonObj.data.ZBQYLX == 1) {
            //     DCellWeb1.setCellInputByLabel('G29', 2);
            // } else {
            //     DCellWeb1.setCellInputByLabel('G29', 5);
            //     DCellWeb1.setCellannotation('G29', "仅纳税人企业类型为：跨地区经总纳税企业总机构时，可填写");
            // }

			   LRZEBNLJ = jsonObj.data.LJJE09;
			  BZSSRBNLJ = jsonObj.data.LJJE11; //当A200000第9行＜0时，本行不允许录入
			  if(LRZEBNLJ<0){ DCellWeb1.setCellInputByLabel('G8', 5);//2
			  DCellWeb1.setCellInputByLabel('G13', 5);//7
			  DCellWeb1.setCellInputByLabel('G14', 5);//8
			  DCellWeb1.setCellInputByLabel('G18', 5);//12
			  DCellWeb1.setCellInputByLabel('G20', 5);//14
			  DCellWeb1.setCellInputByLabel('G25', 5);//19
			  DCellWeb1.setCellInputByLabel('G26', 5);//20
			  DCellWeb1.setCellInputByLabel('G27', 5);//21
			  DCellWeb1.setCellInputByLabel('G30', 5);//24
			  }
			  //A200000第11行=0时，本行不允许录入。
			  if(BZSSRBNLJ==0){
			  DCellWeb1.setCellInputByLabel('G9', 5);//3
			  DCellWeb1.setCellInputByLabel('G10', 5);//4
			  DCellWeb1.setCellInputByLabel('G11', 5);//5
			  DCellWeb1.setCellInputByLabel('G12', 5);//6
			  DCellWeb1.setCellInputByLabel('G15', 5);//9
			  DCellWeb1.setCellInputByLabel('G16', 5);//10
			  DCellWeb1.setCellInputByLabel('G17', 5);//11
			  DCellWeb1.setCellInputByLabel('G19', 5);//13
			  DCellWeb1.setCellInputByLabel('G21', 5);//15
			  DCellWeb1.setCellInputByLabel('G22', 5);//16
			  DCellWeb1.setCellInputByLabel('G23', 5);//17
			  DCellWeb1.setCellInputByLabel('G24', 5);//18
			  DCellWeb1.setCellInputByLabel('G28', 5);//22
			  DCellWeb1.setCellInputByLabel('G29', 5);//23
			  DCellWeb1.setCellInputByLabel('G31', 5);//25
			  DCellWeb1.setCellInputByLabel('G32', 5);//26
			  DCellWeb1.setCellInputByLabel('G33', 5);//27
		      }

            //所得税业务需求确认_全20180621  结果
            // （1）第1、2行互斥
            // （2）1与2-22行互斥
            // （3）2与1、3-22行互斥
            // （4）3、4、24、25、26、27、29锁死，不允许填写
            if(SFSYXXWL==0){    //是小型微利企业
                //关于第一行值问题最终结果
                // 是小型微利企业主表选择“是”值强制带出，不再二次弹窗
                // 是小型微利企业主表选择“否”值强制设置为0
                // if(window.confirm("您符合小型微利企业所得税优惠政策条件，是否选择享受其他税收优惠政策？")){
                //     DCellWeb1.setCellInputByLabel('G7', 2);
                //     alert("第一行可以进行修改")
                //     flag = true;
                //     conflictWithOneRow();  //与第一行冲突
                // }else{
                //     DCellWeb1.setCellInputByLabel('G7', 5);
                //     conflictWithTwoRow();  //与第二行冲突
                // }
                if (LRZEBNLJ > 0.03) {
                    //DCellWeb1.setValByLabel('G7', curSeg.roundTFix(Number(LRZEBNLJ) * 0.15));
                    DCellWeb1.setValByLabel('G7',dcmMul(LRZEBNLJ,0.15));//浮点数相乘
                } else {
                    DCellWeb1.setValByLabel('G7', 0);
                }
                DCellWeb1.setCellInputByLabel('G7', 5);
                flag = true;
                conflictWithOneRow();  //与第一行冲突


            }else { //不是小型微利企业
                conflictWithTwoRow();  //与第二行冲突

                //解决第二行大于零的时候，禁止5到22行输入内容
                if (jsonObj.data.BODY.length>0) {
                    if (jsonObj.data.BODY[1].LJJE > 0) {
                        conflictWithTwoRowValue();
                    }
                }
            }
            //与第一行冲突
            function conflictWithOneRow() {
                for (var i = 8; i <= 28; i++) {
                    DCellWeb1.setCellInputByLabel('G'+i, 5);
                    DCellWeb1.setValByLabel('G'+i, 0);
                }

            }
            //与第二行冲突
            function conflictWithTwoRow() {
                for (var i = 11; i <= 28; i++) {
                    DCellWeb1.setCellInputByLabel('G'+i, 2);
                }
                DCellWeb1.setValByLabel('G7', 0);
            }
            //与第二行值大于0冲突
            function conflictWithTwoRowValue() {
                for (var i = 11; i <= 28; i++) {
                    DCellWeb1.setCellInputByLabel('G'+i, 5);
                }
                DCellWeb1.setValByLabel('G7', 0);
            }

            //计算
            var needCountAll = 0;
            for (var i = 7; i < 36; i++) {
                needCountAll += Number(hlwsbTools.formatFloatData(DCellWeb1.getValByLabel("G" + i),3).toFixed(2));
            }
            DCellWeb1.setValByLabel("G36",needCountAll);

            // 问题：进入页面显示数据和打印预览页面数据不一致问题
            // 方案：进入页面查询第一行和第二行数据如果都大于0执行保存操作
            /*if (jsonObj.data.BODY.length > 0) {
                if (SFSYXXWL==0){    //是小型微利企业
                    if (jsonObj.data.BODY[1]["LJJE"] > 0) {
                        curSeg.onSave();
                    }
                } else {    //不是小型微利企业
                    if (jsonObj.data.BODY[0]["LJJE"] > 0) {
                        curSeg.onSave();
                    }
                }
            }*/
          //初始化互斥
            curSeg.conflictfb3control(jsonObj);
        },
        
//孙文控制2到23行互斥
        
        conflictfb3control: function(jsonObj){
        	
        	if(jsonObj){
        		var bodytemp = jsonObj.data.BODY;
        		if(bodytemp&&bodytemp.length>0){
        			for(var i=0;i<bodytemp.length;i++){
        				var flagsw=bodytemp[i].LJJE;
        				if(flagsw&&flagsw>0){
        					var hctemp = bodytemp[i].HC;
        					if(hctemp<3&&hctemp>=1){
        						 DCellWeb1.setCellInputByLabel('G9', 5);//3
        						  DCellWeb1.setCellInputByLabel('G10', 5);//4
        						  DCellWeb1.setCellInputByLabel('G11', 5);//5
        						  DCellWeb1.setCellInputByLabel('G12', 5);//6
        						  DCellWeb1.setCellInputByLabel('G13', 5);//7
        						  DCellWeb1.setCellInputByLabel('G14', 5);//8
        						  DCellWeb1.setCellInputByLabel('G15', 5);//9
        						  DCellWeb1.setCellInputByLabel('G16', 5);//10
        						  DCellWeb1.setCellInputByLabel('G17', 5);//11
        						  DCellWeb1.setCellInputByLabel('G18', 5);//12
        						  DCellWeb1.setCellInputByLabel('G19', 5);//13
        						  DCellWeb1.setCellInputByLabel('G20', 5);//14
        						  DCellWeb1.setCellInputByLabel('G21', 5);//15
        						  DCellWeb1.setCellInputByLabel('G22', 5);//16
        						  DCellWeb1.setCellInputByLabel('G23', 5);//17
        						  DCellWeb1.setCellInputByLabel('G24', 5);//18
        						  DCellWeb1.setCellInputByLabel('G25', 5);//19
        						  DCellWeb1.setCellInputByLabel('G26', 5);//20
        						  DCellWeb1.setCellInputByLabel('G27', 5);//21
        						  DCellWeb1.setCellInputByLabel('G28', 5);//22
        						  
        					}else if(hctemp>=3&&hctemp<28){
        						 DCellWeb1.setCellInputByLabel('G7', 5);//1
        						 DCellWeb1.setCellInputByLabel('G8', 5);//2
        					}
        				}
            		}
        		}
        		
        	}
        	
        },
        initSelectStr: function (jmArray, jmlist) {
            var rtnstr = '';
            for (var i = 0; i < jmArray.length; i++) {
                for (var j = 0; j < jmlist.length; j++) {
                    if (jmArray[i] == jmlist[j].JMXZ_DM) {
                        // "储蓄存款利息所得(5%协定所得)\t0702\r\n储蓄存款利息所得(20%)\t0701\r\n储蓄存款利息所得(7.5%协定所得)\t0703\r\n储蓄存款利息所得(10%协定所得)\t0704\r\n储蓄存款利息所得(15%协定所得)\t0705\r\n储蓄存款利息所得(5%)\t0706\r\n储蓄存款利息所得(7%协定所得)\t0707\r\n",
                        rtnstr += jmlist[j].JMXZ_MC + '\t' + jmlist[j].XH + '\r\n';
                    }
                }
            }
            return rtnstr;
        },
        onEditSNLJ: function (obj) {
            DCellWeb1.editLjs(["LJJE"], obj.checked);
        },
        roundTFix: function (value) {
            if (!isNaN(value)) {
                return parseFloat(Number(Number(value).toFixed(3)).toFixed(2));
            } else {
                return value;
            }
        },
        //导入
        openPopWin: function () {
            return false;
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=jm_yj_a3&&startRow=8&&sheetIndex=1&templatePath=../../printModel/qysds/qysds_yj_a_2018/sb_qysds_jm_yj_a_fb3_2018.zip',
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
            switch (parseInt(jsonObj.code)) {
                // 查询操作返回标志
                case 0:
                    curSeg.initData(jsonObj);
                    //DCellWeb1.ProtectFormula = false;
                    break;
                // 添加、更新以及状态更新操作返回标志
                case 1:
                    bAdd = false;
                    alert("保存成功");
                    top.main.changeNodeStatus(SBBZL_DM, "1");
                    break;
                // 删除操作返回标志
                case 2:
                    alert("删除成功");
                    top.main.changeNodeStatus(SBBZL_DM, "0");
                    bAdd = true;
                    curSeg.onQuery();
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
                        jQuery(".toolBar input[type='button']")
                            .attr('disabled', 'true');
                    }
                    alert(reason);
                    DCellWeb1.setValByLabel("A2", reason);
                    baseTools.hideMash();

                    break;
                case -3:// cookie 失效请重新登录
                    alert(jsonObj.msg);
                    baseTools.gotoLogin();
                    break;
                default:
            }
        }
    };
})();

function tabIn() {
    jm_yj_a3.onQuery();
}