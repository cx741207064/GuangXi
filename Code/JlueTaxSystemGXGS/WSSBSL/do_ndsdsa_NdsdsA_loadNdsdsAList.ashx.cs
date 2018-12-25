using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using JlueTaxSystemGXGS.Code;
using System.Text;
using System.Web.SessionState;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// do_ndsdsa_NdsdsA_loadNdsdsAList 的摘要说明
    /// </summary>
    public class do_ndsdsa_NdsdsA_loadNdsdsAList : IHttpHandler, IReadOnlySessionState
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
                        if (item.reportid == "bbtb_ndsds_a"
                            && Convert.ToDateTime(item.SKSSQQ).Year >= int.Parse(sssq_q)
                            && Convert.ToDateTime(item.SKSSQZ).Year <= int.Parse(sssq_z)
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