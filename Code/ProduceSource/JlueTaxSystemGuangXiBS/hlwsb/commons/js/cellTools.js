/**--------------------------------------------------|
 | 封装华表cell的底层vbscript的调用方法，实现用js调用       |
 | author:lusicong                                    |
 |--------------------------------------------------*/

String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, '');
};

function dcell(cell, url) {

    window.onresize = function () {
        //onresize会执行两次，其中一次获取不到宽高，加入判断屏蔽。
        var width = document.documentElement.offsetWidth;
        var height = document.documentElement.offsetHeight - 30;

        if (width > 0 && height > 0) {
            cell.width = width;
            cell.height = height;
        }
    };
    cell.Login("河南许继信息有限公司", "", "13100105699", "7060-0407-0026-1005");
    cell.LocalizeControl('&H804');

    //var prefix = 'http://wssb3.htjs.net';
    //url = 'http://wssb3.htjs.net' + url;
    var prefix = '';
    //使用调查问卷的时候，弹出调查问卷页面，页面上的cell报表一直不能打开，鲁思聪查找原因后，需要加上最后一个判断不等于“”  zzg 20160912
    if (external && typeof external.GetClientCNF != "undefined" && typeof external.GetClientCNF != "unknown" && external.GetClientCNF != "") {
        var urlFlag = external.GetClientCNF("hlwsb.cellmethod");
        if (urlFlag == 'http') {
            var moduleUrl = external.GetClientCNF("module.hosturl");
            if (moduleUrl != '') {
                if (moduleUrl.indexOf("12366") != -1) {
                    prefix = 'http://jtxx.12366.ha.cn';
                } else {
                    prefix = 'http://wssb3.htjs.net';
                }
            }
        } else if (urlFlag == 'file') {
            if (typeof external.get_fexists != "undefined") {
                url = external.get_fexists('html/hlwsbWeb/' + url);
                prefix = '';
            }
        } else if (urlFlag == 'localTest') {
            prefix = '';
        }
    }

    url = prefix + url;

    var ofReturn = cell.OpenFile(url, "");
    if (ofReturn <= 0) {
        switch (ofReturn) {
            case -1:
                alert("文件不存在");
                break;
            case -2:
                alert("文件操作错误");
                break;
            case -3:
                alert("文件格式错误");
                break;
            case -5:
                alert("不能打开高版本文件");
                break;
            case -6:
                alert("不能打开特定版本文件");
                break;
            case -99:
                alert("不能下载文件");
                break;
        }
    }
    //聚焦到左上角
    cell.MoveToCell(1, 1);
    //清除选择区域    
    cell.ClearSelection();
    //打印页面统一readonly
    if (url.indexOf("_print") != -1) {
        cell.WorkbookReadonly = true;
        // cell.calcManual = true;
    }
    cell.PrintSetDefaultPrinter = true;
    //设置成默认RGB(192,192,192);
    cell.RdOnlyCellColor = 0xc0c0c0;
    //cell.CalculateAll();
    //init();
    cell.AllowExtend = false;
    cell.AllowDragdrop = false;
    cell.EnableFormulaNearRangeAjust(true);

    cell.HideFormulaErrorInfo = true;
    cell.AllowPaste = true;
    cell.AllowCopy = true;
    cell.AllowCut = false;


    cell.ljsExclude = [];
    if (document.documentElement.clientHeight - 30 > 0 && document.documentElement.clientWidth > 0) {
        cell.height = document.documentElement.clientHeight - 30;
        cell.width = document.documentElement.clientWidth;
    } else {
        document.body.onload = function () {
            cell.height = document.documentElement.clientHeight - 30;
            cell.width = document.documentElement.clientWidth;
        };
    }
    //cell.InputFormulaInCell=true;
    /**
     * 私有存储
     * 内部使用
     */
        //全局的对象引用
    window.cell = cell;
    window._checkState = '';
    window._cellRows = [];
    window._nsrxxCol = {};

    function checkVersion() {
        if (!cell.GetVersionStr || cell.GetVersionStr().indexOf("5,3,10,0") == -1) {
            return false;
        }
        return true;
    }

    /**
     * 内部方法
     */
    function postionArr(arr) {
        var posArr = [];
        for (var i = 0; i < arr.length; i++) {
            var cellPos = {};
            cellPos = cell.GetCellVar_J(arr[i]);
            cellPos.name = arr[i];
            posArr.push(cellPos);
        }
        return posArr;
    }

    function postionArr2(arr) {
        var posArr = [];
        for (var i = 0; i < arr.length; i++) {
            var temp = {};
            var cellPosBys = cell.GetCellVar_J(arr[i].bys);
            var cellPosBnlj = cell.GetCellVar_J(arr[i].bnlj);
            cellPosBys.name = arr[i].bys;
            cellPosBnlj.name = arr[i].bnlj;
            temp.bys = cellPosBys;
            temp.bnlj = cellPosBnlj;
            posArr.push(temp);
        }
        return posArr;
    }

    /**
     * 对应vb方法 EnumVar4Js
     * @param i 索引
     * @returns  map
     * map.result True || False 返回是否执行成功
     * map.name  返回单元格的别名
     * map.type  返回单元格类型 0 浮点数类型 1 字符串类型 2 单元格类型 3 表格区域类型
     */

    cell.EnumVar_J = function (i) {
        var map = {};
        var returnStr = EnumVar4Js(i, this);
        var temp = returnStr.split(",");
        map.result = temp[0];
        map.name = temp[1];
        map.type = temp[2];
        return map;
    };

    /**
     *
     * 对应vb方法 GetCellVar4Js
     * @param name 单元格名称
     *
     * @returns map
     * map.result True || False 是否执行成功
     * map.col 列
     * map.row 行
     * map.sheet sheet页
     */
    cell.GetCellVar_J = function (name) {
        var map = {};
        var returnStr = GetCellVar4Js(name, this);
        var temp = returnStr.split(",");
        map.result = temp[0];
        map.col = Number(temp[1]);
        map.row = Number(temp[2]);
        map.sheet = temp[3];

        map.label = this.CellToLabelEx(map.sheet, map.col, map.row);

        return map;
    };

    /**
     *
     * 对应vb方法 GetDoubleVar4Js
     * @param name 单元格名称
     *
     * @returns map
     * map.result True || False 是否执行成功
     * map.value 获取单元格的值
     */
    cell.GetDoubleVar_J = function (name) {
        var map = {};
        var returnStr = GetDoubleVar4Js(name, this);
        var temp = returnStr.split(",");
        map.result = temp[0];
        map.value = temp[1];
        return map;
    };

    cell.GetStringVar_J = function (name) {
        var map = {};
        var returnStr = GetStringVar4Js(name, this);
        var temp = returnStr.split(",");
        map.result = temp[0];
        map.value = temp[1];
        return map;
    };

    /**
     * 对应vb   LabelToCell4Js 将单元格的label转换为坐标
     *
     */
    cell.LabelToCell_J = function (name) {
        var map = {};
        var returnStr = LabelToCell4Js(name, this);
        var temp = returnStr.split(",");
        map.result = temp[0];
        map.col = temp[1];
        map.row = temp[2];
        return map;
    };

    /**
     * 对应vb   LabelToCellEx4Js 将单元格的label转换为坐标
     *
     */
    cell.LabelToCellEx_J = function (name) {
        var map = {};
        var returnStr = LabelToCellEx4Js(name, this);
        var temp = returnStr.split(",");
        map.result = temp[0];
        map.col = temp[1];
        map.row = temp[2];
        map.sheet = temp[3];
        return map;
    };

    /**
     *设置单元格公式
     */
    cell.setFormulaByLabel = function (name, formula) {
        var pos = this.LabelToCell_J(name);
        return this.SetFormula(pos.col, pos.row, 0, formula);
    };

    /**
     * 设置单元格字符限制
     * name  单元格的label
     * limit 限制的长度
     */
    cell.setCellLimitTextByLabel = function (name, limit) {
        var pos = this.LabelToCell_J(name);
        cell.SetCellLimitText(pos.col, pos.row, 0, limit);
    };

    /**
     * 通过cell的label放值
     *
     */
    cell.setValByLabel = function (name, value) {
        var pos = this.LabelToCell_J(name);
        setData(pos.col, pos.row, 0, value);
    };

    /**
     * 通过label获取cell的值
     *
     */
    cell.getValByLabel = function (name) {
        var pos = this.LabelToCellEx_J(name);
        return getData(pos.col, pos.row, 0);
    };

    cell.setValByName = function (name, value) {
        var pos = this.GetCellVar_J(name);
        setData(pos.col, pos.row, 0, value);
    };

    cell.getValByName = function (name) {
        var pos = this.GetCellVar_J(name);
        return getData(pos.col, pos.row, 0);
    };

    /**
     * 通过cell的label改变单元格类型
     *
     *  0 缺省
     *    1 普通数值
     *    2 货币
     *    3 日期
     *    4 时间
     *    5 百分比
     *    6 科学计数
     *    7 文本
     *    8 货币大写
     */
    cell.setNumTypeByLabel = function (name, type) {
        var pos = this.LabelToCell_J(name);
        this.SetCellNumType(pos.col, pos.row, 0, type);
    };

    cell.getNumTypeByLabel = function (name) {
        var pos = this.LabelToCell_J(name);
        return this.GetCellNumType(pos.col, pos.row, 0);
    };
    /*
     通过cell的name设置单元格注释
     name 单元格
     value 注释
     */
    cell.setCellannotation = function (name, value) {
        var pos = this.LabelToCell_J(name);
        this.SetCellTip(pos.col, pos.row, 0, value);
    };

    cell.setCellInputByLabel = function (name, type) {
        var pos = this.LabelToCell_J(name);
        this.SetCellInput(pos.col, pos.row, 0, type);
    };

    /**
     *设置单元格单元格类型    0 缺省 1 普通数值 5 百分比 7 文本  @lcq
     */
    cell.SetCellType = function (name, type) {
        var pos = this.LabelToCell_J(name);
        this.SetCellNumType(pos.col, pos.row, 0, type);
    };

    /**
     *设置单元格单元格背景颜色      2014-05-18 @lcq
     */
    cell.SetCellColor = function (name, rgb) {
        var pos = this.LabelToCell_J(name);
        this.SetCellBackColor(pos.col, pos.row, 0, rgb);
    };
    /**
     *设置单元格对齐方式     2014-05-19
     */
    cell.SetAlign = function (name, type) {
        var pos = this.LabelToCell_J(name);
        this.SetCellAlign(pos.col, pos.row, 0, type);
    };
    /**
     *设置单元格字体颜色      2014-05-19
     */
    cell.SetCellColorFont = function (name, rgb) {
        var pos = this.LabelToCell_J(name);
        this.SetCellTextColor(pos.col, pos.row, 0, rgb);
    };

    /** 校验表达式返回的结果 @ 王要雷
     * labelList 数组 表达式中各个数字
     * expList  数组  表达式中各个运算符号
     * type 比较的类型 > ,<,>=,<=，==
     * labelObject 被比较的对象label
     */
    cell.checkExpress = function (labelList, expList, type, labelObject) {
        var i = 0;
        if (labelList) {
            i = labelList.length;
        }
        var j = 0;
        if (expList) {
            j = expList.length;
        }
        var temp = "";
        var result = 0;
        if (1 != i - j) {
            alert("输入表达式有误");
            return false;
        }
        for (var k = 0; k < i; k++) {
            if (k == i - 1) {
                temp = temp + this.getValByLabel(labelList[k]);
            }
            else {
                temp = temp + this.getValByLabel(labelList[k]) + expList[k];
            }
        }
        result = eval(temp);
        var curVal = this.getValByLabel(labelObject);
        temp = parseFloat(result).toFixed(2) + type + parseFloat(curVal).toFixed(2);
        if (eval(temp)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * 自动计算
     */
    cell.calcManual = function (obj) {
        var state = obj.checked;
        if (state == true) {
            DCellWeb1.CalcManaually = false;
            DCellWeb1.ProtectFormula = true;
        } else {
            DCellWeb1.CalcManaually = true;
            DCellWeb1.ProtectFormula = false;
        }

    };


    function excludeCom(exclude, label) {
        var f = false;
        if (exclude && exclude.length > 0) {
            if (exclude.toString().indexOf(label) != -1) {
                for (var k = 0; k < exclude.length; k++) {
                    if (label == exclude[k]) {
                        f = true;
                        return f;
                    }
                }
            }
        }
        return f;
    }

    /**
     * 初始化上年累计数
     * arr  array  数据库字段数组
     * data array
     * exclude array 去除的单元格
     */
    cell.initSNLJ = function (arr, data, exclude) {
        if (!data) {
            data = [];
        }
        var doubleVarMap = cell.GetDoubleVar_J("COUNT");
        var varArr = postionArr2(arr);
        if (exclude) {
            cell.ljsExclude = exclude;
        }
        Outer:
            for (var i = 1; i <= doubleVarMap.value; i++) {
                Inner:
                    for (var j = 0; j < varArr.length; j++) {
                        var row = data[i - 1];
                        row = row ? row : {};
                        var temp = varArr[j];
                        var type = this.GetCellNumType(temp.bnlj.col, Number(temp.bnlj.row) + i, temp.bnlj.sheet);
                        if (type == "1") {
                            var labelEx = this.CellToLabel(temp.bys.col, Number(temp.bys.row) + i);
                            var value = 0;
                            if (data && data[i - 1] && data[i - 1][temp.bnlj.name]) {
                                value = data[i - 1][temp.bnlj.name];
                            }
                            if (!row.HC) {
                                row.HC = i;
                            }
                            var rowNum = Number(row.HC) + temp.bnlj.row;
                            var formula = 'if(control=1,' + labelEx + "+(" + value + '),CurCell())';
                            if (excludeCom(exclude, this.CellToLabel(temp.bnlj.col, rowNum))) {
                                //alert(temp.bnlj.col)
                                continue Inner;
                            }
                            var numtype = this.getNumTypeByLabel(labelEx);
                            if (numtype != 1) {
                                formula = value;
                            }
                            var srcFormula = this.GetFormula(temp.bnlj.col, rowNum, temp.bnlj.sheet);

                            if (!srcFormula) {
                                cell.DefineDoubleVar("control", 0);
                                this.SetFormula(temp.bnlj.col, rowNum, temp.bnlj.sheet, formula);
                                this.SetCellNote(temp.bnlj.col, rowNum, temp.bnlj.sheet, formula);
                            }
                        }
                    }
            }
    };
    /**
     * 初始化上年金额
     */
    cell.initSnje = function (param) {
        var arr = param.cols;
        var data = param.data;
        var varArr = postionArr(arr);
        var doubleVarMap = cell.GetDoubleVar_J("COUNT");
        Outer:
            for (var i = 1; i <= doubleVarMap.value; i++) {
                Inner:
                    for (var j = 0; j < varArr.length; j++) {
                        var temp = varArr[j];
                        var type = this.GetCellNumType(temp.col, Number(temp.row) + i, temp.sheet);
                        if (type == "1") {
                            var value = 0;
                            if (data && data[i]) {
                                value = data[i][temp.name];
                            }
                            cell.SetCellNote(temp.col, Number(temp.row) + i, temp.sheet, value);
                        }
                    }
            }
    };

    /**
     * 修改上年金额
     */
    cell.editSnje = function (param) {
        var arr = param.cols;
        var state = param.state;
        var varArr = postionArr(arr);
        var doubleVarMap = cell.GetDoubleVar_J("COUNT");
        Outer:
            for (var i = 1; i <= doubleVarMap.value; i++) {
                Inner:
                    for (var j = 0; j < varArr.length; j++) {
                        var temp = varArr[j];
                        var type = this.GetCellNumType(temp.col, Number(temp.row) + i, temp.sheet);
                        var v = cell.GetCellNote(temp.col, Number(temp.row) + i, temp.sheet);
                        if (type == "1") {
                            if (state == true) {
                                cell.SetCellInput(temp.col, Number(temp.row) + i, temp.sheet, 2);
                            } else {
                                //需要手动赋值一下公式，重新初始化
                                if (v) {
                                    cell.SetCellDouble(temp.col, Number(temp.row) + i, temp.sheet, v);
                                }
                                cell.SetCellInput(temp.col, Number(temp.row) + i, temp.sheet, 5);
                            }
                        }
                    }
            }
    };

    /**
     * 修改上年累计用方法
     *
     *
     */
    cell.editLjs = function (arr, state) {
        var varArr = postionArr(arr);
        var doubleVarMap = cell.GetDoubleVar_J("COUNT");
        Outer:
            for (var i = 1; i <= doubleVarMap.value; i++) {
                Inner:
                    for (var j = 0; j < varArr.length; j++) {
                        var temp = varArr[j];
                        var type = this.GetCellNumType(temp.col, Number(temp.row) + i, temp.sheet);
                        var gs = cell.GetCellNote(temp.col, Number(temp.row) + i, temp.sheet);
                        var labelEx = this.CellToLabel(temp.col, Number(temp.row) + i);
                        //判断是否有不包含在累计的特殊标签，这种不允许修改
                        if (cell.ljsExclude && cell.ljsExclude.length) {
                            if (excludeCom(cell.ljsExclude, labelEx)) {
                                continue Inner;
                            }
                        }
                        if (type == "1") {
                            if (state == true) {
                                if (gs) {
                                    //cell.SetCellInput(temp.col, Number(temp.row) + i, temp.sheet, 2);
                                    cell.SetFormula(temp.col, Number(temp.row) + i, temp.sheet, '');
                                    //var arr = gs.split('+');
                                    //cell.SetCellDouble(temp.col, Number(temp.row) + i, temp.sheet, arr[1]);
                                }
                            } else {
                                //cell.SetCellInput(temp.col, Number(temp.row) + i, temp.sheet, 5);
                                //需要手动赋值一下公式，重新初始化
                                if (gs) {
                                    cell.DefineDoubleVar("control", 0);
                                    cell.SetFormula(temp.col, Number(temp.row) + i, temp.sheet, gs);
                                }
                            }
                        }
                    }
            }
        cell.DefineDoubleVar("control", 1);
        //cell.CalculateAll();
    };

    /**
     * count　　number　         总行数
     * datas    array      业务数据
     * cols    array      字段数组
     * pyl     number     偏移量
     */
    function fillData(param) {
        var count = param.count;
        var body = param.datas;
        var arr = param.cols;
        var pyl = param.pyl;
        var varArr = postionArr(arr);
        var hasHiddenRow = false;
        var startRow = 0;
        if (pyl > 0) {
            hasHiddenRow = true;
            startRow = varArr[0] && varArr[0].row ? Number(varArr[0].row) + 1 : 0;
            for (var i = 0; i < varArr.length; i++) {
                varArr[i].row = Number(varArr[i].row) + pyl;
            }
        }

        var mapBody = {};

        for (var i = 0; i < body.length; i++) {
            var tBody = body[i];
            var hc = 0;
            if ((typeof tBody == 'object' && !tBody.HC) || typeof tBody != 'object' || pyl > 0) {
                hc = i + 1;
            } else {
                hc = tBody.HC;
            }
            mapBody[hc] = tBody;
        }
        for (var i = 1; i <= count; i++) {
            for (var j = 0; j < varArr.length; j++) {
                var temp = varArr[j];
                var row = mapBody[i];
                //var rowNum = Number(temp.row) + i;
                var hc = 0;
                if ((typeof row == 'object' && !row.HC) || typeof row != 'object' || pyl > 0) {
                    hc = i
                } else {
                    hc = row.HC;
                }
                var rowNum = Number(hc) + Number(temp.row);
                var value = 0.0;
                if (row && row[temp.name] != undefined && row[temp.name] != null) {
                    value = row[temp.name];
                }
                //如果存在隐藏行
                if (hasHiddenRow && startRow != 0) {
                    //判断隐藏行的此列是否是特殊字符'——'
                    if (DCellWeb1.GetCellString(temp.col, rowNum, temp.sheet) == '——') {
                        DCellWeb1.SetCellString(temp.col, rowNum, temp.sheet, '——');
                    } else {
                        setData(temp.col, rowNum, temp.sheet, value);
                    }
                } else {

                    setData(temp.col, rowNum, temp.sheet, value);
                }
            }
        }
    }

    cell.setValue = function (col, row, sheet, value) {
        setData(col, row, sheet, value);
    };
    /**
     * 通过cell的label改变单元格类型
     *
     *  0 缺省
     *    1 普通数值
     *    2 货币
     *    3 日期
     *    4 时间
     *    5 百分比
     *    6 科学计数
     *    7 文本
     *    8 货币大写
     */
    /**
     *
     * 设置单元格的值
     *
     */
    function setData(col, row, sheet, value) {

        var cellType = cell.GetCellType(col, row, sheet);
        var type = cell.GetCellNumType(col, row, sheet);
        try {
            if (cellType == "0") {
                if (type == "1") {
                    cell.SetCellDouble(col, row, sheet, value);
                }
                else if (type == "5") {
                    //百分比类型
                    cell.SetCellDouble(col, row, sheet, value);
                }
                else if (type == "7") {

                    if (value != undefined && value != null && value.indexOf('undefined') == -1) {
                        cell.SetCellString(col, row, sheet, value);
                    } else {
                        cell.SetCellString(col, row, sheet, '');
                    }

                } else if (type == "3") {
                    if (value && value != 0) {
                        var result = cell.SetCellDateTime(col, row, sheet, dataTimeStr(value));

                        if (result == false) {
                            alert("输入日期格式失败，请检查日期格式");
                        }
                    }
                }
            } else if (cellType == "3") {
                cell.SetDroplistCellKey(col, row, sheet, value);
            } else if (cellType == "2" || cellType == "4") {
                cell.SetCellDouble(col, row, sheet, value);
            }
            else if (cellType == "5") {
                //滚卷按钮
                cell.SetCellDouble(col, row, sheet, value);
            }
        } catch (e) {
            // alert('请检查col:' + col + '  row:' + row);
        }

    }

    /**
     *
     */
    function dataTimeStr(value) {
        if (value) {
            if (value.indexOf("-") == -1) {
                value = value + "-01-01";
            }
        }
        return value;
    }

    /**
     * 填充零值
     */
    function fillZERO(count, arr, pyl) {
        var varArr = postionArr(arr);

        if (pyl > 0) {
            for (var i = 0; i < varArr.length; i++) {
                varArr[i].row = Number(varArr[i].row) + pyl;
            }
        }

        for (var i = 1; i <= count; i++) {
            for (var j = 0; j < varArr.length; j++) {
                var temp = varArr[j];
                var rowNum = Number(temp.row) + i;

                var type = cell.GetCellNumType(temp.col, rowNum, temp.sheet);
                if (type == 1) {
                    setData(temp.col, rowNum, temp.sheet, 0);
                } else if (type == 7) {
                    setData(temp.col, rowNum, temp.sheet, '');
                }
            }
        }
    }

    /**
     * cell填充数据方法
     *
     * cols:     array  数据库字段
     * data：    object  业务数据
     * nsrxxCols array  纳税人的字段名称
     * headCols  array  头部信息的字段
     *
     * iszdjskxg   boolean true 是否自动计算并且可修改;
     */
    cell.initDataToCell = function (param) {
        var data = param.data;
        var arr = param.cols;
        var nsrxxCols = param.nsrxxCols;
        var body = data.BODY;
        var head = data.HEAD;
        var headCols = param.headCols;
        var iszdjskxg = param.iszdjskxg;
        if (head) {
            window._HEAD = head;
        }
        var doubleVarMap = cell.GetDoubleVar_J("COUNT");

        if (!body || body.length == 0) {
            //没有数值后填充零值
            fillZERO(doubleVarMap.value, arr, 0);
        } else {
            fillData({count: doubleVarMap.value, datas: body, cols: arr, pyl: 0});
        }
        if (nsrxxCols && head) {
            fillNsrxx(nsrxxCols, head);
        }

        if (headCols && head) {
            fillDataSL(headCols, head);
        }
        if (iszdjskxg != true && !(head.SBBZT == '3' || head.SBBZT == '2')) {

            checkCalculateState(head);
        }
    };

    cell.getValue = function (col, row, sheet) {
        return getData(col, row, sheet);
    };

    /**
     * 从cell中获取数值
     */
    function getData(col, row, sheet) {
        var value = 0;
        var type = cell.GetCellNumType(col, row, sheet);
        var cellType = cell.GetCellType(col, row, sheet);
        var tem = cell.GetCellString(col, row, sheet);
        if (cellType == "0") {
            if (type == "1") {

                value = cell.GetCellDouble2(col, row, sheet);

                var digital = cell.GetCellDigital(col, row, sheet);
                value = Number(value.toFixed(digital));
                if (value > 1000000000000 || value < -1000000000000) {
                    alert('值' + value + '过大');
                    cell.MoveToCell(col, row);
                    throw new Error('数值过大');
                }
            } else if (type == "7" || type == "3") {
                value = cell.GetCellString2(col, row, sheet);

            }
            else if (type == "5") {
                //百分比类型
                value = cell.GetCellDouble2(col, row, sheet);
            }
            else {
                    value = "0";
            }
            //下拉列表
        } else if (cellType == "3") {
            value = cell.GetDroplistCellKey(col, row, sheet);
            //过滤空串
            if (value == " ") {
                value = "";
            }
            //单选按钮
        } else if (cellType == "2" || cellType == "4") {
            value = cell.GetCellDouble(col, row, sheet);
        } else if (cellType == "5") {
            //滚卷按钮
            value = cell.GetCellDouble(col, row, sheet);
        }
        return value;
    }
    /**     2017.01.01 lijun 用户处理单元格---，保存成空
         * 从cell中获取数值
         */
        function getData_null(col, row, sheet, isZero) {
            var value = 0;
            var type = cell.GetCellNumType(col, row, sheet);
            var cellType = cell.GetCellType(col, row, sheet);
            var tem = cell.GetCellString(col, row, sheet);
            if (cellType == "0") {
                if (type == "1") {

                    value = cell.GetCellDouble2(col, row, sheet);

                    var digital = cell.GetCellDigital(col, row, sheet);
                    value = Number(value.toFixed(digital));
                    if (value > 1000000000000 || value < -1000000000000) {
                        alert('值' + value + '过大');
                        cell.MoveToCell(col, row);
                        throw new Error('数值过大');
                    }
                } else if (type == "7" || type == "3") {
                    value = cell.GetCellString2(col, row, sheet);

                }
                else if (type == "5") {
                    //百分比类型
                    value = cell.GetCellDouble2(col, row, sheet);
                }
                else {
                    if (tem == '——' && isZero == 'N') {
                        value = "";
                    }else{
                        value = "0";
                    }
                }
                //下拉列表
            } else if (cellType == "3") {
                value = cell.GetDroplistCellKey(col, row, sheet);
                //过滤空串
                if (value == " ") {
                    value = "";
                }
                //单选按钮
            } else if (cellType == "2" || cellType == "4") {
                value = cell.GetCellDouble(col, row, sheet);
            } else if (cellType == "5") {
                //滚卷按钮
                value = cell.GetCellDouble(col, row, sheet);
            }
            return value;
        }

    /**
     * arr 字段数组
     * count 多少行
     * pyl 偏移量
     * doc 对象引用传递
     */
    function buildJSON(arr, count, pyl, typeCol, type) {
        var data = [];
        var varArr = postionArr(arr);
        if (pyl > 0) {
            for (var i = 0; i < varArr.length; i++) {
                varArr[i].row = Number(varArr[i].row) + pyl;
            }
        }
        for (var i = 1; i <= count; i++) {
            var row = {};
            row.HC = i;
            if (typeCol && type) {
                row[typeCol] = type;
            }
            for (var j = 0; j < varArr.length; j++) {
                var temp = varArr[j];
                var rowNum = Number(temp.row) + i;

                if (cell.isCellEditing(temp.col, rowNum)) {
                    alert("请结束编辑状态");
                    throw new Error("编辑状态未结束");
                }

                row[temp.name] = getData(temp.col, rowNum, temp.sheet);
            }
            data.push(row);
        }
        return data;
    }
    /**        2017.01.01 lijun 用户处理单元格---，保存成空
        * arr 字段数组
        * count 多少行
        * pyl 偏移量
        * doc 对象引用传递
        */
       function buildJSON_null(arr, count, pyl, typeCol, type, isZero) {
           var data = [];
           var varArr = postionArr(arr);
           if (pyl > 0) {
               for (var i = 0; i < varArr.length; i++) {
                   varArr[i].row = Number(varArr[i].row) + pyl;
               }
           }
           for (var i = 1; i <= count; i++) {
               var row = {};
               row.HC = i;
               if (typeCol && type) {
                   row[typeCol] = type;
               }
               for (var j = 0; j < varArr.length; j++) {
                   var temp = varArr[j];
                   var rowNum = Number(temp.row) + i;

                   if (cell.isCellEditing(temp.col, rowNum)) {
                       alert("请结束编辑状态");
                       throw new Error("编辑状态未结束");
                   }

                   row[temp.name] = getData_null(temp.col, rowNum, temp.sheet, isZero);
               }
               data.push(row);
           }
           return data;
       }

    /**
     * arr  数组，数据库字段
     * doc  object，引用
     */
    function buildJSONSL(arr, doc) {
        var varArr = postionArr(arr);
        var row = {};
        for (var j = 0; j < varArr.length; j++) {
            var temp = varArr[j];
            if (cell.isCellEditing(temp.col, temp.row)) {
                alert("请结束编辑状态");
                throw new Error("编辑状态未结束");
            }
            row[temp.name] = getData(temp.col, temp.row, temp.sheet);
        }
        doc.BODY.push(row);
        return doc;
    }

    /**
     * 简单存储的通用方法，返回json格式。
     *
     * cols:数据库字段
     * headCols : 保存到主表的信息
     * returnType
     *
     */
    cell.submitJsonjs = function (param) {
        var arr = param.cols;
        var isZero = param.isZero;
        //cell.SaveEdit();
        cell.DefineDoubleVar("control", 0);
        var calcInput = document.getElementById("calcInput");
        var doc = {
            HEAD: {},
            BODY: []
        };
        doc.HEAD = window._HEAD;
        if (!calcInput || calcInput.checked) {
            //此处不自动计算，为了确保修改的公式单元格提交时不自动计算、
            //对于处于编辑状态的单元格不让提交
            //cell.CalculateAll();
            doc.HEAD.ZDJSBZ = 0;
        } else {
            doc.HEAD.ZDJSBZ = 1;
        }
        var doubleVarMap = cell.GetDoubleVar_J("COUNT");
        if(isZero=="N") {   //2017.01.01 lijun
            doc.BODY = buildJSON_null(arr, doubleVarMap.value, 0, null, null, isZero);
        }else{
            doc.BODY = buildJSON(arr, doubleVarMap.value, 0, null, null);
        }

        var ljs = document.getElementById("ljs");
        if (ljs && ljs.checked) {
            doc.HEAD.XGBNLJBZ = 1;
        } else {
            doc.HEAD.XGBNLJBZ = 0;
        }

        var headCols = param.headCols;
        if (headCols) {
            doc = buildHeadJSON(headCols, doc);
        }

        var returnType = param.returnType;
        if (returnType && returnType == "object") {
            return doc;
        }

        return JSON.stringify(doc);
    };
    /**
     * 单行表格存储使用方法
     */
    cell.submitJsonjsSL = function (param) {
        var doc = {
            HEAD: {},
            BODY: []
        };
        doc.HEAD = window._HEAD;
        doc = buildJSONSL(param.cols, doc);
        return JSON.stringify(doc);
    };

    /**
     * cell中动态行json转换
     *
     * map里面的key如下定义：
     * param.cols  数组     数据库中的字段名称
     *
     * cellRows   数组   cell的开始和结束点
     *        start
     *        end
     *
     * headCols
     * returnType
     */
    cell.cellRowToJson = function (param) {
        var doc = {
            HEAD: {},
            BODY: []
        };
        //cell.SaveEdit();        
        cell.DefineDoubleVar("control", 0);
        var calcInput = document.getElementById("calcInput");
        if (!calcInput || calcInput.checked) {
            //cell.CalculateAll();
        }
        doc.HEAD = window._HEAD;
        var crs = param.cellRows;
        var srcRow = this.GetCellVar_J(param.cols[0]);

        for (var i = 0; i < crs.length; i++) {
            var startPos = this.GetCellVar_J(crs[i].start);
            var endPos = this.GetCellVar_J(crs[i].end);
            var totalRow = endPos.row - startPos.row - 3;
            //计算偏移量，字段的行和开始行之间的差
            var tz = startPos.row - srcRow.row;
            doc.BODY = doc.BODY.concat(buildJSON(param.cols, totalRow, 2 + tz, crs[i].typeCol, crs[i].type));
        }

        var headCols = param.headCols;
        if (headCols) {
            doc = buildHeadJSON(headCols, doc);
        }
        var returnType = param.returnType;
        if (returnType && returnType == "object") {
            return doc;
        }
        return JSON.stringify(doc);
    };

    function buildHeadJSON(cols, doc) {
        var colsArr = postionArr(cols);
        for (var i = 0; i < colsArr.length; i++) {
            var temp = colsArr[i];
            doc.HEAD[temp.name] = getData(temp.col, temp.row, temp.sheet);
        }
        return doc;
    }

    /**
     * 带有checkbox类型的表的插入行的方法，需要在制作表格时需要定义核选框的名称
     * 同时合计也需要以xx_HJ命名
     */
    cell.insertRow_J = function () {
        if (!window._checkState) {
            alert('请选择插入行');
            return;
        }

        var temp = this.GetCellVar_J(window._checkState + '_HJ');
        this.InsertRow(temp.row, 1, temp.sheet);
        //this.SetRowUnHidden(Number(temp.row) - 1,Number(temp.row) - 1);

        var returnArr = this.getMergeRowNum(temp.row - 1, temp.sheet);
        this.mergeRow(returnArr, temp.row);
    };
    /**
     * 获取合并单元格的序列对象
     */
    cell.getMergeRowNum = function (rowNum, sheet) {
        var mergeArr = [];
        var totalColNum = cell.GetCols(sheet);
        var i = 1;
        while (i <= totalColNum) {
            var temp = {};
            var startColNum = cell.GetMergeRangeJ(i, rowNum, sheet, 0);
            var endColNum = cell.GetMergeRangeJ(i, rowNum, sheet, 2);
            if (startColNum != 0 && endColNum != 0) {
                temp.colNum = i;
                temp.startColNum = startColNum;
                temp.endColNum = endColNum;
                temp.val = getData(i, rowNum, sheet);
                mergeArr.push(temp);
            }
            i++;
        }
        return mergeArr;
    };
    /**
     * 根据序列合并单元格
     */
    cell.mergeRow = function (arr, row) {

        for (var i = 0; i < arr.length; i++) {
            var temp = arr[i];
            cell.MergeCells(temp.startColNum, row, temp.endColNum, row);
        }
    };

    /**
     * 根据获取的公式设置公式
     * 同事获取模板行的值
     */
    cell.setFormulaRow = function (arr, row) {
        for (var i = 0; i < arr.length; i++) {
            var temp = arr[i];
            if (temp.formula) {
                //用正则表达式替换从新的
                var r = temp.row + '(?!\!)';
                this.SetFormula(temp.col, row, 0, temp.formula.replace(new RegExp(r, 'g'), row));
            }
            if (temp.tip) {
                this.SetCellTip(temp.col, row, 0, temp.tip);
            }
            setData(temp.col, row, 0, temp.val);
        }
    };

    cell.setDynFormula = function (pos, formula) {

        formula = formula.replace(new RegExp('#', 'g'), pos.row);
        this.SetFormula(pos.col, pos.row, 0, formula);
    };
    /**
     * 获取行的公式
     */
    cell.getFormulaRow = function (rowNum, sheet) {
        var formulas = [];
        var totalColNum = cell.GetCols(sheet);
        for (var i = 1; i <= totalColNum; i++) {
            var temp = {};
            temp.val = getData(i, rowNum, sheet);
            temp.tip = this.GetCellTip(i, rowNum, sheet);
            temp.col = i;
            temp.row = rowNum;
            if (this.IsFormulaCell(i, rowNum, sheet) > 0) {
                var f = this.GetFormula(i, rowNum, sheet);
                temp.formula = f;
            }
            formulas.push(temp);
        }
        return formulas;
    };
    /**
     * 获列的公式
     */
    cell.getFormulaCol = function (colNum, sheet) {
        var formulas = [];
        var totalRowNum = cell.GetRows(sheet);
        for (var i = 1; i <= totalRowNum; i++) {
            var temp = {};
            if (this.IsFormulaCell(colNum, i, sheet) > 0) {
                var f = this.GetFormula(colNum, i, sheet);
                temp.col = colNum;
                temp.formula = f;
                temp.row = i;
                formulas.push(temp);
            }
        }
        return formulas;
    };

    /**
     * 根据获取的公式设置公式
     */
    cell.setFormulaCol = function (arr, col) {
        var zmb = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        for (var i = 0; i < arr.length; i++) {
            var temp = arr[i];
            //用正则表达式替换从新的
            var r = zmb[temp.col];
            this.SetFormula(col, temp.row, 0, temp.formula.replace(new RegExp(r, 'g'), zmb[col]));
        }
    };

    /**
     * insertBefore 在哪行上面插入
     */
    cell.insertCellRow = function (param) {
        var before = param.insertBefore;
        var temp = this.GetCellVar_J(before);
        this.InsertRow(temp.row, 1, temp.sheet);

        var returnArr = this.getMergeRowNum(temp.row - 1, temp.sheet);
        this.mergeRow(returnArr, temp.row);
        //this.SetRowUnHidden(Number(temp.row) - 1,Number(temp.row) - 1);
    };


    /**
     *
     * col对应的cell中的列的名称
     * action取代码表的地址
     * value  string   代码值
     * text   string   显示值
     * rowType  string  行类型，dynamicRow(默认), staticRow
     * count  number    dynamicRow时向下循环多少行。默认值为2;
     *
     * selectStr string  填充select的字符串,用于手输入select字符串
     * selectStr 出现时只用输入，col（必须）、rowType（可选）、count（可选，默认为2）属性
     *
     * callback回调函数
     */
    cell.initSelectCell = function (param) {
        var col = param.col;
        var value = param.value;
        var text = param.text;
        var action = param.action;
        var rowType = param.rowType;
        var count = 2;
        var selectStr = param.selectStr;
        var callbackArray = [];

        var dm_cache = "_cache_" + value;
        if (param.count) {
            count = param.count;
        }
        if (selectStr && selectStr.trim() != "") {
            selectStr = ' \t \r\n' + selectStr;
            _initSelect(col, selectStr, rowType, count);
            return;
        }
        if (!parent[dm_cache]) {
            var dmSelectCallBack = function (jsonObj, xhrArgs) {
                if (jsonObj && jsonObj.code != '0') {
                    alert('查询下拉菜单失败');
                    return;
                }
                var tt = selectText(jsonObj, text, value);
                _initSelect(col, tt, rowType, count);

                //如果带有参数就不缓存
                if (action.indexOf("?") == -1) {
                    parent[dm_cache] = jsonObj;
                }
            };
            callbackArray.push(dmSelectCallBack);

            if (param.callback) {
                callbackArray.push(param.callback);
            }
            if (action && action.trim() != "") {
                baseTools.xhrAjax({
                    url: action,
                    async: false,
                    params: {},
                    callback: callbackArray
                });
            }
        } else {
            var tt = selectText(parent[dm_cache], text, value);

            _initSelect(col, tt, rowType, count);
        }
    };

    function selectText(jsonObj, text, value) {
        var body = jsonObj.data.BODY;
        var str = " \t \r\n";
        for (var i = 0; i < body.length; i++) {
            str += body[i][text] + "\t" + body[i][value] + "\r\n";
        }
        return str;
    }

    function _initSelect(col, str, rowType, count) {
        var pos = cell.GetCellVar_J(col);

        if (rowType && rowType == "staticRow") {
            cell.SetDroplistCell(pos.col, Number(pos.row), pos.sheet, str, 1);
        } else {
            for (var i = 1; i <= count; i++) {

                cell.SetDroplistCell(pos.col, Number(pos.row) + i, pos.sheet, str, 1);
            }

        }
    }

    function rowFunction(data, cols, end, start) {
        var srcRow = cell.GetCellVar_J(cols[0]);
        var tPos = cell.GetCellVar_J(end);
        var startPos = cell.GetCellVar_J(start);
        var totleCount = tPos.row - startPos.row - 3;
        //从下面数3行开始删除,两行隐藏
        cell.DeleteRow(Number(startPos.row) + 3, totleCount, startPos.sheet);
        tPos = cell.GetCellVar_J(end);
        cell.InsertRow2(tPos.row, data.length, tPos.sheet, 2);
        var formulaArr = cell.getFormulaRow(tPos.row - 1, tPos.sheet);
        //加入合并单元格
        for (var k = 0; k < data.length; k++) {
            //this.mergeRow(returnArr, k + Number(tPos.row));
            cell.setFormulaRow(formulaArr, Number(tPos.row) + k);
        }
        var tz = startPos.row - srcRow.row;
        fillData({count: data.length, datas: data, cols: cols, pyl: 2 + tz});

    }

    /**
     * cell中动态行json转换
     *
     * map里面的key如下定义：
     * cols       数组      数据库中的字段名称
     * cellRows   数组      cell的开始和结束点
     * data       object   业务数据
     *
     * headCols   array    头部字段
     * nsrxxCols  array    纳税人基本信息的字段
     */

    /**
     * addButton array 保存添加按钮的配置信息
     *     name          string 自定义名称是什么
     *
     * delButton array
     *     name            string 自定义名称是什么
     *     checkboxStart   string checkbox在哪行开始
     *     checkboxEnd     string checkbox在哪行结束
     *     hc              string 行次是哪一行
     *     param           object 参数
     */
    cell.initRowToCell = function (param) {
        var head = param.data.HEAD;
        var manual = param.manual;
        window._HEAD = head;
        var cr = param.cellRows;
        var iszdjskxg = param.iszdjskxg;
        var body = param.data.BODY ? param.data.BODY : [];

        var headCols = param.headCols;
        var headData = param.data.HEAD;
        var nsrxxCols = param.nsrxxCols;
        if (manual == true) {
            this.CalcManaually = true;
        }
        for (var i = 0; i < cr.length; i++) {
            var t = cr[i];
            window._cellRows.push(t);
            var tPos = this.GetCellVar_J(t.end);
            var startPos = this.GetCellVar_J(t.start);
            if (tPos.result == "False") {
                throw "名称定义    " + t.end + " 找不到，请检查cell";
            }
            if (startPos.result == "False") {
                throw "名称定义    " + t.start + " 找不到，请检查cell";
            }
            if (t.typeCol && t.type) {
                var typeRows = [];
                for (var j = 0; j < body.length; j++) {
                    var tempRow = body[j];
                    if (tempRow[t.typeCol] == t.type) {
                        typeRows.push(tempRow);
                    }
                }

                rowFunction(typeRows, param.cols, t.end, t.start);
                //合计栏可以隐藏
                this.SetRowUnHidden(Number(startPos.row) + 3, Number(startPos.row) + 2 + typeRows.length);

            } else {
                rowFunction(body, param.cols, t.end, t.start);
                //合计栏可以隐藏
                this.SetRowUnHidden(Number(startPos.row) + 3, Number(startPos.row) + 2 + body.length);
            }

            //this.SetRowUnHidden(Number(startPos.row) + 3,Number(startPos.row) + 2 + body.length);
            var dynFormula = t.dynFormula;
            var f = '';
            var col = '';
            var pp = {};

            if (dynFormula) {
                f = dynFormula.formula;
                col = dynFormula.col;
                pp = this.GetCellVar_J(col);
                var dr = Number(pp.row) + 3;
                for (var k = 0; k < body.length; k++) {
                    pp.row = dr + k;
                    this.setDynFormula(pp, f);
                }
            }

            //如果有xl属性初始化xl
            if (t.xl) {
                cell.initXL(t);
            }
        }
        if (headCols && headData) {
            fillDataSL(headCols, headData);
        }
        if (nsrxxCols) {
            fillNsrxx(nsrxxCols, headData);
        }
        if (manual == true) {
            this.CalcManaually = false;
        }
        if (iszdjskxg != true && !(head.SBBZT == '3' || head.SBBZT == '2')) {
            checkCalculateState(head);
        }
    };

    function checkCalculateState(head) {
        if (!head) {
            return;
        }
        if ((head.ZDJSBZ == undefined || head.ZDJSBZ == 0 ) && (head.XGBNLJBZ == undefined || head.XGBNLJBZ == 0)) {
            cell.DefineDoubleVar("control", 1);
            cell.CalculateAll();
        } else if (head.XGBNLJBZ == 1 && head.ZDJSBZ == 0) {
            cell.DefineDoubleVar("control", 0);
            cell.CalculateAll();
        }
        if (head.ZDJSBZ == undefined || head.ZDJSBZ == 0) {
            document.getElementById("calcInput").checked = true;
        } else {
            document.getElementById("calcInput").checked = false;
        }
        if (document.getElementById("ljs")) {
            if (head.XGBNLJBZ == undefined || head.XGBNLJBZ == 0) {
                document.getElementById("ljs").checked = false;
            } else {
                document.getElementById("ljs").checked = true;
            }
        }

        aoutoCalc(document.getElementById("calcInput"));
    }

    /**
     * 填充纳税人信息
     * nsrxxCols array   纳税人基本信息的字段数组
     * headData  object  head信息
     */
    function fillNsrxx(nsrxxCols, headData) {

        var colsArr = postionArr(nsrxxCols);
        for (var i = 0; i < colsArr.length; i++) {
            var temp = colsArr[i];
            var str = getData(temp.col, temp.row, temp.sheet);
            //过滤空白
            str = str.replace(/^\s*/, "").replace(/\s*$/, "");
            var value = '';
            //只初始化一次
            var nsrxxKey = '';
            //过滤掉为空的情况
            if (window._nsrxxCol[temp.name] == undefined) {
                window._nsrxxCol[temp.name] = str;
                nsrxxKey = str;
            } else {
                nsrxxKey = window._nsrxxCol[temp.name];
            }
            if (temp.name == 'SSSQ') {
                var sssq_q = headData['SSSQ_Q'];
                var sssq_z = headData['SSSQ_Z'];

                sssq_q = sssq_q.replace('-', '年');
                sssq_q = sssq_q.replace('-', '月');
                sssq_q = sssq_q + '日';

                sssq_z = sssq_z.replace('-', '年');
                sssq_z = sssq_z.replace('-', '月');
                sssq_z = sssq_z + '日';
                var t = sssq_q + ' 至 ' + sssq_z;

                value = nsrxxKey + t;
                setData(temp.col, temp.row, temp.sheet, value);
            } else if (temp.name == 'TBRQ') {
                var tbrq = headData['TBRQ'];
                if (tbrq) {
                    tbrq = tbrq.replace('-', '年');
                    tbrq = tbrq.replace('-', '月');
                    tbrq = tbrq + '日';
                    tbrq = nsrxxKey + tbrq;
                    setData(temp.col, temp.row, temp.sheet, tbrq);
                }
            } else {
                if (hlwsbTools.getNsrxx(temp.name)) {
                    value = nsrxxKey + hlwsbTools.getNsrxx(temp.name);
                    setData(temp.col, temp.row, temp.sheet, value);
                } else if (headData[temp.name]) {
                    value = nsrxxKey + headData[temp.name];
                    setData(temp.col, temp.row, temp.sheet, value);
                } else {
                    value = nsrxxKey;
                    setData(temp.col, temp.row, temp.sheet, value);
                }
            }
        }
    }

    /**
     * param.cols   数组   数据库字段
     * param.data   object  填充的数据
     *
     */
    cell.initDataToCellSL = function (param) {
        window._HEAD = param.data.HEAD;
        var cols = param.cols;
        var body = param.data.BODY;
        var nsrxxCols = param.nsrxxCols;
        var headData = param.data.HEAD;
        if (nsrxxCols) {
            fillNsrxx(nsrxxCols, headData);
        }
        if (body.length == 0) {
            //没有数值后填充零值
            fillZEROSL(cols);
            return;
        }
        var data = param.data.BODY[0];

        fillDataSL(cols, data);

    };
    /*
     * 单行填充
     */
    function fillDataSL(cols, data) {
        var colsArr = postionArr(cols);
        for (var i = 0; i < colsArr.length; i++) {
            var temp = colsArr[i];
            setData(temp.col, temp.row, temp.sheet, data[temp.name]);
        }
    }

    /**
     * 填充零值
     */
    function fillZEROSL(arr) {
        var varArr = postionArr(arr);
        for (var j = 0; j < varArr.length; j++) {
            var temp = varArr[j];
            setData(temp.col, temp.row, temp.sheet, 0);
        }
    }

    /**
     * 说明：动态列的初始化方法，将数据填充到cell中
     *
     * map里面的key如下定义：
     * cols       数组      数据库中的字段名称
     * cellCols   数组      cell的开始和结束点
     * data       object   业务数据
     */
    cell.initCols = function (param) {
        window._HEAD = param.data.HEAD;

        var cc = param.cellCols;
        var body = param.data.BODY;

        for (var i = 0; i < cc.length; i++) {
            var t = cc[i];
            var tPos = this.GetCellVar_J(t.end);
            var startPos = this.GetCellVar_J(t.start);
            var totalCount = tPos.col - startPos.col - 2;

            this.DeleteCol(Number(startPos.col) + 2, totalCount, startPos.sheet);

            this.InsertCol(startPos.col + 2, body.length, tPos.sheet);

            var formulaArr = this.getFormulaCol(startPos.col + 1, startPos.sheet);
            //加入合并单元格
            for (var k = 0; k < body.length; k++) {
                this.setFormulaCol(formulaArr, startPos.col + k + 2);
            }
            //重新获取
            tPos = this.GetCellVar_J(t.end);
            startPos = this.GetCellVar_J(t.start);

            this.SetColUnHidden(Number(startPos.col) + 2, tPos.col - 1);
        }
        //使用unhidden后cell直接显示水平滚动条不出现，cell的bug，需要重新开关
        this.ShowVScroll(0, 0);
        this.ShowVScroll(1, 0);
        fillColData(body, param.cols, 1);
        var headData = param.data.HEAD;
        var nsrxxCols = param.nsrxxCols;
        if (nsrxxCols) {
            fillNsrxx(nsrxxCols, headData);
        }
    };

    /**
     * data  array   业务数组
     * cols  array   数据库字段
     * pyl   number  偏移量
     *
     */
    function fillColData(data, cols, pyl) {

        var colArr = postionArr(cols);
        if (pyl > 0) {
            for (var i = 0; i < colArr.length; i++) {
                colArr[i].col = Number(colArr[i].col) + pyl;
            }
        }
        for (var i = 1; i <= data.length; i++) {
            for (var j = 0; j < colArr.length; j++) {
                var temp = colArr[j];
                var row = data[i - 1];
                var colNum = Number(temp.col) + i;
                var value = 0;
                if (row[temp.name]) {
                    value = row[temp.name];
                }
                setData(colNum, temp.row, temp.sheet, value);
            }
        }
    }

    /**
     *
     * 说明：本方法是动态列提交方法
     *
     * param.cols  数组     数据库中的字段名称
     * cellCols   数组   cell的开始和结束点
     *
     */
    cell.cellColToJson = function (param) {
        var doc = {
            HEAD: {},
            BODY: []
        };
        doc.HEAD = window._HEAD;
        var cc = param.cellCols;

        for (var i = 0; i < cc.length; i++) {
            var startPos = this.GetCellVar_J(cc[i].start);
            var endPos = this.GetCellVar_J(cc[i].end);
            var totalRow = endPos.col - startPos.col - 2;

            doc = buildCOLJSON(param.cols, totalRow, 1, doc);
        }

        return JSON.stringify(doc);
    };


    /**
     * arr 字段数组
     * count 多少行
     * pyl 偏移量
     * doc 对象引用传递
     */
    function buildCOLJSON(arr, count, pyl, doc) {
        var varArr = postionArr(arr);
        if (pyl > 0) {
            for (var i = 0; i < varArr.length; i++) {
                varArr[i].col = Number(varArr[i].col) + pyl;
            }
        }
        for (var i = 1; i <= count; i++) {
            var row = {};
            row.HC = i;
            for (var j = 0; j < varArr.length; j++) {
                var temp = varArr[j];
                var colNum = Number(temp.col) + i;
                row[temp.name] = getData(colNum, temp.row, temp.sheet);
            }
            doc.BODY.push(row);
        }
        return doc;
    }


    cell.deleteRows = function (arr, delObj) {
        var delHc = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].hc != 0) {
                delHc.push(arr[i].hc);
            }
        }
        if (delHc.length > 0) {
            delObj.delButton.params.HC = delHc.toString();
            var deleteRowCallBack = function (jsonObj, args) {
                if (jsonObj.code == 2) {
                    alert("删除成功");
                    cell._del(arr);
                    cell.initXL(delObj);
                } else {
                    alert(jsonObj.msg);
                }
            };
            //判断如果有类型属性，加入类型参数
            if (delObj.type) {
                delObj.delButton.params.TYPE = delObj.type;
            }
            baseTools.xhrAjax({
                url: delObj.delButton.url,
                async: false,
                params: delObj.delButton.params,
                callback: [deleteRowCallBack]
            });
        } else {
            this._del(arr);
            cell.initXL(delObj);
        }

    };

    cell._del = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            var temp = this.GetCellVar_J(arr[i].id);
            DCellWeb1.DeleteRow(temp.row, 1, temp.sheet);
        }
        DCellWeb1.CalculateAll();
    };
