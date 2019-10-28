using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using JlueTaxSystemGuangXiBS.Code;
using JlueTaxSystemGuangXiBS.Models;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    [RoutePrefix("web/server/platform/ptgl/qyyh")]
    public class qyyhController : ApiController
    {
        [Route("selectGnmkByYhid.do")]
        public HttpResponseMessage selectGnmkByYhid(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("selectGnmkByYhid.json"));
            return_str = callback + "(" + str + ")";

            return new HttpResponseMessage()
            {
                Content = new StringContent(return_str, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [Route("selectGnmkByYhidPidNoSb.do")]
        public HttpResponseMessage selectGnmkByYhidPidNoSb(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("selectGnmkByYhidPidNoSb.json"));
            return_str = callback + "(" + str + ")";
            return new HttpResponseMessage()
            {
                Content = new StringContent(return_str, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [Route("selectGnmkByYhidPidSb.do")]
        public HttpResponseMessage selectGnmkByYhidPidSb(string callback)
        {
            string return_str = "";
            string str = "";
            Nsrxx xx = getNsrxx();
            //小规模纳税人
            if (xx.TaxPayerType == 2)
            {
                str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("selectGnmkByYhidPidSb.xgm.json"));
            }
            else if (xx.TaxPayerType == 1)
            {
                str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("selectGnmkByYhidPidSb.ybnsr.json"));
            }

            JObject return_j = JsonConvert.DeserializeObject<JObject>(str);
            JArray list_ja = (JArray)return_j["list"];
            for (int i = 0; i < list_ja.Count; i++)
            {
                JObject jo = (JObject)list_ja[i];
                if (jo["SJ_MKXKMC"].ToString() != "增值税(一般纳税人适用)" && jo["SJ_MKXKMC"].ToString() != "增值税（小规模纳税人适用）查账征收" && jo["SJ_MKXKMC"].ToString() != "居民企业（查账征收）企业所得税月（季）度申报" && jo["SJ_MKXKMC"].ToString() != "财务报告报送与信息采集2013（小企业会计准则-月季）" && jo["MKXK_MC"].ToString() != "附加税(费)申报（增值税）" && jo["MKXK_MC"].ToString() != "印花税申报" && jo["MKXK_MC"].ToString() != "财务报告报送与信息采集")
                {
                    jo["MKXK_URL_PT"] = "/FunctionNotOpen.html";
                }
                else
                {
                    if (jo["MKXK_URL_PT"].ToString() != "")
                    {
                        Uri uri = new Uri(jo["MKXK_URL_PT"].ToString());
                        jo["MKXK_URL_PT"] = "http://" + Request.RequestUri.Authority + uri.PathAndQuery;
                    }
                }

                if (jo["XMFL_DM"].ToString() == "dzswj.ckts")
                {
                    jo["XMFL_DM"] = "";
                }
            }

            GTXResult resultq = GTXMethod.GetGuangXiYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXGuangXiUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXGuangXiUserYSBQC>>(resultq.Data.ToString());
                if (ysbqclist.Count > 0)
                {
                    if (ysbqclist.Where(a => a.BDDM == "XGMZZS").ToList().Count == 1)
                    {
                    }
                    else
                    {

                    }
                }
            }

            return_str = callback + "(" + JsonConvert.SerializeObject(return_j) + ")";
            return new HttpResponseMessage()
            {
                Content = new StringContent(return_str, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [Route("selectGnmkByYhidPid.do")]
        public HttpResponseMessage selectGnmkByYhidPid(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("selectGnmkByYhidPid.json"));
            return_str = callback + "(" + str + ")";
            return new HttpResponseMessage()
            {
                Content = new StringContent(return_str, System.Text.Encoding.UTF8, "application/json")
            };
        }

        private Nsrxx getNsrxx()
        {
            Nsrxx X = new Nsrxx();
            GTXResult gr1 = GTXMethod.GetCompanyDetail();
            if (gr1.IsSuccess)
            {
                JObject jo = new JObject();
                jo = JsonConvert.DeserializeObject<JObject>(gr1.Data.ToString());
                JToken Company = jo["Company"];
                if (Company.HasValues)
                {
                    JToken data_jo = Company;
                    X.NSRMC = data_jo["NSRMC"].ToString();
                    X.NSRSBH = data_jo["NSRSBH"].ToString();
                    X.DJZCLX = data_jo["DJZCLX"].ToString();
                    X.ZCDZ = data_jo["ZCDZ"].ToString();
                    X.SCJYDZ = data_jo["SCJYDZ"].ToString();
                    X.LXDH = data_jo["LXDH"].ToString();
                    X.GBHY = data_jo["GBHY"].ToString();
                    X.ZGDSSWJFJMC = data_jo["ZGDSSWJFJMC"].ToString();
                    X.TaxPayerType = int.Parse(data_jo["TaxPayerType"].ToString());
                    X.TaxPayerTypeName = data_jo["TaxPayerTypeName"].ToString();
                    X.BusinessType = int.Parse(data_jo["BusinessType"].ToString());
                    X.BusinessTypeName = data_jo["BusinessTypeName"].ToString();
                }
            }

            GTXResult gr2 = GTXMethod.GetCompanyPerson();
            if (gr2.IsSuccess)
            {
                JArray ja = new JArray();
                ja = JsonConvert.DeserializeObject<JArray>(gr2.Data.ToString());
                if (ja.Count > 0)
                {
                    JObject data_jo = (JObject)ja[0];
                    X.Name = data_jo["Name"].ToString();
                    X.IDCardNum = data_jo["IDCardNum"].ToString();
                }
            }
            return X;
        }

    }
}