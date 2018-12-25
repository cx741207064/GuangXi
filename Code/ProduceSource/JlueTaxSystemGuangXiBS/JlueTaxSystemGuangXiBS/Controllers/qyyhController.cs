using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class qyyhController : Controller
    {

        public string selectGnmkByYhid(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("selectGnmkByYhid.json"));
            return_str = callback + "(" + str + ")";
            return return_str;
        }

        public string selectGnmkByYhidPidNoSb(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("selectGnmkByYhidPidNoSb.json"));
            return_str = callback + "(" + str + ")";
            return return_str;
        }

        public string selectGnmkByYhidPidSb(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("selectGnmkByYhidPidSb.json"));
            JObject return_j = JsonConvert.DeserializeObject<JObject>(str);
            JArray list_ja = (JArray)return_j["list"];
            for (int i = 0; i < list_ja.Count; i++)
            {
                JObject jo = (JObject)list_ja[i];
                if (jo["SJ_MKXKMC"].ToString() != "增值税(一般纳税人适用)" && jo["MKXK_MC"].ToString() != "附加税(费)申报（增值税）" && jo["MKXK_MC"].ToString() != "印花税申报")
                {
                    jo["MKXK_URL_PT"] = "";
                }
            }
            return_str = callback + "(" + JsonConvert.SerializeObject(return_j) + ")";
            return return_str;
        }

        public string selectGnmkByYhidPid(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("selectGnmkByYhidPid.json"));
            return_str = callback + "(" + str + ")";
            return return_str;
        }
 
    }
}