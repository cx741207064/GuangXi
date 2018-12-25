//下载附件
function downloadFj(fjName) {
    if ('YFFY_JJKC_FJ1' == fjName) {
        $("#fjName").val("YFFY_JJKC_FJ1");
    } else if ('YFFY_JJKC_FJ2' == fjName) {
        $("#fjName").val("YFFY_JJKC_FJ2");
    } else if ('YFFY_JJKC_FJ3' == fjName) {
        $("#fjName").val("YFFY_JJKC_FJ3");
    } else if ('YFFY_JJKC_FJ4' == fjName) {
        $("#fjName").val("YFFY_JJKC_FJ4");
    } else if ('YFFY_JJKC_FJ5' == fjName) {
        $("#fjName").val("YFFY_JJKC_FJ5");
    } else if ('YFFY_JJKC_FJ6' == fjName) {
        $("#fjName").val("YFFY_JJKC_FJ6");
    }
    document.yffyjjkcxzForm.action = "/WSSBSL/doScxzYffyjjkcXz.action";
    document.yffyjjkcxzForm.submit();
}