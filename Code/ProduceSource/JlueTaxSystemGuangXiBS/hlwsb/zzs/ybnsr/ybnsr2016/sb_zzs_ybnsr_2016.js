// 使用窗口组件加载时注释下面的代码
$(document).ready(function () {
    ybnsr2016.onLoad();
});
/**
 *
 *
 */
var ybnsr2016 = (function () {
    // 私有属性
    var curSeg; // 保存ybnsr对象的
    var SBBXH = '';
    var SBBZL_DM = '';
    var SSSQ_Q = '';
    var SSSQ_Z = '';
    var SBBZT = '';
    var winObj = '';
    var YGZNSRLX_DM = '';
    var yqwrdybr = '';//逾期未认定一般人标志。0：表示否，1表示是逾期为认定一般纳税人
    // 私有方法
    var data1;
    // 是否是添加
    var bAdd = true;

    var JZJTZG;
    var jjdjbz='N';
    var jjdjmrtk = "";
    var zzsJjdz = "";
    // 私有方法

    // 公有方法
    return {

        onEditSNLJ: function (obj) {
            DCellWeb1.editLjs(["YBHW_LW_BNLJ", "JZJTHW_LW_BNLJ"], obj.checked);
        },

        onExport: function () {
            DCellWeb1.ExportExcelDlg();
        }, onLoad: function () {
            curSeg = ybnsr2016;
            // 引用报表控制
            
            dcell(DCellWeb1, "/hlwsb/printModel/zzs/ybnsr/ybnsr2016/sb_zzs_ybnsr_2016.cll");
          
            curSeg.onQuery();
            // 删除组件释放内存


            $(window).unload(function () {
            });
        },
        onPrint: function () {
            return false;
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z,
                zb: baseTools.getUrlQueryString("zb"),
                fb3: baseTools.getUrlQueryString("fb3")
            });
            window.location = "/hlwsb/zzs_print/ybnsr/ybnsr2016/sb_zzs_ybnsr_2016.html?" + str;
        },
        // 查询数据
        onQuery: function () {
        	yqwrdybr = hlwsbTools.getYqwrdybr();//从cookie中获取逾期未认定一般人标志
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM"); // 获取页面申报表种类代码标记
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");
            YGZNSRLX_DM = hlwsbTools.getYGZNSRLX_DM();
            var url = "/hlwsb/zzs/ybnsr/getSB_ZZS_YBNSR.do";
            baseTools.xhrAjax({
                url: url,
                params: {SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, YGZNSRLX_DM: YGZNSRLX_DM},
                callback: [curSeg.pageFlowControl]
            });
        },
        //生成季中转一般人时间   广西特色20190731-baoxiaodi
        zzsTsxx: function (jsonObj) {
            sysdat = jsonObj.data.HEAD.TBRQ;
            pressq = jsonObj.data.presssq;//2019-06-01，2019-05-01
            pressqz = jsonObj.data.presssqz;//2019-06-30，2019-05-31
            beforssq = jsonObj.data.beforsssq;//2019-05-01，2019-04-01
            histssq = jsonObj.data.histsssq;//2019-04-01，2019-03-01
            var sysdatarr = sysdat.split('-');
            myMonth = sysdatarr[1];
            if (myMonth == '01' || myMonth == '12' || myMonth == '04' || myMonth == '03' || myMonth == '07' || myMonth == '06' || myMonth == '10' || myMonth == '09') {
                curSeg.onGetSfzxx(myMonth);
            }
        },
        onGetSfzxx: function (myMonth,jsonObj) {
            if (myMonth == '01' || myMonth == '04' || myMonth == '07' || myMonth == '10') {
                curSeg.runSfzxx(pressq, beforssq, histssq);
            } else {
                curSeg.runSfzxx(pressq, beforssq, '');
            }
        },
        //查询是否属于新规则
        runSfzxx: function (ssq3, ssq2, ssq1) {
            month1 = ssq1.split('-')[1];
            month2 = ssq2.split('-')[1];
            //从cookie中获取纳税人名称
            var nsrmc = hlwsbTools.getNSRMC();
            if (ssq3 && ssq3 != '') {
                month3 = ssq3.split('-')[1];
            }
            var sssq_z = ssq1 == "" ? ssq2 : ssq1; //可选择月份是3个 用ssq1,2个 用ssq2
            baseTools.xhrAjax({
                url: "/hlwsb/sbkk/getSfzxxsw.do",
                params: {NSRSBH: baseTools.getUserZh(), SSSQ_Q: ssq3, SSSQ_Z: sssq_z},
                callback: [function (jsonObj) {
                    jzzzg = jsonObj.JZZZG;
                    var data = jsonObj.data;
                    if (data && data.length > 0) {
                        //属于新规则的纳税人不能进行保存
                        document.getElementById("save").disabled = true;
                        alert("由于您单位("+nsrmc+")为 '季度中转登记增值税一般纳税人'，目前系统暂不支持'季度中转登记增值税一般纳税人'的纳税人进行增值税及其附加税申报，请到办税服务厅进行申报。");
                    }
                }]
            });
        },
        save: function () {
            var data = DCellWeb1.submitJsonjs({
                cols: ["YBHW_LW_BYS", "YBHW_LW_BNLJ", "JZJTHW_LW_BYS",
                    "JZJTHW_LW_BNLJ"]
            });
            var url = bAdd ? "/hlwsb/zzs/ybnsr/insertSB_ZZS_YBNSR.do" : "/hlwsb/zzs/ybnsr/updateSB_ZZS_YBNSR.do";
            baseTools.xhrAjax({
                url: url,
                params: {
                    DATA: data,
                    SBBXH: SBBXH,
                    SBBZL_DM: SBBZL_DM
                },
                callback: [curSeg.pageFlowControl]
            });
        },
        // 保存数据
        onSave: function (tip) {
            var data = DCellWeb1.submitJsonjs({
                cols: ["YBHW_LW_BYS", "YBHW_LW_BNLJ", "JZJTHW_LW_BYS",
                    "JZJTHW_LW_BNLJ"]
            });
            var body = JSON.parse(data).BODY;
            var msg = curSeg.checkData(body);
            if (hlwsbTools.trim(msg)) {
                alert(msg);
                return;
            }
            if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能保存");
                return;
            }
            if (tip != 1) {
                if (confirm('是否要保存?')) {
                    curSeg.save();
                }
            } else {
                curSeg.save();
            }
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
                var url = "/hlwsb/zzs/ybnsr/delSB_ZZS_YBNSR.do";
                baseTools.xhrAjax({
                    url: url,
                    params: {
                        SBBXH: SBBXH,
                        SBBZL_DM: SBBZL_DM,
                        SSSQ_Q: SSSQ_Q,
                        SSSQ_Z: SSSQ_Z,
                        YGZNSRLX_DM: hlwsbTools.getYGZNSRLX_DM()
                    },
                    callback: [curSeg.pageFlowControl]
                });
            }
        },
        /*
         提取数据调用此方法
         */
        onExtract: function () {
            if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能提取");
                return;
            }
            var zb = baseTools.getUrlQueryString("zb");
            var fb3 = baseTools.getUrlQueryString("fb3");
            YGZNSRLX_DM = hlwsbTools.getYGZNSRLX_DM();
            var data = DCellWeb1.submitJsonjs({
                cols: ["YBHW_LW_BYS", "YBHW_LW_BNLJ", "JZJTHW_LW_BYS",
                    "JZJTHW_LW_BNLJ"]
            });
            var url = "/hlwsb/zzs/ybnsr/extractSB_ZZS_YBNSR.do";
            baseTools.xhrAjax({
                url: url,
                params: {
                    DATA: data,
                    YGZNSRLX_DM: YGZNSRLX_DM,
                    SBBXH: SBBXH,
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q,
                    SSSQ_Z: SSSQ_Z,
                    ZBSBBDM: zb,
                    FB3SBBDM: fb3
                },
                callback: [curSeg.pageFlowControl]
            });
        },

        initData: function (jsonObj) {
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: []
            };
        	var yqwrdybr = hlwsbTools.getYqwrdybr();//从cookie中获取逾期未认定一般人标志
        	if(yqwrdybr=='1'){
        		alert("您为逾期未认定一般纳税人！");
        		
        	}
            jsonObj.data.HEAD.DHHM = hlwsbTools.getSCJYDLXDH();

            DCellWeb1.initDataToCell({
                cols: ["YBHW_LW_BYS", "YBHW_LW_BNLJ", "JZJTHW_LW_BYS",
                    "JZJTHW_LW_BNLJ"],
                data: jsonObj.data,
                nsrxxCols: ["NSRSBH", "TBRQ", "SSSQ", "NSRMC", "YHZH", "ZHMC", "HYMC", "FDDBR", "DHHM", "SCJYDLXDH", "SCJYDZ", "DJZCLXMC", "ZCDZ"]
            });
