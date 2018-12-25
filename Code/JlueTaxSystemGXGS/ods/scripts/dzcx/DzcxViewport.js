Ext.Loader.setPath("Dzcx", "/ods/scripts/dzcx");
Ext.require(["Dzcx.CxtjPanel", "Dzcx.CxjgGrid", "Dzcx.BbPanel"]);

(function (Ext) {
    Ext.define("Dzcx.DzcxViewport", {
        extend: "Ext.container.Viewport",
        alias: "widget.dzcxViewport",
        layout: "fit",

        initComponent: function () {
            var self = this, cxdy = window.cxdy = getCxdy(self.sqlxh);
            self.items = [{
                layout: "accordion",
                border: 0,
                items: [{
                    title: "查询条件",
                    xtype: "cxtjPanel",
                    cxdy: cxdy
                }],
                tbar: createTbar.call(self, cxdy.buttons)
            }];

            self.callParent(arguments);
        },
        listeners: {
            // 这里检查是否需要直接执行查询
            afterrender: function () {
                var self = this;

                if (ReqUtils.getPageData("execute") == "true") {
                    setTimeout(function () {
                        self.executeQuery(cxdy.cxlx);
                    }, 0);
                }
            }
        },
        openSortWindow: _openSortWindow,
        executeQuery: _executeQuery,
        saveQueryParams: _saveQueryParams,
        resetQueryParams: _resetQueryParams,
        openStatisticWindow: _openStatisticWindow,
        openResultQueryWindow: _openResultQueryWindow,
        exportFile: _exportFile,
        openResultColumnsWindow: _openResultColumnsWindow,
        openFeedbackWindow: _openFeedbackWindow,
        openScoreWindow: _openScoreWindow,
        subscribe: _subscribe,
        viewSql: _viewSql,
        help: _help

    });

    /**
	 * 执行查询
	 * 说明：查询类型分为以下几种：1.普通查询,2.统计查询,3.交叉表查询,4.统计功能,5.查询结果查询,6.导出。其中4和5有wrapParams
	 */
    function _executeQuery(queryType, resultQueryParams) {
        var self = this;
        var queryParams = getQueryParams(ReqUtils.getPageData("execute") == "false");// 在下钻(execute)查询时就不校验查询条件了
        var sjymc = ReqUtils.getPageData("sjymc");
        // 页面布局：1 显示单一报表，2 左-上下布局
        var pagelayout = ReqUtils.getPageData("pagelayout");
        var gwssswjg = ReqUtils.getPageData("gwssswjg");
        var gwxh = ReqUtils.getPageData("gwxh");

        if (queryType == '4') {
            bbPanel = self.down("BbPanel");
            var mask;
            var queryparam = '';
            if (!queryParams) {
                return;
            }
            mask = new Ext.LoadMask(Ext.getBody(), {
                msg: "正在查询,请稍后..."
            });
            mask.show();
            if (queryParams != null) {
                for (var i = 0; i < queryParams.length; i++) {
                    queryparam = queryparam + '&' + queryParams[i].name + '='
							+ queryParams[i].value;
                }
            }
            // queryparam报表参数格式如下： '&TJNY=201510&SWJG=00000000000';
            if (bbPanel) {
                bbPanel.destroy();
            }
            // 页面布局1 显示单一报表，2 左-上下布局，3左-右布局
            var pagelayout = ReqUtils.getPageData("pagelayout");
            setTimeout(function () {
                bbPanel = self.items.items[0].add({
                    xtype: "BbPanel",
                    queryparam: queryparam,
                    bbmc: cxdy.sqlstr,
                    sjylx: cxdy.sjylx,
                    pagelayout: pagelayout,
                    gwssswjg: gwssswjg,
                    gwxh: gwxh
                });
                bbPanel.expand(true);
                if (mask) {
                    mask.hide();
                }
            }, 10);
        } else {
            var cxjgGrid = self.down("cxjgGrid");
            var tjWindow = Ext.ComponentQuery.query("tjWindow");
            var mhcxWindow = Ext.ComponentQuery.query("mhcxWindow");
            var mask;
            if (!queryParams) {
                return;
            }
            // 每一次点击执行查询都要情况所有上次查询的痕迹
            // 销毁查询结果grid
            if (cxjgGrid) {
                cxjgGrid.destroy();
            }

            // 销毁统计window
            if (tjWindow.length > 0) {
                tjWindow[0].destroy();
            }

            // 销毁结果查询window
            if (!resultQueryParams && mhcxWindow.length > 0) {
                mhcxWindow[0].destroy();
            }

            if (queryType == "3") {// 因为交叉表取数据async要设成false,所以只能这样来处理请求等待mask
                mask = new Ext.LoadMask(Ext.getBody(), {
                    msg: "正在查询,请稍后..."
                });
                mask.show();
            }

            setTimeout(function () {
                // 构建新的查询结果grid
                cxjgGrid = self.items.items[0].add({
                    xtype: "cxjgGrid",
                    cxdy: getCxdy(self.sqlxh),
                    queryType: queryType || "1",// 默认的查询类型是1清册查询
                    queryParams: queryParams,
                    resultQueryParams: resultQueryParams || [],
                    sjymc: sjymc
                });

                cxjgGrid.getStore().loadPage(1);
                cxjgGrid.expand(true);

                if (mask) {
                    mask.hide();
                }
            }, 10);
        }
    }

    /*
     * 打开保存查询条件窗口
     * @memberOf {TypeName} 
     */
    function _saveQueryParams() {
        var self = this;
        Ext.require("Dzcx.ZdytjsaveWindow", function () {
            cxtjPanel = self.down("cxtjPanel")
            displayForm(cxtjPanel)
        })
    }

    function _resetQueryParams() {
        var self = this, cxtjPanel = self.down("cxtjPanel");

        cxtjPanel.resetQueryParams();
    }

    function _openStatisticWindow() {
        var self = this, queryParams = getQueryParams(true);

        if (!queryParams) {
            return;
        }

        var w = Ext.ComponentQuery.query("tjWindow");

        if (w.length == 0) {
            Ext.require("Dzcx.TjWindow", function () {
                Ext.widget("tjWindow", {
                    sqlxh: window.cxdy.sqlxh,
                    queryParams: queryParams
                }).show();
            });
        } else {
            w[0].show();
        }
    }

    function _openSortWindow() {

        var pxWindow = Ext.ComponentQuery.query("pxWindow");	//基于xtype查找组件,如果没有，创建；如存在，直接显示；wang
        if (pxWindow.length == 0) {
            Ext.require("Dzcx.PxWindow", function () {		//	动态加载组件，只加载这个组件；在函数执行前加载
                Ext.widget("pxWindow", {					//	创建组件,和create类似，可用于xtype属性；
                    sqlxh: window.cxdy.sqlxh
                }).show();
            });
        } else {
            pxWindow[0].show();
        }
    }

    function _openResultQueryWindow() {
        var self = this, sqlxh = window.cxdy.sqlxh, queryParams = getQueryParams(true);

        if (!queryParams) {
            return;
        }

        var w = Ext.ComponentQuery.query("mhcxWindow");

        if (w.length == 0) {
            Ext.require("Dzcx.MhcxWindow", function () {
                Ext.widget("mhcxWindow", {
                    sqlxh: sqlxh,
                    queryParams: queryParams
                }).show();
            });
        } else {
            w[0].show();
        }
    }

    function _exportFile(fileType, queryType) {
        if (queryType == '4') {
            if (document.frames['bbFrame']) {
                if (fileType == 'excel') {
                    document.frames['bbFrame'].exportExcel('report1');
                } else if (fileType == 'word') {
                    document.frames['bbFrame'].exportWord('report1');
                } else if (fileType == 'pdf') {
                    document.frames['bbFrame'].exportPdf('report1');
                }
            } else {
                Ext.Msg.alert("温馨提示", "请查询后再点击导出，谢谢！");
            }
            return false;
        } else {
            var self = this, cxdy = window.cxdy, cxfl = cxdy.cxfl, exportCsz = cxdy.exportCsz, queryParams = getQueryParams(true);

            if (!queryParams) {
                return;
            }

            if (!exportCsz) {
                Ext.Ajax
						.request({
						    url: ReqUtils
									.AddBizCode2URL("/download.sword?ctrl=CX301DzcxCtrl_getExportCsz"),
						    async: false,
						    success: function (res) {
						        window.cxdy.exportCsz = exportCsz = Ext.JSON
										.decode(res.responseText);
						    }
						});
            }

            var current = new Date(), YMD = current.getFullYear() + "/"
					+ (current.getMonth() + 1) + "/" + current.getDate(), startTime = new Date(
					YMD + " " + exportCsz.START_TIME), endTime = new Date(YMD
					+ " " + exportCsz.END_TIME), max, limit, workingTime;

            // if(startTime <= current <= endTime){//工作时间
            // debugger;
            // max = cxdy.exportmax || exportCsz.MAXNROW_WORKING;
            // workingTime = "工作时间";
            // }else{//非工作时间
            // max = exportCsz.MAXNROW;
            // workingTime = "非工作时间";
            // }
            // //如果单个文件的大小比总大小大,就把单个文件的大小改成总大小,先不管会有逗比设成65535的情况
            // limit = max < exportCsz.FILE_EXCEL_MAXNROW ? max :
            // exportCsz.FILE_EXCEL_MAXNROW;
            var msg = "";
            if (fileType == 'zip') {
                if (startTime <= current && current <= endTime) {// 工作时间
                    max = cxdy.exportmax || exportCsz.MAXNROW_WORKING;
                    workingTime = "工作时间";
                } else {// 非工作时间
                    max = exportCsz.MAXNROW;
                    workingTime = "非工作时间";
                }
                msg = "导出可能需要一段时间,确定导出吗?<br/>" + "工作时间为:"
						+ exportCsz.START_TIME + "-" + exportCsz.END_TIME
						+ "<br/>" + "目前是" + workingTime + ",允许最大导出条数为:" + max
						+ "条";
            } else {
                if (cxdy.exportmax != null) {
                    if (cxdy.exportmax < exportCsz.FILE_EXCEL_MAXNROW) {
                        max = cxdy.exportmax;
                        msg = "导出可能需要一段时间，确定导出吗?<br/>本查询自定义了导出最大数，最多可导出：" + max
								+ "条数据";
                    } else {
                        max = exportCsz.FILE_EXCEL_MAXNROW;
                        msg = "导出可能需要一段时间，确定导出吗?<br/>本查询自定义的导出数超过系统设置的每页允许导出最大数，系统允许导出："
								+ max + "条数据";

                    }
                } else {
                    max = exportCsz.FILE_EXCEL_MAXNROW;
                    msg = "导出可能需要一段时间,确定导出吗?<br/>" + "本查询按系统设置，最多可导出:" + max
							+ "条数据";
                }

            }
            Ext.Msg
					.confirm(
							"提示",
							msg,
							function (c) {
							    if (c == "yes") {
							        // 因为有可能下载文件需要很长时间，而submit是没有屏蔽罩的，由于是查询生成文件所占时间长，所以采用了分成2次请求
							        // 第1次展开屏蔽罩生成文件并返回文件路径然后关掉屏蔽罩，第2次请求才下载文件。
							        var mask = new Ext.LoadMask(
											queryType == "7" ? Ext.ComponentQuery
													.query("tjWindow")[0]
													: Ext.getBody(), {
													    msg: "正在生成导出文件,请稍后..."
													}), wrapParams = {};

							        mask.show();

							        wrapParams.resultQueryParams = getResultQueryParams();

							        if (queryType == "7") {
							            wrapParams.statisticParams = getStatisticParams();
							        }

							        var jglWindow = Ext.getCmp(self.getId()
											+ "_jglWindow"), hiddenColumns;

							        if (jglWindow) {
							            hiddenColumns = jglWindow.hiddenColumns;
							        }

							        // 然后加罩子生成文件,生成好后把文件id给我我再通过这个id去取文件最后关罩子
							        var sortParams = "";
							        var resultStore = Ext.data.StoreManager.lookup("resultStore");	//获取查询结果store
							        if (typeof (resultStore) != "undefined") {
							            sortParams = Ext.JSON.encode(resultStore.sorters.items);
							        }
							        Ext.Ajax
											.request({
											    url: ReqUtils
														.AddBizCode2URL("/download.sword?ctrl=CX301DzcxCtrl_generateExportFile"),
											    params: {
											        sqlxh: cxdy.sqlxh,
											        sortParams: sortParams,//将结果列中的排序参数传到后台
											        queryParams: Ext.JSON
															.encode(queryParams),
											        wrapParams: Ext.JSON
															.encode(wrapParams),
											        queryType: queryType,
											        cxfl: cxfl,
											        fileType: fileType,
											        max: max,
											        limit: limit,
											        hiddenColumns: Ext.JSON
															.encode(hiddenColumns)
											    },
											    timeout: 1000 * 60 * 60,
											    success: function (res) {
											        var filePath = res.responseText, form = Ext
															.getCmp("download");

											        if (!form) {
											            form = Ext
																.create(
																		"Ext.form.Panel",
																		{
																		    id: "download",
																		    standardSubmit: true
																		});
											        }

											        form
															.submit({
															    url: "/download.sword?ctrl=CX301DzcxCtrl_exportFile&filePath="
																		+ encodeURI(encodeURI(filePath))
															});

											        mask.hide();
											    },
											    failure: function () {
											        Ext.Msg.alert("错误", "请求失败："
															+ response.status);

											        mask.hide();
											    }
											});
							    }
							});
        }
    }

    function _openResultColumnsWindow() {
        var self = this;
        sqlxh = window.cxdy.sqlxh, queryParams = getQueryParams(true);

        if (!queryParams) {
            return;
        }

        var jglWindow = Ext.getCmp(self.getId() + "_jglWindow");

        if (!jglWindow) {
            Ext.require("Dzcx.JglWindow", function () {
                Ext.widget("jglWindow", {
                    id: self.getId() + "_jglWindow",
                    sqlxh: sqlxh,
                    queryParams: queryParams
                }).show();
            });
        } else {
            jglWindow.show();
        }
    }

    function _openFeedbackWindow() {
        var self = this, sqlxh = window.cxdy.sqlxh, queryParams, wrapParams = {
            resultQueryParams: getResultQueryParams()
        };

        queryParams = getQueryParams(true) || [];

        Ext.require("Dzcx.WtfkWindow", function () {
            Ext.widget("wtfkWindow", {
                sqlxh: sqlxh,
                queryParams: queryParams,
                wrapParams: wrapParams
            }).show();
        });
    }

    function _openScoreWindow() {
        var self = this, sqlxh = window.cxdy.sqlxh;

        Ext.require("Dzcx.CxpjWindow", function () {
            Ext.widget("cxpjWindow", {
                sqlxh: sqlxh
            }).show();
        });
    }

    function _subscribe() {
        var self = this, sqlxh = window.cxdy.sqlxh, queryParams = getQueryParams(true), wrapParams = {
            resultQueryParams: getResultQueryParams(),
            statisticParams: getStatisticParams()
        };

        if (!queryParams) {
            return;
        }

        var url = "/sword?ctrl=CX401DycxWhCtrl_addDycxDsrwView&sqlxh=" + sqlxh
				+ "&queryParams="
				+ encodeURI(encodeURI(Ext.JSON.encode(queryParams)))
				+ "&wrapParams="
				+ encodeURI(encodeURI(Ext.JSON.encode(wrapParams)));

        Ext
				.create(
						"Ext.window.Window",
						{
						    id: 'id',
						    title: "订阅",
						    height: 500,
						    width: 600,
						    maximizable: true,
						    closable: true,
						    modal: true,
						    html: "<iframe width='100%' height='100%' frameborder='0' marginheight='0' marginwidth='0' src='"
									+ ReqUtils.AddBizCode2URL(url)
									+ "'></iframe>"
						}).show();
    }

    function _viewSql() {
        var self = this;
        sqlxh = window.cxdy.sqlxh, cxfl = window.cxdy.cxfl,
				queryParams = getQueryParams(true), wrapParams = {
				    resultQueryParams: getResultQueryParams()
				};

        if (!queryParams) {
            return;
        }

        Ext.Ajax
				.request({
				    url: ReqUtils
							.AddBizCode2URL("/download.sword?ctrl=CX301DzcxCtrl_viewSql"),
				    params: {
				        sqlxh: sqlxh,
				        cxfl: cxfl,
				        queryParams: Ext.JSON.encode(queryParams),
				        wrapParams: Ext.JSON.encode(wrapParams)
				    },
				    success: function (res) {
				        var res = Ext.JSON.decode(res.responseText);
				        Ext
								.create(
										"Ext.window.Window",
										{
										    title: "SQL语句",
										    width: 650,
										    height: 400,
										    maximizable: true,
										    modal: true,
										    layout: "fit",
										    items: [{
										        xtype: "textareafield",
										        value: res.sql
										    }],
										    tbar: [
													{
													    text: "复制到粘贴板",
													    icon: "/ods/images/save.gif",
													    handler: function () {
													        window.clipboardData
																	.setData(
																			"text",
																			win
																					.down(
																							"textareafield")
																					.getValue());
													    }
													},
													"-",
													{
													    text: "关闭",
													    icon: "/ods/images/del.gif",
													    handler: function () {
													        this.ownerCt.ownerCt
																	.close();
													    }
													}, "-"]
										}).show();
				    }
				});
    }
    // -------------------------------------------------------------------------------------------------------------------------

    function createTbar(buttons) {
        var self = this, tbar = [];

        for (var i = 0; i < buttons.length; i++) {
            switch (buttons[i]) {
                case "zhixingchaxun":
                    tbar.push({
                        text: "执行查询",
                        icon: "/ods/images/search.gif",
                        handler: function () {
                            self.executeQuery(window.cxdy.cxlx);
                        },
                        scope: self
                    });
                    tbar.push("-");

                    break;

                case "baocuntiaojian":
                    tbar.push(
                        {
                            text: "自定义条件",
                            icon: "/ods/images/columns.gif",
                            menu: [{
                                text: "加载条件",
                                icon: "/ods/images/add.gif",
                                handler: function () {
                                    var self = this;
                                    cxtjPanel = self.down("cxtjPanel")
                                    Ext.require("Dzcx.ZdytjoperateWindow", function () {
                                        openoperatetjwin(0, cxtjPanel);
                                    })
                                },
                                scope: self
                            }, "-", {
                                text: "保存条件",
                                icon: "/ods/images/save.gif",
                                handler: self.saveQueryParams,
                                scope: self
                            }, "-", {
                                text: "编辑条件",
                                icon: "/ods/images/edit.gif",
                                handler: function () {
                                    Ext.require("Dzcx.ZdytjoperateWindow", function () {
                                        openoperatetjwin(1);
                                    })
                                },
                                scope: self
                            }, "-", {
                                text: "重置条件",
                                icon: "/ods/images/reset.gif",
                                handler: self.resetQueryParams,
                                scope: self
                            }]
                        });

                    tbar.push("-");

                    break;

                    /*			case "chongzhitiaojian":
                                    tbar.push( {
                                        text : "重置条件",
                                        icon : "/ods/images/reset.gif",
                                        handler : self.resetQueryParams,
                                        scope : self
                                    });
                    
                                    tbar.push("-");
                    
                                    break;*/

                case "tongji":
                    tbar.push({
                        text: "统计",
                        icon: "/ods/images/statistic.bmp",
                        handler: self.openStatisticWindow,
                        scope: self
                    });

                    tbar.push("-");

                    break;

                case "paixu":
                    tbar.push({
                        text: "排序",
                        icon: "/ods/images/paixu.png",
                        handler: self.openSortWindow,
                        scope: self
                    });

                    tbar.push("-");		//图标右侧加一条竖线

                    break;

                case "mohuchaxun":
                    tbar.push({
                        text: "模糊查询",
                        icon: "/ods/images/search1.gif",
                        handler: self.openResultQueryWindow,
                        scope: self
                    });

                    tbar.push("-");

                    break;

                case "daochu":
                    tbar.push({
                        text: "导出",
                        icon: "/ods/images/download.gif",
                        menu: [
                                {
                                    text: "导出zip",
                                    icon: "/ods/images/zip.gif",
                                    handler: function () {
                                        // 查询类型是3(交叉表)的导出的时候需要一次拿到结果列定义和查询结果,所以单独给个查询类型8
                                        self.exportFile.call(self, "zip",
												window.cxdy.cxlx == "3" ? "8"
														: "6");
                                    }
                                },
                                "-",
                                {
                                    text: "导出excel",
                                    icon: "/ods/images/excel.gif",
                                    handler: function () {
                                        self.exportFile
                                                .call(
                                                        self,
                                                        "excel",
                                                        window.cxdy.cxlx == "3" ? "8"
                                                                : "6");
                                    }
                                },
                                "-",
                                {
                                    text: "导出word",
                                    icon: "/ods/images/word.gif",
                                    handler: function () {
                                        self.exportFile
                                                .call(
                                                        self,
                                                        "word",
                                                        window.cxdy.cxlx == "3" ? "8"
                                                                : "6");
                                    }
                                }]
                    });

                    tbar.push("-");

                    break;

                case "jieguolie":
                    tbar.push({
                        text: "结果列",
                        icon: "/ods/images/columns.gif",
                        handler: self.openResultColumnsWindow,
                        scope: self
                    });

                    tbar.push("-");

                    break;

                case "wentifankui":
                    tbar.push({
                        text: "问题反馈",
                        icon: "/ods/images/feedback.png",
                        handler: self.openFeedbackWindow,
                        scope: self
                    });

                    tbar.push("-");

                    break;

                case "chaxunpingjia":
                    tbar.push({
                        text: "查询评价",
                        icon: "/ods/images/score.png",
                        handler: self.openScoreWindow,
                        scope: self
                    });

                    tbar.push("-");

                    break;

                case "chakansql":
                    tbar.push({
                        text: "查看SQL",
                        icon: "/ods/images/sql.gif",
                        handler: self.viewSql,
                        scope: self
                    });

                    tbar.push("-");

                    break;
                case "dingyue":
                    tbar.push({
                        text: "订阅",
                        icon: "/ods/images/rss.gif",
                        handler: self.subscribe,
                        scope: self
                    });

                    tbar.push("-");

                    break;
                case "baobiaodaochu":
                    tbar.push({
                        text: "导出",
                        icon: "/ods/images/download.gif",
                        menu: [
                                {
                                    text: "导出excel",
                                    icon: "/ods/images/excel.gif",
                                    handler: function () {
                                        self.exportFile.call(self, "excel",
                                                window.cxdy.cxlx);
                                    }
                                },
                                "-",
                                {
                                    text: "导出word",
                                    icon: "/ods/images/word.gif",
                                    handler: function () {
                                        self.exportFile.call(self, "word",
                                                window.cxdy.cxlx);
                                    }
                                },
                                "-",
                                {
                                    text: "导出pdf",
                                    icon: "/ods/images/pdf.gif",
                                    handler: function () {
                                        self.exportFile.call(self, "pdf",
                                                window.cxdy.cxlx);
                                    }
                                }]
                    });

                    tbar.push("-");

                    break;
                case "dayin":
                    tbar.push({
                        text: "打印",
                        icon: "/ods/images/print.gif",
                        handler: function () {
                            if (document.frames['bbFrame']) {
                                document.frames['bbFrame'].report1_print();
                            } else {
                                Ext.Msg.alert("温馨提示", "请查询后再点击打印，谢谢！");
                            }
                        },
                        scope: self
                    });

                    tbar.push("-");

                    break;
                case "bangzhu":
                    tbar.push({
                        text: "帮助",
                        icon: "/ods/images/help.gif",
                        handler: function () {
                            self.help.call(self, window.cxdy.sqlxh);
                        },
                        scope: self
                    });

                    tbar.push("-");

                    break;
            }
        }

        return tbar;
    }
    /**
	 * 帮助方法
	 */
    function _help(sqlxh) {
        var url = "/sword?ctrl=CX301DzcxCtrl_help&sqlxh=" + sqlxh;
        // "&queryParams=" + encodeURI(encodeURI(Ext.JSON.encode(queryParams)))
        // +
        // "&wrapParams=" + encodeURI(encodeURI(Ext.JSON.encode(wrapParams)));
        Ext
				.create(
						"Ext.window.Window",
						{
						    title: "帮助",
						    height: 350,
						    width: 800,
						    maximizable: true,
						    modal: true,
						    closeAction: close,
						    html: "<iframe width='100%' height='100%' frameborder='0' marginheight='0' marginwidth='0' src='"
									+ ReqUtils.AddBizCode2URL(url)
									+ "'></iframe>"
						}).show();
    }
    /**
	 * 获取查询定义,拿到的结果包含查询定义表中的全部字段,数据源名称和查询条件.
	 */
    function getCxdy(sqlxh) {
        var cxdy;

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
				            cxdy = Ext.JSON.decode(res.responseText);
				        } catch (e) {
				            Ext.Msg.alert("警告", "解析获取的查询定义失败!");
				        }
				    },
				    failure: function () {
				        Ext.Msg.alert("警告", "获取查询定义失败!");
				    }
				});

        return cxdy;
    }
    function getQueryParams(validate) {
        var cxtjPanel = Ext.ComponentQuery.query("cxtjPanel")[0], queryParams;

        if (validate && !cxtjPanel.validateQueryParams()) {
            //Ext.MessageBox.alert('提示', '您所填的条件不符合规范，请点击红色文本框查看具体要求！');
            return;
        }
        queryParams = cxtjPanel.getQueryParams();

        return queryParams;
    }

    function getResultQueryParams() {
        var mhcxWindow = Ext.ComponentQuery.query("mhcxWindow"), resetQueryParams = [];

        if (mhcxWindow.length > 0) {
            resetQueryParams = mhcxWindow[0].resetQueryParams;
        }

        return resetQueryParams || [];
    }

    function getStatisticParams() {
        var tjWindow = Ext.ComponentQuery.query("tjWindow"), statisticParams = [];

        if (tjWindow.length > 0) {
            statisticParams = tjWindow[0].statisticParams;
        }

        return statisticParams || [];
    }
})(Ext);