

/* 给页面元素注册事件 */
function addMouseEvent(tispHash){
  $$("a[mtips]").addEvent("mouseenter", function(event) {
     var x = event.client.x;
	 var y = event.client.y;
     var mtipsvalue = $$(this).getProperty("mtips");
	 showTips(mtipsvalue[0],x,y);
  });
  
  $$("[name]").each(function(item){
	  var namevalue = item.getAttribute("name");
	  var tipvalue = tispHash.get(namevalue);
	  if(tipvalue && $chk(tipvalue)){
		item.addEvent("mouseenter", function(event) {
			var x = event.client.x;
			var y = event.client.y;
			showTips(tispHash.get(namevalue),x,y);
		});
	 }	  
  });
}

/* 显示提示信息 */
function showTips(msg,x,y) {
	var mbox = Mbox.remind(msg, {
		time: 1000,
		overlay: false
	});
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var msglenght = 0;
	if(msg.length < 2){
	    msglenght = 300;
	}else{
		msglenght = ( msg.length * 15 ) + 50;
	}
	//alert(w);
	//alert(((x+10)+msglenght));
    if(((x+10)+msglenght)>w){
	    x = w - msglenght - 20;
	}else{
		x = x +	10;
	}
	//alert(x);
	$$("div.mbox_remind").setStyles({position:"fixed",left:""+x+"px",top:""+(y+20)+'px',width:msglenght+'px'});
    //mbox.reposition(true); position:fixed; left:300px; top:200px;
}


/* 打开窗口 */
function openBox(title,nowHtml) {
	Mbox.open({
		url: nowHtml,
		type: "string",
		title: title,
		width: 500,
		height:300,
		useFx: true,
		onShow: function() {
			var self = this;
			if ($("testMore")) {
				$("testMore").addEvent("click", function() {
					var rel = this.getProperty("rel");
					if (rel && $(rel)) {
						$(rel).setStyle("display", "block");
						this.dispose();
						self.reposition(true);
					}
					return false;	
				});
			}
		}
	});
};

function openIframe(title,url) {
	var bodyHeight = parseFloat($(window.document.body).getCoordinates().height) || 0;
	//bodyHeight -= 20;
	var middleHeight = bodyHeight - 80; // 计算中间区域高度
	
	var bodyWidth = parseFloat($(window.document.body).getCoordinates().width) || 0;
	var middleWidth = bodyWidth - 100 - 20; // 计算中间区域高度
	Mbox.close();
	Mbox.open({
		title: title,
		url: url,
		width: middleWidth,
		height: middleHeight,
		type: "iframe",
		useFx: true,
		ajax: true	
	});
};



/* 显示提示信息 */
function showTipsInit(msg,width,height) {
	if(!height || height <1){
	   height = 200;
	}
	if(!width || width <1){
	   width = 500;
	}
	var mbox = Mbox.remind(msg, {
		time: 10000,
		overlay: false
	});
	$$("div.mbox_remind").setStyles({width:width+'px',height:height+'px'});
}



/* 桌面切换方法 */
function changeDesktop(dtxh){
	var winheight = window.screen.availHeight;
	var winwidth = window.screen.availWidth-10;
	var l = 0;
	var t = 0;
	var features = "toolbar=0,location=0,status=0,directories=0,titlebar=0,menubar=0,scrollbars=0,modal=yes,resizable=yes,width=" + winwidth + ",height=" + winheight + ",left=" + l + ",top=" + t;
	var wn = '';
	if(dtxh == 3){
		window.open("../sword?ctrl=DZBSXTKJ001YhmMmDlCtrl_openWin&t=" + Math.random(), '_self', features);
	}else if(dtxh == 5){
		window.open("../sword?ctrl=WBLoginNfCtrl_openWin&t=" + Math.random(), '_self', features);
	}else{
		window.open("../sword?ctrl=WBLoginNfCtrl_openWin&t=" + Math.random(), '_self', features);
	}
}


