using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using JlueTaxSystemGuangXiBS.Code;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    [RoutePrefix("hlwsb/zzs/xgm")]
    public class xgmController : ApiController
    {
        [Route("getSB_ZZS_XGMNSR_CZZS.do")]
        public JObject POSTgetSB_ZZS_XGMNSR_CZZS()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_ZZS_XGMNSR_CZZS.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_ZZS_XGMNSR_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                JArray data_body = (JArray)data_json["BODY"];
                JArray re_body = (JArray)re_json["data"]["BODY"];
                for (int i = 0; i < data_body.Count; i++)
                {
                    re_body[i]["BQS_YSHWJLW"] = data_body[i]["BQS_YSHWJLW"];
                    re_body[i]["BQS_YSFW"] = data_body[i]["BQS_YSFW"];
                }
            }

            return re_json;
        }

        [Route("insertSB_ZZS_XGMNSR_CZZS.do")]
        public JObject insertSB_ZZS_XGMNSR_CZZS()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_XGMNSR_Public(input_json, SBBZL_DM);

            return re_json;
        }

        [Route("updateSB_ZZS_XGMNSR_CZZS.do")]
        public JObject updateSB_ZZS_XGMNSR_CZZS()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_XGMNSR_Public(input_json, SBBZL_DM);

            return re_json;
        }

        [Route("delSB_ZZS_XGMNSR_CZZS.do")]
        public JObject delSB_ZZS_XGMNSR_CZZS()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_ZZS_XGMNSR_CZZS.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_XGMNSR_Public(ref re_json, SBBZL_DM);

            return re_json;
        }

        [Route("getSB_ZZS_XGMNSR_CZZS_FB1_2016.do")]
        public JObject POSTgetSB_ZZS_XGMNSR_CZZS_FB1_2016()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_ZZS_XGMNSR_CZZS_FB1_2016.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_ZZS_XGMNSR_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                re_json["data"]["BODY"] = data_json["BODY"];
            }

            re_json["data"]["YMKZ"]["YGZNSRLX_DM"] = "20";
            return re_json;
        }

        [Route("insertSB_ZZS_XGMNSR_CZZS_FB1_2016.do")]
        public JObject insertSB_ZZS_XGMNSR_CZZS_FB1_2016()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_XGMNSR_Public(input_json, SBBZL_DM);

            return re_json;
        }

        [Route("delSB_ZZS_XGMNSR_CZZS_FB1_2016.do")]
        public JObject delSB_ZZS_XGMNSR_CZZS_FB1_2016()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_ZZS_XGMNSR_CZZS_FB1_2016.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_XGMNSR_Public(ref re_json, SBBZL_DM);

            re_json["data"]["YMKZ"]["YGZNSRLX_DM"] = "20";
            return re_json;
        }

        [Route("getSB_ZZS_XGMNSR_CZZS_JMSMXB.do")]
        public JObject POSTgetSB_ZZS_XGMNSR_CZZS_JMSMXB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_ZZS_XGMNSR_CZZS_JMSMXB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_ZZS_XGMNSR_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                re_json["data"]["BODY"] = data_json["BODY"];
            }

            return re_json;
        }

        [Route("insertSB_ZZS_XGMNSR_CZZS_JMSMXB.do")]
        public JObject insertSB_ZZS_XGMNSR_CZZS_JMSMXB()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_XGMNSR_Public(input_json, SBBZL_DM);

            return re_json;
        }

        [Route("delSB_ZZS_XGMNSR_CZZS_JMSMXB.do")]
        public JObject delSB_ZZS_XGMNSR_CZZS_JMSMXB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_ZZS_XGMNSR_CZZS_JMSMXB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_XGMNSR_Public(ref re_json, SBBZL_DM);

            return re_json;
        }

        public JObject saveSB_ZZS_XGMNSR_Public(JObject DATA, string SBBZL_DM)
        {
            JObject return_j = new JObject();

            string id = "";
            GTXResult resultq = GTXMethod.GetGuangXiYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXGuangXiUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXGuangXiUserYSBQC>>(resultq.Data.ToString());
                if (ysbqclist.Count > 0)
                {
                    foreach (GDTXGuangXiUserYSBQC item in ysbqclist)
                    {
                        if (item.BDDM == "XGMZZS")
                        {
                            id = item.Id.ToString();
                        }
                    }
                }
            }

            List<GTXNameValue> nameList = new List<GTXNameValue>();
            GTXNameValue nv = new GTXNameValue();
            nv.key = "data";
            byte[] bytes = System.Text.Encoding.Default.GetBytes(JsonConvert.SerializeObject(DATA));
            string _result = Convert.ToBase64String(bytes);
            nv.value = _result;
            nameList.Add(nv);
            GTXResult saveresult = GTXMethod.SaveUserReportData(JsonConvert.SerializeObject(nameList), id, SBBZL_DM);
            if (saveresult.IsSuccess)
            {
                return_j["code"] = "1";
                return_j["msg"] = "操作成功";
            }
            else
            {
                return_j["code"] = "-1";
                return_j["msg"] = "操作失败";
            }
            return return_j;
        }

        public JObject getSB_ZZS_XGMNSR_Public(ref JObject re_json, string SBBZL_DM)
        {
            string id = "";
            string tbrq = "";
            string rqQ = "";
            string rqZ = "";

            GTXResult resultq = GTXMethod.GetGuangXiYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXGuangXiUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXGuangXiUserYSBQC>>(resultq.Data.ToString());
                if (ysbqclist.Count > 0)
                {
                    foreach (GDTXGuangXiUserYSBQC item in ysbqclist)
                    {
                        if (item.BDDM == "XGMZZS")
                        {
                            id = item.Id.ToString();
                            tbrq = item.HappenDate;
                            rqQ = item.SKSSQQ;
                            rqZ = item.SKSSQZ;
                        }
                    }
                }
            }

            re_json["data"]["HEAD"]["TBRQ"] = new JValue(tbrq);
            re_json["data"]["HEAD"]["SSSQ_Q"] = new JValue(rqQ);
            re_json["data"]["HEAD"]["SSSQ_Z"] = new JValue(rqZ);

            JObject data_json = new JObject();
            GTXResult gr = GTXMethod.GetUserReportData(id, SBBZL_DM);
            if (gr.IsSuccess)
            {
                JArray jarr = new JArray();
                jarr = JsonConvert.DeserializeObject<JArray>(gr.Data.ToString());
                if (jarr.Count > 0)
                {
                    byte[] bytes = Convert.FromBase64String(jarr[0]["dataValue"].ToString().Replace(" ", "+"));
                    string dataValue = System.Text.Encoding.Default.GetString(bytes);
                    data_json = JsonConvert.DeserializeObject<JObject>(dataValue);
                }
            }
            return data_json;
        }

        public void delSB_ZZS_XGMNSR_Public(ref JObject re_json, string SBBZL_DM)
        {
            string id = "";
            string tbrq = "";
            string rqQ = "";
            string rqZ = "";

            GTXResult resultq = GTXMethod.GetGuangXiYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXGuangXiUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXGuangXiUserYSBQC>>(resultq.Data.ToString());
                if (ysbqclist.Count > 0)
                {
                    foreach (GDTXGuangXiUserYSBQC item in ysbqclist)
                    {
                        if (item.BDDM == "XGMZZS")
                        {
                            id = item.Id.ToString();
                            tbrq = item.HappenDate;
                            rqQ = item.SKSSQQ;
                            rqZ = item.SKSSQZ;
                        }
                    }
                }
            }

            re_json["data"]["HEAD"]["TBRQ"] = new JValue(tbrq);
            re_json["data"]["HEAD"]["SSSQ_Q"] = new JValue(rqQ);
            re_json["data"]["HEAD"]["SSSQ_Z"] = new JValue(rqZ);

            GTXResult gr = GTXMethod.DeleteUserReportData(id, SBBZL_DM);
        }

    }
}
