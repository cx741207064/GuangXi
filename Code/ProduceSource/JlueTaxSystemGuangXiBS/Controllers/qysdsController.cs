using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using JlueTaxSystemGuangXiBS.Code;
using System.IO;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    [RoutePrefix("hlwsb/qysds")]
    public class qysdsController : ApiController
    {
        public string BDDM = "QYSDS_YJD";

        [Route("getSB_QYSDS_JM_YJ_A_2015.do")]
        public JObject POSTgetSB_QYSDS_JM_YJ_A_2015()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_QYSDS_JM_YJ_A_2015.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getQYSDS_JM_YJ_A_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                JArray data_body = (JArray)data_json["BODY"];
                JArray re_body = (JArray)re_json["data"]["BODY"];
                for (int i = 0; i < data_body.Count; i++)
                {
                    re_body[i]["LJJE"] = data_body[i]["LJJE"];
                }

                JObject re_head = (JObject)re_json["data"]["HEAD"];
                JObject data_head = (JObject)data_json["HEAD"];

                re_head["QMCYRS"] = data_head["QMCYRS"];
                re_head["SFSYXXWL"] = (string)(data_head["SFSYXXWL"]);
                re_head["KJXZXQY"] = (string)(data_head["KJXZXQY"]);
                re_head["GXJSQY"] = (string)(data_head["GXJSQY"]);
                re_head["JSRG"] = (string)(data_head["JSRG"]);

            }

            using (StreamReader file = File.OpenText(System.Web.HttpContext.Current.Server.MapPath(@"SBBZL_DM.json")))
            {
                JsonTextReader reader = new JsonTextReader(file);
                JObject jo = (JObject)JToken.ReadFrom(reader);
                data_json = getQYSDS_JM_YJ_A_Public(jo["QYSDS_JM_YJ_A_FB1"].ToString());
                if (data_json.HasValues)
                {
                    JObject FB1_41 = JObject.FromObject(data_json["BODY"].Where(a => a["HC"].ToString() == "41").ToList()[0]);
                    //re_json["data"]["BODY"][5] = decimal.Parse(jo41["LJJE"].ToString());
                    re_json.SelectToken("$..BODY[?(@.HC == '6')]")["LJJE"] = new JValue(decimal.Parse(FB1_41["LJJE"].ToString()));
                }

                data_json = getQYSDS_JM_YJ_A_Public(jo["QYSDS_JM_YJ_A_FB2_2015"].ToString());
                if (data_json.HasValues)
                {
                    JObject FB2_5 = JObject.FromObject(data_json["BODY"].Where(a => a["HC"].ToString() == "5").ToList()[0]);
                    re_json.SelectToken("$..BODY[?(@.HC == '7')]")["LJJE"] = new JValue(decimal.Parse(FB2_5["COL05"].ToString()));
                }

                data_json = getQYSDS_JM_YJ_A_Public(jo["QYSDS_JM_YJ_A_FB3"].ToString());
                if (data_json.HasValues)
                {
                    JObject FB3_30 = JObject.FromObject(data_json["BODY"].Where(a => a["HC"].ToString() == "30").ToList()[0]);
                    re_json.SelectToken("$..BODY[?(@.HC == '12')]")["LJJE"] = new JValue(decimal.Parse(FB3_30["LJJE"].ToString()));
                }

            }

            return re_json;
        }

        [Route("updateSB_QYSDS_JM_YJ_A_2015.do")]
        public JObject updateSB_QYSDS_JM_YJ_A_2015()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveQYSDS_JM_YJ_A_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("delSB_QYSDS_JM_YJ_A_2015.do")]
        public JObject delSB_QYSDS_JM_YJ_A_2015()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_QYSDS_JM_YJ_A_2015.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delQYSDS_JM_YJ_A_Public(ref re_json, SBBZL_DM);

            return re_json;
        }

        [Route("getSB_QYSDS_JM_YJ_A_FB1.do")]
        public JObject POSTgetSB_QYSDS_JM_YJ_A_FB1()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_QYSDS_JM_YJ_A_FB1.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getQYSDS_JM_YJ_A_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                re_json["data"]["BODY"] = data_json["BODY"];
            }

            using (StreamReader file = File.OpenText(System.Web.HttpContext.Current.Server.MapPath(@"SBBZL_DM.json")))
            {
                JsonTextReader reader = new JsonTextReader(file);
                JObject jo = (JObject)JToken.ReadFrom(reader);
                data_json = getQYSDS_JM_YJ_A_Public(jo["QYSDS_JM_YJ_A_2015"].ToString());
                if (data_json.HasValues)
                {
                    JObject jo3 = JObject.FromObject(data_json["BODY"].Where(a => a["HC"].ToString() == "3").ToList()[0]);
                    JObject jo4 = JObject.FromObject(data_json["BODY"].Where(a => a["HC"].ToString() == "4").ToList()[0]);
                    JObject jo5 = JObject.FromObject(data_json["BODY"].Where(a => a["HC"].ToString() == "5").ToList()[0]);
                    re_json["data"]["ZBDATA"] = decimal.Parse(jo3["LJJE"].ToString()) + decimal.Parse(jo4["LJJE"].ToString()) - decimal.Parse(jo5["LJJE"].ToString());
                }
            }

            return re_json;
        }

        [Route("insertSB_QYSDS_JM_YJ_A_FB1.do")]
        public JObject insertSB_QYSDS_JM_YJ_A_FB1()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveQYSDS_JM_YJ_A_Public(input_json, SBBZL_DM);

            return re_json;
        }

        [Route("delSB_QYSDS_JM_YJ_A_FB1.do")]
        public JObject delSB_QYSDS_JM_YJ_A_FB1()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_QYSDS_JM_YJ_A_FB1.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delQYSDS_JM_YJ_A_Public(ref re_json, SBBZL_DM);

            return re_json;
        }

        [Route("getSB_QYSDS_JM_YJ_A_FB2_2015.do")]
        public JObject POSTgetSB_QYSDS_JM_YJ_A_FB2_2015()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_QYSDS_JM_YJ_A_FB2_2015.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getQYSDS_JM_YJ_A_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                re_json["data"]["BODY"] = data_json["BODY"];
            }

            return re_json;
        }

        [Route("insertSB_QYSDS_JM_YJ_A_FB2_2015.do")]
        public JObject insertSB_QYSDS_JM_YJ_A_FB2_2015()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveQYSDS_JM_YJ_A_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("updateSB_QYSDS_JM_YJ_A_FB2_2015.do")]
        public JObject updateSB_QYSDS_JM_YJ_A_FB2_2015()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveQYSDS_JM_YJ_A_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("delSB_QYSDS_JM_YJ_A_FB2_2015.do")]
        public JObject delSB_QYSDS_JM_YJ_A_FB2_2015()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_QYSDS_JM_YJ_A_FB2_2015.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delQYSDS_JM_YJ_A_Public(ref re_json, SBBZL_DM);

            return re_json;
        }

        [Route("getSB_QYSDS_JM_YJ_A_FB3.do")]
        public JObject POSTgetSB_QYSDS_JM_YJ_A_FB3()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_QYSDS_JM_YJ_A_FB3.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getQYSDS_JM_YJ_A_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                re_json["data"]["BODY"] = data_json["BODY"];
                re_json["data"]["HEAD"]["JMZ"] = data_json["HEAD"]["JMZ"];
                re_json["data"]["HEAD"]["JMFD"] = data_json["HEAD"]["JMFD"];
            }

            using (StreamReader file = File.OpenText(System.Web.HttpContext.Current.Server.MapPath(@"SBBZL_DM.json")))
            {
                JsonTextReader reader = new JsonTextReader(file);
                JObject jo = (JObject)JToken.ReadFrom(reader);
                data_json = getQYSDS_JM_YJ_A_Public(jo["QYSDS_JM_YJ_A_2015"].ToString());
                if (data_json.HasValues)
                {
                    JObject ZB_9 = JObject.FromObject(data_json["BODY"].Where(a => a["HC"].ToString() == "9").ToList()[0]);
                    re_json.SelectToken("data")["LJJE09"] = new JValue(decimal.Parse(ZB_9["LJJE"].ToString()));

                    JObject ZB_11 = JObject.FromObject(data_json["BODY"].Where(a => a["HC"].ToString() == "11").ToList()[0]);
                    re_json.SelectToken("data")["LJJE11"] = new JValue(decimal.Parse(ZB_11["LJJE"].ToString()));
                }
            }

            return re_json;
        }

        [Route("insertSB_QYSDS_JM_YJ_A_FB3.do")]
        public JObject insertSB_QYSDS_JM_YJ_A_FB3()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveQYSDS_JM_YJ_A_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("updateSB_QYSDS_JM_YJ_A_FB3.do")]
        public JObject updateSB_QYSDS_JM_YJ_A_FB3()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveQYSDS_JM_YJ_A_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("delSB_QYSDS_JM_YJ_A_FB3.do")]
        public JObject delSB_QYSDS_JM_YJ_A_FB3()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_QYSDS_JM_YJ_A_FB3.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delQYSDS_JM_YJ_A_Public(ref re_json, SBBZL_DM);

            return re_json;
        }

        [Route("getSB_QYSDS_JM_YJ_A_HZFZJGFPB2014.do")]
        public JObject POSTgetSB_QYSDS_JM_YJ_A_HZFZJGFPB2014()
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_QYSDS_JM_YJ_A_HZFZJGFPB2014.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            return re_json;
        }

        [Route("getSB_QYSDS_JM_YJ_A_CGWGQYBGB.do")]
        public JObject POSTgetSB_QYSDS_JM_YJ_A_CGWGQYBGB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_QYSDS_JM_YJ_A_CGWGQYBGB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getQYSDS_JM_YJ_A_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                for (int i = 1; i <= 4; i++)
                {
                    List<JToken> li_jt = data_json["BODY"].Where(a => a["LM"].ToString() == i.ToString()).ToList();
                    JArray ja = JArray.FromObject(li_jt);

                    foreach (JObject jo in ja)
                    {
                        JObject jo_clone = (JObject)jo.DeepClone();
                        jo.RemoveAll();
                        foreach (JProperty jp in jo_clone.Properties())
                        {
                            jo.Add(jp.Name + i, jp.Value);
                            if (jp.Name + i == "COLF2")
                            {
                                string[] COLF2 = jp.Value.ToString().Split('~');
                                jo[jp.Name + i] = COLF2[0];
                                jo["COLG2"] = COLF2[1];
                            }

                        }

                    }

                    if (i == 1)
                    {
                        re_json["data"]["BODY"] = ja;
                    }
                    else
                    {
                        re_json["data"]["BODY" + i] = ja;
                    }

                }

                foreach (JProperty jp in data_json["HEAD"])
                {
                    re_json["data"]["HEAD"][jp.Name] = jp.Value;
                }
            }

            return re_json;
        }

        [Route("insertSB_QYSDS_JM_YJ_A_CGWGQYBGB.do")]
        public JObject insertSB_QYSDS_JM_YJ_A_CGWGQYBGB()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveQYSDS_JM_YJ_A_Public(input_json, SBBZL_DM);

            return re_json;
        }

        [Route("delSB_QYSDS_JM_YJ_A_CGWGQYBGB.do")]
        public JObject delSB_QYSDS_JM_YJ_A_CGWGQYBGB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_QYSDS_JM_YJ_A_CGWGQYBGB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delQYSDS_JM_YJ_A_Public(ref re_json, SBBZL_DM);

            return re_json;
        }

        [Route("getSB_QYSDS_JM_YJ_A_DYNSBAB.do")]
        public JObject POSTgetSB_QYSDS_JM_YJ_A_DYNSBAB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_QYSDS_JM_YJ_A_DYNSBAB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getQYSDS_JM_YJ_A_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                re_json["data"]["BODY"] = data_json["BODY"];
            }

            return re_json;
        }

        [Route("insertSB_QYSDS_JM_YJ_A_DYNSBAB.do")]
        public JObject insertSB_QYSDS_JM_YJ_A_DYNSBAB()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveQYSDS_JM_YJ_A_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("delSB_QYSDS_JM_YJ_A_DYNSBAB.do")]
        public JObject delSB_QYSDS_JM_YJ_A_DYNSBAB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_QYSDS_JM_YJ_A_DYNSBAB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delQYSDS_JM_YJ_A_Public(ref re_json, SBBZL_DM);

            return re_json;
        }

        public JObject saveQYSDS_JM_YJ_A_Public(JObject DATA, string SBBZL_DM)
        {
            JObject re_json = new JObject();

            string id = "";
            GDTXGuangXiUserYSBQC ysbqc = GTXMethod.GetYSBQCByBDDM(BDDM);
            id = ysbqc.Id.ToString();

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
                re_json["code"] = "1";
                re_json["msg"] = "操作成功";
            }
            else
            {
                re_json["code"] = "-1";
                re_json["msg"] = "操作失败";
            }
            return re_json;
        }

        public JObject getQYSDS_JM_YJ_A_Public(ref JObject re_json, string SBBZL_DM)
        {
            string id = "";
            GDTXGuangXiUserYSBQC ysbqc = GTXMethod.GetYSBQCByBDDM(BDDM);
            id = ysbqc.Id.ToString();

            re_json["data"]["HEAD"]["SSSQ_Q"] = new JValue(ysbqc.SKSSQQ);
            re_json["data"]["HEAD"]["SSSQ_Z"] = new JValue(ysbqc.SKSSQZ);

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

        public void delQYSDS_JM_YJ_A_Public(ref JObject re_json, string SBBZL_DM)
        {
            string id = "";
            string rqQ = "";
            string rqZ = "";

            GDTXGuangXiUserYSBQC ysbqc = GTXMethod.GetYSBQCByBDDM(BDDM);
            id = ysbqc.Id.ToString();
            rqQ = ysbqc.SKSSQQ;
            rqZ = ysbqc.SKSSQZ;

            if (re_json.Properties().Where(a => a.Name == "data").ToList().Count > 0)
            {
                re_json["data"]["HEAD"]["SSSQ_Q"] = new JValue(rqQ);
                re_json["data"]["HEAD"]["SSSQ_Z"] = new JValue(rqZ);
            }
            GTXResult gr = GTXMethod.DeleteUserReportData(id, SBBZL_DM);
        }

        public JObject getQYSDS_JM_YJ_A_Public(string SBBZL_DM)
        {
            string id = "";
            GDTXGuangXiUserYSBQC ysbqc = GTXMethod.GetYSBQCByBDDM(BDDM);
            id = ysbqc.Id.ToString();

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

    }
}
