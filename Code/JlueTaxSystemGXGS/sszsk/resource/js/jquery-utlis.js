
$.extend($.fn, {
    date: function (start, end) {
        //start,end为起始时间和结束时间，为空或未定义时默认min="1949-10-01"，max="2100-10-01";
        //格式可以使yyyy-MM-dd,或者id值，end可以是整数（表示在start延后end天）
        /*
		$("div.Zebra_DatePicker").bgiframe();
		this.Zebra_DatePicker({
			show_icon:false,
			format:'Y-m-d',
			readonly_element:false,
			direction:[start,end],
			days:['日','一','二','三','四','五','六'],
			months:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
		});
		*/
        var min = "";
        var max = "";
        //设置最小时间限制
        if (start == undefined || start == "") {
            min = "1949-10-01";
        } else if (/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(start)) {
            min = start;
        } else if (start == "today") {
            min = "%y-%M-%d";
        } else {
            min = "#F{$dp.$D(\'" + start + "\',{d:1});}";
        }
        //设置最大时间限制
        if (end == undefined || end == "") {
            max = "2100-10-01";
        } else if (/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(start)) {
            max = end;
        } else if (/^\d+$/.test(end)) {
            max = "#F{$dp.$D(\'" + start + "\',{d:" + end + "});}";
        } else if (end == "today") {
            max = "%y-%M-%d";
        } else {
            max = "#F{$dp.$D(\'" + end + "\',{d:-1});}";
        }
        this.bind("click", function () {
            WdatePicker({
                skin: "whyGreen",
                qsEnabled: false,
                isShowClear: true,
                readOnly: true,
                minDate: min,
                maxDate: max
            });
        });
    },
    dateYm: function () {
        this.Zebra_DatePicker({
            show_icon: false,
            format: 'Y-m',
            months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        });
    },
    monthSel: function () {
        for (var i = 1; i <= 12; i++) {
            var today = new Date();
            if ((today.getMonth() + 1) == i) {
                this.append("<option selected='selected' value='" + i + "'>" + i + "月" + "</option>");
            } else {
                this.append("<option value='" + i + "'>" + i + "月" + "</option>");
            }
        }
    }
});

function getStartTime(start) {
    if (start == "") {
        start = new Date().getFullYear() + "-01-01 00:00:00";
    }
    else {
        start += "";
    }
    return start;
}
function getEndTime(end) {
    if (end == "") {
        var d = new Date();
        var month = (d.getMonth() + 1) > 9 ? (d.getMonth() + 1) : ("0" + (d.getMonth() + 1));
        var day = d.getDate() > 9 ? d.getDate() : ("0" + d.getDate());
        var hour = d.getHours() > 9 ? d.getHours() : ("0" + d.getHours());
        var min = d.getMinutes() > 9 ? d.getMinutes() : ("0" + d.getMinutes());
        var sec = d.getSeconds() > 9 ? d.getSeconds() : ("0" + d.getSeconds());
        end = d.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
    }
    else {
        end += "";
    }
    return end;
}



