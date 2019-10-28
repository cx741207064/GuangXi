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
    [RoutePrefix("web")]
    public class webController : ApiController
    {
        [Route("gtsdhByhJy.do")]
        public JObject gtsdhByhJy()
        {
            JObject re_json = new JObject();
            string return_str = "";
            //string str = System.IO.File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath("~/gtsdhByhJy.json"));
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("gtsdhByhJy.json"));
            return_str = str;
            re_json = JsonConvert.DeserializeObject<JObject>(return_str);
            return re_json;
        }

        [Route("checkQyLoginNoCa.do")]
        public JObject checkQyLoginNoCa()
        {
            JObject re_json = new JObject();
            //string str = System.IO.File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath("checkQyLoginNoCa.json"));
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("checkQyLoginNoCa.json"));

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

        [Route("checkQyyhDxptInfo.do")]
        public JObject checkQyyhDxptInfo()
        {
            JObject re_json = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("checkQyyhDxptInfo.json"));
            return_str = str;
            re_json = JsonConvert.DeserializeObject<JObject>(return_str);
            return re_json;
        }

        [Route("qyDxptLogin.do")]
        public JObject qyDxptLogin()
        {
            JObject re_json = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("qyDxptLogin.json"));
            return_str = str;
            re_json = JsonConvert.DeserializeObject<JObject>(return_str);

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

        [Route("cm/showPictureCode.do")]
        [HttpGet]
        public HttpResponseMessage showPictureCode()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("showPictureCode.png"));
            return_str = str;
            return new HttpResponseMessage()
            {
                Content = new StringContent(return_str, System.Text.Encoding.UTF8, "application/html")
            };
        }

    }
}
