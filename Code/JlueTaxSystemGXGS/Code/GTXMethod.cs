using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Xml;

namespace JlueTaxSystemGXGS.Code
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
        /// 获取法定代表
        /// </summary>
        /// <returns></returns>
        public static GTXResult GetCompanyFDDB()
        {
            string companyId = CurrentUser.GetInstance().GetCurrentCompanyId;
            string path = System.Configuration.ConfigurationManager.AppSettings["Practicepath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/APIPractice/CompanyHead.asmx/GetByCompanyId?CompanyId=" + companyId;
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
        /// 获取广西国税的的应申报清册记录
        /// </summary>
        /// <returns></returns>
        public static GTXResult GetSCYSBQC()
        {
            string userid = CurrentUser.GetInstance().GetCurrentUserId;
            string questionId = CurrentUser.GetInstance().GetCurrentQuestionId;
            string classid = CurrentUser.GetInstance().GetCurrentClassId;

            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GTXGXUserYSBQC/GetList?userid=" + userid + "&questionId=" + questionId + "&classid=" + classid;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 广西国税通用的保存报表数据
        /// </summary>
        /// <param name="jsonReportData">报表中的name value</param>
        /// <returns></returns>
        public static GTXResult SaveUserReportData(string jsonReportData, string userYsbqcId, string reportCode)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string userId = CurrentUser.GetInstance().GetCurrentUserId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string json = p.HttpPost(path + "/GTX/GTXGXUserYSBQCReportData/Add", string.Format("classid={0}&jsonReportData={1}&userYsbqcId={2}&reportCode={3}&userId={4}"
                , classid, jsonReportData, userYsbqcId, reportCode, userId));
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 获取广西省国税报表表头数据
        /// </summary>
        /// <returns></returns>
        public static List<ItemValue> GetUserReportHeaderData(string reportCode, string HappenDate, string sbqq, string sbqz)
        {
            List<ItemValue> list = new List<ItemValue>();
            ItemValue itemnsrsbh = new ItemValue();
            itemnsrsbh.value = CurrentUser.GetInstance().GetCurrentCompanyNSRSBH;
            ItemValue itemnsrmc = new ItemValue();
            itemnsrmc.value = CurrentUser.GetInstance().GetCurrentCompanyName;
            ItemValue itemHappenDate = new ItemValue();
            itemHappenDate.value = HappenDate;
            ItemValue itemsbqq = new ItemValue();
            itemsbqq.value = sbqq;
            ItemValue itemsbqz = new ItemValue();
            itemsbqz.value = sbqz;
            switch (reportCode)
            {
                case "WBJK_SB_ZZS_2013_FB1":
                    itemnsrsbh.key = "report1_B3";
                    itemnsrmc.key = "report1_B4";
                    itemHappenDate.key = "report1_K3";
                    itemsbqq.key = "report1_K4";
                    itemsbqz.key = "report1_O4";
                    break;
                case "WBJK_SB_ZZS_2013_FB2":
                    itemnsrsbh.key = "report1_B3";
                    itemnsrmc.key = "report1_B4";
                    itemHappenDate.key = "report1_F3";
                    itemsbqq.key = "report1_F4";
                    itemsbqz.key = "report1_I4";
                    break;
                case "WBJK_SB_ZZS_2013_FB3":
                    itemnsrsbh.key = "report1_B3";
                    itemnsrmc.key = "report1_B4";
                    itemHappenDate.key = "report1_F3";
                    itemsbqq.key = "report1_F4";
                    itemsbqz.key = "report1_H4";
                    break;
                case "WBJK_SB_ZZS_2013_FB4":
                    itemnsrsbh.key = "report1_C3";
                    itemnsrmc.key = "report1_C4";
                    itemHappenDate.key = "report1_F3";
                    itemsbqq.key = "report1_F4";
                    itemsbqz.key = "report1_H4";
                    break;
                case "WBJK_SB_ZZS_2016_FB5":
                    itemnsrsbh.key = "report1_B3";
                    itemnsrmc.key = "report1_B4";
                    itemHappenDate.key = "report1_D3";
                    itemsbqq.key = "report1_D4";
                    itemsbqz.key = "report1_F4";
                    break;
                case "WBJK_SB_ZZS_BQDKJXSEJGMXB":
                    itemnsrsbh.key = "report1_B2";
                    itemnsrmc.key = "report1_B3";
                    itemHappenDate.key = "report1_E2";
                    itemsbqq.key = "report1_E3";
                    itemsbqz.key = "report1_G3";
                    break;
                case "WBJK_SB_ZZS_YGZSFFXCSMXB":
                    itemnsrsbh.key = "report1_C2";
                    itemnsrmc.key = "report1_C3";
                    itemHappenDate.key = "report1_N2";
                    itemsbqq.key = "report1_M3";
                    itemsbqz.key = "report1_P3";
                    break;
                case "WBJK_SB_ZZS_2003_FB_GDZCJXSEDK":
                    itemnsrsbh.key = "report1_C4";
                    itemnsrmc.key = "report1_C5";
                    itemHappenDate.key = "report1_F4";
                    itemsbqq.key = "report1_F5";
                    itemsbqz.key = "report1_H5";
                    break;
                case "WBJK_SB_ZZS_JMSSBMXB":
                    itemnsrsbh.key = "report1_B2";
                    itemnsrmc.key = "report1_B3";
                    itemHappenDate.key = "report1_F2";
                    itemsbqq.key = "report1_F3";
                    itemsbqz.key = "report1_H3";
                    break;
                case "WBJK_SB_ZZS_2003_YBNSR":
                    itemnsrsbh.key = "report1_C4";
                    itemnsrmc.key = "report1_C5";
                    itemHappenDate.key = "report1_G4";
                    itemsbqq.key = "report1_G5";
                    itemsbqz.key = "report1_I5";
                    GTXResult resultCompany = GTXMethod.GetCompany();
                    if (resultCompany.IsSuccess)
                    {
                        JObject company = (JObject)JsonConvert.DeserializeObject(resultCompany.Data.ToString());
                        if (company.HasValues)
                        {
                            ItemValue itemZCDZ = new ItemValue("report1_C6", company["ZCDZ"] == null ? "" : company["ZCDZ"].ToString());
                            ItemValue itemSCJYDZ = new ItemValue("report1_G6", company["SCJYDZ"] == null ? "" : company["SCJYDZ"].ToString());
                            ItemValue itemDJZCLX = new ItemValue("report1_H7", company["DJZCLX"] == null ? "" : company["DJZCLX"].ToString());
                            ItemValue itemGBHY = new ItemValue("report1_C8", company["GBHY"] == null ? "" : company["GBHY"].ToString());
                            ItemValue itemLXDH = new ItemValue("report1_H8", company["LXDH"] == null ? "" : company["LXDH"].ToString());
                            list.Add(itemZCDZ);
                            list.Add(itemSCJYDZ);
                            list.Add(itemDJZCLX);
                            list.Add(itemGBHY);
                            list.Add(itemLXDH);
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
                                    ItemValue itemFDDB = new ItemValue("report1_E8", joperson["Name"] == null ? "" : joperson["Name"].ToString());
                                    list.Add(itemFDDB);
                                }
                                else if (joperson["PersonType"] != null && joperson["PersonType"].ToString() == "1")
                                {
                                }
                                else if (joperson["PersonType"] != null && joperson["PersonType"].ToString() == "2")
                                {
                                }
                            }
                        }
                    }
                    break;
                case "SB_SLJSJJ":
                    itemnsrsbh.key = "report1_B2";
                    itemnsrmc.key = "report1_B3";
                    itemHappenDate.key = "report1_F2";
                    itemsbqq.key = "report1_F3";
                    itemsbqz.key = "report1_H3";
                    break;
                case "DJ_CWBB_BA_JBXX":
                    itemnsrsbh.key = "report1_C3";
                    itemnsrmc.key = "report1_F3";
                    GTXResult JBXXCompany = GTXMethod.GetCompany();
                    if (JBXXCompany.IsSuccess)
                    {
                        JObject company = (JObject)JsonConvert.DeserializeObject(JBXXCompany.Data.ToString());
                        if (company.HasValues)
                        {
                            ItemValue itemZCDZ = new ItemValue("report1_C7", company["ZGGSSWJMC"] == null ? "" : company["ZGGSSWJMC"].ToString());
                            list.Add(itemZCDZ);
                        }
                    }
                    GTXResult JBXXlxrres = GTXMethod.GetCompanyPerson();
                    if (JBXXlxrres.IsSuccess)
                    {
                        JArray jrperson = (JArray)JsonConvert.DeserializeObject(JBXXlxrres.Data.ToString());
                        if (jrperson.Count > 0)
                        {
                            for (int i = 0; i < jrperson.Count; i++)
                            {
                                JObject joperson = JObject.Parse(jrperson[i].ToString());
                                if (joperson["PersonType"] != null && joperson["PersonType"].ToString() == "0")
                                {

                                }
                                else if (joperson["PersonType"] != null && joperson["PersonType"].ToString() == "1")
                                {
                                }
                                else if (joperson["PersonType"] != null && joperson["PersonType"].ToString() == "2")
                                {
                                    ItemValue itemJBR = new ItemValue("report1_C4", joperson["Name"] == null ? "" : joperson["Name"].ToString());
                                    list.Add(itemJBR);
                                    ItemValue itemFZR = new ItemValue("report1_C5", joperson["Name"] == null ? "" : joperson["Name"].ToString());
                                    list.Add(itemFZR);
                                }
                            }
                        }
                    }
                    break;
            }
            list.Add(itemnsrsbh);
            list.Add(itemnsrmc);
            list.Add(itemHappenDate);
            list.Add(itemsbqq);
            list.Add(itemsbqz);
            return list;
        }

        /// <summary>
        /// 获取广西省国税通用的已保存的报表数据
        /// </summary>
        /// <returns></returns>
        public static GTXResult GetUserReportData(string userYsbqcId, string reportCode)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string json = p.HttpPost(path + "/GTX/GTXGXUserYSBQCReportData/Get", string.Format("classid={0}&userYsbqcId={1}&reportCode={2}"
                , classid, userYsbqcId, reportCode));
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 更新英申报清册的状态,已申报
        /// </summary>
        public static GTXResult UpdateYSBQC(int userYSBQCId, string SBZT)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GTXGXUserYSBQC/UpdateSBZT?Id=" + userYSBQCId + "&classid=" + classid + "&SBZT=" + SBZT;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 更新英申报清册的填报情况
        /// </summary>
        public static GTXResult UpdateYSBQCtbqk(int userYSBQCId, string reportCode, string tbqk, char change)
        {
            char[] ch = tbqk.ToCharArray();
            switch (reportCode)
            {
                case "WBJK_SB_ZZS_2003_YBNSR":
                    ch[0] = change;
                    break;
                case "WBJK_SB_ZZS_2013_FB1":
                    ch[1] = change;
                    break;
                case "WBJK_SB_ZZS_2013_FB2":
                    ch[2] = change;
                    break;
                case "WBJK_SB_ZZS_2013_FB3":
                    ch[3] = change;
                    break;
                case "WBJK_SB_ZZS_2013_FB4":
                    ch[4] = change;
                    break;
                case "WBJK_SB_ZZS_2016_FB5":
                    ch[5] = change;
                    break;
                case "WBJK_SB_ZZS_BQDKJXSEJGMXB":
                    ch[6] = change;
                    break;
                case "WBJK_SB_ZZS_2003_FB_GDZCJXSEDK":
                    ch[9] = change;
                    break;
                case "WBJK_SB_ZZS_JMSSBMXB":
                    ch[16] = change;
                    break;
                case "SB_SLJSJJ":
                    ch[0] = change;
                    break;
            }
            tbqk = new string(ch);
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GTXGXUserYSBQC/Updatetbqk?Id=" + userYSBQCId + "&classid=" + classid + "&tbqk=" + tbqk;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 根据userYSBQCId获取广西国税的的应申报清册记录
        /// </summary>
        /// <returns></returns>
        public static GTXResult GetSCYSBQCByUserYSBQCId(string UserYSBQCId)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;

            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string fullpath = path + "/GTX/GTXGXUserYSBQC/GetModel?Id=" + UserYSBQCId + "&classid=" + classid;
            string json = p.Get(fullpath);
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 删除用户报表数据
        /// </summary>
        /// <returns></returns>
        public static GTXResult DeleteDLUserReportData(string userYsbqcId, string reportCode)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            string userId = CurrentUser.GetInstance().GetCurrentUserId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string json = p.HttpPost(path + "/GTX/GTXGXUserYSBQCReportData/Delete", string.Format("classid={0}&userYsbqcId={1}&userId={2}&reportCode={3}"
                , classid, userYsbqcId, userId, reportCode));
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        //作废
        public static GTXResult InitDataDF(string UserYSBQCId)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            //string UserYSBQCId = CurrentUser.GetInstance().GetCurrentUserYSBQCId;
            string UserQuestionId = CurrentUser.GetInstance().GetCurrentUserQuestionId;
            string userid = CurrentUser.GetInstance().GetCurrentUserId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string json = p.HttpPost(path + string.Format("/GTX/GTXSCUserYSBQC/InitDataDF")
                , string.Format("classid={0}&UserYSBQCId={1}&UserQuestionId={2}&UserId={3}", classid, UserYSBQCId, UserQuestionId, userid));
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        /// <summary>
        /// 获取匹配数据
        /// </summary>
        /// <param name="jsonName"></param>
        /// <returns></returns>
        public static GTXResult LoadSCReportData(string jsonName, string userYsbqcId)
        {
            string classid = CurrentUser.GetInstance().GetCurrentClassId;
            //string userYsbqcId = "";
            //string userYsbqcId = CurrentUser.GetInstance().GetCurrentUserYSBQCId;
            string path = System.Configuration.ConfigurationManager.AppSettings["tikupath"];
            publicmethod p = new publicmethod();
            string json = p.HttpPost(path + "/GTX/GTXSCUserYSBQCReportData/GetListByUserYSBQCIdAndKey"
                , string.Format("classid={0}&UserYSBQCId={1}&jsonnames={2}", classid, userYsbqcId, jsonName));
            return JsonConvert.DeserializeObject<GTXResult>(json);
        }

        //获取数字申报状态
        public static string getSBZT(string strsbzt)
        {
            string intsbzt = "0";
            switch (strsbzt)
            {
                case "已申报":
                    intsbzt = "1";
                    break;
            }
            return intsbzt;
        }

        //获取数字申报状态
        public static string getdqyisb(string strsbzt)
        {
            string dqyisb = "N";
            switch (strsbzt)
            {
                case "已申报":
                    dqyisb = "Y";
                    break;
            }
            return dqyisb;
        }

        //增加行保存xml转换成json
        public static string XmltoJson(string xml)
        {
            StringBuilder result = new StringBuilder();
            XmlDocument xmldoc = new XmlDocument();
            xmldoc.LoadXml(xml);
            XmlNodeList xnclist = xmldoc.SelectNodes("//modify//c");
            foreach (XmlNode xn in xnclist)
            {
                result.Append(xn.Attributes["name"].Value + "=" + xn.Attributes["value"].Value + ";");
            }
            XmlNodeList xnreclist = xmldoc.SelectNodes("//ins//rec");
            foreach (XmlNode xn in xnreclist)
            {
                string type = (xn.Attributes["did"].Value == "0|1|8|8|8" ? "js" : "ms");
                XmlNodeList xnrec_clist = xn.SelectNodes(".//c");
                foreach (XmlNode xnc in xnrec_clist)
                {
                    result.Append(type + "." + xnc.Attributes["name"].Value + "=" + xnc.Attributes["value"].Value + ";");
                }
            }
            return result.ToString();
        }
    }
}