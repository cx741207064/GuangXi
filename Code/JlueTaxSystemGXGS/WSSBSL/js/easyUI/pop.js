
var timeCount = 0;
var progressShow = false;
$(function () {
    proTimeout();
});

function confirm(title, msg, fun) {
    $.messager.confirm(title, msg, fun);
}

function prompt(title, msg, fun) {
    $.messager.prompt(title, msg, fun);
}

function alert(title, msg, type, fun) {
    $.messager.alert(title, msg, type, fun);
}

function progress(title, msg) {
    progressShow = true;
    timeCount = 0;
    $.messager.progress({ title: title, msg: msg });

}

function closeProgress() {
    $.messager.progress('close');
    progressShow = false;
    timeCount = 0;
}

function proTimeout() {
    if (progressShow == true) {
        timeCount = timeCount + 1;
        if (timeCount > 120) {
            closeProgress();
            alert("操作超时", "您的操作已经超时，请刷新页面重试。", "warning");
        }
    }
    setTimeout(proTimeout, 1000);
}
