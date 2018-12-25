using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace JlueTaxSystemGXGS
{
    /// <summary>
    /// sword 的摘要说明
    /// </summary>
    public class sword : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            String aspx = "";
            String id = "";
            id = (context.Request.Params["id"] == null ? "" : context.Request.Params["id"].ToString());
            String sName = "";
            sName = (context.Request.Params["sName"] == null ? "" : context.Request.Params["sName"].ToString());
            String zlbsxlDm = "";
            zlbsxlDm = (context.Request.Params["zlbsxlDm"] == null ? "" : context.Request.Params["zlbsxlDm"].ToString());
            switch (sName)
            {
                case "SBGyCtrl_toCwbbSbfb":
                    //aspx = File.ReadAllText(context.Server.MapPath("sword_"+sName+"_"+zlbsxlDm+"_"+id+ ".aspx"));
                    //context.Response.ContentType = "text/html";
                    //context.Response.Write(aspx);
                    context.Response.Redirect("sword_" + sName + "_" + zlbsxlDm + "_" + id + ".aspx");
                    return;
                case "SB104xqykjzzcwbsCtrl_toSbfb":
                    //aspx = File.ReadAllText(context.Server.MapPath("sword_" + sName + "_" + id + ".aspx"));
                    //context.Response.ContentType = "text/html";
                    //context.Response.Write(aspx);
                    context.Response.Redirect("sword_" + sName + "_" + id + ".aspx");
                    return;
                default:
                    //aspx = File.ReadAllText(context.Server.MapPath("sword_SBGyCtrl_toCwbbSbfb" + id + ".aspx"));
                    //context.Response.ContentType = "text/html";
                    //context.Response.Write(aspx);
                    context.Response.Redirect("sword_SBGyCtrl_toCwbbSbfb" + id + ".aspx");
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