/**
*执行复选框选中事件
*/
function checkChange(parentSc, tablename, checkValue) {
    var obList = getCkeckListFromTn(tablename);
    if (obList != null && obList.length > 0) {
        for (var i = 0; i < obList.length; i++) {
            var obj = obList[i];
            var flag = doCheckInObj(obj, parentSc);
            if (flag >= 0) {
                setValByCheckIndex(flag, obj, checkValue);
                break;
            }
        }
    }
}

//根据当前选中的序号，赋值
function setValByCheckIndex(index, obj, checkValue) {
    var idSz = obj.ids.split(",");
    var valSz = obj.vals.split(",");
    if (dynamicBz == "Y") {
        if (checkValue == "checked") {
            for (var i = 0; i < idSz.length; i++) {
                if (i == index) {
                    $("td[sc='" + idSz[i].split("_")[1] + "']").children().attr("checked", "checked");
                } else {
                    $("td[sc='" + idSz[i].split("_")[1] + "']").children().removeAttr("checked");
                }
            }
            $("td[sc='" + obj.id2.split("_")[1] + "']").attr('value', valSz[index]);
            $("td[sc='" + obj.id2.split("_")[1] + "']").html(valSz[index]);
        } else {
            if (idSz.length == 2) {
                for (var i = 0; i < idSz.length; i++) {
                    if (i == index) {
                        $("td[sc='" + idSz[i].split("_")[1] + "']").children().removeAttr("checked");
                    } else {
                        $("td[sc='" + idSz[i].split("_")[1] + "']").children().attr("checked", "checked");
                    }
                }
                if (index == 0) {
                    index = 1;
                } else {
                    index = 0;
                }
                $("td[sc='" + obj.id2.split("_")[1] + "']").attr('value', valSz[index]);
                $("td[sc='" + obj.id2.split("_")[1] + "']").html(valSz[index]);
            } else {
                for (var i = 0; i < idSz.length; i++) {
                    if (i == index) {
                        $("td[sc='" + idSz[i].split("_")[1] + "']").children().removeAttr("checked");
                    }
                }
                $("td[sc='" + obj.id2.split("_")[1] + "']").attr('value', "");
                $("td[sc='" + obj.id2.split("_")[1] + "']").html("");
            }
        }
        $("td[sc='" + obj.id2.split("_")[1] + "']").parent().attr("status", "1");
    } else {
        if (checkValue == "checked") {
            for (var i = 0; i < idSz.length; i++) {
                if (i == index) {
                    $("#" + idSz[i]).children().attr("checked", "checked");
                } else {
                    $("#" + idSz[i]).children().removeAttr("checked");
                }
            }
            $("#" + obj.id2).attr('value', valSz[index]);
            $("#" + obj.id2).html(valSz[index]);
        } else {
            if (idSz.length == 2) {
                for (var i = 0; i < idSz.length; i++) {
                    if (i == index) {
                        $("#" + idSz[i]).children().removeAttr("checked");
                    } else {
                        $("#" + idSz[i]).children().attr("checked", "checked");
                    }
                }
                if (index == 0) {
                    index = 1;
                } else {
                    index = 0;
                }
                $("#" + obj.id2).attr('value', valSz[index]);
                $("#" + obj.id2).html(valSz[index]);
            } else {
                for (var i = 0; i < idSz.length; i++) {
                    if (i == index) {
                        $("#" + idSz[i]).children().removeAttr("checked");
                    }
                }
                $("#" + obj.id2).attr('value', "");
                $("#" + obj.id2).html("");
            }
        }
        $("#" + obj.id2).parent().attr("status", "1");
        var cellname = obj.id2.split("_")[1];
        report1_autoCalc(cellname);
    }
}

