Ext.Loader.setPath("Ext.ux.grid", "/ods/scripts/ext/ux");
Ext.Loader.setPath("Ext.ux.data", "/ods/scripts/ext/ux");
Ext.require(["Ext.ux.grid.HeaderToolTip", "Ext.ux.data.PagingMemoryProxy"]);
var MAX_TABS = 10;
(function (Ext) {
    var SUMMARY_TYPE_MAPPING = {
        "2": "sum",
        "3": "average"
    };
    var ALIGN_MAPPING = {
        "0": "left",
        "1": "center",
        "2": "right"
    };
    var COLUMN_TYPE_MAPPING = {
        "VARCHAR2": "string",
        "NUMBER": "number",
        "DATE": "date"
    };
    Ext.define("Dzcx.CxjgGrid", {
        extend: "Ext.grid.Panel",
        alias: "widget.cxjgGrid",
        title: "查询结果",
        selModel: Ext.create('Ext.selection.RowModel', { mode: "MULTI" }),
        viewConfig: {
            loadMask: false,
            enableTextSelection: true
        },
        columnLines: true,
        loaded: false,
        initComponent: function () {
            var self = this;
            var hjxsbz = self.cxdy.hjxsbz;
            var sjymc = self.sjymc;
            self.features = hjxsbz == '0' ? '' : [{
                ftype: "summary"
            }];
            if (self.cxdy.cxlx == "3") {// 交叉表单独处理,因为取表头和数据是一次完成
                initData.call(self, self.cxdy, self.queryParams);
            } else {
                self.columns = createColumns.call(self, self.cxdy,
						self.queryParams);// 该方法会在this中写入resultColumns的结果列定义列表
                self.store = createGridStore.call(self, self.cxdy, sjymc);
            }

            if (self.cxdy.fybj == "0") {
                self.bbar = createPagingtoolbar.call(self);
            }

            self.callParent(arguments);
        },

        listeners: {
            afterrender: function () {
                var self = this, columns = self.resultColumns;
                if (self.cxdy.cxfl != "2") {// 新增查询分类（局端，纳税人端），如果是局端，查询结果中有DJXH,NSRSBH，右键一户式链接
                    // add by jinln 2015/11/4 11:15
                    // 如果结果列中存在djxh或者nsrsbh就要注册右键监听来弹出右键菜单下钻到一户式
                    for (var i = 0; i < columns.length; i++) {
                        if (columns[i].lmc == "DJXH"
								|| columns[i].lmc == "NSRSBH") {
                            self.on("itemcontextmenu", drillYhsContextmenu);

                            break;
                        }
                    }
                } else {//如果是纳税人端查询，右键仅显示“一户式查询”，不显示 “一户式_含报验登记”
                    self.on("itemcontextmenu", drillYhsContextmenuForNsrdcx);
                }

            },
            celldblclick: function (view, td, record, tr, i, e) {
                // ie下才能生效,并没有什么卵用
                var range = document.body.createTextRange();

                range.moveToElementText(td);
                range.select();
            }
        }
    });

    // ---------------------------------------------------------------------------------------------------------------------------------

    function createPagingtoolbar() {
        var self = this, store = self.store;

        return {
            xtype: "pagingtoolbar",
            store: store,
            displayInfo: true,
            displayMsg: "显示记录: {0} - {1}条  共: {2}条 ",
            emptyMsg: "",
            items: [
					"-",
					"每页",
					{
					    xtype: "numberfield",
					    value: store.pageSize,
					    cls: Ext.baseCSSPrefix + "tbar-page-number",
					    allowDecimals: false,
					    minValue: 1,
					    hideTrigger: true,
					    enableKeyEvents: true,
					    selectOnFocus: true,
					    width: store.pageSize.toString().length <= 3 ? 30
								: store.pageSize.toString().length * 8,
					    listeners: {
					        keydown: function (field, e) {
					            var k = e.getKey(), increment = e.shiftKey ? 10
										: 1;

					            if (k == e.RETURN) {
					                e.stopEvent();

					                var v = field.getValue(), pageNum = parseInt(
											v, 10);

					                if (!v || isNaN(pageNum)) {
					                    field.setValue(store.pageSize);
					                    return false;
					                }

					                if (pageNum > 100) {
					                    Ext.Msg.alert("警告", "每页条数不能大于100条!");
					                    return false;
					                }

					                pageNum = Math.min(Math.max(1, pageNum),
											store.totalCount);

					                field.setValue(pageNum);

					                store.pageSize = pageNum;
					                store.loadPage(1);
					            }
					        }
					    }
					}, "条"]
        };
    }

    function initData(cxdy, queryParams) {
        var self = this;

        Ext.Ajax
				.request({
				    url: ReqUtils
							.AddBizCode2URL("/download.sword?ctrl=CX301DzcxCtrl_executeJcb"),
				    params: {
				        sqlxh: self.cxdy.sqlxh,
				        cxfl: self.cxdy.cxfl,
				        sjaqjbjkbz: self.cxdy.sjaqjbjkbz,//数据安全级别监控标志
				        queryParams: base64Encode(Ext.JSON.encode(self.queryParams))
				    },
				    timeout: ((self.queryTimeout || 600) * 1000) + 10000,// 多10秒缓冲
				    async: false,
				    success: function (res) {
				        var result = Ext.JSON.decode(res.responseText), cols = result.resultColumns, columns, fields = [];
				        for (var i = 0; i < cols.length; i++) {
				            if (cols[i].sjlmc) {
				                a: for (var j = 0; j < cols.length; j++) {
				                    if (cols[j].lmc == cols[i].sjlmc) {
				                        if (!cols[j].columns) {
				                            cols[j].columns = [];
				                        }

				                        cols[j].columns.push(cols[i]);

				                        break a;
				                    }
				                }
				            }
				        }

				        var temp = [];

				        for (var i = 0; i < cols.length; i++) {
				            if (!cols[i].sjlmc) {
				                temp.push(cols[i]);
				            }
				        }

				        columns = formatColumns(temp);
				        self.resultColumns = cols;
				        columns.splice(0, 0, {
				            xtype: "rownumberer",
				            header: "序号",
				            width: 50,
				            summaryRenderer: function () {
				                return "<b>合计</b>";
				            }
				        });
				        self.columns = columns;

				        for (var i = 0; i < result.resultColumns.length; i++) {
				            var column = result.resultColumns[i];

				            if (column.dmsql) {
				                fields.push(column.lmc + "_MC");
				            }

				            fields.push(column.lmc);
				        }

				        self.store = Ext.create("Ext.data.Store", {
				            storeId: "resultStore",
				            fields: fields,
				            data: result,
				            pageSize: (cxdy.fybj == "1" ? 999999 : parseInt(
									cxdy.myjls, 10)),
				            proxy: Ext.create("Ext.ux.data.PagingMemoryProxy",
									{
									    reader: {
									        type: "json",
									        totalProperty: "total",
									        root: "rows"
									    }
									})
				        });
				    }
				});
    }

    function createColumns(cxdy, queryParams) {
        var self = this, columns = [];

        Ext.Ajax
				.request({
				    url: ReqUtils
							.AddBizCode2URL("/download.sword.ashx?ctrl=CX301DzcxCtrl_getResultColumns"),
				    params: {
				        sqlxh: cxdy.sqlxh,
				        queryParams: Ext.JSON.encode(queryParams)
				    },
				    async: false,
				    success: function (res) {
				        var cols = Ext.JSON.decode(res.responseText);

				        self.resultColumns = cols;
				        self.summaryParams = createSummaryParams(cols);

				        for (var i = 0; i < cols.length; i++) {
				            if (cols[i].sjlmc) {
				                a: for (var j = 0; j < cols.length; j++) {
				                    if (cols[j].lmc == cols[i].sjlmc) {
				                        if (!cols[j].columns) {
				                            cols[j].columns = [];
				                        }

				                        cols[j].columns.push(cols[i]);

				                        break a;
				                    }
				                }
				            }
				        }

				        var temp = [];

				        for (var i = 0; i < cols.length; i++) {
				            if (!cols[i].sjlmc) {
				                temp.push(cols[i]);
				            }
				        }

				        columns = formatColumns(temp);

				        columns.splice(0, 0, {
				            xtype: "rownumberer",
				            header: "序号",
				            width: 50,
				            summaryRenderer: function () {
				                return "<b>合计</b>";
				            }
				        });
				    }
				});

        return columns;
    }

    function formatColumns(cols) {
        var columns = [];

        for (var i = 0; i < cols.length; i++) {
            var col = cols[i], column = {
                header: col.lms,
                dataIndex: col.lmc,
                align: ALIGN_MAPPING[col.dqfs || "0"],
                hidden: col.ycbj == "1",
                locked: col.sdbj == "1",
                // hideMode:"display",
                menuDisabled: true,
                draggable: false,
                tooltip: col.lms
            };

            if (col.columns) {
                column.columns = formatColumns(col.columns);
            } else {
                // 只有最底层的数据列才设置宽度
                column.width = parseInt(col.lkd || 100, 10);
                if (self.cxdy.hjxsbz != '0') {
                    // 处理页脚合计平均
                    if (col.tjlx == "2" || col.tjlx == "3") {
                        column.summaryType = SUMMARY_TYPE_MAPPING[col.tjlx];
                        column.summaryRenderer = (function (col) {
                            return function () {
                                var store = Ext.data.StoreManager
										.lookup("resultStore"), summary = store.proxy.reader.jsonData.summary
										|| {}, value = summary[col.lmc] || 0;

                                if (col.xsgs && col.llx == "NUMBER") {
                                    if (col.xsgs.indexOf("%") != -1) {
                                        value = value * 100;
                                    }

                                    // 跟列的格式化方式一样
                                    value = Ext.util.Format.number(value,
											col.xsgs);
                                }

                                return "<b>" + value + "</b>";
                            };
                        })(col);
                    }
                }
                // 判断该列是否是代码转名称列,如果是的话就新建一列然后把原始代码列隐藏掉,新列的dataIndex为原始的+_MC
                if (col.dmsql) {
                    var dmColumn = Ext.clone(column);
                    dmColumn.hidden = true;
                    dmColumn.header = dmColumn.header + "_DM";
                    columns.push(dmColumn)
                    column.realdata = column.dataIndex;// 如果是代码转名称的排序，增加realdata，用于排序
                    column.dataIndex = column.dataIndex + "_MC";
                    column.dmsql = col.dmsql;

                }

                // 判断是否在查询之前选择了结果列的显示
                var jglWindow = Ext.ComponentQuery.query("jglWindow");

                if (jglWindow.length > 0) {
                    var showColumns = jglWindow[0].showColumns || [], hiddenColumns = jglWindow[0].hiddenColumns
							|| [];

                    if (Ext.Array.contains(showColumns, column.dataIndex)) {
                        column.hidden = false;
                    }

                    if (Ext.Array.contains(hiddenColumns, column.dataIndex)) {
                        column.hidden = true;
                    }
                }

                // 处理显示格式,下钻,提示
                column.renderer = (function (col) {
                    return function (value, meta, record) {
                        value = (value === null || value === undefined) ? ""
								: value;
                        //解决数据中包含连续多个空格，但只显示一个空格问题，解决方法：把空格用正则替换为"&#160;"   modify by mahongtao 2017-7-19
                        //日期不做该处理。否则会出现日期格式错误。
                        if (col.llx != "DATE") {
                            value = value.replace(/\s/g, "&#160;");
                        }
                        // 处理列显示格式
                        if (col.llx == "NUMBER") {
                            if (col.xsgs) {
                                if (col.xsgs.indexOf("%") != -1) {
                                    value = value * 100;
                                }

                                value = Ext.util.Format.number(value, col.xsgs);
                            }
                        } else if (col.llx == "DATE") {
                            // 因为ie中只能处理2015/01/01这种格式,而且时间00:00:00.0也不行,所以要处理一下,狗日的渣渣ie
                            value = Ext.util.Format
									.date(value.replace(/.0$/, "").replace(
											/-/g, "/"), col.xsgs || "Y-m-d");
                        }

                        // 添加单元格提示
                        meta.tdAttr = "data-qtip='" + (value || "") + "'";

                        // 处理下转,下钻参数列条件覆盖选的条件(有点优化,不应该在renderer中处理,影响效率)
                        if (col.url) {
                            var drillParams = {}, grid = Ext.ComponentQuery
									.query("cxjgGrid")[0], queryParams = grid.queryParams, resultColumns = grid.resultColumns, url = col.url, xzcs = (col.xzcs || "")
									.split("&");
                            for (var i = 0; i < queryParams.length; i++) {
                                var param = queryParams[i];

                                // if(param.value){
                                drillParams[param.name] = param;
                                // }
                            }

                            for (var i = 0; i < xzcs.length; i++) {
                                a: for (var j = 0; j < resultColumns.length; j++) {
                                    var param = resultColumns[j];
                                    var real_value = "";
                                    if (xzcs[i] == param.lmc) {
                                        if (param.llx == "DATE") {// 日期型不能传入格式为：2015-01-01
                                            // 00：00：:00这样，只能截取2015-01-01这样传入
                                            real_value = Ext.util.Format
													.date(
															record
																	.get(
																			param.lmc)
																	.replace(
																			/.0$/,
																			"")
																	.replace(
																			/-/g,
																			"/"),
															"Y-m-d")
                                        } else {
                                            real_value = record.get(param.lmc);
                                        }
                                        drillParams[param.lbm || param.lmc] = {
                                            name: param.lbm || param.lmc,
                                            value: real_value,
                                            displayValue: param.dmsql ? record
													.get(param.lmc + "_MC")
													: record.get(param.lmc),
                                            type: COLUMN_TYPE_MAPPING[param.llx]
                                        };

                                        break a;
                                    }
                                }
                            }

                            var params = [];

                            for (var k in drillParams) {
                                var param = drillParams[k];
                                if (param.value) {
                                    params.push(drillParams[k]);
                                }

                            }

                            if (url.indexOf("/") == -1
									&& url.indexOf("_") != -1) {// 跨系统查询下转的
                                var serviceName = url, serviceParam = [];

                                for (var i = 0; i < params.length; i++) {
                                    var param = params[i];

                                    serviceParam.push(param.name + "="
											+ param.value);
                                }
                                value = Ext.String
										.format(
												"<a href='javascript:void(0);' onclick=\"javascript:top.callserv('{0}','{1}')\">{2}</a>",
												serviceParam.join("&"),
												serviceName, value);

                            } else {// 普通查询下转的
                                // url = url + (url.indexOf("?") != -1 ? "&" :
                                // "?") ;
                                // url = url + (url.indexOf("?") != -1 ? "&" :
                                // "?") + "&execute=true";
                                var paramsEncode = encodeURI(encodeURI(base64Encode(Ext.JSON.encode(params))));

                                //如果paramsEncode中包含等于号，则将等于号转换为“0000000000”
                                //原因：因为在调用publicTab.js的newaddTabItem方法时，会根据等于号对参数进行split，获取参数名称和参数值，
                                //    如果参数值中包含等于号，那么就会解析错误，所有需要对等于号进行转换。
                                paramsEncode = convertEqual(paramsEncode);

                                var param = "drillParams=" + paramsEncode + "&execute=true";
                                // value = Ext.String.format("<a
                                // href='javascript:void(0);'
                                // onclick=\"openDrillUrl('{0}')\">{1}</a>",url,value);
                                // 增加param，电子税务局外网传内网参数过长，传参数方式更改。
                                value = Ext.String
										.format(
												"<a href='javascript:void(0);' onclick=\"openDrillUrl('{0}','','{2}')\">{1}</a>",
												url, value, param);

                            }
                        }

                        return value;
                    };
                })(col);
            }

            columns.push(column);
        }

        return columns;
    }

    window.openDrillUrl = function (url, title, param) {
        var host = window.location.host;
        if (url.indexOf("sqlmc=") > 0) {
            var tempStr = url.substring(url.indexOf("sqlmc=") + 6);
            if (tempStr.indexOf("&") == -1) {
                title = tempStr;
            } else {
                title = tempStr.substring(0, tempStr
                        .indexOf("&"));
            }
        }
        url = "http://" + host + url;
        var self = this;
        var xzcxbj = self.cxdy.xzcxbj;
        var parent = window.parent;
        // 只往上面找5层父页面,如果还没有可供调用的添加tab方法,就open
        //		for ( var i = 0; i < 5; i++) {
        //			if (xzcxbj == 'on') {// on的情况目前只是电子税务局用
        //				if (parent.newaddTabItem) {
        //					break;
        //				}
        //			} else {
        //				if (parent.addTabItem) {
        //					break;
        //				}
        //			}
        //		}
        // 对于外网查询，在执行下转查询时需要调用newaddTabItem（电子税务局门户添加到方法），此方法是按照submmit方式提交，可传递大量数据
        var addTabItemFun = "";
        if (xzcxbj == 'on') {
            addTabItemFun = "parent.newaddTabItem || top.newaddTabItem";
            addTabItemParam = {
                id: url + new Date(),
                title: title || "下转查询",
                src: ReqUtils.AddBizCode2URL(url),
                tempData: param
            };
        } else {
            addTabItemFun = "parent.addTabItem || top.addTabItem";
            url = url + '&' + param;
            addTabItemParam = {
                id: url + new Date(),
                title: title || "下转查询",
                src: ReqUtils.AddBizCode2URL(url)
            };
        }
        try {
            if (!title) {
                if (url.indexOf("sqlxh=") != -1) {
                    var sqlxh = unescape(url.match(new RegExp(
							"(^|&)sqlxh=([^&]*)(&|$)", "i"))[2]);
                    if (sqlxh) {
                        Ext.Ajax
								.request({
								    url: ReqUtils
											.AddBizCode2URL("/download.sword.ashx?ctrl=CX301DzcxCtrl_getCxdy"),
								    params: {
								        sqlxh: sqlxh
								    },
								    async: false,
								    success: function (res) {
								        try {
								            cxdy = Ext.JSON
													.decode(res.responseText);
								            title = cxdy.sqlmc;
								            addTabItemParam.title = title;
								        } catch (e) {
								            Ext.Msg.alert("警告", "解析获取的查询定义失败!");
								        }
								    },
								    failure: function () {
								        Ext.Msg.alert("警告", "获取查询定义失败!");
								    }
								});
                    }
                } else if (url.indexOf("CX902ZtcxzxCtrl") != -1) {
                    addTabItemParam.title = "一户式查询";
                }
            }
            if (eval(addTabItemFun)) {

                (eval(addTabItemFun))(addTabItemParam);
            } else {
                if (xzcxbj == 'on') {// 如果xzcxbj='on',url中拼接参数
                    url = url + '&' + param;
                }
                url = url + '&urlbj=1';// 增加urlbj，为了ctrl端解析一次。解析两次有问题
                //				openPostWindow(url, param, '1');
                addTabItem2(url, title);
            }
        } catch (e) {
            if (xzcxbj == 'on') {// 如果xzcxbj='on',url中拼接参数
                url = url + '&' + param;
            }
            url = url + '&urlbj=1';// 增加urlbj，为了ctrl端解析一次。解析两次有问题
            //			openPostWindow(url, param, '1');
            addTabItem2(url, title);
        }

    }

    function addTabItem2(url, title) {
        var self = this;
        var tabs = window.parent.Ext.getCmp("tabs");

        if (tabs.items.length - 1 == MAX_TABS) {
            Ext.Msg.alert("提示", "系统最多只可打开" + MAX_TABS + "个查询!");
            return;
        }

        var tab = Ext.getCmp(url) || tabs.add({
            id: url + new Date(),
            title: title,
            closable: "true",
            html: "<iframe src='" + ReqUtils.AddBizCode2URL(url) + "' width='100%' height='100%' frameborder='0' marginheight='0' marginwidth='0'></iframe>",
            listeners: {
                beforedestroy: function (panel) {
                    var el = window.parent.document.getElementById(panel.getId() + "-innerCt").firstChild;

                    if (el) {
                        el.src = "about:blank";

                        try {
                            var iframe = el.contentWindow;
                            iframe.document.write("");
                            iframe.close();
                        } catch (e) {

                        }

                        el.parentNode.removeChild(el);
                    }

                    panel.html = null;
                    tabs.remove(panel);
                }
            }
        });

        tabs.setActiveTab(tab);
    }
    function openPostWindow(url, data, name) {
        var tempForm = document.createElement("form");
        tempForm.id = "tempForm1";
        tempForm.method = "post";
        tempForm.action = url;
        tempForm.target = name;
        var hideInput = document.createElement("input");
        hideInput.type = "hidden";
        hideInput.name = "content"
        hideInput.value = data;
        tempForm.appendChild(hideInput);
        tempForm.attachEvent("onsubmit", function () {
            openWindow(name);
        });
        document.body.appendChild(tempForm);
        tempForm.fireEvent("onsubmit");
        tempForm.submit();
        document.body.removeChild(tempForm);
    }

    function openWindow(name) {
        window
				.open(
						'about:blank',
						name,
						'height=600, width=1000, top=0, left=0, toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes,location=yes, status=yes');
    }
    function createSummaryParams(cols) {
        var params = [];

        for (var i = 0; i < cols.length; i++) {
            var col = cols[i];

            if (col.tjlx == "2" || col.tjlx == "3") {
                params.push({
                    name: col.lmc,
                    summaryType: SUMMARY_TYPE_MAPPING[col.tjlx]
                });
            }
        }

        return params;
    }

    function createGridStore(cxdy, sjymc) {
        var self = this, fields = [], columns = self.resultColumns, mask = new Ext.LoadMask(
				Ext.getBody(), {
				    msg: "正在查询,请稍后..."
				});

        for (var i = 0; i < columns.length; i++) {
            var column = columns[i];

            if (!column.columns) {
                fields.push({
                    name: column.lmc
                });

                if (column.dmsql) {
                    fields.push({
                        name: column.lmc + "_MC"
                    });
                }
            }
        }

        Ext.define("resultModel", {
            extend: "Ext.data.Model",
            fields: fields
        });

        return Ext
				.create(
						"Ext.data.Store",
						{
						    storeId: "resultStore",
						    model: "resultModel",
						    remoteSort: true,
						    pageSize: (cxdy.fybj == "1" ? 999999 : parseInt(
									cxdy.myjls, 10)),
						    proxy: {
						        type: "ajax",
						        url: ReqUtils
										.AddBizCode2URL("/download.sword.ashx?ctrl=CX301DzcxCtrl_executeQuery"),
						        // simpleSortMode:true,
						        sortParam: "sortParams",
						        timeout: ((self.queryTimeout || 600) * 1000) + 10000,// 多10秒缓冲
						        reader: {
						            root: "rows",
						            totalProperty: "total",
						            messageProperty: "msg"
						        },
						        listeners: {
						            exception: function (response, operation) {
						                if (operation.timedout) {
						                    Ext.Msg.alert("提示", "查询超时");
						                } else {
						                    Ext.Msg.alert("提示", "查询失败");
						                }
						            }
						        }
						    },
						    listeners: {
						        beforeload: function (store) {
						            mask.show();

						            var code2Name = self.code2Name;

						            if (!code2Name) {
						                code2Name = [];

						                for (var i = 0; i < self.resultColumns.length; i++) {
						                    var column = self.resultColumns[i];

						                    if (column.dmsql) {
						                        code2Name.push({
						                            name: column.lmc,
						                            table: column.dmsql
						                        });
						                    }
						                }
						            }

						            Ext
											.apply(
													store.proxy.extraParams,
													{
													    sqlxh: cxdy.sqlxh,
													    cxfl: cxdy.cxfl,
													    sjaqjbjkbz: cxdy.sjaqjbjkbz, //数据安全级别监控标志
													    total: store
																.getTotalCount(),
													    doTotal: !self.loaded,
													    queryType: self.queryType,
													    summary: Ext.JSON
																.encode(self.summary),
													    summaryParams: Ext.JSON
																.encode(self.summaryParams),
													    queryParams: base64Encode(Ext.JSON.encode(self.queryParams)),
													    wrapParams: Ext.JSON
																.encode({
																    resultQueryParams: self.resultQueryParams
																}),
													    code2Name: Ext.JSON
																.encode(code2Name),
													    sjymc: sjymc,
													    pagecount_bdxt: store.proxy.reader.jsonData == undefined ? 1 : store.proxy.reader.jsonData.pagecount_bdxt,
													    total_bdxt: store.proxy.reader.jsonData == undefined ? 1 : store.proxy.reader.jsonData.total_bdxt

													});
						        },
						        load: function (store, records, successful,
										operation) {
						            mask.hide();

						            var data = store.proxy.reader.jsonData;

						            if (data.failMsg) {
						                Ext.MessageBox.show({
						                    title: "查询失败",
						                    width: 500,
						                    multiline: true,
						                    msg: "错误信息:",
						                    value: data.failMsg,
						                    buttons: Ext.Msg.OK,
						                    icon: Ext.Msg.ERROR
						                });
						            } else {
						                self.summary = data.summary;
						                self.loaded = true;

						                mergeCells();
						            }
						        }
						    }
						});
    }

    function mergeCells() {
        var grid = Ext.ComponentQuery.query("cxjgGrid")[0], mergeColumnNames = [], mergeColumns = [], hasLockedColumns;// 是否存在锁定行,有锁定行的时候数据会被放到两个table中,取tr的时候跟普通的不一样

        for (var i = 0; i < grid.resultColumns.length; i++) {
            if (grid.resultColumns[i].dyghbbj == "1") {
                var column = grid.resultColumns[i], lmc = column.dmsql ? column.lmc
						+ "_MC"
						: column.lmc;

                mergeColumnNames.push(lmc);
            }

            if (grid.resultColumns[i].sdbj == "1") {
                hasLockedColumns = true;
            }
        }

        for (var i = 0; i < grid.columns.length; i++) {
            var column = grid.columns[i];

            if (Ext.Array.contains(mergeColumnNames, column.dataIndex)) {
                mergeColumns.push("x-grid-cell-" + column.getId());
            }
        }

        if (mergeColumns.length > 0) {
            var merge = function (mergeColumns, rows) {
                for (var i = 0; i < mergeColumns.length; i++) {
                    var columnClass = mergeColumns[i], mergeCells = [];

                    for (var j = 0; j < rows.length; j++) {
                        var cells = rows[j].getElementsByTagName("td");

                        a: for (var k = 0; k < cells.length; k++) {
                            var cell = cells[k];

                            if (cell.className.match(new RegExp("(\\s|^)"
									+ columnClass + "(\\s|$)"))) {
                                mergeCells.push(cell);

                                break a;
                            }
                        }
                    }

                    var tmpValue, tmpIndex = 0;

                    for (var j = 0; j < mergeCells.length; j++) {
                        var value = mergeCells[j].firstChild.innerHTML;

                        if (tmpValue == value) {
                            ++tmpIndex;

                            if (j == mergeCells.length - 1) {
                                ++j;
                            } else {
                                continue;
                            }
                        } else {
                            tmpValue = value;
                        }

                        if (tmpIndex > 0) {
                            for (var k = 1; k <= tmpIndex; k++) {
                                mergeCells[j - k].style.display = "none";
                            }

                            mergeCells[j - tmpIndex - 1].rowSpan = tmpIndex + 1;
                            tmpIndex = 0;
                        }
                    }
                }
            };

            if (hasLockedColumns) {
                var lockedRows = document.getElementById(grid.getId()
						+ "-locked-body").firstChild.firstChild.lastChild
						.getElementsByTagName("tr"), normalRows = document
						.getElementById(grid.getId() + "-normal-body").firstChild.firstChild.lastChild
						.getElementsByTagName("tr");

                merge(mergeColumns, lockedRows);
                merge(mergeColumns, normalRows);
            } else {
                var rows = document.getElementById(grid.getId() + "-body").firstChild.firstChild.lastChild
						.getElementsByTagName("tr");

                merge(mergeColumns, rows);
            }
        }
    }

    function drillYhsContextmenu(view, record, el, i, e) {
        var djxh = record.get("DJXH"), nsrsbh = record.get("NSRSBH");

        e.preventDefault();

        //		var items = [], yhsZtlxDm = cxdy.yhsZtlxDm;
        //		var url = "/sword?ctrl=CX902ZtcxzxCtrl_initView&ztlxDm=" + yhsZtlxDm, + "&";

        var items = [], url = "/sword?ctrl=CX902ZtcxzxCtrl_initView&ztlxDm=01&";
        //如果不传参数，在调用openDrillUrl中的newaddTabItem方法时会报错，所以传递一个无用的参数
        var param = "param0000000001=1";
        if (djxh) {
            items.push({
                text: "一户式查询",
                icon: "/ods/images/columns.gif",
                handler: function () {
                    url += "XHMC=DJXH&DJXH=" + base64Encode(djxh);

                    openDrillUrl(url, "一户式查询", param);
                }
            });
        }

        if (nsrsbh) {
            items.push({
                text: "一户式查询_含报验户",
                icon: "/ods/images/columns.gif",
                handler: function () {
                    url += "XHMC=NSRSBH&NSRSBH=" + base64Encode(nsrsbh);

                    openDrillUrl(url, "一户式查询_含报验户", param);
                }
            });
        }

        if (items.length > 0) {
            Ext.create("Ext.menu.Menu", {
                items: items
            }).showAt(e.getXY());
        }
    }

    /**
	 * 纳税人端查询添加一户式右键菜单
	 */
    function drillYhsContextmenuForNsrdcx(view, record, el, i, e) {
        e.preventDefault();
        var items = [], url = "/sword?ctrl=CX902ZtcxzxCtrl_initView&ztlxDm=01&";
        //如果不传参数，在调用openDrillUrl中的newaddTabItem方法时会报错，所以传递一个无用的参数
        var param = "param0000000001=1";
        items.push({
            text: "一户式查询",
            icon: "/ods/images/columns.gif",
            handler: function () {
                url += "XHMC=DJXH";
                openDrillUrl(url, "一户式查询", param);
            }
        });
        Ext.create("Ext.menu.Menu", {
            items: items
        }).showAt(e.getXY());
    }

    // -------------------------------------------------------------------------------------------------------------------------------------------------
    // 实现列头居中
    Ext.grid.Column.override({
        afterRender: function () {
            this.callParent(arguments);
            this.el.addCls(Ext.baseCSSPrefix + "column-header-align-center")
					.addClsOnOver(this.overCls);
        },
        getSortParam: function () {
            if (this.dmsql) {// 如果是代码转名称的排序，取realdata，如果不是则去dataIndex
                return this.realdata;
            } else {
                return this.dataIndex;
            }
        }
    });

    /**
	 * base64加密val串
	 */
    function base64Encode(str) {
        var b = new Base64();
        return b.encode(str);
    }

    /**
	 * 将字符串中的"="替换为"**********"
	 */
    function convertEqual(str) {
        str = str.replace(/=/g, "**********");
        return str;
    }
})(Ext);