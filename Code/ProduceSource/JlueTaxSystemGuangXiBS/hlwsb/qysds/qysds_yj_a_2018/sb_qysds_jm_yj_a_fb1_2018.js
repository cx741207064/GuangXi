$(document).ready(function () {
    jm_yj_a.onLoad();
});

var jm_yj_a = (function () {
    // 私有属性
    var curSeg; // 保存jm_yj_a对象的
    var SBBXH = '';
    var SBBZL_DM = "";
    var SSSQ_Q = "";
    var SSSQ_Z = "";
    var jmlist;

    var NSRLX_DM = "";
    var hValueText,ZBValueNeeded;   //行中文本数据，主表返回数据的计算结果
    var gdslx = "1";//国地税标志。1：国税；2，国税
    // 私有方法

    var data1;
    // 公有方法
    return {
        //跳转到打印页面
        onPrint: function () {
            return false;
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z,
                NSRLX_DM: NSRLX_DM,
                GDSLX:gdslx
            });
            window.location = "/hlwsb/qysds_print/qysds_yj_a_2018/sb_qysds_jm_yj_a_fb1_2018.html?" + str;
        },
        hideSelect: function () {
            $("#select").bgiframe({
                width: 0,
                height: 0
            });
        },
        onLoad: function () {
            curSeg = jm_yj_a;
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");    //获取所属时期开始时间
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");    //获取所属时期结束时间
            NSRLX_DM = baseTools.getUrlQueryString("NSRLX_DM");
            gdslx = baseTools.getUrlQueryString("GDSLX");
            // 引用报表控制
            dcell(DCellWeb1,
                "/hlwsb/printModel/qysds/qysds_yj_a_2018/sb_qysds_jm_yj_a_fb1_2018.cll");
            curSeg.onQuery();

            DCellWeb1.inputCheck = function(col, row, sheet, text) {
                //校验各项输入不能小于0
                if(text<0){
                    alert("金额不能小于0");
                    return false;
                }
                //校验第4,5行之和小于第三行
                if(row>=9 && row<=11){
                    var array_ = new Array();
                    for(var i=9;i<=11;i++){
                        if(i == row){
                            array_.push(Number(text));
                        }else{
                            array_.push(DCellWeb1.GetCellDouble(col, i, 0));
                        }
                    }
                    if(array_[0]<(array_[1].add(array_[2]))){
                        alert(" 第3行本年累计金额不能小于第4+5行的和");
                        return false;
                    }
                }
                //校验第29行到第40行是否可以输入,规则：主表第3+4-5行的值大于本表第1+16+24行的值时可以输入
                if(row<(29+6) && col == 4){
                    var vAmount29b = curSeg.calc29Before().sub(DCellWeb1.GetCellDouble(col, row, 0)).add(Number(text));
                    if(ZBValueNeeded > vAmount29b){
                        curSeg.YESEditSNLJ();
                    }else{
                        curSeg.NOTEditSNLJ();
                    }
                }
                //第29行(＝第30+33+34+35+36+37+38+39+40行)所得减免必须满足以下规则:第29行≤表A200000第3+4-5行-本表第1+16+24行且本行≥0
                if(row>(30+6) && col == 4){
                    var vAmount30a = curSeg.calc30After().sub(DCellWeb1.GetCellDouble(col, row, 0)).add(Number(text)),
                         vAmount29b = curSeg.calc29Before();
                    var subLeft = ZBValueNeeded.sub(vAmount29b);
                    if(vAmount30a > subLeft){
                        alert("第29行“四、所得减免”必须小于等于表A200000第3+4-5行-本表第1+16+24行：即必须小于等于"+subLeft+"=("+ZBValueNeeded+"-"+vAmount29b+")");
                        return false;
                    }
                }
                //所得税业务需求确认_全20180621  结果所有其他不允许填写，金额不可以填写
                //表单中其他选项必须先选择项目才能填写金额
                // if(21==row || 29==row || 46==row) {
                //     if (4 == col && "" == DCellWeb1.GetCellString((col - 1), row, 0).trim()) {
                //         alert("请先选择其他中的项目再输入金额！");
                //         return false;
                //     }else if(3 == col && DCellWeb1.GetCellDouble(4,row,0) != 0){//如果金额已经有值，不允许将项目置空
                //         if("" == text.trim()){
                //             alert("该项目对应累计金额已经有值，项目不能置空");
                //             return false;
                //         }
                //     }
                // }
                return true;
            }

            //鼠标点击事件之后处理的内容
            DCellWeb1.MouseLClick = function(col, row) {
                if(4 == col && (21==row || 29==row || 46==row)) {
                    hValueText = DCellWeb1.GetCellString((col - 1), row, 0).trim();
                    if ("" == hValueText) {
                        //所得税业务需求确认_全20180621  结果所有其他不允许填写，金额不可以填写
                        // alert("请先选择其他中的项目！")
                    }
                }
            };

            // 删除组件释放内存
            $(window).unload(function () {
            });
        },
        // 查询数据
        onQuery: function () {

            baseTools.xhrAjax({
                url: "/hlwsb/qysds/getSB_QYSDS_JM_YJ_A_FB1.do",
                params: {
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, NSRLX_DM: NSRLX_DM,GDSLX:gdslx
                },
                callback: [curSeg.pageFlowControl]
            });
        },

        checkData: function () {
            //校验21,29,46行第三列，项目信息在对应金额有值得情况下不能为空
            var rows = [21,29,46];
            for(var i=0;i<rows.length;i++){
                var c3 = DCellWeb1.GetCellString(3,rows[i],0).trim(), c4 = DCellWeb1.GetCellDouble(4,rows[i],0);
                if("" == c3 && c4>0){
                    alert("请选择第"+(rows[i]-6)+"行其他中的项目！")
                    return false;
                }
            }
            return true;
        },

        //设置表29行至40行不可填写,并且把已经填写数据设置为0
        NOTEditSNLJ : function () {
            for (var j = 31; j <= 40; j++) {
                DCellWeb1.setValByLabel("D" + (j+6), 0);
                DCellWeb1.setCellInputByLabel("D" + (j+6) , 5);//5 只读，不可写
                DCellWeb1.setCellannotation("D" + (j+6), "当主表（A200000）第3+4-5行减本表第1+16+24行大于零时，可以填报本表第29至40行"); //设置表29行至40行不可填写的提示
            }
            DCellWeb1.setValByLabel("C46" , " ");
            DCellWeb1.setCellannotation('C46', "当主表（A200000）第3+4-5行减本表第1+16+24行大于零时，可以填报本表第29至40行");
            DCellWeb1.setCellInputByLabel("C46" , 5);//5 只读，不可写
        },
        //所得税业务需求确认_全20180621  结果所有其他不允许填写，金额不可以填写
        //设置表29行至40行可填写
        // YESEditSNLJ : function () {
        //     for (var j = 31; j <= 40; j++) {
        //         DCellWeb1.setCellInputByLabel("D" + (j+6) , 2);//2 可写
        //         DCellWeb1.setCellannotation("D" + (j+6), ""); //去掉表29行至40行不可填写的提示
        //     }
        //     DCellWeb1.setCellInputByLabel("C46" , 0);//0 缺省，可写
        //     DCellWeb1.setCellannotation('C46', "");
        // },
        YESEditSNLJ : function () {
            for (var j = 31; j <= 39; j++) {
                DCellWeb1.setCellInputByLabel("D" + (j+6) , 2);//2 可写
                DCellWeb1.setCellannotation("D" + (j+6), ""); //去掉表29行至40行不可填写的提示
            }
            DCellWeb1.setCellannotation('D46', "");
            DCellWeb1.setCellannotation('C46', "");
        },
        calcRowAmount:function(begin, end){
            var value = 0;
            for(var i=begin; i<=end;i++){
                value = value.add(DCellWeb1.GetCellDouble(4, i, 0));
            }
            return value;
        },
        calc29Before:function(){
            return this.calcRowAmount(8,9).add(this.calcRowAmount(12,21)).add(DCellWeb1.GetCellDouble(4, 23, 0)).add(this.calcRowAmount(25,29));
        },
        calc30After:function(){
            return curSeg.calcRowAmount(37, 46);
        },
        // 保存数据
        onSave: function () {

            if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能保存");
                return;
            }
            if (!curSeg.checkData()) {
                return false;
            }

            var map1 = DCellWeb1.submitJsonjs({
                cols: ["JMXM", "LJJE"],
                returnType: "object"
            });

            var url = "/hlwsb/qysds/insertSB_QYSDS_JM_YJ_A_FB1.do";
            baseTools.xhrAjax({
                url: url,
                params: {
                    DATA: JSON.stringify(map1),
                    SBBXH: SBBXH,
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q,
                    SSSQ_Z: SSSQ_Z,
                    NSRLX_DM: NSRLX_DM
                },
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
                var url = "/hlwsb/qysds/delSB_QYSDS_JM_YJ_A_FB1.do";
                baseTools.xhrAjax({
                    url: url,
                    params: {
                        SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, NSRLX_DM: NSRLX_DM,
                        SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z
                    },
                    callback: [curSeg.pageFlowControl]
                });
            }
        },

        initData: function (jsonObj) {
            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
            //获取主表中的数据
            var tempCount = 0;
            ZBValueNeeded = parseFloat(jsonObj.data.ZBDATA);
            if (SBBZT && jsonObj.data.BODY.length > 0) {
                tempCount = Number(jsonObj.data.BODY[0]["LJJE"]) + Number(jsonObj.data.BODY[15]["LJJE"]) + Number(jsonObj.data.BODY[23]["LJJE"]);
            }
            if ((ZBValueNeeded - tempCount) <= 0) {
                curSeg.NOTEditSNLJ();
            }

            //20180607  bxj 现行政策预缴申报不允许享受，暂不允许录入，根据后续是否出台新的政策文件另行修改该规则。
            DCellWeb1.setCellInputByLabel('D30', 5);
            DCellWeb1.setCellInputByLabel('D31', 5);
            DCellWeb1.setCellInputByLabel('D32', 5);
            DCellWeb1.setCellInputByLabel('D33', 5);
            DCellWeb1.setCellInputByLabel('D34', 5);
            DCellWeb1.setCellannotation('D30', "现行政策预缴申报不允许享受，暂不允许录入");
            DCellWeb1.setCellannotation('D31', "现行政策预缴申报不允许享受，暂不允许录入");
            DCellWeb1.setCellannotation('D32', "现行政策预缴申报不允许享受，暂不允许录入");
            DCellWeb1.setCellannotation('D33', "现行政策预缴申报不允许享受，暂不允许录入");
            DCellWeb1.setCellannotation('D34', "现行政策预缴申报不允许享受，暂不允许录入");

            var url = "/hlwsb/dm/getDM_QYSDS_JMSZC.do?isPrint=N";
            baseTools.xhrAjax({
                url: url,
                asyn: false,
                params: {
                    JMXZ_DM: "'0004129999','0004081518','0004021203'"
                    //JMXZ_DM:"'0004129999','0004021203'"
                },
                callback: [function (jsob) {
                    jmlist = jsob.data.BODY; //jmlist 数组类型
                    DCellWeb1.initSelectCell({
                        selectStr: curSeg.initSelectStr(['0004129999', '0004081518'], jmlist),  //15行
                        col: "QT15",
                        rowType: "staticRow"
                    });
                    DCellWeb1.initSelectCell({
                        selectStr: curSeg.initSelectStr(['0004129999'], jmlist),       //23行
                        col: "QT23",
                        rowType: "staticRow"
                    });
                    DCellWeb1.initSelectCell({
                        selectStr: curSeg.initSelectStr(['0004129999'], jmlist),      //40行
                        col: "QT40",
                        rowType: "staticRow"
                    });
                    //因ajax的callback执行时序性问题，需要先初始化所有下拉后才能给下拉赋值
                    DCellWeb1.initDataToCell({
                        cols: ["JMXM", "LJJE"],
                        data: jsonObj.data,
                        nsrxxCols: ["NSRSBH", "SSSQ", "NSRMC", "TBRQ"],
                        iszdjskxg: false
                    });
                }]
            });


            if (SBBZT == '2' || SBBZT == '3') {
                document.getElementById("save").disabled = true;
                document.getElementById("delete").disabled = true;
            }

        },
        initSelectStr: function (jmArray, jmlist) {
            var rtnstr = '';
            for (var i = 0; i < jmArray.length; i++) {
                for (var j = 0; j < jmlist.length; j++) {
                    if (jmArray[i] == jmlist[j].JMXZ_DM) {
                        //"储蓄存款利息所得(5%协定所得)\t0702\r\n储蓄存款利息所得(20%)\t0701\r\n储蓄存款利息所得(7.5%协定所得)\t0703\r\n储蓄存款利息所得(10%协定所得)\t0704\r\n储蓄存款利息所得(15%协定所得)\t0705\r\n储蓄存款利息所得(5%)\t0706\r\n储蓄存款利息所得(7%协定所得)\t0707\r\n",
                        rtnstr += jmlist[j].JMXZ_MC + '\t' + jmlist[j].XH + '\r\n';
                    }
                }
            }
            return rtnstr;
        },
        onEditSNLJ: function (obj) {
            DCellWeb1.editLjs(["LJJE"], obj.checked);
        },
//导入
        openPopWin: function () {
            return false;
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=jm_yj_a&&startRow=8&&sheetIndex=1&templatePath=../../printModel/qysds/qysds_yj_a_2018/sb_qysds_jm_yj_a_fb1_2018.zip',
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
                    DCellWeb1.ProtectFormula = false;
                    break;
                // 添加、更新以及状态更新操作返回标志
                case 1:
                    alert("保存成功");
                    top.main.changeNodeStatus(SBBZL_DM,"1");
                    break;
                // 删除操作返回标志
                case 2:
                    alert("删除成功");
                    top.main.changeNodeStatus(SBBZL_DM,"0");
                    window.location.reload();
                   // curSeg.initData(jsonObj);
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
                        jQuery(".toolBar input[type='button']").attr('disabled', 'true');
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
    jm_yj_a.onQuery();
}