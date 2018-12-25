using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using JlueTaxSystemGuangXiBS.Code;
using System.Text;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    public class cxdyController : Controller
    {
        public void getSB_SBJG()
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_SBJG.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            JArray RESULT = new JArray();

            GTXResult resultq = GTXMethod.GetGuangXiYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXGuangXiUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXGuangXiUserYSBQC>>(resultq.Data.ToString());
                ysbqclist = ysbqclist.Where(a => a.SBZT == "已申报").ToList();
                for (int i = 0; i < ysbqclist.Count; i++)
                {
                    JObject RESULT_JO = new JObject();

                    RESULT_JO["SBRQ"] = ysbqclist[i].HappenDate;
                    RESULT_JO["YZPZXH"] = "0";
                    RESULT_JO["SSSQ_Z"] = ysbqclist[i].SKSSQZ;
                    RESULT_JO["SBXMMC"] = ysbqclist[i].TaskName;
                    RESULT_JO["NSRLX_DM"] = "";
                    RESULT_JO["ROWNO"] = i + 1;
                    RESULT_JO["SSSQ_Q"] = ysbqclist[i].SKSSQQ;
                    RESULT_JO["SBJG_MS"] = "申报成功";
                    RESULT_JO["SJLY"] = "JS";

                    RESULT.Add(RESULT_JO);
                }
            }
            re_json["data"]["RESULT"] = RESULT;

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

    }
}