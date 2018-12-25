(function () {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.href = "/ods/scripts/ext/ux/css/CheckCombo.css";
    link.rel = "stylesheet";
    link.type = "text/css";
    head.appendChild(link);
})();

Ext.define('Ext.ux.CheckCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.checkcombo',
    multiSelect: true,
    allSelector: false,
    addAllSelector: true,
    allText: '全选',
    createPicker: function () {
        var me = this,
            picker,
            menuCls = Ext.baseCSSPrefix + 'menu',
            opts = Ext.apply({
                pickerField: me,
                selModel: {
                    mode: me.multiSelect ? 'SIMPLE' : 'SINGLE'
                },
                floating: true,
                hidden: true,
                ownerCt: me.ownerCt,
                cls: me.el.up('.' + menuCls) ? menuCls : '',
                store: me.store,
                displayField: me.displayField,
                focusOnToFront: false,
                pageSize: me.pageSize,
                tpl:
             [
                 '<ul style="padding:0px;margin:0px;"><tpl for=".">',
                     '<li role="option" class="' + Ext.baseCSSPrefix + 'boundlist-item"><span class="x-combo-checker">&nbsp;</span> {' + me.displayField + '}</li>',
                 '</tpl></ul><br><br>'
             ]
            }, me.listConfig, me.defaultListConfig);

        picker = me.picker = Ext.create('Ext.view.BoundList', opts);
        if (me.pageSize) {
            picker.pagingToolbar.on('beforechange', me.onPageChange, me);
        }

        me.mon(picker, {
            itemclick: me.onItemClick,
            refresh: me.onListRefresh,
            scope: me
        });

        me.mon(picker.getSelectionModel(), {
            'beforeselect': me.onBeforeSelect,
            'beforedeselect': me.onBeforeDeselect,
            'selectionchange': me.onListSelectionChange,
            scope: me
        });

        return picker;
    },
    onListRefresh: function () {

    },
    onItemClick: function () {

    },
    onBeforeSelect: function () {

    },
    onBeforeDeselect: function () {

    },
    /*getValue: function()
    {
    		return this.value.join(',');
    },
    getSubmitValue: function()
	{
		return this.getValue();
	},*/
    expand: function () {
        var me = this,
            bodyEl, picker, collapseIf;

        if (me.rendered && !me.isExpanded && !me.isDestroyed) {
            bodyEl = me.bodyEl;
            picker = me.getPicker();
            collapseIf = me.collapseIf;

            //显示
            picker.show();
            me.isExpanded = true;
            me.alignPicker();
            bodyEl.addCls(me.openCls);

            if (me.addAllSelector == true && me.allSelector == false) {
                me.allSelector = picker.getEl().insertHtml('afterBegin', '<div class="x-boundlist-item" role="option"><span class="x-combo-checker">&nbsp;</span> ' + me.allText + '</div>', true);
                me.allSelector.on('click', function (e) {
                    if (me.allSelector.hasCls('x-boundlist-selected')) {
                        me.setValue([]);
                        me.fireEvent('select', me, []);

                        me.allSelector.removeCls('x-boundlist-selected');
                    }
                    else {
                        var records = [];
                        me.store.each(function (record) {
                            records.push(record);
                        });

                        me.setValue([]);
                        me.setValue(records);
                        me.fireEvent('select', me, records);

                        me.allSelector.addCls('x-boundlist-selected');
                    }
                });
            }
            // 监听
            me.mon(Ext.getDoc(), {
                mousewheel: collapseIf,
                mousedown: collapseIf,
                scope: me
            });
            Ext.EventManager.onWindowResize(me.alignPicker, me);
            me.fireEvent('expand', me);
            me.onExpand();
        }
    },

    onKeyUp: function (e, t) {
        var me = this,
    	key = e.getKey();
        if (!me.readOnly && !me.disabled && me.editable) {
            me.lastKey = key;
            me.doQueryTask.cancel();

            // perform query w/ any normal key or backspace or   
            // delete   
            if (!e.isSpecialKey() || key == e.BACKSPACE || key == e.DELETE) {
                if (me.getRawValue() == '') {
                    me.clearValue();
                    return;
                }
                me.doQueryTask.delay(me.queryDelay);
            } else if (key == e.ENTER) {
                this.doQuery(this.getRawValue(), true);
            }
        }

    },
    onListSelectionChange: function (list, selectedRecords) {
        var me = this,
            isMulti = me.multiSelect,
            hasRecords = selectedRecords.length > 0;

        if (me.isExpanded) {
            if (!isMulti) {
                Ext.defer(me.collapse, 1, me);
            }


            if (isMulti || hasRecords) {
                me.setValue(selectedRecords, false);
            }
            if (hasRecords) {
                me.fireEvent('select', me, selectedRecords);
            }
            me.inputEl.focus();
        }

        if (me.addAllSelector == true && me.allSelector != false) {
            if (selectedRecords.length == me.store.getTotalCount()) me.allSelector.addCls('x-boundlist-selected');
            else me.allSelector.removeCls('x-boundlist-selected');
        }
    }
});