/**
 * Created by IntelliJ IDEA.
 * User: Administrator
 * Date: 13-11-30
 * Time: 上午10:05
 * To change this template use File | Settings | File Templates.
 */
//使用窗口组件加载时注释下面的代码
$(document).ready(function () {
    fb4.onLoad();


});
/**
 *
 *
 */
var fb4 = (function () {
    //私有属性
    var curSeg; // 保存fb4对象的
    var SBBXH = '';
    var SBBZL_DM = '';
    var SSSQ_Q = '';
    var SSSQ_Z = '';
    var SBZT = "";//申报状态
    //私有方法
    var data1;
    //是否是添加
    var bAdd = true;
    //私有方法

    //公有方法
    return {
        //自动计算
        onCalc: function (obj) {
            DCellWeb1.calcManual(obj.checked);
        },
        onLoad: function () {
            curSeg = fb4;
            //引用报表控制
            dcell(DCellWeb1, "/hlwsb/printModel/zzs/ybnsr/ybnsr2016/sb_zzs_fb4_2016.cll");
            curSeg.onQuery();
            //删除组件释放内存
            $(window).unload(function () {
            });
        },
        onPrint: function () {
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z
            });
            window.location = "/hlwsb/zzs_print/ybnsr/ybnsr2016/sb_zzs_ybnsr_fb4_2016.html?" + str;
        },
        //查询数据
        onQuery: function () {
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");    //获取页面申报表种类代码标记
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");
            var url = "/hlwsb/zzs/ybnsr/getSB_ZZS_FB4.do";
            baseTools.xhrAjax({
                url: url,
                params: {SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z},
                callback: [curSeg.pageFlowControl]
            });
        },
        //保存数据
        onSave: function () {
            if (!curSeg.checkData()) {
                return false;
            }
            if (SBBZT == "2" || SBBZT == "3") {
                alert("数据已申报，不允许添加");
                return null;
            }
            if (confirm('是否要保存?')) {
                var data = DCellWeb1.submitJsonjs({cols: ["QCYE", "BQFSE", "BQYDJSE", "BQSJDJSE", "QMYE"]});
                var url = bAdd
                    ? "/hlwsb/zzs/ybnsr/insertSB_ZZS_FB4.do"
                    : "/hlwsb/zzs/ybnsr/updateSB_ZZS_FB4.do";
                baseTools.xhrAjax({
                    url: url,
                    params: {DATA: data, SBBXH: SBBXH, SBBZL_DM: SBBZL_DM},
                    callback: [curSeg.pageFlowControl]
                });
            }
        },
        // 添加暂存
        onCacheSave: function () {
            curSeg.onSave();
        },
        onDelete: function () {
            if (SBBZT == "2" || SBBZT == "3") {
                alert("数据已申报，不允许删除");
                return null;
            }
            if (confirm("确定删除此报表？")) {
                var url = "/hlwsb/zzs/ybnsr/delSB_ZZS_FB4.do";
                baseTools.xhrAjax({
                    url: url,
                    params: {SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z},
                    callback: [curSeg.pageFlowControl]
                });
            }
        },
        initData: function (jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
            DCellWeb1.initDataToCell({
                cols: ["QCYE", "BQFSE", "BQYDJSE", "BQSJDJSE", "QMYE"],
                data: jsonObj.data,
                nsrxxCols: ["NSRSBH", "SSSQ", "NSRMC", "TBRQ"]
            });
            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            if (jsonObj.data.HEAD.SBBZT) {
                bAdd = false;
            }
            if (jsonObj.data.YMKZ.ISSEASON == '1' && jsonObj.data.YMKZ.ISSHOW == '0') {
                $("#btnSave").attr('disabled', true);
                $("#btnDel").attr('disabled', true);
                $("#btnPrint").attr('disabled', true);
                alert("您只有在1，4，7，10月份才需填写此报表!");
            }
        },
        initAnnotation: function () {
            //定义三行，其实只有两行数据
            var count = parseInt(DCellWeb1.GetDoubleVar_J("COUNT").value);//定义五行数据
            var qcyePos = DCellWeb1.GetCellVar_J('QCYE');
            //多一行数据，因此从定义的开始行的下一行开始
            for (var startRow = parseInt(qcyePos.row), i = startRow + 1; i <= startRow + count; i++) {
                DCellWeb1.SetCellTip(qcyePos.col, i, qcyePos.sheet, "从核心征收系统取出的数据");
            }
        },
        //主要检查一下 数据是否符合要求
        checkData: function () {
            var m = "";
            for (var i = 8; i < 13; i++) {
                var hc = i - 7;
                var col03 = "E" + i;
                var col04 = "F" + i;
                if (!DCellWeb1.checkExpress([col03], null, ">=", col04)) {
                    if (m == "") {
                        m = m + hc;
                    }
                    else {
                        m = m + "," + hc;
                    }

                }
            }
            if (m != "") {
                alert("第" + m + "行，不符合校验：4≤3，请检查");
                return false;
            }
            else {
                return true;
            }

        },
        initControl: function (jsonObj) {
            var NSRLX_DM = baseTools.getUrlQueryString("NSRLX_DM");

            /**
             *20161221 jh 增加总分机构标志是4或者5时，第二行才能填写
             */
            var ZFJGBZ = jsonObj.data.YMKZ.ZFJGBZ;
            if (ZFJGBZ != 4 && ZFJGBZ != 5) {
                DCellWeb1.setCellInputByLabel('D9', 5);
                DCellWeb1.setCellInputByLabel('F9', 5);
                DCellWeb1.SetCellTip(4, 9, 0, "非总机构不允许填写");
                DCellWeb1.SetCellTip(6, 9, 0, "非总机构不允许填写");
            }

            /**
             * 2014.5.23 lijun 是一般纳税人且不是南航、铁路、邮政、电信的话也不允许填写第二栏
             */
            /*
             var flag_ybnsr=false;
             var YZL_FLG = hlwsbTools.getYZLBZ();//预征率标志, 1-可以填写附表1第13栏; 0-不可以填写附表1第13栏   南航、铁路、邮政、电信
             if(!hlwsbTools.isXgmNsr(NSRLX_DM)){//不是小规模
             if("0" == YZL_FLG){ //不是南航、铁路、邮政、电信
             flag_ybnsr = true;
             }else{
             flag_ybnsr = false;
             }
             }*/

            //如果是小规模查账征收的，不允许填写第二栏
            if (hlwsbTools.isXgmNsr(NSRLX_DM)) {
                //设置C8,D8,F8
                var cols = ['C8', 'D8', 'F8'];
                for (var i = 0; i < cols.length; i++) {
                    DCellWeb1.setCellInputByLabel(cols[i], 5);
                }
            }
            //预征率总机构标志
            /*var YLZZJGBZ = jsonObj.data.YMKZ.YLZZJGBZ||'N';

             if(YLZZJGBZ=='N'){
             for(var i = 3; i < 8; i++){
             DCellWeb1.SetCellInput(i,8, 0,5);
             DCellWeb1.SetCellBackColor(i, 8, 0,4);
             }
             }*/

        },

        openPopWin:function(){
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=fb4&&startRow=9&&sheetIndex=1&templatePath=../../printModel/zzs/ybnsr/ybnsr2016/sb_zzs_fb4_2016.zip',
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
            for(var i =0;i<jsonArray.length;i++){
                if(jsonArray[i].QCYE=="END"){
                    break;
                }
                data1.BODY.push(jsonArray[i]);
            }
            DCellWeb1.initDataToCell({
                cols: ["QCYE", "BQFSE","BQSJDJSE"],
                data: data1,
                nsrxxCols: ["NSRSBH", "SSSQ", "NSRMC", "TBRQ"]
            });
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
                    curSeg.initData(jsonObj);
                    curSeg.initControl(jsonObj);
                    curSeg.initAnnotation();
                    break;
                //添加、更新以及状态更新操作返回标志
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
                //准备添加的记录已经存在
                case 3:
                    break;
                //数据已经申报过
                case 4:
                    var reason = jsonObj.msg;
                    reason = reason.substring(reason.indexOf("异常原因："));
                    alert(reason);
                    break;
                //在线帮助
                case 6:
                    break;
                case -1://保存出错返回标志
                case -2://其它错误返回标志
                    var reason = jsonObj.msg;
                    if (reason.indexOf("异常原因：") > -1) {
                        reason = reason.substring(reason.indexOf("异常原因："));
                        var sssq = DCellWeb1.getValByName('SSSQ');
                        sssq += hlwsbTools.setSSsq(SSSQ_Q, SSSQ_Z);
                        DCellWeb1.setValByName('SSSQ', sssq);
                        jQuery(".toolBar input[type='button']").attr('disabled', 'true');
                    }
                    DCellWeb1.setValByLabel("A3", "系统异常：" + reason);
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