(function (Ext) {
    Ext.define("Dzcx.JglWindow", {
        extend: "Ext.window.Window",
        alias: "widget.jglWindow",
        title: "结果列",
        width: 500,
        height: 400,
        overflowY: 'auto',
        modal: true,
        closeAction: "hide",
        layout: "fit",
        bodyStyle: {
            "background-color": "#FFFFFF"
        },
        initComponent: function () {
            var self = this;

            self.resultColumns = getResultColumns(self.sqlxh, self.queryParams);

            self.items = createCheckboxGroup(self.resultColumns);

            self.tbar = [{
                text: "全选",
                handler: function () {
                    var checkbox = this.down("checkboxgroup").items.items;

                    for (var i = 0; i < checkbox.length; i++) {
                        checkbox[i].setValue(true);
                    }
                },
                scope: self
            }, "-", {
                text: "反选",
                handler: function () {
                    var checkbox = this.down("checkboxgroup").items.items;

                    for (var i = 0; i < checkbox.length; i++) {
                        checkbox[i].setValue(false);
                    }
                },
                scope: self
            }, "-", {
                text: "确定",
                handler: function () {
                    var self = this,
						hiddenColumns = [],
						showColumns = [],
						checkbox = this.down("checkboxgroup").items.items;

                    for (var i = 0; i < checkbox.length; i++) {
                        var name = checkbox[i].getName();

                        if (!checkbox[i].getValue()) {
                            //因为check都是显示的列，所以代码转名称列的原始列不在checkbox中，要单独判断处理
                            if (!Ext.Array.contains(self.resultColumns, name) && name.indexOf("_MC") != -1) {
                                hiddenColumns.push(name.replace(/_MC$/, ""));
                            }

                            hiddenColumns.push(name);
                        } else {
                            showColumns.push(name);
                        }
                    }

                    self.hiddenColumns = hiddenColumns;
                    self.showColumns = showColumns;
                    var DzcxViewport = Ext.ComponentQuery.query('viewport');
                    DzcxViewport[0].executeQuery(window.cxdy.cxlx);
                    self.close();
                },
                scope: self
            }, "-", {
                text: "取消",
                handler: function () {
                    this.ownerCt.ownerCt.close();
                }
            }];

            self.callParent(arguments);
        }
    });

    function getResultColumns(sqlxh, queryParams) {
        var columns = [];

        Ext.Ajax.request({
            url: ReqUtils.AddBizCode2URL("/download.sword.ashx?ctrl=CX301DzcxCtrl_getResultColumns"),
            params: { sqlxh: sqlxh, queryParams: Ext.JSON.encode(queryParams) },
            async: false,
            success: function (res) {
                columns = Ext.JSON.decode(res.responseText);
            }
        });

        return columns;
    }

    function createCheckboxGroup(columns) {
        var items = [];

        for (var i = 0; i < columns.length; i++) {
            var column = columns[i],
				value = column.dmsql ? column.lmc + "_MC" : column.lmc;

            items.push({
                boxLabel: column.lms,
                name: value,
                inputValue: value,
                checked: column.ycbj != "1",
                margin: "5 10 5 10"
            });
        }

        return {
            xtype: "checkboxgroup",
            columns: 3,
            items: items
        };
    }
})(Ext);