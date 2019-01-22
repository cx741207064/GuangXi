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
        [Route("sword")]
        public HttpResponseMessage GETsword(string ctrl)
        {
            string return_str = "";
            string str = "";
            if (ctrl == "SB025YhssbCtrl_initView")
            {
               System.Web.HttpContext.Current. Response.Redirect("sword." + ctrl + ".aspx");
            }
            else
            {
                str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("sword." + ctrl + ".html"));
            }
            return_str = str;
            return new HttpResponseMessage()
            {
                Content = new StringContent(return_str, System.Text.Encoding.UTF8, "text/html")
            };
        }

        [Route("ajax.sword")]
        [AcceptVerbs("Post","Get")]
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
            }
            if (ctrl != null)
            {
                str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("ajax.sword." + ctrl + ".json"));
            }
            else if (postData_ctrl != "")
            {
                if (zspmDm != "")
                {
                    str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("ajax.sword." + zspmDm + ".json"));
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
                    else if (postData_ctrl == "SB025YhssbCtrl_reloadNsrzfhy")
                    {
                        JObject jo = reloadNsrzfhy();
                        str = JsonConvert.SerializeObject(jo);
                    }
                    else
                    {
                        str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("ajax.sword." + postData_ctrl + ".json"));
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
                str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("form.sword." + ctrl + ".json"));
            }
            else if (postData_ctrl != null)
            {
                str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("form.sword." + postData_ctrl + ".html"));
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

        public JObject queryNsrxxByNsrsbh()
        {
            JObject re_json = new JObject();
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("ajax.sword.GY002CommonCtrl_queryNsrxxByNsrsbh.json"));
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
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("ajax.sword.SB025YhssbCtrl_reloadNsrzfhy.json"));
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