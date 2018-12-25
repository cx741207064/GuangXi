
function treeMemu() {
    $("#browser").tree({
        checkbox: false,
        url: 'getTreeList.ashx?id=0',
        onBeforeExpand: function (node, param) {
            $('#browser').tree('options').url = "getTreeList.ashx?id=" + node.id;
        },
        onClick: function (node) {
            var state = node.state;
            if (!state) {                                   //判断当前选中的节点是否为根节点                          
                currentId = node.id;
                $("#chooseOk").attr("disabled", false);   //如果为根节点 则OK按钮可用 
            } else {
                $("#chooseOk").attr("disabled", true);    //如果不为根节点 则OK按钮不可用
            }
            searchTree(node.id);
        }
    });
}

//tree查询方法
function searchTree(zltype) {
    var searchText = $("#searchText").val();
    var zlflag = $("#zlflag").val();
    $("#searchTb").setGridParam({
        url: "getTreeSearch.ashx",
        postData: {
            "zltype": zltype,
            "zltitle": searchText,
            "zlflag": zlflag
        }
    }).trigger("reloadGrid");
};


//获取checkbox的值
function getCheckbox() {
    var inputId = document.getElementById("zlflag");
    var checkName = document.getElementsByName("checkbox");
    var tval = "";
    for (i = 0; i < checkName.length; i++) {
        if (checkName.item(i).checked == true) {
            tval += (checkName.item(i).value + ',');
        }
    }
    inputId.value = tval.substr(0, tval.length - 1);
};

function gjSearchBut() {
    $("#gjSearchForm").submit();
    //var form = $("#gjSearchForm");
    //$.post(form.attr('action'),form.serializeArray(),function(data){
    //	window.open(data);
    //});
}



//回车事件
document.onkeydown = function (e) {
    var theEvent = window.event || e;
    var code = theEvent.keyCode || theEvent.which;
    if (code == 13) {
        $("#searchBut").click();
    }
}
$(document).ready(function () {
    $("#searchBut").click(function () {
        search();
    })
});


function showHidden(id) {
    var mxnrId = document.getElementById("tbHid");
    var showmx = document.getElementById("showtb");
    var hiddenmx = document.getElementById("hiddentb");
    if (id == "show") {
        mxnrId.style.display = 'none';
        showmx.style.display = 'none';
        hiddenmx.style.display = '';
    } else if (id == "hidden") {
        mxnrId.style.display = '';
        showmx.style.display = '';
        hiddenmx.style.display = 'none';
    }
}