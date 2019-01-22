//使用窗口组件加载时注释下面的代码
$(document).ready(function() {
    sb_zzs_yzqy.onLoad();
});
/**
 *
 *
 */
var sb_zzs_yzqy = (function() {
    // 私有属性
    var curSeg; // 保存jm_yj_a对象的
    var SBBXH = '';
    var SBBZL_DM = "";
    var SBBZT = "";
    var SSSQ_Q = "";
    var SSSQ_Z = "";
    var DJXH = "";
    var NSRLX_DM = "";
    var TBRQ = "";
    var FZJGYYJJE = "";
    var winObj = '';
    // 私有方法
    var data1;
    // 是否是添加
    var bAdd = true;


    // 私有方法

    // 公有方法
    return {
        //跳转到打印页面
        onPrint:function() {
            var str = hlwsbTools.urlStr({
                SBBZL_DM : SBBZL_DM,
                SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z,NSRLX_DM : NSRLX_DM
            });
            window.location = "/hlwsb/zzs_print/ybnsr/ybnsr2016/sb_zzs_yzqy.html?" + str;
        },
        onLoad : function() {

            // 引用报表控制
            curSeg = sb_zzs_yzqy;

            dcell(DCellWeb1, "/hlwsb/printModel/zzs/ybnsr/ybnsr2016/sb_zzs_yzqy.cll");

            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");    //获取所属时期开始时间
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");    //获取所属时期结束时间
            NSRLX_DM = baseTools.getUrlQueryString("NSRLX_DM");
            curSeg.onQuery();
            // 删除组件释放内存
            $(window).unload(function() {

            });
        },

        // 查询数据
        onQuery : function() {

            baseTools.xhrAjax({
                url : "/hlwsb/zzs/ybnsr/getSB_ZZS_YZQYFZJGQDJXSEQK.do",
                params : {
                    SBBZL_DM : SBBZL_DM,
                    SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z,NSRLX_DM : NSRLX_DM
                },
                callback : [ curSeg.pageFlowControl ]
            });
        },
        // 保存数据
        onSave : function() {
            if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能保存");
                return;
            }
            //扩展多个body
            var map3 = DCellWeb1.submitJsonjs({
                cols: [ "XSE", "YDK", "YZL","YJSE","CBXSE","SYSL","CBSE","BZ"],
                returnType: "object" ,
                headCols:["TBRQ", "SSSQ", "NSRMC","FZJGYYJJE"]
            });
            //扩展多个body
            var map4 = DCellWeb1.cellRowToJson({
                cols: ["HC","PZZL", "JE", "JXSE", "RZJHYF","BZ2"],
                cellRows: [
                    {start: "HC", end: "HJ"}
                ],
                returnType: "object"
            });
            var reg = /^(0?[1-9]|1[0-2])$/;
            for (var i = 0; i < map4.BODY.length; i++) {
                var rs = reg.exec(map4.BODY[i].RZJHYF);
                if (rs==null) {
                    alert("认证/稽核月份格式不正确，请重新输入！");
                    return;
                }
            }
            var reg1 = /^[\u4e00-\u9fa5]{0,3}$|^[\dA-Za-z_]{1,9}$/;
            for (var i = 0; i < map4.BODY.length; i++) {
                var rs1 = reg1.exec(map4.BODY[i].PZZL);
                if (rs1==null) {
                    alert("凭证种类输入长度过长，请重新输入！");
                    return;
                }
            }
            var url = "/hlwsb/zzs/ybnsr/insertSB_ZZS_YZQYFZJGQDJXSEQK.do";
            baseTools.xhrAjax({
                url: url,
                params: {DATA1: JSON.stringify(map3),DATA2: JSON.stringify(map4), SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,DJXH: DJXH},
                callback: [curSeg.pageFlowControl]
            });
        },
        onDelete:function() {
            if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能删除");
                return;
            }
            if (confirm("确定删除此报表？")) {

                var url = "/hlwsb/zzs/ybnsr/delSB_ZZS_YZQYFZJGQDJXSEQK.do";
                baseTools.xhrAjax({
                    url : url,
                    params:{ SBBXH:SBBXH,SBBZL_DM:SBBZL_DM,NSRLX_DM:NSRLX_DM,SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z,LSXH:window.LSXH},
                    callback : [ curSeg.pageFlowControl ]
                });
            }
        },
        initData : function(jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
            // 页面控制参数
            if (jsonObj.data.HEAD) {
                SBBXH = jsonObj.data.HEAD.SBBXH;
                SBBZT = jsonObj.data.HEAD.SBBZT;
                DJXH = jsonObj.data.HEAD.DJXH;
                TBRQ = jsonObj.data.HEAD.TBRQ;
                FZJGYYJJE = jsonObj.data.HEAD.FZJGYYJJE;
            }


            var map1 = {};
            map1.HEAD = jsonObj.data.HEAD;
            map1.BODY = jsonObj.data.BODY;
            var map2 = {};
            map2.HEAD = jsonObj.data.HEAD;
            map2.BODY = jsonObj.data.BODY_ZB;
            DCellWeb1.initRowToCell({
                cols: ["HC","PZZL", "JE", "JXSE","RZJHYF","BZ2"],
                cellRows: [
                    {start: "HC",
                        end: "HJ",
                        xl:"HC",
                        hc:"HC",
                        addButton : {name:"AddButton"},
                        delButton :  {name:"DelButton",
                            checkbox : "CZ",
                            url:"/hlwsb/zzs/ybnsr/delSB_ZZS_YZQYFZJGQDJXSEQKByHC.do",
                            params:{SBBXH: SBBXH}
                        }
                    }
                ],
                data:map2
            });
            DCellWeb1.initDataToCell({
                cols: [ "XSE", "YDK", "YZL","YJSE","CBXSE","SYSL","CBSE","BZ","COUNT"],
                data: map1,
                nsrxxCols : ["NSRSBH","SSSQ","NSRMC","TBRQ","FZJGYYJJE"],
                iszdjskxg: true
            });
            if (jsonObj.data.HEAD.SBBZT) {
                bAdd = false;
            }
           //存在某些邮政税号拦截出错，暂时去掉总分机构判断
          /*  var YZL_FLG = jsonObj.data.YMKZ.YZLFZJGZG;*/
         /*   if("Y"==yzqybz && "Y" == YZL_FLG){*/
           var yzqybz = jsonObj.data.YMKZ.yzqybz; //邮政企业标志
            if("Y"==yzqybz){
                document.getElementById("save").disabled = false;
                document.getElementById("delete").disabled = false;
                document.getElementById("print").disabled = false;
                var YZL =  jsonObj.data.YMKZ.YBNSRFZJGDFPYZL;
                DCellWeb1.setValByLabel('D7',YZL);
                DCellWeb1.setValByLabel('D8',YZL);
                DCellWeb1.setValByLabel('D9',YZL);
            } else {
            	DCellWeb1.setValByLabel("A2","非邮政企业不需要填报该表！");
                document.getElementById("save").disabled = true;
                document.getElementById("delete").disabled = true;
                document.getElementById("print").disabled = true;
            }
            if (jsonObj.data.HEAD.SBBZT) {
                bAdd = false;
            }
//            var YZL =  jsonObj.data.YMKZ.YBNSRFZJGDFPYZL;
        },
    /**
     * 需要的时候可以覆盖该方法 在ajax调用中，在得到数据时调用该方法
     */
        //禁用表单的按钮
        invalidate:function() {
            var inputList = document.getElementsByTagName('input')
            for (var i = 0; i < inputList.length; i++) {
                inputList[i].disabled = true;
            }
        },
        //导入
        openPopWin:function(){
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=sb_zzs_yzqy&&startRow=8&&sheetIndex=1&templatePath=../../printModel/zzs/ybnsr/ybnsr2016/sb_zzs_yzqy.zip',
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
        pageFlowControl : function(jsonObj, xhrArgs) {
        	var SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            switch (parseInt(jsonObj.code)) {
                // 查询操作返回标志
                case 0:
                    curSeg.initData(jsonObj);
                    DCellWeb1.ProtectFormula = false;
                    break;
                // 添加、更新以及状态更新操作返回标志
                case 1:
                    bAdd = false;
                    alert("保存成功");
                    top.main.changeNodeStatus(SBBZL_DM,"1");
                    break;
                // 删除操作返回标志
                case 2:
                    alert("删除成功");
                    top.main.changeNodeStatus(SBBZL_DM,"0");
                    bAdd = true;
                    curSeg.initData(jsonObj);
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
                        curSeg.invalidate();
                    }
                    DCellWeb1.setCellInputByLabel("I19", 5);
                    DCellWeb1.setCellInputByLabel("I20", 5);
                    DCellWeb1.setValByLabel('A2', reason);
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