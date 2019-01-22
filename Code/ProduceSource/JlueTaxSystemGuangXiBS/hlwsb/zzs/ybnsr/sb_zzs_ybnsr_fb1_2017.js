//使用窗口组件加载时注释下面的代码
$(document).ready(function () {
    fb1_2017.onLoad();
});
/**
 *
 *
 */
var fb1_2017 = (function () {
    //私有属性
    var curSeg; // 保存lrb对象的
    var SBBXH = '';
    var SBBZL_DM = '';
    var SSSQ_Q = '';
    var SSSQ_Z = '';
    //私有方法
    var YZL = '';//预征率
    var YZLC = '';//用户自己填写的预征率
    var YBNSRHZJNZG = ''//汇总缴纳资格
    var YBNSRYZSKDFPBZ = ''// 待分配标志
    var YBNSRFZJGDFPYZL = ''//待分配预征率
    var YBNSRZCDTLZG = '' // 注册地铁路资格
    var YGZNSRLX_DM = '';//纳税人类型
    var JYZSBFBZ = '';//简易征收办法标志控制附表1 8-15行提示  20160515姜航
    var JZJTZG = '';
    var YZLB = "";
    var YZLA = "";
    var wxts = "温馨提示：";
    var NSRSBH = "";
    //是否是添加
    var bAdd = true;
    var SBBZT = '';
    var data1;
    //私有方法
    return {
        onCalc: function (obj) {
            DCellWeb1.calcManual(obj.checked);
        },

        onExport: function () {
            DCellWeb1.ExportExcelDlg();
        },
        onLoad: function () {
            curSeg = fb1_2017;
            //引用报表控制
            dcell(DCellWeb1, "/hlwsb/printModel/zzs/ybnsr/sb_zzs_fb1_2017.cll");
            curSeg.onQuery();
            //在2018年2月份征期提示通行费抵扣电子发票在2月3号以后在进行抵扣
			if((SSSQ_Q == "2018-01-01") && (SSSQ_Z == "2018-01-31"))
			{
			    //新增提示如您需抵扣通行费电子发票，请待2月3日以后再行抵扣
                var myDate=new Date();
                var dqsj=myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate();
                if(dqsj<"2018-02-04"){
                    window.showModalDialog("/hlwsb/bbsxsm/zzs_fb_ts.html",'',"dialogWidth=500x;dialogHeight=150px;center:yes;status:no;scroll:no;");
                }

			}
			
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
            window.location = "/hlwsb/zzs_print/ybnsr/sb_zzs_ybnsr_fb1_2017.html?" + str;
        },
        //查询数据
        onQuery: function () {
            var url = "/hlwsb/zzs/ybnsr/getSB_ZZS_YBNSR_FB1.do";
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");    //获取页面申报表种类代码标记
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");
            NSRSBH = baseTools.getUrlQueryString("NSRSBH");
            var YGZNSRLX_DM = hlwsbTools.getYGZNSRLX_DM();

            baseTools.xhrAjax({
                url: url,
                params: {
                    SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, YGZNSRLX_DM: YGZNSRLX_DM
                },
                callback: [curSeg.pageFlowControl]
            });
        },

        //保存数据
        onSave: function () {
            if (curSeg.checkData()) {
                return;
            }
            if (SBBZT == "2" || SBBZT == "3") {
                alert("数据已申报，不允许保存");
                return null;
            }
            if (confirm('是否要保存?')) {
                var data = DCellWeb1.submitJsonjs({
                    isZero: 'N',
                    cols: ["COL01", "COL02", "COL03", "COL04", "COL05", "COL06", "COL07", "COL08", "COL09", "COL10", "COL11", "COL12", "COL13", "COL14"]
                });
                var url = bAdd
                    ? "/hlwsb/zzs/ybnsr/insertSB_ZZS_YBNSR_FB1.do"
                    : "/hlwsb/zzs/ybnsr/updateSB_ZZS_YBNSR_FB1.do";

                var YZLC = DCellWeb1.getValByLabel("C24") + '';//预征率13C 对应C24

                YZLC = YZLC.replace('预征率', '').replace('%', '').trim();

                if (!isNaN(YZLC) && YZLC != '') {
                    YZLC = Number((parseFloat(YZLC) / 100).toFixed(7)).toFixed(6);
                } else {
                    YZLC = '';
                }

                baseTools.xhrAjax({
                    url: url,
                    params: {
                        DATA: data,
                        SBBXH: SBBXH,
                        SBBZL_DM: SBBZL_DM,
                        YZL: YZL == null ? '' : YZL,
                        YZLB: YBNSRFZJGDFPYZL == null ? '' : YBNSRFZJGDFPYZL,
                        YZLC: YZLC
                    },
                    callback: [curSeg.pageFlowControl]
                });
            }
        },
        // 添加暂存
        onCacheSave: function () {
            curSeg.onSave();
        },
        /*
         删除数据
         */
        onDelete: function () {
            if (SBBZT == "2" || SBBZT == "3") {
                alert("数据已申报，不允许删除");
                return null;
            }
            if (confirm("确定删除此报表？")) {
                var url = "/hlwsb/zzs/ybnsr/delSB_ZZS_YBNSR_FB1.do";
                baseTools.xhrAjax({
                    url: url,
                    params: {SBBXH: SBBXH, SBBZL_DM: SBBZL_DM, SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z},
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
        	var col = "";
        	if(SBBZT){
        		col = ["COL01", "COL02", "COL03", "COL04", "COL05", "COL06", "COL07", "COL08", "COL09", "COL10", "COL11", "COL12", "COL13", "COL14"];
        	}else{
        		col = ["COL01", "COL02", "COL03", "COL04"];
        	}
            DCellWeb1.initDataToCell({
                cols: col,
                data: jsonObj.data,
                nsrxxCols: ["NSRMC", "NSRSBH", "SSSQ", "TBRQ"],
                iszdjskxg: true
            });
            if (jsonObj.data.HEAD.SBBZT && jsonObj.data.HEAD.SBBZT == 1) {
                bAdd = false;
            }
            //var SwjgDm = baseTools.getUserSwjgDm();
            //SwjgDm = '1620102';
            //if (SwjgDm.indexOf('1620102') != -1) {
            //    DCellWeb1.inputCheck = function (col, row, sheet, text) {
            //        if (col == 9 || col == 10) {
            //            if (parseFloat(Number(text)) < 0) {
            //                alert("辽宁特色")
            //                return false;
            //            } else {
            //
            //                return true;
            //            }
            //        }
            //        return true;
            //    }
            //}
            if(!SBBZT){//保存后不再弹出
            	
            	//对于纯营改增、非营改增避免企业开票商品编码选择错误，在此这两类纳税人数据重新筛选处理
        		if("10"==YGZNSRLX_DM){
        			
        			for(var i = 8 ;i<=20 ; i++){
        				if(i==8 || i==11 || i==17 || i==20){
        					//将营改增行数据放置到对应非营改增行次
        					var hj = DCellWeb1.GetCellDouble(5,i,0) +DCellWeb1.GetCellDouble(5,(i+1),0);
        					DCellWeb1.SetCellDouble(5,i,0,hj);
        					hj = DCellWeb1.GetCellDouble(6,i,0) +DCellWeb1.GetCellDouble(6,(i+1),0);
        					DCellWeb1.SetCellDouble(6,i,0,hj);
        					hj = DCellWeb1.GetCellDouble(7,i,0) +DCellWeb1.GetCellDouble(7,(i+1),0);
        					DCellWeb1.SetCellDouble(7,i,0,hj);
        					hj = DCellWeb1.GetCellDouble(8,i,0) +DCellWeb1.GetCellDouble(8,(i+1),0);
        					DCellWeb1.SetCellDouble(8,i,0,hj);
        					
        					//营改增行设置为0
        					DCellWeb1.SetCellDouble(5,(i+1),0,0.00);
        					DCellWeb1.SetCellDouble(6,(i+1),0,0.00);
        					DCellWeb1.SetCellDouble(7,(i+1),0,0.00);
        					DCellWeb1.SetCellDouble(8,(i+1),0,0.00);
        				}
        				//第5行6%为营改增品目，非营改增户应为0
        				if(i==13){
        					DCellWeb1.SetCellDouble(5,i,0,0.00);
        					DCellWeb1.SetCellDouble(6,i,0,0.00);
        					DCellWeb1.SetCellDouble(7,i,0,0.00);
        					DCellWeb1.SetCellDouble(8,i,0,0.00);
        				}
        			}
        			
        		}else if("20"==YGZNSRLX_DM){
        			for(var i = 8 ;i<=20 ; i++){
        				if(i==8 || i==11 || i==17 || i==20){
        					//将非营改增行数据放置到对应营改增行次上
        					var hj = DCellWeb1.GetCellDouble(5,i,0) +DCellWeb1.GetCellDouble(5,(i+1),0);
        					DCellWeb1.SetCellDouble(5,(i+1),0,hj);
        					hj = DCellWeb1.GetCellDouble(6,i,0) +DCellWeb1.GetCellDouble(6,(i+1),0);
        					DCellWeb1.SetCellDouble(6,(i+1),0,hj);
        					hj = DCellWeb1.GetCellDouble(7,i,0) +DCellWeb1.GetCellDouble(7,(i+1),0);
        					DCellWeb1.SetCellDouble(7,(i+1),0,hj);
        					hj = DCellWeb1.GetCellDouble(8,i,0) +DCellWeb1.GetCellDouble(8,(i+1),0);
        					DCellWeb1.SetCellDouble(8,(i+1),0,hj);
        					
        					//非营改增行设置为0
        					DCellWeb1.SetCellDouble(5,i,0,0.00);
        					DCellWeb1.SetCellDouble(6,i,0,0.00);
        					DCellWeb1.SetCellDouble(7,i,0,0.00);
        					DCellWeb1.SetCellDouble(8,i,0,0.00);
        					
        				}
        			}
        			
        			//第3行13%、第10行4%为非营改增品目，营改增户应为0
    				if(i==10 || i==19){
    					DCellWeb1.SetCellDouble(5,i,0,0.00);
    					DCellWeb1.SetCellDouble(6,i,0,0.00);
    					DCellWeb1.SetCellDouble(7,i,0,0.00);
    					DCellWeb1.SetCellDouble(8,i,0,0.00);
    				}
        		}
            	
            }
            wxts = wxts + "请确认自动带出的发票数据无误后，完成报表填写后保存即可！";
            DCellWeb1.setValByLabel('F4', wxts);
            
            //检查简易计税备案资格
            curSeg.checkJyjs();
            
            if(!SBBZT){
            	var winParam = {
                        id: 'win' + hlwsbTools.getNSRMC(), title: "增值税一表集成",
                        url: '/hlwsb/zzs/ybnsr/sb_zzs_fp_hz.html?SSSQ_Q='+SSSQ_Q+"&SSSQ_Z="+SSSQ_Z,
                        width: 680,
                        height: document.body.clientHeight,
                        resize:true,
                        titleBar:true,
                        maxBtn:true
                    };
                    winObj = baseTools.showWinExt(winParam);
                    $(winObj.DOM.wrap).bgiframe({
                    		width: 710,
                            height: 900		
                    });
            }
        },

        deleteinitdata:  function (jsonObj){
            DCellWeb1.initDataToCell({
                cols: ["COL01", "COL02", "COL03", "COL04", "COL05", "COL06", "COL07", "COL08", "COL09", "COL10", "COL11", "COL12", "COL13", "COL14"],
                data: jsonObj.data,
                nsrxxCols: ["NSRMC", "NSRSBH", "SSSQ", "TBRQ"],
                iszdjskxg: true
            });

        },
        /*
         验证数据关系合法性
         col[i][j]  获取第ｉ行第ｊ列的值
         */
        checkData: function () {
            //if(JYZSBFBZ!='Y'){
            //    alert("需到税务机关进行备案后填写")
            //}

            var stat = '';
            var col0609 = DCellWeb1.getValByLabel("M14");//20170712 M13-->M14
            var col0109 = DCellWeb1.getValByLabel('M8');
            var col0309 = DCellWeb1.getValByLabel('M10');
            var col04a09 = DCellWeb1.getValByLabel('M11');
            var hj = curSeg.roundTFix(col0109 + col0309 + col04a09);
            //新增广西特色需求-监控规则
            var jiankongAddCount1,jiankongAddCount2,AddCountShowHC;
            for (var i = 8; i <= 9; i++) {
                jiankongAddCount1 = curSeg.roundTFix(DCellWeb1.getValByLabel('F' + i) + DCellWeb1.getValByLabel('H' + i) + DCellWeb1.getValByLabel('J' + i));
                jiankongAddCount2 = curSeg.roundTFix(DCellWeb1.getValByLabel('E' + i) + DCellWeb1.getValByLabel('G' + i) + DCellWeb1.getValByLabel('I' + i));
                if(Number(jiankongAddCount2) == 0){
                    continue;
                }
                if ((Number(jiankongAddCount1) / Number(jiankongAddCount2)) > 0.16) {
                    AddCountShowHC = i - 7;

                    alert("第"+AddCountShowHC+"行"+"2018年5月1日起17%税率调整为16%，您填报了适用17%税率\n" +
                    "的销售额，请确认是否为5月1日前发生的业务补开发票，且已在5月1日\n" +
                    "前申报了未开票收入。");

                }
            }
            for (var i = 11; i <= 12; i++) {
                jiankongAddCount1 = curSeg.roundTFix(DCellWeb1.getValByLabel('F' + i) + DCellWeb1.getValByLabel('H' + i) + DCellWeb1.getValByLabel('J' + i));
                jiankongAddCount2 = curSeg.roundTFix(DCellWeb1.getValByLabel('E' + i) + DCellWeb1.getValByLabel('G' + i) + DCellWeb1.getValByLabel('I' + i));
                if(Number(jiankongAddCount2) == 0){
                    continue;
                }
                if (Number(jiankongAddCount1) / Number(jiankongAddCount2) > 0.10) {
                    if(i == 11){
                        AddCountShowHC = '4a';
                    }else if(i == 12){
                        AddCountShowHC = '4b';
                    }
                    alert("第"+AddCountShowHC+"行"+"2018年5月1日起11%税率调整为10%，您填报了适用11%税率\n" +
                    "的销售额，请确认是否为5月1日前发生的业务补开发票，且已在5月1日\n" +
                    "前申报了未开票收入。");

                }
            }


            if (col0609 > hj) {
                alert("第6行第9列【" + col0609 + "】不允许大于第1、3、4a行第9列之和【" + hj + "】");//20170712 添加4a
                return true;
            }
            var col0610 = DCellWeb1.getValByLabel('N14');//20170712 错误：（M13-->M14） 正确：（N13-->N14）
            var col0110 = DCellWeb1.getValByLabel('N8');
            var col0310 = DCellWeb1.getValByLabel('N10');
            var col04a09 = DCellWeb1.getValByLabel('N11');//20171023 程序代码写错了
            var hj = curSeg.roundTFix(col0110 + col0310 + col04a09);
            if (col0610 > hj) {
                alert("第6行第10列【" + col0610 + "】不允许大于第1、3、4a行第10列之和【" + hj + "】");
                return true;

            }
            var col0709 = DCellWeb1.getValByLabel('M15');//20170712 M14-->M15
            var col0209 = DCellWeb1.getValByLabel('M9');
            var col04b09 = DCellWeb1.getValByLabel('M12');
            var col0509 = DCellWeb1.getValByLabel('M13');
            var hj = curSeg.roundTFix(col0209 + col04b09 + col0509);
            if (col0709 > hj) {
                alert("第7行第9列【" + col0709 + "】不允许大于第2、4b、5行第9列之和【" + hj + "】");//20170712 4-->4b
                return true;

            }
            var col0710 = DCellWeb1.getValByLabel('N15');
            var col0210 = DCellWeb1.getValByLabel('N9');
            var col04b10 = DCellWeb1.getValByLabel('N12');
            var col0510 = DCellWeb1.getValByLabel('N13');
            var hj = curSeg.roundTFix(col0210 + col04b10 + col0510);
            if (col0710 > hj) {
                alert("第7行第10列【" + col0710 + "】不允许大于第2、4b、5行第10列之和【" + hj + "】");
                return true;

            }
            var col0714 = DCellWeb1.getValByLabel('R15');
            var col0214 = DCellWeb1.getValByLabel('R9');
            var col04b14 = DCellWeb1.getValByLabel('R12');
            var col0514 = DCellWeb1.getValByLabel('R13');
            var hj = curSeg.roundTFix(col0214 + col04b14 + col0514);
            if (col0714 > hj) {
                alert("第7行第14列【" + col0714 + "】不允许大于第2、4b、5行第14列之和【" + hj + "】");
                return true;
            }

            var col1514 = DCellWeb1.getValByLabel('R26');
            var col1214 = DCellWeb1.getValByLabel('R21');
            var col9b14 = DCellWeb1.getValByLabel('R18');
            var hj = curSeg.roundTFix(col1214 + col9b14);
            if (col1514 > hj) {
                alert("第15行第14列【" + col1514 + "】不允许大于第12、9b行第14列之和【" + hj + "】");
                return true;
            }
            var col1409 = DCellWeb1.getValByLabel('M25');
            var col0809 = DCellWeb1.getValByLabel('M16');
            var col0909a = DCellWeb1.getValByLabel('M17');
            var col1009 = DCellWeb1.getValByLabel('M19');
            var col1109 = DCellWeb1.getValByLabel('M20');
            var hj = curSeg.roundTFix(col0809 + col0909a + col1009 + col1109);
            if (col1409 > hj) {
                alert("第14行第9列【" + col1409 + "】不允许大于第8、9a、10、11行第9列之和【" + hj + "】");
                return true;
            }

            var col1410 = DCellWeb1.getValByLabel('N25');
            var col0810 = DCellWeb1.getValByLabel('N16');
            var col0910a = DCellWeb1.getValByLabel('N17');
            //var col0910b = DCellWeb1.getValByLabel('N17');
            var col1010 = DCellWeb1.getValByLabel('N19');
            var col1110 = DCellWeb1.getValByLabel('N20');
            var hj = curSeg.roundTFix(col0810 + col0910a + col1010 + col1110);
            if (col1410 > hj) {
                alert("第14行第10列【" + col1410 + "】不允许大于第8、9a、10、11行第10列之和【" + hj + "】");
                return true;
            }

            var col1509 = DCellWeb1.getValByLabel('M26');
            var col1209 = DCellWeb1.getValByLabel('M21');
            var col0909b = DCellWeb1.getValByLabel('M18');

            var hj = curSeg.roundTFix(col1209 + col0909b);
            if (col1509 > hj) {
                //alert("第15行第9列不允许大于第12行第9列、第9b行第9列之和");     //20170712 总局需求应该是没有考虑9b  漏掉了 ：本项数值应小于等于本表第12行第9列。
                alert("第15行第9列【" + col1509 + "】不允许大于第12、9b行第9列之和【" + hj + "】");     //20160519王昆松老师确认
                return true;

            }
            //**************精美分割线************************************

            var col1510 = DCellWeb1.getValByLabel('N26');
            var col1210 = DCellWeb1.getValByLabel('N21');
            var col0910b = DCellWeb1.getValByLabel('N18');
            var hj = curSeg.roundTFix(col1210 + col0910b);
            if (col1510 > hj) {
                alert("第15行第10列【" + col1510 + "】不允许大于第12、9b行第10列之和【" + hj + "】");   //20160519王昆松老师确认
                return true;

            }

            var col13a_14 = DCellWeb1.getValByLabel('R22');
            var col13a_13 = DCellWeb1.getValByLabel('Q22');
            var col13b_14 = DCellWeb1.getValByLabel('R23');
            var col13b_13 = DCellWeb1.getValByLabel('Q23');
            var col13c_14 = DCellWeb1.getValByLabel('R24');
            var col13c_13 = DCellWeb1.getValByLabel('Q24');
            if (col13a_14 > col13a_13) {
                alert("第13a行第14列【" + col13a_14 + "】不允许大于第13a行第13列【" + col13a_13 + "】");
                return true;
            }
            if (col13b_14 > col13b_13) {
                alert("第13b行第14列【" + col13b_14 + "】不允许大于第13b行第13列【" + col13b_13 + "】");
                return true;
            }
            if (col13c_14 > col13c_13) {
                alert("第13c行第14列【" + col13c_14 + "】不允许大于第13c行第13列【" + col13c_13 + "】");
                return true;
            }
            //**************精美分割线************************************
            //20170712jh 12列<11列
            for (var i = 8; i <= 30; i++) {
                var col12 = DCellWeb1.getValByLabel('P' + i);
                var col11 = DCellWeb1.getValByLabel('O' + i);
                var col_lm = DCellWeb1.getValByLabel('D' + i);
                if (Number(col12) > Number(col11)&&Number(col12) >= 0&&Number(col11) >= 0) {
                    alert("第" + col_lm + "行第12列【" + col12 + "】不允许大于第" + col_lm + "行第11列【" + col11 + "】");
                    return true;
                }
            }
        },

        roundTFix: function (value) {
            if (!isNaN(value)) {
                return parseFloat(Number(Number(value).toFixed(3)).toFixed(2));
            } else {
                return value;
            }
        },
        /*
         设置只读单元格，参数５为只读
         南航，铁路，邮政，电信全部可以填写，包括１３行（报表默认全部可以填写）

         */

        initControl: function (jsonObj) {
            JYZSBFBZ = jsonObj.data.YMKZ.JYZSBFBZ;//简易征收办法标志控制附表1 8-15行提示  20160515姜航

            //增值税即征即退资格 不再从纳税人基本信息获取，直接从后台接口层获取


            var flag_6_14 = false;//可填写第6行、14行
            var flag_7_15 = false;//可填写第7行、15行

            YZL = jsonObj.data.YMKZ.YZL;//410184869956543南航


            YZLA = jsonObj.data.YMKZ.YBNSRFZJGDFPYZL;
            YZLB = jsonObj.data.YMKZ.YBNSRFZJGDFPYZL;
            YZLC = jsonObj.data.YMKZ.YBNSRFZJGDFPYZL;

            DCellWeb1.setValByName('YZLA', YZLA);
            DCellWeb1.setValByName('YZLB', YZLB);
            DCellWeb1.setValByName('YZLC', YZLC);

            YBNSRHZJNZG = jsonObj.data.YMKZ.YBNSRHZJNZG;//汇总缴纳资格
            YBNSRYZSKDFPBZ = jsonObj.data.YMKZ.YBNSRYZSKDFPBZ;// 待分配标志
            YBNSRFZJGDFPYZL = jsonObj.data.YMKZ.YBNSRFZJGDFPYZL;//待分配预征率
            YBNSRZCDTLZG = jsonObj.data.YMKZ.YBNSRZCDTLZG; // 注册地铁路资格
            //跨省合资铁路运输企业预征率由用户填写，填写后复现
            YZLC = jsonObj.data.HEAD.YZLC;
            if (!YZLC)
                YZLC = YBNSRFZJGDFPYZL;
            JZJTZG = jsonObj.data.YMKZ.JZJTZG;
            YGZNSRLX_DM = hlwsbTools.getYGZNSRLX_DM(); //'营改增纳税人类型代码;10-非营改增纳税人;11-销售货物劳务纳税人;20-营改增纳税人;21-提供应税服务纳税人;22-混业纳税人';
            //把14列全部设置批注    readonly，需要放开填写的话 单独控制。
            for (var i = 8; i <= 30; i++) {
                DCellWeb1.SetCellNote(18, i, 0, "readonly"); //控制第7行14列是否可写
            }
            if (JZJTZG == 'Y') {
//                DCellWeb1.setValByLabel('F4', "温馨提示：您具备即征即退资格，请注意填写即征即退资格相关行次！");
            	wxts = wxts + "您具备即征即退资格，请注意填写即征即退资格相关行次！"
                DCellWeb1.SetCellNote(18, 15, 0, ""); //具备即征即退资格,控制第7行14列可写
                if (YGZNSRLX_DM == '22') {
                    flag_6_14 = true;
                    flag_7_15 = true;
                } else if (YGZNSRLX_DM == '20') {
                    flag_7_15 = true;
                } else if (YGZNSRLX_DM == '10') {
                    flag_6_14 = true;
                }
            } else {
                DCellWeb1.SetCellNote(18, 15, 0, "readonly"); //控制第7行14列是否可写
            }


            // var YZL_FLG = hlwsbTools.getYZLBZ();//预征率标志, 1-可以填写附表1第13栏; 0-不可以填写附表1第13栏

            var YZL_FLG = jsonObj.data.YMKZ.YZLFZJGZG;

            //三种因素决定报表控制
            //营改增纳税人类型 // 2 其他特殊控制 //3 预征率控制标志

            //3 预征率控制标志
            var yzl_row = [];
            //20180314 lijunbo 针对13a控制，河南货劳、征管确认只要认定有预征率即允许企业填写 
            //20180314 总局不允许修改，还保持只有营改增预征率企业填写
//            if (YGZNSRLX_DM == '20' || YGZNSRLX_DM == '22'||Number(YZL)>0) {
//                if ("Y" == YZL_FLG||Number(YZL)>0) {//
            if (YGZNSRLX_DM == '20' || YGZNSRLX_DM == '22') {
                if ("Y" == YZL_FLG) {
                    yzl_row.push([22]);
                    if (parseFloat(YZL) > 0.00) {
                        DCellWeb1.setValByLabel('C22', "预征率" + (parseFloat(YZL) * 100).toFixed(4) + "%"); //2014.5.21lijun

                        DCellWeb1.DefineDoubleVar("YZLA", parseFloat(YZL));
                        DCellWeb1.setValByName("13A", YZL);   //把预征率放到隐藏列S21
                    }
                }

                if (YBNSRYZSKDFPBZ == 'Y') {//YBNSRHZJNZG='F' 没取值
                    yzl_row.push([23]);
                    if (parseFloat(YBNSRFZJGDFPYZL) > 0.00) {
                        DCellWeb1.setValByLabel('C23', "预征率" + (parseFloat(YBNSRFZJGDFPYZL) * 100).toFixed(4) + "%"); //2014.5.21lijun
                        DCellWeb1.DefineDoubleVar("YZLB", parseFloat(YBNSRFZJGDFPYZL));
                        DCellWeb1.setValByName("13B", YZLB);
                    }
                }

                if (YBNSRZCDTLZG == 'Y') {//YBNSRHZJNZG='F'
                    DCellWeb1.SetCellInput(3, 24, 0, 7);
                    yzl_row.push([24]);
                    if (parseFloat(YZLC) > 0.00) {
                        DCellWeb1.DefineDoubleVar("YZLC", parseFloat(YZLC));
                        DCellWeb1.setValByLabel('C24', "预征率" + (parseFloat(YZLC) * 100).toFixed(4) + "%");
                        DCellWeb1.setValByName("13C", YZLC);
                    }
                }

            }
            //2 其他特殊控制
            var extra_row = [];
            if (flag_6_14 && flag_7_15) {
                extra_row = [14, 25, 15, 26];
            }
            else if (flag_6_14)
                extra_row = [14, 25];
            else if (flag_7_15) {
                extra_row = [15, 26];
            }
            var tip = '';
            for (var i = 0; i < yzl_row.length; i++) {
                if (yzl_row[i] == 22) {
                    tip += '13a,';
                } else if (yzl_row[i] == 23) {
                    tip += '13b,';
                    DCellWeb1.SetCellInput(18, 23, 0, 2);//测试部要求将14列改为自动计算可修改
                } else if (yzl_row[i] == 24) {
                    tip += '13c,';
                    DCellWeb1.SetCellInput(18, 24, 0, 2);//测试部要求将14列改为自动计算可修改
                }
            }
            var nsrlx_row = [];
            //20170718 13%税率锁死 不再提示
            if (YGZNSRLX_DM == '10') {// 10-非营改增纳税人
                //DCellWeb1.setValByLabel('F3', "温馨提示：您是非营改增纳税人，可以填写1,3,4a,8,9a,10,11," + tip + "16,18行");
                DCellWeb1.setValByLabel('F3', "温馨提示：您是非营改增纳税人，可以填写1,4a,8,9a,10,11," + tip + "16,18行");
                //nsrlx_row = [8, 10, 11, 16, 17, 19, 20, 27, 29]
                nsrlx_row = [8,9, 11,12, 16, 17, 19, 20, 27, 29]
                //nsrlx_row = [8,10,19,26,28];
                curSeg.setReadOnlyByLabel(5, 20, (nsrlx_row.concat(yzl_row)).concat(extra_row));
            } else if (YGZNSRLX_DM == '20') { //20-营改增纳税人

                DCellWeb1.setValByLabel('F3', "温馨提示：您是营改增纳税人，可以填写2,4b,5,9b,12," + tip + "17,19行");
                nsrlx_row = [9, 12, 13, 18, 21, 28, 30];
                curSeg.setReadOnlyByLabel(5, 20, (nsrlx_row.concat(yzl_row)).concat(extra_row));
            } else if (YGZNSRLX_DM == '22') {           //兼营22，32
                DCellWeb1.setValByLabel('F3', "温馨提示：您是兼营的纳税人，可以填写1,2,4a,4b,5,8,9a,9b,10,11,12," + tip + "16,17,18,19");        //201605192004王昆松要求8，9a,10除营改增外都放开
                //DCellWeb1.setValByLabel('F3',"温馨提示：您是混营的纳税人，如果本期既有应税货物及劳务又有应税服务，因系统故障！请您延迟申报（2015年1月16日后再行申报）");
                nsrlx_row = [8, 9, 11, 12, 13, 16, 17, 18, 19, 20, 21, 27, 28, 29, 30];
                curSeg.setReadOnlyByLabel(5, 20, (nsrlx_row.concat(yzl_row)).concat(extra_row));
            }
            //没生效，需确认业务 13C 20170712
            DCellWeb1.inputCheck = function (col, row, sheet, text) {
                if (col == 3 && (row == 24)) {
                    if (isNaN(text))
                        text = '0.00';

                    if (0 < parseFloat(Number(text)) && parseFloat(Number(text)) < 1) {
                        window.setTimeout(function () {
                            DCellWeb1.setValByLabel('24', '预征率' + (parseFloat(Number(text)) * 100).toFixed(4) + '%');
                        });
                        return true;
                    } else {

                        return true;
                    }
                }
                return true;
            }
            //郭老师让把13a这列不涉及到计算的都放开
            if (yzl_row[0] == 22) {
                DCellWeb1.SetCellInput(18, 22, 0, 2);
            }



            ////第14列设置为只读   王昆松要求14列锁定不允许填写，需求上是营改增纳税人计算公式，其他纳税人不填写   20160627
            //var kch_xxynse_col = [9, 11, 12, 14, 17, 20, 21, 22, 23, 25];//扣除后销项(应纳)税额列
            ////alert(kch_xxynse_col);
            //curSeg.setReadOnlyByInput(18, 18, kch_xxynse_col, 5);

            /*
            * 对第二栏简易计税方法征税一栏设置监控，简易征收备案后才可填列该栏次。
            * */
            if(JYZSBFBZ != '203'){
                for(var i = 16;i <= 26;i++){
                    for(var j = 5;j <= 18;j++){
                        //不包含13a
                        if(i==22||i==23||i==24){
                            continue;
                        }
                        DCellWeb1.SetCellInput(j, i, 0, 5);
                    }
                }
                var temp = DCellWeb1.getValByLabel('F3');
                // DCellWeb1.setValByLabel('F3', temp + "\r温馨提示：增值税一般人附表1（本期销售情况明细表）第二大栏简易计税方法征税，做过一般人简易征收备案后才能填写该栏次，请您及时做备案！");
                DCellWeb1.setValByLabel('F3', temp + "\r温馨提示：二、简易计税方法计税，进行过简易征收备案后才能填写该栏次，请您及时做备案！");
            }else{
                var temp = DCellWeb1.getValByLabel('F3');
                DCellWeb1.setValByLabel('F3', temp + "   您已经做了一般人简易征收备案！");
            }
        },
        /**
         * 对应　cellSetCellInput　设置cell为只读　
         *
         */
        setReadOnlyByLabel: function (startcol, endcol, rows) {
            //将需要的从只读改为数值格式
            for (var i = 0; i < rows.length; i++) {
                for (var j = startcol; j < endcol; j++) {
                    var type = DCellWeb1.GetCellNote(j, rows[i], 0);
                    var str = DCellWeb1.GetCellString(j, rows[i], 0);
                    //alert(str+','+type);
                    if (DCellWeb1.GetCellString(j, rows[i], 0) != '——' && type != 'readonly') {
                        DCellWeb1.SetCellInput(j, rows[i], 0, 2);
                        if( ((5<=j<=8) && rows[i]<=21 && rows[i]!=15 && rows[i]!=14 && rows[i]!=16) || rows[i]==29  || rows[i]==30 ){
                        	if(rows[i]!=30){
                        		DCellWeb1.SetCellColor("E"+rows[i], 10);
                        		DCellWeb1.SetCellColor("F"+rows[i], 10);
                        		DCellWeb1.SetCellTip(5,rows[i],0,"该数据来自于税控系统，如发现有误，可自行修改！");
                        		DCellWeb1.SetCellTip(6,rows[i],0,"该数据来自于税控系统，如发现有误，可自行修改！");
                        	}
                        	DCellWeb1.SetCellColor("G"+rows[i], 10);
                        	DCellWeb1.SetCellTip(7,rows[i],0,"该数据来自于税控系统，如发现有误，可自行修改！");
                        	if(rows[i]!=29 && rows[i]!=30){
                        		DCellWeb1.SetCellColor("H"+rows[i], 10);
                        		DCellWeb1.SetCellTip(8,rows[i],0,"该数据来自于税控系统，如发现有误，可自行修改！");
                        	}
                        		
                        }
                    }
                }
            }
        },
        
        
		onZzsfp:function(){
			
			var winParam = {
                    id: 'win' + hlwsbTools.getNSRMC(), title: "增值税进销项明细数据",
                    url: '/hlwsb/zzs/ybnsr/sb_zzs_fp_hz.html?SBBZL_DM='+SBBZL_DM,
                    width: 680,
                    height: 400
                };
                winObj = baseTools.showWinExt(winParam);
                $(winObj.DOM.wrap).bgiframe({
                		width: 700,
                        height: 400		
                });
			
//			window.showModelessDialog("/hlwsb/zzs/ybnsr/sb_zzs_fp_hz.html",'增值税进销项明细数据',"dialogWidth=660px;dialogHeight=700px;maximize:yes;minimize:no;status:no");
//			var iTop =  180;
//			var iLeft = window.screen.availWidth - 1000;
//			window.open("sb_zzs_fp_hz.html?SBBZL_DM="+SBBZL_DM,'','height=400,innerHeight=400,width=660,innerWidth=680,top='+iTop+',left='+iLeft);
		},
		
		onSxfp:function(){
			
			if(confirm("刷新发票功能，两次操作需要间隔15分钟，确认要刷新吗？")){
				baseTools.xhrAjax({
					url: "/tqfpxx.do",
					bShow: false,
					async: true,
					params: {NSRSBH: NSRSBH, DJXH: hlwsbTools.getDjxh(),SSQQ:SSSQ_Q,SSQZ:SSSQ_Z,CZBZ:"NSRCZ"},
					callback: [function (jsonObj, xhrArgs) {
						switch (parseInt(jsonObj.code)) {
						//查询操作返回标志
						case 0:
						case 1:
						case 2:
							break;
						case -1://保存出错返回标志
						case -2://其它错误返回标志
							break;
						default:
						}
					}]
				});
			}
			
		},
		
		
		//校验简易计税资格与简易计税行次填写情况是否一致
		checkJyjs:function(){
			//非简易计税时，简易计税行次存在不等于0的数据时，该行次放开
			if(!JYZSBFBZ || JYZSBFBZ != '203'){
				
				var jyjs_row = [];
				for(var i = 16;i <= 26;i++){
					//不包含13a b c
                    if(i==22||i==23||i==24){
                        continue;
                    }
					for(var j = 5;j <= 18;j++){
						var js = DCellWeb1.GetCellDouble(j,i,0);
						if(js!=0){
							jyjs_row.push([i]);
							break;
						}
					}
				}
				if(jyjs_row.length>0){
					if(confirm("经查询您未做简易征收办法备案登记，提取您销项发票数据时有简易征收办法相关发票，" +
							"请您做简易征收办法备案登记 或 将本表中简易征收计税栏次相关数据清零再做保存申报操作！" +
							"\n点击“确定”允许手动修改“二、简易计税方法计税”栏次。")){
						curSeg.setReadOnlyByLabel(5, 20, jyjs_row);
					}
				}
			}
		},
        openPopWin:function(){
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=fb1_2017&&startRow=9&&sheetIndex=1&templatePath=../../printModel/zzs/ybnsr/sb_zzs_fb1_2017.zip',
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
            /*var data1 = {
                BODY: []
            };*/
            data1.BODY=[];
            for(var i =0;i<jsonArray.length;i++){
                if(jsonArray[i].XH=="19"){
                    data1.BODY.push(jsonArray[i]);
                    break;
                }
                data1.BODY.push(jsonArray[i]);
            }
            DCellWeb1.initDataToCell({
                cols: ["COL01", "COL02", "COL03", "COL04", "COL05", "COL06", "COL07", "COL08", "COL09", "COL10", "COL11", "COL12", "COL13", "COL14"],
                data: data1,
                nsrxxCols: ["NSRMC", "NSRSBH", "SSSQ", "TBRQ"],
                iszdjskxg: true
            });
            return true;
        },
        /**
         * 需要的时候可以覆盖该方法
         * 在ajax调用中,在得到数据时调用该方法
         */
        pageFlowControl: function (jsonObj, xhrArgs) {
            var SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            switch (parseInt(jsonObj.code)) {

                //查询操作返回标志
                case 0:
                    curSeg.initControl(jsonObj);
                    curSeg.initData(jsonObj);
                    DCellWeb1.ProtectFormula = false;
//                    if(!SBBZT){
//                    	cell.calculateAllJs();
//                    }
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
                    bAdd = true;
                    curSeg.initControl(jsonObj);
                    curSeg.deleteinitdata(jsonObj);
                    curSeg.initData(jsonObj);
//                    cell.calculateAllJs();
                    break;
                //准备添加的记录已经存在
                case 3:
                    break;
                //在线帮助
                case 6:
                    break;
                case -1://保存出错返回标志
                case -2://其它错误返回标志
//                    alert(jsonObj.msg);
                    var reason = jsonObj.msg;
                    if (reason.indexOf("异常原因：") > -1) {
                        reason = reason.substring(reason.indexOf("异常原因："));
                        var sssq = DCellWeb1.getValByName('SSSQ');
                        sssq += hlwsbTools.setSSsq(SSSQ_Q, SSSQ_Z);
                        DCellWeb1.setValByName('SSSQ', sssq);
                        jQuery(".toolBar input[type='button']").attr('disabled', 'true');
                    }
                    DCellWeb1.setValByLabel('F3', reason);
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