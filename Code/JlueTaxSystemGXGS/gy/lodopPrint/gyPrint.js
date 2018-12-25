/**
 * lodop打印组件
 * @author liumu
 *
 */
var WingsPrintClass = {
    create: function () {
        return function () { this.initialize.apply(this, arguments); }
    }
}
var WingsPrintExtend = function (destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
}
var WingsReplaceAll = function (str, replacement, content) {
    if (str != null) {
        str = str.replace(new RegExp(replacement, 'gm'), content);
    }
    return str;
}

WingsParents = function (obj, tagName) {
    if (obj.parentNode == null) {
        return null;
    }
    var parent = obj.parentNode;
    if (parent.tagName.toLowerCase() != tagName.toLowerCase()) {
        return WingsParents(parent, tagName);
    } else {
        return parent;
    }
}
wingsStrToDom = function (str) {
    var s = document.createElement('div');
    s.innerHTML = str;
    return s;
}
var WingsPrint = WingsPrintClass.create();
WingsPrint.prototype = {
    initialize: function (options) {
        this.options = this.defaultOptions;
        WingsPrintExtend(this.options, options || {});
        this.lodop = getLodop();
    },
    createPrintPage: function (options, printPageArray) {
        //可视区域位置
        this.lodop.PRINT_INIT("");
        //纸张大小
        this.lodop.SET_PRINT_PAGESIZE(options.intOrient, 0, 0, options.strPageName);
        if (printPageArray != null && printPageArray.length > 0) {
            if ("url" == options.createType) {
                for (var i = 0; i < printPageArray.length; i++) {
                    this.lodop.ADD_PRINT_URL(this.options.top, this.options.left, this.options.width, this.options.height,
							printPageArray[i]);
                }
            } else if ("table" == options.createType) {
                for (var i = 0; i < printPageArray.length; i++) {
                    //纸张位置
                    this.lodop.ADD_PRINT_TABLE(this.options.top, this.options.left, this.options.width, this.options.height,
							printPageArray[i]);
                }
            } else {
                for (var i = 0; i < printPageArray.length; i++) {
                    //纸张位置
                    this.lodop.ADD_PRINT_HTML(this.options.top, this.options.left, this.options.width, this.options.height,
							printPageArray[i]);
                }
            }
        }
        this.lodop.SET_PRINT_STYLEA(0, "Horient", 2);
        var printMode = {};
        if (options.printMode != null) {
            printMode = eval('(' + options.printMode + ')');
            //设置是否可以重新选择纸张。
        }
        printMode.RESELECT_PAGESIZE = true;
        //设置是否可以重新选择打印方向。
        printMode.RESELECT_ORIENT = true;
        //设置是否可以重新选择打印份数。
        printMode.RESELECT_COPIES = true;
        //设置是否可以重新选择打印机。
        printMode.RESELECT_PRINTER = true;
        for (var item in printMode) {
            this.lodop.SET_PRINT_MODE(item, printMode[item]);
        }
        this.lodop.SET_SHOW_MODE("LANDSCAPE_DEFROTATED", 1);//横向时的正向显示
    },
    print: function (printPageArray) {
        this.createPrintPage(this.options, printPageArray);
        this.lodop.PRINT();
    },
    preview: function (printPageArray) {
        //		this.lodop.PRINT_INIT("");
        //		this.lodop.ADD_PRINT_TABLE("0%", '0', 'RightMargin:0mm', "100%",printPageArray[0]);
        //		this.lodop.SET_PRINT_STYLEA(0,"Horient",2);
        this.createPrintPage(this.options, printPageArray);
        var a = this.lodop.PREVIEW();
    },
    print_setup: function (printPageArray) {
        //		this.lodop.PRINT_INIT("");
        //		this.lodop.ADD_PRINT_TABLE("0%", '0', 'RightMargin:0mm', "100%",printPageArray[0]);
        this.createPrintPage(this.options, printPageArray);
        //		this.lodop.SET_SHOW_MODE("HIDE_DISBUTTIN_SETUP",1);
        this.lodop.SET_SHOW_MODE("HIDE_ABUTTIN_SETUP", 1);
        this.lodop.SET_SHOW_MODE("HIDE_GROUND_LOCK", 1);
        this.lodop.SET_SHOW_MODE("SETUP_ENABLESS", 11111111111111);
        this.lodop.PRINT_SETUP();
    },
    print_design: function (printPageArray) {
        this.createPrintPage(this.options, printPageArray);
        this.lodop.PRINT_DESIGN();
    },
    exportFile: function (intWriteMode, strFilename, strTextArray) {
        for (var i = 0; i < printPageArray.length; i++) {
            var strText = strTextArray[i];
            if (strText != null) {
                strText = strText.replace("第<FONT format=\"0\" tdata=\"PageNO\">##</FONT>页/共<FONT format=\"0\" tdata=\"PageCount\">##</FONT>页", "");
            }
            if (this.lodop.CVERSION) {
                CLODOP.On_Return = function (TaskID, Value) {
                    if (Value == "ok") {
                        alert("写入成功！");
                    } else {
                        if ("do nothing" != strResult) {
                            alert(strResult);
                        }
                    }
                };
            }
            //			this.lodop.ADD_PRINT_TABLE(100,20,500,80,strText); 
            //			this.lodop.SAVE_TO_FILE(strFilename);
            var strResult = this.lodop.WRITE_FILE_TEXT(intWriteMode, strFilename, strText);
            if (!this.lodop.CVERSION) {
                if (strResult == "ok") {
                    alert("写入成功！");
                } else {
                    if ("do nothing" != strResult) {
                        alert(strResult);
                    }
                };
            }
        }
    },
    exportExcelFile: function (strFilename, strTextArray) {
        for (var i = 0; i < strTextArray.length; i++) {
            if (strTextArray[i] != null) {
                strTextArray[i] = strTextArray[i].replace("第<FONT format=\"0\" tdata=\"PageNO\">##</FONT>页/共<FONT format=\"0\" tdata=\"PageCount\">##</FONT>页", "");
            }
        }
        if (this.options.createType == "table") {
            this.createPrintPage(this.options, printPageArray);
        } else {
            tempCreateType = this.options.createType;
            this.options.createType = "table";
            this.createPrintPage(this.options, printPageArray);
        }
        var strResult = this.lodop.SAVE_TO_FILE(strFilename);
        if (strResult) {
            alert("导出成功！")
        }
        var tempCreateType = null;
        this.options.createType = tempCreateType;
    },
    replaceBookMark: function (obj, value) {
        var nodes = [];
        var newSpan = null;
        //递归获取p标签的所有子元素
        traverseNodes(nodes, obj.parentNode);
        for (var z = 0; z < nodes.length; z++) {
            if ("SPAN" == nodes[z].tagName) {
                newSpan = nodes[z].cloneNode(true);
                if (nodes[z].innerHTML == '&nbsp;' || nodes[z].innerHTML == '') {
                    nodes[z].parentNode.removeChild(nodes[z]);
                    break;
                }
            }
        }
        if (obj.tagName == 'A') {
            if (newSpan != null) {
                obj.appendChild(newSpan);
                newSpan.innerHTML = value;
            } else {
                obj.innerHTML = value;
            }
        }
    },
    setOpts: function (opts) {
        WingsPrintExtend(this.options, opts || {});
    }

}
WingsPrint.prototype.defaultOptions = {
    intOrient: 0,//打印方向及纸张类型，数字型，1---纵(正)向打印，固定纸张；2---横向打印，固定纸张；3---纵(正)向打印，宽度固定，高度按打印内容的高度自适应；0(或其它)----打印方向由操作者自行选择或按打印机缺省设置；
    strPageName: 'A4',//所选纸张类型名
    top: '10mm',//打印项在纸张内的上边距
    left: '10mm',//打印项在纸张内的左边距
    width: 'RightMargin:10mm',//打印区域的宽度
    height: 'BottomMargin:10mm',//打印区域的高度
    viewTop: 0,//可是编辑区域上边距
    viewLeft: 0,//可是编辑区域左边距
    viewWidth: '800px',//可是编辑区域宽
    viewHeight: '600px',//可是编辑区域高
    createType: 'htm',
    printMode: null,
    showMode: { "SETUP_ENABLESS": "11111111111111" }
}