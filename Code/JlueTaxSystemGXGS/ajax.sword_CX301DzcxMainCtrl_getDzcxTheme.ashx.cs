using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO; 

namespace JlueTaxSystemGXGS
{
    /// <summary>
    /// ajax_sword_CX301DzcxMainCtrl_getDzcxTheme 的摘要说明
    /// </summary>
    public class ajax_sword_CX301DzcxMainCtrl_getDzcxTheme : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String jsonResult = File.ReadAllText(context.Server.MapPath("/json/ajax.sword_CX301DzcxMainCtrl_getDzcxTheme.json"));
            context.Response.ContentType = "text/json";
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