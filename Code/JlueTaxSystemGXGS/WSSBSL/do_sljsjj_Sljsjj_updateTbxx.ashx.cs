using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JlueTaxSystemGXGS.WSSBSL
{
    /// <summary>
    /// do_sljsjj_Sljsjj_updateTbxx 的摘要说明
    /// </summary>
    public class do_sljsjj_Sljsjj_updateTbxx : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string _type = (context.Request.Params["type"] == null ? "" : context.Request.Params["type"].ToString());
            string tbqk = "0";
            if (_type == "save")
                tbqk = "1";
            context.Response.ContentType = "application/json";
            context.Response.Write("[\"Y\", \"" + tbqk + "\", \"15753071\"]");
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