/**
 * Created by 201-1 on 2018/5/17.
 */
//使用窗口组件加载时注释下面的代码
$(document).ready(function () {
    fjszb.onLoad();
});

var fjszb = (function () {
    //私有属性
    var curSeg;
    var SBBXH = '';
    var SBBZL_DM = '';
    var NSRLX_DM = '';
    var SSSQ_Q = '';
    var SSSQ_Z = '';
    var SBBZT = "";//申报状态
    var NSRMC = "";
    var arr = [];
    var JZYHBZ = "";//小规模普惠减征优惠标志
    //公有方法
    var zzsxssr = "0.00";//增值税销售收入
    var zzszfsbz = "N";//是否具有增值税主税标志
    var xfsxssr = "0.00";//消费税销售收入
    var xfszfsbz = "N";//是否具有消费主税标志
    var cjdata = [];
    var jydata = [];
    var dfjydata = [];
    var DJXH = '';
    var JZBL = 50;//减征比例
    var xgmBz;//小规模标志 Y小规模 N一般人
    var sfbhBz;//纳税人资格认定有效期起止是否包含当前征期 Y是 N否
    var jsyjList;
    var yjbz;//月季报标志
    var gzbz="";    //更正标志
    var jyfjslzzs=0;//教育附加税率增值税
    var dfjyfjslzzs=0;//地方教育附加税率增值税
    var jyfjbqynzzs=0;//教育附加本期应纳税额增值税
    var dfjyfjynzzs=0;//地方教育附加本期应纳税额增值税
    var jyfjslxfs=0;//教育附加税率消费税
    var dfjyfjslxfs=0;//地方教育附加税率消费税
    var jyfjbqynxfs=0;//教育附加本期应纳税额消费税
    var dfjyfjynxfs=0;//地方教育附加本期应纳税额消费税
    var hs_color=0;//获取灰色
    var bs_color=0;//获取白色
    var count = 0;//打开页面执行查询的次数
    return {
        //自动计算
        onCalc: function(obj) {
            DCellWeb1.calcManual(obj.checked);
        },
        onLoad: function () {
            curSeg = fjszb;
            //引用报表控制
            dcell(DCellWeb1, "/hlwsb/printModel/fjs/sb_fjs_zb.cll");
            for (var i = 0; i < DCellWeb1.GetVarCount; i++) {
                arr.push(DCellWeb1.EnumVar_J(i).name);
            }
            hs_color=DCellWeb1.GetCellBackColor(5,5,0);
            bs_color=DCellWeb1.GetCellBackColor(9,7,0);
            
           baseTools.xhrAjax({
                url: '/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_JMXZ_GT3&ZSXM=10109',
                async:false,
                params: {},
                callback: [function(jsonObj, xhrArgs) {
                    cjdata = jsonObj.data.BODY;
                }]
            });
            baseTools.xhrAjax({
                url: '/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_JMXZ_GT3&ZSXM=30203',
                async:false,
                params: {},
                callback: [function(jsonObj, xhrArgs) {
                    jydata = jsonObj.data.BODY;
                }]
            });
            baseTools.xhrAjax({
                url: '/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_JMXZ_GT3&ZSXM=30216',
                async:false,
                params: {},
                callback: [function(jsonObj, xhrArgs) {
                    dfjydata = jsonObj.data.BODY;
                }]
            });
            curSeg.initSelect();
            curSeg.onQuery();


            //删除组件释放内存
            $(window).unload(function () {
            });
        },
        onPrint: function () {
            return false;
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                NSRLX_DM: NSRLX_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z
            });
            window.location = "/hlwsb/fjs_print/sb_fjs_zb.html?" + str;
        },
        initSelect : function(){
            //登记注册类型
            DCellWeb1.initSelectCell({
                col : "DJZCLX",
                action : "/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDJZCLX",
                value : "DM",
                text : "MC",
                rowType : "staticRow"
            });
            //身份证件类型
            DCellWeb1.initSelectCell({
                col : "SFZJLX",
                action : "/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getSFZJLX",
                value : "DM",
                text : "MC",
                rowType : "staticRow"
            });
            //所属行业
            DCellWeb1.initSelectCell({
                col : "SSHY",
                action : "/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_SSHY",
                value : "DM",
                text : "MC",
                rowType : "staticRow"
            });
            //征收项目
            DCellWeb1.initSelectCell({
                selectStr: "城市维护建设税\t10109\r\n地方教育附加\t30216\r\n教育费附加\t30203\r\n",
                col: "ZSXM"
            });
            //征收品目
            DCellWeb1.initSelectCell({
                col : "ZSPM",
                action : "/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_ZSPM_FJS",
                value : "DM",
                text : "MC",
                count : 2
            });

            DCellWeb1.initSelectCell({
                col: "COL08",
                action: '/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_JMXZ_GT3',
                value: "DM",
                text: "MC",
                count : 2
            });

        },

        initSelectGt3:function(){
            var pos_zsxm = DCellWeb1.GetCellVar_J("ZSXM");
            var end = DCellWeb1.GetCellVar_J("HJ");
            var pos_col08 = DCellWeb1.GetCellVar_J("COL08");
            //全局变量
            h = Number(pos_col08.row) + 3;
            for(var j=Number(pos_zsxm.row)+3;j<end.row;j++){
                var zsxmdm = DCellWeb1.GetDroplistCellKey(pos_zsxm.col, j,pos_zsxm.sheet);

                if('10109'==zsxmdm){
                    var cjstr = " \t \r\n";
                    for (var i = 0; i < cjdata.length; i++) {
                        cjstr += cjdata[i]['MC'] + "\t" + cjdata[i]['DM'] + "\r\n";
                    }
                    DCellWeb1.SetDroplistCell(pos_col08.col, h++ , pos_col08.sheet, cjstr, 1);
                }else if('30216'==zsxmdm){
                    var dfstr = " \t \r\n";
                    for (var i = 0; i < dfjydata.length; i++) {
                        dfstr += dfjydata[i]['MC'] + "\t" + dfjydata[i]['DM'] + "\r\n";
                    }
                    DCellWeb1.SetDroplistCell(pos_col08.col, h++ , pos_col08.sheet, dfstr, 1);
                }else if('30203'==zsxmdm){
                    var jystr = " \t \r\n";
                    for (var i = 0; i < jydata.length; i++) {
                        jystr += jydata[i]['MC'] + "\t" + jydata[i]['DM'] + "\r\n";
                    }
                    DCellWeb1.SetDroplistCell(pos_col08.col, h++ , pos_col08.sheet, jystr, 1);
                }
            }
        },
        //查询数据
        onQuery: function () {
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");    //获取页面申报表种类代码标记
            NSRLX_DM = baseTools.getUrlQueryString("NSRLX_DM");    //获取页面纳税人类型代码标记
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");

            var NSRZG_DM = hlwsbTools.getCookie("QX_USER").data.NSRZG_DM;
            if(NSRZG_DM.indexOf("201")>=0 || NSRZG_DM.indexOf("202")>=0){
                xgmBz = "N";
            }else{
                xgmBz = "Y";
            }
            var url = "/hlwsb/fjs/getSB_FJS_ZB.do";
            baseTools.xhrAjax({
                url: url,
                params: {SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, NSRLX_DM: NSRLX_DM},
                callback: [curSeg.pageFlowControl]
            });
        },
        //保存数据
        onSave: function () {
            if (SBBZT == "2" || SBBZT == "3") {
                alert("数据已申报，不允许添加");
                return null;
            }
            var data = DCellWeb1.cellRowToJson({
                cols: ["ZSXM", "ZSPM", "COL01", "COL02", "COL03", "COL04",  "COL05", "COL06", "COL07", "COL08", "COL09",
                    "COL10", "COL11", "COL12", "COL13","HC", "XGMJZE", "XGMJZBL", "XGMYHZC", "XGMJMXZDM", "XGMJMSWSX","CJRHJMXZ","BQDMJE"],
                returnType: "object",
                cellRows: [
                    {start: "DEL", end: "HJ"}
                ],
                headCols : ["DJLX01", "DJLX02", "DJZCLX", "SSHY", "SFZJLX", "SFZJHM","LXFS","JSYJXGYY","CJRHBZ","DQXZTZE","SQLDKDMJE","JZXQKDMJE","DQXZKDMJE","JZBL"]
            });
            //本期是否适用试点建设培育产教融合型企业抵免政策 N否  Y是'
            var cjrhbzS = DCellWeb1.getValByLabel("J11");
            var cjrhbzF = DCellWeb1.getValByLabel("K11");
            if(cjrhbzS == "1"){
                data.HEAD.CJRHBZ="Y";
            }else if(cjrhbzF == "1"){
                data.HEAD.CJRHBZ="N";
            }
            this.tjclCode(data.HEAD, arr);
            if (data.BODY.length <= 0) {
                alert('请您增加一行进行填写');
                return false;
            }
            //20190424添加监控 计税依据修改后需提示填写计税依据修改原因
            if(jsyjList && jsyjList.length>0){
                var jsyjxgyy = DCellWeb1.getValByName("JSYJXGYY");
                var jsyjxgbz = false;//计税依据修改标志
                for(var i=0;i<jsyjList.length;i++){
                    if(jsyjList[i].ZSPM=='101090101' ||jsyjList[i].ZSPM=='101090201'||jsyjList[i].ZSPM=='101090301'|| jsyjList[i].ZSPM=='302160100' ||jsyjList[i].ZSPM=='302030100'){
                        var zzsJsyj_jk = jsyjList[i].COL01;
                        var zzsJsyj_ym = DCellWeb1.GetCellDouble(6,20+i,0);
                        if(zzsJsyj_jk != zzsJsyj_ym){
                            jsyjxgbz = true;
                            break;
                        }
                    }else if(jsyjList[i].ZSPM=='101090103'||jsyjList[i].ZSPM=='101090203'||jsyjList[i].ZSPM=='101090303' ||jsyjList[i].ZSPM=='302030300'|| jsyjList[i].ZSPM=='302160300'){
                        var xfsJsyj_jk = jsyjList[i].COL03;
                        var xfsJsyj_ym = DCellWeb1.GetCellDouble(8,20+i,0);
                        if(xfsJsyj_jk != xfsJsyj_ym){
                            jsyjxgbz = true;
                            break;
                        }
                    }
                }
                if(jsyjxgbz && (jsyjxgyy == null || jsyjxgyy == "")){
                    if(!confirm("计税依据已修改且未录入“计税依据修改原因”，是否继续保存？")){
                        return;
                    }
                }
                if(curSeg.getLen(jsyjxgyy)>900){
                    alert("计税依据修改原因输入内容过长，不能大于300个汉字。");
                    return;
                }
            }

            //联系电话号码验证允许输入7位
            var lxfs = DCellWeb1.getValByLabel("M7");
            var phoneNumReg =/((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
            if (!(phoneNumReg.test(lxfs))){
                alert( "请输入正确的联系方式!");
                return false;
            }

            //20190726判断结转下期可抵免金额
            var jzxqkdmje = DCellWeb1.getValByName("JZXQKDMJE");
            if(Number(jzxqkdmje) < 0){
                alert("第12列“本期抵免金额”之和不能大于“上期留抵可抵免金额+当期新增投资额*30%”");
                return;
            }

            var end = DCellWeb1.GetCellVar_J("HJ");
            for(var i=20;i<end.row;i++){
                var bqynse = DCellWeb1.getCellDouble(12,i,0);//本期应纳税额
                var jmxzdm = DCellWeb1.GetDroplistCellKey(13,i,0).replace(/(^\s*)/g, "");//减免性质代码
                var jme = DCellWeb1.getCellDouble(14,i,0);//减免额
                var yjsf = DCellWeb1.getCellDouble(18,i,0);//应缴税费
                var ybtse = DCellWeb1.getCellDouble(19,i,0);//应补退税额
                var bqdmje = DCellWeb1.getCellDouble(17,i,0);//本期抵免金额
                var zzsxgmjze = DCellWeb1.getCellDouble(15,i,0);//增值税小规模纳税人减征额

                if(jmxzdm != "" && Number(jme) <=0){
                    alert("“减免性质代码”录入时，“减免额应大于0”");
                    return false;
                }
                if(jmxzdm == "" && Number(jme) !=0){
                    alert("减免额应大于0时减免性质代码不能为空");
                    return false;
                }


                //控制减免额不能为负数 likun 20180710
                if( Number(jme) <0){
                    alert("第"+(i-19)+"行减免额不能小于0");
                    return false;
                }
                //计税（费）依据一般增值税不能为负数 likun 20180710
                var jsyj_zzs = DCellWeb1.getCellDouble(6,i,0);
                if( Number(jsyj_zzs) <0){
                    alert("第"+(i-19)+"行计税（费）依据一般增值税不能小于0");
                    return false;
                }
                //计税（费）依据消费税不能为负数 likun 20180710
                var jsyj_xfs= DCellWeb1.getCellDouble(8,i,0);
                if( Number(jsyj_xfs) <0){
                    alert("第"+(i-19)+"行计税（费）依据消费税不能小于0");
                    return false;
                }
                if(Number(bqynse)<Number(jme)){
                    alert("本期减免税（费）额减免额不能大于本期应纳税（费）额");
                    return false;
                }
                if(Number(bqynse)<Number(yjsf)){
                    alert("本期已缴税（费）额不能大于本期应纳税（费）额");
                    return false;
                }
                if(Number(bqdmje) > 0 && Number(bqynse)-Number(jme)-Number(zzsxgmjze) < Number(bqdmje)){
                    alert("第"+(i-19)+"行本期抵免金额不能大于“本期应纳税额-减免额-增值税小规模纳税人减征额”");
                    return false;
                }
                if(Number(ybtse)<0){
                    alert("本期应补（退）税（费）额不能小于0。请检查您的申报表填写是否申报正确，若申报表确定填写无误，请到办税服务厅办理！");
                    return false;
                }
            }

            var sfsyxgm_1 = Number(DCellWeb1.GetCellDouble(10, 8, 0));
            var sfsyxgm_2 = Number(DCellWeb1.GetCellDouble(11, 8, 0));
            var XGMYHZC1;
            if((sfsyxgm_1 == 0 && sfsyxgm_2 == 0) || (sfsyxgm_1 == 1 && sfsyxgm_2 == 1)){
                alert("请选择本期是否适用增值税小规模纳税人优惠政策");
                return false;
            }else if(sfsyxgm_1 == 1){
                XGMYHZC1 = "Y";
            }else{
                XGMYHZC1 = "N";
            }

            var url = "/hlwsb/fjs/insertSB_FJS_ZB.do";
            baseTools.xhrAjax({
                url: url,
                params: {DATA: JSON.stringify(data), SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, XGMYHZC:XGMYHZC1},
                callback: [curSeg.pageFlowControl]
            });
        },
        //校验数据长度
        getLen : function(val){
            var realLen = 0;len = val.length,charCode = -1;
            for(var i=0;i<len;i++){
                charCode = val.charCodeAt(i);
                if(charCode>=0 && charCode<=128){
                    realLen += 1;
                }else{
                    realLen += 3;
                }
            }
            return realLen;
        },
        //保存前校验检查
        checkSave: function (){
            if(xgmBz&&xgmBz=="N"&&sfbhBz=="Y"){
                var val = DCellWeb1.GetCellDouble(10,8,0);
                if(val == 1){
                    alert("不属于增值税小规模纳税人，本期不适用增值税小规模纳税人优惠政策，如需享受，请去大厅核实");
                    return false;
                }
            }
        },
        onDelete: function () {
            if (SBBZT == "2" || SBBZT == "3") {
                alert("数据已申报，不允许删除");
                return null;
            }
            if (confirm("确定删除此报表？")) {
                var url = "/hlwsb/fjs/delSB_FJS_ZB.do";
                baseTools.xhrAjax({
                    url: url,
                    params: {SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, NSRLX_DM: NSRLX_DM},
                    callback: [curSeg.pageFlowControl]
                });
            }
        } ,
        initData: function (jsonObj) {
	    DJXH = jsonObj.data.DJXH;
            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            JZYHBZ = jsonObj.data.JZYHBZ;
	    NSRMC = jsonObj.data.HEAD.NSRMC;
            jsyjList = jsonObj.data.JCSJ.DSLIST;
            this.tjclDeCode(jsonObj.data.HEAD, arr);
            DCellWeb1.initRowToCell({
                cols: ["ZSXM", "ZSPM", "COL01", "COL02", "COL03", "COL04", "COL05", "COL06", "COL07", "COL08",
                    "COL09", "COL10", "COL11", "COL12", "COL13", "HC", "XGMJZE",
                    "XGMJZBL", "XGMYHZC", "XGMJMXZDM", "XGMJMSWSX","CJRHJMXZ","BQDMJE"],
                returnType: "object",
                cellRows: [
                    {
                        start: "DEL", end: "HJ",
                        hc: "HC", xl: "XH",
                        addButton: {name: "ADD"},
                        delButton: {
                            name: "DEL",
                            checkbox: "CZ",
                            url: "/hlwsb/fjs/delSB_FJS_ZB.do",
                            params: {
                                SBBXH: SBBXH,
                                SBBZL_DM: SBBZL_DM,
                                SSSQ_Q: SSSQ_Q,
                                SSSQ_Z: SSSQ_Z,
                                NSRLX_DM: NSRLX_DM
                            }
                        }
                    }
                ],
                headCols: ["DJLX01", "DJLX02", "DJZCLX", "SSHY", "SFZJLX", "SFZJHM", "LXFS","JSYJXGYY","CJRHBZ","DQXZTZE","SQLDKDMJE","JZXQKDMJE","DQXZKDMJE","JZBL"],
                nsrxxCols: ["NSRSBH","NSRMC","SSSQ", "TBRQ"],
                data: jsonObj.data
            });

            //检查征收品目，若征收品目为空，刷新页面
            if(curSeg.checkZspm(jsonObj)){
                return;
            }

            //DJZCLX  4开头的时个体，其余是单位
            if( jsonObj.data.HEAD.DJZCLX.substr(0,1) == '4' ){
                DCellWeb1.setValByLabel("O5",1);
                DCellWeb1.setValByLabel("M5",0);
            }else{
                DCellWeb1.setValByLabel("O5",0);
                DCellWeb1.setValByLabel("M5",1);
            }
            //初始化sfbhBz值
            sfbhBz = jsonObj.data.SFBHBZ;
            yjbz = jsonObj.data.YJBZ;//"1"是季报，"0"不是季报
            //报表打开时有关小微的提示信息
            curSeg.initTexInfo();
            //初始化优惠政策及减征比例的值
            if(jsonObj.data.BODY&&jsonObj.data.BODY.length>0){
                var XGMYHZC2 = jsonObj.data.BODY[0].XGMYHZC;
                if(XGMYHZC2 == "Y"){
                    curSeg.initYhzcJzbl(1);
                }else if(XGMYHZC2 == "N"){
                    curSeg.initYhzcJzbl(0);
                }else{
                    if(xgmBz == 'Y' || (xgmBz == "N" && sfbhBz == "N")){
                        curSeg.initYhzcJzbl(1);
                    }else{
                        curSeg.initYhzcJzbl(0);
                    }
                }
            }

            if( sfbhBz == "N"){
                curSeg.jzzCondition(jsonObj);//控制减征额列可输入
            }

            //初始化本期是否适用试点建设培育产教融合型企业抵免政策
            if(jsonObj.data.HEAD){
                var CJRHBZ = jsonObj.data.HEAD.CJRHBZ;
                if(CJRHBZ == "Y"){
                    DCellWeb1.setValByLabel("J11",1);
                    DCellWeb1.setValByLabel("K11",0);
                    DCellWeb1.setCellInputByLabel("R11",2);
                    DCellWeb1.SetCellBackColor(18, 11, 0, bs_color);//将颜色置为规范要求中的白色
                    curSeg.cjrhxdmzcControl(2)
                }else{
                    DCellWeb1.setValByLabel("J11",0);
                    DCellWeb1.setValByLabel("K11",1);
                }
            }
            //增加如果是更正 当期新增投资额不能输入
            if(gzbz=="Y"){
                DCellWeb1.setCellInputByLabel("R11",5);
                DCellWeb1.SetCellBackColor(18, 11, 0, hs_color);//将颜色置为规范要求中的白色
            }
            if(jsonObj.data.JCSJ){
                if(jsonObj.data.JCSJ.DSLIST){
                    var tsxx = "温馨提示:    \n";
                    if(jsonObj.data.JCSJ.DSLIST.length==0){
                        tsxx += "附加税已申报!若增值税的应纳税额合计为零，网上申报成功后，税局系统会自动触发附加税零申报。";
                    }else{
                        for(var i = 0;i<jsonObj.data.JCSJ.DSLIST.length;i++){
                            var jcsjMap = jsonObj.data.JCSJ.DSLIST[i];
                            if(jcsjMap.ZFSBZ==2){//增值税附加
                                zzsxssr = jcsjMap.XSSR;
                                zzszfsbz = "Y";
                            }else if(jcsjMap.ZFSBZ==3){//消费税附加
                                xfsxssr = jcsjMap.XSSR;
                                xfszfsbz = "Y";
                            };
                        };

                        if("Y"==zzszfsbz){
                            tsxx += "增值税收入额为："+zzsxssr+"元；\r\n";
                        }
                        if("Y"==xfszfsbz){
                            tsxx += "消费税收入额为："+xfsxssr+"元；\r\n";
                        }
                    }

                    if(tsxx != "" && SBBZT!=2 && SBBZT!=3){
                        tsxx += "注意：请再次确认您主税(增值税或消费税)已申报成功，再填写保存附加税，否则会导致附加税申报" +
                            "失败。(如主税申报成功前已填写保存附加税，请先行删除附加税)\r\n" +
                            "请您详细核对报表带出的数据行，为保证带出数据正确，" +
                            "请您先行点击报表上方的“删除”按钮重新获取数据之后再填写剩余的征收品目。";
                        alert(tsxx);
                        DCellWeb1.setValByLabel("A2",tsxx);
                    }
                };
            }

            //核选框
            DCellWeb1.checkCellChanged = function(col, row) {
                var msg = "您季度属期内有月份为增值税小规模纳税人，可以享受小规模纳税人减征政策！";
                var checkVal = DCellWeb1.GetCellDouble(col, row, 0);
                if(col == 10 && row == 8){//XGMYHZC  是否适用小规模纳税人优惠政策  1是
                    if(checkVal == 1){
                        curSeg.setYhzcInput(1,jsonObj);
                    }else{
                        alert(msg);
                        curSeg.setYhzcInput(0,jsonObj);
                    }
                }else if(col == 11 && row == 8){//XGMYHZC  是否适用小规模纳税人优惠政策   1否
                    if(checkVal == 1){
                        alert(msg);
                        curSeg.setYhzcInput(0,jsonObj);
                    }else{
                        curSeg.setYhzcInput(1,jsonObj);
                    }
                }

                //监控本期是否适用试点建设培育产教融合型企业抵免政策
                if(col == 10 && row == 11){
                    if(checkVal == 1){
                        DCellWeb1.setValByLabel("K11",0);
                        //选择是
                        DCellWeb1.setCellInputByLabel("R11",2);
                        DCellWeb1.SetCellBackColor(18, 11, 0, bs_color);//将颜色置为规范要求中的白色
                        curSeg.cjrhxdmzcControl("2");
                    }else{
                        DCellWeb1.setValByLabel("K11",1);
                        //选择否
                        DCellWeb1.setValByLabel("R11",0);
                        DCellWeb1.setValByLabel("R12",0);
                        DCellWeb1.setValByLabel("R13",0);
                        DCellWeb1.setCellInputByLabel("R11",5);
                        DCellWeb1.SetCellBackColor(18, 11, 0, hs_color);//将颜色置为规范要求中的灰色
                        curSeg.cjrhxdmzcControl("3");
                    }
                }else if(col == 11 && row == 11){
                    if(checkVal == 1){
                        DCellWeb1.setValByLabel("J11",0);
                        //选择否
                        DCellWeb1.setValByLabel("R11",0);
                        DCellWeb1.setValByLabel("R12",0);
                        DCellWeb1.setValByLabel("R13",0);
                        DCellWeb1.setCellInputByLabel("R11",5);
                        DCellWeb1.SetCellBackColor(18, 11, 0, hs_color);//将颜色置为规范要求中的灰色
                        curSeg.cjrhxdmzcControl("3");
                    }else{
                        DCellWeb1.setValByLabel("J11",1);
                        //选择是
                        DCellWeb1.setCellInputByLabel("R11",2);
                        DCellWeb1.SetCellBackColor(18, 11, 0, bs_color);//将颜色置为规范要求中的白色
                        curSeg.cjrhxdmzcControl("2");
                    }
                }

            };
            curSeg.initSelectGt3();
            if(SBBZT){
                for(var j=0;j<jsonObj.data.BODY.length;j++){
                    var col08 = jsonObj.data.BODY[j].COL08;
                    DCellWeb1.SetDroplistCellKey(13,20+j,0,col08);
                }
            }
            //添加下拉框事件 进行减免税额根据减免性质代码自动带出
            //（目前仅限0007064002 0061064002国家重大水利工程建设基金免征教育费附加   0061042802按月纳税的月销售额或营业额不超过10万元缴纳义务人免征教育费附加
            DCellWeb1.selectChange = function (col, row) {
                var jmxz = DCellWeb1.GetDroplistCellKey(col, row, 0).replace(/\s+/g,"");
                var zsxmdm = DCellWeb1.GetDroplistCellKey(4,row,0);
                var col07 = DCellWeb1.getCellDouble(12,row,0);
                if( col==13 && jmxz.length>0){
                    var jmxzmc = DCellWeb1.getCellString(13,row,0);
                    var jmxzDM = jmxzmc.substring(0,10);
                    if (jmxzDM=="0007013612"||jmxzDM=="0007013613"||jmxzDM=="0061013610"||jmxzDM=="0061013611"||
                        jmxzDM=="0099013603"||jmxzDM=="0099013604"){
                        //20190328 chenbojun获取“重点群体人员”是否采集
                        baseTools.xhrAjax({
                            url: '/hlwsb/dm/getJMXZDM_ZDQT.do',
                            params: {DJXH: DJXH},
                            callback: [function (jsonObj) {
                                if (jsonObj.data.zdqtCount <= 0) {
                                    if(confirm('没有采集企业重点群体人员信息，不能享受这个减免性质，点击“确定”按钮进行采集。')){
                                        if(parent.openNewTab){//平台登陆，调用平台方法
                                            // parent.openNewTab("4","企业重点群体人员采集", "/hlwsb/zzs/ybnsr/sb_zzs_ybnsr_zdqtrycj.html","79116");//测试环境
                                            parent.openNewTab("4","企业重点群体人员采集", "/hlwsb/zzs/ybnsr/sb_zzs_ybnsr_zdqtrycj.html","78484");//正式环境
                                        }else{//网报端登陆，调用网报密码
                                            parent.navTab.openTab("101011056", "zzs/ybnsr/sb_zzs_ybnsr_zdqtrycj.html", {title:"企业重点群体人员采集",external:true});
                                        }
                                    }
                                    //('您本年度未采集"企业重点群体人员信息"，不能享受对应减免优惠，请到税务机关进行采集');
                                    DCellWeb1.SetDroplistCellKey(col, row, 0, ' ');
                                    DCellWeb1.SetCellString(col, row, 0, ' ');
                                }
                            }]
                        });
                    }
                    else if (jmxzDM=="0007011804"||jmxzDM=="0061011804"||jmxzDM=="0099011802"){
                        //20190328 chenbojun获取“自主就业退役士兵”是否采集
                        baseTools.xhrAjax({
                            url: '/hlwsb/dm/getJMXZDM_TYSB.do',
                            params: {DJXH: DJXH},
                            callback: [function (jsonObj) {
                                if (jsonObj.data.tysbCount <= 0) {
                                    if(confirm('没有采集企业退役士兵信息，不能享受这个减免性质，点击“确定”按钮进行采集。')){
                                        if(parent.openNewTab){//平台登陆，调用平台方法
                                            // parent.openNewTab("4","企业退役士兵采集", "/hlwsb/zzs/ybnsr/sb_zzs_ybnsr_qytysbcj.html","79117");//测试环境
                                            parent.openNewTab("4","企业退役士兵采集", "/hlwsb/zzs/ybnsr/sb_zzs_ybnsr_qytysbcj.html","78485");//正式环境
                                        }else{//网报端登陆，调用网报密码
                                            parent.navTab.openTab("101011057", "zzs/ybnsr/sb_zzs_ybnsr_qytysbcj.html", {title:"企业退役士兵采集",external:true});
                                        }
                                    }
                                    //alert('您本年度未采集"企业退役士兵信息"，不能享受对应减免优惠，请到税务机关进行采集');
                                    DCellWeb1.SetDroplistCellKey(col, row, 0, ' ');
                                    DCellWeb1.SetCellString(col, row, 0, ' ');
                                }

                            }]
                        });
                    }else {
                        baseTools.xhrAjax({
                            url: '/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_QY_YHBA_DS',
                            params: {DJXH: DJXH,JMXZ_DM:jmxz,ZSXM_DM:zsxmdm,SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z},
                            callback: [function (jsonObj) {
                                if (jsonObj.data.BODY.length == 0) {
                                    //alert("请到税务机关进行减免事项备案");
                                    DCellWeb1.setCellDouble(14,row,0,0.00);
                                    DCellWeb1.setCellDouble(15,row,0,(col07*0.5).toFixed(2));
                                }else{
                                    var jmzlx_dm = jsonObj.data.BODY[0].JMZLX_DM;
                                    if("01"==jmzlx_dm){//01减征。02免征
                                        var jzsl = jsonObj.data.BODY[0].JZSL;
                                        var jzed = jsonObj.data.BODY[0].JZED;
                                        var jzfd = jsonObj.data.BODY[0].JZFD;
                                        if(jzsl && jzsl!=0){
                                            DCellWeb1.setCellDouble(14,row,0,0.00);
                                        }else if(jzed && jzed!=0){
                                            if(jzed>col07){//税额式减免，和应纳税额比较，孰小取谁
                                                DCellWeb1.setCellDouble(14,row,0,col07);
                                            }else{
                                                DCellWeb1.setCellDouble(14,row,0,jzed);
                                            }
                                        }else if(jzfd && jzfd!=0){
                                            var dd = Math.round(col07*jzfd*100)/100;
                                            DCellWeb1.setCellDouble(14,row,0,dd);
                                        }else{
                                            DCellWeb1.setCellDouble(14,row,0,0.00);
                                        }
                                    }else{
                                        DCellWeb1.setCellDouble(14,row,0,col07);
                                    }
                                }
                                var jme = DCellWeb1.getCellDouble(14,row,0);
                                if(jme==0){
                                    if(jmxz=="16" || jmxz=="27" || jmxz=="26" || jmxz=="111"){
                                        DCellWeb1.setCellDouble(14,row,0,col07);
                                    }else{
                                        DCellWeb1.setCellDouble(14,row,0,0);
                                    }
                                }
                            }]
                        });
                    }
                }else{
                    DCellWeb1.setCellDouble(14,row,0,0);
                }

                if(jyfjJmbz == true){
                    var del = DCellWeb1.GetCellVar_J("DEL");
                    var hj = DCellWeb1.GetCellVar_J("HJ");
                        var zspm = DCellWeb1.getDroplistCellKey(5,row,0);
                        var ynse = DCellWeb1.GetCellDouble2(12,row,0);
                        if((zspm=="302030100" && jmxz == "26") || (zspm=="302160100" && jmxz == "111")){//增值税教育费附加 增值税地方教育附加
                            DCellWeb1.SetCellDouble(14,row,0,hlwsbTools.formatFloatData(ynse,3).toFixed(2));
                        }else{
                            DCellWeb1.SetCellDouble(14,row,0,0);
                        }
                }else{
                    var zspm = DCellWeb1.getDroplistCellKey(5,row,0);
                    if(zspm=="302030100"){//增值税教育费附加
                        DCellWeb1.SetCellDouble(14,row,0,0);
                    }else if(zspm=="302160100"){//增值税地方教育附加
                        DCellWeb1.SetCellDouble(14,row,0,0);
                    }
                }
            };
            //控制主费是增值税的话，锁住计税依据-消费税不能编辑，是消费税的控制增值税不能编辑 likun 20180710
            for(var i=0;i<jsonObj.data.BODY.length;i++){
                if(jsonObj.data.BODY[i].ZSPM=='101090101' ||jsonObj.data.BODY[i].ZSPM=='101090201'||jsonObj.data.BODY[i].ZSPM=='101090301'|| jsonObj.data.BODY[i].ZSPM=='302160100' ||jsonObj.data.BODY[i].ZSPM=='302030100'){
                    //只读
                    DCellWeb1.SetCellInput(8, (17 + i), 0, 5);
                    DCellWeb1.SetCellBackColor(8, (17 + i), 0, DCellWeb1.FindColorIndex(0xEBEBEB,1));//将颜色置为规范要求中的灰色
                }else if(jsonObj.data.BODY[i].ZSPM=='101090103'||jsonObj.data.BODY[i].ZSPM=='101090203'||jsonObj.data.BODY[i].ZSPM=='101090303' ||jsonObj.data.BODY[i].ZSPM=='302030300'|| jsonObj.data.BODY[i].ZSPM=='302160300'){
                    //只读
                    DCellWeb1.SetCellInput(6, (17 + i), 0, 5);
                    DCellWeb1.SetCellInput(7, (17 + i), 0, 5);
                    DCellWeb1.SetCellBackColor(6, (17 + i), 0, DCellWeb1.FindColorIndex(0xEBEBEB,1));//将颜色置为规范要求中的灰色
                    DCellWeb1.SetCellBackColor(7, (17 + i), 0, DCellWeb1.FindColorIndex(0xEBEBEB,1));//将颜色置为规范要求中的灰色
                }
            }

            DCellWeb1.inputCheck = function (col, row, sheet, text) {
                if (row >= 20 && row < DCellWeb1.GetCellVar_J("HJ").row) {
                    if (col == 15 || col == 14) {
                        var YNSE = DCellWeb1.GetCellDouble2(12,row,0);
                        var JME = DCellWeb1.GetCellDouble2(14,row,0);

                        if (JME > YNSE) {
                            alert("减免额不得大于应纳税额："+YNSE);
                            DCellWeb1.SetCellDouble(14,row,0,0);
                            return false;
                        }
                        //最大减征额
                        var JZELimit = (YNSE - JME)/2;
                        var JZEFill =  DCellWeb1.GetCellDouble2(15,row,0);

                        if (sfbhBz = "N" && col == 15) {
                            if (JZEFill > JZELimit || JZEFill < 0) {
                                alert("减征额必须大于0且不得大于最大减征额："+JZELimit);
                                DCellWeb1.SetCellDouble(15,row,0,JZELimit);
                                return false;
                            }
                        } else {
                            DCellWeb1.SetCellDouble(15,row,0,JZELimit);
                        }
                        var isxm = DCellWeb1.GetCellDouble2(11,8,0);
                        if (isxm == 0) {
                            var je6 = DCellWeb1.GetCellDouble2(6,row,0);
                            var je7 = DCellWeb1.GetCellDouble2(7,row,0);
                            var je8 = DCellWeb1.GetCellDouble(8,row,0);
                            var je9 = DCellWeb1.GetCellDouble(9,row,0);
                            var je10 = DCellWeb1.GetCellDouble(11,row,0);
                            var jme = DCellWeb1.GetCellDouble2(14,row,0);

                            var ynse = (je6+je7+je8+je9)*je10;
                            var JZELimit = (ynse-jme)/2;
                            DCellWeb1.SetCellDouble(15,row,0,JZELimit);
                        } else {
                            DCellWeb1.SetCellDouble(15,row,0,0);
                        }

                    }

                    //增值税额改变，将减免额、减征额清空重新填
                    if (col == 7) {
                        var isxm = DCellWeb1.GetCellDouble2(11,8,0);
                        if (isxm == 0) {
                            var je6 = DCellWeb1.GetCellDouble2(6,row,0);
                            var je7 = DCellWeb1.GetCellDouble2(7,row,0);
                            var je8 = DCellWeb1.GetCellDouble(8,row,0);
                            var je9 = DCellWeb1.GetCellDouble(9,row,0);
                            var je10 = DCellWeb1.GetCellDouble(11,row,0);
                            var jme = DCellWeb1.GetCellDouble2(14,row,0);

                            var ynse = (je6+je7+je8+je9)*je10;
                            var JZELimit = (ynse-jme)/2;
                            DCellWeb1.SetCellDouble(15,row,0,JZELimit);
                        } else {
                            DCellWeb1.SetCellDouble(15,row,0,0);
                        }
                    }

                    if (col == 6) {
                        var isxm = DCellWeb1.GetCellDouble2(11,8,0);
                        if (isxm == 0) {
                            var je6 = DCellWeb1.GetCellDouble2(6,row,0);
                            var je7 = DCellWeb1.GetCellDouble2(7,row,0);
                            var je8 = DCellWeb1.GetCellDouble(8,row,0);
                            var je9 = DCellWeb1.GetCellDouble(9,row,0);
                            var je10 = DCellWeb1.GetCellDouble(11,row,0);
                            var jme = DCellWeb1.GetCellDouble2(14,row,0);

                            var ynse = (je6+je7+je8+je9)*je10;
                            var JZELimit = (ynse-jme)/2;
                            DCellWeb1.SetCellDouble(15,row,0,JZELimit);
                        } else {
                            DCellWeb1.SetCellDouble(15,row,0,0);
                        }



                        var del = DCellWeb1.GetCellVar_J("DEL");
                        var hj = DCellWeb1.GetCellVar_J("HJ");
                        if(yjbz=="1"){//季报

                                var zspm = DCellWeb1.getDroplistCellKey(5,row,0);
                                var ynse = (Number(text)+Number(DCellWeb1.GetCellDouble2(7,row,0))+Number(DCellWeb1.GetCellDouble2(8,row,0))+Number(DCellWeb1.GetCellDouble2(9,row,0)))*Number(DCellWeb1.GetCellDouble2(11,row,0));
                                var jmxz = DCellWeb1.GetDroplistCellKey(13, row, 0).replace(/\s+/g,"");
                                if((zspm=="302030100" && jmxz == "26" && Number(text) < 300000.01)
                                    || (zspm=="302160100" && jmxz == "111" && Number(text) < 300000.01)){//增值税教育费附加 增值税地方教育附加
                                    DCellWeb1.SetCellDouble(14,row,0,hlwsbTools.formatFloatData(ynse,3).toFixed(2));
                                }else{
                                    DCellWeb1.SetCellDouble(14,row,0,0);
                                }
                        }else{//月报
                                var zspm = DCellWeb1.getDroplistCellKey(5,row,0);
                                var ynse = (Number(text)+Number(DCellWeb1.GetCellDouble2(7,row,0))+Number(DCellWeb1.GetCellDouble2(8,row,0))+Number(DCellWeb1.GetCellDouble2(9,row,0)))*Number(DCellWeb1.GetCellDouble2(11,row,0));
                                var jmxz = DCellWeb1.GetDroplistCellKey(13, row, 0).replace(/\s+/g,"");
                                if((zspm=="302030100" && jmxz == "26" && Number(text) < 100000.01)
                                    || (zspm=="302160100" && jmxz == "111" && Number(text) < 100000.01)){//增值税教育费附加 增值税地方教育附加
                                    DCellWeb1.SetCellDouble(14,row,0,hlwsbTools.formatFloatData(ynse,3).toFixed(2));
                                }else{
                                    DCellWeb1.SetCellDouble(14,row,0,0);
                                }

                        }
                    }
                    //20190424添加监控 输入已缴金额时给出以下提示 待确人
                    /*if(col == 16){
                        if(confirm("附加税以主税的实缴税额作为计税依据，请确认是否需要填写已缴金额")){
                            return true;
                        }
                    }*/
                }
                //当期新增投资，一般增值税，免抵税额，消费税 四栏触发
                if(col == 6 || col == 7 || col == 8 || (col ==18 && row ==11)){
                    var checkVal = DCellWeb1.GetCellDouble(10, 11, 0);
                    if(checkVal==1){
                        curSeg.cjrhxdmzcControl("2");
                    }
                }
                return true;
            };

            if(SBBZT || gzbz == 'Y'){//保存过
                if (jsonObj.data.BODY && jsonObj.data.BODY.length > 0) {
                    var hj = DCellWeb1.GetCellVar_J("HJ");
                    for (var i = 0;i<hj.row-20 ; i++) {
                        var XGMJZE11  = jsonObj.data.BODY[i].XGMJZE;
                        DCellWeb1.SetCellDouble(15, 20 + i, 0, XGMJZE11);
                    }
                }
            }else{//未保存
                /*
                 *
                 * 1、增值税/消费税按月销售额<=10万，按季销售额<=30万的纳税人免征教育附加和地方教育附加，
                 * 其中教育附加减免代码默认选择 0061042802 ，地方教育附加减免代码默认选择0099042802，减免额等于本期应纳税额；
                 */
                var jyfjJmbz = false;//教育附加减免标志
                if(yjbz=="1"){//季报
                    if(zzsxssr<300000.01){
                        jyfjJmbz = true;
                    }
                }else if(zzsxssr<100000.01){//月报
                    jyfjJmbz = true;
                }
                if(jyfjJmbz == true){
                    var del = DCellWeb1.GetCellVar_J("DEL");
                    var hj = DCellWeb1.GetCellVar_J("HJ");
                    for (var i = del.row+3;i<hj.row; i++) {
                        var zspm = DCellWeb1.getDroplistCellKey(5,i,0);
                        var ynse = DCellWeb1.GetCellDouble2(12,i,0);
                        var zzsjsyj = DCellWeb1.GetCellDouble(6,i,0);
                        var xfsjsyj = DCellWeb1.GetCellDouble(8,i,0);
                        if((zspm=="302030100" && zzsjsyj != 0) || (zspm=="302030300" && xfsjsyj != 0)){//增值税/消费税教育费附加
                            DCellWeb1.setDroplistCellKey(13,i,0,"26");//0061042802
                            DCellWeb1.SetCellDouble(14,i,0,ynse);
                        }else if((zspm=="302160100" && zzsjsyj != 0) || (zspm=="302160300" && xfsjsyj != 0)){//增值税/消费税地方教育附加
                            DCellWeb1.setDroplistCellKey(13,i,0,"111");//0099042802
                            DCellWeb1.SetCellDouble(14,i,0,ynse);
                        }
                    }
                }
            }
            DCellWeb1.MouseLClick= function(col, row) {
                //控制减免性质代码没有选择，不允许输入减免额
                if(col==14 &&row==18){
                    var jmxz = DCellWeb1.GetDroplistCellKey(col-1, row, 0).replace(/\s+/g,"");
                    if(jmxz=="" || jmxz==null){
                        //DCellWeb1.setCellDouble(14,14,0,0);
                        alert("请选择减免性质，在录入减免税额！");
                    }
                }else if(col==14 &&row==19){
                    var jmxz = DCellWeb1.GetDroplistCellKey(col-1, row, 0).replace(/\s+/g,"");
                    if(jmxz=="" || jmxz==null){
                        alert("请选择减免性质，在录入减免税额！");
                    }

                }else if(col==14 &&row==20){
                    var jmxz = DCellWeb1.GetDroplistCellKey(col-1, row, 0).replace(/\s+/g,"");
                    if(jmxz=="" || jmxz==null){
                        alert("请选择减免性质，在录入减免税额！");
                    }

                }
                return  true;
            }
        },
	//报表打开时有关小微的提示信息
        initTexInfo:function(){
            var jzz_msg = "根据《国家税务总局关于增值税小规模纳税人地方税种和相关附加减征政策有关征管问题的公告》" +
                "（国家税务总局公告2019年第5号）第二条的规定：增值税一般纳税人按规定转登记为小规模纳税人的，" +
                "自成为小规模纳税人的当月起适用减征优惠。增值税小规模纳税人按规定登记为一般纳税人的,自一般纳税人" +
                "生效之日起不再适用减征优惠；增值税年应税销售额超过小规模纳税人标准应当登记为一般纳税人而未登记，" +
                "经税务机关通知，逾期仍不办理登记的，自逾期次月起不再适用减征优惠。请您认真核对各税种的纳税义务发生时间，" +
                "如实申报本期增值税小规模纳税人减征额。"+
                "纳税人自行修改本期增值税小规模纳税人减征额,修改范围为大于等于0，" +
                "小于等于计算出来的减征额（最大不超过本期应纳税额的50%）";
            var xgm_msg = NSRMC+"属于增值税小规模纳税人，本期适用增值税小规模纳税人优惠政策(城市维护建设税减免税代码:0007049901," +
                "教育费附加减免税代码:0061049901,地方教育附加减免税代码:0099049901)\r\n"+
                "如不需要享受小规模纳税人地方税种及附加减征政策，请到办税服务厅办理申报";
            var ybr_msg = NSRMC + "不属于增值税小规模纳税人，本期不适用增值税小规模纳税人优惠政策(城市维护建设税减免税代码:0007049901," +
                "教育费附加减免税代码:0061049901,地方教育附加减免税代码:0099049901)\r\n"+
                "如您确实享受该政策，请到办税服务厅办理申报";
            if(sfbhBz == "Y"){
	    	//广西地方特色，判定是否享受小规模普惠减征优惠政策
                if (JZYHBZ == 'Y') {
                    alert(NSRMC + "属于增值税小规模纳税人，本期适用增值税小规模纳税人优惠政策(城市维护建设税减免税代码:0007049901," +
                        "教育费附加减免税代码:0061049901,地方教育附加减免税代码:0099049901)");
		    curSeg.initYhzcJzbl(1);
                } else if (JZYHBZ == 'N') {
                    alert(NSRMC + "不属于增值税小规模纳税人，本期不适用增值税小规模纳税人优惠政策(城市维护建设税减免税代码:0007049901," +
                        "教育费附加减免税代码:0061049901,地方教育附加减免税代码:0099049901)");
                    curSeg.initYhzcJzbl(0);
                } else if (JZYHBZ == 'H') {
                    alert("您当前申报所属期内同时存在两种纳税状态，请您及时联系主管税务机关！");
                    curSeg.disableButton();
                }
            }else if(sfbhBz == "N"){
                alert(jzz_msg);
                DCellWeb1.SetCellInput(10,8,0,1);
                DCellWeb1.SetCellInput(11,8,0,1);
                DCellWeb1.SetCellBackColor(10,8,0, DCellWeb1.FindColorIndex(0xFFFFFF,1));//修改单元格颜色为白色
                DCellWeb1.SetCellBackColor(11,8,0, DCellWeb1.FindColorIndex(0xFFFFFF,1));//修改单元格颜色为白色
            }
        },
	 //初始化优惠政策及减征比例
        initYhzcJzbl:function(flag){
            if(flag == 1){//享受小微普惠
                DCellWeb1.setValByLabel("J8",1);
                DCellWeb1.setValByLabel("K8",0);
                DCellWeb1.setValByLabel("R8",JZBL);
                DCellWeb1.setValByLabel("R9",JZBL);
                DCellWeb1.setValByLabel("R10",JZBL);
            }else{//不享受小微普惠
                DCellWeb1.setValByLabel("J8",0);
                DCellWeb1.setValByLabel("K8",1);
                DCellWeb1.setValByLabel("R8",0);
                DCellWeb1.setValByLabel("R9",0);
                DCellWeb1.setValByLabel("R10",0);
            }
        },
        //选择优惠政策核选框设置减征比例及减征额监控
        setYhzcInput:function(flag,jsonObj){
            if(flag == 1){//选择是
                DCellWeb1.setValByLabel("J8",1);
                DCellWeb1.setValByLabel("K8",0);
                DCellWeb1.setValByLabel("R8",JZBL);
                DCellWeb1.setValByLabel("R9",JZBL);
                DCellWeb1.setValByLabel("R10",JZBL);
                if (sfbhBz = "N") {
                    curSeg.jzzCondition(jsonObj);
                }
            }else{//选择否
                DCellWeb1.setValByLabel("J8",0);
                DCellWeb1.setValByLabel("K8",1);
                DCellWeb1.setValByLabel("R8",0);
                DCellWeb1.setValByLabel("R9",0);
                DCellWeb1.setValByLabel("R10",0);
                var hj = DCellWeb1.GetCellVar_J("HJ");
                for (var i = 0;i<hj.row-20 ; i++) {
                    DCellWeb1.SetCellDouble(15,20+i,0,0);
                    DCellWeb1.SetCellInput(15,20+i,0,5);
                    DCellWeb1.SetCellBackColor(15,20+i,0, DCellWeb1.GetCellBackColor(5,5,0));
                }
            }
        },
        //解析因为cll中用了复选框，和数据库中的字段不一致，添加解析和拼装的方法。cell中名称定义也有一点规则
        tjclDeCode: function (map, arr) {
            var temp = {};
            for (var i = 0; i < arr.length; i++) {
                if (isNaN(Number(arr[i].substr(arr[i].length - 2, 2)))) {
                    continue;
                }
                temp[arr[i].substr(0, arr[i].length - 2)] = 1;
            }
            for (var k in temp) {

                var val = map[k];
                if (val) {
                    map[k + "0" + val] = 1;
                }
            }
        },
        tjclCode: function (map, arr) {

            for (var i = 0; i < arr.length; i++) {
                var val = map[arr[i]];
                var key = arr[i].substr(0, arr[i].length - 2);
                if (isNaN(Number(arr[i].substr(arr[i].length - 2, 2)))) {
                    continue;
                }

                if (val == 1) {
                    map[key] = Number(arr[i].substr(arr[i].length - 2, 2));
                }

                delete map[arr[i]];

            }
        },
        roundTFix: function (value) {
            if (!isNaN(value)) {
                return parseFloat(Number(Number(value).toFixed(3)).toFixed(2));
            } else {
                return value;
            }
        },

        disableButton: function () {
            var inputList = document.getElementsByTagName('input');
            for (var i = 0; i < inputList.length; i++) {
                inputList[i].disabled = true;
            }
            DCellWeb1.setCellInputByLabel("A9", 5);
            DCellWeb1.setCellInputByLabel("A11", 5);
            DCellWeb1.SetCellColor("A9", DCellWeb1.FindColorIndex(0xEBEBEB,1));
            DCellWeb1.SetCellColor("A11", DCellWeb1.FindColorIndex(0xEBEBEB,1));
        },
	//季中转处理
        jzzCondition:function(jsonObj){
            //N为季中转，将纳税人减征额列第10列放开可填写
            var hj = DCellWeb1.GetCellVar_J("HJ");
            for (var i = 0;i<hj.row-20 ; i++) {
                var XGMJZE;
                var XGMYHZC3;
                if(jsonObj.data.BODY && jsonObj.data.BODY.length>0){
                    XGMYHZC3 = jsonObj.data.BODY[i].XGMYHZC;
                }
                var YNSE = DCellWeb1.GetCellDouble2(12,20+i,0);
                var JME = DCellWeb1.GetCellDouble2(14,20+i,0);
                var JZBL = DCellWeb1.GetCellDouble2(18,8,0);
                XGMJZE = ((YNSE - JME)*JZBL*0.01).toFixed(2);
                DCellWeb1.SetCellDouble(15,20+i,0,XGMJZE);
                var sfyh = DCellWeb1.GetCellDouble(10, 8, 0);
                if(XGMYHZC3 == null || sfyh == 1){//未保存时
                    DCellWeb1.SetFormula(15,20+i,0,"");
                    DCellWeb1.SetCellInput(15,20+i,0,2);
                    DCellWeb1.SetCellBackColor(15,20+i,0,DCellWeb1.FindColorIndex(0xFFFFFF,1));
                }
                if(SBBZT && XGMYHZC3=='Y' && sfbhBz=='N'){//已保存时
                    DCellWeb1.SetFormula(15,20+i,0,"");
                    DCellWeb1.SetCellInput(15,20+i,0,2);
                    DCellWeb1.SetCellBackColor(15,20+i,0,DCellWeb1.FindColorIndex(0xFFFFFF,1));
                }
            }
        },
        //试点建设培育产教融合型企业 flag=1 为初始化城市维护建设税 flag=2为本期是否适用试点建设培育产教融合型企业抵免政策选择是赋值试点建设培育产教融合型企业
        // flag=3本期是否适用试点建设培育产教融合型企业抵免政策选择否清空试点建设培育产教融合型企业
        cjrhxdmzcControl:function(flag){

            var del = DCellWeb1.GetCellVar_J("DEL");
            var hj = DCellWeb1.GetCellVar_J("HJ");

            for (var i = del.row+3;i<hj.row; i++) {
                var zsxm = DCellWeb1.getDroplistCellKey(4,i,0);

                if(flag == "1" && zsxm=="10109"){
                    //初始化调用城市维护建设税
                    DCellWeb1.SetCellString(16,i,0,"");
                    DCellWeb1.SetCellDouble(17,i,0,0.00);
                }
                if(flag =="2") {
                    //本期是否适用试点建设培育产教融合型企业抵免政策
                    if (zsxm == "30216") {
                        //地方教育附加
                        DCellWeb1.SetCellString(16, i, 0, "0099101401产教融合型企业地方教育附加抵免|《财政部关于调整部分政府性基金有关政策的通知》 财税﹝2019〕46号第三条");
                        DCellWeb1.setCellInput(17, i, 0, 2);
                        DCellWeb1.SetCellBackColor(17, i, 0, bs_color);

                    } else if (zsxm == "30203") {
                        //教育费附加
                        DCellWeb1.SetCellString(16, i, 0, "0061101402产教融合型企业教育费附加抵免|《财政部关于调整部分政府性基金有关政策的通知》 财税﹝2019〕46号第三条");
                        DCellWeb1.setCellInput(17, i, 0, 2);
                        DCellWeb1.SetCellBackColor(17, i, 0, bs_color);
                    }
                }else if(flag =="3"){
                    if (zsxm == "30216" || "30203") {
                        DCellWeb1.SetCellString(16, i, 0, "");
                        DCellWeb1.SetCellDouble(17, i, 0, 0);
                        DCellWeb1.setCellInput(17, i, 0, 5);
                        DCellWeb1.SetCellBackColor(17, i, 0, hs_color);
                    }
                }
            }
        },
        //检查征收品目判断是否需要重新加载数据
        checkZspm:function(jsonObj){
            if(jsonObj.data.BODY && jsonObj.data.BODY.length>0 && count == 0){
                var zspmGt3 = jsonObj.data.BODY[0]['ZSPM'];
                if(zspmGt3){
                    var colZspm = DCellWeb1.GetCellVar_J("ZSPM");
                    var zspm = DCellWeb1.GetDroplistCellKey(colZspm.col,colZspm.row+3,colZspm.sheet);
                    if(!zspm || zspm.trim() == ''){
                        count++;
                        curSeg.initSelect();
                        curSeg.onQuery();
                        return true;
                    }
                }
            }
            return false;
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
                    //试点建设培育产教融合型企业
                    curSeg.cjrhxdmzcControl("1");
                    break;
                //添加、更新以及状态更新操作返回标志
                case 1:
                    alert("保存成功");
                    top.main.changeNodeStatus(SBBZL_DM, "1");
                    break;
                // 删除操作返回标志
                case 2:
                    alert("删除成功");
                    top.main.changeNodeStatus(SBBZL_DM, "0");
                    DCellWeb1.SetDroplistCellKey(5,7,0,' ');
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
                    jsonObj.msg = jsonObj.msg.replace(/^[\S\s]+:/g, '');
                    DCellWeb1.setValByLabel('A2', jsonObj.msg);
                    baseTools.hideMash();
                    curSeg.disableButton();
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