//初始化序列数
    cell.initXL = function (delObj) {
        var czCell = DCellWeb1.GetCellVar_J(delObj.start);
        var czEnd = DCellWeb1.GetCellVar_J(delObj.end);
        var xl = DCellWeb1.GetCellVar_J(delObj.xl);
        //删除后还剩下几行;
        var totle = czEnd.row - czCell.row - 3;
        for (var i = 1; i <= totle; i++) {
            var row = Number(czCell.row) + 2 + i;
            cell.SetCellDouble(xl.col, row, czCell.sheet, i);
        }
    };

    //给有公式的单元格赋值
    cell.setValue2FormulaCol = function (col, row, sheet, value) {
        var gs = this.getFormula(col, row, sheet);
        if (gs) {
            this.setFormula(col, row, sheet, '');
        }
        cell.SetCellDouble(col, row, sheet, value);
        return gs;
    }

    cell.calculateAllJs = function () {
        this.DefineDoubleVar("control", 1);
        this.CalculateAll();
    }


    //根据行列计算cell的坐标
    cell.GetCellRect4Js_Cell = function (col, row) {
        var n=screenRatio();
        var map = {};
        var returnStr = GetCellRect4Js(col, row, this);
        var temp = returnStr.split(",");
        map.result = temp[0];
        map.left = (temp[1])/n;
        map.top = (temp[2])/n;
        map.right = (temp[3])/n;
        map.bottom = (temp[4])/n;
        return map;
    }

}
/**
 * 是否自动计算的方法
 * @param that
 */
