
/**
 * 根据权限过滤 增值税一般申报表 下拉树
 * @param {Object} treeName 下拉树名称
 */
function jspt_gy_qx_zzssbbByQxFun(resDate, treeName) {
    (function () {
        jspt_gy_qx_zzssbbByQxFunDelay(resDate, treeName);
    }).delay(100);
}

/**
 * 根据权限过滤 增值税一般申报表 下拉树
 * @param {Object} treeName 下拉树名称
 */
function jspt_gy_qx_zzssbbByQxFunDelay(resDate, treeName) {
    var submit = new SwordSubmit();// 根据功能代码查询功能菜单
    //submit.pushData("gndm", gndm);

    var tree = $w(treeName);//获取树组件对象  
    //锁死树
    var obj = document.getElementsByName(treeName);
    obj[0].disabled = "true";
    submit.setOptions({
        async: "true",
        mask: "false",
        ctrl: 'DZBSXTKJ019SearchGnsCtrl_getZzssbbQx',
        onSuccess: function (req, res) {
            //解锁树
            var obj = document.getElementsByName(treeName);
            obj[0].disabled = "";
            var zzssbbQxStr = res.getAttr('zzssbbQxStr');
            if ('not done' == zzssbbQxStr) {
                //不需要过滤

            } else {
                //按权限 过滤 申报表
                gvSelectTreeByQx(treeName, zzssbbQxStr);

            }
            jspt_gy_qx_zzssbbCallbackFun(resDate, treeName);
        },
        onError: function onHandleLoginError() {
            swordAlert("功能查询出错！");
        }
    });
    submit.submit();
}




/**
 * 根据权限字符串，过滤下拉树
 * @param {Object} treeName 下拉树name
 * @param {Object} qxStr  权限字符串
 */
function gvSelectTreeByQx(treeName, qxStr) {
    var tree = $w(treeName);//获取树组件对象  
    var qxArr = null;
    if (qxStr) {
        qxArr = qxStr.split(",");//权限数据 "001,002,003"
    }
    if (!tree || !qxArr) {
        return false;
    }
    var temp = "";

    //删除表
    var query = new Hash(); //要删除的列表
    var allData = tree.getAllNode();//获取树的所有节点数据  
    var len = allData.length;
    //遍历下拉框，
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < qxArr.length; j++) {
            if (allData[i].get("code") == qxArr[j]) {
                //保留需要的
                temp += ",{'code':'" + allData[i].get("code") + "','caption':'" + allData[i].get("caption") + "'}"
            }
        }
    }


    //	var data = "{'name':'sbZfbTree','sword':'SwordTree','data':[{'code':'sb202zzsybnsrsb36','caption':'增值税纳税申报表附表五（不动产分期抵扣计算表）'}," +
    //	"{'code':'BDA0610031','caption':'固定资产（不含不动产）进项税额抵扣情况表'}," +
    //	"{'code':'sb202zzsybnsrsb37','caption':'本期抵扣进项税额结构明细表'}," +
    //	"{'code':'sb202zzsybnsrsb39','caption':'营改增税负分析测算明细表'}," +
    //	"{'code':'BDA0610758','caption':'增值税减免税申报明细表'} ]} ";  

    if (temp.indexOf(',') != -1) {
        temp = temp.substr(1, temp.length);
    }

    //重新构建下拉树
    //    var dataTepm = "{'name':'sbZfbTree','sword':'SwordTree','data':[ ]} ";
    var data = "{'name':'sbZfbTree' ,'sword':'SwordTree', 'data': [ " + temp + "]}";
    tree.reloadTree(data);
}




/**
 * 根据权限过滤 财务报表表 下拉树
 * @param {Object} treeName 下拉树名称
 */
function jspt_gy_qx_cwbbByQxFun(resData, treeName, dataname, spc_num) {

    var submit = new SwordSubmit();// 根据功能代码查询功能菜单
    //锁死树
    var obj = document.getElementsByName(treeName);
    obj[0].disabled = "true";
    submit.setOptions({
        async: "true",
        mask: "false",
        ctrl: 'DZBSXTKJ019SearchGnsCtrl_getCwbbQx',
        onSuccess: function (req, res) {
            //解锁树
            var obj = document.getElementsByName(treeName);
            obj[0].disabled = "";
            var cwbbQxStr = res.getAttr('cwbbQxStr');
            if ('not done' == cwbbQxStr) {
                //不需要过滤

            } else {
                //按权限 过滤 申报表
                gvSelectByQx(resData, dataname, cwbbQxStr, spc_num);

            }
        },
        onError: function onHandleLoginError() {
            swordAlert("功能查询出错！");
        }
    });
    submit.submit();
}

function gvSelectByQx(resData, dataname, qxStr, spc_num) {

    var qxArr = qxStr.split(",");//权限数据 "001,002,003"
    var arrayObj = new Array();

    var fxqObj = resData.getDataByDataName(dataname);//根据dataName属性值获取后台传送的下拉列表元素的选项数据集对象   
    var fxq = fxqObj.data;  //获取选项数据   
    var len = fxq.length;
    for (var i = 0; i < len; i++) {
        var flag = "false";
        for (var j = 0; j < qxArr.length; j++) {
            if (fxq[i].code == qxArr[j]) {
                flag = "true";//符合规则
                //特殊处理
                if (qxArr[j] == "ZL1001045") {
                    if (spc_num == '10') {
                        flag = "true";//只有 spc_num != '10'时 才保留  ZL1001045
                    } else {
                        flag = "false";//删除
                    }
                }
            }
        }
        if (flag == "true") {
            //保留需要的
            arrayObj.push({ "code": fxq[i].code, "caption": fxq[i].caption, "pcode": fxq[i].pcode });
        }
    }

    //重新构建下拉框
    //   [{"code": "Y","caption": "是","pcode":"ZL1001"},{"code": "N","caption": "否","pcode":"ZL1001"}]   
    //var newCon = [{"code": "Y","caption": "是","pcode":"ZL1001"},{"code": "N","caption": "否","pcode":"ZL1001"}] ;
    //    arrayObj[0] = {"code": "Y","caption": "是111","pcode":"ZL1001"}
    //    arrayObj[1] = {"code": "N","caption": "否222","pcode":"ZL1001"}
    var widgetData = {
        "data": [{
            "sword": "SwordSelect",
            "dataName": dataname,
            "data": arrayObj
        }]
    }
    pc.reloadSel(dataname, widgetData);
}



