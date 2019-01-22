//使用窗口组件加载时注释下面的代码
/*
 * Hu Qiang
 * 2013-11-20
 * */
$(document).ready(function () {
    xjll.onLoad();
});
/**
 *
 *
 */
var xjll = (function () {
    //私有属性
    var curSeg; // 保存xjll对象的
    var SBBXH = '';
    var SBBZL_DM = "";
    var NSRLX_DM = '';
    var SSSQ_Q = "";
    var SSSQ_Z = "";
    var SBBZT = '';
    var DRJsonObj;
    var SAVE_TYPE = ''; //财务报表保存方式：1通过xml导入
    //私有方法
    var data1;
    //是否是添加
    var bAdd = true;
    //私有方法

    //公有方法
    return {
        //跳转到打印页面
        onPrint: function () {
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z,
                NSRLX_DM:NSRLX_DM
            });
            window.location = "/hlwsb/cwbb2013_print/xqy/sb_cwbb_xqy_xjllb_yb.html?" + str;
        },
        onLoad: function () {
            curSeg = xjll;
            //引用报表控制
            dcell(DCellWeb1, "/hlwsb/printModel/cwbb2013/xqy/sb_cwbb_xqy_xjllb_yb.cll");
            curSeg.onQuery();

            //删除组件释放内存
            $(window).unload(function () {
            });
        },
        //查询数据
        onQuery: function () {
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");    //获取所属时期开始时间
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");    //获取所属时期结束时间
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            NSRLX_DM=baseTools.getUrlQueryString("NSRLX_DM");
            baseTools.xhrAjax({
                url: "/hlwsb/cwbb/xqy/getSB_CWBB_XQY_XJLLB_YB.do",
                params: {SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z},
                callback: [curSeg.pageFlowControl]
            });
        },
        /**
         * 验证表内关系
         */
        checkData: function () {
            var nd = SSSQ_Q.split("-")[0];
            if (parseInt(nd) < 2013) {
                alert("2012年之后的年报才能使用该报表！");
                return false;
            }
            return true;
        },
        //保存数据
        onSave: function () {
            if (!curSeg.checkData()) {
                return false;
            }
            if (hlwsbTools.isSBBZT_SB(SBBZT, 1)) {
                return false;
            }
            if (!confirm("是否要保存？")) {
                return false;
            }
            var data = DCellWeb1.submitJsonjs({cols: ["BNLJJE", "BYJE"]});

            var url = bAdd
                ? "/hlwsb/cwbb/xqy/insertSB_CWBB_XQY_XJLLB_YB.do"
                : "/hlwsb/cwbb/xqy/updateSB_CWBB_XQY_XJLLB_YB.do";
            baseTools.xhrAjax({
                url: url,
                params: {DATA: data, SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q,
                    SSSQ_Z: SSSQ_Z,NSRLX_DM:NSRLX_DM, SAVE_TYPE:SAVE_TYPE},
                callback: [curSeg.pageFlowControl]
            });

        },
        //初始化本年累计数
        initLjs: function (jsonObj) {
            var ljs = jsonObj.data.LJS;
            DCellWeb1.initSNLJ([
                {bys: "BYJE", bnlj: "BNLJJE"}
            ], ljs, ["E12", "D19", "D26", "D27",  "D29"]);
            DCellWeb1.setCellInputByLabel("D13",5);
            DCellWeb1.setCellInputByLabel("D20",5);
        },
        onDelete: function () {
            if (hlwsbTools.isSBBZT_SB(SBBZT, 2)) {
                return false;
            }
            if (confirm("确定删除此报表？")) {
                var url = "/hlwsb/cwbb/xqy/delSB_CWBB_XQY_XJLLB_YB.do";
                baseTools.xhrAjax({
                    url: url,
                    params: { SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,NSRLX_DM:NSRLX_DM},
                    callback: [curSeg.pageFlowControl]
                });
            } else {
                return;
            }
        },
        initData: function (jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
            DCellWeb1.initDataToCell({
                cols: ["BNLJJE", "BYJE"],
                data: jsonObj.data,
                nsrxxCols: [ "NSRSBH", "NSRMC" ]
            });
            DCellWeb1.setValByName("SSSQ", hlwsbTools.setSSq(jsonObj.data.SSSQ_Q, true)+"到"+hlwsbTools.setSSq(jsonObj.data.SSSQ_Z, true));
            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            if (jsonObj.data.HEAD.SBBZT) {
                bAdd = false;
            }
        },
        initControl: function (jsonObj) {
            // if (jsonObj.data.YMKZ.ISSHOW == "0") {
            //     //禁用表单的按钮
            //     var inputList = document.getElementsByTagName('input')
            //     for (var i = 0; i < inputList.length; i++) {
            //         inputList[i].disabled = true;
            //     }
            //     alert("只有1月，4月，7月，10月才需填写此表");
            // }
        },
        /**
         * 控制是否可以修改年初余额
         */
        onEditBNLJ: function (obj) {
            DCellWeb1.editLjs([ "BNLJJE"], obj.checked);
        },

        openZlsc: function () {
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/cwbb/sb_cwbb_zlsc.html?bbzl=cwww_xqy_xjllb_yb&bbmc=xjll',
                width: 400,
                height: 150
            };
            winObj = baseTools.showWinExt(winParam);
            $(winObj.DOM.wrap).bgiframe({
                width: 425,
                height: 200
            });
        },
        nsrxxtransVal : function(ret){
            var temp = [];
            if(ret && ret.data.length>0){
                for(var i = 0;i < ret.data.length; i++){
                    var tempEnd={};
                    var tempp=  ret.data[i];
                    tempEnd.HC= tempp.ewbhxh;
                    tempEnd.BYJE=tempp.byje;
                    tempEnd.BNLJJE= tempp.bnljje;
                    temp.push(tempEnd);
                }
                DRJsonObj.data.BODY=temp;
                SAVE_TYPE = "1";
                curSeg.initData(DRJsonObj);
            }

        },
        //导入
        openPopWin:function(){

            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=xjll&&startRow=5&&sheetIndex=1&templatePath=../../printModel/cwbb2013/xqy/sb_cwbb_xqy_all.zip',
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
            data1.BODY=[];
            for(var i=0;i<jsonArray.length;i++){
                data1.BODY.push(jsonArray[i]);
            }
            DCellWeb1.initDataToCell({
                cols: ["BNLJJE", "BYJE"],
                data: data1,
                nsrxxCols: [ "NSRSBH", "NSRMC" ]
            });
            return true;
        },

        /**
         * 需要的时候可以覆盖该方法
         * 在ajax调用中，在得到数据时调用该方法
         */
        pageFlowControl: function (jsonObj, xhrArgs) {
        	
            switch (parseInt(jsonObj.code)) {
                //查询操作返回标志
                case 0:
                    DRJsonObj = jsonObj;
                    curSeg.initLjs(jsonObj);
                    curSeg.initData(jsonObj);
                    curSeg.initControl(jsonObj);
                    var obj = document.getElementById("ljs");
                    DCellWeb1.editLjs(["BNLJJE"], obj.checked);
                    break;
                //添加、更新以及状态更新操作返回标志
                case 1:
                    bAdd = false;
                    alert("保存成功");
                    //top.main.changeNodeStatus(SBBZL_DM,"1");
                    break;
                // 删除操作返回标志
                case 2:
                    alert("删除成功");
                    //top.main.changeNodeStatus(SBBZL_DM,"0");
                    SAVE_TYPE = '';
                    bAdd = true;
                    curSeg.initData(jsonObj);
                    break;
                //准备添加的记录已经存在
                case 3:
                    break;
                //在线帮助
                case 6:
                    break;
                case -1://保存出错返回标志
                case -2://其它错误返回标志
                    var reason = 	jsonObj.msg;
                    if(reason.indexOf("已申报")>-1){
                        reason = reason.substring(reason.indexOf("已申报")-1);
                        var sssq = DCellWeb1.getValByName('SSSQ');
                        sssq +=  hlwsbTools.setSSsq(SSSQ_Q, SSSQ_Z);
                        DCellWeb1.setValByName('SSSQ', sssq);
                        jQuery(".toolBar input[type='button']").attr('disabled','true');
                    }
                    alert(reason);
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