<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sousuo.aspx.cs" Inherits="JlueTaxSystemGXGS.sszsk.szzsk.sousuo" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>广西壮族自治区国家税务局---12366纳税服务综合平台</title>

<link href="../resource/css/jqgrid/ui.jqgrid.css" rel="stylesheet" type="text/css" />
<link href="../resource/css/jqGridUI/jquery-ui-1.8.17.custom.css" rel="stylesheet" type="text/css" />
<link href="../resource/css/jqGridUI/jquery.ui.all.css" rel="stylesheet" type="text/css" />
<link href="../resource/css/jquery.autocomplete.css" rel="stylesheet" type="text/css" />
<link href="../resource/css/treeUI/demo.css" rel="stylesheet" type="text/css" />
<link href="../resource/css/treeUI/easyui.css" rel="stylesheet" type="text/css" />
<link href="../resource/css/treeUI/icon.css" rel="stylesheet" type="text/css" />
<link  type="text/css" href="../resource/css/defualt.css" rel="stylesheet"/>
<script type="text/javascript" src="../resource/js/jquery-1.8.0.js"></script>
<script type="text/javascript" src="../resource/js/jsTree/jquery.easyui.min.js"></script>
<script type="text/javascript" src="../resource/js/jqgrid/i18n/grid.locale-cn.js"></script>
<script type="text/javascript" src="../resource/js/jqgrid/jquery.jqGrid.min.js"></script>
<script type="text/javascript" src="../resource/js/autocomplete/jquery.autocomplete.js"></script>
<script type="text/javascript" src="../resource/js/autocomplete/autocomplete.js"></script>
<script type="text/javascript" src="../resource/js/jsTree/tree.js"></script>
<script type="text/javascript" src="../resource/js/jquery-utlis.js"></script>
<script type="text/javascript" src="../resource/js/jqGrid-width.js"></script>
<script type="text/javascript" src="../resource/js/search/search.js"></script>


<script type="text/javascript">
$(function(){
	treeMemu();
	$("#searchTb").jqGrid({
		caption:"搜索列表",
		datatype:"json",
		url:'',
		mtype:'post',
		height:550,
		autowidth:true,
		rownumbers:true,
		altRows:true,
		colNames:['编码','简码','标题','文号','时间','库种','关键字','类别'],
		colModel :[
		    {name:'zlcode',hidden:true},
			{name:'zljm',width:40,align:'center'},
			{name:'zltitle',width:580},
			{name:'zlwh',width:80},
			{name:'zllrsj',width:80,align:'center'},
			{name:'zlflag',hidden:true},
			{name:'zlgjz',hidden:true},
			{name:'zltype',hidden:true}
		],
		prmNames:{
			page:"pageNo",
			rows:"pageSize" 
		},
		jsonReader:{
			root:"result",
			page:"pageNo",
			total:"totalPages",
			records:"totalItems",
			id:"id",
			repeatitems:false
		},
		pager:'searchPage',
		pagerpos:'left',
		emptyrecords:"没有找到记录",
		rowNum:30,
		viewrecords: true,
		gridview: true,
		onSelectRow:function(rowid,status,e){
			var zlcode=$("#searchTb").getRowData(rowid).zlcode;
			var zltype=$("#searchTb").getRowData(rowid).zltype;
			var zlflag=$("#searchTb").getRowData(rowid).zlflag;
			var zlgjz=$("#searchTb").getRowData(rowid).zlgjz.split(" ");
			//window.open("nr?zlcode="+zlcode+"&zltype="+zltype+"&zlflag="+zlflag+"&zlgjz="+zlgjz,"","height=700,sidth=500,fullscreen=no,toolbar=no,scrollbars=yes,resizable=yes,location=no,status=no,menubar=no");
			//$("#loadNr").load("nr?zlcode="+zlcode+"&zltype="+zltype+"&zlflag="+zlflag+"&zlgjz="+zlgjz);
		}
	}); 
	
	//$("#searchTb").jqGridWidth("#searchTb");
	
	var searchText = "";
	var flag = "1,2,5,6";
	$("#searchText").val(searchText);
	$("#zlflag").val(flag);
	setTimeout("search()",1500);

	//搜索按钮事件
	$("#searchBut").click(function(){
		var searchText = $("#searchText").val();
		var zlflag = $("#zlflag").val();
		search(searchText,zlflag);
	});
	//复选框点击查询事件
	$(".checkbox").click(function(){
		var searchText = $("#searchText").val();
		var zlflag = $("#zlflag").val();
		search(searchText,zlflag);
	});	
	
	//关键字提示
	regAutocomplete("searchText","getAutocompleteGjz");
	
});

