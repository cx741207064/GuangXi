using JlueTaxSystemGXGS.Code;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;

namespace JlueTaxSystemGXGS
{
    /// <summary>
    /// getreportdata 的摘要说明
    /// </summary>
    public class getreportdata : IHttpHandler, IReadOnlySessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            string _userYSBQCId = (context.Request.Params["userYSBQCId"] == null ? "" : context.Request.Params["userYSBQCId"].ToString());
            string _YSBQCId = (context.Request.Params["YSBQCId"] == null ? "" : context.Request.Params["YSBQCId"].ToString());
            string _bbmc = (context.Request.Params["bbmc"] == null ? "" : context.Request.Params["bbmc"].ToString());
            string _HappenDate = (context.Request.Params["HappenDate"] == null ? "" : context.Request.Params["HappenDate"].ToString());
            string _ssqq = (context.Request.Params["ssqq"] == null ? "" : context.Request.Params["ssqq"].ToString());
            string _ssqz = (context.Request.Params["ssqz"] == null ? "" : context.Request.Params["ssqz"].ToString());

            List<GTXGXUserYSBQCReportData> qcorlinkdata = CommonMethod.GetReportData(_bbmc, _YSBQCId, _userYSBQCId);
            List<ItemValue> headerdatalist = GTXMethod.GetUserReportHeaderData(_bbmc, _HappenDate, _ssqq, _ssqz);
            GTXResult result = GTXMethod.GetUserReportData(_userYSBQCId, _bbmc);
            List<ItemValue> list = new List<ItemValue>();
            if (result.IsSuccess)
            {
                List<GTXGXUserYSBQCReportData> dataList = JsonConvert.DeserializeObject<List<GTXGXUserYSBQCReportData>>(result.Data.ToString());
                if (dataList.Count == 0)
                {
                    foreach (GTXGXUserYSBQCReportData item in qcorlinkdata)
                    {
                        ItemValue obj = new ItemValue();
                        obj.key = item.DataKey;
                        obj.value = item.DataValue;
                        list.Add(obj);
                    }
                    foreach (ItemValue item in headerdatalist)
                    {
                        list.Add(item);
                    }
                }
                else
                {
                    if (_bbmc == "WBJK_SB_ZZS_JMSSBMXB")
                    {
                        foreach (ItemValue item in headerdatalist)
                        {
                            list.Add(item);
                        }
                    }
                    else
                    {
                        foreach (GTXGXUserYSBQCReportData item in dataList)
                        {
                            string[] datavalue = item.DataValue.Replace("@add", "+").Split(';');
                            for (int i = 0; i < datavalue.Length; i++)
                            {
                                ItemValue iv = new ItemValue();
                                string _key = "report1_" + datavalue[i].Split('=')[0];
                                string _value = datavalue[i].Replace(datavalue[i].Split('=')[0] + "=", "");
                                iv.key = _key;
                                if (qcorlinkdata.Where(n => n.DataKey == _key).FirstOrDefault() != null)
                                {
                                    iv.value = qcorlinkdata.Where(n => n.DataKey == _key).FirstOrDefault().DataValue;
                                }
                                else
                                {
                                    iv.value = _value;
                                }
                                list.Add(iv);
                            }
                        }
                    }
                }
                var ds = new
                {
                    List = JsonConvert.SerializeObject(list),
                };
                context.Response.ContentType = "application/json;charset=UTF-8";
                context.Response.Write(JsonConvert.SerializeObject(ds));
            }
            else
            {
                context.Response.ContentType = "application/json;charset=UTF-8";
                context.Response.Write(JsonConvert.SerializeObject(new JObject()));
            }
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