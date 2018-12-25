using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Web.SessionState;
using JlueTaxSystemGXGS.Code;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// do_zzs2013_Zzs2013_loadYbnsrList 的摘要说明
    /// </summary>
    public class do_zzs2013_Zzs2013_loadYbnsrList : IHttpHandler, IReadOnlySessionState
    {

        public void ProcessRequest(HttpContext context)
        {

            string sssq_q = context.Request.Params["cxsjQ"].ToString();
            string sssq_z = context.Request.Params["cxsjZ"].ToString();
            GTXResult userysbqc = GTXMethod.GetSCYSBQC();
            JArray jr = new JArray();
            if (userysbqc.IsSuccess)
            {
                StringBuilder reportidstr = new StringBuilder();
                List<GTXGXUserYSBQC> userysbqclist = JsonConvert.DeserializeObject<List<GTXGXUserYSBQC>>(userysbqc.Data.ToString());
                List<CxUserysbqc> cxqclist = new List<CxUserysbqc>();
                if (userysbqclist.Count > 0)
                {
                    foreach (GTXGXUserYSBQC item in userysbqclist)
                    {
                        if (item.reportid == "bbtb_zzsYbnsr"
                            && (DateTime.Compare(Convert.ToDateTime(item.SKSSQQ.Substring(0,7)), Convert.ToDateTime(sssq_q)) >= 0)
                            && (DateTime.Compare(Convert.ToDateTime(sssq_z), Convert.ToDateTime(item.SKSSQZ.Substring(0, 7))) >= 0)
                            && item.SBZT == "已申报")
                        {
                            CxUserysbqc cxqc = new CxUserysbqc();
                            cxqc.userYSBQCId = item.Id.ToString();
                            cxqc.YSBQCId = item.YSBQCId;
                            cxqc.HappenDate = Convert.ToDateTime(item.HappenDate).ToString("yyyy-MM-dd HH:mm");
                            cxqc.bbzlmc = item.TaskName;
                            cxqc.bz = "申报成功";
                            cxqc.dataFromBz = "0";
                            cxqc.fjs = "";
                            cxqc.pzxh = "10014517000033386709";
                            cxqc.sblx = "正常申报";
                            cxqc.sbrq = Convert.ToDateTime(item.HappenDate).ToString("yyyy-MM-dd HH:mm");
                            cxqc.sbuuid = "F0A486ECC12ABC478BE0031BF355F0AD";
                            cxqc.sbzt = "申报成功";
                            cxqc.ssqq = Convert.ToDateTime(item.SBQQ).ToString("yyyy-MM-dd");
                            cxqc.ssqz = Convert.ToDateTime(item.SBQZ).ToString("yyyy-MM-dd");
                            cxqc.tbqk = item.tbqk;
                            cxqclist.Add(cxqc);
                        }
                    }
                }
                jr.Add("Y");
                jr.Add(JArray.Parse(JsonConvert.SerializeObject(cxqclist)));
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