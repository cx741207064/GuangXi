using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// do_jhhg_Jhhg_doJhhgJhjgmxBsyfCx 的摘要说明
    /// </summary>
    public class do_jhhg_Jhhg_doJhhgJhjgmxBsyfCx : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String jsonResult = File.ReadAllText(context.Server.MapPath("/WSSBSL/JSON/do_jhhg_Jhhg_doJhhgJhjgmxBsyfCx.json"));
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