var inlineOutlinepro = 'sc';
window.inlineOutlinepro = inlineOutlinepro;
switch (inlineOutlinepro) {
    case 'dev':
        //开发、测试环境
        window.dzyxImgPath = "http://dzyx.gxgs.tax.cn:7006/yximg/";//电子影像图片路径
        window.zrdssbUrl = "http://10.104.120.13:7001";//中软地税申报
        window.zrgssbUrl = "http://87.12.64.46:7102";//中软国税申报
       // window.gxwzUrl = "http://zxhd.gxgs.gov.cn:10009";//广西网站路径
        window.gxwzUrl = "http://localhost:8002";//广西网站路径
        window.xbnsrtc = "http://wsbsfwt.gxgs.gov.cn:11002/taxclient/wssq/ywsq/djl/scbsbl/scbl_login.html";//广西新办纳税人套餐（直接跳转旧的页面）
        //window.xbnsrtc = "http://wsbsfwt.gxgs.gov.cn:11002/taxclient/wssq/ywsq/djl/scbsbl/scbl_login_check.html";//广西新办纳税人套餐（南宁试点）
        window.mhTitleImg = "imgs/gxlogo_bk.png?version=1.14";//广西门户页面顶部图片
        window.loginIndexHeadBack = "header";//规范首页顶部背景css样式
        window.mainHeadBack = "gradient";//主页面顶部背景css样式
        window.wsbsfwtUrl = "http://jspt22.gxgs.gov.cn:11002/";//网厅
        break;
    case 'ysc':
        //预生产环境
        window.dzyxImgPath = "http://yscdzswj.gxgs.gov.cn:19811/yximg/";//电子影像图片路径
        window.zrdssbUrl = "http://wsbs.guangxi.chinatax.gov.cn:7001";//中软地税申报
        window.zrgssbUrl = "http://wsbs.guangxi.chinatax.gov.cn:7001";//中软国税申报
        window.gxwzUrl = "http://yscdzswj.gxgs.gov.cn:19731";//广西网站路径
        window.xbnsrtc = "http://yscdzswj.gxgs.gov.cn:19801/taxclient/wssq/ywsq/djl/scbsbl/scbl_login.html";//广西新办纳税人套餐
        // window.mhTitleImg = "imgs/gxlogo_ysc.png?version=1.14";//广西门户页面顶部图片
        window.mhTitleImg = "imgs/gxlogo_yscbk.png?version=1.14";//广西门户页面顶部图片
        window.loginIndexHeadBack = "header_ysc";//规范首页顶部背景css样式
        window.mainHeadBack = "gradient_ysc";//主页面顶部背景css样式
        window.downloadPath="http://etax.guangxi.chinatax.gov.cn:19920";//数字证书下载地址
        window.wsbsfwtUrl = "http://etax.guangxi.chinatax.gov.cn:9801/";//网厅
        break;
    case 'sc':
        //正式环境
        window.dzyxImgPath = "https://etax.guangxi.chinatax.gov.cn:9725/yximg/";//电子影像图片路径
        window.zrdssbUrl = "https://wsbs.guangxi.chinatax.gov.cn:7006";//中软地税申报
        window.zrgssbUrl = "https://wsbs.guangxi.chinatax.gov.cn:7006";//中软国税申报
        window.gxwzUrl = "https://etax.guangxi.chinatax.gov.cn:9722";//广西网站路径
        window.xbnsrtc = replaceProtocolPortPort("http://etax.guangxi.chinatax.gov.cn:9801/taxclient/wssq/ywsq/djl/scbsbl/scbl_login.html");//广西新办纳税人套餐（直接跳转旧的页面）
        //window.xbnsrtc = "http://etax.guangxi.chinatax.gov.cn:9851/taxclient/wssq/ywsq/djl/scbsbl/scbl_login_check.html";//广西新办纳税人套餐（南宁试点）
        window.mhTitleImg = "imgs/gxlogo.png?version=1.14";//广西门户页面顶部图片
        window.loginIndexHeadBack = "header";//规范首页顶部背景css样式
        window.mainHeadBack = "gradient";//主页面顶部背景css样式
        window.downloadPath="http://etax.guangxi.chinatax.gov.cn:19920";//数字证书下载地址
        window.wsbsfwtUrl = "https://etax.guangxi.chinatax.gov.cn:9724/";//网厅
        break;
    default:
        alert("配置文件异常，请联系运维!");
        break;
}


//转换协议端口（生产）
function replaceProtocolPortPort(url){
    return replaceProtocol(replacePort(url));
}
//转换端口
function replacePort(url) {
    var protocol =window.location.protocol;
    if(protocol == "https:" && url){
        if(url.indexOf(":9904")!= -1){//申报
            return url.replace(":9904",":9726");
        }else if(url.indexOf(":9801")!= -1){//网厅
            return url.replace(":9801",":9724");
        }else if(url.indexOf(":9711")!= -1){//平台
            return url.replace(":9711",":9723");
        }else if(url.indexOf(":9811")!= -1){//电子影像
            return url.replace(":9811",":9725");
        }else if(url.indexOf(":9812")!= -1){//电子签章
            return url.replace(":9812",":9721");
        }else if(url.indexOf(":9731")!= -1){//公共服务
            return url.replace(":9731",":9722");
        }
    }
    return url;
}
//转换协议
function replaceProtocol(url){
    var protocol = window.location.protocol;
    if(protocol == "https:" && url){
        return url.replace("http://","https://");
    }
    return url;
}

