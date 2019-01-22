var mainHtml = top;
$(document).ready(function () {
    ptjs.onload();
})

var ptjs = (function () {
    return {
        onload : function () {
            if(mainHtml.dbObj!=null){
            	var param = 'id='+mainHtml.dbObj.id+'&ywid='+mainHtml.dbObj.ywid;
            	if(mainHtml.dbObj.dz.indexOf("?")!=-1){
            		param = '&'+param;
            	}else{
            		param = '?'+param;
            	}
            	slider.tabIframe(mainHtml.dbObj.title,mainHtml.dbObj.dz+param);
            	mainHtml.dbObj = null;
            }
            if(mainHtml.jbxxObj!=null){
            	
            	slider.tabIframe(mainHtml.jbxxObj.title,mainHtml.jbxxObj.dz);
            	mainHtml.jbxxObj = null;
            }
        }
    }
})();
