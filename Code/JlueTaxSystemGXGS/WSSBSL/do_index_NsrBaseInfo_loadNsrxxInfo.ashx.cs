using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Web.SessionState;
using JlueTaxSystemGXGS.Code;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// do_index_NsrBaseInfo_loadNsrxxInfo 的摘要说明
    /// </summary>
    public class do_index_NsrBaseInfo_loadNsrxxInfo : IHttpHandler, IReadOnlySessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            string companyinfo = File.ReadAllText(context.Server.MapPath("/WSSBSL/JSON/do_index_NsrBaseInfo_loadNsrxxInfo.json"));

            GTXResult resultCompany = GTXMethod.GetCompany();
            if (resultCompany.IsSuccess)
            {
                JObject company = (JObject)JsonConvert.DeserializeObject(resultCompany.Data.ToString());
                if (company.HasValues)
                {
                    companyinfo = companyinfo
                        .Replace("@@NSRSBH", company["NSRSBH"] == null ? "" : company["NSRSBH"].ToString())
                        .Replace("@@NSRMC", company["NSRMC"] == null ? "" : company["NSRMC"].ToString())
                        .Replace("@@DJZCLX", company["DJZCLX"] == null ? "" : company["DJZCLX"].ToString())
                        .Replace("@@ZCDZ_YZBM", company["ZCDZ_YZBM"] == null ? "" : company["ZCDZ_YZBM"].ToString())
                        .Replace("@@ZGGSSWJMC", company["ZGGSSWJMC"] == null ? "" : company["ZGGSSWJMC"].ToString())
                        .Replace("@@GBHY", company["GBHY"] == null ? "" : company["GBHY"].ToString())
                        .Replace("@@SYKJZD", company["SYKJZD"] == null ? "" : company["SYKJZD"].ToString())
                        .Replace("@@ZCDZ", company["ZCDZ"] == null ? "" : company["ZCDZ"].ToString())
                        .Replace("@@SCJYDZ", company["SCJYDZ"] == null ? "" : company["SCJYDZ"].ToString());

                }
            }
            GTXResult lxrres = GTXMethod.GetCompanyPerson();
            if (lxrres.IsSuccess)
            {
                JArray jrperson = (JArray)JsonConvert.DeserializeObject(lxrres.Data.ToString());
                if (jrperson.Count > 0)
                {
                    for (int i = 0; i < jrperson.Count; i++)
                    {
                        JObject joperson = JObject.Parse(jrperson[i].ToString());
                        if (joperson["PersonType"] != null && joperson["PersonType"].ToString() == "0")
                        {
                            companyinfo = companyinfo.Replace("@@FDDB", joperson["Name"] == null ? "" : joperson["Name"].ToString());
                        }
                        else if (joperson["PersonType"] != null && joperson["PersonType"].ToString() == "1")
                        {
                        }
                        else if (joperson["PersonType"] != null && joperson["PersonType"].ToString() == "2")
                        {
                        }
                    }
                }
                else
                {
                    companyinfo = companyinfo.Replace("@@FDDB", "")
                                .Replace("@@FDDH", "");
                }
            }
            context.Response.ContentType = "application/json;charset=UTF-8";
            context.Response.Write(companyinfo);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}