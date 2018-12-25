// 1. “本期应纳税额”=“计税依据”×“税率”；
function fs5(realvalue, showvalue, rowData, el, row, srcRealvalue) {
    var grid = $w('fjsSbxxGrid');// 表格对象
    //  var c = rowData.getValue('jsyj') / 1 * (rowData.getValue('sl1') / 1);
    var c = (rowData.getValue('jsyj') / 1).multiple(rowData.getValue('sl1') / 1).round(2);

    var d = {
        "tds": {
            "ynse": {
                "value": c
            }
        }
    };
    grid.updateRow(row, d);

    //  var c1 = c - (rowData.getValue('jmse') / 1)- (rowData.getValue('yjse1') / 1);
    var c1 = (c).subtract(rowData.getValue('jmse') / 1).subtract(rowData.getValue('yjse1') / 1).round(2);
    var d1 = {
        "tds": {
            "ybtse": {
                "value": c1
            }
        }
    };
    grid.updateRow(row, d1);

}
// 2. “本期应补（退）税额”=“本期应纳税额”-“减免税额”-“已缴税额”。
function fs8(realvalue, showvalue, rowData, el, row, srcRealvalue) {
    var grid = $w('fjsSbxxGrid');// 表格对象
    //  var c = rowData.getValue('ynse') / 1 - (rowData.getValue('jmse') / 1) - (rowData.getValue('yjse1') / 1);
    var c = (rowData.getValue('ynse') / 1).subtract(rowData.getValue('jmse') / 1).subtract(rowData.getValue('yjse1') / 1).round(2);

    var d = {
        "tds": {
            "ybtse": {
                "value": c
            }
        }
    };
    grid.updateRow(row, d);
}