function aoutoCalc(that) {
    if (that.checked) {
        DCellWeb1.CalcManaually = false;
        DCellWeb1.ProtectFormula = true;
    } else {
        //是否手动计算,false后所有的报表的公式失效。
        DCellWeb1.CalcManaually = true;
        //是否保护公式，能否修改设置过公式的单元格。
        DCellWeb1.ProtectFormula = false;
    }
}

/**
 * 响应checkbox的事件

 function DCellWeb1_CheckCellChanged_JS(col, row) {
    var checkName = DCellWeb1.FindCellVar(col, row, 0);
    var state = DCellWeb1.GetCellDouble(col, row, 0);
    if (state == 1) {
        if (window._checkState && window._checkState != checkName) {
            var temp = DCellWeb1.GetCellVar_J(window._checkState);
            DCellWeb1.SetCellDouble(temp.col, temp.row, temp.sheet, 0);
        }
        window._checkState = checkName;
    } else if (state == 0) {
        window._checkState = '';
    }
}
 */

/**
 * 响应cell中按钮触发的事件方法
 */
function DCellWeb1_ButtonCellClicked_JS(col, row, sheet) {
    //DCellWeb1.DeleteRow(row, 1, sheet);
    //DCellWeb1.CalculateAll();

    var str = DCellWeb1.GetBtnCellString(col, row, sheet);
    var name = DCellWeb1.FindCellVar(col, row, sheet);
    //从window中取得按钮的初始化参数
    if (str == "删除" || str == "Delete") {
        var cellRows = window._cellRows;
        cell.DefineDoubleVar("control", 0);
        if (cellRows.length <= 0) {
            alert("初始化错误");
            return;
        }
        var delObj = {};
        for (var i = 0; i < cellRows.length; i++) {
            if (name == cellRows[i].delButton.name) {
                delObj = cellRows[i];
            }
        }
        var delHcArr = [];
        var czCell = DCellWeb1.GetCellVar_J(delObj.start);
        var czEnd = DCellWeb1.GetCellVar_J(delObj.end);
        var checkbox = DCellWeb1.GetCellVar_J(delObj.delButton.checkbox);
        var hc = DCellWeb1.GetCellVar_J(delObj.hc);
        var totle = czEnd.row - czCell.row - 1;
        //需要先在checkbox上定义别名做个标记
        var time = new Date().getTime();

        for (var i = 0; i < totle; i++) {
            var row = Number(czCell.row) + i + 1;

            var doubleResult = DCellWeb1.GetCellDouble(checkbox.col, row, czCell.sheet);
            if (doubleResult == "1") {
                var tempMap = {};
                tempMap.id = time + i;
                DCellWeb1.DefineCellVar(time + i, checkbox.col, row, czCell.sheet);
                var hcValue = DCellWeb1.GetCellDouble(hc.col, row, hc.sheet);
                tempMap.hc = hcValue;
                delHcArr.push(tempMap);
            }
        }
        if (delHcArr.length == 0) {
            alert("请选择删除行");
            return;
        }
        if (confirm("确定要删除这【" + delHcArr.length + "】行吗？")) {
            cell.deleteRows(delHcArr, delObj);
        }
    } else if (str == "增加" || str == "Add") {
        var cellRows = window._cellRows;
        cell.DefineDoubleVar("control", 0);
        if (cellRows.length <= 0) {
            alert("初始化错误");
            return;
        }

        var addObj = {};

        for (var i = 0; i < cellRows.length; i++) {
            if (name == cellRows[i].addButton.name) {
                addObj = cellRows[i];
            }
        }
        var temp = DCellWeb1.GetCellVar_J(addObj.end);
        var start = DCellWeb1.GetCellVar_J(addObj.start);
        //cell5.3.9.15新加入InsertRow2方法可以复制合并单元格
        cell.InsertRow2(temp.row, 1, temp.sheet, 2);
        //合计栏也可以隐藏
        cell.SetRowUnHidden(temp.row, temp.row);
        initRowForSpecial(temp.col, start.row + 1, row, temp.sheet, '——');
        //var returnArr = cell.getMergeRowNum(temp.row - 1, temp.sheet);
        //cell.mergeRow(returnArr, temp.row);

        var formulaArr = cell.getFormulaRow(start.row + 1, temp.sheet);
        cell.setFormulaRow(formulaArr, temp.row);

        cell.initXL(addObj);
    }

    if (DCellWeb1.rowEvent) {
        DCellWeb1.rowEvent(col, row, sheet);
    }

}

