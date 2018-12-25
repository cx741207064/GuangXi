var dialogNum = 0;
var dialogArr = [];
/**
 * 弹出一个对话框窗口<br>
 * prarmObj参数
 * @param title 		标题
 * @param width 		高度
 * @param height 		宽度
 * @param modal 		模式窗口
 * @param iconCls		图标样式
 * @param minimizable	是否显示最小化按钮
 * @param maximizable	是否显示最大化按钮
 * @param href			窗口内容加载URL
 * @param loadingMessage 窗口内容加载时显示信息
 * @param toolbar		窗口工具条
 * @param buttons		底部按钮
 * @param doSize		面板创建的时候将被调整和重新布局
 * @param url			页面加载内容的URL
 */
function showEasyDialog(url, prarmObj) {
    var $win;
    var dialogDiv = '<div id="easyDialogDiv' + dialogNum + '" class="easyui-dialog" data-options="title:\'My Title\',iconCls:\'icon-save\',closed:true" style="width:600px;height:500px;padding:5px;">' +
					'<iframe id="iframeDialog' + dialogNum + '" name="iframeDialog' + dialogNum + '" src="' + url + '" width="100%" height="100%" marginheight="0" marginwidth="0" scrolling="auto" frameborder="0" allowtransparency="true"></iframe>' +
					'</div>';
    $("html").append(dialogDiv);
    prarmObj.onClose = onEasyDialogClose;
    prarmObj.onDestroy = onEasyDialogClose;
    dialogArr.push(dialogNum + "");
    $win = $('#easyDialogDiv' + dialogNum).dialog(prarmObj);
    $.parser.parse($("#easyDialogDiv" + dialogNum).parent());
    $win.dialog('open');
    dialogNum = dialogNum + 1;
}

function closeEasyDialog() {
    $('#easyDialogDiv' + getCurDialogNum()).dialog('close');
}

function onEasyDialogClose() {
    if (dialogArr.length > 0) {
        dialogArr.pop();
    }
}

function getCurDialogNum() {
    if (dialogArr.length > 0) {
        return dialogArr[dialogArr.length - 1];
    } else {
        return 0;
    }
}

function doEasyDialogFun(f) {
    var str = 'window.frames["iframeDialog' + getCurDialogNum() + '"].' + f;
    return eval(str);
}

function doEasyDialogFunUp(f, parentDialog) {
    var str = 'window.frames["iframeDialog' + parentDialog + '"].' + f;
    return eval(str);
}
