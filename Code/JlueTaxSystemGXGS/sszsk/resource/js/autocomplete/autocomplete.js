
function regAutocomplete(id, url) {
    $("#" + id).autocomplete(url, {
        delay: 1,                      //延迟3秒  
        max: 10,                             //最多10条记录  
        minChars: 1,                   //自动完成激活之前填入的最小字符
        matchSubset: false,      /*可不可以使用对服务器查询的缓存,例如如果缓存对"foo"的查询结果,那么如果用户输入"foo"就不需要再进行检索了,直接使用缓存.
                                                通常是打开这个选项以减轻服务器的负担以提高性能.只会在缓存长度大于1时有效.Default: true*/
        matchContains: true,     //决定比较时是否要在字符串内部查看匹配,如ba是否与foo bar中的ba匹配.使用缓存时比较重要.不要和autofill混用.Default: false
        cacheLength: 1,          //缓存的长度.即对从数据库中取到的结果集要缓存多少条记录.设成1为不缓存.Default: 10
        matchContains: true,    //包含匹配，就是data参数里的数据，是否只要包含文本框里的数据就显示
        scrollHeight: 350,      //提示的高度，溢出显示滚动条
        width: 600,                    //提示的宽度，溢出隐藏
        dataType: 'json',        //返回的数据类型为JSON类型  
        parse: function (data) {  //解释返回的数据，把其存在数组里  
            var parsed = [];
            if (data != null && data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    parsed[parsed.length] = {
                        data: data[i],
                        value: data[i],
                        result: data[i].name //返回的结果显示内容  
                    };
                }
            }
            return parsed;
        },
        formatItem: function (item) {//显示下拉列表的内容  
            return "<div><table width='98%'><tr><td>" + item.name + "</td><td align='right' style='color:#009999;'>" + item.value + "</td></tr></table></div>";
        },
        formatMatch: function (item) {
            return item;
        },
        formatResult: function (item) {
            return item;
        }
    }).result(function (event, item, formatted) {//把用户选择的结果进行自定义操作    
        $("#searchText").val(item.name);
        $("#xy_zlgjz").val(item.value);
    });
}
