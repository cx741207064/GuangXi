using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace JlueTaxSystemGuangXiBS.Controllers
{
    [RoutePrefix("server/wssq/ctais2")]
    public class ctais2Controller : ApiController
    {
        [Route("taxerLoginAction.do")]
        public HttpResponseMessage GETtaxerLoginAction(string callback)
        {
            string return_str = "";
            string str = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("taxerLoginAction.json"));
            return_str = callback + "(" + str + ")";
            return new HttpResponseMessage()
            {
                Content = new StringContent(return_str, System.Text.Encoding.UTF8, "application/json")
            };
        }

    }
}
