$(document).ready(function () {
    cxdy.onInit();
    $("#RQQ").bind("focus",function(){
    	WdatePicker({readOnly:true});
	});
});

var cxdy = (function () {
    /*私有变量*/
	var dssbUrl = "http://localhost:9092";//地税申报地址，后续生产需改为地税申报服务域名
    //报表类型
    var type = '';
    var tbList = null;
    var gridObj = null;
    var curSeg = null;
    //所属期起
    var SSSQ_Q = null;
    var SSSQ_Z = null;
    
    var tbTempList = null;
    var gridTempObj =null;
    
    var sblxSelect = null;//申报类型下拉选
    var zsxmSeelct = null;//征收项目下拉选
   
    //是否来自查询库
    var isfromCxk = null;
    //初始化table
    function initLayout() {
        tbList = $("#tbList");
        tbTempList =$("#tbTempList");
        
        //初始化下拉框
        zsxmSelect = $("#zsxmSelect");
        var e = document.getElementById("zsxmSelect");       
        e.options.add( new Option("","") );
        e.options.add( new Option("增值税","10101") );
        e.options.add( new Option("消费税","10102") );
        e.options.add( new Option("企业所得税","10104"));
        e.options.add( new Option("附加税","101010109"));
//        e.options.add( new Option("附加税自行申报","101010110"));
        e.options.add( new Option("资源税","10107") );
        e.options.add( new Option("烟叶税","10120"));
        e.options.add( new Option("环境保护税","10121") );
        e.options.add( new Option("财务报表","50100"));
        e.options.add( new Option("工会经费","39900") );
        e.options.add( new Option("文化事业建设费","1030126"));
        e.options.add( new Option("废弃电器电子产品处理基金收入","1030175"));
        e.options.add( new Option("通用代扣代缴、代收代缴申报","103990101"));
        e.options.add( new Option("房产税","101100101"));
        e.options.add( new Option("城镇土地使用税","101120101"));
        //不支持查询的key设定为：000000000
        e.options.add( new Option("印花税","000000000"));
        e.options.add( new Option("车船税","000000000"));
        e.options.add( new Option("土地增值税","000000000"));
        e.options.add( new Option("耕地占用税","000000000"));
        e.options.add( new Option("契税","000000000"));

        //表头
        var cols = [
            {
                title: '序号', name: 'ROWNO', width: 40, align: 'center'
            },
            {
                title: '征收项目', name: 'SBXMMC', width: 380, align: 'left'
            },
            {
				title : '所属期起',name : 'SSSQ_Q',align : 'center',width : 90
		    },
		    {
				title : '所属期止',name : 'SSSQ_Z',align : 'center',width : 90
		    },
           
            {
                title: 'URL', name: 'URL', hidden: true
            },
            {
                title: 'NSRLX_DM', name: 'NSRLX_DM', hidden: true
            },
            {
                title: 'DJXH', name: 'DJXH', hidden: true
            },
            {
                title: 'SJLY', name: 'SJLY', hidden: true
            },
            {
                title: '申报方式', name: 'SJLY',
                renderer: function(val, item) {
                    if("JS" == val){
                        return "核心征管";
                    }else{
                        return "电子税务局";
                    }
                }
            }
        ];

        gridObj = tbList.mmGrid({
       		height:'180px',
            showBackboard: false,
            checkCol: false,
            autoLoad: false,
            multiSelect: false,
            cols: cols,
            fullWidthRows:true
        });
     gridObj.on('cellSelected', function(e,item,rowIndex,index){
         if(!item){
             return false;
         }
         if('JS'==item.SJLY){ //核心征管不支持下钻
             return;
         }
         var selectZsxm = zsxmSelect.val();
         isfromCxk = item.ISFROMCXK;
         var url = '/hlwsb/cxdy/getSB_SBJG_LIST.do';
         baseTools.xhrAjax({
            url: url,
            params: {NSRLX_DM:item.NSRLX_DM,SSSQ_Q:item.SSSQ_Q,SSSQ_Z:item.SSSQ_Z,TYPE:2,ZSPM_DM:item.ZSPM_DM,ISFROMCXK:item.ISFROMCXK,SELECT_ZSXM:selectZsxm},
            callback: [curSeg.pageFlowListControl]
         });
     	
     });
         //临时表头
        var tempcols = [
            {
                title: '序号', name: 'ROWNO', width: 40, align: 'center'
               
            },
            {
                title: '报表类型', name: 'SBBZL_DM', hidden: true
            },
            {
                title: '纳税人类型', name: 'NSRLX_DM', hidden: true
            },
            {
				title : '所属期起',name : 'SSSQ_Q',align : 'center',width : 90
		    },
		    {
				title : '所属期止',name : 'SSSQ_Z',align : 'center',width : 90
		    },
            {
                title: '报表类型名称', name: 'SBBZL_MC', width: 380, align: 'center'
            },
            
            {
                title: '操作', name: 'action',  width: 160, align: 'center',
                renderer: function(val, item) {
                           return  "<a href='javascript:cxdy.onPrintTemp(\""+item.SBBZL_DM+"\",\""+item.NSRLX_DM+"\",\""+item.URL+"\",\""+item.SSSQ_Q+"\",\""+item.SSSQ_Z+"\",\""+item.ZSPM_DM+"\",\""+item.SBBXH+"\",\""+item.SJLY+"\",\""+item.GDSLX+"\")' title='打印'>查看并打印</a>";
            	}
            },
            {
                title: '纸张大小', name: 'ZZDX', width: 160, align: 'center',hidden: true
            },
            {
                title: 'URL', name: 'URL', hidden: true
            },
            {
                title: 'SBBXH', name: 'SBBXH', hidden: true
            },
            {
                title: 'SJLY', name: 'SJLY', hidden: true
            },
            {
                title: 'GDSLX', name: 'GDSLX',hidden:true
            }
                     
        ];
        gridTempObj = tbTempList.mmGrid({
            showBackboard: false,
            checkCol: false,
            autoLoad: false,
            multiSelect: false,
            height:'300px',
            loadingText:'数据加载中',
            cols: tempcols,
            fullWidthRows:true
        }); 
    }

    return {
        onPrint: function () {
            var ids = gridObj.selectedRows();
            if (ids.length == 0) {
                alert("请选择要打印的表记录!");
                return false;
            }
            if (ids.length > 1) {
                alert("请选择一条记录进行打印!");
                return false;
            }
            var SBBZL_DM = ids[0].SBBZL_DM;
            var url = ids[0].URL.split('/');
            url[2] = url[2] + '_print';
            var realUrl = url.join('/');
            var urlParams = null;
            
            var str = hlwsbTools.urlStr({
                SBBZL_DM: SBBZL_DM,
                SSSQ_Q: SSSQ_Q,
                SSSQ_Z: SSSQ_Z,
                HIDE: '1'
                
            });
            //判断从数据库中带过来的URL中是否有"?"
            if (realUrl.indexOf('?') != -1) {
                urlParams = window.prePath + realUrl + '&' + str
            } else {
                urlParams = window.prePath + realUrl + '?' + str;
            }

            var winParam = {
                id: 'cxdyWin',
                title: '打印',
                url: urlParams,
                width: document.body.clientWidth,
                height: document.body.clientHeight
            };
            var winObj = baseTools.showWinExt(winParam);
        },
        onPrintTemp: function(SBBZL_DM,NSRLX_DM,URL,SSSQ_Q_TEMP,SSSQ_Z_TEMP,ZSPM_DM,SBBXH,SJLY,GDSLX){

        	var SBBZL_DM = SBBZL_DM;
        	var url = URL.split('/');
            if(3==GDSLX){//地税网报系统
            	url[3] = url[3] + '_print';
            }else{
            	url[2] = url[2] + '_print';
                //url[2] = 'cwbb_print';
            }
            
            var realUrl = url.join('/');
            var urlParams = null;
//            var sbbxh = ids[0].SBBXH;
            var temp = {};
            if(NSRLX_DM != '10106') {
            	temp = {
                    SBBZL_DM: SBBZL_DM,
                    NSRLX_DM:NSRLX_DM,
                    SSSQ_Q: SSSQ_Q_TEMP,
                    SSSQ_Z: SSSQ_Z_TEMP,                    
                    HIDE: '1',
                    SBBXH:SBBXH
                }
            } else {
	        	temp = {
                    SBBZL_DM: SBBZL_DM,
                    NSRLX_DM:NSRLX_DM,
                    SSSQ_Q: SSSQ_Q_TEMP,
                    SSSQ_Z: SSSQ_Z_TEMP, 
                    ZSPM_DM:ZSPM_DM,
                    HIDE: '1'
                    
                }
            }
            //增加数据来源标识
            temp.ISFROMCXK = isfromCxk;
            var str = hlwsbTools.urlStr(temp);
            //判断从数据库中带过来的URL中是否有"?"
            if (realUrl.indexOf('?') != -1) {
                urlParams = window.prePath + realUrl + '&' + str;
            } else {
                urlParams = window.prePath + realUrl + '?' + str;
                if(3==GDSLX){
                    urlParams = dssbUrl + realUrl + '?' + str;
                }
            }
            urlParams += '&isPrint=Y&SJLY='+SJLY;
            var winParam = {
                id: 'cxdyWin',
                title: '打印',
                url: urlParams,
                width: document.body.clientWidth,
                height: document.body.clientHeight
            };
            var winObj = baseTools.showWinExt(winParam);
        },
        onSearch: function () {
           var result = curSeg.checkData();
            if (!result.result) {
                alert(result.errorMsg);
                return;
            }
            var selectZsxm = zsxmSelect.val();
            var url = '/hlwsb/cxdy/getSB_SBJG.do';
            baseTools.xhrAjax({
                url: url,
                params: {
                    RQQ:$("#RQQ").val(),
                    RQZ:$("#RQZ").val(),
                    TYPE:$('input[name="TYPE"]:checked').val(),
                    SELECT_ZSXM:selectZsxm,
                    NSRLX_DM:"2300"},
                callback: [curSeg.pageFlowControl]
            });
        },
        onQuery: function () {
          
            alert($('input[name="TYPE"]:checked').val());
            var url = '/hlwsb/cxdy/getSB_SBJG.do';
            result.data.TYPE =$('input[name="TYPE"]:checked').val();
            baseTools.xhrAjax({
                url: url,
                params: result.data,
                callback: [curSeg.pageFlowControl]
            });
        },
        onInit: function () {
            initLayout();
            type = baseTools.getUrlQueryString("TYPE");
            curSeg = cxdy;
            var url = '/hlwsb/cxdy/getSB_SBJG.do';
            baseTools.xhrAjax({
                url: url,
                params: {},
                callback: [curSeg.pageFlowControl]
            });
            curSeg.resetCss();
        },
        resetCss:function(){
            $(".mmg-headWrapper").css("border-top","0px");//mmg-titleWrapper
            $("thead tr th").css("height","39px");
            $("thead tr").css("background-color","#f9fafd");
        },
        initData: function (jsonObj) {
            $("#RQQ").val(jsonObj.ymkz.RQQ);
            $("#RQZ").val(jsonObj.ymkz.RQZ);
            SSSQ_Q =jsonObj.ymkz.RQQ;
            SSSQ_Z =jsonObj.ymkz.RQZ;
            var minDate =jsonObj.ymkz.minDate;
            var maxDate =jsonObj.ymkz.maxDate;
            $("input:radio").change(function(){
		      	var type = $('input[name="TYPE"]:checked').val();
		      	if(type=='1'){
		      		$("#RQQ").val(jsonObj.ymkz.RQQ);
		      		$("#RQZ").val(jsonObj.ymkz.RQZ);
		      		$("#RQQ").unbind("focus");
		      		$("#RQQ").bind("focus",function(){
		      			WdatePicker({readOnly:true});
		      		});
		      	}else{
		      		$("#RQQ").val(minDate);
		      		$("#RQZ").val(maxDate);
		      		$("#RQQ").unbind("focus");
		      		$("#RQQ").bind("focus",function(){
		      			WdatePicker({readOnly:true,startDate:minDate,maxDate:minDate,dateFmt:'yyyy-MM-dd' ,opposite:true,disabledDates:['01$'],onpicked:setRqzDate});
		      		});
		      	}
	    });
        },
        checkData: function () {
            var flag = true;
            var errorMsg = '';
            SSSQ_Q = $("#RQQ").val();
            SSSQ_Z = $("#RQZ").val();
            if (!SSSQ_Q || !SSSQ_Z) {
                flag = false;
                errorMsg = '提示信息：\n日期不能为空，请选择日期!';
            }
            // else if (!hlwsbTools.compareDate(SSSQ_Z, SSSQ_Q)) {
             //   flag = false;
             //   errorMsg = '提示信息：\n结束日期止必须大于所属期始!';
            //}
            return {'result': flag, 'errorMsg': errorMsg, 'data': {'SSSQ_Q': SSSQ_Q, 'SSSQ_Z': SSSQ_Z}};
        },
        fillGridByJson: function (jsonObj) {
            //绑定数据
            gridObj.load(jsonObj.data.RESULT);
             gridTempObj.load();
        },
        /**
         * 需要的时候可以覆盖该方法
         * 在ajax调用中，在得到数据时调用该方法
         */
        pageFlowControl: function (jsonObj, xhrArgs) {
            switch (parseInt(jsonObj.code)) {
                //查询操作返回标志
                case 0:
                    curSeg.fillGridByJson(jsonObj);
                    curSeg.initData(jsonObj);
                    break;
                //添加、更新以及状态更新操作返回标志
                case 1:
                // 删除操作返回标志
                case 2:
                    alert(jsonObj.msg);
                    break;
                //准备添加的记录已经存在
                case 3:
                    break;
                //在线帮助
                case 6:
                    break;
                case -1://保存出错返回标志
                case -2://其它错误返回标志
                    alert(jsonObj.msg);
                    baseTools.hideMash();
                    break;
                case -3://cookie 失效请重新登录
                    alert(jsonObj.msg);
                    baseTools.gotoLogin();
                    break;
                default:
            }
        },
         fillGridListByJson: function (jsonObj) {
            //绑定数据
            gridTempObj.load(jsonObj.data.RESULT);
        },
          pageFlowListControl: function (jsonObj, xhrArgs) {
            switch (parseInt(jsonObj.code)) {
                //查询操作返回标志
                case 0:
                    curSeg.fillGridListByJson(jsonObj);
                    break;
                //添加、更新以及状态更新操作返回标志
                case 1:
                // 删除操作返回标志
                case 2:
                    alert(jsonObj.msg);
                    break;
                //准备添加的记录已经存在
                case 3:
                    break;
                //在线帮助
                case 6:
                    break;
                case -1://保存出错返回标志
                case -2://其它错误返回标志
                    alert(jsonObj.msg);
                    baseTools.hideMash();
                    break;
                case -3://cookie 失效请重新登录
                    alert(jsonObj.msg);
                    baseTools.gotoLogin();
                    break;
                default:
            }
        }
    };
})
();