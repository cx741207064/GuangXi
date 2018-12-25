//using JlueMakeBill.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace JlueTaxSystemGXGS.Code
{
    /// <summary>
    /// 
    /// </summary>
    public class CommonMethod
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="reportCode"></param>
        /// <param name="ysbqcId"></param>
        /// <param name="useYSBQCId"></param>
        /// <returns></returns>
        public static List<GTXGXUserYSBQCReportData> GetReportData(string reportCode, string ysbqcId, string useYSBQCId)
        {
            //GTXResult reportDataConfig = GTXMethod.GetNMGReportDataConfig(reportCode);
            //string dzjsonName = JsonConvert.SerializeObject(new JArray());
            //string gsjsonName = JsonConvert.SerializeObject(new JArray());
            //string lsjsonName = JsonConvert.SerializeObject(new JArray());
            //List<GTXSCReportDataConfig> configData = new List<GTXSCReportDataConfig>();//需要排除的name(包括等值匹配、公式匹配)
            //List<GTXSCReportDataConfig> dzConfigData = new List<GTXSCReportDataConfig>();//等值匹配
            //List<GTXSCReportDataConfig> gsConfigData = new List<GTXSCReportDataConfig>();//公式匹配
            //List<GTXSCUserYSBQCReportData> dzReportData = new List<GTXSCUserYSBQCReportData>();
            //List<GTXSCUserYSBQCReportData> gsReportData = new List<GTXSCUserYSBQCReportData>();
            List<GTXGXUserYSBQCReportData> currentReportData = new List<GTXGXUserYSBQCReportData>();//学员当前报表匹配好的数据集合
            //#region 获取期初累计的数据集合
            //List<GTXSCReportQiChu> qichuReportData = new List<GTXSCReportQiChu>();//报表期初累计数据
            //GTXResult qichuList = GTXMethod.LoadDLReportQiChu("", ysbqcId, reportCode);
            //if (qichuList.IsSuccess)
            //{
            //    qichuReportData = JsonConvert.DeserializeObject<List<GTXSCReportQiChu>>(qichuList.Data.ToString());
            //    foreach (GTXSCReportQiChu item in qichuReportData)
            //    {
            //        GTXSCUserYSBQCReportData newData = new GTXSCUserYSBQCReportData();
            //        newData.ReportCode = reportCode;
            //        newData.UserId = CurrentUser.GetInstance().GetCurrentUserId;
            //        newData.UserYSBQCId = int.Parse(useYSBQCId);
            //        newData.DataKey = item.Name;
            //        newData.DataValue = item.Value;
            //        currentReportData.Add(newData);
            //    }
            //}
            //#endregion
            //#region 获取等值匹配和公式匹配的数据集合
            //if (reportDataConfig.IsSuccess)
            //{
            //    configData = JsonConvert.DeserializeObject<List<GTXSCReportDataConfig>>(reportDataConfig.Data.ToString());
            //    dzConfigData = configData.Where(o => o.ConfigType.Equals(1)).ToList();
            //    gsConfigData = configData.Where(o => o.ConfigType.Equals(2)).ToList();
            //    #region 获取等值匹配数据集合
            //    var dzobj = from n in dzConfigData
            //                select new
            //                {
            //                    reportCode = n.FromReportCode,
            //                    name = n.FromReportName
            //                };
            //    dzjsonName = JsonConvert.SerializeObject(dzobj);
            //    GTXResult dzloadData = GTXMethod.LoadNMGReportData(dzjsonName);
            //    if (dzloadData.IsSuccess)
            //    {
            //        dzReportData = JsonConvert.DeserializeObject<List<GTXSCUserYSBQCReportData>>(dzloadData.Data.ToString());
            //        if (dzReportData.Count > 0)
            //        {
            //            foreach (GTXSCUserYSBQCReportData data in dzReportData)
            //            {
            //                foreach (GTXSCReportDataConfig item in dzConfigData)
            //                {
            //                    if (item.FromReportName == (data.DataKey) && data.ReportCode == item.FromReportCode)
            //                    {
            //                        GTXSCUserYSBQCReportData newData = new GTXSCUserYSBQCReportData();
            //                        newData.ReportCode = reportCode;
            //                        newData.UserId = CurrentUser.GetInstance().GetCurrentUserId;
            //                        newData.DataKey = item.ToReportName;
            //                        newData.DataValue = data.DataValue;
            //                        currentReportData.Add(newData);
            //                    }
            //                }
            //            }
            //        }
            //    }
            //    #endregion
            //    #region 获取公式匹配数据集合
            //    foreach (GTXSCReportDataConfig item in gsConfigData)
            //    {
            //        string value = "0";
            //        string[] name = item.Parameter.Split('#');
            //        JArray ja = new JArray();
            //        for (int i = 0; i < name.Length; i++)
            //        {
            //            JObject jo = new JObject();
            //            jo.Add("reportCode", item.FromReportCode);
            //            jo.Add("name", name[i]);
            //            ja.Add(jo);
            //        }
            //        gsjsonName = JsonConvert.SerializeObject(ja);
            //        GTXResult gsloadData = GTXMethod.LoadNMGReportData(gsjsonName);
            //        if (gsloadData.IsSuccess)
            //        {
            //            gsReportData = JsonConvert.DeserializeObject<List<GTXSCUserYSBQCReportData>>(gsloadData.Data.ToString());
            //        }

            //        foreach (GTXSCUserYSBQCReportData oitem in gsReportData)
            //        {
            //            item.FromReportName = item.FromReportName.Replace(oitem.DataKey, oitem.DataValue);
            //        }
            //        if (gsReportData.Count != 0)
            //        {
            //            value = new DataTable().Compute(item.FromReportName, "").ToString();
            //        }
            //        GTXSCUserYSBQCReportData newData = new GTXSCUserYSBQCReportData();
            //        newData.ReportCode = reportCode;
            //        newData.UserId = CurrentUser.GetInstance().GetCurrentUserId;
            //        newData.DataKey = item.ToReportName;
            //        newData.DataValue = value;
            //        currentReportData.Add(newData);
            //    }
            //    #endregion
            //}
            //#endregion
            return currentReportData;
        }
    }
}