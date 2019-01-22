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
    [RoutePrefix("hlwsb/cwbb/xqy")]
    public class xqyController : ApiController
    {
        public string BDDM = "CWBB_YJD";

        [Route("getSB_CWBB_XQY_ZCFZB.do")]
        public JObject POSTgetSB_CWBB_XQY_ZCFZB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_CWBB_XQY_ZCFZB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_CWBB_XQY_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                re_json["data"]["BODY"] = data_json["BODY"];
            }

            return re_json;
        }

        [Route("insertSB_CWBB_XQY_ZCFZB.do")]
        public JObject insertSB_CWBB_XQY_ZCFZB()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_CWBB_XQY_Public(input_json, SBBZL_DM);

            return re_json;
        }

        [Route("updateSB_CWBB_XQY_ZCFZB.do")]
        public JObject updateSB_CWBB_XQY_ZCFZB()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_CWBB_XQY_Public(input_json, SBBZL_DM);

            return re_json;
        }

        [Route("delSB_CWBB_XQY_ZCFZB.do")]
        public JObject delSB_CWBB_XQY_ZCFZB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_CWBB_XQY_ZCFZB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_CWBB_XQY_Public(ref re_json, SBBZL_DM);

            return re_json;
        }

        [Route("getSB_CWBB_XQY_LRB_YB.do")]
        public JObject POSTgetSB_CWBB_XQY_LRB_YB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_CWBB_XQY_LRB_YB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_CWBB_XQY_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                re_json["data"]["BODY"] = data_json["BODY"];
            }

            return re_json;
        }

        [Route("insertSB_CWBB_XQY_LRB_YB.do")]
        public JObject insertSB_CWBB_XQY_LRB_YB()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_CWBB_XQY_Public(input_json, SBBZL_DM);

            return re_json;
        }

        [Route("updateSB_CWBB_XQY_LRB_YB.do")]
        public JObject updateSB_CWBB_XQY_LRB_YB()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_CWBB_XQY_Public(input_json, SBBZL_DM);

            return re_json;
        }

        [Route("delSB_CWBB_XQY_LRB_YB.do")]
        public JObject delSB_CWBB_XQY_LRB_YB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_CWBB_XQY_LRB_YB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_CWBB_XQY_Public(ref re_json, SBBZL_DM);

            return re_json;
        }

        [Route("getSB_CWBB_XQY_XJLLB_YB.do")]
        public JObject POSTgetSB_CWBB_XQY_XJLLB_YB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_CWBB_XQY_XJLLB_YB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_CWBB_XQY_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                re_json["data"]["BODY"] = data_json["BODY"];
            }

            return re_json;
        }

        [Route("insertSB_CWBB_XQY_XJLLB_YB.do")]
        public JObject insertSB_CWBB_XQY_XJLLB_YB()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_CWBB_XQY_Public(input_json, SBBZL_DM);

            return re_json;
        }

        [Route("updateSB_CWBB_XQY_XJLLB_YB.do")]
        public JObject updateSB_CWBB_XQY_XJLLB_YB()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_CWBB_XQY_Public(input_json, SBBZL_DM);

            return re_json;
        }

        [Route("delSB_CWBB_XQY_XJLLB_YB.do")]
        public JObject delSB_CWBB_XQY_XJLLB_YB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_CWBB_XQY_XJLLB_YB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_CWBB_XQY_Public(ref re_json, SBBZL_DM);

            return re_json;
        }

        public JObject saveSB_CWBB_XQY_Public(JObject DATA, string SBBZL_DM)
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
                        if (item.BDDM == BDDM)
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

        public JObject getSB_CWBB_XQY_Public(ref JObject re_json, string SBBZL_DM)
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
                        if (item.BDDM == BDDM)
                        {
                            id = item.Id.ToString();
                            tbrq = item.HappenDate;
                            rqQ = item.SKSSQQ;
                            rqZ = item.SKSSQZ;
                        }
                    }
                }
            }

            re_json["data"]["SSSQ_Q"] = new JValue(rqQ);
            re_json["data"]["SSSQ_Z"] = new JValue(rqZ);

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

        public void delSB_CWBB_XQY_Public(ref JObject re_json, string SBBZL_DM)
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
                        if (item.BDDM == BDDM)
                        {
                            id = item.Id.ToString();
                            tbrq = item.HappenDate;
                            rqQ = item.SKSSQQ;
                            rqZ = item.SKSSQZ;
                        }
                    }
                }
            }

            re_json["data"]["SSSQ_Q"] = new JValue(rqQ);
            re_json["data"]["SSSQ_Z"] = new JValue(rqZ);

            GTXResult gr = GTXMethod.DeleteUserReportData(id, SBBZL_DM);
        }

    }
}
