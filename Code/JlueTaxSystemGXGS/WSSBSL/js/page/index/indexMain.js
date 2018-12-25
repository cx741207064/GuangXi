
var bzList = [];

//初始化
$(function () {
    loadDqysbList();
});

//加载当期应申报信息列表
function loadDqysbList() {
    $.postJSON("/WSSBSL/do_index_Index_loadDqysbList.ashx", function (data, textStatus) {
        if (data && data.length > 0) {
            if (data[0] == "Y") {
                showDqysbList(data[1]);
            } else {
                window.top.alert('消息', data[1], 'warning');
            }
        }
    });
}

//显示当期应申报信息列表
function showDqysbList(mainlist) {
    bzList = [];
    var lis = [];
    if (mainlist && mainlist.length > 0) {
        for (var i = 0; i < mainlist.length; i++) {
            bzList.push(mainlist[i].bz);
            lis.push('<tr bgcolor="#FFFFFF">');
            lis.push('<td height="15" align="center" >' + mainlist[i].bbzlmc + '</td>');
            lis.push('<td height="15" align="center" >' + mainlist[i].ssqq + '</td>');
            lis.push('<td height="15" align="center" >' + mainlist[i].ssqz + '</td>');
            lis.push('<td height="15" align="center" >' + mainlist[i].sbrq + '</td>');
            lis.push('<td height="15" align="center" >' + mainlist[i].sbqx + '</td>');
            lis.push('<td height="15" align="center" >' + mainlist[i].jkqx + '</td>');
            lis.push('<td height="15" align="center" >' + mainlist[i].sbzt + '</td>');
            lis.push('<td height="15" align="center" >' + mainlist[i].jkzt + '</td>');
            lis.push('<td height="15" align="center" >' + mainlist[i].sbfs + '</td>');
            var cz = getCzBySbztJkzt(mainlist[i].sbzt, mainlist[i].jkzt, mainlist[i].bbzldm)
            lis.push('<td height="15" align="center" ><a href="#" class="easyui-linkbutton" data-options="plain:true,iconCls:\'icon-redo\'" onclick="showTabByCz(\'' + cz +
							'\',\'' + mainlist[i].bbzldm + '\',\'' + mainlist[i].ssqq + '\',\'' + mainlist[i].ssqz + '\')"><font color="blue"><B>' + cz + '</B></font></a></td>');
            lis.push('<td height="15" align="center" ><a href="javascript:;" onclick="showBz(' + i + ')">' + getStringByLength(mainlist[i].bz, 8) + '</a></td>');
            lis.push('</tr>');
        }
    } else {
        lis.push('<tr bgcolor="#FFFFFF"><td height="20" colspan="11" align="center">无记录！</td></tr>');
    }
    $("#dqysbList").children(0).children(":gt(0)").remove();
    $("#dqysbList").append(lis.join(""));
    $.parser.parse($("#dqysbList").parent());
}

//显示备注信息
function showBz(xh) {
    window.top.alert('备注信息', bzList[xh], 'info');
}

//显示操作
function getCzBySbztJkzt(sbzt, jkzt, bbzldm) {
    debugger;
    if (sbzt == "未申报" || sbzt == "申报失败") {
        return "前往申报";
    } else if (sbzt == "已申报" || sbzt == "申报成功") {
        //if (jkzt == "未缴款") {
        //    return "前往缴款";
        //} else if (jkzt == "缴款成功" || jkzt == "不需要缴款") {
        return "查看报表";
        //} else if (bbzldm == "7") {
        //    return "查看报表";
        //}
    } else if (sbzt == "申报处理中") {
        return "";
    }
}

