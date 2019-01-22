/**
 * tbb
 * layui 工具类
 * @type {{}}
 */
var layuiTools = {};

layuiTools.cnf = {clientURL: '', contextPath: ''};
//hlwsbTools.cnf.clientURL = 'http://localhost:9001';

/**
 * 下拉框绑定事件
 * @param filterId 下拉框的lay-filter
 * @param event 事件
 * @param event2 事件
 * @param event3 事件
 */
layuiTools.selectEvent = function (filterId, event, event2, event3) {
    layui.use('form', function () {
        var form = layui.form;
        form.on('select(' + filterId + ')', function (data) {
            if (event) {
                event(data);
            }
            if (event2) {
                event2(data);
            }
            if (event3) {
                event3(data);
            }
            form.render('select');
        })
    });
};
/**
 * 提示框
 * @param msg 消息
 */
layuiTools.alert = function (msg) {
    layer.alert(msg);
};
/**
 * 重新渲染表单
 */
layuiTools.renderForm = function () {
    layui.use('form', function () {
        var form = layui.form;
        form.render();
    });
},
/**
 * 得到某月的最后一天
 * @param month
 * @param yea
 */
layuiTools.getEndDate = function (month, year) {
    var thisDate = new Date();
    //设置日期为下个月的第一天
    thisDate.setFullYear(
        year || thisDate.getFullYear()
        ,month || (thisDate.getMonth() + 1)
        ,1);
    //减去一天，得到当前月最后一天
    return new Date(thisDate.getTime() - 1000*60*60*24).getDate();
};
/**
 * layui open新窗口方法
 * @param obj
 */
layuiTools.open = function(obj){
    layui.use('layer',function () {
        var layer = layui.layer;
        layer.open(
            obj
        );
    })
};

/**
 * 日期控件显示
 * @param obj
 */
layuiTools.dateShow = function (obj) {
    layui.use('laydate', function () {
        var laydate = layui.laydate;
        laydate.render(
            obj
            /*{
                elem: obj.elem,
                theme: obj.theme == undefined ? 'molv' : obj.theme,
                min: obj.min == undefined ? "" : obj.min,
                max: obj.max == undefined ? "" : obj.max,
                btns: obj.btns == undefined ? [] : obj.btns
            }*/
        );
    });
};
/**
 * 日期控件比较
 * @param dom1 最小日期
 * @param dom2 最大日期
 */
layuiTools.dateShowCb = function (dom1, dom2) {
    layui.use('laydate', function () {
        var laydate = layui.laydate;
        function dateObj(dom1, dom2) {//结束时间不小于开始时间
            var startDate = laydate.render({
                elem: dom1,
                theme: 'molv',
                max: $(dom2).val(),
                done: function (value, date) {
                    if (value !== '') {
                        endDate.config.min.year = date.year;
                        endDate.config.min.month = date.month - 1;
                        endDate.config.min.date = date.date;
                    } else {
                        endDate.config.min.year = '';
                        endDate.config.min.month = '';
                        endDate.config.min.date = '';
                    }
                }
            });
            var endDate = laydate.render({
                elem: dom2,
                theme: 'molv',
                min: $(dom1).val(),
                done: function (value, date) {
                    if (value !== '') {
                        startDate.config.max.year = date.year;
                        startDate.config.max.month = date.month - 1;
                        startDate.config.max.date = date.date;
                    } else {
                        startDate.config.max.year = '';
                        startDate.config.max.month = '';
                        startDate.config.max.date = '';
                    }
                }
            });
        }

        dateObj(dom1, dom2);
    })
};