/**
 *像某一行字符赋值给新增行
 */
function initRowForSpecial(startCol, likeRow, curRow, sheet, specialChar) {
    var endCol = DCellWeb1.GetCols(sheet);
    for (var i = startCol; i <= endCol; i++) {
        if (DCellWeb1.GetCellString(i, likeRow, sheet) == specialChar) {
            DCellWeb1.SetCellString(i, curRow, sheet, specialChar);
        }
    }
}

function CellInputCheck(col, row, sheet, text) {
    if (DCellWeb1.inputCheck) {
        return DCellWeb1.inputCheck(col, row, sheet, text);
    } else {
        return true;
    }
}

function DCellWeb1_DropCellSelected_JS(col, row) {
    if (DCellWeb1.selectChange) {
        DCellWeb1.selectChange(col, row);
    }
}
/***
 @王要雷
 鼠标左键双击击单元格事件
 **/
function DCellWeb1_MouseDClick_JS(col, row) {
    if (DCellWeb1.MouseDClick) {
        DCellWeb1.MouseDClick(col, row);
    }
}
/**
 响应checkbox 事件
 */
function DCellWeb1_CheckCellChanged_JS(col, row) {
    if (DCellWeb1.checkCellChanged) {
        DCellWeb1.checkCellChanged(col, row);
    }
}
/**
 响应 radio 事件
 */
