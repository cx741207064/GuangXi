using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using Newtonsoft.Json.Linq;

namespace JlueTaxSystemGXGS
{
    /// <summary>
    /// form_sword 的摘要说明
    /// </summary>
    public class form_sword : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String sName = "";
            String postData = "";
            String zlbsxlDm = "";
            String file = "";
            sName = (context.Request.Params["sName"] == null ? "" : context.Request.Params["sName"].ToString());
            switch (sName)
            {
                case "SB151zlbsslCtrl_initBd":
                    postData = (context.Request.Params["postData"] == null ? "" : context.Request.Params["postData"].ToString());
                    if (postData != "")
                    {
                        JObject tempo = JObject.Parse(postData);
                        JArray jlistdata = JArray.Parse(tempo["data"].ToString());
                        JObject jlistchild = JObject.Parse(jlistdata[2].ToString());
                        
                        zlbsxlDm = (jlistchild["value"] == null ? "" : jlistchild["value"].ToString());
                    }
                    //file = File.ReadAllText(context.Server.MapPath("form.sword_" + sName + zlbsxlDm + ".aspx"));
                    //context.Response.ContentType = "text/html";
                    //context.Response.Write(file);
                    context.Response.Redirect("form.sword_" + sName + zlbsxlDm + ".aspx");
                    return;
                default:
                    //file = File.ReadAllText(context.Server.MapPath("form.sword_" + sName + ".aspx"));
                    //context.Response.ContentType = "text/html";
                    //context.Response.Write(file);
                    context.Response.Redirect("form.sword_" + sName + ".aspx");
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