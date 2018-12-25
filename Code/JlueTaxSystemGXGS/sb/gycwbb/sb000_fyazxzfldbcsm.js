
var beSbdr = false;
var cfcjbz;
var fbXMLData = {};

function initV(resData) {
    if (parent.cxbj == 'N') {
        $w("qykjzdInner").setDisabled("bcBtn");
        $w("qykjzdInner").setDisabled("qxBtn");
        $w("bcBtn").disabled();
        $w("qxBtn").disabled();
        $w("fyazxzfldbcclGrid").readonly();

    }
    if (null == parent.zlbsfbsaveData.get("费用按照性质分类的补充资料")) {
        parent.zlbsfbsaveData.set("费用按照性质分类的补充资料", null);
        $w("fyazxzfldbcclGrid").reset();
        var data = {
            'tds': {
                'xmmc': {
                    'value': '耗用的原材料'
                },
                'bqje': {
                    'value': '0.0'
                },
                'sqje': {
                    'value': '0.0'
                }
            }
        };
        var data1 = {
            'tds': {
                'xmmc': {
                    'value': '产成品及在产品存货变动'
                },
                'bqje': {
                    'value': '0.0'
                },
                'sqje': {
                    'value': '0.0'
                }
            }
        };

        var data2 = {
            'tds': {
                'xmmc': {
                    'value': '职工薪酬费用'
                },
                'bqje': {
                    'value': '0.0'
                },
                'sqje': {
                    'value': '0.0'
                }
            }
        };

        var data3 = {
            'tds': {
                'xmmc': {
                    'value': '折旧费和摊销费用'
                },
                'bqje': {
                    'value': '0.0'
                },
                'sqje': {
                    'value': '0.0'
                }
            }
        };

        var data4 = {
            'tds': {
                'xmmc': {
                    'value': '非流动资产减值损失'
                },
                'bqje': {
                    'value': '0.0'
                },
                'sqje': {
                    'value': '0.0'
                }
            }
        };

        var data5 = {
            'tds': {
                'xmmc': {
                    'value': '支付的租金'
                },
                'bqje': {
                    'value': '0.0'
                },
                'sqje': {
                    'value': '0.0'
                }
            }
        };

        var data6 = {
            'tds': {
                'xmmc': {
                    'value': '财务费用'
                },
                'bqje': {
                    'value': '0.0'
                },
                'sqje': {
                    'value': '0.0'
                }
            }
        };

        var data7 = {
            'tds': {
                'xmmc': {
                    'value': '其他费用'
                },
                'bqje': {
                    'value': '0.0'
                },
                'sqje': {
                    'value': '0.0'
                }
            }
        };


        $w("fyazxzfldbcclGrid").insertRow(data);
        $w("fyazxzfldbcclGrid").insertRow(data1);
        $w("fyazxzfldbcclGrid").insertRow(data2);
        $w("fyazxzfldbcclGrid").insertRow(data3);
        $w("fyazxzfldbcclGrid").insertRow(data4);
        $w("fyazxzfldbcclGrid").insertRow(data5);
        $w("fyazxzfldbcclGrid").insertRow(data6);
        $w("fyazxzfldbcclGrid").insertRow(data7);
    } else {
        fbXMLData["fyazxzfldbcclGrid"] = parent.zlbsfbsaveData.get("费用按照性质分类的补充资料");
        if (fbXMLData["fyazxzfldbcclGrid"] != null && fbXMLData["fyazxzfldbcclGrid"] != undefined && fbXMLData["fyazxzfldbcclGrid"].sword != null && fbXMLData["fyazxzfldbcclGrid"].sword != undefined && fbXMLData["fyazxzfldbcclGrid"].sword != "") {
            $w("fyazxzfldbcclGrid").initData(fbXMLData["fyazxzfldbcclGrid"]);
            //$w("fyazxzfldbcclGrid").initData(parent.zlbsfbsaveData.get("费用按照性质分类的补充资料"));
        }
    }
    parent.$w('zzsybnsrsb').setDisabled('save');
    parent.$w('zzsybnsrsb').setDisabled('import');
    parent.$w('zzsybnsrsb').setDisabled('reset');
    //开始增加网报特色
    if (parent.beSbdr && beSbdr == false) {
        parent.$w('zzsybnsrsb').setEnabled('save');
        parent.$w('zzsybnsrsb').setEnabled('import');
        parent.$w('zzsybnsrsb').setEnabled('reset');

        if (fbXMLData["fyazxzfldbcclGrid"] != null && fbXMLData["fyazxzfldbcclGrid"] != undefined && fbXMLData["fyazxzfldbcclGrid"].sword != null && fbXMLData["fyazxzfldbcclGrid"].sword != undefined && fbXMLData["fyazxzfldbcclGrid"].sword != "") {
            beSbdr = true;
            (function () {
                var inputs = $$('input');
                inputs.each(function (input, idx) {
                    if (input.id != "") {
                        caculate(input.id);
                    }
                });
                savefb();
                beSbdr = false;
            }).delay(1);
        }
    }

}

