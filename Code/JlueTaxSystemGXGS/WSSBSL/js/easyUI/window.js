var windowNum = 0;
var windowArr = [];
/**
 * 弹出一个信息窗口<br>
 * prarmObj参数
 * @param title 		标题
 * @param width 		高度
 * @param height 		宽度
 * @param modal 		模式窗口
 * @param iconCls		图标样式
 * @param minimizable	是否显示最小化按钮
 * @param maximizable	是否显示最大化按钮
 * @param context	 	窗口内容文本
 * @param href			窗口内容加载URL
 * @param loadingMessage 窗口内容加载时显示信息
 * @param tools			窗口工具条
 * @param doSize		面板创建的时候将被调整和重新布局
 */
function showEasyWindow(context, prarmObj) {
    var $win;
    var windowDiv = '<div id="easyWindowDiv' + windowNum + '" class="easyui-window" data-options="title:\'My Title\',iconCls:\'icon-help\',closed:true" style="width:500px;height:200px;padding:5px;">' +
		'<div class="easyui-layout" data-options="fit:true">' +
            '<div id="windowContext' + windowNum + '" data-options="region:\'center\',border:false" style="padding:10px;background:#fff;border:1px solid #ccc;">' +
	            '</div>' +
	            '<div data-options="region:\'south\',border:false" style="height:30px;text-align:center;padding:5px 0;overflow:hidden">' +
	            '    <a class="easyui-linkbutton" data-options="iconCls:\'icon-ok\'" href="javascript:void(0)" onclick="closeEasyWindow()">知道了</a>' +
	            '</div>' +
        	'</div>' +
		'</div>';
    $("html").append(windowDiv);
    if (context && context.length > 0) {
        $("#windowContext" + windowNum).html(context);
    }
    prarmObj.onClose = defaultOnEasyWindowClose;
    prarmObj.onDestroy = defaultOnEasyWindowClose;
    windowArr.push(windowNum + "");
    $win = $('#easyWindowDiv' + windowNum).window(prarmObj);
    $.parser.parse($("#easyWindowDiv" + windowNum).parent());
    $win.window('open');
    windowNum = windowNum + 1;
}

function closeEasyWindow() {
    $('#easyWindowDiv' + getCurWindowNum()).window('close');
}

function getCurWindowNum() {
    if (windowArr.length > 0) {
        return windowArr[windowArr.length - 1];
    } else {
        return 0;
    }
}

function defaultOnEasyWindowClose() {
    if (windowArr.length > 0) {
        windowArr.pop();
    }
}
