$(document).ready(function () {
    jm_yj_a_fb2.onLoad();
});

var jm_yj_a_fb2 = (function () {
    // 私有属性
    var curSeg; // 保存jm_yj_a_fb2对象的
    var SBBXH = '';
    var SBBZL_DM = "";
    var SSSQ_Q = "";
    var SSSQ_Z = "";
    var DJXH = "";
    var NSRLX_DM = "";

    // 是否是添加
    var bAdd = true;

    var sqs2015 = "";//20180611用于新老报表交互时，获取老报表上期数
    var sqs2018 = "";//20180611获取新报表上期数
    var xwbz="";//4代表新开企业
    var zdhy="";//判断是否是6大行业4大领域
    var SBBZT="";
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
                DJXH: DJXH,
                GDSLX:gdslx
            });
            window.location = "/hlwsb/qysds_print/qysds_yj_a_2018/sb_qysds_jm_yj_a_fb2_2018.html?" + str;
        },

        onLoad: function () {
            curSeg = jm_yj_a_fb2;
            // 引用报表控制
            dcell(DCellWeb1,
                "/hlwsb/printModel/qysds/qysds_yj_a_2018/sb_qysds_jm_yj_a_fb2_2018.cll");
            curSeg.onQuery();
            // 删除组件释放内存
            $(window).unload(function () {
            });
        },
        // 查询数据
        onQuery: function () {
            SBBZL_DM = baseTools.getUrlQueryString("SBBZL_DM");
            SSSQ_Q = baseTools.getUrlQueryString("SSSQ_Q");    //获取所属时期开始时间
            SSSQ_Z = baseTools.getUrlQueryString("SSSQ_Z");    //获取所属时期结束时间
            NSRLX_DM = baseTools.getUrlQueryString("NSRLX_DM");
            gdslx = baseTools.getUrlQueryString("GDSLX");
            baseTools.xhrAjax({
                url: "/hlwsb/qysds/getSB_QYSDS_JM_YJ_A_FB2_2015.do",
                params: {
                    SBBZL_DM: SBBZL_DM,
                    SSSQ_Q: SSSQ_Q, SSSQ_Z: SSSQ_Z, NSRLX_DM: NSRLX_DM,GDSLX:gdslx
                },
                callback: [curSeg.pageFlowControl]
            });
        },

        // 保存数据
        onSave: function () {
            if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能保存");
                return;
            }

            var data = DCellWeb1.submitJsonjs({
                cols: ["COL01", "COL02", "COL03", "COL04", "COL05", "COL06"]
            });
            var body = JSON.parse(data).BODY;
            var ssqz=SSSQ_Z.replace(/\-/g,"");
            var yf=SSSQ_Q.replace(/\-/g,"").substr(4,2);
           if(xwbz!="4"){//xwbz为4代表新开立企业
             if(ssqz=="20180630"){//由于201807月开始使用新报表，201806属期上期数需要查询老报表数据
                 if (!curSeg.checkSqs2015(body)) {//查询15版固定资产上期数
                     return;
                 }
             }else if(yf!="01"){ //若为本年度首次预缴申报（以前年度成立的企业为1月、1季度，本年新成立的为税种开始的月、季度），不与上期申报表比较，
                 if (!curSeg.checkSqs2018(body)) {//查询18版固定资产上期数
                     return;
                 }
             }
           }
            if (!curSeg.checkData(body)) {
                return;
            }

            var url = bAdd ? "/hlwsb/qysds/insertSB_QYSDS_JM_YJ_A_FB2_2015.do"
                : "/hlwsb/qysds/updateSB_QYSDS_JM_YJ_A_FB2_2015.do";
            baseTools.xhrAjax({
                url: url,
                params: {
                    DATA: data,
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
        checkSqs2018:function(body){
            if (body && body.length > 0&&sqs2018&&sqs2018.length) {
                for (var i = 0; i < body.length; i++) {
                    var sqcol01 = sqs2018[i].ZCYZ;//上年第i+1行资产原值
                    var bqcol01 = Number(body[i].COL01);//本年第i+1行资产原值
                    var sqcol02 = sqs2018[i].ZZZJJE_LJ;//上年第i+1行账载折旧金额
                    var bqcol02 = Number(body[i].COL02);//本年第i+1行账载折旧金额
                    var sqcol03 = sqs2018[i].AZSSYBGDJSDZJJE_LJ;//上年第i+1行按照税收一般规定计算的折旧金额
                    var bqcol03 = Number(body[i].COL03);//本年第i+1行按照税收一般规定计算的折旧金额
                    var sqcol04 = sqs2018[i].XSJSZJYHJSDZJJE_LJ;//上年第i+1行享受加速折旧优惠计算的折旧金额
                    var bqcol04 = Number(body[i].COL04);//本年第i+1行享受加速折旧优惠计算的折旧金额
                    var sqcol05 = sqs2018[i].NSTJJE_LJ;//上年第i+1行纳税调减金额
                    var bqcol05 = Number(body[i].COL05);//本年第i+1行纳税调减金额
                    var sqcol06 = sqs2018[i].XSJSZJYHJE_LJ;//上年第i+1行享受加速折旧优惠金额
                    var bqcol06 = Number(body[i].COL06);//本年第i+1行享受加速折旧优惠金额
                    if (Number(bqcol01) < sqcol01) {
                        alert("第" + (i + 1) + "行" + "第1列应>=上期第" + (i + 1) + "行第1列\r\n即" + bqcol01 + "应>=" + sqcol01);
                        return;
                    }
                    if (Number(bqcol02) < sqcol02) {
                        alert("第" + (i + 1) + "行" + "第2列应>=上期第" + (i + 1) + "行第2列\r\n即" + bqcol02 + "应>=" + sqcol02);
                        return;
                    }
                    if (Number(bqcol03) < sqcol03) {
                        alert("第" + (i + 1) + "行" + "第3列应>=上期第" + (i + 1) + "行第3列\r\n即" + bqcol03 + "应>=" + sqcol03);
                        return;
                    }
                    if (Number(bqcol04) < sqcol04) {
                        alert("第" + (i + 1) + "行" + "第4列应>=上期第" + (i + 1) + "行第4列\r\n即" + bqcol04 + "应>=" + sqcol04);
                        return;
                    }
                    if (Number(bqcol05) < sqcol05) {
                        alert("第" + (i + 1) + "行" + "第5列应>=上期第" + (i + 1) + "行第5列\r\n即" + bqcol05 + "应>=" + sqcol05);
                        return;
                    }
                    if (Number(bqcol06) < sqcol06) {
                        alert("第" + (i + 1) + "行" + "第6列应>=上期第" + (i + 1) + "行第6列\r\n即" + bqcol06 + "应>=" + sqcol06);
                        return;
                    }
                }
            }
            return true;
        },
        checkSqs2015: function (body) {
            if (body && body.length > 0&&sqs2015&&sqs2015.length) {
                var H1L7 = sqs2015[0].HJYZ;   //上期第1行7列
                var H1L13 = sqs2015[0].HJKJZJELJZJKCE;//上期第1行13列
                var H1L14 = sqs2015[0].HJZCZJELJZJKCE;//上期第1行14列
                var H1L15 = sqs2015[0].HJBQZJKCELJZJKCE;//上期第1行15列
                var H1L16 = sqs2015[0].HJNSTZELJZJKCE;//上期第1行16列
                var H1L17 = sqs2015[0].HJJSZJYHTJELJZJKCE;//上期第1行17列

                var H4L7 = sqs2015[3].HJYZ;  //上期第4行7列
                var H4L13 = sqs2015[3].HJKJZJELJZJKCE; //上期第4行13列
                var H4L14 = sqs2015[3].HJZCZJELJZJKCE;
                var H4L15 = sqs2015[3].HJBQZJKCELJZJKCE;
                var H4L16 = sqs2015[3].HJNSTZELJZJKCE;
                var H4L17 = sqs2015[3].HJJSZJYHTJELJZJKCE;

                var H7L7 = sqs2015[6].HJYZ;
                var H7L13 = sqs2015[6].HJKJZJELJZJKCE;
                var H7L14 = sqs2015[6].HJZCZJELJZJKCE;
                var H7L15 = sqs2015[6].HJBQZJKCELJZJKCE;
                var H7L16 = sqs2015[6].HJNSTZELJZJKCE;
                var H7L17 = sqs2015[6].HJJSZJYHTJELJZJKCE;
                var col01 = Number(body[0].COL01);
                var col02 = Number(body[0].COL02);
                var col03 = Number(body[0].COL03);
                var col04 = Number(body[0].COL04);
                var col06 = Number(body[0].COL06);
                if (col01 < (Number(H1L7) + Number(H4L7))) {
                    alert("第1行1列应>=上期第1行第7列+第4行第7列\r\n即" + col01 + "应>=" + (Number(H1L7) + Number(H4L7)));
                    return;
                }
                if (col02 < (Number(H1L13) + Number(H4L13))) {
                    alert("第1行2列应>=上期第1行第13列+第4行第13列\r\n即" + col02 + "应>=" + (Number(H1L13) + Number(H4L13)));
                    return;
                }
                if (col03 < (Number(H1L14) + Number(H4L14))) {
                    alert("第1行3列应>=上期第1行第14列+第4行第14列\r\n即" + col03 + "应>=" + (Number(H1L14) + Number(H4L14)));
                    return;
                }
                if (col04 < (Number(H1L15) + Number(H4L15))) {
                    alert("第1行4列应>=上期第1行第15列+第4行第15列\r\n即" + col04 + "应>=" + (Number(H1L15) + Number(H4L15)));
                    return;
                }
                if (col06 < (Number(H1L16) + Number(H1L17) + Number(H4L16) + Number(H4L17))) {
                    alert("第1行6列应>=上期第1行第16+17列与第4行第16+17列之和\r\n即" + col06 + "应>=" +
                    (Number(H1L16) + Number(H1L17) + Number(H4L16) + Number(H4L17)));
                    return;
                }
                var col0201 = Number(body[1].COL01);
                var col0202 = Number(body[1].COL02);
                var col0203 = Number(body[1].COL03);
                var col0204 = Number(body[1].COL04);
                var col0206 = Number(body[1].COL06);
                if (col0201 < Number(H1L7)) {
                    alert("第2行1列应>=上期第1行第7列\r\n即" + col0201 + "应>=" + Number(H1L7));
                    return;
                }
                if (col0202 < Number(H1L13)) {
                    alert("第2行2列应>=上期第1行第13列\r\n即" + col0202 + "应>=" + Number(H1L13));
                    return;
                }
                if (col0203 < Number(H1L14)) {
                    alert("第2行3列应>=上期第1行第14列\r\n即" + col0203 + "应>=" + Number(H1L14));
                    return;
                }
                if (col0204 < Number(H1L15)) {
                    alert("第2行4列应>=上期第1行第7列\r\n即" + col0204 + "应>=" + Number(H1L15));
                    return;
                }
                if (col0206 < (Number(H1L16) + Number(H1L17))) {
                    alert("第2行6列应>=上期第1行第16列与第1行第16列之和\r\n即" + col0206 + "应>=" + (Number(H1L16) + Number(H1L17)));
                    return;
                }
                var col0301 = Number(body[2].COL01);
                var col0302 = Number(body[2].COL02);
                var col0303 = Number(body[2].COL03);
                var col0304 = Number(body[2].COL04);
                var col0306 = Number(body[2].COL06);
                if (col0301 < Number(H4L7)) {
                    alert("第3行1列应>=上期第4行第7列，\r\n即：" + col0301 + "应>=" + Number(H4L7));
                    return;
                }
                if (col0302 < Number(H4L13)) {
                    alert("第3行2列应>=上期第4行第13列，\r\n即：" + col0302 + "应>=" + Number(H4L13));
                    return;
                }
                if (col0303 < Number(H4L14)) {
                    alert("第3行3列应>=上期第4行第14列，\r\n即：" + col0303 + "应>=" + Number(H4L14));
                    return;
                }
                if (col0304 < Number(H4L15)) {
                    alert("第3行4列应>=上期第4行第16+17列，\r\n即：" + col0304 + "应>=" + Number(H4L15));
                    return;
                }
                if (col0306 < (Number(H4L16) + Number(H4L17))) {
                    alert("第3行6列应>=上期第4行第16列与第4行第17列之和，\r\n即：" + col0306 + "应>=" + (Number(H4L16) + Number(H4L17)));
                    return;
                }
                var col0401 = Number(body[3].COL01);
                var col0402 = Number(body[3].COL02);
                var col0403 = Number(body[3].COL03);
                var col0404 = Number(body[3].COL04);
                var col0406 = Number(body[3].COL06);
                if (col0401 < Number(H7L7)) {
                    alert("第4行1列应>=上期第7行第7列，\r\n即：" + col0401 + "应>=" + Number(H7L7));
                    return;
                }
                if (col0402 < Number(H7L13)) {
                    alert("第4行2列应>=上期第7行第13列，\r\n即：" + col0402 + "应>=" + Number(H7L13));
                    return;
                }
                if (col0403 < Number(H7L14)) {
                    alert("第4行3列应>=上期第7行第14列，\r\n即：" + col0403 + "应>=" + Number(H7L14));
                    return;
                }
                if (col0404 < Number(H7L15)) {
                    alert("第4行4列应>=上期第7行第15列，\r\n即：" + col0404 + "应>=" + Number(H7L15));
                    return;
                }
                if (col0406 < (Number(H7L16) + Number(H7L17))) {
                    alert("第4行6列应>=上期第7行第16列与第7行第17列之和，\r\n即：" + col0406 + "应>=" + (Number(H7L16) + Number(H7L17)));
                    return;
                }
            }
            return true;
        },
        checkData: function (body) {
            if (body && body.length > 0) {
                for (var i = 0; i < body.length; i++) {
                    var col01 = Number(body[i].COL01);
                    var col02 = Number(body[i].COL02);
                    var col03 = Number(body[i].COL03);
                    var col04 = Number(body[i].COL04);
                    var col05 = Number(body[i].COL05);
                    var col06 = Number(body[i].COL06);
                    if (col01 < 0) {
                        alert('第' + (i + 1) + '行第1列应>=0！');
                        return;
                    }
                    if (col02 < 0) {
                        alert('第' + (i + 1) + '行第2列应>=0！');
                        return;
                    }
                    if (col03 < 0) {
                        alert('第' + (i + 1) + '行第3列应>=0！');
                        return;
                    }
                    if (col04 < 0) {
                        alert('第' + (i + 1) + '行第4列应>=0！');
                        return;
                    }
                    if (col05 < 0) {
                        alert('第' + (i + 1) + '行第5列应>=0！');
                        return;
                    }
                    if (col06 < 0) {
                        alert('第' + (i + 1) + '行第6列应>=0！');
                        return;
                    }
                    if (col01 < col02) {
                        alert('第' + (i + 1) + '行2列应<=' + (i + 1) + '行1列！');
                        return;
                    }
                    if (col04 < col03) {
                        alert('第' + (i + 1) + '行3列应<=' + (i + 1) + '行4列！');
                        return;
                    }
                    if (col01 < col04) {
                       alert('第' + (i + 1) + '行4列应<=' + (i + 1) + '行1列！');
                        return;
                    }
                    if (col01 < col05) {
                        alert('第' + (i + 1) + '行5列应<=' + (i + 1) + '行1列！');
                        return;
                    }
                    var col0304 = dcmSub(col04,col03);//第4列与第3列的差值
                    if (Number(col06) != Number(col0304)) {
                        alert('第' + (i + 1) + '行6列应=' + (i + 1) + '行4列-' + (i + 1) + '行3列！');
                        return;
                    }
                }
                var col301=DCellWeb1.getValByLabel("C11");
                if((col301>0&&col301<1000000)){
                    if (!confirm("第3行1列用于填报100万元以上研发设备，请检查原值是否正确！")) {
                        return;
                    }
                }
                var col201 = Number(body[1].COL01);
                var col202 = Number(body[1].COL02);
                var col203 = Number(body[1].COL03);
                var col204 = Number(body[1].COL04);
                var col205 = Number(body[1].COL05);
                var col206 = Number(body[1].COL06);
                if(!(zdhy&&zdhy.length>0)){
                    if(col201>0||col202>0||col203>0||col204>0||col205>0||col206>0){
                       if(!confirm("第2行为享受6大行业4大领域固定资产加速折旧政策的企业录入，当前企业登记信息显示不属于可以享受该项政策的行业，若行业信息有误，请及时变更登记信息，按确定可继续填报")){
                           return;

                       }
                    }
                }
            }
           return true;

        },
        onDelete: function () {
            if (SBBZT == '2' || SBBZT == '3') {
                alert("已申报，不能删除");
                return;
            }
            if (confirm("确定删除此报表？")) {

                var url = "/hlwsb/qysds/delSB_QYSDS_JM_YJ_A_FB2_2015.do";
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
            data1 = {
                HEAD: jsonObj.data.HEAD,
                BODY: jsonObj.data.BODY,
            };
            DCellWeb1.initDataToCell({
                cols: ["COL01", "COL02", "COL03", "COL04", "COL05", "COL06"],
                data: jsonObj.data,
                nsrxxCols: ["NSRSBH", "SSSQ", "NSRMC", "TBRQ"]
            });
            SBBXH = jsonObj.data.HEAD.SBBXH;
            SBBZT = jsonObj.data.HEAD.SBBZT;
            sqs2015 = jsonObj.data.YMKZ.newfb2Map2015;
            sqs2018 = jsonObj.data.YMKZ.newfb2Map2018;
            zdhy=jsonObj.data.YMKZ.zdhyMap;
            xwbz = jsonObj.data.YMKZ.XWBZ;
            if (jsonObj.data && jsonObj.data.BODY.length > 0) {
                if (SBBXH.length > 0) {
                    bAdd = false;
                }
            }
            //先全部打开，然后特殊情况关闭
            if (SBBZT == '2' || SBBZT == '3') {
                document.getElementById("save").disabled = true;
                document.getElementById("delete").disabled = true;
            }
        },
        //导入
        openPopWin: function () {
            return false;
            var msg = "导入";
            var winParam = {
                id: 'winTIPS', title: msg,
                url: '/hlwsb/components/excelToJson/sb_excel_upload.html?bbmc=jm_yj_a_fb2&&startRow=11&&sheetIndex=1&templatePath=../../printModel/qysds/qysds_yj_a_2018/sb_qysds_jm_yj_a_fb2_2018.zip',
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
            data1.BODY=[];
            for(var i=0;i<jsonArray.length;i++){
                if(i>3){
                    break;
                }
                data1.BODY.push(jsonArray[i]);
            }
            DCellWeb1.initDataToCell({
                cols: ["COL01", "COL02", "COL03", "COL04", "COL05"],
                data: data1,
                nsrxxCols: ["NSRSBH", "SSSQ", "NSRMC", "TBRQ"]
            });
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
                    break;
                // 添加、更新以及状态更新操作返回标志
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
                    //curSeg.initData(jsonObj);
                    curSeg.onQuery();
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