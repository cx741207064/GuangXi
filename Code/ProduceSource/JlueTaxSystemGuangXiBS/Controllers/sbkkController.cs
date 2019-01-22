using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using JlueTaxSystemGuangXiBS.Code;
using System.Text;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    [RoutePrefix("hlwsb/sbkk")]
    public class sbkkController : ApiController
    {
        [Route("checkSfzxx.do")]
        public JObject checkSfzxx()
        {
            JObject re_json = new JObject();

            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("checkSfzxx.json"));
            return_str = str;

            re_json = JsonConvert.DeserializeObject<JObject>(return_str);
            return re_json;
        }

        [Route("getNsrlx.do")]
        public JObject POSTgetNsrlx()
        {
            JArray ysbqc_ja = new JArray();

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getNsrlx.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            GTXResult resultq = GTXMethod.GetGuangXiYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXGuangXiUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXGuangXiUserYSBQC>>(resultq.Data.ToString());
                if (ysbqclist.Count > 0)
                {
                    ysbqclist = ysbqclist.Where(a => a.BDDM != "YHSSB").ToList();
                    foreach (GDTXGuangXiUserYSBQC i in ysbqclist)
                    {
                        JObject jo = new JObject();
                        jo["NSQX"] = "0";
                        jo["PREMONTH"] = "N";
                        jo["KKBZ"] = "Y";
                        jo["FJSBZ"] = "0";
                        jo["SKZLMC"] = "正税";
                        jo["ZSPM_MC"] = "";
                        jo["GDSLX"] = "1";
                        jo["SBJG_DM"] = "";
                        jo["NSRSBH"] = "";
                        jo["SSSQ_Z"] = i.SKSSQZ;
                        jo["NSRLX_MC"] = i.TaskName;
                        jo["SBXMMC"] = i.TaskName;
                        jo["ZSPM_DM"] = i.BDDM;
                        jo["NSRLX_DM"] = "XX";
                        jo["SBJG_MS"] = i.SBZT;
                        jo["SSSQ_Q"] = i.SKSSQQ;
                        jo["ISFKJC"] = "Y";
                        jo["KKJG_MS"] = "";
                        jo["NEXTMONTH"] = "N";
                        ysbqc_ja.Add(jo);
                    }
                    re_json["data"] = ysbqc_ja;

                }
            }

            return re_json;
        }

        [Route("getSbZt.do")]
        public JObject POSTgetSbZt()
        {
            JObject re_json = new JObject();

            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSbZt.json"));
            return_str = str;

            re_json = JsonConvert.DeserializeObject<JObject>(return_str);
            return re_json;
        }

        [Route("xgsj.do")]
        public JObject xgsj()
        {
            JObject re_json = new JObject();

            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("xgsj.json"));
            return_str = str;

            re_json = JsonConvert.DeserializeObject<JObject>(return_str);
            return re_json;
        }

        [Route("zfsbb.do")]
        public JObject zfsbb()
        {
            string ZSPM_DM = System.Web.HttpContext.Current.Request["ZSPM_DM"];

            JObject re_json = new JObject();

            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("zfsbb.json"));
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
                        if (item.BDDM == ZSPM_DM)
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

            return re_json;
        }

        [Route("tsxCheck.do")]
        public JObject tsxCheck()
        {
            string ZSPM_DM = System.Web.HttpContext.Current.Request["ZSPM_DM"];

            JObject re_json = new JObject();

            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("tsxCheck.json"));
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
                        if (item.BDDM == ZSPM_DM)
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

            return re_json;
        }

    }
}