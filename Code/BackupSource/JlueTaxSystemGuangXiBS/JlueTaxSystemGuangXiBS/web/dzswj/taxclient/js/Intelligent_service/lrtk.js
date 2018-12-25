$(function() { 
	$("#scrollsidebar").fix({
		float : 'right',	//default.left or right
		//minStatue : true,
		skin : 'green',	//default.gray or blue
		position : 'absolute',
		durationTime : 600
	});
	$("#scrollsidebar").bgiframe();//悬浮在线客服永远在窗口的最前面
});

$.fn.fix = function(options){
    var defaults = {
        float : 'left',
		minStatue : false,
		skin : 'blue',
		durationTime : 1000	
    }
    var options = $.extend(defaults, options);		

    this.each(function(){			
        //获取对象
		var thisBox = $(this),
			side_zxkf = thisBox.find('.side_zxkf' ),
			closeBtn = thisBox.find('.close_btn' ),
			show_btn = thisBox.find('.show_btn' ),
			sideContent = thisBox.find('.side_content'),
			sideList = thisBox.find('.side_list');	
		var defaultTop = thisBox.offset().top;	//对象的默认top	
		
		thisBox.css(options.float, 0);			
		if(options.minStatue){
			$(".show_btn").css("float", options.float);
			sideContent.css('width', 0);
			show_btn.css('width', 38);
			
		}
		//皮肤控制
		if(options.skin) thisBox.addClass('side_'+options.skin);
			
					
		//核心scroll事件			
		$(window).bind("scroll",function(){
			var offsetTop = defaultTop + $(window).scrollTop() + "px";
            thisBox.animate({
                top: offsetTop
            },
            {
                duration: options.durationTime,	
                queue: false    //此动画将不进入动画队列
            });
		});	
		//客服点击事件
		side_zxkf.bind("click",function(){
			if(!move){
				main.onZxkf();
			}
		});
		//close事件
		closeBtn.bind("click",function(){
			sideContent.animate({width: '0px'},"fast");
        	show_btn.stop(true, true).delay(300).animate({ width: '38px'},"fast");
			oDiv.style.height = "66px";
			
			$('.bgiframe').css("width","34px");
			$('.bgiframe').css("height","66px");
		});
		//show事件
		show_btn.click(function() {
			if(!move){
				$(this).animate({width: '0px'},"fast");
				sideContent.stop(true, true).delay(200).animate({ width: '116px'},"fast");
				oDiv.style.height = "150px";

				$('.bgiframe').css("width","93px");
			$('.bgiframe').css("height","150px");
			}
        });
			
    });	//end this.each
    
    var oDiv = document.getElementById("scrollsidebar"); 
    var move,uptop;
    oDiv.onmousedown=function(){
    	var oEvent = event;
    	//var disX = oEvent.clientX - oDiv.offsetLeft;
    	var disY = oEvent.clientY - oDiv.offsetTop;  
    	move=false;
    	uptop=oDiv.offsetTop;
    	
    	document.onmousemove=function (){
    		//move=true;
    		oEvent = event;
    		//oDiv.style.left = oEvent.clientX -disX+"px";
    		oDiv.style.top = oEvent.clientY -disY + "px";
    		if(uptop!=oDiv.offsetTop){
    			move=true;
    		}
    	}
    	document.onmouseup=function(){
    		document.onmousemove=null;
    		document.onmouseup=null;
    		if(oDiv.offsetTop <0){
    			oDiv.style.top = "0px";
    		}else if(oDiv.offsetTop > 600){
    			oDiv.style.top = "600px";
    		}
    	}
    };

};