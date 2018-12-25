using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// do_sljsjj_Sljsjj_loadSljsjjBcsbInit 的摘要说明
    /// </summary>
    public class do_sljsjj_Sljsjj_loadSljsjjBcsbInit : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "application/json";
            String jsonResult = "";
            String xhid = "";
            if (context.Request.QueryString["xhid"] != null)
            {
                xhid = context.Request.QueryString["xhid"].Trim();
                jsonResult = File.ReadAllText(context.Server.MapPath("/WSSBSL/JSON/do_sljsjj_Sljsjj_loadSljsjjBcsbInit_" + xhid + ".json"));
                context.Response.Write(jsonResult);
                return;
            }
            if (context.Request.Form["xhid"] != null)
            {
                xhid = context.Request.Form["xhid"].Trim();
                jsonResult = File.ReadAllText(context.Server.MapPath("/WSSBSL/JSON/do_sljsjj_Sljsjj_loadSljsjjBcsbInit_" + xhid + ".json"));
                context.Response.Write(jsonResult);
                return;
            }
            jsonResult = File.ReadAllText(context.Server.MapPath("/WSSBSL/JSON/do_sljsjj_Sljsjj_loadSljsjjBcsbInit.json"));
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