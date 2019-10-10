/**
 20180621 zhangkewei
 1、分支机构初始查询从金三接口获取，保存后展示本地数据库分支机构列表
 2、表头分摊金额信息都取自主表
 3、页面控制主要使用总分机构代码，跨地区转移企业类型代码只起到提示作用
 4、保存时会把独立职能部门分摊比例和金额信息同步给主表
 */

//使用窗口组件加载时注释下面的代码
$(document).ready(function () {
    hzfzjgfpb.onLoad();
});

var hzfzjgfpb = (function () {
    //私有属性
    var curSeg; // 保存zcfz对象的
    var SBBXH = '';
    var SBBZL_DM = "";
    var SSSQ_Q = "";
    var SSSQ_Z = "";
    var SBBZT = '';
    var HZNSQYLB = ''; //汇总纳税企业类别
    var KDQZYQYLX = '';//跨地区转移企业类型
    var NSRSBH = "";//纳税人识别号
    var Tip = "";//A2
    var NSRLX_DM = "";
    var gdslx = "1";//国地税标志。1：国税；2，国税
    //私有方法
    var data1;
    //公有方法
    return {
        onPrint: function () {
            return false;
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z,
                NSRLX_DM : NSRLX_DM,
                GDSLX:gdslx
            });
            window.location = "/hlwsb/qysds_print/qysds_yj_a_2018/sb_qysds_jm_yj_a_fb4_2018.html?" + str;
        },
        onExport: function() {DCellWeb1.ExportExcelDlg();},onLoad: function () {
            curSeg = hzfzjgfpb;
            //引用报表控制
            dcell(DCellWeb1, "/hlwsb/printModel/qysds/qysds_yj_a_2018/sb_qysds_jm_yj_a_fb4_2018.cll");
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
            NSRLX_DM =  baseTools.getUrlQueryString("NSRLX_DM");
            gdslx = baseTools.getUrlQueryString("GDSLX");
            baseTools.xhrAjax({
                url: "/hlwsb/qysds/getSB_QYSDS_JM_YJ_A_HZFZJGFPB2014.do",
                params: {
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z,NSRLX_DM : NSRLX_DM,GDSLX:gdslx
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

            var data = DCellWeb1.cellRowToJson({
                cols: ["FZJG_NSRSBH", "FZJG_NSRMC", "SRZE", "GZZE", "ZCZE", "FPBL", "FPSE","FZJG_ZGSWJDM","SFXSDFJM","XSDFJMJE","XSDFJMFD","FZJGLXLB","FZJG_DJXH"],
                cellRows: [
                    {start: "FZJG_NSRMC", end: "HJ"}
                ],
                headCols: ["ZJG_NSRSBH", "ZJG_YNSDSE", "ZJG_FTSDSE", "ZJG_CZJZFPSDSE", "ZJG_FZJGFTSDSE","NSRMC","ZJG_SFXSDFJM","ZJG_XSDFJMFD"],
                nsrxxCols: ["NSRMC", "NSRSBH", "SSSQ", "TBRQ"]
            });
            var body = JSON.parse(data).BODY;
            if (!curSeg.checkData(body)) {
                return false;
            }
            if (!confirm('是否保存？')) {
                return false;
            }
            var url = "/hlwsb/qysds/insertSB_QYSDS_JM_YJ_A_HZFZJGFPB2018.do";
            baseTools.xhrAjax({
                url: url,
                params: {DATA: data, SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, NSRLX_DM:NSRLX_DM},
                callback: [curSeg.pageFlowControl]
            });
        },
        // 添加暂存
        onCacheSave: function () {
            curSeg.onSave();
        },
        onDelete: function () {
            if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能删除");
                return;
            }
            if (confirm("确定删除此报表？")) {
                var url = "/hlwsb/qysds/delSB_QYSDS_JM_YJ_A_HZFZJGFPB2018.do";
                baseTools.xhrAjax({
                    url: url,
                    params: { SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, NSRLX_DM : NSRLX_DM},
                    callback: [curSeg.pageFlowControl]
                });
            }
        },
        onInit: function (jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
            SBBXH = jsonObj.data.HEAD.SBBXH;
            HZNSQYLB = jsonObj.data.YMKZ.HZNSQYLB;
            var arr=["SSSQ"];
            if(HZNSQYLB==1){
                arr=["SSSQ","NSRMC","NSRSBH"];
            }
            DCellWeb1.initRowToCell({
                    cols: ["FZJG_NSRSBH", "FZJG_NSRMC", "SRZE", "GZZE", "ZCZE", "FPBL", "FPSE", "HC","FZJG_ZGSWJDM","SFXSDFJM","XSDFJMJE","XSDFJMFD","FZJGLXLB","FZJG_DJXH"],
                    cellRows: [
                        {start: "FZJG_NSRMC", end: "HJ", hc: 1
                            ,
                            addButton: {name: "AddButton"},
                            delButton: {
                                name: "DelButton"
                            }
                        }
                    ],
                    manual : true,
                    headCols: ["ZJG_YNSDSE", "ZJG_FTSDSE", "ZJG_CZJZFPSDSE", "ZJG_FZJGFTSDSE","ZJG_SFXSDFJM","ZJG_XSDFJMFD"],
                    nsrxxCols: arr,
                    data: jsonObj.data,
                    iszdjskxg : false
                }
            );
            SBBZT = jsonObj.data.HEAD.SBBZT;
            KDQZYQYLX = jsonObj.data.YMKZ.KDQZYQYLX;
            NSRSBH = jsonObj.data.NSRSBH;
            //显示合计行数据

            //部分页面控制需要等页面初始化后才能进行控制
            //总分机构
            // KDQZYQYLX:跨地区税收转移企业类型 1:非跨地区税收转移企业,2:跨省、自治区、直辖市、计划单列市,3:跨地市,4:跨县（区）
            if (HZNSQYLB == "1" && (KDQZYQYLX == "2" || KDQZYQYLX == "3" || KDQZYQYLX == "4")) {
                if(jsonObj.data.BODY && jsonObj.data.BODY.length>0){
                    var yysr = 0.00;
                    var zgxc = 0.00;
                    var zcze = 0.00;
                    var fpbl = 0.00;
                    var fpse = 0.00;
                    for(var i = 0;i<jsonObj.data.BODY.length;i++){
                        yysr += parseFloat(jsonObj.data.BODY[i].SRZE);
                        zgxc += parseFloat(jsonObj.data.BODY[i].GZZE);
                        zcze += parseFloat(jsonObj.data.BODY[i].ZCZE);
                        fpbl += parseFloat(jsonObj.data.BODY[i].FPBL);
                        fpse += parseFloat(jsonObj.data.BODY[i].FPSE);
                    }
                    /**考虑到自动计算后，数据有误差，企业修改后再次打开报表，页面合计数显示不出。若在js给合计行负值，
                     * 会导致页面数值重新计算，与企业修改后的数据不一致，避免造成企业疑惑
                     * cell上增加一行用于显示合计行，但实际参与计算的合计行是隐藏起来的
                     * 这样js上打开页面后，给显示用的合计行赋值不会影响其他数据显示。
                     */
                    var hj = 14 + jsonObj.data.BODY.length;
                    DCellWeb1.SetCellDouble(6,hj,0, yysr);
                    DCellWeb1.SetCellDouble(7,hj,0, zgxc);
                    DCellWeb1.SetCellDouble(8,hj,0, zcze);
                    DCellWeb1.SetCellDouble(9,hj,0, fpbl);
                    DCellWeb1.SetCellDouble(10,hj,0, fpse);
                }
            }
        },

        initControl: function (jsonObj) {
            SBBXH = jsonObj.data.HEAD.SBBXH;
            HZNSQYLB = jsonObj.data.YMKZ.HZNSQYLB;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            KDQZYQYLX = jsonObj.data.YMKZ.KDQZYQYLX;
            NSRSBH = jsonObj.data.NSRSBH;

            // if (jsonObj.data.YMKZ.ISSHOW == "0") {
            //     //禁用表单的按钮
            //     var inputList = document.getElementsByTagName('input')
            //     for (var i = 0; i < inputList.length; i++) {
            //         inputList[i].disabled = true;
            //     }
            //     alert("只有1月，4月，7月，10月才需填写此表");
            // }

            // HZNSQYLB:1 代表总机构或分总机构
            // KDQZYQYLX:跨地区税收转移企业类型 1:非跨地区税收转移企业,2:跨省、自治区、直辖市、计划单列市,3:跨地市,4:跨县（区）
            if (HZNSQYLB == "1" && (KDQZYQYLX == "2" || KDQZYQYLX == "3" || KDQZYQYLX == "4")) {
                switch (KDQZYQYLX){
                    case "2":
                        Tip="特别提醒：“汇总（合并）纳税企业类别”为“汇总纳税成员企业―总机构”且“跨地区税收转移企业”为“跨省、自治区、直辖市”！";
                        break;
                    case "3":
                        Tip="特别提醒：“汇总（合并）纳税企业类别”为“汇总纳税成员企业―总机构”且“跨地区税收转移企业”为“跨地市”！";
                        break;
                    case "4":
                        Tip="特别提醒：“汇总（合并）纳税企业类别”为“汇总纳税成员企业―总机构”且“跨地区税收转移企业”为“跨县（区）”！";
                        break;
                    default :
                        break;
                }
                var ZJG_NSRSBHPos = DCellWeb1.GetCellVar_J("ZJG_NSRSBH");  //纳税人总机构识别号
                DCellWeb1.SetCellString(ZJG_NSRSBHPos.col, ZJG_NSRSBHPos.row, ZJG_NSRSBHPos.sheet, hlwsbTools.getNsrxx("NSRSBH"));    //设置总机构纳税人识别号
            } else {
                if(SBBZT){
                    Tip += "您已保存过数据，请点击“清除全部”按钮清除数据。";
                    document.getElementById("btdel").disabled=false;
                }
            }
            DCellWeb1.setValByLabel("A2",Tip);

            if (SBBZT == '2' || SBBZT == '3') {
                document.getElementById("btsave").disabled = true;
                document.getElementById("btdel").disabled = true;
            }
        },
        disableButton: function () {
            var inputList = document.getElementsByTagName('input')
            for (var i = 0; i < inputList.length; i++) {
                inputList[i].disabled = true;
            }

        },
        checkData: function (jsons) {
            var fpbl = 0; //分配税额
            var fpse = 0.00;
            if (jsons && jsons.length > 0) {
                for (var index = 0; index < jsons.length; index++) {
                    var json = jsons[index];
                    //分支机构纳税人识别号是否为空
                    if (!hlwsbTools.trim(json.FZJG_NSRSBH)) {
                        alert("第"+(index+1)+"行分支机构纳税人识别号不能为空")
                        return false;
                    }
                    //纳税人识别号合法性
                    if (!curSeg.checkNsrsbh(json.FZJG_NSRSBH)) {
                        return false;
                    }
                    //分支机构名称号是否为空
                    if (!hlwsbTools.trim(json.FZJG_NSRMC)) {
                        alert("第"+(index+1)+"行分支机构名称不能为空")
                        return false;
                    }
                    if (json.FZJG_NSRMC.length > 50) {
                        alert("第"+(index+1)+"行分支机构名称最大长度50")
                        return false;
                    }
                    for (var j = index + 1; j < jsons.length; j++) {
                        if (jsons[j].FZJG_NSRSBH == json.FZJG_NSRSBH) {
                            alert("第"+(j)+"行分支机构情况：“纳税人识别号”有重复，请检查！");
                            return false;
                            break;
                        }
                    }
                    fpbl = curSeg.accAddSw(fpbl, json.FPBL);
                    fpse = curSeg.accAddSw(fpse, json.FPSE);
                }
                fpse = curSeg.roundTFix(fpse);
                if (HZNSQYLB == "2") {
                    var fpblTmep = parseFloat(jsons[0].FPBL);
                    if (fpblTmep > 1) {
                        alert("分支机构的分配比例不能大于1！");
                        return false;
                    } if (fpblTmep < 0) {
                        alert("分支机构的分配比例不能小于0！");
                        return false;
                    }
                    var ynse = Number(DCellWeb1.GetCellDouble2(1,8,0));
                    var zjgftse = Number(DCellWeb1.GetCellDouble2(5,8,0));
                    var czjzftse = Number(DCellWeb1.GetCellDouble2(6,8,0));
                    var fzjgftse = Number(DCellWeb1.GetCellDouble2(9,8,0));
                    //20170322 总机构填报时主表误差为1。分支机构汇总表校验误差为0.001。不统一导致分支机构填报时校验不过。
                    if(Math.abs(ynse-zjgftse-czjzftse-fzjgftse)>=1){
                        alert('【总机构行次】应纳所得税额应等于(总机构分摊所得税额+总机构财政集中分配所得税额+分支机构分摊的所得税额)之和')
                        return false;
                    }

                } else {
                    if (curSeg.roundTFixBL(fpbl) != 1) {
                        alert("分支机构的分配比例之和应等于1！");
                        return false;
                    }
                    var fzjgftse = Number(DCellWeb1.GetCellDouble2(9,8,0));
                    if(fzjgftse !=fpse){
                        alert("分支机构的分配所得税额之和应等于分支机构分摊的所得税额！");
                        return false;
                    }
                }
            }
            return true;
        },
        roundTFix : function(value) {
            if (!isNaN(value)) {
                return hlwsbTools.formatFloatData(value,6).toFixed(2);
            } else {
                return value;
            }
        },
        roundTFixBL : function(value) {
            if (!isNaN(value)) {
                return hlwsbTools.formatFloatData(value,14).toFixed(10);
            } else {
                return value;
            }
        },
        accAddSw: function (arg1,arg2){
            var r1,r2,m;
            try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0};
            try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0};
            if(r1 == 0 && r2 == 0){
                m = 1;
            }else{
                m=Math.pow(10,Math.max(r1,r2)+1);
            }
            return (arg1*m+arg2*m)/m;
        },

        accminusSw:function (arg1,arg2){
            var r1,r2,m;
            try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0};
            try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0};
            m=Math.pow(10,Math.max(r1,r2));
            return (arg1*m-arg2*m)/m;
        },

        formatFloatSw: function (f, digit) {
            var m = Math.pow(10, digit);
            return parseInt(f * m, 10) / m;

        },
        /*检查纳税人识别号的合法性*/
        checkNsrsbh: function (obj) {
            var reg = /^(([A-Za-z0-9]{15})|([A-Za-z0-9]{18})|([A-Za-z0-9]{20}))$/;
            if (obj.search(reg) == -1) {
                alert("你输入的税号：" + obj + "有误。" + "请输入正确的纳税人识别号格式，匹配长度为15、18或者20,由字母或者数字");
                return  false;
            }
            return true;
        },
        //导入
        openPopWin: function () {
            return false;
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=hzfzjgfpb&&startRow=8&&sheetIndex=1&templatePath=../../printModel/qysds/qysds_yj_a_2018/sb_qysds_jm_yj_a_fb4_2018.zip',
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
                    break;
                //添加、更新以及状态更新操作返回标志
                case 1:
                    alert("保存成功");
                    top.main.changeNodeStatus(SBBZL_DM,"1");
                    break;
                // 删除操作返回标志
                case 2:
                    alert("删除成功");
                    top.main.changeNodeStatus(SBBZL_DM,"0");
                    //curSeg.onInit(jsonObj);
                    window.location.reload();
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
                    if(reason.indexOf("异常原因：")>-1){
                        reason = reason.substring(reason.indexOf("异常原因："));
                        var sssq = DCellWeb1.getValByName('SSSQ');
                        sssq +=  hlwsbTools.setSSsq(SSSQ_Q, SSSQ_Z);
                        DCellWeb1.setValByName('SSSQ', sssq);
                        jQuery(".toolBar input[type='button']").attr('disabled','true');
                        var addButton = DCellWeb1.GetCellVar_J("AddButton");

                        DCellWeb1.SetCellInput(addButton.col, addButton.row, addButton.sheet, 5);

                        var delButton = DCellWeb1.GetCellVar_J("DelButton");

                        DCellWeb1.SetCellInput(delButton.col, delButton.row, delButton.sheet, 5);
                    }
                    alert(reason);
                    DCellWeb1.setValByLabel("A2",reason);
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
function tabIn(){
    hzfzjgfpb.onQuery();
}