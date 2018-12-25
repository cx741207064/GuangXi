$(document).ready(function () {
    sb.onLoad();
});

/**
 * <ol>
 * date:2013-12-26 editor:lijun
 * <li>创建文档</li>
 * <li>网上申报</li>
 * </ol>
 *
 */
var sb = (function () {
    //私有属性
    var curSeg, curJsonObj, tbList, gridObj, ids;
    var sfzxx;
    var selectSbPtVal="";//2017.04.11lijun保存选择的申报平台
    var zfsjly = ''; //判断是否是从作废来调用修改数据
    var fjs_save = false;
    //var sfyczb="";//异常转办处理标志 Y开启异常转办处理（票表比对强制监控未通过前提下） S（票表比对强制监控已通过，提示性比对不通过继续申报）
    //私有方法
    var FJS_COUNT = 0;//附加税标志
    var CWKJZDBABZ = '';//财务会计制度备案标志
    var initLayout = function () {
        //初始化页面UI
        curJsonObj = null;
        CWKJZDBABZ = baseTools.getCWKJZDBABZ();
        if(CWKJZDBABZ == 'N'){
            alert('提示：您还未进行财务制度备案，点击确定继续');
        }
        //动态生成工具栏操作按钮插件
        //  $(".panelBar .toolBar").toolbarBtn();
        tbList = $("#tbList");
        var cols = [
            {title: '税种', name: 'NSRLX_MC', width: 160, align: 'left', hidden: true},
            {title: '申报项目', name: 'SBXMMC', width: 130, align: 'left', hidden: false},
            {title: '纳税人类型代码', name: 'NSRLX_DM', width: 80, align: 'left', hidden: true},
            {title: '所属期起', name: 'SSSQ_Q', width: 30, align: 'left', hidden: false},
            {title: '所属期止', name: 'SSSQ_Z', width: 30, align: 'left', hidden: false},
            {title: '征收品目代码', name: 'ZSPM_DM', width: 80, align: 'left', hidden: true},
            {title: '征收品目名称', name: 'ZSPM_MC', width: 80, align: 'left', hidden: true},
            {title: '下个月是否申报过', name: 'NEXTMONTH', width: 80, align: 'left', hidden: true},
            {title: '上个月是否跳着报', name: 'PREMONTH', width: 80, align: 'left', hidden: true},
			 {title: '是否在风控检查的账户中', name: 'ISFKJC', width: 80, align: 'left', hidden: true},
            {
                title: '是否超过纳税期限',
                name: 'NSQX',
                width: 10,
                align: 'center',
                hidden: false,
                renderer: function (val, item) {
                    return val == "1" ? "<font color='red'>过期</font>" : "<font color='green'>未过期</font>";
                }
            },
            {title: '申报结果代码', name: 'SBJG_DM', width: 50, align: 'left', hidden: false},
            {title: '申报结果', name: 'SBJG_MS', width: 80, align: 'left', hidden: false},
            {title: '国地税类型', name: 'GDSLX', width: 40, align: 'left', hidden: true}
        ];

        gridObj = tbList.mmGrid({
            height: 200,
            fullWidthRows: true,
            checkCol: true,
            showBackboard: false,
            autoLoad: false,
            cols: cols
        }).on('cellSelected', function (e, item, rowIndex, colIndex) {
//            var isDisabled = gridObj.$body.find("tr").eq(rowIndex).find('td .mmg-check').attr("disabled");
//            if(isDisabled == "disabled") {
//                e.stopImmediatePropagation();
//                return;
//            }
        });
        if ("06" == hlwsbTools.getNsrztdm()) {
            document.getElementById("nsrztsw").style.display = "";
        }
    };
    //公有方法
    return {
        onLoad: function () {
            curSeg = sb;
            initLayout();
           curSeg.onQuery();
          //同步申报状态实时
            curSeg.onOperateTbSbzt();
            this.onOpenTbsxsm();
           /* if(confirm('您是否要查看当前申报状况，点击确定则查看，点击取消则不查看')){
            	curSeg.onToolbarClick(7);
            }*/
            
            
            curSeg.onSearch();
            //删除组件释放内存
            $(window).unload(function () {
            });
        },
        onOpenTbsxsm: function () {

            var msg = "";
            var winParam = {
                id: 'winTbsxsm', title: msg,
                url: '/hlwsb/bbsxsm/sb.html',
                width: 600,
                height: 390
            };
            var winObj = baseTools.showWinExt(winParam);
            $(winObj.DOM.wrap).bgiframe({
                width: 625,
                height: 435
            });
        },
        //查询数据
        onQuery: function () {
            baseTools.xhrAjax({
                url: "/hlwsb/sbkk/getNsrlx.do",
                params: {NSRSBH: baseTools.getUserZh()},
                callback: [curSeg.pageFlowControl]
            });
        },

        onSearch: function () {
            baseTools.xhrAjax({
                url: "/hlwsb/sbkk/checkSfzxx.do",
                params: {NSRSBH: baseTools.getUserZh()},
                callback: [curSeg.zzsTsxx]
            });
        },
        //校验是否是增值税小规模季报，并在五月份六月份征期内提示
        zzsTsxx: function (jsonObj, xhrArgs) {
//        	alert(JSON.stringify(jsonObj.data));
            if (jsonObj.data.BODY && jsonObj.data.BODY.length > 0) {
                sfzxx = jsonObj.data.BODY;
                var rq = jsonObj.data.TBRQ;
                var yf = rq.substring(5, 7);
                var nsqx = jsonObj.data.BODY[0].NSQX_DM;
                var nsrzg = jsonObj.data.BODY[0].NSRZG_DM;
                if ("08" == nsqx && ("05" == yf || "06" == yf)
                    && (nsrzg.indexOf(203) == -1) && (nsrzg.indexOf(202) == -1) && (nsrzg.indexOf(201) == -1)) {
                    document.getElementById("zzstx").style.display = "block";
                }
            }
        },

        //分配应填写申报表种类
        onXgsj: function () {
            ids = gridObj.selectedRows();
            if (ids.length == 0 || ids.length > 1) {
                alert("请选择一条记录!");
                return false;
            }

            if (confirm('确定要修改数据吗？')) {
                baseTools.xhrAjax({
                    url: "/hlwsb/sbkk/xgsj.do",
                    //2014-5-24修改数据时让修改农产品和增值税的时候两个类型一块删除，加入“操作类型”在状态检查时候加以判断
                    params: {
                        CZZT: 'xgsj',
                        NSRSBH: baseTools.getUserZh(),
                        NSRLX_DM: ids[0].NSRLX_DM,
                        SSSQ_Q: ids[0].SSSQ_Q,
                        SSSQ_Z: ids[0].SSSQ_Z,
                        ZSPM_DM: ids[0].ZSPM_DM,
                        GDSLX:ids[0].GDSLX
                    },
                    callback: [curSeg.pageFlowControl]
                });
            }
        },

        //审核数据
        onShsj: function () {
            baseTools.xhrAjax({
                url: "/hlwsb/sbkk/shsj.do",
                params: {NSRSBH: baseTools.getUserZh()},
                callback: [curSeg.pageFlowControl]
            });
        },

        //分配应填写申报表种类
        onSb: function () {
            ids = gridObj.selectedRows();
            if (ids.length == 0 || ids.length > 1) {
                alert("请选择一条记录!");
                return false;
            }

            /*
             * 所得税A类年报表样变更，暂停年报申报
             * 
             */
            var nsrlx_dm = ids[0].NSRLX_DM;
//            if( nsrlx_dm && ("1030175" == nsrlx_dm) ){
//               alert("由于核心征管内部异常，暂不支持网上申报废弃电器。");
//                return false;
//            }
//            if( nsrlx_dm && ("10104001002040" == nsrlx_dm) ){
//            	alert("由于关联关系往来业务报表表样近期会发生变更、网上申报系统需进行调整，\n暂时停止办理所得税年报网上申报业务。\n若您需要注销，请前往大厅办理所得税年报业务！");
//               return false;
//            }

            if (ids[0].NSQX == '1') {
                alert("已超过申报期限，无法申报!");
                return;
            }
            if (ids[0].PREMONTH == 'Y') {
                alert('不允许隔月申报，请您去大厅进行申报！');
                return;
            }
            var zsxm_dm = nsrlx_dm.substring(0, 5);
            if ('10101' == zsxm_dm && '101010109'!= nsrlx_dm&& '101010110'!= nsrlx_dm) {
                // if ("06" == hlwsbTools.getNsrztdm()) {
                //     alert("您当前的纳税人状态为“清算”状态！暂无法通过互联网办理增值税纳税申报，请联系主管税务机关予以处理！其它税种及财务报表可以正常申报。");
                //     return;
                // }
                var nsqx1 = 'N';
                var nsqx2 = 'N';
                for (var i = 0; i < sfzxx.length; i++) {
                    if ('06' == sfzxx[i].NSQX_DM) {
                        nsqx1 = 'Y';
                    } else if ('08' == sfzxx[i].NSQX_DM) {
                        nsqx2 = 'Y';
                    }
                }
                if ('Y' == nsqx1 && 'Y' == nsqx2) {
                    alert("您的增值税税费种信息认定有误，请先前往大厅维护税费种信息后再行申报！");
                    return;
                }
            }
            if ('10106' == zsxm_dm) {
                if ("" == ids[0].ZSPM_DM || ids[0].ZSPM_DM == null) {
                    alert("请先保存个人利息所得税申报表！");
                    return;
                }
            }
            
	     
	    //针对未抄报先申报增加提示 运维提出要求 20180501 changpengyang
            if(ids[0].NSRLX_DM.indexOf("1010101")>=0 || ids[0].NSRLX_DM.indexOf("1010102")>=0){
                if(confirm("使用税控设备开票的纳税人，请确认本月是否抄报税成功，若未成功请务必先抄报后申报，否则将影响正常扣款！\r\n如已抄报点击“确定”，未抄报请点击“取消”！")){
                    curSeg.sb_confirm(ids[0]);
                }
            }else{
                curSeg.sb_confirm(ids[0]);
            }
        },

        set_fjs_save :function (flag) {
            fjs_save = flag;
        },
        //最终申报
        sb_confirm:function(info){
            //20170711 cmr 消费税以及增值税附征
            if(ids[0].FJSBZ =="0"){
                curSeg.tsxCheck();
            }else{
                var url_window=null;
                if(ids[0].FJSBZ =="1"){
                    url_window = "/hlwsb/zzs/fjs/sb_zzs_fjs.html?";
                }else if(ids[0].FJSBZ =="2"){
                    url_window = "/hlwsb/xfs/fjs/sb_xfs_fjs.html?";
                }
                var winParam = {
                    id: (ids[0].FJSBZ=="1"?"zzs_":"xfs_")+'winFjs',
                    title: (ids[0].FJSBZ=="1"?"增值税":"消费税")+"附加税",
                    url: url_window,
                    width: document.body.clientWidth,
                    height: document.body.clientHeight,
                    data:{NSR_INFO:ids[0],SB_OBJ:curSeg},
                    close:function () {
                        if(fjs_save){
                            fjs_save =false;
                            curSeg.tsxCheck();
                        }
                    }
                };
                var winObj = baseTools.showWinExt(winParam);
            }
        },
        tsxCheck:function(){
            if (confirm('确定要申报吗？')) {
                curSeg.disableInput(true);
                baseTools.xhrAjax({
                    url: "/hlwsb/sbkk/tsxCheck.do",
                    params: {
                        NSRSBH: baseTools.getUserZh(),
                        NSRLX_DM: ids[0].NSRLX_DM,
                        SSSQ_Q: ids[0].SSSQ_Q,
                        SSSQ_Z: ids[0].SSSQ_Z,
                        CMD: '0',
                        ZSPM_DM: ids[0].ZSPM_DM,
                        GDSLX:ids[0].GDSLX
                    },
                    callback: [curSeg.pageFlowControl]
                });
            }
        },
        disableInput: function (flag) {
            document.getElementById("SBBUTTON").disabled = flag;
            document.getElementById("XGSJBUTTON").disabled = flag;
        },
        onSbzf: function () {

            ids = gridObj.selectedRows();
            var nsrlx_dm = "";
            var zsxm_dm = "";
            var zspm_dm = "";
            if (ids.length == 0 || ids.length > 1) {
                alert("请选择一条记录!");
                return false;
            }
            if (ids[0].NSQX == '1') {
                alert("已超过申报期限，无法申报作废!");
                return;
            }
            if (ids[0].PREMONTH == 'Y') {
                alert('不允许隔月删除申报记录！');
                return;
            }
            nsrlx_dm = ids[0].NSRLX_DM;
            if (nsrlx_dm) {
                //	 if( nsrlx_dm && ("10104001002010" == nsrlx_dm  || "10104001002020" == nsrlx_dm || "10104001002030" == nsrlx_dm  )){
                // 	alert("由于所得税年报表样近期会发生变更、网上申报系统需进行调整，\n暂时停止办理所得税年报网上申报业务。\n若您需要注销，请前往大厅办理所得税年报业务！");
                //     return false;
                // }
                if ("1030221" == nsrlx_dm) {//水利建设基金
                    zsxm_dm = "30221";
                }else if ("1030126" == nsrlx_dm) {//文化事业建设费
//        			 zsxm_dm = "30126";
                    zsxm_dm = "30217";
                } else if ("1030175" == nsrlx_dm) {//废弃电器
                    zsxm_dm = "30175";
                } else {
                    zsxm_dm = nsrlx_dm.substring(0, 5);
                    //广西允许财务报表征期内可以多次申报 20180725 changpengyang
                    /*if ("50100" == zsxm_dm) {
                        alert("财务报表不允许网报端删除！\n如需更正，请前往大厅办理！");
                        return false;
                    }*/
                    if ("10106" == zsxm_dm) {
                        zspm_dm = ids[0].ZSPM_DM;
                    }
                }

            }
            
            if( (zsxm_dm=='10101' || zsxm_dm=='10102') && FJS_COUNT==1 && '101010109'!=nsrlx_dm&& '101010110'!=nsrlx_dm){
            	if(!confirm("主税作废前，请先确认已作废附加税申报记录！")){
            		return false;
            	}
            }
            
            if (ids[0].NEXTMONTH == 'Y') {
                alert('该纳税人本税期以后还存在申报信息，不允许作废本税期的申报！');
                return false;

            }
            if (confirm('确定要删除申报记录吗？')) {
                curSeg.disableInput(true);
                baseTools.xhrAjax({
                    url: "/hlwsb/sbkk/zfsbb.do",
                    params: {
                        NSRSBH: baseTools.getUserZh(),
                        NSRLX_DM: ids[0].NSRLX_DM,
                        SSSQ_Q: ids[0].SSSQ_Q,
                        SSSQ_Z: ids[0].SSSQ_Z,
                        ZSXM_DM: zsxm_dm,
                        ZSPM_DM: zspm_dm,
                        GDSLX:ids[0].GDSLX
                    },
                    callback: [curSeg.pageFlowControl]
                });
            }
        },

        xgzfsj: function () {
            baseTools.xhrAjax({
                url: "/hlwsb/sbkk/xgsj.do",
                //2014-5-24修改数据时让修改农产品和增值税的时候两个类型一块删除，加入“操作类型”在状态检查时候加以判断
                params: {
                    CZZT: 'xgsj',
                    ZFSJLY: zfsjly,
                    NSRSBH: baseTools.getUserZh(),
                    NSRLX_DM: ids[0].NSRLX_DM,
                    SSSQ_Q: ids[0].SSSQ_Q,
                    SSSQ_Z: ids[0].SSSQ_Z,
                    ZSPM_DM: ids[0].ZSPM_DM,
                    GDSLX:ids[0].GDSLX
                },
                callback: [curSeg.pageFlowControl]
            });
        },
        //申报记录同步函数
        onSbTb: function () {
            ids = gridObj.selectedRows();
            if(ids.length != 0 || ids.length > 1){
                var SBJG_DM = ids[0].SBJG_DM;
                if (SBJG_DM == '000') {
                    alert("只允许同步申报失败的记录");
                    return;
                }
                baseTools.xhrAjax({
                    url: "/hlwsb/sbkk/tbsbb.do",
                    params: {
                        NSRLX_DM: ids[0].NSRLX_DM,
                        SSSQ_Q: ids[0].SSSQ_Q,
                        SSSQ_Z: ids[0].SSSQ_Z,
                        ZSPM_DM:ids[0].ZSPM_DM
                    },
                    callback: [curSeg.pageFlowControl]
                });
            }else{
                alert("请选择一条记录!");
                return false;
            }
        },
		
		//风控政策风险预警扫描
        onFkzcsm: function () {
            ids = gridObj.selectedRows();
            if (ids.length == 0 || ids.length > 1) {
                alert("请选择一条记录!");
                return false;
            }
			//为了减少纳税人疑问，先校验纳税人类型是所得税年报。然后校验时报成功后不允许风控扫描
            var nsrlx_dm = ids[0].NSRLX_DM;

            if ('10104001002010' != nsrlx_dm) {
                alert("目前仅支持居民企业所得税2017（年报A）进行政策风险预警扫描！");
                return false;
            }
            
            if((ids[0].SBJG_DM=='00') || (ids[0].SBJG_DM=='000'))
			{
				alert("申报成功后不允许做政策风险预警扫描！");
                return false;
			}
			
            var PTBM = "sbtoFkCommand";//申报数据到风险监控平台
            if (confirm('确定要政策风险预警扫描吗？')) {
                curSeg.disableInput(true);
                baseTools.xhrAjax({
                            url: "/hlwsb/sbkk/sb.do",
                            params: {
                                NSRSBH: baseTools.getUserZh(),
                                NSRLX_DM: ids[0].NSRLX_DM,
                                SSSQ_Q: ids[0].SSSQ_Q,
                                SSSQ_Z: ids[0].SSSQ_Z,
                                CMD: '0',
                                ZSPM_DM: ids[0].ZSPM_DM,
                                PTBM:PTBM
                            },
                    callback: [curSeg.pageFlowControl]
                });
            }
        },
		
        /**
         * 工具栏按钮操作
         * @param cmd  操作代码
         */
        onToolbarClick: function (cmd) {
            switch (cmd) {
                case 1: //新增操作
                    curSeg.onSb();
                    break;
                case 2://修改操作
                    curSeg.onXgsj();
                    break;
                case 3://修改操作
                    curSeg.onShsj();
                    break;
                case 4:
                    curSeg.onSbzf();
                    break;
                case 5:
                    curSeg.onSbTb();
                    break;
				case 6:
                    curSeg.onFkzcsm();
                    break;
				case 7:
					curSeg.onSbztCx();
					break;
                case -1: //删除操作
                    curSeg.onDelete();
                    break;
                default:
                    alert("未知的操作命令!");
            }
        },
        //申报状态查询
        onSbztCx: function(){
        	var winParam = {
                    id: 'win' + hlwsbTools.getNSRMC(), title: "申报状态查询",
                    url: '/hlwsb/sbkk/sbztCx.html',
                    width: 760,
                    height: 460
                };
                var winObj = baseTools.showWinExt(winParam);
                // $(winObj.DOM.wrap).bgiframe({
                // 		width: 780,
                //         height: 480
                // });
        },
        //实时同步申报结果
        onOperateTbSbzt: function(){
        	  baseTools.xhrAjax({
                  url: "/hlwsb/sbkk/getSbZt.do",
                  params: {NSRSBH: baseTools.getUserZh(),OPERATE:'TB'},
                  callback: [function(jsonObj, xhrArgs) {
              		if(jsonObj.code =='0'){
              			curSeg.onQuery();
              		}
              	}]
              });
        },
        //使用json格式的业务数据填充表格
        fillGridByJson: function (jsonObj, xhrArgs) {
            //绑定数据
            gridObj.load(jsonObj.data);
        },
        //单独把申报方法调出，方便异常转办处理后的申报 20180426 changpengyang
        onyczbSb:function(sfyczb){
            var PTBM="sbCommand";//平台编码
            var sfyczb = sfyczb;
            ids = gridObj.selectedRows();
            //code为00，必填表验证通过，不用提示校验
            baseTools.xhrAjax({
                url: "/hlwsb/sbkk/sb.do",
                params: {
                    NSRSBH: baseTools.getUserZh(),
                    NSRLX_DM: ids[0].NSRLX_DM,
                    SSSQ_Q: ids[0].SSSQ_Q,
                    SSSQ_Z: ids[0].SSSQ_Z,
                    CMD: '0',
                    ZSPM_DM: ids[0].ZSPM_DM,
                    PTBM:PTBM,
                    SFYCZB: sfyczb,
                    GDSLX:ids[0].GDSLX
                },
                callback: [curSeg.pageFlowControl]
            });
        },

        pageFlowControl: function (jsonObj, xhrArgs) {
            curJsonObj = jsonObj;

            curSeg.disableInput(false);
            switch (parseInt(jsonObj.code)) {
                //查询操作返回标志
                case 0:
                    curSeg.fillGridByJson(jsonObj, xhrArgs);
                    for(var fk=0;fk<jsonObj.data.length;fk++){//如果属于风控扫描的企业，将风控扫描的按钮显示出来
						if(jsonObj.data[fk].ISFKJC == "Y"){
					 		document.getElementById("fksman").style.display = "block";
					 	}
						if(jsonObj.data[fk].NSRLX_DM == "101010109"||jsonObj.data[fk].NSRLX_DM == "101010110"){
							FJS_COUNT = 1;//判断是否有附加税
							//document.getElementById("fjswxtx").style.display = "block"; //如果是附加税时，将附加税温馨提醒显示出来
						}

					 }
                    break;
                //添加、更新以及状态更新操作返回标志
                case 1:
                    if (jsonObj.msg) {
                        document.getElementById("tip").innerHTML = jsonObj.msg;
						top.main.setCxxx(jsonObj.msg);//将申报返回的各种信息赋值给在线客服cxxx变量 20170508 zzg
						
                        //年报申报成功后，增加如下提示，给与纳税人 20170419
                        var nsrlxdm1 = jsonObj.data.NSRLX_DM;
                        var sssq_q1 = jsonObj.data.SSSQ_Q;
                        var sssq_z1 = jsonObj.data.SSSQ_Z;
                        if("101040190020,10104001002010,101040010030".indexOf(nsrlxdm1)>-1 ){
                        	var retMsg1 = jsonObj.msg;
                        	if(retMsg1.indexOf("申报成功")>-1){
                        		alert("温馨提示：\n若当前报告年度所属期内存在关联交易或需准备国别报告的情形，请继续进行关联业务往来报告表申报！若不存在以上业务，则无需申报关联业务往来报告表！");
                        	}
                        }
                        var zsxm1 = nsrlxdm1.substring(0,5);
                        //20180227 金三调整增值税申报比对流程
                        //新修改 票表比对不通过增加提示选择框 changpengyang 20180423
                        //附加税暂时不进行检查 20180522 changpengyang
                        if("10101"==zsxm1 && nsrlxdm1 != '101010109'&& nsrlxdm1 != '101010110'){
                            var wbkg = jsonObj.data.WBKG;
                            var bdnr1 = jsonObj.data.BDNR1;
                            var bdnr2 = jsonObj.data.BDNR2;
                            var bdnr3 = jsonObj.data.BDNR3;
                            var returnBz = jsonObj.data.RETURNBZ;
                            var bdjgBz = jsonObj.data.BDJGBZ;
                            var str = "税务机关返回比对结果:"+"<br>";
                            if(returnBz == "N" && bdjgBz == "N"){
                                document.getElementById("tip").innerHTML = str+bdnr1+bdnr2+bdnr3;
                                if(bdnr1!="" || wbkg == "0"){
                                    document.getElementById("tip").innerHTML = str+bdnr1+bdnr2+bdnr3;
                                }else if(bdnr2!=""){
                                    document.getElementById("tip").innerHTML = str+bdnr2+bdnr3;
                                    confirm("<p style='color: red; font-weight: 800'>您申报时票表比对不通过</p>","<p style='text-align: left; font-weight: 600'>请确认是否需要修改报表，点【修改报表】按钮，可以修改申报表，修改后再次申报比对，点击【异常转办】按钮将启用异常转办单。如启用异常转办单，需及时联系税局处理，否则不能进行删除申报和扣款操作！</p>", function (isConfirm) {
                                        if (isConfirm) {
                                            var sfyczb = "Y";
                                            curSeg.onyczbSb(sfyczb);
                                        }
                                    }, {confirmButtonText: '异常转办', cancelButtonText: '修改报表', width: 400});

                                }else if(bdnr3!=""){
                                    document.getElementById("tip").innerHTML = str+bdnr3;
                                    confirm("<p style='color: red; font-weight: 800'>您申报时存在提示性监控比对不通过</p>","<p style='text-align: left; font-weight: 600'>请确认是否需要修改报表，点【修改报表】按钮，可以修改报表，点击【继续申报】按钮，数据将报送至税务机关系统！</p>", function (isConfirm) {
                                        if (isConfirm) {
                                            var sfyczb = "S";
                                            curSeg.onyczbSb(sfyczb);
                                        }
                                    }, {confirmButtonText: '继续申报', cancelButtonText: '修改报表', width: 400});
                                }
                            }else{
                                var yczbgt3 = jsonObj.data.YCZBBZ;
                                if(yczbgt3=="Y"){
                                    var yczbStr = "此属期内已开启异常转办处理，未完成之前将不能进行删除申报或者扣款操作！";
                                    document.getElementById("tip").innerHTML = yczbStr;
                                }
                                curSeg.onQuery();
                            }
                        }else{
                            curSeg.onQuery();
                        }

                        //20180726 非财务报表申报成功后提示是否跳转到扣款页面  baixijiao
                        if(jsonObj.msg.indexOf("申报成功")>-1){
                            if (nsrlxdm1.indexOf("50100")<0) { //非财务报表提示是否跳转到扣款页面
                                var sbtsxx = "您已申报成功，请确认是否跳转到扣款页面!\r\n";
                                if(nsrlxdm1.indexOf("10101020")>-1){
                                    sbtsxx += "系统提醒：\r\n请及时缴纳已申报的税款，超过法律、行政法规规定或者税务机关依照\r\n" +
                                        "法律、行政法规的规定确定的缴纳期限缴款的，将从税款滞纳次日按日\r\n加收滞纳税款万分之五的滞纳金";
                                }    if (confirm(sbtsxx)) {
                                    // parent.navTab.openTab("9300002", "/hlwsb/sbkk/kk.html?SBBZL_DM=9300002&SSSQ_Q="+sssq_q1+"&SSSQ_Z="+sssq_z1+"&NSRLX_DM="+nsrlxdm1+"&GDSLX=1", {title:"实时扣款",external:true});
                                    // parent.parent.main.openIframe('4','实时扣款',"/hlwsb/sbkk/kk.html?SBBZL_DM=9300002&SSSQ_Q="+sssq_q1+"&SSSQ_Z="+sssq_z1+"&NSRLX_DM="+nsrlxdm1+"&GDSLX=1");
                                    window.location.href = window.location.protocol+"//"+window.location.host+"/hlwsb/sbkk/kk.html?SBBZL_DM=9300002&SSSQ_Q="+sssq_q1+"&SSSQ_Z="+sssq_z1+"&NSRLX_DM="+nsrlxdm1+"&GDSLX=1";
                                }}

                            }
                    }
                    break;
                // 删除操作返回标志
                case 2:
                    document.getElementById("tip").innerHTML = jsonObj.msg;
					top.main.setCxxx(jsonObj.msg);//将申报返回的各种信息赋值给在线客服cxxx变量 20170508 zzg
                    break;
                //准备添加的记录已经存在
                case 3:
                    break;
                case 4://申报作废成功后处理
                    if (jsonObj.msg) {
                        document.getElementById("tip").innerHTML = jsonObj.msg;
						top.main.setCxxx(jsonObj.msg);//将申报返回的各种信息赋值给在线客服cxxx变量 20170508 zzg
                        alert(jsonObj.msg);
                        zfsjly='Y';
                      //  curSeg.xgzfsj();
                        curSeg.onQuery();
                    }
                    break;
                case 5://申报同步成功后处理
                    var rtn_code = jsonObj.data.P_RTN_CODE;
                    if (rtn_code == 0) {
                        document.getElementById("tip").innerHTML = "同步成功";
						top.main.setCxxx(jsonObj.msg);//将申报返回的各种信息赋值给在线客服cxxx变量 20170508 zzg
                        curSeg.onQuery();
                    }else if (rtn_code == 3){
                        document.getElementById("tip").innerHTML = "由总机构申报缴纳 或 （分摊预征）按销售收入比例分配应纳税额申报预缴的纳税人，不能同步申报结果";
                        top.main.setCxxx("由总机构申报缴纳 或 （分摊预征）按销售收入比例分配应纳税额申报预缴的纳税人，不能同步申报结果");
                    } else {
                        document.getElementById("tip").innerHTML = "税务机关系统无此申报记录，同步失败";
						top.main.setCxxx("税务机关系统无此申报记录，同步失败");//将申报返回的各种信息赋值给在线客服cxxx变量 20170508 zzg
                    }
                    break;
                //在线帮助
                case 6:
                    break;
                //提示性检查
                case 8:
                    var msg = jsonObj.msg;
                     if("1"==msg){
                         if (confirm("财务报表未填写或未申报,是否继续申报数据？\r\n点击“确定”继续申报，点击“取消”，返回申报表提交页面")) {
                             var PTBM = "sbCommand";//平台编码
                             ids = gridObj.selectedRows();
                             baseTools.xhrAjax({
                                 url: "/hlwsb/sbkk/sb.do",
                                 params: {
                                     NSRSBH: baseTools.getUserZh(),
                                     NSRLX_DM: ids[0].NSRLX_DM,
                                     SSSQ_Q: ids[0].SSSQ_Q,
                                     SSSQ_Z: ids[0].SSSQ_Z,
                                     CMD: '0',
                                     ZSPM_DM: ids[0].ZSPM_DM,
                                     PTBM: PTBM,
				     GDSLX:ids[0].GDSLX
                                 },
                                 callback: [curSeg.pageFlowControl]
                             });
                         }
                     }else{
                         var PTBM = "sbCommand";//平台编码
                         ids = gridObj.selectedRows();
                         baseTools.xhrAjax({
                             url: "/hlwsb/sbkk/sb.do",
                             params: {
                                 NSRSBH: baseTools.getUserZh(),
                                 NSRLX_DM: ids[0].NSRLX_DM,
                                 SSSQ_Q: ids[0].SSSQ_Q,
                                 SSSQ_Z: ids[0].SSSQ_Z,
                                 CMD: '0',
                                 ZSPM_DM: ids[0].ZSPM_DM,
                                 PTBM: PTBM,
				 GDSLX:ids[0].GDSLX
                             },
                             callback: [curSeg.pageFlowControl]
                         });
                     }

                    // curSeg.disableInput(true);
                    // if (jsonObj.data.CODE == '00') {
                    //     curSeg.onyczbSb();
                    // } else if (jsonObj.data.CODE == '-1') {
                    //     //code为-1，必填表验证不通过
                    //     document.getElementById("tip").innerHTML = jsonObj.msg;
						// top.main.setCxxx(jsonObj.msg);//将申报返回的各种信息赋值给在线客服cxxx变量 20170508 zzg
                    //     curSeg.disableInput(false);
                    //     return;
                    // } else if (jsonObj.data.CODE == '99999') {
                    //     var msg = jsonObj.msg;
						// top.main.setCxxx(msg);//将申报返回的各种信息赋值给在线客服cxxx变量 20170508 zzg
                    //     //提示后再申报
                    //     if (confirm(msg)) {
						// 	var PTBM="sbCommand";//平台编码
						// 	ids = gridObj.selectedRows();
                    //         baseTools.xhrAjax({
                    //             url: "/hlwsb/sbkk/sb.do",
                    //             params: {
                    //                 NSRSBH: baseTools.getUserZh(),
                    //                 NSRLX_DM: ids[0].NSRLX_DM,
                    //                 SSSQ_Q: ids[0].SSSQ_Q,
                    //                 SSSQ_Z: ids[0].SSSQ_Z,
                    //                 CMD: '0',
                    //                 ZSPM_DM: ids[0].ZSPM_DM,
						// 		    PTBM:PTBM
                    //             },
                    //             callback: [curSeg.pageFlowControl]
                    //         });
                    //     } else {
                    //         curSeg.disableInput(false);
                    //
                    //     }
                    // }
                    break;
                case -1://保存出错返回标志
                    if (jsonObj.msg.indexOf("SbKkException") > -1) {
                        var msg = jsonObj.msg.substring(jsonObj.msg.indexOf("SbKkException") + 14, jsonObj.msg.length);
                        document.getElementById("tip").innerHTML = msg;//将申报返回的各种信息赋值给在线客服cxxx变量 20170508 zzg
						top.main.setCxxx(msg);
                    } else {
                        var msg = jsonObj.msg;
                        if (msg.indexOf("异常原因：") > -1) {
                            msg = msg.substring(msg.indexOf("异常原因：") + 5);
                        }
                        document.getElementById("tip").innerHTML = msg;
						top.main.setCxxx(msg);//将申报返回的各种信息赋值给在线客服cxxx变量 20170508 zzg
                    }

                    curSeg.onQuery();
                    break;
                case -2://其它错误返回标志
                    alert(jsonObj.msg.replace(/\\n/g, '\n'));
                    baseTools.hideMash();
                    break;
                case -3://cookie 失效请重新登录
                    alert(jsonObj.msg);
                    baseTools.gotoLogin();
                    break;
                case -4://第一次申报未结束时进行第二次申报且时间差小于设定值
                    var reason = jsonObj.msg;
                    if (reason.indexOf("<br>") != -1) {
                        reason = reason.replace(/<br>/g, "\r\n");
                    }
                    alert(reason);
                    break;
                default:
            }
        }
    };
})();