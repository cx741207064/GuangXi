using JlueTaxSystemGXGS.Code;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace JlueTaxSystemGXGS.WSSBSL.reportJsp
{
    public partial class showReport_zzsJmssbMxb : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string _userYSBQCId = (Request.Params["userYSBQCId"] == null ? "" : Request.Params["userYSBQCId"].ToString());
            string _YSBQCId = (Request.Params["YSBQCId"] == null ? "" : Request.Params["YSBQCId"].ToString());
            string _bbmc = "WBJK_SB_ZZS_JMSSBMXB";
            string _HappenDate = (Request.Params["HappenDate"] == null ? "" : Request.Params["HappenDate"].ToString());
            string _ssqq = (Request.Params["ssqq"] == null ? "" : Request.Params["ssqq"].ToString());
            string _ssqz = (Request.Params["ssqz"] == null ? "" : Request.Params["ssqz"].ToString());
            GTXResult dataR = GTXMethod.GetUserReportData(_userYSBQCId, _bbmc);
            string resultJS = "";
            string resultMS = "";

            string tempStrJS = File.ReadAllText(Server.MapPath("YBNSR_ZZS_JMSSB_YD_TEMP_JS.html"));
            string tempStrMS = File.ReadAllText(Server.MapPath("YBNSR_ZZS_JMSSB_YD_TEMP_MS.html"));

            List<ItemValue> list = new List<ItemValue>();
            if (dataR.IsSuccess)
            {
                string resu = dataR.Data.ToString();
                List<GTXGXUserYSBQCReportData> dataList = JsonConvert.DeserializeObject<List<GTXGXUserYSBQCReportData>>(resu);
                if (dataList.Count > 0)
                {
                    string[] datavalue = dataList[0].DataValue.Split(';');
                    for (int i = 0; i < datavalue.Length; i++)
                    {
                        ItemValue iv = new ItemValue();
                        string _key = datavalue[i].Split('=')[0];
                        string _value = datavalue[i].Replace(datavalue[i].Split('=')[0] + "=", "");
                        iv.key = _key;
                        iv.value = _value;
                        list.Add(iv);
                    }
                }

                //出口免税 
                List<ItemValue> ckmsList = list.Where(n => n.key.Contains("13")).ToList();
                if (ckmsList.Count > 0)
                {
                    string ckmsvalue = ckmsList.Where(n => n.key.Contains("D13")).FirstOrDefault().value;
                    ckmstd.Text = "<td id=\"report1_D13\" colNo=4 sc=\"D13\" modifiable=true writable=true editStyle=\"1\" inputDataType=\"2\" value=\"" + ckmsvalue + "\" format=\"0.00\" digits=\"2\" onclick=\"_displayEditor()\" class=\"report1_1\">" + ckmsvalue + "</td>";
                }
                else
                {
                    ckmstd.Text = "<td id=\"report1_D13\" colNo=4 sc=\"D13\" modifiable=true writable=true editStyle=\"1\" inputDataType=\"2\" value='0.00' format=\"0.00\" digits=\"2\" onclick=\"_displayEditor()\" class=\"report1_1\">0.00</td>";
                }
                //跨境服务
                List<ItemValue> kjfwList = list.Where(n => n.key.Contains("14")).ToList();
                if (kjfwList.Count > 0)
                {
                    string kjfwvalue = kjfwList.Where(n => n.key.Contains("D14")).FirstOrDefault().value;
                    kjfwtd.Text = "<td id=\"report1_D14\" colNo=4 sc=\"D14\" modifiable=true writable=true editStyle=\"1\" inputDataType=\"2\" value=\"" + kjfwvalue + "\" format=\"%230.00\" digits=\"2\" dataValid=\"report1_D14_valid()\" onclick=\"_displayEditor()\" class=\"report1_1\">" + kjfwvalue + "</td>";
                }
                else
                {
                    kjfwtd.Text = "<td id=\"report1_D14\" colNo=4 sc=\"D14\" modifiable=true writable=true editStyle=\"1\" inputDataType=\"2\" value='0.00' format=\"%230.00\" digits=\"2\" dataValid=\"report1_D14_valid()\" onclick=\"_displayEditor()\" class=\"report1_1\">0.00</td>";
                }

                List<ItemValue> jsList = list.Where(n => n.key.Contains("js")).ToList();
                List<ItemValue> msList = list.Where(n => n.key.Contains("ms")).ToList();
                #region 减税数据加载
                List<ItemValue> jsfirstList = list.Where(n => n.key.Contains("8")).ToList();
                if (jsfirstList.Count > 0)
                {
                    resultJS += tempStrJS
                        .Replace("@@trid", "8")
                        .Replace("@@status", "0")
                        .Replace("@@A_value", jsfirstList.Where(n => n.key.Contains("A")).FirstOrDefault().value)
                        .Replace("@@C_value", jsfirstList.Where(n => n.key.Contains("C")).FirstOrDefault().value)
                        .Replace("@@D_value", jsfirstList.Where(n => n.key.Contains("D")).FirstOrDefault().value)
                        .Replace("@@E_value", jsfirstList.Where(n => n.key.Contains("E")).FirstOrDefault().value)
                        .Replace("@@F_value", jsfirstList.Where(n => n.key.Contains("F")).FirstOrDefault().value)
                        .Replace("@@G_value", jsfirstList.Where(n => n.key.Contains("G")).FirstOrDefault().value)
                        .Replace("@@H_value", jsfirstList.Where(n => n.key.Contains("H")).FirstOrDefault().value)
                        .Replace("@@I_value", "");
                }
                else
                {
                    resultJS += tempStrJS
                        .Replace("@@trid", "8")
                        .Replace("@@status", "0")
                        .Replace("@@A_value", "")
                        .Replace("@@C_value", "1")
                        .Replace("@@D_value", "0.00")
                        .Replace("@@E_value", "0.00")
                        .Replace("@@F_value", "0.00")
                        .Replace("@@G_value", "0.00")
                        .Replace("@@H_value", "0.00")
                        .Replace("@@I_value", "");
                }
                if (jsList.Count > 0)
                {
                    List<string> strlist = new List<string>();
                    foreach (ItemValue iv in jsList)
                    {
                        if (!strlist.Contains(iv.key.Substring(iv.key.Length - 2, 2)))
                        {
                            strlist.Add(iv.key.Substring(iv.key.Length - 2, 2));
                            List<ItemValue> templist = list.Where(n => n.key.Contains(iv.key.Substring(iv.key.Length - 2, 2))).ToList();
                            resultJS += tempStrJS
                                .Replace("@@trid", iv.key.Substring(iv.key.Length - 2, 2))
                                .Replace("@@status", "3")
                                .Replace("@@A_value", templist.Where(n => n.key.Contains("A")).FirstOrDefault().value)
                                .Replace("@@C_value", templist.Where(n => n.key.Contains("C")).FirstOrDefault().value)
                                .Replace("@@D_value", templist.Where(n => n.key.Contains("D")).FirstOrDefault().value)
                                .Replace("@@E_value", templist.Where(n => n.key.Contains("E")).FirstOrDefault().value)
                                .Replace("@@F_value", templist.Where(n => n.key.Contains("F")).FirstOrDefault().value)
                                .Replace("@@G_value", templist.Where(n => n.key.Contains("G")).FirstOrDefault().value)
                                .Replace("@@H_value", templist.Where(n => n.key.Contains("H")).FirstOrDefault().value)
                                .Replace("@@I_value", "");
                        }
                    }
                }
                ltrJS.Text = resultJS;
                #endregion


                #region 免税数据加载
                List<ItemValue> msfirstList = list.Where(n => n.key.Contains("15")).ToList();
                if (msfirstList.Count > 0)
                {
                    resultMS += tempStrMS
                        .Replace("@@trid", "15")
                        .Replace("@@status", "0")
                        .Replace("@@A_value", msfirstList.Where(n => n.key.Contains("A")).FirstOrDefault().value)
                        .Replace("@@C_value", msfirstList.Where(n => n.key.Contains("C")).FirstOrDefault().value)
                        .Replace("@@D_value", msfirstList.Where(n => n.key.Contains("D")).FirstOrDefault().value)
                        .Replace("@@E_value", msfirstList.Where(n => n.key.Contains("E")).FirstOrDefault().value)
                        .Replace("@@F_value", msfirstList.Where(n => n.key.Contains("F")).FirstOrDefault().value)
                        .Replace("@@G_value", msfirstList.Where(n => n.key.Contains("G")).FirstOrDefault().value)
                        .Replace("@@H_value", msfirstList.Where(n => n.key.Contains("H")).FirstOrDefault().value)
                        .Replace("@@I_value", "");
                }
                else
                {
                    resultMS = tempStrMS
                        .Replace("@@trid", "15")
                        .Replace("@@status", "0")
                        .Replace("@@A_value", "")
                        .Replace("@@C_value", "4")
                        .Replace("@@D_value", "0.00")
                        .Replace("@@E_value", "0.00")
                        .Replace("@@F_value", "0.00")
                        .Replace("@@G_value", "0.00")
                        .Replace("@@H_value", "0.00")
                        .Replace("@@I_value", "");
                }
                if (msList.Count > 0)
                {
                    List<string> strlist = new List<string>();
                    foreach (ItemValue iv in msList)
                    {
                        if (!strlist.Contains(iv.key.Substring(iv.key.Length - 2, 2)))
                        {
                            strlist.Add(iv.key.Substring(iv.key.Length - 2, 2));
                            List<ItemValue> templist = list.Where(n => n.key.Contains(iv.key.Substring(iv.key.Length - 2, 2))).ToList();
                            resultMS += tempStrMS
                                .Replace("@@trid", iv.key.Substring(iv.key.Length - 2, 2))
                                .Replace("@@status", "3")
                                .Replace("@@A_value", templist.Where(n => n.key.Contains("A")).FirstOrDefault().value)
                                .Replace("@@C_value", templist.Where(n => n.key.Contains("C")).FirstOrDefault().value)
                                .Replace("@@D_value", templist.Where(n => n.key.Contains("D")).FirstOrDefault().value)
                                .Replace("@@E_value", templist.Where(n => n.key.Contains("E")).FirstOrDefault().value)
                                .Replace("@@F_value", templist.Where(n => n.key.Contains("F")).FirstOrDefault().value)
                                .Replace("@@G_value", templist.Where(n => n.key.Contains("G")).FirstOrDefault().value)
                                .Replace("@@H_value", templist.Where(n => n.key.Contains("H")).FirstOrDefault().value)
                                .Replace("@@I_value", "");
                        }
                    }
                }
                ltrMS.Text = resultMS;
                #endregion
            }
        }
    }
}