//搜索方法
function search(){
	var searchText = $("#searchText").val();
	var zlflag = $("#zlflag").val();
	$("#searchTb").setGridParam({
		url:"getSearch.ashx",
		postData:{
			"zltitle":searchText,
			"zlflag":zlflag
		}
	}).trigger("reloadGrid");
};

</script>
</head>

<body>
<div class="head">
  <div class="left"><img src="../resource/image/images/Min_logo.png" /></div>
  <div class="left">
   <div class="Condition">
   		<input type="hidden" value="1,2,5,6" /> 
      <input id="checkAll" name="checkbox" type="checkbox" value="1,2,3,5,6" class="checkbox" onclick="getCheckbox();" /><img src="../resource/image/images/allflag.png" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input id="checkCJWT" name="checkbox" type="checkbox" value="2" class="checkbox" onclick="getCheckbox();"/><img src="../resource/image/images/cjwt.png" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input id="checkBZDS" name="checkbox" type="checkbox" value="3,5" class="checkbox" onclick="getCheckbox();"/><img src="../resource/image/images/bzds.png" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input id="checkSSWJ" name="checkbox" type="checkbox" value="1,6" class="checkbox" onclick="getCheckbox();"/><img src="../resource/image/images/sswj.png" /></div>
      <input type="hidden" name="zlflag" id="zlflag"/>
   <div id="search">
      <div class="left"><img src="../resource/image/images/search_left.png" /></div>
      <div class="left search_bg">
      	<!-- 搜索框 -->
        <input type="text" class="text03" id="searchText" name="zltitle" placeholder="请输入关键字，多条件检索请以空格隔开"/>&nbsp;&nbsp;
        <!-- 搜索按钮 -->
        <a href="javascript:void(0)" id="searchBut"><img src="../resource/image/images/search_bt.png" /></a>&nbsp;&nbsp;
        <!-- 高级搜索按钮 -->
        <a href="javascript:gjSearchBut()" id="gjsearchBut"><img src="../resource/image/images/advanced.png" /></a>
        <form id="gjSearchForm" action="/sszsk/szzsk/gjSearch" method="post" target="_blank">
        </form>
      </div>
      <div class="left"><img src="../resource/image/images/search_right.png" /></div>
    </div>
  </div>
  <div class="clear"></div>
</div>
<div class="h30"></div>
<div class="term"><img src="../resource/image/images/icons12.png" />&nbsp;&nbsp;您已经选中词：&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="text02" id="xy_zlgjz" name="ztcname"/></div>
<!-- &nbsp;&nbsp;&nbsp;<input type="button" class="clear-bt" /> 
<div class="term"><img src="../resource/image/images/icons13.png" />&nbsp;&nbsp;您还可选备用词：<input type="text" class="text02" /></div>
<div class="term"><img src="../resource/image/images/icons13.png" />&nbsp;&nbsp;目录树位置：</div>
-->
<div style="padding-left:20px; clear:both; height:100%; overflow:hidden;">
	<table id="topDiv" cellpadding="0" cellspacing="0" width="99%" style="height:100%;background:#F5F9FC;border:2px solid #09F;">
		<tr>
			<!-- 树结构 -->
		   	<td id="treeMenu" style="vertical-align:top;text-align:left;width:15%;">
		   		<div id="tbHid" style="overflow:auto;height:600px;width:200px;">
			     	 <ul id="browser" class="filetree"></ul>
			    </div>
		     </td>
		     <!-- 列表 -->
		     <td style="width:85%;overflow:auto;">
			     	<table id="searchTb"></table>
					<div id="searchPage"></div>
		     </td>
		</tr>
	</table>
</div>
</DIV>
</body>
</html>

