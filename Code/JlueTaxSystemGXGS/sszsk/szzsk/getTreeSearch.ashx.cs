using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace JlueTaxSystemGXGS.sszsk.szzsk
{
    /// <summary>
    /// getTreeSearch 的摘要说明
    /// </summary>
    public class getTreeSearch : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String zltype = "";
            if (context.Request.QueryString["zltype"] != null)
            {
                zltype = context.Request.QueryString["zltype"].Trim();
            }
            if (context.Request.Form["zltype"] != null)
            {
                zltype = context.Request.Form["zltype"].Trim();
            }
            String jsonResult = File.ReadAllText(context.Server.MapPath("/sszsk/szzsk/json/getTreeSearch_" + zltype + ".json"));
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