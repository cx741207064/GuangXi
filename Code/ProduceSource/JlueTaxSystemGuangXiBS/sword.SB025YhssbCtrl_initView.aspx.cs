using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JlueTaxSystemGuangXiBS.Code;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Web.Services;  
namespace JlueTaxSystemGuangXiBS
{
    public partial class sword_SB025YhssbCtrl_initView : System.Web.UI.Page
    {
       public string tbrq = "";
       public string rqQ = "";
       public string rqZ = "";
       public string nsrsbh = "";
       public string slrq = "";
       public string slswjg = "";
       public string nsrmc = "";
       public string gbhy = "";
       public string djzclx = "";
        protected void Page_Load(object sender, EventArgs e)
        {
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
                            tbrq = item.HappenDate;
                            slrq = item.HappenDate;
                            rqQ = item.SKSSQQ;
                            rqZ = item.SKSSQZ;
                        }
                    }
                }
            }

            GTXResult gr1 =GTXMethod. GetCompany();
            if (gr1.IsSuccess)
            {
                JObject jo = new JObject();
                jo = JsonConvert.DeserializeObject<JObject>(gr1.Data.ToString());
                if (jo.HasValues)
                {
                    JObject data_jo = jo;
                    nsrsbh = data_jo["NSRSBH"].ToString();
                    slswjg = data_jo["ZGDSSWJFJMC"].ToString();
                    nsrmc = data_jo["NSRMC"].ToString();
                    gbhy = data_jo["GBHY"].ToString();
                    djzclx = data_jo["DJZCLX"].ToString();
                }
            }
         
        }


        [WebMethod]
        public  JObject GetJBXX()
        {
            JObject in_jo = new JObject();
            in_jo.Add("tbrq", tbrq);
            in_jo.Add("slrq", slrq);
            in_jo.Add("rqQ", rqQ);
            in_jo.Add("rqZ", rqZ);
            in_jo.Add("nsrsbh", nsrsbh);
            in_jo.Add("slswjg", slswjg);
            in_jo.Add("nsrmc", nsrmc);
            return in_jo;
        }






    }
}