using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// do_jdsds2012_Jdsds2012_loadJdsdsAList 的摘要说明
    /// </summary>
    public class do_jdsds2012_Jdsds2012_loadJdsdsAList : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String jsonResult = "";
            jsonResult = File.ReadAllText(context.Server.MapPath("/WSSBSL/JSON/do_jdsds2012_Jdsds2012_loadJdsdsAList.json"));
            context.Response.ContentType = "application/json";
            context.Response.Write(jsonResult);
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