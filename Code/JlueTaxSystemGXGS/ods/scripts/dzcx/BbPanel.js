(function (Ext) {
    Ext.define("Dzcx.BbPanel", {
        extend: "Ext.panel.Panel",
        alias: "widget.BbPanel",
        title: "查询结果",
        initComponent: function () {
            var self = this,
				bbmc = self.bbmc,
				sjylx = self.sjylx,
				queryparam = self.queryparam,
				pagelayout = self.pagelayout,
				gwssswjg = self.gwssswjg,
				gwxh = self.gwxh,
				bbHeight = Ext.getBody().getHeight() - 100;

            var showFileName = "showReport.jsp";
            if ("2" == pagelayout) {
                showFileName = "showReport_left_topbottom.jsp";
            } else if ("3" == pagelayout) {
                showFileName = "showReport_left_right.jsp";
            }
            var iframeSrc = "/reportJsp/" + showFileName + "?rpx=" + bbmc + queryparam + "&sjylx=" + sjylx + "&gwssswjg=" + gwssswjg + "&gwxh=" + gwxh;
            this.items = [{
                layout: 'fit',
                id: 'training_grief_rep_tab_4',
                border: false,
                deferredRender: false,
                //autoScroll : true,
                html: ' <iframe name="bbFrame" scrolling="overflow-x:scroll;overflow-y:scroll " frameborder="0" width="100%" height= ' + bbHeight + '  src=' + iframeSrc + '"> </iframe>'
            }];

            self.callParent(arguments);
        }

    })
})(Ext);