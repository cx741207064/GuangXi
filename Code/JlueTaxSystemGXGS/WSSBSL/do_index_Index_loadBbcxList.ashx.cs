using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using JlueTaxSystemGXGS.Code;
using Newtonsoft.Json.Linq;
using System.Text;
using Newtonsoft.Json;
using System.Web.SessionState;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// do_index_Index_loadBbcxList 的摘要说明
    /// </summary>
    public class do_index_Index_loadBbcxList : IHttpHandler,IReadOnlySessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            //String jsonResult = "";
            //jsonResult = File.ReadAllText(context.Server.MapPath("/WSSBSL/JSON/do_index_Index_loadBbcxList.json"));
            GTXResult userysbqc = GTXMethod.GetSCYSBQC();
            JArray jr = new JArray();
            if (userysbqc.IsSuccess)
            {
                StringBuilder reportidstr = new StringBuilder();
                List<GTXGXUserYSBQC> userysbqclist = JsonConvert.DeserializeObject<List<GTXGXUserYSBQC>>(userysbqc.Data.ToString());
                if (userysbqclist.Count > 0)
                {
                    foreach (GTXGXUserYSBQC item in userysbqclist)
                    {
                        reportidstr.Append(item.reportid.Replace("bbtb", "bbcx") + ",");
                    }
                    reportidstr.Remove(reportidstr.Length - 1, 1);
                }
                jr.Add("Y");
                jr.Add(reportidstr.ToString());
                context.Response.ContentType = "application/json";
                context.Response.Write(JsonConvert.SerializeObject(jr));
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