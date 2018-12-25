using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// do_jdsds2012_Jdsds2012_loadJdsds2012AInit 的摘要说明
    /// </summary>
    public class do_jdsds2012_Jdsds2012_loadJdsds2012AInit : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String json = File.ReadAllText(context.Server.MapPath("/WSSBSL/JSON/do_jdsds2012_Jdsds2012_loadJdsds2012AInit.json"));
            context.Response.ContentType = "application/json";
            context.Response.Write(json);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}