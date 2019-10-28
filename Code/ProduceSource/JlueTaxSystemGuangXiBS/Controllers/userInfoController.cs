using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    [RoutePrefix("web/server/platform/userInfo")]
    public class userInfoController : ApiController
    {
        [Route("initUrl.do")]
        public HttpResponseMessage initUrl(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("initUrl.json"));
            JObject initUrl = JsonConvert.DeserializeObject<JObject>(str);
            JArray data = initUrl.SelectToken("data") as JArray;
            var iejt = data.Where(a =>
            {
                if (JToken.DeepEquals(a["MKXK_MC"], "我的信息") || JToken.DeepEquals(a["MKXK_MC"], "互动中心"))
                {
                    return true;
                }
                return false;
            });
            foreach (JObject jo in iejt)
            {
                jo["MKXK_URL"] = "/FunctionNotOpen.html";
            }
            return_str = callback + "(" + JsonConvert.SerializeObject(initUrl) + ")";
            return new HttpResponseMessage()
            {
                Content = new StringContent(return_str, System.Text.Encoding.UTF8, "application/json")
            };
        }

    }
}
