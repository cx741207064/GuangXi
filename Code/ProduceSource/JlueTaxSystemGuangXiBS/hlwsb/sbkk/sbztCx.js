$(document).ready(function () {
    sbztCx.onLoad();
});

/**
 * <ol>
 * date:2013-12-26 editor:lijun
 * <li>创建文档</li>
 * <li>网上申报</li>
 * </ol>
 *
 */
var sbztCx = (function () {
    //私有属性
    var curSeg, curJsonObj, tbList, gridObj, ids;
    var winObj;
    var initLayout = function () {
        //初始化页面UI
        curJsonObj = null;
        //动态生成工具栏操作按钮插件
        //  $(".panelBar .toolBar").toolbarBtn();
        tbList = $("#tbList");
        var cols = [
            {title: '征收项目', name: 'ZSXMMC', width: 110, align: 'left', hidden: false},
            {title: '征收品目', name: 'ZSPMMC', width: 110, align: 'left', hidden: false},
            {title: '所属期起', name: 'SSSQ_Q', width: 90, align: 'left', hidden: false},
            {title: '所属期止', name: 'SSSQ_Z', width: 90, align: 'left', hidden: false},
            {
                title: '缴款状态',
                name: 'KKJG_DM',
                width: 80,
                align: 'center',
                hidden: false,
                renderer: function (val, item) {
                    if((item.YBTSE=='0'||item.YBTSE==0)&&item.YBTSE!=''){
                        return '应补退税额为零，无需缴款';
                    }else{
                        if(val == '00'){
                            return '已缴款';
                        }else{
                            return '未缴款';
                        }
                    }


                }
            },
            {
                title: '是否已申报',
                name: 'ISSB',
                width: 80,
                align: 'center',
                hidden: false,
                renderer: function (val, item) {
            	if(val == '0'){
            	  return '未申报';	
            	}else if(val == '1'){
            	  return '已申报';	
            	}else{
            	  return '未申报';	
            	}
                   
                }
            },
            {title: '申报方式', name: 'SBFS', width: 100, align: 'left', hidden: false}
            
        ];

        gridObj = tbList.mmGrid({
            height: 420,
            checkCol: false,
            indexColWidth: 35,
            showBackboard: false,
            autoLoad: false,
            cols: cols
        });

    };
    //公有方法
    return {
        onLoad: function () {
            curSeg = sbztCx;
            winObj = frameElement.api;
            initLayout();
            curSeg.onQuery();
            //删除组件释放内存
            $(window).unload(function () {
            });
        },
      
        //查询数据
        onQuery: function () {
            baseTools.xhrAjax({
                url: "/hlwsb/sbkk/getSbZt.do",
                params: {NSRSBH: baseTools.getUserZh()},
                callback: [curSeg.pageFlowControl]
            });
        },
      
      
        //使用json格式的业务数据填充表格
        fillGridByJson: function (jsonObj, xhrArgs) {
            //绑定数据
            gridObj.load(jsonObj.data);
        },
        //删除记录
        onClose: function () {
        	winObj.close();
        },
        pageFlowControl: function (jsonObj, xhrArgs) {
            curJsonObj = jsonObj;


            switch (parseInt(jsonObj.code)) {
                //查询操作返回标志
                case 0:
                    curSeg.fillGridByJson(jsonObj, xhrArgs);
					
                    break;
              
                case -1://保存出错返回标志
                     break;
               default:
            }
        }
    };
})();