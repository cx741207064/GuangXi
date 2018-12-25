using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace JlueTaxSystemGXGS
{
    /// <summary>
    /// ajax_sword_StyleCtrl_loadStyle 的摘要说明
    /// </summary>
    public class ajax_sword_StyleCtrl_loadStyle : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String jsonResult = File.ReadAllText(context.Server.MapPath("/json/ajax.sword_StyleCtrl_loadStyle.json"));
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