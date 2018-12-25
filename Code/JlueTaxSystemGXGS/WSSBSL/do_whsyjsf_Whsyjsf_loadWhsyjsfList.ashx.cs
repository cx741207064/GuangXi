using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// do_whsyjsf_Whsyjsf_loadWhsyjsfList 的摘要说明
    /// </summary>
    public class do_whsyjsf_Whsyjsf_loadWhsyjsfList : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String jsonResult = "";
            jsonResult = File.ReadAllText(context.Server.MapPath("/WSSBSL/JSON/do_whsyjsf_Whsyjsf_loadWhsyjsfList.json"));
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