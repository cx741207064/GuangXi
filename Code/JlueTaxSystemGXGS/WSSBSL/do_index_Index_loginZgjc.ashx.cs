using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// do_index_Index_loginZgjc 的摘要说明
    /// </summary>
    public class do_index_Index_loginZgjc : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string jsonResult = "";
            jsonResult = File.ReadAllText(context.Server.MapPath("/WSSBSL/JSON/do_index_Index_loginZgjc.json"));
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