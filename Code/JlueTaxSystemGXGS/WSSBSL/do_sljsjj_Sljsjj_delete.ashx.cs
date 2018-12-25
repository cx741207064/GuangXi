using JlueTaxSystemGXGS.Code;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.SessionState;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// do_sljsjj_Sljsjj_delete 的摘要说明
    /// </summary>
    public class do_sljsjj_Sljsjj_delete : IHttpHandler,IReadOnlySessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            string _params = (context.Request.Params["params"] == null ? "" : context.Request.Params["params"].ToString());
            string _reportcode = _params.Split(';')[0].Split('=')[1];
            string _userYSBQCId = (context.Request.Params["cachedId"] == null ? "" : context.Request.Params["cachedId"].ToString());
            GTXResult deldata = GTXMethod.DeleteDLUserReportData(_userYSBQCId, _reportcode);
            String json = File.ReadAllText(context.Server.MapPath("/WSSBSL/JSON/do_zzs2013_Zzs2013_delete.json"));
            if (deldata.IsSuccess)
            {
                GTXResult ysbqcmodelresult = GTXMethod.GetSCYSBQCByUserYSBQCId(_userYSBQCId);
                {
                    if (ysbqcmodelresult.IsSuccess)
                    {
                        GTXGXUserYSBQC ysbqcmodel = JsonConvert.DeserializeObject<GTXGXUserYSBQC>(ysbqcmodelresult.Data.ToString());
                        GTXResult updateresult = GTXMethod.UpdateYSBQCtbqk(int.Parse(_userYSBQCId), _reportcode, ysbqcmodel.tbqk, '0');
                        if (updateresult.IsSuccess)
                        {
                            json = json.Replace("@@Bool", "Y");
                        }
                    }
                }
            }
            context.Response.ContentType = "application/json";
            context.Response.Write(json);
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