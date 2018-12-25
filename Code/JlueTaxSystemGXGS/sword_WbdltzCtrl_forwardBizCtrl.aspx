<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sword_WbdltzCtrl_forwardBizCtrl.aspx.cs" Inherits="JlueTaxSystemGXGS.sword_WbdltzCtrl_forwardBizCtrl" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

	
	
<html>
<title>网上申报缴税系统</title>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

		<script type="text/javascript" >
		function reload(){
			var bizflag = "true";
			var ctrl = "SB151zlbsslCtrl_initView";
			var urlParme = "&bizCtrl=SB151zlbsslCtrl_initView&wbdlbz=Y&webToken=lNmvV7It%252BcguYwLH18ql%252BKdqckfvtr2XK5NfAnnrzaxdn%252Bpt5rY9CHmP33sufBIOzdKckoCz4C%252FSsFyZzLjEZw%253D%253D";
			if("true"== bizflag){
				var url = "/sword?ctrl=" + ctrl + "&" + urlParme;
				//alert(url);
				document.location.href= url;
			}
		}
		</script>
		

</head>

	<body onload="reload();" >
	
	</body>
</html>
<div id="SwordPageData"  style='display:none' data='{"data":[{"name":"sessionID","value":"945e8d5492cf475eac38ea19e5c2df45","type":""}]}'></div>
