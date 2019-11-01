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
    public class RootController : ApiController
    {
        string BaseDirectory = AppDomain.CurrentDomain.BaseDirectory;

        [Route("sword")]
        public HttpResponseMessage GETsword(string ctrl)
        {
            string return_str = "";
            string str = "";
            string functionName = System.Web.HttpContext.Current.Request["functionName"] ?? string.Empty;
            if (ctrl == "SB025YhssbCtrl_initView")
            {
                System.Web.HttpContext.Current.Response.Redirect("sword." + ctrl + ".aspx");

            }
            else if (functionName == "财务报告报送与信息采集")
            {
                str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath(ctrl + ".html"));
            }
            else if (ctrl == "SB104xqykjzzcwbsCtrl_toSbfb")
            {
                string id = System.Web.HttpContext.Current.Request["id"] ?? string.Empty;
                str = System.IO.File.ReadAllText(BaseDirectory + "/sword/sword." + ctrl + id + ".html");
            }
            else
            {
                str = System.IO.File.ReadAllText(BaseDirectory + "/sword/sword." + ctrl + ".html");
            }
            return_str = str;
            return new HttpResponseMessage()
            {
                Content = new StringContent(return_str, System.Text.Encoding.UTF8, "text/html")
            };
        }

        [Route("ajax.sword")]
        [AcceptVerbs("Post", "Get")]
        public HttpResponseMessage ajax()
        {
            string ctrl = System.Web.HttpContext.Current.Request["ctrl"];
            string postData = System.Web.HttpContext.Current.Request["postData"];

            string return_str = "";
            string str = "";
            JObject in_json = new JObject();
            string postData_ctrl = "";
            string zspmDm = "";
            if (postData != null)
            {
                in_json = JsonConvert.DeserializeObject<JObject>(postData);
                postData_ctrl = in_json["ctrl"].ToString().Split('?')[0];
                if (postData_ctrl == "SB025YhssbCtrl_getSl")
                {
                    zspmDm = in_json["data"][0]["value"].ToString();
                }
                //if (postData_ctrl == "")
                //{
                //    zspmDm = in_json["data"][0]["value"].ToString();
                //}
            }
            if (ctrl != null)
            {
                str = System.IO.File.ReadAllText(BaseDirectory + "/ajax.sword/ajax.sword." + ctrl + ".json");
            }
            else if (postData_ctrl != "")
            {
                if (zspmDm != "")
                {
                    str = System.IO.File.ReadAllText(BaseDirectory + "/ajax.sword/ajax.sword." + zspmDm + ".json");
                }
                else
                {
                    if (postData_ctrl == "SB025YhssbCtrl_saveYhsSbxx")
                    {
                        JObject jo = saveSB_YHS(JsonConvert.SerializeObject(in_json["data"]));
                        str = JsonConvert.SerializeObject(jo);
                    }
                    else if (postData_ctrl == "GY002CommonCtrl_queryNsrxxByNsrsbh")
                    {
                        JObject jo = queryNsrxxByNsrsbh();
                        str = JsonConvert.SerializeObject(jo);
                    }
                    else if (postData_ctrl == "SB151zlbsslCtrl_queryKjzdzzDmByDjxh")
                    {
                        JObject jo = querySKSS();
                        str = JsonConvert.SerializeObject(jo);
                    }
                    else if (postData_ctrl == "SB025YhssbCtrl_reloadNsrzfhy")
                    {
                        JObject jo = reloadNsrzfhy();
                        str = JsonConvert.SerializeObject(jo);
                    }
                    else if (postData_ctrl == "TyslCtrl_saveSxslxx")
                    {
                        JObject jo = saveSB_YHS(JsonConvert.SerializeObject(in_json["data"]));
                        str = JsonConvert.SerializeObject(jo);
                    }
                    //else if (postData_ctrl == "SBGyCtrl_getbsfbxx")
                    //{
                    //    JObject jo = saveSB_CWBB(JsonConvert.SerializeObject(in_json["data"]));
                    //    str = JsonConvert.SerializeObject(jo);
                    //}
                    else if (postData_ctrl == "SB104xqykjzzcwbsCtrl_saveZcfzb")
                    {
                        JObject jo = saveSB_CWBB("CWBB_YJD", JsonConvert.SerializeObject(in_json["data"]));
                        str = JsonConvert.SerializeObject(jo);
                    }
                    else
                    {
                        str = System.IO.File.ReadAllText(BaseDirectory + "/ajax.sword/ajax.sword." + postData_ctrl + ".json");
                    }
                }
            }
            return_str = str;
            return new HttpResponseMessage()
            {
                Content = new StringContent(return_str, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [Route("form.sword")]
        public HttpResponseMessage form()
        {
            string ctrl = System.Web.HttpContext.Current.Request["ctrl"];
            string postData = System.Web.HttpContext.Current.Request["postData"];

            string return_str = "";
            string str = "";
            JObject return_j = new JObject();
            string postData_ctrl = "";
            if (postData != null)
            {
                return_j = JsonConvert.DeserializeObject<JObject>(postData);
                postData_ctrl = return_j["ctrl"].ToString().Split('?')[0];
            }
            if (ctrl != null)
            {
                str = System.IO.File.ReadAllText(BaseDirectory + "/form.sword/form.sword." + ctrl + ".json");
            }
            else if (postData_ctrl != null)
            {
                if (postData_ctrl == "SB151zlbsslCtrl_initBd")
                    // str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("form.sword." + postData_ctrl + ".aspx"));
                    System.Web.HttpContext.Current.Response.Redirect("form.sword." + postData_ctrl + ".aspx");
                else
                    str = System.IO.File.ReadAllText(BaseDirectory + "/form.sword/form.sword." + postData_ctrl + ".html");
            }
            return_str = str;
            return new HttpResponseMessage()
            {
                Content = new StringContent(return_str, System.Text.Encoding.UTF8, "text/html")
            };
        }

        public JObject saveSB_YHS(string data)
        {
            JObject re_json = new JObject();

            string id = "";
            GTXResult resultq = GTXMethod.GetGuangXiYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXGuangXiUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXGuangXiUserYSBQC>>(resultq.Data.ToString());
                if (ysbqclist.Count > 0)
                {
                    foreach (GDTXGuangXiUserYSBQC item in ysbqclist)
                    {
                        if (item.BDDM == "YHSSB")
                        {
                            id = item.Id.ToString();
                        }
                    }
                }
            }

            List<GTXNameValue> nameList = new List<GTXNameValue>();
            GTXNameValue nv = new GTXNameValue();
            nv.key = "data";
            byte[] bytes = Encoding.Default.GetBytes(JsonConvert.SerializeObject(data));
            string _result = Convert.ToBase64String(bytes);
            nv.value = _result;
            nameList.Add(nv);
            GTXResult saveresult = GTXMethod.SaveUserReportData(JsonConvert.SerializeObject(nameList), id, "");
            if (saveresult.IsSuccess)
            {
                string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("YHSSB.json"));
                re_json = JsonConvert.DeserializeObject<JObject>(str);
                GTXResult upresult = GTXMethod.UpdateYSBQC(id, "已申报");
            }
            else
            {
                re_json["code"] = "-1";
                re_json["msg"] = "操作失败";
            }
            return re_json;
        }

        public JObject saveSB_CWBB(string code,string data)
        {
            JObject re_json = new JObject();

            string id = "";
            GTXResult resultq = GTXMethod.GetGuangXiYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXGuangXiUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXGuangXiUserYSBQC>>(resultq.Data.ToString());
                if (ysbqclist.Count > 0)
                {
                    foreach (GDTXGuangXiUserYSBQC item in ysbqclist)
                    {
                        if (item.BDDM == "CWBB_YJD")
                        {
                            id = item.Id.ToString();
                        }
                    }
                }
            }

            List<GTXNameValue> nameList = new List<GTXNameValue>();
            GTXNameValue nv = new GTXNameValue();
            nv.key = "data";
            byte[] bytes = Encoding.Default.GetBytes(JsonConvert.SerializeObject(data));
            string _result = Convert.ToBase64String(bytes);
            nv.value = _result;
            nameList.Add(nv);
            GTXResult saveresult = GTXMethod.SaveUserReportData(JsonConvert.SerializeObject(nameList), id, code);
            if (saveresult.IsSuccess)
            {
                string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("YHSSB.json"));
                re_json = JsonConvert.DeserializeObject<JObject>(str);
                GTXResult upresult = GTXMethod.UpdateYSBQC(id, "已申报");
            }
            else
            {
                re_json["code"] = "-1";
                re_json["msg"] = "操作失败";
            }
            return re_json;
        }



        public JObject querySKSS()
        {
            string skssqq = "", skssqz = "";
            GTXResult resultq = GTXMethod.GetGuangXiYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXGuangXiUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXGuangXiUserYSBQC>>(resultq.Data.ToString());
                if (ysbqclist.Count > 0)
                {
                    foreach (GDTXGuangXiUserYSBQC item in ysbqclist)
                    {
                        if (item.BDDM == "YHSSB")
                        {
                            skssqq = item.SKSSQQ;
                            skssqz = item.SKSSQZ;
                        }
                    }
                }
            }
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(BaseDirectory + "/ajax.sword/ajax.sword.SB151zlbsslCtrl_queryKjzdzzDmByDjxh.json");
            re_json = JsonConvert.DeserializeObject<JObject>(str);
            re_json["data"][12]["value"]=skssqq;
            re_json["data"][13]["value"] = skssqz;
            return re_json;

        }
        public JObject queryNsrxxByNsrsbh()
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(BaseDirectory + "/ajax.sword/ajax.sword.GY002CommonCtrl_queryNsrxxByNsrsbh.json");
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            JObject in_jo =(JObject) re_json["data"][1]["trs"][0]["tds"];
            GTXResult gr1 =GTXMethod. GetCompany();
            if (gr1.IsSuccess)
            {
                JObject jo = new JObject();
                jo = JsonConvert.DeserializeObject<JObject>(gr1.Data.ToString());
                if (jo.HasValues)
                {
                    JObject data_jo = jo;
                    in_jo["nsrmc"]["value"] = data_jo["NSRMC"];
                }
            }

            GTXResult gr2 =GTXMethod. GetCompanyPerson();
            if (gr2.IsSuccess)
            {
                JArray ja = new JArray();
                ja = JsonConvert.DeserializeObject<JArray>(gr2.Data.ToString());
                if (ja.Count > 0)
                {
                    JObject data_jo = (JObject)ja[0];
                    in_jo["fddbrsfzjhm"]["value"] = data_jo["IDCardNum"];
                }
            }

            return re_json;
        }

        public JObject reloadNsrzfhy()
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(BaseDirectory + "/ajax.sword/ajax.sword.SB025YhssbCtrl_reloadNsrzfhy.json");
            re_json = JsonConvert.DeserializeObject<JObject>(str);

            JObject in_jo = (JObject)re_json["data"][2];
            GTXResult gr1 = GTXMethod.GetCompany();
            if (gr1.IsSuccess)
            {
                JObject jo = new JObject();
                jo = JsonConvert.DeserializeObject<JObject>(gr1.Data.ToString());
                if (jo.HasValues)
                {
                    JObject data_jo = jo;
                    in_jo["value"] = data_jo["GBHY"];
                }
            }

            return re_json;
        }

    }
}