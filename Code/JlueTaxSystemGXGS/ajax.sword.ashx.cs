using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Data;
using System.Web.Script.Serialization;
using System.Collections;
using Newtonsoft.Json.Linq;
using JlueTaxSystemGXGS.Code;
using System.Web.SessionState;

namespace JlueTaxSystemGXGS
{
    /// <summary>
    /// ajax_sword 的摘要说明
    /// </summary>
    public class ajax_sword : IHttpHandler,IReadOnlySessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/json";
            string jsonResult = "";
            string sName = "";
            string postData = "";
            string zlbsxlDm = "";

            sName = (context.Request.Params["sName"] == null ? "" : context.Request.Params["sName"].ToString());

            switch (sName)
            {
                case "SB057SbcwgzCtrl_queryKgzSb":
                    jsonResult = File.ReadAllText(context.Server.MapPath("/json/ajax.sword_" + sName + ".json"));
                    context.Response.Write(jsonResult);
                    return;
                case "CacheCtrl_batchGetCacheData":
                    jsonResult = File.ReadAllText(context.Server.MapPath("/json/ajax.sword_" + sName + ".json"));
                    context.Response.Write(jsonResult);
                    return;
                case "SB151zlbsslCtrl_getZlbsbdlb":
                    postData = (context.Request.Params["postData"] == null ? "" : context.Request.Params["postData"].ToString());
                    if (postData != "")
                    {
                        JObject tempo = JObject.Parse(postData);
                        JArray jlistdata = JArray.Parse(tempo["data"].ToString());
                        JObject jlistchild = JObject.Parse(jlistdata[0].ToString());
                        JObject data = JObject.Parse(jlistchild["data"].ToString());
                        JObject datazlbsxlDm = JObject.Parse(data["zlbsxlDm"].ToString());
                        zlbsxlDm = (datazlbsxlDm["value"] == null ? "" : datazlbsxlDm["value"].ToString());
                    }
                    jsonResult = File.ReadAllText(context.Server.MapPath("/json/ajax.sword_" + sName + zlbsxlDm + ".json"));
                    context.Response.Write(jsonResult);
                    return;
                case "SB151zlbsslCtrl_save":
                    postData = (context.Request.Params["postData"]==null?"":context.Request.Params["postData"].ToString());
                    if (postData!="")
                    {
                        JObject tempo = JObject.Parse(postData);
                        JArray jlistdata = JArray.Parse(tempo["data"].ToString());
                        JObject jlistchild = JObject.Parse(jlistdata[5].ToString());
                        JObject data = JObject.Parse(jlistchild["data"].ToString());
                        JObject datazlbsxlDm = JObject.Parse(data["zlbsxlDm"].ToString());
                        zlbsxlDm = (jlistchild["value"] == null ? "" : jlistchild["value"].ToString());
                    }
                    jsonResult = File.ReadAllText(context.Server.MapPath("/json/ajax.sword_" + sName + zlbsxlDm + ".json"));
                    context.Response.Write(jsonResult);
                    return;
                case "GY002CommonCtrl_queryNsrxxByNsrsbh":
                    jsonResult = File.ReadAllText(context.Server.MapPath("/json/ajax.sword_" + sName + ".json"))
                        .Replace("@@nsrsbh", CurrentUser.GetInstance().GetCurrentCompanyNSRSBH)
                        .Replace("@@nsrmc", CurrentUser.GetInstance().GetCurrentCompanyName);
                    context.Response.Write(jsonResult);
                    return;
                default:
                    jsonResult = File.ReadAllText(context.Server.MapPath("/json/ajax.sword_" + sName + ".json"));
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