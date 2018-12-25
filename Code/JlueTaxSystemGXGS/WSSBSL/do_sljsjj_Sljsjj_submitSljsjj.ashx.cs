using JlueTaxSystemGXGS.Code;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.SessionState;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// do_sljsjj_Sljsjj_submitSljsjj 的摘要说明
    /// </summary>
    public class do_sljsjj_Sljsjj_submitSljsjj : IHttpHandler, IReadOnlySessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            string _userYSBQCId = (context.Request.Params["userYSBQCId"] == null ? "" : context.Request.Params["userYSBQCId"].ToString());

            string result = "[\"N\"]";
            GTXResult ysbqcmodelresult = GTXMethod.GetSCYSBQCByUserYSBQCId(_userYSBQCId);
            {
                if (ysbqcmodelresult.IsSuccess)
                {
                    GTXGXUserYSBQC ysbqcmodel = JsonConvert.DeserializeObject<GTXGXUserYSBQC>(ysbqcmodelresult.Data.ToString());
                    if (Regex.Matches(ysbqcmodel.tbqk, @"1").Count >= 1)
                    {
                        GTXResult upres = GTXMethod.UpdateYSBQC(int.Parse(_userYSBQCId), "已申报");
                        if (upres.IsSuccess)
                        {
                            result = "[\"Y\",\"申报成功，请勿重复申报!(模拟系统不支持缴款功能。)\"]";
                        }
                    }
                }
            }
            context.Response.ContentType = "application/json";
            context.Response.Write(result);
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