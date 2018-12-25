using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// reportServlet1 的摘要说明
    /// </summary>
    public class reportServlet1 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String jsonResult = "";
            String action = "";
            if (context.Request.QueryString["action"] != null)
            {
                action = context.Request.QueryString["action"].Trim();
            }
            if (context.Request.Form["action"] != null)
            {
                action = context.Request.Form["action"].Trim();
            }
            switch (action)
            {
                case "0":
                    jsonResult = File.ReadAllText(context.Server.MapPath("/WSSBSL/NetworkData.json"));
                    context.Response.Write(jsonResult);
                    return;
            }
                    
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