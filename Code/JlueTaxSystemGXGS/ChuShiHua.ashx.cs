using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JlueTaxSystemGXGS
{
    /// <summary>
    /// ChuShiHua 的摘要说明
    /// </summary>
    public class ChuShiHua : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string method = context.Request.QueryString["Method"].ToString();
            string ClassId = context.Request.QueryString["ClassId"].ToString();
            string userId = context.Request.QueryString["userId"].ToString();
            string SortId = context.Request.QueryString["SortId"].ToString();
            string res = "";
            try
            {
                if (method == "Clear")
                {
                    //国地税题目                
                    publicmethod p = new publicmethod();
                    string path = System.Web.Configuration.WebConfigurationManager.AppSettings["Practicepath"] + "/APIPractice/Chongzuo.asmx/GetGXData?UserId=" + userId + "&ClassId=" + ClassId + "&SortId=" + SortId;
                    string resut = p.HttpGetFunction(path);
                    string billpath = System.Web.Configuration.WebConfigurationManager.AppSettings["tikupath"] + "/GTX/GTXGXUserYSBQC/RedoAllQuestionsGX";
                    res = p.HttpPost(billpath, string.Format("jsonData={0}", resut));
                }
            }
            catch
            {

            }
            context.Response.Clear();
            context.Response.ContentType = "text/html";
            context.Response.Write(res);
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