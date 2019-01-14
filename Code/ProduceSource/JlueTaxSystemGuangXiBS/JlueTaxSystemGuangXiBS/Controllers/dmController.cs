using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class dmController : Controller
    {
        public void getDM_ZZS_JMSZC(string JMZLB)
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getDM_ZZS_JMSZC." + JMZLB + ".json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

        public void getSb_DM_WITH(string SID, string ZSXM, string YSXM_DM)
        {
            JObject re_json = new JObject();
            string str = "";
            if (ZSXM != null)
            {
                str = System.IO.File.ReadAllText(Server.MapPath("getSb_DM_WITH." + SID + "." + ZSXM + ".json"));
                re_json = JsonConvert.DeserializeObject<JObject>(str);
            }
            else
            {
                if (SID == "dm.getSL_YSXM")
                {
                    str = System.IO.File.ReadAllText(Server.MapPath("getSb_DM_WITH." + SID + ".json"));
                    re_json = JsonConvert.DeserializeObject<JObject>(str);
                    getSL_YSXM(ref re_json, YSXM_DM);
                }
                else
                {
                    str = System.IO.File.ReadAllText(Server.MapPath("getSb_DM_WITH." + SID + ".json"));
                    re_json = JsonConvert.DeserializeObject<JObject>(str);
                }
            }
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void getSL_YSXM(ref JObject re_json, string YSXM_DM)
        {
            string str = System.IO.File.ReadAllText(Server.MapPath("SL_YSXM.json"));
            JArray ja = JsonConvert.DeserializeObject<JArray>(str);
            IEnumerable<JToken> ejt = ja.Where(jo => jo["代码"].ToString() == YSXM_DM);
            if (ejt.Count() == 1)
            {
                re_json["data"]["BODY"][0]["ZZSSLHZZSL"] = ejt.First()["增值税税率或征收率"];
                re_json["data"]["BODY"][0]["YYSSLHZZSL"] = ejt.First()["营业税税率"];
            }
        }

        public void getDM_QYSDS_JMSZC()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getDM_QYSDS_JMSZC.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

        public void getDM_QYSDS_ALL_YXBZ()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getDM_QYSDS_ALL_YXBZ.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

    }
}
