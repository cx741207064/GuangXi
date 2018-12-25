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
    public class hlwsbController : Controller
    {
        public void GetSbTree(string callback)
        {
            string return_str = "";

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("GetSbTree.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            JObject in_jo = (JObject)re_json["userdata"];
            GTXResult gr1 = GTXMethod.GetCompany();
            if (gr1.IsSuccess)
            {
                JObject jo = new JObject();
                jo = JsonConvert.DeserializeObject<JObject>(gr1.Data.ToString());
                if (jo.HasValues)
                {
                    JObject data_jo = jo;
                    in_jo["NSRMC"] = data_jo["NSRMC"];
                    in_jo["NSRSBH"] = data_jo["NSRSBH"];
                    in_jo["DJZCLXMC"] = data_jo["DJZCLX"];
                    in_jo["ZCDZ"] = data_jo["ZCDZ"];
                    in_jo["SCJYDZ"] = data_jo["SCJYDZ"];
                    in_jo["DHHM"] = data_jo["LXDH"];
                    in_jo["HYMC"] = data_jo["GBHY"];
                    in_jo["ZGSWJG_MC"] = data_jo["ZGDSSWJFJMC"];
                }
            }

            GTXResult gr2 = GTXMethod.GetCompanyPerson();
            if (gr2.IsSuccess)
            {
                JArray ja = new JArray();
                ja = JsonConvert.DeserializeObject<JArray>(gr2.Data.ToString());
                if (ja.Count > 0)
                {
                    JObject data_jo = (JObject)ja[0];
                    in_jo["FDDBR"] = data_jo["Name"];
                }
            }

            return_str = callback + "(" + JsonConvert.SerializeObject(re_json) + ")";
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

    }
}