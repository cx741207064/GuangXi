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
    public class sbkkController : Controller
    {
        public void checkSfzxx()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("checkSfzxx.json"));
            return_str = str;
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

        public void getNsrlx()
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("getNsrlx.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            GTXResult resultq = GTXMethod.GetGuangXiYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXGuangXiUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXGuangXiUserYSBQC>>(resultq.Data.ToString());
                if (ysbqclist.Count > 0)
                {
                    GDTXGuangXiUserYSBQC YSBQC_FJS = ysbqclist.Where(item => item.BDDM == "FJSSB").ElementAt(0);
                    GDTXGuangXiUserYSBQC YSBQC_YBNSRZZS = ysbqclist.Where(item => item.BDDM == "YBNSRZZS").ElementAt(0);

                    re_json["data"][0]["SBJG_MS"] = YSBQC_FJS.SBZT;
                    re_json["data"][0]["SSSQ_Q"] = YSBQC_FJS.SKSSQQ;
                    re_json["data"][0]["SSSQ_Z"] = YSBQC_FJS.SKSSQZ;

                    re_json["data"][1]["SBJG_MS"] = YSBQC_YBNSRZZS.SBZT;
                    re_json["data"][1]["SSSQ_Q"] = YSBQC_YBNSRZZS.SKSSQQ;
                    re_json["data"][1]["SSSQ_Z"] = YSBQC_YBNSRZZS.SKSSQZ;

                }
            }

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void getSbZt()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSbZt.json"));
            return_str = str;
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

        public void xgsj()
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("xgsj.json"));
            return_str = str;
            Response.ContentType = "application/json";
            Response.Write(return_str);
        }

        public void zfsbb(string NSRLX_DM)
        {
            JObject re_json = new JObject();
            string BDDM = "";

            if (NSRLX_DM == "101010102")
            {
                BDDM = "YBNSRZZS";
            }
            else if (NSRLX_DM == "101010109")
            {
                BDDM = "FJSSB";
            }

            string str = System.IO.File.ReadAllText(Server.MapPath("zfsbb.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            string id = "";
            GTXResult resultq = GTXMethod.GetGuangXiYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXGuangXiUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXGuangXiUserYSBQC>>(resultq.Data.ToString());
                if (ysbqclist.Count > 0)
                {
                    foreach (GDTXGuangXiUserYSBQC item in ysbqclist)
                    {
                        if (item.BDDM == BDDM)
                        {
                            id = item.Id.ToString();
                        }
                    }
                }
            }

            GTXResult upresult = GTXMethod.UpdateYSBQC(id, "未申报");
            if (upresult.IsSuccess)
            {
                GTXMethod.DeleteUserReportData(id, "");
                re_json["code"] = "4";
                re_json["msg"] = "作废成功";
            }
            else
            {
                re_json["code"] = "-1";
                re_json["msg"] = upresult.Message;
            }

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void tsxCheck(string NSRLX_DM)
        {
            JObject re_json = new JObject();
            string BDDM = "";

            if (NSRLX_DM == "101010102")
            {
                BDDM = "YBNSRZZS";
            }
            else if (NSRLX_DM == "101010109")
            {
                BDDM = "FJSSB";
            }

            string str = System.IO.File.ReadAllText(Server.MapPath("tsxCheck.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            string id = "";
            GTXResult resultq = GTXMethod.GetGuangXiYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXGuangXiUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXGuangXiUserYSBQC>>(resultq.Data.ToString());
                if (ysbqclist.Count > 0)
                {
                    foreach (GDTXGuangXiUserYSBQC item in ysbqclist)
                    {
                        if (item.BDDM == BDDM)
                        {
                            id = item.Id.ToString();
                        }
                    }
                }
            }

            GTXResult upresult = GTXMethod.UpdateYSBQC(id, "已申报");
            if (upresult.IsSuccess)
            {
                re_json["code"] = "1";
            }
            else
            {
                re_json["code"] = "-1";
                re_json["msg"] = upresult.Message;
            }

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

    }
}