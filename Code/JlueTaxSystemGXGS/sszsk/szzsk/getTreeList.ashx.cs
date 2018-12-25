using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace JlueTaxSystemGXGS.sszsk.szzsk
{
    /// <summary>
    /// getTreeList 的摘要说明
    /// </summary>
    public class getTreeList : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String id = "";
            if (context.Request.QueryString["id"] != null)
            {
                id = context.Request.QueryString["id"].Trim();
            }
            if (context.Request.Form["id"] != null)
            {
                id = context.Request.Form["id"].Trim();
            }
            String jsonResult = File.ReadAllText(context.Server.MapPath("/sszsk/szzsk/json/getTreeList_"+id+".json"));
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