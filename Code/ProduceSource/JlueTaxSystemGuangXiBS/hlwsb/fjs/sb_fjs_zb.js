/**
 * Created by 201-1 on 2018/5/17.
 */
//使用窗口组件加载时注释下面的代码
$(document).ready(function () {
    fjszb.onLoad();
});
/**
 *
 *
 */
var fjszb = (function () {
    //私有属性
    var curSeg; // 保存fb4对象的
    var SBBXH = '';
    var SBBZL_DM = '';
    var NSRLX_DM = '';
    var SSSQ_Q = '';
    var SSSQ_Z = '';
    var SBBZT = "";//申报状态
    var arr = [];
    var NSRSBH_DS = "";//地税纳税人识别号
    //私有方法
    //是否是添加
    var bAdd = true;
    //私有方法

    var zzsxssr = "0.00";//增值税销售收入
    var zzszfsbz = "N";//是否具有增值税主税标志
    var xfsxssr = "0.00";//消费税销售收入
    var xfszfsbz = "N";//是否具有消费主税标志
    //公有方法
    var djxh_ds ;
    var cjdata = [];
    var jydata = [];
    var dfjydata = [];
    return {
        //自动计算
        onCalc: function
            (obj) {
            DCellWeb1.calcManual(obj.checked);
        }
        ,
        onLoad: function () {
            curSeg = fjszb;
            //引用报表控制
            dcell(DCellWeb1, "/hlwsb/printModel/fjs/sb_fjs_zb.cll");
            for (var i = 0; i < DCellWeb1.GetVarCount; i++) {
                arr.push(DCellWeb1.EnumVar_J(i).name);
            }
            curSeg.initSelect();
            curSeg.onQuery();


            baseTools.xhrAjax({
                url: '/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_JMXZ_GT3&ZSXM=10109',
                params: {},
                callback: [function(jsonObj, xhrArgs) {
                    cjdata = jsonObj.data.BODY;
                }]
            });
            baseTools.xhrAjax({
                url: '/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_JMXZ_GT3&ZSXM=30203',
                params: {},
                callback: [function(jsonObj, xhrArgs) {
                    jydata = jsonObj.data.BODY;
                }]
            });
            baseTools.xhrAjax({
                url: '/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_JMXZ_GT3&ZSXM=30216',
                params: {},
                callback: [function(jsonObj, xhrArgs) {
                    dfjydata = jsonObj.data.BODY;
                }]
            });



            //curSeg.initSelectGt3();
            //删除组件释放内存
            $(window).unload(function () {
            });
        }
        ,
        onPrint: function () {
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
                action : "/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_ZSPM",
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
                cols: ["ZSXM", "ZSPM", "COL01", "COL02", "COL03", "COL04",  "COL05", "COL06", "COL07", "COL08", "COL09", "COL10", "COL11", "COL12", "COL13","HC"],
                returnType: "object",
                cellRows: [
                    {start: "DEL", end: "HJ"}
                ],
                headCols : ["DJLX01", "DJLX02", "DJZCLX", "SSHY", "SFZJLX", "SFZJHM", "LXFS"]
            });
            this.tjclCode(data.HEAD, arr);
            if (data.BODY.length <= 0) {
                alert('请您增加一行进行填写');
                return false;
            }
            //联系电话号码验证允许输入7位
            var lxfs = DCellWeb1.getValByLabel("M7");
            var phoneNumReg =/((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
            if (!(phoneNumReg.test(lxfs))){
                alert( "请输入正确的联系方式!");
                return false;
            }
            ////个体户校验身份类型和号码
            //if("1"==DCellWeb1.getValByLabel("O5")){
            //  if(DCellWeb1.getValByLabel("E7").replace(/(^\s*)/g, "")=="" ||DCellWeb1.getValByLabel("I7").replace(/(^\s*)/g, "")==""){
            //    alert("登记类型为个人时，身份证件类型和身份证件号码必须输入！");
            //      return false;
            //  }
            //}

            var end = DCellWeb1.GetCellVar_J("HJ");
            for(var i=14;i<end.row;i++){
                var bqynse = DCellWeb1.getCellDouble(12,i,0);
                var jmxzdm = DCellWeb1.GetDroplistCellKey(13,i,0).replace(/(^\s*)/g, "");
                var jme = DCellWeb1.getCellDouble(14,i,0);
                var yjsf = DCellWeb1.getCellDouble(15,i,0);
                var ybtse = DCellWeb1.getCellDouble(16,i,0);
                if(jmxzdm!= "" && Number(jme) <=0){
                    alert("“减免性质代码”录入时，“减免额应大于0”");
                    return false;
                }
                //控制减免额不能为负数 likun 20180710
                if( Number(jme) <0){
                    alert("第"+(i-13)+"行减免额不能小于0");
                    return false;
                }
                //计税（费）依据一般增值税不能为负数 likun 20180710
                var jsyj_zzs = DCellWeb1.getCellDouble(6,i,0);
                if( Number(jsyj_zzs) <0){
                    alert("第"+(i-13)+"行计税（费）依据一般增值税不能小于0");
                    return false;
                }
                //计税（费）依据消费税不能为负数 likun 20180710
                var jsyj_xfs= DCellWeb1.getCellDouble(8,i,0);
                if( Number(jsyj_xfs) <0){
                    alert("第"+(i-13)+"行计税（费）依据消费税不能小于0");
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
                if(Number(ybtse)<0){
                    alert("本期应补（退）税（费）额不能小于0");
                    return false;
                }
            }
            var url = "/hlwsb/fjs/insertSB_FJS_ZB.do";
            baseTools.xhrAjax({
                url: url,
                params: {DATA: JSON.stringify(data), SBBXH: SBBXH, SBBZL_DM: SBBZL_DM},
                callback: [curSeg.pageFlowControl]
            });
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
            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            this.tjclDeCode(jsonObj.data.HEAD, arr);
            DCellWeb1.initRowToCell({
                cols: ["ZSXM", "ZSPM", "COL01", "COL02", "COL03", "COL04", "COL05", "COL06", "COL07", "COL08", "COL09", "COL10", "COL11", "COL12", "COL13", "HC"],
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
                headCols: ["DJLX01", "DJLX02", "DJZCLX", "SSHY", "SFZJLX", "SFZJHM", "LXFS"],
                nsrxxCols: ["NSRSBH","NSRMC","SSSQ", "TBRQ"],
                data: jsonObj.data
            });
            NSRSBH_DS = jsonObj.data.HEAD.NSRSBH;
            djxh_ds = jsonObj.data.DJXH_DS;
            DCellWeb1.setValByLabel("D4",NSRSBH_DS);
            //DJZCLX  4开头的时个体，其余是单位
            if( jsonObj.data.HEAD.DJZCLX.substr(0,1) == '4' ){
            	DCellWeb1.setValByLabel("O5",1);
            	DCellWeb1.setValByLabel("M5",0);
            }else{
            	DCellWeb1.setValByLabel("O5",0);
            	DCellWeb1.setValByLabel("M5",1);
            }
            if(jsonObj.data.JCSJ!=null){
                if(jsonObj.data.JCSJ.DSLIST){
                    var tsxx = "温馨提示:    \n";
                    if(jsonObj.data.JCSJ.DSLIST.length==0){
                        // tsxx += "附加税已申报";
                        tsxx += "附加税已申报!若增值税小规模的应纳税额合计为零，网上申报成功后，税局系统会自动触发附加税零申报。";

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
                            tsxx += "增值税收入额为："+zzsxssr+"元；";
                            tsxx += "\t\n注意：请再次确认您主税(增值税或消费税)已申报成功，再填写保存附加税，否则会导致附加税申报失败。\t\n(如主税申报成功前已填写保存附加税，请先行删除附加税)";
                        }
                        if("Y"==xfszfsbz){
                            tsxx += "消费税收入额为："+xfsxssr+"元；";
                            tsxx += "\t\n注意：请再次确认您主税(增值税或消费税)已申报成功，再填写保存附加税，否则会导致附加税申报失败。\t\n(如主税申报成功前已填写保存附加税，请先行删除附加税)";
                        }
                    }

                    if(tsxx != "" && SBBZT!=2 && SBBZT!=3){
                        alert(tsxx);
                        DCellWeb1.setValByLabel("A2",tsxx);
                    }
                };
            }

            //核选框
            DCellWeb1.checkCellChanged = function(col, row) {
                var name = DCellWeb1.FindCellVar(col, row, 0);
                var djlx = name.substr(0, name.length - 2);
                var djlxArr = [];
                switch(djlx){
                    case 'DJLX':
                        djlxArr = ["DJLX01","DJLX02"];
                        break;
                }
                for(var i=0; i<djlxArr.length; i++) {
                    if(name!=djlxArr[i]) {
                        var map = DCellWeb1.GetCellVar_J(djlxArr[i]);
                        DCellWeb1.SetCellDouble(map.col,map.row,map.sheet,0);
                    }
                }
            };
            curSeg.initSelectGt3();
            
            if(SBBZT){
                for(var j=0;j<jsonObj.data.BODY.length;j++){
                	var col08 = jsonObj.data.BODY[j].COL08;
                	DCellWeb1.SetDroplistCellKey(13,14+j,0,col08);
                }
            }
            
            //添加下拉框事件 进行减免税额根据减免性质代码自动带出
            //（目前仅限0007064002 0061064002国家重大水利工程建设基金免征教育费附加   0061042802按月纳税的月销售额或营业额不超过10万元缴纳义务人免征教育费附加
            DCellWeb1.selectChange = function (col, row) {
                var jmxz = DCellWeb1.GetDroplistCellKey(col, row, 0).replace(/\s+/g,"");
                var zsxmdm = DCellWeb1.GetDroplistCellKey(4,row,0);
                var col07 = DCellWeb1.getCellDouble(12,row,0);
                if( col==13 && jmxz.length>0){
//                	var jmxzmc = DCellWeb1.getCellString(13,row,0);
//                	var jmxzDM = jmxzmc.substring(0,10);
                    
                    baseTools.xhrAjax({
                        url: '/hlwsb/dm/getSb_DM_WITH.do?SID=dm.getDM_QY_YHBA_DS',
                        params: {DJXH: djxh_ds,JMXZ_DM:jmxz,ZSXM_DM:zsxmdm,SSSQ_Q:SSSQ_Q,SSSQ_Z:SSSQ_Z},
                        callback: [function (jsonObj) {
                            if (jsonObj.data.BODY.length == 0) {
                                alert("请到税务机关进行减免事项备案");
                                DCellWeb1.setCellDouble(14,row,0,0.00);
                            }else{
                            	var jmzlx_dm = jsonObj.data.BODY[0].JMZLX_DM;
                            	if("01"==jmzlx_dm){//01减征。02免征
//                            		var jmlx_dm = jsonObj.data.BODY[0].JMLX_DM;//1 税率式减免 2 税额式减免 3 税基式减免 9 其他 
                            		var jzsl = jsonObj.data.BODY[0].JZSL;
                            		var jzed = jsonObj.data.BODY[0].JZED;
                            		var jzfd = jsonObj.data.BODY[0].JZFD;
                            		if(jzsl && jzsl!=0){
                            			DCellWeb1.setCellDouble(14,row,0,0.00);
//                            			DCellWeb1.setCellDouble(14,row,0,Math.round(col07*jzsl*100)/100);
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
                            	if(jmxz=="16" || jmxz=="27" || jmxz=="26"){
                            		DCellWeb1.setCellDouble(14,row,0,col07);
                            	}else{
                            		DCellWeb1.setCellDouble(14,row,0,0);
                            	}
                            }
                        }]
                    });
                    
                }else{
                	DCellWeb1.setCellDouble(14,row,0,0);
                }
            };
            //控制主费是增值税的话，锁住计税依据-消费税不能编辑，是消费税的控制增值税不能编辑 likun 20180710
            for(var i=0;i<jsonObj.data.BODY.length;i++){
                if(jsonObj.data.BODY[i].ZSPM=='101090101' || jsonObj.data.BODY[i].ZSPM=='302160100' ||jsonObj.data.BODY[i].ZSPM=='302030100'){
                    //只读
                    DCellWeb1.SetCellInput(8, (14 + i), 0, 5);
                }else if(jsonObj.data.BODY[i].ZSPM=='101090103'|| jsonObj.data.BODY[i].ZSPM=='302030300'|| jsonObj.data.BODY[i].ZSPM=='302160300'){
                    //只读
                    DCellWeb1.SetCellInput(6, (14 + i), 0, 5);
                }
            }
            DCellWeb1.MouseLClick= function(col, row) {
                //控制减免性质代码没有选择，不允许输入减免额
                if(col==14 &&row==14){
                    var jmxz = DCellWeb1.GetDroplistCellKey(col-1, row, 0).replace(/\s+/g,"");
                    if(jmxz=="" || jmxz==null){
                        //DCellWeb1.setCellDouble(14,14,0,0);
                        alert("请选择减免性质，在录入减免税额！");
                    }
                }else if(col==14 &&row==15){
                    var jmxz = DCellWeb1.GetDroplistCellKey(col-1, row, 0).replace(/\s+/g,"");
                    if(jmxz=="" || jmxz==null){
                        alert("请选择减免性质，在录入减免税额！");
                    }

                }else if(col==14 &&row==16){
                    var jmxz = DCellWeb1.GetDroplistCellKey(col-1, row, 0).replace(/\s+/g,"");
                    if(jmxz=="" || jmxz==null){
                        alert("请选择减免性质，在录入减免税额！");
                    }

                }
                return  true;
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
            DCellWeb1.setCellInputByLabel("A8", 5);
            DCellWeb1.setCellInputByLabel("A10", 5);
        }
        ,

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
                    //DCellWeb1.ProtectFormula = false;
                    break;
                //添加、更新以及状态更新操作返回标志
                case 1:
                    bAdd = false;
                    alert("保存成功");
                    top.main.changeNodeStatus(SBBZL_DM, "1");
                    break;
                // 删除操作返回标志
                case 2:
                    alert("删除成功");
                    top.main.changeNodeStatus(SBBZL_DM, "0");
                    DCellWeb1.SetDroplistCellKey(5,7,0,' ');
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
    }
        ;
})
();