function DCellWeb1_RadioCellChanged_JS(col, row) {
    if (DCellWeb1.RadioCellChanged) {
        DCellWeb1.RadioCellChanged(col, row);
    }
}

function CellChangeCheck(after, before) {
    if (after == before) {
        cell.DefineDoubleVar("control", 0);
    } else {
        cell.DefineDoubleVar("control", 1);
    }
}

//验证日期
function checkDateForCell(value) {
    var reg = /^(?:(?!0000)[0-9]{4}([-]{1,1})(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-]{1,1})0?2\2(?:29))$/;
    return reg.test(value);
}
//验证年度
function checkDateForCellND(value) {
    var reg = /^(?:(?!0000)[0-9]{4})$/;
    return reg.test(value);
}

function checkDigital(value, digital) {
    if (value && value.indexOf(".") != -1) {
        var ws = value.length - value.indexOf(".") - 1;
        if (digital < ws) {
            return false;
        }
    }
    return true;
}


function noNegative() {
    if (DCellWeb1 && arguments.length > 0) {
        var argsArray = arguments;
        DCellWeb1.inputCheck = function (col, row, sheet, text) {
            for (var ii = 0; ii < argsArray.length; ii++) {
                var cellTag = argsArray[ii];
                var cellObj = DCellWeb1.LabelToCell_J(cellTag);
                if (cellObj.row == row && cellObj.col == col) {
                    if (text < 0) {
                        DCellWeb1.SetCellDouble(cellObj.col, cellObj.row, 0, 0);
                        return false;
                    } else {
                        return true;
                    }
                }
            }
            return true;
        };

    }
}

