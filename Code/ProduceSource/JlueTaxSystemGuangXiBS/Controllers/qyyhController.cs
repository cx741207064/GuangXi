using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using JlueTaxSystemGuangXiBS.Code;

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
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("selectGnmkByYhidPidSb.xgm.json"));
            JObject return_j = JsonConvert.DeserializeObject<JObject>(str);
            JArray list_ja = (JArray)return_j["list"];
            for (int i = 0; i < list_ja.Count; i++)
            {
                JObject jo = (JObject)list_ja[i];
                if (jo["SJ_MKXKMC"].ToString() != "增值税(一般纳税人适用)" && jo["SJ_MKXKMC"].ToString() != "增值税（小规模纳税人适用）查账征收" && jo["SJ_MKXKMC"].ToString() != "居民企业（查账征收）企业所得税月（季）度申报" && jo["SJ_MKXKMC"].ToString() != "财务报告报送与信息采集2013（小企业会计准则-月季）" && jo["MKXK_MC"].ToString() != "附加税(费)申报（增值税）" && jo["MKXK_MC"].ToString() != "印花税申报")
                {
                    jo["MKXK_URL_PT"] = "";
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
                        JArray list_ja_xgm = JArray.FromObject(list_ja.Where(a => a["SJ_MKXKMC"].ToString() == "增值税（小规模纳税人适用）查账征收" || a["MKXK_MC"].ToString() == "增值税（小规模纳税人适用）查账征收"));

                        for (int j = list_ja.Count - 1; j >= 0; j--)
                        {
                            IEnumerable<JToken> ijt = list_ja_xgm.Where(a => a.ToString().Equals(list_ja[j].ToString()));
                            if (ijt.Count() > 0)
                            {
                                list_ja.RemoveAt(j);
                            }
                        }

                        string s = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("menutree.ybnsr.json"));
                        list_ja.Merge(JsonConvert.DeserializeObject<JArray>(s));

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

    }
}