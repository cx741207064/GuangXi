using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// ajax_sword_CacheCtrl_getAllVersion 的摘要说明
    /// </summary>
    public class ajax_sword_CacheCtrl_getAllVersion : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string jsonResult = "";
            jsonResult = File.ReadAllText(context.Server.MapPath("/WSSBSL/JSON/ajax.sword_CacheCtrl_getAllVersion.json"));
            
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