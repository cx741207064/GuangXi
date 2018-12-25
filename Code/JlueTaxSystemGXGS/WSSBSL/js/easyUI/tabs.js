
function addTab(title, url, closable) {
    if (existsTab(title)) {
        selectTab(title);
    } else {
        var thisId = window.top.getTabid();
        var id = 'tabid' + thisId;
        $('#tabList').tabs('add', {
            id: id,
            title: title,
            content: '<iframe id="mainiframe' + id + '" name="mainiframe' + id + '" src="' + url + '" width="100%" height="100%" marginheight="0" marginwidth="0" scrolling="auto" frameborder="0" allowtransparency="true"></iframe>',
            closable: closable,
            cache: false
        });
        thisId = thisId + 1;
        window.top.setTabid(thisId);
    }
}



function selectTab(title) {
    $('#tabList').tabs('select', title);
}

function existsTab(title) {
    return $('#tabList').tabs('exists', title);
}

function getTab(title) {
    return $('#tabList').tabs('getTab', title);
}

function getTableTab(title) {
    var tab = $('#tabList').tabs('getTab', title);
    if (tab == null) {
        tab = $('#tabList').tabs('getTab', "√" + title);
    }
    return tab;
}

function getSelectedTab() {
    return $('#tabList').tabs('getSelected');
}

function closeTab(title) {
    $('#tabList').tabs('close', title);
}

function tabsOptions(options) {
    $('#tabList').tabs(options);
}

function reloadTab() {
    var currtab = getSelectedTab();
    if (currtab) {
        var currid = currtab.panel('options').id;
        var iframeid = "mainiframe" + currid;
        window.frames[iframeid].document.location.reload();
    }
}

function closeAllTab() {
    var titles = new Array();
    var tabList = tabs();
    for (var j = 0; j < tabList.length; j++) {
        var title = tabList[j].panel('options').title;
        titles.push(title);
    }
    for (var i = 0; i < titles.length; i++) {
        closeTab(titles[i]);
    }
}

function tabs() {
    return $('#tabList').tabs('tabs');
}

function updateTitle(oldTitle, newTitle, prarmObj) {
    prarmObj.title = newTitle;
    var tab = getTab(oldTitle);
    $('#tabList').tabs('update', { tab: tab, options: prarmObj });
}
