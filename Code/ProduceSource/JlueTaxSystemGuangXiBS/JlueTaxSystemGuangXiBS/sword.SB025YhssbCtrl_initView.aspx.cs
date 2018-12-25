using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JlueTaxSystemGuangXiBS.Code;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

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
                }
            }

        }
    }
}