using JlueTaxSystemGXGS.Code;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace JlueTaxSystemGXGS.WSSBSL
{
    public partial class reportServlet : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string _action = (Request.Params["action"] == null ? "" : Request.Params["action"].ToString());
            if (_action == "11")
            {
                string _paramsstr = (Request.Params["params"] == null ? "" : Request.Params["params"].ToString());
                string _reportcode = _paramsstr.Split(';')[0].Split('=')[1];
                string _userYSBQCId = (Request.Params["cachedId"] == null ? "" : Request.Params["cachedId"].ToString());
                string _data = (Request.Params["data"] == null ? "" : Request.Params["data"].ToString().Replace("\"", "").Replace("\r", "").Replace("\n", ""));
                List<GTXNameValue> nameList = new List<GTXNameValue>();
                GTXNameValue nv = new GTXNameValue();
                nv.key = "data";
                nv.value = _data.Replace("+", "@add");
                if (_reportcode == "WBJK_SB_ZZS_JMSSBMXB")
                {
                    nv.value = GTXMethod.XmltoJson(Request.Params["data"].ToString().Replace("\r", "").Replace("\n", "")).Replace("\"", "");
                }
                nameList.Add(nv);
                GTXResult saveresult = GTXMethod.SaveUserReportData(JsonConvert.SerializeObject(nameList), _userYSBQCId, _reportcode);
                if (saveresult.IsSuccess)
                {
                    GTXResult ysbqcmodelresult = GTXMethod.GetSCYSBQCByUserYSBQCId(_userYSBQCId);
                    {
                        if (ysbqcmodelresult.IsSuccess)
                        {
                            GTXGXUserYSBQC ysbqcmodel = JsonConvert.DeserializeObject<GTXGXUserYSBQC>(ysbqcmodelresult.Data.ToString());
                            if (ysbqcmodel.tbqk != null && ysbqcmodel.tbqk != "")
                            {
                                GTXResult updateresult = GTXMethod.UpdateYSBQCtbqk(int.Parse(_userYSBQCId), _reportcode, ysbqcmodel.tbqk, '1');
                            }
                        }
                    }
                }
            }
        }
    }
}