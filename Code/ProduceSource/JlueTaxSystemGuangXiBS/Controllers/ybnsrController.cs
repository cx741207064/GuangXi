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
using System.IO;
using JlueTaxSystemGuangXiBS.code;
using System.Web.Http.Results;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    [RoutePrefix("hlwsb/zzs/ybnsr")]
    public class ybnsrController : ApiController
    {
        [Route("getSB_ZZS_FP_HZ.do")]
        public JObject POSTgetSB_ZZS_FP_HZ()
        {
            JObject re_json = new JObject();
            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_ZZS_FP_HZ.json"));
            return_str = str;
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            return re_json;
        }

        [Route("getSB_ZZS_YBNSR.do")]
        public JObject POSTgetSB_ZZS_YBNSR()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_ZZS_YBNSR.json"));

            string Name = System.Web.HttpContext.Current.Session["Name"].ToString();
            JToken industry = JToken.Parse(System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("~/industry.json")));
            industry = industry.Where(a => a["name"].ToString() == Name).ToList()[0];
            if (industry["value"].ToString() != "")
            {
                str = File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_ZZS_YBNSR." + industry["value"] + ".json"));
            }

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
            string id = "", tbrq = "", rqQ = "", rqZ = "";
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
            GTXResult gr3 = GTXMethod.GetUserReportData(id, "101011025");
            if (gr3.IsSuccess)
            {
                JArray jarr = new JArray();
                jarr = JsonConvert.DeserializeObject<JArray>(gr3.Data.ToString());
                if (jarr.Count > 0)
                {
                    byte[] bytes = Convert.FromBase64String(jarr[0]["dataValue"].ToString().Replace(" ", "+"));
                    string dataValue = Encoding.Default.GetString(bytes);
                    data_json = JsonConvert.DeserializeObject<JObject>(dataValue);
                    if (data_json.HasValues)
                    {
                        JArray data_body = (JArray)data_json["BODY"];
                        JObject re_body1 = (JObject)re_json["data"]["YMKZ"];
                       // JArray re_body = (JArray)re_json["data"]["BODY"];

                        // double YBHW_LW_BYS_19 = double.Parse(re_body[18]["YBHW_LW_BYS"].ToString()) - double.Parse(data_body[8]["BQSJDJSE"].ToString());
                        double YBHW_LW_BYS_19_1 = double.Parse(data_body[8]["BQSJDJSE"].ToString());

                        //  re_body[18]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_19);
                        re_body1["ybxmbqsjsw"] = new JValue(YBHW_LW_BYS_19_1);
                    }
                }
            }
            return re_json;
        }
        [Route("getZZSFB4JJDJ.do")]
        public Double getZZSFB4JJDJ(double col4)
        {
            //string col4 =System. HttpContext.Current.Request["col4"] ?? string.Empty;
            JObject re_json = new JObject();
            string id = ""; double col5 = 0;
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

            GTXResult gr = GTXMethod.GetUserReportData(id, "101011021");
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
                     

                        double YBHW_LW_BYS_19 = Convert.ToDouble(data_body[18]["YBHW_LW_BYS"]);
                        ////若本行第4列>=0 且第4列<主表第11栏-主表第18栏，则第5列(col405) = 第4列(col409)
                        //若第4列 >=主表第11栏-第18栏(col19)，则第5栏=主表11栏-主表18栏
                        //若第4列<0，则第5列等于0
                        if (col4 >= 0 && col4 < YBHW_LW_BYS_19)
                        {
                           col5 = col4;
                        }
                        else if (col4 >= YBHW_LW_BYS_19)
                        {
                           col5 = YBHW_LW_BYS_19;
                        }else
                        {
                           col5 = 0;
                        }
                    }
                }
            }
          
            

            return col5;
        
        }
        [Route("extractSB_ZZS_YBNSR.do")]
        public JObject extractSB_ZZS_YBNSR()
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("extractSB_ZZS_YBNSR.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            string id = "", tbrq = "", rqQ = "", rqZ="";
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

            //提取附表一数据
            GTXResult gr = GTXMethod.GetUserReportData(id, SBBZL_DM.sb_zzs_ybnsr_fb1);
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

                        double YBHW_LW_BYS_1 = double.Parse(data_body[0]["COL09"].ToString()) + double.Parse(data_body[2]["COL09"].ToString());
                        re_body[0]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_1);

                        double YBHW_LW_BYS_4 = double.Parse(data_body[0]["COL07"].ToString()) + double.Parse(data_body[1]["COL07"].ToString()) + double.Parse(data_body[3]["COL07"].ToString()) + double.Parse(data_body[4]["COL07"].ToString());
                        re_body[3]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_4);

                        double YBHW_LW_BYS_7 = double.Parse(data_body[19]["COL03"].ToString());
                        re_body[6]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_7);

                        double YBHW_LW_BYS_8 = double.Parse(data_body[21]["COL03"].ToString());
                        re_body[7]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_8);

                        double YBHW_LW_BYS_11 = double.Parse(data_body[0]["COL10"].ToString()) + double.Parse(data_body[1]["COL10"].ToString()) + double.Parse(data_body[2]["COL10"].ToString()) + double.Parse(data_body[3]["COL10"].ToString()) + double.Parse(data_body[4]["COL10"].ToString()) + double.Parse(data_body[5]["COL10"].ToString());
                        re_body[10]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_11);

                        //double YBHW_LW_BYS_19 = double.Parse(data_body[0]["COL11"].ToString()) - double.Parse(data_body[0]["COL18"].ToString()) - double.Parse(data_body[2]["COL10"].ToString());
                        //re_body[18]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_19);

                        double YBHW_LW_BYS_21 = double.Parse(data_body[8]["COL10"].ToString()) + double.Parse(data_body[9]["COL10"].ToString()) + double.Parse(data_body[10]["COL10"].ToString()) + double.Parse(data_body[11]["COL10"].ToString()) + double.Parse(data_body[12]["COL10"].ToString()) + double.Parse(data_body[13]["COL10"].ToString());
                        re_body[20]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_21);

                    }
                }
            }

            //提取附表二数据
            GTXResult gr2 = GTXMethod.GetUserReportData(id, SBBZL_DM.sb_zzs_ybnsr_fb2);
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

                        double YBHW_LW_BYS_12 = double.Parse(data_body[12]["SE"].ToString());
                        re_body[11]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_12);

                        double YBHW_LW_BYS_14 = double.Parse(data_body[15]["FS"].ToString());
                        re_body[13]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_14);

                    }
                }
            }

            //提取附表四数据
            GTXResult gr3 = GTXMethod.GetUserReportData(id, SBBZL_DM.sb_zzs_ybnsr_fb4);
            if (gr3.IsSuccess)
            {
                JArray jarr = new JArray();
                jarr = JsonConvert.DeserializeObject<JArray>(gr3.Data.ToString());
                if (jarr.Count > 0)
                {
                    byte[] bytes = Convert.FromBase64String(jarr[0]["dataValue"].ToString().Replace(" ", "+"));
                    string dataValue = Encoding.Default.GetString(bytes);
                    JObject data_json = JsonConvert.DeserializeObject<JObject>(dataValue);
                    if (data_json.HasValues)
                    {
                        JArray data_body = (JArray)data_json["BODY"];
                        JObject re_body1 = (JObject)re_json["data"]["YMKZ"];
                        JArray re_body = (JArray)re_json["data"]["BODY"];

                       // double YBHW_LW_BYS_19 = double.Parse(re_body[18]["YBHW_LW_BYS"].ToString()) - double.Parse(data_body[8]["BQSJDJSE"].ToString());
                        double YBHW_LW_BYS_19_1 = double.Parse(data_body[8]["BQSJDJSE"].ToString());
                        double YBHW_LW_BYS_23_1 = double.Parse(data_body[0]["BQSJDJSE"].ToString()) + double.Parse(data_body[1]["BQSJDJSE"].ToString()) + double.Parse(data_body[2]["BQSJDJSE"].ToString()) + double.Parse(data_body[3]["BQSJDJSE"].ToString()) + double.Parse(data_body[4]["BQSJDJSE"].ToString()) ;
                        re_body[22]["YBHW_LW_BYS"] = new JValue(YBHW_LW_BYS_23_1);
                        re_body1["ybxmbqsjsw"] = new JValue(YBHW_LW_BYS_19_1);
                    }
                }
            }
            return re_json;
        }

        [Route("insertSB_ZZS_YBNSR.do")]
        public JObject insertSB_ZZS_YBNSR()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("updateSB_ZZS_YBNSR.do")]
        public JObject updateSB_ZZS_YBNSR()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("delSB_ZZS_YBNSR.do")]
        public JObject delSB_ZZS_YBNSR()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_ZZS_YBNSR.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            return re_json;
        }

        [Route("getSB_ZZS_YBNSR_FB1.do")]
        public JObject POSTgetSB_ZZS_YBNSR_FB1()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = "";

            string Name = System.Web.HttpContext.Current.Session["Name"].ToString();
            JToken industry = JToken.Parse(System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("~/industry.json")));
            industry = industry.Where(a => a["name"].ToString() == Name).ToList()[0];
            if (industry["value"].ToString() != "")
            {
                str = File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_ZZS_YBNSR_FB1." + industry["value"] + ".json"));
            }

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

            return re_json;
        }

        [Route("insertSB_ZZS_YBNSR_FB1.do")]
        public JObject insertSB_ZZS_YBNSR_FB1()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("updateSB_ZZS_YBNSR_FB1.do")]
        public JObject updateSB_ZZS_YBNSR_FB1()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("delSB_ZZS_YBNSR_FB1.do")]
        public JObject delSB_ZZS_YBNSR_FB1()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_ZZS_YBNSR_FB1.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            return re_json;
        }

        [Route("getSB_ZZS_YBNSR_FB2.do")]
        public JObject POSTgetSB_ZZS_YBNSR_FB2()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = "";

            string Name = System.Web.HttpContext.Current.Session["Name"].ToString();
            JToken industry = JToken.Parse(System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("~/industry.json")));
            industry = industry.Where(a => a["name"].ToString() == Name).ToList()[0];
            if (industry["value"].ToString() != "")
            {
                str = File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_ZZS_YBNSR_FB2." + industry["value"] + ".json"));
            }

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

            return re_json;
        }

        [Route("insertSB_ZZS_YBNSR_FB2.do")]
        public JObject insertSB_ZZS_YBNSR_FB2()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("updateSB_ZZS_YBNSR_FB2.do")]
        public JObject updateSB_ZZS_YBNSR_FB2()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("delSB_ZZS_YBNSR_FB2.do")]
        public JObject delSB_ZZS_YBNSR_FB2()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_ZZS_YBNSR_FB2.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            return re_json;
        }

        [Route("getSB_ZZS_YBNSR_FB3.do")]
        public JObject POSTgetSB_ZZS_YBNSR_FB3()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_ZZS_YBNSR_FB3.json"));
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
                re_json["data"]["FPXXLIST"] = data_json["BODY"];
            }

            return re_json;
        }

        [Route("updateSB_ZZS_YBNSR_FB3.do")]
        public JObject updateSB_ZZS_YBNSR_FB3()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("insertSB_ZZS_YBNSR_FB3.do")]
        public JObject insertSB_ZZS_YBNSR_FB3()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("delSB_ZZS_YBNSR_FB3.do")]
        public JObject delSB_ZZS_YBNSR_FB3()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_ZZS_YBNSR_FB3.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            return re_json;
        }

        [Route("getSB_ZZS_FB4.do")]
        public JObject POSTgetSB_ZZS_FB4()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject in_jo=new JObject();
             JArray re_jo=new JArray();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_ZZS_FB4.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                JArray data_body = (JArray)data_json["BODY"];
               // JArray re_body = (JArray)re_json["data"]["BODY"];
                for (int i = 0; i < data_body.Count; i++)
                {
                    in_jo["BQFSE"] = data_body[i]["BQFSE"];
                    in_jo["QCYE"] = data_body[i]["QCYE"];
                    in_jo["QMYE"] = data_body[i]["QMYE"];
                    in_jo["BQSJDJSE"] = data_body[i]["BQSJDJSE"];
                    in_jo["BQYDJSE"] = data_body[i]["BQYDJSE"];
                    re_jo.Add(in_jo);
                }
            }
            re_json["data"]["BODY"] = data_json["BODY"];
            return re_json;
        }

        [Route("insertSB_ZZS_FB4.do")]
        public JObject insertSB_ZZS_FB4()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("updateSB_ZZS_FB4.do")]
        public JObject updateSB_ZZS_FB4()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("delSB_ZZS_FB4.do")]
        public JObject delSB_ZZS_FB4()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_ZZS_FB4.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            return re_json;
        }

        [Route("getSB_ZZS_BDCFQDCJSB.do")]
        public JObject POSTgetSB_ZZS_BDCFQDCJSB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_ZZS_BDCFQDCJSB.json"));
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

            return re_json;
        }

        [Route("insertSB_ZZS_BDCFQDCJSB.do")]
        public JObject insertSB_ZZS_BDCFQDCJSB()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("updateSB_ZZS_BDCFQDCJSB.do")]
        public JObject updateSB_ZZS_BDCFQDCJSB()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("delSB_ZZS_BDCFQDCJSB.do")]
        public JObject delSB_ZZS_BDCFQDCJSB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_ZZS_BDCFQDCJSB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            return re_json;
        }

        [Route("getSB_ZZS_YBNSR_JMSMXB.do")]
        public JObject POSTgetSB_ZZS_YBNSR_JMSMXB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_ZZS_YBNSR_JMSMXB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                re_json["data"]["BODY"] = data_json["BODY"];
            }

            return re_json;
        }

        [Route("insertSB_ZZS_YBNSR_JMSMXB.do")]
        public JObject insertSB_ZZS_YBNSR_JMSMXB()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("delSB_ZZS_YBNSR_JMSMXB.do")]
        public JObject delSB_ZZS_YBNSR_JMSMXB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_ZZS_YBNSR_JMSMXB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            return re_json;
        }

        [Route("getSB_ZZS_YBNSR_YGZSFFXCSMXB.do")]
        public JObject POSTgetSB_ZZS_YBNSR_YGZSFFXCSMXB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_ZZS_YBNSR_YGZSFFXCSMXB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                re_json["data"]["BODY"] = data_json["BODY"];
            }

            return re_json;
        }

        [Route("insertSB_ZZS_YBNSR_YGZSFFXCSMXB.do")]
        public JObject insertSB_ZZS_YBNSR_YGZSFFXCSMXB()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("delSB_ZZS_YBNSR_YGZSFFXCSMXB.do")]
        public JObject delSB_ZZS_YBNSR_YGZSFFXCSMXB()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_ZZS_YBNSR_YGZSFFXCSMXB.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            return re_json;
        }

        [Route("getSB_ZZS_FB5.do")]
        public JObject POSTgetSB_ZZS_FB5()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject data_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("getSB_ZZS_FB5.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            data_json = getSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            if (data_json.HasValues)
            {
                re_json["data"]["BODY"] = data_json["BODY"];
            }

            return re_json;
        }

        [Route("insertSB_ZZS_FB5.do")]
        public JObject insertSB_ZZS_FB5()
        {
            string DATA = System.Web.HttpContext.Current.Request["DATA"];
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            JObject input_json = JsonConvert.DeserializeObject<JObject>(DATA);
            re_json = saveSB_ZZS_YBNSR_Public(input_json, SBBZL_DM);
            return re_json;
        }

        [Route("delSB_ZZS_FB5.do")]
        public JObject delSB_ZZS_FB5()
        {
            string SBBZL_DM = System.Web.HttpContext.Current.Request["SBBZL_DM"];

            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("delSB_ZZS_FB5.json"));
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            delSB_ZZS_YBNSR_Public(ref re_json, SBBZL_DM);
            return re_json;
        }

        [Route("sb_zzs_ybnsr_hzfpb_2015.html")]
        [HttpGet]
        public ResponseMessageResult sb_zzs_ybnsr_hzfpb_2015()
        {
            return FunctionNotOpen();
        }

        [Route("sb_zzs_dxqy.html")]
        [HttpGet]
        public ResponseMessageResult sb_zzs_dxqy()
        {
            return FunctionNotOpen();
        }

        [Route("~/hlwsb/zzs/ybnsr/ybnsr2016/sb_zzs_yzqy.html")]
        [HttpGet]
        public ResponseMessageResult sb_zzs_yzqy()
        {
            return FunctionNotOpen();
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

        ResponseMessageResult FunctionNotOpen()
        {
            string str = System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "/FunctionNotOpen.html");
            return ResponseMessage(new HttpResponseMessage() { Content = new StringContent(str, Encoding.UTF8, "text/html"), });
        }

    }
}
