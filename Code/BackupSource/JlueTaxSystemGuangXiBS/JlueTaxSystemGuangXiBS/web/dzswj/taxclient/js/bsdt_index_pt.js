$(document).ready(function () {
    bsdt_msg.onload();
})

var bsdt_msg = (function () {

    return {
        onload: function () {
        	jcptTools.initOtherSystemUrl();
            bsdt_msg.showMsg(0, 0);
            bsdt_msg.tablePage();
        },
        showMsg: function (sxlx, xxStart) {
            var sxlx = '1';
            baseTools.xhrAjax({
				url:'/server/main/getMsgs.do',
				dataType:'jsonp',
				params:{
					CXLX:'2'
				},
            callback:[function(datas){
                    if (datas.code == '1') {
                        //我的代办
                        bsdt_msg.fileWDDB(datas.data.wddb, 0);
                        //我的消息
                        bsdt_msg.fillWDXX(datas.data.wdxx, 0);
                        //风险预警
                        bsdt_msg.fillFxyj(datas.data.fxyj, 0);


                        $(".dataTables_scrollHeadInner,.dataTables_scrollHeadInner table").css("width", "100%");
                        $('.dataTables_empty').css("height",'140px');
                    } else if (datas.code == '-3') {
                        //session失效
                        jcptTools.gotoLogin();
                        return;
                    }
                }]
            });
        },
        fileWDDB: function (list, dbStart) {
            $('#wxl_bszj1').DataTable({
                "data": list,
                "columnDefs": [{
                        "targets": 3,
                        "data": null,
                        "render": function (data, type, full, meta) {
                        	if(full.CZDZ!=null&&full.CZDZ!=''){
                        		return '<a href="#"><span class="btn wxl_bg_lan1" onClick="javascript:bsdt_msg.msgBL(\'' + full.SXMC + '\',\'' + full.ID + '\',\'' + full.YWID + '\',\'' + full.CZDZ + '\',\'' + full.XTDM + '\');">办理</span><span class="btn wxl_bg_yel"  onClick="javascript:bsdt_msg.msgHL(\'' + full.ID + '\');">忽略</span></a>';
                        	}else{
                        		return data;
                        	}
                        },
                        "width": "120px"
                    },
                    {
                        "targets": 0,
                        "data": null,
                        "render": function (data, type, full, meta) {
                            return meta.row + 1 + meta.settings._iDisplayStart;
                        }
                    },{
                        "targets": 1,
                        "data": null,
                        "render": function (data, type, full, meta) {
                        	if(full.CZDZ!=null&&full.CZDZ!=''){
                        		return '<a href="javascript:void(0);" onClick="javascript:bsdt_msg.msgBL(\'' + full.SXMC + '\',\'' + full.ID + '\',\'' + full.YWID + '\',\'' + full.CZDZ + '\',\'' + full.XTDM + '\');">'+data+'</a>';
                        	}else{
                        		return data;
                        	}
                        }
                    }
                ],
                "columns": [
                    {
                        "data": "BLLX"
                    },
                    {
                        "data": "SXMC"
                    },
                    {
                        "data": "SXRQ",
                        "width": "100px",
                        "bAutoWidth": true,
                        "render":function (data) {
                            return "<span style='text-align: center; display: block'>"+data+"</span>"
                        }
                    }
                ],
                "destroy": true,
                "ordering": false,
                "info": false,
                "lengthChange": false,
                "searching": false,
                "paging": false,
                //                     "pagingType": "full_numbers",
                //                     "displayStart":dbStart,
                //                    "pageLength": 4,
                "scrollY": $('.wxl_list').height() - 76 + 'px',
                "language": {
                    "zeroRecords": "没有找到记录"
                },
                "fnInitComplete": function (oSettings, json) { /*判断认证状态显示字体颜色*/ }
            });
            $("#wxl_bszj1 tbody tr td:last-child").css("text-align", "center");
        },
        fillWDXX: function (list, xxStart) {
            $('#wxl_bszj2').DataTable({
                "data": list,
                "columns": [{
                        "data": "SXMC"
                    },
                    {
                        "data": "SXMC"
                    },
                    {
                        "data": "SXRQ",
                        "width": "100px",
                        "bAutoWidth": true,
                        "render":function (data) {
                            return "<span style='text-align: center; display: block'>"+data+"</span>"
                        }
                    },
                    {
                        "data": "CLJGDM",
                        "width": "100px",
                        "bAutoWidth": true,
                        "render":function (data) {
                            return "<span style='text-align: center; display: block'>"+jcptTools.convertStatus(data)+"</span>"
                        }
                    }
                ],
                "columnDefs": [
                    {
                        "targets": 0,
                        "data": null,
                        "render": function (data, type, full, meta) {
                            return meta.row + 1 + meta.settings._iDisplayStart;
                        }
                    },{
                        "targets": 1,
                        "data": null,
                        "render": function (data, type, full, meta) {
                        	if(full.CLJGDM=='31'&&full.XTDM=='002'){
                        		//网厅跳转至我要查询历史
                        	    return '<a href="javascript:void(0);" onClick="javascript:bsdt_msg.redirectWYCX();">'+data+'</a>';
                        	}
                        	if(full.CZDZ!=null&&full.CZDZ!=''){
                        		return '<a href="javascript:void(0);" onClick="javascript:bsdt_msg.msgBL(\'' + full.SXMC + '\',\'' + full.ID + '\',\'' + full.YWID + '\',\'' + full.CZDZ + '\',\'' + full.XTDM + '\');">'+data+'</a>';
                        	}else{
                        		return data;
                        	}
                        }
                    }
                ],
                "destroy": true,
                "ordering": false,
                "info": false,
                "lengthChange": false,
                "searching": false,
                "paging": false,
                "scrollY": $('.wxl_list').height() - 76 + 'px',
                //                     "pagingType": "full_numbers",
                //                     "displayStart":xxStart,
                //                    "pageLength": 7,
                "language": {
                    "zeroRecords": "没有找到记录"
                },
                "fnInitComplete": function (oSettings, json) { /*判断认证状态显示字体颜色*/ }
            });
            //                  $("#wxl_bszj2 tbody tr td:last-child").css("text-align","center");
            //                  $("#wxl_bszj2 tbody tr td:last-child").css("cssText","color:#FF5722")
        },
        redirectWYCX:function(){
		    var obj = {};
		    var dq_yhsf = jcptTools.getUserDataByKey("DQ_YHSF");
            if(dq_yhsf!='ZRR'){ 
            	obj['TOP_MKXKID']="75015";
	            obj['MKXKID']="75029";
	            var url = dzswjCommon.getMainUrl(obj);
	            dzswjCommon.liClick(url,"3");
		    }
	   },
        fillFxyj: function (list, xxStart) {
            $('#wxl_bszj3').DataTable({
                "data": list,
                "columns": [
                    {
                        "data": "SXMC"
                    },
                    {
                        "data": "SXMC"
                    },
                    {
                        "data": "SXRQ",
                        "width": "100px",
                        "bAutoWidth": true,
                        "render":function (data) {
                            return "<span style='text-align: center; display: block'>"+data+"</span>"
                        }
                    }
                ],
                "columnDefs": [{
                    "targets": 0,
                    "data": null,
                    "render": function (data, type, full, meta) {
                        return meta.row + 1 + meta.settings._iDisplayStart;
                    }
                }],
                "destroy": true,
                "ordering": false,
                "info": false,
                "lengthChange": false,
                "searching": false,
                "paging": false,
                "scrollY": $('.wxl_list').height() - 76 + 'px',
                //                     "pagingType": "full_numbers",
                //                     "displayStart":xxStart,
                //                    "pageLength": 7,
                "language": {
                    "zeroRecords": "没有找到记录"
                },
                "fnInitComplete": function (oSettings, json) { /*判断认证状态显示字体颜色*/ }
            });
        },
        /*表格分页*/
        tablePage: function () {
            /*表格中表头错位*/
            setTimeout(function () {
                $(".dataTables_scrollHeadInner,.dataTables_scrollHeadInner table").css("width", "100%");

            }, 50)
        },
        msgHL: function (id) {
            if (id == null || id.length == 0) {
                return;
            }
            if (confirm("确定要忽略这条消息吗？")) {
            	baseTools.xhrAjax({
					url:'/server/main/updateStatus.do',
					dataType:'jsonp',
					params:{
						ID:id,
						CZDM:'1'
					},
					callback:[function(datas){
                        if (datas.code != '1' && datas.code != undefined) {
                            jcptTools.msg(datas.msg);
                            return;
                        } else {
                            jcptTools.msg('操作成功！');
                            //                                var dbStart = $('#wxl_bszj').dataTable().fnSettings()._iDisplayStart;
                            //                                var xxStart = $('#wxl_my_msg').dataTable().fnSettings()._iDisplayStart;
                            bsdt_msg.showMsg(0, 0);
                        }
                    }]
                });
            }
        },
        msgBL: function (dmv, id, ywid, dz,xtdm) {
            if (dmv == null || dmv.length == 0 || id == null || id.length == 0 || ywid == null || ywid.length == 0 || dz == null || dz.length == 0) {
                jcptTools.msg('参数丢失，无法办理！');
                return;
            }
            var param = 'id='+id+'&ywid='+ywid;
            if(dz.indexOf("?")!=-1){
        		param = '&'+param;
        	}else{
        		param = '?'+param;
        	}
            dz = jcptTools.getFullUrl(xtdm,dz);
            parent.slider.tabIframe(dmv, dz+param);
            //               $.ajax({
            //                    url:'/server/main/updateStatus.do',
            //                    data:{
            //                        ID:id,
            //                        CZDM:'1'
            //                    },
            //                    success:function(datas){
            //                        if(datas.code != '1' && datas.code != undefined){
            //                            jcptTools.msg(datas.msg);
            //                            return;
            //                        }else{
            //                            //打开tab页
            //                            jcptTools.msg('操作成功！');
            //                            bsdt_msg.showMsg();
            //                        }
            //                    }
            //                });
        },
        msgQR: function (id) {
            if (id == null) {
                return;
            }
            $.ajax({
                url: '/server/main/updateStatus.do',
                data: {
                    ID: id,
                    CZDM: '1'
                },
                success: function (datas) {
                    if (datas.code != '1' && datas.code != undefined) {
                        jcptTools.msg(datas.msg);
                        return;
                    } else {
                        jcptTools.msg('操作成功！');
                        var dbStart = $('#wxl_bszj').dataTable().fnSettings()._iDisplayStart;
                        var xxStart = $('#wxl_my_msg').dataTable().fnSettings()._iDisplayStart;
                        bsdt_msg.showMsg(dbStart, xxStart);
                    }
                }
            });
        }
    }
})();