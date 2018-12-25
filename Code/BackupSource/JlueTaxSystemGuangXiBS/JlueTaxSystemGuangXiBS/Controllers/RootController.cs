using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class RootController : Controller
    {
        public string sword(string ctrl)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("sword." + ctrl + ".html"));
            return_str = str;
            return return_str;
        }

        public string ajax(string ctrl, string postData)
        {
            string return_str = "";
            string str = "";
            JObject return_j = new JObject();
            string postData_ctrl = "";
            string zspmDm = "";
            if (postData != null)
            {
                return_j = JsonConvert.DeserializeObject<JObject>(postData);
                postData_ctrl = return_j["ctrl"].ToString().Split('?')[0];
                if (postData_ctrl == "SB025YhssbCtrl_getSl")
                {
                    zspmDm = return_j["data"][0]["value"].ToString();
                }
            }
            if (ctrl != null)
            {
                str = System.IO.File.ReadAllText(Server.MapPath("ajax.sword." + ctrl + ".json"));
            }
            else if (postData_ctrl != "")
            {
                if (zspmDm != "")
                {
                    str = System.IO.File.ReadAllText(Server.MapPath("ajax.sword." + zspmDm + ".json"));
                }
                else
                {
                    str = System.IO.File.ReadAllText(Server.MapPath("ajax.sword." + postData_ctrl + ".json"));
                }
            }
            return_str = str;
            return return_str;
        }

        public string form(string ctrl, string postData)
        {
            string return_str = "";
            string str = "";
            JObject return_j = new JObject();
            string postData_ctrl = "";
            if (postData != null)
            {
                return_j = JsonConvert.DeserializeObject<JObject>(postData);
                postData_ctrl = return_j["ctrl"].ToString().Split('?')[0];
            }
            if (ctrl != null)
            {
                str = System.IO.File.ReadAllText(Server.MapPath("form.sword." + ctrl + ".json"));
            }
            else if (postData_ctrl != null)
            {
                str = System.IO.File.ReadAllText(Server.MapPath("form.sword." + postData_ctrl + ".html"));
            }
            return_str = str;
            return return_str;
        }

    }
}