//单元格
var col_m, row_m;
var n_row = 1, n_col = 1;
function TopRowChange(oldRow, newRow) {
    if (!document.getElementById("div1")) {
        return;
    }
    n_row = newRow;
    if (newRow > row_m) {
        document.getElementById("div1").style.display = "none";
    } else {
        var style = document.getElementById("div1").style;
        if (style.display != "none" && style.display != "") {
            document.getElementById("div1").style.display = "block";
        }
    }
    var top = getHeight(row_m, newRow);
    document.getElementById("div1").style.top = top;
}

function LeftColChange(oldCol, newCol) {
    if (!document.getElementById("div1")) {
        return;
    }
    n_col = newCol;
    if (newCol > col_m) {
        document.getElementById("div1").style.display = "none";
    } else {
        var style = document.getElementById("div1").style;
        if (style.display != "none" && style.display != "") {
            document.getElementById("div1").style.display = "block";
        }
    }
    var left = getWidth(col_m, newCol) + 8;
    document.getElementById("div1").style.left = left;
}
function screenRatio(){
    var ratio = 0,
        screen = window.screen,
        ua = navigator.userAgent.toLowerCase();

    if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
    }
    else if (~ua.indexOf('msie')) {
        if (screen.deviceXDPI && screen.logicalXDPI) {
            ratio = screen.deviceXDPI / screen.logicalXDPI;
        }
    }
    else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
        ratio = window.outerWidth / window.innerWidth;
    }
    return ratio;
}
function MouseLClick(col, row, upon) {
    setTimeout(function () {
        showInput(col, row);
    }, 100)

    var numType =DCellWeb1.GetCellNumType(col,row,0);
    var cellType = DCellWeb1.GetCellType(col,row,0);

    if(typeof WdatePicker != 'undefined' && WdatePicker!=null && WdatePicker !=''){
        var cellinput = DCellWeb1.GetCellInput(col,row,0);
        //显示类型是日期，单元格类型是普通,并且引入mydate97控件的,并且不是锁定状态的才行
        if(numType == 3&&cellType==0&&cellinput!=5){
            //先将日期设置为文本
            DCellWeb1.SetCellNumType(col,row,0,7);
            My97Date2(col, row, function () {
                var date1str = cell.GetCellString(col, row, 0);
                var date1 = new Date(date1str.substring(0, 4), date1str.substring(5, 7) - 1, date1str.substring(8, 10));
                var date2 = new Date();
                if (date1 > date2) {
                    alert("所选时间不能大于当前时间！");
                    cell.SetCellString(col, row, 0, "");
                }
                //再设置回日期格式
                DCellWeb1.SetCellNumType(col,row,0,3);

            });

        }

    }

    /*
     if(1 == upon) {
     var cellInput = DCellWeb1.GetCellInput(col,row,0);
     var numType = DCellWeb1.GetCellNumType(col,row,0);
     var formulaBz = DCellWeb1.IsFormulaCell(col,row,0);
     var digital = DCellWeb1.GetCellDigital(col, row, 0);
     var cellType = DCellWeb1.GetCellType(col,row,0);

     if(3 == cellType) {
     if(DCellWeb1.searchSelect) {
     DCellWeb1.searchSelect(col,row);
     }
     }
     }
     */
    if (1 == upon) {
        if (DCellWeb1.MouseLClick) {
            DCellWeb1.MouseLClick(col, row);
        }
    }
}

