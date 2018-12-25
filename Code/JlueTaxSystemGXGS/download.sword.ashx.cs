using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace JlueTaxSystemGXGS
{
    /// <summary>
    /// download_sword 的摘要说明
    /// </summary>
    public class download_sword : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String jsonResult = "";
            context.Response.ContentType = "application/json";
            String ctrl = "";
            if (context.Request.QueryString["ctrl"] != null)
            {
                ctrl = context.Request.QueryString["ctrl"].Trim();
            }
            if (context.Request.Form["ctrl"] != null)
            {
                ctrl = context.Request.Form["ctrl"].Trim();
            }
            String uuid = "";
            if (context.Request.QueryString["uuid"] != null)
            {
                uuid = context.Request.QueryString["uuid"].Trim();
            }
            if (context.Request.Form["uuid"] != null)
            {
                uuid = context.Request.Form["uuid"].Trim();
            }
            String sqlxh = "";
            if (context.Request.QueryString["sqlxh"] != null)
            {
                sqlxh = context.Request.QueryString["sqlxh"].Trim();
            }
            if (context.Request.Form["sqlxh"] != null)
            {
                sqlxh = context.Request.Form["sqlxh"].Trim();
            }
            switch (ctrl)
            {
                case "CX301DzcxCtrl_getCombData":
                    jsonResult = File.ReadAllText(context.Server.MapPath("/json/download.sword_" + ctrl + uuid + ".json"));
                    context.Response.Write(jsonResult);
                    return;
                case "CX301DzcxCtrl_getCxdy":
                    jsonResult = File.ReadAllText(context.Server.MapPath("/json/download.sword_" + ctrl + sqlxh + ".json"));
                    context.Response.Write(jsonResult);
                    return;
                case "CX301DzcxCtrl_getDataTime":
                    jsonResult = File.ReadAllText(context.Server.MapPath("/json/download.sword_" + ctrl + sqlxh + ".json"));
                    context.Response.Write(jsonResult);
                    return;
                case "CX301DzcxCtrl_getResultColumns":
                    jsonResult = File.ReadAllText(context.Server.MapPath("/json/download.sword_" + ctrl + sqlxh + ".json"));
                    context.Response.Write(jsonResult);
                    return;
                case "CX301DzcxCtrl_executeQuery":
                    context.Response.ContentType = "text/xml";
                    jsonResult = File.ReadAllText(context.Server.MapPath("/json/download.sword_" + ctrl + sqlxh + ".json"));
                    context.Response.Write(jsonResult);
                    return;
                default:
                    jsonResult = File.ReadAllText(context.Server.MapPath("/json/download.sword_" + ctrl +".json"));
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