/**
*执行复选框赋值
*/
function setCheckValues(tablename) {
    var obList = getCkeckListFromTn(tablename);
    if (dynamicBz == "Y") {
        if (obList != null && obList.length > 0) {
            for (var i = 0; i < obList.length; i++) {
                var obj = obList[i];
                var idSz = obj.ids.split(",");
                var valSz = obj.vals.split(",");
                var id2Val = $("td[sc='" + obj.id2.split("_")[1] + "']").attr('value');
                for (var j = 0; j < valSz.length; j++) {
                    if (valSz[j] == id2Val) {
                        $("td[sc='" + idSz[j].split("_")[1] + "']").children().attr("checked", "checked");
                    } else {
                        $("td[sc='" + idSz[j].split("_")[1] + "']").children().removeAttr("checked");
                    }
                }
            }
        }
    } else {
        if (obList != null && obList.length > 0) {
            for (var i = 0; i < obList.length; i++) {
                var obj = obList[i];
                var idSz = obj.ids.split(",");
                var valSz = obj.vals.split(",");
                var id2Val = $("#" + obj.id2).attr('value');
                for (var j = 0; j < valSz.length; j++) {
                    if (valSz[j] == id2Val) {
                        $("#" + idSz[j]).children().attr("checked", "checked");
                    } else {
                        $("#" + idSz[j]).children().removeAttr("checked");
                    }
                }
            }
        }
    }
}

//检查触发单无格是在对象组当中
function doCheckInObj(obj, id) {
    var ids = obj.ids;
    var idSz = ids.split(",");
    for (var i = 0; i < idSz.length; i++) {
        if (dynamicBz == "Y") {
            if (id == idSz[i].split("_")[1]) {
                return i;
            }
        } else {
            if (id == idSz[i]) {
                return i;
            }
        }
    }
    return -1;
}

