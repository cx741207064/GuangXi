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

        public void getSb_DM_WITH(string SID, string ZSXM)
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = "";
            if (ZSXM != null)
            {
                str = System.IO.File.ReadAllText(Server.MapPath("getSb_DM_WITH." + SID + "." + ZSXM + ".json"));
            }
            else
            {
                str = System.IO.File.ReadAllText(Server.MapPath("getSb_DM_WITH." + SID + ".json"));
            }
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

    }
}
