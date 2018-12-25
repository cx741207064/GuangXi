using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Web.SessionState;
using JlueTaxSystemGXGS.Code;
using Newtonsoft.Json.Linq;
using System.Text;
using Newtonsoft.Json;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// do_index_Index_loadDqysbList 的摘要说明
    /// </summary>
    public class do_index_Index_loadDqysbList : IHttpHandler, IReadOnlySessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            GTXResult userysbqc = GTXMethod.GetSCYSBQC();
            JArray jr = new JArray();
            if (userysbqc.IsSuccess)
            {
                StringBuilder reportidstr = new StringBuilder();
                List<IndexUserysbqc> IndexUserysbqclist = new List<IndexUserysbqc>();
                List<GTXGXUserYSBQC> userysbqclist = JsonConvert.DeserializeObject<List<GTXGXUserYSBQC>>(userysbqc.Data.ToString());
                if (userysbqclist.Count > 0)
                {
                    foreach (GTXGXUserYSBQC item in userysbqclist)
                    {
                        IndexUserysbqc iu = new IndexUserysbqc();
                        iu.bbzldm = item.BZ;
                        iu.bbzlmc = item.TaskName;
                        iu.bz = "";
                        iu.jkqx = Convert.ToDateTime(item.SBQZ).ToString("yyyy-MM-dd");
                        iu.jkzt = "未缴款";
                        iu.sbfs = (item.SBZT == "已申报" ? "网上申报" : "");
                        iu.sbqx = Convert.ToDateTime(item.SBQZ).ToString("yyyy-MM-dd");
                        iu.sbrq = (item.SBZT == "已申报" ? Convert.ToDateTime(item.HappenDate).ToString("yyyy-MM-dd HH:mm") : "");
                        iu.sbzt = item.SBZT;
                        iu.ssqq = Convert.ToDateTime(item.SKSSQQ).ToString("yyyy-MM-dd");
                        iu.ssqz = Convert.ToDateTime(item.SKSSQZ).ToString("yyyy-MM-dd");
                        IndexUserysbqclist.Add(iu);
                    }
                }
                jr.Add("Y");
                jr.Add(JArray.Parse(JsonConvert.SerializeObject(IndexUserysbqclist)));
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