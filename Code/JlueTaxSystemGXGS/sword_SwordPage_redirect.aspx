<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_SwordPage_redirect.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_SwordPage_redirect" %>




<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>访问系统出现异常</title>
    <script type="text/javascript" src="swordweb/core/jsimport/Sword.js"></script>
    <link href="swordweb/html/error/styles/errorinfo.css" rel="stylesheet" type="text/css"/>
</head>
<body style="overflow:hidden;height:167px;_height:165px;" onload="init()">
<div class="container" id="container">
    <div class="content">
        <div class="c_l" id='tubiao'></div>
        <table id="c_r" class="c_r">
            <tr>
                <td valign="middle" ><span id='exceptionMes'></span></td>
            </tr>
        </table>
    </div>
    <div class="c_info" id="c_Info_DIV">
        <table>
            <tr>
                <td class="picdown" onclick='showmsg()' id="tdMsg"></td>
                <th><a href="javascript:void(0)" onclick='showmsg()' id="pict">显示详细信息</a></th>
                <th width="400px"></th>
                <th><a id='ywpt' href="javascript:void(0)" style="font-weight:bold;" onclick='showywpt()'>异常上报</a>
                </th>
            </tr>
        </table>

    </div>
    <div class="c_m">
        <div class="content_inner" style="display:none" id="detailMsgObj"></div>
    </div>
</div>
</body>
<script type="text/javascript">
    function closeError() {
        box.close();
    }
    function init() {
        if (typeof(box) == 'object')
            delayInit();
        else
            setTimeout("init()", 30);
    }
    function delayInit() {
        var data = box.options.param.data;
      //  document.getElementById("cwbmTR").style.display = (data['exceptionMes'] == "系统出错" || data['exceptionMes'] == data['exceptionName']) ? "none" : "";
      //  document.getElementById('exceptionName').innerHTML = data['exceptionName'];
        var mes = data['exceptionMes'].replace(/&lt;br&gt;/g, '<br>');
        var exnum = mes.substring(0,15);
        if(/^(\d{15})$/.test(exnum)){
        var tag = exnum.substring(5,6);
        var cl = this.document.getElementById('tubiao')
        if(tag==2){
        cl.style.background='url(swordweb/html/error/styles/images/warning.png) no-repeat'; 
        }else if(tag ==3){
        cl.style.background='url(swordweb/html/error/styles/images/error.png) no-repeat';
        }
        }
        document.getElementById('exceptionMes').innerHTML = mes;
        document.getElementById('detailMsgObj').innerHTML = ['<pre>',data['debugMes'],'</pre>'].join('');
    }
    var _ChargeClickMele_ = 0;
    var _isOpen = false;
    function chargeIsShowmsg() {
        if (_isOpen) {
            _ChargeClickMele_ = 0;
            _isOpen = false;
            showmsg();
            return;
        }
        if (_ChargeClickMele_ == 0)
            _ChargeClickMele_ = 1;
        else if (_ChargeClickMele_ == 3) {
            showmsg();
        }
        else
            _ChargeClickMele_ = 0;
    }
    function _addClickCount() {
        if (_ChargeClickMele_ == 1)_ChargeClickMele_ = 2
        else _ChargeClickMele_ = 0;
    }
    function _addClickCount1() {
        if (_ChargeClickMele_ == 2)_ChargeClickMele_ = 3
        else _ChargeClickMele_ = 0;
    }
    function showmsg(detailid) {
        var msg = document.getElementById('detailMsgObj');
        if (msg.style.display == 'none') {
            document.getElementById("tdMsg").className = 'picup';
            //box.popUpDiv.setStyle('height', 507).getElements("div").setStyle('height', 507);
            box.contentDiv.setStyle('height', 479);
            box.contentIframe.setStyle('height', 478);
            $(document.body).setStyle('height', 477);
            msg.style.display = '';
            _isOpen = true;
        } else {
            document.getElementById("tdMsg").className = 'picdown';
            box.contentDiv.setStyle('height', 167);
            box.contentIframe.setStyle('height', 166);
            msg.style.display = 'none';
            $(document.body).setStyle('height', 165);
        }
        return false;
    }
    function onlinehelp() {

    }
