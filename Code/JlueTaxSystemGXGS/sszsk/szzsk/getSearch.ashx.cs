using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace JlueTaxSystemGXGS.sszsk.szzsk
{
    /// <summary>
    /// getSearch 的摘要说明
    /// </summary>
    public class getSearch : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String jsonResult = File.ReadAllText(context.Server.MapPath("/sszsk/szzsk/json/getSearch.json"));
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