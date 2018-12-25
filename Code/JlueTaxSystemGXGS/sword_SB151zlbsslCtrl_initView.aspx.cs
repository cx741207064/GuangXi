using JlueTaxSystemGXGS.Code;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace JlueTaxSystemGXGS
{
    public partial class sword_SB151zlbsslCtrl_initView : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            SwordPageData.Attributes.Add("data", "{\"data\":[{\"name\":\"ymkg\",\"value\":\"N\",\"type\":\"\"},{\"name\":\"flag\",\"value\":\"0\",\"type\":\"\"},{\"name\":\"nsrxxMap\",\"data\":{\"ssqq\":{\"value\":\"2017-10-01\"},\"nsrsbh\":{\"value\":\""
                + CurrentUser.GetInstance().GetCurrentCompanyNSRSBH
                + "\"},\"sbrq\":{\"value\":\"2017-11-27\"},\"zlbsdlDm\":{\"value\":\"ZL1001\"},\"ssqz\":{\"value\":\"2017-10-31\"}},\"sword\":\"SwordForm\"},{\"name\":\"zlbsdlDm\",\"value\":\"ZL1001\",\"type\":\"\"},{\"name\":\"slxxForm\",\"data\":{\"sjgsrq\":{\"value\":\"2017-11-27 00:00:00\"},\"sjgsdq\":{\"value\":\"14501070500\"},\"lrrDm\":{\"value\":\"000000dzswj\"},\"swjgDm\":{\"value\":\"14501070500\"},\"swryDm\":{\"value\":\"000000dzswj\"},\"swjgmc\":{\"value\":\"南宁市西乡塘区国家税务局税源管理二股\"},\"znDm\":{\"value\":\"\"},\"gwxh\":{\"value\":\"\"},\"xgrDm\":{\"value\":\"000000dzswj\"},\"swrymc\":{\"value\":\"\"},\"xgrq\":{\"value\":\"2017-11-27 10:01:46\"},\"lrrq\":{\"value\":\"2017-11-27 10:01:46\"}},\"sword\":\"SwordForm\"},{\"name\":\"ssqq\",\"value\":\"2017-10-01\",\"type\":\"\"},{\"name\":\"ssqz\",\"value\":\"2017-10-31\",\"type\":\"\"},{\"data\":[{\"caption\":\"企业会计准则（一般企业）财务报表报送与信息采集\",\"pcode\":\"ZL1001\",\"code\":\"ZL1001001\"},{\"caption\":\"企业会计制度财务报表报送与信息采集\",\"pcode\":\"ZL1001\",\"code\":\"ZL1001002\"},{\"caption\":\"小企业会计准则财务报表与信息采集\",\"pcode\":\"ZL1001\",\"code\":\"ZL1001003\"}],\"sword\":\"SwordSelect\",\"dataName\":\"DM_SB_ZLBSXL\"},{\"name\":\"zlbsbz\",\"value\":\"N\",\"type\":\"\"},{\"name\":\"kjzdbz\",\"value\":\"N\",\"type\":\"\"},{\"name\":\"kjzdbabz\",\"value\":\"N\",\"type\":\"\"},{\"name\":\"zlbshtsqkg\",\"value\":\"N\",\"type\":\"\"},{\"name\":\"tsxxkg\",\"value\":\"Y\",\"type\":\"\"},{\"name\":\"gwssswjg\",\"value\":\"14501070500\",\"type\":\"\"},{\"name\":\"sessionID\",\"value\":\"90d54aeb5e1241468498f62f1238056f\",\"type\":\"\"}]}");
        }
    }
}