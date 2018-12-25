var divId;


//启动时加载
$(function () {
    autoWidth();		//定时自动设置面板宽度
});

//定时自动设置宽度(0.3秒一次)
function autoWidth() {
    $("#tbxxDiv").width($("#tbxxDiv").parent().width());
    setTimeout(autoWidth, 300);
}

//窗口宽度及高度自适应
function iframeAutoSize() {
    var headHeight = $("#tbxxDiv").height() + 5;
    var id = "#" + divId;
    var parentTabWindowHeight = window.parent.getCurrTabWindowHeight();
    var mainheight = parentTabWindowHeight - headHeight;
    $(id).height(mainheight);
    var mainwidth = $("#tbxxDiv").width();
    $(id).width(mainwidth);
}

//根据select加载iframe
function loadIframe() {
    var jhhgSelect = $("#jhhgSelect").val();
    var sbjzqcxDiv = document.getElementById("sbjzqcxDiv");
    var mxsjscDiv = document.getElementById("mxsjscDiv");
    var jhjgcxDiv = document.getElementById("jhjgcxDiv");
    var zlfpxxDiv = document.getElementById("zlfpxxDiv");
    var jgtzsDiv = document.getElementById("jgtzsDiv");
    if (jhhgSelect == 'sbjzqcx') {
        divId = 'sbjzqcxDiv';
        iframeAutoSize();
        sbjzqcxDiv.style.display = "";
        mxsjscDiv.style.display = "none";
        jhjgcxDiv.style.display = "none";
        zlfpxxcxDiv.style.display = "none";
        jgtzsDiv.style.display = "none";
    }
    else if (jhhgSelect == 'mxsjsc') {
        divId = 'mxsjscDiv';
        iframeAutoSize();
        sbjzqcxDiv.style.display = "none";
        mxsjscDiv.style.display = "";
        jhjgcxDiv.style.display = "none";
        zlfpxxcxDiv.style.display = "none";
        jgtzsDiv.style.display = "none";

    }
    else if (jhhgSelect == 'jhjgcx') {
        divId = 'jhjgcxDiv';
        iframeAutoSize();
        sbjzqcxDiv.style.display = "none";
        mxsjscDiv.style.display = "none";
        jhjgcxDiv.style.display = "";
        zlfpxxcxDiv.style.display = "none";
        jgtzsDiv.style.display = "none";

    }
    else if (jhhgSelect == 'zlfpxxcx') {
        divId = 'zlfpxxcxDiv';
        iframeAutoSize();
        sbjzqcxDiv.style.display = "none";
        mxsjscDiv.style.display = "none";
        jhjgcxDiv.style.display = "none";
        zlfpxxcxDiv.style.display = "";
        jgtzsDiv.style.display = "none";
        zlfpxxcxIf.window.loadZlfpCx();//调用子页面方法
    }
    else if (jhhgSelect == 'jgtzs') {
        divId = 'jgtzsDiv';
        iframeAutoSize();
        sbjzqcxDiv.style.display = "none";
        mxsjscDiv.style.display = "none";
        jhjgcxDiv.style.display = "none";
        zlfpxxcxDiv.style.display = "none";
        jgtzsDiv.style.display = "";
    }

}
