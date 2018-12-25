
var LODOP = null;

//执行lodop方式打印
function doLodopPrint(bbmc, htmlTxt) {
    if (bbmc == "SB_CWBB_YFZC_FZZHZB") {
        window.top.alert('消息', "由于表格数据项较多，《研发支出辅助账汇总表》不提供打印功能，如需打印请导出后打印！", 'warning');
        return false;
    }
    if (bbmc != null && bbmc.length > 0) {
        if (LODOP == null) {
            //加载控件
            LODOP = getLodop(document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'));
        }
        if (LODOP == null) { return; }
        htmlTxt = htmlTextProcess(htmlTxt);			//报表页面内容清理
        LODOP = printConfig(LODOP, bbmc, htmlTxt);	//报表打印设置
        //公共打印设置-------------------------------
        LODOP.SET_PRINT_MODE("POS_BASEON_PAPER", true);		//设置打印模式:设置输出位置以纸张边缘为基点
        LODOP.SET_SHOW_MODE("LANDSCAPE_DEFROTATED", true);	//设置显示模式:横向打印的预览默认旋转90度（正向显示）
        LODOP.ADD_PRINT_HTM(5, 10, "100%", "100%", htmlTxt);	//增加超文本打印内容(普通模式)
        //-------------------------------------------
        LODOP.PREVIEW();//弹出打印预览
    }
}

//报表页面内容清理
function htmlTextProcess(htmlTxt) {
    var replaceStr1 = '/WSSBSL/js/page/report/showReport.js';
    var replaceStr2 = '</html>';
    var replaceStr3 = '/WSSBSL/reportServlet.aspx';
    htmlTxt = myReplaceAll(htmlTxt, replaceStr1, "");
    htmlTxt = myReplaceAll(htmlTxt, replaceStr2, '<script src="/WSSBSL/lodop/printFormat.js" type="text/javascript"></script></html>');
    htmlTxt = myReplaceAll(htmlTxt, replaceStr3, "/WSSBSL/html/space.html");
    return htmlTxt;
}

//报表打印设置
function printConfig(LODOP, bbmc, htmlTxt) {
    //增值税（小规模）
    if (bbmc == "WBJK_SB_ZZS_XGMNSR_2005") {
        LODOP.PRINT_INIT("网上申报_增值税_小规模_主表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "98%");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_ZZS_XGMNSR_2005_FB1") {
        LODOP.PRINT_INIT("网上申报_增值税_小规模_附表一");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
        /*2016-05-12取消申报
        else if(bbmc=="WBJK_SB_ZZS_XGMNSR_2005_FB4"){
            LODOP.PRINT_INIT("网上申报_增值税_小规模_附表四");
            LODOP.SET_PRINT_PAGESIZE(2,0,0,"A4");				//设定纸张大小(横向)
        }*/
    else if (bbmc == "WBJK_SB_ZZS_XGMNSR_JMSSBMXB") {
        LODOP.PRINT_INIT("网上申报_增值税_小规模_减免税申报明细表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
        //增值税（一般）
    else if (bbmc == "WBJK_SB_ZZS_2003_YBNSR") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_主表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "92%");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_ZZS_2013_FB1") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_附表一");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "60%");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_ZZS_2013_FB2") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_附表二");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_ZZS_2013_FB3") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_附表三");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_ZZS_2013_FB4") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_附表四");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_ZZS_2003_FB_GDZCJXSEDK") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_固定资产表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_ZZS_NCPDKJSB") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_农产品_汇总表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_ZZS_NCPDKJSB_TRCC") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_农产品_投入产出表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_ZZS_NCPDKJSB_CB") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_农产品_成本表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_ZZS_NCPDKJSB_ZJXS") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_农产品_直接销售表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_ZZS_NCPDKJSB_BGCHWST") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_农产品_不构成货物实体表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_ZZS_BFCPXSTJB") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_部分产品销售统计表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_ZZS_JMSSBMXB") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_减免税申报明细表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_ZZS_2016_FB5") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_附表五");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_ZZS_BQDKJXSEJGMXB") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_本期抵扣进项税额结构明细表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_ZZS_YGZSFFXCSMXB") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_营改增税负分析测算明细表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "85%");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_ZZS_HZNSFPB") {
        LODOP.PRINT_INIT("网上申报_增值税_一般_汇总纳税分配表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:整宽不变形
    }
        //水利建设基金
    else if (bbmc == "SB_SLJSJJ") {
        LODOP.PRINT_INIT("网上申报_水利建设基金");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
        //文化事业建设费
    else if (bbmc == "WBJK_SB_WHSYJSF") {
        LODOP.PRINT_INIT("网上申报_文化事业建设费_主表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_WHSYJSF_FB1") {
        LODOP.PRINT_INIT("网上申报_文化事业建设费_附表一");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
        //月（季）度所得税
    else if (bbmc == "WBJK_SB_JDSDS_2008") {
        LODOP.PRINT_INIT("网上申报_月(季)度所得税A类_主表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_JDSDS_2008_FB01") {
        LODOP.PRINT_INIT("网上申报_月(季)度所得税A类_附表一");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "96%");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_JDSDS_GDZCJSZJ") {
        LODOP.PRINT_INIT("网上申报_月(季)度所得税A类_附表二");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "67%");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_JDSDS_2008_FB03") {
        LODOP.PRINT_INIT("网上申报_月(季)度所得税A类_附表三");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "90%");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_JDSDS_2008_FB1") {
        LODOP.PRINT_INIT("网上申报_月(季)度所得税A类_分配表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_JDSDS_2008_HDZS") {
        LODOP.PRINT_INIT("网上申报_月(季)度所得税B类");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
        //利息所得税
    else if (bbmc == "WBJK_SB_CXCKLXSDS_BGB_05" ||
			bbmc == "WBJK_SB_CXCKLXSDS_BGB_20") {
        LODOP.PRINT_INIT("网上申报_利息所得税");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
        //参股外国企业报告表(A类)
    else if (bbmc == "WBJK_SB_SDS_CGWGQYBGB" ||
	        bbmc == "WBJK_SB_SDS_CGWGQYBGB_QTGD" ||
			bbmc == "WBJK_SB_SDS_CGWGQYBGB_DRGGDS" ||
			bbmc == "WBJK_SB_SDS_CGWGQYBGB_SGWGGF" ||
			bbmc == "WBJK_SB_SDS_CGWGQYBGB_CZWGGF") {
        LODOP.PRINT_INIT("网上申报_月(季)度所得税A类_参股外国企业报告表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "95%");	//设置打印模式:指定整页缩放打印的比例
    }
        //参股外国企业报告表(B类)
    else if (bbmc == "WBJK_SB_SDS_CGWGQYBGB_B" ||
	        bbmc == "WBJK_SB_SDS_CGWGQYBGB_QTGD_B" ||
			bbmc == "WBJK_SB_SDS_CGWGQYBGB_DRGGDS_B" ||
			bbmc == "WBJK_SB_SDS_CGWGQYBGB_SGWGGF_B" ||
			bbmc == "WBJK_SB_SDS_CGWGQYBGB_CZWGGF_B") {
        LODOP.PRINT_INIT("网上申报_月(季)度所得税B类_参股外国企业报告表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "95%");	//设置打印模式:指定整页缩放打印的比例
    }
        //固定资产加速折旧
    else if (bbmc == "SB_GDZC_JSZJ_TJB") {
        LODOP.PRINT_INIT("网上申报_所得税_固定资产加速折旧");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
        //财务报表（小企业月报）
    else if (bbmc == "SB_CWBB_XQYKJZZ_ZCFZB") {
        LODOP.PRINT_INIT("网上申报_财务报表_小企业_月报_资产负债表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "80%");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_XQYKJZZ_LRB") {
        LODOP.PRINT_INIT("网上申报_财务报表_小企业_月报_利润表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_XQYKJZZ_XJLLB") {
        LODOP.PRINT_INIT("网上申报_财务报表_小企业_月报_现金流量表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
        //财务报表（小企业年报）
    else if (bbmc == "SB_CWBB_XQYKJZZ_ZCFZB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_小企业_年报_资产负债表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "96%");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_XQYKJZZ_LRB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_小企业_年报_利润表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_XQYKJZZ_XJLLB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_小企业_年报_现金流量表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
        //财务报表（小企业附注）
    else if (bbmc == "WBJK_SB_CWBB_XQY_FZB1") {
        LODOP.PRINT_INIT("网上申报_财务报表_小企业附注_表一");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_CWBB_XQY_FZB2") {
        LODOP.PRINT_INIT("网上申报_财务报表_小企业附注_表二");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_CWBB_XQY_FZB3") {
        LODOP.PRINT_INIT("网上申报_财务报表_小企业附注_表三");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_CWBB_XQY_FZB4") {
        LODOP.PRINT_INIT("网上申报_财务报表_小企业附注_表四");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_CWBB_XQY_FZB5") {
        LODOP.PRINT_INIT("网上申报_财务报表_小企业附注_表五");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_CWBB_XQY_FZB6") {
        LODOP.PRINT_INIT("网上申报_财务报表_小企业附注_表六");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_CWBB_XQY_FZB7") {
        LODOP.PRINT_INIT("网上申报_财务报表_小企业附注_表七");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
        //财务报表（一般企业月报）
    else if (bbmc == "SB_CWBB_QYKJZZYBQY_ZCFZB") {
        LODOP.PRINT_INIT("网上申报_财务报表_一般企业_月报_资产负债表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "80%");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_QYKJZZYBQY_LRB") {
        LODOP.PRINT_INIT("网上申报_财务报表_一般企业_月报_利润表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_QYKJZZYBQY_XJLLB") {
        LODOP.PRINT_INIT("网上申报_财务报表_一般企业_月报_现金流量表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Height");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_QYKJZZYBQY_SYZQY") {
        LODOP.PRINT_INIT("网上申报_财务报表_一般企业_月报_所有者权益变动表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
        //财务报表（一般企业年报）
    else if (bbmc == "SB_CWBB_QYKJZZYBQY_ZCFZB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_一般企业_年报_资产负债表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "86%");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_QYKJZZYBQY_LRB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_一般企业_年报_利润表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_QYKJZZYBQY_XJLLB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_一般企业_年报_现金流量表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Height");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_QYKJZZYBQY_SYZQY_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_一般企业_年报_所有者权益变动表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_XQYKJZZ_DQTZPLNR_NB") {
        LODOP.PRINT_INIT("短期投资披露内容");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Height");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_XQYKJZZ_CHPLNR_NB") {
        LODOP.PRINT_INIT("存货披露内容");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Height");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_XQYKJZZ_GDZCPLNR_NB") {
        LODOP.PRINT_INIT("固定资产披露内容");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Height");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_XQYKJZZ_YFZGXCMXB_NB") {
        LODOP.PRINT_INIT("应付职工薪酬明细表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Height");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_XQYKJZZ_YJSFMXB_NB") {
        LODOP.PRINT_INIT("应交税费明细表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Height");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_XQYKJZZ_LRFPB_NB") {
        LODOP.PRINT_INIT("利润分配表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Height");	//设置打印模式:指定整页缩放打印的比例
    }
        //财务报表（银行类月报）
    else if (bbmc == "SB_CWBB_SYYH_ZCFZB") {
        LODOP.PRINT_INIT("网上申报_财务报表_银行类_月报_资产负债表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "95%");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_SYYH_LRB") {
        LODOP.PRINT_INIT("网上申报_财务报表_银行类_月报_利润表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_SYYH_XJLLB") {
        LODOP.PRINT_INIT("网上申报_财务报表_银行类_月报_现金流量表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_SYYH_SYZQYBDB") {
        LODOP.PRINT_INIT("网上申报_财务报表_银行类_月报_所有者权益变动表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");					//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Page");	//设置打印模式:指定整页缩放打印的比例
    }
        //财务报表（银行类年报）
    else if (bbmc == "SB_CWBB_SYYH_ZCFZB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_银行类_年报_资产负债表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "90%");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_SYYH_LRB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_银行类_年报_利润表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_SYYH_XJLLB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_银行类_年报_现金流量表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_SYYH_SYZQYBDB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_银行类_年报_所有者权益变动表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");					//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Page");	//设置打印模式:指定整页缩放打印的比例
    }
        //财务报表（保险类月报）
    else if (bbmc == "SB_CWBB_BXGS_ZCFZB") {
        LODOP.PRINT_INIT("网上申报_财务报表_保险类_月报_资产负债表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_BXGS_LRB") {
        LODOP.PRINT_INIT("网上申报_财务报表_保险类_月报_利润表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_BXGS_XJLLB") {
        LODOP.PRINT_INIT("网上申报_财务报表_保险类_月报_现金流量表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_BXGS_SYZQYBDB") {
        LODOP.PRINT_INIT("网上申报_财务报表_保险类_月报_所有者权益变动表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");					//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Page");	//设置打印模式:指定整页缩放打印的比例
    }
        //财务报表（保险类年报）
    else if (bbmc == "SB_CWBB_BXGS_ZCFZB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_保险类_年报_资产负债表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_BXGS_LRB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_保险类_年报_利润表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_BXGS_XJLLB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_保险类_年报_现金流量表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_BXGS_SYZQYBDB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_保险类_年报_所有者权益变动表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");					//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Page");	//设置打印模式:指定整页缩放打印的比例
    }
        //财务报表（证券类月报）
    else if (bbmc == "SB_CWBB_ZQGS_ZCFZB") {
        LODOP.PRINT_INIT("网上申报_财务报表_证券类_月报_资产负债表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_ZQGS_LRB") {
        LODOP.PRINT_INIT("网上申报_财务报表_证券类_月报_利润表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_ZQGS_XJLLB") {
        LODOP.PRINT_INIT("网上申报_财务报表_证券类_月报_现金流量表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_ZQGS_SYZQYBDB") {
        LODOP.PRINT_INIT("网上申报_财务报表_证券类_月报_所有者权益变动表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");					//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Page");	//设置打印模式:指定整页缩放打印的比例
    }
        //财务报表（证券类年报）
    else if (bbmc == "SB_CWBB_ZQGS_ZCFZB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_证券类_年报_资产负债表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "SB_CWBB_ZQGS_LRB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_证券类_年报_利润表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_ZQGS_XJLLB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_证券类_年报_现金流量表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_ZQGS_SYZQYBDB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_证券类_年报_所有者权益变动表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");					//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Page");	//设置打印模式:指定整页缩放打印的比例
    }
        //财务报表（担保类月报）
    else if (bbmc == "WBJK_SB_CWBB_JRQY_DB_ZCFZB") {
        LODOP.PRINT_INIT("网上申报_财务报表_担保类_月报_资产负债表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_CWBB_JRQY_DB_LRBJLRFPB") {
        LODOP.PRINT_INIT("网上申报_财务报表_担保类_月报_利润表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");					//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_CWBB_JRQY_DB_SYZQYBDB") {
        LODOP.PRINT_INIT("网上申报_财务报表_担保类_月报_所有者权益变动表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
        //财务报表（担保类年报）
    else if (bbmc == "WBJK_SB_CWBB_JRQY_DB_ZCFZB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_担保类_年报_资产负债表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_CWBB_DB_LRBJLRFPBNB") {
        LODOP.PRINT_INIT("网上申报_财务报表_担保类_年报_利润表");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");					//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_CWBB_DB_SYZQYZJBDBNB") {
        LODOP.PRINT_INIT("网上申报_财务报表_担保类_年报_所有者权益变动表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
        //财务报表（事业单位月报）
    else if (bbmc == "SB_CWBB_SYDWKJZD_ZCFZB") {
        LODOP.PRINT_INIT("网上申报_财务报表_事业单位_月报_资产负债表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_SYDWKJZD_SRZCBYB") {
        LODOP.PRINT_INIT("网上申报_财务报表_事业单位_月报_收入支出表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
        //财务报表（事业单位年报）
    else if (bbmc == "SB_CWBB_SYDWKJZD_ZCFZB_NB") {
        LODOP.PRINT_INIT("网上申报_财务报表_事业单位_年报_资产负债表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_SYDWKJZD_SRZCBNB") {
        LODOP.PRINT_INIT("网上申报_财务报表_事业单位_年报_收入支出表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "SB_CWBB_SYDWKJZD_CZBZSRZCB") {
        LODOP.PRINT_INIT("网上申报_财务报表_事业单位_年报_财政补助收入支出表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Height");	//设置打印模式:指定整页缩放打印的比例
    }
        //年度所得税关联业务
    else if (bbmc == "WBJK_SB_NDSDS_GLQY") {
        LODOP.PRINT_INIT("网上申报_年度关联业务_封面");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_GLYW_GLGXB") {
        LODOP.PRINT_INIT("网上申报_年度关联业务_附表一");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_GLYW_GLJYHZB") {
        LODOP.PRINT_INIT("网上申报_年度关联业务_附表二");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_GLYW_GXB") {
        LODOP.PRINT_INIT("网上申报_年度关联业务_附表三");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_GLYW_LWB") {
        LODOP.PRINT_INIT("网上申报_年度关联业务_附表四");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_GLYW_WXZCB") {
        LODOP.PRINT_INIT("网上申报_年度关联业务_附表五");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "89%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_GLYW_GDZCB") {
        LODOP.PRINT_INIT("网上申报_年度关联业务_附表六");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "88%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_GLYW_RTZJB") {
        LODOP.PRINT_INIT("网上申报_年度关联业务_附表七");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_GLYW_DWTZB") {
        LODOP.PRINT_INIT("网上申报_年度关联业务_附表八");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_GLYW_DWZFKXQKB") {
        LODOP.PRINT_INIT("网上申报_年度关联业务_附表九");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
        //年度所得税A类
    else if (bbmc == "SB_NDSDS_2014_FM") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_封面");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_TBBD") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_填报表单");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_JCXX") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_基础信息");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_主表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB1") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表一");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB2") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表二");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB3") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表三");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB4") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表四");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB5") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表五");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB6") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表六");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "85%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB7") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表七");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "81%");	        //设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB8") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表八");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB9") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表九");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB10") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表十");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "78%");	        //设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB11") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表十一");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB12") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表十二");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB13") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表十三");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB14") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表十四");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB15") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表十五");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "76%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB16") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表十六");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "42%");	        //设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB17") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表十七");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "89%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB18") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表十八");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "86%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB19") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表十九");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB20") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表二十");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB21") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表二十一");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB22") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表二十二");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "86%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB23") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表二十三");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB24") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表二十四");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "61%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB25") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表二十五");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "86%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB26") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表二十六");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB27") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表二十七");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "53%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB28") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表二十八");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Auto-Width");	//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB29") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表二十九");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB30") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表三十");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB31") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表三十一");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "95%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB32") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表三十二");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "95%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB33") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表三十三");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "81%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB34") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表三十四");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "55%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB35") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表三十五");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "58%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB36") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表三十六");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "55%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB37") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表三十七");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "55%");			//设置打印模式:指定整页缩放打印的比例
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB38") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表三十八");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_2014_FB39") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_附表三十九");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");						//设定纸张大小(横向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_JJKCGJB") {
        LODOP.PRINT_INIT("网上申报_年度所得税A类_研发项目可加计扣除研究开发费用情况归集表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(横向)
    }
        //年度所得税B类
    else if (bbmc == "WBJK_SB_NDSDS_2008_HDZS") {
        LODOP.PRINT_INIT("网上申报_年度所得税_B类");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
    }
        //分支机构年度所得税
    else if (bbmc == "WBJK_SB_NDSDS_FZJG") {
        LODOP.PRINT_INIT("网上申报_分支机构年度所得税_主表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");				//设定纸张大小(纵向)
    }
    else if (bbmc == "WBJK_SB_NDSDS_FZJG_FB1") {
        LODOP.PRINT_INIT("网上申报_分支机构年度所得税_附表一");
        LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");				//设定纸张大小(横向)
    }
        //受控外国企业报表表
    else if (bbmc == "WBJK_SB_NDSDS_SKWGQYBGB") {
        LODOP.PRINT_INIT("网上申报_受控外国企业报表表");
        LODOP.SET_PRINT_PAGESIZE(1, 0, 0, "A4");						//设定纸张大小(纵向)
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "80%");			//设置打印模式:指定整页缩放打印的比例
    }
    return LODOP;
}
