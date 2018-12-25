using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using JlueTaxSystemGXGS.Code;
using System.Web.SessionState;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// do_index_Index_loadIndexNsrxx 的摘要说明
    /// </summary>
    public class do_index_Index_loadIndexNsrxx : IHttpHandler, IReadOnlySessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            string jsonResult = "";
            jsonResult = File.ReadAllText(context.Server.MapPath("/WSSBSL/JSON/do_index_Index_loadIndexNsrxx.json"))
                .Replace("@@NSRMC", CurrentUser.GetInstance().GetCurrentCompanyName)
                .Replace("@@NSRSBH", CurrentUser.GetInstance().GetCurrentCompanyNSRSBH);
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