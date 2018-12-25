$.extend($.fn, {
    jqGridWidth: function (tableId) {
        doResize();
        var t = document.documentElement.clientWidth;
        window.onresize = function () {
            if (t != document.documentElement.clientWidth) {
                t = document.documentElement.clientWidth;
                doResize();
            }
        };
        function doResize() {
            var ss = getPageSize();
            $(tableId).jqGrid('setGridWidth', ss.WinW - 10);
        }
        function getPageSize() {
            var winW = window.innerWidth;
            if (document.documentElement) {
                winW = document.documentElement.clientWidth;
            }
            return { WinW: winW };
        }
    }
});