//由报表名称获取对应表的复选框列表
function getCkeckListFromTn(tn) {
    var obList = new Array();
    //年度关联业务  表二 关联交易汇总表
    if (tn == "WBJK_SB_NDSDS_GLYW_GLJYHZB") {
        var checkObj1 = new checkObj("report1_C2,report1_D2", "report1_L4", "Y,N");
        var checkObj2 = new checkObj("report1_J2,report1_K2", "report1_L5", "Y,N");
        obList[0] = checkObj1;
        obList[1] = checkObj2;
    }
        //年度关联业务  表八 对外投资情况表
    else if (tn == "WBJK_SB_NDSDS_GLYW_DWTZB") {
        var checkObj1 = new checkObj("report1_F17,report1_G17", "report1_H17", "Y,N");
        var checkObj2 = new checkObj("report1_F18,report1_G18", "report1_H18", "Y,N");
        obList[0] = checkObj1;
        obList[1] = checkObj2;
    }
        //年度A类表三十一   高新技术企业优惠情况及明细表 
    else if (tn == "WBJK_SB_NDSDS_2014_FB31") {
        //是否发生重大安全、质量事故
        var checkObj1 = new checkObj("report1_G5,report1_H5", "report1_I6", "Y,N");
        //是否有环境等违法、违规行为，受到有关部门处罚的
        var checkObj2 = new checkObj("report1_D6,report1_E6", "report1_I7", "Y,N");
        //是否发生偷骗税行为
        var checkObj3 = new checkObj("report1_G6,report1_H6", "report1_I8", "Y,N");
        obList[0] = checkObj1;
        obList[1] = checkObj2;
        obList[2] = checkObj3;
    }
        //年度A类表 填报表单 
    else if (tn == "WBJK_SB_NDSDS_2014_TBBD") {
        //A101010一般企业收入明细表
        var checkObj1 = new checkObj("report1_C6,report1_D6", "report1_E6", "Y,N");
        //A101020金融企业收入明细表
        var checkObj2 = new checkObj("report1_C7,report1_D7", "report1_E7", "Y,N");
        //A102010一般企业成本支出明细表
        var checkObj3 = new checkObj("report1_C8,report1_D8", "report1_E8", "Y,N");
        //A102020金融企业支出明细表
        var checkObj4 = new checkObj("report1_C9,report1_D9", "report1_E9", "Y,N");
        //A103000事业单位、民间非营利组织收入、支出明细表
        var checkObj5 = new checkObj("report1_C10,report1_D10", "report1_E10", "Y,N");
        //A104000期间费用明细表
        var checkObj6 = new checkObj("report1_C11,report1_D11", "report1_E11", "Y,N");
        //A105000纳税调整项目明细表
        var checkObj7 = new checkObj("report1_C12,report1_D12", "report1_E12", "Y,N");
        //A105010视同销售和房地产开发企业特定业务纳税调整明细表
        var checkObj8 = new checkObj("report1_C13,report1_D13", "report1_E13", "Y,N");
        //A105020未按权责发生制确认收入纳税调整明细表
        var checkObj9 = new checkObj("report1_C14,report1_D14", "report1_E14", "Y,N");
        //A105030投资收益纳税调整明细表
        var checkObj10 = new checkObj("report1_C15,report1_D15", "report1_E15", "Y,N");
        //A105040专项用途财政性资金纳税调整明细表
        var checkObj11 = new checkObj("report1_C16,report1_D16", "report1_E16", "Y,N");
        //A105050职工薪酬纳税调整明细表
        var checkObj12 = new checkObj("report1_C17,report1_D17", "report1_E17", "Y,N");
        //A105060广告费和业务宣传费跨年度纳税调整明细表
        var checkObj13 = new checkObj("report1_C18,report1_D18", "report1_E18", "Y,N");
        //A105070捐赠支出纳税调整明细表
        var checkObj14 = new checkObj("report1_C19,report1_D19", "report1_E19", "Y,N");
        //A105080资产折旧、摊销情况及纳税调整明细表
        var checkObj15 = new checkObj("report1_C20,report1_D20", "report1_E20", "Y,N");
        //A105081固定资产加速折旧、扣除明细表
        var checkObj16 = new checkObj("report1_C21,report1_D21", "report1_E21", "Y,N");
        //A105090资产损失税前扣除及纳税调整明细表
        var checkObj17 = new checkObj("report1_C22,report1_D22", "report1_E22", "Y,N");
        //A105091资产损失（专项申报）税前扣除及纳税调整明细表
        var checkObj18 = new checkObj("report1_C23,report1_D23", "report1_E23", "Y,N");
        //A105100企业重组纳税调整明细表
        var checkObj19 = new checkObj("report1_C24,report1_D24", "report1_E24", "Y,N");
        //A105110政策性搬迁纳税调整明细表
        var checkObj20 = new checkObj("report1_C25,report1_D25", "report1_E25", "Y,N");
        //A105120特殊行业准备金纳税调整明细表
        var checkObj21 = new checkObj("report1_C26,report1_D26", "report1_E26", "Y,N");
        //A106000企业所得税弥补亏损明细表
        var checkObj22 = new checkObj("report1_C27,report1_D27", "report1_E27", "Y,N");
        //A107010收入、所得减免及加计扣除优惠明细表
        var checkObj23 = new checkObj("report1_C28,report1_D28", "report1_E28", "Y,N");
        //A107011符合条件的居民企业之间的股息、红利等权益性投资收益优惠明细表
        var checkObj24 = new checkObj("report1_C29,report1_D29", "report1_E29", "Y,N");
        //A107012综合利用资源生产产品取得的收入优惠明细表
        var checkObj25 = new checkObj("report1_C30,report1_D30", "report1_E30", "Y,N");
        //A107013金融、保险等机构取得的涉农利息、保费收入优惠明细表
        var checkObj26 = new checkObj("report1_C31,report1_D31", "report1_E31", "Y,N");
        //A107014研发费用加计扣除优惠明细表
        var checkObj27 = new checkObj("report1_C32,report1_D32", "report1_E32", "Y,N");
        //A107020所得减免优惠明细表
        var checkObj28 = new checkObj("report1_C33,report1_D33", "report1_E33", "Y,N");
        //A107030抵扣应纳税所得额明细表
        var checkObj29 = new checkObj("report1_C34,report1_D34", "report1_E34", "Y,N");
        //A107040减免所得税优惠明细表
        var checkObj30 = new checkObj("report1_C35,report1_D35", "report1_E35", "Y,N");
        //A107041高新技术企业优惠情况及明细表
        var checkObj31 = new checkObj("report1_C36,report1_D36", "report1_E36", "Y,N");
        //A107042软件、集成电路企业优惠情况及明细表
        var checkObj32 = new checkObj("report1_C37,report1_D37", "report1_E37", "Y,N");
        //A107050税额抵免优惠明细表
        var checkObj33 = new checkObj("report1_C38,report1_D38", "report1_E38", "Y,N");
        //A108000境外所得税收抵免明细表
        var checkObj34 = new checkObj("report1_C39,report1_D39", "report1_E39", "Y,N");
        //A108010境外所得纳税调整后所得明细表
        var checkObj35 = new checkObj("report1_C40,report1_D40", "report1_E40", "Y,N");
        //A108020境外分支机构弥补亏损明细表
        var checkObj36 = new checkObj("report1_C41,report1_D41", "report1_E41", "Y,N");
        //A108030跨年度结转抵免境外所得税明细表
        var checkObj37 = new checkObj("report1_C42,report1_D42", "report1_E42", "Y,N");
        //A109000跨地区经营汇总纳税企业年度分摊企业所得税明细表
        var checkObj38 = new checkObj("report1_C43,report1_D43", "report1_E43", "Y,N");
        //A109010企业所得税汇总纳税分支机构所得税分配表
        var checkObj39 = new checkObj("report1_C44,report1_D44", "report1_E44", "Y,N");
        //A000000企业基础信息表
        var checkObj40 = new checkObj("report1_C4,report1_D4", "report1_E4", "Y,N");
        //A000000企业基础信息表
        var checkObj41 = new checkObj("report1_C5,report1_D5", "report1_E5", "Y,N");
        //受控外国企业报告表
        var checkObj42 = new checkObj("report1_C45,report1_D45", "report1_E45", "Y,N");
        //研发项目可加计扣除研究开发费用情况归集表
        var checkObj43 = new checkObj("report1_C46,report1_D46", "report1_E46", "Y,N");

        obList[0] = checkObj1;
        obList[1] = checkObj2;
        obList[2] = checkObj3;
        obList[3] = checkObj4;
        obList[4] = checkObj5;
        obList[5] = checkObj6;
        obList[6] = checkObj7;
        obList[7] = checkObj8;
        obList[8] = checkObj9;
        obList[9] = checkObj10;
        obList[10] = checkObj11;
        obList[11] = checkObj12;
        obList[12] = checkObj13;
        obList[13] = checkObj14;
        obList[14] = checkObj15;
        obList[15] = checkObj16;
        obList[16] = checkObj17;
        obList[17] = checkObj18;
        obList[18] = checkObj19;
        obList[19] = checkObj20;
        obList[20] = checkObj21;
        obList[21] = checkObj22;
        obList[22] = checkObj23;
        obList[23] = checkObj24;
        obList[24] = checkObj25;
        obList[25] = checkObj26;
        obList[26] = checkObj27;
        obList[27] = checkObj28;
        obList[28] = checkObj29;
        obList[29] = checkObj30;
        obList[30] = checkObj31;
        obList[31] = checkObj32;
        obList[32] = checkObj33;
        obList[33] = checkObj34;
        obList[34] = checkObj35;
        obList[35] = checkObj36;
        obList[36] = checkObj37;
        obList[37] = checkObj38;
        obList[38] = checkObj39;
        obList[39] = checkObj40;
        obList[40] = checkObj41;
        obList[41] = checkObj42;
        obList[42] = checkObj43;

    }
        //年度A类表 基础信息表
    else if (tn == "WBJK_SB_NDSDS_2014_JCXX") {
        //申报类型代码，对应代码表DM_SBLX， 11(正常申报)21(自查补报)31(超定额补税)
        var checkObj1 = new checkObj("report1_A3,report1_C3,report1_I3", "report1_N3", "11,21,31");
        //汇总纳税企业类型代码，汇总纳税企业 1，总机构；2，按比例缴纳总机构；3否
        var checkObj2 = new checkObj("report1_B5,report1_D5,report1_I5", "report1_N5", "1,2,3");
        //境外中资控股居民企业标志，Y或N
        var checkObj3 = new checkObj("report1_I6,report1_L6", "report1_N6", "Y,N");
        //从事国家非限制和禁止行业标志，Y或N
        var checkObj4 = new checkObj("report1_I7,report1_L7", "report1_N7", "Y,N");
        //存在境外关联交易标志，Y或N
        var checkObj5 = new checkObj("report1_I8,report1_L8", "report1_N8", "0,1");
        //上市公司类型表  上市公司||0境内1境外2否
        var checkObj6 = new checkObj("report1_I9,report1_J9,report1_L9", "report1_N9", "0,1,2");
        //适用会计制度或准则代码，企业会计准则||0一般企业1银行2,证券3保险4担保
        var checkObj7 = new checkObj("report1_C11,report1_D11,report1_E11,report1_H11,report1_I11,report1_B12,report1_B13,report1_C14,report1_E14,report1_J14,report1_C15,report1_E15,report1_J15,report1_B16,report1_B17,report1_B18,report1_B19", "report1_N11", "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16");
        //记账本位币类型：  会计记账本币||Y人民币 N其他
        var checkObj8 = new checkObj("report1_B21,report1_C21", "report1_N21", "Y,N");
        //会计政策和估计是否发生变化标志
        var checkObj9 = new checkObj("report1_I21,report1_K21", "report1_O21", "Y,N");
        //坏账损失核算方法代码，坏账损失核算方法||Y备抵法N直接核销法
        var checkObj10 = new checkObj("report1_B25,report1_D25", "report1_N25", "Y,N");
        //所得税计算方法代码，所得税计算方法||0应付税款法1资产债务表债务法2其他
        var checkObj11 = new checkObj("report1_B26,report1_D26,report1_J26", "report1_N26", "0,1,2");

        obList[0] = checkObj1;
        obList[1] = checkObj2;
        obList[2] = checkObj3;
        obList[3] = checkObj4;
        obList[4] = checkObj5;
        obList[5] = checkObj6;
        obList[6] = checkObj7;
        obList[7] = checkObj8;
        obList[8] = checkObj9;
        obList[9] = checkObj10;
        obList[10] = checkObj11;
    }
    //受控外国企业报告表
    if (tn == "WBJK_SB_NDSDS_SKWGQYBGB") {
        var checkObj1 = new checkObj("report1_E12,report1_I12", "report1_L12", "0,1");
        var checkObj2 = new checkObj("report1_H17,report1_J17", "report1_L17", "Y,N");
        var checkObj3 = new checkObj("report1_H19,report1_J19", "report1_L19", "Y,N");
        var checkObj4 = new checkObj("report1_H20,report1_J20", "report1_L20", "Y,N");
        obList[0] = checkObj1;
        obList[1] = checkObj2;
        obList[2] = checkObj3;
        obList[3] = checkObj4;
    }
    //月（季）度企业所得税A类主表
    if (tn == "WBJK_SB_JDSDS_2008") {
        var checkObj1 = new checkObj("report1_E38,report1_G38", "report1_I38", "Y,N");
        obList[0] = checkObj1;
    }
    //月（季）度企业所得税B类主表
    if (tn == "WBJK_SB_JDSDS_2008_HDZS") {
        var checkObj1 = new checkObj("report1_E28,report1_F28", "report1_H28", "Y,N");
        obList[0] = checkObj1;
    }
    //年度企业所得税B类主表
    if (tn == "WBJK_SB_NDSDS_2008_HDZS") {
        var checkObj1 = new checkObj("report1_F30,report1_G30", "report1_H30", "Y,N");
        obList[0] = checkObj1;
    }
    //企业年度关联业务（2016版）报告企业信息表
    if (tn == "WBJK_SB_QYNDGLYW_G000000") {
        var checkObj1 = new checkObj("report1_A3,report1_H3,report1_M3", "report1_X3", "1,2,3");
        var checkObj2 = new checkObj("report1_D10,report1_F10", "report1_X10", "1,0");
        var checkObj3 = new checkObj("report1_R10,report1_U10", "report1_Y10", "1,0");
        var checkObj4 = new checkObj("report1_E11,report1_F11,report1_G11,report1_H11,report1_I11,report1_D12,report1_D13,report1_E14,report1_I14,report1_L14,report1_E15,report1_I15,report1_L15,report1_D16,report1_D17,report1_D18,report1_D19", "report1_X11", "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16");
        var checkObj5 = new checkObj("report1_D20,report1_E20", ",report1_X20", "1,0");
        var checkObj6 = new checkObj("report1_E21,report1_H21", ",report1_X21", "1,0");
        var checkObj7 = new checkObj("report1_P22,report1_T22", ",report1_X22", "1,0");
        var checkObj8 = new checkObj("report1_D23,report1_E23,report1_G23,report1_I23", "report1_X23", "1,2,3,0");
        var checkObj9 = new checkObj("report1_N23,report1_O23", ",report1_Y23", "1,0");
        var checkObj10 = new checkObj("report1_U23,report1_V23", ",report1_X24", "1,0");
        obList[0] = checkObj1;
        obList[1] = checkObj2;
        obList[2] = checkObj3;
        obList[3] = checkObj4;
        obList[4] = checkObj5;
        obList[5] = checkObj6;
        obList[6] = checkObj7;
        obList[7] = checkObj8;
        obList[8] = checkObj9;
        obList[9] = checkObj10;
    }
    //企业年度关联业务（2016版）往来汇总表
    if (tn == "WBJK_SB_QYNDGLYW_G100000") {
        var checkObj1 = new checkObj("report1_A26,report1_B26", "report1_K26", "1,0");
        var checkObj2 = new checkObj("report1_C27,report1_E27,report1_G27,report1_I27", "report1_K27", "1,2,3,0");
        obList[0] = checkObj1;
        obList[1] = checkObj2;
    }
    //企业年度关联业务（2016版）	成本分摊协议表
    if (tn == "WBJK_SB_QYNDGLYW_G110000") {
        var checkObj1 = new checkObj("report1_A13,report1_C13", "report1_Q13", "1,0");
        var checkObj2 = new checkObj("report1_H13,report1_I13,report1_J13", "report1_R13", "1,2,0");
        obList[0] = checkObj1;
        obList[1] = checkObj2;
    }
    //企业年度关联业务（2016版）填报表单
    if (tn == "WBJK_SB_QYNDGLYW_TBBD") {
        var checkObj1 = new checkObj("report1_C7,report1_D7", "report1_E7", "1,0");
        var checkObj2 = new checkObj("report1_C8,report1_D8", "report1_E8", "1,0");
        var checkObj3 = new checkObj("report1_C9,report1_D9", "report1_E9", "1,0");
        var checkObj4 = new checkObj("report1_C10,report1_D10", "report1_E10", "1,0");
        var checkObj5 = new checkObj("report1_C11,report1_D11", "report1_E11", "1,0");
        var checkObj6 = new checkObj("report1_C12,report1_D12", "report1_E12", "1,0");
        var checkObj7 = new checkObj("report1_C13,report1_D13", "report1_E13", "1,0");
        var checkObj8 = new checkObj("report1_C14,report1_D14", "report1_E14", "1,0");
        var checkObj9 = new checkObj("report1_C15,report1_D15", "report1_E15", "1,0");
        var checkObj10 = new checkObj("report1_C16,report1_D16", "report1_E16", "1,0");
        var checkObj11 = new checkObj("report1_C17,report1_D17", "report1_E17", "1,0");
        var checkObj12 = new checkObj("report1_C18,report1_D18", "report1_E18", "1,0");
        var checkObj13 = new checkObj("report1_C19,report1_D19", "report1_E19", "1,0");
        var checkObj14 = new checkObj("report1_C20,report1_D20", "report1_E20", "1,0");
        var checkObj15 = new checkObj("report1_C21,report1_D21", "report1_E21", "1,0");
        var checkObj16 = new checkObj("report1_C22,report1_D22", "report1_E22", "1,0");
        var checkObj17 = new checkObj("report1_C23,report1_D23", "report1_E23", "1,0");
        var checkObj18 = new checkObj("report1_C24,report1_D24", "report1_E24", "1,0");
        var checkObj19 = new checkObj("report1_C25,report1_D25", "report1_E25", "1,0");
        obList[0] = checkObj1;
        obList[1] = checkObj2;
        obList[2] = checkObj3;
        obList[3] = checkObj4;
        obList[4] = checkObj5;
        obList[5] = checkObj6;
        obList[6] = checkObj7;
        obList[7] = checkObj8;
        obList[8] = checkObj9;
        obList[9] = checkObj10;
        obList[10] = checkObj11;
        obList[11] = checkObj12;
        obList[12] = checkObj13;
        obList[13] = checkObj14;
        obList[14] = checkObj15;
        obList[15] = checkObj16;
        obList[16] = checkObj17;
        obList[17] = checkObj18;
        obList[18] = checkObj19;
    }
    return obList;
}

//自定义对象
function checkObj(ids, id2, vals) {
    this.ids = ids;
    this.id2 = id2;
    this.vals = vals;
}