function changexmmc() {
    var rowdata = $w("fyazxzfldbcclGrid").getCheckedRowData();
    var rowEl = $w("fyazxzfldbcclGrid").getCheckedRow();
    if ($chk(parent.fyaxzfllist)) {
        var xmmc = rowdata.getValue("xmmc");
        for (var i = 0; i < parent.fyaxzfllist.trs.length; i++) {
            var xmmc_ = parent.fyaxzfllist.trs[i].tds.xmmc.value;
            if (xmmc_ == xmmc) {
                var cell = rowEl.getCell("sqje");
                var je = parent.fyaxzfllist.trs[i].tds.bqje.value;
                $w("fyazxzfldbcclGrid").updateCell(cell, je, je);
            }
        }
    }
}

function createRow(rowdata, rowEl, obj) {

    if ($chk(parent.fyaxzfllist)) {
        var xmmc = rowdata.getValue("xmmc");
        for (var i = 0; i < parent.fyaxzfllist.trs.length; i++) {
            var xmmc_ = parent.fyaxzfllist.trs[i].tds.xmmc.value;
            if (xmmc_ == xmmc) {
                var cell = rowEl.getCell("sqje");
                var je = parent.fyaxzfllist.trs[i].tds.bqje.value;
                $w("fyazxzfldbcclGrid").updateCell(cell, je, je);
            }
        }
    }
    if (parent.cxbj == 'N') {
        obj.disableRow(rowEl);
    }
}

/**
 * 保存操作
 */
function savefb() {
    var fyazxzfldbcclGrid = $w("fyazxzfldbcclGrid");
    if (!fyazxzfldbcclGrid.validate()) {
        return;
    }
    if (!beSbdr) {
        parent.alertmes("费用按照性质分类的补充资料采集完成且发送成功!");
    }
    parent.zlbsfbsaveData.set("费用按照性质分类的补充资料", fyazxzfldbcclGrid.getAllNoDeleteGridData());
    var id = "table00";
    parent.$("table00").setStyle('display', '');

    var iframes = parent.document.getElementsByTagName('iframe');
    for (var num = 0; num < iframes.length; num++) {
        var ifram = iframes[num];
        var iframid = ifram.id;
        var tableid = iframid.substring(0, iframid.indexOf("iframe"));
        if ($chk(tableid)) {
            parent.$(tableid).setStyle('display', 'none');
        }
    }
    parent.$w('zzsybnsrsb').setEnabled('save');
    parent.$w('zzsybnsrsb').setEnabled('reset');
    parent.$w('zzsybnsrsb').setEnabled('import');
}

function reset() {
    parent.zlbsfbsaveData.set("费用按照性质分类的补充资料", null);
    $w("fyazxzfldbcclGrid").reset();
    var data = {
        'tds': {
            'xmmc': {
                'value': '耗用的原材料'
            },
            'bqje': {
                'value': '0.0'
            },
            'sqje': {
                'value': '0.0'
            }
        }
    };
    var data1 = {
        'tds': {
            'xmmc': {
                'value': '产成品及在产品存货变动'
            },
            'bqje': {
                'value': '0.0'
            },
            'sqje': {
                'value': '0.0'
            }
        }
    };

    var data2 = {
        'tds': {
            'xmmc': {
                'value': '职工薪酬费用'
            },
            'bqje': {
                'value': '0.0'
            },
            'sqje': {
                'value': '0.0'
            }
        }
    };

    var data3 = {
        'tds': {
            'xmmc': {
                'value': '折旧费和摊销费用'
            },
            'bqje': {
                'value': '0.0'
            },
            'sqje': {
                'value': '0.0'
            }
        }
    };

    var data4 = {
        'tds': {
            'xmmc': {
                'value': '非流动资产减值损失'
            },
            'bqje': {
                'value': '0.0'
            },
            'sqje': {
                'value': '0.0'
            }
        }
    };

    var data5 = {
        'tds': {
            'xmmc': {
                'value': '支付的租金'
            },
            'bqje': {
                'value': '0.0'
            },
            'sqje': {
                'value': '0.0'
            }
        }
    };

    var data6 = {
        'tds': {
            'xmmc': {
                'value': '财务费用'
            },
            'bqje': {
                'value': '0.0'
            },
            'sqje': {
                'value': '0.0'
            }
        }
    };

    var data7 = {
        'tds': {
            'xmmc': {
                'value': '其他费用'
            },
            'bqje': {
                'value': '0.0'
            },
            'sqje': {
                'value': '0.0'
            }
        }
    };

    $w("fyazxzfldbcclGrid").insertRow(data);
    $w("fyazxzfldbcclGrid").insertRow(data1);
    $w("fyazxzfldbcclGrid").insertRow(data2);
    $w("fyazxzfldbcclGrid").insertRow(data3);
    $w("fyazxzfldbcclGrid").insertRow(data4);
    $w("fyazxzfldbcclGrid").insertRow(data5);
    $w("fyazxzfldbcclGrid").insertRow(data6);
    $w("fyazxzfldbcclGrid").insertRow(data7);
}

/**
 * 附表打印函数
 * @return
 */
function setFbdymbuuid() {
    parent.dymbuuid = "sb000_fyazxzfldbcsm";
    parent.hxdyForPrint = "N";
    parent.caculateGridHJFlag = "Y";
    parent.fykg = "N";
    parent.zzlx = "A4"; //（A3为纸张类型，根据实际情况设置）;
    parent.printMode = '{"PRINT_PAGE_PERCENT":"100%"}'; //;（50%为缩放比例，根据实际情况设置）;
    parent.printTitle = "费用按照性质分类的补充资料";
}