function CheckCellChanged(col, row) {
    if (DCellWeb1.checkCellChanged) {
        return DCellWeb1.checkCellChanged(col, row);
    }
}

$(document).ready(function () {
    initInput();
});

function showInput(col, row) {
    col_m = col;

    row_m = row;
    var left;
    var top;
    var offset = $("#DCellWeb1").offset();
    var inputNode = $("#div1 input");
    var cellInput = DCellWeb1.GetCellInput(col, row, 0);
    var numType = DCellWeb1.GetCellNumType(col, row, 0);
    var formulaBz = DCellWeb1.IsFormulaCell(col, row, 0);

    var digital = DCellWeb1.GetCellDigital(col, row, 0);

    var pf = DCellWeb1.ProtectFormula;
    if (cellInput != 5 && numType != 0 && formulaBz > 0 && !pf) {
        var c = DCellWeb1.GetColWidth(1, col, 0);
        var r = DCellWeb1.GetRowHeight(1, row, 0);
        inputNode.css({width: c, height: r});
        $("#div1").bgiframe({width: c, height: r}).show();

        left = getWidth(col, n_col);

        top = getHeight(row, n_row) + offset.top;

        document.getElementById("div1").style.left = left;
        document.getElementById("div1").style.top = top;
        var value = DCellWeb1.getValue(col, row, 0);
        inputNode.val(value);
        inputNode.focus();

        var i = 0;
        inputNode.get(0).onblur = function () {

            if (i > 0) {
                return;
            }
            if (!checkNumber(this.value, digital)) {
                return false;
            }
            i = 0;
            var val = $(this).val();
            if (this.value == '') {
                val = 0;
            }
            CellChangeCheck(val, value);
            DCellWeb1.setValue(col, row, 0, val);
            $("#div1").hide();
        };

        inputNode.get(0).onkeydown = function (event) {

            event = event || window.event;
            if (event.keyCode == 13) {
                i = 1;
                if (!checkNumber(this.value, digital)) {
                    i = 0;
                    return false;
                }
                var val = this.value;
                if (this.value == '') {
                    val = 0;
                }
                CellChangeCheck(val, value);
                DCellWeb1.setValue(col, row, 0, val);
                $("#div1").hide();
                document.getElementById("DCellWeb1").focus();
            }
        };
        inputNode.focus();
    }
}

