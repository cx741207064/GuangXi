using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Xml;

namespace JlueTaxSystemGuangXiBS.Code
{
    public class GTXMethod
    {
        /// <summary>
        /// 获取企业联系人
        /// </summary>
        /// <returns></returns>
        public static GTXResult GetCompanyPerson()
        {
            string companyId = CurrentUser.GetInstance().GetCurrentCompanyId;
            string path = System.Configuration.ConfigurationManager.AppSettings["Practicepath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/APIPractice/CompanyPerson.asmx/GetByCompanyId?CompanyId=" + companyId;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 获取企业信息表记录
        /// </summary>
        /// <returns></returns>
        public static GTXResult GetCompany()
        {
            string companyId = CurrentUser.GetInstance().GetCurrentCompanyId;
            string path = System.Configuration.ConfigurationManager.AppSettings["Practicepath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/APIPractice/Company.asmx/GetByCompanyId?CompanyId=" + companyId;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        public static GTXResult GetCompanyDetail()
        {
            string companyId = CurrentUser.GetInstance().GetCurrentCompanyId;
            string path = System.Configuration.ConfigurationManager.AppSettings["Practicepath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/APIPractice/Company.asmx/GetDetailByCompanyId?CompanyId=" + companyId;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 获取学员题目信息
        /// </summary>
        /// <param name="id">用户题目id</param>
        /// <returns></returns>
        public static GTXResult GetUserQuestion(string id)
        {
            string userid = CurrentUser.GetInstance().GetCurrentUserId;
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GTXUserQuestion/GetEnter?userid=" + userid + "&questionid=" + id + "&classid=" + classid;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 获取国地税的的应申报清册记录
        /// </summary>
        /// <returns></returns>
        public static GTXResult GetGuangXiYSBQC()
        {
            string userid = CurrentUser.GetInstance().GetCurrentUserId;
            string questionId = CurrentUser.GetInstance().GetCurrentQuestionId;
            string classid = CurrentUser.GetInstance().GetCurrentClassId;

            
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GDTXGuangXiUserYSBQC/GetList?userid=" + userid + "&questionId=" + questionId + "&classid=" + classid;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 国地税通用的保存报表数据
        /// </summary>
        /// <param name="jsonReportData">报表中的name value</param>
        /// <returns></returns>
        public static GTXResult SaveUserReportData(string jsonReportData, string userYsbqcId, string reportCode)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string userId = CurrentUser.GetInstance().GetCurrentUserId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string json = p.HttpPost(path + "/GTX/GDTXGuangXiUserYSBQCReportData/Add", string.Format("classid={0}&jsonReportData={1}&userYsbqcId={2}&reportCode={3}&userId={4}"
                , classid, jsonReportData, userYsbqcId, reportCode, userId));
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 获取国地税通用的已保存的报表数据
        /// </summary>
        /// <returns></returns>
        public static GTXResult GetUserReportData(string userYsbqcId, string reportCode)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string json = p.HttpPost(path + "/GTX/GDTXGuangXiUserYSBQCReportData/Get", string.Format("classid={0}&userYsbqcId={1}&reportCode={2}"
                , classid, userYsbqcId, reportCode));
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 更新应申报清册的状态,已申报
        /// </summary>
        public static GTXResult UpdateYSBQC(string userYSBQCId, string SBZT)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GDTXGuangXiUserYSBQC/UpdateSBZT?Id=" + userYSBQCId + "&classid=" + classid + "&SBZT=" + SBZT;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 更新应申报清册的申报税额
        /// </summary>
        public static GTXResult UpdateSBSE(string userYSBQCId, string SBSE)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GDTXGuangXiUserYSBQC/UpdateSBSE?Id=" + userYSBQCId + "&classid=" + classid + "&SBSE=" + SBSE;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 更新应申报清册的填报情况
        /// </summary>
        public static GTXResult UpdateYSBQCtbzt(string userYSBQCId, string reportCode, string tbzt)
        {
            string nowtbzt = tbzt;

            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GDTXGuangXiUserYSBQC/Updatetbzt?Id=" + userYSBQCId + "&classid=" + classid + "&tbzt=" + nowtbzt;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 更新应申报清册的填报情况
        /// </summary>
        public static GTXResult UpdateYSBQCxbsz(string userYSBQCId, string reportCode, string xbsz)
        {
            string nowxbsz = xbsz;

            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GDTXGuangXiUserYSBQC/Updatexbsz?Id=" + userYSBQCId + "&classid=" + classid + "&xbsz=" + nowxbsz;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 根据userYSBQCId获取国地税的的应申报清册记录
        /// </summary>
        /// <returns></returns>
        public static GTXResult GetAHYSBQCByUserYSBQCId(string UserYSBQCId)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;

            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GDTXAHUserYSBQC/GetModel?Id=" + UserYSBQCId + "&classid=" + classid;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 删除用户报表数据
        /// </summary>
        /// <returns></returns>
        public static GTXResult DeleteUserReportData(string userYsbqcId, string reportCode)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string userId = CurrentUser.GetInstance().GetCurrentUserId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string json = p.HttpPost(path + "/GTX/GDTXGuangXiUserYSBQCReportData/Delete", string.Format("classid={0}&userYsbqcId={1}&userId={2}&reportCode={3}"
                , classid, userYsbqcId, userId, reportCode));
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 获取报表数据配置记录
        /// </summary>
        /// <param name="toReportCode"></param>
        /// <returns></returns>
        public static GTXResult GetAHReportDataConfig(string toReportCode)
        {
            string path = System.Configuration.ConfigurationManager.AppSettings["Practicepath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/APIPractice/GuangXi/ReportDataConfigGuangXi.asmx/GetListByToReportCode?toReportCode=" + toReportCode;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 获取匹配数据
        /// </summary>
        /// <param name="jsonName"></param>
        /// <returns></returns>
        public static GTXResult LoadAHReportData(string jsonName, string useYSBQCId)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string json = p.HttpPost(path + "/GTX/GTXGuangXiUserYSBQCReportData/GetListByUserYSBQCIdAndKey"
                , string.Format("classid={0}&UserYSBQCId={1}&jsonnames={2}", classid, useYSBQCId, jsonName));
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }


        public static JObject getNsrxx(JObject in_jo)
        {
            GTXResult gr1 = GetCompany();
            if (gr1.IsSuccess)
            {
                JObject jo = new JObject();
                jo = JsonConvert.DeserializeObject<JObject>(gr1.Data.ToString());
                if (jo.HasValues)
                {
                    JObject data_jo = jo;
                    in_jo["nsrmc"] = data_jo["NSRMC"];
                    in_jo["nsrsbh"] = data_jo["NSRSBH"];
                    in_jo["djzclxMc"] = data_jo["DJZCLX"];
                    in_jo["zcdz"] = data_jo["ZCDZ"];
                    in_jo["jydz"] = data_jo["SCJYDZ"];
                    in_jo["dhhm"] = data_jo["LXDH"];
                    in_jo["sshy"] = data_jo["GBHY"];
                    in_jo["hymc"] = data_jo["GBHY"];
                    in_jo["zgswskfjmc"] = data_jo["ZGDSSWJFJMC"];

                }
            }

            GTXResult gr2 = GetCompanyPerson();
            if (gr2.IsSuccess)
            {
                JArray ja = new JArray();
                ja = JsonConvert.DeserializeObject<JArray>(gr2.Data.ToString());
                if (ja.Count > 0)
                {
                    JObject data_jo = (JObject)ja[0];
                    in_jo["frxm"] = data_jo["Name"];
                    in_jo["fddbrsfzjhm"] = data_jo["IDCardNum"];

                }
            }

            return in_jo;
        }

        public static GDTXGuangXiUserYSBQC GetYSBQCByBDDM(string BDDM)
        {
            GTXResult resultq = GTXMethod.GetGuangXiYSBQC();
            if (resultq.IsSuccess)
            {
                List<GDTXGuangXiUserYSBQC> ysbqclist = JsonConvert.DeserializeObject<List<GDTXGuangXiUserYSBQC>>(resultq.Data.ToString());

                ysbqclist = ysbqclist.Where(a => a.BDDM == BDDM).ToList();
                return ysbqclist[0];
            }
            else
            {
                return new GDTXGuangXiUserYSBQC();
            }
        }

    }
}