//            DCellWeb1.setValByLabel('A2', "特别提醒：系统级异常，需联系运维人员进一步分析调试。该报表暂不允许填写。");
            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            jjdjmrtk = jsonObj.data.YMKZ.JJDJMRTK;
            jjdjbz = jsonObj.data.YMKZ.JJDJBZ;
            zzsJjdz = jsonObj.data.YMKZ.ZZSJJDZ;
            if (jsonObj.data.HEAD.SBBZT) {
                bAdd = false;
            }
           // curSeg.zzsTsxx(jsonObj);
        },
        checkJjdz:function(){
            if(jjdjmrtk=="Y"&& jjdjbz=='N' && zzsJjdz=="Y"){
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
        onOpenTbsxsm: function () {
//            msg = "填表顺序说明";
//            var winParam = {
//                id: 'winTbsxsm', title: msg,
//                url: '/hlwsb/bbsxsm/zzs.html',
//                width: 600,
//                height: 390
//            };
//            winObj = baseTools.showWinExt(winParam);
//            $(winObj.DOM.wrap).bgiframe({
//                width: 645,
//                height: 465
//            });
        	
//			var iTop =  200;
//			var iLeft = window.screen.availWidth - 1000;
//			window.open("/hlwsb/bbsxsm/zzs.html",'','height=400,innerHeight=390,width=575,innerWidth=575,top='+iTop+',left='+iLeft);
        	window.showModalDialog("/hlwsb/bbsxsm/zzs.html",'',"dialogWidth=575x;dialogHeight=400px;center:yes;status:no;scroll:no;");
        },

        initControl: function (jsonObj) {
            var ymkz = jsonObj.data.YMKZ;
            //附表4第6、7行本期实际抵减
            var ybxmbqsj = ymkz.ybxmbqsjsw;
          //  var ybxmbqsj =  jsonObj.data.BODY[18].YBHW_LW_BYS;
            var jzjtbqsj = ymkz.jzjtbqsjsw;
            DCellWeb1.DefineDoubleVar("YBXMBQSJ", ybxmbqsj);
            DCellWeb1.DefineDoubleVar("JZJTBQSJ", jzjtbqsj);
            //var YGZNSRLX_DM = ymkz.YGZNSRLX_DM;
            var bl = ymkz.JSXXSEBL;
            if (!SBBZT) {
                //20151204封晨光，15行本期改为取接口数
                var mdtytse = ymkz.MDTYTSE;
                DCellWeb1.SetCellDouble(4, 24, 0, mdtytse);
                var fcyjse = ymkz.FCYJSE;
                DCellWeb1.SetCellDouble(4, 37, 0, fcyjse);
            }
//			var qmld = 0;
//			if(jsonObj.data.LJS && jsonObj.data.LJS.length > 0 ) {
//				qmld = jsonObj.data.LJS[19].YBHW_LW_BYS;
//			}
            var tip = "";

            if (ymkz.JZJTZG == 'Y') {
                tip = "您为即征即退纳税人，可以填写即征即退列";
                //赵振国要求：即征即退可修改
                DCellWeb1.SetCellInput(4, 21, 0, 2);
                DCellWeb1.SetCellInput(4, 23, 0, 2);
            } else if (ymkz.JZJTZG == 'N') {//无即征即退资格，去掉
                for (var i = 10; i < 47; i++) {
                    DCellWeb1.SetCellBackColor(6, i, 0, 4);
                    DCellWeb1.SetCellInput(6, i, 0, 5);
                    DCellWeb1.SetCellBackColor(6, i, 0,DCellWeb1.FindColorIndex(0xEBEBEB,1));
                }
            }
            var ZFJG_SBJNFS = ymkz.ZFJG_SBJNFS;

            if (ZFJG_SBJNFS == 3) {
                //tip += "您为申报缴纳方式为（不需要申报，由总机构申报缴纳 或 （分摊预征）按销售收入比例分配应纳税额申报预缴 ）的分支机构纳税人，不用申报";
				tip += "您为申报缴纳方式为（由总机构申报缴纳 或 （分摊预征）按销售收入比例分配应纳税额申报预缴 ）的分支机构纳税人，如需申报请前往税局大厅";
				curSeg.invalidate();
            }
            if (ZFJG_SBJNFS == 2) {
                tip += "您为申报缴纳方式为（(预征率预征)按固定预征率或定额税率申报预缴）的分支机构纳税人";
            } else if (ZFJG_SBJNFS == 5) {
                tip += "您为申报缴纳方式为((分摊预征)按销售收入比例分配应纳税额申报预缴 ）的总机构，需填写完主表以后，填写汇总分配表";
            } else if (ZFJG_SBJNFS == 4) {
                tip += "您为申报缴纳方式为((预征率预征)分支机构按固定预征率或定额税率申报预缴）的总机构，可填写28行分次预缴税额";
                DCellWeb1.SetCellInput(4, 37, 0, 2);
                DCellWeb1.SetCellBackColor(4, 37, 0, DCellWeb1.FindColorIndex(0xFFFFFF,1));//修改单元格颜色为白色
            }else if(ZFJG_SBJNFS==6){
            	//提示有误：该户为总机构，下属的分支机构的申报缴纳方式为(财政划拨)不需要申报，由总机构申报"。总机构只需要按照正常户填写申报即可。
//                tip += "您为申报缴纳方式为(财政划拨)不需要申报，由总机构申报";
            }


            // 1、既不是总机构又不是分支机构
            //2、分支机构，分支机构预征
            //3、分支机构，无需申报，由总机构申报  分支机构，无需申报，由总机构分配
            //4、总机构、分支机构预征
            //5、总机构，分支机构无需申报，需填写汇总分配表 ，
            //6  总机构汇总申报，分支机构无需申报


            DCellWeb1.setValByLabel('A2', tip);

            if ((YGZNSRLX_DM == '22')) {
                //计算混营一般货物18行2列公式，D20---1101，D27---1801，E22---1302
                var formula = 'If(D20=0,0,If((D20-D27)*(' + bl + '/D20)<E22,(D20-D27)*(' + bl + '/D20),E22))';
                DCellWeb1.setFormulaByLabel('E27', formula);//

               // formula = 'D20-D27-E27';
                //D28---1901
            //    DCellWeb1.setFormulaByLabel('D28', formula);
                //E22---1302
                formula = 'E22-E27';
                //E29---2002
                DCellWeb1.setFormulaByLabel('E29', formula);

            } else {//如果不是混营
                //E27---1802
                //设置成0后打开修改本年累计也不能修改
                DCellWeb1.setValByLabel('E27', 0.00);
                DCellWeb1.setCellInputByLabel('E27', 5);
                //E29---2002
                DCellWeb1.setValByLabel('E29', 0.00);
                DCellWeb1.setCellInputByLabel('E29', 5);


            }

            /**
             * 20170601 lijunbo
             * 对于逾期未认定一般纳税人根据业务规定，作如下处理
             * 主表的控制：
			 * 在进行增值税一般纳税人申报时，系统需要控制纳税人主表中12、13、14、15、20栏不能填写。
			 * 20=17-18计算出20栏不等于0时，系统也按20栏等于0处理。
             */
            if(yqwrdybr=='1'){
              DCellWeb1.setValByLabel('D21', 0.00);
              DCellWeb1.setCellInputByLabel('D21', 5);
              DCellWeb1.setValByLabel('F21', 0.00);
              DCellWeb1.setCellInputByLabel('F21', 5);
              
              DCellWeb1.setValByLabel('D24', 0.00);
              DCellWeb1.setValByLabel('E24', 0.00);
              DCellWeb1.setValByLabel('F24', 0.00);
              
              DCellWeb1.setValByLabel('D23', 0.00);
              DCellWeb1.setCellInputByLabel('D23', 5);
              DCellWeb1.setValByLabel('F23', 0.00);
              DCellWeb1.setCellInputByLabel('F23', 5);
              
              DCellWeb1.setValByLabel('D24', 0.00);
              DCellWeb1.setCellInputByLabel('D24', 5);

              DCellWeb1.setValByLabel('D29', 0.00);
              DCellWeb1.setCellInputByLabel('D29', 5);
              DCellWeb1.setFormulaByLabel('D29', '');
              DCellWeb1.setFormulaByLabel('E29', '');

              DCellWeb1.setValByLabel('F29', 0.00);
              DCellWeb1.setCellInputByLabel('F29', 5);
              DCellWeb1.setFormulaByLabel('F29', '');
            }
        },

        initLjs: function (jsonObj) {

            var ljs = jsonObj.data.LJS;
            DCellWeb1.initSNLJ([
                {bys: "YBHW_LW_BYS", bnlj: "YBHW_LW_BNLJ"},
                {bys: "JZJTHW_LW_BYS", bnlj: "JZJTHW_LW_BNLJ"}
            ], ljs, ["E22", "E27", "E29", "E34", "G34", "E45"]);


        },
        /*
         单元格注释
         */
        initannotation: function () {
            DCellWeb1.setCellannotation('D10', "由附表1提取数据");
            DCellWeb1.setCellannotation('F10', "由附表1提取数据");
            DCellWeb1.setCellannotation('D13', "由附表1提取数据");
            DCellWeb1.setCellannotation('D16', "由附表1提取数据");
            DCellWeb1.setCellannotation('D17', "由附表1提取数据");
            DCellWeb1.setCellannotation('D20', "由附表1提取数据");
            DCellWeb1.setCellannotation('F20', "由附表1提取数据");
            DCellWeb1.setCellannotation('D21', "由附表2提取数据");
            DCellWeb1.setCellannotation('D23', "由附表2提取数据");
            DCellWeb1.setCellannotation('D30', "由附表1提取数据");
            DCellWeb1.setCellannotation('F30', "由附表1提取数据");

            DCellWeb1.setCellannotation('D22', "由税务机关取得上期数据");//1301
            DCellWeb1.setCellannotation('E22', "由税务机关取得上期数据");//1302
            DCellWeb1.setCellannotation('F22', "由税务机关取得上期数据");//1303
            DCellWeb1.setCellannotation('D34', "由税务机关取得上期数据");//2501
            DCellWeb1.setCellannotation('E34', "由税务机关取得累计数据,等于去年12月份期末未缴");//2502
            DCellWeb1.setCellannotation('G34', "由税务机关取得累计数据,等于去年12月份期末未缴");//2504

            DCellWeb1.setCellannotation('F34', "由税务机关取得上期数据");//2503
            DCellWeb1.setCellannotation('D37', "由税务机关取得上期数据");//2801
            DCellWeb1.setCellannotation('D38', "由税务机关取得上期数据");//2901
            DCellWeb1.setCellannotation('D39', "由税务机关取得上期数据");//3003
            //DCellWeb1.setCellannotation('D40', "由税务机关取得上期数据");//3101
            DCellWeb1.setCellannotation('D39', "由税务机关取得上期数据");//3001
            DCellWeb1.setCellannotation('F39', "由税务机关取得上期数据");//3003
            DCellWeb1.setCellannotation('D45', "由税务机关取得上期数据");//3601
            DCellWeb1.setCellannotation('E45', "由税务机关取得上期数据,等于去年12月份期末未缴查补税额");//3703

            DCellWeb1.setCellannotation('D24', "由税务机关获取数据");//1501
        },
        
        roundTFix: function (value) {
            if (!isNaN(value)) {
                return parseFloat(Number(Number(value).toFixed(3)).toFixed(2));
            } else {
                return value;
            }
        },
        
        checkData: function (jsons) {
            var msg = '';
            
            
            var col0101 = jsons[0].YBHW_LW_BYS;
            var col0201 = jsons[1].YBHW_LW_BYS;
            var col0301 = jsons[2].YBHW_LW_BYS;
            var col0401 = jsons[3].YBHW_LW_BYS;
            var col0103 = jsons[0].JZJTHW_LW_BYS;
            var col0203 = jsons[1].JZJTHW_LW_BYS;
            var col0303 = jsons[2].JZJTHW_LW_BYS;
            var col0403 = jsons[3].JZJTHW_LW_BYS;
            var hj=hlwsbTools.formatFloatData((col0201 + col0301 + col0401),3).toFixed(2);
            if ( col0101 < hj) {
                msg = "【一般项目】第1栏按适用税率计税销售额应当大于等于第2栏应税货物销售额与第3栏应税劳务销售额与第4栏纳税检查调整的销售额之和。\n";
            }
			var col0103_hj=hlwsbTools.formatFloatData((col0203 + col0303 + col0403),3).toFixed(2);
            //if ( col0103 < (col0203 + col0303 + col0403)) {//直接进行合计会出现小数点后误差问题，需要进行数据格式化 20170310 zzg
			if ( col0103 < col0103_hj) {
                msg += "【即征即退项目】第1栏按适用税率计税销售额应当大于等于第2栏应税货物销售额与第3栏应税劳务销售额与第4栏纳税检查调整的销售额之和。";
            }
            
            var col0801 = jsons[7].YBHW_LW_BYS;
            var col0901 = jsons[8].YBHW_LW_BYS;
            var col1001 = jsons[9].YBHW_LW_BYS;
            
            if ( col0801 < curSeg.roundTFix(col0901 + col1001)) {
                msg = "【一般项目】第8栏免税销售额应当大于等于第9栏免税货物销售额与第10栏免税劳务销售额之和。\n";
            }
            
            var col2301 = jsons[22].YBHW_LW_BYS;
            var col2303 = jsons[22].JZJTHW_LW_BYS;
            var col1901 = jsons[18].YBHW_LW_BYS;
            var col1903 = jsons[18].JZJTHW_LW_BYS;
            var col2101 = jsons[20].YBHW_LW_BYS;
            var col2103 = jsons[20].JZJTHW_LW_BYS;
            if (col2301 < 0 || col2301 > (col1901 + col2101)) {
                msg = "【一般项目】第23栏应纳税额减征额应当小于等于第19栏应纳税额与第21栏简易征收办法计算的应纳税额之和，且大于等于0。\n";
            }
            if (col2303 < 0 || col2303 > (col1903 + col2103)) {
                msg += "【即征即退项目】第23栏应纳税额减征额应当小于等于第19栏应纳税额与第21栏简易征收办法计算的应纳税额之和，且大于等于0。";
            }
            return msg;
        },
        initTishi: function () {
            if (SBBZT == undefined || SBBZT == '') {
                ybnsr2016.onOpenTbsxsm();
            }
            if (SBBZT == '5') {
                if (confirm("提取数据后，未保存数据\r\n 确定要保存吗？")) {
                    curSeg.onSave(1);
                }
            }
        },
        //禁用表单的按钮 
        invalidate: function () {
            var inputList = document.getElementsByTagName('input');
            for (var i = 0; i < inputList.length; i++) {
                inputList[i].disabled = true;
            }
//           document.getElementById('sbyl').disabled=false;
        },
//        onSbyl:function(){
//        	alert(2);
//        	  window.open("../../../printModel/zzs/ybnsr/ybnsr2016/model.zip");
//              return;
//        },
        //导入
        openPopWin: function () {
            return false;
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=ybnsr2016&&startRow=8&&sheetIndex=1&templatePath=printModel/zzs/ybnsr/ybnsr2016/sb_zzs_ybnsr_2016.zip',
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
           // var col18 = jsonObj.data.BODY[18].YBHW_LW_BYS;
            // DCellWeb1.setValByLabel("D25", col18);
            switch (parseInt(jsonObj.code)) {
                // 查询操作返回标志
                case 0:
                    //累计数要放在初始化数据前面
                    curSeg.initLjs(jsonObj);
                    curSeg.initData(jsonObj);
                    curSeg.initControl(jsonObj);
                    curSeg.initannotation();
                    curSeg.checkJjdz();
//                    DCellWeb1.editLjs(["YBHW_LW_BNLJ", "JZJTHW_LW_BNLJ"], document.getElementById("ljs").checked);
                    curSeg.initTishi();
                    break;
                // 添加、更新以及状态更新操作返回标志
                case 1:
                    bAdd = false;
                    alert("保存成功");
                    top.main.changeNodeStatus(SBBZL_DM,"1");
                    SBBZT = 1;
                    break;
                // 删除操作返回标志
                case 2:
                    alert("删除成功");
                    top.main.changeNodeStatus(SBBZL_DM,"0");
                    bAdd = true;
                    curSeg.initData(jsonObj);
                    curSeg.initControl(jsonObj);
//                    DCellWeb1.editLjs(["YBHW_LW_BNLJ", "JZJTHW_LW_BNLJ"], document.getElementById("ljs").checked);
                    break;
                // 准备添加的记录已经存在
                case 3:
                    //alert("提取成功,提取成功后，请保存数据");
                    //curSeg.initLjs(jsonObj);
                    // curSeg.initData(jsonObj);
                    // DCellWeb1.setValByLabel("D25", col18);
                    //累计数要放在初始化数据前面
                    curSeg.initLjs(jsonObj);
                    //var ybxmbqsj =  jsonObj.data.BODY[18].YBHW_LW_BYS;
        
                    //DCellWeb1.DefineDoubleVar("YBXMBQSJ", ybxmbqsj);
                    curSeg.initData(jsonObj);
                    curSeg.initControl(jsonObj);
                    curSeg.initannotation();
                    cell.calculateAllJs();
                    if (confirm("提取成功,提取成功后，请保存数据\r\n 确定要保存吗？")) {
                        curSeg.onSave(1);
                    }
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