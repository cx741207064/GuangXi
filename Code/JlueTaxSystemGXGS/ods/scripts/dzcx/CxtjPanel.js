Ext.Loader.setPath("Ext.ux", "/ods/scripts/ext/ux");
Ext.require(["Ext.ux.Comboboxtree", "Ext.ux.CheckCombo"]);

(function (Ext) {
    var FIELD_WIDTH = 300;
    var FIELD_LABLEWIDTH = 200;

    Ext
			.define(
					"Dzcx.CxtjPanel",
					{
					    extend: "Ext.tab.Panel",
					    alias: "widget.cxtjPanel",
					    border: 0,
					    initComponent: function () {
					        var self = this, cxdy = self.cxdy;
					        this.items = [{
					            title: "查询条件",
					            xtype: "form",
					            autoScroll: true,
					            items: createCxtjPanel(cxdy),
					            listeners: {
					                resize: onPanelResize
					            }
					        }, {
					            title: "查询描述",
					            layout: "fit",
					            items: [{
					                xtype: "textareafield",
					                value: cxdy.cxms
					            }]
					        }, {
					            title: "变更明细",
					            layout: "fit",
					            items: [{
					                xtype: "textareafield"
					            }],
					            listeners: {
					                activate: onChangeDetailsActivate
					            }
					        }];

					        self.callParent(arguments);
					    },
					    listeners: {
					        afterrender: function () {
					            var self = this;
					            Ext.Ajax
										.request({
										    url: '/download.sword.ashx?ctrl=CX301DzcxCtrl_getCxtjzdyInitList&n='
													+ new Date().getTime() + '',
										    params: {
										        swrydm: window.cxdy.swryDm,
										        sqlxh: window.cxdy.sqlxh
										    },
										    success: function (response) {
										        var res = response.responseText;
										        self.loadQueryParams("N", res);

										    }
										})

					            // 处理有上级条件的情况,设置级联
					            setParentCascade(this.cxdy.cxtj);
					            // 取数据时间和加工时间
					            createTimePanel(this.cxdy.sqlxh);
					        }
					    },
					    getQueryParams: _getQueryParams,
					    validateQueryParams: _validateQueryParams,
					    resetQueryParams: _resetQueryParams,
					    saveQueryParams: _saveQueryParams,
					    loadQueryParams: _loadQueryParams
					});

    /**
	 * 获取全部有值的查询条件
	 */
    function _getQueryParams() {

        var queryParams = [],
			extraParams = ReqUtils.getPageData("extraParams") || [];

        this.down("form").getForm().getFields().each(function (field) {
            var name = field.name;

            if (name != "sjsj" && name != "jgsj") {
                var type, value, displayValue;

                switch (field.xtype) {
                    case "datefield":
                        type = "date";
                        value = field.getRawValue();
                        displayValue = value;

                        break;
                    case "combobox":
                        type = "string";

                        value = field.getValue();
                        displayValue = field.getRawValue();

                        break;
                    case "checkcombo":
                        type = "string";

                        value = field.getValue().join(",");
                        displayValue = Ext.isArray(field.getRawValue()) ? field.getRawValue().join(",") : field.getRawValue();

                        break;
                    case "numberfield":
                        type = "number";
                        value = field.getValue() === null ? "" : field.getValue().toString();
                        displayValue = value;

                        break;
                    default:
                        type = "string";
                        value = field.getValue();
                        displayValue = field.getRawValue();
                }

                queryParams.push({
                    // fieldName:field.getFieldLabel(),
                    name: field.getName(),
                    value: value || "",
                    type: type,
                    displayValue: displayValue || value
                });
            }
        });

        if (Ext.isString(extraParams)) {
            extraParams = Ext.JSON.decode(extraParams);
        }

        a: for (var i = 0; i < extraParams.length; i++) {
            var param = extraParams[i];

            for (var j = 0; j < queryParams.length; j++) {
                if (ReqUtils.getPageData("execute") == "true") {
                    // 过滤fzxm和zbxm，不等于，而非等于
                    if (queryParams[j].name == param.name && !(extraParams[i].name == "fzxm" || extraParams[i].name == "zbxm")) {
                        queryParams[j].value = param.value;
                        queryParams[j].displayValue = param.displayValue;
                        continue a;
                    }
                } else {
                    if (queryParams[j].name == param.name) {
                        queryParams[j].value = param.value;
                        queryParams[j].displayValue = param.displayValue;
                        continue a;
                    }
                }
            }
            // 下钻查询过滤掉fzxm和zbxm
            if (ReqUtils.getPageData("execute") == "true") {
                if (!(param.name == 'fzxm' || param.name == 'zbxm')) {
                    queryParams.push(param);
                }
            } else {
                queryParams.push(param);
            }

        }
        return queryParams;
    }

    /**
	 * 校验查询条件是否必选,级联关系
	 */
    function _validateQueryParams() {
        var self = this,
			cxtj = self.cxdy.cxtj,

			form = this.down("form").getForm();
        isValid = form.isValid();
        if (!isValid) {
            Ext.MessageBox.alert('提示', '您所填的条件不符合规范，请点击红色文本框查看具体要求！');
        }
        if (isValid) {
            for (var i = 0; i < cxtj.length; i++) {
                var tj = cxtj[i],
					jyzh = tj.jyzh,
					jylx = tj.jylx;

                // 首组的校验
                if (jyzh) {
                    // 分开处理没有子组和有子组的情况
                    if (jyzh.indexOf("-") == -1) {// 没有子组
                        var group = [];

                        for (var j = 0; j < cxtj.length; j++) {
                            if (cxtj[j].jyzh == jyzh) {
                                group.push(cxtj[j].lmc);
                            }
                        }

                        // 防逗比处理,至少一个组里有2个才校验
                        if (group.length > 1) {
                            var flag = false;

                            for (var j = 0; j < group.length; j++) {
                                var field = Ext.ComponentQuery.query("field[name=" + group[j] + "]")[0],
									value = field.getValue();

                                if (value) {
                                    flag = true;
                                }
                            }

                            if (!flag) {
                                var label = [];

                                for (var k = 0; k < cxtj.length; k++) {
                                    if (Ext.Array.contains(group, cxtj[k].lmc)) {
                                        label.push(cxtj[k].tjmc);
                                    }
                                }

                                Ext.Msg.alert("提示", "查询条件[" + label.join(",") + "]中至少需要填写一项!");

                                return false;
                            }
                        }
                    } else {
                        var tmp = {};

                        // 首先把属于该组的所有成员找到存到tmp中,格式为{1-1:[xxx,xxx],1-2:[xxx,xxx]}
                        for (var j = 0; j < cxtj.length; j++) {
                            var zh = cxtj[j].jyzh || "";

                            if (zh.indexOf("-") != -1 && zh.split("-")[0] == jyzh.split("-")[0]) {
                                if (!tmp[zh]) {
                                    tmp[zh] = [];
                                }

                                tmp[zh].push(cxtj[j].lmc);
                            }
                        }

                        var flag = false;
                        // 开始循环每一个组,如果有一个组都录了值就跳出所有循环
                        a: for (var zh in tmp) {
                            var flag2 = true;

                            // 每组中只要有一个没有值就退出该组循环,开始循环下一组
                            b: for (var k = 0; k < tmp[zh].length; k++) {
                                var field = Ext.ComponentQuery.query("field[name=" + tmp[zh][k] + "]")[0],
									value = field.getValue();

                                if (value === null || value == "") {
                                    flag2 = false;
                                    break b;
                                }
                            }

                            if (flag2) {
                                flag = true;
                                break a;
                            }
                        }

                        if (!flag) {
                            var labelArray = [];

                            for (var k in tmp) {
                                var label = [];

                                for (var j = 0; j < cxtj.length; j++) {
                                    if (Ext.Array.contains(tmp[k], cxtj[j].lmc)) {
                                        label.push(cxtj[j].tjmc);
                                    }
                                }

                                labelArray.push("[" + label.join(",") + "]");
                            }

                            Ext.Msg.alert("提示", "查询条件" + labelArray.join(",") + "中至少需要填写其中一组!");

                            return false;
                        }
                    }
                }
                var jssj = tj.jssjzd;
                var flag = jssj == null;
                if (!flag) {
                    var endField = Ext.ComponentQuery.query("field[name=" + tj.jssjzd + "]")[0];
                    end = endField.getValue();
                    var startField = Ext.ComponentQuery.query("field[name=" + tj.lmc + "]")[0];
                    start = startField.getValue();
                    if (start > end && !(end == null) && !(start == null)) {
                        Ext.MessageBox.alert('提示', endField.getFieldLabel() + '不小于' + startField.getFieldLabel());
                        return false;
                    }
                }
                // 然后校验本年,本月,本日,天数,月数,年数
                if (jylx) {
                    var d = new Date(),
						year = d.getFullYear(),
						month = d.getMonth() + 1,
						month = month < 10 ? "0" + month : month.toString(),
						day = d.getDate(),
						day = day < 10 ? "0" + day : day.toString(),
						field = Ext.ComponentQuery.query("field[name=" + tj.lmc + "]")[0],
						value = Ext.util.Format.date(field.getValue(), "Y-m-d");

                    switch (jylx) {
                        case "0":
                            if (!value || year != value.split("-")[0]) {
                                Ext.Msg.alert("提示", "查询条件[" + field.getFieldLabel() + "]的值必须在本年!");

                                return false;
                            }

                            break;
                        case "1":
                            if (!value || year != value.split("-")[0] || month != value.split("-")[1]) {
                                Ext.Msg.alert("提示", "查询条件[" + field.getFieldLabel() + "]的值必须在本月!");

                                return false;
                            }

                            break;
                        case "2":
                            if (!value || [year, month, day].join("-") == value) {
                                Ext.Msg.alert("提示", "查询条件[" + field.getFieldLabel() + "]的值必须在本日!");

                                return false;
                            }

                            break;
                        case "3":
                            if (value && tj.jssjzd && tj.jys) {
                                var endField = Ext.ComponentQuery.query("field[name=" + tj.jssjzd + "]")[0],
									start = field.getValue().getTime(),
									end = endField.getValue().getTime();

                                if (tj.jys == "0") {
                                    if (field.getValue().getFullYear() != endField.getValue().getFullYear() ||
										field.getValue().getMonth() != endField.getValue().getMonth() ||
										field.getValue().getDate() != endField.getValue().getDate()) {

                                        Ext.Msg.alert("提示", "[" + field.getFieldLabel() + "]与[" + endField.getFieldLabel() + "]必须在同一天!");

                                        return false;
                                    }
                                } else if (Math.abs((end - start)) / (1000 * 60 * 60 * 24) > parseInt(tj.jys)) {
                                    Ext.Msg.alert("提示", "[" + field.getFieldLabel() + "]与[" + endField.getFieldLabel() + "]之间的间隔天数不能大于" + tj.jys + "天!");

                                    return false;
                                }
                            }

                            break;
                        case "4":
                            if (value && tj.jssjzd && tj.jys) {
                                var endField = Ext.ComponentQuery.query("field[name=" + tj.jssjzd + "]")[0],
									start = parseInt(value.split("-")[1].replace(/^0+/, "")) + parseInt(value.split("-")[0]) * 12;
                                endValue = Ext.util.Format.date(endField.getValue(), "Y-m-d"),
                                end = parseInt(endValue.split("-")[1].replace(/^0+/, "")) + parseInt(endValue.split("-")[0]) * 12;

                                if (tj.jys == "0") {
                                    if (field.getValue().getFullYear() != endField.getValue().getFullYear() || field.getValue().getMonth() != endField.getValue().getMonth()) {
                                        Ext.Msg.alert("提示", "[" + field.getFieldLabel() + "]与[" + endField.getFieldLabel() + "]必须在同一月!");

                                        return false;
                                    }
                                } else if ((end - start) > parseInt(tj.jys)) {
                                    Ext.Msg.alert("提示", "[" + field.getFieldLabel() + "]与[" + endField.getFieldLabel() + "]之间的间隔月数不能大于" + tj.jys + "月!");

                                    return false;
                                }
                            }

                            break;
                        case "5":
                            if (value && tj.jssjzd && tj.jys) {
                                var endField = Ext.ComponentQuery.query("field[name=" + tj.jssjzd + "]")[0],
									start = parseInt(value.split("-")[1].replace(/^0+/, "")) + parseInt(value.split("-")[0]) * 12,
									endValue = Ext.util.Format.date(endField.getValue(), "Y-m-d"),
                					end = parseInt(endValue.split("-")[1].replace(/^0+/, "")) + parseInt(endValue.split("-")[0]) * 12;

                                if (tj.jys == "0") {
                                    if (field.getValue().getFullYear() != endField.getValue().getFullYear()) {
                                        Ext.Msg.alert("提示", "[" + field.getFieldLabel() + "]与[" + endField.getFieldLabel() + "]必须在同一年!");

                                        return false;
                                    }
                                } else if ((end - start) / 12 > parseInt(tj.jys)) {
                                    Ext.Msg.alert("提示", "[" + field.getFieldLabel() + "]与[" + endField.getFieldLabel() + "]之间的间隔年数不能大于" + tj.jys + "年!");

                                    return false;
                                }
                            }

                            break;
                    }
                }
                if (tj.tjxylx == 0 && (tj.llx.toLowerCase() == 'select' || tj.llx.toLowerCase() == 'multi')) {
                    field = Ext.ComponentQuery.query("field[name=" + tj.lmc + "]")[0],
						value = field.value;
                    if (value == null || value == "") {
                        Ext.Msg.alert("提示", "查询条件[" + tj.tjmc + "]所填的值不在选项中!");
                        return false;
                    }
                }

            }
        }

        if (isValid) {
            var values = self.getQueryParams();

            for (var i = 0; i < values.length; i++) {

                var param = values[i].value.toLowerCase()
                if (param.indexOf("select") >= 0 || param.indexOf("and") >= 0 || param.indexOf("or") >= 0 || param.indexOf("insert") >= 0 || param.indexOf("drop") >= 0 || param.indexOf("alter") >= 0 || param.indexOf("exec") >= 0 || param.indexOf("create") >= 0 || param.indexOf("delete") >= 0 || param.indexOf("update") >= 0) {
                    Ext.Msg.alert("提示", "查询条件中不能包含sql语句的关键字!");

                    return false;
                }
            }
        }

        return isValid;
    }

    /**
	 * 重置查询条件
	 */
    function _resetQueryParams() {
        this.down("form").getForm().reset();
        var treefield = Ext.ComponentQuery.query("cxtjPanel treeField");
        // 定义一个resetQueryBz
        var resetQueryBz = "Y";

        for (var i = 0; i < treefield.length; i++) {
            var field = treefield[i];

            field.setLocalValue(null, null);
            field.picker.store.load();
        }

        // 把resetQueryBz传入loadQueryParams方法中
        this.loadQueryParams(resetQueryBz);
    }

    /**
	 * 保存已经选好的查询条件到cookie中
	 */
    function _saveQueryParams() {
        var cookieId = document.location.host + window.cxdy.swryDm + window.cxdy.sqlxh;

        setCookieData(cookieId, this.getQueryParams());

        Ext.Msg.alert("提示", "保存查询条件成功!");
    }

    /**
	 * 设置查询条件的初始值,首先赋的是查询定义中的默认值,然后用cookie中的值覆盖,最后用extraParams中的值覆盖
	 */
    function _loadQueryParams(resetQueryBz, queryParams) {
        var values = {},
			cxtj = window.cxdy.cxtj;

        // 只有在非下钻的时候才加载默认值和保存的查询条件
        if (window.cxdy.cxfl == '2' || ReqUtils.getPageData("execute") == "false") {
            for (var i = 0; i < cxtj.length; i++) {
                if (cxtj[i].mrz) {
                    values[cxtj[i].lmc.toUpperCase()] = {
                        name: cxtj[i].lmc,
                        value: cxtj[i].mrz
                    };
                }
            }

            var cookieId = document.location.host + window.cxdy.swryDm + window.cxdy.sqlxh;
            // 加入判断，如果点击重置条件按钮，则传入resetQueryBz参数，由于resetQueryBz的值为“Y”，
            // 所以当前if语句不会执行，那么cookie中的值不会覆盖默认值。
            if (resetQueryBz != "Y") {
                var cookieData = eval(queryParams) || [];
                for (var i = 0; i < cookieData.length; i++) {
                    values[cookieData[i].name.toUpperCase()] = cookieData[i];
                }
            }
        }
        var extraParams = ReqUtils.getPageData("extraParams") || [];

        if (Ext.isString(extraParams)) {
            extraParams = Ext.JSON.decode(extraParams);
        }

        for (var i = 0; i < extraParams.length; i++) {
            if (ReqUtils.getPageData("execute") == "true") {
                if (!(extraParams[i].name == "fzxm" || extraParams[i].name == "zbxm")) {
                    values[extraParams[i].name.toUpperCase()] = extraParams[i];
                }

            }
        }

        this.down("form").getForm().getFields().each(function (field) {

            // var value = values[field.name];
            var value = values[field.name.toUpperCase()];

            if (value) {
                switch (field.xtype) {
                    case "combobox":
                        var store = field.getStore();

                        // 处理直接在表里面mrz不为空的情况,单选为code||caption,多选为code1,code2...||caption1,caption2...
                        // 如果caption的值中也有||就不处理这种情况
                        if (!value.displayValue && value.value.split("||").length == 2) {
                            value.displayValue = value.value.split("||")[1];
                            value.value = value.value.split("||")[0];
                        }

                        if (store.find("dm", value.value) == -1) {
                            store.loadData([{ dm: value.value, mc: value.displayValue || value.value }]);
                        }

                        field.setValue(value.value);

                        break;
                    case "checkcombo":
                        var store = field.getStore();

                        if (!value.displayValue && value.value.split("||").length == 2) {
                            value.displayValue = value.value.split("||")[1];
                            value.value = value.value.split("||")[0];
                        }

                        var valueArray = value.value.split(","),
							displayValue = value.displayValue || "",
							displayValueArray = displayValue.split(",");

                        // 如果store中没有要设值的数据才添加record,不然直接设值,这样做是为了兼容渣渣ie8
                        if (store.find("dm", valueArray) == -1) {
                            for (var i = 0; i < valueArray.length; i++) {
                                store.loadData([{ dm: valueArray[i], mc: displayValueArray[i] || valueArray[i] }], true);
                            }
                        }

                        field.setValue(valueArray);

                        break;
                    case "treeField":
                        field.setLocalValue(value.displayValue || "", value.value);

                        break;
                    default:
                        field.setValue(value.value);
                }
            }
        });
    }

    // ----------------------------------------------------------------------------------------------------------------------------------------------------

    /**
	 * 构建查询条件的面板,包含必选条件,可选条件,统计条件. cxlx 1清册查询,2统计查询,3交叉表查询
	 */
    function createCxtjPanel(cxdy) {
        var cxlx = cxdy.cxlx,
			cxtj = cxdy.cxtj
        items = [],
        bxtj = [],
        kxtj = [],
        // columnCount = parseInt(document.body.clientWidth/FIELD_WIDTH),
        columnCount = 3,// 改成固定的3列的,如果要根据宽度来决定列数就把上面那句放开,这句屏蔽
        columnWidth = 1 / columnCount;

        for (var i = 0; i < cxtj.length; i++) {
            // 0必选,1可选,3隐藏
            if (cxtj[i].tjxylx == "1") {
                kxtj.push(cxtj[i]);
            } else {
                bxtj.push(cxtj[i]);
            }
        }

        if (bxtj.length) {
            var bz = 0;
            for (var i = 0; i < bxtj.length; i++) {
                if (bxtj[i].tjxylx == "0") {
                    bz = 1;
                    break;
                }
            }
            if (bz) {
                items.push({
                    title: "必选条件",
                    layout: "column",
                    items: []
                });
            } else {
                items.push({
                    title: "必选条件",
                    layout: "column",
                    hidden: "true",
                    items: []
                });
            }

            for (var i = 0; i < columnCount; i++) {
                items[items.length - 1].items.push({
                    columnWidth: columnWidth,
                    bodyPadding: 5,
                    border: 0,
                    bodyStyle: { border: 0 },
                    items: []
                });
            }

            for (var i = 0, j = 0; i < bxtj.length; i++, j++) {
                if (j == columnCount) {
                    j = 0;
                }

                items[items.length - 1].items[j].items.push(createCxtjField(bxtj[i], cxdy));
            }
        }

        if (kxtj.length) {
            items.push({
                title: "可选条件",
                layout: "column",
                items: []
            });

            for (var i = 0; i < columnCount; i++) {
                items[items.length - 1].items.push({
                    columnWidth: columnWidth,
                    bodyPadding: 5,
                    border: 0,
                    bodyStyle: { border: 0 },
                    items: []
                });
            }

            for (var i = 0, j = 0; i < kxtj.length; i++, j++) {
                if (j == columnCount) {
                    j = 0;
                }

                items[items.length - 1].items[j].items.push(createCxtjField(kxtj[i], cxdy));
            }
        }

        // 统计查询和交叉表查询需要添加额外的面板
        if (cxlx == "2" || cxlx == "3") {
            var fzxmData = [],
				zbxmData = [],
				fzxmValues = [],
				zbxmValues = [];

            Ext.Ajax.request({
                url: ReqUtils.AddBizCode2URL("/download.sword.ashx?ctrl=CX301DzcxCtrl_getResultColumns"),
                params: { sqlxh: window.cxdy.sqlxh },
                async: false,
                success: function (res) {
                    var columns = Ext.JSON.decode(res.responseText),
						sjl = [];

                    // 只找最下层列,先加工一次
                    for (var i = 0; i < columns.length; i++) {
                        var column = columns[i],
							sjlmc = column.sjlmc;

                        if (sjlmc) {
                            sjl.push(sjlmc);
                        }
                    }

                    for (var i = 0; i < columns.length; i++) {
                        var column = columns[i],
							lmc = column.lmc,
							lms = column.lms,
							lx = column.llx;

                        if (column.jcbzdlx != "1") {
                            if (lx == "VARCHAR2" && !Ext.Array.contains(sjl, lmc)) {
                                fzxmData.push({
                                    dm: lmc,
                                    mc: lms
                                });

                                fzxmValues.push(lmc);

                                continue;
                            } else if (lx == "NUMBER" && !Ext.Array.contains(sjl, lmc)) {
                                zbxmData.push({
                                    dm: lmc,
                                    mc: lms
                                });

                                zbxmValues.push(lmc);
                            }
                        }
                    }
                }
            });

            var fzxmStore = Ext.create("Ext.data.Store", {
                fields: ["dm", "mc"],
                data: fzxmData
            });

            var zbxmStore = Ext.create("Ext.data.Store", {
                fields: ["dm", "mc"],
                data: zbxmData
            });

            items.push({
                title: "统计条件",
                layout: "column",
                items: [{
                    columnWidth: columnWidth,
                    bodyPadding: 5,
                    border: 0,
                    bodyStyle: { border: 0 },
                    items: [{
                        xtype: "checkcombo",
                        displayField: "mc",
                        valueField: "dm",
                        labelAlign: "right",
                        // editable:false,
                        allowBlank: false,
                        width: FIELD_WIDTH,
                        fieldLabel: "分组项目",
                        name: "fzxm",
                        store: fzxmStore,
                        value: fzxmValues,
                        listConfig: {
                            resizable: true
                            // maxHeight:1000
                        },
                        minChars: 20,
                        listeners: {
                            beforequery: function (evt) {
                                var comb = evt.combo,
									value = evt.query.replace(/(^\s*)|(\s*$)/g, ""),
									store = comb.getStore();

                                if (value) {
                                    store.filterBy(function (record) {
                                        return record.get(comb.displayField).indexOf(value) != -1;
                                    });
                                } else {
                                    store.clearFilter();
                                }
                            }
                        }
                    }]
                }, {
                    columnWidth: columnWidth,
                    bodyPadding: 5,
                    border: 0,
                    bodyStyle: { border: 0 },
                    items: [{
                        xtype: "checkcombo",
                        displayField: "mc",
                        valueField: "dm",
                        labelAlign: "right",
                        // editable:false,
                        allowBlank: false,
                        width: FIELD_WIDTH,
                        fieldLabel: "指标项目",
                        name: "zbxm",
                        store: zbxmStore,
                        value: zbxmValues,
                        listConfig: {
                            resizable: true
                            // maxHeight:1000
                        },
                        minChars: 20,
                        listeners: {
                            beforequery: function (evt) {
                                var comb = evt.combo,
									value = evt.query.replace(/(^\s*)|(\s*$)/g, ""),
									store = comb.getStore();

                                if (value) {
                                    store.filterBy(function (record) {
                                        return record.get(comb.displayField).indexOf(value) != -1;
                                    });
                                } else {
                                    store.clearFilter();
                                }
                            }
                        }
                    }]
                }]
            });
        }
        return items;
    }

    function createCxtjField(cxtj, cxdy) {
        var field = {
            name: cxtj.lmc,
            fieldLabel: cxtj.tjmc,
            labelAlign: "right",
            fieldWidth: 125,
            //labelWidth 
            //width:FIELD_WIDTH,
            allowBlank: !(cxtj.tjxylx == "0"),// 必填
            hidden: cxtj.tjxylx == "3"// 隐藏
        };


        switch (cxtj.llx) {
            case "VARCHAR2":// 字符
                field.xtype = "textfield";
                field["maxLength"] = cxtj.maxlength;
                break;
            case "DATE":// 日期
                field.xtype = "datefield";
                field.format = cxtj.xsgs || "Y-m-d";
                field.submitFormat = cxtj.xsgs || "Y-m-d";

                break;
            case "NUMBER":// 数值
                field.xtype = "numberfield";
                field["maxLength"] = cxtj.maxlength;
                break;
            case "SELECT":// 单选
                field.xtype = "combobox";
                field.displayField = "mc";
                field.valueField = "dm";
                field.store = createCombStore(cxtj, cxdy.sjymc);
                field.minChars = 20;
                field.matchFieldWidth = false,
                //field["width"]=cxtj.zdykd;

				field.listConfig = {
				    width: (cxtj.zdykd == undefined || cxtj.zdykd == null || parseInt(cxtj.zdykd) < FIELD_LABLEWIDTH) ? FIELD_LABLEWIDTH : parseInt(cxtj.zdykd),
				    resizable: true,
				    loadMask: false
				};
                field.listeners = {
                    beforequery: function (evt) {
                        var comb = evt.combo,
							value = evt.query.replace(/(^\s*)|(\s*$)/g, ""),
							store = comb.getStore();

                        if (value) {
                            store.filterBy(function (record) {
                                return record.get(comb.displayField).indexOf(value) != -1;
                            });
                        } else {
                            store.clearFilter();
                        }
                    }
                };


                break;
            case "MULTI":// 多选
                // field.xtype = "combobox";
                field.xtype = "checkcombo";
                field.displayField = "mc";
                field.valueField = "dm";
                field.multiSelect = true;
                field["mode"] = 'local';
                field.matchFieldWidth = false,
                // field.editable = false;
				field.store = createCombStore(cxtj, cxdy.sjymc);
                field.minChars = 20;
                field.listConfig = {
                    width: (cxtj.zdykd == undefined || cxtj.zdykd == null || parseInt(cxtj.zdykd) < FIELD_LABLEWIDTH) ? FIELD_LABLEWIDTH : parseInt(cxtj.zdykd),
                    resizable: true,
                    loadMask: false
                };
                field.listeners = {
                    afterrender: function (evt) {
                        var store = evt.getStore();
                        store.load();
                    },
                    beforequery: function (evt) {
                        var comb = evt.combo,
							value = evt.query.replace(/(^\s*)|(\s*$)/g, ""),
							store = comb.getStore();

                        if (value) {
                            store.filterBy(function (record) {
                                return record.get(comb.displayField).indexOf(value) != -1;
                            });
                        } else {
                            store.clearFilter();
                        }

                    }
                };



                break;
            case "SINGLETREE":// 单选树
                field.xtype = "treeField";
                field.moreChecked = false;
                field.editable = false;
                field.autoScroll = true;
                field.baseParams = {
                    zdmrbz: 0,
                    tjlx: cxtj.llx,
                    sqlxh: cxtj.sqlxh,
                    uuid: cxtj.uuid,
                    zdycs: cxtj.zdycs
                };
                field.listConfig = {
                    resizable: true,
                    loadMask: false
                    // maxHeight:1000
                };

                break;
            case "TREE":// 多选树
                field.xtype = "treeField";
                field.moreChecked = true;
                field.editable = false;
                field.autoScroll = true;
                field.baseParams = {
                    zdmrbz: 0,
                    tjlx: cxtj.llx,
                    sqlxh: cxtj.sqlxh,
                    uuid: cxtj.uuid,
                    zdycs: cxtj.zdycs
                };
                field.listConfig = {
                    resizable: true,
                    loadMask: false
                    // maxHeight:1000
                };

                break;
            case "ORGTREE":// 机关-行政树
                field.xtype = "treeField";
                field.moreChecked = cxtj.xsgs == "0";
                field.editable = false;
                field.baseParams = {
                    zdmrbz: 1,
                    mrzxsbz: cxtj.mrzxsbz,
                    znxz: cxtj.znxz,
                    tjlx: cxtj.llx,
                    uuid: cxtj.uuid,
                    zdycs: cxtj.zdycs
                };
                field.listConfig = {
                    resizable: true,
                    loadMask: false
                    // maxHeight:1000
                };

                break;
            case "ZNJGTREE":// 机关-职能树
                field.xtype = "treeField";
                field.moreChecked = cxtj.xsgs == "0";
                field.editable = false;
                field.baseParams = {
                    zdmrbz: 1,
                    znxz: cxtj.znxz,
                    tjlx: cxtj.llx,
                    uuid: cxtj.uuid,
                    mrzxsbz: cxtj.mrzxsbz
                };
                field.listConfig = {
                    resizable: true,
                    loadMask: false
                    // maxHeight:1000
                };

                break;
            case "SWSSELECT":// 税务所-单选
                field.xtype = "combobox";
                field.displayField = "mc";
                field.valueField = "dm";
                field.store = createCombStore(cxtj, cxdy.sjymc);
                field.minChars = 20;
                field.matchFieldWidth = false,
				field.listeners = {
				    beforequery: function (evt) {
				        var comb = evt.combo,
							value = evt.query.replace(/(^\s*)|(\s*$)/g, ""),
							store = comb.getStore();

				        if (value) {
				            store.filterBy(function (record) {
				                return record.get(comb.displayField).indexOf(value) != -1;
				            });
				        } else {
				            store.clearFilter();
				        }
				    }
				};
                field.listConfig = {
                    width: (cxtj.zdykd == undefined || cxtj.zdykd == null || parseInt(cxtj.zdykd) < FIELD_LABLEWIDTH) ? FIELD_LABLEWIDTH : parseInt(cxtj.zdykd),
                    resizable: true,
                    loadMask: false
                };

                break;
            case "SWSDXSELECT":// 税务所-多选
                field.xtype = "checkcombo";
                field.displayField = "mc";
                field.valueField = "dm";
                field.multiSelect = true;
                field.editable = false;
                field.store = createCombStore(cxtj, cxdy.sjymc);
                field.matchFieldWidth = false,
				field.minChars = 20;
                field.listeners = {
                    beforequery: function (evt) {
                        var comb = evt.combo,
							value = evt.query.replace(/(^\s*)|(\s*$)/g, ""),
							store = comb.getStore();

                        if (value) {
                            store.filterBy(function (record) {
                                return record.get(comb.displayField).indexOf(value) != -1;
                            });
                        } else {
                            store.clearFilter();
                        }
                    }
                };
                field.listConfig = {
                    width: (cxtj.zdykd == undefined || cxtj.zdykd == null || parseInt(cxtj.zdykd) < FIELD_LABLEWIDTH) ? FIELD_LABLEWIDTH : parseInt(cxtj.zdykd),
                    resizable: true,
                    loadMask: false
                };

                break;
            case "SWJGTREE":// 机关树
                field.xtype = "treeField";
                field.moreChecked = cxtj.xsgs == "0";
                field.editable = false;
                field.baseParams = {
                    zdmrbz: 1,
                    znxz: cxtj.znxz,
                    tjlx: cxtj.llx,
                    jglx: cxtj.jglx,
                    jgcj: cxtj.jgcj,
                    swjgtreescgz: cxtj.swjgtreescgz,
                    mrzxsbz: cxtj.mrzxsbz,
                    uuid: cxtj.uuid,
                    zdycs: cxtj.zdycs
                };
                field.listConfig = {
                    resizable: true,
                    loadMask: false
                    // maxHeight:1000
                };

                break;
            case "HSJGTREE":// 核算机关树
                field.xtype = "treeField";
                field.moreChecked = cxtj.xsgs == "0";
                field.editable = false;
                field.baseParams = {
                    zdmrbz: 1,
                    znxz: cxtj.znxz,
                    tjlx: cxtj.llx,
                    mrzxsbz: cxtj.mrzxsbz,
                    uuid: cxtj.uuid,
                    zdycs: cxtj.zdycs
                };
                field.listConfig = {
                    resizable: true,
                    loadMask: false
                    // maxHeight:1000
                };

                break;
        }

        // 在切换分支条件值得时候,重设分组项目和指标项目的值，清册类分支语句，没有分组列和统计列
        if (cxtj.fzzdbz == "1" && cxtj.llx == "SELECT" && cxdy.cxlx != '1') {
            field.listeners.change = function (comb, newValue, oldValue, evt) {
                if (newValue != oldValue) {
                    var cxtjPanel = comb.ownerCt.ownerCt.ownerCt.ownerCt,
						mask = new Ext.LoadMask(Ext.getBody(), { msg: "请稍后..." });

                    mask.show();

                    Ext.Ajax.request({
                        url: ReqUtils.AddBizCode2URL("/download.sword.ashx?ctrl=CX301DzcxCtrl_getResultColumns"),
                        params: {
                            sqlxh: cxdy.sqlxh,
                            queryParams: Ext.JSON.encode(cxtjPanel.getQueryParams())
                        },
                        success: function (res) {


                            var columns,
								fzxmField = cxtjPanel.query("checkcombo[name='fzxm']")[0],
								zbxmField = cxtjPanel.query("checkcombo[name='zbxm']")[0],
								fzxmStore = fzxmField.getStore(),
								zbxmStore = zbxmField.getStore(),
								fzxmData = [],
								zbxmData = [],
								fzxmValues = [],
								zbxmValues = [],
								sjl = [];

                            try {
                                columns = Ext.JSON.decode(res.responseText);
                            } catch (e) {
                                columns = [];
                            }

                            for (var i = 0; i < columns.length; i++) {
                                var column = columns[i],
									sjlmc = column.sjlmc;

                                if (sjlmc) {
                                    sjl.push(sjlmc);
                                }
                            }

                            for (var i = 0; i < columns.length; i++) {
                                var column = columns[i],
									lmc = column.lmc,
									lms = column.lms,
									lx = column.llx;

                                if (column.jcbzdlx != "1") {
                                    if (lx == "VARCHAR2" && !Ext.Array.contains(sjl, lmc)) {
                                        fzxmData.push({
                                            dm: lmc,
                                            mc: lms
                                        });

                                        fzxmValues.push(lmc);

                                        continue;
                                    } else if (lx == "NUMBER" && !Ext.Array.contains(sjl, lmc)) {
                                        zbxmData.push({
                                            dm: lmc,
                                            mc: lms
                                        });

                                        zbxmValues.push(lmc);
                                    }
                                }
                            }


                            fzxmStore.loadData(fzxmData);
                            fzxmField.setValue(fzxmValues);

                            if (!fzxmField.isExpanded) {
                                fzxmStore.proxy.data = fzxmData;
                            }

                            zbxmStore.loadData(zbxmData);
                            zbxmField.setValue(zbxmValues);

                            if (!fzxmField.isExpanded) {
                                zbxmStore.proxy.data = zbxmData;
                            }

                            mask.hide();
                        }
                    });
                }
            };
        }
        return field;
    }

    function setParentCascade(cxtj) {
        for (var i = 0; i < cxtj.length; i++) {
            var tj = cxtj[i];

            if (tj.sjtjl) {
                var parentArray = tj.sjtjl.split("&"),
					field = Ext.ComponentQuery.query("cxtjPanel field[name=" + tj.lmc + "]")[0];

                for (var j = 0; j < parentArray.length; j++) {
                    var parentName = parentArray[j],
						parentField = Ext.ComponentQuery.query("cxtjPanel field[name=" + parentName + "]")[0];

                    parentField.on("change", (function (field) {
                        return function (self, newValue, oldValue) {
                            if (newValue != oldValue) {
                                field.clearValue();
                                field.getStore().load();
                            }
                        }
                    })(field));
                }

                field.getStore().on("beforeload", (function (field, parentArray) {
                    return function (store) {
                        var parentParams = {};

                        for (var j = 0; j < parentArray.length; j++) {
                            var parentField = Ext.ComponentQuery.query("cxtjPanel field[name=" + parentArray[j] + "]")[0],
								parentValue = parentField.getValue() || "";

                            parentParams[parentArray[j]] = Ext.isArray(parentValue) ? parentValue.join(",") : parentValue;
                        }

                        store.proxy.extraParams.parentParams = Ext.JSON.encode(parentParams);
                    }
                })(field, parentArray));
            }
        }
    }

    function createCombStore(cxtj, sjymc) {
        var
			zdycs = cxtj.zdycs,
			llx = cxtj.llx,
		    sqlxh = cxtj.sqlxh,
		    uuid = cxtj.uuid,
		    lmc = cxtj.lmc;
        if (sjymc == undefined) {
            sjymc = '';
        }
        return Ext.create("Ext.data.Store", {
            storeId: cxtj.lmc + "_store",
            buffered: false,
            fields: ["dm", "mc"],
            proxy: {
                type: "ajax",
                url: ReqUtils.AddBizCode2URL("/download.sword.ashx?ctrl=CX301DzcxCtrl_getCombData") + encodeURI("&zdycs=" + zdycs + "&sjymc=" + sjymc + "&llx=" + llx + "&uuid=" + uuid)
            }
        });
    }

    function createTimePanel(sqlxh) {
        Ext.Ajax.request({
            url: ReqUtils.AddBizCode2URL("/download.sword.ashx?ctrl=CX301DzcxCtrl_getDataTime"),
            params: { sqlxh: sqlxh },
            async: false,
            success: function (res) {
                var data = Ext.JSON.decode(res.responseText);

                if (data.jgsj || data.sjsj) {
                    var form = Ext.ComponentQuery.query("cxtjPanel form")[0],
						timePanel = {
						    xtype: "panel",
						    title: "数据时间",
						    layout: "column",
						    defaults: {
						        // columnWidth:.5,
						        columnWidth: 1 / 3,// 改成跟查询条件一样固定为3列了
						        border: 0,
						        bodyStyle: { border: 0 },
						        bodyPadding: 5
						    },
						    items: [{
						        items: []
						    }, {
						        items: []
						    }]
						};

                    if (data.jgsj) {
                        timePanel.items[0].items.push({
                            xtype: "displayfield",
                            name: "jgsj",
                            labelAlign: "right",
                            fieldLabel: "数据加工时间",
                            value: data.jgsj
                        });
                    }

                    if (data.sjsj) {
                        timePanel.items[1].items.push({
                            xtype: "displayfield",
                            labelAlign: "right",
                            name: "sjsj",
                            fieldLabel: "数据截止时间",
                            value: data.sjsj
                        });
                    }

                    form.add(timePanel);
                }
            }
        });
    }

    /**
	 * 在变更明细tab被点击的时候触发该方法,如果变更明细中没有值就获取填充
	 */
    function onChangeDetailsActivate() {
        var textarea = this.down("textareafield");

        if (!textarea.getValue()) {
            Ext.Ajax.request({
                url: ReqUtils.AddBizCode2URL("/download.sword.ashx?ctrl=CX301DzcxCtrl_getChangeDetails"),
                params: { sqlxh: window.cxdy.sqlxh },
                success: function (res) {
                    textarea.setValue(res.responseText);
                }
            });
        }
    }

    function onPanelResize(cmp, width, height, oldWidth, oldHeight) {
        var fields = cmp.query("field"),
			// count = cmp.items.items[0].items.length,
			count = 3,
			fieldWidth = (width / count) - 10;

        for (var i = 0; i < fields.length; i++) {
            var field = fields[i],
				name = field.name;

            // 因为这4个都是固定的2列,所以不调整它们的宽度
            if (name != "sjsj" && name != "jgsj" && name != "fzxm" && name != "zbxm") {
                field.setWidth(fieldWidth < FIELD_WIDTH ? fieldWidth : FIELD_WIDTH);
            }
        }
    }

    function setCookieData(name, data) {
        var exp = new Date();

        exp.setTime(exp.getTime() + (1000 * 60 * 60 * 24 * 365 * 10));// cookie保存10年
        document.cookie = name + "=" + escape(Ext.JSON.encode(data)) + ";expires=" + exp.toGMTString();
    }

    function getCookieData(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return Ext.JSON.decode(unescape(arr[2]));
        else
            return null;
    }

    /**
	 * base64加密val串
	 */
    function base64Encode(str) {
        var b = new Base64();
        return b.encode(str);
    }

})(Ext);