function checkNumber(value, digital) {

    if (!checkDigital(value, digital)) {
        alert("输入小数位过长");
        return false;
    }

    if (value >= 1000000000000 || value <= -1000000000000) {
        alert("输入的数据太大，请修改!");
        return false;
    }
    return true;
}

function initInput() {

    if ($("#div1").length == 0) {
        $(document.body).append('<div id="div1" style="position:absolute;z-index:199;display:none;"><div><input type="text" name="123"></div></div>');
    }

}

function getWidth(col, start) {
    var left = 0;
    if (!start) {
        start = 1;
    }
    for (var i = start; i < col; i++) {
        left = left + DCellWeb1.GetColWidth(1, i, 0);
    }
    return left + 1;
}

function getHeight(row, start) {
    var top = 0;
    if (!start) {
        start = 1;
    }
    for (var i = start; i < row; i++) {
        top = top + DCellWeb1.GetRowHeight(1, i, 0);
    }
    return top + 1;
}




function My97Date2(col, row, callback) {
    var map = DCellWeb1.GetCellRect4Js_Cell(col, row);
    //隐藏展示日期的div
    var light = document.getElementById("datePicker");
     if(!light){
         $(document.body).append('<div id="datePicker" style="position:absolute;z-index:199;display:none;"></div>');
         light = document.getElementById("datePicker");
     }
    //  alert(sumRowHeight+"++++"+sumColWidth);
    var sheet = DCellWeb1.GetCurSheet();
    //  cell.SetCellInput(col,row,sheet,5);
    // $("light").css({ display: "block",top:sumRowHeight,left: sumColWidth});
    var offset = $("#DCellWeb1").offset();

    //var _width = window.screen.width * 0.8;
    //var cellWidth = cell.getCellWidth();
    //计算偏差
    //var l_width=(_width-cellWidth)/2;
    //light.style.top=Number(map.bottom)+2;//-11  +2
    //light.style.left=Number(map.left)+l_width+126;//-10  +126
    var top = getHeight(row + 1, 1);
    light.style.top = top +1+ 'px';//-11  +2
    light.style.left = Number(map.left) + offset.left+'px';//-10  +126

    light.style.display = "";//block
    light.style.fontSize='0';
    var dateFmtStr = 'yyyy-MM-dd';

    WdatePicker({
        el: 'datePicker',
        dateFmt: dateFmtStr,//'yyyy-MM-01' 'yyyy-MM' 'yyyy-MM-dd'
        onpicked: function (dp) {
            DCellWeb1.SetCellString(col, row, sheet, dp.cal.getDateStr());
            callback();
            //light.style.display='none';
        },
        oncleared: function () {
            DCellWeb1.SetCellString(col, row, sheet, "");
            //再设置回日期格式
            DCellWeb1.SetCellNumType(col,row,0,3);
            //light.style.display='none';
        }
    });

}
