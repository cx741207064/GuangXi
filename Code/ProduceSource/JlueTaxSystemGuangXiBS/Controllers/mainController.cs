using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using JlueTaxSystemGuangXiBS.Code;
using System.Text;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    [RoutePrefix("web/server/main")]
    public class mainController : ApiController
    {
        [Route("getRjbbUrl.do")]
        public JObject postgetRjbbUrl()
        {
            JObject re_json = new JObject();
            string RJBB_BM = System.Web.HttpContext.Current.Request["RJBB_BM"];
            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getRjbbUrl." + RJBB_BM + ".json"));
            return_str = str;
            re_json = JsonConvert.DeserializeObject<JObject>(return_str);
            return re_json;
        }

        [Route("getMsgs.do")]
        public HttpResponseMessage postgetMsgs(string callback)
        {
            string return_str = "";

            JObject re_json = new JObject();
            JArray ysbqc_ja = new JArray();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getMsgs.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            GTXResult resultq = GTXMethod.GetGuangXiYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXGuangXiUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXGuangXiUserYSBQC>>(resultq.Data.ToString());

                ysbqclist = ysbqclist.Where(a => a.SBZT != "已申报" && a.BDDM != "YHSSB").ToList();
                for (int i = 0; i < ysbqclist.Count; i++)
                {
                    JObject jo = new JObject();
                    jo["BLLX"] = "选办";
                    jo["DMV"] = "申报待办事项";
                    jo["CZDZ"] = ysbqclist[i].Url;
                    jo["YWID"] = ysbqclist[i].Id;
                    jo["TOTAL"] = ysbqclist.Count;
                    jo["ROWNO"] = i + 1;
                    jo["CLJGDM"] = "41";
                    jo["SXLX"] = "1";
                    jo["ID"] = ysbqclist[i].Id;
                    jo["XTMC"] = "网上申报";
                    jo["SXMC"] = ysbqclist[i].TaskName;
                    jo["SXRQ"] = ysbqclist[i].SBQX;
                    jo["XTDM"] = "001";
                    ysbqc_ja.Add(jo);
                }
            }
            re_json["data"]["wddb"] = ysbqc_ja;

            return_str = callback + "(" + JsonConvert.SerializeObject(re_json) + ")";
            return new HttpResponseMessage()
            {
                Content = new StringContent(return_str, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [Route("getCommonFuction.do")]
        public HttpResponseMessage postgetCommonFuction(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getCommonFuction.json"));

            return_str = callback + "(" + str + ")";
            return new HttpResponseMessage()
            {
                Content = new StringContent(return_str, System.Text.Encoding.UTF8, "application/json")
            };
        }

    }
}
