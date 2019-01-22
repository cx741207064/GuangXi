$(document).ready(function () {
	index.onload();
});
var index = (function () {
	var drag_win_id = "main";
	var host = "http://zxhd.ha-n-tax.gov.cn";
	var www = "http://www.ha-n-tax.gov.cn";
	var init = function () {
		//页面初始化
		$('.content_right').css("width", $(window).width() - $('.content_left').width() - 55 + 'px');

		layui.use('form', function () {
			var form = layui.form;
			form.render();
		});
        $(window).resize(function(){
            $('.content_right').css("width", $(window).width() - $('.content_left').width() - 55 + 'px');
            index.setHeight();

		})
		//判断是不是壳子，是否显示最小化和关闭
		if (typeof external.Run_Fwzs != "undefined") {} else {
			$('.tright').css("visibility", "hidden");
		}

		if (jcptTools.getCookie('isGuid') && jcptTools.getCookie('isGuid')["index"] == true) {

		} else {
			jcptTools.setGuidCookie('isGuid', {
				index: true
			});
			/**
			 * 暂时屏蔽引导页
			 */
			//$('.cover').show();
			//$('.guidPage').show();
		}

		//初始化引导页面宽度
		$('.guidPage').css("width", "960px");

	}
	return {
		onload: function () {
			init();
			index.tabChange();
            index.searchValue();
			//index.newPage();//点击 我的信息 具体的 图标



			// index.tableData();
			//			index.tableData1(); //服务提醒 死数据
			// index.newtk('Val1', 'Val2');
			// index.setClick();
			// index.checkClick();
			// index.collectDate();


			// index.collectCheck();
			index.collectTip();
			// index.openlist();
			// index.newPage();
			index.pageInit();

            index.setHeight();
			// 左侧菜单抽屉功能
			$('.content_title').on("click",function (){
				$(this).siblings('.content_list').slideToggle();
			})
		},
        /*页面计算*/
        setHeight:function(){
            var  tab_h=$(".content_top").outerHeight()+402+20;
            $(".content_left ").css("height",tab_h+"px")
        },
		/*搜索框提示*/
		searchValue:function(){
			$("#titleInput").focus(function(){
				$(this).val("")
			});
            $("#titleInput").blur(function(){
                var dataValue=$(this).attr("data-value");
                if($(this).val()==""){
                    $(this).val(dataValue);
				}
            })
		},

		/*从门户跳转后进入首页打开对应的链接*/
		/*openlist: function () {
			var cSname = index.getQueryString("n");
			if (cSname == "wybs") {
				$(".content_op .content_tab li:nth-child(2)").trigger("click");
			} else if (cSname == "wycx") {
				$(".content_tab li:nth-child(3)").trigger("click");
			} else if (cSname == "hdzx") {
				$(".content_tab li:nth-child(4)").trigger("click");
			}
		},*/

		onMin: function (e) {
			external.MinForm(drag_win_id);
		},

		onClose: function (e) {
			if (confirm("确定关闭当前窗口吗?")) {
				external.CloseForm(drag_win_id);
			}
		},

		onMax: function (e) {
			external.MaxForm(drag_win_id);
			if ($(window).width() > 1000) {
				$('.ctrl_max').html('<i class="icon iconfont icon-huanyuan"></i>');
			} else {
				$('.ctrl_max').html('<i class="icon iconfont icon-zuidahua"></i>');
			}
		},
		run_fixtool_net: function () {
			if (typeof external.run_fixtool_net != 'undefined') {
				external.run_fixtool_net()
			} else {
				if (typeof external.getCurrentDir != "undefined") {
					external.run_fixtool()
				}
			}
		},

		closeLayer: function () {
			// $('.wep_form form').css('display', 'none');
			layui.use('layer', function () {
				var layer = layui.layer;
				layer.closeAll();
			})
		},

		getQueryString: function (name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]);
			return null;
		},
		/*点击设置弹出收藏*/
		setClick: function () {
			$(".wxl_btn_setting").click(function () {
				/*window.parent.leftSlider.selectedComFuc();
				window.parent.leftSlider.collectShow();*/
				layui.use('layer', function () {
					var layer = layui.layer;
					layer.open({
						type: 1,
						skin: 'layui-layer-demo', //样式类名
						closeBtn: 1, //不显示关闭按钮
						anim: 2,
						title: '更多',
						area: ['1100px', '320px'],
						shadeClose: true, //开启遮罩关闭
						content: $('.wxn_collAdd')
					})
				})
			})


		},
		closeColl: function () {
			layer.closeAll();
		},

		onQuerytzgg: function () {

			$.ajax({
				url: host + "/comm/zcyh/getListContentByLMID.do",
				data: {
					LM_ID: "30114",
					HFBZ: '1',
					FBBZ: '0',
					CURPAGE: 0,
					LMYS_ID: '201201311558274',
					PAGESIZE: 20
				},
				type: "GET",
				dataType: "jsonp", //指定服务器返回的数据类型
				jsonpCallback: "index.onqueryCalltzggback"
			})


		},

		onqueryCalltzggback: function (jsonObj) {
			var url = www + "/003/xxgk_301/tzgg_30114/";
			if (jsonObj.data) {
				var d = jsonObj.data[0];

				var result = d.retVal;
                result = result.replace(/\[|]/g,'');

				$(".zcfgtz").html(result.replaceAll("href=\"", "href=\"" + url));
				//通知公告奇数行隔行变色
				$(".zcfgtz table tr:nth-child(2n-1)").css({
					"background": "#f9fafd",
					"border": "1px solid #ecedf1"
				});

				// $(".zcfgtz").html(html);
			}
		},


		/*收藏弹框数据展示*/
		collectDate: function () {
			var menulist = {
				"menulist": [{
						"Name": "",
						"menulist": [{
								"Name": "<a href='#'>增值税申报</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>附加税申报</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>环保税申报</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>契税申报</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>房产税申报</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>申报扣款</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>居民企业所得税申报</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>一般企业财务报表</a>",
								"menulist": ""
							},


						]

					},
					{
						"Name": "",
						"menulist": [{
								"Name": "<a href='#'>城镇土地使用税税源信息采集</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>房产税税源信息采集</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>土地增值税项目登记</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>车船税税源信息维护</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>水资源税税源信息采集寄及变更</a>",
								"menulist": ""
							}


						]
					},
					{
						"Name": "",
						"menulist": [{
								"Name": "<a href='#'>变更登记</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>停业登记</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>复业登记</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>扣缴义务人登记</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>存款账户账号报告</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>增值税一般纳税人登记</a>",
								"menulist": ""
							},
							{
								"Name": "<a href='#'>增值税减免税备案</a>",
								"menulist": ""
							}

						]
					}
				]
			};

			var menulist1 = {
				"menulist1": [{
						"Name": "申报缴纳",
						"menulist1": [{
								"Name": "增值税申报",
								"menulist1": ""
							},
							{
								"Name": "附加税申报",
								"menulist1": ""
							},
							{
								"Name": "环保税申报",
								"menulist1": ""
							},
							{
								"Name": "契税申报",
								"menulist1": ""
							},
							{
								"Name": "房产税申报",
								"menulist1": ""
							},
							{
								"Name": "申报扣款",
								"menulist1": ""
							},
							{
								"Name": "居民企业所得税申报",
								"menulist1": ""
							},
							{
								"Name": "一般企业财务报表",
								"menulist1": ""
							},


						]

					},
					{
						"Name": "税源信息采集",
						"menulist1": [{
								"Name": "城镇土地使用税税源信息采集",
								"menulist1": ""
							},
							{
								"Name": "房产税税源信息采集",
								"menulist1": ""
							},
							{
								"Name": "土地增值税项目登记",
								"menulist1": ""
							},
							{
								"Name": "车船税税源信息维护",
								"menulist1": ""
							},
							{
								"Name": "水资源税税源信息采集寄及变更",
								"menulist1": ""
							}


						]
					},
					{
						"Name": "涉税事项办理",
						"menulist1": [{
								"Name": "变更登记",
								"menulist1": ""
							},
							{
								"Name": "停业登记",
								"menulist1": ""
							},
							{
								"Name": "复业登记",
								"menulist1": ""
							},
							{
								"Name": "扣缴义务人登记",
								"menulist1": ""
							},
							{
								"Name": "存款账户账号报告",
								"menulist1": ""
							}
						]
					}
				]
			};
			var showlist = $("<ul></ul>");
			showall(menulist.menulist, showlist);
			$(".wxl_collSwdj").append(showlist);
			var showlist1 = $("<ul></ul>");
			showall1(menulist1.menulist1, showlist1);
			$(".wxl_collSwdj1").append(showlist1);

			function showall(menu_list, parent) {
				for (var menu in menu_list) {
					if (menu_list[menu].menulist.length > 0) {
						var li = $("<li></li>");
						$(li).append("<label></label><span>" + menu_list[menu].Name + "</span>").append("<ul class='submenu'></ul>").appendTo(parent);
						showall(menu_list[menu].menulist, $(li).children().eq(2));
					} else {
						$("<li></li>").append("<label></label><span>" + menu_list[menu].Name + "</span>").appendTo(parent);
					}
				}
			}

			function showall1(menu_list1, parent) {
				for (var menu in menu_list1) {
					if (menu_list1[menu].menulist1.length > 0) {
						var li = $("<li></li>");
						$(li).append("<label></label><span>" + menu_list1[menu].Name + "</span>").append("<ul class='submenu'></ul>").appendTo(parent);
						showall1(menu_list1[menu].menulist1, $(li).children().eq(2));
					} else {
						$("<li></li>").append("<label></label><span>" + menu_list1[menu].Name + "</span>").appendTo(parent);
					}
				}
			}
		},


		/*弹框搜索提示框*/
		collectTip: function () {
			$(".wxl_coll_input").keyup(function () {
				$(".wxl_tip_box ul").empty().show();
				var filter = $(this).val();
				if (filter) {
					$matches = $(".wxl_collSwdj1 li>.submenu").find("span:Contains(" + filter + ")");
					if ($matches.length > 0) {
						for (i = 0; i < $matches.length; i++) {
							var html = "<li>" + $matches[i].innerText + "</li>";
							$(".wxl_tip_box ul").append(html)
						}
					}
				} else {
					$(".wxl_tip_box ul").empty()
				}
				return false;
			});
			$(".wxl_tip_box").on("click", "li", function () {
				var liText = $(this).text();
				$(".wxl_coll_input").val(liText);
				$(".wxl_tip_box ul").empty();
			})
		},

		/*点击弹框新页面*/
		newPage: function () {
			$(".cont_div a").click(function () {
				var dataurl = $(this).data("url");
				window.navName = $(this).data("nav");
				var dataText = $(this).find("span").text();
				window.openName = {
					"navName": navName,
					"dataText": dataText

				};
				// window.open (dataurl,'','width='+(window.screen.availWidth)+',height='+(window.screen.availHeight - 50)+ ',top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no, fullscreen=yes')

				if (typeof external.get_version != "undefined") {
					dataurl = "http://" + window.location.host + '/web/taxclient/main.html';
					external.Open_IE_Url(dataurl);
				} else {
					var fulls = "top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no"; //定义弹出窗口的参数
					if (window.screen) {
						var ah = screen.availHeight - 30;
						var aw = screen.availWidth - 10;
						fulls += ",height=" + ah;
						fulls += ",innerHeight=" + ah;
						fulls += ",width=" + aw;
						fulls += ",innerWidth=" + aw;
						fulls += ",resizable"
					} else {
						fulls += ",resizable"; // 对于不支持screen属性的浏览器，可以手工进行最大化。 manually
					}
					window.open(dataurl, name, fulls);
				}



			})
		},
		newtk: function (Val1, Val2) {
			if (Val1 == "我的信息") {
				layui.use('layer', function () {
					var layer = layui.layer;
					layer.open({
						type: 2,
						title: false,
						id: "iframe_box",
						content: 'main1.html',
						shade: true,
						area: ['100%', '100%'],
						success: function () {
							$("#iframe_box iframe").contents().find(".m_nav li").each(function () {
								if ($(this).find("span").html() == Val1) {
									$(this).show();
								}
							});
							$("#iframe_box iframe").contents().find("#main_iframe").contents().find(".wxn_list li:nth-child(2)").each(function () {
								var searcg_Vsl = $(this).find("p").html()
								if (index.getChinese(searcg_Vsl) == Val2) {
									$(this).trigger("click");
								};
							})

						}

					})
				})
			} else if (Val1 == "我要办税") {
				layui.use('layer', function () {
					var layer = layui.layer;
					layer.open({
						type: 2,
						title: false,
						id: "iframe_box",
						content: 'main2.html',
						shade: true,
						area: ['100%', '100%'],
						success: function () {
							$("#iframe_box iframe").contents().find(".m_nav li").each(function () {
								if ($(this).find("span").html() == Val1) {
									$(this).show()
								}
							});
						}


					})
				})
			} else if (Val1 == "我要查询") {
				layui.use('layer', function () {
					var layer = layui.layer;
					layer.open({
						type: 2,
						title: false,
						id: "iframe_box",
						content: 'main3.html',
						shade: true,
						area: ['100%', '100%'],
						success: function () {
							$("#iframe_box iframe").contents().find(".m_nav li").each(function () {
								if ($(this).find("span").html() == Val1) {
									$(this).show()
								}
							});
						}
					})
				})
			} else if (Val1 == "互动中心") {
				layui.use('layer', function () {
					var layer = layui.layer;
					layer.open({
						type: 2,
						title: false,
						id: "iframe_box",
						content: 'main4.html',
						shade: true,
						area: ['100%', '100%'],
						success: function () {
							$("#iframe_box iframe").contents().find(".m_nav li").each(function () {
								if ($(this).find("span").html() == Val1) {
									$(this).show()
								}
							});

						}

					})
				})
			} else if (Val1 == "公众服务") {
				layui.use('layer', function () {
					var layer = layui.layer;
					layer.open({
						type: 2,
						title: false,
						id: "iframe_box",
						content: 'main5.html',
						shade: true,
						area: ['100%', '100%'],
						success: function () {
							$("#iframe_box iframe").contents().find(".m_nav li").each(function () {
								if ($(this).find("span").html() == Val1) {
									$(this).show()
								}
							});
							$('#id_div_wddb').hide();
							$('#id_div_tzgg').show();
						}

					})
				})
			}
		},
		/*tab切换*/
		tabChange: function () {
			$('.content_op').on('mouseover mouseenter mouseleave', '.content_tab li', function () {
				var id = $(this).attr("id");
                index.setHeight();
				if (jcptTools.getIsLogin()) {
					$(this).parents('.content_tab').find('li').removeClass('active');
					$(this).addClass('active');
					$(this).parents('.content_tab').siblings('.content_cont').find('li').hide();
					$(this).parents('.content_tab').siblings('.content_cont').find('li').eq($(this).index()).show();
					if (id !== "75018" && id != "75008") {
						$('#id_div_wddb').show();
						$('#id_div_tzgg').hide();
					} else {
						$('#id_div_wddb').hide();
						$('#id_div_tzgg').show();
					}
				} else {
					if (id == "75018") {
						$(this).parents('.content_tab').find('li').removeClass('active');
						$(this).addClass('active');
						$(this).parents('.content_tab').siblings('.content_cont').find('li').hide();
						$(this).parents('.content_tab').siblings('.content_cont').find('li').eq($(this).index()).show();
					} else {
						//弹出登陆框
						if (window.login_index_yw) {
							//window.login_index_yw.showLogin();
						}
					}
				}

			});

			// $('.content_op').on('click', '.content_tab li', function () {
			// 	var id = $(this).attr("id");
			// 	if (id == "75018") {

			// 	} else {
			// 		if (jcptTools.getIsLogin()) {

			// 		}
			// 		if (!jcptTools.getIsLogin()) {
			// 			if (window.login_index_yw) {
			// 				window.login_index_yw.showLogin();
			// 			}
			// 		}
			// 	}

			// })
		},
		/*表格数据交互*/
		tableData: function () {
			var data = [{
					"name": "增值税小规模纳税人申报",
					"date": "2018-06-15",
					"state": "未申报",
					"operation": null
				},
				{
					"name": "财务报表报送",
					"date": "2018-06-15",
					"state": "未报送",
					"operation": null
				},
				{
					"name": "发票验旧",
					"date": "2018-06-15",
					"state": "未验旧",
					"operation": null
				},
				{
					"name": "财务报表报送",
					"date": "2018-06-15",
					"state": "未验旧",
					"operation": null
				},
				{
					"name": "发票验旧",
					"date": "2018-06-15",
					"state": "未验旧",
					"operation": null
				}
			];
			$('#wddb').DataTable({
				"data": data,
				"columnDefs": [{
					"targets": -1,
					"data": null,
					"render": function (data, type, full, meta) {
						return '<a href="javascript:;"><span class="table_btn">查看</span></a>'
					}
				}],
				"columns": [{
						"data": "name"
					},
					{
						"data": "date"
					},
					{
						"data": "state"
					},
					{
						"data": "operation"
					}
				],
				"paging": false,
				"ordering": false,
				"info": false,
				"lengthChange": false,
				"searching": false,
				"fnInitComplete": function (oSettings, json) { /*判断认证状态显示字体颜色*/
					for (var i = 0; i < $('#wddb tbody tr').length; i++) {
						$('#wddb tbody tr').eq(i).find('td').eq(2).css("color", '#ff0000');
						$('#wddb tbody tr').eq(i).find('td').eq(1).css("color", '#666');
					}
				}
			});
		},
		tableData1: function () {
			var data = [{
					"name": "增值税小规模纳税人申报",
					"date": "2018-06-15",
					"state": "未读",
					"operation": null
				},
				{
					"name": "财务报表报送",
					"date": "2018-06-15",
					"state": "未读",
					"operation": null
				},
				{
					"name": "发票验旧",
					"date": "2018-06-15",
					"state": "未读",
					"operation": null
				},
				{
					"name": "财务报表报送",
					"date": "2018-06-15",
					"state": "未读",
					"operation": null
				},
				{
					"name": "发票验旧",
					"date": "2018-06-15",
					"state": "未读",
					"operation": null
				}
			];
			$('#fwtx').DataTable({
				"data": data,
				"columnDefs": [{
					"targets": -1,
					"data": null,
					"render": function (data, type, full, meta) {
						return '<a href="javascript:;"></a>'
					}
				}],
				"columns": [{
						"data": "name"
					},
					{
						"data": "date"
					},
					{
						"data": "state"
					},
					{
						"data": "operation"
					}
				],
				"paging": false,
				"ordering": false,
				"info": false,
				"lengthChange": false,
				"searching": false,
				"fnInitComplete": function (oSettings, json) { /*判断认证状态显示字体颜色*/
					for (var i = 0; i < $('#fwtx tbody tr').length; i++) {
						$('#fwtx tbody tr').eq(i).find('td').eq(2).css("color", '#ff0000');
						$('#fwtx tbody tr').eq(i).find('td').eq(1).css("color", '#666');
					}
				}
			});
		},

		getChinese: function (strValue) {

			if (strValue != null && strValue != "") {

				var reg = /[\u4e00-\u9fa5]/g;

				return strValue.match(reg).join("");
			} else
				return "";
		},

		getQueryString: function (name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]);
			return null;
		},
		pageInit: function () {
			$(window).resize(function () {
				$('.content_right').css("width", $(window).width() - $('.content_left').width() - 55 + 'px');

				if ($('.guidPage').attr("src") == "img/index_cygn.png") {
					$('.guidPage').css("width", "660px");

				} else {
					$('.guidPage').css("width", "960px");

				}
			})
		},

		//点击切换引导图片
		changeGuidImg: function (obj) {
			var url = $(obj).attr("src");
			switch (url) {
				case "img/index_wdxx.png":
					$('.guidPage').attr("src", "img/index_wybs.png");
					break;
				case "img/index_wybs.png":
					$('.guidPage').attr("src", "img/index_wycx.png");
					break;
				case "img/index_wycx.png":
					$('.guidPage').attr("src", "img/index_hdzx.png");
					break;
				case "img/index_hdzx.png":
					$('.guidPage').attr("src", "img/index_gzfw.png");
					break;
				case "img/index_gzfw.png":
					$('.guidPage').attr("src", "img/index_cygn.png").css({
						"width": "660px",
						"top": "124px",
						"left": "17px"
					});
					break;
				default:
					$('.cover').hide();
					$('.guidPage').hide();
			}
		}
	}
})();

String.prototype.replaceAll = function (reallyDo, replaceWith, ignoreCase) {
	if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
		return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi" : "g")), replaceWith);
	} else {
		return this.replace(reallyDo, replaceWith);
	}
}