//根据操作跳转页面
function showTabByCz(cz, bbzldm, ssqq, ssqz) {
    if (cz == "前往申报") {
        if (bbzldm == "1") {
            window.parent.addTab("报表填报-增值税（一般纳税人）", "/WSSBSL/show_zzs2013Ybnsr_zzs2013YbnsrBbList.aspx?type=tb_zzsybnsr&wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "2") {
            window.parent.addTab("报表填报-增值税（小规模纳税人）", "/WSSBSL/show_zzsxgm_zzsxgmBbList.action?type=tb_zzsxgmnsr&wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "3") {
            window.parent.addTab("报表填报-企业所得税月（季）度A类", "/WSSBSL/show_jdsds2012_jdsds2012ABbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "4") {
            window.parent.addTab("报表填报-企业所得税月（季）度B类", "/WSSBSL/show_jdsds2012_jdsds2012BBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "5") {
            window.parent.addTab("报表填报-文化事业建设费", "/WSSBSL/show_whsyjsf_whsyjsfBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "6") {
            window.parent.addTab("报表填报-水利建设基金", "/WSSBSL/show_sljsjj_sljsjjBbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "7") {
            window.parent.addTab("报表填报-企业所得税年度关联业务", "/WSSBSL/show_ndsdsglyw_ndsdsglywBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "8") {
            window.parent.addTab("报表填报-企业所得税年度申报表(B类)", "/WSSBSL/show_ndsdsB_ndsdsBBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "9") {
            window.parent.addTab("报表填报-企业所得税年度申报表(A类)", "/WSSBSL/show_ndsdsA_ndsdsABbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "10") {
            window.parent.addTab("报表填报-分支机构企业所得税年度申报表", "/WSSBSL/show_ndsdsFzjg_ndsdsFzjgBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "11") {
            window.parent.addTab("报表填报-利息所得税5%申报表", "/WSSBSL/show_lxsds_lxsds05BbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "12") {
            window.parent.addTab("报表填报-利息所得税20%申报表", "/WSSBSL/show_lxsds_lxsds20BbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "13") {
            window.parent.addTab("报表填报-企业年度关联业务(2016版)", "/WSSBSL/show_qyndglyw2016_qyndglyw2016BbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
        }
    } else if (cz == "前往缴款") {
        window.parent.addTab("税款缴纳-当期未缴税款", "/WSSBSL/show_skjn_dqwjsk.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
    } else if (cz == "查看报表") {
        if (bbzldm == "1") {
            window.parent.addTab("报表查询-增值税（一般纳税人）", "/WSSBSL/show_zzs2013Ybnsr_cxZzs2013YbnsrBbList.aspx?ssqq=" + ssqq + "&ssqz=" + ssqz + "&wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "2") {
            window.parent.addTab("报表查询-增值税（小规模纳税人）", "/WSSBSL/show_zzsxgm_cxZzs2013XgmBbList.aspx?ssqq=" + ssqq + "&ssqz=" + ssqz + "&wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "3") {
            window.parent.addTab("报表查询-企业所得税月（季）度A类", "/WSSBSL/show_jdsds2012_cxJdsds2012ABbList.aspx?ssqq=" + ssqq + "&ssqz=" + ssqz + "&wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "4") {
            window.parent.addTab("报表查询-企业所得税月（季）度B类", "/WSSBSL/show_jdsds2012_cxJdsds2012BBbList.action?ssqq=" + ssqq + "&ssqz=" + ssqz + "&wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "5") {
            window.parent.addTab("报表查询-文化事业建设费", "/WSSBSL/show_whsyjsf_cxWhsyjsfBbList.aspx?ssqq=" + ssqq + "&ssqz=" + ssqz + "&wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "6") {
            window.parent.addTab("报表查询-水利建设基金", "/WSSBSL/show_sljsjj_cxSljsjjBbList.aspx?ssqq=" + ssqq + "&ssqz=" + ssqz + "&wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "7") {
            window.parent.addTab("报表查询-企业所得税年度关联业务", "/WSSBSL/show_ndsdsglyw_cxNdsdsglywBbList.action?ssqq=" + ssqq + "&ssqz=" + ssqz + "&wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "8") {
            window.parent.addTab("报表查询-企业所得税年度（B类）", "/WSSBSL/show_ndsdsB_cxNdsdsBBbList.action?ssqq=" + ssqq + "&ssqz=" + ssqz + "&wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "9") {
            window.parent.addTab("报表查询-企业所得税年度（A类）", "/WSSBSL/show_ndsdsA_cxNdsdsABbList.aspx?wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "10") {
            window.parent.addTab("报表查询-分支机构企业所得税年度申报表", "/WSSBSL/show_ndsdsFzjg_cxNdsdsfzjgBbList.action?wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "11") {
            window.parent.addTab("报表查询-利息所得税5%申报表", "/WSSBSL/show_lxsds_cxLxsds05BbList.action?ssqq=" + ssqq + "&ssqz=" + ssqz + "&wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "12") {
            window.parent.addTab("报表查询-利息所得税20%申报表", "/WSSBSL/show_lxsds_cxLxsds20BbList.action?ssqq=" + ssqq + "&ssqz=" + ssqz + "&wssbtid=" + Math.round(Math.random() * 1000000), true);
        } else if (bbzldm == "13") {
            window.parent.addTab("报表查询-企业年度关联业务(2016版)", "/WSSBSL/show_qyndglyw2016_cxQyndglyw2016BbList.action?ssqq=" + ssqq + "&ssqz=" + ssqz + "&wssbtid=" + Math.round(Math.random() * 1000000), true);
        }
    }
}
