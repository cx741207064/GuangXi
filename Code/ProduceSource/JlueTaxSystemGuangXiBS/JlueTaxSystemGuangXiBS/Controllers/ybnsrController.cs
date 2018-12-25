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
    public class ybnsrController : Controller
    {
        public void getSB_ZZS_FP_HZ()
        {
            JObject return_j = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_FP_HZ.json"));
            return_str = str;
            return_j = JsonConvert.DeserializeObject<JObject>(str);
            Response.ContentType = "application/json";
            Response.Write(str);
        }

        public void getSB_ZZS_YBNSR(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_YBNSR.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                JArray data_body = (JArray)data_json["BODY"];
                JArray re_body = (JArray)re_json["data"]["BODY"];
                for (int i = 0; i < data_body.Count; i++)
                {
                    re_body[i]["YBHW_LW_BYS"] = data_body[i]["YBHW_LW_BYS"];
                    re_body[i]["JZJTHW_LW_BYS"] = data_body[i]["JZJTHW_LW_BYS"];
                }
            }

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void extractSB_ZZS_YBNSR()
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("extractSB_ZZS_YBNSR.json"));
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
                        if (item.BDDM == "YBNSRZZS")
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
                        JArray re_body = (JArray)re_json["data"]["BODY"];

                        double YBHW_LW_BYS_1 = double.Parse(data_body[0]["COL09"].ToString()) + double.Parse(data_body[3]["COL09"].ToString());
                        re_body[0]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_1);

                        double YBHW_LW_BYS_4 = double.Parse(data_body[0]["COL07"].ToString()) + double.Parse(data_body[1]["COL07"].ToString()) + double.Parse(data_body[3]["COL07"].ToString()) + double.Parse(data_body[4]["COL07"].ToString());
                        re_body[3]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_4);

                        double YBHW_LW_BYS_7 = double.Parse(data_body[19]["COL03"].ToString());
                        re_body[6]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_7);

                        double YBHW_LW_BYS_8 = double.Parse(data_body[21]["COL03"].ToString());
                        re_body[7]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_8);

                        double YBHW_LW_BYS_11 = double.Parse(data_body[0]["COL10"].ToString()) + double.Parse(data_body[1]["COL10"].ToString()) + double.Parse(data_body[2]["COL10"].ToString()) + double.Parse(data_body[3]["COL10"].ToString()) + double.Parse(data_body[4]["COL10"].ToString()) + double.Parse(data_body[5]["COL10"].ToString());
                        re_body[10]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_11);

                        double YBHW_LW_BYS_21 = double.Parse(data_body[8]["COL10"].ToString()) + double.Parse(data_body[9]["COL10"].ToString()) + double.Parse(data_body[10]["COL10"].ToString()) + double.Parse(data_body[11]["COL10"].ToString()) + double.Parse(data_body[12]["COL10"].ToString()) + double.Parse(data_body[13]["COL10"].ToString());
                        re_body[20]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_21);

                    }
                }
            }

            GTXResult gr2 = GTXMethod.GetUserReportData(id, "101011035");
            if (gr2.IsSuccess)
            {
                JArray jarr = new JArray();
                jarr = JsonConvert.DeserializeObject<JArray>(gr2.Data.ToString());
                if (jarr.Count > 0)
                {
                    byte[] bytes = Convert.FromBase64String(jarr[0]["dataValue"].ToString().Replace(" ", "+"));
                    string dataValue = Encoding.Default.GetString(bytes);
                    JObject data_json = JsonConvert.DeserializeObject<JObject>(dataValue);
                    if (data_json.HasValues)
                    {
                        JArray data_body = (JArray)data_json["BODY"];
                        JArray re_body = (JArray)re_json["data"]["BODY"];

                        double YBHW_LW_BYS_12 = double.Parse(data_body[0]["SE"].ToString());
                        re_body[11]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_12);

                        double YBHW_LW_BYS_14 = double.Parse(data_body[15]["FS"].ToString());
                        re_body[13]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_14);

                    }
                }
            }

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void insertSB_ZZS_YBNSR(string DATA, string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void updateSB_ZZS_YBNSR(string DATA, string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void delSB_ZZS_YBNSR(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_YBNSR.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void getSB_ZZS_YBNSR_FB1(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_YBNSR_FB1.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
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
                    re_body[i]["COL14"] = data_body[i]["COL14"];
                }
            }

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void insertSB_ZZS_YBNSR_FB1(string DATA,string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void updateSB_ZZS_YBNSR_FB1(string DATA,string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void delSB_ZZS_YBNSR_FB1(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_YBNSR_FB1.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void getSB_ZZS_YBNSR_FB2(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_YBNSR_FB2.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                JArray data_body = (JArray)data_json["BODY"];
                JArray re_body = (JArray)re_json["data"]["BODY"];
                for (int i = 0; i < data_body.Count; i++)
                {
                    re_body[i]["FS"] = data_body[i]["FS"];
                    re_body[i]["JE"] = data_body[i]["JE"];
                    re_body[i]["SE"] = data_body[i]["SE"];
                }
            }

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void insertSB_ZZS_YBNSR_FB2(string DATA, string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void updateSB_ZZS_YBNSR_FB2(string DATA, string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void delSB_ZZS_YBNSR_FB2(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_YBNSR_FB2.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void getSB_ZZS_YBNSR_FB3(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_YBNSR_FB3.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                JArray QCYELIST = new JArray();
                do
                {
                    QCYELIST.Add(0);
                }
                while (QCYELIST.Count < 8);
                re_json["data"]["BODY"] = data_json["BODY"];
                re_json["data"]["YMKZ"]["QCYELIST"] = QCYELIST;
            }

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void updateSB_ZZS_YBNSR_FB3(string DATA, string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void insertSB_ZZS_YBNSR_FB3(string DATA, string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void delSB_ZZS_YBNSR_FB3(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_YBNSR_FB3.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void getSB_ZZS_FB4(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_FB4.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                JArray data_body = (JArray)data_json["BODY"];
                JArray re_body = (JArray)re_json["data"]["BODY"];
                for (int i = 0; i < data_body.Count; i++)
                {
                    re_body[i]["BQFSE"] = data_body[i]["BQFSE"];
                    re_body[i]["QCYE"] = data_body[i]["QCYE"];
                    re_body[i]["QMYE"] = data_body[i]["QMYE"];
                    re_body[i]["BQSJDJSE"] = data_body[i]["BQSJDJSE"];
                    re_body[i]["BQYDJSE"] = data_body[i]["BQYDJSE"];
                }
            }

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void insertSB_ZZS_FB4(string DATA, string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void updateSB_ZZS_FB4(string DATA, string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void delSB_ZZS_FB4(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_FB4.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void getSB_ZZS_BDCFQDCJSB(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_BDCFQDCJSB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
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
                }
            }

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void insertSB_ZZS_BDCFQDCJSB(string DATA, string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void updateSB_ZZS_BDCFQDCJSB(string DATA, string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void delSB_ZZS_BDCFQDCJSB(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_BDCFQDCJSB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void getSB_ZZS_YBNSR_JMSMXB(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_YBNSR_JMSMXB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                re_json["data"]["BODY"] = data_json["BODY"];
            }

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void insertSB_ZZS_YBNSR_JMSMXB(string DATA, string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void delSB_ZZS_YBNSR_JMSMXB(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_YBNSR_JMSMXB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void getSB_ZZS_YBNSR_YGZSFFXCSMXB(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_YBNSR_YGZSFFXCSMXB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                re_json["data"]["BODY"] = data_json["BODY"];
            }

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void insertSB_ZZS_YBNSR_YGZSFFXCSMXB(string DATA, string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void delSB_ZZS_YBNSR_YGZSFFXCSMXB(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_YBNSR_YGZSFFXCSMXB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void getSB_ZZS_FB5(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("getSB_ZZS_FB5.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                re_json["data"]["BODY"] = data_json["BODY"];
            }

            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void insertSB_ZZS_FB5(string DATA, string SBBZL_DM)
        {
            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public void delSB_ZZS_FB5(string SBBZL_DM)
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(Server.MapPath("delSB_ZZS_FB5.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            Response.ContentType = "application/json";
            Response.Write(re_json);
        }

        public JObject saveSB_ZZS_YBNSR_Public(JObject DATA, string SBBZL_DM)
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
                        if (item.BDDM == "YBNSRZZS")
                        {
                            id = item.Id.ToString();
                        }
                    }
                }
            }

            List<GTXNameValue> nameList = new List<GTXNameValue>();
            GTXNameValue nv = new GTXNameValue();
            nv.key = "data";
            byte[] bytes = Encoding.Default.GetBytes(JsonConvert.SerializeObject(DATA));
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

        public JObject getSB_ZZS_YBNSR_Public(ref JObject re_json, string SBBZL_DM)
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
                        if (item.BDDM == "YBNSRZZS")
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
                    string dataValue = Encoding.Default.GetString(bytes);
                    data_json = JsonConvert.DeserializeObject<JObject>(dataValue);
                }
            }
            return data_json;
        }

        public void delSB_ZZS_YBNSR_Public(ref JObject re_json, string SBBZL_DM)
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
                        if (item.BDDM == "YBNSRZZS")
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