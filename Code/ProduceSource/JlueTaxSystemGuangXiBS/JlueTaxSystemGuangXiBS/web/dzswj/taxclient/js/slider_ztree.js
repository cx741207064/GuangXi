$(document).ready(function () {
	slider.onload();
})
var slider = (function () {
	var li_init_width = 240; //上边iframe要显示的宽度,若需要调整默认宽度,请改此值即可.
	var s_init_width = 6; //分隔条宽度默认值
	var init = function () {
		var content_h = $(window).height() - 23;
		/*alert(content_h);*/

		// $("#main_iframe").css("height", content_h)
		var content_iframe = content_h - $("#rbox_topcenter").height();
		$(".content-wrapper").css("height", content_h + "px");
		$(".content-iframe,.mainContent").css("height", content_iframe + "px");
		$(".sidebar").css("height", content_h + "px");
		$(".sidebar_box").css("height", content_h - 24 + "px");
		$(window).resize(function () {
			slider.windowLoad();
		});
		window.isflsgrn = false;
		window.ieIsfSceen = false;
		var tabOuterWidth = slider.calSumWidth($(".content-tabs").children().not(".menuTabs"));
		var visibleWidth = $(".content-tabs").outerWidth(true) - tabOuterWidth;
	};
	return {
		onload: function () {
			init();
			slider.windowLoad();
			slider.leftsliderDrag();
			slider.dropDown();
			slider.tabAdd();
			slider.tabChange();
			slider.tabClose();
			slider.fullScreen();
			slider.tabLeft();
			slider.tabRight();
			slider.tabReload();
			slider.tabCloseAll();
			slider.tabCloseOther();
			slider.tabCurent()
			slider.tab_right_menu();
			//      	setTimeout(function(){
			//      		slider.tabIframe('税源信息采集','bsdt/xxcj/syxxcj.html');
			//      	},500)

		},
		windowLoad: function () {
			var top_w = $('#rbox_topcenter').height();
			var slider_w = $(".sidebar").outerWidth();
			var window_w = $(window).outerWidth();
			var window_h = $(window).outerHeight();
			var content_w = window_w - slider_w - 12 + "px";
			var content_iframe = window_h - $("#rbox_topcenter").height();
			$("#content-wrapper").css("width", content_w);
			$("#content-wrapper").css("height", window_h + "px");
			$(".content-iframe,.mainContent").css("height", content_iframe + "px");

		},
		/*左侧菜单栏拖拽*/
		leftsliderDrag: function (val) {
			var sidebarCon = $("#sidebar_ztree"); //left iframe
			var rightCon = $("#content-wrapper"); //right iframe
			var dragBOx = $("#dragBOx"); //中间分割条
			var dragMork = $(".dragMork");
			var shrink = $('.dragShrink');
			var drag = $("#drag"); //分隔条中的拖拽层.

			var clientWidth = $(window).width();
			var ri_width = clientWidth - li_init_width - s_init_width - 6; //底部iframe要显示的宽度

			//初始化
			sidebarCon.css("width", li_init_width + "px");
			rightCon.css("width", ri_width + "px");
			if (val && val == 1) {
				dragBOx.css("left", li_init_width + "px").css("width", s_init_width + "px");
			} else {
				dragBOx.css("left", li_init_width + "px").css("width", s_init_width + "px");

			}
			var is_drag = false; //是否点住并进行了拖拽
			drag.unbind("mousedown").mousedown(function () {
				//获得分隔条内拖拽层离顶边的距离
				var li_width = parseInt(sidebarCon.css("width"));
				var ri_width = parseInt(rightCon.css("width"));
				//分隔条div宽度设为100%,撑满屏,只有这样才能在拖拽分隔条时,有效的控制mouseup事件.
				dragBOx.css("width", "100%").css("left", "0px");
				dragMork.css("left", li_width + "px");
				shrink.css("left", li_width + "px");

				var start_x = event.clientX;

				drag.unbind("mousemove").mousemove(function (event) {
					is_drag = true;
					var current_x = event.clientX;
					var cha = current_x - start_x; //算偏移差量

					sidebarCon.css("width", (li_width + cha) + "px");
					rightCon.css("width", (ri_width - cha) + "px");
					dragMork.css("left", (li_width + cha) + "px");
					shrink.css("left", (li_width + cha) + "px");



				});

				drag.unbind("mouseup").mouseup(function (event) {
					var left = parseInt(dragMork.css("left"));
					dragBOx.css("width", s_init_width + "px").css("left", left + "px");
					dragMork.css("left", "0px");
					shrink.css("left", "0px");

					//处理非拖拽的click情况
					if (!is_drag) {
						//直接设定固定值
						sidebarCon.css("width", li_init_width + "px");
						dragBOx.css("left", li_init_width + "px");
						clientWidth = $(window).width();
						rightCon.css("width", (clientWidth - li_init_width - s_init_width) + "px");
					}

					drag.unbind("mousemove");
					is_drag = false;
				});
			});


			//当窗口大小发生改变时,重新渲染页面,以使各组件自适应高宽度.
			// $(window).resize(function () {
			// 	//顶部iframe保持高度不变,改变底部iframe高度
			// 	var clientWidth = $(window).width();
			// 	var li_width = parseInt(sidebarCon.css("width"));
			// 	var new_ri_width = clientWidth - li_width - s_init_width;
			// 	rightCon.css("width", new_ri_width + "px");

			// });
		},
		dropDown: function () {
			$(".dropdown").click(function () {
				$(this).parent("div").toggleClass("open")
			})
		},
		/*传入text和url寻找页面*/
		tabIframe: function (text1, url1, id1) {
			$(".nav-list li a")
				.find("span:Contains(" + text1 + ")")
				.parent("a.menuItem")
				.addClass("active_a")
				.parents(".submenu")
				.slideDown();
			$(".nav-list li a")
				.find("span:Contains(" + text1 + ")")
				.parent("a.menuItem").parents("li")
				.siblings("li").find(".submenu").slideUp();
			$("#nav-list li a")
				.find("span:Contains(" + text1 + ")")
				.parent("a.menuItem").parents("li")
				.siblings("li").find("a.menuItem").removeClass("active_a");
			$(".menu-min .nav-list li a")
				.find("span:Contains(" + text1 + ")")
				.parent("a.menuItem")
				.addClass("active_a")
				.parents(".submenu")
				.slideDown();


			var flag = true;
			if (url1 == undefined || $.trim(url1).length == 0) {
				return false;
			}
			$('.menuTab').each(function () {
				if ($(this).data('id') == id1) {
					if (!$(this).hasClass('active')) {
						$(this).addClass('active').siblings('.menuTab').removeClass('active');
						slider.scrollToTab(this);
						$('.mainContent .LRADMS_iframe').each(function () {
							if ($(this).data('id') == id1) {
								$(this).show().siblings('.LRADMS_iframe').hide();
								return false;
							}
						});
					}
					flag = false;

					if (url1) {
						var currentId = $('.page-tabs-content').find('.active').attr('data-id');
						var target = $('.LRADMS_iframe[data-id="' + currentId + '"]');
						var url = target.attr('src');
						target.attr('src', url);
						$(this).parents(".btn-group").toggleClass("open")
					}
					return false;
				}
			});
			if (flag) {
				var str = '<a href="javascript:;" class="active menuTab" data-url="' + url1 + '" data-id="' + id1 + '"><label class="nav_text">' + text1 + '</label> <span class="btn_close"><i class="icon iconfont icon-guanbi1"></i></span></a>';
				$('.menuTab').removeClass('active');
				var str0 = "";
				if (url1.indexOf("?") != -1) {
					str0 = "&";
				} else {
					str0 = "?";
				}
				var str1 = '<iframe class="LRADMS_iframe" id="iframe' + id1 + '" name="iframe' + id1 + '"  width="100%" height="100%" src="' + url1 + str0 + 'mkxkid=' + id1 + '" frameborder="0" data-id="' + id1 + '" data-url="' + url1 + '" seamless></iframe>';
				$('.mainContent').find('iframe.LRADMS_iframe').hide();
				$('.mainContent').append(str1);
				$('.mainContent iframe:visible').load(function () {
					//$.loading(false);
				});
				$('.menuTabs .page-tabs-content').append(str);
				slider.scrollToTab($('.menuTab.active'));
                slider.tab_right_menu();
                var oFrame=$('.mainContent iframe:last-child');
                oFrame[0].onload = oFrame[0].onreadystatechange = function () {
                    if (this.readyState && this.readyState != 'complete') {
                    }
                    else {
                        oFrame.contents().find("body").click(function(){
                            $('.ul-context-menu').hide()
                        })
                    }
                }
			}
			return false;
		},
		tabIframeCygn: function (text1, url1) {
			url1 = decodeURIComponent(url1);
			$(".nav-list li a")
				.find("span:Contains(" + text1 + ")")
				.parent("a.menuItem")
				.addClass("active_a")
				.parents(".submenu")
				.slideDown();
			$(".nav-list li a")
				.find("span:Contains(" + text1 + ")")
				.parent("a.menuItem").parents("li")
				.siblings("li").find(".submenu").slideUp();
			$("#nav-list li a")
				.find("span:Contains(" + text1 + ")")
				.parent("a.menuItem").parents("li")
				.siblings("li").find("a.menuItem").removeClass("active_a");
			$(".menu-min .nav-list li a")
				.find("span:Contains(" + text1 + ")")
				.parent("a.menuItem")
				.addClass("active_a")
				.parents(".submenu")
				.slideDown();


			var flag = true;
			if (url1 == undefined || $.trim(url1).length == 0 || url1 == "undefined") {
				return false;
			}
			$('.menuTab').each(function () {
				if ($(this).data('url') == url1) {
					if (!$(this).hasClass('active')) {
						$(this).addClass('active').siblings('.menuTab').removeClass('active');
						slider.scrollToTab(this);
						$('.mainContent .LRADMS_iframe').each(function () {
							if ($(this).data('url') == url1) {
								$(this).show().siblings('.LRADMS_iframe').hide();
								return false;
							}
						});
					}
					flag = false;
					return false;
				}
			});
			if (flag) {
				var str = '<a href="javascript:;" class="active menuTab" data-url="' + url1 + '"><label class="nav_text">' + text1 + '</label><span class="btn_close"><i class="icon iconfont icon-guanbi1"></i></span></a>';
				$('.menuTab').removeClass('active');
				var str1 = '<iframe style="margin:10px;background:#F0F3F6" class="LRADMS_iframe" width="100%" height="100%" src="' + url1 + '" frameborder="0" data-url="' + url1 + '"></iframe>';
				$('.mainContent').find('iframe.LRADMS_iframe').hide();
				$('.mainContent').append(str1);
				$('.mainContent iframe:visible').load(function () {
					//$.loading(false);
				});
				$('.menuTabs .page-tabs-content').append(str);
				slider.scrollToTab($('.menuTab.active'));
			}
			return false;
		},
		/*增加menuTab*/
		tabAdd: function () {
			$('.sidebar_box').on("click", ".menuItem", function () {
				if ($(this).hasClass("active_a")) {
					var currentId = $('.page-tabs-content').find('.active').attr('data-id');
					var target = $('.LRADMS_iframe[data-id="' + currentId + '"]');
					var url = target.attr('src');
					target.attr('src', url).load(function () {});
					$(this).parents(".btn-group").toggleClass("open")

					var flag = true;
					var dataUrl = $(this).attr('data-url');
					var dataId = $(this).attr('data-id');
					var menuName = $.trim($(this).text());
					if (dataUrl == undefined || $.trim(dataUrl).length == 0) {
						return false;
					}
					$('.menuTab').each(function () {
						if ($(this).data('id') == dataId) {
							if (!$(this).hasClass('active')) {
								$(this).addClass('active').siblings('.menuTab').removeClass('active');
								slider.scrollToTab(this);
								$('.mainContent .LRADMS_iframe').each(function () {
									if ($(this).data('id') == dataId) {
										$(this).show().siblings('.LRADMS_iframe').hide();
										return false;
									}
								});
							}
							flag = false;
							return false;
						}
					});

					if (flag) {
						var str = '<a href="javascript:;" class="active menuTab" data-id="' + dataId + '" data-url="' + dataUrl + '"><label class="nav_text">' + menuName + '</label> <span class="btn_close"></span></a>';
						$('.menuTab').removeClass('active');
						var str1 = '<iframe style="margin:10px;background:#F0F3F6" class="LRADMS_iframe" id="iframe' + dataId + '" name="iframe' + dataId + '"  width="100%" height="100%" src="' + dataUrl + '" frameborder="0" data-id="' + dataId + '"  data-url="' + dataUrl + '"seamless></iframe>';
						$('.mainContent').find('iframe.LRADMS_iframe').hide();
						$('.mainContent').append(str1);
						$('.mainContent iframe:visible').load(function () {
							//$.loading(false);
						});
						$('.menuTabs .page-tabs-content').append(str);
						slider.scrollToTab($('.menuTab.active'));
					}
					return false;

				} else {
					$(this).parents(".sidebar").find(".menuItem").removeClass("active_a");
					$(this).addClass("active_a");
					var dataId = $(this).attr('data-id');
					if (dataId != "") {}
					var dataUrl = $(this).attr('data-url');

					var menuName = $.trim($(this).text());
					var flag = true;
					if (dataUrl == undefined || $.trim(dataUrl).length == 0) {
						return false;
					}
					$('.menuTab').each(function () {
						if ($(this).data('id') == dataId) {
							if (!$(this).hasClass('active')) {
								$(this).addClass('active').siblings('.menuTab').removeClass('active');
								slider.scrollToTab(this);
								$('.mainContent .LRADMS_iframe').each(function () {
									if ($(this).data('id') == dataId) {
										$(this).show().siblings('.LRADMS_iframe').hide();
										return false;
									}
								});
							}
							flag = false;
							return false;
						}
					});
					if (flag) {
						var str = '<a href="javascript:;" class="active menuTab" data-id="' + dataId + '" data-url="' + dataUrl + '"><label class="nav_text">' + menuName + '</label> <span class="btn_close"></span></a>';
						$('.menuTab').removeClass('active');
						var str1 = '<iframe style="margin:10px;background:#F0F3F6" class="LRADMS_iframe" id="iframe' + dataId + '" name="iframe' + dataId + '"  width="100%" height="100%" src="' + dataUrl + '" frameborder="0" data-id="' + dataId + '"  data-url="' + dataUrl + '" seamless></iframe>';
						$('.mainContent').find('iframe.LRADMS_iframe').hide();
						$('.mainContent').append(str1);
						$('.mainContent iframe:visible').load(function () {
							//$.loading(false);
						});
						$('.menuTabs .page-tabs-content').append(str);
						slider.scrollToTab($('.menuTab.active'));
					}
					return false;
				}
			})
		},
		/*切换menuTab*/
		tabChange: function () {
			$('.menuTabs').on('click', '.menuTab', function () {
				var currentId = $(this).data('id');
				/*console.log(currentId);*/
				if (!$(this).hasClass('active')) {
					$('.mainContent .LRADMS_iframe').each(function () {
						if ($(this).data('id') == currentId) {
							$(this).show().siblings('.LRADMS_iframe').hide();
							return false;
						}
					});
					$(this).addClass('active').siblings('.menuTab').removeClass('active');
					slider.scrollToTab(this);
					if ($(this).html() == '首页') {
						$('.mainContent .LRADMS_iframe').each(function () {
							if ($(this).attr('src') == currentId) {
								$(this).attr("src", currentId);
								return false;
							}
						});
					}
				}
			});
		},

		//关闭特定的标签
		closeSpe: function (name) {
			var dataId = "";
			for (var i = 0; i < $('.page-tabs-content a').length; i++) {
				var $li = $('.page-tabs-content a').eq(i);
				if ($li.find('label') && $li.find('label').html() == name) {
					dataId = $li.attr("data-id");
					$li.remove();
				}
			}

			for (var j = 0; j < $('.LRADMS_iframe').length; j++) {
				var $iframe = $('.LRADMS_iframe').eq(j);
				if ($iframe.attr("name") && $iframe.attr("name") == ("iframe" + dataId)) {
					$iframe.remove();
				}
			}
		},
		/*关闭menuTab*/
		tabClose: function () {
			$('.menuTabs').on('click', '.menuTab span', function () {
				slider.scrollToTab($('.menuTab.active'));
				var closeTabId = $(this).parents('.menuTab').data('id');
				var currentWidth = $(this).parents('.menuTab').width();
				if ($(this).parents('.menuTab').hasClass('active')) {
					if ($(this).parents('.menuTab').next('.menuTab').size()) {
						var activeId = $(this).parents('.menuTab').next('.menuTab:eq(0)').data('id');
						$(this).parents('.menuTab').next('.menuTab:eq(0)').addClass('active');

						$('.mainContent .LRADMS_iframe').each(function () {
							if ($(this).data('id') == activeId) {
								$(this).show().siblings('.LRADMS_iframe').hide();
								return false;
							}
						});
						var marginLeftVal = parseInt($('.page-tabs-content').css('margin-left'));
						if (marginLeftVal < 0) {
							$('.page-tabs-content').animate({
								marginLeft: (marginLeftVal + currentWidth) + 'px'
							}, "fast");
						}
						$(this).parents('.menuTab').remove();
						$('.mainContent .LRADMS_iframe').each(function () {
							/*console.log(closeTabId)*/
							if ($(this).data('id') == closeTabId) {
								$(this).remove();
								return false;
							}
						});
					}
					if ($(this).parents('.menuTab').prev('.menuTab').size()) {
						var activeId = $(this).parents('.menuTab').prev('.menuTab:last').data('id');
						$(this).parents('.menuTab').prev('.menuTab:last').addClass('active');
						$('.mainContent .LRADMS_iframe').each(function () {
							if ($(this).data('id') == activeId) {
								$(this).show().siblings('.LRADMS_iframe').hide();
								return false;
							}
						});
						$(this).parents('.menuTab').remove();
						$('.mainContent .LRADMS_iframe').each(function () {
							if ($(this).data('id') == closeTabId) {
								$(this).remove();
								return false;
							}
						});
					}
				} else {
					$(this).parents('.menuTab').remove();
					$('.mainContent .LRADMS_iframe').each(function () {
						if ($(this).data('id') == closeTabId) {
							$(this).remove();
							return false;
						}
					});
					slider.scrollToTab($('.menuTab.active'));
				}
				return false;
			});
		},
		fullscreenEnable: function () {
			var isFullscreen = document.fullscreenEnabled || window.fullScreen ||
				document.mozFullscreenEnabled || document.webkitIsFullScreen;
			return isFullscreen;
		},
		fScreen: function () {
			var docElm = document.documentElement;
			if (docElm.requestFullscreen) {
				docElm.requestFullscreen();
			} else if (docElm.msRequestFullscreen) {
				docElm.msRequestFullscreen();
				ieIsfSceen = true;
			} else if (docElm.mozRequestFullScreen) {
				docElm.mozRequestFullScreen();
			} else if (docElm.webkitRequestFullScreen) {
				docElm.webkitRequestFullScreen();
			} else {
				window.parent.hideTopBottom();
				isflsgrn = true;
				$("#fsbutton").text("退出全屏");
			}
		},
		cfScreen: function () {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			} else {
				window.parent.showTopBottom();
				isflsgrn = false;
				$("#fsbutton").text("全屏");
			}
		},
		exitFullscreen: function () {
			var de = document;
			if (de.exitFullscreen) {
				de.exitFullscreen();
			} else if (de.mozCancelFullScreen) {
				de.mozCancelFullScreen();
			} else if (de.webkitCancelFullScreen) {
				de.webkitCancelFullScreen();
			}
		},
		/*全屏设置*/
		fullScreen: function () {
			$('.fullscreen').on('click', function () {
				slider.windowLoad();
				var isfScreen = slider.fullscreenEnable();
				if (!isfScreen && isflsgrn == false) {
					if (ieIsfSceen == true) {
						document.msExitFullscreen();
						ieIsfSceen = false;
						return;
					}
					slider.fScreen();
				} else {
					slider.cfScreen();
				}
			});
		},
		calSumWidth: function (element) {
			var width = 0;
			$(element).each(function () {
				width += $(this).outerWidth(true);
			});
			return width;
		},
		scrollToTab: function (element) {
			var marginLeftVal = slider.calSumWidth($(element).prevAll()),
				marginRightVal = slider.calSumWidth($(element).nextAll());
			var tabOuterWidth = slider.calSumWidth($(".content-tabs").children().not(".menuTabs"));
			var visibleWidth = $(".content-tabs").outerWidth(true) - tabOuterWidth;
			var scrollVal = 0;
			if ($(".page-tabs-content").outerWidth() < visibleWidth) {
				scrollVal = 0;
			} else if (marginRightVal <= (visibleWidth - $(element).outerWidth(true) - $(element).next().outerWidth(true))) {
				if ((visibleWidth - $(element).next().outerWidth(true)) > marginRightVal) {
					scrollVal = marginLeftVal;
					var tabElement = element;
					while ((scrollVal - $(tabElement).outerWidth()) > ($(".page-tabs-content").outerWidth() - visibleWidth)) {
						scrollVal -= $(tabElement).prev().outerWidth();
						tabElement = $(tabElement).prev();
					}
				}
			} else if (marginLeftVal > (visibleWidth - $(element).outerWidth(true) - $(element).prev().outerWidth(true))) {
				scrollVal = marginLeftVal - $(element).prev().outerWidth(true);
			}
			$('.page-tabs-content').animate({
				marginLeft: 0 - scrollVal + 'px'
			}, "fast");
		},
		/*页签向右滚动*/
		tabLeft: function () {
			$('.tabLeft').on('click', function () {
				var marginLeftVal = Math.abs(parseInt($('.page-tabs-content').css('margin-left')));
				var tabOuterWidth = slider.calSumWidth($(".content-tabs").children().not(".menuTabs"));
				var visibleWidth = $(".content-tabs").outerWidth(true) - tabOuterWidth;
				var scrollVal = 0;
				if ($(".page-tabs-content").width() < visibleWidth) {
					$('.page-tabs-content').animate({
						marginLeft: 0 + 'px'
					}, "fast");
				} else {
					var tabElement = $(".menuTab:first");
					var offsetVal = 0;
					while ((offsetVal + $(tabElement).outerWidth(true)) <= marginLeftVal) {
						offsetVal += $(tabElement).outerWidth(true);
						tabElement = $(tabElement).next();
					}
					offsetVal = 0;
					if (slider.calSumWidth($(tabElement).prevAll()) > visibleWidth) {
						while ((offsetVal + $(tabElement).outerWidth(true)) < (visibleWidth) && tabElement.length > 0) {
							offsetVal += $(tabElement).outerWidth(true);
							tabElement = $(tabElement).prev();
						}
						scrollVal = slider.calSumWidth($(tabElement).prevAll());
					}
				}
				$('.page-tabs-content').animate({
					marginLeft: 0 - scrollVal + 'px'
				}, "fast");
			});
		},
		/*页签向左滚动*/
		tabRight: function () {
			$('.tabRight').on('click', function () {
				var marginLeftVal = Math.abs(parseInt($('.page-tabs-content').css('margin-left')));
				var tabOuterWidth = slider.calSumWidth($(".content-tabs").children().not(".menuTabs"));
				var visibleWidth = $(".content-tabs").outerWidth(true) - tabOuterWidth;
				var scrollVal = 0;
				if ($(".page-tabs-content").width() < visibleWidth) {
					return false;
				} else {
					var tabElement = $(".menuTab:first");
					var offsetVal = 0;
					while ((offsetVal + $(tabElement).outerWidth(true)) <= marginLeftVal) {
						offsetVal += $(tabElement).outerWidth(true);
						tabElement = $(tabElement).next();
					}
					offsetVal = 0;
					while ((offsetVal + $(tabElement).outerWidth(true)) < (visibleWidth) && tabElement.length > 0) {
						offsetVal += $(tabElement).outerWidth(true);
						tabElement = $(tabElement).next();
					}
					scrollVal = slider.calSumWidth($(tabElement).prevAll());
					if (scrollVal > 0) {
						$('.page-tabs-content').animate({
							marginLeft: 0 - scrollVal + 'px'
						}, "fast");
					}
				}
			});
		},
		/*刷新当前*/
		tabReload: function () {
			$(".tabReload").click(function () {
				var currentId = $('.page-tabs-content').find('.active').attr('data-id');
				var target = $('.LRADMS_iframe[data-id="' + currentId + '"]');
				var url = target.attr('src');
				target.attr('src', url).load(function () {});
				$(this).parents(".btn-group").toggleClass("open")
			});
		},
		/*关闭所有页签*/
		tabCloseAll: function () {
			$('.tabCloseAll').on('click', function () {
				$('.page-tabs-content').children("[data-id]").find('.btn_close').each(function () {
					$('.LRADMS_iframe[data-id="' + $(this).data('id') + '"]').remove();
					$(this).parents('a').remove();
				});
				$('.page-tabs-content').find("a:first-child").addClass("active").siblings("a").removeClass("active")
				$(".LRADMS_iframe:first-child").show().siblings(".LRADMS_iframe").hide();
				$('.page-tabs-content').css("margin-left", "0");
				$(this).parents(".btn-group").toggleClass("open")
			});
		},
		/*关闭其他页签*/
		tabCloseOther: function () {
			$(".tabCloseOther").click(function () {
				$('.page-tabs-content').children("[data-id]").find('.btn_close').parents('a').not(".active").each(function () {
					$('.LRADMS_iframe[data-id="' + $(this).data('id') + '"]').remove();
					$(this).remove();
				});
				$('.page-tabs-content').css("margin-left", "0");
				$(this).parents(".btn-group").toggleClass("open")
			})
		},
		/*关闭当前标签页*/
		tabCurent: function () {
			$('.tabCloseCurrent').on('click', function () {
				$('.page-tabs-content').find('.active i').trigger("click");
			});
		},

		//    侧边栏收缩功能
		dragShrink: function () {
			if ($('.dragShrink').hasClass("active")) {
				$('.dragShrink').removeClass("active");
				$('#sidebar_ztree').addClass('minZtree');
				$('.dragShrink i').removeClass("icon-xiaotuziCduan_");
				$('.dragShrink i').addClass("icon-xiaotuziCduan_-copy");
				li_init_width = 0;
				$('#dragBOx').css("left", 0);
				$('.content-wrapper').css("width", $('.content-wrapper').width() + 240 + 'px');
				$('#drag').hide();
				$('#dragBOx').css("cursor", "auto");
				slider.leftsliderDrag(1);
			} else {
				$('.dragShrink').addClass("active");
				$('#sidebar_ztree').removeClass('minZtree').css("width", "240px");
				$('.dragShrink i').removeClass("icon-xiaotuziCduan_-copy");
				$('.dragShrink i').addClass("icon-xiaotuziCduan_");
				li_init_width = 240;
				$('#dragBOx').css("left", li_init_width);
				$('.content-wrapper').css("width", $('.content-wrapper').width() - 240 + 'px');
				$('#drag').show();
				$('#dragBOx').css("cursor", "col-resize");
				slider.leftsliderDrag();
			}
		},
		/*全屏*/
		fullscreen_true: function (e) {
            if ($(e).hasClass("active")) {
                $(e).removeClass("active");
                $("#sidebar_ztree").hide();
                $(window.parent.document).find(".g_hd").hide();
                slider.dragShrink();
                $("#dragBOx").hide();
                if ($("#sidebar_ztree").css("display") == "none") {
                    $("#sidebar_ztree").css("width", "0px");
                }
                $(window.parent.document).find("#main_iframe").css("height", $(window).height() + 90 + "px");
                slider.windowLoad();
            } else {
                $(e).addClass("active");
                $("#sidebar_ztree").show();
                $(window.parent.document).find(".g_hd").show();
                slider.dragShrink();
                $("#dragBOx").show();
                $(window.parent.document).find("#main_iframe").css("height", $(window).height() - 90 + "px");
                slider.windowLoad();
            }
			// $("#sidebar_ztree").fadeToggle();
			// $(window.parent.document).find(".g_hd").fadeToggle();
			// slider.dragShrink();
			// $("#dragBOx").fadeToggle();
		},
		/*tab选项卡右键菜单*/
		tab_right_menu: function () {
            $(".page-tabs-content .active").contextMenu({
                width: 180, // width
                itemHeight: 30, // 菜单项height
                bgColor: "#fff", // 背景颜色
                color: "#333", // 字体颜色
                fontSize: 12, // 字体大小
                hoverBgColor: "#ccc", // hover背景颜色
				target: function(ele) { // 当前元素
				},
                menu: [{ // 菜单项
                    text: "刷新当前",
                    callback: function() {
                        $(".tabReload").trigger("click");
                    }
                },
                    {
                        text: "关闭当前",
                        callback: function() {
                            $('.tabCloseCurrent').trigger("click");
                        }
                    },
                    {
                        text: "全部关闭",
                        callback: function() {
                            $('.tabCloseAll').trigger("click");
                        }
                    },
                    {
                        text: "除此之外全部关闭",
                        callback: function() {
                            $(".tabCloseOther").trigger("click");
                        }
                    }
                ]

            });
            var oFrame=document.getElementById("iframe_index");
            oFrame.onload = oFrame.onreadystatechange = function () {
                if (this.readyState && this.readyState != 'complete') {
                }
                else {
                    $("#iframe_index").contents().find("body").click(function(){
                        $('.ul-context-menu').hide()
                    })
                }
            }
		}
	}

})();