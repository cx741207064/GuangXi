$(document).ready(function () {
    layerTools.onload();
});

var layerTools = (function () {

    var layer;


    return {
        onload: function () {
            layui.use('layer', function () {
                layer = layui.layer;
            });
            this.layer = layer;
        },
        close: function (layerIndex) {
            layer.close(layerIndex);
        },
        confirm: function (html, callback) {
            layer.confirm(html,
                function (index) {
                    callback();
                    layer.close(index);
                })
        },
        msg: function (html) {
            layer.msg(html);
        }
    }
})();