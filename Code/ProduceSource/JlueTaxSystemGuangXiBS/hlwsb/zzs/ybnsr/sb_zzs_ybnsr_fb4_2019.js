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
    var NSRLX_DM = "";
    //私有方法
    var data1;
    //是否是添加
    var bAdd = true;
    //私有方法
    //加计抵减标志
    var jjdjbz='N';
    var fb2se = 0;
    var jjdjmrtk = "";
    var SBBZT = "";
    //加计递减计算销售额起止时间
    var XSEJSQQ = "";
    var XSEJSQZ = "";

    //公有方法
    return {
        //自动计算
        onCalc: function (obj) {
            DCellWeb1.calcManual(obj.checked);
        },
        onLoad: function () {
            curSeg = fb4;
            //引用报表控制
            dcell(DCellWeb1, "/hlwsb/printModel/zzs/ybnsr/sb_zzs_fb4_2019.cll");
            curSeg.onQuery();
            //删除组件释放内存
            $(window).unload(function () {
            });
        },
        onPrint: function () {
            return false;
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z,
                NSRLX_DM: NSRLX_DM
            });
            window.location = hlwsbTools.cnf.clientURL+"/hlwsb/zzs_print/ybnsr/sb_zzs_ybnsr_fb4_2019.html?" + str;
        },
        //查询数据
        onQuery: function () {
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");    //获取页面申报表种类代码标记
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");
            // SSSQ_Q = '2019-05-01';
            // SSSQ_Z = '2019-05-31';
            NSRLX_DM = baseTools.getUrlQueryString("NSRLX_DM");
            var url = "/hlwsb/zzs/ybnsr/getSB_ZZS_FB4.do";
            baseTools.xhrAjax({
                url: url,
                params: {SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,NSRLX_DM: NSRLX_DM},
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
                var data = DCellWeb1.submitJsonjs({ cols: ["QCYE", "BQFSE", "BQYDJSE", "BQKDJE", "BQSJDJSE", "QMYE"] });
                //  var data = DCellWeb1.submitJsonjs({cols: ["QCYE", "BQFSE", "BQYDJSE", "BQSJDJSE", "QMYE"]});
                debugger
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
        staticSave: function () {
            var data = DCellWeb1.submitJsonjs({cols: ["QCYE", "BQFSE", "BQYDJSE", "BQKDJE", "BQSJDJSE", "QMYE"]});
            var url =  bAdd
                ? "/hlwsb/zzs/ybnsr/insertSB_ZZS_FB4.do"
                : "/hlwsb/zzs/ybnsr/updateSB_ZZS_FB4.do";
            baseTools.xhrAjax({
                async:false,
                url: url,
                params: {DATA: data, SBBXH: SBBXH, SBBZL_DM: SBBZL_DM},
                callback: [curSeg.pageFlowControl1]
            });
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
                cols: ["QCYE", "BQFSE", "BQYDJSE", "BQKDJE","BQSJDJSE", "QMYE"],
                data: jsonObj.data,
                nsrxxCols: ["NSRSBH", "SSSQ", "NSRMC", "TBRQ"]
            });
            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            jjdjbz = jsonObj.data.YMKZ.JJDJBZ;
            fb2se = jsonObj.data.YMKZ.FB2SE;
	    jjdjmrtk = jsonObj.data.YMKZ.JJDJMRTK;
            jjdjbz = jsonObj.data.YMKZ.JJDJBZ;
            //加计递减销售额计算起止时间
            XSEJSQQ = jsonObj.data.YMKZ.XSEJSQQ;
            XSEJSQZ = jsonObj.data.YMKZ.XSEJSQZ;
          
            
            if (jsonObj.data.HEAD.SBBZT) {
                bAdd = false;
            }
            DCellWeb1.inputCheck = function (col, row, sheet, text) {
                if(col==4 && (row==17 || row==18)){
                    if(Number(text)!=0 && jsonObj.data.YMKZ.JJDJBZ=='N'){
                        if (confirm("如果符合加计抵减政策条件，请先填写《适用加计抵减政策的声明》")) {
                            DCellWeb1.SetCellDouble(col,row,0,0);
                            if(parent.openNewTab){//平台登陆，调用平台方法
//                    	        parent.openNewTab("4",表名，url,mkxkid)
                                parent.openNewTab("4","适用加计抵减政策的声明", "/hlwsb/zzs/ybnsr/sb_zzs_ybnsr_fb4_2019txsm.html?SBBZL_DM=101011055&SSSQ_Q= "+baseTools.getUrlQueryString("SSSQ_Q")+"&SSSQ_Z="+baseTools.getUrlQueryString("SSSQ_Z")+"&NSRLX_DM="+baseTools.getUrlQueryString("NSRLX_DM"),"79004");
                            }else{//网报端登陆，调用网报密码
                                parent.navTab.openTab("101011055", "zzs/ybnsr/sb_zzs_ybnsr_fb4_2019txsm.html?SBBZL_DM=101011055&SSSQ_Q= "+baseTools.getUrlQueryString("SSSQ_Q")+"&SSSQ_Z="+baseTools.getUrlQueryString("SSSQ_Z")+"&NSRLX_DM="+baseTools.getUrlQueryString("NSRLX_DM"), {title:"适用加计抵减政策的声明",external:true});
                            }
                            // var msg = "适用加计抵减政策的声明";
                            // var winParam = {
                            //     id: 'winTbsxsm', title: msg,
                            //     url: '/hlwsb/zzs/ybnsr/sb_zzs_ybnsr_fb4_2019txsm.html?bbmc=fb4&SBBZL_DM='+SBBZL_DM+'&NSRLX_DM='+NSRLX_DM+'&SSSQ_Q='+SSSQ_Q+'&SSSQ_Z='+SSSQ_Z,
                            //     width: 600,
                            //     height: 390
                            // };
                            // var winObj = baseTools.showWinExt(winParam);
                            // $(winObj.DOM.wrap).bgiframe({
                            //     width: 625,
                            //     height: 435
                            // });
                            return false;
                        }else{
                            return false;
                        }

                    }
                }
                return true;
            }
            DCellWeb1.MouseLClick=function(col,row){
                if(col==1 && row==21 ){
                    if(parent.openNewTab){//平台登陆，调用平台方法
                        parent.openNewTab("4","适用加计抵减政策的声明", "/hlwsb/zzs/ybnsr/sb_zzs_ybnsr_fb4_2019txsm.html?SBBZL_DM=101011055&SSSQ_Q= "+baseTools.getUrlQueryString("SSSQ_Q")+"&SSSQ_Z="+baseTools.getUrlQueryString("SSSQ_Z")+"&NSRLX_DM="+baseTools.getUrlQueryString("NSRLX_DM"),"79004");
                    }else{//网报端登陆，调用网报密码
                        parent.navTab.openTab("101011055", "zzs/ybnsr/sb_zzs_ybnsr_fb4_2019txsm.html?SBBZL_DM=101011055&SSSQ_Q= "+baseTools.getUrlQueryString("SSSQ_Q")+"&SSSQ_Z="+baseTools.getUrlQueryString("SSSQ_Z")+"&NSRLX_DM="+baseTools.getUrlQueryString("NSRLX_DM"), {title:"适用加计抵减政策的声明",external:true});
                    }
                }
            }
        },
        checkJjdz:function(){
            if(jjdjmrtk=="Y"&& jjdjbz=='N'){
                if (confirm("按照政策规定，自2019年4月1日至2021年12月31日，对生产、生活性服务业纳税人，可以适用加计抵减政策。\n" +
                    "生产、生活性服务业纳税人，是指提供邮政服务、电信服务、现代服务、生活服务（以下称四项服务）取得的销售额占全部销售额的比重超过50%的纳税人。\n" +
                    "四项服务的具体范围按照《销售服务、无形资产、不动产注释》（财税〔2016〕36号印发）执行。\n" +
                    "如果您符合上述政策规定，可以通过填写《适用加计抵减政策的声明》，来确认适用加计抵减政策。\n" +
                    "点击“确定”填写《适用加计抵减政策的声明》,\n点击“取消”不进行填写")) {

                    if(parent.openNewTab){//平台登陆，调用平台方法
//                    	parent.openNewTab("4",表名，url,mkxkid)
                        parent.openNewTab("4","适用加计抵减政策的声明", "/hlwsb/zzs/ybnsr/sb_zzs_ybnsr_fb4_2019txsm.html?SBBZL_DM=101011055&SSSQ_Q= "+baseTools.getUrlQueryString("SSSQ_Q")+"&SSSQ_Z="+baseTools.getUrlQueryString("SSSQ_Z")+"&NSRLX_DM="+baseTools.getUrlQueryString("NSRLX_DM"),"79004");
                    }else{//网报端登陆，调用网报密码
                        parent.navTab.openTab("101011055", "zzs/ybnsr/sb_zzs_ybnsr_fb4_2019txsm.html?SBBZL_DM=101011055&SSSQ_Q= "+baseTools.getUrlQueryString("SSSQ_Q")+"&SSSQ_Z="+baseTools.getUrlQueryString("SSSQ_Z")+"&NSRLX_DM="+baseTools.getUrlQueryString("NSRLX_DM"), {title:"适用加计抵减政策的声明",external:true});
                    }
                }else{
                    if (confirm("是否关闭填写《适用加计抵减政策的声明》提醒？关闭以后不再提示！")) {
                        var url = "/hlwsb/zzs/ybnsr/insertSB_TSYWMD_ZZSJSDJ.do";
                        baseTools.xhrAjax({
                            url: url,
                            params: {},
                            callback: []
                        });
                    }
                }
            }
        },
        initAnnotation: function () {
            //定义三行，其实只有两行数据
            // var count = parseInt(DCellWeb1.GetDoubleVar_J("COUNT").value) - 1;//定义五行数据
            // var qcyePos = DCellWeb1.GetCellVar_J('QCYE');
            // //多一行数据，因此从定义的开始行的下一行开始
            // for (var startRow = parseInt(qcyePos.row), i = startRow + 1; i <= startRow + count; i++) {
            //     DCellWeb1.SetCellTip(qcyePos.col, i, qcyePos.sheet, "从核心征收系统取出的数据");
            // }
            for (var i= 9; i <= 13; i++) {
                DCellWeb1.SetCellTip(3, i, 0, "从核心征收系统取出的数据");
            }
            for (var i= 17; i <= 18; i++) {
                DCellWeb1.SetCellTip(3, i, 0, "从核心征收系统取出的数据");
            }
        },
        //主要检查一下 数据是否符合要求
        checkData: function () {
            var col08bqfse = DCellWeb1.getValByLabel("D19");
            if(fb2se>0 && jjdjbz=='Y' && col08bqfse==0){
                alert("您已提交过《适用加计抵减政策的声明申请》，但加计抵减本期发生额为0，请您确认是否正确填写？");
            }
            var m = "";
            for (var i = 9; i < 14; i++) {
                var hc = i - 8;
                var col03 = "E" + i;
                var col04 = "G" + i;
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
            }else {
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
                DCellWeb1.setCellInputByLabel('D10', 5);
                DCellWeb1.setCellInputByLabel('G10', 5);
                DCellWeb1.SetCellTip(4, 10, 0, "非总机构不允许填写");
                DCellWeb1.SetCellTip(7, 10, 0, "非总机构不允许填写");
                DCellWeb1.SetCellColor("D10", DCellWeb1.FindColorIndex(0xEBEBEB,1));
                DCellWeb1.SetCellColor("G10", DCellWeb1.FindColorIndex(0xEBEBEB,1));
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
                //设置C9,D9,G9
                var cols = ['C9', 'D9', 'G9'];
                for (var i = 0; i < cols.length; i++) {
                    DCellWeb1.setCellInputByLabel(cols[i], 5);
                    DCellWeb1.SetCellColor(cols[i], DCellWeb1.FindColorIndex(0xEBEBEB,1));
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

        openPopWin: function () {
            return false;
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=fb4&&startRow=10&&sheetIndex=1&templatePath=../../printModel/zzs/ybnsr/sb_zzs_fb4_2019.zip',
                width: 400,
                height: 150
            };
            winObj = baseTools.showWinExt(winParam);
            $(winObj.DOM.wrap).bgiframe({
                width: 425,
                height: 200
            });
        },
        /*
        提取数据调用此方法
        */
        onExtract: function () {
            // curSeg.staticSave();
            var YGZNSRLX_DM = hlwsbTools.getYGZNSRLX_DM();
            var url = "/hlwsb/zzs/ybnsr/extractSB_ZZS_YBNSR_FB4.do";
            baseTools.xhrAjax({
                url: url,
                params: {
                    YGZNSRLX_DM: YGZNSRLX_DM, SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,
                    ZBSBBDM: '', FB3SBBDM: ''
                },
                async: false,
                callback: [curSeg.pageFlowControl]
            });
        },
        fillData:function(){
            // curSeg.onQuery();
            return true;
        },
        
        //提取数据
        tqfse: function () {
            var col4 = DCellWeb1.getValByLabel("F17");
           // DCellWeb1.setValByLabel("D10",10);
        	//if(jjdjbz=="N"){
        	//	alert(a);
        	//	return false;
        	//}
        	
        	//if(XSEJSQQ = ""||XSEJSQZ ==""){
        	//	alert("不符合加计递减政策,请确认");
        	//	return false;
        	//}
        	
            var url = "/hlwsb/zzs/ybnsr/getZZSFB4JJDJ.do";
            $.ajax({
                url: url+"?date=" + Date.now(),
                data: {
                    col4: col4,
                },
                dataType: "json",
                success: function (data) {
                    DCellWeb1.setValByLabel("G17", data);
                }
            });
            //baseTools.xhrAjax({
            //    url: url,
            //    params: {SSSQ_Q: XSEJSQQ, SSSQ_Z: XSEJSQZ},
            //    callback: [curSeg.pageFlowControl]
            //});
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
                    curSeg.checkJjdz();
                    break;
                //添加、更新以及状态更新操作返回标志
                case 1:
                    bAdd = false;
                    alert("保存成功");
                    top.main.changeNodeStatus(SBBZL_DM,"1");
                    break;
                    /*alert("保存成功");
                    top.main.changeNodeStatus(SBBZL_DM,"1");*/
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
                    curSeg.initData(jsonObj);
                    curSeg.initControl(jsonObj);
                    curSeg.initAnnotation();
                    cell.calculateAllJs();
                    curSeg.staticSave();
                    /*if (confirm("提取成功后，请保存数据\r\n 确定要保存吗？")) {
                        curSeg.onSave(1);
                    }*/
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
                case 7:
                    var jjdjybxm = jsonObj.data.P_jjdj_bqfse_ybxm;
                    var jjdjjzjt = jsonObj.data.P_jjdj_bqfse_jzjt;
                    DCellWeb1.setValByLabel("D17",jjdjybxm);
                    DCellWeb1.setValByLabel("D18",jjdjjzjt);
                    if (confirm("提取成功后，请保存数据\r\n 确定要保存吗？")) {
                        curSeg.onSave(1);
                    }
                    break;
                case -1://保存出错返回标志
                case -2://其它错误返回标志
                    // var reason = jsonObj.msg;
                    // if (reason.indexOf("异常原因：") > -1) {
                    //     reason = reason.substring(reason.indexOf("异常原因："));
                    //     var sssq = DCellWeb1.getValByName('SSSQ');
                    //     sssq += hlwsbTools.setSSsq(SSSQ_Q, SSSQ_Z);
                    //     DCellWeb1.setValByName('SSSQ', sssq);
                    // }
                    jsonObj.msg = jsonObj.msg.replace(/^[\S\s]+:/g, '')
                    jQuery(".toolBar input[type='button']").attr('disabled', 'true');
                    DCellWeb1.setValByLabel("A3", jsonObj.msg);
                    baseTools.hideMash();
                    break;
                case -3://cookie 失效请重新登录
                    alert(jsonObj.msg);
                    baseTools.gotoLogin();
                    break;
                default:
            }
        }
        //pageFlowControl1: function (jsonObj, xhrArgs) {
        //    var SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
        //    switch (parseInt(jsonObj.code)) {
        //        case 1:
        //            bAdd = false;
        //            alert("保存成功");
        //            top.main.changeNodeStatus(SBBZL_DM,"1");
        //            break;
        //        default:
        //    }
        //}
    };
})();
// function tabIn(){
//     fb4.onQuery();
// }