using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using JlueTaxSystemGuangXiBS.Code;
using System.Text;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class webController : Controller
    {
        public string gtsdhByhJy()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("gtsdhByhJy.json"));
            return_str = str;
            return return_str;
        }

        public JObject checkQyLoginNoCa()
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("checkQyLoginNoCa.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            JObject in_jo = (JObject)re_json["JCPT_USER"];

            GTXResult gr1 = GTXMethod.GetCompany();
            if (gr1.IsSuccess)
            {
                JObject jo = new JObject();
                jo = JsonConvert.DeserializeObject<JObject>(gr1.Data.ToString());
                if (jo.HasValues)
                {
                    JObject data_jo = jo;
                    in_jo["NSRMC"] = data_jo["NSRMC"];
                    in_jo["SHXYDM"] = data_jo["NSRSBH"];
                }
            }

            return re_json;
        }

    }
}
