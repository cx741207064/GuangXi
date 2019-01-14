using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class xgmController : Controller
    {
        public void getSB_ZZS_XGMNSR_CZZS(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_XGMNSR_CZZS.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void insertSB_ZZS_XGMNSR_CZZS(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("insertSB_ZZS_XGMNSR_CZZS.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void updateSB_ZZS_XGMNSR_CZZS(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("updateSB_ZZS_XGMNSR_CZZS.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void delSB_ZZS_XGMNSR_CZZS(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_XGMNSR_CZZS.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void getSB_ZZS_XGMNSR_CZZS_FB1_2016(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_XGMNSR_CZZS_FB1_2016.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }


        public void getSB_ZZS_XGMNSR_CZZS_JMSMXB(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_XGMNSR_CZZS_JMSMXB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }
        public void insertSB_ZZS_XGMNSR_CZZS_JMSMXB(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("insertSB_ZZS_XGMNSR_CZZS_JMSMXB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void delSB_ZZS_XGMNSR_CZZS_JMSMXB(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_XGMNSR_CZZS_JMSMXB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

    }
}
