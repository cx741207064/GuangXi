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
    [RoutePrefix("hlwsb/fjs")]
    public class fjsController : ApiController
    {
        [Route("getSB_FJS_ZB.do")]
        public JObject POSTgetSB_FJS_ZB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            System.Threading.Thread.Sleep(500);
            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_FJS_ZB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_FJS_ZB_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                JArray data_body = (JArray)data_json["BODY"];
                JArray re_body = (JArray)re_json["data"]["BODY"];
                for (int i = 0; i < data_body.Count; i++)
                {
                    re_body[i]["COL01"] = data_body[i]["COL01"];
                    re_body[i]["COL02"] = data_body[i]["COL02"];
                    re_body[i]["COL03"] = data_body[i]["COL03"];
                    re_body[i]["COL04"] = data_body[i]["COL04"];
                    re_body[i]["COL05"] = data_body[i]["COL05"];
                    re_body[i]["COL06"] = data_body[i]["COL06"];
                    re_body[i]["COL07"] = data_body[i]["COL07"];
                    re_body[i]["COL08"] = data_body[i]["COL08"];
                    re_body[i]["COL09"] = data_body[i]["COL09"];
                    re_body[i]["COL10"] = data_body[i]["COL10"];
                    re_body[i]["COL11"] = data_body[i]["COL11"];
                    re_body[i]["COL12"] = data_body[i]["COL12"];
                    re_body[i]["COL13"] = data_body[i]["COL13"];
                    re_body[i]["XGMJZE"] = data_body[i]["XGMJZE"];
                }
            }

            getZZS_XSSR(ref re_json);

            GTXResult gr1 = GTXMethod.GetCompany();
            if (gr1.IsSuccess)
            {
                JObject jo = new JObject();
                jo = JsonConvert.DeserializeObject<JObject>(gr1.Data.ToString());
                if (jo.HasValues)
                {
                    re_json["data"]["HEAD"]["SSHY"] = JObject.Parse(System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("~/hlwsb/dm/getSb_DM_WITH.dm.getDM_SSHY.json")))["data"]["BODY"].Where(a => a["MC"].ToString() == jo["GBHY"].ToString()).ToList()[0]["DM"];
                }
            }
            string Name = System.Web.HttpContext.Current.Session["Name"].ToString();
            JToken industry = JToken.Parse(System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("~/industry.json")));
            industry = industry.Where(a => a["name"].ToString() == Name).ToList()[0];
            if (industry["value"].ToString()== "")
            {
                re_json["data"]["BODY"][0]["XGMYHZC"] = "Y";
            }

            return re_json;
        }

        [Route("insertSB_FJS_ZB.do")]
        public JObject insertSB_FJS_ZB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];
            string DATA = System.Web.HttpContext.Current.Request["DATA"];

            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("insertSB_FJS_ZB.json"));
            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_FJS_ZB_Public(input_json, SBBZL_DM);

            return re_json;
        }

        [Route("delSB_FJS_ZB.do")]
        public JObject delSB_FJS_ZB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_FJS_ZB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json);

            return re_json;
        }

        public JObject saveSB_FJS_ZB_Public(JObject DATA, string SBBZL_DM)
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
                        if (item.BDDM == "FJSSB")
                        {
                            id = item.Id.ToString();
                        }
                    }
                }
            }

            List<GTXNameValue> nameList = new List<GTXNameValue>();
            GTXNameValue nv = new GTXNameValue();
            nv.key = SBBZL_DM;
            byte[] bytes = Encoding.Default.GetBytes(JsonConvert.SerializeObject(DATA));
            string _result = Convert.ToBase64String(bytes);
            nv.value = _result;
            nameList.Add(nv);
            GTXResult saveresult = GTXMethod.SaveUserReportData(JsonConvert.SerializeObject(nameList), id, "");
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

        public JObject getSB_FJS_ZB_Public(ref JObject re_json, string SBBZL_DM)
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
                        if (item.BDDM == "FJSSB")
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

            JObject in_jo = (JObject)re_json["data"]["HEAD"];
            GTXResult gr1 = GTXMethod.GetCompany();
            if (gr1.IsSuccess)
            {
                JObject jo = new JObject();
                jo = JsonConvert.DeserializeObject<JObject>(gr1.Data.ToString());
                if (jo.HasValues)
                {
                    JObject data_jo = jo;
                    in_jo["NSRSBH"] = data_jo["NSRSBH"];
                    in_jo["LXFS"] = data_jo["LXDH"];
                }
            }

            JObject data_json = new JObject();
            GTXResult gr = GTXMethod.GetUserReportData(id, "");
            if (gr.IsSuccess)
            {
                JArray jarr = new JArray();
                jarr = JsonConvert.DeserializeObject<JArray>(gr.Data.ToString());
                IEnumerable<JToken> ejt = jarr.Where(a => a["dataKey"].ToString() == SBBZL_DM);
                if (ejt.Count() == 1)
                {
                    JObject jobj = (JObject)ejt.ElementAt(0);
                    byte[] bytes = Convert.FromBase64String(jobj["dataValue"].ToString().Replace(" ", "+"));
                    string dataValue = Encoding.Default.GetString(bytes);
                    data_json = JsonConvert.DeserializeObject<JObject>(dataValue);
                }
            }
            return data_json;
        }

        public void delSB_ZZS_YBNSR_Public(ref JObject re_json)
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
                        if (item.BDDM == "FJSSB")
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

            GTXResult gr = GTXMethod.DeleteUserReportData(id, "");
        }

        public void getZZS_XSSR(ref JObject re_json)
        {
            string id = "";
            GTXResult resultq = GTXMethod.GetGuangXiYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXGuangXiUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXGuangXiUserYSBQC>>(resultq.Data.ToString());
                if (ysbqclist.Count > 0)
                {
                    foreach (GDTXGuangXiUserYSBQC item in ysbqclist)
                    {
                        if (item.BDDM == "YBNSRZZS" || item.BDDM == "XGMZZS")
                        {
                            id = item.Id.ToString();
                        }
                    }
                }
            }

            GTXResult gr = GTXMethod.GetUserReportData(id, "101011034");
            if (gr.IsSuccess)
            {
                JArray jarr = new JArray();
                jarr = JsonConvert.DeserializeObject<JArray>(gr.Data.ToString());
                if (jarr.Count > 0)
                {
                    byte[] bytes = Convert.FromBase64String(jarr[0]["dataValue"].ToString().Replace(" ", "+"));
                    string dataValue = Encoding.Default.GetString(bytes);
                    JObject data_json = JsonConvert.DeserializeObject<JObject>(dataValue);
                    if (data_json.HasValues)
                    {
                        JArray data_body = (JArray)data_json["BODY"];
                        JArray re_DSLIST = (JArray)re_json["data"]["JCSJ"]["DSLIST"];

                        double XSSR = double.Parse(data_body[0]["COL09"].ToString()) + double.Parse(data_body[1]["COL09"].ToString()) + double.Parse(data_body[2]["COL09"].ToString()) + double.Parse(data_body[3]["COL09"].ToString()) + double.Parse(data_body[4]["COL09"].ToString()) + double.Parse(data_body[5]["COL09"].ToString());
                        re_DSLIST[0]["XSSR"] = new JValue(XSSR);
                        re_DSLIST[1]["XSSR"] = new JValue(XSSR);
                        re_DSLIST[2]["XSSR"] = new JValue(XSSR);

                    }
                }
            }

        }
    }
}