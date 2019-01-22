using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    [RoutePrefix("hlwsb/dm")]
    public class dmController : ApiController
    {
        [Route("getDM_ZZS_JMSZC.do")]
        public JObject POSTgetDM_ZZS_JMSZC(string JMZLB)
        {
            JObject re_json = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getDM_ZZS_JMSZC." + JMZLB + ".json"));
            return_str = str;
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            return re_json;
        }

        [Route("getSb_DM_WITH.do")]
        public JObject POSTgetSb_DM_WITH(string SID)
        {
            JObject re_json = new JObject();
            string ZSXM = System.Web.HttpContext.Current.Request["ZSXM"];
            string YSXM_DM = System.Web.HttpContext.Current.Request["YSXM_DM"];

            string str = "";
            if (ZSXM != null)
            {
                str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSb_DM_WITH." + SID + "." + ZSXM + ".json"));
                re_json = JsonConvert.DeserializeObject<JObject>(str);
            }
            else
            {
                if (SID == "dm.getSL_YSXM")
                {
                    str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSb_DM_WITH." + SID + ".json"));
                    re_json = JsonConvert.DeserializeObject<JObject>(str);
                    getSL_YSXM(ref re_json, YSXM_DM);
                }
                else
                {
                    str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSb_DM_WITH." + SID + ".json"));
                    re_json = JsonConvert.DeserializeObject<JObject>(str);
                }
            }
            return re_json;
        }

        public void getSL_YSXM(ref JObject re_json, string YSXM_DM)
        {
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("SL_YSXM.json"));
            JArray ja = JsonConvert.DeserializeObject<JArray>(str);
            IEnumerable<JToken> ejt = ja.Where(jo => jo["代码"].ToString() == YSXM_DM);
            if (ejt.Count() == 1)
            {
                re_json["data"]["BODY"][0]["ZZSSLHZZSL"] = ejt.First()["增值税税率或征收率"];
                re_json["data"]["BODY"][0]["YYSSLHZZSL"] = ejt.First()["营业税税率"];
            }
        }

        [Route("getDM_QYSDS_JMSZC.do")]
        public JObject POSTgetDM_QYSDS_JMSZC()
        {
            JObject re_json = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getDM_QYSDS_JMSZC.json"));
            return_str = str;
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            return re_json;
        }

        [Route("getDM_QYSDS_ALL_YXBZ.do")]
        public JObject POSTgetDM_QYSDS_ALL_YXBZ()
        {
            JObject re_json = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getDM_QYSDS_ALL_YXBZ.json"));
            return_str = str;
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            return re_json;
        }

    }
}