function showywpt() {
        if(!$chk(top.gt3bzptcs.bzptUrl)){
            alert('保障平台地址未进行配置，无法打开异常上报页面！');
            return;
        }
		PageContainer.implement({
        	SwordformSubmit:function (req, target) {
            var form = new Element('form', {
                'name':"swordDownLoadForm",
                'method':'post',
                'target':target,
                'action':top.gt3bzptcs.bzptUrl,
                styles:{'display':'none'}
            }).inject($(document.body));
            new Element('input', {
                'name':"businessTypeId"
            }).inject(form).set('value', "ITSM");
            new Element('input', {
                'name':"userId"
            }).inject(form).set('value', top.gt3bzptcs.gt3swrydm);
            new Element('input', {
                'name':"password"
            }).inject(form).set('value', top.gt3bzptcs.password);
            new Element('input', {
                'name':"pageIndex"
            }).inject(form).set('value', "QuickBill");
            new Element('input', {
                'name':"linkBusinessObjId"
            }).inject(form).set('value', "E6A3CFE9FF6C4D13AA8EB9E6DC306F");
            new Element('input', {
                'name':"businessObjId"
            }).inject(form).set('value', "1200C55A11054A34E05341280C645D");
            new Element('input', {
                'name':"operate"
            }).inject(form).set('value', "ADD");
            new Element('input', {
                'name':"readOnly"
            }).inject(form).set('value', "0");
            var jObj = '{"E6A3CFE9FF6C4D13AA8EB9E6DC306F":[{"EXTUSERID":"'+top.gt3bzptcs.gt3swrydm
					+'","GT3XXMS": "'+req.data[0].value
					+'","GT3SJLYDM":"'+top.gt3bzptcs.gt3sjlydm
					+'","GT3ZYYDM": "'+req.data[1].value
					+'","GT3YWFLDM":"'+req.data[2].value
            		+'","GT3GNDM":"'+req.data[3].value
					+'","GT3NSRSBH":"'+req.data[4].value
					+'","GT3RYMC":"'+top.gt3bzptcs.gt3rymc
					+'","GT3JGMC":"'+top.gt3bzptcs.gt3jgmc
					+'","GT3DLZH":"'+top.gt3bzptcs.gt3dlzh
					+'","GT3SWRYDM":"'+top.gt3bzptcs.gt3swrydm
					+'","GT3SWRYSFDM":"'+top.gt3bzptcs.gt3swrysfdm
					+'","GT3SWJGDM":"'+top.gt3bzptcs.gt3swjgdm
            		+'"}]}';
            new Element('input', {
                'name':"externalDataStr"
            }).inject(form).set('value', jObj);
	        form.submit();
        }
    });
    function getNsrsbh(){
    	var nsrsbhs = [];
    	var forms = box.options.param.win.$$('div[sword="SwordForm"]');
    	forms.each(function(el){
    		var name = el.get('name');
    		var form = box.options.param.win.$w(name);
    		var fieldElHash = form.fieldElHash;
    		fieldElHash.each(function(field){
    			if(field == name+"_nsrsbh"){
    				nsrsbhs.push(form.getValue("nsrsbh"))
    			}
    		})
    		
    	})
    	if(nsrsbhs.length == 1){
    		return nsrsbhs[0];
    	}else{
    		return "";
    	}
    }
    var data = box.options.param.data;
	var param = _getBizCode_();
	var nsrsbh = getNsrsbh();
    var sub = pc.create('SwordSubmit');
	sub.options.ctrl = 'zrIndex.do';

	sub.pushData('gt3xxms',data.debugMes);
	sub.pushData('gt3zyydm',param.gt3zyydm);
	sub.pushData('gt3ywfldm',param.gt3ywfldm);
	sub.pushData('gt3gndm',param.gndm);
	sub.pushData('gt3nsrsbh',nsrsbh);
	
	var winheight = screen.availHeight;
	var winwidth = screen.availWidth - 10;
	var sUserAgent = navigator.userAgent;
	var isWin2003 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
	if (isWin2003) winheight = winheight - 40
	var strEditDlgFeather = 'top=0,left=0,toolbar=no,menubar=no,scrollbars=no,width=' + winwidth + ',height=' + winheight + ',resizable=no,location=no, status=no';
	var ranNum = Math.random()+"";
	if(ranNum.indexOf('.')!=-1)ranNum = ranNum.substr(ranNum.indexOf('.')+1,ranNum.length);
	var openErrorWindowName = "openErrorWindowName"+ranNum;
	var openWin = top.window.open('about:blank',"",strEditDlgFeather);
	openWin.name = openErrorWindowName;
	sub.options.postType = "form_"+openErrorWindowName;
	sub.submit();
}
    
</script>
</html>

<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"gwssswjg","value":"14501070500","type":""},{"name":"sessionID","value":"6b5f475e7a9946ab9550ea3ad6bbad5c","type":""}]}'></div>

