Ext.define("Ext.ux.Comboboxtree", {
    extend: "Ext.form.field.Picker",
    alias: "widget.treeField",
    requires: ["Ext.tree.Panel"],
    /**
	 * @cfg {Boolean} readOnly è®¾ç½®ä¸ºåªè¯»çŠ¶æ€
	 * 
	 */
    readOnly: false,
    /**
	 * @cfg {String} displayField ç”¨äºŽæ˜¾ç¤ºæ•°æ®çš„å­—æ®µå
	 * 
	 */
    displayField: 'text',
    /**
	 * @cfg {String} valueField ç”¨äºŽä¿å­˜çœŸå®žæ•°æ®çš„å­—æ®µå
	 */
    valueField: 'id',
    /**
	 * @cfg {String} hiddenName ä¿å­˜çœŸå®žæ•°æ®çš„éšè—åŸŸå
	 */
    hiddenName: null,
    /**
	 * @cfg {Integer} listWidth ä¸‹æ‹‰æ¡†çš„å®½åº¦
	 */
    listWidth: 150,
    /**
	 * @cfg {Integer} minListWidth ä¸‹æ‹‰æ¡†æœ€å°å®½åº¦
	 */
    minListWidth: 50,
    /**
	 * @cfg {Integer} listHeight ä¸‹æ‹‰æ¡†é«˜åº¦
	 */
    listHeight: 150,
    /**
	 * @cfg {Integer} minListHeight ä¸‹æ‹‰æ¡†æœ€å°é«˜åº¦
	 */
    minListHeight: 50,
    /**
	 * @cfg {Ext.tree.TreePanel} tree ä¸‹æ‹‰æ¡†ä¸­çš„æ ‘
	 */
    tree: null,
    /**
	 * @cfg {String} value é»˜è®¤å€¼
	 */
    value: null,
    /**
	 * @cfg {String} displayValue ç”¨äºŽæ˜¾ç¤ºçš„é»˜è®¤å€¼
	 */
    displayValue: null,

    children: null,
    /**
	 * @cfg {Object} baseParams å‘åŽå°ä¼ é€’çš„å‚æ•°é›†åˆ
	 */
    baseParams: {},
    /**
	 * @cfg {String} dataUrl æ•°æ®åœ°å€
	 */
    storeUrl: '/download.sword?ctrl=CX301DzcxCtrl_getTreeData',
    /**
	 * @cfg {boolean} å¤šé€‰æ ‡å¿—
	 */
    moreChecked: true,
    _idValue: null,
    _txtValue: null,

    initComponent: function () {
        var self = this;
        Ext.apply(self, {
            fieldLabel: self.fieldLabel,
            labelWidth: self.labelWidth
        });
        self.callParent();
        //if (self.baseParams.zdmrbz == 1) {
        self.createPicker();
        //}
    },
    createPicker: function () {

        var self = this;
        var store = Ext.create('Ext.data.TreeStore', {
            proxy: {
                type: 'ajax',
                url: ReqUtils.AddBizCode2URL(self.storeUrl + '&moreCheck=' + self.moreChecked)
                //url : self.storeUrl+'&moreCheck='+self.moreChecked
            },
            // sorters:[{property:'leaf',direction:'ASC'},{property:'text',direction:'ASC'}],
            // root:{id:self.rootId,text:self.rootText},
            nodeParameter: self.treeNodeParameter
        });
        store.on('beforeload', function (store, operation) {
            var parentID = operation.node.data.id;
            var parentChecked = operation.node.data.checked;
            if (!self.moreChecked) {
                parentChecked = false;
            }// å¦‚æžœæ˜¯å•é€‰
            if (parentID == "root") {
                parentID = null;
                if (self.baseParams.zdmrbz == 1) {
                    parentChecked = true;
                }
            }

            store.proxy.extraParams = {
                parentID: parentID,
                checked: parentChecked
            };
            Ext.apply(store.proxy.extraParams, self.baseParams);
        });
        store.on('beforeappend', function (parent, node) {
            var check = node.data.checked;
            var text = node.data.text;
            var id = node.data.id;
            if (check) {

                var showValue = self.getTextValue();
                var realValue = self.getValue();
                var tjlx = self.baseParams.tjlx;

                if (tjlx == 'SWJGTREE' || tjlx == 'ORGTREE' || tjlx == 'HSJGTREE') {//ç¨ŽåŠ¡æœºæž„æ ‘ã€ä¸»ç®¡ç¨ŽåŠ¡å±€-è¡Œæ”¿æ ‘ã€æ ¸ç®—æœºå…³æ ‘ï¼Œ1ã€å¦‚æžœæ˜¯å¤šé€‰ã€é»˜è®¤æ˜¾ç¤ºã€ä¸”å¤šæ ¹ï¼Œé»˜è®¤æ˜¾ç¤ºï¼›å•æ ¹ä¹Ÿæ˜¾ç¤º
                    //å¦‚æžœæ˜¯å•é€‰ã€é»˜è®¤æ˜¾ç¤ºã€ä¸”å¤šæ ¹ï¼Œåˆ™ä¸æ˜¾ç¤ºï¼›å•é€‰ã€é»˜è®¤æ˜¾ç¤ºã€åˆ‡å•æ ¹ï¼Œåˆ™æ˜¾ç¤º
                    if (self.moreChecked) {//å•é€‰ã€é»˜è®¤æ˜¾ç¤º
                        if (parent.data.id == 'root') {
                            if (showValue == null) {
                                self.setLocalValue(text, id);
                            } else {
                                //self.setLocalValue(showValue+","+text, realValue+','+id);
                            }
                        } else {
                            var records = self.picker.getView().getChecked();
                            self.setNodeCheck(records, self);
                        }

                    } else {
                        if (showValue == null) {
                            self.setLocalValue(text, id);
                        } else {
                            //self.setLocalValue("", "");
                        }
                    }
                } else {
                    if (showValue == null) {
                        self.setLocalValue(text, id);
                    } else {
                        //								self.setLocalValue(showValue + "," + text,
                        //										realValue + "," + id);
                    }
                }


            }
        });
        self.picker = new Ext.tree.Panel({

            height: document.documentElement.clientHeight / 2,
            width: 300,
            maxWidth: 600,
            resizable: true,
            autoScroll: true,
            floating: true,
            focusOnToFront: false,
            shadow: true,
            ownerCt: this.ownerCt,
            useArrows: true,
            store: store,
            rootVisible: false
        });
        self.picker.on({
            checkchange: function (node, check) {
                // self.setParentCheck(node, check);
                if (self.moreChecked == true) {
                    self.setChildCheck(node, check);
                    var records = self.picker.getView().getChecked();
                    self.setNodeCheck(records, self);

                } else {
                    var checkedNodes = this.getChecked();
                    if (checkedNodes.length > 1) {
                        Ext.each(checkedNodes, function (n) {
                            n.set('checked', false);
                        });
                    }
                    if (check) {
                        node.set('checked', true);
                        self.setLocalValue(node.get('text'), node.get('id'));
                    } else {
                        self.setLocalValue('', '');
                    }

                }

            }
        });

        self.on({
            blur: function () {
                if (self.rawValue == '') {
                    if (self.picker.getView().getChecked().length > 0) {
                        self.setLocalValue('', '');
                        Ext.each(self.picker.getView().getChecked(),
                                function (n) {
                                    n.set('checked', false);
                                });

                    }
                }
            }
        });
        return self.picker;
    },
    setChildCheck: function (node, check) {
        var self = this;
        if (node) {
            var childrens = node.childNodes;
            if (!Ext.isEmpty(childrens)) {
                Ext.Array.each(childrens, function (el) {
                    self.setChildCheck(el, check);
                });
            }
            node.set('checked', check)
        }
    },
    setNodeCheck: function (records, self) {
        var names = [], values = [];
        Ext.Array.each(records, function (rec) {
            //åˆ¤æ–­æ‰€æœ‰è¢«é€‰ä¸­çš„èŠ‚ç‚¹ï¼Œè‹¥è¯¥èŠ‚ç‚¹çš„å­èŠ‚ç‚¹å…¨éƒ¨è¢«é€‰ä¸­ï¼Œåˆ™ä¼ å…¥è¯¥èŠ‚ç‚¹çš„å€¼ï¼›è‹¥è¯¥èŠ‚ç‚¹çš„å­èŠ‚ç‚¹æœ‰æœªè¢«é€‰ä¸­çš„ï¼Œåˆ™ä¼ å…¥é€‰ä¸­çš„å­èŠ‚ç‚¹çš„å€¼
            if (rec) {
                if (rec.data.parentId == 'root') {//æ ¹èŠ‚ç‚¹
                    var ischecked = true;
                    var childreans = rec.childNodes;
                    Ext.Array.each(childreans, function (child) {
                        if (child.get('checked') == false || child.get('checked') == "false") {
                            rec.set('checked', false);
                            ischecked = false;//å¦‚æžœè¯¥èŠ‚ç‚¹çš„å­©å­èŠ‚ç‚¹ï¼Œæœ‰æ²¡æœ‰è¢«é€‰ä¸­çš„æƒ…å†µï¼Œåˆ™è¯¥èŠ‚ç‚¹çš„å€¼ä¸è¦ï¼Œåˆ™ischecked=false
                            return false;
                        }

                    });
                    if (ischecked) {
                        names.push(rec.get('text'));
                        values.push(rec.get('id'));
                    }

                } else {
                    //å…ˆå–è¯¥èŠ‚ç‚¹çš„å­©å­èŠ‚ç‚¹ï¼Œå¦‚æžœè¯¥èŠ‚ç‚¹çš„å­©å­èŠ‚ç‚¹éƒ½è¢«é€‰ä¸­ï¼Œåˆ™è¯¥èŠ‚ç‚¹æ·»åŠ åˆ°namesï¼Œvaluesä¸­ï¼Œå¦‚æžœè¯¥èŠ‚ç‚¹
                    //çš„å­©å­èŠ‚ç‚¹ï¼Œæœ‰æœªè¢«é€‰ä¸­çš„ï¼Œåˆ™è¯¥èŠ‚ç‚¹ä¸æ·»åŠ åˆ°namesï¼Œvaluesä¸­
                    var ischecked = true;
                    var childreans = rec.childNodes;
                    Ext.Array.each(childreans, function (child) {
                        if (child.get('checked') == false || child.get('checked') == "false") {
                            ischecked = false;//å¦‚æžœè¯¥èŠ‚ç‚¹çš„å­©å­èŠ‚ç‚¹ï¼Œæœ‰æ²¡æœ‰è¢«é€‰ä¸­çš„æƒ…å†µï¼Œåˆ™è¯¥èŠ‚ç‚¹çš„å€¼ä¸è¦ï¼Œåˆ™ischecked=false
                            rec.set('checked', false);
                            return false;
                        }

                    });
                    if (ischecked) {
                        var bortherNodes = rec.parentNode.childNodes;//å–å…„å¼ŸèŠ‚ç‚¹ï¼Œåˆ¤æ–­å…„å¼ŸèŠ‚ç‚¹æ˜¯å¦éƒ½è¢«é€‰ä¸­
                        Ext.Array.each(bortherNodes, function (borther) {
                            //å¦‚æžœåªæœ‰å½“å‰ä¸€ä¸ªèŠ‚ç‚¹ï¼Œæˆ–è€…å…„å¼ŸèŠ‚ç‚¹ä¸­ï¼Œæœ‰æ²¡æœ‰è¢«é€‰ä¸­çš„ï¼Œåˆ™è¯¥èŠ‚ç‚¹çš„å€¼æ”¾å…¥NAMES,VALUESä¸­
                            if (bortherNodes.length == 1 || (borther.get('checked') == false || borther.get('checked') == "false")) {
                                names.push(rec.get('text'));
                                values.push(rec.get('id'));
                                return false;
                            }

                        });
                    }
                }
            }
        });
        self.setLocalValue(names.join(','), values.join(','));
    },
    setParentCheck: function (node, check) {
        var self = this;
        if (node) {
            if (node.data.id == 'root')
                return;
            var parent = node.parentNode;
            if (!Ext.isEmpty(parent) && check != true) {
                var childrens = parent.childNodes;
                if (parent.data.id == 'root')
                    childrens = node.childNodes;
                if (!Ext.isEmpty(childrens)) {
                    var isChecked = false;
                    Ext.Array.each(childrens, function (child) {
                        if (child.get('checked') == true
                                || child.get('checked') == "true") {
                            isChecked = true;
                        }
                    });
                    if (parent.data.id == 'root') {
                        node.set('checked', isChecked);
                    } else {
                        parent.set('checked', isChecked);
                    }
                }
            } else {
                node.set('checked', check);
            }

            if (!Ext.isEmpty(parent) && parent.data.id != 'root') {
                self.setParentCheck(parent, check);
            }
        }
    },
    alignPicker: function () {
        var me = this, picker, isAbove, aboveSfx = '-above';
        if (this.isExpanded) {
            picker = me.getPicker();
            if (picker.isFloating()) {
                picker.alignTo(me.inputEl, "", me.pickerOffset);// ""->tl
                isAbove = picker.el.getY() < me.inputEl.getY();
                me.bodyEl[isAbove ? 'addCls' : 'removeCls'](me.openCls
						+ aboveSfx);
                picker.el[isAbove ? 'addCls' : 'removeCls'](picker.baseCls
						+ aboveSfx);
            }
        }
    },
    getValue: function () {// èŽ·å–idå€¼
        return this._idValue;
    },
    getTextValue: function () {// èŽ·å–textå€¼
        return this._txtValue;
    },
    setLocalValue: function (txt, id) {// è®¾å€¼
        this._idValue = id;
        this.setValue(this._txtValue = txt);
        if (this.disabled || this.baseParams.zdmrbz == 1) {//å¦‚æžœæ­¤æŽ§ä»¶ä¸ºä¸å¯ç”¨æˆ–æœ‰è‡ªåŠ¨é»˜è®¤å€¼åˆ™é‡ç½®æ—¶ä¸èƒ½æ¸…ç©ºã€‚
            this.originalValue = txt;
        }
    }
});
